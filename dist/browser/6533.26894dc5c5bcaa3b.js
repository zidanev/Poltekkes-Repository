(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[6533],{36533:(O,v,t)=>{"use strict";t.r(v),t.d(v,{ROUTES:()=>A,urlMatcher:()=>D});var c=t(95968),r=t(72683),s=t(53107),e=t(47947),T=t(82040),h=t(18062),j=t(31829),f=t(45122),l=t(25718),y=t(25744),E=t(12007),I=t(2887),m=t(70210),N=t(9843),U=t(37846);class g extends I.W{constructor(d,o,i,a){super(void 0,d,o,i,a,void 0,(p,u)=>p.replace(/{\?id}/,`?id=${u}`).replace(/{\?uuid}/,`?uuid=${u}`)),this.requestService=d,this.rdbService=o,this.objectCache=i,this.halService=a}setLinkPath(d){this.linkPath=d===m.Wx.UUID?"dso":"pid"}}let P=(()=>{class n{constructor(o,i,a,p,u,L){this.appConfig=o,this.requestService=i,this.rdbService=a,this.objectCache=p,this.halService=u,this.hardRedirectService=L,this.dataService=new g(i,a,p,u)}findByIdAndIDType(o,i=m.Wx.UUID){return this.dataService.setLinkPath(i),this.dataService.findById(o).pipe((0,E.qD)(),(0,T.M)(a=>{if(a.hasSucceeded){const p=a.payload;if((0,r.a4)(p.uuid)){const u=(0,j.wN)(p);(0,r.a4)(u)&&this.hardRedirectService.redirect(this.appConfig.ui.nameSpace.replace(/\/$/,"")+u,301)}}}))}static#t=this.\u0275fac=function(i){return new(i||n)(s.KVO(h.vQ),s.KVO(N.B),s.KVO(f.o),s.KVO(l.$),s.KVO(y.Y),s.KVO(U.$))};static#e=this.\u0275prov=s.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var W=t(21124);t(22547);const M=["*"];function S(n,d){}const A=[{matcher:D,canActivate:[(n,d,o=(0,s.WQX)(P))=>{const i=function x(n){let d,o;const i=n.params.idType;return i!==m.Wx.HANDLE&&i!==m.Wx.UUID?(d=m.Wx.HANDLE,o=`hdl:${n.params.idType}/${n.params.id}`):n.params.idType===m.Wx.HANDLE?(d=m.Wx.HANDLE,o="hdl:"+n.params.id):(d=m.Wx.UUID,o=n.params.id),{type:d,id:o}}(n);return o.findByIdAndIDType(i.id,i.type).pipe((0,e.T)(a=>a.hasFailed))}],component:(()=>{class n extends W.J{getComponentName(){return"ObjectNotFoundComponent"}importThemedComponent(o){return t(18761)(`./${o}/app/lookup-by-id/objectnotfound/objectnotfound.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,22547))}static#t=this.\u0275fac=(()=>{let o;return function(a){return(o||(o=s.xGo(n)))(a||n)}})();static#e=this.\u0275cmp=s.VBU({type:n,selectors:[["ds-objnotfound"]],standalone:!0,features:[s.Vt3,s.aNF],ngContentSelectors:M,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(i,a){1&i&&(s.NAR(),s.DNE(0,S,0,0,"ng-template",null,0,s.C5r),s.j41(2,"div",null,1),s.SdG(4),s.k0s())},encapsulation:2})}return n})()}];function D(n){const d=n[0].path,o=n.slice(1).map(i=>i.path).join("/");return(0,r.hj)(d)&&(0,r.hj)(o)?{consumed:n,posParams:{idType:new c.Xw(d,{}),id:new c.Xw(o,{})}}:null}},22547:(O,v,t)=>{"use strict";t.r(v),t.d(v,{ObjectNotFoundComponent:()=>T});var c=t(95968),r=t(69685),s=t(86779),e=t(53107);let T=(()=>{class h{constructor(f,l){this.route=f,this.serverResponseService=l,f.params.subscribe(y=>{this.idType=y.idType,this.id=y.id})}ngOnInit(){this.missingItem=this.idType.startsWith("handle")||this.idType.startsWith("uuid")?this.idType+": "+this.id:"handle: "+this.idType+"/"+this.id,this.serverResponseService.setNotFound()}static#t=this.\u0275fac=function(l){return new(l||h)(e.rXU(c.nX),e.rXU(s.w))};static#e=this.\u0275cmp=e.VBU({type:h,selectors:[["ds-base-objnotfound"]],standalone:!0,features:[e.aNF],decls:13,vars:7,consts:[[1,"object-not-found","container"],[1,"text-center"],["routerLink","/home",1,"btn","btn-primary"]],template:function(l,y){1&l&&(e.j41(0,"div",0)(1,"h1"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"h2")(5,"small")(6,"em"),e.EFF(7),e.k0s()()(),e.nrm(8,"br"),e.j41(9,"p",1)(10,"a",2),e.EFF(11),e.nI1(12,"translate"),e.k0s()()()),2&l&&(e.R7$(2),e.JRh(e.bMT(3,3,"error.identifier")),e.R7$(5),e.JRh(y.missingItem),e.R7$(4),e.JRh(e.bMT(12,5,"404.link.home-page")))},dependencies:[c.Wk,r.h,r.D9]})}return h})()},18761:(O,v,t)=>{var c={"./custom/app/lookup-by-id/objectnotfound/objectnotfound.component":[77234,7234]};function r(s){if(!t.o(c,s))return Promise.resolve().then(()=>{var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h});var e=c[s],T=e[0];return t.e(e[1]).then(()=>t(T))}r.keys=()=>Object.keys(c),r.id=18761,O.exports=r}}]);