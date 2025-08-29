"use strict";
(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["src_app_my-surveys_my-surveys_module_ts"],{

/***/ 3525:
/*!*********************************************!*\
  !*** ./src/app/dashboard/survey.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyService": () => (/* binding */ SurveyService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class SurveyService {
    constructor(http) {
        this.http = http;
    }
    getSurveyDetailsbyQRCode(qrCode) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/QRCode/${qrCode}`);
    }
    getSurveyDetailsResponseForAnsweredQRCode(qrCode) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/ResponseOnly/QRCode/${qrCode}`);
    }
    getSurveyGroupByQRCode(qrCode) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/SurveyGroupStateBySS/QRCode/${qrCode}`);
    }
    getSurveyResponseCount(qrCode, registrationSurveyId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/SurveyGroupResponseCount/QRCode/${qrCode}/${registrationSurveyId}`);
    }
    getDataRequesDetailsById(surveyId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/${surveyId}`);
    }
    saveSurveyResponse(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequestResponse`, params);
    }
    checkSurveyIsValidOrNot(rid, qid, sid) {
        //return this.http.get(`https://bluenumber.global/mm_process/api/check_qualification.php?api_key=bluenumbermmtestapi2023&r_id=${rid}&q_id=${qid}&s_id=${sid}&env=${environment.envType}`);
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BluenumberSurveyOTPValidationUrl}/api/check_qualification.php?api_key=bluenumbermmtestapi2023&r_id=${rid}&q_id=${qid}&s_id=${sid}&env=${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envType}`);
    }
    getConnectionRequestDetailsByCode(connectionCode) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/ConnectionRequestCode/Bluenumber/${connectionCode}`);
    }
}
SurveyService.ɵfac = function SurveyService_Factory(t) { return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SurveyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SurveyService, factory: SurveyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 971:
/*!*********************************************************!*\
  !*** ./src/app/my-surveys/my-surveys-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MySurveysRoutingModule": () => (/* binding */ MySurveysRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _survey_layout_survey_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey-layout/survey-layout.component */ 5035);
/* harmony import */ var _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-list/survey-list.component */ 7823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _survey_layout_survey_layout_component__WEBPACK_IMPORTED_MODULE_0__.SurveyLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_1__.SurveyListComponent
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            },
        ]
    }
];
class MySurveysRoutingModule {
}
MySurveysRoutingModule.ɵfac = function MySurveysRoutingModule_Factory(t) { return new (t || MySurveysRoutingModule)(); };
MySurveysRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MySurveysRoutingModule });
MySurveysRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MySurveysRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 460:
/*!*************************************************!*\
  !*** ./src/app/my-surveys/my-surveys.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MySurveysModule": () => (/* binding */ MySurveysModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _my_surveys_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-surveys-routing.module */ 971);
