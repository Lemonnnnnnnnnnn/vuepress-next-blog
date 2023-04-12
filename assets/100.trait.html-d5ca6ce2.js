import{_ as n,p as s,q as a,a1 as e}from"./framework-c8e009f3.js";const t={},p=e(`<h2 id="打印方法" tabindex="-1"><a class="header-anchor" href="#打印方法" aria-hidden="true">#</a> 打印方法</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Rectangle</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> rect1 <span class="token operator">=</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
        width<span class="token punctuation">:</span> <span class="token macro property">dbg!</span><span class="token punctuation">(</span><span class="token number">30</span> <span class="token operator">*</span> scale<span class="token punctuation">)</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">dbg!</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>rect1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Rectangle</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rect1 <span class="token operator">=</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
        width<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;rect1 is {:#?}&quot;</span><span class="token punctuation">,</span> rect1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","100.trait.html.vue"]]);export{r as default};
