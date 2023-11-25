import{a as W,i as ae,b as d,c as U,d as O,w as S,e as Jt,D as je,f as C,g as p,h as le,j as G,r as et,k as Kt,l as zt,m as te,s as qt,n as Qt,o as Zt,p as x,q as me,t as fe,u as re,v as Ve,N as ea,x as ta,y as Be,z as aa,A as la,B as na,C as Nt,E as ra,F as pt,G as sa,H as tt,I as at,J as Rt,K as oa,L as ia,M as ca,O as ua,P as _a,Q as ma,R as lt,S as nt,T as rt,U as st,V as ot,W as it,X as ct,Y as fa,Z as ut}from"./@intlify.67c0fc79.js";import"./vue.3c5ef26d.js";import{H as Xe,ag as Ft,ao as ga,A as va,i as Ea,Z as ba,s as da,e as w,j as $,E as Ia,f as We,F as Pt,h as se,B as Ta,ay as La,V as Oa,a5 as Na}from"./@vue.52bf0d45.js";/*!
  * vue-i18n v9.7.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const pa="9.7.1";function Ra(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(te().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(te().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(te().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(te().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(te().__INTLIFY_PROD_DEVTOOLS__=!1)}const ht=oa.__EXTEND_POINT__,B=pt(ht),N={FALLBACK_TO_ROOT:ht,NOT_SUPPORTED_PRESERVE:B(),NOT_SUPPORTED_FORMATTER:B(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:B(),NOT_SUPPORTED_GET_CHOICE_INDEX:B(),COMPONENT_NAME_LEGACY_COMPATIBLE:B(),NOT_FOUND_PARENT_SCOPE:B(),IGNORE_OBJ_FLATTEN:B(),NOTICE_DROP_ALLOW_COMPOSITION:B()},Fa={[N.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[N.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[N.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[N.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[N.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[N.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[N.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope.",[N.IGNORE_OBJ_FLATTEN]:"Ignore object flatten: '{key}' key has an string value",[N.NOTICE_DROP_ALLOW_COMPOSITION]:"'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"};function D(e,...l){return Qt(Fa[e],...l)}const kt=ra.__EXTEND_POINT__,y=pt(kt),b={UNEXPECTED_RETURN_TYPE:kt,INVALID_ARGUMENT:y(),MUST_BE_CALL_SETUP_TOP:y(),NOT_INSTALLED:y(),NOT_AVAILABLE_IN_LEGACY_MODE:y(),REQUIRED_VALUE:y(),INVALID_VALUE:y(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:y(),NOT_INSTALLED_WITH_PROVIDE:y(),UNEXPECTED_ERROR:y(),NOT_COMPATIBLE_LEGACY_VUE_I18N:y(),BRIDGE_SUPPORT_VUE_2_ONLY:y(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:y(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:y(),__EXTEND_POINT__:y()};function h(e,...l){return Zt(e,null,{messages:Pa,args:l})}const Pa={[b.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[b.INVALID_ARGUMENT]:"Invalid argument",[b.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[b.NOT_INSTALLED]:"Need to install with `app.use` function",[b.UNEXPECTED_ERROR]:"Unexpected error",[b.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[b.REQUIRED_VALUE]:"Required in value: {0}",[b.INVALID_VALUE]:"Invalid value",[b.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[b.NOT_INSTALLED_WITH_PROVIDE]:"Need to install with `provide` function",[b.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[b.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only",[b.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]:"Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",[b.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]:"Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"},we=x("__translateVNode"),$e=x("__datetimeParts"),xe=x("__numberParts"),Q=x("__enableEmitter"),oe=x("__disableEmitter"),Ct=x("__setPluralRules"),Mt=x("__injectWithOption"),He=x("__dispose");function ie(e){if(!U(e))return e;for(const l in e)if(fe(e,l))if(!l.includes("."))U(e[l])&&ie(e[l]);else{const a=l.split("."),n=a.length-1;let s=e,t=!1;for(let r=0;r<n;r++){if(a[r]in s||(s[a[r]]={}),!U(s[a[r]])){S(D(N.IGNORE_OBJ_FLATTEN,{key:a[r]})),t=!0;break}s=s[a[r]]}t||(s[a[n]]=e[l],delete e[l]),U(s[a[n]])&&ie(s[a[n]])}return e}function ge(e,l){const{messages:a,__i18n:n,messageResolver:s,flatJson:t}=l,r=p(a)?a:C(n)?{}:{[e]:{}};if(C(n)&&n.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:_,resource:m}=i;_?(r[_]=r[_]||{},me(m,r[_])):me(m,r)}else d(i)&&me(JSON.parse(i),r)}),s==null&&t)for(const i in r)fe(r,i)&&ie(r[i]);return r}function At(e){return e.type}function yt(e,l,a){let n=U(l.messages)?l.messages:{};"__i18nGlobal"in a&&(n=ge(e.locale.value,{messages:n,__i18n:a.__i18nGlobal}));const s=Object.keys(n);s.length&&s.forEach(t=>{e.mergeLocaleMessage(t,n[t])});{if(U(l.datetimeFormats)){const t=Object.keys(l.datetimeFormats);t.length&&t.forEach(r=>{e.mergeDateTimeFormat(r,l.datetimeFormats[r])})}if(U(l.numberFormats)){const t=Object.keys(l.numberFormats);t.length&&t.forEach(r=>{e.mergeNumberFormat(r,l.numberFormats[r])})}}}function _t(e){return Oa(Na,null,e,0)}const mt="__INTLIFY_META__",ft=()=>[],ha=()=>!1;let gt=0;function vt(e){return(l,a,n,s)=>e(a,n,se()||void 0,s)}const ka=()=>{const e=se();let l=null;return e&&(l=At(e)[mt])?{[mt]:l}:null};function Je(e={},l){const{__root:a,__injectWithOption:n}=e,s=a===void 0,t=e.flatJson;let r=O(e.inheritLocale)?e.inheritLocale:!0;const i=w(a&&r?a.locale.value:d(e.locale)?e.locale:je),_=w(a&&r?a.fallbackLocale.value:d(e.fallbackLocale)||C(e.fallbackLocale)||p(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:i.value),m=w(ge(i.value,e)),v=w(p(e.datetimeFormats)?e.datetimeFormats:{[i.value]:{}}),E=w(p(e.numberFormats)?e.numberFormats:{[i.value]:{}});let g=a?a.missingWarn:O(e.missingWarn)||le(e.missingWarn)?e.missingWarn:!0,T=a?a.fallbackWarn:O(e.fallbackWarn)||le(e.fallbackWarn)?e.fallbackWarn:!0,P=a?a.fallbackRoot:O(e.fallbackRoot)?e.fallbackRoot:!0,k=!!e.fallbackFormat,Y=G(e.missing)?e.missing:null,V=G(e.missing)?vt(e.missing):null,M=G(e.postTranslation)?e.postTranslation:null,A=a?a.warnHtmlMessage:O(e.warnHtmlMessage)?e.warnHtmlMessage:!0,X=!!e.escapeParameter;const J=a?a.modifiers:p(e.modifiers)?e.modifiers:{};let K=e.pluralRules||a&&a.pluralRules,f;f=(()=>{s&&ut(null);const o={version:pa,locale:i.value,fallbackLocale:_.value,messages:m.value,modifiers:J,pluralRules:K,missing:V===null?void 0:V,missingWarn:g,fallbackWarn:T,fallbackFormat:k,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:A,escapeParameter:X,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};o.datetimeFormats=v.value,o.numberFormats=E.value,o.__datetimeFormatters=p(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=p(f)?f.__numberFormatters:void 0,o.__v_emitter=p(f)?f.__v_emitter:void 0;const c=sa(o);return s&&ut(c),c})(),re(f,i.value,_.value);function ne(){return[i.value,_.value,m.value,v.value,E.value]}const ve=$({get:()=>i.value,set:o=>{i.value=o,f.locale=i.value}}),Ee=$({get:()=>_.value,set:o=>{_.value=o,f.fallbackLocale=_.value,re(f,i.value,o)}}),be=$(()=>m.value),de=$(()=>v.value),Ie=$(()=>E.value);function Te(){return G(M)?M:null}function j(o){M=o,f.postTranslation=o}function Le(){return Y}function Oe(o){o!==null&&(V=vt(o)),Y=o,f.missing=V}function Ne(o,c){return o!=="translate"||!c.resolvedMessage}const H=(o,c,I,R,z,_e)=>{ne();let ee;try{ia(ka()),s||(f.fallbackContext=a?ca():void 0),ee=o(f)}finally{s||(f.fallbackContext=void 0)}if(I!=="translate exists"&&ae(ee)&&ee===ua||I==="translate exists"&&!ee){const[q,Xt]=c();if(a&&d(q)&&Ne(I,Xt)){P&&(_a(T,q)||ma(g,q))&&S(D(N.FALLBACK_TO_ROOT,{key:q,type:I}));{const{__v_emitter:Ze}=f;Ze&&P&&Ze.emit("fallback",{type:I,key:q,to:"global",groupId:`${I}:${q}`})}}return a&&P?R(a):z(q)}else{if(_e(ee))return ee;throw h(b.UNEXPECTED_RETURN_TYPE)}};function ue(...o){return H(c=>Reflect.apply(nt,null,[c,...o]),()=>lt(...o),"translate",c=>Reflect.apply(c.t,c,[...o]),c=>c,c=>d(c))}function pe(...o){const[c,I,R]=o;if(R&&!U(R))throw h(b.INVALID_ARGUMENT);return ue(c,I,W({resolvedMessage:!0},R||{}))}function Re(...o){return H(c=>Reflect.apply(ot,null,[c,...o]),()=>st(...o),"datetime format",c=>Reflect.apply(c.d,c,[...o]),()=>rt,c=>d(c))}function Fe(...o){return H(c=>Reflect.apply(ct,null,[c,...o]),()=>it(...o),"number format",c=>Reflect.apply(c.n,c,[...o]),()=>rt,c=>d(c))}function Pe(o){return o.map(c=>d(c)||ae(c)||O(c)?_t(String(c)):c)}const he={normalize:Pe,interpolate:o=>o,type:"vnode"};function ke(...o){return H(c=>{let I;const R=c;try{R.processor=he,I=Reflect.apply(nt,null,[R,...o])}finally{R.processor=null}return I},()=>lt(...o),"translate",c=>c[we](...o),c=>[_t(c)],c=>C(c))}function Ce(...o){return H(c=>Reflect.apply(ct,null,[c,...o]),()=>it(...o),"number format",c=>c[xe](...o),ft,c=>d(c)||C(c))}function Me(...o){return H(c=>Reflect.apply(ot,null,[c,...o]),()=>st(...o),"datetime format",c=>c[$e](...o),ft,c=>d(c)||C(c))}function Ae(o){K=o,f.pluralRules=K}function ye(o,c){return H(()=>{if(!o)return!1;const I=d(c)?c:i.value,R=L(I),z=f.messageResolver(R,o);return Rt(z)||fa(z)||d(z)},()=>[o],"translate exists",I=>Reflect.apply(I.te,I,[o,c]),ha,I=>O(I))}function Se(o){let c=null;const I=Nt(f,_.value,i.value);for(let R=0;R<I.length;R++){const z=m.value[I[R]]||{},_e=f.messageResolver(z,o);if(_e!=null){c=_e;break}}return c}function u(o){const c=Se(o);return c??(a?a.tm(o)||{}:{})}function L(o){return m.value[o]||{}}function wt(o,c){if(t){const I={[o]:c};for(const R in I)fe(I,R)&&ie(I[R]);c=I[o]}m.value[o]=c,f.messages=m.value}function $t(o,c){m.value[o]=m.value[o]||{};const I={[o]:c};for(const R in I)fe(I,R)&&ie(I[R]);c=I[o],me(c,m.value[o]),f.messages=m.value}function xt(o){return v.value[o]||{}}function Ht(o,c){v.value[o]=c,f.datetimeFormats=v.value,tt(f,o,c)}function Gt(o,c){v.value[o]=W(v.value[o]||{},c),f.datetimeFormats=v.value,tt(f,o,c)}function Yt(o){return E.value[o]||{}}function jt(o,c){E.value[o]=c,f.numberFormats=E.value,at(f,o,c)}function Bt(o,c){E.value[o]=W(E.value[o]||{},c),f.numberFormats=E.value,at(f,o,c)}gt++,a&&Ve&&(We(a.locale,o=>{r&&(i.value=o,f.locale=o,re(f,i.value,_.value))}),We(a.fallbackLocale,o=>{r&&(_.value=o,f.fallbackLocale=o,re(f,i.value,_.value))}));const F={id:gt,locale:ve,fallbackLocale:Ee,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&a&&(i.value=a.locale.value,_.value=a.fallbackLocale.value,re(f,i.value,_.value))},get availableLocales(){return Object.keys(m.value).sort()},messages:be,get modifiers(){return J},get pluralRules(){return K||{}},get isGlobal(){return s},get missingWarn(){return g},set missingWarn(o){g=o,f.missingWarn=g},get fallbackWarn(){return T},set fallbackWarn(o){T=o,f.fallbackWarn=T},get fallbackRoot(){return P},set fallbackRoot(o){P=o},get fallbackFormat(){return k},set fallbackFormat(o){k=o,f.fallbackFormat=k},get warnHtmlMessage(){return A},set warnHtmlMessage(o){A=o,f.warnHtmlMessage=o},get escapeParameter(){return X},set escapeParameter(o){X=o,f.escapeParameter=o},t:ue,getLocaleMessage:L,setLocaleMessage:wt,mergeLocaleMessage:$t,getPostTranslationHandler:Te,setPostTranslationHandler:j,getMissingHandler:Le,setMissingHandler:Oe,[Ct]:Ae};return F.datetimeFormats=de,F.numberFormats=Ie,F.rt=pe,F.te=ye,F.tm=u,F.d=Re,F.n=Fe,F.getDateTimeFormat=xt,F.setDateTimeFormat=Ht,F.mergeDateTimeFormat=Gt,F.getNumberFormat=Yt,F.setNumberFormat=jt,F.mergeNumberFormat=Bt,F[Mt]=n,F[we]=ke,F[$e]=Me,F[xe]=Ce,F[Q]=o=>{f.__v_emitter=o},F[oe]=()=>{f.__v_emitter=void 0},F}function Ca(e){const l=d(e.locale)?e.locale:je,a=d(e.fallbackLocale)||C(e.fallbackLocale)||p(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l,n=G(e.missing)?e.missing:void 0,s=O(e.silentTranslationWarn)||le(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,t=O(e.silentFallbackWarn)||le(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,r=O(e.fallbackRoot)?e.fallbackRoot:!0,i=!!e.formatFallbackMessages,_=p(e.modifiers)?e.modifiers:{},m=e.pluralizationRules,v=G(e.postTranslation)?e.postTranslation:void 0,E=d(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,g=!!e.escapeParameterHtml,T=O(e.sync)?e.sync:!0;e.formatter&&S(D(N.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&S(D(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let P=e.messages;if(p(e.sharedMessages)){const J=e.sharedMessages;P=Object.keys(J).reduce((f,Z)=>{const ne=f[Z]||(f[Z]={});return W(ne,J[Z]),f},P||{})}const{__i18n:k,__root:Y,__injectWithOption:V}=e,M=e.datetimeFormats,A=e.numberFormats,X=e.flatJson;return{locale:l,fallbackLocale:a,messages:P,flatJson:X,datetimeFormats:M,numberFormats:A,missing:n,missingWarn:s,fallbackWarn:t,fallbackRoot:r,fallbackFormat:i,modifiers:_,pluralRules:m,postTranslation:v,warnHtmlMessage:E,escapeParameter:g,messageResolver:e.messageResolver,inheritLocale:T,__i18n:k,__root:Y,__injectWithOption:V}}function Ge(e={},l){{const a=Je(Ca(e)),{__extender:n}=e,s={id:a.id,get locale(){return a.locale.value},set locale(t){a.locale.value=t},get fallbackLocale(){return a.fallbackLocale.value},set fallbackLocale(t){a.fallbackLocale.value=t},get messages(){return a.messages.value},get datetimeFormats(){return a.datetimeFormats.value},get numberFormats(){return a.numberFormats.value},get availableLocales(){return a.availableLocales},get formatter(){return S(D(N.NOT_SUPPORTED_FORMATTER)),{interpolate(){return[]}}},set formatter(t){S(D(N.NOT_SUPPORTED_FORMATTER))},get missing(){return a.getMissingHandler()},set missing(t){a.setMissingHandler(t)},get silentTranslationWarn(){return O(a.missingWarn)?!a.missingWarn:a.missingWarn},set silentTranslationWarn(t){a.missingWarn=O(t)?!t:t},get silentFallbackWarn(){return O(a.fallbackWarn)?!a.fallbackWarn:a.fallbackWarn},set silentFallbackWarn(t){a.fallbackWarn=O(t)?!t:t},get modifiers(){return a.modifiers},get formatFallbackMessages(){return a.fallbackFormat},set formatFallbackMessages(t){a.fallbackFormat=t},get postTranslation(){return a.getPostTranslationHandler()},set postTranslation(t){a.setPostTranslationHandler(t)},get sync(){return a.inheritLocale},set sync(t){a.inheritLocale=t},get warnHtmlInMessage(){return a.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(t){a.warnHtmlMessage=t!=="off"},get escapeParameterHtml(){return a.escapeParameter},set escapeParameterHtml(t){a.escapeParameter=t},get preserveDirectiveContent(){return S(D(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(t){S(D(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},get pluralizationRules(){return a.pluralRules||{}},__composer:a,t(...t){const[r,i,_]=t,m={};let v=null,E=null;if(!d(r))throw h(b.INVALID_ARGUMENT);const g=r;return d(i)?m.locale=i:C(i)?v=i:p(i)&&(E=i),C(_)?v=_:p(_)&&(E=_),Reflect.apply(a.t,a,[g,v||E||{},m])},rt(...t){return Reflect.apply(a.rt,a,[...t])},tc(...t){const[r,i,_]=t,m={plural:1};let v=null,E=null;if(!d(r))throw h(b.INVALID_ARGUMENT);const g=r;return d(i)?m.locale=i:ae(i)?m.plural=i:C(i)?v=i:p(i)&&(E=i),d(_)?m.locale=_:C(_)?v=_:p(_)&&(E=_),Reflect.apply(a.t,a,[g,v||E||{},m])},te(t,r){return a.te(t,r)},tm(t){return a.tm(t)},getLocaleMessage(t){return a.getLocaleMessage(t)},setLocaleMessage(t,r){a.setLocaleMessage(t,r)},mergeLocaleMessage(t,r){a.mergeLocaleMessage(t,r)},d(...t){return Reflect.apply(a.d,a,[...t])},getDateTimeFormat(t){return a.getDateTimeFormat(t)},setDateTimeFormat(t,r){a.setDateTimeFormat(t,r)},mergeDateTimeFormat(t,r){a.mergeDateTimeFormat(t,r)},n(...t){return Reflect.apply(a.n,a,[...t])},getNumberFormat(t){return a.getNumberFormat(t)},setNumberFormat(t,r){a.setNumberFormat(t,r)},mergeNumberFormat(t,r){a.mergeNumberFormat(t,r)},getChoiceIndex(t,r){return S(D(N.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1}};return s.__extender=n,s.__enableEmitter=t=>{const r=a;r[Q]&&r[Q](t)},s.__disableEmitter=()=>{const t=a;t[oe]&&t[oe]()},s}}const Ke={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Ma({slots:e},l){return l.length===1&&l[0]==="default"?(e.default?e.default():[]).reduce((n,s)=>[...n,...s.type===Pt?s.children:[s]],[]):l.reduce((a,n)=>{const s=e[n];return s&&(a[n]=s()),a},{})}function St(e){return Pt}const Aa=Xe({name:"i18n-t",props:W({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>ae(e)||!isNaN(e)}},Ke),setup(e,l){const{slots:a,attrs:n}=l,s=e.i18n||qe({useScope:e.scope,__useComponent:!0});return()=>{const t=Object.keys(a).filter(E=>E!=="_"),r={};e.locale&&(r.locale=e.locale),e.plural!==void 0&&(r.plural=d(e.plural)?+e.plural:e.plural);const i=Ma(l,t),_=s[we](e.keypath,i,r),m=W({},n),v=d(e.tag)||U(e.tag)?e.tag:St();return Ft(v,m,_)}}}),De=Aa;function ya(e){return C(e)&&!d(e[0])}function Dt(e,l,a,n){const{slots:s,attrs:t}=l;return()=>{const r={part:!0};let i={};e.locale&&(r.locale=e.locale),d(e.format)?r.key=e.format:U(e.format)&&(d(e.format.key)&&(r.key=e.format.key),i=Object.keys(e.format).reduce((g,T)=>a.includes(T)?W({},g,{[T]:e.format[T]}):g,{}));const _=n(e.value,r,i);let m=[r.key];C(_)?m=_.map((g,T)=>{const P=s[g.type],k=P?P({[g.type]:g.value,index:T,parts:_}):[g.value];return ya(k)&&(k[0].key=`${g.type}-${T}`),k}):d(_)&&(m=[_]);const v=W({},t),E=d(e.tag)||U(e.tag)?e.tag:St();return Ft(E,v,m)}}const Sa=Xe({name:"i18n-n",props:W({value:{type:Number,required:!0},format:{type:[String,Object]}},Ke),setup(e,l){const a=e.i18n||qe({useScope:"parent",__useComponent:!0});return Dt(e,l,ea,(...n)=>a[xe](...n))}}),Et=Sa,Da=Xe({name:"i18n-d",props:W({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ke),setup(e,l){const a=e.i18n||qe({useScope:"parent",__useComponent:!0});return Dt(e,l,ta,(...n)=>a[$e](...n))}}),bt=Da;function Ua(e,l){const a=e;if(e.mode==="composition")return a.__getInstance(l)||e.global;{const n=a.__getInstance(l);return n!=null?n.__composer:e.global.__composer}}function Va(e){const l=r=>{const{instance:i,modifiers:_,value:m}=r;if(!i||!i.$)throw h(b.UNEXPECTED_ERROR);const v=Ua(e,i.$);_.preserve&&S(D(N.NOT_SUPPORTED_PRESERVE));const E=dt(m);return[Reflect.apply(v.t,v,[...It(E)]),v]};return{created:(r,i)=>{const[_,m]=l(i);Ve&&e.global===m&&(r.__i18nWatcher=We(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),r.__composer=m,r.textContent=_},unmounted:r=>{Ve&&r.__i18nWatcher&&(r.__i18nWatcher(),r.__i18nWatcher=void 0,delete r.__i18nWatcher),r.__composer&&(r.__composer=void 0,delete r.__composer)},beforeUpdate:(r,{value:i})=>{if(r.__composer){const _=r.__composer,m=dt(i);r.textContent=Reflect.apply(_.t,_,[...It(m)])}},getSSRProps:r=>{const[i]=l(r);return{textContent:i}}}}function dt(e){if(d(e))return{path:e};if(p(e)){if(!("path"in e))throw h(b.REQUIRED_VALUE,"path");return e}else throw h(b.INVALID_VALUE)}function It(e){const{path:l,locale:a,args:n,choice:s,plural:t}=e,r={},i=n||{};return d(a)&&(r.locale=a),ae(s)&&(r.plural=s),ae(t)&&(r.plural=t),[l,i,r]}function Wa(e,l,...a){const n=p(a[0])?a[0]:{},s=!!n.useI18nComponentName,t=O(n.globalInstall)?n.globalInstall:!0;t&&s&&S(D(N.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:De.name})),t&&([s?"i18n":De.name,"I18nT"].forEach(r=>e.component(r,De)),[Et.name,"I18nN"].forEach(r=>e.component(r,Et)),[bt.name,"I18nD"].forEach(r=>e.component(r,bt))),e.directive("t",Va(l))}const Ue={"vue-devtools-plugin-vue-i18n":"Vue I18n devtools","vue-i18n-resource-inspector":"I18n Resources","vue-i18n-timeline":"Vue I18n"},wa={"vue-i18n-resource-inspector":"Search for scopes ..."},$a={"vue-i18n-timeline":16764185},Ut="vue-i18n: composer properties";let Ye;async function xa(e,l){return new Promise((a,n)=>{try{La({id:"vue-devtools-plugin-vue-i18n",label:Ue["vue-devtools-plugin-vue-i18n"],packageName:"vue-i18n",homepage:"https://vue-i18n.intlify.dev",logo:"https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",componentStateTypes:[Ut],app:e},s=>{Ye=s,s.on.visitComponentTree(({componentInstance:r,treeNode:i})=>{Ha(r,i,l)}),s.on.inspectComponent(({componentInstance:r,instanceData:i})=>{r.vnode.el&&r.vnode.el.__VUE_I18N__&&i&&(l.mode==="legacy"?r.vnode.el.__VUE_I18N__!==l.global.__composer&&Tt(i,r.vnode.el.__VUE_I18N__):Tt(i,r.vnode.el.__VUE_I18N__))}),s.addInspector({id:"vue-i18n-resource-inspector",label:Ue["vue-i18n-resource-inspector"],icon:"language",treeFilterPlaceholder:wa["vue-i18n-resource-inspector"]}),s.on.getInspectorTree(r=>{r.app===e&&r.inspectorId==="vue-i18n-resource-inspector"&&Xa(r,l)});const t=new Map;s.on.getInspectorState(async r=>{if(r.app===e&&r.inspectorId==="vue-i18n-resource-inspector")if(s.unhighlightElement(),Ka(r,l),r.nodeId==="global"){if(!t.has(r.app)){const[i]=await s.getComponentInstances(r.app);t.set(r.app,i)}s.highlightElement(t.get(r.app))}else{const i=Ja(r.nodeId,l);i&&s.highlightElement(i)}}),s.on.editInspectorState(r=>{r.app===e&&r.inspectorId==="vue-i18n-resource-inspector"&&qa(r,l)}),s.addTimelineLayer({id:"vue-i18n-timeline",label:Ue["vue-i18n-timeline"],color:$a["vue-i18n-timeline"]}),a(!0)})}catch(s){console.error(s),n(!1)}})}function Vt(e){return e.type.name||e.type.displayName||e.type.__file||"Anonymous"}function Ha(e,l,a){const n=a.mode==="composition"?a.global:a.global.__composer;if(e&&e.vnode.el&&e.vnode.el.__VUE_I18N__&&e.vnode.el.__VUE_I18N__!==n){const s={label:`i18n (${Vt(e)} Scope)`,textColor:0,backgroundColor:16764185};l.tags.push(s)}}function Tt(e,l){const a=Ut;e.state.push({type:a,key:"locale",editable:!0,value:l.locale.value}),e.state.push({type:a,key:"availableLocales",editable:!1,value:l.availableLocales}),e.state.push({type:a,key:"fallbackLocale",editable:!0,value:l.fallbackLocale.value}),e.state.push({type:a,key:"inheritLocale",editable:!0,value:l.inheritLocale}),e.state.push({type:a,key:"messages",editable:!1,value:ze(l.messages.value)}),e.state.push({type:a,key:"datetimeFormats",editable:!1,value:l.datetimeFormats.value}),e.state.push({type:a,key:"numberFormats",editable:!1,value:l.numberFormats.value})}function ze(e){const l={};return Object.keys(e).forEach(a=>{const n=e[a];G(n)&&"source"in n?l[a]=Ba(n):Rt(n)&&n.loc&&n.loc.source?l[a]=n.loc.source:U(n)?l[a]=ze(n):l[a]=n}),l}const Ga={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function Ya(e){return e.replace(/[<>"&]/g,ja)}function ja(e){return Ga[e]||e}function Ba(e){return{_custom:{type:"function",display:`<span>ƒ</span> ${e.source?`("${Ya(e.source)}")`:"(?)"}`}}}function Xa(e,l){e.rootNodes.push({id:"global",label:"Global Scope"});const a=l.mode==="composition"?l.global:l.global.__composer;for(const[n,s]of l.__instances){const t=l.mode==="composition"?s:s.__composer;a!==t&&e.rootNodes.push({id:t.id.toString(),label:`${Vt(n)} Scope`})}}function Ja(e,l){let a=null;if(e!=="global"){for(const[n,s]of l.__instances.entries())if(s.id.toString()===e){a=n;break}}return a}function Wt(e,l){if(e==="global")return l.mode==="composition"?l.global:l.global.__composer;{const a=Array.from(l.__instances.values()).find(n=>n.id.toString()===e);return a?l.mode==="composition"?a:a.__composer:null}}function Ka(e,l){const a=Wt(e.nodeId,l);return a&&(e.state=za(a)),null}function za(e){const l={},a="Locale related info",n=[{type:a,key:"locale",editable:!0,value:e.locale.value},{type:a,key:"fallbackLocale",editable:!0,value:e.fallbackLocale.value},{type:a,key:"availableLocales",editable:!1,value:e.availableLocales},{type:a,key:"inheritLocale",editable:!0,value:e.inheritLocale}];l[a]=n;const s="Locale messages info",t=[{type:s,key:"messages",editable:!1,value:ze(e.messages.value)}];l[s]=t;{const r="Datetime formats info",i=[{type:r,key:"datetimeFormats",editable:!1,value:e.datetimeFormats.value}];l[r]=i;const _="Datetime formats info",m=[{type:_,key:"numberFormats",editable:!1,value:e.numberFormats.value}];l[_]=m}return l}function ce(e,l){if(Ye){let a;l&&"groupId"in l&&(a=l.groupId,delete l.groupId),Ye.addTimelineEvent({layerId:"vue-i18n-timeline",event:{title:e,groupId:a,time:Date.now(),meta:{},data:l||{},logType:e==="compile-error"?"error":e==="fallback"||e==="missing"?"warning":"default"}})}}function qa(e,l){const a=Wt(e.nodeId,l);if(a){const[n]=e.path;n==="locale"&&d(e.state.value)?a.locale.value=e.state.value:n==="fallbackLocale"&&(d(e.state.value)||C(e.state.value)||U(e.state.value))?a.fallbackLocale.value=e.state.value:n==="inheritLocale"&&O(e.state.value)&&(a.inheritLocale=e.state.value)}}function Qa(e,l,a){return{beforeCreate(){const n=se();if(!n)throw h(b.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const t=s.i18n;if(s.__i18n&&(t.__i18n=s.__i18n),t.__root=l,this===this.$root)this.$i18n=Lt(e,t);else{t.__injectWithOption=!0,t.__extender=a.__vueI18nExtend,this.$i18n=Ge(t);const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=Lt(e,s);else{this.$i18n=Ge({__i18n:s.__i18n,__injectWithOption:!0,__extender:a.__vueI18nExtend,__root:l});const t=this.$i18n;t.__extender&&(t.__disposer=t.__extender(this.$i18n))}else this.$i18n=e;s.__i18nGlobal&&yt(l,s,s),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,r)=>this.$i18n.te(t,r),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t),a.__setInstance(n,this.$i18n)},mounted(){if(this.$el&&this.$i18n){const n=this.$i18n;this.$el.__VUE_I18N__=n.__composer;const s=this.__v_emitter=Be();n.__enableEmitter&&n.__enableEmitter(s),s.on("*",ce)}},unmounted(){const n=se();if(!n)throw h(b.UNEXPECTED_ERROR);const s=this.$i18n;this.$el&&this.$el.__VUE_I18N__&&(this.__v_emitter&&(this.__v_emitter.off("*",ce),delete this.__v_emitter),this.$i18n&&(s.__disableEmitter&&s.__disableEmitter(),delete this.$el.__VUE_I18N__)),delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),a.__deleteInstance(n),delete this.$i18n}}}function Lt(e,l){e.locale=l.locale||e.locale,e.fallbackLocale=l.fallbackLocale||e.fallbackLocale,e.missing=l.missing||e.missing,e.silentTranslationWarn=l.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=l.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=l.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=l.postTranslation||e.postTranslation,e.warnHtmlInMessage=l.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=l.escapeParameterHtml||e.escapeParameterHtml,e.sync=l.sync||e.sync,e.__composer[Ct](l.pluralizationRules||e.pluralizationRules);const a=ge(e.locale,{messages:l.messages,__i18n:l.__i18n});return Object.keys(a).forEach(n=>e.mergeLocaleMessage(n,a[n])),l.datetimeFormats&&Object.keys(l.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,l.datetimeFormats[n])),l.numberFormats&&Object.keys(l.numberFormats).forEach(n=>e.mergeNumberFormat(n,l.numberFormats[n])),e}const Za=x("global-vue-i18n");function fl(e={},l){const a=__VUE_I18N_LEGACY_API__&&O(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=O(e.globalInjection)?e.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&a?!!e.allowComposition:!0,t=new Map,[r,i]=el(e,a),_=x("vue-i18n");a&&s&&S(D(N.NOTICE_DROP_ALLOW_COMPOSITION));function m(g){return t.get(g)||null}function v(g,T){t.set(g,T)}function E(g){t.delete(g)}{const g={get mode(){return __VUE_I18N_LEGACY_API__&&a?"legacy":"composition"},get allowComposition(){return s},async install(T,...P){if(T.__VUE_I18N__=g,T.__VUE_I18N_SYMBOL__=_,T.provide(T.__VUE_I18N_SYMBOL__,g),p(P[0])){const V=P[0];g.__composerExtend=V.__composerExtend,g.__vueI18nExtend=V.__vueI18nExtend}let k=null;!a&&n&&(k=cl(T,g.global)),__VUE_I18N_FULL_INSTALL__&&Wa(T,g,...P),__VUE_I18N_LEGACY_API__&&a&&T.mixin(Qa(i,i.__composer,g));const Y=T.unmount;T.unmount=()=>{k&&k(),g.dispose(),Y()};{if(!await xa(T,g))throw h(b.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);const M=Be();if(a){const A=i;A.__enableEmitter&&A.__enableEmitter(M)}else{const A=i;A[Q]&&A[Q](M)}M.on("*",ce)}},get global(){return i},dispose(){r.stop()},__instances:t,__getInstance:m,__setInstance:v,__deleteInstance:E};return g}}function qe(e={}){const l=se();if(l==null)throw h(b.MUST_BE_CALL_SETUP_TOP);if(!l.isCE&&l.appContext.app!=null&&!l.appContext.app.__VUE_I18N_SYMBOL__)throw h(b.NOT_INSTALLED);const a=tl(l),n=ll(a),s=At(l),t=al(e,s);if(__VUE_I18N_LEGACY_API__&&a.mode==="legacy"&&!e.__useComponent){if(!a.allowComposition)throw h(b.NOT_AVAILABLE_IN_LEGACY_MODE);return ol(l,t,n,e)}if(t==="global")return yt(n,e,s),n;if(t==="parent"){let _=nl(a,l,e.__useComponent);return _==null&&(S(D(N.NOT_FOUND_PARENT_SCOPE)),_=n),_}const r=a;let i=r.__getInstance(l);if(i==null){const _=W({},e);"__i18n"in s&&(_.__i18n=s.__i18n),n&&(_.__root=n),i=Je(_),r.__composerExtend&&(i[He]=r.__composerExtend(i)),sl(r,l,i),r.__setInstance(l,i)}return i}function el(e,l,a){const n=ga();{const s=__VUE_I18N_LEGACY_API__&&l?n.run(()=>Ge(e)):n.run(()=>Je(e));if(s==null)throw h(b.UNEXPECTED_ERROR);return[n,s]}}function tl(e){{const l=va(e.isCE?Za:e.appContext.app.__VUE_I18N_SYMBOL__);if(!l)throw h(e.isCE?b.NOT_INSTALLED_WITH_PROVIDE:b.UNEXPECTED_ERROR);return l}}function al(e,l){return Jt(e)?"__i18n"in l?"local":"global":e.useScope?e.useScope:"local"}function ll(e){return e.mode==="composition"?e.global:e.global.__composer}function nl(e,l,a=!1){let n=null;const s=l.root;let t=rl(l,a);for(;t!=null;){const r=e;if(e.mode==="composition")n=r.__getInstance(t);else if(__VUE_I18N_LEGACY_API__){const i=r.__getInstance(t);i!=null&&(n=i.__composer,a&&n&&!n[Mt]&&(n=null))}if(n!=null||s===t)break;t=t.parent}return n}function rl(e,l=!1){return e==null?null:l&&e.vnode.ctx||e.parent}function sl(e,l,a){let n=null;Ea(()=>{if(l.vnode.el){l.vnode.el.__VUE_I18N__=a,n=Be();const s=a;s[Q]&&s[Q](n),n.on("*",ce)}},l),ba(()=>{const s=a;l.vnode.el&&l.vnode.el.__VUE_I18N__&&(n&&n.off("*",ce),s[oe]&&s[oe](),delete l.vnode.el.__VUE_I18N__),e.__deleteInstance(l);const t=s[He];t&&(t(),delete s[He])},l)}function ol(e,l,a,n={}){const s=l==="local",t=da(null);if(s&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw h(b.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const r=O(n.inheritLocale)?n.inheritLocale:!d(n.locale),i=w(!s||r?a.locale.value:d(n.locale)?n.locale:je),_=w(!s||r?a.fallbackLocale.value:d(n.fallbackLocale)||C(n.fallbackLocale)||p(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:i.value),m=w(ge(i.value,n)),v=w(p(n.datetimeFormats)?n.datetimeFormats:{[i.value]:{}}),E=w(p(n.numberFormats)?n.numberFormats:{[i.value]:{}}),g=s?a.missingWarn:O(n.missingWarn)||le(n.missingWarn)?n.missingWarn:!0,T=s?a.fallbackWarn:O(n.fallbackWarn)||le(n.fallbackWarn)?n.fallbackWarn:!0,P=s?a.fallbackRoot:O(n.fallbackRoot)?n.fallbackRoot:!0,k=!!n.fallbackFormat,Y=G(n.missing)?n.missing:null,V=G(n.postTranslation)?n.postTranslation:null,M=s?a.warnHtmlMessage:O(n.warnHtmlMessage)?n.warnHtmlMessage:!0,A=!!n.escapeParameter,X=s?a.modifiers:p(n.modifiers)?n.modifiers:{},J=n.pluralRules||s&&a.pluralRules;function K(){return[i.value,_.value,m.value,v.value,E.value]}const f=$({get:()=>t.value?t.value.locale.value:i.value,set:u=>{t.value&&(t.value.locale.value=u),i.value=u}}),Z=$({get:()=>t.value?t.value.fallbackLocale.value:_.value,set:u=>{t.value&&(t.value.fallbackLocale.value=u),_.value=u}}),ne=$(()=>t.value?t.value.messages.value:m.value),ve=$(()=>v.value),Ee=$(()=>E.value);function be(){return t.value?t.value.getPostTranslationHandler():V}function de(u){t.value&&t.value.setPostTranslationHandler(u)}function Ie(){return t.value?t.value.getMissingHandler():Y}function Te(u){t.value&&t.value.setMissingHandler(u)}function j(u){return K(),u()}function Le(...u){return t.value?j(()=>Reflect.apply(t.value.t,null,[...u])):j(()=>"")}function Oe(...u){return t.value?Reflect.apply(t.value.rt,null,[...u]):""}function Ne(...u){return t.value?j(()=>Reflect.apply(t.value.d,null,[...u])):j(()=>"")}function H(...u){return t.value?j(()=>Reflect.apply(t.value.n,null,[...u])):j(()=>"")}function ue(u){return t.value?t.value.tm(u):{}}function pe(u,L){return t.value?t.value.te(u,L):!1}function Re(u){return t.value?t.value.getLocaleMessage(u):{}}function Fe(u,L){t.value&&(t.value.setLocaleMessage(u,L),m.value[u]=L)}function Pe(u,L){t.value&&t.value.mergeLocaleMessage(u,L)}function Qe(u){return t.value?t.value.getDateTimeFormat(u):{}}function he(u,L){t.value&&(t.value.setDateTimeFormat(u,L),v.value[u]=L)}function ke(u,L){t.value&&t.value.mergeDateTimeFormat(u,L)}function Ce(u){return t.value?t.value.getNumberFormat(u):{}}function Me(u,L){t.value&&(t.value.setNumberFormat(u,L),E.value[u]=L)}function Ae(u,L){t.value&&t.value.mergeNumberFormat(u,L)}const ye={get id(){return t.value?t.value.id:-1},locale:f,fallbackLocale:Z,messages:ne,datetimeFormats:ve,numberFormats:Ee,get inheritLocale(){return t.value?t.value.inheritLocale:r},set inheritLocale(u){t.value&&(t.value.inheritLocale=u)},get availableLocales(){return t.value?t.value.availableLocales:Object.keys(m.value)},get modifiers(){return t.value?t.value.modifiers:X},get pluralRules(){return t.value?t.value.pluralRules:J},get isGlobal(){return t.value?t.value.isGlobal:!1},get missingWarn(){return t.value?t.value.missingWarn:g},set missingWarn(u){t.value&&(t.value.missingWarn=u)},get fallbackWarn(){return t.value?t.value.fallbackWarn:T},set fallbackWarn(u){t.value&&(t.value.missingWarn=u)},get fallbackRoot(){return t.value?t.value.fallbackRoot:P},set fallbackRoot(u){t.value&&(t.value.fallbackRoot=u)},get fallbackFormat(){return t.value?t.value.fallbackFormat:k},set fallbackFormat(u){t.value&&(t.value.fallbackFormat=u)},get warnHtmlMessage(){return t.value?t.value.warnHtmlMessage:M},set warnHtmlMessage(u){t.value&&(t.value.warnHtmlMessage=u)},get escapeParameter(){return t.value?t.value.escapeParameter:A},set escapeParameter(u){t.value&&(t.value.escapeParameter=u)},t:Le,getPostTranslationHandler:be,setPostTranslationHandler:de,getMissingHandler:Ie,setMissingHandler:Te,rt:Oe,d:Ne,n:H,tm:ue,te:pe,getLocaleMessage:Re,setLocaleMessage:Fe,mergeLocaleMessage:Pe,getDateTimeFormat:Qe,setDateTimeFormat:he,mergeDateTimeFormat:ke,getNumberFormat:Ce,setNumberFormat:Me,mergeNumberFormat:Ae};function Se(u){u.locale.value=i.value,u.fallbackLocale.value=_.value,Object.keys(m.value).forEach(L=>{u.mergeLocaleMessage(L,m.value[L])}),Object.keys(v.value).forEach(L=>{u.mergeDateTimeFormat(L,v.value[L])}),Object.keys(E.value).forEach(L=>{u.mergeNumberFormat(L,E.value[L])}),u.escapeParameter=A,u.fallbackFormat=k,u.fallbackRoot=P,u.fallbackWarn=T,u.missingWarn=g,u.warnHtmlMessage=M}return Ia(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw h(b.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const u=t.value=e.proxy.$i18n.__composer;l==="global"?(i.value=u.locale.value,_.value=u.fallbackLocale.value,m.value=u.messages.value,v.value=u.datetimeFormats.value,E.value=u.numberFormats.value):s&&Se(u)}),ye}const il=["locale","fallbackLocale","availableLocales"],Ot=["t","rt","d","n","tm","te"];function cl(e,l){const a=Object.create(null);return il.forEach(s=>{const t=Object.getOwnPropertyDescriptor(l,s);if(!t)throw h(b.UNEXPECTED_ERROR);const r=Ta(t.value)?{get(){return t.value.value},set(i){t.value.value=i}}:{get(){return t.get&&t.get()}};Object.defineProperty(a,s,r)}),e.config.globalProperties.$i18n=a,Ot.forEach(s=>{const t=Object.getOwnPropertyDescriptor(l,s);if(!t||!t.value)throw h(b.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${s}`,t)}),()=>{delete e.config.globalProperties.$i18n,Ot.forEach(s=>{delete e.config.globalProperties[`$${s}`]})}}Ra();__INTLIFY_JIT_COMPILATION__?et(aa):et(la);Kt(na);zt(Nt);{const e=te();e.__INTLIFY__=!0,qt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{fl as c};