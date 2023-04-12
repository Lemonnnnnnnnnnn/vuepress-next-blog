import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const p={},e=t(`<h2 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try catch</h2><p><code>try catch</code> 语句用于捕获可能出现的错误。如果不需要捕获特定类型的错误，那么使用<code>Exception e</code> 即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token function">processFile</span><span class="token punctuation">(</span>“<span class="token class-name">C</span><span class="token operator">:</span>\\\\test<span class="token punctuation">.</span>txt”<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ok:</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SecurityException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// no read permission:</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// io error:</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// other error:</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span><span class="token punctuation">{</span> <span class="token comment">// 总会被执行</span>
    <span class="token comment">// end </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为当被其中一个catch捕获后，后续的catch不会再继续执行，所以在catch时， <strong>子类必须写在父类前面，否则子类的错误永远不会被捕获</strong>，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token function">processFile</span><span class="token punctuation">(</span>“<span class="token class-name">C</span><span class="token operator">:</span>\\\\test<span class="token punctuation">.</span>txt”<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 永远不会被执行，因为 IOException 是 Exception 的子类</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="捕获多种异常" tabindex="-1"><a class="header-anchor" href="#捕获多种异常" aria-hidden="true">#</a> 捕获多种异常</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 两者没有继承关系</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Bad input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Unknown error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="throws" tabindex="-1"><a class="header-anchor" href="#throws" aria-hidden="true">#</a> throws</h2><p>一个方法可以通过 <code>throws</code> 关键词声明可能抛出的异常类型，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">String</span> charsetName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span> <span class="token punctuation">{</span> <span class="token comment">// 获取字符串的比特表示，如果字符串是由不支持的编码表示的，则获取失败</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行 <code>getBytes</code> 方法时， <strong>必须捕获</strong> 方法声明的异常类型。调用者面临两种选择：</p><ol><li>用 <code>try catch</code> 捕获可能发生的错误</li><li>如果调用者是函数方法，可以选择继续 <code>throws</code> 这个错误</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 选择1</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 选择二</span>
<span class="token comment">// 转换成GBK编码函数</span>
<span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toGBK</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">UnsupportedEncodingException</span><span class="token punctuation">{</span> <span class="token comment">// 继续丢给上层处理 </span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取字符串按GBK编码解析成的比特流</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打印错误日志" tabindex="-1"><a class="header-anchor" href="#打印错误日志" aria-hidden="true">#</a> 打印错误日志</h2><p><code>e.printStackTrace()</code> 可以帮我们打印错误日志</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toGBK</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;GBK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 先记下来再说:</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try" tabindex="-1"><a class="header-anchor" href="#try" aria-hidden="true">#</a> try()</h2><p><code>Try()</code> 即 <em>try-with-resources</em> 是 <em>Java7</em> 中的一个新的异常处理机制，它能够很容易的<strong>关闭在 <code>try-catch</code> 语句中使用的资源</strong>。</p><p>它主要是为了处理 <code>try-finally</code> 下的一种情况。下面是来自[https://blog.csdn.net/andyzhaojianhui/article/details/79876516]https://blog.csdn.net/andyzhaojianhui/article/details/79876516的一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">InputStream</span> input <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        input <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>strong<span class="token punctuation">&gt;</span></span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">;</span>
 
        <span class="token keyword">int</span> data <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>strong<span class="token punctuation">&gt;</span></span>input<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            data <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span>strong<span class="token punctuation">&gt;</span></span>input<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>input <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>strong<span class="token punctuation">&gt;</span></span>input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>strong<span class="token operator">&gt;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，开发者打开了一个文件 <code>file.txt</code> 并在 <code>finally</code> 中将其关闭。但这里有一种场景，在关闭文件<code>file.txt</code>时也有可能会抛出错误（例如文件被占用）。根据异常的调用栈，<code>finally</code> 是最后抛出的错误，它会覆盖 <code>try</code> 中抛出的错误。</p><p>如果我们想要获取 <code>try</code> 语句中抛出的错误，则需要使用 <code>try()</code> 写法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printFileJava7</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">FileInputStream</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        <span class="token keyword">int</span> data <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>data <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            data <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其有两个特性：</p><ul><li>因为 <code>FileInputStream</code> 实现了java中的 <code>java.lang.AutoCloseable</code> 接口，其在 <code>try()</code> 内使用，则在 <code>try</code> 语句结束后会<strong>自动调用自动关闭的接口方法</strong>。</li><li>在自动调用 <code>java.lang.AutoCloseable</code> 接口中抛出的错误不会抑制 <code>try</code> 语句中爆出的错误。即我们抛出的是 <code>try{}</code> 语句中的错误而不是自动关闭时发生的错误。</li></ul>`,25),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","100.异常处理.html.vue"]]);export{k as default};
