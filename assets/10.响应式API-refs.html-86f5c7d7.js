import{_ as p,M as o,p as c,q as l,R as n,t as s,N as t,a1 as e}from"./framework-c8e009f3.js";const i={},r=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),u=n("strong",null,"响应式的对象",-1),d=n("strong",null,"类Object对象",-1),k={href:"/vue/Vue3/20.%E5%93%8D%E5%BA%94%E5%BC%8FAPI-reactive.html",target:"_blank",rel:"noopener noreferrer"},v=n("a",{href:"#toRefs"},"对ref对象解耦不丢失响应式，但reactive对象会丢失响应性",-1),m=e(`<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> num <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> refNum <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> obj<span class="token punctuation">.</span>a <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> refObj<span class="token punctuation">.</span>a <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> refNum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> refObj <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

num<span class="token operator">++</span>
refNum<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>

obj<span class="token punctuation">.</span>a<span class="token operator">++</span><span class="token punctuation">;</span>
refObj<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ref(Object)</code>是原有对象的引用，修改原有对象和ref对象实际上操作的是同一对象。</p><p><code>ref(number || string ...)</code>等基本类型则会生成一个新的ref对象，两者互不干扰</p><p>这点上和js基础是一致的：Object修改的是指针指向的源对象，基本数据类型的修改是新开辟一个内存空间，赋值，并指向新空间</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>ref</code>对象在<code>template模板</code>中的值会自动被解耦，也就是说你可以不写<code>ref.value</code>而直接写<code>ref</code></p></div><h2 id="unref" tabindex="-1"><a class="header-anchor" href="#unref" aria-hidden="true">#</a> unref</h2><p>想要访问<code>ref对象</code>需要以<code>ref.value</code>进行取值，我们可以方便的用<code>unref</code>函数进行解耦操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> realA <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> realB <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getRealValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> number <span class="token operator">|</span> Ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">unref</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> realA <span class="token operator">=</span> <span class="token function">getRealValue</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">const</span> realB <span class="token operator">=</span> <span class="token function">getRealValue</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2><p>该方法在处理响应式对象的<strong>可选属性</strong>上很有用，能够将可选属性转成空的<code>ref对象</code>，以便在后续函数中做统一化处理：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>bar <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;addProperty&quot;</span><span class="token operator">&gt;</span>add Property<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">addProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handleRefBar(props.bar)    //props.bar : undefined</span>
    <span class="token function">handleRefBar</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// toRef(props, &#39;bar&#39;) : 生成空的ref对象，ref.value = undefined</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">handleRefBar</span><span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    bar<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>


<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2><p>假设这样一种场景：我们使用<code>reactive函数</code>生成了一些响应式对象，我们希望单独操作它的某个属性，我们习惯性的用<code>Es6</code>的解构语法获取属性并对其操作：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> foo <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;editState&quot;</span><span class="token operator">&gt;</span>edit state<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">function</span> <span class="token function">generateState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> state
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">generateState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">editState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/torefs.gif" alt=""></p><p>遗憾的是：<strong>使用解构的 property 的响应性都会丢失</strong>。</p><p>为了解决这个问题，我们需要将响应式对象转化为一组<code>ref对象</code>，使用<code>toRefs</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> foo <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;editState&quot;</span><span class="token operator">&gt;</span>edit state<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">function</span> <span class="token function">generateState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> foo <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">generateState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">editState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customref" tabindex="-1"><a class="header-anchor" href="#customref" aria-hidden="true">#</a> customRef</h2><p><code>customRef</code>的原理就是<code>ES6的Proxy</code>，我们先来看一个<code>Proxy</code>例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token keyword">function</span> <span class="token function">generateProxy</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property <span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            value <span class="token operator">=</span> newValue
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">generateProxy</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
ref<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>customRef函数</code>将复杂的依赖操作包含在<code>track和trigger</code>中，并允许我们在<code>getter/setter</code>时除了更新依赖外有了更多的可操作空间</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> foo <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;editFoo&quot;</span><span class="token operator">&gt;</span>edit foo<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> customRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">generateRef</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;收集依赖&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> value

            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                value <span class="token operator">=</span> newVal
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发依赖&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">generateRef</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">editFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    foo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),b={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"TIP",-1),f=n("p",null,[n("code",null,"track"),s("，"),n("code",null,"trigger"),s("方法的功能是收集和触发依赖（更新页面）.")],-1),y={href:"/vue/01.Vue%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5/02.%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.html",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>官方的防抖例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;data&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">function</span> <span class="token function">useDebounceRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">trace<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> value
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token comment">// 重新计时</span>
                timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    value <span class="token operator">=</span> newValue
                    <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">useDebounceRef</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设场景：<code>v-model = &quot;data&quot;</code>用户连续输入【123】，流程如下：</p><ol><li>用户输入<strong>1</strong>，input框渲染用户输入的值<strong>1</strong>。自定义ref触发了<code>set</code>方法，进入<code>setTimeout</code></li><li>用户输入<strong>123</strong>,input框渲染用户输入的值<strong>123</strong>。自定义ref触发了<code>set</code>方法，清除定时器并重新计时</li><li>计时器到时，修改<code>data</code>，触发<code>trigger</code>渲染。input框的<code>value</code>值发生改变，input框渲染<code>data</code>的数据<strong>123</strong>。</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>原生input框的渲染原则：</p><ol><li><code>value</code>属性变动，渲染<code>value属性值</code></li><li><code>value</code>属性不变，渲染用户输入的值</li></ol></div><h2 id="shallowref" tabindex="-1"><a class="header-anchor" href="#shallowref" aria-hidden="true">#</a> shallowRef</h2><p>直译为<strong>浅层ref</strong>，意味着只有直接改变ref对象的value值会进行响应式更新，若ref对象是个<code>Object</code>，改变<code>Object</code>内的属性值不会触发渲染更新。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        state<span class="token punctuation">.</span>foo <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> state<span class="token punctuation">.</span>foo <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;editStateBad&quot;</span><span class="token operator">&gt;</span>edit 【state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo】<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;editStateGood&quot;</span><span class="token operator">&gt;</span>edit 【state<span class="token punctuation">.</span>value】<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">editStateBad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">editStateGood</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/shallowRef.gif" alt=""></p><h2 id="triggerref" tabindex="-1"><a class="header-anchor" href="#triggerref" aria-hidden="true">#</a> triggerRef</h2>`,10),w={href:"/vue/Vue3/30.%E5%93%8D%E5%BA%94%E5%BC%8FAPI-computed%E5%92%8Cwatch.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"shallowRef",-1),j=n("p",null,[s("参考官网例子即可，暂时没想到"),n("code",null,"shallowRef和triggerRef"),s("的应用场景。")],-1);function R(q,x){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("将一个值转化为"),u,s("，使得修改它时能够触发响应式更新（如渲染、computed属性计算等）。如果传入的是一个"),d,s("，则会调用"),n("a",k,[s("reactive"),t(a)]),s("进行递归处理。"),v]),m,n("div",b,[g,f,n("p",null,[s("关于依赖，详见"),n("a",y,[s("响应式原理"),t(a)])])]),h,n("p",null,[s("配合"),n("a",w,[s("WatchEffect"),t(a)]),s("手动监听"),_,s("的数据变化。")]),j])}const B=p(i,[["render",R],["__file","10.响应式API-refs.html.vue"]]);export{B as default};
