((t,e)=>{if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var i in o)("object"==typeof exports?exports:t)[i]=o[i]}})(self,(function(){return(self.webpackChunkjodit_pro=self.webpackChunkjodit_pro||[]).push([[391],{62899(t,e,o){"use strict";o.r(e),o.d(e,{backup:()=>f});var i=o(70655),s=o(85119),n=o(59050),a=o(98740);s.D.prototype.backup={interval:30,limit:50,dialogWidth:700,hotkeys:["ctrl+shift+b","cmd+shift+b"]},s.D.prototype.controls.backup={store:{command:"saveBackup",text:"Save backup now"},restore:{tooltip:"Restore",list:["backup.store"],exec(t){t.execCommand("openBackupDialog")}}},n.J.set("restore",o(12240)),(0,a.xl)(o(27892));var r=o(16490);class l{constructor(t){this.jodit=t,this.key="backup.default.storage"}async add(t){if(!t.html.trim().length)return!1;const e=this.jodit.storage.get(this.key)||[];return e.find((e=>e.html===t.html))||(e.unshift(t),e.length>this.jodit.o.backup.limit&&(e.length=this.jodit.o.backup.limit),this.jodit.storage.set(this.key,e)),!1}items(){return Promise.resolve(this.jodit.storage.get(this.key)||[])}clear(){return this.jodit.storage.delete(this.key),Promise.resolve(!1)}}var c=o(41257),h=o(48823),u=o(91037);class d extends h.u1{constructor(t,e){super(t),this.data=e,this.container.innerHTML=this.formatDate(e.created),(0,u.attr)(this.container,"tabIndex",0)}className(){return"UIBackupItem"}formatDate(t){const e=new Date,o=(0,u.isString)(t)?new Date(t):t,i=(e.getTime()-o.getTime())/1e3;return(0,u.isFunction)(this.j.o.backup.formatDate)?this.j.o.backup.formatDate(o):.2>i?this.j.i18n("Current"):60>i?this.j.i18n("Less minute"):i>3600?i>86400?`${o.toDateString()} ${o.toLocaleTimeString()}`:this.j.i18n("%s hours  ago",Math.floor(i/3600)):this.j.i18n("%s minutes ago",Math.floor(i/60))}focus(){this.container.focus()}}var p=o(11606);let m=class extends h.qe{constructor(t){super(t),this.elements=[],this.currentSelection=-1,t.e.on(this.container,"keydown",(t=>{switch(t.key){case p.KEY_ENTER:t.preventDefault(),t.stopPropagation(),this.onChoose(this.currentSelection);break;case p.KEY_DOWN:this.selectNext();break;case p.KEY_UP:this.selectPrevious()}}))}className(){return"UIBackupList"}createContainer(t){const e=super.createContainer(t);return(0,u.attr)(e,"tabIndex","-1"),e}build(t){this.clear(),t.forEach(((t,e)=>{const o=new d(this.jodit,t);this.append(o),this.j.e.on(o.container,"focus",(()=>this.onSelect(e))).on(o.container,"click",(()=>this.onSelect(e))).on(o.container,"dblclick",(()=>this.onChoose(e)))})),this.currentSelection=0,this.onChangeCurrentSelection(void 0,-1,0)}onChangeCurrentSelection(t,e,o){var i,s,n;null===(i=this.elements[e])||void 0===i||i.setMod("active",!1),null===(s=this.elements[o])||void 0===s||s.setMod("active",!0),null===(n=this.elements[o])||void 0===n||n.focus(),this.j.e.fire(this,"select",this.elements[o].data)}onSelect(t){this.currentSelection=t}onChoose(t){this.j.e.fire(this,"choose",this.elements[null!=t?t:this.currentSelection].data)}selectNext(){this.currentSelection+1>this.elements.length-1?this.currentSelection=0:this.currentSelection+=1}selectPrevious(){0>this.currentSelection-1?this.currentSelection=this.elements.length-1:this.currentSelection-=1}};(0,i.gn)([(0,c.watch)("currentSelection")],m.prototype,"onChangeCurrentSelection",null),(0,i.gn)([c.autobind],m.prototype,"onSelect",null),(0,i.gn)([c.autobind],m.prototype,"onChoose",null),m=(0,i.gn)([c.component],m);let g=class extends h.u1{constructor(t){super(t),this.list=new m(this.j),this.preview=this.j.c.div(this.getFullElName("preview")),this.container.appendChild(this.list.container),this.container.appendChild(this.preview),this.list.container.classList.add(this.getFullElName("list")),t.e.on(this.list,"select",this.onSelectItem).on(this.list,"choose",this.onChooseItem)}className(){return"UIBackupBox"}build(t){this.preview.innerHTML="",this.list.build(t)}destruct(){return this.j.e.off(this.list,"select",this.onSelectItem),this.list.destruct(),super.destruct()}onSelectItem(t){this.latestSelected=t,this.preview.innerHTML=t.html||`<div class="${this.getFullElName("empty")}">${this.j.i18n("Empty")}</div>`}onChooseItem(t){this.j.e.fire(this,"choose",t)}chooseSelected(){this.onChooseItem(this.latestSelected)}};(0,i.gn)([c.autobind],g.prototype,"onSelectItem",null),(0,i.gn)([c.autobind],g.prototype,"onChooseItem",null),g=(0,i.gn)([c.component],g);var v=o(38219);class f extends r.S{constructor(){var t;super(...arguments),this.requires=["license"],this.hasStyle=!v.Jodit.fatMode,this.buttons=[{name:"backup.restore",group:"history"}],this.__box=new g(this.j),this.__dialog=null,this.__storage=null!==(t=this.jodit.o.backup.remoteStore)&&void 0!==t?t:new l(this.jodit),this.timeout=0}afterInit(t){t.registerCommand("saveBackup",this.onSaveBackup).registerCommand("openBackupDialog",{exec:this.onOpenBackupDialog,hotkeys:t.o.backup.hotkeys});const e=()=>{this.timeout=t.async.setTimeout((()=>{this.onSaveBackup(),e()}),1e3*t.o.backup.interval)};e(),t.e.on(this.__box,"choose",this.onSelectItem).on(t.ow,"beforeunload.backup",(()=>{this.onSaveBackup()}))}prepareDialog(){this.__dialog||(this.__dialog=this.j.dlg({minWidth:this.j.o.backup.dialogWidth,buttons:["fullsize","dialog.close"]}).setContent(this.__box.container)),this.__dialog.setHeader(this.jodit.i18n("Restore")),this.addButtonsToDialog()}onSaveBackup(){this.__storage.add({created:new Date,html:this.j.value})}async onOpenBackupDialog(){this.prepareDialog();const{__dialog:t}=this;if(!t)return;t.open().setModal(!0);const e=await this.__storage.items();this.__box.build([{created:new Date,html:this.j.value},...e]),t.calcAutoSize(),t.setPosition()}onSelectItem(t){var e;null===(e=this.__dialog)||void 0===e||e.close(),this.j.value=t.html,this.j.s.focus()}addButtonsToDialog(){var t;const{jodit:e}=this,o=(0,h.zx)(e,{name:"ok",tabIndex:0,variant:"primary",text:"Ok"}),i=(0,h.zx)(e,{variant:"secondary",tabIndex:0,text:"Cancel"}),s=(0,h.zx)(e,{name:"clear",tabIndex:0,variant:"secondary",text:"Remove all"});o.onAction((()=>{this.__box.chooseSelected()})),i.onAction((()=>{var t;null===(t=this.__dialog)||void 0===t||t.close()})),s.onAction((()=>{e.confirm("Are you sure?",void 0,(t=>{var e;t&&(this.__storage.clear(),null===(e=this.__dialog)||void 0===e||e.close())}))}));const n=new h.eC(e,[s,i,o]);n.container.style.margin="0",n.container.style.justifyContent="flex-end",n.container.style.width="100%",null===(t=this.__dialog)||void 0===t||t.setFooter(n)}beforeDestruct(){var t;const{j:e}=this;e.async.clearTimeout(this.timeout),e.e.off(this.__box,"choose",this.onSelectItem).off(e.ow,"beforeunload.backup"),this.__box.destruct(),null===(t=this.__dialog)||void 0===t||t.destruct()}}(0,i.gn)([c.autobind],f.prototype,"onSaveBackup",null),(0,i.gn)([c.autobind],f.prototype,"onOpenBackupDialog",null),(0,i.gn)([c.autobind],f.prototype,"onSelectItem",null),v.Jodit.plugins.add("backup",f)},27892(t,e,o){"use strict";o.r(e)},70655(t,e,o){"use strict";function i(t,e,o,i){var s,n=arguments.length,a=3>n?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(3>n?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}o.d(e,{gn:()=>i})},12240(t){t.exports='<?xml version="1.0" ?><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Upload"><path d="M16,26h8V50a2,2,0,0,0,2,2H38a2,2,0,0,0,2-2V26h8a2,2,0,0,0,1.4946-3.3291l-16-18a2,2,0,0,0-2.9892,0l-16,18A2,2,0,0,0,16,26ZM32,9.0107,43.5464,22H38a2,2,0,0,0-2,2V48H28V24a2,2,0,0,0-2-2H20.4536Z"/><path d="M53,42a2,2,0,0,0-2,2V54a2.0023,2.0023,0,0,1-2,2H15a2.0023,2.0023,0,0,1-2-2V44a2,2,0,0,0-4,0V54a6.0066,6.0066,0,0,0,6,6H49a6.0066,6.0066,0,0,0,6-6V44A2,2,0,0,0,53,42Z"/></g></svg>'}},t=>t(t.s=62899)])}));