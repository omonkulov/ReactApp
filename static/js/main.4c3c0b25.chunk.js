(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(1),o=n.n(s),i=n(10),a=n.n(i),r=(n(15),n(4)),u=n(5),c=n(6),l=n(3),d=n(8),h=n(7),j=n(2),b=(n(16),n(0)),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={},s}return Object(c.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.col,s=t.row,o=t.onMouseDown,i=t.onMouseEnter,a=t.onMouseUp,r=t.isWall,u=t.isStart,c=t.isFinish?"finish":u?"start":r?"walls":"";return Object(b.jsx)("td",(e={id:this.props.id,className:"node"},Object(j.a)(e,"className","node ".concat(c)),Object(j.a)(e,"onMouseDown",(function(){return o()})),Object(j.a)(e,"onMouseEnter",(function(){return i(s,n)})),Object(j.a)(e,"onMouseUp",(function(){return a()})),e))}}]),n}(s.Component),O=(n(18),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={ROWS:Math.floor(.3*window.innerHeight/20),COLM:Math.floor(.8*window.innerWidth/20),grid:[],mouseIsPressed:!1,paint:!0},s.handleMouseDown2=s.handleMouseDown2.bind(Object(l.a)(s)),s.handleMouseDown3=s.handleMouseDown3.bind(Object(l.a)(s)),s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=[],t=this.state.ROWS;t=t<80?t:80;var n=this.state.COLM;n=n<80?n:80;for(var s=0;s<t;s++){for(var o=[],i=0;i<n;i++)o.push(p(i,s));e.push(o)}this.setState({grid:e})}},{key:"handleMouseDown",value:function(){this.setState({mouseIsPressed:!0})}},{key:"handleMouseDown2",value:function(){this.setState({paint:!0})}},{key:"handleMouseDown3",value:function(){this.setState({paint:!1})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=this.state.grid,s=n[e][t],o=Object(r.a)(Object(r.a)({},s),{},{isWall:this.state.paint});n[e][t]=o,this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"render",value:function(){var e=this;console.log("render called");var t=this.state.grid;return Object(b.jsxs)("div",{className:"grid",children:[Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:t.map((function(t,n){return Object(b.jsx)("tr",{id:n,children:t.map((function(t,n){var s=t.row,o=t.col,i=t.isStart,a=t.isFinish,r=t.isWall;return Object(b.jsx)(f,{id:n,col:o,row:s,isWall:r,isStart:i,isFinish:a,mouseIsPressed:e.state.mouseIsPressed,onMouseDown:function(){return e.handleMouseDown()},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()}},n)}))},n)}))})}),Object(b.jsx)("button",{onClick:this.handleMouseDown2,children:"Erase"}),Object(b.jsx)("button",{onClick:this.handleMouseDown3,children:"Paint"}),Object(b.jsxs)("p",{children:["Hello: ",this.state.mouseIsPressed?"True":"False"]})]})}}]),n}(s.Component)),p=function(e,t){return{col:e,row:t,isStart:10===t&&15===e,isFinish:10===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},M=O;var v=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(M,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),o(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),w()}},[[19,1,2]]]);
//# sourceMappingURL=main.4c3c0b25.chunk.js.map