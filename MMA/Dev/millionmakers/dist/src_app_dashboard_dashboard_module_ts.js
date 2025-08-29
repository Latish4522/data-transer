(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 9803:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/acceptance-screen/acceptance-screen.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcceptanceScreenComponent": () => (/* binding */ AcceptanceScreenComponent)
/* harmony export */ });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 1413);





class AcceptanceScreenComponent {
    constructor(router, route, sharedService, dashboardService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.dashboardService = dashboardService;
        this.organizationName = '';
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (params['params']['orgName']) {
                this.organizationName = params['params']['orgName'];
            }
        });
    }
    //  ************ When the user is connected navigate to langauge page **************
    onAgreeClick() {
        let params = {
            code: localStorage.getItem('connid'),
            bluenumber: localStorage.getItem('personBluenumber')
        };
        this.sharedService.startLoader();
        this.dashboardService.setConnectionRequestDetailsByCode(params).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res.isError) {
                this.router.navigateByUrl('home/language');
                // this.onBackClick()
            }
        });
    }
    //  ************ When the user clicks on Reject Logout **************
    onRejectClick() {
        localStorage.clear();
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        aws_amplify__WEBPACK_IMPORTED_MODULE_2__.Auth.signOut();
        // this.oauthService.logOut();
    }
}
AcceptanceScreenComponent.ɵfac = function AcceptanceScreenComponent_Factory(t) { return new (t || AcceptanceScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService)); };
AcceptanceScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AcceptanceScreenComponent, selectors: [["app-acceptance-screen"]], decls: 15, vars: 1, consts: [[1, "container"], [1, "row", "text-center", "acceptance-scren"], [1, "col-md-12"], [1, "content-bor", "pt-5"], [1, "fw-light"], [1, "fw-bold"], [1, "btn", "btn-p-agr", 3, "click"], [1, "btn", "btn-l-reje", 3, "click"]], template: function AcceptanceScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Please connect to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " to answer this survey ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AcceptanceScreenComponent_Template_button_click_11_listener() { return ctx.onAgreeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Agree & Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AcceptanceScreenComponent_Template_button_click_13_listener() { return ctx.onRejectClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.organizationName, " ");
    } }, styles: [".acceptance-scren[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 10px 38px;\n  display: grid;\n  place-items: center;\n}\n\n.content-bor[_ngcontent-%COMP%] {\n  border: 1.5px solid #AD0C62;\n  padding: 40px 0px;\n  border-radius: 20px;\n}\n\n.content-bor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454 !important;\n  font-size: 18px;\n  margin-bottom: 30px !important;\n}\n\n.btn-p-agr[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #FFFFFF;\n  font-weight: 400;\n  text-align: center;\n  line-height: 22px;\n  padding: 10px 40px !important;\n  border: none;\n  margin-bottom: 19px !important;\n}\n\n.btn-p-agr[_ngcontent-%COMP%]:hover {\n  opacity: 0.8 !important;\n  background-color: #AD0C62;\n  color: #FFFFFF;\n}\n\n.btn-l-reje[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  cursor: pointer;\n  font-size: 12px;\n  border-radius: 10px;\n  font-weight: 400;\n  text-align: center;\n  line-height: 22px;\n  padding: 10px 68px !important;\n  border: none;\n}\n\n.btn-l-reje[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  background-color: #F8F8F8;\n  color: #545454 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2VwdGFuY2Utc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFVQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVJO0VBQ0kseUJBQUE7RUFDQSxlQ0VEO0VEREMsOEJBQUE7QUFSUjs7QUFZQTtFQUNJLHlCQzNCUztFRDRCVCxlQ1ZHO0VEV0gsZUNzQk07RURyQk4sbUJDU0k7RURSSixjQ3BCUztFRHNCVCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQVhKOztBQVlJO0VBQ0ksdUJBQUE7RUFDQSx5QkMxQ0s7RUQyQ0wsY0NoQ0s7QURzQmI7O0FBZUE7RUFDSSx5QkM3Q2M7RUQ4Q2QsZUNDTTtFREFOLGVDakNHO0VEa0NILG1CQ2JJO0VEY0osZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSxZQUFBO0FBYko7O0FBZUk7RUFDRSxZQUFBO0VBQ0EseUJDMURZO0VEMkRaLHlCQUFBO0FBYk4iLCJmaWxlIjoiYWNjZXB0YW5jZS1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuLy8gQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3N0eWxlc1wiO1xyXG5cclxuLmFjY2VwdGFuY2Utc2NyZW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzOHB4O1xyXG4gICAgLy8gYW5pbWF0aW9uOiBjaGFuZ2ViZyAxMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgXHJcblxyXG59XHJcbi5jb250ZW50LWJvcntcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgJG1tLXByaW1hcnk7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxuXHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1ncmF5IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICRmLTE4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuLmJ0bi1wLWFnciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTI7XHJcbiAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnbGF0bycgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjghaW1wb3J0YW50OztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG4uYnRuLWwtcmVqZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1saWdodC1ncmF5O1xyXG4gICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ2xhdG8nIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDY4cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWdyYXk7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5IWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 4913:
/*!************************************************************!*\
  !*** ./src/app/dashboard/bank-ifsc/bank-ifsc.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankIfscComponent": () => (/* binding */ BankIfscComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _bankifsc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bankifsc.service */ 1243);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 8133);















function BankIfscComponent_div_19_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bank_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bank_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bank_r20, " ");
  }
}

function BankIfscComponent_div_19_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bank Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", state_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", state_r21, " ");
  }
}

function BankIfscComponent_div_19_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " State Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const city_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", city_r22, " ");
  }
}

function BankIfscComponent_div_19_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " City Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const branch_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", branch_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", branch_r23, " ");
  }
}

function BankIfscComponent_div_19_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Branch Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_optgroup_52_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const address_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", address_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", address_r26, " ");
  }
}

function BankIfscComponent_div_19_mat_optgroup_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-optgroup", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BankIfscComponent_div_19_mat_optgroup_52_mat_option_1_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", group_r24.ifsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r24.address);
  }
}

function BankIfscComponent_div_19_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_error_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_error_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter valid Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fill Bank Details:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 17)(4, "div")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 18)(8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BankIfscComponent_div_19_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r27.onAutoCompleteInputChange($event, "bank", ctx_r27.banks);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-autocomplete", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function BankIfscComponent_div_19_Template_mat_autocomplete_optionSelected_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r29.getStates();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BankIfscComponent_div_19_mat_option_11_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BankIfscComponent_div_19_mat_error_13_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "State Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 18)(18, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BankIfscComponent_div_19_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r30.onAutoCompleteInputChange($event, "state", ctx_r30.states);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-autocomplete", 20, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function BankIfscComponent_div_19_Template_mat_autocomplete_optionSelected_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r31.getCities();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BankIfscComponent_div_19_mat_option_21_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, BankIfscComponent_div_19_mat_error_23_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div")(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "City Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 18)(28, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BankIfscComponent_div_19_Template_input_change_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r32.onAutoCompleteInputChange($event, "city", ctx_r32.cities);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-autocomplete", 20, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function BankIfscComponent_div_19_Template_mat_autocomplete_optionSelected_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r33.getBranches();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, BankIfscComponent_div_19_mat_option_31_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, BankIfscComponent_div_19_mat_error_33_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div")(35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-form-field", 18)(38, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BankIfscComponent_div_19_Template_input_change_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r34.onAutoCompleteInputChange($event, "branch", ctx_r34.branches);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-autocomplete", 20, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function BankIfscComponent_div_19_Template_mat_autocomplete_optionSelected_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r35.getIFSCAndAddressList();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, BankIfscComponent_div_19_mat_option_41_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, BankIfscComponent_div_19_mat_error_43_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "form", 30)(45, "div")(46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "IFSC & Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 18)(49, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BankIfscComponent_div_19_Template_input_change_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r36.onAutoCompleteInputChange($event, "ifsc", ctx_r36.ifscAndAddress);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-autocomplete", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function BankIfscComponent_div_19_Template_mat_autocomplete_optionSelected_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r37.getSelectedIFSCAddress();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, BankIfscComponent_div_19_mat_optgroup_52_Template, 2, 2, "mat-optgroup", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](53, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, BankIfscComponent_div_19_mat_error_54_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 35)(56, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "IFSC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 38)(61, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Branch Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div")(66, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, BankIfscComponent_div_19_mat_error_70_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, BankIfscComponent_div_19_mat_error_71_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, BankIfscComponent_div_19_mat_error_74_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 42)(76, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankIfscComponent_div_19_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r38.onBankdetailsSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20);

    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40);

    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.bankControl)("matAutocomplete", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 28, ctx_r0.filteredBanks));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.bankControl.hasError("required") && ctx_r0.bankControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.stateControl)("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 30, ctx_r0.filteredStates));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.stateControl.hasError("required") && ctx_r0.stateControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.cityControl)("matAutocomplete", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 32, ctx_r0.filteredCities));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cityControl.hasError("required") && ctx_r0.cityControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.branchControl)("matAutocomplete", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 34, ctx_r0.filteredBranches));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.branchControl.hasError("required") && ctx_r0.branchControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.stateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.stateGroup)("matAutocomplete", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](53, 36, ctx_r0.ifscAddressGroupOptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.stateGroup.hasError("required") && ctx_r0.stateGroup.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.ifsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.accountNumberControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.accountNumberControl.hasError("required") && ctx_r0.accountNumberControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.accountNumberControl.hasError("minlength") && ctx_r0.accountNumberControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.retypeAccountNumberControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.retypeAccountNumberControl.hasError("required") && ctx_r0.retypeAccountNumberControl.touched);
  }
}

function BankIfscComponent_div_21_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IFSC Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_21_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter valid IFSC Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_21_ng_container_12_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_21_ng_container_12_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter valid Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_21_ng_container_12_mat_error_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Account Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function BankIfscComponent_div_21_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Your bank is:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 49)(4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "State Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "City Name1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "City Name2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "IFSC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div")(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, BankIfscComponent_div_21_ng_container_12_mat_error_37_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, BankIfscComponent_div_21_ng_container_12_mat_error_38_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-form-field", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, BankIfscComponent_div_21_ng_container_12_mat_error_41_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 42)(43, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankIfscComponent_div_21_ng_container_12_Template_button_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r45.onBankdetailsSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.city1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.city2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.branch);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.ifsc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.bankDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r41.accountNumberControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.accountNumberControl.hasError("required") && ctx_r41.accountNumberControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.accountNumberControl.hasError("minlength") && ctx_r41.accountNumberControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r41.retypeAccountNumberControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r41.retypeAccountNumberControl.hasError("required") && ctx_r41.retypeAccountNumberControl.touched);
  }
}

function BankIfscComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 17)(2, "div")(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "IFSC Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BankIfscComponent_div_21_mat_error_7_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BankIfscComponent_div_21_mat_error_8_Template, 2, 0, "mat-error", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 11)(10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankIfscComponent_div_21_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r47.onVerify();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BankIfscComponent_div_21_ng_container_12_Template, 45, 12, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.ifscControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ifscControl.hasError("required") && ctx_r1.ifscControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.ifscControl.hasError("minlength") && ctx_r1.ifscControl.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.ifscControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.bankDetails == null ? null : ctx_r1.bankDetails.bank);
  }
}

class BankIfscComponent {
  constructor(router, bankifscService, renderer, _formBuilder, sharedService, surveyService) {
    this.router = router;
    this.bankifscService = bankifscService;
    this.renderer = renderer;
    this._formBuilder = _formBuilder;
    this.sharedService = sharedService;
    this.surveyService = surveyService;
    this.ifsc = '';
    this.address = '';
    this.ifscAddressGroup = [];
    this.selectedOption = '';
    this.bankDetails = {
      bank: '',
      state: '',
      city1: '',
      city2: '',
      ifsc: '',
      branch: '',
      address: ''
    };
    this.stateForm = this._formBuilder.group({
      stateGroup: ''
    });
    this.title = 'sample-app';
    this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('auto');
    this.bankControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.stateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.cityControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.branchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.stateGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.radioButtonValue = 0;
    this.ifscControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(11)]);
    this.accountNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]);
    this.retypeAccountNumberControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
    this.banks = []; // ['One', 'Two', 'Three'];

    this.states = [];
    this.cities = [];
    this.branches = [];
    this.ifscAndAddress = [];

    this._filterAddress = (opt, value) => {
      const filterValue = value === null || value === void 0 ? void 0 : value.toLowerCase();
      return opt.filter(item => item.toLowerCase().includes(filterValue));
    };
  }

  _filterBanks(value) {
    const filterValue = value === null || value === void 0 ? void 0 : value.toLowerCase();
    return this.banks.filter(bank => bank.toLowerCase().includes(filterValue));
  }

  _filter2(value) {
    const filterValue = value === null || value === void 0 ? void 0 : value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().includes(filterValue));
  }

  _filterCity(value) {
    const filterValue = value === null || value === void 0 ? void 0 : value.toLowerCase();
    return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  }

  _filterBranch(value) {
    const filterValue = value === null || value === void 0 ? void 0 : value.toLowerCase();
    return this.branches.filter(option => option.toLowerCase().includes(filterValue));
  }

  _filterGroup(value) {
    if (value) {
      return this.ifscAddressGroup.map(group => ({
        ifsc: group.ifsc,
        address: this._filterAddress(group.address, value)
      })).filter(group => group.address.length > 0);
    }

    return this.ifscAddressGroup;
  }

  onBankdetailsSubmit() {
    let ifsc = '';
    this.accountNumberControl.markAllAsTouched();
    this.retypeAccountNumberControl.markAllAsTouched();

    if (this.selectedOption == 'ifsccode') {
      ifsc = this.ifscControl.value;
    } else if (this.selectedOption == 'noifsccode') {
      ifsc = this.ifsc;
      this.bankControl.markAllAsTouched();
      this.stateControl.markAllAsTouched();
      this.cityControl.markAllAsTouched();
      this.branchControl.markAllAsTouched();
      this.stateGroup.markAllAsTouched();
    } // **** Check Account No is Valid or not ***********


    if (this.accountNumberControl.invalid || this.retypeAccountNumberControl.invalid) {
      return;
    }

    if (this.accountNumberControl.value !== this.retypeAccountNumberControl.value) {
      this.sharedService.showToastMesaages('error', 'Account number not matched');
      return;
    } else {
      // *********** If Ifsc Code is present Save Bank Data *****************
      if (this.selectedOption == 'ifsccode') {
        this.saveBankDetails(ifsc);
      } else if (this.selectedOption == 'noifsccode') {
        // *********** Double check with Timeout for Bank Details Validity beacause of Autocomplete Fields *********************
        if (this.checkBankDetailsValidity()) {
          this.sharedService.startLoader();
          setTimeout(() => {
            this.sharedService.stopLoader();

            if (this.checkBankDetailsValidity()) {
              this.saveBankDetails(ifsc);
            }
          }, 1000);
        }
      }
    }
  } // ********* Returns True / False based on Bank details **********************


  checkBankDetailsValidity() {
    return this.bankControl.valid && this.stateControl.valid && this.cityControl.valid && this.branchControl.valid && this.stateGroup.valid;
  } // *********** API to save Bak Details ****************


  saveBankDetails(ifsc) {
    this.sharedService.startLoader();
    this.bankifscService.saveUserDetails({
      ifscCode: ifsc,
      surveySetId: localStorage.getItem('surveySetId'),
      bankAccountNumber: this.accountNumberControl.value
    }).subscribe(res => {
      if (!res['isError']) {
        this.sharedService.showToastMesaages('success', 'User bank details saved successfully');
        this.router.navigateByUrl('home/info');
      }

      this.sharedService.stopLoader(); //redirect to specified page
    });
  }

  ngOnInit() {
    if (localStorage.getItem('ssid') != null && localStorage.getItem('ssid') != 'null' && localStorage.getItem('ssid') != '') {
      this.fetchSurveySetSSIDDetails();
    }
  } // ********** Method to fetch the Survey Info based on SSID  ************************


  fetchSurveySetSSIDDetails() {
    this.sharedService.startLoader();
    this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe(res => {
      this.sharedService.stopLoader();

      if (!res['isError']) {
        if (res['result']['isBankDetailsExist']) {
          this.sharedService.showToastMesaages('info', 'Bank details already exist');
          this.router.navigateByUrl('home/info');
        }
      }
    });
  }

  onVerify() {
    this.sharedService.startLoader();
    this.bankifscService.getBankDetails(this.ifscControl.value).subscribe(res => {
      this.sharedService.stopLoader();

      if (!res['isError']) {
        this.bankDetails = res.result;
      }
    }, error => {
      this.sharedService.showToastMesaages('error', 'Enter valid IFSC Code');
    });
  }

  onSubmit() {
    if (this.radioButtonValue == 2) {
      // ******** Reset IFSC, Bank Details of i have IFSC Code Option ******************
      this.ifscControl.reset();
      this.bankDetails = {};
      this.sharedService.startLoader();
      this.selectedOption = 'noifsccode';
      this.bankifscService.getBankNames().subscribe(data => {
        this.bankControl.setValue('');
        this.clearValues("STATE", "CITY", "BRANCH", "IFSC", "ACCOUNT_NUMBER");
        this.banks = data.result.names; //state filtered options     

        this.sharedService.stopLoader();
        this.filteredBanks = this.bankControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterBanks(value)));
      });
    } else if (this.radioButtonValue == 1) {
      this.selectedOption = 'ifsccode'; // ******** Reset I Dont have IFSC Code Option Data ******************

      this.clearValues("BANK", "STATE", "CITY", "BRANCH", "IFSC", "ACCOUNT_NUMBER");
    }

    this.accountNumberControl.reset();
    this.retypeAccountNumberControl.reset();
  } // get states bases on bank


  getStates() {
    this.sharedService.startLoader();
    this.bankifscService.getStateNames(this.bankControl.value).subscribe(data => {
      this.stateControl.setValue('');
      this.states = data.result.state; //state filtered options     

      this.clearValues("CITY", "BRANCH", "IFSC", "ACCOUNT_NUMBER");
      this.sharedService.stopLoader();
      this.filteredStates = this.stateControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filter2(value)));
    });
  } // get cities bases on bank and state


  getCities() {
    this.sharedService.startLoader();
    this.bankifscService.getCityNames(this.bankControl.value, this.stateControl.value).subscribe(data => {
      this.cityControl.setValue('');
      this.cities = data.result.cities; //state filtered options     

      this.clearValues("BRANCH", "IFSC", "ACCOUNT_NUMBER");
      this.sharedService.stopLoader();
      this.filteredCities = this.cityControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterCity(value)));
    });
  } //get branches based on bank, state and city


  getBranches() {
    this.sharedService.startLoader();
    this.bankifscService.getBranchNames(this.bankControl.value, this.stateControl.value, this.cityControl.value).subscribe(data => {
      this.branchControl.setValue('');
      this.branches = data.result.branches; //state filtered options     

      this.clearValues("IFSC", "ACCOUNT_NUMBER");
      this.sharedService.stopLoader();
      this.filteredBranches = this.branchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterBranch(value)));
    });
  } // get ifsc and address based on bank, state, city and branch


  getIFSCAndAddressList() {
    this.sharedService.startLoader();
    this.bankifscService.getIfscAndAddress(this.bankControl.value, this.stateControl.value, this.cityControl.value, this.branchControl.value).subscribe(data => {
      this.stateGroup.setValue('');
      this.clearValues("IFSC");
      this.ifscAddressGroup = data.result;
      this.sharedService.stopLoader();
      this.ifscAddressGroup = data.result.map(item => ({
        ifsc: item.ifsc,
        address: [item.address]
      }));
      this.ifscAddressGroupOptions = this.stateForm.get('stateGroup').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterGroup(value)));
    });
  } // get ifsc and address On ifsc select


  getSelectedIFSCAddress() {
    var _a;

    (_a = this.ifscAddressGroupOptions) === null || _a === void 0 ? void 0 : _a.subscribe(res => {
      let data = res.filter(i => i.address[0] == this.stateGroup.value);

      if (data && data.length > 0) {
        this.ifsc = data[0]['ifsc'];
        this.address = this.stateGroup.value;
      }
    });
  }

  onBackClick() {
    this.router.navigateByUrl('/home');
  }

  clearValues(...args) {
    args.forEach(arg => {
      switch (arg) {
        case "BANK":
          this.bankControl.setValue('');
          this.banks = [];
          this.bankControl.reset();
          break;

        case "STATE":
          this.stateControl.setValue('');
          this.states = [];
          this.stateControl.reset();
          break;

        case "CITY":
          this.cityControl.setValue('');
          this.cities = [];
          this.cityControl.reset();
          break;

        case "BRANCH":
          this.branchControl.setValue('');
          this.branches = [];
          this.branchControl.reset();
          break;

        case "IFSC":
          this.stateGroup.setValue('');
          this.ifsc = '';
          this.address = '';
          this.stateGroup.reset();
          break;
      }
    });
  } // ********** Triggers when text is entered in the Autocomplete field without selection *******************


  onAutoCompleteInputChange(event, type, filterArray) {
    setTimeout(() => {
      let nameEntered = event.target.value;
      let selectedName;

      if (nameEntered != '') {
        selectedName = filterArray.filter(data => data.toLowerCase() == nameEntered.toLowerCase()); // ********* If enetered value is not present clear the field and dependent field Values ****************

        if (selectedName.length == 0) {
          switch (type) {
            case 'bank':
              this.bankControl.reset();
              this.clearValues("STATE", "CITY", "BRANCH", "IFSC");
              break;

            case 'state':
              this.stateControl.reset();
              this.clearValues("CITY", "BRANCH", "IFSC");
              break;

            case 'city':
              this.cityControl.reset();
              this.clearValues("BRANCH", "IFSC");
              break;

            case 'branch':
              this.branchControl.reset();
              this.clearValues("IFSC");
              break;

            case 'ifsc':
              this.stateGroup.reset();
              this.ifsc = '';
              this.address = '';
              break;
          }
        } else {
          // ************** If Entered Value is present in the filtered list the call the dependency APIs *******************
          switch (type) {
            case 'bank':
              this.getStates();
              break;

            case 'state':
              this.getCities();
              break;

            case 'city':
              this.getBranches();
              break;

            case 'branch':
              this.getIFSCAndAddressList();
              break;

            case 'ifsc':
              this.getSelectedIFSCAddress();
              break;
          }
        }
      } //  else {
      //   this.bankControl.reset();
      // }

    }, 1000);
  }

}

BankIfscComponent.ɵfac = function BankIfscComponent_Factory(t) {
  return new (t || BankIfscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bankifsc_service__WEBPACK_IMPORTED_MODULE_0__.BankIfscService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService));
};

BankIfscComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BankIfscComponent,
  selectors: [["app-bank-ifsc"]],
  decls: 22,
  vars: 4,
  consts: [[1, "pma", "bank-ifsc-details"], [1, "container"], [1, "row"], [1, "col-12"], [1, "pma-heading", "text-gray-1", "mb-5"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "mb-3"], ["id", "example-radio-group-label", 1, "radio-label", "mb-5"], ["aria-label", "Select an option", "aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], [1, "text-end", "pma-buttons"], ["mat-raised-button", "", 1, "btn", "btn-mm-p", 3, "disabled", "click"], [1, "col-12", "ifsc-code-details"], [4, "ngIf"], [1, "col-12", "have-ifsc-code"], [1, "bankdetilas-label"], [1, "example-form"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "placeholder", "Enter Bank Name", "aria-label", "Choose Bank Name", "matInput", "", 3, "formControl", "matAutocomplete", "change"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["autoBank", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "m-mt-sm", 4, "ngIf"], ["type", "text", "placeholder", "Enter State name", "aria-label", "Choose State name", "matInput", "", 3, "formControl", "matAutocomplete", "change"], ["autoState", "matAutocomplete"], ["type", "text", "placeholder", "Enter City Name", "aria-label", "Pick City Name", "matInput", "", 3, "formControl", "matAutocomplete", "change"], ["autoCity", "matAutocomplete"], ["type", "text", "placeholder", "Enter Branch Name", "aria-label", "Pick Branch Name", "matInput", "", "required", "", 3, "formControl", "matAutocomplete", "change"], ["autoBranch", "matAutocomplete"], [3, "formGroup"], ["type", "text", "matInput", "", "placeholder", "Enter Address", "required", "", 3, "formControl", "matAutocomplete", "change"], [3, "optionSelected"], ["autoGroup", "matAutocomplete"], [3, "label", 4, "ngFor", "ngForOf"], [1, "example-full-width", "mb-2", "m-mt-sm"], [1, "review-data"], [1, "branch-details"], [1, "example-full-width"], ["type", "text", "placeholder", "Enter Account Number", "aria-label", "Enter Account Number", "matInput", "", "minlength", "8", "maxlength", "20", "autocomplete", "off", 3, "formControl"], ["appearance", "outline", 1, "example-full-width", "m-mt-sm"], ["type", "password", "placeholder", "Retype Account Number", "aria-label", "Retype Account Number", "matInput", "", "autocomplete", "off", 3, "formControl"], [1, "pma-buttons", "mt-3"], ["mat-raised-button", "", 1, "btn", "btn-mm-p", "w-100", 3, "click"], [3, "value"], [1, "m-mt-sm"], [3, "label"], ["type", "text", "placeholder", "Enter IFSC Code", "aria-label", "Enter your IFSC Code", "matInput", "", "minlength", "11", "maxlength", "11", 3, "formControl"], [1, "bankdetilas-label", "mb-3"], [1, "list-unstyled", "p-0"], ["mat-raised-button", "", 1, "btn", "btn-mm-p", "w-100", "padding-y", 3, "click"]],
  template: function BankIfscComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankIfscComponent_Template_i_click_5_listener() {
        return ctx.onBackClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Pay to my Bank ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Do you know your bank's IFSC Code? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-radio-group", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BankIfscComponent_Template_mat_radio_group_ngModelChange_10_listener($event) {
        return ctx.radioButtonValue = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "I have my IFSC Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-radio-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "I don't have my IFSC Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BankIfscComponent_Template_button_click_16_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, BankIfscComponent_div_19_Template, 78, 38, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BankIfscComponent_div_21_Template, 13, 5, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.radioButtonValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.radioButtonValue == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedOption === "noifsccode");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedOption === "ifsccode");
    }
  },
  directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptgroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: [".pma[_ngcontent-%COMP%] {\n  padding: 16px 25px;\n}\n.pma[_ngcontent-%COMP%]   h1.pma-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 30px;\n}\n.pma[_ngcontent-%COMP%]   h1.pma-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.pma[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 30px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px !important;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 7px 18px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .bankdetilas-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #000000;\n}\n.pma[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .ifsc-code-details[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.pma[_ngcontent-%COMP%]   .padding-y[_ngcontent-%COMP%] {\n  padding: 14px !important;\n}\n.pma[_ngcontent-%COMP%]   .review-data[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #545454;\n  line-height: 19px;\n}\n.pma[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n  line-height: 17px;\n}\n.pma[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #545454;\n  line-height: 14px;\n}\n.pma[_ngcontent-%COMP%]   .have-ifsc-code[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.branch-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.pma[_ngcontent-%COMP%]   .have-ifsc-code[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.review-data[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.m-mt-sm[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmstaWZzYy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7QUFIRjtBQUtFO0VBQ0UsZUNvQkc7RURuQkgsZ0JDMkJLO0VEMUJMLGNDSVU7RURIVixpQkFBQTtBQUhKO0FBS0k7RUFDRSxjQ1BNO0FESVo7QUFPRTtFQUNFLGNDWlE7QURPWjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBTko7QUFRSTtFQUNFLGdCQ1FHO0VEUEgsZUNOQztFRE9ELGlCQUFBO0VBQ0EsY0N6Qk07QURtQlo7QUFVRTtFQUNFLFdBQUE7QUFSSjtBQVdFO0VBQ0UsZUNiRztFRGNILGdCQ05LO0VET0wsY0M3QlU7RUQ4QlYsaUJBQUE7QUFUSjtBQWFJO0VBQ0UseUJDL0NPO0VEZ0RQLDBCQUFBO0VBQ0EsZUNFSTtFRERKLG1CQ1hFO0VEWUYsV0M1Q0s7RUQ2Q0wsZ0JBQUE7RUFDQSxpQkFBQTtBQVhOO0FBYU07RUFDRSxZQUFBO0FBWFI7QUFrQkU7RUFDRSxlQ3pDRztFRDBDSCxnQkMvQks7RURnQ0wsaUJBQUE7RUFDQSxjQ3ZEVTtBRHVDZDtBQW1CRTtFQUNFLFdBQUE7QUFqQko7QUF1Qk07RUFDRSxhQUFBO0FBckJSO0FBMEJFO0VBQ0Usd0JBQUE7QUF4Qko7QUEyQkU7O0VBRUUsZUNuRUc7RURvRUgsZ0JDdkRLO0VEd0RMLGNDdEZRO0VEdUZSLGlCQUFBO0FBekJKO0FBNEJFO0VBQ0UsY0NwRlU7RURxRlYsZ0JDL0RLO0FEcUNUO0FBNkJFO0VBQ0UsZUNqRkc7RURrRkgsZ0JDbkVLO0VEb0VMLGNDM0ZVO0VENEZWLGlCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsZUMxRkc7RUQyRkgsZ0JDekVLO0VEMEVMLGNDekdRO0VEMEdSLGlCQUFBO0FBNUJKO0FBaUNNO0VBQ0UsbUJBQUE7QUEvQlI7QUFrQ007RUFDRSxxQkFBQTtBQWhDUjtBQXdDQTtFQUNFLGVBQUE7QUFyQ0YiLCJmaWxlIjoiYmFuay1pZnNjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDE2cHggMjVweDtcclxuXHJcbiAgaDEucG1hLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplICA6ICRmLTI0O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy01MDA7XHJcbiAgICBjb2xvciAgICAgIDogJGJsYWNrLWNvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtZ3JheSB7XHJcbiAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXkgICAgICAgOiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zICAgOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwICAgICAgICAgICA6IDIwcHg7XHJcblxyXG4gICAgbWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZnctNDAwO1xyXG4gICAgICBmb250LXNpemUgIDogJGYtMTY7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBjb2xvciAgICAgIDogJHRleHQtZ3JheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5yYWRpby1sYWJlbCB7XHJcbiAgICBmb250LXNpemUgIDogJGYtMjQ7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTUwMDtcclxuICAgIGNvbG9yICAgICAgOiAkYmxhY2stY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC5wbWEtYnV0dG9ucyB7XHJcbiAgICAuYnRuLW1tLXAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplICAgICAgIDogJGYtMTYgIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXMgICA6ICRici0xMDtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJGJnLXdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiA0MDA7XHJcbiAgICAgIHBhZGRpbmcgICAgICAgICA6IDdweCAxOHB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gICBJRiBJRlNDIENvZGUgTm8gXHJcbiAgLmJhbmtkZXRpbGFzLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZi0xODtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvciAgICAgIDogJGJsYWNrLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5pZnNjLWNvZGUtZGV0YWlscyB7XHJcbiAgICAucG1hLWJ1dHRvbnMge1xyXG4gICAgICAuYnRuLW1tLXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWRkaW5nLXkge1xyXG4gICAgcGFkZGluZzogMTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJldmlldy1kYXRhLFxyXG4gIG1hdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemUgIDogJGYtMTY7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTQwMDtcclxuICAgIGNvbG9yICAgICAgOiAkdGV4dC1ncmF5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICBtYXQtbGFiZWwge1xyXG4gICAgY29sb3IgICAgICA6ICRibGFjay1jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNTAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZi0xNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNDAwO1xyXG4gICAgY29sb3IgICAgICA6ICRibGFjay1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJyYW5jaC1kZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZi0xMjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctMzAwO1xyXG4gICAgY29sb3IgICAgICA6ICR0ZXh0LWdyYXk7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICB9XHJcblxyXG4gIC5oYXZlLWlmc2MtY29kZSB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpLmJyYW5jaC1kZXRhaWxzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaS5yZXZpZXctZGF0YSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tLW10LXNtIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIiwiLy8gUE1BIENvbG9yc1xyXG4kdGV4dC1wcmltYXJ5OiAjMEE0Nzk3O1xyXG4kbW0tcHJpbWFyeTogI0FEMEM2MjtcclxuJG1tLXByaW1hcnktZGlzYWJsZWQ6ICNjNGM0YzQ7XHJcbiRtbS1zZWNvbmRhcnk6ICM2MjFDNDM7XHJcbiRtbS1zdWNjZXNzOiAjRUE2MDBFO1xyXG4kdGV4dC1saWdodC1ncmF5OiAjRjhGOEY4O1xyXG4kdGV4dC1ncmF5OiAjNTQ1NDU0O1xyXG4kZ3JheS1iZzogI0Y4RjhGODtcclxuJGJnLXdoaXRlOiAjZmZmO1xyXG4kZ3JheS1ib3JkZXI6ICNEQURBREE7XHJcbiRibHVpc2g6ICMyNzNCNEE7XHJcbiRiZy1saWdodDogI0YzRjNGMztcclxuJHdoaXRlLWNvbG9yOiNGRkZGRkY7XHJcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcclxuJHllc2J0bi1ibHVlOiAjMUM0REExO1xyXG4kbm9idG4tbGlnaHQ6ICM0NDcyQzQ7XHJcbi8vIFBNQSBGb250IFNpemVzXHJcbiRmLTEwOiAxMHB4OyAgICAgICBcclxuJGYtMTE6IDExcHg7ICAgICAgIFxyXG4kZi0xMjogMTJweDsgICAgICAgXHJcbiRmLTEzOiAxM3B4OyAgICAgICBcclxuJGYtMTQ6IDE0cHg7XHJcbiRmLTE1OiAxNXB4O1xyXG4kZi0xNjogMTZweDsgICAgXHJcbiRmLTE4OiAxOHB4OyAgICBcclxuJGYtMTk6IDE5cHg7XHJcbiRmLTIwOiAyMHB4O1xyXG4kZi0yNDogMjRweDtcclxuJGYtMjU6IDI1cHg7XHJcbiRmLTMwOiAzMHB4O1xyXG4kZi0zNjogMzZweDtcclxuJGYtNDA6IDQwcHg7XHJcblxyXG4vLyBQTUEgRm9udCBXZWlnaHRcclxuJGZ3LTYwMDogNjAwO1xyXG4kZnctNTAwOiA1MDA7XHJcbiRmdy00MDA6IDQwMDtcclxuJGZ3LTMwMDogMzAwO1xyXG5cclxuLy8gUE1BIFJhZGl1c1xyXG4kYnItMTA6IDEwcHg7XHJcblxyXG4vLyBQTUEgUGFkZGluZ3NcclxuJHBhZGQtMTA6IDEwcHg7XHJcbiRwYWRkLTIwOiAyMHB4O1xyXG4kcGFkZC0zMDogMzBweDtcclxuXHJcblxyXG4vLyBQTUEgMCBWYWx1ZXNcclxuJHZhbHVlLTA6IDBweDtcclxuXHJcbi8vIFBNQSBDdXJzb3JzXHJcbiRwb2ludGVyOiBwb2ludGVyO1xyXG5cclxuLy8gZm9udC1mYW1pbHlcclxuJGZvbnQtZmFtaWx5OidMYXRvJywgc2Fucy1zZXJpZjtcclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 1243:
/*!***********************************************!*\
  !*** ./src/app/dashboard/bankifsc.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankIfscService": () => (/* binding */ BankIfscService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class BankIfscService {
    constructor(http) {
        this.http = http;
    }
    getBankNames() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetBankNames`);
    }
    getStateNames(bankName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('bank', bankName);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetStateNamesByBank`, { params });
    }
    getCityNames(bankName, stateName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('bank', bankName).set('state', stateName);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetCityNameByBankAndState`, { params });
    }
    getBranchNames(bankName, stateName, cityName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('bank', bankName).set('state', stateName).set('city', cityName);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetBranchesByBankStateCity`, { params });
    }
    getIfscAndAddress(bankName, stateName, cityName, branchName) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('bank', bankName).set('state', stateName).set('city', cityName).set('branch', branchName);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetIfscAddressByBankStateCityBranch`, { params });
    }
    getBankDetails(ifsc) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('ifsc', ifsc);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/GetBankStateCityBranchByIfsc`, { params });
    }
    saveUserDetails(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Banks/SaveUserDetails`, params);
    }
}
BankIfscService.ɵfac = function BankIfscService_Factory(t) { return new (t || BankIfscService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BankIfscService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BankIfscService, factory: BankIfscService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2417:
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-landing-page/dashboard-landing-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardLandingPageComponent": () => (/* binding */ DashboardLandingPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/constants */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var src_app_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/claims/claims.service */ 2515);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.service */ 1413);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);













const _c0 = ["content"];
const _c1 = ["locationPopup"];
const _c2 = ["otpPopup"];
const _c3 = ["qualifMsgPopup"];
const _c4 = ["bankPopup"];
function DashboardLandingPageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.goToProfilePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function DashboardLandingPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_10_div_3_div_1_h5_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Start Survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_10_div_3_div_1_h5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r21.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r21.minutes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r21.seconds, " ");
} }
function DashboardLandingPageComponent_section_10_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_10_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r22.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_10_div_3_div_1_h5_2_Template, 2, 0, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_10_div_3_div_1_h5_3_Template, 6, 3, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r19.surveyState === 3 && ctx_r19.isSidOrSSId === "ssid" ? "myr-icon-green" : "myr-icon mouse-notallowed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.surveyState === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.surveyState === 4);
} }
function DashboardLandingPageComponent_section_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_10_div_3_div_1_Template, 4, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r17.isAllSurveysAnswered);
} }
function DashboardLandingPageComponent_section_10_div_4_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r24.msg, " ");
} }
function DashboardLandingPageComponent_section_10_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_10_div_4_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r28.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Request Submitted! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_10_div_4_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Thank you for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " completing all surveys. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_10_div_4_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You have claimed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r27.getCurrencySymbol(ctx_r27.surveyDetails == null ? null : ctx_r27.surveyDetails.currency), " ", ctx_r27.surveyDetails == null ? null : ctx_r27.surveyDetails.paymentOffered, "");
} }
function DashboardLandingPageComponent_section_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_10_div_4_h1_1_Template, 2, 1, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_10_div_4_div_2_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_10_div_4_h1_3_Template, 4, 0, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_10_div_4_h1_4_Template, 5, 2, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r18.surveyState == 1 || ctx_r18.surveyState == 2 || ctx_r18.surveyState == 5 || ctx_r18.surveyState == 6) && !ctx_r18.isAllSurveysAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.isAllSurveysAnswered && !(ctx_r18.surveyDetails == null ? null : ctx_r18.surveyDetails.claim) && ctx_r18.surveyState == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.isAllSurveysAnswered && !(ctx_r18.surveyDetails == null ? null : ctx_r18.surveyDetails.claim) && ctx_r18.surveyType != ctx_r18.globalConstants.request && ctx_r18.appId != "mmind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.isAllSurveysAnswered && (ctx_r18.surveyDetails == null ? null : ctx_r18.surveyDetails.claim));
} }
function DashboardLandingPageComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_10_div_3_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_10_div_4_Template, 5, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isSidOrSSId == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.surveyType != ctx_r2.globalConstants.verify && ctx_r2.surveyType != ctx_r2.globalConstants.feedback);
} }
function DashboardLandingPageComponent_section_11_div_4_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Do you want to take surveys about your working conditions?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please confirm by answering 5 questions about who you work for");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_4_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " If you qualify you will receive an SMS to do the surveys ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_11_div_4_div_1_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_11_div_4_div_1_p_2_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_11_div_4_div_1_p_3_Template, 2, 0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r33.surveyState != 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r33.surveyState != 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r33.surveyState == 5);
} }
function DashboardLandingPageComponent_section_11_div_4_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r34.msg, " ");
} }
function DashboardLandingPageComponent_section_11_div_4_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " New survey available! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_4_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r36.msg, " ");
} }
function DashboardLandingPageComponent_section_11_div_4_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Today's survey is done!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Next survey available in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r37.timeCounter, " ");
} }
function DashboardLandingPageComponent_section_11_div_4_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Survey available in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r38.timeCounter, " ");
} }
function DashboardLandingPageComponent_section_11_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_11_div_4_div_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r47.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Request Submitted! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_11_div_4_h1_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Thank you for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " completing all surveys. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_4_h1_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You have claimed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r41.getCurrencySymbol(ctx_r41.surveyDetails == null ? null : ctx_r41.surveyDetails.currency), " ", ctx_r41.surveyDetails == null ? null : ctx_r41.surveyDetails.paymentOffered, "");
} }
function DashboardLandingPageComponent_section_11_div_4_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_11_div_4_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r49.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r42.surveyState == 3 ? "mouse-pointer" : "mouse-notallowed btn-mm-p-disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Start ", ctx_r42.surveyType == ctx_r42.globalConstants.request && ctx_r42.isSidOrSSId == "sid" ? "Request" : "Survey", " ");
} }
function DashboardLandingPageComponent_section_11_div_4_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_11_div_4_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r51.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Start Registration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r43.surveyState == 3 ? "mouse-pointer" : "mouse-notallowed btn-mm-p-disabled");
} }
function DashboardLandingPageComponent_section_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_11_div_4_div_1_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_11_div_4_h1_2_Template, 2, 1, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_11_div_4_h1_3_Template, 2, 0, "h1", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_11_div_4_p_4_Template, 2, 1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DashboardLandingPageComponent_section_11_div_4_h1_5_Template, 7, 1, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardLandingPageComponent_section_11_div_4_h1_6_Template, 5, 1, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_section_11_div_4_div_7_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DashboardLandingPageComponent_section_11_div_4_h1_8_Template, 4, 0, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardLandingPageComponent_section_11_div_4_h1_9_Template, 5, 2, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardLandingPageComponent_section_11_div_4_a_10_Template, 2, 2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DashboardLandingPageComponent_section_11_div_4_a_11_Template, 2, 1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.isSidOrSSId == "sid" && ctx_r30.appId != "mmind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r30.surveyState == 1 || ctx_r30.surveyState == 2 || ctx_r30.surveyState == 5 || ctx_r30.surveyState == 6) && !ctx_r30.isAllSurveysAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.surveyState === 3 && ctx_r30.isSidOrSSId === "ssid" && ctx_r30.currentSurveyDay > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.surveyState === 3 && ctx_r30.isSidOrSSId === "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.surveyState == 4 && !ctx_r30.isFutureDaySurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.surveyState == 4 && ctx_r30.isFutureDaySurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.isAllSurveysAnswered && !(ctx_r30.surveyDetails == null ? null : ctx_r30.surveyDetails.claim) && ctx_r30.surveyState == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.isAllSurveysAnswered && !(ctx_r30.surveyDetails == null ? null : ctx_r30.surveyDetails.claim) && ctx_r30.surveyType != ctx_r30.globalConstants.request && ctx_r30.appId != "mmind" && ctx_r30.isSidOrSSId != "sid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r30.isAllSurveysAnswered && (ctx_r30.surveyDetails == null ? null : ctx_r30.surveyDetails.claim));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r30.isAllSurveysAnswered && ctx_r30.appId != "mmind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r30.isAllSurveysAnswered && ctx_r30.appId == "mmind");
} }
function DashboardLandingPageComponent_section_11_div_5_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 32)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please enable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " location and answer 1 question to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " verify yourself!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_11_div_5_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r54.msg, " ");
} }
function DashboardLandingPageComponent_section_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_11_div_5_h6_1_Template, 7, 0, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_11_div_5_h6_2_Template, 2, 1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_11_div_5_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r55.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r31.surveyState == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r31.surveyState != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r31.surveyState == 3 ? "mouse-pointer" : "mouse-notallowed btn-mm-p-disabled");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Please scan the QR code again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 50)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please enable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " location and answer some questions about ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " your experience with this program ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Survey available in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r60.timeCounter, " ");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r61.msg, " ");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Thank you for completing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " the survey! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " You have claimed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r63.getCurrencySymbol(ctx_r63.surveyDetails == null ? null : ctx_r63.surveyDetails.currency), " ", ctx_r63.surveyDetails == null ? null : ctx_r63.surveyDetails.paymentOffered, " ");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_11_div_6_ng_container_2_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r66.onStartSurveyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Start Survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r64.surveyState == 3 ? "mouse-pointer" : "mouse-notallowed btn-mm-p-disabled");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 43)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "If you complete this survey you will be rewarded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r65.surveyDetails == null ? null : ctx_r65.surveyDetails.currency, " ", ctx_r65.surveyDetails == null ? null : ctx_r65.surveyDetails.paymentOffered, ". ");
} }
function DashboardLandingPageComponent_section_11_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_1_Template, 7, 0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h1_2_Template, 5, 1, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_3_Template, 2, 1, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_4_Template, 4, 0, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_5_Template, 5, 2, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardLandingPageComponent_section_11_div_6_ng_container_2_a_6_Template, 2, 1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_section_11_div_6_ng_container_2_h6_7_Template, 7, 2, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.surveyState == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.surveyState == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.surveyState != 3 && !ctx_r58.isAllSurveysAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.isAllSurveysAnswered && !(ctx_r58.surveyDetails == null ? null : ctx_r58.surveyDetails.claim));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.isAllSurveysAnswered && (ctx_r58.surveyDetails == null ? null : ctx_r58.surveyDetails.claim));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r58.isAllSurveysAnswered && ctx_r58.surveyState == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r58.surveyState == 3);
} }
function DashboardLandingPageComponent_section_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardLandingPageComponent_section_11_div_6_ng_container_1_Template, 3, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_11_div_6_ng_container_2_Template, 8, 7, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r32.appId == "mmind" && ctx_r32.isSidOrSSId == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r32.appId == "mmind" && ctx_r32.isSidOrSSId == "sid" || ctx_r32.appId != "mmind");
} }
function DashboardLandingPageComponent_section_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_11_div_4_Template, 12, 11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DashboardLandingPageComponent_section_11_div_5_Template, 5, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardLandingPageComponent_section_11_div_6_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.surveyType != ctx_r3.globalConstants.verify && ctx_r3.surveyType != ctx_r3.globalConstants.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.surveyType == ctx_r3.globalConstants.verify && ctx_r3.appId != "mmind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.surveyType == ctx_r3.globalConstants.feedback);
} }
function DashboardLandingPageComponent_section_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r76.onMySurveysClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "My Surveys");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r68.isSidOrSSId == "ssid" && ctx_r68.isSidSsidValid ? null : "btn-opacity");
} }
function DashboardLandingPageComponent_section_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r78.onFAQClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function DashboardLandingPageComponent_section_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r80.goToProfilePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} }
function DashboardLandingPageComponent_section_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61)(1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r82.onHelpClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r71.isSidOrSSId == "ssid" ? "q-mt-20" : null);
} }
function DashboardLandingPageComponent_section_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70)(1, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r84.onShareQRClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Sharable QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_12_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 72)(1, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "If you qualify and you answer all the required surveys, you will be paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Your identity and responses will not be revealed to your employer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r73.getCurrencySymbol(ctx_r73.surveyDetails == null ? null : ctx_r73.surveyDetails.currency), " ", ctx_r73.surveyDetails == null ? null : ctx_r73.surveyDetails.paymentOffered, ".");
} }
function DashboardLandingPageComponent_section_12_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_8_div_7_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r87.showClaimsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Click now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " to claim payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_12_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r89.showClaimsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 77)(3, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_section_12_div_8_div_7_Template, 5, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r74.isAllSurveysAnswered && !(ctx_r74.surveyDetails == null ? null : ctx_r74.surveyDetails.claim) ? "myr-icon-green" : "myr-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.getCurrencySymbol(ctx_r74.surveyDetails == null ? null : ctx_r74.surveyDetails.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r74.surveyDetails == null ? null : ctx_r74.surveyDetails.paymentOffered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r74.isAllSurveysAnswered && !(ctx_r74.surveyDetails == null ? null : ctx_r74.surveyDetails.claim));
} }
function DashboardLandingPageComponent_section_12_div_9_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_9_div_7_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r92.showClaimsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Click now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " to claim payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_section_12_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_section_12_div_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r94.showClaimsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 82)(3, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_section_12_div_9_div_7_Template, 5, 0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r75.isAllSurveysAnswered && !(ctx_r75.surveyDetails == null ? null : ctx_r75.surveyDetails.claim) ? "myr-icon-green" : "myr-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.getCurrencySymbol(ctx_r75.surveyDetails == null ? null : ctx_r75.surveyDetails.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r75.surveyDetails == null ? null : ctx_r75.surveyDetails.paymentOffered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r75.isAllSurveysAnswered && !(ctx_r75.surveyDetails == null ? null : ctx_r75.surveyDetails.claim));
} }
function DashboardLandingPageComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 54)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardLandingPageComponent_section_12_div_2_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardLandingPageComponent_section_12_div_3_Template, 5, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardLandingPageComponent_section_12_div_4_Template, 5, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, DashboardLandingPageComponent_section_12_div_5_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardLandingPageComponent_section_12_div_6_Template, 3, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_section_12_div_7_Template, 7, 2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DashboardLandingPageComponent_section_12_div_8_Template, 8, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardLandingPageComponent_section_12_div_9_Template, 8, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.surveyType != ctx_r4.globalConstants.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isSidOrSSId == "ssid" && ctx_r4.surveyType != ctx_r4.globalConstants.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isSidOrSSId == "ssid" && ctx_r4.surveyType != ctx_r4.globalConstants.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.surveyType != ctx_r4.globalConstants.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.surveyType == ctx_r4.globalConstants.shareQrCode && ctx_r4.isAllSurveysAnswered && (ctx_r4.surveyDetails == null ? null : ctx_r4.surveyDetails.claim) || ctx_r4.surveyType == ctx_r4.globalConstants.shareQrCode && ctx_r4.claimType == ctx_r4.globalConstants.eachSurvey && (ctx_r4.surveyDetails == null ? null : ctx_r4.surveyDetails.surveyGroupItems) && (ctx_r4.surveyDetails == null ? null : ctx_r4.surveyDetails.surveyGroupItems[0]) && (ctx_r4.surveyDetails == null ? null : ctx_r4.surveyDetails.surveyGroupItems[0]["claimEachSurvey"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isSidOrSSId == "sid" && ctx_r4.appId != "mmind");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.appId != "mmind" && ctx_r4.isSidOrSSId != "sid" && ctx_r4.isSidOrSSId != "" && ctx_r4.isSidSsidValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.appId == "mmind" && ctx_r4.isSidOrSSId == "sid" && ctx_r4.isSidSsidValid);
} }
function DashboardLandingPageComponent_ng_template_13_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 80)(1, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_13_div_10_div_7_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r100.showClaimsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Click now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " to claim payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function DashboardLandingPageComponent_ng_template_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "div", 100)(3, "h5", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardLandingPageComponent_ng_template_13_div_10_div_7_Template, 5, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r98.getCurrencySymbol(ctx_r98.surveyDetails == null ? null : ctx_r98.surveyDetails.currency));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r98.surveyDetails == null ? null : ctx_r98.surveyDetails.paymentOffered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r98.isAllSurveysAnswered && !(ctx_r98.surveyDetails == null ? null : ctx_r98.surveyDetails.claim));
} }
function DashboardLandingPageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_13_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r102.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 87)(6, "section", 88)(7, "div", 89)(8, "div")(9, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardLandingPageComponent_ng_template_13_div_10_Template, 8, 3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 92)(12, "h5", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "You can only claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " after completing the");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 95)(21, "div", 96)(22, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_13_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r103); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r104.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.isSidOrSSId != "" && ctx_r6.isSidSsidValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r6.getCurrencySymbol(ctx_r6.surveyDetails == null ? null : ctx_r6.surveyDetails.currency), " ", ctx_r6.surveyDetails == null ? null : ctx_r6.surveyDetails.paymentOffered, "");
} }
function DashboardLandingPageComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 87)(4, "section", 88)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " To enable location : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Go to settings > type location > tap the location icon > turn it on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 95)(10, "div", 96)(11, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_15_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r107.onLocationOkClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function DashboardLandingPageComponent_ng_template_17_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 112)(1, "input", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function DashboardLandingPageComponent_ng_template_17_div_12_Template_input_keyup_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r117); const i_r114 = restoredCtx.index; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r116.keyUpEvent($event, i_r114); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const input_r113 = ctx.$implicit;
    const i_r114 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("formControlName", input_r113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", i_r114);
} }
function DashboardLandingPageComponent_ng_template_17_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Enter valid OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function DashboardLandingPageComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "h5", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_17_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r118.closeOTPPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 104)(6, "div", 105)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 106)(10, "form", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function DashboardLandingPageComponent_ng_template_17_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r120.onOTPConfirmClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DashboardLandingPageComponent_ng_template_17_div_12_Template, 3, 2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DashboardLandingPageComponent_ng_template_17_div_13_Template, 2, 0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r10.surveyDetails == null ? null : ctx_r10.surveyDetails.surveyVerificationMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r10.otpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.formInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.isOtpInValid);
} }
function DashboardLandingPageComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 87)(4, "section", 88)(5, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " You are not eligible to answer the survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " As you are unable to answer the qualification survey within the time period, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " You cannot answer any surveys now. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 95)(12, "div", 96)(13, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r123.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
function DashboardLandingPageComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_21_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r127.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 87)(6, "section", 88)(7, "div", 102)(8, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " We need your UPI details to pay you after you complete the survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 95)(11, "div", 96)(12, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardLandingPageComponent_ng_template_21_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r129.onAddUpiDetailsClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Add UPI details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} }
class DashboardLandingPageComponent {
    constructor(router, sharedService, route, surveyService, claimsService, dashboardService, modalService, config) {
        this.router = router;
        this.sharedService = sharedService;
        this.route = route;
        this.surveyService = surveyService;
        this.claimsService = claimsService;
        this.dashboardService = dashboardService;
        this.modalService = modalService;
        this.globalConstants = src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants;
        this.popupMsg = '';
        this.popupMsgConn = '';
        this.firstSurveyId = '';
        this.surveyHistory = [];
        this.mainSurveyDetails = {};
        this.surveyDetails = {};
        this.nextSurveyDetails = {};
        this.disableStartSurvey = false;
        this.surveyOnFutureDate = false;
        this.isFirstSurveyAnswerd = false;
        this.currentSurveyDay = 1;
        this.maxResponseCount = 0;
        this.isFutureDaySurvey = false;
        this.lastSurveyId = '';
        this.appId = '';
        this.surveyId = '';
        this.surveyType = '';
        this.claimType = '';
        this.isSidOrSSId = '';
        this.isAllSurveysAnswered = false;
        this.isSIDAnswered = false;
        this.isSidSsidValid = true;
        this.latitude = 0;
        this.longitude = 0;
        this.formInput = ['input1', 'input2', 'input3', 'input4'];
        this.isOtpInValid = false;
        this.numberPattern = /^[0-9]+$/;
        this.loggedInUserDetails = {};
        this.currentSurveyDetails = {};
        this.languageSelected = 'https://youtube.com/embed/j2Kcpw3BcJQ';
        this.languagesList = [
            // { label: 'Select a Language', value: '' },
            { label: 'English (default)', value: 'https://youtube.com/embed/j2Kcpw3BcJQ' },
        ];
        this.isFirstSurveyNotAnsweredWithInTime = false;
        this.isShareQrCodeCompleted = false;
        this.otpForm = this.toFormGroup(this.formInput);
        config.backdrop = 'static';
        config.keyboard = false;
    }
    toFormGroup(elements) {
        const group = {};
        elements.forEach((key) => {
            group[key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup(group);
    }
    ngOnInit() {
        localStorage.removeItem('surveyMessages');
        // ************ Update the boolean value **************
        this.sharedService.successErrorMsg['isRequestSurvey'] = false;
        this.route.queryParamMap.subscribe((params) => {
            if (params['params']['ssid']) {
                localStorage.setItem('ssid', params['params']['ssid']);
            }
        });
        this.surveyType = localStorage.getItem('surveyType');
        this.claimType = localStorage.getItem('claim');
        let sid = localStorage.getItem('sid');
        let ssid = localStorage.getItem('ssid');
        // ******* Check whether sid is there or ssid ***************
        if (sid != '' && sid != 'null' && sid != null) {
            this.isSidOrSSId = 'sid';
        }
        if (ssid != '' && ssid != 'null' && ssid != null) {
            this.isSidOrSSId = 'ssid';
        }
        this.appId = localStorage.getItem('app');
        this.fetchProfileDetails();
        this.fetchSurveyInfo();
        this.getLocation();
    }
    onFAQClick() {
        window.open('https://millionmakers.org/faqs');
    }
    // ********** Method to fetch the Survey Info based on SID or SSID ************************
    fetchSurveyInfo() {
        this.msg = "";
        this.isFirstSurveyAnswerd = false;
        this.sharedService.startLoader();
        if (localStorage.getItem('sid') != '' && localStorage.getItem('sid') != null && localStorage.getItem('sid') != 'null') {
            this.fetchSurveySIDDetails();
        }
        else if (localStorage.getItem('ssid') == null || localStorage.getItem('ssid') == 'null') {
            this.surveyState = 5; //When ssid is null
            this.msg = "Please scan the QR code again.";
            this.isSidSsidValid = false;
            return;
        }
        else {
            this.fetchSurveySetSSIDDetails();
        }
    }
    // ********** Method to fetch the Survey Info based on SID  ************************
    fetchSurveySIDDetails() {
        this.surveyService.getSurveyDetailsbyQRCode(localStorage.getItem('sid')).subscribe(result => {
            this.surveyDetails = result['result'];
            this.surveyId = result['result']['id'];
            let now = new Date(); // todays date
            now.setHours(0, 0, 0, 0);
            let pend = new Date(this.surveyDetails['endDate']);
            pend = new Date(pend.getTime() + pend.getTimezoneOffset() * 60000);
            console.log("DATE: ", pend);
            let pduration = pend - now;
            // *********** If time diff is -ve. Survey Time is completed *******************
            if (pduration < 0) {
                this.surveyState = 2;
                this.msg = "Survey program ended. We will notify when next program available.";
                return;
            }
            let end = new Date(this.surveyDetails['endDate']);
            // let end: any = new Date(this.surveyDetails['startDate']);
            end = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
            end.setHours(0, 0, 0, 0);
            let duration = end - now;
            // *********** If time diff is 0. Survey is Available & it is current day survey *******************
            if (duration == 0) {
                //enable start survey buton
                this.surveyState = 3;
                this.msg = "Please start today's survey!";
            }
            // *********** If time diff is >0. Timer will be run till next survey time *******************
            else if (duration > 0) {
                this.surveyState = 4;
                this.showCounter(this.surveyDetails['startDate']);
            }
        }, error => {
            this.fetchSurveyAmountDetails();
            if (error.error.responseException.exceptionMessage.substring(0, 15) == "AlreadyAnswered") {
                this.surveyState = 5; //When ssid is null
                this.msg = "Survey already answered.";
                this.isAllSurveysAnswered = true;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else if (error.error.responseException.exceptionMessage.includes('ReachedMaxParticipants')) {
                this.surveyState = 6;
                this.msg = "Survey reached maximum no. of participants.";
                this.isAllSurveysAnswered = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else {
                this.surveyState = 5; //When sid is null
                this.msg = "Survey not found. Please scan the QR code again.";
                this.isAllSurveysAnswered = false;
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
        });
    }
    // ******** To fetch the Survey Details if SID is already answered *****************
    fetchSurveyAmountDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyDetailsResponseForAnsweredQRCode(localStorage.getItem('sid')).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.surveyDetails = res['result'];
            }
        });
    }
    // ********** Method to fetch the Survey Info based on SSID  ************************
    fetchSurveySetSSIDDetails() {
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe(res => {
            this.sharedService.stopLoader();
            this.surveyDetails = res['result'];
            let message = {
                claimMessage: this.surveyDetails['claimMessage'],
                paymentMessage: this.surveyDetails['paymentMessage'],
                qualificationMessage: this.surveyDetails['qualificationMessage'],
                surveyVerificationMessage: this.surveyDetails['surveyVerificationMessage'],
            };
            localStorage.setItem('surveySetId', this.surveyDetails['id']);
            localStorage.setItem('surveyMessages', JSON.stringify(message));
            if (this.surveyDetails == null || this.surveyDetails['surveyGroupItems'].length <= 0) {
                this.surveyState = 1;
                this.msg = "Surveys are not available";
                return;
            }
            // ************** Check all surveys is answered or not ***************
            let count = 0;
            this.surveyDetails['surveyGroupItems'].forEach((item) => {
                this.surveyDetails['currency'] = item['currency'];
                this.surveyDetails['paymentOffered'] = item['paymentOffered'];
                if (item['isAnswered']) {
                    count++;
                }
            });
            if (count == this.surveyDetails['surveyGroupItems'].length && count != 0) {
                this.isAllSurveysAnswered = true;
                return;
            }
            else {
                this.isAllSurveysAnswered = false;
            }
            let now = new Date(); // todays date
            now.setHours(0, 0, 0, 0);
            let pend = new Date(this.surveyDetails['endDate']);
            pend = new Date(pend.getTime() + pend.getTimezoneOffset() * 60000);
            let start = new Date(this.surveyDetails['startDate']);
            start = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
            // ******* Check if Start Date > Current Date (Future Day Survey) Show Timer ******************
            if ((start - now) > 0 && this.surveyDetails['type'] != 'Hourly') {
                this.isFutureDaySurvey = true;
                this.surveyState = 4;
                this.showHourlySurveyCounter(start);
                return;
            }
            let pduration = pend - now;
            console.log(pduration);
            if (pduration < 0) {
                this.surveyState = 2;
                this.msg = "Survey program ended. We will notify when next program available.";
                this.sharedService.successErrorMsg['message'] = "Thanks for completing the survey set.";
                return;
            }
            if (pduration == 0) {
                let length = this.surveyDetails['surveyGroupItems'].length;
                if (this.surveyDetails['surveyGroupItems'][length - 1]['isAnswered'] == true) {
                    this.surveyState = 2;
                    this.msg = "Survey program ended. We will notify when next program available.";
                    return;
                }
            }
            this.sortSuveys();
            // ********** Store 1st, next, last Survey Details ***************
            let len = this.surveyDetails['surveyGroupItems'].length;
            if (len > 0) {
                this.lastSurveyId = this.surveyDetails['surveyGroupItems'][len - 1]['surveyId'];
            }
            this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
            // ********* Check for Hourly or Daily Survey *********************
            if (this.surveyDetails['type'] != 'Hourly') {
                this.dailySurveySSIDDetails(now);
            }
            else {
                let today = new Date();
                today = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
                let start = new Date(this.surveyDetails['startDate']);
                start = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
                let end = new Date(this.surveyDetails['endDate']);
                end = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
                // let firstSurveyStartDate: any = new Date(this.surveyDetails['surveyGroupItems'][0]['startDate']);
                // firstSurveyStartDate = new Date(firstSurveyStartDate.getTime() + firstSurveyStartDate.getTimezoneOffset() * 60000);
                // firstSurveyStartDate.setHours(0, 0, 0, 0);
                // if ((firstSurveyStartDate - now) > 0) {
                if ((start - today) > 0) {
                    this.isFutureDaySurvey = true;
                }
                this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
                this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
                this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
                for (let i = 0; i < this.surveyDetails['surveyGroupItems'].length; i++) {
                    let item = this.surveyDetails['surveyGroupItems'][i];
                    this.currentSurveyDay = i + 1;
                    if (!item['isAnswered']) {
                        this.nextSurveyDetails = item;
                        let duration = start - today;
                        this.surveyId = item['surveyId'];
                        if (duration == 0) {
                            //enable start survey buton
                            this.surveyState = 3;
                            // this.msg = "Please start today's survey!";
                            this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
                                `Don't wait - get paid after you complete 5 days of surveys`;
                            break;
                        }
                        else {
                            let a = end - today;
                            if (a >= 0) {
                                let previousItem;
                                let prevTime;
                                let mins = this.surveyDetails['minutesDifference'];
                                let newTime;
                                previousItem = this.surveyDetails['surveyGroupItems'][i - 1];
                                /* ********** In Hourly Survey, if previos Survey is answered then calculate the time gap
                                 for next Survey based on previous Survey Answered Time ******************* */
                                if (previousItem && previousItem['answeredTime']) {
                                    prevTime = new Date(previousItem['answeredTime']);
                                    prevTime = new Date(prevTime.getTime() + prevTime.getTimezoneOffset() * 60000);
                                    newTime = new Date(prevTime.getTime() + (Number(mins) * 60 * 1000));
                                    let diff = newTime - today;
                                    if (diff <= 0) {
                                        this.surveyState = 3;
                                        // this.msg = "Please start today's survey!";
                                        this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
                                            `Don't wait - get paid after you complete 5 days of surveys`;
                                    }
                                    else if (diff > 0) {
                                        // ********** FOR SSID 2nd Survey No need waiting time **********************
                                        if (i == 1) {
                                            this.surveyState = 3;
                                            this.msg = "Please start today's survey!";
                                        }
                                        else {
                                            this.surveyState = 4;
                                            this.showHourlySurveyCounter(newTime);
                                        }
                                        break;
                                    }
                                }
                                else {
                                    /* ********* If not Survey is answered and there is time available,
                                    First Survey will be enabled ******************* */
                                    let todayDate = new Date();
                                    todayDate = new Date(todayDate.getTime() + todayDate.getTimezoneOffset() * 60000);
                                    let startingDate = new Date(this.surveyDetails['startDate']);
                                    startingDate.setHours(0, 0, 0, 0);
                                    this.nextSurveyDetails = item;
                                    if ((startingDate - todayDate) <= 0) {
                                        this.surveyState = 3;
                                        this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
                                            `Don't wait - get paid after you complete 5 days of surveys`;
                                        break;
                                    }
                                    else {
                                        // ********** FOR SSID 2nd Survey No need waiting time **********************
                                        if (i == 1) {
                                            this.surveyState = 3;
                                            this.msg = "Please start today's survey!";
                                        }
                                        else {
                                            this.surveyState = 4;
                                            this.showHourlySurveyCounter(start);
                                        }
                                        break;
                                    }
                                }
                                break;
                            }
                        }
                        return;
                    }
                    else {
                        this.nextSurveyDetails = this.surveyDetails['surveyGroupItems'][i];
                    }
                }
            }
        }, error => {
            if (error.error.responseException.exceptionMessage == "Survey is not found for QR:null") {
                this.surveyState = 5; //When ssid is null
                this.msg = "Please scan the QR code again.";
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else {
                this.surveyState = 5; //When ssid is null
                this.msg = "Survey not found. Please scan the QR code again.";
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
        });
    }
    // ********** This Timer will be run for Hourly Survey **************
    showHourlySurveyCounter(newTime) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.interval)(1000).subscribe(val => {
            let now;
            let days = 0, hours = 0, minutes = 0, seconds = 0;
            now = new Date(); // todays date
            let today = new Date();
            today = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
            let duration = newTime - today;
            if (duration <= 0) {
                this.clearCounter();
            }
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            // hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = hours + 'hrs ' + minutes +
                'min ' + seconds + 'secs';
            this.hours = `${hours} hrs`;
            this.minutes = `${minutes} mins`;
            this.seconds = `${seconds} secs`;
            this.sharedService.remainingTimeForSurvey.next(this.timeCounter);
        });
    }
    // ********** If Survey Type is Daily this method is triggered ****************
    dailySurveySSIDDetails(now) {
        if (this.surveyDetails['surveyGroupItems'].length > 0) {
            this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
            this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
        }
        this.surveyDetails['surveyGroupItems'].forEach((item, index) => {
            let today = new Date();
            if (!item['isAnswered']) {
                // ********* For Qualification Survey *******************
                if (index == 0) {
                    let endTime;
                    if (item['endDate']) {
                        endTime = new Date(item['endDate']);
                        let x = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        let y = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate());
                        // *******  Today Date is less than End Time You can answer the survey **********
                        if (x <= y) {
                            this.nextSurveyDetails = item;
                            this.surveyState = 3;
                            // this.msg = "Please start today's survey!";
                            this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
                                `Don't wait - get paid after you complete 5 days of surveys`;
                            this.isFirstSurveyNotAnsweredWithInTime = false;
                            return;
                        }
                        else {
                            // ****** To know whetehr 1st survey is answered within Qualf Survey End Time *************
                            this.isFirstSurveyNotAnsweredWithInTime = true;
                        }
                    }
                    // *********** For 1st Survey Answer it if Qualification Survey is answered *****************
                }
                else if (index == 1 && this.claimType != this.globalConstants.eachSurvey) {
                    this.surveyState = 3;
                    this.msg = "Please start today's survey!";
                    this.nextSurveyDetails = item;
                }
                else {
                    // *********** Rest all Surveys Answer it, only if previous survey is answered previous day **************
                    let previousSurvey = this.surveyDetails['surveyGroupItems'][index - 1];
                    if (previousSurvey['isAnswered']) {
                        let answerTime = new Date(previousSurvey['answeredTime']);
                        let today = new Date();
                        // today.setDate(today.getDate() + 1);
                        let x = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        let y = new Date(answerTime.getFullYear(), answerTime.getMonth(), answerTime.getDate());
                        // **** Check if Current day is > previous Survey Answered date *******************
                        // ******** Survey Will be available only if it is > ***********************
                        if (x > y) {
                            this.surveyState = 3;
                            // this.msg = "Please start today's survey!";
                            this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
                                `Don't wait - get paid after you complete 5 days of surveys`;
                            this.nextSurveyDetails = item;
                            return;
                        }
                        else {
                            // ********* If  Survey is opened on te same day then Start the timer ***************
                            this.surveyState = 4;
                            this.showCounter(item['startDate']);
                            return;
                        }
                    }
                }
            }
        });
    }
    // *********** Fetch the total No of Users who responded to the Survey only for SSID **************
    getTotalSurveyResponseCount() {
        if (this.firstSurveyId) {
            this.surveyService.getSurveyResponseCount(localStorage.getItem('ssid'), this.firstSurveyId).subscribe(data => {
                if (!data['isError']) {
                    this.maxResponseCount = data.result;
                }
            });
        }
    }
    // ********** Timer will be displayed for Daily Survey to show when next survey will be available ****************
    showCounter(suveydate) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.interval)(1000).subscribe(val => {
            let now;
            let end;
            let days = 0, hours = 0, minutes = 0, seconds = 0;
            now = new Date(); // todays date
            // *********** For SID consider Survey Date as end Date *************************
            if (this.isSidOrSSId == 'sid') {
                end = new Date(suveydate);
            }
            else {
                // ************ For SSID consider tomorrow date as end date *********************
                end = new Date();
                end.setDate(end.getDate() + 1);
            }
            end.setHours(0, 0, 0, 0);
            let duration = end - now;
            if (duration <= 0) {
                this.clearCounter();
            }
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = hours + 'hrs ' + minutes +
                'min ' + seconds + 'secs';
            this.hours = `${hours} hrs`;
            this.minutes = `${minutes} mins`;
            this.seconds = `${seconds} secs`;
            this.sharedService.remainingTimeForSurvey.next(this.timeCounter);
        });
    }
    // *********** Method to clear the Timer **********************
    clearCounter() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.surveyState = 3;
        // this.msg = "Please start today's survey!";
        this.msg = this.currentSurveyDay == 1 ? "Please start today's survey!" :
            `Don't wait - get paid after you complete 5 days of surveys`;
    }
    sortSuveys() {
        return this.surveyDetails['surveyGroupItems'].sort((a, b) => {
            return new Date(a['startDate']) - new Date(b['startDate']);
        });
    }
    // ************** Triggerrs when Start Survey Button is clicked *****************
    onStartSurveyClick() {
        console.log('in start survey click', this.surveyState);
        // ******** Executes only if Survey State is 3 *********************
        if (this.surveyState == 3) {
            // *********** Open Survey if Latitude and Longitude is available ****************
            if (this.latitude != 0 && this.longitude != 0) {
                let qrCode = localStorage.getItem('sharedqrcode');
                // ******** Check if SHared Code Survey is already answered or not. Answer it only if no one has answered ******************
                if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode && qrCode != '' && qrCode != null && this.isSidOrSSId == 'ssid') || (this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey && qrCode != '' && qrCode != null && this.isSidOrSSId == 'ssid')) {
                    // ************** Get the QR Code data is valid or not only for the 1st Survey **********************************
                    if (!this.surveyDetails['surveyGroupItems'][0]['isAnswered']) {
                        this.checkQRCodeDetails();
                    }
                    else {
                        this.checkFirstSurveyAnswered();
                    }
                }
                else {
                    this.checkFirstSurveyAnswered();
                }
            }
            else {
                // ******** No Need to open the location popup for claim survey. For rest we need to show the popup **********************
                // if (this.surveyType == ConfigConstants.shareQrCode && this.claimType == ConfigConstants.eachSurvey) {
                //   this.checkFirstSurveyAnswered();
                // } else {
                this.openClaimModal(this.locationPopup);
                // }
            }
        }
    }
    /*************** Verify 1st Survey Is answered or not and navigate based on status ************ */
    checkFirstSurveyAnswered() {
        // ******** If 1st Survey is ANswered, check for BlueNo is Qualified or Not ************
        if (this.isFirstSurveyAnswerd) {
            // ***** Navigate to SurveyQuestions Page when SMS is false **********************
            if (this.nextSurveyDetails['smsCode']) {
                // ********** Check whether it is 2nd survey or Not *****************
                if (this.surveyDetails['surveyGroupItems'].length >= 2 && this.nextSurveyDetails['surveyId'] == this.surveyDetails['surveyGroupItems'][1]['surveyId']) {
                    // ******** Navigate to Bank details page if currency is INR and Bank details are not saved ****************
                    // if (this.surveyDetails['currency'] == 'INR' && !this.surveyDetails['isUpiDetailsExist']) {
                    //   this.openClaimModal(this.bankPopup);
                    //   return;
                    // } else {
                    // ***************** Check if the Previous Survey is claimed or not for Eachway Survey *********************
                    if (this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey && this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode) {
                        let survey = this.surveyDetails['surveyGroupItems'][0];
                        if (survey['isAnswered'] && !survey['claimEachSurvey']) {
                            localStorage.setItem('currentSurveyDay', (1).toString());
                            this.router.navigateByUrl('claims/list');
                            return;
                        }
                    }
                    let rid = this.surveyDetails['surveyGroupItems'][0]['dataRequestResponseId'];
                    let qid = localStorage.getItem('qid');
                    this.currentSurveyDetails = this.surveyDetails['surveyGroupItems'][1];
                    this.sharedService.startLoader();
                    //this.surveyService.checkSurveyIsValidOrNot(rid, qid, this.nextSurveyDetails['qrCode']).subscribe(res => {
                    this.surveyService.checkSurveyIsValidOrNot(rid, qid, localStorage.getItem('ssid')).subscribe(res => {
                        console.log(res);
                        this.sharedService.stopLoader();
                        if (res['success'] && res['qualification']) {
                            // ********** Store the 1st, last and Next Survey Details if it is qualified *************
                            this.currentSurveyDay = 2;
                            this.sharedService.successErrorMsg['firstSurveyId'] = this.firstSurveyId;
                            this.sharedService.successErrorMsg['nextSurveyId'] = this.nextSurveyDetails['surveyId'];
                            this.sharedService.successErrorMsg['lastSurveyId'] = this.lastSurveyId;
                            localStorage.setItem('currentSurveyDay', this.currentSurveyDay.toString());
                            /* ********** Based on response if survey is valid check for sms code if count = 0 navigate
                             to Survey Questions page ** else Dont go to Survey Page show validation msg *************/
                            // this.showOTPPopup(this.nextSurveyDetails);
                            /* ******* IN ODK OTP Verification is not required. So redirecting it directly once
                            check_qualification.php API is success. So commented above code **********    */
                            if (this.currentSurveyDetails['odkUrl']) {
                                this.router.navigateByUrl(`home/survey/odk/${this.nextSurveyDetails['surveyId']}`);
                            }
                            else {
                                this.router.navigateByUrl(`home/survey/${this.nextSurveyDetails['surveyId']}`);
                            }
                            return;
                        }
                        else {
                            this.sharedService.showToastMesaages('error', res['message']);
                        }
                    }, (error => {
                        var _a, _b;
                        this.sharedService.stopLoader();
                        this.sharedService.showToastMesaages('error', (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.responseException) === null || _b === void 0 ? void 0 : _b.exceptionMessage);
                    }));
                    // }
                }
                else {
                    this.verifyBlueNoIsQualifiedOrNot();
                }
            }
            else {
                this.navigateToSurveyPage();
            }
        }
        else {
            // ******* if 1st Survey is not answered Answer Survey ***********
            if (this.surveyDetails['type'] != 'Hourly' && this.isSidOrSSId == 'ssid') {
                // ******** Show u r not elig msg if surv is not answered *************
                if (this.isFirstSurveyNotAnsweredWithInTime) {
                    this.openClaimModal(this.qualifMsgPopup);
                    return;
                }
                else {
                    this.navigateToSurveyPage();
                }
            }
            else {
                this.navigateToSurveyPage();
            }
        }
    }
    /* ************** For Claim Survey Check previous Survey is Answered and Claimed or not.
    If Not Claimed then naviate user to claimns Screen. Else navigate to Next Survey *******  */
    checkEachSurveyAnswered(surveyIndex) {
        let survey = this.surveyDetails['surveyGroupItems'][surveyIndex];
        if (survey['isAnswered'] && !survey['claimEachSurvey']) {
            localStorage.setItem('currentSurveyDay', (surveyIndex + 1).toString());
            this.router.navigateByUrl('claims/list');
        }
        else {
            this.router.navigateByUrl(`home/survey/odk/${this.nextSurveyDetails['surveyId']}`);
        }
    }
    // ************ Triggers on Location POpup is clsoed *******************
    onLocationOkClick() {
        this.checkFirstSurveyAnswered();
        this.closePopup();
    }
    navigateToSurveyPage() {
        // ******** Executes only if Survey State is 3 *********************
        if (this.surveyState == 3) {
            if (localStorage.getItem('sid') != '' && localStorage.getItem('sid') != null) {
                // ******** ONLY for SID *******************
                this.sharedService.startLoader();
                this.surveyService.getDataRequesDetailsById(this.surveyId).subscribe(res => {
                    this.sharedService.stopLoader();
                    if (!res['isError']) {
                        this.currentSurveyDetails = res['result'];
                        localStorage.setItem('currentSurveyDay', this.currentSurveyDay.toString());
                        if (res['result']['odkUrl']) {
                            this.router.navigateByUrl(`home/survey/odk/${this.surveyId}`);
                        }
                        else {
                            this.router.navigateByUrl(`home/survey/${this.surveyId}`);
                        }
                        return;
                    }
                }, (error => {
                    var _a, _b;
                    console.log(error);
                    this.sharedService.showToastMesaages('error', (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.responseException) === null || _b === void 0 ? void 0 : _b.exceptionMessage);
                }));
            }
            // ************* ONLY for DAILY Survey SET ******************
            if (this.surveyDetails['type'] != 'Hourly') {
                if (this.surveyDetails['surveyGroupItems'] && this.surveyDetails['surveyGroupItems'].length > 0) {
                    for (let i = 0; i < this.surveyDetails['surveyGroupItems'].length; i++) {
                        let item = this.surveyDetails['surveyGroupItems'][i];
                        let now = new Date();
                        now.setHours(0, 0, 0, 0);
                        if (localStorage.getItem('surveyType') == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode && localStorage.getItem('claim') == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey) {
                            if (item['isAnswered'] && !item['claimEachSurvey']) {
                                // ********** Passing Actual Index ****************
                                this.checkEachSurveyAnswered(i);
                                return;
                            }
                        }
                        if (item['isAnswered'] == false) {
                            let end = new Date(item['startDate']);
                            end.setHours(0, 0, 0, 0);
                            let duration = end - now;
                            // *** Start the survey if duration is <=0 and ignore the duration if survey index is 1 as timer is removed for the 2nd survey******
                            // if (duration <= 0 || i == 1) {
                            if (duration <= 0) {
                                // ******** Navigate to Bank details page if currency is INR and Bank details are not saved ****************
                                // if (this.surveyDetails['currency'] == 'INR' && !this.surveyDetails['isUpiDetailsExist'] && i == 1) {
                                //   this.openClaimModal(this.bankPopup);
                                //   return;
                                // } else {
                                // ***** If Currency is not INR or Bank details are there start the survey ***********
                                this.startDailySurvey(item, i);
                                return;
                                //}
                            }
                            else {
                                this.surveyState = 4;
                                this.showCounter(item['startDate']);
                                return;
                            }
                        }
                    }
                }
            }
            else {
                this.startHourlySurvey();
            }
        }
    }
    // *********** Method to start the Daily Survey ********************
    startDailySurvey(item, index) {
        this.sharedService.startLoader();
        this.surveyService.getDataRequesDetailsById(item['surveyId']).subscribe(res => {
            var _a;
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.currentSurveyDetails = res['result'];
                localStorage.setItem('currentSurveyDay', (index + 1).toString());
                //          if (this.isFirstSurveyAnswerd == false) {
                this.sharedService.successErrorMsg['firstSurveyId'] = this.firstSurveyId;
                this.sharedService.successErrorMsg['nextSurveyId'] = this.nextSurveyDetails['surveyId'];
                this.sharedService.successErrorMsg['lastSurveyId'] = this.lastSurveyId;
                let count = 0;
                // this.surveyDetails['surveyGroupItems'].forEach((survey: any) => {
                if (item['surveyId'] == ((_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.id)) {
                    if (item['smsCode']) {
                        count++;
                    }
                }
                // });
                if (this.currentSurveyDay >= 4) {
                    if (this.isFirstSurveyAnswerd) {
                        if (count == 0) {
                            if (item['odkUrl']) {
                                if (this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey && this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode) {
                                    this.checkEachSurveyAnswered(index);
                                }
                                else {
                                    this.router.navigateByUrl(`home/survey/odk/${item['surveyId']}`);
                                }
                            }
                            else {
                                this.router.navigateByUrl(`home/survey/${item['surveyId']}`);
                            }
                        }
                        else {
                            this.showOTPPopup(item);
                        }
                        return;
                    }
                    else {
                        this.showNoPayMsg();
                        return;
                    }
                }
                else {
                    console.log("max Participants: ", _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.maxSurveyParticipants);
                    if (this.maxResponseCount >= _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.maxSurveyParticipants) {
                        if (this.isFirstSurveyAnswerd) {
                            if (count == 0) {
                                if (item['odkUrl']) {
                                    if (this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey && this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode) {
                                        this.checkEachSurveyAnswered(index);
                                    }
                                    else {
                                        this.router.navigateByUrl(`home/survey/odk/${item['surveyId']}`);
                                    }
                                }
                                else {
                                    this.router.navigateByUrl(`home/survey/${item['surveyId']}`);
                                }
                            }
                            else {
                                this.showOTPPopup(item);
                            }
                            return;
                        }
                        else {
                            this.showNoPayMsg();
                            return;
                        }
                    }
                    else if (!this.isFirstSurveyAnswerd) {
                        if (count == 0) {
                            if (item['odkUrl']) {
                                this.router.navigateByUrl(`home/survey/odk/${this.firstSurveyId}`);
                            }
                            else {
                                this.router.navigateByUrl(`home/survey/${this.firstSurveyId}`);
                            }
                        }
                        else {
                            this.showOTPPopup(item, this.firstSurveyId);
                        }
                        return;
                    }
                    else {
                        if (count == 0) {
                            if (item['odkUrl']) {
                                if (this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.eachSurvey && this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.shareQrCode) {
                                    this.checkEachSurveyAnswered(index);
                                }
                                else {
                                    this.router.navigateByUrl(`home/survey/odk/${item['surveyId']}`);
                                }
                            }
                            else {
                                this.router.navigateByUrl(`home/survey/${item['surveyId']}`);
                            }
                        }
                        else {
                            this.showOTPPopup(item);
                        }
                        return;
                    }
                }
            }
        }, (error => {
            if (error.error.responseException.exceptionMessage.substring(0, 7) == "Expired") {
                this.sharedService.successErrorMsg['message'] = "The survey is already expired.";
                this.sharedService.successErrorMsg['showAcceptReject'] = false;
                this.sharedService.successErrorMsg['showProceed'] = false;
            }
            else {
                this.router.navigateByUrl(`/home/info`);
                this.surveyState = 6;
                this.msg = "Survey reached maximum no. of participants.";
                return;
            }
        }));
    }
    /* ************ If user is not available for Pay,ment due to not answering the Survey
     in time for Daily survey below msg will be displayed *********************** */
    showNoPayMsg() {
        this.sharedService.successErrorMsg['firstSurveyId'] = this.firstSurveyId;
        this.sharedService.successErrorMsg['message'] = 'You are not qualified for payment.';
        this.sharedService.successErrorMsg['showAcceptReject'] = false;
        this.sharedService.successErrorMsg['showProceed'] = true;
        this.router.navigateByUrl(`home/messages`);
    }
    // *********** Storing 1st, next, last Surveys in Hourly Survey ********************
    startHourlySurvey() {
        this.sharedService.startLoader();
        this.surveyService.getDataRequesDetailsById(this.surveyId).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.currentSurveyDetails = res['result'];
                let count = 0;
                this.surveyDetails['surveyGroupItems'].forEach((item, index) => {
                    var _a;
                    if (item['surveyId'] == ((_a = res === null || res === void 0 ? void 0 : res.result) === null || _a === void 0 ? void 0 : _a.id)) {
                        if (item['smsCode']) {
                            count++;
                            this.showOTPPopup(item);
                            return;
                        }
                        else {
                            this.goToSurveyPage(count);
                        }
                    }
                });
            }
        }, (error => {
            var _a, _b;
            this.sharedService.showToastMesaages('error', (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.responseException) === null || _b === void 0 ? void 0 : _b.exceptionMessage);
        }));
    }
    // ************* Navigate to Survey Page from Hourly Survey Logic **********
    goToSurveyPage(count) {
        if (count == 0) {
            this.sharedService.successErrorMsg['firstSurveyId'] = this.firstSurveyId;
            this.sharedService.successErrorMsg['nextSurveyId'] = this.nextSurveyDetails['surveyId'];
            this.sharedService.successErrorMsg['lastSurveyId'] = this.lastSurveyId;
            localStorage.setItem('currentSurveyDay', this.currentSurveyDay.toString());
            if (this.currentSurveyDetails['odkUrl']) {
                this.router.navigateByUrl(`home/survey/odk/${this.surveyId}`);
            }
            else {
                this.router.navigateByUrl(`home/survey/${this.surveyId}`);
            }
            return;
        }
    }
    // ********* Claims Page Navigation *******************
    showClaimsPage() {
        if (this.isAllSurveysAnswered) {
            this.router.navigateByUrl('claims/list');
        }
        else {
            this.openClaimModal(this.content);
        }
    }
    // ********* Profile Page Navigation *******************
    goToProfilePage() {
        this.router.navigateByUrl('home/profile');
    }
    // ********* MY Surveys Page Navigation available only for SSID *******************
    onMySurveysClick() {
        if (this.isSidOrSSId == 'ssid' && this.isSidSsidValid) {
            // ******* Navigate to that page only if 1st survey is answered **************
            // if (this.surveyDetails['surveyGroupItems'].length != 1 && this.surveyDetails['surveyGroupItems'][0]['isAnswered']) {
            this.router.navigateByUrl('my-surveys/list');
            // }
        }
    }
    // ********* Help Page Navigation *******************
    onHelpClick() {
        this.router.navigateByUrl('help');
    }
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
    // ********* Fetch Profile Info *******************
    fetchProfileDetails() {
        let blueNumber = localStorage.getItem('personBluenumber');
        this.sharedService.startLoader();
        this.dashboardService.getProfileDetails(blueNumber).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res['isError'] && res['result']) {
                this.loggedInUserDetails = res['result'];
                localStorage.setItem('personMobileNumber', res['result']['contact']);
                if (res['result']['completed']) {
                    localStorage.setItem('isProfileCompleted', res['result']['completed']);
                }
                else {
                    localStorage.setItem('isProfileCompleted', "false");
                }
            }
        });
    }
    // ******** Popup close ***************************
    closePopup() {
        this.modalService.dismissAll();
    }
    openClaimModal(content) {
        this.modalService.open(content, {
            size: 'sm modal-dialog-centered',
            windowClass: 'modal-dialog-border'
        });
    }
    // ************ Navigate to Bank Details Screen ******************
    onAddBankDetailsClick() {
        this.router.navigateByUrl('home/bank-details');
        this.closePopup();
    }
    // ************ Navigate to UPI Details Screen ******************
    onAddUpiDetailsClick() {
        this.router.navigateByUrl('home/upi-details');
        this.closePopup();
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                }
            }, (error) => {
                console.log(error);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    keyUpEvent(event, index) {
        let pos = index;
        if (event.keyCode === 8 && event.which === 8) {
            pos = index - 1;
        }
        else {
            pos = index + 1;
        }
        if (this.numberPattern.test(event.target.value)) {
            if (pos > -1 && pos < this.formInput.length) {
                let docElePos = document.getElementById(pos);
                docElePos.focus();
            }
        }
        else {
            event.target.value = '';
            this.otpForm.reset();
        }
    }
    // *********** To check whether the User is qualified to Answer the Survey or not ***************
    verifyBlueNoIsQualifiedOrNot() {
        var _a;
        let params = {
            ContextId: localStorage.getItem('ssid'),
            blueNo: (_a = this.loggedInUserDetails) === null || _a === void 0 ? void 0 : _a.blueNumber
        };
        this.sharedService.startLoader();
        this.dashboardService.isBlueNoQualified(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.sharedService.stopLoader()))
            .subscribe((res) => {
            var _a;
            if (!res['isError']) {
                this.navigateToSurveyPage();
            }
            else {
                this.sharedService.showToastMesaages('error', (_a = res === null || res === void 0 ? void 0 : res.responseException) === null || _a === void 0 ? void 0 : _a.exceptionMessage);
            }
        }, (error => {
            var _a, _b;
            console.log(error);
            this.sharedService.showToastMesaages('error', (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.responseException) === null || _b === void 0 ? void 0 : _b.exceptionMessage);
        }));
    }
    // ********** Method to Generate an OTP for User to Answer *******************
    generateOTPToUser() {
        var _a;
        let params = {
            context: "MMASmsCodeRequestCreation",
            contextId: localStorage.getItem('ssid'),
            phonenumbersorBluenumbers: [
                (_a = this.loggedInUserDetails) === null || _a === void 0 ? void 0 : _a.blueNumber
            ]
        };
        this.sharedService.startLoader();
        this.dashboardService.generateOTP(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            var _a;
            if (!res['isError']) {
                this.sharedService.showToastMesaages('success', 'OTP sent successfully');
            }
            else {
                this.closeOTPPopup();
                this.sharedService.showToastMesaages('error', (_a = res === null || res === void 0 ? void 0 : res.responseException) === null || _a === void 0 ? void 0 : _a.exceptionMessage);
            }
        }, (error => {
            var _a, _b;
            console.log(error);
            this.closeOTPPopup();
            this.sharedService.showToastMesaages('error', (_b = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.responseException) === null || _b === void 0 ? void 0 : _b.exceptionMessage);
        }));
    }
    showOTPPopup(item, firstSurvey) {
        this.generateOTPToUser();
        if (firstSurvey) {
            this.selectedSurveyId = item;
        }
        else {
            this.selectedSurveyId = item['surveyId'];
        }
        this.openClaimModal(this.otpPopup);
        return;
    }
    onOTPConfirmClick() {
        this.otpForm.markAllAsTouched();
        if (this.otpForm.valid) {
            let otp = this.otpForm.value;
            this.isOtpInValid = false;
            this.confirmOTP();
        }
        else {
            this.isOtpInValid = true;
        }
    }
    confirmOTP() {
        // this.onStartSurveyClick();
        var _a;
        let otp = this.otpForm.value;
        let params = {
            contextId: localStorage.getItem('ssid'),
            otp: otp['input1'] + otp['input2'] + otp['input3'] + otp['input4'],
            otpVerified: true,
            bluenumber: (_a = this.loggedInUserDetails) === null || _a === void 0 ? void 0 : _a.blueNumber
        };
        this.sharedService.startLoader();
        this.dashboardService.verifyOTP(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            if (!res['isError']) {
                if (this.currentSurveyDetails['odkUrl']) {
                    this.router.navigateByUrl(`home/survey/odk/${this.selectedSurveyId}`);
                }
                else {
                    this.router.navigateByUrl(`home/survey/${this.selectedSurveyId}`);
                }
                this.closeOTPPopup();
            }
            else {
                this.sharedService.showToastMesaages('error', 'Invalid OTP');
            }
        }, (error) => {
            this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
        });
    }
    closeOTPPopup() {
        this.modalService.dismissAll();
        this.otpForm.reset();
    }
    openVideo() {
        window.open(this.languageSelected, '_blank');
    }
    onShareQRClick() {
        this.router.navigateByUrl('claims/qrinfo');
    }
    // ********** API to get the QRcode code survey is completed or not. **************
    checkQRCodeDetails() {
        let params = {
            QrCode: localStorage.getItem('sharedqrcode'),
        };
        this.sharedService.startLoader();
        this.claimsService.getSharedCodeDetails(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            console.log(res);
            if (res['result']) {
                if (res['result']['surveyCompletion']) {
                    // ******** If Survey Completion is true then User should not answer the survey ***************
                    this.sharedService.showToastMesaages('error', 'This share code has already been used by another user.');
                    return;
                }
                else {
                    this.checkFirstSurveyAnswered();
                }
            }
        });
    }
    getCurrencySymbol(countryCode) {
        return this.sharedService.getCurrencySymbol(countryCode);
    }
}
DashboardLandingPageComponent.ɵfac = function DashboardLandingPageComponent_Factory(t) { return new (t || DashboardLandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_3__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_claims_claims_service__WEBPACK_IMPORTED_MODULE_4__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_5__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModalConfig)); };
DashboardLandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardLandingPageComponent, selectors: [["app-dashboard-landing-page"]], viewQuery: function DashboardLandingPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.locationPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.otpPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.qualifMsgPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.bankPopup = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "pma"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-3"], [1, "welcomet-text"], [1, "head-txt"], [1, "text-primary"], ["class", "pay-icon pt-3", 4, "ngIf"], ["class", "p-3 mb-2", 4, "ngIf"], ["class", "p-3  nav-cards pt-0", 4, "ngIf"], ["content", ""], ["locationPopup", ""], ["otpPopup", ""], ["qualifMsgPopup", ""], ["bankPopup", ""], [1, "pay-icon", "pt-3"], [1, "d-flex", "flex-column", 3, "click"], ["src", "../../../assets/media/profile-icon.svg", "alt", "", "width", "35px", 1, "img-fluid", "ms-4"], [1, ""], [1, "d-flex", "flex-column"], ["src", "../../../../../assets/media/MMlogo-svg.svg", "alt", "", "width", "52px", 1, "img-fluid"], [1, "p-3", "mb-2"], [1, "row"], [1, "col-md-12", "text-center", "pma-buttons"], ["class", "d-grid justify-content-center align-items-center flex-column", 4, "ngIf"], [4, "ngIf"], [1, "d-grid", "justify-content-center", "align-items-center", "flex-column"], ["class", "mouse-pointer ml-auto d-flex align-items-center text-center myr-icon-survey", "style", "margin-left: 0 !important;", 3, "ngClass", "click", 4, "ngIf"], [1, "mouse-pointer", "ml-auto", "d-flex", "align-items-center", "text-center", "myr-icon-survey", 2, "margin-left", "0 !important", 3, "ngClass", "click"], [1, "text-wrap", "w-100", "text-truncate"], ["class", "start-survey-fs", 4, "ngIf"], [1, "start-survey-fs"], ["class", "pma-heading text-gray-1 mb-2", 4, "ngIf"], [1, "pma-heading", "text-gray-1", "mb-2"], [1, "btn", "btn-mm-p", "btn-block", "w-100", "orange-but", "mouse-notallowed", "btn-mm-p-disabled", 3, "click"], ["src", "../../../../../assets/media/MMlogo-svg.svg", "alt", "", "width", "140px", 1, "img-fluid"], ["class", "new-survey-msg", 4, "ngIf"], ["class", "text-gray-1 mb-2", 4, "ngIf"], ["class", "btn btn-mm-p btn-block w-100", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn btn-mm-p btn-block w-100  orange-but", 3, "ngClass", "click", 4, "ngIf"], ["class", "message-workcondition", 4, "ngIf"], ["class", "confir-des", 4, "ngIf"], ["class", "confir-des fs-5", "style", "line-height: 25px", 4, "ngIf"], [1, "message-workcondition"], [1, "confir-des"], [1, "confir-des", "fs-5", 2, "line-height", "25px"], [1, "new-survey-msg"], [1, "text-gray-1", "mb-2"], [1, "time-counter"], [1, "btn", "btn-mm-p", "btn-block", "w-100", 3, "ngClass", "click"], [1, "btn", "btn-mm-p", "btn-block", "w-100", "orange-but", 3, "ngClass", "click"], [1, "pconfir-des"], ["class", "pconfir-des", 4, "ngIf"], ["class", "btn btn-mm-p btn-block w-100 mb-2", 3, "ngClass", "click", 4, "ngIf"], [1, "btn", "btn-mm-p", "btn-block", "w-100", "mb-2", 3, "ngClass", "click"], [1, "p-3", "nav-cards", "pt-0"], ["class", "col-6", 3, "ngClass", 4, "ngIf"], ["class", "col-6", 4, "ngIf"], ["class", "col-6  q-mt-20", 4, "ngIf"], ["class", "q-mt-20", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "d-grid justify-content-center mt-3 flex-column", 4, "ngIf"], [1, "col-6", 3, "ngClass"], [1, "mm-card", 3, "click"], ["src", "../../../../../assets/media/flag-logo-icon.svg", "alt", "", 1, "img-fluid"], [1, "col-6"], ["src", "../../../../../assets/media/faq-icon.svg", "alt", "", 1, "img-fluid"], [1, "col-6", "q-mt-20"], [1, "mm-card", "q-bg-color", 3, "click"], ["src", "../../../assets/media/profile-img.svg", "alt", "", 1, "img-fluid"], ["src", "../../../../../assets/media/help-icon.svg", "alt", "", 1, "img-fluid"], [1, "q-mt-20"], [1, "btn", "btn-mm-p", "btn-block", "w-100", "mouse-pointer", 3, "click"], [1, "mt-4"], [1, "myr-des"], [1, "identif-des"], [1, "d-grid", "justify-content-center", "mt-3", "flex-column"], [1, "mouse-pointer", "ml-auto", "text-center", 2, "margin-left", "0 !important", 3, "ngClass", "click"], [1, "text-wrap", "text-truncate", "d-flex", "justify-content-center", "align-items-center"], [1, "mr-2"], ["class", "text-center mt-3 ", 4, "ngIf"], [1, "text-center", "mt-3"], [1, "payment-des-icon", "mouse-pointer", 3, "click"], [1, "text-wrap", "text-truncate", "d-flex", "align-items-center", "justify-content-center"], [1, "modal-header", "mr-2", "mt-0", "ml-4", "border-bottom-0"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", "shadow-none"], [1, "modal-body", "pt-0", "mt-0"], [1, "pb-0", "pr-4", "pl-4", "pt-0"], [1, "row", "mb-5"], [1, "mb-3"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "text-center"], [2, "color", "#0A4797"], [1, "text-center", "pma-buttons", "pb-4"], [1, "pma-buttons", "bottom-position", "text-center"], [1, "btn", "btn-lg", "btn-block", 2, "background", "#AD0C62", "color", "white", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "mouse-pointer", "myr-icon-my"], [1, "d-flex", "align-items-center", "justify-content-center"], ["class", "text-center mt-3", 4, "ngIf"], [1, "row", "mb-5", "q-mx-5"], [1, "modal-title"], [1, "modal-body", "pt-0"], [1, "msg-t", "mb-2"], [1, "msg-t", "mb-3"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "justify-content-center", "mb-3"], ["class", "form-group px-3 mb-0 pb-0", 4, "ngFor", "ngForOf"], ["class", "pb-3 ps-2 error-text text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-mm-p", "otp-btn", "mt-3", "mx-0"], [1, "form-group", "px-3", "mb-0", "pb-0"], ["type", "text", "maxlength", "1", 1, "form-control", "text-center", 3, "id", "formControlName", "keyup"], ["formRow", ""], [1, "pb-3", "ps-2", "error-text", "text-danger"], [1, "popup-succes-req"], [1, "btn", "btn-sm", "okay-btn-succ", 2, "background", "#AD0C62", "color", "white", 3, "click"]], template: function DashboardLandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " MillionMakers\u2122");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " by Bluenumber\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DashboardLandingPageComponent_div_8_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardLandingPageComponent_div_9_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardLandingPageComponent_section_10_Template, 5, 2, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DashboardLandingPageComponent_section_11_Template, 7, 3, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DashboardLandingPageComponent_section_12_Template, 10, 8, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DashboardLandingPageComponent_ng_template_13_Template, 24, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DashboardLandingPageComponent_ng_template_15_Template, 13, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DashboardLandingPageComponent_ng_template_17_Template, 16, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DashboardLandingPageComponent_ng_template_19_Template, 15, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, DashboardLandingPageComponent_ng_template_21_Template, 14, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.surveyType != ctx.globalConstants.verify && ctx.surveyType != ctx.globalConstants.feedback && ctx.isSidOrSSId != "ssid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSidOrSSId == "ssid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSidOrSSId == "ssid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSidOrSSId != "ssid");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.surveyType != ctx.globalConstants.verify);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName], styles: [".mouse-notallowed[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n\n.pma[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n  height: 100vh !important;\n}\n\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-heading[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 30px;\n  font-weight: 500;\n}\n\n.pma[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  color: #545454;\n}\n\n.pma[_ngcontent-%COMP%]   .pay-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .orange-but[_ngcontent-%COMP%] {\n  background-color: #EA600E;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 30px !important;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .orange-but[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-disabled[_ngcontent-%COMP%] {\n  background-color: #c4c4c4;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-disabled[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 16px;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-space[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .message-workcondition[_ngcontent-%COMP%] {\n  color: #AD0C62 !important;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .new-survey-msg[_ngcontent-%COMP%] {\n  color: #AD0C62 !important;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 30px;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .confir-des[_ngcontent-%COMP%] {\n  color: #545454;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: center;\n}\n\n.pma[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .myr-des[_ngcontent-%COMP%] {\n  color: #545454;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: center;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .identif-des[_ngcontent-%COMP%] {\n  color: #AD0C62 !important;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: center;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  padding: 19px 30px;\n  padding-top: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n  font-weight: 500;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]:hover, .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n\n.p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n\n.myr-icon[_ngcontent-%COMP%] {\n  background-color: #D9D9D9 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  margin-left: 103px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.myr-icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #8A8A8A;\n  margin-bottom: 0px;\n}\n\n.myr-icon[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  \n  margin-bottom: 0px;\n  text-align: center;\n}\n\n.myr-icon[_ngcontent-%COMP%]   .start-survey-fs[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n\n.myr-icon-my[_ngcontent-%COMP%] {\n  background-color: #D9D9D9 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.myr-icon-my[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #8A8A8A;\n  margin-bottom: 0px;\n}\n\n.myr-icon-my[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  \n  margin-bottom: 0px;\n  text-align: center;\n}\n\n.modal-dialog-border[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.time-counter[_ngcontent-%COMP%] {\n  color: #AD0C62;\n}\n\n.myr-icon-survey[_ngcontent-%COMP%] {\n  border-radius: 100px !important;\n  width: 150px !important;\n  height: 150px !important;\n}\n\n.below-icon-text[_ngcontent-%COMP%] {\n  color: #0A4797;\n  font-family: \"Lato\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n}\n\n.btn-opacity[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.payment-des-icon[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 14px;\n  text-align: center;\n  color: #0A4797;\n}\n\n.payment-succ-des[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #AD0C62;\n}\n\n.payment-des[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n\n.cont-cent[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.myr-icon-green[_ngcontent-%COMP%] {\n  background-color: #0CAD26 !important;\n  border-radius: 67px;\n  width: 110px;\n  height: 110px;\n  margin-left: 103px;\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.myr-icon-green[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #F3F2F2;\n  margin-bottom: 0px;\n}\n\n.myr-icon-green[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #F3F2F2;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  margin-bottom: 0px;\n  \n  text-align: center;\n}\n\n.myr-icon-green[_ngcontent-%COMP%]   .start-survey-fs[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n\n.verify[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  text-align: center;\n  color: #545454;\n}\n\n.verify[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n}\n\n.verify[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.successs[_ngcontent-%COMP%]   .big-font[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n  font-weight: 500;\n  color: #545454 !important;\n}\n\n.successs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  color: #545454;\n}\n\n.q-mx-5[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n}\n\n.q-bg-color[_ngcontent-%COMP%] {\n  background-color: #0A4797 !important;\n}\n\n.q-mt-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62 !important;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff !important;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n\n.btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.msg-t[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: #545454;\n}\n\n.msg-t[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 0.1px solid #545454;\n  border-radius: 0px;\n  color: #545454 !important;\n}\n\n.msg-t[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  background-color: #fff !important;\n}\n\n.msg-t[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.otp-btn[_ngcontent-%COMP%] {\n  padding: 10px 70px !important;\n}\n\n.welcomet-text[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-size: 20px;\n}\n\n.head-txt[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 600;\n}\n\n.iframe-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.m-t-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.popup-succes-req[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 23px;\n  text-align: center;\n}\n\n.okay-btn-succ[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  margin: 0 auto;\n  width: 160px !important;\n  padding: 15px 10px !important;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLDhCQUFBO0FBRkY7O0FBTUE7RUFDRSxpQ0FBQTtFQUNBLHdCQUFBO0FBSEY7O0FBS0U7RUFDRSxnQkNzQks7RURyQkwsY0NQUTtFRFFSLGVDYUc7QURoQlA7O0FBTUU7RUFDRSxlQ1VHO0VEVEgsaUJBQUE7RUFDQSxnQkFBQTtBQUpKOztBQVFFO0VBQ0UsY0NuQlE7QURhWjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQVBKOztBQVdJO0VBQ0UseUJDbkNTO0VEb0NULGVDakJDO0VEa0JELGVDZUk7RURkSixtQkNFRTtFRERGLFdDL0JLO0FEc0JYOztBQVdNO0VBQ0UsWUFBQTtBQVRSOztBQWFJO0VBQ0UseUJDOUNPO0VEK0NQLGVDekJDO0VEMEJELGVDR0k7RURGSixtQkNWRTtFRFdGLFdDM0NLO0VENENMLGdCQUFBO0VBQ0EsOEJBQUE7QUFYTjs7QUFjTTtFQUNFLFlBQUE7QUFaUjs7QUFnQkk7RUFDRSx5QkMxRE87RUQyRFAsZUN4Q0M7RUR5Q0QsZUNaSTtFRGFKLG1CQ3pCRTtFRDBCRixXQzFESztFRDJETCxnQkFBQTtFQUNBLDZCQUFBO0FBZE47O0FBaUJNO0VBQ0UsWUFBQTtBQWZSOztBQW9CSTtFQUNFLHlCQzVFZ0I7RUQ2RWhCLGVDeERDO0VEeURELGVDNUJJO0VENkJKLG1CQ3pDRTtFRDBDRixXQzFFSztFRDJFTCxnQkFBQTtFQUNBLDhCQUFBO0FBbEJOOztBQW9CTTtFQUNFLFlBQUE7QUFsQlI7O0FBc0JJO0VBQ0UseUJDdkZZO0VEd0ZaLGVDdEVDO0VEdUVELGVDMUNJO0VEMkNKLGdCQUFBO0FBcEJOOztBQXNCTTtFQUNFLFlBQUE7QUFwQlI7O0FBeUJNO0VBQ0UsbUJBQUE7QUF2QlI7O0FBMkJJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVDdkZDO0VEd0ZELGlCQUFBO0FBekJOOztBQTRCSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQzFGQztFRDJGRCxpQkFBQTtBQTFCTjs7QUE2Qkk7RUFDRSxjQ3JITTtFRHNITixnQkFBQTtFQUNBLGVDdkdDO0VEd0dELGlCQUFBO0VBQ0Esa0JBQUE7QUEzQk47O0FBaUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEvQk47O0FBcUNJO0VBQ0UsY0N4SU07RUR5SU4sZ0JBQUE7RUFDQSxlQzFIQztFRDJIRCxpQkFBQTtFQUNBLGtCQUFBO0FBbkNOOztBQXVDSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQ25JQztFRG9JRCxpQkFBQTtFQUNBLGtCQUFBO0FBckNOOztBQXlDSTs7RUFFRSx5QkNoS087RURpS1Asa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBdkNOOztBQXlDTTs7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUF0Q1I7O0FBeUNNOztFQUNFLGVDekpEO0VEMEpDLFdDdktHO0VEd0tILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXRDUjs7QUF5Q007O0VBQ0UsWUFBQTtBQXRDUjs7QUEwQ0k7RUFDRSxpQ0FBQTtBQXhDTjs7QUEwQ007RUFDRSx5QkFBQTtBQXhDUjs7QUE4Q0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQTNDRjs7QUE4Q0E7RUFDRSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBM0NGOztBQTZDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEzQ0o7O0FBOENFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUNKOztBQStDRTtFQUNFLDBCQUFBO0FBN0NKOztBQWlEQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBOUNGOztBQWdERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUE5Q0o7O0FBaURFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FBaERKOztBQXFERTtFQUNFLG1CQUFBO0FBbERKOztBQXNEQTtFQUNFLGNDaFJXO0FENk5iOztBQXVEQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQXBERjs7QUF5REE7RUFDRSxjQzlSYTtFRCtSYixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQy9RSztFRGdSTCxpQkFBQTtFQUNBLGtCQUFBO0FBdERGOztBQXlEQTtFQUNFLFlBQUE7QUF0REY7O0FBMkRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4REY7O0FBNkRBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDM1RXO0FEaVFiOztBQTZEQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBMURGOztBQThEQTtFQUNFLGdCQUFBO0FBM0RGOztBQStEQTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTVERjs7QUE4REU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNURKOztBQStERTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtBQTlESjs7QUFpRUU7RUFDRSwwQkFBQTtBQS9ESjs7QUFzRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQW5FSjs7QUFzRUU7RUFDRSx5QkM1WFM7RUQ2WFQsZUN2V0c7RUR3V0gsZUMzVU07RUQ0VU4sbUJDeFZJO0VEeVZKLFdDelhPO0VEMFhQLGdCQUFBO0VBQ0EsOEJBQUE7QUFwRUo7O0FBdUVJO0VBQ0UsWUFBQTtBQXJFTjs7QUE4RUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBR0EseUJBQUE7QUE3RUo7O0FBZ0ZFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOUVKOztBQW1GQTtFQUNFLGVBQUE7QUFoRkY7O0FBbUZBO0VBQ0Usb0NBQUE7QUFoRkY7O0FBbUZBO0VBQ0UsZ0JBQUE7QUFoRkY7O0FBb0ZBO0VBQ0Usb0NBQUE7RUFDQSxlQ3paSztFRDBaTCxlQzdYUTtFRDhYUixtQkMxWU07RUQyWU4sc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQWpGRjs7QUFvRkU7RUFDRSxZQUFBO0FBbEZKOztBQXVGRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDL2JRO0FEMldaOztBQXdGRTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF0Rko7O0FBeUZFO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtBQXZGSjs7QUEyRkU7RUFDRSxlQUFBO0FBekZKOztBQTZGQTtFQUNFLDZCQUFBO0FBMUZGOztBQTZGQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBMUZGOztBQTZGQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQTFGRjs7QUE4RkU7RUFDRSxtQkFBQTtBQTNGSjs7QUErRkE7RUFDRSxnQkFBQTtBQTVGRjs7QUErRkE7RUFDRSxjQ25mVztFRG9mWCxnQkFBQTtFQUNBLGVDN2RLO0VEOGRMLGlCQUFBO0VBQ0Esa0JBQUE7QUE1RkY7O0FBK0ZBO0VBQ0UseUJDM2ZXO0VENGZYLGVDdGVLO0VEdWVMLGVDMWNRO0VEMmNSLG1CQ3ZkTTtFRHdkTixXQ3hmUztFRHlmVCxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUE1RkYiLCJmaWxlIjoiZGFzaGJvYXJkLWxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBNQSBWYXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1vdXNlLW5vdGFsbG93ZWQge1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gTmF2aWdhdGlvblxyXG4ucG1hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGUgIWltcG9ydGFudDtcclxuICBoZWlnaHQgICAgICAgICAgOiAxMDB2aCAhaW1wb3J0YW50O1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTYwMDtcclxuICAgIGNvbG9yICAgICAgOiAkdGV4dC1ncmF5O1xyXG4gICAgZm9udC1zaXplICA6ICRmLTI0O1xyXG4gIH1cclxuXHJcbiAgLnBtYS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAkZi0yNTtcclxuICAgIGxpbmUtaGVpZ2h0ICAgOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IDUwMDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnbGF0bycgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC50ZXh0LWdyYXkge1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgfVxyXG5cclxuICAucGF5LWljb24ge1xyXG4gICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgfVxyXG5cclxuICAucG1hLWJ1dHRvbnMge1xyXG4gICAgLmJ0bi1wLXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgICBmb250LXNpemUgICAgICAgOiAkZi0xMjtcclxuICAgICAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXMgICA6ICRici0xMDtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJGJnLXdoaXRlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1tbS1wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICA6ICRmLTE2O1xyXG4gICAgICBjdXJzb3IgICAgICAgICAgOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAkYmctd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICAgICAgcGFkZGluZyAgICAgICAgIDogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5vcmFuZ2UtYnV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXN1Y2Nlc3M7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICA6ICRmLTE2O1xyXG4gICAgICBjdXJzb3IgICAgICAgICAgOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAkYmctd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICAgICAgcGFkZGluZyAgICAgICAgIDogMTBweCAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbW0tcC1kaXNhYmxlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5LWRpc2FibGVkO1xyXG4gICAgICBmb250LXNpemUgICAgICAgOiAkZi0xNjtcclxuICAgICAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXMgICA6ICRici0xMDtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJGJnLXdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgICAgIHBhZGRpbmcgICAgICAgICA6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWdyYXk7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICA6ICRmLTE2O1xyXG4gICAgICBjdXJzb3IgICAgICAgICAgOiAkcG9pbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQgICAgIDogNTAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zcGFjZSB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1lc3NhZ2Utd29ya2NvbmRpdGlvbiB7XHJcbiAgICAgIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemUgIDogJGYtMTg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXctc3VydmV5LW1zZyB7XHJcbiAgICAgIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemUgIDogJGYtMjU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25maXItZGVzIHtcclxuICAgICAgY29sb3IgICAgICA6ICR0ZXh0LWdyYXk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZSAgOiAkZi0xNTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNsaWVudCB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE5hdmlnYXRpb25cclxuICAubmF2LWNhcmRzIHtcclxuICAgIC5teXItZGVzIHtcclxuICAgICAgY29sb3IgICAgICA6ICR0ZXh0LWdyYXk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZSAgOiAkZi0xNTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pZGVudGlmLWRlcyB7XHJcbiAgICAgIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemUgIDogJGYtMTU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubW0tY2FyZCxcclxuICAgIC5ibi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgICAgIHBhZGRpbmcgICAgICAgICA6IDE5cHggMzBweDtcclxuICAgICAgcGFkZGluZy10b3AgICAgIDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1cyAgIDogMTVweDtcclxuICAgICAgY3Vyc29yICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemUgICAgIDogJGYtMTQ7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICRiZy13aGl0ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJuLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogJHRleHQtZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucC1zdWNjZXNzIHtcclxuICBoZWlnaHQgOiBhdXRvO1xyXG4gIHdpZHRoICA6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubXlyLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzICAgOiA2N3B4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGggICAgICAgICAgIDogMTEwcHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTAzcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplICA6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgIDogIzhBOEE4QTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yICAgICAgOiAjOEE4QThBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZSAgOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0LXN1cnZleS1mcyB7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5teXItaWNvbi1teSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDY3cHggIWltcG9ydGFudDtcclxuICB3aWR0aCAgICAgICAgICAgOiAxMTBweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAxMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemUgIDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgIGNvbG9yICAgICAgOiAjOEE4QThBO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgY29sb3IgICAgICA6ICM4QThBOEE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplICA6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZy1ib3JkZXIge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGltZS1jb3VudGVyIHtcclxuICBjb2xvcjogJG1tLXByaW1hcnk7XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMgZm9yIHN0YXJ0IHN1cnZleSBidXR0b24gXHJcbi5teXItaWNvbi1zdXJ2ZXkge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGggICAgICAgIDogMTUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQgICAgICAgOiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyB0aGlzIGlzIGZvciBzdXJ2ZXkgZW5kZWQgc2NyZWVuIHN0eWxlc1xyXG5cclxuLmJlbG93LWljb24tdGV4dCB7XHJcbiAgY29sb3IgICAgICA6ICR0ZXh0LXByaW1hcnk7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICBmb250LXN0eWxlIDogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplICA6ICRmLTEyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tb3BhY2l0eSB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5cclxuLy8gdGhpcyBpcyBmb3IgZ3JlZW4tY29sb3IgbXlyIGljb25cclxuLnBheW1lbnQtZGVzLWljb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplICA6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICBjb2xvciAgICAgIDogIzBBNDc5NztcclxufVxyXG5cclxuXHJcbi8vIHRoaXMgaXMgZm9yIG15ciBuZXcgY29tcG9uZW50IGFmdGVyIGNsaWNrIG9uIHRoZVxyXG4ucGF5bWVudC1zdWNjLWRlcyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemUgIDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeTtcclxufVxyXG5cclxuLnBheW1lbnQtZGVzIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZSAgOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgY29sb3IgICAgICA6ICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4uY29udC1jZW50IHtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG5cclxufVxyXG5cclxuLm15ci1pY29uLWdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMENBRDI2ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogNjdweDtcclxuICB3aWR0aCAgICAgICAgICAgOiAxMTBweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAxMTBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMDNweDtcclxuICBib3gtc2hhZG93ICAgICAgOiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplICA6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgIDogI0YzRjJGMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yICAgICAgOiAjRjNGMkYyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZSAgOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zdGFydC1zdXJ2ZXktZnMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gdGhpcyBpcyBmb3IgdmVyaWZ5IHNjcmVlbiBzdHlsZXNcclxuLnZlcmlmeSB7XHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplICA6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgIDogIzU0NTQ1NDtcclxuICB9XHJcblxyXG4gIC5idG4tbW0tcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6ICRmLTE2O1xyXG4gICAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAkYnItMTA7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAkYmctd2hpdGU7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAxMHB4IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIHRoaXMgaXMgZm9yIHN1Y2Nlc3Mgc2NyZWVuIGFmdGVyIHZlcmlmeVxyXG5cclxuLnN1Y2Nlc3NzIHtcclxuICAuYmlnLWZvbnQge1xyXG4gICAgZm9udC1zaXplICAgICA6ICRmLTQwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodCAgIDogNTAwO1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkdGV4dC1ncmF5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemUgIDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3IgICAgICA6ICM1NDU0NTQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnEtbXgtNSB7XHJcbiAgbWFyZ2luOiAwcHggNXB4O1xyXG59XHJcblxyXG4ucS1iZy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJpbWFyeSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucS1tdC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLy8gdGhpcyBpcyBmb3Igb3RwIGVudGVyIFxyXG4uYnRuLW1tLXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplICAgICAgIDogJGYtMTY7XHJcbiAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgcGFkZGluZyAgICAgICAgIDogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcbiAgLy8gbGluZS1oZWlnaHQ6IDE5cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxufVxyXG5cclxuLm1zZy10IHtcclxuICBoNiB7XHJcbiAgICBmb250LXNpemUgICAgIDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodCAgIDogMTlweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICB0ZXh0LWFsaWduICAgIDogY2VudGVyO1xyXG4gICAgY29sb3IgICAgICAgICA6ICR0ZXh0LWdyYXk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyICAgICAgIDogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICR0ZXh0LWdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvciAgICAgICAgOiAkdGV4dC1ncmF5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3cgICAgICA6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLmVycm9yLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm90cC1idG4ge1xyXG4gIHBhZGRpbmc6IDEwcHggNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2VsY29tZXQtdGV4dCB7XHJcbiAgY29sb3IgICAgOiAjOEE4QThBO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmhlYWQtdHh0IHtcclxuICBjb2xvciAgICAgIDogI0FEMEM2MjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaWZyYW1lLWNvbnRlbnQge1xyXG4gIGlmcmFtZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm0tdC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnBvcHVwLXN1Y2Nlcy1yZXEge1xyXG4gIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZSAgOiAkZi0xOTtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcblxyXG4ub2theS1idG4tc3VjYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgZm9udC1zaXplICAgICAgIDogJGYtMTY7XHJcbiAgY3Vyc29yICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gIGNvbG9yICAgICAgICAgICA6ICRiZy13aGl0ZTtcclxuICBmb250LXdlaWdodCAgICAgOiA0MDA7XHJcbiAgbWFyZ2luICAgICAgICAgIDogMCBhdXRvO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZyAgICAgICAgIDogMTVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQgICAgIDogMTlweDtcclxufSIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 2151:
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-layout/dashboard-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardLayoutComponent": () => (/* binding */ DashboardLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class DashboardLayoutComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // ******* This is added because when user enters the ssid, qid in home/info screen these details are not storing ************
        this.route.queryParamMap.subscribe((params) => {
            if (params['params']['ssid']) {
                localStorage.setItem('ssid', params['params']['ssid']);
            }
            if (params['params']['app']) {
                localStorage.setItem('app', params['params']['app']);
            }
            if (params['params']['connid']) {
                localStorage.setItem('connid', params['params']['connid']);
            }
            if (params['params']['sid']) {
                localStorage.setItem('sid', params['params']['sid']);
            }
            if (params['params']['type']) {
                localStorage.setItem('surveyType', params['params']['type']);
            }
            if (params['params']['qid']) {
                localStorage.setItem('qid', params['params']['qid']);
            }
            if (params['params']['sharedqrcode']) {
                localStorage.setItem('sharedqrcode', params['params']['sharedqrcode']);
            }
            if (params['params']['claim']) {
                localStorage.setItem('claim', params['params']['claim']);
            }
        });
    }
}
DashboardLayoutComponent.ɵfac = function DashboardLayoutComponent_Factory(t) { return new (t || DashboardLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute)); };
DashboardLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 1, vars: 0, template: function DashboardLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _acceptance_screen_acceptance_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acceptance-screen/acceptance-screen.component */ 9803);
/* harmony import */ var _dashboard_landing_page_dashboard_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-landing-page/dashboard-landing-page.component */ 2417);
/* harmony import */ var _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-layout/dashboard-layout.component */ 2151);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/language.component */ 2388);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages/messages.component */ 8121);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ 3297);
/* harmony import */ var _survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-questions/survey-questions.component */ 1438);
/* harmony import */ var _bank_ifsc_bank_ifsc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-ifsc/bank-ifsc.component */ 4913);
/* harmony import */ var _survey_odk_questions_survey_odk_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey-odk-questions/survey-odk-questions.component */ 7795);
/* harmony import */ var _upi_details_upi_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upi-details/upi-details.component */ 526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    {
        path: '',
        component: _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_2__.DashboardLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            },
            {
                path: 'info',
                component: _dashboard_landing_page_dashboard_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLandingPageComponent
            },
            {
                path: 'language',
                component: _language_language_component__WEBPACK_IMPORTED_MODULE_3__.LanguageComponent
            },
            {
                path: 'accept/:orgName',
                component: _acceptance_screen_acceptance_screen_component__WEBPACK_IMPORTED_MODULE_0__.AcceptanceScreenComponent
            },
            {
                path: 'survey/:id',
                component: _survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_6__.SurveyQuestionsComponent
            },
            {
                path: 'survey/odk/:id',
                component: _survey_odk_questions_survey_odk_questions_component__WEBPACK_IMPORTED_MODULE_8__.SurveyOdkQuestionsComponent
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent
            },
            {
                path: 'messages',
                component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__.MessagesComponent
            },
            {
                path: 'bank-details',
                component: _bank_ifsc_bank_ifsc_component__WEBPACK_IMPORTED_MODULE_7__.BankIfscComponent
            },
            {
                path: 'upi-details',
                component: _upi_details_upi_details_component__WEBPACK_IMPORTED_MODULE_9__.UpiDetailsComponent,
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            },
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-layout/dashboard-layout.component */ 2151);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/language.component */ 2388);
/* harmony import */ var _dashboard_landing_page_dashboard_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-landing-page/dashboard-landing-page.component */ 2417);
/* harmony import */ var _survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-questions/survey-questions.component */ 1438);
/* harmony import */ var _acceptance_screen_acceptance_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acceptance-screen/acceptance-screen.component */ 9803);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ 3297);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 8357);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ 8121);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _survey_odk_questions_survey_odk_questions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./survey-odk-questions/survey-odk-questions.component */ 7795);
/* harmony import */ var _pipes_blue_no_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/blue-no-format.pipe */ 1387);
/* harmony import */ var _pipes_number_fixed_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/number-fixed.pipe */ 4929);
/* harmony import */ var _bank_ifsc_bank_ifsc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bank-ifsc/bank-ifsc.component */ 4913);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _upi_details_upi_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upi-details/upi-details.component */ 526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);






















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__.GooglePlaceModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_layout_dashboard_layout_component__WEBPACK_IMPORTED_MODULE_1__.DashboardLayoutComponent,
        _language_language_component__WEBPACK_IMPORTED_MODULE_2__.LanguageComponent,
        _dashboard_landing_page_dashboard_landing_page_component__WEBPACK_IMPORTED_MODULE_3__.DashboardLandingPageComponent,
        _survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionsComponent,
        _acceptance_screen_acceptance_screen_component__WEBPACK_IMPORTED_MODULE_5__.AcceptanceScreenComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__.MessagesComponent,
        _survey_odk_questions_survey_odk_questions_component__WEBPACK_IMPORTED_MODULE_10__.SurveyOdkQuestionsComponent,
        _pipes_blue_no_format_pipe__WEBPACK_IMPORTED_MODULE_11__.BlueNoFormatPipe,
        _pipes_number_fixed_pipe__WEBPACK_IMPORTED_MODULE_12__.NumberFixedPipe,
        _bank_ifsc_bank_ifsc_component__WEBPACK_IMPORTED_MODULE_13__.BankIfscComponent,
        _upi_details_upi_details_component__WEBPACK_IMPORTED_MODULE_14__.UpiDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_8__.GooglePlaceModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBarModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule] }); })();


