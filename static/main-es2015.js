(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1, a2) { return { "alert": a0, "alert-success": a1, "alert-danger": a2 }; };
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.message, ctx_r0.message.type === "success", ctx_r0.message.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.text);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert',
                templateUrl: 'alert.component.html'
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_directives/date.picker.ts":
/*!********************************************!*\
  !*** ./src/app/_directives/date.picker.ts ***!
  \********************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function DatePicker_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatePicker_ng_template_5_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const date_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hoveredDate = date_r5; })("mouseleave", function DatePicker_ng_template_5_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const focused_r6 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r6)("range", ctx_r2.isRange(date_r5))("faded", ctx_r2.isHovered(date_r5) || ctx_r2.isInside(date_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r5.day, " ");
} }
class DatePicker {
    constructor(calendar, formatter) {
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)) ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed) : currentValue;
    }
}
DatePicker.ɵfac = function DatePicker_Factory(t) { return new (t || DatePicker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"])); };
DatePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatePicker, selectors: [["ngbd-datepicker-range"]], inputs: { formgroup: "formgroup" }, decls: 19, vars: 6, consts: [[1, "form-inline"], [1, "form-group", "hidden"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", 1, "form-control", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "form-group"], ["placeholder", "yyyy-mm-dd", "name", "dpFromDate", 1, "form-control", 3, "value", "input"], ["dpFromDate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], [1, "form-group", "ml-4"], ["placeholder", "yyyy-mm-dd", "name", "dpToDate", 1, "form-control", 3, "value", "input"], ["dpToDate", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function DatePicker_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DatePicker_Template_input_dateSelect_3_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatePicker_ng_template_5_Template, 2, 7, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatePicker_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.fromDate = ctx.validateInput(ctx.fromDate, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePicker_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DatePicker_Template_input_input_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.toDate = ctx.validateInput(ctx.toDate, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePicker_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 2)("dayTemplate", _r1)("startDate", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.fromDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formatter.format(ctx.toDate));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]], styles: [".form-group.hidden[_ngcontent-%COMP%] {\r\n    width: 0;\r\n    margin: 0;\r\n    border: none;\r\n    padding: 0;\r\n    \r\n  }\r\n.custom-day[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n  }\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\nbutton[_ngcontent-%COMP%]{\r\n    background: #25274d;\r\n    color: #fff;\r\n    font-weight: 600;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2RpcmVjdGl2ZXMvY29tbW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7O0VBRVo7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDtBQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9fZGlyZWN0aXZlcy9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKmZvciBkYXRlIHBpY2tlciovXHJcbi5mb3JtLWdyb3VwLmhpZGRlbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gIH1cclxuICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjUyNzRkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-datepicker-range',
                templateUrl: './date.picker.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] }]; }, { formgroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent, DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.picker */ "./src/app/_directives/date.picker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _date_picker__WEBPACK_IMPORTED_MODULE_1__["DatePicker"]; });





/***/ }),

/***/ "./src/app/_entry/finished_material.ts":
/*!*********************************************!*\
  !*** ./src/app/_entry/finished_material.ts ***!
  \*********************************************/
/*! exports provided: FinishedMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedMaterial", function() { return FinishedMaterial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

//import {UtilService} from '../shared/utilservice'







function FinishedMaterial_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data saved successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinishedMaterial_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r6);
} }
function FinishedMaterial_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7);
} }
function FinishedMaterial_div_45_tr_22_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const semi_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", semi_r13.product, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", semi_r13.size, " ");
} }
function FinishedMaterial_div_45_tr_22_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const raw_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", raw_r14.material, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", raw_r14.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", raw_r14.weight, " ");
} }
function FinishedMaterial_div_45_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FinishedMaterial_div_45_tr_22_div_14_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FinishedMaterial_div_45_tr_22_div_16_Template, 7, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_div_45_tr_22_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const indexOfelement_r10 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.edit(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_div_45_tr_22_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const indexOfelement_r10 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.delete(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rawTxn_r9 = ctx.$implicit;
    const indexOfelement_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.challan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.format_date(rawTxn_r9.recdate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rawTxn_r9.semiProdList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", rawTxn_r9.rawMaterialList);
} }
function FinishedMaterial_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Challan No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Consumed SemiFinished");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Consumed Raw");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FinishedMaterial_div_45_tr_22_Template, 22, 8, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataTosave);
} }
function FinishedMaterial_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_div_46_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FinishedMaterial {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.uri = 'finishedproduct';
        this.status = 'new';
        this.disable = true;
        this.productlist = [];
        this.size_map = {};
        this.sizedropdown = [];
        this.action = "add";
        this.flag = false;
        this.dataTosave = [];
        this.entryform = this.fb.group({
            challan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            recdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
        this.getChallanNo();
        this.apiService.getFinishedlist().subscribe(data => {
            this.productlist = data['product'];
            this.size_map = data['sizes'];
            this.sizedropdown = this.size_map[this.productlist[0]];
            this.entryform.controls['product'].setValue(this.productlist[0]);
            this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        });
    }
    getChallanNo() {
        this.apiService.getChallanNo('finishprod').subscribe(data => {
            console.log(data);
            this.status = 'new';
            this.entryform.controls['challan'].setValue(data['challan_no']);
            this.disable = true;
            this.flag = false;
        });
    }
    onChange(e) {
        console.log(e.target.value);
        this.sizedropdown = this.size_map[e.target.value];
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        //this.flag = false;
    }
    submit() {
        console.log("submit");
        console.log(this.action);
        if (this.action === 'add') {
            this.add();
        }
        else {
            this.update();
        }
    }
    add() {
        let row = new _models__WEBPACK_IMPORTED_MODULE_1__["FinishedProductImpl"]();
        row.challan = "FINIS-" + this.entryform.get('challan').value;
        row.size = this.entryform.get('size').value;
        row.product = this.entryform.get('product').value;
        row.stock = this.entryform.get('qty').value;
        row.recdate = this.entryform.get('recdate').value;
        row.status = 'new';
        this.populate_weight_stock(row);
        this.refresh();
    }
    update() { }
    refresh() {
        this.entryform.controls['product'].setValue(this.productlist[0]);
        this.sizedropdown = this.size_map[this.productlist[0]];
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        this.entryform.controls['qty'].setValue(null);
        this.action = "add";
    }
    populate_weight_stock(obj) {
        let search = {
            product: obj.product,
            size: obj.size
        };
        this.apiService.getFinishedPrdCfg(search).subscribe(d => {
            console.log(d);
            let stock = d['stock'];
            let cosumed_semi_prod = d['consumed_semi_product'];
            let cosumed_raw = d['consumed_raw_material'];
            cosumed_semi_prod.forEach(element => {
                let semi = new _models__WEBPACK_IMPORTED_MODULE_1__["SemiFinishedImpl"]();
                semi.product = element['product'];
                semi.size = element['size'];
                semi.qty = obj.stock;
                semi.recdate = obj.recdate;
                semi.challan = obj.challan;
                obj.semiProdList.push(semi);
            });
            cosumed_raw.forEach(element => {
                let raw = new _models__WEBPACK_IMPORTED_MODULE_1__["RawMaterialImp"]();
                raw.material = element['material'];
                raw.size = element['size'];
                raw.recdate = obj.recdate;
                raw.challan = obj.challan;
                raw.weight = (obj.stock * element['weight_per_product'] / 100).toFixed(3);
                obj.rawMaterialList.push(raw);
            });
            this.dataTosave.push(obj);
            console.log(this.dataTosave);
            //this.refresh()
        });
    }
    format_date(datejson) {
        return datejson['day'] + "-" + datejson['month'] + "-" + datejson['year'];
    }
    save() {
        //console.log(this.dataTosave)
        let data = {
            status: this.status,
            data: this.dataTosave
        };
        this.apiService.saveProducttxn(data).subscribe(e => {
            console.log(e);
            this.flag = true;
            this.getChallanNo();
            this.refresh();
            this.dataTosave = [];
        });
    }
    editChallan() {
    }
    searchChallan(prefix) {
    }
    edit(itemID) {
    }
    delete(itenId) {
    }
}
FinishedMaterial.ɵfac = function FinishedMaterial_Factory(t) { return new (t || FinishedMaterial)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FinishedMaterial.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishedMaterial, selectors: [["finishedItem"]], decls: 47, vars: 11, consts: [[1, "contact"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "challan", "placeholder", "challan", "required", "", 1, "form-control", 3, "readonly"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fa", "fa-search"], [1, "form-group", "col-md-6"], ["for", "inputEmail4", 1, "col-sm-2", "col-form-label"], ["name", "dp", "formControlName", "recdate", "ngbDatepicker", "", "value", "recdate", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["for", "material", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "product", 1, "custom-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "size", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "size", 1, "custom-select"], ["for", "weight", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "qty", "required", "", 1, "form-control"], [1, "form-group"], [1, "col-sm-offset-4", "col-sm-4"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "disabled"], ["class", "row", 4, "ngIf"], ["class", "form-group ", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "value"], [1, "table", "table-striped", "table-bordered", "table-hover"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"], [1, "col-sm"], [1, "col-sm-offset-4", "col-sm-6", 2, "left", "50%"], ["type", "submit", 1, "btn", "btn-default", 3, "click"]], template: function FinishedMaterial_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinishedMaterial_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FinishedMaterial_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FINIS-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_Template_button_click_14_listener() { return ctx.searchChallan("Raw"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_Template_button_click_16_listener() { return ctx.editChallan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Edit Challan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinishedMaterial_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FinishedMaterial_Template_select_change_30_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FinishedMaterial_option_31_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FinishedMaterial_option_36_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, FinishedMaterial_div_45_Template, 23, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, FinishedMaterial_div_46_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizedropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entryform.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2VudHJ5L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL19lbnRyeS9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinishedMaterial, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'finishedItem',
                templateUrl: './finished_material.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_entry/raw_material.ts":
/*!****************************************!*\
  !*** ./src/app/_entry/raw_material.ts ***!
  \****************************************/
