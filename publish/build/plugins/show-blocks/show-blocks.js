((t,o)=>{if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var e=o();for(var s in e)("object"==typeof exports?exports:t)[s]=e[s]}})(self,(function(){return(self.webpackChunkjodit_idist=self.webpackChunkjodit_idist||[]).push([[876],{10642(t){t.exports='<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <g> <rect rx="10" height="1620" width="1620" y="79.646973" x="80" stroke-width="100" stroke-dasharray="8% 10%" fill="none"/> <path d="m1333.992706,381.692384l0,52.982419q0,21.04781 -12.98052,44.272981t-29.820114,23.22517q-35.082487,0 -37.889085,0.725787q-18.242893,4.354719 -22.452791,22.499384q-2.104949,7.983652 -2.104949,46.45034l0,836.106125q0,18.144664 -12.629695,31.208822t-30.170938,13.064158l-75.778171,0q-17.541243,0 -30.170938,-13.064158t-12.629695,-31.208822l0,-884.008038l-100.335911,0l0,884.008038q0,18.144664 -12.27887,31.208822t-30.521763,13.064158l-75.778171,0q-18.242893,0 -30.521763,-13.064158t-12.27887,-31.208822l0,-359.990137q-103.14251,-8.709439 -171.904184,-42.821407q-88.407866,-42.095621 -134.716748,-129.915795q-44.905583,-84.917028 -44.905583,-187.978721q0,-120.48057 61.745176,-207.574958q61.745176,-85.642815 146.644794,-115.400064q77.88312,-26.854103 292.587937,-26.854103l336.090221,0q17.541243,0 30.170938,13.064158t12.629695,31.208822z"/> </g> </svg>'},23337(t,o,e){"use strict";e.r(o),e.d(o,{ar:()=>s,cs_cz:()=>l,de:()=>i,es:()=>r,fa:()=>a,fr:()=>n,he:()=>h,hu:()=>c,id:()=>d,it:()=>p,ja:()=>k,ko:()=>u,nl:()=>b,pl:()=>w,pt_br:()=>g,ru:()=>B,tr:()=>x,zh_cn:()=>f,zh_tw:()=>m});const s=e(96551),l=e(26464),i=e(7896),r=e(44660),a=e(12990),n=e(10187),h=e(7834),c=e(46788),d=e(79955),p=e(48343),k=e(8449),u=e(36777),b=e(27705),w=e(7450),g=e(17454),B=e(48013),x=e(47766),f=e(70198),m=e(50756)},54778(t,o,e){"use strict";e.r(o),e.d(o,{showBlocks:()=>d});var s=e(70655),l=e(96065);l.D.prototype.showBlocks={enable:!1,color:"#ccc",tagList:["html","body","div","span","applet","object","iframe","h1","h2","h3","h4","h5","h6","p","blockquote","pre","a","abbr","acronym","address","big","cite","code","del","dfn","em","img","ins","kbd","q","s","samp","small","strike","strong","sub","sup","tt","var","b","u","i","center","dl","dt","dd","fieldset","form","label","legend","caption","th","td","li","ol","ul","article","aside","canvas","details","embed","figure","figcaption","footer","header","hgroup","menu","nav","output","ruby","section","summary","time","mark","audio","video"]},l.D.prototype.controls.showBlocks={isActive(t){return!!t.e.fire("showBlocksEnabled")},tooltip:"Show Blocks",command:"toggleShowBlocks"};var i=e(69942),r=e(22020),a=e(75762),n=e(91013),h=e(53909),c=e(35871);class d extends i.S{constructor(t){super(t),this.requires=["license"],this.buttons=[{name:"showBlocks",group:"state"}],this.isEnabled=!1,(0,n.xl)(e(23337)),a.JO.set("showBlocks",e(10642))}enable(){this.isEnabled=!0;const t=this.j.o.iframe?"body":".jodit-wysiwyg",{tagList:o,color:e}=this.j.o.showBlocks;this.style.innerHTML=o.map((o=>{return`${t} ${o}{\n\t\t\t\t\toutline: 1px dashed ${e};\n\t\t\t\t\tbackground-image: url("${s='<svg xmlns="http://www.w3.org/2000/svg" width="50px"><text dominant-baseline="hanging" text-anchor="end" style="fill: '+e+';font: 10px sans-serif" x="50px" y="0">'+o+"</text></svg>","data:image/svg+xml;utf8,"+escape(s)}");\n\t\t\t\t\tbackground-position: top 2px ${"rtl"===this.j.o.direction?"left":"right"} 4px;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}`;var s})).join("")}disable(){this.isEnabled=!1,this.style.innerHTML=""}toggle(){this.isEnabled?this.disable():this.enable(),this.j.e.fire("updateToolbar")}afterInit(t){this.style=(0,n.ZO)(t,d,"style",!0),t.e.on("showBlocksEnabled",(()=>this.isEnabled)),t.registerCommand("enableShowBlocks",this.enable).registerCommand("disableShowBlocks",this.disable).registerCommand("toggleShowBlocks",this.toggle),this.j.o.showBlocks.enable&&this.enable()}beforeDestruct(t){this.disable(),r.Dom.safeRemove(this.style)}}(0,s.gn)([h.autobind],d.prototype,"enable",null),(0,s.gn)([h.autobind],d.prototype,"disable",null),(0,s.gn)([h.autobind],d.prototype,"toggle",null),c.Jodit.plugins.add("show-blocks",d)},96551(t){t.exports={"Show Blocks":"تظهر كتل"}},26464(t){t.exports={"Show Blocks":"Ukázat Bloky"}},7896(t){t.exports={"Show Blocks":"Zeigen Blöcke"}},44660(t){t.exports={"Show Blocks":"Mostrar Bloques"}},12990(t){t.exports={"Show Blocks":"نشان می دهد بلوک"}},10187(t){t.exports={"Show Blocks":"Afficher Les Blocs"}},7834(t){t.exports={"Show Blocks":"תראה רחובות"}},46788(t){t.exports={"Show Blocks":"Mutasd Meg Blokkok"}},79955(t){t.exports={"Show Blocks":"Menunjukkan Blok"}},48343(t){t.exports={"Show Blocks":"Visualizza Blocchi"}},8449(t){t.exports={"Show Blocks":"ショーのブロック"}},36777(t){t.exports={"Show Blocks":"쇼 블록"}},27705(t){t.exports={"Show Blocks":"Toon Blokken"}},7450(t){t.exports={"Show Blocks":"Pokaż Bloki"}},17454(t){t.exports={"Show Blocks":"Mostrar Blocos"}},48013(t){t.exports={"Show Blocks":"Показать Блоки"}},47766(t){t.exports={"Show Blocks":"Haritayı Blokları"}},70198(t){t.exports={"Show Blocks":"显示块"}},50756(t){t.exports={"Show Blocks":"แสดงช่วงตึก"}}},t=>t(t.s=54778)])}));