/***/ }),

/***/ 2388:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/language/language.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);



class LanguageComponent {
  constructor(router, sharedService) {
    this.router = router;
    this.sharedService = sharedService;
    this.languageName = '';
  }

  ngOnInit() {
    // commented to show language page for all the surveys
    // // ********** Language page should not be visisble if Survey is claime survey **************
    // if (localStorage.getItem('surveyType') == ConfigConstants.shareQrCode && localStorage.getItem('claim') == ConfigConstants.eachSurvey) {
    //   this.router.navigateByUrl('help/rules');
    //   return;
    // }
    const selectedLanguage = this.getDefaultSelectedLanguage();
    const defaultLanguage = this.getLanguageName(selectedLanguage ? selectedLanguage : 'en');
    this.checkForLanguageDisplay();
    setTimeout(() => {
      const select = document.querySelector('select.goog-te-combo');
      const lang = document.getElementById('language-name');
      if (lang) lang.innerHTML = defaultLanguage;

      if (select) {
        select.addEventListener('change', event => {
          const selectedLanguage = event.target.value;
          console.log('Language changed:', selectedLanguage);
          if (lang) lang.innerHTML = this.getLanguageName(selectedLanguage);
        });
      }
    }, 3000);
  }

  onNextClick() {
    this.sharedService.isLanguageChanged = true;
    let appId = localStorage.getItem('app'); // mmind -> FARMER
    // if (appId == 'mmind') {
    //   this.router.navigateByUrl('help/agreement');
    // } else {

    this.router.navigateByUrl('help/rules'); // }
  }

