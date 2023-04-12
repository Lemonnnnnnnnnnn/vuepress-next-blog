import{_ as a,M as t,p as o,q as c,R as e,t as s,N as i,a1 as l}from"./framework-c8e009f3.js";const r={},d=e("p",null,"why english ? because the chinese support in the ubuntu is so poor. after many work,I only can type chinese in the terminal, but can't input chinese in the firefox and vscode.",-1),p=e("h2",{id:"how-to-install-clash",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-install-clash","aria-hidden":"true"},"#"),s(" how to install clash?")],-1),u=e("code",null,"go cmd",-1),h=e("code",null,"$ go install github.com/Dreamacro/clash@latest",-1),m=e("strong",null,"time out",-1),v={href:"https://github.com/Dreamacro/clash/releases",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"clash-linux-386-v1.10.6.gz",-1),f=e("code",null,"clash-linux-amd64-v1.10.6.gz",-1),k=l(`<p>we use <code>clash-linux-amd64-v1.10.6.gz</code> go on . wait it download completed. extract the <code>.gz file</code> . <code>cd clash-linux-amd64-v1.10.6</code>,because the runable file name is too long , <code>mv [name] clash</code>. and try to run it <code>./clash</code>. it will generate a <code>config.yaml</code> in the <code>~/.config/clash/</code> dir.</p><h2 id="how-to-configue" tabindex="-1"><a class="header-anchor" href="#how-to-configue" aria-hidden="true">#</a> how to configue</h2><p>open your proxy provider website , copy the subscribe link and open it in the new tab. then add a <code>&amp;flag=clash</code> in the url end. download the website and rename it to <code>config.yaml</code>. replace the source file and run clash again.</p><h2 id="how-to-auto-run-with-boot" tabindex="-1"><a class="header-anchor" href="#how-to-auto-run-with-boot" aria-hidden="true">#</a> how to auto run with boot?</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># create service</span>
<span class="token function">sudo</span> <span class="token function">touch</span> /etc/systemd/system/clash.service

<span class="token comment"># edit</span>
<span class="token function">sudo</span> <span class="token function">vim</span>  /etc/systemd/system/clash.service

<span class="token comment"># input</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span> 
<span class="token assign-left variable">Description</span><span class="token operator">=</span>clash daemon  
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span> 
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple 
<span class="token assign-left variable">User</span><span class="token operator">=</span><span class="token string">&quot;your username&quot;</span> <span class="token comment"># need yourself message</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span><span class="token string">&quot;runable file path&quot;</span> <span class="token comment"># need yourself message</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure  
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span> 
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
<span class="token comment"># :wq!</span>

<span class="token comment"># run</span>
<span class="token comment"># refresh the config file</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clash.service
<span class="token function">sudo</span> systemctl start clash.service
<span class="token comment"># check if success or not</span>
<span class="token function">sudo</span> systemctl status clash.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="how-to-change-proxies" tabindex="-1"><a class="header-anchor" href="#how-to-change-proxies" aria-hidden="true">#</a> how to change proxies</h1><p>clash provider a GUI in the browser. open <code>http://clash.razord.top/#/proxies</code> and select proxies</p>`,7);function g(_,w){const n=t("ExternalLinkIcon");return o(),c("div",null,[d,p,e("p",null,[s("even though you can insatll clash through "),u,s(" like "),h,s(" , but there are so many dns and sfw problem that we always get a "),m,s(" result. so the best install method is download release from "),e("a",v,[s("https://github.com/Dreamacro/clash/releases"),i(n)]),s(" and build ourselves. "),b,s(" and "),f,s(" are both work.")]),k])}const x=a(r,[["render",g],["__file","110.clash.html.vue"]]);export{x as default};
