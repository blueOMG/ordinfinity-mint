import"./vue.3c5ef26d.js";import{_ as I,a as k}from"./change.5100c967.js";import{_ as B,a as T}from"./unisat.7349c596.js";import{b as N}from"./vue-router.26ff8f49.js";import{H as S,e as d,ah as _,c as F,a as t,V as e,P as s,F as U,o as K,Q as m,ak as f,T as g,aB as O,aC as R}from"./@vue.52bf0d45.js";import{_ as W}from"./index.523f55f4.js";import"./vue-i18n.3baa2b2e.js";import"./@intlify.67c0fc79.js";import"./pinia.5e054759.js";import"./vue-demi.97abf6ee.js";import"./element-plus.8ee76d0e.js";import"./lodash-es.21c98b27.js";import"./@vueuse.b295f9b9.js";import"./@element-plus.38e4a047.js";import"./@popperjs.c75af06c.js";import"./@ctrl.f8748455.js";import"./dayjs.2d5d7b0f.js";import"./@babel.f1e6723f.js";import"./async-validator.20f92749.js";import"./memoize-one.297ddbcb.js";import"./escape-html.3f1f2bdd.js";import"./normalize-wheel-es.ed76fb12.js";import"./@floating-ui.72671fae.js";import"./mitt.f7ef348c.js";/* empty css                    */import"https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";const $=""+new URL("../png/left.42fe7835.png",import.meta.url).href,o=c=>(O("data-v-3b2a6a54"),c=c(),R(),c),A=o(()=>t("div",{class:"videoContainer"},[t("video",{class:"fullscreenVideo",id:"bgVid",autoplay:!0,muted:!0,loop:!0},[t("source",{src:I,type:"video/mp4"})])],-1)),D={style:{"text-align":"center"},class:"mint-html"},E={class:"link"},H=o(()=>t("div",{class:"title-1"},[t("span",{class:"font-title"}," public ")],-1)),M={class:"title-2"},L=o(()=>t("div",{class:"time-bg"},[t("div",{class:"time-item-1"},"00"),t("div",{class:"time-item-2"},"DAYS")],-1)),P=o(()=>t("div",{class:"time-bg"},[t("div",{class:"time-item-1"},"00"),t("div",{class:"time-item-2"},"HRS")],-1)),X=o(()=>t("div",{class:"time-bg"},[t("div",{class:"time-item-1"},"00"),t("div",{class:"time-item-2"},"SEC")],-1)),Y={style:{width:"100%"},class:"pay-date"},j=o(()=>t("div",{style:{color:"white"},class:"pay-date-text-1"},"Total Funds Raised 6.5625 BTC",-1)),Q=o(()=>t("div",{style:{color:"white"},class:"pay-date-text-2"},"Price: 0.0000025 BTC",-1)),q={class:"d-progress"},z=o(()=>t("div",{style:{color:"white"},class:"pay-date-text-3"},"0/2,625,000",-1)),G=o(()=>t("div",{style:{color:"white"},class:"pay-date-text-3"},"0%",-1)),J={style:{width:"100%","margin-top":"30px"}},Z=o(()=>t("div",{class:"pay-text"},"Balance: 0.00 BTC",-1)),tt={style:{width:"100%","margin-top":"10px"}},et={class:"my-input pay-text",style:{"text-align":"center"}},st=o(()=>t("span",{class:"w-50%",style:{"text-align":"left",color:"white"}}," BTC ",-1)),ot=o(()=>t("div",null,[t("img",{src:k,class:"changeImg"})],-1)),lt={class:"my-input pay-text",style:{"text-align":"center"}},at=o(()=>t("span",{class:"w-50%",style:{"text-align":"left",color:"white"}}," $OIFY ",-1)),it={style:{"margin-top":"30px"}},nt=o(()=>t("div",{class:"btn-bottom"},[t("span",null,"MINT")],-1)),dt=o(()=>t("div",null,null,-1)),ct=o(()=>t("div",{class:"btn-bottom"},[t("span",null,"ETH")],-1)),rt=o(()=>t("div",{style:{color:"white"},class:"dialog-title"},"Connect you wallet",-1)),pt={class:"walletCon"},_t=o(()=>t("div",{class:"grid-content ep-bg-purple"},null,-1)),ut=o(()=>t("div",{class:"grid-content ep-bg-purple",style:{"text-align":"right"}},null,-1)),mt=o(()=>t("img",{src:B,class:"wallet-icon"},null,-1)),ft=o(()=>t("div",{class:"grid-content ep-bg-purple"},null,-1)),gt=o(()=>t("div",{class:"grid-content ep-bg-purple"},null,-1)),vt=o(()=>t("img",{src:T,class:"wallet-icon"},null,-1)),ht=S({__name:"index",setup(c){const v=N(),h=()=>{v.push({path:"/mint"})},r=d(),p=d(),y=()=>{p.value=Number((Number(r.value)/25e-7).toFixed(8))},x=()=>{r.value=Number((Number(p.value)*25e-7).toFixed(8))},u=d(!1);d(!1),d(!1);const w=()=>{},b=()=>{};return(yt,i)=>{const l=_("el-col"),a=_("el-row"),C=_("el-progress"),V=_("el-dialog");return K(),F(U,null,[A,t("div",D,[t("div",E,[t("button",{class:"buttonLink",onClick:i[0]||(i[0]=n=>u.value=!0)},"Connect wallet")]),e(a,null,{default:s(()=>[e(l,{span:20},{default:s(()=>[H,t("div",M,[e(a,{gutter:20},{default:s(()=>[e(l,{span:3},{default:s(()=>[L]),_:1}),e(l,{span:3},{default:s(()=>[P]),_:1}),e(l,{span:3},{default:s(()=>[X]),_:1})]),_:1})])]),_:1})]),_:1}),e(a,null,{default:s(()=>[e(l,{span:2},{default:s(()=>[t("div",{style:{"padding-top":"100px"}},[t("img",{src:$,class:"goImg",style:{cursor:"pointer"},onClick:h})])]),_:1}),e(l,{span:20},{default:s(()=>[t("div",Y,[e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:20,offset:1},{default:s(()=>[j]),_:1})]),_:1}),e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:20,offset:1},{default:s(()=>[Q]),_:1})]),_:1}),e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:20,offset:1},{default:s(()=>[t("div",q,[e(C,{id:"myprogress","text-inside":!0,"stroke-width":40,percentage:0,color:"#ffffff",status:"exception"})])]),_:1})]),_:1}),e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:10,offset:1,style:{"text-align":"left"}},{default:s(()=>[z]),_:1}),e(l,{span:10,style:{"text-align":"right"}},{default:s(()=>[G]),_:1})]),_:1})]),t("div",J,[t("div",null,[e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:20,offset:1,style:{"text-align":"left"}},{default:s(()=>[Z]),_:1})]),_:1})]),t("div",tt,[e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:8,offset:1,style:{"text-align":"left"}},{default:s(()=>[t("div",et,[m(t("input",{placeholder:"0.001-0.05",class:"w-50% bg-transparent border-0 coinImnput",style:{"text-align":"right",color:"white",outline:"none"},type:"number","onUpdate:modelValue":i[1]||(i[1]=n=>r.value=n),onKeyup:y},null,544),[[f,r.value]]),st])]),_:1}),e(l,{span:4,style:{"text-align":"center"}},{default:s(()=>[ot]),_:1}),e(l,{span:8,style:{"text-align":"right"}},{default:s(()=>[t("div",lt,[m(t("input",{placeholder:"500",class:"w-50% bg-transparent border-0 coinImnput",style:{"text-align":"right",color:"white",outline:"none"},type:"number","onUpdate:modelValue":i[2]||(i[2]=n=>p.value=n),onKeyup:x},null,544),[[f,p.value]]),at])]),_:1})]),_:1})]),t("div",it,[e(a,{class:"row-bg"},{default:s(()=>[e(l,{span:5,offset:1},{default:s(()=>[nt]),_:1}),e(l,{span:10},{default:s(()=>[dt]),_:1}),e(l,{span:5},{default:s(()=>[ct]),_:1})]),_:1})])])]),_:1})]),_:1})]),e(V,{class:"dialog-my",style:{"background-color":"#1a1a1a",color:"white",width:"100%","max-width":"600px"},modelValue:u.value,"onUpdate:modelValue":i[3]||(i[3]=n=>u.value=n)},{default:s(()=>[rt,t("div",pt,[t("div",{class:"walletConItem",onClick:w},[e(a,{gutter:20},{default:s(()=>[e(l,{span:10},{default:s(()=>[_t,g("OKX Wallet")]),_:1}),e(l,{span:4,offset:7},{default:s(()=>[ut,mt]),_:1})]),_:1})]),t("div",{class:"walletConItem",style:{"margin-top":"10px"},onClick:b},[e(a,{gutter:20},{default:s(()=>[e(l,{span:10},{default:s(()=>[ft,g("UniSat Wallet")]),_:1}),e(l,{span:4,offset:7},{default:s(()=>[gt,vt]),_:1})]),_:1})])])]),_:1},8,["modelValue"])],64)}}});const jt=W(ht,[["__scopeId","data-v-3b2a6a54"],["__file","D:/project/ordinfinity/ordinfinity-mint/src/view/public/index.vue"]]);export{jt as default};