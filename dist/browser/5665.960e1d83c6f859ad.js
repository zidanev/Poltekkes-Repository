"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5665],{75665:(V,M,s)=>{s.r(M),s.d(M,{SubscriptionsDataService:()=>S});var l=s(37610),a=s(47947),o=s(22867),K=s(41483),T=s(66645),v=s(86856),I=s(83116),U=s(45122),D=s(99120),p=s(25718),L=s(83951),A=s(2887),R=s(12350),W=s(24632),u=s(36705),B=s(70210),f=s(9843),C=s(25744),P=s(12007),c=s(72683),m=s(79224),E=s(24106),r=s(53107),g=s(27691),y=s(73958);let S=(()=>{class i extends A.W{constructor(_,e,n,t,d,$,h,O,j){super("subscriptions",t,d,h,O),this.comparator=_,this.http=e,this.notificationsService=n,this.requestService=t,this.rdbService=d,this.store=$,this.objectCache=h,this.halService=O,this.nameService=j,this.findByEpersonLinkPath="findByEPerson",this.searchData=new R.X(this.linkPath,t,d,h,O,this.responseMsToLive),this.deleteData=new L.I(this.linkPath,t,d,h,O,n,this.responseMsToLive,this.constructIdEndpoint)}getSubscriptionsByPersonDSO(_,e){const n=Object.assign(new u._,{searchParams:[new D.x("resource",e),new D.x("eperson_id",_)]});return this.searchData.searchBy("findByEPersonAndDso",n,!1,!0)}createSubscription(_,e,n){return this.halService.getEndpoint(this.linkPath).pipe((0,c.VT)(),(0,l.s)(1),(0,a.T)(t=>`${t}?resource=${n}&eperson_id=${e}`),(0,a.T)(t=>new B.QU(this.requestService.generateRequestId(),t,JSON.stringify(_))),(0,v.w$)(this.requestService),(0,o.n)(t=>this.rdbService.buildFromRequestUUID(t.uuid)),(0,P.qD)())}updateSubscription(_,e,n){return this.halService.getEndpoint(this.linkPath).pipe((0,c.VT)(),(0,l.s)(1),(0,a.T)(t=>`${t}/${_.id}?resource=${n}&eperson_id=${e}`),(0,a.T)(t=>new B.v_(this.requestService.generateRequestId(),t,JSON.stringify(_))),(0,v.w$)(this.requestService),(0,o.n)(t=>this.rdbService.buildFromRequestUUID(t.uuid)),(0,P.qD)())}deleteSubscription(_){return this.halService.getEndpoint(this.linkPath).pipe((0,K.p)(e=>(0,c.hj)(e)),(0,T.F)(),(0,o.n)(e=>this.deleteData.delete(_)),(0,P.qD)())}findAllSubscriptions(_){return this.findAllData.findAll(_,!0,!0,(0,E.s)("resource"),(0,E.s)("eperson"))}findByEPerson(_,e){const n=Object.assign(new u._,e,{searchParams:[new D.x("uuid",_)]});return this.getEndpoint().pipe((0,a.T)(t=>`${t}/search/${this.findByEpersonLinkPath}`),(0,o.n)(t=>this.findListByHref(t,n,!1,!0,(0,E.s)("resource"),(0,E.s)("eperson"))))}static#s=this.\u0275fac=function(e){return new(e||i)(r.KVO(W.j),r.KVO(g.Qq),r.KVO(m.I),r.KVO(f.B),r.KVO(U.o),r.KVO(y.il),r.KVO(p.$),r.KVO(C.Y),r.KVO(I.f))};static#t=this.\u0275prov=r.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);