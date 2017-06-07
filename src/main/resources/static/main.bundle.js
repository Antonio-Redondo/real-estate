webpackJsonp([0,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewemployeepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var max = 10;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var PHONE_REGEX = '\\d+';
var AGE_REGEX = '\\d+';
var AddnewemployeepageComponent = (function () {
    function AddnewemployeepageComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.employee = new __WEBPACK_IMPORTED_MODULE_2__entities_employee__["a" /* Employee */];
        this.disabled = true;
        this.cancelUrl = "/employeelist/false";
        this.formControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)]);
        this.telephoneFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(PHONE_REGEX)]);
        this.ageFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(AGE_REGEX)]);
        this.model = '';
        this.returnUrl = '/employeelist/true';
        this.routerAct.queryParams.subscribe(function (params) {
            _this.userFirstname = params["firstname"];
            _this.userLastname = params["lastname"];
        });
    }
    AddnewemployeepageComponent.prototype.ngOnInit = function () {
    };
    AddnewemployeepageComponent.prototype.checkFiledsRequired = function () {
        if (this.firstName != null && this.firstName != '' && this.lastName != null && this.lastName != ''
            && this.email != null && this.email != '' && this.telephone != null && this.age != null
            && this.emailFormControl.status != "INVALID" && this.telephoneFormControl.status != "INVALID"
            && this.ageFormControl.status != "INVALID") {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    AddnewemployeepageComponent.prototype.saveEmployee = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.employee.name = this.firstName + " " + this.lastName;
        this.employee.email = this.email;
        this.employee.age = this.age;
        this.employee.telephone = this.telephone;
        this.employee.address = this.address;
        this.employee.remarks = this.remarks;
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    AddnewemployeepageComponent.prototype.cancelNavigation = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.cancelUrl], navigationExtras);
    };
    return AddnewemployeepageComponent;
}());
AddnewemployeepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addnewemployeepage',
        template: __webpack_require__(435),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddnewemployeepageComponent);

var _a, _b;
//# sourceMappingURL=addnewemployeepage.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_task__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewtaskpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddnewtaskpageComponent = (function () {
    function AddnewtaskpageComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.task = new __WEBPACK_IMPORTED_MODULE_1__entities_task__["a" /* Task */](null, null, null, null, null);
        this.disabled = true;
        this.cancelUrl = "/dutieslist/false";
        this.formControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.model = '';
        this.returnUrl = '/dutieslist/true';
        this.routerAct.queryParams.subscribe(function (params) {
            _this.userFirstname = params["firstname"];
            _this.userLastname = params["lastname"];
        });
    }
    AddnewtaskpageComponent.prototype.ngOnInit = function () {
    };
    AddnewtaskpageComponent.prototype.checkFiledsRequired = function () {
        if (this.task.name != null && this.task.name != '' && this.task.remarks != null && this.task.remarks != '') {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    AddnewtaskpageComponent.prototype.saveTask = function () {
        console.log(this.task);
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    AddnewtaskpageComponent.prototype.cancelNavigation = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.cancelUrl], navigationExtras);
    };
    return AddnewtaskpageComponent;
}());
AddnewtaskpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addnewtaskpage',
        template: __webpack_require__(436),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddnewtaskpageComponent);

var _a, _b;
//# sourceMappingURL=addnewtaskpage.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addproperty_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpropertyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddpropertyModule = (function () {
    function AddpropertyModule() {
    }
    return AddpropertyModule;
}());
AddpropertyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__addproperty_component__["a" /* AddpropertyComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__addproperty_component__["a" /* AddpropertyComponent */]]
    })
], AddpropertyModule);

//# sourceMappingURL=addproperty.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_property__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpropertypageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddpropertypageComponent = (function () {
    function AddpropertypageComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.property = new __WEBPACK_IMPORTED_MODULE_1__entities_property__["a" /* Property */];
        this.disabled = true;
        this.cancelUrl = "/propertieslist/false";
        this.formControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.model = '';
        this.returnUrl = '/propertieslist/true';
        this.routerAct.queryParams.subscribe(function (params) {
            _this.userFirstname = params["firstname"];
            _this.userLastname = params["lastname"];
        });
    }
    AddpropertypageComponent.prototype.ngOnInit = function () {
    };
    AddpropertypageComponent.prototype.checkFiledsRequired = function () {
        if (this.property.name != null && this.property.name != '' && this.property.address != null && this.property.address != ''
            && this.property.city != null && this.property.city != '') {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    };
    AddpropertypageComponent.prototype.saveProperty = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    AddpropertypageComponent.prototype.cancelNavigation = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.cancelUrl], navigationExtras);
    };
    return AddpropertypageComponent;
}());
AddpropertypageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addpropertypage',
        template: __webpack_require__(438),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddpropertypageComponent);

var _a, _b;
//# sourceMappingURL=addpropertypage.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtask_component__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddtaskModule = (function () {
    function AddtaskModule() {
    }
    return AddtaskModule;
}());
AddtaskModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__addtask_component__["a" /* AddtaskComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__addtask_component__["a" /* AddtaskComponent */]]
    })
], AddtaskModule);

//# sourceMappingURL=addtask.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteemployeeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DeleteemployeeModule = (function () {
    function DeleteemployeeModule() {
    }
    return DeleteemployeeModule;
}());
DeleteemployeeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["a" /* DeleteemployeeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["a" /* DeleteemployeeComponent */]]
    })
], DeleteemployeeModule);

//# sourceMappingURL=deleteemployee.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletepropertyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DeletepropertyModule = (function () {
    function DeletepropertyModule() {
    }
    return DeletepropertyModule;
}());
DeletepropertyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["a" /* DeletepropertyComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["a" /* DeletepropertyComponent */]]
    })
], DeletepropertyModule);

//# sourceMappingURL=deleteproperty.module.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deletetask_component__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletetaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DeletetaskModule = (function () {
    function DeletetaskModule() {
    }
    return DeletetaskModule;
}());
DeletetaskModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deletetask_component__["a" /* DeletetaskComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deletetask_component__["a" /* DeletetaskComponent */]]
    })
], DeletetaskModule);

//# sourceMappingURL=deletetask.module.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_task__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_property__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogComponent = (function () {
    function DialogComponent(dialog, routerAct) {
        this.dialog = dialog;
        this.routerAct = routerAct;
    }
    DialogComponent.prototype.openDialog = function (item) {
        console.log(this.item);
        if (this.item.task[0] == null) {
            console.log("yes");
            var task = [];
            task.push(new __WEBPACK_IMPORTED_MODULE_3__entities_task__["a" /* Task */](null, "", "", "", ""));
            this.item.task[0] = task;
        }
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DialogPopupComponent, {
            height: '600px',
            width: '600px',
        });
        if (this.item.task.dateFrom != null && this.item.task.dateTo != null) {
            this.parseDate(this.item.task.dateFrom);
        }
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialogComponent.prototype.ngOnInit = function () {
        console.log("init");
        if (this.item.property == null) {
            this.item.property = new __WEBPACK_IMPORTED_MODULE_4__entities_property__["a" /* Property */];
        }
        if (this.item.task == null) {
            this.item.task = new __WEBPACK_IMPORTED_MODULE_3__entities_task__["a" /* Task */](null, "", "", "", "");
        }
    };
    DialogComponent.prototype.parseDate = function (date) {
        console.log(new Date(date));
        return new Date(date);
    };
    return DialogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_employee__["a" /* Employee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_employee__["a" /* Employee */]) === "function" && _a || Object)
], DialogComponent.prototype, "item", void 0);
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(444),
        styles: ['./dialog.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], DialogComponent);

var DialogPopupComponent = (function () {
    function DialogPopupComponent(dialogRef, router, routerAct) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.enableButton = false;
        this.returnUrl = '/employeelist/savedTask';
        this.remarks = "";
        this.routerAct.queryParams.subscribe(function (params) {
            console.log("firstname" + params["firstname"]);
            console.log("lastname" + params["lastname"]);
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DialogPopupComponent.prototype.ngOnInit = function () {
    };
    DialogPopupComponent.prototype.saveTask = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("save task");
        this.dialogRef.close();
        this.router.navigate([this.returnUrl], navigationExtras);
        this.refresh();
    };
    DialogPopupComponent.prototype.refresh = function () {
        window.location.reload();
    };
    DialogPopupComponent.prototype.checkFields = function () {
        console.log(this.item.task[0].remarks);
        if (this.item.task.dateFrom != null && this.item.task.dateTo != null && this.item.task[0].remarks != null) {
            this.enableButton = true;
        }
    };
    return DialogPopupComponent;
}());
DialogPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-popup',
        template: __webpack_require__(445),
        styles: ['./dialog.popup.component.css'],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object])
], DialogPopupComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialoginformationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogInformationPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialoginformationComponent = (function () {
    function DialoginformationComponent(dialog) {
        this.dialog = dialog;
    }
    DialoginformationComponent.prototype.openDialog = function (item) {
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DialogInformationPopupComponent, {
            height: '600px',
            width: '600px',
        });
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialoginformationComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit" + this.disabled);
    };
    return DialoginformationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_employee__["a" /* Employee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_employee__["a" /* Employee */]) === "function" && _a || Object)
], DialoginformationComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DialoginformationComponent.prototype, "disabled", void 0);
DialoginformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialoginformation',
        template: __webpack_require__(446),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DialoginformationComponent);

