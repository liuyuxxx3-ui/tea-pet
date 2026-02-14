module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1771061132103, function(require, module, exports) {
var e=require("react-hook-form"),r=function(r,t,i){if(r&&"reportValidity"in r){var n=e.get(i,t);r.setCustomValidity(n&&n.message||""),r.reportValidity()}},t=function(e,t){var i=function(i){var n=t.fields[i];n&&n.ref&&"reportValidity"in n.ref?r(n.ref,i,e):n&&n.refs&&n.refs.forEach(function(t){return r(t,i,e)})};for(var n in t.fields)i(n)},i=function(e,r){var t=n(r);return e.some(function(e){return n(e).match("^"+t+"\\.\\d+")})};function n(e){return e.replace(/\]|\[/g,"")}exports.toNestErrors=function(r,n){n.shouldUseNativeValidation&&t(r,n);var a={};for(var o in r){var s=e.get(n.fields,o),f=Object.assign(r[o]||{},{ref:s&&s.ref});if(i(n.names||Object.keys(r),o)){var u=Object.assign({},e.get(a,o));e.set(u,"root",f),e.set(a,o,u)}else e.set(a,o,f)}return a},exports.validateFieldsNatively=t;
//# sourceMappingURL=resolvers.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1771061132103);
})()
//miniprogram-npm-outsideDeps=["react-hook-form"]
//# sourceMappingURL=index.js.map