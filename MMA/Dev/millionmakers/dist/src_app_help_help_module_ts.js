"use strict";
(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["src_app_help_help_module_ts"],{

/***/ 751:
/*!****************************************!*\
  !*** ./src/app/core/app.constatnts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
class AppConstants {
}
AppConstants.TERMS_AND_CONDITIONS = 'https://bluenumber.org/term-of-use/#term-of-use:~:text=20%20MILLION%20MAKERS%20TERMS%20OF%20USE';


/***/ }),

/***/ 5899:
/*!*********************************************************!*\
  !*** ./src/app/help/contact-us/contact-us.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ContactUsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onBackClick() {
        this.router.navigateByUrl('help/list');
    }
    onURLClick() {
        window.open('https://millionmakers.org/contact-us/');
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 12, vars: 0, consts: [[1, "pma"], [1, "container"], [1, "pt-2"], [1, "row"], [1, "col-md-12"], [1, "text-gray-1", "pma-heading"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "row", "mt-4", "p-3", "pt-0"], [1, "col-md-12", "my-qr", "mt-3", "contact-link"], [1, "mouse-pointer", 3, "click"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_a_click_10_listener() { return ctx.onURLClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "https://millionmakers.org/contact-us/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 15px;\n  line-height: 13px;\n  color: #0A4797 !important;\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHdCQUFBO0FBRkY7QUFHSTtFQUNFLGdCQzZCRztFRDVCSCxjQUFBO0VBQ0EsZUNvQkM7QURyQlA7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQUROIiwiZmlsZSI6ImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmdy02MDA7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtbGlua3tcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgY29sb3I6ICAjMEE0Nzk3ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ 5213:
/*!*************************************************************!*\
  !*** ./src/app/help/data-privacy/data-privacy.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPrivacyComponent": () => (/* binding */ DataPrivacyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class DataPrivacyComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClickBackOrOk() {
        this.router.navigateByUrl('help/list');
    }
}
DataPrivacyComponent.ɵfac = function DataPrivacyComponent_Factory(t) { return new (t || DataPrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
DataPrivacyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataPrivacyComponent, selectors: [["app-data-privacy"]], decls: 22, vars: 0, consts: [[1, "pma"], [1, "container"], [1, "pt-2", "policy-para"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1"], [1, "fas", "fa-chevron-left", "pe-3", "mouse-pointer", 3, "click"], [1, "pt-0", "mt-5", "scroll"], [1, "text-center", "pma-buttons", "p-4"], [1, "col-12"], [1, "btn", "btn-mm-p-blue", "btn-lg", "btn-block", 3, "click"]], template: function DataPrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataPrivacyComponent_Template_i_click_6_listener() { return ctx.onClickBackOrOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Data Privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A \"Bluenumber\" or \"B#\" is your unique digital identity. It is a self-sovereign identity (SSI) on the blockchain.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All the data you create is linked to your SSI and this mobile phone number. You can access, share and make money by licensing it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Organizations will use your B# to ask you questions. If you choose to respond and share data you will get paid directly on this phone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Your data is your property because you created it. It can only be used with your knowledge and permission. If it is used you must and will be paid a fee.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 8)(18, "div", 3)(19, "div", 9)(20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataPrivacyComponent_Template_a_click_20_listener() { return ctx.onClickBackOrOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Okay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  line-height: 20px;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-blue[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-blue[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .policy-para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 450px;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  color: #545454;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usd0JBQUE7QUFKRjtBQUtFO0VBQ0UsZ0JDMkJLO0VEMUJMLGNDRlE7RURHUixlQ2tCRztBRHJCUDtBQU1FO0VBQ0UsZUNPRztFRE5ILGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBTEo7QUFNSTtFQUNFLHlCQ3pCUztFRDBCVCxlQ0hDO0VESUQsZUN5Qkk7RUR4QkosbUJDWUU7RURYRixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFKTjtBQU1NO0VBQ0UsWUFBQTtBQUpSO0FBVUk7RUFDRSxjQ3BDTTtBRDRCWjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBVko7QUFZSTtFQUNFLGlCQUFBO0VBQ0EsY0M5Q007RUQrQ04sZ0JBQUE7QUFWTiIsImZpbGUiOiJkYXRhLXByaXZhY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTYwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAkZi0yNDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAkZi0xMztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIH1cclxuXHJcbiAgLnBtYS1idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLmJ0bi1tbS1wLWJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9saWN5LXBhcmEge1xyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNjcm9sbCB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ 9566:
/*!***********************************************************!*\
  !*** ./src/app/help/help-layout/help-layout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpLayoutComponent": () => (/* binding */ HelpLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class HelpLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpLayoutComponent.ɵfac = function HelpLayoutComponent_Factory(t) { return new (t || HelpLayoutComponent)(); };
HelpLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpLayoutComponent, selectors: [["app-help-layout"]], decls: 1, vars: 0, template: function HelpLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7251:
/*!*******************************************************!*\
  !*** ./src/app/help/help-list/help-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpListComponent": () => (/* binding */ HelpListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class HelpListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.appId = localStorage.getItem('app');
    }
    onBackClick() {
        this.router.navigateByUrl('home/info');
    }
    onClickAboutBluenumber() {
        window.open("https://bluenumber.org/");
    }
    onClickDataPrivacy() {
        this.router.navigateByUrl('help/data-privacy');
    }
    onClickTermsOfUse() {
        window.location.href = 'https://bluenumber.org/term-of-use/#term-of-use:~:text=20%20MILLION%20MAKERS%20TERMS%20OF%20USE';
        // this.router.navigateByUrl('help/user-agreement');
    }
    onClickUserAgreement() {
        this.router.navigateByUrl('help/user-agreement');
    }
    onClickRules() {
        this.router.navigateByUrl('help/rules-payment');
    }
    onClickContactUs() {
        this.router.navigateByUrl('help/contactus');
    }
}
HelpListComponent.ɵfac = function HelpListComponent_Factory(t) { return new (t || HelpListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HelpListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpListComponent, selectors: [["app-help-list"]], decls: 31, vars: 0, consts: [[1, "pma"], [1, "container"], [1, "pt-2"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "mb-5"], [1, "fas", "fa-chevron-left", "pe-3", "mouse-pointer", 3, "click"], [1, "text-center", "pma-buttons", "help"], ["type", "none", 1, "p-0", "m-0"], [1, "d-flex", "pb-2", "justify-content-between"], [1, "btn", "btn-p", "btn-block", 3, "click"], [1, ""], [1, "pull-right"], [1, "fas", "fa-angle-right"], [1, "d-flex", "justify-content-between", "pb-2"]], template: function HelpListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpListComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpListComponent_Template_button_click_11_listener() { return ctx.onClickAboutBluenumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Bluenumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14)(17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpListComponent_Template_button_click_17_listener() { return ctx.onClickDataPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14)(22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpListComponent_Template_button_click_22_listener() { return ctx.onClickTermsOfUse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14)(27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpListComponent_Template_button_click_27_listener() { return ctx.onClickContactUs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    } }, styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .pp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 170px !important;\n  display: inline-block;\n}\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 300;\n  padding: 10px 30px;\n  min-width: 100%;\n  padding-left: 20px;\n  text-align: left;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  padding-left: 20px !important;\n  font-weight: 500;\n  color: #545454 !important;\n  text-align: left;\n  padding: 10px 30px;\n  min-width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.pma[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   .text-dark[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtBQUhGO0FBSUU7RUFDRSxnQkM0Qks7RUQzQkwsY0NEUTtFREVSLGVDbUJHO0FEckJQO0FBTUk7RUFDRSxlQ1FDO0FEWlA7QUFRRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBTko7QUFTRTtFQUNFLGVDREc7QUROUDtBQVlJO0VBRUUseUJDOUJPO0VEK0JQLGVDVEM7RURVRCxlQ21CSTtFRGxCSixtQkNNRTtFRExGLFdBQUE7RUFFQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBaUJJO0VBQ0UseUJDN0NZO0VEOENaLGVDNUJDO0VENkJELGVBQUE7RUFDQSxtQkNiRTtFRGNGLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZk47QUFpQk07RUFDRSxZQUFBO0FBZlI7QUFzQkk7RUFDRSxtQkFBQTtBQXBCTjtBQXVCSTtFQUNFLHlCQUFBO0FBckJOIiwiZmlsZSI6ImhlbHAtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBNQSBWYXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvblxyXG4ucG1hIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNjAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gIH1cclxuXHJcbiAgLnBwLXRleHQge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucC1zdWNjZXNzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gIH1cclxuXHJcbiAgLnBtYS1idXR0b25zIHtcclxuXHJcbiAgICAuYnRuLXAge1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAvLyBwYWRkaW5nOiA5cHggNzlweDtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtZ3JheTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWdyYXkgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuaGVscCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtZGFyayB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbi8vIGJ1dHRvbiBpe1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuIiwiLy8gUE1BIENvbG9yc1xyXG4kdGV4dC1wcmltYXJ5OiAjMEE0Nzk3O1xyXG4kbW0tcHJpbWFyeTogI0FEMEM2MjtcclxuJG1tLXByaW1hcnktZGlzYWJsZWQ6ICNjNGM0YzQ7XHJcbiRtbS1zZWNvbmRhcnk6ICM2MjFDNDM7XHJcbiRtbS1zdWNjZXNzOiAjRUE2MDBFO1xyXG4kdGV4dC1saWdodC1ncmF5OiAjRjhGOEY4O1xyXG4kdGV4dC1ncmF5OiAjNTQ1NDU0O1xyXG4kZ3JheS1iZzogI0Y4RjhGODtcclxuJGJnLXdoaXRlOiAjZmZmO1xyXG4kZ3JheS1ib3JkZXI6ICNEQURBREE7XHJcbiRibHVpc2g6ICMyNzNCNEE7XHJcbiRiZy1saWdodDogI0YzRjNGMztcclxuJHdoaXRlLWNvbG9yOiNGRkZGRkY7XHJcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcclxuJHllc2J0bi1ibHVlOiAjMUM0REExO1xyXG4kbm9idG4tbGlnaHQ6ICM0NDcyQzQ7XHJcbi8vIFBNQSBGb250IFNpemVzXHJcbiRmLTEwOiAxMHB4OyAgICAgICBcclxuJGYtMTE6IDExcHg7ICAgICAgIFxyXG4kZi0xMjogMTJweDsgICAgICAgXHJcbiRmLTEzOiAxM3B4OyAgICAgICBcclxuJGYtMTQ6IDE0cHg7XHJcbiRmLTE1OiAxNXB4O1xyXG4kZi0xNjogMTZweDsgICAgXHJcbiRmLTE4OiAxOHB4OyAgICBcclxuJGYtMTk6IDE5cHg7XHJcbiRmLTIwOiAyMHB4O1xyXG4kZi0yNDogMjRweDtcclxuJGYtMjU6IDI1cHg7XHJcbiRmLTMwOiAzMHB4O1xyXG4kZi0zNjogMzZweDtcclxuJGYtNDA6IDQwcHg7XHJcblxyXG4vLyBQTUEgRm9udCBXZWlnaHRcclxuJGZ3LTYwMDogNjAwO1xyXG4kZnctNTAwOiA1MDA7XHJcbiRmdy00MDA6IDQwMDtcclxuJGZ3LTMwMDogMzAwO1xyXG5cclxuLy8gUE1BIFJhZGl1c1xyXG4kYnItMTA6IDEwcHg7XHJcblxyXG4vLyBQTUEgUGFkZGluZ3NcclxuJHBhZGQtMTA6IDEwcHg7XHJcbiRwYWRkLTIwOiAyMHB4O1xyXG4kcGFkZC0zMDogMzBweDtcclxuXHJcblxyXG4vLyBQTUEgMCBWYWx1ZXNcclxuJHZhbHVlLTA6IDBweDtcclxuXHJcbi8vIFBNQSBDdXJzb3JzXHJcbiRwb2ludGVyOiBwb2ludGVyO1xyXG5cclxuLy8gZm9udC1mYW1pbHlcclxuJGZvbnQtZmFtaWx5OidMYXRvJywgc2Fucy1zZXJpZjtcclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 5282:
/*!*********************************************!*\
  !*** ./src/app/help/help-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpRoutingModule": () => (/* binding */ HelpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 5899);
/* harmony import */ var _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-privacy/data-privacy.component */ 5213);
/* harmony import */ var _help_layout_help_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-layout/help-layout.component */ 9566);
/* harmony import */ var _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-list/help-list.component */ 7251);
/* harmony import */ var _help_rules_payment_help_rules_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-rules-payment/help-rules-payment.component */ 2617);
/* harmony import */ var _help_user_agreement_help_user_agreement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-user-agreement/help-user-agreement.component */ 3712);
/* harmony import */ var _rules_and_payment_rules_and_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules-and-payment/rules-and-payment.component */ 4119);
/* harmony import */ var _user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-agreement/user-agreement.component */ 8186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: '',
        component: _help_layout_help_layout_component__WEBPACK_IMPORTED_MODULE_2__.HelpLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_3__.HelpListComponent
            },
            {
                path: 'data-privacy',
                component: _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_1__.DataPrivacyComponent
            },
            {
                path: 'user-agreement',
                component: _user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_7__.UserAgreementComponent
            },
            {
                path: 'agreement',
                component: _help_user_agreement_help_user_agreement_component__WEBPACK_IMPORTED_MODULE_5__.HelpUserAgreementComponent
            },
            {
                path: 'rules-payment',
                component: _help_rules_payment_help_rules_payment_component__WEBPACK_IMPORTED_MODULE_4__.HelpRulesPaymentComponent
            },
            {
                path: 'rules',
                component: _rules_and_payment_rules_and_payment_component__WEBPACK_IMPORTED_MODULE_6__.RulesAndPaymentComponent
            },
            {
                path: 'contactus',
                component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            },
        ]
    }
];
class HelpRoutingModule {
}
HelpRoutingModule.ɵfac = function HelpRoutingModule_Factory(t) { return new (t || HelpRoutingModule)(); };
HelpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HelpRoutingModule });
HelpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HelpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 2617:
/*!*************************************************************************!*\
  !*** ./src/app/help/help-rules-payment/help-rules-payment.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpRulesPaymentComponent": () => (/* binding */ HelpRulesPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class HelpRulesPaymentComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onBackClick() {
        this.router.navigateByUrl('help/list');
    }
}
HelpRulesPaymentComponent.ɵfac = function HelpRulesPaymentComponent_Factory(t) { return new (t || HelpRulesPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
HelpRulesPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpRulesPaymentComponent, selectors: [["app-help-rules-payment"]], decls: 20, vars: 0, consts: [[1, "pma"], [1, "container"], [1, "p-4", "pt-2", "policy-para"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "mb-5"], [1, "fas", "fa-chevron-left", "pr-3", "mouse-pointer", 3, "click"], [1, "pt-0", "mt-5", "mb-3", "scroll"], [1, "text-dark"], [1, "text-center", "pma-buttons"], [1, "btn", "btn-mm-p-oran", "btn-lg", "btn-block", 3, "click"]], template: function HelpRulesPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpRulesPaymentComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Rules & Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "By agreeing with the Terms of Use, you acknowledge that you are voluntarily participating in the survey.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "If the survey runs for only one (1) day, then you will be paid within 72 hours upon completion of the survey. For surveys of more than one (1) day, you are eligible to receive half of the license fee once you complete the first two (2) days of the survey. You will then receive the remaining amount of the license fee upon completion of the full survey cycle. If you miss a day you will not be eligible for the full amount.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "payment will be made within 72 hours after being claimed, if eligible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All payments are only issued through a mobile wallet service only to the phone number that responded to the survey for the whole cycle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpRulesPaymentComponent_Template_a_click_18_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I understand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .pp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-oran[_ngcontent-%COMP%] {\n  background-color: #EA600E;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-oran[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .policy-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0A4797;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.pma[_ngcontent-%COMP%]   .policy-para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 450px;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  color: #545454;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtcnVsZXMtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBQTtBQUpGO0FBS0U7RUFDRSxnQkMyQks7RUQxQkwsY0NGUTtFREdSLGVDa0JHO0FEckJQO0FBT0k7RUFDRSxlQ09DO0FEWlA7QUFTRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUEo7QUFVRTtFQUNFLGVDTEc7QURIUDtBQVlJO0VBQ0UseUJDMUJPO0VEMkJQLGVDUkM7RURTRCxlQ29CSTtFRG5CSixtQkNPRTtFRE5GLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQVZOO0FBWU07RUFDRSxZQUFBO0FBVlI7QUFjSTtFQUNFLHlCQzdDUztFRDhDVCxlQ3ZCQztFRHdCRCxlQ0tJO0VESkosbUJDUkU7RURTRixXQUFBO0VBQ0EsZ0JBQUE7QUFaTjtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBaUJFO0VBQ0UsZUNoQ0c7RURpQ0gsZ0JBQUE7RUFDQSxjQ3ZEUTtBRHdDWjtBQWtCRTtFQUNFLGNDakVXO0VEa0VYLDBCQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFrQkk7RUFDRSxxQkFBQTtBQWhCTjtBQXFCSTtFQUNFLGNDdEVNO0FEbURaO0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBckJKO0FBdUJJO0VBQ0UsaUJBQUE7RUFDQSxjQ2hGTTtFRGlGTixnQkFBQTtBQXJCTiIsImZpbGUiOiJoZWxwLXJ1bGVzLXBheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy02MDA7XHJcbiAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgfVxyXG5cclxuICAucHAtdGV4dCB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wLXN1Y2Nlc3Mge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTM7XHJcbiAgfVxyXG5cclxuICAucG1hLWJ1dHRvbnMge1xyXG4gICAgLmJ0bi1tbS1wLW9yYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tc3VjY2VzcztcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LXByaW1hcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2xpY3ktdGV4dCB7XHJcbiAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2xpY3ktcGFyYSB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 3712:
/*!***************************************************************************!*\
  !*** ./src/app/help/help-user-agreement/help-user-agreement.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpUserAgreementComponent": () => (/* binding */ HelpUserAgreementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-agreement/user-agreement.component */ 8186);



class HelpUserAgreementComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    ngOnInit() {
        if (this.sharedService.isLanguageChanged) {
            this.sharedService.isLanguageChanged = false;
            window.location.reload();
        }
    }
}
HelpUserAgreementComponent.ɵfac = function HelpUserAgreementComponent_Factory(t) { return new (t || HelpUserAgreementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService)); };
HelpUserAgreementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpUserAgreementComponent, selectors: [["app-help-user-agreement"]], decls: 1, vars: 1, consts: [[3, "reqFrom"]], template: function HelpUserAgreementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-agreement", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("reqFrom", "help");
    } }, directives: [_user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_1__.UserAgreementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLXVzZXItYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6700:
/*!*************************************!*\
  !*** ./src/app/help/help.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpModule": () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 5282);
/* harmony import */ var _help_layout_help_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-layout/help-layout.component */ 9566);
/* harmony import */ var _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-privacy/data-privacy.component */ 5213);
/* harmony import */ var _user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-agreement/user-agreement.component */ 8186);
/* harmony import */ var _rules_and_payment_rules_and_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules-and-payment/rules-and-payment.component */ 4119);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 5899);
/* harmony import */ var _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-list/help-list.component */ 7251);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _help_user_agreement_help_user_agreement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help-user-agreement/help-user-agreement.component */ 3712);
/* harmony import */ var _help_rules_payment_help_rules_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./help-rules-payment/help-rules-payment.component */ 2617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class HelpModule {
}
HelpModule.ɵfac = function HelpModule_Factory(t) { return new (t || HelpModule)(); };
HelpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HelpModule });
HelpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HelpModule, { declarations: [_help_layout_help_layout_component__WEBPACK_IMPORTED_MODULE_1__.HelpLayoutComponent,
        _data_privacy_data_privacy_component__WEBPACK_IMPORTED_MODULE_2__.DataPrivacyComponent,
        _user_agreement_user_agreement_component__WEBPACK_IMPORTED_MODULE_3__.UserAgreementComponent,
        _rules_and_payment_rules_and_payment_component__WEBPACK_IMPORTED_MODULE_4__.RulesAndPaymentComponent,
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__.ContactUsComponent,
        _help_list_help_list_component__WEBPACK_IMPORTED_MODULE_6__.HelpListComponent,
        _help_user_agreement_help_user_agreement_component__WEBPACK_IMPORTED_MODULE_8__.HelpUserAgreementComponent,
        _help_rules_payment_help_rules_payment_component__WEBPACK_IMPORTED_MODULE_9__.HelpRulesPaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule] }); })();


