(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[6719],{97312:(h,p,t)=>{"use strict";t.r(p),t.d(p,{CreateProfileComponent:()=>y});var n=t(54460),s=t(10936),i=t(69685),f=t(47947),c=t(86722),u=t(7186),C=t(37922),g=t(31363),I=t(82831),R=t(12007),D=t(16840),T=t(72683),F=t(79224),e=t(53107),O=t(73958),N=t(95968);function o(a,E){1&a&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&a&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"register-page.create-profile.identification.first-name.error")," "))}function M(a,E){if(1&a&&(e.j41(0,"div",25),e.DNE(1,o,3,3,"span",26),e.k0s()),2&a){const r=e.XpG(2);e.R7$(),e.Y8G("ngIf",r.firstName.errors&&r.firstName.errors.required)}}function m(a,E){1&a&&(e.j41(0,"span"),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&a&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"register-page.create-profile.identification.last-name.error")," "))}function _(a,E){if(1&a&&(e.j41(0,"div",25),e.DNE(1,m,3,3,"span",26),e.k0s()),2&a){const r=e.XpG(2);e.R7$(),e.Y8G("ngIf",r.lastName.errors&&r.lastName.errors.required)}}function v(a,E){if(1&a&&(e.j41(0,"option",21),e.EFF(1),e.k0s()),2&a){const r=E.$implicit;e.Y8G("value",r.code),e.R7$(),e.JRh(r.label)}}function U(a,E){if(1&a){const r=e.RV6();e.j41(0,"div",1)(1,"h3",2),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"div",3)(5,"div",4),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.j41(8,"div",5)(9,"div",6)(10,"div",7)(11,"label",8),e.EFF(12),e.nI1(13,"translate"),e.k0s(),e.j41(14,"span",9),e.EFF(15),e.nI1(16,"async"),e.k0s()()(),e.j41(17,"form",10),e.bIt("ngSubmit",function(){e.eBV(r);const l=e.XpG();return e.Njj(l.submitEperson())}),e.j41(18,"div",11)(19,"div",6)(20,"div",7)(21,"label",12),e.EFF(22),e.nI1(23,"translate"),e.k0s(),e.nrm(24,"input",13),e.DNE(25,M,2,1,"div",14),e.k0s()(),e.j41(26,"div",6)(27,"div",7)(28,"label",15),e.EFF(29),e.nI1(30,"translate"),e.k0s(),e.nrm(31,"input",16),e.DNE(32,_,2,1,"div",14),e.k0s()(),e.j41(33,"div",6)(34,"div",7)(35,"label",17),e.EFF(36),e.nI1(37,"translate"),e.k0s(),e.nrm(38,"input",18),e.k0s()(),e.j41(39,"div",6)(40,"div",7)(41,"label",19),e.EFF(42),e.nI1(43,"translate"),e.k0s(),e.j41(44,"select",20),e.nrm(45,"option",21),e.DNE(46,v,2,2,"option",22),e.k0s()()()()()()(),e.j41(47,"div",3)(48,"div",4),e.EFF(49),e.nI1(50,"translate"),e.k0s(),e.j41(51,"div",5)(52,"ds-profile-page-security-form",23),e.bIt("isInvalid",function(l){e.eBV(r);const P=e.XpG();return e.Njj(P.setInValid(l))})("passwordValue",function(l){e.eBV(r);const P=e.XpG();return e.Njj(P.setPasswordValue(l))}),e.k0s()()(),e.j41(53,"div",6)(54,"div",7)(55,"button",24),e.bIt("click",function(){e.eBV(r);const l=e.XpG();return e.Njj(l.submitEperson())}),e.EFF(56),e.nI1(57,"translate"),e.k0s()()()()}if(2&a){const r=e.XpG();e.R7$(2),e.JRh(e.bMT(3,22,"register-page.create-profile.header")),e.R7$(4),e.JRh(e.bMT(7,24,"register-page.create-profile.identification.header")),e.R7$(6),e.JRh(e.bMT(13,26,"register-page.create-profile.identification.email")),e.R7$(3),e.JRh(e.bMT(16,28,r.registration$).email),e.R7$(2),e.HbH("ng-invalid"),e.Y8G("formGroup",r.userInfoForm),e.R7$(5),e.JRh(e.bMT(23,30,"register-page.create-profile.identification.first-name")),e.R7$(2),e.Y8G("className",r.firstName.invalid&&(r.firstName.dirty||r.firstName.touched)?"form-control is-invalid":"form-control"),e.R7$(),e.Y8G("ngIf",r.firstName.invalid&&(r.firstName.dirty||r.firstName.touched)),e.R7$(4),e.JRh(e.bMT(30,32,"register-page.create-profile.identification.last-name")),e.R7$(2),e.Y8G("className",r.lastName.invalid&&(r.lastName.dirty||r.lastName.touched)?"form-control is-invalid":"form-control"),e.R7$(),e.Y8G("ngIf",r.lastName.invalid&&(r.lastName.dirty||r.lastName.touched)),e.R7$(4),e.JRh(e.bMT(37,34,"register-page.create-profile.identification.contact")),e.R7$(6),e.JRh(e.bMT(43,36,"register-page.create-profile.identification.language")),e.R7$(3),e.Y8G("value",""),e.R7$(),e.Y8G("ngForOf",r.activeLangs),e.R7$(3),e.JRh(e.bMT(50,38,"register-page.create-profile.security.header")),e.R7$(3),e.Y8G("passwordCanBeEmpty",!1)("FORM_PREFIX","register-page.create-profile.security."),e.R7$(3),e.Y8G("disabled",r.isInValidPassword||r.userInfoForm.invalid),e.R7$(),e.JRh(e.bMT(57,40,"register-page.create-profile.submit"))}}let y=(()=>{class a{constructor(r,d,l,P,S,A,j,B){this.translateService=r,this.ePersonDataService=d,this.store=l,this.router=P,this.route=S,this.formBuilder=A,this.notificationsService=j,this.endUserAgreementService=B,this.isInValidPassword=!0,this.NOTIFICATIONS_PREFIX="register-page.create-profile.submit."}ngOnInit(){this.registration$=this.route.data.pipe((0,f.T)(r=>r.registration),(0,R.ak)()),this.registration$.subscribe(r=>{this.email=r.email,this.token=r.token}),this.activeLangs=c.c.languages.filter(r=>!0===r.active),this.userInfoForm=this.formBuilder.group({firstName:new s.hs("",{validators:[s.k0.required]}),lastName:new s.hs("",{validators:[s.k0.required]}),contactPhone:new s.hs(""),language:new s.hs("")})}setInValid(r){this.isInValidPassword=r||(0,T.Im)(this.password)}setPasswordValue(r){this.password=r,this.isInValidPassword=this.isInValidPassword||(0,T.Im)(this.password)}get firstName(){return this.userInfoForm.get("firstName")}get lastName(){return this.userInfoForm.get("lastName")}get contactPhone(){return this.userInfoForm.get("contactPhone")}get language(){return this.userInfoForm.get("language")}submitEperson(){if(!this.userInfoForm.invalid&&!this.isInValidPassword){const r={metadata:{"eperson.firstname":[{value:this.firstName.value}],"eperson.lastname":[{value:this.lastName.value}],"eperson.phone":[{value:this.contactPhone.value}],"eperson.language":[{value:this.language.value}]},email:this.email,password:this.password,canLogIn:!0,requireCertificate:!1};this.endUserAgreementService.isCookieAccepted()&&(r.metadata[C.Mk]=[{value:String(!0)}],this.endUserAgreementService.removeCookieAccepted());const d=Object.assign(new I.f,r);this.ePersonDataService.createEPersonForToken(d,this.token).pipe((0,R.qD)()).subscribe(l=>{l.hasSucceeded?(this.notificationsService.success(this.translateService.get(this.NOTIFICATIONS_PREFIX+"success.head"),this.translateService.get(this.NOTIFICATIONS_PREFIX+"success.content")),this.store.dispatch(new u.Sn(this.email,this.password)),this.router.navigate(["/home"])):this.notificationsService.error(this.translateService.get(this.NOTIFICATIONS_PREFIX+"error.head"),l.errorMessage)})}}static#e=this.\u0275fac=function(d){return new(d||a)(e.rXU(i.c$),e.rXU(g.EPersonDataService),e.rXU(O.il),e.rXU(N.Ix),e.rXU(N.nX),e.rXU(s.ze),e.rXU(F.I),e.rXU(C.GH))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["ds-base-create-profile"]],standalone:!0,features:[e.aNF],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mb-4"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-12"],["for","email",1,"font-weight-bold"],["id","email"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","firstName"],["type","text","id","firstName","formControlName","firstName",3,"className"],["class","invalid-feedback show-feedback",4,"ngIf"],["for","lastName"],["id","lastName","formControlName","lastName",3,"className"],["for","contactPhone"],["id","contactPhone","formControlName","contactPhone",1,"form-control"],["for","language"],["id","language","formControlName","language",1,"form-control"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[3,"isInvalid","passwordValue","passwordCanBeEmpty","FORM_PREFIX"],[1,"btn","btn-default","btn-primary",3,"click","disabled"],[1,"invalid-feedback","show-feedback"],[4,"ngIf"]],template:function(d,l){1&d&&(e.DNE(0,U,58,42,"div",0),e.nI1(1,"async")),2&d&&e.Y8G("ngIf",e.bMT(1,1,l.registration$))},dependencies:[D.q,i.h,i.D9,n.bT,n.Jj,s.X1,s.qT,s.xH,s.y7,s.me,s.wz,s.BC,s.cb,s.j4,s.JD,n.Sq]})}return a})()},95404:(h,p,t)=>{"use strict";t.r(p),t.d(p,{RegisterEmailComponent:()=>f});var n=t(23080),s=t(24866),i=t(53107);let f=(()=>{class c{constructor(){this.typeRequest=s.TYPE_REQUEST_REGISTER}static#e=this.\u0275fac=function(g){return new(g||c)};static#t=this.\u0275cmp=i.VBU({type:c,selectors:[["ds-base-register-email"]],standalone:!0,features:[i.aNF],decls:1,vars:2,consts:[[3,"MESSAGE_PREFIX","typeRequest"]],template:function(g,I){1&g&&i.nrm(0,"ds-register-email-form",0),2&g&&i.Y8G("MESSAGE_PREFIX","register-page.registration")("typeRequest",I.typeRequest)},dependencies:[n.I]})}return c})()},76719:(h,p,t)=>{"use strict";t.r(p),t.d(p,{ROUTES:()=>N});var n=t(53107),s=t(63016),i=t(628),f=t(37922);const c=(0,i.e)(()=>{const o=(0,n.WQX)(f.GH);return(0,s.of)(o.isCookieAccepted())});var u=t(21124);t(97312);const g=["*"];function I(o,M){}let R=(()=>{class o extends u.J{getComponentName(){return"CreateProfileComponent"}importThemedComponent(m){return t(85748)(`./${m}/app/register-page/create-profile/create-profile.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,97312))}static#e=this.\u0275fac=(()=>{let m;return function(v){return(m||(m=n.xGo(o)))(v||o)}})();static#t=this.\u0275cmp=n.VBU({type:o,selectors:[["ds-create-profile"]],standalone:!0,features:[n.Vt3,n.aNF],ngContentSelectors:g,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(_,v){1&_&&(n.NAR(),n.DNE(0,I,0,0,"ng-template",null,0,n.C5r),n.j41(2,"div",null,1),n.SdG(4),n.k0s())},encapsulation:2})}return o})();t(95404);const T=["*"];function F(o,M){}const N=[{path:"",component:(()=>{class o extends u.J{getComponentName(){return"RegisterEmailComponent"}importThemedComponent(m){return t(72200)(`./${m}/app/register-page/register-email/register-email.component`)}importUnthemedComponent(){return Promise.resolve().then(t.bind(t,95404))}static#e=this.\u0275fac=(()=>{let m;return function(v){return(m||(m=n.xGo(o)))(v||o)}})();static#t=this.\u0275cmp=n.VBU({type:o,selectors:[["ds-register-email"]],standalone:!0,features:[n.Vt3,n.aNF],ngContentSelectors:T,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(_,v){1&_&&(n.NAR(),n.DNE(0,F,0,0,"ng-template",null,0,n.C5r),n.j41(2,"div",null,1),n.SdG(4),n.k0s())},encapsulation:2})}return o})(),data:{title:"register-email.title"}},{path:":token",component:R,canActivate:[t(90784).r,c]}]},85748:(h,p,t)=>{var n={"./custom/app/register-page/create-profile/create-profile.component":[70559,559]};function s(i){if(!t.o(n,i))return Promise.resolve().then(()=>{var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u});var f=n[i],c=f[0];return t.e(f[1]).then(()=>t(c))}s.keys=()=>Object.keys(n),s.id=85748,h.exports=s},72200:(h,p,t)=>{var n={"./custom/app/register-page/register-email/register-email.component":[88471,8471]};function s(i){if(!t.o(n,i))return Promise.resolve().then(()=>{var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u});var f=n[i],c=f[0];return t.e(f[1]).then(()=>t(c))}s.keys=()=>Object.keys(n),s.id=72200,h.exports=s}}]);