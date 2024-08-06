(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4587],{74587:(U,B,t)=>{"use strict";t.r(B),t.d(B,{ROUTES:()=>C});var T=t(21709),s=t(53107),h=t(78052),f=t(12007),F=t(24106);const E=[(0,F.s)("bundle",{},(0,F.s)("primaryBitstream"),(0,F.s)("item")),(0,F.s)("format")],b=(o,D,n=(0,s.WQX)(h.BitstreamDataService))=>n.findById(o.params.id,!0,!1,...E).pipe((0,f.qD)());var p=t(63016),m=t(22867),v=t(47947),g=t(31829),M=t(72553),I=t(72683),k=t(66559),L=t(73579),N=t(83116);let V=(()=>{class o extends L.U{constructor(n,a,l){super(a,l),this.bitstreamService=n,this.linkService=a,this.dsoNameService=l}getBreadcrumbs(n,a){const l=this.dsoNameService.getName(n),c=new M.Q(l,a);return this.getOwningItem(n.uuid).pipe((0,m.n)(S=>{if((0,I.hj)(S)&&(0,I.a4)(S.payload)){const x=S.payload;return super.getBreadcrumbs(x,(0,g.wN)(x))}return(0,p.of)([])}),(0,v.T)(S=>[...S,c]))}getOwningItem(n){return this.bitstreamService.findById(n,!0,!0,...E).pipe((0,f.qD)(),(0,f.Bo)(),(0,m.n)(a=>(0,I.a4)(a)?a.bundle.pipe((0,f.qD)(),(0,f.Bo)(),(0,m.n)(l=>(0,I.a4)(l)?l.item.pipe((0,f.qD)()):(0,p.of)(void 0))):(0,p.of)(void 0)))}static#t=this.\u0275fac=function(a){return new(a||o)(s.KVO(h.BitstreamDataService),s.KVO(k._),s.KVO(N.f))};static#e=this.\u0275prov=s.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var j=t(82695);const G=(o,D,n=(0,s.WQX)(V),a=(0,s.WQX)(h.BitstreamDataService))=>(0,j.G)(o,D,n,a,...E);var P=t(32588),y=t(59390),q=t(99794),_=t(81263),tt=t(61305),e=t(54460),K=t(95968),H=t(69685),W=t(1703),et=t(60519);const O=o=>["/bitstreams",o,"edit"];let it=(()=>{class o{constructor(n){this.route=n}ngOnInit(){this.dsoRD$=this.route.data.pipe((0,W.$)(),(0,v.T)(n=>n.bitstream))}static#t=this.\u0275fac=function(a){return new(a||o)(s.rXU(K.nX))};static#e=this.\u0275cmp=s.VBU({type:o,selectors:[["ds-collection-authorizations"]],standalone:!0,features:[s.aNF],decls:10,vars:12,consts:[[1,"container"],[3,"resourceType","resourceUUID"],[1,"button-row","bottom"],[1,"text-right"],["role","button",1,"btn","btn-outline-secondary","mr-1",3,"routerLink"],[1,"fas","fa-arrow-left"]],template:function(a,l){if(1&a&&(s.j41(0,"div",0),s.nrm(1,"ds-resource-policies",1),s.nI1(2,"async"),s.j41(3,"div",2)(4,"div",3)(5,"a",4),s.nI1(6,"async"),s.nrm(7,"i",5),s.EFF(8),s.nI1(9,"translate"),s.k0s()()()()),2&a){let c,S;s.R7$(),s.Y8G("resourceType","bitstream")("resourceUUID",null==(c=s.bMT(2,4,l.dsoRD$))||null==c.payload?null:c.payload.id),s.R7$(4),s.Y8G("routerLink",s.eq3(10,O,null==(S=s.bMT(6,6,l.dsoRD$))||null==S.payload?null:S.payload.id)),s.R7$(3),s.SpI(" ",s.bMT(9,8,"bitstream.edit.return")," ")}},dependencies:[et.e,e.Jj,H.h,H.D9,K.Wk],encapsulation:2})}return o})();var st=t(76627),$=t(41483),z=t(37610),at=t(21706),rt=t(77304),Z=t(36556),nt=t(6918),ot=t(86779),dt=t(37330),lt=t(9767),w=t(37846);const mt=o=>({bitstream:o});let Y=(()=>{class o{constructor(n,a,l,c,S,x,Q,J,ft,pt,vt){this.route=n,this.router=a,this.authorizationService=l,this.auth=c,this.fileService=S,this.hardRedirectService=x,this.location=Q,this.dsoNameService=J,this.signpostingDataService=ft,this.responseService=pt,this.platformId=vt,this.initPageLinks()}back(){this.location.back()}ngOnInit(){this.bitstreamRD$=this.route.data.pipe((0,v.T)(n=>n.bitstream)),this.bitstream$=this.bitstreamRD$.pipe((0,dt.QD)(this.router,this.auth),(0,f.Bo)()),this.bitstream$.pipe((0,m.n)(n=>{const a=this.authorizationService.isAuthorized(Z._.CanDownload,(0,I.hj)(n)?n.self:void 0),l=this.auth.isAuthenticated();return(0,st.z)([a,l,(0,p.of)(n)])}),(0,$.p)(([n,a,l])=>(0,I.a4)(n)&&(0,I.a4)(a)),(0,z.s)(1),(0,m.n)(([n,a,l])=>n&&a?this.fileService.retrieveFileDownloadLink(l._links.content.href).pipe((0,$.p)(c=>(0,I.a4)(c)),(0,z.s)(1),(0,v.T)(c=>[n,a,l,c])):[[n,a,l,""]])).subscribe(([n,a,l,c])=>{n&&a&&(0,I.hj)(c)?this.hardRedirectService.redirect(c):n&&!a?this.hardRedirectService.redirect(l._links.content.href):!n&&a?this.router.navigateByUrl((0,g.bZ)(),{skipLocationChange:!0}):!n&&!a&&(this.auth.setRedirectUrl(this.router.url),this.router.navigateByUrl("login"))})}initPageLinks(){(0,e.Vy)(this.platformId)&&this.route.params.subscribe(n=>{this.signpostingDataService.getLinks(n.id).pipe((0,z.s)(1)).subscribe(a=>{let l="";a.forEach(c=>{l=l+((0,I.hj)(l)?", ":"")+`<${c.href}> ; rel="${c.rel}"`+((0,I.hj)(c.type)?` ; type="${c.type}" `:" ")}),this.responseService.setHeader("Link",l)})})}static#t=this.\u0275fac=function(a){return new(a||o)(s.rXU(K.nX),s.rXU(K.Ix),s.rXU(rt.AuthorizationDataService),s.rXU(at.uR),s.rXU(lt.E),s.rXU(w.$),s.rXU(e.aZ),s.rXU(N.f),s.rXU(nt.z),s.rXU(ot.w),s.rXU(s.Agw))};static#e=this.\u0275cmp=s.VBU({type:o,selectors:[["ds-bitstream-download-page"]],standalone:!0,features:[s.aNF],decls:10,vars:11,consts:[[1,"container"],[1,"h2"],[1,"pt-3"],[1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-arrow-left"]],template:function(a,l){1&a&&(s.j41(0,"div",0)(1,"h1",1),s.EFF(2),s.nI1(3,"async"),s.nI1(4,"translate"),s.k0s(),s.j41(5,"div",2)(6,"button",3),s.bIt("click",function(){return l.back()}),s.nrm(7,"i",4),s.EFF(8),s.nI1(9,"translate"),s.k0s()()()),2&a&&(s.R7$(2),s.JRh(s.i5U(4,4,"bitstream.download.page",s.eq3(9,mt,l.dsoNameService.getName(s.bMT(3,2,l.bitstream$))))),s.R7$(6),s.SpI(" ",s.bMT(9,7,"bitstream.download.page.back")," "))},dependencies:[e.Jj,H.h,H.D9],encapsulation:2})}return o})();const ht=(0,t(1762).L)(()=>b,()=>(0,p.of)(Z._.CanManagePolicies));var ut=t(21124);t(64543);const X=["*"];function i(o,D){}const d=(o,D,n=(0,s.WQX)(h.BitstreamDataService),a=(0,s.WQX)(w.$),l=(0,s.WQX)(K.Ix))=>{const c=o.params.prefix,S=o.params.suffix,x=o.params.filename;let Q=o.params.sequence_id;return(0,I.Tn)(Q)&&(Q=o.queryParams.sequenceId),n.findByItemHandle(`${c}/${S}`,Q,x).pipe((0,f.qD)(),(0,v.T)(J=>J.hasSucceeded&&!J.hasNoContent?(a.redirect(new URL(`/bitstreams/${J.payload.uuid}/download`,a.getCurrentOrigin()).href,301),!1):l.createUrlTree([g.RD])))},C=[{path:"handle/:prefix/:suffix/:filename",component:Y,canActivate:[d]},{path:":prefix/:suffix/:sequence_id/:filename",component:Y,canActivate:[d]},{path:":id/download",component:Y,resolve:{bitstream:b}},{path:":id/edit",component:(()=>{class o extends ut.J{getComponentName(){return"EditBitstreamPageComponent"}importThemedComponent(n){return t(13170)(`./${n}/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,64543))}static#t=this.\u0275fac=(()=>{let n;return function(l){return(n||(n=s.xGo(o)))(l||o)}})();static#e=this.\u0275cmp=s.VBU({type:o,selectors:[["ds-edit-bitstream-page"]],standalone:!0,features:[s.Vt3,s.aNF],ngContentSelectors:X,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(a,l){1&a&&(s.NAR(),s.DNE(0,i,0,0,"ng-template",null,0,s.C5r),s.j41(2,"div",null,1),s.SdG(4),s.k0s())},encapsulation:2})}return o})(),resolve:{bitstream:b,breadcrumb:G},canActivate:[T.t]},{path:":id/authorizations",canActivate:[ht],children:[{path:"create",resolve:{resourcePolicyTarget:tt.Q},component:y.m,data:{title:"resource-policies.create.page.title",showBreadcrumbs:!0}},{path:"edit",resolve:{breadcrumb:P.S,resourcePolicy:_.n},component:q._,data:{breadcrumbKey:"item.edit",title:"resource-policies.edit.page.title",showBreadcrumbs:!0}},{path:"",resolve:{bitstream:b,breadcrumb:G},component:it,data:{title:"bitstream.edit.authorizations.title",showBreadcrumbs:!0}}]}]},64543:(U,B,t)=>{"use strict";t.r(B),t.d(B,{EditBitstreamPageComponent:()=>ut});var T=t(54460),s=t(95968),h=t(89593),f=t(69685),F=t(87599),E=t.n(F),b=t(76627),p=t(63016),m=t(47947),v=t(22867),g=t(41483),M=t(82040),I=t(83116),k=t(78052),L=t(80346),N=t(27691),V=t(79224),j=t(45122),G=t(25718),P=t(25744),y=t(12007),q=t(61189),_=t(70210),tt=t(9843),e=t(53107);let K=(()=>{class u{constructor(i,r,d,A,R,C){this.requestService=i,this.rdbService=r,this.objectCache=d,this.halService=A,this.notificationsService=R,this.bundleDataService=C}getHttpOptions(){const i=Object.create({});let r=new N.Lr;return r=r.append("Content-Type","text/uri-list"),i.headers=r,i}createAndSendRequest(i,r,d){const A=this.requestService.generateRequestId(),R=new i(A,r,d,this.getHttpOptions());return this.requestService.send(R),this.rdbService.buildFromRequestUUID(A)}create(i,r){return this.createAndSendRequest(_.Qf,r._links.primaryBitstream.href,i.self)}put(i,r){return this.createAndSendRequest(_.v_,r._links.primaryBitstream.href,i.self)}delete(i){return this.createAndSendRequest(_.$,i._links.primaryBitstream.href).pipe((0,y.bD)(),(0,v.n)(r=>this.bundleDataService.findByHref(i.self,r.hasFailed)))}static#t=this.\u0275fac=function(r){return new(r||u)(e.KVO(tt.B),e.KVO(j.o),e.KVO(G.$),e.KVO(P.Y),e.KVO(V.I),e.KVO(q.BundleDataService))};static#e=this.\u0275prov=e.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})();var H=t(20272),W=t(84562),et=t(15497),O=t(72683),it=t(96606),st=t(11162),$=t(12323),z=t(59191),at=t(36590),rt=t(21548),Z=t(89351),nt=t(63524),ot=t(7044);const dt=u=>["/bitstreams",u,"authorizations"];function lt(u,X){if(1&u){const i=e.RV6();e.j41(0,"ds-form",13),e.bIt("submitForm",function(){e.eBV(i);const d=e.XpG(4);return e.Njj(d.onSubmit())})("cancel",function(){e.eBV(i);const d=e.XpG(4);return e.Njj(d.onCancel())})("dfChange",function(d){e.eBV(i);const A=e.XpG(4);return e.Njj(A.onChange(d))}),e.j41(1,"div",14)(2,"a",15),e.EFF(3),e.nI1(4,"translate"),e.k0s()()()}if(2&u){const i=e.XpG(3).ngVar,r=e.XpG();e.Y8G("formId","edit-bitstream-form-id")("formGroup",r.formGroup)("formModel",r.formModel)("formLayout",r.formLayout)("submitLabel","form.save"),e.R7$(2),e.Y8G("routerLink",e.eq3(9,dt,null==i||null==i.payload?null:i.payload.id)),e.R7$(),e.JRh(e.bMT(4,7,"bitstream.edit.authorizations.link"))}}function w(u,X){if(1&u&&(e.j41(0,"div",5)(1,"div",6),e.nrm(2,"ds-thumbnail",7),e.k0s(),e.j41(3,"div",8)(4,"div",2)(5,"div",5)(6,"div",9)(7,"h1",10),e.EFF(8),e.j41(9,"span",11),e.EFF(10),e.nI1(11,"dsFileSize"),e.k0s()()()()(),e.DNE(12,lt,5,11,"ds-form",12),e.k0s()()),2&u){const i=e.XpG(2).ngVar,r=e.XpG();e.R7$(2),e.Y8G("thumbnail",null==i?null:i.payload),e.R7$(6),e.SpI("",r.dsoNameService.getName(null==i?null:i.payload)," "),e.R7$(2),e.SpI("(",e.bMT(11,4,null==i||null==i.payload?null:i.payload.sizeBytes),")"),e.R7$(2),e.Y8G("ngIf",r.formGroup)}}function mt(u,X){1&u&&(e.nrm(0,"ds-error",16),e.nI1(1,"translate")),2&u&&e.FS9("message",e.bMT(1,1,"error.bitstream"))}function Y(u,X){1&u&&(e.nrm(0,"ds-loading",16),e.nI1(1,"translate")),2&u&&e.FS9("message",e.bMT(1,1,"loading.bitstream"))}function ct(u,X){if(1&u&&(e.j41(0,"div",2),e.DNE(1,w,13,6,"div",3)(2,mt,2,3,"ds-error",4)(3,Y,2,3,"ds-loading",4),e.k0s()),2&u){const i=X.ngVar,r=e.XpG().ngVar;e.R7$(),e.Y8G("ngIf",(null==r?null:r.hasSucceeded)&&(null==i?null:i.hasSucceeded)),e.R7$(),e.Y8G("ngIf",null==r?null:r.hasFailed),e.R7$(),e.Y8G("ngIf",!r||!i||(null==r?null:r.isLoading)||(null==i?null:i.isLoading))}}function ht(u,X){if(1&u&&(e.qex(0),e.DNE(1,ct,4,3,"div",1),e.nI1(2,"async"),e.bVm()),2&u){const i=e.XpG();e.R7$(),e.Y8G("ngVar",e.bMT(2,1,i.bitstreamFormatsRD$))}}let ut=(()=>{class u{constructor(i,r,d,A,R,C,o,D,n,a){this.route=i,this.router=r,this.changeDetectorRef=d,this.formService=A,this.translate=R,this.bitstreamService=C,this.dsoNameService=o,this.notificationsService=D,this.bitstreamFormatService=n,this.primaryBitstreamService=a,this.KEY_PREFIX="bitstream.edit.form.",this.LABEL_KEY_SUFFIX=".label",this.HINT_KEY_SUFFIX=".hint",this.NOTIFICATIONS_PREFIX="bitstream.edit.notifications.",this.IMAGE_WIDTH_METADATA="iiif.image.width",this.IMAGE_HEIGHT_METADATA="iiif.image.height",this.IIIF_TOC_METADATA="iiif.toc",this.IIIF_LABEL_METADATA="iiif.label",this.findAllOptions={elementsPerPage:9999},this.fileNameModel=new $.C({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"fileName",name:"fileName",required:!0,validators:{required:null},errorMessages:{required:"You must provide a file name for the bitstream"}}),this.primaryBitstreamModel=new st.i({id:"primaryBitstream",name:"primaryBitstream"}),this.descriptionModel=new z.E({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"description",name:"description",rows:10}),this.selectedFormatModel=new h.z4z({id:"selectedFormat",name:"selectedFormat"}),this.newFormatModel=new h.rA_({id:"newFormat",name:"newFormat"}),this.iiifLabelModel=new $.C({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifLabel",name:"iiifLabel"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifLabelContainer=new h.iO5({id:"iiifLabelContainer",group:[this.iiifLabelModel]},{grid:{host:"form-row"}}),this.iiifTocModel=new $.C({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifToc",name:"iiifToc"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifTocContainer=new h.iO5({id:"iiifTocContainer",group:[this.iiifTocModel]},{grid:{host:"form-row"}}),this.iiifWidthModel=new $.C({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifWidth",name:"iiifWidth"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifWidthContainer=new h.iO5({id:"iiifWidthContainer",group:[this.iiifWidthModel]},{grid:{host:"form-row"}}),this.iiifHeightModel=new $.C({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifHeight",name:"iiifHeight"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifHeightContainer=new h.iO5({id:"iiifHeightContainer",group:[this.iiifHeightModel]},{grid:{host:"form-row"}}),this.inputModels=[this.primaryBitstreamModel,this.fileNameModel,this.descriptionModel,this.selectedFormatModel,this.newFormatModel],this.formModel=[new h.iO5({id:"fileNamePrimaryContainer",group:[this.primaryBitstreamModel,this.fileNameModel]},{grid:{host:"form-row"}}),new h.iO5({id:"descriptionContainer",group:[this.descriptionModel]}),new h.iO5({id:"formatContainer",group:[this.selectedFormatModel,this.newFormatModel]})],this.newFormatBaseLayout="col col-sm-6 d-inline-block",this.formLayout={fileName:{grid:{host:"col col-sm-8 d-inline-block"}},primaryBitstream:{grid:{container:"col-12"},element:{container:"text-right"}},description:{grid:{host:"col-12 d-inline-block"}},embargo:{grid:{host:"col-12 d-inline-block"}},selectedFormat:{grid:{host:"col col-sm-6 d-inline-block"}},newFormat:{grid:{host:this.newFormatBaseLayout+" invisible"}},fileNamePrimaryContainer:{grid:{host:"row position-relative"}},descriptionContainer:{grid:{host:"row"}},formatContainer:{grid:{host:"row"}}},this.isIIIF=!1,this.subs=[]}ngOnInit(){this.itemId=this.route.snapshot.queryParams.itemId,this.entityType=this.route.snapshot.queryParams.entityType,this.bitstreamRD$=this.route.data.pipe((0,m.T)(C=>C.bitstream)),this.bitstreamFormatsRD$=this.bitstreamFormatService.findAll(this.findAllOptions);const i=this.bitstreamRD$.pipe((0,y.yd)(),(0,y.Bo)()),r=this.bitstreamFormatsRD$.pipe((0,y.yd)(),(0,y.Bo)()),d=i.pipe((0,v.n)(C=>C.bundle),(0,y.ak)()),A=d.pipe((0,O.Az)(),(0,v.n)(C=>this.bitstreamService.findByHref(C._links.primaryBitstream.href)),(0,y.ak)()),R=d.pipe((0,v.n)(C=>C.item),(0,y.ak)());this.subs.push((0,b.z)(i,r,d,A,R).pipe().subscribe(([C,o,D,n,a])=>{this.bitstream=C,this.formats=o.page,this.bundle=D,this.primaryBitstreamUUID=(0,O.a4)(n)?n.uuid:null,this.itemId=a.uuid,this.setIiifStatus(this.bitstream)})),this.subs.push(this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}))}setForm(){this.formGroup=this.formService.createFormGroup(this.formModel),this.updateFormatModel(),this.updateForm(this.bitstream),this.updateFieldTranslations()}updateForm(i){this.formGroup.patchValue({fileNamePrimaryContainer:{fileName:i.name,primaryBitstream:this.primaryBitstreamUUID===i.uuid},descriptionContainer:{description:i.firstMetadataValue("dc.description")},formatContainer:{newFormat:(0,O.a4)(i.firstMetadata("dc.format"))?i.firstMetadata("dc.format").value:void 0}}),this.isIIIF&&this.formGroup.patchValue({iiifLabelContainer:{iiifLabel:i.firstMetadataValue(this.IIIF_LABEL_METADATA)},iiifTocContainer:{iiifToc:i.firstMetadataValue(this.IIIF_TOC_METADATA)},iiifWidthContainer:{iiifWidth:i.firstMetadataValue(this.IMAGE_WIDTH_METADATA)},iiifHeightContainer:{iiifHeight:i.firstMetadataValue(this.IMAGE_HEIGHT_METADATA)}}),this.bitstream.format.pipe((0,y.Hz)()).subscribe(r=>{this.originalFormat=r,this.formGroup.patchValue({formatContainer:{selectedFormat:r.id}}),this.updateNewFormatLayout(r.id)})}updateFormatModel(){this.selectedFormatModel.options=this.formats.map(i=>Object.assign({value:i.id,label:this.isUnknownFormat(i.id)?this.translate.instant(this.KEY_PREFIX+"selectedFormat.unknown"):i.shortDescription}))}updateNewFormatLayout(i){this.formLayout.newFormat.grid.host=this.isUnknownFormat(i)?this.newFormatBaseLayout:this.newFormatBaseLayout+" invisible"}isUnknownFormat(i){const r=this.formats.find(d=>d.id===i);return(0,O.a4)(r)&&r.supportLevel===H.c.Unknown}updateFieldTranslations(){this.inputModels.forEach(i=>{this.updateFieldTranslation(i)})}updateFieldTranslation(i){i.label=this.translate.instant(this.KEY_PREFIX+i.id+this.LABEL_KEY_SUFFIX),i.id!==this.primaryBitstreamModel.id&&(i.hint=this.translate.instant(this.KEY_PREFIX+i.id+this.HINT_KEY_SUFFIX))}onChange(i){const r=i.model;r.id===this.selectedFormatModel.id&&this.updateNewFormatLayout(r.value)}onSubmit(){const i=this.formGroup.getRawValue(),r=this.formToBitstream(i),d=this.formats.find(a=>a.id===i.formatContainer.selectedFormat),A=d.id!==this.originalFormat.id,C=this.primaryBitstreamUUID===this.bitstream.uuid;let o,D,n=!1;if(C!==i.fileNamePrimaryContainer.primaryBitstream){let a;a=C?this.primaryBitstreamService.delete(this.bundle):(0,O.a4)(this.primaryBitstreamUUID)?this.primaryBitstreamService.put(this.bitstream,this.bundle):this.primaryBitstreamService.create(this.bitstream,this.bundle);const l=a.pipe((0,y.qD)());this.subs.push(l.pipe((0,g.p)(c=>c.hasFailed)).subscribe(c=>{this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX+"error.primaryBitstream.title"),c.errorMessage),n=!0})),D=l.pipe((0,m.T)(c=>c.hasSucceeded?c.payload:this.bundle)),this.subs.push(D.pipe((0,O.Az)(),(0,v.n)(c=>this.bitstreamService.findByHref(c._links.primaryBitstream.href,!1)),(0,y.ak)()).subscribe(c=>{this.primaryBitstreamUUID=(0,O.a4)(c)?c.uuid:null}))}else D=(0,p.of)(this.bundle);o=A?this.bitstreamService.updateFormat(this.bitstream,d).pipe((0,y.qD)(),(0,m.T)(a=>{if(!(0,O.a4)(a)||!a.hasFailed)return a.payload;this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX+"error.format.title"),a.errorMessage)})):(0,p.of)(this.bitstream),(0,b.z)([D,o]).pipe((0,M.M)(([a])=>this.bundle=a),(0,v.n)(()=>this.bitstreamService.update(r).pipe((0,y.ak)()))).subscribe(()=>{this.bitstreamService.commitUpdates(),this.notificationsService.success(this.translate.instant(this.NOTIFICATIONS_PREFIX+"saved.title"),this.translate.instant(this.NOTIFICATIONS_PREFIX+"saved.content")),n||this.navigateToItemEditBitstreams()})}formToBitstream(i){const r=E()(this.bitstream),d=r.metadata;return W.O.setFirstValue(d,"dc.title",i.fileNamePrimaryContainer.fileName),(0,O.Im)(i.descriptionContainer.description)?delete d["dc.description"]:W.O.setFirstValue(d,"dc.description",i.descriptionContainer.description),this.isIIIF&&((0,O.Im)(i.iiifLabelContainer.iiifLabel)?delete d[this.IIIF_LABEL_METADATA]:W.O.setFirstValue(d,this.IIIF_LABEL_METADATA,i.iiifLabelContainer.iiifLabel),(0,O.Im)(i.iiifTocContainer.iiifToc)?delete d[this.IIIF_TOC_METADATA]:W.O.setFirstValue(d,this.IIIF_TOC_METADATA,i.iiifTocContainer.iiifToc),(0,O.Im)(i.iiifWidthContainer.iiifWidth)?delete d[this.IMAGE_WIDTH_METADATA]:W.O.setFirstValue(d,this.IMAGE_WIDTH_METADATA,i.iiifWidthContainer.iiifWidth),(0,O.Im)(i.iiifHeightContainer.iiifHeight)?delete d[this.IMAGE_HEIGHT_METADATA]:W.O.setFirstValue(d,this.IMAGE_HEIGHT_METADATA,i.iiifHeightContainer.iiifHeight)),(0,O.hj)(i.formatContainer.newFormat)&&W.O.setFirstValue(d,"dc.format",i.formatContainer.newFormat),r.metadata=d,r}onCancel(){this.navigateToItemEditBitstreams()}navigateToItemEditBitstreams(){this.router.navigate([(0,et.DL)(this.entityType,this.itemId),"bitstreams"])}setIiifStatus(i){const r=/OTHERCONTENT|THUMBNAIL|LICENSE/,d=/true|yes/i,A=this.bitstream.format.pipe((0,y.yd)(),(0,m.T)(D=>D.payload.mimetype.includes("image/"))),R=this.bitstream.bundle.pipe((0,y.yd)(),(0,m.T)(D=>null==this.dsoNameService.getName(D.payload).match(r))),C=this.bitstream.bundle.pipe((0,y.yd)(),(0,m.T)(D=>D.payload.item.pipe((0,y.yd)(),(0,m.T)(n=>n.payload.firstMetadataValue("dspace.iiif.enabled")&&null!==n.payload.firstMetadataValue("dspace.iiif.enabled").match(d))))),o=(0,b.z)(A,R,C).subscribe(([D,n,a])=>{D&&n&&a&&(this.isIIIF=!0,this.inputModels.push(this.iiifLabelModel),this.formModel.push(this.iiifLabelContainer),this.inputModels.push(this.iiifTocModel),this.formModel.push(this.iiifTocContainer),this.inputModels.push(this.iiifWidthModel),this.formModel.push(this.iiifWidthContainer),this.inputModels.push(this.iiifHeightModel),this.formModel.push(this.iiifHeightContainer)),this.setForm(),this.changeDetectorRef.detectChanges()});this.subs.push(o)}ngOnDestroy(){this.subs.filter(i=>(0,O.a4)(i)).forEach(i=>i.unsubscribe())}static#t=this.\u0275fac=function(r){return new(r||u)(e.rXU(s.nX),e.rXU(s.Ix),e.rXU(e.gRc),e.rXU(h.J9r),e.rXU(f.c$),e.rXU(k.BitstreamDataService),e.rXU(I.f),e.rXU(V.I),e.rXU(L.BitstreamFormatDataService),e.rXU(K))};static#e=this.\u0275cmp=e.VBU({type:u,selectors:[["ds-base-edit-bitstream-page"]],standalone:!0,features:[e.aNF],decls:2,vars:3,consts:[[4,"ngVar"],["class","container",4,"ngVar"],[1,"container"],["class","row",4,"ngIf"],[3,"message",4,"ngIf"],[1,"row"],[1,"col-md-2"],[3,"thumbnail"],[1,"col-md-10"],[1,"col-12"],[1,"h2"],[1,"text-muted"],[3,"formId","formGroup","formModel","formLayout","submitLabel","submitForm","cancel","dfChange",4,"ngIf"],[3,"submitForm","cancel","dfChange","formId","formGroup","formModel","formLayout","submitLabel"],["additional","",1,"container","py-3"],[3,"routerLink"],[3,"message"]],template:function(r,d){1&r&&(e.DNE(0,ht,3,3,"ng-container",0),e.nI1(1,"async")),2&r&&e.Y8G("ngVar",e.bMT(1,1,d.bitstreamRD$))},dependencies:[at.s,T.bT,nt.r,ot.T,T.Jj,s.Wk,it.A,rt.v,f.h,f.D9,Z.s],changeDetection:0})}return u})()},72553:(U,B,t)=>{"use strict";t.d(B,{Q:()=>T});class T{constructor(h,f){this.text=h,this.url=f}}},82695:(U,B,t)=>{"use strict";t.d(B,{G:()=>F,o:()=>E});var T=t(47947),s=t(31829),h=t(72683),f=t(12007);const F=(b,p,m,v,...g)=>E(b,p,b.params.id,m,v,...g),E=(b,p,m,v,g,...M)=>g.findById(m,!0,!1,...M).pipe((0,f.qD)(),(0,f.Bo)(),(0,T.T)(I=>{if((0,h.a4)(I))return{provider:v,key:I,url:(0,s.wN)(I)}}))},73579:(U,B,t)=>{"use strict";t.d(B,{U:()=>M});var T=t(63016),s=t(25814),h=t(22867),f=t(47947),F=t(31829),E=t(72553),b=t(72683),p=t(24106),m=t(66559),v=t(83116),g=t(53107);let M=(()=>{class I{constructor(L,N){this.linkService=L,this.dsoNameService=N}getBreadcrumbs(L,N){const V=this.dsoNameService.getName(L),j=new E.Q(V,N),G=L.getParentLinkKey();return this.linkService.resolveLink(L,(0,p.s)(G))[G].pipe((0,s.I)(P=>P.hasSucceeded||204===P.statusCode),(0,h.n)(P=>{if((0,b.a4)(P)&&(0,b.a4)(P.payload)){const y=P.payload;return this.getBreadcrumbs(y,(0,F.wN)(y))}return(0,T.of)([])}),(0,f.T)(P=>[...P,j]))}static#t=this.\u0275fac=function(N){return new(N||I)(g.KVO(m._),g.KVO(v.f))};static#e=this.\u0275prov=g.jDH({token:I,factory:I.\u0275fac,providedIn:"root"})}return I})()},32588:(U,B,t)=>{"use strict";t.d(B,{S:()=>p});var T=t(53107),s=t(72683),h=t(67044),f=t(63016),F=t(72553);let b=(()=>{class m{getBreadcrumbs(g,M){return(0,f.of)([new F.Q(g+".breadcrumbs",M)])}static#t=this.\u0275fac=function(M){return new(M||m)};static#e=this.\u0275prov=T.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const p=(m,v,g=(0,T.WQX)(b))=>{const M=m.data.breadcrumbKey;if((0,s.Tn)(M))throw new Error('You provided an i18nBreadcrumbResolver for url "'+m.url+"\" but no breadcrumbKey in the route's data");return{provider:g,key:M,url:(0,h.F)(m)}}},1762:(U,B,t)=>{"use strict";t.d(B,{L:()=>h});var T=t(47947),s=t(3550);const h=(f,F)=>(0,s.FO)(f,(E,b)=>F(E,b).pipe((0,T.T)(p=>[p])))},3550:(U,B,t)=>{"use strict";t.d(B,{FO:()=>b});var T=t(47947),s=t(72683),h=t(12007),f=t(90087);const E=p=>(m,v)=>{const g=(p=>{let m=p;for(;(0,s.Tn)(m.params.id)&&(0,s.a4)(m.parent);)m=m.parent;return m})(m);return p(g,v).pipe((0,h.Hz)(),(0,T.T)(M=>M.self))},b=(p,m,v=E,g)=>(0,f.h)((M,I)=>m(M,I),v(p()),g)},6918:(U,B,t)=>{"use strict";t.d(B,{z:()=>b});var T=t(63016),s=t(17178),h=t(47947),f=t(18062),F=t(92600),E=t(53107);let b=(()=>{class p{constructor(v,g){this.appConfig=v,this.restService=g}getLinks(v){return this.restService.get(`${this.appConfig.rest.baseUrl}/signposting/links/${v}`).pipe((0,s.W)(M=>(0,T.of)([])),(0,h.T)(M=>200===M.statusCode?M.payload:[]))}static#t=this.\u0275fac=function(g){return new(g||p)(E.KVO(f.vQ),E.KVO(F.Y))};static#e=this.\u0275prov=E.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},13170:(U,B,t)=>{var T={"./custom/app/bitstream-page/edit-bitstream-page/edit-bitstream-page.component":[61715,1715]};function s(h){if(!t.o(T,h))return Promise.resolve().then(()=>{var E=new Error("Cannot find module '"+h+"'");throw E.code="MODULE_NOT_FOUND",E});var f=T[h],F=f[0];return t.e(f[1]).then(()=>t(F))}s.keys=()=>Object.keys(T),s.id=13170,U.exports=s}}]);