"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[3095],{63095:(h,c,s)=>{s.r(c),s.d(c,{SubmissionSectionUploadFileComponent:()=>x});var _=s(54460),r=s(69685),p=s(68991),d=s(60902),u=s(89351),f=s(53962),n=s(53107);const m=e=>({fileName:e});function b(e,a){if(1&e&&(n.j41(0,"span",21),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&e){const t=n.XpG(2);n.R7$(),n.JRh(n.i5U(2,1,"submission.sections.upload.primary.make",n.eq3(4,m,t.fileName)))}}function g(e,a){if(1&e&&(n.j41(0,"span",21),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&e){const t=n.XpG(2);n.R7$(),n.JRh(n.i5U(2,1,"submission.sections.upload.primary.remove",n.eq3(4,m,t.fileName)))}}function I(e,a){1&e&&n.nrm(0,"i",22)}function F(e,a){1&e&&n.nrm(0,"i",23)}function S(e,a){if(1&e){const t=n.RV6();n.qex(0),n.j41(1,"div",2)(2,"div",3)(3,"div",4)(4,"input",5),n.nI1(5,"async"),n.bIt("change",function(i){n.eBV(t);const l=n.XpG();return n.Njj(l.togglePrimaryBitstream(i))}),n.k0s(),n.j41(6,"label",6),n.DNE(7,b,3,6,"span",7)(8,g,3,6,"span",7),n.k0s()()(),n.j41(9,"div",8)(10,"div",9)(11,"h3"),n.EFF(12),n.j41(13,"span",10),n.EFF(14),n.nI1(15,"dsFileSize"),n.k0s()()(),n.j41(16,"div",11),n.qex(17),n.j41(18,"ds-file-download-link",12),n.nrm(19,"i",13),n.k0s(),n.j41(20,"button",14),n.nI1(21,"translate"),n.nI1(22,"translate"),n.bIt("click",function(i){n.eBV(t);const l=n.XpG();return i.preventDefault(),n.Njj(l.editBitstreamData())}),n.nrm(23,"i",15),n.k0s(),n.j41(24,"button",16),n.nI1(25,"translate"),n.nI1(26,"async"),n.nI1(27,"translate"),n.bIt("click",function(i){n.eBV(t);const l=n.XpG(),R=n.sdS(2);return i.preventDefault(),n.Njj(l.confirmDelete(R))}),n.DNE(28,I,1,0,"i",17),n.nI1(29,"async"),n.DNE(30,F,1,0,"i",18),n.nI1(31,"async"),n.k0s(),n.bVm(),n.k0s(),n.nrm(32,"div",19)(33,"ds-submission-section-upload-file-view",20),n.k0s()(),n.bVm()}if(2&e){const t=n.XpG();n.R7$(4),n.Mz_("id","primaryBitstream",t.fileIndex,""),n.Y8G("disabled",n.bMT(5,22,t.processingSaveStatus$))("checked",t.isPrimary),n.R7$(2),n.Mz_("for","primaryBitstream",t.fileIndex,""),n.R7$(),n.Y8G("ngIf",!t.isPrimary),n.R7$(),n.Y8G("ngIf",t.isPrimary),n.R7$(4),n.SpI("",t.fileName," "),n.R7$(2),n.SpI("(",n.bMT(15,24,null==t.fileData?null:t.fileData.sizeBytes),")"),n.R7$(4),n.Y8G("cssClasses","btn btn-link-focus")("isBlank",!0)("bitstream",t.getBitstream())("enableRequestACopy",!1),n.R7$(2),n.FS9("title",n.bMT(21,26,"submission.sections.upload.edit.title")),n.BMQ("aria-label",n.bMT(22,28,"submission.sections.upload.edit.title")),n.R7$(4),n.FS9("title",n.bMT(25,30,"submission.sections.upload.delete.confirm.title")),n.Y8G("disabled",n.bMT(26,32,t.processingDelete$)),n.BMQ("aria-label",n.bMT(27,34,"submission.sections.upload.delete.confirm.title")),n.R7$(4),n.Y8G("ngIf",n.bMT(29,36,t.processingDelete$)),n.R7$(2),n.Y8G("ngIf",!0!==n.bMT(31,38,t.processingDelete$)),n.R7$(3),n.Y8G("fileData",t.fileData)}}function k(e,a){if(1&e){const t=n.RV6();n.j41(0,"div",24)(1,"h4",25),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"button",26),n.bIt("click",function(){const i=n.eBV(t).dismiss;return n.Njj(i("cancel"))}),n.j41(5,"span",27),n.EFF(6,"\xd7"),n.k0s()()(),n.j41(7,"div",28)(8,"p"),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"div",29)(12,"button",30),n.bIt("click",function(){const i=n.eBV(t).close;return n.Njj(i("cancel"))}),n.EFF(13),n.nI1(14,"translate"),n.k0s(),n.j41(15,"button",31),n.bIt("click",function(){const i=n.eBV(t).close;return n.Njj(i("ok"))}),n.EFF(16),n.nI1(17,"translate"),n.k0s()()}2&e&&(n.R7$(2),n.JRh(n.bMT(3,4,"submission.sections.upload.delete.confirm.title")),n.R7$(7),n.JRh(n.bMT(10,6,"submission.sections.upload.delete.confirm.info")),n.R7$(4),n.JRh(n.bMT(14,8,"submission.sections.upload.delete.confirm.cancel")),n.R7$(3),n.JRh(n.bMT(17,10,"submission.sections.upload.delete.confirm.submit")))}let x=(()=>{class e extends p.SubmissionSectionUploadFileComponent{static#n=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=n.xGo(e)))(i||e)}})();static#t=this.\u0275cmp=n.VBU({type:e,selectors:[["ds-themed-submission-upload-section-file"]],standalone:!0,features:[n.Vt3,n.aNF],decls:3,vars:1,consts:[["content",""],[4,"ngIf"],[1,"row"],[1,"col-md-2","d-flex","justify-content-center","align-items-center"],[1,"custom-control","custom-switch"],["type","checkbox",1,"custom-control-input",3,"change","id","disabled","checked"],[1,"custom-control-label",3,"for"],["class","sr-only",4,"ngIf"],[1,"col-md-10"],[1,"float-left","w-75"],[1,"text-muted"],[1,"float-right","w-15"],[3,"cssClasses","isBlank","bitstream","enableRequestACopy"],["aria-hidden","true",1,"fa","fa-download","fa-2x","text-normal"],[1,"btn","btn-link-focus",3,"click","title"],[1,"fa","fa-edit","fa-2x","text-normal"],[1,"btn","btn-link-focus",3,"click","title","disabled"],["class","fas fa-circle-notch fa-spin fa-2x text-danger",4,"ngIf"],["class","fa fa-trash fa-2x text-danger",4,"ngIf"],[1,"clearfix"],[3,"fileData"],[1,"sr-only"],[1,"fas","fa-circle-notch","fa-spin","fa-2x","text-danger"],[1,"fa","fa-trash","fa-2x","text-danger"],[1,"modal-header"],[1,"modal-title","text-danger"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(o,i){1&o&&n.DNE(0,S,34,40,"ng-container",1)(1,k,18,12,"ng-template",null,0,n.C5r),2&o&&n.Y8G("ngIf",i.fileData)},dependencies:[r.h,r.D9,f.h,_.bT,_.Jj,d.z,u.s]})}return e})()}}]);