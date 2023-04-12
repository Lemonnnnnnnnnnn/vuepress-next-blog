import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const p={},e=t(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>mutation</code> 直译为 “突变，转变”，mutation的属性值会作为事件type名，通过<code>store.commit(type名)</code>调用。它类似 <code>redux</code>中的<code>reducer</code>，两者都应该为<strong>纯函数</strong></p><h2 id="带参" tabindex="-1"><a class="header-anchor" href="#带参" aria-hidden="true">#</a> 带参</h2><p>向mutation提供的参数被称为<code>载荷（payload）</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state <span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">.</span>num
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供payload可以在 <code>commit</code> 的第二个参数定义</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">num</span> <span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>commit时使用对象你可以获得更类似 <code>redux actions</code> 的编写感觉, <code>type</code> 会被读取为mutation的名称，并且整个对象会作为 <code>payload</code> 传入mutation：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token literal-property property">type</span> <span class="token operator">:</span><span class="token string">&#39;increment&#39;</span> <span class="token punctuation">,</span>
                    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，mutation也有它的 <code>mapMutation</code> 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">add</span> <span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","04.mutation.html.vue"]]);export{r as default};
