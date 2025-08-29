"use strict";
(self["webpackChunknewwebpmammahp"] = self["webpackChunknewwebpmammahp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 4456:
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 4456);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 3039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__.SplashScreenComponent
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
            },
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full'
            },
        ]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 4456);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8146);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 3039);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);











class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_3__.SplashScreenComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 5323:
/*!******************************************!*\
  !*** ./src/app/auth/location.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class LocationService {
    constructor(http) {
        this.http = http;
    }
    // getIPLocation for getting the location of the IP address
    getIPLocation() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.IpAPiUrl}`);
    }
    updateContact(params) {
        // alert(JSON.stringify(params));
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BNFGlobalAPI}/api/v1/Cognito/Person`, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((result) => {
            return result;
        }));
    }
    // getAllCountries for getting the list of all countries
    getAllCountries() {
        return [
            {
                "name": "Australia",
                "dial_code": "+61",
                "code": "AU",
                "alpha3": "AUS"
            }, {
                "name": "Bangladesh",
                "dial_code": "+880",
                "code": "BD",
                "alpha3": "BGD"
            }, {
                "name": "China",
                "dial_code": "+86",
                "code": "CN",
                "alpha3": "CHN"
            }, {
                "name": "Colombia",
                "dial_code": "+57",
                "code": "CO",
                "alpha3": "COL"
            }, {
                "name": "Germany",
                "dial_code": "+49",
                "code": "DE",
                "alpha3": "DEU"
            }, {
                "name": "United Kingdom",
                "dial_code": "+44",
                "code": "GB",
                "alpha3": "GBR"
            }, {
                "name": "Hong Kong",
                "dial_code": "+852",
                "code": "HK",
                "alpha3": "HKG"
            }, {
                "name": "Indonesia",
                "dial_code": "+62",
                "code": "ID",
                "alpha3": "IDN"
            }, {
                "name": "India",
                "dial_code": "+91",
                "code": "IN",
                "alpha3": "IND"
            }, {
                "name": "Mexico",
                "dial_code": "+52",
                "code": "MX",
                "alpha3": "MEX"
            }, {
                "name": "Malaysia",
                "dial_code": "+60",
                "code": "MY",
                "alpha3": "MYS"
            }, {
                "name": "Netherlands",
                "dial_code": "+31",
                "code": "NL",
                "alpha3": "NLD"
            }, {
                "name": "Thailand",
                "dial_code": "+66",
                "code": "TH",
                "alpha3": "THA"
            }, {
                "name": "United States",
                "dial_code": "+1",
                "code": "US",
                "alpha3": "USA"
            }, {
                "name": "Aland Islands",
                "dial_code": "+358",
                "code": "AX",
                "alpha3": "ALA"
            }, {
                "name": "Albania",
                "dial_code": "+355",
                "code": "AL",
                "alpha3": "ALB"
            }, {
                "name": "Algeria",
                "dial_code": "+213",
                "code": "DZ",
                "alpha3": "DZA"
            }, {
                "name": "American Samoa",
                "dial_code": "+1684",
                "code": "AS",
                "alpha3": "ASM"
            },
            {
                "name": "Andorra",
                "dial_code": "+376",
                "code": "AD",
                "alpha3": "AND"
            }, {
                "name": "Angola",
                "dial_code": "+244",
                "code": "AO",
                "alpha3": "AGO"
            }, {
                "name": "Anguilla",
                "dial_code": "+1264",
                "code": "AI",
                "alpha3": "AIA"
            }, {
                "name": "Antarctica",
                "dial_code": "+672",
                "code": "AQ",
                "alpha3": "ATA"
            }, {
                "name": "Antigua and Barbuda",
                "dial_code": "+1268",
                "code": "AG",
                "alpha3": "ATG"
            },
            {
                "name": "Afghanistan",
                "dial_code": "+93",
                "code": "AF",
                "alpha3": "AFG"
            },
            {
                "name": "Argentina",
                "dial_code": "+54",
                "code": "AR",
                "alpha3": "ARG"
            },
            {
                "name": "Armenia",
                "dial_code": "+374",
                "code": "AM",
                "alpha3": "ARM"
            }, {
                "name": "Aruba",
                "dial_code": "+297",
                "code": "AW",
                "alpha3": "ABW"
            }, {
                "name": "Austria",
                "dial_code": "+43",
                "code": "AT",
                "alpha3": "AUT"
            }, {
                "name": "Azerbaijan",
                "dial_code": "+994",
                "code": "AZ",
                "alpha3": "AZE"
            }, {
                "name": "Bahamas",
                "dial_code": "+1242",
                "code": "BS",
                "alpha3": "BHS"
            }, {
                "name": "Bahrain",
                "dial_code": "+973",
                "code": "BH",
                "alpha3": "BHR"
            },
            {
                "name": "Barbados",
                "dial_code": "+1246",
                "code": "BB",
                "alpha3": "BRB"
            }, {
                "name": "Belarus",
                "dial_code": "+375",
                "code": "BY",
                "alpha3": "BLR"
            }, {
                "name": "Belgium",
                "dial_code": "+32",
                "code": "BE",
                "alpha3": "BEL"
            }, {
                "name": "Belize",
                "dial_code": "+501",
                "code": "BZ",
                "alpha3": "BLZ"
            }, {
                "name": "Benin",
                "dial_code": "+229",
                "code": "BJ",
                "alpha3": "BEN"
            }, {
                "name": "Bermuda",
                "dial_code": "+1441",
                "code": "BM",
                "alpha3": "BMU"
            }, {
                "name": "Bhutan",
                "dial_code": "+975",
                "code": "BT",
                "alpha3": "BTN"
            }, {
                "name": "Bolivia, Plurinational State of",
                "dial_code": "+591",
                "code": "BO",
                "alpha3": "BOL"
            }, {
                "name": "Bosnia and Herzegovina",
                "dial_code": "+387",
                "code": "BA",
                "alpha3": "BIH"
            }, {
                "name": "Botswana",
                "dial_code": "+267",
                "code": "BW",
                "alpha3": "BWA"
            }, {
                "name": "Brazil",
                "dial_code": "+55",
                "code": "BR",
                "alpha3": "BRA"
            }, {
                "name": "British Indian Ocean Territory",
                "dial_code": "+246",
                "code": "IO",
                "alpha3": "IOT"
            }, {
                "name": "Brunei Darussalam",
                "dial_code": "+673",
                "code": "BN",
                "alpha3": "BRN"
            }, {
                "name": "Bulgaria",
                "dial_code": "+359",
                "code": "BG",
                "alpha3": "BGR"
            }, {
                "name": "Burkina Faso",
                "dial_code": "+226",
                "code": "BF",
                "alpha3": "BFA"
            }, {
                "name": "Burundi",
                "dial_code": "+257",
                "code": "BI",
                "alpha3": "BDI"
            }, {
                "name": "Cambodia",
                "dial_code": "+855",
                "code": "KH",
                "alpha3": "KHM"
            }, {
                "name": "Cameroon",
                "dial_code": "+237",
                "code": "CM",
                "alpha3": "CMR"
            }, {
                "name": "Canada",
                "dial_code": "+1",
                "code": "CA",
                "alpha3": "CAN"
            },
            {
                "name": "Cape Verde",
                "dial_code": "+238",
                "code": "CV",
                "alpha3": "CPV"
            },
            {
                "name": "Cayman Islands",
                "dial_code": "+ 345",
                "code": "KY",
                "alpha3": "CYM"
            },
            {
                "name": "Central African Republic",
                "dial_code": "+236",
                "code": "CF",
                "alpha3": "CAF"
            },
            {
                "name": "Chad",
                "dial_code": "+235",
                "code": "TD",
                "alpha3": "TCD"
            },
            {
                "name": "Chile",
                "dial_code": "+56",
                "code": "CL",
                "alpha3": "CHL"
            },
            {
                "name": "Christmas Island",
                "dial_code": "+61",
                "code": "CX",
                "alpha3": "CXR"
            },
            {
                "name": "Cocos (Keeling) Islands",
                "dial_code": "+61",
                "code": "CC",
                "alpha3": "CCK"
            },
            {
                "name": "Comoros",
                "dial_code": "+269",
                "code": "KM",
                "alpha3": "COM"
            },
            {
                "name": "Congo",
                "dial_code": "+242",
                "code": "CG",
                "alpha3": "COG"
            },
            {
                "name": "Congo, The Democratic Republic of the Congo",
                "dial_code": "+243",
                "code": "CD",
                "alpha3": "COD"
            },
            {
                "name": "Cook Islands",
                "dial_code": "+682",
                "code": "CK",
                "alpha3": "COK"
            },
            {
                "name": "Costa Rica",
                "dial_code": "+506",
                "code": "CR",
                "alpha3": "CRI"
            },
            {
                "name": "Cote d'Ivoire",
                "dial_code": "+225",
                "code": "CI",
                "alpha3": "CIV"
            },
            {
                "name": "Croatia",
                "dial_code": "+385",
                "code": "HR",
                "alpha3": "HRV"
            },
            {
                "name": "Cuba",
                "dial_code": "+53",
                "code": "CU",
                "alpha3": "CUB"
            },
            {
                "name": "Cyprus",
                "dial_code": "+357",
                "code": "CY",
                "alpha3": "CYP"
            },
            {
                "name": "Czech Republic",
                "dial_code": "+420",
                "code": "CZ",
                "alpha3": "CZE"
            },
            {
                "name": "Cape Verde",
                "dial_code": "+238",
                "code": "CV",
                "alpha3": "CPV"
            },
            {
                "name": "Cayman Islands",
                "dial_code": "+ 345",
                "code": "KY",
                "alpha3": "CYM"
            },
            {
                "name": "Central African Republic",
                "dial_code": "+236",
                "code": "CF",
                "alpha3": "CAF"
            },
            {
                "name": "Chad",
                "dial_code": "+235",
                "code": "TD",
                "alpha3": "TCD"
            },
            {
                "name": "Chile",
                "dial_code": "+56",
                "code": "CL",
                "alpha3": "CHL"
            },
            {
                "name": "China",
                "dial_code": "+86",
                "code": "CN",
                "alpha3": "CHN"
            },
            {
                "name": "Christmas Island",
                "dial_code": "+61",
                "code": "CX",
                "alpha3": "CXR"
            },
            {
                "name": "Cocos (Keeling) Islands",
                "dial_code": "+61",
                "code": "CC",
                "alpha3": "CCK"
            },
            {
                "name": "Colombia",
                "dial_code": "+57",
                "code": "CO",
                "alpha3": "COL"
            },
            {
                "name": "Comoros",
                "dial_code": "+269",
                "code": "KM",
                "alpha3": "COM"
            },
            {
                "name": "Congo",
                "dial_code": "+242",
                "code": "CG",
                "alpha3": "COG"
            },
            {
                "name": "Congo, The Democratic Republic of the Congo",
                "dial_code": "+243",
                "code": "CD",
                "alpha3": "COD"
            },
            {
                "name": "Cook Islands",
                "dial_code": "+682",
                "code": "CK",
                "alpha3": "COK"
            },
            {
                "name": "Costa Rica",
                "dial_code": "+506",
                "code": "CR",
                "alpha3": "CRI"
            },
            {
                "name": "Cote d'Ivoire",
                "dial_code": "+225",
                "code": "CI",
                "alpha3": "CIV"
            },
            {
                "name": "Croatia",
                "dial_code": "+385",
                "code": "HR",
                "alpha3": "HRV"
            },
            {
                "name": "Cuba",
                "dial_code": "+53",
                "code": "CU",
                "alpha3": "CUB"
            },
            {
                "name": "Cyprus",
                "dial_code": "+357",
                "code": "CY",
                "alpha3": "CYP"
            },
            {
                "name": "Czech Republic",
                "dial_code": "+420",
                "code": "CZ",
                "alpha3": "CZE"
            },
            {
                "name": "Denmark",
                "dial_code": "+45",
                "code": "DK",
                "alpha3": "DNK"
            }, {
                "name": "Djibouti",
                "dial_code": "+253",
                "code": "DJ",
                "alpha3": "DJI"
            }, {
                "name": "Dominica",
                "dial_code": "+1767",
                "code": "DM",
                "alpha3": "DMA"
            }, {
                "name": "Dominican Republic",
                "dial_code": "+1849",
                "code": "DO",
                "alpha3": "DOM"
            }, {
                "name": "Ecuador",
                "dial_code": "+593",
                "code": "EC",
                "alpha3": "ECU"
            }, {
                "name": "Egypt",
                "dial_code": "+20",
                "code": "EG",
                "alpha3": "EGY"
            },
            {
                "name": "El Salvador",
                "dial_code": "+503",
                "code": "SV",
                "alpha3": "SLV"
            },
            {
                "name": "Equatorial Guinea",
                "dial_code": "+240",
                "code": "GQ",
                "alpha3": "GNQ"
            },
            {
                "name": "Eritrea",
                "dial_code": "+291",
                "code": "ER",
                "alpha3": "ERI"
            },
            {
                "name": "Estonia",
                "dial_code": "+372",
                "code": "EE",
                "alpha3": "EST"
            },
            {
                "name": "Ethiopia",
                "dial_code": "+251",
                "code": "ET",
                "alpha3": "ETH"
            },
            {
                "name": "Falkland Islands (Malvinas)",
                "dial_code": "+500",
                "code": "FK",
                "alpha3": "FLK"
            },
            {
                "name": "Faroe Islands",
                "dial_code": "+298",
                "code": "FO",
                "alpha3": "FRO"
            },
            {
                "name": "Fiji",
                "dial_code": "+679",
                "code": "FJ",
                "alpha3": "FJI"
            },
            {
                "name": "Finland",
                "dial_code": "+358",
                "code": "FI",
                "alpha3": "FIN"
            },
            {
                "name": "France",
                "dial_code": "+33",
                "code": "FR",
                "alpha3": "FRA"
            },
            {
                "name": "French Guiana",
                "dial_code": "+594",
                "code": "GF",
                "alpha3": "GUF"
            },
            {
                "name": "French Polynesia",
                "dial_code": "+689",
                "code": "PF",
                "alpha3": "PYF"
            },
            {
                "name": "Gabon",
                "dial_code": "+241",
                "code": "GA",
                "alpha3": "GAB"
            },
            {
                "name": "Gambia",
                "dial_code": "+220",
                "code": "GM",
                "alpha3": "GMB"
            },
            {
                "name": "Georgia",
                "dial_code": "+995",
                "code": "GE",
                "alpha3": "GEO"
            },
            {
                "name": "Ghana",
                "dial_code": "+233",
                "code": "GH",
                "alpha3": "GHA"
            },
            {
                "name": "Gibraltar",
                "dial_code": "+350",
                "code": "GI",
                "alpha3": "GIB"
            },
            {
                "name": "Greece",
                "dial_code": "+30",
                "code": "GR",
                "alpha3": "GRC"
            },
            {
                "name": "Greenland",
                "dial_code": "+299",
                "code": "GL",
                "alpha3": "GRL"
            },
            {
                "name": "Grenada",
                "dial_code": "+1473",
                "code": "GD",
                "alpha3": "GRD"
            },
            {
                "name": "Guadeloupe",
                "dial_code": "+590",
                "code": "GP",
                "alpha3": "GLP"
            },
            {
                "name": "Guam",
                "dial_code": "+1671",
                "code": "GU",
                "alpha3": "GUM"
            },
            {
                "name": "Guatemala",
                "dial_code": "+502",
                "code": "GT",
                "alpha3": "GTM"
            },
            {
                "name": "Guernsey",
                "dial_code": "+44",
                "code": "GG",
                "alpha3": "GGY"
            },
            {
                "name": "Guinea",
                "dial_code": "+224",
                "code": "GN",
                "alpha3": "GIN"
            },
            {
                "name": "Guinea-Bissau",
                "dial_code": "+245",
                "code": "GW",
                "alpha3": "GNB"
            },
            {
                "name": "Guyana",
                "dial_code": "+595",
                "code": "GY",
                "alpha3": "GUY"
            },
            {
                "name": "Haiti",
                "dial_code": "+509",
                "code": "HT",
                "alpha3": "HTI"
            },
            {
                "name": "Holy See (Vatican City State)",
                "dial_code": "+379",
                "code": "VA",
                "alpha3": "VAT"
            },
            {
                "name": "Honduras",
                "dial_code": "+504",
                "code": "HN",
                "alpha3": "HND"
            },
            {
                "name": "Hungary",
                "dial_code": "+36",
                "code": "HU",
                "alpha3": "HUN"
            },
            {
                "name": "Iceland",
                "dial_code": "+354",
                "code": "IS",
                "alpha3": "ISL"
            },
            {
                "name": "Iran, Islamic Republic of Persian Gulf",
                "dial_code": "+98",
                "code": "IR",
                "alpha3": "IRN"
            },
            {
                "name": "Iraq",
                "dial_code": "+964",
                "code": "IQ",
                "alpha3": "IRQ"
            },
            {
                "name": "Ireland",
                "dial_code": "+353",
                "code": "IE",
                "alpha3": "IRL"
            },
            {
                "name": "Isle of Man",
                "dial_code": "+44",
                "code": "IM",
                "alpha3": "IMN"
            },
            {
                "name": "Israel",
                "dial_code": "+972",
                "code": "IL",
                "alpha3": "ISR"
            },
            {
                "name": "Italy",
                "dial_code": "+39",
                "code": "IT",
                "alpha3": "ITA"
            },
            {
                "name": "Jamaica",
                "dial_code": "+1876",
                "code": "JM",
                "alpha3": "JAM"
            },
            {
                "name": "Japan",
                "dial_code": "+81",
                "code": "JP",
                "alpha3": "JPN"
            },
            {
                "name": "Jersey",
                "dial_code": "+44",
                "code": "JE",
                "alpha3": "JEY"
            },
            {
                "name": "Jordan",
                "dial_code": "+962",
                "code": "JO",
                "alpha3": "JOR"
            },
            {
                "name": "Kazakhstan",
                "dial_code": "+77",
                "code": "KZ",
                "alpha3": "KAZ"
            },
            {
                "name": "Kenya",
                "dial_code": "+254",
                "code": "KE",
                "alpha3": "KEN"
            },
            {
                "name": "Kiribati",
                "dial_code": "+686",
                "code": "KI",
                "alpha3": "KIR"
            },
            {
                "name": "Korea, Democratic People's Republic of Korea",
                "dial_code": "+850",
                "code": "KP",
                "alpha3": "PRK"
            },
            {
                "name": "Korea, Republic of South Korea",
                "dial_code": "+82",
                "code": "KR",
                "alpha3": "KOR"
            },
            {
                "name": "Kuwait",
                "dial_code": "+965",
                "code": "KW",
                "alpha3": "KWT"
            },
            {
                "name": "Kyrgyzstan",
                "dial_code": "+996",
                "code": "KG",
                "alpha3": "KGZ"
            },
            {
                "name": "Laos",
                "dial_code": "+856",
                "code": "LA",
                "alpha3": "LAO"
            },
            {
                "name": "Latvia",
                "dial_code": "+371",
                "code": "LV",
                "alpha3": "LVA"
            },
            {
                "name": "Lebanon",
                "dial_code": "+961",
                "code": "LB",
                "alpha3": "LBN"
            },
            {
                "name": "Lesotho",
                "dial_code": "+266",
                "code": "LS",
                "alpha3": "LSO"
            },
            {
                "name": "Liberia",
                "dial_code": "+231",
                "code": "LR",
                "alpha3": "LBR"
            },
            {
                "name": "Libyan Arab Jamahiriya",
                "dial_code": "+218",
                "code": "LY",
                "alpha3": "LBY"
            },
            {
                "name": "Liechtenstein",
                "dial_code": "+423",
                "code": "LI",
                "alpha3": "LIE"
            },
            {
                "name": "Lithuania",
                "dial_code": "+370",
                "code": "LT",
                "alpha3": "LTU"
            },
            {
                "name": "Luxembourg",
                "dial_code": "+352",
                "code": "LU",
                "alpha3": "LUX"
            },
            {
                "name": "Macao",
                "dial_code": "+853",
                "code": "MO",
                "alpha3": "MAC"
            },
            {
                "name": "Macedonia",
                "dial_code": "+389",
                "code": "MK",
                "alpha3": "MKD"
            },
            {
                "name": "Madagascar",
                "dial_code": "+261",
                "code": "MG",
                "alpha3": "MDG"
            },
            {
                "name": "Malawi",
                "dial_code": "+265",
                "code": "MW",
                "alpha3": "MWI"
            },
            {
                "name": "Maldives",
                "dial_code": "+960",
                "code": "MV",
                "alpha3": "MDV"
            },
            {
                "name": "Mali",
                "dial_code": "+223",
                "code": "ML",
                "alpha3": "MLI"
            },
            {
                "name": "Malta",
                "dial_code": "+356",
                "code": "MT",
                "alpha3": "MLT"
            },
            {
                "name": "Marshall Islands",
                "dial_code": "+692",
                "code": "MH",
                "alpha3": "MHL"
            },
            {
                "name": "Martinique",
                "dial_code": "+596",
                "code": "MQ",
                "alpha3": "MTQ"
            },
            {
                "name": "Mauritania",
                "dial_code": "+222",
                "code": "MR",
                "alpha3": "MRT"
            },
            {
                "name": "Mauritius",
                "dial_code": "+230",
                "code": "MU",
                "alpha3": "MUS"
            },
            {
                "name": "Mayotte",
                "dial_code": "+262",
                "code": "YT",
                "alpha3": "MYT"
            },
            {
                "name": "Micronesia, Federated States of Micronesia",
                "dial_code": "+691",
                "code": "FM",
                "alpha3": "FSM"
            },
            {
                "name": "Moldova",
                "dial_code": "+373",
                "code": "MD",
                "alpha3": "MDA"
            },
            {
                "name": "Monaco",
                "dial_code": "+377",
                "code": "MC",
                "alpha3": "MCO"
            },
            {
                "name": "Mongolia",
                "dial_code": "+976",
                "code": "MN",
                "alpha3": "MNG"
            },
            {
                "name": "Montenegro",
                "dial_code": "+382",
                "code": "ME",
                "alpha3": "MNE"
            },
            {
                "name": "Montserrat",
                "dial_code": "+1664",
                "code": "MS",
                "alpha3": "MSR"
            },
            {
                "name": "Morocco",
                "dial_code": "+212",
                "code": "MA",
                "alpha3": "MAR"
            },
            {
                "name": "Mozambique",
                "dial_code": "+258",
                "code": "MZ",
                "alpha3": "MOZ"
            },
            {
                "name": "Myanmar",
                "dial_code": "+95",
                "code": "MM",
                "alpha3": "MMR"
            },
            {
                "name": "Namibia",
                "dial_code": "+264",
                "code": "NA",
                "alpha3": "NAM"
            },
            {
                "name": "Nauru",
                "dial_code": "+674",
                "code": "NR",
                "alpha3": "NRU"
            },
            {
                "name": "Nepal",
                "dial_code": "+977",
                "code": "NP",
                "alpha3": "NPL"
            },
            {
                "name": "Netherlands Antilles",
                "dial_code": "+599",
                "code": "AN",
                "alpha3": "ANT"
            },
            {
                "name": "New Caledonia",
                "dial_code": "+687",
                "code": "NC",
                "alpha3": "NCL"
            },
            {
                "name": "New Zealand",
                "dial_code": "+64",
                "code": "NZ",
                "alpha3": "NZL"
            },
            {
                "name": "Nicaragua",
                "dial_code": "+505",
                "code": "NI",
                "alpha3": "NIC"
            },
            {
                "name": "Niger",
                "dial_code": "+227",
                "code": "NE",
                "alpha3": "NER"
            },
            {
                "name": "Nigeria",
                "dial_code": "+234",
                "code": "NG",
                "alpha3": "NGA"
            },
            {
                "name": "Niue",
                "dial_code": "+683",
                "code": "NU",
                "alpha3": "NIU"
            },
            {
                "name": "Norfolk Island",
                "dial_code": "+672",
                "code": "NF",
                "alpha3": "NFK"
            },
            {
                "name": "Northern Mariana Islands",
                "dial_code": "+1670",
                "code": "MP",
                "alpha3": "MNP"
            },
            {
                "name": "Norway",
                "dial_code": "+47",
                "code": "NO",
                "alpha3": "NOR"
            },
            {
                "name": "Oman",
                "dial_code": "+968",
                "code": "OM",
                "alpha3": "OMN"
            },
            {
                "name": "Pakistan",
                "dial_code": "+92",
                "code": "PK",
                "alpha3": "PAK"
            },
            {
                "name": "Palau",
                "dial_code": "+680",
                "code": "PW",
                "alpha3": "PLW"
            },
            {
                "name": "Palestinian Territory, Occupied",
                "dial_code": "+970",
                "code": "PS",
                "alpha3": "PSE"
            },
            {
                "name": "Panama",
                "dial_code": "+507",
                "code": "PA",
                "alpha3": "PAN"
            },
            {
                "name": "Papua New Guinea",
                "dial_code": "+675",
                "code": "PG",
                "alpha3": "PNG"
            },
            {
                "name": "Paraguay",
                "dial_code": "+595",
                "code": "PY",
                "alpha3": "PRY"
            },
            {
                "name": "Peru",
                "dial_code": "+51",
                "code": "PE",
                "alpha3": "PER"
            },
            {
                "name": "Philippines",
                "dial_code": "+63",
                "code": "PH",
                "alpha3": "PHL"
            },
            {
                "name": "Pitcairn",
                "dial_code": "+872",
                "code": "PN",
                "alpha3": "PCN"
            },
            {
                "name": "Poland",
                "dial_code": "+48",
                "code": "PL",
                "alpha3": "POL"
            },
            {
                "name": "Portugal",
                "dial_code": "+351",
                "code": "PT",
                "alpha3": "PRT"
            },
            {
                "name": "Puerto Rico",
                "dial_code": "+1939",
                "code": "PR",
                "alpha3": "PRI"
            },
            {
                "name": "Qatar",
                "dial_code": "+974",
                "code": "QA",
                "alpha3": "QAT"
            },
            {
                "name": "Romania",
                "dial_code": "+40",
                "code": "RO",
                "alpha3": "ROU"
            },
            {
                "name": "Russia",
                "dial_code": "+7",
                "code": "RU",
                "alpha3": "RUS"
            },
            {
                "name": "Rwanda",
                "dial_code": "+250",
                "code": "RW",
                "alpha3": "RWA"
            },
            {
                "name": "Reunion",
                "dial_code": "+262",
                "code": "RE",
                "alpha3": "REU"
            },
            {
                "name": "Saint Barthelemy",
                "dial_code": "+590",
                "code": "BL",
                "alpha3": "BLM"
            },
            {
                "name": "Saint Helena, Ascension and Tristan Da Cunha",
                "dial_code": "+290",
                "code": "SH",
                "alpha3": "SHN"
            },
            {
                "name": "Saint Kitts and Nevis",
                "dial_code": "+1869",
                "code": "KN",
                "alpha3": "KNA"
            },
            {
                "name": "Saint Lucia",
                "dial_code": "+1758",
                "code": "LC",
                "alpha3": "LCA"
            },
            {
                "name": "Saint Martin",
                "dial_code": "+590",
                "code": "MF",
                "alpha3": "MAF"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "dial_code": "+508",
                "code": "PM",
                "alpha3": "SPM"
            },
            {
                "name": "Saint Vincent and the Grenadines",
                "dial_code": "+1784",
                "code": "VC",
                "alpha3": "VCT"
            },
            {
                "name": "Samoa",
                "dial_code": "+685",
                "code": "WS",
                "alpha3": "WSM"
            },
            {
                "name": "San Marino",
                "dial_code": "+378",
                "code": "SM",
                "alpha3": "SMR"
            },
            {
                "name": "Sao Tome and Principe",
                "dial_code": "+239",
                "code": "ST",
                "alpha3": "STP"
            },
            {
                "name": "Saudi Arabia",
                "dial_code": "+966",
                "code": "SA",
                "alpha3": "SAU"
            },
            {
                "name": "Senegal",
                "dial_code": "+221",
                "code": "SN",
                "alpha3": "SEN"
            },
            {
                "name": "Serbia",
                "dial_code": "+381",
                "code": "RS",
                "alpha3": "SRB"
            },
            {
                "name": "Seychelles",
                "dial_code": "+248",
                "code": "SC",
                "alpha3": "SYC"
            },
            {
                "name": "Sierra Leone",
                "dial_code": "+232",
                "code": "SL",
                "alpha3": "SLE"
            },
            {
                "name": "Singapore",
                "dial_code": "+65",
                "code": "SG",
                "alpha3": "SGP"
            },
            {
                "name": "Slovakia",
                "dial_code": "+421",
                "code": "SK",
                "alpha3": "SVK"
            },
            {
                "name": "Slovenia",
                "dial_code": "+386",
                "code": "SI",
                "alpha3": "SVN"
            },
            {
                "name": "Solomon Islands",
                "dial_code": "+677",
                "code": "SB",
                "alpha3": "SLB"
            },
            {
                "name": "Somalia",
                "dial_code": "+252",
                "code": "SO",
                "alpha3": "SOM"
            },
            {
                "name": "South Africa",
                "dial_code": "+27",
                "code": "ZA",
                "alpha3": "ZAF"
            },
            {
                "name": "South Sudan",
                "dial_code": "+211",
                "code": "SS",
                "alpha3": "SSD"
            },
            {
                "name": "South Georgia and the South Sandwich Islands",
                "dial_code": "+500",
                "code": "GS",
                "alpha3": "SGS"
            },
            {
                "name": "Spain",
                "dial_code": "+34",
                "code": "ES",
                "alpha3": "ESP"
            },
            {
                "name": "Sri Lanka",
                "dial_code": "+94",
                "code": "LK",
                "alpha3": "LKA"
            },
            {
                "name": "Sudan",
                "dial_code": "+249",
                "code": "SD",
                "alpha3": "SDN"
            },
            {
                "name": "Suriname",
                "dial_code": "+597",
                "code": "SR",
                "alpha3": "SUR"
            },
            {
                "name": "Svalbard and Jan Mayen",
                "dial_code": "+47",
                "code": "SJ",
                "alpha3": "SJM"
            },
            {
                "name": "Swaziland",
                "dial_code": "+268",
                "code": "SZ"
            },
            {
                "name": "Sweden",
                "dial_code": "+46",
                "code": "SE",
                "alpha3": "SWE"
            },
            {
                "name": "Switzerland",
                "dial_code": "+41",
                "code": "CH",
                "alpha3": "CHE"
            },
            {
                "name": "Syrian Arab Republic",
                "dial_code": "+963",
                "code": "SY",
                "alpha3": "SYR"
            },
            {
                "name": "Taiwan",
                "dial_code": "+886",
                "code": "TW",
                "alpha3": "TWN"
            },
            {
                "name": "Tajikistan",
                "dial_code": "+992",
                "code": "TJ",
                "alpha3": "TJK"
            },
            {
                "name": "Tanzania, United Republic of Tanzania",
                "dial_code": "+255",
                "code": "TZ",
                "alpha3": "TZA"
            },
            {
                "name": "Timor-Leste",
                "dial_code": "+670",
                "code": "TL",
                "alpha3": "TLS"
            },
            {
                "name": "Togo",
                "dial_code": "+228",
                "code": "TG",
                "alpha3": "TGO"
            },
            {
                "name": "Tokelau",
                "dial_code": "+690",
                "code": "TK",
                "alpha3": "TKL"
            },
            {
                "name": "Tonga",
                "dial_code": "+676",
                "code": "TO",
                "alpha3": "TON"
            },
            {
                "name": "Trinidad and Tobago",
                "dial_code": "+1868",
                "code": "TT",
                "alpha3": "TTO"
            },
            {
                "name": "Tunisia",
                "dial_code": "+216",
                "code": "TN",
                "alpha3": "TUN"
            },
            {
                "name": "Turkey",
                "dial_code": "+90",
                "code": "TR",
                "alpha3": "TUR"
            },
            {
                "name": "Turkmenistan",
                "dial_code": "+993",
                "code": "TM",
                "alpha3": "TKM"
            },
            {
                "name": "Turks and Caicos Islands",
                "dial_code": "+1649",
                "code": "TC",
                "alpha3": "TCA"
            },
            {
                "name": "Tuvalu",
                "dial_code": "+688",
                "code": "TV",
                "alpha3": "TUV"
            },
            {
                "name": "Uganda",
                "dial_code": "+256",
                "code": "UG",
                "alpha3": "UGA"
            },
            {
                "name": "Ukraine",
                "dial_code": "+380",
                "code": "UA",
                "alpha3": "UKR"
            },
            {
                "name": "United Arab Emirates",
                "dial_code": "+971",
                "code": "AE",
                "alpha3": "ARE"
            },
            {
                "name": "Uruguay",
                "dial_code": "+598",
                "code": "UY",
                "alpha3": "URY"
            },
            {
                "name": "Uzbekistan",
                "dial_code": "+998",
                "code": "UZ",
                "alpha3": "UZB"
            },
            {
                "name": "Vanuatu",
                "dial_code": "+678",
                "code": "VU",
                "alpha3": "VUT"
            },
            {
                "name": "Venezuela, Bolivarian Republic of Venezuela",
                "dial_code": "+58",
                "code": "VE",
                "alpha3": "VEN"
            },
            {
                "name": "Vietnam",
                "dial_code": "+84",
                "code": "VN",
                "alpha3": "VNM"
            },
            {
                "name": "Virgin Islands, British",
                "dial_code": "+1284",
                "code": "VG",
                "alpha3": "VGB"
            },
            {
                "name": "Virgin Islands, U.S.",
                "dial_code": "+1340",
                "code": "VI",
                "alpha3": "VIR"
            },
            {
                "name": "Wallis and Futuna",
                "dial_code": "+681",
                "code": "WF",
                "alpha3": "WLF"
            },
            {
                "name": "Yemen",
                "dial_code": "+967",
                "code": "YE",
                "alpha3": "YEM"
            },
            {
                "name": "Zambia",
                "dial_code": "+260",
                "code": "ZM",
                "alpha3": "ZMB"
            },
            {
                "name": "Zimbabwe",
                "dial_code": "+263",
                "code": "ZW",
                "alpha3": "ZWE"
            }
        ];
    }
}
LocationService.ɵfac = function LocationService_Factory(t) { return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LocationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LocationService, factory: LocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var D_bhaskar_work_newwebpmammahp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aws-amplify */ 1843);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-amplify */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.service */ 7420);
/* harmony import */ var src_app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dashboard/dashboard.service */ 1413);
/* harmony import */ var src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dashboard/survey.service */ 3525);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../location.service */ 5323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);


















function LoginComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", country_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 6, country_r1.code), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", country_r1.alpha3, " ", country_r1.dial_code, " ");
  }
}

;
class LoginComponent {
  constructor(router, sharedService, dashboardService, surveyService, route, locationService) {
    this.router = router;
    this.sharedService = sharedService;
    this.dashboardService = dashboardService;
    this.surveyService = surveyService;
    this.route = route;
    this.locationService = locationService;
    this.subscriptions = [];
    this.tenantsList = [];
    this.isRedirectedFromOAuthOrAlreadyLoggedIn = false;
    this.loggedIn = false;
    this.userPhoneNumber = '';
    this.location = {
      longitude: 0,
      latitude: 0
    };
    this.currentCountry = {
      name: 'India',
      code: 'IN',
      dial_code: '+91'
    };
    this.selectedCountryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.configureAmplify();
    this.selectedCountry = {
      name: '',
      code: '',
      dial_code: '',
      alpha3: ''
    };
    this.allCountries = locationService.getAllCountries();
    this.phoneNumber = "";
    this.user = {}; //this.checkUser();

    this.checkAuthentication(false);
  }

  ngOnInit() {
    this.locationService.getIPLocation().subscribe(pos => {
      this.location.longitude = pos.lon;
      this.location.latitude = pos.lat;
      console.log("location = " + this.location.longitude + " " + this.location.latitude);
      console.log("country code = " + pos.countryCode);
      this.currentCountry = this.allCountries.find(country => country.code === pos.countryCode);
      this.selectedCountry = this.currentCountry;
      this.selectedCountryControl.setValue(this.selectedCountry);
    }, error => {
      console.log("An error occurred while getting the IP location:", error); // Handle the error here
    });
  }

