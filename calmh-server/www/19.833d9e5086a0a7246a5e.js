(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"36zJ":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("mrSG"),e=u("gIcY"),i=u("ZZ/e"),r=u("lGQG"),b=function(){function l(l,n,u,o,t){var i=this;this.formBuilder=l,this.alertCtrl=n,this.loadingCtrl=u,this.authService=o,this.navCtrl=t,this.loginForm=l.group({username:["",e.n.compose([e.n.minLength(5),e.n.maxLength(20),e.n.required])],password:["",e.n.compose([e.n.minLength(5),e.n.maxLength(20),e.n.required])]}),this.authService.setSucessCallback(function(l){i.loader&&i.loader.dismiss()}),this.authService.setFailureCallback(function(l){i.loader&&i.loader.dismiss(),i.showAlert("Login Failure",null!==l?l:"Failed to login. Please try again.")}),this.authService.authLevel.subscribe(function(l){if(l){var n=i.authService.getHome();i.navCtrl.navigateRoot(n)}})}return l.prototype.ngOnInit=function(){},l.prototype.processForm=function(){return t.b(this,void 0,void 0,function(){var l,n,u,o=this;return t.e(this,function(t){switch(t.label){case 0:return this.prevalidate(l=this.loginForm.value.username,n=this.loginForm.value.password),u=this,[4,this.loadingCtrl.create({message:"Signining in. Please wait ...",backdropDismiss:!0,duration:1e3})];case 1:return u.loader=t.sent(),this.loader.present().then(function(){o.authService.login(l,n)}),[2]}})})},l.prototype.showAlert=function(l,n){return t.b(this,void 0,void 0,function(){return t.e(this,function(u){switch(u.label){case 0:return[4,this.alertCtrl.create({header:l,message:n,buttons:[{text:"Ok"}]})];case 1:return u.sent().present(),[2]}})})},l.prototype.prevalidate=function(l,n){""!==l&&""!==n?this.loginForm.valid||this.showAlert("Incorrect data","Username and password must be at least 5 characters long."):this.showAlert("Login Failure","Username and password are required")},l.prototype.goTo=function(l){this.navCtrl.navigateForward(l)},l}(),a=function(){return function(){}}(),s=u("pMnS"),c=u("oBZk"),p=o.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,12,"ion-header",[],null,null,null,c.ab,c.p)),o.ob(1,49152,null,0,i.B,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,c.vb,c.K)),o.ob(3,49152,null,0,i.Bb,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,c.N,c.c)),o.ob(5,49152,null,0,i.l,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,3,"ion-button",[],null,null,null,c.M,c.b)),o.ob(7,49152,null,0,i.k,[o.h,o.k,o.z],null,null),(l()(),o.pb(8,0,null,0,1,"ion-icon",[["name","log-in"]],null,null,null,c.bb,c.q)),o.ob(9,49152,null,0,i.C,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.pb(10,0,null,0,2,"ion-title",[],null,null,null,c.ub,c.J)),o.ob(11,49152,null,0,i.zb,[o.h,o.k,o.z],null,null),(l()(),o.Hb(-1,0,["Login"])),(l()(),o.pb(13,0,null,null,51,"ion-content",[],null,null,null,c.W,c.l)),o.ob(14,49152,null,0,i.u,[o.h,o.k,o.z],null,null),(l()(),o.pb(15,0,null,0,49,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,e=l.component;return"submit"===n&&(t=!1!==o.zb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==o.zb(l,17).onReset()&&t),"ngSubmit"===n&&(t=!1!==e.processForm()&&t),"keyup.enter"===n&&(t=!1!==e.processForm()&&t),t},null,null)),o.ob(16,16384,null,0,e.p,[],null,null),o.ob(17,540672,null,0,e.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Eb(2048,null,e.a,null,[e.e]),o.ob(19,16384,null,0,e.j,[[4,e.a]],null,null),(l()(),o.pb(20,0,null,null,25,"ion-list",[],null,null,null,c.hb,c.v)),o.ob(21,49152,null,0,i.O,[o.h,o.k,o.z],null,null),(l()(),o.pb(22,0,null,0,11,"ion-item",[],null,null,null,c.eb,c.t)),o.ob(23,49152,null,0,i.H,[o.h,o.k,o.z],null,null),(l()(),o.pb(24,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,c.fb,c.u)),o.ob(25,49152,null,0,i.N,[o.h,o.k,o.z],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Username:"])),(l()(),o.pb(27,0,null,0,6,"ion-input",[["formControlName","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.zb(l,28)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.zb(l,28)._handleInputEvent(u.target.value)&&t),t},c.db,c.s)),o.ob(28,16384,null,0,i.Qb,[o.k],null,null),o.Eb(1024,null,e.g,function(l){return[l]},[i.Qb]),o.ob(30,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.r]],{name:[0,"name"]},null),o.Eb(2048,null,e.h,null,[e.d]),o.ob(32,16384,null,0,e.i,[[4,e.h]],null,null),o.ob(33,49152,null,0,i.G,[o.h,o.k,o.z],{type:[0,"type"]},null),(l()(),o.pb(34,0,null,0,11,"ion-item",[],null,null,null,c.eb,c.t)),o.ob(35,49152,null,0,i.H,[o.h,o.k,o.z],null,null),(l()(),o.pb(36,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,c.fb,c.u)),o.ob(37,49152,null,0,i.N,[o.h,o.k,o.z],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Password:"])),(l()(),o.pb(39,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.zb(l,40)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.zb(l,40)._handleInputEvent(u.target.value)&&t),t},c.db,c.s)),o.ob(40,16384,null,0,i.Qb,[o.k],null,null),o.Eb(1024,null,e.g,function(l){return[l]},[i.Qb]),o.ob(42,671744,null,0,e.d,[[3,e.a],[8,null],[8,null],[6,e.g],[2,e.r]],{name:[0,"name"]},null),o.Eb(2048,null,e.h,null,[e.d]),o.ob(44,16384,null,0,e.i,[[4,e.h]],null,null),o.ob(45,49152,null,0,i.G,[o.h,o.k,o.z],{type:[0,"type"]},null),(l()(),o.pb(46,0,null,null,11,"ion-row",[],null,null,null,c.ob,c.D)),o.ob(47,49152,null,0,i.ib,[o.h,o.k,o.z],null,null),(l()(),o.pb(48,0,null,0,4,"ion-col",[["size","6"]],null,null,null,c.V,c.k)),o.ob(49,49152,null,0,i.t,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.pb(50,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["type","submit"]],null,null,null,c.M,c.b)),o.ob(51,49152,null,0,i.k,[o.h,o.k,o.z],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),o.Hb(-1,0,["Sign In "])),(l()(),o.pb(53,0,null,0,4,"ion-col",[["size","6"]],null,null,null,c.V,c.k)),o.ob(54,49152,null,0,i.t,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.pb(55,0,null,0,2,"ion-button",[["color","secondary"],["expand","block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goTo("personal-data")&&o),o},c.M,c.b)),o.ob(56,49152,null,0,i.k,[o.h,o.k,o.z],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),o.Hb(-1,0,["Register "])),(l()(),o.pb(58,0,null,null,6,"ion-row",[],null,null,null,c.ob,c.D)),o.ob(59,49152,null,0,i.ib,[o.h,o.k,o.z],null,null),(l()(),o.pb(60,0,null,0,4,"ion-col",[["size","12"]],null,null,null,c.V,c.k)),o.ob(61,49152,null,0,i.t,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.pb(62,0,null,0,2,"ion-button",[["color","tertiary"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goTo("chronic-conditions")&&o),o},c.M,c.b)),o.ob(63,49152,null,0,i.k,[o.h,o.k,o.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Hb(-1,0,[" Skip"]))],function(l,n){var u=n.component;l(n,9,0,"log-in"),l(n,17,0,u.loginForm),l(n,25,0,"fixed"),l(n,30,0,"username"),l(n,33,0,"text"),l(n,37,0,"fixed"),l(n,42,0,"password"),l(n,45,0,"password"),l(n,49,0,"6"),l(n,51,0,"primary","block","submit"),l(n,54,0,"6"),l(n,56,0,"secondary","block","button"),l(n,61,0,"12"),l(n,63,0,"tertiary","block")},function(l,n){l(n,15,0,o.zb(n,19).ngClassUntouched,o.zb(n,19).ngClassTouched,o.zb(n,19).ngClassPristine,o.zb(n,19).ngClassDirty,o.zb(n,19).ngClassValid,o.zb(n,19).ngClassInvalid,o.zb(n,19).ngClassPending),l(n,27,0,o.zb(n,32).ngClassUntouched,o.zb(n,32).ngClassTouched,o.zb(n,32).ngClassPristine,o.zb(n,32).ngClassDirty,o.zb(n,32).ngClassValid,o.zb(n,32).ngClassInvalid,o.zb(n,32).ngClassPending),l(n,39,0,o.zb(n,44).ngClassUntouched,o.zb(n,44).ngClassTouched,o.zb(n,44).ngClassPristine,o.zb(n,44).ngClassDirty,o.zb(n,44).ngClassValid,o.zb(n,44).ngClassInvalid,o.zb(n,44).ngClassPending)})}function g(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,d,p)),o.ob(1,114688,null,0,b,[e.b,i.b,i.Fb,r.a,i.Ib],null,null)],function(l,n){l(n,1,0)},null)}var h=o.lb("app-login",b,g,{},{},[]),m=u("Ip0R"),z=u("ZYCi");u.d(n,"LoginPageModuleNgFactory",function(){return k});var k=o.mb(a,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[s.a,h]],[3,o.j],o.x]),o.xb(4608,m.m,m.l,[o.u,[2,m.s]]),o.xb(4608,e.q,e.q,[]),o.xb(4608,e.b,e.b,[]),o.xb(4608,i.c,i.c,[o.z,o.g]),o.xb(4608,i.Hb,i.Hb,[i.c,o.j,o.q]),o.xb(4608,i.Mb,i.Mb,[i.c,o.j,o.q]),o.xb(1073742336,m.b,m.b,[]),o.xb(1073742336,e.o,e.o,[]),o.xb(1073742336,e.f,e.f,[]),o.xb(1073742336,e.m,e.m,[]),o.xb(1073742336,i.Db,i.Db,[]),o.xb(1073742336,z.o,z.o,[[2,z.u],[2,z.m]]),o.xb(1073742336,a,a,[]),o.xb(1024,z.k,function(){return[[{path:"",component:b}]]},[])])})}}]);