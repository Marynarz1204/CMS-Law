import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { CategoryDto, ContactInfoDto, PInput, PageWrapper, PictureDto, Select, axiosBaseConfig, baseApiUrl, mapObjectToSelect, sortFunc } from './common';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const ContactInfoPage = () => {
    const
        [data, setData] = useState([]),
        [showNew, setNew] = useState(false),
        [contacts, setContacts] = useState<ContactInfoDto[]>(),
        [pictures, setPictures] = useState<PictureDto[]>(),
        getContacts = async () => {
            let res = await axios.get(baseApiUrl + `/GetAllContactInfoList`, axiosBaseConfig)
            setContacts(res.data.sort((a: any, b: any) => sortFunc(a, b)))
        },
        getpictures = async () => {
            let res = await axios.get(baseApiUrl + `/GetAllPictureList`, axiosBaseConfig)
            setPictures(res.data)
        },

        addNew = <ContactRow item={null} isNew={true} contacts={contacts} pictures={pictures} refreshFunc={getContacts} showFunc={setNew} />





    React.useEffect(() => {
        getContacts()
        getpictures()
    }, [])
    return <div className='card mb-4' >
        <div className="form-top-container">{!showNew && <div className="btn btn-white btn-sm mb-0 btn-save" onClick={() => setNew(true)} >Add new</div>}</div>
        <div className="generic-list">
            <div className="contact-row row">
                <div className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>id</div>
                <div className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>text</div>
                <div className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>visible</div>
                <div className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>picture</div>
                <div className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>options</div>
            </div>
            {showNew && addNew}
            {contacts && contacts.map((item: ContactInfoDto, idx: any) => <ContactRow pictures={pictures} key={idx} item={item} isNew={false} contacts={contacts} refreshFunc={getContacts} />)}
        </div>
    </div>
}
const ContactRow = (props: { item: ContactInfoDto, isNew: boolean, pictures: any, contacts: any[], refreshFunc: any, showFunc?: any }) => {
    const
        { item, isNew, contacts = [], refreshFunc, showFunc, pictures } = props,
        contactsData = mapObjectToSelect(contacts, "text", "id"),
        picturesData = mapObjectToSelect(pictures, "name", "pictureId"),
        [pickedBanners, setPickedBanners] = useState([]),
        { register, handleSubmit, formState, getValues } = useForm({
            defaultValues: { ...item }
        }),
        makeItem = (data: any) => {
            return {
                id: item?.id || -1,
                isVisible: data?.isVisible || false,
                pictureIdList: [data?.pictureIdList / 1] || [],
                text: data?.text || "",
            } as ContactInfoDto
        },
        addItem = async (data: any) => {
            let item = makeItem(data)
            const url = baseApiUrl + "/AddContactInfo";
            await axios.post(url, item, axiosBaseConfig)
            refreshFunc()
            showFunc(false)
            location.reload()
        },
        deleteItem = async (data: any) => {
            let item = makeItem(data)
            const url = baseApiUrl + "/DeleteContactInfo/" + item.id;
            await axios.delete(url, axiosBaseConfig)
            refreshFunc()
        },
        editItem = async (data: any) => {
            let item = makeItem(data)
            const url = baseApiUrl + "/UpdateContactInfo";
            await axios.patch(url, item, axiosBaseConfig)
            refreshFunc()
        }

    return <form className='' >
        <div className="form-content ">
            <div className="contact-row row">
                <div className="id">{item?.id || -1}</div>
                <PInput register={{ ...register("text") }} inputProps={{ type: 'text' }} />
                <PInput register={{ ...register("isVisible") }} inputProps={{ type: 'checkbox' }} />
                <div>
                    {picturesData.length > 0 &&
                        <Select register={register} data={picturesData} defaultValue={item?.pictureIdList[0] || null} name={"pictureIdList"} />
                    }
                </div>
                <div className="buttons-container">
                    {isNew ?
                        <div className="btn btn-white btn-sm w-100 mb-0 btn-save" onClick={(e) => addItem(getValues())}>Add</div>
                        : <>
                            <div className="btn btn-white btn-sm w-100 mb-0 btn-save" onClick={(e) => editItem(getValues())}>Edit</div>
                            <div className="btn btn-white btn-sm w-100 mb-0 btn-delete" onClick={(e) => deleteItem(getValues())}>Delete</div></>}
                </div>

            </div>
        </div>
    </form>
}


const root = document.getElementById("react_root");
ReactDOM.render(<ContactInfoPage />, root);
