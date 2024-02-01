import axios, * as Axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as ReactDOM from 'react-dom';
import { Editor } from '@tinymce/tinymce-react';
import { CategoryDto, KeyValueDto, MenuElementDto, PageDto, SocialMediaDto, baseApiUrl, prepareSocialIcon } from './common';

export const PageWrapper = (props: { children?: any, className?: string }) => {
    const
        { children, className } = props,
        [data, setData] = useState()
    return <>

        <Header className={className} />
        <div className={["react-page-container", className + "-header"].join(" ")}>
            {children}
        </div>
        <Footer className={className} />
    </>
}

const Header = (props: { className?: string }) => {
    const
        [menuElements, setMenuElements] = useState<{ parent: MenuElementDto, children: MenuElementDto[] }[]>(),
        [phone, setPhone] = useState<KeyValueDto>(),
        [address, setAddress] = useState<KeyValueDto>(),
        [socials, setSocials] = useState<SocialMediaDto[]>(),
        [logo, setLogo] = useState<KeyValueDto>(),
        getMenuElements = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleMenuElementList`)
            let obj = [] as any[]
            if (res.status == 200) {
                res.data.forEach((el: MenuElementDto) => {
                    if (el.parentMenuElementId < 0 || el.parentMenuElementId == null) {
                        obj.push({ parent: el, children: [] })
                    }

                })
                res.data.forEach((el: MenuElementDto) => {
                    if (el.parentMenuElementId > 0 || el.parentMenuElementId != null) {
                        let index = obj.findIndex((i: any) => i.parent.menuElementId == el.parentMenuElementId)
                        obj[index].children.push(el)
                    }
                })

                setMenuElements(obj)
            }
        },
        getPhone = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/phone`)
            setPhone(res.data)
        },
        getAddress = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/address`)
            setAddress(res.data)
        },
        getSocials = async () => {
            let res = await axios.get(baseApiUrl + `/GetAllMainSocialMedia`)
            setSocials(res.data)
        },
        getLogo = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/main_logo`)
            let t = res.data as KeyValueDto;
            let s = t.value.split("/")
            s[2] = "Full"
            t.value = s.join("/")
            setLogo(t)
        },
        mappedMenuElements = menuElements && menuElements.map((el: { parent: MenuElementDto, children: MenuElementDto[] }) => {
            return <li className="rd-nav-item">
                <a className="rd-nav-link" href={el.parent.link}>{el.parent.text}</a>
                <ul className='child-menu'>
                    {el.children.map((child: MenuElementDto, idx: number) => {
                        return <li className="child rd-nav-item">
                            <a className="rd-nav-link" href={child.link}>{child.text}</a>
                        </li>
                    })}
                </ul>
            </li>
        }).filter((i: any) => i),
        mappedSocial = socials?.map((social: SocialMediaDto, idx: number) => {
            let iconClass = prepareSocialIcon(social.name.split("_"))
            return <li key={idx}><a className={["icon mdi", iconClass].join(" ")} href={social.link}>{social.pictureIdList}</a></li>

        }),
        x = ""

    React.useEffect(() => {
        getMenuElements()
        getPhone()
        getAddress()
        getSocials()
        getLogo()
    }, [])

    return <>
        {<header className="page-head">
            <div className="rd-navbar-wrap">
                <nav className="rd-navbar rd-navbar-default" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="53px" data-xl-stick-up-offset="53px" data-xxl-stick-up-offset="53px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                    <div className="rd-navbar-inner">
                        <div className="rd-navbar-aside-wrap">
                            <div className="rd-navbar-aside">
                                <div className="rd-navbar-aside-toggle" data-rd-navbar-toggle=".rd-navbar-aside"><span></span></div>
                                <div className="rd-navbar-aside-content">
                                    <ul className="rd-navbar-aside-group list-units">
                            <li>
                                            <div className="unit unit-horizontal unit-spacing-xs align-items-center">
                                                <div className="unit-left"><span className="novi-icon icon icon-xxs icon-primary material-icons-phone"></span></div>
                                                <div className="unit-body"><a className="link-dusty-gray" href={`tel:${phone?.value}`}>{phone?.value}</a></div>
                            </div>
                            </li>
                            <li>
                                            <div className="unit unit-horizontal unit-spacing-xs align-items-center">
                                                <div className="unit-left"><span className="novi-icon icon icon-xxs icon-primary fa-envelope-o"></span></div>
                                                <div className="unit-body"><a className="link-dusty-gray" href="mailto:#">{address?.value}</a></div>
                            </div>
                            </li>
                        </ul>
                                    
                        </div>
                    </div>
                    </div>
                        <div className="rd-navbar-group">
                            <div className="rd-navbar-panel">
                                <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button><a className="rd-navbar-brand brand" href="/"><img src={baseApiUrl + logo?.value} alt="" width="178" height="30"/></a>
                    </div>
                            <div className="rd-navbar-nav-wrap">
                                <div className="rd-navbar-nav-inner">
                                    <div className="rd-navbar-btn-wrap"><a className="button button-smaller button-primary-outline" href="/About">Appointment</a></div>
                                    <ul className="rd-navbar-nav">
                                        <li className="rd-nav-item">
                                            <a className="rd-nav-link" href="/">Home</a>
                                        </li>
                                        <li className="rd-nav-item">
                                            <a className="rd-nav-link" href="/About">About us</a>
                                        </li>
                                        {mappedMenuElements}

                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                </nav>
            </div>
        </header> }
    </>
}

