# 概述

为了与普通函数区别，构造函数名字的第一个字母通常大写

构造函数的特点有两个。
------
- 函数体内部使用了this关键字，代表了所要生成的对象实例。
- 生成对象的时候，必需用new命令，调用Vehicle函数。


一个很自然的问题是，如果忘了使用new命令，直接调用构造函数会发生什么事？
----------------
> 这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因，this这时代表全局对象，将造成一些意想不到的结果。

为了保证构造函数必须与new命令一起使用，一个解决办法是，在构造函数内部使用严格模式，即第一行加上use strict。（由于在严格模式中，函数内部的this不能指向全局对象，默认等于undefined，导致不加new调用会报错（JavaScript 不允许对undefined添加属性）。）


new.target
---------

函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined。
```
function f() {
  console.log(new.target === f);
}

f() // false
new f() // true
```

使用这个属性，可以判断函数调用的时候，是否使用new命令。


使用 Object.create() 创建实例对象
-------------

构造函数作为模板，可以生成实例对象。但是，有时只能拿到实例对象，而该对象根本就不是由构造函数生成的，这时可以使用Object.create()方法，直接以某个实例对象作为模板，生成一个新的实例对象。
```
var person1 = {
  name: '张三',
  age: 38,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};

var person2 = Object.create(person1);

person2.name // 张三
person2.greeting() // Hi! I'm 张三.
```
上面代码中，对象person1是person2的模板，后者继承了前者的属性和方法。




new 命令的原理
-------------
- 创建一个空对象，作为将要返回的对象实例
- 将这个空对象的原型，指向构造函数的prototype属性
- 将这个空对象赋值给函数内部的this关键字
- 开始执行构造函数内部的代码


如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
```
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false
```


另一方面，如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
```
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "Object"
```
