import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const e={},p=t(`<h2 id="回忆过去" tabindex="-1"><a class="header-anchor" href="#回忆过去" aria-hidden="true">#</a> 回忆过去</h2><p><code>v-model</code> 通常用于表单处理，以下两种写法是等价的：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data = $event.target.value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vue2</code> 和 <code>vue3</code> 在v-model使用上的区别主要在于 <strong>自定义组件的 v-model</strong>。在这个特性上，vue3和vue2的写法并非相互兼容（vue2的写法被废弃）。</p><p><strong>vue2:</strong></p><p>子组件的 <code>v-model</code> 默认解析：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageTitle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
等于
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageTitle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageTitle = $event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件 <code>ChildComponent.vue</code> 添加 <code>model</code> 配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件的 <code>v-model</code> 解析：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageTitle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageTitle = $event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>vue3:</strong></p><p>父组件通过 <code>v-model:modelValue</code> 为子组件提供数据插槽</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>myComponentVue v<span class="token operator">-</span>model<span class="token operator">:</span>title<span class="token punctuation">.</span>myDecorator<span class="token operator">=</span><span class="token string">&quot;title&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup <span class="token operator">&gt;</span>
<span class="token keyword">import</span> myComponentVue <span class="token keyword">from</span> <span class="token string">&#39;./my-component.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以<code>v-model:title</code>为例，它会被解析成：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myComponentVue</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateTitle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> myComponentVue <span class="token keyword">from</span> <span class="token string">&#39;./my-component.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span> <span class="token operator">:</span>string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    title<span class="token punctuation">.</span>value <span class="token operator">=</span> value
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析分为两步：</p><ol><li>将 <strong>[modelValue]</strong> 作为属性名绑定到子组件上</li><li>将 <strong>update:[modelValue]</strong> 作为自定义事件绑定到子组件上</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在刚才的例子中，我们将 <code>modelValue</code> 定义为 <code>title</code> ，但如果我们没有提供名字，则名字默认为 <strong>modelValue</strong></p></div><p>而自定义事件和 <code>emit</code> 是分不开的，我们需要在子组件里定义 <code>emits</code> 并通过emit提供函数 <code>updateTitle</code>的参数<strong>value</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>input <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&quot;props.title&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> @input<span class="token operator">=</span><span class="token string">&quot;inputValue&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span> <span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">titleModifiers</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">default</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// modelModifiers : {</span>
    <span class="token comment">//     default : ()=&gt;({})</span>
    <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">inputValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>titleModifiers<span class="token punctuation">.</span>myDecorator<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;do something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:title&#39;</span> <span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：将子组件的 <code>v-model</code> 当成emit来用就行了。</p><h2 id="自定义修饰符" tabindex="-1"><a class="header-anchor" href="#自定义修饰符" aria-hidden="true">#</a> 自定义修饰符</h2><p><code>v-model</code> 为我们提供了一些默认的修饰符，如过滤首尾空白字符：<code>&lt;input v-model.trim=&quot;msg&quot; /&gt;</code>。其实在自定义组件中，我们可以主动获取v-model的修饰符，如 <code>{trim : true}</code>，并以此自定义修饰符和处理原则.</p><p>调用子组件时加入自定义修饰符：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myComponentVue</span> <span class="token attr-name"><span class="token namespace">v-model:</span>title.myDecorator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>子组件接收一个props，名字是：<strong>[modelValue]Modifiers</strong>。它将返回一个包含修饰符的对象，比如下面这个例子，它将返回<code>{myDecorator : true}</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span> <span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">titleModifiers</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">default</span> <span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// modelModifiers : {</span>
    <span class="token comment">//     default : {}</span>
    <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">inputValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>titleModifiers<span class="token punctuation">.</span>myDecorator<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;do something&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:title&#39;</span> <span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果没有提供model名，则默认的修饰符函数名为 <code>modelModifiers</code></p></div>`,29),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","70.v-model.html.vue"]]);export{r as default};
