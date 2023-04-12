import{_ as t,M as e,p as o,q as c,R as s,t as n,N as l,a1 as a}from"./framework-c8e009f3.js";const i={},u=a(`<h2 id="hoc是什么" tabindex="-1"><a class="header-anchor" href="#hoc是什么" aria-hidden="true">#</a> HOC是什么？</h2><p><code>higher-order component</code> : 高阶组件指的是一种<strong>React组件设计模式</strong>，它的实质是用一个函数<strong>接收一个类，添加一些内容，返回一个新类</strong>。其本质就是一个<strong>包装器（装饰器）</strong>。</p><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>我们以一个简单的例子来介绍它：</p><p>假设我们要为当前组件绑定上一个日志系统，显然这是一个公共系统可以用于任何组件上，那么我们可以这样将其提取出来成为一个包装器：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// @LogWrapper</span>
<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token punctuation">,</span> <span class="token string">&#39;组件&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token constant">HOC</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">LogWrapper</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 接收一个组件</span>
    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">LogWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token comment">// 返回一个新组件</span>
        <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token punctuation">,</span> <span class="token string">&#39;包装器&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> 
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">LogWrapper</span><span class="token punctuation">(</span>Hoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220429115044.png" alt=""></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>关于传递<code>props</code>：它将先以<code>props</code>属性传入包装器中，再通过<code>&lt;Component {...this.props} /&gt;</code> 传入子组件上。</p></div><h2 id="使用-语法糖" tabindex="-1"><a class="header-anchor" href="#使用-语法糖" aria-hidden="true">#</a> 使用@语法糖</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">LogWrapper</span><span class="token punctuation">(</span>Hoc<span class="token punctuation">)</span>
<span class="token comment">// change to </span>

@LogWrapper
<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@语法糖是一种简写方式，会将后面的类作为第一个参数传入方法中，当有多个装饰器时，阅读感比多层嵌套更为舒适</strong>，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token function">PropertyWrapper</span><span class="token punctuation">(</span><span class="token function">LogWrapper</span><span class="token punctuation">(</span>Hoc<span class="token punctuation">)</span><span class="token punctuation">)</span>

@PropertyWrapper
@LogWrapper
<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><ol><li>如果你使用了ts语法，为了使用@语法糖需要在<code>tsconfig.json/jsconfig.json</code>中进行配置，配置如下：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如果你使用的代码编辑器是<code>vscode</code>，还需要在设置中这样修改：</li></ol><ul><li>打开设置： <code>preferences -&gt; settings</code></li><li>启用<code>experimentalDecorators</code> : 搜索<code>enable/disable experimentalDecorators</code>，并<strong>打勾</strong></li></ul><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220429141627.png" alt=""></p><h2 id="语法糖要怎样传递参数" tabindex="-1"><a class="header-anchor" href="#语法糖要怎样传递参数" aria-hidden="true">#</a> @语法糖要怎样传递参数</h2><p>前面说到@语法糖会将后面的类作为<strong>第一个参数</strong>传入方法中，如果我们想要传入更多参数，需要<strong>再包装一层函数</strong>，函数的作用是<strong>返回一个包装器</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

@<span class="token function">connect</span><span class="token punctuation">(</span>console1 <span class="token punctuation">,</span> console2<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token constant">HOC</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">console1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">console2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">console1<span class="token punctuation">,</span> console2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 放回一个包装器</span>
        <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token comment">// 返回一个新组件</span>
            <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">)</span>
                <span class="token function">console1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token function">console2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> 
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">export</span> <span class="token keyword">default</span> Hoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用-一个简陋的redux模型" tabindex="-1"><a class="header-anchor" href="#应用-一个简陋的redux模型" aria-hidden="true">#</a> 应用：一个简陋的redux模型</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

@createRedux
@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> hello <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
        <span class="token function">hello</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>foo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token constant">HOC</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>foo
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createRedux</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 包装器，为子组件绑定初始状态和dispatch方法</span>
    <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token comment">// 返回一个新组件</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

            <span class="token keyword">function</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>dispatch <span class="token operator">=</span> dispatch

            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>Component dispatch<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>dispatch<span class="token punctuation">}</span> state<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span>  <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 接收一个组件</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token comment">// 返回一个新组件</span>

            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>state <span class="token punctuation">,</span> dispatch<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props  <span class="token comment">// 获取外层HOC传入的state和 dispatch</span>
                <span class="token keyword">const</span> stateProps <span class="token operator">=</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token comment">// 将state 传入 mapStateToProps </span>
                <span class="token keyword">const</span> dispatchProps <span class="token operator">=</span> <span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token comment">// 将dispatch 传入 mapDispatchToProps</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>stateProps<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>dispatchProps<span class="token punctuation">}</span>  <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token comment">// 作为props传入被包装的组件中</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>




<span class="token keyword">export</span> <span class="token keyword">default</span> Hoc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于react-developer-tools调试hoc" tabindex="-1"><a class="header-anchor" href="#关于react-developer-tools调试hoc" aria-hidden="true">#</a> 关于React developer tools调试HOC</h2><p>打开浏览器调试插件，你会在调试器窗口里看到这样的结构：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220429150441.png" alt=""></p><p>为了便于调试，可以为组件新增一个静态属性<code>displayName</code>，展示：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220429150457.png" alt=""></p><h2 id="关于实例的获取" tabindex="-1"><a class="header-anchor" href="#关于实例的获取" aria-hidden="true">#</a> 关于实例的获取</h2>`,29),r=s("code",null,"ref",-1),d=s("code",null,"forwardRef",-1),k=s("code",null,"ref",-1),v={href:"/react/react16-react18/50.ref.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>具体原理就是通过<code>forwardRef</code>主动获取<code>ref属性</code>，往下传递直到真正的子组件</p><p>实际上是三层模型：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220429160446.png" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> createRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Hoc</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    btnRef <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnRef<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Button ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnRef <span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token keyword">get</span> ref<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">LogWrapper</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 接收一个组件</span>
    <span class="token keyword">class</span> <span class="token class-name">LogWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
        <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> myRef<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props  <span class="token comment">// 获取上层传递的 myRef 对象， 并作为ref属性传递给真正的组件</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>Component ref<span class="token operator">=</span><span class="token punctuation">{</span>myRef<span class="token punctuation">}</span>  <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>LogWrapper <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> myRef<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token comment">// 用forwardRef包装一层，获取到ref并传递给下层</span>
<span class="token punctuation">}</span>

@LogWrapper
<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>my button<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> Hoc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(f,g){const p=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("我们通常会使用"),r,n("来获取子组件的实例，但如果是一个被HOC包裹的子组件呢？是的，ref会指向HOC而非指向真正的子组件。为了解决这个问题，我们需要使用"),d,n("，如果你还不清楚"),k,n("相关的只是，可以参考我的这篇文章"),s("a",v,[n("react中的ref"),l(p)]),n("。")]),m])}const y=t(i,[["render",b],["__file","40.HOC.html.vue"]]);export{y as default};
