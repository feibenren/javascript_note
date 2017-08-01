# 错误处理
Error对象
----------------
JavaScript解析或执行时，一旦发生错误，引擎就会抛出一个错误对象。JavaScript原生提供一个Error构造函数，所有抛出的错误都是这个构造函数的实例。

```
var err = new Error('出错了');
err.message // "出错了"
```
上面代码中，我们调用Error构造函数，生成一个err实例。

Error构造函数接受一个参数，表示错误提示，可以从实例的message属性读到这个参数。

代码解析或运行时发生错误，JavaScript引擎就会自动产生、并抛出一个Error对象的实例，然后整个程序就中断在发生错误的地方，不再往下执行。

根据语言标准，Error对象的实例必须有message属性，表示出错时的提示信息，其他属性则没有提及。大多数JavaScript引擎，对Error实例还提供name和stack属性，分别表示错误的名称和错误的堆栈，但它们是非标准的，不是每种实现都有。

* message：错误提示信息
* name：错误名称（非标准属性）
* stack：错误的堆栈（非标准属性）

JavaScript的原生错误类型
------------
* SyntaxError 是解析代码时发生的语法错误。
* ReferenceError是引用一个不存在的变量时发生的错误。 另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果或者this赋值
* RangeError是当一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。
* TypeError是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
* URIError是URI相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
* EvalError eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再在ES5中出现了，只是为了保证与以前代码兼容，才继续保留。


```
try {
    throw new Error('我抛出了一个错误');
} catch (e) {
    console.log(e.message);
} finally {
    console.log('finally');
}
```