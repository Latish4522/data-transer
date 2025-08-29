"use strict";
(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["src_app_claims_claims_module_ts"],{

/***/ 9921:
/*!***********************************************************!*\
  !*** ./src/app/claims/claim-info/claim-info.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimInfoComponent": () => (/* binding */ ClaimInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ 2313);
/* harmony import */ var src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/constants */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dashboard/survey.service */ 3525);
/* harmony import */ var _claims_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../claims.service */ 2515);
/* harmony import */ var src_app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/dashboard.service */ 1413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../qrcode-info/qrcode-info.component */ 7593);










function ClaimInfoComponent_div_0_h1_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 6)(1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClaimInfoComponent_div_0_h1_2_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r4.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 18);
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 19);
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimInfoComponent_div_0_div_3_div_1_div_3_img_1_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_div_3_div_1_div_3_img_2_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.isAllSurveysAnswered && !ctx_r9.isEachSurveyAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.isAllSurveysAnswered || ctx_r9.isEachSurveyAnswered);
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r16.paymentMsg);
} }
function ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " completed! Click PAY ME to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " more. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Congratulations! Day ", ctx_r17.currentSurveyDay, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" get ", ctx_r17.surveyDetails == null ? null : ctx_r17.surveyDetails.currency, " ", ctx_r17.surveyDetails == null ? null : ctx_r17.surveyDetails.paymentOffered, " (up to 3 business days). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Do a survey tomorrow for ", ctx_r17.surveyDetails == null ? null : ctx_r17.surveyDetails.currency, " ", ctx_r17.surveyDetails == null ? null : ctx_r17.surveyDetails.paymentOffered, " ");
} }
function ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_h3_2_Template, 2, 1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_h3_3_Template, 10, 5, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.paymentMsg != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.paymentMsg == "");
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "You can only claim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " payment upon completion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " of the last survey! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r19.surveyDetails == null ? null : ctx_r19.surveyDetails.paymentMessage, " ");
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Congratulations! You have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " finished all Surveys! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Click on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " the Pay Me button and Receive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " within 3 business days. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r20.surveyDetails == null ? null : ctx_r20.surveyDetails.currency, " ", ctx_r20.surveyDetails == null ? null : ctx_r20.surveyDetails.paymentOffered, "");
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Congratulations! You have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " completed your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " registration! You will receive your payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " within 3 business days. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_1_Template, 6, 0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_2_Template, 2, 1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_3_Template, 11, 2, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ClaimInfoComponent_div_0_div_3_div_1_div_7_h3_4_Template, 8, 0, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r12.isAllSurveysAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.isAllSurveysAnswered && ctx_r12.appId != "mmind" && ctx_r12.isSidOrSSId == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.isAllSurveysAnswered && ctx_r12.appId != "mmind" && ctx_r12.isSidOrSSId != "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.isAllSurveysAnswered && ctx_r12.appId == "mmind");
} }
function ClaimInfoComponent_div_0_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Thank you for answering this survey. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Click on pay me button and receive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " in 3 business days. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r13.surveyDetails == null ? null : ctx_r13.surveyDetails.currency, " ", ctx_r13.surveyDetails == null ? null : ctx_r13.surveyDetails.paymentOffered, " ");
} }
function ClaimInfoComponent_div_0_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimInfoComponent_div_0_div_3_div_1_div_3_Template, 3, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ClaimInfoComponent_div_0_div_3_div_1_div_4_Template, 4, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ClaimInfoComponent_div_0_div_3_div_1_ng_container_6_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ClaimInfoComponent_div_0_div_3_div_1_div_7_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ClaimInfoComponent_div_0_div_3_div_1_div_8_Template, 9, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.surveyType != "feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.surveyType == "feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.isEachSurveyAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.surveyType != "feedback" && !ctx_r6.isEachSurveyAnswered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.surveyType == "feedback" && !ctx_r6.isEachSurveyAnswered);
} }
function ClaimInfoComponent_div_0_div_3_div_2_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Click on Pay Me button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ClaimInfoComponent_div_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_div_3_div_2_p_2_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClaimInfoComponent_div_0_div_3_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r23.onPayMeOrOkBtnClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r7.isAllSurveysAnswered || ctx_r7.isEachSurveyAnswered) && ctx_r7.surveyType != "feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.isAllSurveysAnswered || ctx_r7.isEachSurveyAnswered ? "Pay Me" : "Okay", " ");
} }
function ClaimInfoComponent_div_0_div_3_div_3_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r25.surveyDetails == null ? null : ctx_r25.surveyDetails.claimMessage, " ");
} }
function ClaimInfoComponent_div_0_div_3_div_3_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "You have claimed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r26.getCurrencySymbol(ctx_r26.surveyDetails == null ? null : ctx_r26.surveyDetails.currency), " ", ctx_r26.surveyDetails == null ? null : ctx_r26.surveyDetails.paymentOffered, "");
} }
function ClaimInfoComponent_div_0_div_3_div_3_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Payment will be made to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " as a virtual/mobile gift card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " (redeemable stored value code). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r27.personMobileNumber, " ");
} }
function ClaimInfoComponent_div_0_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 13)(2, "div", 32)(3, "div", 33)(4, "div", 34)(5, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ClaimInfoComponent_div_0_div_3_div_3_p_9_Template, 2, 1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ClaimInfoComponent_div_0_div_3_div_3_p_10_Template, 4, 2, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ClaimInfoComponent_div_0_div_3_div_3_p_11_Template, 9, 1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 38)(13, "div", 27)(14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClaimInfoComponent_div_0_div_3_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r28.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r8.getCurrencySymbol(ctx_r8.surveyDetails == null ? null : ctx_r8.surveyDetails.currency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.surveyDetails == null ? null : ctx_r8.surveyDetails.paymentOffered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.isSidOrSSId == "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.isSidOrSSId != "ssid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.isSidOrSSId != "ssid");
} }
function ClaimInfoComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimInfoComponent_div_0_div_3_div_1_Template, 9, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_div_3_div_2_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimInfoComponent_div_0_div_3_div_3_Template, 16, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isPaymentClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isPaymentClaimed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isPaymentClaimed);
} }
function ClaimInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClaimInfoComponent_div_0_h1_2_Template, 3, 0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClaimInfoComponent_div_0_div_3_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.surveyType != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isScreenLoaded);
} }
function ClaimInfoComponent_app_qrcode_info_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-qrcode-info", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("closeQRCode", function ClaimInfoComponent_app_qrcode_info_1_Template_app_qrcode_info_closeQRCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.closeQRCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("reqFrom", "claimInfoScreen")("qrCodeUrl", ctx_r1.qrCodeUrl)("qrCode", ctx_r1.qrCode);
} }
class ClaimInfoComponent {
    constructor(router, sharedService, surveyService, claimsService, dashboardService) {
        this.router = router;
        this.sharedService = sharedService;
        this.surveyService = surveyService;
        this.claimsService = claimsService;
        this.dashboardService = dashboardService;
        this.surveyDetails = {};
        this.isAllSurveysAnswered = false;
        this.isSidOrSSId = '';
        this.allSurveyIds = [];
        this.isPaymentClaimed = false;
        this.appId = '';
        this.isScreenLoaded = false;
        this.showQRCodeInfo = false;
        this.isEachSurveyAnswered = false;
        this.paymentMsg = '';
    }
    ngOnInit() {
        let sid = localStorage.getItem('sid');
        let ssid = localStorage.getItem('ssid');
        this.surveyType = localStorage.getItem('surveyType');
        this.currentSurveyDay = localStorage.getItem('currentSurveyDay');
        if (sid != '' && sid != 'null' && sid != null) {
            this.isSidOrSSId = 'sid';
        }
        if (ssid != '' && ssid != 'null' && ssid != null) {
            this.isSidOrSSId = 'ssid';
        }
        this.personMobileNumber = localStorage.getItem('personMobileNumber');
        this.appId = localStorage.getItem('app');
        this.sharedqrcode = localStorage.getItem('sharedqrcode');
        this.claimType = localStorage.getItem('claim');
        this.fetchProfileDetails();
        if (this.isSidOrSSId == 'sid') {
            this.getSurveyListDetails();
        }
        else if (this.isSidOrSSId == 'ssid') {
            this.getSurveySetDetails();
        }
    }
    // ********** Method to get the Profile details ******************
    fetchProfileDetails() {
        this.dashboardService.getProfileDetails(localStorage.getItem('personBluenumber')).subscribe((res) => {
            this.sharedService.stopLoader();
            if (!res['isError']) {
                this.profileInfo = res.result;
            }
        });
    }
    // ********** Method to get the Survey details ******************
    getSurveySetDetails() {
        this.sharedService.startLoader();
        if (localStorage.getItem('ssid') == "null") {
            this.sharedService.successErrorMsg['message'] = "Please scan QR code again.";
            this.sharedService.successErrorMsg['showAcceptReject'] = false;
            this.sharedService.successErrorMsg['showProceed'] = false;
            this.router.navigateByUrl('home/messages');
        }
        this.surveyService.getSurveyGroupByQRCode(localStorage.getItem('ssid')).subscribe((res) => {
            this.sharedService.stopLoader();
            this.isScreenLoaded = true;
            if (!res['isError']) {
                this.surveyDetails = res['result'];
                localStorage.setItem('surveySetId', this.surveyDetails['id']);
                this.isPaymentClaimed = res['result']['claim'];
                // ******** To check all Surveys are answered or not for claim status ******************
                let count = 0;
                this.surveyDetails['surveyGroupItems'].forEach((item) => {
                    this.surveyDetails['currency'] = item['currency'];
                    this.surveyDetails['paymentOffered'] = item['paymentOffered'];
                    this.allSurveyIds.push(item['surveyId']);
                    if (item['isAnswered']) {
                        count++;
                    }
                });
                // claimType
                // Check this condition first then check count for isAllSurveysAnswered
                /* *****************************************************************************
                Updated the below condition for SurveyType to accommodate the Claims Logic
                if surveyTpe is empty or survey Tpe is ShareQRCODE
                this.surveyType == ConfigConstants.shareQrCode || this.surveyType == ''
                **************************************************************************** */
                if (this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey && (this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '')) {
                    if (count > 0) {
                        let payMsg = this.surveyDetails['paymentMessage'].split('^');
                        if (payMsg.length > 1) {
                            this.paymentMsg = payMsg[Number(this.currentSurveyDay) - 1];
                        }
                        else {
                            this.paymentMsg = '';
                        }
                        this.isEachSurveyAnswered = true;
                        return;
                    }
                    else {
                        this.router.navigateByUrl('home/info');
                    }
                }
                else {
                    this.isEachSurveyAnswered = false;
                }
                if (count == this.surveyDetails['surveyGroupItems'].length && count != 0) {
                    this.isAllSurveysAnswered = true;
                    return;
                }
                else {
                    this.isAllSurveysAnswered = false;
                }
            }
        }, (error) => {
            if (error.error.responseException.exceptionMessage == "Survey is not found for QR:null") {
                this.goBack();
                return;
            }
        });
    }
    // ******** To check SID is answered or not and the claim status ******************
    getSurveyListDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyDetailsbyQRCode(localStorage.getItem('sid')).subscribe(result => {
            if (!result['isError']) {
                this.surveyDetails = result['result'];
                this.isPaymentClaimed = result['result']['claim'];
            }
            this.sharedService.stopLoader();
            this.isScreenLoaded = true;
        }, error => {
            this.fetchSurveyAmountDetails();
            this.router.navigateByUrl('/claims');
            if (error.error.responseException.exceptionMessage.substring(0, 15) == "AlreadyAnswered") {
                this.isAllSurveysAnswered = true;
                return;
            }
            else if (error.error.responseException.exceptionMessage.includes('ReachedMaxParticipants')) {
                this.isAllSurveysAnswered = false;
                return;
            }
            else {
                this.isAllSurveysAnswered = false;
                return;
            }
        });
    }
    // *********** To fetch the Survey SID details if survey is already answered *************
    fetchSurveyAmountDetails() {
        this.sharedService.startLoader();
        this.surveyService.getSurveyDetailsResponseForAnsweredQRCode(localStorage.getItem('sid')).subscribe(res => {
            this.sharedService.stopLoader();
            this.isScreenLoaded = true;
            if (!res['isError']) {
                this.surveyDetails = res['result'];
                this.isPaymentClaimed = res['result']['claim'];
            }
        });
    }
    // *********** Triggers on Pay Me Button is clicked *********************
    onPayMeOrOkBtnClick() {
        if (this.isAllSurveysAnswered || this.isEachSurveyAnswered) {
            let params = {};
            if (this.isSidOrSSId == 'sid') {
                params = {
                    surveyId: this.surveyDetails['id'],
                    amount: Number(this.surveyDetails['paymentOffered']),
                    latitude: this.profileInfo['latitude'],
                    longitude: this.profileInfo['longitude']
                };
                // ***** Claim API for SID *****************
                this.sharedService.startLoader();
                this.claimsService.claimSurvey(params).subscribe((res) => {
                    this.sharedService.stopLoader();
                    console.log(res);
                    if (!res['isError']) {
                        this.isPaymentClaimed = true;
                    }
                });
            }
            else if (this.isSidOrSSId == 'ssid') {
                this.sharedService.startLoader();
                params = {
                    surveySetId: this.surveyDetails['id'],
                    dataRequestIds: this.allSurveyIds,
                    amount: Number(this.surveyDetails['paymentOffered']),
                    latitude: this.profileInfo['latitude'],
                    longitude: this.profileInfo['longitude'],
                };
                // ********** Pass the Current Survey Id in the Payload ***************
                if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey) {
                    let survey = this.surveyDetails['surveyGroupItems'][Number(this.currentSurveyDay) - 1];
                    params['surveyId'] = survey['surveyId'];
                }
                // ***** Claim API for SSID *****************
                this.claimsService.claimSurveySet(params).subscribe((res) => {
                    this.sharedService.stopLoader();
                    console.log(res);
                    if (!res['isError']) {
                        if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') || ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey && this.currentSurveyDay == 1)) {
                            if (this.sharedqrcode != '' && this.sharedqrcode != null) {
                                this.checkSurveyCompletionData();
                            }
                            else {
                                if ((this.surveyType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.shareQrCode || this.surveyType == '') && this.claimType == src_app_models_constants__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.eachSurvey) {
                                    if (Number(this.currentSurveyDay) > 1) {
                                        this.isPaymentClaimed = true;
                                    }
                                    else {
                                        this.saveClaimQRCode();
                                    }
                                }
                                else {
                                    this.saveClaimQRCode();
                                }
                            }
                        }
                        else {
                            this.isPaymentClaimed = true;
                        }
                    }
                });
            }
        }
        else {
            this.goBack();
        }
    }
    goBack() {
        this.router.navigateByUrl('home/info');
    }
    // *************** Post API to store the SSId deatils for Claim **********************
    saveClaimQRCode() {
        let params = {
            surveySetId: this.surveyDetails['id'],
        };
        this.sharedService.startLoader();
        this.claimsService.checkForsharedCode(params).pipe((0,rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            console.log(res);
            if (res['result']) {
                // ********** Dont show QR CODE if survey Type is empty ****************
                if (this.surveyType == '') {
                    this.closeQRCode({ close: true });
                }
                else {
                    // ********** Show QR CODE only if survey Type is Share QR Code ****************
                    this.showQRCodeInfo = true;
                    this.qrCodeUrl = res['result']['qrImageUrl'];
                    this.qrCode = res['result']['qrCode'];
                }
            }
        });
    }
    // *********** API to Get the Claim QR Code Details *******************
    // ********* Internally based on the success response GET API is called ******
    checkSurveyCompletionData() {
        let params = {
            QrCode: this.sharedqrcode,
        };
        this.sharedService.startLoader();
        this.claimsService.getSharedCodeDetails(params).pipe((0,rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            console.log(res);
            if (res['result']) {
                let param = {};
                if (res['result']['surveyCompletion']) {
                    param = {
                        SurveySetQRCode: localStorage.getItem('ssid'),
                        IsCreate: true
                    };
                }
                else {
                    param = {
                        SurveySetQRCode: localStorage.getItem('ssid'),
                        GeneratorSurveyClaim: true,
                        IsCreate: true,
                        Latitude: this.profileInfo['latitude'],
                        Longitude: this.profileInfo['longitude'],
                        QrCode: this.sharedqrcode
                    };
                }
                this.claimGeneratorSurvey(param);
            }
        });
    }
    claimGeneratorSurvey(params) {
        this.sharedService.startLoader();
        this.claimsService.getSharedCodeDetails(params).pipe((0,rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            if (res['result']) {
                // ********** Dont show QR CODE if survey Type is empty ****************
                if (this.surveyType == '') {
                    this.closeQRCode({ close: true });
                }
                else {
                    // ********** Show QR CODE only if survey Type is Share QR Code ****************
                    this.showQRCodeInfo = true;
                    this.qrCodeUrl = res['result']['qrImageUrl'];
                    this.qrCode = res['result']['qrCode'];
                }
            }
        });
    }
    closeQRCode(event) {
        if (event['close']) {
            this.showQRCodeInfo = false;
            this.isPaymentClaimed = true;
        }
    }
    getCurrencySymbol(countryCode) {
        return this.sharedService.getCurrencySymbol(countryCode);
    }
}
ClaimInfoComponent.ɵfac = function ClaimInfoComponent_Factory(t) { return new (t || ClaimInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_2__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_claims_service__WEBPACK_IMPORTED_MODULE_3__.ClaimsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService)); };
ClaimInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ClaimInfoComponent, selectors: [["app-claim-info"]], decls: 2, vars: 2, consts: [["class", "pma", 4, "ngIf"], [3, "reqFrom", "qrCodeUrl", "qrCode", "closeQRCode", 4, "ngIf"], [1, "pma"], [1, "container"], ["class", "pma-heading text-muted mb-4", 4, "ngIf"], [4, "ngIf"], [1, "pma-heading", "text-muted", "mb-4"], [1, "fas", "fa-chevron-left", "mouse-pointer", "pr-3", 3, "click"], ["class", "pay-screen mt-5 pt-5", 4, "ngIf"], ["class", "row text-center p-4 bottom-position", 4, "ngIf"], ["class", "row cont-cent mt-5", 4, "ngIf"], [1, "pay-screen", "mt-5", "pt-5"], [1, "row", "text-center"], [1, "col-md-12"], [1, "row"], ["class", "col-md-12 text-center mt-4", 4, "ngIf"], ["src", "../../../assets/media/pay-logo.svg", "alt", "", "class", "img-fluid", 4, "ngIf"], ["src", "../../../assets/media/reward-cup.svg", "alt", "", "class", "img-fluid", 4, "ngIf"], ["src", "../../../assets/media/pay-logo.svg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/media/reward-cup.svg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/media/success-logo.svg", "alt", "", 1, "img-fluid", "p-success"], [1, "big-font", "pb-4"], [1, "col-md-12", "text-center", "mt-4"], ["class", "", 4, "ngIf"], [1, "text-primary"], [1, ""], [1, "row", "text-center", "p-4", "bottom-position"], [1, "col-md-12", "text-center"], ["class", "payme-des", 4, "ngIf"], [1, "btn", "btn-mm-p", 3, "click"], [1, "payme-des"], [1, "row", "cont-cent", "mt-5"], [1, "text-center", "mt-5"], [1, "myr-icon-green", "mb-4"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mr-2"], ["class", "payment-succ-des", 4, "ngIf"], ["class", "payment-des", 4, "ngIf"], [1, "row", "text-center", "ms-0", "p-4", "bottom-position"], [1, "payment-succ-des"], [1, "payment-des"], [3, "reqFrom", "qrCodeUrl", "qrCode", "closeQRCode"]], template: function ClaimInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ClaimInfoComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClaimInfoComponent_app_qrcode_info_1_Template, 1, 3, "app-qrcode-info", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showQRCodeInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showQRCodeInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_5__.QrcodeInfoComponent], styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n.pma[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  line-height: 24px;\n  font-weight: 500;\n  color: #000000;\n}\n.pay-screen[_ngcontent-%COMP%] {\n  z-index: 999999999999;\n  background-color: #fff;\n}\n.bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.btn-mm-p-disabled[_ngcontent-%COMP%] {\n  background-color: #c4c4c4;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 9px 104px !important;\n  line-height: 19px;\n}\n.btn-mm-p-disabled[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.payme-des[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  \n  text-align: center;\n}\n.myr-icon[_ngcontent-%COMP%] {\n  background-color: #D9D9D9 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  margin-left: 103px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.myr-icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #8A8A8A;\n}\n.myr-icon[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  \n  text-align: center;\n}\n.myr-icon-green[_ngcontent-%COMP%] {\n  background-color: #0CAD26 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.myr-icon-green[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #F3F2F2;\n  margin-bottom: 0px;\n}\n.myr-icon-green[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #F3F2F2;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  \n  margin-bottom: 0px;\n  text-align: center;\n}\n.payment-succ-des[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 25px;\n  text-align: center;\n  color: #AD0C62;\n}\n.payment-des[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-align: center;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltLWluZm8uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdCQUFBO0FBRko7QUFHSTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDS007QUROZDtBQU9BO0VBQ0kscUJBQUE7RUFFQSxzQkNUTztBREdYO0FBY0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBWEo7QUFjQTtFQUNJLHlCQy9Ca0I7RURnQ2xCLGVDWEc7RURZSCxlQ2lCTTtFRGhCTixtQkNJSTtFREhKLFdDN0JPO0VEOEJQLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVhKO0FBZUk7RUFDRSxZQUFBO0FBYk47QUFtQkE7RUFDSSx5QkNuRFM7RURvRFQsZUM5Qkc7RUQrQkgsZUNGTTtFREdOLG1CQ2ZJO0VEZ0JKLFdDaERPO0VEaURQLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBaEJKO0FBa0JJO0VBQ0UsWUFBQTtBQWhCTjtBQW1CRTtFQUNFLGNDakVTO0VEa0VULGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0osNEJBQUE7RUFFSSxrQkFBQTtBQWpCSjtBQXFCQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFsQkY7QUFtQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWpCSjtBQW1CRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNKLDRCQUFBO0VBRUksa0JBQUE7QUFsQko7QUF3QkE7RUFDRSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXJCRjtBQXVCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFyQko7QUF1QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDSiw0QkFBQTtFQUNBLGtCQUFBO0VBQ0ksa0JBQUE7QUFyQko7QUEwQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0M1SVc7QURxSGI7QUF5QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXRCRiIsImZpbGUiOiJjbGFpbS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ucG1he1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZi0yMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcclxuICAgIH1cclxuICAgIC5wbWEtaGVhZGluZ3tcclxuICAgICAgLy8gaGVpZ2h0OiAxNDhweDtcclxuICAgIH1cclxufVxyXG4ucGF5LXNjcmVlbntcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICAvLyByaWdodDogMDtcclxuICAgIC8vIGJvdHRvbTogMDtcclxuICAgIC8vIHRvcDogODBweDtcclxuICAgIFxyXG5cclxufVxyXG4uYm90dG9tLXBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG5cclxufVxyXG4uYnRuLW1tLXAtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnktZGlzYWJsZWQ7XHJcbiAgICBmb250LXNpemU6ICRmLTE2O1xyXG4gICAgY3Vyc29yOiAkcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRici0xMDtcclxuICAgIGNvbG9yOiAkYmctd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogOXB4ICAxMDRweCFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuXHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vICAgdGhpcyBpcyBmb3IgcmV3YXJkIGJ1dHRvbiBcclxuXHJcbi5idG4tbW0tcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICBjdXJzb3I6ICRwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJyLTEwO1xyXG4gICAgY29sb3I6ICRiZy13aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5bWUtZGVze1xyXG4gICAgY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4vLyBteXIgcG9wIHVwIHN0eWxlcyBcclxuLm15ci1pY29ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2N3B4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwM3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjOEE4QThBO1xyXG4gIH1cclxuICBoNXtcclxuICAgIGNvbG9yOiAjOEE4QThBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLy8gLmNvbnQtY2VudHtcclxuLy8gICBtYXJnaW4tdG9wOiAxMTVweDtcclxuLy8gfVxyXG4ubXlyLWljb24tZ3JlZW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDQUQyNiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDY3cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAxMTBweDtcclxuICBoMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRjNGMkYyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICBoNXtcclxuICAgIGNvbG9yOiAjRjNGMkYyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5tYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLnBheW1lbnQtc3VjYy1kZXN7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkbW0tcHJpbWFyeTtcclxufVxyXG4ucGF5bWVudC1kZXN7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxufVxyXG4gICBcclxuIiwiLy8gUE1BIENvbG9yc1xyXG4kdGV4dC1wcmltYXJ5OiAjMEE0Nzk3O1xyXG4kbW0tcHJpbWFyeTogI0FEMEM2MjtcclxuJG1tLXByaW1hcnktZGlzYWJsZWQ6ICNjNGM0YzQ7XHJcbiRtbS1zZWNvbmRhcnk6ICM2MjFDNDM7XHJcbiRtbS1zdWNjZXNzOiAjRUE2MDBFO1xyXG4kdGV4dC1saWdodC1ncmF5OiAjRjhGOEY4O1xyXG4kdGV4dC1ncmF5OiAjNTQ1NDU0O1xyXG4kZ3JheS1iZzogI0Y4RjhGODtcclxuJGJnLXdoaXRlOiAjZmZmO1xyXG4kZ3JheS1ib3JkZXI6ICNEQURBREE7XHJcbiRibHVpc2g6ICMyNzNCNEE7XHJcbiRiZy1saWdodDogI0YzRjNGMztcclxuJHdoaXRlLWNvbG9yOiNGRkZGRkY7XHJcbiRibGFjay1jb2xvcjogIzAwMDAwMDtcclxuJHllc2J0bi1ibHVlOiAjMUM0REExO1xyXG4kbm9idG4tbGlnaHQ6ICM0NDcyQzQ7XHJcbi8vIFBNQSBGb250IFNpemVzXHJcbiRmLTEwOiAxMHB4OyAgICAgICBcclxuJGYtMTE6IDExcHg7ICAgICAgIFxyXG4kZi0xMjogMTJweDsgICAgICAgXHJcbiRmLTEzOiAxM3B4OyAgICAgICBcclxuJGYtMTQ6IDE0cHg7XHJcbiRmLTE1OiAxNXB4O1xyXG4kZi0xNjogMTZweDsgICAgXHJcbiRmLTE4OiAxOHB4OyAgICBcclxuJGYtMTk6IDE5cHg7XHJcbiRmLTIwOiAyMHB4O1xyXG4kZi0yNDogMjRweDtcclxuJGYtMjU6IDI1cHg7XHJcbiRmLTMwOiAzMHB4O1xyXG4kZi0zNjogMzZweDtcclxuJGYtNDA6IDQwcHg7XHJcblxyXG4vLyBQTUEgRm9udCBXZWlnaHRcclxuJGZ3LTYwMDogNjAwO1xyXG4kZnctNTAwOiA1MDA7XHJcbiRmdy00MDA6IDQwMDtcclxuJGZ3LTMwMDogMzAwO1xyXG5cclxuLy8gUE1BIFJhZGl1c1xyXG4kYnItMTA6IDEwcHg7XHJcblxyXG4vLyBQTUEgUGFkZGluZ3NcclxuJHBhZGQtMTA6IDEwcHg7XHJcbiRwYWRkLTIwOiAyMHB4O1xyXG4kcGFkZC0zMDogMzBweDtcclxuXHJcblxyXG4vLyBQTUEgMCBWYWx1ZXNcclxuJHZhbHVlLTA6IDBweDtcclxuXHJcbi8vIFBNQSBDdXJzb3JzXHJcbiRwb2ludGVyOiBwb2ludGVyO1xyXG5cclxuLy8gZm9udC1mYW1pbHlcclxuJGZvbnQtZmFtaWx5OidMYXRvJywgc2Fucy1zZXJpZjtcclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 1611:
/*!*****************************************************************!*\
  !*** ./src/app/claims/claims-layout/claims-layout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsLayoutComponent": () => (/* binding */ ClaimsLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ClaimsLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClaimsLayoutComponent.ɵfac = function ClaimsLayoutComponent_Factory(t) { return new (t || ClaimsLayoutComponent)(); };
ClaimsLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClaimsLayoutComponent, selectors: [["app-claims-layout"]], decls: 1, vars: 0, template: function ClaimsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFpbXMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 160:
/*!*************************************************!*\
  !*** ./src/app/claims/claims-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsRoutingModule": () => (/* binding */ ClaimsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _claim_info_claim_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-info/claim-info.component */ 9921);
/* harmony import */ var _claims_layout_claims_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claims-layout/claims-layout.component */ 1611);
/* harmony import */ var _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qrcode-info/qrcode-info.component */ 7593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _claims_layout_claims_layout_component__WEBPACK_IMPORTED_MODULE_1__.ClaimsLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'list', pathMatch: 'full'
            },
            { path: 'list', component: _claim_info_claim_info_component__WEBPACK_IMPORTED_MODULE_0__.ClaimInfoComponent },
            { path: 'qrinfo', component: _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_2__.QrcodeInfoComponent },
            {
                path: '**', redirectTo: 'list', pathMatch: 'full'
            },
        ]
    }
];
class ClaimsRoutingModule {
}
ClaimsRoutingModule.ɵfac = function ClaimsRoutingModule_Factory(t) { return new (t || ClaimsRoutingModule)(); };
ClaimsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ClaimsRoutingModule });
ClaimsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ClaimsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8686:
/*!*****************************************!*\
  !*** ./src/app/claims/claims.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsModule": () => (/* binding */ ClaimsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claims-routing.module */ 160);
