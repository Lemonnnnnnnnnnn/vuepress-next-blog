import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const e={},p=t(`<h2 id="两个原则" tabindex="-1"><a class="header-anchor" href="#两个原则" aria-hidden="true">#</a> 两个原则</h2><ol><li>不能在条件、循环、嵌套函数中使用 <code>hooks</code></li><li>不能在非 <code>react function</code>中使用 <code>hooks</code></li></ol><p>我们重点讨论第一点。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><p>假设这样一种场景：</p><ul><li>有些 <code>state</code> 只需要初始化一次，所以我们在页面第一次加载时 <code>useState</code>它，后续只对他做<code>set</code>操作。</li><li>我们还有一些其他的<code>state</code>需要渲染</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> mounted <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">_setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;liming&#39;</span><span class="token punctuation">)</span>
            mounted <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> setName <span class="token comment">// 抛出setName方法让按钮可以调用</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> setName <span class="token operator">=</span> <span class="token function">_setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>change name<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们点击 <code>change name</code>按钮的时候，页面渲染发生了一些错误，但打印语句在 <code>return</code>之前，所以依然打印出了 <code>age</code>的值： <strong>zhangsan</strong>。</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/rule-of-hooks.gif" alt=""></p><p>为什么我们调用 <code>setName</code> 进行修改却修改到了 <code>age</code>的<code>hooks值</code>呢？那么我们需要对 <code>useState</code> 底层发生了什么进行简单的理解.</p><p>在<code>react</code>底层，每一个 <code>hooks</code> 在初始化时会用链表连接到一起。当后续再次调用 <code>hooks</code>时，会利用链表指针不断后移来获取每一个 <code>getter/setter</code>对象。</p><h2 id="模拟" tabindex="-1"><a class="header-anchor" href="#模拟" aria-hidden="true">#</a> 模拟</h2><p>既然知道了 <code>hooks</code>是用链表连接在一起的，那么我们可以简单实现一个链表。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">addNext</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 添加后续节点</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> node
    <span class="token punctuation">}</span>

    <span class="token function-variable function">editNode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 用于setState</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果初始化时，每调用一次 <code>useState</code> 就动态添加一个新节点，否则则返回指针指向的内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 头节点为null</span>
<span class="token keyword">let</span> currentNode <span class="token operator">=</span> root <span class="token comment">// 指针动态指向当前节点</span>
<span class="token keyword">let</span> init <span class="token operator">=</span> <span class="token boolean">false</span> 

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>init<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 初始化hooks</span>
        currentNode<span class="token punctuation">.</span><span class="token function">addNext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 添加一个新hooks节点</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next
        <span class="token keyword">return</span> <span class="token punctuation">[</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> currentNode<span class="token punctuation">.</span>editNode<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 后续渲染</span>
        currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next <span class="token comment">// 调用一次就指向链表的下一个hooks节点</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>currentNode<span class="token punctuation">.</span>value<span class="token punctuation">,</span> currentNode<span class="token punctuation">.</span>editNode<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们不使用 <code>button</code> 按钮来修改 <code>hooks</code>值，在第一次渲染的时候直接 <code>set hooks</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> mounted <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>
            mounted <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> setTitle
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> setTitle <span class="token operator">=</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;new title&#39;</span><span class="token punctuation">)</span> 

    init <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// hooks初始化完成</span>
    currentNode <span class="token operator">=</span> root <span class="token comment">// 回溯root链表节点</span>
<span class="token punctuation">}</span>

<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 

<span class="token comment">// 18</span>
<span class="token comment">// new title</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第一次执行 ：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>
            mounted <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> setTitle
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> setTitle <span class="token operator">=</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 插入链表 , root -&gt; title</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// 插入链表, root -&gt; title -&gt; 18</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 18</span>

    <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;new title&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 修改节点 , root -&gt; new title -&gt; 18</span>

    init <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// hooks初始化完成</span>
    currentNode <span class="token operator">=</span> root <span class="token comment">// 回溯root链表节点</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二次执行：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mounted<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 未执行</span>
            <span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setTitle<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 未调用</span>
            mounted <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> setTitle
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> setTitle <span class="token operator">=</span> <span class="token function">_setTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 指针未移动 , currentNode = root</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>age<span class="token punctuation">,</span> setAge<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// 指针移动，currentNode = new Title</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// age = new title </span>

    <span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&#39;new title&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 空执行</span>

    init <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    currentNode <span class="token operator">=</span> root 
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","90.rule of hooks.html.vue"]]);export{r as default};