var DialogInformationPopupComponent = (function () {
    function DialogInformationPopupComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.enableButton = false;
    }
    DialogInformationPopupComponent.prototype.ngOnInit = function () {
        this.remarks = "";
        // this.item = this.dialogComponent.item;
    };
    return DialogInformationPopupComponent;
}());
DialogInformationPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialoginformation-popup',
        template: __webpack_require__(447),
        styles: ['./dialoginformation.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object])
], DialogInformationPopupComponent);

var _a, _b, _c;
//# sourceMappingURL=dialoginformation.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialoginformationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialoginformationModule = (function () {
    function DialoginformationModule() {
    }
    return DialoginformationModule;
}());
DialoginformationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__["a" /* DropdownpropertiesModule */],
            __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__["a" /* DropdowntaskModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__["DpDatePickerModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__["b" /* DialoginformationComponent */], __WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__["a" /* DialogInformationPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__["b" /* DialoginformationComponent */], __WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__["a" /* DialogInformationPopupComponent */]]
    })
], DialoginformationModule);

//# sourceMappingURL=dialoginformation.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_property__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogPropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPropertyPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogPropertyComponent = (function () {
    function DialogPropertyComponent(dialog) {
        this.dialog = dialog;
    }
    DialogPropertyComponent.prototype.openDialog = function (item) {
        console.log(this.item);
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DialogPropertyPopupComponent, {
            height: '320px',
            width: '600px',
        });
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialogPropertyComponent.prototype.ngOnInit = function () {
        console.log("init");
    };
    DialogPropertyComponent.prototype.parseDate = function (date) {
        console.log(new Date(date));
        return new Date(date);
    };
    return DialogPropertyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_property__["a" /* Property */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_property__["a" /* Property */]) === "function" && _a || Object)
], DialogPropertyComponent.prototype, "item", void 0);
DialogPropertyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-property',
        template: __webpack_require__(448),
        styles: ['./dialogproperty.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DialogPropertyComponent);

var DialogPropertyPopupComponent = (function () {
    function DialogPropertyPopupComponent(dialogRef, router, routerAct) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.enableButton = false;
        this.returnUrl = '/propertieslist/savedEmployee';
        this.routerAct.queryParams.subscribe(function (params) {
            console.log("firstname" + params["firstname"]);
            console.log("lastname" + params["lastname"]);
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DialogPropertyPopupComponent.prototype.ngOnInit = function () {
        console.log(this.item);
        this.name = this.item.name;
        this.city = this.item.city;
        this.address = this.item.address;
    };
    DialogPropertyPopupComponent.prototype.saveProperty = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("saveProperty");
        this.dialogRef.close();
        this.router.navigate([this.returnUrl], navigationExtras);
        this.refresh();
    };
    DialogPropertyPopupComponent.prototype.refresh = function () {
        window.location.reload();
    };
    DialogPropertyPopupComponent.prototype.checkFields = function () {
        if (this.name != null && this.name != '' && this.city != null
            && this.city != '' && this.address != null && this.address != '') {
            console.log("inside");
            this.enableButton = true;
        }
    };
    return DialogPropertyPopupComponent;
}());
DialogPropertyPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-propertypopup',
        template: __webpack_require__(449),
        styles: ['./dialogproperty.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], DialogPropertyPopupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dialogproperty.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogpropertyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogpropertyModule = (function () {
    function DialogpropertyModule() {
    }
    return DialogpropertyModule;
}());
DialogpropertyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MaterialModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__["b" /* DialogPropertyComponent */], __WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__["a" /* DialogPropertyPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__["b" /* DialogPropertyComponent */], __WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__["a" /* DialogPropertyPopupComponent */]]
    })
], DialogpropertyModule);

//# sourceMappingURL=dialogproperty.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_task__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogTaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogTaskPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogTaskComponent = (function () {
    function DialogTaskComponent(dialog) {
        this.dialog = dialog;
    }
    DialogTaskComponent.prototype.openDialog = function (item) {
        console.log(this.item);
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DialogTaskPopupComponent, {
            height: '300px',
            width: '600px',
        });
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialogTaskComponent.prototype.ngOnInit = function () {
        console.log("init");
    };
    DialogTaskComponent.prototype.parseDate = function (date) {
        console.log(new Date(date));
        return new Date(date);
    };
    return DialogTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__entities_task__["a" /* Task */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__entities_task__["a" /* Task */]) === "function" && _a || Object)
], DialogTaskComponent.prototype, "item", void 0);
DialogTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-task',
        template: __webpack_require__(450),
        styles: ['./dialogtask.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DialogTaskComponent);

var DialogTaskPopupComponent = (function () {
    function DialogTaskPopupComponent(dialogRef, router, routerAct) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.enableButton = false;
        this.returnUrl = '/dutieslist/editTask';
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DialogTaskPopupComponent.prototype.ngOnInit = function () {
        console.log(this.item);
        this.name = this.item.name;
        this.remarks = this.item.remarks;
    };
    DialogTaskPopupComponent.prototype.saveTask = function () {
        console.log("saveTask");
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.dialogRef.close();
        this.router.navigate([this.returnUrl], navigationExtras);
        this.refresh();
    };
    DialogTaskPopupComponent.prototype.refresh = function () {
        window.location.reload();
    };
    DialogTaskPopupComponent.prototype.checkFields = function () {
        if (this.name != null && this.name != '' && this.remarks != null
            && this.remarks != '') {
            console.log("inside");
            this.enableButton = true;
        }
    };
    return DialogTaskPopupComponent;
}());
DialogTaskPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-taskpopup',
        template: __webpack_require__(451),
        styles: ['./dialogtask.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], DialogTaskPopupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dialogtask.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogtask_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogtaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogtaskModule = (function () {
    function DialogtaskModule() {
    }
    return DialogtaskModule;
}());
DialogtaskModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dialogtask_component__["b" /* DialogTaskComponent */], __WEBPACK_IMPORTED_MODULE_4__dialogtask_component__["a" /* DialogTaskPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__dialogtask_component__["b" /* DialogTaskComponent */], __WEBPACK_IMPORTED_MODULE_4__dialogtask_component__["a" /* DialogTaskPopupComponent */]]
    })
], DialogtaskModule);

//# sourceMappingURL=dialogtask.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DutiesComponent = (function () {
    function DutiesComponent(http) {
        this.http = http;
        this.showRemovedTask = false;
        this.showNewTask = false;
        this.showEditTask = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "name";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        console.log("constructor");
    }
    DutiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.checkSuccessMessages();
        this.http.get("assets/dataTask.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    };
    DutiesComponent.prototype.toInt = function (num) {
        return +num;
    };
    DutiesComponent.prototype.checkSuccessMessages = function () {
        console.log(this.newDuty);
        if (this.newDuty != null) {
            if (this.newDuty.toString() == 'deleteTask') {
                this.showRemovedTask = true;
            }
            if (this.newDuty.toString() == 'true') {
                this.showNewTask = true;
            }
            if (this.newDuty.toString() == 'editTask') {
                this.showEditTask = true;
            }
        }
    };
    return DutiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DutiesComponent.prototype, "newDuty", void 0);
DutiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-duties',
        template: __webpack_require__(454),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DutiesComponent);

var _a;
//# sourceMappingURL=duties.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutieslistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DutieslistComponent = (function () {
    function DutieslistComponent(router, routerNavigate) {
        var _this = this;
        this.router = router;
        this.routerNavigate = routerNavigate;
        this.returnUrl = '/dutieslist/savedTask';
        this.router.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DutieslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.newlyCreated = params['newDuty'];
        });
    };
    DutieslistComponent.prototype.refresh = function () {
        this.routerNavigate.navigate([this.returnUrl]);
    };
    return DutieslistComponent;
}());
DutieslistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dutieslist',
        template: __webpack_require__(455),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DutieslistComponent);

var _a, _b;
//# sourceMappingURL=dutieslist.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeelistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeelistComponent = (function () {
    function EmployeelistComponent(router, routerNavigate) {
        var _this = this;
        this.router = router;
        this.routerNavigate = routerNavigate;
        this.returnUrl = '/employeelist/savedTask';
        this.router.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    EmployeelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.newlyCreated = params['new'];
        });
    };
    return EmployeelistComponent;
}());
EmployeelistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employeelist',
        template: __webpack_require__(456),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EmployeelistComponent);

var _a, _b;
//# sourceMappingURL=employeelist.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = (function () {
    function EmployeesComponent(http, employeeService) {
        this.http = http;
        this.employeeService = employeeService;
        this.show = false;
        this.showSavedTask = false;
        this.showRemovedEmployee = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSuccessMessages();
        this.employeeService.fetchAllEmployees()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data;
            }, 1000);
        });
    };
    EmployeesComponent.prototype.toInt = function (num) {
        return +num;
    };
    EmployeesComponent.prototype.checkSuccessMessages = function () {
        if (this.new.toString() == 'true') {
            this.show = true;
        }
        if (this.new.toString() == 'savedTask') {
            this.show = false;
            this.showSavedTask = true;
        }
        if (this.new.toString() == 'deleteEmployee') {
            this.show = false;
            this.showSavedTask = false;
            this.showRemovedEmployee = true;
        }
    };
    return EmployeesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EmployeesComponent.prototype, "new", void 0);
EmployeesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(457),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */]) === "function" && _b || Object])
], EmployeesComponent);

var _a, _b;
//# sourceMappingURL=employees.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(router, routerNavigate, authenticationService, alertService) {
        this.router = router;
        this.routerNavigate = routerNavigate;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.navToTask = "/dutieslist/false";
        this.navToEmployee = "/employeelist/false";
        this.navToProperty = "/propertieslist/false";
        this.navToLogin = "/login";
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.navigateToTask = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("navigateToTask");
        this.routerNavigate.navigate([this.navToTask], navigationExtras);
    };
    MenuComponent.prototype.navigateToEmployee = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("navigateToTask");
        this.routerNavigate.navigate([this.navToEmployee], navigationExtras);
    };
    MenuComponent.prototype.navigateToProperty = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("navigateToTask");
        this.routerNavigate.navigate([this.navToProperty], navigationExtras);
    };
    MenuComponent.prototype.logout = function () {
        var _this = this;
        console.log("logout");
        this.authenticationService.logout(this.firstname, this.lastname)
            .subscribe(function (data) {
            _this.routerNavigate.navigate([_this.navToLogin]);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MenuComponent.prototype, "firstname", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MenuComponent.prototype, "lastname", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(459),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], MenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]]
    })
], MenuModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertiesComponent = (function () {
    function PropertiesComponent(http) {
        this.http = http;
        this.show = false;
        this.showproperty = false;
        this.showdeletedmessage = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "address";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    PropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSuccessMessages();
        this.http.get("assets/dataProperty.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    };
    PropertiesComponent.prototype.toInt = function (num) {
        return +num;
    };
    PropertiesComponent.prototype.checkSuccessMessages = function () {
        if (this.newproperty.toString() == 'savedEmployee') {
            this.show = true;
        }
        if (this.newproperty.toString() == 'true') {
            this.showproperty = true;
        }
        if (this.newproperty.toString() == 'deleteProperty') {
            this.showdeletedmessage = true;
        }
    };
    return PropertiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PropertiesComponent.prototype, "newproperty", void 0);
PropertiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-properties',
        template: __webpack_require__(460),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PropertiesComponent);

var _a;
//# sourceMappingURL=properties.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertylistComponent = (function () {
    function PropertylistComponent(router, routerNavigate) {
        var _this = this;
        this.router = router;
        this.routerNavigate = routerNavigate;
        this.returnUrl = '/propertylist/savedProperty';
        this.router.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    PropertylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.newlyCreated = params['newproperty'];
            console.log("newlyCreated" + _this.newlyCreated);
            //   this.refresh();
        });
    };
    PropertylistComponent.prototype.refresh = function () {
        this.routerNavigate.navigate([this.returnUrl]);
    };
    return PropertylistComponent;
}());
PropertylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-propertylist',
        template: __webpack_require__(461),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PropertylistComponent);

var _a, _b;
//# sourceMappingURL=propertylist.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.returnUrl = "/login";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__entities_user__["a" /* User */]();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.register(this.model)
            .subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "fromRegister": "yes"
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            console.log("Error");
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(462),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.logged = false;
    }
    EmployeeService.prototype.fetchAllEmployees = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080//employee/fetchAll', options)
            .map(function (response) {
            console.log(response.json().result);
            var res = response.json().result;
            return res;
        });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EmployeeService);

var _a;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getCurrentUser = function () {
        return 'glen';
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 321;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(350);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddemployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddemployeeComponent = (function () {
    function AddemployeeComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.returnUrl = "/addnewemployee";
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    AddemployeeComponent.prototype.ngOnInit = function () {
    };
    AddemployeeComponent.prototype.addEmployee = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    return AddemployeeComponent;
}());
AddemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addemployee',
        template: __webpack_require__(434),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddemployeeComponent);

var _a, _b;
//# sourceMappingURL=addemployee.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpropertyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddpropertyComponent = (function () {
    function AddpropertyComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.returnUrl = "/addnewproperty";
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    AddpropertyComponent.prototype.ngOnInit = function () {
    };
    AddpropertyComponent.prototype.addProperty = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    return AddpropertyComponent;
}());
AddpropertyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addproperty',
        template: __webpack_require__(437),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddpropertyComponent);

var _a, _b;
//# sourceMappingURL=addproperty.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpropertypage_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_module__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpropertypageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddpropertypageModule = (function () {
    function AddpropertypageModule() {
    }
    return AddpropertypageModule;
}());
AddpropertypageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_module__["a" /* MenuModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__addpropertypage_component__["a" /* AddpropertypageComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__addpropertypage_component__["a" /* AddpropertypageComponent */]]
    })
], AddpropertypageModule);

//# sourceMappingURL=addpropertypage.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddtaskComponent = (function () {
    function AddtaskComponent(router, routerAct) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.returnUrl = "/addnewptask";
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    AddtaskComponent.prototype.addEmployee = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
    };
    return AddtaskComponent;
}());
AddtaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addtask',
        template: __webpack_require__(439),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddtaskComponent);

var _a, _b;
//# sourceMappingURL=addtask.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(440),
        styles: [__webpack_require__(412)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employees_employees_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__employeelist_employeelist_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialoginformation_dialoginformation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialog_dialog_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dialoginformation_dialoginformation_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dropdownproperties_dropdownproperties_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dropdowntask_dropdowntask_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__addemployee_addemployee_module__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__addnewemployeepage_addnewemployeepage_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__properties_properties_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__propertylist_propertylist_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialogproperty_dialogproperty_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialogproperty_dialogproperty_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__addproperty_addproperty_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__menu_menu_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__deleteproperty_deleteproperty_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dutieslist_dutieslist_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__duties_duties_module__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__deletetask_deletetask_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__addtask_addtask_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__addnewtaskpage_addnewtaskpage_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dialogtask_dialogtask_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dialogtask_dialogtask_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_employee_employee_service__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__employeelist_employeelist_component__["a" /* EmployeelistComponent */],
            __WEBPACK_IMPORTED_MODULE_23__addnewemployeepage_addnewemployeepage_component__["a" /* AddnewemployeepageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__propertylist_propertylist_component__["a" /* PropertylistComponent */],
            __WEBPACK_IMPORTED_MODULE_31__dutieslist_dutieslist_component__["a" /* DutieslistComponent */],
            __WEBPACK_IMPORTED_MODULE_35__addnewtaskpage_addnewtaskpage_component__["a" /* AddnewtaskpageComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_14__employees_employees_module__["a" /* EmployeesModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_18__dialog_dialog_module__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_19__dialoginformation_dialoginformation_module__["a" /* DialoginformationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_20__dropdownproperties_dropdownproperties_module__["a" /* DropdownpropertiesModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_21__dropdowntask_dropdowntask_module__["a" /* DropdowntaskModule */],
            __WEBPACK_IMPORTED_MODULE_22__addemployee_addemployee_module__["a" /* AddemployeeModule */],
            __WEBPACK_IMPORTED_MODULE_24__properties_properties_module__["a" /* PropertiesModule */],
            __WEBPACK_IMPORTED_MODULE_26__dialogproperty_dialogproperty_module__["a" /* DialogpropertyModule */],
            __WEBPACK_IMPORTED_MODULE_28__addproperty_addproperty_module__["a" /* AddpropertyModule */],
            __WEBPACK_IMPORTED_MODULE_29__menu_menu_module__["a" /* MenuModule */],
            __WEBPACK_IMPORTED_MODULE_30__deleteproperty_deleteproperty_module__["a" /* DeletepropertyModule */],
            __WEBPACK_IMPORTED_MODULE_32__duties_duties_module__["a" /* DutiesModule */],
            __WEBPACK_IMPORTED_MODULE_33__deletetask_deletetask_module__["a" /* DeletetaskModule */],
            __WEBPACK_IMPORTED_MODULE_34__addtask_addtask_module__["a" /* AddtaskModule */],
            __WEBPACK_IMPORTED_MODULE_36__dialogtask_dialogtask_module__["a" /* DialogtaskModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_38__services_employee_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__["a" /* DialogPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dialoginformation_dialoginformation_component__["a" /* DialogInformationPopupComponent */], __WEBPACK_IMPORTED_MODULE_27__dialogproperty_dialogproperty_component__["a" /* DialogPropertyPopupComponent */], __WEBPACK_IMPORTED_MODULE_37__dialogtask_dialogtask_component__["a" /* DialogTaskPopupComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeelist_employeelist_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_employees_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addnewemployeepage_addnewemployeepage_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addpropertypage_addpropertypage_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dutieslist_dutieslist_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addnewtaskpage_addnewtaskpage_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__duties_duties_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertylist_propertylist_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authguard__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });














var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'addnewemployee', component: __WEBPACK_IMPORTED_MODULE_3__addnewemployeepage_addnewemployeepage_component__["a" /* AddnewemployeepageComponent */] },
    { path: 'addnewproperty', component: __WEBPACK_IMPORTED_MODULE_4__addpropertypage_addpropertypage_component__["a" /* AddpropertypageComponent */] },
    { path: 'addnewptask', component: __WEBPACK_IMPORTED_MODULE_6__addnewtaskpage_addnewtaskpage_component__["a" /* AddnewtaskpageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_1__employees_employees_component__["a" /* EmployeesComponent */] },
    { path: 'employeelist/:new', component: __WEBPACK_IMPORTED_MODULE_0__employeelist_employeelist_component__["a" /* EmployeelistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__authguard__["a" /* Authguard */]] },
    { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__["a" /* PropertiesComponent */] },
    { path: 'propertieslist/:newproperty', component: __WEBPACK_IMPORTED_MODULE_11__propertylist_propertylist_component__["a" /* PropertylistComponent */] },
    { path: 'dutieslist/:newDuty', component: __WEBPACK_IMPORTED_MODULE_5__dutieslist_dutieslist_component__["a" /* DutieslistComponent */] },
    { path: 'duties', component: __WEBPACK_IMPORTED_MODULE_9__duties_duties_component__["a" /* DutiesComponent */] }
];
var appRoutingProviders = [__WEBPACK_IMPORTED_MODULE_13__authguard__["a" /* Authguard */]
];
var routing = __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authguard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Authguard = (function () {
    function Authguard(router, authService, login) {
        this.router = router;
        this.authService = authService;
        this.login = login;
    }
    Authguard.prototype.canActivate = function () {
        return true;
    };
    return Authguard;
}());
Authguard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]) === "function" && _c || Object])
], Authguard);

