(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"img-01",image:"https://i.imgur.com/XiHaZbc.jpg",count:0},{id:2,name:"img-02",image:"https://i.imgur.com/yqgxPQw.jpg",count:0},{id:3,name:"img-03",image:"https://i.imgur.com/X05YgIN.jpg",count:0},{id:4,name:"img-04",image:"https://i.imgur.com/0LYY8XO.jpg",count:0},{id:5,name:"img-05",image:"https://i.imgur.com/EWCB4IY.jpg",count:0},{id:6,name:"img-06",image:"https://i.imgur.com/jpJ8foO.jpg",count:0},{id:7,name:"img-07",image:"https://i.imgur.com/rCLn4mL.jpg",count:0},{id:8,name:"img-08",image:"https://i.imgur.com/mEfLDAP.jpg",count:0},{id:9,name:"img-09",image:"https://i.imgur.com/VCbu8xj.jpg",count:0},{id:10,name:"img-10",image:"https://i.imgur.com/iVOXjUK.jpg",count:0},{id:11,name:"img-11",image:"https://i.imgur.com/JU7OOEh.jpg",count:0},{id:12,name:"img-12",image:"https://i.imgur.com/QWCGw32.jpg",count:0}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(3),o=n.n(i),r=(n(15),n(4)),m=n(5),s=n(7),u=n(6),g=n(8),l=function(e){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper  blue-grey darken-1"},c.a.createElement("a",{href:"#",class:"brand-logo"},"Clicky Game"),c.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c.a.createElement("li",{className:"scores"},"Score: ",e.score," | Highscore:",e.highscore))))};n(16);var h=function(){return c.a.createElement("footer",{class:"page-footer  blue-grey darken-1"},c.a.createElement("div",{class:"footer-copyright"},c.a.createElement("div",{class:"container"},"\xa9 2019 Copyright Text",c.a.createElement("a",{class:"grey-text text-lighten-4 right",href:"https://vianeycadena.github.io/Portfolio_2019/"},"My Portfolio"))))};n(17);var d=function(e){return c.a.createElement("div",{className:"hero",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var p=function(e){return c.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};n(18);var f=function(e){return c.a.createElement("main",Object.assign({className:"wrapper"},e))},E=n(1),v=(n(19),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),j=(n(20),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={cards:E,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over :( \n score: ".concat(n.state.score)),n.setState({score:0}),!0},n.clickCount=function(e){n.state.cards.find(function(t,a){if(t.id===e){if(0===E[a].count)return E[a].count=E[a].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(f,null,c.a.createElement(l,{score:this.state.score,highscore:this.state.highscore}),c.a.createElement(d,{backgroundImage:"https://i.imgur.com/bGXAvEf.jpg"},c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("h3",null,"Test for designers, don't click the same pantone two times")),c.a.createElement(p,null,this.state.cards.map(function(t){return c.a.createElement(v,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})),c.a.createElement(h,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.91337842.chunk.js.map