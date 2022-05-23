(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,b=m["".concat(a,".").concat(f)]||m[f]||s[f]||c;return r?o.a.createElement(b,i(i({ref:t},p),{},{components:r})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),c=(r(0),r(116)),a=["components"],i={title:"EVM"},u={unversionedId:"evm",id:"evm",isDocsHomePage:!1,title:"EVM",description:"\u8fd9\u662f\u6240\u8bf4\u7684\u201cRMRK 3\u201d\u7684\u4e24\u4e2a\u7248\u672c\u4e4b\u4e00 \u2014\u2014 Solidity\u8bed\u8a00\u89c4\u8303\u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u5b83\u4e0eMoonriver\u3001Moonbeam\u3001Polygon\u3001Ethereum\u7b49EVM\u533a\u5757\u94fe\u517c\u5bb9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/evm.md",slug:"/evm",permalink:"/zh-CN/evm",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/evm.md",version:"current",sidebar:"docs",previous:{title:"Synchronization",permalink:"/zh-CN/syncing"},next:{title:"FRAME\u5b9e\u73b0",permalink:"/zh-CN/pallets"}},p=[],l={toc:p};function m(e){var t=e.components,r=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8fd9\u662f\u6240\u8bf4\u7684\u201cRMRK 3\u201d\u7684\u4e24\u4e2a\u7248\u672c\u4e4b\u4e00 \u2014\u2014 Solidity\u8bed\u8a00\u89c4\u8303\u7684\u5b9e\u73b0\uff0c\u56e0\u6b64\u5b83\u4e0eMoonriver\u3001Moonbeam\u3001Polygon\u3001Ethereum\u7b49EVM\u533a\u5757\u94fe\u517c\u5bb9\u3002"),Object(c.b)("p",null,"EVM\u5b9e\u73b0\u53ef\u4ee5\u5728",Object(c.b)("a",{parentName:"p",href:"https://github.com/rmrk-team/evm"},"\u8fd9\u91cc"),"\u627e\u5230\u3002\u4f7f\u7528\u6559\u7a0b\u5373\u5c06\u53d1\u5e03\u3002"),Object(c.b)("p",null,"\u8981\u6d4f\u89c8\u6bcf\u4e2a\u72ec\u7acb\u7684",Object(c.b)("a",{parentName:"p",href:"/concepts"},"\u6982\u5ff5"),"\uff0c\u8bf7\u770b\u4e0b\u65b9\u5217\u51fa\u7684\u9002\u7528EIP\u6216\u8005\u5408\u7ea6\u94fe\u63a5\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5373\u5c06\u53d1\u5e03")))}m.isMDXComponent=!0}}]);