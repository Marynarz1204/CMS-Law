import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import { PageWrapper } from './commonElements';
import axios from 'axios';
import { TeamMemberDto, BannerDto, CategoryDto, GalleryDto, KeyValueDto, ProductDto, RoleDto, SliderDto, TestimonialDto, axiosBaseConfig, baseApiUrl, getSocialLinkFromList, getPictureUrlFromList, prepareCategoryIcon, SocialMediaDto } from './common';
import Slider from "../node_modules/react-slick"

export const MainPage = () => {
    const
        [data, setData] = useState([]),

        x = ""


    return <PageWrapper>
        <SliderSection />
        <AdditionalInfoSection />
        <NumbersSection keyValue1={"numbers_1"} keyValue2={"numbers_2"} keyValue3={"numbers_3"} keyValue4={"numbers_4"} keyValue5={"numbers_banner" } />
        <ExpertsSection />
        <TestimonialSection />


        
    </PageWrapper>
}

const SliderSection = () => {
    const
        [mainSlider, setMainSlider] = useState<KeyValueDto>(),
        [slider, setSlider] = useState<SliderDto>(),
        [currentSlide, setCurrentSlide] = useState(0),
        [sliderBanners, setSliderBanners] = useState<BannerDto[]>(),
        getMainSLider = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/home_page_slider`)
            setMainSlider(res.data)
        },
        getSlider = async () => {
            if (!mainSlider) return
            let res = await axios.get(baseApiUrl + `/GetSlider/${mainSlider?.value}`)
            setSlider(res.data)

        },
        getBannerSliders = async () => {
            if (!slider) return
            let queryString = slider?.bannerIdList.map((i: number) => `${i}`)
            let res = await axios.get(baseApiUrl + `/GetBannersByIdList?bannerIdList=${queryString}`)
            setSliderBanners(res.data)
        },
        mappedSliderBanners = sliderBanners?.map((b: BannerDto, idx: number) => {
            return <div key={idx} className="swiper-slide" style={{ backgroundImage: `url(${getPictureUrlFromList(b.pictureIdList)[0]})` }} data-slide-bg={getPictureUrlFromList(b.pictureIdList)[0]}>
                <div className="swiper-slide-caption text-center">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-11 col-lg-10 col-xl-9">
                                <div className="header-decorated" data-caption-animate="fadeInUp" data-caption-delay="0s">
                                    <h3 dangerouslySetInnerHTML={{ __html: b.text }}></h3>
                                </div>
                                <div className="button-block" data-caption-animate="fadeInUp" data-caption-delay="400"><a className="button button-lg button-primary-outline-v2" href="#">Request a Free Consultation</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    React.useEffect(() => {
        getMainSLider()
    }, [])
    React.useEffect(() => {
        getSlider()
    }, [mainSlider])
    React.useEffect(() => {
        getBannerSliders()
    }, [slider])

    return <section>
        <div className="swiper-container swiper-slider swiper-variant-1 bg-black" data-loop="false" data-autoplay="5500" data-simulate-touch="false">
            <div className="swiper-wrapper text-center">
                {mappedSliderBanners }
                
            </div>
            <div className="swiper-scrollbar d-lg-none"></div>
            <div className="swiper-nav-wrap">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    </section>
}

const NumbersSection = (props: { keyValue1: string, keyValue2: string, keyValue3: string, keyValue4: string, keyValue5: string }) => {


    let num1 = axios.get(`/GetKeyValueByKey/${props.keyValue1}`)
    let num2 = axios.get(`/GetKeyValueByKey/${props.keyValue2}`)
    let num3 = axios.get(`/GetKeyValueByKey/${props.keyValue3}`)
    let num4 = axios.get(`/GetKeyValueByKey/${props.keyValue4}`)
    
    return <section className="section parallax-container bg-black" data-parallax-img="images/progress-bars-parallax-1.jpg">
        <div className="parallax-content">
            <div className="section-50 section-md-90">
                <div className="container">
                    <div className="row row-40">
                        <div className="col-sm-6 col-md-3">
                            <div className="box-counter box-counter-inverse"><span className="novi-icon icon icon-lg icon-primary mercury-icon-group"></span>
                                <div className="text-large counter">num1.value</div>
                                <p className="box-header">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="box-counter box-counter-inverse"><span className="novi-icon icon icon-lg-smaller icon-primary mercury-icon-scales"></span>
                                <div className="text-large counter">`/GetKeyValueByKey/${props.keyValue2}`</div>
                                <p className="box-header">Years of Experience</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="box-counter box-counter-inverse"><span className="novi-icon icon icon-lg-smaller icon-primary mercury-icon-partners"></span>
                                <div className="text-large counter counter-percent">`/GetKeyValueByKey/${props.keyValue3}`</div>
                                <p className="box-header">Successful Cases</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="box-counter box-counter-inverse"><span className="novi-icon icon icon-lg icon-primary mercury-icon-case"></span>
                                <div className="text-large counter">`/GetKeyValueByKey/${props.keyValue4}`</div>
                                <p className="box-header">Personal Injury Cases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const CategoriesSection = () => {
    const
        [categories, setCategories] = useState<CategoryDto[]>(),
        [categoriesTitle, setCategoriesTitle] = useState<KeyValueDto>(),
        getCategories = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleCategoryList`)
            let resTitle = await axios.get(baseApiUrl + `/GetKeyValueByKey/categoriesTitle`)
            setCategoriesTitle(resTitle.data)
            setCategories(res.data)
        },
        mappedCategories = categories?.map((cat: CategoryDto, idx: number) => {
            return <div className="col-sm-6 col-lg-4">
                <div className="oh-desktop">

                    <article className="services-terri wow slideInUp">
                        <div className="services-terri-figure">
                            <img src={getPictureUrlFromList(cat.pictureIdList)[0]} alt="" width="370" height="278" />
                        </div>
                        <div className="services-terri-caption">
                            <span className={["services-terri-icon", prepareCategoryIcon(cat.name.split("_"))].join(" ")}></span>
                            <h5 className="services-terri-title"><a href={cat?.link}>{cat.name}</a></h5>
                        </div>
                    </article>
                </div>
            </div>
        })

    React.useEffect(() => {
        getCategories()

    }, [])
    return <section className="section section-md bg-default">
        <div className="container">
            <h3 className="oh-desktop"><span className="d-inline-block wow slideInDown">{categoriesTitle?.value || "OUR MENU"}</span></h3>
            <div className="row row-md row-30">
                {mappedCategories}

            </div>
        </div>
    </section>
}
const MidSectionBanner = (props: { keyValue: string }) => {
    const
        [bannerValue, setBannerValue] = useState<KeyValueDto>(),
        [banner, setBanner] = useState<BannerDto>(),
        getBannerValue = async () => {
            let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/${props.keyValue}`)
            setBannerValue(res.data)
        },
        getBanner = async () => {
            if (!bannerValue) return
            let res = await axios.get(baseApiUrl + `/GetBanner/${bannerValue?.value}`)
            setBanner(res.data)

        }

    React.useEffect(() => {
        getBannerValue()

    }, [])
    React.useEffect(() => {
        getBanner()

    }, [bannerValue])
    return <section className="primary-overlay section parallax-container" style={{ backgroundImage: `url(${getPictureUrlFromList(banner?.pictureIdList)[0]})` }} data-parallax-img={getPictureUrlFromList(banner?.pictureIdList)[0]}>
        <div className="parallax-content section-xl context-dark text-md-left">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-sm-8 col-md-7 col-lg-5">
                        <div className="cta-modern">
                            <div dangerouslySetInnerHTML={{ __html: banner?.text }}></div>
                            <a className="button button-md button-secondary-2 button-winona wow fadeInUp" href={banner?.link} data-wow-delay=".2s">{banner?.subText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
const ProductsSection = () => {
    const
        [products, setProducts] = useState<ProductDto[]>(),
        [categories, setCategories] = useState<CategoryDto[]>(),
        [productsTitle, setProductsTitle] = useState<KeyValueDto>(),
        getProducts = async () => {
            let res = await axios.get(baseApiUrl + "/GetVisibleProductList", axiosBaseConfig)
            let resTitle = await axios.get(baseApiUrl + `/GetKeyValueByKey/productsTitle`)
            setProducts(res.data)
            setProductsTitle(resTitle.data)
        },
        getCategories = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleCategoryList`)
            setCategories(res.data)
        },
        mappedProducts = products?.map((p: ProductDto, idx: number) => {
            if (p.isRecommended)
                return <div key={idx} className="col-sm-6 col-lg-4 col-xl-3">

                    <article className="product wow fadeInLeft" data-wow-delay=".15s">
                        <div className="product-figure">
                            <img src={getPictureUrlFromList(p.pictureIdList)[0]} alt="" width="161" height="162" />
                        </div>
                        <div className="product-rating">
                            {Array.from({ length: 5 }, (_, i) => i + 1).map((i: any, idx: any) => {
                                if (idx < p.score) return <span className="mdi mdi-star"></span>
                                return <span className="mdi mdi-star text-gray-13"></span>
                            })}
                        </div>
                        <h6 className="product-title">{p.name}</h6>
                        <div className="product-price-wrap">

                            {(p.discountPrice < p.price && p.discountPrice > 0) ?
                                <>
                                    <div className="product-price product-price-old">{p.price} zł</div>
                                    <div className="product-price">{p.discountPrice} zł</div></>
                                : <div className="product-price">{p.price} zł</div>
                            }
                        </div>
                        <div className="product-button">
                            <div className="button-wrap"><a className="button button-xs button-secondary button-winona" href={categories.find((c: CategoryDto) => c.id == p.categoryId)?.link + `#${p.name + p.id}`}>View Product</a></div>
                        </div>
                        {(p.discountPrice < p.price && p.discountPrice > 0) ? <span className="product-badge product-badge-sale">Sale</span> : ""}
                    </article>
                </div>
        }).filter((p: any) => p)

    React.useEffect(() => {
        getProducts()
    }, [])
    React.useEffect(() => {
        getCategories()
    }, [products])
    return <section className="section section-lg bg-default">
        <div className="container">
            <h3 className="oh-desktop"><span className="d-inline-block wow slideInUp">{productsTitle?.value || "Selected Pizzas"}</span></h3>
            <div className="row row-lg row-30">
                {mappedProducts}
            </div>
        </div>
    </section>
}

