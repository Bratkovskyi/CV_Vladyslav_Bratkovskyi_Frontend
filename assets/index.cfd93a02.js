import{S as b,P as L,W as v,T as M,M as w,a as f,b as S,A as z,c as m,B as P,d as A,e as g,f as T}from"./vendor.24401f9c.js";const j=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};j();const t=new b,n=new L(75,window.innerWidth/window.innerHeight,.1,1e3),u=new v({canvas:document.querySelector("#bg")});u.setPixelRatio(window.devicePixelRatio);u.setSize(window.innerWidth,window.innerHeight);n.position.setZ(30);n.position.setX(-3);u.render(t,n);const B=new M(10,3,16,100),G=new w({color:55}),l=new f(B,G);t.add(l);const y=new S(16777215);y.position.set(5,5,5);const O=new z(16777215);t.add(y,O);function R(){const i=new g(.25,24,24),a=new w({color:16777215}),c=new f(i,a),[d,e,o]=Array(3).fill().map(()=>T.randFloatSpread(100));c.position.set(d,e,o),t.add(c)}Array(200).fill().forEach(R);const W=new m().load("./img/space.jpg");t.background=W;const q=new m().load("./img/vlad.jpg"),s=new f(new P(3,3,3),new A({map:q}));t.add(s);s.position.z=-5;s.position.x=2.1;const C=new m().load("./img/moon.jpg"),F=new m().load("./img/normal.jpg"),r=new f(new g(3,32,32),new w({map:C,normalMap:F}));t.add(r);r.position.z=30;r.position.setX(-10);function h(){const i=document.body.getBoundingClientRect().top;r.rotation.x+=.05,r.rotation.y+=.075,r.rotation.z+=.05,s.rotation.y+=.01,s.rotation.z+=.01,n.position.z=i*-.01,n.position.x=i*-2e-4,n.rotation.y=i*-2e-4}document.body.onscroll=h;h();function x(){requestAnimationFrame(x),l.rotation.x+=.01,l.rotation.y+=.005,l.rotation.z+=.01,r.rotation.x+=.005,u.render(t,n)}x();