  configureAmplify() {
    aws_amplify__WEBPACK_IMPORTED_MODULE_9__.Amplify.configure({
      Auth: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cognito
    });
  }

  signInClick() {
    this.user.phone_number = this.selectedCountry.dial_code + this.userPhoneNumber;
    this.signupAndSignIn();
  }

  checkAuthentication(canUpdateLocation) {
    this.sharedService.startLoader();
    aws_amplify__WEBPACK_IMPORTED_MODULE_10__.Auth.currentSession().then(session => {
      const idToken = session.getIdToken().getJwtToken();
      const refreshToken = session.getRefreshToken().getToken();
      console.log('id token', idToken);
      console.log('refresh token', refreshToken);
      const BlueNumber = session.getIdToken().payload['BlueNumber'];
      localStorage.setItem('personBluenumber', BlueNumber);
      localStorage.setItem('idToken', session.getIdToken().getJwtToken()); //update location

      if (canUpdateLocation) {
        if (this.location.longitude != 0 && this.location.latitude != 0) {
          var contactDetails = {
            contact: "",
            latitude: 0,
            longitude: 0
          };
          contactDetails.contact = this.user.phone_number;
          contactDetails.longitude = this.location.longitude;
          contactDetails.latitude = this.location.latitude;
          this.locationService.updateContact(contactDetails).subscribe(res => {
            console.log('location updated', res);
          });
        }
      }

      this.sharedService.stopLoader();
      this.getConnectionSurveyDetails();
    }).catch(err => {
      console.log('error found in current session', err);
      this.sharedService.stopLoader();
    });
  }

