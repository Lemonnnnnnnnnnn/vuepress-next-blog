import{_ as e,p as n,q as i,a1 as a}from"./framework-c8e009f3.js";const d={},o=a(`<h2 id="如果-nginx-server-目录下没有-index-html-文件" tabindex="-1"><a class="header-anchor" href="#如果-nginx-server-目录下没有-index-html-文件" aria-hidden="true">#</a> 如果 nginx server 目录下没有 index.html 文件</h2><p><strong>默认会生成一个 index.html 文件</strong>，用于遍历渲染 server 目录下的文件夹和文件。因此nginx可以进行如下配置作为静态文件管理器：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>    location / {
        root   /home/nginx/download;
        autoindex on;    #开启索引功能
        autoindex_exact_size off;  #关闭计算文件确切大小（单位bytes），
                                   #只显示大概大小（单位kb、mb、gb）
        autoindex_localtime on;   #显示本机时间而非 GMT 时间
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alias-和-root" tabindex="-1"><a class="header-anchor" href="#alias-和-root" aria-hidden="true">#</a> alias 和 root</h2><p>root会将访问路径拼接到资源路径上，alias则不会。例如：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>location /abc/ {
    root /data/www
}

# 如果访问 http:[host]/abc/foo.png 则会到服务器的 /data/www/abc/foo.png路径下查找

location /abc/ {
    alias /data/www
}
# 如果访问 http:[host]/abc/foo.png 则会到服务器的 /data/www/foo.png路径下查找
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_403-错误" tabindex="-1"><a class="header-anchor" href="#_403-错误" aria-hidden="true">#</a> 403 错误</h2><p>nginx 默认是以 <code>www-data</code> 和 <code>root</code> 作为用户来运行的，如果访问其他用户的文件，则会出现 403 错误。</p><p><strong>解决方法：</strong></p><ol><li>是在 <code>nginx.conf</code> 的第一行添加： <code>user [你的用户名] [你的用户组]</code> .</li><li>找到想要公开的文件夹，用<code>chmod</code> 命令设置文件权限，如<code>chmod -R 777 [文件夹]</code></li></ol>`,10),s=[o];function l(c,r){return n(),i("div",null,s)}const v=e(d,[["render",l],["__file","40.新手常见问题.html.vue"]]);export{v as default};
