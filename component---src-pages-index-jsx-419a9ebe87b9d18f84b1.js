(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),d=a(r("pVnL")),l=a(r("q1tI")),c=a(r("17x9")),u=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),m=function(e){var t=u(e),r=p(t);return g[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function _(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),l.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function z(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+l+o+s+r+a+t+i+n+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(A,(0,d.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,n(a),s):s})),A=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},h,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));A.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,z=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,d.default)({opacity:I?1:0,transition:L?"opacity "+b+"ms":"none"},s),C="boolean"==typeof y?"lightgray":y,W={transitionDelay:b+"ms"},V=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},L&&W),s),f),q={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:S};if(g){var N=g,H=h(g);return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&W)}),H.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:q,imageVariants:N,generateSources:O}),H.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:q,imageVariants:N,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,_(N),l.default.createElement(A,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:r,title:t,loading:w},H),{},{imageVariants:N}))}}))}if(m){var T=m,k=h(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete M.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},C&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},L&&W)}),k.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:q,imageVariants:T,generateSources:O}),k.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:q,imageVariants:T,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,_(T),l.default.createElement(A,{alt:r,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:z})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:r,title:t,loading:w},k),{},{imageVariants:T}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});L.propTypes={resolutions:j,sizes:C,fixed:c.default.oneOfType([j,c.default.arrayOf(j)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var W=L;t.default=W},Dtc0:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return g}));var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("9Koi"),s=r("yDJ3"),d=r.n(s),l=r("L12J"),c=r("ezAz"),u=r("9eSz"),f=r.n(u),p=function(){var e=c.data;return n.a.createElement(f.a,{fluid:e.placeholderImage.childImageSharp.fluid})},h=r("dmsj"),g=(r("sC2a"),"1608461599");t.default=function(e){var t=e.data,r=function(e,t,r){var a=e.language.replace("-","_");return d()(t,r+"_"+a)||""}(Object(o.a)().i18n,d()(t,"allKeyValue.edges[0].node",{}),"value");return n.a.createElement(l.a,null,n.a.createElement(h.a,{title:"Home"}),n.a.createElement("h1",null,"Hi people"),n.a.createElement("p",null,"Welcome,",r),n.a.createElement("p",null,"Now go build something great."),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(p,null)),n.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))}},SGlo:function(e,t,r){"use strict";var a=r("rj/q"),n=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),s=r("xa9o"),d=r("yde8"),l=r("Wadk"),c=r("qDzq"),u=r("O1i0"),f=l(5),p=l(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var l=e((function(e,a){s(e,l,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=a&&d(a,r,e[i],e)}));return a(l.prototype,{delete:function(e){if(!o(e))return!1;var r=n(e);return!0===r?g(u(this,t)).delete(e):r&&c(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=n(e);return!0===r?g(u(this,t)).has(e):r&&c(r,this._i)}}),l},def:function(e,t,r){var a=n(i(t),!0);return!0===a?g(e).set(t,r):a[e._i]=r,e},ufstore:g}},eMsz:function(e,t,r){"use strict";var a,n=r("emib"),i=r("Wadk")(0),o=r("IYdN"),s=r("N+BI"),d=r("k5Iv"),l=r("SGlo"),c=r("BjK0"),u=r("O1i0"),f=r("O1i0"),p=!n.ActiveXObject&&"ActiveXObject"in n,h=s.getWeak,g=Object.isExtensible,m=l.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(c(e)){var t=h(e);return!0===t?m(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},v=e.exports=r("94Pd")("WeakMap",y,b,l,!0,!0);f&&p&&(d((a=l.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,r=t[e];o(t,e,(function(t,n){if(c(t)&&!g(t)){this._f||(this._f=new a);var i=this._f[e](t,n);return"set"==e?this:i}return r.call(this,t,n)}))})))},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"t+fG":function(e,t,r){var a=r("P8UN"),n=r("96qb"),i=r("ap2Z"),o=/"/g,s=function(e,t,r,a){var n=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},yDJ3:function(e,t,r){(function(t){r("MIFh"),r("AqHK"),r("sC2a"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("8npG");var a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/,i=/^\./,o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();var f,p=Array.prototype,h=Function.prototype,g=Object.prototype,m=u["__core-js_shared__"],y=(f=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",b=h.toString,v=g.hasOwnProperty,S=g.toString,_=RegExp("^"+b.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=u.Symbol,E=p.splice,O=q(u,"Map"),z=q(Object,"create"),I=w?w.prototype:void 0,R=I?I.toString:void 0;function x(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function A(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function L(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function j(e,t){for(var r,a,n=e.length;n--;)if((r=e[n][0])===(a=t)||r!=r&&a!=a)return n;return-1}function C(e,t){for(var r,i=0,o=(t=function(e,t){if(k(e))return!1;var r=typeof e;if("number"==r||"symbol"==r||"boolean"==r||null==e||P(e))return!0;return n.test(e)||!a.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:k(r=t)?r:N(r)).length;null!=e&&i<o;)e=e[H(t[i++])];return i&&i==o?e:void 0}function W(e){return!(!M(e)||(t=e,y&&y in t))&&(function(e){var t=M(e)?S.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}(e)?_:d).test(function(e){if(null!=e){try{return b.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function V(e,t){var r,a,n=e.__data__;return("string"==(a=typeof(r=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==r:null===r)?n["string"==typeof t?"string":"hash"]:n.map}function q(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return W(r)?r:void 0}x.prototype.clear=function(){this.__data__=z?z(null):{}},x.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},x.prototype.get=function(e){var t=this.__data__;if(z){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return v.call(t,e)?t[e]:void 0},x.prototype.has=function(e){var t=this.__data__;return z?void 0!==t[e]:v.call(t,e)},x.prototype.set=function(e,t){return this.__data__[e]=z&&void 0===t?"__lodash_hash_undefined__":t,this},A.prototype.clear=function(){this.__data__=[]},A.prototype.delete=function(e){var t=this.__data__,r=j(t,e);return!(r<0)&&(r==t.length-1?t.pop():E.call(t,r,1),!0)},A.prototype.get=function(e){var t=this.__data__,r=j(t,e);return r<0?void 0:t[r][1]},A.prototype.has=function(e){return j(this.__data__,e)>-1},A.prototype.set=function(e,t){var r=this.__data__,a=j(r,e);return a<0?r.push([e,t]):r[a][1]=t,this},L.prototype.clear=function(){this.__data__={hash:new x,map:new(O||A),string:new x}},L.prototype.delete=function(e){return V(this,e).delete(e)},L.prototype.get=function(e){return V(this,e).get(e)},L.prototype.has=function(e){return V(this,e).has(e)},L.prototype.set=function(e,t){return V(this,e).set(e,t),this};var N=T((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(P(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var r=[];return i.test(e)&&r.push(""),e.replace(o,(function(e,t,a,n){r.push(a?n.replace(s,"$1"):t||e)})),r}));function H(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function T(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function r(){var a=arguments,n=t?t.apply(this,a):a[0],i=r.cache;if(i.has(n))return i.get(n);var o=e.apply(this,a);return r.cache=i.set(n,o),o};return r.cache=new(T.Cache||L),r}T.Cache=L;var k=Array.isArray;function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function P(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==S.call(e)}e.exports=function(e,t,r){var a=null==e?void 0:C(e,t);return void 0===a?r:a}}).call(this,r("yLpj"))},zTTH:function(e,t,r){"use strict";var a=r("P8UN"),n=r("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-jsx-419a9ebe87b9d18f84b1.js.map