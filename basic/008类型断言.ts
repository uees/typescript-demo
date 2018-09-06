// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 语法
// <类型>值
// 值 as 类型

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，此时可以使用类型断言：
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}


// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function toBoolean(something: string | number): boolean {
    // return <boolean>something;  // error TS2352: Type 'string | number' cannot be converted to type 'boolean'.
    return true;
}
