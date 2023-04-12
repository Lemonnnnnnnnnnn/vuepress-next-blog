import{_ as s,p as n,q as a,a1 as e}from"./framework-c8e009f3.js";const t={},o=e(`<h2 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h2><p>通常来说 <code>css</code> 和 <code>js</code> 的动态绑定只能使用js动态生成并添加css来解决。vue3为我们提供了 <code>v-bind</code> 语法糖，让我们看起来能在css中写js：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span><span class="token operator">&gt;</span>text<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup <span class="token operator">&gt;</span>
<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">color</span> <span class="token operator">:</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>text<span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;theme.color&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>实际的值会被编译成 hash 的 CSS 自定义 property，CSS 本身仍然是静态的。自定义 property 会通过内联样式的方式应用到组件的根元素上，并且在源值变更的时候响应式更新。</p></blockquote>`,4),p=[o];function r(l,c){return n(),a("div",null,p)}const d=s(t,[["render",r],["__file","80.style特性.html.vue"]]);export{d as default};
