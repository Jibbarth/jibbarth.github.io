/**
 * Bundled by jsDelivr using Rollup v4.62.2 and esbuild v0.28.1.
 * Original file: /npm/jsonp@0.2.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import*as x from"debug";function E(r){return r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var N=E(x),u,d;function h(){if(d)return u;d=1;var r=N("jsonp");u=_;var s=0;function v(){}function _(n,e,o){typeof e=="function"&&(o=e,e={}),e||(e={});var l=e.prefix||"__jp",a=e.name||l+s++,j=e.param||"callback",f=e.timeout!=null?e.timeout:6e4,w=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head,t,i;f&&(i=setTimeout(function(){c(),o&&o(new Error("Timeout"))},f));function c(){t.parentNode&&t.parentNode.removeChild(t),window[a]=v,i&&clearTimeout(i)}function g(){window[a]&&c()}return window[a]=function(p){r("jsonp got",p),c(),o&&o(null,p)},n+=(~n.indexOf("?")?"&":"?")+j+"="+w(a),n=n.replace("?&","?"),r('jsonp req "%s"',n),t=document.createElement("script"),t.src=n,m.parentNode.insertBefore(t,m),g}return u}var q=h();export{q as default};
