(this["webpackJsonpmultimodal-tool"]=this["webpackJsonpmultimodal-tool"]||[]).push([[0],{122:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),r=n.n(o),s=n(25),i=n.n(s),a=(n(122),n(12)),l=n(3),j=n(5);n(22);var u=function(){Object(l.f)();var e=Object(l.g)(),t=Object(o.useState)(!0),n=Object(j.a)(t,2),r=n[0],s=n[1];return Object(o.useEffect)((function(){/^\S*\/instances\//.test(e.pathname)?s(!1):s(!0)}),[e]),r&&Object(c.jsxs)("div",{className:"nav-container",children:[Object(c.jsx)("p",{children:"Mode: "}),Object(c.jsx)("div",{children:Object(c.jsx)(a.b,{to:"/explore/instances",children:"Exploration  |"})}),Object(c.jsx)("div",{children:Object(c.jsx)(a.b,{to:"/comparison/instances",children:"| Comparison"})}),Object(c.jsx)("style",{jsx:"true",children:"\n        .nav-container {\n          height: 140px;\n          padding: 0px 50px;\n          display: flex;\n          justify-content: flex-end;\n          align-items: center;\n        }\n        "})]})},d=n(7);var b=function(e){var t=e.data,n=e.selectedObjNumber,r=e.selectedObjName,s=e.selectedYaxis,i=e.selectedXaxis;return Object(o.useEffect)((function(){if(t.predictions){var e=[];if(fetch("http://172.28.218.139:8080/api/v1/data/getScore").then((function(e){return e.json()})).then((function(e){return console.log(e)})),"num of objects"===i){var n=t.predictions.filter((function(e){return e.object_categories.includes(r)}));console.log(n);var c=function(e,t){var n={};return e.map((function(c){if(!n[c[t]]){n[c[t]]=!0;var o=e.filter((function(e){return e[t]===c[t]}));return{xGroup:c[t],instances:o}}})).filter((function(e){return e}))}(n,"num_objects");console.log(c)}else{var o=t.predictions.filter((function(e){return e.object_categories.includes(r)}));console.log(o);var a=function(e,t){var n={};return e.map((function(c){if(!n[c[t]]){n[c[t]]=!0;var o=e.filter((function(e){return e[t]===c[t]}));return{xGroup:c[t],instances:o}}})).filter((function(e){return e}))}(o,"num_objects");console.log(a)}console.log(e),d.g("svg > *").remove();var l=d.f("#plot"),j=40,u=s,b=i,p=d.d().domain([0,d.c(e,(function(e){return e.xGroup}))]).range([j,520]),x=d.d().domain([0,d.c(e,(function(e){return e.Bleu_1}))]).range([460,j]),f=d.d().domain([0,d.c(e,(function(e){return e.size}))]).range([5,10]),O=d.a().scale(p),h=d.b().scale(x),m=d.e().domain([0,d.c(e,(function(e){return e.num_objects}))]).range(["gold","blue","green","yellow","black","grey","darkgreen","pink","brown","slateblue","grey1","orange"]);l.append("g").attr("transform","translate(0, 460)").attr("class","axis").call(O),l.append("text").attr("y",480).attr("x",300).attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text(b),l.append("g").attr("class","axis").attr("transform","translate(40,0)").call(h),l.append("text").attr("transform","translate(-2, 250) rotate(-90)").attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text(u);var v=d.f("body").append("div").attr("class","tooltip").style("opacity",0);l.selectAll("circle").data(e).enter().append("circle").attr("cx",(function(e){return p(e.num_objects)})).attr("cy",(function(e){return x(e.Bleu_1)})).attr("r",(function(e){return f(e.size)})).attr("fill",(function(e){return m(e.num_objects)})).on("mousedown",(function(e,t){v.html("Object Number is:"+t.num_objects+"</ br>Score:"+t.Bleu_1).style("left",e.pageX+"px").style("top",e.pageY+20+"px").style("opacity",1)})).on("mouseup",(function(e,t){v.style("opacity",0)}))}}),[t,r,n,s,i]),Object(c.jsxs)("div",{className:"plot",children:[Object(c.jsx)("svg",{id:"plot",height:500,width:600}),Object(c.jsx)("style",{jsx:"true",children:"\n                .plot {\n                float: left;\n                width: 600px;\n                height: 500px;\n                }\n\n                .tooltip{\n                position: absolute;\n                width: 120;\n                height: auto;\n                font-family: simsun;\n                font-size: 14px;\n                text-align: center;\n                border-style: solid; \n                border-width: 1px;\n                background-color: white;\n                border-radius: 5px;\n                }\n                "})]})},p=n(34);var x=function(e){var t=e.label,n=e.options,r=e.setOption,s=Object(o.useState)(),i=Object(j.a)(s,2),a=i[0],l=i[1];return Object(o.useEffect)((function(){n[0]&&l(n[0][0])}),[n]),console.log({options:n}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"option-label",children:t}),Object(c.jsx)(p.a,{value:a,onChange:function(e){return function(e){l(e),r(e)}(e)},children:n?n.map((function(e,t){return Object(c.jsx)(p.b,{value:e[0],children:e[1]},t)})):""}),Object(c.jsx)("style",{jsx:"true",children:"\n        .option-label {\n          margin: 10px 0px;\n        }\n        "})]})};var f=function(e){var t=e.data,n=e.setFilteredData,r=Object(o.useState)([]),s=Object(j.a)(r,2),i=s[0],a=s[1],l=Object(o.useState)([]),u=Object(j.a)(l,2),d=u[0],p=u[1],f=Object(o.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(o.useState)(),g=Object(j.a)(v,2),y=g[0],w=g[1],S=Object(o.useState)(),N=Object(j.a)(S,2),_=N[0],E=N[1],C=Object(o.useState)(),k=Object(j.a)(C,2),B=k[0],F=k[1],z=Object(o.useState)(),P=Object(j.a)(z,2),I=P[0],A=P[1],D=Object(o.useState)(),L=Object(j.a)(D,2),M=L[0],T=L[1],X=new Set;Object(o.useEffect)((function(){if(t.predictions){var e=[];t.predictions.forEach((function(e){e.object_categories.forEach((function(e){X.add(e.toLowerCase())}))})),X.forEach((function(t){e.push([t,t])})),a(e)}}),[t]),i.sort();var Y=new Set;Object(o.useEffect)((function(){if(t.predictions){var e=[];t.predictions.forEach((function(e){Y.add(e.num_objects)})),Y.forEach((function(t){e.push([t,t])})),p(e)}}),[t]),d.sort((function(e,t){return e[0]-t[0]}));var G=new Set;return Object(o.useEffect)((function(){if(t.predictions){var e=[];t.predictions.forEach((function(e){e.events.forEach((function(e){e.verbs.forEach((function(e){G.add(e.toLowerCase())}))}))})),G.forEach((function(t){e.push([t,t])})),m(e)}}),[t]),h.sort(),Object(o.useEffect)((function(){if(t.predictions){console.log("options has changed, the new result = ",y,_);var e=t.predictions.filter((function(e){return e.object_categories.includes(y)&&e.num_objects===_}));n(e)}}),[y,_,B]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"filter-container",children:[Object(c.jsx)(x,{label:"X Axis",options:[["num of objects","Num of Objects"],["name of object","Name of Objects"]],setOption:A}),Object(c.jsx)(x,{label:"Y Axis",options:[["Bleu_1","Bleu Score"],["Cider","CIDEr Score"]],setOption:T}),Object(c.jsx)(x,{label:"Object Name",options:i,setOption:w}),Object(c.jsx)(x,{label:"Object Number",options:d,setOption:E}),Object(c.jsx)(x,{label:"Action Type",options:h,setOption:F}),Object(c.jsx)(x,{label:"Mark",options:[["true","True"],["false","False"]]})]}),Object(c.jsx)(b,{data:t,selectedObjNumber:_,selectedObjName:y,selectedYaxis:M,selectedXaxis:I}),Object(c.jsx)("style",{jsx:"true",children:"\n        .filter-container {\n          display: flex;\n          justify-content: space-around;\n          padding: 10px;\n          background-color: #C4C4C4;\n          width: 80vw;\n          align-items: center;\n        }\n        "})]})};var O=function(e){var t=e.instance,n=t.events.map((function(e,t){return Object(c.jsxs)("h2",{children:["Event ",t+1,": ",e.event_name]})})),o="/data/image_val_200/"+t.img_fn;return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{className:"cardImg",src:o,alt:"place holder"}),Object(c.jsx)("p",{className:"eventName",children:n}),Object(c.jsxs)("p",{children:["Scene: ",t.place]}),Object(c.jsx)("style",{jsx:"true",children:"\n        .card-container {\n          width: 200px;\n          height: 100%;\n          padding: 5px;\n          margin: 5px;\n          border: 1px solid black;\n        }\n        .cardImg{\n          width: 200px;\n          height: 100px;\n        }\n        .eventName{\n          font-size: 10px;\n        }\n        "})]})},h=Object(o.createContext)(null);var m=function(e){var t=e.children,n=Object(o.useState)(),r=Object(j.a)(n,2),s=r[0],i=r[1];return Object(o.useEffect)((function(){fetch("/data/200_sample_val_conv.json").then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsx)(h.Provider,{value:{predictions:s},children:t})};var v=function(e){var t=e.mode,n=Object(o.useContext)(h),r=Object(o.useState)(),s=Object(j.a)(r,2),i=s[0],l=s[1];return Object(o.useEffect)((function(){console.log(n),n.predictions&&l(n.predictions)}),[n]),console.log(i),Object(c.jsxs)("div",{className:"instance-list-container",children:[Object(c.jsx)(f,{data:n,setFilteredData:l}),Object(c.jsx)("div",{className:"cards-container",children:i&&i.map((function(e,n){return Object(c.jsx)(a.b,{to:"/".concat(t,"/instances/").concat(n),children:Object(c.jsx)(O,{instance:e})},n)}))}),Object(c.jsx)("style",{jsx:"true",children:"\n        .instance-list-container {\n          padding: 30px;\n        }\n\n        .cards-container {\n          display: flex;\n          width: 50%;\n          flex-wrap: wrap;\n        }\n        "})]})};var g=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(v,{mode:"explore"})})};var y=function(){return Object(c.jsx)("div",{children:"ScatterPlot"})};var w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(v,{mode:"comparision"})})};var S=function(){return Object(c.jsx)("div",{children:"ComparisonScatterPlot"})};var N=function(e){e.instance;var t=e.mode;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(a.b,{to:"/".concat(t,"/instances"),children:"Back"}),Object(c.jsx)("img",{src:"https://via.placeholder.com/800x360.png",alt:"place holder"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{children:"Show all label"}),Object(c.jsx)("button",{children:"Show bounding boxes"}),Object(c.jsx)("button",{children:"Bounding box correspond to text"}),Object(c.jsx)("button",{children:"Show highlight in text"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{children:"Previous"}),Object(c.jsx)("button",{children:"Next"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Mode: ",t]}),Object(c.jsx)("div",{className:"misc-container",children:"event"})]}),Object(c.jsx)("style",{jsx:"true",children:"\n        .container {\n          display: flex;\n        }\n\n        .misc-container {\n          width: 50vw;\n          height: 70vh;\n          background-color: #C4C4C4;\n          margin: 5px;\n        }\n        "})]})};var _=function(){return Object(c.jsx)(N,{mode:"explore"})};var E=function(){return Object(c.jsx)(N,{mode:"comparison"})};n(129);var C=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)(m,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(l.a,{from:"/",to:"/explore/instances"}),Object(c.jsx)(l.b,{path:"/explore/instances",exact:!0,component:g}),Object(c.jsx)(l.b,{path:"/explore/instances/:id",exact:!0,component:_}),Object(c.jsx)(l.b,{path:"/explore/plot",exact:!0,component:y}),Object(c.jsx)(l.b,{path:"/comparison/instances",exact:!0,component:w}),Object(c.jsx)(l.b,{path:"/comparison/instances/:id",exact:!0,component:E}),Object(c.jsx)(l.b,{path:"/comparison/plot",exact:!0,component:S})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),k()}},[[130,1,2]]]);
//# sourceMappingURL=main.d8a15ec4.chunk.js.map