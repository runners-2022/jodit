((e,t)=>{if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}})(self,(function(){return(self.webpackChunkjodit_idist=self.webpackChunkjodit_idist||[]).push([[790],{22308(e){e.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M2.5 12C2.5 11.5858 2.83579 11.25 3.25 11.25H4.75C5.16421 11.25 5.5 11.5858 5.5 12C5.5 12.4142 5.16421 12.75 4.75 12.75H3.25C2.83579 12.75 2.5 12.4142 2.5 12Z"/> <path d="M6.5 12C6.5 11.5858 6.83579 11.25 7.25 11.25H8.75C9.16421 11.25 9.5 11.5858 9.5 12C9.5 12.4142 9.16421 12.75 8.75 12.75H7.25C6.83579 12.75 6.5 12.4142 6.5 12Z" /> <path d="M10.5 12C10.5 11.5858 10.8358 11.25 11.25 11.25H12.75C13.1642 11.25 13.5 11.5858 13.5 12C13.5 12.4142 13.1642 12.75 12.75 12.75H11.25C10.8358 12.75 10.5 12.4142 10.5 12Z" /> <path d="M14.5 12C14.5 11.5858 14.8358 11.25 15.25 11.25H16.75C17.1642 11.25 17.5 11.5858 17.5 12C17.5 12.4142 17.1642 12.75 16.75 12.75H15.25C14.8358 12.75 14.5 12.4142 14.5 12Z" /> <path d="M18.5 12C18.5 11.5858 18.8358 11.25 19.25 11.25H20.75C21.1642 11.25 21.5 11.5858 21.5 12C21.5 12.4142 21.1642 12.75 20.75 12.75H19.25C18.8358 12.75 18.5 12.4142 18.5 12Z" /> <path d="M4.75 2C4.33579 2 4 2.33579 4 2.75V7C4 8.104 4.896 9 6 9H18C19.104 9 20 8.104 20 7V2.75C20 2.33579 19.6642 2 19.25 2C18.8358 2 18.5 2.33579 18.5 2.75V7C18.5 7.275 18.276 7.5 18 7.5H6C5.724 7.5 5.5 7.275 5.5 7V2.75C5.5 2.33579 5.16421 2 4.75 2Z" /> <path d="M19.25 22C19.6642 22 20 21.6642 20 21.25V17C20 15.896 19.104 15 18 15L6 15C4.896 15 4 15.896 4 17L4 21.25C4 21.6642 4.33579 22 4.75 22C5.16421 22 5.5 21.6642 5.5 21.25L5.5 17C5.5 16.725 5.724 16.5 6 16.5L18 16.5C18.276 16.5 18.5 16.725 18.5 17V21.25C18.5 21.6642 18.8358 22 19.25 22Z" /> </svg>'},17114(e,t){"use strict";t.Z="[data-jodit-page-break] {\n\tdisplay: flex;\n\theight: 24px;\n\tbox-sizing: border-box;\n\n\talign-items: center;\n\tjustify-content: center;\n\n\tborder: 1px dashed #ccc;\n\n\tfont-size: 12px;\n\tpage-break-before: always;\n\ttext-transform: uppercase;\n}\n\n[data-jodit-page-break]:active {\n\tborder-color: #818181;\n}\n"},93820(e,t,a){"use strict";a.r(t),a.d(t,{PageBreak:()=>c});var r=a(70655),o=a(69942),n=a(35871),i=a(96065);const s=a(17114).Z;i.D.prototype.pageBreak={separator:'<div style="page-break-before: always"></div>'},i.D.prototype.controls.pageBreak={tooltip:"Insert page break",icon:a(22308),command:"insertPageBreak"},i.D.prototype.iframeStyle=i.D.prototype.iframeStyle+""+s;var p=a(45972),d=a(53909),C=a(61273);class c extends o.S{constructor(){super(...arguments),this.requires=["license"],this.buttons=[{name:"pageBreak",group:"insert"}]}afterInit(e){e.registerCommand("insertPageBreak",(()=>{const t=e.createInside.div("",{});this.decoratePageBreak(t),e.s.insertNode(t,!1,!1);let a=t.parentNode;for(;a&&a!==e.editor&&(p.i.after(a,t),!p.i.isBlock(a));)a=t.parentNode;e.s.setCursorAfter(t),e.setEditorValue()}))}decoratePageBreak(e){(0,C.attr)(e,{"data-jodit-page-break":!0,contenteditable:!1}),e.innerText=this.j.i18n("Page break")}beforeDestruct(){}onChange(){(0,C.$$)('[style*="page-break-after"],[style*="page-break-before"]',this.j.editor).forEach((e=>{p.i.isEmpty(e)&&!(0,C.attr)(e,"data-jodit-page-break")&&this.decoratePageBreak(e)}))}onAfterGetValueFromEditor(e){e.value=e.value.replace(/<div[^>]+data-jodit-page-break[^>]+>[^]*?<\/div>/gi,this.j.o.pageBreak.separator)}}(0,r.gn)([(0,d.watch)([":change",":afterSetMode"]),(0,d.debounce)()],c.prototype,"onChange",null),(0,r.gn)([(0,d.watch)(":afterGetValueFromEditor")],c.prototype,"onAfterGetValueFromEditor",null),n.Jodit.plugins.add("pageBreak",c)}},e=>e(e.s=93820)])}));