import{_ as p,M as o,p as l,q as c,R as n,t as s,N as e,a1 as a}from"./framework-c8e009f3.js";const i={},r=a(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>setup函数</code>，在函数中编写内容，他将允许你在组件的初始化之前进行一些操作。</p><p>::: warngin 在组件还未初始化时，<code>this</code>并不会指向组件实例，所以不要在<code>setup</code>函数中通过this进行操作。 :::</p><h2 id="setup返回值" tabindex="-1"><a class="header-anchor" href="#setup返回值" aria-hidden="true">#</a> setup返回值</h2><h4 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h4><p>对象的属性值会被暴露到<code>template</code>模板中，例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> myButton <span class="token keyword">from</span> <span class="token string">&#39;./my-button&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        myButton
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            title<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而<code>setup</code>中返回的<code>ref</code>对象会被<strong>自动解包</strong>，因此，以上文为例，我们在<code>template</code>中不需要通过<code>title.value</code>来访问<code>ref</code>的值。</p><h4 id="渲染函数" tabindex="-1"><a class="header-anchor" href="#渲染函数" aria-hidden="true">#</a> 渲染函数</h4>`,9),u={href:"/vue/01.Vue%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5/03.%E6%B8%B2%E6%9F%93%E5%87%BD%E6%95%B0%E5%92%8Ch.html",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"render",-1),k=a(`<p>例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  <span class="token punctuation">}</span> <span class="token punctuation">,</span> text<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><p><code>setup</code>的第一个参数是<code>props</code>对象，获取父组件传入的参数，<strong>需要先声明props对象</strong>。</p><p><strong>vue3</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token literal-property property">props</span> <span class="token operator">:</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token literal-property property">computed</span> <span class="token operator">:</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> mixinTitle <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// props是一个响应式对象</span>
        <span class="token keyword">const</span> mixinTitle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            mixinTitle
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue2</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token literal-property property">props</span> <span class="token operator">:</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token literal-property property">computed</span> <span class="token operator">:</span>
            <span class="token punctuation">{</span><span class="token punctuation">{</span> mixinTitle <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">mixinTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的是，<strong>传入的props对象是响应式的（用reactive包装过的）</strong>,也就是说，虽然setup函数只会执行一次，但若是你绑定了<strong>计算器/侦听器</strong>依赖，其中数据依然会自动更新：</p><p>调用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>my<span class="token operator">-</span>button <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>change title<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> myButton <span class="token keyword">from</span> <span class="token string">&#39;./my-button&#39;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    title<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;new title&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        myButton<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        handleClick
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            title<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/setup-props.gif" alt=""></p>`,14),v={class:"custom-container danger"},m=n("p",{class:"custom-container-title"},"DANGER",-1),b=n("code",null,"props",-1),g={href:"/vue/Vue3/10.%E5%93%8D%E5%BA%94%E5%BC%8FAPI-refs.html#toRefs",target:"_blank",rel:"noopener noreferrer"},h=a(`<p>我们修改一下刚才的代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">const</span> mixinTitle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> title<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            mixinTitle
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/setup-props-destructure.gif" alt=""></p><p>你可以使用<code>toRefs</code>将<code>reactive</code>对象转化为一个<code>ref</code>对象来解决这个问题：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

 <span class="token keyword">const</span> mixinTitle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> title<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p><code>setup</code>的第二个参数是<code>context对象</code>，直译为“上下文”，它给我们提供四个属性<code>attrs、slots、emit、expose</code></p><p><code>attrs、slots 和 emit</code> 分别等同于 <code>$attrs、$slots 和 $emit</code> 实例 property。</p><p>我们这里以<code>emit</code>为例</p><ol><li>通过setup的参数获取<code>emit对象</code></li><li>在函数中引用<code>emit</code>对象</li><li>在模板中绑定函数</li></ol><p><strong>vue3</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>enlarge button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;parentMethod&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的emit等于模板中的this.$emit</span>
        <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;parentMethod&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// 如果要使用ts的类型推断功能，请使用deineEmits</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            handleClick
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>vue2</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(&#39;parentMethod&#39;, 5)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>enlarge button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),f=n("strong",null,"setup语法糖",-1),y=n("code",null,"emit",-1),x={href:"/vue/Vue3/60.%E7%BB%84%E5%90%88%E5%BC%8FAPI-setup%E8%AF%AD%E6%B3%95%E7%B3%96.html",target:"_blank",rel:"noopener noreferrer"},w=a(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>你依然可以在模板中使用<code>$attrs、$slots 和 $emit</code>， 以<code>emit</code>为例</p><p><code>$emit</code>、<code>setup(props,{emit})</code>、<code>defineEmit()</code>三种写法并不互斥。</p></div><h2 id="声明周期钩子" tabindex="-1"><a class="header-anchor" href="#声明周期钩子" aria-hidden="true">#</a> 声明周期钩子</h2><p>在 <code>setup</code> 函数内要如何操作生命周期呢？<strong>通过生命周期钩子函数。</strong></p><p><strong>选项式API的生命周期选项和组合式API之间的映射</strong></p><ul><li>beforeMount -&gt; onBeforeMount</li><li>mounted -&gt; onMounted</li><li>beforeUpdate -&gt; onBeforeUpdate</li><li>updated -&gt; onUpdated</li><li>beforeUnmount -&gt; onBeforeUnmount</li><li>unmounted -&gt; onUnmounted</li><li>errorCaptured -&gt; onErrorCaptured</li><li>renderTracked -&gt; onRenderTracked</li><li>renderTriggered -&gt; onRenderTriggered</li><li>activated -&gt; onActivated</li><li>deactivated -&gt; onDeactivated</li></ul><p>例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// mounted</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Component is mounted!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getcurrentinstance" tabindex="-1"><a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a> getCurrentInstance</h2><p><code>getCurrentInstance</code> 用于访问内部组件实例， <strong>只能在setup或生命周期钩子中调用</strong>。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 有效</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 无效</span>
      proxy <span class="token comment">// 有效</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2><p>在 <code>setup</code> 中，不能使用 <code>this</code> 来访问当前对象实例，也就是说 <code>this.$refs</code> 无法使用。如要获取 <code>ref实例对象</code> ， 但是我们可以提前定义变量用于存储 <code>ref实例</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button <span class="token operator">:</span>ref<span class="token operator">=</span><span class="token string">&quot;el=&gt;refButton = el&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> refButton <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    refButton<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> expose</h2><p><code>expose</code> 是 <code>Vue3.2</code> 新增的一个组件属性，它将限制父组件通过 <code>$ref</code> 能够访问到的属性值。</p><p>使用 <code>expose</code> 我们可以避免外层组件直接修改子组件的私有属性，例如：子组件是一个添加器，我们将 <code>add</code> 方法暴露给父组件调用。将 <code>count</code> 作为一个私有属性保存，仅作渲染。</p><p>子组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">expose</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>add <span class="token operator">:</span>ref<span class="token operator">=</span><span class="token string">&quot;el =&gt; refAdd = el&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>add<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> Add <span class="token keyword">from</span> <span class="token string">&#39;./add.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> refAdd <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    refAdd<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>refAdd<span class="token punctuation">.</span>value<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function _(j,q){const t=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[s("允许返回一个由h()（详见"),n("a",u,[s("渲染函数与h"),e(t)]),s("）创建的渲染函数，你可以将它看作是Vue2中"),d,s("方法的替代。")]),k,n("div",v,[m,n("p",null,[s("解耦"),b,s("对象会导致其失去响应性，同"),n("a",g,[s("响应式API-refs"),e(t)])])]),h,n("p",null,[s("关于"),f,s("中的"),y,s("用法，请见"),n("a",x,[s("setup语法糖"),e(t)])]),w])}const E=p(i,[["render",_],["__file","50.组合式API-setup.html.vue"]]);export{E as default};
