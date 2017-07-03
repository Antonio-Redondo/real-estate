webpackJsonp([0,4],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_employee_employee_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(20);
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
    function AddnewemployeepageComponent(router, routerAct, empployeeService, alertService) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.empployeeService = empployeeService;
        this.alertService = alertService;
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
        var _this = this;
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
        console.log("this.employee" + this.employee);
        this.empployeeService.saveEmployee(this.employee).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.userFirstname,
                    "lastname": _this.userLastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
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
        template: __webpack_require__(440),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_employee_employee_service__["a" /* EmployeeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], AddnewemployeepageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addnewemployeepage.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_task__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(20);
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
    function AddnewtaskpageComponent(router, routerAct, taskService, alertService) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.taskService = taskService;
        this.alertService = alertService;
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
        var _this = this;
        console.log(this.task);
        var navigationExtras = {
            queryParams: {
                "firstname": this.userFirstname,
                "lastname": this.userLastname
            }
        };
        this.router.navigate([this.returnUrl], navigationExtras);
        this.taskService.saveTask(this.task).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.userFirstname,
                    "lastname": _this.userLastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
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
        template: __webpack_require__(441),
        styles: [__webpack_require__(412)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], AddnewtaskpageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addnewtaskpage.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addproperty_component__ = __webpack_require__(337);
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

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_property__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(20);
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
    function AddpropertypageComponent(router, routerAct, propertyService, alertService) {
        var _this = this;
        this.router = router;
        this.routerAct = routerAct;
        this.propertyService = propertyService;
        this.alertService = alertService;
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
        var _this = this;
        this.propertyService.saveProperty(this.property).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.userFirstname,
                    "lastname": _this.userLastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
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
        template: __webpack_require__(443),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], AddpropertypageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addpropertypage.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addtask_component__ = __webpack_require__(339);
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteemployeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteEmployeePopupComponent; });
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
    function DeleteemployeeComponent(dialog) {
        this.dialog = dialog;
    }
    DeleteemployeeComponent.prototype.ngOnInit = function () {
    };
    DeleteemployeeComponent.prototype.openDialog = function (id, name) {
        console.log("name" + name);
        this.name = name;
        var config = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
            height: '200px',
            width: '880px',
        });
        dialogRef.componentInstance.name = this.name;
        dialogRef.componentInstance.id = this.id;
        console.log(dialogRef.componentInstance.name);
    };
    return DeleteemployeeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DeleteemployeeComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeleteemployeeComponent.prototype, "name", void 0);
DeleteemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteemployee',
        template: __webpack_require__(446),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdDialog */]) === "function" && _a || Object])
], DeleteemployeeComponent);

var DeleteEmployeePopupComponent = (function () {
    function DeleteEmployeePopupComponent(dialogRef, employeeService, router, routerAct, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.employeeService = employeeService;
        this.router = router;
        this.routerAct = routerAct;
        this.alertService = alertService;
        this.returnUrl = '/employeelist/deleteEmployee';
        this.enableButton = false;
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DeleteEmployeePopupComponent.prototype.ngOnInit = function () {
        this.remarks = "";
    };
    DeleteEmployeePopupComponent.prototype.remove = function () {
        var _this = this;
        console.log("removeid" + this.id);
        console.log("remove");
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.employeeService.deleteEmployee(this.id).subscribe(function (data) {
        }, function (error) {
            _this.alertService.error(error);
        });
        this.router.navigateByUrl('/propertieslist/false', true);
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    return DeleteEmployeePopupComponent;
}());
DeleteEmployeePopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteemployee-popup',
        template: __webpack_require__(447),
        styles: ['./deleteemployee.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _f || Object])
], DeleteEmployeePopupComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=deleteemployee.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__ = __webpack_require__(117);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["b" /* DeleteemployeeComponent */], __WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["a" /* DeleteEmployeePopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["b" /* DeleteemployeeComponent */], __WEBPACK_IMPORTED_MODULE_4__deleteemployee_component__["a" /* DeleteEmployeePopupComponent */]]
    })
], DeleteemployeeModule);

//# sourceMappingURL=deleteemployee.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__ = __webpack_require__(74);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["b" /* DeletepropertyComponent */], __WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["a" /* DeletePropertyPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["b" /* DeletepropertyComponent */], __WEBPACK_IMPORTED_MODULE_4__deleteproperty_component__["a" /* DeletePropertyPopupComponent */]]
    })
], DeletepropertyModule);

//# sourceMappingURL=deleteproperty.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deletetask_component__ = __webpack_require__(75);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_4__deletetask_component__["b" /* DeletetaskComponent */], __WEBPACK_IMPORTED_MODULE_4__deletetask_component__["a" /* DeleteTaskPopupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__deletetask_component__["b" /* DeletetaskComponent */], __WEBPACK_IMPORTED_MODULE_4__deletetask_component__["a" /* DeleteTaskPopupComponent */]]
    })
], DeletetaskModule);

//# sourceMappingURL=deletetask.module.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_task__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_property__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_employee_employee_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__(20);
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
        if (this.item.taskDTO.dateFrom != undefined) {
            console.log("this.dateFrom" + this.item.taskDTO.dateFrom);
        }
        if (this.item.taskDTO.dateTo != undefined) {
            console.log(" this.dateTo" + this.item.taskDTO.dateTo);
        }
        if (this.item.taskDTO == null) {
            console.log("yes");
            var task = [];
            task.push(new __WEBPACK_IMPORTED_MODULE_3__entities_task__["a" /* Task */](null, "", new Date, new Date, ""));
        }
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DialogPopupComponent, {
            height: '650px',
            width: '600px',
        });
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialogComponent.prototype.ngOnInit = function () {
        console.log("init");
        if (this.item.propertyDTO == null) {
            this.item.propertyDTO = new __WEBPACK_IMPORTED_MODULE_4__entities_property__["a" /* Property */];
        }
        if (this.item.taskDTO == null) {
            this.item.taskDTO = new __WEBPACK_IMPORTED_MODULE_3__entities_task__["a" /* Task */](null, "", new Date, new Date, "");
        }
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
        template: __webpack_require__(452),
        styles: ['./dialog.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], DialogComponent);

var DialogPopupComponent = (function () {
    function DialogPopupComponent(dialogRef, router, routerAct, commonService, employeeService, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.commonService = commonService;
        this.employeeService = employeeService;
        this.alertService = alertService;
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
        var _this = this;
        this.subscription = this.commonService.notifyObservable$.subscribe(function (res) {
            if (res.idPropertySelected != null) {
                _this.idProperty = res.idPropertySelected;
                console.log(_this.idProperty);
            }
            if (res.idTaskSelected != null) {
                _this.idTask = res.idTaskSelected;
                console.log(_this.idTask);
            }
        });
    };
    DialogPopupComponent.prototype.saveTask = function () {
        var _this = this;
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("save task");
        this.buildEmployee();
        this.dialogRef.close();
        this.router.navigateByUrl('/propertieslist/false', true);
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    DialogPopupComponent.prototype.checkFields = function () {
        console.log(this.item.taskDTO.remarks);
        if (this.item.taskDTO.dateFrom != null && this.item.taskDTO.dateTo != null && this.item.taskDTO.remarks != null) {
            this.enableButton = true;
        }
    };
    DialogPopupComponent.prototype.minDate = function () {
        /* this.minimumDate = this.item.taskDTO.dateFrom.toString().split('-');
          this.year =+this.minimumDate[0];
          this.month =+this.minimumDate[1];
          this.day=+this.minimumDate[2];

            console.log(this.year);
            console.log(this.month);
            console.log(this.day);

          this.minimum = new Date(this.year,this.month,this.day);

          return this.minimum;*/
    };
    DialogPopupComponent.prototype.buildEmployee = function () {
        var _this = this;
        if (this.idTask == undefined) {
            this.item.taskId = this.item.taskDTO.id;
        }
        else {
            this.item.taskId = this.idTask;
        }
        if (this.idProperty == undefined) {
            this.item.propertyId = this.item.propertyDTO.id;
        }
        else {
            this.item.propertyId = this.idProperty;
        }
        this.employeeService.updateEmployee(this.item).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.firstname,
                    "lastname": _this.lastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ;
    return DialogPopupComponent;
}());
DialogPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-popup',
        template: __webpack_require__(453),
        styles: ['./dialog.popup.component.css'],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_common_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_common_common_service__["a" /* CommonService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_employee_employee_service__["a" /* EmployeeService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */]) === "function" && _j || Object])
], DialogPopupComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_employee__ = __webpack_require__(79);
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
            height: '550px',
            width: '600px',
        });
        dialogRef.componentInstance.item = this.item;
        console.log(dialogRef.componentInstance.item);
    };
    DialoginformationComponent.prototype.ngOnInit = function () {
        if (this.item.propertyId == 0) {
            this.disabled = true;
        }
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
        template: __webpack_require__(454),
        styles: [__webpack_require__(420)]
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
        template: __webpack_require__(455),
        styles: ['./dialoginformation.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object])
], DialogInformationPopupComponent);

