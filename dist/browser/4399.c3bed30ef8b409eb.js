"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[4399],{84399:(O,n,e)=>{e.r(n),e.d(n,{ROUTES:()=>w});var y=e(74733),t=e(53107),d=e(47947),v=e(31829),u=e(73579),m=e(60875),c=e(12007),p=e(72683),b=e(86503),h=e(96206),B=e(54460),f=e(94299),T=e(95968);const w=[{path:"",resolve:{breadcrumb:(r,R,s=(0,t.WQX)(u.U),a=(0,t.WQX)(m.DSpaceObjectDataService))=>{const o=r.queryParams.scope;if((0,p.a4)(o))return a.findById(o).pipe((0,c.yd)(),(0,c.Bo)(),(0,d.T)(i=>({provider:s,key:i,url:(0,v.wN)(i)})))},menu:y.c},children:[{path:":id",component:(()=>{class r{constructor(s){this.route=s}ngOnInit(){this.browseByType$=this.route.data.pipe((0,d.T)(s=>s.browseDefinition.getRenderType()))}static#e=this.\u0275fac=function(a){return new(a||r)(t.rXU(T.nX))};static#t=this.\u0275cmp=t.VBU({type:r,selectors:[["ds-browse-by-page"]],standalone:!0,features:[t.aNF],decls:3,vars:3,consts:[[1,"container"],[3,"browseByType"]],template:function(a,o){1&a&&(t.j41(0,"div",0),t.nrm(1,"ds-browse-by-switcher",1),t.nI1(2,"async"),t.k0s()),2&a&&(t.R7$(),t.Y8G("browseByType",t.bMT(2,1,o.browseByType$)))},dependencies:[f.e,B.Jj]})}return r})(),canActivate:[b.h],resolve:{breadcrumb:h.p},data:{title:"browse.title.page",breadcrumbKey:"browse.metadata"}}]}]}}]);