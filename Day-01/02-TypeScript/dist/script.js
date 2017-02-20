/*class SalaryCalculator{
    public basic : number = 0;
    public hra : number = 0;
    public da : number = 0;
    public tax : number = 0;
    public salary : number = 0;

    calculate(){
        var gross = this.basic + this.hra + this.da;
        var net = gross * ((100-this.tax)/100);
        this.salary = net;
    }
}*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Events = (function () {
    function Events() {
        this._eventListeners = {};
    }
    Events.prototype.onChange = function (attrName, fn) {
        this._eventListeners[attrName] = this._eventListeners[attrName] || [];
        this._eventListeners[attrName].push(fn);
    };
    Events.prototype.trigger = function (attrName) {
        var eventListeners = this._eventListeners[attrName] || [];
        for (var i = 0; i < eventListeners.length; i++)
            eventListeners[i]();
    };
    return Events;
}());
;
var SalaryCalculator = (function (_super) {
    __extends(SalaryCalculator, _super);
    function SalaryCalculator() {
        _super.apply(this, arguments);
        this._data = {
            basic: 0,
            hra: 0,
            da: 0,
            tax: 0,
            salary: 0
        };
    }
    SalaryCalculator.prototype.get = function (attrName) {
        return this._data[attrName];
    };
    SalaryCalculator.prototype.set = function (attrName, value) {
        if (this._data[attrName] === value)
            return;
        this._data[attrName] = value;
        this.trigger(attrName);
    };
    return SalaryCalculator;
}(Events));
