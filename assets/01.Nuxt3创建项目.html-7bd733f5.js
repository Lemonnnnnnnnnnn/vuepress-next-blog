import{_ as t,M as o,p as r,q as l,R as e,t as s,N as n,a1 as p}from"./framework-c8e009f3.js";const i={},c=e("h2",{id:"nuxt3是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nuxt3是什么","aria-hidden":"true"},"#"),s(" Nuxt3是什么？")],-1),d=e("p",null,[s("一个实现"),e("strong",null,"无服务器"),s("的web端框架。简单来说，你只需要编写前端代码，后端代码交给云端来实现。")],-1),u=e("p",null,"Nuxt包含以下特点：",-1),v={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"javaScript最新语法",-1),g={href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"热更新、服务端渲染",-1),f={href:"https://github.com/unjs/h3",target:"_blank",rel:"noopener noreferrer"},x=p(`<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p><strong>安装依赖，启动项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx nuxi init nuxt-app
<span class="token builtin class-name">cd</span> nuxt-app
<span class="token function">yarn</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> dev <span class="token parameter variable">-o</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello world</h2><p>打开<code>App.vue</code>文件并修改</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>NuxtWelcome <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
    hello world
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约定式路由" tabindex="-1"><a class="header-anchor" href="#约定式路由" aria-hidden="true">#</a> 约定式路由</h2><p>我们在根目录下新建<code>pages</code>文件夹，并新建<code>pages/foo.vue</code>文件</p><p>这是一个<code>vue3</code>的vue文件模板：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        Foo
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后打开浏览器<code>http://localhost:域名/foo</code></p><p><img src="https://s2.loli.net/2022/04/24/2fm6p1atnueHOlX.png" alt=""></p>`,14);function j(N,w){const a=o("ExternalLinkIcon");return r(),l("div",null,[c,d,u,e("ul",null,[e("li",null,[s("一个拥有交互式、组件化特性的javaScript框架 ： "),e("a",v,[s("vueJs"),n(a)])]),e("li",null,[s("一个代码打包工具： "),e("a",h,[s("webpack5"),n(a)]),s("和"),e("a",k,[s("Vite"),n(a)])]),e("li",null,[s("一个实现"),b,s("的转换编译器"),e("a",g,[s("esbuild"),n(a)])]),e("li",null,[s("一个路由系统"),e("a",m,[s("vue-router"),n(a)])]),e("li",null,[s("一个实现"),_,s("功能的本地服务器"),e("a",f,[s("h3"),n(a)])])]),x])}const y=t(i,[["render",j],["__file","01.Nuxt3创建项目.html.vue"]]);export{y as default};
