---
title: 为什么选用Astro
---

## 为什么选用Astro

#### SEO 搜索引擎优化

`React, Vue` 等 **SPA** (单页应用 `Single Page Application`) 常将页面及其所有资源打包成一个或多个 js 文件，通过动态引入 js 文件生成渲染视图。而网络爬虫一般在下载完 html 文件后即开始爬取内容，因为此时 js 资源还没有被动态引入，因此爬虫无法爬取到网页内容，导致网站内容无法被基于爬虫的搜索引擎很好的收录。

`Astro` 是一个 **MPA** (多页应用 `Multiple Page Application`) 框架，他能够在编译时根据路由生成多个 html 文件，无需动态加载多余的 js 资源辅助页面渲染，SEO效果良好。

#### 开发便捷

Astro 不但有自己原生的模板语法，同时他也支持多种 UI 框架，包括 React, Preact, Svelte, Vue, Solid, Lit 等等。学习曲线平滑，可以轻松从其他开发框架过渡到 Astro 开发。

并且有翻译质量优秀的中文文档：![https://docs.astro.build/zh-cn/getting-started/](https://docs.astro.build/zh-cn/getting-started/) 。

#### 交互良好、性能优秀

**Astro 默认生成不含客户端 JavaScript 的网站**。 如果使用前端框架 `React、Preact、Svelte、Vue、SolidJS、AlpineJS` 或 `Lit`，Astro 会自动提前将它们渲染为 HTML，然后再除去所有 JavaScript。这使得 Astro 创建的网站默认非常迅速，因为 Astro 帮你自动清除了所有页面上的 JavaScript。

但是有些时候，响应式的 UI 是需要客户端 JavaScript 的。你不该将整个页面做成一个像 SPA（单页面应用）一样的 JavaScript 应用，相反，Astro 允许你创建岛屿。

![](https://i2.100024.xyz/2023/11/13/shc7xp.webp)

Astro 群岛（又称组件群岛）是 Astro 开创的一种新 Web 架构模式。可交互的岛屿会通过动态加载 js 生成，他不会阻塞首屏的加载，这使 Astro 的性能相当优秀。

PS：关于性能，在 `astro` 官方的一篇[报告](https://astro.build/blog/2023-web-framework-performance-report/)中有详细的多框架测试结果对比，在 【谷歌核心网络指标】、【首次输入延迟】、【累计布局移位】、【最大内容绘制】等指标中，Astro 均拥有着极好的表现。下表是谷歌核心网络指标的统计图：

![](https://i2.100024.xyz/2023/11/13/u64mfe.webp)

**关于谷歌核心网络指标**:综合三种统计指标，分别为：
- LCP（最大内容渲染时间）：从用户请求网址到在视口中渲染最大可见内容元素所需的时间。最大的元素通常是图片或视频，也可能是大型块级文本元素。此指标很重要，因为它反映了访问者看到的网址实际加载速度。
- FID (首次输入延迟)：从用户首次与您的网页互动（点击某个链接、点按某个按钮，等等）到浏览器响应此次互动之间的用时。这种衡量方案的对象是被用户首次点击的任何互动式元素。此指标在用户需要执行操作的网页上非常重要，因为可据此判断网页进入互动状态前的延迟时间。
- CLS (累计布局移位)：CLS 会衡量在网页的整个生命周期内发生的所有意外布局偏移的得分总和。得分是零到任意正数，其中 0 表示无偏移，且数字越大，网页的布局偏移越大。此指标很重要，因为当用户尝试与网页元素互动时，如果网页元素出现偏移，这会导致糟糕的用户体验。如果您似乎找不出得高分的原因，请尝试与该网页互动，看看这对得分有何影响。

首次输入延迟：

![](https://i2.100024.xyz/2023/11/13/u9prwm.webp)

累计布局移位:

![](https://i2.100024.xyz/2023/11/13/uatdbj.webp)

最大内容渲染时间：

![](https://i2.100024.xyz/2023/11/13/ubdj4y.webp)


## SEO配置

#### sitemap

Sitemap 可方便网站管理员通知搜索引擎他们网站上有哪些可供抓取的网页。最简单的 Sitemap 形式，就是XML 文件，在其中列出网站中的网址以及关于每个网址的其他元数据（上次更新的时间、更改的频率以及相对于网站上其他网址的重要程度为何等），以便搜索引擎可以更加智能地抓取网站。

Astro 提供了自动生成 sitemap 的插件。

在 `astro.config.mjs` 文件配置 `site` 为部署网址。

然后运行 `pnpm build` 命令，会自动将生成的所有 html 文件以 `site/路径` 的形式生成 `sitemap-0.xml` 与 `sitemap-index` 文件.

验证网站地图已经生成后，你可以将它们添加到网站的 <head> 和爬虫读取的 robots.txt 文件中。

```html
<!-- src/layouts/Layout.astro -->
<head>
  <link rel="sitemap" href="/sitemap-index.xml" />
</head>
```

```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://<YOUR SITE>/sitemap-index.xml
```

更多使用参考：https://docs.astro.build/zh-cn/guides/integrations-guide/sitemap/#%E4%BD%BF%E7%94%A8




