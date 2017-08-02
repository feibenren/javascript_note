# prototype 对象

prototype 属性的作用
----------
JavaScript 的每个对象都继承另一个对象，后者称为“原型”（prototype）对象。只有null除外，它没有自己的原型对象。

原型对象上的所有属性和方法，都能被派生对象共享。这就是 JavaScript 继承机制的基本设计。

通过构造函数生成实例对象时，会自动为实例对象分配原型对象。每一个构造函数都有一个prototype属性，这个属性就是实例对象的原型对象。

> 总结一下，原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作从原型对象衍生出来的子对象。

由于 JavaScript 的所有对象都有构造函数（只有null除外），而所有构造函数都有prototype属性（其实是所有函数都有prototype属性），所以所有对象都有自己的原型对象。

> 通过构造函数的原型对象，怎么表示???? __proto__



```
function Person() {
    this.name = 'wangbing';
}
Person.prototype.say = function() {
    console.log('say');
}
var p1 = new Person();

console.log(p1.__proto__);
```


constructor 属性
----------
prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。

```
function P() {}

P.prototype.constructor === P
// true
```
由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承。
```
function P() {}
var p = new P();

p.constructor
// function P() {}

p.constructor === P.prototype.constructor
// true

p.hasOwnProperty('constructor')
// false
```
上面代码中，p是构造函数P的实例对象，但是p自身没有contructor属性，该属性其实是读取原型链上面的P.prototype.constructor属性。

constructor属性的作用，是分辨原型对象到底属于哪个构造函数。


instanceof 运算符
-------------
instanceof运算符返回一个布尔值，表示指定对象是否为某个构造函数的实例。



