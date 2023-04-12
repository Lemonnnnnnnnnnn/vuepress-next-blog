import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const e={},p=t(`<p><code>vue3</code> 中，我们推荐在 <code>setup</code> 函数中编辑代码逻辑————这意味着我们不能通过 <code>this.$store</code> 来访问store对象。因此我们需要 <code>useStore</code> 方法：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        {{count}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>


</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","07.组合式API.html.vue"]]);export{d as default};