var _a, _b, _c;
//# sourceMappingURL=authguard.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteemployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeleteemployeeComponent = (function () {
    function DeleteemployeeComponent(router) {
        this.router = router;
        this.returnUrl = '/employeelist/deleteEmployee';
    }
    DeleteemployeeComponent.prototype.ngOnInit = function () {
    };
    DeleteemployeeComponent.prototype.remove = function () {
        console.log("remove");
        this.router.navigate([this.returnUrl]);
        this.refresh();
    };
    DeleteemployeeComponent.prototype.refresh = function () {
        window.location.reload();
    };
    return DeleteemployeeComponent;
}());
DeleteemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteemployee',
        template: __webpack_require__(441),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], DeleteemployeeComponent);

var _a;
//# sourceMappingURL=deleteemployee.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletepropertyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeletepropertyComponent = (function () {
    function DeletepropertyComponent(router) {
        this.router = router;
        this.returnUrl = '/propertieslist/deleteProperty';
    }
    DeletepropertyComponent.prototype.ngOnInit = function () {
    };
    DeletepropertyComponent.prototype.remove = function () {
        console.log("remove");
        this.router.navigate([this.returnUrl]);
        this.refresh();
    };
    DeletepropertyComponent.prototype.refresh = function () {
        window.location.reload();
    };
    return DeletepropertyComponent;
}());
DeletepropertyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteproperty',
        template: __webpack_require__(442),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], DeletepropertyComponent);

var _a;
//# sourceMappingURL=deleteproperty.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletetaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeletetaskComponent = (function () {
    function DeletetaskComponent(router) {
        this.router = router;
        this.returnUrl = '/dutieslist/deleteTask';
    }
    DeletetaskComponent.prototype.ngOnInit = function () {
    };
    DeletetaskComponent.prototype.remove = function () {
        console.log("remove");
        this.router.navigate([this.returnUrl]);
        this.refresh();
    };
    DeletetaskComponent.prototype.refresh = function () {
        window.location.reload();
    };
    return DeletetaskComponent;
}());
DeletetaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deletetask',
        template: __webpack_require__(443),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], DeletetaskComponent);

var _a;
//# sourceMappingURL=deletetask.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownpropertiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownpropertiesComponent = (function () {
    function DropdownpropertiesComponent() {
        this.model = {};
        this.drinksRequired = true;
        this.pokemonRequired = false;
        this.drinksDisabled = false;
        this.pokemonDisabled = false;
        this.showSelect = false;
        this.floatPlaceholder = 'auto';
        this.foodControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('pizza-1');
        this.drinksTheme = 'primary';
        this.pokemonTheme = 'primary';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino' },
            { value: 'water-2', viewValue: 'Water' },
            { value: 'pepper-3', viewValue: 'Dr. Pepper' },
            { value: 'coffee-4', viewValue: 'Coffee' },
            { value: 'tea-5', viewValue: 'Tea' },
            { value: 'juice-6', viewValue: 'Orange juice' },
            { value: 'wine-7', viewValue: 'Wine' },
            { value: 'milk-8', viewValue: 'Milk' },
        ];
        this.pokemon = [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'charizard-1', viewValue: 'Charizard' },
            { value: 'squirtle-2', viewValue: 'Squirtle' },
            { value: 'pikachu-3', viewValue: 'Pikachu' },
            { value: 'eevee-4', viewValue: 'Eevee' },
            { value: 'ditto-5', viewValue: 'Ditto' },
            { value: 'psyduck-6', viewValue: 'Psyduck' },
        ];
        this.availableThemes = [
            { value: 'primary', name: 'Primary' },
            { value: 'accent', name: 'Accent' },
            { value: 'warn', name: 'Warn' }
        ];
    }
    DropdownpropertiesComponent.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    DropdownpropertiesComponent.prototype.setPokemonValue = function () {
        this.currentPokemon = ['eevee-4', 'psyduck-6'];
    };
    return DropdownpropertiesComponent;
}());
DropdownpropertiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select-dropdown',
        template: __webpack_require__(452),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [])
], DropdownpropertiesComponent);

//# sourceMappingURL=dropdownproperties.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdowntaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdowntaskComponent = (function () {
    function DropdowntaskComponent() {
        this.drinksRequired = false;
        this.pokemonRequired = false;
        this.foodsRequired = true;
        this.drinksDisabled = false;
        this.foodsDisabled = false;
        this.pokemonDisabled = false;
        this.showSelect = false;
        this.floatPlaceholder = 'auto';
        this.foodControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('pizza-1');
        this.drinksTheme = 'primary';
        this.pokemonTheme = 'primary';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino' },
            { value: 'water-2', viewValue: 'Water' },
            { value: 'pepper-3', viewValue: 'Dr. Pepper' },
            { value: 'coffee-4', viewValue: 'Coffee' },
            { value: 'tea-5', viewValue: 'Tea' },
            { value: 'juice-6', viewValue: 'Orange juice' },
            { value: 'wine-7', viewValue: 'Wine' },
            { value: 'milk-8', viewValue: 'Milk' },
        ];
        this.pokemon = [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'charizard-1', viewValue: 'Charizard' },
            { value: 'squirtle-2', viewValue: 'Squirtle' },
            { value: 'pikachu-3', viewValue: 'Pikachu' },
            { value: 'eevee-4', viewValue: 'Eevee' },
            { value: 'ditto-5', viewValue: 'Ditto' },
            { value: 'psyduck-6', viewValue: 'Psyduck' },
        ];
        this.availableThemes = [
            { value: 'primary', name: 'Primary' },
            { value: 'accent', name: 'Accent' },
            { value: 'warn', name: 'Warn' }
        ];
    }
    DropdowntaskComponent.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    DropdowntaskComponent.prototype.setPokemonValue = function () {
        this.currentPokemon = ['eevee-4', 'psyduck-6'];
    };
    DropdowntaskComponent.prototype.ngOnInit = function () {
    };
    return DropdowntaskComponent;
}());
DropdowntaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select-dropdowntask',
        template: __webpack_require__(453),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [])
], DropdowntaskComponent);

//# sourceMappingURL=dropdowntask.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__duties_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__deletetask_deletetask_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addemployee_addemployee_module__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addtask_addtask_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialogtask_dialogtask_module__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DutiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DutiesModule = (function () {
    function DutiesModule() {
    }
    return DutiesModule;
}());
DutiesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_9__deletetask_deletetask_module__["a" /* DeletetaskModule */],
            __WEBPACK_IMPORTED_MODULE_10__addemployee_addemployee_module__["a" /* AddemployeeModule */],
            __WEBPACK_IMPORTED_MODULE_11__addtask_addtask_module__["a" /* AddtaskModule */],
            __WEBPACK_IMPORTED_MODULE_12__dialogtask_dialogtask_module__["a" /* DialogtaskModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__duties_component__["a" /* DutiesComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_8__duties_component__["a" /* DutiesComponent */]]
    })
], DutiesModule);

//# sourceMappingURL=duties.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_filter_pipe__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialoginformation_dialoginformation_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__deleteemployee_deleteemployee_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addemployee_addemployee_module__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EmployeesModule = (function () {
    function EmployeesModule() {
    }
    return EmployeesModule;
}());
EmployeesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__dialoginformation_dialoginformation_module__["a" /* DialoginformationModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_10__deleteemployee_deleteemployee_module__["a" /* DeleteemployeeModule */],
            __WEBPACK_IMPORTED_MODULE_11__addemployee_addemployee_module__["a" /* AddemployeeModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__employees_component__["a" /* EmployeesComponent */], __WEBPACK_IMPORTED_MODULE_8__data_filter_pipe__["a" /* DataFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__employees_component__["a" /* EmployeesComponent */]]
    })
], EmployeesModule);

