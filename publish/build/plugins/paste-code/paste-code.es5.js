!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var o in a)("object"==typeof exports?exports:e)[o]=a[o]}}(self,(function(){return(self.webpackChunkjodit_idist=self.webpackChunkjodit_idist||[]).push([[535],{54855:function(e){e.exports='<svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="M2.5244141,23.5h18.9511719c0.4140625,0,0.75-0.3359375,0.75-0.75V4.9208984 c0-0.1992188-0.0795898-0.390625-0.2207031-0.53125L18.3198242,0.71875C18.1791992,0.5786133,17.9887695,0.5,17.7905273,0.5 H2.5244141c-0.4140625,0-0.75,0.3359375-0.75,0.75v21.5C1.7744141,23.1640625,2.1103516,23.5,2.5244141,23.5z M20.7128296,5.2197266 h-2.6986694V2.531189L20.7128296,5.2197266z M3.2744141,2h13.2397461v3.9697266c0,0.4140625,0.3359375,0.75,0.75,0.75h3.4614258V22 H3.2744141V2z" fill="#1D1D1D"/> <path d="M8.75,10.25h1.75c0.4140625,0,0.75-0.3359375,0.75-0.75s-0.3359375-0.75-0.75-0.75H8 c-0.4140625,0-0.75,0.3359375-0.75,0.75v2.75H6c-0.4140625,0-0.75,0.3359375-0.75,0.75S5.5859375,13.75,6,13.75h1.25v2.75 c0,0.4140625,0.3359375,0.75,0.75,0.75h2.5c0.4140625,0,0.75-0.3359375,0.75-0.75s-0.3359375-0.75-0.75-0.75H8.75V10.25z" fill="#1D1D1D"/> <path d="M18.5,12.25h-1.25V9.5c0-0.4140625-0.3359375-0.75-0.75-0.75H14c-0.4140625,0-0.75,0.3359375-0.75,0.75 s0.3359375,0.75,0.75,0.75h1.75v5.5H14c-0.4140625,0-0.75,0.3359375-0.75,0.75s0.3359375,0.75,0.75,0.75h2.5 c0.4140625,0,0.75-0.3359375,0.75-0.75v-2.75h1.25c0.4140625,0,0.75-0.3359375,0.75-0.75S18.9140625,12.25,18.5,12.25z" fill="#1D1D1D"/></svg>'},97430:function(e,t,a){"use strict";a.r(t)},18989:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(96065),n=a(69056);o.Config.prototype.controls.pasteCode={icon:a(54855),tooltip:"Paste code",command:"pasteCode"},o.Config.prototype.pasteCode={globalHighlightLib:!1,canonicalLanguageCode:function(e){switch(e){case"ts":return"typescript";case"js":return"javascript";case"markup":return"html"}return e},highlightLib:{highlight:function(e,t){return Prism.highlight(e,Prism.languages[t]||Prism.languages.plain,t)},isLangLoaded:function(e){return Boolean(Prism.languages[e])},js:["https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"],langUrl:function(e){return"https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/prism-".concat(e,".min.js")},css:["https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism.min.css"]},defaultLanguage:"html",insertTemplate:function(e,t,a){return'<pre class="language-'.concat(t,'">').concat((0,n.htmlspecialchars)(a),"</pre>")},languages:[{value:"html",text:"HTML/XML"},{value:"plaintext",text:"Plain"},{value:"bash",text:"Bash"},{value:"javascript",text:"JavaScript"},{value:"css",text:"CSS"},{value:"php",text:"PHP"},{value:"ruby",text:"Ruby"},{value:"python",text:"Python"},{value:"java",text:"Java"},{value:"c",text:"C"},{value:"csharp",text:"C#"},{value:"cpp",text:"C++"}],dialog:{width:700,height:600}}},51969:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pasteCode=void 0;var o=a(70655);a(97430),a(18989);var n=a(69942),i=a(61708),r=a(33422),s=a(69056),l=a(97029),c=a(99761),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.requires=["license"],t.buttons=[{name:"pasteCode",group:"clipboard"}],t.prismJSIsLoaded=!1,t}return o.__extends(t,e),t.prototype.afterInit=function(e){var t=this;e.registerCommand("pasteCode",(function(){return t.openCodeEditDialog()}))},t.prototype.openCodeEditDialog=function(e,t,a){var o=this,n=this.j,i=this.createForm(),r=(0,s.refs)(i),l=r.code,u=r.language;e&&(u.value=e),t&&(l.value=t),n.async.requestIdleCallback((function(){l.focus()})),n.s.save(),this.createDialog((function(){if(!i.validate())return!1;n.s.restore();var e=n.createInside.fromHTML(n.o.pasteCode.insertTemplate(n,u.value,l.value));if(a)c.Dom.replace(a,e,n.createInside,!1,!0);else{var t=n.s.current(),r=c.Dom.up(t,c.Dom.isBlock,n.editor);r?c.Dom.after(r,e):n.s.insertNode(e)}o.onChange()}),(function(){n.s.restore()})).setContent(i.container).open(!0)},t.prototype.beforeDestruct=function(e){},t.prototype.createForm=function(){var e=this.jodit;return new i.UIForm(e,[new i.UISelect(e,{name:"language",label:"Language",value:e.o.pasteCode.defaultLanguage,options:e.o.pasteCode.languages,required:!0}),new i.UITextArea(e,{label:"Code view",resizable:!1,name:"code",required:!0,className:"jodit-paste-code__textarea"})],{className:"jodit-paste-code"})},t.prototype.createDialog=function(e,t){var a=new c.Dialog({language:this.j.o.language});return a.setHeader("Insert/Edit Code Sample").setSize(this.j.o.pasteCode.dialog.width,this.j.o.pasteCode.dialog.height).setFooter([(0,i.Button)(a,"","Cancel","default").onAction((function(){a.close(),t()})),(0,i.Button)(a,"save","Save","primary").onAction((function(){a.close(),e()}))]),a},t.prototype.onChange=function(){var e=this;(0,s.$$)("pre",this.j.editor).forEach((function(t){(0,s.attr)(t,"contenteditable")||((0,s.attr)(t,"contenteditable",!1),e.highlightCode(t))}))},t.prototype.highlightCode=function(e){return o.__awaiter(this,void 0,Promise,(function(){var t,a,n,i,r,l,u,d,p,h;return o.__generator(this,(function(o){switch(o.label){case 0:return a=(t=this.j.o.pasteCode).globalHighlightLib,i=(n=t.highlightLib).css,r=n.js,l=n.langUrl,u=n.highlight,d=n.isLangLoaded,this.prismJSIsLoaded||a?[3,2]:[4,Promise.all([(0,s.loadNextStyle)(this.jodit,i),(0,s.loadNext)(this.jodit,r)])];case 1:o.sent(),this.prismJSIsLoaded=!0,o.label=2;case 2:return p=this.parseLanguage(e),d(p)||a?[3,4]:[4,(0,s.appendScriptAsync)(this.jodit,l(p)).catch((function(){return null}))];case 3:o.sent(),o.label=4;case 4:return h=e,e.firstElementChild===e.lastElementChild&&c.Dom.isTag(e.firstElementChild,"code")&&(h=e.firstElementChild),h.innerHTML=u(h.innerText,p),[2]}}))}))},t.prototype.onPreEdit=function(e){var t=c.Dom.isNode(e)&&c.Dom.isTag(e,"pre")?e:c.Dom.closest(e.target,"pre",this.j.editor);if(t){var a=this.parseLanguage(t);this.openCodeEditDialog(a,t.innerText,t)}},t.prototype.parseLanguage=function(e){var t=null,a=function(e){return e.classList.forEach((function(e){if(/language-/.test(e)){var a=/language-(.*)/.exec(e);a&&a[1]&&(t=a[1])}}))};return a(e),null==t&&e.firstElementChild===e.lastElementChild&&c.Dom.isTag(e.firstElementChild,"code")&&a(e.firstElementChild),this.jodit.o.pasteCode.canonicalLanguageCode(t||"html")},t.prototype.onAfterGetValueFromEditor=function(e){e.value=e.value.replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>\s*<code[^>]*>)(.*?)(<\/code>\s*<\/pre>)/gis,(function(e,t,a,o,n,i){return"".concat(t).concat(o).concat((0,s.htmlspecialchars)((0,s.stripTags)(n))).concat(i)})).replace(/(<pre[^>]*)contenteditable\s*=\s*(['"]?)false\2([^>]*>)(.*?)(<\/pre>)/gis,(function(e,t,a,o,n,i){return"".concat(t).concat(o).concat((0,s.htmlspecialchars)((0,s.stripTags)(n))).concat(i)}))},o.__decorate([r.autobind],t.prototype,"openCodeEditDialog",null),o.__decorate([(0,r.watch)("?:change"),(0,r.debounce)()],t.prototype,"onChange",null),o.__decorate([(0,r.watch)(["?:dblclick","?:editPreInPasteCode"])],t.prototype,"onPreEdit",null),o.__decorate([(0,r.watch)("?:afterGetValueFromEditor")],t.prototype,"onAfterGetValueFromEditor",null),o.__decorate([r.component],t)}(n.Plugin);t.pasteCode=u,l.Jodit.plugins.add("paste-code",u)}},function(e){return e(e.s=51969)}])}));