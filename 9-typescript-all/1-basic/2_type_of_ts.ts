let a : number = 111;

let b : string = "Hello linsz";

let c : boolean = true;

let d : any = 123; // any type

let e : number[] = [1,2,3];

let f : any[] = [1,2,3,'a',true];

let g: unknown = 30;

let h: void = undefined;

// function i(message :string): never {
//     throw new Error(message);
// }

let j:object = {name: 'linsz', age: 18};

let k: string | number = 123;

let l: 'red' | 'blue' | 'green' ;  // only can be red or blue or green  字面量

let m: 1 | 2 | 3; // only can be 1 or 2 or 3  字面量

let n : string[] = ['a','b','c'];

let o : [string, number] = ['linsz', 18]; //tuple类型

enum Color {Red = 1, Green = 2, Blue = 3}; //枚举类型

enum Code {Success , Fail , NotFound };

// nerver 类型的用法
function fn(): never {
    while(true) {

    }
}


// 输出所有的值
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
// console.log(i('I am error'))
console.log(j)
console.log(k)
console.log(l)
console.log(m)
console.log(n)
console.log(o)
console.log(Color)
console.log(Code)

let someValue : unknown = "this is a string";
let strLength : number = (someValue as string).length;

console.log(strLength)

let  someValue1 : any = "this is a string";
let strLength1 : number = (<string> someValue1).length;

console.log(strLength1)
