"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[5448],{15448:(g,m,n)=>{n.r(m),n.d(m,{FeedbackFormComponent:()=>k});var c=n(54460),t=n(10936),d=n(69685),i=n(73223),f=n(96606),e=n(53107);function b(o,l){1&o&&(e.nrm(0,"ds-error",18),e.nI1(1,"translate")),2&o&&e.FS9("message",e.bMT(1,1,"info.feedback.error.email.required"))}function _(o,l){1&o&&(e.nrm(0,"ds-error",18),e.nI1(1,"translate")),2&o&&e.FS9("message",e.bMT(1,1,"info.feedback.error.email.required"))}function F(o,l){if(1&o&&(e.j41(0,"div",15)(1,"div",16),e.DNE(2,b,2,3,"ds-error",17)(3,_,2,3,"ds-error",17),e.k0s()()),2&o){const r=e.XpG();e.R7$(2),e.Y8G("ngIf",null==r.feedbackForm.controls.email.errors?null:r.feedbackForm.controls.email.errors.required),e.R7$(),e.Y8G("ngIf",null==r.feedbackForm.controls.email.errors?null:r.feedbackForm.controls.email.errors.pattern)}}function u(o,l){1&o&&(e.nrm(0,"ds-error",18),e.nI1(1,"translate")),2&o&&e.FS9("message",e.bMT(1,1,"info.feedback.error.message.required"))}function p(o,l){if(1&o&&(e.j41(0,"div",15)(1,"div",16),e.DNE(2,u,2,3,"ds-error",17),e.k0s()()),2&o){const r=e.XpG();e.R7$(2),e.Y8G("ngIf",null==r.feedbackForm.controls.message.errors?null:r.feedbackForm.controls.message.errors.required)}}let k=(()=>{class o extends i.FeedbackFormComponent{static#e=this.\u0275fac=(()=>{let r;return function(a){return(r||(r=e.xGo(o)))(a||o)}})();static#o=this.\u0275cmp=e.VBU({type:o,selectors:[["ds-themed-feedback-form"]],standalone:!0,features:[e.Vt3,e.aNF],decls:43,vars:34,consts:[[1,"row","row-offcanvas","row-offcanvas-right"],[1,"col-xs-12","col-sm-12","col-md-9"],[1,"col","p-0",3,"ngSubmit","formGroup"],[1,"row","mt-3"],[1,"control-group","col-sm-12"],["for","email",1,"control-label"],["id","email","name","email","type","text","value","","formControlName","email","autofocus","autofocus",1,"form-control",3,"title"],[1,"text-muted"],["class","row",4,"ngIf"],["for","comments",1,"control-label"],["id","comments","formControlName","message","name","message","cols","20","rows","5",1,"form-control"],["for","page",1,"control-label"],["id","page","readonly","","name","page","type","text","value","","formControlName","page","autofocus","autofocus",1,"form-control",3,"title"],[1,"control-group","col-sm-12","text-right"],["name","submit","type","submit",1,"btn","btn-primary",3,"disabled"],[1,"row"],[1,"col-sm-12","alert"],[3,"message",4,"ngIf"],[3,"message"]],template:function(s,a){1&s&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"form",2),e.bIt("ngSubmit",function(){return a.createFeedback()}),e.j41(9,"div",3)(10,"div",4)(11,"label",5),e.EFF(12),e.nI1(13,"translate"),e.k0s(),e.nrm(14,"input",6),e.nI1(15,"translate"),e.j41(16,"small",7),e.EFF(17),e.nI1(18,"translate"),e.k0s()()(),e.DNE(19,F,4,2,"div",8),e.j41(20,"div",3)(21,"div",4)(22,"label",9),e.EFF(23),e.nI1(24,"translate"),e.k0s(),e.j41(25,"textarea",10),e.EFF(26," "),e.k0s()()(),e.DNE(27,p,3,1,"div",8),e.j41(28,"div",3)(29,"div",4)(30,"label",11),e.EFF(31),e.nI1(32,"translate"),e.k0s(),e.nrm(33,"input",12),e.nI1(34,"translate"),e.j41(35,"small",7),e.EFF(36),e.nI1(37,"translate"),e.k0s()()(),e.j41(38,"div",3)(39,"div",13)(40,"button",14),e.EFF(41),e.nI1(42,"translate"),e.k0s()()()()()()),2&s&&(e.R7$(3),e.JRh(e.bMT(4,14,"info.feedback.head")),e.R7$(3),e.JRh(e.bMT(7,16,"info.feedback.info")),e.R7$(2),e.Y8G("formGroup",a.feedbackForm),e.R7$(4),e.SpI("",e.bMT(13,18,"info.feedback.email-label"),"\xa0"),e.R7$(2),e.FS9("title",e.bMT(15,20,"info.feedback.email_help")),e.R7$(3),e.JRh(e.bMT(18,22,"info.feedback.email_help")),e.R7$(2),e.Y8G("ngIf",a.feedbackForm.controls.email.invalid&&(a.feedbackForm.controls.email.dirty||a.feedbackForm.controls.email.touched)),e.R7$(4),e.SpI("",e.bMT(24,24,"info.feedback.comments"),":\xa0"),e.R7$(4),e.Y8G("ngIf",a.feedbackForm.controls.message.invalid&&(a.feedbackForm.controls.message.dirty||a.feedbackForm.controls.message.touched)),e.R7$(4),e.SpI("",e.bMT(32,26,"info.feedback.page-label"),"\xa0"),e.R7$(2),e.FS9("title",e.bMT(34,28,"info.feedback.page_help")),e.R7$(3),e.JRh(e.bMT(37,30,"info.feedback.page_help")),e.R7$(4),e.Y8G("disabled",!a.feedbackForm.valid),e.R7$(),e.JRh(e.bMT(42,32,"info.feedback.send")))},dependencies:[t.YN,t.qT,t.me,t.BC,t.cb,t.X1,t.j4,t.JD,c.bT,f.A,d.h,d.D9],styles:["ds-error[_ngcontent-%COMP%]{color:red}"]})}return o})()}}]);