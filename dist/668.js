"use strict";(self.webpackChunk_jibbarth_site_src=self.webpackChunk_jibbarth_site_src||[]).push([[668],{3668:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});r(5399),r(1517),r(8052),r(228),r(50),r(1013),r(739),r(9373),r(9903),r(9749),r(6544),r(9288),r(4254),r(752),r(1694),r(6265);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,c=void 0,c=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===n(c)?c:String(c)),o)}var i,c}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=u(t);if(e){var i=u(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(f,t);var e,r,n,u=c(f);function f(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),u.apply(this,arguments)}return e=f,(r=[{key:"connect",value:function(){if(navigator.share){this.element.classList.remove("hidden");var t={title:this.element.getAttribute("data-title")},e=document.location.href,r=document.querySelector("link[rel=canonical]");null!==r&&(e=r.href),t.url=e,this.element.onclick=function(e){e.preventDefault(),console.log(t),navigator.share(t).then((function(){return console.log("Successful share")})).catch((function(t){return console.log("Error sharing",t)}))}}}}])&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),f}(r(6599).Qr)}}]);