var _a, _b, _c;
//# sourceMappingURL=dialoginformation.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialoginformation_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__ = __webpack_require__(274);
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_property__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(20);
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
            height: '340px',
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
        template: __webpack_require__(456),
        styles: ['./dialogproperty.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DialogPropertyComponent);

var DialogPropertyPopupComponent = (function () {
    function DialogPropertyPopupComponent(dialogRef, router, routerAct, propertyService, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.propertyService = propertyService;
        this.alertService = alertService;
        this.enableButton = false;
        this.returnUrl = '/propertieslist/savedProperty';
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
        var _this = this;
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        console.log("saveProperty");
        this.updateProperty();
        this.router.navigateByUrl('/employeelist/false', true);
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    DialogPropertyPopupComponent.prototype.checkFields = function () {
        if (this.name != null && this.name != '' && this.city != null
            && this.city != '' && this.address != null && this.address != '') {
            console.log("inside");
            this.enableButton = true;
        }
    };
    DialogPropertyPopupComponent.prototype.updateProperty = function () {
        var _this = this;
        this.propertyService.updateProperty(this.item).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.firstname,
                    "lastname": _this.lastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    return DialogPropertyPopupComponent;
}());
DialogPropertyPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-propertypopup',
        template: __webpack_require__(457),
        styles: ['./dialogproperty.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _g || Object])
], DialogPropertyPopupComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dialogproperty.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogproperty_component__ = __webpack_require__(124);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_task__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__(20);
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
        template: __webpack_require__(458),
        styles: ['./dialogtask.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DialogTaskComponent);

var DialogTaskPopupComponent = (function () {
    function DialogTaskPopupComponent(dialogRef, router, routerAct, taskService, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.router = router;
        this.routerAct = routerAct;
        this.taskService = taskService;
        this.alertService = alertService;
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
        var _this = this;
        console.log("saveTask");
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.updateTask();
        this.router.navigateByUrl('/employeelist/false', true);
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    DialogTaskPopupComponent.prototype.checkFields = function () {
        if (this.name != null && this.name != '' && this.remarks != null
            && this.remarks != '') {
            console.log("inside");
            this.enableButton = true;
        }
    };
    DialogTaskPopupComponent.prototype.updateTask = function () {
        var _this = this;
        this.taskService.updateTask(this.item).subscribe(function (data) {
            var navigationExtras = {
                queryParams: {
                    "firstname": _this.firstname,
                    "lastname": _this.lastname
                }
            };
            _this.router.navigate([_this.returnUrl], navigationExtras);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    return DialogTaskPopupComponent;
}());
DialogTaskPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dialog-taskpopup',
        template: __webpack_require__(459),
        styles: ['./dialogtask.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _g || Object])
], DialogTaskPopupComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dialogtask.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogtask_component__ = __webpack_require__(126);
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DummyComponent = (function () {
    function DummyComponent() {
    }
    DummyComponent.prototype.ngOnInit = function () {
    };
    return DummyComponent;
}());
DummyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dummy',
        template: __webpack_require__(462),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [])
], DummyComponent);

//# sourceMappingURL=dummy.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_task_task_service__ = __webpack_require__(38);
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
    function DutiesComponent(http, taskService, router) {
        this.http = http;
        this.taskService = taskService;
        this.router = router;
        this.showRemovedTask = false;
        this.showNewTask = false;
        this.showEditTask = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "createdAt";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        var currentUrl = this.router.url;
        console.log("currentUrl" + currentUrl);
        // var refreshUrl = currentUrl.indexOf('dutieslist/:newDuty') > -1 ? '/dutieslist/:newDuty' : '/someRoute';
        this.router.navigateByUrl(currentUrl);
    }
    DutiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSuccessMessages();
        this.taskService.fetchAllTasks()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data;
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
        template: __webpack_require__(463),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_task_task_service__["a" /* TaskService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DutiesComponent);

var _a, _b, _c;
//# sourceMappingURL=duties.component.js.map

/***/ }),

/***/ 130:
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
        template: __webpack_require__(464),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], DutieslistComponent);

var _a, _b;
//# sourceMappingURL=dutieslist.component.js.map

/***/ }),

/***/ 131:
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
        template: __webpack_require__(465),
        styles: [__webpack_require__(426)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EmployeelistComponent);

var _a, _b;
//# sourceMappingURL=employeelist.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__ = __webpack_require__(41);
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
        this.sortBy = "createdAt";
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
        template: __webpack_require__(466),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_employee_employee_service__["a" /* EmployeeService */]) === "function" && _b || Object])
], EmployeesComponent);

var _a, _b;
//# sourceMappingURL=employees.component.js.map

/***/ }),

/***/ 133:
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

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(20);
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
        template: __webpack_require__(468),
        styles: [__webpack_require__(428)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], MenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
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

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_property_property_service__ = __webpack_require__(37);
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
    function PropertiesComponent(http, propertyService) {
        this.http = http;
        this.propertyService = propertyService;
        this.show = false;
        this.showproperty = false;
        this.showdeletedmessage = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "createdAt";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    PropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSuccessMessages();
        this.propertyService.fetchAllProperties()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data;
            }, 1000);
        });
    };
    PropertiesComponent.prototype.toInt = function (num) {
        return +num;
    };
    PropertiesComponent.prototype.checkSuccessMessages = function () {
        console.log("newproperty" + this.newproperty);
        if (this.newproperty.toString() == 'savedProperty') {
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
        template: __webpack_require__(469),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_property_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_property_property_service__["a" /* PropertyService */]) === "function" && _b || Object])
], PropertiesComponent);

var _a, _b;
//# sourceMappingURL=properties.component.js.map

/***/ }),

/***/ 137:
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
        template: __webpack_require__(470),
        styles: [__webpack_require__(429)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PropertylistComponent);

var _a, _b;
//# sourceMappingURL=propertylist.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_user__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(40);
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
        this.showUserIstaken = false;
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
            _this.showUserIstaken = true;
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
        template: __webpack_require__(471),
        styles: [__webpack_require__(430)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 139:
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

/***/ 20:
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

/***/ 328:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 328;


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(354);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 336:
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
        template: __webpack_require__(439),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddemployeeComponent);

var _a, _b;
//# sourceMappingURL=addemployee.component.js.map

/***/ }),

/***/ 337:
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
        template: __webpack_require__(442),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddpropertyComponent);

var _a, _b;
//# sourceMappingURL=addproperty.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpropertypage_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_module__ = __webpack_require__(135);
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

/***/ 339:
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
        template: __webpack_require__(444),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], AddtaskComponent);

var _a, _b;
//# sourceMappingURL=addtask.component.js.map

/***/ }),

