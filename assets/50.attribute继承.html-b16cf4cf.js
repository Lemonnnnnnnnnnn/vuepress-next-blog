import{_ as t,M as e,p as o,q as p,R as s,t as n,N as l,a1 as r}from"./framework-c8e009f3.js";const c={},i=r(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>attribute继承</code>指的是当我们为子组件声明了一些自定义属性时，这些属性将<strong>自动被挂载到子组件的根节点上</strong>。</p><p>举个例子，我们为子组件绑定了一个事件方法<code>click</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span><span class="token punctuation">{</span> num <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>buttonVue @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>buttonVue<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> buttonVue <span class="token keyword">from</span> <span class="token string">&#39;./button.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    num<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们没有在子组件的props中取出<code>click</code>方法并挂载到<code>button</code>上，而是简单的将<code>button</code>放到根节点的位置上：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>
        add
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件将自动生成如下结构：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/attribute.gif" alt=""></p><h2 id="禁用attribute继承" tabindex="-1"><a class="header-anchor" href="#禁用attribute继承" aria-hidden="true">#</a> 禁用attribute继承</h2><h2 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h2><p><code>emit</code>通过<code>v-on</code>绑定事件到子组件上，这些事件同样也会被作为自定义属性挂载到子组件的根节点上。</p><p>如果我们绑定了原生事件并且又使用了<code>emit方法</code>：</p><p>子组件button:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;click&#39; , 5)&quot;</span><span class="token operator">&gt;</span>
        add
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{ fontSize: fontSize + &#39;px&#39; }&quot;</span><span class="token operator">&gt;</span>title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>my<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleClick&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> myButton <span class="token keyword">from</span> <span class="token string">&#39;./button.vue&#39;</span>

<span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    fontSize<span class="token punctuation">.</span>value <span class="token operator">+=</span> num
<span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果是执行了两次click方法，分别是:</p><ol><li>默认挂载到<code>button根节点</code>上的click方法</li><li>主动用emit声明的click方法</li></ol><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/attribute-emit.gif" alt=""></p><p>为了避免这种情况，我们有三种办法：</p>`,22),d=s("code",null,"emits",-1),u={href:"/vue/Vue3/60.%E7%BB%84%E5%90%88%E5%BC%8FAPI-setup%E8%AF%AD%E6%B3%95%E7%B3%96.html#defineEmits",target:"_blank",rel:"noopener noreferrer"},k=s("strong",null,"不会再被挂载到子组件的根节点上",-1),v=s("li",null,"禁用Attribute继承",-1),m=s("li",null,"避免这种写法 😄",-1);function b(g,h){const a=e("ExternalLinkIcon");return o(),p("div",null,[i,s("ol",null,[s("li",null,[n("导出子组件时声明"),d,n("函数列表（推荐），"),s("a",u,[n("声明方法"),l(a)]),n("，被声明的函数事件"),k]),v,m])])}const _=t(c,[["render",b],["__file","50.attribute继承.html.vue"]]);export{_ as default};
