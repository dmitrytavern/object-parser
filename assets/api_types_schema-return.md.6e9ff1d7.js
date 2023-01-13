import{_ as s,c as a,o as n,a as e}from"./app.ca5da403.js";const A=JSON.parse('{"title":"SchemaReturn type","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/schema-return.md","lastUpdated":1673646924000}'),p={name:"api/types/schema-return.md"},l=e(`<h1 id="schemareturn-type" tabindex="-1">SchemaReturn type <a class="header-anchor" href="#schemareturn-type" aria-hidden="true">#</a></h1><p>Returns final object type by a <a href="./schema">Schema</a> object.</p><p>Usage example:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">a2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [Number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Boolean] </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SchemaReturn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Schema</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">&gt;&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   a1: string,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   b1: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     a2: number | boolean</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div>`,4),t=[l];function o(c,r,y,i,D,C){return n(),a("div",null,t)}const _=s(p,[["render",o]]);export{A as __pageData,_ as default};
