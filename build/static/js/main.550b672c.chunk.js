(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(45)},43:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(15),o=t.n(r),i=t(2),l=t(3),p=t(5),u=t(4),h=t(6),d=t(16),s=t(8),m=t.n(s),b=t(17),f=(t(43),function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).state={name:"",invoiceID:0,price1:0,price2:0},t.handleChange=function(e){var n=e.target,a=n.value,c=n.name;return t.setState(Object(d.a)({},c,a))},t.createAndDownloadPdf=function(){m.a.post("/create-pdf",t.state).then(function(){return m.a.get("fetch-pdf",{responseType:"blob"})}).then(function(e){var n=new Blob([e.data],{type:"application/pdf"});Object(b.saveAs)(n,"newPdf.pdf")})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"Inputs"},c.a.createElement("input",{type:"text",placeholder:"NIP",name:"nip",onChange:this.handleChange}),c.a.createElement("input",{type:"number",placeholder:"InvoiceID",name:"invoiceID",onChange:this.handleChange}),c.a.createElement("input",{type:"text",placeholder:"Item name",name:"itemName",onChange:this.handleChange}),c.a.createElement("input",{type:"number",placeholder:"Price 1",name:"price1",onChange:this.handleChange}),c.a.createElement("input",{type:"number",placeholder:"Price 2",name:"price2",onChange:this.handleChange}),c.a.createElement("button",{onClick:this.createAndDownloadPdf},"Download PDF"))}}]),n}(a.Component)),j=function(e){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Invoices generator app"))}}]),n}(a.Component),v=function(e){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(f,null))}}]),n}(a.Component);o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.550b672c.chunk.js.map