/*! exports provided: RawMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterial", function() { return RawMaterial; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

//import {UtilService} from '../shared/utilservice'







function RawMaterial_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data saved successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RawMaterial_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r6);
} }
function RawMaterial_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7);
} }
function RawMaterial_div_45_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_div_45_tr_18_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.edit(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_div_45_tr_18_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.delete(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rawTxn_r9 = ctx.$implicit;
    const indexOfelement_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.challan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.format_date(rawTxn_r9.recdate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.weight);
} }
function RawMaterial_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Challan No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Weight(Kgs.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RawMaterial_div_45_tr_18_Template, 18, 6, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataTosave);
} }
function RawMaterial_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_div_46_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RawMaterial {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.uri = 'finishedproduct';
        this.entryform = this.fb.group({
            challan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            recdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            material: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            size: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            weight: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.materialist = [];
        this.size_map = {};
        this.sizedropdown = [];
        this.dataTosave = [];
        this.disable = false;
        this.flag = false;
        this.status = 'new';
        this.action = "add";
    }
    getChallanNo() {
        this.apiService.getChallanNo('raw').subscribe(data => {
            console.log(data);
            this.status = 'new';
            this.entryform.controls['challan'].setValue(data['challan_no']);
            this.disable = true;
        });
    }
    ngOnInit() {
        this.getChallanNo();
        this.apiService.getRawAll().subscribe(data => {
            console.log(data);
            this.materialist = data['material'];
            this.size_map = data['size_map'];
            this.sizedropdown = this.size_map[this.materialist[0]];
            this.entryform.controls['material'].setValue(this.materialist[0]);
            this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        });
    }
    searchChallan(type) {
        console.log(type);
        let challan = this.entryform.controls['challan'].value;
        console.log(challan);
        if (challan) {
            this.apiService.searchChallanRaw(challan).subscribe(data => {
                console.log(data);
                this.dataTosave = data;
                this.disable = true;
            });
        }
        else {
            console.log("empty challan id");
        }
    }
    onChange(e) {
        console.log(e.target.value);
        this.sizedropdown = this.size_map[e.target.value];
        this.flag = false;
    }
    disbalef() {
        this.disable = true;
    }
    enablef() {
        this.disable = false;
    }
    submit() {
        if (this.action === 'add') {
            this.add();
        }
        else {
            this.update();
        }
    }
    add() {
        console.log("add");
        //let row = JSON.stringify(this.entryform.value)
        let row = new _models__WEBPACK_IMPORTED_MODULE_1__["RawMaterialImp"]();
        row.challan = "RAW-" + this.entryform.get('challan').value;
        let date = new Date();
        console.log(this.entryform.get('recdate').value);
        row.recdate = this.entryform.get('recdate').value;
        row.material = this.entryform.get('material').value;
        row.size = this.entryform.get('size').value;
        row.weight = this.entryform.get('weight').value;
        //row.txn = this.entryform.get('recdate').value
        row.status = 'new';
        this.dataTosave.push(row);
        this.refresh();
    }
    format_date(datejson) {
        return datejson['day'] + "-" + datejson['month'] + "-" + datejson['year'];
    }
    refresh() {
        this.entryform.controls['material'].setValue(this.materialist[0]);
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        this.entryform.controls['weight'].setValue(null);
        this.action = "add";
    }
    update() {
        let row = this.dataTosave[this.currentActiveRowid];
        row.recdate = this.entryform.get('recdate').value;
        row.material = this.entryform.get('material').value;
        row.size = this.entryform.get('size').value;
        row.weight = this.entryform.get('weight').value;
        this.dataTosave[this.currentActiveRowid] = row;
        this.refresh();
    }
    edit(indexOfelement) {
        this.action = "update";
        console.log("edit", indexOfelement);
        this.currentActiveRowid = indexOfelement;
        let ele = this.dataTosave[indexOfelement];
        console.log("ele", ele);
        this.entryform.setValue({
            challan: ele.challan,
            recdate: ele.recdate,
            material: ele.material,
            size: ele.size,
            weight: ele.weight
        });
    }
    delete(indexOfelement) {
        console.log("delete", indexOfelement);
        this.dataTosave.splice(indexOfelement, 1);
    }
    save() {
        console.log(this.dataTosave);
        let data = {
            status: this.status,
            data: this.dataTosave
        };
        this.apiService.saveRaw(data).subscribe(e => {
            console.log(e);
            this.ngOnInit();
            this.flag = true;
        });
    }
    editChallan() {
    }
}
RawMaterial.ɵfac = function RawMaterial_Factory(t) { return new (t || RawMaterial)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
RawMaterial.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RawMaterial, selectors: [["rawitem"]], decls: 47, vars: 11, consts: [[1, "contact"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "challan", "placeholder", "challan", "required", "", 1, "form-control", 3, "readonly"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fa", "fa-search"], [1, "form-group", "col-md-6"], ["for", "inputEmail4", 1, "col-sm-2", "col-form-label"], ["name", "dp", "formControlName", "recdate", "ngbDatepicker", "", "value", "recdate", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["for", "material", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "material", 1, "custom-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "size", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "size", 1, "custom-select"], ["for", "weight", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "weight", "required", "", 1, "form-control"], [1, "form-group"], [1, "col-sm-offset-4", "col-sm-4"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "disabled"], ["class", "row", 4, "ngIf"], ["class", "form-group ", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "value"], [1, "table", "table-striped", "table-bordered", "table-hover"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"], [1, "col-sm-offset-4", "col-sm-4", 2, "left", "50%"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "click"]], template: function RawMaterial_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RawMaterial_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RawMaterial_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RAW-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_Template_button_click_14_listener() { return ctx.searchChallan("Raw"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_Template_button_click_16_listener() { return ctx.editChallan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Edit Challan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RawMaterial_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RawMaterial_Template_select_change_30_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RawMaterial_option_31_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RawMaterial_option_36_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, RawMaterial_div_45_Template, 19, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RawMaterial_div_46_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.materialist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizedropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entryform.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2VudHJ5L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL19lbnRyeS9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RawMaterial, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'rawitem',
                templateUrl: './raw_material.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_entry/report.ts":
/*!**********************************!*\
  !*** ./src/app/_entry/report.ts ***!
  \**********************************/
/*! exports provided: Reports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reports", function() { return Reports; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _component_filter_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/filter-comp */ "./src/app/component/filter-comp.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_printpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/printpage.component */ "./src/app/component/printpage.component.ts");