const ExpertsSection = () => {
    const
        [teamMembers, setTeamMembers] = useState<TeamMemberDto[]>(),
        [roles, setRoles] = useState<RoleDto[]>(),
        [socialMedias, setSocialMedias] = useState<SocialMediaDto[]>(),
        [teamMemberTitle, setTeamMembersTitle] = useState<KeyValueDto>(),
        getTeamMember = async () => {
            let res = await axios.get(baseApiUrl + "/GetVisibleTeamMemberList", axiosBaseConfig)
            let resTitle = await axios.get(baseApiUrl + `/GetKeyValueByKey/teamMemberTitle`)
            setTeamMembers(res.data)
            setTeamMembersTitle(resTitle.data)
        },
        getRoles = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleRoleList`)
            setRoles(res.data.sort((a: RoleDto, b: RoleDto) => a.roleId - b.roleId))
        },
        getSocialMedias = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleSocialMediaList`)
            setSocialMedias(res.data.sort((a: SocialMediaDto, b: SocialMediaDto) => a.id - b.id))
        },

    mappedTeamMembers = teamMembers?.map ((t: TeamMemberDto, idx: number) => {
        return  <div className = "col-sm-6 col-md-4 col-lg-3" >
            <div className="thumbnail-variant-2-wrap">
                <div className="thumbnail thumbnail-variant-2">
                    <figure className="thumbnail-image"><img src={getPictureUrlFromList(t.pictureIdList)[0]} alt="" width="246" height="300" />
                    </figure>
                    <div className="thumbnail-inner">
                        <div className="link-group"><span className="novi-icon icon icon-xxs icon-primary material-icons-local_phone"></span><a className="link-white" href="tel:#">{t.phoneNumber}</a></div>
                        <div className="link-group"><span className="novi-icon icon icon-xxs icon-primary fa-envelope-o"></span><a className="link-white" href="tel:#">{t.email}</a></div>
                    </div>
                    <div className="thumbnail-caption">
                        <p className="text-header"><a href="#">{t.firstName} {t.lastName}</a></p>
                        <div className="divider divider-md bg-teak"></div>
                        <p className="text-caption">{roles?.find((r: RoleDto, idx: number) => r.roleId == t.roleId).name}</p>
                    </div>
                </div>
            </div>
        </div >
    })

    //



    React.useEffect(() => {
        getTeamMember()
    }, [])
    React.useEffect(() => {
        getRoles()
    }, [teamMembers])
    React.useEffect(() => {
        getSocialMedias()
    }, [teamMembers])

    
    return <section className="section-60 section-lg-100">
        <div className="container">
            <div className="row row-40 align-items-sm-end">
                
                {mappedTeamMembers}
                
                <div className="col-sm-6 col-md-12 col-lg-3 text-center">
                    <div className="block-wrap-1">
                        <div className="block-number">06</div>
                        <h3 className="text-normal">Experts</h3>
                        <p className="h5 h5-smaller text-style-4">in Their Fields</p>
                        <p>If you or your business is facing a legal challenge, contact us today to arrange a free initial consultation with an attorney.</p><a className="link link-group link-group-animated link-bold link-secondary" href="#"><span>Read more</span><span className="novi-icon icon icon-xxs icon-primary fa fa-angle-right"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const TestimonialSection = () => {
    const
        [testimonials, setTestimonials] = useState<TestimonialDto[]>(),
        [roles, setRoles] = useState<RoleDto[]>(),
        [isHover, setIsHover] = useState(false),
        [testimonialsTitle, setTestimonialsTitle] = useState<KeyValueDto>(),
        getTestimonials = async () => {
            let res = await axios.get(baseApiUrl + "/GetVisibleTestimonialList", axiosBaseConfig)
            let resTitle = await axios.get(baseApiUrl + `/GetKeyValueByKey/testimonialTitle`)
            setTestimonials(res.data)
            setTestimonialsTitle(resTitle.data)
        },
        getRoles = async () => {
            let res = await axios.get(baseApiUrl + `/GetVisibleRoleList`)
            setRoles(res.data.sort((a: RoleDto, b: RoleDto) => a.roleId - b.roleId))
        },
        mappedTestimonials = testimonials?.map((t: TestimonialDto, idx: number) => {

            return <div>
            <div className="item">
                <blockquote className="quote-bordered">
                    <div className="quote-body">
                        <div className="quote-open">
                            <svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="37px" height="27px" viewBox="0 0 21 15" preserveAspectRatio="none">
                                <path d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                        </div>
                        <div className="quote-body-inner">
                            <h6>LawExpert is One of The Best...</h6>
                            <p>
                                <q>John Doe is one of those attorneys who has it all-talent and skill, compassion for his clients, and the ability to communicate well with anyone he meets. This is one of the best combinations for a trial attorney and he is one of the best.</q>
                            </p>
                        </div>
                    </div>
                    <div className="quote-footer">
                        <div className="unit unit-horizontal unit-spacing-sm align-items-center">
                            <div className="unit-left"><img className="img-circle" src="images/clients-testimonials-2-68x68.jpg" alt="" width="68" height="68" />
                            </div>
                            <div className="unit-body">
                                <cite>{t.firstName} {t.lastName}</cite>
                                <p className="text-primary">CEO, Eberson Co.</p>
                            </div>
                        </div>
                    </div>
                </blockquote>
                </div>
                </div>


            return <article className="quote-tara" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className="quote-tara-caption">
                    <div className="quote-tara-text">
                        <p className="q" dangerouslySetInnerHTML={{ __html: t.text }}></p>
                    </div>
                    <div className="quote-tara-figure">
                        <img src={getPictureUrlFromList(t.pictureIdList)[0]} alt="" width="115" height="115" />
                    </div>
                </div>
                <h6 className="quote-tara-author">{t.firstName} {t.lastName}</h6>
                <div className="quote-tara-status">{roles?.find((r: RoleDto, idx: number) => r.roleId == t.roleId).name}</div>
            </article>
        })
    React.useEffect(() => {
        getTestimonials()
    }, [])
    React.useEffect(() => {
        getRoles()
    }, [testimonials])

    
    return <section className="section-66 section-md-90 section-xl-bottom-100">
        <div className="container">
          <h3 className="text-center">Testimonials</h3>
          <div className="owl-carousel owl-spacing-1 owl-nav-classic owl-style-minimal" data-autoplay="true" data-items="1" data-md-items="2" data-stage-padding="0" data-loop="true" data-margin="30" data-mouse-drag="true" data-nav="true" data-dots="true" data-dots-each="1">
            {mappedTestimonials }
          </div>
        </div>
      </section>





}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ></div>
    );
}



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ></div>
    );
}

