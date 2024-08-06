"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4902],{24902:(X,T,o)=>{o.r(T),o.d(T,{ROUTES:()=>tt});var R=o(32588),l=o(63016),C=o(36556);const M=(0,o(80599).L)(()=>(0,l.of)(C._.IsCommunityAdmin));var _=o(59390),E=o(99794),F=o(81263),v=o(61305),d=o(54460),f=o(47947),e=o(12007),U=o(93068),t=o(53107),h=o(95968);function $(a,g){1&a&&t.nrm(0,"ds-access-control-form-container",1),2&a&&t.Y8G("itemRD",g.ngIf)("showLimitToSpecificBitstreams",!1)}let O=(()=>{class a{constructor(n){this.route=n}ngOnInit(){this.itemRD$=this.route.parent.parent.data.pipe((0,f.T)(n=>n.dso)).pipe((0,e.yd)())}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(h.nX))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-community-access-control"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[["titleMessage","community-access-control-title",3,"itemRD","showLimitToSpecificBitstreams",4,"ngIf"],["titleMessage","community-access-control-title",3,"itemRD","showLimitToSpecificBitstreams"]],template:function(s,i){1&s&&(t.DNE(0,$,1,2,"ds-access-control-form-container",0),t.nI1(1,"async")),2&s&&t.Y8G("ngIf",t.bMT(1,1,i.itemRD$))},dependencies:[U.o,d.bT,d.Jj]})}return a})();var p=o(1703),b=o(60519);let u=(()=>{class a{constructor(n){this.route=n}ngOnInit(){this.dsoRD$=this.route.parent.parent.data.pipe((0,p.$)(),(0,f.T)(n=>n.dso))}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(h.nX))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-community-authorizations"]],standalone:!0,features:[t.aNF],decls:3,vars:4,consts:[[1,"container"],[3,"resourceType","resourceUUID"]],template:function(s,i){if(1&s&&(t.j41(0,"div",0),t.nrm(1,"ds-resource-policies",1),t.nI1(2,"async"),t.k0s()),2&s){let c;t.R7$(),t.Y8G("resourceType","community")("resourceUUID",null==(c=t.bMT(2,2,i.dsoRD$))||null==c.payload?null:c.payload.id)}},dependencies:[b.e,d.Jj],encapsulation:2})}return a})();var r=o(69685),m=o(37610),y=o(41483),S=o(83116),P=o(62230),B=o(72683);const j=a=>({community:a});let L=(()=>{class a{constructor(n,s){this.route=n,this.dsoNameService=s}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,m.s)(1),(0,f.T)(n=>n.dso)),this.communityName$=this.dsoRD$.pipe((0,y.p)(n=>(0,B.a4)(n)),(0,f.T)(n=>this.dsoNameService.getName(n.payload)))}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(h.nX),t.rXU(S.f))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-community-curate"]],standalone:!0,features:[t.aNF],decls:7,vars:11,consts:[[1,"container"],[3,"dsoHandle"]],template:function(s,i){if(1&s&&(t.j41(0,"div",0)(1,"h2"),t.EFF(2),t.nI1(3,"async"),t.nI1(4,"translate"),t.k0s(),t.nrm(5,"ds-curation-form",1),t.nI1(6,"async"),t.k0s()),2&s){let c;t.R7$(2),t.JRh(t.i5U(4,4,"community.curate.header",t.eq3(9,j,t.bMT(3,2,i.communityName$)))),t.R7$(3),t.Y8G("dsoHandle",null==(c=t.bMT(6,7,i.dsoRD$))?null:c.payload.handle)}},dependencies:[P.X,r.h,r.D9,d.Jj],encapsulation:2})}return a})();var G=o(63710),N=o(82376),A=o(59503),Y=o(79224),J=o(95554);let W=(()=>{class a extends A.W{constructor(n,s,i,c,I){super(n,s,i,c,I),this.communityDataService=n,this.router=s,this.route=i,this.notificationsService=c,this.translate=I,this.frontendURL="/communities/",this.type=N.E.type}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(G.CommunityDataService),t.rXU(h.Ix),t.rXU(h.nX),t.rXU(Y.I),t.rXU(r.c$))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-community-metadata"]],standalone:!0,features:[t.Vt3,t.aNF],decls:2,vars:4,consts:[[3,"submitForm","back","finish","dso","isCreation"]],template:function(s,i){if(1&s&&(t.j41(0,"ds-community-form",0),t.nI1(1,"async"),t.bIt("submitForm",function(I){return i.onSubmit(I)})("back",function(){return i.navigateToHomePage()})("finish",function(){return i.navigateToHomePage()}),t.k0s()),2&s){let c;t.Y8G("dso",null==(c=t.bMT(1,2,i.dsoRD$))?null:c.payload)("isCreation",!1)}},dependencies:[J.p,d.Jj],encapsulation:2})}return a})();var H=o(34115);function K(a,g){if(1&a&&(t.nrm(0,"ds-comcol-role",1),t.nI1(1,"async")),2&a){const n=g.$implicit,s=t.XpG();t.Y8G("dso",t.bMT(1,2,s.community$))("comcolRole",n)}}let V=(()=>{class a{constructor(n){this.route=n}ngOnInit(){this.dsoRD$=this.route.parent.data.pipe((0,p.$)(),(0,f.T)(n=>n.dso)),this.community$=this.dsoRD$.pipe((0,e.yd)(),(0,e.Bo)()),this.comcolRoles$=this.community$.pipe((0,f.T)(n=>[{name:"community-admin",href:n._links.adminGroup.href}]))}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(h.nX))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-community-roles"]],standalone:!0,features:[t.aNF],decls:2,vars:3,consts:[[3,"dso","comcolRole",4,"ngFor","ngForOf"],[3,"dso","comcolRole"]],template:function(s,i){1&s&&(t.DNE(0,K,2,4,"ds-comcol-role",0),t.nI1(1,"async")),2&s&&t.Y8G("ngForOf",t.bMT(1,1,i.comcolRoles$))},dependencies:[H.J,d.Jj,d.Sq],encapsulation:2})}return a})();var k=o(72934),z=o(67873);const x=a=>({active:a}),Q=a=>[a];function Z(a,g){if(1&a&&(t.j41(0,"li",14)(1,"a",15),t.EFF(2),t.nI1(3,"translate"),t.k0s()()),2&a){const n=g.$implicit,s=t.XpG();t.R7$(),t.Y8G("ngClass",t.eq3(7,x,n===s.currentPage))("routerLink",t.eq3(9,Q,"./"+n)),t.BMQ("aria-selected",n===s.currentPage)("data-test",n),t.R7$(),t.SpI(" ",t.bMT(3,5,s.type+".edit.tabs."+n+".head")," ")}}function w(a,g){if(1&a&&(t.j41(0,"a",16),t.nI1(1,"async"),t.nrm(2,"i",17),t.EFF(3),t.nI1(4,"translate"),t.k0s()),2&a){let n;const s=t.XpG();t.Y8G("routerLink",s.getPageUrl(null==(n=t.bMT(1,2,s.dsoRD$))?null:n.payload)),t.R7$(3),t.SpI(" ",t.bMT(4,4,s.type+".edit.return")," ")}}const tt=[{path:"",resolve:{breadcrumb:R.S},data:{breadcrumbKey:"community.edit"},component:(()=>{class a extends k.M{constructor(n,s){super(n,s),this.router=n,this.route=s,this.type="community"}getPageUrl(n){return(0,z.c5)(n.id)}static#t=this.\u0275fac=function(s){return new(s||a)(t.rXU(h.Ix),t.rXU(h.nX))};static#e=this.\u0275cmp=t.VBU({type:a,selectors:[["ds-edit-community"]],standalone:!0,features:[t.Vt3,t.aNF],decls:21,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"my-auto"],["data-test","delete-button",1,"btn","btn-danger",3,"routerLink"],["aria-hidden","true",1,"fas","fa-trash"],[1,"pt-2"],["role","tablist",1,"nav","nav-tabs","justify-content-start","mb-2"],["class","nav-item","role","presentation",4,"ngFor","ngForOf"],[1,"tab-pane","active"],[1,"mb-4"],[1,"col-12","text-right"],["class","btn btn-outline-secondary",3,"routerLink",4,"ngIf"],["role","presentation",1,"nav-item"],["role","tab",1,"nav-link",3,"ngClass","routerLink"],[1,"btn","btn-outline-secondary",3,"routerLink"],["aria-hidden","true",1,"fas","fa-arrow-left"]],template:function(s,i){if(1&s&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"div",4)(8,"a",5),t.nI1(9,"async"),t.nrm(10,"i",6),t.EFF(11),t.nI1(12,"translate"),t.k0s()()(),t.j41(13,"div",7)(14,"ul",8),t.DNE(15,Z,4,11,"li",9),t.k0s(),t.j41(16,"div",10)(17,"div",11),t.nrm(18,"router-outlet"),t.k0s(),t.j41(19,"div",12),t.DNE(20,w,5,6,"a",13),t.k0s()()()()()()),2&s){let c;t.R7$(5),t.JRh(t.bMT(6,5,i.type+".edit.head")),t.R7$(3),t.Y8G("routerLink",("community"===i.type?"/communities/":"/collections/")+(null==(c=t.bMT(9,7,i.dsoRD$))?null:c.payload.uuid)+"/delete"),t.R7$(3),t.SpI(" ",t.bMT(12,9,i.type+".edit.delete"),""),t.R7$(4),t.Y8G("ngForOf",i.pages),t.R7$(5),t.Y8G("ngIf",!i.hideReturnButton)}},dependencies:[h.Wk,r.h,r.D9,d.YU,d.Sq,h.n3,d.bT,d.Jj],encapsulation:2})}return a})(),canActivate:[M],children:[{path:"",redirectTo:"metadata",pathMatch:"full"},{path:"metadata",component:W,data:{title:"community.edit.tabs.metadata.title",hideReturnButton:!0,showBreadcrumbs:!0}},{path:"roles",component:V,data:{title:"community.edit.tabs.roles.title",showBreadcrumbs:!0}},{path:"curate",component:L,data:{title:"community.edit.tabs.curate.title",showBreadcrumbs:!0}},{path:"access-control",component:O,data:{title:"collection.edit.tabs.access-control.title",showBreadcrumbs:!0}},{path:"authorizations",data:{showBreadcrumbs:!0},children:[{path:"create",resolve:{resourcePolicyTarget:v.Q},component:_.m,data:{title:"resource-policies.create.page.title"}},{path:"edit",resolve:{resourcePolicy:F.n},component:E._,data:{title:"resource-policies.edit.page.title"}},{path:"",component:u,data:{title:"community.edit.tabs.authorizations.title",showBreadcrumbs:!0,hideReturnButton:!0}}]}]}]},62230:(X,T,o)=>{o.d(T,{X:()=>O});var R=o(54460),l=o(10936),C=o(69685),D=o(47947),M=o(84195),_=o(72578),E=o(12007),F=o(39942),v=o(72683),d=o(42237),f=o(79224),e=o(53107),U=o(95968);function t(p,b){if(1&p&&(e.j41(0,"option",9),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&p){const u=b.$implicit;e.Y8G("value",u),e.R7$(),e.SpI(" ",e.bMT(2,2,"curation-task.task."+u+".label")," ")}}function h(p,b){1&p&&(e.j41(0,"div",3)(1,"label",10),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.nrm(4,"input",11),e.j41(5,"small",12),e.EFF(6),e.nI1(7,"translate"),e.k0s()()),2&p&&(e.R7$(2),e.JRh(e.bMT(3,2,"curation.form.handle.label")),e.R7$(4),e.JRh(e.bMT(7,4,"curation.form.handle.hint")))}let O=(()=>{class p{constructor(u,r,m,y,S,P,B){this.scriptDataService=u,this.configurationDataService=r,this.notificationsService=m,this.translateService=y,this.handleService=S,this.router=P,this.cdr=B,this.subs=[]}ngOnDestroy(){this.subs.forEach(u=>u.unsubscribe())}ngOnInit(){this.form=new l.J3({task:new l.hs(""),handle:new l.hs("")}),this.config=this.configurationDataService.findByPropertyName("plugin.named.org.dspace.curate.CurationTask"),this.subs.push(this.config.pipe((0,E.ak)()).subscribe(u=>{this.tasks=u.values.filter(r=>(0,v.hj)(r)&&r.includes("=")).map(r=>r.split("=")[1].trim()),this.form.get("task").patchValue(this.tasks[0]),this.cdr.detectChanges()}))}hasHandleValue(){return(0,v.a4)(this.dsoHandle)}submit(){const u=this.form.get("task").value;let r;r=this.hasHandleValue()?this.handleService.normalizeHandle(this.dsoHandle).pipe((0,D.T)(m=>((0,v.Im)(m)&&this.notificationsService.error(this.translateService.get("curation.form.submit.error.head"),this.translateService.get("curation.form.submit.error.invalid-handle")),m))):this.handleService.normalizeHandle(this.form.get("handle").value).pipe((0,D.T)(m=>(0,v.Im)(m)?"all":m)),this.subs.push(r.subscribe(m=>{(0,v.a4)(m)&&this.subs.push(this.scriptDataService.invoke("curate",[{name:"-t",value:u},{name:"-i",value:m}],[]).pipe((0,E.qD)()).subscribe(y=>{y.hasSucceeded?(this.notificationsService.success(this.translateService.get("curation.form.submit.success.head"),this.translateService.get("curation.form.submit.success.content")),this.router.navigateByUrl((0,F.yJ)(y.payload.processId))):this.notificationsService.error(this.translateService.get("curation.form.submit.error.head"),this.translateService.get("curation.form.submit.error.content"))}))}))}static#t=this.\u0275fac=function(r){return new(r||p)(e.rXU(_.ScriptDataService),e.rXU(M.ConfigurationDataService),e.rXU(f.I),e.rXU(C.c$),e.rXU(d.e),e.rXU(U.Ix),e.rXU(e.gRc))};static#e=this.\u0275cmp=e.VBU({type:p,selectors:[["ds-curation-form"]],inputs:{dsoHandle:"dsoHandle"},standalone:!0,features:[e.aNF],decls:13,vars:9,consts:[[3,"ngSubmit","formGroup"],[1,"form-group"],[1,"row","mb-2"],[1,"col-12","col-sm-6"],["for","task",1,"font-weight-bold"],["id","task","formControlName","task",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["class","col-12 col-sm-6",4,"ngIf"],["type","submit",1,"btn","btn-default","btn-primary"],[3,"value"],["for","handle",1,"font-weight-bold"],["id","handle","formControlName","handle",1,"form-control"],[1,"text-muted"]],template:function(r,m){1&r&&(e.j41(0,"form",0),e.bIt("ngSubmit",function(){return m.submit()}),e.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e.EFF(5),e.nI1(6,"translate"),e.k0s(),e.j41(7,"select",5),e.DNE(8,t,3,4,"option",6),e.k0s()(),e.DNE(9,h,8,6,"div",7),e.k0s(),e.j41(10,"button",8),e.EFF(11),e.nI1(12,"translate"),e.k0s()()()),2&r&&(e.Y8G("formGroup",m.form),e.R7$(5),e.JRh(e.bMT(6,5,"curation.form.task-select.label")),e.R7$(3),e.Y8G("ngForOf",m.tasks),e.R7$(),e.Y8G("ngIf",!m.hasHandleValue()),e.R7$(2),e.JRh(e.bMT(12,7,"curation.form.submit")))},dependencies:[l.YN,l.qT,l.xH,l.y7,l.me,l.wz,l.BC,l.cb,l.X1,l.j4,l.JD,R.pM,R.bT,C.h,C.D9],encapsulation:2})}return p})()}}]);