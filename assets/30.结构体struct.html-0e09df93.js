import{_ as n,p as s,q as a,a1 as e}from"./framework-c8e009f3.js";const t={},p=e(`<h2 id="结构体定义与实例化" tabindex="-1"><a class="header-anchor" href="#结构体定义与实例化" aria-hidden="true">#</a> 结构体定义与实例化</h2><p>首先我们要声明的是：<strong>rust中没有class，它的功能被分成了结构体和枚举</strong>。以下是结构体的基本使用：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">struct</span> <span class="token type-definition class-name">User</span> <span class="token punctuation">{</span>
    active<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    email<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>
    sign_in_count<span class="token punctuation">:</span> <span class="token keyword">u64</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> user1 <span class="token operator">=</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        active<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;someusername123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        email<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;someone@example.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        sign_in_count<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的一些简写和和ES6语法相当相似：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> user2 <span class="token operator">=</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        email<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;another@example.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">..</span>user1  <span class="token comment">// rust中 ..必须放在最后</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">build_user</span><span class="token punctuation">(</span>email<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token class-name">User</span> <span class="token punctuation">{</span>
        active<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        username<span class="token punctuation">,</span>
        email<span class="token punctuation">,</span>
        sign_in_count<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何在结构体中定义一个函数" tabindex="-1"><a class="header-anchor" href="#如何在结构体中定义一个函数" aria-hidden="true">#</a> 如何在结构体中定义一个函数？</h2><p><strong>和js不同，要在对象中定义函数，需要使用<code>impl</code>关键字：</strong></p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Rectangle</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">area</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">u32</span> <span class="token punctuation">{</span> <span class="token comment">// 默认将对象自身的引用作为第一个参数传入</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">self</span><span class="token punctuation">.</span>height
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> rect1 <span class="token operator">=</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
        width<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token macro property">println!</span><span class="token punctuation">(</span>
        <span class="token string">&quot;The area of the rectangle is {} square pixels.&quot;</span><span class="token punctuation">,</span>
        rect1<span class="token punctuation">.</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态方法</strong></p><p>使用<code>struct.fn()</code> 会自动将对象作为函数的第一个参数引入，使用 <code>struct::fn()</code> 则不会：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[derive(Debug)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Rectangle</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">impl</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">generate_square</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token keyword">u32</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token keyword">Self</span> <span class="token punctuation">{</span>
        <span class="token keyword">Self</span> <span class="token punctuation">{</span> <span class="token comment">// Self即Rectangle，看看下面第一种生成结构体的方法，两者写法一致</span>
            width<span class="token punctuation">:</span> size<span class="token punctuation">,</span>
            height<span class="token punctuation">:</span> size<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这两种写法相同</span>
    <span class="token keyword">let</span> rect1 <span class="token operator">=</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
        width<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> rect2 <span class="token operator">=</span> <span class="token class-name">Rectangle</span><span class="token punctuation">::</span><span class="token function">generate_square</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","30.结构体struct.html.vue"]]);export{d as default};
