(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[12],{1274:function(t,e,n){t.exports=n.p+"static/media/draggable.e58eaef0.gif"},1343:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(481),s=n(1274),o=n.n(s);e.default=function(){var t='\n    \u4f60\u53ef\u4ee5\u8bd5\u7740\u62d6\u62fd\u4e00\u4e0b\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u680f\u7684\u67d0\u4e00\u9879\uff0c\u5b83\u662f\u53ef\u4ee5\u62d6\u62fd\u7684\u54e6\u3002\n    \u672cDemo\u662f\u57fa\u4e8e<a href="https://github.com/atlassian/react-beautiful-dnd" target="_blank">react-beautiful-dnd</a>\u3002\n    <p><img src="'.concat(o.a,'"/></p>\n  ');return i.a.createElement("div",{className:"app-container"},i.a.createElement(r.a,{title:"\u5217\u8868\u62d6\u62fd",source:t}))}},481:function(t,e,n){"use strict";n(487);var a=n(486),i=n(0),r=n.n(i),s=n(72),o=n(73),c=function(){function t(e){Object(s.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var r=[];r=this.convert(i,r),e.push({dom:i,val:r})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),u=function(t){var e=t.title,n=t.height,s=t.source,o=Object(i.useRef)(),u=Object(i.useRef)();return Object(i.useEffect)((function(){new c({source:o.current,output:u.current,delay:30}).start()}),[]),r.a.createElement(a.a,{bordered:!1,className:"card-item",title:e,style:{minHeight:n}},r.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:s}}),r.a.createElement("div",{ref:u}))};u.prototype={title:"",source:"",height:136};e.a=u}}]);