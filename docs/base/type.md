# 数据类型

* 数值（number）：整数和小数（比如1和3.14）
* 字符串（string）：字符组成的文本（比如”Hello World”）
* 布尔值（boolean）：true（真）和false（假）两个特定值
* undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
* null：表示无值，即此处的值就是“无”的状态。
* 对象（object）：各种值组成的集合
    - 狭义的对象（object）
    - 数组（array）
    - 函数（function）

> JavaScript把函数当成一种数据类型，可以像其他类型的数据一样，进行赋值和传递，这为编程带来了很大的灵活性，体现了JavaScript作为“函数式语言”的本质


 typeof运算符
 ===========
 JavaScript有三种方法，可以确定一个值到底是什么类型。

* instanceof运算符
* typeof运算符
* Object.prototype.toString方法   

```
console.log( typeof 111);//number
console.log( typeof '111');//string
console.log( typeof false);//boolean
console.log( typeof [1,2,3]);//object
console.log( typeof {name:111});//object
console.log( typeof function(){});//function
console.log( typeof null);//object
console.log( typeof undefined);//undefined
console.log( typeof v);//undefined
```

> typeof 无法区分array(object)，null(object)这两个，其他的都可以

> typeof 一般用在 if判断上，比如:

```
if (v) {
  // 可能会报错，如果v没声明
}
if (typeof v === "undefined") {
  // ...
}
```
> typeof 没法区分 array 和object

```
var o = {};
var a = [];

console.log(o instanceof Array); // false
console.log(a instanceof Array); // true
```
