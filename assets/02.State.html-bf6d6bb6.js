import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const p={},e=t(`<p>定义store并挂载:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token comment">// 创建一个新的 store 实例</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">state</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>count<span class="token operator">++</span>  <span class="token comment">// 自带immer</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>挂载store后可以通过 <code>this.$store</code>来访问store对象 取 <code>vuex</code> 中的数据的时候，需要使用 <code>computed</code> 进行依赖的挂载，否则store数据的更改不会直接影响视图的变化：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        {{ count }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>add<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token comment">// 挂载依赖，会更新</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// data(){</span>
    <span class="token comment">//     return {</span>
    <span class="token comment">//         count : this.$store.state.count // 不会更新</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// },</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/vuex.gif" alt=""></p><p>或者你可以引入 <code>vuex.mapState</code> 来帮忙，我们可以将 <code>computed</code> 的对象传入它，它会为每一个属性函数提供一个 <code>state</code> 对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function-variable function">count</span> <span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span>state<span class="token punctuation">.</span>count <span class="token punctuation">,</span>
        <span class="token function">double</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// </span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你只需要取数据而不需要对其进行计算时，使用数组是种更简介的写法:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前页面有其他需要计算的数据时，由于mapState返回一个对象，你可以使用 <code>...</code> 运算符将他们合并</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">localCount</span> <span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;count&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","02.State.html.vue"]]);export{r as default};
