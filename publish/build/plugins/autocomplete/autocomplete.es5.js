"use strict";!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(function(){return(self.webpackChunkjodit_idist=self.webpackChunkjodit_idist||[]).push([[633],{19887:function(e,t,o){o.r(t)},6293:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.autocomplete=void 0;var n=o(70655),r=o(69942),i=o(96065),s=o(33422),u=o(69056),l=o(99761),c=o(50679),a=o(26937),p=o(97029),d=o(49852);i.Config.prototype.autocomplete={sources:[],maxItems:50,isMatchedQuery:function(e,t){return 0===t.toLowerCase().indexOf(e.toLowerCase())},itemRenderer:function(e){var t;return null!==(t=e.title)&&void 0!==t?t:e.value},insertValueRenderer:function(e){return e.value+"&nbsp;"}};var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.requires=["enter","license"],t.hasStyle=!p.Jodit.fatMode,t.sources=[],t}return n.__extends(t,e),t.prototype.afterInit=function(e){var t=this;this.popup=new l.Popup(e),this.popup.setMod("padding",!1),this.list=new c.Autocomplete(e),this.popup.setContent(this.list.container),e.e.on("select.autocomplete",(function(o){var n=o.value;(0,u.isFunction)(o.insertValueRenderer)&&(n=o.insertValueRenderer(o)),l.Dom.isNode(n)||(n=e.createInside.fromHTML(n)),(0,d.replaceTextLeftOfCursorAfterSpace)(e.s.range,n),t.j.s.setCursorAfter(n),t.popup.close()})).on("keydown.autocomplete",this.onKeyDown).on("keydown.autocomplete",this.onKeyControlDown,{top:!0}).on("beforeEnter.autocomplete",this.onEnter,{top:!0}).on("autocomplete.autocomplete",this.onAutoComplete).on("registerAutocompleteSource.autocomplete",this.registerAutocompleteSource)},t.prototype.registerAutocompleteSource=function(e){this.sources.push(e)},t.isControlKey=function(e){return e===a.KEY_DOWN||e===a.KEY_UP||e===a.KEY_ENTER||e===a.KEY_TAB},t.prototype.onKeyDown=function(e){var o,r;return n.__awaiter(this,void 0,Promise,(function(){var i,s,l,c;return n.__generator(this,(function(n){switch(n.label){case 0:return e.key===a.KEY_ESC?(this.popup.isOpened&&this.popup.close(),[2]):(i=this.j.s,!t.isControlKey(e.key)&&i.isInsideArea&&i.isCollapsed?(s=(null===(o=this.j.s.sel)||void 0===o?void 0:o.rangeCount)?null===(r=this.j.s.sel)||void 0===r?void 0:r.getRangeAt(0):null,(l=s&&(0,d.getTextLeftOfCursor)(s).split(" ").pop())&&(0,u.trim)(l).length?[4,this.onAutoComplete(l)]:[3,2]):[2]);case 1:if((c=n.sent()).length)return[2,this.openPopup(c)];n.label=2;case 2:return this.popup.isOpened&&this.popup.close(),[2]}}))}))},t.prototype.onKeyControlDown=function(e){if(this.popup.isOpened&&t.isControlKey(e.key)){switch(e.key){case a.KEY_DOWN:this.list.selectNext();break;case a.KEY_UP:this.list.selectPrevious();break;case a.KEY_TAB:this.list.select()}return this.j.e.stopPropagation(e.type),!1}},t.prototype.onEnter=function(){if(this.popup.isOpened)return this.list.select(),!1},t.prototype.onAutoComplete=function(e){return n.__awaiter(this,void 0,Promise,(function(){var t,o=this;return n.__generator(this,(function(r){switch(r.label){case 0:return t=[],[4,Promise.all(this.sources.concat(this.j.o.autocomplete.sources).map((function(r){return n.__awaiter(o,void 0,void 0,(function(){var o,i,s,u;return n.__generator(this,(function(l){switch(l.label){case 0:return i=(o=t.push).apply,s=[t],u=[[]],[4,this.resolveFeed(e,r)];case 1:return i.apply(o,s.concat([n.__spreadArray.apply(void 0,u.concat([n.__read.apply(void 0,[l.sent()]),!1]))])),[2]}}))}))})))];case 1:return r.sent(),[2,t]}}))}))},t.prototype.resolveFeed=function(e,t,o){return n.__awaiter(this,void 0,Promise,(function(){var r,i,s,l,c,a;return n.__generator(this,(function(p){switch(p.label){case 0:return(0,u.isPromise)(t)?[4,t]:[3,2];case 1:t=p.sent(),p.label=2;case 2:return(0,u.isFunction)(t)?[4,t(e)]:[3,4];case 3:return r=p.sent(),[3,7];case 4:return(0,u.isArray)(t)?(i=this.j.o.autocomplete.isMatchedQuery,r=t.filter((function(t){return(0,u.isString)(t)?i(e,t):i(e,t.value)})).map((function(e){return(0,u.isString)(e)?{title:e,value:e}:e})),[3,7]):[3,5];case 5:return[4,this.resolveFeed(e,t.feed,t)];case 6:r=p.sent(),p.label=7;case 7:return r&&(0,u.isArray)(r)?(l=(s=this.j.o.autocomplete).itemRenderer,c=s.insertValueRenderer,a=s.maxItems,r=r.map((function(e){var t,r;return n.__assign({itemRenderer:null!==(t=null==o?void 0:o.itemRenderer)&&void 0!==t?t:l,insertValueRenderer:null!==(r=null==o?void 0:o.insertValueRenderer)&&void 0!==r?r:c},e)})),[2,r.slice(0,a)]):[2,[]]}}))}))},t.prototype.openPopup=function(e){var t=this;this.list.build(e),this.popup.open((function(){return t.j.s.range.getBoundingClientRect()}))},t.prototype.beforeDestruct=function(e){e.e.off(this.list).off("keydown.autocomplete",this.onKeyDown).off("autocomplete.autocomplete",this.onAutoComplete).off(".autocomplete"),this.list.destruct(),this.popup.destruct()},n.__decorate([s.autobind],t.prototype,"registerAutocompleteSource",null),n.__decorate([(0,s.debounce)()],t.prototype,"onKeyDown",null),n.__decorate([s.autobind],t.prototype,"onKeyControlDown",null),n.__decorate([s.autobind],t.prototype,"onEnter",null),n.__decorate([s.autobind],t.prototype,"onAutoComplete",null),n.__decorate([s.autobind],t.prototype,"resolveFeed",null),t}(r.Plugin);t.autocomplete=f,p.Jodit.plugins.add("autocomplete",f)},49852:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.replaceTextLeftOfCursorAfterSpace=t.getTextLeftOfCursor=void 0;var n=o(45972);t.getTextLeftOfCursor=function(e){var t,o,r,i,s=e.startContainer,u=e.startOffset;if(n.Dom.isText(s))return null!==(o=null===(t=s.nodeValue)||void 0===t?void 0:t.substr(0,u))&&void 0!==o?o:"";var l=s.childNodes[u];if(!l)return"";if(n.Dom.isText(l))return null!==(r=l.nodeValue)&&void 0!==r?r:"";var c=n.Dom.findNotEmptyNeighbor(l,!0,s);return n.Dom.isText(c)&&null!==(i=l.nodeValue)&&void 0!==i?i:""},t.replaceTextLeftOfCursorAfterSpace=function(e,t){var o,r=e.startContainer,i=e.startOffset;if(n.Dom.isText(r)){var s=null!==(o=r.nodeValue)&&void 0!==o?o:"",u=s.substr(0,i),l=s.substr(i),c=u.split(" ");c[c.length-1]="";var a=c.join(" ");return r.nodeValue=a+l,e.setStart(r,a.length),void e.insertNode(t)}}},50679:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Autocomplete=void 0;var n=o(70655);o(19887);var r=o(33422),i=o(61708),s=o(55496),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elements=[],t.currentSelection=-1,t}return n.__extends(t,e),t.prototype.className=function(){return"Autocomplete"},t.prototype.onChangeSelection=function(e,t){var o;null!=t&&(null===(o=this.elements[t])||void 0===o||o.setMod("active",!1)),this.elements[this.currentSelection].setMod("active",!0),this.elements[this.currentSelection].container.scrollIntoView(!1)},t.prototype.build=function(e){var t=this;this.clear(),e.forEach((function(e,o){var n=new s.AutocompleteItem(t.jodit,e);t.j.e.on(n.container,"mousedown touchstart",(function(e){e.preventDefault()})).on(n.container,"click",(function(){t.currentSelection=o,t.select()})),t.append(n)})),this.currentSelection=0,this.onChangeSelection()},t.prototype.selectNext=function(){this.currentSelection+1>this.elements.length-1?this.currentSelection=0:this.currentSelection+=1},t.prototype.selectPrevious=function(){0>this.currentSelection-1?this.currentSelection=this.elements.length-1:this.currentSelection-=1},t.prototype.select=function(){this.j.e.fire("select.autocomplete",this.elements[this.currentSelection].item)},n.__decorate([(0,r.watch)("currentSelection")],t.prototype,"onChangeSelection",null),n.__decorate([r.component],t)}(i.UIGroup);t.Autocomplete=u},55496:function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.AutocompleteItem=void 0;var n=o(70655);o(19887);var r=o(61708),i=o(69056),s=function(e){function t(t,o){var n,r=this;(r=e.call(this,t)||this).item=o;var s=r.container;if((0,i.isFunction)(o.itemRenderer)){var u=o.itemRenderer(o);(0,i.isString)(u)?s.innerHTML=u:s.appendChild(u)}else s.innerText=null!==(n=o.title)&&void 0!==n?n:o.value;return r}return n.__extends(t,e),t.prototype.className=function(){return"AutocompleteItem"},t}(r.UIElement);t.AutocompleteItem=s}},function(e){return e(e.s=6293)}])}));