/***/ }),

/***/ 4119:
/*!***********************************************************************!*\
  !*** ./src/app/help/rules-and-payment/rules-and-payment.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesAndPaymentComponent": () => (/* binding */ RulesAndPaymentComponent)
/* harmony export */ });
/* harmony import */ var _core_app_constatnts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/app.constatnts */ 751);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function RulesAndPaymentComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesAndPaymentComponent_i_6_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onBackClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RulesAndPaymentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesAndPaymentComponent_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onBackClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Go Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class RulesAndPaymentComponent {
    constructor(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.isAgree = false;
        this.showBackBtn = true;
    }
    ngOnInit() {
        if (this.sharedService.isLanguageChanged) {
            this.sharedService.isLanguageChanged = false;
            window.location.reload();
        }
        if ((localStorage.getItem('surveyType') == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode || localStorage.getItem('surveyType') == '') && localStorage.getItem('claim') == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey) {
            this.showBackBtn = false;
        }
        else {
            this.showBackBtn = true;
        }
    }
    openTermsOrRulesScreen(path) {
        const url = this.router.serializeUrl(this.router.createUrlTree([path]));
        window.open(url, '_blank');
    }
    openExternalLink() {
        window.open(_core_app_constatnts__WEBPACK_IMPORTED_MODULE_0__.AppConstants.TERMS_AND_CONDITIONS, '_blank');
    }
    onBackClick() {
        this.router.navigateByUrl('home/language');
    }
    onAgreeClick() {
        this.router.navigateByUrl('home/info');
        // if (this.isAgree) {
        //   this.router.navigateByUrl('home/info');
        // }
        // this.isAgree = !this.isAgree
    }
}
RulesAndPaymentComponent.ɵfac = function RulesAndPaymentComponent_Factory(t) { return new (t || RulesAndPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService)); };
RulesAndPaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RulesAndPaymentComponent, selectors: [["app-rules-and-payment"]], decls: 34, vars: 2, consts: [[1, "pma"], [1, "container"], [1, "pt-2", "policy-para"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "mb-4"], ["class", "fas fa-chevron-left pe-3 mouse-pointer", 3, "click", 4, "ngIf"], [1, "pt-0", "mb-3", "scroll"], ["type", "none", 1, "p-0", "m-0", "ps-4", "list-style"], [1, ""], [1, "fas", "fa-chevron-right", "pe-2"], [1, "mouse-pointer", "fw-bold", 3, "click"], [1, "pma-buttons", "p-4"], [1, "col-12", "text-center"], [1, "btn", "btn-mm-p", "btn-lg", "btn-block", 3, "click"], ["class", "col-12 text-center mt-2", 4, "ngIf"], [1, "fas", "fa-chevron-left", "pe-3", "mouse-pointer", 3, "click"], [1, "col-12", "text-center", "mt-2"]], template: function RulesAndPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RulesAndPaymentComponent_i_6_Template, 1, 0, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Rules & Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Rules & Payment are governed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesAndPaymentComponent_Template_a_click_13_listener() { return ctx.openExternalLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, ". You acknowledge that you are voluntarily participating in this survey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " You are only eligible to receive payment after you have completed the required surveys. Depending on your deployment this could be daily or at the end of a set of surveys over several days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Payments will be made within 72 hours after being claimed, if eligible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " You are only entitled to one payment. Depending on your deployment this could be daily or at the end of a set of surveys. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Payment will only be sent by digital link to the mobile number that completed the survey(s). Payment will be made to bank account, mobile wallet, by gift card or voucher depending on your deployment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "section", 12)(29, "div", 3)(30, "div", 13)(31, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RulesAndPaymentComponent_Template_a_click_31_listener() { return ctx.onAgreeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Okay, I Agree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, RulesAndPaymentComponent_div_33_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBackBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showBackBtn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .pp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pma[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0A4797;\n}\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #621C43;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-disable[_ngcontent-%COMP%] {\n  background-color: #c4c4c4;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-disable[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .policy-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0A4797;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.pma[_ngcontent-%COMP%]   .policy-para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: 550px;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  color: #545454;\n  font-weight: 600;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #621C43 !important;\n  border-color: #621C43 !important;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  color: #545454;\n}\n.list-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  font-size: 11px;\n  font-weight: 300;\n  line-height: 15px;\n}\n.list-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 25px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzLWFuZC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0FBSkY7QUFLRTtFQUNFLGdCQzJCSztFRDFCTCxjQ0ZRO0VER1IsZUNrQkc7QURyQlA7QUFPSTtFQUNFLGVDT0M7QURaUDtBQVNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUko7QUFXRTtFQUNFLGVDVkc7QURDUDtBQVlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFWSjtBQVdJO0VBQ0UseUJDcENTO0VEcUNULGVDakJDO0VEa0JELGVDV0k7RURWSixtQkNGRTtFREdGLFdBQUE7RUFDQSxnQkFBQTtFQUdBLDhCQUFBO0VBQ0EsV0FBQTtBQVhOO0FBY007RUFDRSxZQUFBO0FBWlI7QUFlSTtFQUNFLHlCQ3REZ0I7RUR1RGhCLGVDbENDO0VEbUNELGVDTkk7RURPSixtQkNuQkU7RURvQkYsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBYk47QUFlTTtFQUNFLFlBQUE7QUFiUjtBQWtCRTtFQUNFLGVDN0NHO0VEOENILGdCQUFBO0VBQ0EsY0NwRVE7QURvRFo7QUFtQkU7RUFDRSxjQzlFVztFRCtFWCwwQkFBQTtFQUNBLGdCQUFBO0FBakJKO0FBbUJJO0VBQ0UscUJBQUE7QUFqQk47QUFzQkk7RUFDRSxjQ25GTTtBRCtEWjtBQXdCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUF3Qkk7RUFDRSxpQkFBQTtFQUNBLGNDN0ZNO0VEOEZOLGdCQUFBO0FBdEJOO0FBMEJBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQXZCRjtBQXlCQTtFQUNFLDZCQUFBO0FBdEJGO0FBd0JBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBckJGO0FBNEJFO0VBRUUsb0JBQUE7RUFDQSxlQzNHRztFRDRHSCxnQkFBQTtFQUNBLGlCQUFBO0FBMUJKO0FBMkJJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQTFCTiIsImZpbGUiOiJydWxlcy1hbmQtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBNQSBWYXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbi8vIE5hdmlnYXRpb25cclxuLnBtYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTYwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgZm9udC1zaXplOiAkZi0yNDtcclxuICB9XHJcblxyXG4gIC5wcC10ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICRmLTE0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMEE0Nzk3O1xyXG4gIH1cclxuXHJcbiAgLnAtc3VjY2VzcyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAkZi0xMztcclxuICB9XHJcblxyXG4gIC5wbWEtYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIC5idG4tbW0tcHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXNlY29uZGFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgLy8gcGFkZGluZzogMTFweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gbGluZS1oZWlnaHQ6IDE5cHg7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tbW0tcC1kaXNhYmxle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeS1kaXNhYmxlZDtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvbGljeS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgfVxyXG5cclxuICAubGluayB7XHJcbiAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvbGljeS1wYXJhIHtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWF4LWhlaWdodDo1NTBweDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tc2Vjb25kYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAgJG1tLXNlY29uZGFyeSAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNoZWNrLWlucHV0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNoZWNrLWxhYmVse1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmxpc3Qtc3R5bGVcclxue1xyXG4gIGxpXHJcbiAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6ICRmLTExO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgaVxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbn0iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ 8186:
/*!*****************************************************************!*\
  !*** ./src/app/help/user-agreement/user-agreement.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAgreementComponent": () => (/* binding */ UserAgreementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class UserAgreementComponent {
    constructor(router) {
        this.router = router;
        this.appId = '';
    }
    ngOnInit() {
    }
    onBackClick() {
        if (this.reqFrom == 'help') {
            this.router.navigateByUrl('home/language');
        }
        else {
            this.router.navigateByUrl('help/list');
        }
    }
    onIagreeClick() {
        if (this.reqFrom == 'help') {
            this.router.navigateByUrl('home/info');
        }
        else {
            this.appId = localStorage.getItem('app');
            this.router.navigateByUrl('help/list');
            // if (this.appId == '') {
            //   this.router.navigateByUrl('/home/imp-notice');
            // } else {
            //   this.router.navigateByUrl('home/info');
            // }
        }
    }
    goToRules() {
        this.router.navigateByUrl('help/rules-payment');
    }
}
UserAgreementComponent.ɵfac = function UserAgreementComponent_Factory(t) { return new (t || UserAgreementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
UserAgreementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAgreementComponent, selectors: [["app-user-agreement"]], inputs: { reqFrom: "reqFrom" }, decls: 42, vars: 0, consts: [[1, "pma"], [1, "container"], [1, "pt-2", "policy-para"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "pb-4", "sticky-top", "bg-white"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "pt-0", "mt-0", "mb-5", "pb-5", "p-2", "scroll"], ["type", "none", 1, "p-0", "m-0", "list-style"], [1, "fs-5", "mb-3", "pb-3"], [1, "fas", "fa-chevron-right", "pe-2"], [1, "anchor-class", 3, "click"], [1, "text-center", "pma-buttons", 3, "click"], [1, "btn", "btn-mm-p", "btn-lg", "btn-block"]], template: function UserAgreementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAgreementComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " User Agreement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Data, Sharing & Licensing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "This is a survey app. It asks you questions. You create data when you answer the questions. You own the data you create. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "When you agree to use this app, you get a Bluenumber, which is a unique digital identity that links your mobile phone number and location.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your Bluenumber also creates a Personal Data Vault where your survey answers are stored. Your Bluenumber is your key to access and control your data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Others can only use your data if you consent to license it to them. You can license it as many times as you want to anyone you want.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Million Makers is buying a license from you to use your survey responses once together with responses from others to create a report.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Million Makers will not identify you in the report or link you to your answers. The readers of the report will not be able to identify you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "You will be paid the license fee for your data according to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAgreementComponent_Template_span_click_33_listener() { return ctx.goToRules(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rules & Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ". License fees will only be paid to a mobile wallet registered to the phone number you use to take the survey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "If you have any questions about this terms and conditions, please use the Contact Us function in the Million Makers service (app).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserAgreementComponent_Template_div_click_39_listener() { return ctx.onIagreeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " I Agree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .list-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  font-size: 13px;\n  font-weight: 300;\n  position: relative;\n  width: 305px;\n}\n.pma[_ngcontent-%COMP%]   .list-style[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 25px;\n  margin-top: 5px;\n  display: none;\n}\n.pma[_ngcontent-%COMP%]   .pp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  \n  \n  box-shadow: none;\n  padding: 22px 30px;\n  background: #fff;\n  border: none !important;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #621C43;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .policy-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #0A4797;\n  text-decoration: underline;\n  font-weight: 600;\n}\n.pma[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.pma[_ngcontent-%COMP%]   .policy-para[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 472px;\n}\n.pma[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  color: #545454;\n  font-weight: 600;\n}\n.anchor-class[_ngcontent-%COMP%] {\n  color: #0A4797;\n  cursor: pointer;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx3QkFBQTtBQUhGO0FBS0U7RUFDRSxnQkMyQks7RUQxQkwsY0NGUTtFREdSLGVDa0JHO0FEckJQO0FBT0k7RUFFRSxvQkFBQTtFQUVBLGVDR0M7RURGRCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVBOO0FBUU07RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtBQVJSO0FBZUk7RUFDSSxlQ2ZEO0VEZ0JDLGdCQUFBO0VBRUEsY0FBQTtBQWRSO0FBa0JFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFoQko7QUFtQkk7RUFDRSxlQzdCQztFRDhCRCxnQkFBQTtFQUVBLGNBQUE7QUFsQk47QUFxQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBbkJKO0FBcUJJO0VBQ0UseUJDcEVTO0VEcUVULGVDOUNDO0VEK0NELGVDbEJJO0VEbUJKLG1CQy9CRTtFRGdDRixXQUFBO0VBQ0EsZ0JBQUE7QUFuQk47QUFxQk07RUFDRSxZQUFBO0FBbkJSO0FBdUJJO0VBQ0UseUJDOUVTO0VEK0VULGVDM0RDO0VENERELGVDL0JJO0VEZ0NKLG1CQzVDRTtFRDZDRixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFyQk47QUF1Qk07RUFDRSxZQUFBO0FBckJSO0FBMEJFO0VBQ0UsZUN0RUc7RUR1RUgsZ0JBQUE7RUFDQSxjQzdGUTtBRHFFWjtBQTJCRTtFQUNFLGNDdkdXO0VEd0dYLDBCQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7QUEyQkk7RUFDRSxxQkFBQTtBQXpCTjtBQThCSTtFQUNFLGNDNUdNO0FEZ0ZaO0FBZ0NFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBOUJKO0FBZ0NJO0VBQ0UsaUJBQUE7RUFDQSxjQ3RITTtFRHVITixnQkFBQTtBQTlCTjtBQW1DQTtFQUNFLGNDbklhO0VEb0liLGVBQUE7RUFDQSxnQkFBQTtBQWhDRiIsImZpbGUiOiJ1c2VyLWFncmVlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBNQSBWYXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLy8gTmF2aWdhdGlvblxyXG4ucG1hIHtcclxuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNjAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gIH1cclxuICAubGlzdC1zdHlsZVxyXG4gIHtcclxuICAgIGxpXHJcbiAgICB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAkZi0xMztcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMzA1cHg7XHJcbiAgICAgIGlcclxuICAgICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHAtdGV4dCB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6ICRmLTEzO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5wLXN1Y2Nlc3Mge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICRmLTEzO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAvLyBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICB9XHJcblxyXG4gIC5wbWEtYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAvKiBtYXJnaW46IDBweCAyNXB4OyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjBweDsgKi9cclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmJ0bi1wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbW0tcCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtbS1zZWNvbmRhcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2xpY3ktdGV4dCB7XHJcbiAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gIH1cclxuXHJcbiAgLmxpbmsge1xyXG4gICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2xpY3ktcGFyYSB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogNDcycHg7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYW5jaG9yLWNsYXNzIHtcclxuICBjb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_help_help_module_ts.js.map