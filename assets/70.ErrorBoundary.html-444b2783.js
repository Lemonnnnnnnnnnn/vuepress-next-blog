import{_ as n,p as s,q as a,a1 as e}from"./framework-c8e009f3.js";const t={},o=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>ErrorBoundary错误边界</code>是React 16 引入的一个概念，为了捕获局部渲染错误并展示<strong>降级UI（出错时自己定义展示的组件）</strong>。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>ErrorBoundary</code>不会捕获四种场景下的错误：</p><ol><li>事件处理（点击按钮抛出错误）</li><li>异步代码（<code>setTimeout</code>）</li><li>服务端渲染<code>ssr</code></li><li>自身抛出的错误（一般会用<code>ErrorBoundary</code>包裹子组件）</li></ol></div><p>当一个<code>React Class</code>使用了<code>componentDidCatch</code>或<code>static getDerivedStateFromError</code>中的任意一个（或两个）后，组件便成为了一个用于捕获子组件渲染错误的<code>ErrorBoundary</code></p><h2 id="核心处理函数" tabindex="-1"><a class="header-anchor" href="#核心处理函数" aria-hidden="true">#</a> 核心处理函数</h2><h3 id="componentdidcatch" tabindex="-1"><a class="header-anchor" href="#componentdidcatch" aria-hidden="true">#</a> componentDidCatch</h3><p>在新版本中，推荐在这里进行一些日记打印，而将state更新与渲染的相关逻辑放至<code>getDerivedStateFromError</code>中。</p><p>::: warn 在开发模式下，错误会冒泡至 <code>window</code>，这意味着任何 <code>window.onerror</code> 或 <code>window.addEventListener(&#39;error&#39;, callback)</code> 会中断这些已经被 <code>componentDidCatch()</code> 捕获的错误。 :::</p><h3 id="static-getderivedstatefromerror" tabindex="-1"><a class="header-anchor" href="#static-getderivedstatefromerror" aria-hidden="true">#</a> static getDerivedStateFromError</h3><p>直译： <strong>从错误中获取派生的状态</strong>。主要用于修改state，并根据state展示<strong>降级UI</strong></p><h2 id="基本使用例子" tabindex="-1"><a class="header-anchor" href="#基本使用例子" aria-hidden="true">#</a> 基本使用例子</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hasError</span> <span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hasError</span> <span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>There are something is wrong<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>    
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Middle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Middle <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function c(r,i){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","70.ErrorBoundary.html.vue"]]);export{d as default};
