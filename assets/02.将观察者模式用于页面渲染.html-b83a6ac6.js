import{_ as n,p as s,q as a,a1 as p}from"./framework-c8e009f3.js";const e={},t=p(`<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象：</h2><ul><li>观察者：<code>render</code>函数</li><li>观察目标：<code>data</code>数据</li></ul><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程：</h2><ol><li><code>render</code>函数订阅<code>data</code>数据</li><li><code>data</code>数据发生变更时,通知<code>render</code>，执行<code>render</code>函数</li></ol><h2 id="设计" tabindex="-1"><a class="header-anchor" href="#设计" aria-hidden="true">#</a> 设计：</h2><ul><li>采用<code>wrapper</code>包裹<code>data</code>使其成为可观测对象，wrapper用<code>Object.defineProperty</code>来实现，使<code>data</code>发生改变时能够通知<code>观察者</code></li><li>对于没有变更的<code>data属性</code>不应该触发渲染，所以需要转换每一个<code>data</code>对象的子属性成为观察目标，包括<code>嵌套对象</code>。使用递归来实现。</li></ul><p>核心函数<code>wrapper</code>，转化<code>data</code>为可观测对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">object</span> 待转化的观察对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">property</span> 属性
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 通知函数
 */</span>
<span class="token keyword">function</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">,</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> object<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// object[property] = newVal // 再次设置object对象，触发set方法，导致死循环</span>
            val <span class="token operator">=</span> newVal <span class="token comment">// 通过引用设置对象值，不触发set方法</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整体实现" tabindex="-1"><a class="header-anchor" href="#整体实现" aria-hidden="true">#</a> 整体实现：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Observer<span class="token punctuation">,</span> Subject <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./basic&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 观察者</span>
<span class="token keyword">class</span> <span class="token class-name">Render</span> <span class="token keyword">extends</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 观察目标</span>
<span class="token keyword">class</span> <span class="token class-name">Data</span> <span class="token keyword">extends</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">transform</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>notify<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> nativeString <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 用Object原型链上的toString方法转换传入的对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nativeString <span class="token operator">===</span> <span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">//#region wrapper</span>
<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">object</span> 待转化的观察对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">property</span> 属性
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 通知函数
 */</span>
<span class="token keyword">function</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">,</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> val <span class="token operator">=</span> object<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// object[property] = newVal // 再次设置object对象，触发set方法，导致死循环</span>
            val <span class="token operator">=</span> newVal <span class="token comment">// 通过引用设置对象值，不触发set方法</span>
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//#endregion wrapper</span>

<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">obj</span> 待转化的观察对象
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 通知函数
 */</span>
<span class="token keyword">function</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">transform</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">wrapper</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
    
    <span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Render</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;进行渲染&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    data<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
    
    object<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
    object<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">3</span>
    
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","02.将观察者模式用于页面渲染.html.vue"]]);export{r as default};