function Reports_app_print_page_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-print-page", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchParam", ctx_r0.searchParam);
} }
class Reports {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
    }
    generateReport(events) {
        this.searchParam = events;
    }
}
Reports.ɵfac = function Reports_Factory(t) { return new (t || Reports)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
Reports.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Reports, selectors: [["reports"]], decls: 4, vars: 1, consts: [[1, "container-fluid"], [3, "searchParam"], [3, "searchParam", 4, "ngIf"], [1, "contact"]], template: function Reports_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "filter-comp", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchParam", function Reports_Template_filter_comp_searchParam_1_listener($event) { return ctx.generateReport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Reports_app_print_page_2_Template, 1, 1, "app-print-page", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchParam);
    } }, directives: [_component_filter_comp__WEBPACK_IMPORTED_MODULE_2__["Filters"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _component_printpage_component__WEBPACK_IMPORTED_MODULE_4__["PrintPageComponent"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2VudHJ5L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL19lbnRyeS9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Reports, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'reports',
                templateUrl: './reports.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_entry/sales.ts":
/*!*********************************!*\
  !*** ./src/app/_entry/sales.ts ***!
  \*********************************/
/*! exports provided: SalesCompoent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesCompoent", function() { return SalesCompoent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function SalesCompoent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data saved successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SalesCompoent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r6);
} }
function SalesCompoent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7);
} }
function SalesCompoent_div_54_tr_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_div_54_tr_22_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.edit(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_div_54_tr_22_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.delete(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rawTxn_r9 = ctx.$implicit;
    const indexOfelement_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.challan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.format_date(rawTxn_r9.recdate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.stock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.vehicleNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.description);
} }
function SalesCompoent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Challan No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Vehicle Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SalesCompoent_div_54_tr_22_Template, 22, 8, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataTosave);
} }
function SalesCompoent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_div_55_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SalesCompoent {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.status = 'new';
        this.disable = true;
        this.productlist = [];
        this.size_map = {};
        this.sizedropdown = [];
        this.action = "add";
        this.flag = false;
        this.dataTosave = [];
        this.entryform = this.fb.group({
            challan: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            recdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        this.getChallanNo();
        this.apiService.getFinishedlist().subscribe(data => {
            this.productlist = data['product'];
            this.size_map = data['sizes'];
            this.sizedropdown = this.size_map[this.productlist[0]];
            this.entryform.controls['product'].setValue(this.productlist[0]);
            this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        });
    }
    getChallanNo() {
        this.apiService.getChallanNo('sales').subscribe(data => {
            console.log(data);
            this.status = 'new';
            this.entryform.controls['challan'].setValue(data['challan_no']);
            this.disable = true;
        });
    }
    onChange(e) {
        console.log(e.target.value);
        this.sizedropdown = this.size_map[e.target.value];
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        //this.flag = false;
    }
    refresh() {
        this.entryform.controls['product'].setValue(this.productlist[0]);
        this.sizedropdown = this.size_map[this.productlist[0]];
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        this.entryform.controls['qty'].setValue(null);
        this.entryform.controls['vehicleNumber'].setValue(null);
        this.entryform.controls['description'].setValue(null);
        this.action = "add";
    }
    submit() {
        console.log("submit");
        console.log(this.action);
        if (this.action === 'add') {
            this.add();
        }
        else {
            this.update();
        }
        this.refresh();
    }
    add() {
        let row = new _models__WEBPACK_IMPORTED_MODULE_2__["Sales"]();
        row.challan = "SALE-" + this.entryform.get('challan').value;
        row.size = this.entryform.get('size').value;
        row.product = this.entryform.get('product').value;
        row.stock = this.entryform.get('qty').value;
        row.recdate = this.entryform.get('recdate').value;
        row.vehicleNumber = this.entryform.get('vehicleNumber').value;
        row.description = this.entryform.get('description').value;
        row.status = 'new';
        this.dataTosave.push(row);
    }
    update() { }
    format_date(datejson) {
        return datejson['day'] + "-" + datejson['month'] + "-" + datejson['year'];
    }
    save() {
        let data = {
            status: this.status,
            data: this.dataTosave
        };
        this.apiService.saveSales(data).subscribe(e => {
            console.log(e);
            this.refresh();
            this.dataTosave = [];
            this.getChallanNo();
            this.flag = true;
        });
    }
    editChallan() {
    }
    searchChallan(prefix) {
    }
    edit(itemID) {
    }
    delete(itenId) {
    }
}
SalesCompoent.ɵfac = function SalesCompoent_Factory(t) { return new (t || SalesCompoent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SalesCompoent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesCompoent, selectors: [["sales"]], decls: 56, vars: 11, consts: [[1, "contact"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "challan", "placeholder", "challan", "required", "", 1, "form-control", 3, "readonly"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fa", "fa-search"], ["for", "inputEmail4", 1, "col-sm-2", "col-form-label"], ["name", "dp", "formControlName", "recdate", "ngbDatepicker", "", "value", "recdate", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["for", "material", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "product", 1, "custom-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "size", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "size", 1, "custom-select"], ["for", "qty", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "qty", "required", "", 1, "form-control"], ["for", "vehicleNumber", 1, "col-sm-3", "col-form-label"], ["type", "text", "formControlName", "vehicleNumber", "required", "", 1, "form-control"], ["for", "description", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "description", "required", "", 1, "form-control"], [1, "form-group"], [1, "col-sm-offset-4", "col-sm-6", 2, "left", "50%"], ["type", "submit", 1, "btn", "btn-default", 3, "disabled"], ["class", "row", 4, "ngIf"], ["class", "form-group ", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "value"], [1, "table", "table-striped", "table-bordered", "table-hover"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"], ["type", "submit", 1, "btn", "btn-default", 3, "click"]], template: function SalesCompoent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SalesCompoent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SalesCompoent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SAL-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_Template_button_click_14_listener() { return ctx.searchChallan("Raw"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_Template_button_click_16_listener() { return ctx.editChallan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Edit Challan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalesCompoent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SalesCompoent_Template_select_change_30_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SalesCompoent_option_31_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SalesCompoent_option_36_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Vehicle#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SalesCompoent_div_54_Template, 23, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SalesCompoent_div_55_Template, 4, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizedropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entryform.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2VudHJ5L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL19lbnRyeS9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesCompoent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sales',
                templateUrl: './sales.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_entry/semi.finished.ts":
/*!*****************************************!*\
  !*** ./src/app/_entry/semi.finished.ts ***!
  \*****************************************/
/*! exports provided: SemiFinishedProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiFinishedProduct", function() { return SemiFinishedProduct; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models */ "./src/app/_models/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

//import {UtilService} from '../shared/utilservice'







function SemiFinishedProduct_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Data saved successfully. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SemiFinishedProduct_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r6);
} }
function SemiFinishedProduct_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r7);
} }
function SemiFinishedProduct_div_45_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_div_45_tr_26_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.edit(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_div_45_tr_26_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const indexOfelement_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.delete(indexOfelement_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rawTxn_r9 = ctx.$implicit;
    const indexOfelement_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.challan);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.format_date(rawTxn_r9.recdate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.product_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.material);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rawTxn_r9.wastage);
} }
function SemiFinishedProduct_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Challan No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Raw Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Size Consumed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Weight Consumed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wastage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SemiFinishedProduct_div_45_tr_26_Template, 26, 10, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataTosave);
} }
function SemiFinishedProduct_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_div_46_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SemiFinishedProduct {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.uri = 'semiFinishedProduct';
        this.entryform = this.fb.group({
            challan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            recdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.productlist = [];
        this.size_map = {};
        this.sizedropdown = [];
        this.dataTosave = [];
        this.disable = false;
        this.flag = false;
        this.status = 'new';
        this.action = "add";
    }
    getChallanNo() {
        this.apiService.getChallanNo('semifinished').subscribe(data => {
            console.log(data);
            this.status = 'new';
            this.entryform.controls['challan'].setValue(data['challan_no']);
            this.disable = true;
        });
    }
    ngOnInit() {
        this.getChallanNo();
        this.apiService.getSemiFinishedAll().subscribe(data => {
            console.log(data);
            this.productlist = data['product'];
            this.size_map = data['sizes'];
            this.sizedropdown = this.size_map[this.productlist[0]];
            this.entryform.controls['product'].setValue(this.productlist[0]);
            this.entryform.controls['size'].setValue(this.sizedropdown[0]);
            //this.onSizeChange(0);
        });
    }
    searchChallan(type) {
        console.log(type);
        let challan = this.entryform.controls['challan'].value;
        console.log(challan);
        if (challan) {
            this.apiService.searchChallanRaw(challan).subscribe(data => {
                console.log(data);
                /// this.dataTosave = data
                this.disable = true;
            });
        }
        else {
            console.log("empty challan id");
        }
    }
    onChange(e) {
        console.log(e.target.value);
        this.sizedropdown = this.size_map[e.target.value];
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        this.flag = false;
    }
    onSizeChange(obj) {
        let search = {
            product: obj.product,
            size: obj.product_size
        };
        this.apiService.getRawCfg(search).subscribe(d => {
            console.log(d);
            obj.material = d['raw'];
            obj.size = d['raw_size'];
            obj.weight = (obj.qty * d['weight_per_product']).toFixed(3);
            obj.wastage = (((obj.qty * d['weight_per_product']) * d['wastage_in_percetage']) / 100).toFixed(3);
            this.dataTosave.push(obj);
            this.refresh();
        });
    }
    disbalef() {
        this.disable = true;
    }
    enablef() {
        this.disable = false;
    }
    submit() {
        if (this.action === 'add') {
            this.add();
        }
        else {
            this.update();
        }
    }
    add() {
        console.log("add");
        //let row = JSON.stringify(this.entryform.value)
        let row = new _models__WEBPACK_IMPORTED_MODULE_1__["SemiFinishedImpl"]();
        row.challan = "SEMI-" + this.entryform.get('challan').value;
        let date = new Date();
        console.log(this.entryform.get('recdate').value);
        row.recdate = this.entryform.get('recdate').value;
        row.product = this.entryform.get('product').value;
        row.product_size = this.entryform.get('size').value;
        row.qty = this.entryform.get('qty').value;
        row.status = 'new';
        this.onSizeChange(row);
    }
    format_date(datejson) {
        return datejson['day'] + "-" + datejson['month'] + "-" + datejson['year'];
    }
    refresh() {
        this.entryform.controls['product'].setValue(this.productlist[0]);
        this.entryform.controls['size'].setValue(this.sizedropdown[0]);
        this.entryform.controls['qty'].setValue(null);
        this.action = "add";
    }
    update() {
        let row = this.dataTosave[this.currentActiveRowid];
        row.recdate = this.entryform.get('recdate').value;
        row.product = this.entryform.get('product').value;
        row.product_size = this.entryform.get('size').value;
        row.weight = this.entryform.get('qty').value;
        this.dataTosave[this.currentActiveRowid] = row;
        this.refresh();
    }
    edit(indexOfelement) {
        this.action = "update";
        console.log("edit", indexOfelement);
        this.currentActiveRowid = indexOfelement;
        let ele = this.dataTosave[indexOfelement];
        console.log("ele", ele);
        this.entryform.setValue({
            challan: ele.challan,
            recdate: ele.recdate,
            material: ele.product,
            size: ele.product_size,
            weight: ele.qty
        });
    }
    delete(indexOfelement) {
        console.log("delete", indexOfelement);
        this.dataTosave.splice(indexOfelement, 1);
    }
    save() {
        console.log(this.dataTosave);
        let data = {
            status: this.status,
            data: this.dataTosave
        };
        this.apiService.saveSemiProduct(data).subscribe(e => {
            console.log(e);
            this.ngOnInit();
            this.flag = true;
        });
    }
    editChallan() {
    }
}
SemiFinishedProduct.ɵfac = function SemiFinishedProduct_Factory(t) { return new (t || SemiFinishedProduct)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
SemiFinishedProduct.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SemiFinishedProduct, selectors: [["semifinished"]], decls: 47, vars: 11, consts: [[1, "contact"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "row"], [1, "col-md-12"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "formControlName", "challan", "placeholder", "challan", "required", "", 1, "form-control", 3, "readonly"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], [1, "fa", "fa-search"], [1, "form-group", "col-md-6"], ["for", "inputEmail4", 1, "col-sm-2", "col-form-label"], ["name", "dp", "formControlName", "recdate", "ngbDatepicker", "", "value", "recdate", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["for", "material", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "product", 1, "custom-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "size", 1, "col-sm-2", "col-form-label"], ["id", "id", "formControlName", "size", 1, "custom-select"], ["for", "weight", 1, "col-sm-2", "col-form-label"], ["type", "text", "formControlName", "qty", "required", "", 1, "form-control"], [1, "form-group"], [1, "col-sm-offset-4", "col-sm-4"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "disabled"], ["class", "row", 4, "ngIf"], ["class", "form-group ", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [3, "value"], [1, "table", "table-striped", "table-bordered", "table-hover"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"], [1, "col-sm-offset-4", "col-sm-4", 2, "left", "50%"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "click"]], template: function SemiFinishedProduct_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SemiFinishedProduct_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SemiFinishedProduct_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SEMI-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_Template_button_click_14_listener() { return ctx.searchChallan("Raw"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_Template_button_click_16_listener() { return ctx.editChallan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Edit Challan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SemiFinishedProduct_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SemiFinishedProduct_Template_select_change_30_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SemiFinishedProduct_option_31_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SemiFinishedProduct_option_36_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SemiFinishedProduct_div_45_Template, 27, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SemiFinishedProduct_div_46_Template, 4, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.entryform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productlist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sizedropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.entryform.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.dataTosave == null ? null : ctx.dataTosave.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2VudHJ5L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL19lbnRyeS9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SemiFinishedProduct, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'semifinished',
                templateUrl: './semi_finished.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(acct, router) {
        this.acct = acct;
        this.router = router;
    }
    canActivate(route, state) {
        console.log("can activate");
        return this.acct.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((loginStatus) => {
            const destination = state.url;
            const productId = route.params.id;
            console.log(loginStatus);
            // To check if user is not logged in
            if (!loginStatus) {
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            return true;
            // if the user is already logged in
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // array in local storage for registered users
        let users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;
                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JwtInterceptor {
    intercept(request, next) {
        // add authorization header with jwt token if available
        console.log("JwtInterceptor", JwtInterceptor);
        let token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(request);
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, RawMaterialImp, SemiFinishedImpl, FinishedProductImpl, Sales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawMaterialImp", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["RawMaterialImp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SemiFinishedImpl", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["SemiFinishedImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinishedProductImpl", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["FinishedProductImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sales", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["Sales"]; });




/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User, RawMaterialImp, SemiFinishedImpl, FinishedProductImpl, Sales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialImp", function() { return RawMaterialImp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiFinishedImpl", function() { return SemiFinishedImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedProductImpl", function() { return FinishedProductImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sales", function() { return Sales; });
class User {
}
class RawMaterialImp {
}
class SemiFinishedImpl {
}
class FinishedProductImpl {
    constructor() {
        this.semiProdList = [];
        this.rawMaterialList = [];
    }
}
class Sales {
}


/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiService {
    constructor(http) {
        this.http = http;
    }
    _handle_error(error) {
        if (error.status == 401 || error.status == 302 || error.status == 10 || error.status == 403) {
            window.localStorage.clear();
            window.sessionStorage.clear();
            if ('_body' in error) {
                var link = error._body;
                if (link.indexOf('http') !== -1) {
                    location.href = link;
                }
            }
            else {
                location.reload();
            }
            location.reload();
        }
        ;
        let message = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(message);
    }
    getChallanNo(action) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/challan/${action}`);
    }
    getRawAll() {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/rawproduct`);
    }
    getSemiFinishedAll() {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/semifinishedoduct`);
    }
    getRawCfg(searchparms) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/mappedraw`, searchparms);
    }
    saveRaw(data) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/rawproduct`, data);
    }
    saveSemiProduct(data) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/semifinishedoduct`, data);
    }
    getFinishedlist() {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/finishedproduct`);
    }
    getFinishedPrdCfg(search) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/finishedcfg`, search);
    }
    saveProducttxn(data) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/finishedproduct`, data);
    }
    /*
    get_stock_in_hand(url){
        console.log("uri",url)
        let baseruri = environment.origin + environment.api;
        return this.http.get<Map<String,StockInHand[]>>(`${baseruri}/${url}`);
    }*/
    saveSales(data) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/isales`, data);
    }
    searchChallanRaw(id) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        const type = 'Raw';
        return this.http.get(`${baseruri}/searchChallan/${type}/${id}`);
    }
    searchChallanFin(id) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        const type = 'Fin';
        return this.http.get(`${baseruri}/searchChallan/${type}/${id}`);
    }
    searchChallanSales(id) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        const type = 'Sal';
        return this.http.get(`${baseruri}/searchChallan/${type}/${id}`);
    }
    searchReportOptions() {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/reportoption`);
    }
    getSIH(id) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/stockinhand/${id}`);
    }
    getTransactionData(id, searchParams) {
        console.log("id ", id);
        console.log("searchParams ", searchParams);
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.post(`${baseruri}/transactions/${id}`, searchParams);
    }
    getOptions(id, lookingForid) {
        let baseruri = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;
        return this.http.get(`${baseruri}/dataoptions/${id}/${lookingForid}`);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








//import { decode } from 'punycode';
class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.checkLoginStatus());
    }
    //private UserName    = new BehaviorSubject<string>(localStorage.getItem('username'));
    //private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole'));
    get isLoggedIn() {
        return this.loginStatus.asObservable();
    }
    login(username, password) {
        //let baseuri = environment.origin+environment.api
        //let baseuri = "http://localhost:4000"
        console.log("login");
        let baseuri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].origin + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api;
        console.log(baseuri);
        return this.http.post(`${baseuri}/users/authenticate`, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => {
            // login successful if there's a jwt token in the response
            console.log("result ", result);
            if (result && result.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.loginStatus.next(true);
                localStorage.setItem('loginStatus', '1');
                localStorage.setItem('token', result.token);
                localStorage.setItem('username', result.username);
                localStorage.setItem('expiration', result.expiration);
                localStorage.setItem('userRole', result.userRole);
                //this.UserName.next(localStorage.getItem('username'));
                //this.UserRole.next(localStorage.getItem('userRole'));
            }
            return result;
        }));
    }
    checkLoginStatus() {
        var loginCookie = localStorage.getItem("loginStatus");
        if (loginCookie == "1") {
            if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
                return false;
            }
            // Get and Decode the Token
            const token = localStorage.getItem('token');
            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            // Check if the cookie is valid
            console.log("decoded ", decoded);
            if (decoded.exp === undefined) {
                return true;
            }
            // Get Current Date Time
            const date = new Date(0);
            // Convert EXp Time to UTC
            let tokenExpDate = date.setUTCSeconds(decoded.exp);
            // If Value of Token time greter than 
            if (tokenExpDate.valueOf() > new Date().valueOf()) {
                return true;
            }
            console.log("NEW DATE " + new Date().valueOf());
            console.log("Token DATE " + tokenExpDate.valueOf());
            return false;
        }
        return false;
    }
    logout() {
        // remove user from local storage to log user out
        this.loginStatus.next(false);
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('username');
        localStorage.removeItem('expiration');
        localStorage.setItem('loginStatus', '0');
        this.router.navigate(['/login']);
        console.log("Logged Out Successfully");
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`);
    }
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/` + id);
    }
    register(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/register`, user);
    }
    update(user) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/` + user.id, user);
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/` + id);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");





class AppComponent {
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _entry_raw_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_entry/raw_material */ "./src/app/_entry/raw_material.ts");
/* harmony import */ var _entry_finished_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_entry/finished_material */ "./src/app/_entry/finished_material.ts");
/* harmony import */ var _entry_sales__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_entry/sales */ "./src/app/_entry/sales.ts");
/* harmony import */ var _entry_semi_finished__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_entry/semi.finished */ "./src/app/_entry/semi.finished.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _loader_spinner_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loader/spinner.service */ "./src/app/loader/spinner.service.ts");
/* harmony import */ var _entry_report__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_entry/report */ "./src/app/_entry/report.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component */ "./src/app/component/index.ts");
/* harmony import */ var _component_reports__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/reports */ "./src/app/component/reports/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
        _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
        _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
        _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
        _loader_spinner_service__WEBPACK_IMPORTED_MODULE_22__["SpinnerService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__["NgMultiSelectDropDownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _directives__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
        _home__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _login__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _entry_raw_material__WEBPACK_IMPORTED_MODULE_15__["RawMaterial"],
        _entry_semi_finished__WEBPACK_IMPORTED_MODULE_18__["SemiFinishedProduct"],
        _entry_finished_material__WEBPACK_IMPORTED_MODULE_16__["FinishedMaterial"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
        _entry_sales__WEBPACK_IMPORTED_MODULE_17__["SalesCompoent"],
        _entry_report__WEBPACK_IMPORTED_MODULE_23__["Reports"],
        _directives__WEBPACK_IMPORTED_MODULE_8__["DatePicker"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
        _component__WEBPACK_IMPORTED_MODULE_25__["PrintPageComponent"], _component__WEBPACK_IMPORTED_MODULE_25__["Filters"],
        _component_reports__WEBPACK_IMPORTED_MODULE_26__["RawMaterialReport"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__["NgMultiSelectDropDownModule"].forRoot()
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _directives__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _login__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _entry_raw_material__WEBPACK_IMPORTED_MODULE_15__["RawMaterial"],
                    _entry_semi_finished__WEBPACK_IMPORTED_MODULE_18__["SemiFinishedProduct"],
                    _entry_finished_material__WEBPACK_IMPORTED_MODULE_16__["FinishedMaterial"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                    _entry_sales__WEBPACK_IMPORTED_MODULE_17__["SalesCompoent"],
                    _entry_report__WEBPACK_IMPORTED_MODULE_23__["Reports"],
                    _directives__WEBPACK_IMPORTED_MODULE_8__["DatePicker"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
                    _component__WEBPACK_IMPORTED_MODULE_25__["PrintPageComponent"], _component__WEBPACK_IMPORTED_MODULE_25__["Filters"],
                    _component_reports__WEBPACK_IMPORTED_MODULE_26__["RawMaterialReport"]
                ],
                providers: [
                    _guards__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                    _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                    _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                    _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                    _services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"],
                    _loader_spinner_service__WEBPACK_IMPORTED_MODULE_22__["SpinnerService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _entry_raw_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_entry/raw_material */ "./src/app/_entry/raw_material.ts");
/* harmony import */ var _entry_finished_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_entry/finished_material */ "./src/app/_entry/finished_material.ts");
/* harmony import */ var _entry_sales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_entry/sales */ "./src/app/_entry/sales.ts");
/* harmony import */ var _entry_semi_finished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_entry/semi.finished */ "./src/app/_entry/semi.finished.ts");
/* harmony import */ var _entry_report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_entry/report */ "./src/app/_entry/report.ts");








const appRoutes = [
    { path: '', component: _entry_raw_material__WEBPACK_IMPORTED_MODULE_3__["RawMaterial"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], pathMatch: 'full' },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'raw', component: _entry_raw_material__WEBPACK_IMPORTED_MODULE_3__["RawMaterial"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'semifinished', component: _entry_semi_finished__WEBPACK_IMPORTED_MODULE_6__["SemiFinishedProduct"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'finished', component: _entry_finished_material__WEBPACK_IMPORTED_MODULE_4__["FinishedMaterial"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'sales', component: _entry_sales__WEBPACK_IMPORTED_MODULE_5__["SalesCompoent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'reports', component: _entry_report__WEBPACK_IMPORTED_MODULE_7__["Reports"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/component/filter-comp.ts":
/*!******************************************!*\
  !*** ./src/app/component/filter-comp.ts ***!
  \******************************************/
/*! exports provided: Filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");







class Filters {
    constructor(apiService, fb) {
        this.apiService = apiService;
        this.fb = fb;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.inventory = [];
        this.showlist = [];
        this.selectedItems = [];
        this.selectedsearch = [];
        this.dropdownSettings = {};
        this.searchParam = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.dropdownSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 2,
            allowSearchFilter: this.ShowFilter
        };
        this.myForm = this.fb.group({
            trans: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            searchBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", []),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [])
        });
        this.apiService.searchReportOptions().subscribe(data => {
            console.log("data=======================");
            this.showlist = data['options_search1'];
            console.log("this.showlist ", this.showlist);
            console.log(this.showlist[0]);
            this.myForm.controls['searchBy'].setValue(this.showlist[0]);
            this.reportTypes = data['reportType'];
            this.inventory = this.reportTypes['1'];
        });
    }
    onItemSelect(item) {
        console.log('onItemSelect', item.item_id);
        console.log(this.selectedsearch);
        console.log(this.myForm.get('searchBy').value);
        this.inventory = this.reportTypes[item.item_id];
    }
    onSelectAll(items) {
        console.log('onSelectAll', items);
    }
    toogleShowFilter() {
        this.ShowFilter = !this.ShowFilter;
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
    }
    handleLimitSelection() {
        if (this.limitSelection) {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
        }
        else {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
        }
    }
    submit() {
        let lookfor = (this.myForm.get('searchBy').value)[0]['item_id'];
        let reportType = (this.myForm.get('trans').value)[0]['item_id'];
        let fromDate = this.myForm.get('fromDate').value;
        let toDate = this.myForm.get("toDate").value;
        this.searchParam.emit({ lookfor, reportType, fromDate, toDate });
    }
    printPage() {
        window.print();
    }
}
Filters.ɵfac = function Filters_Factory(t) { return new (t || Filters)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
Filters.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Filters, selectors: [["filter-comp"]], outputs: { searchParam: "searchParam" }, decls: 33, vars: 10, consts: [[1, "row"], [1, "col-md-12"], [1, "contact-form", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-3"], ["for", "material", 1, "col-sm-4", "col-form-label"], ["name", "show", "formControlName", "searchBy", 1, "col-md-3", 3, "placeholder", "data", "disabled", "settings", "onSelect"], ["for", "inputEmail4", 1, "col-sm-4", "col-form-label"], [1, "input-group"], ["name", "fd", "formControlName", "fromDate", "ngbDatepicker", "", "value", "fromDate", 1, "form-control"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["name", "td", "formControlName", "toDate", "ngbDatepicker", "", "value", "toDate", 1, "form-control"], ["e", "ngbDatepicker"], ["for", "size", 1, "col-sm-2", "col-form-label"], ["name", "inventory", "formControlName", "trans", 1, "col-md-3", 3, "placeholder", "data", "disabled", "settings"], [1, "form-group", "col-md-2"], [1, "col-sm-offset-4"], ["type", "submit", 1, "btn", "btn-default", "center-block", 3, "disabled"]], template: function Filters_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function Filters_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Looking for");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ng-multiselect-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function Filters_Template_ng_multiselect_dropdown_onSelect_7_listener($event) { return ctx.onItemSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "from date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Filters_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "To date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Filters_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ng-multiselect-dropdown", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "show")("data", ctx.showlist)("disabled", ctx.disabled)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Choose Inventory")("data", ctx.inventory)("disabled", ctx.disabled)("settings", ctx.dropdownSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.myForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbInputDatepicker"]], styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 2% 1%;\n    height: 400px;\n}\n.inventory[_ngcontent-%COMP%]{\n    background: #ff9b00;\n    padding: 2%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    height: 100%;\n\n}\n.contact-info[_ngcontent-%COMP%]{\n    margin-top:10%;\n}\n.contact-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    margin-bottom: 15%;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\nbutton[_ngcontent-%COMP%]{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n   \n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{\n    margin: 40px;\n  background: rgba(9, 19, 105, 0.3);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);\n}\ntd[_ngcontent-%COMP%] {\n    text-align: center;\n  }\nth[_ngcontent-%COMP%]{\n    text-align: center;\n  }\ni[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 1em;\n  }\nli[_ngcontent-%COMP%]\n  {\n    list-style-type: none;\n    padding:5px;\n  }\nul[_ngcontent-%COMP%]{padding-left:0px;}\n.activebooks[_ngcontent-%COMP%]\n  {\n  border:1px solid #848FD8;\n  padding:0px 10px;\n  margin-top:-2px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  \n  }\n.dropdown[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%]\n  { \n  padding:4px;\n  margin-top:-2px;\n  margin-right:0px;\n  }\n.list[_ngcontent-%COMP%]\n  {\n    padding-left:20px;\n  }\n.dropdown[_ngcontent-%COMP%]\n  {\n    margin-left:-15px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]\n  { display:list-item;\n  list-style-type: none;\n  color: #fff;\n  \n  }\n.submenu[_ngcontent-%COMP%]{\n    padding-left:12px;\n  }\n.submenu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover\n  {\n    color:blue;\n  }\n.category[_ngcontent-%COMP%]::before, .category[_ngcontent-%COMP%]::after, .submenu[_ngcontent-%COMP%]::after\n  {\n    content:\" \";\n    white-space:pre;\n  }\ni.fa.fa-circle-thin[_ngcontent-%COMP%]\n  {\n    color:#00ff74;\n  }\nli[_ngcontent-%COMP%]:hover{\n    background-color:rgba(255, 255, 255, 0.25);\n    cursor:pointer;\n  }\n.pull-right[_ngcontent-%COMP%] {\n    float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbW1vbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtFQUNkLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsdUNBQXVDO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7QUFDQSxHQUFHLGdCQUFnQixDQUFDO0FBQ3BCOztFQUVBLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLGdDQUFnQzs7RUFFaEM7QUFDQTs7RUFFQSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQjtBQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsaUJBQWlCO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXOztFQUVYO0FBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDQTs7SUFFRSxVQUFVO0VBQ1o7QUFDQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBOztJQUVFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsMENBQTBDO0lBQzFDLGNBQWM7RUFDaEI7QUFDQTtJQUNFLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jb21tb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xufVxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogMiUgMSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cbi5pbnZlbnRvcnl7XG4gICAgYmFja2dyb3VuZDogI2ZmOWIwMDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uY29udGFjdC1pbmZve1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuLmNvbnRhY3QtaW5mbyBpbWd7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xufVxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG4uY29sLW1kLTl7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5idXR0b257XG4gICAgYmFja2dyb3VuZDogIzI1Mjc0ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgXG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb257XG4gICAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDksIDE5LCAxMDUsIDAuMyk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGh7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIH1cbiAgbGlcbiAge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgfVxuICB1bHtwYWRkaW5nLWxlZnQ6MHB4O31cbiAgLmFjdGl2ZWJvb2tzXG4gIHtcbiAgYm9yZGVyOjFweCBzb2xpZCAjODQ4RkQ4O1xuICBwYWRkaW5nOjBweCAxMHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgXG4gIH1cbiAgLmRyb3Bkb3duIC5mYS1wbHVzXG4gIHsgXG4gIHBhZGRpbmc6NHB4O1xuICBtYXJnaW4tdG9wOi0ycHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgXG4gIC5saXN0XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgfVxuICAuZHJvcGRvd25cbiAge1xuICAgIG1hcmdpbi1sZWZ0Oi0xNXB4O1xuICB9XG4gIC5zdWJtZW51ID4gbGlcbiAgeyBkaXNwbGF5Omxpc3QtaXRlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgXG4gIH1cbiAgLnN1Ym1lbnV7XG4gICAgcGFkZGluZy1sZWZ0OjEycHg7XG4gIH1cbiAgLnN1Ym1lbnUgPiBsaTpob3ZlclxuICB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfVxuICAuY2F0ZWdvcnk6OmJlZm9yZSwgLmNhdGVnb3J5OjphZnRlciwgLnN1Ym1lbnU6OmFmdGVyXG4gIHtcbiAgICBjb250ZW50OlwiIFwiO1xuICAgIHdoaXRlLXNwYWNlOnByZTtcbiAgfVxuICBpLmZhLmZhLWNpcmNsZS10aGluXG4gIHtcbiAgICBjb2xvcjojMDBmZjc0O1xuICB9XG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Filters, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'filter-comp',
                templateUrl: './filter-comp.html',
                styleUrls: ['./common.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, { searchParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/index.ts":
/*!************************************!*\
  !*** ./src/app/component/index.ts ***!
  \************************************/
/*! exports provided: Filters, PrintPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-comp */ "./src/app/component/filter-comp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return _filter_comp__WEBPACK_IMPORTED_MODULE_0__["Filters"]; });

/* harmony import */ var _printpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printpage.component */ "./src/app/component/printpage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrintPageComponent", function() { return _printpage_component__WEBPACK_IMPORTED_MODULE_1__["PrintPageComponent"]; });





/***/ }),

/***/ "./src/app/component/printpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/printpage.component.ts ***!
  \**************************************************/
/*! exports provided: PrintPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPageComponent", function() { return PrintPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PrintPageComponent_table_0_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r2[col_r4.data]);
} }
function PrintPageComponent_table_0_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PrintPageComponent_table_0_tr_2_td_1_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
} }
function PrintPageComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PrintPageComponent_table_0_tr_2_Template, 2, 1, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.data);
} }
const j = {
    1: "Raw Material",
    2: "Semi Finished Product",
    3: "Finished Product",
    4: "Sales"
};
class PrintPageComponent {
    constructor(apiserive, cdr) {
        this.apiserive = apiserive;
        this.cdr = cdr;
        this.dtRendered = true;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.data = [];
        this.columns = [];
        this.jsonData = { "data": [{ "id": 860, "firstName": "Superman", "lastName": "Yoda" }, { "id": 870, "firstName": "Foo", "lastName": "Whateveryournameis" }, { "id": 590, "firstName": "Toto", "lastName": "Titi" }] };
        this.jsonData1 = { "data": [{ "idx": 860, "name": "Superman", "last": "Yoda" }, { "idx": 870, "name": "Foo", "last": "Whateveryournameis" }] };
    }
    set searchParam(params) {
        let reportType = params['reportType'];
        let fetch = params['lookfor'];
        console.log("reportType====", reportType);
        console.log("fetch ==", fetch);
        if (fetch == 1) {
            this.get_Stock_in_hand(reportType, fetch);
        }
        else {
            this.getTransactions(reportType, fetch, params['fromDate'], params['toDate']);
        }
    }
    get_Stock_in_hand(reportType, fetch) {
        this.repotTitle = j[reportType] + " " + "Stock In hand Report";
        let option = this.apiserive.getOptions(reportType, fetch);
        let SIH = this.apiserive.getSIH(reportType);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([option, SIH]).subscribe(results => {
            // results[0] is our character
            // results[1] is our character homeworld
            let options = results[0];
            let data = results[1];
            //console.log(options)
            this.columns = options;
            //console.log(data)
            this.data = data['data'];
            this.updateData();
        });
    }
    getTransactions(reportType, fetch, fromDate, toDate) {
        this.repotTitle = j[reportType] + " " + "Stock In hand Report";
        let option = this.apiserive.getOptions(reportType, fetch);
        let transaction = this.apiserive.getTransactionData(reportType, { fromDate: fromDate, toDate: toDate });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([option, transaction]).subscribe(results => {
            // results[0] is our character
            // results[1] is our character homeworld
            let options = results[0];
            let data = results[1];
            //console.log(options)
            this.columns = options;
            //console.log(data)
            this.data = data['data'];
            this.updateData();
        });
    }
    ngOnInit() {
        this.generateData();
    }
    ngOnChanges() {
    }
    generateData() {
        console.log("generateData");
        this.dtOptions = {
            data: [],
            columns: []
        };
    }
    updateData() {
        // destroy you current configuration
        console.log("updateData");
        this.dtRendered = false;
        this.dtOptions = {
            columns: this.columns,
            destroy: true,
            searching: true,
            displayLength: 15,
            paginationType: "full_numbers",
            processing: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'pdf', 'excel',
                {
                    extend: 'print',
                    title: this.repotTitle
                }
            ],
            responsive: true
        };
        // make sure your template notices it
        this.cdr.detectChanges();
        // initialize them again
        this.dtRendered = true;
        this.cdr.detectChanges();
    }
    reRenderDataTable() {
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        //  dtInstance.destroy();
        // Call the dtTrigger to rerender again
        //  this.dtTrigger.next();
        // });
    }
}
PrintPageComponent.ɵfac = function PrintPageComponent_Factory(t) { return new (t || PrintPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PrintPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintPageComponent, selectors: [["app-print-page"]], viewQuery: function PrintPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { searchParam: "searchParam" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "table table-striped table-bordered dt-responsive nowrap display", "datatable", "", "style", "width:100%", 3, "dtOptions", 4, "ngIf"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "dt-responsive", "nowrap", "display", 2, "width", "100%", 3, "dtOptions"], [4, "ngFor", "ngForOf"]], template: function PrintPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrintPageComponent_table_0_Template, 3, 2, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dtRendered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], img[_ngcontent-%COMP%] { margin: 0;}  h1[_ngcontent-%COMP%]{font-size: 18pt; font-weight: 500; margin-bottom: 0.5cm;} h2[_ngcontent-%COMP%]{font-size: 16pt; font-weight: 500;} p[_ngcontent-%COMP%]{font-size: 12pt;} .items-group[_ngcontent-%COMP%] {\r\n\r\n  border-style: solid;\r\n\r\n  border-color: black;\r\n\r\n  border-width: 1pt 1pt 1pt 1pt;\r\n\r\n  border-radius: 5pt;\r\n\r\n  padding: 3pt 3pt 3pt 3pt;\r\n\r\n  margin: 9pt 0 9pt 0;\r\n\r\n} .logotipo[_ngcontent-%COMP%] {\r\n\r\n  width: 6cm;\r\n\r\n  height: 4cm;\r\n\r\n  margin: -0.5cm;\r\n\r\n} .label[_ngcontent-%COMP%] { font-weight: 500;} .disclaimer[_ngcontent-%COMP%], .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\r\n  font-size: 10pt;\r\n\r\n} .signature-field[_ngcontent-%COMP%] {\r\n\r\n  padding-bottom: 24pt;\r\n\r\n  border-bottom: solid black 1pt;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ByaW50LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUNBQXFDLFNBQVMsQ0FBQyxFQUFFLGdCQUFnQixFQUVqRSxHQUFHLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUUzRCxHQUFHLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUVyQyxFQUFFLGVBQWUsQ0FBQyxFQUlsQjs7RUFFRSxtQkFBbUI7O0VBRW5CLG1CQUFtQjs7RUFFbkIsNkJBQTZCOztFQUU3QixrQkFBa0I7O0VBRWxCLHdCQUF3Qjs7RUFFeEIsbUJBQW1COztBQUVyQixFQUlBOztFQUVFLFVBQVU7O0VBRVYsV0FBVzs7RUFFWCxjQUFjOztBQUVoQixFQUlBLFNBQVMsZ0JBQWdCLENBQUMsRUFJMUI7O0VBRUUsZUFBZTs7QUFFakIsRUFJQTs7RUFFRSxvQkFBb0I7O0VBRXBCLDhCQUE4Qjs7QUFFaEMsRUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9HQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcmludC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaHRtbCwgYm9keSwgaDEsIGgyLCBoMywgaDQsIHAsIGltZyB7IG1hcmdpbjogMDt9IC8qIG1hcmdpbiByZXNldCovXHJcblxyXG5oMXtmb250LXNpemU6IDE4cHQ7IGZvbnQtd2VpZ2h0OiA1MDA7IG1hcmdpbi1ib3R0b206IDAuNWNtO31cclxuXHJcbmgye2ZvbnQtc2l6ZTogMTZwdDsgZm9udC13ZWlnaHQ6IDUwMDt9XHJcblxyXG5we2ZvbnQtc2l6ZTogMTJwdDt9XHJcblxyXG5cclxuXHJcbi5pdGVtcy1ncm91cCB7XHJcblxyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcblxyXG4gIGJvcmRlci13aWR0aDogMXB0IDFwdCAxcHQgMXB0O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1cHQ7XHJcblxyXG4gIHBhZGRpbmc6IDNwdCAzcHQgM3B0IDNwdDtcclxuXHJcbiAgbWFyZ2luOiA5cHQgMCA5cHQgMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ290aXBvIHtcclxuXHJcbiAgd2lkdGg6IDZjbTtcclxuXHJcbiAgaGVpZ2h0OiA0Y207XHJcblxyXG4gIG1hcmdpbjogLTAuNWNtO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubGFiZWwgeyBmb250LXdlaWdodDogNTAwO31cclxuXHJcblxyXG5cclxuLmRpc2NsYWltZXIsIC5hZGRyZXNzIHAge1xyXG5cclxuICBmb250LXNpemU6IDEwcHQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zaWduYXR1cmUtZmllbGQge1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogMjRwdDtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB0O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuLmNvbnRhaW5lciB7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gIGdyaWQ6IFwibnVtZXJvIG51bWVyb1wiXHJcblxyXG4gICAgICAgIFwibG9nbyBsb2phXCJcclxuXHJcbiAgICAgICAgXCJjbHQtbGJsIGNsdFwiXHJcblxyXG4gICAgICAgIFwiZGEtbGJsIGRhXCI7XHJcblxyXG4gIGdyaWQtcm93LWdhcDogMWNtO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubGFiZWwtZ3JvdXAge1xyXG5cclxuICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB0O1xyXG5cclxuICBib3JkZXItdG9wOiBzb2xpZCBibGFjayAxcHQ7XHJcblxyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHQ7XHJcblxyXG4gIHBhZGRpbmc6IDlwdCAwIDAgOXB0XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbi1ncm91cCB7XHJcblxyXG4gIGJvcmRlci10b3A6IHNvbGlkIGJsYWNrIDFwdDtcclxuXHJcbiAgcGFkZGluZzogOXB0IDAgMCA5cHRcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm51bWVybyB7XHJcblxyXG4gIGdyaWQtYXJlYTogbnVtZXJvO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4ubG9qYSB7XHJcblxyXG4gIGdyaWQtYXJlYTogbG9qYTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ290aXBvIHtcclxuXHJcbiAgZ3JpZC1hcmVhOiBsb2dvO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2xpZW50ZS1sYWJlbCB7XHJcblxyXG4gIGdyaWQtYXJlYTogY2x0LWxibDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmNsaWVudGUge1xyXG5cclxuICBncmlkLWFyZWE6IGNsdDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmRldGFsaGVzLWFzc2lzdGVuY2lhLWxhYmVsIHtcclxuXHJcbiAgZ3JpZC1hcmVhOiBkYS1sYmw7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5kZXRhbGhlcy1hc3Npc3RlbmNpYSB7XHJcblxyXG4gIGdyaWQtYXJlYTogZGE7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-page',
                templateUrl: './print-page.component.html',
                styleUrls: ['./print-page.component.css'],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]]
        }], searchParam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/reports/index.ts":
/*!********************************************!*\
  !*** ./src/app/component/reports/index.ts ***!
  \********************************************/
/*! exports provided: RawMaterialReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rawMaterial_report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rawMaterial.report */ "./src/app/component/reports/rawMaterial.report.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RawMaterialReport", function() { return _rawMaterial_report__WEBPACK_IMPORTED_MODULE_0__["RawMaterialReport"]; });




/***/ }),

/***/ "./src/app/component/reports/rawMaterial.report.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/reports/rawMaterial.report.ts ***!
  \*********************************************************/
/*! exports provided: RawMaterialReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialReport", function() { return RawMaterialReport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RawMaterialReport_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dtOptions", ctx_r0.dtOptions)("dtTrigger", ctx_r0.dtTrigger);
} }
class RawMaterialReport {
    constructor(apiserive, cdRef) {
        this.apiserive = apiserive;
        this.cdRef = cdRef;
        this.title = 'angulardatatables';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dtRendered = true;
    }
    ngOnInit() {
        console.log("recrods================", this.recrods);
        console.log("options ================", this.dtOptions);
    }
    generateData() {
        this.dtOptions = {
            data: this.recrods,
            columns: this.columns,
            destroy: true,
            searching: false,
            displayLength: 15,
            paginationType: "full_numbers",
            processing: true,
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'print'
            ],
            responsive: true
        };
        console.log("dtoptions ", this.dtOptions);
    }
    updateData() {
        // destroy you current configuration
        this.dtRendered = false;
        this.generateData();
        // make sure your template notices it
        this.cdRef.detectChanges();
        // initialize them again
        this.dtRendered = true;
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        // this.dtTrigger.next();
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    rerender() {
        console.log("rerender");
        this.dtElement.dtInstance.then((dtInstance) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
}
RawMaterialReport.ɵfac = function RawMaterialReport_Factory(t) { return new (t || RawMaterialReport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RawMaterialReport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RawMaterialReport, selectors: [["show-records"]], viewQuery: function RawMaterialReport_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dtElement = _t.first);
    } }, inputs: { columns: "columns", recrods: "recrods" }, decls: 1, vars: 1, consts: [["class", "table table-striped table-bordered dt-responsive nowrap", "datatable", "", "style", "width:100%", 3, "dtOptions", "dtTrigger", 4, "ngIf"], ["datatable", "", 1, "table", "table-striped", "table-bordered", "dt-responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"]], template: function RawMaterialReport_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RawMaterialReport_table_0_Template, 1, 2, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dtRendered);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RawMaterialReport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'show-records',
                templateUrl: './rawMaterial.report.html'
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { dtElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular_datatables__WEBPACK_IMPORTED_MODULE_1__["DataTableDirective"]]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recrods: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RAW MATERIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " SEMI FINISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FINISHED PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SALES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "REPORT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        console.log("this.isLoggedIn$", this.isLoggedIn$);
        console.log(this.authService.isLoggedIn);
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }
    onLogout() {
        this.authService.logout();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 3, consts: [["class", "navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar", 4, "ngIf"], [1, "navbar", "navbar-expand", "navbar-dark", "flex-column", "flex-md-row", "bd-navbar"], [1, "navbar-nav-scroll"], [1, "navbar-nav", "bd-navbar-nav", "flex-row"], [1, "nav-item"], ["routerLink", "raw", 1, "nav-link"], ["routerLink", "semifinished", 1, "nav-link"], ["routerLink", "finished", 1, "nav-link"], ["routerLink", "sales", 1, "nav-link"], ["routerLink", "reports", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 18, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isLoggedIn$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".bd-navbar[_ngcontent-%COMP%] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1071;\n}\n.bd-navbar[_ngcontent-%COMP%] {\n    min-height: 4rem;\n    background-color: #563d7c;\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.1);\n}\n.bd-navbar[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 2.5rem;\n    margin-top: .25rem;\n    overflow: hidden;\n    font-size: .875rem;\n}\n.bd-navbar[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%] {\n    font-size: .875rem;\n}\n.bd-navbar[_ngcontent-%COMP%]   .navbar-nav-scroll[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    white-space: nowrap;\n}\n.bd-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: .5rem;\n    padding-left: .5rem;\n    color: #cbbde2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHNFQUFzRTtBQUMxRTtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLW5hdmJhciB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwNzE7XG59XG4uYmQtbmF2YmFyIHtcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNkN2M7XG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjA1KSxpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cbi5iZC1uYXZiYXIgLm5hdmJhci1uYXYtc2Nyb2xsIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuLmJkLW5hdmJhciAubmF2YmFyLW5hdi1zY3JvbGwge1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbn1cbi5iZC1uYXZiYXIgLm5hdmJhci1uYXYtc2Nyb2xsIC5uYXZiYXItbmF2IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJkLW5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XG4gICAgY29sb3I6ICNjYmJkZTI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    deleteUser(id) {
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(() => {
            this.loadAllUsers();
        });
    }
    loadAllUsers() {
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(users => {
            this.users = users;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " hii\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'home.component.html' }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.service */ "./src/app/loader/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(spinnerService, cdRef) {
        this.spinnerService = spinnerService;
        this.cdRef = cdRef;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.spinnerService.getSpinnerObserver().subscribe((status) => {
            this.showSpinner = (status === 'start');
            this.cdRef.detectChanges();
        });
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["class", "page-overlay-wrapper", 4, "ngIf"], [1, "page-overlay-wrapper"], [1, "spinner-1"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".spinner-1[_ngcontent-%COMP%] {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-top: -30px;\r\n    margin-left: -30px;\r\n    border-radius: 50%;\r\n    border: 7px solid lightgray;\r\n    border-top-color: #563d7c;\r\n    background-size: 97%;\r\n    -webkit-animation: spinner 0.7s linear infinite;\r\n            animation: spinner 0.7s linear infinite;\r\n    \r\n  }\r\n  @-webkit-keyframes spinner {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n  @keyframes spinner {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n  @-webkit-keyframes bouncing {\r\n    0% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 30%;\r\n    }\r\n  }\r\n  @keyframes bouncing {\r\n    0% {\r\n      top: 40%;\r\n    }\r\n    100% {\r\n      top: 30%;\r\n    }\r\n  }\r\n  @-webkit-keyframes fadein {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes fadein {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n  \r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .page-overlay-wrapper[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    z-index: 1009;\r\n    background: rgba(112, 191, 93, 0.5);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLCtDQUF1QztZQUF2Qyx1Q0FBdUM7O0VBRXpDO0VBQ0E7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0VBSkU7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0VBRUE7SUFDSTtNQUNFLFFBQVE7SUFDVjtJQUNBO01BQ0UsUUFBUTtJQUNWO0VBQ0Y7RUFQRjtJQUNJO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxRQUFRO0lBQ1Y7RUFDRjtFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRjtFQVJBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLGFBQWE7SUFDYixtQ0FBbUM7RUFDckMiLCJmaWxlIjoic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci0xIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNTYzZDdjO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5NyU7XHJcbiAgICBhbmltYXRpb246IHNwaW5uZXIgMC43cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBcclxuICB9XHJcbiAgQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2luZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRvcDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utb3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwOTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEyLCAxOTEsIDkzLCAwLjUpO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return [{ type: _spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/loader/spinner.service.ts":
/*!*******************************************!*\
  !*** ./src/app/loader/spinner.service.ts ***!
  \*******************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SpinnerService {
    constructor() {
        this.count = 0;
        this.spinner$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    getSpinnerObserver() {
        return this.spinner$.asObservable();
    }
    requestStarted() {
        if (++this.count === 1) {
            this.spinner$.next('start');
        }
    }
    requestEnded() {
        if (this.count === 0 || --this.count === 0) {
            this.spinner$.next('stop');
        }
    }
    resetSpinner() {
        this.count = 0;
        this.spinner$.next('stop');
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ErrorMessage);
} }
function LoginComponent_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.Username.hasError("required"));
} }
function LoginComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.Password.hasError("required"));
} }
class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
    }
    ngOnInit() {
        this.Username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.Password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm = this.formBuilder.group({
            "Username": this.Username,
            "Password": this.Password
        });
        /*
        // reset login status
        this.authenticationService.logout();
        */
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        let userlogin = this.loginForm.value;
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(userlogin.Username, userlogin.Password).subscribe(result => {
            console.log("result ", result);
            let token = result.token;
            console.log(token);
            console.log(result.userRole);
            console.log("User Logged In Successfully");
            this.invalidLogin = false;
            console.log(this.returnUrl);
            this.router.navigateByUrl(this.returnUrl);
        }, error => {
            console.log("error");
            console.log(error);
            this.invalidLogin = true;
            this.ErrorMessage = error.error.loginError;
            console.log(this.ErrorMessage);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 27, vars: 5, consts: [[1, "login-block"], ["class", "text-center mb-3 alert alert-warning alert-dismissible", "role", "alert", 4, "ngIf"], [1, "container", "signLog"], [1, "row"], [1, "col-md-8", "login-sec"], [1, "text-center"], [1, "login-form", "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "UserName", 1, "text-uppercase"], ["formControlName", "Username", "type", "text", "placeholder", "", "required", "", "autofocus", "", 1, "form-control"], ["class", "errorMessage", 4, "ngIf"], ["for", "Password", 1, "text-uppercase"], ["formControlName", "Password", "type", "password", "placeholder", "", "required", "", "autofocus", "", 1, "form-control"], ["type", "submit", "value", "Submit", 1, "btn", "btn-login", "btn-block", 3, "disabled"], [1, "col-md-4", "banner-sec"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "/images/image1.jpg", "alt", "First slide", 1, "d-block", "img-fluid"], [1, "after"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "banner-text"], ["role", "alert", 1, "text-center", "mb-3", "alert", "alert-warning", "alert-dismissible"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "errorMessage"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Username.touched && ctx.Username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Password.touched && ctx.Password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".errorMessage[_ngcontent-%COMP%] {\n    color: red;\n  }\n\n  \n\n  \n\n  body[_ngcontent-%COMP%] {\n  font-family: 'Montserrat', sans-serif;\n}\n\n  \n\n  .login-block[_ngcontent-%COMP%] {\n  background: #FFF5EE;  \n  background: linear-gradient(to bottom, #F5F5F5,#FFFAFA); \n  float: left;\n  width: 100%;\n  padding: 50px;\n  font-family: 'Montserrat', sans-serif;\n  height: 100vh;\n}\n\n  .banner-sec[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  font-family: 'Montserrat', sans-serif;\n  border-radius: 0 10px 10px 0;\n}\n\n  .banner-sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 1000px;\n    height: 500px;\n    overflow: hidden;\n    \n  }\n\n  .banner-sec[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    color: #FFF;\n    display: block;\n    background:#563d7c;\n  }\n\n  .signLog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 15px 20px 0px rgba(0,0,0,0.1);\n}\n\n  .carousel-inner[_ngcontent-%COMP%] {\n  border-radius: 0 10px 10px 0;\n  right: -15px;\n}\n\n  .carousel-item[_ngcontent-%COMP%] {\n  background: #000;\n}\n\n  .carousel-caption[_ngcontent-%COMP%] {\n  text-align: left;\n  left: 5%;\n}\n\n  .login-sec[_ngcontent-%COMP%] {\n  padding: 50px 30px 0 50px;\n  position: relative;\n}\n\n  .login-sec[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 20px;\n    font-size: 13px;\n    text-align: center;\n  }\n\n  .login-sec[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    bottom: 80px;\n    font-size: 13px;\n    text-align: center;\n  }\n\n  .login-sec[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #E36262;\n    }\n\n  .login-sec[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      color: #ff6ec4;\n    }\n\n  .login-sec[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #ff6ec4;\n  }\n\n  .login-sec[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #E36262;\n  }\n\n  .login-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    font-weight: 800;\n    font-size: 30px;\n    color: #563d7c;\n  }\n\n  .login-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n      content: \" \";\n      width: 100px;\n      height: 5px;\n      background: #563d7c;\n      display: block;\n      margin-top: 20px;\n      border-radius: 3px;\n      margin-left: auto;\n      margin-right: auto\n    }\n\n  .btn-login[_ngcontent-%COMP%] {\n  background: #563d7c;\n  color: #fff;\n  font-weight: 600;\n  font-family: 'Montserrat', sans-serif;\n}\n\n  .banner-text[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  bottom: 40px;\n  padding-left: 20px;\n  font-family: 'Montserrat', sans-serif;\n}\n\n  .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: 600;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  .banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n      content: \" \";\n      width: 100%;\n      height: 5px;\n      background: #FFF;\n      display: block;\n      margin-top: 20px;\n      font-family: 'Montserrat', sans-serif;\n      border-radius: 3px;\n    }\n\n  .banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n\n  \n\n  \n\n  .register-block[_ngcontent-%COMP%] {\n  background: #DE6262;  \n  background: linear-gradient(to bottom, #ff6ec4,#7873f5); \n  float: left;\n  width: 100%;\n  padding: 50px;\n  font-family: 'Montserrat', sans-serif;\n}\n\n  .register-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 30px;\n  font-weight: 800;\n  font-size: 30px;\n  color: #ff6ec4;\n}\n\n  .register-sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n    content: \" \";\n    width: 100px;\n    height: 5px;\n    background: #ff6ec4;\n    display: block;\n    margin-top: 20px;\n    border-radius: 3px;\n    margin-left: auto;\n    margin-right: auto\n  }\n\n  .errorMessage[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0VBQ1o7O0VBRUEsOEVBQThFOztFQUNoRixnQ0FBZ0M7O0VBS2hDO0VBQ0UscUNBQXFDO0FBQ3ZDOztFQUVBLGFBQWE7O0VBRWI7RUFDRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFDYywrQkFBK0I7RUFDaEcsdURBQXVELEVBQUUscUVBQXFFO0VBQzlILFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxhQUFhO0FBQ2Y7O0VBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyw0QkFBNEI7QUFDOUI7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0VBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztFQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQU1BO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFJRTtNQUNFLGNBQWM7SUFDaEI7O0VBR0E7TUFDRSxjQUFjO0lBQ2hCOztFQU1GO0lBQ0UsY0FBYztFQUNoQjs7RUFJQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVFO01BQ0UsWUFBWTtNQUNaLFlBQVk7TUFDWixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQjtJQUNGOztFQUVKO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFDQUFxQztBQUN2Qzs7RUFFRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUNBQXFDO0VBQ3ZDOztFQUVFO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIscUNBQXFDO01BQ3JDLGtCQUFrQjtJQUNwQjs7RUFFRjtJQUNFLFdBQVc7RUFDYjs7RUFFRixnQkFBZ0I7O0VBRWhCLGVBQWU7O0VBR2Y7RUFDRSxtQkFBbUIsRUFBRSw4QkFBOEIsRUFDYywrQkFBK0I7RUFDaEcsdURBQXVELEVBQUUscUVBQXFFO0VBQzlILFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7RUFHQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztFQUVFO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQjtFQUNGOztFQUVGO0VBQ0UsVUFBVTtBQUNaOztFQUlBLG1CQUFtQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvck1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBGb250cyB3aWxsIGJlIFVzZWQgR2xvYmFsbHkgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnKTtcbkBpbXBvcnQgXCJ+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3NcIjtcblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qTG9naW4gQ1NTICovXG5cbi5sb2dpbi1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNGRkY1RUU7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjVGNUY1LCNGRkZBRkEpOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRjVGNUY1LCNGRkZBRkEpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuXG4uYmFubmVyLXNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xufVxuXG4gIC5iYW5uZXItc2VjIGltZyB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLypib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwOyovXG4gIH1cblxuICAuYmFubmVyLXNlYyAuYWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDojNTYzZDdjO1xuICB9XG5cbi5zaWduTG9nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMTVweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gIHJpZ2h0OiAtMTVweDtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGVmdDogNSU7XG59XG5cbi5sb2dpbi1zZWMge1xuICBwYWRkaW5nOiA1MHB4IDMwcHggMCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiAgLmxvZ2luLXNlYyAuY29weS10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuXG5cblxuXG4gIC5sb2dpbi1zZWMgLnJlZ2lzdGVyLXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDgwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cblxuICAgIC5sb2dpbi1zZWMgLnJlZ2lzdGVyLXRleHQgYSB7XG4gICAgICBjb2xvcjogI0UzNjI2MjtcbiAgICB9XG5cblxuICAgIC5sb2dpbi1zZWMgLnJlZ2lzdGVyLXRleHQgaSB7XG4gICAgICBjb2xvcjogI2ZmNmVjNDtcbiAgICB9XG5cblxuXG5cblxuICAubG9naW4tc2VjIC5jb3B5LXRleHQgaSB7XG4gICAgY29sb3I6ICNmZjZlYzQ7XG4gIH1cblxuXG5cbiAgLmxvZ2luLXNlYyAuY29weS10ZXh0IGEge1xuICAgIGNvbG9yOiAjRTM2MjYyO1xuICB9XG5cbiAgLmxvZ2luLXNlYyBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzU2M2Q3YztcbiAgfVxuXG4gICAgLmxvZ2luLXNlYyBoMjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogIzU2M2Q3YztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgfVxuXG4uYnRuLWxvZ2luIHtcbiAgYmFja2dyb3VuZDogIzU2M2Q3YztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4gIC5iYW5uZXItdGV4dCBoMiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgICAuYmFubmVyLXRleHQgaDI6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gIC5iYW5uZXItdGV4dCBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4vKkxvZ2luIENTUyBFTkQqL1xuXG4vKlJlZ2lzdGVyIENTUyovXG5cblxuLnJlZ2lzdGVyLWJsb2NrIHtcbiAgYmFja2dyb3VuZDogI0RFNjI2MjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZjZlYzQsIzc4NzNmNSk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZjZlYzQsIzc4NzNmNSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1MHB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5yZWdpc3Rlci1zZWMgaDIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNmZjZlYzQ7XG59XG5cbiAgLnJlZ2lzdGVyLXNlYyBoMjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZjZlYzQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gIH1cblxuLmVycm9yTWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cblxuXG4vKlJlZ2lzdGVyIENTUyBFTkQqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4000',
    origin: 'https://' + document.domain + '/v1/',
    api: 'api',
    envName: 'dev',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/santosc/external_app/web-app-solanki/solanki-industry-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map