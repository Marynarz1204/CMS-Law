"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ReactDOM = __importStar(require("react-dom"));
var commonElements_1 = require("./commonElements");
var axios_1 = __importDefault(require("axios"));
var common_1 = require("./common");
var MainPage = function () {
    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1], x = "";
    return React.createElement(commonElements_1.PageWrapper, null,
        React.createElement(SliderSection, null),
        React.createElement(AdditionalInfoSection, null),
        React.createElement(NumbersSection, { keyValue1: "numbers_1", keyValue2: "numbers_2", keyValue3: "numbers_3", keyValue4: "numbers_4", keyValue5: "numbers_banner" }),
        React.createElement(ExpertsSection, null),
        React.createElement(TestimonialSection, null));
};
exports.MainPage = MainPage;
var SliderSection = function () {
    var _a = (0, react_1.useState)(), mainSlider = _a[0], setMainSlider = _a[1], _b = (0, react_1.useState)(), slider = _b[0], setSlider = _b[1], _c = (0, react_1.useState)(0), currentSlide = _c[0], setCurrentSlide = _c[1], _d = (0, react_1.useState)(), sliderBanners = _d[0], setSliderBanners = _d[1], getMainSLider = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/home_page_slider")];
                case 1:
                    res = _a.sent();
                    setMainSlider(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getSlider = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!mainSlider)
                        return [2 /*return*/];
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetSlider/".concat(mainSlider === null || mainSlider === void 0 ? void 0 : mainSlider.value))];
                case 1:
                    res = _a.sent();
                    setSlider(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getBannerSliders = function () { return __awaiter(void 0, void 0, void 0, function () {
        var queryString, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!slider)
                        return [2 /*return*/];
                    queryString = slider === null || slider === void 0 ? void 0 : slider.bannerIdList.map(function (i) { return "".concat(i); });
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetBannersByIdList?bannerIdList=".concat(queryString))];
                case 1:
                    res = _a.sent();
                    setSliderBanners(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, mappedSliderBanners = sliderBanners === null || sliderBanners === void 0 ? void 0 : sliderBanners.map(function (b, idx) {
        return React.createElement("div", { key: idx, className: "swiper-slide", style: { backgroundImage: "url(".concat((0, common_1.getPictureUrlFromList)(b.pictureIdList)[0], ")") }, "data-slide-bg": (0, common_1.getPictureUrlFromList)(b.pictureIdList)[0] },
            React.createElement("div", { className: "swiper-slide-caption text-center" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row justify-content-md-center" },
                        React.createElement("div", { className: "col-md-11 col-lg-10 col-xl-9" },
                            React.createElement("div", { className: "header-decorated", "data-caption-animate": "fadeInUp", "data-caption-delay": "0s" },
                                React.createElement("h3", { dangerouslySetInnerHTML: { __html: b.text } })),
                            React.createElement("div", { className: "button-block", "data-caption-animate": "fadeInUp", "data-caption-delay": "400" },
                                React.createElement("a", { className: "button button-lg button-primary-outline-v2", href: "#" }, "Request a Free Consultation")))))));
    });
    React.useEffect(function () {
        getMainSLider();
    }, []);
    React.useEffect(function () {
        getSlider();
    }, [mainSlider]);
    React.useEffect(function () {
        getBannerSliders();
    }, [slider]);
    return React.createElement("section", null,
        React.createElement("div", { className: "swiper-container swiper-slider swiper-variant-1 bg-black", "data-loop": "false", "data-autoplay": "5500", "data-simulate-touch": "false" },
            React.createElement("div", { className: "swiper-wrapper text-center" }, mappedSliderBanners),
            React.createElement("div", { className: "swiper-scrollbar d-lg-none" }),
            React.createElement("div", { className: "swiper-nav-wrap" },
                React.createElement("div", { className: "swiper-button-prev" }),
                React.createElement("div", { className: "swiper-button-next" }))));
};
var NumbersSection = function (props) {
    var num1 = axios_1.default.get("/GetKeyValueByKey/".concat(props.keyValue1));
    var num2 = axios_1.default.get("/GetKeyValueByKey/".concat(props.keyValue2));
    var num3 = axios_1.default.get("/GetKeyValueByKey/".concat(props.keyValue3));
    var num4 = axios_1.default.get("/GetKeyValueByKey/".concat(props.keyValue4));
    return React.createElement("section", { className: "section parallax-container bg-black", "data-parallax-img": "images/progress-bars-parallax-1.jpg" },
        React.createElement("div", { className: "parallax-content" },
            React.createElement("div", { className: "section-50 section-md-90" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row row-40" },
                        React.createElement("div", { className: "col-sm-6 col-md-3" },
                            React.createElement("div", { className: "box-counter box-counter-inverse" },
                                React.createElement("span", { className: "novi-icon icon icon-lg icon-primary mercury-icon-group" }),
                                React.createElement("div", { className: "text-large counter" }, "num1.value"),
                                React.createElement("p", { className: "box-header" }, "Happy Clients"))),
                        React.createElement("div", { className: "col-sm-6 col-md-3" },
                            React.createElement("div", { className: "box-counter box-counter-inverse" },
                                React.createElement("span", { className: "novi-icon icon icon-lg-smaller icon-primary mercury-icon-scales" }),
                                React.createElement("div", { className: "text-large counter" },
                                    "`/GetKeyValueByKey/$",
                                    props.keyValue2,
                                    "`"),
                                React.createElement("p", { className: "box-header" }, "Years of Experience"))),
                        React.createElement("div", { className: "col-sm-6 col-md-3" },
                            React.createElement("div", { className: "box-counter box-counter-inverse" },
                                React.createElement("span", { className: "novi-icon icon icon-lg-smaller icon-primary mercury-icon-partners" }),
                                React.createElement("div", { className: "text-large counter counter-percent" },
                                    "`/GetKeyValueByKey/$",
                                    props.keyValue3,
                                    "`"),
                                React.createElement("p", { className: "box-header" }, "Successful Cases"))),
                        React.createElement("div", { className: "col-sm-6 col-md-3" },
                            React.createElement("div", { className: "box-counter box-counter-inverse" },
                                React.createElement("span", { className: "novi-icon icon icon-lg icon-primary mercury-icon-case" }),
                                React.createElement("div", { className: "text-large counter" },
                                    "`/GetKeyValueByKey/$",
                                    props.keyValue4,
                                    "`"),
                                React.createElement("p", { className: "box-header" }, "Personal Injury Cases"))))))));
};
var CategoriesSection = function () {
    var _a = (0, react_1.useState)(), categories = _a[0], setCategories = _a[1], _b = (0, react_1.useState)(), categoriesTitle = _b[0], setCategoriesTitle = _b[1], getCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, resTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleCategoryList")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/categoriesTitle")];
                case 2:
                    resTitle = _a.sent();
                    setCategoriesTitle(resTitle.data);
                    setCategories(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, mappedCategories = categories === null || categories === void 0 ? void 0 : categories.map(function (cat, idx) {
        return React.createElement("div", { className: "col-sm-6 col-lg-4" },
            React.createElement("div", { className: "oh-desktop" },
                React.createElement("article", { className: "services-terri wow slideInUp" },
                    React.createElement("div", { className: "services-terri-figure" },
                        React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(cat.pictureIdList)[0], alt: "", width: "370", height: "278" })),
                    React.createElement("div", { className: "services-terri-caption" },
                        React.createElement("span", { className: ["services-terri-icon", (0, common_1.prepareCategoryIcon)(cat.name.split("_"))].join(" ") }),
                        React.createElement("h5", { className: "services-terri-title" },
                            React.createElement("a", { href: cat === null || cat === void 0 ? void 0 : cat.link }, cat.name))))));
    });
    React.useEffect(function () {
        getCategories();
    }, []);
    return React.createElement("section", { className: "section section-md bg-default" },
        React.createElement("div", { className: "container" },
            React.createElement("h3", { className: "oh-desktop" },
                React.createElement("span", { className: "d-inline-block wow slideInDown" }, (categoriesTitle === null || categoriesTitle === void 0 ? void 0 : categoriesTitle.value) || "OUR MENU")),
            React.createElement("div", { className: "row row-md row-30" }, mappedCategories)));
};
var MidSectionBanner = function (props) {
    var _a = (0, react_1.useState)(), bannerValue = _a[0], setBannerValue = _a[1], _b = (0, react_1.useState)(), banner = _b[0], setBanner = _b[1], getBannerValue = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/".concat(props.keyValue))];
                case 1:
                    res = _a.sent();
                    setBannerValue(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getBanner = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!bannerValue)
                        return [2 /*return*/];
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetBanner/".concat(bannerValue === null || bannerValue === void 0 ? void 0 : bannerValue.value))];
                case 1:
                    res = _a.sent();
                    setBanner(res.data);
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getBannerValue();
    }, []);
    React.useEffect(function () {
        getBanner();
    }, [bannerValue]);
    return React.createElement("section", { className: "primary-overlay section parallax-container", style: { backgroundImage: "url(".concat((0, common_1.getPictureUrlFromList)(banner === null || banner === void 0 ? void 0 : banner.pictureIdList)[0], ")") }, "data-parallax-img": (0, common_1.getPictureUrlFromList)(banner === null || banner === void 0 ? void 0 : banner.pictureIdList)[0] },
        React.createElement("div", { className: "parallax-content section-xl context-dark text-md-left" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row justify-content-end" },
                    React.createElement("div", { className: "col-sm-8 col-md-7 col-lg-5" },
                        React.createElement("div", { className: "cta-modern" },
                            React.createElement("div", { dangerouslySetInnerHTML: { __html: banner === null || banner === void 0 ? void 0 : banner.text } }),
                            React.createElement("a", { className: "button button-md button-secondary-2 button-winona wow fadeInUp", href: banner === null || banner === void 0 ? void 0 : banner.link, "data-wow-delay": ".2s" }, banner === null || banner === void 0 ? void 0 : banner.subText)))))));
};
var ProductsSection = function () {
    var _a = (0, react_1.useState)(), products = _a[0], setProducts = _a[1], _b = (0, react_1.useState)(), categories = _b[0], setCategories = _b[1], _c = (0, react_1.useState)(), productsTitle = _c[0], setProductsTitle = _c[1], getProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, resTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleProductList", common_1.axiosBaseConfig)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/productsTitle")];
                case 2:
                    resTitle = _a.sent();
                    setProducts(res.data);
                    setProductsTitle(resTitle.data);
                    return [2 /*return*/];
            }
        });
    }); }, getCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleCategoryList")];
                case 1:
                    res = _a.sent();
                    setCategories(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, mappedProducts = products === null || products === void 0 ? void 0 : products.map(function (p, idx) {
        var _a;
        if (p.isRecommended)
            return React.createElement("div", { key: idx, className: "col-sm-6 col-lg-4 col-xl-3" },
                React.createElement("article", { className: "product wow fadeInLeft", "data-wow-delay": ".15s" },
                    React.createElement("div", { className: "product-figure" },
                        React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(p.pictureIdList)[0], alt: "", width: "161", height: "162" })),
                    React.createElement("div", { className: "product-rating" }, Array.from({ length: 5 }, function (_, i) { return i + 1; }).map(function (i, idx) {
                        if (idx < p.score)
                            return React.createElement("span", { className: "mdi mdi-star" });
                        return React.createElement("span", { className: "mdi mdi-star text-gray-13" });
                    })),
                    React.createElement("h6", { className: "product-title" }, p.name),
                    React.createElement("div", { className: "product-price-wrap" }, (p.discountPrice < p.price && p.discountPrice > 0) ?
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "product-price product-price-old" },
                                p.price,
                                " z\u0142"),
                            React.createElement("div", { className: "product-price" },
                                p.discountPrice,
                                " z\u0142"))
                        : React.createElement("div", { className: "product-price" },
                            p.price,
                            " z\u0142")),
                    React.createElement("div", { className: "product-button" },
                        React.createElement("div", { className: "button-wrap" },
                            React.createElement("a", { className: "button button-xs button-secondary button-winona", href: ((_a = categories.find(function (c) { return c.id == p.categoryId; })) === null || _a === void 0 ? void 0 : _a.link) + "#".concat(p.name + p.id) }, "View Product"))),
                    (p.discountPrice < p.price && p.discountPrice > 0) ? React.createElement("span", { className: "product-badge product-badge-sale" }, "Sale") : ""));
    }).filter(function (p) { return p; });
    React.useEffect(function () {
        getProducts();
    }, []);
    React.useEffect(function () {
        getCategories();
    }, [products]);
    return React.createElement("section", { className: "section section-lg bg-default" },
        React.createElement("div", { className: "container" },
            React.createElement("h3", { className: "oh-desktop" },
                React.createElement("span", { className: "d-inline-block wow slideInUp" }, (productsTitle === null || productsTitle === void 0 ? void 0 : productsTitle.value) || "Selected Pizzas")),
            React.createElement("div", { className: "row row-lg row-30" }, mappedProducts)));
};
var ExpertsSection = function () {
    var _a = (0, react_1.useState)(), teamMembers = _a[0], setTeamMembers = _a[1], _b = (0, react_1.useState)(), roles = _b[0], setRoles = _b[1], _c = (0, react_1.useState)(), socialMedias = _c[0], setSocialMedias = _c[1], _d = (0, react_1.useState)(), teamMemberTitle = _d[0], setTeamMembersTitle = _d[1], getTeamMember = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, resTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleTeamMemberList", common_1.axiosBaseConfig)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/teamMemberTitle")];
                case 2:
                    resTitle = _a.sent();
                    setTeamMembers(res.data);
                    setTeamMembersTitle(resTitle.data);
                    return [2 /*return*/];
            }
        });
    }); }, getRoles = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleRoleList")];
                case 1:
                    res = _a.sent();
                    setRoles(res.data.sort(function (a, b) { return a.roleId - b.roleId; }));
                    return [2 /*return*/];
            }
        });
    }); }, getSocialMedias = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleSocialMediaList")];
                case 1:
                    res = _a.sent();
                    setSocialMedias(res.data.sort(function (a, b) { return a.id - b.id; }));
                    return [2 /*return*/];
            }
        });
    }); }, mappedTeamMembers = teamMembers === null || teamMembers === void 0 ? void 0 : teamMembers.map(function (t, idx) {
        return React.createElement("div", { className: "col-sm-6 col-md-4 col-lg-3" },
            React.createElement("div", { className: "thumbnail-variant-2-wrap" },
                React.createElement("div", { className: "thumbnail thumbnail-variant-2" },
                    React.createElement("figure", { className: "thumbnail-image" },
                        React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(t.pictureIdList)[0], alt: "", width: "246", height: "300" })),
                    React.createElement("div", { className: "thumbnail-inner" },
                        React.createElement("div", { className: "link-group" },
                            React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary material-icons-local_phone" }),
                            React.createElement("a", { className: "link-white", href: "tel:#" }, t.phoneNumber)),
                        React.createElement("div", { className: "link-group" },
                            React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary fa-envelope-o" }),
                            React.createElement("a", { className: "link-white", href: "tel:#" }, t.email))),
                    React.createElement("div", { className: "thumbnail-caption" },
                        React.createElement("p", { className: "text-header" },
                            React.createElement("a", { href: "#" },
                                t.firstName,
                                " ",
                                t.lastName)),
                        React.createElement("div", { className: "divider divider-md bg-teak" }),
                        React.createElement("p", { className: "text-caption" }, roles === null || roles === void 0 ? void 0 : roles.find(function (r, idx) { return r.roleId == t.roleId; }).name)))));
    });
    //
    React.useEffect(function () {
        getTeamMember();
    }, []);
    React.useEffect(function () {
        getRoles();
    }, [teamMembers]);
    React.useEffect(function () {
        getSocialMedias();
    }, [teamMembers]);
    return React.createElement("section", { className: "section-60 section-lg-100" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row row-40 align-items-sm-end" },
                mappedTeamMembers,
                React.createElement("div", { className: "col-sm-6 col-md-12 col-lg-3 text-center" },
                    React.createElement("div", { className: "block-wrap-1" },
                        React.createElement("div", { className: "block-number" }, "06"),
                        React.createElement("h3", { className: "text-normal" }, "Experts"),
                        React.createElement("p", { className: "h5 h5-smaller text-style-4" }, "in Their Fields"),
                        React.createElement("p", null, "If you or your business is facing a legal challenge, contact us today to arrange a free initial consultation with an attorney."),
                        React.createElement("a", { className: "link link-group link-group-animated link-bold link-secondary", href: "#" },
                            React.createElement("span", null, "Read more"),
                            React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary fa fa-angle-right" })))))));
};
var TestimonialSection = function () {
    var _a = (0, react_1.useState)(), testimonials = _a[0], setTestimonials = _a[1], _b = (0, react_1.useState)(), roles = _b[0], setRoles = _b[1], _c = (0, react_1.useState)(false), isHover = _c[0], setIsHover = _c[1], _d = (0, react_1.useState)(), testimonialsTitle = _d[0], setTestimonialsTitle = _d[1], getTestimonials = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, resTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleTestimonialList", common_1.axiosBaseConfig)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/testimonialTitle")];
                case 2:
                    resTitle = _a.sent();
                    setTestimonials(res.data);
                    setTestimonialsTitle(resTitle.data);
                    return [2 /*return*/];
            }
        });
    }); }, getRoles = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleRoleList")];
                case 1:
                    res = _a.sent();
                    setRoles(res.data.sort(function (a, b) { return a.roleId - b.roleId; }));
                    return [2 /*return*/];
            }
        });
    }); }, mappedTestimonials = testimonials === null || testimonials === void 0 ? void 0 : testimonials.map(function (t, idx) {
        return React.createElement("div", null,
            React.createElement("div", { className: "item" },
                React.createElement("blockquote", { className: "quote-bordered" },
                    React.createElement("div", { className: "quote-body" },
                        React.createElement("div", { className: "quote-open" },
                            React.createElement("svg", { version: "1.1", baseProfile: "tiny", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "37px", height: "27px", viewBox: "0 0 21 15", preserveAspectRatio: "none" },
                                React.createElement("path", { d: "M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z" }))),
                        React.createElement("div", { className: "quote-body-inner" },
                            React.createElement("h6", null, "LawExpert is One of The Best..."),
                            React.createElement("p", null,
                                React.createElement("q", null, "John Doe is one of those attorneys who has it all-talent and skill, compassion for his clients, and the ability to communicate well with anyone he meets. This is one of the best combinations for a trial attorney and he is one of the best.")))),
                    React.createElement("div", { className: "quote-footer" },
                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-sm align-items-center" },
                            React.createElement("div", { className: "unit-left" },
                                React.createElement("img", { className: "img-circle", src: "images/clients-testimonials-2-68x68.jpg", alt: "", width: "68", height: "68" })),
                            React.createElement("div", { className: "unit-body" },
                                React.createElement("cite", null,
                                    t.firstName,
                                    " ",
                                    t.lastName),
                                React.createElement("p", { className: "text-primary" }, "CEO, Eberson Co.")))))));
        return React.createElement("article", { className: "quote-tara", onMouseEnter: function () { return setIsHover(true); }, onMouseLeave: function () { return setIsHover(false); } },
            React.createElement("div", { className: "quote-tara-caption" },
                React.createElement("div", { className: "quote-tara-text" },
                    React.createElement("p", { className: "q", dangerouslySetInnerHTML: { __html: t.text } })),
                React.createElement("div", { className: "quote-tara-figure" },
                    React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(t.pictureIdList)[0], alt: "", width: "115", height: "115" }))),
            React.createElement("h6", { className: "quote-tara-author" },
                t.firstName,
                " ",
                t.lastName),
            React.createElement("div", { className: "quote-tara-status" }, roles === null || roles === void 0 ? void 0 : roles.find(function (r, idx) { return r.roleId == t.roleId; }).name));
    });
    React.useEffect(function () {
        getTestimonials();
    }, []);
    React.useEffect(function () {
        getRoles();
    }, [testimonials]);
    return React.createElement("section", { className: "section-66 section-md-90 section-xl-bottom-100" },
        React.createElement("div", { className: "container" },
            React.createElement("h3", { className: "text-center" }, "Testimonials"),
            React.createElement("div", { className: "owl-carousel owl-spacing-1 owl-nav-classic owl-style-minimal", "data-autoplay": "true", "data-items": "1", "data-md-items": "2", "data-stage-padding": "0", "data-loop": "true", "data-margin": "30", "data-mouse-drag": "true", "data-nav": "true", "data-dots": "true", "data-dots-each": "1" }, mappedTestimonials)));
};
function SampleNextArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("div", { className: className, style: __assign({}, style), onClick: onClick }));
}
function SamplePrevArrow(props) {
    var className = props.className, style = props.style, onClick = props.onClick;
    return (React.createElement("div", { className: className, style: __assign({}, style), onClick: onClick }));
}
var GalleriesSection = function () {
    var _a = (0, react_1.useState)(), galleries = _a[0], setGalleries = _a[1], getGalleries = function () { return __awaiter(void 0, void 0, void 0, function () {
        var galleries, i, res, title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    galleries = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 7)) return [3 /*break*/, 5];
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/gallery_".concat(i + 1))];
                case 2:
                    res = _a.sent();
                    if (!(res.status == 200)) return [3 /*break*/, 4];
                    title = res.data.value;
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetGallery/".concat(title))];
                case 3:
                    res = _a.sent();
                    galleries.push(res.data);
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5:
                    setGalleries(galleries);
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getGalleries();
    }, []);
    return React.createElement("section", { className: "section section-last bg-default gallery-section" },
        React.createElement("div", { className: "container-fluid container-inset-0 isotope-wrap" },
            React.createElement("div", { className: "gallery-row" },
                React.createElement("div", { className: "grid-child grid-child-".concat(1, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 0 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-big wow slideInRight" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[0].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[0].pictureIdList)[0], alt: "", width: "310", height: "585" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[0].name) }, galleries[0].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[0].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(2, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 1 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-2 wow slideInDown" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[1].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[1].pictureIdList)[0], alt: "", width: "310", height: "585" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[1].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[1].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(3, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 2 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary wow slideInUp" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[2].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[2].pictureIdList)[0], alt: "", width: "631", height: "587" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[2].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[2].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(4, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 3 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-2 wow slideInUp" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[3].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[3].pictureIdList)[0], alt: "", width: "311", height: "289" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[3].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[3].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(5, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 4 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-2 wow slideInRight" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[4].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[4].pictureIdList)[0], alt: "", width: "311", height: "289" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[4].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[4].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(6, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 5 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-2 wow slideInLeft" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[5].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[5].pictureIdList)[0], alt: "", width: "311", height: "289" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[5].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[5].subText))))),
                React.createElement("div", { className: "grid-child grid-child-".concat(7, "   oh-desktop") }, (galleries === null || galleries === void 0 ? void 0 : galleries.length) > 6 &&
                    React.createElement("article", { className: "thumbnail thumbnail-mary thumbnail-mary-2 wow slideInLeft" },
                        React.createElement("a", { className: "thumbnail-mary-figure", href: "/Gallery/".concat(galleries[6].name), "data-lightgallery": "item" },
                            React.createElement("img", { src: (0, common_1.getPictureUrlFromList)(galleries[6].pictureIdList)[0], alt: "", width: "311", height: "289" })),
                        React.createElement("div", { className: "thumbnail-mary-caption" },
                            React.createElement("div", null,
                                React.createElement("h6", { className: "thumbnail-mary-title" },
                                    React.createElement("a", { href: "/Gallery/".concat(galleries[6].name) }, galleries[6].mainText)),
                                React.createElement("div", { className: "thumbnail-mary-location" }, galleries[6].subText))))))));
};
var AdditionalInfoSection = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m = (0, react_1.useState)(), boxesData = _m[0], setBoxesData = _m[1], getBoxes = function () { return __awaiter(void 0, void 0, void 0, function () {
        var boxes, i, res, resText, resLink;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    boxes = [];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 3)) return [3 /*break*/, 6];
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/box".concat(i + 1))];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/box".concat(i + 1, "_text"))];
                case 3:
                    resText = _a.sent();
                    return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/box".concat(i + 1, "_link"))];
                case 4:
                    resLink = _a.sent();
                    if (res.status == 200 && resText.status == 200) {
                        boxes.push({ title: res.data.value, text: resText.data.value, link: resLink.data.value });
                    }
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    setBoxesData(boxes);
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getBoxes();
    }, []);
    return React.createElement("section", { className: "section-50 section-md-75 section-lg-100" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row row-40" },
                (boxesData === null || boxesData === void 0 ? void 0 : boxesData.length) > 0 && React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "col-md-6 col-lg-4 height-fill" },
                        React.createElement("article", { className: "icon-box" },
                            React.createElement("div", { className: "box-top" },
                                React.createElement("div", { className: "box-icon" },
                                    React.createElement("span", { className: "novi-icon icon icon-primary icon-lg mercury-icon-briefcase" })),
                                React.createElement("div", { className: "box-header" },
                                    React.createElement("h5", null,
                                        React.createElement("a", { href: (_a = boxesData[0]) === null || _a === void 0 ? void 0 : _a.link }, (_b = boxesData[0]) === null || _b === void 0 ? void 0 : _b.title)))),
                            React.createElement("div", { className: "divider bg-accent" }),
                            React.createElement("div", { className: "box-body" },
                                React.createElement("p", null, (_c = boxesData[0]) === null || _c === void 0 ? void 0 : _c.text))))),
                (boxesData === null || boxesData === void 0 ? void 0 : boxesData.length) > 1 && ((_d = boxesData[1]) === null || _d === void 0 ? void 0 : _d.title.length) > 0 && React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "col-md-6 col-lg-4 height-fill" },
                        React.createElement("article", { className: "icon-box" },
                            React.createElement("div", { className: "box-top" },
                                React.createElement("div", { className: "box-icon" },
                                    React.createElement("span", { className: "novi-icon icon icon-primary icon-lg mercury-icon-users" })),
                                React.createElement("div", { className: "box-header" },
                                    React.createElement("h5", null,
                                        React.createElement("a", { href: (_e = boxesData[1]) === null || _e === void 0 ? void 0 : _e.link }, (_f = boxesData[1]) === null || _f === void 0 ? void 0 : _f.title)))),
                            React.createElement("div", { className: "divider bg-accent" }),
                            React.createElement("div", { className: "box-body" },
                                React.createElement("p", null, (_g = boxesData[1]) === null || _g === void 0 ? void 0 : _g.text))))),
                (boxesData === null || boxesData === void 0 ? void 0 : boxesData.length) > 2 && ((_h = boxesData[2]) === null || _h === void 0 ? void 0 : _h.title.length) > 0 && React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "col-md-6 col-lg-4 height-fill" },
                        React.createElement("article", { className: "icon-box" },
                            React.createElement("div", { className: "box-top" },
                                React.createElement("div", { className: "box-icon" },
                                    React.createElement("span", { className: "novi-icon icon icon-primary icon-lg mercury-icon-lib" })),
                                React.createElement("div", { className: "box-header" },
                                    React.createElement("h5", null,
                                        React.createElement("a", { href: (_j = boxesData[2]) === null || _j === void 0 ? void 0 : _j.link }, (_k = boxesData[2]) === null || _k === void 0 ? void 0 : _k.title)))),
                            React.createElement("div", { className: "divider bg-accent" }),
                            React.createElement("div", { className: "box-body" },
                                React.createElement("p", null, (_l = boxesData[2]) === null || _l === void 0 ? void 0 : _l.text))))))));
};
var root = document.getElementById("react_root");
ReactDOM.render(React.createElement(exports.MainPage, null), root);
//# sourceMappingURL=mainPage.js.map