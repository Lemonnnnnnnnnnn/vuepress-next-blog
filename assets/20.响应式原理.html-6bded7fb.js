import{_ as t,M as e,p as c,q as o,R as s,t as n,N as i,a1 as a}from"./framework-c8e009f3.js";const l={},u=a('<h2 id="为什么需要响应式结构" tabindex="-1"><a class="header-anchor" href="#为什么需要响应式结构" aria-hidden="true">#</a> 为什么需要响应式结构</h2><p>Vue会将<code>data对象</code>的每一个属性使用<code>Object.defineProperty</code>转化为<code>getter/setter</code>（Vue3中使用的是<code>Proxy</code>）。当我们访问某一个属性时，就会通知<code>Watcher</code>类，并由它及其后续函数来实现页面的重新渲染。</p><p><img src="https://cn.vuejs.org/images/data.png" alt=""></p>',3),d=s("strong",null,"依赖",-1),k=s("code",null,"num",-1),r=s("code",null,"render()",-1),v=s("code",null,"computed",-1),m=s("strong",null,"观察者模式",-1),b={href:"/categories/?category=%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="设计" tabindex="-1"><a class="header-anchor" href="#设计" aria-hidden="true">#</a> 设计</h2><p>首先，我们再具体将响应式结构的实现分成以下结构：</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220501203815.png" alt=""></p><h2 id="逐步实现" tabindex="-1"><a class="header-anchor" href="#逐步实现" aria-hidden="true">#</a> 逐步实现</h2><p>其中比较重要的是<code>Dep类</code>和<code>Watcher类</code>的实现，我们先来构建一个简单的<code>Dep,Watcher</code>模型，在这个模型中，<code>Dep</code>添加观察者，并打印观察者的id。</p><h3 id="例子一" tabindex="-1"><a class="header-anchor" href="#例子一" aria-hidden="true">#</a> 例子一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 全局属性，用于指向某一个watcher，用完即丢</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// watcher观察者数组</span>
  <span class="token punctuation">}</span>
  <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加观察者</span>
  <span class="token punctuation">}</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 展示添加的观察者id</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//将自己挂载到 全局属性Dep.target。 Dep.target === watcher</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target = null</span>
<span class="token keyword">const</span> watcher1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target = watcher1</span>
dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> watcher2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target = watcher2</span>
dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

dep<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>关于<code>target</code>的使用可能比较令人费解，它在<code>Watcher</code>实例化的过程中绑定上<code>Watcher</code>的实例，并且在<code>depend</code>函数中添加观察者实例。</p><p>至于为什么不直接<code>depend(watcher)</code>，这是为了我们后续使用<code>Object.defineProperty构建闭包</code>做的一个铺垫。相信这个例子中<code>target</code>的指向还是比较清晰的。</p></div><hr><p>接下来我们将<code>data</code>对象进行引入，为每一个属性值绑定一个<code>Watcher</code>，并且在<code>show</code>函数中将观察者的值打印出来,<strong>变动行数已在代码中标注</strong></p><h3 id="例子二" tabindex="-1"><a class="header-anchor" href="#例子二" aria-hidden="true">#</a> 例子二</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 全局属性，用于指向某一个watcher，用完即丢</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target = null</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

dep<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>比较绕的地方来了，在源码中，并非直接在<code>depend()</code>函数中添加观察者实例。而是通过三步完成的：</p><ul><li>通过<code>Dep.depend</code>将当前的<code>dep实例</code>传入<code>watcher</code>实例</li><li>传入的<code>dep实例</code>在<code>Watcher.addDep</code>中调用，并再次将当前的<code>watcher实例</code>传入<code>dep实例</code></li><li>传入的<code>watcher实例</code>在<code>Dep.addSub</code>中调用，添加进观察者队列</li></ul><p><strong>变动行数已在代码中标注</strong></p><h3 id="例子三" tabindex="-1"><a class="header-anchor" href="#例子三" aria-hidden="true">#</a> 例子三</h3><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220501172118.png" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 全局属性，用于指向某一个watcher，用完即丢</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// watcher addDep(dep实例)</span>
  <span class="token punctuation">}</span>
  <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加一个观察者对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向dep的subs里添加自己</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// target = null</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 为每个属性添加一个watcher</span>
  dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