const Footer = (props: { className?: string }) => {
    const
        [menuElements, setMenuElements] = useState<{ parent: MenuElementDto, children: MenuElementDto[] }[]>(),
        [phone, setPhone] = useState<KeyValueDto>(),
        [address, setAddress] = useState<KeyValueDto>(),
        [footertitle1, setFooterTitle1] = useState<KeyValueDto>(),
        [footertitle2, setFooterTitle2] = useState<KeyValueDto>(),
        [socials, setSocials] = useState<SocialMediaDto[]>(),
        [categories, setCategories] = useState<CategoryDto[]>(),
        [pages, setPages] = useState<PageDto[]>(),
        [logo, setLogo] = useState<KeyValueDto>(),
        [rights, setRights] = useState<KeyValueDto>(),
        [mail, setMail] = useState<KeyValueDto>(),
        getMenuElements = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleMenuElementList`)
            let obj = [] as any[]
            if (res.status == 200) {
                res.data.forEach((el: MenuElementDto) => {
                    if (el.parentMenuElementId < 0 || el.parentMenuElementId == null) {
                        obj.push({ parent: el, children: [] })
                    }

                })
                res.data.forEach((el: MenuElementDto) => {
                    if (el.parentMenuElementId > 0 || el.parentMenuElementId != null) {
                        let index = obj.findIndex((i: any) => i.parent.menuElementId == el.parentMenuElementId)
                        obj[index].children.push(el)
                    }
                })

                setMenuElements(obj)
            }
        },
        getRights = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/footer_rights`)
            setRights(res.data)
        },
        getPhone = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/phone`)
            setPhone(res.data)
        },
        getMail = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/footer_email`)
            setMail(res.data)
        },
        getAddress = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/address`)
            setAddress(res.data)
        },
        getFooterTitle1 = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/footer_title1`)
            setFooterTitle1(res.data)
        },
        getFooterTitle2 = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/footer_title2`)
            setFooterTitle2(res.data)
        },
        getPages = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisiblePageList`)
            setPages(res.data)
        },
        getSocials = async () => {
            let res = await axios.get(baseApiUrl + `/GetAllMainSocialMedia`)
            setSocials(res.data)
        },
        getCategories = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleCategoryList`)
            setCategories(res.data)
        },
        getLogo = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/footer_logo`)
            let t = res.data as KeyValueDto;
            let s = t.value.split("/")
            s[2] = "Full"
            t.value = s.join("/")
            setLogo(t)
        },
        mappedMenuElements = menuElements && menuElements.map((el: { parent: MenuElementDto, children: MenuElementDto[] }) => {
            return <li className="rd-nav-item">
                <a className="rd-nav-link" href={el.parent.link}>{el.parent.text}</a>
                <ul className='child-menu'>
                    {el.children.map((child: MenuElementDto, idx: number) => {
                        return <li className="child rd-nav-item">
                            <a className="rd-nav-link" href={child.link}>{child.text}</a>
                        </li>
                    })}
                </ul>
            </li>
        }).filter((i: any) => i),
        mappedSocial = socials?.map((social: SocialMediaDto, idx: number) => {
            let iconClass = prepareSocialIcon(social.name.split("_"))
            return <li key={idx}><a className={["icon mdi", iconClass].join(" ")} href={social.link}>{social.pictureIdList}</a></li>

        }),
        x = ""

    React.useEffect(() => {
        getMenuElements()
        getPhone()
        getAddress()
        getSocials()
        getCategories()
        getLogo()
        getRights()
        getPages()
        getFooterTitle1()
        getMail()
        getFooterTitle2()
    }, [])

    return <>

        <footer className="page-foot bg-ebony-clay">
            <div className="section-40 section-md-75">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-9 col-md-11 col-xl-12">
                            <div className="row row-50">
                                <div className="col-md-6 col-lg-10 col-xl-3">
                                    <div className="inset-xl-right-20"><a className="brand" href="index.html"><img src="images/logo-inverse-143x28.png" alt="" width="143" height="28" /></a>
                                        <p>
                                            If you or your business is facing a legal
                                            challenge that calls for sound advice and skilled representation, contact us today to arrange a free  consultation with an attorney.
                                        </p><a className="link link-group link-group-animated link-bold link-white" href="#"><span>Free Consultation</span><span className="novi-icon icon icon-xxs icon-primary fa fa-angle-right"></span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <p className="h7">Recent Posts</p>
                                    <article className="post post-preview post-preview-inverse"><a href="#">
                                        <div className="unit unit-horizontal unit-spacing-lg">
                                            <div className="unit-left">
                                                <figure className="post-image"><img src="images/post-preview-4-70x70.jpg" alt="" width="70" height="70" />
                                                </figure>
                                            </div>
                                            <div className="unit-body">
                                                <div className="post-header">
                                                    <p>Help Us Make the Law Accessible for Everyone</p>
                                                </div>
                                                <div className="post-meta">
                                                    <ul className="list-meta">
                                                        <li>
                                                            <time dateTime="2019-06-23">June 23, 2019 </time>
                                                        </li>
                                                        <li>3 Comments</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div></a></article>
                                    <article className="post post-preview post-preview-inverse"><a href="#">
                                        <div className="unit unit-horizontal unit-spacing-lg">
                                            <div className="unit-left">
                                                <figure className="post-image"><img src="images/post-preview-5-70x70.jpg" alt="" width="70" height="70" />
                                                </figure>
                                            </div>
                                            <div className="unit-body">
                                                <div className="post-header">
                                                    <p>Legal Documents Every Landlord Needs </p>
                                                </div>
                                                <div className="post-meta">
                                                    <ul className="list-meta">
                                                        <li>
                                                            <time dateTime="2019-06-23">June 20, 2019</time>
                                                        </li>
                                                        <li>3 Comments</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div></a></article>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <p className="h7">Quick links</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-marked-variant-2">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="#">Blog</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-marked-variant-2">
                                                <li><a href="/About">About us</a></li>
                                                <li><a href="#">Appointment</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-xl-3">
                                    <p className="h7">Contact us</p>
                                    <address className="contact-info text-left">
                                        <div className="unit unit-horizontal unit-spacing-md align-items-center">
                                            <div className="unit-left"><span className="novi-icon icon icon-xs icon-storm-gray material-icons-phone"></span></div>
                                            <div className="unit-body"><a className="link-white" href="tel:#">+123 234 984 47 45</a></div>
                                        </div>
                                        <div className="unit unit-horizontal unit-spacing-md align-items-center">
                                            <div className="unit-left"><span className="novi-icon icon icon-xs icon-storm-gray fa fa-envelope-o"></span></div>
                                            <div className="unit-body"><a className="link-white" href="mailto:#">info@demolink.org</a></div>
                                        </div>
                                        <div className="unit unit-horizontal unit-spacing-md">
                                            <div className="unit-left"><span className="novi-icon icon icon-xs icon-storm-gray material-icons-place"></span></div>
                                            <div className="unit-body"><a className="link-white d-inline" href="#">6036 Richmond hwy, Alexandria, VA USA 22303</a></div>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr></hr>
            </div>
            <div className="section-35">
                <div className="container text-center">
                    <div className="row row-15 flex-md-row-reverse justify-content-md-between align-items-md-center">
                        <div className="col-md-6 text-md-right">
                            <div className="group-sm group-middle">
                                <p className="font-italic text-white">Follow Us:</p>
                                <ul className="list-inline footer-social-list footer-social-list-2 footer-social-list-3">
                                    {mappedSocial}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-left">
                            <p className="rights text-white">{rights ? rights.value : <><span>&copy;&nbsp;</span><span className="copyright-year"></span><span></span><span>.&nbsp;</span><span>All Rights Reserved.</span><span> Design&nbsp;by&nbsp;<a href="https://www.templatemonster.com">TemplateMonster</a></span></>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}