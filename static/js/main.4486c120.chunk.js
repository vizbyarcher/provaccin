(this.webpackJsonpprovaccin=this.webpackJsonpprovaccin||[]).push([[0],{74:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(12),a=n.n(r),i=n(131),l=n(130),u=n(13),o=n(14),s=n(17),j=n(129),b=n(77),d=n(134),O=n(120),h=n(119),f=n(51),p=n(132),x=n(133),g=n(123),m=n(127),v=n(126),y=n(121),S=n(124),w=n(125),C=n(122),z=n(5);function I(t){return Object(z.jsx)(f.a,Object(s.a)(Object(s.a)({},t),{},{children:Object(z.jsx)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})}))}var L=Object(h.a)((function(t){return{root:{margin:t.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:t.spacing(1)},table:{minWidth:450}}}));function N(t){t.link;var e=L();return Object(z.jsxs)(b.a,{className:e.root,color:"textPrimary",children:[Object(z.jsx)(I,{className:e.lightBulb}),"Selectati judetul, orasul si centrul pentru afisarea datelor relevante pentru programarea la vaccinare:"]})}function k(){return Object(z.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"center",children:[Object(z.jsx)("br",{}),"Copyright \xa9 ",Object(z.jsx)(O.a,{color:"inherit",href:"https://github.com/vizbyarcher/",children:"VizbyArcher"})," ",(new Date).getFullYear(),"."]})}var A="available",V="scheduled",W=[{prop:A,direction:-1},{prop:V,direction:1}],B=function(){var t=Object(c.useState)("Bucuresti"),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),i=Object(u.a)(a,2),l=i[0],j=i[1],b=Object(c.useState)(null),d=Object(u.a)(b,2),O=d[0],h=d[1],f=Object(c.useState)([]),I=Object(u.a)(f,2),N=I[0],k=I[1],A=Object(c.useState)([]),V=Object(u.a)(A,2),B=V[0],E=V[1],F=Object(c.useState)([]),J=Object(u.a)(F,2),D=J[0],P=J[1],R=Object(c.useState)([]),T=Object(u.a)(R,2),q=T[0],H=T[1],M=Object(c.useState)(null),Y=Object(u.a)(M,2),G=Y[0],K=Y[1];Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/vizbyarcher/provaccin/master/data/vaccinari.json").then((function(t){return t.json()})).then((function(t){t.sort((function(t,e){for(var n=0,c=0;n<W.length&&0===c;)c=W[n].direction*(t[W[n].prop]<e[W[n].prop]?-1:t[W[n].prop]>e[W[n].prop]?1:0),n++;return c})),k(t),K(t.find((function(t){return 0===t.id})).date)}))}),[]),Object(c.useEffect)((function(){var t;N?E((t=N)?Object(o.a)(new Set(t.sort((function(t,e){return t.county>e.county?1:-1})).map((function(t){return t.county})))):[]):console.log("No data for itemsFirst")}),[N]),Object(c.useEffect)((function(){P(n?function(t,e){if(e){var n=t.filter((function(t){return t.county===e}));return Object(o.a)(new Set(n.map((function(t){return t.city}))))}return[]}(N,n):[])}),[N,n]),Object(c.useEffect)((function(){N.length>0&&(n?(H(function(t,e,n){if(e){var c=t.filter((function(t){return t.county===e}));if(n){var r=c.filter((function(t){return t.city===n}));return Object(o.a)(new Set(r.map((function(t){return t.name}))))}return Object(o.a)(new Set(c.map((function(t){return t.name}))))}return[]}(N,n,l)),!l&&O&&j(N.find((function(t){return t.name===O})).city)):H([]))}),[N,n,l,O]);var Q=function(t){var e=L(),n=t.props.items,c=t.props.valueFirst,r=t.props.valueSecond,a=t.props.valueThird,i=n;return a?i=n.filter((function(t){return t.county===c})).filter((function(t){return t.city===r})).filter((function(t){return t.name===a})):r?i=n.filter((function(t){return t.county===c})).filter((function(t){return t.city===r})):c&&(i=n.filter((function(t){return t.county===c}))),Object(z.jsxs)(y.a,{component:C.a,children:[i&&Object(z.jsx)("div",{children:Object(z.jsx)("small",{children:Object(z.jsxs)("i",{children:[i.length," inregistrari"]})})}),Object(z.jsxs)(g.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(z.jsx)(S.a,{children:Object(z.jsxs)(w.a,{children:[Object(z.jsx)(v.a,{children:"Centrul"}),Object(z.jsx)(v.a,{align:"right",children:"Libere"}),Object(z.jsx)(v.a,{align:"right",children:"In\xa0asteptare"}),Object(z.jsx)(v.a,{align:"right",children:"Localitatea"}),Object(z.jsx)(v.a,{align:"right",children:"Judetul"}),Object(z.jsx)(v.a,{align:"right",children:"Adresa"})]})}),Object(z.jsx)(m.a,{children:i.map((function(t){return Object(z.jsxs)(w.a,{children:[Object(z.jsx)(v.a,{component:"th",scope:"row",children:t.name}),Object(z.jsx)(v.a,{align:"right",children:t.available}),Object(z.jsx)(v.a,{align:"right",children:t.scheduled}),Object(z.jsx)(v.a,{align:"right",children:t.city}),Object(z.jsx)(v.a,{align:"right",children:t.county}),Object(z.jsx)(v.a,{align:"right",children:t.address})]},t.id)}))})]})]})};return Object(z.jsxs)("div",{className:"combo-county",children:[N&&Object(z.jsx)(x.a,{id:"combo-box-first",options:B,getOptionLabel:function(t){return t},value:n,style:{width:380},onChange:function(t,e){e?(r(e),j(null),h(null)):(r(null),j(null),h(null))},renderInput:function(t){return Object(z.jsx)(p.a,Object(s.a)(Object(s.a)({},t),{},{label:"Judetul:",variant:"outlined",fullWidth:!0}))}}),Object(z.jsx)("br",{}),N&&Object(z.jsx)(x.a,{id:"combo-box-second",options:D,getOptionLabel:function(t){return t},value:l,style:{width:380},onChange:function(t,e){e?(j(e),h(null)):(j(null),h(null))},renderInput:function(t){return Object(z.jsx)(p.a,Object(s.a)(Object(s.a)({},t),{},{label:"Localitatea/sectorul:",variant:"outlined",fullWidth:!0}))}}),Object(z.jsx)("br",{}),N&&Object(z.jsx)(x.a,{id:"combo-box-second",options:q,getOptionLabel:function(t){return t},value:O,style:{width:380},onChange:function(t,e){h(e||null)},renderInput:function(t){return Object(z.jsx)(p.a,Object(s.a)(Object(s.a)({},t),{},{label:"Centrul:",variant:"outlined",fullWidth:!0}))}}),Object(z.jsx)("br",{}),G&&Object(z.jsx)("p",{children:Object(z.jsxs)("small",{children:["Date actualizate la: ",G]})}),G&&Object(z.jsx)(Q,{props:{items:N,valueFirst:n,valueSecond:l,valueThird:O}})]})};function E(){return Object(z.jsx)(j.a,{maxWidth:"sm",children:Object(z.jsxs)(d.a,{my:4,children:[Object(z.jsx)(b.a,{variant:"h5",component:"h1",gutterBottom:!0,children:"PROgramare VACCIN COVID-19"}),Object(z.jsx)(N,{link:"www.google.com"}),Object(z.jsx)(B,{}),Object(z.jsx)(k,{})]})})}var F=n(39),J=n(50),D=Object(J.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:F.a.A400},background:{default:"#fff"}}});a.a.render(Object(z.jsxs)(l.a,{theme:D,children:[Object(z.jsx)(i.a,{}),Object(z.jsx)(E,{})]}),document.querySelector("#root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.4486c120.chunk.js.map