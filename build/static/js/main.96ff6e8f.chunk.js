(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return m}));var a=t(3),c=(t(1),t(43)),i=t(47),r=t(49),l=t(10),s=t(45),o=t(48),j=t(26),d=t(46),u=(t(37),Object(c.a)({table:{minWidth:650}}));function h(e,n,t,a){return{nombre:e,apellido:n,edad:t,mail:a}}var b=[h("Franciscoo","Gonz\xe1lez",22,"francisco.gonzales@g.com"),h("Carolina","Rodr\xedguez",28,"carolina.rodriguez@g.com"),h("Luis","G\xf3mez",36,"luis.gomez@g.com"),h("Catalina","Fern\xe1ndez",25,"catalina.fernandez@g.com"),h("William","Garc\xeda",30,"william.garcia@g.com")];function m(){var e=u();return Object(a.jsxs)("div",{className:"table-style",children:[Object(a.jsx)(s.a,{component:d.a,children:Object(a.jsxs)(i.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(o.a,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(l.a,{align:"center",children:"Nombre"}),Object(a.jsx)(l.a,{align:"center",children:"Apellido"}),Object(a.jsx)(l.a,{align:"center",children:"Edad (a\xf1os)"}),Object(a.jsx)(l.a,{align:"center",children:"Mail"})]})}),Object(a.jsx)(r.a,{children:b.map((function(e){return Object(a.jsxs)(j.a,{children:[Object(a.jsx)(l.a,{align:"center",component:"th",scope:"row",children:e.nombre}),Object(a.jsx)(l.a,{align:"center",children:e.apellido}),Object(a.jsx)(l.a,{align:"center",children:e.edad}),Object(a.jsx)(l.a,{align:"center",children:e.mail})]},e.name)}))})]})}),Object(a.jsx)("footer",{className:"foot-page",children:"Derechos reservados 2020, P\xe1gina de ejemplo para Tingeso"})]})}e.export={DenseTable:"DenseTable"}}).call(this,t(36)(e))},34:function(e,n,t){},35:function(e,n,t){},37:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(3),c=t(1),i=t.n(c),r=t(19),l=t.n(r),s=(t(34),t(20)),o=t(21),j=t(25),d=t(24),u=(t(35),t.p+"static/media/imagen_1.f6c075f6.jpg"),h=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={data:""},a}return Object(o.a)(t,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:9000/getList").then((function(e){return e.text()})).then((function(n){return e.setState({data:n})})).catch((function(e){return e}))}},{key:"UNSAFE_componentWillMount",value:function(){this.callAPI()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("h1",{children:"Lista de clientes"}),Object(a.jsx)("img",{className:"imagen",src:u,alt:"imagen"})]})})}}]),t}(c.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,70)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),i(e),r(e)}))},m=t(22);l.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(m.a,{})]}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.96ff6e8f.chunk.js.map