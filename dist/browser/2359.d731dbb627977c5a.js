(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2359],{95554:(T,E,n)=>{"use strict";n.d(E,{p:()=>l});var h=n(54460),u=n(89593),C=n(69685),f=n(86722),D=n(21706),v=n(25718),B=n(63710),A=n(9843),X=n(82376),O=n(27848),R=n(70862),x=n(36590),S=n(79224),G=n(44277),b=n(63524),e=n(53107),i=n(2155);function U(d,o){if(1&d){const a=e.RV6();e.j41(0,"div",12)(1,"button",13),e.bIt("click",function(){e.eBV(a);const g=e.XpG(3);return e.Njj(g.confirmLogoDeleteWithModal())}),e.EFF(2),e.nI1(3,"translate"),e.k0s()()}2&d&&(e.R7$(2),e.SpI("",e.bMT(3,1,"community.edit.logo.delete.title")," "))}function M(d,o){if(1&d&&(e.j41(0,"div",7)(1,"div",1)(2,"div",8),e.nrm(3,"ds-comcol-page-logo",9),e.k0s(),e.j41(4,"div",10),e.DNE(5,U,4,3,"div",11),e.k0s()()()),2&d){const a=e.XpG().ngVar,t=e.XpG();e.R7$(3),e.Y8G("alternateText",t.type.value+".logo.alt")("logo",a),e.R7$(2),e.Y8G("ngIf",a)}}function $(d,o){if(1&d){const a=e.RV6();e.j41(0,"ds-uploader",16),e.bIt("onCompleteItem",function(){e.eBV(a);const g=e.XpG(3);return e.Njj(g.onCompleteItem())})("onUploadError",function(){e.eBV(a);const g=e.XpG(3);return e.Njj(g.onUploadError())}),e.k0s()}if(2&d){const a=e.XpG(3);e.Y8G("ariaLabel",a.type.value+".browse.logo")("dropMsg",a.type.value+".edit.logo.upload")("dropOverDocumentMsg",a.type.value+".edit.logo.upload")("enableDragOverDocument",!0)("uploadFilesOptions",a.uploadFilesOptions)}}function W(d,o){if(1&d&&(e.j41(0,"div",14),e.DNE(1,$,1,5,"ds-uploader",15),e.nI1(2,"async"),e.k0s()),2&d){const a=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.bMT(2,1,a.initializedUploaderOptions))}}function F(d,o){if(1&d&&(e.qex(0),e.DNE(1,M,6,3,"div",5)(2,W,3,3,"div",6),e.bVm()),2&d){const a=o.ngVar;e.R7$(),e.Y8G("ngIf",a),e.R7$(),e.Y8G("ngIf",!a)}}function K(d,o){if(1&d){const a=e.RV6();e.j41(0,"ds-form",17),e.bIt("submitForm",function(){e.eBV(a);const g=e.XpG();return e.Njj(g.onSubmit())}),e.j41(1,"button",18),e.bIt("click",function(){e.eBV(a);const g=e.XpG();return e.Njj(g.back.emit())}),e.nrm(2,"i",19),e.EFF(3),e.nI1(4,"translate"),e.k0s()()}if(2&d){const a=e.XpG();e.Y8G("formId","comcol-form-id")("formModel",a.formModel)("displayCancel",!1),e.R7$(3),e.SpI(" ",e.bMT(4,4,a.type.value+".edit.return")," ")}}let l=(()=>{class d extends O.V{constructor(a,t,g,j,z,N,V,Y){super(a,t,g,j,N,V,Y),this.formService=a,this.translate=t,this.notificationsService=g,this.authService=j,this.dsoService=z,this.requestService=N,this.objectCache=V,this.modalService=Y,this.dso=new X.E,this.type=X.E.type,this.formModel=[new u.rA_({id:"title",name:"dc.title",required:!0,validators:{required:null},errorMessages:{required:"Please enter a name for this title"}}),new u.Zex({id:"description",name:"dc.description",spellCheck:f.c.form.spellCheck}),new u.Zex({id:"abstract",name:"dc.description.abstract",spellCheck:f.c.form.spellCheck}),new u.Zex({id:"rights",name:"dc.rights",spellCheck:f.c.form.spellCheck}),new u.Zex({id:"tableofcontents",name:"dc.description.tableofcontents",spellCheck:f.c.form.spellCheck})]}ngOnChanges(a){const t=a.dso;this.dso&&t&&!t.isFirstChange()&&super.ngOnInit()}static#t=this.\u0275fac=function(t){return new(t||d)(e.rXU(u.J9r),e.rXU(C.c$),e.rXU(S.I),e.rXU(D.uR),e.rXU(B.CommunityDataService),e.rXU(A.B),e.rXU(v.$),e.rXU(i.Bq))};static#n=this.\u0275cmp=e.VBU({type:d,selectors:[["ds-community-form"]],inputs:{dso:"dso"},standalone:!0,features:[e.Vt3,e.OA$,e.aNF],decls:9,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","d-inline-block","mb-1"],[4,"ngVar"],[3,"formId","formModel","displayCancel","submitForm",4,"ngIf"],["class","col-12 d-inline-block alert","id","logo-section",4,"ngIf"],["class","col-12 d-inline-block",4,"ngIf"],["id","logo-section",1,"col-12","d-inline-block","alert"],[1,"col-8","d-inline-block"],[3,"alternateText","logo"],[1,"col-4","d-inline-block"],["class","float-right",4,"ngIf"],[1,"float-right"],["type","button",1,"btn","btn-danger",3,"click"],[1,"col-12","d-inline-block"],[3,"ariaLabel","dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError",4,"ngIf"],[3,"onCompleteItem","onUploadError","ariaLabel","dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions"],[3,"submitForm","formId","formModel","displayCancel"],["before","","type","button",1,"btn","btn-outline-secondary",3,"click"],["aria-hidden","true",1,"fas","fa-arrow-left"]],template:function(t,g){if(1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"span"),e.EFF(4),e.nI1(5,"translate"),e.k0s()(),e.DNE(6,F,3,2,"ng-container",3),e.nI1(7,"async"),e.k0s()(),e.DNE(8,K,5,6,"ds-form",4)),2&t){let j;e.R7$(4),e.JRh(e.bMT(5,3,g.type.value+".edit.logo.label")),e.R7$(2),e.Y8G("ngVar",null==(j=e.bMT(7,5,null==g.dso?null:g.dso.logo))?null:j.payload),e.R7$(2),e.Y8G("ngIf",g.formModel)}},dependencies:[x.s,C.h,C.D9,G.y,h.Jj,R.X,h.bT,b.r]})}return d})()},32359:(T,E,n)=>{"use strict";n.r(E),n.d(E,{ROUTES:()=>Ct});var h=n(86503),u=n(96206),C=n(21709),f=n(99020),D=n(32588),v=n(90097),B=n(73295),A=n(74733),X=n(43515),O=n(9055),R=n(63016),x=n(1762),S=n(36556);const G=(0,x.L)(()=>O.D,()=>(0,R.of)(S._.AdministratorOf));var b=n(67873),e=n(54460),i=n(69685),U=n(83116),M=n(63710),$=n(9843),W=n(98985),F=n(82376),K=n(10906),l=n(21548),d=n(79224),o=n(63524),a=n(95554),t=n(53107),g=n(95968);const j=s=>({parent:s});function z(s,P){1&s&&(t.j41(0,"h2",9),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&s&&(t.R7$(),t.JRh(t.bMT(2,1,"community.create.head")))}function N(s,P){if(1&s&&(t.j41(0,"h2",10),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&s){const m=t.XpG().ngVar,c=t.XpG(2);t.R7$(),t.JRh(t.i5U(2,1,"community.create.sub-head",t.eq3(4,j,c.dsoNameService.getName(m))))}}function V(s,P){if(1&s&&(t.qex(0),t.DNE(1,z,3,3,"h2",7)(2,N,3,6,"h2",8),t.bVm()),2&s){const m=P.ngVar;t.R7$(),t.Y8G("ngIf",!m),t.R7$(),t.Y8G("ngIf",m)}}function Y(s,P){if(1&s){const m=t.RV6();t.j41(0,"div",1)(1,"div",3)(2,"div",4),t.DNE(3,V,3,2,"ng-container",5),t.nI1(4,"async"),t.k0s()(),t.j41(5,"ds-community-form",6),t.bIt("submitForm",function(_){t.eBV(m);const y=t.XpG();return t.Njj(y.onSubmit(_))})("back",function(){t.eBV(m);const _=t.XpG();return t.Njj(_.navigateToHome())}),t.k0s()()}if(2&s){let m;const c=t.XpG();t.R7$(3),t.Y8G("ngVar",null==(m=t.bMT(4,2,c.parentRD$))?null:m.payload),t.R7$(2),t.Y8G("isCreation",!0)}}function p(s,P){1&s&&t.nrm(0,"ds-loading")}let L=(()=>{class s extends K.Q{constructor(m,c,_,y,Q,Z,q){super(m,c,m,_,y,Q,Z,q),this.communityDataService=m,this.dsoNameService=c,this.routeService=_,this.router=y,this.notificationsService=Q,this.translate=Z,this.requestService=q,this.frontendURL="/communities/",this.type=F.E.type}static#t=this.\u0275fac=function(c){return new(c||s)(t.rXU(M.CommunityDataService),t.rXU(U.f),t.rXU(W.v$),t.rXU(g.Ix),t.rXU(d.I),t.rXU(i.c$),t.rXU($.B))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-create-community"]],standalone:!0,features:[t.Vt3,t.aNF],decls:5,vars:6,consts:[["class","container",4,"ngIf"],[1,"container"],[4,"ngIf"],[1,"row"],[1,"col-12","pb-4"],[4,"ngVar"],[3,"submitForm","back","isCreation"],["id","header","class","border-bottom p-2",4,"ngIf"],["id","sub-header","class","border-bottom pb-2",4,"ngIf"],["id","header",1,"border-bottom","p-2"],["id","sub-header",1,"border-bottom","pb-2"]],template:function(c,_){1&c&&(t.DNE(0,Y,6,4,"div",0),t.nI1(1,"async"),t.j41(2,"div",1),t.DNE(3,p,1,0,"ds-loading",2),t.nI1(4,"async"),t.k0s()),2&c&&(t.Y8G("ngIf",!1===t.bMT(1,2,_.isLoading$)),t.R7$(3),t.Y8G("ngIf",t.bMT(4,4,_.isLoading$)))},dependencies:[a.p,i.h,i.D9,o.r,e.bT,e.Jj,l.v]})}return s})();var r=n(47947),I=n(82040),J=n(12007),H=n(72683),tt=n(96996);const nt=s=>({dso:s});function ot(s,P){1&s&&(t.j41(0,"span"),t.nrm(1,"i",12),t.EFF(2),t.nI1(3,"translate"),t.k0s()),2&s&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"community.delete.processing"),""))}function et(s,P){1&s&&(t.j41(0,"span"),t.nrm(1,"i",13),t.EFF(2),t.nI1(3,"translate"),t.k0s()),2&s&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"community.delete.confirm"),""))}function it(s,P){if(1&s){const m=t.RV6();t.qex(0),t.j41(1,"div",3)(2,"h1",4),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"p",5),t.EFF(6),t.nI1(7,"translate"),t.k0s(),t.j41(8,"div",6)(9,"div",7)(10,"button",8),t.nI1(11,"async"),t.bIt("click",function(){const _=t.eBV(m).ngVar,y=t.XpG();return t.Njj(y.onCancel(_))}),t.nrm(12,"i",9),t.EFF(13),t.nI1(14,"translate"),t.k0s(),t.j41(15,"button",10),t.nI1(16,"async"),t.bIt("click",function(){const _=t.eBV(m).ngVar,y=t.XpG();return t.Njj(y.onConfirm(_))}),t.DNE(17,ot,4,3,"span",11),t.nI1(18,"async"),t.DNE(19,et,4,3,"span",11),t.nI1(20,"async"),t.k0s()()()(),t.bVm()}if(2&s){const m=P.ngVar,c=t.XpG();t.R7$(3),t.JRh(t.bMT(4,7,"community.delete.head")),t.R7$(3),t.JRh(t.i5U(7,9,"community.delete.text",t.eq3(22,nt,c.dsoNameService.getName(m)))),t.R7$(4),t.Y8G("disabled",t.bMT(11,12,c.processing$)),t.R7$(3),t.SpI(" ",t.bMT(14,14,"community.delete.cancel")," "),t.R7$(2),t.Y8G("disabled",t.bMT(16,16,c.processing$)),t.R7$(2),t.Y8G("ngIf",t.bMT(18,18,c.processing$)),t.R7$(2),t.Y8G("ngIf",!0!==t.bMT(20,20,c.processing$))}}let st=(()=>{class s extends tt.D{constructor(m,c,_,y,Q,Z){super(m,c,_,y,Q,Z),this.dsoDataService=m,this.dsoNameService=c,this.router=_,this.route=y,this.notifications=Q,this.translate=Z,this.frontendURL="/communities/"}static#t=this.\u0275fac=function(c){return new(c||s)(t.rXU(M.CommunityDataService),t.rXU(U.f),t.rXU(g.Ix),t.rXU(g.nX),t.rXU(d.I),t.rXU(i.c$))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-delete-community"]],standalone:!0,features:[t.Vt3,t.aNF],decls:4,vars:3,consts:[[1,"container"],[1,"row"],[4,"ngVar"],[1,"col-12","pb-4"],["id","header",1,"border-bottom","pb-2"],[1,"pb-2"],[1,"form-group","row"],[1,"col","text-right","space-children-mr"],[1,"btn","btn-outline-secondary",3,"click","disabled"],["aria-hidden","true",1,"fas","fa-times"],[1,"btn","btn-danger",3,"click","disabled"],[4,"ngIf"],["aria-hidden","true",1,"fas","fa-circle-notch","fa-spin"],["aria-hidden","true",1,"fas","fa-trash"]],template:function(c,_){if(1&c&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,it,21,24,"ng-container",2),t.nI1(3,"async"),t.k0s()()),2&c){let y;t.R7$(2),t.Y8G("ngVar",null==(y=t.bMT(3,1,_.dsoRD$))?null:y.payload)}},dependencies:[i.h,i.D9,e.Jj,o.r,e.bT]})}return s})();var w=n(21124);n(861);const at=["*"];function mt(s,P){}let ct=(()=>{class s extends w.J{constructor(){super(...arguments),this.inAndOutputNames=["community","pageSize"]}getComponentName(){return"CommunityPageSubCollectionListComponent"}importThemedComponent(m){return n(60771)(`./${m}/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(n,861))}static#t=this.\u0275fac=(()=>{let m;return function(_){return(m||(m=t.xGo(s)))(_||s)}})();static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-community-page-sub-collection-list"]],inputs:{community:"community",pageSize:"pageSize"},standalone:!0,features:[t.Vt3,t.aNF],ngContentSelectors:at,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(c,_){1&c&&(t.NAR(),t.DNE(0,mt,0,0,"ng-template",null,0,t.C5r),t.j41(2,"div",null,1),t.SdG(4),t.k0s())},encapsulation:2})}return s})();n(39615);const rt=["*"];function lt(s,P){}let dt=(()=>{class s extends w.J{constructor(){super(...arguments),this.inAndOutputNames=["community","pageSize"]}getComponentName(){return"CommunityPageSubCommunityListComponent"}importThemedComponent(m){return n(24427)(`./${m}/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(n,39615))}static#t=this.\u0275fac=(()=>{let m;return function(_){return(m||(m=t.xGo(s)))(_||s)}})();static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-community-page-sub-community-list"]],inputs:{community:"community",pageSize:"pageSize"},standalone:!0,features:[t.Vt3,t.aNF],ngContentSelectors:rt,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(c,_){1&c&&(t.NAR(),t.DNE(0,lt,0,0,"ng-template",null,0,t.C5r),t.j41(2,"div",null,1),t.SdG(4),t.k0s())},encapsulation:2})}return s})();function _t(s,P){if(1&s&&(t.qex(0),t.nrm(1,"ds-community-page-sub-community-list",1)(2,"ds-community-page-sub-collection-list",1),t.bVm()),2&s){const m=P.ngIf;t.R7$(),t.Y8G("community",m),t.R7$(),t.Y8G("community",m)}}let ut=(()=>{class s{constructor(m){this.route=m}ngOnInit(){this.community$=this.route.parent.data.pipe((0,r.T)(m=>m.dso.payload))}static#t=this.\u0275fac=function(c){return new(c||s)(t.rXU(g.nX))};static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-sub-com-col-section"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[4,"ngIf"],[3,"community"]],template:function(c,_){1&c&&(t.DNE(0,_t,3,2,"ng-container",0),t.nI1(1,"async")),2&c&&t.Y8G("ngIf",t.bMT(1,1,_.community$))},dependencies:[dt,ct,e.Jj,e.bT]})}return s})();n(85866);const gt=["*"];function pt(s,P){}const Ct=[{path:b.D6,children:[{path:"",component:L,resolve:{breadcrumb:D.S},data:{breadcrumbKey:"community.create"}}],canActivate:[C.t,(s,P,m=(0,t.WQX)(M.CommunityDataService),c=(0,t.WQX)(g.Ix))=>{const _=s.queryParams.parent;return(0,H.Tn)(_)?(0,R.of)(!0):m.findById(_).pipe((0,J.qD)(),(0,r.T)(y=>(0,H.a4)(y)&&y.hasSucceeded&&(0,H.a4)(y.payload)),(0,I.M)(y=>{y||c.navigate(["/404"])}))}],data:{breadcrumbQueryParam:"parent"},resolve:{breadcrumb:f.V},runGuardsAndResolvers:"always"},{path:":id",resolve:{dso:O.D,breadcrumb:f.V,menu:A.c},runGuardsAndResolvers:"always",children:[{path:b.zQ,loadChildren:()=>Promise.all([n.e(9563),n.e(3068),n.e(2076),n.e(4902)]).then(n.bind(n,24902)).then(s=>s.ROUTES),canActivate:[G]},{path:"delete",pathMatch:"full",component:st,canActivate:[C.t]},{path:"",component:(()=>{class s extends w.J{getComponentName(){return"CommunityPageComponent"}importThemedComponent(m){return n(76098)(`./${m}/app/community-page/community-page.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(n,85866))}static#t=this.\u0275fac=(()=>{let m;return function(_){return(m||(m=t.xGo(s)))(_||s)}})();static#n=this.\u0275cmp=t.VBU({type:s,selectors:[["ds-community-page"]],standalone:!0,features:[t.Vt3,t.aNF],ngContentSelectors:gt,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(c,_){1&c&&(t.NAR(),t.DNE(0,pt,0,0,"ng-template",null,0,t.C5r),t.j41(2,"div",null,1),t.SdG(4),t.k0s())},encapsulation:2})}return s})(),children:[{path:"",pathMatch:"full",component:B.E},{path:"subcoms-cols",pathMatch:"full",component:ut,resolve:{breadcrumb:D.S},data:{breadcrumbKey:"community.subcoms-cols"}},{path:"browse/:id",pathMatch:"full",component:v.O,canActivate:[h.h],resolve:{breadcrumb:u.p},data:{breadcrumbKey:"browse.metadata"}}]}],data:{menu:{public:[{id:"statistics_community_:id",active:!0,visible:!0,index:2,model:{type:X.x.LINK,text:"menu.section.statistics",link:"statistics/communities/:id/"}}]}}}]},85866:(T,E,n)=>{"use strict";n.r(E),n.d(E,{CommunityPageComponent:()=>Y});var h=n(54460),u=n(95968),C=n(69685),f=n(47947),D=n(41483),v=n(27035),B=n(21706),A=n(83116),X=n(77304),O=n(36556),R=n(37330),x=n(12007),S=n(2566),G=n(80724),b=n(18786),e=n(97578),i=n(63194),U=n(70862),M=n(4097),$=n(72683),W=n(96606),F=n(21548),K=n(63524),l=n(89096),d=n(67873),o=n(53107);function a(p,L){if(1&p&&(o.nrm(0,"ds-comcol-page-logo",17),o.nI1(1,"async"),o.nI1(2,"translate")),2&p){let r;const I=o.XpG(4);o.Y8G("logo",null==(r=o.bMT(1,2,I.logoRD$))?null:r.payload)("alternateText",o.bMT(2,4,"community.logo"))}}function t(p,L){if(1&p&&(o.j41(0,"footer",18),o.nrm(1,"ds-comcol-page-content",12),o.k0s()),2&p){const r=o.XpG().$implicit;o.R7$(),o.Y8G("content",r.copyrightText)("hasInnerHtml",!0)}}function g(p,L){if(1&p&&(o.j41(0,"div"),o.nrm(1,"ds-view-tracker",6),o.j41(2,"div",7)(3,"header",8),o.nrm(4,"ds-comcol-page-header",9),o.DNE(5,a,3,6,"ds-comcol-page-logo",10),o.nrm(6,"ds-comcol-page-handle",11)(7,"ds-comcol-page-content",12)(8,"ds-comcol-page-content",13),o.k0s(),o.nrm(9,"ds-dso-edit-menu"),o.k0s(),o.j41(10,"section",14),o.nrm(11,"ds-comcol-page-browse-by",15)(12,"router-outlet"),o.k0s(),o.DNE(13,t,2,2,"footer",16),o.k0s()),2&p){const r=L.$implicit,I=o.XpG(3);o.R7$(),o.Y8G("object",r),o.R7$(3),o.Y8G("name",I.dsoNameService.getName(r)),o.R7$(),o.Y8G("ngIf",I.logoRD$),o.R7$(),o.Y8G("content",r.handle)("title","community.page.handle"),o.R7$(),o.Y8G("content",r.introductoryText)("hasInnerHtml",!0),o.R7$(),o.Y8G("content",r.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),o.R7$(3),o.Y8G("id",r.id)("contentType",r.type),o.R7$(2),o.Y8G("ngIf",r.copyrightText)}}function j(p,L){if(1&p&&(o.j41(0,"div",4),o.DNE(1,g,14,13,"div",5),o.k0s()),2&p){const r=o.XpG().ngVar;o.Y8G("@fadeInOut",void 0),o.R7$(),o.Y8G("ngIf",null==r?null:r.payload)}}function z(p,L){1&p&&(o.nrm(0,"ds-error",19),o.nI1(1,"translate")),2&p&&o.FS9("message",o.bMT(1,1,"error.community"))}function N(p,L){1&p&&(o.nrm(0,"ds-loading",19),o.nI1(1,"translate")),2&p&&o.FS9("message",o.bMT(1,1,"loading.community"))}function V(p,L){if(1&p&&(o.j41(0,"div",1),o.DNE(1,j,2,2,"div",2)(2,z,2,3,"ds-error",3)(3,N,2,3,"ds-loading",3),o.k0s()),2&p){const r=L.ngVar;o.R7$(),o.Y8G("ngIf",null==r?null:r.hasSucceeded),o.R7$(),o.Y8G("ngIf",null==r?null:r.hasFailed),o.R7$(),o.Y8G("ngIf",null==r?null:r.isLoading)}}let Y=(()=>{class p{constructor(r,I,J,H,k){this.route=r,this.router=I,this.authService=J,this.authorizationDataService=H,this.dsoNameService=k}ngOnInit(){this.communityRD$=this.route.data.pipe((0,f.T)(r=>r.dso),(0,R.QD)(this.router,this.authService)),this.logoRD$=this.communityRD$.pipe((0,f.T)(r=>r.payload),(0,D.p)(r=>(0,$.a4)(r)),(0,v.Z)(r=>r.logo)),this.communityPageRoute$=this.communityRD$.pipe((0,x.Hz)(),(0,f.T)(r=>(0,d.c5)(r.id))),this.isCommunityAdmin$=this.authorizationDataService.isAuthorized(O._.IsCommunityAdmin)}static#t=this.\u0275fac=function(I){return new(I||p)(o.rXU(u.nX),o.rXU(u.Ix),o.rXU(B.uR),o.rXU(X.AuthorizationDataService),o.rXU(A.f))};static#n=this.\u0275cmp=o.VBU({type:p,selectors:[["ds-base-community-page"]],standalone:!0,features:[o.aNF],decls:2,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],["class","community-page",4,"ngIf"],[3,"message",4,"ngIf"],[1,"community-page"],[4,"ngIf"],[3,"object"],[1,"d-flex","flex-row","border-bottom","mb-4","pb-4"],[1,"comcol-header","mr-auto"],[3,"name"],[3,"logo","alternateText",4,"ngIf"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[1,"comcol-page-browse-section"],[3,"id","contentType"],["class","border-top my-5 pt-4",4,"ngIf"],[3,"logo","alternateText"],[1,"border-top","my-5","pt-4"],[3,"message"]],template:function(I,J){1&I&&(o.DNE(0,V,4,3,"div",0),o.nI1(1,"async")),2&I&&o.Y8G("ngVar",o.bMT(1,1,J.communityRD$))},dependencies:[b.s,W.A,F.v,h.bT,C.h,C.D9,G.g,M.T,e.T,U.X,i.H,h.Jj,l.H,K.r,u.n3,u.iI],data:{animation:[S.Ws]},changeDetection:0})}return p})()},861:(T,E,n)=>{"use strict";n.r(E),n.d(E,{CommunityPageSubCollectionListComponent:()=>K});var h=n(54460),u=n(69685),C=n(71217),f=n(76627),D=n(22867),v=n(89632),B=n(8109),A=n(95438),O=(n(82376),n(2566)),R=n(72683),x=n(96606),S=n(21548),G=n(13943),b=n(67899),e=n(63524),i=n(53107),U=n(95968);function M(l,d){if(1&l&&(i.j41(0,"div")(1,"h3"),i.EFF(2),i.nI1(3,"translate"),i.k0s(),i.nrm(4,"ds-viewable-collection",3),i.k0s()),2&l){const o=i.XpG().ngVar,a=i.XpG();i.Y8G("@fadeIn",void 0),i.R7$(2),i.JRh(i.bMT(3,6,"community.sub-collection-list.head")),i.R7$(2),i.Y8G("config",a.config)("sortConfig",a.sortConfig)("objects",o)("hideGear",!1)}}function $(l,d){1&l&&(i.nrm(0,"ds-error",4),i.nI1(1,"translate")),2&l&&i.FS9("message",i.bMT(1,1,"error.sub-collections"))}function W(l,d){1&l&&(i.nrm(0,"ds-loading",4),i.nI1(1,"translate")),2&l&&i.FS9("message",i.bMT(1,1,"loading.sub-collections"))}function F(l,d){if(1&l&&(i.qex(0),i.DNE(1,M,5,8,"div",1)(2,$,2,3,"ds-error",2)(3,W,2,3,"ds-loading",2),i.bVm()),2&l){const o=d.ngVar;i.R7$(),i.Y8G("ngIf",(null==o?null:o.hasSucceeded)&&(null==o?null:o.payload.totalElements)>0),i.R7$(),i.Y8G("ngIf",null==o?null:o.hasFailed),i.R7$(),i.Y8G("ngIf",null==o?null:o.isLoading)}}let K=(()=>{class l{constructor(o,a,t){this.cds=o,this.paginationService=a,this.route=t,this.pageId="cmcl",this.subCollectionsRDObs=new C.t({}),this.subscriptions=[]}ngOnInit(){this.config=new b.W,this.config.id=this.pageId,this.config.pageSize=(0,R.a4)(this.pageSize)?this.pageSize:this.route.snapshot.queryParams[this.pageId+".rpp"]??this.config.pageSize,this.config.currentPage=this.route.snapshot.queryParams[this.pageId+".page"]??1,this.sortConfig=new v.z("dc.title",v.U[this.route.snapshot.queryParams[this.pageId+".sd"]]??v.U.ASC),this.initPage()}initPage(){const o=this.paginationService.getCurrentPagination(this.config.id,this.config),a=this.paginationService.getCurrentSort(this.config.id,this.sortConfig);this.subscriptions.push((0,f.z)([o,a]).pipe((0,D.n)(([t,g])=>this.cds.findByParent(this.community.id,{currentPage:t.currentPage,elementsPerPage:t.pageSize,sort:{field:g.field,direction:g.direction}}))).subscribe(t=>{this.subCollectionsRDObs.next(t)}))}ngOnDestroy(){this.paginationService.clearPagination(this.config?.id),this.subscriptions.map(o=>o.unsubscribe())}static#t=this.\u0275fac=function(a){return new(a||l)(i.rXU(B.CollectionDataService),i.rXU(A.m),i.rXU(U.nX))};static#n=this.\u0275cmp=i.VBU({type:l,selectors:[["ds-base-community-page-sub-collection-list"]],inputs:{community:"community",pageSize:"pageSize"},standalone:!0,features:[i.aNF],decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"config","sortConfig","objects","hideGear"],[3,"message"]],template:function(a,t){1&a&&(i.DNE(0,F,4,3,"ng-container",0),i.nI1(1,"async")),2&a&&i.Y8G("ngVar",i.bMT(1,1,t.subCollectionsRDObs))},dependencies:[G.h,x.A,S.v,h.bT,u.h,u.D9,h.Jj,e.r],data:{animation:[O.qG]}})}return l})()},39615:(T,E,n)=>{"use strict";n.r(E),n.d(E,{CommunityPageSubCommunityListComponent:()=>K});var h=n(54460),u=n(69685),C=n(71217),f=n(76627),D=n(22867),v=n(89632),B=n(63710),A=n(95438),O=(n(82376),n(2566)),R=n(72683),x=n(96606),S=n(21548),G=n(13943),b=n(67899),e=n(63524),i=n(53107),U=n(95968);function M(l,d){if(1&l&&(i.j41(0,"div")(1,"h3"),i.EFF(2),i.nI1(3,"translate"),i.k0s(),i.nrm(4,"ds-viewable-collection",3),i.k0s()),2&l){const o=i.XpG().ngVar,a=i.XpG();i.Y8G("@fadeIn",void 0),i.R7$(2),i.JRh(i.bMT(3,6,"community.sub-community-list.head")),i.R7$(2),i.Y8G("config",a.config)("sortConfig",a.sortConfig)("objects",o)("hideGear",!1)}}function $(l,d){1&l&&(i.nrm(0,"ds-error",4),i.nI1(1,"translate")),2&l&&i.FS9("message",i.bMT(1,1,"error.sub-communities"))}function W(l,d){1&l&&(i.nrm(0,"ds-loading",4),i.nI1(1,"translate")),2&l&&i.FS9("message",i.bMT(1,1,"loading.sub-communities"))}function F(l,d){if(1&l&&(i.qex(0),i.DNE(1,M,5,8,"div",1)(2,$,2,3,"ds-error",2)(3,W,2,3,"ds-loading",2),i.bVm()),2&l){const o=d.ngVar;i.R7$(),i.Y8G("ngIf",(null==o?null:o.hasSucceeded)&&(null==o?null:o.payload.totalElements)>0),i.R7$(),i.Y8G("ngIf",null==o?null:o.hasFailed),i.R7$(),i.Y8G("ngIf",null==o?null:o.isLoading)}}let K=(()=>{class l{constructor(o,a,t){this.cds=o,this.paginationService=a,this.route=t,this.pageId="cmscm",this.subCommunitiesRDObs=new C.t({}),this.subscriptions=[]}ngOnInit(){this.config=new b.W,this.config.id=this.pageId,this.config.pageSize=(0,R.a4)(this.pageSize)?this.pageSize:this.route.snapshot.queryParams[this.pageId+".rpp"]??this.config.pageSize,this.config.currentPage=this.route.snapshot.queryParams[this.pageId+".page"]??1,this.sortConfig=new v.z("dc.title",v.U[this.route.snapshot.queryParams[this.pageId+".sd"]]??v.U.ASC),this.initPage()}initPage(){const o=this.paginationService.getCurrentPagination(this.config.id,this.config),a=this.paginationService.getCurrentSort(this.config.id,this.sortConfig);this.subscriptions.push((0,f.z)([o,a]).pipe((0,D.n)(([t,g])=>this.cds.findByParent(this.community.id,{currentPage:t.currentPage,elementsPerPage:t.pageSize,sort:{field:g.field,direction:g.direction}}))).subscribe(t=>{this.subCommunitiesRDObs.next(t)}))}ngOnDestroy(){this.paginationService.clearPagination(this.config?.id),this.subscriptions.map(o=>o.unsubscribe())}static#t=this.\u0275fac=function(a){return new(a||l)(i.rXU(B.CommunityDataService),i.rXU(A.m),i.rXU(U.nX))};static#n=this.\u0275cmp=i.VBU({type:l,selectors:[["ds-base-community-page-sub-community-list"]],inputs:{community:"community",pageSize:"pageSize"},standalone:!0,features:[i.aNF],decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"config","sortConfig","objects","hideGear"],[3,"message"]],template:function(a,t){1&a&&(i.DNE(0,F,4,3,"ng-container",0),i.nI1(1,"async")),2&a&&i.Y8G("ngVar",i.bMT(1,1,t.subCommunitiesRDObs))},dependencies:[x.A,S.v,e.r,h.bT,G.h,h.Jj,u.h,u.D9],data:{animation:[O.qG]}})}return l})()},76098:(T,E,n)=>{var h={"./custom/app/community-page/community-page.component":[34717,4717]};function u(C){if(!n.o(h,C))return Promise.resolve().then(()=>{var v=new Error("Cannot find module '"+C+"'");throw v.code="MODULE_NOT_FOUND",v});var f=h[C],D=f[0];return n.e(f[1]).then(()=>n(D))}u.keys=()=>Object.keys(h),u.id=76098,T.exports=u},60771:(T,E,n)=>{var h={"./custom/app/community-page/sections/sub-com-col-section/sub-collection-list/community-page-sub-collection-list.component":[75356,5356]};function u(C){if(!n.o(h,C))return Promise.resolve().then(()=>{var v=new Error("Cannot find module '"+C+"'");throw v.code="MODULE_NOT_FOUND",v});var f=h[C],D=f[0];return n.e(f[1]).then(()=>n(D))}u.keys=()=>Object.keys(h),u.id=60771,T.exports=u},24427:(T,E,n)=>{var h={"./custom/app/community-page/sections/sub-com-col-section/sub-community-list/community-page-sub-community-list.component":[3870,3870]};function u(C){if(!n.o(h,C))return Promise.resolve().then(()=>{var v=new Error("Cannot find module '"+C+"'");throw v.code="MODULE_NOT_FOUND",v});var f=h[C],D=f[0];return n.e(f[1]).then(()=>n(D))}u.keys=()=>Object.keys(h),u.id=24427,T.exports=u}}]);