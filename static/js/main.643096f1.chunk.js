(this["webpackJsonpprojekt1-react"]=this["webpackJsonpprojekt1-react"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l);t(8),t(9),t(10);var s=function(e){var a=e.name,t=e.desc,n=e.img;return r.a.createElement("div",{className:"about-box-specialist"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"about-img-specialist about-img1-specialist"}),r.a.createElement("div",{className:"about-specialist-description text-black"},r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))},i=[{id:1,name:"Marta",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementumlorem in, varius pellentesque",img:"https://images.unsplash.com/photo-1543096222-72de739f7917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"},{id:2,name:"Zofia",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementumlorem in, varius pellentesque",img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"}];var o=function(){return r.a.createElement("section",{id:"about",className:"about"},r.a.createElement("div",{className:"container container-flex-column"},r.a.createElement("h1",{className:"text-blue"},"Nasi specjali\u015bci"),i.map((function(e){return r.a.createElement(s,{key:e.id,name:e.name,desc:e.desc,img:e.img})}))))};t(11);var m=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container container-footer"},r.a.createElement("span",null,"Nazwa firmy - wszelkie prawa zastrze\u017cone, 2019"),r.a.createElement("div",{className:"footer-icon"},r.a.createElement("a",{href:"https://www.instagram.com/?hl=pl",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram",style:{color:"white"}})),r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square",style:{color:"white"}})))))};t(12);var u=function(){return r.a.createElement("section",{className:"landing-page"},r.a.createElement("div",{className:"landing-page-shadow"},r.a.createElement("div",{className:"container container-text"},r.a.createElement("h1",null,"Nasza firma oferuje najwy\u017cszej jako\u015bci produkty."),r.a.createElement("h2",null,"Nie wierz nam na s\u0142owo - sprawd\u017a"),r.a.createElement("a",{href:"#offers",className:"offerBtn"},"oferta"))))};t(13);var f=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"container container-flex"},r.a.createElement("a",{href:!0,className:"nav-logo"},"moja firma"),r.a.createElement("div",{className:"nav-links"},r.a.createElement("a",{href:"#about"},"o nas"),r.a.createElement("a",{href:"#offers"},"oferta"),r.a.createElement("a",{href:!0,className:"contact"},"kontakt")),r.a.createElement("div",{className:"hamburger-menu"},r.a.createElement("label",{htmlFor:"hamburger"},r.a.createElement("input",{id:"hamburger",className:"hamburger",type:"checkbox"}),r.a.createElement("i",{className:"fas fa-bars",style:{color:"white"}}),r.a.createElement("div",{className:"hidden"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"o nas")),r.a.createElement("li",null,r.a.createElement("a",{href:"#offers"},"oferta")),r.a.createElement("li",null,r.a.createElement("a",{href:!0,className:"contact"},"kontakt"))))))))};t(14);var d=function(e){var a=e.title,t=e.isNew;return e.key,r.a.createElement("div",{className:"offers-wrapper-box"},r.a.createElement("div",{className:"".concat(t?"offers-dott":"")}),r.a.createElement("div",{className:"offers-wrapper-box-content"},r.a.createElement("h2",null,a),t&&r.a.createElement("span",null,"(nowo\u015b\u0107)")))},E=[{id:1,offerName:"Us\u0142uga 1",isNew:!1},{id:2,offerName:"Us\u0142uga 2",isNew:!0},{id:3,offerName:"Us\u0142uga 3",isNew:!1},{id:4,offerName:"Us\u0142uga 4",isNew:!0},{id:5,offerName:"Us\u0142uga 5",isNew:!1},{id:6,offerName:"Us\u0142uga 6",isNew:!0}];var p=function(){return r.a.createElement("section",{className:"offers",id:"offers"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Czym zajmuje si\u0119 nasza firma?"),r.a.createElement("div",{className:"offers-wrapper"},E.map((function(e){return r.a.createElement(d,{title:e.offerName,isNew:e.isNew,key:e.id})})))))};var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement(u,null),r.a.createElement(o,null),r.a.createElement(p,null),r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.643096f1.chunk.js.map