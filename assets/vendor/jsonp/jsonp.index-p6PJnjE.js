/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/jsonp@0.2.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import e from"debug";var n=e("jsonp"),o=function(e,o,i){"function"==typeof o&&(i=o,o={});o||(o={});var u,c,m=o.prefix||"__jp",a=o.name||m+t++,p=o.param||"callback",d=null!=o.timeout?o.timeout:6e4,f=encodeURIComponent,l=document.getElementsByTagName("script")[0]||document.head;d&&(c=setTimeout((function(){s(),i&&i(new Error("Timeout"))}),d));function s(){u.parentNode&&u.parentNode.removeChild(u),window[a]=r,c&&clearTimeout(c)}return window[a]=function(e){n("jsonp got",e),s(),i&&i(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+p+"="+f(a)).replace("?&","?"),n('jsonp req "%s"',e),(u=document.createElement("script")).src=e,l.parentNode.insertBefore(u,l),function(){window[a]&&s()}},t=0;function r(){}export{o as default};
