import{_ as e,p as n,q as i,a1 as s}from"./framework-c8e009f3.js";const a={},d=s(`<p>配置地址：<code>/etc/nginx</code></p><ol><li>引用其他文件： include [文件路径]</li></ol><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h2><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server{
  resolver : 114.114.114.114;  # 必须指定DNS服务器的地址，否则nginx无法解析目标服务器的域名
  listen 80; # 将80端口收到的请求进行正向或反向代理
  location /{
    proxy_pass http://$host$request_uri;     #设定代理服务器的协议和地址 
  }
}

# $host :表示请求的主机域名。如\`www.baidu.com/pan/beta/test1?fid=3\` 中的 \`www.baidu.com\` 
# $request_uri : 表示请求的地址，如\`www.baidu.com/pan/beta/test1?fid=3\` 中的\`pan/beta/test1?fid=3\` 。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function c(r,t){return n(),i("div",null,l)}const u=e(a,[["render",c],["__file","20.nginx-conf.html.vue"]]);export{u as default};
