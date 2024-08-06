exports.id=9235,exports.ids=[9235],exports.modules={96622:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>Breadcrumb});class Breadcrumb{constructor(text,url){this.text=text,this.url=url}}},69235:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ROUTES:()=>ROUTES});var i18n_breadcrumb_resolver=__webpack_require__(21870),themed_component=__webpack_require__(31260),core=(__webpack_require__(98733),__webpack_require__(68014));const _c0=["*"];function ThemedCommunityListPageComponent_ng_template_0_Template(rf,ctx){}const ROUTES=[{path:"",component:(()=>{class ThemedCommunityListPageComponent2 extends themed_component.J{getComponentName(){return"CommunityListPageComponent"}importThemedComponent(themeName){return __webpack_require__(24768)(`./${themeName}/app/community-list-page/community-list-page.component`)}importUnthemedComponent(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,98733))}static#_=this.\u0275fac=(()=>{let \u0275ThemedCommunityListPageComponent_BaseFactory;return function(t){return(\u0275ThemedCommunityListPageComponent_BaseFactory||(\u0275ThemedCommunityListPageComponent_BaseFactory=core.xGo(ThemedCommunityListPageComponent2)))(t||ThemedCommunityListPageComponent2)}})();static#_2=this.\u0275cmp=core.VBU({type:ThemedCommunityListPageComponent2,selectors:[["ds-community-list-page"]],standalone:!0,features:[core.Vt3,core.aNF],ngContentSelectors:_c0,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(rf,ctx){1&rf&&(core.NAR(),core.DNE(0,ThemedCommunityListPageComponent_ng_template_0_Template,0,0,"ng-template",null,0,core.C5r),core.j41(2,"div",null,1),core.SdG(4),core.k0s())},encapsulation:2})}return ThemedCommunityListPageComponent2})(),pathMatch:"full",resolve:{breadcrumb:i18n_breadcrumb_resolver.S},data:{title:"communityList.tabTitle",breadcrumbKey:"communityList"}}]},98733:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommunityListPageComponent:()=>CommunityListPageComponent});var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43750),_community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14018),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(68014);let CommunityListPageComponent=(()=>{class CommunityListPageComponent2{static#_=this.\u0275fac=function(t){return new(t||CommunityListPageComponent2)};static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_1__.VBU({type:CommunityListPageComponent2,selectors:[["ds-base-community-list-page"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.aNF],decls:5,vars:3,consts:[[1,"container"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.j41(0,"div",0)(1,"h1"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.EFF(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.nI1(3,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_1__.nrm(4,"ds-community-list"),_angular_core__WEBPACK_IMPORTED_MODULE_1__.k0s()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_1__.JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__.bMT(3,1,"communityList.title")))},dependencies:[_community_list_themed_community_list_component__WEBPACK_IMPORTED_MODULE_0__.A,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.h,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.D9],encapsulation:2})}return CommunityListPageComponent2})()},70923:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommunityListComponent:()=>CommunityListComponent});var tree=__webpack_require__(86551),common=__webpack_require__(84739),router=__webpack_require__(64247),ngx_translate_core=__webpack_require__(43750),operators=__webpack_require__(10743),dso_name_service=__webpack_require__(91735),sort_options_model=__webpack_require__(80685),find_list_options_model=__webpack_require__(97570),empty_util=__webpack_require__(77028),themed_loading_component=__webpack_require__(32943),truncatable_component=__webpack_require__(95435),truncatable_part_component=__webpack_require__(2455),cjs=__webpack_require__(74785);class CommunityListDatasource{constructor(communityListService){this.communityListService=communityListService,this.communityList$=new cjs.BehaviorSubject([]),this.loading$=new cjs.BehaviorSubject(!1)}connect(collectionViewer){return this.communityList$.asObservable()}loadCommunities(findOptions,expandedNodes){this.loading$.next(!0),(0,empty_util.a4)(this.subLoadCommunities)&&this.subLoadCommunities.unsubscribe(),this.subLoadCommunities=this.communityListService.loadCommunities(findOptions,expandedNodes).pipe((0,operators.jE)(()=>this.loading$.next(!1))).subscribe(flatNodes=>{this.communityList$.next(flatNodes)})}disconnect(collectionViewer){this.communityList$.complete(),this.loading$.complete()}}var ngrx_store=__webpack_require__(5136),app_config_interface=__webpack_require__(59945),v4=__webpack_require__(8300),collection_page_routing_paths=__webpack_require__(72330),community_page_routing_paths=__webpack_require__(27546),collection_data_service=__webpack_require__(39138),community_data_service=__webpack_require__(83591),paginated_list_model=__webpack_require__(12383),community_model=__webpack_require__(61935),shared_operators=__webpack_require__(82656),page_info_model=__webpack_require__(59136),follow_link_config_model=__webpack_require__(32181),community_list_actions=__webpack_require__(18151);class ShowMoreFlatNode{}var core=__webpack_require__(68014);const combineAndFlatten=obsList=>(0,cjs.combineLatest)([...obsList]).pipe((0,operators.Tj)(matrix=>[].concat(...matrix)),(0,operators.pb)(arr=>arr.every(e=>(0,empty_util.a4)(e)))),toFlatNode=(c,isExpandable,level,isExpanded,parent)=>({isExpandable$:isExpandable,name:c.name,id:c.id,level,isExpanded,parent,payload:c,isShowMoreNode:!1,route:c instanceof community_model.E?(0,community_page_routing_paths.c5)(c.id):(0,collection_page_routing_paths.JW)(c.id)}),showMoreFlatNode=(id,level,parent)=>({isExpandable$:(0,cjs.of)(!1),name:"Show More Flatnode",id,level,isExpanded:!1,parent,payload:new ShowMoreFlatNode,isShowMoreNode:!0}),communityListStateSelector=state=>state.communityList,expandedNodesSelector=(0,ngrx_store.Mz)(communityListStateSelector,communityList=>communityList.expandedNodes),loadingNodeSelector=(0,ngrx_store.Mz)(communityListStateSelector,communityList=>communityList.loadingNode);let CommunityListService=(()=>{class CommunityListService2{constructor(appConfig,communityDataService,collectionDataService,store){this.appConfig=appConfig,this.communityDataService=communityDataService,this.collectionDataService=collectionDataService,this.store=store,this.configOnePage=Object.assign(new find_list_options_model._,{elementsPerPage:1}),this.pageSize=appConfig.communityList.pageSize}saveCommunityListStateToStore(expandedNodes,loadingNode){this.store.dispatch(new community_list_actions.H(expandedNodes,loadingNode))}getExpandedNodesFromStore(){return this.store.select(expandedNodesSelector)}getLoadingNodeFromStore(){return this.store.select(loadingNodeSelector)}loadCommunities(findOptions,expandedNodes){const currentPage=findOptions.currentPage,topCommunities=[];for(let i=1;i<=currentPage;i++){const pagination=Object.assign({},findOptions,{currentPage:i});topCommunities.push(this.getTopCommunities(pagination))}return(0,cjs.combineLatest)([...topCommunities]).pipe((0,operators.Tj)(coms=>{const newPages=coms.map(unit=>unit.page),newPage=[].concat(...newPages);let newPageInfo=new page_info_model.Q;return coms&&coms.length>0&&(newPageInfo=Object.assign({},coms[0].pageInfo,{currentPage})),(0,paginated_list_model.g)(newPageInfo,newPage)})).pipe((0,operators.nx)(topComs=>this.transformListOfCommunities(topComs,0,null,expandedNodes)))}getTopCommunities(options){return this.communityDataService.findTop({currentPage:options.currentPage,elementsPerPage:this.pageSize,sort:{field:options.sort.field,direction:options.sort.direction}},(0,follow_link_config_model.s)("subcommunities",{findListOptions:this.configOnePage}),(0,follow_link_config_model.s)("collections",{findListOptions:this.configOnePage})).pipe((0,shared_operators.yd)(),(0,operators.Tj)(results=>results.payload))}transformListOfCommunities(listOfPaginatedCommunities,level,parent,expandedNodes){if((0,empty_util.hj)(listOfPaginatedCommunities.page)){let currentPage=listOfPaginatedCommunities.currentPage;(0,empty_util.hj)(parent)&&(currentPage=expandedNodes.find(node=>node.id===parent.id).currentCommunityPage);let obsList=listOfPaginatedCommunities.page.map(community=>this.transformCommunity(community,level,parent,expandedNodes));return currentPage<listOfPaginatedCommunities.totalPages&&currentPage===listOfPaginatedCommunities.currentPage&&(obsList=[...obsList,(0,cjs.of)([showMoreFlatNode(`community-${(0,v4.A)()}`,level,parent)])]),combineAndFlatten(obsList)}return(0,cjs.of)([])}transformCommunity(community,level,parent,expandedNodes){let isExpanded=!1;(0,empty_util.hj)(expandedNodes)&&(isExpanded=(0,empty_util.a4)(expandedNodes.find(node=>node.id===community.id)));const isExpandable$=this.getIsExpandable(community),communityFlatNode=toFlatNode(community,isExpandable$,level,isExpanded,parent);let obsList=[(0,cjs.of)([communityFlatNode])];if(isExpanded){const currentCommunityPage=expandedNodes.find(node=>node.id===community.id).currentCommunityPage;let subcoms=[];for(let i=1;i<=currentCommunityPage;i++){const nextSetOfSubcommunitiesPage=this.communityDataService.findByParent(community.uuid,{elementsPerPage:this.pageSize,currentPage:i},(0,follow_link_config_model.s)("subcommunities",{findListOptions:this.configOnePage}),(0,follow_link_config_model.s)("collections",{findListOptions:this.configOnePage})).pipe((0,shared_operators.qD)(),(0,operators.nx)(rd=>(0,empty_util.a4)(rd)&&(0,empty_util.a4)(rd.payload)?this.transformListOfCommunities(rd.payload,level+1,communityFlatNode,expandedNodes):(0,cjs.of)([])));subcoms=[...subcoms,nextSetOfSubcommunitiesPage]}obsList=[...obsList,combineAndFlatten(subcoms)];const currentCollectionPage=expandedNodes.find(node=>node.id===community.id).currentCollectionPage;let collections=[];for(let i=1;i<=currentCollectionPage;i++){const nextSetOfCollectionsPage=this.collectionDataService.findByParent(community.uuid,{elementsPerPage:this.pageSize,currentPage:i}).pipe((0,shared_operators.qD)(),(0,operators.Tj)(rd=>{if((0,empty_util.a4)(rd)&&(0,empty_util.a4)(rd.payload)){let nodes=rd.payload.page.map(collection=>toFlatNode(collection,(0,cjs.of)(!1),level+1,!1,communityFlatNode));return currentCollectionPage<rd.payload.totalPages&&currentCollectionPage===rd.payload.currentPage&&(nodes=[...nodes,showMoreFlatNode(`collection-${(0,v4.A)()}`,level+1,communityFlatNode)]),nodes}return[]}));collections=[...collections,nextSetOfCollectionsPage]}obsList=[...obsList,combineAndFlatten(collections)]}return combineAndFlatten(obsList)}getIsExpandable(community){const hasSubcoms$=this.communityDataService.findByParent(community.uuid,this.configOnePage).pipe((0,operators.Tj)(rd=>!(!(0,empty_util.a4)(rd)||!(0,empty_util.a4)(rd.payload))&&rd.payload.totalElements>0)),hasColls$=this.collectionDataService.findByParent(community.uuid,this.configOnePage).pipe((0,operators.Tj)(rd=>!(!(0,empty_util.a4)(rd)||!(0,empty_util.a4)(rd.payload))&&rd.payload.totalElements>0));return(0,cjs.combineLatest)(hasSubcoms$,hasColls$).pipe((0,operators.Tj)(([hasSubcoms,hasColls])=>hasSubcoms||hasColls))}static#_=this.\u0275fac=function(t){return new(t||CommunityListService2)(core.KVO(app_config_interface.vQ),core.KVO(community_data_service.CommunityDataService),core.KVO(collection_data_service.CollectionDataService),core.KVO(ngrx_store.il))};static#_2=this.\u0275prov=core.jDH({token:CommunityListService2,factory:CommunityListService2.\u0275fac,providedIn:"root"})}return CommunityListService2})();const _c0=a0=>({name:a0});function CommunityListComponent_ds_loading_0_Template(rf,ctx){1&rf&&core.nrm(0,"ds-loading",5)}function CommunityListComponent_cdk_tree_node_3_button_5_Template(rf,ctx){if(1&rf){const _r1=core.RV6();core.j41(0,"button",14),core.bIt("click",function(){core.eBV(_r1);const node_r2=core.XpG().$implicit,ctx_r2=core.XpG();return core.Njj(ctx_r2.getNextPage(node_r2))}),core.nrm(1,"i",15),core.EFF(2),core.nI1(3,"translate"),core.k0s()}2&rf&&(core.R7$(2),core.SpI(" ",core.bMT(3,1,"communityList.showMore")," "))}function CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template(rf,ctx){1&rf&&core.nrm(0,"ds-loading",5)}function CommunityListComponent_cdk_tree_node_3_Template(rf,ctx){if(1&rf&&(core.j41(0,"cdk-tree-node",6)(1,"div",7)(2,"span",8),core.nrm(3,"span",9),core.k0s(),core.j41(4,"div",10),core.DNE(5,CommunityListComponent_cdk_tree_node_3_button_5_Template,4,3,"button",11),core.nI1(6,"async"),core.DNE(7,CommunityListComponent_cdk_tree_node_3_ds_loading_7_Template,1,0,"ds-loading",0),core.nI1(8,"async"),core.k0s()(),core.j41(9,"div",12),core.nrm(10,"div",13),core.k0s()()),2&rf){const node_r2=ctx.$implicit,ctx_r2=core.XpG();core.R7$(5),core.Y8G("ngIf",!0!==core.bMT(6,2,ctx_r2.dataSource.loading$)),core.R7$(2),core.Y8G("ngIf",core.bMT(8,4,node_r2===ctx_r2.loadingNode&&ctx_r2.dataSource.loading$))}}function CommunityListComponent_cdk_tree_node_4_button_2_Template(rf,ctx){if(1&rf){const _r4=core.RV6();core.j41(0,"button",27),core.nI1(1,"translate"),core.bIt("click",function(){core.eBV(_r4);const node_r5=core.XpG().$implicit,ctx_r2=core.XpG();return core.Njj(ctx_r2.toggleExpanded(node_r5))}),core.nrm(2,"span",28),core.j41(3,"span",29),core.EFF(4),core.nI1(5,"translate"),core.k0s()()}if(2&rf){const node_r5=core.XpG().$implicit,ctx_r2=core.XpG();core.BMQ("aria-label",core.i5U(1,5,node_r5.isExpanded?"communityList.collapse":"communityList.expand",core.eq3(11,_c0,ctx_r2.dsoNameService.getName(node_r5.payload)))),core.R7$(2),core.HbH(node_r5.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),core.R7$(2),core.JRh(core.i5U(5,8,node_r5.isExpanded?"communityList.collapse":"communityList.expand",core.eq3(13,_c0,ctx_r2.dsoNameService.getName(node_r5.payload))))}}function CommunityListComponent_cdk_tree_node_4_span_4_Template(rf,ctx){1&rf&&(core.j41(0,"span",30),core.nrm(1,"span",9),core.k0s())}function CommunityListComponent_cdk_tree_node_4_span_12_Template(rf,ctx){if(1&rf&&(core.j41(0,"span",31),core.EFF(1),core.k0s()),2&rf){const node_r5=core.XpG().$implicit;core.R7$(),core.JRh(node_r5.payload.archivedItemsCount)}}function CommunityListComponent_cdk_tree_node_4_div_15_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",13)(1,"span",30),core.nrm(2,"span",9),core.k0s(),core.j41(3,"ds-truncatable-part",32)(4,"span"),core.EFF(5),core.k0s()()()),2&rf){const node_r5=core.XpG().$implicit;core.R7$(3),core.Y8G("id",node_r5.id)("minLines",3),core.R7$(2),core.JRh(node_r5.payload.shortDescription)}}function CommunityListComponent_cdk_tree_node_4_div_16_Template(rf,ctx){1&rf&&(core.j41(0,"div",33)(1,"span",30),core.nrm(2,"span",9),core.k0s(),core.nrm(3,"ds-loading",5),core.k0s())}function CommunityListComponent_cdk_tree_node_4_Template(rf,ctx){if(1&rf&&(core.j41(0,"cdk-tree-node",16)(1,"div",7),core.DNE(2,CommunityListComponent_cdk_tree_node_4_button_2_Template,6,15,"button",17),core.nI1(3,"async"),core.DNE(4,CommunityListComponent_cdk_tree_node_4_span_4_Template,2,0,"span",18),core.nI1(5,"async"),core.j41(6,"div",19)(7,"span",20)(8,"a",21),core.EFF(9),core.k0s(),core.j41(10,"span",22),core.EFF(11,"\xa0"),core.k0s(),core.DNE(12,CommunityListComponent_cdk_tree_node_4_span_12_Template,2,1,"span",23),core.k0s()()(),core.j41(13,"ds-truncatable",24)(14,"div",12),core.DNE(15,CommunityListComponent_cdk_tree_node_4_div_15_Template,6,3,"div",25),core.k0s()(),core.DNE(16,CommunityListComponent_cdk_tree_node_4_div_16_Template,4,0,"div",26),core.nI1(17,"async"),core.k0s()),2&rf){const node_r5=ctx.$implicit,ctx_r2=core.XpG();core.R7$(2),core.Y8G("ngIf",core.bMT(3,8,ctx_r2.hasChild(null,node_r5))),core.R7$(2),core.Y8G("ngIf",!0!==core.bMT(5,10,ctx_r2.hasChild(null,node_r5))),core.R7$(4),core.Y8G("routerLink",node_r5.route),core.R7$(),core.JRh(ctx_r2.dsoNameService.getName(node_r5.payload)),core.R7$(3),core.Y8G("ngIf",node_r5.payload.archivedItemsCount>=0),core.R7$(),core.Y8G("id",node_r5.id),core.R7$(2),core.Y8G("ngIf",node_r5.payload.shortDescription),core.R7$(),core.Y8G("ngIf",core.bMT(17,12,node_r5===ctx_r2.loadingNode&&ctx_r2.dataSource.loading$))}}function CommunityListComponent_cdk_tree_node_5_div_9_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",13)(1,"span",30),core.nrm(2,"span",9),core.k0s(),core.j41(3,"ds-truncatable-part",32)(4,"span"),core.EFF(5),core.k0s()()()),2&rf){const node_r6=core.XpG().$implicit;core.R7$(3),core.Y8G("id",node_r6.id)("minLines",3),core.R7$(2),core.JRh(node_r6.payload.shortDescription)}}function CommunityListComponent_cdk_tree_node_5_Template(rf,ctx){if(1&rf&&(core.j41(0,"cdk-tree-node",34)(1,"div",7)(2,"span",8),core.nrm(3,"span",9),core.k0s(),core.j41(4,"h6",10)(5,"a",21),core.EFF(6),core.k0s()()(),core.j41(7,"ds-truncatable",24)(8,"div",12),core.DNE(9,CommunityListComponent_cdk_tree_node_5_div_9_Template,6,3,"div",25),core.k0s()()()),2&rf){const node_r6=ctx.$implicit,ctx_r2=core.XpG();core.R7$(5),core.Y8G("routerLink",node_r6.route),core.R7$(),core.JRh(ctx_r2.dsoNameService.getName(node_r6.payload)),core.R7$(),core.Y8G("id",node_r6.id),core.R7$(2),core.Y8G("ngIf",node_r6.payload.shortDescription)}}let CommunityListComponent=(()=>{class CommunityListComponent2{constructor(communityListService,dsoNameService){this.communityListService=communityListService,this.dsoNameService=dsoNameService,this.expandedNodes=[],this.treeControl=new tree.XW(node=>node.level,node=>!0),this.trackBy=(index,node)=>node.id,this.paginationConfig=new find_list_options_model._,this.paginationConfig.elementsPerPage=2,this.paginationConfig.currentPage=1,this.paginationConfig.sort=new sort_options_model.z("dc.title",sort_options_model.U.ASC)}ngOnInit(){this.dataSource=new CommunityListDatasource(this.communityListService),this.communityListService.getLoadingNodeFromStore().pipe((0,operators.s)(1)).subscribe(result=>{this.loadingNode=result}),this.communityListService.getExpandedNodesFromStore().pipe((0,operators.s)(1)).subscribe(result=>{this.expandedNodes=[...result],this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)})}ngOnDestroy(){this.communityListService.saveCommunityListStateToStore(this.expandedNodes,this.loadingNode)}hasChild(_,node){return node.isExpandable$}isShowMore(_,node){return node.isShowMoreNode}toggleExpanded(node){this.loadingNode=node,node.isExpanded?(this.expandedNodes=this.expandedNodes.filter(node2=>node2.id!==node.id),node.isExpanded=!1):(this.expandedNodes.push(node),node.isExpanded=!0,(0,empty_util.Im)(node.currentCollectionPage)&&(node.currentCollectionPage=1),(0,empty_util.Im)(node.currentCommunityPage)&&(node.currentCommunityPage=1)),this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)}getNextPage(node){this.loadingNode=node,null!=node.parent?(node.id.startsWith("collection")&&this.expandedNodes.find(node2=>node.parent.id===node2.id).currentCollectionPage++,node.id.startsWith("community")&&this.expandedNodes.find(node2=>node.parent.id===node2.id).currentCommunityPage++):this.paginationConfig.currentPage++,this.dataSource.loadCommunities(this.paginationConfig,this.expandedNodes)}static#_=this.\u0275fac=function(t){return new(t||CommunityListComponent2)(core.rXU(CommunityListService),core.rXU(dso_name_service.f))};static#_2=this.\u0275cmp=core.VBU({type:CommunityListComponent2,selectors:[["ds-base-community-list"]],standalone:!0,features:[core.aNF],decls:6,vars:9,consts:[["class","ds-themed-loading",4,"ngIf"],[3,"dataSource","treeControl","trackBy"],["cdkTreeNodePadding","","class","example-tree-node show-more-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node expandable-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node childless-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"ds-themed-loading"],["cdkTreeNodePadding","",1,"example-tree-node","show-more-node"],[1,"btn-group"],["aria-hidden","true","cdkTreeNodeToggle","",1,"btn","btn-default","invisible"],[1,"fa","fa-chevron-right"],[1,"align-middle","my-auto"],["class","btn btn-outline-primary btn-sm","role","button",3,"click",4,"ngIf"],["cdkTreeNodePadding","",1,"text-muted"],[1,"d-flex"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fas","fa-angle-down"],["cdkTreeNodePadding","",1,"example-tree-node","expandable-node"],["type","button","class","btn btn-default","cdkTreeNodeToggle","","data-test","expand-button",3,"click",4,"ngIf"],["aria-hidden","true","class","btn btn-default invisible",4,"ngIf"],[1,"d-flex","flex-row"],[1,"d-flex","align-middle","my-auto"],[1,"lead",3,"routerLink"],[1,"pr-2"],["class","badge badge-pill badge-secondary align-top archived-items-lead my-auto",4,"ngIf"],[3,"id"],["class","d-flex",4,"ngIf"],["class","d-flex","cdkTreeNodePadding","",4,"ngIf"],["type","button","cdkTreeNodeToggle","","data-test","expand-button",1,"btn","btn-default",3,"click"],["aria-hidden","true"],[1,"sr-only"],["aria-hidden","true",1,"btn","btn-default","invisible"],[1,"badge","badge-pill","badge-secondary","align-top","archived-items-lead","my-auto"],[3,"id","minLines"],["cdkTreeNodePadding","",1,"d-flex"],["cdkTreeNodePadding","",1,"example-tree-node","childless-node"]],template:function(rf,ctx){1&rf&&(core.DNE(0,CommunityListComponent_ds_loading_0_Template,1,0,"ds-loading",0),core.nI1(1,"async"),core.j41(2,"cdk-tree",1),core.DNE(3,CommunityListComponent_cdk_tree_node_3_Template,11,6,"cdk-tree-node",2)(4,CommunityListComponent_cdk_tree_node_4_Template,18,14,"cdk-tree-node",3)(5,CommunityListComponent_cdk_tree_node_5_Template,10,4,"cdk-tree-node",4),core.k0s()),2&rf&&(core.Y8G("ngIf",core.bMT(1,7,ctx.dataSource.loading$)&&!ctx.loadingNode),core.R7$(2),core.Y8G("dataSource",ctx.dataSource)("treeControl",ctx.treeControl)("trackBy",ctx.trackBy),core.R7$(),core.Y8G("cdkTreeNodeDefWhen",ctx.isShowMore),core.R7$(),core.Y8G("cdkTreeNodeDefWhen",ctx.hasChild),core.R7$(),core.Y8G("cdkTreeNodeDefWhen",!(ctx.hasChild&&ctx.isShowMore)))},dependencies:[common.bT,themed_loading_component.v,tree.Dc,tree.Sz,tree.aI,tree.Hy,tree.NL,tree.xn,router.Wk,truncatable_component.d,truncatable_part_component.W,common.Jj,ngx_translate_core.h,ngx_translate_core.D9],styles:[".fa-chevron-right:before{display:block;width:16px}"]})}return CommunityListComponent2})()},14018:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ThemedCommunityListComponent});var _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31260),_angular_core__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(70923),__webpack_require__(68014));const _c0=["*"];function ThemedCommunityListComponent_ng_template_0_Template(rf,ctx){}let ThemedCommunityListComponent=(()=>{class ThemedCommunityListComponent2 extends _shared_theme_support_themed_component__WEBPACK_IMPORTED_MODULE_0__.J{getComponentName(){return"CommunityListComponent"}importThemedComponent(themeName){return __webpack_require__(89367)(`./${themeName}/app/community-list-page/community-list/community-list.component`)}importUnthemedComponent(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,70923))}static#_=this.\u0275fac=(()=>{let \u0275ThemedCommunityListComponent_BaseFactory;return function(t){return(\u0275ThemedCommunityListComponent_BaseFactory||(\u0275ThemedCommunityListComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_2__.xGo(ThemedCommunityListComponent2)))(t||ThemedCommunityListComponent2)}})();static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_2__.VBU({type:ThemedCommunityListComponent2,selectors:[["ds-community-list"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_2__.Vt3,_angular_core__WEBPACK_IMPORTED_MODULE_2__.aNF],ngContentSelectors:_c0,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NAR(),_angular_core__WEBPACK_IMPORTED_MODULE_2__.DNE(0,ThemedCommunityListComponent_ng_template_0_Template,0,0,"ng-template",null,0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.C5r),_angular_core__WEBPACK_IMPORTED_MODULE_2__.j41(2,"div",null,1),_angular_core__WEBPACK_IMPORTED_MODULE_2__.SdG(4),_angular_core__WEBPACK_IMPORTED_MODULE_2__.k0s())},encapsulation:2})}return ThemedCommunityListComponent2})()},21870:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>i18nBreadcrumbResolver});var core=__webpack_require__(68014),empty_util=__webpack_require__(77028),route_utils=__webpack_require__(39609),cjs=__webpack_require__(74785),breadcrumb_model=__webpack_require__(96622);let I18nBreadcrumbsService=(()=>{class I18nBreadcrumbsService2{getBreadcrumbs(key,url){return(0,cjs.of)([new breadcrumb_model.Q(key+".breadcrumbs",url)])}static#_=this.\u0275fac=function(t){return new(t||I18nBreadcrumbsService2)};static#_2=this.\u0275prov=core.jDH({token:I18nBreadcrumbsService2,factory:I18nBreadcrumbsService2.\u0275fac,providedIn:"root"})}return I18nBreadcrumbsService2})();const i18nBreadcrumbResolver=(route,state,breadcrumbService=(0,core.WQX)(I18nBreadcrumbsService))=>{const key=route.data.breadcrumbKey;if((0,empty_util.Tn)(key))throw new Error('You provided an i18nBreadcrumbResolver for url "'+route.url+"\" but no breadcrumbKey in the route's data");return{provider:breadcrumbService,key,url:(0,route_utils.F)(route)}}},24768:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./custom/app/community-list-page/community-list-page.component":[25594,5594]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id=24768,module.exports=webpackAsyncContext},89367:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./custom/app/community-list-page/community-list/community-list.component":[51811,1811]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id=89367,module.exports=webpackAsyncContext}};