# markdown基础语法

1.标题的表示方法
==========================

一级标题和二级标题的两种表示方法

```
# 一级标题(语法是井号加上空格)
## 二级标题
```

```
一级标题
=============
二级标题
--------------------
```

三四五六级的就只有一种表示方法
```
### 三级标题
#### 四级标题
##### 五级标题
```

2.超链接和图片
================

链接的两种表示方法

[baidu.com](http://www.biadu.com)

<http://www.biadu.com>

代码:

```
[baidu.com](http://www.biadu.com)

<http://www.biadu.com>
```


![图片的名称](img/header.png)

代码:
```
![图片的名称](图片地址)
```

3:列表
=================

有序列表
* 有序列表(可以用*号)
* 有序列表(可以用*号)
* 有序列表(可以用*号)

- 有序列表(可以用-号)
- 有序列表(可以用-号)
- 有序列表(可以用-号)

+ 有序列表(可以用+号)
+ 有序列表(可以用+号)
+ 有序列表(可以用+号)
+ 有序列表(可以用+号)

代码:
```
* 有序列表(可以用*号)
* 有序列表(可以用*号)
* 有序列表(可以用*号)

- 有序列表(可以用-号)
- 有序列表(可以用-号)
- 有序列表(可以用-号)

+ 有序列表(可以用+号)
+ 有序列表(可以用+号)
+ 有序列表(可以用+号)
+ 有序列表(可以用+号)
```

3.代码块
====================

想在md文件中引入代码块，非常简单，使用`,就是键盘1左边的那个
和注释差不多，也分为两种，分为行内和块,行内使用`inline code`包裹,块使用```block```
包裹

示例：

js中最最常用的是不是`console.log()`函数啊

不一定哦，还有可能是:

```
alert(1111);
    alert(1111);//代码块中的tab，空格，都可以完美的保留哦!
alert(1111);
alert(1111);
```

4.日常书写
============================
日常书写中，最最重要的其实就是写文字啊
这里需要注意的是，如果文字想要换行，怎么办？？？？
得单独空出一行，光回车是没有用的

示例:

```
我这样写
是不会换行的(我这写在code block中，会原样输出，所以你看到的也是换行的,但是如果不是在code block中是不会的)
```



```
我这样写

是不会换行的(回车后得再空一行，才会换行)
```

-----------------------------
到这里起始一般用的话，就足够使用了,就那么简单!!!
-------------------------------





5.引用(展示出来的样式挺好看的)
==============================

>这是我引用的一段话这是我引用的一段话
这是我引用的一段话这是我引用的一段话这
是我引用的一段话这是我引用的一段话这是我引用的一段
话这是我引用的一段话这是我引用的一段话这是我引用
的一段话这是我引用的一段话这是我引用的一段话这是
我引用的一段话这是我引用的一段话

6.表格(我不太喜欢使用表格，但是考虑到使用，还是得说)
====================


|标题1|标题2|标题3|
|-|-|-|
|标题1|标题2|标题3|
|标题1|标题2|标题3|

```
|标题1|标题2|标题3|
|-|-|-|
|标题1|标题2|标题3|
|标题1|标题2|标题3|
```
注意:
* 必须是竖杠，不是斜杠
* 第二行的 `|-|-|-|`不能少



