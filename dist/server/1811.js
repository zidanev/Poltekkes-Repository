"use strict";exports.id=1811,exports.ids=[1811],exports.modules={51811:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommunityListComponent:()=>CommunityListComponent});var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(86551),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(84739),_angular_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(64247),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43750),_app_community_list_page_community_list_community_list_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70923),_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32943),_app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95435),_app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2455),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(68014);const _c0=a0=>({name:a0});function CommunityListComponent_ds_loading_0_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(0,"ds-loading",5)}function CommunityListComponent_cdk_tree_node_3_button_5_Template(rf,ctx){if(1&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_4__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"button",14),_angular_core__WEBPACK_IMPORTED_MODULE_4__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_4__.eBV(_r1);const node_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_4__.Njj(ctx_r2.getNextPage(node_r2))}),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(1,"i",15),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()}2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.SpI(" ",_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(3,1,"communityList.showMore")," "))}function CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(0,"ds-loading",5)}function CommunityListComponent_cdk_tree_node_3_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"cdk-tree-node",6)(1,"div",7)(2,"span",8),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(3,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(4,"div",10),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(5,CommunityListComponent_cdk_tree_node_3_button_5_Template,4,3,"button",11),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(6,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(7,CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template,1,0,"ds-loading",0),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(8,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(9,"div",12),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(10,"div",13),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()),2&rf){const node_r2=ctx.$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(5),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",!0!==_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(6,2,ctx_r2.dataSource.loading$)),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(8,4,node_r2===ctx_r2.loadingNode&&ctx_r2.dataSource.loading$))}}function CommunityListComponent_cdk_tree_node_4_button_2_Template(rf,ctx){if(1&rf){const _r4=_angular_core__WEBPACK_IMPORTED_MODULE_4__.RV6();_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"button",27),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(1,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.bIt("click",function(){_angular_core__WEBPACK_IMPORTED_MODULE_4__.eBV(_r4);const node_r5=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();return _angular_core__WEBPACK_IMPORTED_MODULE_4__.Njj(ctx_r2.toggleExpanded(node_r5))}),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(2,"span",28),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(3,"span",29),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(4),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(5,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()}if(2&rf){const node_r5=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_4__.BMQ("aria-label",_angular_core__WEBPACK_IMPORTED_MODULE_4__.i5U(1,5,node_r5.isExpanded?"communityList.collapse":"communityList.expand",_angular_core__WEBPACK_IMPORTED_MODULE_4__.eq3(11,_c0,ctx_r2.dsoNameService.getName(node_r5.payload)))),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.HbH(node_r5.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__.i5U(5,8,node_r5.isExpanded?"communityList.collapse":"communityList.expand",_angular_core__WEBPACK_IMPORTED_MODULE_4__.eq3(13,_c0,ctx_r2.dsoNameService.getName(node_r5.payload))))}}function CommunityListComponent_cdk_tree_node_4_span_4_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"span",30),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(1,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s())}function CommunityListComponent_cdk_tree_node_4_span_12_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"span",31),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(1),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()),2&rf){const node_r5=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(node_r5.payload.archivedItemsCount)}}function CommunityListComponent_cdk_tree_node_4_div_15_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"div",13)(1,"span",30),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(2,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(3,"ds-truncatable-part",32)(4,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(5),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()()),2&rf){const node_r5=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("id",node_r5.id)("minLines",3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(node_r5.payload.shortDescription)}}function CommunityListComponent_cdk_tree_node_4_div_16_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"div",33)(1,"span",30),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(2,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(3,"ds-loading",5),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s())}function CommunityListComponent_cdk_tree_node_4_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"cdk-tree-node",16)(1,"div",7),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(2,CommunityListComponent_cdk_tree_node_4_button_2_Template,6,15,"button",17),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(3,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(4,CommunityListComponent_cdk_tree_node_4_span_4_Template,2,0,"span",18),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(5,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(6,"div",19)(7,"span",20)(8,"a",21),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(10,"span",22),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(11,"\xa0"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(12,CommunityListComponent_cdk_tree_node_4_span_12_Template,2,1,"span",23),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(13,"ds-truncatable",24)(14,"div",12),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(15,CommunityListComponent_cdk_tree_node_4_div_15_Template,6,3,"div",25),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(16,CommunityListComponent_cdk_tree_node_4_div_16_Template,4,0,"div",26),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(17,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()),2&rf){const node_r5=ctx.$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(3,8,ctx_r2.hasChild(null,node_r5))),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",!0!==_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(5,10,ctx_r2.hasChild(null,node_r5))),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(4),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("routerLink",node_r5.route),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(ctx_r2.dsoNameService.getName(node_r5.payload)),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",node_r5.payload.archivedItemsCount>=0),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("id",node_r5.id),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",node_r5.payload.shortDescription),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(17,12,node_r5===ctx_r2.loadingNode&&ctx_r2.dataSource.loading$))}}function CommunityListComponent_cdk_tree_node_5_div_9_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"div",13)(1,"span",30),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(2,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(3,"ds-truncatable-part",32)(4,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(5),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()()),2&rf){const node_r6=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG().$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("id",node_r6.id)("minLines",3),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(node_r6.payload.shortDescription)}}function CommunityListComponent_cdk_tree_node_5_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(0,"cdk-tree-node",34)(1,"div",7)(2,"span",8),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nrm(3,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(4,"h6",10)(5,"a",21),_angular_core__WEBPACK_IMPORTED_MODULE_4__.EFF(6),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(7,"ds-truncatable",24)(8,"div",12),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(9,CommunityListComponent_cdk_tree_node_5_div_9_Template,6,3,"div",25),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()()()),2&rf){const node_r6=ctx.$implicit,ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_4__.XpG();_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(5),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("routerLink",node_r6.route),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.JRh(ctx_r2.dsoNameService.getName(node_r6.payload)),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("id",node_r6.id),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",node_r6.payload.shortDescription)}}let CommunityListComponent=(()=>{class CommunityListComponent2 extends _app_community_list_page_community_list_community_list_component__WEBPACK_IMPORTED_MODULE_0__.CommunityListComponent{static#_=this.\u0275fac=(()=>{let \u0275CommunityListComponent_BaseFactory;return function(t){return(\u0275CommunityListComponent_BaseFactory||(\u0275CommunityListComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_4__.xGo(CommunityListComponent2)))(t||CommunityListComponent2)}})();static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_4__.VBU({type:CommunityListComponent2,selectors:[["ds-themed-community-list"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_4__.Vt3,_angular_core__WEBPACK_IMPORTED_MODULE_4__.aNF],decls:6,vars:9,consts:[["class","ds-themed-loading",4,"ngIf"],[3,"dataSource","treeControl","trackBy"],["cdkTreeNodePadding","","class","example-tree-node show-more-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node expandable-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node childless-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"ds-themed-loading"],["cdkTreeNodePadding","",1,"example-tree-node","show-more-node"],[1,"btn-group"],["aria-hidden","true","cdkTreeNodeToggle","",1,"btn","btn-default","invisible"],[1,"fa","fa-chevron-right"],[1,"align-middle","my-auto"],["class","btn btn-outline-primary btn-sm","role","button",3,"click",4,"ngIf"],["cdkTreeNodePadding","",1,"text-muted"],[1,"d-flex"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fas","fa-angle-down"],["cdkTreeNodePadding","",1,"example-tree-node","expandable-node"],["type","button","class","btn btn-default","cdkTreeNodeToggle","","data-test","expand-button",3,"click",4,"ngIf"],["aria-hidden","true","class","btn btn-default invisible",4,"ngIf"],[1,"d-flex","flex-row"],[1,"d-flex","align-middle","my-auto"],[1,"lead",3,"routerLink"],[1,"pr-2"],["class","badge badge-pill badge-secondary align-top archived-items-lead my-auto",4,"ngIf"],[3,"id"],["class","d-flex",4,"ngIf"],["class","d-flex","cdkTreeNodePadding","",4,"ngIf"],["type","button","cdkTreeNodeToggle","","data-test","expand-button",1,"btn","btn-default",3,"click"],["aria-hidden","true"],[1,"sr-only"],["aria-hidden","true",1,"btn","btn-default","invisible"],[1,"badge","badge-pill","badge-secondary","align-top","archived-items-lead","my-auto"],[3,"id","minLines"],["cdkTreeNodePadding","",1,"d-flex"],["cdkTreeNodePadding","",1,"example-tree-node","childless-node"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(0,CommunityListComponent_ds_loading_0_Template,1,0,"ds-loading",0),_angular_core__WEBPACK_IMPORTED_MODULE_4__.nI1(1,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_4__.j41(2,"cdk-tree",1),_angular_core__WEBPACK_IMPORTED_MODULE_4__.DNE(3,CommunityListComponent_cdk_tree_node_3_Template,11,6,"cdk-tree-node",2)(4,CommunityListComponent_cdk_tree_node_4_Template,18,14,"cdk-tree-node",3)(5,CommunityListComponent_cdk_tree_node_5_Template,10,4,"cdk-tree-node",4),_angular_core__WEBPACK_IMPORTED_MODULE_4__.k0s()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_4__.bMT(1,7,ctx.dataSource.loading$)&&!ctx.loadingNode),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("dataSource",ctx.dataSource)("treeControl",ctx.treeControl)("trackBy",ctx.trackBy),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("cdkTreeNodeDefWhen",ctx.isShowMore),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("cdkTreeNodeDefWhen",ctx.hasChild),_angular_core__WEBPACK_IMPORTED_MODULE_4__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_4__.Y8G("cdkTreeNodeDefWhen",!(ctx.hasChild&&ctx.isShowMore)))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.bT,_app_shared_loading_themed_loading_component__WEBPACK_IMPORTED_MODULE_1__.v,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.Dc,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.Sz,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.aI,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.Hy,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.NL,_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.xn,_angular_router__WEBPACK_IMPORTED_MODULE_7__.Wk,_app_shared_truncatable_truncatable_component__WEBPACK_IMPORTED_MODULE_2__.d,_app_shared_truncatable_truncatable_part_truncatable_part_component__WEBPACK_IMPORTED_MODULE_3__.W,_angular_common__WEBPACK_IMPORTED_MODULE_5__.Jj,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.h,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.D9],encapsulation:2})}return CommunityListComponent2})()}};