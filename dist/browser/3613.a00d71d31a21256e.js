(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[3613],{72553:(v,u,t)=>{"use strict";t.d(u,{Q:()=>i});class i{constructor(r,l){this.text=r,this.url=l}}},32588:(v,u,t)=>{"use strict";t.d(u,{S:()=>f});var i=t(53107),m=t(72683),r=t(67044),l=t(63016),e=t(72553);let b=(()=>{class s{getBreadcrumbs(h,o){return(0,l.of)([new e.Q(h+".breadcrumbs",o)])}static#t=this.\u0275fac=function(o){return new(o||s)};static#s=this.\u0275prov=i.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();const f=(s,c,h=(0,i.WQX)(b))=>{const o=s.data.breadcrumbKey;if((0,m.Tn)(o))throw new Error('You provided an i18nBreadcrumbResolver for url "'+s.url+"\" but no breadcrumbKey in the route's data");return{provider:h,key:o,url:(0,r.F)(s)}}},25716:(v,u,t)=>{"use strict";t.r(u),t.d(u,{SubmissionSubmitComponent:()=>o});var i=t(71217),m=t(22867),r=t(88627),l=t(17584),e=t(12007),a=t(72683),b=t(79224),f=t(64340),s=t(53107),c=t(95968),h=t(69685);let o=(()=>{class d{constructor(n,E,p,C,S,P,O,U){this.changeDetectorRef=n,this.notificationsService=E,this.router=p,this.itemDataService=C,this.submissionService=S,this.translate=P,this.viewContainerRef=O,this.route=U,this.itemLink$=new i.t(void 0),this.subs=[],this.route.queryParams.subscribe(M=>{this.collectionParam=M.collection})}ngOnInit(){this.subs.push(this.submissionService.createSubmission(this.collectionParam).subscribe(n=>{(0,a.Pe)(n)&&((0,a.Im)(n)?(this.notificationsService.info(null,this.translate.get("submission.general.cannot_submit")),this.router.navigate(["/mydspace"])):this.router.navigate(["/workspaceitems",n.id,"edit"],{replaceUrl:!0}))}),this.itemLink$.pipe((0,a.VT)(),(0,m.n)(n=>this.itemDataService.findByHref(n)),(0,e.v7)(),(0,r.B)(300)).subscribe(n=>{this.item=n.payload,this.changeDetectorRef.detectChanges()}))}ngOnDestroy(){this.subs.filter(n=>(0,a.a4)(n)).forEach(n=>n.unsubscribe()),this.viewContainerRef.clear(),this.changeDetectorRef.markForCheck()}static#t=this.\u0275fac=function(E){return new(E||d)(s.rXU(s.gRc),s.rXU(b.I),s.rXU(c.Ix),s.rXU(l.ItemDataService),s.rXU(f.E),s.rXU(h.c$),s.rXU(s.c1b),s.rXU(c.nX))};static#s=this.\u0275cmp=s.VBU({type:d,selectors:[["ds-base-submission-submit"]],standalone:!0,features:[s.aNF],decls:0,vars:0,template:function(E,p){}})}return d})()},73613:(v,u,t)=>{"use strict";t.r(u),t.d(u,{ROUTES:()=>s});var i=t(21709),m=t(32588),r=t(21124),e=(t(25716),t(53107));const a=["*"];function b(c,h){}const s=[{canActivate:[i.t],path:"",pathMatch:"full",component:(()=>{class c extends r.J{getComponentName(){return"SubmissionSubmitComponent"}importThemedComponent(o){return t(72504)(`./${o}/app/submission/submit/submission-submit.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,25716))}static#t=this.\u0275fac=(()=>{let o;return function(D){return(o||(o=e.xGo(c)))(D||c)}})();static#s=this.\u0275cmp=e.VBU({type:c,selectors:[["ds-submission-submit"]],standalone:!0,features:[e.Vt3,e.aNF],ngContentSelectors:a,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(d,D){1&d&&(e.NAR(),e.DNE(0,b,0,0,"ng-template",null,0,e.C5r),e.j41(2,"div",null,1),e.SdG(4),e.k0s())},encapsulation:2})}return c})(),resolve:{breadcrumb:m.S},data:{title:"submission.submit.title",breadcrumbKey:"submission.submit"}}]},72504:(v,u,t)=>{var i={"./custom/app/submission/submit/submission-submit.component":[3131,3131]};function m(r){if(!t.o(i,r))return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a});var l=i[r],e=l[0];return t.e(l[1]).then(()=>t(e))}m.keys=()=>Object.keys(i),m.id=72504,v.exports=m}}]);