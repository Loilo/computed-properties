function e(e){return!(!Array.isArray(e)&&("object"!=typeof e||null===e||e.prototype)||!e.$destroy)}function r(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(0===e.length)throw new TypeError("Cannot convert undefined or null to object");if("assign"in Object)return Object.assign.apply(Object,e);if(1===e.length)return e[0];for(var t in e[1])e[0][t]=e[1][t];return r.apply(void 0,[e[0]].concat(e.slice(2)))}function n(u,c){if(e(c))return c;if(Array.isArray(c)){for(var l=c.slice(0),a=0;a<l.length;a++)l[a]=n(u,l[a]);return function(e){for(var r=[],t=arguments.length-1;t-- >0;)r[t]=arguments[t+1];var u=!0,c=[],l=function(){u||e()},a=function(r){return n(e,r)},i=function(e){for(var r,n=[],t=arguments.length-1;t-- >0;)n[t]=arguments[t+1];return(r=Array.prototype[e]).call.apply(r,[c].concat(n))};return Object.defineProperty(c,"push",{value:function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=i.apply(void 0,["push"].concat(e.map(a)));return e.length&&l(),n},enumerable:!1}),Object.defineProperty(c,"pop",{value:function(){var e=c.length,r=i("pop");return e&&l(),r},enumerable:!1}),Object.defineProperty(c,"shift",{value:function(){var e=c.length,r=i("shift");return e&&l(),r},enumerable:!1}),Object.defineProperty(c,"unshift",{value:function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=i.apply(void 0,["unshift"].concat(e.map(a)));return e.length&&l(),n},enumerable:!1}),Object.defineProperty(c,"splice",{value:function(e,r){for(var n=[],t=arguments.length-2;t-- >0;)n[t]=arguments[t+2];var o=i.apply(void 0,["splice",e,r].concat(n.map(a)));return(o.length||n.length)&&l(),o},enumerable:!1}),Object.defineProperty(c,"sort",{value:function(e){var r=i("sort",e);return l(),r},enumerable:!1}),Object.defineProperty(c,"reverse",{value:function(){var e=i("reverse");return l(),e},enumerable:!1}),Object.defineProperty(c,"$raw",{value:function(){return c.slice(0)},enumerable:!1}),Object.defineProperty(c,"$set",{value:function(e,r){c[e]=a(r),l()},enumerable:!1}),Object.defineProperty(c,"$destroy",{value:function(){return u=!0,c.map(o)},enumerable:!1}),c.push.apply(c,r),u=!1,c}.apply(void 0,[u].concat(l))}if(function(e){return"object"==typeof e&&null!==e&&null==e.prototype}(c)){var i=r({},c);for(var f in i)i[f]=n(u,i[f]);return function(e,o){var u=Object.create(null),c=!0,l=[],a=function(){c||e()};function i(){return Object.getOwnPropertyNames(u).filter(function(e){return"$"!==e[0]}).reduce(function(e,n){var o;return r(Object.create(null),e,((o={})[n]=t(u[n]),o))},Object.create(null))}function f(r,t){if(-1!==l.indexOf(r))throw new Error("Property "+r+" is already defined");var o=t;Object.defineProperty(u,r,{get:function(){return o},set:function(r){var t=r!==o;o=n(e,r),t&&a()},enumerable:!0,configurable:!0}),l.push(r),a()}return Object.defineProperty(u,"$set",{value:function(e,r){f(e,r)},enumerable:!1}),Object.defineProperty(u,"$raw",{value:function(){return i()},enumerable:!1}),Object.defineProperty(u,"$destroy",{value:function(){return c=!0,i()},enumerable:!1}),function(){for(var e=0,r=Object.keys(o);e<r.length;e+=1){var n=r[e];f(n,o[n])}}(),c=!1,u}(u,i)}return c}function t(r){return e(r)?r.$raw():r}function o(r){return e(r)?r.$destroy():r}var u=Reflect?Reflect.get:function(e,r){return e[r]};export default function(e,o){void 0===o&&(o={});var c=o.verbose;void 0===c&&(c=!1);var l=Object.create(null),a=!1,i=null,f=Object.create(null),p=Object.create(null),v={},s={},d=Object.create(null),y=Object.keys(e),b=[];function g(e){c&&console.log("  invalidate cache of property",e),v.hasOwnProperty(e)&&(s[e]=v[e],delete v[e]),l[e]&&u(d,e);for(var r=0,n=Object.keys(p[e]);r<n.length;r+=1)g(n[r])}function h(r){c&&console.log("Define static property",r);var t=n(function(){return g(r)},e[r]);Object.defineProperty(d,r,{get:function(){return c&&console.log("Accessed property",r,"=",t),a&&(c&&console.log("  through tracking of computed property",i),f[i][r]=!0),t},set:function(e){if(e!==t){var o=t;t=n(function(){return g(r)},e),c&&console.log("Set value of property",r,"=",t),c&&console.log("  dependencies to notify:",Object.keys(p[r]));for(var u=0,a=Object.keys(p[r]);u<a.length;u+=1)g(a[u]);l[r]&&l[r].forEach(function(e){return e(t,o)})}}})}function O(r){c&&console.log("Define computed property",r);var n=[];Object.defineProperty(d,r,{get:function(){if(c&&console.log("Accessed computed property",r),a&&(c&&console.log("  through tracking of computed property",i),f[i][r]=!0),v.hasOwnProperty(r))return c&&console.log("  got it from cache"),v[r];var t=s.hasOwnProperty(r);c&&console.log(t?"  it had already been changed":"  it has never been changed before");for(var o=function(r){var n=a,t=i;a=!0,i=r,f[r]=Object.create(null);var o=e[r].call(d,d),u=Object.keys(f[r]||Object.create(null));return delete f[r],n?i=t:a=!1,{dependencies:u,value:o}}(r),u=o.dependencies,y=0,b=n;y<b.length;y+=1)delete p[b[y]][r];for(var g=0,h=u;g<h.length;g+=1)p[h[g]][r]=!0;return n=o.dependencies,c&&console.log("  re-evaluated the computed property"),c&&console.log("    dependencies:",n),c&&console.log("    new value:",o.value),v[r]=o.value,t&&s[r]!==o.value&&l[r]&&l[r].forEach(function(e){return e(o.value,s[r])}),t&&delete s[r],o.value}})}return function(){for(var n=0,o=y;n<o.length;n+=1){var c=o[n];p[c]=Object.create(null),"function"==typeof e[c]?(O(c),b.push(c)):h(c)}return Object.defineProperty(d,"$raw",{value:function(e){return void 0===e&&(e=!0),function(e){return Object.getOwnPropertyNames(d).filter(function(r){return"$"!==r[0]&&(e||-1===b.indexOf(r))}).reduce(function(e,n){var o;return r(Object.create(null),e,((o={})[n]=t(d[n]),o))},Object.create(null))}(e)},enumerable:!1}),Object.defineProperty(d,"$watch",{value:function(e,r){return e in l||(l[e]=[],u(d,e)),l[e].push(r),function(){l[e].splice(l[e].indexOf(r),1),l[e].length||delete l[e]}},enumerable:!1}),d}()}
//# sourceMappingURL=store.mjs.map
