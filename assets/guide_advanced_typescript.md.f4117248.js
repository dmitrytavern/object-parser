import{_ as s,c as a,o as n,a as p}from"./app.ca5da403.js";const C=JSON.parse('{"title":"Typescript support","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/typescript.md","lastUpdated":1673646924000}'),l={name:"guide/advanced/typescript.md"},e=p(`<h1 id="typescript-support" tabindex="-1">Typescript support <a class="header-anchor" href="#typescript-support" aria-hidden="true">#</a></h1><p>One of the main features of ObjectParser is <strong>TypeScript support</strong>. The idea is for the code to describe the type that the parser returns.</p><p>Simple example:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> property </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">element</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [String</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Boolean]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> property</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> schema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.a - string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.b - string | boolean</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.c - { d: number[] | undefined }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.c.d - number[] | undefined</span></span>
<span class="line"></span></code></pre></div><p>The example above demonstrates what type the parsing result is returned with. <strong>Typing is completely based on the scheme</strong>, which does not require additional writing of interfaces.</p><p>This feature is optional and is needed for the convenience of using the library.</p><h2 id="complex-structures" tabindex="-1">Complex structures <a class="header-anchor" href="#complex-structures" aria-hidden="true">#</a></h2><p>Not correct:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">element</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> schema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.a - number[]</span></span>
<span class="line"></span></code></pre></div><p>Correct:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> property </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">property</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">element</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> property</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> schema)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// typeof value.a - number[] | undefined</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Warning!</p><p>Due to the specificity of typescript and my poor deep understanding of how typescript works, the two examples above, <strong>while identical in functionality</strong>, but <strong>have a type difference</strong> that can <strong>be dangerous for your program</strong>. Maybe this will be fixed in the future, or maybe I made a mistake somewhere.</p></div><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-hidden="true">#</a></h2><p>Unfortunately, all this magic is not free. If you are dealing with complex and huge objects, which, in addition, have multidimensional arrays, <strong>this can heavily load typescript</strong>, which <strong>will lead to lags in the interface</strong> of your IDE. For now, I&#39;ve noticed this in VS Code.</p>`,14),o=[e];function t(r,c,y,D,i,A){return n(),a("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
