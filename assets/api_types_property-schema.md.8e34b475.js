import{_ as s,c as a,o as n,a as p}from"./app.ca5da403.js";const A=JSON.parse('{"title":"PropertySchema type","description":"","frontmatter":{},"headers":[],"relativePath":"api/types/property-schema.md","lastUpdated":1673646924000}'),l={name:"api/types/property-schema.md"},e=p(`<h1 id="propertyschema-type" tabindex="-1">PropertySchema type <a class="header-anchor" href="#propertyschema-type" aria-hidden="true">#</a></h1><p>Finished property schema for further parsing.</p><p>When you use functions for creating property schema, you transfer the <a href="./property-schema-raw">PropertySchemaRaw</a> and get the <strong>PropertySchema</strong> type.</p><p>Generics: <code>&lt;Type, ElementType, Required&gt;</code>.</p><p>Usage example:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomPropertyType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> Array[]</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomPropertyElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropertySchema</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> String[]</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CustomPropertyRequired</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema_</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PropertySchema</span><span style="color:#89DDFF;">&lt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">CustomPropertyType</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">CustomPropertyElement</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">CustomPropertyRequired</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">element</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   type: [Array],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   element: {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     type: [String],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     required: true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     default: null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     validator: null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     skipDefaultValidate: false,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   required: false,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   default: null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   validator: null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   skipDefaultValidate: false,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div>`,6),o=[e];function t(r,c,y,i,C,D){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
