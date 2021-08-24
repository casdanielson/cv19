(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),l=n.n(u),j=n(11),d=n(10),b=n(8),h=n(2),p=(n(31),n(1)),f=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})};f.defaultProps={color:"steelblue"};var O=f,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(h.e)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("h1",{children:t}),"/"===c.pathname&&Object(p.jsx)(O,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"CV-19 Task Tracker"};var m=x,v=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("p",{children:"Copyright \xa9 2021 Rapture Dev"}),Object(p.jsx)(b.b,{to:"/about",children:"App Info"})]})},k=n(18),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(p.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(p.jsxs)("h3",{children:[t.text," ",Object(p.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(p.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(p.jsx)(p.Fragment,{children:t.map((function(e,t){return Object(p.jsx)(g,{task:e,onDelete:n,onToggle:r},t)}))})},C=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!1),b=Object(d.a)(j,2),h=b[0],f=b[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),l(""),f(!1)):alert("Please add a task, human!")},children:[Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Task"}),Object(p.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control",children:[Object(p.jsx)("label",{children:"Day & Time"}),Object(p.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsxs)("div",{className:"form-control form-control-check",children:[Object(p.jsx)("label",{children:"Set Reminder"}),Object(p.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(p.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},T=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"Version 1.0.0"}),Object(p.jsx)(b.b,{to:"/",children:"Back To App"})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],f=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:f(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:e.sent,f(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:!e.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(m,{onAdd:function(){return c(!n)},showAdd:n}),Object(p.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(C,{onAdd:k}),Object(p.jsxs)("h4",{children:["Emergency Response by ","Fauci"]}),Object(p.jsxs)("h4",{children:["Masking Order: ",2," Orders Active in the U.S."]}),Object(p.jsxs)("h4",{children:["Delta Variant Active?: ","Yes"]}),Object(p.jsx)("br",{}),u.length>0?Object(p.jsx)(y,{tasks:u,onDelete:g,onToggle:w}):"All CV-19 Tasks Completed!"]})}}),Object(p.jsx)(h.a,{path:"/about",component:T}),Object(p.jsx)(v,{})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.c4db7b13.chunk.js.map