/* WARDROBE — static site. Vanilla JS, hash routing, localStorage for personal state.
   Data: data/wardrobe/*.json (fetched fresh on each visit). */
"use strict";
(function(){
/* ---------- Icons ---------- */
const P={
 tag:'<path d="M3.5 12.2V4.5a1 1 0 0 1 1-1h7.7l8.3 8.3a1 1 0 0 1 0 1.4l-7.3 7.3a1 1 0 0 1-1.4 0z"/><circle cx="8" cy="8" r="1.6"/>',
 book:'<path d="M12 6.5C10.2 5 7.6 4.5 4 4.8v13c3.6-.3 6.2.2 8 1.7 1.8-1.5 4.4-2 8-1.7v-13c-3.6-.3-6.2.2-8 1.7z"/><path d="M12 6.5v13"/>',
 hanger:'<path d="M12 6.5a2 2 0 1 1 2 2c-1.1 0-2 .9-2 2"/><path d="M12 10.5 3 17.2c-.6.5-.2 1.3.5 1.3h17c.7 0 1.1-.8.5-1.3z"/>',
 suitcase:'<rect x="4" y="7.5" width="16" height="12" rx="2"/><path d="M9 7.5V5.2c0-.4.3-.7.7-.7h4.6c.4 0 .7.3.7.7v2.3M9 7.5v12M15 7.5v12"/>',
 closet:'<rect x="5" y="3.5" width="14" height="17" rx="1.5"/><path d="M12 3.5v17M10 11v2M14 11v2M5 18h14"/>',
 heat:'<circle cx="12" cy="12" r="3.6"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6"/>',
 temple:'<path d="M12 3v2.5M8.5 8 12 5.5 15.5 8zM6.5 12 12 8l5.5 4zM5 20.5h14M7 20.5v-6.5h10v6.5M10.5 20.5v-3.5h3v3.5M4.5 14l3-2M19.5 14l-3-2"/>',
 elephant:'<path d="M19.5 17.5v-5a6 6 0 0 0-6-6h-3a5 5 0 0 0-5 5v1.5c0 1.2.6 2 1.7 2.4"/><path d="M5.5 13c-1.6.3-2 1.8-1.5 3 .5 1.3 1.8 1.4 2.5.7"/><path d="M9 16v3.5M12.5 16v3.5M16.5 15v4.5M19.5 17.5h1"/><path d="M11 8.5c-.8 1.5-.5 3.6 1.5 4.5"/><circle cx="8.2" cy="10" r=".7" class="f" fill="currentColor"/>',
 rain:'<path d="M7 15.5a4 4 0 0 1-.6-8 5.5 5.5 0 0 1 10.7 1.2 3.4 3.4 0 0 1-.6 6.8z"/><path d="M8.5 18.5 7.5 20.5M12.5 18.5l-1 2M16.5 18.5l-1 2"/>',
 plane:'<path d="M10.5 13.5 4 11.2l1.3-1.3 7 .7 4.4-4.4c.8-.8 2.2-.9 2.8-.3.6.6.5 2-.3 2.8l-4.4 4.4.7 7-1.3 1.3-2.3-6.5-3 3v2.4L8 21.2l-1.1-2.1L4.8 18l1.1-.9h2.4z"/>',
 sweater:'<path d="M9 4.5 4.5 7 3 15h3v5.5h12V15h3l-1.5-8L15 4.5c-.6 1.2-1.7 2-3 2s-2.4-.8-3-2z"/><path d="M6 15V10M18 15v-5M6 18h12"/>',
 moon:'<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/>',
 bike:'<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9 8.5 6.5H7M12.5 16 15 9"/>',
 bookmark:'<path d="M6.5 4.5h11v15.5L12 16l-5.5 4z"/>',
 bookmarkf:'<path d="M6.5 4.5h11v15.5L12 16l-5.5 4z" fill="currentColor"/>',
 cart:'<path d="M3.5 4.5h2.2l2.1 10.2c.1.5.5.8 1 .8h8.4c.5 0 .9-.3 1-.8l1.4-6.7H6.6"/><circle cx="9.5" cy="19.2" r="1.3"/><circle cx="16.5" cy="19.2" r="1.3"/>',
 ruler:'<path d="M3.8 15.6 15.6 3.8l4.6 4.6L8.4 20.2z"/><path d="M7.4 12l1.8 1.8M10 9.4l1.2 1.2M12.6 6.8l1.8 1.8M15.2 4.2"/>',
 spark:'<path d="M12 3.5l1.7 5.1 5.3 1.9-5.3 1.9L12 17.5l-1.7-5.1L5 10.5l5.3-1.9z"/><path d="M18.5 15.5l.7 2 2 .8-2 .7-.7 2-.8-2-2-.7 2-.8z"/>',
 ext:'<path d="M14 4.5h5.5V10M19.5 4.5 11 13M17 14v4.5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-10c0-.6.4-1 1-1h4.5"/>',
 swap:'<path d="M4.5 8.5h13l-3.5-3.5M19.5 15.5h-13l3.5 3.5"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
 plus:'<path d="M12 5v14M5 12h14"/>', minus:'<path d="M5 12h14"/>',
 back:'<path d="M14.5 5.5 8 12l6.5 6.5"/>', chev:'<path d="m9.5 5.5 6.5 6.5-6.5 6.5"/>',
 down:'<path d="M12 4.5v15M6 13.5l6 6 6-6"/>',
 cal:'<rect x="4" y="5.5" width="16" height="14.5" rx="1.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
 info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><circle cx="12" cy="8" r=".7" fill="currentColor"/>',
 warnI:'<path d="M12 4.5 21 19.5H3z"/><path d="M12 10v4.5"/><circle cx="12" cy="17" r=".7" fill="currentColor"/>',
 water:'<path d="M3.5 15.5c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.2 1 2 1.3M3.5 19.5c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.2 1 2 1.3"/><path d="M12 3.5c2 2.6 3.2 4.3 3.2 5.8a3.2 3.2 0 0 1-6.4 0c0-1.5 1.2-3.2 3.2-5.8z"/>',
 steps:'<path d="M3.5 19.5h4v-4h4v-4h4v-4h5"/>',
 shirt:'<path d="M9 3.5 5 5.5l-2 5 3 1.2V20.5h12v-8.8l3-1.2-2-5-4-2"/><path d="M9 3.5 12 7l3-3.5M12 7v13.5M10 4.5l-1 3 3-.5M14 4.5l1 3-3-.5"/>',
 polo:'<path d="M9 3.5 5 5.5l-2 5 3 1.2V20.5h12v-8.8l3-1.2-2-5-4-2"/><path d="M9 3.5l3 3 3-3M12 6.5v4"/>',
 tee:'<path d="M9 4 4.5 6 3 10.5l3 1V20h12v-8.5l3-1L19.5 6 15 4c-.5 1.2-1.6 2-3 2s-2.5-.8-3-2z"/>',
 pants:'<path d="M7 3.5h10l1.5 17h-4.2L12 9.5l-2.3 11H5.5z"/><path d="M7 6.5h10"/>',
 shorts:'<path d="M6.5 5h11l1.5 11h-5.2L12 10l-1.8 6H5z"/><path d="M6.5 7.5h11"/>',
 jacket:'<path d="M9 3.5 5 5.5 3.5 20.5h5v-11M15 3.5l4 2 1.5 15h-5v-11"/><path d="M9 3.5 12 8l3-4.5M12 8v12.5M8.5 20.5h7"/>',
 shoe:'<path d="M3.5 15.5V9.5h5c.5 2 2 3 4 3.3l5 .9c1.7.3 3 1.6 3 3.3v.5h-17z"/><path d="M3.5 17.5h17"/>',
 acc:'<circle cx="7" cy="13.5" r="3.5"/><circle cx="17" cy="13.5" r="3.5"/><path d="M10.5 13c1-1 2-1 3 0M3.5 13 2.8 9.5M20.5 13l.7-3.5"/>',
 trash:'<path d="M5 7h14M9.5 7V5h5v2M7 7l1 13h8l1-13"/>',
 home:'<path d="M3.5 11 12 4l8.5 7M6 9.5v10h12v-10"/>'
};
Object.assign(P,{
 heart:'<path d="M12 19.5s-7.5-4.4-7.5-10a4.2 4.2 0 0 1 7.5-2.6 4.2 4.2 0 0 1 7.5 2.6c0 5.6-7.5 10-7.5 10z"/>',
 heartf:'<path d="M12 19.5s-7.5-4.4-7.5-10a4.2 4.2 0 0 1 7.5-2.6 4.2 4.2 0 0 1 7.5 2.6c0 5.6-7.5 10-7.5 10z" fill="currentColor"/>',
 bolt:'<path d="M13.5 3 5.5 13.5H12L10.5 21l8-10.5H12z"/>',
 sun:'<circle cx="12" cy="12" r="3.6"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6"/>',
 copy:'<rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5v-3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3"/>',
 star:'<path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>'
});
const icon=(k,c="")=>`<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true">${P[k]||P.info}</svg>`;

/* ---------- Helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>{u=String(u||"");return /^https?:\/\//i.test(u)?u:"";};
const str=v=>typeof v==="string"?v:"";
const arr=v=>Array.isArray(v)?v.filter(x=>typeof x==="string"):[];
const num=(v,d=0)=>typeof v==="number"&&isFinite(v)?v:d;
const money=n=>"$"+Number(n||0).toLocaleString("en-US",{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2});
const money0=n=>"$"+Math.round(Number(n||0)).toLocaleString("en-US");
const ts=iso=>{const t=Date.parse(iso||"");return isNaN(t)?0:t;};
const DAY=864e5;
const localDate=d=>{const z=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+z(d.getMonth()+1)+"-"+z(d.getDate());};
const parseDay=s=>{const m=/^(\d{4})-(\d{2})-(\d{2})/.exec(s||"");return m?new Date(+m[1],+m[2]-1,+m[3]):null;};
const fmtDay=(s,o={month:"short",day:"numeric"})=>{const d=parseDay(s);return d?d.toLocaleDateString("en-US",o):"";};
const daysUntil=s=>{const d=parseDay(s);if(!d)return null;const t=new Date();t.setHours(0,0,0,0);return Math.round((d-t)/DAY);};
const hue=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))>>>0;return h%360;};
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,"");}catch(e){return "the store";}};
const plural=(n,w)=>`${n} ${n===1?w:(/[^aeiou]y$/.test(w)?w.slice(0,-1)+"ies":w+"s")}`;
function monogram(b){const w=String(b||"?").replace(/[^A-Za-z0-9 ]/g,"").trim().split(/\s+/).filter(Boolean);if(!w.length)return"?";if(w.length===1)return w[0][0].toUpperCase()+(w[0][1]||"").toLowerCase();return (w[0][0]+w[1][0]).toUpperCase();}

/* ---------- Personal state (this browser only) ---------- */
const LS="wardrobe.v1";
const DEF={saved:{},closet:{},outfits:[],packed:{},qty:{},packSel:null,activeStyle:null,tier:"better",read:{},shoe:null,guideMode:"latest",build:null,shop:{tier:"all",occ:"",temple:false,deal:false,top:false,sort:"featured"}};
const SORTS=[["featured","Featured"],["rated","Top rated"],["reviews","Most reviewed"],["low","Price: low to high"],["high","Price: high to low"]];
const clone=o=>JSON.parse(JSON.stringify(o));
function sanitize(v){const o=clone(DEF);if(!v||typeof v!=="object")return o;
  for(const k of ["saved","closet","packed","qty","read"])if(v[k]&&typeof v[k]==="object"&&!Array.isArray(v[k]))o[k]=v[k];
  if(Array.isArray(v.outfits))o.outfits=v.outfits.filter(x=>x&&typeof x==="object"&&x.slots&&typeof x.slots==="object").map(x=>({id:str(x.id)||eid(),name:str(x.name).slice(0,60)||"My outfit",slots:x.slots,tier:TIERS.includes(x.tier)?x.tier:"better",style:str(x.style)||null,createdAt:str(x.createdAt)||new Date().toISOString()}));
  if(Array.isArray(v.packSel))o.packSel=v.packSel.filter(x=>typeof x==="string");
  if(v.activeStyle&&typeof v.activeStyle==="object"&&str(v.activeStyle.id))o.activeStyle={id:v.activeStyle.id,until:str(v.activeStyle.until)};
  if(TIERS.includes(v.tier))o.tier=v.tier;
  if(v.shoe!=null&&/^\d{1,2}(\.5)?$/.test(String(v.shoe)))o.shoe=String(v.shoe);
  if(["latest","section","styles"].includes(v.guideMode))o.guideMode=v.guideMode;
  if(v.build&&typeof v.build==="object"&&v.build.slots&&typeof v.build.slots==="object")o.build={slots:Object.assign({top:null,bottom:null,layer:null,shoes:null,accessory:null},v.build.slots),tier:TIERS.includes(v.build.tier)?v.build.tier:"better",style:str(v.build.style)||null};
  if(v.shop&&typeof v.shop==="object")o.shop=Object.assign(o.shop,{tier:["all",...TIERS].includes(v.shop.tier)?v.shop.tier:"all",occ:str(v.shop.occ),temple:!!v.shop.temple,deal:!!v.shop.deal,top:!!v.shop.top,sort:SORTS.some(s=>s[0]===v.shop.sort)?v.shop.sort:"featured"});
  return o;}
const eid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
let S;
function load(){try{return sanitize(JSON.parse(localStorage.getItem(LS)||"null"));}catch(e){return sanitize(null);}}
function save(){try{localStorage.setItem(LS,JSON.stringify(S));}catch(e){}}

/* ---------- Vocabulary ---------- */
const TIERS=["good","better","bifl"];
const TIER_L={good:"Good",better:"Better",bifl:"Buy for life"};
const CATS=["shirts-button","polos","tees","pants","shorts","layer","shoes","accessories"];
const CAT_TAB={"shirts-button":"Shirts",polos:"Polos",tees:"Tees",pants:"Pants",shorts:"Shorts",layer:"Layers & Rain",shoes:"Shoes",accessories:"Accessories"};
const CAT_L={"shirts-button":"Shirt",polos:"Polo",tees:"Tee",pants:"Trousers",shorts:"Shorts",layer:"Layer",shoes:"Shoes",accessories:"Accessory"};
const CAT_G={"shirts-button":"shirt",polos:"polo",tees:"tee",pants:"pants",shorts:"shorts",layer:"jacket",shoes:"shoe",accessories:"acc"};
const TOPS=["shirts-button","polos","tees"];
const SLOTS=[{id:"top",l:"Top",cats:TOPS},{id:"bottom",l:"Bottom",cats:["pants","shorts"]},{id:"layer",l:"Layer",cats:["layer"]},{id:"shoes",l:"Shoes",cats:["shoes"]},{id:"accessory",l:"Accessory",cats:["accessories"]}];
const SLOT_OF=c=>(SLOTS.find(s=>s.cats.includes(c))||{}).id||null;
const SECTIONS=[["fit","Fit"],["fabrics-heat","Fabrics for heat"],["shirts","Shirts"],["pants-shorts","Pants and shorts"],["shoes","Shoes"],["accessories","Accessories"],["packing-travel","Packing and travel"],["color","Color"]];
const SEC_L=Object.fromEntries(SECTIONS);
const SEC_CATS={fit:["pants","shirts-button"],"fabrics-heat":["shirts-button","polos","tees","pants"],shirts:TOPS,"pants-shorts":["pants","shorts"],shoes:["shoes"],accessories:["accessories"],"packing-travel":["accessories","layer"],color:CATS};
const SEC_TRIP={fit:"At 6'2\" you're buying XL tops and 36×34 bottoms. Look for tall cuts and long rises so shirts stay tucked and hems reach the shoe.",
 "fabrics-heat":"Chiang Mai afternoons are hot and humid. Linen, open weaves and light merino keep you covered at temples without overheating.",
 shirts:"Temples need shoulders covered, so collared short sleeves work by day and long sleeves cover you for the strictest sites.",
 "pants-shorts":"Long, light trousers are the temple uniform. Save shorts for the sanctuary and travel days.",
 shoes:"Shoes come off at every temple, so slip-ons save time. The sanctuary wants strap sandals; Hang Mua's 500 steps want grip.",
 accessories:"A small sling for passport and phone, a hat for the sanctuary sun, and something for rain in Ninh Binh.",
 "packing-travel":"Sixteen days, four stops, one bag. Pieces that mix across Chiang Mai heat and 55 to 65 °F Hanoi evenings earn their space.",
 color:"A tight palette means every top works with every bottom, so you pack fewer pieces."};
const PAL={ecru:"#E6DEC8",sand:"#D5C29C",olive:"#6C6F45","tobacco brown":"#6A4A2D",navy:"#1F2A45",charcoal:"#393C42",camel:"#B88B53",cream:"#EEE5D0",khaki:"#B7A97F",white:"#F6F5F1",stone:"#C8C1B3","light grey":"#C8CBD0",grey:"#8C9097",black:"#18191C",brown:"#6A4A2D",green:"#4F6B4A",blue:"#3D5C86"};
const ORDER_BY="2026-11-10";
const STATUSES=[["wishlist","Wishlist"],["ordered","Ordered"],["kept","Kept"],["returned","Returned"]];
const ST_L=Object.fromEntries(STATUSES);
const HEAT_L=["Not rated","Cool weather","Warm days","Made for heat"];
const DEFAULT_PROFILE={heightIn:74,tops:"XL",waist:36,inseam:34,inseamAssumed:true,shoe:null,preferTall:true,trip:{start:"2026-11-22",end:"2026-12-07",stops:[{name:"Chiang Mai"},{name:"Elephant sanctuary"},{name:"Hanoi"},{name:"Ninh Binh"}]}};

/* ---------- Data ---------- */
let PRODUCTS=[],PROD={},PRICES={},ARTICLES=[],ART={},STYLES=[],DROPS=[],PROFILE={},META={updatedAt:null,events:[]};
const STYLE=id=>STYLES.find(s=>s.id===id)||null;
const prof=()=>{const p=Object.assign({},DEFAULT_PROFILE,PROFILE||{});if(S.shoe)p.shoe=S.shoe;if(!p.trip||!p.trip.start)p.trip=DEFAULT_TRIP();return p;};
const DEFAULT_TRIP=()=>clone(DEFAULT_PROFILE.trip);
const trip=()=>prof().trip;
async function getJSON(n){const r=await fetch("data/wardrobe/"+n+".json",{cache:"no-cache"});if(!r.ok)throw new Error(n+": "+r.status);return r.json();}
function normP(x){if(!x||!str(x.id))return null;return {id:x.id,brand:str(x.brand)||"Unbranded",name:str(x.name)||"Untitled",category:CATS.includes(x.category)?x.category:"accessories",tier:TIERS.includes(x.tier)?x.tier:"better",price:num(x.price),was:typeof x.was==="number"?x.was:null,url:safeUrl(x.url),image:safeUrl(x.image)||null,fabric:str(x.fabric),sizesOk:str(x.sizesOk),heat:Math.max(0,Math.min(3,num(x.heat)|0)),styles:arr(x.styles),templeOk:!!x.templeOk,why:str(x.why),checkedAt:str(x.checkedAt),
  rating:typeof x.rating==="number"&&isFinite(x.rating)&&x.rating>0?Math.round(Math.min(5,x.rating)*10)/10:null,
  reviewCount:typeof x.reviewCount==="number"&&isFinite(x.reviewCount)&&x.reviewCount>=0?Math.round(x.reviewCount):null,
  reviewSource:str(x.reviewSource).trim(),reviewUrl:safeUrl(x.reviewUrl),fitNote:str(x.fitNote).trim(),
  pros:arr(x.pros).map(s=>s.trim()).filter(Boolean).slice(0,6),cons:arr(x.cons).map(s=>s.trim()).filter(Boolean).slice(0,6),
  gallery:arr(x.gallery).map(safeUrl).filter(Boolean).slice(0,12),redditUrl:safeUrl(x.redditUrl),videoUrl:safeUrl(x.videoUrl)};}
function normA(x){if(!x||!str(x.id))return null;return {id:x.id,title:str(x.title)||"Untitled",url:safeUrl(x.url),source:str(x.source)||"Reading",publishedAt:str(x.publishedAt)||null,summary:str(x.summary),image:safeUrl(x.image)||null,sections:arr(x.sections),styles:arr(x.styles),readMinutes:Math.max(0,Math.round(num(x.readMinutes))),kind:str(x.kind)||"article",addedAt:str(x.addedAt)||null};}

/* ---------- Product helpers ---------- */
function priceOf(p){const l=PRICES[p.id];const has=l&&typeof l.price==="number";const price=has?l.price:p.price;
  let was=has&&typeof l.was==="number"?l.was:p.was;if(!(typeof was==="number"&&was>price))was=null;
  const hist=has&&Array.isArray(l.history)?l.history.filter(h=>h&&typeof h.price==="number"&&str(h.date)):[];
  const ev=(META.events||[]).some(e=>e&&e.type==="price_drop"&&e.productId===p.id);
  const drop=(hist.length>0&&price<hist[0].price)||ev;
  const off=was?Math.round((1-price/was)*100):0;
  return {price,was,off,drop,hist,checked:has?str(l.checkedAt):p.checkedAt};}
const isDeal=p=>{const x=priceOf(p);return x.drop||!!x.was;};
const dname=p=>p.name.toLowerCase().startsWith(p.brand.toLowerCase().split(" ")[0].toLowerCase())?p.name:p.brand+" "+p.name;
const tierChip=t=>TIERS.includes(t)?`<span class="tier ${t}">${TIER_L[t]}</span>`:"";
/* Images: resized + cached through wsrv.nl; fall back to the original URL, then to the monogram. */
const PX=(u,w)=>`https://wsrv.nl/?url=${encodeURIComponent(u)}&w=${w}&output=webp&q=78`;
const HOVER=(()=>{try{return matchMedia("(hover:hover) and (pointer:fine)").matches;}catch(e){return false;}})();
const WIDE=()=>{try{return matchMedia("(min-width:760px)").matches;}catch(e){return false;}};
function imgEl(u,w,o={}){u=safeUrl(u);if(!u)return"";
  return `<img src="${esc(PX(u,w))}" srcset="${esc(PX(u,w))} 1x, ${esc(PX(u,w*2))} 2x" data-orig="${esc(u)}" alt="${esc(o.alt||"")}"${o.cls?` class="${o.cls}"`:""} ${o.eager?'loading="eager" fetchpriority="high"':'loading="lazy"'} decoding="async" referrerpolicy="no-referrer">`;}
function photo(p,cls="",o={}){const w=o.w||640;const img=o.src||p.image;
  const alt2=o.hover&&HOVER?(p.gallery||[]).find(u=>u!==p.image):null;
  return `<span class="ph ${cls}"><span class="fb" aria-hidden="true"><span class="bn">${esc(p.brand)}</span><b>${esc(monogram(p.brand))}</b>${icon(CAT_G[p.category]||"tag")}</span>${imgEl(img,w,{eager:o.eager})}${alt2?imgEl(alt2,w,{cls:"h2"}):""}</span>`;}
const T200={w:200};
document.addEventListener("error",e=>{const im=e.target;if(!im||im.tagName!=="IMG")return;
  const o=im.dataset.orig;if(o&&!im.dataset.fell){im.dataset.fell="1";im.removeAttribute("srcset");im.src=o;return;}
  im.remove();},true);
document.addEventListener("load",e=>{const im=e.target;if(im&&im.tagName==="IMG")im.classList.add("ld");},true);
function markLoaded(root){(root||document).querySelectorAll("img:not(.ld)").forEach(im=>{if(im.complete&&im.naturalWidth)im.classList.add("ld");});}
/* Reviews */
const STARD="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z",HALFD="M12 4v12l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z";
const fmtN=n=>Number(n).toLocaleString("en-US");
function stars(r,cls=""){if(r==null)return"";const h=Math.round(r*2)/2;let s="";
  for(let i=1;i<=5;i++){const k=h>=i?"f":h>=i-.5?"h":"e";s+=`<svg class="${k}" viewBox="0 0 24 24" aria-hidden="true"><path class="o" d="${STARD}"/>${k==="h"?`<path class="hf" d="${HALFD}"/>`:""}</svg>`;}
  return `<span class="stars ${cls}" role="img" aria-label="Rated ${r.toFixed(1)} out of 5">${s}</span>`;}
function rvLine(p,cls=""){if(p.rating==null)return"";
  return `<div class="rvl ${cls}">${stars(p.rating)}<b class="num" aria-hidden="true">${p.rating.toFixed(1)}</b>${p.reviewCount!=null?`<span class="num">(${fmtN(p.reviewCount)})<span class="sr"> reviews</span></span>`:""}</div>`;}
const fitLine=p=>p.fitNote?`<div class="fitl" title="${esc(p.fitNote)}"><b>Fit</b> ${esc(p.fitNote)}</div>`:"";
const rk=p=>p.rating==null?-1:p.rating,ck=p=>p.reviewCount==null?-1:p.reviewCount;
const byRated=(a,b)=>rk(b)-rk(a)||ck(b)-ck(a);
const galImgs=p=>[...new Set([p.image,...(p.gallery||[])].filter(Boolean))];
function badges(p,x){x=x||priceOf(p);let h="";if(x.off>=5)h+=`<span class="badge">−${x.off}%</span>`;if(x.drop)h+=`<span class="badge ink">Price drop</span>`;return h;}
function heatIcons(n){return `<span class="heat" title="${esc(HEAT_L[n])}">${[1,2,3].map(i=>icon("sun",i<=n?"on":"")).join("")}<span class="sr">Heat rating ${n} of 3, ${esc(HEAT_L[n])}</span></span>`;}
function care(p,full){return `<div class="care">${heatIcons(p.heat)}${p.templeOk?`<span class="tok">${icon("temple","xs")}Temple-ready</span>`:(full?`<span>${icon("temple","xs")}Not for temples</span>`:"")}</div>`;}
function sizeInfo(p){const pr=prof();const ok=p.sizesOk;const c=p.category;let mine=null;
  const letter=/\bXL\b/.test(ok);
  if(TOPS.includes(c)||c==="layer"){const tall=/tall/i.test(ok)&&!/no tall/i.test(ok);mine=(pr.tops||"XL")+(tall&&pr.preferTall?" Tall":"");}
  else if(c==="pants")mine=letter?"XL":`${pr.waist||36}×${pr.inseam||34}`;
  else if(c==="shorts")mine=letter?"XL":`${pr.waist||36}`;
  else if(c==="shoes")mine=pr.shoe?`US ${pr.shoe}`:"";
  else if(/\b36\b/.test(ok))mine="36";else if(letter)mine="XL";
  let st="",short="";
  if(/sold out|out of stock|discontinued/i.test(ok)){st="warn";short="Sold out at check";}
  else if(/waitlist/i.test(ok)){st="warn";short="Waitlist";}
  else if(/made to order/i.test(ok)){st="warn";short="Made to order";}
  else if(/no 34/i.test(ok)){short="No 34 inseam";}
  else if(/unconfirmed/i.test(ok)){short="Waist unconfirmed";}
  else if(/1 item left/i.test(ok)){st="warn";short="1 left";}
  else if(/no tall/i.test(ok)){st="ok";short="Available, no tall";}
  else if(/final sale/i.test(ok)){st="ok";short="Final sale";}
  else if(/available|listed|offered|per reviews|tall fit|tall length|\bUS \d|\bEU \d|letter|adjustable|S or L|in size range/i.test(ok)){st="ok";short=/listed/i.test(ok)?"Listed":"Available";}
  else if(/^unknown/i.test(ok)){short="Check size";}
  else if(!ok||/^n\/a/i.test(ok)){short="One size";}
  else short=ok.length<24?ok:"See details";
  return {mine,st,short,full:ok};}
function sizeLine(p){const s=sizeInfo(p);if(!s.mine&&s.short==="One size")return `<div class="sz"><span class="st">One size</span></div>`;
  const mine=p.category==="shoes"&&!s.mine?`<button type="button" data-open="settings" style="text-decoration:underline;color:var(--ink)">set shoe size</button>`:`<b class="num">${esc(s.mine||"—")}</b>`;
  return `<div class="sz" title="${esc(s.full||"")}">Your size ${mine}${s.short?` <span class="st ${s.st}">${esc(s.short)}</span>`:""}</div>`;}
const isSaved=k=>!!S.saved[k];
function heart(k,label,cls=""){const on=isSaved(k);return `<button type="button" class="heart ${cls}" data-save="${esc(k)}" aria-pressed="${on}" aria-label="${on?"Saved":"Save"}: ${esc(label)}"><span>${icon(on?"heartf":"heart")}</span></button>`;}
const buyLink=(p,cls="btn sm",label="Buy")=>p.url?`<a class="${cls}" href="${esc(p.url)}" target="_blank" rel="noopener">${esc(label)} ${icon("ext")}</a>`:"";
function activeStyle(){const a=S.activeStyle;if(!a||!STYLE(a.id))return null;if(ts(a.until)&&ts(a.until)<Date.now())return null;return a;}
function pcard(p,o){o=o&&typeof o==="object"?o:{};const x=priceOf(p);const a=activeStyle();const fits=a&&p.styles.includes(a.id);
  return `<article class="pc">
  <a class="pc-media" href="#/p/${esc(p.id)}" aria-label="${esc(dname(p))}, ${money(x.price)}${p.rating!=null?`, rated ${p.rating.toFixed(1)} of 5`:""}">${photo(p,"",{w:640,eager:o.eager,hover:true})}<span class="badges">${badges(p,x)}</span>${o.top?`<span class="ribbon">${icon("star","xs")}Top rated<span class="rl"> in this drop</span></span>`:""}</a>
  ${heart("p:"+p.id,dname(p))}
  <div class="pc-body">
   <div class="pc-brand">${esc(p.brand)}</div>
   <a class="pc-name" href="#/p/${esc(p.id)}">${esc(p.name)}</a>
   ${rvLine(p)}
   <div class="pr-row"><span class="price">${money(x.price)}</span>${x.was?`<s><span class="sr">was </span>${money(x.was)}</s>`:""}${tierChip(p.tier)}</div>
   ${sizeLine(p)}${fitLine(p)}${care(p)}
   ${fits?`<span class="fits">Fits ${esc(STYLE(a.id).name)}</span>`:""}
   <div class="pc-foot">${buyLink(p,"btn sm")}</div>
  </div></article>`;}
function mini(p){const x=priceOf(p);return `<a class="mi" href="#/p/${esc(p.id)}">${photo(p,"",T200)}<span class="t">${esc(dname(p))}</span><span class="price">${money(x.price)}</span></a>`;}

/* ---------- Article helpers ---------- */
const isNew=a=>!S.read[a.id];
function artThumb(a,cls="wide",w=640){
  const inner=`<span class="wm" style="--h:${hue(a.source)}" aria-hidden="true"><span>${a.kind==="thread"?"Forum thread":"Reading"}</span><b>${esc(a.source)}</b></span>${imgEl(a.image,w)}`;
  return a.url?`<a class="ph ${cls}" href="${esc(a.url)}" target="_blank" rel="noopener" data-read="${esc(a.id)}" tabindex="-1" aria-hidden="true">${inner}</a>`:`<span class="ph ${cls}">${inner}</span>`;}
function ameta(a){const d=a.publishedAt?fmtDay(a.publishedAt,{month:"short",day:"numeric",year:"numeric"}):"";
  return `<div class="ameta"><b>${esc(a.source)}</b>${d?`<span>${esc(d)}</span>`:""}${a.readMinutes?`<span>${a.readMinutes} min read</span>`:""}${isNew(a)?`<span class="new">New</span>`:""}</div>`;}
const aLink=(a,inner)=>a.url?`<a href="${esc(a.url)}" target="_blank" rel="noopener" data-read="${esc(a.id)}">${inner}</a>`:inner;
function aActs(a){return `<div class="aacts">${a.url?`<a class="btn sm" href="${esc(a.url)}" target="_blank" rel="noopener" data-read="${esc(a.id)}">Read ${icon("ext")}</a>`:""}<button type="button" class="btn sm ghost" data-lesson="${esc(a.id)}">${icon("book")}Notes</button><span class="sp"></span>${heart("a:"+a.id,a.title,"flat")}</div>`;}
function acard(a){return `<article class="ac">${artThumb(a)}${ameta(a)}<h3>${aLink(a,esc(a.title))}</h3>${a.summary?`<p>${esc(a.summary)}</p>`:""}${aActs(a)}</article>`;}
function productsFor(a,n=3){const cats=new Set(a.sections.flatMap(s=>SEC_CATS[s]||[]));const st=new Set(a.styles);const as=activeStyle();
  const scored=PRODUCTS.map(p=>({p,s:(p.styles.some(x=>st.has(x))?3:0)+(cats.has(p.category)?2:0)+(a.sections.includes("fabrics-heat")&&p.heat===3?1:0)+(as&&p.styles.includes(as.id)?.5:0)+(isDeal(p)?.3:0)})).filter(x=>x.s>=2);
  scored.sort((x,y)=>y.s-x.s||priceOf(x.p).price-priceOf(y.p).price);const out=[],seen=new Set();
  for(const x of scored){if(seen.has(x.p.category))continue;seen.add(x.p.category);out.push(x.p);if(out.length>=n)break;}
  return out;}
function shopThis(a){const ps=productsFor(a);if(!ps.length)return"";return `<aside class="shopthis" aria-label="Shop this story"><h3 class="d d-s">Shop this</h3><p>Pieces that match “${esc(a.title.length>70?a.title.slice(0,68)+"…":a.title)}”</p><div class="minis">${ps.map(mini).join("")}</div></aside>`;}
const artSorted=()=>ARTICLES.slice().sort((x,y)=>ts(y.addedAt)-ts(x.addedAt)||ts(y.publishedAt)-ts(x.publishedAt));

/* ---------- Matching (style looks, trip checks) ---------- */
const txt=p=>(p.name+" "+(p.fabric||"")+" "+(p.why||"")).toLowerCase();
const isRain=p=>p.category==="layer"&&/rain|torrentshell|beta jacket|waterproof|\b3l\b|2\.5l|h2no|gore/.test(txt(p));
const isWarm=p=>p.category==="layer"&&!isRain(p)&&(p.heat<=1||/merino|wool|knit|fleece|puff|chamois|quarter.zip|cpo|sweater/.test(txt(p)));
const isWind=p=>p.category==="layer"&&(isRain(p)||/wind|houdini|shell/.test(txt(p)));
const isSandal=p=>p.category==="shoes"&&/sandal|chaco/.test(txt(p));
const isSlip=p=>p.category==="shoes"&&/slip|loafer|clog|sandal|chaco/.test(txt(p));
const isClosed=p=>p.category==="shoes"&&!isSandal(p)&&!/301|flip/.test(txt(p));
const isGrip=p=>isClosed(p)&&/runner|cloud|transport|hoka|trail|sneaker|vibram/.test(txt(p));
const isQuick=p=>/quick.dry|polyester|nylon|merino|tech|performance|elastane|spandex/.test(txt(p));
const isHat=p=>p.category==="accessories"&&/hat/.test(txt(p));
const tierD=(a,b)=>Math.abs(TIERS.indexOf(a)-TIERS.indexOf(b));
function pickFor(styleId,slot,tier,exclude){const sl=SLOTS.find(s=>s.id===slot);const s=STYLE(styleId);const t=(s&&s.outfit&&s.outfit[slot]||"").toLowerCase();
  const cands=PRODUCTS.filter(p=>sl.cats.includes(p.category)&&(!exclude||!exclude.has(p.id)));if(!cands.length)return null;
  const want=c=>{if(slot==="top"){if(/polo/.test(t))return c==="polos";if(/t-shirt|\btee\b/.test(t))return c==="tees";return c==="shirts-button";}
    if(slot==="bottom")return /shorts/.test(t)?c==="shorts":c==="pants";return true;};
  const kw=p=>{const x=txt(p);if(slot==="shoes"){if(/sandal/.test(t))return isSandal(p);if(/loafer/.test(t)&&/loafer|slip/.test(x))return true;if(/sneaker/.test(t))return /sneaker|runner|achilles|cloud|cruiser/.test(x);}
    if(slot==="accessory"){if(/hat/.test(t))return isHat(p);if(/sling|bag/.test(t))return /sling|side effect|bag/.test(x);if(/watch|strap/.test(t))return /band|watch/.test(x);if(/belt/.test(t))return /belt/.test(x);if(/sunglass/.test(t))return /sunglass|aviator/.test(x);}
    if(slot==="layer"){if(/shell|windproof/.test(t))return isWind(p);if(/overshirt|jacket/.test(t))return /shirt.jacket|cpo|chamois|jacket|houdini/.test(x);}
    if(slot==="top"&&/long-sleeve/.test(t))return /long sleeve|l\/s|button-up|point-collar/.test(x);return false;};
  const sc=p=>(p.styles.includes(styleId)?4:0)+(want(p.category)?3:0)+(kw(p)?2.5:0)+(3-1.6*tierD(p.tier,tier))+(styleId==="temple-day"&&p.templeOk?3:0)+(styleId==="sanctuary-day"&&isQuick(p)?1.5:0)+(p.image?.2:0);
  cands.sort((a,b)=>sc(b)-sc(a)||priceOf(a).price-priceOf(b).price);return cands[0];}
function styleLook(styleId,tier){const s=STYLE(styleId);const r={};SLOTS.forEach(sl=>{r[sl.id]=s&&s.outfit&&s.outfit[sl.id]===null?null:pickFor(styleId,sl.id,tier);});return r;}
function rebuildAt(tier){const st=S.build.style;const out={};
  SLOTS.forEach(sl=>{const cur=PROD[S.build.slots[sl.id]];if(!cur){out[sl.id]=null;return;}
    const c=PRODUCTS.filter(p=>p.category===cur.category);
    const sc=p=>(3-1.6*tierD(p.tier,tier))*2+p.styles.filter(x=>cur.styles.includes(x)).length+(st&&p.styles.includes(st)?1.5:0)+(p.templeOk===cur.templeOk?.6:0)+(p.id===cur.id?.4:0);
    c.sort((a,b)=>sc(b)-sc(a)||priceOf(a).price-priceOf(b).price);out[sl.id]=c[0]?c[0].id:cur.id;});
  return out;}
function worksFor(slots){const g=k=>PROD[slots[k]]||null;const top=g("top"),bot=g("bottom"),lay=g("layer"),sho=g("shoes");const all=SLOTS.map(s=>g(s.id)).filter(Boolean);
  return [
   {ic:"sun",l:"Chiang Mai day",ok:!!(top&&bot&&top.heat>=2&&bot.heat>=2),why:!top||!bot?"Needs a top and a bottom":top.heat<2||bot.heat<2?"Too warm for the afternoon heat":"Breathable top and bottom"},
   {ic:"temple",l:"Temple",ok:!!(top&&bot&&top.templeOk&&bot.templeOk&&bot.category==="pants"),why:!top||!bot?"Needs a top and long trousers":!top.templeOk?"Top doesn't cover enough":bot.category!=="pants"||!bot.templeOk?"Needs long trousers":"Shoulders and knees covered"},
   {ic:"elephant",l:"Sanctuary",ok:!!(sho&&isSandal(sho)&&top&&isQuick(top)),why:!sho||!isSandal(sho)?"Needs strap sandals for the river":!top||!isQuick(top)?"Needs a quick-dry top":"Quick-dry, river-ready feet"},
   {ic:"moon",l:"Hanoi evening",ok:!!(lay&&isWarm(lay)&&bot&&bot.category==="pants"&&sho&&isClosed(sho)),why:!lay||!isWarm(lay)?"Needs a warm layer for 55 to 65 °F":!bot||bot.category!=="pants"?"Needs long trousers":!sho||!isClosed(sho)?"Needs closed shoes":"Warm layer, long trousers"},
   {ic:"plane",l:"Travel day",ok:!!(sho&&all.filter(p=>p.styles.includes("travel-day")).length>=2),why:!sho?"Needs shoes":all.filter(p=>p.styles.includes("travel-day")).length>=2?"Comfortable for the flight":"Needs two travel-day pieces"}];}
const STOP_MATCH={"Chiang Mai":p=>p.styles.includes("chiang-mai-old-town")||p.styles.includes("temple-day"),
 "Elephant sanctuary":p=>p.styles.includes("sanctuary-day")||isSandal(p),
 Hanoi:p=>p.styles.includes("hanoi-evening")||isWarm(p),
 "Ninh Binh":p=>isRain(p)||isWind(p)||isGrip(p)||p.styles.includes("sanctuary-day")};

/* ---------- Toast ---------- */
function toast(msg){$("#toasts").innerHTML="";const el=document.createElement("div");el.className="toast";el.innerHTML=icon("check");el.append(document.createTextNode(msg));$("#toasts").appendChild(el);setTimeout(()=>el.remove(),2600);}

/* ---------- Layout chrome ---------- */
const NAV=[["drops","Drops","bolt"],["shop","Shop","tag"],["guide","Guide","book"],["build","Build","hanger"],["pack","Pack","suitcase"],["closet","Closet","closet"]];
function renderChrome(top){
  $("#nav").innerHTML=NAV.map(([k,l])=>`<a href="#/${k}"${k===top?' aria-current="page"':""}>${l}</a>`).join("");
  $("#tabs").innerHTML=NAV.slice(0,5).map(([k,l,ic])=>`<a href="#/${k}"${k===top?' aria-current="page"':""}>${icon(ic)}<span>${l}</span></a>`).join("");
  const cl=$("#closetLink");cl.toggleAttribute("aria-current",top==="closet");if(top==="closet")cl.setAttribute("aria-current","page");
  const a=activeStyle();const wb=$("#wearbar");
  if(a){const left=Math.max(1,Math.ceil((ts(a.until)-Date.now())/DAY));wb.innerHTML=`<div class="wearbar"><div class="wrap"><span>Wearing <b>${esc(STYLE(a.id).name)}</b> · ${plural(left,"day")} left · <a href="#/style/${esc(a.id)}">Lookbook</a></span><button type="button" data-unwear aria-label="Stop wearing this style">${icon("x")}</button></div></div>`;}
  else wb.innerHTML="";
  const up=META.updatedAt?new Date(META.updatedAt).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"}):"";
  $("#footNote").textContent=up?`Prices checked ${up}; links go to the retailer.`:"Links go to the retailer.";}

/* ---------- Drops ---------- */
function todayDrop(){const t=localDate(new Date());return DROPS.find(d=>d.date<=t)||DROPS[DROPS.length-1]||null;}
function tripChip(){const tr=trip();const d=daysUntil(tr.start),e=daysUntil(tr.end);
  if(d==null)return"";if(d>1)return `Trip in ${d} days`;if(d===1)return "Trip tomorrow";if(d===0)return "Trip starts today";if(e!=null&&e>=0)return "On the trip";return "Trip done";}
function boost(list){const a=activeStyle();if(!a)return list;return list.map((p,i)=>({p,i,s:p.styles.includes(a.id)?0:1})).sort((x,y)=>x.s-y.s||x.i-y.i).map(x=>x.p);}
function titleLines(t){const w=String(t).split(/\s+/).filter(Boolean);if(w.length<2)return `<span class="ln">${esc(t)}</span>`;
  const cut=Math.ceil(w.length/2);return `<span class="ln">${esc(w.slice(0,cut).join(" "))}</span><span class="ln"><em>${esc(w.slice(cut).join(" "))}</em></span>`;}
function pageDrops(date){
  const today=todayDrop();const drop=date?DROPS.find(d=>d.date===date):today;
  if(!drop)return emptyPage("bolt","No drop yet","The first drop lands with the next daily update.");
  const isToday=today&&drop.date===today.date;
  const ps=boost(drop.productIds.map(id=>PROD[id]).filter(Boolean));
  const art=ps.filter(p=>p.image).slice(0,3);while(art.length<3&&ps[art.length])art.push(ps[art.length]);
  const low=ps.length?Math.min(...ps.map(p=>priceOf(p).price)):0;
  const deals=ps.filter(isDeal).length;
  const rated=ps.filter(p=>p.rating!=null).sort(byRated);const topId=rated.length>1?rated[0].id:null;
  let h=`<section class="hero" aria-labelledby="dropT"><div class="art">${art.map((p,i)=>photo(p,"",{w:1200,eager:i===0||WIDE()})).join("")}</div>
   <div class="wrap in"><h1 class="d d-xl" id="dropT">${titleLines(drop.title||drop.theme)}</h1>
   ${drop.blurb?`<p class="lede">${esc(drop.blurb)}</p>`:""}
   <div class="meta"><span class="chip hot">${icon("plane")}${esc(tripChip())}</span><span class="chip">${isToday?"Today's drop":"Past drop"} · ${esc(fmtDay(drop.date,{weekday:"short",month:"short",day:"numeric"}))}</span><span class="chip">${plural(ps.length,"piece")} from ${money(low)}</span>${deals?`<span class="chip">${deals} on sale</span>`:""}</div>
   <div class="cta"><button class="btn acc" type="button" data-scroll="dropgrid">Shop the drop ${icon("down")}</button>${isToday?"":`<a class="btn" href="#/drops">Today's drop</a>`}</div></div></section>`;
  h+=`<div class="wrap"><section class="sec" id="dropgrid" aria-labelledby="dgT"><div class="shead"><div><h2 class="d d-m" id="dgT">The drop</h2><p>${esc(drop.theme)} · picked for the trip, sized for you</p></div></div><div class="grid">${ps.map((p,i)=>pcard(p,{eager:i<4,top:p.id===topId})).join("")}</div></section>`;
  const da=(drop.articleIds||[]).map(id=>ART[id]).filter(Boolean);
  if(da.length)h+=`<section class="sec" aria-labelledby="rbT"><div class="shead"><h2 class="d d-m" id="rbT">Read before you buy</h2></div><div class="rail art">${da.map(acard).join("")}</div></section>`;
  const past=DROPS.filter(d=>d.date!==drop.date);
  if(past.length)h+=`<section class="sec" aria-labelledby="pdT"><div class="shead"><h2 class="d d-m" id="pdT">${isToday?"Past drops":"More drops"}</h2></div><div class="archive">${past.map(d=>{const f=d.productIds.map(id=>PROD[id]).filter(Boolean);const cover=f.find(p=>p.image)||f[0];
    return `<a class="dcard" href="#/drops/${esc(d.date)}"${today&&d.date===today.date?' aria-label="Today\'s drop"':""}>${cover?photo(cover,"",{w:400}):`<span class="ph"></span>`}<span class="t"><span class="d">${esc(d.title||d.theme)}</span><small>${esc(fmtDay(d.date,{weekday:"short",month:"short",day:"numeric"}))} · ${plural(f.length,"piece")}</small></span></a>`;}).join("")}</div></section>`;
  let dropsL=PRODUCTS.filter(p=>priceOf(p).drop);let dropT="Price drops",dropP="Lower than when we first checked.";
  if(!dropsL.length){dropsL=PRODUCTS.filter(p=>priceOf(p).was).sort((a,b)=>priceOf(b).off-priceOf(a).off);dropT="On sale now";dropP="No new price drops since the last check. These are already marked down at the store.";}
  if(dropsL.length)h+=`<section class="sec" aria-labelledby="prT"><div class="shead"><div><h2 class="d d-m" id="prT">${dropT}</h2><p>${dropP}</p></div><a class="more" href="#/shop">Shop all ${icon("chev","sm")}</a></div><div class="rail">${boost(dropsL).slice(0,12).map(pcard).join("")}</div></section>`;
  const evA=new Set((META.events||[]).filter(e=>e&&e.type==="article").map(e=>e.articleId));
  const reads=artSorted().filter(isNew).sort((a,b)=>(evA.has(b.id)?1:0)-(evA.has(a.id)?1:0)).slice(0,10);
  if(reads.length)h+=`<section class="sec" aria-labelledby="nrT"><div class="shead"><div><h2 class="d d-m" id="nrT">New reads</h2><p>${plural(ARTICLES.filter(isNew).length,"unread story")} in the guide.</p></div><a class="more" href="#/guide">Style guide ${icon("chev","sm")}</a></div><div class="rail art">${reads.map(acard).join("")}</div></section>`;
  return h+`</div>`;}

/* ---------- Shop ---------- */
function pageShop(cat){if(cat&&!CATS.includes(cat))cat=null;const f=S.shop;
  const base=cat?PRODUCTS.filter(p=>p.category===cat):PRODUCTS;
  let list=base.filter(p=>(f.tier==="all"||p.tier===f.tier)&&(!f.temple||p.templeOk)&&(!f.deal||isDeal(p))&&(!f.top||(p.rating!=null&&p.rating>=4.5)));
  if(f.occ){if(f.occ.startsWith("stop:")){const m=STOP_MATCH[f.occ.slice(5)];if(m)list=list.filter(m);}else list=list.filter(p=>p.styles.includes(f.occ));}
  const td=todayDrop();const inDrop=new Set(td?td.productIds:[]);const a=activeStyle();
  if(f.sort==="low")list.sort((x,y)=>priceOf(x).price-priceOf(y).price);
  else if(f.sort==="high")list.sort((x,y)=>priceOf(y).price-priceOf(x).price);
  else if(f.sort==="rated")list.sort(byRated);
  else if(f.sort==="reviews")list.sort((a,b)=>ck(b)-ck(a)||rk(b)-rk(a));
  else{const sc=p=>(a&&p.styles.includes(a.id)?10:0)+(inDrop.has(p.id)?3:0)+(priceOf(p).drop?2:0)+(priceOf(p).was?1:0);list=list.map((p,i)=>({p,i})).sort((x,y)=>sc(y.p)-sc(x.p)||x.i-y.i).map(x=>x.p);}
  const stops=trip().stops.map(s=>s.name).filter(n=>STOP_MATCH[n]);
  const title=cat?CAT_TAB[cat]:"Shop everything";
  let h=`<div class="wrap pagehead"><h1 class="d d-l">${esc(title)}</h1><p class="lede">${esc(cat?catLede(cat):"Every piece we're tracking for the trip, in three tiers: Good, Better and Buy for life.")}</p></div>
  <nav class="cats" aria-label="Categories"><div class="wrap"><div class="scrollx"><a href="#/shop"${!cat?' aria-current="page"':""}>All<small>${PRODUCTS.length}</small></a>${CATS.map(c=>`<a href="#/shop/${c}"${c===cat?' aria-current="page"':""}>${esc(CAT_TAB[c])}<small>${PRODUCTS.filter(p=>p.category===c).length}</small></a>`).join("")}</div></div></nav>
  <div class="wrap"><div class="filters" role="group" aria-label="Filters">
   <div class="seg" role="group" aria-label="Tier">${[["all","All"],...TIERS.map(t=>[t,TIER_L[t]])].map(([k,l])=>`<button type="button" data-sf="tier" data-v="${k}" aria-pressed="${f.tier===k}">${l}</button>`).join("")}</div>
   <label class="sr" for="fOcc">Wear it for</label><select class="field" id="fOcc" data-sfsel="occ"><option value="">Any stop or style</option><optgroup label="Trip stops">${stops.map(n=>`<option value="stop:${esc(n)}"${f.occ==="stop:"+n?" selected":""}>${esc(n)}</option>`).join("")}</optgroup><optgroup label="Styles">${STYLES.map(s=>`<option value="${esc(s.id)}"${f.occ===s.id?" selected":""}>${esc(s.name)}</option>`).join("")}</optgroup></select>
   <button type="button" class="chip" data-sf="temple" aria-pressed="${f.temple}">${icon("temple")}Temple-ready</button>
   <button type="button" class="chip" data-sf="deal" aria-pressed="${f.deal}">${icon("tag")}On sale</button>
   <button type="button" class="chip" data-sf="top" aria-pressed="${f.top}">${icon("star")}4.5★ and up</button>
   <label class="sr" for="fSort">Sort</label><select class="field" id="fSort" data-sfsel="sort">${SORTS.map(([k,l])=>`<option value="${k}"${f.sort===k?" selected":""}>${l}</option>`).join("")}</select>
  </div>
  <p class="rescount" aria-live="polite">${plural(list.length,"piece")}${a&&f.sort==="featured"?` · ${esc(STYLE(a.id).name)} pieces first`:""}</p>
  ${list.length?`<div class="grid">${list.map(pcard).join("")}</div>`:empty("tag","Nothing matches","Loosen a filter to see more pieces.",`<button class="btn" type="button" data-sreset>Clear filters</button>`)}</div>`;
  return h;}
function catLede(c){return {"shirts-button":"Linen and cotton-linen button-ups. Short sleeves for Chiang Mai nights, long sleeves for the strictest temples.",polos:"Knit and tech polos that read smart at dinner and survive a humid day.",tees:"Merino and slub tees for travel days and layering under Hanoi evenings.",pants:"Long, light trousers: the temple uniform. Tall inseams where we could find them.",shorts:"Quick-dry shorts for the sanctuary, river crossings and travel days.",layer:"Rain shells for Ninh Binh, warm layers for 55 to 65 °F Hanoi nights.",shoes:"Slip-ons for temples, strap sandals for the river, grip for Hang Mua's 500 steps.",accessories:"Slings, hats, belts, straps and the small things that make a carry-on work."}[c]||"";}

/* ---------- Style guide ---------- */
let LATEST_N=18;
function pageGuide(){const m=S.guideMode;
  let h=`<div class="wrap pagehead"><h1 class="d d-l">Style guide</h1><p class="lede">What to wear in the heat, at the temples and after dark in Hanoi. Our summaries, with links to the full stories.</p>
  <div class="seg mt24" role="group" aria-label="Guide view">${[["latest","Latest"],["section","By section"],["styles","Styles"]].map(([k,l])=>`<button type="button" data-gm="${k}" aria-pressed="${m===k}">${l}</button>`).join("")}</div></div><div class="wrap">`;
  if(m==="styles")h+=stylesGrid();
  else if(m==="section")h+=SECTIONS.map(([id,l])=>{const as=artSorted().filter(a=>a.sections.includes(id));if(!as.length)return"";const n=as.filter(isNew).length;
    return `<section class="shelf" aria-labelledby="sh-${id}"><div class="shead"><div><h2 class="d d-m" id="sh-${id}">${esc(l)}<span class="count${n?"":" zero"}" title="${n} new">${n?n+" new":"All read"}</span></h2><p>${esc(SEC_TRIP[id])}</p></div><a class="more" href="#/guide/section/${id}">See all ${as.length} ${icon("chev","sm")}</a></div><div class="rail art">${as.slice(0,10).map(acard).join("")}</div></section>`;}).join("");
  else{const all=artSorted();const lead=all[0];
    if(lead)h+=`<article class="lead">${artThumb(lead,"wide",1200)}<div>${ameta(lead)}<h2 class="mt8">${aLink(lead,esc(lead.title))}</h2>${lead.summary?`<p class="sum">${esc(lead.summary)}</p>`:""}<div class="mt16">${aActs(lead)}</div></div></article>${shopThis(lead)}`;
    const rest=all.slice(1,1+LATEST_N);const chunks=[];for(let i=0;i<rest.length;i+=6)chunks.push(rest.slice(i,i+6));
    h+=chunks.map((c,i)=>`<div class="agrid">${c.map(acard).join("")}</div>${i<chunks.length-1&&c.length===6?`<div class="mt24">${shopThis(c[0])}</div>`:`<div class="mt24"></div>`}`).join("");
    if(all.length>1+LATEST_N)h+=`<div style="text-align:center;margin-top:12px"><button class="btn" type="button" data-more>Show more stories</button></div>`;}
  return h+`</div>`;}
function pageSection(id){const l=SEC_L[id];if(!l)return emptyPage("book","Section not found","That guide section doesn't exist.",`<a class="btn" href="#/guide">Style guide</a>`);
  const as=artSorted().filter(a=>a.sections.includes(id));const n=as.filter(isNew).length;
  return `<div class="wrap pagehead"><a class="backlink" href="#/guide">${icon("back","sm")}Style guide</a><h1 class="d d-l mt8">${esc(l)}</h1><p class="lede">${esc(SEC_TRIP[id])}</p><div class="chips mt16"><span class="chip">${plural(as.length,"story")}</span>${n?`<button type="button" class="chip" data-readall="${id}">${icon("check")}Mark ${n} as read</button>`:`<span class="chip">All read</span>`}</div></div><div class="wrap"><div class="agrid">${as.map(acard).join("")}</div></div>`;}
function bands(pal){return `<span class="bands" aria-hidden="true">${pal.map(c=>`<i style="background:${PAL[c]||"#555"}"></i>`).join("")}</span>`;}
function palChips(pal){return `<div class="pal">${pal.map(c=>`<span><i style="background:${PAL[c]||"#555"}"></i>${esc(c)}</span>`).join("")}</div>`;}
function styleHero(s){const look=styleLook(s.id,"better");return [look.top,look.layer,look.bottom,look.shoes].find(p=>p&&p.image)||look.top;}
function stylesGrid(){const a=activeStyle();
  return `<div class="styles">${STYLES.map(s=>{const hp=styleHero(s);return `<a class="scard" href="#/style/${esc(s.id)}">${bands(s.palette)}${hp?photo(hp):""}${a&&a.id===s.id?`<span class="badge on">Wearing</span>`:""}<span class="t"><span class="d">${esc(s.name)}</span><p>${esc(s.tagline)}</p><div class="pal">${s.palette.map(c=>`<span><i style="background:${PAL[c]||"#555"}"></i>${esc(c)}</span>`).join("")}</div></span></a>`;}).join("")}</div>`;}
function pageStyle(id){const s=STYLE(id);if(!s)return emptyPage("book","Style not found","That style doesn't exist.",`<a class="btn" href="#/guide">Style guide</a>`);
  const tier=S.tier;const look=styleLook(s.id,tier);const a=activeStyle();const wearing=a&&a.id===s.id;const hp=styleHero(s);
  const tot=SLOTS.reduce((t,sl)=>t+(look[sl.id]?priceOf(look[sl.id]).price:0),0);
  const arts=s.articleIds.map(i=>ART[i]).filter(Boolean);
  let h=`<section class="lookhero" aria-labelledby="lkT">${bands(s.palette)}<div class="art">${hp?photo(hp,"",{w:1200,eager:true}):""}</div><div class="wrap in"><a class="backlink" href="#/guide">${icon("back","sm")}Styles</a><h1 class="d d-xl" id="lkT">${esc(s.name)}</h1><p class="lede">${esc(s.tagline)}</p>
   <div class="cta" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px"><button class="btn ${wearing?"solid":"acc"}" type="button" data-wear="${esc(s.id)}" aria-pressed="${wearing}">${wearing?icon("check")+"Wearing this style":"Wear this style"}</button><button class="btn" type="button" data-preset="${esc(s.id)}">Open in Build</button></div>
   ${wearing?`<p class="note" style="color:var(--ink2)">Its pieces come first in Drops and Shop until ${esc(new Date(ts(a.until)).toLocaleDateString("en-US",{month:"short",day:"numeric"}))}.</p>`:`<p class="note" style="color:var(--ink2)">Wearing it puts its pieces first in Drops and Shop for 7 days.</p>`}</div></section>
  <div class="wrap"><section class="sec twocol"><div><h2 class="d d-m">The rules</h2><ul class="rules mt16">${s.rules.map(r=>`<li>${icon("check")}<span>${esc(r)}</span></li>`).join("")}</ul></div><div><h2 class="d d-m">The palette</h2><div class="mt16" style="display:grid;grid-template-columns:repeat(${s.palette.length},1fr);height:120px;border-radius:var(--r);overflow:hidden">${s.palette.map(c=>`<i style="background:${PAL[c]||"#555"}"></i>`).join("")}</div><div class="mt16">${palChips(s.palette)}</div></div></section>
  <section class="sec" aria-labelledby="otT"><div class="shead" style="flex-wrap:wrap"><div><h2 class="d d-m" id="otT">The outfit</h2><p>Built from real pieces at your tier. ${esc(TIER_L[tier])} total <b class="num" style="color:var(--acc)">${money0(tot)}</b>.</p></div><div class="seg acc" role="group" aria-label="Tier">${TIERS.map(t=>`<button type="button" data-lt="${t}" aria-pressed="${tier===t}">${TIER_L[t]}</button>`).join("")}</div></div>
  <div class="grid">${SLOTS.map(sl=>{const p=look[sl.id];if(p)return pcard(p);return `<div class="pc"><span class="ph" style="display:grid;place-items:center;border-radius:var(--r);background:var(--bg2);box-shadow:inset 0 0 0 1px var(--line2)"><span class="cap mute">No ${esc(sl.l.toLowerCase())} needed</span></span><div class="pc-body"><div class="pc-brand">${esc(sl.l)}</div><p class="mute" style="margin:0;font-size:13px">${esc(s.outfit&&s.outfit[sl.id]===null?"This look skips it. Stay light.":"Nothing tracked yet.")}</p></div></div>`;}).join("")}</div></section>
  ${arts.length?`<section class="sec" aria-labelledby="lrT"><div class="shead"><h2 class="d d-m" id="lrT">Read the why</h2></div><div class="agrid">${arts.map(acard).join("")}</div></section>`:""}</div>`;
  return h;}

/* lesson cards */
function openLesson(id){const a=ART[id];if(!a)return;
  const sts=a.styles.map(STYLE).filter(Boolean);const rules=[];sts.forEach(s=>s.rules.forEach(r=>{if(rules.length<3&&!rules.includes(r))rules.push(r);}));
  const ps=productsFor(a);const sec=a.sections[0];
  const cards=[
   `<div class="lc"><span class="cap n">1 of 5 · Our notes</span><h3 class="d d-m">${esc(a.title)}</h3><p>${esc(a.source)}${a.readMinutes?` · ${a.readMinutes} min read`:""}</p><span class="sp"></span><p>Five quick cards: the gist, why it matters for your trip, the rules it backs, and pieces to try.</p></div>`,
   `<div class="lc"><span class="cap n">2 of 5 · The gist</span><h3 class="d d-s">In short</h3><p>${esc(a.summary||"No summary yet. Open the original for the details.")}</p></div>`,
   `<div class="lc"><span class="cap n">3 of 5 · Your trip</span><h3 class="d d-s">${esc(SEC_L[sec]||"For the trip")}</h3><p>${esc(SEC_TRIP[sec]||SEC_TRIP["packing-travel"])}</p>${sts.length?`<p>Backs ${sts.map(s=>esc(s.name)).join(" and ")}.</p>`:""}</div>`,
   `<div class="lc"><span class="cap n">4 of 5 · Rules it backs</span><h3 class="d d-s">Keep in mind</h3>${rules.length?`<ul>${rules.map(r=>`<li>${esc(r)}</li>`).join("")}</ul>`:`<p>General reading. Pair it with the style that fits the day.</p>`}</div>`,
   `<div class="lc"><span class="cap n">5 of 5 · Try it</span><h3 class="d d-s">Pieces to match</h3>${ps.length?`<div class="minis">${ps.map(mini).join("")}</div>`:`<p>No matching pieces yet.</p>`}<span class="sp"></span>${a.url?`<a class="btn solid" href="${esc(a.url)}" target="_blank" rel="noopener" data-read="${esc(a.id)}">Read the full article ${icon("ext")}</a>`:""}</div>`];
  $("#lessonT").textContent="Our notes · "+a.source;const c=$("#lessonCards");c.innerHTML=cards.join("");c.scrollLeft=0;lessonDots(0);showDlg($("#dlgLesson"));}
const lessonIdx=()=>{const c=$("#lessonCards");return Math.round(c.scrollLeft/Math.max(1,c.clientWidth+14));};
function lessonDots(i){$("#lessonDots").innerHTML=[0,1,2,3,4].map(k=>`<i class="${k===i?"on":""}"></i>`).join("");$("#lessonPrev").disabled=i===0;$("#lessonNext").textContent=i>=4?"Done":"Next";}
function lessonGo(d){const c=$("#lessonCards");const i=lessonIdx()+d;if(i>4){closeDlg($("#dlgLesson"));return;}c.scrollTo({left:Math.max(0,i)*(c.clientWidth+14),behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}

/* ---------- Build ---------- */
function applyStyle(id,tier){const look=styleLook(id,tier);S.build={slots:{},tier,style:id};SLOTS.forEach(s=>S.build.slots[s.id]=look[s.id]?look[s.id].id:null);save();}
function ensureBuild(){if(S.build&&SLOTS.some(s=>PROD[S.build.slots[s.id]]))return;const a=activeStyle();applyStyle(a?a.id:"chiang-mai-old-town",S.tier);}
const buildTotal=slots=>SLOTS.reduce((t,s)=>{const p=PROD[slots[s.id]];return t+(p?priceOf(p).price:0);},0);
function pageBuild(){ensureBuild();const b=S.build;const st=STYLE(b.style);
  let h=`<div class="wrap pagehead"><h1 class="d d-l">Build the look</h1><p class="lede">Five slots, one outfit. Start from a style, swap any piece, and check it against every stop on the trip.</p>
   <div class="mt24"><span class="cap mute">Start from a style</span><div class="scrollx mt8">${STYLES.map(s=>`<button type="button" class="chip" data-preset="${esc(s.id)}" aria-pressed="${b.style===s.id}">${esc(s.name)}</button>`).join("")}</div></div></div>
  <div class="wrap"><div class="slots">${SLOTS.map(sl=>{const p=PROD[b.slots[sl.id]];
    if(!p)return `<div class="slot empty"><span class="ph">${icon(CAT_G[sl.cats[0]]||"tag")}</span><div class="info"><div class="lbl"><span class="cap">${sl.l}</span></div><span class="mute" style="font-size:13px">Empty${st&&st.outfit&&st.outfit[sl.id]===null?`. ${esc(st.name)} skips it.`:""}</span><div class="acts"><button class="btn sm" type="button" data-swap="${sl.id}">${icon("plus")}Add</button></div></div></div>`;
    const x=priceOf(p);
    return `<div class="slot"><a href="#/p/${esc(p.id)}" aria-label="${esc(dname(p))}">${photo(p,"",T200)}</a><div class="info"><div class="lbl"><span class="cap">${sl.l}</span>${tierChip(p.tier)}</div><span class="pc-brand">${esc(p.brand)}</span><a class="nm" href="#/p/${esc(p.id)}">${esc(p.name)}</a><div class="pr-row"><span class="price">${money(x.price)}</span>${x.was?`<s>${money(x.was)}</s>`:""}</div>${care(p)}
     <div class="acts"><button class="btn sm" type="button" data-swap="${sl.id}">${icon("swap")}Swap</button>${buyLink(p,"btn sm")}${sl.id==="layer"||sl.id==="accessory"?`<button class="btn sm ghost" type="button" data-clear="${sl.id}" aria-label="Remove ${sl.l.toLowerCase()}">${icon("x")}</button>`:""}</div></div></div>`;}).join("")}</div>
  <section class="sec" aria-labelledby="wfT"><div class="shead"><h2 class="d d-m" id="wfT">Works for</h2></div><div class="works">${worksFor(b.slots).map(w=>`<div class="work ${w.ok?"y":"n"}">${icon(w.ok?"check":w.ic)}<div><b>${esc(w.l)}</b><small>${esc(w.why)}</small></div></div>`).join("")}</div></section>
  <section class="sec" aria-labelledby="svT"><div class="shead"><div><h2 class="d d-m" id="svT">Save this outfit</h2><p>Saved outfits feed the packing list.</p></div></div>
   <form class="saveform" id="saveOutfit"><label class="sr" for="ofName">Outfit name</label><input class="field" id="ofName" maxlength="60" placeholder="${esc((st?st.name:"My outfit")+" · "+TIER_L[b.tier])}"><button class="btn solid" type="submit">${icon("plus")}Save outfit</button></form>
   ${S.outfits.length?`<div class="outfits mt16">${S.outfits.map(o=>{const ps=SLOTS.map(s=>PROD[o.slots[s.id]]).filter(Boolean);return `<div class="of"><div style="min-width:0"><b>${esc(o.name)}</b><small class="num">${money0(buildTotal(o.slots))} · ${plural(ps.length,"piece")}</small><div class="thumbs">${ps.map(p=>photo(p,"",T200)).join("")}</div></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end"><button class="btn sm" type="button" data-loadof="${esc(o.id)}">Load</button><button class="btn sm ghost" type="button" data-delof="${esc(o.id)}" aria-label="Delete ${esc(o.name)}">${icon("trash")}</button></div></div>`;}).join("")}</div>`:""}
  </section></div>
  <div class="totalbar"><div class="wrap"><div><small>Outfit total</small><span class="tot num">${money0(buildTotal(b.slots))}</span></div><span class="sp"></span><div class="seg acc" role="group" aria-label="Tier">${TIERS.map(t=>`<button type="button" data-bt="${t}" aria-pressed="${b.tier===t}">${t==="bifl"?"For life":TIER_L[t]}</button>`).join("")}</div><button class="btn solid hide-sm" type="button" data-saveof>Save outfit</button></div></div>`;
  return h;}
let SWAP=null;
function openSwap(slot,tierF){const sl=SLOTS.find(s=>s.id===slot);if(!sl)return;SWAP={slot,tier:tierF||"all"};
  const cur=S.build.slots[slot];const list=PRODUCTS.filter(p=>sl.cats.includes(p.category)&&(SWAP.tier==="all"||p.tier===SWAP.tier));
  list.sort((a,b)=>(b.id===cur)-(a.id===cur)||TIERS.indexOf(a.tier)-TIERS.indexOf(b.tier)||priceOf(a).price-priceOf(b).price);
  $("#swapT").textContent="Swap "+sl.l.toLowerCase();
  $("#swapB").innerHTML=`<div class="seg" role="group" aria-label="Tier" style="margin-bottom:12px">${[["all","All"],...TIERS.map(t=>[t,TIER_L[t]])].map(([k,l])=>`<button type="button" data-swaptier="${k}" aria-pressed="${SWAP.tier===k}">${l}</button>`).join("")}</div>
   ${list.map(p=>{const x=priceOf(p);const on=p.id===cur;return `<div class="alt${on?" cur":""}">${photo(p,"",T200)}<div style="min-width:0"><div class="pc-brand">${esc(p.brand)} · ${esc(CAT_L[p.category])}</div><div class="nm">${esc(p.name)}</div><div class="pr-row"><span class="price">${money(x.price)}</span>${x.was?`<s>${money(x.was)}</s>`:""}${tierChip(p.tier)}</div>${rvLine(p,"mt4")}<div class="care mt8">${p.fabric?`<span>${esc(p.fabric)}</span>`:""}${heatIcons(p.heat)}${p.templeOk?`<span class="tok">${icon("temple","xs")}Temple-ready</span>`:""}</div>${p.why?`<p class="why">${esc(p.why)}</p>`:""}<div class="acts">${on?`<span class="btn sm solid" aria-disabled="true">${icon("check")}In your outfit</span>`:`<button class="btn sm acc" type="button" data-use="${esc(p.id)}">Use this</button>`}${buyLink(p)}</div></div></div>`;}).join("")||`<p>No pieces at this tier.</p>`}
   ${cur&&(slot==="layer"||slot==="accessory")?`<div class="mt16"><button class="btn ghost" type="button" data-clear="${slot}">Leave this slot empty</button></div>`:""}`;
  showDlg($("#dlgSwap"));}
function openPicker(title,pred){const list=PRODUCTS.filter(pred).sort((a,b)=>priceOf(a).price-priceOf(b).price);SWAP=null;
  $("#swapT").textContent=title;
  $("#swapB").innerHTML=list.map(p=>{const x=priceOf(p);return `<div class="alt">${photo(p,"",T200)}<div style="min-width:0"><div class="pc-brand">${esc(p.brand)}</div><div class="nm">${esc(p.name)}</div><div class="pr-row"><span class="price">${money(x.price)}</span>${tierChip(p.tier)}</div>${rvLine(p,"mt4")}${p.why?`<p class="why">${esc(p.why)}</p>`:""}<div class="acts"><button class="btn sm acc" type="button" data-addslot="${esc(p.id)}">Add to outfit</button><a class="btn sm" href="#/p/${esc(p.id)}">Details</a>${buyLink(p)}</div></div></div>`;}).join("")||`<p>Nothing tracked yet.</p>`;
  showDlg($("#dlgSwap"));}
function addToOutfit(id){const p=PROD[id];if(!p)return;ensureBuild();const sl=SLOT_OF(p.category);S.build.slots[sl]=p.id;save();toast(`Added to Build as ${SLOTS.find(s=>s.id===sl).l.toLowerCase()}`);}

/* ---------- Pack ---------- */
const closetOf=id=>S.closet[id]||null;
const bought=id=>{const c=closetOf(id);return !!c&&(c.status==="kept"||c.status==="ordered");};
const qtyOf=id=>Math.max(1,Math.min(9,num(S.qty[id],1)));
let GAPS=[];
function pagePack(){const tr=trip();
  let h=`<div class="wrap pagehead"><h1 class="d d-l">Pack the bag</h1><p class="lede">${esc(fmtDay(tr.start))} to ${esc(fmtDay(tr.end))}: ${esc(tr.stops.map(s=>s.name).join(", "))}. Pick the outfits you're taking; we merge them, count each piece and flag what's missing.</p></div><div class="wrap">`;
  if(!S.outfits.length)return h+empty("suitcase","Save an outfit to start packing","The packer merges your saved outfits, counts how often each piece is worn, and checks every stop for gaps.",`<a class="btn acc" href="#/build">Go to Build</a>`)+`</div>`;
  const ids=S.outfits.map(o=>o.id);const selIds=S.packSel?S.packSel.filter(i=>ids.includes(i)):ids;const sel=S.outfits.filter(o=>selIds.includes(o.id));
  h+=`<span class="cap mute">Outfits in the bag</span><div class="chips mt8" style="margin-bottom:24px" role="group" aria-label="Outfits to pack">${S.outfits.map(o=>`<button type="button" class="chip" data-packof="${esc(o.id)}" aria-pressed="${selIds.includes(o.id)}">${selIds.includes(o.id)?icon("check"):""}${esc(o.name)}</button>`).join("")}</div>`;
  const count={};sel.forEach(o=>SLOTS.forEach(s=>{const id=o.slots[s.id];if(id&&PROD[id])count[id]=(count[id]||0)+1;}));
  const items=Object.keys(count).map(id=>PROD[id]).sort((a,b)=>CATS.indexOf(a.category)-CATS.indexOf(b.category));
  const has=f=>items.some(f);
  GAPS=[];
  if(!has(isRain))GAPS.push(["No rain jacket","Ninh Binh boats and Hanoi drizzle",isRain,"Rain jackets"]);
  if(!has(p=>p.category==="pants"&&p.templeOk))GAPS.push(["No temple-ready pants","Doi Suthep needs knees covered",p=>p.category==="pants"&&p.templeOk,"Temple-ready trousers"]);
  if(!has(p=>TOPS.includes(p.category)&&p.templeOk))GAPS.push(["No temple-ready top","Shoulders covered, nothing sheer",p=>TOPS.includes(p.category)&&p.templeOk,"Temple-ready tops"]);
  if(!has(isWarm))GAPS.push(["No warm layer for Hanoi","Evenings run 55 to 65 °F",isWarm,"Warm layers"]);
  if(!has(isSandal))GAPS.push(["No water sandals for the sanctuary","River crossings and mud",isSandal,"Water-friendly sandals"]);
  h+=GAPS.length?`<div class="warns">${GAPS.map((g,i)=>`<div class="warn">${icon("warnI")}<div><b>${esc(g[0])}</b><small>${esc(g[1])}</small></div><button type="button" class="btn sm" data-gap="${i}">Find one</button></div>`).join("")}</div>`:`<div class="allgood">${icon("check")}<span>No gaps. Rain, temples, Hanoi evenings and the sanctuary are covered.</span></div>`;
  const packedN=items.filter(p=>S.packed[p.id]).length;
  h+=`<section class="sec" style="padding-top:8px"><div class="shead"><div><h2 class="d d-m">Packing list</h2><p class="num">${packedN} of ${items.length} packed</p></div></div><div class="plist">${items.map(p=>{const pk=!!S.packed[p.id];const c=closetOf(p.id);
    return `<div class="prow ${pk?"done":""}"><input type="checkbox" class="ck" id="pk-${esc(p.id)}" data-pack="${esc(p.id)}" ${pk?"checked":""}><a href="#/p/${esc(p.id)}" aria-label="${esc(dname(p))}">${photo(p,"",T200)}</a><div style="min-width:0"><label class="nm" for="pk-${esc(p.id)}">${esc(dname(p))}</label><div class="sub"><span>${esc(CAT_L[p.category])}</span>${rvLine(p)}<span>In ${plural(count[p.id],"outfit")}</span><span>${c?esc(ST_L[c.status]||""):"Not bought"}</span></div>
     <div class="end"><span class="qty" role="group" aria-label="Quantity of ${esc(p.name)}"><button type="button" data-qty="${esc(p.id)}" data-d="-1" aria-label="One fewer">${icon("minus","sm")}</button><span class="num">${qtyOf(p.id)}</span><button type="button" data-qty="${esc(p.id)}" data-d="1" aria-label="One more">${icon("plus","sm")}</button></span>${bought(p.id)?"":buyLink(p)}</div></div></div>`;}).join("")}</div></section>`;
  const STOPI={"Chiang Mai":"temple","Elephant sanctuary":"elephant",Hanoi:"moon","Ninh Binh":"bike"};
  const NEEDS={"Chiang Mai":[["Temple-ready top",p=>TOPS.includes(p.category)&&p.templeOk],["Temple-ready long trousers",p=>p.category==="pants"&&p.templeOk],["Slip-on shoes for temple halls",isSlip],["Hot-weather top",p=>TOPS.includes(p.category)&&p.heat>=3]],
   "Elephant sanctuary":[["Quick-dry top",p=>TOPS.includes(p.category)&&isQuick(p)],["Shorts or quick-dry trousers",p=>p.category==="shorts"||(p.category==="pants"&&isQuick(p))],["Water-friendly sandals",isSandal],["Sun hat",isHat]],
   Hanoi:[["Warm layer for 55 to 65 °F",isWarm],["Long trousers",p=>p.category==="pants"],["Closed shoes",isClosed]],
   "Ninh Binh":[["Rain jacket",isRain],["Grippy shoes for the Hang Mua steps",isGrip],["Wind layer for the boats",isWind]]};
  h+=`<section class="sec"><div class="shead"><div><h2 class="d d-m">Stop by stop</h2><p>What each stop asks for, checked against your list.</p></div></div><div class="stops">${tr.stops.map(s=>{const nd=NEEDS[s.name]||[];const ok=nd.filter(n=>has(n[1])).length;
    return `<div class="stop"><h3 class="d d-s">${icon(STOPI[s.name]||"cal")}${esc(s.name)}</h3><p class="when">${s.note?esc(s.note)+" · ":""}<span class="num">${ok} of ${nd.length}</span> covered</p>${nd.map(n=>{const m=items.filter(n[1]);return `<div class="need ${m.length?"y":"n"}">${icon(m.length?"check":"warnI")}<div>${esc(n[0])}<small>${m.length?esc(m.map(dname).join(", ")):"Missing"}</small></div></div>`;}).join("")}</div>`;}).join("")}</div></section>`;
  const toBuy=items.filter(p=>!bought(p.id));
  const byT=TIERS.map(t=>{const l=toBuy.filter(p=>p.tier===t);return [t,l.length,l.reduce((x,p)=>x+priceOf(p).price*qtyOf(p.id),0)];});
  const all=byT.reduce((x,t)=>x+t[2],0);
  h+=`<section class="sec"><div class="shead"><div><h2 class="d d-m">Still to buy</h2><p>${toBuy.length?`${plural(toBuy.length,"piece")} not ordered or kept yet. Mark them in Closet as you buy.`:"Everything on the list is ordered or kept."}</p></div></div>`;
  if(toBuy.length)h+=`<div class="plist">${toBuy.map(p=>{const x=priceOf(p);const q=qtyOf(p.id);return `<div class="prow nock"><a href="#/p/${esc(p.id)}" aria-label="${esc(dname(p))}">${photo(p,"",T200)}</a><div style="min-width:0"><span class="nm">${esc(dname(p))}</span><div class="sub"><span class="price" style="font-size:17px">${money(x.price)}${q>1?" × "+q:""}</span>${tierChip(p.tier)}${rvLine(p)}</div></div>${buyLink(p)}</div>`;}).join("")}</div>
   <div class="tiertot">${byT.map(([t,n,s])=>`<div>${tierChip(t)}<span class="tot num">${money0(s)}</span><small>${plural(n,"piece")}</small></div>`).join("")}<div class="all"><span class="cap">Total to buy</span><span class="tot num">${money0(all)}</span><small>Order by ${esc(fmtDay(ORDER_BY))}</small></div></div>`;
  return h+`</section></div>`;}

/* ---------- Closet ---------- */
let CLOSET_F="all",RETURN_PENDING=null;
function pageCloset(){const pr=prof();const tr=trip();const dl=daysUntil(ORDER_BY),dt=daysUntil(tr.start);
  let h=`<div class="wrap pagehead"><h1 class="d d-l">Closet</h1><p class="lede">Track every piece from wishlist to kept. Returns get a reason so the next pick fits better.</p></div><div class="wrap">
  <div class="orderby"><div><span class="d">Order by ${esc(fmtDay(ORDER_BY))}</span><small>${dl>0?`${plural(dl,"day")} left`:dl===0?"Today is the last safe day":"The safe window has passed"}</small></div>
   <p>${dl>=0?"Ordering by then":"Order only what you'll keep, or pick stores with fast shipping. Ordering earlier"} leaves about a week for delivery, try-on and a return before you fly on ${esc(fmtDay(tr.start))}${dt>0?`, ${dt} days from now`:""}.</p></div>
  <div class="sizes"><div class="szc"><small>Height</small><span class="v num">${Math.floor((pr.heightIn||74)/12)}′${(pr.heightIn||74)%12}″</span></div><div class="szc"><small>Tops</small><span class="v">${esc(pr.tops||"XL")}${pr.preferTall?" · Tall":""}</span></div><div class="szc"><small>Waist × inseam</small><span class="v num">${pr.waist||36}×${pr.inseam||34}</span>${pr.inseamAssumed?`<small style="text-transform:none;letter-spacing:0;font-weight:500">Inseam assumed</small>`:""}</div>
   <div class="szc"><label for="shoeIn"><small>Shoe (US)</small></label><input class="field num" id="shoeIn" inputmode="decimal" maxlength="4" placeholder="Add size" value="${pr.shoe?esc(pr.shoe):""}" data-shoe></div></div>`;
  const rows=Object.entries(S.closet).map(([id,c])=>({p:PROD[id],c})).filter(x=>x.p&&x.c&&ST_L[x.c.status]);
  const cnt=k=>k==="all"?rows.length:rows.filter(x=>x.c.status===k).length;
  h+=`<div class="seg" role="group" aria-label="Filter by status" style="margin-bottom:16px">${[["all","All"],...STATUSES].map(([k,l])=>`<button type="button" data-cf="${k}" aria-pressed="${CLOSET_F===k}">${l} <span class="num" style="opacity:.6">${cnt(k)}</span></button>`).join("")}</div>`;
  const shown=rows.filter(x=>CLOSET_F==="all"||x.c.status===CLOSET_F).sort((a,b)=>ts(b.c.updatedAt)-ts(a.c.updatedAt));
  if(!rows.length)h+=empty("closet","Your closet is empty","Open any piece and tap Add to wishlist, then track it through ordered, kept or returned.",`<a class="btn acc" href="#/drops">Browse today's drop</a>`);
  else if(!shown.length)h+=empty("closet","Nothing here","No pieces have this status yet.");
  else h+=`<div>${shown.map(({p,c})=>{const x=priceOf(p);const rp=RETURN_PENDING===p.id;
    return `<div class="crow"><a href="#/p/${esc(p.id)}" aria-label="${esc(dname(p))}">${photo(p,"",T200)}</a><div style="min-width:0"><div class="pc-brand">${esc(p.brand)}</div><a class="nm" href="#/p/${esc(p.id)}">${esc(p.name)}</a><div class="row"><span class="price">${money(x.price)}</span>${tierChip(p.tier)}${c.status==="returned"&&c.reason?`<span>Returned: ${esc(c.reason)}</span>`:""}</div></div>
     <div class="stseg"><div class="seg" role="group" aria-label="Status of ${esc(p.name)}">${STATUSES.map(([k,l])=>`<button type="button" data-cst="${k}" data-pid="${esc(p.id)}" aria-pressed="${(rp?"returned":c.status)===k}">${l}</button>`).join("")}</div>${c.status==="wishlist"?buyLink(p):""}<button type="button" class="btn sm ghost" data-crm="${esc(p.id)}" aria-label="Remove ${esc(p.name)} from closet">${icon("trash")}</button></div>
     ${rp?`<form class="reason" data-reason="${esc(p.id)}"><span>Why the return?</span><button type="button" class="chip" data-rr="Too small">Too small</button><button type="button" class="chip" data-rr="Too large">Too large</button><button type="button" class="chip" data-rr="Too short">Too short</button><button type="button" class="chip" data-rr="Fabric">Fabric</button><label class="sr" for="rr-${esc(p.id)}">Other reason</label><input class="field" id="rr-${esc(p.id)}" maxlength="80" placeholder="Other reason"><button class="btn sm solid" type="submit">Save</button><button class="btn sm ghost" type="button" data-rrcancel>Cancel</button></form>`:""}</div>`;}).join("")}</div>`;
  const sp=Object.keys(S.saved).filter(k=>k.startsWith("p:")).map(k=>PROD[k.slice(2)]).filter(Boolean);
  const sa=Object.keys(S.saved).filter(k=>k.startsWith("a:")).map(k=>ART[k.slice(2)]).filter(Boolean);
  h+=`<section class="sec"><div class="shead"><div><h2 class="d d-m">Saved</h2><p>${sp.length+sa.length?`${plural(sp.length,"piece")}, ${plural(sa.length,"story")}`:"Tap the heart on any piece or story."}</p></div></div>${sp.length?`<div class="grid">${sp.map(pcard).join("")}</div>`:""}${sa.length?`<div class="agrid mt24">${sa.map(acard).join("")}</div>`:""}</section>`;
  return h+`</div>`;}
function setStatus(pid,status,reason){const prev=S.closet[pid];S.closet[pid]={status,updatedAt:new Date().toISOString()};if(reason)S.closet[pid].reason=reason;else if(prev&&prev.reason&&status==="returned")S.closet[pid].reason=prev.reason;save();}

/* ---------- Product page ---------- */
function spark(hist){if(hist.length<2)return"";const ps=hist.map(h=>h.price);const mn=Math.min(...ps),mx=Math.max(...ps);const W=160,H=40;
  const pts=hist.map((h,i)=>[i/(hist.length-1)*W,H-4-((h.price-mn)/((mx-mn)||1))*(H-8)]);
  const last=pts[pts.length-1];
  return `<div class="spark"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Price history from ${money(ps[0])} to ${money(ps[ps.length-1])}"><polyline points="${pts.map(p=>p.map(n=>n.toFixed(1)).join(",")).join(" ")}" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${last[0]}" cy="${last[1]}" r="3.5" fill="var(--acc)"/></svg><span>${esc(fmtDay(hist[0].date))}: ${money(ps[0])} → now ${money(ps[ps.length-1])}</span></div>`;}
function completeLook(p){const sid=p.styles[0]||"travel-day";const own=SLOT_OF(p.category);const ex=new Set([p.id]);const out=[];
  for(const sl of ["top","bottom","shoes","layer","accessory"]){if(sl===own)continue;const q=pickFor(sid,sl,p.tier,ex);if(q){out.push(q);ex.add(q.id);}if(out.length>=3)break;}return out;}
function relatedArticles(p,n=3){const st=new Set(p.styles);return ARTICLES.map(a=>({a,s:a.styles.filter(x=>st.has(x)).length*2+(a.sections.some(s=>(SEC_CATS[s]||[]).includes(p.category)&&s!=="color")?1.5:0)})).filter(x=>x.s>=2).sort((x,y)=>y.s-x.s).slice(0,n).map(x=>x.a);}
function gallery(p){const imgs=galImgs(p);if(!imgs.length)return photo(p,"",{w:1200});const n=imgs.length;
  return `<div class="gal" data-pid="${esc(p.id)}"><div class="gal-track" id="galT" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Photos of ${esc(dname(p))}${n>1?`, ${n} photos, swipe for more`:""}">${imgs.map((u,i)=>`<button type="button" class="gal-slide" data-view="${i}" aria-label="Open photo ${i+1} of ${n} full screen">${photo(p,"",{src:u,w:1200,eager:i===0})}</button>`).join("")}</div>${n>1?`<div class="gal-dots" aria-hidden="true">${imgs.map((_,i)=>`<i${i?"":' class="on"'}></i>`).join("")}</div>`:""}</div>
  ${n>1?`<div class="gal-thumbs" role="group" aria-label="Choose a photo">${imgs.map((u,i)=>`<button type="button" data-galgo="${i}" aria-label="Show photo ${i+1}" aria-current="${i===0}">${photo(p,"sq",{src:u,w:200})}</button>`).join("")}</div>`:""}`;}
function galSync(t){const i=Math.round(t.scrollLeft/Math.max(1,t.clientWidth));const g=t.closest(".media");if(!g)return;
  g.querySelectorAll(".gal-dots i").forEach((d,k)=>d.classList.toggle("on",k===i));g.querySelectorAll(".gal-thumbs button").forEach((b,k)=>b.setAttribute("aria-current",String(k===i)));}
function reviewsBlock(p){const pr=prof();
  const any=p.rating!=null||p.pros.length||p.cons.length||p.fitNote;
  const g="https://www.google.com/search?q="+encodeURIComponent(p.brand+" "+p.name+" review");
  const btns=[[p.reviewUrl,"Read all reviews","solid"],[p.redditUrl,"Reddit",""],[p.videoUrl,"Video review",""],[g,"Google reviews",p.reviewUrl?"ghost":""]].filter(b=>b[0]).map(([u,l,c])=>`<a class="btn sm ${c}" href="${esc(u)}" target="_blank" rel="noopener">${esc(l)} ${icon("ext")}</a>`).join("");
  const src=p.reviewSource?` from ${esc(p.reviewSource)}`:"";
  return `<section class="revs${any?"":" none"}" aria-labelledby="rvT"><h2 class="cap" id="rvT">Reviews</h2>
  ${p.rating!=null?`<div class="rv-score"><span class="big num" aria-hidden="true">${p.rating.toFixed(1)}</span><div>${stars(p.rating,"lg")}<small>${p.reviewCount!=null?`${fmtN(p.reviewCount)} ${p.reviewCount===1?"review":"reviews"}`:"Average rating"}${src}</small></div></div>`:`<p class="rv-none">${any?"No star rating collected yet.":"We haven't summarized reviews for this piece yet. Check the links below."}</p>`}
  ${p.fitNote?`<div class="rv-fit">${icon("ruler")}<div><b>Fit for you</b><p>${esc(p.fitNote)}</p><small>You: ${Math.floor((pr.heightIn||74)/12)}′${(pr.heightIn||74)%12}″, ${esc(pr.tops||"XL")} tops, ${pr.waist||36}×${pr.inseam||34}</small></div></div>`:""}
  ${p.pros.length||p.cons.length?`<div class="rv-pc">${p.pros.length?`<div class="pros"><h3 class="cap">What reviewers like</h3><ul>${p.pros.map(t=>`<li>${icon("check")}<span>${esc(t)}</span></li>`).join("")}</ul></div>`:""}${p.cons.length?`<div class="cons"><h3 class="cap">Watch out for</h3><ul>${p.cons.map(t=>`<li>${icon("warnI")}<span>${esc(t)}</span></li>`).join("")}</ul></div>`:""}</div><p class="note">Pros and cons are summarized from reviews${p.reviewSource?` on ${esc(p.reviewSource)}`:""}, not quoted.</p>`:""}
  <div class="rv-btns">${btns}</div></section>`;}
/* Fullscreen photo viewer */
let VIEW=null;
const smooth=()=>matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";
function openViewer(pid,i){const p=PROD[pid];if(!p)return;const imgs=galImgs(p);if(!imgs.length)return;i=Math.max(0,Math.min(imgs.length-1,i|0));VIEW={pid,n:imgs.length,i};
  const t=$("#vwTrack");t.innerHTML=imgs.map((u,k)=>`<div class="vw-s" role="group" aria-roledescription="slide" aria-label="Photo ${k+1} of ${imgs.length}"><span class="vw-fb" aria-hidden="true">${esc(monogram(p.brand))}</span>${imgEl(u,1200,{eager:k===i,alt:k===0?dname(p):""})}</div>`).join("");
  $("#vwT").textContent=dname(p);$("#vwPrev").hidden=$("#vwNext").hidden=imgs.length<2;
  showDlg($("#dlgView"));requestAnimationFrame(()=>{t.scrollLeft=i*t.clientWidth;vwSync();try{t.focus({preventScroll:true});}catch(e){}});}
const vwIdx=()=>{const t=$("#vwTrack");return Math.round(t.scrollLeft/Math.max(1,t.clientWidth));};
function vwSync(){if(!VIEW)return;const i=Math.max(0,Math.min(VIEW.n-1,vwIdx()));VIEW.i=i;$("#vwN").textContent=VIEW.n>1?`${i+1} / ${VIEW.n}`:"";$("#vwPrev").disabled=i<=0;$("#vwNext").disabled=i>=VIEW.n-1;}
function vwGo(d){if(!VIEW)return;const t=$("#vwTrack");const i=Math.max(0,Math.min(VIEW.n-1,vwIdx()+d));t.scrollTo({left:i*t.clientWidth,behavior:smooth()});}
function pageProduct(id){const p=PROD[id];if(!p)return emptyPage("tag","Piece not found","It may have been removed in the last update.",`<a class="btn" href="#/shop">Shop everything</a>`);
  const x=priceOf(p);const si=sizeInfo(p);const c=closetOf(p.id);const sl=SLOT_OF(p.category);const inB=S.build&&S.build.slots[sl]===p.id;
  const look=completeLook(p);const arts=relatedArticles(p);
  return `<div class="wrap"><a class="backlink" href="#/shop/${esc(p.category)}" style="margin-top:8px">${icon("back","sm")}${esc(CAT_TAB[p.category])}</a>
  <div class="pdp" style="padding-top:8px"><div class="media">${gallery(p)}<div class="badges">${badges(p,x)}</div></div>
   <div><div class="brand">${esc(p.brand)}</div><h1>${esc(p.name)}</h1>
    <div class="pr-row"><span class="price">${money(x.price)}</span>${x.was?`<s><span class="sr">was </span>${money(x.was)}</s>`:""}${tierChip(p.tier)}</div>
    ${spark(x.hist)}
    ${sizeLine(p)}
    ${reviewsBlock(p)}
    ${p.why?`<p class="why">${esc(p.why)}</p>`:""}
    <div class="acts">${p.url?`<a class="btn acc wide" href="${esc(p.url)}" target="_blank" rel="noopener">Buy at ${esc(host(p.url))} ${icon("ext")}</a>`:""}
     <button class="btn" type="button" data-addslot="${esc(p.id)}"${inB?" disabled":""}>${inB?icon("check")+"In your outfit":icon("hanger")+"Add to outfit"}</button>
     <button class="btn" type="button" data-cst="wishlist" data-pid="${esc(p.id)}"${c?" disabled":""}>${c?icon("check")+esc(ST_L[c.status]):icon("closet")+"Add to wishlist"}</button>
     <button class="btn" type="button" data-save="p:${esc(p.id)}" aria-pressed="${isSaved("p:"+p.id)}">${icon(isSaved("p:"+p.id)?"heartf":"heart")}${isSaved("p:"+p.id)?"Saved":"Save"}</button></div>
    <dl class="specs"><dt>Fabric</dt><dd>${esc(p.fabric||"Not listed")}</dd><dt>Your size</dt><dd>${esc(si.mine||(p.category==="shoes"?"Shoe size not set":"One size"))}${si.full?` · ${esc(si.full)}`:""}</dd><dt>Heat</dt><dd>${heatIcons(p.heat)} ${esc(HEAT_L[p.heat])}</dd><dt>Temples</dt><dd>${p.templeOk?"Temple-ready: covers shoulders or knees as needed":"Not for temple visits"}</dd><dt>Styles</dt><dd>${p.styles.map(s=>STYLE(s)?`<a href="#/style/${esc(s)}">${esc(STYLE(s).name)}</a>`:"").filter(Boolean).join(", ")||"None"}</dd><dt>Checked</dt><dd>${esc(x.checked?new Date(x.checked.length>10?x.checked:x.checked+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown")}</dd></dl>
   </div></div>
  ${look.length?`<section class="sec" aria-labelledby="clT"><div class="shead"><h2 class="d d-m" id="clT">Complete the look</h2></div><div class="grid">${look.map(pcard).join("")}</div></section>`:""}
  ${arts.length?`<section class="sec" aria-labelledby="raT"><div class="shead"><h2 class="d d-m" id="raT">Related reads</h2></div><div class="agrid">${arts.map(acard).join("")}</div></section>`:""}</div>`;}

/* ---------- Search ---------- */
let SIDX=[];
function buildIndex(){SIDX=[...PRODUCTS.map(p=>({t:"p",o:p,s:[p.brand,p.name,p.fabric,CAT_TAB[p.category],CAT_L[p.category],p.why,p.styles.map(s=>(STYLE(s)||{}).name).join(" "),p.templeOk?"temple":"" ,TIER_L[p.tier]].join(" ").toLowerCase()})),...ARTICLES.map(a=>({t:"a",o:a,s:[a.title,a.source,a.summary,a.sections.map(s=>SEC_L[s]).join(" ")].join(" ").toLowerCase()}))];}
function runSearch(q){const el=$("#qres");q=q.trim().toLowerCase();
  if(!q){el.innerHTML=`<span class="cap mute">Try</span><div class="chips mt8">${["linen","loafers","rain","merino","temple","sandals","Hanoi","sling"].map(w=>`<button class="chip" type="button" data-q="${w}">${w}</button>`).join("")}</div>`;return;}
  const terms=q.split(/\s+/).filter(Boolean);const hits=SIDX.filter(x=>terms.every(t=>x.s.includes(t)));
  const ps=hits.filter(x=>x.t==="p").map(x=>x.o).slice(0,14),as=hits.filter(x=>x.t==="a").map(x=>x.o).slice(0,10);
  if(!ps.length&&!as.length){el.innerHTML=`<p>Nothing for “${esc(q)}”. Try a fabric, a brand or a stop on the trip.</p>`;return;}
  el.innerHTML=(ps.length?`<div class="cap sgroup">${plural(ps.length,"piece")}</div>${ps.map(p=>`<a class="sres" href="#/p/${esc(p.id)}">${photo(p,"",T200)}<span style="min-width:0"><span class="nm">${esc(dname(p))}</span><small>${esc(CAT_L[p.category])} · ${esc(TIER_L[p.tier])}</small></span><span class="price">${money(priceOf(p).price)}</span></a>`).join("")}`:"")+
   (as.length?`<div class="cap sgroup" style="margin-top:20px">${plural(as.length,"story")}</div>${as.map(a=>`<a class="sres" href="${esc(a.url)}" target="_blank" rel="noopener" data-read="${esc(a.id)}" style="grid-template-columns:minmax(0,1fr) auto"><span style="min-width:0"><span class="nm">${esc(a.title)}</span><small>${esc(a.source)}${a.readMinutes?` · ${a.readMinutes} min`:""}</small></span>${icon("ext","sm")}</a>`).join("")}`:"");}

/* ---------- Settings ---------- */
let CONFIRM_RESET=false;
function openSettings(){const pr=prof();CONFIRM_RESET=false;
  $("#setB").innerHTML=`<p class="mt0">Your saved pieces, closet, outfits and packing list live in this browser only. Copy them out to move to another device.</p>
  <div class="sizes" style="margin:16px 0"><div class="szc"><small>Tops</small><span class="v">${esc(pr.tops)}</span></div><div class="szc"><small>Waist × inseam</small><span class="v num">${pr.waist}×${pr.inseam}</span></div><div class="szc"><small>Height</small><span class="v num">${Math.floor(pr.heightIn/12)}′${pr.heightIn%12}″</span></div><div class="szc"><label for="shoeIn2"><small>Shoe (US)</small></label><input class="field num" id="shoeIn2" inputmode="decimal" maxlength="4" placeholder="Add size" value="${pr.shoe?esc(pr.shoe):""}" data-shoe></div></div>
  <h3 class="d d-s">Export</h3><label class="sr" for="exT">Your data as JSON</label><textarea class="field mt8" id="exT" readonly>${esc(JSON.stringify(S,null,1))}</textarea><button class="btn sm mt8" type="button" data-copy>${icon("copy")}Copy</button>
  <h3 class="d d-s mt24">Import</h3><p>Paste an export here. It replaces what's in this browser.</p><label class="sr" for="imT">Paste exported JSON</label><textarea class="field" id="imT" placeholder='{"saved":{}, "closet":{}, …}'></textarea><div style="display:flex;gap:8px;flex-wrap:wrap" class="mt8"><button class="btn sm solid" type="button" data-import>Import my data</button><button class="btn sm ghost" type="button" data-reset>Reset everything</button></div><p class="note" id="setMsg" role="status"></p>`;
  showDlg($("#dlgSettings"));}

/* ---------- Dialog helpers ---------- */
function showDlg(d){try{if(!d.open)d.showModal();}catch(e){d.setAttribute("open","");}markLoaded(d);}
function closeDlg(d){try{d.close();}catch(e){d.removeAttribute("open");}}
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)closeDlg(d);}));

/* ---------- Empty states ---------- */
function empty(ic,h,p,btn){return `<div class="empty">${icon(ic)}<h3 class="d d-s">${esc(h)}</h3><p>${esc(p)}</p>${btn||""}</div>`;}
function emptyPage(ic,h,p,btn){return `<div class="wrap" style="padding-top:48px">${empty(ic,h,p,btn)}</div>`;}

/* ---------- Router ---------- */
let CUR="";
function parse(){const h=location.hash.replace(/^#\/?/,"");return h.split("/").filter(Boolean).map(s=>{try{return decodeURIComponent(s);}catch(e){return s;}});}
function render(keepScroll){const [a,b,c]=parse();let top=a||"drops",html,title="Wardrobe";
  switch(a){
   case undefined:case "drops":top="drops";html=pageDrops(b);title=b?`Drop · ${fmtDay(b)} · Wardrobe`:"Wardrobe · Today's drop";break;
   case "shop":html=pageShop(b);title=(b&&CAT_TAB[b]?CAT_TAB[b]:"Shop")+" · Wardrobe";break;
   case "guide":top="guide";html=b==="section"?pageSection(c):pageGuide();title=(b==="section"&&SEC_L[c]?SEC_L[c]:"Style guide")+" · Wardrobe";break;
   case "style":top="guide";html=pageStyle(b);title=(STYLE(b)?STYLE(b).name:"Style")+" · Wardrobe";break;
   case "build":html=pageBuild();title="Build · Wardrobe";break;
   case "pack":html=pagePack();title="Pack · Wardrobe";break;
   case "closet":html=pageCloset();title="Closet · Wardrobe";break;
   case "p":top="shop";html=pageProduct(b);title=(PROD[b]?dname(PROD[b]):"Piece")+" · Wardrobe";break;
   default:top="";html=emptyPage("info","Page not found","That link doesn't go anywhere.",`<a class="btn" href="#/drops">Today's drop</a>`);}
  const y=window.scrollY;
  $("#app").innerHTML=html;renderChrome(top);document.title=title;markLoaded($("#app"));
  if(keepScroll)window.scrollTo(0,y);}
function rerender(){render(true);}
function onRoute(){const k=location.hash;document.querySelectorAll("dialog[open]").forEach(closeDlg);if(k===CUR)return;CUR=k;render(false);window.scrollTo(0,0);
  if(!/^#\/p\//.test(k)){try{$("#app").focus({preventScroll:true});}catch(e){}}}

/* ---------- Events ---------- */
document.addEventListener("click",e=>{const t=e.target.closest("[data-save],[data-read],[data-lesson],[data-gm],[data-more],[data-readall],[data-wear],[data-unwear],[data-preset],[data-lt],[data-bt],[data-swap],[data-swaptier],[data-use],[data-clear],[data-saveof],[data-loadof],[data-delof],[data-addslot],[data-packof],[data-qty],[data-gap],[data-cst],[data-crm],[data-rr],[data-rrcancel],[data-cf],[data-sf],[data-sreset],[data-scroll],[data-open],[data-close],[data-q],[data-copy],[data-import],[data-reset],[data-view],[data-galgo]");if(!t)return;
  const d=t.dataset;
  if(d.view!==undefined){const g=t.closest(".gal");if(g)openViewer(g.dataset.pid,+d.view);return;}
  if(d.galgo!==undefined){const tr=$("#galT");if(tr)tr.scrollTo({left:(+d.galgo)*tr.clientWidth,behavior:smooth()});return;}
  if(d.read!==undefined&&ART[d.read]){S.read[d.read]=new Date().toISOString();save();setTimeout(rerender,50);return;}
  if(d.save){e.preventDefault();if(S.saved[d.save]){delete S.saved[d.save];toast("Removed from saved");}else{S.saved[d.save]=new Date().toISOString();toast("Saved");}save();rerender();return;}
  if(d.lesson){openLesson(d.lesson);return;}
  if(d.gm){S.guideMode=d.gm;save();rerender();return;}
  if(d.more!==undefined){LATEST_N+=18;rerender();return;}
  if(d.readall){ARTICLES.filter(a=>a.sections.includes(d.readall)).forEach(a=>S.read[a.id]=S.read[a.id]||new Date().toISOString());save();rerender();toast("Marked as read");return;}
  if(d.wear){const a=activeStyle();if(a&&a.id===d.wear){S.activeStyle=null;toast("Stopped wearing "+STYLE(d.wear).name);}else{S.activeStyle={id:d.wear,until:new Date(Date.now()+7*DAY).toISOString()};toast("Wearing "+STYLE(d.wear).name+" for 7 days");}save();rerender();return;}
  if(d.unwear!==undefined){S.activeStyle=null;save();rerender();return;}
  if(d.preset){applyStyle(d.preset,S.tier);if(!location.hash.startsWith("#/build"))location.hash="#/build";else rerender();return;}
  if(d.lt){S.tier=d.lt;save();rerender();return;}
  if(d.bt){S.tier=d.bt;S.build.slots=rebuildAt(d.bt);S.build.tier=d.bt;save();rerender();return;}
  if(d.swap){ensureBuild();openSwap(d.swap);return;}
  if(d.swaptier&&SWAP){openSwap(SWAP.slot,d.swaptier);return;}
  if(d.use&&SWAP){S.build.slots[SWAP.slot]=d.use;save();closeDlg($("#dlgSwap"));rerender();toast("Swapped");return;}
  if(d.clear){S.build.slots[d.clear]=null;save();closeDlg($("#dlgSwap"));rerender();return;}
  if(d.saveof!==undefined){const f=$("#saveOutfit");if(f)f.requestSubmit?f.requestSubmit():f.dispatchEvent(new Event("submit",{cancelable:true}));return;}
  if(d.loadof){const o=S.outfits.find(x=>x.id===d.loadof);if(o){S.build={slots:Object.assign({},o.slots),tier:o.tier,style:o.style};save();rerender();window.scrollTo({top:0});toast("Loaded "+o.name);}return;}
  if(d.delof){S.outfits=S.outfits.filter(x=>x.id!==d.delof);if(S.packSel)S.packSel=S.packSel.filter(x=>x!==d.delof);save();rerender();toast("Outfit deleted");return;}
  if(d.addslot){addToOutfit(d.addslot);closeDlg($("#dlgSwap"));rerender();return;}
  if(d.packof){const ids=S.outfits.map(o=>o.id);let sel=S.packSel?S.packSel.filter(i=>ids.includes(i)):ids.slice();sel=sel.includes(d.packof)?sel.filter(x=>x!==d.packof):[...sel,d.packof];S.packSel=sel;save();rerender();return;}
  if(d.qty){S.qty[d.qty]=Math.max(1,Math.min(9,qtyOf(d.qty)+(+d.d)));save();rerender();return;}
  if(d.gap){const g=GAPS[+d.gap];if(g)openPicker(g[3],g[2]);return;}
  if(d.cst&&d.pid){if(d.cst==="returned"){RETURN_PENDING=d.pid;rerender();setTimeout(()=>{const i=document.getElementById("rr-"+d.pid);i&&i.focus();},30);return;}RETURN_PENDING=null;const had=!!S.closet[d.pid];setStatus(d.pid,d.cst);rerender();toast(had?"Marked "+ST_L[d.cst].toLowerCase():"Added to wishlist");return;}
  if(d.crm){delete S.closet[d.crm];save();rerender();toast("Removed from closet");return;}
  if(d.rr){const f=t.closest("form");setStatus(f.dataset.reason,"returned",d.rr);RETURN_PENDING=null;rerender();toast("Return logged");return;}
  if(d.rrcancel!==undefined){RETURN_PENDING=null;rerender();return;}
  if(d.cf){CLOSET_F=d.cf;rerender();return;}
  if(d.sf){if(d.sf==="tier")S.shop.tier=d.v;else S.shop[d.sf]=!S.shop[d.sf];save();rerender();return;}
  if(d.sreset!==undefined){S.shop={tier:"all",occ:"",temple:false,deal:false,top:false,sort:S.shop.sort};save();rerender();return;}
  if(d.scroll){const el=document.getElementById(d.scroll);el&&el.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});return;}
  if(d.open==="settings"){document.querySelectorAll("dialog[open]").forEach(closeDlg);openSettings();return;}
  if(d.close!==undefined){closeDlg(t.closest("dialog"));return;}
  if(d.q){$("#q").value=d.q;runSearch(d.q);$("#q").focus();return;}
  if(d.copy!==undefined){const ta=$("#exT");const done=()=>{$("#setMsg").textContent="Copied. Paste it into Import on your other device.";};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(ta.value).then(done,()=>{ta.select();try{document.execCommand("copy");done();}catch(er){$("#setMsg").textContent="Select the text and copy it.";}});
    else{ta.select();try{document.execCommand("copy");done();}catch(er){}}return;}
  if(d.import!==undefined){const v=$("#imT").value.trim();if(!v){$("#setMsg").textContent="Paste your exported data first.";return;}
    try{const o=JSON.parse(v);if(!o||typeof o!=="object"||Array.isArray(o))throw 0;S=sanitize(o);save();closeDlg($("#dlgSettings"));rerender();toast("Your data is imported");}catch(er){$("#setMsg").textContent="That isn't a Wardrobe export. Check you pasted the whole text, from { to }.";}return;}
  if(d.reset!==undefined){if(!CONFIRM_RESET){CONFIRM_RESET=true;t.textContent="Tap again to erase";$("#setMsg").textContent="This clears saved pieces, closet, outfits and packing in this browser.";return;}
    S=sanitize(null);save();closeDlg($("#dlgSettings"));rerender();toast("Everything reset");return;}
});
document.addEventListener("change",e=>{const t=e.target;
  if(t.dataset.sfsel){S.shop[t.dataset.sfsel]=t.value;save();rerender();const el=document.getElementById(t.id);el&&el.focus();return;}
  if(t.dataset.pack){if(t.checked)S.packed[t.dataset.pack]=true;else delete S.packed[t.dataset.pack];save();rerender();const el=document.getElementById(t.id);el&&el.focus({preventScroll:true});return;}
  if(t.dataset.shoe!==undefined){const v=t.value.trim().replace(/[^0-9.]/g,"").slice(0,4);if(v&&!/^\d{1,2}(\.5)?$/.test(v)){toast("Use a US size like 11 or 11.5");return;}S.shoe=v||null;save();toast(v?"Shoe size saved":"Shoe size cleared");if(!t.closest("dialog"))rerender();return;}
});
document.addEventListener("submit",e=>{const f=e.target;
  if(f.id==="saveOutfit"){e.preventDefault();ensureBuild();const st=STYLE(S.build.style);const name=($("#ofName").value||"").trim().slice(0,60)||((st?st.name:"My outfit")+" · "+TIER_L[S.build.tier]);
    if(!SLOTS.some(s=>PROD[S.build.slots[s.id]])){toast("Add a piece first");return;}
    S.outfits.unshift({id:eid(),name,slots:Object.assign({},S.build.slots),tier:S.build.tier,style:S.build.style,createdAt:new Date().toISOString()});if(S.packSel)S.packSel.push(S.outfits[0].id);save();rerender();toast("Saved “"+name+"”. It's in Pack now.");return;}
  if(f.dataset.reason){e.preventDefault();const v=(f.querySelector("input").value||"").trim().slice(0,80)||"Other";setStatus(f.dataset.reason,"returned",v);RETURN_PENDING=null;rerender();toast("Return logged");}
});
$("#searchOpen").addEventListener("click",()=>{runSearch($("#q").value);showDlg($("#dlgSearch"));setTimeout(()=>$("#q").focus(),30);});
$("#settingsOpen").addEventListener("click",openSettings);
$("#q").addEventListener("input",e=>runSearch(e.target.value));
$("#q").addEventListener("keydown",e=>{if(e.key==="Escape"){e.preventDefault();closeDlg($("#dlgSearch"));}});
document.addEventListener("keydown",e=>{if((e.key==="/"&&!/input|textarea|select/i.test((e.target.tagName||"")))||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k")){e.preventDefault();$("#searchOpen").click();}});
$("#lessonCards").addEventListener("scroll",()=>lessonDots(lessonIdx()),{passive:true});
$("#lessonPrev").addEventListener("click",()=>lessonGo(-1));$("#lessonNext").addEventListener("click",()=>lessonGo(1));
$("#lessonCards").addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();lessonGo(1);}if(e.key==="ArrowLeft"){e.preventDefault();lessonGo(-1);}});
window.addEventListener("hashchange",onRoute);
document.addEventListener("scroll",e=>{const t=e.target;if(!t||!t.id)return;if(t.id==="galT")galSync(t);else if(t.id==="vwTrack")vwSync();},{capture:true,passive:true});
$("#vwPrev").addEventListener("click",()=>vwGo(-1));$("#vwNext").addEventListener("click",()=>vwGo(1));
$("#dlgView").addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();vwGo(1);}else if(e.key==="ArrowLeft"){e.preventDefault();vwGo(-1);}});
$("#dlgView").addEventListener("close",()=>{if(!VIEW)return;const g=$("#galT");if(g){g.scrollLeft=VIEW.i*g.clientWidth;const b=g.querySelectorAll(".gal-slide")[VIEW.i];b&&b.focus({preventScroll:true});}});
window.addEventListener("resize",()=>{const d=$("#dlgView");if(VIEW&&d.open){const t=$("#vwTrack");t.scrollLeft=VIEW.i*t.clientWidth;}});
window.addEventListener("storage",e=>{if(e.key===LS){S=load();rerender();}});

