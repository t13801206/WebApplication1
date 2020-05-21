(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(12),s=n.n(i),c=(n(23),n(13)),r=n(14),l=n(5),u=n(17),m=n(16),g=(n(24),n(7)),h=n(6);n(25);function f(e){return o.a.createElement("h1",null,"Bunrui 9001 Database Ver-2.")}function A(e){var t=e.workingDirs.map((function(e){return o.a.createElement("option",{value:e},e)}));return o.a.createElement(h.a,null,o.a.createElement(h.a.Label,null,"\u4f5c\u696d\u30d5\u30a9\u30eb\u30c0"),o.a.createElement(h.a.Control,{as:"select",custom:!0,id:"workingDirs",name:"example",onChange:function(){return e.setFiles()}},t))}function d(e){var t=e.settings.map((function(e){return o.a.createElement("option",{valuse:e.model},e.model)}));return o.a.createElement(h.a,null,o.a.createElement(h.a.Label,null,"\u5206\u985e\u30e2\u30c7\u30eb"),o.a.createElement(h.a.Control,{as:"select",custom:!0,onChange:function(){return e.setTypes()},id:"models"},t))}function k(e){var t=e.workers.map((function(e){return o.a.createElement("option",{value:e},e)}));return o.a.createElement(h.a,null,o.a.createElement(h.a.Label,null,"\u4f5c\u696d\u8005"),o.a.createElement(h.a.Control,{as:"select",custom:!0,id:"workers",name:"example"},t))}function p(e){var t=e.types.map((function(t,n){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{variant:"secondary",name:"button".concat(n),disabled:!e.isWorking,onClick:function(){return e.buttonClick(n)}},n<10?o.a.createElement("div",null,t," -KEY",n):o.a.createElement("div",null,t))," ")}));return o.a.createElement("div",null,t)}function v(e){var t=e.files.map((function(e,t){return o.a.createElement("li",null,e)}));return o.a.createElement("ul",null,t)}function b(e){return o.a.createElement("div",null,o.a.createElement("img",{alt:"",src:e.image,width:e.imageSize}))}function E(e){return o.a.createElement("button",{onClick:function(){return e.save()}},"\u7d50\u679c\u3092\u4fdd\u5b58\u3059\u308b")}function y(e){var t=e.isWorking?"TOP\u3078\u623b\u308b":"\u30e9\u30d9\u30ea\u30f3\u30b0\u3092\u958b\u59cb\u3059\u308b";return o.a.createElement(g.a,{onClick:function(){return e.onToggle()}},t)}function S(e){return o.a.createElement(h.a,null,o.a.createElement(h.a.Label,null,"\u753b\u50cf\u30b5\u30a4\u30ba"),o.a.createElement(h.a.Control,{as:"select",custom:!0,id:"imagesize",onChange:function(){var t=document.getElementById("imagesize").value;e.setImageSize(t)}},o.a.createElement("option",{value:"128"},"128 px"),o.a.createElement("option",{value:"256"},"256 px"),o.a.createElement("option",{value:"512"},"512 px")))}var w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={models:["m1","m2"],workingDirs:["dir1","dir2","dir3"],workers:["a1","b1","c1"],image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEX///9PXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNbfYZxtqh2wq9RY3dOXHJ8hpDO0Mbg4NFYZXmGkJ/q6+7///9aZ3zNz8Tp6ux2foWAiJNHUmRMWW5GUWIctl4dAAAADXRSTlMAQICw0BBgoDDAUPAgSijlQgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBA0QFQhjo0B/AAABl0lEQVRYw8WX0XaDIAxARUCqNtpVO+3aTvv/P7nW1Ro3KDF4tvvm8eQKASGJIgcilgoeKBmLaAk6kfALmWhiuDDgwGwo4Sm8IPVNRRvwYF5OJMvBS5654w2QMK7hKyCidFi83bDNYQG5Dvm+dQy2+KLcDZSFzeDPf7F7UvjWIrONspwEpe092g/alsC3HcKTSOsG8gqmSQjr671XAOOflXIF6Xf8xrHUfsFjCIYvGLKggS+A+0IkIYLkJpAhAnkTQIgAXJuALBBRHCaIcQqq+jBQV3SBRAdBdXhSkQUK5bCeBDVZAJPg/YD4FwF4BU17HGgbnqA5PmlYgnYStBzBxxGxpkBRBXurQKGtzBJI9DP5kmgVxOh3ZgkEOlBYAnykcQQSH6ocQYKPdY5A44vlRBecZ9fruA4XuuDzEbKZXa7d5UQTnD+72eU6DqG/Ttyfr+7nfn69j1noO5qg639WSXpRjWirFTOOIGOU2S9KbrU0Xq1d6i5MZL5dv9wPbzjCW54Vmq7wti+88RxKX3frK/6m+V7W/n8BOtS/6Tme07cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTNUMTY6MTg6MTErMDA6MDDO9L4UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEzVDE2OjE4OjExKzAwOjAwv6kGqAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",files:["file1","file2"],files_backup:[],selectedDir:"",settings:[{model:"dammy",worker:["dammmy"],className:["dammy"]}],types:["type1"],saveItems:"",isWorking:!1,imageSize:"128"},e.setWorkingDirs=e.setWorkingDirs.bind(Object(l.a)(e)),e.setSettings=e.setSettings.bind(Object(l.a)(e)),e.setFiles=e.setFiles.bind(Object(l.a)(e)),e.setImage=e.setImage.bind(Object(l.a)(e)),e.setTypes=e.setTypes.bind(Object(l.a)(e)),e.buttonClick=e.buttonClick.bind(Object(l.a)(e)),e.save=e.save.bind(Object(l.a)(e)),e.onToggle=e.onToggle.bind(Object(l.a)(e)),e.setImageSize=e.setImageSize.bind(Object(l.a)(e)),e.backFile=e.backFile.bind(Object(l.a)(e)),e}return Object(r.a)(n,[{key:"setImageSize",value:function(e){this.setState({imageSize:e})}},{key:"onToggle",value:function(){var e=this.state.isWorking;console.log("toggle ".concat(this.state.isWorking," ").concat(e," ").concat(!e)),this.setState({isWorking:!e})}},{key:"buttonClick",value:function(e){var t=this;console.log("button ".concat(e," clicked")),this.setImage(this.state.files[1]);var n=this.state.files.shift(),a=Object.assign([],this.state.files_backup);a.push(n),this.setState({files_backup:a});var o={dir:document.getElementById("workingDirs").value,file:n,worker:document.getElementById("workers").value,result:e.toString()};console.log(o),fetch("m/api/workitems",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){if(500===e.status)throw new Error("fail POST 500 \u30c7\u30fc\u30bf\u304c\u3059\u3067\u306b\u5b58\u5728\u3057\u3066\u3044\u307e\u3059");if(409===e.status)throw console.log("status is 409"),new Error("fail POST 409");return console.log("POST OK"),e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error("Unable to POST item, next try to PUT",e),fetch("".concat("m/api/workitems","/").concat(t.state.selectedDir),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){console.log("".concat(e.status," item update"))})).catch((function(e){return console.error("Unable to update item.",e)}))}))}},{key:"setWorkingDirs",value:function(){var e=this;fetch("m/api/ftp").then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(t){return e.setState({workingDirs:t})})).then((function(){return e.setFiles()})).catch((function(e){return console.error("Unable to get workingDirs.",e)}))}},{key:"setSettings",value:function(){var e=this;fetch("m/api/settings").then((function(e){return e.json()})).then((function(e){return console.log("setting Json is ..."),console.log(e),e})).then((function(t){return e.setState({settings:t})})).then(console.log("read settings.json")).then((function(){e.setState({types:e.state.settings[0].className,workers:e.state.settings[0].worker})})).catch((function(e){return console.error("Unable to get settings.",e)}))}},{key:"setFiles",value:function(){var e=this;this.setState({files_backup:[]});var t=document.getElementById("workingDirs").value;console.log("".concat("m/api/ftp","/").concat(t)),fetch("".concat("m/api/ftp","/").concat(t)).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).then((function(n){return e.setState({selectedDir:t,files:n})})).then((function(){return e.setImage(e.state.files[0])})).catch((function(e){return console.error("Unable to get files.",e)}))}},{key:"setTypes",value:function(){var e=document.getElementById("models").selectedIndex;console.log("model changed ".concat(this.state.settings[e].model)),this.setState({types:this.state.settings[e].className,workers:this.state.settings[e].worker})}},{key:"setImage",value:function(e){var t=this;console.log("".concat("m/api/ftp","/").concat(this.state.selectedDir,"/").concat(e)),fetch("".concat("m/api/ftp","/").concat(this.state.selectedDir,"/").concat(e)).then((function(e){return e.text()})).then((function(e){return console.log("image:::"),e})).then((function(e){return t.setState({image:e})})).catch((function(e){return console.error("Unable to setImage",e)}))}},{key:"save",value:function(){var e=this;fetch("".concat("m/api/workitems","/").concat(this.state.selectedDir)).then((function(e){return e.json()})).then((function(e){return console.log("save items:"),console.log(e),e})).then((function(t){return e.setState({saveItems:t})})).then((function(){var t=JSON.stringify(e.state.saveItems),n=new Blob([t],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download="result.json",a.click(),URL.revokeObjectURL(a.href)})).catch((function(e){return console.error("Unable to get save items",e)}))}},{key:"backFile",value:function(){console.log("1\u3064\u623b\u308a\u307e\u3059");var e=this.state.files_backup.pop(),t=Object.assign([],this.state.files);t.unshift(e),this.setState({files:t}),console.log(this.state.files[0]),this.setImage(e)}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillMount",value:function(){var e=this;this.setImageSize(128),console.log("componentWillMount"),this.setSettings(),this.setWorkingDirs(),document.addEventListener("keydown",(function(t){(console.log("key down ".concat(t.key," - ").concat(t.keyCode)),e.state.isWorking)&&(t.keyCode<48||57<t.keyCode||(console.log("key down OK ".concat(t.key," - ").concat(t.keyCode)),parseInt(t.key)+1>e.state.types.length||e.buttonClick(t.key)))}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement("div",{hidden:this.state.isWorking},o.a.createElement(A,{workingDirs:this.state.workingDirs,setFiles:this.setFiles}),o.a.createElement(E,{save:this.save}),o.a.createElement("br",null),o.a.createElement(d,{settings:this.state.settings,setTypes:this.setTypes}),o.a.createElement("br",null),o.a.createElement(k,{workers:this.state.workers})),o.a.createElement(y,{onToggle:this.onToggle,isWorking:this.state.isWorking}),o.a.createElement(p,{types:this.state.types,isWorking:this.state.isWorking,buttonClick:this.buttonClick}),o.a.createElement("div",{hidden:!this.state.isWorking},o.a.createElement(b,{image:this.state.image,imageSize:this.state.imageSize}),o.a.createElement(S,{imageSize:this.state.imageSize,setImageSize:this.setImageSize}),o.a.createElement(g.a,{variant:"info",onClick:function(){e.backFile()}},"\uff11\u679a\u623b\u308b"),o.a.createElement(v,{files:this.state.files}),o.a.createElement("br",null)))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3f2a71f4.chunk.js.map