//# sourceMappingURL=employees.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweet__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(userService) {
        this.userService = userService;
        this.tweets = [
            new __WEBPACK_IMPORTED_MODULE_2__tweet__["a" /* Tweet */]('Antonio Body', 'antonio', new Date(), ['Firoz'], ['Firoz', 'Jose', 'Rosa']),
            new __WEBPACK_IMPORTED_MODULE_2__tweet__["a" /* Tweet */]('Firoz Body', 'firoz', new Date(), ['Antonio'], ['Antonio', 'Juanma', 'Roberto']),
            new __WEBPACK_IMPORTED_MODULE_2__tweet__["a" /* Tweet */]('Glen Body', 'glen', new Date(), ['Javier'], ['Jesus', 'Margarita', 'Ramesh'])
        ];
        this.tweetText = '';
    }
    FeedService.prototype.getCurrentFeed = function () {
        return this.tweets;
    };
    FeedService.prototype.isUserInCollection = function (collection, userId) {
        return collection.indexOf(userId) != -1;
    };
    FeedService.prototype.OnFavorite = function (tweet) {
        if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
            tweet.favorites.push(this.userService.getCurrentUser());
        }
    };
    FeedService.prototype.OnRetweet = function (tweet) {
        if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
            tweet.retweets.push(this.userService.getCurrentUser());
        }
    };
    FeedService.prototype.OnNewTweet = function (tweetText) {
        this.tweets.unshift(new __WEBPACK_IMPORTED_MODULE_2__tweet__["a" /* Tweet */](tweetText, this.userService.getCurrentUser(), new Date(), [], []));
        this.tweetText = '';
    };
    return FeedService;
}());
FeedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deleteemployee_deleteemployee_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogproperty_dialogproperty_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addproperty_addproperty_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addpropertypage_addpropertypage_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteproperty_deleteproperty_module__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PropertiesModule = (function () {
    function PropertiesModule() {
    }
    return PropertiesModule;
}());
PropertiesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__deleteemployee_deleteemployee_module__["a" /* DeleteemployeeModule */],
            __WEBPACK_IMPORTED_MODULE_9__dialogproperty_dialogproperty_module__["a" /* DialogpropertyModule */],
            __WEBPACK_IMPORTED_MODULE_10__addproperty_addproperty_module__["a" /* AddpropertyModule */],
            __WEBPACK_IMPORTED_MODULE_11__addpropertypage_addpropertypage_module__["a" /* AddpropertypageModule */],
            __WEBPACK_IMPORTED_MODULE_12__deleteproperty_deleteproperty_module__["a" /* DeletepropertyModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__properties_component__["a" /* PropertiesComponent */], __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__["a" /* DataFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__properties_component__["a" /* PropertiesComponent */]]
    })
], PropertiesModule);

//# sourceMappingURL=properties.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tweet; });
var Tweet = (function () {
    function Tweet(body, author, date, retweets, favorites) {
        this.body = body;
        this.author = author;
        this.date = date;
        this.retweets = retweets;
        this.favorites = favorites;
        this.avatar = author + ".jpg";
    }
    Tweet.prototype.hasFavorited = function (userId) {
        return this.favorites.indexOf(userId) != -1;
    };
    Tweet.prototype.hasRetweeted = function (userId) {
        return this.retweets.indexOf(userId) != -1;
    };
    return Tweet;
}());

