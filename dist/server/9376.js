"use strict";exports.id=9376,exports.ids=[9376],exports.modules={96622:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});class Breadcrumb{constructor(text,url){this.text=text,this.url=url}}},59376:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ROUTES:()=>ROUTES});var authenticated_guard=__webpack_require__(98234),core=__webpack_require__(68014),cjs=__webpack_require__(74785),operators=__webpack_require__(10743),breadcrumb_model=__webpack_require__(96622),authorization_data_service=__webpack_require__(30289),feature_id=__webpack_require__(29321),item_data_service=__webpack_require__(94743),shared_operators=__webpack_require__(82656),dso_name_service=__webpack_require__(91735),ngx_translate_core=__webpack_require__(43750);let PublicationClaimBreadcrumbService=(()=>{class PublicationClaimBreadcrumbService2{constructor(dataService,dsoNameService,tranlsateService,authorizationService){this.dataService=dataService,this.dsoNameService=dsoNameService,this.tranlsateService=tranlsateService,this.authorizationService=authorizationService,this.ADMIN_PUBLICATION_CLAIMS_PATH="admin/notifications/publication-claim",this.ADMIN_PUBLICATION_CLAIMS_BREADCRUMB_KEY="admin.notifications.publicationclaim.page.title"}getBreadcrumbs(key){return(0,cjs.combineLatest)([this.dataService.findById(key).pipe((0,shared_operators.qD)()),this.authorizationService.isAuthorized(feature_id._.AdministratorOf)]).pipe((0,operators.Tj)(([item,isAdmin])=>{const itemName=this.dsoNameService.getName(item.payload);return isAdmin?[new breadcrumb_model.Q(this.tranlsateService.instant(this.ADMIN_PUBLICATION_CLAIMS_BREADCRUMB_KEY),this.ADMIN_PUBLICATION_CLAIMS_PATH),new breadcrumb_model.Q(this.tranlsateService.instant("suggestion.suggestionFor.breadcrumb",{name:itemName}),void 0)]:[new breadcrumb_model.Q(this.tranlsateService.instant("suggestion.suggestionFor.breadcrumb",{name:itemName}),void 0)]}))}static#_=this.\u0275fac=function(t){return new(t||PublicationClaimBreadcrumbService2)(core.KVO(item_data_service.ItemDataService),core.KVO(dso_name_service.f),core.KVO(ngx_translate_core.c$),core.KVO(authorization_data_service.AuthorizationDataService))};static#_2=this.\u0275prov=core.jDH({token:PublicationClaimBreadcrumbService2,factory:PublicationClaimBreadcrumbService2.\u0275fac,providedIn:"root"})}return PublicationClaimBreadcrumbService2})();var common=__webpack_require__(84739),router=__webpack_require__(64247),auth_service=__webpack_require__(41543),sort_options_model=__webpack_require__(80685),find_list_options_model=__webpack_require__(97570),pagination_service=__webpack_require__(39304),authorized_operators=__webpack_require__(78911),workspaceitem_data_service=__webpack_require__(2402),ng_bootstrap=__webpack_require__(71781),tslib_es6=__webpack_require__(31635),cerialize=__webpack_require__(95488),build_decorators=__webpack_require__(89934),metadata_models=__webpack_require__(97414),resource_type=__webpack_require__(94554),equals_decorators=__webpack_require__(39891),suggestion_objects_resource_type=__webpack_require__(47493);let Suggestion=class{static#_=this.type=suggestion_objects_resource_type.P};(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",String)],Suggestion.prototype,"id",void 0),(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",String)],Suggestion.prototype,"display",void 0),(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",String)],Suggestion.prototype,"source",void 0),(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",String)],Suggestion.prototype,"externalSourceUri",void 0),(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",String)],Suggestion.prototype,"score",void 0),(0,tslib_es6.Cg)([cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",Object)],Suggestion.prototype,"evidences",void 0),(0,tslib_es6.Cg)([equals_decorators.aK,(0,cerialize.autoserializeAs)(metadata_models.Of),(0,tslib_es6.Sn)("design:type",metadata_models.Cr)],Suggestion.prototype,"metadata",void 0),(0,tslib_es6.Cg)([equals_decorators.aK,cerialize.autoserialize,(0,tslib_es6.Sn)("design:type",resource_type.v)],Suggestion.prototype,"type",void 0),(0,tslib_es6.Cg)([cerialize.deserialize,(0,tslib_es6.Sn)("design:type",Object)],Suggestion.prototype,"_links",void 0),Suggestion=(0,tslib_es6.Cg)([build_decorators.gV],Suggestion);var themed_create_item_parent_selector_component=__webpack_require__(77796),entity_dropdown_component=__webpack_require__(29267);function SuggestionActionsComponent_button_2_Template(rf,ctx){if(1&rf){const _r2=core.RV6();core.j41(0,"button",7),core.bIt("click",function(){core.eBV(_r2);const ctx_r2=core.XpG();return core.Njj(ctx_r2.approveAndImportCollectionFixed())}),core.nrm(1,"i",8),core.EFF(2),core.nI1(3,"translate"),core.k0s()}if(2&rf){const ctx_r2=core.XpG();core.R7$(2),core.SpI(" ",core.bMT(3,1,ctx_r2.approveAndImportLabel())," ")}}function SuggestionActionsComponent_ng_template_3_Template(rf,ctx){if(1&rf){const _r4=core.RV6();core.j41(0,"button",9),core.nrm(1,"i",8),core.EFF(2),core.nI1(3,"translate"),core.nrm(4,"span",10),core.k0s(),core.j41(5,"div",11)(6,"ds-entity-dropdown",12),core.bIt("selectionChange",function($event){core.eBV(_r4);const ctx_r2=core.XpG();return core.Njj(ctx_r2.openDialog($event))}),core.k0s()()}if(2&rf){const ctx_r2=core.XpG();core.R7$(2),core.SpI(" ",core.bMT(3,1,ctx_r2.approveAndImportLabel())," ")}}function SuggestionActionsComponent_button_9_ng_container_2_Template(rf,ctx){1&rf&&(core.qex(0),core.EFF(1),core.nI1(2,"translate"),core.bVm()),2&rf&&(core.R7$(),core.SpI(" ",core.bMT(2,1,"suggestion.seeEvidence"),""))}function SuggestionActionsComponent_button_9_ng_container_3_Template(rf,ctx){1&rf&&(core.qex(0),core.EFF(1),core.nI1(2,"translate"),core.bVm()),2&rf&&(core.R7$(),core.SpI(" ",core.bMT(2,1,"suggestion.hideEvidence"),""))}function SuggestionActionsComponent_button_9_Template(rf,ctx){if(1&rf){const _r5=core.RV6();core.j41(0,"button",13),core.bIt("click",function(){core.eBV(_r5);const ctx_r2=core.XpG();return core.Njj(ctx_r2.toggleSeeEvidences())}),core.nrm(1,"i",14),core.DNE(2,SuggestionActionsComponent_button_9_ng_container_2_Template,3,3,"ng-container",15)(3,SuggestionActionsComponent_button_9_ng_container_3_Template,3,3,"ng-container",15),core.k0s()}if(2&rf){const ctx_r2=core.XpG();core.Y8G("disabled",!ctx_r2.hasEvidence),core.R7$(2),core.Y8G("ngIf",!ctx_r2.seeEvidence),core.R7$(),core.Y8G("ngIf",ctx_r2.seeEvidence)}}let SuggestionActionsComponent=(()=>{class SuggestionActionsComponent2{constructor(modalService){this.modalService=modalService,this.isBulk=!1,this.hasEvidence=!1,this.seeEvidence=!1,this.isCollectionFixed=!1,this.ignoreSuggestionClicked=new core.bkB,this.approveAndImport=new core.bkB,this.seeEvidences=new core.bkB}openDialog(entity){const modalRef=this.modalService.open(themed_create_item_parent_selector_component.L);modalRef.componentInstance.emitOnly=!0,modalRef.componentInstance.entityType=entity.label,modalRef.componentInstance.select.pipe((0,operators.s)(1)).subscribe(collection=>{this.approveAndImport.emit({suggestion:this.isBulk?void 0:this.object,collectionId:collection.id})})}approveAndImportCollectionFixed(){this.approveAndImport.emit({suggestion:this.isBulk?void 0:this.object,collectionId:null})}ignoreSuggestion(){this.ignoreSuggestionClicked.emit(this.isBulk?void 0:this.object.id)}toggleSeeEvidences(){this.seeEvidences.emit(!this.seeEvidence)}ignoreSuggestionLabel(){return this.isBulk?"suggestion.ignoreSuggestion.bulk":"suggestion.ignoreSuggestion"}approveAndImportLabel(){return this.isBulk?"suggestion.approveAndImport.bulk":"suggestion.approveAndImport"}static#_=this.\u0275fac=function(t){return new(t||SuggestionActionsComponent2)(core.rXU(ng_bootstrap.Bq))};static#_2=this.\u0275cmp=core.VBU({type:SuggestionActionsComponent2,selectors:[["ds-suggestion-actions"]],inputs:{object:"object",isBulk:"isBulk",hasEvidence:"hasEvidence",seeEvidence:"seeEvidence",isCollectionFixed:"isCollectionFixed"},outputs:{ignoreSuggestionClicked:"ignoreSuggestionClicked",approveAndImport:"approveAndImport",seeEvidences:"seeEvidences"},standalone:!0,features:[core.aNF],decls:10,vars:6,consts:[["chooseCollection",""],[1,"d-inline"],["ngbDropdown","",1,"d-inline"],["class","btn btn-success","type","button",3,"click",4,"ngIf","ngIfElse"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"fa","fa-ban"],["class","btn btn-info ml-2",3,"disabled","click",4,"ngIf"],["type","button",1,"btn","btn-success",3,"click"],["aria-hidden","true",1,"fa","fa-check"],["id","dropdownSubmission","ngbDropdownToggle","","type","button",1,"btn","btn-success"],[1,"caret"],["ngbDropdownMenu","","id","entityControlsDropdownMenu","aria-labelledby","dropdownSubmission",1,"dropdown-menu"],[3,"selectionChange"],[1,"btn","btn-info","ml-2",3,"click","disabled"],[1,"fa","fa-eye"],[4,"ngIf"]],template:function(rf,ctx){if(1&rf){const _r1=core.RV6();core.j41(0,"div",1)(1,"div",2),core.DNE(2,SuggestionActionsComponent_button_2_Template,4,3,"button",3)(3,SuggestionActionsComponent_ng_template_3_Template,7,3,"ng-template",null,0,core.C5r),core.k0s(),core.j41(5,"button",4),core.bIt("click",function(){return core.eBV(_r1),core.Njj(ctx.ignoreSuggestion())}),core.nrm(6,"i",5),core.EFF(7),core.nI1(8,"translate"),core.k0s(),core.DNE(9,SuggestionActionsComponent_button_9_Template,4,3,"button",6),core.k0s()}if(2&rf){const chooseCollection_r6=core.sdS(4);core.R7$(2),core.Y8G("ngIf",ctx.isCollectionFixed)("ngIfElse",chooseCollection_r6),core.R7$(5),core.SpI(" ",core.bMT(8,4,ctx.ignoreSuggestionLabel()),""),core.R7$(2),core.Y8G("ngIf",!ctx.isBulk)}},dependencies:[entity_dropdown_component.Y,ngx_translate_core.h,ngx_translate_core.D9,common.bT,ng_bootstrap.zH,ng_bootstrap.tg,ng_bootstrap.do,ng_bootstrap.U0]})}return SuggestionActionsComponent2})();var context_model=__webpack_require__(34069),view_mode_model=__webpack_require__(97849),themed_badges_component=__webpack_require__(70922),item_search_result_model=__webpack_require__(23597),listable_object_decorator=__webpack_require__(98228),item_search_result_list_element_component=__webpack_require__(29365),truncatable_component=__webpack_require__(95435),truncatable_part_component=__webpack_require__(2455),themed_thumbnail_component=__webpack_require__(80661);const _c0=a0=>[a0],_c1=()=>["dc.contributor.author","dc.creator","dc.contributor.*"];function ItemSearchResultListElementComponent_div_1_a_1_Template(rf,ctx){if(1&rf&&(core.j41(0,"a",9),core.nrm(1,"ds-thumbnail",10),core.nI1(2,"async"),core.k0s()),2&rf){const ctx_r0=core.XpG(2);core.Y8G("target",ctx_r0.linkType===ctx_r0.linkTypes.ExternalLink?"_blank":"_self")("routerLink",core.eq3(7,_c0,ctx_r0.itemPageRoute)),core.BMQ("rel",ctx_r0.linkType===ctx_r0.linkTypes.ExternalLink?"noopener noreferrer":null),core.R7$(),core.Y8G("thumbnail",core.bMT(2,5,null==ctx_r0.dso?null:ctx_r0.dso.thumbnail))("limitWidth",!0)}}function ItemSearchResultListElementComponent_div_1_span_2_Template(rf,ctx){if(1&rf&&(core.j41(0,"span",11),core.nrm(1,"ds-thumbnail",10),core.nI1(2,"async"),core.k0s()),2&rf){const ctx_r0=core.XpG(2);core.R7$(),core.Y8G("thumbnail",core.bMT(2,2,null==ctx_r0.dso?null:ctx_r0.dso.thumbnail))("limitWidth",!0)}}function ItemSearchResultListElementComponent_div_1_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",6),core.DNE(1,ItemSearchResultListElementComponent_div_1_a_1_Template,3,9,"a",7)(2,ItemSearchResultListElementComponent_div_1_span_2_Template,3,4,"span",8),core.k0s()),2&rf){const ctx_r0=core.XpG();core.R7$(),core.Y8G("ngIf",ctx_r0.linkType!==ctx_r0.linkTypes.None),core.R7$(),core.Y8G("ngIf",ctx_r0.linkType===ctx_r0.linkTypes.None)}}function ItemSearchResultListElementComponent_ds_badges_4_Template(rf,ctx){if(1&rf&&core.nrm(0,"ds-badges",12),2&rf){const ctx_r0=core.XpG();core.Y8G("object",ctx_r0.dso)("context",ctx_r0.context)("showAccessStatus",!0)}}function ItemSearchResultListElementComponent_ds_truncatable_5_a_1_Template(rf,ctx){if(1&rf&&core.nrm(0,"a",21),2&rf){const ctx_r0=core.XpG(2);core.Y8G("target",ctx_r0.linkType===ctx_r0.linkTypes.ExternalLink?"_blank":"_self")("routerLink",core.eq3(4,_c0,ctx_r0.itemPageRoute))("innerHTML",ctx_r0.dsoTitle,core.npT),core.BMQ("rel",ctx_r0.linkType===ctx_r0.linkTypes.ExternalLink?"noopener noreferrer":null)}}function ItemSearchResultListElementComponent_ds_truncatable_5_span_2_Template(rf,ctx){if(1&rf&&core.nrm(0,"span",22),2&rf){const ctx_r0=core.XpG(2);core.Y8G("innerHTML",ctx_r0.dsoTitle,core.npT)}}function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_2_Template(rf,ctx){if(1&rf&&core.nrm(0,"span",25),2&rf){const ctx_r0=core.XpG(3);core.Y8G("innerHTML",ctx_r0.firstMetadataValue("dc.publisher"),core.npT)}}function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_3_Template(rf,ctx){1&rf&&(core.j41(0,"span"),core.EFF(1,", "),core.k0s())}function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_4_Template(rf,ctx){if(1&rf&&core.nrm(0,"span",26),2&rf){const ctx_r0=core.XpG(3);core.Y8G("innerHTML",ctx_r0.firstMetadataValue("dc.date.issued"),core.npT)}}function ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_Template(rf,ctx){if(1&rf&&(core.qex(0),core.EFF(1," ("),core.DNE(2,ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_2_Template,1,1,"span",23)(3,ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_3_Template,2,0,"span",18)(4,ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_span_4_Template,1,1,"span",24),core.EFF(5,") "),core.bVm()),2&rf){const ctx_r0=core.XpG(2);core.R7$(2),core.Y8G("ngIf",ctx_r0.dso.firstMetadataValue("dc.publisher")),core.R7$(),core.Y8G("ngIf",ctx_r0.dso.firstMetadataValue("dc.publisher")&&ctx_r0.dso.firstMetadataValue("dc.date.issued")),core.R7$(),core.Y8G("ngIf",ctx_r0.dso.firstMetadataValue("dc.date.issued"))}}function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_span_3_Template(rf,ctx){1&rf&&(core.j41(0,"span"),core.EFF(1,"; "),core.k0s())}function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_Template(rf,ctx){if(1&rf&&(core.j41(0,"span")(1,"span",29),core.nrm(2,"span",29),core.k0s(),core.DNE(3,ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_span_3_Template,2,0,"span",18),core.k0s()),2&rf){const author_r2=ctx.$implicit,last_r3=ctx.last;core.R7$(),core.Y8G("innerHTML",author_r2,core.npT),core.R7$(),core.Y8G("innerHTML",author_r2,core.npT),core.R7$(),core.Y8G("ngIf",!last_r3)}}function ItemSearchResultListElementComponent_ds_truncatable_5_span_6_Template(rf,ctx){if(1&rf&&(core.j41(0,"span",27),core.DNE(1,ItemSearchResultListElementComponent_ds_truncatable_5_span_6_span_1_Template,4,3,"span",28),core.k0s()),2&rf){const ctx_r0=core.XpG(2);core.R7$(),core.Y8G("ngForOf",ctx_r0.allMetadataValues(core.lJ4(1,_c1)))}}function ItemSearchResultListElementComponent_ds_truncatable_5_div_7_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",30)(1,"ds-truncatable-part",17),core.nrm(2,"span",29),core.k0s()()),2&rf){const ctx_r0=core.XpG(2);core.R7$(),core.Y8G("id",ctx_r0.dso.id)("minLines",3),core.R7$(),core.Y8G("innerHTML",ctx_r0.firstMetadataValue("dc.description.abstract"),core.npT)}}function ItemSearchResultListElementComponent_ds_truncatable_5_Template(rf,ctx){if(1&rf&&(core.j41(0,"ds-truncatable",13),core.DNE(1,ItemSearchResultListElementComponent_ds_truncatable_5_a_1_Template,1,6,"a",14)(2,ItemSearchResultListElementComponent_ds_truncatable_5_span_2_Template,1,1,"span",15),core.j41(3,"span",16)(4,"ds-truncatable-part",17),core.DNE(5,ItemSearchResultListElementComponent_ds_truncatable_5_ng_container_5_Template,6,3,"ng-container",18)(6,ItemSearchResultListElementComponent_ds_truncatable_5_span_6_Template,2,2,"span",19),core.k0s()(),core.DNE(7,ItemSearchResultListElementComponent_ds_truncatable_5_div_7_Template,3,3,"div",20),core.k0s()),2&rf){const ctx_r0=core.XpG();core.Y8G("id",ctx_r0.dso.id),core.R7$(),core.Y8G("ngIf",ctx_r0.linkType!==ctx_r0.linkTypes.None),core.R7$(),core.Y8G("ngIf",ctx_r0.linkType===ctx_r0.linkTypes.None),core.R7$(2),core.Y8G("id",ctx_r0.dso.id)("minLines",1),core.R7$(),core.Y8G("ngIf",ctx_r0.dso.firstMetadataValue("dc.publisher")||ctx_r0.dso.firstMetadataValue("dc.date.issued")),core.R7$(),core.Y8G("ngIf",ctx_r0.dso.allMetadata(core.lJ4(8,_c1)).length>0),core.R7$(),core.Y8G("ngIf",ctx_r0.dso.firstMetadataValue("dc.description.abstract"))}}let ItemSearchResultListElementComponent=class ItemSearchResultListElementComponent2 extends item_search_result_list_element_component.k{static#_=this.\u0275fac=(()=>{let \u0275ItemSearchResultListElementComponent_BaseFactory;return function(t){return(\u0275ItemSearchResultListElementComponent_BaseFactory||(\u0275ItemSearchResultListElementComponent_BaseFactory=core.xGo(ItemSearchResultListElementComponent2)))(t||ItemSearchResultListElementComponent2)}})();static#_2=this.\u0275cmp=core.VBU({type:ItemSearchResultListElementComponent2,selectors:[["ds-item-search-result-list-element"]],standalone:!0,features:[core.Vt3,core.aNF],decls:6,vars:4,consts:[[1,"row"],["class","col-3 col-md-2",4,"ngIf"],[3,"ngClass"],[1,"d-flex"],[3,"object","context","showAccessStatus",4,"ngIf"],[3,"id",4,"ngIf"],[1,"col-3","col-md-2"],["class","dont-break-out",3,"target","routerLink",4,"ngIf"],["class","dont-break-out",4,"ngIf"],[1,"dont-break-out",3,"target","routerLink"],[3,"thumbnail","limitWidth"],[1,"dont-break-out"],[3,"object","context","showAccessStatus"],[3,"id"],["class","lead item-list-title dont-break-out",3,"target","routerLink","innerHTML",4,"ngIf"],["class","lead item-list-title dont-break-out",3,"innerHTML",4,"ngIf"],[1,"text-muted"],[3,"id","minLines"],[4,"ngIf"],["class","item-list-authors",4,"ngIf"],["class","item-list-abstract",4,"ngIf"],[1,"lead","item-list-title","dont-break-out",3,"target","routerLink","innerHTML"],[1,"lead","item-list-title","dont-break-out",3,"innerHTML"],["class","item-list-publisher",3,"innerHTML",4,"ngIf"],["class","item-list-date",3,"innerHTML",4,"ngIf"],[1,"item-list-publisher",3,"innerHTML"],[1,"item-list-date",3,"innerHTML"],[1,"item-list-authors"],[4,"ngFor","ngForOf"],[3,"innerHTML"],[1,"item-list-abstract"]],template:function(rf,ctx){1&rf&&(core.j41(0,"div",0),core.DNE(1,ItemSearchResultListElementComponent_div_1_Template,3,2,"div",1),core.j41(2,"div",2)(3,"div",3),core.DNE(4,ItemSearchResultListElementComponent_ds_badges_4_Template,1,3,"ds-badges",4),core.k0s(),core.DNE(5,ItemSearchResultListElementComponent_ds_truncatable_5_Template,8,9,"ds-truncatable",5),core.k0s()()),2&rf&&(core.R7$(),core.Y8G("ngIf",ctx.showThumbnails),core.R7$(),core.Y8G("ngClass",ctx.showThumbnails?"col-9":"col-md-12"),core.R7$(2),core.Y8G("ngIf",ctx.showLabel),core.R7$(),core.Y8G("ngIf",null!=ctx.object))},dependencies:[common.bT,router.Wk,themed_thumbnail_component.T,common.YU,themed_badges_component.F,truncatable_component.d,truncatable_part_component.W,common.pM,common.Jj],styles:[".item-list-supervision[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}"]})};ItemSearchResultListElementComponent=(0,tslib_es6.Cg)([(0,listable_object_decorator.VK)("PublicationSearchResult",view_mode_model.n.ListElement,context_model.o.Any,"custom"),(0,listable_object_decorator.VK)(item_search_result_model.H,view_mode_model.n.ListElement,context_model.o.Any,"custom")],ItemSearchResultListElementComponent);var item_model=__webpack_require__(6721),fade=__webpack_require__(28107),empty_util=__webpack_require__(77028);let ObjectKeysPipe=(()=>{class ObjectKeysPipe2{transform(value){const keys=[];return Object.keys(value).forEach(k=>keys.push(k)),keys}static#_=this.\u0275fac=function(t){return new(t||ObjectKeysPipe2)};static#_2=this.\u0275pipe=core.EJ8({name:"dsObjectKeys",type:ObjectKeysPipe2,pure:!0,standalone:!0})}return ObjectKeysPipe2})();function SuggestionEvidencesComponent_div_1_tr_14_Template(rf,ctx){if(1&rf&&(core.j41(0,"tr")(1,"td"),core.EFF(2),core.k0s(),core.j41(3,"td"),core.EFF(4),core.nI1(5,"translate"),core.k0s(),core.j41(6,"td"),core.EFF(7),core.k0s()()),2&rf){const evidence_r1=ctx.$implicit,ctx_r1=core.XpG(2);core.R7$(2),core.JRh(ctx_r1.evidences[evidence_r1].score),core.R7$(2),core.JRh(core.bMT(5,3,evidence_r1)),core.R7$(3),core.JRh(ctx_r1.evidences[evidence_r1].notes)}}function SuggestionEvidencesComponent_div_1_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",1)(1,"table",2)(2,"thead")(3,"tr")(4,"th"),core.EFF(5),core.nI1(6,"translate"),core.k0s(),core.j41(7,"th"),core.EFF(8),core.nI1(9,"translate"),core.k0s(),core.j41(10,"th"),core.EFF(11),core.nI1(12,"translate"),core.k0s()()(),core.j41(13,"tbody"),core.DNE(14,SuggestionEvidencesComponent_div_1_tr_14_Template,8,5,"tr",3),core.nI1(15,"dsObjectKeys"),core.k0s()()()),2&rf){const ctx_r1=core.XpG();core.R7$(5),core.JRh(core.bMT(6,4,"suggestion.evidence.score")),core.R7$(3),core.JRh(core.bMT(9,6,"suggestion.evidence.type")),core.R7$(3),core.JRh(core.bMT(12,8,"suggestion.evidence.notes")),core.R7$(3),core.Y8G("ngForOf",core.bMT(15,10,ctx_r1.evidences))}}let SuggestionEvidencesComponent=(()=>{class SuggestionEvidencesComponent2{static#_=this.\u0275fac=function(t){return new(t||SuggestionEvidencesComponent2)};static#_2=this.\u0275cmp=core.VBU({type:SuggestionEvidencesComponent2,selectors:[["ds-suggestion-evidences"]],inputs:{evidences:"evidences"},standalone:!0,features:[core.aNF],decls:2,vars:1,consts:[["class","table-responsive",4,"ngIf"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(rf,ctx){1&rf&&(core.j41(0,"div"),core.DNE(1,SuggestionEvidencesComponent_div_1_Template,16,12,"div",0),core.k0s()),2&rf&&(core.R7$(),core.Y8G("ngIf",ctx.evidences))},dependencies:[ngx_translate_core.h,ngx_translate_core.D9,common.bT,common.pM,ObjectKeysPipe],data:{animation:[fade.qG]}})}return SuggestionEvidencesComponent2})();function SuggestionListElementComponent_div_16_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",11)(1,"div",12),core.nrm(2,"ds-suggestion-evidences",13),core.k0s()()),2&rf){const ctx_r0=core.XpG();core.R7$(2),core.Y8G("evidences",ctx_r0.object.evidences)}}let SuggestionListElementComponent=(()=>{class SuggestionListElementComponent2{constructor(modalService){this.modalService=modalService,this.isSelected=!1,this.isCollectionFixed=!1,this.seeEvidence=!1,this.ignoreSuggestionClicked=new core.bkB,this.approveAndImport=new core.bkB,this.selected=new core.bkB}ngOnInit(){this.listableObject={indexableObject:Object.assign(new item_model.q,{id:this.object.id,metadata:this.object.metadata}),hitHighlights:{}}}onApproveAndImport(event){this.approveAndImport.emit(event)}onIgnoreSuggestion(suggestionId){this.ignoreSuggestionClicked.emit(suggestionId)}changeSelected(event){this.isSelected=event.target.checked,this.selected.next(this.isSelected)}hasEvidences(){return(0,empty_util.hj)(this.object.evidences)}onSeeEvidences(seeEvidence){this.seeEvidence=seeEvidence}static#_=this.\u0275fac=function(t){return new(t||SuggestionListElementComponent2)(core.rXU(ng_bootstrap.Bq))};static#_2=this.\u0275cmp=core.VBU({type:SuggestionListElementComponent2,selectors:[["ds-suggestion-list-item"]],inputs:{object:"object",isSelected:"isSelected",isCollectionFixed:"isCollectionFixed"},outputs:{ignoreSuggestionClicked:"ignoreSuggestionClicked",approveAndImport:"approveAndImport",selected:"selected"},standalone:!0,features:[core.aNF],decls:18,vars:15,consts:[[1,"container"],[1,"row"],[1,"col-1","text-center","align-self-center"],[1,""],["type","checkbox",1,"form-check-input",3,"change","checked"],[1,"col-2","text-center","align-self-center"],[1,"suggestion-score"],[1,"col"],[3,"showLabel","showThumbnails","object","linkType"],[1,"parent","mt-2",3,"approveAndImport","seeEvidences","ignoreSuggestionClicked","hasEvidence","seeEvidence","object","isCollectionFixed"],["class","mt-2 row",4,"ngIf"],[1,"mt-2","row"],[1,"col","offset-3"],[3,"evidences"]],template:function(rf,ctx){1&rf&&(core.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),core.bIt("change",function($event){return ctx.changeSelected($event)}),core.k0s()()(),core.j41(5,"div",5)(6,"div",3)(7,"div")(8,"strong"),core.EFF(9),core.nI1(10,"translate"),core.k0s()(),core.j41(11,"span",6),core.EFF(12),core.k0s()()(),core.j41(13,"div",7),core.nrm(14,"ds-item-search-result-list-element",8),core.j41(15,"ds-suggestion-actions",9),core.bIt("approveAndImport",function($event){return ctx.onApproveAndImport($event)})("seeEvidences",function($event){return ctx.onSeeEvidences($event)})("ignoreSuggestionClicked",function($event){return ctx.onIgnoreSuggestion($event)}),core.k0s()()(),core.DNE(16,SuggestionListElementComponent_div_16_Template,3,1,"div",10),core.k0s(),core.nrm(17,"hr")),2&rf&&(core.R7$(4),core.Y8G("checked",ctx.isSelected),core.BMQ("aria-label",ctx.object.display),core.R7$(5),core.SpI(" ",core.bMT(10,13,"suggestion.totalScore"),""),core.R7$(3),core.JRh(ctx.object.score),core.R7$(2),core.Y8G("showLabel",!1)("showThumbnails",!1)("object",ctx.listableObject)("linkType",0),core.R7$(),core.Y8G("hasEvidence",ctx.hasEvidences())("seeEvidence",ctx.seeEvidence)("object",ctx.object)("isCollectionFixed",ctx.isCollectionFixed),core.R7$(),core.Y8G("ngIf",ctx.seeEvidence))},dependencies:[common.bT,ngx_translate_core.h,ngx_translate_core.D9,ItemSearchResultListElementComponent,SuggestionActionsComponent,SuggestionEvidencesComponent],styles:[".issue-date[_ngcontent-%COMP%]{color:#c8c8c8}.parent[_ngcontent-%COMP%]{display:flex;gap:10px}.import[_ngcontent-%COMP%]{flex:initial}.suggestion-score[_ngcontent-%COMP%]{font-size:1.5rem}"],data:{animation:[fade.qG]}})}return SuggestionListElementComponent2})();var suggestion_targets_state_service=__webpack_require__(38763),suggestions_service=__webpack_require__(82980),alert_component=__webpack_require__(14467),themed_loading_component=__webpack_require__(32943),notifications_service=__webpack_require__(10117),pagination_component=__webpack_require__(91904),pagination_component_options_model=__webpack_require__(64694),var_directive=__webpack_require__(45961),workflowitems_edit_page_routing_paths=__webpack_require__(82654);const suggestions_page_component_c0=a0=>["/entities/person/",a0],suggestions_page_component_c1=a0=>[a0];function SuggestionsPageComponent_ng_container_3_ds_loading_1_Template(rf,ctx){1&rf&&core.nrm(0,"ds-loading")}function SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template(rf,ctx){if(1&rf){const _r4=core.RV6();core.j41(0,"ds-suggestion-actions",12),core.bIt("approveAndImport",function($event){core.eBV(_r4);const ctx_r2=core.XpG(3);return core.Njj(ctx_r2.approveAndImportAllSelected($event))})("ignoreSuggestionClicked",function(){core.eBV(_r4);const ctx_r2=core.XpG(3);return core.Njj(ctx_r2.ignoreSuggestionAllSelected())}),core.k0s()}if(2&rf){const suggestionsRD_r2=core.XpG(2).ngVar,ctx_r2=core.XpG();core.Y8G("isBulk",!0)("isCollectionFixed",ctx_r2.isCollectionFixed(suggestionsRD_r2.page))}}function SuggestionsPageComponent_ng_container_3_div_3_i_15_Template(rf,ctx){1&rf&&core.nrm(0,"i",13)}function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template(rf,ctx){if(1&rf){const _r6=core.RV6();core.j41(0,"li",17)(1,"ds-suggestion-list-item",18),core.bIt("ignoreSuggestionClicked",function($event){core.eBV(_r6);const ctx_r2=core.XpG(4);return core.Njj(ctx_r2.ignoreSuggestion($event))})("selected",function($event){const object_r7=core.eBV(_r6).$implicit,ctx_r2=core.XpG(4);return core.Njj(ctx_r2.onSelected(object_r7,$event))})("approveAndImport",function($event){core.eBV(_r6);const ctx_r2=core.XpG(4);return core.Njj(ctx_r2.approveAndImport($event))}),core.k0s()()}if(2&rf){const object_r7=ctx.$implicit,ctx_r2=core.XpG(4);core.R7$(),core.Y8G("object",object_r7)("isSelected",!!ctx_r2.selectedSuggestions[object_r7.id])("isCollectionFixed",ctx_r2.isCollectionFixed(core.eq3(3,suggestions_page_component_c1,object_r7)))}}function SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_Template(rf,ctx){if(1&rf){const _r5=core.RV6();core.j41(0,"ds-pagination",14),core.bIt("paginationChange",function(){core.eBV(_r5);const ctx_r2=core.XpG(3);return core.Njj(ctx_r2.onPaginationChange())}),core.j41(1,"ul",15),core.DNE(2,SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_li_2_Template,2,5,"li",16),core.k0s()()}if(2&rf){const suggestionsRD_r2=core.XpG(2).ngVar,ctx_r2=core.XpG();core.Y8G("paginationOptions",ctx_r2.paginationOptions)("sortOptions",ctx_r2.paginationSortConfig)("collectionSize",null==suggestionsRD_r2||null==suggestionsRD_r2.pageInfo?null:suggestionsRD_r2.pageInfo.totalElements)("hideGear",!1)("hidePagerWhenSinglePage",!1)("hidePaginationDetail",!1),core.R7$(2),core.Y8G("ngForOf",null==suggestionsRD_r2?null:suggestionsRD_r2.page)}}function SuggestionsPageComponent_ng_container_3_div_3_Template(rf,ctx){if(1&rf){const _r1=core.RV6();core.j41(0,"div")(1,"h1"),core.EFF(2),core.nI1(3,"translate"),core.j41(4,"a",6),core.EFF(5),core.k0s(),core.EFF(6),core.nI1(7,"translate"),core.nI1(8,"translate"),core.k0s(),core.j41(9,"div",7)(10,"button",8),core.bIt("click",function(){core.eBV(_r1);const suggestionsRD_r2=core.XpG().ngVar,ctx_r2=core.XpG();return core.Njj(ctx_r2.onToggleSelectAll(suggestionsRD_r2.page))}),core.EFF(11,"Select / Deselect All"),core.k0s(),core.j41(12,"em"),core.EFF(13),core.k0s(),core.DNE(14,SuggestionsPageComponent_ng_container_3_div_3_ds_suggestion_actions_14_Template,1,2,"ds-suggestion-actions",9)(15,SuggestionsPageComponent_ng_container_3_div_3_i_15_Template,1,0,"i",10),core.k0s(),core.DNE(16,SuggestionsPageComponent_ng_container_3_div_3_ds_pagination_16_Template,3,7,"ds-pagination",11),core.nI1(17,"async"),core.k0s()}if(2&rf){const ctx_r2=core.XpG(2);core.R7$(2),core.SpI(" ",core.bMT(3,9,"suggestion.suggestionFor")," "),core.R7$(2),core.Y8G("routerLink",core.eq3(17,suggestions_page_component_c0,ctx_r2.researcherUuid)),core.R7$(),core.JRh(ctx_r2.researcherName),core.R7$(),core.Lme(" ",core.bMT(7,11,"suggestion.from.source")," ",core.bMT(8,13,ctx_r2.translateSuggestionSource())," "),core.R7$(7),core.SpI("(",ctx_r2.getSelectedSuggestionsCount(),")"),core.R7$(),core.Y8G("ngIf",ctx_r2.getSelectedSuggestionsCount()>0),core.R7$(),core.Y8G("ngIf",ctx_r2.isBulkOperationPending),core.R7$(),core.Y8G("ngIf",!0!==core.bMT(17,15,ctx_r2.processing$))}}function SuggestionsPageComponent_ng_container_3_ds_alert_5_Template(rf,ctx){1&rf&&(core.j41(0,"ds-alert",19),core.EFF(1),core.nI1(2,"translate"),core.k0s()),2&rf&&(core.Y8G("type","alert-info"),core.R7$(),core.SpI(" ",core.bMT(2,2,"suggestion.count.missing")," "))}function SuggestionsPageComponent_ng_container_3_Template(rf,ctx){if(1&rf&&(core.qex(0),core.DNE(1,SuggestionsPageComponent_ng_container_3_ds_loading_1_Template,1,0,"ds-loading",4),core.nI1(2,"async"),core.DNE(3,SuggestionsPageComponent_ng_container_3_div_3_Template,18,19,"div",4),core.nI1(4,"async"),core.DNE(5,SuggestionsPageComponent_ng_container_3_ds_alert_5_Template,3,4,"ds-alert",5),core.nI1(6,"async"),core.bVm()),2&rf){const suggestionsRD_r2=ctx.ngVar,ctx_r2=core.XpG();core.R7$(),core.Y8G("ngIf",core.bMT(2,3,ctx_r2.processing$)),core.R7$(2),core.Y8G("ngIf",!0!==core.bMT(4,5,ctx_r2.processing$)&&(null==suggestionsRD_r2||null==suggestionsRD_r2.pageInfo?null:suggestionsRD_r2.pageInfo.totalElements)>0),core.R7$(2),core.Y8G("ngIf",!0!==core.bMT(6,7,ctx_r2.processing$)&&(0===(null==suggestionsRD_r2||null==suggestionsRD_r2.pageInfo?null:suggestionsRD_r2.pageInfo.totalElements)||!suggestionsRD_r2))}}let SuggestionsPageComponent=(()=>{class SuggestionsPageComponent2{constructor(authService,notificationService,paginationService,route,router2,suggestionService,suggestionTargetsStateService,translateService,workspaceItemService){this.authService=authService,this.notificationService=notificationService,this.paginationService=paginationService,this.route=route,this.router=router2,this.suggestionService=suggestionService,this.suggestionTargetsStateService=suggestionTargetsStateService,this.translateService=translateService,this.workspaceItemService=workspaceItemService,this.paginationOptions=Object.assign(new pagination_component_options_model.W,{id:"sp",pageSizeOptions:[5,10,20,40,60]}),this.paginationSortConfig=new sort_options_model.z("trust",sort_options_model.U.DESC),this.defaultConfig=Object.assign(new find_list_options_model._,{sort:this.paginationSortConfig}),this.processing$=new cjs.BehaviorSubject(!1),this.suggestionsRD$=new cjs.BehaviorSubject({}),this.selectedSuggestions={},this.isBulkOperationPending=!1}ngOnInit(){this.targetRD$=this.route.data.pipe((0,operators.Tj)(data=>data.suggestionTargets),(0,authorized_operators.QD)(this.router,this.authService)),this.targetId$=this.targetRD$.pipe((0,shared_operators.ak)(),(0,operators.Tj)(target=>target.id)),this.targetRD$.pipe((0,shared_operators.ak)(),(0,operators.Mi)(suggestionTarget=>{this.suggestionTarget=suggestionTarget,this.suggestionId=suggestionTarget.id,this.researcherName=suggestionTarget.display,this.suggestionSource=suggestionTarget.source,this.researcherUuid=this.suggestionService.getTargetUuid(suggestionTarget)}),(0,operators.nx)(()=>this.updatePage())).subscribe(),this.suggestionTargetsStateService.dispatchMarkUserSuggestionsAsVisitedAction()}onPaginationChange(){this.updatePage().subscribe()}updatePage(){this.processing$.next(!0);const pageConfig$=this.paginationService.getFindListOptions(this.paginationOptions.id,this.defaultConfig).pipe((0,operators.F)());return(0,cjs.combineLatest)([this.targetId$,pageConfig$]).pipe((0,operators.nx)(([targetId,config])=>this.suggestionService.getSuggestions(targetId,config.elementsPerPage,config.currentPage,config.sort)),(0,shared_operators.qD)(),(0,operators.Mi)(resultsRD=>{this.processing$.next(!1),this.suggestionsRD$.next(resultsRD.hasSucceeded?resultsRD.payload:null),this.suggestionService.clearSuggestionRequests()}))}ignoreSuggestion(suggestionId){this.suggestionService.ignoreSuggestion(suggestionId).pipe((0,operators.Mi)(()=>this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction()),(0,operators.nx)(()=>this.updatePage())).subscribe()}ignoreSuggestionAllSelected(){this.isBulkOperationPending=!0,this.suggestionService.ignoreSuggestionMultiple(Object.values(this.selectedSuggestions)).pipe((0,operators.Mi)(results=>{this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction(),this.isBulkOperationPending=!1,this.selectedSuggestions={},results.success>0&&this.notificationService.success(this.translateService.get("suggestion.ignoreSuggestion.bulk.success",{count:results.success})),results.fails>0&&this.notificationService.error(this.translateService.get("suggestion.ignoreSuggestion.bulk.error",{count:results.fails}))}),(0,operators.nx)(()=>this.updatePage())).subscribe()}approveAndImport(event){this.suggestionService.approveAndImport(this.workspaceItemService,event.suggestion,event.collectionId).pipe((0,operators.Mi)(workspaceitem=>{const content=this.translateService.instant("suggestion.approveAndImport.success",{url:(0,workflowitems_edit_page_routing_paths.Uf)(workspaceitem.id)});this.notificationService.success("",content,{timeOut:0},!0),this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction()}),(0,operators.nx)(()=>this.updatePage())).subscribe()}approveAndImportAllSelected(event){this.isBulkOperationPending=!0,this.suggestionService.approveAndImportMultiple(this.workspaceItemService,Object.values(this.selectedSuggestions),event.collectionId).pipe((0,operators.Mi)(results=>{this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction(),this.isBulkOperationPending=!1,this.selectedSuggestions={},results.success>0&&this.notificationService.success(this.translateService.get("suggestion.approveAndImport.bulk.success",{count:results.success})),results.fails>0&&this.notificationService.error(this.translateService.get("suggestion.approveAndImport.bulk.error",{count:results.fails}))}),(0,operators.nx)(()=>this.updatePage())).subscribe()}onSelected(object,selected){selected?this.selectedSuggestions[object.id]=object:delete this.selectedSuggestions[object.id]}onToggleSelectAll(suggestions){this.getSelectedSuggestionsCount()>0?this.selectedSuggestions={}:suggestions.forEach(suggestion=>{this.selectedSuggestions[suggestion.id]=suggestion})}getSelectedSuggestionsCount(){return Object.keys(this.selectedSuggestions).length}isCollectionFixed(suggestions){return this.suggestionService.isCollectionFixed(suggestions)}translateSuggestionSource(){return this.suggestionService.translateSuggestionSource(this.suggestionSource)}translateSuggestionType(){return this.suggestionService.translateSuggestionType(this.suggestionSource)}static#_=this.\u0275fac=function(t){return new(t||SuggestionsPageComponent2)(core.rXU(auth_service.uR),core.rXU(notifications_service.I),core.rXU(pagination_service.m),core.rXU(router.nX),core.rXU(router.Ix),core.rXU(suggestions_service.F),core.rXU(suggestion_targets_state_service.x),core.rXU(ngx_translate_core.c$),core.rXU(workspaceitem_data_service.WorkspaceitemDataService))};static#_2=this.\u0275cmp=core.VBU({type:SuggestionsPageComponent2,selectors:[["ds-suggestion-page"]],standalone:!0,features:[core.aNF],decls:5,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-12"],[4,"ngVar"],[4,"ngIf"],[3,"type",4,"ngIf"],["target","_blank",3,"routerLink"],[1,"mb-3","mt-3"],[1,"btn","mr-2","btn-light",3,"click"],["class","m-2",3,"isBulk","isCollectionFixed","approveAndImport","ignoreSuggestionClicked",4,"ngIf"],["class","fas fa-circle-notch fa-spin",4,"ngIf"],[3,"paginationOptions","sortOptions","collectionSize","hideGear","hidePagerWhenSinglePage","hidePaginationDetail","paginationChange",4,"ngIf"],[1,"m-2",3,"approveAndImport","ignoreSuggestionClicked","isBulk","isCollectionFixed"],[1,"fas","fa-circle-notch","fa-spin"],[3,"paginationChange","paginationOptions","sortOptions","collectionSize","hideGear","hidePagerWhenSinglePage","hidePaginationDetail"],[1,"list-unstyled"],["class","mt-4 mb-4",4,"ngFor","ngForOf"],[1,"mt-4","mb-4"],[3,"ignoreSuggestionClicked","selected","approveAndImport","object","isSelected","isCollectionFixed"],[3,"type"]],template:function(rf,ctx){1&rf&&(core.j41(0,"div",0)(1,"div",1)(2,"div",2),core.DNE(3,SuggestionsPageComponent_ng_container_3_Template,7,9,"ng-container",3),core.nI1(4,"async"),core.k0s()()()),2&rf&&(core.R7$(3),core.Y8G("ngVar",core.bMT(4,1,ctx.suggestionsRD$)))},dependencies:[common.Jj,var_directive.r,common.bT,router.Wk,ngx_translate_core.h,ngx_translate_core.D9,SuggestionActionsComponent,themed_loading_component.v,pagination_component.e,SuggestionListElementComponent,common.Sq,alert_component.C]})}return SuggestionsPageComponent2})();var suggestion_target_data_service=__webpack_require__(34364);const ROUTES=[{path:":targetId",resolve:{suggestionTargets:(route,state,suggestionsDataService=(0,core.WQX)(suggestion_target_data_service.SuggestionTargetDataService))=>suggestionsDataService.getTargetById(route.params.targetId).pipe((0,shared_operators.qD)()),breadcrumb:(route,state,breadcrumbService=(0,core.WQX)(PublicationClaimBreadcrumbService))=>({provider:breadcrumbService,key:route.paramMap.get("targetId").split(":")[1]})},data:{title:"admin.notifications.publicationclaim.page.title",breadcrumbKey:"admin.notifications.publicationclaim",showBreadcrumbsFluid:!1},canActivate:[authenticated_guard.t],runGuardsAndResolvers:"always",component:SuggestionsPageComponent}]}};