(this["webpackJsonptypescript-in-react"]=this["webpackJsonptypescript-in-react"]||[]).push([[1],{19:function(e,t,s){},27:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(10),r=s.n(c),i=(s(19),s(13)),o=s(14),u=s(2),d=s(1),j={episodes:[],favourites:[]},p=n.a.createContext(j);function l(e,t){switch(t.type){case"FETCH_DATA":return Object(u.a)(Object(u.a)({},e),{},{episodes:t.payload});case"ADD_FAV":return Object(u.a)(Object(u.a)({},e),{},{favourites:[].concat(Object(o.a)(e.favourites),[t.payload])});case"REMOVE_FAV":return Object(u.a)(Object(u.a)({},e),{},{favourites:t.payload});default:return e}}function b(e){var t=n.a.useReducer(l,j),s=Object(i.a)(t,2),a=s[0],c=s[1];return Object(d.jsx)(p.Provider,{value:{state:a,dispatch:c},children:e.children})}var h=s(5);s(27);function O(e){var t=Object(a.useContext)(p).state;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Rick and Morty"}),Object(d.jsx)("p",{children:"Pick your favourite episode!!"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(h.a,{to:"/",children:"Home"}),Object(d.jsxs)(h.a,{to:"/favourites",children:[" Favourite(s): ",t.favourites.length]})]})]}),e.children]})}var f=s(8),v=s.n(f),x=s(12),m=function(){var e=Object(x.a)(v.a.mark((function e(t){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty===&embed=episodes",e.next=3,fetch("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty===&embed=episodes");case 3:return s=e.sent,e.next=6,s.json();case 6:return a=e.sent,e.abrupt("return",t({type:"FETCH_DATA",payload:a._embedded.episodes}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t,s){var a=e.favourites.includes(s),n={type:"ADD_FAV",payload:s};a&&(n={type:"REMOVE_FAV",payload:e.favourites.filter((function(e){return e.id!==s.id}))});return t(n)},g=n.a.lazy((function(){return s.e(0).then(s.bind(null,30))}));function A(){var e=Object(a.useContext)(p),t=e.state,s=e.dispatch;Object(a.useEffect)((function(){0===t.episodes.length&&m(s)}),[]);var c={episodes:t.episodes,store:{state:t,dispatch:s},toggleFavAction:y,favourites:t.favourites};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a.Suspense,{fallback:Object(d.jsx)("div",{children:"loading..."}),children:Object(d.jsx)("section",{className:"episode-layout",children:Object(d.jsx)(g,Object(u.a)({},c))})})})}var F=n.a.lazy((function(){return s.e(0).then(s.bind(null,30))}));function k(){var e=Object(a.useContext)(p),t=e.state,s=e.dispatch,c={episodes:t.favourites,store:{state:t,dispatch:s},toggleFavAction:y,favourites:t.favourites};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(n.a.Suspense,{fallback:Object(d.jsx)("div",{children:"loading..."}),children:Object(d.jsx)("div",{className:"episode-layout",children:Object(d.jsx)(F,Object(u.a)({},c))})})})}var C=function(e){return e.pageComponent};r.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(h.b,{children:Object(d.jsxs)(O,{path:"/",children:[Object(d.jsx)(C,{pageComponent:Object(d.jsx)(A,{}),path:"/"}),Object(d.jsx)(C,{pageComponent:Object(d.jsx)(k,{}),path:"/faves"})]})})}),document.getElementById("root"))}},[[29,2,3]]]);
//# sourceMappingURL=main.c75fc599.chunk.js.map