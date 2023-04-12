import{_ as n,p as s,q as a,Q as e,a1 as t}from"./framework-c8e009f3.js";const p={},i=t(`<h2 id="typescript有什么用" tabindex="-1"><a class="header-anchor" href="#typescript有什么用" aria-hidden="true">#</a> typeScript有什么用？</h2><p><strong>校验type</strong> ， javaScript提供类型校验和推导。</p><h2 id="运行流程" tabindex="-1"><a class="header-anchor" href="#运行流程" aria-hidden="true">#</a> 运行流程</h2><p>在校验的同时将typeScript代码编译为javaScript代码。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><p><strong>全局</strong>安装<code>typescript</code>（编译）和<code>ts-node</code>（直接运行）</p><h2 id="基础类型" tabindex="-1"><a class="header-anchor" href="#基础类型" aria-hidden="true">#</a> 基础类型</h2><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><p>枚举为一组数值赋予一个常量名，如果不提供显示提供数值，则数值从0开始累加</p><div class="language-typeScript line-numbers-mode" data-ext="typeScript"><pre class="language-typeScript"><code>enum Color {Red, Green, Blue}
// 等于
// enum Color {Red = 0, Green = 1, Blue = 2}
let c: Color = Color.Green;

console.log(c); // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>枚举值不一定需要是数字：</p><div class="language-typeScript line-numbers-mode" data-ext="typeScript"><pre class="language-typeScript"><code>enum Color {Red, Green = &#39;green&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h3><p><code>never</code>可以赋给任何类型（任何类型都可能报错，无法执行到最后），但没有类型可以赋给never，即使是<code>any</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回never的函数必须存在无法达到的终点</span>
<span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>一般来说，在接口中我们需要指明接口中每个属性的名字：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能不能不定义属性名字只定义类型呢，答案是可以的：<code>[随便取的名字：类型] : 类型</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这我们要表示的是 <code>SquareConfig</code> 可以有任意数量的属性，并且只要它们不是 <code>color</code> 和 <code>width</code> ，那么就无所谓它们的类型是什么。</p><p>一个经典的应用场景是定义一个能接收任意<code>string</code>值作为key值的字典：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">I_Dict</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;foo&#39;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dict2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getDict</span><span class="token punctuation">(</span>dict<span class="token operator">:</span> I_Dict<span class="token punctuation">,</span> dict2<span class="token operator">:</span> I_Dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dict<span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dict<span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getDict</span><span class="token punctuation">(</span>dict<span class="token punctuation">,</span> dict2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><p>你可以在定义函数时指明函数的参数和返回值: <code>function f(参数名: 类型): 返回类型</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以用接口的方式定义函数，这样当我们调用这个接口时，不会校验接口的参数名字，只会校验位置和类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Func</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>x <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span> 

<span class="token keyword">const</span> f<span class="token operator">:</span> <span class="token function-variable function">Func</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="implements" tabindex="-1"><a class="header-anchor" href="#implements" aria-hidden="true">#</a> implements</h2><p><code>implements</code>（实现） 可以用来验证一个 <code>class</code> 是否匹配 <code>interface</code>：例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span>
    <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span> <span class="token comment">// B 实现接口A</span>
    <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h2><h3 id="接口继承接口" tabindex="-1"><a class="header-anchor" href="#接口继承接口" aria-hidden="true">#</a> 接口继承接口</h3><p><code>extends</code> 可以用来继承其他接口，如果需要继承多个类可以用逗号分隔：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PenStroke</span> <span class="token punctuation">{</span>
    penWidth<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">,</span>PenStroke <span class="token punctuation">{</span>
    sideLength<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h3><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><h2 id="混合类型" tabindex="-1"><a class="header-anchor" href="#混合类型" aria-hidden="true">#</a> 混合类型</h2>`,38);function c(o,l){return s(),a("div",null,[i,e(` 有时一个变量既可以作为函数来调用，又可以作为变量来获取它的属性：

\`\`\`ts
const getCounter = () =>{
    const counter = (start) =>{
        console.log('时钟开始时间为：' , start);
    }

    counter.interval = 1 
    return counter
}

const c = getCounter()
c(10)
console.log('计时器间隔为' , c.interval , '秒');
\`\`\`
 `)])}const d=n(p,[["render",c],["__file","00.简介.html.vue"]]);export{d as default};
