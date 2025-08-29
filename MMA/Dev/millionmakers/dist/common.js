"use strict";
(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["common"],{

/***/ 2515:
/*!******************************************!*\
  !*** ./src/app/claims/claims.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsService": () => (/* binding */ ClaimsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ClaimsService {
    constructor(http) {
        this.http = http;
    }
    claimSurveySet(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/PaymentRequest/SurveyGroupSet`, params);
    }
    claimSurvey(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/PaymentRequest/Survey`, params);
    }
    checkForsharedCode(params) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/ShareCode/CreateShareCode`, params);
    }
    getSharedCodeDetails(params) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BlueNumberDataReqAPI}/api/v1/ShareCode/GetShareCode`, { params: params });
    }
}
ClaimsService.ɵfac = function ClaimsService_Factory(t) { return new (t || ClaimsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ClaimsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClaimsService, factory: ClaimsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7432:
/*!*************************************!*\
  !*** ./src/app/models/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigConstants": () => (/* binding */ ConfigConstants)
/* harmony export */ });
class ConfigConstants {
}
ConfigConstants.shareQrCode = 'shareqrcode';
ConfigConstants.eachSurvey = 'eachsurvey';
ConfigConstants.feedback = 'feedback';
ConfigConstants.verify = 'verify';
ConfigConstants.request = 'request';
;


/***/ }),

/***/ 8653:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 8947);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }

  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map