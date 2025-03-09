const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DPvvo-dx.js","assets/chunks/framework.Dw7Yg_2H.js"])))=>i.map(i=>d[i]);
import{d as ue,c as z,r as X,n as Qe,o as C,a as Un,t as Pe,b as xe,w as Y,T as yi,e as ce,_ as Re,u as Lr,i as wu,f as Cu,g as wo,h as Me,j as I,k as T,l as _i,m as bn,p as ye,q as it,s as Dr,v as Nt,x as Ir,y as Co,z as Ru,A as Pu,F as ut,B as Lt,C as Qn,D as pc,E as Ur,G as le,H as _n,I as mc,J as us,K as Yn,L as Qt,M as Lu,N as Qi,O as La,P as Nr,Q as gc,R as Fr,S as Du,U as Iu,V as Uu,W as _c,X as Ro,Y as Nu,Z as Fu,$ as Ou,a0 as ku,a1 as vc,a2 as es,a3 as Bu,a4 as xc,a5 as Vu,a6 as Or,a7 as ei,a8 as Po,a9 as bc,aa as Da,ab as yc,ac as Lo,ad as Do,ae as ts,af as zu,ag as Hu,ah as Gu,ai as Sc,aj as Wu,ak as $u,al as Xu,am as Xr}from"./framework.Dw7Yg_2H.js";const Yu=ue({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(i){return(e,t)=>(C(),z("span",{class:Qe(["VPBadge",e.type])},[X(e.$slots,"default",{},()=>[Un(Pe(e.text),1)])],2))}}),qu={key:0,class:"VPBackdrop"},ju=ue({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(i){return(e,t)=>(C(),xe(yi,{name:"fade"},{default:Y(()=>[e.show?(C(),z("div",qu)):ce("",!0)]),_:1}))}}),Ku=Re(ju,[["__scopeId","data-v-b06cdb19"]]),et=Lr;function Zu(i,e){let t,n=!1;return()=>{t&&clearTimeout(t),n?t=setTimeout(i,e):(i(),(n=!0)&&setTimeout(()=>n=!1,e))}}function Ia(i){return i.startsWith("/")?i:`/${i}`}function Io(i){const{pathname:e,search:t,hash:n,protocol:s}=new URL(i,"http://a.com");if(wu(i)||i.startsWith("#")||!s.startsWith("http")||!Cu(e))return i;const{site:r}=et(),a=e.endsWith("/")||e.endsWith(".html")?i:i.replace(/(?:(^\.+)\/)?.*$/,`$1${e.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${t}${n}`);return wo(a)}function Rs({correspondingLink:i=!1}={}){const{site:e,localeIndex:t,page:n,theme:s,hash:r}=et(),a=Me(()=>{var l,c;return{label:(l=e.value.locales[t.value])==null?void 0:l.label,link:((c=e.value.locales[t.value])==null?void 0:c.link)||(t.value==="root"?"/":`/${t.value}/`)}});return{localeLinks:Me(()=>Object.entries(e.value.locales).flatMap(([l,c])=>a.value.label===c.label?[]:{text:c.label,link:Ju(c.link||(l==="root"?"/":`/${l}/`),s.value.i18nRouting!==!1&&i,n.value.relativePath.slice(a.value.link.length-1),!e.value.cleanUrls)+r.value})),currentLang:a}}function Ju(i,e,t,n){return e?i.replace(/\/$/,"")+Ia(t.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,n?".html":"")):i}const Qu={class:"NotFound"},ed={class:"code"},td={class:"title"},nd={class:"quote"},id={class:"action"},sd=["href","aria-label"],rd=ue({__name:"NotFound",setup(i){const{theme:e}=et(),{currentLang:t}=Rs();return(n,s)=>{var r,a,o,l,c;return C(),z("div",Qu,[I("p",ed,Pe(((r=T(e).notFound)==null?void 0:r.code)??"404"),1),I("h1",td,Pe(((a=T(e).notFound)==null?void 0:a.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=I("div",{class:"divider"},null,-1)),I("blockquote",nd,Pe(((o=T(e).notFound)==null?void 0:o.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),I("div",id,[I("a",{class:"link",href:T(wo)(T(t).link),"aria-label":((l=T(e).notFound)==null?void 0:l.linkLabel)??"go to home"},Pe(((c=T(e).notFound)==null?void 0:c.linkText)??"Take me home"),9,sd)])])}}}),ad=Re(rd,[["__scopeId","data-v-951cab6c"]]);function Mc(i,e){if(Array.isArray(i))return mr(i);if(i==null)return[];e=Ia(e);const t=Object.keys(i).sort((s,r)=>r.split("/").length-s.split("/").length).find(s=>e.startsWith(Ia(s))),n=t?i[t]:[];return Array.isArray(n)?mr(n):mr(n.items,n.base)}function od(i){const e=[];let t=0;for(const n in i){const s=i[n];if(s.items){t=e.push(s);continue}e[t]||e.push({items:[]}),e[t].items.push(s)}return e}function ld(i){const e=[];function t(n){for(const s of n)s.text&&s.link&&e.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&t(s.items)}return t(i),e}function Ua(i,e){return Array.isArray(e)?e.some(t=>Ua(i,t)):_i(i,e.link)?!0:e.items?Ua(i,e.items):!1}function mr(i,e){return[...i].map(t=>{const n={...t},s=n.base||e;return s&&n.link&&(n.link=s+n.link),n.items&&(n.items=mr(n.items,s)),n})}function On(){const{frontmatter:i,page:e,theme:t}=et(),n=bn("(min-width: 960px)"),s=ye(!1),r=Me(()=>{const _=t.value.sidebar,m=e.value.relativePath;return _?Mc(_,m):[]}),a=ye(r.value);it(r,(_,m)=>{JSON.stringify(_)!==JSON.stringify(m)&&(a.value=r.value)});const o=Me(()=>i.value.sidebar!==!1&&a.value.length>0&&i.value.layout!=="home"),l=Me(()=>c?i.value.aside==null?t.value.aside==="left":i.value.aside==="left":!1),c=Me(()=>i.value.layout==="home"?!1:i.value.aside!=null?!!i.value.aside:t.value.aside!==!1),u=Me(()=>o.value&&n.value),h=Me(()=>o.value?od(a.value):[]);function f(){s.value=!0}function p(){s.value=!1}function g(){s.value?p():f()}return{isOpen:s,sidebar:a,sidebarGroups:h,hasSidebar:o,hasAside:c,leftAside:l,isSidebarEnabled:u,open:f,close:p,toggle:g}}function cd(i,e){let t;Dr(()=>{t=i.value?document.activeElement:void 0}),Nt(()=>{window.addEventListener("keyup",n)}),Ir(()=>{window.removeEventListener("keyup",n)});function n(s){s.key==="Escape"&&i.value&&(e(),t==null||t.focus())}}function ud(i){const{page:e,hash:t}=et(),n=ye(!1),s=Me(()=>i.value.collapsed!=null),r=Me(()=>!!i.value.link),a=ye(!1),o=()=>{a.value=_i(e.value.relativePath,i.value.link)};it([e,i,t],o),Nt(o);const l=Me(()=>a.value?!0:i.value.items?Ua(e.value.relativePath,i.value.items):!1),c=Me(()=>!!(i.value.items&&i.value.items.length));Dr(()=>{n.value=!!(s.value&&i.value.collapsed)}),Co(()=>{(a.value||l.value)&&(n.value=!1)});function u(){s.value&&(n.value=!n.value)}return{collapsed:n,collapsible:s,isLink:r,isActiveLink:a,hasActiveLink:l,hasChildren:c,toggle:u}}function dd(){const{hasSidebar:i}=On(),e=bn("(min-width: 960px)"),t=bn("(min-width: 1280px)");return{isAsideEnabled:Me(()=>!t.value&&!e.value?!1:i.value?t.value:e.value)}}const hd=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,Na=[];function Ec(i){return typeof i.outline=="object"&&!Array.isArray(i.outline)&&i.outline.label||i.outlineTitle||"On this page"}function Uo(i){const e=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t=>t.id&&t.hasChildNodes()).map(t=>{const n=Number(t.tagName[1]);return{element:t,title:fd(t),link:"#"+t.id,level:n}});return pd(e,i)}function fd(i){let e="";for(const t of i.childNodes)if(t.nodeType===1){if(hd.test(t.className))continue;e+=t.textContent}else t.nodeType===3&&(e+=t.textContent);return e.trim()}function pd(i,e){if(e===!1)return[];const t=(typeof e=="object"&&!Array.isArray(e)?e.level:e)||2,[n,s]=typeof t=="number"?[t,t]:t==="deep"?[2,6]:t;return _d(i,n,s)}function md(i,e){const{isAsideEnabled:t}=dd(),n=Zu(r,100);let s=null;Nt(()=>{requestAnimationFrame(r),window.addEventListener("scroll",n)}),Ru(()=>{a(location.hash)}),Ir(()=>{window.removeEventListener("scroll",n)});function r(){if(!t.value)return;const o=window.scrollY,l=window.innerHeight,c=document.body.offsetHeight,u=Math.abs(o+l-c)<1,h=Na.map(({element:p,link:g})=>({link:g,top:gd(p)})).filter(({top:p})=>!Number.isNaN(p)).sort((p,g)=>p.top-g.top);if(!h.length){a(null);return}if(o<1){a(null);return}if(u){a(h[h.length-1].link);return}let f=null;for(const{link:p,top:g}of h){if(g>o+Pu()+4)break;f=p}a(f)}function a(o){s&&s.classList.remove("active"),o==null?s=null:s=i.value.querySelector(`a[href="${decodeURIComponent(o)}"]`);const l=s;l?(l.classList.add("active"),e.value.style.top=l.offsetTop+39+"px",e.value.style.opacity="1"):(e.value.style.top="33px",e.value.style.opacity="0")}}function gd(i){let e=0;for(;i!==document.body;){if(i===null)return NaN;e+=i.offsetTop,i=i.offsetParent}return e}function _d(i,e,t){Na.length=0;const n=[],s=[];return i.forEach(r=>{const a={...r,children:[]};let o=s[s.length-1];for(;o&&o.level>=a.level;)s.pop(),o=s[s.length-1];if(a.element.classList.contains("ignore-header")||o&&"shouldIgnore"in o){s.push({level:a.level,shouldIgnore:!0});return}a.level>t||a.level<e||(Na.push({element:a.element,link:a.link}),o?o.children.push(a):n.push(a),s.push(a))}),n}const vd=["href","title"],xd=ue({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(i){function e({target:t}){const n=t.href.split("#")[1],s=document.getElementById(decodeURIComponent(n));s==null||s.focus({preventScroll:!0})}return(t,n)=>{const s=Qn("VPDocOutlineItem",!0);return C(),z("ul",{class:Qe(["VPDocOutlineItem",t.root?"root":"nested"])},[(C(!0),z(ut,null,Lt(t.headers,({children:r,link:a,title:o})=>(C(),z("li",null,[I("a",{class:"outline-link",href:a,onClick:e,title:o},Pe(o),9,vd),r!=null&&r.length?(C(),xe(s,{key:0,headers:r},null,8,["headers"])):ce("",!0)]))),256))],2)}}}),Ac=Re(xd,[["__scopeId","data-v-3f927ebe"]]),bd={class:"content"},yd={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Sd=ue({__name:"VPDocAsideOutline",setup(i){const{frontmatter:e,theme:t}=et(),n=pc([]);Ur(()=>{n.value=Uo(e.value.outline??t.value.outline)});const s=ye(),r=ye();return md(s,r),(a,o)=>(C(),z("nav",{"aria-labelledby":"doc-outline-aria-label",class:Qe(["VPDocAsideOutline",{"has-outline":n.value.length>0}]),ref_key:"container",ref:s},[I("div",bd,[I("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),I("div",yd,Pe(T(Ec)(T(t))),1),le(Ac,{headers:n.value,root:!0},null,8,["headers"])])],2))}}),Md=Re(Sd,[["__scopeId","data-v-b38bf2ff"]]),Ed={class:"VPDocAsideCarbonAds"},Ad=ue({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(i){const e=()=>null;return(t,n)=>(C(),z("div",Ed,[le(T(e),{"carbon-ads":t.carbonAds},null,8,["carbon-ads"])]))}}),Td={class:"VPDocAside"},wd=ue({__name:"VPDocAside",setup(i){const{theme:e}=et();return(t,n)=>(C(),z("div",Td,[X(t.$slots,"aside-top",{},void 0,!0),X(t.$slots,"aside-outline-before",{},void 0,!0),le(Md),X(t.$slots,"aside-outline-after",{},void 0,!0),n[0]||(n[0]=I("div",{class:"spacer"},null,-1)),X(t.$slots,"aside-ads-before",{},void 0,!0),T(e).carbonAds?(C(),xe(Ad,{key:0,"carbon-ads":T(e).carbonAds},null,8,["carbon-ads"])):ce("",!0),X(t.$slots,"aside-ads-after",{},void 0,!0),X(t.$slots,"aside-bottom",{},void 0,!0)]))}}),Cd=Re(wd,[["__scopeId","data-v-6d7b3c46"]]);function Rd(){const{theme:i,page:e}=et();return Me(()=>{const{text:t="Edit this page",pattern:n=""}=i.value.editLink||{};let s;return typeof n=="function"?s=n(e.value):s=n.replace(/:path/g,e.value.filePath),{url:s,text:t}})}function Pd(){const{page:i,theme:e,frontmatter:t}=et();return Me(()=>{var c,u,h,f,p,g,_,m;const n=Mc(e.value.sidebar,i.value.relativePath),s=ld(n),r=Ld(s,d=>d.link.replace(/[?#].*$/,"")),a=r.findIndex(d=>_i(i.value.relativePath,d.link)),o=((c=e.value.docFooter)==null?void 0:c.prev)===!1&&!t.value.prev||t.value.prev===!1,l=((u=e.value.docFooter)==null?void 0:u.next)===!1&&!t.value.next||t.value.next===!1;return{prev:o?void 0:{text:(typeof t.value.prev=="string"?t.value.prev:typeof t.value.prev=="object"?t.value.prev.text:void 0)??((h=r[a-1])==null?void 0:h.docFooterText)??((f=r[a-1])==null?void 0:f.text),link:(typeof t.value.prev=="object"?t.value.prev.link:void 0)??((p=r[a-1])==null?void 0:p.link)},next:l?void 0:{text:(typeof t.value.next=="string"?t.value.next:typeof t.value.next=="object"?t.value.next.text:void 0)??((g=r[a+1])==null?void 0:g.docFooterText)??((_=r[a+1])==null?void 0:_.text),link:(typeof t.value.next=="object"?t.value.next.link:void 0)??((m=r[a+1])==null?void 0:m.link)}}})}function Ld(i,e){const t=new Set;return i.filter(n=>{const s=e(n);return t.has(s)?!1:t.add(s)})}const vn=ue({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(i){const e=i,t=Me(()=>e.tag??(e.href?"a":"span")),n=Me(()=>e.href&&mc.test(e.href)||e.target==="_blank");return(s,r)=>(C(),xe(_n(t.value),{class:Qe(["VPLink",{link:s.href,"vp-external-link-icon":n.value,"no-icon":s.noIcon}]),href:s.href?T(Io)(s.href):void 0,target:s.target??(n.value?"_blank":void 0),rel:s.rel??(n.value?"noreferrer":void 0)},{default:Y(()=>[X(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Dd={class:"VPLastUpdated"},Id=["datetime"],Ud=ue({__name:"VPDocFooterLastUpdated",setup(i){const{theme:e,page:t,lang:n}=et(),s=Me(()=>new Date(t.value.lastUpdated)),r=Me(()=>s.value.toISOString()),a=ye("");return Nt(()=>{Dr(()=>{var o,l,c;a.value=new Intl.DateTimeFormat((l=(o=e.value.lastUpdated)==null?void 0:o.formatOptions)!=null&&l.forceLocale?n.value:void 0,((c=e.value.lastUpdated)==null?void 0:c.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(o,l)=>{var c;return C(),z("p",Dd,[Un(Pe(((c=T(e).lastUpdated)==null?void 0:c.text)||T(e).lastUpdatedText||"Last updated")+": ",1),I("time",{datetime:r.value},Pe(a.value),9,Id)])}}}),Nd=Re(Ud,[["__scopeId","data-v-475f71b8"]]),Fd={key:0,class:"VPDocFooter"},Od={key:0,class:"edit-info"},kd={key:0,class:"edit-link"},Bd={key:1,class:"last-updated"},Vd={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},zd={class:"pager"},Hd=["innerHTML"],Gd=["innerHTML"],Wd={class:"pager"},$d=["innerHTML"],Xd=["innerHTML"],Yd=ue({__name:"VPDocFooter",setup(i){const{theme:e,page:t,frontmatter:n}=et(),s=Rd(),r=Pd(),a=Me(()=>e.value.editLink&&n.value.editLink!==!1),o=Me(()=>t.value.lastUpdated),l=Me(()=>a.value||o.value||r.value.prev||r.value.next);return(c,u)=>{var h,f,p,g;return l.value?(C(),z("footer",Fd,[X(c.$slots,"doc-footer-before",{},void 0,!0),a.value||o.value?(C(),z("div",Od,[a.value?(C(),z("div",kd,[le(vn,{class:"edit-link-button",href:T(s).url,"no-icon":!0},{default:Y(()=>[u[0]||(u[0]=I("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),Un(" "+Pe(T(s).text),1)]),_:1},8,["href"])])):ce("",!0),o.value?(C(),z("div",Bd,[le(Nd)])):ce("",!0)])):ce("",!0),(h=T(r).prev)!=null&&h.link||(f=T(r).next)!=null&&f.link?(C(),z("nav",Vd,[u[1]||(u[1]=I("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),I("div",zd,[(p=T(r).prev)!=null&&p.link?(C(),xe(vn,{key:0,class:"pager-link prev",href:T(r).prev.link},{default:Y(()=>{var _;return[I("span",{class:"desc",innerHTML:((_=T(e).docFooter)==null?void 0:_.prev)||"Previous page"},null,8,Hd),I("span",{class:"title",innerHTML:T(r).prev.text},null,8,Gd)]}),_:1},8,["href"])):ce("",!0)]),I("div",Wd,[(g=T(r).next)!=null&&g.link?(C(),xe(vn,{key:0,class:"pager-link next",href:T(r).next.link},{default:Y(()=>{var _;return[I("span",{class:"desc",innerHTML:((_=T(e).docFooter)==null?void 0:_.next)||"Next page"},null,8,$d),I("span",{class:"title",innerHTML:T(r).next.text},null,8,Xd)]}),_:1},8,["href"])):ce("",!0)])])):ce("",!0)])):ce("",!0)}}}),qd=Re(Yd,[["__scopeId","data-v-4f9813fa"]]),jd={class:"container"},Kd={class:"aside-container"},Zd={class:"aside-content"},Jd={class:"content"},Qd={class:"content-container"},eh={class:"main"},th=ue({__name:"VPDoc",setup(i){const{theme:e}=et(),t=us(),{hasSidebar:n,hasAside:s,leftAside:r}=On(),a=Me(()=>t.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(o,l)=>{const c=Qn("Content");return C(),z("div",{class:Qe(["VPDoc",{"has-sidebar":T(n),"has-aside":T(s)}])},[X(o.$slots,"doc-top",{},void 0,!0),I("div",jd,[T(s)?(C(),z("div",{key:0,class:Qe(["aside",{"left-aside":T(r)}])},[l[0]||(l[0]=I("div",{class:"aside-curtain"},null,-1)),I("div",Kd,[I("div",Zd,[le(Cd,null,{"aside-top":Y(()=>[X(o.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":Y(()=>[X(o.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":Y(()=>[X(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":Y(()=>[X(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":Y(()=>[X(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":Y(()=>[X(o.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):ce("",!0),I("div",Jd,[I("div",Qd,[X(o.$slots,"doc-before",{},void 0,!0),I("main",eh,[le(c,{class:Qe(["vp-doc",[a.value,T(e).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),le(qd,null,{"doc-footer-before":Y(()=>[X(o.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),X(o.$slots,"doc-after",{},void 0,!0)])])]),X(o.$slots,"doc-bottom",{},void 0,!0)],2)}}}),nh=Re(th,[["__scopeId","data-v-83890dd9"]]),ih=ue({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(i){const e=i,t=Me(()=>e.href&&mc.test(e.href)),n=Me(()=>e.tag||(e.href?"a":"button"));return(s,r)=>(C(),xe(_n(n.value),{class:Qe(["VPButton",[s.size,s.theme]]),href:s.href?T(Io)(s.href):void 0,target:e.target??(t.value?"_blank":void 0),rel:e.rel??(t.value?"noreferrer":void 0)},{default:Y(()=>[Un(Pe(s.text),1)]),_:1},8,["class","href","target","rel"]))}}),sh=Re(ih,[["__scopeId","data-v-906d7fb4"]]),rh=["src","alt"],ah=ue({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(i){return(e,t)=>{const n=Qn("VPImage",!0);return e.image?(C(),z(ut,{key:0},[typeof e.image=="string"||"src"in e.image?(C(),z("img",Yn({key:0,class:"VPImage"},typeof e.image=="string"?e.$attrs:{...e.image,...e.$attrs},{src:T(wo)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,rh)):(C(),z(ut,{key:1},[le(n,Yn({class:"dark",image:e.image.dark,alt:e.image.alt},e.$attrs),null,16,["image","alt"]),le(n,Yn({class:"light",image:e.image.light,alt:e.image.alt},e.$attrs),null,16,["image","alt"])],64))],64)):ce("",!0)}}}),Er=Re(ah,[["__scopeId","data-v-35a7d0b8"]]),oh={class:"container"},lh={class:"main"},ch={class:"heading"},uh=["innerHTML"],dh=["innerHTML"],hh=["innerHTML"],fh={key:0,class:"actions"},ph={key:0,class:"image"},mh={class:"image-container"},gh=ue({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(i){const e=Qt("hero-image-slot-exists");return(t,n)=>(C(),z("div",{class:Qe(["VPHero",{"has-image":t.image||T(e)}])},[I("div",oh,[I("div",lh,[X(t.$slots,"home-hero-info-before",{},void 0,!0),X(t.$slots,"home-hero-info",{},()=>[I("h1",ch,[t.name?(C(),z("span",{key:0,innerHTML:t.name,class:"name clip"},null,8,uh)):ce("",!0),t.text?(C(),z("span",{key:1,innerHTML:t.text,class:"text"},null,8,dh)):ce("",!0)]),t.tagline?(C(),z("p",{key:0,innerHTML:t.tagline,class:"tagline"},null,8,hh)):ce("",!0)],!0),X(t.$slots,"home-hero-info-after",{},void 0,!0),t.actions?(C(),z("div",fh,[(C(!0),z(ut,null,Lt(t.actions,s=>(C(),z("div",{key:s.link,class:"action"},[le(sh,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):ce("",!0),X(t.$slots,"home-hero-actions-after",{},void 0,!0)]),t.image||T(e)?(C(),z("div",ph,[I("div",mh,[n[0]||(n[0]=I("div",{class:"image-bg"},null,-1)),X(t.$slots,"home-hero-image",{},()=>[t.image?(C(),xe(Er,{key:0,class:"image-src",image:t.image},null,8,["image"])):ce("",!0)],!0)])])):ce("",!0)])],2))}}),_h=Re(gh,[["__scopeId","data-v-3d256e5e"]]),vh=ue({__name:"VPHomeHero",setup(i){const{frontmatter:e}=et();return(t,n)=>T(e).hero?(C(),xe(_h,{key:0,class:"VPHomeHero",name:T(e).hero.name,text:T(e).hero.text,tagline:T(e).hero.tagline,image:T(e).hero.image,actions:T(e).hero.actions},{"home-hero-info-before":Y(()=>[X(t.$slots,"home-hero-info-before")]),"home-hero-info":Y(()=>[X(t.$slots,"home-hero-info")]),"home-hero-info-after":Y(()=>[X(t.$slots,"home-hero-info-after")]),"home-hero-actions-after":Y(()=>[X(t.$slots,"home-hero-actions-after")]),"home-hero-image":Y(()=>[X(t.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):ce("",!0)}}),xh={class:"box"},bh={key:0,class:"icon"},yh=["innerHTML"],Sh=["innerHTML"],Mh=["innerHTML"],Eh={key:4,class:"link-text"},Ah={class:"link-text-value"},Th=ue({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(i){return(e,t)=>(C(),xe(vn,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:Y(()=>[I("article",xh,[typeof e.icon=="object"&&e.icon.wrap?(C(),z("div",bh,[le(Er,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(C(),xe(Er,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(C(),z("div",{key:2,class:"icon",innerHTML:e.icon},null,8,yh)):ce("",!0),I("h2",{class:"title",innerHTML:e.title},null,8,Sh),e.details?(C(),z("p",{key:3,class:"details",innerHTML:e.details},null,8,Mh)):ce("",!0),e.linkText?(C(),z("div",Eh,[I("p",Ah,[Un(Pe(e.linkText)+" ",1),t[0]||(t[0]=I("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):ce("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),wh=Re(Th,[["__scopeId","data-v-f5e9645b"]]),Ch={key:0,class:"VPFeatures"},Rh={class:"container"},Ph={class:"items"},Lh=ue({__name:"VPFeatures",props:{features:{}},setup(i){const e=i,t=Me(()=>{const n=e.features.length;if(n){if(n===2)return"grid-2";if(n===3)return"grid-3";if(n%3===0)return"grid-6";if(n>3)return"grid-4"}else return});return(n,s)=>n.features?(C(),z("div",Ch,[I("div",Rh,[I("div",Ph,[(C(!0),z(ut,null,Lt(n.features,r=>(C(),z("div",{key:r.title,class:Qe(["item",[t.value]])},[le(wh,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):ce("",!0)}}),Dh=Re(Lh,[["__scopeId","data-v-d0a190d7"]]),Ih=ue({__name:"VPHomeFeatures",setup(i){const{frontmatter:e}=et();return(t,n)=>T(e).features?(C(),xe(Dh,{key:0,class:"VPHomeFeatures",features:T(e).features},null,8,["features"])):ce("",!0)}}),Uh=ue({__name:"VPHomeContent",setup(i){const{width:e}=Lu({initialWidth:0,includeScrollbar:!1});return(t,n)=>(C(),z("div",{class:"vp-doc container",style:Qi(T(e)?{"--vp-offset":`calc(50% - ${T(e)/2}px)`}:{})},[X(t.$slots,"default",{},void 0,!0)],4))}}),Nh=Re(Uh,[["__scopeId","data-v-7a48a447"]]),Fh=ue({__name:"VPHome",setup(i){const{frontmatter:e,theme:t}=et();return(n,s)=>{const r=Qn("Content");return C(),z("div",{class:Qe(["VPHome",{"external-link-icon-enabled":T(t).externalLinkIcon}])},[X(n.$slots,"home-hero-before",{},void 0,!0),le(vh,null,{"home-hero-info-before":Y(()=>[X(n.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":Y(()=>[X(n.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":Y(()=>[X(n.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":Y(()=>[X(n.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":Y(()=>[X(n.$slots,"home-hero-image",{},void 0,!0)]),_:3}),X(n.$slots,"home-hero-after",{},void 0,!0),X(n.$slots,"home-features-before",{},void 0,!0),le(Ih),X(n.$slots,"home-features-after",{},void 0,!0),T(e).markdownStyles!==!1?(C(),xe(Nh,{key:0},{default:Y(()=>[le(r)]),_:1})):(C(),xe(r,{key:1}))],2)}}}),Oh=Re(Fh,[["__scopeId","data-v-e40e30de"]]),kh={},Bh={class:"VPPage"};function Vh(i,e){const t=Qn("Content");return C(),z("div",Bh,[X(i.$slots,"page-top"),le(t),X(i.$slots,"page-bottom")])}const zh=Re(kh,[["render",Vh]]),Hh=ue({__name:"VPContent",setup(i){const{page:e,frontmatter:t}=et(),{hasSidebar:n}=On();return(s,r)=>(C(),z("div",{class:Qe(["VPContent",{"has-sidebar":T(n),"is-home":T(t).layout==="home"}]),id:"VPContent"},[T(e).isNotFound?X(s.$slots,"not-found",{key:0},()=>[le(ad)],!0):T(t).layout==="page"?(C(),xe(zh,{key:1},{"page-top":Y(()=>[X(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":Y(()=>[X(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):T(t).layout==="home"?(C(),xe(Oh,{key:2},{"home-hero-before":Y(()=>[X(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":Y(()=>[X(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":Y(()=>[X(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":Y(()=>[X(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":Y(()=>[X(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":Y(()=>[X(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":Y(()=>[X(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":Y(()=>[X(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":Y(()=>[X(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):T(t).layout&&T(t).layout!=="doc"?(C(),xe(_n(T(t).layout),{key:3})):(C(),xe(nh,{key:4},{"doc-top":Y(()=>[X(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":Y(()=>[X(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":Y(()=>[X(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":Y(()=>[X(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":Y(()=>[X(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":Y(()=>[X(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":Y(()=>[X(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":Y(()=>[X(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":Y(()=>[X(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":Y(()=>[X(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":Y(()=>[X(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Gh=Re(Hh,[["__scopeId","data-v-91765379"]]),Wh={class:"container"},$h=["innerHTML"],Xh=["innerHTML"],Yh=ue({__name:"VPFooter",setup(i){const{theme:e,frontmatter:t}=et(),{hasSidebar:n}=On();return(s,r)=>T(e).footer&&T(t).footer!==!1?(C(),z("footer",{key:0,class:Qe(["VPFooter",{"has-sidebar":T(n)}])},[I("div",Wh,[T(e).footer.message?(C(),z("p",{key:0,class:"message",innerHTML:T(e).footer.message},null,8,$h)):ce("",!0),T(e).footer.copyright?(C(),z("p",{key:1,class:"copyright",innerHTML:T(e).footer.copyright},null,8,Xh)):ce("",!0)])],2)):ce("",!0)}}),qh=Re(Yh,[["__scopeId","data-v-c970a860"]]);function jh(){const{theme:i,frontmatter:e}=et(),t=pc([]),n=Me(()=>t.value.length>0);return Ur(()=>{t.value=Uo(e.value.outline??i.value.outline)}),{headers:t,hasLocalNav:n}}const Kh={class:"menu-text"},Zh={class:"header"},Jh={class:"outline"},Qh=ue({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(i){const e=i,{theme:t}=et(),n=ye(!1),s=ye(0),r=ye(),a=ye();function o(h){var f;(f=r.value)!=null&&f.contains(h.target)||(n.value=!1)}it(n,h=>{if(h){document.addEventListener("click",o);return}document.removeEventListener("click",o)}),La("Escape",()=>{n.value=!1}),Ur(()=>{n.value=!1});function l(){n.value=!n.value,s.value=window.innerHeight+Math.min(window.scrollY-e.navHeight,0)}function c(h){h.target.classList.contains("outline-link")&&(a.value&&(a.value.style.transition="none"),Nr(()=>{n.value=!1}))}function u(){n.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(h,f)=>(C(),z("div",{class:"VPLocalNavOutlineDropdown",style:Qi({"--vp-vh":s.value+"px"}),ref_key:"main",ref:r},[h.headers.length>0?(C(),z("button",{key:0,onClick:l,class:Qe({open:n.value})},[I("span",Kh,Pe(T(Ec)(T(t))),1),f[0]||(f[0]=I("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(C(),z("button",{key:1,onClick:u},Pe(T(t).returnToTopLabel||"Return to top"),1)),le(yi,{name:"flyout"},{default:Y(()=>[n.value?(C(),z("div",{key:0,ref_key:"items",ref:a,class:"items",onClick:c},[I("div",Zh,[I("a",{class:"top-link",href:"#",onClick:u},Pe(T(t).returnToTopLabel||"Return to top"),1)]),I("div",Jh,[le(Ac,{headers:h.headers},null,8,["headers"])])],512)):ce("",!0)]),_:1})],4))}}),ef=Re(Qh,[["__scopeId","data-v-168ddf5d"]]),tf={class:"container"},nf=["aria-expanded"],sf={class:"menu-text"},rf=ue({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(i){const{theme:e,frontmatter:t}=et(),{hasSidebar:n}=On(),{headers:s}=jh(),{y:r}=gc(),a=ye(0);Nt(()=>{a.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Ur(()=>{s.value=Uo(t.value.outline??e.value.outline)});const o=Me(()=>s.value.length===0),l=Me(()=>o.value&&!n.value),c=Me(()=>({VPLocalNav:!0,"has-sidebar":n.value,empty:o.value,fixed:l.value}));return(u,h)=>T(t).layout!=="home"&&(!l.value||T(r)>=a.value)?(C(),z("div",{key:0,class:Qe(c.value)},[I("div",tf,[T(n)?(C(),z("button",{key:0,class:"menu","aria-expanded":u.open,"aria-controls":"VPSidebarNav",onClick:h[0]||(h[0]=f=>u.$emit("open-menu"))},[h[1]||(h[1]=I("span",{class:"vpi-align-left menu-icon"},null,-1)),I("span",sf,Pe(T(e).sidebarMenuLabel||"Menu"),1)],8,nf)):ce("",!0),le(ef,{headers:T(s),navHeight:a.value},null,8,["headers","navHeight"])])],2)):ce("",!0)}}),af=Re(rf,[["__scopeId","data-v-070ab83d"]]);function of(){const i=ye(!1);function e(){i.value=!0,window.addEventListener("resize",s)}function t(){i.value=!1,window.removeEventListener("resize",s)}function n(){i.value?t():e()}function s(){window.outerWidth>=768&&t()}const r=us();return it(()=>r.path,t),{isScreenOpen:i,openScreen:e,closeScreen:t,toggleScreen:n}}const lf={},cf={class:"VPSwitch",type:"button",role:"switch"},uf={class:"check"},df={key:0,class:"icon"};function hf(i,e){return C(),z("button",cf,[I("span",uf,[i.$slots.default?(C(),z("span",df,[X(i.$slots,"default",{},void 0,!0)])):ce("",!0)])])}const ff=Re(lf,[["render",hf],["__scopeId","data-v-4a1c76db"]]),pf=ue({__name:"VPSwitchAppearance",setup(i){const{isDark:e,theme:t}=et(),n=Qt("toggle-appearance",()=>{e.value=!e.value}),s=ye("");return Co(()=>{s.value=e.value?t.value.lightModeSwitchTitle||"Switch to light theme":t.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,a)=>(C(),xe(ff,{title:s.value,class:"VPSwitchAppearance","aria-checked":T(e),onClick:T(n)},{default:Y(()=>a[0]||(a[0]=[I("span",{class:"vpi-sun sun"},null,-1),I("span",{class:"vpi-moon moon"},null,-1)])),_:1},8,["title","aria-checked","onClick"]))}}),No=Re(pf,[["__scopeId","data-v-e40a8bb6"]]),mf={key:0,class:"VPNavBarAppearance"},gf=ue({__name:"VPNavBarAppearance",setup(i){const{site:e}=et();return(t,n)=>T(e).appearance&&T(e).appearance!=="force-dark"&&T(e).appearance!=="force-auto"?(C(),z("div",mf,[le(No)])):ce("",!0)}}),_f=Re(gf,[["__scopeId","data-v-af096f4a"]]),Fo=ye();let Tc=!1,Yr=0;function vf(i){const e=ye(!1);if(Fr){!Tc&&xf(),Yr++;const t=it(Fo,n=>{var s,r,a;n===i.el.value||(s=i.el.value)!=null&&s.contains(n)?(e.value=!0,(r=i.onFocus)==null||r.call(i)):(e.value=!1,(a=i.onBlur)==null||a.call(i))});Ir(()=>{t(),Yr--,Yr||bf()})}return Du(e)}function xf(){document.addEventListener("focusin",wc),Tc=!0,Fo.value=document.activeElement}function bf(){document.removeEventListener("focusin",wc)}function wc(){Fo.value=document.activeElement}const yf={class:"VPMenuLink"},Sf=["innerHTML"],Mf=ue({__name:"VPMenuLink",props:{item:{}},setup(i){const{page:e}=et();return(t,n)=>(C(),z("div",yf,[le(vn,{class:Qe({active:T(_i)(T(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon},{default:Y(()=>[I("span",{innerHTML:t.item.text},null,8,Sf)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),kr=Re(Mf,[["__scopeId","data-v-acbfed09"]]),Ef={class:"VPMenuGroup"},Af={key:0,class:"title"},Tf=ue({__name:"VPMenuGroup",props:{text:{},items:{}},setup(i){return(e,t)=>(C(),z("div",Ef,[e.text?(C(),z("p",Af,Pe(e.text),1)):ce("",!0),(C(!0),z(ut,null,Lt(e.items,n=>(C(),z(ut,null,["link"in n?(C(),xe(kr,{key:0,item:n},null,8,["item"])):ce("",!0)],64))),256))]))}}),wf=Re(Tf,[["__scopeId","data-v-48c802d0"]]),Cf={class:"VPMenu"},Rf={key:0,class:"items"},Pf=ue({__name:"VPMenu",props:{items:{}},setup(i){return(e,t)=>(C(),z("div",Cf,[e.items?(C(),z("div",Rf,[(C(!0),z(ut,null,Lt(e.items,n=>(C(),z(ut,{key:JSON.stringify(n)},["link"in n?(C(),xe(kr,{key:0,item:n},null,8,["item"])):"component"in n?(C(),xe(_n(n.component),Yn({key:1,ref_for:!0},n.props),null,16)):(C(),xe(wf,{key:2,text:n.text,items:n.items},null,8,["text","items"]))],64))),128))])):ce("",!0),X(e.$slots,"default",{},void 0,!0)]))}}),Lf=Re(Pf,[["__scopeId","data-v-7dd3104a"]]),Df=["aria-expanded","aria-label"],If={key:0,class:"text"},Uf=["innerHTML"],Nf={key:1,class:"vpi-more-horizontal icon"},Ff={class:"menu"},Of=ue({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(i){const e=ye(!1),t=ye();vf({el:t,onBlur:n});function n(){e.value=!1}return(s,r)=>(C(),z("div",{class:"VPFlyout",ref_key:"el",ref:t,onMouseenter:r[1]||(r[1]=a=>e.value=!0),onMouseleave:r[2]||(r[2]=a=>e.value=!1)},[I("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":e.value,"aria-label":s.label,onClick:r[0]||(r[0]=a=>e.value=!e.value)},[s.button||s.icon?(C(),z("span",If,[s.icon?(C(),z("span",{key:0,class:Qe([s.icon,"option-icon"])},null,2)):ce("",!0),s.button?(C(),z("span",{key:1,innerHTML:s.button},null,8,Uf)):ce("",!0),r[3]||(r[3]=I("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(C(),z("span",Nf))],8,Df),I("div",Ff,[le(Lf,{items:s.items},{default:Y(()=>[X(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Br=Re(Of,[["__scopeId","data-v-04f5c5e9"]]),kf=["href","aria-label","innerHTML"],Bf=ue({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(i){const e=i,t=ye();Nt(async()=>{var r;await Nr();const s=(r=t.value)==null?void 0:r.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)});const n=Me(()=>typeof e.icon=="object"?e.icon.svg:`<span class="vpi-social-${e.icon}"></span>`);return(s,r)=>(C(),z("a",{ref_key:"el",ref:t,class:"VPSocialLink no-icon",href:s.link,"aria-label":s.ariaLabel??(typeof s.icon=="string"?s.icon:""),target:"_blank",rel:"noopener",innerHTML:n.value},null,8,kf))}}),Vf=Re(Bf,[["__scopeId","data-v-d26d30cb"]]),zf={class:"VPSocialLinks"},Hf=ue({__name:"VPSocialLinks",props:{links:{}},setup(i){return(e,t)=>(C(),z("div",zf,[(C(!0),z(ut,null,Lt(e.links,({link:n,icon:s,ariaLabel:r})=>(C(),xe(Vf,{key:n,icon:s,link:n,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),Oo=Re(Hf,[["__scopeId","data-v-ee7a9424"]]),Gf={key:0,class:"group translations"},Wf={class:"trans-title"},$f={key:1,class:"group"},Xf={class:"item appearance"},Yf={class:"label"},qf={class:"appearance-action"},jf={key:2,class:"group"},Kf={class:"item social-links"},Zf=ue({__name:"VPNavBarExtra",setup(i){const{site:e,theme:t}=et(),{localeLinks:n,currentLang:s}=Rs({correspondingLink:!0}),r=Me(()=>n.value.length&&s.value.label||e.value.appearance||t.value.socialLinks);return(a,o)=>r.value?(C(),xe(Br,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:Y(()=>[T(n).length&&T(s).label?(C(),z("div",Gf,[I("p",Wf,Pe(T(s).label),1),(C(!0),z(ut,null,Lt(T(n),l=>(C(),xe(kr,{key:l.link,item:l},null,8,["item"]))),128))])):ce("",!0),T(e).appearance&&T(e).appearance!=="force-dark"&&T(e).appearance!=="force-auto"?(C(),z("div",$f,[I("div",Xf,[I("p",Yf,Pe(T(t).darkModeSwitchLabel||"Appearance"),1),I("div",qf,[le(No)])])])):ce("",!0),T(t).socialLinks?(C(),z("div",jf,[I("div",Kf,[le(Oo,{class:"social-links-list",links:T(t).socialLinks},null,8,["links"])])])):ce("",!0)]),_:1})):ce("",!0)}}),Jf=Re(Zf,[["__scopeId","data-v-925effce"]]),Qf=["aria-expanded"],ep=ue({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(i){return(e,t)=>(C(),z("button",{type:"button",class:Qe(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:t[0]||(t[0]=n=>e.$emit("click"))},t[1]||(t[1]=[I("span",{class:"container"},[I("span",{class:"top"}),I("span",{class:"middle"}),I("span",{class:"bottom"})],-1)]),10,Qf))}}),tp=Re(ep,[["__scopeId","data-v-5dea55bf"]]),np=["innerHTML"],ip=ue({__name:"VPNavBarMenuLink",props:{item:{}},setup(i){const{page:e}=et();return(t,n)=>(C(),xe(vn,{class:Qe({VPNavBarMenuLink:!0,active:T(_i)(T(e).relativePath,t.item.activeMatch||t.item.link,!!t.item.activeMatch)}),href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,tabindex:"0"},{default:Y(()=>[I("span",{innerHTML:t.item.text},null,8,np)]),_:1},8,["class","href","target","rel","no-icon"]))}}),sp=Re(ip,[["__scopeId","data-v-956ec74c"]]),Cc=ue({__name:"VPNavBarMenuGroup",props:{item:{}},setup(i){const e=i,{page:t}=et(),n=r=>"component"in r?!1:"link"in r?_i(t.value.relativePath,r.link,!!e.item.activeMatch):r.items.some(n),s=Me(()=>n(e.item));return(r,a)=>(C(),xe(Br,{class:Qe({VPNavBarMenuGroup:!0,active:T(_i)(T(t).relativePath,r.item.activeMatch,!!r.item.activeMatch)||s.value}),button:r.item.text,items:r.item.items},null,8,["class","button","items"]))}}),rp={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ap=ue({__name:"VPNavBarMenu",setup(i){const{theme:e}=et();return(t,n)=>T(e).nav?(C(),z("nav",rp,[n[0]||(n[0]=I("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(C(!0),z(ut,null,Lt(T(e).nav,s=>(C(),z(ut,{key:JSON.stringify(s)},["link"in s?(C(),xe(sp,{key:0,item:s},null,8,["item"])):"component"in s?(C(),xe(_n(s.component),Yn({key:1,ref_for:!0},s.props),null,16)):(C(),xe(Cc,{key:2,item:s},null,8,["item"]))],64))),128))])):ce("",!0)}}),op=Re(ap,[["__scopeId","data-v-e6d46098"]]);function lp(i){const{localeIndex:e,theme:t}=et();function n(s){var g,_,m;const r=s.split("."),a=(g=t.value.search)==null?void 0:g.options,o=a&&typeof a=="object",l=o&&((m=(_=a.locales)==null?void 0:_[e.value])==null?void 0:m.translations)||null,c=o&&a.translations||null;let u=l,h=c,f=i;const p=r.pop();for(const d of r){let M=null;const b=f==null?void 0:f[d];b&&(M=f=b);const S=h==null?void 0:h[d];S&&(M=h=S);const P=u==null?void 0:u[d];P&&(M=u=P),b||(f=M),S||(h=M),P||(u=M)}return(u==null?void 0:u[p])??(h==null?void 0:h[p])??(f==null?void 0:f[p])??""}return n}const cp=["aria-label"],up={class:"DocSearch-Button-Container"},dp={class:"DocSearch-Button-Placeholder"},sl=ue({__name:"VPNavBarSearchButton",setup(i){const t=lp({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(n,s)=>(C(),z("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":T(t)("button.buttonAriaLabel")},[I("span",up,[s[0]||(s[0]=I("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),I("span",dp,Pe(T(t)("button.buttonText")),1)]),s[1]||(s[1]=I("span",{class:"DocSearch-Button-Keys"},[I("kbd",{class:"DocSearch-Button-Key"}),I("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,cp))}}),hp={class:"VPNavBarSearch"},fp={id:"local-search"},pp={key:1,id:"docsearch"},mp=ue({__name:"VPNavBarSearch",setup(i){const e=Iu(()=>Uu(()=>import("./VPLocalSearchBox.DPvvo-dx.js"),__vite__mapDeps([0,1]))),t=()=>null,{theme:n}=et(),s=ye(!1),r=ye(!1);Nt(()=>{});function a(){s.value||(s.value=!0,setTimeout(o,16))}function o(){const h=new Event("keydown");h.key="k",h.metaKey=!0,window.dispatchEvent(h),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||o()},16)}function l(h){const f=h.target,p=f.tagName;return f.isContentEditable||p==="INPUT"||p==="SELECT"||p==="TEXTAREA"}const c=ye(!1);La("k",h=>{(h.ctrlKey||h.metaKey)&&(h.preventDefault(),c.value=!0)}),La("/",h=>{l(h)||(h.preventDefault(),c.value=!0)});const u="local";return(h,f)=>{var p;return C(),z("div",hp,[T(u)==="local"?(C(),z(ut,{key:0},[c.value?(C(),xe(T(e),{key:0,onClose:f[0]||(f[0]=g=>c.value=!1)})):ce("",!0),I("div",fp,[le(sl,{onClick:f[1]||(f[1]=g=>c.value=!0)})])],64)):T(u)==="algolia"?(C(),z(ut,{key:1},[s.value?(C(),xe(T(t),{key:0,algolia:((p=T(n).search)==null?void 0:p.options)??T(n).algolia,onVnodeBeforeMount:f[2]||(f[2]=g=>r.value=!0)},null,8,["algolia"])):ce("",!0),r.value?ce("",!0):(C(),z("div",pp,[le(sl,{onClick:a})]))],64)):ce("",!0)])}}}),gp=ue({__name:"VPNavBarSocialLinks",setup(i){const{theme:e}=et();return(t,n)=>T(e).socialLinks?(C(),xe(Oo,{key:0,class:"VPNavBarSocialLinks",links:T(e).socialLinks},null,8,["links"])):ce("",!0)}}),_p=Re(gp,[["__scopeId","data-v-164c457f"]]),vp=["href","rel","target"],xp=["innerHTML"],bp={key:2},yp=ue({__name:"VPNavBarTitle",setup(i){const{site:e,theme:t}=et(),{hasSidebar:n}=On(),{currentLang:s}=Rs(),r=Me(()=>{var l;return typeof t.value.logoLink=="string"?t.value.logoLink:(l=t.value.logoLink)==null?void 0:l.link}),a=Me(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.rel}),o=Me(()=>{var l;return typeof t.value.logoLink=="string"||(l=t.value.logoLink)==null?void 0:l.target});return(l,c)=>(C(),z("div",{class:Qe(["VPNavBarTitle",{"has-sidebar":T(n)}])},[I("a",{class:"title",href:r.value??T(Io)(T(s).link),rel:a.value,target:o.value},[X(l.$slots,"nav-bar-title-before",{},void 0,!0),T(t).logo?(C(),xe(Er,{key:0,class:"logo",image:T(t).logo},null,8,["image"])):ce("",!0),T(t).siteTitle?(C(),z("span",{key:1,innerHTML:T(t).siteTitle},null,8,xp)):T(t).siteTitle===void 0?(C(),z("span",bp,Pe(T(e).title),1)):ce("",!0),X(l.$slots,"nav-bar-title-after",{},void 0,!0)],8,vp)],2))}}),Sp=Re(yp,[["__scopeId","data-v-0f4f798b"]]),Mp={class:"items"},Ep={class:"title"},Ap=ue({__name:"VPNavBarTranslations",setup(i){const{theme:e}=et(),{localeLinks:t,currentLang:n}=Rs({correspondingLink:!0});return(s,r)=>T(t).length&&T(n).label?(C(),xe(Br,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:T(e).langMenuLabel||"Change language"},{default:Y(()=>[I("div",Mp,[I("p",Ep,Pe(T(n).label),1),(C(!0),z(ut,null,Lt(T(t),a=>(C(),xe(kr,{key:a.link,item:a},null,8,["item"]))),128))])]),_:1},8,["label"])):ce("",!0)}}),Tp=Re(Ap,[["__scopeId","data-v-c80d9ad0"]]),wp={class:"wrapper"},Cp={class:"container"},Rp={class:"title"},Pp={class:"content"},Lp={class:"content-body"},Dp=ue({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(i){const e=i,{y:t}=gc(),{hasSidebar:n}=On(),{frontmatter:s}=et(),r=ye({});return Co(()=>{r.value={"has-sidebar":n.value,home:s.value.layout==="home",top:t.value===0,"screen-open":e.isScreenOpen}}),(a,o)=>(C(),z("div",{class:Qe(["VPNavBar",r.value])},[I("div",wp,[I("div",Cp,[I("div",Rp,[le(Sp,null,{"nav-bar-title-before":Y(()=>[X(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":Y(()=>[X(a.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),I("div",Pp,[I("div",Lp,[X(a.$slots,"nav-bar-content-before",{},void 0,!0),le(mp,{class:"search"}),le(op,{class:"menu"}),le(Tp,{class:"translations"}),le(_f,{class:"appearance"}),le(_p,{class:"social-links"}),le(Jf,{class:"extra"}),X(a.$slots,"nav-bar-content-after",{},void 0,!0),le(tp,{class:"hamburger",active:a.isScreenOpen,onClick:o[0]||(o[0]=l=>a.$emit("toggle-screen"))},null,8,["active"])])])])]),o[1]||(o[1]=I("div",{class:"divider"},[I("div",{class:"divider-line"})],-1))],2))}}),Ip=Re(Dp,[["__scopeId","data-v-822684d1"]]),Up={key:0,class:"VPNavScreenAppearance"},Np={class:"text"},Fp=ue({__name:"VPNavScreenAppearance",setup(i){const{site:e,theme:t}=et();return(n,s)=>T(e).appearance&&T(e).appearance!=="force-dark"&&T(e).appearance!=="force-auto"?(C(),z("div",Up,[I("p",Np,Pe(T(t).darkModeSwitchLabel||"Appearance"),1),le(No)])):ce("",!0)}}),Op=Re(Fp,[["__scopeId","data-v-ffb44008"]]),kp=["innerHTML"],Bp=ue({__name:"VPNavScreenMenuLink",props:{item:{}},setup(i){const e=Qt("close-screen");return(t,n)=>(C(),xe(vn,{class:"VPNavScreenMenuLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:T(e)},{default:Y(()=>[I("span",{innerHTML:t.item.text},null,8,kp)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Vp=Re(Bp,[["__scopeId","data-v-735512b8"]]),zp=["innerHTML"],Hp=ue({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(i){const e=Qt("close-screen");return(t,n)=>(C(),xe(vn,{class:"VPNavScreenMenuGroupLink",href:t.item.link,target:t.item.target,rel:t.item.rel,"no-icon":t.item.noIcon,onClick:T(e)},{default:Y(()=>[I("span",{innerHTML:t.item.text},null,8,zp)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Rc=Re(Hp,[["__scopeId","data-v-372ae7c0"]]),Gp={class:"VPNavScreenMenuGroupSection"},Wp={key:0,class:"title"},$p=ue({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(i){return(e,t)=>(C(),z("div",Gp,[e.text?(C(),z("p",Wp,Pe(e.text),1)):ce("",!0),(C(!0),z(ut,null,Lt(e.items,n=>(C(),xe(Rc,{key:n.text,item:n},null,8,["item"]))),128))]))}}),Xp=Re($p,[["__scopeId","data-v-4b8941ac"]]),Yp=["aria-controls","aria-expanded"],qp=["innerHTML"],jp=["id"],Kp={key:0,class:"item"},Zp={key:1,class:"item"},Jp={key:2,class:"group"},Qp=ue({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(i){const e=i,t=ye(!1),n=Me(()=>`NavScreenGroup-${e.text.replace(" ","-").toLowerCase()}`);function s(){t.value=!t.value}return(r,a)=>(C(),z("div",{class:Qe(["VPNavScreenMenuGroup",{open:t.value}])},[I("button",{class:"button","aria-controls":n.value,"aria-expanded":t.value,onClick:s},[I("span",{class:"button-text",innerHTML:r.text},null,8,qp),a[0]||(a[0]=I("span",{class:"vpi-plus button-icon"},null,-1))],8,Yp),I("div",{id:n.value,class:"items"},[(C(!0),z(ut,null,Lt(r.items,o=>(C(),z(ut,{key:JSON.stringify(o)},["link"in o?(C(),z("div",Kp,[le(Rc,{item:o},null,8,["item"])])):"component"in o?(C(),z("div",Zp,[(C(),xe(_n(o.component),Yn({ref_for:!0},o.props,{"screen-menu":""}),null,16))])):(C(),z("div",Jp,[le(Xp,{text:o.text,items:o.items},null,8,["text","items"])]))],64))),128))],8,jp)],2))}}),Pc=Re(Qp,[["__scopeId","data-v-875057a5"]]),em={key:0,class:"VPNavScreenMenu"},tm=ue({__name:"VPNavScreenMenu",setup(i){const{theme:e}=et();return(t,n)=>T(e).nav?(C(),z("nav",em,[(C(!0),z(ut,null,Lt(T(e).nav,s=>(C(),z(ut,{key:JSON.stringify(s)},["link"in s?(C(),xe(Vp,{key:0,item:s},null,8,["item"])):"component"in s?(C(),xe(_n(s.component),Yn({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(C(),xe(Pc,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):ce("",!0)}}),nm=ue({__name:"VPNavScreenSocialLinks",setup(i){const{theme:e}=et();return(t,n)=>T(e).socialLinks?(C(),xe(Oo,{key:0,class:"VPNavScreenSocialLinks",links:T(e).socialLinks},null,8,["links"])):ce("",!0)}}),im={class:"list"},sm=ue({__name:"VPNavScreenTranslations",setup(i){const{localeLinks:e,currentLang:t}=Rs({correspondingLink:!0}),n=ye(!1);function s(){n.value=!n.value}return(r,a)=>T(e).length&&T(t).label?(C(),z("div",{key:0,class:Qe(["VPNavScreenTranslations",{open:n.value}])},[I("button",{class:"title",onClick:s},[a[0]||(a[0]=I("span",{class:"vpi-languages icon lang"},null,-1)),Un(" "+Pe(T(t).label)+" ",1),a[1]||(a[1]=I("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),I("ul",im,[(C(!0),z(ut,null,Lt(T(e),o=>(C(),z("li",{key:o.link,class:"item"},[le(vn,{class:"link",href:o.link},{default:Y(()=>[Un(Pe(o.text),1)]),_:2},1032,["href"])]))),128))])],2)):ce("",!0)}}),rm=Re(sm,[["__scopeId","data-v-362991c2"]]),am={class:"container"},om=ue({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(i){const e=ye(null),t=_c(Fr?document.body:null);return(n,s)=>(C(),xe(yi,{name:"fade",onEnter:s[0]||(s[0]=r=>t.value=!0),onAfterLeave:s[1]||(s[1]=r=>t.value=!1)},{default:Y(()=>[n.open?(C(),z("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:e,id:"VPNavScreen"},[I("div",am,[X(n.$slots,"nav-screen-content-before",{},void 0,!0),le(tm,{class:"menu"}),le(rm,{class:"translations"}),le(Op,{class:"appearance"}),le(nm,{class:"social-links"}),X(n.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):ce("",!0)]),_:3}))}}),lm=Re(om,[["__scopeId","data-v-833aabba"]]),cm={key:0,class:"VPNav"},um=ue({__name:"VPNav",setup(i){const{isScreenOpen:e,closeScreen:t,toggleScreen:n}=of(),{frontmatter:s}=et(),r=Me(()=>s.value.navbar!==!1);return Ro("close-screen",t),Dr(()=>{Fr&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(a,o)=>r.value?(C(),z("header",cm,[le(Ip,{"is-screen-open":T(e),onToggleScreen:T(n)},{"nav-bar-title-before":Y(()=>[X(a.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":Y(()=>[X(a.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":Y(()=>[X(a.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":Y(()=>[X(a.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),le(lm,{open:T(e)},{"nav-screen-content-before":Y(()=>[X(a.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":Y(()=>[X(a.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):ce("",!0)}}),dm=Re(um,[["__scopeId","data-v-f1e365da"]]),hm=["role","tabindex"],fm={key:1,class:"items"},pm=ue({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(i){const e=i,{collapsed:t,collapsible:n,isLink:s,isActiveLink:r,hasActiveLink:a,hasChildren:o,toggle:l}=ud(Me(()=>e.item)),c=Me(()=>o.value?"section":"div"),u=Me(()=>s.value?"a":"div"),h=Me(()=>o.value?e.depth+2===7?"p":`h${e.depth+2}`:"p"),f=Me(()=>s.value?void 0:"button"),p=Me(()=>[[`level-${e.depth}`],{collapsible:n.value},{collapsed:t.value},{"is-link":s.value},{"is-active":r.value},{"has-active":a.value}]);function g(m){"key"in m&&m.key!=="Enter"||!e.item.link&&l()}function _(){e.item.link&&l()}return(m,d)=>{const M=Qn("VPSidebarItem",!0);return C(),xe(_n(c.value),{class:Qe(["VPSidebarItem",p.value])},{default:Y(()=>[m.item.text?(C(),z("div",Yn({key:0,class:"item",role:f.value},Nu(m.item.items?{click:g,keydown:g}:{},!0),{tabindex:m.item.items&&0}),[d[1]||(d[1]=I("div",{class:"indicator"},null,-1)),m.item.link?(C(),xe(vn,{key:0,tag:u.value,class:"link",href:m.item.link,rel:m.item.rel,target:m.item.target},{default:Y(()=>[(C(),xe(_n(h.value),{class:"text",innerHTML:m.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(C(),xe(_n(h.value),{key:1,class:"text",innerHTML:m.item.text},null,8,["innerHTML"])),m.item.collapsed!=null&&m.item.items&&m.item.items.length?(C(),z("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:_,onKeydown:Fu(_,["enter"]),tabindex:"0"},d[0]||(d[0]=[I("span",{class:"vpi-chevron-right caret-icon"},null,-1)]),32)):ce("",!0)],16,hm)):ce("",!0),m.item.items&&m.item.items.length?(C(),z("div",fm,[m.depth<5?(C(!0),z(ut,{key:0},Lt(m.item.items,b=>(C(),xe(M,{key:b.text,item:b,depth:m.depth+1},null,8,["item","depth"]))),128)):ce("",!0)])):ce("",!0)]),_:1},8,["class"])}}}),mm=Re(pm,[["__scopeId","data-v-a4b0d9bf"]]),gm=ue({__name:"VPSidebarGroup",props:{items:{}},setup(i){const e=ye(!0);let t=null;return Nt(()=>{t=setTimeout(()=>{t=null,e.value=!1},300)}),Ou(()=>{t!=null&&(clearTimeout(t),t=null)}),(n,s)=>(C(!0),z(ut,null,Lt(n.items,r=>(C(),z("div",{key:r.text,class:Qe(["group",{"no-transition":e.value}])},[le(mm,{item:r,depth:0},null,8,["item"])],2))),128))}}),_m=Re(gm,[["__scopeId","data-v-9e426adc"]]),vm={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},xm=ue({__name:"VPSidebar",props:{open:{type:Boolean}},setup(i){const{sidebarGroups:e,hasSidebar:t}=On(),n=i,s=ye(null),r=_c(Fr?document.body:null);it([n,s],()=>{var o;n.open?(r.value=!0,(o=s.value)==null||o.focus()):r.value=!1},{immediate:!0,flush:"post"});const a=ye(0);return it(e,()=>{a.value+=1},{deep:!0}),(o,l)=>T(t)?(C(),z("aside",{key:0,class:Qe(["VPSidebar",{open:o.open}]),ref_key:"navEl",ref:s,onClick:l[0]||(l[0]=ku(()=>{},["stop"]))},[l[2]||(l[2]=I("div",{class:"curtain"},null,-1)),I("nav",vm,[l[1]||(l[1]=I("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),X(o.$slots,"sidebar-nav-before",{},void 0,!0),(C(),xe(_m,{items:T(e),key:a.value},null,8,["items"])),X(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):ce("",!0)}}),bm=Re(xm,[["__scopeId","data-v-18756405"]]),ym=ue({__name:"VPSkipLink",setup(i){const{theme:e}=et(),t=us(),n=ye();it(()=>t.path,()=>n.value.focus());function s({target:r}){const a=document.getElementById(decodeURIComponent(r.hash).slice(1));if(a){const o=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",o)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",o),a.focus(),window.scrollTo(0,0)}}return(r,a)=>(C(),z(ut,null,[I("span",{ref_key:"backToTop",ref:n,tabindex:"-1"},null,512),I("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},Pe(T(e).skipToContentLabel||"Skip to content"),1)],64))}}),Sm=Re(ym,[["__scopeId","data-v-492508fc"]]),Mm=ue({__name:"Layout",setup(i){const{isOpen:e,open:t,close:n}=On(),s=us();it(()=>s.path,n),cd(e,n);const{frontmatter:r}=et(),a=vc(),o=Me(()=>!!a["home-hero-image"]);return Ro("hero-image-slot-exists",o),(l,c)=>{const u=Qn("Content");return T(r).layout!==!1?(C(),z("div",{key:0,class:Qe(["Layout",T(r).pageClass])},[X(l.$slots,"layout-top",{},void 0,!0),le(Sm),le(Ku,{class:"backdrop",show:T(e),onClick:T(n)},null,8,["show","onClick"]),le(dm,null,{"nav-bar-title-before":Y(()=>[X(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":Y(()=>[X(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":Y(()=>[X(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":Y(()=>[X(l.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":Y(()=>[X(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":Y(()=>[X(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),le(af,{open:T(e),onOpenMenu:T(t)},null,8,["open","onOpenMenu"]),le(bm,{open:T(e)},{"sidebar-nav-before":Y(()=>[X(l.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":Y(()=>[X(l.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),le(Gh,null,{"page-top":Y(()=>[X(l.$slots,"page-top",{},void 0,!0)]),"page-bottom":Y(()=>[X(l.$slots,"page-bottom",{},void 0,!0)]),"not-found":Y(()=>[X(l.$slots,"not-found",{},void 0,!0)]),"home-hero-before":Y(()=>[X(l.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":Y(()=>[X(l.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":Y(()=>[X(l.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":Y(()=>[X(l.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":Y(()=>[X(l.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":Y(()=>[X(l.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":Y(()=>[X(l.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":Y(()=>[X(l.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":Y(()=>[X(l.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":Y(()=>[X(l.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":Y(()=>[X(l.$slots,"doc-before",{},void 0,!0)]),"doc-after":Y(()=>[X(l.$slots,"doc-after",{},void 0,!0)]),"doc-top":Y(()=>[X(l.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":Y(()=>[X(l.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":Y(()=>[X(l.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":Y(()=>[X(l.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":Y(()=>[X(l.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":Y(()=>[X(l.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":Y(()=>[X(l.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":Y(()=>[X(l.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),le(qh),X(l.$slots,"layout-bottom",{},void 0,!0)],2)):(C(),xe(u,{key:1}))}}}),Em=Re(Mm,[["__scopeId","data-v-a9a9e638"]]),rl={Layout:Em,enhanceApp:({app:i})=>{i.component("Badge",Yu)}},Am=ue({__name:"NuInputHighlight",props:{active:{type:Boolean}},setup(i){return(e,t)=>(C(),z("div",{class:Qe(["input-highlight",{active:!!e.active}]),transition:"outline duration-200 ease"},[X(e.$slots,"default",{},void 0,!0)],2))}}),Ps=Re(Am,[["__scopeId","data-v-02726a5a"]]),Tm=["title","disabled"],wm=["value","name","checked","aria-checked","disabled"],Cm={"inline-flex":"~","items-center":"","align-middle":""},Rm=ue({__name:"Option",props:{name:{},value:{},icon:{},text:{},title:{},disabled:{type:Boolean},modelValue:{}},emits:["update:modelValue"],setup(i,{emit:e}){const t=i,n=e,s=Me({get:()=>t.modelValue,set:r=>n("update:modelValue",r)});return(r,a)=>(C(),z("label",{title:t.title,class:Qe(["nolebase-ui-input-horizontal-option",{active:s.value===t.value&&!t.disabled,disabled:t.disabled}]),disabled:t.disabled,text:"[14px]","w-full":"","inline-flex":"","cursor-pointer":"","select-none":"","items-center":"","justify-center":"","rounded-md":"","px-3":"","py-2":"","font-medium":""},[es(I("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o),type:"radio",value:t.value,name:t.name,checked:s.value===t.value,"aria-checked":s.value===t.value,disabled:t.disabled,role:"radio",hidden:""},null,8,wm),[[Bu,s.value]]),I("span",Cm,[t.icon?(C(),z("span",{key:0,class:Qe(t.icon),"aria-hidden":"true"},null,2)):ce("",!0),t.text?(C(),z("span",{key:1,class:Qe([t.icon?"ml-1":""])},Pe(t.text),3)):ce("",!0)])],10,Tm))}}),Pm={flex:"~ row",bg:"zinc-100 dark:zinc-900",text:"sm zinc-400 dark:zinc-500","w-full":"","appearance-none":"","rounded-lg":"","rounded-md":"","border-none":"","p-1":"","space-x-2":""},Ls=ue({__name:"index",props:{disabled:{type:Boolean},modelValue:{},options:{}},emits:["update:modelValue"],setup(i,{emit:e}){const t=i,n=e,s=Me({get:()=>t.modelValue,set:r=>n("update:modelValue",r)});return(r,a)=>(C(),z("fieldset",Pm,[(C(!0),z(ut,null,Lt(t.options,o=>(C(),xe(Rm,{key:o.name,modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l),name:o.name,icon:o.icon,title:o.title,text:o.text,"aria-label":o.ariaLabel,disabled:t.disabled,value:o.value},null,8,["modelValue","name","icon","title","text","aria-label","disabled","value"]))),128))]))}}),Lm={flex:"~ row",bg:"zinc-200/50 dark:zinc-800/50","w-full":"","appearance-none":"","rounded-lg":"","border-none":"","p-1":"","space-x-2":"",text:"sm zinc-300"},Dm={class:"nolebase-ui-slider nolebase-ui-slider",relative:"","w-full":"","select-none":""},Im=["name","min","max","disabled","step"],Um=ue({__name:"NuInputSlider",props:{name:{default:"Slider"},disabled:{type:Boolean},modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},formatter:{}},emits:["update:modelValue"],setup(i,{emit:e}){const t=i,n=e,s=ye(null),r=ye(null),a=ye(t.modelValue),o=ye(t.min),l=ye(t.max),c=xc(s),u=ye(!1);Nt(()=>{s.value&&(s.value.style.setProperty("--nolebase-ui-slider-value",a.value.toString()),s.value.style.setProperty("--nolebase-ui-slider-min",t.min?t.min.toString():"0"),s.value.style.setProperty("--nolebase-ui-slider-max",t.max?t.max.toString():"100"),s.value.addEventListener("input",()=>{s.value&&s.value.style.setProperty("--nolebase-ui-slider-value",s.value.value.toString())}))});function h(f,p){if(!f||!p)return;const g=t.max?t.max:100,_=t.min?t.min:0,m=(a.value-_)/(g-_),d=f.getBoundingClientRect(),b=(p.getBoundingClientRect().width-32)/2;p.style.setProperty("left",`${m*(d.width-32)-b}px`)}return it(a,f=>{f<o.value&&(f=o.value),f>l.value&&(f=l.value),n("update:modelValue",f)}),it(o,f=>{a.value>=f||(a.value=f)}),it(l,f=>{a.value<=f||(a.value=f)}),it(c,()=>{u.value=!0,setTimeout(()=>{if(!c.value){u.value=!1;return}if(!s.value){u.value=!1;return}if(!r.value){u.value=!1;return}h(s.value,r.value),u.value=!1},50)}),it(a,()=>{s.value&&r.value&&h(s.value,r.value)}),(f,p)=>(C(),z("div",Lm,[I("label",Dm,[es(I("input",{ref_key:"inputSliderRef",ref:s,"onUpdate:modelValue":p[0]||(p[0]=g=>a.value=g),type:"range",name:t.name,min:t.min,max:t.max,disabled:t.disabled,class:Qe([{disabled:t.disabled},"nolebase-ui-slider-input nolebase-ui-slider-input-progress-indicator"]),step:t.step,"w-full":""},null,10,Im),[[Vu,a.value]]),le(yi,{name:"fade"},{default:Y(()=>[es(I("span",{ref_key:"inputSliderTooltipRef",ref:r,class:Qe(["nolebase-ui-slider-tooltip",{"opacity-0":T(c)&&u.value}]),absolute:"","min-w-12":"","rounded-lg":"","bg-black":"","p-2":"","text-center":"","text-white":""},Pe(t.formatter?t.formatter(a.value):a.value),3),[[Or,T(c)]])]),_:1})])]))}}),Lc=Re(Um,[["__scopeId","data-v-20d0b729"]]),Sn="0px",Dc=ue({__name:"NuVerticalTransition",props:{duration:{default:250},easingEnter:{default:"ease-in-out"},easingLeave:{default:"ease-in-out"},opacityClosed:{default:0},opacityOpened:{default:1}},setup(i){const e=i;function t(l){return{height:l.style.height,width:l.style.width,position:l.style.position,visibility:l.style.visibility,overflow:l.style.overflow,paddingTop:l.style.paddingTop,paddingBottom:l.style.paddingBottom,borderTopWidth:l.style.borderTopWidth,borderBottomWidth:l.style.borderBottomWidth,marginTop:l.style.marginTop,marginBottom:l.style.marginBottom}}function n(l,c){const{width:u}=getComputedStyle(l);l.style.width=u,l.style.position="absolute",l.style.visibility="hidden",l.style.height="";const{height:h}=getComputedStyle(l);return l.style.width=c.width,l.style.position=c.position,l.style.visibility=c.visibility,l.style.height=Sn,l.style.overflow="hidden",c.height&&c.height!==Sn?c.height:h}function s(l,c,u,h,f){const p=l.animate(h,f);l.style.height=c.height,p.onfinish=()=>{l.style.overflow=c.overflow,u()}}function r(l,c){return[{height:Sn,opacity:e.opacityClosed,paddingTop:Sn,paddingBottom:Sn,borderTopWidth:Sn,borderBottomWidth:Sn,marginTop:Sn,marginBottom:Sn},{height:l,opacity:e.opacityOpened,paddingTop:c.paddingTop,paddingBottom:c.paddingBottom,borderTopWidth:c.borderTopWidth,borderBottomWidth:c.borderBottomWidth,marginTop:c.marginTop,marginBottom:c.marginBottom}]}function a(l,c){const u=l,h=t(u),f=n(u,h),p=r(f,h),g={duration:e.duration,easing:e.easingEnter};s(u,h,c,p,g)}function o(l,c){const u=l,h=t(u),{height:f}=getComputedStyle(u);u.style.height=f,u.style.overflow="hidden";const p=r(f,h).reverse(),g={duration:e.duration,easing:e.easingLeave};s(u,h,c,p,g)}return(l,c)=>(C(),xe(yi,{css:!1,onEnter:a,onLeave:o},{default:Y(()=>[X(l.$slots,"default")]),_:3}))}});function qr(i,e){if(!e)return;const t=String(i).split(".");let n=e;for(const s of t)if(n=n==null?void 0:n[s],!n)return;return typeof n=="string"?n:String(n)}function Nm(i,e,t){const{locales:n,defaultLocales:s}=t;if(!n&&!s||!i)return e;let r=n[i];r||(r=s[i],r||(r=t.defaultEnLocale));const a=qr(e,r);if(a)return a;const o=s[i];if(o){const c=qr(e,o);if(c)return c}const l=qr(e,t.defaultEnLocale);return l||e}function Fm(i,e,t){return()=>{const n=Qt(i,{locales:{}}),{lang:s}=Lr(),r=Me(()=>s.value||"en");return{t(a,o){const l=Me(()=>Nm(r.value,a,{locales:n.locales||{},defaultLocales:e,defaultEnLocale:t}));return l.value?o!=null&&o.omitEmpty&&l.value===a?"":!o||!o.props?l.value:Me(()=>{let c=l.value;return Object.entries(o.props||{}).forEach(([u,h])=>{c=c.replace(new RegExp(`{{${u}}}`,"g"),String(h))}),c}).value:o!=null&&o.omitEmpty?"":a}}}}function ko(){const i=ei();return{trigger:e=>{e.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated"),Po(()=>{i.value&&e&&e.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchAnimated")},5e3)()}}}const Si=Symbol("vitepress-nolebase-enhanced-readabilities"),Bo="vitepress-nolebase-enhanced-readabilities-layout-switch-mode",Om="vitepress-nolebase-enhanced-readabilities-content-layout-max-width",km="vitepress-nolebase-enhanced-readabilities-page-layout-max-width",Ic="vitepress-nolebase-enhanced-readabilities-spotlight-mode",Uc="vitepress-nolebase-enhanced-readabilities-spotlight-styles";var Et=(i=>(i[i.FullWidth=1]="FullWidth",i[i.Original=3]="Original",i[i.SidebarWidthAdjustableOnly=4]="SidebarWidthAdjustableOnly",i[i.BothWidthAdjustable=5]="BothWidthAdjustable",i))(Et||{});const al=[1,3,4,5];var gi=(i=>(i[i.Under=1]="Under",i[i.Aside=2]="Aside",i))(gi||{}),ns={title:{title:"Enhanced Readability",titleAriaLabel:"Enhanced Readability"},layoutSwitch:{title:"Layout Switch",titleHelpMessage:"Adjust the layout style of VitePress to adapt to different reading needs and screens.",titleAriaLabel:"Layout Switch",titleScreenNavWarningMessage:"No available layout can be switched in mobile screen.",optionFullWidth:"Expand all",optionFullWidthAriaLabel:"Expand all",optionFullWidthHelpMessage:"The sidebar and content area occupy the entire width of the screen.",optionSidebarWidthAdjustableOnly:"Expand sidebar with adjustable values",optionSidebarWidthAdjustableOnlyAriaLabel:"Expand sidebar with adjustable values",optionSidebarWidthAdjustableOnlyHelpMessage:"Expand sidebar width and add a new slider for user to choose and customize their desired width of the maximum width of sidebar can go, but the content area width will remain the same.",optionBothWidthAdjustable:"Expand all with adjustable values",optionBothWidthAdjustableAriaLabel:"Expand all with adjustable values",optionBothWidthAdjustableHelpMessage:"Expand both sidebar and document content and add two new slider for user to choose and customize their desired width of the maximum width of either sidebar or document content can go.",optionOriginalWidth:"Original width",optionOriginalWidthAriaLabel:"Original width",optionOriginalWidthHelpMessage:"The original layout width of VitePress",contentLayoutMaxWidth:{title:"Content Layout Max Width",titleAriaLabel:"Content Layout Max Width",titleHelpMessage:"Adjust the exact value of the document content width of VitePress layout to adapt to different reading needs and screens.",titleScreenNavWarningMessage:"Content Layout Max Width is not available in mobile screen temporarily.",slider:"Adjust the maximum width of the content layout",sliderAriaLabel:"Adjust the maximum width of the content layout",sliderHelpMessage:"A ranged slider for user to choose and customize their desired width of the maximum width of the content layout can go."},pageLayoutMaxWidth:{title:"Page Layout Max Width",titleAriaLabel:"Page Layout Max Width",titleHelpMessage:"Adjust the exact value of the page width of VitePress layout to adapt to different reading needs and screens.",titleScreenNavWarningMessage:"Page Layout Max Width is not available in mobile screen temporarily.",slider:"Adjust the maximum width of the page layout",sliderAriaLabel:"Adjust the maximum width of the page layout",sliderHelpMessage:"A ranged slider for user to choose and customize their desired width of the maximum width of the page layout can go."}},spotlight:{title:"Spotlight",titleAriaLabel:"Spotlight",titleHelpMessage:"Highlight the line where the mouse is currently hovering in the content to optimize for users who may have reading and focusing difficulties.",titleScreenNavWarningMessage:"Spotlight is not available in mobile screen temporarily.",optionOn:"On",optionOnAriaLabel:"On",optionOnHelpMessage:"Turn on Spotlight.",optionOff:"Off",optionOffAriaLabel:"Off",optionOffHelpMessage:"Turn off Spotlight.",styles:{title:"Spotlight Styles",titleAriaLabel:"Spotlight Styles",titleHelpMessage:"Adjust the styles of Spotlight.",titleScreenNavWarningMessage:"Spotlight Styles is not available in mobile screen temporarily.",optionUnder:"Under",optionUnderAriaLabel:"Under",optionUnderHelpMessage:"Add a solid background color underneath the hovering element to highlight where the cursor is currently hovering.",optionAside:"Aside",optionAsideAriaLabel:"Aside",optionAsideHelpMessage:"Add a fixed line with solid color aside the hovering element to highlight where the cursor is currently hovering."}}};ns.title;ns.layoutSwitch;ns.spotlight;var Ts={title:{title:"Повышенная читаемость",titleAriaLabel:"Повышенная читаемость"},layoutSwitch:{title:"Макет страницы",titleHelpMessage:"Измените стиль оформления документации, выберите максимально удобный вариант в зависимости от размера вашего экрана и типа устройства.",titleAriaLabel:"Макет страницы",titleScreenNavWarningMessage:"Изменение макета страницы недоступено на экранах мобильных устройств",optionFullWidth:"Развёрнутый",optionFullWidthAriaLabel:"Развёрнутый",optionFullWidthHelpMessage:"Страница и область содержимого занимают всю ширину экрана.",optionSidebarWidthAdjustableOnly:"Настраиваемая ширина страницы",optionSidebarWidthAdjustableOnlyAriaLabel:"Настраиваемая ширина страницы",optionSidebarWidthAdjustableOnlyHelpMessage:"Управление максимальной шириной страницы, область содержимого будет зафиксирована.",optionBothWidthAdjustable:"Полностью настраиваемый",optionBothWidthAdjustableAriaLabel:"Полностью настраиваемый",optionBothWidthAdjustableHelpMessage:"Управление максимальной шириной страницы и содержимого.",optionOriginalWidth:"Оригинальная ширина",optionOriginalWidthAriaLabel:"Оригинальная ширина",optionOriginalWidthHelpMessage:"Ширина страницы, предусмотренная разработчиками VitePress.",contentLayoutMaxWidth:{title:"Максимальная ширина страницы",titleAriaLabel:"Максимальная ширина страницы",titleHelpMessage:"Точное значение ширины страницы можно настроить для различных экранов и адаптировать условиям чтения.",titleScreenNavWarningMessage:"Изменение максимальной ширины страницы недоступно на экранах мобильных устройств.",slider:"Регулеровка максимальной ширины страницы",sliderAriaLabel:"Регулеровка максимальной ширины страницы",sliderHelpMessage:"Ползунок, позволяющий настроить максимальную ширину страницы. Может быть изменён в зависимости от размера экрана."},pageLayoutMaxWidth:{title:"Максимальная ширина содержимого",titleAriaLabel:"Максимальная ширина содержимого",titleHelpMessage:"Точное значение ширины содержимого можно настроить для различных экранов и адаптировать условиям чтения.",titleScreenNavWarningMessage:"Изменение максимальной ширины страницы недоступно на экранах мобильных устройств.",slider:"Регулеровка максимальной ширины содержимого",sliderAriaLabel:"Регулеровка максимальной ширины содержимого",sliderHelpMessage:"Ползунок, позволяющий настроить максимальную ширину содержимого. Может быть изменён в зависимости от размера экрана."}},spotlight:{title:"Подсветка",titleAriaLabel:"Подсветка",titleHelpMessage:"Выделите блок содержимого, на котором находится курсор.",titleScreenNavWarningMessage:"Подсветка недоступна на экране мобильного устройства.",optionOn:"Включить",optionOnAriaLabel:"Включить",optionOnHelpMessage:"Включите подсветку.",optionOff:"Выключить",optionOffAriaLabel:"Выключить",optionOffHelpMessage:"Выключите подсветку.",styles:{title:"Стиль подсветки",titleAriaLabel:"Стиль подсветки",titleHelpMessage:"Измените стиль выделения.",titleScreenNavWarningMessage:"Подсветка недоступна на экране мобильного устройства.",optionUnder:"Под блоком",optionUnderAriaLabel:"Под блоком",optionUnderHelpMessage:"Добавляет сплошную заливку блока под курсором.",optionAside:"Сбоку от блока",optionAsideAriaLabel:"Сбоку от блока",optionAsideHelpMessage:"Добавляет фиксированную сплошную линию рядом с блоком под курсором"}}};Ts.title;Ts.layoutSwitch;Ts.spotlight;var qi={title:{title:"阅读增强",titleAriaLabel:"阅读增强"},layoutSwitch:{title:"布局切换",titleAriaLabel:"布局切换",titleHelpMessage:"调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。",titleScreenNavWarningMessage:"移动端无可切换布局。",optionFullWidth:"全部展开",optionFullWidthAriaLabel:"全部展开",optionFullWidthHelpMessage:"使侧边栏和内容区域占据整个屏幕的全部宽度。",optionSidebarWidthAdjustableOnly:"全部展开，但侧边栏宽度可调",optionSidebarWidthAdjustableOnlyAriaLabel:"全部展开，但侧边栏宽度可调",optionSidebarWidthAdjustableOnlyHelpMessage:"侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。",optionBothWidthAdjustable:"全部展开，且侧边栏和内容区域宽度均可调",optionBothWidthAdjustableAriaLabel:"全部展开，且侧边栏和内容区域宽度均可调",optionBothWidthAdjustableHelpMessage:"侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。",optionOriginalWidth:"原始宽度",optionOriginalWidthAriaLabel:"原始宽度",optionOriginalWidthHelpMessage:"原始的 VitePress 默认布局宽度",contentLayoutMaxWidth:{title:"内容最大宽度",titleAriaLabel:"内容最大宽度",titleHelpMessage:"调整 VitePress 布局中内容区域的宽度，以适配不同的阅读习惯和屏幕环境。",titleScreenNavWarningMessage:"移动端暂不支持调整内容最大宽度。",slider:"调整内容最大宽度",sliderAriaLabel:"调整内容最大宽度",sliderHelpMessage:"一个可调整的滑块，用于选择和自定义内容最大宽度。",optionFullWidthAriaLabel:"内容最大宽度"},pageLayoutMaxWidth:{title:"页面最大宽度",titleAriaLabel:"页面最大宽度",titleHelpMessage:"调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。",titleScreenNavWarningMessage:"移动端暂不支持调整页面最大宽度。",slider:"调整页面最大宽度",sliderAriaLabel:"调整页面最大宽度",sliderHelpMessage:"一个可调整的滑块，用于选择和自定义页面最大宽度。"}},spotlight:{title:"聚光灯",titleAriaLabel:"聚光灯",titleHelpMessage:"支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。",titleScreenNavWarningMessage:"移动端暂不支持聚光灯。",optionOn:"开启",optionOnAriaLabel:"开启",optionOnHelpMessage:"开启聚光灯。",optionOff:"关闭",optionOffAriaLabel:"关闭",optionOffHelpMessage:"关闭聚光灯。",styles:{title:"聚光灯样式",titleAriaLabel:"聚光灯样式",titleHelpMessage:"调整聚光灯的样式。",titleScreenNavWarningMessage:"移动端暂不支持调整聚光灯样式。",optionUnder:"置于底部",optionUnderAriaLabel:"置于底部",optionUnderHelpMessage:"在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。",optionAside:"置于侧边",optionAsideAriaLabel:"置于侧边",optionAsideHelpMessage:"在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。"}}};qi.title;qi.layoutSwitch;qi.spotlight;const Bm={"en-US":ns,en:ns,"ru-RU":Ts,ru:Ts,"zh-CN":qi,"zh-Hans":qi,zh:qi},kn=Fm(Si,Bm,ns),Vm=ue({__name:"MenuHelp",props:{menuTitleElementRef:{},isPoppedUp:{type:Boolean}},emits:["update:isPoppedUp"],setup(i,{emit:e}){const t=i,n=e,s=bc(t,"menuTitleElementRef"),r=ye(),a=ye(),o=ei(),l=xc(r),c=Da(s),u=Da(a),h=Me(()=>({top:`${c.top.value}px`,left:`${c.left.value-u.width.value-16}px`}));return it(l,f=>{n("update:isPoppedUp",f)}),it(l,()=>{c.update(),u.update()},{flush:"pre"}),(f,p)=>(C(),z(ut,null,[I("span",{ref_key:"helpElementRef",ref:r,text:"$vp-nolebase-enhanced-readabilities-menu-text-color",class:"i-carbon:help-filled opacity-50 hover:opacity-100",transition:"all duration-200 ease","cursor-help":""},null,512),(C(),xe(yc,{to:"body"},[le(yi,{name:"fade"},{default:Y(()=>[T(o)?es((C(),z("div",{key:0,ref_key:"popupElementRef",ref:a,style:Qi(h.value),bg:"$vp-c-bg-elv",text:"$vp-nolebase-enhanced-readabilities-menu-text-color",border:"1 solid $vp-c-divider","pointer-events-none":"",fixed:"","z-100":"","rounded-xl":"","p-4":"","shadow-xl":""},[X(f.$slots,"default",{},void 0,!0)],4)),[[Or,T(l)]]):ce("",!0)]),_:3})]))],64))}}),Ds=Re(Vm,[["__scopeId","data-v-d976e511"]]),zm={key:0},Hm=ue({__name:"MenuTitle",props:{title:{},disabled:{type:Boolean}},setup(i){const e=i;return(t,n)=>(C(),z("h3",{class:Qe(["VPNolebaseEnhancedReadabilitiesMenuTitle",{disabled:!!e.disabled}]),text:"[14px] $vp-nolebase-enhanced-readabilities-menu-text-color","inline-flex":"","select-none":"","items-center":"","align-middle":"","font-medium":""},[X(t.$slots,"icon",{},void 0,!0),e.title?(C(),z("span",zm,Pe(e.title),1)):ce("",!0),X(t.$slots,"default",{},void 0,!0)],2))}}),ti=Re(Hm,[["__scopeId","data-v-3a514c22"]]),Gm={"space-y-2":"",role:"radiogroup"},Wm={"text-md":"","mb-1":"","font-semibold":""},$m={text:"sm","mb-2":"","max-w-100":""},Xm={"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},Ym={text:"sm","mb-2":"",flex:"~","items-center":"","align-middle":""},qm={"font-semibold":""},jm=ue({__name:"LayoutSwitch",setup(i){var p;const e=Qt(Si,{}),t=ye(),n=ye(!1),s=ye(!1),r=us(),a=ei(),o=bn("(min-width: 768px)"),l=Lo(Bo,((p=e.layoutSwitch)==null?void 0:p.defaultMode)||Et.Original),{t:c}=kn(),{trigger:u}=ko(),h=Me(()=>[{value:Et.FullWidth,title:c("layoutSwitch.optionFullWidth"),helpMessage:c("layoutSwitch.optionFullWidthHelpMessage"),ariaLabel:c("layoutSwitch.optionFullWidthAriaLabel"),icon:"i-icon-park-outline:full-screen-one",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.SidebarWidthAdjustableOnly,title:c("layoutSwitch.optionSidebarWidthAdjustableOnly"),helpMessage:c("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),ariaLabel:c("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),icon:"i-icon-park-outline:full-screen-two",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.BothWidthAdjustable,title:c("layoutSwitch.optionBothWidthAdjustable"),helpMessage:c("layoutSwitch.optionSidebarWidthAdjustableOnlyHelpMessage"),ariaLabel:c("layoutSwitch.optionBothWidthAdjustableAriaLabel"),icon:"i-icon-park-outline:full-screen",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.Original,title:c("layoutSwitch.optionOriginalWidth"),helpMessage:c("layoutSwitch.optionOriginalWidthHelpMessage"),ariaLabel:c("layoutSwitch.optionOriginalWidthAriaLabel"),icon:"i-icon-park-outline:overall-reduction",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"}]);function f(g,_){switch(g){case Et.FullWidth:_&&u(document.body),document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");break;case Et.SidebarWidthAdjustableOnly:_&&u(document.body),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"),document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");break;case Et.BothWidthAdjustable:_&&u(document.body),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"),document.body.classList.add("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");break;case Et.Original:_&&u(document.body),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchFullWidth"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchSidebarWidthAdjustableOnly"),document.body.classList.remove("VPNolebaseEnhancedReadabilitiesLayoutSwitchBothWidthAdjustable");break}}return it(a,g=>{var _,m;g&&(f(l.value,!((_=e.layoutSwitch)!=null&&_.disableAnimation)),al.includes(l.value)||(l.value=((m=e.layoutSwitch)==null?void 0:m.defaultMode)||Et.BothWidthAdjustable))}),it(l,g=>{var _,m;a.value&&(f(g,!((_=e.layoutSwitch)!=null&&_.disableAnimation)),al.includes(g)||(l.value=((m=e.layoutSwitch)==null?void 0:m.defaultMode)||Et.BothWidthAdjustable))}),it(r,()=>{var g;f(l.value,!((g=e.layoutSwitch)!=null&&g.disableAnimation))}),it(o,()=>{o.value||(s.value=!0)}),Nt(()=>{o.value||(s.value=!0)}),(g,_)=>{var m;return C(),z("div",Gm,[I("div",{ref_key:"menuTitleElementRef",ref:t,flex:"","items-center":""},[le(ti,{title:T(c)("layoutSwitch.title"),"aria-label":T(c)("layoutSwitch.titleAriaLabel")||T(c)("layoutSwitch.title"),flex:"1",disabled:s.value,"pr-4":""},{icon:Y(()=>_[2]||(_[2]=[I("span",{"i-icon-park-outline:layout-one":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label","disabled"]),(m=T(e).layoutSwitch)!=null&&m.disableHelp?ce("",!0):(C(),xe(Ds,{key:0,"is-popped-up":n.value,"onUpdate:isPoppedUp":_[0]||(_[0]=d=>n.value=d),"menu-title-element-ref":t.value},{default:Y(()=>[I("h4",Wm,Pe(T(c)("layoutSwitch.title")),1),I("p",$m,[I("span",null,Pe(T(c)("layoutSwitch.titleHelpMessage")),1)]),I("div",Xm,[(C(!0),z(ut,null,Lt(h.value,(d,M)=>(C(),z("div",{key:M,text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},[I("h5",Ym,[I("span",{"mr-1":"",class:Qe([d.icon])},null,2),I("span",qm,Pe(d.title),1)]),I("span",null,Pe(d.helpMessage),1)]))),128))])]),_:1},8,["is-popped-up","menu-title-element-ref"]))],512),le(T(Ps),{active:n.value,class:"rounded-md"},{default:Y(()=>[le(T(Ls),{modelValue:T(l),"onUpdate:modelValue":_[1]||(_[1]=d=>Do(l)?l.value=d:null),bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",options:h.value,disabled:s.value},null,8,["modelValue","options","disabled"])]),_:1},8,["active"])])}}}),Km={"space-y-2":"",role:"range"},Zm={"text-md":"","mb-1":"","font-semibold":""},Jm={text:"sm","mb-2":"","max-w-100":""},Qm={"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},eg={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},tg={text:"sm","mb-2":"",flex:"~","items-center":"","align-middle":""},ng={"font-semibold":""},ig=ue({__name:"LayoutSwitchContentLayoutMaxWidthSlider",setup(i){var M,b,S;const e=ye(60),t=Me(()=>e.value*100),n=ye(100),s=Me(()=>n.value*100),r=Qt(Si,{}),a=ye(),o=ye(!1),l=ye(!1),c=ei(),u=bn("(min-width: 768px)"),h=bn("(min-width: 1440px)"),f=ts(Om,(((b=(M=r.layoutSwitch)==null?void 0:M.contentLayoutMaxWidth)==null?void 0:b.defaultMaxWidth)||80)*100),p=Lo(Bo,((S=r.layoutSwitch)==null?void 0:S.defaultMode)||Et.BothWidthAdjustable),g=Me({get:()=>{const P=Number.parseInt(String(f.value));return Number.isNaN(P)?s.value:P<t.value?t.value:P>s.value?s.value:P},set:P=>{P<t.value&&(P=t.value),P>s.value&&(P=s.value),f.value=P}}),{t:_}=kn(),{trigger:m}=ko(),d=Po(P=>{var w,L,k,E;h.value?((E=(k=r.layoutSwitch)==null?void 0:k.contentLayoutMaxWidth)!=null&&E.disableAnimation||m(document.body),document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width",`${Math.ceil(P/100)}%`)):((L=(w=r.layoutSwitch)==null?void 0:w.contentLayoutMaxWidth)!=null&&L.disableAnimation||m(document.body),document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-content-max-width","100%"))},1e3);return it(c,P=>{P&&d(g.value)}),it(u,()=>{u.value||(l.value=!0)}),it(h,()=>{d(g.value)}),Nt(()=>{u.value||(l.value=!0)}),it(g,P=>{c.value&&d(P)}),(P,w)=>(C(),xe(T(Dc),{duration:200},{default:Y(()=>{var L,k;return[es(I("div",Km,[I("div",{ref_key:"menuTitleElementRef",ref:a,flex:"","items-center":""},[le(ti,{title:T(_)("layoutSwitch.contentLayoutMaxWidth.title"),"aria-label":T(_)("layoutSwitch.contentLayoutMaxWidth.titleAriaLabel")||T(_)("layoutSwitch.contentLayoutMaxWidth.title"),disabled:l.value,flex:"1","pr-4":""},{icon:Y(()=>w[2]||(w[2]=[I("span",{"i-icon-park-outline:layout-one":"","mr-1":"","aria-hidden":"true"},null,-1)])),default:Y(()=>[w[3]||(w[3]=I("span",{"i-icon-park-outline:auto-line-width":""},null,-1))]),_:1},8,["title","aria-label","disabled"]),(k=(L=T(r).layoutSwitch)==null?void 0:L.contentLayoutMaxWidth)!=null&&k.disableHelp?ce("",!0):(C(),xe(Ds,{key:0,"is-popped-up":o.value,"onUpdate:isPoppedUp":w[0]||(w[0]=E=>o.value=E),"menu-title-element-ref":a.value},{default:Y(()=>[I("h4",Zm,Pe(T(_)("layoutSwitch.contentLayoutMaxWidth.title")),1),I("p",Jm,[I("span",null,Pe(T(_)("layoutSwitch.contentLayoutMaxWidth.titleHelpMessage")),1)]),I("div",Qm,[I("div",eg,[I("h5",tg,[w[4]||(w[4]=I("span",{"i-icon-park-outline:scale":"","mr-1":""},null,-1)),I("span",ng,Pe(T(_)("layoutSwitch.contentLayoutMaxWidth.slider")),1)]),I("span",null,Pe(T(_)("layoutSwitch.contentLayoutMaxWidth.sliderHelpMessage")),1)])])]),_:1},8,["is-popped-up","menu-title-element-ref"]))],512),le(T(Ps),{active:o.value,class:"rounded-md"},{default:Y(()=>[le(T(Lc),{modelValue:g.value,"onUpdate:modelValue":w[1]||(w[1]=E=>g.value=E),bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",name:"VitePress Nolebase Enhanced Readabilities content layout max width range slider","aria-label":T(_)("layoutSwitch.contentLayoutMaxWidth.optionFullWidthAriaLabel"),disabled:l.value,min:t.value,max:s.value,formatter:E=>`${Math.ceil(E/100)}%`},null,8,["modelValue","aria-label","disabled","min","max","formatter"])]),_:1},8,["active"])],512),[[Or,T(p)===T(Et).BothWidthAdjustable]])]}),_:1}))}}),sg={"space-y-2":"",role:"range"},rg={"text-md":"","mb-1":"","font-semibold":""},ag={text:"sm","mb-2":"","max-w-100":""},og={"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},lg={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},cg={text:"sm","mb-2":"",flex:"~","items-center":"","align-middle":""},ug={"font-semibold":""},dg=ue({__name:"LayoutSwitchPageLayoutMaxWidthSlider",setup(i){var M,b,S;const e=ye(60),t=Me(()=>e.value*100),n=ye(100),s=Me(()=>n.value*100),r=Qt(Si,{}),a=ye(),o=ye(!1),l=ye(!1),c=ei(),u=bn("(min-width: 768px)"),h=bn("(min-width: 1440px)"),f=ts(km,(((b=(M=r.layoutSwitch)==null?void 0:M.pageLayoutMaxWidth)==null?void 0:b.defaultMaxWidth)||100)*100),p=Lo(Bo,((S=r.layoutSwitch)==null?void 0:S.defaultMode)||Et.BothWidthAdjustable),g=Me({get:()=>{const P=Number.parseInt(String(f.value));return Number.isNaN(P)?s.value:P<t.value?t.value:P>s.value?s.value:P},set:P=>{P<t.value&&(P=t.value),P>s.value&&(P=s.value),f.value=P}}),{t:_}=kn(),{trigger:m}=ko(),d=Po(P=>{var w,L;h.value?((L=(w=r.layoutSwitch)==null?void 0:w.pageLayoutMaxWidth)!=null&&L.disableAnimation||m(document.body),document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width",`${Math.ceil(P/100)}%`)):document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-page-max-width","100%")},1e3);return it(c,P=>{P&&d(g.value)}),it(u,()=>{u.value||(l.value=!0)}),it(h,()=>{d(g.value)}),Nt(()=>{u.value||(l.value=!0)}),it(g,P=>{c.value&&d(P)}),(P,w)=>(C(),xe(T(Dc),{duration:200},{default:Y(()=>{var L,k;return[es(I("div",sg,[I("div",{ref_key:"menuTitleElementRef",ref:a,flex:"","items-center":""},[le(ti,{title:T(_)("layoutSwitch.pageLayoutMaxWidth.title"),"aria-label":T(_)("layoutSwitch.pageLayoutMaxWidth.titleAriaLabel")||T(_)("layoutSwitch.pageLayoutMaxWidth.title"),disabled:l.value,flex:"1","pr-2":""},{icon:Y(()=>w[2]||(w[2]=[I("span",{"i-icon-park-outline:auto-width-one":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label","disabled"]),(k=(L=T(r).layoutSwitch)==null?void 0:L.pageLayoutMaxWidth)!=null&&k.disableHelp?ce("",!0):(C(),xe(Ds,{key:0,"is-popped-up":o.value,"onUpdate:isPoppedUp":w[0]||(w[0]=E=>o.value=E),"menu-title-element-ref":a.value},{default:Y(()=>[I("h4",rg,Pe(T(_)("layoutSwitch.pageLayoutMaxWidth.title")),1),I("p",ag,[I("span",null,Pe(T(_)("layoutSwitch.pageLayoutMaxWidth.titleHelpMessage")),1)]),I("div",og,[I("div",lg,[I("h5",cg,[w[3]||(w[3]=I("span",{"i-icon-park-outline:scale":"","mr-1":""},null,-1)),I("span",ug,Pe(T(_)("layoutSwitch.pageLayoutMaxWidth.slider")),1)]),I("span",null,Pe(T(_)("layoutSwitch.pageLayoutMaxWidth.sliderHelpMessage")),1)])])]),_:1},8,["is-popped-up","menu-title-element-ref"]))],512),le(T(Ps),{active:o.value,class:"rounded-md"},{default:Y(()=>[le(T(Lc),{modelValue:g.value,"onUpdate:modelValue":w[1]||(w[1]=E=>g.value=E),bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",name:"VitePress Nolebase Enhanced Readabilities page layout max width range slider","aria-label":T(_)("layoutSwitch.pageLayoutMaxWidth.sliderAriaLabel"),disabled:l.value,min:t.value,max:s.value,formatter:E=>`${Math.ceil(E/100)}%`},null,8,["modelValue","aria-label","disabled","min","max","formatter"])]),_:1},8,["active"])],512),[[Or,T(p)===T(Et).SidebarWidthAdjustableOnly||T(p)===T(Et).BothWidthAdjustable]])]}),_:1}))}}),hg=Br,fg=ue({__name:"SpotlightHoverBlock",props:{enabled:{type:Boolean}},setup(i){var M;const e=i,t=Qt(Si,{}),n=ye(!1),s=ye({display:"none"}),r=ye(),a=ye(),o=us(),l=ts(Uc,((M=t.spotlight)==null?void 0:M.defaultStyle)||gi.Aside),{x:c,y:u}=zu({type:"client"}),{isOutside:h}=Hu(r),{element:f}=Gu({x:c,y:u}),p=Sc(Da(f)),g=Wu(a);$u("scroll",p.update,!0);function _(b){return{display:"block",width:`${b.width+8}px`,height:`${b.height+8}px`,left:`${b.left-4}px`,top:`${b.top-4}px`,transition:"all 0.2s ease",borderRadius:"8px"}}function m(b){return b===null?null:b.parentElement===document.querySelector(".VPDoc main .vp-doc > div")?b:m(b.parentElement)}function d(){if(!(f.value&&!h.value))return;const b=m(f.value);if(a.value=b||void 0,a.value&&a.value.tagName==="P"){const S=a.value,P=window.getComputedStyle(S),w=Number.parseFloat(P.lineHeight),L=Math.floor(S.offsetHeight/w),k=S.getBoundingClientRect(),E=u.value-k.top;for(let y=0;y<L;y++){const D=y*w,j=w,G=S.offsetLeft,q=S.offsetWidth;if(E>=D&&E<D+j){s.value=_({top:D+k.top,left:G+k.left,width:q,height:j});break}}}else if(a.value){const S=a.value.getBoundingClientRect();s.value=_({top:S.top,left:S.left,width:S.width,height:S.height})}}return Nt(()=>{var b;document&&document.body&&(document.body.style.setProperty("--vp-nolebase-enhanced-readabilities-spotlight-under-bg-color",((b=t==null?void 0:t.spotlight)==null?void 0:b.hoverBlockColor)||"rgb(240 197 52 / 10%)"),r.value=document.querySelector(".VPDoc main .vp-doc"))}),it(o,async()=>{await Nr(),r.value=document.querySelector(".VPDoc main .vp-doc"),n.value=!0,s.value={display:"none"},p.update(),d(),n.value=!1}),it([c,u],()=>{e.enabled&&d()}),it(p,b=>{e.enabled&&(b.width===0&&b.height===0?s.value={display:"none"}:d())}),it(g,b=>{e.enabled&&!b&&(s.value={display:"none"})}),it(()=>e.enabled,b=>{b||(s.value={display:"none"})}),(b,S)=>(C(),xe(yc,{to:"body"},[e.enabled&&!n.value?(C(),z("div",{key:0,style:Qi(s.value),"aria-hidden":"true",focusable:"false","pointer-events-none":"",fixed:"",class:Qe(["VPNolebaseEnhancedReadabilitiesSpotlightHoverBlock",[T(l)===T(gi).Under?"VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockUnder":"",T(l)===T(gi).Aside?"VPNolebaseEnhancedReadabilitiesSpotlightHoverBlockAside":""]])},null,6)):ce("",!0)]))}}),pg=Re(fg,[["__scopeId","data-v-50775330"]]),mg={"space-y-2":"",role:"radiogroup"},gg={"text-md":"","mb-1":"","font-semibold":""},_g={text:"sm","mb-2":"","max-w-100":""},vg={"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},xg={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},bg={text:"sm","mb-2":""},yg={"font-semibold":""},Sg={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},Mg={text:"sm","mb-2":""},Eg={"font-semibold":""},Ag=ue({__name:"Spotlight",setup(i){var u;const e=Qt(Si,{}),t=ye(),n=ye(!1),s=ye(!1),r=ei(),a=bn("(pointer: coarse)"),o=ts(Ic,((u=e.spotlight)==null?void 0:u.defaultToggle)||!1),{t:l}=kn(),c=Me(()=>[{value:!0,title:l("spotlight.optionOn"),ariaLabel:l("spotlight.optionOnAriaLabel"),text:"ON",name:"VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"},{value:!1,title:l("spotlight.optionOff"),ariaLabel:l("spotlight.optionOffAriaLabel"),text:"OFF",name:"VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"}]);return Nt(()=>{s.value=a.value}),it(a,()=>{s.value=a.value}),(h,f)=>{var p;return C(),z("div",mg,[T(r)&&T(o)&&!s.value?(C(),xe(pg,{key:0,enabled:T(o)&&!s.value},null,8,["enabled"])):ce("",!0),I("div",{ref_key:"menuTitleElementRef",ref:t,relative:"",flex:"","items-center":""},[le(ti,{title:T(l)("spotlight.title"),"aria-label":T(l)("spotlight.titleAriaLabel")||T(l)("spotlight.title"),disabled:s.value,flex:"1","pr-4":""},{icon:Y(()=>f[2]||(f[2]=[I("span",{"i-icon-park-outline:click":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label","disabled"]),(p=T(e).spotlight)!=null&&p.disableHelp?ce("",!0):(C(),xe(Ds,{key:0,"is-popped-up":n.value,"onUpdate:isPoppedUp":f[0]||(f[0]=g=>n.value=g),"menu-title-element-ref":t.value},{default:Y(()=>[I("h4",gg,Pe(T(l)("spotlight.title")),1),I("p",_g,[I("span",null,Pe(T(l)("spotlight.titleHelpMessage")),1)]),I("div",vg,[I("div",xg,[I("h5",bg,[f[3]||(f[3]=I("span",{"mr-1":"","font-bold":""},"ON",-1)),I("span",yg,Pe(T(l)("spotlight.optionOn")),1)]),I("span",null,Pe(T(l)("spotlight.optionOnHelpMessage")),1)]),I("div",Sg,[I("h5",Mg,[f[4]||(f[4]=I("span",{"mr-1":"","font-bold":""},"OFF",-1)),I("span",Eg,Pe(T(l)("spotlight.optionOff")),1)]),I("span",null,Pe(T(l)("spotlight.optionOffHelpMessage")),1)])])]),_:1},8,["is-popped-up","menu-title-element-ref"]))],512),le(T(Ps),{active:n.value,class:"rounded-md"},{default:Y(()=>[le(T(Ls),{modelValue:T(o),"onUpdate:modelValue":f[1]||(f[1]=g=>Do(o)?o.value=g:null),bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",options:c.value,disabled:s.value},null,8,["modelValue","options","disabled"])]),_:1},8,["active"])])}}}),Tg={key:0,"space-y-2":"",role:"radiogroup",class:"VPNolebaseEnhancedReadabilitiesSpotlightStyles"},wg={"text-md":"","mb-1":"","font-semibold":""},Cg={text:"sm","mb-2":"","max-w-100":""},Rg={"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},Pg={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},Lg={text:"sm","mb-2":""},Dg={"font-semibold":""},Ig={text:"sm",bg:"$vp-nolebase-enhanced-readabilities-menu-background-color","max-w-100":"","rounded-xl":"","p-3":""},Ug={text:"sm","mb-2":""},Ng={"font-semibold":""},Fg=ue({__name:"SpotlightStyles",setup(i){var u,h;const e=Qt(Si,{}),t=ye(),n=ye(!1),s=ye(!1),r=bn("(pointer: coarse)"),a=ts(Ic,((u=e.spotlight)==null?void 0:u.defaultToggle)||!1),o=ts(Uc,((h=e.spotlight)==null?void 0:h.defaultStyle)||gi.Aside),{t:l}=kn(),c=Me(()=>[{value:gi.Under,title:l("spotlight.styles.optionUnder"),ariaLabel:l("spotlight.styles.optionUnderAriaLabel"),icon:"i-icon-park-outline:align-text-left-one",name:"VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"},{value:gi.Aside,title:l("spotlight.styles.optionAside"),ariaLabel:l("spotlight.styles.optionAsideAriaLabel"),icon:"i-icon-park-outline:align-left-one",name:"VitePress Nolebase Enhanced Readabilities Spotlight Style Checkbox"}]);return Nt(()=>{s.value=r.value}),it(r,()=>{s.value=r.value}),(f,p)=>(C(),xe(yi,{name:"fade-shift"},{default:Y(()=>{var g;return[T(a)?(C(),z("div",Tg,[I("div",{ref_key:"menuTitleElementRef",ref:t,relative:"",flex:"","items-center":""},[le(ti,{title:T(l)("spotlight.styles.title"),"aria-label":T(l)("spotlight.styles.titleAriaLabel")||T(l)("spotlight.styles.title"),disabled:s.value,flex:"1","pr-4":""},{icon:Y(()=>p[2]||(p[2]=[I("span",{"i-icon-park-outline:click":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label","disabled"]),(g=T(e).spotlight)!=null&&g.disableHelp?ce("",!0):(C(),xe(Ds,{key:0,"is-popped-up":n.value,"onUpdate:isPoppedUp":p[0]||(p[0]=_=>n.value=_),"menu-title-element-ref":t.value},{default:Y(()=>[I("h4",wg,Pe(T(l)("spotlight.styles.title")),1),I("p",Cg,[I("span",null,Pe(T(l)("spotlight.styles.titleHelpMessage")),1)]),I("div",Rg,[I("div",Pg,[I("h5",Lg,[p[3]||(p[3]=I("span",{"i-icon-park-outline:align-text-left-one":"","mr-1":""},null,-1)),I("span",Dg,Pe(T(l)("spotlight.styles.optionUnder")),1)]),I("span",null,Pe(T(l)("spotlight.styles.optionUnderHelpMessage")),1)]),I("div",Ig,[I("h5",Ug,[p[4]||(p[4]=I("span",{"i-icon-park-outline:align-left-one":"","mr-1":""},null,-1)),I("span",Ng,Pe(T(l)("spotlight.styles.optionAside")),1)]),I("span",null,Pe(T(l)("spotlight.styles.optionAsideHelpMessage")),1)])])]),_:1},8,["is-popped-up","menu-title-element-ref"]))],512),le(T(Ps),{active:n.value,class:"rounded-md"},{default:Y(()=>[le(T(Ls),{modelValue:T(o),"onUpdate:modelValue":p[1]||(p[1]=_=>Do(o)?o.value=_:null),bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",options:c.value,disabled:s.value},null,8,["modelValue","options","disabled"])]),_:1},8,["active"])])):ce("",!0)]}),_:1}))}}),Og=Re(Fg,[["__scopeId","data-v-8d8b97c4"]]),kg=["aria-label"],Bg=ue({__name:"Menu",setup(i){const e=ei(),{t}=kn();return(n,s)=>(C(),xe(T(hg),{icon:"i-icon-park-outline:book-open",class:"VPNolebaseEnhancedReadabilitiesMenu VPNolebaseEnhancedReadabilitiesMenuFlyout","aria-label":T(t)("title.title"),role:"menuitem"},{default:Y(()=>[T(e)?(C(),z("div",{key:0,"aria-label":T(t)("title.title"),"min-w-64":"","p-2":"","space-y-2":""},[le(jm),le(dg),le(ig),le(Ag),le(Og)],8,kg)):ce("",!0)]),_:1},8,["aria-label"]))}}),Vg={"space-y-2":""},zg={border:"1 red/50 solid",bg:"red/30",flex:"","items-center":"","rounded-lg":"","p-2":"","opacity-50":""},Hg={"text-xs":""},Gg=ue({__name:"ScreenLayoutSwitch",setup(i){const{t:e}=kn(),t=Me(()=>[{value:Et.FullWidth,title:e("layoutSwitch.optionFullWidth"),ariaLabel:e("layoutSwitch.optionFullWidthAriaLabel"),icon:"i-icon-park-outline:full-screen-one",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.SidebarWidthAdjustableOnly,title:e("layoutSwitch.optionSidebarWidthAdjustableOnly"),ariaLabel:e("layoutSwitch.optionSidebarWidthAdjustableOnlyAriaLabel"),icon:"i-icon-park-outline:full-screen-two",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.BothWidthAdjustable,title:e("layoutSwitch.optionBothWidthAdjustable"),ariaLabel:e("layoutSwitch.optionBothWidthAdjustableAriaLabel"),icon:"i-icon-park-outline:full-screen",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"},{value:Et.Original,title:e("layoutSwitch.optionOriginalWidth"),ariaLabel:e("layoutSwitch.optionOriginalWidthAriaLabel"),icon:"i-icon-park-outline:overall-reduction",name:"VitePress Nolebase Enhanced Readabilities Layout Mode Checkbox"}]);return(n,s)=>(C(),z("div",Vg,[le(ti,{title:T(e)("layoutSwitch.title"),"aria-label":T(e)("layoutSwitch.titleAriaLabel")||T(e)("layoutSwitch.title"),disabled:""},{icon:Y(()=>[X(n.$slots,"default",{ariaHidden:"true"})]),_:3},8,["title","aria-label"]),I("div",zg,[I("span",Hg,Pe(T(e)("layoutSwitch.titleScreenNavWarningMessage")),1)]),le(T(Ls),{bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",options:t.value,disabled:""},null,8,["options"])]))}}),Wg={"space-y-2":""},$g={border:"1 red/50 solid",bg:"red/30",flex:"","items-center":"","rounded-lg":"","p-2":"","opacity-50":""},Xg={"text-xs":""},Yg=ue({__name:"ScreenSpotlight",setup(i){const{t:e}=kn(),t=Me(()=>[{title:e("spotlight.optionOn"),ariaLabel:e("spotlight.optionOnAriaLabel"),value:!0,text:"ON",name:"VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"},{title:e("spotlight.optionOff"),ariaLabel:e("spotlight.optionOffAriaLabel"),value:!1,text:"OFF",name:"VitePress Nolebase Enhanced Readabilities Spotlight Toggle Switch"}]);return(n,s)=>(C(),z("div",Wg,[le(ti,{title:T(e)("spotlight.title"),"aria-label":T(e)("spotlight.titleAriaLabel")||T(e)("spotlight.title"),disabled:""},{icon:Y(()=>s[0]||(s[0]=[I("span",{"i-icon-park-outline:click":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label"]),I("div",$g,[I("span",Xg,Pe(T(e)("spotlight.titleScreenNavWarningMessage")),1)]),le(T(Ls),{bg:"$vp-nolebase-enhanced-readabilities-menu-background-color",text:"sm $vp-nolebase-enhanced-readabilities-menu-text-color",options:t.value,disabled:""},null,8,["options"])]))}}),qg={key:0,"space-y-2":"",class:"VPNolebaseEnhancedReadabilitiesMenu"},jg={flex:"~ col","pl-4":"","space-y-2":""},Kg=ue({__name:"ScreenMenu",setup(i){const e=ei(),{t}=kn();return(n,s)=>T(e)?(C(),z("div",qg,[le(ti,{title:T(t)("title.title"),"aria-label":T(t)("title.titleAriaLabel")||T(t)("title.title")},{icon:Y(()=>s[0]||(s[0]=[I("span",{"i-icon-park-outline:book-open":"","mr-1":"","aria-hidden":"true"},null,-1)])),_:1},8,["title","aria-label"]),I("div",jg,[le(Gg),le(Yg)])])):ce("",!0)}}),Zg=ue({__name:"VersionPicker",props:{screenMenu:{type:Boolean}},setup(i){const e=ye([]),t=ye("Versions"),n=ye(!1),{site:s}=Lr(),r=()=>typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"),a=()=>{if(typeof window>"u")return"";const{origin:u,pathname:h}=window.location;if(u.includes("github.io")){const f=h.split("/").filter(Boolean);return`${u}/${f[0]??""}`}return u},o=()=>new Promise(u=>{if(r()||typeof window>"u"){u(!1);return}const h=setInterval(()=>{window.DOC_VERSIONS&&window.DOCUMENTER_CURRENT_VERSION&&(clearInterval(h),u(!0))},100);setTimeout(()=>{clearInterval(h),u(!1)},5e3)}),l=async()=>{if(!(typeof window>"u")){try{if(r())e.value=[{text:"dev",link:"/"}],t.value="dev";else{const u=await o(),h=a();if(u&&window.DOC_VERSIONS&&window.DOCUMENTER_CURRENT_VERSION){const f=new Set([...window.DOC_VERSIONS,window.DOCUMENTER_CURRENT_VERSION]);e.value=Array.from(f).map(p=>({text:p,link:`${h}/${p}/`})),t.value=window.DOCUMENTER_CURRENT_VERSION}else e.value=[{text:"dev",link:`${h}/dev/`}],t.value="dev"}}catch(u){console.warn("Error loading versions:",u);const h=a();e.value=[{text:"dev",link:`${h}/dev/`}],t.value="dev"}n.value=!0}},c=Me(()=>e.value.map(u=>({text:u.text,link:u.link})));return Nt(()=>{typeof window<"u"&&(t.value=window.DOCUMENTER_CURRENT_VERSION??"Versions",l())}),(u,h)=>n.value?(C(),z(ut,{key:0},[!u.screenMenu&&e.value.length>0?(C(),xe(Cc,{key:0,item:{text:"Version",items:c.value},class:"VPVersionPicker"},null,8,["item"])):u.screenMenu&&e.value.length>0?(C(),xe(Pc,{key:1,text:"Version",items:c.value,class:"VPVersionPicker"},null,8,["items"])):ce("",!0)],64)):ce("",!0)}}),Jg=Re(Zg,[["__scopeId","data-v-951b53ae"]]),Qg=["href"],e_={class:"badge-container"},t_=["src","alt"],n_={key:1,class:"badge-container"},i_=["src","alt"],s_={__name:"AuthorBadge",props:{author:{type:String,required:!0},avatar:{type:String,default:""},platform:{type:String,default:"user"},link:{type:String,default:""}},setup(i){const e=i,t={github:"https://img.icons8.com/ios-filled/50/github.png",gitlab:"https://img.icons8.com/ios-filled/50/gitlab.png",x:"https://img.icons8.com/ios/50/twitterx--v2.png",linkedin:"https://img.icons8.com/ios-filled/50/linkedin.png",bluesky:"https://img.icons8.com/material-sharp/48/bluesky.png",mastodon:"https://img.icons8.com/windows/64/mastodon.png",user:"https://img.icons8.com/windows/64/user.png"},n=Me(()=>e.avatar?e.avatar:e.platform&&t[e.platform.toLowerCase()]?t[e.platform.toLowerCase()]:t.user),s=r=>{const a=["#3eaf7c","#476582","#c53e3e","#986801","#8957e5"],o=r.split("").reduce((l,c)=>l+c.charCodeAt(0),0);return a[o%a.length]};return(r,a)=>i.link?(C(),z("a",{key:0,href:i.link,class:"badge-link",target:"_blank",rel:"noopener noreferrer"},[I("span",e_,[a[0]||(a[0]=I("span",{class:"badge-label"},"Author",-1)),I("span",{class:"author-badge",style:Qi({backgroundColor:s(i.author)})},[I("img",{src:n.value,alt:i.author,class:Qe([{"platform-avatar":!e.avatar},"author-avatar"])},null,10,t_),Un(" "+Pe(i.author),1)],4)])],8,Qg)):(C(),z("span",n_,[a[1]||(a[1]=I("span",{class:"badge-label"},"Author",-1)),I("span",{class:"author-badge",style:Qi({backgroundColor:s(i.author)})},[I("img",{src:n.value,alt:i.author,class:Qe([{"platform-avatar":!e.avatar},"author-avatar"])},null,10,i_),Un(" "+Pe(i.author),1)],4)]))}},r_=Re(s_,[["__scopeId","data-v-5eb0e64d"]]),a_={class:"authors-container"},o_={__name:"Authors",setup(i){const{frontmatter:e}=Lr(),t=e.value.authors||[];return(n,s)=>{const r=Qn("AuthorBadge");return C(),z("div",a_,[(C(!0),z(ut,null,Lt(T(t),a=>(C(),xe(r,{key:a.name,author:a.name,avatar:a.avatar,platform:a.platform,link:a.link},null,8,["author","avatar","platform","link"]))),128))])}}},l_=Re(o_,[["__scopeId","data-v-ec79a7d8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="174",ji={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},c_=0,ol=1,u_=2,Nc=1,d_=2,Cn=3,Zn=0,Yt=1,Rn=2,qn=0,Ki=1,ll=2,cl=3,ul=4,h_=5,hi=100,f_=101,p_=102,m_=103,g_=104,__=200,v_=201,x_=202,b_=203,Fa=204,Oa=205,y_=206,S_=207,M_=208,E_=209,A_=210,T_=211,w_=212,C_=213,R_=214,ka=0,Ba=1,Va=2,is=3,za=4,Ha=5,Ga=6,Wa=7,Fc=0,P_=1,L_=2,jn=0,D_=1,I_=2,U_=3,N_=4,F_=5,O_=6,k_=7,Oc=300,ss=301,rs=302,$a=303,Xa=304,Vr=306,Ya=1e3,pi=1001,qa=1002,fn=1003,B_=1004,Os=1005,gn=1006,jr=1007,mi=1008,Nn=1009,kc=1010,Bc=1011,ws=1012,zo=1013,vi=1014,Pn=1015,Is=1016,Ho=1017,Go=1018,as=1020,Vc=35902,zc=1021,Hc=1022,hn=1023,Gc=1024,Wc=1025,Zi=1026,os=1027,$c=1028,Wo=1029,Xc=1030,$o=1031,Xo=1033,gr=33776,_r=33777,vr=33778,xr=33779,ja=35840,Ka=35841,Za=35842,Ja=35843,Qa=36196,eo=37492,to=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,br=36492,_o=36494,vo=36495,Yc=36283,xo=36284,bo=36285,yo=36286,V_=3200,z_=3201,H_=0,G_=1,Xn="",sn="srgb",ls="srgb-linear",Ar="linear",mt="srgb",Ti=7680,dl=519,W_=512,$_=513,X_=514,qc=515,Y_=516,q_=517,j_=518,K_=519,So=35044,hl="300 es",Ln=2e3,Tr=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,Mo=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Z_(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const J_={DEG2RAD:Es};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,s,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],M=s[1],b=s[4],S=s[7],P=s[2],w=s[5],L=s[8];return r[0]=a*_+o*M+l*P,r[3]=a*m+o*b+l*w,r[6]=a*d+o*S+l*L,r[1]=c*_+u*M+h*P,r[4]=c*m+u*b+h*w,r[7]=c*d+u*S+h*L,r[2]=f*_+p*M+g*P,r[5]=f*m+p*b+g*w,r[8]=f*d+p*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zr.makeScale(e,t)),this}rotate(e){return this.premultiply(Zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new qe;function jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Q_(){const i=wr("canvas");return i.style.display="block",i}const fl={};function ui(i){i in fl||(fl[i]=!0,console.warn(i))}function ev(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function tv(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function nv(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iv(){const i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Ar:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const ct=iv();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=wr("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rv=0;class Yo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jr(s[a].image)):r.push(Jr(s[a]))}else r=Jr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let av=0;class Wt extends Mi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=pi,s=pi,r=gn,a=mi,o=hn,l=Nn,c=Wt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=Kn(),this.name="",this.source=new Yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Oc;Wt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,P=(d+1)/2,w=(u+f)/4,L=(h+_)/4,k=(g+m)/4;return b>S&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=L/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=k/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=k/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ov extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends ov{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kc extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lv extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,M=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const P=Math.sqrt(b),w=Math.atan2(P,d*M);m=Math.sin(m*w)/P,o=Math.sin(o*w)/P}const S=o*M;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new F,gl=new bi;class ds{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Bs.subVectors(this.max,ms),Ci.subVectors(e.a,ms),Ri.subVectors(e.b,ms),Pi.subVectors(e.c,ms),Bn.subVectors(Ri,Ci),Vn.subVectors(Pi,Ri),si.subVectors(Ci,Pi);let t=[0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!ea(t,Ci,Ri,Pi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Ci,Ri,Pi,Bs))?!1:(Vs.crossVectors(Bn,Vn),t=[Vs.x,Vs.y,Vs.z],ea(t,Ci,Ri,Pi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,ks=new ds,Ci=new F,Ri=new F,Pi=new F,Bn=new F,Vn=new F,si=new F,ms=new F,Bs=new F,Vs=new F,ri=new F;function ea(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cv=new ds,gs=new F,ta=new F;class Us{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(ta)),this.expandByPoint(gs.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new F,na=new F,zs=new F,zn=new F,ia=new F,Hs=new F,sa=new F;class zr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){na.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=zn.dot(this.direction),l=-zn.dot(zs),c=zn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(na).addScaledVector(zs,f),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){ia.subVectors(t,e),Hs.subVectors(n,e),sa.crossVectors(ia,Hs);let a=this.direction.dot(sa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(zn,Hs));if(l<0)return null;const c=o*this.direction.dot(ia.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(sa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,_,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,dv)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Hn.crossVectors(n,Kt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Hn.crossVectors(n,Kt)),Hn.normalize(),Gs.crossVectors(Kt,Hn),s[0]=Hn.x,s[4]=Gs.x,s[8]=Kt.x,s[1]=Hn.y,s[5]=Gs.y,s[9]=Kt.y,s[2]=Hn.z,s[6]=Gs.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],b=n[7],S=n[11],P=n[15],w=s[0],L=s[4],k=s[8],E=s[12],y=s[1],D=s[5],j=s[9],G=s[13],q=s[2],ne=s[6],K=s[10],ie=s[14],W=s[3],he=s[7],Se=s[11],fe=s[15];return r[0]=a*w+o*y+l*q+c*W,r[4]=a*L+o*D+l*ne+c*he,r[8]=a*k+o*j+l*K+c*Se,r[12]=a*E+o*G+l*ie+c*fe,r[1]=u*w+h*y+f*q+p*W,r[5]=u*L+h*D+f*ne+p*he,r[9]=u*k+h*j+f*K+p*Se,r[13]=u*E+h*G+f*ie+p*fe,r[2]=g*w+_*y+m*q+d*W,r[6]=g*L+_*D+m*ne+d*he,r[10]=g*k+_*j+m*K+d*Se,r[14]=g*E+_*G+m*ie+d*fe,r[3]=M*w+b*y+S*q+P*W,r[7]=M*L+b*D+S*ne+P*he,r[11]=M*k+b*j+S*K+P*Se,r[15]=M*E+b*G+S*ie+P*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,b=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,S=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,P=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*M+n*b+s*S+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/w;return e[0]=M*L,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*L,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*L,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*L,e[4]=b*L,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*L,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*L,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*L,e[8]=S*L,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*L,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*d+t*o*d)*L,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*L,e[12]=P*L,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*L,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*L,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,_=a*u,m=a*h,d=o*h,M=l*c,b=l*u,S=l*h,P=n.x,w=n.y,L=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+S)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(f+d))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+b)*L,s[9]=(m-M)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Li.set(s[0],s[1],s[2]).length();const a=Li.set(s[4],s[5],s[6]).length(),o=Li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,u=1/a,h=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ln){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(o===Ln)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Tr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u;let g,_;if(o===Ln)g=(a+r)*h,_=-2*h;else if(o===Tr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new F,un=new yt,uv=new F(0,0,0),dv=new F(1,1,1),Hn=new F,Gs=new F,Kt=new F,_l=new yt,vl=new bi;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _l.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hv=0;const xl=new F,Di=new bi,An=new yt,Ws=new F,_s=new F,fv=new F,pv=new bi,bl=new F(1,0,0),yl=new F(0,1,0),Sl=new F(0,0,1),Ml={type:"added"},mv={type:"removed"},Ii={type:"childadded",child:null},ra={type:"childremoved",child:null};class Vt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new F,t=new Fn,n=new bi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new qe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(_s,Ws,this.up):An.lookAt(Ws,_s,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(An),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mv),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),Ii.child=e,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new F,Tn=new F,aa=new F,wn=new F,Ui=new F,Ni=new F,El=new F,oa=new F,la=new F,ca=new F,ua=new At,da=new At,ha=new At;class Jt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Tn.subVectors(n,t),aa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Tn),l=dn.dot(aa),c=Tn.dot(Tn),u=Tn.dot(aa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ua.setScalar(0),da.setScalar(0),ha.setScalar(0),ua.fromBufferAttribute(e,t),da.fromBufferAttribute(e,n),ha.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(da,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Tn.subVectors(e,t),dn.cross(Tn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),dn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Ni.subVectors(r,n),oa.subVectors(e,n);const l=Ui.dot(oa),c=Ni.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,s);const u=Ui.dot(la),h=Ni.dot(la);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ui,a);ca.subVectors(e,r);const p=Ui.dot(ca),g=Ni.dot(ca);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ni,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return El.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(El,o);const d=1/(m+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Ui,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Z_(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fa(a,r,e+1/3),this.g=fa(a,r,e),this.b=fa(a,r,e-1/3)}return ct.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ct.fromWorkingColorSpace(kt.copy(this),e),Math.round(nt(kt.r*255,0,255))*65536+Math.round(nt(kt.g*255,0,255))*256+Math.round(nt(kt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=sn){ct.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL($s);const n=Kr(Gn.h,$s.h,t),s=Kr(Gn.s,$s.s,t),r=Kr(Gn.l,$s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new rt;rt.NAMES=Jc;let gv=0;class Ei extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Ki,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qc extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new F,Xs=new We;let _v=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_v++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}}class eu extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tu extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vv=0;const nn=new yt,pa=new Vt,Fi=new F,Zt=new ds,vs=new ds,It=new F;class Bt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?tu:eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Zt.min,vs.min),Zt.expandByPoint(It),It.addVectors(Zt.max,vs.max),Zt.expandByPoint(It)):(Zt.expandByPoint(vs.min),Zt.expandByPoint(vs.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),It.add(Fi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<n.count;k++)o[k]=new F,l[k]=new F;const c=new F,u=new F,h=new F,f=new We,p=new We,g=new We,_=new F,m=new F;function d(k,E,y){c.fromBufferAttribute(n,k),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[k].add(_),o[E].add(_),o[y].add(_),l[k].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,E=M.length;k<E;++k){const y=M[k],D=y.start,j=y.count;for(let G=D,q=D+j;G<q;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new F,S=new F,P=new F,w=new F;function L(k){P.fromBufferAttribute(s,k),w.copy(P);const E=o[k];b.copy(E),b.sub(P.multiplyScalar(P.dot(E))).normalize(),S.crossVectors(w,E);const D=S.dot(l[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,D)}for(let k=0,E=M.length;k<E;++k){const y=M[k],D=y.start,j=y.count;for(let G=D,q=D+j;G<q;G+=3)L(e.getX(G+0)),L(e.getX(G+1)),L(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new yt,ai=new zr,Ys=new Us,Tl=new F,qs=new F,js=new F,Ks=new F,ma=new F,Zs=new F,wl=new F,Js=new F;class Dn extends Vt{constructor(e=new Bt,t=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ma.fromBufferAttribute(h,e),a?Zs.addScaledVector(ma,u):Zs.addScaledVector(ma.sub(t),u))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Ys.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Ys,Tl)===null||ai.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,P=b;S<P;S+=3){const w=o.getX(S),L=o.getX(S+1),k=o.getX(S+2);s=Qs(this,d,e,n,c,u,h,w,L,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=Qs(this,a,e,n,c,u,h,M,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=M,P=b;S<P;S+=3){const w=S,L=S+1,k=S+2;s=Qs(this,d,e,n,c,u,h,w,L,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,b=m+1,S=m+2;s=Qs(this,a,e,n,c,u,h,M,b,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xv(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,js),i.getVertexPosition(c,Ks);const u=xv(i,e,t,n,qs,js,Ks,wl);if(u){const h=new F;Jt.getBarycoord(wl,qs,js,Ks,h),s&&(u.uv=Jt.getInterpolatedAttribute(s,o,l,c,h,new We)),r&&(u.uv1=Jt.getInterpolatedAttribute(r,o,l,c,h,new We)),a&&(u.normal=Jt.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Jt.getNormal(qs,js,Ks,f.normal),u.face=f,u.barycoord=h}return u}class hs extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(_,m,d,M,b,S,P,w,L,k,E){const y=S/L,D=P/k,j=S/2,G=P/2,q=w/2,ne=L+1,K=k+1;let ie=0,W=0;const he=new F;for(let Se=0;Se<K;Se++){const fe=Se*D-G;for(let Je=0;Je<ne;Je++){const ft=Je*y-j;he[_]=ft*M,he[m]=fe*b,he[d]=q,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[d]=w>0?1:-1,u.push(he.x,he.y,he.z),h.push(Je/L),h.push(1-Se/k),ie+=1}}for(let Se=0;Se<k;Se++)for(let fe=0;fe<L;fe++){const Je=f+fe+ne*Se,ft=f+fe+ne*(Se+1),Z=f+(fe+1)+ne*(Se+1),re=f+(fe+1)+ne*Se;l.push(Je,ft,re),l.push(ft,Z,re),W+=6}o.addGroup(p,W,E),p+=W,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=cs(i[t]);for(const s in n)e[s]=n[s]}return e}function bv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const yv={clone:cs,merge:Gt};var Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new F,Cl=new We,Rl=new We;class rn extends iu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Rl),t.subVectors(Rl,Cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,ki=1;class Ev extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Oi,ki,e,t);s.layers=this.layers,this.add(s);const r=new rn(Oi,ki,e,t);r.layers=this.layers,this.add(r);const a=new rn(Oi,ki,e,t);a.layers=this.layers,this.add(a);const o=new rn(Oi,ki,e,t);o.layers=this.layers,this.add(o);const l=new rn(Oi,ki,e,t);l.layers=this.layers,this.add(l);const c=new rn(Oi,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends Wt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Av extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hs(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:qn});r.uniforms.tEquirect.value=t;const a=new Dn(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=gn),new Ev(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class $i extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tv={type:"move"};class ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wv extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=So,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new F;class Cr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yr extends Ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bi;const xs=new F,Vi=new F,zi=new F,Hi=new We,bs=new We,ru=new yt,er=new F,ys=new F,tr=new F,Pl=new We,_a=new We,Ll=new We;class va extends Vt{constructor(e=new yr){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cv(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Cr(n,3,0,!1)),Bi.setAttribute("uv",new Cr(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;nr(er.set(-.5,-.5,0),zi,a,Vi,s,r),nr(ys.set(.5,-.5,0),zi,a,Vi,s,r),nr(tr.set(.5,.5,0),zi,a,Vi,s,r),Pl.set(0,0),_a.set(1,0),Ll.set(1,1);let o=e.ray.intersectTriangle(er,ys,tr,!1,xs);if(o===null&&(nr(ys.set(-.5,.5,0),zi,a,Vi,s,r),_a.set(0,1),o=e.ray.intersectTriangle(er,tr,ys,!1,xs),o===null))return;const l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Jt.getInterpolation(xs,er,ys,tr,Pl,_a,Ll,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nr(i,e,t,n,s,r){Hi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(bs.x=r*Hi.x-s*Hi.y,bs.y=s*Hi.x+r*Hi.y):bs.copy(Hi),i.copy(e),i.x+=bs.x,i.y+=bs.y,i.applyMatrix4(ru)}const xa=new F,Rv=new F,Pv=new qe;class $n{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xa.subVectors(n,t).cross(Rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pv.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Us,ir=new F;class au{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],M=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,m-p,S-d).normalize(),n[1].setComponents(l+r,f+c,m+p,S+d).normalize(),n[2].setComponents(l+a,f+u,m+g,S+M).normalize(),n[3].setComponents(l-a,f-u,m-g,S-M).normalize(),n[4].setComponents(l-o,f-h,m-_,S-b).normalize(),t===Ln)n[5].setComponents(l+o,f+h,m+_,S+b).normalize();else if(t===Tr)n[5].setComponents(o,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xi extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new F,Pr=new F,Dl=new yt,Ss=new zr,sr=new Us,ba=new F,Il=new F;class Sr extends Vt{constructor(e=new Bt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rr.fromBufferAttribute(t,s-1),Pr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rr.distanceTo(Pr);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Dl.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(Dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),M=u.getX(_+1),b=rr(this,e,Ss,l,d,M,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=rr(this,e,Ss,l,_,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=rr(this,e,Ss,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=rr(this,e,Ss,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Rr.fromBufferAttribute(o,s),Pr.fromBufferAttribute(o,r),t.distanceSqToSegment(Rr,Pr,ba,Il)>n)return;ba.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ba);if(!(c<e.near||c>e.far))return{distance:c,point:Il.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Ul=new F,Nl=new F;class ou extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ul.fromBufferAttribute(t,s),Nl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ul.distanceTo(Nl);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lu extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fl=new yt,Eo=new zr,ar=new Us,or=new F;class Lv extends Vt{constructor(e=new Bt,t=new lu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Fl.copy(s).invert(),Eo.copy(e.ray).applyMatrix4(Fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);or.fromBufferAttribute(h,m),Ol(or,m,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)or.fromBufferAttribute(h,g),Ol(or,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ol(i,e,t,n,s,r,a){const o=Eo.distanceSqToPoint(i);if(o<t){const l=new F;Eo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ya extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends Wt{constructor(e,t,n,s,r,a,o,l,c,u=Zi){if(u!==Zi&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=vi),n===void 0&&u===os&&(n=as),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lr=new F,cr=new F,Sa=new F,ur=new Jt;class Dv extends Bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Es*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=ur;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),ur.getNormal(Sa),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const b=(M+1)%3,S=h[M],P=h[b],w=ur[u[M]],L=ur[u[b]],k=`${S}_${P}`,E=`${P}_${S}`;E in f&&f[E]?(Sa.dot(f[E].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(L.x,L.y,L.z)),f[E]=null):k in f||(f[k]={index0:c[M],index1:c[b],normal:Sa.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];lr.fromBufferAttribute(o,_),cr.fromBufferAttribute(o,m),p.push(lr.x,lr.y,lr.z),p.push(cr.x,cr.y,cr.z)}this.setAttribute("position",new an(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hr extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*f-a;for(let b=0;b<c;b++){const S=b*h-r;g.push(S,-M,0),_.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const b=M+c*d,S=M+c*(d+1),P=M+1+c*(d+1),w=M+1+c*d;p.push(b,S,w),p.push(S,P,w)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Iv extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nv extends iu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class kl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ov extends ou{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Bt;s.setAttribute("position",new an(t,3)),s.setAttribute("color",new an(n,3));const r=new Xi({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new rt,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class kv extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Bl(i,e,t,n){const s=Bv(n);switch(t){case zc:return i*e;case Gc:return i*e;case Wc:return i*e*2;case $c:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case Xc:return i*e*2/s.components*s.byteLength;case $o:return i*e*2/s.components*s.byteLength;case Hc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Xo:return i*e*4/s.components*s.byteLength;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(i,16)*Math.max(e,8)/4;case ja:case Za:return Math.max(i,8)*Math.max(e,8)/2;case Qa:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case br:case _o:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yc:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bv(i){switch(i){case Nn:case kc:return{byteLength:1,components:1};case ws:case Bc:case Is:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case vi:case zo:case Pn:return{byteLength:4,components:1};case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vv(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ob=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,db=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:zv,alphahash_pars_fragment:Hv,alphamap_fragment:Gv,alphamap_pars_fragment:Wv,alphatest_fragment:$v,alphatest_pars_fragment:Xv,aomap_fragment:Yv,aomap_pars_fragment:qv,batching_pars_vertex:jv,batching_vertex:Kv,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:Qv,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:a0,color_pars_fragment:o0,color_pars_vertex:l0,color_vertex:c0,common:u0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:h0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:_0,colorspace_pars_fragment:v0,envmap_fragment:x0,envmap_common_pars_fragment:b0,envmap_pars_fragment:y0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:I0,envmap_vertex:M0,fog_vertex:E0,fog_pars_vertex:A0,fog_fragment:T0,fog_pars_fragment:w0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:R0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:L0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:N0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:k0,lights_physical_pars_fragment:B0,lights_fragment_begin:V0,lights_fragment_maps:z0,lights_fragment_end:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:X0,map_fragment:Y0,map_pars_fragment:q0,map_particle_fragment:j0,map_particle_pars_fragment:K0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ax,normal_pars_vertex:ox,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:vx,dithering_pars_fragment:xx,roughnessmap_fragment:bx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Mx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Ax,skinbase_vertex:Tx,skinning_pars_vertex:wx,skinning_vertex:Cx,skinnormal_vertex:Rx,specularmap_fragment:Px,specularmap_pars_fragment:Lx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ix,transmission_fragment:Ux,transmission_pars_fragment:Nx,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:kx,worldpos_vertex:Bx,background_vert:Vx,background_frag:zx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:$x,depth_vert:Xx,depth_frag:Yx,distanceRGBA_vert:qx,distanceRGBA_frag:jx,equirect_vert:Kx,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:sb,meshmatcap_frag:rb,meshnormal_vert:ab,meshnormal_frag:ob,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:db,meshtoon_vert:hb,meshtoon_frag:fb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:xb},de={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},pn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};pn.physical={uniforms:Gt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const dr={r:0,b:0,g:0},li=new Fn,bb=new yt;function yb(i,e,t,n,s,r,a){const o=new rt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const P=g(b);P===null?d(o,l):P&&P.isColor&&(d(P,1),S=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const P=g(S);P&&(P.isCubeTexture||P.mapping===Vr)?(u===void 0&&(u=new Dn(new hs(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:cs(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(S.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(li)),u.material.toneMapped=ct.getTransfer(P.colorSpace)!==mt,(h!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Dn(new Hr(2,2),new Jn({name:"BackgroundMaterial",uniforms:cs(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ct.getTransfer(P.colorSpace)!==mt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,S){b.getRGB(dr,nu(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,S,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:_,addToRenderList:m,dispose:M}}function Sb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,D,j,G,q){let ne=!1;const K=h(G,j,D);r!==K&&(r=K,c(r.object)),ne=p(y,G,j,q),ne&&g(y,G,j,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,S(y,D,j,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,j){const G=j.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let ne=q[D.id];ne===void 0&&(ne={},q[D.id]=ne);let K=ne[G];return K===void 0&&(K=f(l()),ne[G]=K),K}function f(y){const D=[],j=[],G=[];for(let q=0;q<t;q++)D[q]=0,j[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:j,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,D,j,G){const q=r.attributes,ne=D.attributes;let K=0;const ie=j.getAttributes();for(const W in ie)if(ie[W].location>=0){const Se=q[W];let fe=ne[W];if(fe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),Se===void 0||Se.attribute!==fe||fe&&Se.data!==fe.data)return!0;K++}return r.attributesNum!==K||r.index!==G}function g(y,D,j,G){const q={},ne=D.attributes;let K=0;const ie=j.getAttributes();for(const W in ie)if(ie[W].location>=0){let Se=ne[W];Se===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor));const fe={};fe.attribute=Se,Se&&Se.data&&(fe.data=Se.data),q[W]=fe,K++}r.attributes=q,r.attributesNum=K,r.index=G}function _(){const y=r.newAttributes;for(let D=0,j=y.length;D<j;D++)y[D]=0}function m(y){d(y,0)}function d(y,D){const j=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;j[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),q[y]!==D&&(i.vertexAttribDivisor(y,D),q[y]=D)}function M(){const y=r.newAttributes,D=r.enabledAttributes;for(let j=0,G=D.length;j<G;j++)D[j]!==y[j]&&(i.disableVertexAttribArray(j),D[j]=0)}function b(y,D,j,G,q,ne,K){K===!0?i.vertexAttribIPointer(y,D,j,q,ne):i.vertexAttribPointer(y,D,j,G,q,ne)}function S(y,D,j,G){_();const q=G.attributes,ne=j.getAttributes(),K=D.defaultAttributeValues;for(const ie in ne){const W=ne[ie];if(W.location>=0){let he=q[ie];if(he===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const Se=he.normalized,fe=he.itemSize,Je=e.get(he);if(Je===void 0)continue;const ft=Je.buffer,Z=Je.type,re=Je.bytesPerElement,ge=Z===i.INT||Z===i.UNSIGNED_INT||he.gpuType===zo;if(he.isInterleavedBufferAttribute){const oe=he.data,Le=oe.stride,tt=he.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<W.locationSize;Ne++)d(W.location+Ne,oe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<W.locationSize;Ne++)m(W.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ne=0;Ne<W.locationSize;Ne++)b(W.location+Ne,fe/W.locationSize,Z,Se,Le*re,(tt+fe/W.locationSize*Ne)*re,ge)}else{if(he.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)d(W.location+oe,he.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let oe=0;oe<W.locationSize;oe++)b(W.location+oe,fe/W.locationSize,Z,Se,fe*re,fe/W.locationSize*oe*re,ge)}}else if(K!==void 0){const Se=K[ie];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(W.location,Se);break;case 3:i.vertexAttrib3fv(W.location,Se);break;case 4:i.vertexAttrib4fv(W.location,Se);break;default:i.vertexAttrib1fv(W.location,Se)}}}}M()}function P(){k();for(const y in n){const D=n[y];for(const j in D){const G=D[j];for(const q in G)u(G[q].object),delete G[q];delete D[j]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const j in D){const G=D[j];for(const q in G)u(G[q].object),delete G[q];delete D[j]}delete n[y.id]}function L(y){for(const D in n){const j=n[D];if(j[y.id]===void 0)continue;const G=j[y.id];for(const q in G)u(G[q].object),delete G[q];delete j[y.id]}}function k(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mb(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Eb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==hn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const k=L===Is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Nn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Pn&&!k)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:P,maxSamples:w}}function Ab(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $n,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,b=M*4;let S=d.clippingState||null;l.value=S,S=u(g,f,b,p);for(let P=0;P!==b;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,S=p;b!==_;++b,S+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Tb(i){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=ss:o===Xa&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Av(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Yi=4,Vl=[.125,.215,.35,.446,.526,.582],fi=20,Ma=new Nv,zl=new rt;let Ea=null,Aa=0,Ta=0,wa=!1;const di=(1+Math.sqrt(5))/2,Gi=1/di,Hl=[new F(-di,Gi,0),new F(di,Gi,0),new F(-Gi,0,di),new F(Gi,0,di),new F(0,di,-Gi),new F(0,di,Gi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],wb=new F;class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=wb}=r;Ea=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Aa,Ta),this._renderer.xr.enabled=wa,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Is,format:hn,colorSpace:ls,depthBuffer:!1},s=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(r)),this._blurMaterial=Rb(r,e,t)}return s}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,s,r){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(zl),h.toneMapping=jn,h.autoClear=!1;const g=new Qc({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new Dn(new hs,g);let m=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(zl),m=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const S=this._cubeSize;hr(s,b*S,M>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hl[(s-r-1)%Hl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const d=[];let M=0;for(let L=0;L<fi;++L){const k=L/_,E=Math.exp(-k*k/2);d.push(E),L===0?M+=E:L<m&&(M+=2*E)}for(let L=0;L<d.length;L++)d[L]=d[L]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],P=3*S*(s>b-Yi?s-b+Yi:0),w=4*(this._cubeSize-S);hr(t,P,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Ma)}}function Cb(i){const e=[],t=[],n=[];let s=i;const r=i-Yi+1+Vl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Yi?l=Vl[a-i+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),b=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const L=w%3*2/3-1,k=w>2?0:-1,E=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];M.set(E,_*g*w),b.set(f,m*g*w);const y=[w,w,w,w,w,w];S.set(y,d*g*w)}const P=new Bt;P.setAttribute("position",new qt(M,_)),P.setAttribute("uv",new qt(b,m)),P.setAttribute("faceIndex",new qt(S,d)),e.push(P),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wl(i,e,t){const n=new xi(i,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rb(i,e,t){const n=new Float32Array(fi),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function $l(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Xl(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pb(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$a||l===Xa,u=l===ss||l===rs;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Gl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Gl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ui("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Db(i,e,t,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let b=0,S=M.length;b<S;b+=3){const P=M[b+0],w=M[b+1],L=M[b+2];f.push(P,w,w,L,L,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,S=M.length/3-1;b<S;b+=3){const P=b+0,w=b+1,L=b+2;f.push(P,w,w,L,L,P)}}else return;const m=new(jc(f)?tu:eu)(f,1);m.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Ib(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*_[M];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ub(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nb(i,e,t){const n=new WeakMap,s=new At;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let S=o.attributes.position.count*b,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*P*4*h),L=new Kc(w,S,P,h);L.type=Pn,L.needsUpdate=!0;const k=b*4;for(let y=0;y<h;y++){const D=m[y],j=d[y],G=M[y],q=S*P*4*y;for(let ne=0;ne<D.count;ne++){const K=ne*k;p===!0&&(s.fromBufferAttribute(D,ne),w[q+K+0]=s.x,w[q+K+1]=s.y,w[q+K+2]=s.z,w[q+K+3]=0),g===!0&&(s.fromBufferAttribute(j,ne),w[q+K+4]=s.x,w[q+K+5]=s.y,w[q+K+6]=s.z,w[q+K+7]=0),_===!0&&(s.fromBufferAttribute(G,ne),w[q+K+8]=s.x,w[q+K+9]=s.y,w[q+K+10]=s.z,w[q+K+11]=G.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new We(S,P)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fb(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const du=new Wt,Yl=new cu(1,1),hu=new Kc,fu=new lv,pu=new su,ql=[],jl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function fs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gr(i,e){let t=jl[e];t===void 0&&(t=new Int32Array(e),jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ob(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function zb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Pt(t,n)}}function Hb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Pt(t,n)}}function Gb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Pt(t,n)}}function Wb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Yb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function qb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Jb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=qc,r=Yl):r=du,t.setTexture2D(e||r,s)}function Qb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fu,s)}function ey(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pu,s)}function ty(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hu,s)}function ny(i){switch(i){case 5126:return Ob;case 35664:return kb;case 35665:return Bb;case 35666:return Vb;case 35674:return zb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return $b;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return jb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(i,e){i.uniform1fv(this.addr,e)}function sy(i,e){const t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function ry(i,e){const t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function ay(i,e){const t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function oy(i,e){const t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ly(i,e){const t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cy(i,e){const t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uy(i,e){i.uniform1iv(this.addr,e)}function dy(i,e){i.uniform2iv(this.addr,e)}function hy(i,e){i.uniform3iv(this.addr,e)}function fy(i,e){i.uniform4iv(this.addr,e)}function py(i,e){i.uniform1uiv(this.addr,e)}function my(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function _y(i,e){i.uniform4uiv(this.addr,e)}function vy(i,e,t){const n=this.cache,s=e.length,r=Gr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||du,r[a])}function xy(i,e,t){const n=this.cache,s=e.length,r=Gr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fu,r[a])}function by(i,e,t){const n=this.cache,s=e.length,r=Gr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pu,r[a])}function yy(i,e,t){const n=this.cache,s=e.length,r=Gr(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hu,r[a])}function Sy(i){switch(i){case 5126:return iy;case 35664:return sy;case 35665:return ry;case 35666:return ay;case 35674:return oy;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return uy;case 35667:case 35671:return dy;case 35668:case 35672:return hy;case 35669:case 35673:return fy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return yy}}class My{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}}class Ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sy(t.type)}}class Ay{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Ql(i,e){i.seq.push(e),i.map[e.id]=e}function Ty(i,e,t){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),a=Ca.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ql(t,c===void 0?new My(o,i,e):new Ey(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Ay(o),Ql(t,h)),t=h}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ty(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wy=37297;let Cy=0;function Ry(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const tc=new qe;function Py(i){ct._getMatrix(tc,ct.workingColorSpace,i);const e=`mat3( ${tc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function nc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ry(i.getShaderSource(e),a)}else return s}function Ly(i,e){const t=Py(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dy(i,e){let t;switch(e){case D_:t="Linear";break;case I_:t="Reinhard";break;case U_:t="Cineon";break;case N_:t="ACESFilmic";break;case O_:t="AgX";break;case k_:t="Neutral";break;case F_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new F;function Iy(){ct.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(Oy,By)}const ky=new Map;function By(i,e){let t=Ze[e];if(t===void 0){const n=ky.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(Vy,zy)}function zy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===d_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fc:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case L_:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yy(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hy(t),c=Gy(t),u=Wy(t),h=$y(t),f=Xy(t),p=Uy(t),g=Ny(r),_=s.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),d.length>0&&(d+=`
`)):(m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),d=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==jn?Dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ao(a),a=ic(a,t),a=sc(a,t),o=Ao(o),o=ic(o,t),o=sc(o,t),a=rc(a),o=rc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=M+m+a,S=M+d+o,P=ec(s,s.VERTEX_SHADER,b),w=ec(s,s.FRAGMENT_SHADER,S);s.attachShader(_,P),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(D){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(P).trim(),q=s.getShaderInfoLog(w).trim();let ne=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{const ie=nc(s,P,"vertex"),W=nc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+ie+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||q==="")&&(K=!1);K&&(D.diagnostics={runnable:ne,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:d}})}s.deleteShader(P),s.deleteShader(w),k=new Mr(s,_),E=Fy(s,_)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,wy)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let qy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ky(e),t.set(e,n)),n}}class Ky{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function Zy(i,e,t,n,s,r,a){const o=new Zc,l=new jy,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,D,j,G){const q=j.fog,ne=G.geometry,K=E.isMeshStandardMaterial?j.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),W=ie&&ie.mapping===Vr?ie.image.height:null,he=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,fe=Se!==void 0?Se.length:0;let Je=0;ne.morphAttributes.position!==void 0&&(Je=1),ne.morphAttributes.normal!==void 0&&(Je=2),ne.morphAttributes.color!==void 0&&(Je=3);let ft,Z,re,ge;if(he){const pt=pn[he];ft=pt.vertexShader,Z=pt.fragmentShader}else ft=E.vertexShader,Z=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const oe=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),tt=G.isInstancedMesh===!0,Ne=G.isBatchedMesh===!0,ke=!!E.map,Be=!!E.matcap,Xe=!!ie,R=!!E.aoMap,Dt=!!E.lightMap,je=!!E.bumpMap,ze=!!E.normalMap,Ue=!!E.displacementMap,xt=!!E.emissiveMap,Ie=!!E.metalnessMap,A=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,Q=E.dispersion>0,te=E.iridescence>0,J=E.sheen>0,De=E.transmission>0,_e=v&&!!E.anisotropyMap,Ae=B&&!!E.clearcoatMap,at=B&&!!E.clearcoatNormalMap,ae=B&&!!E.clearcoatRoughnessMap,Te=te&&!!E.iridescenceMap,Ve=te&&!!E.iridescenceThicknessMap,He=J&&!!E.sheenColorMap,we=J&&!!E.sheenRoughnessMap,st=!!E.specularMap,Ke=!!E.specularColorMap,vt=!!E.specularIntensityMap,U=De&&!!E.transmissionMap,pe=De&&!!E.thicknessMap,$=!!E.gradientMap,ee=!!E.alphaMap,be=E.alphaTest>0,ve=!!E.alphaHash,Ye=!!E.extensions;let St=jn;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(St=i.toneMapping);const Ft={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:ft,fragmentShader:Z,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&G._colorsTexture!==null,instancing:tt,instancingColor:tt&&G.instanceColor!==null,instancingMorph:tt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ls,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:Be,envMap:Xe,envMapMode:Xe&&ie.mapping,envMapCubeUVHeight:W,aoMap:R,lightMap:Dt,bumpMap:je,normalMap:ze,displacementMap:f&&Ue,emissiveMap:xt,normalMapObjectSpace:ze&&E.normalMapType===G_,normalMapTangentSpace:ze&&E.normalMapType===H_,metalnessMap:Ie,roughnessMap:A,anisotropy:v,anisotropyMap:_e,clearcoat:B,clearcoatMap:Ae,clearcoatNormalMap:at,clearcoatRoughnessMap:ae,dispersion:Q,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:He,sheenRoughnessMap:we,specularMap:st,specularColorMap:Ke,specularIntensityMap:vt,transmission:De,transmissionMap:U,thicknessMap:pe,gradientMap:$,opaque:E.transparent===!1&&E.blending===Ki&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:be,alphaHash:ve,combine:E.combine,mapUv:ke&&_(E.map.channel),aoMapUv:R&&_(E.aoMap.channel),lightMapUv:Dt&&_(E.lightMap.channel),bumpMapUv:je&&_(E.bumpMap.channel),normalMapUv:ze&&_(E.normalMap.channel),displacementMapUv:Ue&&_(E.displacementMap.channel),emissiveMapUv:xt&&_(E.emissiveMap.channel),metalnessMapUv:Ie&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:_e&&_(E.anisotropyMap.channel),clearcoatMapUv:Ae&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(E.sheenRoughnessMap.channel),specularMapUv:st&&_(E.specularMap.channel),specularColorMapUv:Ke&&_(E.specularColorMap.channel),specularIntensityMapUv:vt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:pe&&_(E.thicknessMap.channel),alphaMapUv:ee&&_(E.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ze||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(ke||ee),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Je,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===mt,decodeVideoTextureEmissive:xt&&E.emissiveMap.isVideoTexture===!0&&ct.getTransfer(E.emissiveMap.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Rn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(y,E),b(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const y=g[E.type];let D;if(y){const j=pn[y];D=yv.clone(j.uniforms)}else D=E.uniforms;return D}function P(E,y){let D;for(let j=0,G=u.length;j<G;j++){const q=u[j];if(q.cacheKey===y){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Yy(i,y,E,r),u.push(D)),D}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:k}}function Jy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Qy),n.length>1&&n.sort(f||oc),s.length>1&&s.sort(f||oc)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function eS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new lc,i.set(n,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function nS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iS=0;function sS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rS(i){const e=new tS,t=nS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new yt,a=new yt;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,M=0,b=0,S=0,P=0,w=0,L=0;c.sort(sS);for(let E=0,y=c.length;E<y;E++){const D=c[E],j=D.color,G=D.intensity,q=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=j.r*G,h+=j.g*G,f+=j.b*G;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],G);L++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=K,p++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(j).multiplyScalar(G),K.distance=q,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[_]=K;const ie=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,ie.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=ne,S++}_++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(j).multiplyScalar(G),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const ie=D.shadow,W=t.get(D);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(G),K.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==_||k.rectAreaLength!==m||k.hemiLength!==d||k.numDirectionalShadows!==M||k.numPointShadows!==b||k.numSpotShadows!==S||k.numSpotMaps!==P||k.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=L,k.directionalLength=p,k.pointLength=g,k.spotLength=_,k.rectAreaLength=m,k.hemiLength=d,k.numDirectionalShadows=M,k.numPointShadows=b,k.numSpotShadows=S,k.numSpotMaps=P,k.numLightProbes=L,n.version=iS++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const b=c[d];if(b.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function cc(i){const e=new rS(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function aS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new cc(i),e.set(s,[o])):r>=a.length?(o=new cc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cS(i,e,t){let n=new au;const s=new We,r=new We,a=new At,o=new Iv({depthPacking:z_}),l=new Uv,c={},u=t.maxTextureSize,h={[Zn]:Yt,[Yt]:Zn,[Rn]:Rn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:oS,fragmentShader:lS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let d=this.type;this.render=function(w,L,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),j=i.state;j.setBlending(qn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=d!==Cn&&this.type===Cn,q=d===Cn&&this.type!==Cn;for(let ne=0,K=w.length;ne<K;ne++){const ie=w[ne],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const he=W.getFrameExtents();if(s.multiply(he),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||G===!0||q===!0){const fe=this.type!==Cn?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new xi(s.x,s.y,fe),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Se=W.getViewportCount();for(let fe=0;fe<Se;fe++){const Je=W.getViewport(fe);a.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),j.viewport(a),W.updateMatrices(ie,fe),n=W.getFrustum(),S(L,k,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&M(W,k),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,D)};function M(w,L){const k=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,k,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,k,p,_,null)}function b(w,L,k,E){let y=null;const D=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=k.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const j=y.uuid,G=L.uuid;let q=c[j];q===void 0&&(q={},c[j]=q);let ne=q[G];ne===void 0&&(ne=y.clone(),q[G]=ne,L.addEventListener("dispose",P)),y=ne}if(y.visible=L.visible,y.wireframe=L.wireframe,E===Cn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=i.properties.get(y);j.light=k}return y}function S(w,L,k,E,y){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const G=e.update(w),q=w.material;if(Array.isArray(q)){const ne=G.groups;for(let K=0,ie=ne.length;K<ie;K++){const W=ne[K],he=q[W.materialIndex];if(he&&he.visible){const Se=b(w,he,E,y);w.onBeforeShadow(i,w,L,k,G,Se,W),i.renderBufferDirect(k,null,G,Se,w,W),w.onAfterShadow(i,w,L,k,G,Se,W)}}}else if(q.visible){const ne=b(w,q,E,y);w.onBeforeShadow(i,w,L,k,G,ne,null),i.renderBufferDirect(k,null,G,ne,w,null),w.onAfterShadow(i,w,L,k,G,ne,null)}}const j=w.children;for(let G=0,q=j.length;G<q;G++)S(j[G],L,k,E,y)}function P(w){w.target.removeEventListener("dispose",P);for(const k in c){const E=c[k],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const uS={[ka]:Ba,[Va]:Ga,[za]:Wa,[is]:Ha,[Ba]:ka,[Ga]:Va,[Wa]:za,[Ha]:is};function dS(i,e){function t(){let U=!1;const pe=new At;let $=null;const ee=new At(0,0,0,0);return{setMask:function(be){$!==be&&!U&&(i.colorMask(be,be,be,be),$=be)},setLocked:function(be){U=be},setClear:function(be,ve,Ye,St,Ft){Ft===!0&&(be*=St,ve*=St,Ye*=St),pe.set(be,ve,Ye,St),ee.equals(pe)===!1&&(i.clearColor(be,ve,Ye,St),ee.copy(pe))},reset:function(){U=!1,$=null,ee.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,$=null,ee=null,be=null;return{setReversed:function(ve){if(pe!==ve){const Ye=e.get("EXT_clip_control");pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const St=be;be=null,this.setClear(St)}pe=ve},getReversed:function(){return pe},setTest:function(ve){ve?oe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ve){$!==ve&&!U&&(i.depthMask(ve),$=ve)},setFunc:function(ve){if(pe&&(ve=uS[ve]),ee!==ve){switch(ve){case ka:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=ve}},setLocked:function(ve){U=ve},setClear:function(ve){be!==ve&&(pe&&(ve=1-ve),i.clearDepth(ve),be=ve)},reset:function(){U=!1,$=null,ee=null,be=null,pe=!1}}}function s(){let U=!1,pe=null,$=null,ee=null,be=null,ve=null,Ye=null,St=null,Ft=null;return{setTest:function(pt){U||(pt?oe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(pt){pe!==pt&&!U&&(i.stencilMask(pt),pe=pt)},setFunc:function(pt,on,yn){($!==pt||ee!==on||be!==yn)&&(i.stencilFunc(pt,on,yn),$=pt,ee=on,be=yn)},setOp:function(pt,on,yn){(ve!==pt||Ye!==on||St!==yn)&&(i.stencilOp(pt,on,yn),ve=pt,Ye=on,St=yn)},setLocked:function(pt){U=pt},setClear:function(pt){Ft!==pt&&(i.clearStencil(pt),Ft=pt)},reset:function(){U=!1,pe=null,$=null,ee=null,be=null,ve=null,Ye=null,St=null,Ft=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,b=null,S=null,P=null,w=null,L=new rt(0,0,0),k=0,E=!1,y=null,D=null,j=null,G=null,q=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=ie>=2);let he=null,Se={};const fe=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),ft=new At().fromArray(fe),Z=new At().fromArray(Je);function re(U,pe,$,ee){const be=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<$;Ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(pe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ve}const ge={};ge[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(is),je(!1),ze(ol),oe(i.CULL_FACE),R(qn);function oe(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Le(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function tt(U,pe){return h[U]!==pe?(i.bindFramebuffer(U,pe),h[U]=pe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ne(U,pe){let $=p,ee=!1;if(U){$=f.get(pe),$===void 0&&($=[],f.set(pe,$));const be=U.textures;if($.length!==be.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ye=be.length;ve<Ye;ve++)$[ve]=i.COLOR_ATTACHMENT0+ve;$.length=be.length,ee=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ee=!0);ee&&i.drawBuffers($)}function ke(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Be={[hi]:i.FUNC_ADD,[f_]:i.FUNC_SUBTRACT,[p_]:i.FUNC_REVERSE_SUBTRACT};Be[m_]=i.MIN,Be[g_]=i.MAX;const Xe={[__]:i.ZERO,[v_]:i.ONE,[x_]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[A_]:i.SRC_ALPHA_SATURATE,[M_]:i.DST_COLOR,[y_]:i.DST_ALPHA,[b_]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[E_]:i.ONE_MINUS_DST_COLOR,[S_]:i.ONE_MINUS_DST_ALPHA,[T_]:i.CONSTANT_COLOR,[w_]:i.ONE_MINUS_CONSTANT_COLOR,[C_]:i.CONSTANT_ALPHA,[R_]:i.ONE_MINUS_CONSTANT_ALPHA};function R(U,pe,$,ee,be,ve,Ye,St,Ft,pt){if(U===qn){_===!0&&(Le(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),U!==h_){if(U!==m||pt!==E){if((d!==hi||S!==hi)&&(i.blendEquation(i.FUNC_ADD),d=hi,S=hi),pt)switch(U){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,P=null,w=null,L.set(0,0,0),k=0,m=U,E=pt}return}be=be||pe,ve=ve||$,Ye=Ye||ee,(pe!==d||be!==S)&&(i.blendEquationSeparate(Be[pe],Be[be]),d=pe,S=be),($!==M||ee!==b||ve!==P||Ye!==w)&&(i.blendFuncSeparate(Xe[$],Xe[ee],Xe[ve],Xe[Ye]),M=$,b=ee,P=ve,w=Ye),(St.equals(L)===!1||Ft!==k)&&(i.blendColor(St.r,St.g,St.b,Ft),L.copy(St),k=Ft),m=U,E=!1}function Dt(U,pe){U.side===Rn?Le(i.CULL_FACE):oe(i.CULL_FACE);let $=U.side===Yt;pe&&($=!$),je($),U.blending===Ki&&U.transparent===!1?R(qn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const ee=U.stencilWrite;o.setTest(ee),ee&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function ze(U){U!==c_?(oe(i.CULL_FACE),U!==D&&(U===ol?i.cullFace(i.BACK):U===u_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),D=U}function Ue(U){U!==j&&(K&&i.lineWidth(U),j=U)}function xt(U,pe,$){U?(oe(i.POLYGON_OFFSET_FILL),(G!==pe||q!==$)&&(i.polygonOffset(pe,$),G=pe,q=$)):Le(i.POLYGON_OFFSET_FILL)}function Ie(U){U?oe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+ne-1),he!==U&&(i.activeTexture(U),he=U)}function v(U,pe,$){$===void 0&&(he===null?$=i.TEXTURE0+ne-1:$=he);let ee=Se[$];ee===void 0&&(ee={type:void 0,texture:void 0},Se[$]=ee),(ee.type!==U||ee.texture!==pe)&&(he!==$&&(i.activeTexture($),he=$),i.bindTexture(U,pe||ge[U]),ee.type=U,ee.texture=pe)}function B(){const U=Se[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(U){ft.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ft.copy(U))}function we(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function st(U,pe){let $=c.get(pe);$===void 0&&($=new WeakMap,c.set(pe,$));let ee=$.get(U);ee===void 0&&(ee=i.getUniformBlockIndex(pe,U.name),$.set(U,ee))}function Ke(U,pe){const ee=c.get(pe).get(U);l.get(pe)!==ee&&(i.uniformBlockBinding(pe,ee,U.__bindingPointIndex),l.set(pe,ee))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,Se={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,M=null,b=null,S=null,P=null,w=null,L=new rt(0,0,0),k=0,E=!1,y=null,D=null,j=null,G=null,q=null,ft.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Le,bindFramebuffer:tt,drawBuffers:Ne,useProgram:ke,setBlending:R,setMaterial:Dt,setFlipSided:je,setCullFace:ze,setLineWidth:Ue,setPolygonOffset:xt,setScissorTest:Ie,activeTexture:A,bindTexture:v,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:Te,texImage3D:Ve,updateUBOMapping:st,uniformBlockBinding:Ke,texStorage2D:at,texStorage3D:ae,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ae,scissor:He,viewport:we,reset:vt}}function hS(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):wr("canvas")}function _(A,v,B){let Q=1;const te=Ie(A);if((te.width>B||te.height>B)&&(Q=B/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Q*te.width),De=Math.floor(Q*te.height);h===void 0&&(h=g(J,De));const _e=v?g(J,De):h;return _e.width=J,_e.height=De,_e.getContext("2d").drawImage(A,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+De+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,B,Q,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){const De=te?Ar:ct.getTransfer(Q);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=De===mt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(A,v){let B;return A?v===null||v===vi||v===as?B=i.DEPTH24_STENCIL8:v===Pn?B=i.DEPTH32F_STENCIL8:v===ws&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===as?B=i.DEPTH_COMPONENT24:v===Pn?B=i.DEPTH_COMPONENT32F:v===ws&&(B=i.DEPTH_COMPONENT16),B}function P(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),k(v),v.isVideoTexture&&u.delete(v)}function L(A){const v=A.target;v.removeEventListener("dispose",L),y(v)}function k(A){const v=n.get(A);if(v.__webglInit===void 0)return;const B=A.source,Q=f.get(B);if(Q){const te=Q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(Q).length===0&&f.delete(B)}n.remove(A)}function E(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const B=A.source,Q=f.get(B);delete Q[v.__cacheKey],a.memory.textures--}function y(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let te=0;te<v.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let Q=0,te=B.length;Q<te;Q++){const J=n.get(B[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[Q])}n.remove(A)}let D=0;function j(){D=0}function G(){const A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function ne(A,v){const B=n.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,A,v);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function K(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function ie(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Z(B,A,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function W(A,v){const B=n.get(A);if(A.version>0&&B.__version!==A.version){re(B,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const he={[Ya]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},Se={[fn]:i.NEAREST,[B_]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},fe={[W_]:i.NEVER,[K_]:i.ALWAYS,[$_]:i.LESS,[qc]:i.LEQUAL,[X_]:i.EQUAL,[j_]:i.GEQUAL,[Y_]:i.GREATER,[q_]:i.NOTEQUAL};function Je(A,v){if(v.type===Pn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===jr||v.magFilter===Os||v.magFilter===mi||v.minFilter===gn||v.minFilter===jr||v.minFilter===Os||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Se[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==Os&&v.minFilter!==mi||v.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ft(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const Q=v.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const J=q(v);if(J!==A.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[J].usedTimes++;const De=te[A.__cacheKey];De!==void 0&&(te[A.__cacheKey].usedTimes--,De.usedTimes===0&&E(v)),A.__cacheKey=J,A.__webglTexture=te[J].texture}return B}function Z(A,v,B){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);const te=ft(A,v),J=v.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+B);const De=n.get(J);if(J.version!==De.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const _e=ct.getPrimaries(ct.workingColorSpace),Ae=v.colorSpace===Xn?null:ct.getPrimaries(v.colorSpace),at=v.colorSpace===Xn||_e===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ae=_(v.image,!1,s.maxTextureSize);ae=xt(v,ae);const Te=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type);let He=b(v.internalFormat,Te,Ve,v.colorSpace,v.isVideoTexture);Je(Q,v);let we;const st=v.mipmaps,Ke=v.isVideoTexture!==!0,vt=De.__version===void 0||te===!0,U=J.dataReady,pe=P(v,ae);if(v.isDepthTexture)He=S(v.format===os,v.type),vt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,He,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,He,ae.width,ae.height,0,Te,Ve,null));else if(v.isDataTexture)if(st.length>0){Ke&&vt&&t.texStorage2D(i.TEXTURE_2D,pe,He,st[0].width,st[0].height);for(let $=0,ee=st.length;$<ee;$++)we=st[$],Ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,we.width,we.height,Te,Ve,we.data):t.texImage2D(i.TEXTURE_2D,$,He,we.width,we.height,0,Te,Ve,we.data);v.generateMipmaps=!1}else Ke?(vt&&t.texStorage2D(i.TEXTURE_2D,pe,He,ae.width,ae.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Ve,ae.data)):t.texImage2D(i.TEXTURE_2D,0,He,ae.width,ae.height,0,Te,Ve,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,He,st[0].width,st[0].height,ae.depth);for(let $=0,ee=st.length;$<ee;$++)if(we=st[$],v.format!==hn)if(Te!==null)if(Ke){if(U)if(v.layerUpdates.size>0){const be=Bl(we.width,we.height,v.format,v.type);for(const ve of v.layerUpdates){const Ye=we.data.subarray(ve*be/we.data.BYTES_PER_ELEMENT,(ve+1)*be/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ve,we.width,we.height,1,Te,Ye)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,ae.depth,Te,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,He,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,we.width,we.height,ae.depth,Te,Ve,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,He,we.width,we.height,ae.depth,0,Te,Ve,we.data)}else{Ke&&vt&&t.texStorage2D(i.TEXTURE_2D,pe,He,st[0].width,st[0].height);for(let $=0,ee=st.length;$<ee;$++)we=st[$],v.format!==hn?Te!==null?Ke?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,we.width,we.height,Te,we.data):t.compressedTexImage2D(i.TEXTURE_2D,$,He,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,we.width,we.height,Te,Ve,we.data):t.texImage2D(i.TEXTURE_2D,$,He,we.width,we.height,0,Te,Ve,we.data)}else if(v.isDataArrayTexture)if(Ke){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,He,ae.width,ae.height,ae.depth),U)if(v.layerUpdates.size>0){const $=Bl(ae.width,ae.height,v.format,v.type);for(const ee of v.layerUpdates){const be=ae.data.subarray(ee*$/ae.data.BYTES_PER_ELEMENT,(ee+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,Te,Ve,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ve,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ae.width,ae.height,ae.depth,0,Te,Ve,ae.data);else if(v.isData3DTexture)Ke?(vt&&t.texStorage3D(i.TEXTURE_3D,pe,He,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ve,ae.data)):t.texImage3D(i.TEXTURE_3D,0,He,ae.width,ae.height,ae.depth,0,Te,Ve,ae.data);else if(v.isFramebufferTexture){if(vt)if(Ke)t.texStorage2D(i.TEXTURE_2D,pe,He,ae.width,ae.height);else{let $=ae.width,ee=ae.height;for(let be=0;be<pe;be++)t.texImage2D(i.TEXTURE_2D,be,He,$,ee,0,Te,Ve,null),$>>=1,ee>>=1}}else if(st.length>0){if(Ke&&vt){const $=Ie(st[0]);t.texStorage2D(i.TEXTURE_2D,pe,He,$.width,$.height)}for(let $=0,ee=st.length;$<ee;$++)we=st[$],Ke?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Te,Ve,we):t.texImage2D(i.TEXTURE_2D,$,He,Te,Ve,we);v.generateMipmaps=!1}else if(Ke){if(vt){const $=Ie(ae);t.texStorage2D(i.TEXTURE_2D,pe,He,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ve,ae)}else t.texImage2D(i.TEXTURE_2D,0,He,Te,Ve,ae);m(v)&&d(Q),De.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function re(A,v,B){if(v.image.length!==6)return;const Q=ft(A,v),te=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const J=n.get(te);if(te.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const De=ct.getPrimaries(ct.workingColorSpace),_e=v.colorSpace===Xn?null:ct.getPrimaries(v.colorSpace),Ae=v.colorSpace===Xn||De===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const at=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let ee=0;ee<6;ee++)!at&&!ae?Te[ee]=_(v.image[ee],!0,s.maxCubemapSize):Te[ee]=ae?v.image[ee].image:v.image[ee],Te[ee]=xt(v,Te[ee]);const Ve=Te[0],He=r.convert(v.format,v.colorSpace),we=r.convert(v.type),st=b(v.internalFormat,He,we,v.colorSpace),Ke=v.isVideoTexture!==!0,vt=J.__version===void 0||Q===!0,U=te.dataReady;let pe=P(v,Ve);Je(i.TEXTURE_CUBE_MAP,v);let $;if(at){Ke&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,st,Ve.width,Ve.height);for(let ee=0;ee<6;ee++){$=Te[ee].mipmaps;for(let be=0;be<$.length;be++){const ve=$[be];v.format!==hn?He!==null?Ke?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,ve.width,ve.height,He,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,st,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,ve.width,ve.height,He,we,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,st,ve.width,ve.height,0,He,we,ve.data)}}}else{if($=v.mipmaps,Ke&&vt){$.length>0&&pe++;const ee=Ie(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,st,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Te[ee].width,Te[ee].height,He,we,Te[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,Te[ee].width,Te[ee].height,0,He,we,Te[ee].data);for(let be=0;be<$.length;be++){const Ye=$[be].image[ee].image;Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Ye.width,Ye.height,He,we,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,st,Ye.width,Ye.height,0,He,we,Ye.data)}}else{Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,we,Te[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,He,we,Te[ee]);for(let be=0;be<$.length;be++){const ve=$[be];Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,He,we,ve.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,st,He,we,ve.image[ee])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),J.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ge(A,v,B,Q,te,J){const De=r.convert(B.format,B.colorSpace),_e=r.convert(B.type),Ae=b(B.internalFormat,De,_e,B.colorSpace),at=n.get(v),ae=n.get(B);if(ae.__renderTarget=v,!at.__hasExternalTextures){const Te=Math.max(1,v.width>>J),Ve=Math.max(1,v.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Ae,Te,Ve,v.depth,0,De,_e,null):t.texImage2D(te,J,Ae,Te,Ve,0,De,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,te,ae.__webglTexture,0,je(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,te,ae.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(A,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const Q=v.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=S(v.stencilBuffer,te),De=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=je(v);ze(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,J,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{const Q=v.textures;for(let te=0;te<Q.length;te++){const J=Q[te],De=r.convert(J.format,J.colorSpace),_e=r.convert(J.type),Ae=b(J.internalFormat,De,_e,J.colorSpace),at=je(v);B&&ze(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Ae,v.width,v.height):ze(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(v.depthTexture);Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne(v.depthTexture,0);const te=Q.__webglTexture,J=je(v);if(v.depthTexture.format===Zi)ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===os)ze(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function tt(A){const v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=i.createRenderbuffer(),oe(v.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),oe(v.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(A,v,B){const Q=n.get(A);v!==void 0&&ge(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&tt(A)}function ke(A){const v=A.texture,B=n.get(A),Q=n.get(v);A.addEventListener("dispose",L);const te=A.textures,J=A.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)B.__webglFramebuffer[_e][Ae]=i.createFramebuffer()}else B.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<v.mipmaps.length;_e++)B.__webglFramebuffer[_e]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(De)for(let _e=0,Ae=te.length;_e<Ae;_e++){const at=n.get(te[_e]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ze(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<te.length;_e++){const Ae=te[_e];B.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const at=r.convert(Ae.format,Ae.colorSpace),ae=r.convert(Ae.type),Te=b(Ae.internalFormat,at,ae,Ae.colorSpace,A.isXRRenderTarget===!0),Ve=je(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Je(i.TEXTURE_CUBE_MAP,v);for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ge(B.__webglFramebuffer[_e][Ae],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ae);else ge(B.__webglFramebuffer[_e],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let _e=0,Ae=te.length;_e<Ae;_e++){const at=te[_e],ae=n.get(at);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Je(i.TEXTURE_2D,at),ge(B.__webglFramebuffer,A,at,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),m(at)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Q.__webglTexture),Je(_e,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)ge(B.__webglFramebuffer[Ae],A,v,i.COLOR_ATTACHMENT0,_e,Ae);else ge(B.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,_e,0);m(v)&&d(_e),t.unbindTexture()}A.depthBuffer&&tt(A)}function Be(A){const v=A.textures;for(let B=0,Q=v.length;B<Q;B++){const te=v[B];if(m(te)){const J=M(A),De=n.get(te).__webglTexture;t.bindTexture(J,De),d(J),t.unbindTexture()}}}const Xe=[],R=[];function Dt(A){if(A.samples>0){if(ze(A)===!1){const v=A.textures,B=A.width,Q=A.height;let te=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),_e=v.length>1;if(_e)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const at=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,te,i.NEAREST),l===!0&&(Xe.length=0,R.length=0,Xe.push(i.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xe.push(J),R.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const at=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function je(A){return Math.min(s.maxSamples,A.samples)}function ze(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ue(A){const v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function xt(A,v){const B=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ls&&B!==Xn&&(ct.getTransfer(B)===mt?(Q!==hn||te!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ze}function fS(i,e){function t(n,s=Xn){let r;const a=ct.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===Hc)return i.RGB;if(n===hn)return i.RGBA;if(n===Gc)return i.LUMINANCE;if(n===Wc)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===gr||n===_r||n===vr||n===xr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===Ka||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===eo||n===to)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===eo)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===to)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===no)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===io)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===co)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===po)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===go)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===_o||n===vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===xo||n===bo||n===yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dn(new Hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _S extends Mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new gS,m=t.getContextAttributes();let d=null,M=null;const b=[],S=[],P=new We;let w=null;const L=new rn;L.viewport=new At;const k=new rn;k.viewport=new At;const E=[L,k],y=new Fv;let D=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=b[Z];return re===void 0&&(re=new ga,b[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=b[Z];return re===void 0&&(re=new ga,b[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=b[Z];return re===void 0&&(re=new ga,b[Z]=re),re.getHandSpace()};function G(Z){const re=S.indexOf(Z.inputSource);if(re===-1)return;const ge=b[re];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,c||a),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<b.length;Z++){const re=S[Z];re!==null&&(S[Z]=null,b[Z].disconnect(re))}D=null,j=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,M=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?os:Zi,oe=m.stencil?as:vi);const tt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new xi(f.textureWidth,f.textureHeight,{format:hn,type:Nn,depthTexture:new cu(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new xi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(Z){for(let re=0;re<Z.removed.length;re++){const ge=Z.removed[re],oe=S.indexOf(ge);oe>=0&&(S[oe]=null,b[oe].disconnect(ge))}for(let re=0;re<Z.added.length;re++){const ge=Z.added[re];let oe=S.indexOf(ge);if(oe===-1){for(let tt=0;tt<b.length;tt++)if(tt>=S.length){S.push(ge),oe=tt;break}else if(S[tt]===null){S[tt]=ge,oe=tt;break}if(oe===-1)break}const Le=b[oe];Le&&Le.connect(ge)}}const K=new F,ie=new F;function W(Z,re,ge){K.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const oe=K.distanceTo(ie),Le=re.projectionMatrix.elements,tt=ge.projectionMatrix.elements,Ne=Le[14]/(Le[10]-1),ke=Le[14]/(Le[10]+1),Be=(Le[9]+1)/Le[5],Xe=(Le[9]-1)/Le[5],R=(Le[8]-1)/Le[0],Dt=(tt[8]+1)/tt[0],je=Ne*R,ze=Ne*Dt,Ue=oe/(-R+Dt),xt=Ue*-R;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(Ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Le[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ie=Ne+Ue,A=ke+Ue,v=je-xt,B=ze+(oe-xt),Q=Be*ke/A*Ie,te=Xe*ke/A*Ie;Z.projectionMatrix.makePerspective(v,B,Q,te,Ie,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,ge=Z.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),y.near=k.near=L.near=re,y.far=k.far=L.far=ge,(D!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,j=y.far),L.layers.mask=Z.layers.mask|2,k.layers.mask=Z.layers.mask|4,y.layers.mask=L.layers.mask|k.layers.mask;const oe=Z.parent,Le=y.cameras;he(y,oe);for(let tt=0;tt<Le.length;tt++)he(Le[tt],oe);Le.length===2?W(y,L,k):y.projectionMatrix.copy(L.projectionMatrix),Se(Z,y,oe)};function Se(Z,re,ge){ge===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let fe=null;function Je(Z,re){if(u=re.getViewerPose(c||a),g=re,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let oe=!1;ge.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ne=0;Ne<ge.length;Ne++){const ke=ge[Ne];let Be=null;if(p!==null)Be=p.getViewport(ke);else{const R=h.getViewSubImage(f,ke);Be=R.viewport,Ne===0&&(e.setRenderTargetTextures(M,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(M))}let Xe=E[Ne];Xe===void 0&&(Xe=new rn,Xe.layers.enable(Ne),Xe.viewport=new At,E[Ne]=Xe),Xe.matrix.fromArray(ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ne===0&&(y.matrix.copy(Xe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Xe)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Ne=h.getDepthInformation(ge[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,s.renderState)}}for(let ge=0;ge<b.length;ge++){const oe=S[ge],Le=b[ge];oe!==null&&Le!==void 0&&Le.update(oe,re,c||a)}fe&&fe(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const ft=new uu;ft.setAnimationLoop(Je),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}}const ci=new Fn,vS=new yt;function xS(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,nu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,b,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d),b=M.envMap,S=M.envMapRotation;b&&(m.envMap.value=b,ci.copy(S),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bS(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const S=b.program;n.uniformBlockBinding(M,S)}function c(M,b){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(M,P);const w=e.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function u(M){const b=h();M.__bindingPointIndex=b;const S=i.createBuffer(),P=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=s[M.id],S=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,L=S.length;w<L;w++){const k=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,y=k.length;E<y;E++){const D=k[E];if(p(D,w,E,P)===!0){const j=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let ne=0;ne<G.length;ne++){const K=G[ne],ie=_(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,j+q,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,b,S,P){const w=M.value,L=b+"_"+S;if(P[L]===void 0)return typeof w=="number"||typeof w=="boolean"?P[L]=w:P[L]=w.clone(),!0;{const k=P[L];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return P[L]=w,!0}else if(k.equals(w)===!1)return k.copy(w),!0}return!1}function g(M){const b=M.uniforms;let S=0;const P=16;for(let L=0,k=b.length;L<k;L++){const E=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,D=E.length;y<D;y++){const j=E[y],G=Array.isArray(j.value)?j.value:[j.value];for(let q=0,ne=G.length;q<ne;q++){const K=G[q],ie=_(K),W=S%P,he=W%ie.boundary,Se=W+he;S+=he,Se!==0&&P-Se<ie.storage&&(S+=P-Se),j.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=ie.storage}}}const w=S%P;return w>0&&(S+=P-w),M.__size=S,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class yS{constructor(e={}){const{canvas:t=Q_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=jn,this.toneMappingExposure=1;const S=this;let P=!1,w=0,L=0,k=null,E=-1,y=null;const D=new At,j=new At;let G=null;const q=new rt(0);let ne=0,K=t.width,ie=t.height,W=1,he=null,Se=null;const fe=new At(0,0,K,ie),Je=new At(0,0,K,ie);let ft=!1;const Z=new au;let re=!1,ge=!1;this.transmissionResolutionScale=1;const oe=new yt,Le=new yt,tt=new F,Ne=new At,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Xe(){return k===null?W:1}let R=n;function Dt(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ve,!1),R===null){const N="webgl2";if(R=Dt(N,x),R===null)throw Dt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,ze,Ue,xt,Ie,A,v,B,Q,te,J,De,_e,Ae,at,ae,Te,Ve,He,we,st,Ke,vt,U;function pe(){je=new Lb(R),je.init(),Ke=new fS(R,je),ze=new Eb(R,je,e,Ke),Ue=new dS(R,je),ze.reverseDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),xt=new Ub(R),Ie=new Jy,A=new hS(R,je,Ue,Ie,ze,Ke,xt),v=new Tb(S),B=new Pb(S),Q=new Vv(R),vt=new Sb(R,Q),te=new Db(R,Q,xt,vt),J=new Fb(R,te,Q,xt),He=new Nb(R,ze,A),ae=new Ab(Ie),De=new Zy(S,v,B,je,ze,vt,ae),_e=new xS(S,Ie),Ae=new eS,at=new aS(je),Ve=new yb(S,v,B,Ue,J,p,l),Te=new cS(S,J,ze),U=new bS(R,xt,ze,Ue),we=new Mb(R,je,xt),st=new Ib(R,je,xt),xt.programs=De.programs,S.capabilities=ze,S.extensions=je,S.properties=Ie,S.renderLists=Ae,S.shadowMap=Te,S.state=Ue,S.info=xt}pe();const $=new _S(S,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(K,ie,!1))},this.getSize=function(x){return x.set(K,ie)},this.setSize=function(x,N,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,ie=N,t.width=Math.floor(x*W),t.height=Math.floor(N*W),V===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(K*W,ie*W).floor()},this.setDrawingBufferSize=function(x,N,V){K=x,ie=N,W=V,t.width=Math.floor(x*V),t.height=Math.floor(N*V),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,N,V,H){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,N,V,H),Ue.viewport(D.copy(fe).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Je)},this.setScissor=function(x,N,V,H){x.isVector4?Je.set(x.x,x.y,x.z,x.w):Je.set(x,N,V,H),Ue.scissor(j.copy(Je).multiplyScalar(W).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(x){Ue.setScissorTest(ft=x)},this.setOpaqueSort=function(x){he=x},this.setTransparentSort=function(x){Se=x},this.getClearColor=function(x){return x.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,V=!0){let H=0;if(x){let O=!1;if(k!==null){const se=k.texture.format;O=se===Xo||se===$o||se===Wo}if(O){const se=k.texture.type,me=se===Nn||se===vi||se===ws||se===as||se===Ho||se===Go,Ee=Ve.getClearColor(),Ce=Ve.getClearAlpha(),Ge=Ee.r,$e=Ee.g,Fe=Ee.b;me?(g[0]=Ge,g[1]=$e,g[2]=Fe,g[3]=Ce,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ge,_[1]=$e,_[2]=Fe,_[3]=Ce,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),V&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ve.dispose(),Ae.dispose(),at.dispose(),Ie.dispose(),v.dispose(),B.dispose(),J.dispose(),vt.dispose(),U.dispose(),De.dispose(),$.dispose(),$.removeEventListener("sessionstart",Zo),$.removeEventListener("sessionend",Jo),ni.stop()};function ee(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=xt.autoReset,N=Te.enabled,V=Te.autoUpdate,H=Te.needsUpdate,O=Te.type;pe(),xt.autoReset=x,Te.enabled=N,Te.autoUpdate=V,Te.needsUpdate=H,Te.type=O}function ve(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ye(x){const N=x.target;N.removeEventListener("dispose",Ye),St(N)}function St(x){Ft(x),Ie.remove(x)}function Ft(x){const N=Ie.get(x).programs;N!==void 0&&(N.forEach(function(V){De.releaseProgram(V)}),x.isShaderMaterial&&De.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,V,H,O,se){N===null&&(N=ke);const me=O.isMesh&&O.matrixWorld.determinant()<0,Ee=yu(x,N,V,H,O);Ue.setMaterial(H,me);let Ce=V.index,Ge=1;if(H.wireframe===!0){if(Ce=te.getWireframeAttribute(V),Ce===void 0)return;Ge=2}const $e=V.drawRange,Fe=V.attributes.position;let ot=$e.start*Ge,dt=($e.start+$e.count)*Ge;se!==null&&(ot=Math.max(ot,se.start*Ge),dt=Math.min(dt,(se.start+se.count)*Ge)),Ce!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Ce.count)):Fe!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,Fe.count));const Tt=dt-ot;if(Tt<0||Tt===1/0)return;vt.setup(O,H,Ee,V,Ce);let Mt,lt=we;if(Ce!==null&&(Mt=Q.get(Ce),lt=st,lt.setIndex(Mt)),O.isMesh)H.wireframe===!0?(Ue.setLineWidth(H.wireframeLinewidth*Xe()),lt.setMode(R.LINES)):lt.setMode(R.TRIANGLES);else if(O.isLine){let Oe=H.linewidth;Oe===void 0&&(Oe=1),Ue.setLineWidth(Oe*Xe()),O.isLineSegments?lt.setMode(R.LINES):O.isLineLoop?lt.setMode(R.LINE_LOOP):lt.setMode(R.LINE_STRIP)}else O.isPoints?lt.setMode(R.POINTS):O.isSprite&&lt.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Oe=O._multiDrawStarts,Ut=O._multiDrawCounts,ht=O._multiDrawCount,ln=Ce?Q.get(Ce).bytesPerElement:1,Ai=Ie.get(H).currentProgram.getUniforms();for(let jt=0;jt<ht;jt++)Ai.setValue(R,"_gl_DrawID",jt),lt.render(Oe[jt]/ln,Ut[jt])}else if(O.isInstancedMesh)lt.renderInstances(ot,Tt,O.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ut=Math.min(V.instanceCount,Oe);lt.renderInstances(ot,Tt,Ut)}else lt.render(ot,Tt)};function pt(x,N,V){x.transparent===!0&&x.side===Rn&&x.forceSinglePass===!1?(x.side=Yt,x.needsUpdate=!0,Fs(x,N,V),x.side=Zn,x.needsUpdate=!0,Fs(x,N,V),x.side=Rn):Fs(x,N,V)}this.compile=function(x,N,V=null){V===null&&(V=x),d=at.get(V),d.init(N),b.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),x!==V&&x.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const H=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const Ee=se[me];pt(Ee,V,O),H.add(Ee)}else pt(se,V,O),H.add(se)}),d=b.pop(),H},this.compileAsync=function(x,N,V=null){const H=this.compile(x,N,V);return new Promise(O=>{function se(){if(H.forEach(function(me){Ie.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){O(x);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let on=null;function yn(x){on&&on(x)}function Zo(){ni.stop()}function Jo(){ni.start()}const ni=new uu;ni.setAnimationLoop(yn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(x){on=x,$.setAnimationLoop(x),x===null?ni.stop():ni.start()},$.addEventListener("sessionstart",Zo),$.addEventListener("sessionend",Jo),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,N,k),d=at.get(x,b.length),d.init(N),b.push(d),Le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Le),ge=this.localClippingEnabled,re=ae.init(this.clippingPlanes,ge),m=Ae.get(x,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Wr(se,N,-1/0,S.sortObjects)}Wr(x,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(he,Se),Be=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Be&&Ve.addToRenderList(m,x),this.info.render.frame++,re===!0&&ae.beginShadows();const V=d.state.shadowsArray;Te.render(V,x,N),re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(d.setupLights(),N.isArrayCamera){const se=N.cameras;if(O.length>0)for(let me=0,Ee=se.length;me<Ee;me++){const Ce=se[me];el(H,O,x,Ce)}Be&&Ve.render(x);for(let me=0,Ee=se.length;me<Ee;me++){const Ce=se[me];Qo(m,x,Ce,Ce.viewport)}}else O.length>0&&el(H,O,x,N),Be&&Ve.render(x),Qo(m,x,N);k!==null&&L===0&&(A.updateMultisampleRenderTarget(k),A.updateRenderTargetMipmap(k)),x.isScene===!0&&x.onAfterRender(S,x,N),vt.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],re===!0&&ae.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Wr(x,N,V,H){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){H&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Le);const me=J.update(x),Ee=x.material;Ee.visible&&m.push(x,me,Ee,V,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){const me=J.update(x),Ee=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(Le)),Array.isArray(Ee)){const Ce=me.groups;for(let Ge=0,$e=Ce.length;Ge<$e;Ge++){const Fe=Ce[Ge],ot=Ee[Fe.materialIndex];ot&&ot.visible&&m.push(x,me,ot,V,Ne.z,Fe)}}else Ee.visible&&m.push(x,me,Ee,V,Ne.z,null)}}const se=x.children;for(let me=0,Ee=se.length;me<Ee;me++)Wr(se[me],N,V,H)}function Qo(x,N,V,H){const O=x.opaque,se=x.transmissive,me=x.transparent;d.setupLightsView(V),re===!0&&ae.setGlobalState(S.clippingPlanes,V),H&&Ue.viewport(D.copy(H)),O.length>0&&Ns(O,N,V),se.length>0&&Ns(se,N,V),me.length>0&&Ns(me,N,V),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function el(x,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new xi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Is:Nn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const se=d.state.transmissionRenderTarget[H.id],me=H.viewport||D;se.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);const Ee=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(q),ne=S.getClearAlpha(),ne<1&&S.setClearColor(16777215,.5),S.clear(),Be&&Ve.render(V);const Ce=S.toneMapping;S.toneMapping=jn;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),re===!0&&ae.setGlobalState(S.clippingPlanes,H),Ns(x,V,H),A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Fe=0,ot=N.length;Fe<ot;Fe++){const dt=N[Fe],Tt=dt.object,Mt=dt.geometry,lt=dt.material,Oe=dt.group;if(lt.side===Rn&&Tt.layers.test(H.layers)){const Ut=lt.side;lt.side=Yt,lt.needsUpdate=!0,tl(Tt,V,H,Mt,lt,Oe),lt.side=Ut,lt.needsUpdate=!0,$e=!0}}$e===!0&&(A.updateMultisampleRenderTarget(se),A.updateRenderTargetMipmap(se))}S.setRenderTarget(Ee),S.setClearColor(q,ne),Ge!==void 0&&(H.viewport=Ge),S.toneMapping=Ce}function Ns(x,N,V){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,se=x.length;O<se;O++){const me=x[O],Ee=me.object,Ce=me.geometry,Ge=H===null?me.material:H,$e=me.group;Ee.layers.test(V.layers)&&tl(Ee,N,V,Ce,Ge,$e)}}function tl(x,N,V,H,O,se){x.onBeforeRender(S,N,V,H,O,se),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(S,N,V,H,x,se),O.transparent===!0&&O.side===Rn&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,S.renderBufferDirect(V,N,H,O,x,se),O.side=Zn,O.needsUpdate=!0,S.renderBufferDirect(V,N,H,O,x,se),O.side=Rn):S.renderBufferDirect(V,N,H,O,x,se),x.onAfterRender(S,N,V,H,O,se)}function Fs(x,N,V){N.isScene!==!0&&(N=ke);const H=Ie.get(x),O=d.state.lights,se=d.state.shadowsArray,me=O.state.version,Ee=De.getParameters(x,O.state,se,N,V),Ce=De.getProgramCacheKey(Ee);let Ge=H.programs;H.environment=x.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(x.isMeshStandardMaterial?B:v).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ge===void 0&&(x.addEventListener("dispose",Ye),Ge=new Map,H.programs=Ge);let $e=Ge.get(Ce);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===me)return il(x,Ee),$e}else Ee.uniforms=De.getUniforms(x),x.onBeforeCompile(Ee,S),$e=De.acquireProgram(Ee,Ce),Ge.set(Ce,$e),H.uniforms=Ee.uniforms;const Fe=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Fe.clippingPlanes=ae.uniform),il(x,Ee),H.needsLights=Mu(x),H.lightsStateVersion=me,H.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=$e,H.uniformsList=null,$e}function nl(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Mr.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function il(x,N){const V=Ie.get(x);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function yu(x,N,V,H,O){N.isScene!==!0&&(N=ke),A.resetTextureUnits();const se=N.fog,me=H.isMeshStandardMaterial?N.environment:null,Ee=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ls,Ce=(H.isMeshStandardMaterial?B:v).get(H.envMap||me),Ge=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let Tt=jn;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Tt=S.toneMapping);const Mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=Mt!==void 0?Mt.length:0,Oe=Ie.get(H),Ut=d.state.lights;if(re===!0&&(ge===!0||x!==y)){const zt=x===y&&H.id===E;ae.setState(H,x,zt)}let ht=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Ut.state.version||Oe.outputColorSpace!==Ee||O.isBatchedMesh&&Oe.batching===!1||!O.isBatchedMesh&&Oe.batching===!0||O.isBatchedMesh&&Oe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Oe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Oe.instancing===!1||!O.isInstancedMesh&&Oe.instancing===!0||O.isSkinnedMesh&&Oe.skinning===!1||!O.isSkinnedMesh&&Oe.skinning===!0||O.isInstancedMesh&&Oe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Oe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Oe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Oe.instancingMorph===!1&&O.morphTexture!==null||Oe.envMap!==Ce||H.fog===!0&&Oe.fog!==se||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ae.numPlanes||Oe.numIntersection!==ae.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==$e||Oe.morphTargets!==Fe||Oe.morphNormals!==ot||Oe.morphColors!==dt||Oe.toneMapping!==Tt||Oe.morphTargetsCount!==lt)&&(ht=!0):(ht=!0,Oe.__version=H.version);let ln=Oe.currentProgram;ht===!0&&(ln=Fs(H,N,O));let Ai=!1,jt=!1,ps=!1;const bt=ln.getUniforms(),en=Oe.uniforms;if(Ue.useProgram(ln.program)&&(Ai=!0,jt=!0,ps=!0),H.id!==E&&(E=H.id,jt=!0),Ai||y!==x){Ue.buffers.depth.getReversed()?(oe.copy(x.projectionMatrix),tv(oe),nv(oe),bt.setValue(R,"projectionMatrix",oe)):bt.setValue(R,"projectionMatrix",x.projectionMatrix),bt.setValue(R,"viewMatrix",x.matrixWorldInverse);const $t=bt.map.cameraPosition;$t!==void 0&&$t.setValue(R,tt.setFromMatrixPosition(x.matrixWorld)),ze.logarithmicDepthBuffer&&bt.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&bt.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,jt=!0,ps=!0)}if(O.isSkinnedMesh){bt.setOptional(R,O,"bindMatrix"),bt.setOptional(R,O,"bindMatrixInverse");const zt=O.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),bt.setValue(R,"boneTexture",zt.boneTexture,A))}O.isBatchedMesh&&(bt.setOptional(R,O,"batchingTexture"),bt.setValue(R,"batchingTexture",O._matricesTexture,A),bt.setOptional(R,O,"batchingIdTexture"),bt.setValue(R,"batchingIdTexture",O._indirectTexture,A),bt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&bt.setValue(R,"batchingColorTexture",O._colorsTexture,A));const tn=V.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&He.update(O,V,ln),(jt||Oe.receiveShadow!==O.receiveShadow)&&(Oe.receiveShadow=O.receiveShadow,bt.setValue(R,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=Ce,en.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(en.envMapIntensity.value=N.environmentIntensity),jt&&(bt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&Su(en,ps),se&&H.fog===!0&&_e.refreshFogUniforms(en,se),_e.refreshMaterialUniforms(en,H,W,ie,d.state.transmissionRenderTarget[x.id]),Mr.upload(R,nl(Oe),en,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Mr.upload(R,nl(Oe),en,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&bt.setValue(R,"center",O.center),bt.setValue(R,"modelViewMatrix",O.modelViewMatrix),bt.setValue(R,"normalMatrix",O.normalMatrix),bt.setValue(R,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const zt=H.uniformsGroups;for(let $t=0,$r=zt.length;$t<$r;$t++){const ii=zt[$t];U.update(ii,ln),U.bind(ii,ln)}}return ln}function Su(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Mu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,N,V){Ie.get(x.texture).__webglTexture=N,Ie.get(x.depthTexture).__webglTexture=V;const H=Ie.get(x);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,N){const V=Ie.get(x);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Eu=R.createFramebuffer();this.setRenderTarget=function(x,N=0,V=0){k=x,w=N,L=V;let H=!0,O=null,se=!1,me=!1;if(x){const Ce=Ie.get(x);if(Ce.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Ce.__webglFramebuffer===void 0)A.setupRenderTarget(x);else if(Ce.__hasExternalTextures)A.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(Ce.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(x)}}const Ge=x.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(me=!0);const $e=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray($e[N])?O=$e[N][V]:O=$e[N],se=!0):x.samples>0&&A.useMultisampledRTT(x)===!1?O=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray($e)?O=$e[V]:O=$e,D.copy(x.viewport),j.copy(x.scissor),G=x.scissorTest}else D.copy(fe).multiplyScalar(W).floor(),j.copy(Je).multiplyScalar(W).floor(),G=ft;if(V!==0&&(O=Eu),Ue.bindFramebuffer(R.FRAMEBUFFER,O)&&H&&Ue.drawBuffers(x,O),Ue.viewport(D),Ue.scissor(j),Ue.setScissorTest(G),se){const Ce=Ie.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,V)}else if(me){const Ce=Ie.get(x.texture),Ge=N;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.__webglTexture,V,Ge)}else if(x!==null&&V!==0){const Ce=Ie.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(x,N,V,H,O,se,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){Ue.bindFramebuffer(R.FRAMEBUFFER,Ee);try{const Ce=x.texture,Ge=Ce.format,$e=Ce.type;if(!ze.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-H&&V>=0&&V<=x.height-O&&R.readPixels(N,V,H,O,Ke.convert(Ge),Ke.convert($e),se)}finally{const Ce=k!==null?Ie.get(k).__webglFramebuffer:null;Ue.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,N,V,H,O,se,me){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){const Ce=x.texture,Ge=Ce.format,$e=Ce.type;if(!ze.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=x.width-H&&V>=0&&V<=x.height-O){Ue.bindFramebuffer(R.FRAMEBUFFER,Ee);const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,se.byteLength,R.STREAM_READ),R.readPixels(N,V,H,O,Ke.convert(Ge),Ke.convert($e),0);const ot=k!==null?Ie.get(k).__webglFramebuffer:null;Ue.bindFramebuffer(R.FRAMEBUFFER,ot);const dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ev(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,se),R.deleteBuffer(Fe),R.deleteSync(dt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,N=null,V=0){x.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1]);const H=Math.pow(2,-V),O=Math.floor(x.image.width*H),se=Math.floor(x.image.height*H),me=N!==null?N.x:0,Ee=N!==null?N.y:0;A.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,me,Ee,O,se),Ue.unbindTexture()};const Au=R.createFramebuffer(),Tu=R.createFramebuffer();this.copyTextureToTexture=function(x,N,V=null,H=null,O=0,se=null){x.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,x=arguments[1],N=arguments[2],se=arguments[3]||0,V=null),se===null&&(O!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let me,Ee,Ce,Ge,$e,Fe,ot,dt,Tt;const Mt=x.isCompressedTexture?x.mipmaps[se]:x.image;if(V!==null)me=V.max.x-V.min.x,Ee=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Ge=V.min.x,$e=V.min.y,Fe=V.isBox3?V.min.z:0;else{const tn=Math.pow(2,-O);me=Math.floor(Mt.width*tn),Ee=Math.floor(Mt.height*tn),x.isDataArrayTexture?Ce=Mt.depth:x.isData3DTexture?Ce=Math.floor(Mt.depth*tn):Ce=1,Ge=0,$e=0,Fe=0}H!==null?(ot=H.x,dt=H.y,Tt=H.z):(ot=0,dt=0,Tt=0);const lt=Ke.convert(N.format),Oe=Ke.convert(N.type);let Ut;N.isData3DTexture?(A.setTexture3D(N,0),Ut=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ut=R.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=R.getParameter(R.UNPACK_ROW_LENGTH),ln=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ai=R.getParameter(R.UNPACK_SKIP_PIXELS),jt=R.getParameter(R.UNPACK_SKIP_ROWS),ps=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,$e),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fe);const bt=x.isDataArrayTexture||x.isData3DTexture,en=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const tn=Ie.get(x),zt=Ie.get(N),$t=Ie.get(tn.__renderTarget),$r=Ie.get(zt.__renderTarget);Ue.bindFramebuffer(R.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let ii=0;ii<Ce;ii++)bt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.get(x).__webglTexture,O,Fe+ii),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.get(N).__webglTexture,se,Tt+ii)),R.blitFramebuffer(Ge,$e,me,Ee,ot,dt,me,Ee,R.DEPTH_BUFFER_BIT,R.NEAREST);Ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||Ie.has(x)){const tn=Ie.get(x),zt=Ie.get(N);Ue.bindFramebuffer(R.READ_FRAMEBUFFER,Au),Ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tu);for(let $t=0;$t<Ce;$t++)bt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tn.__webglTexture,O,Fe+$t):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,tn.__webglTexture,O),en?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zt.__webglTexture,se,Tt+$t):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zt.__webglTexture,se),O!==0?R.blitFramebuffer(Ge,$e,me,Ee,ot,dt,me,Ee,R.COLOR_BUFFER_BIT,R.NEAREST):en?R.copyTexSubImage3D(Ut,se,ot,dt,Tt+$t,Ge,$e,me,Ee):R.copyTexSubImage2D(Ut,se,ot,dt,Ge,$e,me,Ee);Ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else en?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(Ut,se,ot,dt,Tt,me,Ee,Ce,lt,Oe,Mt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,se,ot,dt,Tt,me,Ee,Ce,lt,Mt.data):R.texSubImage3D(Ut,se,ot,dt,Tt,me,Ee,Ce,lt,Oe,Mt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,se,ot,dt,me,Ee,lt,Oe,Mt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,se,ot,dt,Mt.width,Mt.height,lt,Mt.data):R.texSubImage2D(R.TEXTURE_2D,se,ot,dt,me,Ee,lt,Oe,Mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ht),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ln),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,jt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ps),se===0&&N.generateMipmaps&&R.generateMipmap(Ut),Ue.unbindTexture()},this.copyTextureToTexture3D=function(x,N,V=null,H=null,O=0){return x.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,x=arguments[2],N=arguments[3],O=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,N,V,H,O)},this.initRenderTarget=function(x){Ie.get(x).__webglFramebuffer===void 0&&A.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?A.setTextureCube(x,0):x.isData3DTexture?A.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?A.setTexture2DArray(x,0):A.setTexture2D(x,0),Ue.unbindTexture()},this.resetState=function(){w=0,L=0,k=null,Ue.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const uc={type:"change"},jo={type:"start"},mu={type:"end"},pr=new zr,dc=new $n,SS=Math.cos(70*J_.DEG2RAD),Ct=new F,Xt=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ra=1e-6;class MS extends kv{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new bi,this._lastTargetPosition=new F,this._quat=new bi().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kl,this._sphericalDelta=new kl,this._scale=1,this._panOffset=new F,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new F,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=AS.bind(this),this._onPointerDown=ES.bind(this),this._onPointerUp=TS.bind(this),this._onContextMenu=IS.bind(this),this._onMouseWheel=RS.bind(this),this._onKeyDown=PS.bind(this),this._onTouchStart=LS.bind(this),this._onTouchMove=DS.bind(this),this._onMouseDown=wS.bind(this),this._onMouseMove=CS.bind(this),this._interceptControlDown=US.bind(this),this._interceptControlUp=NS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uc),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Ct.copy(t).sub(this.target),Ct.applyQuaternion(this._quat),this._spherical.setFromVector3(Ct),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ct.setFromSpherical(this._spherical),Ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ct.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(pr.origin.copy(this.object.position),pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pr.direction))<SS?this.object.lookAt(this.target):(dc.setFromNormalAndCoplanarPoint(this.object.up,this.target),pr.intersectPlane(dc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ra||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ra||this._lastTargetPosition.distanceToSquared(this.target)>Ra?(this.dispatchEvent(uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ct.setFromMatrixColumn(t,0),Ct.multiplyScalar(-e),this._panOffset.add(Ct)}_panUp(e,t){this.screenSpacePanning===!0?Ct.setFromMatrixColumn(t,1):(Ct.setFromMatrixColumn(t,0),Ct.crossVectors(this.object.up,Ct)),Ct.multiplyScalar(e),this._panOffset.add(Ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ct.copy(s).sub(this.target);let r=Ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ES(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function AS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function TS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_t.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(jo)}function CS(i){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function RS(i){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(i.preventDefault(),this.dispatchEvent(jo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mu))}function PS(i){this.enabled!==!1&&this._handleKeyDown(i)}function LS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_t.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_t.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(jo)}function DS(i){switch(this._trackPointer(i),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_t.NONE}}function IS(i){this.enabled!==!1&&i.preventDefault()}function US(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var FS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function OS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var gu={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(FS,function(){var t=function(){function n(p){return a.appendChild(p.dom),p}function s(p){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===p?"block":"none";r=p}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),s(++r%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-o,200),p>l+1e3&&(u.update(1e3*c/(p-l),100),l=p,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:a,setMode:s}};return t.Panel=function(n,s,r){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,p=2*c,g=3*c,_=15*c,m=74*c,d=30*c,M=document.createElement("canvas");M.width=u,M.height=h,M.style.cssText="width:80px;height:48px";var b=M.getContext("2d");return b.font="bold "+9*c+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=r,b.fillRect(0,0,u,h),b.fillStyle=s,b.fillText(n,f,p),b.fillRect(g,_,m,d),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(g,_,m,d),{dom:M,update:function(S,P){a=Math.min(a,S),o=Math.max(o,S),b.fillStyle=r,b.globalAlpha=1,b.fillRect(0,0,u,_),b.fillStyle=s,b.fillText(l(S)+" "+n+" ("+l(a)+"-"+l(o)+")",f,p),b.drawImage(M,g+c,_,m-c,d,g,_,m-c,d),b.fillRect(g+m-c,_,c,d),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(g+m-c,_,c,l((1-S/P)*d))}}},t})})(gu);var kS=gu.exports;const BS=OS(kS);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class VS extends xn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function To(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const zS={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:To,toHexString:To},Cs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},HS={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Cs.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Cs.toHexString(s)}},GS={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Cs.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Cs.toHexString(s)}},WS=[zS,Cs,HS,GS];function $S(i){return WS.find(e=>e.match(i))}class XS extends xn{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=$S(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=To(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Pa extends xn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class YS extends xn{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let a=!1,o,l,c,u,h;const f=5,p=M=>{o=M.clientX,l=c=M.clientY,a=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(a){const b=M.clientX-o,S=M.clientY-l;Math.abs(S)>f?(M.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>f&&_()}if(!a){const b=M.clientY-c;h-=b*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(d,M,b,S,P)=>(d-M)/(b-M)*(P-S)+S,t=d=>{const M=this.$slider.getBoundingClientRect();let b=e(d,M.left,M.right,this._min,this._max);this._snapClampSetValue(b)},n=d=>{this._setDraggingStyle(!0),t(d.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=d=>{t(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=d=>{d.preventDefault(),this._setDraggingStyle(!0),t(d.touches[0].clientX),a=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(o=d.touches[0].clientX,l=d.touches[0].clientY,a=!0):c(d),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=d=>{if(a){const M=d.touches[0].clientX-o,b=d.touches[0].clientY-l;Math.abs(M)>Math.abs(b)?c(d):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else d.preventDefault(),t(d.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const b=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class qS extends xn{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class jS extends xn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var KS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ZS(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let hc=!1;class Ko{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!hc&&o&&(ZS(KS),hc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(e,t,n,s,r){if(Object(n)===n)return new qS(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new YS(this,e,t,n,s,r);case"boolean":return new VS(this,e,t);case"string":return new jS(this,e,t);case"function":return new Pa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new XS(this,e,t,n)}addFolder(e){const t=new Ko({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Pa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Pa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const JS={name:"Visualizer",mounted(){this.fetchBinaryData("./MaterialPointVisualizerTEMP.bin")},methods:{fetchBinaryData(i){fetch(i).then(e=>e.arrayBuffer()).then(e=>{const t=new DataView(e),n=t.getInt32(0,!0),s=t.getInt32(4,!0);let r=8;const a=[];for(let M=0;M<s;M++){const b=t.getInt32(r,!0);r+=4;const S=new Uint8Array(e,r,b),P=new TextDecoder().decode(S);a.push(P),r+=b;const w=(4-b%4)%4;r+=w}const o=3+s,l=n*o,c=new Float32Array(e,r,l);r+=l*4;const u=[];for(let M=0;M<s;M++){const b=new Float32Array(e,r,n*3);u.push(b),r+=n*3*4}const h=[];for(let M=0;M<s;M++){const b=t.getFloat32(r,!0);r+=4;const S=t.getFloat32(r,!0);r+=4,h.push({min:b,max:S})}const f=t.getInt32(r,!0);r+=4;const p=new Float32Array(e,r,f*3),g=new Bt,_=new Float32Array(n*3);for(let M=0;M<n;M++)_[M*3]=c[M*o],_[M*3+1]=c[M*o+1],_[M*3+2]=c[M*o+2];g.setAttribute("position",new qt(_,3));const m=new lu({size:.1,vertexColors:!0}),d=new Lv(g,m);this.attributeNames=a,this.minMaxList=h,this.numSamples=f,this.colorbarColors=p,this.renderPoints(d,g,a,u,h,n,s,p,f)}).catch(e=>console.error("Error loading binary file:",e))},renderPoints(i,e,t,n,s,r,a,o,l){const c=new wv;c.background=new rt(1118481);const u=new rn(75,window.innerWidth/window.innerHeight,.1,2e3),h=new yS({antialias:!0});h.setSize(window.innerWidth,window.innerHeight),document.getElementById("visualizer-container").appendChild(h.domElement),c.add(i);const f=new ds().setFromObject(i),p=f.min,g=f.max;new F().addVectors(p,g).multiplyScalar(.5);const _=new F().subVectors(g,p);Math.max(_.x,_.y,_.z);const m=10;i.scale.set(m,m,m),f.setFromObject(i);const d=f.min,M=f.max,b=new F().addVectors(d,M).multiplyScalar(.5),S=new F().subVectors(M,d),P=Math.max(S.x,S.y,S.z),w=P*1.5;u.position.set(b.x,b.y,b.z+w),u.lookAt(b);const L=new hs(S.x,S.y,S.z),k=new Dv(L),E=new Xi({color:16777215}),y=new ou(k,E);y.position.copy(b),c.add(y);const D=new $i,j=new $i;c.add(D),c.add(j);const G=()=>{D.clear(),j.clear();const fe=10,Je=S.x/fe,ft=S.y/fe,Z=S.z/fe,re=P*.02;for(let ge=0;ge<=fe;ge++){const oe=d.x+ge*Je,Le=new F(oe,d.y,d.z),tt=new Bt().setFromPoints([Le,Le.clone().add(new F(0,-re,0))]),Ne=new Sr(tt,new Xi({color:16777215}));if(D.add(Ne),this.settings.showTickLabels){const ke=document.createElement("canvas"),Be=ke.getContext("2d");Be.font=`${this.settings.tickFontSize}px Arial`;const Xe=(oe/m).toFixed(1),R=Be.measureText(Xe).width;ke.width=R*1.2,ke.height=this.settings.tickFontSize*1.5,Be.fillStyle="#000000",Be.fillRect(0,0,ke.width,ke.height),Be.font=`${this.settings.tickFontSize}px Arial`,Be.fillStyle="#ffffff",Be.fillText(Xe,R*.1,this.settings.tickFontSize*1.2);const Dt=new ya(ke),je=new yr({map:Dt}),ze=new va(je);ze.scale.set(ke.width/50,ke.height/50,1),ze.position.set(oe,d.y-re*1.5,d.z),j.add(ze)}}for(let ge=0;ge<=fe;ge++){const oe=d.y+ge*ft,Le=new F(d.x,oe,d.z),tt=new Bt().setFromPoints([Le,Le.clone().add(new F(-re,0,0))]),Ne=new Sr(tt,new Xi({color:16777215}));if(D.add(Ne),this.settings.showTickLabels){const ke=document.createElement("canvas"),Be=ke.getContext("2d");Be.font=`${this.settings.tickFontSize}px Arial`;const Xe=(oe/m).toFixed(1),R=Be.measureText(Xe).width;ke.width=R*1.2,ke.height=this.settings.tickFontSize*1.5,Be.fillStyle="#000000",Be.fillRect(0,0,ke.width,ke.height),Be.font=`${this.settings.tickFontSize}px Arial`,Be.fillStyle="#ffffff",Be.fillText(Xe,R*.1,this.settings.tickFontSize*1.2);const Dt=new ya(ke),je=new yr({map:Dt}),ze=new va(je);ze.scale.set(ke.width/50,ke.height/50,1),ze.position.set(d.x-re*1.5,oe,d.z),j.add(ze)}}for(let ge=0;ge<=fe;ge++){const oe=d.z+ge*Z,Le=new F(M.x,d.y,oe),tt=new Bt().setFromPoints([Le,Le.clone().add(new F(0,-re,0))]),Ne=new Sr(tt,new Xi({color:16777215}));if(D.add(Ne),this.settings.showTickLabels){const ke=document.createElement("canvas"),Be=ke.getContext("2d");Be.font=`${this.settings.tickFontSize}px Arial`;const Xe=(oe/m).toFixed(1),R=Be.measureText(Xe).width;ke.width=R*1.2,ke.height=this.settings.tickFontSize*1.5,Be.fillStyle="#000000",Be.fillRect(0,0,ke.width,ke.height),Be.font=`${this.settings.tickFontSize}px Arial`,Be.fillStyle="#ffffff",Be.fillText(Xe,R*.1,this.settings.tickFontSize*1.2);const Dt=new ya(ke),je=new yr({map:Dt}),ze=new va(je);ze.scale.set(ke.width/50,ke.height/50,1),ze.position.set(M.x+re*1.5,d.y-re*1.5,oe),j.add(ze)}}},q=new MS(u,h.domElement);q.enableDamping=!0,q.dampingFactor=.05,q.minDistance=P*.1,q.maxDistance=P*10,q.target.copy(b),q.update();const ne=new BS;document.body.appendChild(ne.dom);const K=new Ko;this.settings={showAxes:!0,showBoundingBox:!1,showTickLabels:!1,tickFontSize:20,showColorbar:!1,colorbarPosition:"top",colorbarFontSize:20,particleSize:.1,showFPS:!0,colorBy:t.length>0?t[0]:"none"};const ie=K.addFolder("Axes System"),W=new Ov(P*.5);W.position.copy(b),c.add(W),ie.add(this.settings,"showAxes").name("- coordinate").onChange(fe=>{W.visible=fe}),ie.add(this.settings,"showBoundingBox").name("- axes").onChange(fe=>{y.visible=fe,D.visible=fe}),ie.add(this.settings,"showTickLabels").name("- axes ticks").onChange(fe=>{j.visible=fe}),ie.add(this.settings,"tickFontSize",10,200,1).name("- tick font size").onChange(()=>{G(),j.visible=this.settings.showTickLabels}),ie.add(this.settings,"showColorbar").name("- colorbar").onChange(this.updateColorbar.bind(this)),ie.add(this.settings,"colorbarPosition",["top","bottom","left","right"]).name("- colorbar position").onChange(this.updateColorbar.bind(this)),ie.add(this.settings,"colorbarFontSize",10,200,1).name("- colorbar font size").onChange(this.updateColorbar.bind(this));const he=K.addFolder("Particle System");t.length>0?he.add(this.settings,"colorBy",["none",...t]).name("- color by").onChange(this.updateColors.bind(this,e,i,t,n)):this.settings.colorBy="none",he.add(this.settings,"particleSize",.1,10,.1).name("- particle Size").onChange(fe=>{i.material.size=fe}),K.add(this.settings,"showFPS").name("FPS Tool").onChange(fe=>{ne.dom.style.display=fe?"block":"none"}),K.add({resetView:()=>{u.position.copy(this.initialCameraPosition),q.target.copy(this.initialControlsTarget),q.update()}},"resetView").name("Reset View"),K.add({particleNumber:r},"particleNumber").name("Particle Number").listen().disable(),G(),D.visible=this.settings.showBoundingBox,j.visible=this.settings.showTickLabels,this.initialCameraPosition=u.position.clone(),this.initialControlsTarget=q.target.clone(),this.updateColors(e,i,t,n);const Se=()=>{requestAnimationFrame(Se),q.update(),ne.update(),j.children.forEach(fe=>{fe.isSprite&&fe.quaternion.copy(u.quaternion)}),h.render(c,u)};Se(),window.addEventListener("resize",()=>{h.setSize(window.innerWidth,window.innerHeight),u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),this.updateColorbar()})},updateColors(i,e,t,n){if(this.settings.colorBy==="none"){const s=new rt(16711680),r=new Float32Array(i.attributes.position.count*3);for(let a=0;a<i.attributes.position.count;a++)r[a*3]=s.r,r[a*3+1]=s.g,r[a*3+2]=s.b;i.setAttribute("color",new qt(r,3))}else{const s=t.indexOf(this.settings.colorBy);if(s>=0){const r=n[s];i.setAttribute("color",new qt(r,3))}}i.attributes.color.needsUpdate=!0,e.material.needsUpdate=!0,this.updateColorbar()},updateColorbar(){let i=document.querySelector("#colorbar-container");if(i&&(document.body.removeChild(i),i=null),!this.settings.showColorbar||this.settings.colorBy==="none")return;const e=this.attributeNames.indexOf(this.settings.colorBy);if(e<0)return;const{min:t,max:n}=this.minMaxList[e];i=document.createElement("div"),i.id="colorbar-container",i.style.position="absolute",i.style.background="rgba(0, 0, 0, 0.7)",i.style.padding="10px";const s=20,r=this.settings.colorbarPosition==="top"||this.settings.colorbarPosition==="bottom",a=r?200:20,o=r?20:200;switch(this.settings.colorbarPosition){case"top":i.style.top=`${s}px`,i.style.left="50%",i.style.transform="translateX(-50%)";break;case"bottom":i.style.bottom=`${s}px`,i.style.left="50%",i.style.transform="translateX(-50%)";break;case"left":i.style.left=`${s}px`,i.style.top="50%",i.style.transform="translateY(-50%)";break;case"right":i.style.right=`${s}px`,i.style.top="50%",i.style.transform="translateY(-50%)";break}const l=document.createElement("canvas");l.width=a,l.height=o;const c=l.getContext("2d"),u=r?a/this.numSamples:o/this.numSamples;for(let g=0;g<this.numSamples;g++){const _=this.colorbarColors[g*3]*255,m=this.colorbarColors[g*3+1]*255,d=this.colorbarColors[g*3+2]*255;c.fillStyle=`rgb(${Math.floor(_)}, ${Math.floor(m)}, ${Math.floor(d)})`,r?c.fillRect(g*u,0,u+1,o):c.fillRect(0,(this.numSamples-1-g)*u,a,u+1)}i.appendChild(l);const h=5,f=n-t,p=[];for(let g=0;g<h;g++){const _=t+g/(h-1)*f;p.push(_.toFixed(2))}p.forEach((g,_)=>{const m=document.createElement("div");m.style.position="absolute",m.style.background="white";const d=document.createElement("div");d.textContent=g,d.style.position="absolute",d.style.color="white",d.style.fontSize=`${this.settings.colorbarFontSize}px`,d.style.fontFamily="Arial";const M=_/(h-1)*(r?a:o);r?(m.style.width="1px",m.style.height="10px",m.style.left=`${M}px`,m.style.top=`${o}px`,d.style.left=`${M}px`,d.style.top=`${o+15}px`,d.style.transform="translateX(-50%)"):(m.style.width="10px",m.style.height="1px",this.settings.colorbarPosition==="left"?(m.style.left=`${a}px`,d.style.left=`${a+15}px`):(m.style.left="0px",d.style.right="15px",d.style.textAlign="right"),m.style.bottom=`${M}px`,d.style.bottom=`${M}px`,d.style.transform="translateY(50%)"),i.appendChild(m),i.appendChild(d)}),document.body.appendChild(i)}},data(){return{settings:null,initialCameraPosition:null,initialControlsTarget:null,attributeNames:[],minMaxList:[],numSamples:0,colorbarColors:null}}},QS={id:"visualizer-container",style:{width:"100%",height:"600px"}};function eM(i,e,t,n,s,r){return C(),z("div",QS)}const tM=Re(JS,[["render",eM],["__scopeId","data-v-abbe4f2c"]]),nM=i=>{if(typeof document>"u")return{stabilizeScrollPosition:s=>async(...r)=>s(...r)};const e=document.documentElement;return{stabilizeScrollPosition:n=>async(...s)=>{const r=n(...s),a=i.value;if(!a)return r;const o=a.offsetTop-e.scrollTop;return await Nr(),e.scrollTop=a.offsetTop-o,r}}},_u="vitepress:tabSharedState",As=typeof localStorage<"u"?localStorage:null,vu="vitepress:tabsSharedState",iM=()=>{const i=As==null?void 0:As.getItem(vu);if(i)try{return JSON.parse(i)}catch{}return{}},sM=i=>{As&&As.setItem(vu,JSON.stringify(i))},rM=i=>{const e=Sc({});it(()=>e.content,(t,n)=>{t&&n&&sM(t)},{deep:!0}),i.provide(_u,e)},aM=(i,e)=>{const t=Qt(_u);if(!t)throw new Error("[vitepress-plugin-tabs] TabsSharedState should be injected");Nt(()=>{t.content||(t.content=iM())});const n=ye(),s=Me({get(){var l;const a=e.value,o=i.value;if(a){const c=(l=t.content)==null?void 0:l[a];if(c&&o.includes(c))return c}else{const c=n.value;if(c)return c}return o[0]},set(a){const o=e.value;o?t.content&&(t.content[o]=a):n.value=a}});return{selected:s,select:a=>{s.value=a}}};let fc=0;const oM=()=>(fc++,""+fc);function lM(){const i=vc();return Me(()=>{var n;const t=(n=i.default)==null?void 0:n.call(i);return t?t.filter(s=>typeof s.type=="object"&&"__name"in s.type&&s.type.__name==="PluginTabsTab"&&s.props).map(s=>{var r;return(r=s.props)==null?void 0:r.label}):[]})}const xu="vitepress:tabSingleState",cM=i=>{Ro(xu,i)},uM=()=>{const i=Qt(xu);if(!i)throw new Error("[vitepress-plugin-tabs] TabsSingleState should be injected");return i},bu=()=>{const i=typeof window<"u"?window.matchMedia("print"):void 0,e=ye(i==null?void 0:i.matches),t=()=>{e.value=i==null?void 0:i.matches};return Xu(()=>{i==null||i.addEventListener("change",t)}),Ir(()=>{i==null||i.removeEventListener("change",t)}),e},dM={class:"plugin-tabs"},hM=["id","aria-selected","aria-controls","tabindex","onClick"],fM=ue({__name:"PluginTabs",props:{sharedStateKey:{}},setup(i){const e=i,t=bu(),n=lM(),{selected:s,select:r}=aM(n,bc(e,"sharedStateKey")),a=ye(),{stabilizeScrollPosition:o}=nM(a),l=o(r),c=ye([]),u=f=>{var _;const p=n.value.indexOf(s.value);let g;f.key==="ArrowLeft"?g=p>=1?p-1:n.value.length-1:f.key==="ArrowRight"&&(g=p<n.value.length-1?p+1:0),g!==void 0&&(l(n.value[g]),(_=c.value[g])==null||_.focus())},h=oM();return cM({uid:h,selected:s}),(f,p)=>(C(),z("div",dM,[I("div",{ref_key:"tablist",ref:a,class:"plugin-tabs--tab-list",role:"tablist",onKeydown:u},[(C(!0),z(ut,null,Lt(T(n),g=>(C(),z("button",{id:`tab-${g}-${T(h)}`,ref_for:!0,ref_key:"buttonRefs",ref:c,key:g,role:"tab",class:"plugin-tabs--tab","aria-selected":g===T(s)&&!T(t),"aria-controls":`panel-${g}-${T(h)}`,tabindex:g===T(s)?0:-1,onClick:()=>T(l)(g)},Pe(g),9,hM))),128))],544),X(f.$slots,"default")]))}}),pM=["id","aria-labelledby","data-is-print"],mM=ue({__name:"PluginTabsTab",props:{label:{}},setup(i){const{uid:e,selected:t}=uM(),n=bu();return(s,r)=>T(t)===s.label||T(n)?(C(),z("div",{key:0,id:`panel-${s.label}-${T(e)}`,class:"plugin-tabs--content",role:"tabpanel",tabindex:"0","aria-labelledby":`tab-${s.label}-${T(e)}`,"data-is-print":T(n)},[X(s.$slots,"default",{},void 0,!0)],8,pM)):ce("",!0)}}),gM=Re(mM,[["__scopeId","data-v-bec6ca90"]]),_M=i=>{rM(i),i.component("PluginTabs",fM),i.component("PluginTabsTab",gM)},xM={extends:rl,Layout(){return Xr(rl.Layout,null,{"nav-bar-content-after":()=>[Xr(Bg)],"nav-screen-content-after":()=>Xr(Kg)})},enhanceApp({app:i,router:e,siteData:t}){_M(i),i.component("VersionPicker",Jg),i.component("AuthorBadge",r_),i.component("Authors",l_),i.component("Visualizer",tM)}};export{xM as T,lp as c,et as u};