  signupAndSignIn() {
    if (this.user.phone_number == null || this.user.phone_number == '') {
      this.sharedService.showToastMesaages('error', 'please enter phone number');
      return;
    }

    if (this.userPhoneNumber.length < 6) {
      this.sharedService.showToastMesaages('error', 'Enter valid phone number');
      return;
    }

    this.sharedService.startLoader();
    this.signUp(this.user).then(data => {
      console.log('signed up user', data);
      this.signIn(this.user).then(data => {
        this.checkAuthentication(true);
      }).catch(err => {
        console.log('error found in sign in', err);
        this.sharedService.stopLoader;
      });
    }).catch(err => {
      console.log('error found in sign up', err);

      if (err.code == 'UsernameExistsException') {
        this.signIn(this.user).then(data => {
          this.checkAuthentication(true);
        }).catch(err => {
          console.log('error found in sign in', err);
          this.sharedService.stopLoader();
        });
      }
    });
  } // signup user     


  signUp(user) {
    var _this = this;

    return (0,D_bhaskar_work_newwebpmammahp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user1 = yield aws_amplify__WEBPACK_IMPORTED_MODULE_10__.Auth.signUp({
          username: user.phone_number,
          password: '1234567',
          autoSignIn: {
            enabled: true
          }
        });
        _this.signedinUser = user1;
      } catch (error) {
        console.log(error);
      }
    })();
  }

  signIn(user) {
    var _this2 = this;

    return (0,D_bhaskar_work_newwebpmammahp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return aws_amplify__WEBPACK_IMPORTED_MODULE_10__.Auth.signIn(user.phone_number, '1234567').then(user1 => {
        _this2.signedinUser = user1;
        console.log('signed in user from sign in', _this2.signedinUser); //this.authenticationSubject.next(true);
      }).catch(err => {
        console.log('error found in', err);
      });
    })();
  }

  compareCountries(c1, c2) {
    return c1 && c2 && c1.dial_code === c2.dial_code;
  }
  /* *********** Check whether connect is there. If yes go to langauge screen
  else navigate to Acceptance screen to allow user to agree ************** */


  getConnectionSurveyDetails() {
    let connectionCode = localStorage.getItem('connid');

    if (connectionCode != null) {
      this.sharedService.startLoader();
      this.surveyService.getConnectionRequestDetailsByCode(connectionCode).subscribe(res => {
        this.sharedService.stopLoader(); // this.connectionDetails = res.result;

        if (res['result']['connected']) {
          localStorage.setItem('IsUserConnected', res['result']['connected']);

          if (localStorage.getItem('surveyType') == 'verify') {
            this.router.navigateByUrl('home/info');
          } else {
            this.router.navigateByUrl('home/language');
          }
        } else {
          this.router.navigateByUrl(`home/accept/${res['result']['name']}`);
        }
      });
    } else {
      this.logout();
    }
  }

  logout() {
    localStorage.clear();
    localStorage.removeItem("idToken");
    aws_amplify__WEBPACK_IMPORTED_MODULE_10__.Auth.signOut();
  }

  getWindowsObject() {
    return window;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getDecodedAccessToken(token) {
    try {
      return (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
    } catch (Error) {
      return null;
    }
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_dashboard_survey_service__WEBPACK_IMPORTED_MODULE_5__.SurveyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 26,
  vars: 12,
  consts: [[1, "login-page", "d-flex", "align-items-center", "justify-content-center", "p-3"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-4", "col-12"], [1, "text-center", "my-5", "py-5", "mb-md-4", "pb-md-4", "mt-md-0", "pt-md-0"], ["src", "./assets/media/company-logos/b-logo-main.png", "alt", "", 1, "img-fluid"], [1, "mb-sm-5"], [1, "example-form"], [1, "row"], [1, "col-5", "country-code-select"], ["id", "minwidth", 2, "width", "100%"], ["panelClass", "myPanelClass", "disableOptionCentering", "", 1, "small-opt", 3, "value", "formControl", "compareWith", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-7", "mobilenumber-enter"], [1, "example-full-width", "w-100"], ["type", "tel", "matInput", "", "type", "number", "placeholder", "555-555-1234", "id", "phone_number", "name", "phone_number", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "px-2"], [1, "sso-btn-primary", 3, "click"], [3, "value"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6)(7, "form", 7)(8, "div", 8)(9, "div", 9)(10, "mat-form-field", 10)(11, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function LoginComponent_Template_mat_select_valueChange_11_listener($event) {
        return ctx.selectedCountry = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-select-trigger");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "lowercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, LoginComponent_mat_option_16_Template, 4, 8, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13)(18, "mat-form-field", 14)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Mobile Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.userPhoneNumber = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 8)(23, "div", 16)(24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
        return ctx.signInClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.selectedCountry)("formControl", ctx.selectedCountryControl)("compareWith", ctx.compareCountries);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 10, ctx.selectedCountry.code), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.selectedCountry.alpha3, " ", ctx.selectedCountry.dial_code, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.allCountries);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.userPhoneNumber);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe],
  styles: [".sso-btn-primary[_ngcontent-%COMP%] {\n  padding: 14px 121px !important;\n  font-size: 16px !important;\n  background-color: #0A4797 !important;\n  border: 1px solid #0A4797 !important;\n  border-radius: 10px !important;\n  font-weight: 300 !important;\n  color: #fff !important;\n  cursor: pointer !important;\n  width: 100%;\n}\n.sso-btn-primary[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n@media only screen and (max-width: 768px) {\n  .sso-btn-primary[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 18px;\n    left: 0;\n    right: 0;\n    width: 95%;\n    margin: 0 auto;\n  }\n}\n.login[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.screen-bg[_ngcontent-%COMP%] {\n  padding: 0px 15px 0px 15px;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n.btn-login[_ngcontent-%COMP%] {\n  background: #1a1db2;\n  border: none;\n  padding: 10px;\n  color: #fff;\n  position: absolute;\n  width: 157px;\n  height: 47px;\n  cursor: pointer;\n  background: #1a1db2;\n  border-radius: 6px;\n  bottom: 10px;\n}\n.side-title[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif !important;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n  color: #AD0C62;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.login-sub[_ngcontent-%COMP%] {\n  position: relative;\n}\n.t-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sub-text[_ngcontent-%COMP%] {\n  color: #AD0C62;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  line-height: 24px;\n}\n\n@media only screen and (min-width: 768px) {\n  .login[_ngcontent-%COMP%] {\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .login-page[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .h100vh[_ngcontent-%COMP%] {\n    min-height: 60vh;\n  }\n\n  .login[_ngcontent-%COMP%] {\n    display: block;\n    grid-template-columns: unset;\n    text-align: center;\n    width: 100%;\n  }\n\n  .btn-login[_ngcontent-%COMP%] {\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 25vh;\n  }\n\n  .v-space[_ngcontent-%COMP%] {\n    display: block;\n    grid-template-rows: unset;\n  }\n}\n@media only screen and (max-width: 567px) {\n  .btn-login[_ngcontent-%COMP%] {\n    bottom: 5vh;\n  }\n}\n.bluenumber-logo[_ngcontent-%COMP%] {\n  height: 150px;\n  padding: 10px 20px;\n  width: auto;\n  background-color: #0A4797;\n  border: 1px solid #0A4797;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFORjtBQVFFO0VBQ0ksWUFBQTtBQU5OO0FBU0U7RUFmRjtJQWdCTSxlQUFBO0lBQ0EsWUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUFOSjtBQUNGO0FBVUE7RUFDRSxhQUFBO0VBRUEsOEJBQUE7QUFSRjtBQVVBO0VBQ0UsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUEY7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVBGO0FBZUE7RUFDRSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWkY7QUFlQTs7O0dBQUE7QUFJQTtFQUNFLGtCQUFBO0FBWkY7QUFlQTtFQUNFLGtCQUFBO0FBWkY7QUFjQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7QUFaRjtBQWNBLG9CQUFBO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQVpGOztFQWNBO0lBQ0UsYUFBQTtFQVhGO0FBQ0Y7QUFhQTtFQUNFO0lBQ0UsZ0JBQUE7RUFYRjs7RUFjQTtJQUVFLGNBQUE7SUFFQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQWJGOztFQTJCQTtJQUNFLFNBQUE7SUFDQSwyQkFBQTtJQUNBLFlBQUE7RUF4QkY7O0VBMkJBO0lBQ0UsY0FBQTtJQUNBLHlCQUFBO0VBeEJGO0FBQ0Y7QUEyQkE7RUFDRTtJQUNFLFdBQUE7RUF6QkY7QUFDRjtBQStCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUE3QkYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2R5IHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMDNiO1xyXG4vLyB9XHJcblxyXG4kZi0xNjogMTZweDtcclxuJHByaW1hcnk6ICMwQTQ3OTc7XHJcblxyXG4uc3NvLWJ0bi1wcmltYXJ5IHtcclxuICBwYWRkaW5nOiAxNHB4IDEyMXB4ICFpbXBvcnRhbnQ7IC8vdG9wIGJvdHRvbSBhbmQgbGVmdCByaWdodFxyXG4gIGZvbnQtc2l6ZTogJGYtMTYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMThweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbi5zY3JlZW4tYmcge1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLmJ0bi1sb2dpbiB7XHJcbiAgYmFja2dyb3VuZDogIzFhMWRiMjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1N3B4O1xyXG5cclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxYTFkYjI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLy8gLmltZy1jIHtcclxuLy8gICBtYXJnaW46IGF1dG87XHJcbi8vICAgbWFyZ2luLXRvcDogNWVtO1xyXG4vLyB9XHJcblxyXG4uc2lkZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNBRDBDNjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLyogLnYtc3BhY2Uge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHZoIG1heC1jb250ZW50O1xyXG59ICovXHJcbi5sb2dpbi1zdWIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Yi10ZXh0e1xyXG4gIGNvbG9yOiAjQUQwQzYyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gaGVpZ2h0OiA1MHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLyogRmFsbGJhY2sgZm9yIElFICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvZ2luLXBhZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmgxMDB2aCB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luIHtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIFxyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLy8gLmltZy1jIHtcclxuICAvLyAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAvLyAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuXHJcbiAgLy8gICBzdmcge1xyXG4gIC8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC5idG4tbG9naW4ge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgYm90dG9tOiAyNXZoO1xyXG4gIH1cclxuXHJcbiAgLnYtc3BhY2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHVuc2V0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCkge1xyXG4gIC5idG4tbG9naW4ge1xyXG4gICAgYm90dG9tOiA1dmg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEJMVUVOVU1CRVIgTE9HSU4gQkcgXHJcbi5ibHVlbnVtYmVyLWxvZ297XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBNDc5NztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMEE0Nzk3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 3039:
/*!***************************************************************!*\
  !*** ./src/app/auth/splash-screen/splash-screen.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class SplashScreenComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.appId = '';
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            if (params['params']['ssid']) {
                localStorage.setItem('ssid', params['params']['ssid']);
            }
            else {
                localStorage.setItem('ssid', null);
            }
            if (params['params']['app']) {
                this.appId = params['params']['app'];
                localStorage.setItem('app', params['params']['app']);
            }
            else {
                this.appId = '';
                localStorage.setItem('app', this.appId);
            }
            if (params['params']['connid']) {
                localStorage.setItem('connid', params['params']['connid']);
            }
            else {
                localStorage.setItem('connid', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.orgConnectionCode);
            }
            if (params['params']['sid']) {
                localStorage.setItem('sid', params['params']['sid']);
            }
            else {
                localStorage.setItem('sid', '');
            }
            if (params['params']['type']) {
                localStorage.setItem('surveyType', params['params']['type']);
            }
            else {
                localStorage.setItem('surveyType', '');
            }
            if (params['params']['qid']) {
                localStorage.setItem('qid', params['params']['qid']);
            }
            else {
                localStorage.setItem('qid', '');
            }
            if (params['params']['sharedqrcode']) {
                localStorage.setItem('sharedqrcode', params['params']['sharedqrcode']);
            }
            else {
                localStorage.setItem('sharedqrcode', '');
            }
            if (params['params']['claim']) {
                localStorage.setItem('claim', params['params']['claim']);
            }
            else {
                localStorage.setItem('claim', '');
            }
        });
        // ******* Navigate to next screen after 2 seconds ******************
        let interval = setTimeout(() => {
            this.router.navigateByUrl('auth/login');
            clearInterval(interval);
        }, 2000);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SplashScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], decls: 30, vars: 0, consts: [[1, "container", "splash-screen"], [1, "total-cont"], [1, "row", "text-center"], [1, "col-md-12"], ["src", "../../../assets/media/handLogo.png", "alt", "", 1, "img-fluid"], [1, "row"], [1, "col-md-12", "text-center", "million-maker-bold"], [1, "mb-0", "fw-semibold"], [1, "col-md-12", "text-center", "blunumber-powerdby-text", "my-5"], [1, "mb-0"], [1, "row", "text-center", "bottom-position", "mb-5", "pb-5"], [1, "col-md-12", "text-center"], [1, "mb-4", "powered"], ["src", "../../../assets/media/Logo1.png", "alt", "", 1, "img-fluid", "q-pr-12"], ["src", "../../../assets/media/blogo.svg", "alt", "", 1, "img-fluid", "q-pr-12"], ["src", "../../../assets/media/Logo3.png", "alt", "", 1, "img-fluid", "q-pr-12"], ["src", "../../../assets/media/Logo4.png", "alt", "", 1, "img-fluid"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Million Makers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Real Worker Voice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5)(14, "div", 8)(15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Powered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bluenumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Presented by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 13)(27, "img", 14)(28, "img", 15)(29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } }, styles: [".splash-screen[_ngcontent-%COMP%] {\n  z-index: 999999999999;\n  position: fixed;\n  background-color: #fff;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 75px;\n}\n.splash-screen[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #AD0C62;\n  font-weight: 300;\n}\n.splash-screen[_ngcontent-%COMP%]   .bottom-position[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.splash-screen[_ngcontent-%COMP%]   .bottom-position[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 0px;\n  right: 0px;\n  color: #fff;\n  font-weight: bold;\n  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n}\n.q-pr-12[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n.powered[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #AD0C62;\n  font-weight: 300;\n}\n.million-maker-bold[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 16px;\n  position: absolute;\n  padding-left: 5px;\n}\n.blunumber-powerdby-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #1C4DA1;\n  font-weight: 300;\n}\n.blunumber-powerdby-text[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1C4DA1;\n  font-weight: bold;\n}\n.blunumber-powerdby-text[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 16px;\n  position: absolute;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQ0dTO0VERlQsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUZGO0FBS0U7RUFDRSxlQ2dCRztFRGZILGNDYlM7RURjVCxnQkFBQTtBQUhKO0FBU0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUEo7QUFTSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0N4Qks7RUR5QkwsaUJBQUE7RUFDQSwyQ0FBQTtBQVBOO0FBWUE7RUFDRSxtQkFBQTtBQVRGO0FBWUE7RUFDRSxlQ3JCSztFRHNCTCxjQzVDVztFRDZDWCxnQkFBQTtBQVRGO0FBYUU7RUFDRSxlQzVCRztFRDZCSCxrQkFBQTtFQUNBLGlCQUFBO0FBVko7QUFlRTtFQUNFLGVDcENHO0VEcUNILGNDOUNVO0VEK0NWLGdCQUFBO0FBWko7QUFjRTtFQUNFLGVDdENHO0VEdUNILGNDbkRVO0VEb0RWLGlCQUFBO0FBWko7QUFjRTtFQUNFLGVDOUNHO0VEK0NILGtCQUFBO0VBQ0EsaUJBQUE7QUFaSiIsImZpbGUiOiJzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUE1BIFZhcmlhYmxlc1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uc3BsYXNoLXNjcmVlbiB7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctd2hpdGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiA3NXB4O1xyXG4gIFxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6ICRmLTMwO1xyXG4gICAgY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgfVxyXG4gXHJcblxyXG4gIC5ib3R0b20tcG9zaXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDI1cHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgY29sb3I6ICRiZy13aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucS1wci0xMiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxufVxyXG5cclxuLnBvd2VyZWQge1xyXG4gIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgY29sb3I6ICRtbS1wcmltYXJ5O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5taWxsaW9uLW1ha2VyLWJvbGR7XHJcbiAgYntcclxuICAgIGZvbnQtc2l6ZTogICRmLTE2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmx1bnVtYmVyLXBvd2VyZGJ5LXRleHR7XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogJGYtMTY7XHJcbiAgICBjb2xvcjogJHllc2J0bi1ibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgaDZ7XHJcbiAgICBmb250LXNpemU6ICRmLTIwO1xyXG4gICAgY29sb3I6ICR5ZXNidG4tYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBie1xyXG4gICAgZm9udC1zaXplOiAgJGYtMTY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuLy8gLnRvdGFsLWNvbnR7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuIFxyXG4vLyB9XHJcbiIsIi8vIFBNQSBDb2xvcnNcclxuJHRleHQtcHJpbWFyeTogIzBBNDc5NztcclxuJG1tLXByaW1hcnk6ICNBRDBDNjI7XHJcbiRtbS1wcmltYXJ5LWRpc2FibGVkOiAjYzRjNGM0O1xyXG4kbW0tc2Vjb25kYXJ5OiAjNjIxQzQzO1xyXG4kbW0tc3VjY2VzczogI0VBNjAwRTtcclxuJHRleHQtbGlnaHQtZ3JheTogI0Y4RjhGODtcclxuJHRleHQtZ3JheTogIzU0NTQ1NDtcclxuJGdyYXktYmc6ICNGOEY4Rjg7XHJcbiRiZy13aGl0ZTogI2ZmZjtcclxuJGdyYXktYm9yZGVyOiAjREFEQURBO1xyXG4kYmx1aXNoOiAjMjczQjRBO1xyXG4kYmctbGlnaHQ6ICNGM0YzRjM7XHJcbiR3aGl0ZS1jb2xvcjojRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiR5ZXNidG4tYmx1ZTogIzFDNERBMTtcclxuJG5vYnRuLWxpZ2h0OiAjNDQ3MkM0O1xyXG4vLyBQTUEgRm9udCBTaXplc1xyXG4kZi0xMDogMTBweDsgICAgICAgXHJcbiRmLTExOiAxMXB4OyAgICAgICBcclxuJGYtMTI6IDEycHg7ICAgICAgIFxyXG4kZi0xMzogMTNweDsgICAgICAgXHJcbiRmLTE0OiAxNHB4O1xyXG4kZi0xNTogMTVweDtcclxuJGYtMTY6IDE2cHg7ICAgIFxyXG4kZi0xODogMThweDsgICAgXHJcbiRmLTE5OiAxOXB4O1xyXG4kZi0yMDogMjBweDtcclxuJGYtMjQ6IDI0cHg7XHJcbiRmLTI1OiAyNXB4O1xyXG4kZi0zMDogMzBweDtcclxuJGYtMzY6IDM2cHg7XHJcbiRmLTQwOiA0MHB4O1xyXG5cclxuLy8gUE1BIEZvbnQgV2VpZ2h0XHJcbiRmdy02MDA6IDYwMDtcclxuJGZ3LTUwMDogNTAwO1xyXG4kZnctNDAwOiA0MDA7XHJcbiRmdy0zMDA6IDMwMDtcclxuXHJcbi8vIFBNQSBSYWRpdXNcclxuJGJyLTEwOiAxMHB4O1xyXG5cclxuLy8gUE1BIFBhZGRpbmdzXHJcbiRwYWRkLTEwOiAxMHB4O1xyXG4kcGFkZC0yMDogMjBweDtcclxuJHBhZGQtMzA6IDMwcHg7XHJcblxyXG5cclxuLy8gUE1BIDAgVmFsdWVzXHJcbiR2YWx1ZS0wOiAwcHg7XHJcblxyXG4vLyBQTUEgQ3Vyc29yc1xyXG4kcG9pbnRlcjogcG9pbnRlcjtcclxuXHJcbi8vIGZvbnQtZmFtaWx5XHJcbiRmb250LWZhbWlseTonTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1434:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/select.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SELECT_CONFIG": () => (/* binding */ MAT_SELECT_CONFIG),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER),
