(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4833],{72862:(M,v,t)=>{"use strict";t.r(v),t.d(v,{DenyRequestCopyComponent:()=>m});var a=t(54460),u=t(69685),e=t(76627),l=t(47947),y=t(22867),p=t(21706),S=t(83116),R=t(17584),C=t(37988),g=t(37330),O=t(12007),q=t(72683),A=t(21548),n=t(79224),$=t(63524),T=t(44294),s=t(53107),B=t(95968);function G(i,_){if(1&i){const c=s.RV6();s.j41(0,"div")(1,"p"),s.EFF(2),s.nI1(3,"translate"),s.k0s(),s.j41(4,"ds-email-request-copy",4),s.nI1(5,"async"),s.nI1(6,"async"),s.bIt("send",function(D){s.eBV(c);const P=s.XpG(2);return s.Njj(P.deny(D))}),s.k0s()()}if(2&i){const c=s.XpG(2);s.R7$(2),s.JRh(s.bMT(3,3,"deny-request-copy.intro")),s.R7$(2),s.Y8G("subject",s.bMT(5,5,c.subject$))("message",s.bMT(6,7,c.message$))}}function h(i,_){1&i&&s.nrm(0,"ds-loading")}function I(i,_){if(1&i&&(s.j41(0,"div",1)(1,"h3",2),s.EFF(2),s.nI1(3,"translate"),s.k0s(),s.DNE(4,G,7,9,"div",3)(5,h,1,0,"ds-loading",3),s.k0s()),2&i){const c=_.ngVar;s.R7$(2),s.JRh(s.bMT(3,3,"deny-request-copy.header")),s.R7$(2),s.Y8G("ngIf",c&&c.hasSucceeded),s.R7$(),s.Y8G("ngIf",!c||(null==c?null:c.isLoading))}}let m=(()=>{class i{constructor(c,d,D,P,j,L,x,F){this.router=c,this.route=d,this.authService=D,this.translateService=P,this.itemDataService=j,this.nameService=L,this.itemRequestService=x,this.notificationsService=F}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,l.T)(d=>d.request),(0,O.qD)(),(0,g.QD)(this.router,this.authService));const c=(0,e.z)([this.itemRequestRD$.pipe((0,O.ak)()),this.authService.getAuthenticatedUserFromStore()]).pipe((0,y.n)(([d,D])=>this.itemDataService.findById(d.itemId).pipe((0,O.ak)(),(0,l.T)(P=>{const j=P.firstMetadataValue("dc.identifier.uri");return Object.assign({recipientName:d.requestName,itemUrl:(0,q.hj)(j)?j:P.handle,itemName:this.nameService.getName(P),authorName:this.nameService.getName(D),authorEmail:D.email})}))));this.subject$=this.translateService.get("deny-request-copy.email.subject"),this.message$=c.pipe((0,y.n)(d=>this.translateService.get("deny-request-copy.email.message",d)))}deny(c){this.itemRequestRD$.pipe((0,O.ak)(),(0,y.n)(d=>this.itemRequestService.deny(d.token,c)),(0,O.qD)()).subscribe(d=>{d.hasSucceeded?(this.notificationsService.success(this.translateService.get("deny-request-copy.success")),this.router.navigateByUrl("/")):this.notificationsService.error(this.translateService.get("deny-request-copy.error"),d.errorMessage)})}static#e=this.\u0275fac=function(d){return new(d||i)(s.rXU(B.Ix),s.rXU(B.nX),s.rXU(p.uR),s.rXU(u.c$),s.rXU(R.ItemDataService),s.rXU(S.f),s.rXU(C.W),s.rXU(n.I))};static#t=this.\u0275cmp=s.VBU({type:i,selectors:[["ds-base-deny-request-copy"]],standalone:!0,features:[s.aNF],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],[3,"send","subject","message"]],template:function(d,D){1&d&&(s.DNE(0,I,6,5,"div",0),s.nI1(1,"async")),2&d&&s.Y8G("ngVar",s.bMT(1,1,D.itemRequestRD$))},dependencies:[$.r,a.bT,T.r,A.v,a.Jj,u.h,u.D9]})}return i})()},44294:(M,v,t)=>{"use strict";t.d(v,{r:()=>y});var a=t(53107),u=t(21124);const e=["*"];function l(p,S){}let y=(()=>{class p extends u.J{constructor(){super(...arguments),this.send=new a.bkB,this.inAndOutputNames=["send","subject","message"]}getComponentName(){return"EmailRequestCopyComponent"}importThemedComponent(R){return t(16292)(`./${R}/app/request-copy/email-request-copy/email-request-copy.component`)}importUnthemedComponent(){return t.e(2076).then(t.bind(t,38290))}static#e=this.\u0275fac=(()=>{let R;return function(g){return(R||(R=a.xGo(p)))(g||p)}})();static#t=this.\u0275cmp=a.VBU({type:p,selectors:[["ds-email-request-copy"]],inputs:{subject:"subject",message:"message"},outputs:{send:"send"},standalone:!0,features:[a.Vt3,a.aNF],ngContentSelectors:e,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(C,g){1&C&&(a.NAR(),a.DNE(0,l,0,0,"ng-template",null,0,a.C5r),a.j41(2,"div",null,1),a.SdG(4),a.k0s())},encapsulation:2})}return p})()},36336:(M,v,t)=>{"use strict";t.r(v),t.d(v,{GrantRequestCopyComponent:()=>G});var a=t(54460),u=t(10936),e=t(69685),l=t(47947),y=t(22867),p=t(21706),S=t(37988),R=t(37330),C=t(12007),g=t(21548),O=t(79224),q=t(63524),A=t(44294),n=t(53107),$=t(95968);function T(h,I){if(1&h){const m=n.RV6();n.j41(0,"div")(1,"p"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"ds-email-request-copy",4),n.nI1(5,"async"),n.nI1(6,"async"),n.bIt("send",function(_){n.eBV(m);const c=n.XpG(2);return n.Njj(c.grant(_))}),n.j41(7,"p"),n.EFF(8),n.nI1(9,"translate"),n.k0s(),n.j41(10,"form",5)(11,"div",6)(12,"input",7),n.mxI("ngModelChange",function(_){n.eBV(m);const c=n.XpG(2);return n.DH7(c.suggestOpenAccess,_)||(c.suggestOpenAccess=_),n.Njj(_)}),n.k0s(),n.j41(13,"label",8),n.EFF(14),n.nI1(15,"translate"),n.k0s()()()()()}if(2&h){const m=n.XpG(2);n.R7$(2),n.JRh(n.bMT(3,6,"grant-request-copy.intro")),n.R7$(2),n.Y8G("subject",n.bMT(5,8,m.subject$))("message",n.bMT(6,10,m.message$)),n.R7$(4),n.JRh(n.bMT(9,12,"grant-deny-request-copy.email.permissions.info")),n.R7$(4),n.R50("ngModel",m.suggestOpenAccess),n.R7$(2),n.JRh(n.bMT(15,14,"grant-deny-request-copy.email.permissions.label"))}}function s(h,I){1&h&&n.nrm(0,"ds-loading")}function B(h,I){if(1&h&&(n.j41(0,"div",1)(1,"h3",2),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.DNE(4,T,16,16,"div",3)(5,s,1,0,"ds-loading",3),n.k0s()),2&h){const m=I.ngVar;n.R7$(2),n.JRh(n.bMT(3,3,"grant-request-copy.header")),n.R7$(2),n.Y8G("ngIf",m&&m.hasSucceeded),n.R7$(),n.Y8G("ngIf",!m||(null==m?null:m.isLoading))}}let G=(()=>{class h{constructor(m,i,_,c,d,D){this.router=m,this.route=i,this.authService=_,this.translateService=c,this.itemRequestService=d,this.notificationsService=D,this.suggestOpenAccess=!1}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,l.T)(m=>m.request),(0,C.qD)(),(0,R.QD)(this.router,this.authService)),this.subject$=this.translateService.get("grant-request-copy.email.subject")}grant(m){this.itemRequestRD$.pipe((0,C.ak)(),(0,y.n)(i=>this.itemRequestService.grant(i.token,m,this.suggestOpenAccess)),(0,C.qD)()).subscribe(i=>{i.hasSucceeded?(this.notificationsService.success(this.translateService.get("grant-request-copy.success")),this.router.navigateByUrl("/")):this.notificationsService.error(this.translateService.get("grant-request-copy.error"),i.errorMessage)})}static#e=this.\u0275fac=function(i){return new(i||h)(n.rXU($.Ix),n.rXU($.nX),n.rXU(p.uR),n.rXU(e.c$),n.rXU(S.W),n.rXU(O.I))};static#t=this.\u0275cmp=n.VBU({type:h,selectors:[["ds-base-grant-request-copy"]],standalone:!0,features:[n.aNF],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],[3,"send","subject","message"],[1,"mb-3"],[1,"form-check"],["type","checkbox","value","","id","permissions","name","permissions",1,"form-check-input",3,"ngModelChange","ngModel"],["for","permissions",1,"form-check-label"]],template:function(i,_){1&i&&(n.DNE(0,B,6,5,"div",0),n.nI1(1,"async")),2&i&&n.Y8G("ngVar",n.bMT(1,1,_.itemRequestRD$))},dependencies:[q.r,a.bT,A.r,u.YN,u.qT,u.Zm,u.BC,u.cb,u.vS,u.cV,g.v,a.Jj,e.h,e.D9]})}return h})()},94833:(M,v,t)=>{"use strict";t.r(v),t.d(v,{ROUTES:()=>Y});var a=t(21124),e=(t(72862),t(53107));const l=["*"];function y(r,f){}let p=(()=>{class r extends a.J{getComponentName(){return"DenyRequestCopyComponent"}importThemedComponent(o){return t(67026)(`./${o}/app/request-copy/deny-request-copy/deny-request-copy.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,72862))}static#e=this.\u0275fac=(()=>{let o;return function(U){return(o||(o=e.xGo(r)))(U||r)}})();static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["ds-deny-request-copy"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:l,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(E,U){1&E&&(e.NAR(),e.DNE(0,y,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return r})();var S=t(54460),R=t(95968),C=t(69685),g=t(47947),O=t(22867),q=t(21706),A=t(83116),n=t(17584),$=t(37330),T=t(12007),s=t(15497),B=t(21548),G=t(63524),h=t(31829),I=t(87913);function m(r){return new I.t((0,h.EI)(),r).toString()}const i="deny",c="grant",D=(r,f)=>({url:r,name:f});function P(r,f){if(1&r&&(e.j41(0,"div"),e.nrm(1,"p",5),e.nI1(2,"async"),e.nI1(3,"async"),e.nI1(4,"translate"),e.j41(5,"p"),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",6)(9,"a",7),e.nI1(10,"translate"),e.nI1(11,"async"),e.EFF(12),e.nI1(13,"translate"),e.k0s(),e.j41(14,"a",8),e.nI1(15,"translate"),e.nI1(16,"async"),e.EFF(17),e.nI1(18,"translate"),e.k0s()()()),2&r){const o=e.XpG(3);e.R7$(),e.Y8G("innerHTML",e.i5U(4,12,"grant-deny-request-copy.intro1",e.l_i(29,D,e.bMT(2,8,o.itemUrl$),e.bMT(3,10,o.itemName$))),e.npT),e.R7$(5),e.JRh(e.bMT(7,15,"grant-deny-request-copy.intro2")),e.R7$(3),e.FS9("title",e.bMT(10,17,"grant-deny-request-copy.grant")),e.Y8G("routerLink",e.bMT(11,19,o.grantRoute$)),e.R7$(3),e.SpI(" ",e.bMT(13,21,"grant-deny-request-copy.grant")," "),e.R7$(2),e.FS9("title",e.bMT(15,23,"grant-deny-request-copy.deny")),e.Y8G("routerLink",e.bMT(16,25,o.denyRoute$)),e.R7$(3),e.SpI(" ",e.bMT(18,27,"grant-deny-request-copy.deny")," ")}}function j(r,f){1&r&&(e.j41(0,"div",9)(1,"p"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"p",10)(5,"a",11),e.EFF(6),e.nI1(7,"translate"),e.k0s()()()),2&r&&(e.R7$(2),e.JRh(e.bMT(3,2,"grant-deny-request-copy.processed")),e.R7$(4),e.JRh(e.bMT(7,4,"grant-deny-request-copy.home-page")))}function L(r,f){if(1&r&&(e.j41(0,"div"),e.DNE(1,P,19,32,"div",3)(2,j,8,6,"div",4),e.k0s()),2&r){const o=e.XpG().ngVar;e.R7$(),e.Y8G("ngIf",!o.payload.decisionDate),e.R7$(),e.Y8G("ngIf",o.payload.decisionDate)}}function x(r,f){1&r&&e.nrm(0,"ds-loading")}function F(r,f){if(1&r&&(e.j41(0,"div",1)(1,"h3",2),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.DNE(4,L,3,2,"div",3)(5,x,1,0,"ds-loading",3),e.k0s()),2&r){const o=f.ngVar;e.R7$(2),e.JRh(e.bMT(3,3,"grant-deny-request-copy.header")),e.R7$(2),e.Y8G("ngIf",o&&o.hasSucceeded),e.R7$(),e.Y8G("ngIf",!o||(null==o?null:o.isLoading))}}let N=(()=>{class r{constructor(o,E,U,J,b){this.router=o,this.route=E,this.authService=U,this.itemDataService=J,this.nameService=b}ngOnInit(){this.itemRequestRD$=this.route.data.pipe((0,g.T)(o=>o.request),(0,T.qD)(),(0,$.QD)(this.router,this.authService)),this.itemRD$=this.itemRequestRD$.pipe((0,T.ak)(),(0,O.n)(o=>this.itemDataService.findById(o.itemId))),this.itemName$=this.itemRD$.pipe((0,T.ak)(),(0,g.T)(o=>this.nameService.getName(o))),this.itemUrl$=this.itemRD$.pipe((0,T.ak)(),(0,g.T)(o=>(0,s._o)(o))),this.denyRoute$=this.itemRequestRD$.pipe((0,T.ak)(),(0,g.T)(o=>function _(r){return new I.t(m(r),i).toString()}(o.token))),this.grantRoute$=this.itemRequestRD$.pipe((0,T.ak)(),(0,g.T)(o=>function d(r){return new I.t(m(r),c).toString()}(o.token)))}static#e=this.\u0275fac=function(E){return new(E||r)(e.rXU(R.Ix),e.rXU(R.nX),e.rXU(q.uR),e.rXU(n.ItemDataService),e.rXU(A.f))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["ds-grant-deny-request-copy"]],standalone:!0,features:[e.aNF],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"mb-4"],[4,"ngIf"],["class","processed-message",4,"ngIf"],[3,"innerHTML"],[1,"btn-group"],[1,"btn","btn-outline-primary",3,"routerLink","title"],[1,"btn","btn-outline-danger",3,"routerLink","title"],[1,"processed-message"],[1,"text-center"],["routerLink","/home",1,"btn","btn-primary"]],template:function(E,U){1&E&&(e.DNE(0,F,6,5,"div",0),e.nI1(1,"async")),2&E&&e.Y8G("ngVar",e.bMT(1,1,U.itemRequestRD$))},dependencies:[G.r,S.bT,R.Wk,B.v,S.Jj,C.h,C.D9]})}return r})();t(36336);const W=["*"];function K(r,f){}let X=(()=>{class r extends a.J{getComponentName(){return"GrantRequestCopyComponent"}importThemedComponent(o){return t(63572)(`./${o}/app/request-copy/grant-request-copy/grant-request-copy.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,36336))}static#e=this.\u0275fac=(()=>{let o;return function(U){return(o||(o=e.xGo(r)))(U||r)}})();static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["ds-grant-request-copy"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:W,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(E,U){1&E&&(e.NAR(),e.DNE(0,K,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return r})();var V=t(37988);const Y=[{path:":token",resolve:{request:(r,f,o=(0,e.WQX)(V.W))=>o.findById(r.params.token).pipe((0,T.qD)())},children:[{path:"",component:N},{path:i,component:p},{path:c,component:X}]}]},67026:(M,v,t)=>{var a={"./custom/app/request-copy/deny-request-copy/deny-request-copy.component":[65851,5851]};function u(e){if(!t.o(a,e))return Promise.resolve().then(()=>{var p=new Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p});var l=a[e],y=l[0];return t.e(l[1]).then(()=>t(y))}u.keys=()=>Object.keys(a),u.id=67026,M.exports=u},16292:(M,v,t)=>{var a={"./custom/app/request-copy/email-request-copy/email-request-copy.component":[72389,2076,2389]};function u(e){if(!t.o(a,e))return Promise.resolve().then(()=>{var p=new Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p});var l=a[e],y=l[0];return Promise.all(l.slice(1).map(t.e)).then(()=>t(y))}u.keys=()=>Object.keys(a),u.id=16292,M.exports=u},63572:(M,v,t)=>{var a={"./custom/app/request-copy/grant-request-copy/grant-request-copy.component":[40473,473]};function u(e){if(!t.o(a,e))return Promise.resolve().then(()=>{var p=new Error("Cannot find module '"+e+"'");throw p.code="MODULE_NOT_FOUND",p});var l=a[e],y=l[0];return t.e(l[1]).then(()=>t(y))}u.keys=()=>Object.keys(a),u.id=63572,M.exports=u}}]);