/* harmony import */ var _claims_layout_claims_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claims-layout/claims-layout.component */ 1611);
/* harmony import */ var _claim_info_claim_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claim-info/claim-info.component */ 9921);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./qrcode-info/qrcode-info.component */ 7593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class ClaimsModule {
}
ClaimsModule.ɵfac = function ClaimsModule_Factory(t) { return new (t || ClaimsModule)(); };
ClaimsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ClaimsModule });
ClaimsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ClaimsModule, { declarations: [_claims_layout_claims_layout_component__WEBPACK_IMPORTED_MODULE_1__.ClaimsLayoutComponent,
        _claim_info_claim_info_component__WEBPACK_IMPORTED_MODULE_2__.ClaimInfoComponent,
        _qrcode_info_qrcode_info_component__WEBPACK_IMPORTED_MODULE_4__.QrcodeInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _claims_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClaimsRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 7593:
/*!*************************************************************!*\
  !*** ./src/app/claims/qrcode-info/qrcode-info.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrcodeInfoComponent": () => (/* binding */ QrcodeInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.service */ 7420);
/* harmony import */ var _claims_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../claims.service */ 2515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







function QrcodeInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Share this QR code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " with a coworker! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " They can earn $30 too! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 13)(19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " MillionMakers\u2122");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " by Bluenumber\u00AE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QrcodeInfoComponent_div_2_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.onOkClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Okay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.qrCodeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.qrCode, " ");
} }
class QrcodeInfoComponent {
    constructor(router, sharedService, claimsService) {
        this.router = router;
        this.sharedService = sharedService;
        this.claimsService = claimsService;
        this.closeQRCode = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        // ********** Call the Get API when req is from the Home Page ************************
        if (this.reqFrom != 'claimInfoScreen') {
            this.checkQRCodeDetails();
        }
    }
    checkQRCodeDetails() {
        let params = {
            SurveySetQRCode: localStorage.getItem('ssid'),
            GeneratorBluenumber: true
        };
        this.sharedService.startLoader();
        this.claimsService.getSharedCodeDetails(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.sharedService.stopLoader())).subscribe((res) => {
            console.log(res);
            if (res['result']) {
                this.qrCodeUrl = res['result']['qrImageUrl'];
                this.qrCode = res['result']['qrCode'];
            }
        }, (error => {
            this.router.navigateByUrl('home/info');
        }));
    }
    onOkClick() {
        if (this.reqFrom == 'claimInfoScreen') {
            this.closeQRCode.emit({ close: true });
        }
        else {
            this.router.navigateByUrl('home/info');
        }
    }
}
QrcodeInfoComponent.ɵfac = function QrcodeInfoComponent_Factory(t) { return new (t || QrcodeInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_claims_service__WEBPACK_IMPORTED_MODULE_1__.ClaimsService)); };
QrcodeInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QrcodeInfoComponent, selectors: [["app-qrcode-info"]], inputs: { qrCodeUrl: "qrCodeUrl", qrCode: "qrCode", reqFrom: "reqFrom" }, outputs: { closeQRCode: "closeQRCode" }, decls: 3, vars: 1, consts: [[1, "pma"], [1, "container"], [4, "ngIf"], [1, "pay-screen", "mt-5", "pt-5"], [1, "row", "text-center"], [1, "col-md-12"], [1, "share-txt"], [1, "text-center"], ["alt", "", "width", "200px", "height", "200px", 1, "img-fluid", "p-success", 3, "src"], [1, "row"], [1, "col-md-12", "text-center", "mt-4"], [1, "earn-txt"], [1, "scan-txt"], [1, "welcomet-text"], [1, "head-txt"], [1, "text-primary"], [1, "row", "text-center", "ms-0", "p-4", "bottom-position"], [1, "col-md-12", "text-center"], [1, "btn", "btn-mm-p", 3, "click"]], template: function QrcodeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, QrcodeInfoComponent_div_2_Template, 27, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.qrCodeUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".pma[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n.pma[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  line-height: 24px;\n  font-weight: 500;\n  color: #000000;\n}\n.pay-screen[_ngcontent-%COMP%] {\n  z-index: 999999999999;\n  background-color: #fff;\n}\n.bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.btn-mm-p-disabled[_ngcontent-%COMP%] {\n  background-color: #c4c4c4;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 9px 104px !important;\n  line-height: 19px;\n}\n.btn-mm-p-disabled[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.btn-mm-p[_ngcontent-%COMP%] {\n  background-color: #AD0C62;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 10px;\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 104px !important;\n  width: 100%;\n}\n.btn-mm-p[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.share-txt[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  \n  text-align: center;\n}\n.scan-txt[_ngcontent-%COMP%] {\n  color: #28a66c !important;\n  font-weight: 600;\n  text-align: center;\n  font-size: 20px;\n  line-height: 28px;\n}\n.earn-txt[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  \n  text-align: center;\n}\n.myr-icon[_ngcontent-%COMP%] {\n  background-color: #5C8C05 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  margin-left: 103px;\n}\n.myr-icon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 50px;\n  line-height: 33px;\n  text-align: center;\n  color: #8A8A8A;\n}\n.myr-icon[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  \n  text-align: center;\n}\n.myr-icon-green[_ngcontent-%COMP%] {\n  background-color: #0CAD26 !important;\n  border-radius: 67px !important;\n  width: 110px;\n  height: 110px;\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.myr-icon-green[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 33px;\n  text-align: center;\n  color: #F3F2F2;\n  margin-bottom: 0px;\n}\n.myr-icon-green[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #F3F2F2;\n  font-weight: 500;\n  font-size: 25px;\n  line-height: 24px;\n  margin-bottom: 0px;\n  \n  text-align: center;\n}\n.welcomet-text[_ngcontent-%COMP%] {\n  color: #8A8A8A;\n  font-size: 20px;\n}\n.head-txt[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyY29kZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3QkFBQTtBQUZKO0FBSUk7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ0lNO0FETmQ7QUFNQTtFQUNJLHFCQUFBO0VBQ0Esc0JDUE87QURJWDtBQU1BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhKO0FBT0E7RUFDSSx5QkN6QmtCO0VEMEJsQixlQ0xHO0VETUgsZUN1Qk07RUR0Qk4sbUJDVUk7RURUSixXQ3ZCTztFRHdCUCxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFKSjtBQU1JO0VBQ0ksWUFBQTtBQUpSO0FBVUE7RUFDSSx5QkMzQ1M7RUQ0Q1QsZUN0Qkc7RUR1QkgsZUNNTTtFRExOLG1CQ1BJO0VEUUosV0N4Q087RUR5Q1AsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFQSjtBQVNJO0VBQ0ksWUFBQTtBQVBSO0FBV0E7RUFDSSxjQzFEUztFRDJEVCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUko7QUFXQTtFQUNJLGNDM0VTO0VENEVULGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBWUE7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVRKO0FBV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVRSO0FBWUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFjQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFjSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUVBLGtCQUFBO0FBZFI7QUFrQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWZKO0FBa0JBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBZkoiLCJmaWxlIjoicXJjb2RlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQTUEgVmFyaWFibGVzXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5wbWEge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemUgIDogJGYtMjAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yICAgICAgOiAkYmxhY2stY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXktc2NyZWVuIHtcclxuICAgIHotaW5kZXggICAgICAgICA6IDk5OTk5OTk5OTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy13aGl0ZTtcclxufVxyXG5cclxuLmJvdHRvbS1wb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b20gIDogMHB4O1xyXG4gICAgbGVmdCAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgOiAwcHg7XHJcblxyXG59XHJcblxyXG4uYnRuLW1tLXAtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1tLXByaW1hcnktZGlzYWJsZWQ7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAkZi0xNjtcclxuICAgIGN1cnNvciAgICAgICAgICA6ICRwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJGJyLTEwO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogJGJnLXdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNTAwO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogOXB4IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgOiAxOXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gICB0aGlzIGlzIGZvciByZXdhcmQgYnV0dG9uIFxyXG5cclxuLmJ0bi1tbS1wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogJGYtMTY7XHJcbiAgICBjdXJzb3IgICAgICAgICAgOiAkcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6ICRici0xMDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICRiZy13aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDEwcHggMTA0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2hhcmUtdHh0IHtcclxuICAgIGNvbG9yICAgICAgOiAkbW0tcHJpbWFyeTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemUgIDogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY2FuLXR4dCB7XHJcbiAgICBjb2xvciAgICAgIDogIzI4YTY2YyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemUgIDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4uZWFybi10eHQge1xyXG4gICAgY29sb3IgICAgICA6ICRtbS1wcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZSAgOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gbXlyIHBvcCB1cCBzdHlsZXMgXHJcbi5teXItaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUM4QzA1ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA2N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMTBweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDExMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQgICAgIDogMTAzcHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplICA6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICBjb2xvciAgICAgIDogIzhBOEE4QTtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgY29sb3IgICAgICA6ICM4QThBOEE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemUgIDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5teXItaWNvbi1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMENBRDI2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA2N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMTBweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDExMHB4O1xyXG4gICAgYm94LXNoYWRvdyAgICAgIDogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemUgIDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yICAgICAgOiAjRjNGMkYyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgICAgY29sb3IgICAgICA6ICNGM0YyRjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemUgIDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2VsY29tZXQtdGV4dCB7XHJcbiAgICBjb2xvciAgICA6ICM4QThBOEE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkLXR4dCB7XHJcbiAgICBjb2xvciAgICAgIDogI0FEMEM2MjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iLCIvLyBQTUEgQ29sb3JzXHJcbiR0ZXh0LXByaW1hcnk6ICMwQTQ3OTc7XHJcbiRtbS1wcmltYXJ5OiAjQUQwQzYyO1xyXG4kbW0tcHJpbWFyeS1kaXNhYmxlZDogI2M0YzRjNDtcclxuJG1tLXNlY29uZGFyeTogIzYyMUM0MztcclxuJG1tLXN1Y2Nlc3M6ICNFQTYwMEU7XHJcbiR0ZXh0LWxpZ2h0LWdyYXk6ICNGOEY4Rjg7XHJcbiR0ZXh0LWdyYXk6ICM1NDU0NTQ7XHJcbiRncmF5LWJnOiAjRjhGOEY4O1xyXG4kYmctd2hpdGU6ICNmZmY7XHJcbiRncmF5LWJvcmRlcjogI0RBREFEQTtcclxuJGJsdWlzaDogIzI3M0I0QTtcclxuJGJnLWxpZ2h0OiAjRjNGM0YzO1xyXG4kd2hpdGUtY29sb3I6I0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4keWVzYnRuLWJsdWU6ICMxQzREQTE7XHJcbiRub2J0bi1saWdodDogIzQ0NzJDNDtcclxuLy8gUE1BIEZvbnQgU2l6ZXNcclxuJGYtMTA6IDEwcHg7ICAgICAgIFxyXG4kZi0xMTogMTFweDsgICAgICAgXHJcbiRmLTEyOiAxMnB4OyAgICAgICBcclxuJGYtMTM6IDEzcHg7ICAgICAgIFxyXG4kZi0xNDogMTRweDtcclxuJGYtMTU6IDE1cHg7XHJcbiRmLTE2OiAxNnB4OyAgICBcclxuJGYtMTg6IDE4cHg7ICAgIFxyXG4kZi0xOTogMTlweDtcclxuJGYtMjA6IDIwcHg7XHJcbiRmLTI0OiAyNHB4O1xyXG4kZi0yNTogMjVweDtcclxuJGYtMzA6IDMwcHg7XHJcbiRmLTM2OiAzNnB4O1xyXG4kZi00MDogNDBweDtcclxuXHJcbi8vIFBNQSBGb250IFdlaWdodFxyXG4kZnctNjAwOiA2MDA7XHJcbiRmdy01MDA6IDUwMDtcclxuJGZ3LTQwMDogNDAwO1xyXG4kZnctMzAwOiAzMDA7XHJcblxyXG4vLyBQTUEgUmFkaXVzXHJcbiRici0xMDogMTBweDtcclxuXHJcbi8vIFBNQSBQYWRkaW5nc1xyXG4kcGFkZC0xMDogMTBweDtcclxuJHBhZGQtMjA6IDIwcHg7XHJcbiRwYWRkLTMwOiAzMHB4O1xyXG5cclxuXHJcbi8vIFBNQSAwIFZhbHVlc1xyXG4kdmFsdWUtMDogMHB4O1xyXG5cclxuLy8gUE1BIEN1cnNvcnNcclxuJHBvaW50ZXI6IHBvaW50ZXI7XHJcblxyXG4vLyBmb250LWZhbWlseVxyXG4kZm9udC1mYW1pbHk6J0xhdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuIl19 */"] });


/***/ }),

/***/ 1413:
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getProfileDetails(bNumber) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Person/${bNumber}`);
    }
    getDataRequesDetailsById(surveyId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataRequest/${surveyId}`);
    }
    updateProfileDetails(params) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Person`, params);
    }
    updateProfileStatus() {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/Person/complete`, null);
    }
    uploadFileToSurvey(dataRequestId, params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/File/${dataRequestId}`, params);
    }
    setConnectionRequestDetailsByCode(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberGlobalAPI}/api/v1/ConnectionRequestCode/ConnectionByCode`, params);
    }
    verifyOTP(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/OtpTracker/VerifyOTPUpdate`, params);
    }
    generateOTP(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/OtpTracker/GenerateOTP`, params);
    }
    isBlueNoQualified(params) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/DataQualified/bluenumberids?ContextId=${params['ContextId']}&PhonenumbersorBluenumbers=${params['blueNo']}`);
    }
    checkSSICredentials() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberCredentialsAPI}/api/v1/Account/CheckSSICredential`);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DashboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=src_app_claims_claims_module_ts.js.map