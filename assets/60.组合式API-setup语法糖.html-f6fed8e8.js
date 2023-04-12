import{_ as p,M as o,p as l,q as c,R as n,t as s,N as e,a1 as t}from"./framework-c8e009f3.js";const i={},r=t(`<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>我们先来体验一下语法糖的便捷：</p><p><strong>未使用语法糖</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> myButton <span class="token keyword">from</span> <span class="token string">&quot;./my-button&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用语法糖</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>
        my<span class="token operator">-</span>button
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以直接将整个<code>&lt;script setup&gt;&lt;/script&gt;</code>看作是<code>setup函数</code>，在<strong>由setup包装的script中</strong></p><ol><li>直接声明的变量会被自动暴露到<code>template</code>中，可以直接使用，可以免去在<code>export default</code>中声明</li><li>import导入的组件和函数不需要在<code>components和method</code>中注册，可以直接使用。</li><li>我们不需要再主动通过<code>export default</code>导出当前组件，<code>setup语法糖</code>帮助我们自动完成了这一工作</li></ol><hr><p>我们之前会从<code>setup()</code>的参数中获取<code>props,context</code>进行数据操作，我们接下来会依次介绍语法糖中这些数据的替代方案</p><ul><li>props == <a href="#defineProps">defineProps</a></li><li>context.emit == <a href="#deineEmits">deineEmits</a></li><li>context.expose == <a href="#defineExpose">defineExpose</a></li><li>context.slots || context.attrs == [useSlots 和 useAttrs](#useSlots 和 useAttrs)</li></ul><h2 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h2><p><code>defineProps</code> 返回一个只读对象，可以在<code>defineProps</code>的<code>ts</code>定义中看到</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> declare <span class="token keyword">function</span> defineProps<span class="token operator">&lt;</span>TypeProps<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>TypeProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味着我们如果想要修改<code>defineProps</code>返回的<code>props</code>对象是无效的————即使我们将其转化为可相应的<code>ref对象</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>change title<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    title<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;new title&#39;</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/defineProps.gif" alt=""></p><h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h4><p>我们需要通过<strong>泛型</strong>传入<code>props</code>的结构类型，再进行调用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><p>我们会习惯性的在解构的变量中添加<code>= xxx</code>来设置某个变量为空时的默认值：比如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span> <span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token operator">=</span> <span class="token number">123</span> <span class="token punctuation">}</span> <span class="token operator">=</span> props <span class="token comment">// 不会提供对title的类型检查</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但<code>defineProps</code>只会对父组件传入时的接口处进行typeScript校验,如：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220513135719.png" alt=""></p><p>而有时我们会在子组件内对变量进行默认值设置，这时并不会进行类型校验：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span> <span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token operator">=</span> <span class="token number">123</span> <span class="token punctuation">}</span> <span class="token operator">=</span> props <span class="token comment">// 不会提供对title的类型检查</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为此，我们需要使用<strong>withDefaults</strong>进行默认值的设置：</p><p><code>withDefaults</code>的函数定义为：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">withDefaults</span><span class="token punctuation">(</span>
  defineProps定义的props对象（ts类型）<span class="token punctuation">,</span>
  Props的默认对象Object
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;default title&#39;</span> <span class="token comment">// 会提供对title的类型检查</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defineemits" tabindex="-1"><a class="header-anchor" href="#defineemits" aria-hidden="true">#</a> defineEmits</h2>`,32),d=n("code",null,"emit",-1),u={href:"/vue/base/40.emit.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"emit",-1),v={href:"/vue/base/50.attribute%E7%BB%A7%E6%89%BF.html#emit",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"setup语法糖",-1),b=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;parentMethod&#39;, 5)&quot;</span><span class="token operator">&gt;</span>enlarge button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emits</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;parentMethod&#39;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>emits</code>接收数组和对象作为参数，官网介绍<strong>对象的声明方式</strong>可以对<code>emits</code>出的函数进行校验。</p><p>但事实上，校验不通过只会在控制台打印<code>Vue warn</code>，并不会阻止函数的执行。</p><p>因暂时没查到应用场景，这里只介绍数组的声明方式。</p></div>`,2),g=n("code",null,"defineEmits",-1),f=n("code",null,"emits",-1),h=n("code",null,"emit",-1),y={href:"/vue/Vue3/50.%E7%BB%84%E5%90%88%E5%BC%8FAPI-setup.html#context",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>enlarge button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emitName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span>emitName<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;parentMethod&#39;</span> <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，在<code>defineEmits</code>中使用局部变量会导致编译报错，官方给出的解释是：因为<code>defineEmits</code>的参数会在<code>setup函数</code>外进行读取（提升到模块的范围）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;parentMethod&#39;</span>
<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//报错： [vite] Internal server error: [@vue/compiler-sfc] defineProps() in &lt;script setup&gt; cannot reference locally declared variables because it will be hoisted outside of the setup() function. If your component options require initialization in the module scope, use a separate normal &lt;script&gt; to export the options instead.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你需要使用变量，可以用<code>import</code>导入相关变量，其同样也会被提升到模块的范围。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> emitName <span class="token operator">=</span> <span class="token string">&#39;parentMethod&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span>enlarge button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> emitName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span>emitName<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;parentMethod&#39;</span> <span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;scss&quot;</span> scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript-1" tabindex="-1"><a class="header-anchor" href="#typescript-1" aria-hidden="true">#</a> TypeScript</h4><p><code>defineEmits</code>的TS接口类型为:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> declare <span class="token keyword">function</span> defineEmits<span class="token operator">&lt;</span>TypeEmit<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TypeEmit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以这样定义<code>emit函数类型</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>参数<span class="token number">1</span> <span class="token operator">:</span> <span class="token string">&#39;函数名&#39;</span><span class="token punctuation">,</span> 参数<span class="token number">2</span> <span class="token operator">:</span> 类型 <span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span> <span class="token operator">:</span> 函数返回值
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改写一下我们刚才的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>defineEmits<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">&#39;parentMethod&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">num</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>函数的第一个参数必须是父组件传入的<strong>函数名字符串</strong>,事实上，<code>emit</code>Vue内部的处理是<strong>单独取出第一个参数，到当前实例的_event属性（事件中心）获取对应事件。再将后续参数args传入真实事件中</strong>。</p><p>个人的理解是，函数名会作为<code>key值</code>匹配每一个<code>emit</code>方法。只有完整匹配了函数名，后续参数的ts类型推断才会有效。</p></div><h2 id="defineexpose" tabindex="-1"><a class="header-anchor" href="#defineexpose" aria-hidden="true">#</a> defineExpose</h2><p>使用语法糖的情况下，组件默认是关闭的，也就是说如果想要访问子组件实例， <code>defineExpose</code> 是必要的。</p><p>父组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;increment&quot;</span><span class="token operator">&gt;</span>add<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    increment
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useslots-和-useattrs" tabindex="-1"><a class="header-anchor" href="#useslots-和-useattrs" aria-hidden="true">#</a> useSlots 和 useAttrs</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function j(w,_){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,n("p",null,[s("如果你对"),d,s("还不了解，请先阅读"),n("a",u,[s("emit"),e(a)]),s("。")]),n("p",null,[s("Vue3中推荐我们对子组件暴露出的"),k,s("进行声明，"),n("a",v,[s("（为什么要进行声明）"),e(a)]),s("，我们先来看看不使用"),m,s("要怎么声明：")]),b,n("p",null,[g,s("函数帮我们声明"),f,s("并且返回一个"),h,s("对象。"),n("a",y,[s("原本是从setup参数中取出emit对象，并在export default中声明emits"),e(a)])]),x])}const E=p(i,[["render",j],["__file","60.组合式API-setup语法糖.html.vue"]]);export{E as default};
