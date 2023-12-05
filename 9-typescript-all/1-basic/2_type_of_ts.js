var a = 111;
var b = "Hello linsz";
var c = true;
var d = 123; // any type
var e = [1, 2, 3];
var f = [1, 2, 3, 'a', true];
var g = 30;
var h = undefined;
// function i(message :string): never {
//     throw new Error(message);
// }
var j = { name: 'linsz', age: 18 };
var k = 123;
var l; // only can be red or blue or green  字面量
var m; // only can be 1 or 2 or 3  字面量
var n = ['a', 'b', 'c'];
var o = ['linsz', 18]; //tuple类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
; //枚举类型
var Code;
(function (Code) {
    Code[Code["Success"] = 0] = "Success";
    Code[Code["Fail"] = 1] = "Fail";
    Code[Code["NotFound"] = 2] = "NotFound";
})(Code || (Code = {}));
;
// nerver 类型的用法
function fn() {
    while (true) {
    }
}
// 输出所有的值
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
// console.log(i('I am error'))
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);
console.log(Color);
console.log(Code);
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
console.log(strLength1);