//# sourceMappingURL=tweet.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.logged = false;
    }
    AuthenticationService.prototype.login = function (model) {
        var body = JSON.stringify({ username: model.username, password: model.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/user/authenticate', body, options)
            .map(function (response) {
            console.log(response.json().result);
            var res = response.json().result;
            return res;
        });
    };
    AuthenticationService.prototype.register = function (model) {
        var body = JSON.stringify(model);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/user/register', body, options)
            .map(function (response) {
            console.log(response.json().result);
            var res = response.json().result;
            return res;
        });
    };
    AuthenticationService.prototype.logout = function (firstname, lastname) {
        var body = JSON.stringify({ firstname: firstname, lastname: lastname });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/user/logout', body, options)
            .map(function (response) {
            console.log(response.json().result);
            var res = response.json().result;
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".demo-basic {\r\n  padding: 0;\r\n}\r\n.demo-basic .mat-card-content {\r\n  padding: 16px;\r\n}\r\n.demo-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.demo-card {\r\n  margin: 16px;\r\n}\r\n\r\n.demo-textarea {\r\n  resize: none;\r\n  border: none;\r\n  overflow: auto;\r\n  padding: 0;\r\n  background: lightblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".demo-basic {\r\n  padding: 0;\r\n}\r\n.demo-basic .mat-card-content {\r\n  padding: 16px;\r\n}\r\n.demo-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.demo-card {\r\n  margin: 16px;\r\n}\r\n\r\n.demo-textarea {\r\n  resize: none;\r\n  border: none;\r\n  overflow: auto;\r\n  padding: 0;\r\n  background: lightblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".select {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  width: 220px;\r\n\r\n  \r\n}\r\n\r\n.dropdown{\r\n  width: 220px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".select {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  width: 220px;\r\n\r\n  \r\n}\r\n\r\n.dropdown{\r\n  width: 220px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/* Master Styles */\r\n.example-tooltip-host {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 50px;\r\n}\r\n\r\n.example-select {\r\n  margin: 0 10px;\r\n}\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\n\r\n/* Navigation link styles */\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/* items class */\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".active{\r\n    background-color: #f5f5f5;\r\n    color: #204d74;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "\r\n.height{\r\n    height: 100%;\r\n}\r\n\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 147,
	"./af.js": 147,
	"./ar": 154,
	"./ar-dz": 148,
	"./ar-dz.js": 148,
	"./ar-kw": 149,
	"./ar-kw.js": 149,
	"./ar-ly": 150,
	"./ar-ly.js": 150,
	"./ar-ma": 151,
	"./ar-ma.js": 151,
	"./ar-sa": 152,
	"./ar-sa.js": 152,
	"./ar-tn": 153,
	"./ar-tn.js": 153,
	"./ar.js": 154,
	"./az": 155,
	"./az.js": 155,
	"./be": 156,
	"./be.js": 156,
	"./bg": 157,
	"./bg.js": 157,
	"./bn": 158,
	"./bn.js": 158,
	"./bo": 159,
	"./bo.js": 159,
	"./br": 160,
	"./br.js": 160,
	"./bs": 161,
	"./bs.js": 161,
	"./ca": 162,
	"./ca.js": 162,
	"./cs": 163,
	"./cs.js": 163,
	"./cv": 164,
	"./cv.js": 164,
	"./cy": 165,
	"./cy.js": 165,
	"./da": 166,
	"./da.js": 166,
	"./de": 169,
	"./de-at": 167,
	"./de-at.js": 167,
	"./de-ch": 168,
	"./de-ch.js": 168,
	"./de.js": 169,
	"./dv": 170,
	"./dv.js": 170,
	"./el": 171,
	"./el.js": 171,
	"./en-au": 172,
	"./en-au.js": 172,
	"./en-ca": 173,
	"./en-ca.js": 173,
	"./en-gb": 174,
	"./en-gb.js": 174,
	"./en-ie": 175,
	"./en-ie.js": 175,
	"./en-nz": 176,
	"./en-nz.js": 176,
	"./eo": 177,
	"./eo.js": 177,
	"./es": 179,
	"./es-do": 178,
	"./es-do.js": 178,
	"./es.js": 179,
	"./et": 180,
	"./et.js": 180,
	"./eu": 181,
	"./eu.js": 181,
	"./fa": 182,
	"./fa.js": 182,
	"./fi": 183,
	"./fi.js": 183,
	"./fo": 184,
	"./fo.js": 184,
	"./fr": 187,
	"./fr-ca": 185,
	"./fr-ca.js": 185,
	"./fr-ch": 186,
	"./fr-ch.js": 186,
	"./fr.js": 187,
	"./fy": 188,
	"./fy.js": 188,
	"./gd": 189,
	"./gd.js": 189,
	"./gl": 190,
	"./gl.js": 190,
	"./gom-latn": 191,
	"./gom-latn.js": 191,
	"./he": 192,
	"./he.js": 192,
	"./hi": 193,
	"./hi.js": 193,
	"./hr": 194,
	"./hr.js": 194,
	"./hu": 195,
	"./hu.js": 195,
	"./hy-am": 196,
	"./hy-am.js": 196,
	"./id": 197,
	"./id.js": 197,
	"./is": 198,
	"./is.js": 198,
	"./it": 199,
	"./it.js": 199,
	"./ja": 200,
	"./ja.js": 200,
	"./jv": 201,
	"./jv.js": 201,
	"./ka": 202,
	"./ka.js": 202,
	"./kk": 203,
	"./kk.js": 203,
	"./km": 204,
	"./km.js": 204,
	"./kn": 205,
	"./kn.js": 205,
	"./ko": 206,
	"./ko.js": 206,
	"./ky": 207,
	"./ky.js": 207,
	"./lb": 208,
	"./lb.js": 208,
	"./lo": 209,
	"./lo.js": 209,
	"./lt": 210,
	"./lt.js": 210,
	"./lv": 211,
	"./lv.js": 211,
	"./me": 212,
	"./me.js": 212,
	"./mi": 213,
	"./mi.js": 213,
	"./mk": 214,
	"./mk.js": 214,
	"./ml": 215,
	"./ml.js": 215,
	"./mr": 216,
	"./mr.js": 216,
	"./ms": 218,
	"./ms-my": 217,
	"./ms-my.js": 217,
	"./ms.js": 218,
	"./my": 219,
	"./my.js": 219,
	"./nb": 220,
	"./nb.js": 220,
	"./ne": 221,
	"./ne.js": 221,
	"./nl": 223,
	"./nl-be": 222,
	"./nl-be.js": 222,
	"./nl.js": 223,
	"./nn": 224,
	"./nn.js": 224,
	"./pa-in": 225,
	"./pa-in.js": 225,
	"./pl": 226,
	"./pl.js": 226,
	"./pt": 228,
	"./pt-br": 227,
	"./pt-br.js": 227,
	"./pt.js": 228,
	"./ro": 229,
	"./ro.js": 229,
	"./ru": 230,
	"./ru.js": 230,
	"./sd": 231,
	"./sd.js": 231,
	"./se": 232,
	"./se.js": 232,
	"./si": 233,
	"./si.js": 233,
	"./sk": 234,
	"./sk.js": 234,
	"./sl": 235,
	"./sl.js": 235,
	"./sq": 236,
	"./sq.js": 236,
	"./sr": 238,
	"./sr-cyrl": 237,
	"./sr-cyrl.js": 237,
	"./sr.js": 238,
	"./ss": 239,
	"./ss.js": 239,
	"./sv": 240,
	"./sv.js": 240,
	"./sw": 241,
	"./sw.js": 241,
	"./ta": 242,
	"./ta.js": 242,
	"./te": 243,
	"./te.js": 243,
	"./tet": 244,
	"./tet.js": 244,
	"./th": 245,
	"./th.js": 245,
	"./tl-ph": 246,
	"./tl-ph.js": 246,
	"./tlh": 247,
	"./tlh.js": 247,
	"./tr": 248,
	"./tr.js": 248,
	"./tzl": 249,
	"./tzl.js": 249,
	"./tzm": 251,
	"./tzm-latn": 250,
	"./tzm-latn.js": 250,
	"./tzm.js": 251,
	"./uk": 252,
	"./uk.js": 252,
	"./ur": 253,
	"./ur.js": 253,
	"./uz": 255,
	"./uz-latn": 254,
	"./uz-latn.js": 254,
	"./uz.js": 255,
	"./vi": 256,
	"./vi.js": 256,
	"./x-pseudo": 257,
	"./x-pseudo.js": 257,
	"./yo": 258,
	"./yo.js": 258,
	"./zh-cn": 259,
	"./zh-cn.js": 259,
	"./zh-hk": 260,
	"./zh-hk.js": 260,
	"./zh-tw": 261,
	"./zh-tw.js": 261
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 426;


/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\" (click)=\"addEmployee()\" mdTooltip=\"Add a new employee \"><img src=\"/assets/addemployee.jpg\"/></button>\r\n\r\n\r\n"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"userFirstname\" [lastname]=\"userLastname\"></app-menu>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n  <md-toolbar style=\"color:#204d74\">Add new Employee</md-toolbar>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n      <md-input-container class=\"demo-full-width\">\r\n        <input mdInput placeholder=\"Company\" disabled value=\"Golden Real Estate\">\r\n      </md-input-container>\r\n\r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"First Name\" placeholder=\"First Name\"\r\n          [(ngModel)]=\"firstName\" required  (keyup)=\"checkFiledsRequired()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n          <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Last Name\" placeholder=\"Last Name\"\r\n                 [(ngModel)]=\"lastName\" required (keyup)=\"checkFiledsRequired()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container class=\"demo-full-width\">\r\n        <input mdInput placeholder=\"Email\"  [(ngModel)]=\"email\" [formControl]=\"emailFormControl\" (keyup)=\"checkFiledsRequired()\">\r\n        <md-error *ngIf=\"emailFormControl.hasError('required')\">\r\n          This field is required\r\n        </md-error>\r\n        <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\r\n          Please enter a valid email address\r\n        </md-error>\r\n      </md-input-container>\r\n        </td>\r\n        <td>\r\n          <md-input-container class=\"demo-full-width\" >\r\n            <input mdInput #postalCode maxLength=\"12\" [(ngModel)]=\"telephone\" placeholder=\"Telephone Number\"\r\n                   pattern=\"[0-9]{12}\" [formControl]=\"telephoneFormControl\" (keyup)=\"checkFiledsRequired()\">\r\n            <md-hint align=\"end\">\r\n              <md-icon>mode_edit</md-icon>\r\n              <span aria-live=\"polite\">{{postalCode.value.length}} / 12</span>\r\n            </md-hint>\r\n             <md-error *ngIf=\"telephoneFormControl.hasError('required')\">\r\n               This field is required\r\n             </md-error>\r\n              <md-error *ngIf=\"telephoneFormControl.hasError('pattern')\">\r\n                Please enter a valid telephone number. Example 971501555151\r\n        </md-error>\r\n          </md-input-container>\r\n        </td>\r\n         <td>\r\n          <md-input-container class=\"demo-full-width\">\r\n            <input mdInput placeholder=\"Age\" [formControl]=\"ageFormControl\" [(ngModel)]=\"age\" minlength=\"1\" maxlength=\"3\" (keyup)=\"checkFiledsRequired()\">\r\n             <md-error *ngIf=\"ageFormControl.hasError('required')\" >\r\n          This field is required\r\n             </md-error>\r\n              <md-error *ngIf=\"ageFormControl.hasError('pattern')\">\r\n                Please enter a valid age\r\n            </md-error>\r\n          </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n      <p>    \r\n          <md-input-container class=\"demo-full-width\">\r\n           <textarea mdInput name=\"Address\" placeholder=\"Address\"\r\n                     [(ngModel)]=\"address\" ></textarea>\r\n          </md-input-container>\r\n          </p>\r\n\r\n       <p>    \r\n          <md-input-container class=\"demo-full-width\">\r\n           <textarea mdInput name=\"Remarks\" placeholder=\"Remarks\"\r\n                     [(ngModel)]=\"remarks\" ></textarea>\r\n          </md-input-container>\r\n          </p>\r\n\r\n          <p>\r\n         <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveEmployee()\">Save</button></td>\r\n           <td><button md-raised-button  (click)=\"cancelNavigation()\" >Cancel</button></td>\r\n         </md-dialog-actions>\r\n         </p>\r\n    </form>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"userFirstname\" [lastname]=\"userLastname\" ></app-menu>\n<br>\n<br>\n<br>\n<br>\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n  <md-toolbar style=\"color:#204d74\">Add new Task</md-toolbar>\n  <br>\n  <br>\n  <br>\n  <md-card-content>\n    <form #loginForm=\"ngForm\" >\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container style=\"width: 100%\">\n          <input mdInput name=\"Name\" placeholder=\"Name\"\n          [(ngModel)]=\"task.name\" required  (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n          </md-input-container>\n        </td>\n       <td>\n          <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"Remarks\" placeholder=\"Remarks\"\n                 [(ngModel)]=\"task.remarks\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n        </td>\n      </tr></table>\n        <p>\n         <md-dialog-actions align=\"end\" >\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveTask()\">Save</button></td>\n           <td><button md-raised-button  (click)=\"cancelNavigation()\" >Cancel</button></td>\n         </md-dialog-actions>\n         </p>\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\" (click)=\"addProperty()\"  mdTooltip=\"Add a new property \"><img src=\"/assets/home.jpg\"/></button>"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<app-menu  [firstname]=\"userFirstname\" [lastname]=\"userLastname\" ></app-menu>\n<br>\n<br>\n<br>\n<br>\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n  <md-toolbar style=\"color:#204d74\">Add new Property</md-toolbar>\n  <br>\n  <br>\n  <br>\n  <md-card-content>\n    <form #loginForm=\"ngForm\" >\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container style=\"width: 100%\">\n          <input mdInput name=\"Name\" placeholder=\"Name\"\n          [(ngModel)]=\"property.name\" required  (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n          </md-input-container>\n        </td>\n       <td>\n          <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"City\" placeholder=\"City\"\n                 [(ngModel)]=\"property.city\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n        </td>\n      </tr></table>\n       <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n         </tr>\n         <td>\n            <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"Address\" placeholder=\"Address\"\n                 [(ngModel)]=\"property.address\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n         </td>\n       </table>\n        <p>\n         <md-dialog-actions align=\"end\" >\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveProperty()\">Save</button></td>\n           <td><button md-raised-button   (click)=\"cancelNavigation()\" >Cancel</button></td>\n         </md-dialog-actions>\n         </p>\n    </form>\n  </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\"  (click)=\"addEmployee()\" mdTooltip=\"Add a new task \"><img src=\"/assets/wrench.jpg\"/></button>\n\n\n"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "   \r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\" md-button (click)=\"remove(item)\"  mdTooltip=\"Delete\" ><img src=\"/assets/trash.jpg\"/></button>\r\n\r\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\" md-button (click)=\"remove(item)\"  mdTooltip=\"Delete\" ><img src=\"/assets/trash.jpg\"/></button>\n\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\" md-button (click)=\"remove(item)\"  mdTooltip=\"Delete Task\" ><img src=\"/assets/trash.jpg\"/></button>\n\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Assign new Task\" >\r\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = " \r\n \r\n <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  \r\n <br>\r\n  <br>\r\n<table class=\"example-full-width\" cellspacing=\"0\" id=\"table\">\r\n  <br>\r\n  <br>\r\n  <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n    <tr>\r\n         <td style=\"width:280px\">\r\n             <select-dropdown></select-dropdown>\r\n       </td>\r\n      <td>\r\n             <select-dropdowntask></select-dropdowntask>\r\n             \r\n        </td>\r\n  </tr>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n  <tr>\r\n    <td>  <md-input-container>\r\n            <input required=\"true\" mdInput [mdDatepicker]=\"pickerFrom\" placeholder=\"From\"  id=\"dateFrom\" [(ngModel)]=\"item.task.dateFrom\" >\r\n            <button mdSuffix [mdDatepickerToggle]=\"pickerFrom\" (click)=\"checkFields()\" ></button>\r\n              <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n          <md-datepicker required=\"true\" #pickerFrom></md-datepicker></td>\r\n     <td>  <md-input-container>\r\n            <input required=\"true\" mdInput [mdDatepicker]=\"pickerTo\" placeholder=\"To\" [(ngModel)]=\"item.task.dateTo\" [min]=\"item.task.dateFrom\">\r\n            <button mdSuffix [mdDatepickerToggle]=\"pickerTo\" (click)=\"checkFields()\" ></button>\r\n              <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n          <md-datepicker required=\"true\" #pickerTo></md-datepicker></td>\r\n    \r\n  </tr>\r\n<br>\r\n<br>\r\n  <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n<br>\r\n<br>\r\n  <br>\r\n  <tr class=\"example-full-width\" >\r\n      <td>\r\n      \r\n     <md-input-container style=\"width:300px\">\r\n      <textarea mdInput #postalCode maxlength=\"200\" class=\"example-full-width\"  (keyup)=\"checkFields()\" required=\"true\" mdInput [(ngModel)]=\"item.task[0].remarks\" placeholder=\"Remarks\"></textarea>\r\n       <md-hint align=\"end\">{{postalCode.value.length}} / 200</md-hint>\r\n         <md-error>This field is required</md-error>\r\n    </md-input-container>\r\n      </td>\r\n  </tr>\r\n\r\n    <br>\r\n    <br>\r\n       <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr> \r\n   \r\n      <tr>\r\n          <td></td>\r\n        <td>\r\n        <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveTask()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n       </td>\r\n      </tr>\r\n\r\n\r\n   </table>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = " \r\n <div *ngIf=\"disabled\" mdTooltip=\"First you need to assign a task to the employee\">\r\n    <button class=\"btn btn-defaul\" [disabled]=\"disabled\" md-button (click)=\"openDialog(item)\" class=\"example-tooltip-hos\"><img src=\"/assets/information.jpg\"/></button>\r\n</div>\r\n\r\n <div *ngIf=\"!disabled\" mdTooltip=\"Information about the employee\">\r\n    <button class=\"btn btn-defaul\" [disabled]=\"disabled\" md-button (click)=\"openDialog(item)\"  class=\"example-tooltip-hos\"><img src=\"/assets/information.jpg\"/></button>\r\n</div>\r\n"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "  <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n    \r\n   <br>   \r\n <md-card class=\"example-card\" mdTooltip=\"Task assigned to {{item.name}}\">\r\n\r\n <img style=\"height:100px;width:100px\"id=\"ground\" src={{item.image}}>\r\n <br>\r\n\r\n\r\n  <md-card-content>\r\n\r\n<br>\r\n<img src=\"./assets/calendartask.jpg\"><strong>&nbsp;&nbsp;</strong>From   {{item.task[0].dateFrom}} To {{item.task[0].dateTo}}\r\n<br>\r\n<br>\r\n<img src=\"./assets/property.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.property[0].name}} Located in  {{item.property[0].address}}\r\n<br>\r\n<br>\r\n<img src=\"./assets/wrench.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.task[0].name}}<br>\r\n<br>\r\n   <img src=\"./assets/email.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.email}}\r\n<br>\r\n<br>\r\n   <img src=\"./assets/cellphone.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.age}}\r\n<br>\r\n<br>\r\n <img src=\"./assets/eye.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.task[0].remarks}}<br>\r\n<br>\r\n\r\n\r\n  \r\n\r\n  </md-card-content>\r\n  <md-card-actions align=\"end\">\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Close</button></td>\r\n  </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Edit property\" >\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\n</div>\n\n\n"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = " <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  <br>\r\n\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n     \r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"Name\" placeholder=\"Name\"\r\n          [(ngModel)]=\"name\" required  (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n         <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"City\" placeholder=\"City\"\r\n                 [(ngModel)]=\"city\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n    <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <tr>\r\n            <td>\r\n            <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Adress\" placeholder=\"Adress\"\r\n                 [(ngModel)]=\"address\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        \r\n            </td>\r\n        </tr>\r\n        </table>\r\n\r\n     \r\n\r\n    </form>\r\n    <br>\r\n    <br>\r\n     <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveProperty()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n  </md-card-content>\r\n\r\n   "

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Edit task\" >\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\n</div>\n\n\n"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = " <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  <br>\r\n\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n     \r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"Name\" placeholder=\"Name\"\r\n          [(ngModel)]=\"name\" required  (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n         <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Remarks\" placeholder=\"Remarks\"\r\n                 [(ngModel)]=\"remarks\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n   \r\n    </form>\r\n    <br>\r\n    <br>\r\n     <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveTask()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n  </md-card-content>\r\n\r\n   "

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"select\">\r\n  \r\n    <md-select class=\"dropdown\" mdInput placeholder=\"Select Property\" [color]=\"drinksTheme\" [(ngModel)]=\"currentDrink\" [required]=\"drinksRequired\" [disabled]=\"drinksDisabled\"\r\n      [floatPlaceholder]=\"floatPlaceholder\" #drinkControl=\"ngModel\">\r\n      <md-option *ngFor=\"let drink of drinks\" [value]=\"drink.value\" [disabled]=\"drink.disabled\">\r\n        {{ drink.viewValue }}\r\n      </md-option>\r\n    </md-select>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"select\">\r\n    <md-select class=\"dropdown\" mdInput placeholder=\"Select Task\" [color]=\"drinksTheme\" [(ngModel)]=\"currentFood\" [required]=\"foodsRequired\" [disabled]=\"foodsDisabled\"\r\n      [floatPlaceholder]=\"floatPlaceholder\" #foodControl=\"ngModel\">\r\n      <md-option *ngFor=\"let food of foods\" [value]=\"food.value\" [disabled]=\"food.disabled\">\r\n        {{ food.viewValue }}\r\n      </md-option>\r\n    </md-select>\r\n\r\n \r\n</div>"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n\n       <app-addtask></app-addtask>\n\n     \n     \n         <div  *ngIf=\"showRemovedTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA task has been removed\n    \t</div>\n\n          <div  *ngIf=\"showNewTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA new task has been created\n    \t</div>\n\n        <div  *ngIf=\"showEditTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA task has been modified\n    \t</div>\n\n\n        \n\n\n        \n\n\n        <div class=\"row\">\n            <h2 class=\"col-xs-6\"></h2>\n            \n            <div class=\"col-xs-2\">\n                \n                <label class=\"label-control\" style=\"color:#204d74\" >Rows on page</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                    <option [ngValue]=\"5\">5</option>\n                    <option [ngValue]=\"10\">10</option>\n                    <option [ngValue]=\"15\">15</option>\n                </select>\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"row\">\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\n                            <option ngValue=\"name\">Name</option>\n                            <option ngValue=\"remarks\">remarks</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\n                            <option ngValue=\"asc\">Ascending</option>\n                            <option ngValue=\"desc\">Descending</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Task information</div>\n\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n                <thead>\n                <tr>\n                    <th style=\"width: 10%\"></th>\n                    <th style=\"width: 30%\">\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n                    </th>\n                    <th style=\"width: 50%\">\n                        <mfDefaultSorter by=\"remarks\">remarks</mfDefaultSorter>\n                    </th>\n                  \n                    <th style=\"width: 20%\">\n                      \n                    </th>\n                  \n                </tr>\n                <tr>\n                    <th colspan=\"5\">\n                        Filter by name:\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\n                    </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of mf.data\">\n                    <td>\n                     <app-deletetask></app-deletetask> \n                    </td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.remarks}}</td>\n                    <td><dialog-task [item]=\"item\"></dialog-task></td>\n\n\n                </tr>\n                </tbody>\n                <tfoot>\n                <tr>\n                    <td colspan=\"5\">\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n                    </td>\n                </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\"></app-menu>\n<app-duties [newDuty]=\"newlyCreated\"></app-duties>"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\"></app-menu>\r\n<app-employees [new]=\"newlyCreated\"></app-employees>"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n\r\n       <app-addemployee></app-addemployee>\r\n\r\n        <div  *ngIf=\"show\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new employee has been created\r\n    \t</div>\r\n\r\n        <div  *ngIf=\"showSavedTask\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new task has been associated to the employee\r\n    \t</div>\r\n\r\n         <div  *ngIf=\"showRemovedEmployee\" class=\"alert alert-success\">\r\n    \t\t\t\t\tAn employee has been removed\r\n    \t</div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <h2 class=\"col-xs-6\"></h2>\r\n            \r\n            <div class=\"col-xs-2\">\r\n                \r\n                <label class=\"label-control\" style=\"color:#204d74\">Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                            <option ngValue=\"name\">Name</option>\r\n                            <option ngValue=\"email\">Email</option>\r\n                            <option ngValue=\"telephone\">Telephone</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                            <option ngValue=\"asc\">Ascending</option>\r\n                            <option ngValue=\"desc\">Descending</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Employee information</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 10%\"></th>\r\n                    <th style=\"width: 20%\">\r\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 40%\">\r\n                        <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 10%\">\r\n                        <mfDefaultSorter by=\"telephone\">Telephone</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      \r\n                    </th>\r\n                     <th style=\"width: 10%\">\r\n                      \r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <td>\r\n                     <app-deleteemployee></app-deleteemployee> \r\n                    </td>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.email}}</td>\r\n                    <td >{{item.telephone}}</td>\r\n                    <td><app-dialog [item]=\"item\"></app-dialog></td>\r\n\r\n                    <td>\r\n                        <app-dialoginformation [disabled]=\"item.task[0] == null\" [item]=\"item\"></app-dialoginformation>\r\n                    <td>\r\n\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"height:100%\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n\r\n<div class=\"main-login col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n\r\n\t <div  *ngIf=\"showInvalidUser\" class=\"alert alert-danger\">\r\n    \t\t\t\t\tUsername and/or Password not found <br>\r\n\t\t\t\t\t\tPlease try again\r\n    \t</div>\r\n\r\n\t <div  *ngIf=\"showUserRegistered\" class=\"alert alert-success\">\r\n    \t\t\t\t\tNew user successfully registered\r\n    \t</div>\r\n\r\n\t\r\n\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n       \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">UserName</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" \r\n\t\t\t\t\t\t\t\t  name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"4\" />   \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t <div *ngIf=\"username.errors && (username.dirty || username.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!username.errors.required\">\r\n      \t\t\t\t\tUserName is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!username.errors.minlength\">\r\n    \t\t\t\t  UserName must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\r\n\t\t</div>\r\n\r\n        \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t   <input type=\"password\" \r\n\t\t\t\t\t\t\t\t\t   class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t <div *ngIf=\"password.errors && (password.dirty || password.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!password.errors.required\">\r\n      \t\t\t\t\tPassword is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!password.errors.minlength\">\r\n    \t\t\t\t  Password must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n        <div class=\"form-group\">\r\n        <!--  <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>-->\r\n\t\t\t <button [disabled]=\"!loginForm.form.valid\" md-raised-button color=\"accent\" >Login</button>\r\n\t\t\t <button md-raised-button  [routerLink]=\"['/register']\" >Register</button>\r\n        \r\n        </div>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary pointing menu active\">\r\n  <a class=\"item\"(click)=\"navigateToEmployee()\" routerLinkActive=\"active\">\r\n    Employees \r\n  </a>\r\n  <a class=\"item\" (click)=\"navigateToProperty()\"   routerLinkActive=\"active\">\r\n    Properties \r\n  </a>\r\n  <a class=\"item\" (click)=\"navigateToTask()\" routerLinkActive=\"active\" >\r\n     Tasks\r\n  </a>\r\n  <div class=\"right menu\">\r\n    <a class=\"ui item\" routerLinkActive=\"active\">\r\n     {{firstname}} {{lastname}}\r\n    </a>\r\n    <a class=\"ui item\" (click)=\"logout()\" routerLinkActive=\"active\">\r\n      Logout\r\n    </a>\r\n     \r\n  </div>\r\n</div>"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n\r\n\r\n      <app-addproperty></app-addproperty>\r\n        \r\n        <div  *ngIf=\"show\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA property has been modified\r\n    \t</div>\r\n\r\n        <div  *ngIf=\"showproperty\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new property has been created\r\n    \t</div>\r\n\r\n          <div  *ngIf=\"showdeletedmessage\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA property has been removed\r\n    \t</div>\r\n        \r\n\r\n\r\n        <div class=\"row\">\r\n            <h2 class=\"col-xs-6\"></h2>\r\n            \r\n            <div class=\"col-xs-2\">\r\n                \r\n                <label class=\"label-control\" style=\"color:#204d74\" >Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                            <option ngValue=\"name\">Name</option>\r\n                            <option ngValue=\"address\">Address</option>\r\n                            <option ngValue=\"city\">City</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                            <option ngValue=\"asc\">Ascending</option>\r\n                            <option ngValue=\"desc\">Descending</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Property information</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 10%\"></th>\r\n                    <th style=\"width: 20%\">\r\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 40%\">\r\n                        <mfDefaultSorter by=\"address\">Address</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 10%\">\r\n                        <mfDefaultSorter by=\"city\">City</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      \r\n                    </th>\r\n                     <th style=\"width: 10%\">\r\n                      \r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <td>\r\n                       <app-deleteproperty></app-deleteproperty> \r\n                    </td>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.address}}</td>\r\n                    <td >{{item.city}}</td>\r\n                    <td><dialog-property [item]=\"item\"></dialog-property></td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\" ></app-menu>\n<app-properties [newproperty]=\"newlyCreated\"></app-properties>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron height\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n<div class=\"main-login col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\" >\r\n        <div class=\"form-group\">\r\n\t\t\t\t <label for=\"firstName\">First Name</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t   <input type=\"text\" class=\"form-control\" name=\"firstname\"  [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"firstname.errors && (firstname.dirty || firstname.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!firstname.errors.required\">\r\n      \t\t\t\t\tFirst Name is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!firstname.errors.minlength\">\r\n    \t\t\t\t  First Name must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n\t\t</div>\r\n\r\n         <div class=\"form-group\">\r\n\t\t\t\t  <label for=\"lastName\">Last Name</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" name=\"lastname\"   [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required minlength=\"4\"  />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div *ngIf=\"lastname.errors && (lastname.dirty || lastname.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!lastname.errors.required\">\r\n      \t\t\t\t\tLast Name is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!lastname.errors.minlength\">\r\n    \t\t\t\t  Last Name must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\r\n\t\t</div>\r\n\r\n\r\n         <div class=\"form-group\">\r\n\t\t\t     <label for=\"username\">Username</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t       <input type=\"text\" class=\"form-control\" name=\"username\"   [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"4\"   />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"username.errors && (username.dirty || username.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!username.errors.required\">\r\n      \t\t\t\t\tUsername is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!username.errors.minlength\">\r\n    \t\t\t\t  Username must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n        <div class=\"form-group\">\r\n\t\t\t\t\t\t  <label for=\"password\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t  <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"model.password\"  #password=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"password.errors && (password.dirty || password.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!password.errors.required\">\r\n      \t\t\t\t\tPassword is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!password.errors.minlength\">\r\n    \t\t\t\t  Password must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n       \r\n        <div class=\"form-group\">\r\n            <!--<button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>-->\r\n\t\t\t <button [disabled]=\"!registerForm.form.valid\" md-raised-button color=\"accent\" >Register</button>\r\n        \t <button  md-raised-button [routerLink]=\"['/login']\" >Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addemployee_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddemployeeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddemployeeModule = (function () {
    function AddemployeeModule() {
    }
    return AddemployeeModule;
}());
AddemployeeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__addemployee_component__["a" /* AddemployeeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__addemployee_component__["a" /* AddemployeeComponent */]]
    })
], AddemployeeModule);

//# sourceMappingURL=addemployee.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DialogModule = (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
DialogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__["a" /* DropdownpropertiesModule */],
            __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__["a" /* DropdowntaskModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__["DpDatePickerModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dialog_component__["b" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_2__dialog_component__["a" /* DialogPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dialog_component__["b" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_2__dialog_component__["a" /* DialogPopupComponent */]]
    })
], DialogModule);

