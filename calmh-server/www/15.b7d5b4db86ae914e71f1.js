(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VKjb:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),o=u("ZZ/e"),i=u("n6ga"),r=function(){function l(l,n,u,t,e){this.formBuilder=l,this.loadingCtrl=n,this.restApiSvc=u,this.alertCtrl=t,this.actionSheetCtrl=e,this.reload()}return l.prototype.reload=function(){return e.b(this,void 0,void 0,function(){var l,n=this;return e.e(this,function(u){switch(u.label){case 0:return l=this,[4,this.loadingCtrl.create({message:"Loading users...",backdropDismiss:!0})];case 1:return l.loader=u.sent(),this.loader.present().then(function(){n.restApiSvc.getAll("user").subscribe(function(l){n.users=l,n.loader.dismiss()})}),[2]}})})},l.prototype.confirmDelete=function(l){return e.b(this,void 0,void 0,function(){var n=this;return e.e(this,function(u){switch(u.label){case 0:return[4,this.alertCtrl.create({header:"Delete event?",message:"Are you sure you want to delete this event?",buttons:[{text:"Yes",handler:function(){n.deleteUser(l)}},{text:"No",handler:function(){}}]})];case 1:return u.sent().present(),[2]}})})},l.prototype.deleteUser=function(l){return e.b(this,void 0,void 0,function(){var n=this;return e.e(this,function(u){return this.restApiSvc.delete("user",l).subscribe(function(){n.reload()}),[2]})})},l.prototype.ngOnInit=function(){},l}(),b=function(){return function(){}}(),s=u("pMnS"),c=u("oBZk"),a=u("gIcY"),p=u("Ip0R"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,9,"ion-item",[],null,null,null,c.eb,c.t)),t.ob(1,49152,null,0,o.H,[t.h,t.k,t.z],null,null),(l()(),t.pb(2,0,null,0,2,"ion-label",[],null,null,null,c.fb,c.u)),t.ob(3,49152,null,0,o.N,[t.h,t.k,t.z],null,null),(l()(),t.Hb(4,0,[" "," "," (",") "])),(l()(),t.pb(5,0,null,0,4,"ion-chip",[["color","primary"],["position","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.confirmDelete(l.context.$implicit.id)&&t),t},c.U,c.j)),t.ob(6,49152,null,0,o.s,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.pb(7,0,null,0,2,"ion-label",[],null,null,null,c.fb,c.u)),t.ob(8,49152,null,0,o.N,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Delete"]))],function(l,n){l(n,6,0,"primary")},function(l,n){l(n,4,0,n.context.$implicit.firstname,n.context.$implicit.lastname,n.context.$implicit.username)})}function d(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,c.ab,c.p)),t.ob(1,49152,null,0,o.B,[t.h,t.k,t.z],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,c.vb,c.K)),t.ob(3,49152,null,0,o.Bb,[t.h,t.k,t.z],null,null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.N,c.c)),t.ob(5,49152,null,0,o.l,[t.h,t.k,t.z],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.ib,c.y)),t.ob(7,49152,null,0,o.R,[t.h,t.k,t.z],null,null),(l()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,c.ub,c.J)),t.ob(9,49152,null,0,o.zb,[t.h,t.k,t.z],null,null),(l()(),t.Hb(-1,0,["Users"])),(l()(),t.pb(11,0,null,null,9,"ion-content",[],null,null,null,c.W,c.l)),t.ob(12,49152,null,0,o.u,[t.h,t.k,t.z],null,null),(l()(),t.pb(13,0,null,0,7,"ion-list",[],null,null,null,c.hb,c.v)),t.ob(14,49152,null,0,o.O,[t.h,t.k,t.z],null,null),(l()(),t.pb(15,0,null,0,5,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.zb(l,18)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.zb(l,18)._handleChangeEvent(u.target.value)&&e),e},c.lb,c.B)),t.Eb(5120,null,a.g,function(l){return[l]},[o.Pb]),t.ob(17,49152,null,0,o.ab,[t.h,t.k,t.z],null,null),t.ob(18,16384,null,0,o.Pb,[t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,f)),t.ob(20,278528,null,0,p.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,20,0,n.component.users)},null)}function m(l){return t.Jb(0,[(l()(),t.pb(0,0,null,null,1,"app-users",[],null,null,null,d,h)),t.ob(1,114688,null,0,r,[a.b,o.Fb,i.a,o.b,o.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t.lb("app-users",r,m,{},{},[]),x=u("ZYCi");u.d(n,"UsersPageModuleNgFactory",function(){return g});var g=t.mb(b,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[s.a,v]],[3,t.j],t.x]),t.xb(4608,p.m,p.l,[t.u,[2,p.s]]),t.xb(4608,a.q,a.q,[]),t.xb(4608,a.b,a.b,[]),t.xb(4608,o.c,o.c,[t.z,t.g]),t.xb(4608,o.Hb,o.Hb,[o.c,t.j,t.q]),t.xb(4608,o.Mb,o.Mb,[o.c,t.j,t.q]),t.xb(1073742336,p.b,p.b,[]),t.xb(1073742336,a.o,a.o,[]),t.xb(1073742336,a.f,a.f,[]),t.xb(1073742336,a.m,a.m,[]),t.xb(1073742336,o.Db,o.Db,[]),t.xb(1073742336,x.o,x.o,[[2,x.u],[2,x.m]]),t.xb(1073742336,b,b,[]),t.xb(1024,x.k,function(){return[[{path:"",component:r}]]},[])])})}}]);