(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[7553],{72553:(l,c,t)=>{"use strict";t.d(c,{Q:()=>o});class o{constructor(s,a){this.text=s,this.url=a}}},32588:(l,c,t)=>{"use strict";t.d(c,{S:()=>h});var o=t(53107),d=t(72683),s=t(67044),a=t(63016),i=t(72553);let v=(()=>{class n{getBreadcrumbs(r,u){return(0,a.of)([new i.Q(r+".breadcrumbs",u)])}static#t=this.\u0275fac=function(u){return new(u||n)};static#e=this.\u0275prov=o.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const h=(n,f,r=(0,o.WQX)(v))=>{const u=n.data.breadcrumbKey;if((0,d.Tn)(u))throw new Error('You provided an i18nBreadcrumbResolver for url "'+n.url+"\" but no breadcrumbKey in the route's data");return{provider:r,key:u,url:(0,s.F)(n)}}},57553:(l,c,t)=>{"use strict";t.r(c),t.d(c,{ROUTES:()=>f});var o=t(32588),s=t(39839),a=t(21124),e=(t(87790),t(53107));const v=["*"];function h(r,u){}const f=[{path:"",resolve:{breadcrumb:o.S},data:{title:"search.title",breadcrumbKey:"search"},children:[{path:"",component:(()=>{class r extends a.J{getComponentName(){return"SearchPageComponent"}importThemedComponent(m){return t(35294)(`./${m}/app/search-page/search-page.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,87790))}static#t=this.\u0275fac=(()=>{let m;return function(g){return(m||(m=e.xGo(r)))(g||r)}})();static#e=this.\u0275cmp=e.VBU({type:r,selectors:[["ds-search-page"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:v,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(p,g){1&p&&(e.NAR(),e.DNE(0,h,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return r})()},{path:":configuration",component:s.M,canActivate:[(r,u)=>(r.data={title:`${r.params.configuration}.search.title`},!0)]}]}]},87790:(l,c,t)=>{"use strict";t.r(c),t.d(c,{SearchPageComponent:()=>i});var o=t(3631),d=t(82506),s=t(63226),a=t(53107);let i=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=a.VBU({type:e,selectors:[["ds-base-search-page"]],standalone:!0,features:[a.Jv_([{provide:d.EN,useClass:o.g}]),a.aNF],decls:1,vars:2,consts:[[3,"showCsvExport","trackStatistics"]],template:function(n,f){1&n&&a.nrm(0,"ds-search",0),2&n&&a.Y8G("showCsvExport",!0)("trackStatistics",!0)},dependencies:[s.N],encapsulation:2})}return e})()},35294:(l,c,t)=>{var o={"./custom/app/search-page/search-page.component":[84709,4709]};function d(s){if(!t.o(o,s))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e});var a=o[s],i=a[0];return t.e(a[1]).then(()=>t(i))}d.keys=()=>Object.keys(o),d.id=35294,l.exports=d}}]);