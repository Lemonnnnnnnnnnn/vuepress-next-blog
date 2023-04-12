---
title: AHK
date: 2022-06-27 21:18:44

categories:
  - 工具
tags:
  - 
sitemap:
  exclude: false
  changefreq: monthly
---

## 什么是AHK

`AutoHotKey` 是一款自定义热键工具。

## 基本使用

1.  到官网下载软件
2.  新建一个`ahk`文件，编辑输入自定义的快捷键，保存并运行该文件。

举例：
```
; 正无穷
^i::
SendInput +infty
return
```

这样在按下 `ctrl + i` 时会自动输入 `+infty`

## 语法


#### 分隔符

-   `::` 前面的是快捷键，后面的是任务

#### 关键词

-   **^** : `ctrl`
-   **!** : `alt`
-   **#** : `win`，`windows logo` 按键
-   **+** : `shift`

::: tip
1.  以上关键词可以直接组合，例如 `^!l` == `ctrl + alt + l`。
2.  他们以及`{}`如果出现在Send中，会被识别成为命令，为了输入原本的字符
    1.  使用`{}`包裹关键字
    2.  使用`SendRaw` 输入原始字符
:::

-   **;** : 注释符
-   **{...}** : 块作用域，常用于函数定义和控制数据流，如 `{Ctrl down}c{Ctrl up}` 表示一个复制操作
-   **(...)** : 长命令分割，例如：
```
Send,
(
Line 1
Line 2
Apples are a fruit.
)
```
-   **::[a]::[b]** : 输入a再按**终止符，如回车、空格**会输出b
-   **:*:[a]::[b]** : 输入a会**直接替换**输出b




## 常用方法

#### 添加左右信息

```
^b::  ; 以加粗信息为例
Send, {Ctrl down}c{Ctrl up}  ; 复制选择的信息，可用^c 替代, 官方称这样更安全
SendInput, [b]{Ctrl down}v{Ctrl up}[/b] ; 前面添加信息 - 粘贴 - 后面添加信息。 可用 ^v 代替
return  
```
