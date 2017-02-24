"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var moment = require("moment/moment");
var myDpStyles = require("./time-picker.component.scss");
var myDpTpl = require("./time-picker.component.html");
var TimePickerComponent = (function () {
    function TimePickerComponent() {
        this.showSecond = true;
        this.viewFormat = 'hh:mm A';
        this.use12Hour = false;
        this.returnObject = 'js';
        this.onSelectTime = new core_1.EventEmitter();
        this.onTimePickerCancel = new core_1.EventEmitter();
        this.hourFormat = 'HH';
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        if (this.use12Hour)
            this.hourFormat = 'hh';
        this.time = this.initTime ? moment(this.initTime, this.viewFormat) : moment();
        if (this.initTime) {
            this.time = this.returnObject === 'string' ? moment(this.initTime, this.viewFormat) :
                moment(this.initTime);
        }
        else {
            var start = moment();
            var remainder = 10 - start.minute() % 10;
            this.time = moment(start).add(remainder, "minutes");
        }
    };
    TimePickerComponent.prototype.increaseHour = function () {
        this.time = this.time.clone().add(1, 'h');
    };
    TimePickerComponent.prototype.decreaseHour = function () {
        this.time = this.time.clone().subtract(1, 'h');
    };
    TimePickerComponent.prototype.increaseMinute = function () {
        this.time = this.time.clone().add(10, 'm');
    };
    TimePickerComponent.prototype.decreaseMinute = function () {
        this.time = this.time.clone().subtract(10, 'm');
    };
    TimePickerComponent.prototype.increaseSecond = function () {
        this.time = this.time.clone().add(1, 's');
    };
    TimePickerComponent.prototype.decreaseSecond = function () {
        this.time = this.time.clone().subtract(1, 's');
    };
    TimePickerComponent.prototype.selectTime = function () {
        var selectTime = this.parseToReturnObjectType(this.time);
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    };
    TimePickerComponent.prototype.selectNow = function () {
        var selectTime = this.parseToReturnObjectType(moment());
        this.onSelectTime.emit(selectTime);
        this.cancelTimePicker();
        return;
    };
    TimePickerComponent.prototype.clearTime = function () {
        this.onSelectTime.emit(null);
        this.cancelTimePicker();
        return;
    };
    TimePickerComponent.prototype.cancelTimePicker = function () {
        this.onTimePickerCancel.emit(false);
        return;
    };
    TimePickerComponent.prototype.parseToReturnObjectType = function (time) {
        switch (this.returnObject) {
            case 'js':
                return time.toDate();
            case 'string':
                return time.format(this.viewFormat);
            case 'moment':
                return time;
            case 'json':
                return time.toJSON();
            case 'array':
                return time.toArray();
            case 'iso':
                return time.toISOString();
            case 'object':
                return time.toObject();
            default:
                return time;
        }
    };
    return TimePickerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "initTime", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "showSecond", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "viewFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "use12Hour", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "returnObject", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "onSelectTime", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "onTimePickerCancel", void 0);
TimePickerComponent = __decorate([
    core_1.Component({
        selector: 'time-picker',
        template: myDpTpl,
        styles: [myDpStyles],
    }),
    __metadata("design:paramtypes", [])
], TimePickerComponent);
exports.TimePickerComponent = TimePickerComponent;
//# sourceMappingURL=time-picker.component.js.map