/* harmony export */   "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY": () => (/* binding */ MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY),
/* harmony export */   "MAT_SELECT_TRIGGER": () => (/* binding */ MAT_SELECT_TRIGGER),
/* harmony export */   "MatSelect": () => (/* binding */ MatSelect),
/* harmony export */   "MatSelectChange": () => (/* binding */ MatSelectChange),
/* harmony export */   "MatSelectModule": () => (/* binding */ MatSelectModule),
/* harmony export */   "MatSelectTrigger": () => (/* binding */ MatSelectTrigger),
/* harmony export */   "_MatSelectBase": () => (/* binding */ _MatSelectBase),
/* harmony export */   "matSelectAnimations": () => (/* binding */ matSelectAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */

const _c0 = ["trigger"];
const _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.placeholder);
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8._panelDoneAnimatingStream.next($event.toState);
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r10._handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanelWrap', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.query)('@transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animateChild)()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing-multiple', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/** The max height of the select's overlay panel. */

const SELECT_PANEL_MAX_HEIGHT = 256;
/** The panel's padding on the x-axis. */

const SELECT_PANEL_PADDING_X = 16;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/** The height of the select items in `em` units. */

const SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 */

const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */


const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SELECT_CONFIG');
/** @docs-private */

const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

