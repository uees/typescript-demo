// 类型推论
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// 以下代码虽然没有指定类型，但是会在编译的时候报错：
let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7; // error TS2322: Type 'number' is not assignable to type 'string'.

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

let myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
