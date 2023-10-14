"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[60],{4060:(b,h,r)=>{r.r(h),r.d(h,{HomeModule:()=>a});var m=r(6895),_=r(5506),e=r(8256);class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[m.ez]});var l=r(5861);const C=[{isActive:!0,name:"Freelancer",description:"Freelance developer, collaborating with various companies and participating in independent projects, where my role mainly revolves around web development. \n\nIn addition to my freelance work, I also contribute to different organizations and contribute to a wide range of web-based initiatives. \n\nMy experience as a web developer spans multiple domains, allowing me to adapt to diverse project requirements and deliver exceptional results. Whether it's creating beautiful websites, optimizing user experiences or implementing innovative web solutions.",backgroundColor:"var(--secondary-color)",position:1},{isActive:!0,name:"Front-End Engineer at MetNet",description:"+2 years of experience building: \n\n\u2022 Web apps built with Angular (HTML5, SASS, BOOTSTRAP and Typescript) for a variety of businesses and government organizations.\n\n\u2022 Consume REST APIs using Node.js, configured for seamless deployment and integration with various cloud services. Experience in using Swagger and Postman for API development and testing.",backgroundColor:"var(--tertiary-color)",position:2}].sort((o,n)=>o.position>=n.position?1:-1).filter(o=>o.isActive);var f=r(5111),u=r(4340),p=r(9405);class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-project-item"]],inputs:{project:"project"},decls:5,vars:3,consts:[[1,"project",3,"routerLink"],["alt","Capa",3,"src"],[1,"gradient"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1)(2,"div",2),e.TgZ(3,"strong"),e._uU(4),e.qZA()()),2&n&&(e.Q6J("routerLink","/project/"+t.project.id),e.xp6(1),e.Q6J("src",t.project.coverImage,e.LSH),e.xp6(3),e.Oqu(t.project.name))},dependencies:[_.rH],styles:[".project[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;background:#263138;overflow:hidden;box-shadow:0 4px 9px #445964;border-radius:10px}.project[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{z-index:5;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0) 75%,rgba(19,24,28,.6) 95%)}.project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{z-index:1;position:absolute;top:0;left:0;width:100%}.project[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{z-index:10;position:relative;color:#fff;font-weight:700;font-size:1.5rem;text-align:center;margin-bottom:1rem}"]});const P=["textContent"];function M(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",30)(2,"h3"),e._uU(3),e.qZA(),e._UZ(4,"p",31),e.qZA(),e.BQk()),2&o){const t=n.$implicit,i=n.index;e.xp6(1),e.Udp("background",t.backgroundColor),e.ekj("lower",i%2==0),e.xp6(2),e.Oqu(t.name),e.xp6(1),e.Q6J("innerHTML",t.description,e.oJD)}}function O(o,n){1&o&&e.GkF(0)}function x(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"div",32),e._UZ(2,"app-project-item",33),e.qZA(),e.BQk()),2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.ekj("horizontal",t.orientation===i.projectOrientation.HORIZONTAL)("vertical",t.orientation===i.projectOrientation.VERTICAL),e.xp6(1),e.Q6J("project",t)}}class d{constructor(n,t,i){this.doc=n,this.renderer=t,this.cdRef=i,this.listPositions=C,this.listTags=Object.values(p.z),this.currentTag=p.z.ALL,this.projectOrientation=u.I,this.listProjects=f.h,this.listProjectsAux=f.h}topFunction(){this.doc.body.scrollTop=0,this.doc.documentElement.scrollTop=0}filterProjectByTag(n){this.currentTag=n,this.listProjectsAux=n===p.z.ALL?this.listProjects:this.listProjects.filter(t=>t.tags.includes(n))}navigateTo(n){this.doc.getElementById(n)?.scrollIntoView()}onScroll(){this.toggleOnTop()}toggleOnTop(){const n=this.doc.getElementById("toTopBtn");!n||(n.style.display="none",(this.doc.body.scrollTop>100||this.doc.documentElement.scrollTop>100)&&(n.style.display="block"))}ngAfterViewInit(){this.animateText(),this.scrollTextToBottom()}sleep(n){return(0,l.Z)(function*(){return new Promise(t=>setTimeout(t,n))})()}typeWriter(n,t){var i=this;return(0,l.Z)(function*(){for(let s=0;s<t.length;s++)"\n"===t.charAt(s)?n.innerHTML+="<br>":n.innerHTML+=t.charAt(s),yield i.sleep(30)})()}animateText(){var n=this;return(0,l.Z)(function*(){const t=n.textContent.nativeElement,i=t.innerText.trim();t.innerText="",yield n.typeWriter(t,"Welcome:"),t.innerHTML+="<br><br>",yield n.typeWriter(t,i),n.scrollTextToBottom(),n.cdRef.detectChanges()})()}scrollTextToBottom(){const n=this.textContent.nativeElement;n.scrollTop=n.scrollHeight}}d.\u0275fac=function(n){return new(n||d)(e.Y36(m.K0),e.Y36(e.Qsj),e.Y36(e.sBO))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-home"]],viewQuery:function(n,t){if(1&n&&e.Gf(P,5),2&n){let i;e.iGM(i=e.CRH())&&(t.textContent=i.first)}},hostBindings:function(n,t){1&n&&e.NdJ("scroll",function(s){return t.onScroll(s)},!1,e.Jf7)},decls:70,vars:3,consts:[["id","toTopBtn",1,"toTopButton",3,"click"],["src","assets/imgs/arrow-up.svg","alt","top"],["id","home",1,"home"],[1,"me"],[1,"social"],["href","https://github.com/JordyCaro","target","_blank","rel","noreferrer"],["src","assets/imgs/github.svg","alt","Github"],["href","https://www.linkedin.com/in/jhordan-caro-b016b811a/","target","_blank","rel","noreferrer"],["src","assets/imgs/linkedin.svg","alt","Linkedin"],["href","https://wa.me/573224294287","target","_blank","rel","noreferrer"],["src","assets/imgs/whatsapp.svg","alt","Whatsapp"],[1,"about"],[1,"container","console-container"],[1,"taskbar"],[1,"program-name"],[1,"text"],[1,"directory"],[1,"dir"],[1,"description"],["id","tagline"],[1,"content"],["textContent",""],[1,"blinking-underscore"],["id","exp",1,"experience"],[1,"header"],[1,"positions"],[4,"ngFor","ngForOf"],["id","projects",1,"projects"],[1,"tags"],[1,"list"],[1,"positions--card"],[3,"innerHTML"],[1,"project"],[3,"project"]],template:function(n,t){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return t.topFunction()}),e._UZ(1,"img",1),e.qZA(),e.TgZ(2,"div",2)(3,"div",3)(4,"div")(5,"h1"),e._uU(6,"I am passionate about programming and I'd love to develop solutions to your problems"),e.qZA(),e.TgZ(7,"span"),e._uU(8,"Welcome to my portfolio"),e.qZA()(),e.TgZ(9,"div",4)(10,"a",5),e._UZ(11,"img",6),e.qZA(),e.TgZ(12,"a",7),e._UZ(13,"img",8),e.qZA(),e.TgZ(14,"a",9),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"div",12)(18,"div",13)(19,"span",14),e._uU(20,"About Me"),e.qZA()(),e.TgZ(21,"div",15)(22,"p",16)(23,"span",17),e._uU(24,"C:\\user\\jhordan\\portfolio"),e.qZA()(),e.TgZ(25,"p",18),e._uU(26," $ "),e.TgZ(27,"span",19)(28,"span",20,21),e._uU(30," I am Jhordan Caro, a passionate developer and technology enthusiast, Front End Developer with +3 years years of experience working in different development teams and contributing to different software I really enjoy what I do. But do you know what that means? Let me explain: "),e._UZ(31,"br")(32,"br"),e._uU(33," As a Front-End Developer, I am responsible for everything you can see on a website from the design, styles, to even the animations. My primary goal is to make it look good and appealing to users. Doesn't that sound great? "),e._UZ(34,"br")(35,"br"),e._uU(36," I have a deep love for technology and a continuous thirst for learning. I'm always staying up-to-date with the latest web development technologies, and I've had the privilege of working in various development teams and contributing to different software projects. "),e._UZ(37,"br")(38,"br"),e._uU(39," C:"),e.TgZ(40,"span",22),e._uU(41,"_"),e.qZA()()()()()()()(),e.TgZ(42,"div",23)(43,"div",24)(44,"p"),e._uU(45,"The path ahead is just beginning, "),e._UZ(46,"br"),e._uU(47,"and I'm always on a journey of learning and innovation."),e.qZA(),e.TgZ(48,"div")(49,"h2"),e._uU(50,"Professional"),e.qZA(),e.TgZ(51,"h2"),e._uU(52,"Experience"),e.qZA()()(),e.TgZ(53,"div",25),e.YNc(54,M,5,6,"ng-container",26),e.qZA()(),e.TgZ(55,"div",27)(56,"div",24)(57,"div")(58,"h2"),e._uU(59,"My"),e.qZA(),e.TgZ(60,"h2"),e._uU(61,"Portfolio"),e.qZA()(),e.TgZ(62,"p"),e._uU(63,"These are some of the jobs and "),e._UZ(64,"br"),e._uU(65,"projects I've developed"),e.qZA()(),e.TgZ(66,"div",28),e.YNc(67,O,1,0,"ng-container",26),e.qZA(),e.TgZ(68,"div",29),e.YNc(69,x,3,5,"ng-container",26),e.qZA()()),2&n&&(e.xp6(54),e.Q6J("ngForOf",t.listPositions),e.xp6(13),e.Q6J("ngForOf",t.listTags),e.xp6(2),e.Q6J("ngForOf",t.listProjectsAux))},dependencies:[m.sg,g],styles:[".home[_ngcontent-%COMP%]{position:relative;display:flex;width:calc(100% - 20rem);min-height:calc(100vh - 11rem);padding:4.5rem 10rem 0;color:var(--primary-color)}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]{width:85%;flex-direction:column;padding:0}}.home[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;height:20rem;transform:rotateY(180deg)}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{display:none}}.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-width:30%;padding:5rem 0;margin-right:3rem;width:30%;flex-shrink:0;flex-basis:auto}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]{padding:2.2rem;margin-right:0;width:100%}}.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.3rem}.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.5rem 0;font-weight:900;text-transform:uppercase;font-size:2.5rem}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.3rem}}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{margin-top:2rem}}.home[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:1rem;height:2rem}.home[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{width:70%}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{width:100%}}.home[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.9rem;margin:0}@media screen and (max-width: 768px){.home[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.8rem}}.home[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .redirect[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]{background-color:#000;width:100%;padding:20px;font-family:Courier New,monospace;color:#fff;position:relative;height:400px}.taskbar[_ngcontent-%COMP%]{background-color:#3b3838;padding:5px;text-align:left;position:absolute;top:0;left:0;right:0;z-index:1}.program-name[_ngcontent-%COMP%]{color:#fff;margin-left:10px}.title[_ngcontent-%COMP%]{margin-top:20px}.text[_ngcontent-%COMP%]{padding:20px 0;overflow:auto;max-height:300px}.blinking-cursor[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink-animation .8s steps(1,start) infinite}@keyframes _ngcontent-%COMP%_blink-animation{to{visibility:hidden}}.blinking[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink-animation 1s step-start infinite}@keyframes _ngcontent-%COMP%_blink-animation{0%,to{visibility:visible}50%{visibility:hidden}}.experience[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:calc(100% - 20rem);min-height:calc(100vh - 5rem);padding:4.5rem 10rem 0;color:#445964}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]{width:unset;padding:4rem 2rem 0}}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;margin-left:auto}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:column-reverse}}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:right;margin:auto 6rem 0 0;font-weight:700;font-size:1.4rem;color:#cbcbcb}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:1rem 0 0}}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;text-align:right;font-size:3rem;font-weight:900;line-height:1.1;color:#fff}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}.experience[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:last-child{color:#87ceeb}.experience[_ngcontent-%COMP%]   .positions[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;margin:4rem 0}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .positions[_ngcontent-%COMP%]{margin:0;flex-direction:column;flex-wrap:unset}}.experience[_ngcontent-%COMP%]   .positions--card[_ngcontent-%COMP%]{border-radius:20px;padding:2rem 1.5rem;margin:2rem;width:25%;box-shadow:0 4px 9px #445964}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .positions--card[_ngcontent-%COMP%]{width:unset;margin:1rem}}.experience[_ngcontent-%COMP%]   .positions--card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:900;font-size:2rem;text-align:center;margin:0;color:#fff}.experience[_ngcontent-%COMP%]   .positions--card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:1.3rem;margin:2rem 0;white-space:pre-wrap}.experience[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]{transform:translateY(3rem)}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]{transform:translateY(0)}}.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]{margin-bottom:2rem;display:flex;flex-direction:column;align-items:center;width:100%}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]{margin:2rem 0}}.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:4rem}.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;max-width:50%;font-size:1.3rem}@media screen and (max-width: 768px){.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:100%}}.experience[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:900;color:#263138;font-size:1.4rem}.projects[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:calc(100% - 20rem);min-height:calc(100vh - 5rem);padding:4.5rem 10rem 0;color:#445964;margin-bottom:2rem}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]{width:unset;padding:4rem 2rem 0}}.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;margin-right:auto}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:column;margin-right:0}}.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;text-align:left;font-size:3rem;font-weight:900;line-height:1.1;color:#fff}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child{color:#87ceeb}.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left;margin:auto 6rem 0;font-weight:700;font-size:1.4rem;color:#fff;text-align:center}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:1rem 0 0}}.projects[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{display:flex;margin:5rem 0 3rem}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{margin:3rem 0;justify-content:center}}.projects[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:.7rem 1rem;font-weight:900;font-size:1.4rem;background:#DFDFDF;border-radius:10px;margin:0 .5rem;cursor:pointer;-webkit-user-select:none;user-select:none}.projects[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#fff;background:#263138}.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{margin:.75rem;cursor:pointer}.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]{width:32rem;height:16rem}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .horizontal[_ngcontent-%COMP%]{width:100%;height:12rem}}.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{width:14rem;height:25rem}@media screen and (max-width: 768px){.projects[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .vertical[_ngcontent-%COMP%]{width:100%;height:40rem}}.main[_ngcontent-%COMP%]   .sobre-mi[_ngcontent-%COMP%]{min-height:100vh;padding:3rem 0;background:#ffffff;color:#000;margin-bottom:3rem}.contenedor[_ngcontent-%COMP%]{width:95%;max-width:1200px;margin:0 auto}.texto[_ngcontent-%COMP%]{padding:1.5rem 0;background:#101010;color:red;font-family:monospace,Arial;width:70%;min-height:27.5rem;margin:0 auto;border-radius:.625rem}.direccion[_ngcontent-%COMP%]{margin-bottom:1rem}.descripcion[_ngcontent-%COMP%]{color:gray;font-weight:100;line-height:1.5}"]});const w=[{path:"",component:d}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.ez,_.Bz.forChild(w),c]})}}]);