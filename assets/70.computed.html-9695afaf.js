import{_ as n,p as s,q as a,a1 as e}from"./framework-c8e009f3.js";const t={},p=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>当 <code>data</code> 中的数据需要进行一些数据处理后再展示，你就需要 <code>compited</code> 来帮忙</p><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h2><p>tip：</p><ol><li><code>computed</code> 是一个对象，它的每一个属性对象都会挂载到this上，可以直接在模板中引用</li><li>属性对象允许我们定义一个函数，在函数中定义计算逻辑。 <code>computed</code> 实际上是对 <code>data</code> 数据进行计算，因此引用 <code>this.$data</code> 是必不可少的。那么注意，<strong>不要将函数定义成箭头函数以至于丢失this引用</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span>double<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">num</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">double</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">*</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// double : ()=&gt; this.num * 2 // 访问不到this指向</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","70.computed.html.vue"]]);export{d as default};