//# sourceMappingURL=dialog.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdownproperties_component__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownpropertiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DropdownpropertiesModule = (function () {
    function DropdownpropertiesModule() {
    }
    return DropdownpropertiesModule;
}());
DropdownpropertiesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dropdownproperties_component__["a" /* DropdownpropertiesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__dropdownproperties_component__["a" /* DropdownpropertiesComponent */]]
    })
], DropdownpropertiesModule);

//# sourceMappingURL=dropdownproperties.module.js.map

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(322);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdowntask_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdowntaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DropdowntaskModule = (function () {
    function DropdowntaskModule() {
    }
    return DropdowntaskModule;
}());
DropdowntaskModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dropdowntask_component__["a" /* DropdowntaskComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__dropdowntask_component__["a" /* DropdowntaskComponent */]]
    })
], DropdowntaskModule);

//# sourceMappingURL=dropdowntask.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
var Property = (function () {
    function Property() {
    }
    return Property;
}());

//# sourceMappingURL=property.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(id, name, dateFrom, dateTo, remarks) {
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_user__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, actRoute) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.actRoute = actRoute;
        this.loading = false;
        this.showInvalidUser = false;
        this.showUserRegistered = false;
        this.logged = false;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.fromRegister = params["fromRegister"];
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_4__entities_user__["a" /* User */]();
        // get return url from route parameters or default to '/'
        this.returnUrl = '/employeelist/false';
        if (this.fromRegister == "yes") {
            this.showUserRegistered = true;
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.showUserRegistered = false;
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            _this.firstname = data.firstname;
            _this.lastname = data.lastname;
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.firstname,
                    "lastname": _this.lastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.showInvalidUser = true;
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        template: __webpack_require__(458),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ })

},[715]);
//# sourceMappingURL=main.bundle.js.map