// 「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组的项中不允许出现其他的类型
// let fibonacci: number[] = [1, '1', 2, 3, 5];  // Type 'number | string' is not assignable to type 'number'.

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// 因此以下 push 方法只允许传入 number 类型的参数
// fibonacci.push('8');  // 传了一个 string 类型的参数，所以报错了。
fibonacci.push(8);


/////// 数组泛型

// 也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];


/////// 用接口表示数组

interface NumberArray {
    [index: number]: number;
}

let fibonacci3: NumberArray = [1, 1, 2, 3, 5];


/////// any 在数组中的应用

// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型
let list: any[] = ['hehe', 25, { website: 'http://uaresb.com' }];


/////// 类似数组

// 类似数组（Array-like Object）不是数组类型，比如 arguments

function sum() {
    // let args: number[] = arguments;  // error, 因为 arguments 不是数组
    let args: IArguments = arguments;
}

// 事实上常见的类似数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
