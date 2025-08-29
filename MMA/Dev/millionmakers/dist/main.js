(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_dashboard_service_ts-src_app_dashboard_survey_service_ts-node_modul-6223be"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/auth/auth.module */ 1674)).then(m => m.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dashboard_dashboard_service_ts-src_app_dashboard_survey_service_ts-node_modul-6223be"), __webpack_require__.e("common"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule),
    },
    {
        path: 'claims',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_claims_claims_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/claims/claims.module */ 8686)).then(m => m.ClaimsModule),
    },
    {
        path: 'help',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_help_help_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/help/help.module */ 6700)).then(m => m.HelpModule),
    },
    {
        path: 'my-surveys',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_my-surveys_my-surveys_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/my-surveys/my-surveys.module */ 460)).then(m => m.MySurveysModule),
    },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.service */ 7420);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-loading */ 1839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function () { return { backdropBorderRadius: "0px", fullScreenBackdrop: true }; };
//import { OAuthService } from 'angular-oauth2-oidc';
// import { authConfig } from './configs/auth.config';
//import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
class AppComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.serviceLoader = false;
        // this.configureOauth();
    }
    // private configureOauth() {
    //   this.oauthService.configure(authConfig);
    //   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
    //   /*https://manfredsteyer.github.io/angular-oauth2-oidc/docs/additional-documentation/refreshing-a-token.html */
    //   this.oauthService.setupAutomaticSilentRefresh();
    // }
    ngAfterContentChecked() {
        this.serviceLoader = this.sharedService.loader;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 3, consts: [[3, "show", "config"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-loading", 0)(1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.serviceLoader)("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [ngx_loading__WEBPACK_IMPORTED_MODULE_2__.NgxLoadingComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 2808);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-loading */ 1839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.service */ 7420);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _configs_interceptor_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/interceptor-providers */ 5009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








//import { OAuthModule } from 'angular-oauth2-oidc';

// import { InterceptService } from './configs/interceptor.service';








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService,
        _configs_interceptor_providers__WEBPACK_IMPORTED_MODULE_5__.HttpInterceptorProviders
        // InterceptService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: InterceptService,
        //   multi: true
        // },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbProgressbarModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot(),
            ngx_loading__WEBPACK_IMPORTED_MODULE_12__.NgxLoadingModule.forRoot({}),
            // OAuthModule.forRoot({
            //   resourceServer: {
            //     allowedUrls: [environment.BlueNumberDataImportAPI, environment.BlueNumberGlobalAPI,environment.BlueNumberDataReqAPI],
            //     sendAccessToken: true
            //   }
            // }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbProgressbarModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule, ngx_loading__WEBPACK_IMPORTED_MODULE_12__.NgxLoadingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 8803:
/*!**********************************************!*\
  !*** ./src/app/configs/error.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.service */ 7420);






/**
 * This is used to logout the user, when the server responds with an unathorized status code.
 * Especially when the session token expires.
 * @export
 * @class ErrorInterceptor
 * @implements {HttpInterceptor}
 */
class ErrorInterceptor {
    constructor(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
    }
    /**
     * Intercepter intercepts the responses, and then process based on the recieved status code
     * Read more : http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof ErrorInterceptor
     */
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            console.log(err);
            this.sharedService.stopLoader();
            if (err.status === 401) {
                //alert('401 error' + request.url);
                // auto logout if 401 response returned from api
                aws_amplify__WEBPACK_IMPORTED_MODULE_2__.Auth.signOut({ global: true })
                    .then(data => {
                    console.log(data);
                    localStorage.clear();
                    this.router.navigateByUrl("/auth/login");
                })
                    .catch(err => { console.log(err); alert(err); });
            }
            else {
                // this.sharedService.showToastMesaages('error', err.error?.responseException?.exceptionMessage);
            }
            // err.error is not null, if the ResponsenEntity contains an Exception
            // err.error.message will give the custom message send from the server
            // const error = err.error.message || err.statusText;
            const error = err;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 5009:
/*!**************************************************!*\
  !*** ./src/app/configs/interceptor-providers.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorProviders": () => (/* binding */ HttpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ 1941);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 8803);



const HttpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__.JwtInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor, multi: true }
];


/***/ }),

