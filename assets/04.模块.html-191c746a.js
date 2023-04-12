import{_ as o,M as t,p,q as c,R as s,t as n,N as l,a1 as a}from"./framework-c8e009f3.js";const i={},d=a(`<h2 id="python-文件的运行" tabindex="-1"><a class="header-anchor" href="#python-文件的运行" aria-hidden="true">#</a> python 文件的运行</h2><p>我们常常会在代码中看到如下的写法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，这是一段调试代码，用于测试当前这个python文件（python模块）的运行，而在导出时则不会运行 <code>if</code> 语句中的内容。原因是，每一个python文件都有一些全局变量，比如<code>__name__</code> 就默认为当前python文件的文件名，但是当python解释器<strong>运行</strong>某个文件时，会将全局变量 <code>__name__</code> 设为 <code>__main__</code>。</p><p>我们举例来证明上面的结论，先单独运行 <code>hello.py</code> 文件：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    func<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># __main__</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在另一个组件中引入 <code>hello</code> 模块，可以发现引入时的<code>if</code>语句并没有执行，我们调用它的 <code>func</code> 方法，发现打印的 <code>__name__</code> 变量的名字是 <em>hello</em> :</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> hello

hello<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># hello文件的__name__等于 hello</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span> <span class="token comment"># __main__ 现在这个文件才是运行文件，这个文件的__name__被python解释器设为了__main__</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行参数" tabindex="-1"><a class="header-anchor" href="#运行参数" aria-hidden="true">#</a> 运行参数</h2><p>当我们跑某些指令时，总是会加入一些参数命令，例如： <code>pip install --update pip</code> ，这些 <code>--</code> 后边编写的指令要如何获取呢？我们可以使用 <code>sys</code> 库的 <code>argv</code> 参数: 它是python解释器运行时自动生成的一个数组，数组的第一个参数是文件名，后续参数则是我们提供的参数，我们以运行 <em>hello.py</em> 文件举例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    args <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, %s!&#39;</span> <span class="token operator">%</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Too many arguments!&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    func<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># __main__</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python hello.py  
hello,world<span class="token operator">!</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python hello.py arg1
hello,arg1<span class="token operator">!</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> python hello.py arg1 arg2
Too many arguments<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2><p>普通的变量和函数是 <strong>公开的</strong> ， 例如我们可以直接通过 <code>hello.func</code> 来调用 <code>hello</code> 文件中的文 <code>func</code> 方法。推荐用 <code>_</code>符号指定一些规范，例如：<code>__xxx__</code>是解释器定义的变量名，尽量不要使用。要定义私有变量最好定义成 <code>_xxx，__xxx</code> 形式，这是<em>约定俗成</em>的私有变量名规范（但其实依旧是公开的）。</p>`,14),r=s("code",null,"class类",-1),u=s("code",null,"_",-1),_=s("code",null,"__xxx",-1),k={href:"/python/05.%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html#%E7%A7%81%E6%9C%89%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="导入第三方模块" tabindex="-1"><a class="header-anchor" href="#导入第三方模块" aria-hidden="true">#</a> 导入第三方模块</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> types <span class="token keyword">import</span> MethodType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function v(h,b){const e=t("ExternalLinkIcon");return p(),c("div",null,[d,s("p",null,[n("如果你真正想要实现私有变量，可以在 "),r,n(" 中使用 "),u,n(" 规范，类中的属性如果被命名为 "),_,n(" 则会被真正转换为私有属性，详见"),s("a",k,[n("面向对象编程"),l(e)]),n(".")]),m])}const g=o(i,[["render",v],["__file","04.模块.html.vue"]]);export{g as default};
