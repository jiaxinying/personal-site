(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{19:function(e,n,t){"use strict";var i=t(0),c=t(1),a=t(22),l=t(3),s=t(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),h=t(21),d=[{index:!0,label:"Jiaxin Ying",path:"/"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(c.lazy)((function(){return t.e(5).then(t.t.bind(null,167,7))})),x=function(){var e=Object(c.useState)(!1),n=Object(h.a)(e,2),t=n[0],a=n[1];return Object(i.jsxs)("div",{className:"hamburger-container",children:[Object(i.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(i.jsx)("ul",{children:t?Object(i.jsx)("li",{className:"menu close-menu",children:Object(i.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2715"})}):Object(i.jsx)("li",{className:"menu open-menu",children:Object(i.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{}),children:Object(i.jsx)(O,{right:!0,isOpen:t,children:Object(i.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:e.path,onClick:function(){return a(!t)},children:Object(i.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(i.jsxs)("header",{id:"header",children:[Object(i.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(i.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(i.jsx)("nav",{className:"links",children:Object(i.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(i.jsx)(x,{})]})},p=t(24),f=function(){return Object(i.jsxs)("section",{id:"sidebar",children:[Object(i.jsxs)("section",{id:"intro",children:[Object(i.jsx)(u.b,{to:"/",className:"logo",children:Object(i.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(i.jsxs)("header",{children:[Object(i.jsx)("h2",{children:"Jiaxin Ying"}),Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"mailto:jiaxinyi@umich.edu",children:"jiaxinyi@umich.edu"})})]})]}),Object(i.jsxs)("section",{className:"blurb",children:[Object(i.jsx)("h2",{children:"About"}),Object(i.jsx)("p",{children:"Hi, I'm Jiaxin, a student at the University of Michigan majoring in Mathematics and Computer Science. My research interest lies in statistical analysis and machine learning, particularly graph algorithms and natural language processing."}),Object(i.jsx)("ul",{className:"actions",children:Object(i.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(i.jsx)(u.b,{to:"/",className:"button",children:"About Me"}):Object(i.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(i.jsxs)("section",{id:"footer",children:[Object(i.jsx)(p.a,{}),Object(i.jsxs)("p",{className:"copyright",children:["\xa9 Jiaxin Ying ",Object(i.jsx)(u.b,{to:"/",children:"jiaxinying.me"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{}),Object(i.jsx)(g,{}),Object(i.jsxs)(a.a,{titleTemplate:"%s | Jiaxin Ying",defaultTitle:"Jiaxin Ying",children:[e.title&&Object(i.jsx)("title",{children:e.title}),Object(i.jsx)("meta",{name:"description",content:e.description})]}),Object(i.jsxs)("div",{id:"wrapper",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(i.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Jiaxin Ying's personal website."};n.a=v},24:function(e,n,t){"use strict";var i=t(0),c=(t(1),t(28)),a=t(29),l=t(30),s=t(31),r=t(32),j=[{link:"https://github.com/jiaxinying",label:"Github",icon:a.faGithub},{link:"https://facebook.com/jiaxinying.me",label:"Facebook",icon:l.faFacebookF},{link:"https://www.linkedin.com/in/jiaxinying",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:jiaxinyi@umich.edu",label:"Email",icon:r.faEnvelope}];n.a=function(){return Object(i.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.link,children:Object(i.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(1),a=t(15),l=t(5),s=t(3),r=t(19),j=(t(45),Object(c.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,164))}))),o=Object(c.lazy)((function(){return t.e(9).then(t.bind(null,165))})),b=Object(c.lazy)((function(){return t.e(10).then(t.bind(null,166))})),u=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,170))})),h=Object(c.lazy)((function(){return t.e(6).then(t.bind(null,168))})),d=Object(c.lazy)((function(){return Promise.all([t.e(4),t.e(11)]).then(t.bind(null,169))})),O=function(){return Object(i.jsx)(l.a,{basename:"/personal-site",children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(r.a,{}),children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",component:j}),Object(i.jsx)(s.a,{path:"/projects",component:u}),Object(i.jsx)(s.a,{path:"/stats",component:d}),Object(i.jsx)(s.a,{path:"/contact",component:o}),Object(i.jsx)(s.a,{path:"/resume",component:h}),Object(i.jsx)(s.a,{component:b,status:404})]})})})},x=document.getElementById("root");x.hasChildNodes()?Object(a.hydrate)(Object(i.jsx)(O,{}),x):Object(a.render)(Object(i.jsx)(O,{}),x)}},[[46,1,3]]]);
//# sourceMappingURL=main.af112a40.chunk.js.map