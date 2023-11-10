"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6812],{6770:(t,e,n)=>{n.d(e,{q:()=>N,Z:()=>m});var a=n(7294),l=n(4256),r=n(4529);const i={labelSelector:"labelSelector_RmTm"};var o=n(782);const p=[{value:"GP2040",label:"GP2040"},{value:"XInput",label:"XInput"},{value:"DirectInput",label:"DirectInput"},{value:"Nintendo Switch",label:"Nintendo Switch"},{value:"PS3",label:"PS3"},{value:"PS4",label:"PS4"},{value:"Arcade",label:"Arcade"}],d={GP2040:{name:"GP2040",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B1",B2:"B2",B3:"B3",B4:"B4",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"S1",S2:"S2",L3:"L3",R3:"R3",A1:"A1",A2:"A2",Function:"Function"},XInput:{name:"XInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"A",B2:"B",B3:"X",B4:"Y",L1:"LB",R1:"RB",L2:"LT",R2:"RT",S1:"Back",S2:"Start",L3:"LS",R3:"RS",A1:"Guide",A2:"(A2)",Function:"Function"},DirectInput:{name:"DirectInput",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"2",B2:"3",B3:"1",B4:"4",L1:"5",R1:"6",L2:"7",R2:"8",S1:"9",S2:"10",L3:"11",R3:"12",A1:"13",A2:"14",Function:"Function"},"Nintendo Switch":{name:"Nintendo Switch",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"B",B2:"A",B3:"Y",B4:"X",L1:"L",R1:"R",L2:"ZL",R2:"ZR",S1:"Minus",S2:"Plus",L3:"LS",R3:"RS",A1:"Home",A2:"Capture",Function:"Function"},PS4:{name:"PS4",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Share",S2:"Options",L3:"L3",R3:"R3",A1:"PS",A2:"Touchpad",Function:"Function"},PS3:{name:"PS3",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"Cross",B2:"Circle",B3:"Square",B4:"Triangle",L1:"L1",R1:"R1",L2:"L2",R2:"R2",S1:"Select",S2:"Start",L3:"L3",R3:"R3",A1:"PS",A2:"(A2)",Function:"Function"},Arcade:{name:"Arcade",Up:"Up",Down:"Down",Left:"Left",Right:"Right",B1:"K1",B2:"K2",B3:"P1",B4:"P2",L1:"P4",R1:"P3",L2:"K4",R2:"K3",S1:"Select",S2:"Start",L3:"LS",R3:"RS",A1:"Home",A2:"(A2)",Function:"Function"}},u={selected:p[0]},s=(0,r.Ue)()((0,o.tJ)((t=>({...u,select:e=>{t({selected:e})}})),{name:"SelectedLabel"})),k={option:(t,e)=>{let{data:n,isDisabled:a,isSelected:l}=e;return{...t,color:a?"#ccc":l?"white":"black",":active":{...t[":active"],backgroundColor:a?void 0:l?n.color:0}}}};function m(){const{selected:t,select:e}=s();return a.createElement(l.ZP,{value:t,className:i.labelSelector,options:p,onChange:t=>e(t),styles:k})}function N(t){let{buttons:e}=t;const n=s((t=>t.selected)),l=e.map((t=>d[n.value][t])).join(" + ");return a.createElement("code",null,l)}},3056:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(6770);const i={title:"SNES Input",pagination_next:null,pagination_prev:null,description:"Add-on to use various NES and SNES controllers/peripherals in conjunction with GP2040-CE to send inputs to supported systems"},o="SNES Input",p={unversionedId:"add-ons/snes-input",id:"add-ons/snes-input",title:"SNES Input",description:"Add-on to use various NES and SNES controllers/peripherals in conjunction with GP2040-CE to send inputs to supported systems",source:"@site/docs/add-ons/snes-input.mdx",sourceDirName:"add-ons",slug:"/add-ons/snes-input",permalink:"/add-ons/snes-input",draft:!1,tags:[],version:"current",frontMatter:{title:"SNES Input",pagination_next:null,pagination_prev:null,description:"Add-on to use various NES and SNES controllers/peripherals in conjunction with GP2040-CE to send inputs to supported systems"},sidebar:"webConfigSidebar"},d={},u=[{value:"Web Configurator Options",id:"web-configurator-options",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2}],s={toc:u},k="wrapper";function m(t){let{components:e,...i}=t;return(0,l.kt)(k,(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"snes-input"},"SNES Input"),(0,l.kt)("p",null,"Select the button labels to be displayed in the usage guide:"),(0,l.kt)(r.Z,{mdxType:"InputLabelSelector"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Purpose: This add-on is intended to allow you to use a GP2040-CE as an adapter to connect an NES controller, SNES controller, or a Super NES Mouse to supported systems."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GP2040-CE Configurator - SNES Input",src:n(3322).Z,width:"1725",height:"805"})),(0,l.kt)("h2",{id:"web-configurator-options"},"Web Configurator Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLOCK Pin")," - The GPIO pin used for SNES CLOCK."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LATCH Pin")," - The GPIO pin used for SNES LATCH."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DATA Pin")," - The GPIO pin used for SNES DATA.")),(0,l.kt)("p",null,"Supported controller types and their mapping is as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"GP2040"),(0,l.kt)("th",{parentName:"tr",align:null},"NES"),(0,l.kt)("th",{parentName:"tr",align:null},"SNES"),(0,l.kt)("th",{parentName:"tr",align:null},"Super NES Mouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["Up"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Up"),(0,l.kt)("td",{parentName:"tr",align:null},"Up"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["Down"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Down"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["Left"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Left"),(0,l.kt)("td",{parentName:"tr",align:null},"Left"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["Right"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Right"),(0,l.kt)("td",{parentName:"tr",align:null},"Right"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["B1"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"Left Click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["B2"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"Right Click")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["B3"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["B4"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["L1"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"L"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["R1"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["L2"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["R2"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["S1"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Select"),(0,l.kt)("td",{parentName:"tr",align:null},"Select"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["S2"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null},"Start"),(0,l.kt)("td",{parentName:"tr",align:null},"Start"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(r.q,{buttons:["A1"],mdxType:"Hotkey"})),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Analog")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Mouse Movement")))),(0,l.kt)("h2",{id:"hardware"},"Hardware"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"SNES extension cable with individual wires, or just directly wire from the controller."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GP2040-CE Configurator - SNES Controller Cable Connector Pinout",src:n(1340).Z,width:"512",height:"256"})),(0,l.kt)("p",null,"Please refer to the SNES Controller cable connector pinout found on ",(0,l.kt)("a",{parentName:"p",href:"https://www.repairfaq.org/REPAIR/F_SNES.html"},"Super Nintendo Entertainment System: pinouts & protocol"),'. The orientation of this pinout is looking back "into" the connector on the CABLE.'),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Extension wire colors are inconsistent, so it's best to test continuity.")),(0,l.kt)("p",null,"Connect the SNES pins to the GPIO pins on the RP2040 board following this table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"SNES Pin"),(0,l.kt)("th",{parentName:"tr",align:null},"Pin on RP2040 Board"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"3V3 Out")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CLOCK Pin")," in web interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LATCH Pin")," in web interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATA Pin")," in web interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"No connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"No connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Ground")))),(0,l.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,l.kt)("p",null,"None."))}m.isMDXComponent=!0},1340:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-snespad-input-pinout-11840dcf09e785832ca0b92cd5308283.svg"},3322:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/gpc-add-ons-snespad-input-5f6cb627cfa9fed95b5620af382268ea.png"}}]);