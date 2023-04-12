import{_ as n,p as s,q as a,a1 as e}from"./framework-c8e009f3.js";const p={},t=e(`<h2 id="链式调用类" tabindex="-1"><a class="header-anchor" href="#链式调用类" aria-hidden="true">#</a> 链式调用类</h2><p>有时候我们可以让类的方法返回自身，这样我们就可以不断对方法进行链式调用，增强可读性。例如我们可以这样实现一个累加器：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">package1</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Adder</span> adder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adder</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        adder
        <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>adder<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Adder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Adder</span><span class="token punctuation">(</span><span class="token keyword">int</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Adder</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">+=</span> a<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javabean" tabindex="-1"><a class="header-anchor" href="#javabean" aria-hidden="true">#</a> JavaBean</h2><p><code>JavaBean</code> 是一种符合 <strong>class规范</strong> 的类组件。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 读方法:</span>
<span class="token keyword">public</span> <span class="token class-name">Type</span> <span class="token function">getXyz</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 读布尔值:</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isChild</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 写方法:</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setXyz</span><span class="token punctuation">(</span><span class="token class-name">Type</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function l(o,i){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","80.其他类相关的知识.html.vue"]]);export{d as default};