dep<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，结果和刚才的例二并没有任何区别。</p><hr><p>刚才我们都是手动为添加<code>Dep</code>添加<code>Watcher</code>，这并不是响应式结构。为了实现它，我们采取这样的设计</p><ul><li>在访问<code>data属性</code>时，为这个属性绑定一个<code>Dep</code>数组，并添加<code>Watcher</code>，每个<code>Watcher</code>都有自身的<strong>回调函数</strong>。</li><li>在改变<code>data属性</code>时，我们会执行所有<code>Watcher</code>的回调函数</li></ul><p>这里用<code>Object.defineProperty</code>方法来实现</p><p><strong>变动行数已在代码中标注</strong></p><h3 id="例子四" tabindex="-1"><a class="header-anchor" href="#例子四" aria-hidden="true">#</a> 例子四</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 全局属性，用于指向某一个watcher，用完即丢</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// watcher addDep(dep实例)</span>
  <span class="token punctuation">}</span>
  <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加一个观察者对象</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行所有观察者的回调函数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> property<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> fn<span class="token punctuation">;</span> 
    Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">//将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量</span>
    data<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token comment">// 通过get方法添加依赖</span>
  <span class="token punctuation">}</span>
  <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向dep的subs里添加自己</span>
  <span class="token punctuation">}</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 执行回调函数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 访问时添加依赖</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dep<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果a属性改变，调用show方法</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 观察data的a属性，如果改变，执行回调函数</span>
<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行回调&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;回家吃饭了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


data<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>最后，我们补上<code>Transform类</code>、<code>transform方法</code>、<code>defineReactive</code>方法。<code>transform</code>方法和类用于转换<code>data</code>的每一个属性为响应式对象，很好理解，我们主要讨论<code>defineReactive</code>方法</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>Transform</code>就是源码中的<code>Observer</code>，个人觉得和<code>Watcher</code>中文意思差不多容易搞混</p></div><h5 id="definereactive" tabindex="-1"><a class="header-anchor" href="#definereactive" aria-hidden="true">#</a> defineReactive:</h5><p>用于<strong>为每一个data属性绑定一个dep</strong>，这里用到了闭包的思想，虽然<code>defineReactive</code>函数执行后其中的变量应该被回收。但在<code>get和set</code>方法中依然保持了对<code>dep</code>的引用，导致这个<code>dep</code>被保留在了内存中，并在执行<code>get、set</code>方法时，指向当前调用的<code>Watcher</code></p><p>建议结合开篇的结构图进行理解:</p><p><img src="https://linyc.oss-cn-beijing.aliyuncs.com/20220501194711.png" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 每个data属性绑定一个dep,dep存放watcher arr</span>
    <span class="token keyword">let</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在闭包中定义一个dep对象</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 依赖收集</span>
          dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dep.target指向哪个就收集哪个</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 全局属性，用于指向某一个watcher，用完即丢</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 添加一个观察者对象</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用每一个watcher的update</span>
        subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> property<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data
      <span class="token keyword">this</span><span class="token punctuation">.</span>property <span class="token operator">=</span> property
      <span class="token keyword">this</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
      Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token comment">//将自己挂载到 Dep.target，调用 Dep.depend时会读取该变量</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token comment">// 访问一次，添加依赖</span>
  <span class="token punctuation">}</span>
  
    <span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向dep的subs里添加自己</span>
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&quot;更新视图&quot;);</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  
  <span class="token keyword">class</span> <span class="token class-name">Transform</span> <span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 响应式绑定数据通过方法</span>
          <span class="token function">transform</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">function</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将data中我们定义的每个属性进行响应式绑定</span>
          <span class="token function">defineReactive</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> data<span class="token punctuation">[</span>keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 初始化</span>
  <span class="token keyword">new</span> <span class="token class-name">Transform</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// 将data转换成可观测对象</span>
  
  <span class="token comment">// 观察a属性 </span>
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;执行回调&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;回家吃饭了&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  
  data<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span>
  data<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function w(y,f){const p=e("ExternalLinkIcon");return c(),o("div",null,[u,s("p",null,[n("问题的核心在于一个属性会有多个"),d,n("，比如对于属性"),k,n("来说，它有一个天生的依赖项"),r,n("方法，而当用户编写了"),v,n("属性时，就会有两份依赖项。如何管理这些依赖项，如何实现属性的监听，就是今天的主题："),m,n("。如果你对观察者模式还不清楚，可以先看这里:"),s("a",b,[n("观察者模式"),i(p)]),n("。")]),h])}const D=t(l,[["render",w],["__file","20.响应式原理.html.vue"]]);export{D as default};
