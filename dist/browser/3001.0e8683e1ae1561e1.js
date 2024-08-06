(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[3001],{13756:(F,T,n)=>{"use strict";n.r(T),n.d(T,{MetadataImportPageComponent:()=>m});var s=n(10936),o=n(69685),f=n(72578),e=n(12007),R=n(39942),O=n(88476),E=n(72683),D=n(79224),v=n(92106),a=n(53107),M=n(54460),t=n(95968);let m=(()=>{class u{constructor(p,C,d,b,h){this.location=p,this.translate=C,this.notificationsService=d,this.scriptDataService=b,this.router=h,this.validateOnly=!0}setFile(p){this.fileObject=p}onReturn(){this.location.back()}importMetadata(){if(null==this.fileObject)this.notificationsService.error(this.translate.get("admin.metadata-import.page.error.addFile"));else{const p=[Object.assign(new O.p,{name:"-f",value:this.fileObject.name})];this.validateOnly&&p.push(Object.assign(new O.p,{name:"-v",value:!0})),this.scriptDataService.invoke(f.METADATA_IMPORT_SCRIPT_NAME,p,[this.fileObject]).pipe((0,e.qD)()).subscribe(C=>{if(C.hasSucceeded){const d=this.translate.get("process.new.notification.success.title"),b=this.translate.get("process.new.notification.success.content");this.notificationsService.success(d,b),(0,E.hj)(C.payload)&&this.router.navigateByUrl((0,R.yJ)(C.payload.processId))}else{const d=this.translate.get("process.new.notification.error.title"),b=this.translate.get("process.new.notification.error.content");this.notificationsService.error(d,b)}})}}static#e=this.\u0275fac=function(C){return new(C||u)(a.rXU(M.aZ),a.rXU(o.c$),a.rXU(D.I),a.rXU(f.ScriptDataService),a.rXU(t.Ix))};static#t=this.\u0275cmp=a.VBU({type:u,selectors:[["ds-base-metadata-import-page"]],standalone:!0,features:[a.aNF],decls:24,vars:21,consts:[[1,"container"],["id","header"],[1,"form-group"],[1,"form-check"],["type","checkbox","id","validateOnly",1,"form-check-input",3,"ngModelChange","ngModel"],["for","validateOnly",1,"form-check-label"],["id","validateOnlyHelpBlock",1,"form-text","text-muted"],[3,"onFileAdded","dropMessageLabel","dropMessageLabelReplacement"],[1,"space-children-mr"],["id","backButton",1,"btn","btn-secondary",3,"click"],["id","proceedButton",1,"btn","btn-primary",3,"click"]],template:function(C,d){1&C&&(a.j41(0,"div",0)(1,"h1",1),a.EFF(2),a.nI1(3,"translate"),a.k0s(),a.j41(4,"p"),a.EFF(5),a.nI1(6,"translate"),a.k0s(),a.j41(7,"div",2)(8,"div",3)(9,"input",4),a.mxI("ngModelChange",function(h){return a.DH7(d.validateOnly,h)||(d.validateOnly=h),h}),a.k0s(),a.j41(10,"label",5),a.EFF(11),a.nI1(12,"translate"),a.k0s()(),a.j41(13,"small",6),a.EFF(14),a.nI1(15,"translate"),a.k0s()(),a.j41(16,"ds-file-dropzone-no-uploader",7),a.bIt("onFileAdded",function(h){return d.setFile(h)}),a.k0s(),a.j41(17,"div",8)(18,"button",9),a.bIt("click",function(){return d.onReturn()}),a.EFF(19),a.nI1(20,"translate"),a.k0s(),a.j41(21,"button",10),a.bIt("click",function(){return d.importMetadata()}),a.EFF(22),a.nI1(23,"translate"),a.k0s()()()),2&C&&(a.R7$(2),a.JRh(a.bMT(3,9,"admin.metadata-import.page.header")),a.R7$(3),a.JRh(a.bMT(6,11,"admin.metadata-import.page.help")),a.R7$(4),a.R50("ngModel",d.validateOnly),a.R7$(2),a.SpI(" ",a.bMT(12,13,"admin.metadata-import.page.validateOnly")," "),a.R7$(3),a.SpI(" ",a.bMT(15,15,"admin.metadata-import.page.validateOnly.hint")," "),a.R7$(2),a.Y8G("dropMessageLabel","admin.metadata-import.page.dropMsg")("dropMessageLabelReplacement","admin.metadata-import.page.dropMsgReplace"),a.R7$(3),a.JRh(a.bMT(20,17,"admin.metadata-import.page.button.return")),a.R7$(3),a.JRh(a.bMT(23,19,"admin.metadata-import.page.button.proceed")))},dependencies:[v.i,s.YN,s.Zm,s.BC,s.vS,o.h,o.D9],encapsulation:2})}return u})()},13001:(F,T,n)=>{"use strict";n.r(T),n.d(T,{ROUTES:()=>Y});var s=n(32588),o=n(69685),f=n(62230),e=n(53107);let R=(()=>{class i{static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-admin-curation-task"]],standalone:!0,features:[e.aNF],decls:5,vars:3,consts:[[1,"container"]],template:function(c,r){1&c&&(e.j41(0,"div",0)(1,"h1"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.nrm(4,"ds-curation-form"),e.k0s()),2&c&&(e.R7$(2),e.JRh(e.bMT(3,1,"admin.curation-tasks.header")))},dependencies:[f.X,o.h,o.D9],encapsulation:2})}return i})();var O=n(54460),E=n(10936),D=n(61299),v=n(37610),a=n(83116),M=n(72578),t=n(12007),m=n(39942),u=n(88476),P=n(63016),p=n(58751),C=n(69509),d=n(75949),b=n(2771),h=n(2155),g=n(95968);function I(i,y){if(1&i&&(e.j41(0,"span",6),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&i){const l=e.XpG();e.R7$(),e.JRh(e.bMT(2,1,l.header))}}let U=(()=>{class i extends b.${constructor(l,c){super(l,c),this.activeModal=l,this.route=c,this.objectType=C.W.DSPACEOBJECT,this.selectorTypes=[C.W.COLLECTION],this.action=b.u.IMPORT_BATCH,this.response=new e.bkB}navigate(l){return l instanceof p.p?(this.response.emit(l),(0,P.of)(null)):(this.response.emit(null),(0,P.of)(null))}static#e=this.\u0275fac=function(c){return new(c||i)(e.rXU(h.Lw),e.rXU(g.nX))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-import-batch-selector"]],outputs:{response:"response"},standalone:!0,features:[e.Vt3,e.aNF],decls:10,vars:7,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","h5 px-2",4,"ngIf"],[3,"onSelect","currentDSOId","types","sort"],[1,"h5","px-2"]],template:function(c,r){1&c&&(e.j41(0,"div")(1,"div",0),e.EFF(2),e.nI1(3,"translate"),e.j41(4,"button",1),e.bIt("click",function(){return r.close()}),e.j41(5,"span",2),e.EFF(6,"\xd7"),e.k0s()()(),e.j41(7,"div",3),e.DNE(8,I,3,3,"span",4),e.j41(9,"ds-dso-selector",5),e.bIt("onSelect",function(B){return r.selectObject(B)}),e.k0s()()()),2&c&&(e.R7$(2),e.SpI("",e.bMT(3,5,"dso-selector."+r.action+"."+r.objectType.toString().toLowerCase()+".head")," "),e.R7$(6),e.Y8G("ngIf",r.header),e.R7$(),e.Y8G("currentDSOId",null==r.dsoRD?null:r.dsoRD.payload.uuid)("types",r.selectorTypes)("sort",r.defaultSort))},dependencies:[O.bT,d.x,o.h,o.D9],encapsulation:2})}return i})();var k=n(72683),j=n(79224),L=n(92106);function z(i,y){if(1&i){const l=e.RV6();e.j41(0,"p"),e.EFF(1," selected collection: "),e.j41(2,"b"),e.EFF(3),e.k0s(),e.EFF(4,"\xa0 "),e.j41(5,"a",16),e.bIt("click",function(){e.eBV(l);const r=e.XpG();return e.Njj(r.removeDspaceObject())}),e.EFF(6),e.nI1(7,"translate"),e.k0s()()}if(2&i){const l=e.XpG();e.R7$(3),e.JRh(l.getDspaceObjectName()),e.R7$(3),e.JRh(e.bMT(7,2,"admin.batch-import.page.remove"))}}function x(i,y){if(1&i){const l=e.RV6();e.j41(0,"ds-file-dropzone-no-uploader",17),e.bIt("onFileAdded",function(r){e.eBV(l);const _=e.XpG();return e.Njj(_.setFile(r))}),e.k0s()}2&i&&e.Y8G("dropMessageLabel","admin.batch-import.page.dropMsg")("dropMessageLabelReplacement","admin.batch-import.page.dropMsgReplace")}function $(i,y){if(1&i){const l=e.RV6();e.j41(0,"div",18)(1,"input",19),e.nI1(2,"translate"),e.mxI("ngModelChange",function(r){e.eBV(l);const _=e.XpG();return e.DH7(_.fileURL,r)||(_.fileURL=r),e.Njj(r)}),e.k0s()()}if(2&i){const l=e.XpG();e.R7$(),e.FS9("placeholder",e.bMT(2,2,"admin.metadata-import.page.urlMsg")),e.R50("ngModel",l.fileURL)}}let K=(()=>{class i{constructor(l,c,r,_,B,w,Z){this.location=l,this.translate=c,this.notificationsService=r,this.scriptDataService=_,this.router=B,this.modalService=w,this.dsoNameService=Z,this.validateOnly=!0,this.dso=null,this.isUpload=!0}setFile(l){this.fileObject=l}onReturn(){this.location.back()}selectCollection(){this.modalService.open(U).componentInstance.response.pipe((0,v.s)(1)).subscribe(c=>{this.dso=c||null})}importMetadata(){if(null==this.fileObject&&(0,k.Im)(this.fileURL))this.notificationsService.error(this.translate.get(this.isUpload?"admin.metadata-import.page.error.addFile":"admin.metadata-import.page.error.addFileUrl"));else{const l=[Object.assign(new u.p,{name:"--add"})];this.isUpload?l.push(Object.assign(new u.p,{name:"--zip",value:this.fileObject.name})):(this.fileObject=null,l.push(Object.assign(new u.p,{name:"--url",value:this.fileURL}))),this.dso&&l.push(Object.assign(new u.p,{name:"--collection",value:this.dso.uuid})),this.validateOnly&&l.push(Object.assign(new u.p,{name:"-v",value:!0})),this.scriptDataService.invoke(M.BATCH_IMPORT_SCRIPT_NAME,l,[this.fileObject]).pipe((0,t.qD)()).subscribe(c=>{if(c.hasSucceeded){const r=this.translate.get("process.new.notification.success.title"),_=this.translate.get("process.new.notification.success.content");this.notificationsService.success(r,_),(0,k.hj)(c.payload)&&this.router.navigateByUrl((0,m.yJ)(c.payload.processId))}else if(413===c.statusCode){const r=this.translate.get("process.new.notification.error.title"),_=this.translate.get("process.new.notification.error.max-upload.content");this.notificationsService.error(r,_)}else{const r=this.translate.get("process.new.notification.error.title"),_=this.translate.get("process.new.notification.error.content");this.notificationsService.error(r,_)}})}}getDspaceObjectName(){return this.dso?this.dsoNameService.getName(this.dso):null}removeDspaceObject(){this.dso=null}toggleUpload(){this.isUpload=!this.isUpload}static#e=this.\u0275fac=function(c){return new(c||i)(e.rXU(O.aZ),e.rXU(o.c$),e.rXU(j.I),e.rXU(M.ScriptDataService),e.rXU(g.Ix),e.rXU(h.Bq),e.rXU(a.f))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-batch-import-page"]],standalone:!0,features:[e.aNF],decls:36,vars:35,consts:[[1,"container"],["id","header"],[4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"form-group"],[1,"form-check"],["type","checkbox","id","validateOnly",1,"form-check-input",3,"ngModelChange","ngModel"],["for","validateOnly",1,"form-check-label"],["id","validateOnlyHelpBlock",1,"form-text","text-muted"],["color","#ebebeb",3,"change","checkedLabel","uncheckedLabel","checked"],[1,"form-text","text-muted"],["data-test","file-dropzone",3,"dropMessageLabel","dropMessageLabelReplacement","onFileAdded",4,"ngIf"],["class","form-group mt-2",4,"ngIf"],[1,"space-children-mr"],["id","backButton",1,"btn","btn-secondary",3,"click"],["id","proceedButton",1,"btn","btn-primary",3,"click"],["href","javascript:void(0)",3,"click"],["data-test","file-dropzone",3,"onFileAdded","dropMessageLabel","dropMessageLabelReplacement"],[1,"form-group","mt-2"],["type","text","data-test","file-url-input",1,"form-control",3,"ngModelChange","placeholder","ngModel"]],template:function(c,r){1&c&&(e.j41(0,"div",0)(1,"h1",1),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"translate"),e.k0s(),e.DNE(7,z,8,4,"p",2),e.j41(8,"p")(9,"button",3),e.bIt("click",function(){return r.selectCollection()}),e.EFF(10),e.nI1(11,"translate"),e.k0s()(),e.j41(12,"div",4)(13,"div",5)(14,"input",6),e.mxI("ngModelChange",function(B){return e.DH7(r.validateOnly,B)||(r.validateOnly=B),B}),e.k0s(),e.j41(15,"label",7),e.EFF(16),e.nI1(17,"translate"),e.k0s()(),e.j41(18,"small",8),e.EFF(19),e.nI1(20,"translate"),e.k0s()(),e.j41(21,"ui-switch",9),e.nI1(22,"translate"),e.nI1(23,"translate"),e.bIt("change",function(){return r.toggleUpload()}),e.k0s(),e.j41(24,"small",10),e.EFF(25),e.nI1(26,"translate"),e.k0s(),e.DNE(27,x,1,2,"ds-file-dropzone-no-uploader",11)(28,$,3,4,"div",12),e.j41(29,"div",13)(30,"button",14),e.bIt("click",function(){return r.onReturn()}),e.EFF(31),e.nI1(32,"translate"),e.k0s(),e.j41(33,"button",15),e.bIt("click",function(){return r.importMetadata()}),e.EFF(34),e.nI1(35,"translate"),e.k0s()()()),2&c&&(e.R7$(2),e.JRh(e.bMT(3,15,"admin.batch-import.page.header")),e.R7$(3),e.JRh(e.bMT(6,17,"admin.batch-import.page.help")),e.R7$(2),e.Y8G("ngIf",r.dso),e.R7$(3),e.JRh(e.bMT(11,19,"admin.metadata-import.page.button.select-collection")),e.R7$(4),e.R50("ngModel",r.validateOnly),e.R7$(2),e.SpI(" ",e.bMT(17,21,"admin.metadata-import.page.validateOnly")," "),e.R7$(3),e.SpI(" ",e.bMT(20,23,"admin.batch-import.page.validateOnly.hint")," "),e.R7$(2),e.Y8G("checkedLabel",e.bMT(22,25,"admin.metadata-import.page.toggle.upload"))("uncheckedLabel",e.bMT(23,27,"admin.metadata-import.page.toggle.url"))("checked",r.isUpload),e.R7$(4),e.SpI(" ",e.bMT(26,29,"admin.batch-import.page.toggle.help")," "),e.R7$(2),e.Y8G("ngIf",r.isUpload),e.R7$(),e.Y8G("ngIf",!r.isUpload),e.R7$(3),e.JRh(e.bMT(32,31,"admin.metadata-import.page.button.return")),e.R7$(3),e.JRh(e.bMT(35,33,"admin.metadata-import.page.button.proceed")))},dependencies:[O.bT,o.h,o.D9,E.YN,E.me,E.Zm,E.BC,E.vS,D.z,D.S,L.i],encapsulation:2})}return i})();var W=n(21124);n(13756);const X=["*"];function G(i,y){}let V=(()=>{class i extends W.J{getComponentName(){return"MetadataImportPageComponent"}importThemedComponent(l){return n(63324)(`./${l}/app/admin/admin-import-metadata-page/metadata-import-page.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(n,13756))}static#e=this.\u0275fac=(()=>{let l;return function(r){return(l||(l=e.xGo(i)))(r||i)}})();static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-metadata-import-page"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:X,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(c,r){1&c&&(e.NAR(),e.DNE(0,G,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return i})();var S=n(56405),A=n(71526),N=n(39839);const Y=[{path:S.uD,loadChildren:()=>Promise.all([n.e(6068),n.e(6817)]).then(n.bind(n,36817)).then(i=>i.ROUTES)},{path:S.jE,loadChildren:()=>Promise.all([n.e(4940),n.e(6545)]).then(n.bind(n,66545)).then(i=>i.ROUTES)},{path:"search",resolve:{breadcrumb:s.S},component:(()=>{class i{constructor(){this.context=A.o.AdminSearch}static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-admin-search-page"]],standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[["configuration","administrativeView",3,"context"]],template:function(c,r){1&c&&e.nrm(0,"ds-configuration-search-page",0),2&c&&e.Y8G("context",r.context)},dependencies:[N.M]})}return i})(),data:{title:"admin.search.title",breadcrumbKey:"admin.search"}},{path:"workflow",resolve:{breadcrumb:s.S},component:(()=>{class i{constructor(){this.context=A.o.AdminWorkflowSearch}static#e=this.\u0275fac=function(c){return new(c||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ds-admin-workflow-page"]],standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[["configuration","supervision",3,"context"]],template:function(c,r){1&c&&e.nrm(0,"ds-configuration-search-page",0),2&c&&e.Y8G("context",r.context)},dependencies:[N.M]})}return i})(),data:{title:"admin.workflow.title",breadcrumbKey:"admin.workflow"}},{path:"curation-tasks",resolve:{breadcrumb:s.S},component:R,data:{title:"admin.curation-tasks.title",breadcrumbKey:"admin.curation-tasks"}},{path:"metadata-import",resolve:{breadcrumb:s.S},component:V,data:{title:"admin.metadata-import.title",breadcrumbKey:"admin.metadata-import"}},{path:"batch-import",resolve:{breadcrumb:s.S},component:K,data:{title:"admin.batch-import.title",breadcrumbKey:"admin.batch-import"}},{path:"system-wide-alert",resolve:{breadcrumb:s.S},loadChildren:()=>n.e(7048).then(n.bind(n,7048)).then(i=>i.ROUTES),data:{title:"admin.system-wide-alert.title",breadcrumbKey:"admin.system-wide-alert"}},{path:S.z$,children:[{path:"",pathMatch:"full",redirectTo:"services"},{path:"services",loadChildren:()=>Promise.all([n.e(2076),n.e(8911)]).then(n.bind(n,88911)).then(i=>i.ROUTES)}]},{path:S.p8,loadChildren:()=>n.e(9410).then(n.bind(n,59410)).then(i=>i.ROUTES)},{path:S.iF,loadChildren:()=>Promise.all([n.e(2076),n.e(2091)]).then(n.bind(n,32091)).then(i=>i.ROUTES)}]},72553:(F,T,n)=>{"use strict";n.d(T,{Q:()=>s});class s{constructor(f,e){this.text=f,this.url=e}}},32588:(F,T,n)=>{"use strict";n.d(T,{S:()=>D});var s=n(53107),o=n(72683),f=n(67044),e=n(63016),R=n(72553);let E=(()=>{class v{getBreadcrumbs(M,t){return(0,e.of)([new R.Q(M+".breadcrumbs",t)])}static#e=this.\u0275fac=function(t){return new(t||v)};static#t=this.\u0275prov=s.jDH({token:v,factory:v.\u0275fac,providedIn:"root"})}return v})();const D=(v,a,M=(0,s.WQX)(E))=>{const t=v.data.breadcrumbKey;if((0,o.Tn)(t))throw new Error('You provided an i18nBreadcrumbResolver for url "'+v.url+"\" but no breadcrumbKey in the route's data");return{provider:M,key:t,url:(0,f.F)(v)}}},62230:(F,T,n)=>{"use strict";n.d(T,{X:()=>C});var s=n(54460),o=n(10936),f=n(69685),e=n(47947),R=n(84195),O=n(72578),E=n(12007),D=n(39942),v=n(72683),a=n(42237),M=n(79224),t=n(53107),m=n(95968);function u(d,b){if(1&d&&(t.j41(0,"option",9),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&d){const h=b.$implicit;t.Y8G("value",h),t.R7$(),t.SpI(" ",t.bMT(2,2,"curation-task.task."+h+".label")," ")}}function P(d,b){1&d&&(t.j41(0,"div",3)(1,"label",10),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.nrm(4,"input",11),t.j41(5,"small",12),t.EFF(6),t.nI1(7,"translate"),t.k0s()()),2&d&&(t.R7$(2),t.JRh(t.bMT(3,2,"curation.form.handle.label")),t.R7$(4),t.JRh(t.bMT(7,4,"curation.form.handle.hint")))}let C=(()=>{class d{constructor(h,g,I,U,k,j,L){this.scriptDataService=h,this.configurationDataService=g,this.notificationsService=I,this.translateService=U,this.handleService=k,this.router=j,this.cdr=L,this.subs=[]}ngOnDestroy(){this.subs.forEach(h=>h.unsubscribe())}ngOnInit(){this.form=new o.J3({task:new o.hs(""),handle:new o.hs("")}),this.config=this.configurationDataService.findByPropertyName("plugin.named.org.dspace.curate.CurationTask"),this.subs.push(this.config.pipe((0,E.ak)()).subscribe(h=>{this.tasks=h.values.filter(g=>(0,v.hj)(g)&&g.includes("=")).map(g=>g.split("=")[1].trim()),this.form.get("task").patchValue(this.tasks[0]),this.cdr.detectChanges()}))}hasHandleValue(){return(0,v.a4)(this.dsoHandle)}submit(){const h=this.form.get("task").value;let g;g=this.hasHandleValue()?this.handleService.normalizeHandle(this.dsoHandle).pipe((0,e.T)(I=>((0,v.Im)(I)&&this.notificationsService.error(this.translateService.get("curation.form.submit.error.head"),this.translateService.get("curation.form.submit.error.invalid-handle")),I))):this.handleService.normalizeHandle(this.form.get("handle").value).pipe((0,e.T)(I=>(0,v.Im)(I)?"all":I)),this.subs.push(g.subscribe(I=>{(0,v.a4)(I)&&this.subs.push(this.scriptDataService.invoke("curate",[{name:"-t",value:h},{name:"-i",value:I}],[]).pipe((0,E.qD)()).subscribe(U=>{U.hasSucceeded?(this.notificationsService.success(this.translateService.get("curation.form.submit.success.head"),this.translateService.get("curation.form.submit.success.content")),this.router.navigateByUrl((0,D.yJ)(U.payload.processId))):this.notificationsService.error(this.translateService.get("curation.form.submit.error.head"),this.translateService.get("curation.form.submit.error.content"))}))}))}static#e=this.\u0275fac=function(g){return new(g||d)(t.rXU(O.ScriptDataService),t.rXU(R.ConfigurationDataService),t.rXU(M.I),t.rXU(f.c$),t.rXU(a.e),t.rXU(m.Ix),t.rXU(t.gRc))};static#t=this.\u0275cmp=t.VBU({type:d,selectors:[["ds-curation-form"]],inputs:{dsoHandle:"dsoHandle"},standalone:!0,features:[t.aNF],decls:13,vars:9,consts:[[3,"ngSubmit","formGroup"],[1,"form-group"],[1,"row","mb-2"],[1,"col-12","col-sm-6"],["for","task",1,"font-weight-bold"],["id","task","formControlName","task",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["class","col-12 col-sm-6",4,"ngIf"],["type","submit",1,"btn","btn-default","btn-primary"],[3,"value"],["for","handle",1,"font-weight-bold"],["id","handle","formControlName","handle",1,"form-control"],[1,"text-muted"]],template:function(g,I){1&g&&(t.j41(0,"form",0),t.bIt("ngSubmit",function(){return I.submit()}),t.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"select",5),t.DNE(8,u,3,4,"option",6),t.k0s()(),t.DNE(9,P,8,6,"div",7),t.k0s(),t.j41(10,"button",8),t.EFF(11),t.nI1(12,"translate"),t.k0s()()()),2&g&&(t.Y8G("formGroup",I.form),t.R7$(5),t.JRh(t.bMT(6,5,"curation.form.task-select.label")),t.R7$(3),t.Y8G("ngForOf",I.tasks),t.R7$(),t.Y8G("ngIf",!I.hasHandleValue()),t.R7$(2),t.JRh(t.bMT(12,7,"curation.form.submit")))},dependencies:[o.YN,o.qT,o.xH,o.y7,o.me,o.wz,o.BC,o.cb,o.X1,o.j4,o.JD,s.pM,s.bT,f.h,f.D9],encapsulation:2})}return d})()},92106:(F,T,n)=>{"use strict";n.d(T,{i:()=>m});var s=n(54460),o=n(53107),f=n(10936),e=n(69685),R=n(84984),O=n.n(R),E=n(29087),D=n(63016),v=n(13044),a=n(96013);function M(u,P){if(1&u&&(o.j41(0,"div",9)(1,"div",10)(2,"p",11),o.EFF(3),o.nI1(4,"translate"),o.k0s()()()),2&u){const p=o.XpG();o.R7$(3),o.JRh(o.bMT(4,1,p.dropMessageLabel))}}function t(u,P){if(1&u&&(o.j41(0,"p",5),o.EFF(1),o.k0s()),2&u){const p=o.XpG();o.R7$(),o.SpI(" ",null==p.fileObject?null:p.fileObject.name," ")}}let m=(()=>{class u{constructor(){this.onFileAdded=new o.bkB,this.uploadFilesOptions=Object.assign(new a.H,{url:"placeholder"})}ngOnInit(){this.uploaderId="ds-drag-and-drop-uploader"+O()(),this.isOverDocumentDropZone=(0,D.of)(!1),this.uploader=new E.l0({url:"placeholder"})}onDrop(p){p.preventDefault()}onDragOver(p){p.preventDefault(),"HTML"!==p.target.tagName&&(this.isOverDocumentDropZone=(0,D.of)(!0))}fileOverDocument(p){p||(this.isOverDocumentDropZone=(0,D.of)(p))}setFile(p){this.fileObject=p.length>0?p[0]:void 0,this.onFileAdded.emit(this.fileObject)}static#e=this.\u0275fac=function(C){return new(C||u)};static#t=this.\u0275cmp=o.VBU({type:u,selectors:[["ds-file-dropzone-no-uploader"]],hostBindings:function(C,d){1&C&&o.bIt("drop",function(h){return d.onDrop(h)},!1,o.tSv)("dragover",function(h){return d.onDragOver(h)},!1,o.tSv)},inputs:{dropMessageLabel:"dropMessageLabel",dropMessageLabelReplacement:"dropMessageLabelReplacement"},outputs:{onFileAdded:"onFileAdded"},standalone:!0,features:[o.aNF],decls:17,vars:19,consts:[["file","ngModel"],["ng2FileDrop","",1,"ds-document-drop-zone","position-fixed","h-100","w-100",3,"onFileDrop","fileOver","uploader"],["class","ds-document-drop-zone-inner position-fixed h-100 w-100 p-2",4,"ngIf"],[1,"well","ds-base-drop-zone","mt-1","mb-3","text-muted","p-2"],["class","text-center m-0 p-0 d-flex justify-content-center align-items-center",4,"ngIf"],[1,"text-center","m-0","p-0","d-flex","justify-content-center","align-items-center"],["aria-hidden","true",1,"fas","fa-cloud-upload"],[1,"btn","btn-link","m-0","p-0","ml-1"],["requireFile","","type","file","name","file-upload","id","file-upload",1,"form-control-file","d-none",3,"ngModelChange","ngModel"],[1,"ds-document-drop-zone-inner","position-fixed","h-100","w-100","p-2"],[1,"ds-document-drop-zone-inner-content","position-relative","d-flex","flex-column","justify-content-center","text-center","h-100","w-100"],[1,"text-primary"]],template:function(C,d){if(1&C){const b=o.RV6();o.j41(0,"div",1),o.nI1(1,"async"),o.bIt("onFileDrop",function(g){return o.eBV(b),o.Njj(d.setFile(g))})("fileOver",function(g){return o.eBV(b),o.Njj(d.fileOverDocument(g))}),o.k0s(),o.DNE(2,M,5,3,"div",2),o.nI1(3,"async"),o.j41(4,"div",3),o.DNE(5,t,2,1,"p",4),o.j41(6,"p",5)(7,"span"),o.nrm(8,"i",6),o.EFF(9),o.nI1(10,"translate"),o.nI1(11,"translate"),o.k0s(),o.j41(12,"label",7)(13,"input",8,0),o.bIt("ngModelChange",function(g){return o.eBV(b),o.Njj(d.setFile(g))}),o.k0s(),o.EFF(15),o.nI1(16,"translate"),o.k0s()()()}2&C&&(o.AVh("ds-document-drop-zone-active",o.bMT(1,9,d.isOverDocumentDropZone)),o.Y8G("uploader",d.uploader),o.R7$(2),o.Y8G("ngIf",o.bMT(3,11,d.isOverDocumentDropZone)),o.R7$(3),o.Y8G("ngIf",d.fileObject),o.R7$(4),o.Lme(" ",o.bMT(10,13,null==d.fileObject?d.dropMessageLabel:d.dropMessageLabelReplacement)," ",o.bMT(11,15,"uploader.or"),""),o.R7$(4),o.Y8G("ngModel",d.fileObject),o.R7$(2),o.SpI(" ",o.bMT(16,17,"uploader.browse")," "))},dependencies:[s.MD,s.bT,s.Jj,f.YN,f.me,f.BC,f.vS,e.h,e.D9,E.eB,E.Ff,v.R],styles:[".ds-base-drop-zone[_ngcontent-%COMP%]{border:2px dashed var(--bs-gray-600)}.ds-document-drop-zone[_ngcontent-%COMP%]{top:0;left:0;z-index:-1}.ds-document-drop-zone-active[_ngcontent-%COMP%]{z-index:var(--ds-drop-zone-area-z-index)!important}.ds-document-drop-zone-inner[_ngcontent-%COMP%]{background-color:#ffffffb3;z-index:var(--ds-drop-zone-area-inner-z-index);top:0;left:0}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]{border:4px dashed var(--bs-primary);z-index:var(--ds-drop-zone-area-inner-z-index)}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:calc(var(--bs-font-size-lg) * 2.5)}"]})}return u})()},63324:(F,T,n)=>{var s={"./custom/app/admin/admin-import-metadata-page/metadata-import-page.component":[59415,9415]};function o(f){if(!n.o(s,f))return Promise.resolve().then(()=>{var O=new Error("Cannot find module '"+f+"'");throw O.code="MODULE_NOT_FOUND",O});var e=s[f],R=e[0];return n.e(e[1]).then(()=>n(R))}o.keys=()=>Object.keys(s),o.id=63324,F.exports=o},61299:(F,T,n)=>{"use strict";n.d(T,{S:()=>D,z:()=>v});var s=n(53107),o=n(10936),f=n(54460);const e=["*"];function R(a,M){if(1&a&&(s.j41(0,"label",2)(1,"span",3),s.EFF(2),s.k0s(),s.j41(3,"span",4),s.EFF(4),s.k0s()()),2&a){const t=s.XpG();s.R7$(),s.xc7("color",t.getColor("checkedTextColor")),s.BMQ("aria-label",t.checkedLabel),s.R7$(),s.JRh(t.checkedLabel),s.R7$(),s.xc7("color",t.getColor("uncheckedTextColor")),s.BMQ("aria-label",t.uncheckedLabel),s.R7$(),s.JRh(t.uncheckedLabel)}}const O=new s.nKC("UI_SWITCH_OPTIONS"),E={provide:o.kq,useExisting:(0,s.Rfq)(()=>D),multi:!0};let D=(()=>{class a{constructor(t={},m){this.cdr=m,this.change=new s.bkB,this.changeEvent=new s.bkB,this.valueChange=new s.bkB,this.onTouchedCallback=u=>{},this.onChangeCallback=u=>{},this.size=t&&t.size||"medium",this.color=t&&t.color,this.switchOffColor=t&&t.switchOffColor,this.switchColor=t&&t.switchColor,this.defaultBgColor=t&&t.defaultBgColor,this.defaultBoColor=t&&t.defaultBoColor,this.checkedLabel=t&&t.checkedLabel,this.uncheckedLabel=t&&t.uncheckedLabel,this.checkedTextColor=t&&t.checkedTextColor,this.uncheckedTextColor=t&&t.uncheckedTextColor}set checked(t){this._checked=!1!==t}get checked(){return this._checked}set disabled(t){this._disabled=!1!==t}get disabled(){return this._disabled}set reverse(t){this._reverse=!1!==t}get reverse(){return this._reverse}set loading(t){this._loading=!1!==t}get loading(){return this._loading}getColor(t=""){return"borderColor"===t?this.defaultBoColor:"switchColor"===t?this.reverse?this.checked&&this.switchOffColor||this.switchColor:this.checked?this.switchColor:this.switchOffColor||this.switchColor:"checkedTextColor"===t?this.reverse?this.uncheckedTextColor:this.checkedTextColor:"uncheckedTextColor"===t?this.reverse?this.checkedTextColor:this.uncheckedTextColor:this.reverse?this.checked?this.defaultBgColor:this.color:this.checked?this.color:this.defaultBgColor}onClick(t){this.disabled||(this.checked=!this.checked,this.change.emit(this.checked),this.valueChange.emit(this.checked),this.changeEvent.emit(t),this.onChangeCallback(this.checked),this.onTouchedCallback(this.checked),this.cdr.markForCheck())}onToggle(t){this.disabled||(this.beforeChange?this._beforeChange=this.beforeChange.subscribe(m=>{m&&this.onClick(t)}):this.onClick(t))}writeValue(t){t!==this.checked&&(this.checked=!!t),this.onChangeCallback(this.checked),this.cdr&&this.cdr.markForCheck()}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouchedCallback=t}setDisabledState(t){this.disabled=t}ngOnDestroy(){this._beforeChange&&this._beforeChange.unsubscribe()}}return a.\u0275fac=function(t){return new(t||a)(s.rXU(O,8),s.rXU(s.gRc))},a.\u0275cmp=s.VBU({type:a,selectors:[["ui-switch"]],hostBindings:function(t,m){1&t&&s.bIt("click",function(P){return m.onToggle(P)})},inputs:{size:"size",color:"color",switchOffColor:"switchOffColor",switchColor:"switchColor",defaultBgColor:"defaultBgColor",defaultBoColor:"defaultBoColor",checkedLabel:"checkedLabel",uncheckedLabel:"uncheckedLabel",checkedTextColor:"checkedTextColor",uncheckedTextColor:"uncheckedTextColor",beforeChange:"beforeChange",ariaLabel:"ariaLabel",checked:"checked",disabled:"disabled",reverse:"reverse",loading:"loading"},outputs:{change:"change",changeEvent:"changeEvent",valueChange:"valueChange"},features:[s.Jv_([E])],ngContentSelectors:e,decls:4,vars:21,consts:[["type","button","role","switch",1,"switch"],["class","switch-pane",4,"ngIf"],[1,"switch-pane"],[1,"switch-label-checked"],[1,"switch-label-unchecked"]],template:function(t,m){1&t&&(s.NAR(),s.j41(0,"button",0),s.DNE(1,R,5,8,"label",1),s.j41(2,"small"),s.SdG(3),s.k0s()()),2&t&&(s.xc7("background-color",m.getColor())("border-color",m.getColor("borderColor")),s.AVh("checked",m.checked)("disabled",m.disabled)("loading",m.loading)("switch-large","large"===m.size)("switch-medium","medium"===m.size)("switch-small","small"===m.size),s.BMQ("aria-checked",m.checked)("aria-label",m.ariaLabel),s.R7$(),s.Y8G("ngIf",m.checkedLabel||m.uncheckedLabel),s.R7$(),s.xc7("background",m.getColor("switchColor")))},dependencies:[f.bT],encapsulation:2}),a})(),v=(()=>{class a{static forRoot(t){return{ngModule:a,providers:[{provide:O,useValue:t||{}}]}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=s.$C({type:a}),a.\u0275inj=s.G2t({imports:[f.MD,o.YN,o.YN]}),a})()}}]);