/* ---------- Boot ---------- */
async function boot(){S=load();
  const names=["products","prices","articles","styles","drops","profile","meta"];
  const r=await Promise.allSettled(names.map(getJSON));const v=Object.fromEntries(names.map((n,i)=>[n,r[i].status==="fulfilled"?r[i].value:null]));
  if(!Array.isArray(v.products)){$("#app").innerHTML=`<div class="wrap loaderr">${empty("info","The shop didn't load","Check your connection and reload. Your saved pieces are safe in this browser.",`<button class="btn acc" type="button" onclick="location.reload()">Reload</button>`)}</div>`;renderChrome("");return;}
  PRODUCTS=v.products.map(normP).filter(Boolean);PROD=Object.fromEntries(PRODUCTS.map(p=>[p.id,p]));
  PRICES=v.prices&&typeof v.prices==="object"?v.prices:{};
  ARTICLES=(Array.isArray(v.articles)?v.articles:[]).map(normA).filter(Boolean);ART=Object.fromEntries(ARTICLES.map(a=>[a.id,a]));
  STYLES=(Array.isArray(v.styles)?v.styles:[]).filter(s=>s&&str(s.id)).map(s=>({id:s.id,name:str(s.name)||s.id,tagline:str(s.tagline),rules:arr(s.rules),palette:arr(s.palette),outfit:s.outfit&&typeof s.outfit==="object"?s.outfit:{},articleIds:arr(s.articleIds)}));
  DROPS=(Array.isArray(v.drops)?v.drops:[]).filter(d=>d&&str(d.date)).map(d=>({date:d.date,theme:str(d.theme)||"Drop",title:str(d.title)||str(d.theme)||"Drop",blurb:str(d.blurb),productIds:arr(d.productIds),articleIds:arr(d.articleIds)})).sort((a,b)=>a.date<b.date?1:-1);
  PROFILE=v.profile&&typeof v.profile==="object"?v.profile:{};
  if(PROFILE.trip&&!Array.isArray(PROFILE.trip.stops))PROFILE.trip.stops=DEFAULT_TRIP().stops;
  META=v.meta&&typeof v.meta==="object"?{updatedAt:str(v.meta.updatedAt)||null,events:Array.isArray(v.meta.events)?v.meta.events:[]}:META;
  if(!S.activeStyle&&PROFILE.activeStyle&&STYLE(PROFILE.activeStyle.id||PROFILE.activeStyle))S.activeStyle={id:PROFILE.activeStyle.id||PROFILE.activeStyle,until:str(PROFILE.activeStyle.until)||new Date(Date.now()+7*DAY).toISOString()};
  buildIndex();CUR=location.hash;render(false);}
boot();
})();
