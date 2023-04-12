import{_ as p,M as o,p as c,q as i,R as s,t as n,N as t,a1 as a}from"./framework-c8e009f3.js";const l={},u=a(`<h2 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h2><blockquote><p>Spring Boot是一个基于Spring的套件，它帮我们预组装了Spring的一系列组件，以便以尽可能少的代码和配置来开发基于Spring的Java应用程序。</p></blockquote><blockquote><p>以汽车为例，如果我们想组装一辆汽车，我们需要发动机、传动、轮胎、底盘、外壳、座椅、内饰等各种部件，然后把它们装配起来。Spring就相当于提供了一系列这样的部件，但是要装好汽车上路，还需要我们自己动手。而Spring Boot则相当于已经帮我们预装好了一辆可以上路的汽车，如果有特殊的要求，例如把发动机从普通款换成涡轮增压款，可以通过修改配置或编写少量代码完成。</p></blockquote><blockquote><p>因此，<strong>Spring Boot和Spring的关系就是整车和零部件的关系</strong>，它们不是取代关系.</p></blockquote><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>添加依赖，用父模块指定spring boot的版本为3.0.2，这样依赖项中就不用再填写版本号：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--  spring-boot父模块定义版本等信息--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要添加三个依赖即可，分别是服务器相关的依赖 <code>spring-boot-starter-web</code> ，jdbc相关的 <code>spring-boot-starter-data-jpa</code> 以及我们要使用的数据库驱动 <code>mysql-connector-java</code>：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=s("code",null,"spring-boot-starter-web",-1),d=s("code",null,"jackson ,tomcat-embed，spring-core",-1),k={href:"https://cloud.tencent.com/developer/article/1798023",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>现在我们启动项目时不用 <code>@ComponentScan, @Configuration</code> 等等一个一个注解进行配置了，他们已经全部集成在了 <code>@SpringBootApplication</code> 中 ：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AppConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也不用添加注解 <code>@PropertySource</code> 来读取配置文件，<em>Spring boot</em> 默认读取 <strong>resource</strong> 目录下的配置文件 <em>application.properties</em> 或是 <em>application.yaml</em> 。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">spring.jpa.hibernate.ddl-auto</span><span class="token punctuation">=</span><span class="token value attr-value">update</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://\${MYSQL_HOST:localhost}:3306/learnjdbc</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解析：</strong></p><ul><li><code>spring.jpa.hibernate.ddl-auto=update</code> : <em>Spring boot</em> 默认集成了 <em>hiberante</em> 作为JPA配置，但需要手动开启，这里代表使用 <em>hibernate</em> .</li><li><code>\${MYSQL_HOST:localhost}</code> 表示读取环境变量中的 <code>MYSQL_HOST</code> ，如果没有相关环境变量，则使用默认值 <code>localhost</code> .</li><li><code>spring.datasource.driver-class-name</code> : 指明使用什么数据库驱动</li></ul><p>接下来编写一个实体类作为Model：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Entity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">GeneratedValue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">GenerationType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">jakarta<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Id</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Entity</span> <span class="token comment">// This tells Hibernate to make a table out of this class</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy<span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEmail</span><span class="token punctuation">(</span><span class="token class-name">String</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本的<strong>DAO</strong> 操作 <em>Spring Boot</em> 也帮我们配置好了，我们只需要定义一个和 <em>Entity Bean</em> 相关的接口，继承于 <code>CrudRepository</code> 接口即可。这里的 <code>Crud</code> 表示 <code>create , read , update, delete</code> 四种数据库表的基本操作。至于这些接口谁来实现，我们后面再谈。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>repository<span class="token punctuation">.</span></span><span class="token class-name">CrudRepository</span></span><span class="token punctuation">;</span>

<span class="token comment">// CrudRepository&lt;User,Integer&gt; 表示配置生成的DAO的实体类为User,主键类型为Integer</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">CrudRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来配置 <em>servlet</em> ，在 <em>Spring Boot</em> 中，<em>DispatcherServlet</em> 和 <em>tomcat-embed</em> 都已经自动配置好了，我们只需要直接编写 <em>Controller</em> ，而在 <em>Controller</em> 中我们不用再手动对Json字符串进行序列化和反序列化，这些都是配置好的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/api&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserRepository</span> userRepository<span class="token punctuation">;</span>

    <span class="token comment">// 接收form-data类型数据</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;/add&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token annotation punctuation">@ResponseBody</span> <span class="token class-name">User</span> <span class="token function">addNewUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> newUser <span class="token operator">=</span> userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 接收json类型数据</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path<span class="token operator">=</span><span class="token string">&quot;/addJson&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token annotation punctuation">@ResponseBody</span> <span class="token class-name">User</span> <span class="token function">addNewUser2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span> 
        <span class="token class-name">User</span> newUser <span class="token operator">=</span> userRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newUser<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们着重来讨论一下 <code>UserRepository</code> ，可以看到我们注入了一个 <code>UserRepository Bean</code> ，然后可以直接调用它的 <code>save</code> 方法来操作数据库。 <code>save</code> 方法继承于 <code>CrudRepository</code> ，<strong>但他又是在哪里实现的呢？</strong></p><p><em>Spring Boot</em> 欲定义了 <code>CrudRepository</code> 的实现类 <code>SimpleJpaRepository</code>. 但这个 <code>SimpleJpaRepository</code> 又是在哪里实例化为 <em>Bean</em> 的呢？为此我们需要讨论一下 <em>Spring boot</em> 的启动过程：</p><h2 id="spring-boot的启动过程" tabindex="-1"><a class="header-anchor" href="#spring-boot的启动过程" aria-hidden="true">#</a> Spring-boot的启动过程</h2><p>我们运行main方法，在终端会打印出如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2023</span>-02-05T17:33:00.809+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> pers.lyc.AppConfig                       <span class="token builtin class-name">:</span> Starting AppConfig using Java <span class="token number">18.0</span>.1.1 with PID <span class="token number">9944</span> <span class="token punctuation">(</span>D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>java_test<span class="token punctuation">\\</span>HelloSpringBoot<span class="token punctuation">\\</span>target<span class="token punctuation">\\</span>classes started by lemon <span class="token keyword">in</span> D:<span class="token punctuation">\\</span>code<span class="token punctuation">\\</span>java_test<span class="token punctuation">\\</span>HelloSpringBoot<span class="token punctuation">)</span>
<span class="token number">2023</span>-02-05T17:33:00.816+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> pers.lyc.AppConfig                       <span class="token builtin class-name">:</span> No active profile set, falling back to <span class="token number">1</span> default profile: <span class="token string">&quot;default&quot;</span>
<span class="token number">2023</span>-02-05T17:33:01.754+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> .s.d.r.c.RepositoryConfigurationDelegate <span class="token builtin class-name">:</span> Bootstrapping Spring Data JPA repositories <span class="token keyword">in</span> DEFAULT mode.
<span class="token number">2023</span>-02-05T17:33:01.832+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> .s.d.r.c.RepositoryConfigurationDelegate <span class="token builtin class-name">:</span> Finished Spring Data repository scanning <span class="token keyword">in</span> <span class="token number">63</span> ms. Found <span class="token number">1</span> JPA repository interfaces.
<span class="token number">2023</span>-02-05T17:33:02.638+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> o.s.b.w.embedded.tomcat.TomcatWebServer  <span class="token builtin class-name">:</span> Tomcat initialized with port<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">8080</span> <span class="token punctuation">(</span>http<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中注意这一行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2023</span>-02-05T17:33:01.832+08:00  INFO <span class="token number">9944</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> .s.d.r.c.RepositoryConfigurationDelegate <span class="token builtin class-name">:</span> Finished Spring Data repository scanning <span class="token keyword">in</span> <span class="token number">63</span> ms. Found <span class="token number">1</span> JPA repository interfaces.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>RepositoryConfigurationDelegate</code> 程序发现了一个JPA接口。是的，<code>SimpleJpaRepository</code> 就是在这里实例化的。简要过程如下：</p><ol><li><code>RepositoryConfigurationDelegate</code> 查找用户自定义的 <code>JpaRepository</code> 接口，即我们定义的 <code>UserRepository</code>.</li><li><code>RepositoryConfigurationDelegate</code> 将创建 <em>Bean</em> 的任务交给 <code>JpaRepositoryFactoryBean</code> 工厂。</li><li><code>JpaRepositoryFactoryBean</code> 工厂又创建一个 <code>createRepositoryFactory</code> 工厂，它创建了一个 <code>JpaRepositoryFactory</code></li><li><code>JpaRepositoryFactory</code> 类定义了生成最终 <code>JpaRepository</code> 的 <em>bean</em> 使用实现类 <code>SimpleJpaRepository</code> .</li></ol>`,21),v={href:"https://blog.csdn.net/andy_zhang2007/article/details/84064862",target:"_blank",rel:"noopener noreferrer"},g=a('<h2 id="备忘" tabindex="-1"><a class="header-anchor" href="#备忘" aria-hidden="true">#</a> 备忘</h2><h3 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h3><ul><li><code>@Repository</code> : 表明该类是用来执行与数据库相关的操作（即dao对象），并支持<strong>自动处理数据库操作产生的异常</strong>。</li><li><code>@Service</code> : 和通用注解 <code>@Component</code> 同功能，只是注册一个Bean.</li><li><code>@Controller</code> : 标注servlet类，用于 <em>DispatcherServlet</em> 根据路由进行派发。</li></ul>',3);function b(y,h){const e=o("ExternalLinkIcon");return c(),i("div",null,[u,s("p",null,[n("事实上，每个依赖又援引了其他一系列依赖，比如 "),r,n(" 就集成了 "),d,n(" 等等依赖。使用IDEA中的 "),s("a",k,[n("Maven Helper"),t(e)]),n(" 插件可以详细查看所有Maven依赖的集成情况。")]),m,s("p",null,[n("详细过程可以查看"),s("a",v,[n("安迪源文的源码分析"),t(e)]),n("。")]),g])}const f=p(l,[["render",b],["__file","450.Spring-Boot.html.vue"]]);export{f as default};
