(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(44),c=a.n(i),o=(a(52),a(9)),l=a(10),s=a(12),u=a(11),m=a(13),f=a(47),h=a(17),d=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).generateRect=function(t,a){var n=e.props.getRects.children;if(n)return r.a.createElement(h.Rect,{x:t.x*e.size,y:t.y*e.size,width:e.size,height:e.size,fill:n[a].attrs.fill,key:a})},e.size=4,e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.field;this.props.size&&(this.size=this.props.size);var t=this.props.x,a=32*this.size;return r.a.createElement("div",null,r.a.createElement(h.Stage,{width:a+t,height:a,x:t},r.a.createElement(h.Layer,null,e.map(this.generateRect))))}}]),t}(n.Component),v=(a(100),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).fullscreen=function(){var e=document.getElementsByClassName("preview")[0];e&&(e.style.margin="0 auto",e.fullscreenElement?e.exitFullscreen&&e.exitFullscreen():e.requestFullscreen(),e.addEventListener("fullscreenchange",function(){if(document.fullscreenElement){var e=window.screen.width,t=window.screen.height;a.size=t/32,a.x=e/2-16*a.size}document.fullscreenElement||(a.x=0,a.size=4)}))},a.preview=function(){var e=a.props.field;a.count===a.state.history.length&&(a.count=0);var t=a.state.history[a.count];if(t)return a.timeout=setTimeout(function(){a.count+=1,a.forceUpdate()},1e3/a.fps),r.a.createElement("div",{className:"preview"},r.a.createElement(d,{field:e,getRects:t.canvasFrame,size:a.size,x:a.x}))},a.animation=function(){if(a.isAnimationOn)a.isAnimationOn&&(clearTimeout(a.timeout),a.isAnimationOn=!1);else{var e=a.props.history;a.setState({history:e}),a.isAnimationOn=!0}},a.changeFps=function(e){a.fps=e.target.value},a.state={history:[],count:0},a.size=4,a.x=0,a.fps=0,a.count=0,a.isAnimationOn=!1,a.timeout=0,a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){clearTimeout(this.timeout)}},{key:"render",value:function(){return r.a.createElement("div",null,this.preview(),r.a.createElement("button",{className:"animation",onClick:this.animation},"Animation"),r.a.createElement("button",{className:"full-screen",onClick:this.fullscreen},"Fullscreen"),r.a.createElement("input",{onInput:this.changeFps,className:"fps",type:"range",step:"1",id:"start",min:"1",max:"24"}),"FPS = ".concat(this.fps))}}]),t}(n.Component)),p=(a(101),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).raiseFrame=function(t){var a=e.state.history;if(a[t-1]){var n=[a[t-1],a[t]];a[t]=n[0],a[t-1]=n[1],e.forceUpdate()}},e.dropFrame=function(t){var a=e.state.history;if(a[t+1]){var n=[a[t+1],a[t]];a[t]=n[0],a[t+1]=n[1],e.forceUpdate()}},e.dublicate=function(t){var a=e.state.history;a.splice(t,0,a[t]),e.forceUpdate()},e.delete=function(t){e.state.history.splice(t,1),e.forceUpdate()},e.getFrames=function(t,a){var n=t.canvasFrame,i=e.props.field;return r.a.createElement("div",{key:a},r.a.createElement("div",{className:"frame_change-position_block"},r.a.createElement("div",{className:"frame-element"},r.a.createElement(d,{field:i,getRects:n,key:a,x:0})),r.a.createElement("div",{className:"change-position-buttons"},r.a.createElement("button",{onClick:function(){e.raiseFrame(a)}},"\u2227"),r.a.createElement("button",{onClick:function(){e.dropFrame(a)}},"\u2228"))),r.a.createElement("button",{className:"delete",onClick:function(){e.delete(a)}},"Delete frame"),r.a.createElement("button",{className:"dublicate",onClick:function(){e.dublicate(a)}},"Dublicate frame"))},e.state={history:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.history;return r.a.createElement("div",null,e.map(this.getFrames))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.history!==t.history?{history:e.history}:null}}]),t}(n.Component)),E=(a(102),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).generateRect=function(e,t){return r.a.createElement(h.Rect,{x:15*e.x,y:15*e.y,stroke:"black",strokeWidth:.3,width:15,height:15,fill:"#464646",key:t})},e.changeColor=function(t){e.isBucketOn=!1,"Primary color"===t.target.innerHTML?(t.target.innerHTML="Secondary color",e.color="black"):(t.target.innerHTML="Primary color",e.color="white")},e.canvasMouseEvent=function(t){if(1===t.evt.buttons)if(e.isBucketOn){var a=t.target.attrs.fill;e.layer.current.children.forEach(function(t){t.attrs.fill===a&&(t.attrs.fill=e.color)}),e.layer.current.draw()}else t.target.attrs.fill=e.color,t.target.draw();var n=document.getElementsByClassName("coordinates")[0];n&&document.body.removeChild(n);var r=e.fieldBuffer[t.target.index].x,i=e.fieldBuffer[t.target.index].y,c=document.createElement("div");c.className="coordinates",c.appendChild(document.createTextNode("x: ".concat(r,"; y: ").concat(i))),document.body.appendChild(c)},e.createFrame=function(){e.setState(function(t){var a=JSON.parse(JSON.parse(JSON.stringify(e.layer.current)));return console.log(a),{canvasFrame:a,history:[].concat(Object(f.a)(t.history),[{canvasFrame:a}])}})},e.bucket=function(){e.isBucketOn?e.isBucketOn=!1:e.isBucketOn=!0},e.clear=function(){e.isBucketOn=!1,e.layer.current.children.map(function(e){return e.attrs.fill="#464646"}),e.layer.current.draw()},e.eraser=function(){e.isBucketOn=!1,e.color="#464646"},e.state={canvasFrame:[],history:[]},e.color="black",e.layer=r.a.createRef(),e.isBucketOn=!1,e.fieldBuffer=[],e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<=31;t++)for(var a=0;a<=31;a++)e.push({x:a,y:t}),this.fieldBuffer.push({x:a,y:t});return r.a.createElement("div",null,r.a.createElement(h.Stage,{className:"canvas",width:480,height:480,onMouseDown:this.canvasMouseEvent,onMouseOver:this.canvasMouseEvent},r.a.createElement(h.Layer,{ref:this.layer},e.map(this.generateRect))),r.a.createElement("div",{className:"new-frame_change-color_buttons"},r.a.createElement("button",{onClick:this.createFrame},"Create Frame"),r.a.createElement("button",{onClick:this.changeColor},"Change Color"),r.a.createElement("button",{onClick:this.bucket},"Bucket"),r.a.createElement("button",{onClick:this.clear},"Clear"),r.a.createElement("button",{onClick:this.eraser},"Eraser")),r.a.createElement(p,{field:e,history:this.state.history}),r.a.createElement("div",{className:"preview-block"},r.a.createElement(v,{field:e,history:this.state.history})))}}]),t}(n.Component)),b=(a(103),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null))}}]),t}(r.a.Component)),y=a(21),g=(a(104),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"piskel clone task"),r.a.createElement("div",{className:"start-button"},r.a.createElement("button",null,r.a.createElement(y.b,{className:"start-link",to:"/main"},"Start"))),r.a.createElement("ul",{className:"contacts"},r.a.createElement("li",null,"Gmail: ",r.a.createElement("a",{href:"mailto:georgpandeh@gmail.com"},"georgpandeh@gmail.com")),r.a.createElement("li",null,"Life: ",r.a.createElement("a",{href:"tel:+375256297342"},"+375256297342")),r.a.createElement("li",null,"Telegram: ",r.a.createElement("a",{href:"tg://resolve?domain=@GeorgPandeh"},"@GeorgPandeh")),r.a.createElement("li",null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(16);c.a.render(r.a.createElement(y.a,{basename:"/piskel-clone"},r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:g}),r.a.createElement(k.a,{path:"/main",component:b}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a(109)},52:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.7d4ddce0.chunk.js.map