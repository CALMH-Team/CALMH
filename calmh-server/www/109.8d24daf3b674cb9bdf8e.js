(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{wJHV:function(e,n,i){"use strict";i.r(n),i.d(n,"mdTransitionAnimation",function(){return o});var o=function(e,n,i){var o=i.leavingEl,r=a(i.enteringEl),t=new e;t.addElement(r).beforeRemoveClass("ion-page-invisible");var c="back"===i.direction;c?t.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):t.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("translateY","40px","0px",!0).fromTo("opacity",.01,1,!0);var s=r.querySelector("ion-toolbar");if(s){var d=new e;d.addElement(s),t.add(d)}if(o&&c){t.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var u=new e;u.addElement(a(o)).fromTo("translateY","0px","40px").fromTo("opacity",1,0),t.add(u)}return Promise.resolve(t)},a=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}}}]);