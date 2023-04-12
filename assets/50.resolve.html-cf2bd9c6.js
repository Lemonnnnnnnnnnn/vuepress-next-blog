import{_ as s,p as n,q as a,a1 as e}from"./framework-c8e009f3.js";const p={},t=e(`<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2><p><em>resolve</em> 表示解析，通过它我们可以配置 webpack <strong>解析模块的规则</strong>，其中最常用的是路径解析，即改变 webpack 面对 <code>import</code> 或 <code>require</code> 引用路径时的行为，我们在这里会介绍最常用的 <code>alias</code> 和 <code>extensions</code> 属性，它的大致配置写法如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alias-别名" tabindex="-1"><a class="header-anchor" href="#alias-别名" aria-hidden="true">#</a> alias 别名</h2><p>顾名思义，我们可以为引用路径配置一个新的名字，比如我们有一个方法文件在 <code>utils/sayhello.js</code> 下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils/sayhello.js</span>
<span class="token keyword">function</span> <span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;sayhello&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> sayhello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原本</strong>我们需要在入口文件中写入引入的完整路径：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> sayhello <span class="token keyword">from</span> <span class="token string">&quot;./utils/sayhello&quot;</span><span class="token punctuation">;</span>

<span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但使用别名后，我们可以为 <code>./utils/sayhello</code> 配置一个简单的别名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span> <span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// path.resolve: 将路径拼接为绝对路径，__dirname : 当前目录</span>
        <span class="token literal-property property">sayhello</span> <span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span> <span class="token string">&quot;utils/sayhello.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们在引入这个方法时，就可以直接引用这个别名，webpack在编译时会将别名转换为我们在 <code>webpack.config.js</code> 中配置好的绝对路径 <code>path.resolve(__dirname , &quot;utils/sayhello.js&quot;)</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> sayhello <span class="token keyword">from</span> <span class="token string">&quot;sayhello&quot;</span><span class="token punctuation">;</span>

<span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想要用别名处理一个文件夹下的所有文件，我们会用别名指向一个文件夹：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token punctuation">,</span> <span class="token string">&quot;utils&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用时可以直接用 <code>@</code> 来替换 <code>utils</code> ，webpack在编译时会自动将 <code>@</code> 转换为我们配置的别名 <code>utils</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> sayhello <span class="token keyword">from</span> <span class="token string">&quot;@/sayhello&quot;</span>
<span class="token keyword">import</span> sayHi <span class="token keyword">from</span> <span class="token string">&quot;@/sayhi&quot;</span>

<span class="token function">sayhello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extensions-拓展名" tabindex="-1"><a class="header-anchor" href="#extensions-拓展名" aria-hidden="true">#</a> extensions 拓展名</h2><p>你是否有注意到，我们前面的所有例子中，在引入js文件时不需要写 <code>import sayhello from &quot;sayhello.js&quot;</code> ，我们可以将后缀 <code>.js</code> 省略。</p><p>这是因为 webpack 自动帮我们配置了 <code>extensions</code> :</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，在编译的时候webpack就查找目标路径下的 <code>.js</code> 后缀的文件。那么我们如果想要查找 <code>.jsx</code> 文件，只需要添加：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当我们编写<code>import sayhello from &quot;sayhello&quot;</code> 时，webpack 在编译时会先查找 <code>sayhello.js</code> 文件，如果没有找到，则继续查找 <code>sayhello.jsx</code> 文件.</p><p><strong>注意：</strong></p><p>webpack 有一个默认的 extensions 数组，如果你试着 <code>import</code> 一个不存在的文件，在使用webpack打包时你会得到如下的错误：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;./utils/foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    Field <span class="token string">&#39;browser&#39;</span> doesn<span class="token string">&#39;t contain a valid alias configuration
        D:\\code\\webpack-demos-pro\\resolve\\utils\\foo doesn&#39;</span>t exist
      .js
        Field <span class="token string">&#39;browser&#39;</span> doesn<span class="token string">&#39;t contain a valid alias configuration
        D:\\code\\webpack-demos-pro\\resolve\\utils\\foo.js doesn&#39;</span>t exist
      .json
        Field <span class="token string">&#39;browser&#39;</span> doesn<span class="token string">&#39;t contain a valid alias configuration
        D:\\code\\webpack-demos-pro\\resolve\\utils\\foo.json doesn&#39;</span>t exist
      .wasm
        Field <span class="token string">&#39;browser&#39;</span> doesn<span class="token string">&#39;t contain a valid alias configuration
        D:\\code\\webpack-demos-pro\\resolve\\utils\\foo.wasm doesn&#39;</span>t exist
      as directory
        D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>webpack-demos-pro<span class="token punctuation">\\</span>resolve<span class="token punctuation">\\</span>utils<span class="token punctuation">\\</span>foo doesn&#39;t exist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即webpack本身的配置大概是:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;.wasm&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到我们刚才的例子，如果我们编写了 <code>extensions</code> 属性：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它对原本的 <code>extensions</code> <strong>进行覆盖而不是合并</strong>。</p><p>即如果我们要用 <code>import sayhello from &quot;sayhello&quot;</code> 查找一个 <code>sayhello.json</code> 文件时，我们的配置是做不到的，因为原本能够解析 <code>json</code> 文件的默认拓展被我们覆盖了。如果要和默认配置进行组合，则可以用 <code>&quot;...&quot;</code> 访问默认拓展名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),o=[t];function i(l,c){return n(),a("div",null,o)}const u=s(p,[["render",i],["__file","50.resolve.html.vue"]]);export{u as default};
