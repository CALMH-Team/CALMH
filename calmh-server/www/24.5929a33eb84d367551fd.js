(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ysyC:function(l,n,u){"use strict";u.r(n);var i=u("CcnG"),o=u("mrSG"),e=function(l){function n(n,u){var i=l.call(this,n)||this;return i.name=n,i.type=u,i}return o.d(n,l),n}(u("rFn4").a),t=u("uKSY"),a=u("gIcY"),b=u("ZZ/e"),r=u("eECP"),s=function(){function l(l,n,u){var i=this;this.navCtrl=l,this.formBuilder=n,this.caseSvc=u,this.reactionTypes=[{type:t.a.Physical,expanded:!1},{type:t.a.Cognitive,expanded:!1},{type:t.a.Behavioral,expanded:!1},{type:t.a.Emotional,expanded:!1}],this.physicalReactions=[new e("Headaches",t.a.Physical),new e("Stomachaches",t.a.Physical),new e("Sleep difficulties",t.a.Physical),new e("Difficulty eating",t.a.Physical),new e("Worsening of health conditions",t.a.Physical),new e("Fatigue / exhaustion",t.a.Physical),new e("Chronic agitation",t.a.Physical)],this.cognitiveReactions=[new e("Inhability to accept / cope with death of loved one(s)",t.a.Cognitive),new e("Distressing dreams or nightmares",t.a.Cognitive),new e("Intrusive thoughts or images",t.a.Cognitive),new e("Difficulty concentrating",t.a.Cognitive),new e("Difficulty remembering",t.a.Cognitive),new e("Difficulty making decisions",t.a.Cognitive),new e("Preocupation with death / destruction",t.a.Cognitive)],this.behavioralReactions=[new e("Extreme Disorientation",t.a.Behavioral),new e("Excessive drug, alcohol, or prescription drug use",t.a.Behavioral),new e("Isolation / withdrawal",t.a.Behavioral),new e("High risk behaviour",t.a.Behavioral),new e("Regressive behaviour",t.a.Behavioral),new e("Separation anxiety",t.a.Behavioral),new e("Violent behaviour",t.a.Behavioral),new e("Maladaptive coping",t.a.Behavioral)],this.emotionalReactions=[new e("Acute stress reactions",t.a.Emotional),new e("Acute grief reactions",t.a.Emotional),new e("Sadness, tearfulness",t.a.Emotional),new e("Irritability, anger",t.a.Emotional),new e("Feeling anxious, fearful",t.a.Emotional),new e("Despair hopelessness",t.a.Emotional),new e("Feeling of guilt or shame",t.a.Emotional),new e("Feeling emotionally numb, disconnected",t.a.Emotional)],this.reactionsForm=this.formBuilder.group({otherPhysical:[""],otherCognitive:[""],otherBehavioral:[""],otherEmotional:[""]}),this.physicalReactions.map(function(l){i.reactionsForm.addControl("0#"+l.id,new a.c)}),this.cognitiveReactions.map(function(l){i.reactionsForm.addControl("1#"+l.id,new a.c)}),this.behavioralReactions.map(function(l){i.reactionsForm.addControl("2#"+l.id,new a.c)}),this.emotionalReactions.map(function(l){i.reactionsForm.addControl("3#"+l.id,new a.c)})}return l.prototype.setReactions=function(){var l=this,n={};Object.keys(this.reactionsForm.value).forEach(function(u){null!==l.reactionsForm.value[u]&&""!==l.reactionsForm.value[u]&&(n[u]=l.reactionsForm.value[u])}),this.caseSvc.setReactions(n),this.goTo("recommendations")},l.prototype.goTo=function(l){this.navCtrl.navigateForward(l)},l.prototype.expandItem=function(l){l.expanded?l.expanded=!1:this.reactionTypes.map(function(n){return n.expanded=l===n&&!n.expanded,n})},l.prototype.ngOnInit=function(){},l}(),c=function(){return function(){}}(),g=u("pMnS"),h=u("oBZk"),d=u("Ip0R"),p=function(){function l(l){this.renderer=l,this.expanded=!1,this.expandHeight="1000px"}return l.prototype.ngAfterViewInit=function(){this.renderer.setStyle(this.expandWrapper.nativeElement,"max-height",this.expandHeight)},l}(),f=i.nb({encapsulation:0,styles:[[".expand-wrapper[_ngcontent-%COMP%]{transition:max-height .4s ease-in-out;overflow:hidden;height:auto}.collapsed[_ngcontent-%COMP%]{max-height:0!important}"]],data:{}});function m(l){return i.Jb(0,[i.Fb(402653184,1,{expandWrapper:0}),(l()(),i.pb(1,0,[[1,0],["expandWrapper",1]],null,1,"div",[["class","expand-wrapper"]],[[2,"collapsed",null]],null,null,null,null)),i.yb(null,0)],null,function(l,n){l(n,1,0,!n.component.expanded)})}var z=i.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-card-title",[],null,null,null,h.R,h.h)),i.ob(1,49152,null,0,b.q,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Physical symptoms"])),(l()(),i.pb(3,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style","float:right"]],null,null,null,h.bb,h.q)),i.ob(4,49152,null,0,b.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"arrow-dropdown")},null)}function C(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,h.Q,h.g)),i.ob(1,49152,null,0,b.p,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["such as headache, stomach pain, or difficulty breathing. "]))],null,null)}function k(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-card-title",[],null,null,null,h.R,h.h)),i.ob(1,49152,null,0,b.q,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Cognitive dysfunction"])),(l()(),i.pb(3,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style","float:right"]],null,null,null,h.bb,h.q)),i.ob(4,49152,null,0,b.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"arrow-dropdown")},null)}function y(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,h.Q,h.g)),i.ob(1,49152,null,0,b.p,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["such as difficulty making decisions or following directions. "]))],null,null)}function x(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-card-title",[],null,null,null,h.R,h.h)),i.ob(1,49152,null,0,b.q,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Behavioral reactions"])),(l()(),i.pb(3,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style","float:right"]],null,null,null,h.bb,h.q)),i.ob(4,49152,null,0,b.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"arrow-dropdown")},null)}function w(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,h.Q,h.g)),i.ob(1,49152,null,0,b.p,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["such as consuming more alcohol or interpersonal conflict. "]))],null,null)}function I(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,4,"ion-card-title",[],null,null,null,h.R,h.h)),i.ob(1,49152,null,0,b.q,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Emotional symptoms"])),(l()(),i.pb(3,0,null,0,1,"ion-icon",[["name","arrow-dropdown"],["style","float:right"]],null,null,null,h.bb,h.q)),i.ob(4,49152,null,0,b.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"arrow-dropdown")},null)}function E(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,h.Q,h.g)),i.ob(1,49152,null,0,b.p,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["such as irritability or excessive sadness. "]))],null,null)}function B(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(4,0,["",""])),(l()(),i.pb(5,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,6)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,6)._handleIonChange(u.target.checked)&&o),o},h.T,h.i)),i.ob(6,16384,null,0,b.d,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.d]),i.ob(8,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(10,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(11,49152,null,0,b.r,[i.h,i.k,i.z],null,null)],function(l,n){l(n,8,0,i.rb(1,"0#",n.context.$implicit.id,""))},function(l,n){l(n,4,0,n.context.$implicit.name),l(n,5,0,i.zb(n,10).ngClassUntouched,i.zb(n,10).ngClassTouched,i.zb(n,10).ngClassPristine,i.zb(n,10).ngClassDirty,i.zb(n,10).ngClassValid,i.zb(n,10).ngClassInvalid,i.zb(n,10).ngClassPending)})}function O(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,15,"ion-list",[],null,null,null,h.hb,h.v)),i.ob(1,49152,null,0,b.O,[i.h,i.k,i.z],null,null),(l()(),i.gb(16777216,null,0,1,null,B)),i.ob(3,278528,null,0,d.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(4,0,null,0,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(5,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(6,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(7,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Other"])),(l()(),i.pb(9,0,null,0,6,"ion-input",[["formControlName","otherPhysical"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,10)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,10)._handleInputEvent(u.target.value)&&o),o},h.db,h.s)),i.ob(10,16384,null,0,b.Qb,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.Qb]),i.ob(12,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(14,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(15,49152,null,0,b.G,[i.h,i.k,i.z],null,null)],function(l,n){l(n,3,0,n.component.physicalReactions),l(n,12,0,"otherPhysical")},function(l,n){l(n,9,0,i.zb(n,14).ngClassUntouched,i.zb(n,14).ngClassTouched,i.zb(n,14).ngClassPristine,i.zb(n,14).ngClassDirty,i.zb(n,14).ngClassValid,i.zb(n,14).ngClassInvalid,i.zb(n,14).ngClassPending)})}function P(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(4,0,["",""])),(l()(),i.pb(5,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,6)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,6)._handleIonChange(u.target.checked)&&o),o},h.T,h.i)),i.ob(6,16384,null,0,b.d,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.d]),i.ob(8,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(10,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(11,49152,null,0,b.r,[i.h,i.k,i.z],null,null)],function(l,n){l(n,8,0,i.rb(1,"1#",n.context.$implicit.id,""))},function(l,n){l(n,4,0,n.context.$implicit.name),l(n,5,0,i.zb(n,10).ngClassUntouched,i.zb(n,10).ngClassTouched,i.zb(n,10).ngClassPristine,i.zb(n,10).ngClassDirty,i.zb(n,10).ngClassValid,i.zb(n,10).ngClassInvalid,i.zb(n,10).ngClassPending)})}function H(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,15,"ion-list",[],null,null,null,h.hb,h.v)),i.ob(1,49152,null,0,b.O,[i.h,i.k,i.z],null,null),(l()(),i.gb(16777216,null,0,1,null,P)),i.ob(3,278528,null,0,d.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(4,0,null,0,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(5,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(6,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(7,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Other"])),(l()(),i.pb(9,0,null,0,6,"ion-input",[["formControlName","otherCognitive"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,10)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,10)._handleInputEvent(u.target.value)&&o),o},h.db,h.s)),i.ob(10,16384,null,0,b.Qb,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.Qb]),i.ob(12,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(14,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(15,49152,null,0,b.G,[i.h,i.k,i.z],null,null)],function(l,n){l(n,3,0,n.component.cognitiveReactions),l(n,12,0,"otherCognitive")},function(l,n){l(n,9,0,i.zb(n,14).ngClassUntouched,i.zb(n,14).ngClassTouched,i.zb(n,14).ngClassPristine,i.zb(n,14).ngClassDirty,i.zb(n,14).ngClassValid,i.zb(n,14).ngClassInvalid,i.zb(n,14).ngClassPending)})}function F(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(4,0,["",""])),(l()(),i.pb(5,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,6)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,6)._handleIonChange(u.target.checked)&&o),o},h.T,h.i)),i.ob(6,16384,null,0,b.d,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.d]),i.ob(8,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(10,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(11,49152,null,0,b.r,[i.h,i.k,i.z],null,null)],function(l,n){l(n,8,0,i.rb(1,"2#",n.context.$implicit.id,""))},function(l,n){l(n,4,0,n.context.$implicit.name),l(n,5,0,i.zb(n,10).ngClassUntouched,i.zb(n,10).ngClassTouched,i.zb(n,10).ngClassPristine,i.zb(n,10).ngClassDirty,i.zb(n,10).ngClassValid,i.zb(n,10).ngClassInvalid,i.zb(n,10).ngClassPending)})}function R(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,15,"ion-list",[],null,null,null,h.hb,h.v)),i.ob(1,49152,null,0,b.O,[i.h,i.k,i.z],null,null),(l()(),i.gb(16777216,null,0,1,null,F)),i.ob(3,278528,null,0,d.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(4,0,null,0,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(5,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(6,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(7,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Other"])),(l()(),i.pb(9,0,null,0,6,"ion-input",[["formControlName","otherBehavioral"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,10)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,10)._handleInputEvent(u.target.value)&&o),o},h.db,h.s)),i.ob(10,16384,null,0,b.Qb,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.Qb]),i.ob(12,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(14,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(15,49152,null,0,b.G,[i.h,i.k,i.z],null,null)],function(l,n){l(n,3,0,n.component.behavioralReactions),l(n,12,0,"otherBehavioral")},function(l,n){l(n,9,0,i.zb(n,14).ngClassUntouched,i.zb(n,14).ngClassTouched,i.zb(n,14).ngClassPristine,i.zb(n,14).ngClassDirty,i.zb(n,14).ngClassValid,i.zb(n,14).ngClassInvalid,i.zb(n,14).ngClassPending)})}function J(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(1,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(3,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(4,0,["",""])),(l()(),i.pb(5,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,6)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,6)._handleIonChange(u.target.checked)&&o),o},h.T,h.i)),i.ob(6,16384,null,0,b.d,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.d]),i.ob(8,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(10,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(11,49152,null,0,b.r,[i.h,i.k,i.z],null,null)],function(l,n){l(n,8,0,i.rb(1,"3#",n.context.$implicit.id,""))},function(l,n){l(n,4,0,n.context.$implicit.name),l(n,5,0,i.zb(n,10).ngClassUntouched,i.zb(n,10).ngClassTouched,i.zb(n,10).ngClassPristine,i.zb(n,10).ngClassDirty,i.zb(n,10).ngClassValid,i.zb(n,10).ngClassInvalid,i.zb(n,10).ngClassPending)})}function $(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,15,"ion-list",[],null,null,null,h.hb,h.v)),i.ob(1,49152,null,0,b.O,[i.h,i.k,i.z],null,null),(l()(),i.gb(16777216,null,0,1,null,J)),i.ob(3,278528,null,0,d.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(4,0,null,0,11,"ion-item",[],null,null,null,h.eb,h.t)),i.ob(5,49152,null,0,b.H,[i.h,i.k,i.z],null,null),(l()(),i.pb(6,0,null,0,2,"ion-label",[],null,null,null,h.fb,h.u)),i.ob(7,49152,null,0,b.N,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Other"])),(l()(),i.pb(9,0,null,0,6,"ion-input",[["formControlName","otherEmotional"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==i.zb(l,10)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==i.zb(l,10)._handleInputEvent(u.target.value)&&o),o},h.db,h.s)),i.ob(10,16384,null,0,b.Qb,[i.k],null,null),i.Eb(1024,null,a.g,function(l){return[l]},[b.Qb]),i.ob(12,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.r]],{name:[0,"name"]},null),i.Eb(2048,null,a.h,null,[a.d]),i.ob(14,16384,null,0,a.i,[[4,a.h]],null,null),i.ob(15,49152,null,0,b.G,[i.h,i.k,i.z],null,null)],function(l,n){l(n,3,0,n.component.emotionalReactions),l(n,12,0,"otherEmotional")},function(l,n){l(n,9,0,i.zb(n,14).ngClassUntouched,i.zb(n,14).ngClassTouched,i.zb(n,14).ngClassPristine,i.zb(n,14).ngClassDirty,i.zb(n,14).ngClassValid,i.zb(n,14).ngClassInvalid,i.zb(n,14).ngClassPending)})}function D(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,31,"ion-card",[],null,null,null,h.S,h.d)),i.ob(1,49152,null,0,b.m,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,17,"ion-card-header",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.expandItem(l.context.$implicit)&&i),i},h.P,h.f)),i.ob(3,49152,null,0,b.o,[i.h,i.k,i.z],null,null),(l()(),i.gb(16777216,null,0,1,null,v)),i.ob(5,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,C)),i.ob(7,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,k)),i.ob(9,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,y)),i.ob(11,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,x)),i.ob(13,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,w)),i.ob(15,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,I)),i.ob(17,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,E)),i.ob(19,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.pb(20,0,null,0,11,"ion-card-content",[],null,null,null,h.O,h.e)),i.ob(21,49152,null,0,b.n,[i.h,i.k,i.z],null,null),(l()(),i.pb(22,0,null,0,9,"app-expandable",[],null,null,null,m,f)),i.ob(23,4243456,null,0,p,[i.D],{expanded:[0,"expanded"]},null),(l()(),i.gb(16777216,null,0,1,null,O)),i.ob(25,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,H)),i.ob(27,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,R)),i.ob(29,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null),(l()(),i.gb(16777216,null,0,1,null,$)),i.ob(31,16384,null,0,d.k,[i.O,i.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,0==n.context.$implicit.type),l(n,7,0,0==n.context.$implicit.type),l(n,9,0,1==n.context.$implicit.type),l(n,11,0,1==n.context.$implicit.type),l(n,13,0,2==n.context.$implicit.type),l(n,15,0,2==n.context.$implicit.type),l(n,17,0,3==n.context.$implicit.type),l(n,19,0,3==n.context.$implicit.type),l(n,23,0,n.context.$implicit.expanded),l(n,25,0,0==n.context.$implicit.type),l(n,27,0,1==n.context.$implicit.type),l(n,29,0,2==n.context.$implicit.type),l(n,31,0,3==n.context.$implicit.type)},null)}function T(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,10,"ion-header",[],null,null,null,h.ab,h.p)),i.ob(1,49152,null,0,b.B,[i.h,i.k,i.z],null,null),(l()(),i.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,h.vb,h.K)),i.ob(3,49152,null,0,b.Bb,[i.h,i.k,i.z],null,null),(l()(),i.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,h.N,h.c)),i.ob(5,49152,null,0,b.l,[i.h,i.k,i.z],null,null),(l()(),i.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,h.ib,h.y)),i.ob(7,49152,null,0,b.R,[i.h,i.k,i.z],null,null),(l()(),i.pb(8,0,null,0,2,"ion-title",[],null,null,null,h.ub,h.J)),i.ob(9,49152,null,0,b.zb,[i.h,i.k,i.z],null,null),(l()(),i.Hb(-1,0,["Reactions"])),(l()(),i.pb(11,0,null,null,17,"ion-content",[],null,null,null,h.W,h.l)),i.ob(12,49152,null,0,b.u,[i.h,i.k,i.z],null,null),(l()(),i.pb(13,0,null,0,15,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==i.zb(l,15).onSubmit(u)&&o),"reset"===n&&(o=!1!==i.zb(l,15).onReset()&&o),o},null,null)),i.ob(14,16384,null,0,a.p,[],null,null),i.ob(15,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),i.Eb(2048,null,a.a,null,[a.e]),i.ob(17,16384,null,0,a.j,[[4,a.a]],null,null),(l()(),i.gb(16777216,null,null,1,null,D)),i.ob(19,278528,null,0,d.j,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(l()(),i.pb(20,0,null,null,8,"ion-row",[["class","signin"]],null,null,null,h.ob,h.D)),i.ob(21,49152,null,0,b.ib,[i.h,i.k,i.z],null,null),(l()(),i.pb(22,0,null,0,6,"ion-col",[["size","12"]],null,null,null,h.V,h.k)),i.ob(23,49152,null,0,b.t,[i.h,i.k,i.z],{size:[0,"size"]},null),(l()(),i.pb(24,0,null,0,4,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.setReactions()&&i),i},h.M,h.b)),i.ob(25,49152,null,0,b.k,[i.h,i.k,i.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),i.Hb(-1,0,["Next"])),(l()(),i.pb(27,0,null,0,1,"ion-icon",[["name","arrow-dropright"]],null,null,null,h.bb,h.q)),i.ob(28,49152,null,0,b.C,[i.h,i.k,i.z],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,15,0,u.reactionsForm),l(n,19,0,u.reactionTypes),l(n,23,0,"12"),l(n,25,0,"primary","block"),l(n,28,0,"arrow-dropright")},function(l,n){l(n,13,0,i.zb(n,17).ngClassUntouched,i.zb(n,17).ngClassTouched,i.zb(n,17).ngClassPristine,i.zb(n,17).ngClassDirty,i.zb(n,17).ngClassValid,i.zb(n,17).ngClassInvalid,i.zb(n,17).ngClassPending)})}function _(l){return i.Jb(0,[(l()(),i.pb(0,0,null,null,1,"app-reactions",[],null,null,null,T,z)),i.ob(1,114688,null,0,s,[b.Ib,a.b,r.a],null,null)],function(l,n){l(n,1,0)},null)}var L=i.lb("app-reactions",s,_,{},{},[]),N=u("ZYCi");u.d(n,"ReactionsPageModuleNgFactory",function(){return q});var q=i.mb(c,[],function(l){return i.wb([i.xb(512,i.j,i.bb,[[8,[g.a,L]],[3,i.j],i.x]),i.xb(4608,d.m,d.l,[i.u,[2,d.s]]),i.xb(4608,a.q,a.q,[]),i.xb(4608,a.b,a.b,[]),i.xb(4608,b.c,b.c,[i.z,i.g]),i.xb(4608,b.Hb,b.Hb,[b.c,i.j,i.q]),i.xb(4608,b.Mb,b.Mb,[b.c,i.j,i.q]),i.xb(1073742336,d.b,d.b,[]),i.xb(1073742336,a.o,a.o,[]),i.xb(1073742336,a.f,a.f,[]),i.xb(1073742336,a.m,a.m,[]),i.xb(1073742336,b.Db,b.Db,[]),i.xb(1073742336,N.o,N.o,[[2,N.u],[2,N.m]]),i.xb(1073742336,c,c,[]),i.xb(1024,N.k,function(){return[[{path:"",component:s}]]},[])])})}}]);