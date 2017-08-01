# 数值

JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。


avaScript 能够表示的数值范围为21024到2-1023（开区间），超出这个范围的数无法表示。

如果指数部分等于或超过最大正值1024，JavaScript 会返回Infinity

```
0 / 0 // NaN
1 / 0 // Infinity
```

至于具体的最大值和最小值，JavaScript 提供Number对象的MAX_VALUE和MIN_VALUE属性表示



与数值相关的全局方法
============

* parseInt
* parseFloat