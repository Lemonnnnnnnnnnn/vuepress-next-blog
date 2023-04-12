import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const p={},o=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>ref</code>被用来获取子组件的实例。挂载了 <code>ref</code> 属性的元素/子组件实例能够将 <code>ref属性值</code> 作为名字挂载到当前组件的 <code>$refs</code> 上。能够通过 <code>this.$refs</code> 访问。</p><p>因为和 <code>React</code> 用于获取组件实例的 <code>ref</code> 用法差不多，仅作代码留底参考：</p><p>父组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;input&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>my<span class="token operator">-</span>button ref<span class="token operator">=</span><span class="token string">&quot;my-button&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button <span class="token operator">:</span>ref<span class="token operator">=</span><span class="token string">&quot;el =&gt; buttonRef = el&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;print2&quot;</span><span class="token operator">&gt;</span>button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> 
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> myButton <span class="token keyword">from</span> <span class="token string">&#39;./my-button&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        myButton
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">buttonRef</span><span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">focusInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;my-button&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">print2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focusInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">.</span>buttonRef<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button ref<span class="token operator">=</span><span class="token string">&quot;button&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>my button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(l,i){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","60.ref.html.vue"]]);export{u as default};