/***/ 1941:
/*!********************************************!*\
  !*** ./src/app/configs/jwt.interceptor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
// RxJS





/**
 * This will append jwt token for the http requests.
 *
 * @export
 * @class JwtInterceptor
 * @implements {HttpInterceptor}
 */
class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        //get the idToken
        const jwtToken = localStorage.getItem('idToken');
        if (jwtToken) {
            const jwtDecodedToken = this.getDecodedAccessToken(jwtToken);
            const tokenExpirationTime = jwtDecodedToken.exp;
            const currentTime = Math.floor(new Date().getTime() / 1000);
            if (currentTime < tokenExpirationTime) {
                // if the token is not expired
                let with_auth_request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                return next.handle(with_auth_request);
            }
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(aws_amplify__WEBPACK_IMPORTED_MODULE_2__.Auth.currentSession()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((auth) => {
            let jwt = auth.getIdToken().jwtToken;
            localStorage.setItem('idToken', jwt);
            let with_auth_request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            return next.handle(with_auth_request);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err) => {
            console.log("Error ", err);
            return next.handle(request);
        }));
    }
    getDecodedAccessToken(token) {
        try {
            return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule] }); })();


/***/ }),

/***/ 7420:
/*!******************************************!*\
  !*** ./src/app/shared/shared.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 2808);



class SharedService {
    constructor(toastr) {
        this.toastr = toastr;
        this.loader = false;
        this.isLanguageChanged = false;
        this.remainingTimeForSurvey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.submitButton = true;
        this.successErrorMsg = {
            messageHeading: '',
            message: '',
            showAcceptReject: false,
            showProceed: false,
            connectionCode: '',
            nextSurveyId: '',
            firstSurveyId: '',
            lastSurveyId: '',
            isMsgFromInterceptor: false,
            isRequestSurvey: false
        };
        this.messageText = '';
        this.currencyMap = {
            AED: "د.إ", AFN: "؋", ALL: "L", AMD: "֏", ANG: "ƒ", AOA: "Kz", ARS: "$",
            AUD: "A$", AWG: "ƒ", AZN: "₼", BAM: "KM", BBD: "$", BDT: "৳", BGN: "лв",
            BHD: ".د.ب", BIF: "FBu", BMD: "$", BND: "$", BOB: "Bs.", BRL: "R$", BSD: "$",
            BTN: "Nu.", BWP: "P", BYN: "Br", BZD: "BZ$", CAD: "C$", CDF: "FC", CHF: "Fr",
            CLP: "$", CNY: "¥", COP: "$", CRC: "₡", CUP: "$", CVE: "$", CZK: "Kč", DJF: "Fdj",
            DKK: "kr", DOP: "RD$", DZD: "د.ج", EGP: "£", ERN: "Nfk", ETB: "Br", EUR: "€",
            FJD: "$", FKP: "£", FOK: "kr", GBP: "£", GEL: "₾", GHS: "GH₵", GIP: "£",
            GMD: "D", GNF: "FG", GTQ: "Q", GYD: "$", HKD: "HK$", HNL: "L", HRK: "kn",
            HTG: "G", HUF: "Ft", IDR: "Rp", ILS: "₪", INR: "₹", IQD: "ع.د", IRR: "﷼",
            ISK: "kr", JMD: "J$", JOD: "د.ا", JPY: "¥", KES: "Sh", KGS: "с", KHR: "៛",
            KMF: "CF", KPW: "₩", KRW: "₩", KWD: "د.ك", KYD: "$", KZT: "₸", LAK: "₭",
            LBP: "ل.ل", LKR: "Rs", LRD: "$", LSL: "L", LYD: "ل.د", MAD: "د.م.", MDL: "L",
            MGA: "Ar", MKD: "ден", MMK: "K", MNT: "₮", MOP: "P", MRU: "UM", MUR: "₨",
            MVR: "ރ.", MWK: "MK", MXN: "$", MYR: "RM", MZN: "MT", NAD: "$", NGN: "₦",
            NIO: "C$", NOK: "kr", NPR: "₨", NZD: "$", OMR: "ر.ع.", PAB: "B/.", PEN: "S/",
            PGK: "K", PHP: "₱", PKR: "₨", PLN: "zł", PYG: "₲", QAR: "ر.ق", RON: "lei",
            RSD: "дин.", RUB: "₽", RWF: "FRw", SAR: "ر.س", SBD: "$", SCR: "₨", SDG: "ج.س.",
            SEK: "kr", SGD: "$", SHP: "£", SLE: "Le", SLL: "Le", SOS: "Sh", SRD: "$", SSP: "£",
            STN: "Db", SYP: "£S", SZL: "E", THB: "฿", TJS: "ЅМ", TMT: "m", TND: "د.ت", TOP: "T$",
            TRY: "₺", TTD: "TT$", TWD: "NT$", TZS: "Sh", UAH: "₴", UGX: "Sh", USD: "$", UYU: "$U",
            UZS: "soʻm", VES: "Bs.S.", VND: "₫", VUV: "Vt", WST: "T", XAF: "FCFA", XCD: "$", XOF: "CFA",
            XPF: "₣", YER: "﷼", ZAR: "R", ZMW: "ZK", ZWL: "$"
        };
    }
    getCurrencySymbol(code) { return this.currencyMap[code] || code; }
    // **************** Method to start Loader ******************************
    startLoader() {
        this.loader = true;
    }
    // **************** Method to stop Loader ******************************
    stopLoader() {
        this.loader = false;
    }
    // ***************** Method to send Toast Msgs *************************
    showToastMesaages(type, msg) {
        this.toastr.clear();
        if (type == 'success') {
            this.toastr.success(msg);
        }
        else if (type == 'error') {
            this.toastr.error(msg);
        }
        else if (type == 'info') {
            this.toastr.info(msg);
        }
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService)); };
SharedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    isMockEnabled: true,
    authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',
    TenantId: 'E7749B6460D6855A8698',
    maxSurveyParticipants: 5,
    orgConnectionCode: '000095',
    envType: 'dev',
    BlueNumberIdentityServerClientId: "localClient",
    //BlueNumberSurveyAPI: "https://dev-bnsurvey.bluenumber.com",
    //BlueNumberGlobalAPI: "https://dev-bngen.bluenumber.com",
    //BlueNumberDataImportAPI: "https://dev-bndi.bluenumber.com",
    //BlueNumberIdentityServer: "https://dev-auth.bluenumber.com",
    //BlueNumberIssuerAPI: "https://dev-bnissuer.bluenumber.com",
    //BlueNumberDataReqAPI: "https://dev-bndm.bluenumber.com",
    //BluenumberSurveyOTPValidationUrl: "https://bluenumber.global/mm_process", // old
    BluenumberSurveyOTPValidationUrl: "https://millionmakers.org/mm_process",
    BlueNumberGlobalAPI: "https://dev-cog-bngen.bluenumber.com",
    BlueNumberDataReqAPI: "https://dev-cog-bndm.bluenumber.com",
    BlueNumberCredentialsAPI: "https://dev-cog-credential.bluenumber.com",
    //amplify settings
    BlueNumberCognitoAmplifyUrl: "https://dev-sso.bluenumber.com/signin/",
    // ******** Un Comment BlueNumberCognitoReturnUrl: "http://localhost:4200/ while running locally ********************
    // BlueNumberCognitoReturnUrl: "http://localhost:4200/auth/login/",
    // ************  Comment it while running locally ********************
    BlueNumberCognitoReturnUrl: "https://dev-survey.millionmakers.org/auth/login/",
    IpAPiUrl: "https://pro.ip-api.com/json?key=VyIZD0eqToHTt6J",
    BNFGlobalAPI: " https://dev-cog-bnf-global.bluenumber.com",
    cognito: {
        userPoolId: 'us-east-2_Zxy17fHDS',
        userPoolWebClientId: '7tmt86q7t9ilvua99ln51pc20k',
        // ************  Comment cookieStorage while running locally ********************
        // cookieStorage: {
        // 	domain: '.millionmakers.org',
        // 	secure: false,
        // 	path: '/',
        // 	expires: 365,
        // }
        // ************ Un Comment it while running locally ********************
        storage: localStorage,
        cookieStorage: false,
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ 1843);





aws_amplify__WEBPACK_IMPORTED_MODULE_2__.Amplify.configure({
    Auth: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.cognito,
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6249:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map