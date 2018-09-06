// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true


///////// 手动赋值

enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days2["Sun"] === 7); // true
console.log(Days2["Mon"] === 1); // true
console.log(Days2["Tue"] === 2); // true
console.log(Days2["Sat"] === 6); // true

// 未手动赋值的枚举项会接着上一个枚举项递增

// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的

enum Days3 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days3["Sun"] === 3); // true
console.log(Days3["Wed"] === 3); // true

// Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了
console.log(Days3[3] === "Sun"); // false
console.log(Days3[3] === "Wed"); // true

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
enum Days4 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为1
enum Days5 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

console.log(Days5["Sun"] === 7); // true
console.log(Days5["Mon"] === 1.5); // true
console.log(Days5["Tue"] === 2.5); // true
console.log(Days5["Sat"] === 6.5); // true


///////// 常数项和计算所得项

enum Color {Red, Green, Blue = "blue".length};

// 上面的例子中，"blue".length 就是一个计算所得项
// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
// enum Color {Red = "red".length, Green, Blue}; // error TS1061: Enum member must have initializer.


// 枚举类型的常量

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 枚举类型的常量 它会在编译阶段被删除，并且不能包含计算成员
// 上例的编译结果是
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];


//////// 外部枚举

// 外部枚举与声明语句一样，常出现在声明文件中。
declare enum _Directions {
    Up,
    Down,
    Left,
    Right
}

// 之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除