const GalleriesSection = () => {
    const
        [galleries, setGalleries] = useState<GalleryDto[]>(),
        getGalleries = async () => {
            let galleries = []
            for (let i = 0; i < 7; i++) {
                let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/gallery_${i + 1}`)
                if (res.status == 200) {
                    let title = res.data.value
                    res = await axios.get(baseApiUrl + `/GetGallery/${title}`)
                    galleries.push(res.data)
                }

            }
            setGalleries(galleries)
        }

    React.useEffect(() => {
        getGalleries()
    }, [])
    return <section className="section section-last bg-default gallery-section">
        <div className="container-fluid container-inset-0 isotope-wrap">
            <div className="gallery-row" >

                <div className={`grid-child grid-child-${1}   oh-desktop`}>

                    {galleries?.length > 0 &&
                        <article className="thumbnail thumbnail-mary thumbnail-mary-big wow slideInRight">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[0].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[0].pictureIdList)[0]} alt="" width="310" height="585" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[0].name}`}>{galleries[0].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[0].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${2}   oh-desktop`}>
                    {galleries?.length > 1 &&

                        <article className="thumbnail thumbnail-mary thumbnail-mary-2 wow slideInDown">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[1].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[1].pictureIdList)[0]} alt="" width="310" height="585" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[1].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[1].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${3}   oh-desktop`}>
                    {galleries?.length > 2 &&

                        <article className="thumbnail thumbnail-mary wow slideInUp">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[2].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[2].pictureIdList)[0]} alt="" width="631" height="587" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[2].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[2].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${4}   oh-desktop`}>
                    {galleries?.length > 3 &&

                        <article className="thumbnail thumbnail-mary thumbnail-mary-2 wow slideInUp">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[3].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[3].pictureIdList)[0]} alt="" width="311" height="289" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[3].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[3].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${5}   oh-desktop`}>
                    {galleries?.length > 4 &&

                        <article className="thumbnail thumbnail-mary thumbnail-mary-2 wow slideInRight">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[4].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[4].pictureIdList)[0]} alt="" width="311" height="289" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[4].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[4].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${6}   oh-desktop`}>
                    {galleries?.length > 5 &&

                        <article className="thumbnail thumbnail-mary thumbnail-mary-2 wow slideInLeft">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[5].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[5].pictureIdList)[0]} alt="" width="311" height="289" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[5].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[5].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
                <div className={`grid-child grid-child-${7}   oh-desktop`}>
                    {galleries?.length > 6 &&

                        <article className="thumbnail thumbnail-mary thumbnail-mary-2 wow slideInLeft">
                            <a className="thumbnail-mary-figure" href={`/Gallery/${galleries[6].name}`} data-lightgallery="item"><img src={getPictureUrlFromList(galleries[6].pictureIdList)[0]} alt="" width="311" height="289" /></a>
                            <div className="thumbnail-mary-caption">
                                <div>
                                    <h6 className="thumbnail-mary-title"><a href={`/Gallery/${galleries[6].name}`}>{galleries[6].mainText}</a></h6>
                                    <div className="thumbnail-mary-location">{galleries[6].subText}</div>
                                </div>
                            </div>
                        </article>}
                </div>
            </div>
        </div>
    </section>
}
const AdditionalInfoSection = () => {
    const
        [boxesData, setBoxesData] = useState<{ title: string, text: string, link: string }[]>(),
        getBoxes = async () => {
            let boxes = []
            for (let i = 0; i < 3; i++) {
                let res = await axios.get(baseApiUrl + `/GetKeyValueByKey/box${i + 1}`)
                let resText = await axios.get(baseApiUrl + `/GetKeyValueByKey/box${i + 1}_text`)
                let resLink = await axios.get(baseApiUrl + `/GetKeyValueByKey/box${i + 1}_link`)
                if (res.status == 200 && resText.status == 200) {
                    boxes.push({ title: res.data.value, text: resText.data.value, link: resLink.data.value })
                }
            }
            setBoxesData(boxes)
        }

    React.useEffect(() => {
        getBoxes()
    }, [])
    return <section className="section-50 section-md-75 section-lg-100">
        <div className="container">
            <div className="row row-40">
                {boxesData?.length > 0 && <>
                <div className="col-md-6 col-lg-4 height-fill">
                    
                        <article className="icon-box">
                            <div className="box-top">
                                <div className="box-icon"><span className="novi-icon icon icon-primary icon-lg mercury-icon-briefcase"></span></div>
                                <div className="box-header">
                                    <h5><a href={boxesData[0]?.link}>{boxesData[0]?.title}</a></h5>
                                </div>
                            </div>
                            <div className="divider bg-accent"></div>
                            <div className="box-body">
                                <p>{boxesData[0]?.text}</p>
                            </div>
                        </article>
                    
                    </div>
                </>}
                {boxesData?.length > 1 && boxesData[1]?.title.length > 0 && <>
                <div className="col-md-6 col-lg-4 height-fill">
                    
                        <article className="icon-box">
                            <div className="box-top">
                                <div className="box-icon"><span className="novi-icon icon icon-primary icon-lg mercury-icon-users"></span></div>
                                <div className="box-header">
                                    <h5><a href={boxesData[1]?.link}>{boxesData[1]?.title}</a></h5>
                  </div>
                </div>
                            <div className="divider bg-accent"></div>
                            <div className="box-body">
                                <p>{boxesData[1]?.text}</p>
                </div>
               </article>
                    
                    
                    </div>
                </>}
                {boxesData?.length > 2 && boxesData[2]?.title.length > 0 && <>
                <div className="col-md-6 col-lg-4 height-fill">
                    
                        <article className="icon-box">
                            <div className="box-top">
                                <div className="box-icon"><span className="novi-icon icon icon-primary icon-lg mercury-icon-lib"></span></div>
                                <div className="box-header">
                                    <h5><a href={boxesData[2]?.link} >{boxesData[2]?.title}</a></h5>
                                </div>
                            </div>
                            <div className="divider bg-accent"></div>
                            <div className="box-body">
                                <p>{boxesData[2]?.text}</p>
                            </div>
                        </article>
                    
                    </div>
                </>}
                </div>
            
        </div>
      </section>





}
const root = document.getElementById("react_root");
ReactDOM.render(<MainPage />, root);