/* harmony import */ var _survey_layout_survey_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey-layout/survey-layout.component */ 5035);
/* harmony import */ var _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey-list/survey-list.component */ 7823);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class MySurveysModule {
}
MySurveysModule.ɵfac = function MySurveysModule_Factory(t) { return new (t || MySurveysModule)(); };
MySurveysModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MySurveysModule });
MySurveysModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _my_surveys_routing_module__WEBPACK_IMPORTED_MODULE_0__.MySurveysRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MySurveysModule, { declarations: [_survey_layout_survey_layout_component__WEBPACK_IMPORTED_MODULE_1__.SurveyLayoutComponent,
        _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_2__.SurveyListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _my_surveys_routing_module__WEBPACK_IMPORTED_MODULE_0__.MySurveysRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 5035:
/*!*********************************************************************!*\
  !*** ./src/app/my-surveys/survey-layout/survey-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyLayoutComponent": () => (/* binding */ SurveyLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SurveyLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
SurveyLayoutComponent.ɵfac = function SurveyLayoutComponent_Factory(t) { return new (t || SurveyLayoutComponent)(); };
SurveyLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveyLayoutComponent, selectors: [["app-survey-layout"]], decls: 1, vars: 0, template: function SurveyLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXJ2ZXktbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7823:
/*!*****************************************************************!*\
  !*** ./src/app/my-surveys/survey-list/survey-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyListComponent": () => (/* binding */ SurveyListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/constants */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dashboard/survey.service */ 3525);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function SurveyListComponent_div_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r2 = ctx_r6.index;
    const surveys_r1 = ctx_r6.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", i_r2 + 1, " ", ctx_r3.getNumberSuffix(i_r2 + 1), " Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (surveys_r1 == null ? null : surveys_r1.isAnswered) ? "DONE!" : "", " ");
} }
function SurveyListComponent_div_17_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Qualified");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SurveyListComponent_div_17_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const i_r2 = ctx_r9.index;
    const surveys_r1 = ctx_r9.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", i_r2, " ", ctx_r8.getNumberSuffix(i_r2), " Day ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (surveys_r1 == null ? null : surveys_r1.isAnswered) ? "DONE!" : "", " ");
} }
function SurveyListComponent_div_17_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SurveyListComponent_div_17_ng_container_4_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SurveyListComponent_div_17_ng_container_4_span_2_Template, 4, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r2 != 0);
} }
function SurveyListComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const surveys_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, surveys_r1 == null ? null : surveys_r1.answeredTime, "dd MMM y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", surveys_r1 == null ? null : surveys_r1.location[0], ", ", surveys_r1 == null ? null : surveys_r1.location[1], " ");
} }
function SurveyListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div")(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SurveyListComponent_div_17_ng_container_3_Template, 5, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SurveyListComponent_div_17_ng_container_4_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SurveyListComponent_div_17_div_5_Template, 6, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const surveys_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", i_r2 == 0 ? (surveys_r1 == null ? null : surveys_r1.isAnswered) ? "circle-final-active" : "circle-first-active" : ctx_r0.currentSurveyIndex == i_r2 && !(surveys_r1 == null ? null : surveys_r1.isAnswered) && ctx_r0.surveyState <= 3 ? "common-circle-top circle-first-active" : (surveys_r1 == null ? null : surveys_r1.isAnswered) ? "common-circle-top circle-final-active" : "common-circle-top circle-inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isEachClaimSurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isEachClaimSurvey);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", surveys_r1 == null ? null : surveys_r1.answeredTime);
} }
class SurveyListComponent {
    constructor(surveyService, sharedService, router) {
        this.surveyService = surveyService;
        this.sharedService = sharedService;
        this.router = router;
        this.globalConstants = src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants;
        this.streakDays = [];
        this.surveyDetails = [];
        this.surveyMsg = '';
        this.surveyState = 0;
        this.currentSurveyIndex = 0;
        this.firstSurveyAnswered = false;
        this.surveyType = '';
        this.claimType = '';
        this.isEachClaimSurvey = false;
    }
    ngOnInit() {
        this.surveyType = localStorage.getItem('surveyType');
        this.claimType = localStorage.getItem('claim');
        if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey) {
            this.isEachClaimSurvey = true;
        }
        else {
            this.isEachClaimSurvey = false;
        }
        this.getSurveyListDetails();
    }
    getSurveyListDetails() {
        this.sharedService.startLoader();
        if (localStorage.getItem('ssid') == "null" || localStorage.getItem('ssid') == '') {
            this.sharedService.successErrorMsg['message'] = "Please scan QR code again.";
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('home/messages');
        }
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.surveyDetails = res['result'];
                localStorage.setItem('surveySetId', this.surveyDetails['id']);
                if (this.surveyDetails == null || this.surveyDetails['surveyGroupItems'].length <= 0) {
                    this.surveyState = 1;
                    this.surveyMsg = "Surveys are not available";
                    return;
                }
                this.surveyDetails['surveyGroupItems'].forEach((item, index) => {
                    if (index == 0 && item['isAnswered']) {
                        this.firstSurveyAnswered = true;
                    }
                });
                let now = new Date(); // todays date
                now.setHours(0, 0, 0, 0);
                let pend = new Date(this.surveyDetails['endDate']);
                pend = new Date(pend.getTime() + pend.getTimezoneOffset() * 60000);
                console.log("DATE: ", pend);
                let pduration = pend - now;
                console.log(pduration);
                if (pduration < 0) {
                    this.surveyState = 2;
                    this.surveyMsg = "Survey program ended. We will notify when next program available.";
                    return;
                }
                if (pduration == 0) {
                    let length = this.surveyDetails['surveyGroupItems'].length;
                    if (this.surveyDetails['surveyGroupItems'][length - 1]['isAnswered'] == true) {
                        this.surveyState = 2;
                        this.surveyMsg = "Survey program ended. We will notify when next program available.";
                        return;
                    }
                }
                this.sortSuveys();
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
                    for (let i = 0; i < this.surveyDetails['surveyGroupItems'].length; i++) {
                        let item = this.surveyDetails['surveyGroupItems'][i];
                        if (!item['isAnswered']) {
                            this.currentSurveyIndex = i;
                            let duration = start - today;
                            if (duration == 0) {
                                //enable start survey buton
                                this.surveyState = 3;
                                this.surveyMsg = "New survey is available!";
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
                                    if (previousItem && previousItem['answeredTime']) {
                                        prevTime = new Date(previousItem['answeredTime']);
                                        prevTime = new Date(prevTime.getTime() + prevTime.getTimezoneOffset() * 60000);
                                        newTime = new Date(prevTime.getTime() + (Number(mins) * 60 * 1000));
                                        let diff = newTime - today;
                                        if (diff <= 0) {
                                            this.surveyState = 3;
                                            this.surveyMsg = "New survey is available!";
                                        }
                                        else if (diff > 0) {
                                            this.surveyState = 4;
                                            this.showHourlySurveyCounter(newTime);
                                            break;
                                        }
                                    }
                                    else {
                                        this.surveyState = 3;
                                        this.surveyMsg = "New survey is available!";
                                    }
                                    break;
                                }
                            }
                            return;
                        }
                    }
                }
            }
        }, (error) => {
            if (error.error.responseException.exceptionMessage == "Survey is not found for QR:null") {
                this.router.navigateByUrl(`home/info`);
                return;
            }
            console.log("Error: ", error);
        });
    }
    dailySurveySSIDDetails(now) {
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
                    this.surveyMsg = "New survey is available!";
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
    showHourlySurveyCounter(newTime) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).subscribe(val => {
            let now;
            let end;
            let days = 0, hours = 0, minutes = 0, seconds = 0;
            now = new Date(); // todays date
            let today = new Date();
            today = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
            let duration = newTime - today;
            if (duration <= 0) {
                this.clearCounter();
            }
            days = Math.floor(duration / (1000 * 60 * 60 * 24));
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = hours + 'hrs : ' + minutes +
                'min : ' + seconds + 'secs';
        });
    }
    sortSuveys() {
        return this.surveyDetails['surveyGroupItems'].sort((a, b) => {
            return new Date(a['startDate']) - new Date(b['startDate']);
        });
    }
    getNumberSuffix(num) {
        if (num == 1) {
            return 'st';
        }
        else if (num == 2) {
            return 'nd';
        }
        else if (num == 3) {
            return 'rd';
        }
        else {
            return 'th';
        }
    }
    showCounter(suveydate) {
        this.timerSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).subscribe((val) => {
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
            hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((duration % (1000 * 60)) / 1000);
            this.timeCounter = days + 'Days : ' + hours + 'Hours : ' + minutes +
                'Minutes : ' + seconds + 'Seconds';
        });
    }
    clearCounter() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.surveyState = 3;
        this.surveyMsg = "New survey is available!";
    }
    goBack() {
        this.router.navigateByUrl('home/info');
    }
    // *********** To add vertical height of the Progress bar based on Survey Count *************
    getSurveyStyles() {
        if (this.surveyDetails && this.surveyDetails['surveyGroupItems']) {
            let totalSurveys = this.surveyDetails['surveyGroupItems'].length;
            if (totalSurveys <= 1) {
                return 'height: 0%';
            }
            else {
                let height = 0;
                this.surveyDetails['surveyGroupItems'].forEach((survey, index) => {
                    if ((index + 1) < totalSurveys) {
                        if (survey['isAnswered']) {
                            // 170 => Circle Height 120 + Gap height 50
                            height = height + 170;
                        }
                    }
                });
                return `height: ${height}px`;
            }
        }
        else {
            return 'height: 0%';
        }
    }
    // *********** To add the pink color to Progress bar indicating Answered Survey *************
    getVerticalLineStyle() {
        if (this.surveyDetails && this.surveyDetails['surveyGroupItems']) {
            let totalSurveys = this.surveyDetails['surveyGroupItems'].length;
            if (totalSurveys <= 1) {
                return 'height: 0%';
            }
            else {
                // 120 => Circle Height  Gap => 30
                let height = (120 * totalSurveys) + (30 * (totalSurveys - 1));
                return `height: ${height}px`;
            }
        }
        else {
            return 'height: 0%';
        }
    }
    ngOnDestroy() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
    }
}
SurveyListComponent.ɵfac = function SurveyListComponent_Factory(t) { return new (t || SurveyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_1__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SurveyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SurveyListComponent, selectors: [["app-survey-list"]], decls: 20, vars: 6, consts: [[1, "pma"], [1, "container"], [1, "my_streaks", "mb-5", "pb-5"], [1, "row", "mb-4"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "pma-heading", "text-gray-1"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pe-3", 3, "click"], [1, "d-flex", "justify-content-end"], ["src", "../../../../../assets/media/MMlogo-svg.svg", "alt", "", "width", "52px", "height", "auto", 1, "img-fluid"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "justify-content-center", "mt-4"], [1, "position-relative", "left-51"], [1, "positioning"], ["class", "d-flex align-items-center justify-content-between", 4, "ngFor", "ngForOf"], [1, "vertical-line"], [3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "common-circle", 3, "ngClass"], [4, "ngIf"], ["class", "survey-timedate-fs", 4, "ngIf"], [1, "survey-timedate-fs"], [1, "text-truncate", "text-wrap"]], template: function SurveyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h1", 5)(7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SurveyListComponent_Template_i_click_7_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "My Surveys");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SurveyListComponent_div_17_Template, 6, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.surveyDetails == null ? null : ctx.surveyDetails.surveyGroupItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx.getVerticalLineStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx.getSurveyStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.firstSurveyAnswered ? "vertical-line-progress" : "line-border");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".pma[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.pma[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.pma-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n.pma-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #AD0C62 !important;\n}\n.pma[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.pma[_ngcontent-%COMP%]   .btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.pma[_ngcontent-%COMP%]   .succ-mes[_ngcontent-%COMP%] {\n  font-size: 50px !important;\n  font-weight: 500 !important;\n}\n.pma[_ngcontent-%COMP%]   .thankyou-text[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  color: #545454;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #AD0C62 !important;\n}\n.progress[_ngcontent-%COMP%] {\n  height: 10px !important;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 50px !important;\n  font-size: 20px;\n}\ninput[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.custom-control-label[_ngcontent-%COMP%]::after, .custom-control-label[_ngcontent-%COMP%]::before {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n}\n.custom-control-label[_ngcontent-%COMP%] {\n  padding-left: 2.5rem !important;\n  margin: 10px 0px;\n}\n.custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #AD0C62 !important;\n  border-color: #AD0C62 !important;\n}\n.pma-buttons[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n}\n.my_streaks[_ngcontent-%COMP%]   .my_streaks-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  display: inline-block;\n}\n.my_streaks[_ngcontent-%COMP%]   .survey-heading[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-size: 24px;\n}\n.my_streaks[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  height: 870px;\n  width: 30px;\n  background-color: #D9D9D9;\n  border-radius: 50px;\n}\n.my_streaks[_ngcontent-%COMP%]   .line-border[_ngcontent-%COMP%] {\n  border-radius: 50px;\n}\n.my_streaks[_ngcontent-%COMP%]   .vertical-line-progress[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background-color: #AF2A74;\n}\n.my_streaks[_ngcontent-%COMP%]   .completed-verticalline-bg[_ngcontent-%COMP%] {\n  background-color: #18BA32;\n}\n.my_streaks[_ngcontent-%COMP%]   .common-circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  font-size: 14px;\n}\n.my_streaks[_ngcontent-%COMP%]   .common-circle-top[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\n.my_streaks[_ngcontent-%COMP%]   .circle-first-active[_ngcontent-%COMP%] {\n  background-color: #AF2A74;\n  border: 15px solid #CA5797;\n  color: #fff;\n}\n.my_streaks[_ngcontent-%COMP%]   .circle-final-active[_ngcontent-%COMP%] {\n  background-color: #A31664;\n  border: 15px solid #C11374;\n  color: #fff;\n}\n.my_streaks[_ngcontent-%COMP%]   .circle-inactive[_ngcontent-%COMP%] {\n  background-color: #E9E8E8;\n  border: 15px solid #F1F0F0;\n  color: #000000;\n}\n.my_streaks[_ngcontent-%COMP%]   .circle-completed[_ngcontent-%COMP%] {\n  background-color: #18BA32;\n  border: 15px solid #7ADF8A;\n}\n.my_streaks[_ngcontent-%COMP%]   .positioning[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin-left: -46px;\n  right: 0;\n}\n.my_streaks[_ngcontent-%COMP%]   .left-51[_ngcontent-%COMP%] {\n  left: -51px;\n}\n.my_streaks[_ngcontent-%COMP%]   .survey-timedate-fs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 19px;\n  max-width: 100%;\n}\n.my_streaks[_ngcontent-%COMP%]   .survey-timedate-fs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.my_streaks[_ngcontent-%COMP%]   .survey-timedate-fs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  width: 100px;\n}\n.my_streaks[_ngcontent-%COMP%]   .survey-timedate-fs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 140px;\n}\n.my_streaks[_ngcontent-%COMP%]   .text-lightgrey[_ngcontent-%COMP%] {\n  color: #545454 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cnZleS1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0FBRko7QUFPRTtFQUNFLHlCQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0FBTEo7QUFVRTtFQUNFLHlCQ3JCUztFRHNCVCxlQUFBO0VBQ0EsZUM0Qk07RUQzQk4sbUJDZUk7RURkSixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFQSjtBQVNJO0VBQ0UsWUFBQTtBQVBOO0FBV0U7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBVEo7QUFZRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVDckJHO0VEc0JILGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVko7QUFnQkE7RUFDRSxvQ0FBQTtBQWJGO0FBZ0JBO0VBQ0UsdUJBQUE7QUFiRjtBQWdCQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQWJGO0FBZ0JBO0VBQ0UsZUN4Q0s7QUQyQlA7QUFnQkE7O0VBRUUsd0JBQUE7RUFDQSx5QkFBQTtBQWJGO0FBZ0JBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQWJGO0FBaUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUNsRUc7RURtRUgsaUJBQUE7RUFDQSxrQkFBQTtBQWRKO0FBb0JJO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBakJOO0FBc0JFO0VBQ0UsY0MzR1M7RUQ0R1QsZUNsRkc7QUQ4RFA7QUF1QkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFyQko7QUF3QkU7RUFDRSxtQkFBQTtBQXRCSjtBQXlCRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUF2Qko7QUEyQkU7RUFDRSx5QkFBQTtBQXpCSjtBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTFCSjtBQThCRTtFQUNFLDJCQUFBO0FBNUJKO0FBaUNFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUEvQko7QUFrQ0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQWhDSjtBQW1DRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBakNKO0FBb0NFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQWxDSjtBQXFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFuQ0o7QUF1Q0U7RUFDRSxXQUFBO0FBckNKO0FBd0NFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBdENKO0FBd0NJO0VBQ0UsZUFBQTtBQXRDTjtBQXlDSTtFQUNFLFlBQUE7QUF2Q047QUEwQ0k7RUFDRSxZQUFBO0FBeENOO0FBNkNFO0VBQ0UseUJBQUE7QUEzQ0oiLCJmaWxlIjoic3VydmV5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5wbWEge1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucG1hLWhlYWRpbmcge1xyXG4gIGkge1xyXG4gICAgY29sb3I6ICR0ZXh0LWdyYXkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICRtbS1wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucG1hIHtcclxuICAuYnRuLW1tLXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnk7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAkZi0xNjtcclxuICAgIGN1cnNvciAgICAgICAgICA6ICRwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWNjLW1lcyB7XHJcbiAgICBmb250LXNpemUgIDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRoYW5reW91LXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gICAgZm9udC1zdHlsZSA6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemUgIDogJGYtMTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgIDogIzU0NTQ1NDtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRoaXMgaXMgZm9yIG9yaWdpbmFsIHN1cnZleSBzdHlsZXNcclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGhlaWdodCAgIDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW5wdXQrbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogJGYtMjU7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIsXHJcbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICB3aWR0aCA6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4gICAgICA6IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnkgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3IgICAgOiAkbW0tcHJpbWFyeSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG1hLWJ1dHRvbnMge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXN0eWxlIDogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZi0yMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5teV9zdHJlYWtzIHtcclxuICAubXlfc3RyZWFrcy1pbWcge1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0IDogMTUwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuc3VydmV5LWhlYWRpbmcge1xyXG4gICAgY29sb3IgICAgOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMjQ7XHJcbiAgfVxyXG5cclxuICAudmVydGljYWwtbGluZSB7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiA4NzBweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNTBweDtcclxuICB9XHJcblxyXG4gIC5saW5lLWJvcmRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnZlcnRpY2FsLWxpbmUtcHJvZ3Jlc3Mge1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICAgIDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRjJBNzQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kICAgICAgICAgOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMThCQTMyIDE3MHB4LCAjQUYyQTc0IDE3MHB4KTtcclxuICB9XHJcblxyXG4gIC5jb21wbGV0ZWQtdmVydGljYWxsaW5lLWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOEJBMzI7XHJcbiAgfVxyXG5cclxuICAuY29tbW9uLWNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzICA6IDUwJTtcclxuICAgIHdpZHRoICAgICAgICAgIDogMTIwcHg7XHJcbiAgICBoZWlnaHQgICAgICAgICA6IDEyMHB4O1xyXG4gICAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQgIDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplICAgICAgOiAxNHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb21tb24tY2lyY2xlLXRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5jaXJjbGUtZmlyc3QtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBRjJBNzQ7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAxNXB4IHNvbGlkICNDQTU3OTc7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1maW5hbC1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EzMTY2NDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDE1cHggc29saWQgI0MxMTM3NDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlLWluYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUU4RTg7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAxNXB4IHNvbGlkICNGMUYwRjA7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4QkEzMjtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDE1cHggc29saWQgIzdBREY4QTtcclxuICB9XHJcblxyXG4gIC5wb3NpdGlvbmluZyB7XHJcbiAgICBwb3NpdGlvbiAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgIDogMDtcclxuICAgIGxlZnQgICAgICAgOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00NnB4O1xyXG4gICAgcmlnaHQgICAgICA6IDA7XHJcblxyXG4gIH1cclxuXHJcbiAgLmxlZnQtNTEge1xyXG4gICAgbGVmdDogLTUxcHg7XHJcbiAgfVxyXG5cclxuICAuc3VydmV5LXRpbWVkYXRlLWZzIHtcclxuICAgIGRpc3BsYXkgICAgICAgOiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0ICAgOiAxOXB4O1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAudGV4dC1saWdodGdyZXkge1xyXG4gICAgY29sb3I6ICM1NDU0NTQgIWltcG9ydGFudDtcclxuICB9XHJcbn0iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_my-surveys_my-surveys_module_ts.js.map