/***/ 340:
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
        template: __webpack_require__(445),
        styles: [__webpack_require__(416)],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employees_employees_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__employeelist_employeelist_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialoginformation_dialoginformation_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dialog_dialog_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dialoginformation_dialoginformation_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dropdownproperties_dropdownproperties_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dropdowntask_dropdowntask_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__addemployee_addemployee_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__addnewemployeepage_addnewemployeepage_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__properties_properties_module__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__propertylist_propertylist_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialogproperty_dialogproperty_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialogproperty_dialogproperty_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__addproperty_addproperty_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__menu_menu_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__deleteproperty_deleteproperty_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__dutieslist_dutieslist_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__duties_duties_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__deletetask_deletetask_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__addtask_addtask_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__addnewtaskpage_addnewtaskpage_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dialogtask_dialogtask_module__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dialogtask_dialogtask_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_employee_employee_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_property_property_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_task_task_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_common_common_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__deleteemployee_deleteemployee_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__deleteproperty_deleteproperty_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__deletetask_deletetask_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__dummy_dummy_component__ = __webpack_require__(128);
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
            __WEBPACK_IMPORTED_MODULE_45__dummy_dummy_component__["a" /* DummyComponent */],
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
            __WEBPACK_IMPORTED_MODULE_39__services_property_property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_40__services_task_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_41__services_common_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__["a" /* DialogPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dialoginformation_dialoginformation_component__["a" /* DialogInformationPopupComponent */], __WEBPACK_IMPORTED_MODULE_27__dialogproperty_dialogproperty_component__["a" /* DialogPropertyPopupComponent */], __WEBPACK_IMPORTED_MODULE_37__dialogtask_dialogtask_component__["a" /* DialogTaskPopupComponent */], __WEBPACK_IMPORTED_MODULE_42__deleteemployee_deleteemployee_component__["a" /* DeleteEmployeePopupComponent */], __WEBPACK_IMPORTED_MODULE_43__deleteproperty_deleteproperty_component__["a" /* DeletePropertyPopupComponent */], __WEBPACK_IMPORTED_MODULE_44__deletetask_deletetask_component__["a" /* DeleteTaskPopupComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employeelist_employeelist_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_employees_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addnewemployeepage_addnewemployeepage_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addpropertypage_addpropertypage_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dutieslist_dutieslist_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addnewtaskpage_addnewtaskpage_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__duties_duties_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertylist_propertylist_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dummy_dummy_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authguard__ = __webpack_require__(343);
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
    { path: 'employeelist/:new', component: __WEBPACK_IMPORTED_MODULE_0__employeelist_employeelist_component__["a" /* EmployeelistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__authguard__["a" /* Authguard */]] },
    { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__["a" /* PropertiesComponent */] },
    { path: 'propertieslist/:newproperty', component: __WEBPACK_IMPORTED_MODULE_11__propertylist_propertylist_component__["a" /* PropertylistComponent */] },
    { path: 'dutieslist/:newDuty', component: __WEBPACK_IMPORTED_MODULE_5__dutieslist_dutieslist_component__["a" /* DutieslistComponent */] },
    { path: 'duties', component: __WEBPACK_IMPORTED_MODULE_9__duties_duties_component__["a" /* DutiesComponent */] },
    { path: 'dummyComponent', component: __WEBPACK_IMPORTED_MODULE_12__dummy_dummy_component__["a" /* DummyComponent */] }
];
var appRoutingProviders = [__WEBPACK_IMPORTED_MODULE_14__authguard__["a" /* Authguard */]
];
var routing = __WEBPACK_IMPORTED_MODULE_13__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(40);
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_property_property_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__ = __webpack_require__(58);
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
    function DropdownpropertiesComponent(propertyService, commonService) {
        this.propertyService = propertyService;
        this.commonService = commonService;
    }
    DropdownpropertiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.propertyService.fetchAllProperties()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data;
            }, 1000);
        });
        this.currentProperty = this.idProperty;
    };
    DropdownpropertiesComponent.prototype.selectedValue = function () {
        console.log("this.properlySelected" + this.currentProperty);
        this.commonService.notifyOther({ idPropertySelected: this.currentProperty });
    };
    return DropdownpropertiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DropdownpropertiesComponent.prototype, "idProperty", void 0);
DropdownpropertiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select-dropdown',
        template: __webpack_require__(460),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_property_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_property_property_service__["a" /* PropertyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], DropdownpropertiesComponent);

var _a, _b;
//# sourceMappingURL=dropdownproperties.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_task_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__ = __webpack_require__(58);
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
    function DropdowntaskComponent(taskService, commonService) {
        this.taskService = taskService;
        this.commonService = commonService;
    }
    DropdowntaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.fetchAllTasks()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data;
            }, 1000);
        });
        this.currentTask = this.idTask;
    };
    DropdowntaskComponent.prototype.selectedValue = function () {
        console.log("this.currentTask" + this.currentTask);
        this.commonService.notifyOther({ idTaskSelected: this.currentTask });
    };
    return DropdowntaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DropdowntaskComponent.prototype, "idTask", void 0);
DropdowntaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'select-dropdowntask',
        template: __webpack_require__(461),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_task_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_common_common_service__["a" /* CommonService */]) === "function" && _b || Object])
], DropdowntaskComponent);

var _a, _b;
//# sourceMappingURL=dropdowntask.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(48);
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
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1; });
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__duties_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__deletetask_deletetask_module__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addemployee_addemployee_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addtask_addtask_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialogtask_dialogtask_module__ = __webpack_require__(127);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(48);
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_dialog_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_filter_pipe__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialoginformation_dialoginformation_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__deleteemployee_deleteemployee_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addemployee_addemployee_module__ = __webpack_require__(73);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweet__ = __webpack_require__(353);
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(48);
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
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1; });
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

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_filter_pipe__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deleteemployee_deleteemployee_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogproperty_dialogproperty_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addproperty_addproperty_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addpropertypage_addpropertypage_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__deleteproperty_deleteproperty_module__ = __webpack_require__(119);
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

/***/ 353:
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

/***/ 354:
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyService = (function () {
    function PropertyService(http) {
        this.http = http;
        this.logged = false;
    }
    PropertyService.prototype.fetchAllProperties = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/property/fetchAll', options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    PropertyService.prototype.updateProperty = function (property) {
        console.log("property" + property.id);
        var params = JSON.stringify(property);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/property/updateProperty', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    PropertyService.prototype.saveProperty = function (property) {
        console.log("property" + property.id);
        var params = JSON.stringify(property);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/property/saveProperty', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    PropertyService.prototype.deleteProperty = function (id) {
        console.log("property" + id);
        var params = JSON.stringify(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/property/deleteProperty', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    return PropertyService;
}());
PropertyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PropertyService);

var _a;
//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.logged = false;
    }
    TaskService.prototype.fetchAllTasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/task/fetchAll', options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    TaskService.prototype.updateTask = function (task) {
        console.log("property" + task.id);
        var params = JSON.stringify(task);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/task/updateTask', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    TaskService.prototype.saveTask = function (task) {
        console.log("property" + task.id);
        var params = JSON.stringify(task);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/task/saveTask', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    TaskService.prototype.deleteTask = function (id) {
        console.log("task" + id);
        var params = JSON.stringify(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/task/deleteTask', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    return TaskService;
}());
TaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TaskService);

