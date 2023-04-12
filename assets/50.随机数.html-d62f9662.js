import{_ as n,p as a,q as s,a1 as e}from"./framework-c8e009f3.js";const p={},t=e(`<h2 id="math-random" tabindex="-1"><a class="header-anchor" href="#math-random" aria-hidden="true">#</a> Math.random()</h2><p><code>Math.random()</code> 提供0-1之间的随机数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">double</span> x <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> min <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> max <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> y <span class="token operator">=</span> x <span class="token operator">*</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">+</span> min<span class="token punctuation">;</span> <span class="token comment">// 获取10-100之间的随机数</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> y<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="random类" tabindex="-1"><a class="header-anchor" href="#random类" aria-hidden="true">#</a> Random类</h2><p>Math.random()内部是用<code>Random类</code>来实现的，它的核心在于 <strong>随机种子</strong> ，先看基本使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Random</span> r <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5, 10就是种子 ，生成[0,10)之间的int</span>
r<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">// 2071575453， 由系统当前时间（1970年以来的毫秒数）作为种子</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于种子你可以这样理解 ———— 种子就是一个数，根据这个数，JVM通过固定公式生成 0 - 种子值 之间的一个数.例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">LCG</span><span class="token punctuation">(</span><span class="token keyword">double</span> seed<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">25214903917</span> <span class="token operator">*</span> seed <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 一个很大的数与一个很小的数进行位运算</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token keyword">double</span> seed<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> seed <span class="token operator">*</span> <span class="token function">LCG</span><span class="token punctuation">(</span>seed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果种子相同，那么算出来的值总是相同的。</p></div><h2 id="伪随机数和真随机数" tabindex="-1"><a class="header-anchor" href="#伪随机数和真随机数" aria-hidden="true">#</a> 伪随机数和真随机数</h2><p>以上这种通过固定运算得出来的数被称为 <strong>伪随机数</strong></p><p>通过物理现象产生的被称为 <strong>真随机数</strong> ，真随机数可以使用 <code>SecureRandom类</code> 来产生。它的种子由真实随机的现象来提供，比如CPU的热噪声、读写磁盘的字节、网络流量等各种随机事件产生的“熵”。</p>`,12),o=[t];function c(l,i){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","50.随机数.html.vue"]]);export{r as default};
