// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

// 上面的例子中，我们定义了一个接口 Person
// 接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致

// 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
// 赋值的时候，变量的形状必须和接口的形状保持一致(少了一些属性是不允许的,多一些属性也是不允许的)


////// 可选属性

// 有时我们希望不要完全匹配一个形状，那么可以用可选属性(可选属性的含义是该属性可以不存在)

interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2 = {
    name: 'Tom'
};

let tom3: Person2 = {
    name: 'Tom',
    age: 25
};


/////// 任意属性

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式

interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;  // 使用 [propName: string] 定义了任意string 类型属性
}

let tom4: Person3 = {
    name: 'Tom',
    gender: 'male'
};



// 一旦定义了任意属性，那么 确定属性 和 可选属性 都必须是它的子属性

interface Person4 {
    name: string;  // 确定属性
    // age?: number;  // 可选属性
    [propName: string]: string;  // 任意属性
}


/////// 只读属性

interface Person5 {
    readonly id: number;  // readonly 定义只读属性
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom5: Person5 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// tom5.id = 9527;  // Cannot assign to 'id' because it is a constant or a read-only property.
