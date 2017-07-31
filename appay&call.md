# apply && call

这是怎么个东西？？？
就是改变this指针的功能
具体什么时候用呢？？？
某个对象没有特定的方法，但是又想用，这个时候就想到这个就可以了
```
function Person() {}
Person.prototype.say = function(val) {
    console.log(val + ' say');
}
var p1 = new Person();
p1.say('p1');

var dog = {};
p1.say.call(dog, 'dogggg'); //dog没有say方法，但是想用，怎么办？？？用别人的，改变this指针
p1.say.apply(dog, ['dogggggggg']); //appay和call的区别就是appay的参数是一个数组，感觉call更方便
```

-----------------
唯一区别是apply接受的是数组参数，call接受的是连续参数。