var _a;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
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
        return this.http.post('http://localhost:8080/employee/fetchAll', options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        console.log("employee" + employee.id);
        var params = JSON.stringify(employee);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/employee/updateEmployee', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        console.log("employee" + employee.id);
        var params = JSON.stringify(employee);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/employee/saveEmployee', params, options)
            .map(function (response) {
            var res = response.json().result;
            return res;
        });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        console.log("employee" + id);
        var params = JSON.stringify(id);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/employee/deleteEmployee', params, options)
            .map(function (response) {
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

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".demo-basic {\r\n  padding: 0;\r\n}\r\n.demo-basic .mat-card-content {\r\n  padding: 16px;\r\n}\r\n.demo-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.demo-card {\r\n  margin: 16px;\r\n}\r\n\r\n.demo-textarea {\r\n  resize: none;\r\n  border: none;\r\n  overflow: auto;\r\n  padding: 0;\r\n  background: lightblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".demo-basic {\r\n  padding: 0;\r\n}\r\n.demo-basic .mat-card-content {\r\n  padding: 16px;\r\n}\r\n.demo-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.demo-card {\r\n  margin: 16px;\r\n}\r\n\r\n.demo-textarea {\r\n  resize: none;\r\n  border: none;\r\n  overflow: auto;\r\n  padding: 0;\r\n  background: lightblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".select {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  width: 220px;\r\n\r\n  \r\n}\r\n\r\n.dropdown{\r\n  width: 220px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".select {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  width: 220px;\r\n\r\n  \r\n}\r\n\r\n.dropdown{\r\n  width: 220px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Master Styles */\r\n.example-tooltip-host {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 50px;\r\n}\r\n\r\n.example-select {\r\n  margin: 0 10px;\r\n}\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #444;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\n\r\n/* Navigation link styles */\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/* items class */\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.items li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".active{\r\n    background-color: #f5f5f5;\r\n    color: #204d74;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\r\n.height{\r\n    height: 100%;\r\n}\r\n\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 10px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 154,
	"./af.js": 154,
	"./ar": 161,
	"./ar-dz": 155,
	"./ar-dz.js": 155,
	"./ar-kw": 156,
	"./ar-kw.js": 156,
	"./ar-ly": 157,
	"./ar-ly.js": 157,
	"./ar-ma": 158,
	"./ar-ma.js": 158,
	"./ar-sa": 159,
	"./ar-sa.js": 159,
	"./ar-tn": 160,
	"./ar-tn.js": 160,
	"./ar.js": 161,
	"./az": 162,
	"./az.js": 162,
	"./be": 163,
	"./be.js": 163,
	"./bg": 164,
	"./bg.js": 164,
	"./bn": 165,
	"./bn.js": 165,
	"./bo": 166,
	"./bo.js": 166,
	"./br": 167,
	"./br.js": 167,
	"./bs": 168,
	"./bs.js": 168,
	"./ca": 169,
	"./ca.js": 169,
	"./cs": 170,
	"./cs.js": 170,
	"./cv": 171,
	"./cv.js": 171,
	"./cy": 172,
	"./cy.js": 172,
	"./da": 173,
	"./da.js": 173,
	"./de": 176,
	"./de-at": 174,
	"./de-at.js": 174,
	"./de-ch": 175,
	"./de-ch.js": 175,
	"./de.js": 176,
	"./dv": 177,
	"./dv.js": 177,
	"./el": 178,
	"./el.js": 178,
	"./en-au": 179,
	"./en-au.js": 179,
	"./en-ca": 180,
	"./en-ca.js": 180,
	"./en-gb": 181,
	"./en-gb.js": 181,
	"./en-ie": 182,
	"./en-ie.js": 182,
	"./en-nz": 183,
	"./en-nz.js": 183,
	"./eo": 184,
	"./eo.js": 184,
	"./es": 186,
	"./es-do": 185,
	"./es-do.js": 185,
	"./es.js": 186,
	"./et": 187,
	"./et.js": 187,
	"./eu": 188,
	"./eu.js": 188,
	"./fa": 189,
	"./fa.js": 189,
	"./fi": 190,
	"./fi.js": 190,
	"./fo": 191,
	"./fo.js": 191,
	"./fr": 194,
	"./fr-ca": 192,
	"./fr-ca.js": 192,
	"./fr-ch": 193,
	"./fr-ch.js": 193,
	"./fr.js": 194,
	"./fy": 195,
	"./fy.js": 195,
	"./gd": 196,
	"./gd.js": 196,
	"./gl": 197,
	"./gl.js": 197,
	"./gom-latn": 198,
	"./gom-latn.js": 198,
	"./he": 199,
	"./he.js": 199,
	"./hi": 200,
	"./hi.js": 200,
	"./hr": 201,
	"./hr.js": 201,
	"./hu": 202,
	"./hu.js": 202,
	"./hy-am": 203,
	"./hy-am.js": 203,
	"./id": 204,
	"./id.js": 204,
	"./is": 205,
	"./is.js": 205,
	"./it": 206,
	"./it.js": 206,
	"./ja": 207,
	"./ja.js": 207,
	"./jv": 208,
	"./jv.js": 208,
	"./ka": 209,
	"./ka.js": 209,
	"./kk": 210,
	"./kk.js": 210,
	"./km": 211,
	"./km.js": 211,
	"./kn": 212,
	"./kn.js": 212,
	"./ko": 213,
	"./ko.js": 213,
	"./ky": 214,
	"./ky.js": 214,
	"./lb": 215,
	"./lb.js": 215,
	"./lo": 216,
	"./lo.js": 216,
	"./lt": 217,
	"./lt.js": 217,
	"./lv": 218,
	"./lv.js": 218,
	"./me": 219,
	"./me.js": 219,
	"./mi": 220,
	"./mi.js": 220,
	"./mk": 221,
	"./mk.js": 221,
	"./ml": 222,
	"./ml.js": 222,
	"./mr": 223,
	"./mr.js": 223,
	"./ms": 225,
	"./ms-my": 224,
	"./ms-my.js": 224,
	"./ms.js": 225,
	"./my": 226,
	"./my.js": 226,
	"./nb": 227,
	"./nb.js": 227,
	"./ne": 228,
	"./ne.js": 228,
	"./nl": 230,
	"./nl-be": 229,
	"./nl-be.js": 229,
	"./nl.js": 230,
	"./nn": 231,
	"./nn.js": 231,
	"./pa-in": 232,
	"./pa-in.js": 232,
	"./pl": 233,
	"./pl.js": 233,
	"./pt": 235,
	"./pt-br": 234,
	"./pt-br.js": 234,
	"./pt.js": 235,
	"./ro": 236,
	"./ro.js": 236,
	"./ru": 237,
	"./ru.js": 237,
	"./sd": 238,
	"./sd.js": 238,
	"./se": 239,
	"./se.js": 239,
	"./si": 240,
	"./si.js": 240,
	"./sk": 241,
	"./sk.js": 241,
	"./sl": 242,
	"./sl.js": 242,
	"./sq": 243,
	"./sq.js": 243,
	"./sr": 245,
	"./sr-cyrl": 244,
	"./sr-cyrl.js": 244,
	"./sr.js": 245,
	"./ss": 246,
	"./ss.js": 246,
	"./sv": 247,
	"./sv.js": 247,
	"./sw": 248,
	"./sw.js": 248,
	"./ta": 249,
	"./ta.js": 249,
	"./te": 250,
	"./te.js": 250,
	"./tet": 251,
	"./tet.js": 251,
	"./th": 252,
	"./th.js": 252,
	"./tl-ph": 253,
	"./tl-ph.js": 253,
	"./tlh": 254,
	"./tlh.js": 254,
	"./tr": 255,
	"./tr.js": 255,
	"./tzl": 256,
	"./tzl.js": 256,
	"./tzm": 258,
	"./tzm-latn": 257,
	"./tzm-latn.js": 257,
	"./tzm.js": 258,
	"./uk": 259,
	"./uk.js": 259,
	"./ur": 260,
	"./ur.js": 260,
	"./uz": 262,
	"./uz-latn": 261,
	"./uz-latn.js": 261,
	"./uz.js": 262,
	"./vi": 263,
	"./vi.js": 263,
	"./x-pseudo": 264,
	"./x-pseudo.js": 264,
	"./yo": 265,
	"./yo.js": 265,
	"./zh-cn": 266,
	"./zh-cn.js": 266,
	"./zh-hk": 267,
	"./zh-hk.js": 267,
	"./zh-tw": 268,
	"./zh-tw.js": 268
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
webpackContext.id = 431;


/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\" (click)=\"addEmployee()\" mdTooltip=\"Add a new employee \"><img src=\"/assets/addemployee.jpg\"/></button>\r\n\r\n\r\n"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"userFirstname\" [lastname]=\"userLastname\"></app-menu>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n  <md-toolbar style=\"color:#204d74\">Add new Employee</md-toolbar>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n      <md-input-container class=\"demo-full-width\">\r\n        <input mdInput placeholder=\"Company\" disabled value=\"Golden Real Estate\">\r\n      </md-input-container>\r\n\r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"First Name\" placeholder=\"First Name\"\r\n          [(ngModel)]=\"firstName\" required  (keyup)=\"checkFiledsRequired()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n          <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Last Name\" placeholder=\"Last Name\"\r\n                 [(ngModel)]=\"lastName\" required (keyup)=\"checkFiledsRequired()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container class=\"demo-full-width\">\r\n        <input mdInput placeholder=\"Email\"  [(ngModel)]=\"email\" [formControl]=\"emailFormControl\" (keyup)=\"checkFiledsRequired()\">\r\n        <md-error *ngIf=\"emailFormControl.hasError('required')\">\r\n          This field is required\r\n        </md-error>\r\n        <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\r\n          Please enter a valid email address\r\n        </md-error>\r\n      </md-input-container>\r\n        </td>\r\n        <td>\r\n          <md-input-container class=\"demo-full-width\" >\r\n            <input mdInput #postalCode maxLength=\"12\" [(ngModel)]=\"telephone\" placeholder=\"Telephone Number\"\r\n                   pattern=\"[0-9]{12}\" [formControl]=\"telephoneFormControl\" (keyup)=\"checkFiledsRequired()\">\r\n            <md-hint align=\"end\">\r\n              <md-icon>mode_edit</md-icon>\r\n              <span aria-live=\"polite\">{{postalCode.value.length}} / 12</span>\r\n            </md-hint>\r\n             <md-error *ngIf=\"telephoneFormControl.hasError('required')\">\r\n               This field is required\r\n             </md-error>\r\n              <md-error *ngIf=\"telephoneFormControl.hasError('pattern')\">\r\n                Please enter a valid telephone number. Example 971501555151\r\n        </md-error>\r\n          </md-input-container>\r\n        </td>\r\n         <td>\r\n          <md-input-container class=\"demo-full-width\">\r\n            <input mdInput placeholder=\"Age\" [formControl]=\"ageFormControl\" [(ngModel)]=\"age\" minlength=\"1\" maxlength=\"3\" (keyup)=\"checkFiledsRequired()\">\r\n             <md-error *ngIf=\"ageFormControl.hasError('required')\" >\r\n          This field is required\r\n             </md-error>\r\n              <md-error *ngIf=\"ageFormControl.hasError('pattern')\">\r\n                Please enter a valid age\r\n            </md-error>\r\n          </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n      <p>    \r\n          <md-input-container class=\"demo-full-width\">\r\n           <textarea mdInput name=\"Address\" placeholder=\"Address\"\r\n                     [(ngModel)]=\"address\" ></textarea>\r\n          </md-input-container>\r\n          </p>\r\n\r\n       <p>    \r\n          <md-input-container class=\"demo-full-width\">\r\n           <textarea mdInput name=\"Remarks\" placeholder=\"Remarks\"\r\n                     [(ngModel)]=\"remarks\" ></textarea>\r\n          </md-input-container>\r\n          </p>\r\n\r\n          <p>\r\n         <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveEmployee()\">Save</button></td>\r\n           <td><button md-raised-button  (click)=\"cancelNavigation()\" >Cancel</button></td>\r\n         </md-dialog-actions>\r\n         </p>\r\n    </form>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"userFirstname\" [lastname]=\"userLastname\" ></app-menu>\n<br>\n<br>\n<br>\n<br>\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n  <md-toolbar style=\"color:#204d74\">Add new Task</md-toolbar>\n  <br>\n  <br>\n  <br>\n  <md-card-content>\n    <form #loginForm=\"ngForm\" >\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container style=\"width: 100%\">\n          <input mdInput name=\"Name\" placeholder=\"Name\"\n          [(ngModel)]=\"task.name\" required  (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n          </md-input-container>\n        </td>\n       <td>\n          <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"Remarks\" placeholder=\"Remarks\"\n                 [(ngModel)]=\"task.remarks\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n        </td>\n      </tr></table>\n        <p>\n         <md-dialog-actions align=\"end\" >\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveTask()\">Save</button></td>\n           <td><button md-raised-button  (click)=\"cancelNavigation()\" >Cancel</button></td>\n         </md-dialog-actions>\n         </p>\n    </form>\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\" (click)=\"addProperty()\"  mdTooltip=\"Add a new property \"><img src=\"/assets/home.jpg\"/></button>"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<app-menu  [firstname]=\"userFirstname\" [lastname]=\"userLastname\" ></app-menu>\n<br>\n<br>\n<br>\n<br>\n<md-card class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n  <md-toolbar style=\"color:#204d74\">Add new Property</md-toolbar>\n  <br>\n  <br>\n  <br>\n  <md-card-content>\n    <form #loginForm=\"ngForm\" >\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n        <td>\n          <md-input-container style=\"width: 100%\">\n          <input mdInput name=\"Name\" placeholder=\"Name\"\n          [(ngModel)]=\"property.name\" required  (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n          </md-input-container>\n        </td>\n       <td>\n          <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"City\" placeholder=\"City\"\n                 [(ngModel)]=\"property.city\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n        </td>\n      </tr></table>\n       <table style=\"width: 100%\" cellspacing=\"0\"><tr>\n         </tr>\n         <td>\n            <md-input-container style=\"width: 100%\">\n             <input mdInput name=\"Address\" placeholder=\"Address\"\n                 [(ngModel)]=\"property.address\" required (keyup)=\"checkFiledsRequired()\">\n                   <md-error>This field is required</md-error>\n            </md-input-container>\n         </td>\n       </table>\n        <p>\n         <md-dialog-actions align=\"end\" >\n           <td><button md-raised-button color=\"accent\" [disabled]=\"disabled\" (click)=\"saveProperty()\">Save</button></td>\n           <td><button md-raised-button   (click)=\"cancelNavigation()\" >Cancel</button></td>\n         </md-dialog-actions>\n         </p>\n    </form>\n  </md-card-content>\n</md-card>\n\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-link\"  (click)=\"addEmployee()\" mdTooltip=\"Add a new task \"><img src=\"/assets/wrench.jpg\"/></button>\n\n\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "   \r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\"md-button (click)=\"openDialog(id,name)\"  mdTooltip=\"Delete Employee\" ><img src=\"/assets/trash.jpg\"/></button>\r\n\r\n"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color:#204d74;text-align:center\">Are you sure you want to remove {{name}} from the system?</h2>\r\n<br>\r\n<br>\r\n<br>\r\n <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"remove()\"color=\"accent\" >Delete</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(id,name)\"  mdTooltip=\"Delete Property\" ><img src=\"/assets/trash.jpg\"/></button>\n\n"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color:#204d74;text-align:center\">Are you sure you want to remove {{name}} from the system?</h2>\r\n<br>\r\n<br>\r\n<br>\r\n <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"remove()\"color=\"accent\" >Delete</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "  <button class=\"btn btn-defaul\"md-button (click)=\"openDialog(id,name)\"  mdTooltip=\"Delete Task\" ><img src=\"/assets/trash.jpg\"/></button>\n\n"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color:#204d74;text-align:center\">Are you sure you want to remove {{name}} from the system?</h2>\r\n<br>\r\n<br>\r\n<br>\r\n <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"remove()\"color=\"accent\" >Delete</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>"

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Assign new Task\" >\r\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = " \r\n \r\n <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  \r\n <br>\r\n  <br>\r\n<table class=\"example-full-width\" cellspacing=\"0\" id=\"table\">\r\n  <br>\r\n  <br>\r\n  <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n    <tr>\r\n         <td style=\"width:280px\">\r\n             <select-dropdown [idProperty]= \"item.propertyId\"></select-dropdown>\r\n       </td>\r\n      <td>\r\n             <select-dropdowntask [idTask]= \"item.taskId\"></select-dropdowntask>\r\n             \r\n        </td>\r\n  </tr>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n  <tr>\r\n    <td>  <md-input-container>\r\n            <input required=\"true\" mdInput [mdDatepicker]=\"pickerFrom\" placeholder=\"From\"  id=\"dateFrom\" [(ngModel)]=\"item.taskDTO.dateFrom\" >\r\n            <button mdSuffix [mdDatepickerToggle]=\"pickerFrom\" (click)=\"checkFields()\" ></button>\r\n              <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n          <md-datepicker required=\"true\" #pickerFrom></md-datepicker></td>\r\n     <td>  <md-input-container>\r\n            <input required=\"true\" mdInput [mdDatepicker]=\"pickerTo\" placeholder=\"To\" [(ngModel)]=\"item.taskDTO.dateTo\" [min]=\"minDate()\">\r\n            <button mdSuffix [mdDatepickerToggle]=\"pickerTo\" (click)=\"checkFields()\" ></button>\r\n              <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n          <md-datepicker required=\"true\" #pickerTo></md-datepicker></td>\r\n    \r\n  </tr>\r\n<br>\r\n<br>\r\n  <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr>\r\n<br>\r\n<br>\r\n  <br>\r\n  <tr class=\"example-full-width\" >\r\n      <td>\r\n      \r\n     <md-input-container style=\"width:300px\">\r\n      <textarea mdInput #postalCode maxlength=\"200\" class=\"example-full-width\"  (keyup)=\"checkFields()\" required=\"true\" mdInput [(ngModel)]=\"item.taskDTO.remarks\" placeholder=\"Remarks\"></textarea>\r\n       <md-hint align=\"end\">{{postalCode.value.length}} / 200</md-hint>\r\n         <md-error>This field is required</md-error>\r\n    </md-input-container>\r\n      </td>\r\n  </tr>\r\n\r\n    <br>\r\n    <br>\r\n       <tr>\r\n    <td></td>\r\n    <td></td>\r\n  </tr> \r\n   \r\n      <tr>\r\n          <td></td>\r\n        <td>\r\n        <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveTask()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n       </td>\r\n      </tr>\r\n\r\n\r\n   </table>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = " \r\n <div *ngIf=\"disabled\" mdTooltip=\"First you need to assign a task to the employee\">\r\n    <button class=\"btn btn-defaul\" [disabled]=\"disabled\" md-button (click)=\"openDialog(item)\" class=\"example-tooltip-hos\"><img src=\"/assets/information.jpg\"/></button>\r\n</div>\r\n\r\n <div *ngIf=\"!disabled\" mdTooltip=\"Information about the employee\">\r\n    <button class=\"btn btn-defaul\" [disabled]=\"disabled\" md-button (click)=\"openDialog(item)\"  class=\"example-tooltip-hos\"><img src=\"/assets/information.jpg\"/></button>\r\n</div>\r\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "  <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n    \r\n   <br>   \r\n <md-card class=\"example-card\" mdTooltip=\"Task assigned to {{item.name}}\">\r\n\r\n <!--<img style=\"height:100px;width:100px\"id=\"ground\" src={{item.image}}>-->\r\n <br>\r\n\r\n\r\n  <md-card-content>\r\n\r\n<br>\r\n<img src=\"./assets/calendartask.jpg\"><strong>&nbsp;&nbsp;</strong>From   {{item.taskDTO.dateFrom}} To {{item.taskDTO.dateTo}}\r\n<br>\r\n<br>\r\n<img src=\"./assets/property.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.propertyDTO.name}} Located in  {{item.propertyDTO.address}}\r\n<br>\r\n<br>\r\n<img src=\"./assets/wrench.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.taskDTO.name}}<br>\r\n<br>\r\n   <img src=\"./assets/email.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.email}}\r\n<br>\r\n<br>\r\n   <img src=\"./assets/cellphone.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.telephone}}\r\n<br>\r\n<br>\r\n <img src=\"./assets/eye.jpg\"><strong>&nbsp;&nbsp;</strong>{{item.taskDTO.remarks}}<br>\r\n<br>\r\n\r\n\r\n  \r\n\r\n  </md-card-content>\r\n  <md-card-actions align=\"end\">\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Close</button></td>\r\n  </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Edit property\" >\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\n</div>\n\n\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = " <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  <br>\r\n\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n     \r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"Name\" placeholder=\"Name\"\r\n          [(ngModel)]=\"item.name\" required  (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n         <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"City\" placeholder=\"City\"\r\n                 [(ngModel)]=\"item.city\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n    <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <tr>\r\n            <td>\r\n            <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Adress\" placeholder=\"Adress\"\r\n                 [(ngModel)]=\"item.address\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        \r\n            </td>\r\n        </tr>\r\n        </table>\r\n\r\n     \r\n\r\n    </form>\r\n    <br>\r\n    <br>\r\n     <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveProperty()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n  </md-card-content>\r\n\r\n   "

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<div class=\"example-tooltip-host\" mdTooltip=\"Edit task\" >\n <button class=\"btn btn-defaul\" md-button (click)=\"openDialog(item)\"><img src=\"/assets/newtaskpencil.jpg\"/></button>\n</div>\n\n\n"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = " <h2 style=\"color:#204d74\">{{item.name}}</h2>\r\n  <br>\r\n\r\n  <md-card-content>\r\n    <form #loginForm=\"ngForm\" >\r\n     \r\n      <table style=\"width: 100%\" cellspacing=\"0\"><tr>\r\n        <td>\r\n          <md-input-container style=\"width: 100%\">\r\n          <input mdInput name=\"Name\" placeholder=\"Name\"\r\n          [(ngModel)]=\"item.name\" required  (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n          </md-input-container>\r\n        </td>\r\n       <td>\r\n         <md-input-container style=\"width: 100%\">\r\n             <input mdInput name=\"Remarks\" placeholder=\"Remarks\"\r\n                 [(ngModel)]=\"item.remarks\" required (keyup)=\"checkFields()\">\r\n                   <md-error>This field is required</md-error>\r\n            </md-input-container>\r\n        </td>\r\n      </tr></table>\r\n   \r\n    </form>\r\n    <br>\r\n    <br>\r\n     <md-dialog-actions align=\"end\" >\r\n           <td><button md-raised-button (click)=\"saveTask()\"color=\"accent\" [disabled]=\"!enableButton\" >Save</button></td>\r\n           <td><button md-raised-button (click)=\"dialogRef.close()\">Cancel</button></td>\r\n         </md-dialog-actions>\r\n  </md-card-content>\r\n\r\n   "

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"select\">\r\n  \r\n    <md-select class=\"dropdown\" mdInput placeholder=\"Select Property\" [color]=\"primary\" [(ngModel)]=\"currentProperty\" [required]=\"true\"\r\n      [floatPlaceholder]=\"floatPlaceholder\" (ngModelChange)=\"selectedValue($event)\" >\r\n      <md-option *ngFor=\"let property of data\" [value]=\"property.id\">\r\n        {{ property.name }}\r\n      </md-option>\r\n    </md-select>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"select\">\r\n    <md-select class=\"dropdown\" mdInput placeholder=\"Select Task\" [color]=\"primary\" [(ngModel)]=\"currentTask\" [required]=\"true\"\r\n      [floatPlaceholder]=\"floatPlaceholder\" (ngModelChange)=\"selectedValue($event)\" >\r\n      <md-option *ngFor=\"let task of data\" [value]=\"task.id\">\r\n        {{task.name }}\r\n      </md-option>\r\n    </md-select>\r\n\r\n \r\n</div>"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n\n       <app-addtask></app-addtask>\n\n     \n     \n         <div  *ngIf=\"showRemovedTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA task has been removed\n    \t</div>\n\n        <div  *ngIf=\"showRemovedTask\" class=\"alert alert-info\">\n    \t\t\t\t\tPlease, be advised that if the removed task was associated to one employee, it will be disassociated automatically\n    \t</div>\n\n          <div  *ngIf=\"showNewTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA new task has been created\n    \t</div>\n\n        <div  *ngIf=\"showEditTask\" class=\"alert alert-success\">\n    \t\t\t\t\tA task has been modified\n    \t</div>\n\n\n        \n\n\n        \n\n\n        <div class=\"row\">\n            <h2 class=\"col-xs-6\"></h2>\n            \n            <div class=\"col-xs-2\">\n                \n                <label class=\"label-control\" style=\"color:#204d74\" >Rows on page</label>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\n                    <option [ngValue]=\"5\">5</option>\n                    <option [ngValue]=\"10\">10</option>\n                    <option [ngValue]=\"15\">15</option>\n                </select>\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"row\">\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\n                            <option ngValue=\"name\">Name</option>\n                            <option ngValue=\"remarks\">Remarks</option>\n                             <option ngValue=\"createdAt\">Creation Date</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-xs-6\">\n                    <div class=\"row\">\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\n                            <option ngValue=\"asc\">Ascending</option>\n                            <option ngValue=\"desc\">Descending</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Task information</div>\n\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n                <thead>\n                <tr>\n                    <th style=\"width: 10%\"></th>\n                    <th style=\"width: 30%\">\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n                    </th>\n                    <th style=\"width: 50%\">\n                        <mfDefaultSorter by=\"remarks\">remarks</mfDefaultSorter>\n                    </th>\n                  \n                    <th style=\"width: 20%\">\n                      \n                    </th>\n                  \n                </tr>\n                <tr>\n                    <th colspan=\"5\">\n                        Filter by name:\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\n                    </th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of mf.data\">\n                    <td>\n                     <app-deletetask [id]=\"item.id\" [name]=\"item.name\"></app-deletetask> \n                    </td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.remarks}}</td>\n                    <td><dialog-task [item]=\"item\"></dialog-task></td>\n\n\n                </tr>\n                </tbody>\n                <tfoot>\n                <tr>\n                    <td colspan=\"5\">\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n                    </td>\n                </tr>\n                </tfoot>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\"></app-menu>\n<app-duties [newDuty]=\"newlyCreated\"></app-duties>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\"></app-menu>\r\n<app-employees [new]=\"newlyCreated\"></app-employees>"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n\r\n       <app-addemployee></app-addemployee>\r\n\r\n        <div  *ngIf=\"show\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new employee has been created\r\n    \t</div>\r\n\r\n        <div  *ngIf=\"showSavedTask\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new task has been associated to the employee\r\n    \t</div>\r\n\r\n         <div  *ngIf=\"showRemovedEmployee\" class=\"alert alert-success\">\r\n    \t\t\t\t\tAn employee has been removed\r\n    \t</div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <h2 class=\"col-xs-6\"></h2>\r\n            \r\n            <div class=\"col-xs-2\">\r\n                \r\n                <label class=\"label-control\" style=\"color:#204d74\">Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                            <option ngValue=\"name\">Name</option>\r\n                            <option ngValue=\"email\">Email</option>\r\n                            <option ngValue=\"telephone\">Telephone</option>\r\n                            <option ngValue=\"createdAt\">Creation Date</option>\r\n                            \r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                            <option ngValue=\"asc\">Ascending</option>\r\n                            <option ngValue=\"desc\">Descending</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Employee information</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 10%\"></th>\r\n                    <th style=\"width: 20%\">\r\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 40%\">\r\n                        <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 10%\">\r\n                        <mfDefaultSorter by=\"telephone\">Telephone</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      \r\n                    </th>\r\n                     <th style=\"width: 10%\">\r\n                      \r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <td>\r\n                     <app-deleteemployee [id]=\"item.id\" [name]=\"item.name\"></app-deleteemployee> \r\n                    </td>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.email}}</td>\r\n                    <td >{{item.telephone}}</td>\r\n                    <td><app-dialog [item]=\"item\"></app-dialog></td>\r\n\r\n                    <td>\r\n                        <app-dialoginformation [disabled]=\"item.taskDTO == null\" [item]=\"item\"></app-dialoginformation>\r\n                    <td>\r\n\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"height:100%\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n\r\n<div class=\"main-login col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n\r\n\t <div  *ngIf=\"showInvalidUser\" class=\"alert alert-danger\">\r\n    \t\t\t\t\tUsername and/or Password not found <br>\r\n\t\t\t\t\t\tPlease try again\r\n    \t</div>\r\n\r\n\t <div  *ngIf=\"showUserRegistered\" class=\"alert alert-success\">\r\n    \t\t\t\t\tNew user successfully registered\r\n    \t</div>\r\n\r\n\t\r\n\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n       \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">UserName</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" \r\n\t\t\t\t\t\t\t\t  name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"4\" />   \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t <div *ngIf=\"username.errors && (username.dirty || username.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!username.errors.required\">\r\n      \t\t\t\t\tUserName is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!username.errors.minlength\">\r\n    \t\t\t\t  UserName must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\r\n\t\t</div>\r\n\r\n        \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t   <input type=\"password\" \r\n\t\t\t\t\t\t\t\t\t   class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t <div *ngIf=\"password.errors && (password.dirty || password.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!password.errors.required\">\r\n      \t\t\t\t\tPassword is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!password.errors.minlength\">\r\n    \t\t\t\t  Password must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n        <div class=\"form-group\" align=\"end\">\r\n        <!--  <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>-->\r\n\t\t\t <button [disabled]=\"!loginForm.form.valid\" md-raised-button color=\"accent\" >Login</button>\r\n\t\t\t <button md-raised-button  [routerLink]=\"['/register']\" >Register</button>\r\n        \r\n        </div>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui secondary pointing menu active\">\r\n  <a class=\"item\"(click)=\"navigateToEmployee()\" routerLinkActive=\"active\">\r\n    Employees \r\n  </a>\r\n  <a class=\"item\" (click)=\"navigateToProperty()\"   routerLinkActive=\"active\">\r\n    Properties \r\n  </a>\r\n  <a class=\"item\" (click)=\"navigateToTask()\" routerLinkActive=\"active\" >\r\n     Tasks\r\n  </a>\r\n  <div class=\"right menu\">\r\n    <a class=\"ui item\" routerLinkActive=\"active\">\r\n     {{firstname}} {{lastname}}\r\n    </a>\r\n    <a class=\"ui item\" (click)=\"logout()\" routerLinkActive=\"active\">\r\n      Logout\r\n    </a>\r\n     \r\n  </div>\r\n</div>"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n    <div class=\"col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\r\n\r\n\r\n      <app-addproperty></app-addproperty>\r\n        \r\n        <div  *ngIf=\"show\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA property has been modified\r\n    \t</div>\r\n\r\n        <div  *ngIf=\"showproperty\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA new property has been created\r\n    \t</div>\r\n\r\n          <div  *ngIf=\"showdeletedmessage\" class=\"alert alert-success\">\r\n    \t\t\t\t\tA property has been removed\r\n    \t</div>\r\n\r\n        <div  *ngIf=\"showdeletedmessage\" class=\"alert alert-info\">\r\n    \t\t\t\t\tPlease, be advised that if the removed property was associated to one employee, it will be disassociated automatically\r\n    \t</div>\r\n        \r\n\r\n\r\n        <div class=\"row\">\r\n            <h2 class=\"col-xs-6\"></h2>\r\n            \r\n            <div class=\"col-xs-2\">\r\n                \r\n                <label class=\"label-control\" style=\"color:#204d74\" >Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"row\">\r\n                    <label class=\"col-xs-12 label-control\" style=\"color:#204d74\">Sort by</label>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                            <option ngValue=\"name\">Name</option>\r\n                            <option ngValue=\"address\">Address</option>\r\n                            <option ngValue=\"city\">City</option>\r\n                            <option ngValue=\"createdAt\">Creation Date</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                            <option ngValue=\"asc\">Ascending</option>\r\n                            <option ngValue=\"desc\">Descending</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Property information</div>\r\n\r\n            <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 10%\"></th>\r\n                    <th style=\"width: 20%\">\r\n                        <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 40%\">\r\n                        <mfDefaultSorter by=\"address\">Address</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 10%\">\r\n                        <mfDefaultSorter by=\"city\">City</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      \r\n                    </th>\r\n                     <th style=\"width: 10%\">\r\n                      \r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th colspan=\"5\">\r\n                        Filter by name:\r\n                        <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    </th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data\">\r\n                    <td>\r\n                      <app-deleteproperty [id]=\"item.id\" [name]=\"item.name\"></app-deleteproperty> \r\n                    </td>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.address}}</td>\r\n                    <td >{{item.city}}</td>\r\n                    <td><dialog-property [item]=\"item\"></dialog-property></td>\r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<app-menu [firstname]=\"firstname\" [lastname]=\"lastname\" ></app-menu>\n<app-properties [newproperty]=\"newlyCreated\"></app-properties>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron height\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n<div class=\"main-login col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n\r\n\r\n <div  *ngIf=\"showUserIstaken\" class=\"alert alert-danger\">\r\n    \t\t\t\t\tUsername and password are already taken\r\n    \t</div>\r\n\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\" >\r\n        <div class=\"form-group\">\r\n\t\t\t\t <label for=\"firstName\">First Name</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t   <input type=\"text\" class=\"form-control\" name=\"firstname\"  [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"firstname.errors && (firstname.dirty || firstname.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!firstname.errors.required\">\r\n      \t\t\t\t\tFirst Name is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!firstname.errors.minlength\">\r\n    \t\t\t\t  First Name must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n\t\t</div>\r\n\r\n         <div class=\"form-group\">\r\n\t\t\t\t  <label for=\"lastName\">Last Name</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" name=\"lastname\"   [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required minlength=\"4\"  />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div *ngIf=\"lastname.errors && (lastname.dirty || lastname.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!lastname.errors.required\">\r\n      \t\t\t\t\tLast Name is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!lastname.errors.minlength\">\r\n    \t\t\t\t  Last Name must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\r\n\t\t</div>\r\n\r\n\r\n         <div class=\"form-group\">\r\n\t\t\t     <label for=\"username\">Username</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t       <input type=\"text\" class=\"form-control\" name=\"username\"   [(ngModel)]=\"model.username\" #username=\"ngModel\" required minlength=\"4\"   />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"username.errors && (username.dirty || username.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!username.errors.required\">\r\n      \t\t\t\t\tUsername is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!username.errors.minlength\">\r\n    \t\t\t\t  Username must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n        <div class=\"form-group\">\r\n\t\t\t\t\t\t  <label for=\"password\">Password</label>\r\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t\t  <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"model.password\"  #password=\"ngModel\" required minlength=\"4\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div *ngIf=\"password.errors && (password.dirty || password.touched)\"\r\n     \t\t\t\t\tclass=\"alert alert-danger\">\r\n    \t\t\t\t<div [hidden]=\"!password.errors.required\">\r\n      \t\t\t\t\tPassword is required\r\n    \t\t\t\t</div>\r\n   \t\t\t\t\t <div [hidden]=\"!password.errors.minlength\">\r\n    \t\t\t\t  Password must be at least 4 characters long.\r\n   \t\t\t\t\t </div>\r\n   \t\t\t\t\t\r\n\t\t</div>\r\n\r\n       \r\n        <div class=\"form-group\"  align=\"end\">\r\n            <!--<button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>-->\r\n\t\t\t <button [disabled]=\"!registerForm.form.valid\" md-raised-button color=\"accent\" >Register</button>\r\n        \t <button  md-raised-button [routerLink]=\"['/login']\" >Cancel</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = (function () {
    function CommonService() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * Observable string streams
         */
        this.notifyObservable$ = this.notify.asObservable();
    }
    CommonService.prototype.notifyOther = function (data) {
        if (data) {
            this.notify.next(data);
        }
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CommonService);

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(329);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addemployee_component__ = __webpack_require__(336);
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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeletepropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletePropertyPopupComponent; });
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
    function DeletepropertyComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    DeletepropertyComponent.prototype.ngOnInit = function () {
    };
    DeletepropertyComponent.prototype.openDialog = function (id, name) {
        console.log("name" + name);
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DeletePropertyPopupComponent, {
            height: '200px',
            width: '1000px',
        });
        dialogRef.componentInstance.name = this.name;
        dialogRef.componentInstance.id = this.id;
        console.log(dialogRef.componentInstance.name);
    };
    return DeletepropertyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DeletepropertyComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeletepropertyComponent.prototype, "name", void 0);
DeletepropertyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteproperty',
        template: __webpack_require__(448),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DeletepropertyComponent);

var DeletePropertyPopupComponent = (function () {
    function DeletePropertyPopupComponent(dialogRef, propertyService, router, routerAct, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.propertyService = propertyService;
        this.router = router;
        this.routerAct = routerAct;
        this.alertService = alertService;
        this.returnUrl = '/propertieslist/deleteProperty';
        this.enableButton = false;
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DeletePropertyPopupComponent.prototype.ngOnInit = function () {
        this.remarks = "";
    };
    DeletePropertyPopupComponent.prototype.remove = function () {
        var _this = this;
        console.log("removeid" + this.id);
        console.log("remove");
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.propertyService.deleteProperty(this.id).subscribe(function (data) {
        }, function (error) {
            _this.alertService.error(error);
        });
        this.router.navigateByUrl('/employeelist/false', true);
        this.dialogRef.close();
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    return DeletePropertyPopupComponent;
}());
DeletePropertyPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deleteproperty-popup',
        template: __webpack_require__(449),
        styles: ['./deleteproperty.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_property_property_service__["a" /* PropertyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _g || Object])
], DeletePropertyPopupComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=deleteproperty.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeletetaskComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteTaskPopupComponent; });
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
    function DeletetaskComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.returnUrl = '/dutieslist/deleteTask';
    }
    DeletetaskComponent.prototype.ngOnInit = function () {
    };
    DeletetaskComponent.prototype.openDialog = function (id, name) {
        console.log("name" + name);
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogConfig */]();
        var dialogRef = this.dialog.open(DeleteTaskPopupComponent, {
            height: '200px',
            width: '1000px',
        });
        dialogRef.componentInstance.name = this.name;
        dialogRef.componentInstance.id = this.id;
        console.log(dialogRef.componentInstance.name);
    };
    return DeletetaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DeletetaskComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DeletetaskComponent.prototype, "name", void 0);
DeletetaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deletetask',
        template: __webpack_require__(450),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _b || Object])
], DeletetaskComponent);

var DeleteTaskPopupComponent = (function () {
    function DeleteTaskPopupComponent(dialogRef, taskService, router, routerAct, alertService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.taskService = taskService;
        this.router = router;
        this.routerAct = routerAct;
        this.alertService = alertService;
        this.returnUrl = '/dutieslist/deleteTask';
        this.enableButton = false;
        this.routerAct.queryParams.subscribe(function (params) {
            _this.firstname = params["firstname"];
            _this.lastname = params["lastname"];
        });
    }
    DeleteTaskPopupComponent.prototype.ngOnInit = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.remarks = "";
    };
    DeleteTaskPopupComponent.prototype.remove = function () {
        var _this = this;
        this.taskService.deleteTask(this.id).subscribe(function (data) {
        }, function (error) {
            _this.alertService.error(error);
        });
        this.router.navigateByUrl('/employeelist/false', true);
        this.dialogRef.close();
        var navigationExtras = {
            queryParams: {
                "firstname": this.firstname,
                "lastname": this.lastname
            }
        };
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate([_this.returnUrl], navigationExtras);
        });
    };
    return DeleteTaskPopupComponent;
}());
DeleteTaskPopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deletetask-popup',
        template: __webpack_require__(451),
        styles: ['./deletetask.popup.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_task_task_service__["a" /* TaskService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _g || Object])
], DeleteTaskPopupComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=deletetask.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdownproperties_dropdownproperties_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropdowntask_dropdowntask_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_picker__ = __webpack_require__(274);
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
        exports: [__WEBPACK_IMPORTED_MODULE_2__dialog_component__["b" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_2__dialog_component__["a" /* DialogPopupComponent */]],
    })
], DialogModule);

//# sourceMappingURL=dialog.module.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdownproperties_component__ = __webpack_require__(344);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdowntask_component__ = __webpack_require__(345);
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

/***/ 79:
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

/***/ 80:
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

/***/ 81:
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_user__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(102);
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
        template: __webpack_require__(467),
        styles: [__webpack_require__(427)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ })

},[724]);
//# sourceMappingURL=main.bundle.js.map