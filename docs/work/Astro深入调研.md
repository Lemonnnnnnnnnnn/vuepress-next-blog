---
title: Astro深入调研
---

## 是否使用UI框架

这个话题可以从两个方面来谈：

#### 不使用UI框架

**优点：** Astro 提供了自己的一套类似 `jsx` + `vue模板语法` 的语法系统，用该语法系统进行编写代码及编译可以引入最少的JS代码（如果有交互的话）。这意味着**SEO效果比使用UI框架更好，且页面加载速度更快**（下载JS代码总是在页面加载过程中占用最多的时间）。

**缺点：** 虽然 Astro 学习曲线平滑，容易从 `React,Vue` 框架过渡使用，但**依旧存在学习成本**，需要翻阅官方文档。

#### 使用UI框架

**优点：** 没有学习成本，适用于敏捷开发。

**缺点：** 加载更多JS代码。且一般UI框架是在**运行时**通过JS生成页面元素节点，而 Astro 为了达到SEO的效果，直接在**编译时**直接**编译UI框架并生成 html** ，是否能**覆盖全部**UI框架代码，生成静态资源，这是由 Astro 官方来保证的，基于运行时和编译时的区别，**有理由认为使用UI框架的 SEO 效果欠佳**。
 
##  是否引入 CSS 库，如：Tailwind。为什么？

**是否引入 CSS 库：** 使用库与框架最直接的好处就是**加快开发效率**。缺点通常是需要学习成本。

**优点：** 
- `TailwindCss` 可以**自由组合原子CSS模板样式**，从编写CSS代码转为编写 class 类名，加快项目开发效率。
- `Tailwindcss` 提供了相应的 `postcss` 插件，可以过滤未使用的 css 文件，减少项目总体代码大小。

**缺点：** 
- `TailwindCss` 提供的的 class 类名众多，需要一定的记忆技巧，存在学习成本（但学习成本不高，类名几乎为 css 代码的缩写组合，如 `margin-left: 18px` -> `ml-[18px]`）。 
- 因为一个元素上可能挂载大量的 class 类名，可能看起来不美观。

## 是否引入 CSS 预处理器，如：Sass、Less

理论上来说，**CSS库和CSS预处理器择一即可**，CSS预处理器加快了编写原生CSS代码的效率。但引入了 CSS 库，编写原生 CSS 代码的场景大大降低了。

## CSS 与 Astro

Astro 可以通过一行命令集成 `Tailwindcss` 或 `Sass、Less` ，减少了配置项目所花的时间，开箱即用。且其自带 `postcss` 机制。


## 图像资源的存储，src/ 、 public/ 、CDN

图像应该尽可能放在 `src` 而不是 `public` 目录下，假如你引用了 `src` 中的图像资源，`Astro` 会在编译时对图像进行一系列优化：
- 转换为 `webp` 格式
- 懒加载
- 设置宽高并合理压缩，以避免展示时发生瞬间的伸缩问题。

将图片放在 CDN 上可以进行请求分流，减少服务器压力，但会失去 Astro 提供的编译时图片优化。

## 图像资源格式，webp、png、jpg、svg 等

对于小图标（icon）可以考虑 `svg` ，以确保图片的清晰度。

对于大图片比起 `png` , `jpg` ，`webp` 是个更好的选择。


> WebP 无损图片的大小比 PNG 图片小 26% 。WebP 有损图片比采用等效 SSIM 质量索引的同类 JPEG 图片缩小 25-34% 。 ———— webp 官网 [https://developers.google.com/speed/webp?hl=zh-cn](https://developers.google.com/speed/webp?hl=zh-cn)

> WebP的设计目标是在减少文件大小的同时，达到和JPEG、PNG、GIF格式相同的图片质量，并希望借此能够减少图片档在网络上的发送时间。[10]根据Google较早的测试，WebP的无损压缩比网络上找到的PNG档少了45％的文件大小，即使这些PNG档在使用pngcrush和PNGOUT处理过，WebP还是可以减少28％的文件大小[11]。 ———— 维基百科

##  使用 JS 还是 TS

JS 是一个动态类型语言，其能够极大的提高编程自由度，但通常也带来了更多的**运行时错误**。为了保证代码质量，减少运行时错误，选择 TS 进行开发是十分有益的。

> 在 2022 github 统计中，TS已经成为了最流行的语言之一，在使用排名中排行第四，前三名分别是 JS, Python, Java  ————  [https://octoverse.github.com/2022/top-programming-languages](https://octoverse.github.com/2022/top-programming-languages)

Astro 自带对TS的支持。

## 如何解决一套页面模板，用于多个路由页面，如：产品宣传页 （多个产品公用相同的样式，仅内部图文不一样）

Astro 自带 `layout` 结构，你可以在 layouts 文件夹在编写多个模板，并放置插槽 `slot` 填充页面文档：

```html
<!-- layouts/Layout.astro -->
---
interface Props {
	title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>
	</head>
	<body>
		<slot />
	</body>
</html>
<style is:global>
</style>

```

```html
<!-- pages/pageA.astro -->

---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Welcome to Astro.">
	页面内容
</Layout>

<style>

</style>
```