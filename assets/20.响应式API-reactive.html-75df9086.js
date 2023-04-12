import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const e={},p=t(`<h2 id="ref-和-reactive-有什么区别" tabindex="-1"><a class="header-anchor" href="#ref-和-reactive-有什么区别" aria-hidden="true">#</a> ref 和 reactive 有什么区别？</h2><p><code>reactive</code>相当于<code>ref</code>实现过程中的一个函数，它会<code>Object</code>对象<strong>递归</strong>套上<code>Proxy</code>,使得修改它时能够触发响应式更新（如渲染、computed属性计算等）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> stateReactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">const</span> stateRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stateReactive&#39;</span> <span class="token punctuation">,</span> stateReactive<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stateReactive.foo&#39;</span> <span class="token punctuation">,</span> stateReactive<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stateReactive.foo.bar&#39;</span> <span class="token punctuation">,</span> stateReactive<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stateRef&#39;</span> <span class="token punctuation">,</span> stateRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;stateRef.value&#39;</span> <span class="token punctuation">,</span> stateRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220504155953.png" alt=""></p>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","20.响应式API-reactive.html.vue"]]);export{u as default};
