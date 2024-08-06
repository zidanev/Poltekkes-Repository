"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5130,6041],{26041:(W,M,t)=>{t.r(M),t.d(M,{VersionDataService:()=>A});var L=t(76564),f=t(22867),O=t(47947),h=t(72683),P=t(24106),c=t(45122),K=t(25718),T=t(25744),l=t(12007),g=t(2887),C=t(2868),p=t(82114),U=t(9843),d=t(53107);let A=(()=>{class i extends g.W{constructor(r,n,v,a,I){super("versions",r,n,v,a),this.requestService=r,this.rdbService=n,this.objectCache=v,this.halService=a,this.comparator=I,this.patchData=new C.n(this.linkPath,r,n,v,a,I,this.responseMsToLive,this.constructIdEndpoint)}getHistoryFromVersion(r,n=!1,v=!0){return(0,h.hj)(r)?this.findById(r.id,n,v,(0,P.s)("versionhistory")).pipe((0,l.ak)(),(0,f.n)(a=>a.versionhistory),(0,l.ak)()):L.w}getHistoryIdFromVersion(r){return this.getHistoryFromVersion(r).pipe((0,O.T)(n=>n.id))}patch(r,n){return this.patchData.patch(r,n)}update(r){return this.patchData.update(r)}commitUpdates(r){this.patchData.commitUpdates(r)}createPatchFromCache(r){return this.patchData.createPatchFromCache(r)}static#t=this.\u0275fac=function(n){return new(n||i)(d.KVO(U.B),d.KVO(c.o),d.KVO(K.$),d.KVO(T.Y),d.KVO(p.Y))};static#s=this.\u0275prov=d.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},35130:(W,M,t)=>{t.r(M),t.d(M,{VersionHistoryDataService:()=>I});var L=t(27691),f=t(76627),O=t(63016),h=t(22867),P=t(47947),c=t(37610),K=t(25814),T=t(41483),l=t(72683),g=t(67899),C=t(63496),p=t(24106),U=t(45122),d=t(25718),A=t(25744),i=t(12007),y=t(2887),r=t(70210),n=t(9843),v=t(26041),a=t(53107);let I=(()=>{class u extends y.W{constructor(e,s,o,_,D){super("versionhistories",e,s,o,_),this.requestService=e,this.rdbService=s,this.objectCache=o,this.halService=_,this.versionDataService=D,this.versionsEndpoint="versions"}getBrowseEndpoint(e={},s){return this.halService.getEndpoint(this.linkPath)}getVersionsEndpoint(e){return this.getBrowseEndpoint().pipe((0,h.n)(s=>this.halService.getEndpoint(this.versionsEndpoint,`${s}/${e}`)))}getVersions(e,s,o=!0,_=!0,...D){const E=this.getVersionsEndpoint(e).pipe((0,P.T)(B=>s?s.toRestUrl(B):B));return this.versionDataService.findListByHref(E,void 0,o,_,...D)}createVersion(e,s){const o=this.requestService.generateRequestId(),_=Object.create({});let D=new L.Lr;return D=D.append("Content-Type","text/uri-list"),_.headers=D,this.halService.getEndpoint(this.versionsEndpoint).pipe((0,c.s)(1),(0,P.T)(E=>s?.length>0?`${E}?summary=${s}`:`${E}`),(0,K.I)(E=>(0,l.a4)(E))).subscribe(E=>{const B=new r.Qf(o,E,e,_);(0,l.a4)(this.responseMsToLive)&&(B.responseMsToLive=this.responseMsToLive),this.requestService.send(B)}),this.rdbService.buildFromRequestUUIDAndAwait(o,E=>(0,f.z)([this.requestService.setStaleByHrefSubstring(E.payload._links.self.href),this.requestService.setStaleByHrefSubstring(E.payload._links.versionhistory.href)])).pipe((0,i.qD)())}getLatestVersionFromHistory$(e){const s=Object.assign(new g.W,{id:"item-newest-version-options",currentPage:1,pageSize:1}),o=new C.C({pagination:s});return this.getVersions(e.id,o,!1,!0,(0,p.s)("item")).pipe((0,i.v7)(),(0,i.Bo)(),(0,l.Az)(),(0,T.p)(_=>_.page.length>0),(0,P.T)(_=>_.page[0]))}getLatestVersion$(e){return e.id?this.versionDataService.findById(e.id,!1,!0,(0,p.s)("versionhistory")).pipe((0,i.ak)(),(0,h.n)(s=>s.versionhistory),(0,i.ak)(),(0,h.n)(s=>this.getLatestVersionFromHistory$(s))):(0,O.of)(null)}isLatest$(e){return e?this.getLatestVersion$(e).pipe((0,c.s)(1),(0,h.n)(s=>(0,O.of)(e.version===s.version))):(0,O.of)(null)}hasDraftVersion$(e){return this.versionDataService.findByHref(e,!1,!0,(0,p.s)("versionhistory")).pipe((0,i.qD)(),(0,h.n)(s=>s.hasSucceeded&&!s.hasNoContent?s.payload.versionhistory.pipe((0,i.qD)(),(0,P.T)(o=>!(!o.hasSucceeded||o.hasNoContent)&&o.payload.draftVersion)):(0,O.of)(!1)))}getLatestVersionItemFromHistory$(e){return this.getLatestVersionFromHistory$(e).pipe((0,h.n)(s=>s.item),(0,i.ak)())}getVersionHistoryFromVersion$(e){return this.versionDataService.getHistoryIdFromVersion(e).pipe((0,c.s)(1),(0,h.n)(s=>this.findById(s)),(0,i.ak)())}invalidateVersionHistoryCache(e){this.requestService.setStaleByHrefSubstring("versioning/versionhistories/"+e)}static#t=this.\u0275fac=function(s){return new(s||u)(a.KVO(n.B),a.KVO(U.o),a.KVO(d.$),a.KVO(A.Y),a.KVO(v.VersionDataService))};static#s=this.\u0275prov=a.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);