"use strict";(self.webpackChunk_jibbarth_site_src=self.webpackChunk_jibbarth_site_src||[]).push([[668],{3668:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});n(8304),n(489),n(1539),n(2419),n(9070),n(8011),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(t,"prototype",{value:Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),writable:!1}),e&&u(t,e)}(l,t);var e,n,r,f=i(l);function l(){return o(this,l),f.apply(this,arguments)}return e=l,(n=[{key:"connect",value:function(){if(navigator.share){this.element.classList.remove("hidden");var t={title:this.element.getAttribute("data-title")},e=document.location.href,n=document.querySelector("link[rel=canonical]");null!==n&&(e=n.href),t.url=e,this.element.onclick=function(e){e.preventDefault(),console.log(t),navigator.share(t).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))}}}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(n(6599).Qr)}}]);