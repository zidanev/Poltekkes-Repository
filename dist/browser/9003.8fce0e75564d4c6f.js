"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9003],{79003:(F,D,t)=>{t.r(D),t.d(D,{ResourcePolicyDataService:()=>V});var u=t(27691),v=t(47947),p=t(1703),i=t(72683),B=t(79224),l=t(45122),o=t(99120),K=t(25718),R=t(45926),I=t(83951),L=t(2887),T=t(2868),A=t(12350),C=t(82114),P=t(36705),W=t(70210),f=t(9843),y=t(92312),g=t(31363),m=t(7172),U=t(25744),x=t(12007),h=t(53107);let V=(()=>{class d extends L.W{constructor(e,s,_,a,n,r,c,E){super("resourcepolicies",e,s,_,a),this.requestService=e,this.rdbService=s,this.objectCache=_,this.halService=a,this.notificationsService=n,this.comparator=r,this.ePersonService=c,this.groupService=E,this.searchByEPersonMethod="eperson",this.searchByGroupMethod="group",this.searchByResourceMethod="resource",this.createData=new R.V(this.linkPath,e,s,_,a,n,this.responseMsToLive),this.searchData=new A.X(this.linkPath,e,s,_,a,this.responseMsToLive),this.patchData=new T.n(this.linkPath,e,s,_,a,r,this.responseMsToLive,this.constructIdEndpoint),this.deleteData=new I.I(this.linkPath,e,s,_,a,n,this.responseMsToLive,this.constructIdEndpoint)}create(e,s,_,a){const n=[];return n.push(new o.x("resource",s)),(0,i.hj)(_)?n.push(new o.x("eperson",_)):(0,i.hj)(a)&&n.push(new o.x("group",a)),this.createData.create(e,...n)}delete(e){return this.deleteData.delete(e).pipe((0,x.qD)(),(0,v.T)(s=>s.hasSucceeded))}update(e){return this.patchData.update(e)}getDefaultAccessConditionsFor(e,s){return this.findListByHref(e._links.defaultAccessConditions.href,s)}searchByEPerson(e,s,_=!0,a=!0,...n){const r=new P._;return r.searchParams=[new o.x("uuid",e)],(0,i.hj)(s)&&r.searchParams.push(new o.x("resource",s)),this.searchData.searchBy(this.searchByEPersonMethod,r,_,a,...n)}searchByGroup(e,s,_=!0,a=!0,...n){const r=new P._;return r.searchParams=[new o.x("uuid",e)],(0,i.hj)(s)&&r.searchParams.push(new o.x("resource",s)),this.searchData.searchBy(this.searchByGroupMethod,r,_,a,...n)}searchByResource(e,s,_=!0,a=!0,...n){const r=new P._;return r.searchParams=[new o.x("uuid",e)],(0,i.hj)(s)&&r.searchParams.push(new o.x("action",s)),this.searchData.searchBy(this.searchByResourceMethod,r,_,a,...n)}updateTarget(e,s,_,a){const r=("eperson"===a?this.ePersonService:this.groupService).getIDHrefObs(_),c=Object.create({});let E=new u.Lr;E=E.append("Content-Type","text/uri-list"),c.headers=E;const M=this.requestService.generateRequestId();return r.pipe((0,p.$)()).subscribe(j=>{const O=new W.v_(M,s+"/"+a,j,c);Object.assign(O,{getResponseParser:()=>y.M}),this.requestService.send(O)}),this.rdbService.buildFromRequestUUIDAndAwait(M,()=>this.invalidateByHref(s))}static#s=this.\u0275fac=function(s){return new(s||d)(h.KVO(f.B),h.KVO(l.o),h.KVO(K.$),h.KVO(U.Y),h.KVO(B.I),h.KVO(C.Y),h.KVO(g.EPersonDataService),h.KVO(m.GroupDataService))};static#t=this.\u0275prov=h.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);