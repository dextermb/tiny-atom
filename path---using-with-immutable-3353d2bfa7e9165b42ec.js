webpackJsonp([0xdc5b7475edc3],{347:function(n,s){n.exports={data:{markdownRemark:{html:'<p><strong>Tiny Atom</strong> works best when you don’t mutate your state objects and instead update everything in an immutable manner.</p>\n<p>By default, <strong>Tiny Atom</strong> shallowly clones and merges state updates into the existing state without mutating the previous state. To perform more complicated state updates, libraries such as <a href="/tiny-atom/using-with-zaphod">Zaphod</a> can be very helpful.</p>\n<p>Another way to actually force immutability in your <code class="language-text">atom</code> is to use an immutable data structure library such as <a href="https://facebook.github.io/immutable-js/" target="_blank" rel="nofollow noopener noreferrer">Immutable.js</a>. For this to work with <strong>Tiny Atom</strong> you’ll have to pass a custom <code class="language-text">initialState</code> and use <code class="language-text">swap</code> instead of <code class="language-text">set</code> in your actions.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Map <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">from</span> <span class="token string">\'immutable\'</span>\n<span class="token keyword">import</span> createAtom <span class="token keyword">from</span> <span class="token string">\'tiny-atom\'</span>\n\n<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token function">createAtom</span><span class="token punctuation">(</span><span class="token function">initialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">initialState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">actions</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    increment<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">,</span> swap <span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> count <span class="token operator">=</span> state<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token function">swap</span><span class="token punctuation">(</span>update<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    decrement<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">,</span> swap <span class="token punctuation">}</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>\n      <span class="token function">swap</span><span class="token punctuation">(</span>nextState<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',excerpt:"Tiny Atom  works best when you don’t mutate your state objects and instead update everything in an immutable manner. By default,  Tiny Atom…",timeToRead:1,frontmatter:{title:"Using with Immutable.js"},parent:{__typename:"File",relativePath:"using-with-immutable.md"}}},pathContext:{slug:"/using-with-immutable/"}}}});
//# sourceMappingURL=path---using-with-immutable-3353d2bfa7e9165b42ec.js.map