  checkForLanguageDisplay() {
    if (this.router.url.includes('language')) {
      var test = document.getElementById("language-script");

      if (!test) {
        this.loadExternalScript('https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      }
    } else {
      this.removeElement();
    }
  }

  loadExternalScript(url) {
    const body = document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.id = 'language-script';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  removeElement() {
    var test = document.getElementById("language-script");

    if (test) {
      test.remove();
    }
  }

  ngOnDestroy() {
    this.removeElement();
  } // function to get default selected language


  getDefaultSelectedLanguage() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('googtrans'));

    if (cookie) {
      const parts = cookie.split('/');
      const lang = parts[parts.length - 1]; //const [_, lang] = cookie.split('/');

      return lang;
    }

    return null;
  }

  getLanguageName(langCode) {
    const languageNames = {
      'af': 'Afrikaans',
      'sq': 'Albanian',
      'am': 'Amharic',
      'ar': 'Arabic',
      'hy': 'Armenian',
      'az': 'Azerbaijani',
      'eu': 'Basque',
      'be': 'Belarusian',
      'bn': 'Bengali',
      'bs': 'Bosnian',
      'bg': 'Bulgarian',
      'ca': 'Catalan',
      'ceb': 'Cebuano',
      'ny': 'Chichewa',
      'zh-CN': 'Chinese (Simplified)',
      'zh-TW': 'Chinese (Traditional)',
      'co': 'Corsican',
      'hr': 'Croatian',
      'cs': 'Czech',
      'da': 'Danish',
      'nl': 'Dutch',
      'en': 'English',
      'eo': 'Esperanto',
      'et': 'Estonian',
      'tl': 'Filipino',
      'fi': 'Finnish',
      'fr': 'French',
      'fy': 'Frisian',
      'gl': 'Galician',
      'ka': 'Georgian',
      'de': 'German',
      'el': 'Greek',
      'gu': 'Gujarati',
      'ht': 'Haitian Creole',
      'ha': 'Hausa',
      'haw': 'Hawaiian',
      'iw': 'Hebrew',
      'hi': 'Hindi',
      'hmn': 'Hmong',
      'hu': 'Hungarian',
      'is': 'Icelandic',
      'ig': 'Igbo',
      'id': 'Indonesian',
      'ga': 'Irish',
      'it': 'Italian',
      'ja': 'Japanese',
      'jw': 'Javanese',
      'kn': 'Kannada',
      'kk': 'Kazakh',
      'km': 'Khmer',
      'rw': 'Kinyarwanda',
      'ko': 'Korean',
      'ku': 'Kurdish (Kurmanji)',
      'ky': 'Kyrgyz',
      'lo': 'Lao',
      'la': 'Latin',
      'lv': 'Latvian',
      'lt': 'Lithuanian',
      'lb': 'Luxembourgish',
      'mk': 'Macedonian',
      'mg': 'Malagasy',
      'ms': 'Malay',
      'ml': 'Malayalam',
      'mt': 'Maltese',
      'mi': 'Maori',
      'mr': 'Marathi',
      'mn': 'Mongolian',
      'my': 'Myanmar (Burmese)',
      'ne': 'Nepali',
      'no': 'Norwegian',
      'or': 'Odia (Oriya)',
      'ps': 'Pashto',
      'fa': 'Persian',
      'pl': 'Polish',
      'pt': 'Portuguese',
      'pa': 'Punjabi',
      'ro': 'Romanian',
      'ru': 'Russian',
      'sm': 'Samoan',
      'gd': 'Scots Gaelic',
      'sr': 'Serbian',
      'st': 'Sesotho',
      'sn': 'Shona',
      'sd': 'Sindhi',
      'si': 'Sinhala',
      'sk': 'Slovak',
      'sl': 'Slovenian',
      'so': 'Somali',
      'es': 'Spanish',
      'su': 'Sundanese',
      'sw': 'Swahili',
      'sv': 'Swedish',
      'tg': 'Tajik',
      'ta': 'Tamil',
      'te': 'Telugu',
      'th': 'Thai',
      'tr': 'Turkish',
      'uk': 'Ukrainian',
      'ur': 'Urdu',
      'ug': 'Uyghur',
      'uz': 'Uzbek',
      'vi': 'Vietnamese',
      'cy': 'Welsh',
      'xh': 'Xhosa',
      'yi': 'Yiddish',
      'yo': 'Yoruba',
      'zu': 'Zulu'
    };
    return languageNames[langCode] || 'Unknown';
  }

}

LanguageComponent.ɵfac = function LanguageComponent_Factory(t) {
  return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
};

LanguageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LanguageComponent,
  selectors: [["app-language"]],
  decls: 22,
  vars: 0,
  consts: [[1, "pdv-manager", "lang-enable"], [1, "container", "language"], [1, "row", "pb-0", "px-4"], [1, "col-md-12"], [1, "mb-3"], ["id", "language-name"], [1, "muted-text", "mb-4"], ["id", "google_translate_element"], [1, "container", "bottom-fixed"], [1, "row"], [1, "col-12"], [1, "row", "px-4"], [1, "col-12", "pma-buttons"], [1, "btn", "btn-mm-p-lan", "btn-block", 3, "click"]],
  template: function LanguageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "The language is now:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " To CHANGE language ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " please select another (below) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div")(18, "div", 11)(19, "div", 12)(20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageComponent_Template_button_click_20_listener() {
        return ctx.onNextClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  styles: [".pdv-manager[_ngcontent-%COMP%] {\n  z-index: 999999999999;\n  position: fixed;\n  background-color: #fff;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n\n.muted-text[_ngcontent-%COMP%] {\n  color: #545454;\n}\n\n.language[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF0000;\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.language[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FF0000;\n  font-size: 36px;\n  font-weight: 600;\n  line-height: 43px;\n}\n\n.language[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #545454;\n  line-height: 19px;\n}\n\n.pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-lan[_ngcontent-%COMP%] {\n  background-color: #621C43;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n\n.pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-lan[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.bottom-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  bottom: 30px;\n}\n\n.bottom-fixed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #545454;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.container.language[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 38px;\n}\n\n.f-16[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkNHUztFREZULE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7QUFGRjs7QUFLQTtFQUNFLGNDUFU7QURLWjs7QUFPRTtFQUNFLGVDT0c7RUROSCxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEo7O0FBUUU7RUFDRSxlQ1ZHO0VEV0gsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFXRTtFQUNFLHlCQ3ZDVztFRHlDWCxlQ3JCRztFRHNCSCxlQ09NO0VETk4sbUJDTkk7RURPSixXQ3ZDTztFRHdDUCxnQkFBQTtFQUNBLDhCQUFBO0VBRUEsV0FBQTtBQVZKOztBQVlJO0VBQ0UsWUFBQTtBQVZOOztBQWVBO0VBQ0UsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFaRjs7QUFjRTtFQUNFLGNDNURRO0VENkRSLGVDOUNHO0VEK0NILGdCQUFBO0FBWko7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsMEJBQUE7QUFiRiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBNQSBWYXJpYWJsZXNcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnBkdi1tYW5hZ2VyIHtcclxuICB6LWluZGV4ICAgICAgICAgOiA5OTk5OTk5OTk5OTk7XHJcbiAgcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLXdoaXRlO1xyXG4gIGxlZnQgICAgICAgICAgICA6IDA7XHJcbiAgcmlnaHQgICAgICAgICAgIDogMDtcclxuICBib3R0b20gICAgICAgICAgOiAwO1xyXG4gIHRvcCAgICAgICAgICAgICA6IDA7XHJcbn1cclxuXHJcbi5tdXRlZC10ZXh0IHtcclxuICBjb2xvcjogJHRleHQtZ3JheTtcclxufVxyXG5cclxuLy8gTGFuZ3VhZ2VcclxuLmxhbmd1YWdlIHtcclxuICBoNiB7XHJcbiAgICBmb250LXNpemUgIDogJGYtMjA7XHJcbiAgICBjb2xvciAgICAgIDogI0ZGMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yICAgICAgOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplICA6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZi0xNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvciAgICAgIDogIzU0NTQ1NDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBtYS1idXR0b25zIHtcclxuICAuYnRuLW1tLXAtbGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgICA6ICRtbS1zZWNvbmRhcnk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICA6ICRmLTE2O1xyXG4gICAgY3Vyc29yICAgICAgICAgICAgIDogJHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgOiAkYnItMTA7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgOiAkYmctd2hpdGU7XHJcbiAgICBmb250LXdlaWdodCAgICAgICAgOiA0MDA7XHJcbiAgICBwYWRkaW5nICAgICAgICAgICAgOiAxMHB4IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b20tZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGxlZnQgICAgOiAwO1xyXG4gIHJpZ2h0ICAgOiAwO1xyXG4gIGJvdHRvbSAgOiAzMHB4O1xyXG5cclxuICBwIHtcclxuICAgIGNvbG9yICAgICAgOiAkdGV4dC1ncmF5O1xyXG4gICAgZm9udC1zaXplICA6ICRmLTE0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIubGFuZ3VhZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3AgICAgIDogMzhweDtcclxufVxyXG5cclxuLmYtMTYge1xyXG4gIGZvbnQtc2l6ZTogJGYtMTYgIWltcG9ydGFudDtcclxufSIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 8121:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/messages/messages.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/constants */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ 1413);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);











const _c0 = ["content"];
function MessagesComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MessagesComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Next survey available in: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.messageObj == null ? null : ctx_r6.messageObj.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.timeCounter, "");
} }
function MessagesComponent_div_0_h1_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.messageObj == null ? null : ctx_r7.messageObj.message, " ");
} }
function MessagesComponent_div_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_0_div_14_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r12.onBackClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_0_div_14_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r14.onDoneClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MessagesComponent_div_0_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_0_div_14_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r15.onAcceptClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Agree & Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_0_div_14_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r17.onRejectClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MessagesComponent_div_0_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_0_div_14_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r18.onBackClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Go to Home page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function MessagesComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MessagesComponent_div_0_div_14_div_1_Template, 5, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MessagesComponent_div_0_div_14_div_2_Template, 5, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MessagesComponent_div_0_div_14_div_3_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.messageObj == null ? null : ctx_r8.messageObj.showProceed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.messageObj == null ? null : ctx_r8.messageObj.showAcceptReject);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r8.messageObj == null ? null : ctx_r8.messageObj.showAcceptReject) && !(ctx_r8.messageObj == null ? null : ctx_r8.messageObj.showProceed));
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "form", 5)(2, "div", 6)(3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12)(10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MessagesComponent_div_0_div_11_Template, 4, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MessagesComponent_div_0_div_12_Template, 8, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MessagesComponent_div_0_h1_13_Template, 2, 1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MessagesComponent_div_0_div_14_Template, 4, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r0.messageObj == null ? null : ctx_r0.messageObj.showAcceptReject) && !(ctx_r0.messageObj == null ? null : ctx_r0.messageObj.showProceed) && !(ctx_r0.messageObj == null ? null : ctx_r0.messageObj.isMsgFromInterceptor));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.surveyState == 4 && ctx_r0.isFutureDaySurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.messageObj == null ? null : ctx_r0.messageObj.showProceed) && !(ctx_r0.messageObj == null ? null : ctx_r0.messageObj.showAcceptReject));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.surveyType != "verify");
} }
function MessagesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "You have completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " your Registration! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "You can claim your payment by clicking $ on the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " home page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.goToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} }
function MessagesComponent_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r22.messageObj == null ? null : ctx_r22.messageObj.message, " ");
} }
function MessagesComponent_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You have requested to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " participate in anonymous paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " surveys about your working ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessagesComponent_div_2_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "If you qualify, once you click start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Survey on the home page, you will receive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " a 4-digit code via SMS to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " access the Million Makers survey ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessagesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MessagesComponent_div_2_p_5_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MessagesComponent_div_2_p_6_Template, 8, 0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MessagesComponent_div_2_p_7_Template, 9, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.goToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Go to Home page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.messageObj == null ? null : ctx_r2.messageObj.isSSID) == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.messageObj == null ? null : ctx_r2.messageObj.isSSID) != "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r2.messageObj == null ? null : ctx_r2.messageObj.isSSID) != "ssid");
} }
function MessagesComponent_ng_template_3_div_4_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r30.messageObj == null ? null : ctx_r30.messageObj.message, " ");
} }
function MessagesComponent_ng_template_3_div_4_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You have requested to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " participate in anonymous paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " surveys about your working ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " conditions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessagesComponent_ng_template_3_div_4_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "If you qualify you will receive an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " SMS within 72 hours. It will contain a link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " so you can start the surveys.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MessagesComponent_ng_template_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "div", 37)(2, "div", 38)(3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MessagesComponent_ng_template_3_div_4_p_4_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MessagesComponent_ng_template_3_div_4_p_5_Template, 8, 0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MessagesComponent_ng_template_3_div_4_p_6_Template, 6, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_ng_template_3_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r33.goToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Okay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r29.messageObj == null ? null : ctx_r29.messageObj.isSSID) == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r29.messageObj == null ? null : ctx_r29.messageObj.isSSID) != "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r29.messageObj == null ? null : ctx_r29.messageObj.isSSID) != "ssid");
} }
function MessagesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MessagesComponent_ng_template_3_div_4_Template, 9, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 51)(6, "div", 34)(7, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessagesComponent_ng_template_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.onOKay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.surveyMsgType == "workerRequestSID");
} }
class MessagesComponent {
    constructor(sharedService, router, dashboardService, surveyService, modalService, config) {
        this.sharedService = sharedService;
        this.router = router;
        this.dashboardService = dashboardService;
        this.surveyService = surveyService;
        this.modalService = modalService;
        this.isAnswerNextSurvey = false;
        this.surveyMsgType = '';
        this.nextSurveyTimeLeft = '';
        // msg: any;
        this.isFirstSurveyAnswerd = false;
        this.isSidSsidValid = true;
        this.surveyDetails = {};
        this.nextSurveyDetails = {};
        this.surveyId = '';
        this.isAllSurveysAnswered = false;
        this.lastSurveyId = '';
        this.firstSurveyId = '';
        this.currentSurveyDay = 1;
        this.maxResponseCount = 0;
        this.isFutureDaySurvey = false;
        this.surveyType = '';
        this.claimType = '';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        config.backdrop = 'static';
        config.keyboard = false;
        // this.subs.add(this.sharedService
        //   .remainingTimeForSurvey
        //   .subscribe((time) => {
        //     this.nextSurveyTimeLeft = time;
        //   }))
    }
    ngOnInit() {
        let bNumber = localStorage.getItem('personBluenumber');
        this.surveyMsgs = JSON.parse(localStorage.getItem('surveyMessages'));
        let appId = localStorage.getItem('app');
        this.surveyType = localStorage.getItem('surveyType');
        this.claimType = localStorage.getItem('claim');
        let sid = localStorage.getItem('sid');
        let ssid = localStorage.getItem('ssid');
        let isSidOrSSId = '';
        if (sid != '' && sid != 'null' && sid != null) {
            isSidOrSSId = 'sid';
        }
        if (ssid != '' && ssid != 'null' && ssid != null) {
            isSidOrSSId = 'ssid';
        }
        console.log(this.sharedService.successErrorMsg);
        this.messageObj = this.sharedService.successErrorMsg;
        if (this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.feedback) {
            if (this.sharedService.successErrorMsg['message'] != '') {
                this.router.navigateByUrl('claims/list');
                return;
            }
        }
        // ********* Redirect to claims screen, if it is a claim survey ************
        // ************ Redirect to claims page if survey Type is empty also for now *****************
        if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey) {
            this.router.navigateByUrl('claims/list');
            return;
        }
        if (appId == 'mmind') {
            this.surveyMsgType = 'farmerRegistration';
            this.router.navigateByUrl('claims/list');
            return;
        }
        if (this.surveyType == 'request' && isSidOrSSId == 'sid') {
            this.surveyMsgType = 'workerRequestSID';
            this.messageObj['isSSID'] = isSidOrSSId;
            return;
        }
        else {
            if (this.sharedService.successErrorMsg['isRequestSurvey']) {
                this.surveyMsgType = 'workerRequestSID';
                this.messageObj['message'] = this.surveyMsgs['qualificationMessage'];
                this.messageObj['isSSID'] = isSidOrSSId;
                return;
            }
            this.surveyMsgType = 'surveySSID';
            if (this.sharedService.successErrorMsg['message'] == "AlreadyAnswered") {
                this.messageObj['message'] = "To answer this survey you must connect to Million Makers" + bNumber;
            }
            else if (this.sharedService.successErrorMsg['message'] == "Expired") {
                this.messageObj['message'] = "The survey you are going to answer is already expired";
            }
            else if (this.sharedService.successErrorMsg['message'] == "ReachedMaxParticipants") {
                this.messageObj['message'] = "Reached max number of participants.";
            }
            else if (this.sharedService.successErrorMsg['message'] == "NotFound") {
                this.messageObj['message'] = "Survey not found";
            }
            else if (this.sharedService.successErrorMsg['message'] == "AnswerNextSurvey") {
                this.isAnswerNextSurvey = true;
                this.messageObj['message'] = "Thank you for Registration. Please continue...";
            }
            else {
                this.messageObj['message'] = this.sharedService.successErrorMsg['message'];
            }
        }
        if (this.messageObj['message'] == '') {
            // this.router.navigateByUrl('/home');
        }
        if (this.sharedService.successErrorMsg['messageHeading'] == 'Survey Set Completed') {
            this.router.navigateByUrl('claims/list');
            return;
        }
        // if (this.surveyType != 'verify') {
        //   this.fetchSurveyInfo();
        // }
        if (this.surveyMsgType == 'workerRequestSID') {
            console.log('workerRequestSID');
            this.messageObj['message'] = this.surveyMsgs['qualificationMessage'];
            this.modalService.open(this.content, {
                size: 'sm modal-dialog-centered',
                windowClass: 'modal-dialog-border'
            });
        }
    }
    onOKay() {
        this.modalService.dismissAll();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    fetchSurveyInfo() {
        this.msg = "";
        this.isFirstSurveyAnswerd = false;
        this.sharedService.startLoader();
        if (localStorage.getItem('sid') != '' && localStorage.getItem('sid') != null && localStorage.getItem('sid') != 'null') {
            this.fetchSurveySIDDetails();
        }
        else if (localStorage.getItem('ssid') == null || localStorage.getItem('ssid') == 'null') {
            this.surveyState = 5; //When ssid is null
            this.msg = "Please scan the QR code again.";
            this.isSidSsidValid = false;
            return;
        }
        else {
            this.fetchSurveySetSSIDDetails();
        }
    }
    // ********** Method to fetch the Survey Info based on SID  ************************
    fetchSurveySIDDetails() {
        this.surveyService.getSurveyDetailsbyQRCode(localStorage.getItem('sid')).subscribe(result => {
            this.surveyDetails = result['result'];
            this.surveyId = result['result']['id'];
            let now = new Date(); // todays date
            now.setHours(0, 0, 0, 0);
            let pend = new Date(this.surveyDetails['endDate']);
            pend = new Date(pend.getTime() + pend.getTimezoneOffset() * 60000);
            console.log("DATE: ", pend);
            let pduration = pend - now;
            // *********** If time diff is -ve. Survey Time is completed *******************
            if (pduration < 0) {
                this.surveyState = 2;
                this.msg = "Survey program ended. We will notify when next program available.";
                return;
            }
            let end = new Date(this.surveyDetails['endDate']);
            // let end: any = new Date(this.surveyDetails['startDate']);
            end = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
            end.setHours(0, 0, 0, 0);
            let duration = end - now;
            // *********** If time diff is 0. Survey is Available & it is current day survey *******************
            if (duration == 0) {
                //enable start survey buton
                this.surveyState = 3;
                this.msg = "Please complete your survey for today";
            }
            // *********** If time diff is >0. Timer will be run till next survey time *******************
            else if (duration > 0) {
                this.surveyState = 4;
                this.showCounter(this.surveyDetails['startDate']);
            }
        }, error => {
            this.fetchSurveyAmountDetails();
            if (error.error.responseException.exceptionMessage.substring(0, 15) == "AlreadyAnswered") {
                this.surveyState = 5; //When ssid is null
                this.msg = "Survey already answered.";
                this.isAllSurveysAnswered = true;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else if (error.error.responseException.exceptionMessage.includes('ReachedMaxParticipants')) {
                this.surveyState = 6;
                this.msg = "Survey reached maximum no. of participants.";
                this.isAllSurveysAnswered = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else {
                this.surveyState = 5; //When sid is null
                this.msg = "Survey not found. Please scan the QR code again.";
                this.isAllSurveysAnswered = false;
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
        });
    }
    // ******** To fetch the Survey Details if SID is already answered *****************
    fetchSurveyAmountDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyDetailsResponseForAnsweredQRCode(localStorage.getItem('sid')).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.surveyDetails = res['result'];
            }
        });
    }
    // ********** Timer will be displayed for Daily Survey to show when next survey will be available ****************
    showCounter(suveydate) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(1000).subscribe(val => {
            let now;
            let end;
            let days = 0, hours = 0, minutes = 0, seconds = 0;
            now = new Date(); // todays date
            end = new Date(suveydate);
            end.setHours(0, 0, 0, 0);
            let duration = end - now;
            if (duration <= 0) {
                this.clearCounter();
            }
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = hours + 'hrs ' + minutes +
                'min ' + seconds + 'secs';
        });
    }
    // *********** Method to clear the Timer **********************
    clearCounter() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.surveyState = 3;
        this.msg = "Please complete your survey for today";
    }
    // ********** Method to fetch the Survey Info based on SSID  ************************
    fetchSurveySetSSIDDetails() {
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe(res => {
            this.sharedService.stopLoader();
            this.surveyDetails = res['result'];
            localStorage.setItem('surveySetId', this.surveyDetails['id']);
            if (this.surveyDetails == null || this.surveyDetails['surveyGroupItems'].length <= 0) {
                this.surveyState = 1;
                this.msg = "Surveys are not available";
                return;
            }
            // ************** Check all surveys is answered or not ***************
            let count = 0;
            this.surveyDetails['surveyGroupItems'].forEach((item) => {
                this.surveyDetails['currency'] = item['currency'];
                this.surveyDetails['paymentOffered'] = item['paymentOffered'];
                if (item['isAnswered']) {
                    count++;
                }
            });
            if (count == this.surveyDetails['surveyGroupItems'].length && count != 0) {
                this.isAllSurveysAnswered = true;
                return;
            }
            else {
                this.isAllSurveysAnswered = false;
            }
            let now = new Date(); // todays date
            now.setHours(0, 0, 0, 0);
            let pend = new Date(this.surveyDetails['endDate']);
            pend = new Date(pend.getTime() + pend.getTimezoneOffset() * 60000);
            console.log("DATE: ", pend);
            let pduration = pend - now;
            console.log(pduration);
            if (pduration < 0) {
                this.surveyState = 2;
                this.msg = "Survey program ended. We will notify when next program available.";
                this.sharedService.successErrorMsg['message'] = "Thanks for completing the survey set.";
                return;
            }
            if (pduration == 0) {
                let length = this.surveyDetails['surveyGroupItems'].length;
                if (this.surveyDetails['surveyGroupItems'][length - 1]['isAnswered'] == true) {
                    this.surveyState = 2;
                    this.msg = "Survey program ended. We will notify when next program available.";
                    return;
                }
            }
            this.sortSuveys();
            // ********** Store 1st, next, last Survey Details ***************
            let len = this.surveyDetails['surveyGroupItems'].length;
            if (len > 0) {
                this.lastSurveyId = this.surveyDetails['surveyGroupItems'][len - 1]['surveyId'];
            }
            this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
            // ********* Check for Hourly or Daily Survey *********************
            if (this.surveyDetails['type'] != 'Hourly') {
                this.dailySurveySSIDDetails(now);
            }
            else {
                let today = new Date();
                today = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
                let start = new Date(this.surveyDetails['startDate']);
                start = new Date(start.getTime() + start.getTimezoneOffset() * 60000);
                let end = new Date(this.surveyDetails['endDate']);
                end = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
                let firstSurveyStartDate = new Date(this.surveyDetails['surveyGroupItems'][0]['startDate']);
                firstSurveyStartDate = new Date(firstSurveyStartDate.getTime() + firstSurveyStartDate.getTimezoneOffset() * 60000);
                firstSurveyStartDate.setHours(0, 0, 0, 0);
                if ((firstSurveyStartDate - now) > 0) {
                    this.isFutureDaySurvey = true;
                }
                this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
                this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
                this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
                for (let i = 0; i < this.surveyDetails['surveyGroupItems'].length; i++) {
                    let item = this.surveyDetails['surveyGroupItems'][i];
                    this.currentSurveyDay = i + 1;
                    if (!item['isAnswered']) {
                        let duration = start - today;
                        this.surveyId = item['surveyId'];
                        if (duration == 0) {
                            //enable start survey buton
                            this.surveyState = 3;
                            this.msg = "Please complete your survey for today";
                            break;
                        }
                        else {
                            let a = end - today;
                            if (a >= 0) {
                                let previousItem;
                                let prevTime;
                                let mins = this.surveyDetails['minutesDifference'];
                                let newTime;
                                previousItem = this.surveyDetails['surveyGroupItems'][i - 1];
                                /* ********** In Hourly Survey, if previos Survey is answered then calculate the time gap
                                 for next Survey based on previous Survey Answered Time ******************* */
                                if (previousItem && previousItem['answeredTime']) {
                                    prevTime = new Date(previousItem['answeredTime']);
                                    prevTime = new Date(prevTime.getTime() + prevTime.getTimezoneOffset() * 60000);
                                    newTime = new Date(prevTime.getTime() + (Number(mins) * 60 * 1000));
                                    let diff = newTime - today;
                                    if (diff <= 0) {
                                        this.surveyState = 3;
                                        this.msg = "Please complete your survey for today";
                                    }
                                    else if (diff > 0) {
                                        this.surveyState = 4;
                                        this.showHourlySurveyCounter(newTime);
                                        break;
                                    }
                                }
                                else {
                                    /* ********* If nor Survey is answered and there is time available,
                                    First Survey will be enabled ******************* */
                                    this.surveyState = 3;
                                    this.msg = "Please complete your survey for today";
                                    this.nextSurveyDetails = item;
                                }
                                break;
                            }
                        }
                        return;
                    }
                    else {
                        this.nextSurveyDetails = this.surveyDetails['surveyGroupItems'][i + 1];
                    }
                }
            }
        }, error => {
            if (error.error.responseException.exceptionMessage == "Survey is not found for QR:null") {
                this.surveyState = 5; //When ssid is null
                this.msg = "Please scan the QR code again.";
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
            else {
                this.surveyState = 5; //When ssid is null
                this.msg = "Survey not found. Please scan the QR code again.";
                this.isSidSsidValid = false;
                this.router.navigateByUrl(`/home`);
                return;
            }
        });
    }
    sortSuveys() {
        return this.surveyDetails['surveyGroupItems'].sort((a, b) => {
            return new Date(a['startDate']) - new Date(b['startDate']);
        });
    }
    // ********** If Survey Type is Daily this method is triggered ****************
    dailySurveySSIDDetails(now) {
        this.surveyDetails['surveyGroupItems'].forEach((item, index) => {
            let today = new Date();
            let surveyDate = new Date(item['startDate']);
            surveyDate = new Date(surveyDate.getTime() + surveyDate.getTimezoneOffset() * 60000);
            if (today.getDate() == surveyDate.getDate()) {
                if (today.getMonth() == surveyDate.getMonth() && today.getFullYear() == surveyDate.getFullYear()) {
                    if (index <= 2) {
                        this.getTotalSurveyResponseCount();
                    }
                    this.currentSurveyDay = index + 1;
                    //  If 1st survey is answered next one will be considered *************
                    if (item['isAnswered']) {
                        if (this.surveyDetails['surveyGroupItems'][index + 1]) {
                            let surveyDate = new Date(this.surveyDetails['surveyGroupItems'][index + 1]['startDate']);
                            surveyDate = new Date(surveyDate.getTime() + surveyDate.getTimezoneOffset() * 60000);
                            if (today.getDate() < surveyDate.getDate() && !this.surveyDetails['surveyGroupItems'][index + 1]['isAnswered']) {
                                this.nextSurveyDetails = this.surveyDetails['surveyGroupItems'][index + 1];
                            }
                        }
                    }
                    else {
                        this.nextSurveyDetails = item;
                    }
                }
            }
        });
        let firstSurveyStartDate = new Date(this.surveyDetails['surveyGroupItems'][0]['startDate']);
        firstSurveyStartDate = new Date(firstSurveyStartDate.getTime() + firstSurveyStartDate.getTimezoneOffset() * 60000);
        firstSurveyStartDate.setHours(0, 0, 0, 0);
        if ((firstSurveyStartDate - now) > 0) {
            this.isFutureDaySurvey = true;
        }
        this.isFirstSurveyAnswerd = this.surveyDetails['surveyGroupItems'][0]['isAnswered'];
        this.firstSurveyId = this.surveyDetails['surveyGroupItems'][0]['surveyId'];
        for (let i = 0; i < this.surveyDetails['surveyGroupItems'].length; i++) {
            let item = this.surveyDetails['surveyGroupItems'][i];
            if (item['isAnswered'] == false) {
                let end = new Date(item['startDate']);
                end = new Date(end.getTime() + end.getTimezoneOffset() * 60000);
                end.setHours(0, 0, 0, 0);
                let duration = end - now;
                if (duration == 0) {
                    //enable start survey buton
                    this.surveyState = 3;
                    this.msg = "Please complete your survey for today";
                    break;
                }
                else if (duration > 0) {
                    this.surveyState = 4;
                    this.showCounter(item['startDate']);
                    break;
                }
            }
        }
    }
    // *********** Fetch the total No of Users who responded to the Survey only for SSID **************
    getTotalSurveyResponseCount() {
        if (this.firstSurveyId) {
            this.surveyService.getSurveyResponseCount(localStorage.getItem('ssid'), this.firstSurveyId).subscribe(data => {
                console.log(data);
                if (!data['isError']) {
                    this.maxResponseCount = data.result;
                }
            });
        }
    }
    // ********** This Timer will be run for Hourly Survey **************
    showHourlySurveyCounter(newTime) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(1000).subscribe(val => {
            let now;
            let days = 0, hours = 0, minutes = 0, seconds = 0;
            now = new Date(); // todays date
            let today = new Date();
            today = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
            let duration = newTime - today;
            if (duration <= 0) {
                this.clearCounter();
            }
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            // hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = hours + 'hrs ' + minutes +
                'min ' + seconds + 'secs';
            this.sharedService.remainingTimeForSurvey.next(this.timeCounter);
        });
    }
    onBackClick() {
        if (this.isAnswerNextSurvey) {
            if (this.messageObj['nextSurveyId'] && this.messageObj['nextSurveyId'] != '') {
                this.router.navigateByUrl(`/home/survey/${this.messageObj['nextSurveyId']}`);
            }
            else {
                this.router.navigateByUrl('/home/info');
            }
        }
        else {
            this.router.navigateByUrl('/home/info');
        }
    }
    onDoneClick() {
        if (this.messageObj['firstSurveyId'] != '') {
            this.router.navigateByUrl(`/home/survey/${this.messageObj['firstSurveyId']}`);
        }
        else if (this.messageObj['nextSurveyId'] != '') {
            this.router.navigateByUrl(`/home/survey/${this.messageObj['nextSurveyId']}`);
        }
        else {
            this.router.navigateByUrl('/home/info');
        }
    }
    onAcceptClick() {
        let params = {
            code: this.messageObj['connectionCode'],
            bluenumber: localStorage.getItem('personBluenumber')
        };
        this.sharedService.startLoader();
        this.dashboardService.setConnectionRequestDetailsByCode(params).subscribe(res => {
            this.sharedService.stopLoader();
            console.log(res.result);
            if (!res.isError) {
                this.router.navigateByUrl('/home/user-agreement');
                // this.onBackClick()
            }
        });
    }
    onRejectClick() {
        //localStorage.clear()
        // localStorage.removeItem(environment.authTokenKey);
        //this.oauthService.logOut();
        aws_amplify__WEBPACK_IMPORTED_MODULE_7__.Auth.signOut();
    }
    goToHomePage() {
        this.router.navigateByUrl('home/info');
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_3__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModalConfig)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], viewQuery: function MessagesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 5, vars: 3, consts: [["class", "pop-up-message", 4, "ngIf"], ["class", "pma", 4, "ngIf"], ["class", "pma align-items-center d-flex align-self-center h-100vh mx-3", 4, "ngIf"], ["content", ""], [1, "pop-up-message"], ["autocomplete", "off", 1, "pma-modal", "pma"], [1, "modal-header", "header-custom", "border-bottom-0"], [1, "modal-title-save", "pl-3", "pl-md-2"], [1, "modal-body", "modal-body-space", "pb-0"], [1, "form-group", "mb-0"], [1, "col-12", "pl-0", "pr-0", "text-center"], [1, "row", "form-group", "mt-5", "d-flex", "justify-content-center"], [1, "text-center", "cont-height"], [1, "text-center"], [4, "ngIf"], ["class", "succes-mess  text-center px-5", 4, "ngIf"], ["class", "pma-heading text-gray-1 mb-2", 4, "ngIf"], ["class", "modal-footer footer-custom pb-5 pt-0 border-top-0 justify-content-center", 4, "ngIf"], ["src", "../../../assets/media/success-logo.svg", "alt", "", 1, "img-fluid", "p-success"], [1, "big-font", "pb-4"], [1, "succes-mess", "text-center", "px-5"], [1, "f-20"], [1, "time-counter"], [1, "pma-heading", "text-gray-1", "mb-2"], [1, "modal-footer", "footer-custom", "pb-5", "pt-0", "border-top-0", "justify-content-center"], ["class", "pma-buttons", 4, "ngIf"], ["class", "pma-buttons text-center", 4, "ngIf"], ["class", "pma-buttons bottom-position text-center", 4, "ngIf"], [1, "pma-buttons"], ["type", "button", 1, "btn", "btn-l", "btn-md", "mb-3", "btn-block", 3, "click"], ["type", "button", 1, "btn", "btn-mm-p", "btn-md", "btn-block", 3, "click"], [1, "pma-buttons", "text-center"], ["type", "button", 1, "btn", "btn-p-agr", "btn-md", "btn-block", 3, "click"], ["type", "button", 1, "btn", "btn-l-reje", "btn-md", "btn-block", 3, "click"], [1, "pma-buttons", "bottom-position", "text-center"], [1, "btn", "btn-mm-p", "btn-lg", "btn-block", 3, "click"], [1, "pma"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], [1, "popup-succes-req"], [1, "sms-des"], [1, "btn", "btn-sm", "okay-btn-succ", "mb-3", 3, "click"], [1, "pma", "align-items-center", "d-flex", "align-self-center", "h-100vh", "mx-3"], [1, "card", "px-4", "py-5", "card-shadow"], ["class", "popup-succes-req", 4, "ngIf"], ["class", "sms-des", 4, "ngIf"], [1, "modal-header", "mr-2", "mt-0", "ml-4", "border-bottom-0"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body", "pt-0", "mt-0"], ["class", "pma align-items-center d-flex align-self-center h-100vh", 4, "ngIf"], [1, "text-center", "pma-buttons", "pb-4"], [1, "btn", "btn-lg", "btn-block", 2, "background", "#AD0C62", "color", "white", 3, "click"], [1, "pma", "align-items-center", "d-flex", "align-self-center", "h-100vh"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 15, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MessagesComponent_div_1_Template, 14, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MessagesComponent_div_2_Template, 10, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MessagesComponent_ng_template_3_Template, 9, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.surveyMsgType == "surveySSID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.surveyMsgType == "farmerRegistration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.surveyMsgType == "workerRequestSID");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm], styles: [".pma[_ngcontent-%COMP%] {\n  background-color: #F3F3F3 !important;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .pma-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  padding: 13px !important;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px !important;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  font-weight: 500;\n  padding: 13px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-space[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.pma[_ngcontent-%COMP%]   .client[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%] {\n  background-color: #621C43;\n  padding: 20px 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  text-align: center;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  margin-bottom: 10px;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n  font-weight: 600;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .mm-card[_ngcontent-%COMP%]:hover, .pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.pma[_ngcontent-%COMP%]   .nav-cards[_ngcontent-%COMP%]   .bn-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n.pma[_ngcontent-%COMP%] {\n  background: #fff !important;\n}\n.big-font[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n  font-weight: 500;\n  color: #545454 !important;\n}\n.f-20[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.f-20[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n.modal-footer[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-agr[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  text-align: center;\n  line-height: 22px;\n  font-family: \"lato\" sans-serif;\n  padding: 10px 40px !important;\n  border: none;\n  margin-bottom: 19px !important;\n}\n.modal-footer[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 21px;\n}\n.modal-footer[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l-reje[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  cursor: pointer;\n  font-size: 12px;\n  border-radius: 10px;\n  font-weight: 400;\n  text-align: center;\n  line-height: 22px;\n  font-family: \"lato\" sans-serif;\n  padding: 10px 68px !important;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l-reje[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.modal-body[_ngcontent-%COMP%]   .cont-height[_ngcontent-%COMP%] {\n  height: 511px;\n}\n.modal-body[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  color: #AD0C62 !important;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%]   .succes-mess[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #545454;\n}\n.modal-body[_ngcontent-%COMP%]   .succes-mess[_ngcontent-%COMP%]   .time-counter[_ngcontent-%COMP%] {\n  color: #AD0C62;\n}\n.popup-succes-req[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 500;\n  font-size: 19px;\n  line-height: 23px;\n  text-align: center;\n}\n.sms-des[_ngcontent-%COMP%] {\n  color: #545454;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  text-align: center;\n}\n.okay-btn-succ[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  margin: 0 auto;\n  width: 160px !important;\n  padding: 15px 10px !important;\n  line-height: 19px;\n}\n.myr-pop[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n}\n.payme-but-des[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #AD0C62;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n}\n.btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px !important;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pay-screen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n}\n.bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 21px;\n}\n.h-100vh[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.card-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  border: none !important;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxvQ0FBQTtBQUhGO0FBTUU7RUFDRSxnQkMwQks7RUR6QkwsY0NIUTtFRElSLGVDaUJHO0FEckJQO0FBT0U7RUFDRSxlQ2FHO0FEbEJQO0FBUUU7RUFDRSxjQ1pRO0FETVo7QUFVSTtFQUNFLHlCQ3ZCUztFRHdCVCxlQ0xDO0VETUQsZUMyQkk7RUQxQkosbUJDY0U7RURiRixXQ25CSztBRFdYO0FBVU07RUFDRSxZQUFBO0FBUlI7QUFZSTtFQUNFLHlCQ25DUztFRG9DVCxlQ2JDO0VEY0QsZUNlSTtFRGRKLG1CQ0VFO0VEREYsV0MvQks7RURnQ0wsd0JBQUE7RUFDQSxnQkFBQTtBQVZOO0FBWU07RUFDRSxZQUFBO0FBVlI7QUFjSTtFQUNFLHlCQ2hETztFRGlEUCwwQkFBQTtFQUNBLGVDQ0k7RURBSixtQkNaRTtFRGFGLFdDN0NLO0VEOENMLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBWk47QUFjTTtFQUNFLFlBQUE7QUFaUjtBQWdCSTtFQUNFLHlCQzNEWTtFRDREWixlQzFDQztFRDJDRCxlQ2RJO0VEZUosbUJDM0JFO0VENEJGLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBZE47QUFnQk07RUFDRSxZQUFBO0FBZFI7QUFtQk07RUFDRSxtQkFBQTtBQWpCUjtBQXVCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBckJOO0FBNEJJOztFQUVFLHlCQzdGUztFRDhGVCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMUJOO0FBNEJNOztFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXpCUjtBQTRCTTs7RUFDRSxlQ3ZGRDtFRHdGQyxXQ3JHRztFRHNHSCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF6QlI7QUE0Qk07O0VBQ0UsWUFBQTtBQXpCUjtBQTZCSTtFQUNFLGlDQUFBO0FBM0JOO0FBNkJNO0VBQ0UseUJBQUE7QUEzQlI7QUFtREU7RUFDRSwyQkFBQTtBQWhESjtBQXVEQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFHQSx5QkFBQTtBQXRERjtBQXlEQTtFQUNFLDBCQUFBO0FBdERGO0FBd0RBO0VBQ0UsMEJBQUE7QUFyREY7QUF5REk7RUFDRSx5QkM1S087RUQ2S1AsZUMzSkM7RUQ0SkQsZUMzSEk7RUQ0SEosbUJDeElFO0VEeUlGLFdDektLO0VEMktMLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUF2RE47QUEwREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQXhESjtBQTBERTtFQUNFLHlCQzVMYztFRDZMZCxlQzlJTTtFRCtJTixlQ2hMRztFRGlMSCxtQkM1Skk7RUQ2SkosZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUF4REo7QUEwREk7RUFDRSxZQUFBO0FBeEROO0FBOERFO0VBQ0UsYUFBQTtBQTNESjtBQTZERTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUEzREo7QUE2REU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTNESjtBQTZESTtFQUNFLGNDak9PO0FEc0tiO0FBa0VBO0VBQ0UsY0N6T1c7RUQwT1gsZ0JBQUE7RUFDQSxlQ25OSztFRG9OTCxpQkFBQTtFQUNBLGtCQUFBO0FBL0RGO0FBaUVBO0VBQ0UsY0MzT1U7RUQ0T1YsZ0JBQUE7RUFDQSxlQzlOSztFRCtOTCxpQkFBQTtFQUNBLGtCQUFBO0FBOURGO0FBZ0VBO0VBQ0UseUJDdlBXO0VEd1BYLGVDbE9LO0VEbU9MLGVDdE1RO0VEdU1SLG1CQ25OTTtFRG9OTixXQ3BQUztFRHFQVCxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUE3REY7QUFtRUE7RUFDRSxnQkFBQTtFQUNBLGVDL09LO0VEZ1BMLGlCQUFBO0VBQ0Esa0JBQUE7QUFoRUY7QUFxRUE7RUFDRSxrQkFBQTtFQUNBLGNDalJXO0VEa1JYLGdCQUFBO0VBQ0EsZUM5UEs7RUQrUEwsaUJBQUE7QUFsRUY7QUFvRUE7RUFDRSx5QkN2Ulc7RUR3UlgsMEJBQUE7RUFDQSxlQ3RPUTtFRHVPUixtQkNuUE07RURvUE4sV0NwUlM7RURxUlQsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFqRUY7QUFtRUU7RUFDRSxZQUFBO0FBakVKO0FBcUVFO0VBQ0UsZ0JBQUE7RUFDQSxlQzlRRztFRCtRSCxpQkFBQTtFQUNBLGtCQUFBO0FBbEVKO0FBcUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFsRUY7QUFxRUE7RUFDRSxhQUFBO0FBbEVGO0FBb0VBO0VBRUUsMENBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbEVGIiwiZmlsZSI6Im1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1saWdodCAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmc6IDIzcHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNjAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICBmb250LXNpemU6ICRmLTI0O1xyXG4gIH1cclxuXHJcbiAgLnBtYS1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ncmF5IHtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gIH1cclxuXHJcbiAgLnBtYS1idXR0b25zIHtcclxuICAgIC5idG4tcC1zIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xMjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogJGJnLXdoaXRlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogJGJnLXdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW1tLXAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNiAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICAgIGNvbG9yOiAkYmctd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1saWdodC1ncmF5O1xyXG4gICAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHBhZGRpbmc6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXNwYWNlIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jbGllbnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE5hdmlnYXRpb25cclxuICAubmF2LWNhcmRzIHtcclxuXHJcbiAgICAubW0tY2FyZCxcclxuICAgIC5ibi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXNlY29uZGFyeTtcclxuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6ICRmLTE0O1xyXG4gICAgICAgIGNvbG9yOiAkYmctd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJuLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBjb2xvcjogJHRleHQtZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAucC1zdWNjZXNzIHtcclxuLy8gICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAucG9wLXVwLW1lc3NhZ2Uge1xyXG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcclxuLy8gICB0b3A6IDBweDtcclxuLy8gICBib3R0b206IDBweDtcclxuLy8gICBiYWNrZ3JvdW5kOiAkYmctd2hpdGUgIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBwYWRkaW5nOiAwcHggMzBweDtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAucG1hIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZy13aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgJG1tLXByaW1hcnk7XHJcbiAgfVxyXG4vLyB9XHJcblxyXG4uYmlnLWZvbnQge1xyXG4gIGZvbnQtc2l6ZTogJGYtNDAgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC8vIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIC8vIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAkdGV4dC1ncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mLTIwIHtcclxuICBmb250LXNpemU6ICRmLTIwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmYtMjAge1xyXG4gIGZvbnQtc2l6ZTogJGYtMjAgIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtZm9vdGVye1xyXG4gIC5wbWEtYnV0dG9uc3tcclxuICAgIC5idG4tcC1hZ3Ige1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xMjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogJGJnLXdoaXRlO1xyXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnbGF0bycgc2Fucy1zZXJpZjtcclxuICAgICAgcGFkZGluZzogMTBweCA0MHB4IWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxOXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuICAuYm90dG9tLXBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMXB4O1xyXG4gIH1cclxuICAuYnRuLWwtcmVqZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1saWdodC1ncmF5O1xyXG4gICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogJ2xhdG8nIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDY4cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH1cclxufVxyXG4ubW9kYWwtYm9keXtcclxuICAuY29udC1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDUxMXB4O1xyXG4gIH1cclxuICAudGltZXJ7XHJcbiAgICBjb2xvcjogJG1tLXByaW1hcnkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5zdWNjZXMtbWVzc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG5cclxuICAgIC50aW1lLWNvdW50ZXJ7XHJcbiAgICAgIGNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyB0aGlzIGlzIGZvciBwb3AgdXAgYWZ0ZXIgY29tcGxldGluZyB0aGUgc3RhcnQgcmVxdWVzdFxyXG4ucG9wdXAtc3VjY2VzLXJlcXtcclxuICBjb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6ICRmLTE5O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc21zLWRlc3tcclxuICBjb2xvcjogJHRleHQtZ3JheTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5va2F5LWJ0bi1zdWNje1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgY29sb3I6ICRiZy13aGl0ZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxNjBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLy8gd2lkdGg6IDEwMCVcclxufVxyXG5cclxuXHJcbi8vIG15ci04MCBwb3AgdXBcclxuLm15ci1wb3B7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6ICRmLTIwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8vIHRoaXMgaXMgZm9yIHJld2FyZCBzdWNjZXNzZnVsIHNlY3Rpb25cclxuLnBheW1lLWJ1dC1kZXN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogJGYtMTU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmJ0bi1tbS1wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICBmb250LXNpemU6ICRmLTE2ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgY29sb3I6ICRiZy13aGl0ZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG59XHJcbi5wYXktc2NyZWVue1xyXG4gIGgze1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLmJvdHRvbS1wb3NpdGlvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMXB4O1xyXG59XHJcblxyXG4uaC0xMDB2aCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uY2FyZC1zaGFkb3dcclxue1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXI6bm9uZSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3297:
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard.service */ 1413);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pipes_blue_no_format_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/blue-no-format.pipe */ 1387);
/* harmony import */ var _pipes_number_fixed_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/number-fixed.pipe */ 4929);










function ProfileComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_ng_template_53_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 29)(6, "section", 30)(7, "div", 31)(8, "div", 20)(9, "h2", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Are you sure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " you want to logout?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 33)(14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_ng_template_53_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.onUserConfirm("no"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_ng_template_53_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onUserConfirm("yes"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
class ProfileComponent {
    constructor(dashboardService, sharedService, router, modalService, config) {
        this.dashboardService = dashboardService;
        this.sharedService = sharedService;
        this.router = router;
        this.modalService = modalService;
        this.blueNumber = '';
        this.isTruncated = true;
        this.isSSIEnabled = false;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.blueNumber = localStorage.getItem('personBluenumber');
        this.sharedService.startLoader();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([this.dashboardService.getProfileDetails(this.blueNumber), this.dashboardService.checkSSICredentials()])
            .subscribe(([profileResponse, checkSSIResponse]) => {
            this.sharedService.stopLoader();
            if (!profileResponse['isError']) {
                this.profileInfo = profileResponse.result;
            }
            this.isSSIEnabled = checkSSIResponse['result'];
        });
    }
    onBackClick() {
        this.router.navigateByUrl('home/info');
    }
    onLogoutClick(content) {
        this.modalService.open(content, {
            size: 'sm modal-dialog-centered',
        });
    }
    onUserConfirm(type) {
        if (type == 'yes') {
            localStorage.clear();
            //this.oauthService.logOut();
            aws_amplify__WEBPACK_IMPORTED_MODULE_6__.Auth.signOut();
            this.router.navigateByUrl('auth/home');
        }
        this.modalService.dismissAll();
    }
    closePopup() {
        this.modalService.dismissAll();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 55, vars: 16, consts: [[1, "pma"], [1, "container"], [1, "pt-2"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "mb-1"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "pt-4"], [1, "b-pro-strip", "d-flex", "justify-content-between"], [1, "strip-cont", "text-truncate"], [1, "b#", "text-white"], [1, "text-white"], [1, "text-white", "text-wrap", "text-truncate", "mb-0", "pb-0"], ["class", "pdv-logo-icon", 4, "ngIf"], [1, "pt-4", "mt-0", "p-title", "mb-5", "pb-5"], [2, "width", "100%"], ["id", "left-table-content"], ["id", "table-center"], ["id", "table-end"], [1, "text-center", "pma-buttons", "p-4"], [1, "col-12"], [1, "btn", "btn-mm-p-blue", "btn-lg", "btn-block", 3, "click"], ["content", ""], [1, "pdv-logo-icon"], ["src", "../../../../../assets/media/Logo-Blue-original.png", "alt", "", "width", "20px", 1, "img-fluid"], [1, "modal-header", "mr-2", "mt-0", "ml-4", "border-bottom-0"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", "shadow-none"], [1, "modal-body", "pt-0", "mt-0"], [1, "pb-0", "pr-4", "pl-4", "pt-0"], [1, "row", "mb-5"], [1, "text-center"], [1, "text-center", "pma-buttons", "pb-4"], [1, "btn", "btn-l-sm", "btn-sm", "mx-3", 3, "click"], [1, "btn", "btn-sm-blu", "btn-sm", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "blueNoFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "numberFixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "numberFixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ProfileComponent_div_20_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "section", 14)(22, "table", 15)(23, "tr")(24, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Gender / Identify As");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tr")(29, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Name (optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tr")(34, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Wallet ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tr")(39, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Trinsic Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "V1.11.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tr")(44, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "App Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Denim V1.1.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "section", 19)(49, "div", 3)(50, "div", 20)(51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](54); return ctx.onLogoutClick(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, ProfileComponent_ng_template_53_Template, 18, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, ctx.profileInfo == null ? null : ctx.profileInfo.blueNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profileInfo == null ? null : ctx.profileInfo.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 10, ctx.profileInfo == null ? null : ctx.profileInfo.latitude, 4), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 13, ctx.profileInfo == null ? null : ctx.profileInfo.longitude, 4), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSSIEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profileInfo == null ? null : ctx.profileInfo.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profileInfo == null ? null : ctx.profileInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.profileInfo == null ? null : ctx.profileInfo.walletId) === "" ? "N/A" : ctx.profileInfo == null ? null : ctx.profileInfo.walletId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_pipes_blue_no_format_pipe__WEBPACK_IMPORTED_MODULE_2__.BlueNoFormatPipe, _pipes_number_fixed_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberFixedPipe], styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .pma-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pma[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .g-pro-strip[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #F8F8F8;\n  padding: 30px;\n  cursor: pointer;\n}\n.pma[_ngcontent-%COMP%]   .g-pro-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.pma[_ngcontent-%COMP%]   .g-pro-strip[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: lighter;\n  margin-bottom: 0px;\n}\n.pma[_ngcontent-%COMP%]   .g-pro-strip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.pma[_ngcontent-%COMP%]   .g-pro-strip[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 18px;\n  font-size: 16px;\n  color: #fff;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-blue[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p-blue[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 16px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-space[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.pma[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  height: 45px;\n}\n.pma[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  width: 110px;\n  word-wrap: break-word;\n}\n.pma[_ngcontent-%COMP%]   #table-end[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.pma[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 310px;\n}\n.pma[_ngcontent-%COMP%]   #table-center[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.pma[_ngcontent-%COMP%]   #left-table-content[_ngcontent-%COMP%] {\n  color: #808080ba;\n}\n.pma[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%]   .list-style-1[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.pma[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%]   .list-style-1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  padding-bottom: 15px;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%]   .list-style-1[_ngcontent-%COMP%]   li.fr[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n}\n.pma[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%]   .list-style-2[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.pma[_ngcontent-%COMP%]   .p-title[_ngcontent-%COMP%]   .list-style-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n  color: #545454;\n}\n.break-address[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  hyphens: auto;\n  overflow: hidden;\n}\n.yesbtn[_ngcontent-%COMP%] {\n  background: #1C4DA1;\n  border-radius: 5px;\n  border: none;\n  border-radius: 5px;\n  color: #FFFFFF !important;\n  padding: 6px 32px;\n  margin-top: 18px;\n  height: 34px;\n  min-width: 100px;\n}\n.nobtn[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 5px;\n  border: none;\n  border-radius: 5px;\n  color: #4472C4 !important;\n  padding: 6px 32px;\n  margin-top: 18px;\n  height: 34px;\n  min-width: 100px;\n}\n.btn-r[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.b-pro-strip[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #0A4797;\n  padding: 19px !important;\n  cursor: pointer;\n  position: relative !important;\n  white-space: nowrap;\n}\n.b-pro-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n  padding-bottom: 0px;\n  font-weight: bold;\n}\n.b-pro-strip[_ngcontent-%COMP%]   .pdv-logo-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 19px;\n}\n.b-pro-strip[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: lighter;\n  margin-bottom: 0;\n  color: #FFFFFF;\n}\n.b-pro-strip[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: lighter !important;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n.prof-name[_ngcontent-%COMP%] {\n  width: 45px !important;\n  height: 37px !important;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n}\n.modal-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  font-weight: 500;\n  line-height: 19px;\n  color: #545454 !important;\n}\n.modal-body[_ngcontent-%COMP%]   .btn-sm-blu[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 300;\n  border-radius: 10px;\n  color: #fff;\n  line-height: 17px;\n  padding: 10px 40px !important;\n}\n.modal-body[_ngcontent-%COMP%]   .btn-sm-blu[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.modal-body[_ngcontent-%COMP%]   .btn-l-sm[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 300;\n  border-radius: 10px;\n  line-height: 17px;\n  padding: 10px 40px !important;\n}\n.modal-body[_ngcontent-%COMP%]   .btn-l-sm[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGFBQUE7QUFKRjtBQUtFO0VBQ0UsZ0JDMkJLO0VEMUJMLGNDRlE7RURHUixlQ2tCRztBRHJCUDtBQU1FO0VBQ0UsZUNjRztBRGxCUDtBQU9FO0VBQ0UsY0NYUTtBRE1aO0FBVUU7RUFDRSxtQkNpQkk7RURoQkoseUJDbkJjO0VEb0JkLGFDb0JNO0VEbkJOLGVDMEJNO0FEbENWO0FBVUk7RUFDRSxlQ0pDO0FESlA7QUFXSTtFQUNFLGVDVkM7RURXRCxvQkFBQTtFQUNBLGtCQ2NJO0FEdkJWO0FBWUk7RUFDRSxhQUFBO0FBVk47QUFhSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQ3ZCQztFRHdCRCxXQ3ZDSztFRHdDTCwyQ0FBQTtBQVhOO0FBZUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQWJKO0FBY0k7RUFDRSx5QkMxRFM7RUQyRFQsZUN4Q0M7RUR5Q0QsZUNSSTtFRFNKLG1CQ3JCRTtFRHNCRixXQ3RESztBRDBDWDtBQWNNO0VBQ0UsWUFBQTtBQVpSO0FBZ0JJO0VBQ0UseUJDdEVTO0VEdUVULGVDaERDO0VEaURELGVDcEJJO0VEcUJKLG1CQ2pDRTtFRGtDRixXQ2xFSztFRG1FTCxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQWROO0FBZ0JNO0VBQ0UsWUFBQTtBQWRSO0FBbUJJO0VBQ0UseUJDakZZO0VEa0ZaLGVDaEVDO0VEaUVELGVDcENJO0VEcUNKLGdCQUFBO0FBakJOO0FBbUJNO0VBQ0UsWUFBQTtBQWpCUjtBQXNCTTtFQUNFLG1CQUFBO0FBcEJSO0FBd0JFO0VBQ0UsWUFBQTtBQXRCSjtBQXlCRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQXZCSjtBQXlCRTtFQUNFLGVBQUE7QUF2Qko7QUF5QkU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXZCSjtBQXlCRTtFQUNFLGVBQUE7QUF2Qko7QUF5QkU7RUFDRSxnQkFBQTtBQXZCSjtBQTJCSTtFQUNFLGdCQUFBO0FBekJOO0FBMkJNO0VBQ0UsZUM3R0Q7RUQ4R0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNDL0hJO0FEc0daO0FBMkJNO0VBRUUsOEJBQUE7QUExQlI7QUE4Qkk7RUFDRSxpQkFBQTtBQTVCTjtBQThCTTtFQUNFLDhCQUFBO0VBQ0EsY0M1SUk7QURnSFo7QUFrQ0E7RUFDRSx5QkFBQTtFQUlBLGFBQUE7RUFDQSxnQkFBQTtBQS9CRjtBQWtDQTtFQUNFLG1CQ3BKWTtFRHFKWixrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQS9CRjtBQWtDQTtFQUNFLG1CQ2xLVztFRG1LWCxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQS9CRjtBQWtDQTtFQUNFLGtCQUFBO0FBL0JGO0FBa0NBO0VBQ0UsbUJBQUE7RUFDQSx5QkMvTGE7RURnTWIsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQS9CRjtBQWtDRTtFQUNFLGVDL0tHO0VEZ0xILGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWhDSjtBQW1DRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQWpDSjtBQW9DRTtFQUNFLGVDNUxHO0VENkxILG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzFNUztBRHdLYjtBQXFDRTtFQUNFLCtCQUFBO0VBQ0EsZUN0TUc7RUR1TUgsY0NoTlM7QUQ2S2I7QUEwQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQXZDRjtBQTBDRTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBdkNKO0FBeUNFO0VBQ0UseUJDalBXO0VEa1BYLGVDN05HO0VEOE5ILGVDL0xNO0VEZ01OLGdCQUFBO0VBQ0EsbUJDN01JO0VEOE1KLFdDOU9PO0VEK09QLGlCQUFBO0VBQ0EsNkJBQUE7QUF2Q0o7QUF5Q0k7RUFDRSxZQUFBO0FBdkNOO0FBNENJO0VBQ0UseUJDNVBZO0VENlBaLGVDN09DO0VEOE9ELGVDL01JO0VEZ05KLGdCQUFBO0VBQ0EsbUJDN05FO0VEOE5GLGlCQUFBO0VBQ0EsNkJBQUE7QUExQ047QUE0Q007RUFDRSxZQUFBO0FBMUNSIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy02MDA7XHJcbiAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgfVxyXG5cclxuICAucG1hLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAkZi0yNDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWdyYXkge1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5nLXByby1zdHJpcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1saWdodC1ncmF5O1xyXG4gICAgcGFkZGluZzogJHBhZGQtMzA7XHJcbiAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAkZi0xOTtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAkdmFsdWUtMCA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgICBjb2xvcjogJGJnLXdoaXRlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBtYS1idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLmJ0bi1wLXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgICBmb250LXNpemU6ICRmLTEyO1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICAgIGNvbG9yOiAkYmctd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLW1tLXAtYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LXByaW1hcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgY29sb3I6ICRiZy13aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLmJ0bi1sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtbGlnaHQtZ3JheTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3BhY2Uge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB0YWJsZSA+IHRye1xyXG4gICAgaGVpZ2h0OiA0NXB4IDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgPiB0ciA+IHRke1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAjdGFibGUtZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuICB0YWJsZXtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gIH1cclxuICAjdGFibGUtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuICAjbGVmdC10YWJsZS1jb250ZW50e1xyXG4gICAgY29sb3I6ICM4MDgwODBiYTtcclxuICB9XHJcbiAgLy8gUHJvZmlsZSBUaWx0ZVxyXG4gIC5wLXRpdGxlIHtcclxuICAgIC5saXN0LXN0eWxlLTEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgICAgfVxyXG4gICAgICBsaS5mclxyXG4gICAgICB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1zdHlsZS0yIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnJlYWstYWRkcmVzcyB7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnllc2J0biB7XHJcbiAgYmFja2dyb3VuZDogJHllc2J0bi1ibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3IgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA2cHggMzJweDtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubm9idG4ge1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogJG5vYnRuLWxpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNnB4IDMycHg7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmJ0bi1yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5iLXByby1zdHJpcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gIHBhZGRpbmc6IDE5cHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAvLyBmb250LWZhbWlseTogJG5ldy1mb250ZmFtaWx5ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyBmb250LWZhbWlseTogJG5ldy1mb250ZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wZHYtbG9nby1pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIDtcclxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbiAgICAvLyBmb250LWZhbWlseTogJG5ldy1mb250ZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGg1e1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICRuZXctZm9udGZhbWlseSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICBcclxuICB9XHJcbn1cclxuXHJcbi5wcm9mLW5hbWUge1xyXG4gIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWJvZHl7XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAkZi0xNiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1zbS1ibHV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgZm9udC1zaXplOiAkZi0xNDtcclxuICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgY29sb3I6ICRiZy13aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgXHJcbiAgICAuYnRuLWwtc217XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWxpZ2h0LWdyYXk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggNDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgICAvLyAucHJvZi1jb250e1xyXG4gICAgLy8gICBoZWlnaHQ6IDIxOXB4O1xyXG4gICAgLy8gfSIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 7795:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/survey-odk-questions/survey-odk-questions.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyOdkQuestionsComponent": () => (/* binding */ SurveyOdkQuestionsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 1413);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








function SurveyOdkQuestionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyOdkQuestionsComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.onODKSurveyClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.odkURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
} }
class SurveyOdkQuestionsComponent {
    constructor(router, sharedService, dashboardService, sanitizer, surveyService) {
        this.router = router;
        this.sharedService = sharedService;
        this.dashboardService = dashboardService;
        this.sanitizer = sanitizer;
        this.surveyService = surveyService;
        this.appId = '';
        this.surveyQRCode = '';
        this.qrCodeData = {};
        this.odkURL = '';
        this.isSurveyLoaded = false;
        this.latitude = '';
        this.longitude = '';
    }
    ngOnInit() {
        this.appId = localStorage.getItem('app');
        let sid = localStorage.getItem('sid');
        let ssid = localStorage.getItem('ssid');
        if (sid != '' && sid != null && sid) {
            this.surveyType = 'sid';
        }
        if (ssid != '' && ssid != null && ssid) {
            this.surveyType = 'ssid';
        }
        this.fetchSurveyIdDetails();
        this.getLocation();
    }
    fetchSurveyIdDetails() {
        var _a;
        let currentRoute = this.router.url.split('/home/survey/odk/');
        if (((_a = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute[1]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.surveyQRCode = currentRoute[1];
            // *********** Fetch Survey Info ****************
            this.getQRDetails();
        }
    }
    getQRDetails() {
        this.sharedService.startLoader();
        this.dashboardService.getDataRequesDetailsById(this.surveyQRCode).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.isSurveyLoaded = true;
                this.qrCodeData = res['result'];
                let url = this.qrCodeData['odkUrl'];
                if (this.surveyType == 'ssid') {
                    url = url + `&qrcode=${localStorage.getItem('ssid')}&surveysetid=${localStorage.getItem('surveySetId')}`;
                }
                const jwtToken = localStorage.getItem('idToken');
                url = url + `&surveyname=${this.qrCodeData['name']}&surveyid=${this.qrCodeData['id']}&latitude=${this.latitude}&longitude=${this.longitude}&idtoken=${jwtToken}`;
                console.log("iframe odk url", url);
                this.odkURL = this.sanitizer.bypassSecurityTrustResourceUrl(url + '&lang=' + this.getLanguageSelection());
                console.log("iframe odk url after sanitizer", this.odkURL);
            }
        }, ((error) => {
            this.isSurveyLoaded = false;
            // this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
            this.router.navigateByUrl('home/info');
        }));
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                    if (this.latitude == "" || this.longitude == "") {
                        this.fetchProfileDetails();
                    }
                }
            }, (error) => {
                console.log(error);
                this.fetchProfileDetails();
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
            if (this.latitude == "" || this.longitude == "") {
                this.fetchProfileDetails();
            }
        }
    }
    fetchProfileDetails() {
        this.sharedService.startLoader();
        this.dashboardService.getProfileDetails(localStorage.getItem('personBluenumber')).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError'] && res['result']) {
                this.latitude = res.result['latitude'];
                this.longitude = res.result['longitude'];
            }
        });
    }
    onODKSurveyClose() {
        if (localStorage.getItem('sid') != '' && localStorage.getItem('sid') != null && localStorage.getItem('sid') != 'null') {
            this.fetchSurveySIDDetails();
        }
        else if (localStorage.getItem('ssid') != '' && localStorage.getItem('ssid') != null && localStorage.getItem('ssid') != 'null') {
            this.fetchSurveySetSSIDDetails();
        }
    }
    // ********** Method to fetch the Survey Info based on SID  ************************
    fetchSurveySIDDetails() {
        this.router.navigateByUrl('home/info');
        // this.sharedService.startLoader();
        // this.surveyService.getSurveyDetailsbyQRCode(localStorage.getItem('sid')).pipe(
        //   finalize(() => this.sharedService.stopLoader())
        // ).subscribe(result => {
        //   this.surveyDetails = result['result'];
        // });
    }
    // ********** Method to fetch the Survey Info based on SSID  ************************
    fetchSurveySetSSIDDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.sharedService.stopLoader())).subscribe(res => {
            this.sharedService.stopLoader();
            this.surveyDetails = res['result'];
            let filteredData = this.surveyDetails['surveyGroupItems'].filter((item) => this.surveyQRCode == item['surveyId']);
            if (filteredData && filteredData.length > 0) {
                if (filteredData[0]['isAnswered']) {
                    this.navigateToMessagesScreen();
                }
                else {
                    this.router.navigateByUrl('home/info');
                }
            }
        });
    }
    // ******** Method to Navigate to Msg screen
    navigateToMessagesScreen() {
        if (localStorage.getItem('surveyType') == 'verify') {
            this.sharedService.successErrorMsg['message'] = "You have been verified!";
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
            this.sharedService.stopLoader();
            return;
        }
        if (localStorage.getItem('surveyType') == 'feedback') {
            this.sharedService.successErrorMsg['message'] =
                `${this.qrCodeData['currency']} ${this.qrCodeData['paymentOffered']}`;
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
            this.sharedService.stopLoader();
            return;
        }
        if (this.sharedService.successErrorMsg['nextSurveyId'] != '') {
            if (this.sharedService.successErrorMsg['nextSurveyId'] != this.surveyQRCode) {
                if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                    this.sharedService.successErrorMsg['firstSurveyId'] = '';
                    this.sharedService.successErrorMsg['isRequestSurvey'] = true;
                }
                this.sharedService.successErrorMsg['message'] = "AnswerNextSurvey";
                this.sharedService.successErrorMsg['showAcceptReject'] = false;
                this.sharedService.successErrorMsg['showProceed'] = false;
                this.router.navigateByUrl('/home/messages');
            }
            else {
                if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    if (this.sharedService.successErrorMsg['firstSurveyId'] == this.sharedService.successErrorMsg['lastSurveyId']) {
                        this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                    }
                    else {
                        this.sharedService.successErrorMsg['isRequestSurvey'] = true;
                    }
                    this.sharedService.successErrorMsg['firstSurveyId'] = '';
                }
                else {
                    if (this.sharedService.successErrorMsg['lastSurveyId'] == this.surveyQRCode) {
                        this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                        this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                    }
                    else {
                        this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    }
                }
                this.sharedService.successErrorMsg['showAcceptReject'] = false;
                this.sharedService.successErrorMsg['showProceed'] = false;
                this.router.navigateByUrl('/home/messages');
            }
        }
        else {
            if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                this.sharedService.successErrorMsg['firstSurveyId'] = '';
                this.sharedService.successErrorMsg['isRequestSurvey'] = true;
            }
            else {
                if (this.sharedService.successErrorMsg['lastSurveyId'] == this.surveyQRCode) {
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                }
                else {
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                }
            }
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
        }
        this.sharedService.stopLoader();
    }
    //function to get language selection from user
    getLanguageSelection() {
        const match = document.cookie.match(/(^|;\s*)googtrans=([^;]+)/);
        return match ? match[2].split('/')[2] : null;
    }
}
SurveyOdkQuestionsComponent.ɵfac = function SurveyOdkQuestionsComponent_Factory(t) { return new (t || SurveyOdkQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService)); };
SurveyOdkQuestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SurveyOdkQuestionsComponent, selectors: [["app-survey-odk-questions"]], decls: 1, vars: 1, consts: [["class", "screen-size", 4, "ngIf"], [1, "screen-size"], [1, "btn-x"], [3, "click"], ["width", "100%", "height", "100%", "frameBorder", "0", "allow", "geolocation", 3, "src"]], template: function SurveyOdkQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SurveyOdkQuestionsComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSurveyLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: [".screen-size[_ngcontent-%COMP%] {\n  height: 550px;\n}\n\n.btn-x[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1vZGstcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSiIsImZpbGUiOiJzdXJ2ZXktb2RrLXF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4tc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG59XHJcbi5idG4teCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 1438:
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/survey-questions/survey-questions.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyQuestionsComponent": () => (/* binding */ SurveyQuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ 1413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 8357);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);









const _c0 = ["content10"];
const _c1 = ["content"];
const _c2 = ["noAddressPopup"];
const _c3 = ["locationPopup"];
function SurveyQuestionsComponent_h4_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question ", ctx_r0.currentQuestion, "");
} }
const _c4 = function () { return { standalone: true }; };
function SurveyQuestionsComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 23)(3, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function SurveyQuestionsComponent_div_12_div_4_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.onRegionEnter(); })("ngModelChange", function SurveyQuestionsComponent_div_12_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; })("onAddressChange", function SurveyQuestionsComponent_div_12_div_4_Template_input_onAddressChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.handleAddressChange($event, questions_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngInit", function SurveyQuestionsComponent_div_12_div_4_Template_div_ngInit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r30.selectMapQuestion(questions_r11); return ctx_r30.initMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", questions_r11.answerValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Location Selected: ", questions_r11.answerValue, "");
} }
function SurveyQuestionsComponent_div_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_5_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c4))("ngModel", questions_r11.answerValue);
} }
function SurveyQuestionsComponent_div_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_6_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c4))("ngModel", questions_r11.answerValue);
} }
function SurveyQuestionsComponent_div_12_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_7_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c4))("ngModel", questions_r11.answerValue);
} }
function SurveyQuestionsComponent_div_12_div_8_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", options_r46 == null ? null : options_r46.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", options_r46 == null ? null : options_r46.value, " ");
} }
function SurveyQuestionsComponent_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_8_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SurveyQuestionsComponent_div_12_div_8_option_2_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", questions_r11.answerValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", questions_r11 == null ? null : questions_r11.options);
} }
const _c5 = function (a0) { return { "hp-radio": a0 }; };
function SurveyQuestionsComponent_div_12_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_9_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r57); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const options_r53 = ctx.$implicit;
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("form-check-input mb-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", options_r53 == null ? null : options_r53.id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c4))("value", options_r53 == null ? null : options_r53.value)("ngModel", questions_r11.answerValue)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c5, (questions_r11 == null ? null : questions_r11.attributeName) == "hp_radio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", options_r53 == null ? null : options_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", options_r53 == null ? null : options_r53.value, " ");
} }
function SurveyQuestionsComponent_div_12_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function SurveyQuestionsComponent_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SurveyQuestionsComponent_div_12_div_9_div_3_Template, 4, 12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SurveyQuestionsComponent_div_12_div_9_div_4_Template, 3, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", questions_r11 == null ? null : questions_r11.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.attributeName) == "hp_radio");
} }
function SurveyQuestionsComponent_div_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Please register a TNG wallet for this mobile number so you can get paid when you complete the survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function SurveyQuestionsComponent_div_12_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_11_div_1_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r63); const options_r61 = restoredCtx.$implicit; return options_r61.isSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const options_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", options_r61 == null ? null : options_r61.id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c4))("value", options_r61 == null ? null : options_r61.value)("ngModel", options_r61.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", options_r61 == null ? null : options_r61.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", options_r61 == null ? null : options_r61.value, " ");
} }
function SurveyQuestionsComponent_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SurveyQuestionsComponent_div_12_div_11_div_1_Template, 4, 7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", questions_r11 == null ? null : questions_r11.options);
} }
function SurveyQuestionsComponent_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SurveyQuestionsComponent_div_12_div_12_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r67); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r65.onFileUpload($event, questions_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function SurveyQuestionsComponent_div_12_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SurveyQuestionsComponent_div_12_div_13_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70); const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return questions_r11.answerValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const questions_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c4))("ngModel", questions_r11.answerValue);
} }
function SurveyQuestionsComponent_div_12_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r22.showValidationMsg["message"], " ");
} }
function SurveyQuestionsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 16)(2, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SurveyQuestionsComponent_div_12_div_4_Template, 8, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SurveyQuestionsComponent_div_12_div_5_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SurveyQuestionsComponent_div_12_div_6_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SurveyQuestionsComponent_div_12_div_7_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SurveyQuestionsComponent_div_12_div_8_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SurveyQuestionsComponent_div_12_div_9_Template, 5, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SurveyQuestionsComponent_div_12_div_10_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SurveyQuestionsComponent_div_12_div_11_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SurveyQuestionsComponent_div_12_div_12_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SurveyQuestionsComponent_div_12_div_13_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SurveyQuestionsComponent_div_12_div_14_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questions_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", questions_r11 == null ? null : questions_r11.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.attributeName) == "location_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Text" && (questions_r11 == null ? null : questions_r11.attributeName) != "location_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Number" && (questions_r11 == null ? null : questions_r11.attributeName) == "aadhar_number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Number" && (questions_r11 == null ? null : questions_r11.attributeName) != "aadhar_number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.attributeName) == "hp_radio" && (questions_r11 == null ? null : questions_r11.answerValue) && (questions_r11 == null ? null : questions_r11.answerValue == null ? null : questions_r11.answerValue.toLowerCase()) == "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (questions_r11 == null ? null : questions_r11.type) == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showValidationMsg["display"]);
} }
const _c6 = function (a0) { return { "active": a0 }; };
function SurveyQuestionsComponent_div_13_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "li", 55);
} if (rf & 2) {
    const i_r75 = ctx.index;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c6, i_r75 < ctx_r72.currentQuestion));
} }
function SurveyQuestionsComponent_div_13_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Question ", ctx_r73.currentQuestion, " of ", ctx_r73.totalQuestions, "");
} }
const _c7 = function () { return []; };
function SurveyQuestionsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49)(1, "div", 17)(2, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SurveyQuestionsComponent_div_13_li_3_Template, 1, 3, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 52)(5, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_div_13_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r76.onContinueClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SurveyQuestionsComponent_div_13_div_7_Template, 3, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c7).constructor(ctx_r2.totalQuestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.continueButtonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.appId == "mmind");
} }
function SurveyQuestionsComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 57)(1, "div", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 60)(5, "div", 61)(6, "div", 62)(7, "div", 63)(8, "div", 64)(9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Thanks for Participating");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 66)(14, "div", 67)(15, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_ng_template_14_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r78.onDoneClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function SurveyQuestionsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 57)(1, "div", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 60)(5, "div", 61)(6, "div", 62)(7, "div", 63)(8, "div", 64)(9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 66)(14, "div", 67)(15, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_ng_template_16_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r80.onDoneClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_ng_template_16_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r81); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r82.onDoneClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.popupMsg);
} }
function SurveyQuestionsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 57)(1, "div", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 60)(5, "div", 61)(6, "div", 62)(7, "div", 63)(8, "div", 64)(9, "div", 64)(10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "The selected pointer doesnt have a valid address. Please relocate again to fetch the valid address on the map. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 66)(13, "div", 67)(14, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_ng_template_18_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r83.closeAddressPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
function SurveyQuestionsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "h3", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 72)(4, "section", 73)(5, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " To enable location : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Go to settings > type location > tap the location icon > turn it on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 75)(10, "div", 76)(11, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_ng_template_20_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r87.closeAddressPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} }
class SurveyQuestionsComponent {
    constructor(modalService, config, router, sharedService, dashboardService, fb, cdr, surveyService) {
        this.modalService = modalService;
        this.router = router;
        this.sharedService = sharedService;
        this.dashboardService = dashboardService;
        this.fb = fb;
        this.cdr = cdr;
        this.surveyService = surveyService;
        this.questionsList = [];
        this.totalQuestions = 0;
        this.isFirstSurvey = true;
        this.currentQuestion = 0;
        this.location = '';
        this.latitude = '';
        this.longitude = '';
        this.questionObjectForMap = null;
        this.isSurveyLoaded = false;
        this.continueButtonText = "Continue";
        this.responseCount = 0;
        // qrId: string = "SWG86I"; // 2nd SurveyId is 'S15YLG'. Use this Id to get other Survey.
        // qrId: string = "STKS2T"; // S4KF53 2nd SurveyId is 'SWG86I'. Use this Id to get other Survey.
        this.lat = "";
        this.lng = "";
        this.qrId = 'SSU5YB';
        // SI4SUF
        // SSU5YB
        this.surveyQRCode = '';
        this.qrCodeData = {};
        this.popupMsg = '';
        this.intervalId = null;
        this.googleGlobalInitialized = false;
        this.userCurrentMarkerPinImage = null;
        this.addressSelected = '';
        this.autoComplete = google.maps.places.Autocomplete;
        this.showValidationMsg = { message: '', display: false };
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.appId = localStorage.getItem('app');
        let surveyType = localStorage.getItem('surveyType');
        if (surveyType != 'verify') {
            this.continueButtonText = this.appId == 'mmind' ? 'Continue' : 'Next';
        }
        else {
            this.continueButtonText = 'Submit';
        }
        this.fetchSurveyIdDetails();
    }
    // *********** To display the progress of questions in Progress BAr *****************8
    progressValue() {
        let value = Number(((this.currentQuestion / this.totalQuestions) * 100).toFixed(0));
        return !Number.isNaN(value) ? value : 0;
    }
    fetchSurveyIdDetails() {
        var _a;
        let currentRoute = this.router.url.split('/home/survey/');
        if (((_a = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute[1]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.surveyQRCode = currentRoute[1];
            // *********** Fetch Survey Info ****************
            this.getQRDetails();
        }
        this.getLocation();
    }
    getDocumentObject() {
        return document;
    }
    initMap(latNLng = { lat: this.lat, lng: this.lng }, zoom = 16) {
        //zoom 18 can see area
        /*styles generted from https://mapstyle.withgoogle.com/ */
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: zoom,
            center: new google.maps.LatLng(latNLng.lat, latNLng.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'greedy',
            streetViewControl: false
        });
        if (this.questionObjectForMap && this.questionObjectForMap['answerValue']) {
            let answer = this.questionObjectForMap['answerValue'].split(" | ");
            if (answer.length == 3) {
                this.map.setCenter({ lat: parseFloat(answer[1]), lng: parseFloat(answer[2]) });
                this.map.setZoom(18);
            }
            if (answer.length == 2) {
                this.map.setCenter({ lat: parseFloat(answer[0]), lng: parseFloat(answer[1]) });
                this.map.setZoom(18);
            }
        }
        let self = this;
        this.instantiateGooglePlacesService();
        this.initAutocomplete();
        this.map.addListener('click', this.mapCLickListenerForPlace.bind(this));
        //google.maps.event.addDomListener(this.map,'click',this.mapCLickListenerForPlace.bind(this));
        this.userCurrentMarkerPinImage = {
            url: "assets/media/briefcasePartialFill.png",
            scaledSize: new google.maps.Size(32, 32), // scaled size
        };
        this.userLocationMarker = new google.maps.Marker({
            position: new google.maps.LatLng(latNLng.lat, latNLng.lng),
            icon: this.userCurrentMarkerPinImage,
            map: this.map,
            title: "Current User Location"
        });
    }
    setUserOfficeLocation(lat, long) {
        if (this.userLocationMarker == null || this.userLocationMarker == undefined) {
            this.userLocationMarker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, long),
                icon: this.userCurrentMarkerPinImage,
                map: this.map,
                title: "Current User Location"
            });
        }
        else {
            this.userLocationMarker.setMap(this.map);
            this.userLocationMarker.setPosition({
                lat: lat,
                lng: long
            });
        }
    }
    mapCLickListenerForPlace(event) {
        //check place is within users range in 1 km.
        //get details of place and review
        console.log('You clicked on: ' + event.latLng);
        // If the event has a placeId, be it inside circle or outside it is not reviewed
        if (event.placeId) {
            console.log('You clicked on place:' + event.placeId);
            // Calling e.stop() on the event prevents the default info window from
            // showing.
            // If you call stop here when there is no placeId you will prevent some
            // other map click event handlers from receiving the event.
            event.stop();
            //if(this.haversineFormulaForDistanceBetweenTwoPoints(this.userGeoLocation,event.latLng.toJSON()) <=1000)
            this.googlePlacesService.getDetails({ placeId: event.placeId }, (result, status) => {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    console.log(result);
                    //@ts-ignore
                    let initialValue = {
                        long_name: "",
                        short_name: "",
                        types: []
                    };
                    let addressComponentInsingleLine = initialValue;
                    if (result.address_components && result.address_components.length > 0) {
                        addressComponentInsingleLine = result.address_components.reduce((p, c, index) => {
                            /*console.log("previous", p, "current:", c);*/
                            if (index == 0) {
                                p.long_name = c.long_name;
                            }
                            else {
                                p.long_name = p.long_name + ';' + c.long_name;
                            }
                            return p;
                        }, initialValue);
                    }
                    this.questionObjectForMap['answerValue'] = result.name + ' | ' + addressComponentInsingleLine.long_name + ' | ' + result.geometry.location.lat() + ' | ' + result.geometry.location.lng();
                    this.profileLat = result.geometry.location.lat();
                    this.profileLng = result.geometry.location.lng();
                    this.addressSelected = this.questionObjectForMap['answerValue'];
                    if (result.geometry && result.geometry.location) {
                        this.setUserOfficeLocation(result.geometry.location.lat(), result.geometry.location.lng());
                    }
                    this.cdr.detectChanges();
                }
            });
        }
        else {
            let appId = localStorage.getItem('app');
            if (appId == '') {
                this.addressSelected = '';
                this.questionObjectForMap['answerValue'] = '';
                this.openPopup(this.noAddressPopup);
            }
            else if (appId == 'mmind') {
                this.getReverseGeocodingData(event.latLng.lat(), event.latLng.lng());
            }
        }
    }
    // ********** To fetch the Address based on Lat Lng points ******************
    getReverseGeocodingData(lat, lng) {
        var latlng = new google.maps.LatLng(lat, lng);
        // This is making the Geocode request
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, (results, status) => {
            if (status !== google.maps.GeocoderStatus.OK) {
                alert(status);
            }
            // This is checking to see if the Geoeode Status is OK before proceeding
            if (status == google.maps.GeocoderStatus.OK) {
                var address = (results[0].formatted_address.replaceAll(',', ';'));
                this.questionObjectForMap['answerValue'] = address + ' | ' + lat + ' | ' + lng;
                this.profileLat = lat;
                this.profileLng = lng;
                this.addressSelected = this.questionObjectForMap['answerValue'];
                this.setUserOfficeLocation(lat, lng);
            }
            this.cdr.detectChanges();
        });
    }
    initAutocomplete() {
        this.autoComplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
            fields: ['place_id', 'geometry', 'name']
        });
        this.autoComplete.addListener("place_changed", (event) => {
            var _a, _b, _c;
            if (this.autoComplete.getPlace().geometry && ((_c = (_b = (_a = this.autoComplete) === null || _a === void 0 ? void 0 : _a.getPlace()) === null || _b === void 0 ? void 0 : _b.geometry) === null || _c === void 0 ? void 0 : _c.location)) {
                //@ts-ignore
                let initialValue = {
                    long_name: "",
                    short_name: "",
                    types: []
                };
                let addressComponentInsingleLine = initialValue;
                if (this.autoComplete.getPlace().address_components && this.autoComplete.getPlace().address_components.length > 0) {
                    addressComponentInsingleLine = this.autoComplete.getPlace().address_components.reduce((p, c, index) => {
                        /*console.log("previous", p, "current:", c);*/
                        if (index == 0) {
                            p.long_name = c.long_name;
                        }
                        else {
                            p.long_name = p.long_name + ';' + c.long_name;
                        }
                        return p;
                    }, initialValue);
                }
                this.questionObjectForMap['answerValue'] = addressComponentInsingleLine.long_name + ' | ' + this.autoComplete.getPlace().geometry.location.lat() + ' | ' + this.autoComplete.getPlace().geometry.location.lng();
                this.setUserOfficeLocation(this.autoComplete.getPlace().geometry.location.lat(), this.autoComplete.getPlace().geometry.location.lng());
                this.map.setCenter(this.autoComplete.getPlace().geometry.location);
            }
        });
    }
    instantiateGooglePlacesService() {
        this.googlePlacesService = new google.maps.places.PlacesService(this.map);
    }
    selectMapQuestion(question) {
        if (this.questionObjectForMap == null || this.questionObjectForMap == undefined) {
            this.questionObjectForMap = question;
        }
        else {
            if (this.questionObjectForMap['answerValue']) {
                let answer = this.questionObjectForMap['answerValue'].split(" | ");
                if (answer.length == 3) {
                    this.setUserOfficeLocation(parseFloat(answer[1]), parseFloat(answer[2]));
                }
                if (answer.length == 2) {
                    this.setUserOfficeLocation(parseFloat(answer[0]), parseFloat(answer[1]));
                }
            }
        }
    }
    getQRDetails() {
        this.sharedService.startLoader();
        this.dashboardService.getDataRequesDetailsById(this.surveyQRCode).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.qrCodeData = res['result'];
                this.getSurveyRequestDetails(this.qrCodeData);
            }
        }, ((error) => {
            this.isSurveyLoaded = true;
            // this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
            this.router.navigateByUrl('home/info');
        }));
    }
    getSurveyRequestDetails(qrCodeData) {
        this.isSurveyLoaded = true;
        if (qrCodeData) {
            this.questionObject = qrCodeData;
            this.blueNumber = localStorage.getItem('personBluenumber');
            this.dashboardService.getProfileDetails(this.blueNumber).subscribe((res) => {
                if (!res['isError']) {
                    this.profileObject = res.result;
                }
            });
            if (qrCodeData.sections[0] && qrCodeData.sections[0].questions.length > 0) {
                qrCodeData.sections[0].questions.map((question) => {
                    question['answerValue'] = '';
                });
                [qrCodeData.sections[0].questions[0]].map(question => {
                    if (question.type == "Checkbox") {
                        question.options.forEach((option) => {
                            option.isSelected = false;
                        });
                    }
                });
                this.questionsList = [qrCodeData.sections[0].questions[0]];
                if (this.questionsList[0]['attributeName'] == 'location_map') {
                    let interval = setTimeout(() => {
                        this.selectMapQuestion(this.questionsList[0]);
                        this.initMap({ lat: this.lat, lng: this.lng });
                        clearInterval(interval);
                    }, 1000);
                }
                this.totalQuestions = qrCodeData.sections[0].questions.length;
                this.currentQuestion = 1;
            }
        }
        // }, (error => {
        //   this.isSurveyLoaded = true;
        // }));
    }
    onRegionEnter() {
        this.longitude = '';
        this.longitude = '';
    }
    handleAddressChange(address, questions) {
        this.questionObjectForMap = questions;
        this.latitude = address['geometry']['location'].lat();
        this.longitude = address['geometry']['location'].lng();
        this.profileLat = address['geometry']['location'].lat();
        this.profileLng = address['geometry']['location'].lng();
        if (address && address.address_components) {
            address.address_components.forEach((item, index) => {
                if (index == 0) {
                    this.questionObjectForMap['answerValue'] = item['long_name'] + ' ';
                }
                else {
                    this.questionObjectForMap['answerValue'] = this.questionObjectForMap['answerValue'] + ', ' + item['long_name'] + ' ';
                }
            });
            questions['answerValue'] = this.questionObjectForMap['answerValue'] + ' | ' + this.latitude + ' | ' + this.longitude;
        }
        this.initMap({ lat: this.latitude, lng: this.longitude });
    }
    onContinueClick() {
        if (this.questionsList[0]['type'] == "Checkbox") {
            let optionsSelected = [];
            this.questionsList[0]['options'].forEach((option) => {
                if (option.isSelected) {
                    optionsSelected.push(option.value);
                }
            });
            this.questionsList[0]['answerValue'] = optionsSelected;
            if (this.questionsList[0]['answerValue'].length > 0) {
                this.showValidationMsg['display'] = false;
                this.showNextQuestion();
            }
            else {
                this.showValidationMsg['display'] = true;
                this.showValidationMsg['message'] = 'Answer is required';
            }
        }
        else if (this.questionsList[0]['attributeName'] == 'aadhar_number') {
            // ********* Aadhar No Validation ***************************
            let numberRegEx = /^(0|[1-9]\d*)$/;
            if (this.questionsList[0]['answerValue'] == '') {
                this.showValidationMsg['display'] = true;
                this.showValidationMsg['message'] = 'Answer is required';
            }
            else if (numberRegEx.test(this.questionsList[0]['answerValue']) && this.questionsList[0]['answerValue'].length == 12) {
                this.showValidationMsg['display'] = false;
                this.showNextQuestion();
            }
            else {
                this.showValidationMsg['display'] = true;
                this.showValidationMsg['message'] = 'Enter valid Aadhar card number';
            }
        }
        else {
            if (this.questionsList[0]['answerValue'] != '') {
                this.showValidationMsg['display'] = false;
                this.showNextQuestion();
            }
            else {
                this.showValidationMsg['display'] = true;
                this.showValidationMsg['message'] = 'Answer is required';
                // this.sharedService.showToastMesaages('error', 'Answer is required');
            }
        }
    }
    showNextQuestion() {
        this.showValidationMsg['display'] = false;
        if (this.currentQuestion < this.totalQuestions) {
            this.questionsList = [this.questionObject.sections[0].questions[this.currentQuestion]];
            if (this.questionsList[0]['attributeName'] == 'location_map') {
                let interval = setTimeout(() => {
                    this.selectMapQuestion(this.questionsList[0]);
                    this.initMap({ lat: this.lat, lng: this.lng });
                    clearInterval(interval);
                }, 1000);
            }
            if (this.currentQuestion == (this.totalQuestions - 1)) {
                this.continueButtonText = "Submit";
            }
            this.currentQuestion++;
        }
        else if (this.currentQuestion == this.totalQuestions) {
            if (this.lat != 0 && this.lng != 0) {
                this.saveSurveyResponse();
            }
            else {
                this.openPopup(this.locationPopup);
            }
        }
    }
    saveSurveyResponse() {
        let surveySetQR = localStorage.getItem('ssid');
        let surveySetId = localStorage.getItem('surveySetId');
        let params = {
            dataRequestId: this.questionObject.id,
            dataRequestName: this.questionObject.name,
            dataSetId: surveySetId,
            dataSetQR: surveySetQR,
            bluenumberName: this.profileObject.name,
            location: [this.lat, this.lng],
            responses: []
        };
        this.questionObject.sections[0].questions.map((question) => {
            params['responses'].push({
                questionId: question.id,
                attributeId: question.attributeId,
                attributeName: question.attributeName,
                questionText: question.text,
                type: question.type,
                responses: question.type == 'Checkbox' ? question.answerValue : [question.answerValue],
                verifications: []
            });
        });
        if (localStorage.getItem('isProfileCompleted') == "false") {
            let isRegistrationProfileWithLocationMap = false;
            let name, gender, address;
            for (let cnt = 0; cnt < params['responses'].length; cnt++) {
                if (params['responses'][cnt].attributeName == 'location_map') {
                    isRegistrationProfileWithLocationMap = true;
                    address = params['responses'][cnt].responses[0];
                }
                if (params['responses'][cnt].attributeName.toLowerCase() == 'name') {
                    name = params['responses'][cnt].responses[0];
                    params['bluenumberName'] = name;
                }
                if (params['responses'][cnt].attributeName.toLowerCase() == 'gender') {
                    gender = params['responses'][cnt].responses[0];
                }
            }
            if (isRegistrationProfileWithLocationMap) {
                let profileParam = {
                    address: address,
                    blueNumber: this.blueNumber,
                    gender: gender,
                    latitude: this.profileLat,
                    longitude: this.profileLng,
                    name: name,
                    role: "Other"
                };
                this.sharedService.startLoader();
                this.dashboardService.updateProfileDetails(profileParam).subscribe((presult) => {
                    this.dashboardService.updateProfileStatus().subscribe((data) => {
                        this.saveSurveyResponses(params);
                    }, (error => {
                        if (error && error.error && error.error.responseException) {
                            this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
                        }
                    }));
                }, (error => {
                    if (error && error.error && error.error.responseException) {
                        this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
                    }
                }));
            }
            else {
                this.saveSurveyResponses(params);
            }
        }
        else {
            this.saveSurveyResponses(params);
        }
    }
    // *********** Method to Save a Survey Response ******************
    saveSurveyResponses(params) {
        this.sharedService.startLoader();
        this.surveyService.saveSurveyResponse(params).subscribe((res) => {
            if (!res['isError']) {
                if (localStorage.getItem('ssid') != 'null' && localStorage.getItem('ssid') != '' && this.sharedService.successErrorMsg['firstSurveyId']) {
                    // ******** If Survey type is SSID Fetch the Total Response count of survey ****************
                    this.surveyService.getSurveyResponseCount(localStorage.getItem('ssid'), this.sharedService.successErrorMsg['firstSurveyId']).subscribe((data) => {
                        if (!data['isError']) {
                            this.responseCount = data.result;
                            this.navigateToMessagesScreen();
                        }
                        else {
                            this.navigateToMessagesScreen();
                        }
                    }, ((error) => {
                        if (error && error.error && error.error.responseException) {
                            this.sharedService.showToastMesaages('error', error.error.responseException.exceptionMessage);
                        }
                        this.navigateToMessagesScreen();
                    }));
                }
                else {
                    this.navigateToMessagesScreen();
                }
            }
        });
    }
    // ******** Method to Navigate to Msg screen
    navigateToMessagesScreen() {
        if (localStorage.getItem('surveyType') == 'verify') {
            this.sharedService.successErrorMsg['message'] = "You have been verified!";
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
            this.sharedService.stopLoader();
            return;
        }
        if (localStorage.getItem('surveyType') == 'feedback') {
            this.sharedService.successErrorMsg['message'] =
                `${this.qrCodeData['currency']} ${this.qrCodeData['paymentOffered']}`;
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
            this.sharedService.stopLoader();
            return;
        }
        if (this.sharedService.successErrorMsg['nextSurveyId'] != '') {
            if (this.sharedService.successErrorMsg['nextSurveyId'] != this.surveyQRCode) {
                if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                    // this.sharedService.successErrorMsg['messageHeading'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey,
                    //  you are the ${this.responseCount}${this.numberNotation()} respondent of ${environment.maxSurveyParticipants} total `;
                    this.sharedService.successErrorMsg['firstSurveyId'] = '';
                    this.sharedService.successErrorMsg['isRequestSurvey'] = true;
                }
                this.sharedService.successErrorMsg['message'] = "AnswerNextSurvey";
                this.sharedService.successErrorMsg['showAcceptReject'] = false;
                this.sharedService.successErrorMsg['showProceed'] = false;
                this.router.navigateByUrl('/home/messages');
                //            this.router.navigateByUrl(`home/survey/${this.sharedService.successErrorMsg['nextSurveyId']}`);
                //            this.resetQuestions();
            }
            else {
                if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                    // this.sharedService.successErrorMsg['message'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey,
                    //  you are the ${this.responseCount}${this.numberNotation()} respondent of ${environment.maxSurveyParticipants} total `;
                    // if (this.responseCount <= environment.maxSurveyParticipants) {
                    //   this.sharedService.successErrorMsg['message'] = this.sharedService.successErrorMsg['message'] + ' and you are eligible for payment.'
                    // }
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    if (this.sharedService.successErrorMsg['firstSurveyId'] == this.sharedService.successErrorMsg['lastSurveyId']) {
                        this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                    }
                    else {
                        this.sharedService.successErrorMsg['isRequestSurvey'] = true;
                    }
                    this.sharedService.successErrorMsg['firstSurveyId'] = '';
                }
                else {
                    if (this.sharedService.successErrorMsg['lastSurveyId'] == this.surveyQRCode) {
                        // this.sharedService.successErrorMsg['messageHeading'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey`;
                        // if (Number(localStorage.getItem('currentSurveyDay')) <= 3) {
                        //   if (this.responseCount <= environment.maxSurveyParticipants) {
                        //     this.sharedService.successErrorMsg['messageHeading'] = this.sharedService.successErrorMsg['messageHeading'] + ' and you are eligible for payment.'
                        //   }
                        // }
                        // this.sharedService.successErrorMsg['message'] = "Thanks for completing the survey set.";
                        this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                        this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                    }
                    else {
                        // this.sharedService.successErrorMsg['messageHeading'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey`;
                        // if (Number(localStorage.getItem('currentSurveyDay')) <= 3) {
                        //   if (this.responseCount <= environment.maxSurveyParticipants) {
                        //     this.sharedService.successErrorMsg['messageHeading'] = this.sharedService.successErrorMsg['messageHeading'] + ' and you are eligible for payment.'
                        //   }
                        // }
                        // this.sharedService.successErrorMsg['message'] = "Thank you for completing today's survey. See you tomorrow!";
                        this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    }
                }
                this.sharedService.successErrorMsg['showAcceptReject'] = false;
                this.sharedService.successErrorMsg['showProceed'] = false;
                this.router.navigateByUrl('/home/messages');
            }
        }
        else {
            if (this.sharedService.successErrorMsg['firstSurveyId'] == this.surveyQRCode) {
                // this.sharedService.successErrorMsg['message'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey,
                //  you are the ${this.responseCount}${this.numberNotation()} respondent of ${environment.maxSurveyParticipants} total`;
                // if (this.responseCount <= environment.maxSurveyParticipants) {
                //   this.sharedService.successErrorMsg['message'] = this.sharedService.successErrorMsg['message'] + 'and you are eligible for payment.'
                // }
                this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                this.sharedService.successErrorMsg['firstSurveyId'] = '';
                this.sharedService.successErrorMsg['isRequestSurvey'] = true;
            }
            else {
                if (this.sharedService.successErrorMsg['lastSurveyId'] == this.surveyQRCode) {
                    // this.sharedService.successErrorMsg['messageHeading'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey`;
                    // if (Number(localStorage.getItem('currentSurveyDay')) <= 3) {
                    //   if (this.responseCount <= environment.maxSurveyParticipants) {
                    //     this.sharedService.successErrorMsg['messageHeading'] = this.sharedService.successErrorMsg['messageHeading'] + 'and you are eligible for payment.'
                    //   }
                    // }
                    // this.sharedService.successErrorMsg['message'] = "Thanks for completing the survey set.";
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                    this.sharedService.successErrorMsg['messageHeading'] = 'Survey Set Completed';
                }
                else {
                    // this.sharedService.successErrorMsg['messageHeading'] = `Today is Day ${localStorage.getItem('currentSurveyDay')} of this survey`;
                    // if (Number(localStorage.getItem('currentSurveyDay')) <= 3) {
                    //   if (this.responseCount <= environment.maxSurveyParticipants) {
                    //     this.sharedService.successErrorMsg['messageHeading'] = this.sharedService.successErrorMsg['messageHeading'] + 'and you are eligible for payment.'
                    //   }
                    // }
                    // this.sharedService.successErrorMsg['message'] = "Thank you for completing today's survey. See you tomorrow!";
                    this.sharedService.successErrorMsg['message'] = `Today's survey is done!`;
                }
            }
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('/home/messages');
        }
        this.sharedService.stopLoader();
    }
    numberNotation() {
        let count = this.responseCount % 10;
        switch (count) {
            case 0: return '';
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }
    resetQuestions() {
        this.questionsList = [];
        this.totalQuestions = 0;
        this.isFirstSurvey = true;
        this.currentQuestion = 0;
        let interval = setTimeout(() => {
            this.fetchSurveyIdDetails();
            clearTimeout(interval);
        }, 1000);
    }
    openPopup(popupName) {
        this.modalService.open(popupName, {
            size: 'md',
            windowClass: 'px-5'
        });
    }
    onDoneClick() {
        this.modalService.dismissAll();
        this.router.navigateByUrl('home');
    }
    closeAddressPopup() {
        this.modalService.dismissAll();
    }
    onBackClick() {
        if (this.currentQuestion <= 1) {
            this.router.navigateByUrl('/home');
        }
        else {
            this.showValidationMsg['display'] = false;
            this.continueButtonText = this.appId == 'mmind' ? 'Submit' : 'Next';
            // this.continueButtonText = "Continue";
            this.currentQuestion--;
            this.questionsList = [this.questionObject.sections[0].questions[this.currentQuestion - 1]];
            let interval = setTimeout(() => {
                this.selectMapQuestion(this.questionsList[0]);
                this.initMap({ lat: this.latitude, lng: this.longitude });
                clearInterval(interval);
            }, 1000);
        }
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    console.log("User Lat: ", this.lat);
                    console.log("User Lng: ", this.lng);
                    // this.getOARFacilities();
                    // ***************** COmment later ********************
                    // this.initMap({ lat: this.lat, lng: this.lng });
                    // if (this.lat == "" || this.lng == "") {
                    //   this.fetchProfileDetails();
                    // }
                }
            }, (error) => {
                console.log(error);
                this.fetchProfileDetails();
            });
            // if (this.lat == "" || this.lng == "") {
            //   this.fetchProfileDetails();
            // }
        }
        else {
            alert("Geolocation is not supported by this browser.");
            if (this.lat == "" || this.lng == "") {
                this.fetchProfileDetails();
            }
        }
    }
    fetchProfileDetails() {
        this.blueNumber = localStorage.getItem('personBluenumber');
        this.sharedService.startLoader();
        this.dashboardService.getProfileDetails(localStorage.getItem('personBluenumber')).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError'] && res['result']) {
                this.lat = res.result['latitude'];
                this.lng = res.result['longitude'];
                this.initMap({ lat: this.lat, lng: this.lng });
            }
        });
    }
    onFileUpload(event, questions) {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        this.sharedService.startLoader();
        this.dashboardService.uploadFileToSurvey(this.questionObject.id, formData).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                questions['answerValue'] = res['result'];
            }
        });
    }
    openGoWallet() {
        window.open('https://millionmakers.org/contact-us/#touchngowallet');
    }
}
SurveyQuestionsComponent.ɵfac = function SurveyQuestionsComponent_Factory(t) { return new (t || SurveyQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService)); };
SurveyQuestionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SurveyQuestionsComponent, selectors: [["app-survey-questions"]], viewQuery: function SurveyQuestionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.msgContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.noAddressPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.locationPopup = _t.first);
    } }, decls: 22, vars: 3, consts: [[1, "pma"], [1, "container"], [1, "pt-2", "surevey-question-font"], [1, "row"], [1, "col-md-12"], [1, "pma-heading", "text-gray-1", "mb-2", "d-flex"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pr-3", 3, "click"], ["class", "q-label mt-1", 4, "ngIf"], [1, "mb-3"], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["class", "bottom-position", 4, "ngIf"], ["content10", ""], ["content", ""], ["noAddressPopup", ""], ["locationPopup", ""], [1, "q-label", "mt-1"], [1, "p-4", "pe-0", "me-0"], [1, ""], [4, "ngIf"], ["class", "custom-control custom-radio pos-text", 4, "ngIf"], ["class", "text-center HP-RADIO-bottom-position p-4", 4, "ngIf"], ["class", "custom-control custom-checkbox mb-2", 4, "ngIf"], ["class", "px-4 pb-4", "style", "color: #ff0000", 4, "ngIf"], [1, "mb-2"], ["ngx-google-places-autocomplete", "", "placeholder", "Enter factory name or pin on the map below", "type", "text", 1, "form-control", "location-bor", "mb-2", 3, "ngModel", "ngModelOptions", "keyup", "ngModelChange", "onAddressChange"], ["placesRef", "ngx-places"], [1, "my-2"], ["id", "map", "elementAddedToView", "", 3, "ngInit"], ["type", "text", 1, "form-control", "location-bor", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["type", "text", "maxlength", "12", 1, "form-control", "location-bor", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["type", "number", 1, "form-control", "location-bor", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "form-control", "location-bor", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "custom-control", "custom-radio", "pos-text"], [1, "d-flex", "justify-content-between"], [4, "ngFor", "ngForOf"], ["class", "row text-center", 4, "ngIf"], ["type", "radio", 3, "id", "ngModelOptions", "value", "ngModel", "ngClass", "ngModelChange"], [1, "form-check-label", "text-capitalize", 3, "for"], [1, "row", "text-center"], ["src", "../../../assets/media/touch-n-go-ewallet-logo.svg", "alt", "", 1, "img-fluid"], [1, "text-center", "HP-RADIO-bottom-position", "p-4"], [1, "tng-text"], [1, "custom-control", "custom-checkbox", "mb-2"], ["type", "checkbox", 1, "form-check-input", "mb-3", 3, "id", "ngModelOptions", "value", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "for"], ["type", "file", 1, "form-control", "mb-3", "location-bor", 3, "change"], [1, "px-4", "pb-4", 2, "color", "#ff0000"], [1, "bottom-position"], [1, "d-flex", "justify-content-center", "p-0", "m-0", "mb-3"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-center", "pma-buttons", "px-4", "d-flex", "justify-content-around", "mb-2"], [1, "btn", "btn-mm-p", "btn-block", 3, "click"], ["class", "text-center", 4, "ngIf"], [3, "ngClass"], [1, "text-center"], ["autocomplete", "off", 1, "pma-modal", "pma"], [1, "modal-header", "header-custom", "border-bottom-0"], [1, "modal-title-save", "pl-3", "pl-md-2"], [1, "modal-body", "modal-body-space", "pb-0"], [1, "form-group", "mb-0"], [1, "col-12", "mb-4", "pl-0", "pr-0", "text-center"], [1, "row", "form-group", "pt-3", "d-flex", "justify-content-center"], [1, "text-center", "mb-5"], ["src", "../../../assets/media/tick.png", "alt", "", 1, "img-fluid", "p-success", "w-100", "mb-3"], [1, "modal-footer", "footer-custom", "pb-5", "pt-0", "border-top-0", "justify-content-center"], [1, "pma-buttons"], ["type", "button", 1, "btn", "btn-p", "btn-md", "btn-block", 3, "click"], [1, "btn", "btn-mm-p", "btn-lg", "btn-block", 3, "click"], [1, "modal-header", "mr-2", "mt-0", "ml-4", "border-bottom-0"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body", "pt-0", "mt-0"], [1, "pb-0", "pr-4", "pl-4", "pt-0"], [1, "row", "mb-5", "q-mx-5"], [1, "text-center", "pma-buttons", "pb-4"], [1, "pma-buttons", "bottom-position", "text-center"], [1, "btn", "btn-lg", "btn-block", 2, "background", "#AD0C62", "color", "white", 3, "click"]], template: function SurveyQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5)(6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SurveyQuestionsComponent_Template_i_click_6_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SurveyQuestionsComponent_h4_8_Template, 2, 1, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form")(10, "div")(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SurveyQuestionsComponent_div_12_Template, 15, 12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SurveyQuestionsComponent_div_13_Template, 8, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SurveyQuestionsComponent_ng_template_14_Template, 17, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SurveyQuestionsComponent_ng_template_16_Template, 19, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SurveyQuestionsComponent_ng_template_18_Template, 16, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SurveyQuestionsComponent_ng_template_20_Template, 13, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.appId == "mmind");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.questionsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSurveyLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__.GooglePlaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor], styles: [".toggle-sidemenu#map[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.toggle-sidemenu.logo[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 400px;\n  \n  width: 100%;\n  \n}\n\n.pma[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #545454;\n  font-size: 25px;\n}\n\n.pma[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #273B4A;\n  font-weight: 500;\n  font-size: 16px !important;\n  line-height: 19px;\n}\n\n.pma[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #273B4A;\n  font-size: 16px;\n}\n\n.pma[_ngcontent-%COMP%]   .pp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.pma[_ngcontent-%COMP%]   .tng-text[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 26px;\n  \n  text-align: center;\n}\n\n.pma[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 10px !important;\n}\n\n.pma[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background-color: #AD0C62 !important;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%] {\n  background-color: #0A4797;\n  font-size: 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-p-s[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n  font-size: 16px;\n  cursor: pointer;\n  padding: 13px !important;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-l[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-space[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.pma[_ngcontent-%COMP%]   .text-high[_ngcontent-%COMP%] {\n  min-height: 300px;\n}\n\n.pma[_ngcontent-%COMP%]   .text-high[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #273B4A;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.pma[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.pma[_ngcontent-%COMP%]   .p-success[_ngcontent-%COMP%] {\n  height: auto;\n  width: 120px !important;\n  display: inline-block;\n}\n\n.pma[_ngcontent-%COMP%]   .surevey-question-font[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 25px !important;\n  padding-bottom: 20px;\n  font-weight: 500;\n  line-height: 30px;\n  color: #000000;\n}\n\n.pma[_ngcontent-%COMP%]   .surevey-question-font[_ngcontent-%COMP%]   .content-scrl[_ngcontent-%COMP%] {\n  height: 384px !important;\n  overflow-y: scroll;\n}\n\n.pma[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: fit-content !important;\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: 300 !important;\n  color: #000000;\n}\n\n.pma[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n.pma[_ngcontent-%COMP%]   .location-bor[_ngcontent-%COMP%] {\n  border-radius: 0px !important;\n  border: none !important;\n  border-bottom: 1px solid grey !important;\n  padding: 0px !important;\n  margin-bottom: 10px !important;\n  color: #8A8A8A;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 35px;\n}\n\n.pma[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.pma[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]::after, .pma[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]::before {\n  width: 2.5rem !important;\n  height: 1.5rem !important;\n}\n\n.pma[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  padding-left: 10px !important;\n  font-size: 16px !important;\n  font-weight: 400;\n}\n\n.pma[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: none !important;\n}\n\n.pma[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::before {\n  background-color: #EA600E !important;\n  border-color: #EA600E !important;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #c4c4c4;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.circle-fill[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #AD0C62;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #AD0C62;\n  border-color: #AD0C62;\n}\n\n.HP-RADIO-bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 100px;\n  left: 0px;\n  right: 0px;\n}\n\n.bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  left: 0px;\n  right: 0px;\n}\n\n.bottom-position[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.bottom-position[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.bottom-position[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 15px;\n  list-style: none;\n  background-color: #EFEEEE;\n  border-radius: 50%;\n  margin: 2px;\n}\n\n  .mat-progress-bar-fill:after {\n  background-color: #AD0C62 !important;\n}\n\n  .mat-progress-bar-buffer {\n  background-color: #cbd0e9 !important;\n}\n\n  .mat-primary svg {\n  display: none !important;\n}\n\n  .mat-progress-bar {\n  height: 10px !important;\n  border-radius: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFLRTtFQUNFLGdCQ1lLO0VEWEwsY0NqQlE7RURrQlIsZUNJRztBRFBQOztBQU1FO0VBQ0UsY0NsQks7RURtQkwsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0U7RUFDRSxjQ3pCSztFRDBCTCxlQ2JHO0FEUVA7O0FBU0k7RUFDRSxlQ3BCQztBRGFQOztBQVdFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGVDN0JHO0FEbUJQOztBQWVFO0VBQ0UsY0N6RFM7RUQwRFQsZ0JBQUE7RUFDRCxlQUFBO0VBQ0EsaUJBQUE7RUFDSCxZQUFBO0VBRUEsa0JBQUE7QUFkQTs7QUFnQkU7RUFDRSx1QkFBQTtBQWRKOztBQWlCSTtFQUNFLG9DQUFBO0FBZk47O0FBc0JJO0VBQ0UseUJDL0VTO0VEZ0ZULGVDN0RDO0VEOERELGVDN0JJO0VEOEJKLG1CQzFDRTtFRDJDRixXQzNFSztBRHVEWDs7QUFzQk07RUFDRSxZQUFBO0FBcEJSOztBQXdCSTtFQUNFLHlCQzFGTztFRDJGUCxlQ3JFQztFRHNFRCxlQ3pDSTtFRDBDSixtQkN0REU7RUR1REYsV0N2Rks7RUR3RkwsZ0JBQUE7RUFDQSw4QkFBQTtFQUVBLFdBQUE7QUF2Qk47O0FBeUJNO0VBQ0UsWUFBQTtBQXZCUjs7QUEyQkk7RUFDRSx5QkN0R1k7RUR1R1osZUNyRkM7RURzRkQsZUN6REk7RUQwREosd0JBQUE7RUFDQSxtQkN2RUU7RUR3RUYsZ0JBQUE7QUF6Qk47O0FBMkJNO0VBQ0UsWUFBQTtBQXpCUjs7QUE4Qk07RUFDRSxtQkFBQTtBQTVCUjs7QUFpQ0U7RUFDRSxpQkFBQTtBQS9CSjs7QUFpQ0k7RUFDRSxjQ3hIRztFRHlISCxlQzlHQztFRCtHRCxnQkFBQTtBQS9CTjs7QUFtQ0U7RUFDRSxlQ3BIRztFRHFISCxnQkFBQTtBQWpDSjs7QUE0Q0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQTFDSjs7QUE4Q0k7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDcEpRO0FEd0dkOztBQThDSTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUE1Q047O0FBa0RFO0VBQ0Usa0NBQUE7RUFDQSxlQ3RKRztFRHVKSCxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0NuS1U7QURtSGQ7O0FBbURFO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtBQWpESjs7QUFtREU7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0QsZUFBQTtFQUNBLGlCQUFBO0FBakRIOztBQXFERTtFQUNFLGVDektHO0FEc0hQOztBQXVERTs7RUFFRSx3QkFBQTtFQUNBLHlCQUFBO0FBckRKOztBQXdERTtFQUNFLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtBQXZESjs7QUF5REU7RUFFRSxVQUFBO0VBQ0EsMkJBQUE7QUF4REo7O0FBMkRFO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQXpESjs7QUE2REE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDbk9vQjtFRG9PcEIscUJBQUE7RUFDQSxrQkFBQTtBQTFERjs7QUE2REE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDN09XO0VEOE9YLHFCQUFBO0VBQ0Esa0JBQUE7QUExREY7O0FBNkRBO0VBQ0UseUJDblBXO0VEb1BYLHFCQ3BQVztBRDBMYjs7QUE2REE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBMURGOztBQThEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUEzREY7O0FBNERFO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0FBM0RKOztBQTZESTtFQUNFLHlCQzFRTztFRDJRUCwyQ0FBQTtBQTNETjs7QUE2REk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEzRE47O0FBbUVBO0VBQ0Usb0NBQUE7QUFoRUY7O0FBa0VBO0VBRUUsb0NBQUE7QUFoRUY7O0FBbUVBO0VBRUUsd0JBQUE7QUFqRUY7O0FBb0VBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtBQWpFRiIsImZpbGUiOiJzdXJ2ZXktcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4udG9nZ2xlLXNpZGVtZW51I21hcCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRvZ2dsZS1zaWRlbWVudS5sb2dvIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIFRoZSB3aWR0aCBpcyB0aGUgd2lkdGggb2YgdGhlIHdlYiBwYWdlICovXHJcbn1cclxuXHJcbi8vIE5hdmlnYXRpb25cclxuLnBtYSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy02MDA7XHJcbiAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjU7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBjb2xvcjogJGJsdWlzaDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6ICRmLTE2ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAkYmx1aXNoO1xyXG4gICAgZm9udC1zaXplOiAkZi0xNjtcclxuICB9XHJcblxyXG4gIC5wcC10ZXh0IHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6ICRmLTE0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnAtc3VjY2VzcyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAkZi0xNjtcclxuICB9XHJcbiAgLy8gLnBvcy10ZXh0e1xyXG4gIC8vICAgaGVpZ2h0OiAzMDBweDtcclxuICAvLyB9XHJcbiAgLnRuZy10ZXh0e1xyXG4gICAgY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICBsaW5lLWhlaWdodDogMjZweDtcclxuLyogb3IgMjAwJSAqL1xyXG5cclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHJvZ3Jlc3N7XHJcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuXHJcblxyXG4gICAgLnByb2dyZXNzLWJhcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnkgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBtYS1idXR0b25zIHtcclxuICAgIC5idG4tcC1zIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xMjtcclxuICAgICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgICBjb2xvcjogJGJnLXdoaXRlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1tbS1wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICAgIGN1cnNvcjogJHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgY29sb3I6ICRiZy13aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1saWdodC1ncmF5O1xyXG4gICAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc3BhY2Uge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtaGlnaCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRibHVpc2g7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLy8gLnEtbGFiZWwge1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgLy8gICBjb2xvcjogJGJnLXdoaXRlXHJcbiAgLy8gICBwYWRkaW5nOiAkcGFkZC0xMDtcclxuICAvLyAgIGZvbnQtc2l6ZTogJGYtMjU7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6ICRwYWRkLTIwICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG5cclxuICAucC1zdWNjZXNzIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLnN1cmV2ZXktcXVlc3Rpb24tZm9udCB7XHJcbiAgICBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGYtMjUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtc2NybHtcclxuICAgICAgaGVpZ2h0OiAzODRweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcblxyXG4gIH1cclxuICAuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubG9jYXRpb24tYm9ye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXkhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzhBOEE4QTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXQrbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAkZi0yNTtcclxuICAgIC8vIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jaGVjay1sYWJlbDo6YWZ0ZXIsXHJcbiAgLmZvcm0tY2hlY2stbGFiZWw6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAkZi0xNiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXN7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIGhzbCgzMjgsIDg3JSwgMzYlKTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2Vkfi5mb3JtLWNoZWNrLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXN1Y2Nlc3MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogJG1tLXN1Y2Nlc3MgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnktZGlzYWJsZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNpcmNsZS1maWxsIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gIGJvcmRlci1jb2xvcjogJG1tLXByaW1hcnk7XHJcbn1cclxuXHJcbi5IUC1SQURJTy1ib3R0b20tcG9zaXRpb257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcblxyXG4uYm90dG9tLXBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIHVse1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFjdGl2ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUVFRTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgLy8gYW5pbWF0aW9uOiBib3VuY2UgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnkhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQwZTkhaW1wb3J0YW50O1xyXG4gIC8vIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtcHJpbWFyeSBzdmdcclxue1xyXG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXJ7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gdGhpcyBpcyBmb3IgdGhlIHJhZGlvIHR5cGUgY29sb3JcclxuLy8gc2VsZWN0IGZpcnN0IGZvdW5kIGNsYXNzIGhwLXJhZGlvXHJcbi8vIGFuZCB0aGVuIHNlbGVjdCB0aGUgaW5wdXQgdGFnXHJcblxyXG4vLy5ocC1yYWRpbzpudGgtb2YtdHlwZSgxKTpjaGVja2VkIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICMxOEJBMzI7XHJcbi8vICBib3JkZXItY29sb3I6ICMxOEJBMzI7XHJcbi8vfVxyXG4vL1xyXG4vLy5ocC1yYWRpbzpudGgtb2YtdHlwZSgyKTpjaGVja2VkIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNFNjAwMDA7XHJcbi8vICBib3JkZXItY29sb3I6ICNFNjAwMDA7XHJcbi8vfVxyXG5cclxuXHJcbiAvLy5mb3ItZ3JlZW46Y2hlY2tlZCB7XHJcbiAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzE4QkEzMjtcclxuIC8vICBib3JkZXItY29sb3I6ICMxOEJBMzI7XHJcbiAvL31cclxuIC8vXHJcbiAvLy5mb3ItcmVkOmNoZWNrZWQge1xyXG4gLy8gIGJhY2tncm91bmQtY29sb3I6ICNFNjAwMDA7XHJcbiAvLyAgYm9yZGVyLWNvbG9yOiAjRTYwMDAwO1xyXG4gLy99XHJcbiIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 526:
/*!****************************************************************!*\
  !*** ./src/app/dashboard/upi-details/upi-details.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpiDetailsComponent": () => (/* binding */ UpiDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _upi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upi.service */ 5161);
/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../survey.service */ 3525);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);










function UpiDetailsComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " UPI ID is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpiDetailsComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Enter valid UPI ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class UpiDetailsComponent {
    constructor(router, sharedService, upiService, surveyService) {
        this.router = router;
        this.sharedService = sharedService;
        this.upiService = upiService;
        this.surveyService = surveyService;
        this.upiControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(25)]);
    }
    ngOnInit() {
        if (localStorage.getItem('ssid') != null && localStorage.getItem('ssid') != 'null' && localStorage.getItem('ssid') != '') {
            this.fetchSurveySetSSIDDetails();
        }
    }
    // ********** Method to fetch the Survey Info based on SSID  ************************
    fetchSurveySetSSIDDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe(res => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                if (res['result']['isUpiDetailsExist']) {
                    this.sharedService.showToastMesaages('info', 'UPI details already exist');
                    this.router.navigateByUrl('home/info');
                }
            }
        });
    }
    onBackClick() {
        this.router.navigateByUrl(`/home/info`);
    }
    onUpiIdSubmit() {
        let upi = '';
        upi = this.upiControl.value;
        this.saveBankDetails(upi);
    }
    // *********** API to upi Bank Details ****************
    saveBankDetails(upiId) {
        this.sharedService.startLoader();
        this.upiService.saveUserUpiDetails({
            upiId: upiId,
            surveySetId: localStorage.getItem('surveySetId'),
        }).subscribe((res) => {
            if (!res['isError']) {
                this.sharedService.showToastMesaages('success', 'User UPI details saved successfully');
                this.router.navigateByUrl('home/info');
            }
            this.sharedService.stopLoader();
        });
    }
}
UpiDetailsComponent.ɵfac = function UpiDetailsComponent_Factory(t) { return new (t || UpiDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_upi_service__WEBPACK_IMPORTED_MODULE_1__.UpiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService)); };
UpiDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpiDetailsComponent, selectors: [["app-upi-details"]], decls: 18, vars: 3, consts: [[1, "pma", "bank-ifsc-details"], [1, "container"], [1, "row"], [1, "col-12"], [1, "pma-heading", "text-gray-1", "mb-5"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "upi-detalis-heading", "mb-4"], [1, "upi-detalis-description", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "placeholder", "Enter your UPI ID", "aria-label", "Enter your UPI ID", "matInput", "", "minlength", "5", "maxlength", "20", 3, "formControl"], ["class", "m-mt-sm", 4, "ngIf"], [1, "pma-buttons", "bottom-position", "mt-3", "text-center", "p-4"], ["mat-raised-button", "", 1, "btn", "btn-mm-p", "w-100", "padding-y", 3, "click"], [1, "m-mt-sm"]], template: function UpiDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpiDetailsComponent_Template_i_click_5_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Pay to my UPI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Fill UPI Details : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Please enter your UPI ID which is linked to the mobile number, registered in this application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, UpiDetailsComponent_mat_error_13_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UpiDetailsComponent_mat_error_14_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpiDetailsComponent_Template_button_click_16_listener() { return ctx.onUpiIdSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.upiControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.upiControl.hasError("required") && ctx.upiControl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.upiControl.hasError("minlength") && ctx.upiControl.touched);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: [".pma[_ngcontent-%COMP%] {\n  padding: 16px 10px;\n}\n.pma[_ngcontent-%COMP%]   .upi-detalis-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #000000;\n}\n.pma[_ngcontent-%COMP%]   .upi-detalis-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #000000;\n}\n.pma[_ngcontent-%COMP%]   h1.pma-heading[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 30px;\n}\n.pma[_ngcontent-%COMP%]   h1.pma-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .text-gray[_ngcontent-%COMP%] {\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  color: #545454;\n}\n.pma[_ngcontent-%COMP%]   .example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.pma[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: #000000;\n  line-height: 30px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px !important;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 400;\n  padding: 7px 18px;\n}\n.pma[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .bankdetilas-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #000000;\n}\n.pma[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .ifsc-code-details[_ngcontent-%COMP%]   .pma-buttons[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.pma[_ngcontent-%COMP%]   .padding-y[_ngcontent-%COMP%] {\n  padding: 14px !important;\n}\n.pma[_ngcontent-%COMP%]   .review-data[_ngcontent-%COMP%], .pma[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #545454;\n  line-height: 19px;\n}\n.pma[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 500;\n}\n.pma[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #000000;\n  line-height: 17px;\n}\n.pma[_ngcontent-%COMP%]   .branch-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #545454;\n  line-height: 14px;\n}\n.pma[_ngcontent-%COMP%]   .have-ifsc-code[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.branch-details[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.pma[_ngcontent-%COMP%]   .have-ifsc-code[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.review-data[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.m-mt-sm[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwaS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxlQ2lCRztFRGhCSCxnQkMyQks7RUQxQkwsaUJBQUE7RUFDQSxjQ0dVO0FETmQ7QUFNRTtFQUNFLGVDU0c7RURSSCxnQkNvQks7RURuQkwsaUJBQUE7RUFDQSxjQ0pVO0FEQWQ7QUFPRTtFQUNFLGVDT0c7RUROSCxnQkNhSztFRFpMLGNDVlU7RURXVixpQkFBQTtBQUxKO0FBT0k7RUFDRSxjQ3JCTTtBRGdCWjtBQVNFO0VBQ0UsY0MxQlE7QURtQlo7QUFVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQVJKO0FBVUk7RUFDRSxnQkNORztFRE9ILGVDcEJDO0VEcUJELGlCQUFBO0VBQ0EsY0N2Q007QUQrQlo7QUFZRTtFQUNFLFdBQUE7QUFWSjtBQWFFO0VBQ0UsZUMzQkc7RUQ0QkgsZ0JDcEJLO0VEcUJMLGNDM0NVO0VENENWLGlCQUFBO0FBWEo7QUFlSTtFQUNFLHlCQzdETztFRDhEUCwwQkFBQTtFQUNBLGVDWkk7RURhSixtQkN6QkU7RUQwQkYsV0MxREs7RUQyREwsZ0JBQUE7RUFDQSxpQkFBQTtBQWJOO0FBZU07RUFDRSxZQUFBO0FBYlI7QUFvQkU7RUFDRSxlQ3ZERztFRHdESCxnQkM3Q0s7RUQ4Q0wsaUJBQUE7RUFDQSxjQ3JFVTtBRG1EZDtBQXFCRTtFQUNFLFdBQUE7QUFuQko7QUF5Qk07RUFDRSxhQUFBO0FBdkJSO0FBNEJFO0VBQ0Usd0JBQUE7QUExQko7QUE2QkU7O0VBRUUsZUNqRkc7RURrRkgsZ0JDckVLO0VEc0VMLGNDcEdRO0VEcUdSLGlCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsY0NsR1U7RURtR1YsZ0JDN0VLO0FEaURUO0FBK0JFO0VBQ0UsZUMvRkc7RURnR0gsZ0JDakZLO0VEa0ZMLGNDekdVO0VEMEdWLGlCQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsZUN4R0c7RUR5R0gsZ0JDdkZLO0VEd0ZMLGNDdkhRO0VEd0hSLGlCQUFBO0FBOUJKO0FBbUNNO0VBQ0UsbUJBQUE7QUFqQ1I7QUFvQ007RUFDRSxxQkFBQTtBQWxDUjtBQTBDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUF2Q0Y7QUEyQ0E7RUFDRSxlQUFBO0FBeENGIiwiZmlsZSI6InVwaS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbi5wbWEge1xyXG4gIHBhZGRpbmc6IDE2cHggMTBweDtcclxuXHJcbiAgLnVwaS1kZXRhbGlzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAkZi0xODtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLnVwaS1kZXRhbGlzLWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgaDEucG1hLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAkZi0yNTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNTAwO1xyXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJHRleHQtZ3JheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0LWdyYXkge1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgIG1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgICBmb250LXdlaWdodDogJGZ3LTQwMDtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnJhZGlvLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTUwMDtcclxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIC5wbWEtYnV0dG9ucyB7XHJcbiAgICAuYnRuLW1tLXAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgICAgZm9udC1zaXplOiAkZi0xNiAhaW1wb3J0YW50O1xyXG4gICAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYnItMTA7XHJcbiAgICAgIGNvbG9yOiAkYmctd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHBhZGRpbmc6IDdweCAxOHB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gICBJRiBJRlNDIENvZGUgTm8gXHJcbiAgLmJhbmtkZXRpbGFzLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTg7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgfVxyXG5cclxuICAuaWZzYy1jb2RlLWRldGFpbHMge1xyXG4gICAgLnBtYS1idXR0b25zIHtcclxuICAgICAgLmJ0bi1tbS1wIHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGFkZGluZy15IHtcclxuICAgIHBhZGRpbmc6IDE0cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yZXZpZXctZGF0YSxcclxuICBtYXQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAkZi0xNjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNDAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXk7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICB9XHJcblxyXG4gIG1hdC1sYWJlbCB7XHJcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy01MDA7XHJcbiAgfVxyXG5cclxuICAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgZm9udC1zaXplOiAkZi0xNDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctNDAwO1xyXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmJyYW5jaC1kZXRhaWxzIHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTI7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LTMwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1ncmF5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuaGF2ZS1pZnNjLWNvZGUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaS5icmFuY2gtZGV0YWlscyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkucmV2aWV3LWRhdGEge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uYm90dG9tLXBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcblxyXG59XHJcblxyXG4ubS1tdC1zbSB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59IiwiLy8gUE1BIENvbG9yc1xyXG4kdGV4dC1wcmltYXJ5OiAjMEE0Nzk3O1xyXG4kbW0tcHJpbWFyeTogI0FEMEM2MjtcclxuJG1tLXByaW1hcnktZGlzYWJsZWQ6ICNjNGM0YzQ7XHJcbiRtbS1zZWNvbmRhcnk6ICM2MjFDNDM7XHJcbiRtbS1zdWNjZXNzOiAjRUE2MDBFO1xyXG4kdGV4dC1saWdodC1ncmF5OiAjRjhGOEY4O1xyXG4kdGV4dC1ncmF5OiAjNTQ1NDU0O1xyXG4kZ3JheS1iZzogI0Y4RjhGODtcclxuJGJnLXdoaXRlOiAjZmZmO1xyXG4kZ3JheS1ib3JkZXI6ICNEQURBREE7XHJcbiRibHVpc2g6ICMyNzNCNEE7XHJcbiRiZy1saWdodDogI0YzRjNGMztcclxuJHdoaXRlLWNvbG9yOiNGRkZGRkY7XHJcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcclxuJHllc2J0bi1ibHVlOiAjMUM0REExO1xyXG4kbm9idG4tbGlnaHQ6ICM0NDcyQzQ7XHJcbi8vIFBNQSBGb250IFNpemVzXHJcbiRmLTEwOiAxMHB4OyAgICAgICBcclxuJGYtMTE6IDExcHg7ICAgICAgIFxyXG4kZi0xMjogMTJweDsgICAgICAgXHJcbiRmLTEzOiAxM3B4OyAgICAgICBcclxuJGYtMTQ6IDE0cHg7XHJcbiRmLTE1OiAxNXB4O1xyXG4kZi0xNjogMTZweDsgICAgXHJcbiRmLTE4OiAxOHB4OyAgICBcclxuJGYtMTk6IDE5cHg7XHJcbiRmLTIwOiAyMHB4O1xyXG4kZi0yNDogMjRweDtcclxuJGYtMjU6IDI1cHg7XHJcbiRmLTMwOiAzMHB4O1xyXG4kZi0zNjogMzZweDtcclxuJGYtNDA6IDQwcHg7XHJcblxyXG4vLyBQTUEgRm9udCBXZWlnaHRcclxuJGZ3LTYwMDogNjAwO1xyXG4kZnctNTAwOiA1MDA7XHJcbiRmdy00MDA6IDQwMDtcclxuJGZ3LTMwMDogMzAwO1xyXG5cclxuLy8gUE1BIFJhZGl1c1xyXG4kYnItMTA6IDEwcHg7XHJcblxyXG4vLyBQTUEgUGFkZGluZ3NcclxuJHBhZGQtMTA6IDEwcHg7XHJcbiRwYWRkLTIwOiAyMHB4O1xyXG4kcGFkZC0zMDogMzBweDtcclxuXHJcblxyXG4vLyBQTUEgMCBWYWx1ZXNcclxuJHZhbHVlLTA6IDBweDtcclxuXHJcbi8vIFBNQSBDdXJzb3JzXHJcbiRwb2ludGVyOiBwb2ludGVyO1xyXG5cclxuLy8gZm9udC1mYW1pbHlcclxuJGZvbnQtZmFtaWx5OidMYXRvJywgc2Fucy1zZXJpZjtcclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 5161:
/*!******************************************!*\
  !*** ./src/app/dashboard/upi.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpiService": () => (/* binding */ UpiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class UpiService {
    constructor(http) {
        this.http = http;
    }
    saveUserUpiDetails(params) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Upi`, params);
    }
}
UpiService.ɵfac = function UpiService_Factory(t) { return new (t || UpiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UpiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpiService, factory: UpiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1387:
/*!**********************************************!*\
  !*** ./src/app/pipes/blue-no-format.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlueNoFormatPipe": () => (/* binding */ BlueNoFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BlueNoFormatPipe {
    transform(value, ...args) {
        if (value) {
            return value.substring(0, 5) + '-' + value.substring(5, 10) + '-' + value.substring(10, 15) + '-' + value.substring(15, 20);
        }
        return value;
    }
}
BlueNoFormatPipe.ɵfac = function BlueNoFormatPipe_Factory(t) { return new (t || BlueNoFormatPipe)(); };
BlueNoFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "blueNoFormat", type: BlueNoFormatPipe, pure: true });


/***/ }),

/***/ 4929:
/*!********************************************!*\
  !*** ./src/app/pipes/number-fixed.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberFixedPipe": () => (/* binding */ NumberFixedPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NumberFixedPipe {
    transform(value, fixedValue = 2) {
        if (value) {
            return value.toFixed(fixedValue);
        }
        return value;
    }
}
NumberFixedPipe.ɵfac = function NumberFixedPipe_Factory(t) { return new (t || NumberFixedPipe)(); };
NumberFixedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberFixed", type: NumberFixedPipe, pure: true });


/***/ }),

/***/ 8357:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(__webpack_require__(/*! @angular/core */ 3184),exports, __webpack_require__(/*! @angular/core */ 3184)) :
	0;
}(this, (function (ɵngcc0,exports,_angular_core) { 'use strict';

var Options = (function () {
    /**
     * @param {?=} opt
     */
    function Options(opt) {
        if (!opt)
            return;
        Object.assign(this, opt);
    }
    return Options;
}());

var GooglePlaceDirective = (function () {
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    function GooglePlaceDirective(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.onAddressChange = new _angular_core.EventEmitter();
    }
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.ngAfterViewInit = function () {
        if (!this.options)
            this.options = new Options();
        this.initialize();
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.isGoogleLibExists = function () {
        return !(!google || !google.maps || !google.maps.places);
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.initialize = function () {
        var _this = this;
        if (!this.isGoogleLibExists())
            throw new Error("Google maps library can not be found");
        this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        if (!this.autocomplete)
            throw new Error("Autocomplete is not initialized");
        if (!this.autocomplete.addListener != null) {
            this.eventListener = this.autocomplete.addListener('place_changed', function () {
                _this.handleChangeEvent();
            });
        }
        this.el.nativeElement.addEventListener('keydown', function (event) {
            if (!event.key) {
                return;
            }
            var /** @type {?} */ key = event.key.toLowerCase();
            if (key == 'enter' && event.target === _this.el.nativeElement) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487
        if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            setTimeout(function () {
                var /** @type {?} */ containers = document.getElementsByClassName('pac-container');
                if (containers) {
                    var /** @type {?} */ arr = Array.from(containers);
                    if (arr) {
                        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                            var container = arr_1[_i];
                            if (!container)
                                continue;
                            container.addEventListener('touchend', function (e) {
                                e.stopImmediatePropagation();
                            });
                        }
                    }
                }
            }, 500);
        }
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.reset = function () {
        this.autocomplete.setComponentRestrictions(this.options.componentRestrictions);
        this.autocomplete.setTypes(this.options.types);
    };
    /**
     * @return {?}
     */
    GooglePlaceDirective.prototype.handleChangeEvent = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.place = _this.autocomplete.getPlace();
            if (_this.place) {
                _this.onAddressChange.emit(_this.place);
            }
        });
    };
    /**
     * @nocollapse
     */
    GooglePlaceDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    GooglePlaceDirective.propDecorators = {
        'options': [{ type: _angular_core.Input, args: ['options',] },],
        'onAddressChange': [{ type: _angular_core.Output },],
    };
GooglePlaceDirective.ɵfac = function GooglePlaceDirective_Factory(t) { return new (t || GooglePlaceDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
GooglePlaceDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: GooglePlaceDirective, selectors: [["", "ngx-google-places-autocomplete", ""]], inputs: { options: "options" }, outputs: { onAddressChange: "onAddressChange" }, exportAs: ["ngx-places"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GooglePlaceDirective, [{
        type: _angular_core.Directive,
        args: [{
                selector: '[ngx-google-places-autocomplete]',
                exportAs: 'ngx-places'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { onAddressChange: [{
            type: _angular_core.Output
        }], options: [{
            type: _angular_core.Input,
            args: ['options']
        }] }); })();
    return GooglePlaceDirective;
}());

var GooglePlaceModule = (function () {
    function GooglePlaceModule() {
    }
    /**
     * @nocollapse
     */
    GooglePlaceModule.ctorParameters = function () { return []; };
GooglePlaceModule.ɵfac = function GooglePlaceModule_Factory(t) { return new (t || GooglePlaceModule)(); };
GooglePlaceModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: GooglePlaceModule });
GooglePlaceModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(GooglePlaceModule, [{
        type: _angular_core.NgModule,
        args: [{
                declarations: [GooglePlaceDirective],
                exports: [GooglePlaceDirective]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GooglePlaceModule, { declarations: [GooglePlaceDirective], exports: [GooglePlaceDirective] }); })();
    return GooglePlaceModule;
}());

exports.GooglePlaceModule = GooglePlaceModule;
exports.GooglePlaceDirective = GooglePlaceDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));



/***/ }),

/***/ 3188:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/autocomplete.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatAutocomplete": () => (/* binding */ MatAutocomplete),
/* harmony export */   "MatAutocompleteModule": () => (/* binding */ MatAutocompleteModule),
/* harmony export */   "MatAutocompleteOrigin": () => (/* binding */ MatAutocompleteOrigin),
/* harmony export */   "MatAutocompleteSelectedEvent": () => (/* binding */ MatAutocompleteSelectedEvent),
/* harmony export */   "MatAutocompleteTrigger": () => (/* binding */ MatAutocompleteTrigger),
/* harmony export */   "_MatAutocompleteBase": () => (/* binding */ _MatAutocompleteBase),
/* harmony export */   "_MatAutocompleteOriginBase": () => (/* binding */ _MatAutocompleteOriginBase),
/* harmony export */   "_MatAutocompleteTriggerBase": () => (/* binding */ _MatAutocompleteTriggerBase),
/* harmony export */   "getMatAutocompleteMissingPanelError": () => (/* binding */ getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);





















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */

const _c0 = ["panel"];

function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
  }
}

const _c1 = ["*"];
let _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */

class MatAutocompleteSelectedEvent {
  constructor(
  /** Reference to the autocomplete panel that emitted the event. */
  source,
  /** Option that was selected. */
  option) {
    this.source = source;
    this.option = option;
  }

} // Boilerplate for applying mixins to MatAutocomplete.

/** @docs-private */


const _MatAutocompleteMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {});
/** Injection token to be used to override the default options for `mat-autocomplete`. */


const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
  providedIn: 'root',
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false
  };
}
/** Base class with all of the `MatAutocomplete` functionality. */


class _MatAutocompleteBase extends _MatAutocompleteMixinBase {
  constructor(_changeDetectorRef, _elementRef, defaults, platform) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Whether the autocomplete panel should be visible, depending on option length. */

    this.showPanel = false;
    this._isOpen = false;
    /** Function that maps an option's control value to its display value in the trigger. */

    this.displayWith = null;
    /** Event that is emitted whenever an option from the list is selected. */

    this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits whenever an option is activated. */

    this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._classList = {};
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

    this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`; // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
    // Safari using VoiceOver. We should occasionally check back to see whether the bug
    // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
    // option altogether.

    this.inertGroups = (platform === null || platform === void 0 ? void 0 : platform.SAFARI) || false;
    this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
  }
  /** Whether the autocomplete panel is open. */


  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */


  get autoActiveFirstOption() {
    return this._autoActiveFirstOption;
  }

  set autoActiveFirstOption(value) {
    this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */


  set classList(value) {
    if (value && value.length) {
      this._classList = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceStringArray)(value).reduce((classList, className) => {
        classList[className] = true;
        return classList;
      }, {});
    } else {
      this._classList = {};
    }

    this._setVisibilityClasses(this._classList);

    this._elementRef.nativeElement.className = '';
  }

  ngAfterContentInit() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.ActiveDescendantKeyManager(this.options).withWrap();
    this._activeOptionChanges = this._keyManager.change.subscribe(index => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    }); // Set the initial visibility state.

    this._setVisibility();
  }

  ngOnDestroy() {
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */


  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */


  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */


  _setVisibility() {
    this.showPanel = !!this.options.length;

    this._setVisibilityClasses(this._classList);

    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */


  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */


  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }

    const labelExpression = labelId ? labelId + ' ' : '';
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */


  _setVisibilityClasses(classList) {
    classList[this._visibleClass] = this.showPanel;
    classList[this._hiddenClass] = !this.showPanel;
  }

}

