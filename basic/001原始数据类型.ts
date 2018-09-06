// 布尔值
let isDone: boolean = false;

// let createdByNewBoolean: boolean = new Boolean(1);
// new Boolean() 返回的是一个 Boolean 对象
let createdByNewBoolean: Boolean = new Boolean(1);

// 直接调用 Boolean 也可以返回一个 boolean 类型
let createdByBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6;
// 16 进制
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 空值
// 可以用 void 表示没有任何返回值的函数
function alertName(): void {
    alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;

// Null 和 Undefined
// 可以使用 null 和 undefined 来定义这两个原始数据类型
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
let num: number = undefined;

// 这样不会报错
let u2: undefined;
let num2: number = u;

// 而 void 类型的变量不能赋值给 number 类型的变量
let u3: void;
let num3: number = u;  // index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.
