import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const e={},p=t(`<h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程：</h2><ol><li><code>观察者</code>订阅<code>观察目标</code></li><li><code>观察目标</code>通知<code>观察者</code>，<code>观察者</code>进行处理</li></ol><h2 id="设计" tabindex="-1"><a class="header-anchor" href="#设计" aria-hidden="true">#</a> 设计：</h2><ul><li><code>观察者</code>接受一个函数作为参数，在被通知时执行。</li><li><code>观察目标</code>拥有一个<code>addObserver</code>方法，用于绑定<code>观察者</code></li><li><code>观察目标</code>拥有一个<code>notify</code>方法，用于通知<code>观察者</code></li><li><code>观察目标</code>维护一个<code>观察者列表ObserverList</code>，在<code>notify</code>中通知所有<code>观察者</code></li></ul><h2 id="整体实现" tabindex="-1"><a class="header-anchor" href="#整体实现" aria-hidden="true">#</a> 整体实现：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  观察者</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>update <span class="token operator">=</span> fn
    <span class="token punctuation">}</span>

    <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 观察目标</span>
<span class="token keyword">class</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">addObserver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">notify</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">observer</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            observer<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">通知值是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">回家吃饭了</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span>
    subject<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// main()</span>


module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    Observer<span class="token punctuation">,</span>
    Subject
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","01.简介.html.vue"]]);export{r as default};
