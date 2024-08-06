"use strict";exports.id=5828,exports.ids=[5828,8146],exports.modules={8146:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmailRequestCopyComponent:()=>EmailRequestCopyComponent});var common=__webpack_require__(84739),core=__webpack_require__(68014),fesm2022_forms=__webpack_require__(28955),ngx_translate_core=__webpack_require__(43750);class RequestCopyEmail{constructor(subject,message){this.subject=subject,this.message=message}}const _c0=["*"],_c1=a0=>({"is-invalid":a0});function EmailRequestCopyComponent_div_6_Template(rf,ctx){1&rf&&(core.j41(0,"div",11),core.EFF(1),core.nI1(2,"translate"),core.k0s()),2&rf&&(core.R7$(),core.SpI(" ",core.bMT(2,1,"grant-deny-request-copy.email.subject.empty")," "))}let EmailRequestCopyComponent=(()=>{class EmailRequestCopyComponent2{constructor(location){this.location=location,this.send=new core.bkB}submit(){this.send.emit(new RequestCopyEmail(this.subject,this.message))}return(){this.location.back()}static#_=this.\u0275fac=function(t){return new(t||EmailRequestCopyComponent2)(core.rXU(common.aZ))};static#_2=this.\u0275cmp=core.VBU({type:EmailRequestCopyComponent2,selectors:[["ds-base-email-request-copy"]],inputs:{subject:"subject",message:"message"},outputs:{send:"send"},standalone:!0,features:[core.aNF],ngContentSelectors:_c0,decls:24,vars:25,consts:[[1,"form-group"],["for","subject"],["type","text","id","subject","name","subject",1,"form-control",3,"ngModelChange","ngClass","ngModel"],["class","invalid-feedback",4,"ngIf"],["for","message"],["id","message","rows","8","name","message",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"click","disabled","title"],[1,"fas","fa-envelope"],[1,"btn","btn-outline-secondary","mr-1",3,"click","title"],[1,"fas","fa-arrow-left"],[1,"invalid-feedback"]],template:function(rf,ctx){1&rf&&(core.NAR(),core.j41(0,"form")(1,"div",0)(2,"label",1),core.EFF(3),core.nI1(4,"translate"),core.k0s(),core.j41(5,"input",2),core.mxI("ngModelChange",function($event){return core.DH7(ctx.subject,$event)||(ctx.subject=$event),$event}),core.k0s(),core.DNE(6,EmailRequestCopyComponent_div_6_Template,3,3,"div",3),core.k0s(),core.j41(7,"div",0)(8,"label",4),core.EFF(9),core.nI1(10,"translate"),core.k0s(),core.j41(11,"textarea",5),core.mxI("ngModelChange",function($event){return core.DH7(ctx.message,$event)||(ctx.message=$event),$event}),core.k0s()(),core.SdG(12),core.j41(13,"div",6)(14,"button",7),core.nI1(15,"translate"),core.bIt("click",function(){return ctx.submit()}),core.nrm(16,"i",8),core.EFF(17),core.nI1(18,"translate"),core.k0s(),core.j41(19,"button",9),core.nI1(20,"translate"),core.bIt("click",function(){return ctx.return()}),core.nrm(21,"i",10),core.EFF(22),core.nI1(23,"translate"),core.k0s()()()),2&rf&&(core.R7$(3),core.JRh(core.bMT(4,11,"grant-deny-request-copy.email.subject")),core.R7$(2),core.Y8G("ngClass",core.eq3(23,_c1,!ctx.subject||0===ctx.subject.length)),core.R50("ngModel",ctx.subject),core.R7$(),core.Y8G("ngIf",!ctx.subject||0===ctx.subject.length),core.R7$(3),core.JRh(core.bMT(10,13,"grant-deny-request-copy.email.message")),core.R7$(2),core.R50("ngModel",ctx.message),core.R7$(3),core.FS9("title",core.bMT(15,15,"grant-deny-request-copy.email.send")),core.Y8G("disabled",!ctx.subject||0===ctx.subject.length),core.R7$(3),core.SpI(" ",core.bMT(18,17,"grant-deny-request-copy.email.send")," "),core.R7$(2),core.FS9("title",core.bMT(20,19,"grant-deny-request-copy.email.back")),core.R7$(3),core.SpI(" ",core.bMT(23,21,"grant-deny-request-copy.email.back")," "))},dependencies:[fesm2022_forms.YN,fesm2022_forms.qT,fesm2022_forms.me,fesm2022_forms.BC,fesm2022_forms.cb,fesm2022_forms.vS,fesm2022_forms.cV,common.YU,common.bT,ngx_translate_core.h,ngx_translate_core.D9]})}return EmailRequestCopyComponent2})()},85828:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmailRequestCopyComponent:()=>EmailRequestCopyComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(84739),_angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28955),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(43750),src_app_request_copy_email_request_copy_email_request_copy_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8146),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68014);const _c0=["*"],_c1=a0=>({"is-invalid":a0});function EmailRequestCopyComponent_div_6_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(0,"div",11),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(2,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.SpI(" ",_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(2,1,"grant-deny-request-copy.email.subject.empty")," "))}let EmailRequestCopyComponent=(()=>{class EmailRequestCopyComponent2 extends src_app_request_copy_email_request_copy_email_request_copy_component__WEBPACK_IMPORTED_MODULE_1__.EmailRequestCopyComponent{static#_=this.\u0275fac=(()=>{let \u0275EmailRequestCopyComponent_BaseFactory;return function(t){return(\u0275EmailRequestCopyComponent_BaseFactory||(\u0275EmailRequestCopyComponent_BaseFactory=_angular_core__WEBPACK_IMPORTED_MODULE_0__.xGo(EmailRequestCopyComponent2)))(t||EmailRequestCopyComponent2)}})();static#_2=this.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.VBU({type:EmailRequestCopyComponent2,selectors:[["ds-themed-email-request-copy"]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__.Vt3,_angular_core__WEBPACK_IMPORTED_MODULE_0__.aNF],ngContentSelectors:_c0,decls:24,vars:25,consts:[[1,"form-group"],["for","subject"],["type","text","id","subject","name","subject",1,"form-control",3,"ngModelChange","ngClass","ngModel"],["class","invalid-feedback",4,"ngIf"],["for","message"],["id","message","rows","8","name","message",1,"form-control",3,"ngModelChange","ngModel"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"click","disabled","title"],[1,"fas","fa-envelope"],[1,"btn","btn-outline-secondary","mr-1",3,"click","title"],[1,"fas","fa-arrow-left"],[1,"invalid-feedback"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NAR(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(0,"form")(1,"div",0)(2,"label",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(4,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(5,"input",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.mxI("ngModelChange",function($event){return _angular_core__WEBPACK_IMPORTED_MODULE_0__.DH7(ctx.subject,$event)||(ctx.subject=$event),$event}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.DNE(6,EmailRequestCopyComponent_div_6_Template,3,3,"div",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(7,"div",0)(8,"label",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(10,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(11,"textarea",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.mxI("ngModelChange",function($event){return _angular_core__WEBPACK_IMPORTED_MODULE_0__.DH7(ctx.message,$event)||(ctx.message=$event),$event}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.SdG(12),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(13,"div",6)(14,"button",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(15,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return ctx.submit()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nrm(16,"i",8),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(17),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(18,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.j41(19,"button",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(20,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.bIt("click",function(){return ctx.return()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nrm(21,"i",10),_angular_core__WEBPACK_IMPORTED_MODULE_0__.EFF(22),_angular_core__WEBPACK_IMPORTED_MODULE_0__.nI1(23,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.k0s()()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(4,11,"grant-deny-request-copy.email.subject")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y8G("ngClass",_angular_core__WEBPACK_IMPORTED_MODULE_0__.eq3(23,_c1,!ctx.subject||0===ctx.subject.length)),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R50("ngModel",ctx.subject),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y8G("ngIf",!ctx.subject||0===ctx.subject.length),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(10,13,"grant-deny-request-copy.email.message")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R50("ngModel",ctx.message),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.FS9("title",_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(15,15,"grant-deny-request-copy.email.send")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y8G("disabled",!ctx.subject||0===ctx.subject.length),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.SpI(" ",_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(18,17,"grant-deny-request-copy.email.send")," "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.FS9("title",_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(20,19,"grant-deny-request-copy.email.back")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.R7$(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.SpI(" ",_angular_core__WEBPACK_IMPORTED_MODULE_0__.bMT(23,21,"grant-deny-request-copy.email.back")," "))},dependencies:[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.YN,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.qT,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.me,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.BC,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.cb,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.vS,_angular_forms__WEBPACK_IMPORTED_MODULE_2__.cV,_angular_common__WEBPACK_IMPORTED_MODULE_3__.YU,_angular_common__WEBPACK_IMPORTED_MODULE_3__.bT,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.h,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.D9],encapsulation:2})}return EmailRequestCopyComponent2})()}};