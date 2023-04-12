import{_ as e,M as o,p as c,q as l,R as s,t as n,N as t,a1 as p}from"./framework-c8e009f3.js";const i={},u=p(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">selector</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>

  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    get<span class="token operator">:</span> GetRecoilValue<span class="token punctuation">,</span>
    getCallback<span class="token operator">:</span> GetCallback<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> RecoilValue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>

  set<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      get<span class="token operator">:</span> GetRecoilValue<span class="token punctuation">,</span>
      set<span class="token operator">:</span> SetRecoilState<span class="token punctuation">,</span>
      reset<span class="token operator">:</span> ResetRecoilState<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    newValue<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> DefaultValue<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>

  dangerouslyAllowMutability<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="selector可以接收selector-做多层计算" tabindex="-1"><a class="header-anchor" href="#selector可以接收selector-做多层计算" aria-hidden="true">#</a> selector可以接收selector，做多层计算</h2><p>以汇率转化为例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  atom<span class="token punctuation">,</span>
  useRecoilValue<span class="token punctuation">,</span>
  selector<span class="token punctuation">,</span>
  useRecoilState<span class="token punctuation">,</span>
  RecoilRoot<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;recoil&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">CNY</span> <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">USD</span> <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rate <span class="token operator">=</span> <span class="token number">0.15</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">CNY</span><span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">EUR</span> <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;EUR&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rate <span class="token operator">=</span> <span class="token number">0.94</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">USD</span><span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cny<span class="token punctuation">,</span> setcny<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span><span class="token constant">CNY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> usd <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span><span class="token constant">USD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> eur <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span><span class="token constant">EUR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        人民币：￥
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setcny</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token string">&quot;请输入人民币&quot;</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>美元：$<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>usd<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>欧元：€<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token punctuation">{</span>eur<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Selector</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>RecoilRoot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>RecoilRoot<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Selector<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set方法" tabindex="-1"><a class="header-anchor" href="#set方法" aria-hidden="true">#</a> set方法</h2><p>默认情况下（不提供<code>set方法</code>），<code>selector</code>会返回一个只读对象,它的值只能用<code>useRecoilValue</code>获取————就像入门篇的那样。但是当你传入了<code>set</code>方法后，你就可以用<code>useRecoilState</code>同时获取<code>get和set</code>方法了。</p><p><strong>但是</strong>，这个<code>set</code>方法并不是像你想的那样去修改自身的值，它<strong>只能修改其他atom和selector</strong>。比如我们编写两个相互转化的input框</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  atom<span class="token punctuation">,</span>
  useRecoilValue<span class="token punctuation">,</span>
  selector<span class="token punctuation">,</span>
  useRecoilState<span class="token punctuation">,</span>
  RecoilRoot<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;recoil&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rate <span class="token operator">=</span> <span class="token number">0.15</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">CNY</span> <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">USD</span> <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">CNY</span><span class="token punctuation">)</span> <span class="token operator">*</span> rate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> set <span class="token punctuation">}</span><span class="token punctuation">,</span> newVal</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">CNY</span><span class="token punctuation">,</span> newVal <span class="token operator">/</span> rate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cny<span class="token punctuation">,</span> setcny<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span><span class="token constant">CNY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>usd<span class="token punctuation">,</span> setUsd<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useRecoilState</span><span class="token punctuation">(</span><span class="token constant">USD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        人民币：￥
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>cny<span class="token punctuation">}</span>
          type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setcny</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token string">&quot;请输入人民币&quot;</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        美元：$
        <span class="token operator">&lt;</span>input
          value<span class="token operator">=</span><span class="token punctuation">{</span>usd<span class="token punctuation">}</span>
          type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setUsd</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
          placeholder<span class="token operator">=</span><span class="token string">&quot;请输入人民币&quot;</span>
        <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Selector</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>RecoilRoot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>RecoilRoot<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Selector<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步selectors" tabindex="-1"><a class="header-anchor" href="#异步selectors" aria-hidden="true">#</a> 异步Selectors</h2><p>想象这样一种场景：用户进入一个商品的详情页面，从路由里取出商品ID，用该ID去数据库查询相应的信息并渲染。</p><p>在这种情况下，我们需要一个<strong>异步的Selectors</strong>，用来返回等待数据库返回需要的信息。</p><p>变动点：</p><ul><li>在<code>get</code>方法中使用<code>async和await</code>包裹数据库请求，并返回请求结果</li><li>通过<code>React.Suspense</code>组件来渲染请求请求未返回时的展示数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  atom<span class="token punctuation">,</span>
  useRecoilValue<span class="token punctuation">,</span>
  selector<span class="token punctuation">,</span>
  RecoilRoot<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;recoil&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> idState <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;idState&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> messageState <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;messageState&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/user?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">get</span><span class="token punctuation">(</span>idState<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>messageState<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Selector</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>RecoilRoot<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>loading <span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>UserInfo <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>RecoilRoot<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Selector<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，异步<code>Selectors</code>的原理是在每次<code>useRecoilValue</code>时判断请求的状态，如果还在<code>loading</code>，<code>throw promise</code>给<code>Suspense</code>捕获，渲染<code>loadingUI</code>,并跟踪请求，请求完成后根据<code>.then</code>方法修改状态，渲染结果。</p>`,16),r={href:"/react/react16-react18/60.suspense.html#%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"},k={href:"/react/react16-react18/20.Transition.html#concurrent%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="selectorfamily" tabindex="-1"><a class="header-anchor" href="#selectorfamily" aria-hidden="true">#</a> selectorFamily</h2><p>你可能注意到，我们开篇给出的<code>Selector</code>结构中，并没有给出传入参数的入口。因此，我们想要实现动态传参需要一个新的方法<strong>selectorFamily</strong></p><p>先给出定义：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">selectorFamily</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Parameter<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> 

  <span class="token function-variable function">get</span><span class="token operator">:</span> Parameter <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>get<span class="token operator">:</span> GetRecoilValue<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> RecoilValue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token constant">T</span><span class="token punctuation">,</span>

  set<span class="token operator">?</span><span class="token operator">:</span> Parameter <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      get<span class="token operator">:</span> GetRecoilValue<span class="token punctuation">,</span>
      set<span class="token operator">:</span> SetRecoilValue<span class="token punctuation">,</span>
      reset<span class="token operator">:</span> ResetRecoilValue<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    newValue<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> DefaultValue<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>

  dangerouslyAllowMutability<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Parameter <span class="token operator">=&gt;</span> RecoilState<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说，变化点只有以下两点：</p>`,5),v=s("li",null,[n("调用"),s("code",null,"selectorFamily"),n("函数时传入参数")],-1),m=s("code",null,"selectorFamily",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions",target:"_blank",rel:"noopener noreferrer"},g={href:"/react/react16-react18/40.HOC.html",target:"_blank",rel:"noopener noreferrer"},y=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    atom<span class="token punctuation">,</span>
    useRecoilValue<span class="token punctuation">,</span>
    selectorFamily<span class="token punctuation">,</span>
    RecoilRoot<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;recoil&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fetchUser <span class="token operator">=</span> <span class="token function">selectorFamily</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;messageState&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/user?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span><span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>message<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Selector</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>RecoilRoot<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>loading <span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>UserInfo <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>RecoilRoot<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Selector<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据流例子" tabindex="-1"><a class="header-anchor" href="#数据流例子" aria-hidden="true">#</a> 数据流例子：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    atom<span class="token punctuation">,</span>
    useRecoilValue<span class="token punctuation">,</span>
    RecoilRoot<span class="token punctuation">,</span>
    selector<span class="token punctuation">,</span>
    selectorFamily<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;recoil&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 当前用户的信息</span>
<span class="token keyword">const</span> currentUserInfo <span class="token operator">=</span> <span class="token function">atom</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;userList&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">friendList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 发送请求获取用户信息</span>
<span class="token keyword">const</span> getUserInfo <span class="token operator">=</span> <span class="token function">selectorFamily</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;getUserInfo&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/user?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
            res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 根据当前用户的朋友id，获取朋友的信息</span>
<span class="token keyword">const</span> fetchFriend <span class="token operator">=</span> <span class="token function">selector</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;messageState&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> get <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> friendList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>currentUserInfo<span class="token punctuation">)</span>
        <span class="token keyword">return</span> friendList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">friendId</span> <span class="token operator">=&gt;</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span>friendId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 通过get获取getUserInfo返回的数据</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> friends <span class="token operator">=</span> <span class="token function">useRecoilValue</span><span class="token punctuation">(</span>fetchFriend<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>friends<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Selector</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>RecoilRoot<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>loading <span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>UserInfo <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>RecoilRoot<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Selector<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(w,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("原理： "),s("a",r,[n("手动实现Suspense"),t(a)]),s("a",k,[n("concurrent模式"),t(a)])]),d,s("ol",null,[v,s("li",null,[n("定义"),m,n("函数的get方法时，返回一个新的函数,对这种写法感到不习惯的话可以看一下"),s("a",b,[n("箭头函数"),t(a)]),n("和"),s("a",g,[n("Hoc"),t(a)])])]),y])}const S=e(i,[["render",f],["__file","02.Selector详解.html.vue"]]);export{S as default};