_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) {
  return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform));
};

_MatAutocompleteBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteBase,
  viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    displayWith: "displayWith",
    autoActiveFirstOption: "autoActiveFirstOption",
    panelWidth: "panelWidth",
    classList: ["class", "classList"]
  },
  outputs: {
    optionSelected: "optionSelected",
    opened: "opened",
    closed: "closed",
    optionActivated: "optionActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoActiveFirstOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    optionActivated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }]
  });
})();

class MatAutocomplete extends _MatAutocompleteBase {
  constructor() {
    super(...arguments);
    this._visibleClass = 'mat-autocomplete-visible';
    this._hiddenClass = 'mat-autocomplete-hidden';
  }

}

MatAutocomplete.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocomplete_BaseFactory;
  return function MatAutocomplete_Factory(t) {
    return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocomplete)))(t || MatAutocomplete);
  };
}();

MatAutocomplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatAutocomplete,
  selectors: [["mat-autocomplete"]],
  contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  hostAttrs: [1, "mat-autocomplete"],
  inputs: {
    disableRipple: "disableRipple"
  },
  exportAs: ["matAutocomplete"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatAutocomplete
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
  template: function MatAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
  styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-autocomplete',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      exportAs: 'matAutocomplete',
      inputs: ['disableRipple'],
      host: {
        'class': 'mat-autocomplete'
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"]
    }]
  }], null, {
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOption, {
        descendants: true
      }]
    }]
  });
})();
/** Injection token that determines the scroll handling while the autocomplete panel is open. */


const MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
/** @docs-private */

function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */


const MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */

const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatAutocompleteTrigger),
  multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */

function getMatAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + "you're attempting to open it after the ngAfterContentInit hook.");
}
/** Base class with all of the `MatAutocompleteTrigger` functionality. */


class _MatAutocompleteTriggerBase {
  constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._zone = _zone;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._formField = _formField;
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    this._defaults = _defaults;
    this._componentDestroyed = false;
    this._autocompleteDisabled = false;
    /** Whether or not the label state is being overridden. */

    this._manuallyFloatingLabel = false;
    /** Subscription to viewport size changes. */

    this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /**
     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
     * closed autocomplete from being reopened if the user switches to another browser tab and then
     * comes back.
     */

    this._canOpenOnNextFocus = true;
    /** Stream of keyboard events that can close the panel. */

    this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     */

    this._windowBlurHandler = () => {
      // If the user blurred the window while the autocomplete is focused, it means that it'll be
      // refocused when they come back. In this case we want to skip the first focus event, if the
      // pane was closed, in order to avoid reopening it unintentionally.
      this._canOpenOnNextFocus = this._document.activeElement !== this._element.nativeElement || this.panelOpen;
    };
    /** `View -> model callback called when value changes` */


    this._onChange = () => {};
    /** `View -> model callback called when autocomplete has been touched` */


    this._onTouched = () => {};
    /**
     * Position of the autocomplete panel relative to the trigger element. A position of `auto`
     * will render the panel underneath the trigger if there is enough space for it to fit in
     * the viewport, otherwise the panel will be shown above it. If the position is set to
     * `above` or `below`, the panel will always be shown above or below the trigger. no matter
     * whether it fits completely in the viewport.
     */


    this.position = 'auto';
    /**
     * `autocomplete` attribute to be set on the input element.
     * @docs-private
     */

    this.autocompleteAttribute = 'off';
    this._overlayAttached = false;
    /** Stream of changes to the selection state of the autocomplete options. */

    this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => {
      const options = this.autocomplete ? this.autocomplete.options : null;

      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...options.map(option => option.onSelectionChange))));
      } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
      // Return a stream that we'll replace with the real one once everything is in place.


      return this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => this.optionSelections));
    });
    this._scrollStrategy = scrollStrategy;
  }
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */


  get autocompleteDisabled() {
    return this._autocompleteDisabled;
  }

  set autocompleteDisabled(value) {
    this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  ngAfterViewInit() {
    const window = this._getWindow();

    if (typeof window !== 'undefined') {
      this._zone.runOutsideAngular(() => window.addEventListener('blur', this._windowBlurHandler));
    }
  }

  ngOnChanges(changes) {
    if (changes['position'] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);

      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }

  ngOnDestroy() {
    const window = this._getWindow();

    if (typeof window !== 'undefined') {
      window.removeEventListener('blur', this._windowBlurHandler);
    }

    this._viewportSubscription.unsubscribe();

    this._componentDestroyed = true;

    this._destroyPanel();

    this._closeKeyEventStream.complete();
  }
  /** Whether or not the autocomplete panel is open. */


  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  /** Opens the autocomplete suggestion panel. */


  openPanel() {
    this._attachOverlay();

    this._floatLabel();
  }
  /** Closes the autocomplete suggestion panel. */


  closePanel() {
    this._resetLabel();

    if (!this._overlayAttached) {
      return;
    }

    if (this.panelOpen) {
      // Only emit if the panel was visible.
      // The `NgZone.onStable` always emits outside of the Angular zone,
      // so all the subscriptions from `_subscribeToClosingActions()` are also outside of the Angular zone.
      // We should manually run in Angular zone to update UI after panel closing.
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }

    this.autocomplete._isOpen = this._overlayAttached = false;

    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();

      this._closingActionsSubscription.unsubscribe();
    } // Note that in some cases this can end up being called after the component is destroyed.
    // Add a check to ensure that we don't try to run change detection on a destroyed view.


    if (!this._componentDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      // This ensures that the label is reset when the
      // user clicks outside.
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */


  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */


  get panelClosingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this._overlayAttached)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)()).pipe( // Normalize the output so we return a consistent type.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(event => event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionSelectionChange ? event : null));
  }
  /** The currently active option, coerced to MatOption type. */


  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }

    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */


  _getOutsideClickStream() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.fromEvent)(this._document, 'click'), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.fromEvent)(this._document, 'auxclick'), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.fromEvent)(this._document, 'touchend')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(event => {
      // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
      // fall back to check the first element in the path of the click event.
      const clickTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getEventTarget)(event);

      const formField = this._formField ? this._formField._elementRef.nativeElement : null;
      const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
      return this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
      // true. Its main purpose is to handle the case where the input is focused from an
      // outside click which propagates up to the `body` listener within the same sequence
      // and causes the panel to close immediately (see #3106).
      this._document.activeElement !== this._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget);
    }));
  } // Implemented as part of ControlValueAccessor.


  writeValue(value) {
    Promise.resolve().then(() => this._setTriggerValue(value));
  } // Implemented as part of ControlValueAccessor.


  registerOnChange(fn) {
    this._onChange = fn;
  } // Implemented as part of ControlValueAccessor.


  registerOnTouched(fn) {
    this._onTouched = fn;
  } // Implemented as part of ControlValueAccessor.


  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }

  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.hasModifierKey)(event); // Prevent the default action on all escape key presses. This is here primarily to bring IE
    // in line with other browsers. By default, pressing escape on IE will cause it to revert
    // the input value to the one that it had on focus, however it won't dispatch any events
    // which means that the model value will be out of sync with the view.

    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.ESCAPE && !hasModifier) {
      event.preventDefault();
    }

    if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();

      this._resetActiveItem();

      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.DOWN_ARROW;

      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this.openPanel();
      }

      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
      }
    }
  }

  _handleInput(event) {
    let target = event.target;
    let value = target.value; // Based on `NumberValueAccessor` from forms.

    if (target.type === 'number') {
      value = value == '' ? null : parseFloat(value);
    } // If the input has a placeholder, IE will fire the `input` event on page load,
    // focus and blur, in addition to when the user actually changed the value. To
    // filter out all of the extra events, we save the value on focus and between
    // `input` events, and we check whether it changed.
    // See: https://connect.microsoft.com/IE/feedback/details/885747/


    if (this._previousValue !== value) {
      this._previousValue = value;

      this._onChange(value);

      if (this._canOpen() && this._document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }

  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;

      this._attachOverlay();

      this._floatLabel(true);
    }
  }

  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this.openPanel();
    }
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */


  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === 'auto') {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = 'always';
      }

      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */


  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      this._formField.floatLabel = 'auto';
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */


  _subscribeToClosingActions() {
    const firstStable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1));

    const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(() => this._positionStrategy.reapplyLastPosition()), // Defer emitting to the stream until the next tick, because changing
    // bindings in here will cause "changed after checked" errors.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.delay)(0)); // When the zone is stable initially, and when the option list changes...

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
    // that were created, and flatten it so our stream only emits closing events...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(() => {
      // The `NgZone.onStable` always emits outside of the Angular zone, thus we have to re-enter
      // the Angular zone. This will lead to change detection being called outside of the Angular
      // zone and the `autocomplete.opened` will also emit outside of the Angular.
      this._zone.run(() => {
        const wasOpen = this.panelOpen;

        this._resetActiveItem();

        this.autocomplete._setVisibility();

        this._changeDetectorRef.detectChanges();

        if (this.panelOpen) {
          this._overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
          // event, because we may not have emitted it when the panel was attached. This
          // can happen if the users opens the panel and there are no options, but the
          // options come in slightly later or as a result of the value changing.


          if (wasOpen !== this.panelOpen) {
            this.autocomplete.opened.emit();
          }
        }
      });

      return this.panelClosingActions;
    }), // when the first closing event occurs...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)) // set the value, close the panel, and complete.
    .subscribe(event => this._setValueAndClose(event));
  }
  /** Destroys the autocomplete suggestion panel. */


  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();

      this._overlayRef.dispose();

      this._overlayRef = null;
    }
  }

  _setTriggerValue(value) {
    const toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
    // The display value can also be the number zero and shouldn't fall back to an empty string.

    const inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
    // through change detection.

    if (this._formField) {
      this._formField._control.value = inputValue;
    } else {
      this._element.nativeElement.value = inputValue;
    }

    this._previousValue = inputValue;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */


  _setValueAndClose(event) {
    const source = event && event.source;

    if (source) {
      this._clearPreviousSelectedOption(source);

      this._setTriggerValue(source.value);

      this._onChange(source.value);

      this.autocomplete._emitSelectEvent(source);

      this._element.nativeElement.focus();
    }

    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */


  _clearPreviousSelectedOption(skip) {
    this.autocomplete.options.forEach(option => {
      if (option !== skip && option.selected) {
        option.deselect();
      }
    });
  }

  _attachOverlay() {
    var _a;

    if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }

    let overlayRef = this._overlayRef;

    if (!overlayRef) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_22__.TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: (_a = this._formField) === null || _a === void 0 ? void 0 : _a.getLabelId()
      });
      overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
      // the overlay event targeting provided by the CDK overlay.

      overlayRef.keydownEvents().subscribe(event => {
        // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.hasModifierKey)(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.UP_ARROW && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_19__.hasModifierKey)(event, 'altKey')) {
          this._closeKeyEventStream.next();

          this._resetActiveItem(); // We need to stop propagation, otherwise the event will eventually
          // reach the input itself and cause the overlay to be reopened.


          event.stopPropagation();
          event.preventDefault();
        }
      });
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
    } else {
      // Update the trigger, panel width and direction, in case anything has changed.
      this._positionStrategy.setOrigin(this._getConnectedElement());

      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }

    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }

    const wasOpen = this.panelOpen;

    this.autocomplete._setVisibility();

    this.autocomplete._isOpen = this._overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
    // autocomplete won't be shown if there are no options.

    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this.autocomplete.opened.emit();
    }
  }

  _getOverlayConfig() {
    var _a;

    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir,
      panelClass: (_a = this._defaults) === null || _a === void 0 ? void 0 : _a.overlayPanelClass
    });
  }

  _getOverlayPosition() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);

    this._setStrategyPositions(strategy);

    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */


  _setStrategyPositions(positionStrategy) {
    // Note that we provide horizontal fallback positions, even though by default the dropdown
    // width matches the input, because consumers can override the width. See #18854.
    const belowPositions = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }]; // The overlay edge connected to the trigger should have squared corners, while
    // the opposite end has rounded corners. We apply a CSS class to swap the
    // border-radius based on the overlay position.

    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      panelClass
    }];
    let positions;

    if (this.position === 'above') {
      positions = abovePositions;
    } else if (this.position === 'below') {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }

    positionStrategy.withPositions(positions);
  }

  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }

    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }

  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */


  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */


  _resetActiveItem() {
    const autocomplete = this.autocomplete;

    if (autocomplete.autoActiveFirstOption) {
      // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
      // the former will find the next enabled option, if the first one is disabled.
      autocomplete._keyManager.setFirstItemActive();
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */


  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    var _a;

    return ((_a = this._document) === null || _a === void 0 ? void 0 : _a.defaultView) || window;
  }
  /** Scrolls to a particular option in the list. */


  _scrollToOption(index) {
    // Given that we are not actually focusing active options, we must manually adjust scroll
    // to reveal options below the fold. First, we find the offset of the option from the top
    // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
    // the panel height + the option height, so the active option will be just visible at the
    // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
    // will become the offset. If that offset is visible within the panel already, the scrollTop is
    // not adjusted.
    const autocomplete = this.autocomplete;

    const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);

    if (index === 0 && labelCount === 1) {
      // If we've got one group label before the option and we're at the top option,
      // scroll the list to the top. This is better UX than scrolling the list to the
      // top of the option, because it allows the user to read the top group's label.
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];

      if (option) {
        const element = option._getHostElement();

        const newScrollPosition = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);

        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }

}

_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
  return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8));
};

_MatAutocompleteTriggerBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteTriggerBase,
  inputs: {
    autocomplete: ["matAutocomplete", "autocomplete"],
    position: ["matAutocompletePosition", "position"],
    connectedTo: ["matAutocompleteConnectedTo", "connectedTo"],
    autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
    autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_23__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MAT_FORM_FIELD]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.ViewportRuler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocomplete']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompletePosition']
    }],
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompleteConnectedTo']
    }],
    autocompleteAttribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['autocomplete']
    }],
    autocompleteDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompleteDisabled']
    }]
  });
})();

class MatAutocompleteTrigger extends _MatAutocompleteTriggerBase {
  constructor() {
    super(...arguments);
    this._aboveClass = 'mat-autocomplete-panel-above';
  }

}

MatAutocompleteTrigger.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocompleteTrigger_BaseFactory;
  return function MatAutocompleteTrigger_Factory(t) {
    return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger)))(t || MatAutocompleteTrigger);
  };
}();

MatAutocompleteTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAutocompleteTrigger,
  selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
  hostAttrs: [1, "mat-autocomplete-trigger"],
  hostVars: 7,
  hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx._onTouched();
      })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx._handleInput($event);
      })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
    }
  },
  exportAs: ["matAutocompleteTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        'class': 'mat-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        '[attr.aria-haspopup]': 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)',
        '(click)': '_handleClick()'
      },
      exportAs: 'matAutocompleteTrigger',
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */


class _MatAutocompleteOriginBase {
  constructor(
  /** Reference to the element on which the directive is applied. */
  elementRef) {
    this.elementRef = elementRef;
  }

}

_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
  return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

_MatAutocompleteOriginBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteOriginBase
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */


class MatAutocompleteOrigin extends _MatAutocompleteOriginBase {}

MatAutocompleteOrigin.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocompleteOrigin_BaseFactory;
  return function MatAutocompleteOrigin_Factory(t) {
    return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin)))(t || MatAutocompleteOrigin);
  };
}();

MatAutocompleteOrigin.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAutocompleteOrigin,
  selectors: [["", "matAutocompleteOrigin", ""]],
  exportAs: ["matAutocompleteOrigin"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matAutocompleteOrigin]',
      exportAs: 'matAutocompleteOrigin'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatAutocompleteModule {}

MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) {
  return new (t || MatAutocompleteModule)();
};

MatAutocompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatAutocompleteModule
});
MatAutocompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      exports: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9782:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/progress-bar.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PROGRESS_BAR_DEFAULT_OPTIONS": () => (/* binding */ MAT_PROGRESS_BAR_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PROGRESS_BAR_LOCATION": () => (/* binding */ MAT_PROGRESS_BAR_LOCATION),
/* harmony export */   "MAT_PROGRESS_BAR_LOCATION_FACTORY": () => (/* binding */ MAT_PROGRESS_BAR_LOCATION_FACTORY),
/* harmony export */   "MatProgressBar": () => (/* binding */ MatProgressBar),
/* harmony export */   "MatProgressBarModule": () => (/* binding */ MatProgressBarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 116);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatProgressBar.

/** @docs-private */

const _c0 = ["primaryValueBar"];

const _MatProgressBarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}, 'primary');
/**
 * Injection token used to provide the current location to `MatProgressBar`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */


const MAT_PROGRESS_BAR_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-progress-bar-location', {
  providedIn: 'root',
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
/** @docs-private */

function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);

  const _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ''
  };
}
/** Injection token to be used to override the default options for `mat-progress-bar`. */


const MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MAT_PROGRESS_BAR_DEFAULT_OPTIONS');
/** Counter used to generate unique IDs for progress bars. */

let progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */

class MatProgressBar extends _MatProgressBarBase {
  constructor(elementRef, _ngZone, _animationMode,
  /**
   * @deprecated `location` parameter to be made required.
   * @breaking-change 8.0.0
   */
  location, defaults,
  /**
   * @deprecated `_changeDetectorRef` parameter to be made required.
   * @breaking-change 11.0.0
   */
  _changeDetectorRef) {
    super(elementRef);
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._changeDetectorRef = _changeDetectorRef;
    /** Flag that indicates whether NoopAnimations mode is set to true. */

    this._isNoopAnimation = false;
    this._value = 0;
    this._bufferValue = 0;
    /**
     * Event emitted when animation of the primary progress bar completes. This event will not
     * be emitted when animations are disabled, nor will it be emitted for modes with continuous
     * animations (indeterminate and query).
     */

    this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Reference to animation end subscription to be unsubscribed on destroy. */

    this._animationEndSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     */

    this.mode = 'determinate';
    /** ID of the progress bar. */

    this.progressbarId = `mat-progress-bar-${progressbarId++}`; // We need to prefix the SVG reference with the current path, otherwise they won't work
    // in Safari if the page has a `<base>` tag. Note that we need quotes inside the `url()`,
    // because named route URLs can contain parentheses (see #12338). Also we don't use `Location`
    // since we can't tell the difference between whether the consumer is using the hash location
    // strategy or not, because `Location` normalizes both `/#/foo/bar` and `/foo/bar` to
    // the same thing.

    const path = location ? location.getPathname().split('#')[0] : '';
    this._rectangleFillValue = `url('${path}#${this.progressbarId}')`;
    this._isNoopAnimation = _animationMode === 'NoopAnimations';

    if (defaults) {
      if (defaults.color) {
        this.color = this.defaultColor = defaults.color;
      }

      this.mode = defaults.mode || this.mode;
    }
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */


  get value() {
    return this._value;
  }

  set value(v) {
    var _a;

    this._value = clamp((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceNumberProperty)(v) || 0); // @breaking-change 11.0.0 Remove null check for _changeDetectorRef.

    (_a = this._changeDetectorRef) === null || _a === void 0 ? void 0 : _a.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */


  get bufferValue() {
    return this._bufferValue;
  }

  set bufferValue(v) {
    var _a;

    this._bufferValue = clamp(v || 0); // @breaking-change 11.0.0 Remove null check for _changeDetectorRef.

    (_a = this._changeDetectorRef) === null || _a === void 0 ? void 0 : _a.markForCheck();
  }
  /** Gets the current transform value for the progress bar's primary indicator. */


  _primaryTransform() {
    // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
    const scale = this.value / 100;
    return {
      transform: `scale3d(${scale}, 1, 1)`
    };
  }
  /**
   * Gets the current transform value for the progress bar's buffer indicator. Only used if the
   * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
   */


  _bufferTransform() {
    if (this.mode === 'buffer') {
      // We use a 3d transform to work around some rendering issues in iOS Safari. See #19328.
      const scale = this.bufferValue / 100;
      return {
        transform: `scale3d(${scale}, 1, 1)`
      };
    }

    return null;
  }

  ngAfterViewInit() {
    // Run outside angular so change detection didn't get triggered on every transition end
    // instead only on the animation that we care about (primary value bar's transitionend)
    this._ngZone.runOutsideAngular(() => {
      const element = this._primaryValueBar.nativeElement;
      this._animationEndSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(element, 'transitionend').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(e => e.target === element)).subscribe(() => {
        if (this.animationEnd.observers.length === 0) {
          return;
        }

        if (this.mode === 'determinate' || this.mode === 'buffer') {
          this._ngZone.run(() => this.animationEnd.next({
            value: this.value
          }));
        }
      });
    });
  }

  ngOnDestroy() {
    this._animationEndSubscription.unsubscribe();
  }

}

MatProgressBar.ɵfac = function MatProgressBar_Factory(t) {
  return new (t || MatProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_LOCATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};

MatProgressBar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatProgressBar,
  selectors: [["mat-progress-bar"]],
  viewQuery: function MatProgressBar_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._primaryValueBar = _t.first);
    }
  },
  hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-progress-bar"],
  hostVars: 4,
  hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", ctx.mode === "indeterminate" || ctx.mode === "query" ? null : ctx.value)("mode", ctx.mode);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._isNoopAnimation);
    }
  },
  inputs: {
    color: "color",
    value: "value",
    bufferValue: "bufferValue",
    mode: "mode"
  },
  outputs: {
    animationEnd: "animationEnd"
  },
  exportAs: ["matProgressBar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 4,
  consts: [["aria-hidden", "true"], ["width", "100%", "height", "4", "focusable", "false", 1, "mat-progress-bar-background", "mat-progress-bar-element"], ["x", "4", "y", "0", "width", "8", "height", "4", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "2", "cy", "2", "r", "2"], ["width", "100%", "height", "100%"], [1, "mat-progress-bar-buffer", "mat-progress-bar-element", 3, "ngStyle"], [1, "mat-progress-bar-primary", "mat-progress-bar-fill", "mat-progress-bar-element", 3, "ngStyle"], ["primaryValueBar", ""], [1, "mat-progress-bar-secondary", "mat-progress-bar-fill", "mat-progress-bar-element"]],
  template: function MatProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1)(2, "defs")(3, "pattern", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "circle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rect", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 5)(7, "div", 6, 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.progressbarId);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", ctx._rectangleFillValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._bufferTransform());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._primaryTransform());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
  styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatProgressBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-progress-bar',
      exportAs: 'matProgressBar',
      host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        'tabindex': '-1',
        '[attr.aria-valuenow]': '(mode === "indeterminate" || mode === "query") ? null : value',
        '[attr.mode]': 'mode',
        'class': 'mat-progress-bar',
        '[class._mat-animation-noopable]': '_isNoopAnimation'
      },
      inputs: ['color'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div aria-hidden=\"true\">\n  <svg width=\"100%\" height=\"4\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\">\n    <defs>\n      <pattern [id]=\"progressbarId\" x=\"4\" y=\"0\" width=\"8\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n        <circle cx=\"2\" cy=\"2\" r=\"2\"/>\n      </pattern>\n    </defs>\n    <rect [attr.fill]=\"_rectangleFillValue\" width=\"100%\" height=\"100%\"/>\n  </svg>\n  <!--\n    The background div is named as such because it appears below the other divs and is not sized based\n    on values.\n  -->\n  <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n  <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\" #primaryValueBar></div>\n  <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n</div>\n",
      styles: [".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:\"\";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_PROGRESS_BAR_LOCATION]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    bufferValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    _primaryValueBar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['primaryValueBar']
    }],
    animationEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/** Clamps a value to be between two numbers, by default 0 and 100. */


function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatProgressBarModule {}

MatProgressBarModule.ɵfac = function MatProgressBarModule_Factory(t) {
  return new (t || MatProgressBarModule)();
};

MatProgressBarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatProgressBarModule
});
MatProgressBarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatProgressBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatProgressBar, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatProgressBar]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 8390:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/radio.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS),
/* harmony export */   "MAT_RADIO_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_RADIO_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_RADIO_GROUP": () => (/* binding */ MAT_RADIO_GROUP),
/* harmony export */   "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MatRadioButton": () => (/* binding */ MatRadioButton),
/* harmony export */   "MatRadioChange": () => (/* binding */ MatRadioChange),
/* harmony export */   "MatRadioGroup": () => (/* binding */ MatRadioGroup),
/* harmony export */   "MatRadioModule": () => (/* binding */ MatRadioModule),
/* harmony export */   "_MatRadioButtonBase": () => (/* binding */ _MatRadioButtonBase),
/* harmony export */   "_MatRadioGroupBase": () => (/* binding */ _MatRadioGroupBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);









const _c0 = ["input"];

const _c1 = function (a0) {
  return {
    enterDuration: a0
  };
};

const _c2 = ["*"];
const MAT_RADIO_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-radio-default-options', {
  providedIn: 'root',
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});

function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent'
  };
} // Increasing integer for generating unique ids for radio components.


let nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */

const MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioGroup),
  multi: true
};
/** Change event object emitted by MatRadio and MatRadioGroup. */

class MatRadioChange {
  constructor(
  /** The MatRadioButton that emits the change event. */
  source,
  /** The value of the MatRadioButton. */
  value) {
    this.source = source;
    this.value = value;
  }

}
/**
 * Injection token that can be used to inject instances of `MatRadioGroup`. It serves as
 * alternative token to the actual `MatRadioGroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_RADIO_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatRadioGroup');
/**
 * Base class with all of the `MatRadioGroup` functionality.
 * @docs-private
 */

class _MatRadioGroupBase {
  constructor(_changeDetector) {
    this._changeDetector = _changeDetector;
    /** Selected value for the radio group. */

    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */

    this._name = `mat-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */

    this._selected = null;
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */

    this._disabled = false;
    /** Whether the radio group is required. */

    this._required = false;
    /** The method to be called in order to update ngModel */

    this._controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */


    this.onTouched = () => {};
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */


    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;

    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition;
  }

  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';

    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */


  get value() {
    return this._value;
  }

  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;

      this._updateSelectedRadioFromValue();

      this._checkSelectedRadioButton();
    }
  }

  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */


  get selected() {
    return this._selected;
  }

  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;

    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markRadiosForCheck();
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */


  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the MatRadioGroup.
    this._isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */


  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach(radio => {
        radio.name = this.name;

        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */


  _updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    if (this._radios && !isAlreadySelected) {
      this._selected = null;

      this._radios.forEach(radio => {
        radio.checked = this.value === radio.value;

        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */


  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }

  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach(radio => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */


  writeValue(value) {
    this.value = value;

    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetector.markForCheck();
  }

}

_MatRadioGroupBase.ɵfac = function _MatRadioGroupBase_Factory(t) {
  return new (t || _MatRadioGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

_MatRadioGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioGroupBase,
  inputs: {
    color: "color",
    name: "name",
    labelPosition: "labelPosition",
    value: "value",
    selected: "selected",
    disabled: "disabled",
    required: "required"
  },
  outputs: {
    change: "change"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioGroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */


class MatRadioGroup extends _MatRadioGroupBase {}

MatRadioGroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatRadioGroup_BaseFactory;
  return function MatRadioGroup_Factory(t) {
    return (ɵMatRadioGroup_BaseFactory || (ɵMatRadioGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRadioGroup)))(t || MatRadioGroup);
  };
}();

MatRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRadioGroup,
  selectors: [["mat-radio-group"]],
  contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatRadioButton, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._radios = _t);
    }
  },
  hostAttrs: ["role", "radiogroup", 1, "mat-radio-group"],
  exportAs: ["matRadioGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
    provide: MAT_RADIO_GROUP,
    useExisting: MatRadioGroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-radio-group',
      exportAs: 'matRadioGroup',
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        'role': 'radiogroup',
        'class': 'mat-radio-group'
      }
    }]
  }], null, {
    _radios: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatRadioButton), {
        descendants: true
      }]
    }]
  });
})(); // Boilerplate for applying mixins to MatRadioButton.

/** @docs-private */


class MatRadioButtonBase {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}

const _MatRadioButtonMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)(MatRadioButtonBase));
/**
 * Base class with all of the `MatRadioButton` functionality.
 * @docs-private
 */


class _MatRadioButtonBase extends _MatRadioButtonMixinBase {
  constructor(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher, animationMode, _providerOverride, tabIndex) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    this._providerOverride = _providerOverride;
    this._uniqueId = `mat-radio-${++nextUniqueId}`;
    /** The unique ID for the radio button. */

    this.id = this._uniqueId;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether this radio is checked. */

    this._checked = false;
    /** Value assigned to this radio. */

    this._value = null;
    /** Unregister function for _radioDispatcher */

    this._removeUniqueSelectionListener = () => {}; // Assertions. Ideally these should be stripped out by the compiler.
    // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.


    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === 'NoopAnimations';

    if (tabIndex) {
      this.tabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceNumberProperty)(tabIndex, 0);
    }

    this._removeUniqueSelectionListener = _radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  /** Whether this radio button is checked. */


  get checked() {
    return this._checked;
  }

  set checked(value) {
    const newCheckedState = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;

      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }

      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
      }

      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */


  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value !== value) {
      this._value = value;

      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }

        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }

  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** Whether the radio button is disabled. */


  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }

  set disabled(value) {
    this._setDisabled((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value));
  }
  /** Whether the radio button is required. */


  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Theme color of the radio button. */


  get color() {
    // As per Material design specifications the selection control radio should use the accent color
    // palette by default. https://material.io/guidelines/components/selection-controls.html
    return this._color || this.radioGroup && this.radioGroup.color || this._providerOverride && this._providerOverride.color || 'accent';
  }

  set color(newValue) {
    this._color = newValue;
  }
  /** ID of the native input element inside `<mat-radio-button>` */


  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Focuses the radio button. */


  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */


  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }

  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;

      if (this.checked) {
        this.radioGroup.selected = this;
      } // Copy name from parent radio group


      this.name = this.radioGroup.name;
    }
  }

  ngDoCheck() {
    this._updateTabIndex();
  }

  ngAfterViewInit() {
    this._updateTabIndex();

    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */


  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }

  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }

  _onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }
  /** Triggered when the radio button receives an interaction from the user. */


  _onInputInteraction(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();

    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;

      this._emitChangeEvent();

      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);

        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */


  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;

      this._changeDetector.markForCheck();
    }
  }
  /** Gets the tabindex for the underlying input element. */


  _updateTabIndex() {
    var _a;

    const group = this.radioGroup;
    let value; // Implement a roving tabindex if the button is inside a group. For most cases this isn't
    // necessary, because the browser handles the tab order for inputs inside a group automatically,
    // but we need an explicitly higher tabindex for the selected button in order for things like
    // the focus trap to pick it up correctly.

    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }

    if (value !== this._previousTabIndex) {
      // We have to set the tabindex directly on the DOM node, because it depends on
      // the selected state which is prone to "changed after checked errors".
      const input = (_a = this._inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement;

      if (input) {
        input.setAttribute('tabindex', value + '');
        this._previousTabIndex = value;
      }
    }
  }

}

_MatRadioButtonBase.ɵfac = function _MatRadioButtonBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};

_MatRadioButtonBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatRadioButtonBase,
  viewQuery: function _MatRadioButtonBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
    }
  },
  inputs: {
    id: "id",
    name: "name",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    checked: "checked",
    value: "value",
    labelPosition: "labelPosition",
    disabled: "disabled",
    required: "required",
    color: "color"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatRadioButtonBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _MatRadioGroupBase
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }]
  });
})();
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */


class MatRadioButton extends _MatRadioButtonBase {
  constructor(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex) {
    super(radioGroup, elementRef, changeDetector, focusMonitor, radioDispatcher, animationMode, providerOverride, tabIndex);
  }

}

MatRadioButton.ɵfac = function MatRadioButton_Factory(t) {
  return new (t || MatRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RADIO_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};

MatRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatRadioButton,
  selectors: [["mat-radio-button"]],
  hostAttrs: [1, "mat-radio-button"],
  hostVars: 17,
  hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatRadioButton_focus_HostBindingHandler() {
        return ctx._inputElement.nativeElement.focus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("id", ctx.id)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-checked", ctx.checked)("mat-radio-disabled", ctx.disabled)("_mat-animation-noopable", ctx._noopAnimations)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matRadioButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 13,
  vars: 19,
  consts: [[1, "mat-radio-label"], ["label", ""], [1, "mat-radio-container"], [1, "mat-radio-outer-circle"], [1, "mat-radio-inner-circle"], ["type", "radio", 1, "mat-radio-input", 3, "id", "checked", "disabled", "required", "change", "click"], ["input", ""], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mat-radio-label-content"], [2, "display", "none"]],
  template: function MatRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatRadioButton_Template_input_change_5_listener($event) {
        return ctx._onInputInteraction($event);
      })("click", function MatRadioButton_Template_input_click_5_listener($event) {
        return ctx._onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9)(10, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx._noopAnimations ? 0 : 150));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-radio-label-before", ctx.labelPosition == "before");
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple],
  styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-radio-button',
      inputs: ['disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matRadioButton',
      host: {
        'class': 'mat-radio-button',
        '[class.mat-radio-checked]': 'checked',
        '[class.mat-radio-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_noopAnimations',
        '[class.mat-primary]': 'color === "primary"',
        '[class.mat-accent]': 'color === "accent"',
        '[class.mat-warn]': 'color === "warn"',
        // Needs to be removed since it causes some a11y issues (see #21266).
        '[attr.tabindex]': 'null',
        '[attr.id]': 'id',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null',
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        '(focus)': '_inputElement.nativeElement.focus()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!-- TODO(jelbourn): render the radio on either side of the content -->\n<!-- TODO(mtlin): Evaluate trade-offs of using native radio vs. cost of additional bindings. -->\n<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label>\n  <!-- The actual 'radio' part of the control. -->\n  <span class=\"mat-radio-container\">\n    <span class=\"mat-radio-outer-circle\"></span>\n    <span class=\"mat-radio-inner-circle\"></span>\n    <input #input class=\"mat-radio-input\" type=\"radio\"\n        [id]=\"inputId\"\n        [checked]=\"checked\"\n        [disabled]=\"disabled\"\n        [attr.name]=\"name\"\n        [attr.value]=\"value\"\n        [required]=\"required\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        [attr.aria-describedby]=\"ariaDescribedby\"\n        (change)=\"_onInputInteraction($event)\"\n        (click)=\"_onInputClick($event)\">\n\n    <!-- The ripple comes after the input so that we can target it with a CSS\n         sibling selector when the input is focused. -->\n    <span mat-ripple class=\"mat-radio-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleCentered]=\"true\"\n         [matRippleRadius]=\"20\"\n         [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n      <span class=\"mat-ripple-element mat-radio-persistent-ripple\"></span>\n    </span>\n  </span>\n\n  <!-- The label content for radio control. -->\n  <span class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
      styles: [".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{opacity:0;position:absolute;top:0;left:0;margin:0;width:100%;height:100%;cursor:inherit;z-index:-1}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"]
    }]
  }], function () {
    return [{
      type: MatRadioGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.UniqueSelectionDispatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RADIO_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatRadioModule {}

MatRadioModule.ɵfac = function MatRadioModule_Factory(t) {
  return new (t || MatRadioModule)();
};

MatRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRadioModule
});
MatRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map