class MatSelectChange {
  constructor(
  /** Reference to the select that emitted the change event. */
  source,
  /** Current value of the select that emitted the event. */
  value) {
    this.source = source;
    this.value = value;
  }

} // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


const _MatSelectMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinErrorState)(class {
  constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
    this._elementRef = _elementRef;
    this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this.ngControl = ngControl;
  }

}))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */

class MatSelectTrigger {}

MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
  return new (t || MatSelectTrigger)();
};

MatSelectTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSelectTrigger,
  selectors: [["mat-select-trigger"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_SELECT_TRIGGER,
    useExisting: MatSelectTrigger
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
/** Base class with all of the `MatSelect` functionality. */


class _MatSelectBase extends _MatSelectMixinBase {
  constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
    var _a, _b, _c;

    super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._dir = _dir;
    this._parentFormField = _parentFormField;
    this._liveAnnouncer = _liveAnnouncer;
    this._defaultOptions = _defaultOptions;
    /** Whether or not the overlay panel is open. */

    this._panelOpen = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */

    this._compareWith = (o1, o2) => o1 === o2;
    /** Unique id for this input. */


    this._uid = `mat-select-${nextUniqueId++}`;
    /** Current `ariar-labelledby` value for the select trigger. */

    this._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */

    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** `View -> model callback called when value changes` */

    this._onChange = () => {};
    /** `View -> model callback called when select has been touched` */


    this._onTouched = () => {};
    /** ID for the DOM node containing the select's value. */


    this._valueId = `mat-select-value-${nextUniqueId++}`;
    /** Emits when the panel element is finished transforming in. */

    this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._overlayPanelClass = ((_a = this._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
    this._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */

    this.controlType = 'mat-select';
    this._multiple = false;
    this._disableOptionCentering = (_c = (_b = this._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
    /** Aria label of the select. */

    this.ariaLabel = '';
    /** Combined stream of all of the child options' change events. */

    this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => {
      const options = this.options;

      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...options.map(option => option.onSelectionChange))));
      }

      return this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.optionSelectionChanges));
    });
    /** Event emitted when the select panel has been toggled. */

    this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the select has been opened. */

    this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {}));
    /** Event emitted when the select has been closed. */

    this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => {}));
    /** Event emitted when the selected value has been changed by the user. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    } // Note that we only want to set this when the defaults pass it in, otherwise it should
    // stay as `undefined` so that it falls back to the default in the key manager.


    if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
      this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
    }

    this._scrollStrategyFactory = scrollStrategyFactory;
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

    this.id = this.id;
  }
  /** Whether the select is focused. */


  get focused() {
    return this._focused || this._panelOpen;
  }
  /** Placeholder to be shown if no value has been selected. */


  get placeholder() {
    return this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether the component is required. */


  get required() {
    var _a, _b, _c, _d;

    return (_d = (_a = this._required) !== null && _a !== void 0 ? _a : (_c = (_b = this.ngControl) === null || _b === void 0 ? void 0 : _b.control) === null || _c === void 0 ? void 0 : _c.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required)) !== null && _d !== void 0 ? _d : false;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }
  /** Whether the user should be allowed to select multiple options. */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }

    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }
  /** Whether to center the active option over the trigger. */


  get disableOptionCentering() {
    return this._disableOptionCentering;
  }

  set disableOptionCentering(value) {
    this._disableOptionCentering = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */


  get compareWith() {
    return this._compareWith;
  }

  set compareWith(fn) {
    if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }

    this._compareWith = fn;

    if (this._selectionModel) {
      // A different comparator means the selection could change.
      this._initializeSelection();
    }
  }
  /** Value of the select control. */


  get value() {
    return this._value;
  }

  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);

    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */


  get typeaheadDebounceInterval() {
    return this._typeaheadDebounceInterval;
  }

  set typeaheadDebounceInterval(value) {
    this._typeaheadDebounceInterval = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceNumberProperty)(value);
  }
  /** Unique id of the element. */


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }

  ngOnInit() {
    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(this.multiple);
    this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
    // fire the animation end event twice for the same animation. See:
    // https://github.com/angular/angular/issues/24084

    this._panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen));
  }

  ngAfterContentInit() {
    this._initKeyManager();

    this._selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(event => {
      event.added.forEach(option => option.select());
      event.removed.forEach(option => option.deselect());
    });

    this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      this._resetOptions();

      this._initializeSelection();
    });
  }

  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();

    const ngControl = this.ngControl; // We have to manage setting the `aria-labelledby` ourselves, because part of its value
    // is computed as a result of a content query which can cause this binding to trigger a
    // "changed after checked" error.

    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;

      if (newAriaLabelledby) {
        element.setAttribute('aria-labelledby', newAriaLabelledby);
      } else {
        element.removeAttribute('aria-labelledby');
      }
    }

    if (ngControl) {
      // The disabled state might go out of sync if the form group is swapped out. See #17860.
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== undefined && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }

        this._previousControl = ngControl.control;
      }

      this.updateErrorState();
    }
  }

  ngOnChanges(changes) {
    // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
    // the parent form field know to run change detection when the disabled state changes.
    if (changes['disabled']) {
      this.stateChanges.next();
    }

    if (changes['typeaheadDebounceInterval'] && this._keyManager) {
      this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
    }
  }

  ngOnDestroy() {
    this._destroy.next();

    this._destroy.complete();

    this.stateChanges.complete();
  }
  /** Toggles the overlay panel open or closed. */


  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */


  open() {
    if (this._canOpen()) {
      this._panelOpen = true;

      this._keyManager.withHorizontalOrientation(null);

      this._highlightCorrectOption();

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Closes the overlay panel and focuses the host element. */


  close() {
    if (this._panelOpen) {
      this._panelOpen = false;

      this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

      this._changeDetectorRef.markForCheck();

      this._onTouched();
    }
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */


  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */


  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */


  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */


  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */


  get selected() {
    var _a, _b;

    return this.multiple ? ((_a = this._selectionModel) === null || _a === void 0 ? void 0 : _a.selected) || [] : (_b = this._selectionModel) === null || _b === void 0 ? void 0 : _b.selected[0];
  }
  /** The value displayed in the trigger. */


  get triggerValue() {
    if (this.empty) {
      return '';
    }

    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);

      if (this._isRtl()) {
        selectedOptions.reverse();
      } // TODO(crisbeto): delimiter should be configurable for proper localization.


      return selectedOptions.join(', ');
    }

    return this._selectionModel.selected[0].viewValue;
  }
  /** Whether the element is in RTL mode. */


  _isRtl() {
    return this._dir ? this._dir.value === 'rtl' : false;
  }
  /** Handles all keydown events on the select. */


  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  /** Handles keyboard events while the select is closed. */


  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.RIGHT_ARROW;
    const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE;
    const manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

    if (!manager.isTyping() && isOpenKey && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault(); // prevents the page from scrolling down when pressing space

      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

      if (selectedOption && previouslySelectedOption !== selectedOption) {
        // We set a duration on the live announcement, because we want the live element to be
        // cleared after a while so that users can't navigate to it using the arrow keys.
        this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */


  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.UP_ARROW;
    const isTyping = manager.isTyping();

    if (isArrowKey && event.altKey) {
      // Close the select on ALT + arrow key to match the native <select>
      event.preventDefault();
      this.close(); // Don't do anything in this case if the user is typing,
      // because the typing sequence can include the space key.
    } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE) && manager.activeItem && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
      event.preventDefault();

      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
      this.options.forEach(option => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);

      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }

  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */


  _onBlur() {
    this._focused = false;

    if (!this.disabled && !this.panelOpen) {
      this._onTouched();

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
  }
  /**
   * Callback that is invoked when the overlay panel has been attached.
   */


  _onAttached() {
    this._overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();

      this._positioningSettled();
    });
  }
  /** Returns the theme to be used on the panel. */


  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
  }
  /** Whether the select has a value. */


  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }

  _initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }

      this._setSelectionByValue(this._value);

      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */


  _setSelectionByValue(value) {
    this._selectionModel.selected.forEach(option => option.setInactiveStyles());

    this._selectionModel.clear();

    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }

      value.forEach(currentValue => this._selectOptionByValue(currentValue));

      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what option the user interacted with last.


      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        // Otherwise reset the highlighted option. Note that we only want to do this while
        // closed, because doing it while open can shift the user's focus unnecessarily.
        this._keyManager.updateActiveItem(-1);
      }
    }

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */


  _selectOptionByValue(value) {
    const correspondingOption = this.options.find(option => {
      // Skip options that are already in the model. This allows us to handle cases
      // where the same primitive value is selected multiple times.
      if (this._selectionModel.isSelected(option)) {
        return false;
      }

      try {
        // Treat null as a special reset value.
        return option.value != null && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // Notify developers of errors in their comparator.
          console.warn(error);
        }

        return false;
      }
    });

    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }

    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */


  _assignValue(newValue) {
    // Always re-assign an array, because it might have been mutated.
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }

      this._value = newValue;
      return true;
    }

    return false;
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */


  _initKeyManager() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.ActiveDescendantKeyManager(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

    this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        // Select the active item when tabbing away. This is consistent with how the native
        // select behaves. Note that we only want to do this in single selection mode.
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        } // Restore focus to the trigger before closing. Ensures that the focus
        // position won't be lost if the user got focus into the overlay.


        this.focus();
        this.close();
      }
    });

    this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */


  _resetOptions() {
    const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(event => {
      this._onSelect(event.source, event.isUserInput);

      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    }); // Listen to changes in the internal state of the options and react accordingly.
    // Handles cases like the labels of the selected options changing.

    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.options.map(option => option._stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */


  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);

    if (option.value == null && !this._multiple) {
      option.deselect();

      this._selectionModel.clear();

      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }

      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }

      if (this.multiple) {
        this._sortValues();

        if (isUserInput) {
          // In case the user selected the option with their mouse, we
          // want to restore focus back to the trigger, in order to
          // prevent the select keyboard controls from clashing with
          // the ones from `mat-option`.
          this.focus();
        }
      }
    }

    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }

    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */


  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();

      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });

      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */


  _propagateChanges(fallbackValue) {
    let valueToEmit = null;

    if (this.multiple) {
      valueToEmit = this.selected.map(option => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }

    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);

    this._onChange(valueToEmit);

    this.selectionChange.emit(this._getChangeEvent(valueToEmit));

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first item instead.
   */


  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        this._keyManager.setFirstItemActive();
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */


  _canOpen() {
    var _a;

    return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  /** Focuses the select element. */


  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */


  _getPanelAriaLabelledby() {
    var _a;

    if (this.ariaLabel) {
      return null;
    }

    const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
    const labelExpression = labelId ? labelId + ' ' : '';
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */


  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }

    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */


  _getTriggerAriaLabelledby() {
    var _a;

    if (this.ariaLabel) {
      return null;
    }

    const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
    let value = (labelId ? labelId + ' ' : '') + this._valueId;

    if (this.ariaLabelledby) {
      value += ' ' + this.ariaLabelledby;
    }

    return value;
  }
  /** Called when the overlay panel is done animating. */


  _panelDoneAnimating(isOpen) {
    this.openedChange.emit(isOpen);
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  setDescribedByIds(ids) {
    this._ariaDescribedby = ids.join(' ');
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  get shouldLabelFloat() {
    return this._panelOpen || !this.empty || this._focused && !!this._placeholder;
  }

}

_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) {
  return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
};

_MatSelectBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatSelectBase,
  viewQuery: function _MatSelectBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._overlayDir = _t.first);
    }
  },
  inputs: {
    panelClass: "panelClass",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    disableOptionCentering: "disableOptionCentering",
    compareWith: "compareWith",
    value: "value",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    errorStateMatcher: "errorStateMatcher",
    typeaheadDebounceInterval: "typeaheadDebounceInterval",
    sortComparator: "sortComparator",
    id: "id"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    _closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSelectBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.ViewportRuler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MAT_FORM_FIELD]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.LiveAnnouncer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SELECT_CONFIG]
      }]
    }];
  }, {
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel']
    }],
    _overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
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
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class MatSelect extends _MatSelectBase {
  constructor() {
    super(...arguments);
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    this._scrollTop = 0;
    /** The cached font-size of the trigger element. */

    this._triggerFontSize = 0;
    /** The value of the select panel's transform-origin property. */

    this._transformOrigin = 'top';
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    this._offsetY = 0;
    this._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
  }
  /**
   * Calculates the scroll position of the select's overlay panel.
   *
   * Attempts to center the selected option in the panel. If the option is
   * too high or too low in the panel to be scrolled to the center, it clamps the
   * scroll position to the min or max scroll positions respectively.
   */


  _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();

    const optionOffsetFromScrollTop = itemHeight * selectedIndex;
    const halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
    // scroll container, then subtracts the scroll buffer to scroll the option down to
    // the center of the overlay panel. Half the option height must be re-added to the
    // scrollTop so the option is centered based on its middle, not its top edge.

    const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
    return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
  }

  ngOnInit() {
    super.ngOnInit();

    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();

        this._changeDetectorRef.markForCheck();
      }
    });
  }

  open() {
    if (super._canOpen()) {
      super.open();
      this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
      // `parseInt` ignores the trailing 'px' and converts this to a number.

      this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');

      this._calculateOverlayPosition(); // Set the font size on the panel element once it exists.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
        if (this._triggerFontSize && this._overlayDir.overlayRef && this._overlayDir.overlayRef.overlayElement) {
          this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
        }
      });
    }
  }
  /** Scrolls the active option into view. */


  _scrollOptionIntoView(index) {
    const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(index, this.options, this.optionGroups);

    const itemHeight = this._getItemHeight();

    if (index === 0 && labelCount === 1) {
      // If we've got one group label before the option and we're at the top option,
      // scroll the list to the top. This is better UX than scrolling the list to the
      // top of the option, because it allows the user to read the top group's label.
      this.panel.nativeElement.scrollTop = 0;
    } else {
      this.panel.nativeElement.scrollTop = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._getOptionScrollPosition)((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
  }

  _positioningSettled() {
    this._calculateOverlayOffsetX();

    this.panel.nativeElement.scrollTop = this._scrollTop;
  }

  _panelDoneAnimating(isOpen) {
    if (this.panelOpen) {
      this._scrollTop = 0;
    } else {
      this._overlayDir.offsetX = 0;

      this._changeDetectorRef.markForCheck();
    }

    super._panelDoneAnimating(isOpen);
  }

  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /**
   * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
   * This must be adjusted to align the selected option text over the trigger text when
   * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
   * can't be calculated until the panel has been attached, because we need to know the
   * content width in order to constrain the panel within the viewport.
   */


  _calculateOverlayOffsetX() {
    const overlayRect = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect();

    const viewportSize = this._viewportRuler.getViewportSize();

    const isRtl = this._isRtl();

    const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
    let offsetX; // Adjust the offset, depending on the option padding.

    if (this.multiple) {
      offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
    } else if (this.disableOptionCentering) {
      offsetX = SELECT_PANEL_PADDING_X;
    } else {
      let selected = this._selectionModel.selected[0] || this.options.first;
      offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
    } // Invert the offset in LTR.


    if (!isRtl) {
      offsetX *= -1;
    } // Determine how much the select overflows on each side.


    const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
    const rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

    if (leftOverflow > 0) {
      offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    } else if (rightOverflow > 0) {
      offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
    } // Set the offset directly in order to avoid having to go through change detection and
    // potentially triggering "changed after it was checked" errors. Round the value to avoid
    // blurry content in some browsers.


    this._overlayDir.offsetX = Math.round(offsetX);

    this._overlayDir.overlayRef.updatePosition();
  }
  /**
   * Calculates the y-offset of the select's overlay panel in relation to the
   * top start corner of the trigger. It has to be adjusted in order for the
   * selected option to be aligned over the trigger when the panel opens.
   */


  _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
    const itemHeight = this._getItemHeight();

    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
    let optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

    if (this.disableOptionCentering) {
      return 0;
    }

    if (this._scrollTop === 0) {
      optionOffsetFromPanelTop = selectedIndex * itemHeight;
    } else if (this._scrollTop === maxScroll) {
      const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
      const selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
      // portion of it is shown in the viewport and account for it in our offset.

      let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
      // there is always extra padding at the top or bottom of the panel. When
      // scrolled to the very bottom, this padding is at the top of the panel and
      // must be added to the offset.

      optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
    } else {
      // If the option was scrolled to the middle of the panel using a scroll buffer,
      // its offset will be the scroll buffer minus the half height that was added to
      // center it.
      optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
    } // The final offset is the option's offset from the top, adjusted for the height difference,
    // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
    // The value is rounded to prevent some browsers from blurring the content.


    return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
  }
  /**
   * Checks that the attempted overlay position will fit within the viewport.
   * If it will not fit, tries to adjust the scroll position and the associated
   * y-offset so the panel can open fully on-screen. If it still won't fit,
   * sets the offset back to 0 to allow the fallback position to take over.
   */


  _checkOverlayWithinViewport(maxScroll) {
    const itemHeight = this._getItemHeight();

    const viewportSize = this._viewportRuler.getViewportSize();

    const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
    const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
    const panelHeightTop = Math.abs(this._offsetY);
    const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

    if (panelHeightBottom > bottomSpaceAvailable) {
      this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
    } else if (panelHeightTop > topSpaceAvailable) {
      this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
    } else {
      this._transformOrigin = this._getOriginBasedOnOption();
    }
  }
  /** Adjusts the overlay panel up to fit in the viewport. */


  _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel up into the viewport.

    this._scrollTop -= distanceBelowViewport;
    this._offsetY -= distanceBelowViewport;
    this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
    // by scrolling, so set the offset to 0 to allow the fallback position to take
    // effect.

    if (this._scrollTop <= 0) {
      this._scrollTop = 0;
      this._offsetY = 0;
      this._transformOrigin = `50% bottom 0px`;
    }
  }
  /** Adjusts the overlay panel down to fit in the viewport. */


  _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
    // Browsers ignore fractional scroll offsets, so we need to round.
    const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
    // adjusts the offset by that amount to move the panel down into the viewport.

    this._scrollTop += distanceAboveViewport;
    this._offsetY += distanceAboveViewport;
    this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
    // panel by scrolling, so set the offset to 0 to allow the fallback position
    // to take effect.

    if (this._scrollTop >= maxScroll) {
      this._scrollTop = maxScroll;
      this._offsetY = 0;
      this._transformOrigin = `50% top 0px`;
      return;
    }
  }
  /** Calculates the scroll position and x- and y-offsets of the overlay panel. */


  _calculateOverlayPosition() {
    const itemHeight = this._getItemHeight();

    const items = this._getItemCount();

    const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
    const scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

    const maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

    let selectedOptionOffset;

    if (this.empty) {
      selectedOptionOffset = 0;
    } else {
      selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
    }

    selectedOptionOffset += (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__._countGroupLabelsBeforeOption)(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
    // center of the overlay panel rather than the top.

    const scrollBuffer = panelHeight / 2;
    this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
    this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

    this._checkOverlayWithinViewport(maxScroll);
  }
  /** Sets the transform origin point based on the selected option. */


  _getOriginBasedOnOption() {
    const itemHeight = this._getItemHeight();

    const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
    const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
    return `50% ${originY}px 0px`;
  }
  /** Calculates the height of the select's options. */


  _getItemHeight() {
    return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
  }
  /** Calculates the amount of items in the select. This includes options and group labels. */


  _getItemCount() {
    return this.options.length + this.optionGroups.length;
  }

}

MatSelect.ɵfac = /* @__PURE__ */function () {
  let ɵMatSelect_BaseFactory;
  return function MatSelect_Factory(t) {
    return (ɵMatSelect_BaseFactory || (ɵMatSelect_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSelect)))(t || MatSelect);
  };
}();

MatSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSelect,
  selectors: [["mat-select"]],
  contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
  hostVars: 20,
  hostBindings: function MatSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatSelect_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSelect_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl,
    useExisting: MatSelect
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 12,
  consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
  template: function MatSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
        return ctx.close();
      })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
        return ctx._onAttached();
      })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx._valueId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    }
  },
  directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass],
  styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}\n"],
  encapsulation: 2,
  data: {
    animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px;display:inline-block;visibility:hidden}\n"]
    }]
  }], null, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSelectModule {}

MatSelectModule.ɵfac = function MatSelectModule_Factory(t) {
  return new (t || MatSelectModule)();
};

MatSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSelectModule
});
MatSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__.CdkScrollableModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
      declarations: [MatSelect, MatSelectTrigger],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
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

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map