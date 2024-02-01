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
var React = __importStar(require("react"));
var react_1 = require("react");
var ReactDOM = __importStar(require("react-dom"));
var common_1 = require("./common");
var axios_1 = __importDefault(require("axios"));
var react_hook_form_1 = require("react-hook-form");
var MenuPage = function () {
    var _a = (0, react_1.useState)(), elements = _a[0], setElements = _a[1], _b = (0, react_1.useState)(), parentElements = _b[0], setParentElements = _b[1], _c = (0, react_1.useState)(), cats = _c[0], setCategories = _c[1], _d = (0, react_1.useState)(), pages = _d[0], setPages = _d[1], _e = (0, react_1.useState)(), gals = _e[0], setGalleries = _e[1], _f = (0, react_1.useState)(false), showNew = _f[0], setNew = _f[1], getMenuElements = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetAllMenuElementList")];
                case 1:
                    res = _a.sent();
                    setElements(res.data.sort(function (a, b) { return (0, common_1.sortFunc)(a, b, "menuElementId"); }));
                    setParentElements(res.data.filter(function (m, idx) { return m.parentMenuElementId == null; }));
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
    }); }, getGalleries = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(common_1.baseApiUrl + "/GetVisibleGalleryList")];
                case 1:
                    res = _a.sent();
                    setGalleries(res.data);
                    return [2 /*return*/];
            }
        });
    }); }, newItem = React.createElement(MenuElementRow, { elements: elements, parentElements: parentElements, item: null, refreshFunc: getMenuElements, isNew: true, setShow: setNew, preparedLinksData: { cats: cats, pages: pages, gals: gals } });
    React.useEffect(function () {
        getMenuElements();
        getCategories();
        getPages();
        getGalleries();
    }, []);
    return React.createElement(common_1.PageSettingsSection, { title: 'Menu elements' },
        React.createElement("div", { className: "form-top-container" }, !showNew && React.createElement("div", { className: "btn btn-white btn-sm mb-0 btn-save", onClick: function () { return setNew(true); } }, "Add new")),
        React.createElement("form", { className: 'section-form' },
            React.createElement("div", { className: "form-content " },
                React.createElement("div", { className: "menu-element-row row" },
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "id"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "label"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "link"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "available links"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "visible"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "select parent"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "current parent"),
                    React.createElement("div", { className: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7' }, "options")),
                showNew && newItem,
                elements && elements.map(function (e, idx) { return React.createElement(MenuElementRow, { parentElements: parentElements, elements: elements, item: e, key: idx, refreshFunc: getMenuElements, preparedLinksData: { cats: cats, pages: pages, gals: gals } }); }))));
};
var MenuElementRow = function (props) {
    var _a;
    var item = props.item, parentElements = props.parentElements, _b = props.isNew, isNew = _b === void 0 ? false : _b, refreshFunc = props.refreshFunc, elements = props.elements, _c = props.preparedLinksData, cats = _c.cats, gals = _c.gals, pages = _c.pages, _d = props.setShow, setShow = _d === void 0 ? function () { } : _d, _e = (0, react_hook_form_1.useForm)({ defaultValues: __assign({}, item) }), register = _e.register, handleSubmit = _e.handleSubmit, setValue = _e.setValue, getValues = _e.getValues, onSubmit = function (data) {
    }, makeItem = function (data) {
        return {
            isVisible: (data === null || data === void 0 ? void 0 : data.isVisible) || false,
            link: (data === null || data === void 0 ? void 0 : data.link) || "",
            menuElementId: (item === null || item === void 0 ? void 0 : item.menuElementId) || -1,
            parentMenuElementId: (data === null || data === void 0 ? void 0 : data.parentMenuElementId) / 1 || null,
            text: (data === null || data === void 0 ? void 0 : data.text) || ""
        };
    }, addItem = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var item, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = makeItem(data);
                    url = common_1.baseApiUrl + "/AddMenuElement";
                    return [4 /*yield*/, axios_1.default.post(url, item, common_1.axiosBaseConfig)];
                case 1:
                    _a.sent();
                    setShow(false);
                    refreshFunc();
                    return [2 /*return*/];
            }
        });
    }); }, deleteItem = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var item, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = makeItem(data);
                    url = common_1.baseApiUrl + "/DeleteMenuElement/" + item.menuElementId;
                    return [4 /*yield*/, axios_1.default.delete(url, common_1.axiosBaseConfig)];
                case 1:
                    _a.sent();
                    refreshFunc();
                    return [2 /*return*/];
            }
        });
    }); }, editItem = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var item, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = makeItem(data);
                    url = common_1.baseApiUrl + "/UpdateMenuElement";
                    return [4 /*yield*/, axios_1.default.patch(url, item, common_1.axiosBaseConfig)];
                case 1:
                    _a.sent();
                    refreshFunc();
                    return [2 /*return*/];
            }
        });
    }); }, setLinkOnSelect = function (e) {
        if (e.target.value == "#") {
            setValue("link", "#");
            return;
        }
        var type = e.target.value.split("_")[0];
        var v = e.target.value.split("_")[1];
        var linkToSet = "";
        switch (type) {
            case "cat":
                linkToSet = "/Categories/".concat(v);
                break;
            case "gal":
                linkToSet = "/Gallery/".concat(v);
                break;
            default:
                linkToSet = "/Pages/".concat(v);
                break;
        }
        setValue("link", linkToSet);
    };
    var parentData = (0, common_1.mapObjectToSelect)(parentElements, "text", "menuElementId").filter(function (i) { return i.value != (item === null || item === void 0 ? void 0 : item.menuElementId); });
    var linkData = (0, common_1.mapObjectToSelect)(cats, "name", "name", "cat").concat((0, common_1.mapObjectToSelect)(pages, "title", "title", "page")).concat((0, common_1.mapObjectToSelect)(gals, "name", "name", "gal"));
    linkData.push({ label: "no link", value: "#" });
    parentData.push({ label: "no parent", value: null });
    return React.createElement("div", { className: "menu-element-row row" },
        React.createElement("div", { className: "id" }, (item === null || item === void 0 ? void 0 : item.menuElementId) || -1),
        React.createElement(common_1.PInput, { register: __assign({}, register("text")), inputProps: { type: 'text' } }),
        React.createElement(common_1.PInput, { register: __assign({}, register("link")), inputProps: { type: 'text' } }),
        React.createElement("div", null, parentData && (parentData === null || parentData === void 0 ? void 0 : parentData.length) > 0 &&
            React.createElement(common_1.Select, { register: register, defaultValue: null, data: linkData, name: "linkSelect", selectProps: { onChange: setLinkOnSelect } })),
        React.createElement(common_1.PInput, { register: __assign({}, register("isVisible")), inputProps: { type: 'checkbox' } }),
        React.createElement("div", null, parentData && (parentData === null || parentData === void 0 ? void 0 : parentData.length) > 0 &&
            React.createElement(common_1.Select, { register: register, defaultValue: item === null || item === void 0 ? void 0 : item.parentMenuElementId, data: parentData, name: "parentMenuElementId" })),
        React.createElement("div", null, elements && ((_a = elements.filter(function (e) { return (item === null || item === void 0 ? void 0 : item.parentMenuElementId) != null && e.menuElementId == item.parentMenuElementId; })[0]) === null || _a === void 0 ? void 0 : _a.text)),
        React.createElement("div", { className: "buttons-container" }, isNew ?
            React.createElement("div", { className: "btn btn-white btn-sm w-100 mb-0 btn-save", onClick: function (e) { return addItem(getValues()); } }, "Add")
            : React.createElement(React.Fragment, null,
                React.createElement("div", { className: "btn btn-white btn-sm w-100 mb-0 btn-save", onClick: function (e) { return editItem(getValues()); } }, "Edit"),
                React.createElement("div", { className: "btn btn-white btn-sm w-100 mb-0 btn-delete", onClick: function (e) { return deleteItem(getValues()); } }, "Delete"))));
};
var root = document.getElementById("react_root");
ReactDOM.render(React.createElement(MenuPage, null), root);
//# sourceMappingURL=menu.js.map