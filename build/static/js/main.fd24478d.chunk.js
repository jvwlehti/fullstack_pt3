(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),u=t.n(c),r=t(8),a=t(3),i=t(2),o=t(0),s=function(e){var n=e.person,t=e.toggleDelete;return Object(o.jsxs)("p",{children:[n.name," ",n.number,Object(o.jsx)("button",{onClick:t,children:"Delete"})]})},l=function(e,n){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))},j=function(e){var n=e.text,t=e.action;return Object(o.jsx)("form",{children:Object(o.jsxs)("div",{children:["filter shown with",Object(o.jsx)("input",{value:n,onChange:t})]})})},d=t(4),f=t.n(d),b="/api/persons",h=function(){return f.a.get(b).then((function(e){return e.data}))},m=function(e){return f.a.post(b,e).then((function(e){return e.data}))},O=function(e,n){return f.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"effect",children:n})},p=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"error",children:n})},g=function(e){var n=e.submit,t=e.name,c=e.nameChange,u=e.num,r=e.numChange;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name:",Object(o.jsx)("input",{value:t,onChange:c})]}),Object(o.jsxs)("div",{children:["number:",Object(o.jsx)("input",{value:u,onChange:r})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},w=function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(i.useState)(""),d=Object(a.a)(u,2),f=d[0],b=d[1],w=Object(i.useState)(""),C=Object(a.a)(w,2),S=C[0],T=C[1],k=Object(i.useState)(""),y=Object(a.a)(k,2),D=y[0],N=y[1],J=Object(i.useState)(null),E=Object(a.a)(J,2),L=E[0],A=E[1],B=Object(i.useState)(null),I=Object(a.a)(B,2),P=I[0],q=I[1];Object(i.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var z=l(t,D);return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(v,{message:L}),Object(o.jsx)(p,{message:P}),Object(o.jsx)(j,{text:D,action:function(e){N(e.target.value)}}),Object(o.jsx)("h2",{children:"add a new"}),Object(o.jsx)(g,{submit:function(e){e.preventDefault();var n={name:f,number:S},u=t.find((function(e){return e.name===f}));if(t.includes(u)){if(!0===window.confirm("".concat(f," is already added to \n     phonebook, replace the old number with a new one?"))){var a=u.id,i=Object(r.a)(Object(r.a)({},u),{},{number:S});O(a,i).then((function(e){c(t.map((function(n){return n.id!==a?n:e}))),b(""),T(""),A("The old number of ".concat(f," changed")),setTimeout((function(){A(null)}),3e3)})).catch((function(e){q("".concat(f," was already deleted from server")),setTimeout((function(){q(null)}),3e3)}))}}else m(n).then((function(e){c(t.concat(e)),A("".concat(f," Added")),setTimeout((function(){A(null)}),3e3)})).catch((function(e){q(JSON.stringify(e.response.data.error.message)),setTimeout((function(){q(null)}),3e3)}));b(""),T("")},name:f,nameChange:function(e){b(e.target.value)},num:S,numChange:function(e){T(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)("div",{children:z.map((function(e){return Object(o.jsx)(s,{person:e,toggleDelete:function(){return function(e){var n=t.find((function(n){return n.id===e}));!0===window.confirm("Delete ".concat(n.name))&&(x(e).then(c(t.filter((function(n){return n.id!==e})))),A("".concat(n.name," deleted")),setTimeout((function(){A(null)}),3e3))}(e.id)}},e.id)}))})]})};t(41);u.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fd24478d.chunk.js.map