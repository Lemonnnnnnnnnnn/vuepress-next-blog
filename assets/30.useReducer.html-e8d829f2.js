import{_ as n,p as s,q as a,a1 as t}from"./framework-c8e009f3.js";const p={},e=t(`<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p><code>useReducer</code>和<code>useState</code>很相似，你可以认为它是用来进行<strong>复杂数据处理</strong>的方法。比如一个state有多个需要独立维护的子对象。</p><p>方法结构如下：</p><p><code>const[state,dispatch] = useReducer(reducer , initialState , initializer)</code></p><ul><li>state : 基本数据类型 , 当前状态</li><li>dispatch ：<code>Function</code>类型，发信器，向<code>reducer</code>发出<code>信号action</code>。通常结构为<code>dispatch({type , value})</code>，<code>type</code>用于表示信号类型，<code>value</code>用来表示待处理的数据</li><li>reducer: <code>Function</code>类型，接收<strong>状态state和信号action</strong>，<code>信号action</code>通常包含待处理的数据，并以此生成<code>新的状态state</code></li><li>initalState : 基本数据类型，初始状态</li><li>initalizer ： 可选，不常用</li></ul><p>我们先用<code>useState</code>来编写一个简单的选择器例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UseState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>color <span class="token punctuation">,</span> setColor<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;black&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>animal <span class="token punctuation">,</span> setAnimal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;cat&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> colorList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;black&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;pink&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> animalList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;cat&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;dog&#39;</span> <span class="token punctuation">,</span> <span class="token string">&#39;mouse&#39;</span><span class="token punctuation">]</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span> 
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Choose a color and a pet<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>select value<span class="token operator">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setColor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
                colorList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>            
                <span class="token operator">&lt;</span>select value<span class="token operator">=</span><span class="token punctuation">{</span>animal<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setAnimal</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
                animalList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>       
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>You chose a <span class="token punctuation">{</span>color<span class="token punctuation">}</span> <span class="token punctuation">{</span>animal<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        
     <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> UseState<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/useState.gif" alt=""></p><p>接下来我们用<code>useReducer</code>来进行改写：</p><ol><li>编写初始State结构<code>initalState</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> initalState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">animal</span><span class="token operator">:</span> <span class="token string">&#39;cat&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>定义<code>信号</code>的类型，并以此定义<code>reducer</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> types <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">COLOR</span><span class="token operator">:</span> <span class="token string">&#39;COLOR&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">ANIMAL</span><span class="token operator">:</span> <span class="token string">&#39;ANIMAL&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 通过信号修改状态</span>
  <span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// state是当前reducer的状态，action是发出的信号</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> types<span class="token punctuation">.</span><span class="token constant">COLOR</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> action<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> types<span class="token punctuation">.</span><span class="token constant">ANIMAL</span><span class="token operator">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">animal</span><span class="token operator">:</span> action<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>调用<code>useReducer</code>生成<code>状态state和发信器dispatch</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initalState<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在用户交互的地方发出信号，让<code>reducer</code>处理并生成新的<code>state</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Choose a color and a pet<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>select
        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>color<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">COLOR</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>colorList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>select
        value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">.</span>animal<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> types<span class="token punctuation">.</span><span class="token constant">ANIMAL</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>animalList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        You chose a <span class="token punctuation">{</span>state<span class="token punctuation">.</span>color<span class="token punctuation">}</span> <span class="token punctuation">{</span>state<span class="token punctuation">.</span>animal<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制刷新" tabindex="-1"><a class="header-anchor" href="#强制刷新" aria-hidden="true">#</a> 强制刷新</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>_ <span class="token punctuation">,</span> forceUpdate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token operator">=&gt;</span>num <span class="token operator">+=</span> <span class="token number">1</span> <span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token function">forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","30.useReducer.html.vue"]]);export{r as default};
