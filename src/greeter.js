"use strict";
exports.__esModule = true;
var Programmer = /** @class */ (function () {
    function Programmer() {
    }
    Programmer.prototype.study = function () {
        console.log(name + "学习");
    };
    return Programmer;
}());
exports.Programmer = Programmer;
var p1 = new Programmer();
p1.name = "李四";
p1.study();
var p2 = new Programmer();
p2.name = "韩梅梅";
p2.study();
