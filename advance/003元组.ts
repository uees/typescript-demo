// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

// 定义一对值分别为 string 和 number 的元组
let xcatliuIsSB: [string, number] = ['Xcat Liu', 25];

// 当赋值或访问一个已知索引的元素时，会得到正确的类型
let xcatliuIsSB2: [string, number];
xcatliuIsSB2[0] = 'Xcat Liu';
xcatliuIsSB2[1] = 25;

// 访问一个已知索引的元素
xcatliuIsSB2[0].slice(1);
xcatliuIsSB2[1].toFixed(2);

// 可以只赋值其中一项
let xcatliuIsSB3: [string, number];
xcatliuIsSB3[0] = 'Xcat Liu';

// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let xcatliuIsSB4: [string, number];
xcatliuIsSB4 = ['Xcat Liu', 25];



///////// 越界的元素

// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

xcatliuIsSB = ['Xcat Liu', 25];
xcatliuIsSB.push('http://uaresb.com/');
// xcatliuIsSB.push(true);  // error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
