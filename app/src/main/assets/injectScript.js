/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={742:(t,e)=>{"use strict";e.byteLength=function(t){var e=u(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,i=u(t),s=i[0],f=i[1],h=new o(function(t,e,n){return 3*(e+n)/4-n}(0,s,f)),a=0,c=f>0?s-4:s;for(n=0;n<c;n+=4)e=r[t.charCodeAt(n)]<<18|r[t.charCodeAt(n+1)]<<12|r[t.charCodeAt(n+2)]<<6|r[t.charCodeAt(n+3)],h[a++]=e>>16&255,h[a++]=e>>8&255,h[a++]=255&e;return 2===f&&(e=r[t.charCodeAt(n)]<<2|r[t.charCodeAt(n+1)]>>4,h[a++]=255&e),1===f&&(e=r[t.charCodeAt(n)]<<10|r[t.charCodeAt(n+1)]<<4|r[t.charCodeAt(n+2)]>>2,h[a++]=e>>8&255,h[a++]=255&e),h},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],s=16383,f=0,u=r-o;f<u;f+=s)i.push(h(t,f,f+s>u?u:f+s));return 1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"=")),i.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,f=i.length;s<f;++s)n[s]=i[s],r[i.charCodeAt(s)]=s;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function h(t,e,r){for(var o,i,s=[],f=e;f<r;f+=3)o=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(255&t[f+2]),s.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},764:(t,e,n)=>{"use strict";const r=n(742),o=n(645),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.lW=u,e.h2=50;const s=2147483647;function f(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,u.prototype),e}function u(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return c(t)}return h(t,e,n)}function h(t,e,n){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!u.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|d(t,e);let r=f(n);const o=r.write(t,e);return o!==n&&(r=r.slice(0,o)),r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(H(t,Uint8Array)){const e=new Uint8Array(t);return p(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(H(t,ArrayBuffer)||t&&H(t.buffer,ArrayBuffer))return p(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(H(t,SharedArrayBuffer)||t&&H(t.buffer,SharedArrayBuffer)))return p(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return u.from(r,e,n);const o=function(t){if(u.isBuffer(t)){const e=0|g(t.length),n=f(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||J(t.length)?f(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return u.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function c(t){return a(t),f(t<0?0:0|g(t))}function l(t){const e=t.length<0?0:0|g(t.length),n=f(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function p(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,u.prototype),r}function g(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||H(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Y(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return V(t).length;default:if(o)return r?-1:Y(t).length;e=(""+e).toLowerCase(),o=!0}}function y(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,n);case"utf8":case"utf-8":return U(this,e,n);case"ascii":return R(this,e,n);case"latin1":case"binary":return L(this,e,n);case"base64":return _(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function w(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function m(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),J(n=+n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:b(t,e,n,r,o);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):b(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function b(t,e,n,r,o){let i,s=1,f=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,f/=2,u/=2,n/=2}function h(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let r=-1;for(i=n;i<f;i++)if(h(t,i)===h(e,-1===r?0:i-r)){if(-1===r&&(r=i),i-r+1===u)return r*s}else-1!==r&&(i-=i-r),r=-1}else for(n+u>f&&(n=f-u),i=n;i>=0;i--){let n=!0;for(let r=0;r<u;r++)if(h(t,i+r)!==h(e,r)){n=!1;break}if(n)return i}return-1}function v(t,e,n,r){n=Number(n)||0;const o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;const i=e.length;let s;for(r>i/2&&(r=i/2),s=0;s<r;++s){const r=parseInt(e.substr(2*s,2),16);if(J(r))return s;t[n+s]=r}return s}function E(t,e,n,r){return W(Y(e,t.length-n),t,n,r)}function B(t,e,n,r){return W(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function A(t,e,n,r){return W(V(e),t,n,r)}function I(t,e,n,r){return W(function(t,e){let n,r,o;const i=[];for(let s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function _(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function U(t,e,n){n=Math.min(t.length,n);const r=[];let o=e;for(;o<n;){const e=t[o];let i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=n){let n,r,f,u;switch(s){case 1:e<128&&(i=e);break;case 2:n=t[o+1],128==(192&n)&&(u=(31&e)<<6|63&n,u>127&&(i=u));break;case 3:n=t[o+1],r=t[o+2],128==(192&n)&&128==(192&r)&&(u=(15&e)<<12|(63&n)<<6|63&r,u>2047&&(u<55296||u>57343)&&(i=u));break;case 4:n=t[o+1],r=t[o+2],f=t[o+3],128==(192&n)&&128==(192&r)&&128==(192&f)&&(u=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&f,u>65535&&u<1114112&&(i=u))}}null===i?(i=65533,s=1):i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i),o+=s}return function(t){const e=t.length;if(e<=O)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=O));return n}(r)}u.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),u.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(u.prototype,"parent",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.buffer}}),Object.defineProperty(u.prototype,"offset",{enumerable:!0,get:function(){if(u.isBuffer(this))return this.byteOffset}}),u.poolSize=8192,u.from=function(t,e,n){return h(t,e,n)},Object.setPrototypeOf(u.prototype,Uint8Array.prototype),Object.setPrototypeOf(u,Uint8Array),u.alloc=function(t,e,n){return function(t,e,n){return a(t),t<=0?f(t):void 0!==e?"string"==typeof n?f(t).fill(e,n):f(t).fill(e):f(t)}(t,e,n)},u.allocUnsafe=function(t){return c(t)},u.allocUnsafeSlow=function(t){return c(t)},u.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==u.prototype},u.compare=function(t,e){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),H(e,Uint8Array)&&(e=u.from(e,e.offset,e.byteLength)),!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=u.allocUnsafe(e);let o=0;for(n=0;n<t.length;++n){let e=t[n];if(H(e,Uint8Array))o+e.length>r.length?(u.isBuffer(e)||(e=u.from(e)),e.copy(r,o)):Uint8Array.prototype.set.call(r,e,o);else{if(!u.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,o)}o+=e.length}return r},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},u.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},u.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},u.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?U(this,0,t):y.apply(this,arguments)},u.prototype.toLocaleString=u.prototype.toString,u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){let t="";const n=e.h2;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},i&&(u.prototype[i]=u.prototype.inspect),u.prototype.compare=function(t,e,n,r,o){if(H(t,Uint8Array)&&(t=u.from(t,t.offset,t.byteLength)),!u.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(this===t)return 0;let i=(o>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0);const f=Math.min(i,s),h=this.slice(r,o),a=t.slice(e,n);for(let t=0;t<f;++t)if(h[t]!==a[t]){i=h[t],s=a[t];break}return i<s?-1:s<i?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return m(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return m(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let i=!1;for(;;)switch(r){case"hex":return v(this,t,e,n);case"utf8":case"utf-8":return E(this,t,e,n);case"ascii":case"latin1":case"binary":return B(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function R(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function L(t,e,n){let r="";n=Math.min(t.length,n);for(let o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function S(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let o="";for(let r=e;r<n;++r)o+=Z[t[r]];return o}function T(t,e,n){const r=t.slice(e,n);let o="";for(let t=0;t<r.length-1;t+=2)o+=String.fromCharCode(r[t]+256*r[t+1]);return o}function x(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function k(t,e,n,r,o,i){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function C(t,e,n,r,o){q(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i,i>>=8,t[n++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,n}function N(t,e,n,r,o){q(e,r,o,t,n,7);let i=Number(e&BigInt(4294967295));t[n+7]=i,i>>=8,t[n+6]=i,i>>=8,t[n+5]=i,i>>=8,t[n+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=s,s>>=8,t[n+2]=s,s>>=8,t[n+1]=s,s>>=8,t[n]=s,n+8}function M(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function $(t,e,n,r,i){return e=+e,n>>>=0,i||M(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function j(t,e,n,r,i){return e=+e,n>>>=0,i||M(t,0,n,8),o.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,u.prototype),r},u.prototype.readUintLE=u.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return r},u.prototype.readUintBE=u.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);let r=this[t+--e],o=1;for(;e>0&&(o*=256);)r+=this[t+--e]*o;return r},u.prototype.readUint8=u.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},u.prototype.readUint16LE=u.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUint16BE=u.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUint32LE=u.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUint32BE=u.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readBigUInt64LE=Q((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,o=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(o)<<BigInt(32))})),u.prototype.readBigUInt64BE=Q((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],o=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(o)})),u.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);let r=this[t],o=1,i=0;for(;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||x(t,e,this.length);let r=e,o=1,i=this[t+--r];for(;r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},u.prototype.readInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readBigInt64LE=Q((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),u.prototype.readBigInt64BE=Q((function(t){z(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||K(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),u.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!1,52,8)},u.prototype.writeUintLE=u.prototype.writeUIntLE=function(t,e,n,r){t=+t,e>>>=0,n>>>=0,r||k(this,t,e,n,Math.pow(2,8*n)-1,0);let o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},u.prototype.writeUintBE=u.prototype.writeUIntBE=function(t,e,n,r){t=+t,e>>>=0,n>>>=0,r||k(this,t,e,n,Math.pow(2,8*n)-1,0);let o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},u.prototype.writeUint8=u.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,1,255,0),this[e]=255&t,e+1},u.prototype.writeUint16LE=u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeUint16BE=u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeUint32LE=u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},u.prototype.writeUint32BE=u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigUInt64LE=Q((function(t,e=0){return C(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeBigUInt64BE=Q((function(t,e=0){return N(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);k(this,t,e,n,r-1,-r)}let o=0,i=1,s=0;for(this[e]=255&t;++o<n&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);k(this,t,e,n,r-1,-r)}let o=n-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},u.prototype.writeBigInt64LE=Q((function(t,e=0){return C(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeBigInt64BE=Q((function(t,e=0){return N(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),u.prototype.writeFloatLE=function(t,e,n){return $(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return $(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return j(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return j(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(!u.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const o=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),o},u.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{const i=u.isBuffer(t)?t:u.from(t,r),s=i.length;if(0===s)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<n-e;++o)this[o+e]=i[o%s]}return this};const P={};function D(t,e,n){P[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function F(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function q(t,e,n,r,o,i){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let o;throw o=i>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(i+1)}${r}`:`>= -(2${r} ** ${8*(i+1)-1}${r}) and < 2 ** ${8*(i+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new P.ERR_OUT_OF_RANGE("value",o,t)}!function(t,e,n){z(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||K(e,t.length-(n+1))}(r,o,i)}function z(t,e){if("number"!=typeof t)throw new P.ERR_INVALID_ARG_TYPE(e,"number",t)}function K(t,e,n){if(Math.floor(t)!==t)throw z(t,n),new P.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=F(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=F(o)),o+="n"),r+=` It must be ${e}. Received ${o}`,r}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function Y(t,e){let n;e=e||1/0;const r=t.length;let o=null;const i=[];for(let s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function V(t){return r.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function W(t,e,n,r){let o;for(o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function H(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function J(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let o=0;o<16;++o)e[r+o]=t[n]+t[o]}return e}();function Q(t){return"undefined"==typeof BigInt?X:t}function X(){throw new Error("BigInt not supported")}},645:(t,e)=>{e.read=function(t,e,n,r,o){var i,s,f=8*o-r-1,u=(1<<f)-1,h=u>>1,a=-7,c=n?o-1:0,l=n?-1:1,p=t[e+c];for(c+=l,i=p&(1<<-a)-1,p>>=-a,a+=f;a>0;i=256*i+t[e+c],c+=l,a-=8);for(s=i&(1<<-a)-1,i>>=-a,a+=r;a>0;s=256*s+t[e+c],c+=l,a-=8);if(0===i)i=1-h;else{if(i===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,r),i-=h}return(p?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,f,u,h=8*i-o-1,a=(1<<h)-1,c=a>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,g=r?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(f=isNaN(e)?1:0,s=a):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+c>=1?l/u:l*Math.pow(2,1-c))*u>=2&&(s++,u/=2),s+c>=a?(f=0,s=a):s+c>=1?(f=(e*u-1)*Math.pow(2,o),s+=c):(f=e*Math.pow(2,c-1)*Math.pow(2,o),s=0));o>=8;t[n+p]=255&f,p+=g,f/=256,o-=8);for(s=s<<o|f,h+=o;h>0;t[n+p]=255&s,p+=g,s/=256,h-=8);t[n+p-g]|=128*d}},607:function(t,e,n){"use strict";var r=n(764).lW,o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function f(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,f)}u((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.keplr=e.tendermint=e.cosmos=e.cosmostationRequest=e.off=e.on=void 0;const i=t=>new Uint8Array(r.from(t,"hex")),s=t=>r.from(t).toString("hex"),f=(t,e)=>{const n={isCosmostation:!0,message:t,messageId:e};window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.station&&window.webkit.messageHandlers.station.postMessage(JSON.stringify(n)),window.station&&window.station.request(JSON.stringify(n))},u=t=>new Promise(((e,n)=>{const r=Math.floor(99999999*Math.random()),o=t=>{var i,s,f;if((null===(i=t.data)||void 0===i?void 0:i.isCosmostation)&&(null===(s=t.data)||void 0===s?void 0:s.messageId)===r){window.removeEventListener("message",o);const{data:r}=t;(null===(f=r.response)||void 0===f?void 0:f.error)?n(r.response.error):e(r.response.result)}};window.addEventListener("message",o),f(t,r)}));e.on=(t,e)=>{},e.off=(t,e)=>{},e.cosmostationRequest=t=>new Promise(((e,n)=>{const r=Math.floor(99999999*Math.random()),o=t=>{var s,f,u;if((null===(s=t.data)||void 0===s?void 0:s.isCosmostation)&&(null===(f=t.data)||void 0===f?void 0:f.messageId)===r){window.removeEventListener("message",o);const{data:r}=t;if(null===(u=r.response)||void 0===u?void 0:u.error)n(r.response.error);else if("cos_requestAccount"===r.message.method||"cos_account"===r.message.method||"ten_requestAccount"===r.message.method||"ten_account"===r.message.method){const{publicKey:t}=r.response.result;e(Object.assign(Object.assign({},r.response.result),{publicKey:i(t)}))}else if("cos_signDirect"===r.message.method||"ten_signDirect"===r.message.method){const t=r.response.result,n=Object.assign(Object.assign({},t),{signed_doc:Object.assign(Object.assign({},t.signed_doc),{auth_info_bytes:i(t.signed_doc.auth_info_bytes),body_bytes:i(t.signed_doc.body_bytes)})});e(n)}else e(r.response.result)}};if(window.addEventListener("message",o),"cos_signDirect"===t.method||"ten_signDirect"===t.method){const{params:e}=t,n=null==e?void 0:e.doc,o=n?Object.assign(Object.assign({},n),{auth_info_bytes:s(n.auth_info_bytes),body_bytes:s(n.body_bytes)}):n,i=e?Object.assign(Object.assign({},e),{doc:o}):e,u=Object.assign(Object.assign({},t),{params:i});f(u,r)}else f(t,r)}));const h=t=>o(void 0,void 0,void 0,(function*(){try{const e=yield u({method:"cos_requestAccount",params:{chainName:t}});return{isNanoLedger:e.isLedger,isKeystone:e.isKeystone,algo:e.isEthermint?"ethsecp256k1":"secp256k1",pubKey:i(e.publicKey),bech32Address:e.address,name:e.name,address:new Uint8Array}}catch(t){throw new Error(t.message||"Unknown Error")}})),a=(t,e,n)=>o(void 0,void 0,void 0,(function*(){try{const e=yield u({method:"cos_signAmino",params:{chainName:t,isEditFee:!1,isEditMemo:!1,doc:n}});return{signed:e.signed_doc,signature:{pub_key:e.pub_key,signature:e.signature}}}catch(t){throw new Error(t.message||"Unknown Error")}})),c=(t,e,n)=>o(void 0,void 0,void 0,(function*(){const e=yield u({method:"cos_signDirect",params:{chainName:t,doc:{account_number:String(n.accountNumber),auth_info_bytes:s(n.authInfoBytes),body_bytes:s(n.bodyBytes),chain_id:n.chainId}}});return{signed:{accountNumber:e.signed_doc.account_number,chainId:e.signed_doc.chain_id,authInfoBytes:i(e.signed_doc.auth_info_bytes),bodyBytes:i(e.signed_doc.body_bytes)},signature:{pub_key:e.pub_key,signature:e.signature}}})),l=t=>({signAmino:(e,n)=>o(void 0,void 0,void 0,(function*(){return a(t,0,n)})),signDirect:(e,n)=>o(void 0,void 0,void 0,(function*(){return c(t,0,n)})),getAccounts:()=>o(void 0,void 0,void 0,(function*(){const e=yield h(t);return[{address:e.bech32Address,pubkey:e.pubKey,algo:e.algo}]})),chainId:t}),p=t=>({signAmino:(e,n)=>o(void 0,void 0,void 0,(function*(){return a(t,0,n)})),getAccounts:()=>o(void 0,void 0,void 0,(function*(){const e=yield h(t);return[{address:e.bech32Address,pubkey:e.pubKey,algo:e.algo}]})),chainId:t});e.cosmos={on:e.on,off:e.off,request:e.cosmostationRequest},e.tendermint={on:e.on,off:e.off,request:e.cosmostationRequest},e.keplr={mode:"extension",version:"0.11.45",enable:()=>new Promise((t=>{t()})),getKey:h,experimentalSuggestChain:t=>o(void 0,void 0,void 0,(function*(){try{const e=yield u({method:"cos_supportedChainIds"});[...e.official,...e.unofficial].includes(t.chainId)}catch(t){throw new Error(t.message||"Unknown Error")}})),getOfflineSigner:l,getOfflineSignerAuto:t=>o(void 0,void 0,void 0,(function*(){return(yield u({method:"cos_requestAccount",params:{chainName:t}})).isLedger?l(t):p(t)})),getOfflineSignerOnlyAmino:p,sendTx:(t,e,n)=>o(void 0,void 0,void 0,(function*(){try{const o="block"===n?1:"sync"===n?2:"async"===n?3:0,i=yield u({method:"cos_sendTransaction",params:{chainName:t,mode:o,txBytes:r.from(e).toString("base64")}});return r.from(i.tx_response.txhash,"hex")}catch(t){throw new Error(t.message||"Unknown Error")}})),signAmino:a,signDirect:c},window.cosmostation={version:"0.4.11",cosmos:e.cosmos,tendermint:e.tendermint,providers:{keplr:e.keplr}},window.keplr=e.keplr,window.getOfflineSigner=window.keplr.getOfflineSigner,window.getOfflineSignerOnlyAmino=window.keplr.getOfflineSignerOnlyAmino,window.getOfflineSignerAuto=window.keplr.getOfflineSignerAuto}},e={};!function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(607)})();