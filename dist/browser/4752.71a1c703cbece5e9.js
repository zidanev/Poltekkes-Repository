"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4752],{44752:(L,d,a)=>{a.r(d),a.d(d,{MetadataSchemaDataService:()=>I});var D=a(82040),h=a(72683),l=a(79224),M=a(45122),O=a(25718),P=a(25744),o=a(45926),r=a(83951),B=a(94937),K=a(2887),f=a(24265),A=a(9843),n=a(53107);let I=(()=>{class i extends K.W{constructor(t,s,_,e,E){super("metadataschemas",t,s,_,e),this.requestService=t,this.rdbService=s,this.objectCache=_,this.halService=e,this.notificationsService=E,this.createData=new o.V(this.linkPath,t,s,_,e,E,this.responseMsToLive),this.putData=new f.W(this.linkPath,t,s,_,e,this.responseMsToLive),this.deleteData=new r.I(this.linkPath,t,s,_,e,E,this.responseMsToLive,this.constructIdEndpoint),this.findAllData=new B.H(this.linkPath,t,s,_,e,this.responseMsToLive)}createOrUpdateMetadataSchema(t){return(0,h.a4)(t.id)?this.putData.put(t):this.createData.create(t)}clearRequests(){return this.getBrowseEndpoint().pipe((0,D.M)(t=>this.requestService.removeByHrefSubstring(t)))}findAll(t,s,_,...e){return this.findAllData.findAll(t,s,_,...e)}delete(t,s){return this.deleteData.delete(t,s)}deleteByHref(t,s){return this.deleteData.deleteByHref(t,s)}static#t=this.\u0275fac=function(s){return new(s||i)(n.KVO(A.B),n.KVO(M.o),n.KVO(O.$),n.KVO(P.Y),n.KVO(l.I))};static#a=this.\u0275prov=n.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);