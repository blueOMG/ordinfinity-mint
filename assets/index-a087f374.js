(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Iu(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const et={},zi=[],Ht=()=>{},_m=()=>!1,xm=/^on[^a-z]/,rl=e=>xm.test(e),Ru=e=>e.startsWith("onUpdate:"),mt=Object.assign,Ou=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Em=Object.prototype.hasOwnProperty,je=(e,t)=>Em.call(e,t),Ne=Array.isArray,Vi=e=>ol(e)==="[object Map]",Yh=e=>ol(e)==="[object Set]",Me=e=>typeof e=="function",it=e=>typeof e=="string",il=e=>typeof e=="symbol",Xe=e=>e!==null&&typeof e=="object",Jh=e=>(Xe(e)||Me(e))&&Me(e.then)&&Me(e.catch),Qh=Object.prototype.toString,ol=e=>Qh.call(e),Cm=e=>ol(e).slice(8,-1),Xh=e=>ol(e)==="[object Object]",Nu=e=>it(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=Iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Am=/-(\w)/g,bn=sl(e=>e.replace(Am,(t,n)=>n?n.toUpperCase():"")),Tm=/\B([A-Z])/g,_o=sl(e=>e.replace(Tm,"-$1").toLowerCase()),al=sl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vl=sl(e=>e?`on${al(e)}`:""),ai=(e,t)=>!Object.is(e,t),Gl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ea=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$m=e=>{const t=it(e)?Number(e):NaN;return isNaN(t)?e:t};let Zf;const Lc=()=>Zf||(Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lu(e){if(Ne(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=it(r)?Nm(r):Lu(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(it(e)||Xe(e))return e}const Im=/;(?![^(]*\))/g,Rm=/:([^]+)/,Om=/\/\*[^]*?\*\//g;function Nm(e){const t={};return e.replace(Om,"").split(Im).forEach(n=>{if(n){const r=n.split(Rm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function sn(e){let t="";if(it(e))t=e;else if(Ne(e))for(let n=0;n<e.length;n++){const r=sn(e[n]);r&&(t+=r+" ")}else if(Xe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pm=Iu(Lm);function ep(e){return!!e||e===""}const km=e=>it(e)?e:e==null?"":Ne(e)||Xe(e)&&(e.toString===Qh||!Me(e.toString))?JSON.stringify(e,tp,2):String(e),tp=(e,t)=>t&&t.__v_isRef?tp(e,t.value):Vi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:Yh(t)?{[`Set(${t.size})`]:[...t.values()]}:Xe(t)&&!Ne(t)&&!Xh(t)?String(t):t;let Yt;class np{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yt,!t&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Yt;try{return Yt=this,t()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function rp(e){return new np(e)}function Mm(e,t=Yt){t&&t.active&&t.effects.push(e)}function ip(){return Yt}function op(e){Yt&&Yt.cleanups.push(e)}const Pu=e=>{const t=new Set(e);return t.w=0,t.n=0,t},sp=e=>(e.w&Tr)>0,ap=e=>(e.n&Tr)>0,Bm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Tr},Dm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];sp(o)&&!ap(o)?o.delete(e):t[n++]=o,o.w&=~Tr,o.n&=~Tr}t.length=n}},Pc=new WeakMap;let jo=0,Tr=1;const kc=30;let wn;const ii=Symbol(""),Mc=Symbol("");class ku{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mm(this,r)}run(){if(!this.active)return this.fn();let t=wn,n=_r;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wn,wn=this,_r=!0,Tr=1<<++jo,jo<=kc?Bm(this):Yf(this),this.fn()}finally{jo<=kc&&Dm(this),Tr=1<<--jo,wn=this.parent,_r=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(Yf(this),this.onStop&&this.onStop(),this.active=!1)}}function Yf(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _r=!0;const lp=[];function xo(){lp.push(_r),_r=!1}function Eo(){const e=lp.pop();_r=e===void 0?!0:e}function zt(e,t,n){if(_r&&wn){let r=Pc.get(e);r||Pc.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Pu()),cp(o)}}function cp(e,t){let n=!1;jo<=kc?ap(e)||(e.n|=Tr,n=!sp(e)):n=!e.has(wn),n&&(e.add(wn),wn.deps.push(e))}function Zn(e,t,n,r,o,i){const s=Pc.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&Ne(e)){const l=Number(r);s.forEach((h,d)=>{(d==="length"||!il(d)&&d>=l)&&a.push(h)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":Ne(e)?Nu(n)&&a.push(s.get("length")):(a.push(s.get(ii)),Vi(e)&&a.push(s.get(Mc)));break;case"delete":Ne(e)||(a.push(s.get(ii)),Vi(e)&&a.push(s.get(Mc)));break;case"set":Vi(e)&&a.push(s.get(ii));break}if(a.length===1)a[0]&&Bc(a[0]);else{const l=[];for(const h of a)h&&l.push(...h);Bc(Pu(l))}}function Bc(e,t){const n=Ne(e)?e:[...e];for(const r of n)r.computed&&Jf(r);for(const r of n)r.computed||Jf(r)}function Jf(e,t){(e!==wn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Um=Iu("__proto__,__v_isRef,__isVue"),up=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(il)),Qf=Fm();function Fm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Ge(this);for(let i=0,s=this.length;i<s;i++)zt(r,"get",i+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(Ge)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){xo();const r=Ge(this)[t].apply(this,n);return Eo(),r}}),e}function Wm(e){const t=Ge(this);return zt(t,"has",e),t.hasOwnProperty(e)}class fp{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const o=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(o?i?ew:gp:i?pp:hp).get(t))return t;const s=Ne(t);if(!o){if(s&&je(Qf,n))return Reflect.get(Qf,n,r);if(n==="hasOwnProperty")return Wm}const a=Reflect.get(t,n,r);return(il(n)?up.has(n):Um(n))||(o||zt(t,"get",n),i)?a:ht(a)?s&&Nu(n)?a:a.value:Xe(a)?o?Du(a):Co(a):a}}class dp extends fp{constructor(t=!1){super(!1,t)}set(t,n,r,o){let i=t[n];if(Yi(i)&&ht(i)&&!ht(r))return!1;if(!this._shallow&&(!Ca(r)&&!Yi(r)&&(i=Ge(i),r=Ge(r)),!Ne(t)&&ht(i)&&!ht(r)))return i.value=r,!0;const s=Ne(t)&&Nu(n)?Number(n)<t.length:je(t,n),a=Reflect.set(t,n,r,o);return t===Ge(o)&&(s?ai(r,i)&&Zn(t,"set",n,r):Zn(t,"add",n,r)),a}deleteProperty(t,n){const r=je(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&r&&Zn(t,"delete",n,void 0),o}has(t,n){const r=Reflect.has(t,n);return(!il(n)||!up.has(n))&&zt(t,"has",n),r}ownKeys(t){return zt(t,"iterate",Ne(t)?"length":ii),Reflect.ownKeys(t)}}class jm extends fp{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Hm=new dp,zm=new jm,Vm=new dp(!0),Mu=e=>e,ll=e=>Reflect.getPrototypeOf(e);function Zs(e,t,n=!1,r=!1){e=e.__v_raw;const o=Ge(e),i=Ge(t);n||(ai(t,i)&&zt(o,"get",t),zt(o,"get",i));const{has:s}=ll(o),a=r?Mu:n?Fu:as;if(s.call(o,t))return a(e.get(t));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function Ys(e,t=!1){const n=this.__v_raw,r=Ge(n),o=Ge(e);return t||(ai(e,o)&&zt(r,"has",e),zt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Js(e,t=!1){return e=e.__v_raw,!t&&zt(Ge(e),"iterate",ii),Reflect.get(e,"size",e)}function Xf(e){e=Ge(e);const t=Ge(this);return ll(t).has.call(t,e)||(t.add(e),Zn(t,"add",e,e)),this}function e0(e,t){t=Ge(t);const n=Ge(this),{has:r,get:o}=ll(n);let i=r.call(n,e);i||(e=Ge(e),i=r.call(n,e));const s=o.call(n,e);return n.set(e,t),i?ai(t,s)&&Zn(n,"set",e,t):Zn(n,"add",e,t),this}function t0(e){const t=Ge(this),{has:n,get:r}=ll(t);let o=n.call(t,e);o||(e=Ge(e),o=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&Zn(t,"delete",e,void 0),i}function n0(){const e=Ge(this),t=e.size!==0,n=e.clear();return t&&Zn(e,"clear",void 0,void 0),n}function Qs(e,t){return function(r,o){const i=this,s=i.__v_raw,a=Ge(s),l=t?Mu:e?Fu:as;return!e&&zt(a,"iterate",ii),s.forEach((h,d)=>r.call(o,l(h),l(d),i))}}function Xs(e,t,n){return function(...r){const o=this.__v_raw,i=Ge(o),s=Vi(i),a=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,h=o[e](...r),d=n?Mu:t?Fu:as;return!t&&zt(i,"iterate",l?Mc:ii),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:a?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function rr(e){return function(...t){return e==="delete"?!1:this}}function Gm(){const e={get(i){return Zs(this,i)},get size(){return Js(this)},has:Ys,add:Xf,set:e0,delete:t0,clear:n0,forEach:Qs(!1,!1)},t={get(i){return Zs(this,i,!1,!0)},get size(){return Js(this)},has:Ys,add:Xf,set:e0,delete:t0,clear:n0,forEach:Qs(!1,!0)},n={get(i){return Zs(this,i,!0)},get size(){return Js(this,!0)},has(i){return Ys.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Qs(!0,!1)},r={get(i){return Zs(this,i,!0,!0)},get size(){return Js(this,!0)},has(i){return Ys.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Xs(i,!1,!1),n[i]=Xs(i,!0,!1),t[i]=Xs(i,!1,!0),r[i]=Xs(i,!0,!0)}),[e,n,t,r]}const[Km,qm,Zm,Ym]=Gm();function Bu(e,t){const n=t?e?Ym:Zm:e?qm:Km;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(je(n,o)&&o in r?n:r,o,i)}const Jm={get:Bu(!1,!1)},Qm={get:Bu(!1,!0)},Xm={get:Bu(!0,!1)},hp=new WeakMap,pp=new WeakMap,gp=new WeakMap,ew=new WeakMap;function tw(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nw(e){return e.__v_skip||!Object.isExtensible(e)?0:tw(Cm(e))}function Co(e){return Yi(e)?e:Uu(e,!1,Hm,Jm,hp)}function mp(e){return Uu(e,!1,Vm,Qm,pp)}function Du(e){return Uu(e,!0,zm,Xm,gp)}function Uu(e,t,n,r,o){if(!Xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=nw(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function Gi(e){return Yi(e)?Gi(e.__v_raw):!!(e&&e.__v_isReactive)}function Yi(e){return!!(e&&e.__v_isReadonly)}function Ca(e){return!!(e&&e.__v_isShallow)}function wp(e){return Gi(e)||Yi(e)}function Ge(e){const t=e&&e.__v_raw;return t?Ge(t):e}function vp(e){return Ea(e,"__v_skip",!0),e}const as=e=>Xe(e)?Co(e):e,Fu=e=>Xe(e)?Du(e):e;function bp(e){_r&&wn&&(e=Ge(e),cp(e.dep||(e.dep=Pu())))}function yp(e,t){e=Ge(e);const n=e.dep;n&&Bc(n)}function ht(e){return!!(e&&e.__v_isRef===!0)}function Ze(e){return xp(e,!1)}function _p(e){return xp(e,!0)}function xp(e,t){return ht(e)?e:new rw(e,t)}class rw{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ge(t),this._value=n?t:as(t)}get value(){return bp(this),this._value}set value(t){const n=this.__v_isShallow||Ca(t)||Yi(t);t=n?t:Ge(t),ai(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:as(t),yp(this))}}function pt(e){return ht(e)?e.value:e}const iw={get:(e,t,n)=>pt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return ht(o)&&!ht(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ep(e){return Gi(e)?e:new Proxy(e,iw)}class ow{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ku(t,()=>{this._dirty||(this._dirty=!0,yp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=Ge(this);return bp(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Cp(e,t,n=!1){let r,o;const i=Me(e);return i?(r=e,o=Ht):(r=e.get,o=e.set),new ow(r,o,i||!o,n)}function sw(e,...t){}function xr(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){cl(i,t,n)}return o}function un(e,t,n,r){if(Me(e)){const i=xr(e,t,n,r);return i&&Jh(i)&&i.catch(s=>{cl(s,t,n)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(un(e[i],t,n,r));return o}function cl(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=n;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](e,s,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){xr(l,null,10,[e,s,a]);return}}aw(e,n,o,r)}function aw(e,t,n,r=!0){console.error(e)}let ls=!1,Dc=!1;const $t=[];let Rn=0;const Ki=[];let Gn=null,Yr=0;const Ap=Promise.resolve();let Wu=null;function cs(e){const t=Wu||Ap;return e?t.then(this?e.bind(this):e):t}function lw(e){let t=Rn+1,n=$t.length;for(;t<n;){const r=t+n>>>1,o=$t[r],i=us(o);i<e||i===e&&o.pre?t=r+1:n=r}return t}function ju(e){(!$t.length||!$t.includes(e,ls&&e.allowRecurse?Rn+1:Rn))&&(e.id==null?$t.push(e):$t.splice(lw(e.id),0,e),Tp())}function Tp(){!ls&&!Dc&&(Dc=!0,Wu=Ap.then($p))}function cw(e){const t=$t.indexOf(e);t>Rn&&$t.splice(t,1)}function uw(e){Ne(e)?Ki.push(...e):(!Gn||!Gn.includes(e,e.allowRecurse?Yr+1:Yr))&&Ki.push(e),Tp()}function r0(e,t=ls?Rn+1:0){for(;t<$t.length;t++){const n=$t[t];n&&n.pre&&($t.splice(t,1),t--,n())}}function Sp(e){if(Ki.length){const t=[...new Set(Ki)];if(Ki.length=0,Gn){Gn.push(...t);return}for(Gn=t,Gn.sort((n,r)=>us(n)-us(r)),Yr=0;Yr<Gn.length;Yr++)Gn[Yr]();Gn=null,Yr=0}}const us=e=>e.id==null?1/0:e.id,fw=(e,t)=>{const n=us(e)-us(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function $p(e){Dc=!1,ls=!0,$t.sort(fw);const t=Ht;try{for(Rn=0;Rn<$t.length;Rn++){const n=$t[Rn];n&&n.active!==!1&&xr(n,null,14)}}finally{Rn=0,$t.length=0,Sp(),ls=!1,Wu=null,($t.length||Ki.length)&&$p()}}function dw(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||et;let o=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:g}=r[d]||et;g&&(o=n.map(C=>it(C)?C.trim():C)),p&&(o=n.map(Sm))}let a,l=r[a=Vl(t)]||r[a=Vl(bn(t))];!l&&i&&(l=r[a=Vl(_o(t))]),l&&un(l,e,6,o);const h=r[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,un(h,e,6,o)}}function Ip(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!Me(e)){const l=h=>{const d=Ip(h,t,!0);d&&(a=!0,mt(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(Xe(e)&&r.set(e,null),null):(Ne(i)?i.forEach(l=>s[l]=null):mt(s,i),Xe(e)&&r.set(e,s),s)}function ul(e,t){return!e||!rl(t)?!1:(t=t.slice(2).replace(/Once$/,""),je(e,t[0].toLowerCase()+t.slice(1))||je(e,_o(t))||je(e,t))}let At=null,Rp=null;function Aa(e){const t=At;return At=e,Rp=e&&e.type.__scopeId||null,t}function Wi(e,t=At,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&m0(-1);const i=Aa(t);let s;try{s=e(...o)}finally{Aa(i),r._d&&m0(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Kl(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:l,emit:h,render:d,renderCache:p,data:g,setupState:C,ctx:_,inheritAttrs:$}=e;let k,A;const E=Aa(e);try{if(n.shapeFlag&4){const N=o||r;k=In(d.call(N,N,p,i,C,g,_)),A=l}else{const N=t;k=In(N.length>1?N(i,{attrs:l,slots:a,emit:h}):N(i,null)),A=t.props?l:hw(l)}}catch(N){Yo.length=0,cl(N,e,1),k=Ve(fn)}let z=k;if(A&&$!==!1){const N=Object.keys(A),{shapeFlag:V}=z;N.length&&V&7&&(s&&N.some(Ru)&&(A=pw(A,s)),z=Sr(z,A))}return n.dirs&&(z=Sr(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),k=z,Aa(E),k}const hw=e=>{let t;for(const n in e)(n==="class"||n==="style"||rl(n))&&((t||(t={}))[n]=e[n]);return t},pw=(e,t)=>{const n={};for(const r in e)(!Ru(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gw(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:l}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?i0(r,s,h):!!s;if(l&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(s[g]!==r[g]&&!ul(h,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?i0(r,s,h):!0:!!s;return!1}function i0(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!ul(n,i))return!0}return!1}function mw({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Op="components";function Xr(e,t){return vw(Op,e,!0,t)||e}const ww=Symbol.for("v-ndc");function vw(e,t,n=!0,r=!1){const o=At||_t;if(o){const i=o.type;if(e===Op){const a=p2(i,!1);if(a&&(a===t||a===bn(t)||a===al(bn(t))))return i}const s=o0(o[e]||i[e],t)||o0(o.appContext[e],t);return!s&&r?i:s}}function o0(e,t){return e&&(e[t]||e[bn(t)]||e[al(bn(t))])}const bw=e=>e.__isSuspense;function yw(e,t){t&&t.pendingBranch?Ne(e)?t.effects.push(...e):t.effects.push(e):uw(e)}const ea={};function Rt(e,t,n){return Np(e,t,n)}function Np(e,t,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:s}=et){var a;const l=ip()===((a=_t)==null?void 0:a.scope)?_t:null;let h,d=!1,p=!1;if(ht(e)?(h=()=>e.value,d=Ca(e)):Gi(e)?(h=()=>e,r=!0):Ne(e)?(p=!0,d=e.some(N=>Gi(N)||Ca(N)),h=()=>e.map(N=>{if(ht(N))return N.value;if(Gi(N))return ei(N);if(Me(N))return xr(N,l,2)})):Me(e)?t?h=()=>xr(e,l,2):h=()=>{if(!(l&&l.isUnmounted))return g&&g(),un(e,l,3,[C])}:h=Ht,t&&r){const N=h;h=()=>ei(N())}let g,C=N=>{g=E.onStop=()=>{xr(N,l,4)}},_;if(ds)if(C=Ht,t?n&&un(t,l,3,[h(),p?[]:void 0,C]):h(),o==="sync"){const N=w2();_=N.__watcherHandles||(N.__watcherHandles=[])}else return Ht;let $=p?new Array(e.length).fill(ea):ea;const k=()=>{if(E.active)if(t){const N=E.run();(r||d||(p?N.some((V,q)=>ai(V,$[q])):ai(N,$)))&&(g&&g(),un(t,l,3,[N,$===ea?void 0:p&&$[0]===ea?[]:$,C]),$=N)}else E.run()};k.allowRecurse=!!t;let A;o==="sync"?A=k:o==="post"?A=()=>jt(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),A=()=>ju(k));const E=new ku(h,A);t?n?k():$=E.run():o==="post"?jt(E.run.bind(E),l&&l.suspense):E.run();const z=()=>{E.stop(),l&&l.scope&&Ou(l.scope.effects,E)};return _&&_.push(z),z}function _w(e,t,n){const r=this.proxy,o=it(e)?e.includes(".")?Lp(r,e):()=>r[e]:e.bind(r,r);let i;Me(t)?i=t:(i=t.handler,n=t);const s=_t;Ji(this);const a=Np(o,i.bind(r),n);return s?Ji(s):oi(),a}function Lp(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function ei(e,t){if(!Xe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ht(e))ei(e.value,t);else if(Ne(e))for(let n=0;n<e.length;n++)ei(e[n],t);else if(Yh(e)||Vi(e))e.forEach(n=>{ei(n,t)});else if(Xh(e))for(const n in e)ei(e[n],t);return e}function xw(e,t){const n=At;if(n===null)return e;const r=pl(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,l,h=et]=t[i];s&&(Me(s)&&(s={mounted:s,updated:s}),s.deep&&ei(a),o.push({dir:s,instance:r,value:a,oldValue:void 0,arg:l,modifiers:h}))}return e}function Wr(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let l=a.dir[r];l&&(xo(),un(l,n,8,[e.el,a,e,t]),Eo())}}const hr=Symbol("_leaveCb"),ta=Symbol("_enterCb");function Ew(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{e.isMounted=!0}),Bs(()=>{e.isUnmounting=!0}),e}const en=[Function,Array],Pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Cw={name:"BaseTransition",props:Pp,setup(e,{slots:t}){const n=yn(),r=Ew();let o;return()=>{const i=t.default&&Mp(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const $ of i)if($.type!==fn){s=$;break}}const a=Ge(e),{mode:l}=a;if(r.isLeaving)return ql(s);const h=s0(s);if(!h)return ql(s);const d=Uc(h,a,r,n);Fc(h,d);const p=n.subTree,g=p&&s0(p);let C=!1;const{getTransitionKey:_}=h.type;if(_){const $=_();o===void 0?o=$:$!==o&&(o=$,C=!0)}if(g&&g.type!==fn&&(!Jr(h,g)||C)){const $=Uc(g,a,r,n);if(Fc(g,$),l==="out-in")return r.isLeaving=!0,$.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ql(s);l==="in-out"&&h.type!==fn&&($.delayLeave=(k,A,E)=>{const z=kp(r,g);z[String(g.key)]=g,k[hr]=()=>{A(),k[hr]=void 0,delete d.delayedLeave},d.delayedLeave=E})}return s}}},Aw=Cw;function kp(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Uc(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:C,onLeaveCancelled:_,onBeforeAppear:$,onAppear:k,onAfterAppear:A,onAppearCancelled:E}=t,z=String(e.key),N=kp(n,e),V=(y,x)=>{y&&un(y,r,9,x)},q=(y,x)=>{const S=x[1];V(y,x),Ne(y)?y.every(P=>P.length<=1)&&S():y.length<=1&&S()},Z={mode:i,persisted:s,beforeEnter(y){let x=a;if(!n.isMounted)if(o)x=$||a;else return;y[hr]&&y[hr](!0);const S=N[z];S&&Jr(e,S)&&S.el[hr]&&S.el[hr](),V(x,[y])},enter(y){let x=l,S=h,P=d;if(!n.isMounted)if(o)x=k||l,S=A||h,P=E||d;else return;let I=!1;const W=y[ta]=j=>{I||(I=!0,j?V(P,[y]):V(S,[y]),Z.delayedLeave&&Z.delayedLeave(),y[ta]=void 0)};x?q(x,[y,W]):W()},leave(y,x){const S=String(e.key);if(y[ta]&&y[ta](!0),n.isUnmounting)return x();V(p,[y]);let P=!1;const I=y[hr]=W=>{P||(P=!0,x(),W?V(_,[y]):V(C,[y]),y[hr]=void 0,N[S]===e&&delete N[S])};N[S]=e,g?q(g,[y,I]):I()},clone(y){return Uc(y,t,n,r)}};return Z}function ql(e){if(fl(e))return e=Sr(e),e.children=null,e}function s0(e){return fl(e)?e.children?e.children[0]:void 0:e}function Fc(e,t){e.shapeFlag&6&&e.component?Fc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mp(e,t=!1,n){let r=[],o=0;for(let i=0;i<e.length;i++){let s=e[i];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===Pt?(s.patchFlag&128&&o++,r=r.concat(Mp(s.children,t,a))):(t||s.type!==fn)&&r.push(a!=null?Sr(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function En(e,t){return Me(e)?(()=>mt({name:e.name},t,{setup:e}))():e}const Go=e=>!!e.type.__asyncLoader,fl=e=>e.type.__isKeepAlive;function Tw(e,t){Bp(e,"a",t)}function Sw(e,t){Bp(e,"da",t)}function Bp(e,t,n=_t){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(dl(t,r,n),n){let o=n.parent;for(;o&&o.parent;)fl(o.parent.vnode)&&$w(r,t,n,o),o=o.parent}}function $w(e,t,n,r){const o=dl(t,e,r,!0);Hu(()=>{Ou(r[t],o)},n)}function dl(e,t,n=_t,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;xo(),Ji(n);const a=un(t,n,e,s);return oi(),Eo(),a});return r?o.unshift(i):o.push(i),i}}const er=e=>(t,n=_t)=>(!ds||e==="sp")&&dl(e,(...r)=>t(...r),n),Dp=er("bm"),wi=er("m"),Iw=er("bu"),Rw=er("u"),Bs=er("bum"),Hu=er("um"),Ow=er("sp"),Nw=er("rtg"),Lw=er("rtc");function Pw(e,t=_t){dl("ec",e,t)}function vr(e,t,n={},r,o){if(At.isCE||At.parent&&Go(At.parent)&&At.parent.isCE)return t!=="default"&&(n.name=t),Ve("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Jt();const s=i&&Up(i(n)),a=Ku(Pt,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Up(e){return e.some(t=>$a(t)?!(t.type===fn||t.type===Pt&&!Up(t.children)):!0)?e:null}const Wc=e=>e?Yp(e)?pl(e)||e.proxy:Wc(e.parent):null,Ko=mt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wc(e.parent),$root:e=>Wc(e.root),$emit:e=>e.emit,$options:e=>zu(e),$forceUpdate:e=>e.f||(e.f=()=>ju(e.update)),$nextTick:e=>e.n||(e.n=cs.bind(e.proxy)),$watch:e=>_w.bind(e)}),Zl=(e,t)=>e!==et&&!e.__isScriptSetup&&je(e,t),kw={get({_:e},t){const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:l}=e;let h;if(t[0]!=="$"){const C=s[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Zl(r,t))return s[t]=1,r[t];if(o!==et&&je(o,t))return s[t]=2,o[t];if((h=e.propsOptions[0])&&je(h,t))return s[t]=3,i[t];if(n!==et&&je(n,t))return s[t]=4,n[t];jc&&(s[t]=0)}}const d=Ko[t];let p,g;if(d)return t==="$attrs"&&zt(e,"get",t),d(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==et&&je(n,t))return s[t]=4,n[t];if(g=l.config.globalProperties,je(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Zl(o,t)?(o[t]=n,!0):r!==et&&je(r,t)?(r[t]=n,!0):je(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!n[s]||e!==et&&je(e,s)||Zl(t,s)||(a=i[0])&&je(a,s)||je(r,s)||je(Ko,s)||je(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:je(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function a0(e){return Ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let jc=!0;function Mw(e){const t=zu(e),n=e.proxy,r=e.ctx;jc=!1,t.beforeCreate&&l0(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:C,updated:_,activated:$,deactivated:k,beforeDestroy:A,beforeUnmount:E,destroyed:z,unmounted:N,render:V,renderTracked:q,renderTriggered:Z,errorCaptured:y,serverPrefetch:x,expose:S,inheritAttrs:P,components:I,directives:W,filters:j}=t;if(h&&Bw(h,r,null),s)for(const U in s){const D=s[U];Me(D)&&(r[U]=D.bind(n))}if(o){const U=o.call(n,n);Xe(U)&&(e.data=Co(U))}if(jc=!0,i)for(const U in i){const D=i[U],G=Me(D)?D.bind(n,n):Me(D.get)?D.get.bind(n,n):Ht,te=!Me(D)&&Me(D.set)?D.set.bind(n):Ht,ne=Fe({get:G,set:te});Object.defineProperty(r,U,{enumerable:!0,configurable:!0,get:()=>ne.value,set:fe=>ne.value=fe})}if(a)for(const U in a)Fp(a[U],r,n,U);if(l){const U=Me(l)?l.call(n):l;Reflect.ownKeys(U).forEach(D=>{qo(D,U[D])})}d&&l0(d,e,"c");function R(U,D){Ne(D)?D.forEach(G=>U(G.bind(n))):D&&U(D.bind(n))}if(R(Dp,p),R(wi,g),R(Iw,C),R(Rw,_),R(Tw,$),R(Sw,k),R(Pw,y),R(Lw,q),R(Nw,Z),R(Bs,E),R(Hu,N),R(Ow,x),Ne(S))if(S.length){const U=e.exposed||(e.exposed={});S.forEach(D=>{Object.defineProperty(U,D,{get:()=>n[D],set:G=>n[D]=G})})}else e.exposed||(e.exposed={});V&&e.render===Ht&&(e.render=V),P!=null&&(e.inheritAttrs=P),I&&(e.components=I),W&&(e.directives=W)}function Bw(e,t,n=Ht){Ne(e)&&(e=Hc(e));for(const r in e){const o=e[r];let i;Xe(o)?"default"in o?i=kt(o.from||r,o.default,!0):i=kt(o.from||r):i=kt(o),ht(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function l0(e,t,n){un(Ne(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fp(e,t,n,r){const o=r.includes(".")?Lp(n,r):()=>n[r];if(it(e)){const i=t[e];Me(i)&&Rt(o,i)}else if(Me(e))Rt(o,e.bind(n));else if(Xe(e))if(Ne(e))e.forEach(i=>Fp(i,t,n,r));else{const i=Me(e.handler)?e.handler.bind(n):t[e.handler];Me(i)&&Rt(o,i,e)}}function zu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let l;return a?l=a:!o.length&&!n&&!r?l=t:(l={},o.length&&o.forEach(h=>Ta(l,h,s,!0)),Ta(l,t,s)),Xe(t)&&i.set(t,l),l}function Ta(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Ta(e,i,n,!0),o&&o.forEach(s=>Ta(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=Dw[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const Dw={data:c0,props:u0,emits:u0,methods:Ho,computed:Ho,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Ho,directives:Ho,watch:Fw,provide:c0,inject:Uw};function c0(e,t){return t?e?function(){return mt(Me(e)?e.call(this,this):e,Me(t)?t.call(this,this):t)}:t:e}function Uw(e,t){return Ho(Hc(e),Hc(t))}function Hc(e){if(Ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Nt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ho(e,t){return e?mt(Object.create(null),e,t):t}function u0(e,t){return e?Ne(e)&&Ne(t)?[...new Set([...e,...t])]:mt(Object.create(null),a0(e),a0(t??{})):t}function Fw(e,t){if(!e)return t;if(!t)return e;const n=mt(Object.create(null),e);for(const r in t)n[r]=Nt(e[r],t[r]);return n}function Wp(){return{app:null,config:{isNativeTag:_m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ww=0;function jw(e,t){return function(r,o=null){Me(r)||(r=mt({},r)),o!=null&&!Xe(o)&&(o=null);const i=Wp(),s=new WeakSet;let a=!1;const l=i.app={_uid:Ww++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:v2,get config(){return i.config},set config(h){},use(h,...d){return s.has(h)||(h&&Me(h.install)?(s.add(h),h.install(l,...d)):Me(h)&&(s.add(h),h(l,...d))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,d){return d?(i.components[h]=d,l):i.components[h]},directive(h,d){return d?(i.directives[h]=d,l):i.directives[h]},mount(h,d,p){if(!a){const g=Ve(r,o);return g.appContext=i,d&&t?t(g,h):e(g,h,p),a=!0,l._container=h,h.__vue_app__=l,pl(g.component)||g.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(h,d){return i.provides[h]=d,l},runWithContext(h){Sa=l;try{return h()}finally{Sa=null}}};return l}}let Sa=null;function qo(e,t){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[e]=t}}function kt(e,t,n=!1){const r=_t||At;if(r||Sa){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Sa._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Me(t)?t.call(r&&r.proxy):t}}function Hw(e,t,n,r=!1){const o={},i={};Ea(i,hl,1),e.propsDefaults=Object.create(null),jp(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=r?o:mp(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function zw(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=Ge(o),[l]=e.propsOptions;let h=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ul(e.emitsOptions,g))continue;const C=t[g];if(l)if(je(i,g))C!==i[g]&&(i[g]=C,h=!0);else{const _=bn(g);o[_]=zc(l,a,_,C,e,!1)}else C!==i[g]&&(i[g]=C,h=!0)}}}else{jp(e,t,o,i)&&(h=!0);let d;for(const p in a)(!t||!je(t,p)&&((d=_o(p))===p||!je(t,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(o[p]=zc(l,a,p,void 0,e,!0)):delete o[p]);if(i!==a)for(const p in i)(!t||!je(t,p))&&(delete i[p],h=!0)}h&&Zn(e,"set","$attrs")}function jp(e,t,n,r){const[o,i]=e.propsOptions;let s=!1,a;if(t)for(let l in t){if(ga(l))continue;const h=t[l];let d;o&&je(o,d=bn(l))?!i||!i.includes(d)?n[d]=h:(a||(a={}))[d]=h:ul(e.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,s=!0)}if(i){const l=Ge(n),h=a||et;for(let d=0;d<i.length;d++){const p=i[d];n[p]=zc(o,l,p,h[p],e,!je(h,p))}}return s}function zc(e,t,n,r,o,i){const s=e[n];if(s!=null){const a=je(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Me(l)){const{propsDefaults:h}=o;n in h?r=h[n]:(Ji(o),r=h[n]=l.call(null,t),oi())}else r=l}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===_o(n))&&(r=!0))}return r}function Hp(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},a=[];let l=!1;if(!Me(e)){const d=p=>{l=!0;const[g,C]=Hp(p,t,!0);mt(s,g),C&&a.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return Xe(e)&&r.set(e,zi),zi;if(Ne(i))for(let d=0;d<i.length;d++){const p=bn(i[d]);f0(p)&&(s[p]=et)}else if(i)for(const d in i){const p=bn(d);if(f0(p)){const g=i[d],C=s[p]=Ne(g)||Me(g)?{type:g}:mt({},g);if(C){const _=p0(Boolean,C.type),$=p0(String,C.type);C[0]=_>-1,C[1]=$<0||_<$,(_>-1||je(C,"default"))&&a.push(p)}}}const h=[s,a];return Xe(e)&&r.set(e,h),h}function f0(e){return e[0]!=="$"}function d0(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function h0(e,t){return d0(e)===d0(t)}function p0(e,t){return Ne(t)?t.findIndex(n=>h0(n,e)):Me(t)&&h0(t,e)?0:-1}const zp=e=>e[0]==="_"||e==="$stable",Vu=e=>Ne(e)?e.map(In):[In(e)],Vw=(e,t,n)=>{if(t._n)return t;const r=Wi((...o)=>Vu(t(...o)),n);return r._c=!1,r},Vp=(e,t,n)=>{const r=e._ctx;for(const o in e){if(zp(o))continue;const i=e[o];if(Me(i))t[o]=Vw(o,i,r);else if(i!=null){const s=Vu(i);t[o]=()=>s}}},Gp=(e,t)=>{const n=Vu(t);e.slots.default=()=>n},Gw=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Ge(t),Ea(t,"_",n)):Vp(t,e.slots={})}else e.slots={},t&&Gp(e,t);Ea(e.slots,hl,1)},Kw=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,s=et;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(mt(o,t),!n&&a===1&&delete o._):(i=!t.$stable,Vp(t,o)),s=t}else t&&(Gp(e,t),s={default:1});if(i)for(const a in o)!zp(a)&&s[a]==null&&delete o[a]};function Vc(e,t,n,r,o=!1){if(Ne(e)){e.forEach((g,C)=>Vc(g,t&&(Ne(t)?t[C]:t),n,r,o));return}if(Go(r)&&!o)return;const i=r.shapeFlag&4?pl(r.component)||r.component.proxy:r.el,s=o?null:i,{i:a,r:l}=e,h=t&&t.r,d=a.refs===et?a.refs={}:a.refs,p=a.setupState;if(h!=null&&h!==l&&(it(h)?(d[h]=null,je(p,h)&&(p[h]=null)):ht(h)&&(h.value=null)),Me(l))xr(l,a,12,[s,d]);else{const g=it(l),C=ht(l);if(g||C){const _=()=>{if(e.f){const $=g?je(p,l)?p[l]:d[l]:l.value;o?Ne($)&&Ou($,i):Ne($)?$.includes(i)||$.push(i):g?(d[l]=[i],je(p,l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=s,je(p,l)&&(p[l]=s)):C&&(l.value=s,e.k&&(d[e.k]=s))};s?(_.id=-1,jt(_,n)):_()}}}const jt=yw;function qw(e){return Zw(e)}function Zw(e,t){const n=Lc();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:C=Ht,insertStaticContent:_}=e,$=(M,w,v,L=null,K=null,J=null,re=!1,ae=null,le=!!w.dynamicChildren)=>{if(M===w)return;M&&!Jr(M,w)&&(L=Q(M),fe(M,K,J,!0),M=null),w.patchFlag===-2&&(le=!1,w.dynamicChildren=null);const{type:ie,ref:be,shapeFlag:he}=w;switch(ie){case Ds:k(M,w,v,L);break;case fn:A(M,w,v,L);break;case ma:M==null&&E(w,v,L,re);break;case Pt:I(M,w,v,L,K,J,re,ae,le);break;default:he&1?V(M,w,v,L,K,J,re,ae,le):he&6?W(M,w,v,L,K,J,re,ae,le):(he&64||he&128)&&ie.process(M,w,v,L,K,J,re,ae,le,oe)}be!=null&&K&&Vc(be,M&&M.ref,J,w||M,!w)},k=(M,w,v,L)=>{if(M==null)r(w.el=a(w.children),v,L);else{const K=w.el=M.el;w.children!==M.children&&h(K,w.children)}},A=(M,w,v,L)=>{M==null?r(w.el=l(w.children||""),v,L):w.el=M.el},E=(M,w,v,L)=>{[M.el,M.anchor]=_(M.children,w,v,L,M.el,M.anchor)},z=({el:M,anchor:w},v,L)=>{let K;for(;M&&M!==w;)K=g(M),r(M,v,L),M=K;r(w,v,L)},N=({el:M,anchor:w})=>{let v;for(;M&&M!==w;)v=g(M),o(M),M=v;o(w)},V=(M,w,v,L,K,J,re,ae,le)=>{re=re||w.type==="svg",M==null?q(w,v,L,K,J,re,ae,le):x(M,w,K,J,re,ae,le)},q=(M,w,v,L,K,J,re,ae)=>{let le,ie;const{type:be,props:he,shapeFlag:H,transition:X,dirs:m}=M;if(le=M.el=s(M.type,J,he&&he.is,he),H&8?d(le,M.children):H&16&&y(M.children,le,null,L,K,J&&be!=="foreignObject",re,ae),m&&Wr(M,null,L,"created"),Z(le,M,M.scopeId,re,L),he){for(const c in he)c!=="value"&&!ga(c)&&i(le,c,null,he[c],J,M.children,L,K,Ee);"value"in he&&i(le,"value",null,he.value),(ie=he.onVnodeBeforeMount)&&An(ie,L,M)}m&&Wr(M,null,L,"beforeMount");const f=Yw(K,X);f&&X.beforeEnter(le),r(le,w,v),((ie=he&&he.onVnodeMounted)||f||m)&&jt(()=>{ie&&An(ie,L,M),f&&X.enter(le),m&&Wr(M,null,L,"mounted")},K)},Z=(M,w,v,L,K)=>{if(v&&C(M,v),L)for(let J=0;J<L.length;J++)C(M,L[J]);if(K){let J=K.subTree;if(w===J){const re=K.vnode;Z(M,re,re.scopeId,re.slotScopeIds,K.parent)}}},y=(M,w,v,L,K,J,re,ae,le=0)=>{for(let ie=le;ie<M.length;ie++){const be=M[ie]=ae?pr(M[ie]):In(M[ie]);$(null,be,w,v,L,K,J,re,ae)}},x=(M,w,v,L,K,J,re)=>{const ae=w.el=M.el;let{patchFlag:le,dynamicChildren:ie,dirs:be}=w;le|=M.patchFlag&16;const he=M.props||et,H=w.props||et;let X;v&&jr(v,!1),(X=H.onVnodeBeforeUpdate)&&An(X,v,w,M),be&&Wr(w,M,v,"beforeUpdate"),v&&jr(v,!0);const m=K&&w.type!=="foreignObject";if(ie?S(M.dynamicChildren,ie,ae,v,L,m,J):re||D(M,w,ae,null,v,L,m,J,!1),le>0){if(le&16)P(ae,w,he,H,v,L,K);else if(le&2&&he.class!==H.class&&i(ae,"class",null,H.class,K),le&4&&i(ae,"style",he.style,H.style,K),le&8){const f=w.dynamicProps;for(let c=0;c<f.length;c++){const u=f[c],b=he[u],T=H[u];(T!==b||u==="value")&&i(ae,u,b,T,K,M.children,v,L,Ee)}}le&1&&M.children!==w.children&&d(ae,w.children)}else!re&&ie==null&&P(ae,w,he,H,v,L,K);((X=H.onVnodeUpdated)||be)&&jt(()=>{X&&An(X,v,w,M),be&&Wr(w,M,v,"updated")},L)},S=(M,w,v,L,K,J,re)=>{for(let ae=0;ae<w.length;ae++){const le=M[ae],ie=w[ae],be=le.el&&(le.type===Pt||!Jr(le,ie)||le.shapeFlag&70)?p(le.el):v;$(le,ie,be,null,L,K,J,re,!0)}},P=(M,w,v,L,K,J,re)=>{if(v!==L){if(v!==et)for(const ae in v)!ga(ae)&&!(ae in L)&&i(M,ae,v[ae],null,re,w.children,K,J,Ee);for(const ae in L){if(ga(ae))continue;const le=L[ae],ie=v[ae];le!==ie&&ae!=="value"&&i(M,ae,ie,le,re,w.children,K,J,Ee)}"value"in L&&i(M,"value",v.value,L.value)}},I=(M,w,v,L,K,J,re,ae,le)=>{const ie=w.el=M?M.el:a(""),be=w.anchor=M?M.anchor:a("");let{patchFlag:he,dynamicChildren:H,slotScopeIds:X}=w;X&&(ae=ae?ae.concat(X):X),M==null?(r(ie,v,L),r(be,v,L),y(w.children,v,be,K,J,re,ae,le)):he>0&&he&64&&H&&M.dynamicChildren?(S(M.dynamicChildren,H,v,K,J,re,ae),(w.key!=null||K&&w===K.subTree)&&Gu(M,w,!0)):D(M,w,v,be,K,J,re,ae,le)},W=(M,w,v,L,K,J,re,ae,le)=>{w.slotScopeIds=ae,M==null?w.shapeFlag&512?K.ctx.activate(w,v,L,re,le):j(w,v,L,K,J,re,le):O(M,w,le)},j=(M,w,v,L,K,J,re)=>{const ae=M.component=c2(M,L,K);if(fl(M)&&(ae.ctx.renderer=oe),u2(ae),ae.asyncDep){if(K&&K.registerDep(ae,R),!M.el){const le=ae.subTree=Ve(fn);A(null,le,w,v)}return}R(ae,M,w,v,K,J,re)},O=(M,w,v)=>{const L=w.component=M.component;if(gw(M,w,v))if(L.asyncDep&&!L.asyncResolved){U(L,w,v);return}else L.next=w,cw(L.update),L.update();else w.el=M.el,L.vnode=w},R=(M,w,v,L,K,J,re)=>{const ae=()=>{if(M.isMounted){let{next:be,bu:he,u:H,parent:X,vnode:m}=M,f=be,c;jr(M,!1),be?(be.el=m.el,U(M,be,re)):be=m,he&&Gl(he),(c=be.props&&be.props.onVnodeBeforeUpdate)&&An(c,X,be,m),jr(M,!0);const u=Kl(M),b=M.subTree;M.subTree=u,$(b,u,p(b.el),Q(b),M,K,J),be.el=u.el,f===null&&mw(M,u.el),H&&jt(H,K),(c=be.props&&be.props.onVnodeUpdated)&&jt(()=>An(c,X,be,m),K)}else{let be;const{el:he,props:H}=w,{bm:X,m,parent:f}=M,c=Go(w);if(jr(M,!1),X&&Gl(X),!c&&(be=H&&H.onVnodeBeforeMount)&&An(be,f,w),jr(M,!0),he&&Ce){const u=()=>{M.subTree=Kl(M),Ce(he,M.subTree,M,K,null)};c?w.type.__asyncLoader().then(()=>!M.isUnmounted&&u()):u()}else{const u=M.subTree=Kl(M);$(null,u,v,L,M,K,J),w.el=u.el}if(m&&jt(m,K),!c&&(be=H&&H.onVnodeMounted)){const u=w;jt(()=>An(be,f,u),K)}(w.shapeFlag&256||f&&Go(f.vnode)&&f.vnode.shapeFlag&256)&&M.a&&jt(M.a,K),M.isMounted=!0,w=v=L=null}},le=M.effect=new ku(ae,()=>ju(ie),M.scope),ie=M.update=()=>le.run();ie.id=M.uid,jr(M,!0),ie()},U=(M,w,v)=>{w.component=M;const L=M.vnode.props;M.vnode=w,M.next=null,zw(M,w.props,L,v),Kw(M,w.children,v),xo(),r0(),Eo()},D=(M,w,v,L,K,J,re,ae,le=!1)=>{const ie=M&&M.children,be=M?M.shapeFlag:0,he=w.children,{patchFlag:H,shapeFlag:X}=w;if(H>0){if(H&128){te(ie,he,v,L,K,J,re,ae,le);return}else if(H&256){G(ie,he,v,L,K,J,re,ae,le);return}}X&8?(be&16&&Ee(ie,K,J),he!==ie&&d(v,he)):be&16?X&16?te(ie,he,v,L,K,J,re,ae,le):Ee(ie,K,J,!0):(be&8&&d(v,""),X&16&&y(he,v,L,K,J,re,ae,le))},G=(M,w,v,L,K,J,re,ae,le)=>{M=M||zi,w=w||zi;const ie=M.length,be=w.length,he=Math.min(ie,be);let H;for(H=0;H<he;H++){const X=w[H]=le?pr(w[H]):In(w[H]);$(M[H],X,v,null,K,J,re,ae,le)}ie>be?Ee(M,K,J,!0,!1,he):y(w,v,L,K,J,re,ae,le,he)},te=(M,w,v,L,K,J,re,ae,le)=>{let ie=0;const be=w.length;let he=M.length-1,H=be-1;for(;ie<=he&&ie<=H;){const X=M[ie],m=w[ie]=le?pr(w[ie]):In(w[ie]);if(Jr(X,m))$(X,m,v,null,K,J,re,ae,le);else break;ie++}for(;ie<=he&&ie<=H;){const X=M[he],m=w[H]=le?pr(w[H]):In(w[H]);if(Jr(X,m))$(X,m,v,null,K,J,re,ae,le);else break;he--,H--}if(ie>he){if(ie<=H){const X=H+1,m=X<be?w[X].el:L;for(;ie<=H;)$(null,w[ie]=le?pr(w[ie]):In(w[ie]),v,m,K,J,re,ae,le),ie++}}else if(ie>H)for(;ie<=he;)fe(M[ie],K,J,!0),ie++;else{const X=ie,m=ie,f=new Map;for(ie=m;ie<=H;ie++){const pe=w[ie]=le?pr(w[ie]):In(w[ie]);pe.key!=null&&f.set(pe.key,ie)}let c,u=0;const b=H-m+1;let T=!1,B=0;const F=new Array(b);for(ie=0;ie<b;ie++)F[ie]=0;for(ie=X;ie<=he;ie++){const pe=M[ie];if(u>=b){fe(pe,K,J,!0);continue}let we;if(pe.key!=null)we=f.get(pe.key);else for(c=m;c<=H;c++)if(F[c-m]===0&&Jr(pe,w[c])){we=c;break}we===void 0?fe(pe,K,J,!0):(F[we-m]=ie+1,we>=B?B=we:T=!0,$(pe,w[we],v,null,K,J,re,ae,le),u++)}const ee=T?Jw(F):zi;for(c=ee.length-1,ie=b-1;ie>=0;ie--){const pe=m+ie,we=w[pe],ye=pe+1<be?w[pe+1].el:L;F[ie]===0?$(null,we,v,ye,K,J,re,ae,le):T&&(c<0||ie!==ee[c]?ne(we,v,ye,2):c--)}}},ne=(M,w,v,L,K=null)=>{const{el:J,type:re,transition:ae,children:le,shapeFlag:ie}=M;if(ie&6){ne(M.component.subTree,w,v,L);return}if(ie&128){M.suspense.move(w,v,L);return}if(ie&64){re.move(M,w,v,oe);return}if(re===Pt){r(J,w,v);for(let he=0;he<le.length;he++)ne(le[he],w,v,L);r(M.anchor,w,v);return}if(re===ma){z(M,w,v);return}if(L!==2&&ie&1&&ae)if(L===0)ae.beforeEnter(J),r(J,w,v),jt(()=>ae.enter(J),K);else{const{leave:he,delayLeave:H,afterLeave:X}=ae,m=()=>r(J,w,v),f=()=>{he(J,()=>{m(),X&&X()})};H?H(J,m,f):f()}else r(J,w,v)},fe=(M,w,v,L=!1,K=!1)=>{const{type:J,props:re,ref:ae,children:le,dynamicChildren:ie,shapeFlag:be,patchFlag:he,dirs:H}=M;if(ae!=null&&Vc(ae,null,v,M,!0),be&256){w.ctx.deactivate(M);return}const X=be&1&&H,m=!Go(M);let f;if(m&&(f=re&&re.onVnodeBeforeUnmount)&&An(f,w,M),be&6)xe(M.component,v,L);else{if(be&128){M.suspense.unmount(v,L);return}X&&Wr(M,null,w,"beforeUnmount"),be&64?M.type.remove(M,w,v,K,oe,L):ie&&(J!==Pt||he>0&&he&64)?Ee(ie,w,v,!1,!0):(J===Pt&&he&384||!K&&be&16)&&Ee(le,w,v),L&&_e(M)}(m&&(f=re&&re.onVnodeUnmounted)||X)&&jt(()=>{f&&An(f,w,M),X&&Wr(M,null,w,"unmounted")},v)},_e=M=>{const{type:w,el:v,anchor:L,transition:K}=M;if(w===Pt){Ae(v,L);return}if(w===ma){N(M);return}const J=()=>{o(v),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(M.shapeFlag&1&&K&&!K.persisted){const{leave:re,delayLeave:ae}=K,le=()=>re(v,J);ae?ae(M.el,J,le):le()}else J()},Ae=(M,w)=>{let v;for(;M!==w;)v=g(M),o(M),M=v;o(w)},xe=(M,w,v)=>{const{bum:L,scope:K,update:J,subTree:re,um:ae}=M;L&&Gl(L),K.stop(),J&&(J.active=!1,fe(re,M,w,v)),ae&&jt(ae,w),jt(()=>{M.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ee=(M,w,v,L=!1,K=!1,J=0)=>{for(let re=J;re<M.length;re++)fe(M[re],w,v,L,K)},Q=M=>M.shapeFlag&6?Q(M.component.subTree):M.shapeFlag&128?M.suspense.next():g(M.anchor||M.el),ue=(M,w,v)=>{M==null?w._vnode&&fe(w._vnode,null,null,!0):$(w._vnode||null,M,w,null,null,null,v),r0(),Sp(),w._vnode=M},oe={p:$,um:fe,m:ne,r:_e,mt:j,mc:y,pc:D,pbc:S,n:Q,o:e};let de,Ce;return t&&([de,Ce]=t(oe)),{render:ue,hydrate:de,createApp:jw(ue,de)}}function jr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Yw(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gu(e,t,n=!1){const r=e.children,o=t.children;if(Ne(r)&&Ne(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=pr(o[i]),a.el=s.el),n||Gu(s,a)),a.type===Ds&&(a.el=s.el)}}function Jw(e){const t=e.slice(),n=[0];let r,o,i,s,a;const l=e.length;for(r=0;r<l;r++){const h=e[r];if(h!==0){if(o=n[n.length-1],e[o]<h){t[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,e[n[a]]<h?i=a+1:s=a;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Qw=e=>e.__isTeleport,Zo=e=>e&&(e.disabled||e.disabled===""),g0=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Gc=(e,t)=>{const n=e&&e.to;return it(n)?t?t(n):null:n},Xw={__isTeleport:!0,process(e,t,n,r,o,i,s,a,l,h){const{mc:d,pc:p,pbc:g,o:{insert:C,querySelector:_,createText:$,createComment:k}}=h,A=Zo(t.props);let{shapeFlag:E,children:z,dynamicChildren:N}=t;if(e==null){const V=t.el=$(""),q=t.anchor=$("");C(V,n,r),C(q,n,r);const Z=t.target=Gc(t.props,_),y=t.targetAnchor=$("");Z&&(C(y,Z),s=s||g0(Z));const x=(S,P)=>{E&16&&d(z,S,P,o,i,s,a,l)};A?x(n,q):Z&&x(Z,y)}else{t.el=e.el;const V=t.anchor=e.anchor,q=t.target=e.target,Z=t.targetAnchor=e.targetAnchor,y=Zo(e.props),x=y?n:q,S=y?V:Z;if(s=s||g0(q),N?(g(e.dynamicChildren,N,x,o,i,s,a),Gu(e,t,!0)):l||p(e,t,x,S,o,i,s,a,!1),A)y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):na(t,n,V,h,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const P=t.target=Gc(t.props,_);P&&na(t,P,null,h,0)}else y&&na(t,q,Z,h,1)}Kp(t)},remove(e,t,n,r,{um:o,o:{remove:i}},s){const{shapeFlag:a,children:l,anchor:h,targetAnchor:d,target:p,props:g}=e;if(p&&i(d),s&&i(h),a&16){const C=s||!Zo(g);for(let _=0;_<l.length;_++){const $=l[_];o($,t,n,C,!!$.dynamicChildren)}}},move:na,hydrate:e2};function na(e,t,n,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,t,n);const{el:s,anchor:a,shapeFlag:l,children:h,props:d}=e,p=i===2;if(p&&r(s,t,n),(!p||Zo(d))&&l&16)for(let g=0;g<h.length;g++)o(h[g],t,n,2);p&&r(a,t,n)}function e2(e,t,n,r,o,i,{o:{nextSibling:s,parentNode:a,querySelector:l}},h){const d=t.target=Gc(t.props,l);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Zo(t.props))t.anchor=h(s(e),t,a(e),n,r,o,i),t.targetAnchor=p;else{t.anchor=s(e);let g=p;for(;g;)if(g=s(g),g&&g.nodeType===8&&g.data==="teleport anchor"){t.targetAnchor=g,d._lpa=t.targetAnchor&&s(t.targetAnchor);break}h(p,t,d,n,r,o,i)}Kp(t)}return t.anchor&&s(t.anchor)}const t2=Xw;function Kp(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Pt=Symbol.for("v-fgt"),Ds=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),ma=Symbol.for("v-stc"),Yo=[];let vn=null;function Jt(e=!1){Yo.push(vn=e?null:[])}function n2(){Yo.pop(),vn=Yo[Yo.length-1]||null}let fs=1;function m0(e){fs+=e}function qp(e){return e.dynamicChildren=fs>0?vn||zi:null,n2(),fs>0&&vn&&vn.push(e),e}function On(e,t,n,r,o,i){return qp(Be(e,t,n,r,o,i,!0))}function Ku(e,t,n,r,o){return qp(Ve(e,t,n,r,o,!0))}function $a(e){return e?e.__v_isVNode===!0:!1}function Jr(e,t){return e.type===t.type&&e.key===t.key}const hl="__vInternal",Zp=({key:e})=>e??null,wa=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?it(e)||ht(e)||Me(e)?{i:At,r:e,k:t,f:!!n}:e:null);function Be(e,t=null,n=null,r=0,o=null,i=e===Pt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zp(t),ref:t&&wa(t),scopeId:Rp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:At};return a?(qu(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),fs>0&&!s&&vn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vn.push(l),l}const Ve=r2;function r2(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===ww)&&(e=fn),$a(e)){const a=Sr(e,t,!0);return n&&qu(a,n),fs>0&&!i&&vn&&(a.shapeFlag&6?vn[vn.indexOf(e)]=a:vn.push(a)),a.patchFlag|=-2,a}if(g2(e)&&(e=e.__vccOpts),t){t=i2(t);let{class:a,style:l}=t;a&&!it(a)&&(t.class=sn(a)),Xe(l)&&(wp(l)&&!Ne(l)&&(l=mt({},l)),t.style=Lu(l))}const s=it(e)?1:bw(e)?128:Qw(e)?64:Xe(e)?4:Me(e)?2:0;return Be(e,t,n,r,o,s,i,!0)}function i2(e){return e?wp(e)||hl in e?mt({},e):e:null}function Sr(e,t,n=!1){const{props:r,ref:o,patchFlag:i,children:s}=e,a=t?Zu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Zp(a),ref:t&&t.ref?n&&o?Ne(o)?o.concat(wa(t)):[o,wa(t)]:wa(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sr(e.ssContent),ssFallback:e.ssFallback&&Sr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function o2(e=" ",t=0){return Ve(Ds,null,e,t)}function s2(e,t){const n=Ve(ma,null,e);return n.staticCount=t,n}function Ii(e="",t=!1){return t?(Jt(),Ku(fn,null,e)):Ve(fn,null,e)}function In(e){return e==null||typeof e=="boolean"?Ve(fn):Ne(e)?Ve(Pt,null,e.slice()):typeof e=="object"?pr(e):Ve(Ds,null,String(e))}function pr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Sr(e)}function qu(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Ne(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),qu(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(hl in t)?t._ctx=At:o===3&&At&&(At.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Me(t)?(t={default:t,_ctx:At},n=32):(t=String(t),r&64?(n=16,t=[o2(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=sn([t.class,r.class]));else if(o==="style")t.style=Lu([t.style,r.style]);else if(rl(o)){const i=t[o],s=r[o];s&&i!==s&&!(Ne(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function An(e,t,n,r=null){un(e,t,7,[n,r])}const a2=Wp();let l2=0;function c2(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||a2,i={uid:l2++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hp(r,o),emitsOptions:Ip(r,o),emit:null,emitted:null,propsDefaults:et,inheritAttrs:r.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=dw.bind(null,i),e.ce&&e.ce(i),i}let _t=null;const yn=()=>_t||At;let Yu,Ri,w0="__VUE_INSTANCE_SETTERS__";(Ri=Lc()[w0])||(Ri=Lc()[w0]=[]),Ri.push(e=>_t=e),Yu=e=>{Ri.length>1?Ri.forEach(t=>t(e)):Ri[0](e)};const Ji=e=>{Yu(e),e.scope.on()},oi=()=>{_t&&_t.scope.off(),Yu(null)};function Yp(e){return e.vnode.shapeFlag&4}let ds=!1;function u2(e,t=!1){ds=t;const{props:n,children:r}=e.vnode,o=Yp(e);Hw(e,n,o,t),Gw(e,r);const i=o?f2(e,t):void 0;return ds=!1,i}function f2(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=vp(new Proxy(e.ctx,kw));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?h2(e):null;Ji(e),xo();const i=xr(r,e,0,[e.props,o]);if(Eo(),oi(),Jh(i)){if(i.then(oi,oi),t)return i.then(s=>{v0(e,s,t)}).catch(s=>{cl(s,e,0)});e.asyncDep=i}else v0(e,i,t)}else Jp(e,t)}function v0(e,t,n){Me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Xe(t)&&(e.setupState=Ep(t)),Jp(e,n)}let b0;function Jp(e,t,n){const r=e.type;if(!e.render){if(!t&&b0&&!r.render){const o=r.template||zu(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,h=mt(mt({isCustomElement:i,delimiters:a},s),l);r.render=b0(o,h)}}e.render=r.render||Ht}{Ji(e),xo();try{Mw(e)}finally{Eo(),oi()}}}function d2(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return zt(e,"get","$attrs"),t[n]}}))}function h2(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return d2(e)},slots:e.slots,emit:e.emit,expose:t}}function pl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ep(vp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ko)return Ko[n](e)},has(t,n){return n in t||n in Ko}}))}function p2(e,t=!0){return Me(e)?e.displayName||e.name:e.name||t&&e.__name}function g2(e){return Me(e)&&"__vccOpts"in e}const Fe=(e,t)=>Cp(e,t,ds);function Ao(e,t,n){const r=arguments.length;return r===2?Xe(t)&&!Ne(t)?$a(t)?Ve(e,null,[t]):Ve(e,t):Ve(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),Ve(e,t,n))}const m2=Symbol.for("v-scx"),w2=()=>kt(m2),v2="3.3.8",b2="http://www.w3.org/2000/svg",Qr=typeof document<"u"?document:null,y0=Qr&&Qr.createElement("template"),y2={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Qr.createElementNS(b2,e):Qr.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Qr.createTextNode(e),createComment:e=>Qr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{y0.innerHTML=r?`<svg>${e}</svg>`:e;const a=y0.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ir="transition",Lo="animation",hs=Symbol("_vtc"),Ju=(e,{slots:t})=>Ao(Aw,_2(e),t);Ju.displayName="Transition";const Qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ju.props=mt({},Pp,Qp);const Hr=(e,t=[])=>{Ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},_0=e=>e?Ne(e)?e.some(t=>t.length>1):e.length>1:!1;function _2(e){const t={};for(const I in e)I in Qp||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=s,appearToClass:d=a,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:C=`${n}-leave-to`}=e,_=x2(o),$=_&&_[0],k=_&&_[1],{onBeforeEnter:A,onEnter:E,onEnterCancelled:z,onLeave:N,onLeaveCancelled:V,onBeforeAppear:q=A,onAppear:Z=E,onAppearCancelled:y=z}=t,x=(I,W,j)=>{zr(I,W?d:a),zr(I,W?h:s),j&&j()},S=(I,W)=>{I._isLeaving=!1,zr(I,p),zr(I,C),zr(I,g),W&&W()},P=I=>(W,j)=>{const O=I?Z:E,R=()=>x(W,I,j);Hr(O,[W,R]),x0(()=>{zr(W,I?l:i),or(W,I?d:a),_0(O)||E0(W,r,$,R)})};return mt(t,{onBeforeEnter(I){Hr(A,[I]),or(I,i),or(I,s)},onBeforeAppear(I){Hr(q,[I]),or(I,l),or(I,h)},onEnter:P(!1),onAppear:P(!0),onLeave(I,W){I._isLeaving=!0;const j=()=>S(I,W);or(I,p),A2(),or(I,g),x0(()=>{I._isLeaving&&(zr(I,p),or(I,C),_0(N)||E0(I,r,k,j))}),Hr(N,[I,j])},onEnterCancelled(I){x(I,!1),Hr(z,[I])},onAppearCancelled(I){x(I,!0),Hr(y,[I])},onLeaveCancelled(I){S(I),Hr(V,[I])}})}function x2(e){if(e==null)return null;if(Xe(e))return[Yl(e.enter),Yl(e.leave)];{const t=Yl(e);return[t,t]}}function Yl(e){return $m(e)}function or(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hs]||(e[hs]=new Set)).add(t)}function zr(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[hs];n&&(n.delete(t),n.size||(e[hs]=void 0))}function x0(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let E2=0;function E0(e,t,n,r){const o=e._endId=++E2,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:l}=C2(e,t);if(!s)return r();const h=s+"end";let d=0;const p=()=>{e.removeEventListener(h,g),i()},g=C=>{C.target===e&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},a+1),e.addEventListener(h,g)}function C2(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),o=r(`${ir}Delay`),i=r(`${ir}Duration`),s=C0(o,i),a=r(`${Lo}Delay`),l=r(`${Lo}Duration`),h=C0(a,l);let d=null,p=0,g=0;t===ir?s>0&&(d=ir,p=s,g=i.length):t===Lo?h>0&&(d=Lo,p=h,g=l.length):(p=Math.max(s,h),d=p>0?s>h?ir:Lo:null,g=d?d===ir?i.length:l.length:0);const C=d===ir&&/\b(transform|all)(,|$)/.test(r(`${ir}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:C}}function C0(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>A0(n)+A0(e[r])))}function A0(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function A2(){return document.body.offsetHeight}function T2(e,t,n){const r=e[hs];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qu=Symbol("_vod"),S2={beforeMount(e,{value:t},{transition:n}){e[Qu]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Po(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Po(e,!0),r.enter(e)):r.leave(e,()=>{Po(e,!1)}):Po(e,t))},beforeUnmount(e,{value:t}){Po(e,t)}};function Po(e,t){e.style.display=t?e[Qu]:"none"}function $2(e,t,n){const r=e.style,o=it(n);if(n&&!o){if(t&&!it(t))for(const i in t)n[i]==null&&Kc(r,i,"");for(const i in n)Kc(r,i,n[i])}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Qu in e&&(r.display=i)}}const T0=/\s*!important$/;function Kc(e,t,n){if(Ne(n))n.forEach(r=>Kc(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=I2(e,t);T0.test(n)?e.setProperty(_o(r),n.replace(T0,""),"important"):e[r]=n}}const S0=["Webkit","Moz","ms"],Jl={};function I2(e,t){const n=Jl[t];if(n)return n;let r=bn(t);if(r!=="filter"&&r in e)return Jl[t]=r;r=al(r);for(let o=0;o<S0.length;o++){const i=S0[o]+r;if(i in e)return Jl[t]=i}return t}const $0="http://www.w3.org/1999/xlink";function R2(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS($0,t.slice(6,t.length)):e.setAttributeNS($0,t,n);else{const i=Pm(t);n==null||i&&!ep(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function O2(e,t,n,r,o,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const h=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";h!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const h=typeof e[t];h==="boolean"?n=ep(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function N2(e,t,n,r){e.addEventListener(t,n,r)}function L2(e,t,n,r){e.removeEventListener(t,n,r)}const I0=Symbol("_vei");function P2(e,t,n,r,o=null){const i=e[I0]||(e[I0]={}),s=i[t];if(r&&s)s.value=r;else{const[a,l]=k2(t);if(r){const h=i[t]=D2(r,o);N2(e,a,h,l)}else s&&(L2(e,a,s,l),i[t]=void 0)}}const R0=/(?:Once|Passive|Capture)$/;function k2(e){let t;if(R0.test(e)){t={};let r;for(;r=e.match(R0);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):_o(e.slice(2)),t]}let Ql=0;const M2=Promise.resolve(),B2=()=>Ql||(M2.then(()=>Ql=0),Ql=Date.now());function D2(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(U2(r,n.value),t,5,[r])};return n.value=e,n.attached=B2(),n}function U2(e,t){if(Ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const O0=/^on[a-z]/,F2=(e,t,n,r,o=!1,i,s,a,l)=>{t==="class"?T2(e,r,o):t==="style"?$2(e,n,r):rl(t)?Ru(t)||P2(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):W2(e,t,r,o))?O2(e,t,r,i,s,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),R2(e,t,r,o))};function W2(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&O0.test(t)&&Me(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||O0.test(t)&&it(n)?!1:t in e}const j2=["ctrl","shift","alt","meta"],H2={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>j2.some(n=>e[`${n}Key`]&&!t.includes(n))},z2=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const i=H2[t[o]];if(i&&i(n,t))return}return e(n,...r)},V2=mt({patchProp:F2},y2);let N0;function G2(){return N0||(N0=qw(V2))}const K2=(...e)=>{const t=G2().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=q2(r);if(!o)return;const i=t._component;!Me(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function q2(e){return it(e)?document.querySelector(e):e}const Xu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Z2={},Y2={class:"container-xl",style:{position:"relative",padding:"0",background:"#0A0A0A"}};function J2(e,t){const n=Xr("router-view");return Jt(),On("div",Y2,[Ve(n)])}const Q2=Xu(Z2,[["render",J2]]);function X2(){return Xp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ev=typeof Proxy=="function",tv="devtools-plugin:setup",nv="plugin:settings:set";let Oi,qc;function rv(){var e;return Oi!==void 0||(typeof window<"u"&&window.performance?(Oi=!0,qc=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(Oi=!0,qc=global.perf_hooks.performance):Oi=!1),Oi}function iv(){return rv()?qc.now():Date.now()}class ov{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const s in t.settings){const a=t.settings[s];r[s]=a.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const s=localStorage.getItem(o),a=JSON.parse(s);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(s){try{localStorage.setItem(o,JSON.stringify(s))}catch{}i=s},now(){return iv()}},n&&n.on(nv,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:a,args:l,resolve:h})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function sv(e,t){const n=e,r=Xp(),o=X2(),i=ev&&n.enableEarlyProxy;if(o&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))o.emit(tv,e,t);else{const s=i?new ov(n,o):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mi=typeof window<"u";function av(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function Xl(e,t){const n={};for(const r in t){const o=t[r];n[r]=_n(o)?o.map(e):e(o)}return n}const Jo=()=>{},_n=Array.isArray,lv=/\/$/,cv=e=>e.replace(lv,"");function ec(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=hv(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function uv(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L0(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fv(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Qi(t.matched[r],n.matched[o])&&e1(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function e1(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dv(e[n],t[n]))return!1;return!0}function dv(e,t){return _n(e)?P0(e,t):_n(t)?P0(t,e):e===t}function P0(e,t){return _n(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function hv(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ps;(function(e){e.pop="pop",e.push="push"})(ps||(ps={}));var Qo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qo||(Qo={}));function pv(e){if(!e)if(Mi){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cv(e)}const gv=/^[^#]+#/;function mv(e,t){return e.replace(gv,"#")+t}function wv(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const gl=()=>({left:window.pageXOffset,top:window.pageYOffset});function vv(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=wv(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function k0(e,t){return(history.state?history.state.position-t:-1)+e}const Zc=new Map;function bv(e,t){Zc.set(e,t)}function yv(e){const t=Zc.get(e);return Zc.delete(e),t}let _v=()=>location.protocol+"//"+location.host;function t1(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),L0(l,"")}return L0(n,e)+r+o}function xv(e,t,n,r){let o=[],i=[],s=null;const a=({state:g})=>{const C=t1(e,location),_=n.value,$=t.value;let k=0;if(g){if(n.value=C,t.value=g,s&&s===_){s=null;return}k=$?g.position-$.position:0}else r(C);o.forEach(A=>{A(n.value,_,{delta:k,type:ps.pop,direction:k?k>0?Qo.forward:Qo.back:Qo.unknown})})};function l(){s=n.value}function h(g){o.push(g);const C=()=>{const _=o.indexOf(g);_>-1&&o.splice(_,1)};return i.push(C),C}function d(){const{history:g}=window;g.state&&g.replaceState(Ke({},g.state,{scroll:gl()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function M0(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?gl():null}}function Ev(e){const{history:t,location:n}=window,r={value:t1(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:_v()+e+l;try{t[d?"replaceState":"pushState"](h,"",g),o.value=h}catch(C){console.error(C),n[d?"replace":"assign"](g)}}function s(l,h){const d=Ke({},t.state,M0(o.value.back,l,o.value.forward,!0),h,{position:o.value.position});i(l,d,!0),r.value=l}function a(l,h){const d=Ke({},o.value,t.state,{forward:l,scroll:gl()});i(d.current,d,!0);const p=Ke({},M0(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:o,push:a,replace:s}}function Cv(e){e=pv(e);const t=Ev(e),n=xv(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=Ke({location:"",base:e,go:r,createHref:mv.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Av(e){return typeof e=="string"||e&&typeof e=="object"}function n1(e){return typeof e=="string"||typeof e=="symbol"}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},r1=Symbol("");var B0;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(B0||(B0={}));function Xi(e,t){return Ke(new Error,{type:e,[r1]:!0},t)}function Wn(e,t){return e instanceof Error&&r1 in e&&(t==null||!!(e.type&t))}const D0="[^/]+?",Tv={sensitive:!1,strict:!1,start:!0,end:!0},Sv=/[.+*?^${}()[\]/\\]/g;function $v(e,t){const n=Ke({},Tv,t),r=[];let o=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(o+="/");for(let p=0;p<h.length;p++){const g=h[p];let C=40+(n.sensitive?.25:0);if(g.type===0)p||(o+="/"),o+=g.value.replace(Sv,"\\$&"),C+=40;else if(g.type===1){const{value:_,repeatable:$,optional:k,regexp:A}=g;i.push({name:_,repeatable:$,optional:k});const E=A||D0;if(E!==D0){C+=10;try{new RegExp(`(${E})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+N.message)}}let z=$?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;p||(z=k&&h.length<2?`(?:/${z})`:"/"+z),k&&(z+="?"),o+=z,C+=20,k&&(C+=-8),$&&(C+=-20),E===".*"&&(C+=-50)}d.push(C)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(h){const d=h.match(s),p={};if(!d)return null;for(let g=1;g<d.length;g++){const C=d[g]||"",_=i[g-1];p[_.name]=C&&_.repeatable?C.split("/"):C}return p}function l(h){let d="",p=!1;for(const g of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const C of g)if(C.type===0)d+=C.value;else if(C.type===1){const{value:_,repeatable:$,optional:k}=C,A=_ in h?h[_]:"";if(_n(A)&&!$)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=_n(A)?A.join("/"):A;if(!E)if(k)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${_}"`);d+=E}}return d||"/"}return{re:s,score:r,keys:i,parse:a,stringify:l}}function Iv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Rv(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=Iv(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(U0(r))return 1;if(U0(o))return-1}return o.length-r.length}function U0(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ov={type:0,value:""},Nv=/[a-zA-Z0-9_]/;function Lv(e){if(!e)return[[]];if(e==="/")return[[Ov]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(C){throw new Error(`ERR (${n})/"${h}": ${C}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),s()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:Nv.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),s(),o}function Pv(e,t,n){const r=$v(Lv(e.path),n),o=Ke(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function kv(e,t){const n=[],r=new Map;t=j0({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function i(d,p,g){const C=!g,_=Mv(d);_.aliasOf=g&&g.record;const $=j0(t,d),k=[_];if("alias"in d){const z=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of z)k.push(Ke({},_,{components:g?g.record.components:_.components,path:N,aliasOf:g?g.record:_}))}let A,E;for(const z of k){const{path:N}=z;if(p&&N[0]!=="/"){const V=p.record.path,q=V[V.length-1]==="/"?"":"/";z.path=p.record.path+(N&&q+N)}if(A=Pv(z,p,$),g?g.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),C&&d.name&&!W0(A)&&s(d.name)),_.children){const V=_.children;for(let q=0;q<V.length;q++)i(V[q],A,g&&g.children[q])}g=g||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return E?()=>{s(E)}:Jo}function s(d){if(n1(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function a(){return n}function l(d){let p=0;for(;p<n.length&&Rv(d,n[p])>=0&&(d.record.path!==n[p].record.path||!i1(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!W0(d)&&r.set(d.record.name,d)}function h(d,p){let g,C={},_,$;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Xi(1,{location:d});$=g.record.name,C=Ke(F0(p.params,g.keys.filter(E=>!E.optional).map(E=>E.name)),d.params&&F0(d.params,g.keys.map(E=>E.name))),_=g.stringify(C)}else if("path"in d)_=d.path,g=n.find(E=>E.re.test(_)),g&&(C=g.parse(_),$=g.record.name);else{if(g=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!g)throw Xi(1,{location:d,currentLocation:p});$=g.record.name,C=Ke({},p.params,d.params),_=g.stringify(C)}const k=[];let A=g;for(;A;)k.unshift(A.record),A=A.parent;return{name:$,path:_,params:C,matched:k,meta:Dv(k)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:h,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function F0(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Mv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Bv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Bv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function W0(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dv(e){return e.reduce((t,n)=>Ke(t,n.meta),{})}function j0(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function i1(e,t){return t.children.some(n=>n===e||i1(e,n))}const o1=/#/g,Uv=/&/g,Fv=/\//g,Wv=/=/g,jv=/\?/g,s1=/\+/g,Hv=/%5B/g,zv=/%5D/g,a1=/%5E/g,Vv=/%60/g,l1=/%7B/g,Gv=/%7C/g,c1=/%7D/g,Kv=/%20/g;function ef(e){return encodeURI(""+e).replace(Gv,"|").replace(Hv,"[").replace(zv,"]")}function qv(e){return ef(e).replace(l1,"{").replace(c1,"}").replace(a1,"^")}function Yc(e){return ef(e).replace(s1,"%2B").replace(Kv,"+").replace(o1,"%23").replace(Uv,"%26").replace(Vv,"`").replace(l1,"{").replace(c1,"}").replace(a1,"^")}function Zv(e){return Yc(e).replace(Wv,"%3D")}function Yv(e){return ef(e).replace(o1,"%23").replace(jv,"%3F")}function Jv(e){return e==null?"":Yv(e).replace(Fv,"%2F")}function Ia(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Qv(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(s1," "),s=i.indexOf("="),a=Ia(s<0?i:i.slice(0,s)),l=s<0?null:Ia(i.slice(s+1));if(a in t){let h=t[a];_n(h)||(h=t[a]=[h]),h.push(l)}else t[a]=l}return t}function H0(e){let t="";for(let n in e){const r=e[n];if(n=Zv(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(_n(r)?r.map(i=>i&&Yc(i)):[r&&Yc(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Xv(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=_n(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const eb=Symbol(""),z0=Symbol(""),tf=Symbol(""),u1=Symbol(""),Jc=Symbol("");function ko(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function gr(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const l=p=>{p===!1?a(Xi(4,{from:n,to:t})):p instanceof Error?a(p):Av(p)?a(Xi(2,{from:t,to:p})):(i&&r.enterCallbacks[o]===i&&typeof p=="function"&&i.push(p),s())},h=e.call(r&&r.instances[o],t,n,l);let d=Promise.resolve(h);e.length<3&&(d=d.then(l)),d.catch(p=>a(p))})}function tc(e,t,n,r){const o=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(tb(a)){const h=(a.__vccOpts||a)[t];h&&o.push(gr(h,n,r,i,s))}else{let l=a();o.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const d=av(h)?h.default:h;i.components[s]=d;const g=(d.__vccOpts||d)[t];return g&&gr(g,n,r,i,s)()}))}}return o}function tb(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function V0(e){const t=kt(tf),n=kt(u1),r=Fe(()=>t.resolve(pt(e.to))),o=Fe(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Qi.bind(null,d));if(g>-1)return g;const C=G0(l[h-2]);return h>1&&G0(d)===C&&p[p.length-1].path!==C?p.findIndex(Qi.bind(null,l[h-2])):g}),i=Fe(()=>o.value>-1&&ob(n.params,r.value.params)),s=Fe(()=>o.value>-1&&o.value===n.matched.length-1&&e1(n.params,r.value.params));function a(l={}){return ib(l)?t[pt(e.replace)?"replace":"push"](pt(e.to)).catch(Jo):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const nb=En({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:V0,setup(e,{slots:t}){const n=Co(V0(e)),{options:r}=kt(tf),o=Fe(()=>({[K0(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[K0(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ao("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),rb=nb;function ib(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ob(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!_n(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function G0(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const K0=(e,t,n)=>e??t??n,sb=En({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=kt(Jc),o=Fe(()=>e.route||r.value),i=kt(z0,0),s=Fe(()=>{let h=pt(i);const{matched:d}=o.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),a=Fe(()=>o.value.matched[s.value]);qo(z0,Fe(()=>s.value+1)),qo(eb,a),qo(Jc,o);const l=Ze();return Rt(()=>[l.value,a.value,e.name],([h,d,p],[g,C,_])=>{d&&(d.instances[p]=h,C&&C!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=C.leaveGuards),d.updateGuards.size||(d.updateGuards=C.updateGuards))),h&&d&&(!C||!Qi(d,C)||!g)&&(d.enterCallbacks[p]||[]).forEach($=>$(h))},{flush:"post"}),()=>{const h=o.value,d=e.name,p=a.value,g=p&&p.components[d];if(!g)return q0(n.default,{Component:g,route:h});const C=p.props[d],_=C?C===!0?h.params:typeof C=="function"?C(h):C:null,k=Ao(g,Ke({},_,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return q0(n.default,{Component:k,route:h})||k}}});function q0(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ab=sb;function lb(e){const t=kv(e.routes,e),n=e.parseQuery||Qv,r=e.stringifyQuery||H0,o=e.history,i=ko(),s=ko(),a=ko(),l=_p(sr);let h=sr;Mi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xl.bind(null,Q=>""+Q),p=Xl.bind(null,Jv),g=Xl.bind(null,Ia);function C(Q,ue){let oe,de;return n1(Q)?(oe=t.getRecordMatcher(Q),de=ue):de=Q,t.addRoute(de,oe)}function _(Q){const ue=t.getRecordMatcher(Q);ue&&t.removeRoute(ue)}function $(){return t.getRoutes().map(Q=>Q.record)}function k(Q){return!!t.getRecordMatcher(Q)}function A(Q,ue){if(ue=Ke({},ue||l.value),typeof Q=="string"){const v=ec(n,Q,ue.path),L=t.resolve({path:v.path},ue),K=o.createHref(v.fullPath);return Ke(v,L,{params:g(L.params),hash:Ia(v.hash),redirectedFrom:void 0,href:K})}let oe;if("path"in Q)oe=Ke({},Q,{path:ec(n,Q.path,ue.path).path});else{const v=Ke({},Q.params);for(const L in v)v[L]==null&&delete v[L];oe=Ke({},Q,{params:p(v)}),ue.params=p(ue.params)}const de=t.resolve(oe,ue),Ce=Q.hash||"";de.params=d(g(de.params));const M=uv(r,Ke({},Q,{hash:qv(Ce),path:de.path})),w=o.createHref(M);return Ke({fullPath:M,hash:Ce,query:r===H0?Xv(Q.query):Q.query||{}},de,{redirectedFrom:void 0,href:w})}function E(Q){return typeof Q=="string"?ec(n,Q,l.value.path):Ke({},Q)}function z(Q,ue){if(h!==Q)return Xi(8,{from:ue,to:Q})}function N(Q){return Z(Q)}function V(Q){return N(Ke(E(Q),{replace:!0}))}function q(Q){const ue=Q.matched[Q.matched.length-1];if(ue&&ue.redirect){const{redirect:oe}=ue;let de=typeof oe=="function"?oe(Q):oe;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=E(de):{path:de},de.params={}),Ke({query:Q.query,hash:Q.hash,params:"path"in de?{}:Q.params},de)}}function Z(Q,ue){const oe=h=A(Q),de=l.value,Ce=Q.state,M=Q.force,w=Q.replace===!0,v=q(oe);if(v)return Z(Ke(E(v),{state:typeof v=="object"?Ke({},Ce,v.state):Ce,force:M,replace:w}),ue||oe);const L=oe;L.redirectedFrom=ue;let K;return!M&&fv(r,de,oe)&&(K=Xi(16,{to:L,from:de}),ne(de,de,!0,!1)),(K?Promise.resolve(K):S(L,de)).catch(J=>Wn(J)?Wn(J,2)?J:te(J):D(J,L,de)).then(J=>{if(J){if(Wn(J,2))return Z(Ke({replace:w},E(J.to),{state:typeof J.to=="object"?Ke({},Ce,J.to.state):Ce,force:M}),ue||L)}else J=I(L,de,!0,w,Ce);return P(L,de,J),J})}function y(Q,ue){const oe=z(Q,ue);return oe?Promise.reject(oe):Promise.resolve()}function x(Q){const ue=Ae.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(Q):Q()}function S(Q,ue){let oe;const[de,Ce,M]=cb(Q,ue);oe=tc(de.reverse(),"beforeRouteLeave",Q,ue);for(const v of de)v.leaveGuards.forEach(L=>{oe.push(gr(L,Q,ue))});const w=y.bind(null,Q,ue);return oe.push(w),Ee(oe).then(()=>{oe=[];for(const v of i.list())oe.push(gr(v,Q,ue));return oe.push(w),Ee(oe)}).then(()=>{oe=tc(Ce,"beforeRouteUpdate",Q,ue);for(const v of Ce)v.updateGuards.forEach(L=>{oe.push(gr(L,Q,ue))});return oe.push(w),Ee(oe)}).then(()=>{oe=[];for(const v of M)if(v.beforeEnter)if(_n(v.beforeEnter))for(const L of v.beforeEnter)oe.push(gr(L,Q,ue));else oe.push(gr(v.beforeEnter,Q,ue));return oe.push(w),Ee(oe)}).then(()=>(Q.matched.forEach(v=>v.enterCallbacks={}),oe=tc(M,"beforeRouteEnter",Q,ue),oe.push(w),Ee(oe))).then(()=>{oe=[];for(const v of s.list())oe.push(gr(v,Q,ue));return oe.push(w),Ee(oe)}).catch(v=>Wn(v,8)?v:Promise.reject(v))}function P(Q,ue,oe){a.list().forEach(de=>x(()=>de(Q,ue,oe)))}function I(Q,ue,oe,de,Ce){const M=z(Q,ue);if(M)return M;const w=ue===sr,v=Mi?history.state:{};oe&&(de||w?o.replace(Q.fullPath,Ke({scroll:w&&v&&v.scroll},Ce)):o.push(Q.fullPath,Ce)),l.value=Q,ne(Q,ue,oe,w),te()}let W;function j(){W||(W=o.listen((Q,ue,oe)=>{if(!xe.listening)return;const de=A(Q),Ce=q(de);if(Ce){Z(Ke(Ce,{replace:!0}),de).catch(Jo);return}h=de;const M=l.value;Mi&&bv(k0(M.fullPath,oe.delta),gl()),S(de,M).catch(w=>Wn(w,12)?w:Wn(w,2)?(Z(w.to,de).then(v=>{Wn(v,20)&&!oe.delta&&oe.type===ps.pop&&o.go(-1,!1)}).catch(Jo),Promise.reject()):(oe.delta&&o.go(-oe.delta,!1),D(w,de,M))).then(w=>{w=w||I(de,M,!1),w&&(oe.delta&&!Wn(w,8)?o.go(-oe.delta,!1):oe.type===ps.pop&&Wn(w,20)&&o.go(-1,!1)),P(de,M,w)}).catch(Jo)}))}let O=ko(),R=ko(),U;function D(Q,ue,oe){te(Q);const de=R.list();return de.length?de.forEach(Ce=>Ce(Q,ue,oe)):console.error(Q),Promise.reject(Q)}function G(){return U&&l.value!==sr?Promise.resolve():new Promise((Q,ue)=>{O.add([Q,ue])})}function te(Q){return U||(U=!Q,j(),O.list().forEach(([ue,oe])=>Q?oe(Q):ue()),O.reset()),Q}function ne(Q,ue,oe,de){const{scrollBehavior:Ce}=e;if(!Mi||!Ce)return Promise.resolve();const M=!oe&&yv(k0(Q.fullPath,0))||(de||!oe)&&history.state&&history.state.scroll||null;return cs().then(()=>Ce(Q,ue,M)).then(w=>w&&vv(w)).catch(w=>D(w,Q,ue))}const fe=Q=>o.go(Q);let _e;const Ae=new Set,xe={currentRoute:l,listening:!0,addRoute:C,removeRoute:_,hasRoute:k,getRoutes:$,resolve:A,options:e,push:N,replace:V,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:R.add,isReady:G,install(Q){const ue=this;Q.component("RouterLink",rb),Q.component("RouterView",ab),Q.config.globalProperties.$router=ue,Object.defineProperty(Q.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(l)}),Mi&&!_e&&l.value===sr&&(_e=!0,N(o.location).catch(Ce=>{}));const oe={};for(const Ce in sr)Object.defineProperty(oe,Ce,{get:()=>l.value[Ce],enumerable:!0});Q.provide(tf,ue),Q.provide(u1,mp(oe)),Q.provide(Jc,l);const de=Q.unmount;Ae.add(Q),Q.unmount=function(){Ae.delete(Q),Ae.size<1&&(h=sr,W&&W(),W=null,l.value=sr,_e=!1,U=!1),de()}}};function Ee(Q){return Q.reduce((ue,oe)=>ue.then(()=>x(oe)),Promise.resolve())}return xe}function cb(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(h=>Qi(h,a))?r.push(a):n.push(a));const l=e.matched[s];l&&(t.matched.find(h=>Qi(h,l))||o.push(l))}return[n,r,o]}const ub="modulepreload",fb=function(e){return"/"+e},Z0={},db=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fb(i),i in Z0)return;Z0[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===i&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const h=document.createElement("link");if(h.rel=s?"stylesheet":ub,s||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),s)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var Y0;const $r=typeof window<"u";$r&&((Y0=window==null?void 0:window.navigator)!=null&&Y0.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hb(e){return typeof e=="function"?e():pt(e)}function pb(e){return ip()?(op(e),!0):!1}function J0(e,t,n={}){const{immediate:r=!0}=n,o=Ze(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function a(){o.value=!1,s()}function l(...h){s(),o.value=!0,i=setTimeout(()=>{o.value=!1,i=null,e(...h)},hb(t))}return r&&(o.value=!0,$r&&l()),pb(a),{isPending:Du(o),start:l,stop:a}}var gb=typeof global=="object"&&global&&global.Object===Object&&global;const mb=gb;var wb=typeof self=="object"&&self&&self.Object===Object&&self,vb=mb||wb||Function("return this")();const nf=vb;var bb=nf.Symbol;const eo=bb;var f1=Object.prototype,yb=f1.hasOwnProperty,_b=f1.toString,Mo=eo?eo.toStringTag:void 0;function xb(e){var t=yb.call(e,Mo),n=e[Mo];try{e[Mo]=void 0;var r=!0}catch{}var o=_b.call(e);return r&&(t?e[Mo]=n:delete e[Mo]),o}var Eb=Object.prototype,Cb=Eb.toString;function Ab(e){return Cb.call(e)}var Tb="[object Null]",Sb="[object Undefined]",Q0=eo?eo.toStringTag:void 0;function d1(e){return e==null?e===void 0?Sb:Tb:Q0&&Q0 in Object(e)?xb(e):Ab(e)}function $b(e){return e!=null&&typeof e=="object"}var Ib="[object Symbol]";function rf(e){return typeof e=="symbol"||$b(e)&&d1(e)==Ib}function Rb(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var Ob=Array.isArray;const of=Ob;var Nb=1/0,X0=eo?eo.prototype:void 0,ed=X0?X0.toString:void 0;function h1(e){if(typeof e=="string")return e;if(of(e))return Rb(e,h1)+"";if(rf(e))return ed?ed.call(e):"";var t=e+"";return t=="0"&&1/e==-Nb?"-0":t}function p1(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Lb="[object AsyncFunction]",Pb="[object Function]",kb="[object GeneratorFunction]",Mb="[object Proxy]";function Bb(e){if(!p1(e))return!1;var t=d1(e);return t==Pb||t==kb||t==Lb||t==Mb}var Db=nf["__core-js_shared__"];const nc=Db;var td=function(){var e=/[^.]+$/.exec(nc&&nc.keys&&nc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ub(e){return!!td&&td in e}var Fb=Function.prototype,Wb=Fb.toString;function jb(e){if(e!=null){try{return Wb.call(e)}catch{}try{return e+""}catch{}}return""}var Hb=/[\\^$.*+?()[\]{}|]/g,zb=/^\[object .+?Constructor\]$/,Vb=Function.prototype,Gb=Object.prototype,Kb=Vb.toString,qb=Gb.hasOwnProperty,Zb=RegExp("^"+Kb.call(qb).replace(Hb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yb(e){if(!p1(e)||Ub(e))return!1;var t=Bb(e)?Zb:zb;return t.test(jb(e))}function Jb(e,t){return e==null?void 0:e[t]}function g1(e,t){var n=Jb(e,t);return Yb(n)?n:void 0}function Qb(e,t){return e===t||e!==e&&t!==t}var Xb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,e3=/^\w*$/;function t3(e,t){if(of(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||rf(e)?!0:e3.test(e)||!Xb.test(e)||t!=null&&e in Object(t)}var n3=g1(Object,"create");const gs=n3;function r3(){this.__data__=gs?gs(null):{},this.size=0}function i3(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var o3="__lodash_hash_undefined__",s3=Object.prototype,a3=s3.hasOwnProperty;function l3(e){var t=this.__data__;if(gs){var n=t[e];return n===o3?void 0:n}return a3.call(t,e)?t[e]:void 0}var c3=Object.prototype,u3=c3.hasOwnProperty;function f3(e){var t=this.__data__;return gs?t[e]!==void 0:u3.call(t,e)}var d3="__lodash_hash_undefined__";function h3(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=gs&&t===void 0?d3:t,this}function li(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}li.prototype.clear=r3;li.prototype.delete=i3;li.prototype.get=l3;li.prototype.has=f3;li.prototype.set=h3;function p3(){this.__data__=[],this.size=0}function ml(e,t){for(var n=e.length;n--;)if(Qb(e[n][0],t))return n;return-1}var g3=Array.prototype,m3=g3.splice;function w3(e){var t=this.__data__,n=ml(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():m3.call(t,n,1),--this.size,!0}function v3(e){var t=this.__data__,n=ml(t,e);return n<0?void 0:t[n][1]}function b3(e){return ml(this.__data__,e)>-1}function y3(e,t){var n=this.__data__,r=ml(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function To(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}To.prototype.clear=p3;To.prototype.delete=w3;To.prototype.get=v3;To.prototype.has=b3;To.prototype.set=y3;var _3=g1(nf,"Map");const x3=_3;function E3(){this.size=0,this.__data__={hash:new li,map:new(x3||To),string:new li}}function C3(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function wl(e,t){var n=e.__data__;return C3(t)?n[typeof t=="string"?"string":"hash"]:n.map}function A3(e){var t=wl(this,e).delete(e);return this.size-=t?1:0,t}function T3(e){return wl(this,e).get(e)}function S3(e){return wl(this,e).has(e)}function $3(e,t){var n=wl(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function vi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vi.prototype.clear=E3;vi.prototype.delete=A3;vi.prototype.get=T3;vi.prototype.has=S3;vi.prototype.set=$3;var I3="Expected a function";function sf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(I3);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=e.apply(this,r);return n.cache=i.set(o,s)||i,s};return n.cache=new(sf.Cache||vi),n}sf.Cache=vi;var R3=500;function O3(e){var t=sf(e,function(r){return n.size===R3&&n.clear(),r}),n=t.cache;return t}var N3=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,L3=/\\(\\)?/g,P3=O3(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(N3,function(n,r,o,i){t.push(o?i.replace(L3,"$1"):r||n)}),t});const k3=P3;function M3(e){return e==null?"":h1(e)}function B3(e,t){return of(e)?e:t3(e,t)?[e]:k3(M3(e))}var D3=1/0;function U3(e){if(typeof e=="string"||rf(e))return e;var t=e+"";return t=="0"&&1/e==-D3?"-0":t}function F3(e,t){t=B3(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[U3(t[n++])];return n&&n==r?e:void 0}function W3(e,t,n){var r=e==null?void 0:F3(e,t);return r===void 0?n:r}function j3(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r}function H3(e){return e==null}function z3(e){return e===void 0}const V3=e=>e===void 0,G3=e=>typeof e=="boolean",m1=e=>typeof e=="number",K3=e=>it(e)?!Number.isNaN(Number(e)):!1;class q3 extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function Z3(e,t){throw new q3(`[${e}] ${t}`)}const w1=(e="")=>e.split(" ").filter(t=>!!t.trim()),nd=(e,t)=>{if(!e||!t)return!1;if(t.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(t)},Y3=(e,t)=>{!e||!t.trim()||e.classList.add(...w1(t))},J3=(e,t)=>{!e||!t.trim()||e.classList.remove(...w1(t))},Q3=(e,t)=>{var n;if(!$r||!e||!t)return"";let r=bn(t);r==="float"&&(r="cssFloat");try{const o=e.style[r];if(o)return o;const i=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return i?i[r]:""}catch{return e.style[r]}};function af(e,t="px"){if(!e)return"";if(m1(e)||K3(e))return`${e}${t}`;if(it(e))return e}let ra;const X3=e=>{var t;if(!$r)return 0;if(ra!==void 0)return ra;const n=document.createElement("div");n.className=`${e}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const r=n.offsetWidth;n.style.overflow="scroll";const o=document.createElement("div");o.style.width="100%",n.appendChild(o);const i=o.offsetWidth;return(t=n.parentNode)==null||t.removeChild(n),ra=r-i,ra};/*! Element Plus Icons Vue v2.1.0 */var e5=(e,t)=>{let n=e.__vccOpts||e;for(let[r,o]of t)n[r]=o;return n},t5={name:"Close"},n5={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},r5=Be("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),i5=[r5];function o5(e,t,n,r,o,i){return Jt(),On("svg",n5,i5)}var s5=e5(t5,[["render",o5],["__file","close.vue"]]);const v1="__epPropKey",ms=e=>e,a5=e=>Xe(e)&&!!e[v1],l5=(e,t)=>{if(!Xe(e)||a5(e))return e;const{values:n,required:r,default:o,type:i,validator:s}=e,l={type:i,required:!!r,validator:n||s?h=>{let d=!1,p=[];if(n&&(p=Array.from(n),je(e,"default")&&p.push(o),d||(d=p.includes(h))),s&&(d||(d=s(h))),!d&&p.length>0){const g=[...new Set(p)].map(C=>JSON.stringify(C)).join(", ");sw(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${g}], got value ${JSON.stringify(h)}.`)}return d}:void 0,[v1]:!0};return je(e,"default")&&(l.default=o),l},Us=e=>j3(Object.entries(e).map(([t,n])=>[t,l5(n,t)])),c5=ms([String,Object,Function]),b1=(e,t)=>{if(e.install=n=>{for(const r of[e,...Object.values(t??{})])n.component(r.name,r)},t)for(const[n,r]of Object.entries(t))e[n]=r;return e},y1={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},_1="update:modelValue";var va=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(va||{});const rd=({from:e,replacement:t,scope:n,version:r,ref:o,type:i="API"},s)=>{Rt(()=>pt(s),a=>{},{immediate:!0})};var u5={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const f5=e=>(t,n)=>d5(t,n,pt(e)),d5=(e,t,n)=>W3(n,e,e).replace(/\{(\w+)\}/g,(r,o)=>{var i;return`${(i=t==null?void 0:t[o])!=null?i:`{${o}}`}`}),h5=e=>{const t=Fe(()=>pt(e).name),n=ht(e)?e:Ze(e);return{lang:t,locale:n,t:f5(e)}},p5=Symbol("localeContextKey"),g5=e=>{const t=e||kt(p5,Ze());return h5(Fe(()=>t.value||u5))},ba="el",m5="is-",Vr=(e,t,n,r,o)=>{let i=`${e}-${t}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),o&&(i+=`--${o}`),i},w5=Symbol("namespaceContextKey"),x1=e=>{const t=e||(yn()?kt(w5,Ze(ba)):Ze(ba));return Fe(()=>pt(t)||ba)},vl=(e,t)=>{const n=x1(t);return{namespace:n,b:($="")=>Vr(n.value,e,$,"",""),e:$=>$?Vr(n.value,e,"",$,""):"",m:$=>$?Vr(n.value,e,"","",$):"",be:($,k)=>$&&k?Vr(n.value,e,$,k,""):"",em:($,k)=>$&&k?Vr(n.value,e,"",$,k):"",bm:($,k)=>$&&k?Vr(n.value,e,$,"",k):"",bem:($,k,A)=>$&&k&&A?Vr(n.value,e,$,k,A):"",is:($,...k)=>{const A=k.length>=1?k[0]:!0;return $&&A?`${m5}${$}`:""},cssVar:$=>{const k={};for(const A in $)$[A]&&(k[`--${n.value}-${A}`]=$[A]);return k},cssVarName:$=>`--${n.value}-${$}`,cssVarBlock:$=>{const k={};for(const A in $)$[A]&&(k[`--${n.value}-${e}-${A}`]=$[A]);return k},cssVarBlockName:$=>`--${n.value}-${e}-${$}`}},v5=(e,t={})=>{ht(e)||Z3("[useLockscreen]","You need to pass a ref param to this function");const n=t.ns||vl("popup"),r=Cp(()=>n.bm("parent","hidden"));if(!$r||nd(document.body,r.value))return;let o=0,i=!1,s="0";const a=()=>{setTimeout(()=>{J3(document==null?void 0:document.body,r.value),i&&document&&(document.body.style.width=s)},200)};Rt(e,l=>{if(!l){a();return}i=!nd(document.body,r.value),i&&(s=document.body.style.width),o=X3(n.namespace.value);const h=document.documentElement.clientHeight<document.body.scrollHeight,d=Q3(document.body,"overflowY");o>0&&(h||d==="scroll")&&i&&(document.body.style.width=`calc(100% - ${o}px)`),Y3(document.body,r.value)}),op(()=>a())},b5=e=>{if(!e)return{onClick:Ht,onMousedown:Ht,onMouseup:Ht};let t=!1,n=!1;return{onClick:s=>{t&&n&&e(s),t=n=!1},onMousedown:s=>{t=s.target===s.currentTarget},onMouseup:s=>{n=s.target===s.currentTarget}}},id={prefix:Math.floor(Math.random()*1e4),current:0},y5=Symbol("elIdInjection"),_5=()=>yn()?kt(y5,id):id,od=e=>{const t=_5(),n=x1();return Fe(()=>pt(e)||`${n.value}-id-${t.prefix}-${t.current++}`)};let Bi=[];const sd=e=>{const t=e;t.key===y1.esc&&Bi.forEach(n=>n(t))},x5=e=>{wi(()=>{Bi.length===0&&document.addEventListener("keydown",sd),$r&&Bi.push(e)}),Bs(()=>{Bi=Bi.filter(t=>t!==e),Bi.length===0&&$r&&document.removeEventListener("keydown",sd)})},ad=Ze(0),E5=2e3,C5=Symbol("zIndexContextKey"),A5=e=>{const t=e||(yn()?kt(C5,void 0):void 0),n=Fe(()=>{const i=pt(t);return m1(i)?i:E5}),r=Fe(()=>n.value+ad.value);return{initialZIndex:n,currentZIndex:r,nextZIndex:()=>(ad.value++,r.value)}},T5=Symbol(),ld=Ze();function S5(e,t=void 0){const n=yn()?kt(T5,ld):ld;return e?Fe(()=>{var r,o;return(o=(r=n.value)==null?void 0:r[e])!=null?o:t}):n}var lf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const $5=Us({size:{type:ms([Number,String])},color:{type:String}}),I5=En({name:"ElIcon",inheritAttrs:!1}),R5=En({...I5,props:$5,setup(e){const t=e,n=vl("icon"),r=Fe(()=>{const{size:o,color:i}=t;return!o&&!i?{}:{fontSize:V3(o)?void 0:af(o),"--color":i}});return(o,i)=>(Jt(),On("i",Zu({class:pt(n).b(),style:pt(r)},o.$attrs),[vr(o.$slots,"default")],16))}});var O5=lf(R5,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const N5=b1(O5),rc="focus-trap.focus-after-trapped",ic="focus-trap.focus-after-released",L5="focus-trap.focusout-prevented",cd={cancelable:!0,bubbles:!1},P5={cancelable:!0,bubbles:!1},ud="focusAfterTrapped",fd="focusAfterReleased",k5=Symbol("elFocusTrap"),cf=Ze(),bl=Ze(0),uf=Ze(0);let ia=0;const E1=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0||r===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},dd=(e,t)=>{for(const n of e)if(!M5(n,t))return n},M5=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},B5=e=>{const t=E1(e),n=dd(t,e),r=dd(t.reverse(),e);return[n,r]},D5=e=>e instanceof HTMLInputElement&&"select"in e,dr=(e,t)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),uf.value=window.performance.now(),e!==n&&D5(e)&&t&&e.select()}};function hd(e,t){const n=[...e],r=e.indexOf(t);return r!==-1&&n.splice(r,1),n}const U5=()=>{let e=[];return{push:r=>{const o=e[0];o&&r!==o&&o.pause(),e=hd(e,r),e.unshift(r)},remove:r=>{var o,i;e=hd(e,r),(i=(o=e[0])==null?void 0:o.resume)==null||i.call(o)}}},F5=(e,t=!1)=>{const n=document.activeElement;for(const r of e)if(dr(r,t),document.activeElement!==n)return},pd=U5(),W5=()=>bl.value>uf.value,oa=()=>{cf.value="pointer",bl.value=window.performance.now()},gd=()=>{cf.value="keyboard",bl.value=window.performance.now()},j5=()=>(wi(()=>{ia===0&&(document.addEventListener("mousedown",oa),document.addEventListener("touchstart",oa),document.addEventListener("keydown",gd)),ia++}),Bs(()=>{ia--,ia<=0&&(document.removeEventListener("mousedown",oa),document.removeEventListener("touchstart",oa),document.removeEventListener("keydown",gd))}),{focusReason:cf,lastUserFocusTimestamp:bl,lastAutomatedFocusTimestamp:uf}),sa=e=>new CustomEvent(L5,{...P5,detail:e}),H5=En({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[ud,fd,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const n=Ze();let r,o;const{focusReason:i}=j5();x5(_=>{e.trapped&&!s.paused&&t("release-requested",_)});const s={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},a=_=>{if(!e.loop&&!e.trapped||s.paused)return;const{key:$,altKey:k,ctrlKey:A,metaKey:E,currentTarget:z,shiftKey:N}=_,{loop:V}=e,q=$===y1.tab&&!k&&!A&&!E,Z=document.activeElement;if(q&&Z){const y=z,[x,S]=B5(y);if(x&&S){if(!N&&Z===S){const I=sa({focusReason:i.value});t("focusout-prevented",I),I.defaultPrevented||(_.preventDefault(),V&&dr(x,!0))}else if(N&&[x,y].includes(Z)){const I=sa({focusReason:i.value});t("focusout-prevented",I),I.defaultPrevented||(_.preventDefault(),V&&dr(S,!0))}}else if(Z===y){const I=sa({focusReason:i.value});t("focusout-prevented",I),I.defaultPrevented||_.preventDefault()}}};qo(k5,{focusTrapRef:n,onKeydown:a}),Rt(()=>e.focusTrapEl,_=>{_&&(n.value=_)},{immediate:!0}),Rt([n],([_],[$])=>{_&&(_.addEventListener("keydown",a),_.addEventListener("focusin",d),_.addEventListener("focusout",p)),$&&($.removeEventListener("keydown",a),$.removeEventListener("focusin",d),$.removeEventListener("focusout",p))});const l=_=>{t(ud,_)},h=_=>t(fd,_),d=_=>{const $=pt(n);if(!$)return;const k=_.target,A=_.relatedTarget,E=k&&$.contains(k);e.trapped||A&&$.contains(A)||(r=A),E&&t("focusin",_),!s.paused&&e.trapped&&(E?o=k:dr(o,!0))},p=_=>{const $=pt(n);if(!(s.paused||!$))if(e.trapped){const k=_.relatedTarget;!H3(k)&&!$.contains(k)&&setTimeout(()=>{if(!s.paused&&e.trapped){const A=sa({focusReason:i.value});t("focusout-prevented",A),A.defaultPrevented||dr(o,!0)}},0)}else{const k=_.target;k&&$.contains(k)||t("focusout",_)}};async function g(){await cs();const _=pt(n);if(_){pd.push(s);const $=_.contains(document.activeElement)?r:document.activeElement;if(r=$,!_.contains($)){const A=new Event(rc,cd);_.addEventListener(rc,l),_.dispatchEvent(A),A.defaultPrevented||cs(()=>{let E=e.focusStartEl;it(E)||(dr(E),document.activeElement!==E&&(E="first")),E==="first"&&F5(E1(_),!0),(document.activeElement===$||E==="container")&&dr(_)})}}}function C(){const _=pt(n);if(_){_.removeEventListener(rc,l);const $=new CustomEvent(ic,{...cd,detail:{focusReason:i.value}});_.addEventListener(ic,h),_.dispatchEvent($),!$.defaultPrevented&&(i.value=="keyboard"||!W5()||_.contains(document.activeElement))&&dr(r??document.body),_.removeEventListener(ic,h),pd.remove(s)}}return wi(()=>{e.trapped&&g(),Rt(()=>e.trapped,_=>{_?g():C()})}),Bs(()=>{e.trapped&&C()}),{onKeydown:a}}});function z5(e,t,n,r,o,i){return vr(e.$slots,"default",{handleKeydown:e.onKeydown})}var V5=lf(H5,[["render",z5],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]),yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C1={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(yl,function(){var n=1e3,r=6e4,o=36e5,i="millisecond",s="second",a="minute",l="hour",h="day",d="week",p="month",g="quarter",C="year",_="date",$="Invalid Date",k=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,A=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(j){var O=["th","st","nd","rd"],R=j%100;return"["+j+(O[(R-20)%10]||O[R]||O[0])+"]"}},z=function(j,O,R){var U=String(j);return!U||U.length>=O?j:""+Array(O+1-U.length).join(R)+j},N={s:z,z:function(j){var O=-j.utcOffset(),R=Math.abs(O),U=Math.floor(R/60),D=R%60;return(O<=0?"+":"-")+z(U,2,"0")+":"+z(D,2,"0")},m:function j(O,R){if(O.date()<R.date())return-j(R,O);var U=12*(R.year()-O.year())+(R.month()-O.month()),D=O.clone().add(U,p),G=R-D<0,te=O.clone().add(U+(G?-1:1),p);return+(-(U+(R-D)/(G?D-te:te-D))||0)},a:function(j){return j<0?Math.ceil(j)||0:Math.floor(j)},p:function(j){return{M:p,y:C,w:d,d:h,D:_,h:l,m:a,s,ms:i,Q:g}[j]||String(j||"").toLowerCase().replace(/s$/,"")},u:function(j){return j===void 0}},V="en",q={};q[V]=E;var Z="$isDayjsObject",y=function(j){return j instanceof I||!(!j||!j[Z])},x=function j(O,R,U){var D;if(!O)return V;if(typeof O=="string"){var G=O.toLowerCase();q[G]&&(D=G),R&&(q[G]=R,D=G);var te=O.split("-");if(!D&&te.length>1)return j(te[0])}else{var ne=O.name;q[ne]=O,D=ne}return!U&&D&&(V=D),D||!U&&V},S=function(j,O){if(y(j))return j.clone();var R=typeof O=="object"?O:{};return R.date=j,R.args=arguments,new I(R)},P=N;P.l=x,P.i=y,P.w=function(j,O){return S(j,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var I=function(){function j(R){this.$L=x(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[Z]=!0}var O=j.prototype;return O.parse=function(R){this.$d=function(U){var D=U.date,G=U.utc;if(D===null)return new Date(NaN);if(P.u(D))return new Date;if(D instanceof Date)return new Date(D);if(typeof D=="string"&&!/Z$/i.test(D)){var te=D.match(k);if(te){var ne=te[2]-1||0,fe=(te[7]||"0").substring(0,3);return G?new Date(Date.UTC(te[1],ne,te[3]||1,te[4]||0,te[5]||0,te[6]||0,fe)):new Date(te[1],ne,te[3]||1,te[4]||0,te[5]||0,te[6]||0,fe)}}return new Date(D)}(R),this.init()},O.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},O.$utils=function(){return P},O.isValid=function(){return this.$d.toString()!==$},O.isSame=function(R,U){var D=S(R);return this.startOf(U)<=D&&D<=this.endOf(U)},O.isAfter=function(R,U){return S(R)<this.startOf(U)},O.isBefore=function(R,U){return this.endOf(U)<S(R)},O.$g=function(R,U,D){return P.u(R)?this[U]:this.set(D,R)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function(R,U){var D=this,G=!!P.u(U)||U,te=P.p(R),ne=function(oe,de){var Ce=P.w(D.$u?Date.UTC(D.$y,de,oe):new Date(D.$y,de,oe),D);return G?Ce:Ce.endOf(h)},fe=function(oe,de){return P.w(D.toDate()[oe].apply(D.toDate("s"),(G?[0,0,0,0]:[23,59,59,999]).slice(de)),D)},_e=this.$W,Ae=this.$M,xe=this.$D,Ee="set"+(this.$u?"UTC":"");switch(te){case C:return G?ne(1,0):ne(31,11);case p:return G?ne(1,Ae):ne(0,Ae+1);case d:var Q=this.$locale().weekStart||0,ue=(_e<Q?_e+7:_e)-Q;return ne(G?xe-ue:xe+(6-ue),Ae);case h:case _:return fe(Ee+"Hours",0);case l:return fe(Ee+"Minutes",1);case a:return fe(Ee+"Seconds",2);case s:return fe(Ee+"Milliseconds",3);default:return this.clone()}},O.endOf=function(R){return this.startOf(R,!1)},O.$set=function(R,U){var D,G=P.p(R),te="set"+(this.$u?"UTC":""),ne=(D={},D[h]=te+"Date",D[_]=te+"Date",D[p]=te+"Month",D[C]=te+"FullYear",D[l]=te+"Hours",D[a]=te+"Minutes",D[s]=te+"Seconds",D[i]=te+"Milliseconds",D)[G],fe=G===h?this.$D+(U-this.$W):U;if(G===p||G===C){var _e=this.clone().set(_,1);_e.$d[ne](fe),_e.init(),this.$d=_e.set(_,Math.min(this.$D,_e.daysInMonth())).$d}else ne&&this.$d[ne](fe);return this.init(),this},O.set=function(R,U){return this.clone().$set(R,U)},O.get=function(R){return this[P.p(R)]()},O.add=function(R,U){var D,G=this;R=Number(R);var te=P.p(U),ne=function(Ae){var xe=S(G);return P.w(xe.date(xe.date()+Math.round(Ae*R)),G)};if(te===p)return this.set(p,this.$M+R);if(te===C)return this.set(C,this.$y+R);if(te===h)return ne(1);if(te===d)return ne(7);var fe=(D={},D[a]=r,D[l]=o,D[s]=n,D)[te]||1,_e=this.$d.getTime()+R*fe;return P.w(_e,this)},O.subtract=function(R,U){return this.add(-1*R,U)},O.format=function(R){var U=this,D=this.$locale();if(!this.isValid())return D.invalidDate||$;var G=R||"YYYY-MM-DDTHH:mm:ssZ",te=P.z(this),ne=this.$H,fe=this.$m,_e=this.$M,Ae=D.weekdays,xe=D.months,Ee=D.meridiem,Q=function(de,Ce,M,w){return de&&(de[Ce]||de(U,G))||M[Ce].slice(0,w)},ue=function(de){return P.s(ne%12||12,de,"0")},oe=Ee||function(de,Ce,M){var w=de<12?"AM":"PM";return M?w.toLowerCase():w};return G.replace(A,function(de,Ce){return Ce||function(M){switch(M){case"YY":return String(U.$y).slice(-2);case"YYYY":return P.s(U.$y,4,"0");case"M":return _e+1;case"MM":return P.s(_e+1,2,"0");case"MMM":return Q(D.monthsShort,_e,xe,3);case"MMMM":return Q(xe,_e);case"D":return U.$D;case"DD":return P.s(U.$D,2,"0");case"d":return String(U.$W);case"dd":return Q(D.weekdaysMin,U.$W,Ae,2);case"ddd":return Q(D.weekdaysShort,U.$W,Ae,3);case"dddd":return Ae[U.$W];case"H":return String(ne);case"HH":return P.s(ne,2,"0");case"h":return ue(1);case"hh":return ue(2);case"a":return oe(ne,fe,!0);case"A":return oe(ne,fe,!1);case"m":return String(fe);case"mm":return P.s(fe,2,"0");case"s":return String(U.$s);case"ss":return P.s(U.$s,2,"0");case"SSS":return P.s(U.$ms,3,"0");case"Z":return te}return null}(de)||te.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function(R,U,D){var G,te=this,ne=P.p(U),fe=S(R),_e=(fe.utcOffset()-this.utcOffset())*r,Ae=this-fe,xe=function(){return P.m(te,fe)};switch(ne){case C:G=xe()/12;break;case p:G=xe();break;case g:G=xe()/3;break;case d:G=(Ae-_e)/6048e5;break;case h:G=(Ae-_e)/864e5;break;case l:G=Ae/o;break;case a:G=Ae/r;break;case s:G=Ae/n;break;default:G=Ae}return D?G:P.a(G)},O.daysInMonth=function(){return this.endOf(p).$D},O.$locale=function(){return q[this.$L]},O.locale=function(R,U){if(!R)return this.$L;var D=this.clone(),G=x(R,U,!0);return G&&(D.$L=G),D},O.clone=function(){return P.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},j}(),W=I.prototype;return S.prototype=W,[["$ms",i],["$s",s],["$m",a],["$H",l],["$W",h],["$M",p],["$y",C],["$D",_]].forEach(function(j){W[j[1]]=function(O){return this.$g(O,j[0],j[1])}}),S.extend=function(j,O){return j.$i||(j(O,I,S),j.$i=!0),S},S.locale=x,S.isDayjs=y,S.unix=function(j){return S(1e3*j)},S.en=q[V],S.Ls=q,S.p={},S})})(C1);var G5=C1.exports;const ws=_l(G5),K5=Us({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:ms([String,Array,Object])},zIndex:{type:ms([String,Number])}}),q5={click:e=>e instanceof MouseEvent},Z5="overlay";var Y5=En({name:"ElOverlay",props:K5,emits:q5,setup(e,{slots:t,emit:n}){const r=vl(Z5),o=l=>{n("click",l)},{onClick:i,onMousedown:s,onMouseup:a}=b5(e.customMaskEvent?void 0:o);return()=>e.mask?Ve("div",{class:[r.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:s,onMouseup:a},[vr(t,"default")],va.STYLE|va.CLASS|va.PROPS,["onClick","onMouseup","onMousedown"]):Ao("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[vr(t,"default")])}});const J5=Y5,Q5=Us({center:Boolean,alignCenter:Boolean,closeIcon:{type:c5},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),X5=Us({...Q5,appendToBody:Boolean,beforeClose:{type:ms(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),ey={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[_1]:e=>G3(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ty=(e,t)=>{var n;const o=yn().emit,{nextZIndex:i}=A5();let s="";const a=od(),l=od(),h=Ze(!1),d=Ze(!1),p=Ze(!1),g=Ze((n=e.zIndex)!=null?n:i());let C,_;const $=S5("namespace",ba),k=Fe(()=>{const O={},R=`--${$.value}-dialog`;return e.fullscreen||(e.top&&(O[`${R}-margin-top`]=e.top),e.width&&(O[`${R}-width`]=af(e.width))),O}),A=Fe(()=>e.alignCenter?{display:"flex"}:{});function E(){o("opened")}function z(){o("closed"),o(_1,!1),e.destroyOnClose&&(p.value=!1)}function N(){o("close")}function V(){_==null||_(),C==null||C(),e.openDelay&&e.openDelay>0?{stop:C}=J0(()=>x(),e.openDelay):x()}function q(){C==null||C(),_==null||_(),e.closeDelay&&e.closeDelay>0?{stop:_}=J0(()=>S(),e.closeDelay):S()}function Z(){function O(R){R||(d.value=!0,h.value=!1)}e.beforeClose?e.beforeClose(O):q()}function y(){e.closeOnClickModal&&Z()}function x(){$r&&(h.value=!0)}function S(){h.value=!1}function P(){o("openAutoFocus")}function I(){o("closeAutoFocus")}function W(O){var R;((R=O.detail)==null?void 0:R.focusReason)==="pointer"&&O.preventDefault()}e.lockScroll&&v5(h);function j(){e.closeOnPressEscape&&Z()}return Rt(()=>e.modelValue,O=>{O?(d.value=!1,V(),p.value=!0,g.value=z3(e.zIndex)?i():g.value++,cs(()=>{o("open"),t.value&&(t.value.scrollTop=0)})):h.value&&q()}),Rt(()=>e.fullscreen,O=>{t.value&&(O?(s=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=s)}),wi(()=>{e.modelValue&&(h.value=!0,p.value=!0,V())}),{afterEnter:E,afterLeave:z,beforeLeave:N,handleClose:Z,onModalClick:y,close:q,doClose:S,onOpenAutoFocus:P,onCloseAutoFocus:I,onCloseRequested:j,onFocusoutPrevented:W,titleId:a,bodyId:l,closed:d,style:k,overlayDialogStyle:A,rendered:p,visible:h,zIndex:g}},ny=Us({...X5,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),ry=ey,iy=En({name:"ElDrawer",components:{ElOverlay:J5,ElFocusTrap:V5,ElIcon:N5,Close:s5},inheritAttrs:!1,props:ny,emits:ry,setup(e,{slots:t}){rd({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},Fe(()=>!!t.title)),rd({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},Fe(()=>!!e.customClass));const n=Ze(),r=Ze(),o=vl("drawer"),{t:i}=g5(),s=Fe(()=>e.direction==="rtl"||e.direction==="ltr"),a=Fe(()=>af(e.size));return{...ty(e,n),drawerRef:n,focusStartRef:r,isHorizontal:s,drawerSize:a,ns:o,t:i}}}),oy=["aria-label","aria-labelledby","aria-describedby"],sy=["id","aria-level"],ay=["aria-label"],ly=["id"];function cy(e,t,n,r,o,i){const s=Xr("close"),a=Xr("el-icon"),l=Xr("el-focus-trap"),h=Xr("el-overlay");return Jt(),Ku(t2,{to:"body",disabled:!e.appendToBody},[Ve(Ju,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:Wi(()=>[xw(Ve(h,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:Wi(()=>[Ve(l,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:Wi(()=>[Be("div",Zu({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:t[1]||(t[1]=z2(()=>{},["stop"]))}),[Be("span",{ref:"focusStartRef",class:sn(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(Jt(),On("header",{key:0,class:sn(e.ns.e("header"))},[e.$slots.title?vr(e.$slots,"title",{key:1},()=>[Ii(" DEPRECATED SLOT ")]):vr(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?Ii("v-if",!0):(Jt(),On("span",{key:0,id:e.titleId,role:"heading","aria-level":e.headerAriaLevel,class:sn(e.ns.e("title"))},km(e.title),11,sy))]),e.showClose?(Jt(),On("button",{key:2,"aria-label":e.t("el.drawer.close"),class:sn(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=(...d)=>e.handleClose&&e.handleClose(...d))},[Ve(a,{class:sn(e.ns.e("close"))},{default:Wi(()=>[Ve(s)]),_:1},8,["class"])],10,ay)):Ii("v-if",!0)],2)):Ii("v-if",!0),e.rendered?(Jt(),On("div",{key:1,id:e.bodyId,class:sn(e.ns.e("body"))},[vr(e.$slots,"default")],10,ly)):Ii("v-if",!0),e.$slots.footer?(Jt(),On("div",{key:2,class:sn(e.ns.e("footer"))},[vr(e.$slots,"footer")],2)):Ii("v-if",!0)],16,oy)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[S2,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var uy=lf(iy,[["render",cy],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const fy=b1(uy);function dy(){throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config")}function hy({chainId:e}={}){const t=dy();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function py({address:e,account:t,chainId:n,abi:r,args:o,functionName:i,blockNumber:s,blockTag:a}){return hy({chainId:n}).readContract({abi:r,address:e,account:t,functionName:i,args:o,blockNumber:s,blockTag:a})}const gy=Symbol(),md=Object.getPrototypeOf,Qc=new WeakMap,my=e=>e&&(Qc.has(e)?Qc.get(e):md(e)===Object.prototype||md(e)===Array.prototype),wy=e=>my(e)&&e[gy]||null,wd=(e,t=!0)=>{Qc.set(e,t)},oc=e=>typeof e=="object"&&e!==null,Zr=new WeakMap,zo=new WeakSet,vy=(e=Object.is,t=(h,d)=>new Proxy(h,d),n=h=>oc(h)&&!zo.has(h)&&(Array.isArray(h)||!(Symbol.iterator in h))&&!(h instanceof WeakMap)&&!(h instanceof WeakSet)&&!(h instanceof Error)&&!(h instanceof Number)&&!(h instanceof Date)&&!(h instanceof String)&&!(h instanceof RegExp)&&!(h instanceof ArrayBuffer),r=h=>{switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:throw h}},o=new WeakMap,i=(h,d,p=r)=>{const g=o.get(h);if((g==null?void 0:g[0])===d)return g[1];const C=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h));return wd(C,!0),o.set(h,[d,C]),Reflect.ownKeys(h).forEach(_=>{if(Object.getOwnPropertyDescriptor(C,_))return;const $=Reflect.get(h,_),k={value:$,enumerable:!0,configurable:!0};if(zo.has($))wd($,!1);else if($ instanceof Promise)delete k.value,k.get=()=>p($);else if(Zr.has($)){const[A,E]=Zr.get($);k.value=i(A,E(),p)}Object.defineProperty(C,_,k)}),Object.preventExtensions(C)},s=new WeakMap,a=[1,1],l=h=>{if(!oc(h))throw new Error("object required");const d=s.get(h);if(d)return d;let p=a[0];const g=new Set,C=(x,S=++a[0])=>{p!==S&&(p=S,g.forEach(P=>P(x,S)))};let _=a[1];const $=(x=++a[1])=>(_!==x&&!g.size&&(_=x,A.forEach(([S])=>{const P=S[1](x);P>p&&(p=P)})),p),k=x=>(S,P)=>{const I=[...S];I[1]=[x,...I[1]],C(I,P)},A=new Map,E=(x,S)=>{if(g.size){const P=S[3](k(x));A.set(x,[S,P])}else A.set(x,[S])},z=x=>{var S;const P=A.get(x);P&&(A.delete(x),(S=P[1])==null||S.call(P))},N=x=>(g.add(x),g.size===1&&A.forEach(([P,I],W)=>{const j=P[3](k(W));A.set(W,[P,j])}),()=>{g.delete(x),g.size===0&&A.forEach(([P,I],W)=>{I&&(I(),A.set(W,[P]))})}),V=Array.isArray(h)?[]:Object.create(Object.getPrototypeOf(h)),Z=t(V,{deleteProperty(x,S){const P=Reflect.get(x,S);z(S);const I=Reflect.deleteProperty(x,S);return I&&C(["delete",[S],P]),I},set(x,S,P,I){const W=Reflect.has(x,S),j=Reflect.get(x,S,I);if(W&&(e(j,P)||s.has(P)&&e(j,s.get(P))))return!0;z(S),oc(P)&&(P=wy(P)||P);let O=P;if(P instanceof Promise)P.then(R=>{P.status="fulfilled",P.value=R,C(["resolve",[S],R])}).catch(R=>{P.status="rejected",P.reason=R,C(["reject",[S],R])});else{!Zr.has(P)&&n(P)&&(O=l(P));const R=!zo.has(O)&&Zr.get(O);R&&E(S,R)}return Reflect.set(x,S,O,I),C(["set",[S],P,j]),!0}});s.set(h,Z);const y=[V,$,i,N];return Zr.set(Z,y),Reflect.ownKeys(h).forEach(x=>{const S=Object.getOwnPropertyDescriptor(h,x);"value"in S&&(Z[x]=h[x],delete S.value,delete S.writable),Object.defineProperty(V,x,S)}),Z})=>[l,Zr,zo,e,t,n,r,o,i,s,a],[by]=vy();function Bt(e={}){return by(e)}function bi(e,t,n){const r=Zr.get(e);let o;const i=[],s=r[3];let a=!1;const h=s(d=>{if(i.push(d),n){t(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,h()}}function Ra(e){return zo.add(e),e}function Bn(e,t,n,r){let o=e[t];return bi(e,()=>{const i=e[t];Object.is(o,i)||n(o=i)},r)}const Vo={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},Se={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return Se.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return Se.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Vo.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=Vo.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Vo.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function o(){e(...r)}n&&clearTimeout(n),n=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(Se.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!Se.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,Se.wait(2e3)])},formatBalance(e,t){var r;let n;if(e==="0")n="0.000";else if(typeof e=="string"){const o=Number(e);o&&(n=(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return Vo.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return Se.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return Se.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return Se.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},at=Bt({isConnected:!1}),ot={state:at,subscribe(e){return bi(at,()=>e(at))},subscribeKey(e,t){return Bn(at,e,t)},setIsConnected(e){at.isConnected=e},setCaipAddress(e){at.caipAddress=e,at.address=e?Se.getPlainAddress(e):void 0},setBalance(e,t){at.balance=e,at.balanceSymbol=t},setProfileName(e){at.profileName=e},setProfileImage(e){at.profileImage=e},setAddressExplorerUrl(e){at.addressExplorerUrl=e},resetAccount(){at.isConnected=!1,at.caipAddress=void 0,at.address=void 0,at.balance=void 0,at.balanceSymbol=void 0,at.profileName=void 0,at.profileImage=void 0,at.addressExplorerUrl=void 0}};class ff{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const sc="WALLETCONNECT_DEEPLINK_CHOICE",vd="@w3m/recent",bd="@w3m/connected_wallet_image_url",ln={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(sc,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(sc);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(sc)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=ln.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(vd,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(vd);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(bd,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(bd)}catch{console.info("Unable to set Connected Wallet Image Url")}}},ar=Bt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Er={state:ar,subscribeNetworkImages(e){return bi(ar.networkImages,()=>e(ar.networkImages))},subscribeKey(e,t){return Bn(ar,e,t)},setWalletImage(e,t){ar.walletImages[e]=t},setNetworkImage(e,t){ar.networkImages[e]=t},setConnectorImage(e,t){ar.connectorImages[e]=t},setTokenImage(e,t){ar.tokenImages[e]=t}},Bo=Bt({connectors:[]}),qn={state:Bo,subscribeKey(e,t){return Bn(Bo,e,t)},setConnectors(e){Bo.connectors=e.map(t=>Ra(t))},addConnector(e){Bo.connectors.push(Ra(e))},getConnectors(){return Bo.connectors}},Do=Bt({open:!1,selectedNetworkId:void 0}),Oa={state:Do,subscribe(e){return bi(Do,()=>e(Do))},set(e){Object.assign(Do,{...Do,...e})}},St=Bt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ct={state:St,subscribeKey(e,t){return Bn(St,e,t)},_getClient(){if(!St._client)throw new Error("NetworkController client not set");return St._client},setClient(e){St._client=Ra(e)},setCaipNetwork(e){St.caipNetwork=e,Oa.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){St.caipNetwork=e,Oa.set({selectedNetworkId:e==null?void 0:e.id}),St.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){St.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();St.supportsAllNetworks=e.supportsAllNetworks,St.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),St.caipNetwork=e},resetNetwork(){St.isDefaultCaipNetwork||(St.caipNetwork=void 0),St.approvedCaipNetworkIds=void 0,St.supportsAllNetworks=!0}},Zt=Bt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),ut={state:Zt,subscribeKey(e,t){return Bn(Zt,e,t)},setProjectId(e){Zt.projectId=e},setIncludeWalletIds(e){Zt.includeWalletIds=e},setExcludeWalletIds(e){Zt.excludeWalletIds=e},setFeaturedWalletIds(e){Zt.featuredWalletIds=e},setTokens(e){Zt.tokens=e},setTermsConditionsUrl(e){Zt.termsConditionsUrl=e},setPrivacyPolicyUrl(e){Zt.privacyPolicyUrl=e},setCustomWallets(e){Zt.customWallets=e},setEnableAnalytics(e){Zt.enableAnalytics=e},setSdkVersion(e){Zt.sdkVersion=e},setMetadata(e){Zt.metadata=e}},yy=Se.getApiUrl(),Tn=new ff({baseUrl:yy}),_y="40",yd="4",Ot=Bt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),We={state:Ot,subscribeKey(e,t){return Bn(Ot,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=ut.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${Tn.baseUrl}/getWalletImage/${e}`,n=await Tn.getBlob({path:t,headers:We._getApiHeaders()});Er.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${Tn.baseUrl}/public/getAssetImage/${e}`,n=await Tn.getBlob({path:t,headers:We._getApiHeaders()});Er.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${Tn.baseUrl}/public/getAssetImage/${e}`,n=await Tn.getBlob({path:t,headers:We._getApiHeaders()});Er.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Ct.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>We._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=qn.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>We._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=ut.state;if(e!=null&&e.length){const{data:t}=await Tn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):yd,include:e==null?void 0:e.join(",")}});t.sort((r,o)=>e.indexOf(r.id)-e.indexOf(o.id));const n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>We._fetchWalletImage(r))),Ot.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=ut.state,r=[...t??[],...n??[]].filter(Boolean),{data:o,count:i}=await Tn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:yd,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=ln.getRecentWallets(),a=o.map(h=>h.image_id).filter(Boolean),l=s.map(h=>h.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(h=>We._fetchWalletImage(h))),Ot.recommended=o,Ot.count=i??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=ut.state,o=[...Ot.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:i,count:s}=await Tn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:String(e),entries:_y,include:t==null?void 0:t.join(","),exclude:o.join(",")}}),a=i.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>We._fetchWalletImage(l)),Se.wait(300)]),Ot.wallets=[...Ot.wallets,...i],Ot.count=s>Ot.count?s:Ot.count,Ot.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=ut.state;Ot.search=[];const{data:r}=await Tn.get({path:"/getWallets",headers:We._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>We._fetchWalletImage(i)),Se.wait(300)]),Ot.search=r},prefetch(){Ot.prefetchPromise=Promise.race([Promise.allSettled([We.fetchFeaturedWallets(),We.fetchRecommendedWallets(),We.fetchNetworkImages(),We.fetchConnectorImages()]),Se.wait(3e3)])}},xy=Se.getAnalyticsUrl(),Ey=new ff({baseUrl:xy}),Cy=["MODAL_CREATED"],Ni=Bt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Qe={state:Ni,subscribe(e){return bi(Ni,()=>e(Ni))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=ut.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(Cy.includes(e.data.event)||typeof window>"u")return;await Ey.post({path:"/e",headers:Qe._getApiHeaders(),body:{eventId:Se.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Ni.timestamp=Date.now(),Ni.data=e,ut.state.enableAnalytics&&Qe._sendAnalyticsEvent(Ni)}},Et=Bt({view:"Connect",history:["Connect"]}),De={state:Et,subscribeKey(e,t){return Bn(Et,e,t)},push(e,t){e!==Et.view&&(Et.view=e,Et.history.push(e),Et.data=t)},reset(e){Et.view=e,Et.history=[e]},replace(e){Et.history.length>1&&Et.history.at(-1)!==e&&(Et.view=e,Et.history[Et.history.length-1]=e)},goBack(){if(Et.history.length>1){Et.history.pop();const[e]=Et.history.slice(-1);e&&(Et.view=e)}}},aa=Bt({open:!1}),It={state:aa,subscribeKey(e,t){return Bn(aa,e,t)},async open(e){await We.state.prefetchPromise,e!=null&&e.view?De.reset(e.view):ot.state.isConnected?De.reset("Account"):De.reset("Connect"),aa.open=!0,Oa.set({open:!0}),Qe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){aa.open=!1,Oa.set({open:!1}),Qe.sendEvent({type:"track",event:"MODAL_CLOSE"})}},Ay=Se.getBlockchainApiUrl(),_d=new ff({baseUrl:Ay}),Ty={fetchIdentity({caipChainId:e,address:t}){return _d.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:ut.state.projectId}})},fetchTransactions({account:e,projectId:t,cursor:n}){const r=n?{cursor:n}:{};return _d.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r})}},jn=Bt({message:"",variant:"success",open:!1}),cn={state:jn,subscribeKey(e,t){return Bn(jn,e,t)},showSuccess(e){jn.message=e,jn.variant="success",jn.open=!0},showError(e){jn.message=e,jn.variant="error",jn.open=!0},hide(){jn.open=!1}},lt=Bt({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),mn={state:lt,subscribe(e){return bi(lt,()=>e(lt))},async fetchTransactions(e){const{projectId:t}=ut.state;if(!t||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");lt.loading=!0;try{const n=await Ty.fetchTransactions({account:e,projectId:t,cursor:lt.next}),r=this.filterSpamTransactions(n.data),o=[...lt.transactions,...r];lt.loading=!1,lt.transactions=o,lt.transactionsByYear=this.groupTransactionsByYear(lt.transactionsByYear,r),lt.empty=o.length===0,lt.next=n.next?n.next:void 0}catch{Qe.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:lt.next}}),cn.showError("Failed to fetch transactions"),lt.loading=!1,lt.empty=!0}},groupTransactionsByYear(e={},t=[]){const n=e;return t.forEach(r=>{var i;const o=new Date(r.metadata.minedAt).getFullYear();n[o]||(n[o]=[]),(i=n[o])==null||i.push(r)}),n},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(r=>{var o;return((o=r.nft_info)==null?void 0:o.flags.is_spam)===!0}))},resetTransactions(){lt.transactions=[],lt.transactionsByYear={},lt.loading=!1,lt.empty=!1,lt.next=void 0}},bt=Bt({wcError:!1,buffering:!1}),qe={state:bt,subscribeKey(e,t){return Bn(bt,e,t)},_getClient(){if(!bt._client)throw new Error("ConnectionController client not set");return bt._client},setClient(e){bt._client=Ra(e)},connectWalletConnect(){bt.wcPromise=this._getClient().connectWalletConnect(e=>{bt.wcUri=e,bt.wcPairingExpiry=Se.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInstalled(e){var t,n;return(n=(t=this._getClient()).checkInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){bt.wcUri=void 0,bt.wcPairingExpiry=void 0,bt.wcPromise=void 0,bt.wcLinking=void 0,bt.recentWallet=void 0,mn.resetTransactions(),ln.deleteWalletConnectDeepLink()},setWcLinking(e){bt.wcLinking=e},setWcError(e){bt.wcError=e,bt.buffering=!1},setRecentWallet(e){bt.recentWallet=e},setBuffering(e){bt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}};Bt({status:"uninitialized"});const Li=Bt({themeMode:"dark",themeVariables:{}}),df={state:Li,subscribe(e){return bi(Li,()=>e(Li))},setThemeMode(e){Li.themeMode=e},setThemeVariables(e){Li.themeVariables={...Li.themeVariables,...e}}},ct={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return Er.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return Er.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return Er.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ya=globalThis,hf=ya.ShadowRoot&&(ya.ShadyCSS===void 0||ya.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pf=Symbol(),xd=new WeakMap;let A1=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==pf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(hf&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=xd.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&xd.set(n,t))}return t}toString(){return this.cssText}};const $n=e=>new A1(typeof e=="string"?e:e+"",void 0,pf),$e=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new A1(n,e,pf)},Sy=(e,t)=>{if(hf)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=ya.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Ed=hf?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return $n(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$y,defineProperty:Iy,getOwnPropertyDescriptor:Ry,getOwnPropertyNames:Oy,getOwnPropertySymbols:Ny,getPrototypeOf:Ly}=Object,Cr=globalThis,Cd=Cr.trustedTypes,Py=Cd?Cd.emptyScript:"",ac=Cr.reactiveElementPolyfillSupport,Xo=(e,t)=>e,Na={toAttribute(e,t){switch(t){case Boolean:e=e?Py:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},gf=(e,t)=>!$y(e,t),Ad={attribute:!0,type:String,converter:Na,reflect:!1,hasChanged:gf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Cr.litPropertyMetadata??(Cr.litPropertyMetadata=new WeakMap);let Di=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ad){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Iy(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Ry(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ad}static _$Ei(){if(this.hasOwnProperty(Xo("elementProperties")))return;const t=Ly(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xo("properties"))){const n=this.properties,r=[...Oy(n),...Ny(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Ed(o))}else t!==void 0&&n.push(Ed(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sy(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Na).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Na;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,o=!1,i){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??gf)(o?i:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Di.elementStyles=[],Di.shadowRootOptions={mode:"open"},Di[Xo("elementProperties")]=new Map,Di[Xo("finalized")]=new Map,ac==null||ac({ReactiveElement:Di}),(Cr.reactiveElementVersions??(Cr.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis,La=es.trustedTypes,Td=La?La.createPolicy("lit-html",{createHTML:e=>e}):void 0,T1="$lit$",mr=`lit$${(Math.random()+"").slice(9)}$`,S1="?"+mr,ky=`<${S1}>`,ci=document,vs=()=>ci.createComment(""),bs=e=>e===null||typeof e!="object"&&typeof e!="function",$1=Array.isArray,My=e=>$1(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",lc=`[ 	
\f\r]`,Uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sd=/-->/g,$d=/>/g,Gr=RegExp(`>|${lc}(?:([^\\s"'>=/]+)(${lc}*=${lc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Id=/'/g,Rd=/"/g,I1=/^(?:script|style|textarea|title)$/i,R1=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ce=R1(1),ve=R1(2),ui=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),Od=new WeakMap,ti=ci.createTreeWalker(ci,129);function O1(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Td!==void 0?Td.createHTML(t):t}const By=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",s=Uo;for(let a=0;a<n;a++){const l=e[a];let h,d,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===Uo?d[1]==="!--"?s=Sd:d[1]!==void 0?s=$d:d[2]!==void 0?(I1.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Gr):d[3]!==void 0&&(s=Gr):s===Gr?d[0]===">"?(s=o??Uo,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?Gr:d[3]==='"'?Rd:Id):s===Rd||s===Id?s=Gr:s===Sd||s===$d?s=Uo:(s=Gr,o=void 0);const C=s===Gr&&e[a+1].startsWith("/>")?" ":"";i+=s===Uo?l+ky:p>=0?(r.push(h),l.slice(0,p)+T1+l.slice(p)+mr+C):l+mr+(p===-2?a:C)}return[O1(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let Xc=class N1{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[h,d]=By(t,n);if(this.el=N1.createElement(h,r),ti.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ti.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(T1)){const g=d[s++],C=o.getAttribute(p).split(mr),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:_[2],strings:C,ctor:_[1]==="."?Uy:_[1]==="?"?Fy:_[1]==="@"?Wy:xl}),o.removeAttribute(p)}else p.startsWith(mr)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(I1.test(o.tagName)){const p=o.textContent.split(mr),g=p.length-1;if(g>0){o.textContent=La?La.emptyScript:"";for(let C=0;C<g;C++)o.append(p[C],vs()),ti.nextNode(),l.push({type:2,index:++i});o.append(p[g],vs())}}}else if(o.nodeType===8)if(o.data===S1)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(mr,p+1))!==-1;)l.push({type:7,index:i}),p+=mr.length-1}i++}}static createElement(t,n){const r=ci.createElement("template");return r.innerHTML=t,r}};function to(e,t,n=e,r){var s,a;if(t===ui)return t;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=bs(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=to(e,o._$AS(e,t.values),o,r)),t}let Dy=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??ci).importNode(n,!0);ti.currentNode=o;let i=ti.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new mf(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new jy(i,this,t)),this._$AV.push(h),l=r[++a]}s!==(l==null?void 0:l.index)&&(i=ti.nextNode(),s++)}return ti.currentNode=ci,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},mf=class L1{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=to(this,t,n),bs(t)?t===st||t==null||t===""?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==ui&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):My(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==st&&bs(this._$AH)?this._$AA.nextSibling.data=t:this.$(ci.createTextNode(t)),this._$AH=t}g(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Xc.createElement(O1(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new Dy(o,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=Od.get(t.strings);return n===void 0&&Od.set(t.strings,n=new Xc(t)),n}T(t){$1(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new L1(this.k(vs()),this.k(vs()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},xl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=st}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=to(this,t,n,0),s=!bs(t)||t!==this._$AH&&t!==ui,s&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=to(this,a[r+l],n,l),h===ui&&(h=this._$AH[l]),s||(s=!bs(h)||h!==this._$AH[l]),h===st?t=st:t!==st&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}s&&!o&&this.O(t)}O(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Uy=class extends xl{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===st?void 0:t}},Fy=class extends xl{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}},Wy=class extends xl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=to(this,t,n,0)??st)===ui)return;const r=this._$AH,o=t===st&&r!==st||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==st&&(r===st||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},jy=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){to(this,t)}};const cc=es.litHtmlPolyfillSupport;cc==null||cc(Xc,mf),(es.litHtmlVersions??(es.litHtmlVersions=[])).push("3.1.0");const Hy=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new mf(t.insertBefore(vs(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ie=class extends Di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ui}};var Kh;Ie._$litElement$=!0,Ie.finalized=!0,(Kh=globalThis.litElementHydrateSupport)==null||Kh.call(globalThis,{LitElement:Ie});const uc=globalThis.litElementPolyfillSupport;uc==null||uc({LitElement:Ie});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");let fc,qi,Zi;function zy(e,t){fc=document.createElement("style"),qi=document.createElement("style"),Zi=document.createElement("style"),fc.textContent=dc(e).core.cssText,qi.textContent=dc(e).dark.cssText,Zi.textContent=dc(e).light.cssText,document.head.appendChild(fc),document.head.appendChild(qi),document.head.appendChild(Zi),Vy(t)}function Vy(e){qi&&Zi&&(e==="light"?(qi.removeAttribute("media"),Zi.media="enabled"):(Zi.removeAttribute("media"),qi.media="enabled"))}function dc(e){return{core:$e`
      :root {
        --w3m-color-mix-strength: ${$n(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${$n((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${$n((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${$n((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${$n((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:$e`
      :root {
        --w3m-color-mix: ${$n((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${$n((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:$e`
      :root {
        --w3m-color-mix: ${$n((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${$n((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const Pe=$e`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,wt=$e`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,wf=$e`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Gy(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function Ky(e,t){return customElements.get(e)||customElements.define(e,t),t}function ge(e){return function(n){return typeof n=="function"?Ky(e,n):Gy(e,n)}}const qy=$e`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var Zy=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let eu=class extends Ie{render(){return ce`<slot></slot>`}};eu.styles=[Pe,qy];eu=Zy([ge("wui-card")],eu);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yy={attribute:!0,type:String,converter:Na,reflect:!1,hasChanged:gf},Jy=(e=Yy,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function Y(e){return(t,n)=>typeof n=="object"?Jy(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vf(e){return Y({...e,state:!0,attribute:!1})}const Qy=$e`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Xy=ve`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,e4=ve`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,t4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,n4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,r4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,i4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,o4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,s4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,a4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,l4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,c4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,u4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,f4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,d4=ve`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,h4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,p4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,g4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,m4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,w4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,v4=ve` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,b4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,y4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,_4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,x4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,E4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,C4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,A4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,T4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,$4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,I4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,R4=ve`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,O4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,N4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,L4=ve`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,P4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,k4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,M4=ve` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,B4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,D4=ve`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,U4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,F4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,W4=ve`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,j4=ve`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,H4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,z4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V4=ve`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,G4=ve`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,K4=ve`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,q4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Z4=ve`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Y4=ve`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var El=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const J4={allWallets:Xy,appStore:e4,chromeStore:d4,apple:t4,arrowBottom:n4,arrowLeft:r4,arrowRight:i4,arrowTop:o4,browser:s4,checkmark:a4,chevronBottom:l4,chevronLeft:c4,chevronRight:u4,chevronTop:f4,clock:h4,close:p4,compass:m4,coinPlaceholder:g4,copy:w4,cursor:v4,desktop:b4,disconnect:y4,discord:_4,etherscan:x4,extension:E4,externalLink:C4,facebook:A4,filters:T4,github:S4,google:$4,helpCircle:I4,infoCircle:R4,mail:O4,mobile:N4,networkPlaceholder:L4,nftPlaceholder:P4,off:k4,playStore:M4,qrCode:B4,refresh:D4,search:U4,swapHorizontal:F4,swapHorizontalBold:W4,swapVertical:j4,telegram:H4,twitch:z4,twitter:V4,twitterIcon:G4,wallet:q4,walletConnect:Z4,walletPlaceholder:K4,warningCircle:Y4};let no=class extends Ie{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,ce`${J4[this.name]}`}};no.styles=[Pe,wf,Qy];El([Y()],no.prototype,"size",void 0);El([Y()],no.prototype,"name",void 0);El([Y()],no.prototype,"color",void 0);no=El([ge("wui-icon")],no);const Q4=$e`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var bf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ys=class extends Ie{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return ce`<img src=${this.src} alt=${this.alt} />`}};ys.styles=[Pe,wf,Q4];bf([Y()],ys.prototype,"src",void 0);bf([Y()],ys.prototype,"alt",void 0);ys=bf([ge("wui-image")],ys);const X4=$e`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var e6=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let tu=class extends Ie{render(){return ce`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tu.styles=[Pe,X4];tu=e6([ge("wui-loading-hexagon")],tu);const t6=$e`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var yf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let _s=class extends Ie{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,ce`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};_s.styles=[Pe,t6];yf([Y()],_s.prototype,"color",void 0);yf([Y()],_s.prototype,"size",void 0);_s=yf([ge("wui-loading-spinner")],_s);const n6=$e`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var P1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pa=class extends Ie{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,i=245+r,s=360+r*1.75;return ce`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Pa.styles=[Pe,n6];P1([Y({type:Number})],Pa.prototype,"radius",void 0);Pa=P1([ge("wui-loading-thumbnail")],Pa);const r6=$e`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Cl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ro=class extends Ie{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,ce`<slot></slot>`}};ro.styles=[r6];Cl([Y()],ro.prototype,"width",void 0);Cl([Y()],ro.prototype,"height",void 0);Cl([Y()],ro.prototype,"borderRadius",void 0);ro=Cl([ge("wui-shimmer")],ro);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},M1=e=>(...t)=>({_$litDirective$:e,values:t});let B1=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i6=M1(class extends B1{constructor(e){var t;if(super(e),e.type!==k1.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.st)!=null&&r.has(i))&&this.it.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.it)i in t||(n.remove(i),this.it.delete(i));for(const i in t){const s=!!t[i];s===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(s?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return ui}}),o6=$e`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Al=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let io=class extends Ie{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,ce`<slot class=${i6(t)}></slot>`}};io.styles=[Pe,o6];Al([Y()],io.prototype,"variant",void 0);Al([Y()],io.prototype,"color",void 0);Al([Y()],io.prototype,"align",void 0);io=Al([ge("wui-text")],io);const s6=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,a6=ve`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,l6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,c6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,u6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,f6=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,d6=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,h6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,p6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,g6=ve`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,m6=ve`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w6=ve`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,v6=ve`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,b6=$e`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var D1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const y6={browser:s6,dao:a6,defi:l6,defiAlt:c6,eth:u6,layers:f6,lock:d6,login:h6,network:p6,nft:g6,noun:m6,profile:w6,system:v6};let ka=class extends Ie{constructor(){super(...arguments),this.name="browser"}render(){return ce`${y6[this.name]}`}};ka.styles=[Pe,b6];D1([Y()],ka.prototype,"name",void 0);ka=D1([ge("wui-visual")],ka);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=e=>e??st,Je={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),o=[];for(let i=0;i<5;i+=1){const s=this.tintColor(r,.15*i);o.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,o=t&255;return[n,r,o]},tintColor(e,t){const[n,r,o]=e,i=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},_6=$e`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Qt=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Mt=class extends Ie{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Je.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Je.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Je.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Je.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Je.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Je.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Je.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Je.getSpacingStyles(this.margin,3)};
    `,ce`<slot></slot>`}};Mt.styles=[Pe,_6];Qt([Y()],Mt.prototype,"flexDirection",void 0);Qt([Y()],Mt.prototype,"flexWrap",void 0);Qt([Y()],Mt.prototype,"flexBasis",void 0);Qt([Y()],Mt.prototype,"flexGrow",void 0);Qt([Y()],Mt.prototype,"flexShrink",void 0);Qt([Y()],Mt.prototype,"alignItems",void 0);Qt([Y()],Mt.prototype,"justifyContent",void 0);Qt([Y()],Mt.prototype,"columnGap",void 0);Qt([Y()],Mt.prototype,"rowGap",void 0);Qt([Y()],Mt.prototype,"gap",void 0);Qt([Y()],Mt.prototype,"padding",void 0);Qt([Y()],Mt.prototype,"margin",void 0);Mt=Qt([ge("wui-flex")],Mt);const x6=$e`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Tl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let oo=class extends Ie{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return ce`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",ce`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Je.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};oo.styles=[Pe,x6];Tl([Y()],oo.prototype,"imageSrc",void 0);Tl([Y()],oo.prototype,"alt",void 0);Tl([Y()],oo.prototype,"address",void 0);oo=Tl([ge("wui-avatar")],oo);const E6=$e`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var tr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let xn=class extends Ie{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,n=this.size==="lg",r=n?"12%":"16%",o=n?"xxs":"3xl",i=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${a||i?"100%":r};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,ce` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};xn.styles=[Pe,wt,E6];tr([Y()],xn.prototype,"size",void 0);tr([Y()],xn.prototype,"backgroundColor",void 0);tr([Y()],xn.prototype,"iconColor",void 0);tr([Y()],xn.prototype,"iconSize",void 0);tr([Y()],xn.prototype,"background",void 0);tr([Y({type:Boolean})],xn.prototype,"border",void 0);tr([Y()],xn.prototype,"borderColor",void 0);tr([Y()],xn.prototype,"icon",void 0);xn=tr([ge("wui-icon-box")],xn);const C6=$e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var yi=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Yn=class extends Ie{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return ce`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${si(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Je.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?ce`<wui-image src=${this.networkSrc}></wui-image>`:ce`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return ce`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Yn.styles=[Pe,wt,C6];yi([Y()],Yn.prototype,"networkSrc",void 0);yi([Y()],Yn.prototype,"avatarSrc",void 0);yi([Y()],Yn.prototype,"balance",void 0);yi([Y({type:Boolean})],Yn.prototype,"disabled",void 0);yi([Y({type:Boolean})],Yn.prototype,"isProfileName",void 0);yi([Y()],Yn.prototype,"address",void 0);Yn=yi([ge("wui-account-button")],Yn);const A6=$e`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Fs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let fi=class extends Ie{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),ce` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?ce`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:ce`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fi.styles=[Pe,A6];Fs([Y()],fi.prototype,"size",void 0);Fs([Y()],fi.prototype,"name",void 0);Fs([Y()],fi.prototype,"imageSrc",void 0);Fs([Y()],fi.prototype,"walletIcon",void 0);fi=Fs([ge("wui-wallet-image")],fi);const T6=$e`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var U1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const hc=4;let Ma=class extends Ie{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<hc;return ce`${this.walletImages.slice(0,hc).map(({src:n,walletName:r})=>ce`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${si(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(hc-this.walletImages.length)].map(()=>ce` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};Ma.styles=[Pe,T6];U1([Y({type:Array})],Ma.prototype,"walletImages",void 0);Ma=U1([ge("wui-all-wallets-image")],Ma);const S6=$e`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var So=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ir=class extends Ie{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return ce`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?ce`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ce``}};Ir.styles=[Pe,wt,S6];So([Y()],Ir.prototype,"size",void 0);So([Y({type:Boolean})],Ir.prototype,"disabled",void 0);So([Y({type:Boolean})],Ir.prototype,"fullWidth",void 0);So([Y({type:Boolean})],Ir.prototype,"loading",void 0);So([Y()],Ir.prototype,"variant",void 0);Ir=So([ge("wui-button")],Ir);const F1=ve`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,$6=$e`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var W1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ba=class extends Ie{constructor(){super(...arguments),this.type="wallet"}render(){return ce`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?ce` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${F1}`:ce`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ba.styles=[Pe,wt,$6];W1([Y()],Ba.prototype,"type",void 0);Ba=W1([ge("wui-card-select-loader")],Ba);const I6=ve`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,R6=$e`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ws=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let di=class extends Ie{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,ce`${this.templateVisual()} ${t?I6:F1}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:ce`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};di.styles=[Pe,R6];Ws([Y()],di.prototype,"size",void 0);Ws([Y()],di.prototype,"name",void 0);Ws([Y()],di.prototype,"imageSrc",void 0);Ws([Y({type:Boolean})],di.prototype,"selected",void 0);di=Ws([ge("wui-network-image")],di);const O6=$e`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var $o=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Rr=class extends Ie{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return ce`
      <button data-selected=${si(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?ce`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${si(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:ce`
      <wui-wallet-image size="md" imageSrc=${si(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Rr.styles=[Pe,wt,O6];$o([Y()],Rr.prototype,"name",void 0);$o([Y()],Rr.prototype,"type",void 0);$o([Y()],Rr.prototype,"imageSrc",void 0);$o([Y({type:Boolean})],Rr.prototype,"disabled",void 0);$o([Y({type:Boolean})],Rr.prototype,"selected",void 0);Rr=$o([ge("wui-card-select")],Rr);const N6=$e`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var Io=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Or=class extends Ie{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return ce`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${Je.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?ce`<wui-image src=${this.imageSrc}></wui-image>`:null}};Or.styles=[Pe,wt,N6];Io([Y()],Or.prototype,"variant",void 0);Io([Y()],Or.prototype,"imageSrc",void 0);Io([Y({type:Boolean})],Or.prototype,"disabled",void 0);Io([Y()],Or.prototype,"icon",void 0);Io([Y()],Or.prototype,"href",void 0);Or=Io([ge("wui-chip")],Or);const L6=$e`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var _f=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let xs=class extends Ie{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return ce`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?ce`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};xs.styles=[Pe,wt,L6];_f([Y()],xs.prototype,"size",void 0);_f([Y({type:Boolean})],xs.prototype,"loading",void 0);xs=_f([ge("wui-connect-button")],xs);const P6=$e`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Sl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let so=class extends Ie{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return ce`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};so.styles=[Pe,wt,P6];Sl([Y({type:Boolean})],so.prototype,"disabled",void 0);Sl([Y()],so.prototype,"label",void 0);Sl([Y()],so.prototype,"buttonLabel",void 0);so=Sl([ge("wui-cta-button")],so);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k6=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(r=o._$AO)==null||r.call(o,t,!1),ts(o,t);return!0},Da=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},j1=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),D6(t)}};function M6(e){this._$AN!==void 0?(Da(this),this._$AM=e,j1(this)):this._$AM=e}function B6(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)ts(r[i],!1),Da(r[i]);else r!=null&&(ts(r,!1),Da(r));else ts(this,e)}const D6=e=>{e.type==k1.CHILD&&(e._$AP??(e._$AP=B6),e._$AQ??(e._$AQ=M6))};let U6=class extends B1{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),j1(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(o=this.disconnected)==null||o.call(this)),n&&(ts(this,t),Da(this))}setValue(t){if(k6(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H1=()=>new F6;let F6=class{};const pc=new WeakMap,z1=M1(class extends U6{render(e){return st}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),st}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=pc.get(t);n===void 0&&(n=new WeakMap,pc.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=pc.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),W6=$e`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var _i=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Jn=class extends Ie{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=H1()}render(){const t=`wui-size-${this.size}`;return ce` ${this.templateIcon()}
      <input
        ${z1(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${si(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?ce`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Jn.styles=[Pe,wt,W6];_i([Y()],Jn.prototype,"size",void 0);_i([Y()],Jn.prototype,"icon",void 0);_i([Y({type:Boolean})],Jn.prototype,"disabled",void 0);_i([Y()],Jn.prototype,"placeholder",void 0);_i([Y()],Jn.prototype,"type",void 0);_i([Y()],Jn.prototype,"keyHint",void 0);Jn=_i([ge("wui-input-text")],Jn);const j6=$e`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var V1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ua=class extends Ie{render(){return ce`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?ce`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Ua.styles=[Pe,j6];V1([Y()],Ua.prototype,"errorMessage",void 0);Ua=V1([ge("wui-email-input")],Ua);const H6=$e`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var js=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hi=class extends Ie{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};hi.styles=[Pe,wt,wf,H6];js([Y()],hi.prototype,"size",void 0);js([Y({type:Boolean})],hi.prototype,"disabled",void 0);js([Y()],hi.prototype,"icon",void 0);js([Y()],hi.prototype,"iconColor",void 0);hi=js([ge("wui-icon-link")],hi);const z6=$e`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var G1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Fa=class extends Ie{constructor(){super(...arguments),this.icon="copy"}render(){return ce`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Fa.styles=[Pe,wt,z6];G1([Y()],Fa.prototype,"icon",void 0);Fa=G1([ge("wui-input-element")],Fa);const V6=$e`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var K1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wa=class extends Ie{constructor(){super(...arguments),this.disabled=!1}render(){return ce`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};Wa.styles=[Pe,wt,V6];K1([Y({type:Boolean})],Wa.prototype,"disabled",void 0);Wa=K1([ge("wui-input-numeric")],Wa);const G6=$e`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var xf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Es=class extends Ie{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Es.styles=[Pe,wt,G6];xf([Y({type:Boolean})],Es.prototype,"disabled",void 0);xf([Y()],Es.prototype,"color",void 0);Es=xf([ge("wui-link")],Es);const K6=$e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Dn=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let dn=class extends Ie{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return ce`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${si(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return ce`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return ce`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:n;return ce`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?ce`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:ce``}chevronTemplate(){return this.chevron?ce`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};dn.styles=[Pe,wt,K6];Dn([Y()],dn.prototype,"icon",void 0);Dn([Y()],dn.prototype,"iconSize",void 0);Dn([Y()],dn.prototype,"variant",void 0);Dn([Y()],dn.prototype,"iconVariant",void 0);Dn([Y({type:Boolean})],dn.prototype,"disabled",void 0);Dn([Y()],dn.prototype,"imageSrc",void 0);Dn([Y()],dn.prototype,"alt",void 0);Dn([Y({type:Boolean})],dn.prototype,"chevron",void 0);Dn([Y({type:Boolean})],dn.prototype,"loading",void 0);dn=Dn([ge("wui-list-item")],dn);var nu;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(nu||(nu={}));const q6=$e`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var xi=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qn=class extends Ie{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,n]=this.images,r=(t==null?void 0:t.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${s};
    `,ce`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,n]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||n!=null&&n.url)?ce`<div class="swap-images-container">
        ${t!=null&&t.url?ce`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?ce`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?ce`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?ce`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:ce`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",n;return n=this.getIcon(),this.status&&(t=this.getStatusColor()),n?ce`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Qn.styles=[q6];xi([Y()],Qn.prototype,"type",void 0);xi([Y()],Qn.prototype,"status",void 0);xi([Y()],Qn.prototype,"direction",void 0);xi([Y()],Qn.prototype,"onlyDirectionIcon",void 0);xi([Y()],Qn.prototype,"images",void 0);xi([Y()],Qn.prototype,"secondImage",void 0);Qn=xi([ge("wui-transaction-visual")],Qn);const Z6=$e`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var kr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ln=class extends Ie{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return ce`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${nu[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[0];return t?ce`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const t=(n=this.descriptions)==null?void 0:n[1];return t?ce`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};Ln.styles=[Pe,Z6];kr([Y()],Ln.prototype,"type",void 0);kr([Y()],Ln.prototype,"descriptions",void 0);kr([Y()],Ln.prototype,"date",void 0);kr([Y()],Ln.prototype,"onlyDirectionIcon",void 0);kr([Y()],Ln.prototype,"status",void 0);kr([Y()],Ln.prototype,"direction",void 0);kr([Y()],Ln.prototype,"images",void 0);Ln=kr([ge("wui-transaction-list-item")],Ln);const Y6=$e`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var J6=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ru=class extends Ie{render(){return ce`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};ru.styles=[Pe,Y6];ru=J6([ge("wui-transaction-list-item-loader")],ru);const Q6=$e`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var q1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ja=class extends Ie{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,ce`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ja.styles=[Pe,Q6];q1([Y()],ja.prototype,"variant",void 0);ja=q1([ge("wui-tag")],ja);const X6=$e`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Un=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hn=class extends Ie{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?ce` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?ce` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?ce`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?ce`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?ce`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?ce`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};hn.styles=[Pe,wt,X6];Un([Y({type:Array})],hn.prototype,"walletImages",void 0);Un([Y()],hn.prototype,"imageSrc",void 0);Un([Y()],hn.prototype,"name",void 0);Un([Y()],hn.prototype,"tagLabel",void 0);Un([Y()],hn.prototype,"tagVariant",void 0);Un([Y()],hn.prototype,"icon",void 0);Un([Y()],hn.prototype,"walletIcon",void 0);Un([Y({type:Boolean})],hn.prototype,"disabled",void 0);Un([Y({type:Boolean})],hn.prototype,"showAllWallets",void 0);hn=Un([ge("wui-list-wallet")],hn);const e_=$e`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Z1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ha=class extends Ie{constructor(){super(...arguments),this.logo="google"}render(){return ce`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Ha.styles=[Pe,e_];Z1([Y()],Ha.prototype,"logo",void 0);Ha=Z1([ge("wui-logo")],Ha);const t_=$e`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ef=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Cs=class extends Ie{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return ce`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Cs.styles=[Pe,wt,t_];Ef([Y()],Cs.prototype,"logo",void 0);Ef([Y({type:Boolean})],Cs.prototype,"disabled",void 0);Cs=Ef([ge("wui-logo-select")],Cs);const n_=$e`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var Cf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let As=class extends Ie{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return ce`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?ce`<wui-image src=${this.imageSrc}></wui-image>`:ce`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};As.styles=[Pe,wt,n_];Cf([Y()],As.prototype,"imageSrc",void 0);Cf([Y({type:Boolean})],As.prototype,"disabled",void 0);As=Cf([ge("wui-network-button")],As);const r_=$e`
  :host {
    position: relative;
    display: block;
  }
`;var Y1=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let za=class extends Ie{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(t.key)&&t.preventDefault();const s=o.selectionStart;switch(t.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):o.value="";break;case"Backspace":o.value===""?this.focusInputField("prev",n):o.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,o=this.numerics[r<this.length?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}if(t==="prev"){const r=n-1,o=this.numerics[r>-1?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return ce`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>ce`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,o=this.getInputElement(r);if(o){const i=o.value;t.inputType==="insertFromPaste"?this.handlePaste(o,i,n):Je.isNumber(i)&&t.data?(o.value=t.data,this.focusInputField("next",n)):o.value=""}}handlePaste(t,n,r){const o=n[0];if(o&&Je.isNumber(o)){t.value=o;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};za.styles=[Pe,r_];Y1([Y({type:Number})],za.prototype,"length",void 0);za=Y1([ge("wui-otp")],za);var Hs={},i_=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},J1={},Xt={};let Af;const o_=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Xt.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};Xt.getSymbolTotalCodewords=function(t){return o_[t]};Xt.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};Xt.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Af=t};Xt.isKanjiModeEnabled=function(){return typeof Af<"u"};Xt.toSJIS=function(t){return Af(t)};var $l={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})($l);function Q1(){this.buffer=[],this.length=0}Q1.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var s_=Q1;function zs(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}zs.prototype.set=function(e,t,n,r){const o=e*this.size+t;this.data[o]=n,r&&(this.reservedBit[o]=!0)};zs.prototype.get=function(e,t){return this.data[e*this.size+t]};zs.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};zs.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var a_=zs,X1={};(function(e){const t=Xt.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=t(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],i=e.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([i[a],i[l]]);return o}})(X1);var eg={};const l_=Xt.getSymbolSize,Nd=7;eg.getPositions=function(t){const n=l_(t);return[[0,0],[n-Nd,0],[0,n-Nd]]};var tg={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,l=0,h=null,d=null;for(let p=0;p<i;p++){a=l=0,h=d=null;for(let g=0;g<i;g++){let C=o.get(p,g);C===h?a++:(a>=5&&(s+=t.N1+(a-5)),h=C,a=1),C=o.get(g,p),C===d?l++:(l>=5&&(s+=t.N1+(l-5)),d=C,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let l=0;l<i-1;l++){const h=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(h===4||h===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,l=0;for(let h=0;h<i;h++){a=l=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(h,d),d>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(d,h),d>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let l=0;l<s;l++)i+=o.data[l];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function n(r,o,i){switch(r){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)i.isReserved(l,a)||i.xor(l,a,n(o,l,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let h=0;h<s;h++){i(h),e.applyMask(h,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(h,o),d<l&&(l=d,a=h)}return a}})(tg);var Il={};const br=$l,la=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ca=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Il.getBlocksCount=function(t,n){switch(n){case br.L:return la[(t-1)*4+0];case br.M:return la[(t-1)*4+1];case br.Q:return la[(t-1)*4+2];case br.H:return la[(t-1)*4+3];default:return}};Il.getTotalCodewordsCount=function(t,n){switch(n){case br.L:return ca[(t-1)*4+0];case br.M:return ca[(t-1)*4+1];case br.Q:return ca[(t-1)*4+2];case br.H:return ca[(t-1)*4+3];default:return}};var ng={},Rl={};const ns=new Uint8Array(512),Va=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)ns[n]=t,Va[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)ns[n]=ns[n-255]})();Rl.log=function(t){if(t<1)throw new Error("log("+t+")");return Va[t]};Rl.exp=function(t){return ns[t]};Rl.mul=function(t,n){return t===0||n===0?0:ns[Va[t]+Va[n]]};(function(e){const t=Rl;e.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(r[s],o[a]);return i},e.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let l=0;l<o.length;l++)i[l]^=t.mul(o[l],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(ng);const rg=ng;function Tf(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Tf.prototype.initialize=function(t){this.degree=t,this.genPoly=rg.generateECPolynomial(this.degree)};Tf.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=rg.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var c_=Tf,ig={},Mr={},Sf={};Sf.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Fn={};const og="[0-9]+",u_="[A-Z $%*+\\-./:]+";let Ts="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ts=Ts.replace(/u/g,"\\u");const f_="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ts+`)(?:.|[\r
]))+`;Fn.KANJI=new RegExp(Ts,"g");Fn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Fn.BYTE=new RegExp(f_,"g");Fn.NUMERIC=new RegExp(og,"g");Fn.ALPHANUMERIC=new RegExp(u_,"g");const d_=new RegExp("^"+Ts+"$"),h_=new RegExp("^"+og+"$"),p_=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Fn.testKanji=function(t){return d_.test(t)};Fn.testNumeric=function(t){return h_.test(t)};Fn.testAlphanumeric=function(t){return p_.test(t)};(function(e){const t=Sf,n=Fn;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return n.testNumeric(i)?e.NUMERIC:n.testAlphanumeric(i)?e.ALPHANUMERIC:n.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return r(i)}catch{return s}}})(Mr);(function(e){const t=Xt,n=Il,r=$l,o=Mr,i=Sf,s=7973,a=t.getBCHDigit(s);function l(g,C,_){for(let $=1;$<=40;$++)if(C<=e.getCapacity($,_,g))return $}function h(g,C){return o.getCharCountIndicator(g,C)+4}function d(g,C){let _=0;return g.forEach(function($){const k=h($.mode,C);_+=k+$.getBitsLength()}),_}function p(g,C){for(let _=1;_<=40;_++)if(d(g,_)<=e.getCapacity(_,C,o.MIXED))return _}e.from=function(C,_){return i.isValid(C)?parseInt(C,10):_},e.getCapacity=function(C,_,$){if(!i.isValid(C))throw new Error("Invalid QR Code version");typeof $>"u"&&($=o.BYTE);const k=t.getSymbolTotalCodewords(C),A=n.getTotalCodewordsCount(C,_),E=(k-A)*8;if($===o.MIXED)return E;const z=E-h($,C);switch($){case o.NUMERIC:return Math.floor(z/10*3);case o.ALPHANUMERIC:return Math.floor(z/11*2);case o.KANJI:return Math.floor(z/13);case o.BYTE:default:return Math.floor(z/8)}},e.getBestVersionForData=function(C,_){let $;const k=r.from(_,r.M);if(Array.isArray(C)){if(C.length>1)return p(C,k);if(C.length===0)return 1;$=C[0]}else $=C;return l($.mode,$.getLength(),k)},e.getEncodedBits=function(C){if(!i.isValid(C)||C<7)throw new Error("Invalid QR Code version");let _=C<<12;for(;t.getBCHDigit(_)-a>=0;)_^=s<<t.getBCHDigit(_)-a;return C<<12|_}})(ig);var sg={};const iu=Xt,ag=1335,g_=21522,Ld=iu.getBCHDigit(ag);sg.getEncodedBits=function(t,n){const r=t.bit<<3|n;let o=r<<10;for(;iu.getBCHDigit(o)-Ld>=0;)o^=ag<<iu.getBCHDigit(o)-Ld;return(r<<10|o)^g_};var lg={};const m_=Mr;function ao(e){this.mode=m_.NUMERIC,this.data=e.toString()}ao.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};ao.prototype.getLength=function(){return this.data.length};ao.prototype.getBitsLength=function(){return ao.getBitsLength(this.data.length)};ao.prototype.write=function(t){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),t.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),t.put(o,i*3+1))};var w_=ao;const v_=Mr,gc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function lo(e){this.mode=v_.ALPHANUMERIC,this.data=e}lo.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};lo.prototype.getLength=function(){return this.data.length};lo.prototype.getBitsLength=function(){return lo.getBitsLength(this.data.length)};lo.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=gc.indexOf(this.data[n])*45;r+=gc.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(gc.indexOf(this.data[n]),6)};var b_=lo,y_=function(t){for(var n=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const __=y_,x_=Mr;function co(e){this.mode=x_.BYTE,typeof e=="string"&&(e=__(e)),this.data=new Uint8Array(e)}co.getBitsLength=function(t){return t*8};co.prototype.getLength=function(){return this.data.length};co.prototype.getBitsLength=function(){return co.getBitsLength(this.data.length)};co.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var E_=co;const C_=Mr,A_=Xt;function uo(e){this.mode=C_.KANJI,this.data=e}uo.getBitsLength=function(t){return t*13};uo.prototype.getLength=function(){return this.data.length};uo.prototype.getBitsLength=function(){return uo.getBitsLength(this.data.length)};uo.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=A_.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var T_=uo,cg={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,h,d,p,g,C,_,$,k;!a.empty();){l=a.pop(),h=l.value,p=l.cost,g=n[h]||{};for(d in g)g.hasOwnProperty(d)&&(C=g[d],_=p+C,$=s[d],k=typeof s[d]>"u",(k||$>_)&&(s[d]=_,a.push(d,_),i[d]=h))}if(typeof o<"u"&&typeof s[o]>"u"){var A=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(A)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=t.single_source_shortest_paths(n,r,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(cg);var S_=cg.exports;(function(e){const t=Mr,n=w_,r=b_,o=E_,i=T_,s=Fn,a=Xt,l=S_;function h(A){return unescape(encodeURIComponent(A)).length}function d(A,E,z){const N=[];let V;for(;(V=A.exec(z))!==null;)N.push({data:V[0],index:V.index,mode:E,length:V[0].length});return N}function p(A){const E=d(s.NUMERIC,t.NUMERIC,A),z=d(s.ALPHANUMERIC,t.ALPHANUMERIC,A);let N,V;return a.isKanjiModeEnabled()?(N=d(s.BYTE,t.BYTE,A),V=d(s.KANJI,t.KANJI,A)):(N=d(s.BYTE_KANJI,t.BYTE,A),V=[]),E.concat(z,N,V).sort(function(Z,y){return Z.index-y.index}).map(function(Z){return{data:Z.data,mode:Z.mode,length:Z.length}})}function g(A,E){switch(E){case t.NUMERIC:return n.getBitsLength(A);case t.ALPHANUMERIC:return r.getBitsLength(A);case t.KANJI:return i.getBitsLength(A);case t.BYTE:return o.getBitsLength(A)}}function C(A){return A.reduce(function(E,z){const N=E.length-1>=0?E[E.length-1]:null;return N&&N.mode===z.mode?(E[E.length-1].data+=z.data,E):(E.push(z),E)},[])}function _(A){const E=[];for(let z=0;z<A.length;z++){const N=A[z];switch(N.mode){case t.NUMERIC:E.push([N,{data:N.data,mode:t.ALPHANUMERIC,length:N.length},{data:N.data,mode:t.BYTE,length:N.length}]);break;case t.ALPHANUMERIC:E.push([N,{data:N.data,mode:t.BYTE,length:N.length}]);break;case t.KANJI:E.push([N,{data:N.data,mode:t.BYTE,length:h(N.data)}]);break;case t.BYTE:E.push([{data:N.data,mode:t.BYTE,length:h(N.data)}])}}return E}function $(A,E){const z={},N={start:{}};let V=["start"];for(let q=0;q<A.length;q++){const Z=A[q],y=[];for(let x=0;x<Z.length;x++){const S=Z[x],P=""+q+x;y.push(P),z[P]={node:S,lastCount:0},N[P]={};for(let I=0;I<V.length;I++){const W=V[I];z[W]&&z[W].node.mode===S.mode?(N[W][P]=g(z[W].lastCount+S.length,S.mode)-g(z[W].lastCount,S.mode),z[W].lastCount+=S.length):(z[W]&&(z[W].lastCount=S.length),N[W][P]=g(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,E))}}V=y}for(let q=0;q<V.length;q++)N[V[q]].end=0;return{map:N,table:z}}function k(A,E){let z;const N=t.getBestModeForData(A);if(z=t.from(E,N),z!==t.BYTE&&z.bit<N.bit)throw new Error('"'+A+'" cannot be encoded with mode '+t.toString(z)+`.
 Suggested mode is: `+t.toString(N));switch(z===t.KANJI&&!a.isKanjiModeEnabled()&&(z=t.BYTE),z){case t.NUMERIC:return new n(A);case t.ALPHANUMERIC:return new r(A);case t.KANJI:return new i(A);case t.BYTE:return new o(A)}}e.fromArray=function(E){return E.reduce(function(z,N){return typeof N=="string"?z.push(k(N,null)):N.data&&z.push(k(N.data,N.mode)),z},[])},e.fromString=function(E,z){const N=p(E,a.isKanjiModeEnabled()),V=_(N),q=$(V,z),Z=l.find_path(q.map,"start","end"),y=[];for(let x=1;x<Z.length-1;x++)y.push(q.table[Z[x]].node);return e.fromArray(C(y))},e.rawSplit=function(E){return e.fromArray(p(E,a.isKanjiModeEnabled()))}})(lg);const Ol=Xt,mc=$l,$_=s_,I_=a_,R_=X1,O_=eg,ou=tg,su=Il,N_=c_,Ga=ig,L_=sg,P_=Mr,wc=lg;function k_(e,t){const n=e.size,r=O_.getPositions(t);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(i+a,s+l,!0,!0):e.set(i+a,s+l,!1,!0))}}function M_(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function B_(e,t){const n=R_.getPositions(t);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,i+a,!0,!0):e.set(o+s,i+a,!1,!0)}}function D_(e,t){const n=e.size,r=Ga.getEncodedBits(t);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=(r>>a&1)===1,e.set(o,i,s,!0),e.set(i,o,s,!0)}function vc(e,t,n){const r=e.size,o=L_.getEncodedBits(t,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(r-15+i,8,s,!0),i<8?e.set(8,r-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(r-8,8,1,!0)}function U_(e,t){const n=e.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(o,a-l)){let h=!1;s<t.length&&(h=(t[s]>>>i&1)===1),e.set(o,a-l,h),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function F_(e,t,n){const r=new $_;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),P_.getCharCountIndicator(l.mode,e)),l.write(r)});const o=Ol.getSymbolTotalCodewords(e),i=su.getTotalCodewordsCount(e,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return W_(r,e,t)}function W_(e,t,n){const r=Ol.getSymbolTotalCodewords(t),o=su.getTotalCodewordsCount(t,n),i=r-o,s=su.getBlocksCount(t,n),a=r%s,l=s-a,h=Math.floor(r/s),d=Math.floor(i/s),p=d+1,g=h-d,C=new N_(g);let _=0;const $=new Array(s),k=new Array(s);let A=0;const E=new Uint8Array(e.buffer);for(let Z=0;Z<s;Z++){const y=Z<l?d:p;$[Z]=E.slice(_,_+y),k[Z]=C.encode($[Z]),_+=y,A=Math.max(A,y)}const z=new Uint8Array(r);let N=0,V,q;for(V=0;V<A;V++)for(q=0;q<s;q++)V<$[q].length&&(z[N++]=$[q][V]);for(V=0;V<g;V++)for(q=0;q<s;q++)z[N++]=k[q][V];return z}function j_(e,t,n,r){let o;if(Array.isArray(e))o=wc.fromArray(e);else if(typeof e=="string"){let h=t;if(!h){const d=wc.rawSplit(e);h=Ga.getBestVersionForData(d,n)}o=wc.fromString(e,h||40)}else throw new Error("Invalid data");const i=Ga.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=F_(t,n,o),a=Ol.getSymbolSize(t),l=new I_(a);return k_(l,t),M_(l),B_(l,t),vc(l,n,0),t>=7&&D_(l,t),U_(l,s),isNaN(r)&&(r=ou.getBestMask(l,vc.bind(null,l,n))),ou.applyMask(r,l),vc(l,n,r),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:r,segments:o}}J1.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=mc.M,o,i;return typeof n<"u"&&(r=mc.from(n.errorCorrectionLevel,mc.M),o=Ga.from(n.version),i=ou.from(n.maskPattern),n.toSJISFunc&&Ol.setToSJISFunction(n.toSJISFunc)),j_(t,o,r,i)};var ug={},$f={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const i=e.getScale(r,o);return Math.floor((r+o.margin*2)*i)},e.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,i),h=Math.floor((s+i.margin*2)*l),d=i.margin*l,p=[i.color.light,i.color.dark];for(let g=0;g<h;g++)for(let C=0;C<h;C++){let _=(g*h+C)*4,$=i.color.light;if(g>=d&&C>=d&&g<h-d&&C<h-d){const k=Math.floor((g-d)/l),A=Math.floor((C-d)/l);$=p[a[k*s+A]?1:0]}r[_++]=$.r,r[_++]=$.g,r[_++]=$.b,r[_]=$.a}}})($f);(function(e){const t=$f;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let l=a,h=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(h=r()),l=t.getOptions(l);const d=t.getImageWidth(i.modules.size,l),p=h.getContext("2d"),g=p.createImageData(d,d);return t.qrToImageData(g.data,i,l),n(p,h,d),p.putImageData(g,0,0),h},e.renderToDataURL=function(i,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const h=e.render(i,s,l),d=l.type||"image/png",p=l.rendererOpts||{};return h.toDataURL(d,p.quality)}})(ug);var fg={};const H_=$f;function Pd(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function bc(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function z_(e,t,n){let r="",o=0,i=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),h=Math.floor(a/t);!l&&!i&&(i=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=i?bc("M",l+n,.5+h+n):bc("m",o,0),o=0,i=!1),l+1<t&&e[a+1]||(r+=bc("h",s),s=0)):o++}return r}fg.render=function(t,n,r){const o=H_.getOptions(n),i=t.modules.size,s=t.modules.data,a=i+o.margin*2,l=o.color.light.a?"<path "+Pd(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",h="<path "+Pd(o.color.dark,"stroke")+' d="'+z_(s,i,o.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+l+h+`</svg>
`;return typeof r=="function"&&r(null,g),g};const V_=i_,au=J1,dg=ug,G_=fg;function If(e,t,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!V_())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(l,h){try{const d=au.create(n,r);l(e(d,t,r))}catch(d){h(d)}})}try{const l=au.create(n,r);o(null,e(l,t,r))}catch(l){o(l)}}Hs.create=au.create;Hs.toCanvas=If.bind(null,dg.render);Hs.toDataURL=If.bind(null,dg.renderToDataURL);Hs.toString=If.bind(null,function(e,t,n){return G_.render(e,n)});const K_=.1,kd=2.5,Hn=7;function yc(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+K_}function q_(e,t){const n=Array.prototype.slice.call(Hs.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const Z_={generate(e,t,n){const r="#141414",o="transparent",s=[],a=q_(e,"Q"),l=t/a.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:$,y:k})=>{const A=(a.length-Hn)*l*$,E=(a.length-Hn)*l*k,z=.45;for(let N=0;N<h.length;N+=1){const V=l*(Hn-N*2);s.push(ve`
            <rect
              fill=${N===2?r:o}
              width=${N===0?V-5:V}
              rx= ${N===0?(V-5)*z:V*z}
              ry= ${N===0?(V-5)*z:V*z}
              stroke=${r}
              stroke-width=${N===0?5:0}
              height=${N===0?V-5:V}
              x= ${N===0?E+l*N+5/2:E+l*N}
              y= ${N===0?A+l*N+5/2:A+l*N}
            />
          `)}});const d=Math.floor((n+25)/l),p=a.length/2-d/2,g=a.length/2+d/2-1,C=[];a.forEach(($,k)=>{$.forEach((A,E)=>{if(a[k][E]&&!(k<Hn&&E<Hn||k>a.length-(Hn+1)&&E<Hn||k<Hn&&E>a.length-(Hn+1))&&!(k>p&&k<g&&E>p&&E<g)){const z=k*l+l/2,N=E*l+l/2;C.push([z,N])}})});const _={};return C.forEach(([$,k])=>{var A;_[$]?(A=_[$])==null||A.push(k):_[$]=[k]}),Object.entries(_).map(([$,k])=>{const A=k.filter(E=>k.every(z=>!yc(E,z,l)));return[Number($),A]}).forEach(([$,k])=>{k.forEach(A=>{s.push(ve`<circle cx=${$} cy=${A} fill=${r} r=${l/kd} />`)})}),Object.entries(_).filter(([$,k])=>k.length>1).map(([$,k])=>{const A=k.filter(E=>k.some(z=>yc(E,z,l)));return[Number($),A]}).map(([$,k])=>{k.sort((E,z)=>E<z?-1:1);const A=[];for(const E of k){const z=A.find(N=>N.some(V=>yc(E,V,l)));z?z.push(E):A.push([E])}return[$,A.map(E=>[E[0],E[E.length-1]])]}).forEach(([$,k])=>{k.forEach(([A,E])=>{s.push(ve`
              <line
                x1=${$}
                x2=${$}
                y1=${A}
                y2=${E}
                stroke=${r}
                stroke-width=${l/(kd/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Y_=$e`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Ro=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Nr=class extends Ie{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,ce`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return ve`
      <svg height=${t} width=${t}>
        ${Z_.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:ce`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Nr.styles=[Pe,Y_];Ro([Y()],Nr.prototype,"uri",void 0);Ro([Y({type:Number})],Nr.prototype,"size",void 0);Ro([Y()],Nr.prototype,"theme",void 0);Ro([Y()],Nr.prototype,"imageSrc",void 0);Ro([Y()],Nr.prototype,"alt",void 0);Nr=Ro([ge("wui-qr-code")],Nr);const J_=$e`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Q_=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let lu=class extends Ie{constructor(){super(...arguments),this.inputComponentRef=H1()}render(){return ce`
      <wui-input-text
        ${z1(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};lu.styles=[Pe,J_];lu=Q_([ge("wui-search-bar")],lu);const X_=$e`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Vs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pi=class extends Ie{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return ce`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};pi.styles=[Pe,X_];Vs([Y()],pi.prototype,"backgroundColor",void 0);Vs([Y()],pi.prototype,"iconColor",void 0);Vs([Y()],pi.prototype,"icon",void 0);Vs([Y()],pi.prototype,"message",void 0);pi=Vs([ge("wui-snackbar")],pi);const e8=$e`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Br=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pn=class extends Ie{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return ce`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],o=this.buttons[t],i=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&i&&!n&&t!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&l&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,o.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};Pn.styles=[Pe,wt,e8];Br([Y({type:Array})],Pn.prototype,"tabs",void 0);Br([Y()],Pn.prototype,"onTabChange",void 0);Br([Y({type:Array})],Pn.prototype,"buttons",void 0);Br([Y({type:Boolean})],Pn.prototype,"disabled",void 0);Br([vf()],Pn.prototype,"activeTab",void 0);Br([vf()],Pn.prototype,"localTabWidth",void 0);Br([vf()],Pn.prototype,"isDense",void 0);Pn=Br([ge("wui-tabs")],Pn);const t8=$e`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Rf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ss=class extends Ie{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return ce`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ss.styles=[Pe,wt,t8];Rf([Y()],Ss.prototype,"placement",void 0);Rf([Y()],Ss.prototype,"message",void 0);Ss=Rf([ge("wui-tooltip")],Ss);const n8=$e`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Nl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let fo=class extends Ie{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,ce`${this.templateVisual()}`}templateVisual(){return this.imageSrc?ce`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:ce`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};fo.styles=[Pe,n8];Nl([Y()],fo.prototype,"imageSrc",void 0);Nl([Y()],fo.prototype,"alt",void 0);Nl([Y({type:Boolean})],fo.prototype,"borderRadiusFull",void 0);fo=Nl([ge("wui-visual-thumbnail")],fo);const r8=$e`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var pn=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Vt=class extends Ie{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Je.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Je.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Je.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Je.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Je.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Je.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Je.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Je.getSpacingStyles(this.margin,3)};
    `,ce`<slot></slot>`}};Vt.styles=[Pe,r8];pn([Y()],Vt.prototype,"gridTemplateRows",void 0);pn([Y()],Vt.prototype,"gridTemplateColumns",void 0);pn([Y()],Vt.prototype,"justifyItems",void 0);pn([Y()],Vt.prototype,"alignItems",void 0);pn([Y()],Vt.prototype,"justifyContent",void 0);pn([Y()],Vt.prototype,"alignContent",void 0);pn([Y()],Vt.prototype,"columnGap",void 0);pn([Y()],Vt.prototype,"rowGap",void 0);pn([Y()],Vt.prototype,"gap",void 0);pn([Y()],Vt.prototype,"padding",void 0);pn([Y()],Vt.prototype,"margin",void 0);Vt=pn([ge("wui-grid")],Vt);const i8=$e`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var hg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ka=class extends Ie{constructor(){super(...arguments),this.text=""}render(){return ce`${this.template()}`}template(){return this.text?ce`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Ka.styles=[Pe,i8];hg([Y()],Ka.prototype,"text",void 0);Ka=hg([ge("wui-separator")],Ka);var pg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(yl,function(){return function(n,r,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(l){a[l]=s[l]}),a}}})})(pg);var o8=pg.exports;const s8=_l(o8);var gg={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(yl,function(){return function(n,r,o){n=n||{};var i=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(h,d,p,g){return i.fromToBase(h,d,p,g)}o.en.relativeTime=s,i.fromToBase=function(h,d,p,g,C){for(var _,$,k,A=p.$locale().relativeTime||s,E=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],z=E.length,N=0;N<z;N+=1){var V=E[N];V.d&&(_=g?o(h).diff(p,V.d,!0):p.diff(h,V.d,!0));var q=(n.rounding||Math.round)(Math.abs(_));if(k=_>0,q<=V.r||!V.r){q<=1&&N>0&&(V=E[N-1]);var Z=A[V.l];C&&(q=C(""+q)),$=typeof Z=="string"?Z.replace("%d",q):Z(q,d,V.l,k);break}}if(d)return $;var y=k?A.future:A.past;return typeof y=="function"?y($):y.replace("%s",$)},i.to=function(h,d){return a(h,d,this,!0)},i.from=function(h,d){return a(h,d,this)};var l=function(h){return h.$u?o.utc():o()};i.toNow=function(h){return this.to(l(this),h)},i.fromNow=function(h){return this.from(l(this),h)}}})})(gg);var a8=gg.exports;const l8=_l(a8);ws.extend(l8);ws.extend(s8);ws.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const mg={getYear(e=new Date().toISOString()){return ws(e).year()},getRelativeDateFromNow(e){return ws(e).fromNow(!0)}},c8=3,u8=["receive","deposit","borrow","claim"],f8=["withdraw","repay","burn"],ji={getTransactionGroupTitle(e){const t=mg.getYear();return e===t?"This Year":e},getTransactionImages(e){const[t,n]=e,r=!!t&&(e==null?void 0:e.every(s=>!!s.nft_info)),o=(e==null?void 0:e.length)>1;return(e==null?void 0:e.length)===2&&!r?[this.getTransactionImage(t),this.getTransactionImage(n)]:o?e.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:ji.getTransactionTransferTokenType(e),url:ji.getTransactionImageURL(e)}},getTransactionImageURL(e){var o,i,s,a,l;let t=null;const n=!!(e!=null&&e.nft_info),r=!!(e!=null&&e.fungible_info);return e&&n?t=(s=(i=(o=e==null?void 0:e.nft_info)==null?void 0:o.content)==null?void 0:i.preview)==null?void 0:s.url:e&&r&&(t=(l=(a=e==null?void 0:e.fungible_info)==null?void 0:a.icon)==null?void 0:l.url),t},getTransactionTransferTokenType(e){return e!=null&&e.fungible_info?"FUNGIBLE":e!=null&&e.nft_info?"NFT":null},getTransactionDescriptions(e){var p,g,C;const t=(p=e.metadata)==null?void 0:p.operationType,n=e.transfers,r=((g=e.transfers)==null?void 0:g.length)>0,o=((C=e.transfers)==null?void 0:C.length)>1,i=r&&(n==null?void 0:n.every(_=>!!_.fungible_info)),[s,a]=n;let l=this.getTransferDescription(s),h=this.getTransferDescription(a);if(!r)return(t==="send"||t==="receive")&&i?(l=Je.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),h=Je.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,h]):[e.metadata.status];if(o)return n.map(_=>this.getTransferDescription(_));let d="";return u8.includes(t)?d="+":f8.includes(t)&&(d="-"),l=d.concat(l),[l]},getTransferDescription(e){var n;let t="";return e&&(e!=null&&e.nft_info?t=((n=e==null?void 0:e.nft_info)==null?void 0:n.name)||"-":e!=null&&e.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){var r;return e?[this.getQuantityFixedValue(e==null?void 0:e.quantity.numeric),(r=e==null?void 0:e.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},getQuantityFixedValue(e){return e?parseFloat(e).toFixed(c8):null}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a=globalThis,Of=_a.ShadowRoot&&(_a.ShadyCSS===void 0||_a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nf=Symbol(),Md=new WeakMap;let wg=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Nf)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Of&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Md.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Md.set(n,t))}return t}toString(){return this.cssText}};const d8=e=>new wg(typeof e=="string"?e:e+"",void 0,Nf),Dt=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new wg(n,e,Nf)},h8=(e,t)=>{if(Of)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=_a.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Bd=Of?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return d8(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:p8,defineProperty:g8,getOwnPropertyDescriptor:m8,getOwnPropertyNames:w8,getOwnPropertySymbols:v8,getPrototypeOf:b8}=Object,Ar=globalThis,Dd=Ar.trustedTypes,y8=Dd?Dd.emptyScript:"",_c=Ar.reactiveElementPolyfillSupport,rs=(e,t)=>e,qa={toAttribute(e,t){switch(t){case Boolean:e=e?y8:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Lf=(e,t)=>!p8(e,t),Ud={attribute:!0,type:String,converter:qa,reflect:!1,hasChanged:Lf};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ar.litPropertyMetadata??(Ar.litPropertyMetadata=new WeakMap);class Ui extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ud){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&g8(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=m8(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);i.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ud}static _$Ei(){if(this.hasOwnProperty(rs("elementProperties")))return;const t=b8(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(rs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(rs("properties"))){const n=this.properties,r=[...w8(n),...v8(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Bd(o))}else t!==void 0&&n.push(Bd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h8(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:qa).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:qa;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,o=!1,i){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Lf)(o?i:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}}Ui.elementStyles=[],Ui.shadowRootOptions={mode:"open"},Ui[rs("elementProperties")]=new Map,Ui[rs("finalized")]=new Map,_c==null||_c({ReactiveElement:Ui}),(Ar.reactiveElementVersions??(Ar.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=globalThis,Za=is.trustedTypes,Fd=Za?Za.createPolicy("lit-html",{createHTML:e=>e}):void 0,vg="$lit$",wr=`lit$${(Math.random()+"").slice(9)}$`,bg="?"+wr,_8=`<${bg}>`,gi=document,$s=()=>gi.createComment(""),Is=e=>e===null||typeof e!="object"&&typeof e!="function",yg=Array.isArray,x8=e=>yg(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",xc=`[ 	
\f\r]`,Fo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wd=/-->/g,jd=/>/g,Kr=RegExp(`>|${xc}(?:([^\\s"'>=/]+)(${xc}*=${xc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hd=/'/g,zd=/"/g,_g=/^(?:script|style|textarea|title)$/i,E8=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),se=E8(1),ho=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),Vd=new WeakMap,ni=gi.createTreeWalker(gi,129);function xg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fd!==void 0?Fd.createHTML(t):t}const C8=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",s=Fo;for(let a=0;a<n;a++){const l=e[a];let h,d,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===Fo?d[1]==="!--"?s=Wd:d[1]!==void 0?s=jd:d[2]!==void 0?(_g.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Kr):d[3]!==void 0&&(s=Kr):s===Kr?d[0]===">"?(s=o??Fo,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?Kr:d[3]==='"'?zd:Hd):s===zd||s===Hd?s=Kr:s===Wd||s===jd?s=Fo:(s=Kr,o=void 0);const C=s===Kr&&e[a+1].startsWith("/>")?" ":"";i+=s===Fo?l+_8:p>=0?(r.push(h),l.slice(0,p)+vg+l.slice(p)+wr+C):l+wr+(p===-2?a:C)}return[xg(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Rs{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,l=this.parts,[h,d]=C8(t,n);if(this.el=Rs.createElement(h,r),ni.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ni.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(vg)){const g=d[s++],C=o.getAttribute(p).split(wr),_=/([.?@])?(.*)/.exec(g);l.push({type:1,index:i,name:_[2],strings:C,ctor:_[1]==="."?T8:_[1]==="?"?S8:_[1]==="@"?$8:Ll}),o.removeAttribute(p)}else p.startsWith(wr)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(_g.test(o.tagName)){const p=o.textContent.split(wr),g=p.length-1;if(g>0){o.textContent=Za?Za.emptyScript:"";for(let C=0;C<g;C++)o.append(p[C],$s()),ni.nextNode(),l.push({type:2,index:++i});o.append(p[g],$s())}}}else if(o.nodeType===8)if(o.data===bg)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(wr,p+1))!==-1;)l.push({type:7,index:i}),p+=wr.length-1}i++}}static createElement(t,n){const r=gi.createElement("template");return r.innerHTML=t,r}}function po(e,t,n=e,r){var s,a;if(t===ho)return t;let o=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const i=Is(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=po(e,o._$AS(e,t.values),o,r)),t}class A8{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??gi).importNode(n,!0);ni.currentNode=o;let i=ni.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Gs(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new I8(i,this,t)),this._$AV.push(h),l=r[++a]}s!==(l==null?void 0:l.index)&&(i=ni.nextNode(),s++)}return ni.currentNode=gi,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Gs{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=po(this,t,n),Is(t)?t===ft||t==null||t===""?(this._$AH!==ft&&this._$AR(),this._$AH=ft):t!==this._$AH&&t!==ho&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):x8(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ft&&Is(this._$AH)?this._$AA.nextSibling.data=t:this.$(gi.createTextNode(t)),this._$AH=t}g(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Rs.createElement(xg(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const s=new A8(o,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=Vd.get(t.strings);return n===void 0&&Vd.set(t.strings,n=new Rs(t)),n}T(t){yg(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Gs(this.k($s()),this.k($s()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Ll{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ft}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=po(this,t,n,0),s=!Is(t)||t!==this._$AH&&t!==ho,s&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=po(this,a[r+l],n,l),h===ho&&(h=this._$AH[l]),s||(s=!Is(h)||h!==this._$AH[l]),h===ft?t=ft:t!==ft&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}s&&!o&&this.O(t)}O(t){t===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class T8 extends Ll{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===ft?void 0:t}}class S8 extends Ll{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==ft)}}class $8 extends Ll{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=po(this,t,n,0)??ft)===ho)return;const r=this._$AH,o=t===ft&&r!==ft||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==ft&&(r===ft||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class I8{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){po(this,t)}}const Ec=is.litHtmlPolyfillSupport;Ec==null||Ec(Rs,Gs),(is.litHtmlVersions??(is.litHtmlVersions=[])).push("3.1.0");const R8=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Gs(t.insertBefore($s(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class He extends Ui{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=R8(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ho}}var qh;He._$litElement$=!0,He.finalized=!0,(qh=globalThis.litElementHydrateSupport)==null||qh.call(globalThis,{LitElement:He});const Cc=globalThis.litElementPolyfillSupport;Cc==null||Cc({LitElement:He});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O8={attribute:!0,type:String,converter:qa,reflect:!1,hasChanged:Lf},N8=(e=O8,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function vt(e){return(t,n)=>typeof n=="object"?N8(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oe(e){return vt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=e=>e??ft;var nr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let kn=class extends He{constructor(){super(),this.unsubscribe=[],this.networkImages=Er.state.networkImages,this.disabled=!1,this.balance="show",this.address=ot.state.address,this.balanceVal=ot.state.balance,this.balanceSymbol=ot.state.balanceSymbol,this.profileName=ot.state.profileName,this.profileImage=ot.state.profileImage,this.network=Ct.state.caipNetwork,this.unsubscribe.push(ot.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ct.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return se`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${ze(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ze(t)}
        avatarSrc=${ze(this.profileImage)}
        balance=${n?Se.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){It.open()}};nr([vt({type:Boolean})],kn.prototype,"disabled",void 0);nr([vt()],kn.prototype,"balance",void 0);nr([Oe()],kn.prototype,"address",void 0);nr([Oe()],kn.prototype,"balanceVal",void 0);nr([Oe()],kn.prototype,"balanceSymbol",void 0);nr([Oe()],kn.prototype,"profileName",void 0);nr([Oe()],kn.prototype,"profileImage",void 0);nr([Oe()],kn.prototype,"network",void 0);kn=nr([ge("w3m-account-button")],kn);var Ei=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Lr=class extends He{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=ot.state.isConnected,this.unsubscribe.push(ot.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?se`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ze(this.balance)}
          >
          </w3m-account-button>
        `:se`
          <w3m-connect-button
            size=${ze(this.size)}
            label=${ze(this.label)}
            loadingLabel=${ze(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Ei([vt({type:Boolean})],Lr.prototype,"disabled",void 0);Ei([vt()],Lr.prototype,"balance",void 0);Ei([vt()],Lr.prototype,"size",void 0);Ei([vt()],Lr.prototype,"label",void 0);Ei([vt()],Lr.prototype,"loadingLabel",void 0);Ei([Oe()],Lr.prototype,"isAccount",void 0);Lr=Ei([ge("w3m-button")],Lr);var Ks=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let go=class extends He{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=It.state.open,this.unsubscribe.push(It.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-connect-button
        size=${ze(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?It.close():It.open()}};Ks([vt()],go.prototype,"size",void 0);Ks([vt()],go.prototype,"label",void 0);Ks([vt()],go.prototype,"loadingLabel",void 0);Ks([Oe()],go.prototype,"open",void 0);go=Ks([ge("w3m-connect-button")],go);const L8=Dt`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Eg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Gd="scroll-lock";let Ya=class extends He{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=It.state.open,this.initializeTheming(),We.prefetch(),this.unsubscribe.push(It.subscribeKey("open",t=>t?this.onOpen():this.onClose())),Qe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?se`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&It.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=df.state,r=Je.getColorTheme(n);zy(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,cn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Gd,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Gd}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")It.close();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};Ya.styles=L8;Eg([Oe()],Ya.prototype,"open",void 0);Ya=Eg([ge("w3m-modal")],Ya);var Pl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Os=class extends He{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ct.state.caipNetwork,this.connected=ot.state.isConnected,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",t=>this.network=t),ot.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return se`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${ze(ct.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){It.open({view:"Networks"})}};Pl([vt({type:Boolean})],Os.prototype,"disabled",void 0);Pl([Oe()],Os.prototype,"network",void 0);Pl([Oe()],Os.prototype,"connected",void 0);Os=Pl([ge("w3m-network-button")],Os);const P8=Dt`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Cg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ja=class extends He{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=De.state.view,this.unsubscribe.push(De.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return se`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return se`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return se`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return se`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return se`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return se`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return se`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return se`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return se`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return se`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return se`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return se`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return se`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return se`<w3m-transactions-view></w3m-transactions-view>`;default:return se`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=De.state;let r=-10,o=10;n.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Ja.styles=P8;Cg([Oe()],Ja.prototype,"view",void 0);Ja=Cg([ge("w3m-router")],Ja);const k8=Dt`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Dr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Mn=class extends He{constructor(){super(),this.usubscribe=[],this.networkImages=Er.state.networkImages,this.address=ot.state.address,this.profileImage=ot.state.profileImage,this.profileName=ot.state.profileName,this.balance=ot.state.balance,this.balanceSymbol=ot.state.balanceSymbol,this.network=Ct.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(ot.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):It.close()}),Ct.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return se`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ze(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Je.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Je.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Se.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ze(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=ot.state;return t?se`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=Ct.state,n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:o})=>{var i;return o===((i=this.network)==null?void 0:i.id)});return n||!r}onCopyAddress(){try{this.address&&(Se.copyToClopboard(this.address),cn.showSuccess("Address copied"))}catch{cn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&De.push("Networks")}onTransactions(){Qe.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),De.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await qe.disconnect(),Qe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),It.close()}catch{Qe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),cn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=ot.state;t&&Se.openHref(t,"_blank")}};Mn.styles=k8;Dr([Oe()],Mn.prototype,"address",void 0);Dr([Oe()],Mn.prototype,"profileImage",void 0);Dr([Oe()],Mn.prototype,"profileName",void 0);Dr([Oe()],Mn.prototype,"balance",void 0);Dr([Oe()],Mn.prototype,"balanceSymbol",void 0);Dr([Oe()],Mn.prototype,"network",void 0);Dr([Oe()],Mn.prototype,"disconecting",void 0);Mn=Dr([ge("w3m-account-view")],Mn);var Ag=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let cu=class extends He{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Se.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return se`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?se`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:se`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return Se.isMobile()?se`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){De.push("ConnectingWalletConnect")}};Ag([Oe()],cu.prototype,"search",void 0);cu=Ag([ge("w3m-all-wallets-view")],cu);const M8=Dt`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Tg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qa=class extends He{constructor(){super(),this.unsubscribe=[],this.connectors=qn.state.connectors,this.unsubscribe.push(qn.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Se.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?se`
      <wui-list-wallet
        imageSrc=${ze(ct.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=ut.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(r=>se`
        <wui-list-wallet
          imageSrc=${ze(ct.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=We.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>se`
        <wui-list-wallet
          imageSrc=${ze(ct.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return ln.getRecentWallets().map(n=>se`
        <wui-list-wallet
          imageSrc=${ze(ct.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:se`
        <wui-list-wallet
          imageSrc=${ze(ct.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!qe.checkInstalled()?null:se`
        <wui-list-wallet
          imageSrc=${ze(ct.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${ze(t?void 0:"installed")}
          tagVariant=${ze(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:se`
        <wui-list-wallet
          imageSrc=${ze(ct.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(We.state.count/10)*10;return se`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=We.state,{customWallets:n,featuredWalletIds:r}=ut.state,{connectors:o}=qn.state,i=ln.getRecentWallets(),s=o.filter(d=>d.type==="ANNOUNCED");if(r||n||!t.length)return null;const a=s.length+i.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,l).map(d=>se`
        <wui-list-wallet
          imageSrc=${ze(ct.getWalletImage(d))}
          name=${(d==null?void 0:d.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(d)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?Se.isMobile()?De.push("AllWallets"):De.push("ConnectingWalletConnect"):De.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:n}=qn.state,o=ln.getRecentWallets().map(a=>a.id),i=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return t.filter(a=>!o.includes(a.id)&&!i.includes(a.rdns??void 0))}onAllWallets(){Qe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),De.push("AllWallets")}onConnectWallet(t){De.push("ConnectingWalletConnect",{wallet:t})}};Qa.styles=M8;Tg([Oe()],Qa.prototype,"connectors",void 0);Qa=Tg([ge("w3m-connect-view")],Qa);const B8=Dt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ci=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class Gt extends He{constructor(){var t,n,r,o;super(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,this.connector=(n=De.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ct.getWalletImage(this.wallet)??ct.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=qe.state.wcUri,this.error=qe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(qe.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),qe.subscribeKey("wcError",i=>this.error=i),qe.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),se`
      <wui-flex
        data-error=${ze(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ze(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?se`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(qe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=df.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return se`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Se.copyToClopboard(this.uri),cn.showSuccess("Link copied"))}catch{cn.showError("Failed to copy")}}}Gt.styles=B8;Ci([Oe()],Gt.prototype,"uri",void 0);Ci([Oe()],Gt.prototype,"error",void 0);Ci([Oe()],Gt.prototype,"ready",void 0);Ci([Oe()],Gt.prototype,"showRetry",void 0);Ci([Oe()],Gt.prototype,"buffering",void 0);Ci([vt({type:Boolean})],Gt.prototype,"isMobile",void 0);Ci([vt()],Gt.prototype,"onRetry",void 0);var D8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const U8={INJECTED:"browser",ANNOUNCED:"browser"};let Kd=class extends Gt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:U8[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&ln.setConnectedWalletImageUrl(this.connector.imageUrl),await qe.connectExternal(this.connector),It.close(),Qe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){Qe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};Kd=D8([ge("w3m-connecting-external-view")],Kd);var F8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let qd=class extends He{constructor(){var t,n;super(...arguments),this.dappUrl=(t=ut.state.metadata)==null?void 0:t.url,this.dappName=(n=ut.state.metadata)==null?void 0:n.name}render(){return se`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?se`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&Se.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){De.goBack()}};qd=F8([ge("w3m-connecting-siwe-view")],qd);var Pf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xa=class extends He{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Vo.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),se`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):se`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=qe.state;if(t||Se.isPairingExpired(n)){if(qe.connectWalletConnect(),this.wallet){const r=ct.getWalletImage(this.wallet);r&&ln.setConnectedWalletImageUrl(r)}else{const o=qn.state.connectors.find(s=>s.type==="WALLET_CONNECT"),i=ct.getConnectorImage(o);i&&ln.setConnectedWalletImageUrl(i)}await qe.state.wcPromise,this.finalizeConnection(),It.close()}}catch(n){Qe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),qe.setWcError(!0),Se.isAllowedRetry(this.lastRetry)&&(cn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:n}=qe.state;t&&ln.setWalletConnectDeepLink(t),n&&ln.setWeb3ModalRecent(n),Qe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:o,rdns:i}=this.wallet,s=o==null?void 0:o.map(({injected_id:_})=>_).filter(Boolean),a=i?[i]:s??[],l=a.length,h=t,d=r,p=qe.checkInstalled(a),g=l&&p,C=n&&!Se.isMobile();g&&this.platforms.push("browser"),h&&this.platforms.push(Se.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),C&&this.platforms.push("desktop"),!g&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return se`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return se`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return se`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return se`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return se`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return se`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?se`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Pf([Oe()],Xa.prototype,"platform",void 0);Pf([Oe()],Xa.prototype,"platforms",void 0);Xa=Pf([ge("w3m-connecting-wc-view")],Xa);var W8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zd=class extends He{constructor(){var t;super(...arguments),this.wallet=(t=De.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return se`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?se`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?se`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?se`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?se`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&Se.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Se.openHref(this.wallet.homepage,"_blank")}};Zd=W8([ge("w3m-downloads-view")],Zd);var j8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const H8="https://walletconnect.com/explorer";let Yd=class extends He{render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Se.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=We.state,{customWallets:r}=ut.state;return[...n,...r??[],...t].slice(0,4).map(i=>se`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ze(ct.getWalletImage(i))}
          @click=${()=>{Se.openHref(i.homepage??H8,"_blank")}}
        ></wui-list-wallet>
      `)}};Yd=j8([ge("w3m-get-wallet-view")],Yd);const z8=Dt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var kl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let mo=class extends He{constructor(){var t;super(),this.network=(t=De.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ct.state.caipNetwork,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&De.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return se`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ze(ct.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:se`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ct.switchActiveNetwork(this.network),De.goBack())}catch{this.error=!0}}};mo.styles=z8;kl([Oe()],mo.prototype,"showRetry",void 0);kl([Oe()],mo.prototype,"error",void 0);kl([Oe()],mo.prototype,"currentNetwork",void 0);mo=kl([ge("w3m-network-switch-view")],mo);var Sg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let uu=class extends He{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ct.state.caipNetwork,this.unsubscribe.push(Ct.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Qe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),De.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=Ct.state,o=t,i=n;return o!=null&&o.length&&(i==null||i.sort((s,a)=>o.indexOf(a.id)-o.indexOf(s.id))),i==null?void 0:i.map(s=>{var a;return se`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${ze(ct.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(o!=null&&o.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=ot.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=Ct.state;n&&(i==null?void 0:i.id)!==t.id?r!=null&&r.includes(t.id)?await Ct.switchActiveNetwork(t):o&&De.push("SwitchNetwork",{network:t}):n||(Ct.setCaipNetwork(t),De.push("Connect"))}};Sg([Oe()],uu.prototype,"caipNetwork",void 0);uu=Sg([ge("w3m-networks-view")],uu);const V8=Dt`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var Ai=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const ua="last-transaction",G8=7;let Xn=class extends He{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=ot.state.address,this.transactions=mn.state.transactions,this.transactionsByYear=mn.state.transactionsByYear,this.loading=mn.state.loading,this.empty=mn.state.empty,this.next=mn.state.next,this.unsubscribe.push(ot.subscribe(t=>{t.isConnected&&this.address!==t.address&&(this.address=t.address,mn.resetTransactions(),mn.fetchTransactions(t.address))}),mn.subscribe(t=>{this.transactions=t.transactions,this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.transactions.length===0&&mn.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const t=Object.keys(this.transactionsByYear).sort().reverse();return t.map((n,r)=>{const o=r===t.length-1,i=parseInt(n,10),s=ji.getTransactionGroupTitle(i),a=this.transactionsByYear[i];return a?se`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,o)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(t,n){const{date:r,descriptions:o,direction:i,isAllNFT:s,images:a,status:l,transfers:h,type:d}=this.getTransactionListItemProps(t),p=(h==null?void 0:h.length)>1;return(h==null?void 0:h.length)===2&&!s?se`
        <wui-transaction-list-item
          date=${r}
          direction=${i}
          id=${n&&this.next?ua:""}
          status=${l}
          type=${d}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?h.map((C,_)=>{const $=ji.getTransferDescription(C),k=n&&_===h.length-1;return se` <wui-transaction-list-item
          date=${r}
          direction=${C.direction}
          id=${k&&this.next?ua:""}
          status=${l}
          type=${d}
          onlyDirectionIcon=${!0}
          .images=${[a==null?void 0:a[_]]}
          .descriptions=${[$]}
        ></wui-transaction-list-item>`}):se`
      <wui-transaction-list-item
        date=${r}
        direction=${i}
        id=${n&&this.next?ua:""}
        status=${l}
        type=${d}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,n){return t.map((r,o)=>{const i=n&&o===t.length-1;return se`${this.templateRenderTransaction(r,i)}`})}templateEmpty(){return se`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(G8).fill(se` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}createPaginationObserver(){const{projectId:t}=ut.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(mn.fetchTransactions(this.address),Qe.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:t,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,r,o;(n=this.paginationObserver)==null||n.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ua}`);t&&((o=this.paginationObserver)==null||o.observe(t))}getTransactionListItemProps(t){var l,h,d,p,g;const n=mg.getRelativeDateFromNow((l=t==null?void 0:t.metadata)==null?void 0:l.minedAt),r=ji.getTransactionDescriptions(t),o=t==null?void 0:t.transfers,i=(h=t==null?void 0:t.transfers)==null?void 0:h[0],s=!!i&&((d=t==null?void 0:t.transfers)==null?void 0:d.every(C=>!!C.nft_info)),a=ji.getTransactionImages(o);return{date:n,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:s,images:a,status:(p=t.metadata)==null?void 0:p.status,transfers:o,type:(g=t.metadata)==null?void 0:g.operationType}}};Xn.styles=V8;Ai([Oe()],Xn.prototype,"address",void 0);Ai([Oe()],Xn.prototype,"transactions",void 0);Ai([Oe()],Xn.prototype,"transactionsByYear",void 0);Ai([Oe()],Xn.prototype,"loading",void 0);Ai([Oe()],Xn.prototype,"empty",void 0);Ai([Oe()],Xn.prototype,"next",void 0);Xn=Ai([ge("w3m-transactions-view")],Xn);var K8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const q8=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Jd=class extends He{render(){return se`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${q8}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Se.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Jd=K8([ge("w3m-what-is-a-network-view")],Jd);var Z8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Y8=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Qd=class extends He{render(){return se`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Y8}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Qe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),De.push("GetWallet")}};Qd=Z8([ge("w3m-what-is-a-wallet-view")],Qd);const J8=Dt`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var qs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Xd="local-paginator";let mi=class extends He{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!We.state.wallets.length,this.wallets=We.state.wallets,this.recommended=We.state.recommended,this.featured=We.state.featured,this.unsubscribe.push(We.subscribeKey("wallets",t=>this.wallets=t),We.subscribeKey("recommended",t=>this.recommended=t),We.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return se`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await We.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>se`
        <wui-card-select-loader type="wallet" id=${ze(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>se`
        <wui-card-select
          imageSrc=${ze(ct.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:o}=We.state,i=window.innerWidth<352?3:4,s=t.length+n.length;let l=Math.ceil(s/i)*i-s+i;return l-=t.length?r.length%i:0,o===0||[...r,...t,...n].length<o?this.shimmerTemplate(l,Xd):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Xd}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=We.state;s.length<i&&We.fetchWallets({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=qn.state,r=n.find(({explorerId:o})=>o===t.id);r?De.push("ConnectingExternal",{connector:r}):De.push("ConnectingWalletConnect",{wallet:t})}};mi.styles=J8;qs([Oe()],mi.prototype,"initial",void 0);qs([Oe()],mi.prototype,"wallets",void 0);qs([Oe()],mi.prototype,"recommended",void 0);qs([Oe()],mi.prototype,"featured",void 0);mi=qs([ge("w3m-all-wallets-list")],mi);const Q8=Dt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var kf=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ns=class extends He{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?se`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await We.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=We.state;return t.length?se`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>se`
            <wui-card-select
              imageSrc=${ze(ct.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:se`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=qn.state,r=n.find(({explorerId:o})=>o===t.id);r?De.push("ConnectingExternal",{connector:r}):De.push("ConnectingWalletConnect",{wallet:t})}};Ns.styles=Q8;kf([Oe()],Ns.prototype,"loading",void 0);kf([vt()],Ns.prototype,"query",void 0);Ns=kf([ge("w3m-all-wallets-search")],Ns);var Ml=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ls=class extends He{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(qe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return se`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Ml([vt({type:Array})],Ls.prototype,"platforms",void 0);Ml([vt()],Ls.prototype,"onSelectPlatfrom",void 0);Ml([Oe()],Ls.prototype,"buffering",void 0);Ls=Ml([ge("w3m-connecting-header")],Ls);var X8=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let eh=class extends Gt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=qn.state,n=t.find(o=>{var i,s;return o.type==="ANNOUNCED"&&((i=o.info)==null?void 0:i.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=t.find(o=>o.type==="INJECTED");n?await qe.connectExternal(n):r&&await qe.connectExternal(r),It.close(),Qe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){Qe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};eh=X8([ge("w3m-connecting-wc-browser")],eh);var ex=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let th=class extends Gt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=Se.formatNativeUrl(n,this.uri);qe.setWcLinking({name:r,href:i}),qe.setRecentWallet(this.wallet),Se.openHref(o,"_self")}catch{this.error=!0}}};th=ex([ge("w3m-connecting-wc-desktop")],th);var tx=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let nh=class extends Gt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:o,href:i}=Se.formatNativeUrl(n,this.uri);qe.setWcLinking({name:r,href:i}),qe.setRecentWallet(this.wallet),Se.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const t=Se.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(qe.setBuffering(!0),setTimeout(()=>{qe.setBuffering(!1)},5e3))}};nh=tx([ge("w3m-connecting-wc-mobile")],nh);const nx=Dt`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var rx=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let fu=class extends Gt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),se`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return qe.setWcLinking(void 0),qe.setRecentWallet(this.wallet),se`<wui-qr-code
      size=${t}
      theme=${df.state.themeMode}
      uri=${this.uri}
      imageSrc=${ze(ct.getWalletImage(this.wallet))}
      alt=${ze(n)}
    ></wui-qr-code>`}};fu.styles=nx;fu=rx([ge("w3m-connecting-wc-qrcode")],fu);const ix=Dt`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var ox=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let du=class extends He{constructor(){var t;super(...arguments),this.dappImageUrl=(t=ut.state.metadata)==null?void 0:t.icons,this.walletImageUrl=ln.getConnectedWalletImageUrl()}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return se`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,n){t.animate([{transform:"translateX(0px)"},{transform:n}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};du.styles=ix;du=ox([ge("w3m-connecting-siwe")],du);var sx=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let rh=class extends He{constructor(){var t;if(super(),this.wallet=(t=De.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return se`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ze(ct.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};rh=sx([ge("w3m-connecting-wc-unsupported")],rh);var ax=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ih=class extends Gt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Qe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=Se.formatUniversalUrl(n,this.uri);qe.setWcLinking({name:r,href:i}),qe.setRecentWallet(this.wallet),Se.openHref(o,"_blank")}catch{this.error=!0}}};ih=ax([ge("w3m-connecting-wc-web")],ih);const lx=Dt`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Bl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};function oh(){var o,i,s,a,l,h;const e=(i=(o=De.state.data)==null?void 0:o.connector)==null?void 0:i.name,t=(a=(s=De.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(h=(l=De.state.data)==null?void 0:l.network)==null?void 0:h.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads",Transactions:"Activity"}}let wo=class extends He{constructor(){super(),this.unsubscribe=[],this.heading=oh()[De.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(De.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),qe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return se`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${It.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Qe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),De.push("WhatIsAWallet")}titleTemplate(){return se`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=De.state,n=t==="Connect";return this.showBack?se`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${De.goBack}
      ></wui-icon-link>`:se`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?se`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const o=oh()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=De.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};wo.styles=[lx];Bl([Oe()],wo.prototype,"heading",void 0);Bl([Oe()],wo.prototype,"buffering",void 0);Bl([Oe()],wo.prototype,"showBack",void 0);wo=Bl([ge("w3m-header")],wo);var $g=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hu=class extends He{constructor(){super(...arguments),this.data=[]}render(){return se`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>se`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>se`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};$g([vt({type:Array})],hu.prototype,"data",void 0);hu=$g([ge("w3m-help-widget")],hu);const cx=Dt`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var ux=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pu=class extends He{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=ut.state;return!t&&!n?null:se`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=ut.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=ut.state;return t?se`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=ut.state;return t?se`<a href=${t}>Privacy Policy</a>`:null}};pu.styles=[cx];pu=ux([ge("w3m-legal-footer")],pu);const fx=Dt`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Ig=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let el=class extends He{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:o,homepage:i}=this.wallet,s=Se.isMobile(),a=Se.isIos(),l=Se.isAndroid(),h=[n,r,i,o].filter(Boolean).length>1,d=Je.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return h&&!s?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>De.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&i?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?se`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Se.openHref(this.wallet.homepage,"_blank")}};el.styles=[fx];Ig([vt({type:Object})],el.prototype,"wallet",void 0);el=Ig([ge("w3m-mobile-download-links")],el);const dx=Dt`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Rg=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const hx={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let tl=class extends He{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=cn.state.open,this.unsubscribe.push(cn.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=cn.state,r=hx[n];return se`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>cn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};tl.styles=dx;Rg([Oe()],tl.prototype,"open",void 0);tl=Rg([ge("w3m-snackbar")],tl);globalThis&&globalThis.__classPrivateFieldSet;globalThis&&globalThis.__classPrivateFieldGet;var Og={},Dl={};Dl.byteLength=mx;Dl.toByteArray=vx;Dl.fromByteArray=_x;var Nn=[],on=[],px=typeof Uint8Array<"u"?Uint8Array:Array,Ac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Pi=0,gx=Ac.length;Pi<gx;++Pi)Nn[Pi]=Ac[Pi],on[Ac.charCodeAt(Pi)]=Pi;on["-".charCodeAt(0)]=62;on["_".charCodeAt(0)]=63;function Ng(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function mx(e){var t=Ng(e),n=t[0],r=t[1];return(n+r)*3/4-r}function wx(e,t,n){return(t+n)*3/4-n}function vx(e){var t,n=Ng(e),r=n[0],o=n[1],i=new px(wx(e,r,o)),s=0,a=o>0?r-4:r,l;for(l=0;l<a;l+=4)t=on[e.charCodeAt(l)]<<18|on[e.charCodeAt(l+1)]<<12|on[e.charCodeAt(l+2)]<<6|on[e.charCodeAt(l+3)],i[s++]=t>>16&255,i[s++]=t>>8&255,i[s++]=t&255;return o===2&&(t=on[e.charCodeAt(l)]<<2|on[e.charCodeAt(l+1)]>>4,i[s++]=t&255),o===1&&(t=on[e.charCodeAt(l)]<<10|on[e.charCodeAt(l+1)]<<4|on[e.charCodeAt(l+2)]>>2,i[s++]=t>>8&255,i[s++]=t&255),i}function bx(e){return Nn[e>>18&63]+Nn[e>>12&63]+Nn[e>>6&63]+Nn[e&63]}function yx(e,t,n){for(var r,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255),o.push(bx(r));return o.join("")}function _x(e){for(var t,n=e.length,r=n%3,o=[],i=16383,s=0,a=n-r;s<a;s+=i)o.push(yx(e,s,s+i>a?a:s+i));return r===1?(t=e[n-1],o.push(Nn[t>>2]+Nn[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],o.push(Nn[t>>10]+Nn[t>>4&63]+Nn[t<<2&63]+"=")),o.join("")}var Mf={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Mf.read=function(e,t,n,r,o){var i,s,a=o*8-r-1,l=(1<<a)-1,h=l>>1,d=-7,p=n?o-1:0,g=n?-1:1,C=e[t+p];for(p+=g,i=C&(1<<-d)-1,C>>=-d,d+=a;d>0;i=i*256+e[t+p],p+=g,d-=8);for(s=i&(1<<-d)-1,i>>=-d,d+=r;d>0;s=s*256+e[t+p],p+=g,d-=8);if(i===0)i=1-h;else{if(i===l)return s?NaN:(C?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-h}return(C?-1:1)*s*Math.pow(2,i-r)};Mf.write=function(e,t,n,r,o,i){var s,a,l,h=i*8-o-1,d=(1<<h)-1,p=d>>1,g=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=r?0:i-1,_=r?1:-1,$=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+p>=1?t+=g/l:t+=g*Math.pow(2,1-p),t*l>=2&&(s++,l/=2),s+p>=d?(a=0,s=d):s+p>=1?(a=(t*l-1)*Math.pow(2,o),s=s+p):(a=t*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;e[n+C]=a&255,C+=_,a/=256,o-=8);for(s=s<<o|a,h+=o;h>0;e[n+C]=s&255,C+=_,s/=256,h-=8);e[n+C-_]|=$*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Dl,n=Mf,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=E,e.INSPECT_MAX_BYTES=50;const o=2147483647;e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const f=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(f,c),f.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(f){if(f>o)throw new RangeError('The value "'+f+'" is invalid for option "size"');const c=new Uint8Array(f);return Object.setPrototypeOf(c,a.prototype),c}function a(f,c,u){if(typeof f=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(f)}return l(f,c,u)}a.poolSize=8192;function l(f,c,u){if(typeof f=="string")return g(f,c);if(ArrayBuffer.isView(f))return _(f);if(f==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f);if(be(f,ArrayBuffer)||f&&be(f.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(be(f,SharedArrayBuffer)||f&&be(f.buffer,SharedArrayBuffer)))return $(f,c,u);if(typeof f=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const b=f.valueOf&&f.valueOf();if(b!=null&&b!==f)return a.from(b,c,u);const T=k(f);if(T)return T;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof f[Symbol.toPrimitive]=="function")return a.from(f[Symbol.toPrimitive]("string"),c,u);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof f)}a.from=function(f,c,u){return l(f,c,u)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function h(f){if(typeof f!="number")throw new TypeError('"size" argument must be of type number');if(f<0)throw new RangeError('The value "'+f+'" is invalid for option "size"')}function d(f,c,u){return h(f),f<=0?s(f):c!==void 0?typeof u=="string"?s(f).fill(c,u):s(f).fill(c):s(f)}a.alloc=function(f,c,u){return d(f,c,u)};function p(f){return h(f),s(f<0?0:A(f)|0)}a.allocUnsafe=function(f){return p(f)},a.allocUnsafeSlow=function(f){return p(f)};function g(f,c){if((typeof c!="string"||c==="")&&(c="utf8"),!a.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const u=z(f,c)|0;let b=s(u);const T=b.write(f,c);return T!==u&&(b=b.slice(0,T)),b}function C(f){const c=f.length<0?0:A(f.length)|0,u=s(c);for(let b=0;b<c;b+=1)u[b]=f[b]&255;return u}function _(f){if(be(f,Uint8Array)){const c=new Uint8Array(f);return $(c.buffer,c.byteOffset,c.byteLength)}return C(f)}function $(f,c,u){if(c<0||f.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(f.byteLength<c+(u||0))throw new RangeError('"length" is outside of buffer bounds');let b;return c===void 0&&u===void 0?b=new Uint8Array(f):u===void 0?b=new Uint8Array(f,c):b=new Uint8Array(f,c,u),Object.setPrototypeOf(b,a.prototype),b}function k(f){if(a.isBuffer(f)){const c=A(f.length)|0,u=s(c);return u.length===0||f.copy(u,0,0,c),u}if(f.length!==void 0)return typeof f.length!="number"||he(f.length)?s(0):C(f);if(f.type==="Buffer"&&Array.isArray(f.data))return C(f.data)}function A(f){if(f>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return f|0}function E(f){return+f!=f&&(f=0),a.alloc(+f)}a.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==a.prototype},a.compare=function(c,u){if(be(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),be(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(c)||!a.isBuffer(u))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===u)return 0;let b=c.length,T=u.length;for(let B=0,F=Math.min(b,T);B<F;++B)if(c[B]!==u[B]){b=c[B],T=u[B];break}return b<T?-1:T<b?1:0},a.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(c,u){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return a.alloc(0);let b;if(u===void 0)for(u=0,b=0;b<c.length;++b)u+=c[b].length;const T=a.allocUnsafe(u);let B=0;for(b=0;b<c.length;++b){let F=c[b];if(be(F,Uint8Array))B+F.length>T.length?(a.isBuffer(F)||(F=a.from(F)),F.copy(T,B)):Uint8Array.prototype.set.call(T,F,B);else if(a.isBuffer(F))F.copy(T,B);else throw new TypeError('"list" argument must be an Array of Buffers');B+=F.length}return T};function z(f,c){if(a.isBuffer(f))return f.length;if(ArrayBuffer.isView(f)||be(f,ArrayBuffer))return f.byteLength;if(typeof f!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof f);const u=f.length,b=arguments.length>2&&arguments[2]===!0;if(!b&&u===0)return 0;let T=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return u;case"utf8":case"utf-8":return J(f).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u*2;case"hex":return u>>>1;case"base64":return le(f).length;default:if(T)return b?-1:J(f).length;c=(""+c).toLowerCase(),T=!0}}a.byteLength=z;function N(f,c,u){let b=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((u===void 0||u>this.length)&&(u=this.length),u<=0)||(u>>>=0,c>>>=0,u<=c))return"";for(f||(f="utf8");;)switch(f){case"hex":return G(this,c,u);case"utf8":case"utf-8":return j(this,c,u);case"ascii":return U(this,c,u);case"latin1":case"binary":return D(this,c,u);case"base64":return W(this,c,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return te(this,c,u);default:if(b)throw new TypeError("Unknown encoding: "+f);f=(f+"").toLowerCase(),b=!0}}a.prototype._isBuffer=!0;function V(f,c,u){const b=f[c];f[c]=f[u],f[u]=b}a.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let u=0;u<c;u+=2)V(this,u,u+1);return this},a.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let u=0;u<c;u+=4)V(this,u,u+3),V(this,u+1,u+2);return this},a.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let u=0;u<c;u+=8)V(this,u,u+7),V(this,u+1,u+6),V(this,u+2,u+5),V(this,u+3,u+4);return this},a.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?j(this,0,c):N.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(c){if(!a.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:a.compare(this,c)===0},a.prototype.inspect=function(){let c="";const u=e.INSPECT_MAX_BYTES;return c=this.toString("hex",0,u).replace(/(.{2})/g,"$1 ").trim(),this.length>u&&(c+=" ... "),"<Buffer "+c+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(c,u,b,T,B){if(be(c,Uint8Array)&&(c=a.from(c,c.offset,c.byteLength)),!a.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(u===void 0&&(u=0),b===void 0&&(b=c?c.length:0),T===void 0&&(T=0),B===void 0&&(B=this.length),u<0||b>c.length||T<0||B>this.length)throw new RangeError("out of range index");if(T>=B&&u>=b)return 0;if(T>=B)return-1;if(u>=b)return 1;if(u>>>=0,b>>>=0,T>>>=0,B>>>=0,this===c)return 0;let F=B-T,ee=b-u;const pe=Math.min(F,ee),we=this.slice(T,B),ye=c.slice(u,b);for(let Te=0;Te<pe;++Te)if(we[Te]!==ye[Te]){F=we[Te],ee=ye[Te];break}return F<ee?-1:ee<F?1:0};function q(f,c,u,b,T){if(f.length===0)return-1;if(typeof u=="string"?(b=u,u=0):u>2147483647?u=2147483647:u<-2147483648&&(u=-2147483648),u=+u,he(u)&&(u=T?0:f.length-1),u<0&&(u=f.length+u),u>=f.length){if(T)return-1;u=f.length-1}else if(u<0)if(T)u=0;else return-1;if(typeof c=="string"&&(c=a.from(c,b)),a.isBuffer(c))return c.length===0?-1:Z(f,c,u,b,T);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?T?Uint8Array.prototype.indexOf.call(f,c,u):Uint8Array.prototype.lastIndexOf.call(f,c,u):Z(f,[c],u,b,T);throw new TypeError("val must be string, number or Buffer")}function Z(f,c,u,b,T){let B=1,F=f.length,ee=c.length;if(b!==void 0&&(b=String(b).toLowerCase(),b==="ucs2"||b==="ucs-2"||b==="utf16le"||b==="utf-16le")){if(f.length<2||c.length<2)return-1;B=2,F/=2,ee/=2,u/=2}function pe(ye,Te){return B===1?ye[Te]:ye.readUInt16BE(Te*B)}let we;if(T){let ye=-1;for(we=u;we<F;we++)if(pe(f,we)===pe(c,ye===-1?0:we-ye)){if(ye===-1&&(ye=we),we-ye+1===ee)return ye*B}else ye!==-1&&(we-=we-ye),ye=-1}else for(u+ee>F&&(u=F-ee),we=u;we>=0;we--){let ye=!0;for(let Te=0;Te<ee;Te++)if(pe(f,we+Te)!==pe(c,Te)){ye=!1;break}if(ye)return we}return-1}a.prototype.includes=function(c,u,b){return this.indexOf(c,u,b)!==-1},a.prototype.indexOf=function(c,u,b){return q(this,c,u,b,!0)},a.prototype.lastIndexOf=function(c,u,b){return q(this,c,u,b,!1)};function y(f,c,u,b){u=Number(u)||0;const T=f.length-u;b?(b=Number(b),b>T&&(b=T)):b=T;const B=c.length;b>B/2&&(b=B/2);let F;for(F=0;F<b;++F){const ee=parseInt(c.substr(F*2,2),16);if(he(ee))return F;f[u+F]=ee}return F}function x(f,c,u,b){return ie(J(c,f.length-u),f,u,b)}function S(f,c,u,b){return ie(re(c),f,u,b)}function P(f,c,u,b){return ie(le(c),f,u,b)}function I(f,c,u,b){return ie(ae(c,f.length-u),f,u,b)}a.prototype.write=function(c,u,b,T){if(u===void 0)T="utf8",b=this.length,u=0;else if(b===void 0&&typeof u=="string")T=u,b=this.length,u=0;else if(isFinite(u))u=u>>>0,isFinite(b)?(b=b>>>0,T===void 0&&(T="utf8")):(T=b,b=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const B=this.length-u;if((b===void 0||b>B)&&(b=B),c.length>0&&(b<0||u<0)||u>this.length)throw new RangeError("Attempt to write outside buffer bounds");T||(T="utf8");let F=!1;for(;;)switch(T){case"hex":return y(this,c,u,b);case"utf8":case"utf-8":return x(this,c,u,b);case"ascii":case"latin1":case"binary":return S(this,c,u,b);case"base64":return P(this,c,u,b);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,c,u,b);default:if(F)throw new TypeError("Unknown encoding: "+T);T=(""+T).toLowerCase(),F=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function W(f,c,u){return c===0&&u===f.length?t.fromByteArray(f):t.fromByteArray(f.slice(c,u))}function j(f,c,u){u=Math.min(f.length,u);const b=[];let T=c;for(;T<u;){const B=f[T];let F=null,ee=B>239?4:B>223?3:B>191?2:1;if(T+ee<=u){let pe,we,ye,Te;switch(ee){case 1:B<128&&(F=B);break;case 2:pe=f[T+1],(pe&192)===128&&(Te=(B&31)<<6|pe&63,Te>127&&(F=Te));break;case 3:pe=f[T+1],we=f[T+2],(pe&192)===128&&(we&192)===128&&(Te=(B&15)<<12|(pe&63)<<6|we&63,Te>2047&&(Te<55296||Te>57343)&&(F=Te));break;case 4:pe=f[T+1],we=f[T+2],ye=f[T+3],(pe&192)===128&&(we&192)===128&&(ye&192)===128&&(Te=(B&15)<<18|(pe&63)<<12|(we&63)<<6|ye&63,Te>65535&&Te<1114112&&(F=Te))}}F===null?(F=65533,ee=1):F>65535&&(F-=65536,b.push(F>>>10&1023|55296),F=56320|F&1023),b.push(F),T+=ee}return R(b)}const O=4096;function R(f){const c=f.length;if(c<=O)return String.fromCharCode.apply(String,f);let u="",b=0;for(;b<c;)u+=String.fromCharCode.apply(String,f.slice(b,b+=O));return u}function U(f,c,u){let b="";u=Math.min(f.length,u);for(let T=c;T<u;++T)b+=String.fromCharCode(f[T]&127);return b}function D(f,c,u){let b="";u=Math.min(f.length,u);for(let T=c;T<u;++T)b+=String.fromCharCode(f[T]);return b}function G(f,c,u){const b=f.length;(!c||c<0)&&(c=0),(!u||u<0||u>b)&&(u=b);let T="";for(let B=c;B<u;++B)T+=H[f[B]];return T}function te(f,c,u){const b=f.slice(c,u);let T="";for(let B=0;B<b.length-1;B+=2)T+=String.fromCharCode(b[B]+b[B+1]*256);return T}a.prototype.slice=function(c,u){const b=this.length;c=~~c,u=u===void 0?b:~~u,c<0?(c+=b,c<0&&(c=0)):c>b&&(c=b),u<0?(u+=b,u<0&&(u=0)):u>b&&(u=b),u<c&&(u=c);const T=this.subarray(c,u);return Object.setPrototypeOf(T,a.prototype),T};function ne(f,c,u){if(f%1!==0||f<0)throw new RangeError("offset is not uint");if(f+c>u)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(c,u,b){c=c>>>0,u=u>>>0,b||ne(c,u,this.length);let T=this[c],B=1,F=0;for(;++F<u&&(B*=256);)T+=this[c+F]*B;return T},a.prototype.readUintBE=a.prototype.readUIntBE=function(c,u,b){c=c>>>0,u=u>>>0,b||ne(c,u,this.length);let T=this[c+--u],B=1;for(;u>0&&(B*=256);)T+=this[c+--u]*B;return T},a.prototype.readUint8=a.prototype.readUInt8=function(c,u){return c=c>>>0,u||ne(c,1,this.length),this[c]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(c,u){return c=c>>>0,u||ne(c,2,this.length),this[c]|this[c+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(c,u){return c=c>>>0,u||ne(c,2,this.length),this[c]<<8|this[c+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},a.prototype.readBigUInt64LE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,B=this[++c]+this[++c]*2**8+this[++c]*2**16+b*2**24;return BigInt(T)+(BigInt(B)<<BigInt(32))}),a.prototype.readBigUInt64BE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=u*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],B=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+b;return(BigInt(T)<<BigInt(32))+BigInt(B)}),a.prototype.readIntLE=function(c,u,b){c=c>>>0,u=u>>>0,b||ne(c,u,this.length);let T=this[c],B=1,F=0;for(;++F<u&&(B*=256);)T+=this[c+F]*B;return B*=128,T>=B&&(T-=Math.pow(2,8*u)),T},a.prototype.readIntBE=function(c,u,b){c=c>>>0,u=u>>>0,b||ne(c,u,this.length);let T=u,B=1,F=this[c+--T];for(;T>0&&(B*=256);)F+=this[c+--T]*B;return B*=128,F>=B&&(F-=Math.pow(2,8*u)),F},a.prototype.readInt8=function(c,u){return c=c>>>0,u||ne(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},a.prototype.readInt16LE=function(c,u){c=c>>>0,u||ne(c,2,this.length);const b=this[c]|this[c+1]<<8;return b&32768?b|4294901760:b},a.prototype.readInt16BE=function(c,u){c=c>>>0,u||ne(c,2,this.length);const b=this[c+1]|this[c]<<8;return b&32768?b|4294901760:b},a.prototype.readInt32LE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},a.prototype.readInt32BE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},a.prototype.readBigInt64LE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(b<<24);return(BigInt(T)<<BigInt(32))+BigInt(u+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),a.prototype.readBigInt64BE=X(function(c){c=c>>>0,w(c,"offset");const u=this[c],b=this[c+7];(u===void 0||b===void 0)&&v(c,this.length-8);const T=(u<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(T)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+b)}),a.prototype.readFloatLE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),n.read(this,c,!0,23,4)},a.prototype.readFloatBE=function(c,u){return c=c>>>0,u||ne(c,4,this.length),n.read(this,c,!1,23,4)},a.prototype.readDoubleLE=function(c,u){return c=c>>>0,u||ne(c,8,this.length),n.read(this,c,!0,52,8)},a.prototype.readDoubleBE=function(c,u){return c=c>>>0,u||ne(c,8,this.length),n.read(this,c,!1,52,8)};function fe(f,c,u,b,T,B){if(!a.isBuffer(f))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>T||c<B)throw new RangeError('"value" argument is out of bounds');if(u+b>f.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(c,u,b,T){if(c=+c,u=u>>>0,b=b>>>0,!T){const ee=Math.pow(2,8*b)-1;fe(this,c,u,b,ee,0)}let B=1,F=0;for(this[u]=c&255;++F<b&&(B*=256);)this[u+F]=c/B&255;return u+b},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(c,u,b,T){if(c=+c,u=u>>>0,b=b>>>0,!T){const ee=Math.pow(2,8*b)-1;fe(this,c,u,b,ee,0)}let B=b-1,F=1;for(this[u+B]=c&255;--B>=0&&(F*=256);)this[u+B]=c/F&255;return u+b},a.prototype.writeUint8=a.prototype.writeUInt8=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,1,255,0),this[u]=c&255,u+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,65535,0),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,65535,0),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,4294967295,0),this[u+3]=c>>>24,this[u+2]=c>>>16,this[u+1]=c>>>8,this[u]=c&255,u+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,4294967295,0),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4};function _e(f,c,u,b,T){M(c,b,T,f,u,7);let B=Number(c&BigInt(4294967295));f[u++]=B,B=B>>8,f[u++]=B,B=B>>8,f[u++]=B,B=B>>8,f[u++]=B;let F=Number(c>>BigInt(32)&BigInt(4294967295));return f[u++]=F,F=F>>8,f[u++]=F,F=F>>8,f[u++]=F,F=F>>8,f[u++]=F,u}function Ae(f,c,u,b,T){M(c,b,T,f,u,7);let B=Number(c&BigInt(4294967295));f[u+7]=B,B=B>>8,f[u+6]=B,B=B>>8,f[u+5]=B,B=B>>8,f[u+4]=B;let F=Number(c>>BigInt(32)&BigInt(4294967295));return f[u+3]=F,F=F>>8,f[u+2]=F,F=F>>8,f[u+1]=F,F=F>>8,f[u]=F,u+8}a.prototype.writeBigUInt64LE=X(function(c,u=0){return _e(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=X(function(c,u=0){return Ae(this,c,u,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(c,u,b,T){if(c=+c,u=u>>>0,!T){const pe=Math.pow(2,8*b-1);fe(this,c,u,b,pe-1,-pe)}let B=0,F=1,ee=0;for(this[u]=c&255;++B<b&&(F*=256);)c<0&&ee===0&&this[u+B-1]!==0&&(ee=1),this[u+B]=(c/F>>0)-ee&255;return u+b},a.prototype.writeIntBE=function(c,u,b,T){if(c=+c,u=u>>>0,!T){const pe=Math.pow(2,8*b-1);fe(this,c,u,b,pe-1,-pe)}let B=b-1,F=1,ee=0;for(this[u+B]=c&255;--B>=0&&(F*=256);)c<0&&ee===0&&this[u+B+1]!==0&&(ee=1),this[u+B]=(c/F>>0)-ee&255;return u+b},a.prototype.writeInt8=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,1,127,-128),c<0&&(c=255+c+1),this[u]=c&255,u+1},a.prototype.writeInt16LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,32767,-32768),this[u]=c&255,this[u+1]=c>>>8,u+2},a.prototype.writeInt16BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,2,32767,-32768),this[u]=c>>>8,this[u+1]=c&255,u+2},a.prototype.writeInt32LE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,2147483647,-2147483648),this[u]=c&255,this[u+1]=c>>>8,this[u+2]=c>>>16,this[u+3]=c>>>24,u+4},a.prototype.writeInt32BE=function(c,u,b){return c=+c,u=u>>>0,b||fe(this,c,u,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[u]=c>>>24,this[u+1]=c>>>16,this[u+2]=c>>>8,this[u+3]=c&255,u+4},a.prototype.writeBigInt64LE=X(function(c,u=0){return _e(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=X(function(c,u=0){return Ae(this,c,u,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function xe(f,c,u,b,T,B){if(u+b>f.length)throw new RangeError("Index out of range");if(u<0)throw new RangeError("Index out of range")}function Ee(f,c,u,b,T){return c=+c,u=u>>>0,T||xe(f,c,u,4),n.write(f,c,u,b,23,4),u+4}a.prototype.writeFloatLE=function(c,u,b){return Ee(this,c,u,!0,b)},a.prototype.writeFloatBE=function(c,u,b){return Ee(this,c,u,!1,b)};function Q(f,c,u,b,T){return c=+c,u=u>>>0,T||xe(f,c,u,8),n.write(f,c,u,b,52,8),u+8}a.prototype.writeDoubleLE=function(c,u,b){return Q(this,c,u,!0,b)},a.prototype.writeDoubleBE=function(c,u,b){return Q(this,c,u,!1,b)},a.prototype.copy=function(c,u,b,T){if(!a.isBuffer(c))throw new TypeError("argument should be a Buffer");if(b||(b=0),!T&&T!==0&&(T=this.length),u>=c.length&&(u=c.length),u||(u=0),T>0&&T<b&&(T=b),T===b||c.length===0||this.length===0)return 0;if(u<0)throw new RangeError("targetStart out of bounds");if(b<0||b>=this.length)throw new RangeError("Index out of range");if(T<0)throw new RangeError("sourceEnd out of bounds");T>this.length&&(T=this.length),c.length-u<T-b&&(T=c.length-u+b);const B=T-b;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(u,b,T):Uint8Array.prototype.set.call(c,this.subarray(b,T),u),B},a.prototype.fill=function(c,u,b,T){if(typeof c=="string"){if(typeof u=="string"?(T=u,u=0,b=this.length):typeof b=="string"&&(T=b,b=this.length),T!==void 0&&typeof T!="string")throw new TypeError("encoding must be a string");if(typeof T=="string"&&!a.isEncoding(T))throw new TypeError("Unknown encoding: "+T);if(c.length===1){const F=c.charCodeAt(0);(T==="utf8"&&F<128||T==="latin1")&&(c=F)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(u<0||this.length<u||this.length<b)throw new RangeError("Out of range index");if(b<=u)return this;u=u>>>0,b=b===void 0?this.length:b>>>0,c||(c=0);let B;if(typeof c=="number")for(B=u;B<b;++B)this[B]=c;else{const F=a.isBuffer(c)?c:a.from(c,T),ee=F.length;if(ee===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(B=0;B<b-u;++B)this[B+u]=F[B%ee]}return this};const ue={};function oe(f,c,u){ue[f]=class extends u{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${f}]`,this.stack,delete this.name}get code(){return f}set code(T){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:T,writable:!0})}toString(){return`${this.name} [${f}]: ${this.message}`}}}oe("ERR_BUFFER_OUT_OF_BOUNDS",function(f){return f?`${f} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),oe("ERR_INVALID_ARG_TYPE",function(f,c){return`The "${f}" argument must be of type number. Received type ${typeof c}`},TypeError),oe("ERR_OUT_OF_RANGE",function(f,c,u){let b=`The value of "${f}" is out of range.`,T=u;return Number.isInteger(u)&&Math.abs(u)>2**32?T=de(String(u)):typeof u=="bigint"&&(T=String(u),(u>BigInt(2)**BigInt(32)||u<-(BigInt(2)**BigInt(32)))&&(T=de(T)),T+="n"),b+=` It must be ${c}. Received ${T}`,b},RangeError);function de(f){let c="",u=f.length;const b=f[0]==="-"?1:0;for(;u>=b+4;u-=3)c=`_${f.slice(u-3,u)}${c}`;return`${f.slice(0,u)}${c}`}function Ce(f,c,u){w(c,"offset"),(f[c]===void 0||f[c+u]===void 0)&&v(c,f.length-(u+1))}function M(f,c,u,b,T,B){if(f>u||f<c){const F=typeof c=="bigint"?"n":"";let ee;throw B>3?c===0||c===BigInt(0)?ee=`>= 0${F} and < 2${F} ** ${(B+1)*8}${F}`:ee=`>= -(2${F} ** ${(B+1)*8-1}${F}) and < 2 ** ${(B+1)*8-1}${F}`:ee=`>= ${c}${F} and <= ${u}${F}`,new ue.ERR_OUT_OF_RANGE("value",ee,f)}Ce(b,T,B)}function w(f,c){if(typeof f!="number")throw new ue.ERR_INVALID_ARG_TYPE(c,"number",f)}function v(f,c,u){throw Math.floor(f)!==f?(w(f,u),new ue.ERR_OUT_OF_RANGE(u||"offset","an integer",f)):c<0?new ue.ERR_BUFFER_OUT_OF_BOUNDS:new ue.ERR_OUT_OF_RANGE(u||"offset",`>= ${u?1:0} and <= ${c}`,f)}const L=/[^+/0-9A-Za-z-_]/g;function K(f){if(f=f.split("=")[0],f=f.trim().replace(L,""),f.length<2)return"";for(;f.length%4!==0;)f=f+"=";return f}function J(f,c){c=c||1/0;let u;const b=f.length;let T=null;const B=[];for(let F=0;F<b;++F){if(u=f.charCodeAt(F),u>55295&&u<57344){if(!T){if(u>56319){(c-=3)>-1&&B.push(239,191,189);continue}else if(F+1===b){(c-=3)>-1&&B.push(239,191,189);continue}T=u;continue}if(u<56320){(c-=3)>-1&&B.push(239,191,189),T=u;continue}u=(T-55296<<10|u-56320)+65536}else T&&(c-=3)>-1&&B.push(239,191,189);if(T=null,u<128){if((c-=1)<0)break;B.push(u)}else if(u<2048){if((c-=2)<0)break;B.push(u>>6|192,u&63|128)}else if(u<65536){if((c-=3)<0)break;B.push(u>>12|224,u>>6&63|128,u&63|128)}else if(u<1114112){if((c-=4)<0)break;B.push(u>>18|240,u>>12&63|128,u>>6&63|128,u&63|128)}else throw new Error("Invalid code point")}return B}function re(f){const c=[];for(let u=0;u<f.length;++u)c.push(f.charCodeAt(u)&255);return c}function ae(f,c){let u,b,T;const B=[];for(let F=0;F<f.length&&!((c-=2)<0);++F)u=f.charCodeAt(F),b=u>>8,T=u%256,B.push(T),B.push(b);return B}function le(f){return t.toByteArray(K(f))}function ie(f,c,u,b){let T;for(T=0;T<b&&!(T+u>=c.length||T>=f.length);++T)c[T+u]=f[T];return T}function be(f,c){return f instanceof c||f!=null&&f.constructor!=null&&f.constructor.name!=null&&f.constructor.name===c.name}function he(f){return f!==f}const H=function(){const f="0123456789abcdef",c=new Array(256);for(let u=0;u<16;++u){const b=u*16;for(let T=0;T<16;++T)c[b+T]=f[u]+f[T]}return c}();function X(f){return typeof BigInt>"u"?m:f}function m(){throw new Error("BigInt not supported")}})(Og);var Zh;typeof window<"u"&&(window.Buffer||(window.Buffer=Og.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Zh=window.process)!=null&&Zh.env||(window.process={env:{}}));Se.getBlockchainApiUrl();const xx=Object.assign,Lg=e=>e!==null&&typeof e=="object",Bf=e=>e!=null,Ex=e=>typeof e=="function",Cx=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e);function sh(e,t){const n=t.split(".");let r=e;return n.forEach(o=>{var i;r=Lg(r)&&(i=r[o])!=null?i:""}),r}const ah=[Number,String],Ax=e=>({type:String,default:e});function xa(e){if(Bf(e))return Cx(e)?`${e}px`:String(e)}function Tx(e){if(Bf(e)){if(Array.isArray(e))return{width:xa(e[0]),height:xa(e[1])};const t=xa(e);return{width:t,height:t}}}const Sx=/-(\w)/g,Pg=e=>e.replace(Sx,(t,n)=>n.toUpperCase()),{hasOwnProperty:$x}=Object.prototype;function Ix(e,t,n){const r=t[n];Bf(r)&&(!$x.call(e,n)||!Lg(r)?e[n]=r:e[n]=kg(Object(e[n]),r))}function kg(e,t){return Object.keys(t).forEach(n=>{Ix(e,t,n)}),e}var Rx={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const lh=Ze("zh-CN"),ch=Co({"zh-CN":Rx}),Ox={messages(){return ch[lh.value]},use(e,t){lh.value=e,this.add({[e]:t})},add(e={}){kg(ch,e)}};var Nx=Ox;function Lx(e){const t=Pg(e)+".";return(n,...r)=>{const o=Nx.messages(),i=sh(o,t+n)||sh(o,n);return Ex(i)?i(...r):i}}function gu(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,r)=>n+gu(e,r),""):Object.keys(t).reduce((n,r)=>n+(t[r]?gu(e,r):""),""):""}function Px(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${gu(t,n)}`)}function kx(e){const t=`van-${e}`;return[t,Px(t),Lx(t)]}function Mx(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Pg(`-${n}`),e))},e}const[Bx,os]=kx("loading"),Dx=Array(12).fill(null).map((e,t)=>Ve("i",{class:os("line",String(t+1))},null)),Ux=Ve("svg",{class:os("circular"),viewBox:"25 25 50 50"},[Ve("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Fx={size:ah,type:Ax("circular"),color:String,vertical:Boolean,textSize:ah,textColor:String};var Wx=En({name:Bx,props:Fx,setup(e,{slots:t}){const n=Fe(()=>xx({color:e.color},Tx(e.size))),r=()=>{const i=e.type==="spinner"?Dx:Ux;return Ve("span",{class:os("spinner",e.type),style:n.value},[t.icon?t.icon():i])},o=()=>{var i;if(t.default)return Ve("span",{class:os("text"),style:{fontSize:xa(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[t.default()])};return()=>{const{type:i,vertical:s}=e;return Ve("div",{class:os([i,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[r(),o()])}}});const jx=Mx(Wx),Hx="/assets/logo-7165156a.png",zx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA5CAYAAADA8o59AAAAAXNSR0IArs4c6QAAClhJREFUeF7dnHesbUUVxr/P3rF3iAgqgqBio4kCL0QBjShNAwoiCogShUS64KO9WAKoPN9DwWgMIliwYVdQERR77F0Ea9QEaRaW+R1mn+y77zl77zl3733L+uvmntkzs2bNzGrfLKsHiog7SbqXpAdL2ljS4yTdX9LdJPHbvyXdKOk6Sb+S9FtJf5d0k+3oYUrLpkt3NdOIuLukx0jaSdKzJD1F0iMk3bHFGLdK+rmkqyR9XtI3JV1r+7YW3/bWJCLuIAm+2CQ3D7FZFiyQiLivpL0kHSDpyZLuvcAVgvk/SfqCpHdLutL2fxfYZ9bnEcGJhic21gMlsTH+KOkzkj5q+/qsDjMazyyQiLinpJdLeo2kR7c8CRlTGzW9SdJXJJ1m+8rcj3PbJ55OlHRwEkS1CzbL7yS9WdL6PjZKtkDSMeZaOlvS5pKy+8hdKEmckHMlnWz7HzN83/hJRKDzPi7p2S14QjDvkXTYLEKJCNZsg6Qz0adjylrMiLifpBPSqbhzI5fdN/iRpCMkXd7lfR4RGBwfk/TMzCkjlCNs39L2uySMl0p6h6RfSHqu7T8X37cWSERwGtZJ2r7FDmo7v1na/VPSaknnzLI7591Bt1+975O05wx8/U/SGenk8ncjRcQjJV0t6eGp8Trbh2YJJCJ2kHSBpE0bRxymAcyfJ+l1ObtzgjDYkMexoMkcn2X2N0s6yPZFbT6OiNdLemup7V8lbW37D/yv8YRExLaSPiHpAW0GHLANls97JR1uG7M5myJi62Q0LNQy/LWk7cpXz6TJpOvqW8klKJqgjw62zYavF0hEPEHSlyQ9KJvbYT6AGXbbcbb/kzNkMk4uSVdVzqfT2q62fVJdRxGxkaTfSMK/KdOnJD0fv2vqCYmIRyVF98QuZttjH5wUrq5zcsZIpwNHtCvjhKtnM9tEHCZSRByWrMXq7whpW07YRIEkE/CDknbPYXIR2+Kv7GH7y23nEBHwt2/b9i3bHW/79BqB4Oji41QJ03d729fME0i6594g6dSenL2WvGU3+31iaqQcG64OjJMfpLBIU/Oc368lbmcbRT+PIuLHkh4/pcN9bF88SSBbEq5IwcGcySyFtij5Q5rM4YjAsjqthwlj/b3E9oeqfUfEXST9JTmEk4Y+0/axcwSSorQE9/BWlyPhoO1pm5jTRIqIu6Yg5pN6YhBh7Fd1XCNiC0nXpIj3pKExm19cFcjekvih0RzuiZkuur1c0m620SuTro2nSkLXECrpg7i2nm6bAOmYIgLH8+IaNYCBsdN44dPO+aqkp/UxywH7xOrafdopiYhXS3p7j5uOa+t5ti+rCARvfG3NOiDAzcsCWSXpk5I40sudLrX9gioTyWDB93hhzwy+yfYbKwLBSDq+Zlz8qI1GAkkTPV/SgT1PdKju2aWb2CZUXr42iLBeIWmrnifC6cAMHyfYIuIDKPyGcbcsBPJQSV9PeY2e5zpY9yfYnmNJRcRjJX1HEgHFPulnKZQydhIj4mspMFs37qpCILtKwn0n371SCIsG5TrO0UfEzikT2bfRgh+yle1fFosZEd+V1GTZHVAI5C2Sjlopkkh83CBpC9tYPSOKiFdJetcAfLIJdrZNtpNxCc8gEEzfOjrayWHBbicLuJIIPbKv7Q+XBPI24l4DMUkEF72MQEjscWJJddfRagRCtgyX/iEDTXTIYU6yTTJrMQyXcfR3QlJq2hqcgUCQGkpoJemPguGLbO+XBAIc6dIBA6bn2sbnYTMQOyMc1ZTGWINASEBhYfWt6IY8GcVYV9veJi0KsST4xFMfgi6wDSoHgZD+xsri6qqjsxAIO+jCIWa4CGN8HwEQbIwIUJM/HDANTZgEHRYRgXVFSOc+DWuwltagOAglrET6CaEg2zdGxD0kYYY+bCBGP51CKLdFBABCBNKUKl6PQKpJ94HmO8gw6EYEckMSCLnvoYyXz6YgJwLhhBAhaBLIOgTy2gR6G2SFBh7kp+nKKk4IOKgCftP3VGY5ISOB7C/p/X3PbpH6X0wdMs6LZJyQkQ4Bc0XYfSXSVbaxIrF0hrayzrc9yp+n5BRWFsD0RisLP4SnAG2eDSw3oV1im6QbiwJ/wEX3GIiJtbYPT2Pjh3xjCoC7PJ2RH4Knzl3b5LQMxEenw5xiG1Ri4amDxT2o0xGmdzazp05CiljWcs2jT1sSchHktvEHRhQRgOqwKoegQ22DhWZcNv23JYF1q6PVRbR3yIkOsRiM8a8UAgeEVghkqGgv462y/cUkEPTX92ogQMUUjyrnQzDTVpIeIRGFl74Y+RDQL+RDMLOLzYBAmlCgL1vJGcMTbZPHHtOAGUMesm5j+28lgbTJGD6nnFMfUuH1fW2RC9nUNq97ywIZKqeOTianPn4zEhHEC0eR5xq6Paee7rldEuqEINxyp8ts71ZlIoE5UPIv6pnB023PQZhERBPqhGd7G1ZxWRyrocLTfa0J1hW4KHTiPIoIfAOek/WVbuBUcDrmoCdrkO/FHIGZblZFLu4jCVR4X5PtSwjlfsl57LrIyMVn2OYZdfm6BLkIJqz6NqRoQ4p3x6pASMZ/bhn7JFg3e9sG8DeREkKTN35NFs+sm4dFB8k+pyJFRABi5/XUNCDifGxv0iWAyEg39o1dmpXhuu8Aox3YAv3O/T7HAutoMlyX+9uel/BLCTJe205LUq2xfcy09yHHpAlPO14dzb/TboD77GCbdyK1FBGbpOwhZTO6JCo8YN1Nex9CiIoqEZOIZwwXTntBRSIFXTLPUuly9h32xVW1l23Afq0oIrgi0JldUu07w4jAtRjl2Ss0/QVV0TC9MeQubgJ3dcnQLH1h1Rxt+6ycj9MbQ3RJV2gbKkzwxhBraSIl5D0WXpXAIPOK9/paayolVnjAQwGWpUgoTsBvx874ChefpCsk/EgH1C1SeoWLs1pd9zE4u9G8jYjtEp5pqQkFBUoFBuqNtC5tUV6wjExe02ZEfxEqqa0SlBxTSk+VfT021SsKlGOjQJjJEqzkgFe7Pl1VExVo0womvjBaikoOswZWGR/YaCsoVUQAZeVUF8RzaoKgI2OklUDS5AF7AVQm5dv6uzYLk9mGWic8hnlnOVaU2ce4eXoCzknjgU8uX5zSonBBq5peEbFhyh5S3A06z/YriwllTSCBhtlRR3b44D5nLQG6UZ/rio6rAXEdk96lsE4OAaamGlDrU1qqBgQWDpwYUYVxVDhLIKVjTqU1KidggWX3kcNxasvuY7xTe6yXhakP9rdtvSzeCx7Z5IRO4jUJBQeRsoGz18uqKEQ8efLT7FgcrVnv4Dr5UCgTgBn2PSCBXilVlMNSOiQV8KxuNhQwVtIaCpjNIowmBha8uyMCSVOfkKJcFL5c6HNjmKZaKU+XF6vmIsU8QatwWsiHF3UgMU8/Un3y3LTIOb8vWCDFYKkqKWEB8io7puAdCqxN+IXySlSLI+1K2BrT8LolUJWUU08+HIHc2qXemiakzgRSuc7KdXtBWmChsdOIHfEbfgMP+7Hbwd8WdXtvWWwh5OzmPtr+H0tgrynPcPcBAAAAAElFTkSuQmCC",Vx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABK5JREFUeF7tWu111TAMlTagG9AN6ATQCaATQCeATkA7AWUCugHdgLcB3YC3Ad1AnGvkHCfxd+yXvg//eaeNk1hX0tWVHaYjH3zk9tMJgFMEHDkCR5ECIvKKiN4R0WciekNE+PuBiG4OGgARgdHvieiTGj2N9/uDA0C9DYNhOACIje3BAKDeRojDaIR4zthvANTbMPpLgdEuMJu9i4AJoaVCPBUFt3sDQAahpYz1Xb960QAUEloNAGcvEoBKQisFYMvM5y8GgAaEBgDulQxRBlPjkZnXTYGGhLYhojtm3ojIVyK6TVlvVCDzOkKoIaE9q+HwPBUYj+mXAGxnKdCB0P5reWaAAOO/qR7IcL6ZcoZ7uwOg3kZY2iYkd4GheVsiuob31HCovp8Zstd93hMzX+AfXQBoRGhTAODpe2a+sxdE5DUR/SIi/JaMB2a+bgqAGv2BiD4WeiNn4fA2vA7vmyEiiCh4vtR43I5nIYWWR0BDQvMBMQp3x3gA/aNS/+MxF8z8VA2AE+LQ4kv1eCgCUMq+W5JzjEfjA8KrHc/MfGZvLuIAh9B6GY11zcLdMT63xsfA2TDzZTYASjTI69qWM9dTIDmUNZOb7tCIg9dzFF7qfSDSmygAHWp2clEqaExN9xgPpgfptRhXzPzoBaAzofkWP0hY38UFZS4G1LlbTQwHiAjCO2cPrYUH8IyRhA0Yv6TMhdZpOkD3IldIyKUgjCRswHjkOnI+d28vd02mA5wC8KdSTOS+1M7z1nRPzrdg+tDabl0liUmIABBMz7I2k7Ch1e0gGk0HOIoA5QCgjrCrkZWxSAjWdA/TtypzsfWYDnAGgP2Hsi5k5lJCzAp3BR+gQ9O3KnMhAIYOMAiAxyv2aAm/udHhlbA7LHMhAGYEaDggl8m0+3IB8d06y7FIvsPj4J/WTB96pdkCm17MBmASHYgGgPFWf010MHPW80QEfINubpfD65ysBcdWqSLKdmfJCCjct2sGUMg5LQBACP/VlY4aDU+NL923awXAqAPMIsGSNztaYiY1lelr9u1KlpCaG3TM4ghQA91NimG3xSmvKHMor2uNUQfYIwJAgpDUGCO5qdXj91qW63tnTrHraRIBGgVWUo/yTVtsXFtrjLbApotoCYDbxAySc6WS59oZJEBMagmAmwaD6Fir7DkIzDrA5hzgkJ1trQfURQSCp8VeXm0KRbVJswhQHpilwQ7a7RQwsw6wZwRAHlvCM6cvIoIKkOr07IlPbsOVMtpe9+qSbgBoFEAVQviYNBAR+3do0TDe7tPbfYlcA1PzvB1gbwCs3MXGA05grT7wLdYYPznzg6gCEC26RG8H2BsANw2wIxTabpsZ75Bp7anvFORkc9aUBB0DssLe9bwvPJbuEea0570AiHV9Qc8HQEAJRUqUEqR3C6ybEnQfHJG/RcZPUgJ6omT3evgIIsaUvSIABIby53qtyvgJsCVnBsNHEDsHQMuhJTKAgY8RRl94pOpX6HrBeWGwA+xaBWoNK7kv47g8KYDs+7qkQIkxS+Zqp+k7Q4w2QHsfARNeQKpZBQmewWc1s+3vENB7HQFLoucgUuAEQAMETinQAMS9fsTRR8A/UhrtMyUFEVoAAAAASUVORK5CYII=",Gx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABBBJREFUaEO9WuF1VTEIhg0cwRHsBnYDu4HdwE5gncBuYDewG9gN7AiO4AZ4eOa9k8eFBAj35kfPaZvk8gXIBwQkoh8A8Bny4y8A3CDin/wW+ZVE9AEAfgHAu26XV0S85d+RiPgfvwHgff4zcNlwYY/wUiJimRlcLzsfNB84Hzwg/yCij21i+CPdggdEfFrZILJ2AO62t6YTwAbyOwB86T7CJ/Ay+CgfSn9yh5lqszrWHJvneajfvwBsINlU+0V3iKiCbCfI83vbf0PEm4gmMnOJ6CcAfBJr2Szf5H4SIGukF3qoFSJijbPm+/GEiA8ZwT1riOgrADyKuaZ7XAFsWpRCDy8Q4xZmP3j1CByZY4B7RMRv1j4bgA0k2zf72HmYJ2Tcwlc3WQSENdewliE43ssCKE2V56o23g5Eu4WfEfG+CBzfC+w6/XhBxLvZ/irAJjQ7MTvzeQy1QkTyFuZ194j4PBNi9H/rMgMAdoMT142GCbCBlEIPLxAikqa9RB1erlsBqEU5UepIRTkD374i8iUNGv6VoY5wlGNYA4PbcF1ag+eFin9FqYMPxS1cpT8PfbA/GSKSUc4u1JHhumUNNlOtoI7ZJaVFRlOuKwHYQEoBMtShRjlEJGmJP7nMpW4T7fxRUsFMK3L+5lD2DNwzADVTNQndEP4ShVRwXZmJdlqU5pSijpZvahl5iOvKARpRzow6tISazXWatM7IfC+AWpQTpQ4pmxklZUGGfVBwo5ZFmLngpPazRAfWASwBbKYqM+wZdRxaBVgG2ECWU0fWJOW6KoAV1LFLLacEoBHlZKijvJZTBrCBlOW8GXXIZ4PyWk41wArqcNVavD5aCtBIkPnPUeoIJ8i70YS2sZKwzqhDi3JKXqzKNWhwI/85mnWkajm70ISIbjQiP0+JZh3L0U2pBttjpCzQ9vgPp44ygIO8jv2vfwY4lDpKAI6S1qY++cwWzTrSUc4yQE+B1ng4iVJHKpWqAOh6jFQeLQ+hjiWAkQKtoendqSMNMFOgNRLeKHWEopwUwOxjpFHLiVJH6MUqDNDQgrtAa5hqlDrczQ4hgKuPkV3ZUetO2oU63ACrC7RF1DFNkF0APVznzc9E3Dot64v5MuuYJshegPLpLPTeZ4E3TD5KHcP5U4AG16WiCiN35E5HLl30I0odpjyzJgStq2g5hZFAlWaiGXXIQzHnj9pIDgHXuFGr5cyoQ/qjOt9qBNIeI9MRvecCMvg1Sh2b+RuARgetm1g9YAaXjtZMFMk6NqZ6BdDTQbsCwLNWaXaYZR2yRHKljAvAaiL3gDFuVe0ZgHtWR/0xDLLvW724Uw9Q47qS0l0UrBHlRLc5mfYJoNHzWcZ1UcmaTDLKiW7z37SjHbTRr2TnG1FOdLvnf0RvBw9GGsnRAAAAAElFTkSuQmCC",Kx="/assets/logo2-9ea92a23.png",qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAAAXNSR0IArs4c6QAAAgRJREFUaEPtmb9LHEEUxz8DSgIGsUxhICksUlqonX/FQTAkHAkEUSQQEEEEQZFAIghHQCRFEEMSIfbWYmMhCDY2wYDYCJYWggdfmeNO9kJuf3BzezOy2+7Mm+/nvbdv38wY7sFj7gEDBYQvUTSSHgJvgVFfRGXQcQysW4ivwLsME30b+stCnALPfFOWQc+VhdgCXmeY5NvQXQvxCFgEhoEe3xTG6KkCR8DnosT6ErUiEsFFQlLJGLPji/CojlTpJGkS2DDGpBqfN2iiKElT9tduhQUJIWkG+NLwbHAQkt4DlabcCymdJH0A1v7N7WAiIWkWWP3fxxkEhKQ54FOr6uI9hKR54GNceYyDkNQHjORYXm+AP8aYi1qJlbQArCQJaAUhaQg4BPqTbDh+bzvZsm3FbRu+lMZ4DMQBMJbGRgfGXLqC2APGOyAwjcm/rtLpKbAPDKZZ1eGYa6B013Y4+LCtrcfAA4cik0ydG2OqTb1T8CW2gRxt+IL9Y9dL7hvgW9AQdZAysBlsAxhJrVfA92Bb8QjIS+BHsJuiCMgLYNv7BjCpIAd/UJAE2O33iQcF3RaYZv0CIo2X8hhjW/EBwG5L7a4stKP9E2DZQvwEJvLwWIfWqF2ynAFPOrRAHmZr112hXzz+blwBTwPPgd48XOdwDftNVIoS69CjbZkqItGW+xxOvgXEoKpPPsLn+wAAAABJRU5ErkJggg==",Zx="/assets/logo3-bf86988e.png",Yx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAahJREFUWEfV2DFOwzAUBuD/Db4BAwM7CwNH4BBIXdi69jgdnCE7A4fgBiDBwsaI1N4gkVy5SlBIY/v52YlDlwyx48/Ptd+TSWu9AbAH8KOUetxut18o+Kvr+rZt22cAN8aYHVVVdQBwZU3GGIt8KIW0uKZpXonouvMcLfANwH0ftFLIMa4DfpLjxaKR9BnISksiQ2OfgaWQIZx1/QKXRnJwF8ClkFzcJHBuZAzOCZwLGYvzAnMjJbggMBdSimMBU5EpODZQikzFRQFjkTlw0UAuMhdOBAwh7fthydRVJeLi40+q6/My5+mK0nnWXT2XihNHsJ/AFHI4uRy1pTiCIWQOXHIEXf/HHEvbByApgqte4lVvEt85V/yY4RzCnDacoyx6k8QMHNPWh2VvEsmAkj5jLAuYMlBKX9YSpw4Qyt2haxZvBHPgfBmHk22cwJy4FOQkcA6cFHkBnBMnQf6fq48lIjc+4zhjrv/6jTMLbt6UtvMZSGv9QUR3/cc5Z5MU4uvnqC3fLfBARKu8RAdwtMANEe2NMd9KqadQ6pkjesNvdpF8AWBv+ncnQ0BHLgLTD5MAAAAASUVORK5CYII=",Ti="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK9JREFUSEvN1cEJwzAMQFFpkgayQgfqIWAdM0I7Qm82MeTcLTqYQSXXUCuW5EB893+2wQjh5IW1fkppZOY7EX08Z5CABQAmAHiGEF5WpArknG+llC8iDh6kCmwn7oGIQA/kEPAiTYAHaQasiAqwIGpAi5iAPcLMMxG9/33GawKaD6i+gSa+PZkK0MZVgCXeDFjjTYAnfgh44yLQIy4CMcYVER+eaSYCpw9965Df7/sB3MCuGc1lpucAAAAASUVORK5CYII=",Jx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAqCAYAAAAkqNwKAAAAAXNSR0IArs4c6QAAC5pJREFUaEPtWwtwVdUVXfve900IFhCLwWqxglMRi52iaB3b2tZPp2ptBa3102oHP7WhYKSJJOS+hAl1aEGJnyKKbbUKoYr4HcEPHa3toNRSTRrBVtOSGLVpDAHyfvfsznq9j4bwkryXl2Cc8cwwQHLPOfvss/97HUGWY86cOf7i4uIiv99/ZDKZnKGqZ4vIyQAOBeAHIN6f/lZUAC6ALlXdBmATgBf9fv8bbW1tH9TV1cUB8Jt8hixbtiy0Z8+eI4wxM1X1iwCOARAWkQ5VfV1EnlXV11pbW9vvuuuuRA6b8Yz70ccfDDRk3rx5obFjxx6hqmcZY74uItMAjAVQAMAWEVHVbNbiXiTAAOgG0CkiO1R1czKZfNS27R1VVVV7uNxARPX1e8dxCizLOtEYcwUAMu8wEQmpqiUiSQB7ATQDWK+qDwF423Ec/rzfkRagwsLC2JYtW6Lr1q2jIKSkpt/hOM5YSpqqXgjgCyLyKREZDcDKgWl97UFG8kDviMirxpgNfr//+ZtuuqltMExcuXKlv62t7QwRuVRVv6Kq40UkrR1pGrhnTFV3AHjctu3Vrus298fE0tLSwmAwOC0QCMwG8FYymXyupqamYSAGSkVFxad9Pt+XAJwnIqeq6jgR8Q3E9EH8nre5S0S2GmOecl13U1NTU2P6lrNZz3Ec0nUSgMtE5HwAn+Ql9zVXVeMi8jfXdR8MBAL3b9u2ra2P/cRxnM8AuEJELlHV9wCs7OzsXLt8+fLujBI4a9Yse+rUqZS0c1T1IhGZCSCQjcRmc9h+DpXkoQCs89RrezbqRXqnTJkywe/3/wjAhSJCmzegdnlmhJJUGwgENpeXl3f0po2qO3HixNMBLAbwOU/rViWTyeU+n6/5gE1IzOTJkw8NBALfBUDmnXgwmOcRrqpKadwuIutt2yahLQMxccGCBUWhUOhM27bnA5jhObVs7pK29gNVfQrA8oaGhld7S2FZWdmYcDj8LQBLAYzhxajqEwDubG1t3dSbgfRgY7q6us5V1R96zKOjyOY2syE4229iAN4QkbW2bd+7cOHCdz3Hk2m+LF68+EhjzCJV/YanurnQm1TVVgCVwWDwsd5SWFlZOc227ctF5DoRCVMCVfWvlmX92hhzx34bOY5D50A7cqMXovD/uRCTLYP6/Y4OxBhDL/06JQPAM47j/DvTJE/6TrVt+2YAn/W0JRc6KPXc6wHLslYvWrTojz0nRyKRr6rqNZ4foBnjeE9Vf7d3796yfcypr6+3GxsbGZ5cC+DbIsIwpU8jnAuFg/n2f5GRdgF4VkRuHTVq1Jb58+fzoPuNsrKyowsKCuh1KSGHDTIyYBjToKorANzvOA7j0dSIRCLfUdUSETmlh2nYq6qPx+Pxkn0MdByn2PNe5QAOBzAc3jZXXjLk6ARwq6o+6DjO9p4LOI7DC54pIosAnAagMNcN0rYXwG5VvQPALY7j0GQo1xeRHwCgbT2WMa/3PYPvjYlE4oYUAz2ve5aIzAFw9kF0GgOqsqpSOl7xDlffUzoYNAP4pogsAzChxwEHw0fjef7bALxEx+U4DlWW0nejl3GlNdJV1ReMMdWp9KusrOwT4XD4OgAMA/qNnwZDWZ5z6CkpHasA1AH4p+M4lEwsXLjwqEAgcDH/CWBUPvbas7u0f/e0t7f/tq6uLkb7WlBQUCoiN3hZV1pjyey/iMgvGST6LMtibkvmzeqR1+Z57qGZ7tlC2sONJLilpeXJdP5aXV19ijGG0cIlAEJDsOO/VHXt7t27naVLl+6NRCKHi0ipJ1j7MhqPpiYAD5KBIcuyrlTV7zNVy+cWh+AA/S3xd9pBADc7jrObH9bU1JxnjLkewJdziP363ENVue6GWCw2NxgM0vYeIyK0f1eKSO/U9U0Aj8mSJUvGJBIJRtn0NlTfkTq6GfAmEomfbN++vbW+vt5UV1dfDmAegKlD4fS89O7pRCIxt7Ozs3XcuHFcd56IfC+DYL2dihAcx5liWdZSVloABEcq91gGU9U/WJZV0dHR8cohhxySYOhiWRZtVLGqpj1kPkegw3pBVcsKCwsbdu3adYJt23NF5KIMi7ao6ktkIAsFCxgO5OnF8iE8m7l0JozVbg8Gg2tjsVg3maeq9JBFQ2R66Jy2qmptNBr9fSAQmG5Z1o9F5IIMBLKC9DIZyBukKhw/RERkw4zBfvMWA12fz3d7V1dXPBQKkXlUMWpO3hmT54lZXLg1FottCIVCn/ccyLkZCG4js8nAnwM436tgDPZgB2teC4CHmbYlk0ky7AYRYfTAoD9vBvIQqtpEbx+LxdaEw+EZxhiGd+dkOOC7rKpLJBK5G8DXABx1sLiQxz7visgTrutGXNcN+nw+ekiGMbR/Q8JArxK0yhhzv5flMA+mf+g93mdbgBLI0OA0ETkij4MdrKnvi8jTxphK27bDruvOZ6qVIcTIhx6GJ6t9Pt+vkskk08RrVPXMTAxkseNjBh7ImdwYGIlEVgM446OiwgCeNMY4w6XCqrrdsqycVPgXXq2LZfCRPhh7rff5fD8joclkkhEEjXzvxtGgz0EnYlnWndFodG1WTuQjHsaQgcxEmAfn7UTSYYyIrIhGo48MFMao6p/phdnBYjz1cSD9v371VgBLuru7Nw8USLPMJjU1NccaY9gwoacZ0akc63QiUrlz586Xi4uL48OVyolIuTGmwXVd9kP6T+U+SsUEEWHPeF5jY2PLcBQTALBXvNEYM7e9vb1l/PjxxxtjmOmwXNbbRDQTIiIrVqwIdnR0XAmApeuRXM76h6quoXr1LGe5rnu9iAxJOcsr3D4aCARK4vF4ZzKZnMxgvY9Y8032RVIFVQ+ywboaoQtDlhYN2hX2mJguqHpApJUTJkx4/Oqrr04BgiorK0+xbfsqr9w05AXVioqKYr/ff4Cn36+g2rOkr6q8zcM+zG5cBqanSvoA7rYsq87DsaRK+lVVVUcCuJglrmEs6bPFy5SxZ388VdInxOMj0VRKhQsit48ZM6a+pKSETffUGOqmEoCHVHW/ppJlWSVeyYwwvp5NpRcJ99ivrQmAEIZyEWGHa8S0NVW1zrbtByorK9/oKaFsO/p8vpnJZLJKRAhlG3RbU1X3ALgjHo/fUltby1JVv21NVd2UCuTTBLGx3tTUdIKqXquqF4ygxvrzrM8VFRX9KVNj3XGco0XkMgIC8mysE9TE/vN9vVqnBCuVeHEyMx6OVGPd7/f/v7HuqcRo27ZPMsawQk2Ix4cK7RCRVHGTt+04DmFlB4yhgHYAiLJh5fP57qmoqHip5yZ9QDtYyiK046cHgItqa2vHJhKJ8wBcBWB6L+M5FI41mzVo54hCWKuq9wJoS/eCM0xOgYtc163yCp9sjOWS1hFcREDnomg0+uiSJUvae+5RXV09jWhXEaGEp8BFAF4Tkd8YY27LCG+bPn36oYlE4kODt4kI4W2PGGPYTN+ZA7yNDXDGsmlVG+iy6OE7VfVpAMuOO+64rbNnz05Bd9MjE7yNFSHC21paWjaOOIAlgEbLstb5fL6H4/F4TgDLQCCQAlh6oPIBpVBVo9yPwTmA5xzH+U9vjmcCWIrIKlW9hfjq/jZhkD3JsqzTVZUqPewQX1XdKiJP0uYBaBpI8np55BTE12uQkd5sIL5NruuusSzrvoaGhneygPhSK2mLVxUVFa2hUxvolqS8vHxsKBSiQ2HjfcZwgcxVlSDzR4LB4ObBgsw9MBCLw5cyvcsGZA7g3tbW1ub+njsQZB4Oh4+3bXu2ZVlvGWMorZTcrIztvmcOrusSwcUG1Al5PnOgnaH60P7sEJHNqrqhsLBwR2lp6d7BIPTT0sjDjh49eroxhq1aQt5Szxy8s3JfxntEFfCZw/pcnjlMmjRpVHt7e7y5uTn7Zw5pwtLvJAAwfaKhPiePhza7AGxT1WeG66FNLBab2N3dfbJlWWQiMS58K/KBh3p9ln8PxUOb/wLZwTGRzXs4EQAAAABJRU5ErkJggg==",Qx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAB2dJREFUeF7tWm+IVFUUP+ft4C5qoODirhgpJQklGBkaBhoaGgoZGQoutOLu3DuOiUsrKRVNZLih4Z9tnXdnR1IqEjT0g5GBkJFQkUGBUIGgYfjmgx8EzXVh3ztxtvu22bdv5s28fTPjrvu+DMy79537+91zfvecey/CA/7gA44fJgiY8IAHjIFUKtXAkFOp1D3+fSBCIJVKxWbOnLnBMIwWIlqJiAMAcMayrM3jmoDe3t6nbdtuQcRWAJjm4+zZcUfAgQMHpk2ePHkDALQBwKJiEU5Ed8YFAeziTU1NywCAZ3ojIsZKkTYiyo1pAtLp9BzDMF4jolZEnFMKaE+bc2OOgDxBayWi5aXOdgFyusYMASxojuOwi7cUELSyHYCI1t3XBGhB26Rju6iglY0eAG7fvt143xHALj5r1qwVjuPwTJcsaOUSQETXpJRz7xsCRitoRDSAiMcAgDO8bUGEENEpKeWrNSXAFTRE5DX7ubCCRkQ/IuIOIcRPSqm3AGBPCQTskFIeqgkBOkNrQ8SNoxS0W0TUmcvljqdSqQHTNN9HxLeDwOv3S5iwqhGgBW2LVvGFJQ6yYDMi+gwRO4QQN7nAaWpqSuuUN/DTHC62bU9PJpOVzQTZxZubm1cxaCJaH9bFPYj+QEQZj8e/4/97enqmxmKx0wCwMhD5/w1+FUI8VbFqUCn1KGdnDDxkhjYCy2DejpiyLOsQuzs3yGazj9i2fQ4A5pcBfrCrEKI9UgJ4JgzDeIkFDRGXlzmgos2J6GwsFtvW1tb2l9tQJ0ZnAGB2ubaIqE1KeTQSAvRAJACsH6Wg+eG4AgCs7l/lv8xkMqscxzmFiFPLBc/tHcdZkEgkLocmwBU0XYQ8GWYQxfqwSBmG0XXjxo0P3J0bt71SKklEB8PqCYdSLpeb7oZRyauAK2g6tteFHUAQWUR0wXEcuXXr1j+9bZVSewFgV9A3Asi9IKV83m0TSEAlBM1vgFyb85qeSCQ+977Xy9yniMhhNtqnSwixuygB7OINDQ1rKiFo3tGzu7Mq9/X17e7o6LjlM+sziOhkVMLKJMbj8S99CaiwoI2YufwU1m9a9TJ3HgAeG+20u/37+/sf3r59+99DBGj3EpxchFhPw46LZ3qXZVlHXTHyfiidTi9FRFb6prBGfLwtJ6Vszv8flVJfcNkZlZGg73AKa9v2zmQymSvUVim1BgBOAcDgHn6EzxkhxMteAvoqYMhvzMNS2EKgTNN8k6u5SqwyRLRLSvnhMAJM0/w2KoEpAOoeEaVyudxHhdyd++md3b2I2BnhjA/7FCKujsfj33g9YAYAvKHDIMzOasHx+qWwfo21DrHSr60UeP7u3bt3p3tXmmF5QHd39/xJkyZx/K3mDYqwocHbTYi4zZvC+oHr6elpqqurO42ISyoJnoguSykXeG0UTIR0mblMl7Fc3AR6h96W2m9Z1nveFNYPnE6yzkdVMRYjkIiOSSk3l0yAt6HOEdgzVhPREj+RYi1x6/Sg2TRNcwUvcxUooAqZZo/sCU1AfkfOFKdMmbLGcRw+aV3HILxFRjECMpnMK7wchg2xIHL93huGsai9vf2XSAjI/4hSSgCAyf8VMuJpX9KmZRiQRfrcsyzrIb9VKLAYChqIFrHrHBJEtF9KubOA0vN+fzcRccZZ1YdTbinls35GR00Af9Q0zR+0il8RQszzGtKCelKvLlUFr419LIR4vWIEKKU4j9jPBohooZTyN4/bf6+X1VqAB0RsicfjI8psHkwkHqBPda5qAoalmzq3+L0myLXRgYGBeclkkrfXRjyREMBfVUr9rG9kXBJCPONa4v07IuKd25o8RHRTStlYyHhkBHARg4hdbMhxnLmJROKa1octiJitCfr/jJ4TQrxYcQIymcwTnG7qMBg8d9Oe8S7XOrUigIj2SCnfqTgBGizHOh9SnBdCvKD/69UXlmrFwdpiNUlkIaDdfR+Xs1wT9PX1NXLlZZrm11yG1go9X4Lo7Oy8WRUP0PXCJW2sVQhxXCnlekUxDq4QUSzqosi9BFHMcKQeoL3gqgYyuP1kmubtYic4PMhYLLbctu1/iIhPeKPY+h7E7F6CqDYBB/iyAt/U6O/vn1dfX3+90ABc8Plnfrq2OBhFoUREQ2JclRBgI9lsdqlt2xe1QT685GpxxOMH3m105MiRx+vq6k4AwGjvEQxegqiqB+gjNAsAeKvN9ykG3u3A22TNzc37SrnvU4DgoUsQVSUgaOkrBXz+gHmLnIiyIc4Hhi5B1IIA3lc86zVcLni3/+HDh2fX19d/Us4tECIypZSJoOU38lWADeow4OJo6PJCWPD5AHS6zVll4IFJ/iWIqnuADoPFvFVARHx/4GIsFmvNV/ugmSn0Xim1mIhOBOUM+ZcgakJAWICl9NMCySk23yb1e25ZltVY7CDG7VSRECgFRBRt0un0JsMwuNL0hsRBIURHKTbGNAEMUB+hHySitYh4BwCOWZa1u5RzCe4/5gkoZZbHnQaMFnR+/wkPiJLNsfitCQ8Yi7MW5Zj/BQKJZWlVkIpAAAAAAElFTkSuQmCC",Xx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABrVJREFUaEPNWl+olEUUP+fu+hcffOjhXhAKDOwhyQtKV1IwMkq6glKQoZDhZWfWK5JkZGS0kZGRIVl6ZzYlQyMDI8MbGhQJGRoKGvVgUGAgfPvggw9yvVd3vxNn+XaZHefbnfl2pT6492G/MzPnN/PN7/zmnEGt9REA2ADZnstRFC0tlUqT2ZqHtyqVSvmBgYGTAPB0ozUR/VGr1ZaOjo7exL17986dPXv27wAwL7x7ACLaI6V8NUvbLG201h8DwBYDzNV8Pr9iZGTkH/4N+d/Y2NhjiHgGEfOhgxBRlYhWFIvFX0Lbhtprrd8AgF0GmJvTpk1bvGnTpj8bv9UB8aOU+gARtxvGxxFxPGXQNQDAf43n2sTExMJt27bdCHXS114p9TwiHjPsJxFxTaFQ+N7sowmoVCrNHBgYOAcAixKDG1NTUwu3bt16zR50//79c/L5/CUAeNCYgMNSypd8HQyxK5fLTxHRCQCYaYy3Tkr5ld1PExC/OHDgwIJcLne50ZCIzlQqlSdLpVLVbqi1fpSIzpqfaRzHG4rF4hchznayPXTo0II7d+5cRMQ5hu1OIcS7rrYtgNhAa/0KAOwxjLcLIT50NVZKvYaIu413qavayXHX+4MHD95frVZ5bz9grIySUhbT+rsLULKfTiFinRZ50yPiMiHEr3YnCYX+BADLjHc/RFG0yrWqIaD4s87lcucQ8WGj3ekoila369sJaN++ffNmzJjBVD436exKtVpdwjxvO+WwZZPUVfUBleznb6xYc75SqTzeKeY5AfGg5XL5WSI67rPpXQxERENSyt98ANg2SqkjiNgM9kR09fbt28tdBNWWFBwdf4aIGxu/I+JzhULh65T91GILAFeiKBrsNKMOsnkLAErG79cBYEgI8bfP5KSuEDdmFTFr1qxLxqYMpfIgFaG1FhwSDccniWhYSvmjDxi2aQuIDWx6DqVyJhc7+Lmc41gTx/G4pVaGhRDf+YLxApSAeg8Adhgdh1B5RxWhlHoEEc9bgXOHlPL9EDDegJie+/v7f0bEoYxUfkwI8YLLOY41tVrtrCWOdwshXg8F4w2IDW0VwZs+kMo3CiE+N53UWt8HACy3TAk1XqlU1maNYx33kOVAy6YlolT95qDyFkJJYg2fa1YaoYGlFgflzOerIEA8sFLqJCIOZ6FyIuLguJxn3+6HYw0iLhFCME1nfoIBJcqAlTZ/LvwEUTmrCCKai4g7Da+v5XK5ZY1DWmY0PrTt6lxr/QwAmGels1EUsSzxUuVWn5NxHK/s1QExeIUazmitPwWAEeP7T6VZhyqvN2Ph29fXN+wTp3xXLTOg5JB3AQAeykjlgIgvFwqFj3yd9bHLDIg7dxzy/qpWq4MBqjxYCXQC1RWgBJSduAihcj7eD3bLbCbIrgHZKiL5/Jzn/YT2W1Q5EY1LKVd3mnnf910DSlZpPhFdNs79oVR+l4rwBWDb9QRQAupFADhsDOBN5UR0M47jxZs3b27m1/5zQMnn1KIiiMibyk0VkRUMt+vZCiWrxOqBVUQ9rZwhwVISQrz9vwGklHoiybY2E4IA4E3l7SbAF2TPVkhrPR8ALhqZoqYPgao8dQJ8QPUEEAvW6dOn8wGwmRAEAD4CdEzdplB55rRy14AcOXH28TRnbqxUcSiVZ1IRXQFyJQQBoFkEc6SVvakcAK5PTU0N+uTieqYUHIq7JSGYoiJCqDxYRWReIa21nRDk2tBiOyFop4ozULkUQmgfQsgch8rl8noiOmoM0jYhqLW2VYQ3lTO51Gq1Rb4qIniFUopPa6SU37abRa31lwCwrmETQuUhKiIIECcEAYCLXF7FJxOgqzhNRN6qHAC8cnXegFKKT0G562R1mdIbjzeV+6oIL0D2cTvRaZkSgnZxmlfcN8HCqa5bt24NtitOdwSUUnzKnBBM+mMBW89FJJMTQuVtVURHQI7NfDW5tVHxpVLbzk7Oh1J5u73XFpBS6h0zIUhElXw+P9SLhKBDRYRQeereSwWktR4FgE/MWNPLhGBScD5l5ba9EyxEdFpKucpefScgu/h0LxKC7Iir4BxI5XfVqVz3FB4FgDOm9O+2qt1ur42Nja3v6+szVYc3lbtURAsgV/GJiHZJKd/MSgA+7ZRSdsHZm8pNdd+i5bj4REQXrEPaCSHEWh+nurFJueK2GxHNINwcIo7jLVyRN2i/GeDrK8Sxob+/n2+PrDAc4xshfGsjc/EpBGSvrrjVAdnFJ05sTExMLLmX18VcYB0qImRO6sVp1FrbFe6eFZ9CvGl8KdYVt9Aujv4Lb4arnFQZT8EAAAAASUVORK5CYII=";const e7={components:{},props:{overflow:{default:!1}},data(){return{showDraw:!1,loginParams:{sign:"",address:""},web3jsProvider:null,walletConnectModal:null,account:null,config:null}},mounted(){},methods:{}},t7=s2('<img src="'+Hx+'" alt="" class="h-8"><div class="flex items-center"><img src="'+zx+'" alt="" class="hover-scale w-[3.13rem] mr-[3.13rem]"><img src="'+Vx+'" alt="" class="mr-[3.13rem] w-8 hover-scale"><img src="'+Gx+'" alt="" class="h-[1.75rem] mr-[3.13rem] hover-scale"><div class="hover-scale w-[12.5rem] h-[3.13rem] rounded-[0.75rem] bg-[#F7931A] text-white text-[1.38rem] flex items-center justify-center">LAUNCH APP</div></div>',2),n7=[t7],r7=Be("img",{src:Kx,alt:"",class:"w-[3.83rem]"},null,-1),i7={class:"flex items-center"},o7=Be("div",{class:"w-40 h-12 bg-[#F7931A] rounded-2xl text-white text-[1.17rem] flex items-center justify-center cursor-pointer hover-scale"},"LAUNCH APP",-1),s7={class:"w-full h-full bg-[#1A1B1D] relative"},a7={class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},l7=Be("img",{src:Zx,alt:"",class:"h-[2.25rem]"},null,-1),c7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Bridge"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),u7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Lend"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),f7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Governance"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),d7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"swap"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),h7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Docs"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),p7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"Github"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),g7=Be("div",{class:"flex items-center justify-between w-full h-[5rem] px-[1.67rem] border-b-[2px] border-[#272727]"},[Be("span",{class:"text-[1.33rem] text-[#999999] font-bold"},"FAQ"),Be("img",{src:Ti,alt:"",class:"w-[1rem]"})],-1),m7=Be("div",{class:"absolute bottom-0 left-0 w-full h-[7rem] border-t-[2px] border-[#272727] flex items-center px-[1.67rem]"},[Be("img",{src:Jx,alt:"",class:"w-[3.33rem] mr-[3.5rem] hover-scale"}),Be("img",{src:Qx,alt:"",class:"w-[2.67rem] mr-[3.5rem] hover-scale"}),Be("img",{src:Xx,alt:"",class:"h-[2.17rem] hover-scale"})],-1);function w7(e,t,n,r,o,i){const s=fy;return Jt(),On(Pt,null,[Be("div",{class:sn(["hidden lg:flex pl-[2.38rem] pr-[1.75rem] py-8 justify-between items-center fixed top-0 left-0 w-full z-50",{"bg-[rgba(0,0,0,0.5)] backdrop-blur-md":n.overflow}])},n7,2),Be("div",{class:sn(["lg:hidden flex items-center justify-between py-8 px-6 fixed top-0 left-0 w-full z-50",{"bg-[rgba(0,0,0,0.5)] backdrop-blur-md":n.overflow}])},[r7,Be("div",i7,[o7,Be("img",{src:qx,class:"w-8 ml-[1.67rem]",alt:"",onClick:t[0]||(t[0]=a=>o.showDraw=!0)})])],2),Ve(s,{modelValue:o.showDraw,"onUpdate:modelValue":t[2]||(t[2]=a=>o.showDraw=a),direction:"rtl","show-close":!1,size:"100vw",withHeader:!1},{default:Wi(()=>[Be("div",s7,[Be("div",a7,[l7,Be("img",{src:Yx,alt:"",class:"w-[1.67rem]",onClick:t[1]||(t[1]=a=>o.showDraw=!1)})]),c7,u7,f7,d7,h7,p7,g7,m7])]),_:1},8,["modelValue"])],64)}const v7=Xu(e7,[["render",w7]]),b7={data(){return{overflow:!1}},components:{layoutHead:v7},mounted(){this.$refs.body.addEventListener("scroll",e=>{this.overflow=e.srcElement.scrollTop>70})}},y7={class:"main h-[100vh] overflow-auto",ref:"body"};function _7(e,t,n,r,o,i){const s=Xr("layoutHead"),a=Xr("router-view");return Jt(),On("div",null,[Ve(s,{overflow:o.overflow},null,8,["overflow"]),Be("div",y7,[Ve(a)],512)])}const x7=Xu(b7,[["render",_7]]),E7=[{path:"/",redirect:"/app/home"},{path:"/app",component:x7,children:[{path:"/app/home",name:"首页",component:()=>db(()=>import("./index-5526825a.js"),["assets/index-5526825a.js","assets/index-49818240.css"])}]}];var Mg={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,r){e.exports=r()})(yl,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(_){var $,k;for($ in _)k=_[$],k!==void 0&&_.hasOwnProperty($)&&(r[$]=k);return this},n.status=null,n.set=function(_){var $=n.isStarted();_=o(_,r.minimum,1),n.status=_===1?null:_;var k=n.render(!$),A=k.querySelector(r.barSelector),E=r.speed,z=r.easing;return k.offsetWidth,a(function(N){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(A,s(_,E,z)),_===1?(l(k,{transition:"none",opacity:1}),k.offsetWidth,setTimeout(function(){l(k,{transition:"all "+E+"ms linear",opacity:0}),setTimeout(function(){n.remove(),N()},E)},E)):setTimeout(N,E)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var _=function(){setTimeout(function(){n.status&&(n.trickle(),_())},r.trickleSpeed)};return r.trickle&&_(),this},n.done=function(_){return!_&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(_){var $=n.status;return $?(typeof _!="number"&&(_=(1-$)*o(Math.random()*$,.1,.95)),$=o($+_,0,.994),n.set($)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var _=0,$=0;n.promise=function(k){return!k||k.state()==="resolved"?this:($===0&&n.start(),_++,$++,k.always(function(){$--,$===0?(_=0,n.done()):n.set((_-$)/_)}),this)}}(),n.render=function(_){if(n.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var $=document.createElement("div");$.id="nprogress",$.innerHTML=r.template;var k=$.querySelector(r.barSelector),A=_?"-100":i(n.status||0),E=document.querySelector(r.parent),z;return l(k,{transition:"all 0 linear",transform:"translate3d("+A+"%,0,0)"}),r.showSpinner||(z=$.querySelector(r.spinnerSelector),z&&C(z)),E!=document.body&&d(E,"nprogress-custom-parent"),E.appendChild($),$},n.remove=function(){p(document.documentElement,"nprogress-busy"),p(document.querySelector(r.parent),"nprogress-custom-parent");var _=document.getElementById("nprogress");_&&C(_)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var _=document.body.style,$="WebkitTransform"in _?"Webkit":"MozTransform"in _?"Moz":"msTransform"in _?"ms":"OTransform"in _?"O":"";return $+"Perspective"in _?"translate3d":$+"Transform"in _?"translate":"margin"};function o(_,$,k){return _<$?$:_>k?k:_}function i(_){return(-1+_)*100}function s(_,$,k){var A;return r.positionUsing==="translate3d"?A={transform:"translate3d("+i(_)+"%,0,0)"}:r.positionUsing==="translate"?A={transform:"translate("+i(_)+"%,0)"}:A={"margin-left":i(_)+"%"},A.transition="all "+$+"ms "+k,A}var a=function(){var _=[];function $(){var k=_.shift();k&&k($)}return function(k){_.push(k),_.length==1&&$()}}(),l=function(){var _=["Webkit","O","Moz","ms"],$={};function k(N){return N.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(V,q){return q.toUpperCase()})}function A(N){var V=document.body.style;if(N in V)return N;for(var q=_.length,Z=N.charAt(0).toUpperCase()+N.slice(1),y;q--;)if(y=_[q]+Z,y in V)return y;return N}function E(N){return N=k(N),$[N]||($[N]=A(N))}function z(N,V,q){V=E(V),N.style[V]=q}return function(N,V){var q=arguments,Z,y;if(q.length==2)for(Z in V)y=V[Z],y!==void 0&&V.hasOwnProperty(Z)&&z(N,Z,y);else z(N,q[1],q[2])}}();function h(_,$){var k=typeof _=="string"?_:g(_);return k.indexOf(" "+$+" ")>=0}function d(_,$){var k=g(_),A=k+$;h(k,$)||(_.className=A.substring(1))}function p(_,$){var k=g(_),A;h(_,$)&&(A=k.replace(" "+$+" "," "),_.className=A.substring(1,A.length-1))}function g(_){return(" "+(_.className||"")+" ").replace(/\s+/gi," ")}function C(_){_&&_.parentNode&&_.parentNode.removeChild(_)}return n})})(Mg);var Bg=Mg.exports;const Df=lb({history:Cv(),routes:E7});Df.beforeEach((e,t,n)=>{Bg.start(),n()});Df.afterEach((e,t)=>{Bg.done()});/*!
  * shared v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const mu=typeof window<"u",Ur=(e,t=!1)=>t?Symbol.for(e):Symbol(e),C7=(e,t,n)=>A7({l:e,k:t,s:n}),A7=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),dt=e=>typeof e=="number"&&isFinite(e),T7=e=>Ug(e)==="[object Date]",Pr=e=>Ug(e)==="[object RegExp]",Ul=e=>Le(e)&&Object.keys(e).length===0,Tt=Object.assign;let uh;const Kn=()=>uh||(uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fh(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const S7=Object.prototype.hasOwnProperty;function Ps(e,t){return S7.call(e,t)}const tt=Array.isArray,rt=e=>typeof e=="function",me=e=>typeof e=="string",Ue=e=>typeof e=="boolean",Ye=e=>e!==null&&typeof e=="object",Dg=Object.prototype.toString,Ug=e=>Dg.call(e),Le=e=>{if(!Ye(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},$7=e=>e==null?"":tt(e)||Le(e)&&e.toString===Dg?JSON.stringify(e,null,2):String(e);function I7(e,t=""){return e.reduce((n,r,o)=>o===0?n+r:n+t+r,"")}function Uf(e){let t=e;return()=>++t}function R7(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const fa=e=>!Ye(e)||tt(e);function ss(e,t){if(fa(e)||fa(t))throw new Error("Invalid value");for(const n in e)Ps(e,n)&&(fa(e[n])||fa(t[n])?t[n]=e[n]:ss(e[n],t[n]))}/*!
  * message-compiler v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function O7(e,t,n){return{line:e,column:t,offset:n}}function wu(e,t,n){const r={start:e,end:t};return n!=null&&(r.source=n),r}const N7=/\{([0-9a-zA-Z]+)\}/g;function L7(e,...t){return t.length===1&&P7(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(N7,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const Fg=Object.assign,dh=e=>typeof e=="string",P7=e=>e!==null&&typeof e=="object";function Wg(e,t=""){return e.reduce((n,r,o)=>o===0?n+r:n+t+r,"")}const Re={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},k7={[Re.EXPECTED_TOKEN]:"Expected token: '{0}'",[Re.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Re.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Re.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Re.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Re.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Re.EMPTY_PLACEHOLDER]:"Empty placeholder",[Re.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Re.INVALID_LINKED_FORMAT]:"Invalid linked format",[Re.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Re.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Re.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Re.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Re.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Re.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Oo(e,t,n={}){const{domain:r,messages:o,args:i}=n,s=L7((o||k7)[e]||"",...i||[]),a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=r,a}function M7(e){throw e}const zn=" ",B7="\r",Lt=`
`,D7=String.fromCharCode(8232),U7=String.fromCharCode(8233);function F7(e){const t=e;let n=0,r=1,o=1,i=0;const s=Z=>t[Z]===B7&&t[Z+1]===Lt,a=Z=>t[Z]===Lt,l=Z=>t[Z]===U7,h=Z=>t[Z]===D7,d=Z=>s(Z)||a(Z)||l(Z)||h(Z),p=()=>n,g=()=>r,C=()=>o,_=()=>i,$=Z=>s(Z)||l(Z)||h(Z)?Lt:t[Z],k=()=>$(n),A=()=>$(n+i);function E(){return i=0,d(n)&&(r++,o=0),s(n)&&n++,n++,o++,t[n]}function z(){return s(n+i)&&i++,i++,t[n+i]}function N(){n=0,r=1,o=1,i=0}function V(Z=0){i=Z}function q(){const Z=n+i;for(;Z!==n;)E();i=0}return{index:p,line:g,column:C,peekOffset:_,charAt:$,currentChar:k,currentPeek:A,next:E,peek:z,reset:N,resetPeek:V,skipToPeek:q}}const lr=void 0,W7=".",hh="'",j7="tokenizer";function H7(e,t={}){const n=t.location!==!1,r=F7(e),o=()=>r.index(),i=()=>O7(r.line(),r.column(),r.index()),s=i(),a=o(),l={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},h=()=>l,{onError:d}=t;function p(w,v,L,...K){const J=h();if(v.column+=L,v.offset+=L,d){const re=n?wu(J.startLoc,v):null,ae=Oo(w,re,{domain:j7,args:K});d(ae)}}function g(w,v,L){w.endLoc=i(),w.currentType=v;const K={type:v};return n&&(K.loc=wu(w.startLoc,w.endLoc)),L!=null&&(K.value=L),K}const C=w=>g(w,14);function _(w,v){return w.currentChar()===v?(w.next(),v):(p(Re.EXPECTED_TOKEN,i(),0,v),"")}function $(w){let v="";for(;w.currentPeek()===zn||w.currentPeek()===Lt;)v+=w.currentPeek(),w.peek();return v}function k(w){const v=$(w);return w.skipToPeek(),v}function A(w){if(w===lr)return!1;const v=w.charCodeAt(0);return v>=97&&v<=122||v>=65&&v<=90||v===95}function E(w){if(w===lr)return!1;const v=w.charCodeAt(0);return v>=48&&v<=57}function z(w,v){const{currentType:L}=v;if(L!==2)return!1;$(w);const K=A(w.currentPeek());return w.resetPeek(),K}function N(w,v){const{currentType:L}=v;if(L!==2)return!1;$(w);const K=w.currentPeek()==="-"?w.peek():w.currentPeek(),J=E(K);return w.resetPeek(),J}function V(w,v){const{currentType:L}=v;if(L!==2)return!1;$(w);const K=w.currentPeek()===hh;return w.resetPeek(),K}function q(w,v){const{currentType:L}=v;if(L!==8)return!1;$(w);const K=w.currentPeek()===".";return w.resetPeek(),K}function Z(w,v){const{currentType:L}=v;if(L!==9)return!1;$(w);const K=A(w.currentPeek());return w.resetPeek(),K}function y(w,v){const{currentType:L}=v;if(!(L===8||L===12))return!1;$(w);const K=w.currentPeek()===":";return w.resetPeek(),K}function x(w,v){const{currentType:L}=v;if(L!==10)return!1;const K=()=>{const re=w.currentPeek();return re==="{"?A(w.peek()):re==="@"||re==="%"||re==="|"||re===":"||re==="."||re===zn||!re?!1:re===Lt?(w.peek(),K()):A(re)},J=K();return w.resetPeek(),J}function S(w){$(w);const v=w.currentPeek()==="|";return w.resetPeek(),v}function P(w){const v=$(w),L=w.currentPeek()==="%"&&w.peek()==="{";return w.resetPeek(),{isModulo:L,hasSpace:v.length>0}}function I(w,v=!0){const L=(J=!1,re="",ae=!1)=>{const le=w.currentPeek();return le==="{"?re==="%"?!1:J:le==="@"||!le?re==="%"?!0:J:le==="%"?(w.peek(),L(J,"%",!0)):le==="|"?re==="%"||ae?!0:!(re===zn||re===Lt):le===zn?(w.peek(),L(!0,zn,ae)):le===Lt?(w.peek(),L(!0,Lt,ae)):!0},K=L();return v&&w.resetPeek(),K}function W(w,v){const L=w.currentChar();return L===lr?lr:v(L)?(w.next(),L):null}function j(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=97&&K<=122||K>=65&&K<=90||K>=48&&K<=57||K===95||K===36})}function O(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=48&&K<=57})}function R(w){return W(w,L=>{const K=L.charCodeAt(0);return K>=48&&K<=57||K>=65&&K<=70||K>=97&&K<=102})}function U(w){let v="",L="";for(;v=O(w);)L+=v;return L}function D(w){k(w);const v=w.currentChar();return v!=="%"&&p(Re.EXPECTED_TOKEN,i(),0,v),w.next(),"%"}function G(w){let v="";for(;;){const L=w.currentChar();if(L==="{"||L==="}"||L==="@"||L==="|"||!L)break;if(L==="%")if(I(w))v+=L,w.next();else break;else if(L===zn||L===Lt)if(I(w))v+=L,w.next();else{if(S(w))break;v+=L,w.next()}else v+=L,w.next()}return v}function te(w){k(w);let v="",L="";for(;v=j(w);)L+=v;return w.currentChar()===lr&&p(Re.UNTERMINATED_CLOSING_BRACE,i(),0),L}function ne(w){k(w);let v="";return w.currentChar()==="-"?(w.next(),v+=`-${U(w)}`):v+=U(w),w.currentChar()===lr&&p(Re.UNTERMINATED_CLOSING_BRACE,i(),0),v}function fe(w){k(w),_(w,"'");let v="",L="";const K=re=>re!==hh&&re!==Lt;for(;v=W(w,K);)v==="\\"?L+=_e(w):L+=v;const J=w.currentChar();return J===Lt||J===lr?(p(Re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),J===Lt&&(w.next(),_(w,"'")),L):(_(w,"'"),L)}function _e(w){const v=w.currentChar();switch(v){case"\\":case"'":return w.next(),`\\${v}`;case"u":return Ae(w,v,4);case"U":return Ae(w,v,6);default:return p(Re.UNKNOWN_ESCAPE_SEQUENCE,i(),0,v),""}}function Ae(w,v,L){_(w,v);let K="";for(let J=0;J<L;J++){const re=R(w);if(!re){p(Re.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${v}${K}${w.currentChar()}`);break}K+=re}return`\\${v}${K}`}function xe(w){k(w);let v="",L="";const K=J=>J!=="{"&&J!=="}"&&J!==zn&&J!==Lt;for(;v=W(w,K);)L+=v;return L}function Ee(w){let v="",L="";for(;v=j(w);)L+=v;return L}function Q(w){const v=(L=!1,K)=>{const J=w.currentChar();return J==="{"||J==="%"||J==="@"||J==="|"||J==="("||J===")"||!J||J===zn?K:J===Lt||J===W7?(K+=J,w.next(),v(L,K)):(K+=J,w.next(),v(!0,K))};return v(!1,"")}function ue(w){k(w);const v=_(w,"|");return k(w),v}function oe(w,v){let L=null;switch(w.currentChar()){case"{":return v.braceNest>=1&&p(Re.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),w.next(),L=g(v,2,"{"),k(w),v.braceNest++,L;case"}":return v.braceNest>0&&v.currentType===2&&p(Re.EMPTY_PLACEHOLDER,i(),0),w.next(),L=g(v,3,"}"),v.braceNest--,v.braceNest>0&&k(w),v.inLinked&&v.braceNest===0&&(v.inLinked=!1),L;case"@":return v.braceNest>0&&p(Re.UNTERMINATED_CLOSING_BRACE,i(),0),L=de(w,v)||C(v),v.braceNest=0,L;default:let J=!0,re=!0,ae=!0;if(S(w))return v.braceNest>0&&p(Re.UNTERMINATED_CLOSING_BRACE,i(),0),L=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,L;if(v.braceNest>0&&(v.currentType===5||v.currentType===6||v.currentType===7))return p(Re.UNTERMINATED_CLOSING_BRACE,i(),0),v.braceNest=0,Ce(w,v);if(J=z(w,v))return L=g(v,5,te(w)),k(w),L;if(re=N(w,v))return L=g(v,6,ne(w)),k(w),L;if(ae=V(w,v))return L=g(v,7,fe(w)),k(w),L;if(!J&&!re&&!ae)return L=g(v,13,xe(w)),p(Re.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,L.value),k(w),L;break}return L}function de(w,v){const{currentType:L}=v;let K=null;const J=w.currentChar();switch((L===8||L===9||L===12||L===10)&&(J===Lt||J===zn)&&p(Re.INVALID_LINKED_FORMAT,i(),0),J){case"@":return w.next(),K=g(v,8,"@"),v.inLinked=!0,K;case".":return k(w),w.next(),g(v,9,".");case":":return k(w),w.next(),g(v,10,":");default:return S(w)?(K=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,K):q(w,v)||y(w,v)?(k(w),de(w,v)):Z(w,v)?(k(w),g(v,12,Ee(w))):x(w,v)?(k(w),J==="{"?oe(w,v)||K:g(v,11,Q(w))):(L===8&&p(Re.INVALID_LINKED_FORMAT,i(),0),v.braceNest=0,v.inLinked=!1,Ce(w,v))}}function Ce(w,v){let L={type:14};if(v.braceNest>0)return oe(w,v)||C(v);if(v.inLinked)return de(w,v)||C(v);switch(w.currentChar()){case"{":return oe(w,v)||C(v);case"}":return p(Re.UNBALANCED_CLOSING_BRACE,i(),0),w.next(),g(v,3,"}");case"@":return de(w,v)||C(v);default:if(S(w))return L=g(v,1,ue(w)),v.braceNest=0,v.inLinked=!1,L;const{isModulo:J,hasSpace:re}=P(w);if(J)return re?g(v,0,G(w)):g(v,4,D(w));if(I(w))return g(v,0,G(w));break}return L}function M(){const{currentType:w,offset:v,startLoc:L,endLoc:K}=l;return l.lastType=w,l.lastOffset=v,l.lastStartLoc=L,l.lastEndLoc=K,l.offset=o(),l.startLoc=i(),r.currentChar()===lr?g(l,14):Ce(r,l)}return{nextToken:M,currentOffset:o,currentPosition:i,context:h}}const z7="parser",V7=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function G7(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(t||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function K7(e={}){const t=e.location!==!1,{onError:n}=e;function r(A,E,z,N,...V){const q=A.currentPosition();if(q.offset+=N,q.column+=N,n){const Z=t?wu(z,q):null,y=Oo(E,Z,{domain:z7,args:V});n(y)}}function o(A,E,z){const N={type:A};return t&&(N.start=E,N.end=E,N.loc={start:z,end:z}),N}function i(A,E,z,N){N&&(A.type=N),t&&(A.end=E,A.loc&&(A.loc.end=z))}function s(A,E){const z=A.context(),N=o(3,z.offset,z.startLoc);return N.value=E,i(N,A.currentOffset(),A.currentPosition()),N}function a(A,E){const z=A.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(5,N,V);return q.index=parseInt(E,10),A.nextToken(),i(q,A.currentOffset(),A.currentPosition()),q}function l(A,E){const z=A.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(4,N,V);return q.key=E,A.nextToken(),i(q,A.currentOffset(),A.currentPosition()),q}function h(A,E){const z=A.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(9,N,V);return q.value=E.replace(V7,G7),A.nextToken(),i(q,A.currentOffset(),A.currentPosition()),q}function d(A){const E=A.nextToken(),z=A.context(),{lastOffset:N,lastStartLoc:V}=z,q=o(8,N,V);return E.type!==12?(r(A,Re.UNEXPECTED_EMPTY_LINKED_MODIFIER,z.lastStartLoc,0),q.value="",i(q,N,V),{nextConsumeToken:E,node:q}):(E.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,Sn(E)),q.value=E.value||"",i(q,A.currentOffset(),A.currentPosition()),{node:q})}function p(A,E){const z=A.context(),N=o(7,z.offset,z.startLoc);return N.value=E,i(N,A.currentOffset(),A.currentPosition()),N}function g(A){const E=A.context(),z=o(6,E.offset,E.startLoc);let N=A.nextToken();if(N.type===9){const V=d(A);z.modifier=V.node,N=V.nextConsumeToken||A.nextToken()}switch(N.type!==10&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(N)),N=A.nextToken(),N.type===2&&(N=A.nextToken()),N.type){case 11:N.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(N)),z.key=p(A,N.value||"");break;case 5:N.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(N)),z.key=l(A,N.value||"");break;case 6:N.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(N)),z.key=a(A,N.value||"");break;case 7:N.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(N)),z.key=h(A,N.value||"");break;default:r(A,Re.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const V=A.context(),q=o(7,V.offset,V.startLoc);return q.value="",i(q,V.offset,V.startLoc),z.key=q,i(z,V.offset,V.startLoc),{nextConsumeToken:N,node:z}}return i(z,A.currentOffset(),A.currentPosition()),{node:z}}function C(A){const E=A.context(),z=E.currentType===1?A.currentOffset():E.offset,N=E.currentType===1?E.endLoc:E.startLoc,V=o(2,z,N);V.items=[];let q=null;do{const x=q||A.nextToken();switch(q=null,x.type){case 0:x.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(x)),V.items.push(s(A,x.value||""));break;case 6:x.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(x)),V.items.push(a(A,x.value||""));break;case 5:x.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(x)),V.items.push(l(A,x.value||""));break;case 7:x.value==null&&r(A,Re.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Sn(x)),V.items.push(h(A,x.value||""));break;case 8:const S=g(A);V.items.push(S.node),q=S.nextConsumeToken||null;break}}while(E.currentType!==14&&E.currentType!==1);const Z=E.currentType===1?E.lastOffset:A.currentOffset(),y=E.currentType===1?E.lastEndLoc:A.currentPosition();return i(V,Z,y),V}function _(A,E,z,N){const V=A.context();let q=N.items.length===0;const Z=o(1,E,z);Z.cases=[],Z.cases.push(N);do{const y=C(A);q||(q=y.items.length===0),Z.cases.push(y)}while(V.currentType!==14);return q&&r(A,Re.MUST_HAVE_MESSAGES_IN_PLURAL,z,0),i(Z,A.currentOffset(),A.currentPosition()),Z}function $(A){const E=A.context(),{offset:z,startLoc:N}=E,V=C(A);return E.currentType===14?V:_(A,z,N,V)}function k(A){const E=H7(A,Fg({},e)),z=E.context(),N=o(0,z.offset,z.startLoc);return t&&N.loc&&(N.loc.source=A),N.body=$(E),e.onCacheKey&&(N.cacheKey=e.onCacheKey(A)),z.currentType!==14&&r(E,Re.UNEXPECTED_LEXICAL_ANALYSIS,z.lastStartLoc,0,A[z.offset]||""),i(N,E.currentOffset(),E.currentPosition()),N}return{parse:k}}function Sn(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function q7(e,t={}){const n={ast:e,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function ph(e,t){for(let n=0;n<e.length;n++)Ff(e[n],t)}function Ff(e,t){switch(e.type){case 1:ph(e.cases,t),t.helper("plural");break;case 2:ph(e.items,t);break;case 6:Ff(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Z7(e,t={}){const n=q7(e);n.helper("normalize"),e.body&&Ff(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function Y7(e){const t=e.body;return t.type===2?gh(t):t.cases.forEach(n=>gh(n)),e}function gh(e){if(e.items.length===1){const t=e.items[0];(t.type===3||t.type===9)&&(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;t.push(r.value)}if(t.length===e.items.length){e.static=Wg(t);for(let n=0;n<e.items.length;n++){const r=e.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const J7="minifier";function Fi(e){switch(e.t=e.type,e.type){case 0:const t=e;Fi(t.body),t.b=t.body,delete t.body;break;case 1:const n=e,r=n.cases;for(let d=0;d<r.length;d++)Fi(r[d]);n.c=r,delete n.cases;break;case 2:const o=e,i=o.items;for(let d=0;d<i.length;d++)Fi(i[d]);o.i=i,delete o.items,o.static&&(o.s=o.static,delete o.static);break;case 3:case 9:case 8:case 7:const s=e;s.value&&(s.v=s.value,delete s.value);break;case 6:const a=e;Fi(a.key),a.k=a.key,delete a.key,a.modifier&&(Fi(a.modifier),a.m=a.modifier,delete a.modifier);break;case 5:const l=e;l.i=l.index,delete l.index;break;case 4:const h=e;h.k=h.key,delete h.key;break;default:throw Oo(Re.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:J7,args:[e.type]})}delete e.type}const Q7="parser";function X7(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:i}=t,s=t.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:i,indentLevel:0};s&&e.loc&&(a.source=e.loc.source);const l=()=>a;function h(k,A){a.code+=k}function d(k,A=!0){const E=A?o:"";h(i?E+"  ".repeat(k):E)}function p(k=!0){const A=++a.indentLevel;k&&d(A)}function g(k=!0){const A=--a.indentLevel;k&&d(A)}function C(){d(a.indentLevel)}return{context:l,push:h,indent:p,deindent:g,newline:C,helper:k=>`_${k}`,needIndent:()=>a.needIndent}}function eE(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),vo(e,t.key),t.modifier?(e.push(", "),vo(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function tE(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let i=0;i<o&&(vo(e,t.items[i]),i!==o-1);i++)e.push(", ");e.deindent(r()),e.push("])")}function nE(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let i=0;i<o&&(vo(e,t.cases[i]),i!==o-1);i++)e.push(", ");e.deindent(r()),e.push("])")}}function rE(e,t){t.body?vo(e,t.body):e.push("null")}function vo(e,t){const{helper:n}=e;switch(t.type){case 0:rE(e,t);break;case 1:nE(e,t);break;case 2:tE(e,t);break;case 6:eE(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:throw Oo(Re.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Q7,args:[t.type]})}}const iE=(e,t={})=>{const n=dh(t.mode)?t.mode:"normal",r=dh(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,i=t.breakLineCode!=null?t.breakLineCode:n==="arrow"?";":`
`,s=t.needIndent?t.needIndent:n!=="arrow",a=e.helpers||[],l=X7(e,{mode:n,filename:r,sourceMap:o,breakLineCode:i,needIndent:s});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),a.length>0&&(l.push(`const { ${Wg(a.map(p=>`${p}: _${p}`),", ")} } = ctx`),l.newline()),l.push("return "),vo(l,e),l.deindent(s),l.push("}"),delete e.helpers;const{code:h,map:d}=l.context();return{ast:e,code:h,map:d?d.toJSON():void 0}};function oE(e,t={}){const n=Fg({},t),r=!!n.jit,o=!!n.minify,i=n.optimize==null?!0:n.optimize,a=K7(n).parse(e);return r?(i&&Y7(a),o&&Fi(a),{ast:a,code:""}):(Z7(a,n),iE(a,n))}/*!
  * core-base v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function sE(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Kn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Fr=[];Fr[0]={w:[0],i:[3,0],"[":[4],o:[7]};Fr[1]={w:[1],".":[2],"[":[4],o:[7]};Fr[2]={w:[2],i:[3,0],0:[3,0]};Fr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Fr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Fr[5]={"'":[4,0],o:8,l:[5,0]};Fr[6]={'"':[4,0],o:8,l:[6,0]};const aE=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function lE(e){return aE.test(e)}function cE(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function uE(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function fE(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:lE(t)?cE(t):"*"+t}function dE(e){const t=[];let n=-1,r=0,o=0,i,s,a,l,h,d,p;const g=[];g[0]=()=>{s===void 0?s=a:s+=a},g[1]=()=>{s!==void 0&&(t.push(s),s=void 0)},g[2]=()=>{g[0](),o++},g[3]=()=>{if(o>0)o--,r=4,g[0]();else{if(o=0,s===void 0||(s=fE(s),s===!1))return!1;g[1]()}};function C(){const _=e[n+1];if(r===5&&_==="'"||r===6&&_==='"')return n++,a="\\"+_,g[0](),!0}for(;r!==null;)if(n++,i=e[n],!(i==="\\"&&C())){if(l=uE(i),p=Fr[r],h=p[l]||p.l||8,h===8||(r=h[0],h[1]!==void 0&&(d=g[h[1]],d&&(a=i,d()===!1))))return;if(r===7)return t}}const mh=new Map;function hE(e,t){return Ye(e)?e[t]:null}function pE(e,t){if(!Ye(e))return null;let n=mh.get(t);if(n||(n=dE(t),n&&mh.set(t,n)),!n)return null;const r=n.length;let o=e,i=0;for(;i<r;){const s=o[n[i]];if(s===void 0||rt(o))return null;o=s,i++}return o}const gE=e=>e,mE=e=>"",wE="text",vE=e=>e.length===0?"":I7(e),bE=$7;function wh(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function yE(e){const t=dt(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(dt(e.named.count)||dt(e.named.n))?dt(e.named.count)?e.named.count:dt(e.named.n)?e.named.n:t:t}function _E(e,t){t.count||(t.count=e),t.n||(t.n=e)}function xE(e={}){const t=e.locale,n=yE(e),r=Ye(e.pluralRules)&&me(t)&&rt(e.pluralRules[t])?e.pluralRules[t]:wh,o=Ye(e.pluralRules)&&me(t)&&rt(e.pluralRules[t])?wh:void 0,i=A=>A[r(n,A.length,o)],s=e.list||[],a=A=>s[A],l=e.named||{};dt(e.pluralIndex)&&_E(n,l);const h=A=>l[A];function d(A){const E=rt(e.messages)?e.messages(A):Ye(e.messages)?e.messages[A]:!1;return E||(e.parent?e.parent.message(A):mE)}const p=A=>e.modifiers?e.modifiers[A]:gE,g=Le(e.processor)&&rt(e.processor.normalize)?e.processor.normalize:vE,C=Le(e.processor)&&rt(e.processor.interpolate)?e.processor.interpolate:bE,_=Le(e.processor)&&me(e.processor.type)?e.processor.type:wE,k={list:a,named:h,plural:i,linked:(A,...E)=>{const[z,N]=E;let V="text",q="";E.length===1?Ye(z)?(q=z.modifier||q,V=z.type||V):me(z)&&(q=z||q):E.length===2&&(me(z)&&(q=z||q),me(N)&&(V=N||V));const Z=d(A)(k),y=V==="vnode"&&tt(Z)&&q?Z[0]:Z;return q?p(q)(y,V):y},message:d,type:_,interpolate:C,normalize:g,values:Tt({},s,l)};return k}let ks=null;function EE(e){ks=e}function CE(e,t,n){ks&&ks.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}const AE=TE("function:translate");function TE(e){return t=>ks&&ks.emit(e,t)}const SE={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Wf(e,t){return t.locale!=null?vh(t.locale):vh(e.locale)}let Tc;function vh(e){return me(e)?e:Tc!=null&&e.resolvedOnce?Tc:Tc=e()}function $E(e,t,n){return[...new Set([n,...tt(t)?t:Ye(t)?Object.keys(t):me(t)?[t]:[n]])]}function jg(e,t,n){const r=me(n)?n:bo,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let i=o.__localeChainCache.get(r);if(!i){i=[];let s=[n];for(;tt(s);)s=bh(i,s,t);const a=tt(t)||!Le(t)?t:t.default?t.default:null;s=me(a)?[a]:a,tt(s)&&bh(i,s,!1),o.__localeChainCache.set(r,i)}return i}function bh(e,t,n){let r=!0;for(let o=0;o<t.length&&Ue(r);o++){const i=t[o];me(i)&&(r=IE(e,t[o],n))}return r}function IE(e,t,n){let r;const o=t.split("-");do{const i=o.join("-");r=RE(e,i,n),o.splice(-1,1)}while(o.length&&r===!0);return r}function RE(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const o=t.replace(/!/g,"");e.push(o),(tt(n)||Le(n))&&n[o]&&(r=n[o])}return r}const OE="9.7.0",Fl=-1,bo="en-US",yh="",_h=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function NE(){return{upper:(e,t)=>t==="text"&&me(e)?e.toUpperCase():t==="vnode"&&Ye(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&me(e)?e.toLowerCase():t==="vnode"&&Ye(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&me(e)?_h(e):t==="vnode"&&Ye(e)&&"__v_isVNode"in e?_h(e.children):e}}let Hg;function xh(e){Hg=e}let zg;function LE(e){zg=e}let Vg;function PE(e){Vg=e}let Gg=null;const kE=e=>{Gg=e},ME=()=>Gg;let Kg=null;const Eh=e=>{Kg=e},BE=()=>Kg;let Ch=0;function DE(e={}){const t=rt(e.onWarn)?e.onWarn:R7,n=me(e.version)?e.version:OE,r=me(e.locale)||rt(e.locale)?e.locale:bo,o=rt(r)?bo:r,i=tt(e.fallbackLocale)||Le(e.fallbackLocale)||me(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:o,s=Le(e.messages)?e.messages:{[o]:{}},a=Le(e.datetimeFormats)?e.datetimeFormats:{[o]:{}},l=Le(e.numberFormats)?e.numberFormats:{[o]:{}},h=Tt({},e.modifiers||{},NE()),d=e.pluralRules||{},p=rt(e.missing)?e.missing:null,g=Ue(e.missingWarn)||Pr(e.missingWarn)?e.missingWarn:!0,C=Ue(e.fallbackWarn)||Pr(e.fallbackWarn)?e.fallbackWarn:!0,_=!!e.fallbackFormat,$=!!e.unresolving,k=rt(e.postTranslation)?e.postTranslation:null,A=Le(e.processor)?e.processor:null,E=Ue(e.warnHtmlMessage)?e.warnHtmlMessage:!0,z=!!e.escapeParameter,N=rt(e.messageCompiler)?e.messageCompiler:Hg,V=rt(e.messageResolver)?e.messageResolver:zg||hE,q=rt(e.localeFallbacker)?e.localeFallbacker:Vg||$E,Z=Ye(e.fallbackContext)?e.fallbackContext:void 0,y=e,x=Ye(y.__datetimeFormatters)?y.__datetimeFormatters:new Map,S=Ye(y.__numberFormatters)?y.__numberFormatters:new Map,P=Ye(y.__meta)?y.__meta:{};Ch++;const I={version:n,cid:Ch,locale:r,fallbackLocale:i,messages:s,modifiers:h,pluralRules:d,missing:p,missingWarn:g,fallbackWarn:C,fallbackFormat:_,unresolving:$,postTranslation:k,processor:A,warnHtmlMessage:E,escapeParameter:z,messageCompiler:N,messageResolver:V,localeFallbacker:q,fallbackContext:Z,onWarn:t,__meta:P};return I.datetimeFormats=a,I.numberFormats=l,I.__datetimeFormatters=x,I.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&CE(I,n,P),I}function jf(e,t,n,r,o){const{missing:i,onWarn:s}=e;if(i!==null){const a=i(e,n,t,o);return me(a)?a:t}else return t}function Wo(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function Sc(e){return n=>UE(n,e)}function UE(e,t){const n=t.b||t.body;if((n.t||n.type)===1){const r=n,o=r.c||r.cases;return e.plural(o.reduce((i,s)=>[...i,Ah(e,s)],[]))}else return Ah(e,n)}function Ah(e,t){const n=t.s||t.static;if(n)return e.type==="text"?n:e.normalize([n]);{const r=(t.i||t.items).reduce((o,i)=>[...o,vu(e,i)],[]);return e.normalize(r)}}function vu(e,t){const n=t.t||t.type;switch(n){case 3:const r=t;return r.v||r.value;case 9:const o=t;return o.v||o.value;case 4:const i=t;return e.interpolate(e.named(i.k||i.key));case 5:const s=t;return e.interpolate(e.list(s.i!=null?s.i:s.index));case 6:const a=t,l=a.m||a.modifier;return e.linked(vu(e,a.k||a.key),l?vu(e,l):void 0,e.type);case 7:const h=t;return h.v||h.value;case 8:const d=t;return d.v||d.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const qg=Re.__EXTEND_POINT__,da=Uf(qg),yr={INVALID_ARGUMENT:qg,INVALID_DATE_ARGUMENT:da(),INVALID_ISO_DATE_ARGUMENT:da(),NOT_SUPPORT_NON_STRING_MESSAGE:da(),__EXTEND_POINT__:da()};function ri(e){return Oo(e,null,void 0)}const Zg=e=>e;let Hi=Object.create(null);const yo=e=>Ye(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e);function Yg(e,t={}){let n=!1;const r=t.onError||M7;return t.onError=o=>{n=!0,r(o)},{...oE(e,t),detectError:n}}const FE=(e,t)=>{if(!me(e))throw ri(yr.NOT_SUPPORT_NON_STRING_MESSAGE);{Ue(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||Zg)(e),o=Hi[r];if(o)return o;const{code:i,detectError:s}=Yg(e,t),a=new Function(`return ${i}`)();return s?a:Hi[r]=a}};function WE(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&me(e)){Ue(t.warnHtmlMessage)&&t.warnHtmlMessage;const r=(t.onCacheKey||Zg)(e),o=Hi[r];if(o)return o;const{ast:i,detectError:s}=Yg(e,{...t,location:!1,jit:!0}),a=Sc(i);return s?a:Hi[r]=a}else{const n=e.cacheKey;if(n){const r=Hi[n];return r||(Hi[n]=Sc(e))}else return Sc(e)}}const Th=()=>"",an=e=>rt(e);function Sh(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:o,messageCompiler:i,fallbackLocale:s,messages:a}=e,[l,h]=bu(...t),d=Ue(h.missingWarn)?h.missingWarn:e.missingWarn,p=Ue(h.fallbackWarn)?h.fallbackWarn:e.fallbackWarn,g=Ue(h.escapeParameter)?h.escapeParameter:e.escapeParameter,C=!!h.resolvedMessage,_=me(h.default)||Ue(h.default)?Ue(h.default)?i?l:()=>l:h.default:n?i?l:()=>l:"",$=n||_!=="",k=Wf(e,h);g&&jE(h);let[A,E,z]=C?[l,k,a[k]||{}]:Jg(e,l,k,s,p,d),N=A,V=l;if(!C&&!(me(N)||yo(N)||an(N))&&$&&(N=_,V=N),!C&&(!(me(N)||yo(N)||an(N))||!me(E)))return o?Fl:l;let q=!1;const Z=()=>{q=!0},y=an(N)?N:Qg(e,l,E,N,V,Z);if(q)return N;const x=VE(e,E,z,h),S=xE(x),P=HE(e,y,S),I=r?r(P,l):P;if(__INTLIFY_PROD_DEVTOOLS__){const W={timestamp:Date.now(),key:me(l)?l:an(N)?N.key:"",locale:E||(an(N)?N.locale:""),format:me(N)?N:an(N)?N.source:"",message:I};W.meta=Tt({},e.__meta,ME()||{}),AE(W)}return I}function jE(e){tt(e.list)?e.list=e.list.map(t=>me(t)?fh(t):t):Ye(e.named)&&Object.keys(e.named).forEach(t=>{me(e.named[t])&&(e.named[t]=fh(e.named[t]))})}function Jg(e,t,n,r,o,i){const{messages:s,onWarn:a,messageResolver:l,localeFallbacker:h}=e,d=h(e,r,n);let p={},g,C=null;const _="translate";for(let $=0;$<d.length&&(g=d[$],p=s[g]||{},(C=l(p,t))===null&&(C=p[t]),!(me(C)||yo(C)||an(C)));$++){const k=jf(e,t,g,i,_);k!==t&&(C=k)}return[C,g,p]}function Qg(e,t,n,r,o,i){const{messageCompiler:s,warnHtmlMessage:a}=e;if(an(r)){const h=r;return h.locale=h.locale||n,h.key=h.key||t,h}if(s==null){const h=()=>r;return h.locale=n,h.key=t,h}const l=s(r,zE(e,n,o,r,a,i));return l.locale=n,l.key=t,l.source=r,l}function HE(e,t,n){return t(n)}function bu(...e){const[t,n,r]=e,o={};if(!me(t)&&!dt(t)&&!an(t)&&!yo(t))throw ri(yr.INVALID_ARGUMENT);const i=dt(t)?String(t):(an(t),t);return dt(n)?o.plural=n:me(n)?o.default=n:Le(n)&&!Ul(n)?o.named=n:tt(n)&&(o.list=n),dt(r)?o.plural=r:me(r)?o.default=r:Le(r)&&Tt(o,r),[i,o]}function zE(e,t,n,r,o,i){return{locale:t,key:n,warnHtmlMessage:o,onError:s=>{throw i&&i(s),s},onCacheKey:s=>C7(t,n,s)}}function VE(e,t,n,r){const{modifiers:o,pluralRules:i,messageResolver:s,fallbackLocale:a,fallbackWarn:l,missingWarn:h,fallbackContext:d}=e,g={locale:t,modifiers:o,pluralRules:i,messages:C=>{let _=s(n,C);if(_==null&&d){const[,,$]=Jg(d,C,t,a,l,h);_=s($,C)}if(me(_)||yo(_)){let $=!1;const A=Qg(e,C,t,_,C,()=>{$=!0});return $?Th:A}else return an(_)?_:Th}};return e.processor&&(g.processor=e.processor),r.list&&(g.list=r.list),r.named&&(g.named=r.named),dt(r.plural)&&(g.pluralIndex=r.plural),g}function $h(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__datetimeFormatters:a}=e,[l,h,d,p]=yu(...t),g=Ue(d.missingWarn)?d.missingWarn:e.missingWarn;Ue(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const C=!!d.part,_=Wf(e,d),$=s(e,o,_);if(!me(l)||l==="")return new Intl.DateTimeFormat(_,p).format(h);let k={},A,E=null;const z="datetime format";for(let q=0;q<$.length&&(A=$[q],k=n[A]||{},E=k[l],!Le(E));q++)jf(e,l,A,g,z);if(!Le(E)||!me(A))return r?Fl:l;let N=`${A}__${l}`;Ul(p)||(N=`${N}__${JSON.stringify(p)}`);let V=a.get(N);return V||(V=new Intl.DateTimeFormat(A,Tt({},E,p)),a.set(N,V)),C?V.formatToParts(h):V.format(h)}const Xg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function yu(...e){const[t,n,r,o]=e,i={};let s={},a;if(me(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw ri(yr.INVALID_ISO_DATE_ARGUMENT);const h=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(h);try{a.toISOString()}catch{throw ri(yr.INVALID_ISO_DATE_ARGUMENT)}}else if(T7(t)){if(isNaN(t.getTime()))throw ri(yr.INVALID_DATE_ARGUMENT);a=t}else if(dt(t))a=t;else throw ri(yr.INVALID_ARGUMENT);return me(n)?i.key=n:Le(n)&&Object.keys(n).forEach(l=>{Xg.includes(l)?s[l]=n[l]:i[l]=n[l]}),me(r)?i.locale=r:Le(r)&&(s=r),Le(o)&&(s=o),[i.key||"",a,i,s]}function Ih(e,t,n){const r=e;for(const o in n){const i=`${t}__${o}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Rh(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:i,localeFallbacker:s}=e,{__numberFormatters:a}=e,[l,h,d,p]=_u(...t),g=Ue(d.missingWarn)?d.missingWarn:e.missingWarn;Ue(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const C=!!d.part,_=Wf(e,d),$=s(e,o,_);if(!me(l)||l==="")return new Intl.NumberFormat(_,p).format(h);let k={},A,E=null;const z="number format";for(let q=0;q<$.length&&(A=$[q],k=n[A]||{},E=k[l],!Le(E));q++)jf(e,l,A,g,z);if(!Le(E)||!me(A))return r?Fl:l;let N=`${A}__${l}`;Ul(p)||(N=`${N}__${JSON.stringify(p)}`);let V=a.get(N);return V||(V=new Intl.NumberFormat(A,Tt({},E,p)),a.set(N,V)),C?V.formatToParts(h):V.format(h)}const em=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function _u(...e){const[t,n,r,o]=e,i={};let s={};if(!dt(t))throw ri(yr.INVALID_ARGUMENT);const a=t;return me(n)?i.key=n:Le(n)&&Object.keys(n).forEach(l=>{em.includes(l)?s[l]=n[l]:i[l]=n[l]}),me(r)?i.locale=r:Le(r)&&(s=r),Le(o)&&(s=o),[i.key||"",a,i,s]}function Oh(e,t,n){const r=e;for(const o in n){const i=`${t}__${o}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}sE();/*!
  * vue-i18n v9.7.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const GE="9.7.0";function KE(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Kn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Kn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Kn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Kn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Kn().__INTLIFY_PROD_DEVTOOLS__=!1)}const tm=SE.__EXTEND_POINT__,cr=Uf(tm);cr(),cr(),cr(),cr(),cr(),cr(),cr(),cr();const nm=yr.__EXTEND_POINT__,Ft=Uf(nm),gt={UNEXPECTED_RETURN_TYPE:nm,INVALID_ARGUMENT:Ft(),MUST_BE_CALL_SETUP_TOP:Ft(),NOT_INSTALLED:Ft(),NOT_AVAILABLE_IN_LEGACY_MODE:Ft(),REQUIRED_VALUE:Ft(),INVALID_VALUE:Ft(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Ft(),NOT_INSTALLED_WITH_PROVIDE:Ft(),UNEXPECTED_ERROR:Ft(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Ft(),BRIDGE_SUPPORT_VUE_2_ONLY:Ft(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Ft(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Ft(),__EXTEND_POINT__:Ft()};function xt(e,...t){return Oo(e,null,void 0)}const xu=Ur("__translateVNode"),Eu=Ur("__datetimeParts"),Cu=Ur("__numberParts"),rm=Ur("__setPluralRules"),im=Ur("__injectWithOption"),Au=Ur("__dispose");function Ms(e){if(!Ye(e))return e;for(const t in e)if(Ps(e,t))if(!t.includes("."))Ye(e[t])&&Ms(e[t]);else{const n=t.split("."),r=n.length-1;let o=e,i=!1;for(let s=0;s<r;s++){if(n[s]in o||(o[n[s]]={}),!Ye(o[n[s]])){i=!0;break}o=o[n[s]]}i||(o[n[r]]=e[t],delete e[t]),Ye(o[n[r]])&&Ms(o[n[r]])}return e}function Wl(e,t){const{messages:n,__i18n:r,messageResolver:o,flatJson:i}=t,s=Le(n)?n:tt(r)?{}:{[e]:{}};if(tt(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:h}=a;l?(s[l]=s[l]||{},ss(h,s[l])):ss(h,s)}else me(a)&&ss(JSON.parse(a),s)}),o==null&&i)for(const a in s)Ps(s,a)&&Ms(s[a]);return s}function om(e){return e.type}function sm(e,t,n){let r=Ye(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=Wl(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const o=Object.keys(r);o.length&&o.forEach(i=>{e.mergeLocaleMessage(i,r[i])});{if(Ye(t.datetimeFormats)){const i=Object.keys(t.datetimeFormats);i.length&&i.forEach(s=>{e.mergeDateTimeFormat(s,t.datetimeFormats[s])})}if(Ye(t.numberFormats)){const i=Object.keys(t.numberFormats);i.length&&i.forEach(s=>{e.mergeNumberFormat(s,t.numberFormats[s])})}}}function Nh(e){return Ve(Ds,null,e,0)}const Lh="__INTLIFY_META__",Ph=()=>[],qE=()=>!1;let kh=0;function Mh(e){return(t,n,r,o)=>e(n,r,yn()||void 0,o)}const ZE=()=>{const e=yn();let t=null;return e&&(t=om(e)[Lh])?{[Lh]:t}:null};function Hf(e={},t){const{__root:n,__injectWithOption:r}=e,o=n===void 0,i=e.flatJson;let s=Ue(e.inheritLocale)?e.inheritLocale:!0;const a=Ze(n&&s?n.locale.value:me(e.locale)?e.locale:bo),l=Ze(n&&s?n.fallbackLocale.value:me(e.fallbackLocale)||tt(e.fallbackLocale)||Le(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a.value),h=Ze(Wl(a.value,e)),d=Ze(Le(e.datetimeFormats)?e.datetimeFormats:{[a.value]:{}}),p=Ze(Le(e.numberFormats)?e.numberFormats:{[a.value]:{}});let g=n?n.missingWarn:Ue(e.missingWarn)||Pr(e.missingWarn)?e.missingWarn:!0,C=n?n.fallbackWarn:Ue(e.fallbackWarn)||Pr(e.fallbackWarn)?e.fallbackWarn:!0,_=n?n.fallbackRoot:Ue(e.fallbackRoot)?e.fallbackRoot:!0,$=!!e.fallbackFormat,k=rt(e.missing)?e.missing:null,A=rt(e.missing)?Mh(e.missing):null,E=rt(e.postTranslation)?e.postTranslation:null,z=n?n.warnHtmlMessage:Ue(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter;const V=n?n.modifiers:Le(e.modifiers)?e.modifiers:{};let q=e.pluralRules||n&&n.pluralRules,Z;Z=(()=>{o&&Eh(null);const H={version:GE,locale:a.value,fallbackLocale:l.value,messages:h.value,modifiers:V,pluralRules:q,missing:A===null?void 0:A,missingWarn:g,fallbackWarn:C,fallbackFormat:$,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:z,escapeParameter:N,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};H.datetimeFormats=d.value,H.numberFormats=p.value,H.__datetimeFormatters=Le(Z)?Z.__datetimeFormatters:void 0,H.__numberFormatters=Le(Z)?Z.__numberFormatters:void 0;const X=DE(H);return o&&Eh(X),X})(),Wo(Z,a.value,l.value);function x(){return[a.value,l.value,h.value,d.value,p.value]}const S=Fe({get:()=>a.value,set:H=>{a.value=H,Z.locale=a.value}}),P=Fe({get:()=>l.value,set:H=>{l.value=H,Z.fallbackLocale=l.value,Wo(Z,a.value,H)}}),I=Fe(()=>h.value),W=Fe(()=>d.value),j=Fe(()=>p.value);function O(){return rt(E)?E:null}function R(H){E=H,Z.postTranslation=H}function U(){return k}function D(H){H!==null&&(A=Mh(H)),k=H,Z.missing=A}const G=(H,X,m,f,c,u)=>{x();let b;try{__INTLIFY_PROD_DEVTOOLS__,o||(Z.fallbackContext=n?BE():void 0),b=H(Z)}finally{__INTLIFY_PROD_DEVTOOLS__,o||(Z.fallbackContext=void 0)}if(m!=="translate exists"&&dt(b)&&b===Fl||m==="translate exists"&&!b){const[T,B]=X();return n&&_?f(n):c(T)}else{if(u(b))return b;throw xt(gt.UNEXPECTED_RETURN_TYPE)}};function te(...H){return G(X=>Reflect.apply(Sh,null,[X,...H]),()=>bu(...H),"translate",X=>Reflect.apply(X.t,X,[...H]),X=>X,X=>me(X))}function ne(...H){const[X,m,f]=H;if(f&&!Ye(f))throw xt(gt.INVALID_ARGUMENT);return te(X,m,Tt({resolvedMessage:!0},f||{}))}function fe(...H){return G(X=>Reflect.apply($h,null,[X,...H]),()=>yu(...H),"datetime format",X=>Reflect.apply(X.d,X,[...H]),()=>yh,X=>me(X))}function _e(...H){return G(X=>Reflect.apply(Rh,null,[X,...H]),()=>_u(...H),"number format",X=>Reflect.apply(X.n,X,[...H]),()=>yh,X=>me(X))}function Ae(H){return H.map(X=>me(X)||dt(X)||Ue(X)?Nh(String(X)):X)}const Ee={normalize:Ae,interpolate:H=>H,type:"vnode"};function Q(...H){return G(X=>{let m;const f=X;try{f.processor=Ee,m=Reflect.apply(Sh,null,[f,...H])}finally{f.processor=null}return m},()=>bu(...H),"translate",X=>X[xu](...H),X=>[Nh(X)],X=>tt(X))}function ue(...H){return G(X=>Reflect.apply(Rh,null,[X,...H]),()=>_u(...H),"number format",X=>X[Cu](...H),Ph,X=>me(X)||tt(X))}function oe(...H){return G(X=>Reflect.apply($h,null,[X,...H]),()=>yu(...H),"datetime format",X=>X[Eu](...H),Ph,X=>me(X)||tt(X))}function de(H){q=H,Z.pluralRules=q}function Ce(H,X){return G(()=>{if(!H)return!1;const m=me(X)?X:a.value,f=v(m),c=Z.messageResolver(f,H);return yo(c)||an(c)||me(c)},()=>[H],"translate exists",m=>Reflect.apply(m.te,m,[H,X]),qE,m=>Ue(m))}function M(H){let X=null;const m=jg(Z,l.value,a.value);for(let f=0;f<m.length;f++){const c=h.value[m[f]]||{},u=Z.messageResolver(c,H);if(u!=null){X=u;break}}return X}function w(H){const X=M(H);return X??(n?n.tm(H)||{}:{})}function v(H){return h.value[H]||{}}function L(H,X){if(i){const m={[H]:X};for(const f in m)Ps(m,f)&&Ms(m[f]);X=m[H]}h.value[H]=X,Z.messages=h.value}function K(H,X){h.value[H]=h.value[H]||{};const m={[H]:X};for(const f in m)Ps(m,f)&&Ms(m[f]);X=m[H],ss(X,h.value[H]),Z.messages=h.value}function J(H){return d.value[H]||{}}function re(H,X){d.value[H]=X,Z.datetimeFormats=d.value,Ih(Z,H,X)}function ae(H,X){d.value[H]=Tt(d.value[H]||{},X),Z.datetimeFormats=d.value,Ih(Z,H,X)}function le(H){return p.value[H]||{}}function ie(H,X){p.value[H]=X,Z.numberFormats=p.value,Oh(Z,H,X)}function be(H,X){p.value[H]=Tt(p.value[H]||{},X),Z.numberFormats=p.value,Oh(Z,H,X)}kh++,n&&mu&&(Rt(n.locale,H=>{s&&(a.value=H,Z.locale=H,Wo(Z,a.value,l.value))}),Rt(n.fallbackLocale,H=>{s&&(l.value=H,Z.fallbackLocale=H,Wo(Z,a.value,l.value))}));const he={id:kh,locale:S,fallbackLocale:P,get inheritLocale(){return s},set inheritLocale(H){s=H,H&&n&&(a.value=n.locale.value,l.value=n.fallbackLocale.value,Wo(Z,a.value,l.value))},get availableLocales(){return Object.keys(h.value).sort()},messages:I,get modifiers(){return V},get pluralRules(){return q||{}},get isGlobal(){return o},get missingWarn(){return g},set missingWarn(H){g=H,Z.missingWarn=g},get fallbackWarn(){return C},set fallbackWarn(H){C=H,Z.fallbackWarn=C},get fallbackRoot(){return _},set fallbackRoot(H){_=H},get fallbackFormat(){return $},set fallbackFormat(H){$=H,Z.fallbackFormat=$},get warnHtmlMessage(){return z},set warnHtmlMessage(H){z=H,Z.warnHtmlMessage=H},get escapeParameter(){return N},set escapeParameter(H){N=H,Z.escapeParameter=H},t:te,getLocaleMessage:v,setLocaleMessage:L,mergeLocaleMessage:K,getPostTranslationHandler:O,setPostTranslationHandler:R,getMissingHandler:U,setMissingHandler:D,[rm]:de};return he.datetimeFormats=W,he.numberFormats=j,he.rt=ne,he.te=Ce,he.tm=w,he.d=fe,he.n=_e,he.getDateTimeFormat=J,he.setDateTimeFormat=re,he.mergeDateTimeFormat=ae,he.getNumberFormat=le,he.setNumberFormat=ie,he.mergeNumberFormat=be,he[im]=r,he[xu]=Q,he[Eu]=oe,he[Cu]=ue,he}function YE(e){const t=me(e.locale)?e.locale:bo,n=me(e.fallbackLocale)||tt(e.fallbackLocale)||Le(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,r=rt(e.missing)?e.missing:void 0,o=Ue(e.silentTranslationWarn)||Pr(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,i=Ue(e.silentFallbackWarn)||Pr(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,s=Ue(e.fallbackRoot)?e.fallbackRoot:!0,a=!!e.formatFallbackMessages,l=Le(e.modifiers)?e.modifiers:{},h=e.pluralizationRules,d=rt(e.postTranslation)?e.postTranslation:void 0,p=me(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,g=!!e.escapeParameterHtml,C=Ue(e.sync)?e.sync:!0;let _=e.messages;if(Le(e.sharedMessages)){const V=e.sharedMessages;_=Object.keys(V).reduce((Z,y)=>{const x=Z[y]||(Z[y]={});return Tt(x,V[y]),Z},_||{})}const{__i18n:$,__root:k,__injectWithOption:A}=e,E=e.datetimeFormats,z=e.numberFormats,N=e.flatJson;return{locale:t,fallbackLocale:n,messages:_,flatJson:N,datetimeFormats:E,numberFormats:z,missing:r,missingWarn:o,fallbackWarn:i,fallbackRoot:s,fallbackFormat:a,modifiers:l,pluralRules:h,postTranslation:d,warnHtmlMessage:p,escapeParameter:g,messageResolver:e.messageResolver,inheritLocale:C,__i18n:$,__root:k,__injectWithOption:A}}function Tu(e={},t){{const n=Hf(YE(e)),{__extender:r}=e,o={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return Ue(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=Ue(i)?!i:i},get silentFallbackWarn(){return Ue(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=Ue(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[s,a,l]=i,h={};let d=null,p=null;if(!me(s))throw xt(gt.INVALID_ARGUMENT);const g=s;return me(a)?h.locale=a:tt(a)?d=a:Le(a)&&(p=a),tt(l)?d=l:Le(l)&&(p=l),Reflect.apply(n.t,n,[g,d||p||{},h])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[s,a,l]=i,h={plural:1};let d=null,p=null;if(!me(s))throw xt(gt.INVALID_ARGUMENT);const g=s;return me(a)?h.locale=a:dt(a)?h.plural=a:tt(a)?d=a:Le(a)&&(p=a),me(l)?h.locale=l:tt(l)?d=l:Le(l)&&(p=l),Reflect.apply(n.t,n,[g,d||p||{},h])},te(i,s){return n.te(i,s)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,s){n.setLocaleMessage(i,s)},mergeLocaleMessage(i,s){n.mergeLocaleMessage(i,s)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,s){n.setDateTimeFormat(i,s)},mergeDateTimeFormat(i,s){n.mergeDateTimeFormat(i,s)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,s){n.setNumberFormat(i,s)},mergeNumberFormat(i,s){n.mergeNumberFormat(i,s)},getChoiceIndex(i,s){return-1}};return o.__extender=r,o}}const zf={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function JE({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,o)=>[...r,...o.type===Pt?o.children:[o]],[]):t.reduce((n,r)=>{const o=e[r];return o&&(n[r]=o()),n},{})}function am(e){return Pt}const QE=En({name:"i18n-t",props:Tt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>dt(e)||!isNaN(e)}},zf),setup(e,t){const{slots:n,attrs:r}=t,o=e.i18n||Vf({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(p=>p!=="_"),s={};e.locale&&(s.locale=e.locale),e.plural!==void 0&&(s.plural=me(e.plural)?+e.plural:e.plural);const a=JE(t,i),l=o[xu](e.keypath,a,s),h=Tt({},r),d=me(e.tag)||Ye(e.tag)?e.tag:am();return Ao(d,h,l)}}}),Bh=QE;function XE(e){return tt(e)&&!me(e[0])}function lm(e,t,n,r){const{slots:o,attrs:i}=t;return()=>{const s={part:!0};let a={};e.locale&&(s.locale=e.locale),me(e.format)?s.key=e.format:Ye(e.format)&&(me(e.format.key)&&(s.key=e.format.key),a=Object.keys(e.format).reduce((g,C)=>n.includes(C)?Tt({},g,{[C]:e.format[C]}):g,{}));const l=r(e.value,s,a);let h=[s.key];tt(l)?h=l.map((g,C)=>{const _=o[g.type],$=_?_({[g.type]:g.value,index:C,parts:l}):[g.value];return XE($)&&($[0].key=`${g.type}-${C}`),$}):me(l)&&(h=[l]);const d=Tt({},i),p=me(e.tag)||Ye(e.tag)?e.tag:am();return Ao(p,d,h)}}const e9=En({name:"i18n-n",props:Tt({value:{type:Number,required:!0},format:{type:[String,Object]}},zf),setup(e,t){const n=e.i18n||Vf({useScope:"parent",__useComponent:!0});return lm(e,t,em,(...r)=>n[Cu](...r))}}),Dh=e9,t9=En({name:"i18n-d",props:Tt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},zf),setup(e,t){const n=e.i18n||Vf({useScope:"parent",__useComponent:!0});return lm(e,t,Xg,(...r)=>n[Eu](...r))}}),Uh=t9;function n9(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function r9(e){const t=s=>{const{instance:a,modifiers:l,value:h}=s;if(!a||!a.$)throw xt(gt.UNEXPECTED_ERROR);const d=n9(e,a.$),p=Fh(h);return[Reflect.apply(d.t,d,[...Wh(p)]),d]};return{created:(s,a)=>{const[l,h]=t(a);mu&&e.global===h&&(s.__i18nWatcher=Rt(h.locale,()=>{a.instance&&a.instance.$forceUpdate()})),s.__composer=h,s.textContent=l},unmounted:s=>{mu&&s.__i18nWatcher&&(s.__i18nWatcher(),s.__i18nWatcher=void 0,delete s.__i18nWatcher),s.__composer&&(s.__composer=void 0,delete s.__composer)},beforeUpdate:(s,{value:a})=>{if(s.__composer){const l=s.__composer,h=Fh(a);s.textContent=Reflect.apply(l.t,l,[...Wh(h)])}},getSSRProps:s=>{const[a]=t(s);return{textContent:a}}}}function Fh(e){if(me(e))return{path:e};if(Le(e)){if(!("path"in e))throw xt(gt.REQUIRED_VALUE,"path");return e}else throw xt(gt.INVALID_VALUE)}function Wh(e){const{path:t,locale:n,args:r,choice:o,plural:i}=e,s={},a=r||{};return me(n)&&(s.locale=n),dt(o)&&(s.plural=o),dt(i)&&(s.plural=i),[t,a,s]}function i9(e,t,...n){const r=Le(n[0])?n[0]:{},o=!!r.useI18nComponentName;(Ue(r.globalInstall)?r.globalInstall:!0)&&([o?"i18n":Bh.name,"I18nT"].forEach(s=>e.component(s,Bh)),[Dh.name,"I18nN"].forEach(s=>e.component(s,Dh)),[Uh.name,"I18nD"].forEach(s=>e.component(s,Uh))),e.directive("t",r9(t))}function o9(e,t,n){return{beforeCreate(){const r=yn();if(!r)throw xt(gt.UNEXPECTED_ERROR);const o=this.$options;if(o.i18n){const i=o.i18n;if(o.__i18n&&(i.__i18n=o.__i18n),i.__root=t,this===this.$root)this.$i18n=jh(e,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Tu(i);const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}}else if(o.__i18n)if(this===this.$root)this.$i18n=jh(e,o);else{this.$i18n=Tu({__i18n:o.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=e;o.__i18nGlobal&&sm(t,o,o),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,s)=>this.$i18n.te(i,s),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=yn();if(!r)throw xt(gt.UNEXPECTED_ERROR);const o=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,o.__disposer&&(o.__disposer(),delete o.__disposer,delete o.__extender),n.__deleteInstance(r),delete this.$i18n}}}function jh(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[rm](t.pluralizationRules||e.pluralizationRules);const n=Wl(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(r=>e.mergeLocaleMessage(r,n[r])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(r=>e.mergeDateTimeFormat(r,t.datetimeFormats[r])),t.numberFormats&&Object.keys(t.numberFormats).forEach(r=>e.mergeNumberFormat(r,t.numberFormats[r])),e}const s9=Ur("global-vue-i18n");function a9(e={},t){const n=__VUE_I18N_LEGACY_API__&&Ue(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,r=Ue(e.globalInjection)?e.globalInjection:!0,o=__VUE_I18N_LEGACY_API__&&n?!!e.allowComposition:!0,i=new Map,[s,a]=l9(e,n),l=Ur("");function h(g){return i.get(g)||null}function d(g,C){i.set(g,C)}function p(g){i.delete(g)}{const g={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return o},async install(C,..._){if(C.__VUE_I18N_SYMBOL__=l,C.provide(C.__VUE_I18N_SYMBOL__,g),Le(_[0])){const A=_[0];g.__composerExtend=A.__composerExtend,g.__vueI18nExtend=A.__vueI18nExtend}let $=null;!n&&r&&($=w9(C,g.global)),__VUE_I18N_FULL_INSTALL__&&i9(C,g,..._),__VUE_I18N_LEGACY_API__&&n&&C.mixin(o9(a,a.__composer,g));const k=C.unmount;C.unmount=()=>{$&&$(),g.dispose(),k()}},get global(){return a},dispose(){s.stop()},__instances:i,__getInstance:h,__setInstance:d,__deleteInstance:p};return g}}function Vf(e={}){const t=yn();if(t==null)throw xt(gt.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw xt(gt.NOT_INSTALLED);const n=c9(t),r=f9(n),o=om(t),i=u9(e,o);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!e.__useComponent){if(!n.allowComposition)throw xt(gt.NOT_AVAILABLE_IN_LEGACY_MODE);return g9(t,i,r,e)}if(i==="global")return sm(r,e,o),r;if(i==="parent"){let l=d9(n,t,e.__useComponent);return l==null&&(l=r),l}const s=n;let a=s.__getInstance(t);if(a==null){const l=Tt({},e);"__i18n"in o&&(l.__i18n=o.__i18n),r&&(l.__root=r),a=Hf(l),s.__composerExtend&&(a[Au]=s.__composerExtend(a)),p9(s,t,a),s.__setInstance(t,a)}return a}function l9(e,t,n){const r=rp();{const o=__VUE_I18N_LEGACY_API__&&t?r.run(()=>Tu(e)):r.run(()=>Hf(e));if(o==null)throw xt(gt.UNEXPECTED_ERROR);return[r,o]}}function c9(e){{const t=kt(e.isCE?s9:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw xt(e.isCE?gt.NOT_INSTALLED_WITH_PROVIDE:gt.UNEXPECTED_ERROR);return t}}function u9(e,t){return Ul(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function f9(e){return e.mode==="composition"?e.global:e.global.__composer}function d9(e,t,n=!1){let r=null;const o=t.root;let i=h9(t,n);for(;i!=null;){const s=e;if(e.mode==="composition")r=s.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=s.__getInstance(i);a!=null&&(r=a.__composer,n&&r&&!r[im]&&(r=null))}if(r!=null||o===i)break;i=i.parent}return r}function h9(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function p9(e,t,n){wi(()=>{},t),Hu(()=>{const r=n;e.__deleteInstance(t);const o=r[Au];o&&(o(),delete r[Au])},t)}function g9(e,t,n,r={}){const o=t==="local",i=_p(null);if(o&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw xt(gt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const s=Ue(r.inheritLocale)?r.inheritLocale:!me(r.locale),a=Ze(!o||s?n.locale.value:me(r.locale)?r.locale:bo),l=Ze(!o||s?n.fallbackLocale.value:me(r.fallbackLocale)||tt(r.fallbackLocale)||Le(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),h=Ze(Wl(a.value,r)),d=Ze(Le(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),p=Ze(Le(r.numberFormats)?r.numberFormats:{[a.value]:{}}),g=o?n.missingWarn:Ue(r.missingWarn)||Pr(r.missingWarn)?r.missingWarn:!0,C=o?n.fallbackWarn:Ue(r.fallbackWarn)||Pr(r.fallbackWarn)?r.fallbackWarn:!0,_=o?n.fallbackRoot:Ue(r.fallbackRoot)?r.fallbackRoot:!0,$=!!r.fallbackFormat,k=rt(r.missing)?r.missing:null,A=rt(r.postTranslation)?r.postTranslation:null,E=o?n.warnHtmlMessage:Ue(r.warnHtmlMessage)?r.warnHtmlMessage:!0,z=!!r.escapeParameter,N=o?n.modifiers:Le(r.modifiers)?r.modifiers:{},V=r.pluralRules||o&&n.pluralRules;function q(){return[a.value,l.value,h.value,d.value,p.value]}const Z=Fe({get:()=>i.value?i.value.locale.value:a.value,set:v=>{i.value&&(i.value.locale.value=v),a.value=v}}),y=Fe({get:()=>i.value?i.value.fallbackLocale.value:l.value,set:v=>{i.value&&(i.value.fallbackLocale.value=v),l.value=v}}),x=Fe(()=>i.value?i.value.messages.value:h.value),S=Fe(()=>d.value),P=Fe(()=>p.value);function I(){return i.value?i.value.getPostTranslationHandler():A}function W(v){i.value&&i.value.setPostTranslationHandler(v)}function j(){return i.value?i.value.getMissingHandler():k}function O(v){i.value&&i.value.setMissingHandler(v)}function R(v){return q(),v()}function U(...v){return i.value?R(()=>Reflect.apply(i.value.t,null,[...v])):R(()=>"")}function D(...v){return i.value?Reflect.apply(i.value.rt,null,[...v]):""}function G(...v){return i.value?R(()=>Reflect.apply(i.value.d,null,[...v])):R(()=>"")}function te(...v){return i.value?R(()=>Reflect.apply(i.value.n,null,[...v])):R(()=>"")}function ne(v){return i.value?i.value.tm(v):{}}function fe(v,L){return i.value?i.value.te(v,L):!1}function _e(v){return i.value?i.value.getLocaleMessage(v):{}}function Ae(v,L){i.value&&(i.value.setLocaleMessage(v,L),h.value[v]=L)}function xe(v,L){i.value&&i.value.mergeLocaleMessage(v,L)}function Ee(v){return i.value?i.value.getDateTimeFormat(v):{}}function Q(v,L){i.value&&(i.value.setDateTimeFormat(v,L),d.value[v]=L)}function ue(v,L){i.value&&i.value.mergeDateTimeFormat(v,L)}function oe(v){return i.value?i.value.getNumberFormat(v):{}}function de(v,L){i.value&&(i.value.setNumberFormat(v,L),p.value[v]=L)}function Ce(v,L){i.value&&i.value.mergeNumberFormat(v,L)}const M={get id(){return i.value?i.value.id:-1},locale:Z,fallbackLocale:y,messages:x,datetimeFormats:S,numberFormats:P,get inheritLocale(){return i.value?i.value.inheritLocale:s},set inheritLocale(v){i.value&&(i.value.inheritLocale=v)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(h.value)},get modifiers(){return i.value?i.value.modifiers:N},get pluralRules(){return i.value?i.value.pluralRules:V},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:g},set missingWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackWarn(){return i.value?i.value.fallbackWarn:C},set fallbackWarn(v){i.value&&(i.value.missingWarn=v)},get fallbackRoot(){return i.value?i.value.fallbackRoot:_},set fallbackRoot(v){i.value&&(i.value.fallbackRoot=v)},get fallbackFormat(){return i.value?i.value.fallbackFormat:$},set fallbackFormat(v){i.value&&(i.value.fallbackFormat=v)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:E},set warnHtmlMessage(v){i.value&&(i.value.warnHtmlMessage=v)},get escapeParameter(){return i.value?i.value.escapeParameter:z},set escapeParameter(v){i.value&&(i.value.escapeParameter=v)},t:U,getPostTranslationHandler:I,setPostTranslationHandler:W,getMissingHandler:j,setMissingHandler:O,rt:D,d:G,n:te,tm:ne,te:fe,getLocaleMessage:_e,setLocaleMessage:Ae,mergeLocaleMessage:xe,getDateTimeFormat:Ee,setDateTimeFormat:Q,mergeDateTimeFormat:ue,getNumberFormat:oe,setNumberFormat:de,mergeNumberFormat:Ce};function w(v){v.locale.value=a.value,v.fallbackLocale.value=l.value,Object.keys(h.value).forEach(L=>{v.mergeLocaleMessage(L,h.value[L])}),Object.keys(d.value).forEach(L=>{v.mergeDateTimeFormat(L,d.value[L])}),Object.keys(p.value).forEach(L=>{v.mergeNumberFormat(L,p.value[L])}),v.escapeParameter=z,v.fallbackFormat=$,v.fallbackRoot=_,v.fallbackWarn=C,v.missingWarn=g,v.warnHtmlMessage=E}return Dp(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw xt(gt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const v=i.value=e.proxy.$i18n.__composer;t==="global"?(a.value=v.locale.value,l.value=v.fallbackLocale.value,h.value=v.messages.value,d.value=v.datetimeFormats.value,p.value=v.numberFormats.value):o&&w(v)}),M}const m9=["locale","fallbackLocale","availableLocales"],Hh=["t","rt","d","n","tm","te"];function w9(e,t){const n=Object.create(null);return m9.forEach(o=>{const i=Object.getOwnPropertyDescriptor(t,o);if(!i)throw xt(gt.UNEXPECTED_ERROR);const s=ht(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,o,s)}),e.config.globalProperties.$i18n=n,Hh.forEach(o=>{const i=Object.getOwnPropertyDescriptor(t,o);if(!i||!i.value)throw xt(gt.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,i)}),()=>{delete e.config.globalProperties.$i18n,Hh.forEach(o=>{delete e.config.globalProperties[`$${o}`]})}}KE();__INTLIFY_JIT_COMPILATION__?xh(WE):xh(FE);LE(pE);PE(jg);if(__INTLIFY_PROD_DEVTOOLS__){const e=Kn();e.__INTLIFY__=!0,EE(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const v9={trade_get_earnings:"交易赚取收益",trade_text1:"每日买卖NFT,交易赚取收益",trade_text2:"推广朋友使用,每日享额外收益",trade_amount:"交易额",cost:"费用",web3nft_title_text:"在这里探索、发现和赚钱，世界顶级的",web3nft_info1_title:"多重奖励",web3nft_info1_text:" Opensix 采用创新的算法交易模型，引入整合交易奖励和推荐奖励的双重机制。 ",web3nft_info2_title:"获得未来价值",web3nft_info2_text:" Opensix 通过全新的算法交易模型和金融模型，降低了NFT市场的进入门槛，拓展了NFT市场的边界。 ",collection_nft:"收藏精选NFTS",enter_email_placeholder:"请输入您的邮箱",submit:"提交",limitation:"限制",earnings_rate:"收益率",cycle:"周期",confirm:"确定",cancel:"取消",all:"全部",robot_tips:"连接机器人将自动为你拍卖房间的竞品",auctioned_amount:"已竞拍次数",earn_total:"累计收益",reponse_rare:"回报率",link_robot_text:"点击连接机器人",order_record:"订单记录",my_totalprice:"我的总出价",my_harvest:"我的收获",upgrade:"升级",credit_rank:"我的信誉等级",poor:"差",general:"一般",good:"良好",excellent:"优秀",credit_score:"我的信誉评分",wallet_balance:"钱包余额",u_balance:"USDT余额",approve_limit:"授权限制",platform_balance:"平台余额",usdc_total:"累计USDT",freeze:"使用中",freeze_back:"使用中回退",in:"转入",out:"转出",deduct:"扣除",recharge:"充值",reward:"奖励",join_task:"参加任务",pledge:"质押",pledge_profit:"质押收益",usdt_use:"可用USDT",usdt_limit:"USDT额度",today_earn:"今日收益",convertible_usdt:"可提取USDT",in_progress:"进行中",in_task:"任务中",complete:"完成",fail:"失败",common_functions:"常用功能",exchange:"兑换",withdraw:"提现",loan_center:"贷款中心",flow_record:"流水记录",invite_friends:"邀请好友",help:"帮助中心",use_limit:"可用额度",current_address:"你的当前地址",premium_member:"成为高级会员",ordinary_member:"成为普通会员",tips:"温馨提示",upgrade_tips_text:"作为高级会员，您可以免除每次提款利润的一部分佣金。如果您是普通会员，每次提款都需要支付部分提款手续费",in_show:"展示中",author:"作者名字",link_address:"公链地址",nft_intro:"藏品介绍",remain_time:"剩余时间",sell_price:"售价",earnings:"收益",offer:"出价",detail_tips_text:"在任务进程中，你需要确保余额充足，否则任务会失败，信用分会被扣除。",detail_tips_text2:"您已授权，您是高级会员，竞拍后钱包余额充足。",approve_limit1:"授权额度",return_rate:"回报率",exchange_amount:"兑换数量",exchanged_usdt:"可兑换USDT",exchange_all:"全部兑换",exchange_ratio:"兑换比例",chain_type:"链类型",account:"账户",can_withdraw_amount:"可取款数量",wallet_address:"钱包地址",withdraw_amount:"提现数量",withdraw_fee:"提现费用",real_recive:"实际到账",loan:"贷款",choose_loan_way:"请选择你的贷款方式：",loan_plan:"贷款计划",loan_limit:"贷款额度",oneday_interest:"每日利息",loan_date:"贷款日期",loan_apply_dialog_text:"确定要申请该贷款吗？",repayment_dialog_text:"确定要还款吗？",repayment_dialog_success_text:"还款成功",record:"记录",exchange_record:"兑换记录",withdraw_record:"提现记录",invite_title:"邀请朋友一起赚取加密货币",invite_title1:"如何提高等级，可以得到高达10%的佣金",copy_link:"复制链接",share_friends:"分享好友",get_commission:"获取佣金",my_team:"我的团队",team_amount:"团队规模",subordinate:"直接下属",income_sum:"总收益",today_income:"今日收益",loan_record:"贷款记录",interest_payable:"应付利息",principal:"本金",interest:"利息",apply_date:"申请日期",lend_date:"借出时间",apply_status:"申请状态",apply:"申请",apply_success:"申请成功",home:"首页",lang:"语言",kf:"客服",message:"消息",open_in_wallet_text:"请在钱包内打开！",change_network:"请切换到ETH网络",send:"发送",approve_fail:"授权失败,请重试!",noMore:"没有更多了",join_success:"参与成功",task_earnings:"任务收益",pledge_record:"质押记录",in_use:"使用中",applying:"申请中",pass:"通过",refuse:"拒绝",refund:"还款",enter_withdraw_amount:"请输入正确的提现数量",submit_success_checking:"提交成功，审核中",receive_USDT:"可收到USDT",exchange_success:"兑换成功",enter_exchange_amount:"请输入正确的兑换数量",linked_robot_tips:"你已经连接了机器人，机器人将会自动为你竞拍藏品，你也可以随时取消连接。",confirm_link_dialog_text:"既然你已经选择了一个智能竞拍计划，那么在确认参与后，你的可用配额将由智能竞拍AI机器人托管，从而产生收入。",link_success:"连接成功",already_connected:"已连接",cancel_link_dialog_text:"你确定要取消连接吗？",cancel_link_success:"取消连接成功",email_format_error:"邮箱格式错误",subsirction_success:"订阅成功",copy_success:"复制成功"},b9={trade_get_earnings:"Earn profits from trading",trade_text1:"Buy and sell NFT every day and earn profits from trading",trade_text2:"Promote friends to use it and enjoy extra income every day",trade_amount:"Trade amount",cost:"Gas",web3nft_title_text:"Explore,discover,and make monkey here the world’s top",web3nft_info1_title:"Multiple rewards",web3nft_info1_text:" Opensix adopts an innovative algorithmic trading model, introducing a dual mechanism of integrating transaction rewards and recommendation rewards. ",web3nft_info2_title:"Obtaining Future Value",web3nft_info2_text:" Opensix has lowered the entry threshold of the NFT market and expanded the boundaries of the NFT market through new algorithmic trading and financial models. ",collection_nft:"Collection Selection NFTS",enter_email_placeholder:"Please enter your email address",submit:"Submit",limitation:"limitation",earnings_rate:"Rate of Return",cycle:"cycle",confirm:"Confirm",cancel:"Cancel",all:"All",robot_tips:"The connection robot will automatically auction rooms for you.",auctioned_amount:"Number of auctions completed",earn_total:"Total Revenue",reponse_rare:"Response rate",link_robot_text:"Click to connect the robot",order_record:"Order Record",my_totalprice:"My total bid",my_harvest:"My Benefits",upgrade:"Upgrade",credit_rank:"My credit rating",poor:"Poor",general:"Ordinary",good:"Good",excellent:"Excellent",credit_score:"my_credit_grade",wallet_balance:"Wallet balance",u_balance:"USDT balance",approve_limit:"Authorization limit",platform_balance:"Platform balance",usdc_total:"Accumulated USDT",freeze:"In use",freeze_back:"In use back",in:"Transfer in",out:"Transfer out",deduct:"Deduct",recharge:"Recharge",reward:"Reward",join_task:"Join task",pledge:"Pledge",pledge_profit:"Pledge profit",usdt_use:"Available USDT",usdt_limit:"USDT limit",today_earn:"Today's earnings",convertible_usdt:"Convertible USDT",in_progress:"In Progress",in_task:"In the task",complete:"Completed",fail:"Failed",common_functions:"Common functions",exchange:"Exchange",withdraw:"Withdraw",loan_center:"Loan Center",flow_record:"Flow Record",invite_friends:"Invite Friends",help:"Help",use_limit:"Available limit",current_address:"Your current address",premium_member:"Become a Premium Member",ordinary_member:"Becoming a regular member",tips:"Tips",upgrade_tips_text:"As a senior member, you can waive a commission on a portion of the profit for each withdrawal. If you are an ordinary member, you will need to pay a partial withdrawal fee for each withdrawal，您可以免除每次提款利润的一部分佣金。如果您是普通会员，每次提款都需要支付部分提款手续费",in_show:"On display",author:"Author's Name",link_address:"Public chain address",nft_intro:"Introduction",remain_time:"Time left",sell_price:"Price",earnings:"Income",offer:"Bid price",detail_tips_text:"During the task process, you need to ensure that the balance is sufficient, otherwise the task will fail and credit points will be deducted.",detail_tips_text2:"You have been awarded Jin, you are a senior, and after the auction, the package amount is sufficient.",approve_limit1:"Authorization limit",return_rate:"Response rate",exchange_amount:"Convertible quantity",exchanged_usdt:"Convertible USDT",exchange_all:"Redeem All",exchange_ratio:"Subscription ratio",chain_type:"Chain type",account:"Account",can_withdraw_amount:"Withdrawable quantity",wallet_address:"Wallet address",withdraw_amount:"Withdrawal quantity",withdraw_fee:"Withdrawal expenses",real_recive:"Actual receipt",loan:"Loan",choose_loan_way:"Please choose your loan method",loan_plan:"Loan plan",loan_limit:"Loan limit",oneday_interest:"Daily interest",loan_date:"Loan Date",loan_apply_dialog_text:"Are you sure apply the loan?",repayment_dialog_text:"Are you sure repayment?",repayment_dialog_success_text:"Repayment success",record:"Record",exchange_record:"Exchange record",withdraw_record:"Withdraw record",invite_title:"Invite friends to earn cryptocurrency together",invite_title1:"If you raise the level, you can receive up to 10% commission.",copy_link:"Copy link",share_friends:"Share Friends",get_commission:"Obtaining commission",my_team:"My team",team_amount:"Team size",subordinate:"Direct Reports",income_sum:"Total Income",today_income:"Today's earnings",loan_record:"Loan Record",interest_payable:"Payable interest",principal:"Principal",interest:"Interest",apply_date:"Application date",lend_date:"Lend date",apply_status:"Application status",apply:"Applying",apply_success:"Apply success",home:"Home",lang:"Language",kf:"Customer service",message:"Message",open_in_wallet_text:"Please open in wallet",change_network:"Please change network",send:"Send",approve_fail:"Authorization failed,Tray again!",noMore:"No more",join_success:"Join Success",task_earnings:"Task earnings",pledge_record:"Pledge record",in_use:"In use",applying:"Applying",pass:"Pass",refuse:"Refuse",refund:"Refund",enter_withdraw_amount:"Please enter withdraw amount",submit_success_checking:"Submitted successfully, under review",receive_USDT:"Receive USDT",exchange_success:"Exchange success",enter_exchange_amount:"Please enter exchange amount",linked_robot_tips:"You have connected the robot and it will automatically bid for your collection. You can also cancel the connection at any time.",confirm_link_dialog_text:"Since you have chosen an intelligent bidding plan, after confirming your participation, your available quota will be hosted by the intelligent bidding AI robot, generating revenue.",link_success:"Link success",already_connected:"Connected",cancel_link_dialog_text:"Are you sure you want to cancel the connection?",cancel_link_success:"Cancel success",email_format_error:"Email format error",subsirction_success:"Subscribe success",copy_success:"Copy success"};let Su="en";localStorage.getItem("NFTLANG")?Su=localStorage.getItem("NFTLANG"):localStorage.setItem("NFTLANG",Su);const y9=a9({legacy:!1,locale:Su,fallbackLocale:"en",messages:{zh:v9,en:b9}});(function(){if(typeof window>"u")return;var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(d,p,g,C,_,$,k){return new n(p,g,{pageX:C,pageY:_,screenX:$,screenY:k,clientX:C-window.pageXOffset,clientY:_-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var d=r(),p=0;p<arguments.length;p++)d[p]=arguments[p];return d.length=arguments.length,d}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(d){var p=this;do{if(p.matches(d))return p;p=p.parentElement||p.parentNode}while(p!==null&&p.nodeType===1);return null});var n=function(p,g,C,_,$){_=_||0,$=$||0,this.identifier=g,this.target=p,this.clientX=C.clientX+_,this.clientY=C.clientY+$,this.screenX=C.screenX+_,this.screenY=C.screenY+$,this.pageX=C.pageX+_,this.pageY=C.pageY+$};function r(){var d=[];return d.item=function(p){return this[p]||null},d.identifiedTouch=function(p){return this[p+1]||null},d}var o=!1;function i(d){return function(p){p.type==="mousedown"&&(o=!0),p.type==="mouseup"&&(o=!1),!(p.type==="mousemove"&&!o)&&((p.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=p.target),e.closest("[data-no-touch-simulate]")==null&&s(d,p),p.type==="mouseup"&&(e=null))}}function s(d,p){var g=document.createEvent("Event");g.initEvent(d,!0,!0),g.altKey=p.altKey,g.ctrlKey=p.ctrlKey,g.metaKey=p.metaKey,g.shiftKey=p.shiftKey,g.touches=l(p),g.targetTouches=l(p),g.changedTouches=a(p),e.dispatchEvent(g)}function a(d){var p=r();return p.push(new n(e,1,d,0,0)),p}function l(d){return d.type==="mouseup"?r():a(d)}function h(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}h.multiTouchOffset=75,t||new h})();/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var _9="store";function No(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function x9(e){return e!==null&&typeof e=="object"}function E9(e){return e&&typeof e.then=="function"}function C9(e,t){return function(){return e(t)}}function cm(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function um(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;jl(e,n,[],e._modules.root,!0),Gf(e,n,t)}function Gf(e,t,n){var r=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={},a={},l=rp(!0);l.run(function(){No(i,function(h,d){s[d]=C9(h,e),a[d]=Fe(function(){return s[d]()}),Object.defineProperty(e.getters,d,{get:function(){return a[d].value},enumerable:!0})})}),e._state=Co({data:t}),e._scope=l,e.strict&&I9(e),r&&n&&e._withCommit(function(){r.data=null}),o&&o.stop()}function jl(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!i&&!o){var a=Kf(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit(function(){a[l]=r.state})}var h=r.context=A9(e,s,n);r.forEachMutation(function(d,p){var g=s+p;T9(e,g,d,h)}),r.forEachAction(function(d,p){var g=d.root?p:s+p,C=d.handler||d;S9(e,g,C,h)}),r.forEachGetter(function(d,p){var g=s+p;$9(e,g,d,h)}),r.forEachChild(function(d,p){jl(e,t,n.concat(p),d,o)})}function A9(e,t,n){var r=t==="",o={dispatch:r?e.dispatch:function(i,s,a){var l=nl(i,s,a),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=t+p),e.dispatch(p,h)},commit:r?e.commit:function(i,s,a){var l=nl(i,s,a),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=t+p),e.commit(p,h,d)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return fm(e,t)}},state:{get:function(){return Kf(e.state,n)}}}),o}function fm(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function T9(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push(function(s){n.call(e,r.state,s)})}function S9(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push(function(s){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},s);return E9(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):a})}function $9(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function I9(e){Rt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Kf(e,t){return t.reduce(function(n,r){return n[r]},e)}function nl(e,t,n){return x9(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var R9="vuex bindings",zh="vuex:mutations",$c="vuex:actions",ki="vuex",O9=0;function N9(e,t){sv({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[R9]},function(n){n.addTimelineLayer({id:zh,label:"Vuex Mutations",color:Vh}),n.addTimelineLayer({id:$c,label:"Vuex Actions",color:Vh}),n.addInspector({id:ki,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===ki)if(r.filter){var o=[];gm(o,t._modules.root,r.filter,""),r.rootNodes=o}else r.rootNodes=[pm(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===ki){var o=r.nodeId;fm(t,o),r.state=k9(B9(t._modules,o),o==="root"?t.getters:t._makeLocalGettersCache,o)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===ki){var o=r.nodeId,i=r.path;o!=="root"&&(i=o.split("/").filter(Boolean).concat(i)),t._withCommit(function(){r.set(t._state.data,i,r.state.value)})}}),t.subscribe(function(r,o){var i={};r.payload&&(i.payload=r.payload),i.state=o,n.notifyComponentUpdate(),n.sendInspectorTree(ki),n.sendInspectorState(ki),n.addTimelineEvent({layerId:zh,event:{time:Date.now(),title:r.type,data:i}})}),t.subscribeAction({before:function(r,o){var i={};r.payload&&(i.payload=r.payload),r._id=O9++,r._time=Date.now(),i.state=o,n.addTimelineEvent({layerId:$c,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,o){var i={},s=Date.now()-r._time;i.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},r.payload&&(i.payload=r.payload),i.state=o,n.addTimelineEvent({layerId:$c,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Vh=8702998,L9=6710886,P9=16777215,dm={label:"namespaced",textColor:P9,backgroundColor:L9};function hm(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function pm(e,t){return{id:t||"root",label:hm(t),tags:e.namespaced?[dm]:[],children:Object.keys(e._children).map(function(n){return pm(e._children[n],t+n+"/")})}}function gm(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[dm]:[]}),Object.keys(t._children).forEach(function(o){gm(e,t._children[o],n,r+o+"/")})}function k9(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map(function(s){return{key:s,editable:!0,value:e.state[s]}})};if(r.length){var i=M9(t);o.getters=Object.keys(i).map(function(s){return{key:s.endsWith("/")?hm(s):s,editable:!1,value:$u(function(){return i[s]})}})}return o}function M9(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach(function(s){o[s]||(o[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),o=o[s]._custom.value}),o[i]=$u(function(){return e[n]})}else t[n]=$u(function(){return e[n]})}),t}function B9(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,o,i){var s=r[o];if(!s)throw new Error('Missing module "'+o+'" for path "'+t+'".');return i===n.length-1?s:s._children},t==="root"?e:e.root._children)}function $u(e){try{return e()}catch(t){return t}}var Cn=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},mm={namespaced:{configurable:!0}};mm.namespaced.get=function(){return!!this._rawModule.namespaced};Cn.prototype.addChild=function(t,n){this._children[t]=n};Cn.prototype.removeChild=function(t){delete this._children[t]};Cn.prototype.getChild=function(t){return this._children[t]};Cn.prototype.hasChild=function(t){return t in this._children};Cn.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Cn.prototype.forEachChild=function(t){No(this._children,t)};Cn.prototype.forEachGetter=function(t){this._rawModule.getters&&No(this._rawModule.getters,t)};Cn.prototype.forEachAction=function(t){this._rawModule.actions&&No(this._rawModule.actions,t)};Cn.prototype.forEachMutation=function(t){this._rawModule.mutations&&No(this._rawModule.mutations,t)};Object.defineProperties(Cn.prototype,mm);var Si=function(t){this.register([],t,!1)};Si.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};Si.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,o){return n=n.getChild(o),r+(n.namespaced?o+"/":"")},"")};Si.prototype.update=function(t){wm([],this.root,t)};Si.prototype.register=function(t,n,r){var o=this;r===void 0&&(r=!0);var i=new Cn(n,r);if(t.length===0)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}n.modules&&No(n.modules,function(a,l){o.register(t.concat(l),a,r)})};Si.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],o=n.getChild(r);o&&o.runtime&&n.removeChild(r)};Si.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function wm(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;wm(e.concat(r),t.getChild(r),n.modules[r])}}function D9(e){return new Kt(e)}var Kt=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var o=t.strict;o===void 0&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Si(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,a=this,l=a.dispatch,h=a.commit;this.dispatch=function(g,C){return l.call(s,g,C)},this.commit=function(g,C,_){return h.call(s,g,C,_)},this.strict=o;var d=this._modules.root.state;jl(this,d,[],this._modules.root),Gf(this,d),r.forEach(function(p){return p(n)})},qf={state:{configurable:!0}};Kt.prototype.install=function(t,n){t.provide(n||_9,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&N9(t,this)};qf.state.get=function(){return this._state.data};qf.state.set=function(e){};Kt.prototype.commit=function(t,n,r){var o=this,i=nl(t,n,r),s=i.type,a=i.payload,l={type:s,payload:a},h=this._mutations[s];h&&(this._withCommit(function(){h.forEach(function(p){p(a)})}),this._subscribers.slice().forEach(function(d){return d(l,o.state)}))};Kt.prototype.dispatch=function(t,n){var r=this,o=nl(t,n),i=o.type,s=o.payload,a={type:i,payload:s},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(a,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(s)})):l[0](s);return new Promise(function(d,p){h.then(function(g){try{r._actionSubscribers.filter(function(C){return C.after}).forEach(function(C){return C.after(a,r.state)})}catch{}d(g)},function(g){try{r._actionSubscribers.filter(function(C){return C.error}).forEach(function(C){return C.error(a,r.state,g)})}catch{}p(g)})})}};Kt.prototype.subscribe=function(t,n){return cm(t,this._subscribers,n)};Kt.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return cm(r,this._actionSubscribers,n)};Kt.prototype.watch=function(t,n,r){var o=this;return Rt(function(){return t(o.state,o.getters)},n,Object.assign({},r))};Kt.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Kt.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),jl(this,this.state,t,this._modules.get(t),r.preserveState),Gf(this,this.state)};Kt.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=Kf(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),um(this)};Kt.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Kt.prototype.hotUpdate=function(t){this._modules.update(t),um(this,!0)};Kt.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Kt.prototype,qf);const U9=[{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],F9={coinAbi:U9};var W9=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Ic=Math.ceil,nn=Math.floor,Wt="[BigNumber Error] ",Gh=Wt+"Number primitive has more than 15 significant digits: ",gn=1e14,ke=14,Rc=9007199254740991,Oc=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],ur=1e7,yt=1e9;function vm(e){var t,n,r,o=E.prototype={constructor:E,toString:null,valueOf:null},i=new E(1),s=20,a=4,l=-7,h=21,d=-1e7,p=1e7,g=!1,C=1,_=0,$={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},k="0123456789abcdefghijklmnopqrstuvwxyz",A=!0;function E(y,x){var S,P,I,W,j,O,R,U,D=this;if(!(D instanceof E))return new E(y,x);if(x==null){if(y&&y._isBigNumber===!0){D.s=y.s,!y.c||y.e>p?D.c=D.e=null:y.e<d?D.c=[D.e=0]:(D.e=y.e,D.c=y.c.slice());return}if((O=typeof y=="number")&&y*0==0){if(D.s=1/y<0?(y=-y,-1):1,y===~~y){for(W=0,j=y;j>=10;j/=10,W++);W>p?D.c=D.e=null:(D.e=W,D.c=[y]);return}U=String(y)}else{if(!W9.test(U=String(y)))return r(D,U,O);D.s=U.charCodeAt(0)==45?(U=U.slice(1),-1):1}(W=U.indexOf("."))>-1&&(U=U.replace(".","")),(j=U.search(/e/i))>0?(W<0&&(W=j),W+=+U.slice(j+1),U=U.substring(0,j)):W<0&&(W=U.length)}else{if(nt(x,2,k.length,"Base"),x==10&&A)return D=new E(y),q(D,s+D.e+1,a);if(U=String(y),O=typeof y=="number"){if(y*0!=0)return r(D,U,O,x);if(D.s=1/y<0?(U=U.slice(1),-1):1,E.DEBUG&&U.replace(/^0\.0*|\./,"").length>15)throw Error(Gh+y)}else D.s=U.charCodeAt(0)===45?(U=U.slice(1),-1):1;for(S=k.slice(0,x),W=j=0,R=U.length;j<R;j++)if(S.indexOf(P=U.charAt(j))<0){if(P=="."){if(j>W){W=R;continue}}else if(!I&&(U==U.toUpperCase()&&(U=U.toLowerCase())||U==U.toLowerCase()&&(U=U.toUpperCase()))){I=!0,j=-1,W=0;continue}return r(D,String(y),O,x)}O=!1,U=n(U,x,10,D.s),(W=U.indexOf("."))>-1?U=U.replace(".",""):W=U.length}for(j=0;U.charCodeAt(j)===48;j++);for(R=U.length;U.charCodeAt(--R)===48;);if(U=U.slice(j,++R)){if(R-=j,O&&E.DEBUG&&R>15&&(y>Rc||y!==nn(y)))throw Error(Gh+D.s*y);if((W=W-j-1)>p)D.c=D.e=null;else if(W<d)D.c=[D.e=0];else{if(D.e=W,D.c=[],j=(W+1)%ke,W<0&&(j+=ke),j<R){for(j&&D.c.push(+U.slice(0,j)),R-=ke;j<R;)D.c.push(+U.slice(j,j+=ke));j=ke-(U=U.slice(j)).length}else j-=R;for(;j--;U+="0");D.c.push(+U)}}else D.c=[D.e=0]}E.clone=vm,E.ROUND_UP=0,E.ROUND_DOWN=1,E.ROUND_CEIL=2,E.ROUND_FLOOR=3,E.ROUND_HALF_UP=4,E.ROUND_HALF_DOWN=5,E.ROUND_HALF_EVEN=6,E.ROUND_HALF_CEIL=7,E.ROUND_HALF_FLOOR=8,E.EUCLID=9,E.config=E.set=function(y){var x,S;if(y!=null)if(typeof y=="object"){if(y.hasOwnProperty(x="DECIMAL_PLACES")&&(S=y[x],nt(S,0,yt,x),s=S),y.hasOwnProperty(x="ROUNDING_MODE")&&(S=y[x],nt(S,0,8,x),a=S),y.hasOwnProperty(x="EXPONENTIAL_AT")&&(S=y[x],S&&S.pop?(nt(S[0],-yt,0,x),nt(S[1],0,yt,x),l=S[0],h=S[1]):(nt(S,-yt,yt,x),l=-(h=S<0?-S:S))),y.hasOwnProperty(x="RANGE"))if(S=y[x],S&&S.pop)nt(S[0],-yt,-1,x),nt(S[1],1,yt,x),d=S[0],p=S[1];else if(nt(S,-yt,yt,x),S)d=-(p=S<0?-S:S);else throw Error(Wt+x+" cannot be zero: "+S);if(y.hasOwnProperty(x="CRYPTO"))if(S=y[x],S===!!S)if(S)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))g=S;else throw g=!S,Error(Wt+"crypto unavailable");else g=S;else throw Error(Wt+x+" not true or false: "+S);if(y.hasOwnProperty(x="MODULO_MODE")&&(S=y[x],nt(S,0,9,x),C=S),y.hasOwnProperty(x="POW_PRECISION")&&(S=y[x],nt(S,0,yt,x),_=S),y.hasOwnProperty(x="FORMAT"))if(S=y[x],typeof S=="object")$=S;else throw Error(Wt+x+" not an object: "+S);if(y.hasOwnProperty(x="ALPHABET"))if(S=y[x],typeof S=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(S))A=S.slice(0,10)=="0123456789",k=S;else throw Error(Wt+x+" invalid: "+S)}else throw Error(Wt+"Object expected: "+y);return{DECIMAL_PLACES:s,ROUNDING_MODE:a,EXPONENTIAL_AT:[l,h],RANGE:[d,p],CRYPTO:g,MODULO_MODE:C,POW_PRECISION:_,FORMAT:$,ALPHABET:k}},E.isBigNumber=function(y){if(!y||y._isBigNumber!==!0)return!1;if(!E.DEBUG)return!0;var x,S,P=y.c,I=y.e,W=y.s;e:if({}.toString.call(P)=="[object Array]"){if((W===1||W===-1)&&I>=-yt&&I<=yt&&I===nn(I)){if(P[0]===0){if(I===0&&P.length===1)return!0;break e}if(x=(I+1)%ke,x<1&&(x+=ke),String(P[0]).length==x){for(x=0;x<P.length;x++)if(S=P[x],S<0||S>=gn||S!==nn(S))break e;if(S!==0)return!0}}}else if(P===null&&I===null&&(W===null||W===1||W===-1))return!0;throw Error(Wt+"Invalid BigNumber: "+y)},E.maximum=E.max=function(){return N(arguments,-1)},E.minimum=E.min=function(){return N(arguments,1)},E.random=function(){var y=9007199254740992,x=Math.random()*y&2097151?function(){return nn(Math.random()*y)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(S){var P,I,W,j,O,R=0,U=[],D=new E(i);if(S==null?S=s:nt(S,0,yt),j=Ic(S/ke),g)if(crypto.getRandomValues){for(P=crypto.getRandomValues(new Uint32Array(j*=2));R<j;)O=P[R]*131072+(P[R+1]>>>11),O>=9e15?(I=crypto.getRandomValues(new Uint32Array(2)),P[R]=I[0],P[R+1]=I[1]):(U.push(O%1e14),R+=2);R=j/2}else if(crypto.randomBytes){for(P=crypto.randomBytes(j*=7);R<j;)O=(P[R]&31)*281474976710656+P[R+1]*1099511627776+P[R+2]*4294967296+P[R+3]*16777216+(P[R+4]<<16)+(P[R+5]<<8)+P[R+6],O>=9e15?crypto.randomBytes(7).copy(P,R):(U.push(O%1e14),R+=7);R=j/7}else throw g=!1,Error(Wt+"crypto unavailable");if(!g)for(;R<j;)O=x(),O<9e15&&(U[R++]=O%1e14);for(j=U[--R],S%=ke,j&&S&&(O=Oc[ke-S],U[R]=nn(j/O)*O);U[R]===0;U.pop(),R--);if(R<0)U=[W=0];else{for(W=-1;U[0]===0;U.splice(0,1),W-=ke);for(R=1,O=U[0];O>=10;O/=10,R++);R<ke&&(W-=ke-R)}return D.e=W,D.c=U,D}}(),E.sum=function(){for(var y=1,x=arguments,S=new E(x[0]);y<x.length;)S=S.plus(x[y++]);return S},n=function(){var y="0123456789";function x(S,P,I,W){for(var j,O=[0],R,U=0,D=S.length;U<D;){for(R=O.length;R--;O[R]*=P);for(O[0]+=W.indexOf(S.charAt(U++)),j=0;j<O.length;j++)O[j]>I-1&&(O[j+1]==null&&(O[j+1]=0),O[j+1]+=O[j]/I|0,O[j]%=I)}return O.reverse()}return function(S,P,I,W,j){var O,R,U,D,G,te,ne,fe,_e=S.indexOf("."),Ae=s,xe=a;for(_e>=0&&(D=_,_=0,S=S.replace(".",""),fe=new E(P),te=fe.pow(S.length-_e),_=D,fe.c=x(Vn(tn(te.c),te.e,"0"),10,I,y),fe.e=fe.c.length),ne=x(S,P,I,j?(O=k,y):(O=y,k)),U=D=ne.length;ne[--D]==0;ne.pop());if(!ne[0])return O.charAt(0);if(_e<0?--U:(te.c=ne,te.e=U,te.s=W,te=t(te,fe,Ae,xe,I),ne=te.c,G=te.r,U=te.e),R=U+Ae+1,_e=ne[R],D=I/2,G=G||R<0||ne[R+1]!=null,G=xe<4?(_e!=null||G)&&(xe==0||xe==(te.s<0?3:2)):_e>D||_e==D&&(xe==4||G||xe==6&&ne[R-1]&1||xe==(te.s<0?8:7)),R<1||!ne[0])S=G?Vn(O.charAt(1),-Ae,O.charAt(0)):O.charAt(0);else{if(ne.length=R,G)for(--I;++ne[--R]>I;)ne[R]=0,R||(++U,ne=[1].concat(ne));for(D=ne.length;!ne[--D];);for(_e=0,S="";_e<=D;S+=O.charAt(ne[_e++]));S=Vn(S,U,O.charAt(0))}return S}}(),t=function(){function y(P,I,W){var j,O,R,U,D=0,G=P.length,te=I%ur,ne=I/ur|0;for(P=P.slice();G--;)R=P[G]%ur,U=P[G]/ur|0,j=ne*R+U*te,O=te*R+j%ur*ur+D,D=(O/W|0)+(j/ur|0)+ne*U,P[G]=O%W;return D&&(P=[D].concat(P)),P}function x(P,I,W,j){var O,R;if(W!=j)R=W>j?1:-1;else for(O=R=0;O<W;O++)if(P[O]!=I[O]){R=P[O]>I[O]?1:-1;break}return R}function S(P,I,W,j){for(var O=0;W--;)P[W]-=O,O=P[W]<I[W]?1:0,P[W]=O*j+P[W]-I[W];for(;!P[0]&&P.length>1;P.splice(0,1));}return function(P,I,W,j,O){var R,U,D,G,te,ne,fe,_e,Ae,xe,Ee,Q,ue,oe,de,Ce,M,w=P.s==I.s?1:-1,v=P.c,L=I.c;if(!v||!v[0]||!L||!L[0])return new E(!P.s||!I.s||(v?L&&v[0]==L[0]:!L)?NaN:v&&v[0]==0||!L?w*0:w/0);for(_e=new E(w),Ae=_e.c=[],U=P.e-I.e,w=W+U+1,O||(O=gn,U=rn(P.e/ke)-rn(I.e/ke),w=w/ke|0),D=0;L[D]==(v[D]||0);D++);if(L[D]>(v[D]||0)&&U--,w<0)Ae.push(1),G=!0;else{for(oe=v.length,Ce=L.length,D=0,w+=2,te=nn(O/(L[0]+1)),te>1&&(L=y(L,te,O),v=y(v,te,O),Ce=L.length,oe=v.length),ue=Ce,xe=v.slice(0,Ce),Ee=xe.length;Ee<Ce;xe[Ee++]=0);M=L.slice(),M=[0].concat(M),de=L[0],L[1]>=O/2&&de++;do{if(te=0,R=x(L,xe,Ce,Ee),R<0){if(Q=xe[0],Ce!=Ee&&(Q=Q*O+(xe[1]||0)),te=nn(Q/de),te>1)for(te>=O&&(te=O-1),ne=y(L,te,O),fe=ne.length,Ee=xe.length;x(ne,xe,fe,Ee)==1;)te--,S(ne,Ce<fe?M:L,fe,O),fe=ne.length,R=1;else te==0&&(R=te=1),ne=L.slice(),fe=ne.length;if(fe<Ee&&(ne=[0].concat(ne)),S(xe,ne,Ee,O),Ee=xe.length,R==-1)for(;x(L,xe,Ce,Ee)<1;)te++,S(xe,Ce<Ee?M:L,Ee,O),Ee=xe.length}else R===0&&(te++,xe=[0]);Ae[D++]=te,xe[0]?xe[Ee++]=v[ue]||0:(xe=[v[ue]],Ee=1)}while((ue++<oe||xe[0]!=null)&&w--);G=xe[0]!=null,Ae[0]||Ae.splice(0,1)}if(O==gn){for(D=1,w=Ae[0];w>=10;w/=10,D++);q(_e,W+(_e.e=D+U*ke-1)+1,j,G)}else _e.e=U,_e.r=+G;return _e}}();function z(y,x,S,P){var I,W,j,O,R;if(S==null?S=a:nt(S,0,8),!y.c)return y.toString();if(I=y.c[0],j=y.e,x==null)R=tn(y.c),R=P==1||P==2&&(j<=l||j>=h)?pa(R,j):Vn(R,j,"0");else if(y=q(new E(y),x,S),W=y.e,R=tn(y.c),O=R.length,P==1||P==2&&(x<=W||W<=l)){for(;O<x;R+="0",O++);R=pa(R,W)}else if(x-=j,R=Vn(R,W,"0"),W+1>O){if(--x>0)for(R+=".";x--;R+="0");}else if(x+=W-O,x>0)for(W+1==O&&(R+=".");x--;R+="0");return y.s<0&&I?"-"+R:R}function N(y,x){for(var S,P,I=1,W=new E(y[0]);I<y.length;I++)P=new E(y[I]),(!P.s||(S=qr(W,P))===x||S===0&&W.s===x)&&(W=P);return W}function V(y,x,S){for(var P=1,I=x.length;!x[--I];x.pop());for(I=x[0];I>=10;I/=10,P++);return(S=P+S*ke-1)>p?y.c=y.e=null:S<d?y.c=[y.e=0]:(y.e=S,y.c=x),y}r=function(){var y=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,S=/^\.([^.]+)$/,P=/^-?(Infinity|NaN)$/,I=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(W,j,O,R){var U,D=O?j:j.replace(I,"");if(P.test(D))W.s=isNaN(D)?null:D<0?-1:1;else{if(!O&&(D=D.replace(y,function(G,te,ne){return U=(ne=ne.toLowerCase())=="x"?16:ne=="b"?2:8,!R||R==U?te:G}),R&&(U=R,D=D.replace(x,"$1").replace(S,"0.$1")),j!=D))return new E(D,U);if(E.DEBUG)throw Error(Wt+"Not a"+(R?" base "+R:"")+" number: "+j);W.s=null}W.c=W.e=null}}();function q(y,x,S,P){var I,W,j,O,R,U,D,G=y.c,te=Oc;if(G){e:{for(I=1,O=G[0];O>=10;O/=10,I++);if(W=x-I,W<0)W+=ke,j=x,R=G[U=0],D=nn(R/te[I-j-1]%10);else if(U=Ic((W+1)/ke),U>=G.length)if(P){for(;G.length<=U;G.push(0));R=D=0,I=1,W%=ke,j=W-ke+1}else break e;else{for(R=O=G[U],I=1;O>=10;O/=10,I++);W%=ke,j=W-ke+I,D=j<0?0:nn(R/te[I-j-1]%10)}if(P=P||x<0||G[U+1]!=null||(j<0?R:R%te[I-j-1]),P=S<4?(D||P)&&(S==0||S==(y.s<0?3:2)):D>5||D==5&&(S==4||P||S==6&&(W>0?j>0?R/te[I-j]:0:G[U-1])%10&1||S==(y.s<0?8:7)),x<1||!G[0])return G.length=0,P?(x-=y.e+1,G[0]=te[(ke-x%ke)%ke],y.e=-x||0):G[0]=y.e=0,y;if(W==0?(G.length=U,O=1,U--):(G.length=U+1,O=te[ke-W],G[U]=j>0?nn(R/te[I-j]%te[j])*O:0),P)for(;;)if(U==0){for(W=1,j=G[0];j>=10;j/=10,W++);for(j=G[0]+=O,O=1;j>=10;j/=10,O++);W!=O&&(y.e++,G[0]==gn&&(G[0]=1));break}else{if(G[U]+=O,G[U]!=gn)break;G[U--]=0,O=1}for(W=G.length;G[--W]===0;G.pop());}y.e>p?y.c=y.e=null:y.e<d&&(y.c=[y.e=0])}return y}function Z(y){var x,S=y.e;return S===null?y.toString():(x=tn(y.c),x=S<=l||S>=h?pa(x,S):Vn(x,S,"0"),y.s<0?"-"+x:x)}return o.absoluteValue=o.abs=function(){var y=new E(this);return y.s<0&&(y.s=1),y},o.comparedTo=function(y,x){return qr(this,new E(y,x))},o.decimalPlaces=o.dp=function(y,x){var S,P,I,W=this;if(y!=null)return nt(y,0,yt),x==null?x=a:nt(x,0,8),q(new E(W),y+W.e+1,x);if(!(S=W.c))return null;if(P=((I=S.length-1)-rn(this.e/ke))*ke,I=S[I])for(;I%10==0;I/=10,P--);return P<0&&(P=0),P},o.dividedBy=o.div=function(y,x){return t(this,new E(y,x),s,a)},o.dividedToIntegerBy=o.idiv=function(y,x){return t(this,new E(y,x),0,1)},o.exponentiatedBy=o.pow=function(y,x){var S,P,I,W,j,O,R,U,D,G=this;if(y=new E(y),y.c&&!y.isInteger())throw Error(Wt+"Exponent not an integer: "+Z(y));if(x!=null&&(x=new E(x)),O=y.e>14,!G.c||!G.c[0]||G.c[0]==1&&!G.e&&G.c.length==1||!y.c||!y.c[0])return D=new E(Math.pow(+Z(G),O?y.s*(2-ha(y)):+Z(y))),x?D.mod(x):D;if(R=y.s<0,x){if(x.c?!x.c[0]:!x.s)return new E(NaN);P=!R&&G.isInteger()&&x.isInteger(),P&&(G=G.mod(x))}else{if(y.e>9&&(G.e>0||G.e<-1||(G.e==0?G.c[0]>1||O&&G.c[1]>=24e7:G.c[0]<8e13||O&&G.c[0]<=9999975e7)))return W=G.s<0&&ha(y)?-0:0,G.e>-1&&(W=1/W),new E(R?1/W:W);_&&(W=Ic(_/ke+2))}for(O?(S=new E(.5),R&&(y.s=1),U=ha(y)):(I=Math.abs(+Z(y)),U=I%2),D=new E(i);;){if(U){if(D=D.times(G),!D.c)break;W?D.c.length>W&&(D.c.length=W):P&&(D=D.mod(x))}if(I){if(I=nn(I/2),I===0)break;U=I%2}else if(y=y.times(S),q(y,y.e+1,1),y.e>14)U=ha(y);else{if(I=+Z(y),I===0)break;U=I%2}G=G.times(G),W?G.c&&G.c.length>W&&(G.c.length=W):P&&(G=G.mod(x))}return P?D:(R&&(D=i.div(D)),x?D.mod(x):W?q(D,_,a,j):D)},o.integerValue=function(y){var x=new E(this);return y==null?y=a:nt(y,0,8),q(x,x.e+1,y)},o.isEqualTo=o.eq=function(y,x){return qr(this,new E(y,x))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(y,x){return qr(this,new E(y,x))>0},o.isGreaterThanOrEqualTo=o.gte=function(y,x){return(x=qr(this,new E(y,x)))===1||x===0},o.isInteger=function(){return!!this.c&&rn(this.e/ke)>this.c.length-2},o.isLessThan=o.lt=function(y,x){return qr(this,new E(y,x))<0},o.isLessThanOrEqualTo=o.lte=function(y,x){return(x=qr(this,new E(y,x)))===-1||x===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(y,x){var S,P,I,W,j=this,O=j.s;if(y=new E(y,x),x=y.s,!O||!x)return new E(NaN);if(O!=x)return y.s=-x,j.plus(y);var R=j.e/ke,U=y.e/ke,D=j.c,G=y.c;if(!R||!U){if(!D||!G)return D?(y.s=-x,y):new E(G?j:NaN);if(!D[0]||!G[0])return G[0]?(y.s=-x,y):new E(D[0]?j:a==3?-0:0)}if(R=rn(R),U=rn(U),D=D.slice(),O=R-U){for((W=O<0)?(O=-O,I=D):(U=R,I=G),I.reverse(),x=O;x--;I.push(0));I.reverse()}else for(P=(W=(O=D.length)<(x=G.length))?O:x,O=x=0;x<P;x++)if(D[x]!=G[x]){W=D[x]<G[x];break}if(W&&(I=D,D=G,G=I,y.s=-y.s),x=(P=G.length)-(S=D.length),x>0)for(;x--;D[S++]=0);for(x=gn-1;P>O;){if(D[--P]<G[P]){for(S=P;S&&!D[--S];D[S]=x);--D[S],D[P]+=gn}D[P]-=G[P]}for(;D[0]==0;D.splice(0,1),--U);return D[0]?V(y,D,U):(y.s=a==3?-1:1,y.c=[y.e=0],y)},o.modulo=o.mod=function(y,x){var S,P,I=this;return y=new E(y,x),!I.c||!y.s||y.c&&!y.c[0]?new E(NaN):!y.c||I.c&&!I.c[0]?new E(I):(C==9?(P=y.s,y.s=1,S=t(I,y,0,3),y.s=P,S.s*=P):S=t(I,y,0,C),y=I.minus(S.times(y)),!y.c[0]&&C==1&&(y.s=I.s),y)},o.multipliedBy=o.times=function(y,x){var S,P,I,W,j,O,R,U,D,G,te,ne,fe,_e,Ae,xe=this,Ee=xe.c,Q=(y=new E(y,x)).c;if(!Ee||!Q||!Ee[0]||!Q[0])return!xe.s||!y.s||Ee&&!Ee[0]&&!Q||Q&&!Q[0]&&!Ee?y.c=y.e=y.s=null:(y.s*=xe.s,!Ee||!Q?y.c=y.e=null:(y.c=[0],y.e=0)),y;for(P=rn(xe.e/ke)+rn(y.e/ke),y.s*=xe.s,R=Ee.length,G=Q.length,R<G&&(fe=Ee,Ee=Q,Q=fe,I=R,R=G,G=I),I=R+G,fe=[];I--;fe.push(0));for(_e=gn,Ae=ur,I=G;--I>=0;){for(S=0,te=Q[I]%Ae,ne=Q[I]/Ae|0,j=R,W=I+j;W>I;)U=Ee[--j]%Ae,D=Ee[j]/Ae|0,O=ne*U+D*te,U=te*U+O%Ae*Ae+fe[W]+S,S=(U/_e|0)+(O/Ae|0)+ne*D,fe[W--]=U%_e;fe[W]=S}return S?++P:fe.splice(0,1),V(y,fe,P)},o.negated=function(){var y=new E(this);return y.s=-y.s||null,y},o.plus=function(y,x){var S,P=this,I=P.s;if(y=new E(y,x),x=y.s,!I||!x)return new E(NaN);if(I!=x)return y.s=-x,P.minus(y);var W=P.e/ke,j=y.e/ke,O=P.c,R=y.c;if(!W||!j){if(!O||!R)return new E(I/0);if(!O[0]||!R[0])return R[0]?y:new E(O[0]?P:I*0)}if(W=rn(W),j=rn(j),O=O.slice(),I=W-j){for(I>0?(j=W,S=R):(I=-I,S=O),S.reverse();I--;S.push(0));S.reverse()}for(I=O.length,x=R.length,I-x<0&&(S=R,R=O,O=S,x=I),I=0;x;)I=(O[--x]=O[x]+R[x]+I)/gn|0,O[x]=gn===O[x]?0:O[x]%gn;return I&&(O=[I].concat(O),++j),V(y,O,j)},o.precision=o.sd=function(y,x){var S,P,I,W=this;if(y!=null&&y!==!!y)return nt(y,1,yt),x==null?x=a:nt(x,0,8),q(new E(W),y,x);if(!(S=W.c))return null;if(I=S.length-1,P=I*ke+1,I=S[I]){for(;I%10==0;I/=10,P--);for(I=S[0];I>=10;I/=10,P++);}return y&&W.e+1>P&&(P=W.e+1),P},o.shiftedBy=function(y){return nt(y,-Rc,Rc),this.times("1e"+y)},o.squareRoot=o.sqrt=function(){var y,x,S,P,I,W=this,j=W.c,O=W.s,R=W.e,U=s+4,D=new E("0.5");if(O!==1||!j||!j[0])return new E(!O||O<0&&(!j||j[0])?NaN:j?W:1/0);if(O=Math.sqrt(+Z(W)),O==0||O==1/0?(x=tn(j),(x.length+R)%2==0&&(x+="0"),O=Math.sqrt(+x),R=rn((R+1)/2)-(R<0||R%2),O==1/0?x="5e"+R:(x=O.toExponential(),x=x.slice(0,x.indexOf("e")+1)+R),S=new E(x)):S=new E(O+""),S.c[0]){for(R=S.e,O=R+U,O<3&&(O=0);;)if(I=S,S=D.times(I.plus(t(W,I,U,1))),tn(I.c).slice(0,O)===(x=tn(S.c)).slice(0,O))if(S.e<R&&--O,x=x.slice(O-3,O+1),x=="9999"||!P&&x=="4999"){if(!P&&(q(I,I.e+s+2,0),I.times(I).eq(W))){S=I;break}U+=4,O+=4,P=1}else{(!+x||!+x.slice(1)&&x.charAt(0)=="5")&&(q(S,S.e+s+2,1),y=!S.times(S).eq(W));break}}return q(S,S.e+s+1,a,y)},o.toExponential=function(y,x){return y!=null&&(nt(y,0,yt),y++),z(this,y,x,1)},o.toFixed=function(y,x){return y!=null&&(nt(y,0,yt),y=y+this.e+1),z(this,y,x)},o.toFormat=function(y,x,S){var P,I=this;if(S==null)y!=null&&x&&typeof x=="object"?(S=x,x=null):y&&typeof y=="object"?(S=y,y=x=null):S=$;else if(typeof S!="object")throw Error(Wt+"Argument not an object: "+S);if(P=I.toFixed(y,x),I.c){var W,j=P.split("."),O=+S.groupSize,R=+S.secondaryGroupSize,U=S.groupSeparator||"",D=j[0],G=j[1],te=I.s<0,ne=te?D.slice(1):D,fe=ne.length;if(R&&(W=O,O=R,R=W,fe-=W),O>0&&fe>0){for(W=fe%O||O,D=ne.substr(0,W);W<fe;W+=O)D+=U+ne.substr(W,O);R>0&&(D+=U+ne.slice(W)),te&&(D="-"+D)}P=G?D+(S.decimalSeparator||"")+((R=+S.fractionGroupSize)?G.replace(new RegExp("\\d{"+R+"}\\B","g"),"$&"+(S.fractionGroupSeparator||"")):G):D}return(S.prefix||"")+P+(S.suffix||"")},o.toFraction=function(y){var x,S,P,I,W,j,O,R,U,D,G,te,ne=this,fe=ne.c;if(y!=null&&(O=new E(y),!O.isInteger()&&(O.c||O.s!==1)||O.lt(i)))throw Error(Wt+"Argument "+(O.isInteger()?"out of range: ":"not an integer: ")+Z(O));if(!fe)return new E(ne);for(x=new E(i),U=S=new E(i),P=R=new E(i),te=tn(fe),W=x.e=te.length-ne.e-1,x.c[0]=Oc[(j=W%ke)<0?ke+j:j],y=!y||O.comparedTo(x)>0?W>0?x:U:O,j=p,p=1/0,O=new E(te),R.c[0]=0;D=t(O,x,0,1),I=S.plus(D.times(P)),I.comparedTo(y)!=1;)S=P,P=I,U=R.plus(D.times(I=U)),R=I,x=O.minus(D.times(I=x)),O=I;return I=t(y.minus(S),P,0,1),R=R.plus(I.times(U)),S=S.plus(I.times(P)),R.s=U.s=ne.s,W=W*2,G=t(U,P,W,a).minus(ne).abs().comparedTo(t(R,S,W,a).minus(ne).abs())<1?[U,P]:[R,S],p=j,G},o.toNumber=function(){return+Z(this)},o.toPrecision=function(y,x){return y!=null&&nt(y,1,yt),z(this,y,x,2)},o.toString=function(y){var x,S=this,P=S.s,I=S.e;return I===null?P?(x="Infinity",P<0&&(x="-"+x)):x="NaN":(y==null?x=I<=l||I>=h?pa(tn(S.c),I):Vn(tn(S.c),I,"0"):y===10&&A?(S=q(new E(S),s+I+1,a),x=Vn(tn(S.c),S.e,"0")):(nt(y,2,k.length,"Base"),x=n(Vn(tn(S.c),I,"0"),10,y,P,!0)),P<0&&S.c[0]&&(x="-"+x)),x},o.valueOf=o.toJSON=function(){return Z(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,e!=null&&E.set(e),E}function rn(e){var t=e|0;return e>0||e===t?t:t-1}function tn(e){for(var t,n,r=1,o=e.length,i=e[0]+"";r<o;){for(t=e[r++]+"",n=ke-t.length;n--;t="0"+t);i+=t}for(o=i.length;i.charCodeAt(--o)===48;);return i.slice(0,o+1||1)}function qr(e,t){var n,r,o=e.c,i=t.c,s=e.s,a=t.s,l=e.e,h=t.e;if(!s||!a)return null;if(n=o&&!o[0],r=i&&!i[0],n||r)return n?r?0:-a:s;if(s!=a)return s;if(n=s<0,r=l==h,!o||!i)return r?0:!o^n?1:-1;if(!r)return l>h^n?1:-1;for(a=(l=o.length)<(h=i.length)?l:h,s=0;s<a;s++)if(o[s]!=i[s])return o[s]>i[s]^n?1:-1;return l==h?0:l>h^n?1:-1}function nt(e,t,n,r){if(e<t||e>n||e!==nn(e))throw Error(Wt+(r||"Argument")+(typeof e=="number"?e<t||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function ha(e){var t=e.c.length-1;return rn(e.e/ke)==t&&e.c[t]%2!=0}function pa(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function Vn(e,t,n){var r,o;if(t<0){for(o=n+".";++t;o+=n);e=o+e}else if(r=e.length,++t>r){for(o=n,t-=r;--t;o+=n);e+=o}else t<r&&(e=e.slice(0,t)+"."+e.slice(t));return e}var Nc=vm(),bm={exports:{}};(function(e){var t=function(n){var r=1e7,o=7,i=9007199254740992,s=_(i),a="0123456789abcdefghijklmnopqrstuvwxyz",l=typeof BigInt=="function";function h(m,f,c,u){return typeof m>"u"?h[0]:typeof f<"u"?+f==10&&!c?H(m):J(m,f,c,u):H(m)}function d(m,f){this.value=m,this.sign=f,this.isSmall=!1}d.prototype=Object.create(h.prototype);function p(m){this.value=m,this.sign=m<0,this.isSmall=!0}p.prototype=Object.create(h.prototype);function g(m){this.value=m}g.prototype=Object.create(h.prototype);function C(m){return-i<m&&m<i}function _(m){return m<1e7?[m]:m<1e14?[m%1e7,Math.floor(m/1e7)]:[m%1e7,Math.floor(m/1e7)%1e7,Math.floor(m/1e14)]}function $(m){k(m);var f=m.length;if(f<4&&te(m,s)<0)switch(f){case 0:return 0;case 1:return m[0];case 2:return m[0]+m[1]*r;default:return m[0]+(m[1]+m[2]*r)*r}return m}function k(m){for(var f=m.length;m[--f]===0;);m.length=f+1}function A(m){for(var f=new Array(m),c=-1;++c<m;)f[c]=0;return f}function E(m){return m>0?Math.floor(m):Math.ceil(m)}function z(m,f){var c=m.length,u=f.length,b=new Array(c),T=0,B=r,F,ee;for(ee=0;ee<u;ee++)F=m[ee]+f[ee]+T,T=F>=B?1:0,b[ee]=F-T*B;for(;ee<c;)F=m[ee]+T,T=F===B?1:0,b[ee++]=F-T*B;return T>0&&b.push(T),b}function N(m,f){return m.length>=f.length?z(m,f):z(f,m)}function V(m,f){var c=m.length,u=new Array(c),b=r,T,B;for(B=0;B<c;B++)T=m[B]-b+f,f=Math.floor(T/b),u[B]=T-f*b,f+=1;for(;f>0;)u[B++]=f%b,f=Math.floor(f/b);return u}d.prototype.add=function(m){var f=H(m);if(this.sign!==f.sign)return this.subtract(f.negate());var c=this.value,u=f.value;return f.isSmall?new d(V(c,Math.abs(u)),this.sign):new d(N(c,u),this.sign)},d.prototype.plus=d.prototype.add,p.prototype.add=function(m){var f=H(m),c=this.value;if(c<0!==f.sign)return this.subtract(f.negate());var u=f.value;if(f.isSmall){if(C(c+u))return new p(c+u);u=_(Math.abs(u))}return new d(V(u,Math.abs(c)),c<0)},p.prototype.plus=p.prototype.add,g.prototype.add=function(m){return new g(this.value+H(m).value)},g.prototype.plus=g.prototype.add;function q(m,f){var c=m.length,u=f.length,b=new Array(c),T=0,B=r,F,ee;for(F=0;F<u;F++)ee=m[F]-T-f[F],ee<0?(ee+=B,T=1):T=0,b[F]=ee;for(F=u;F<c;F++){if(ee=m[F]-T,ee<0)ee+=B;else{b[F++]=ee;break}b[F]=ee}for(;F<c;F++)b[F]=m[F];return k(b),b}function Z(m,f,c){var u;return te(m,f)>=0?u=q(m,f):(u=q(f,m),c=!c),u=$(u),typeof u=="number"?(c&&(u=-u),new p(u)):new d(u,c)}function y(m,f,c){var u=m.length,b=new Array(u),T=-f,B=r,F,ee;for(F=0;F<u;F++)ee=m[F]+T,T=Math.floor(ee/B),ee%=B,b[F]=ee<0?ee+B:ee;return b=$(b),typeof b=="number"?(c&&(b=-b),new p(b)):new d(b,c)}d.prototype.subtract=function(m){var f=H(m);if(this.sign!==f.sign)return this.add(f.negate());var c=this.value,u=f.value;return f.isSmall?y(c,Math.abs(u),this.sign):Z(c,u,this.sign)},d.prototype.minus=d.prototype.subtract,p.prototype.subtract=function(m){var f=H(m),c=this.value;if(c<0!==f.sign)return this.add(f.negate());var u=f.value;return f.isSmall?new p(c-u):y(u,Math.abs(c),c>=0)},p.prototype.minus=p.prototype.subtract,g.prototype.subtract=function(m){return new g(this.value-H(m).value)},g.prototype.minus=g.prototype.subtract,d.prototype.negate=function(){return new d(this.value,!this.sign)},p.prototype.negate=function(){var m=this.sign,f=new p(-this.value);return f.sign=!m,f},g.prototype.negate=function(){return new g(-this.value)},d.prototype.abs=function(){return new d(this.value,!1)},p.prototype.abs=function(){return new p(Math.abs(this.value))},g.prototype.abs=function(){return new g(this.value>=0?this.value:-this.value)};function x(m,f){var c=m.length,u=f.length,b=c+u,T=A(b),B=r,F,ee,pe,we,ye;for(pe=0;pe<c;++pe){we=m[pe];for(var Te=0;Te<u;++Te)ye=f[Te],F=we*ye+T[pe+Te],ee=Math.floor(F/B),T[pe+Te]=F-ee*B,T[pe+Te+1]+=ee}return k(T),T}function S(m,f){var c=m.length,u=new Array(c),b=r,T=0,B,F;for(F=0;F<c;F++)B=m[F]*f+T,T=Math.floor(B/b),u[F]=B-T*b;for(;T>0;)u[F++]=T%b,T=Math.floor(T/b);return u}function P(m,f){for(var c=[];f-- >0;)c.push(0);return c.concat(m)}function I(m,f){var c=Math.max(m.length,f.length);if(c<=30)return x(m,f);c=Math.ceil(c/2);var u=m.slice(c),b=m.slice(0,c),T=f.slice(c),B=f.slice(0,c),F=I(b,B),ee=I(u,T),pe=I(N(b,u),N(B,T)),we=N(N(F,P(q(q(pe,F),ee),c)),P(ee,2*c));return k(we),we}function W(m,f){return-.012*m-.012*f+15e-6*m*f>0}d.prototype.multiply=function(m){var f=H(m),c=this.value,u=f.value,b=this.sign!==f.sign,T;if(f.isSmall){if(u===0)return h[0];if(u===1)return this;if(u===-1)return this.negate();if(T=Math.abs(u),T<r)return new d(S(c,T),b);u=_(T)}return W(c.length,u.length)?new d(I(c,u),b):new d(x(c,u),b)},d.prototype.times=d.prototype.multiply;function j(m,f,c){return m<r?new d(S(f,m),c):new d(x(f,_(m)),c)}p.prototype._multiplyBySmall=function(m){return C(m.value*this.value)?new p(m.value*this.value):j(Math.abs(m.value),_(Math.abs(this.value)),this.sign!==m.sign)},d.prototype._multiplyBySmall=function(m){return m.value===0?h[0]:m.value===1?this:m.value===-1?this.negate():j(Math.abs(m.value),this.value,this.sign!==m.sign)},p.prototype.multiply=function(m){return H(m)._multiplyBySmall(this)},p.prototype.times=p.prototype.multiply,g.prototype.multiply=function(m){return new g(this.value*H(m).value)},g.prototype.times=g.prototype.multiply;function O(m){var f=m.length,c=A(f+f),u=r,b,T,B,F,ee;for(B=0;B<f;B++){F=m[B],T=0-F*F;for(var pe=B;pe<f;pe++)ee=m[pe],b=2*(F*ee)+c[B+pe]+T,T=Math.floor(b/u),c[B+pe]=b-T*u;c[B+f]=T}return k(c),c}d.prototype.square=function(){return new d(O(this.value),!1)},p.prototype.square=function(){var m=this.value*this.value;return C(m)?new p(m):new d(O(_(Math.abs(this.value))),!1)},g.prototype.square=function(m){return new g(this.value*this.value)};function R(m,f){var c=m.length,u=f.length,b=r,T=A(f.length),B=f[u-1],F=Math.ceil(b/(2*B)),ee=S(m,F),pe=S(f,F),we,ye,Te,qt,Ut,Hl,zl;for(ee.length<=c&&ee.push(0),pe.push(0),B=pe[u-1],ye=c-u;ye>=0;ye--){for(we=b-1,ee[ye+u]!==B&&(we=Math.floor((ee[ye+u]*b+ee[ye+u-1])/B)),Te=0,qt=0,Hl=pe.length,Ut=0;Ut<Hl;Ut++)Te+=we*pe[Ut],zl=Math.floor(Te/b),qt+=ee[ye+Ut]-(Te-zl*b),Te=zl,qt<0?(ee[ye+Ut]=qt+b,qt=-1):(ee[ye+Ut]=qt,qt=0);for(;qt!==0;){for(we-=1,Te=0,Ut=0;Ut<Hl;Ut++)Te+=ee[ye+Ut]-b+pe[Ut],Te<0?(ee[ye+Ut]=Te+b,Te=0):(ee[ye+Ut]=Te,Te=1);qt+=Te}T[ye]=we}return ee=D(ee,F)[0],[$(T),$(ee)]}function U(m,f){for(var c=m.length,u=f.length,b=[],T=[],B=r,F,ee,pe,we,ye;c;){if(T.unshift(m[--c]),k(T),te(T,f)<0){b.push(0);continue}ee=T.length,pe=T[ee-1]*B+T[ee-2],we=f[u-1]*B+f[u-2],ee>u&&(pe=(pe+1)*B),F=Math.ceil(pe/we);do{if(ye=S(f,F),te(ye,T)<=0)break;F--}while(F);b.push(F),T=q(T,ye)}return b.reverse(),[$(b),$(T)]}function D(m,f){var c=m.length,u=A(c),b=r,T,B,F,ee;for(F=0,T=c-1;T>=0;--T)ee=F*b+m[T],B=E(ee/f),F=ee-B*f,u[T]=B|0;return[u,F|0]}function G(m,f){var c,u=H(f);if(l)return[new g(m.value/u.value),new g(m.value%u.value)];var b=m.value,T=u.value,B;if(T===0)throw new Error("Cannot divide by zero");if(m.isSmall)return u.isSmall?[new p(E(b/T)),new p(b%T)]:[h[0],m];if(u.isSmall){if(T===1)return[m,h[0]];if(T==-1)return[m.negate(),h[0]];var F=Math.abs(T);if(F<r){c=D(b,F),B=$(c[0]);var ee=c[1];return m.sign&&(ee=-ee),typeof B=="number"?(m.sign!==u.sign&&(B=-B),[new p(B),new p(ee)]):[new d(B,m.sign!==u.sign),new p(ee)]}T=_(F)}var pe=te(b,T);if(pe===-1)return[h[0],m];if(pe===0)return[h[m.sign===u.sign?1:-1],h[0]];b.length+T.length<=200?c=R(b,T):c=U(b,T),B=c[0];var we=m.sign!==u.sign,ye=c[1],Te=m.sign;return typeof B=="number"?(we&&(B=-B),B=new p(B)):B=new d(B,we),typeof ye=="number"?(Te&&(ye=-ye),ye=new p(ye)):ye=new d(ye,Te),[B,ye]}d.prototype.divmod=function(m){var f=G(this,m);return{quotient:f[0],remainder:f[1]}},g.prototype.divmod=p.prototype.divmod=d.prototype.divmod,d.prototype.divide=function(m){return G(this,m)[0]},g.prototype.over=g.prototype.divide=function(m){return new g(this.value/H(m).value)},p.prototype.over=p.prototype.divide=d.prototype.over=d.prototype.divide,d.prototype.mod=function(m){return G(this,m)[1]},g.prototype.mod=g.prototype.remainder=function(m){return new g(this.value%H(m).value)},p.prototype.remainder=p.prototype.mod=d.prototype.remainder=d.prototype.mod,d.prototype.pow=function(m){var f=H(m),c=this.value,u=f.value,b,T,B;if(u===0)return h[1];if(c===0)return h[0];if(c===1)return h[1];if(c===-1)return f.isEven()?h[1]:h[-1];if(f.sign)return h[0];if(!f.isSmall)throw new Error("The exponent "+f.toString()+" is too large.");if(this.isSmall&&C(b=Math.pow(c,u)))return new p(E(b));for(T=this,B=h[1];u&!0&&(B=B.times(T),--u),u!==0;)u/=2,T=T.square();return B},p.prototype.pow=d.prototype.pow,g.prototype.pow=function(m){var f=H(m),c=this.value,u=f.value,b=BigInt(0),T=BigInt(1),B=BigInt(2);if(u===b)return h[1];if(c===b)return h[0];if(c===T)return h[1];if(c===BigInt(-1))return f.isEven()?h[1]:h[-1];if(f.isNegative())return new g(b);for(var F=this,ee=h[1];(u&T)===T&&(ee=ee.times(F),--u),u!==b;)u/=B,F=F.square();return ee},d.prototype.modPow=function(m,f){if(m=H(m),f=H(f),f.isZero())throw new Error("Cannot take modPow with modulus 0");var c=h[1],u=this.mod(f);for(m.isNegative()&&(m=m.multiply(h[-1]),u=u.modInv(f));m.isPositive();){if(u.isZero())return h[0];m.isOdd()&&(c=c.multiply(u).mod(f)),m=m.divide(2),u=u.square().mod(f)}return c},g.prototype.modPow=p.prototype.modPow=d.prototype.modPow;function te(m,f){if(m.length!==f.length)return m.length>f.length?1:-1;for(var c=m.length-1;c>=0;c--)if(m[c]!==f[c])return m[c]>f[c]?1:-1;return 0}d.prototype.compareAbs=function(m){var f=H(m),c=this.value,u=f.value;return f.isSmall?1:te(c,u)},p.prototype.compareAbs=function(m){var f=H(m),c=Math.abs(this.value),u=f.value;return f.isSmall?(u=Math.abs(u),c===u?0:c>u?1:-1):-1},g.prototype.compareAbs=function(m){var f=this.value,c=H(m).value;return f=f>=0?f:-f,c=c>=0?c:-c,f===c?0:f>c?1:-1},d.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=H(m),c=this.value,u=f.value;return this.sign!==f.sign?f.sign?1:-1:f.isSmall?this.sign?-1:1:te(c,u)*(this.sign?-1:1)},d.prototype.compareTo=d.prototype.compare,p.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=H(m),c=this.value,u=f.value;return f.isSmall?c==u?0:c>u?1:-1:c<0!==f.sign?c<0?-1:1:c<0?1:-1},p.prototype.compareTo=p.prototype.compare,g.prototype.compare=function(m){if(m===1/0)return-1;if(m===-1/0)return 1;var f=this.value,c=H(m).value;return f===c?0:f>c?1:-1},g.prototype.compareTo=g.prototype.compare,d.prototype.equals=function(m){return this.compare(m)===0},g.prototype.eq=g.prototype.equals=p.prototype.eq=p.prototype.equals=d.prototype.eq=d.prototype.equals,d.prototype.notEquals=function(m){return this.compare(m)!==0},g.prototype.neq=g.prototype.notEquals=p.prototype.neq=p.prototype.notEquals=d.prototype.neq=d.prototype.notEquals,d.prototype.greater=function(m){return this.compare(m)>0},g.prototype.gt=g.prototype.greater=p.prototype.gt=p.prototype.greater=d.prototype.gt=d.prototype.greater,d.prototype.lesser=function(m){return this.compare(m)<0},g.prototype.lt=g.prototype.lesser=p.prototype.lt=p.prototype.lesser=d.prototype.lt=d.prototype.lesser,d.prototype.greaterOrEquals=function(m){return this.compare(m)>=0},g.prototype.geq=g.prototype.greaterOrEquals=p.prototype.geq=p.prototype.greaterOrEquals=d.prototype.geq=d.prototype.greaterOrEquals,d.prototype.lesserOrEquals=function(m){return this.compare(m)<=0},g.prototype.leq=g.prototype.lesserOrEquals=p.prototype.leq=p.prototype.lesserOrEquals=d.prototype.leq=d.prototype.lesserOrEquals,d.prototype.isEven=function(){return(this.value[0]&1)===0},p.prototype.isEven=function(){return(this.value&1)===0},g.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},d.prototype.isOdd=function(){return(this.value[0]&1)===1},p.prototype.isOdd=function(){return(this.value&1)===1},g.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},d.prototype.isPositive=function(){return!this.sign},p.prototype.isPositive=function(){return this.value>0},g.prototype.isPositive=p.prototype.isPositive,d.prototype.isNegative=function(){return this.sign},p.prototype.isNegative=function(){return this.value<0},g.prototype.isNegative=p.prototype.isNegative,d.prototype.isUnit=function(){return!1},p.prototype.isUnit=function(){return Math.abs(this.value)===1},g.prototype.isUnit=function(){return this.abs().value===BigInt(1)},d.prototype.isZero=function(){return!1},p.prototype.isZero=function(){return this.value===0},g.prototype.isZero=function(){return this.value===BigInt(0)},d.prototype.isDivisibleBy=function(m){var f=H(m);return f.isZero()?!1:f.isUnit()?!0:f.compareAbs(2)===0?this.isEven():this.mod(f).isZero()},g.prototype.isDivisibleBy=p.prototype.isDivisibleBy=d.prototype.isDivisibleBy;function ne(m){var f=m.abs();if(f.isUnit())return!1;if(f.equals(2)||f.equals(3)||f.equals(5))return!0;if(f.isEven()||f.isDivisibleBy(3)||f.isDivisibleBy(5))return!1;if(f.lesser(49))return!0}function fe(m,f){for(var c=m.prev(),u=c,b=0,T,B,F;u.isEven();)u=u.divide(2),b++;e:for(B=0;B<f.length;B++)if(!m.lesser(f[B])&&(F=t(f[B]).modPow(u,m),!(F.isUnit()||F.equals(c)))){for(T=b-1;T!=0;T--){if(F=F.square().mod(m),F.isUnit())return!1;if(F.equals(c))continue e}return!1}return!0}d.prototype.isPrime=function(m){var f=ne(this);if(f!==n)return f;var c=this.abs(),u=c.bitLength();if(u<=64)return fe(c,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var b=Math.log(2)*u.toJSNumber(),T=Math.ceil(m===!0?2*Math.pow(b,2):b),B=[],F=0;F<T;F++)B.push(t(F+2));return fe(c,B)},g.prototype.isPrime=p.prototype.isPrime=d.prototype.isPrime,d.prototype.isProbablePrime=function(m,f){var c=ne(this);if(c!==n)return c;for(var u=this.abs(),b=m===n?5:m,T=[],B=0;B<b;B++)T.push(t.randBetween(2,u.minus(2),f));return fe(u,T)},g.prototype.isProbablePrime=p.prototype.isProbablePrime=d.prototype.isProbablePrime,d.prototype.modInv=function(m){for(var f=t.zero,c=t.one,u=H(m),b=this.abs(),T,B,F;!b.isZero();)T=u.divide(b),B=f,F=u,f=c,u=b,c=B.subtract(T.multiply(c)),b=F.subtract(T.multiply(b));if(!u.isUnit())throw new Error(this.toString()+" and "+m.toString()+" are not co-prime");return f.compare(0)===-1&&(f=f.add(m)),this.isNegative()?f.negate():f},g.prototype.modInv=p.prototype.modInv=d.prototype.modInv,d.prototype.next=function(){var m=this.value;return this.sign?y(m,1,this.sign):new d(V(m,1),this.sign)},p.prototype.next=function(){var m=this.value;return m+1<i?new p(m+1):new d(s,!1)},g.prototype.next=function(){return new g(this.value+BigInt(1))},d.prototype.prev=function(){var m=this.value;return this.sign?new d(V(m,1),!0):y(m,1,this.sign)},p.prototype.prev=function(){var m=this.value;return m-1>-i?new p(m-1):new d(s,!0)},g.prototype.prev=function(){return new g(this.value-BigInt(1))};for(var _e=[1];2*_e[_e.length-1]<=r;)_e.push(2*_e[_e.length-1]);var Ae=_e.length,xe=_e[Ae-1];function Ee(m){return Math.abs(m)<=r}d.prototype.shiftLeft=function(m){var f=H(m).toJSNumber();if(!Ee(f))throw new Error(String(f)+" is too large for shifting.");if(f<0)return this.shiftRight(-f);var c=this;if(c.isZero())return c;for(;f>=Ae;)c=c.multiply(xe),f-=Ae-1;return c.multiply(_e[f])},g.prototype.shiftLeft=p.prototype.shiftLeft=d.prototype.shiftLeft,d.prototype.shiftRight=function(m){var f,c=H(m).toJSNumber();if(!Ee(c))throw new Error(String(c)+" is too large for shifting.");if(c<0)return this.shiftLeft(-c);for(var u=this;c>=Ae;){if(u.isZero()||u.isNegative()&&u.isUnit())return u;f=G(u,xe),u=f[1].isNegative()?f[0].prev():f[0],c-=Ae-1}return f=G(u,_e[c]),f[1].isNegative()?f[0].prev():f[0]},g.prototype.shiftRight=p.prototype.shiftRight=d.prototype.shiftRight;function Q(m,f,c){f=H(f);for(var u=m.isNegative(),b=f.isNegative(),T=u?m.not():m,B=b?f.not():f,F=0,ee=0,pe=null,we=null,ye=[];!T.isZero()||!B.isZero();)pe=G(T,xe),F=pe[1].toJSNumber(),u&&(F=xe-1-F),we=G(B,xe),ee=we[1].toJSNumber(),b&&(ee=xe-1-ee),T=pe[0],B=we[0],ye.push(c(F,ee));for(var Te=c(u?1:0,b?1:0)!==0?t(-1):t(0),qt=ye.length-1;qt>=0;qt-=1)Te=Te.multiply(xe).add(t(ye[qt]));return Te}d.prototype.not=function(){return this.negate().prev()},g.prototype.not=p.prototype.not=d.prototype.not,d.prototype.and=function(m){return Q(this,m,function(f,c){return f&c})},g.prototype.and=p.prototype.and=d.prototype.and,d.prototype.or=function(m){return Q(this,m,function(f,c){return f|c})},g.prototype.or=p.prototype.or=d.prototype.or,d.prototype.xor=function(m){return Q(this,m,function(f,c){return f^c})},g.prototype.xor=p.prototype.xor=d.prototype.xor;var ue=1<<30,oe=(r&-r)*(r&-r)|ue;function de(m){var f=m.value,c=typeof f=="number"?f|ue:typeof f=="bigint"?f|BigInt(ue):f[0]+f[1]*r|oe;return c&-c}function Ce(m,f){if(f.compareTo(m)<=0){var c=Ce(m,f.square(f)),u=c.p,b=c.e,T=u.multiply(f);return T.compareTo(m)<=0?{p:T,e:b*2+1}:{p:u,e:b*2}}return{p:t(1),e:0}}d.prototype.bitLength=function(){var m=this;return m.compareTo(t(0))<0&&(m=m.negate().subtract(t(1))),m.compareTo(t(0))===0?t(0):t(Ce(m,t(2)).e).add(t(1))},g.prototype.bitLength=p.prototype.bitLength=d.prototype.bitLength;function M(m,f){return m=H(m),f=H(f),m.greater(f)?m:f}function w(m,f){return m=H(m),f=H(f),m.lesser(f)?m:f}function v(m,f){if(m=H(m).abs(),f=H(f).abs(),m.equals(f))return m;if(m.isZero())return f;if(f.isZero())return m;for(var c=h[1],u,b;m.isEven()&&f.isEven();)u=w(de(m),de(f)),m=m.divide(u),f=f.divide(u),c=c.multiply(u);for(;m.isEven();)m=m.divide(de(m));do{for(;f.isEven();)f=f.divide(de(f));m.greater(f)&&(b=f,f=m,m=b),f=f.subtract(m)}while(!f.isZero());return c.isUnit()?m:m.multiply(c)}function L(m,f){return m=H(m).abs(),f=H(f).abs(),m.divide(v(m,f)).multiply(f)}function K(m,f,c){m=H(m),f=H(f);var u=c||Math.random,b=w(m,f),T=M(m,f),B=T.subtract(b).add(1);if(B.isSmall)return b.add(Math.floor(u()*B));for(var F=le(B,r).value,ee=[],pe=!0,we=0;we<F.length;we++){var ye=pe?F[we]+(we+1<F.length?F[we+1]/r:0):r,Te=E(u()*ye);ee.push(Te),Te<F[we]&&(pe=!1)}return b.add(h.fromArray(ee,r,!1))}var J=function(m,f,c,u){c=c||a,m=String(m),u||(m=m.toLowerCase(),c=c.toLowerCase());var b=m.length,T,B=Math.abs(f),F={};for(T=0;T<c.length;T++)F[c[T]]=T;for(T=0;T<b;T++){var ee=m[T];if(ee!=="-"&&ee in F&&F[ee]>=B){if(ee==="1"&&B===1)continue;throw new Error(ee+" is not a valid digit in base "+f+".")}}f=H(f);var pe=[],we=m[0]==="-";for(T=we?1:0;T<m.length;T++){var ee=m[T];if(ee in F)pe.push(H(F[ee]));else if(ee==="<"){var ye=T;do T++;while(m[T]!==">"&&T<m.length);pe.push(H(m.slice(ye+1,T)))}else throw new Error(ee+" is not a valid character")}return re(pe,f,we)};function re(m,f,c){var u=h[0],b=h[1],T;for(T=m.length-1;T>=0;T--)u=u.add(m[T].times(b)),b=b.times(f);return c?u.negate():u}function ae(m,f){return f=f||a,m<f.length?f[m]:"<"+m+">"}function le(m,f){if(f=t(f),f.isZero()){if(m.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(f.equals(-1)){if(m.isZero())return{value:[0],isNegative:!1};if(m.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-m.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var c=Array.apply(null,Array(m.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return c.unshift([1]),{value:[].concat.apply([],c),isNegative:!1}}var u=!1;if(m.isNegative()&&f.isPositive()&&(u=!0,m=m.abs()),f.isUnit())return m.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(m.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:u};for(var b=[],T=m,B;T.isNegative()||T.compareAbs(f)>=0;){B=T.divmod(f),T=B.quotient;var F=B.remainder;F.isNegative()&&(F=f.minus(F).abs(),T=T.next()),b.push(F.toJSNumber())}return b.push(T.toJSNumber()),{value:b.reverse(),isNegative:u}}function ie(m,f,c){var u=le(m,f);return(u.isNegative?"-":"")+u.value.map(function(b){return ae(b,c)}).join("")}d.prototype.toArray=function(m){return le(this,m)},p.prototype.toArray=function(m){return le(this,m)},g.prototype.toArray=function(m){return le(this,m)},d.prototype.toString=function(m,f){if(m===n&&(m=10),m!==10)return ie(this,m,f);for(var c=this.value,u=c.length,b=String(c[--u]),T="0000000",B;--u>=0;)B=String(c[u]),b+=T.slice(B.length)+B;var F=this.sign?"-":"";return F+b},p.prototype.toString=function(m,f){return m===n&&(m=10),m!=10?ie(this,m,f):String(this.value)},g.prototype.toString=p.prototype.toString,g.prototype.toJSON=d.prototype.toJSON=p.prototype.toJSON=function(){return this.toString()},d.prototype.valueOf=function(){return parseInt(this.toString(),10)},d.prototype.toJSNumber=d.prototype.valueOf,p.prototype.valueOf=function(){return this.value},p.prototype.toJSNumber=p.prototype.valueOf,g.prototype.valueOf=g.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function be(m){if(C(+m)){var f=+m;if(f===E(f))return l?new g(BigInt(f)):new p(f);throw new Error("Invalid integer: "+m)}var c=m[0]==="-";c&&(m=m.slice(1));var u=m.split(/e/i);if(u.length>2)throw new Error("Invalid integer: "+u.join("e"));if(u.length===2){var b=u[1];if(b[0]==="+"&&(b=b.slice(1)),b=+b,b!==E(b)||!C(b))throw new Error("Invalid integer: "+b+" is not a valid exponent.");var T=u[0],B=T.indexOf(".");if(B>=0&&(b-=T.length-B-1,T=T.slice(0,B)+T.slice(B+1)),b<0)throw new Error("Cannot include negative exponent part for integers");T+=new Array(b+1).join("0"),m=T}var F=/^([0-9][0-9]*)$/.test(m);if(!F)throw new Error("Invalid integer: "+m);if(l)return new g(BigInt(c?"-"+m:m));for(var ee=[],pe=m.length,we=o,ye=pe-we;pe>0;)ee.push(+m.slice(ye,pe)),ye-=we,ye<0&&(ye=0),pe-=we;return k(ee),new d(ee,c)}function he(m){if(l)return new g(BigInt(m));if(C(m)){if(m!==E(m))throw new Error(m+" is not an integer.");return new p(m)}return be(m.toString())}function H(m){return typeof m=="number"?he(m):typeof m=="string"?be(m):typeof m=="bigint"?new g(m):m}for(var X=0;X<1e3;X++)h[X]=H(X),X>0&&(h[-X]=H(-X));return h.one=h[1],h.zero=h[0],h.minusOne=h[-1],h.max=M,h.min=w,h.gcd=v,h.lcm=L,h.isInstance=function(m){return m instanceof d||m instanceof p||m instanceof g},h.randBetween=K,h.fromArray=function(m,f,c){return re(m.map(H),H(f||10),c)},h}();e.hasOwnProperty("exports")&&(e.exports=t)})(bm);var j9=bm.exports;const fr=_l(j9),H9={mathpow(e,t){var n;e?n=Nc(e.toString()):n=Nc(e);var r=Nc(Math.pow(10,t||8)),o=n.div(r);return o.toString()},mathpow1(e,t){let n="";if(e&&(n=e.toString()),n.length>t){const r=n.slice(0,n.length-t),o=n.slice(0-t);return r+"."+o}else return t==n.length?"0."+n:"0."+new Array(t-n.length).fill(0).join("")+n},mathlog(e,t){const n=e+"";if(n.includes(".")){const o=n.split(".");let i=new Array(t).fill(0);const s=o[0],a=o[1];for(var r=1;r<=a.length;r++)i.pop();return s+a+i.join("")}return e+new Array(t).fill(0).join("")},plus(e,t){if(e!==""&&t!==""){const n=fr(e),r=fr(t);return n.add(r).toString()}else return 0},minus(e,t){if(e!=""&&t!=""){const n=fr(e),r=fr(t);return n.subtract(r).toString()}else return 0},multiplication(e,t){if(e!=""&&t!=""){const n=fr(e),r=fr(t);return n.multiply(r).toString()}else return 0},division(e,t){if(e!=""&&t!=""){const n=fr(e),r=fr(t);return n.divide(r).toString()}else return 0},async switchNetwork(e){await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+e}]})},async linkWallet({successFn:e,errorFn:t}){if(window.ethereum){try{const n=await window.ethereum.request({method:"eth_requestAccounts"});e(n)}catch(n){t(n)}setTimeout(()=>{window.ethereum&&window.ethereum.on("accountsChanged",function(){window.location.reload()}),window.ethereum&&window.ethereum.on("chainChanged",function(){window.location.reload()})},1e3)}},dealNumber(e,t=0){return e*1>1e4&&e%1e4==0?`${(e/1e4).toFixed()}万`:(e*1).toFixed(t)},copy(e){var t=document.createElement("input");t.setAttribute("id","copyInput"),t.setAttribute("value",e),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("copyInput").select(),document.execCommand("Copy"),document.getElementById("copyInput").remove()},fixedNumber2(e){let t=e+"";if(t.includes(".")){const n=t.split(".");return n[0]+"."+n[1].slice(0,2)}return t},formatDate(e){let t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1;r=r<10?"0"+r:r;let o=t.getDate();return o=o<10?"0"+o:o,n+"-"+r+"-"+o},getUrlRequest(){const e=window.location.href,t={},n=/[?&]([^=#]+)=([^&#]*)/g;let r;for(;r=n.exec(e);)t[decodeURIComponent(r[1])]=decodeURIComponent(r[2]);return t},openMeiQia(e,t){const n={zh:"tw",en:"en",fr:"en",ja:"ja",kr:"ko",ru:"ru",th:"th",tr:"en",vi:"vi"},r=localStorage.getItem("NFTLANG");window._MEIQIA("language",n[r]||"en"),window._MEIQIA("metadata",{name:e,address:t}),window._MEIQIA("showPanel")}},z9=Object.freeze(H9),V9={userAddress:"",config:{},userInfo:{},langList:[],usdtBalance:0,tokenInfo:{},headerSearch:null},G9=D9({state:V9,mutations:{setUseraddress(e,t){e.userAddress=t},setConfig(e,t){e.config=t},setUserInfo(e,t){e.userInfo=t},setLangList(e,t){e.langList=t},setBalance(e,t){e.usdtBalance=t},setToken(e,t){e.tokenInfo[t.key]=t.value},setHeaderSearch(e,t){console.log(222333),e.headerSearch=t}},actions:{async updateBalance(e){const t=await py({address:e.state.config.approveContractAddress,abi:F9.coinAbi,functionName:"balanceOf",args:[e.state.userAddress]});return e.commit("setBalance",z9.mathpow(t,6)),e.state.usdtBalance}}});class K9{constructor(){this.events={}}emit(t,n){this.events[t]&&this.events[t].forEach(function(r){r(n)})}on(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)}off(t,n){if(this.events[t]){for(var r=0;r<this.events[t].length;r++)if(this.events[t][r]===n){this.events[t].splice(r,1);break}}}}let $i=K2(Q2);$i.use(y9);$i.use(Df);$i.use(G9);$i.use(jx);$i.mount("#app");let ym=new K9;$i.provide("$bus",ym);$i.config.globalProperties.$bus=ym;export{Xu as _,Be as a,s2 as b,On as c,Hx as d,zx as e,Vx as f,Gx as g,Lu as n,Jt as o,S2 as v,xw as w};
