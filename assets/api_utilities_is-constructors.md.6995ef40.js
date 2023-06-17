import{_ as s,o as t,c as o,O as a}from"./chunks/framework.4cdeba06.js";const A=JSON.parse('{"title":".utils.isConstructors(constructors)","description":"","frontmatter":{},"headers":[],"relativePath":"api/utilities/is-constructors.md","filePath":"api/utilities/is-constructors.md","lastUpdated":1687021949000}'),n={name:"api/utilities/is-constructors.md"},e=a(`<h1 id="utils-isconstructors-constructors" tabindex="-1">.utils.isConstructors(constructors) <a class="header-anchor" href="#utils-isconstructors-constructors" aria-label="Permalink to &quot;.utils.isConstructors(constructors)&quot;">​</a></h1><p>Returns <code>true</code> if the argument is a <a href="./../types/constructor">Constructor</a> or an <strong>array of constructors</strong> (see <a href="./../types/constructor">Constructor[]</a>), otherwise returns <code>false</code>.</p><p>Usage example:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">isConstructors</span><span style="color:#A6ACCD;">(String)</span></span>
<span class="line"><span style="color:#82AAFF;">isConstructors</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">isConstructors</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"><span style="color:#82AAFF;">isConstructors</span><span style="color:#A6ACCD;">([[]])</span></span>
<span class="line"><span style="color:#82AAFF;">isConstructors</span><span style="color:#A6ACCD;">([String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; false</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>If you pass an empty array, the function returns <code>false</code>. It is more correct and prevents the case when this function returns <code>true</code> when the value for a check is an empty array.</p></div>`,5),r=[e];function c(l,p,i,u,d,y){return t(),o("div",null,r)}const _=s(n,[["render",c]]);export{A as __pageData,_ as default};
