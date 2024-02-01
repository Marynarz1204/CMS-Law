"use strict";
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
exports.PageWrapper = void 0;
var axios_1 = __importDefault(require("axios"));
var React = __importStar(require("react"));
var react_1 = require("react");
var common_1 = require("./common");
var PageWrapper = function (props) {
    var children = props.children, className = props.className, _a = (0, react_1.useState)(), data = _a[0], setData = _a[1];
    return React.createElement(React.Fragment, null,
        React.createElement(Header, { className: className }),
        React.createElement("div", { className: ["react-page-container", className + "-header"].join(" ") }, children),
        React.createElement(Footer, { className: className }));
};
exports.PageWrapper = PageWrapper;
var Header = function (props) {
    var _a = (0, react_1.useState)(), menuElements = _a[0], setMenuElements = _a[1], _b = (0, react_1.useState)(), phone = _b[0], setPhone = _b[1], _c = (0, react_1.useState)(), address = _c[0], setAddress = _c[1], _d = (0, react_1.useState)(), socials = _d[0], setSocials = _d[1], _e = (0, react_1.useState)(), logo = _e[0], setLogo = _e[1], getMenuElements = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, obj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleMenuElementList")];
                case 1:
                    res = _a.sent();
                    obj = [];
                    if (res.status == 200) {
                        res.data.forEach(function (el) {
                            if (el.parentMenuElementId < 0 || el.parentMenuElementId == null) {
                                obj.push({ parent: el, children: [] });
                            }
                        });
                        res.data.forEach(function (el) {
                            if (el.parentMenuElementId > 0 || el.parentMenuElementId != null) {
                                var index = obj.findIndex(function (i) { return i.parent.menuElementId == el.parentMenuElementId; });
                                obj[index].children.push(el);
                            }
                        });
                        setMenuElements(obj);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, getPhone = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/phone")];
                case 1:
                    res = _a.sent();
                    setPhone(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/address")];
                case 1:
                    res = _a.sent();
                    setAddress(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getSocials = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetAllMainSocialMedia")];
                case 1:
                    res = _a.sent();
                    setSocials(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getLogo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, t, s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/main_logo")];
                case 1:
                    res = _a.sent();
                    t = res.data;
                    s = t.value.split("/");
                    s[2] = "Full";
                    t.value = s.join("/");
                    setLogo(t);
                    return [2 /*return*/];
            }
        });
    }); }, mappedMenuElements = menuElements && menuElements.map(function (el) {
        return React.createElement("li", { className: "rd-nav-item" },
            React.createElement("a", { className: "rd-nav-link", href: el.parent.link }, el.parent.text),
            React.createElement("ul", { className: 'child-menu' }, el.children.map(function (child, idx) {
                return React.createElement("li", { className: "child rd-nav-item" },
                    React.createElement("a", { className: "rd-nav-link", href: child.link }, child.text));
            })));
    }).filter(function (i) { return i; }), mappedSocial = socials === null || socials === void 0 ? void 0 : socials.map(function (social, idx) {
        var iconClass = (0, common_1.prepareSocialIcon)(social.name.split("_"));
        return React.createElement("li", { key: idx },
            React.createElement("a", { className: ["icon mdi", iconClass].join(" "), href: social.link }, social.pictureIdList));
    }), x = "";
    React.useEffect(function () {
        getMenuElements();
        getPhone();
        getAddress();
        getSocials();
        getLogo();
    }, []);
    return React.createElement(React.Fragment, null, React.createElement("header", { className: "page-head" },
        React.createElement("div", { className: "rd-navbar-wrap" },
            React.createElement("nav", { className: "rd-navbar rd-navbar-default", "data-layout": "rd-navbar-fixed", "data-sm-layout": "rd-navbar-fixed", "data-md-layout": "rd-navbar-fixed", "data-md-device-layout": "rd-navbar-fixed", "data-lg-layout": "rd-navbar-fixed", "data-lg-device-layout": "rd-navbar-fixed", "data-xl-layout": "rd-navbar-static", "data-xl-device-layout": "rd-navbar-static", "data-xxl-layout": "rd-navbar-static", "data-xxl-device-layout": "rd-navbar-static", "data-lg-stick-up-offset": "53px", "data-xl-stick-up-offset": "53px", "data-xxl-stick-up-offset": "53px", "data-lg-stick-up": "true", "data-xl-stick-up": "true", "data-xxl-stick-up": "true" },
                React.createElement("div", { className: "rd-navbar-inner" },
                    React.createElement("div", { className: "rd-navbar-aside-wrap" },
                        React.createElement("div", { className: "rd-navbar-aside" },
                            React.createElement("div", { className: "rd-navbar-aside-toggle", "data-rd-navbar-toggle": ".rd-navbar-aside" },
                                React.createElement("span", null)),
                            React.createElement("div", { className: "rd-navbar-aside-content" },
                                React.createElement("ul", { className: "rd-navbar-aside-group list-units" },
                                    React.createElement("li", null,
                                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-xs align-items-center" },
                                            React.createElement("div", { className: "unit-left" },
                                                React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary material-icons-phone" })),
                                            React.createElement("div", { className: "unit-body" },
                                                React.createElement("a", { className: "link-dusty-gray", href: "tel:".concat(phone === null || phone === void 0 ? void 0 : phone.value) }, phone === null || phone === void 0 ? void 0 : phone.value)))),
                                    React.createElement("li", null,
                                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-xs align-items-center" },
                                            React.createElement("div", { className: "unit-left" },
                                                React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary fa-envelope-o" })),
                                            React.createElement("div", { className: "unit-body" },
                                                React.createElement("a", { className: "link-dusty-gray", href: "mailto:#" }, address === null || address === void 0 ? void 0 : address.value)))))))),
                    React.createElement("div", { className: "rd-navbar-group" },
                        React.createElement("div", { className: "rd-navbar-panel" },
                            React.createElement("button", { className: "rd-navbar-toggle", "data-rd-navbar-toggle": ".rd-navbar-nav-wrap" },
                                React.createElement("span", null)),
                            React.createElement("a", { className: "rd-navbar-brand brand", href: "/" },
                                React.createElement("img", { src: common_1.baseApiUrl + (logo === null || logo === void 0 ? void 0 : logo.value), alt: "", width: "178", height: "30" }))),
                        React.createElement("div", { className: "rd-navbar-nav-wrap" },
                            React.createElement("div", { className: "rd-navbar-nav-inner" },
                                React.createElement("div", { className: "rd-navbar-btn-wrap" },
                                    React.createElement("a", { className: "button button-smaller button-primary-outline", href: "/About" }, "Appointment")),
                                React.createElement("ul", { className: "rd-navbar-nav" },
                                    React.createElement("li", { className: "rd-nav-item" },
                                        React.createElement("a", { className: "rd-nav-link", href: "/" }, "Home")),
                                    React.createElement("li", { className: "rd-nav-item" },
                                        React.createElement("a", { className: "rd-nav-link", href: "/About" }, "About us")),
                                    mappedMenuElements)))))))));
};
var Footer = function (props) {
    var _a = (0, react_1.useState)(), menuElements = _a[0], setMenuElements = _a[1], _b = (0, react_1.useState)(), phone = _b[0], setPhone = _b[1], _c = (0, react_1.useState)(), address = _c[0], setAddress = _c[1], _d = (0, react_1.useState)(), footertitle1 = _d[0], setFooterTitle1 = _d[1], _e = (0, react_1.useState)(), footertitle2 = _e[0], setFooterTitle2 = _e[1], _f = (0, react_1.useState)(), socials = _f[0], setSocials = _f[1], _g = (0, react_1.useState)(), categories = _g[0], setCategories = _g[1], _h = (0, react_1.useState)(), pages = _h[0], setPages = _h[1], _j = (0, react_1.useState)(), logo = _j[0], setLogo = _j[1], _k = (0, react_1.useState)(), rights = _k[0], setRights = _k[1], _l = (0, react_1.useState)(), mail = _l[0], setMail = _l[1], getMenuElements = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, obj;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleMenuElementList")];
                case 1:
                    res = _a.sent();
                    obj = [];
                    if (res.status == 200) {
                        res.data.forEach(function (el) {
                            if (el.parentMenuElementId < 0 || el.parentMenuElementId == null) {
                                obj.push({ parent: el, children: [] });
                            }
                        });
                        res.data.forEach(function (el) {
                            if (el.parentMenuElementId > 0 || el.parentMenuElementId != null) {
                                var index = obj.findIndex(function (i) { return i.parent.menuElementId == el.parentMenuElementId; });
                                obj[index].children.push(el);
                            }
                        });
                        setMenuElements(obj);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, getRights = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/footer_rights")];
                case 1:
                    res = _a.sent();
                    setRights(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getPhone = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/phone")];
                case 1:
                    res = _a.sent();
                    setPhone(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getMail = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/footer_email")];
                case 1:
                    res = _a.sent();
                    setMail(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getAddress = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/address")];
                case 1:
                    res = _a.sent();
                    setAddress(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getFooterTitle1 = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/footer_title1")];
                case 1:
                    res = _a.sent();
                    setFooterTitle1(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getFooterTitle2 = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/footer_title2")];
                case 1:
                    res = _a.sent();
                    setFooterTitle2(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getPages = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisiblePageList")];
                case 1:
                    res = _a.sent();
                    setPages(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, getSocials = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetAllMainSocialMedia")];
                case 1:
                    res = _a.sent();
                    setSocials(res.data);
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
    }); }, getLogo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, t, s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetKeyValueByKey/footer_logo")];
                case 1:
                    res = _a.sent();
                    t = res.data;
                    s = t.value.split("/");
                    s[2] = "Full";
                    t.value = s.join("/");
                    setLogo(t);
                    return [2 /*return*/];
            }
        });
    }); }, mappedMenuElements = menuElements && menuElements.map(function (el) {
        return React.createElement("li", { className: "rd-nav-item" },
            React.createElement("a", { className: "rd-nav-link", href: el.parent.link }, el.parent.text),
            React.createElement("ul", { className: 'child-menu' }, el.children.map(function (child, idx) {
                return React.createElement("li", { className: "child rd-nav-item" },
                    React.createElement("a", { className: "rd-nav-link", href: child.link }, child.text));
            })));
    }).filter(function (i) { return i; }), mappedSocial = socials === null || socials === void 0 ? void 0 : socials.map(function (social, idx) {
        var iconClass = (0, common_1.prepareSocialIcon)(social.name.split("_"));
        return React.createElement("li", { key: idx },
            React.createElement("a", { className: ["icon mdi", iconClass].join(" "), href: social.link }, social.pictureIdList));
    }), x = "";
    React.useEffect(function () {
        getMenuElements();
        getPhone();
        getAddress();
        getSocials();
        getCategories();
        getLogo();
        getRights();
        getPages();
        getFooterTitle1();
        getMail();
        getFooterTitle2();
    }, []);
    return React.createElement(React.Fragment, null,
        React.createElement("footer", { className: "page-foot bg-ebony-clay" },
            React.createElement("div", { className: "section-40 section-md-75" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row justify-content-sm-center" },
                        React.createElement("div", { className: "col-sm-9 col-md-11 col-xl-12" },
                            React.createElement("div", { className: "row row-50" },
                                React.createElement("div", { className: "col-md-6 col-lg-10 col-xl-3" },
                                    React.createElement("div", { className: "inset-xl-right-20" },
                                        React.createElement("a", { className: "brand", href: "index.html" },
                                            React.createElement("img", { src: "images/logo-inverse-143x28.png", alt: "", width: "143", height: "28" })),
                                        React.createElement("p", null, "If you or your business is facing a legal challenge that calls for sound advice and skilled representation, contact us today to arrange a free  consultation with an attorney."),
                                        React.createElement("a", { className: "link link-group link-group-animated link-bold link-white", href: "#" },
                                            React.createElement("span", null, "Free Consultation"),
                                            React.createElement("span", { className: "novi-icon icon icon-xxs icon-primary fa fa-angle-right" })))),
                                React.createElement("div", { className: "col-md-6 col-lg-4 col-xl-3" },
                                    React.createElement("p", { className: "h7" }, "Recent Posts"),
                                    React.createElement("article", { className: "post post-preview post-preview-inverse" },
                                        React.createElement("a", { href: "#" },
                                            React.createElement("div", { className: "unit unit-horizontal unit-spacing-lg" },
                                                React.createElement("div", { className: "unit-left" },
                                                    React.createElement("figure", { className: "post-image" },
                                                        React.createElement("img", { src: "images/post-preview-4-70x70.jpg", alt: "", width: "70", height: "70" }))),
                                                React.createElement("div", { className: "unit-body" },
                                                    React.createElement("div", { className: "post-header" },
                                                        React.createElement("p", null, "Help Us Make the Law Accessible for Everyone")),
                                                    React.createElement("div", { className: "post-meta" },
                                                        React.createElement("ul", { className: "list-meta" },
                                                            React.createElement("li", null,
                                                                React.createElement("time", { dateTime: "2019-06-23" }, "June 23, 2019 ")),
                                                            React.createElement("li", null, "3 Comments"))))))),
                                    React.createElement("article", { className: "post post-preview post-preview-inverse" },
                                        React.createElement("a", { href: "#" },
                                            React.createElement("div", { className: "unit unit-horizontal unit-spacing-lg" },
                                                React.createElement("div", { className: "unit-left" },
                                                    React.createElement("figure", { className: "post-image" },
                                                        React.createElement("img", { src: "images/post-preview-5-70x70.jpg", alt: "", width: "70", height: "70" }))),
                                                React.createElement("div", { className: "unit-body" },
                                                    React.createElement("div", { className: "post-header" },
                                                        React.createElement("p", null, "Legal Documents Every Landlord Needs ")),
                                                    React.createElement("div", { className: "post-meta" },
                                                        React.createElement("ul", { className: "list-meta" },
                                                            React.createElement("li", null,
                                                                React.createElement("time", { dateTime: "2019-06-23" }, "June 20, 2019")),
                                                            React.createElement("li", null, "3 Comments")))))))),
                                React.createElement("div", { className: "col-md-6 col-lg-4 col-xl-3" },
                                    React.createElement("p", { className: "h7" }, "Quick links"),
                                    React.createElement("div", { className: "row" },
                                        React.createElement("div", { className: "col-6" },
                                            React.createElement("ul", { className: "list-marked-variant-2" },
                                                React.createElement("li", null,
                                                    React.createElement("a", { href: "/" }, "Home")),
                                                React.createElement("li", null,
                                                    React.createElement("a", { href: "#" }, "Blog")))),
                                        React.createElement("div", { className: "col-6" },
                                            React.createElement("ul", { className: "list-marked-variant-2" },
                                                React.createElement("li", null,
                                                    React.createElement("a", { href: "/About" }, "About us")),
                                                React.createElement("li", null,
                                                    React.createElement("a", { href: "#" }, "Appointment")))))),
                                React.createElement("div", { className: "col-md-6 col-lg-4 col-xl-3" },
                                    React.createElement("p", { className: "h7" }, "Contact us"),
                                    React.createElement("address", { className: "contact-info text-left" },
                                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-md align-items-center" },
                                            React.createElement("div", { className: "unit-left" },
                                                React.createElement("span", { className: "novi-icon icon icon-xs icon-storm-gray material-icons-phone" })),
                                            React.createElement("div", { className: "unit-body" },
                                                React.createElement("a", { className: "link-white", href: "tel:#" }, "+123 234 984 47 45"))),
                                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-md align-items-center" },
                                            React.createElement("div", { className: "unit-left" },
                                                React.createElement("span", { className: "novi-icon icon icon-xs icon-storm-gray fa fa-envelope-o" })),
                                            React.createElement("div", { className: "unit-body" },
                                                React.createElement("a", { className: "link-white", href: "mailto:#" }, "info@demolink.org"))),
                                        React.createElement("div", { className: "unit unit-horizontal unit-spacing-md" },
                                            React.createElement("div", { className: "unit-left" },
                                                React.createElement("span", { className: "novi-icon icon icon-xs icon-storm-gray material-icons-place" })),
                                            React.createElement("div", { className: "unit-body" },
                                                React.createElement("a", { className: "link-white d-inline", href: "#" }, "6036 Richmond hwy, Alexandria, VA USA 22303")))))))))),
            React.createElement("div", { className: "container" },
                React.createElement("hr", null)),
            React.createElement("div", { className: "section-35" },
                React.createElement("div", { className: "container text-center" },
                    React.createElement("div", { className: "row row-15 flex-md-row-reverse justify-content-md-between align-items-md-center" },
                        React.createElement("div", { className: "col-md-6 text-md-right" },
                            React.createElement("div", { className: "group-sm group-middle" },
                                React.createElement("p", { className: "font-italic text-white" }, "Follow Us:"),
                                React.createElement("ul", { className: "list-inline footer-social-list footer-social-list-2 footer-social-list-3" }, mappedSocial))),
                        React.createElement("div", { className: "col-md-6 text-md-left" },
                            React.createElement("p", { className: "rights text-white" }, rights ? rights.value : React.createElement(React.Fragment, null,
                                React.createElement("span", null, "\u00A9\u00A0"),
                                React.createElement("span", { className: "copyright-year" }),
                                React.createElement("span", null),
                                React.createElement("span", null, ".\u00A0"),
                                React.createElement("span", null, "All Rights Reserved."),
                                React.createElement("span", null,
                                    " Design\u00A0by\u00A0",
                                    React.createElement("a", { href: "https://www.templatemonster.com" }, "TemplateMonster"))))))))));
};
//# sourceMappingURL=commonElements.js.map