# 数组
构造函数
----------
Array是JavaScript的内置对象，同时也是一个构造函数，可以用它生成新的数组。
Array构造函数有一个很大的问题，就是不同的参数，会导致它的行为不一致。

```
// 无参数时，返回一个空数组
new Array() // []

// 单个正整数参数，表示返回的新数组的长度
new Array(1) // [ undefined ]
new Array(2) // [ undefined x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非正整数参数（比如字符串、布尔值、对象等），
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']
```

从上面代码可以看到，Array作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。


Array.isArray()
------------
Array.isArray方法用来判断一个值是否为数组。它可以弥补typeof运算符的不足。


* push:push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
* pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。（push和pop结合使用，就构成了“后进先出”的栈结构（stack）。）

* join方法以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔。
* concat方法用于多个数组的合并。它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组**不变**。

* shift方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。
* unshift方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
* reverse方法用于颠倒数组中元素的顺序，返回改变后的数组。注意，该方法将改变原数组。
* slice方法用于提取原数组的一部分，返回一个新数组，原数组不变。
* splice方法用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。
* sort方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。
* map方法对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。
* forEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法。
forEach方法的参数与map方法一致，也是一个函数，数组的所有成员会依次执行该函数。它接受三个参数，分别是当前位置的值、当前位置的编号和整个数组。
* filter方法的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
* 这两个方法类似“断言”（assert），用来判断数组成员是否符合某种条件。
它们接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组。
some方法是只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false。
* every方法则是所有数组成员的返回值都是true，才返回true，否则false。
* reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。
* indexOf()，lastIndexOf()indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。
* lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

链式使用
--------
上面这些数组方法之中，有不少返回的还是数组，所以可以链式使用。
```
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(alert);
```
slice && splice都可以删除元素，slice最多两个参数，splice没有限制
---------
arr.slice(start_index, upto_index);//
arr.splice(index, count_to_remove, addElement1, addElement2, ...);

map
-----------
```
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
```

map方法还可以接受第二个参数，表示回调函数执行时this所指向的对象。


> forEach方法与map方法很相似，也是遍历数组的所有成员，执行某种操作，但是forEach方法一般不返回值，只用来操作数据。如果需要有返回值，一般使用map方法。




