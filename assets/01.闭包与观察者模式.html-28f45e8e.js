import{_ as t,M as p,p as c,q as o,R as n,t as s,N as i,a1 as a}from"./framework-c8e009f3.js";const l={},u=a(`<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><p><code>闭包</code>是javaScript的一种特性，先看一个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> callbackFunc <span class="token operator">=</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">callbackFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p><ul><li>根据js的<strong>垃圾回收机制</strong>，函数<code>method</code>被执行完毕后，其中的变量均被释放，即<code>变量a</code>被释放。</li><li>但因为返回值是一个函数,函数中用到了<code>变量a</code>，导致<code>变量a</code>无法被垃圾回收机制销毁，依然存储在内存中，因此我们可以在抛出的函数中再次操作<code>变量a</code>，使其+1并被return出函数</li></ul><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>`,6),d={href:"/categories/?category=%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data <span class="token punctuation">,</span> key</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 依赖库</span>
    <span class="token keyword">const</span> val <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dep<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token comment">// 收集依赖</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dep<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token operator">=&gt;</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 执行所有依赖</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span>

<span class="token function">defineReactive</span><span class="token punctuation">(</span>data <span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// 转化data为可观察对象</span>

<span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">$watch</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    target <span class="token operator">=</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">$watch</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>

data<span class="token punctuation">.</span>a
data<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能比较让人疑惑的是这两句代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>dep<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> 

dep<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token operator">=&gt;</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 执行所有依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你看到了<code>target</code>对象，然后向前查找，没有定义。或许你知道根据作用域来判断应该去全局范围内找<code>target</code>对象，嗯，找到了一些相关的信息：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token function">defineReactive</span><span class="token punctuation">(</span>data <span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token comment">// 转化data为可观察对象</span>
<span class="token operator">...</span>

<span class="token keyword">let</span> target <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">function</span> <span class="token function">$watch</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    target <span class="token operator">=</span> fn<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>

<span class="token function">$watch</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或许你眼中它的执行顺序是这样的： 执行<code>defineReactive</code>函数，为<code>data[key]</code>定义<code>get、set</code>方法。<code>get</code>方法向<code>dep</code>数组中push了一个null，<code>set</code>方法执行<code>dep</code>中的null方法...</p><p>嗯？对吗？不对。这里的<code>get</code>和<code>set</code>方法只是定义，我们只有访问<code>data[key]</code>的时候才真正会调用他们，在此之前，他们就像我们第一个例子中被return出的函数一样，保持了对<code>dep、target...</code>等变量的引用，等待真正执行时再去访问相应的值。</p><p>因此这串代码时能够正常运行的，而vue2中的渲染模式同样也应用到了这种技巧。</p>`,8);function k(v,m){const e=p("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("先来看一段观察者模式代码，"),n("a",d,[s("关于观察者模式可以看这里"),i(e)])]),r])}const f=t(l,[["render",k],["__file","01.闭包与观察者模式.html.vue"]]);export{f as default};
