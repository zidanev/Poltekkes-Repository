(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4797],{78020:(I,u,t)=>{"use strict";t.d(u,{G:()=>D});var r=t(54460),e=t(53107),a=t(63016),l=t(22867),p=t(94622),c=t(86779),P=t(72683),E=t(81455);let D=(()=>{class h{constructor(m,o,n,T){this.linkHeadService=m,this.notifyInfoService=o,this.responseService=n,this.platformId=T,this.inboxLinks=[],this.subs=[]}ngOnInit(){this.subs.push(this.notifyInfoService.isCoarConfigEnabled().pipe((0,l.n)(m=>m?this.notifyInfoService.getCoarLdnLocalInboxUrls():(0,a.of)([]))).subscribe(m=>{m.length>0&&this.initPageLinks(m)}))}ngOnDestroy(){this.subs.forEach(m=>m.unsubscribe()),this.inboxLinks.forEach(m=>{this.linkHeadService.removeTag(`href='${m.href}'`)})}initPageLinks(m){const o=this.notifyInfoService.getInboxRelationLink();let n="";m.forEach(T=>{const R={href:T,rel:o};this.inboxLinks.push(R),this.linkHeadService.addTag(R),n=n+((0,P.hj)(n)?", ":"")+`<${T}> ; rel="${o}"`}),(0,r.Vy)(this.platformId)&&this.responseService.setHeader("Link",n)}static#t=this.\u0275fac=function(o){return new(o||h)(e.rXU(E.m),e.rXU(p.P),e.rXU(c.w),e.rXU(e.Agw))};static#e=this.\u0275cmp=e.VBU({type:h,selectors:[["ds-home-coar"]],standalone:!0,features:[e.aNF],decls:0,vars:0,template:function(o,n){},encapsulation:2})}return h})()},70048:(I,u,t)=>{"use strict";t.d(u,{v:()=>p});var r=t(21124),e=t(53107);const a=["*"];function l(c,P){}let p=(()=>{class c extends r.J{getComponentName(){return"HomeNewsComponent"}importThemedComponent(E){return t(56564)(`./${E}/app/home-page/home-news/home-news.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,25540))}static#t=this.\u0275fac=(()=>{let E;return function(h){return(E||(E=e.xGo(c)))(h||c)}})();static#e=this.\u0275cmp=e.VBU({type:c,selectors:[["ds-home-news"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:a,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(D,h){1&D&&(e.NAR(),e.DNE(0,l,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return c})()},34797:(I,u,t)=>{"use strict";t.r(u),t.d(u,{ROUTES:()=>M});var r=t(43515),e=t(53107),a=t(37610),l=t(80592),c=t(21124);t(63102);const E=["*"];function D(m,o){}const M=[{path:"",component:(()=>{class m extends c.J{getComponentName(){return"HomePageComponent"}importThemedComponent(n){return t(78010)(`./${n}/app/home-page/home-page.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,63102))}static#t=this.\u0275fac=(()=>{let n;return function(R){return(n||(n=e.xGo(m)))(R||m)}})();static#e=this.\u0275cmp=e.VBU({type:m,selectors:[["ds-home-page"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:E,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(T,R){1&T&&(e.NAR(),e.DNE(0,D,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return m})(),pathMatch:"full",data:{title:"home.title",menu:{public:[{id:"statistics_site",active:!0,visible:!0,index:2,model:{type:r.x.LINK,text:"menu.section.statistics",link:"statistics"}}]}},resolve:{site:(m,o,n=(0,e.WQX)(l.SiteDataService))=>n.find().pipe((0,a.s)(1))}}]},63102:(I,u,t)=>{"use strict";t.r(u),t.d(u,{HomePageComponent:()=>g});var r=t(54460),e=t(69685),a=t(47947),l=t(18062),p=t(3497),c=t(39839),P=t(85941),E=t(89096),D=t(78020),h=t(70048),M=t(76418),m=t(27860),o=t(53107),n=t(95968);function T(s,C){1&s&&o.eu8(0,5)}function R(s,C){if(1&s&&(o.j41(0,"ds-configuration-search-page",3),o.DNE(1,T,1,0,"ng-container",4),o.k0s()),2&s){o.XpG();const _=o.sdS(6);o.Y8G("sideBarWidth",3)("showViewModes",!1)("searchEnabled",!1)("inPlaceSearch",!1)("showScopeSelector",!1),o.R7$(),o.Y8G("ngTemplateOutlet",_)}}function i(s,C){1&s&&o.eu8(0)}function B(s,C){if(1&s&&(o.j41(0,"div",6),o.DNE(1,i,1,0,"ng-container",7),o.k0s()),2&s){o.XpG();const _=o.sdS(6);o.R7$(),o.Y8G("ngTemplateOutlet",_)}}function A(s,C){if(1&s&&(o.qex(0),o.nrm(1,"ds-view-tracker",10),o.bVm()),2&s){const _=C.ngIf;o.R7$(),o.Y8G("object",_)}}function f(s,C){1&s&&o.nrm(0,"ds-recent-item-list")}function U(s,C){if(1&s&&(o.DNE(0,A,2,1,"ng-container",8),o.nI1(1,"async"),o.nrm(2,"ds-search-form",9),o.nI1(3,"translate"),o.nrm(4,"ds-top-level-community-list"),o.DNE(5,f,1,0,"ds-recent-item-list",8)),2&s){const _=o.XpG();o.Y8G("ngIf",o.bMT(1,4,_.site$)),o.R7$(2),o.Y8G("inPlaceSearch",!1)("searchPlaceholder",o.bMT(3,6,"home.search-form.placeholder")),o.R7$(3),o.Y8G("ngIf",_.recentSubmissionspageSize>0)}}let g=(()=>{class s{constructor(_,O){this.appConfig=_,this.route=O,this.recentSubmissionspageSize=this.appConfig.homePage.recentSubmissions.pageSize,this.showDiscoverFilters=this.appConfig.homePage.showDiscoverFilters}ngOnInit(){this.site$=this.route.data.pipe((0,a.T)(_=>_.site))}static#t=this.\u0275fac=function(O){return new(O||s)(o.rXU(l.vQ),o.rXU(n.nX))};static#e=this.\u0275cmp=o.VBU({type:s,selectors:[["ds-base-home-page"]],standalone:!0,features:[o.aNF],decls:7,vars:2,consts:[["homeContent",""],[3,"sideBarWidth","showViewModes","searchEnabled","inPlaceSearch","showScopeSelector",4,"ngIf"],["class","container",4,"ngIf"],[3,"sideBarWidth","showViewModes","searchEnabled","inPlaceSearch","showScopeSelector"],["searchContentTop","",4,"ngTemplateOutlet"],["searchContentTop",""],[1,"container"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"inPlaceSearch","searchPlaceholder"],[3,"object"]],template:function(O,L){1&O&&(o.nrm(0,"ds-home-coar")(1,"ds-home-news"),o.DNE(2,R,2,6,"ds-configuration-search-page",1)(3,B,2,1,"div",2),o.nrm(4,"ds-suggestions-popup"),o.DNE(5,U,6,8,"ng-template",null,0,o.C5r)),2&O&&(o.R7$(2),o.Y8G("ngIf",L.showDiscoverFilters),o.R7$(),o.Y8G("ngIf",!L.showDiscoverFilters))},dependencies:[h.v,r.T3,r.bT,E.H,P.d,m.z,M.Y,r.Jj,e.h,e.D9,p.t,c.M,D.G],styles:["@media (max-width: 991.98px){ds-themed-configuration-search-page[_ngcontent-%COMP%] + .container[_ngcontent-%COMP%]{width:100%;max-width:none}}"]})}return s})()},76418:(I,u,t)=>{"use strict";t.d(u,{Y:()=>L});var r=t(54460),e=t(53107),a=t(69685),l=t(18062),p=t(86722),c=t(89632),P=t(95438),E=t(69509),D=t(12007),h=t(67811),M=t(3631),m=t(88842),o=t(2566),n=t(96606),T=t(21548),R=t(47637),i=t(67899),B=t(63496),A=t(24106),f=t(8040),U=t(63524);function g(v,y){if(1&v&&(e.j41(0,"div",7),e.nrm(1,"ds-listable-object-component-loader",8),e.k0s()),2&v){const d=y.$implicit,S=e.XpG(3);e.R7$(),e.Y8G("object",d)("viewMode",S.viewMode)}}function s(v,y){if(1&v){const d=e.RV6();e.j41(0,"div",3),e.nrm(1,"div",4),e.j41(2,"h2"),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.DNE(5,g,2,2,"div",5),e.j41(6,"button",6),e.bIt("click",function(){e.eBV(d);const W=e.XpG(2);return e.Njj(W.onLoadMore())}),e.EFF(7),e.nI1(8,"translate"),e.k0s()()}if(2&v){const d=e.XpG().ngVar,S=e.XpG();e.Y8G("ngClass",S.placeholderFontClass)("@fadeIn",void 0),e.R7$(3),e.SpI(" ",e.bMT(4,5,"home.recent-submissions.head"),""),e.R7$(2),e.Y8G("ngForOf",null==d||null==d.payload?null:d.payload.page),e.R7$(2),e.SpI(" ",e.bMT(8,7,"vocabulary-treeview.load-more")," ...")}}function C(v,y){1&v&&(e.nrm(0,"ds-error",9),e.nI1(1,"translate")),2&v&&e.FS9("message",e.bMT(1,1,"error.recent-submissions"))}function _(v,y){1&v&&(e.nrm(0,"ds-loading",9),e.nI1(1,"translate")),2&v&&e.FS9("message",e.bMT(1,1,"loading.recent-submissions"))}function O(v,y){if(1&v&&(e.qex(0),e.DNE(1,s,9,9,"div",1)(2,C,2,3,"ds-error",2)(3,_,2,3,"ds-loading",2),e.bVm()),2&v){const d=y.ngVar;e.R7$(),e.Y8G("ngIf",(null==d?null:d.hasSucceeded)&&(null==d||null==d.payload?null:d.payload.page.length)>0),e.R7$(),e.Y8G("ngIf",null==d?null:d.hasFailed),e.R7$(),e.Y8G("ngIf",!d||d.isLoading)}}let L=(()=>{class v{constructor(d,S,W,x,K,F){this.searchService=d,this.paginationService=S,this.searchConfigurationService=W,this.elementRef=x,this.appConfig=K,this.platformId=F,this.viewMode=m.n.ListElement,this.paginationConfig=Object.assign(new i.W,{id:"hp",pageSize:p.c.homePage.recentSubmissions.pageSize,currentPage:1,maxSize:1}),this.sortConfig=new c.z(p.c.homePage.recentSubmissions.sortField,c.U.DESC)}ngOnInit(){const d=[];this.appConfig.browseBy.showThumbnails&&d.push((0,A.s)("thumbnail")),this.itemRD$=this.searchService.search(new B.C({pagination:this.paginationConfig,dsoTypes:[E.W.ITEM],sort:this.sortConfig}),void 0,void 0,void 0,...d).pipe((0,D.jY)())}ngOnDestroy(){this.paginationService.clearPagination(this.paginationConfig.id)}onLoadMore(){this.paginationService.updateRouteWithUrl(this.searchConfigurationService.paginationID,["search"],{sortField:p.c.homePage.recentSubmissions.sortField,sortDirection:"DESC",page:1})}get placeholderFontClass(){return void 0===this._placeholderFontClass&&(this._placeholderFontClass=(0,r.UE)(this.platformId)?(0,f.F)(this.elementRef.nativeElement.offsetWidth):"hide-placeholder-text"),this._placeholderFontClass}static#t=this.\u0275fac=function(S){return new(S||v)(e.rXU(h.S),e.rXU(P.m),e.rXU(M.g),e.rXU(e.aKT),e.rXU(l.vQ),e.rXU(e.Agw))};static#e=this.\u0275cmp=e.VBU({type:v,selectors:[["ds-recent-item-list"]],standalone:!0,features:[e.aNF],decls:2,vars:3,consts:[[4,"ngVar"],["class","mt-4",3,"ngClass",4,"ngIf"],[3,"message",4,"ngIf"],[1,"mt-4",3,"ngClass"],[1,"d-flex","flex-row","border-bottom","mb-4","pb-4"],["class","my-4",4,"ngFor","ngForOf"],[1,"btn","btn-primary","search-button","mt-4",3,"click"],[1,"my-4"],[1,"pb-4",3,"object","viewMode"],[3,"message"]],template:function(S,W){1&S&&(e.DNE(0,O,4,3,"ng-container",0),e.nI1(1,"async")),2&S&&e.Y8G("ngVar",e.bMT(1,1,W.itemRD$))},dependencies:[U.r,r.bT,r.YU,r.pM,R.v,n.A,T.v,r.Jj,a.h,a.D9],data:{animation:[o.qG,o.Ws]},changeDetection:0})}return v})()},27860:(I,u,t)=>{"use strict";t.d(u,{z:()=>c});var r=t(21124),a=(t(96696),t(53107));const l=["*"];function p(P,E){}let c=(()=>{class P extends r.J{getComponentName(){return"TopLevelCommunityListComponent"}importThemedComponent(D){return t(30068)(`./${D}/app/home-page/top-level-community-list/top-level-community-list.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,96696))}static#t=this.\u0275fac=(()=>{let D;return function(M){return(D||(D=a.xGo(P)))(M||P)}})();static#e=this.\u0275cmp=a.VBU({type:P,selectors:[["ds-top-level-community-list"]],standalone:!0,features:[a.Vt3,a.aNF],ngContentSelectors:l,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(h,M){1&h&&(a.NAR(),a.DNE(0,p,0,0,"ng-template",null,0,a.C5r),a.j41(2,"div",null,1),a.SdG(4),a.k0s())},encapsulation:2})}return P})()},96696:(I,u,t)=>{"use strict";t.r(u),t.d(u,{TopLevelCommunityListComponent:()=>g});var r=t(54460),e=t(69685),a=t(71217),l=t(76627),p=t(22867),c=t(18062),P=t(89632),E=t(63710),D=t(95438),h=t(2566),M=t(72683),m=t(96606),o=t(21548),n=t(13943),T=t(67899),R=t(63524),i=t(53107);function B(s,C){if(1&s&&(i.j41(0,"div")(1,"h2"),i.EFF(2),i.nI1(3,"translate"),i.k0s(),i.j41(4,"p",3),i.EFF(5),i.nI1(6,"translate"),i.k0s(),i.nrm(7,"ds-viewable-collection",4),i.nI1(8,"async"),i.k0s()),2&s){const _=i.XpG(2);i.R7$(2),i.SpI(" ",i.bMT(3,6,"home.top-level-communities.head")," "),i.R7$(3),i.JRh(i.bMT(6,8,"home.top-level-communities.help")),i.R7$(2),i.Y8G("config",_.config)("sortConfig",_.sortConfig)("objects",i.bMT(8,10,_.communitiesRD$))("hideGear",!0)}}function A(s,C){1&s&&(i.nrm(0,"ds-error",5),i.nI1(1,"translate")),2&s&&i.FS9("message",i.bMT(1,1,"error.top-level-communites"))}function f(s,C){1&s&&(i.nrm(0,"ds-loading",5),i.nI1(1,"translate")),2&s&&i.FS9("message",i.bMT(1,1,"loading.top-level-communities"))}function U(s,C){if(1&s&&(i.qex(0),i.DNE(1,B,9,12,"div",1)(2,A,2,3,"ds-error",2)(3,f,2,3,"ds-loading",2),i.bVm()),2&s){const _=C.ngVar;i.R7$(),i.Y8G("ngIf",null==_?null:_.hasSucceeded),i.R7$(),i.Y8G("ngIf",null==_?null:_.hasFailed),i.R7$(),i.Y8G("ngIf",null==_?null:_.isLoading)}}let g=(()=>{class s{constructor(_,O,L){this.appConfig=_,this.cds=O,this.paginationService=L,this.communitiesRD$=new a.t({}),this.pageId="tl",this.config=new T.W,this.config.id=this.pageId,this.config.pageSize=_.homePage.topLevelCommunityList.pageSize,this.config.currentPage=1,this.sortConfig=new P.z("dc.title",P.U.ASC)}ngOnInit(){this.initPage()}initPage(){const _=this.paginationService.getCurrentPagination(this.config.id,this.config),O=this.paginationService.getCurrentSort(this.config.id,this.sortConfig);this.currentPageSubscription=(0,l.z)([_,O]).pipe((0,p.n)(([L,v])=>this.cds.findTop({currentPage:L.currentPage,elementsPerPage:L.pageSize,sort:{field:v.field,direction:v.direction}}))).subscribe(L=>{this.communitiesRD$.next(L)})}unsubscribe(){(0,M.a4)(this.currentPageSubscription)&&this.currentPageSubscription.unsubscribe()}ngOnDestroy(){this.unsubscribe(),this.paginationService.clearPagination(this.config.id)}static#t=this.\u0275fac=function(O){return new(O||s)(i.rXU(c.vQ),i.rXU(E.CommunityDataService),i.rXU(D.m))};static#e=this.\u0275cmp=i.VBU({type:s,selectors:[["ds-base-top-level-community-list"]],standalone:!0,features:[i.aNF],decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],[3,"message",4,"ngIf"],[1,"lead"],[3,"config","sortConfig","objects","hideGear"],[3,"message"]],template:function(O,L){1&O&&(i.DNE(0,U,4,3,"ng-container",0),i.nI1(1,"async")),2&O&&i.Y8G("ngVar",i.bMT(1,1,L.communitiesRD$))},dependencies:[R.r,r.bT,n.h,m.A,o.v,r.Jj,e.h,e.D9],data:{animation:[h.Ws]},changeDetection:0})}return s})()},3497:(I,u,t)=>{"use strict";t.d(u,{t:()=>A});var r=t(71204),e=t(54460),a=t(95968),l=t(69685),p=t(18447),c=t(76627),P=t(63016),E=t(37610),D=t(5424),h=t(5985),M=t(72683),m=t(11816),o=t(12571),n=t(53107);function T(f,U){if(1&f&&(n.j41(0,"div"),n.nrm(1,"div",13),n.nI1(2,"translate"),n.EFF(3),n.nI1(4,"translate"),n.j41(5,"a",14),n.EFF(6),n.nI1(7,"translate"),n.k0s()()),2&f){const g=n.XpG().$implicit,s=n.XpG(3);n.R7$(),n.Y8G("innerHTML",n.i5U(2,4,"notification.suggestion",s.getNotificationSuggestionInterpolation(g)),n.npT),n.R7$(2),n.SpI(" ",n.bMT(4,7,"notification.suggestion.please")," "),n.R7$(2),n.Y8G("routerLink",s.getNotificationSuggestionInterpolation(g).url),n.R7$(),n.SpI(" ",n.bMT(7,9,"notification.suggestion.review")," ")}}function R(f,U){if(1&f&&(n.qex(0,12),n.DNE(1,T,8,11,"div",10),n.bVm()),2&f){const g=U.$implicit;n.R7$(),n.Y8G("ngIf",g.total>0)}}function i(f,U){if(1&f&&(n.qex(0),n.DNE(1,R,2,1,"ng-container",11),n.bVm()),2&f){const g=U.ngIf;n.R7$(),n.Y8G("ngForOf",g)}}function B(f,U){if(1&f){const g=n.RV6();n.j41(0,"div",1)(1,"div",2)(2,"button",3),n.bIt("click",function(){n.eBV(g);const C=n.XpG();return n.Njj(C.removePopup())}),n.j41(3,"span",4),n.EFF(4,"\xd7"),n.k0s()(),n.j41(5,"div",5)(6,"div",6)(7,"div",7),n.nrm(8,"i",8),n.k0s()(),n.j41(9,"div",9),n.DNE(10,i,2,1,"ng-container",10),n.nI1(11,"async"),n.k0s()()()()}if(2&f){const g=n.XpG();n.R7$(10),n.Y8G("ngIf",n.bMT(11,1,g.suggestionsRD$))}}let A=(()=>{class f{constructor(g,s){this.suggestionTargetsStateService=g,this.suggestionsService=s,this.labelPrefix="notification."}ngOnInit(){this.initializePopup()}initializePopup(){const g=new p.B;this.subscription=(0,c.z)([this.suggestionTargetsStateService.getCurrentUserSuggestionTargets().pipe((0,E.s)(2)),this.suggestionTargetsStateService.hasUserVisitedSuggestions()]).pipe((0,D.Q)(g)).subscribe(([s,C])=>{this.suggestionTargetsStateService.dispatchRefreshUserSuggestionsAction(),(0,M.hj)(s)&&(C||(this.suggestionsRD$=(0,P.of)(s),this.suggestionTargetsStateService.dispatchMarkUserSuggestionsAsVisitedAction(),g.next(null),g.complete()))})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}getNotificationSuggestionInterpolation(g){return this.suggestionsService.getNotificationSuggestionInterpolation(g)}removePopup(){this.suggestionsRD$=null}static#t=this.\u0275fac=function(s){return new(s||f)(n.rXU(m.x),n.rXU(o.F))};static#e=this.\u0275cmp=n.VBU({type:f,selectors:[["ds-suggestions-popup"]],standalone:!0,features:[n.aNF],decls:2,vars:3,consts:[["class","notifications-wrapper position-fixed top right",4,"ngIf"],[1,"notifications-wrapper","position-fixed","top","right"],["role","alert",1,"notification","alert","alert-success","alert-dismissible","m-3","shadow"],["type","button","data-dismiss","alert","aria-label","Close",1,"close","pt-0","pr-1","pl-0","pb-0",3,"click"],["aria-hidden","true"],[1,"d-flex","flex-row"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],[1,"notification-icon","d-flex","justify-content-center"],[1,"fas","fa-2x","fa-check-circle"],[1,"d-flex","flex-column","justify-content-center","align-content-stretch","text-left","p-2"],[4,"ngIf"],["class","alert alert-info",4,"ngFor","ngForOf"],[1,"alert","alert-info"],[3,"innerHTML"],[3,"routerLink"]],template:function(s,C){1&s&&(n.DNE(0,B,12,3,"div",0),n.nI1(1,"async")),2&s&&n.Y8G("ngIf",n.bMT(1,1,C.suggestionsRD$))},dependencies:[e.Jj,l.h,l.D9,a.Wk,e.bT,e.Sq],data:{animation:[(0,r.hZ)("enterLeave",[h.iP])]}})}return f})()},89096:(I,u,t)=>{"use strict";t.d(u,{H:()=>P});var r=t(37610),a=(t(47587),t(72683)),l=t(53107),p=t(80687),c=t(59153);let P=(()=>{class E{constructor(h,M){this.angulartics2=h,this.referrerService=M}ngOnInit(){this.sub=this.referrerService.getReferrer().pipe((0,r.s)(1)).subscribe(h=>{this.angulartics2.eventTrack.next({action:"page_view",properties:{object:this.object,referrer:h}})})}ngOnDestroy(){(0,a.a4)(this.sub)&&this.sub.unsubscribe()}static#t=this.\u0275fac=function(M){return new(M||E)(l.rXU(p.il),l.rXU(c.f))};static#e=this.\u0275cmp=l.VBU({type:E,selectors:[["ds-view-tracker"]],inputs:{object:"object"},standalone:!0,features:[l.aNF],decls:1,vars:0,template:function(M,m){1&M&&l.EFF(0,"\xa0\n")},styles:["[_nghost-%COMP%]{display:none}"]})}return E})()},56564:(I,u,t)=>{var r={"./custom/app/home-page/home-news/home-news.component":[52615,2615],"./dspace/app/home-page/home-news/home-news.component":[44966,4966],"./poltekkes/app/home-page/home-news/home-news.component":[86542]};function e(a){if(!t.o(r,a))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c});var l=r[a],p=l[0];return Promise.all(l.slice(1).map(t.e)).then(()=>t(p))}e.keys=()=>Object.keys(r),e.id=56564,I.exports=e},78010:(I,u,t)=>{var r={"./custom/app/home-page/home-page.component":[78253,8253]};function e(a){if(!t.o(r,a))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c});var l=r[a],p=l[0];return t.e(l[1]).then(()=>t(p))}e.keys=()=>Object.keys(r),e.id=78010,I.exports=e},30068:(I,u,t)=>{var r={"./custom/app/home-page/top-level-community-list/top-level-community-list.component":[40855,855]};function e(a){if(!t.o(r,a))return Promise.resolve().then(()=>{var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c});var l=r[a],p=l[0];return t.e(l[1]).then(()=>t(p))}e.keys=()=>Object.keys(r),e.id=30068,I.exports=e}}]);