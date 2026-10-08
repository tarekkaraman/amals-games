var Zl=Object.defineProperty;var Ql=(i,t,e)=>t in i?Zl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>Ql(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="169",th=0,Ao=1,eh=2,Vc=1,Hc=2,yn=3,Tn=0,Ie=1,hn=2,zn=0,Ei=1,Ro=2,Co=3,Po=4,nh=5,Zn=100,ih=101,sh=102,rh=103,ah=104,oh=200,ch=201,lh=202,hh=203,na=204,ia=205,dh=206,uh=207,fh=208,ph=209,mh=210,gh=211,vh=212,_h=213,xh=214,sa=0,ra=1,aa=2,Pi=3,oa=4,ca=5,la=6,ha=7,Gc=0,Mh=1,yh=2,Vn=0,Sh=1,bh=2,wh=3,Eh=4,Th=5,Ah=6,Rh=7,Wc=300,Li=301,Ii=302,da=303,ua=304,nr=306,fa=1e3,ti=1001,pa=1002,$e=1003,Ch=1004,fs=1005,en=1006,fr=1007,ei=1008,An=1009,Xc=1010,qc=1011,es=1012,ja=1013,ii=1014,wn=1015,rs=1016,Ja=1017,Za=1018,Di=1020,$c=35902,Yc=1021,Kc=1022,sn=1023,jc=1024,Jc=1025,Ti=1026,Ui=1027,Zc=1028,Qa=1029,Qc=1030,to=1031,eo=1033,Bs=33776,zs=33777,Vs=33778,Hs=33779,ma=35840,ga=35841,va=35842,_a=35843,xa=36196,Ma=37492,ya=37496,Sa=37808,ba=37809,wa=37810,Ea=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Ia=37818,Da=37819,Ua=37820,Na=37821,Gs=36492,Fa=36494,Oa=36495,tl=36283,ka=36284,Ba=36285,za=36286,Ph=3200,Lh=3201,el=0,Ih=1,kn="",Qe="srgb",Hn="srgb-linear",no="display-p3",ir="display-p3-linear",Ys="linear",ae="srgb",Ks="rec709",js="p3",ci=7680,Lo=519,Dh=512,Uh=513,Nh=514,nl=515,Fh=516,Oh=517,kh=518,Bh=519,Io=35044,Do="300 es",En=2e3,Js=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Va=180/Math.PI;function as(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function zh(i,t){return(i%t+t)%t}function mr(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=s[0],f=s[3],m=s[6],_=s[1],M=s[4],w=s[7],R=s[2],A=s[5],E=s[8];return r[0]=a*x+o*_+c*R,r[3]=a*f+o*M+c*A,r[6]=a*m+o*w+c*E,r[1]=l*x+h*_+d*R,r[4]=l*f+h*M+d*A,r[7]=l*m+h*w+d*E,r[2]=u*x+p*_+g*R,r[5]=u*f+p*M+g*A,r[8]=u*m+p*w+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new kt;function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){const i=ns("canvas");return i.style.display="block",i}const Uo={};function Ws(i){i in Uo||(Uo[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const No=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fo=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[Hn]:{transfer:Ys,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Qe]:{transfer:ae,primaries:Ks,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ir]:{transfer:Ys,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Fo),fromReference:i=>i.applyMatrix3(No)},[no]:{transfer:ae,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Fo),fromReference:i=>i.applyMatrix3(No).convertLinearToSRGB()}},Xh=new Set([Hn,ir]),Qt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Gi[t].toReference,s=Gi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gi[i].primaries},getTransfer:function(i){return i===kn?Ys:Gi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Gi[t].luminanceCoefficients)}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class qh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=ns("canvas")),li.width=t.width,li.height=t.height;const n=li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ns("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $h=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_r(s[a].image)):r.push(_r(s[a]))}else r=_r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Ce extends ki{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=ti,s=ti,r=en,a=ei,o=sn,c=An,l=Ce.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=as(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fa:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fa:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Wc;Ce.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(p+1)/2,R=(m+1)/2,A=(h+u)/4,E=(d+x)/4,C=(g+f)/4;return M>w&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=E/n):w>R?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=C/r),this.set(n,s,r,e),this}let _=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jh extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==p||h!==g){let f=1-o;const m=c*u+l*p+h*g+d*x,_=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,m*_);f=Math.sin(f*A)/R,o=Math.sin(o*A)/R}const w=o*_;if(c=c*f+u*w,l=l*f+p*w,h=h*f+g*w,d=d*f+x*w,f===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new P,Oo=new os;class cs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),ms.subVectors(this.max,Wi),hi.subVectors(t.a,Wi),di.subVectors(t.b,Wi),ui.subVectors(t.c,Wi),Pn.subVectors(di,hi),Ln.subVectors(ui,di),Wn.subVectors(hi,ui);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!Mr(e,hi,di,ui,ms)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,hi,di,ui,ms))?!1:(gs.crossVectors(Pn,Ln),e=[gs.x,gs.y,gs.z],Mr(e,hi,di,ui,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new P,new P,new P,new P,new P,new P,new P,new P],je=new P,ps=new cs,hi=new P,di=new P,ui=new P,Pn=new P,Ln=new P,Wn=new P,Wi=new P,ms=new P,gs=new P,Xn=new P;function Mr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);const o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Jh=new cs,Xi=new P,yr=new P;class sr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(yr)),this.expandByPoint(Xi.copy(t.center).sub(yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new P,Sr=new P,vs=new P,In=new P,br=new P,_s=new P,wr=new P;class al{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Sr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(vs),o=In.dot(this.direction),c=-In.dot(vs),l=In.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sr).addScaledVector(vs,u),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){br.subVectors(e,t),_s.subVectors(n,t),wr.crossVectors(br,_s);let a=this.direction.dot(wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,t);const c=o*this.direction.dot(_s.crossVectors(In,_s));if(c<0)return null;const l=o*this.direction.dot(br.cross(In));if(l<0||c+l>a)return null;const h=-o*In.dot(wr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,c,l,h,d,u,p,g,x,f){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,x,f)}set(t,e,n,s,r,a,o,c,l,h,d,u,p,g,x,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,x=l*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,x=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zh,t,Qh)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Dn.crossVectors(n,ze),Dn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Dn.crossVectors(n,ze)),Dn.normalize(),xs.crossVectors(ze,Dn),s[0]=Dn.x,s[4]=xs.x,s[8]=ze.x,s[1]=Dn.y,s[5]=xs.y,s[9]=ze.y,s[2]=Dn.z,s[6]=xs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],f=n[10],m=n[14],_=n[3],M=n[7],w=n[11],R=n[15],A=s[0],E=s[4],C=s[8],V=s[12],v=s[1],S=s[5],N=s[9],k=s[13],X=s[2],K=s[6],H=s[10],J=s[14],G=s[3],at=s[7],ut=s[11],nt=s[15];return r[0]=a*A+o*v+c*X+l*G,r[4]=a*E+o*S+c*K+l*at,r[8]=a*C+o*N+c*H+l*ut,r[12]=a*V+o*k+c*J+l*nt,r[1]=h*A+d*v+u*X+p*G,r[5]=h*E+d*S+u*K+p*at,r[9]=h*C+d*N+u*H+p*ut,r[13]=h*V+d*k+u*J+p*nt,r[2]=g*A+x*v+f*X+m*G,r[6]=g*E+x*S+f*K+m*at,r[10]=g*C+x*N+f*H+m*ut,r[14]=g*V+x*k+f*J+m*nt,r[3]=_*A+M*v+w*X+R*G,r[7]=_*E+M*S+w*K+R*at,r[11]=_*C+M*N+w*H+R*ut,r[15]=_*V+M*k+w*J+R*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],f=t[11],m=t[15];return g*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*p-n*c*p)+x*(+e*c*p-e*l*u+r*a*u-s*a*p+s*l*h-r*c*h)+f*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+m*(-s*o*h-e*c*d+e*o*u+s*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],f=t[14],m=t[15],_=d*f*l-x*u*l+x*c*p-o*f*p-d*c*m+o*u*m,M=g*u*l-h*f*l-g*c*p+a*f*p+h*c*m-a*u*m,w=h*x*l-g*d*l+g*o*p-a*x*p-h*o*m+a*d*m,R=g*d*c-h*x*c-g*o*u+a*x*u+h*o*f-a*d*f,A=e*_+n*M+s*w+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=_*E,t[1]=(x*u*r-d*f*r-x*s*p+n*f*p+d*s*m-n*u*m)*E,t[2]=(o*f*r-x*c*r+x*s*l-n*f*l-o*s*m+n*c*m)*E,t[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*p-n*c*p)*E,t[4]=M*E,t[5]=(h*f*r-g*u*r+g*s*p-e*f*p-h*s*m+e*u*m)*E,t[6]=(g*c*r-a*f*r-g*s*l+e*f*l+a*s*m-e*c*m)*E,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*p+e*c*p)*E,t[8]=w*E,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*m-e*d*m)*E,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*m+e*o*m)*E,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*E,t[12]=R*E,t[13]=(h*x*s-g*d*s+g*n*u-e*x*u-h*n*f+e*d*f)*E,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*f-e*o*f)*E,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*u+e*o*u)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,x=a*h,f=a*d,m=o*d,_=c*l,M=c*h,w=c*d,R=n.x,A=n.y,E=n.z;return s[0]=(1-(x+m))*R,s[1]=(p+w)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(p-w)*A,s[5]=(1-(u+m))*A,s[6]=(f+_)*A,s[7]=0,s[8]=(g+M)*E,s[9]=(f-_)*E,s[10]=(1-(u+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=fi.set(s[0],s[1],s[2]).length();const a=fi.set(s[4],s[5],s[6]).length(),o=fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const l=1/r,h=1/a,d=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=En){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===En)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Js)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=En){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*l,p=(n+s)*h;let g,x;if(o===En)g=(a+r)*d,x=-2*d;else if(o===Js)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new P,Je=new oe,Zh=new P(0,0,0),Qh=new P(1,1,1),Dn=new P,xs=new P,ze=new P,ko=new oe,Bo=new os;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ko.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ko,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const zo=new P,pi=new os,_n=new oe,Ms=new P,qi=new P,ed=new P,nd=new os,Vo=new P(1,0,0),Ho=new P(0,1,0),Go=new P(0,0,1),Wo={type:"added"},id={type:"removed"},mi={type:"childadded",child:null},Er={type:"childremoved",child:null};class ye extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new P,e=new fn,n=new os,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Vo,t)}rotateY(t){return this.rotateOnAxis(Ho,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vo,t)}translateY(t){return this.translateOnAxis(Ho,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(qi,Ms,this.up):_n.lookAt(Ms,qi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(_n),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wo),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wo),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new P(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new P,xn=new P,Tr=new P,Mn=new P,gi=new P,vi=new P,Xo=new P,Ar=new P,Rr=new P,Cr=new P,Pr=new le,Lr=new le,Ir=new le;class nn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),xn.subVectors(n,e),Tr.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(xn),c=Ze.dot(Tr),l=xn.dot(xn),h=xn.dot(Tr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pr,r.x),a.addScaledVector(Lr,r.y),a.addScaledVector(Ir,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),xn.subVectors(t,e),Ze.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Ze.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;gi.subVectors(s,n),vi.subVectors(r,n),Ar.subVectors(t,n);const c=gi.dot(Ar),l=vi.dot(Ar);if(c<=0&&l<=0)return e.copy(n);Rr.subVectors(t,s);const h=gi.dot(Rr),d=vi.dot(Rr);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(gi,a);Cr.subVectors(t,r);const p=gi.dot(Cr),g=vi.dot(Cr);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(vi,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return Xo.subVectors(r,s),o=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Xo,o);const m=1/(f+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(gi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=zh(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dr(a,r,t+1/3),this.g=Dr(a,r,t),this.b=Dr(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(be(Ee.r*255,0,255))*65536+Math.round(be(Ee.g*255,0,255))*256+Math.round(be(Ee.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Qe){Qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(ys);const n=mr(Un.h,ys.h,e),s=mr(Un.s,ys.s,e),r=mr(Un.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=cl;let sd=0;class Bi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ei,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zi extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new P,Ss=new vt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Io,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Io&&(t.usage=this.usage),t}}class ll extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rd=0;const Xe=new oe,Ur=new ye,_i=new P,Ve=new cs,$i=new cs,ve=new P;class de extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?hl:ll)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ve.min,$i.min),Ve.expandByPoint(ve),ve.addVectors(Ve.max,$i.max),Ve.expandByPoint(ve)):(Ve.expandByPoint($i.min),Ve.expandByPoint($i.max))}Ve.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ve.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),ve.add(_i)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;const l=new P,h=new P,d=new P,u=new vt,p=new vt,g=new vt,x=new P,f=new P;function m(C,V,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const S=1/(p.x*g.y-g.x*p.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(S),f.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(S),o[C].add(x),o[V].add(x),o[v].add(x),c[C].add(f),c[V].add(f),c[v].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,V=_.length;C<V;++C){const v=_[C],S=v.start,N=v.count;for(let k=S,X=S+N;k<X;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new P,w=new P,R=new P,A=new P;function E(C){R.fromBufferAttribute(s,C),A.copy(R);const V=o[C];M.copy(V),M.sub(R.multiplyScalar(R.dot(V))).normalize(),w.crossVectors(A,V);const S=w.dot(c[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,S)}for(let C=0,V=_.length;C<V;++C){const v=_[C],S=v.start,N=v.count;for(let k=S,X=S+N;k<X;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[p++]}return new Fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qo=new oe,qn=new al,bs=new sr,$o=new P,ws=new P,Es=new P,Ts=new P,Nr=new P,As=new P,Yo=new P,Rs=new P;class it extends ye{constructor(t=new de,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){As.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Nr.fromBufferAttribute(d,t),a?As.addScaledVector(Nr,h):As.addScaledVector(Nr.sub(e),h))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(bs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(bs,$o)===null||qn.origin.distanceToSquared($o)>(t.far-t.near)**2))&&(qo.copy(r).invert(),qn.copy(t.ray).applyMatrix4(qo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],m=a[f.materialIndex],_=Math.max(f.start,p.start),M=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let w=_,R=M;w<R;w+=3){const A=o.getX(w),E=o.getX(w+1),C=o.getX(w+2);s=Cs(this,m,t,n,l,h,d,A,E,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const _=o.getX(f),M=o.getX(f+1),w=o.getX(f+2);s=Cs(this,a,t,n,l,h,d,_,M,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const f=u[g],m=a[f.materialIndex],_=Math.max(f.start,p.start),M=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let w=_,R=M;w<R;w+=3){const A=w,E=w+1,C=w+2;s=Cs(this,m,t,n,l,h,d,A,E,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,m=x;f<m;f+=3){const _=f,M=f+1,w=f+2;s=Cs(this,a,t,n,l,h,d,_,M,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function ad(i,t,e,n,s,r,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Tn,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rs);return l<e.near||l>e.far?null:{distance:l,point:Rs.clone(),object:i}}function Cs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ws),i.getVertexPosition(c,Es),i.getVertexPosition(l,Ts);const h=ad(i,t,e,n,ws,Es,Ts,Yo);if(h){const d=new P;nn.getBarycoord(Yo,ws,Es,Ts,d),s&&(h.uv=nn.getInterpolatedAttribute(s,o,c,l,d,new vt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,c,l,d,new vt)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};nn.getNormal(ws,Es,Ts,u.normal),h.face=u,h.barycoord=d}return h}class Yt extends de{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(x,f,m,_,M,w,R,A,E,C,V){const v=w/E,S=R/C,N=w/2,k=R/2,X=A/2,K=E+1,H=C+1;let J=0,G=0;const at=new P;for(let ut=0;ut<H;ut++){const nt=ut*S-k;for(let Lt=0;Lt<K;Lt++){const zt=Lt*v-N;at[x]=zt*_,at[f]=nt*M,at[m]=X,l.push(at.x,at.y,at.z),at[x]=0,at[f]=0,at[m]=A>0?1:-1,h.push(at.x,at.y,at.z),d.push(Lt/E),d.push(1-ut/C),J+=1}}for(let ut=0;ut<C;ut++)for(let nt=0;nt<E;nt++){const Lt=u+nt+K*ut,zt=u+nt+K*(ut+1),q=u+(nt+1)+K*(ut+1),Q=u+(nt+1)+K*ut;c.push(Lt,zt,Q),c.push(zt,q,Q),G+=6}o.addGroup(p,G,V),p+=G,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Ni(i[e]);for(const s in n)t[s]=n[s]}return t}function od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const cd={clone:Ni,merge:Le};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ul extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new P,Ko=new vt,jo=new vt;class He extends ul{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Ko,jo),e.subVectors(jo,Ko)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,Mi=1;class dd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(xi,Mi,t,e);s.layers=this.layers,this.add(s);const r=new He(xi,Mi,t,e);r.layers=this.layers,this.add(r);const a=new He(xi,Mi,t,e);a.layers=this.layers,this.add(a);const o=new He(xi,Mi,t,e);o.layers=this.layers,this.add(o);const c=new He(xi,Mi,t,e);c.layers=this.layers,this.add(c);const l=new He(xi,Mi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fl extends Ce{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ud extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:zn});r.uniforms.tEquirect.value=e;const a=new it(s,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=en),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Fr=new P,fd=new P,pd=new kt;class jn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Fr.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pd.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new sr,Ps=new P;class io{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],x=s[10],f=s[11],m=s[12],_=s[13],M=s[14],w=s[15];if(n[0].setComponents(c-r,u-l,f-p,w-m).normalize(),n[1].setComponents(c+r,u+l,f+p,w+m).normalize(),n[2].setComponents(c+a,u+h,f+g,w+_).normalize(),n[3].setComponents(c-a,u-h,f-g,w-_).normalize(),n[4].setComponents(c-o,u-d,f-x,w-M).normalize(),e===En)n[5].setComponents(c+o,u+d,f+x,w+M).normalize();else if(e===Js)n[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function md(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Fi extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],x=[],f=[];for(let m=0;m<h;m++){const _=m*u-a;for(let M=0;M<l;M++){const w=M*d-r;g.push(w,-_,0),x.push(0,0,1),f.push(M/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<o;_++){const M=_+l*m,w=_+l*(m+1),R=_+1+l*(m+1),A=_+1+l*m;p.push(M,w,A),p.push(w,R,A)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bd=`#define PI 3.141592653589793
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
} // validated`,zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iu=`#ifdef USE_GRADIENTMAP
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
}`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fu=`PhysicalMaterial material;
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
#endif`,pu=`struct PhysicalMaterial {
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
}`,mu=`
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
#endif`,gu=`#if defined( RE_IndirectDiffuse )
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eu=`#if defined( USE_POINTS_UV )
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
#endif`,Tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
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
#endif`,Bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,bf=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Ef=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Pf=`#include <common>
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
}`,Lf=`uniform vec3 diffuse;
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
}`,If=`#define LAMBERT
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
}`,Df=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Of=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Wf=`uniform float size;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,$f=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:gd,alphahash_pars_fragment:vd,alphamap_fragment:_d,alphamap_pars_fragment:xd,alphatest_fragment:Md,alphatest_pars_fragment:yd,aomap_fragment:Sd,aomap_pars_fragment:bd,batching_pars_vertex:wd,batching_vertex:Ed,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:kd,common:Bd,cube_uv_reflection_fragment:zd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:$d,envmap_fragment:Yd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:jd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:cu,envmap_vertex:Zd,fog_vertex:Qd,fog_pars_vertex:tu,fog_fragment:eu,fog_pars_fragment:nu,gradientmap_pars_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:lu,lights_toon_pars_fragment:hu,lights_phong_fragment:du,lights_phong_pars_fragment:uu,lights_physical_fragment:fu,lights_physical_pars_fragment:pu,lights_fragment_begin:mu,lights_fragment_maps:gu,lights_fragment_end:vu,logdepthbuf_fragment:_u,logdepthbuf_pars_fragment:xu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:yu,map_fragment:Su,map_pars_fragment:bu,map_particle_fragment:wu,map_particle_pars_fragment:Eu,metalnessmap_fragment:Tu,metalnessmap_pars_fragment:Au,morphinstance_vertex:Ru,morphcolor_vertex:Cu,morphnormal_vertex:Pu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Iu,normal_fragment_begin:Du,normal_fragment_maps:Uu,normal_pars_fragment:Nu,normal_pars_vertex:Fu,normal_vertex:Ou,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Bu,clearcoat_normal_fragment_maps:zu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Hu,opaque_fragment:Gu,packing:Wu,premultiplied_alpha_fragment:Xu,project_vertex:qu,dithering_fragment:$u,dithering_pars_fragment:Yu,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Zu,shadowmap_vertex:Qu,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:cf,tonemapping_pars_fragment:lf,transmission_fragment:hf,transmission_pars_fragment:df,uv_pars_fragment:uf,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:vf,backgroundCube_vert:_f,backgroundCube_frag:xf,cube_vert:Mf,cube_frag:yf,depth_vert:Sf,depth_frag:bf,distanceRGBA_vert:wf,distanceRGBA_frag:Ef,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:If,meshlambert_frag:Df,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:kf,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Vf,meshtoon_vert:Hf,meshtoon_frag:Gf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:$f,sprite_vert:Yf,sprite_frag:Kf},st={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},cn={basic:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Le([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Le([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Le([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Le([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Le([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Le([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Le([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Le([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Le([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Le([st.lights,st.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};cn.physical={uniforms:Le([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ls={r:0,b:0,g:0},Yn=new fn,jf=new oe;function Jf(i,t,e,n,s,r,a){const o=new Bt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function x(_){let M=!1;const w=g(_);w===null?m(o,c):w&&w.isColor&&(m(w,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(_,M){const w=g(M);w&&(w.isCubeTexture||w.mapping===nr)?(h===void 0&&(h=new it(new Yt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ni(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Yn.copy(M.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Yn)),h.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,(d!==w||u!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new it(new Fi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ni(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Ls,dl(i)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),c=M,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,m(o,c)},render:x,addToRenderList:f}}function Zf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(v,S,N,k,X){let K=!1;const H=d(k,N,S);r!==H&&(r=H,l(r.object)),K=p(v,k,N,X),K&&g(v,k,N,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,w(v,S,N,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function d(v,S,N){const k=N.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let K=X[S.id];K===void 0&&(K={},X[S.id]=K);let H=K[k];return H===void 0&&(H=u(c()),K[k]=H),H}function u(v){const S=[],N=[],k=[];for(let X=0;X<e;X++)S[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,S,N,k){const X=r.attributes,K=S.attributes;let H=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){const ut=X[G];let nt=K[G];if(nt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),ut===void 0||ut.attribute!==nt||nt&&ut.data!==nt.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(v,S,N,k){const X={},K=S.attributes;let H=0;const J=N.getAttributes();for(const G in J)if(J[G].location>=0){let ut=K[G];ut===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const nt={};nt.attribute=ut,ut&&ut.data&&(nt.data=ut.data),X[G]=nt,H++}r.attributes=X,r.attributesNum=H,r.index=k}function x(){const v=r.newAttributes;for(let S=0,N=v.length;S<N;S++)v[S]=0}function f(v){m(v,0)}function m(v,S){const N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),X[v]!==S&&(i.vertexAttribDivisor(v,S),X[v]=S)}function _(){const v=r.newAttributes,S=r.enabledAttributes;for(let N=0,k=S.length;N<k;N++)S[N]!==v[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function M(v,S,N,k,X,K,H){H===!0?i.vertexAttribIPointer(v,S,N,X,K):i.vertexAttribPointer(v,S,N,k,X,K)}function w(v,S,N,k){x();const X=k.attributes,K=N.getAttributes(),H=S.defaultAttributeValues;for(const J in K){const G=K[J];if(G.location>=0){let at=X[J];if(at===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(at=v.instanceColor)),at!==void 0){const ut=at.normalized,nt=at.itemSize,Lt=t.get(at);if(Lt===void 0)continue;const zt=Lt.buffer,q=Lt.type,Q=Lt.bytesPerElement,xt=q===i.INT||q===i.UNSIGNED_INT||at.gpuType===ja;if(at.isInterleavedBufferAttribute){const ft=at.data,Ut=ft.stride,Tt=at.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt,ft.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)f(G.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Gt=0;Gt<G.locationSize;Gt++)M(G.location+Gt,nt/G.locationSize,q,ut,Ut*Q,(Tt+nt/G.locationSize*Gt)*Q,xt)}else{if(at.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)m(G.location+ft,at.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ft=0;ft<G.locationSize;ft++)f(G.location+ft);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let ft=0;ft<G.locationSize;ft++)M(G.location+ft,nt/G.locationSize,q,ut,nt*Q,nt/G.locationSize*ft*Q,xt)}}else if(H!==void 0){const ut=H[J];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}_()}function R(){C();for(const v in n){const S=n[v];for(const N in S){const k=S[N];for(const X in k)h(k[X].object),delete k[X];delete S[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const N in S){const k=S[N];for(const X in k)h(k[X].object),delete k[X];delete S[N]}delete n[v.id]}function E(v){for(const S in n){const N=n[S];if(N[v.id]===void 0)continue;const k=N[v.id];for(const X in k)h(k[X].object),delete k[X];delete N[v.id]}}function C(){V(),a=!0,r!==s&&(r=s,l(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:V,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:f,disableUnusedAttributes:_}}function Qf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function tp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==sn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==An&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==wn&&!C)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:R,maxSamples:A}}function ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new jn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{const _=r?0:n,M=_*4;let w=m.clippingState||null;c.value=w,w=h(g,u,M,p);for(let R=0;R!==M;++R)w[R]=e[R];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=c.value,g!==!0||f===null){const m=p+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<m)&&(f=new Float32Array(m));for(let M=0,w=p;M!==x;++M,w+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(f,w),f[w+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function np(i){let t=new WeakMap;function e(a,o){return o===da?a.mapping=Li:o===ua&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===da||o===ua)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ud(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ml extends ul{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,Jo=[.125,.215,.35,.446,.526,.582],Qn=20,Or=new ml,Zo=new Bt;let kr=null,Br=0,zr=0,Vr=!1;const Jn=(1+Math.sqrt(5))/2,yi=1/Jn,Qo=[new P(-Jn,yi,0),new P(Jn,yi,0),new P(-yi,0,Jn),new P(yi,0,Jn),new P(0,Jn,-yi),new P(0,Jn,yi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Br,zr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:rs,format:sn,colorSpace:Hn,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,t,e)}return s}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,s){const o=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Zo),h.toneMapping=Vn,h.autoClear=!1;const p=new Zi({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new it(new Yt,p);let x=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(Zo),x=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):_===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const M=this._cubeSize;Is(s,_*M,m>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Is(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qo[(s-r-1)%Qo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):Qn;f>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qn}`);const m=[];let _=0;for(let E=0;E<Qn;++E){const C=E/x,V=Math.exp(-C*C/2);m.push(V),E===0?_+=V:E<f&&(_+=2*V)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const w=this._sizeLods[s],R=3*w*(s>M-wi?s-M+wi:0),A=4*(this._cubeSize-w);Is(e,R,A,3*w,2*w),c.setRenderTarget(e),c.render(d,Or)}}function ip(i){const t=[],e=[],n=[];let s=i;const r=i-wi+1+Jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-wi?c=Jo[a-i+wi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,f=2,m=1,_=new Float32Array(x*g*p),M=new Float32Array(f*g*p),w=new Float32Array(m*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,C=A>2?0:-1,V=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(V,x*g*A),M.set(u,f*g*A);const v=[A,A,A,A,A,A];w.set(v,m*g*A)}const R=new de;R.setAttribute("position",new Fe(_,x)),R.setAttribute("uv",new Fe(M,f)),R.setAttribute("faceIndex",new Fe(w,m)),t.push(R),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new si(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sp(i,t,e){const n=new Float32Array(Qn),s=new P(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:so(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function nc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ic(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function so(){return`

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
	`}function rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===da||c===ua,h=c===Li||c===Ii;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new tc(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new tc(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ap(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let f=0,m=x.length;f<m;f++)t.remove(x[f])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let f=0,m=x.length;f<m;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let M=0,w=_.length;M<w;M+=3){const R=_[M+0],A=_[M+1],E=_[M+2];u.push(R,A,A,E,E,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let M=0,w=_.length/3-1;M<w;M+=3){const R=M+0,A=M+1,E=M+2;u.push(R,A,A,E,E,R)}}else return;const f=new(il(u)?hl:ll)(u,1);f.version=x;const m=r.get(d);m&&t.remove(m),r.set(d,f)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function cp(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function d(u,p,g,x){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)l(u[m]/a,p[m],x[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let m=0;for(let _=0;_<g;_++)m+=p[_];for(let _=0;_<x.length;_++)e.update(m,n,x[_])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,t,e){const n=new WeakMap,s=new le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),x===!0&&(w=2),f===!0&&(w=3);let R=o.attributes.position.count*w,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*d),C=new rl(E,R,A,d);C.type=wn,C.needsUpdate=!0;const V=w*4;for(let S=0;S<d;S++){const N=m[S],k=_[S],X=M[S],K=R*A*4*S;for(let H=0;H<N.count;H++){const J=H*V;g===!0&&(s.fromBufferAttribute(N,H),E[K+J+0]=s.x,E[K+J+1]=s.y,E[K+J+2]=s.z,E[K+J+3]=0),x===!0&&(s.fromBufferAttribute(k,H),E[K+J+4]=s.x,E[K+J+5]=s.y,E[K+J+6]=s.z,E[K+J+7]=0),f===!0&&(s.fromBufferAttribute(X,H),E[K+J+8]=s.x,E[K+J+9]=s.y,E[K+J+10]=s.z,E[K+J+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new vt(R,A)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function dp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class gl extends Ce{constructor(t,e,n,s,r,a,o,c,l,h=Ti){if(h!==Ti&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=ii),n===void 0&&h===Ui&&(n=Di),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vl=new Ce,sc=new gl(1,1),_l=new rl,xl=new jh,Ml=new fl,rc=[],ac=[],oc=new Float32Array(16),cc=new Float32Array(9),lc=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rr(i,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),ge(e,n)}}function vp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),ge(e,n)}}function _p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),ge(e,n)}}function xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=nl,r=sc):r=vl,e.setTexture2D(t||r,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xl,s)}function Cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ml,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_l,s)}function Lp(i){switch(i){case 5126:return up;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return Sp;case 5125:return bp;case 36294:return wp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(i,t){i.uniform1fv(this.addr,t)}function Dp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Up(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Np(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Fp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Op(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kp(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bp(i,t){i.uniform1iv(this.addr,t)}function zp(i,t){i.uniform2iv(this.addr,t)}function Vp(i,t){i.uniform3iv(this.addr,t)}function Hp(i,t){i.uniform4iv(this.addr,t)}function Gp(i,t){i.uniform1uiv(this.addr,t)}function Wp(i,t){i.uniform2uiv(this.addr,t)}function Xp(i,t){i.uniform3uiv(this.addr,t)}function qp(i,t){i.uniform4uiv(this.addr,t)}function $p(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||vl,r[a])}function Yp(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xl,r[a])}function Kp(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ml,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=rr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_l,r[a])}function Jp(i){switch(i){case 5126:return Ip;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return kp;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return jp}}class Zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function hc(i,t){i.seq.push(t),i.map[t.id]=t}function em(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),a=Hr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hc(e,l===void 0?new Zp(o,i,t):new Qp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new tm(o),hc(e,d)),e=d}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);em(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nm=37297;let im=0;function sm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function rm(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===js&&e===Ks?n="LinearDisplayP3ToLinearSRGB":t===Ks&&e===js&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case ir:return[n,"LinearTransferOETF"];case Qe:case no:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sm(i.getShaderSource(t),a)}else return s}function am(i,t){const e=rm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function om(i,t){let e;switch(t){case Sh:e="Linear";break;case bh:e="Reinhard";break;case wh:e="Cineon";break;case Eh:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new P;function cm(){Qt.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function hm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function fc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(um,pm)}const fm=new Map;function pm(i,t){let e=Ot[t];if(e===void 0){const n=fm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(i){return i.replace(mm,gm)}function gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function _m(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ii:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case yh:t="ENVMAP_BLENDING_ADD";break}return t}function ym(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vm(e),l=_m(e),h=xm(e),d=Mm(e),u=ym(e),p=lm(e),g=hm(r),x=s.createProgram();let f,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(f=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Vn?om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,am("linearToOutputTexel",e.outputColorSpace),cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ha(a),a=fc(a,e),a=pc(a,e),o=Ha(o),o=fc(o,e),o=pc(o,e),a=mc(a),o=mc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=_+f+a,w=_+m+o,R=dc(s,s.VERTEX_SHADER,M),A=dc(s,s.FRAGMENT_SHADER,w);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(S){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(A).trim();let K=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,A);else{const J=uc(s,R,"vertex"),G=uc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+J+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(H=!1);H&&(S.diagnostics={runnable:K,programLog:N,vertexShader:{log:k,prefix:f},fragmentShader:{log:X,prefix:m}})}s.deleteShader(R),s.deleteShader(A),C=new Xs(s,x),V=dm(s,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let V;this.getAttributes=function(){return V===void 0&&E(this),V};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,nm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=im++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let bm=0;class wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Em(t),e.set(t,n)),n}}class Em{constructor(t){this.id=bm++,this.code=t,this.usedTimes=0}}function Tm(i,t,e,n,s,r,a){const o=new ol,c=new wm,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,k,X){const K=k.fog,H=X.geometry,J=v.isMeshStandardMaterial?k.environment:null,G=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),at=G&&G.mapping===nr?G.image.height:null,ut=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=nt!==void 0?nt.length:0;let zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let q,Q,xt,ft;if(ut){const Ue=cn[ut];q=Ue.vertexShader,Q=Ue.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,c.update(v),xt=c.getVertexShaderID(v),ft=c.getFragmentShaderID(v);const Ut=i.getRenderTarget(),Tt=X.isInstancedMesh===!0,Gt=X.isBatchedMesh===!0,ee=!!v.map,Wt=!!v.matcap,L=!!G,Oe=!!v.aoMap,Vt=!!v.lightMap,qt=!!v.bumpMap,Rt=!!v.normalMap,se=!!v.displacementMap,It=!!v.emissiveMap,T=!!v.metalnessMap,y=!!v.roughnessMap,F=v.anisotropy>0,Y=v.clearcoat>0,Z=v.dispersion>0,$=v.iridescence>0,yt=v.sheen>0,rt=v.transmission>0,pt=F&&!!v.anisotropyMap,$t=Y&&!!v.clearcoatMap,tt=Y&&!!v.clearcoatNormalMap,mt=Y&&!!v.clearcoatRoughnessMap,Ct=$&&!!v.iridescenceMap,Pt=$&&!!v.iridescenceThicknessMap,gt=yt&&!!v.sheenColorMap,Ht=yt&&!!v.sheenRoughnessMap,Nt=!!v.specularMap,ne=!!v.specularColorMap,I=!!v.specularIntensityMap,lt=rt&&!!v.transmissionMap,W=rt&&!!v.thicknessMap,j=!!v.gradientMap,ot=!!v.alphaMap,ht=v.alphaTest>0,Xt=!!v.alphaHash,ue=!!v.extensions;let De=Vn;v.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(De=i.toneMapping);const Kt={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:ft,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&X._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&X.instanceColor!==null,instancingMorph:Tt&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Hn,alphaToCoverage:!!v.alphaToCoverage,map:ee,matcap:Wt,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:at,aoMap:Oe,lightMap:Vt,bumpMap:qt,normalMap:Rt,displacementMap:p&&se,emissiveMap:It,normalMapObjectSpace:Rt&&v.normalMapType===Ih,normalMapTangentSpace:Rt&&v.normalMapType===el,metalnessMap:T,roughnessMap:y,anisotropy:F,anisotropyMap:pt,clearcoat:Y,clearcoatMap:$t,clearcoatNormalMap:tt,clearcoatRoughnessMap:mt,dispersion:Z,iridescence:$,iridescenceMap:Ct,iridescenceThicknessMap:Pt,sheen:yt,sheenColorMap:gt,sheenRoughnessMap:Ht,specularMap:Nt,specularColorMap:ne,specularIntensityMap:I,transmission:rt,transmissionMap:lt,thicknessMap:W,gradientMap:j,opaque:v.transparent===!1&&v.blending===Ei&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Xt,combine:v.combine,mapUv:ee&&f(v.map.channel),aoMapUv:Oe&&f(v.aoMap.channel),lightMapUv:Vt&&f(v.lightMap.channel),bumpMapUv:qt&&f(v.bumpMap.channel),normalMapUv:Rt&&f(v.normalMap.channel),displacementMapUv:se&&f(v.displacementMap.channel),emissiveMapUv:It&&f(v.emissiveMap.channel),metalnessMapUv:T&&f(v.metalnessMap.channel),roughnessMapUv:y&&f(v.roughnessMap.channel),anisotropyMapUv:pt&&f(v.anisotropyMap.channel),clearcoatMapUv:$t&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&f(v.sheenRoughnessMap.channel),specularMapUv:Nt&&f(v.specularMap.channel),specularColorMapUv:ne&&f(v.specularColorMap.channel),specularIntensityMapUv:I&&f(v.specularIntensityMap.channel),transmissionMapUv:lt&&f(v.transmissionMap.channel),thicknessMapUv:W&&f(v.thicknessMap.channel),alphaMapUv:ot&&f(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Rt||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(ee||ot),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:zt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ee&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hn,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function _(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(M(S,v),w(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function w(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const S=x[v.type];let N;if(S){const k=cn[S];N=cd.clone(k.uniforms)}else N=v.uniforms;return N}function A(v,S){let N;for(let k=0,X=h.length;k<X;k++){const K=h[k];if(K.cacheKey===S){N=K,++N.usedTimes;break}}return N===void 0&&(N=new Sm(i,S,v,r),h.push(N)),N}function E(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:V}}function Am(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,p,g,x,f){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=f),t++,m}function o(d,u,p,g,x,f){const m=a(d,u,p,g,x,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function c(d,u,p,g,x,f){const m=a(d,u,p,g,x,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(d,u){e.length>1&&e.sort(d||Rm),n.length>1&&n.sort(u||vc),s.length>1&&s.sort(u||vc)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Cm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new _c,i.set(n,[a])):s>=r.length?(a=new _c,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Bt};break;case"SpotLight":e={position:new P,direction:new P,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Im=0;function Dm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Um(i){const t=new Pm,e=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new oe,a=new oe;function o(l){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let p=0,g=0,x=0,f=0,m=0,_=0,M=0,w=0,R=0,A=0,E=0;l.sort(Dm);for(let V=0,v=l.length;V<v;V++){const S=l[V],N=S.color,k=S.intensity,X=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(S.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(S.sh.coefficients[H],k);E++}else if(S.isDirectionalLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const J=S.shadow,G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=S.shadow.matrix,_++}n.directional[p]=H,p++}else if(S.isSpotLight){const H=t.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(N).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,n.spot[x]=H;const J=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,J.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[x]=J.matrix,S.castShadow){const G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=K,w++}x++}else if(S.isRectAreaLight){const H=t.get(S);H.color.copy(N).multiplyScalar(k),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=H,f++}else if(S.isPointLight){const H=t.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const J=S.shadow,G=e.get(S);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=S.shadow.matrix,M++}n.point[g]=H,g++}else if(S.isHemisphereLight){const H=t.get(S);H.skyColor.copy(S.color).multiplyScalar(k),H.groundColor.copy(S.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==f||C.hemiLength!==m||C.numDirectionalShadows!==_||C.numPointShadows!==M||C.numSpotShadows!==w||C.numSpotMaps!==R||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=x,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=_,C.numPointShadows=M,C.numSpotShadows=w,C.numSpotMaps=R,C.numLightProbes=E,n.version=Im++)}function c(l,h){let d=0,u=0,p=0,g=0,x=0;const f=h.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){const M=l[m];if(M.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(M.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),p++}else if(M.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),x++}}}return{setup:o,setupView:c,state:n}}function xc(i){const t=new Um(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Nm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new xc(i),t.set(s,[o])):r>=a.length?(o=new xc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Fm extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Om extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(i,t,e){let n=new io;const s=new vt,r=new vt,a=new le,o=new Fm({depthPacking:Lh}),c=new Om,l={},h=e.maxTextureSize,d={[Tn]:Ie,[Ie]:Tn,[hn]:hn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:km,fragmentShader:Bm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new it(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let m=this.type;this.render=function(A,E,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(zn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=m!==yn&&this.type===yn,X=m===yn&&this.type!==yn;for(let K=0,H=A.length;K<H;K++){const J=A[K],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const at=G.getFrameExtents();if(s.multiply(at),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||k===!0||X===!0){const nt=this.type!==yn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new si(s.x,s.y,nt),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ut=G.getViewportCount();for(let nt=0;nt<ut;nt++){const Lt=G.getViewport(nt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(a),G.updateMatrices(J,nt),n=G.getFrustum(),w(E,C,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===yn&&_(G,C),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(V,v,S)};function _(A,E){const C=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,C,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,C,p,x,null)}function M(A,E,C,V){let v=null;const S=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)v=S;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,k=E.uuid;let X=l[N];X===void 0&&(X={},l[N]=X);let K=X[k];K===void 0&&(K=v.clone(),X[k]=K,E.addEventListener("dispose",R)),v=K}if(v.visible=E.visible,v.wireframe=E.wireframe,V===yn?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=C}return v}function w(A,E,C,V,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const k=t.update(A),X=A.material;if(Array.isArray(X)){const K=k.groups;for(let H=0,J=K.length;H<J;H++){const G=K[H],at=X[G.materialIndex];if(at&&at.visible){const ut=M(A,at,V,v);A.onBeforeShadow(i,A,E,C,k,ut,G),i.renderBufferDirect(C,null,k,ut,A,G),A.onAfterShadow(i,A,E,C,k,ut,G)}}}else if(X.visible){const K=M(A,X,V,v);A.onBeforeShadow(i,A,E,C,k,K,null),i.renderBufferDirect(C,null,k,K,A,null),A.onAfterShadow(i,A,E,C,k,K,null)}}const N=A.children;for(let k=0,X=N.length;k<X;k++)w(N[k],E,C,V,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in l){const V=l[C],v=A.target.uuid;v in V&&(V[v].dispose(),delete V[v])}}}const Vm={[sa]:ra,[aa]:la,[oa]:ha,[Pi]:ca,[ra]:sa,[la]:aa,[ha]:oa,[ca]:Pi};function Hm(i){function t(){let I=!1;const lt=new le;let W=null;const j=new le(0,0,0,0);return{setMask:function(ot){W!==ot&&!I&&(i.colorMask(ot,ot,ot,ot),W=ot)},setLocked:function(ot){I=ot},setClear:function(ot,ht,Xt,ue,De){De===!0&&(ot*=ue,ht*=ue,Xt*=ue),lt.set(ot,ht,Xt,ue),j.equals(lt)===!1&&(i.clearColor(ot,ht,Xt,ue),j.copy(lt))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function e(){let I=!1,lt=!1,W=null,j=null,ot=null;return{setReversed:function(ht){lt=ht},setTest:function(ht){ht?xt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(ht){W!==ht&&!I&&(i.depthMask(ht),W=ht)},setFunc:function(ht){if(lt&&(ht=Vm[ht]),j!==ht){switch(ht){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ot!==ht&&(i.clearDepth(ht),ot=ht)},reset:function(){I=!1,W=null,j=null,ot=null}}}function n(){let I=!1,lt=null,W=null,j=null,ot=null,ht=null,Xt=null,ue=null,De=null;return{setTest:function(Kt){I||(Kt?xt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Kt){lt!==Kt&&!I&&(i.stencilMask(Kt),lt=Kt)},setFunc:function(Kt,Ue,mn){(W!==Kt||j!==Ue||ot!==mn)&&(i.stencilFunc(Kt,Ue,mn),W=Kt,j=Ue,ot=mn)},setOp:function(Kt,Ue,mn){(ht!==Kt||Xt!==Ue||ue!==mn)&&(i.stencilOp(Kt,Ue,mn),ht=Kt,Xt=Ue,ue=mn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){De!==Kt&&(i.clearStencil(Kt),De=Kt)},reset:function(){I=!1,lt=null,W=null,j=null,ot=null,ht=null,Xt=null,ue=null,De=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,f=null,m=null,_=null,M=null,w=null,R=null,A=new Bt(0,0,0),E=0,C=!1,V=null,v=null,S=null,N=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=H>=2);let G=null,at={};const ut=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),Lt=new le().fromArray(ut),zt=new le().fromArray(nt);function q(I,lt,W,j){const ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<W;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(lt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xt(i.DEPTH_TEST),r.setFunc(Pi),Vt(!1),qt(Ao),xt(i.CULL_FACE),L(zn);function xt(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function ft(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function Ut(I,lt){return h[I]!==lt?(i.bindFramebuffer(I,lt),h[I]=lt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Tt(I,lt){let W=u,j=!1;if(I){W=d.get(lt),W===void 0&&(W=[],d.set(lt,W));const ot=I.textures;if(W.length!==ot.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Xt=ot.length;ht<Xt;ht++)W[ht]=i.COLOR_ATTACHMENT0+ht;W.length=ot.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function Gt(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ee={[Zn]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[sh]:i.FUNC_REVERSE_SUBTRACT};ee[rh]=i.MIN,ee[ah]=i.MAX;const Wt={[oh]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[dh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[uh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[vh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,lt,W,j,ot,ht,Xt,ue,De,Kt){if(I===zn){g===!0&&(ft(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),I!==nh){if(I!==x||Kt!==C){if((f!==Zn||M!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,M=Zn),Kt)switch(I){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,_=null,w=null,R=null,A.set(0,0,0),E=0,x=I,C=Kt}return}ot=ot||lt,ht=ht||W,Xt=Xt||j,(lt!==f||ot!==M)&&(i.blendEquationSeparate(ee[lt],ee[ot]),f=lt,M=ot),(W!==m||j!==_||ht!==w||Xt!==R)&&(i.blendFuncSeparate(Wt[W],Wt[j],Wt[ht],Wt[Xt]),m=W,_=j,w=ht,R=Xt),(ue.equals(A)===!1||De!==E)&&(i.blendColor(ue.r,ue.g,ue.b,De),A.copy(ue),E=De),x=I,C=!1}function Oe(I,lt){I.side===hn?ft(i.CULL_FACE):xt(i.CULL_FACE);let W=I.side===Ie;lt&&(W=!W),Vt(W),I.blending===Ei&&I.transparent===!1?L(zn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(I){V!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),V=I)}function qt(I){I!==th?(xt(i.CULL_FACE),I!==v&&(I===Ao?i.cullFace(i.BACK):I===eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),v=I}function Rt(I){I!==S&&(K&&i.lineWidth(I),S=I)}function se(I,lt,W){I?(xt(i.POLYGON_OFFSET_FILL),(N!==lt||k!==W)&&(i.polygonOffset(lt,W),N=lt,k=W)):ft(i.POLYGON_OFFSET_FILL)}function It(I){I?xt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+X-1),G!==I&&(i.activeTexture(I),G=I)}function y(I,lt,W){W===void 0&&(G===null?W=i.TEXTURE0+X-1:W=G);let j=at[W];j===void 0&&(j={type:void 0,texture:void 0},at[W]=j),(j.type!==I||j.texture!==lt)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(I,lt||Q[I]),j.type=I,j.texture=lt)}function F(){const I=at[G];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Lt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Lt.copy(I))}function gt(I){zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),zt.copy(I))}function Ht(I,lt){let W=c.get(lt);W===void 0&&(W=new WeakMap,c.set(lt,W));let j=W.get(I);j===void 0&&(j=i.getUniformBlockIndex(lt,I.name),W.set(I,j))}function Nt(I,lt){const j=c.get(lt).get(I);o.get(lt)!==j&&(i.uniformBlockBinding(lt,j,I.__bindingPointIndex),o.set(lt,j))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,at={},h={},d=new WeakMap,u=[],p=null,g=!1,x=null,f=null,m=null,_=null,M=null,w=null,R=null,A=new Bt(0,0,0),E=0,C=!1,V=null,v=null,S=null,N=null,k=null,Lt.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xt,disable:ft,bindFramebuffer:Ut,drawBuffers:Tt,useProgram:Gt,setBlending:L,setMaterial:Oe,setFlipSided:Vt,setCullFace:qt,setLineWidth:Rt,setPolygonOffset:se,setScissorTest:It,activeTexture:T,bindTexture:y,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:tt,texSubImage2D:$,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:ne}}function Mc(i,t,e,n){const s=Gm(n);switch(e){case Yc:return i*t;case jc:return i*t;case Jc:return i*t*2;case Zc:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case to:return i*t*2/s.components*s.byteLength;case Kc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case eo:return i*t*4/s.components*s.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(t,8)/4;case ma:case va:return Math.max(i,8)*Math.max(t,8)/2;case xa:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(i){switch(i){case An:case Xc:return{byteLength:1,components:1};case es:case qc:case rs:return{byteLength:2,components:1};case Ja:case Za:return{byteLength:2,components:4};case ii:case ja:case wn:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Wm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):ns("canvas")}function x(T,y,F){let Y=1;const Z=It(T);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);d===void 0&&(d=g($,yt));const rt=y?g($,yt):d;return rt.width=$,rt.height=yt,rt.getContext("2d").drawImage(T,0,0,$,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+yt+")."),rt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==$e&&T.minFilter!==en}function m(T){i.generateMipmap(T)}function _(T,y,F,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),y===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),y===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const yt=Z?Ys:Qt.getTransfer(Y);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=yt===ae?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(T,y){let F;return T?y===null||y===ii||y===Di?F=i.DEPTH24_STENCIL8:y===wn?F=i.DEPTH32F_STENCIL8:y===es&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===Di?F=i.DEPTH_COMPONENT24:y===wn?F=i.DEPTH_COMPONENT32F:y===es&&(F=i.DEPTH_COMPONENT16),F}function w(T,y){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),V(y)}function E(T){const y=n.get(T);if(y.__webglInit===void 0)return;const F=T.source,Y=u.get(F);if(Y){const Z=Y[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(T),Object.keys(Y).length===0&&u.delete(F)}n.remove(T)}function C(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const F=T.source,Y=u.get(F);delete Y[y.__cacheKey],a.memory.textures--}function V(T){const y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Z=0;Z<y.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const $=n.get(F[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(T)}let v=0;function S(){v=0}function N(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function k(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function X(T,y){const F=n.get(T);if(T.isVideoTexture&&Rt(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(F,T,y);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function K(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){zt(F,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function H(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){zt(F,T,y);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function J(T,y){const F=n.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const G={[fa]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},at={[$e]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ut={[Dh]:i.NEVER,[Bh]:i.ALWAYS,[Uh]:i.LESS,[nl]:i.LEQUAL,[Nh]:i.EQUAL,[kh]:i.GEQUAL,[Fh]:i.GREATER,[Oh]:i.NOTEQUAL};function nt(T,y){if(y.type===wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===en||y.magFilter===fr||y.magFilter===fs||y.magFilter===ei||y.minFilter===en||y.minFilter===fr||y.minFilter===fs||y.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==fs&&y.minFilter!==ei||y.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(T,y){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const Y=y.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const $=k(y);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[$].usedTimes++;const yt=Z[T.__cacheKey];yt!==void 0&&(Z[T.__cacheKey].usedTimes--,yt.usedTimes===0&&C(y)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return F}function zt(T,y,F){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Lt(T,y),$=y.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);const yt=n.get($);if($.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const rt=Qt.getPrimaries(Qt.workingColorSpace),pt=y.colorSpace===kn?null:Qt.getPrimaries(y.colorSpace),$t=y.colorSpace===kn||rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let tt=x(y.image,!1,s.maxTextureSize);tt=se(y,tt);const mt=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Pt=_(y.internalFormat,mt,Ct,y.colorSpace,y.isVideoTexture);nt(Y,y);let gt;const Ht=y.mipmaps,Nt=y.isVideoTexture!==!0,ne=yt.__version===void 0||Z===!0,I=$.dataReady,lt=w(y,tt);if(y.isDepthTexture)Pt=M(y.format===Ui,y.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Ct,null));else if(y.isDataTexture)if(Ht.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,Pt,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)gt=Ht[W],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,Ct,gt.data);y.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,lt,Pt,tt.width,tt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Ct,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,Ct,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Pt,Ht[0].width,Ht[0].height,tt.depth);for(let W=0,j=Ht.length;W<j;W++)if(gt=Ht[W],y.format!==sn)if(mt!==null)if(Nt){if(I)if(y.layerUpdates.size>0){const ot=Mc(gt.width,gt.height,y.format,y.type);for(const ht of y.layerUpdates){const Xt=gt.data.subarray(ht*ot/gt.data.BYTES_PER_ELEMENT,(ht+1)*ot/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ht,gt.width,gt.height,1,mt,Xt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,mt,Ct,gt.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,lt,Pt,Ht[0].width,Ht[0].height);for(let W=0,j=Ht.length;W<j;W++)gt=Ht[W],y.format!==sn?mt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(y.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Pt,tt.width,tt.height,tt.depth),I)if(y.layerUpdates.size>0){const W=Mc(tt.width,tt.height,y.format,y.type);for(const j of y.layerUpdates){const ot=tt.data.subarray(j*W/tt.data.BYTES_PER_ELEMENT,(j+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,mt,Ct,ot)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(y.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,lt,Pt,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,mt,Ct,tt.data);else if(y.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,lt,Pt,tt.width,tt.height);else{let W=tt.width,j=tt.height;for(let ot=0;ot<lt;ot++)e.texImage2D(i.TEXTURE_2D,ot,Pt,W,j,0,mt,Ct,null),W>>=1,j>>=1}}else if(Ht.length>0){if(Nt&&ne){const W=It(Ht[0]);e.texStorage2D(i.TEXTURE_2D,lt,Pt,W.width,W.height)}for(let W=0,j=Ht.length;W<j;W++)gt=Ht[W],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,W,Pt,mt,Ct,gt);y.generateMipmaps=!1}else if(Nt){if(ne){const W=It(tt);e.texStorage2D(i.TEXTURE_2D,lt,Pt,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,Ct,tt);f(y)&&m(Y),yt.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function q(T,y,F){if(y.image.length!==6)return;const Y=Lt(T,y),Z=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const $=n.get(Z);if(Z.version!==$.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const yt=Qt.getPrimaries(Qt.workingColorSpace),rt=y.colorSpace===kn?null:Qt.getPrimaries(y.colorSpace),pt=y.colorSpace===kn||yt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!$t&&!tt?mt[j]=x(y.image[j],!0,s.maxCubemapSize):mt[j]=tt?y.image[j].image:y.image[j],mt[j]=se(y,mt[j]);const Ct=mt[0],Pt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),Ht=_(y.internalFormat,Pt,gt,y.colorSpace),Nt=y.isVideoTexture!==!0,ne=$.__version===void 0||Y===!0,I=Z.dataReady;let lt=w(y,Ct);nt(i.TEXTURE_CUBE_MAP,y);let W;if($t){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ht,Ct.width,Ct.height);for(let j=0;j<6;j++){W=mt[j].mipmaps;for(let ot=0;ot<W.length;ot++){const ht=W[ot];y.format!==sn?Pt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,ht.width,ht.height,Pt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Ht,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,0,0,ht.width,ht.height,Pt,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot,Ht,ht.width,ht.height,0,Pt,gt,ht.data)}}}else{if(W=y.mipmaps,Nt&&ne){W.length>0&&lt++;const j=It(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Pt,gt,mt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,mt[j].width,mt[j].height,0,Pt,gt,mt[j].data);for(let ot=0;ot<W.length;ot++){const Xt=W[ot].image[j].image;Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Xt.width,Xt.height,Pt,gt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Ht,Xt.width,Xt.height,0,Pt,gt,Xt.data)}}else{Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,gt,mt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Pt,gt,mt[j]);for(let ot=0;ot<W.length;ot++){const ht=W[ot];Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,0,0,Pt,gt,ht.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot+1,Ht,Pt,gt,ht.image[j])}}}f(y)&&m(i.TEXTURE_CUBE_MAP),$.__version=Z.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Q(T,y,F,Y,Z,$){const yt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),pt=_(F.internalFormat,yt,rt,F.colorSpace);if(!n.get(y).__hasExternalTextures){const tt=Math.max(1,y.width>>$),mt=Math.max(1,y.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,pt,tt,mt,y.depth,0,yt,rt,null):e.texImage2D(Z,$,pt,tt,mt,0,yt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,0,Vt(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,n.get(F).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const Y=y.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,$=M(y.stencilBuffer,Z),yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Vt(y);qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,$,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const Y=y.textures;for(let Z=0;Z<Y.length;Z++){const $=Y[Z],yt=r.convert($.format,$.colorSpace),rt=r.convert($.type),pt=_($.internalFormat,yt,rt,$.colorSpace),$t=Vt(y);F&&qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,pt,y.width,y.height):qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const Y=n.get(y.depthTexture).__webglTexture,Z=Vt(y);if(y.depthTexture.format===Ti)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(y.depthTexture.format===Ui)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const y=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=Y}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ft(y.__webglFramebuffer,T)}else if(F){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),xt(y.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),xt(y.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(T,y,F){const Y=n.get(T);y!==void 0&&Q(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ut(T)}function Gt(T){const y=T.texture,F=n.get(T),Y=n.get(y);T.addEventListener("dispose",A);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let pt=0;pt<y.mipmaps.length;pt++)F.__webglFramebuffer[rt][pt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<y.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let rt=0,pt=Z.length;rt<pt;rt++){const $t=n.get(Z[rt]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&qt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const pt=Z[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const $t=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=_(pt.internalFormat,$t,tt,pt.colorSpace,T.isXRRenderTarget===!0),Ct=Vt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y);for(let rt=0;rt<6;rt++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)Q(F.__webglFramebuffer[rt][pt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,pt);else Q(F.__webglFramebuffer[rt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let rt=0,pt=Z.length;rt<pt;rt++){const $t=Z[rt],tt=n.get($t);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),nt(i.TEXTURE_2D,$t),Q(F.__webglFramebuffer,T,$t,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),f($t)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),nt(rt,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)Q(F.__webglFramebuffer[pt],T,y,i.COLOR_ATTACHMENT0,rt,pt);else Q(F.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,rt,0);f(y)&&m(rt),e.unbindTexture()}T.depthBuffer&&Ut(T)}function ee(T){const y=T.textures;for(let F=0,Y=y.length;F<Y;F++){const Z=y[F];if(f(Z)){const $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get(Z).__webglTexture;e.bindTexture($,yt),m($),e.unbindTexture()}}}const Wt=[],L=[];function Oe(T){if(T.samples>0){if(qt(T)===!1){const y=T.textures,F=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),rt=y.length>1;if(rt)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,i.NEAREST),c===!0&&(Wt.length=0,L.length=0,Wt.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Wt.push($),L.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const $t=n.get(y[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Vt(T){return Math.min(s.maxSamples,T.samples)}function qt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function se(T,y){const F=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Hn&&F!==kn&&(Qt.getTransfer(F)===ae?(Y!==sn||Z!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function It(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Tt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=qt}function Xm(i,t){function e(n,s=kn){let r;const a=Qt.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===sn)return i.RGBA;if(n===jc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===to)return i.RG_INTEGER;if(n===eo)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===Vs||n===Hs)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===va||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===Ma||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===Ma)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gs)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===ka||n===Ba||n===za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class qm extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Re extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $m={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const f=e.getJointPose(x,n),m=this._getHandJoint(l,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($m)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
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

}`;class jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Ym,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends ki{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const x=new jm,f=e.getContextAttributes();let m=null,_=null;const M=[],w=[],R=new vt;let A=null;const E=new He;E.layers.enable(1),E.viewport=new le;const C=new He;C.layers.enable(2),C.viewport=new le;const V=[E,C],v=new qm;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=M[q];return Q===void 0&&(Q=new Gr,M[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=M[q];return Q===void 0&&(Q=new Gr,M[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=M[q];return Q===void 0&&(Q=new Gr,M[q]=Q),Q.getHandSpace()};function k(q){const Q=w.indexOf(q.inputSource);if(Q===-1)return;const xt=M[Q];xt!==void 0&&(xt.update(q.inputSource,q.frame,l||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let q=0;q<M.length;q++){const Q=w[q];Q!==null&&(w[q]=null,M[q].disconnect(Q))}S=null,N=null,x.reset(),t.setRenderTarget(m),p=null,u=null,d=null,s=null,_=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new si(p.framebufferWidth,p.framebufferHeight,{format:sn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,xt=null,ft=null;f.depth&&(ft=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?Ui:Ti,xt=f.stencil?Di:ii);const Ut={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new si(u.textureWidth,u.textureHeight,{format:sn,type:An,depthTexture:new gl(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let Q=0;Q<q.removed.length;Q++){const xt=q.removed[Q],ft=w.indexOf(xt);ft>=0&&(w[ft]=null,M[ft].disconnect(xt))}for(let Q=0;Q<q.added.length;Q++){const xt=q.added[Q];let ft=w.indexOf(xt);if(ft===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=w.length){w.push(xt),ft=Tt;break}else if(w[Tt]===null){w[Tt]=xt,ft=Tt;break}if(ft===-1)break}const Ut=M[ft];Ut&&Ut.connect(xt)}}const H=new P,J=new P;function G(q,Q,xt){H.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const ft=H.distanceTo(J),Ut=Q.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Gt=Ut[14]/(Ut[10]-1),ee=Ut[14]/(Ut[10]+1),Wt=(Ut[9]+1)/Ut[5],L=(Ut[9]-1)/Ut[5],Oe=(Ut[8]-1)/Ut[0],Vt=(Tt[8]+1)/Tt[0],qt=Gt*Oe,Rt=Gt*Vt,se=ft/(-Oe+Vt),It=se*-Oe;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(It),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ut[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=Gt+se,y=ee+se,F=qt-It,Y=Rt+(ft-It),Z=Wt*ee/y*T,$=L*ee/y*T;q.projectionMatrix.makePerspective(F,Y,Z,$,T,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,xt=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),v.near=C.near=E.near=Q,v.far=C.far=E.far=xt,(S!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);const ft=q.parent,Ut=v.cameras;at(v,ft);for(let Tt=0;Tt<Ut.length;Tt++)at(Ut[Tt],ft);Ut.length===2?G(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),ut(q,v,ft)};function ut(q,Q,xt){xt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Va*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let nt=null;function Lt(q,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ft=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Tt=0;Tt<xt.length;Tt++){const Gt=xt[Tt];let ee=null;if(p!==null)ee=p.getViewport(Gt);else{const L=d.getViewSubImage(u,Gt);ee=L.viewport,Tt===0&&(t.setRenderTargetTextures(_,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(_))}let Wt=V[Tt];Wt===void 0&&(Wt=new He,Wt.layers.enable(Tt),Wt.viewport=new le,V[Tt]=Wt),Wt.matrix.fromArray(Gt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Gt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ee.x,ee.y,ee.width,ee.height),Tt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Wt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Tt=d.getDepthInformation(xt[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,s.renderState)}}for(let xt=0;xt<M.length;xt++){const ft=w[xt],Ut=M[xt];ft!==null&&Ut!==void 0&&Ut.update(ft,Q,l||a)}nt&&nt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const zt=new pl;zt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}const Kn=new fn,Zm=new oe;function Qm(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,dl(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,_,M,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&p(f,m,w)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,_,M):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Ie&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Ie&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=t.get(m),M=_.envMap,w=_.envMapRotation;M&&(f.envMap.value=M,Kn.copy(w),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),f.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Kn)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,_,M){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=M*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){const _=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){const w=M.program;n.uniformBlockBinding(_,w)}function l(_,M){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",f));const R=M.program;n.updateUBOMapping(_,R);const A=t.render.frame;r[_.id]!==A&&(u(_),r[_.id]=A)}function h(_){const M=d();_.__bindingPointIndex=M;const w=i.createBuffer(),R=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=s[_.id],w=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,E=w.length;A<E;A++){const C=Array.isArray(w[A])?w[A]:[w[A]];for(let V=0,v=C.length;V<v;V++){const S=C[V];if(p(S,A,V,R)===!0){const N=S.__offset,k=Array.isArray(S.value)?S.value:[S.value];let X=0;for(let K=0;K<k.length;K++){const H=k[K],J=x(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+X,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,w,R){const A=_.value,E=M+"_"+w;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const C=R[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(_){const M=_.uniforms;let w=0;const R=16;for(let E=0,C=M.length;E<C;E++){const V=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,S=V.length;v<S;v++){const N=V[v],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,K=k.length;X<K;X++){const H=k[X],J=x(H),G=w%R,at=G%J.boundary,ut=G+at;w+=at,ut!==0&&R-ut<J.storage&&(w+=R-ut),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=J.storage}}}const A=w%R;return A>0&&(w+=R-A),_.__size=w,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function f(_){const M=_.target;M.removeEventListener("dispose",f);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}class eg{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Vn,this.toneMappingExposure=1;const M=this;let w=!1,R=0,A=0,E=null,C=-1,V=null;const v=new le,S=new le;let N=null;const k=new Bt(0);let X=0,K=e.width,H=e.height,J=1,G=null,at=null;const ut=new le(0,0,K,H),nt=new le(0,0,K,H);let Lt=!1;const zt=new io;let q=!1,Q=!1;const xt=new oe,ft=new oe,Ut=new P,Tt=new le,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Wt(){return E===null?J:1}let L=n;function Oe(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",ht,!1),L===null){const D="webgl2";if(L=Oe(D,b),L===null)throw Oe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Vt,qt,Rt,se,It,T,y,F,Y,Z,$,yt,rt,pt,$t,tt,mt,Ct,Pt,gt,Ht,Nt,ne,I;function lt(){Vt=new ap(L),Vt.init(),Nt=new Xm(L,Vt),qt=new tp(L,Vt,t,Nt),Rt=new Hm(L),qt.reverseDepthBuffer&&Rt.buffers.depth.setReversed(!0),se=new lp(L),It=new Am,T=new Wm(L,Vt,Rt,It,qt,Nt,se),y=new np(M),F=new rp(M),Y=new md(L),ne=new Zf(L,Y),Z=new op(L,Y,se,ne),$=new dp(L,Z,Y,se),Pt=new hp(L,qt,T),tt=new ep(It),yt=new Tm(M,y,F,Vt,qt,ne,tt),rt=new Qm(M,It),pt=new Cm,$t=new Nm(Vt),Ct=new Jf(M,y,F,Rt,$,u,c),mt=new zm(M,$,qt),I=new tg(L,se,qt,Rt),gt=new Qf(L,Vt,se),Ht=new cp(L,Vt,se),se.programs=yt.programs,M.capabilities=qt,M.extensions=Vt,M.properties=It,M.renderLists=pt,M.shadowMap=mt,M.state=Rt,M.info=se}lt();const W=new Jm(M,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,D,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=D,e.width=Math.floor(b*J),e.height=Math.floor(D*J),B===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(K*J,H*J).floor()},this.setDrawingBufferSize=function(b,D,B){K=b,H=D,J=B,e.width=Math.floor(b*B),e.height=Math.floor(D*B),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(ut)},this.setViewport=function(b,D,B,z){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,D,B,z),Rt.viewport(v.copy(ut).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,D,B,z){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,D,B,z),Rt.scissor(S.copy(nt).multiplyScalar(J).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(b){Rt.setScissorTest(Lt=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(b=!0,D=!0,B=!0){let z=0;if(b){let U=!1;if(E!==null){const et=E.texture.format;U=et===eo||et===to||et===Qa}if(U){const et=E.texture.type,ct=et===An||et===ii||et===es||et===Di||et===Ja||et===Za,_t=Ct.getClearColor(),Mt=Ct.getClearAlpha(),wt=_t.r,At=_t.g,St=_t.b;ct?(p[0]=wt,p[1]=At,p[2]=St,p[3]=Mt,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=wt,g[1]=At,g[2]=St,g[3]=Mt,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),$t.dispose(),It.dispose(),y.dispose(),F.dispose(),$.dispose(),ne.dispose(),I.dispose(),yt.dispose(),W.dispose(),W.removeEventListener("sessionstart",xo),W.removeEventListener("sessionend",Mo),Gn.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=se.autoReset,D=mt.enabled,B=mt.autoUpdate,z=mt.needsUpdate,U=mt.type;lt(),se.autoReset=b,mt.enabled=D,mt.autoUpdate=B,mt.needsUpdate=z,mt.type=U}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const D=b.target;D.removeEventListener("dispose",Xt),ue(D)}function ue(b){De(b),It.remove(b)}function De(b){const D=It.get(b).programs;D!==void 0&&(D.forEach(function(B){yt.releaseProgram(B)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,B,z,U,et){D===null&&(D=Gt);const ct=U.isMesh&&U.matrixWorld.determinant()<0,_t=Yl(b,D,B,z,U);Rt.setMaterial(z,ct);let Mt=B.index,wt=1;if(z.wireframe===!0){if(Mt=Z.getWireframeAttribute(B),Mt===void 0)return;wt=2}const At=B.drawRange,St=B.attributes.position;let te=At.start*wt,re=(At.start+At.count)*wt;et!==null&&(te=Math.max(te,et.start*wt),re=Math.min(re,(et.start+et.count)*wt)),Mt!==null?(te=Math.max(te,0),re=Math.min(re,Mt.count)):St!=null&&(te=Math.max(te,0),re=Math.min(re,St.count));const ce=re-te;if(ce<0||ce===1/0)return;ne.setup(U,z,_t,B,Mt);let ke,Jt=gt;if(Mt!==null&&(ke=Y.get(Mt),Jt=Ht,Jt.setIndex(ke)),U.isMesh)z.wireframe===!0?(Rt.setLineWidth(z.wireframeLinewidth*Wt()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(U.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*Wt()),U.isLineSegments?Jt.setMode(L.LINES):U.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else U.isPoints?Jt.setMode(L.POINTS):U.isSprite&&Jt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Se=U._multiDrawCounts,Zt=U._multiDrawCount,Ke=Mt?Y.get(Mt).bytesPerElement:1,oi=It.get(z).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)oi.setValue(L,"_gl_DrawID",Be),Jt.render(bt[Be]/Ke,Se[Be])}else if(U.isInstancedMesh)Jt.renderInstances(te,ce,U.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Se=Math.min(B.instanceCount,bt);Jt.renderInstances(te,ce,Se)}else Jt.render(te,ce)};function Kt(b,D,B){b.transparent===!0&&b.side===hn&&b.forceSinglePass===!1?(b.side=Ie,b.needsUpdate=!0,us(b,D,B),b.side=Tn,b.needsUpdate=!0,us(b,D,B),b.side=hn):us(b,D,B)}this.compile=function(b,D,B=null){B===null&&(B=b),f=$t.get(B),f.init(D),_.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const _t=et[ct];Kt(_t,B,U),z.add(_t)}else Kt(et,B,U),z.add(et)}),_.pop(),f=null,z},this.compileAsync=function(b,D,B=null){const z=this.compile(b,D,B);return new Promise(U=>{function et(){if(z.forEach(function(ct){It.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){U(b);return}setTimeout(et,10)}Vt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ue=null;function mn(b){Ue&&Ue(b)}function xo(){Gn.stop()}function Mo(){Gn.start()}const Gn=new pl;Gn.setAnimationLoop(mn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(b){Ue=b,W.setAnimationLoop(b),b===null?Gn.stop():Gn.start()},W.addEventListener("sessionstart",xo),W.addEventListener("sessionend",Mo),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,D,E),f=$t.get(b,_.length),f.init(D),_.push(f),ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),zt.setFromProjectionMatrix(ft),Q=this.localClippingEnabled,q=tt.init(this.clippingPlanes,Q),x=pt.get(b,m.length),x.init(),m.push(x),W.enabled===!0&&W.isPresenting===!0){const et=M.xr.getDepthSensingMesh();et!==null&&lr(et,D,-1/0,M.sortObjects)}lr(b,D,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(G,at),ee=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ee&&Ct.addToRenderList(x,b),this.info.render.frame++,q===!0&&tt.beginShadows();const B=f.state.shadowsArray;mt.render(B,b,D),q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let ct=0,_t=et.length;ct<_t;ct++){const Mt=et[ct];So(z,U,b,Mt)}ee&&Ct.render(b);for(let ct=0,_t=et.length;ct<_t;ct++){const Mt=et[ct];yo(x,b,Mt,Mt.viewport)}}else U.length>0&&So(z,U,b,D),ee&&Ct.render(b),yo(x,b,D);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(M,b,D),ne.resetDefaultState(),C=-1,V=null,_.pop(),_.length>0?(f=_[_.length-1],q===!0&&tt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function lr(b,D,B,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||zt.intersectsSprite(b)){z&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);const ct=$.update(b),_t=b.material;_t.visible&&x.push(b,ct,_t,B,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||zt.intersectsObject(b))){const ct=$.update(b),_t=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(_t)){const Mt=ct.groups;for(let wt=0,At=Mt.length;wt<At;wt++){const St=Mt[wt],te=_t[St.materialIndex];te&&te.visible&&x.push(b,ct,te,B,Tt.z,St)}}else _t.visible&&x.push(b,ct,_t,B,Tt.z,null)}}const et=b.children;for(let ct=0,_t=et.length;ct<_t;ct++)lr(et[ct],D,B,z)}function yo(b,D,B,z){const U=b.opaque,et=b.transmissive,ct=b.transparent;f.setupLightsView(B),q===!0&&tt.setGlobalState(M.clippingPlanes,B),z&&Rt.viewport(v.copy(z)),U.length>0&&ds(U,D,B),et.length>0&&ds(et,D,B),ct.length>0&&ds(ct,D,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function So(b,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new si(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?rs:An,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=f.state.transmissionRenderTarget[z.id],ct=z.viewport||v;et.setSize(ct.z,ct.w);const _t=M.getRenderTarget();M.setRenderTarget(et),M.getClearColor(k),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),ee&&Ct.render(B);const Mt=M.toneMapping;M.toneMapping=Vn;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),q===!0&&tt.setGlobalState(M.clippingPlanes,z),ds(b,B,z),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let St=0,te=D.length;St<te;St++){const re=D[St],ce=re.object,ke=re.geometry,Jt=re.material,bt=re.group;if(Jt.side===hn&&ce.layers.test(z.layers)){const Se=Jt.side;Jt.side=Ie,Jt.needsUpdate=!0,bo(ce,B,z,ke,Jt,bt),Jt.side=Se,Jt.needsUpdate=!0,At=!0}}At===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}M.setRenderTarget(_t),M.setClearColor(k,X),wt!==void 0&&(z.viewport=wt),M.toneMapping=Mt}function ds(b,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=b.length;U<et;U++){const ct=b[U],_t=ct.object,Mt=ct.geometry,wt=z===null?ct.material:z,At=ct.group;_t.layers.test(B.layers)&&bo(_t,D,B,Mt,wt,At)}}function bo(b,D,B,z,U,et){b.onBeforeRender(M,D,B,z,U,et),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(M,D,B,z,b,et),U.transparent===!0&&U.side===hn&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,M.renderBufferDirect(B,D,z,U,b,et),U.side=Tn,U.needsUpdate=!0,M.renderBufferDirect(B,D,z,U,b,et),U.side=hn):M.renderBufferDirect(B,D,z,U,b,et),b.onAfterRender(M,D,B,z,U,et)}function us(b,D,B){D.isScene!==!0&&(D=Gt);const z=It.get(b),U=f.state.lights,et=f.state.shadowsArray,ct=U.state.version,_t=yt.getParameters(b,U.state,et,D,B),Mt=yt.getProgramCacheKey(_t);let wt=z.programs;z.environment=b.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(b.isMeshStandardMaterial?F:y).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,wt===void 0&&(b.addEventListener("dispose",Xt),wt=new Map,z.programs=wt);let At=wt.get(Mt);if(At!==void 0){if(z.currentProgram===At&&z.lightsStateVersion===ct)return Eo(b,_t),At}else _t.uniforms=yt.getUniforms(b),b.onBeforeCompile(_t,M),At=yt.acquireProgram(_t,Mt),wt.set(Mt,At),z.uniforms=_t.uniforms;const St=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=tt.uniform),Eo(b,_t),z.needsLights=jl(b),z.lightsStateVersion=ct,z.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=At,z.uniformsList=null,At}function wo(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=Xs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Eo(b,D){const B=It.get(b);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Yl(b,D,B,z,U){D.isScene!==!0&&(D=Gt),T.resetTextureUnits();const et=D.fog,ct=z.isMeshStandardMaterial?D.environment:null,_t=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Hn,Mt=(z.isMeshStandardMaterial?F:y).get(z.envMap||ct),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,At=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,te=!!B.morphAttributes.normal,re=!!B.morphAttributes.color;let ce=Vn;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ce=M.toneMapping);const ke=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Jt=ke!==void 0?ke.length:0,bt=It.get(z),Se=f.state.lights;if(q===!0&&(Q===!0||b!==V)){const We=b===V&&z.id===C;tt.setState(z,b,We)}let Zt=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Se.state.version||bt.outputColorSpace!==_t||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==Mt||z.fog===!0&&bt.fog!==et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==wt||bt.vertexTangents!==At||bt.morphTargets!==St||bt.morphNormals!==te||bt.morphColors!==re||bt.toneMapping!==ce||bt.morphTargetsCount!==Jt)&&(Zt=!0):(Zt=!0,bt.__version=z.version);let Ke=bt.currentProgram;Zt===!0&&(Ke=us(z,D,U));let oi=!1,Be=!1,hr=!1;const he=Ke.getUniforms(),Cn=bt.uniforms;if(Rt.useProgram(Ke.program)&&(oi=!0,Be=!0,hr=!0),z.id!==C&&(C=z.id,Be=!0),oi||V!==b){qt.reverseDepthBuffer?(xt.copy(b.projectionMatrix),Gh(xt),Wh(xt),he.setValue(L,"projectionMatrix",xt)):he.setValue(L,"projectionMatrix",b.projectionMatrix),he.setValue(L,"viewMatrix",b.matrixWorldInverse);const We=he.map.cameraPosition;We!==void 0&&We.setValue(L,Ut.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,Be=!0,hr=!0)}if(U.isSkinnedMesh){he.setOptional(L,U,"bindMatrix"),he.setOptional(L,U,"bindMatrixInverse");const We=U.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),he.setValue(L,"boneTexture",We.boneTexture,T))}U.isBatchedMesh&&(he.setOptional(L,U,"batchingTexture"),he.setValue(L,"batchingTexture",U._matricesTexture,T),he.setOptional(L,U,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",U._indirectTexture,T),he.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",U._colorsTexture,T));const dr=B.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Pt.update(U,B,Ke),(Be||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,he.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=Mt,Cn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Cn.envMapIntensity.value=D.environmentIntensity),Be&&(he.setValue(L,"toneMappingExposure",M.toneMappingExposure),bt.needsLights&&Kl(Cn,hr),et&&z.fog===!0&&rt.refreshFogUniforms(Cn,et),rt.refreshMaterialUniforms(Cn,z,J,H,f.state.transmissionRenderTarget[b.id]),Xs.upload(L,wo(bt),Cn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xs.upload(L,wo(bt),Cn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(L,"center",U.center),he.setValue(L,"modelViewMatrix",U.modelViewMatrix),he.setValue(L,"normalMatrix",U.normalMatrix),he.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const We=z.uniformsGroups;for(let ur=0,Jl=We.length;ur<Jl;ur++){const To=We[ur];I.update(To,Ke),I.bind(To,Ke)}}return Ke}function Kl(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function jl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,D,B){It.get(b.texture).__webglTexture=D,It.get(b.depthTexture).__webglTexture=B;const z=It.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const B=It.get(b);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,B=0){E=b,R=D,A=B;let z=!0,U=null,et=!1,ct=!1;if(b){const Mt=It.get(b);if(Mt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(Mt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Mt.__hasExternalTextures)T.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const St=b.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);const At=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[D])?U=At[D][B]:U=At[D],et=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?U=It.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?U=At[B]:U=At,v.copy(b.viewport),S.copy(b.scissor),N=b.scissorTest}else v.copy(ut).multiplyScalar(J).floor(),S.copy(nt).multiplyScalar(J).floor(),N=Lt;if(Rt.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Rt.drawBuffers(b,U),Rt.viewport(v),Rt.scissor(S),Rt.setScissorTest(N),et){const Mt=It.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,B)}else if(ct){const Mt=It.get(b.texture),wt=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,B||0,wt)}C=-1},this.readRenderTargetPixels=function(b,D,B,z,U,et,ct){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){Rt.bindFramebuffer(L.FRAMEBUFFER,_t);try{const Mt=b.texture,wt=Mt.format,At=Mt.type;if(!qt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&B>=0&&B<=b.height-U&&L.readPixels(D,B,z,U,Nt.convert(wt),Nt.convert(At),et)}finally{const Mt=E!==null?It.get(E).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(b,D,B,z,U,et,ct){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const Mt=b.texture,wt=Mt.format,At=Mt.type;if(!qt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-z&&B>=0&&B<=b.height-U){Rt.bindFramebuffer(L.FRAMEBUFFER,_t);const St=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),L.readPixels(D,B,z,U,Nt.convert(wt),Nt.convert(At),0);const te=E!==null?It.get(E).__webglFramebuffer:null;Rt.bindFramebuffer(L.FRAMEBUFFER,te);const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hh(L,re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et),L.deleteBuffer(St),L.deleteSync(re),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,B=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(b.image.width*z),et=Math.floor(b.image.height*z),ct=D!==null?D.x:0,_t=D!==null?D.y:0;T.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,ct,_t,U,et),Rt.unbindTexture()},this.copyTextureToTexture=function(b,D,B=null,z=null,U=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let et,ct,_t,Mt,wt,At;B!==null?(et=B.max.x-B.min.x,ct=B.max.y-B.min.y,_t=B.min.x,Mt=B.min.y):(et=b.image.width,ct=b.image.height,_t=0,Mt=0),z!==null?(wt=z.x,At=z.y):(wt=0,At=0);const St=Nt.convert(D.format),te=Nt.convert(D.type);T.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),ce=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ke=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),bt=L.getParameter(L.UNPACK_SKIP_IMAGES),Se=b.isCompressedTexture?b.mipmaps[U]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_t),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,wt,At,et,ct,St,te,Se.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,wt,At,Se.width,Se.height,St,Se.data):L.texSubImage2D(L.TEXTURE_2D,U,wt,At,et,ct,St,te,Se),L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,B=null,z=null,U=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0);let et,ct,_t,Mt,wt,At,St,te,re;const ce=b.isCompressedTexture?b.mipmaps[U]:b.image;B!==null?(et=B.max.x-B.min.x,ct=B.max.y-B.min.y,_t=B.max.z-B.min.z,Mt=B.min.x,wt=B.min.y,At=B.min.z):(et=ce.width,ct=ce.height,_t=ce.depth,Mt=0,wt=0,At=0),z!==null?(St=z.x,te=z.y,re=z.z):(St=0,te=0,re=0);const ke=Nt.convert(D.format),Jt=Nt.convert(D.type);let bt;if(D.isData3DTexture)T.setTexture3D(D,0),bt=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Se=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ke=L.getParameter(L.UNPACK_SKIP_PIXELS),oi=L.getParameter(L.UNPACK_SKIP_ROWS),Be=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(bt,U,St,te,re,et,ct,_t,ke,Jt,ce.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,U,St,te,re,et,ct,_t,ke,ce.data):L.texSubImage3D(bt,U,St,te,re,et,ct,_t,ke,Jt,ce),L.pixelStorei(L.UNPACK_ROW_LENGTH,Se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,oi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),U===0&&D.generateMipmaps&&L.generateMipmap(bt),Rt.unbindTexture()},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,Rt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===no?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===ir?"display-p3":"srgb"}}class ro{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new ro(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yl extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ar extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yc=new oe,Ga=new al,Us=new sr,Ns=new P;class ao extends ye{constructor(t=new de,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;yc.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,x=p;g<x;g++){const f=l.getX(g);Ns.fromBufferAttribute(d,f),Sc(Ns,f,c,s,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,x=p;g<x;g++)Ns.fromBufferAttribute(d,g),Sc(Ns,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sc(i,t,e,n,s,r,a){const o=Ga.distanceSqToPoint(i);if(o<e){const c=new P;Ga.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Sl extends Ce{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,p=(a-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new vt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new oe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(be(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oo extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ng extends oo{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function co(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Fs=new P,Wr=new co,Xr=new co,qr=new co;class bl extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Fs.subVectors(s[0],s[1]).add(s[0]),l=Fs);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Wr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,f),Xr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,f),qr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,f)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Xr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),qr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Wr.calc(c),Xr.calc(c),qr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ig(i,t){const e=1-i;return e*e*t}function sg(i,t){return 2*(1-i)*i*t}function rg(i,t){return i*i*t}function Qi(i,t,e,n){return ig(i,t)+sg(i,e)+rg(i,n)}function ag(i,t){const e=1-i;return e*e*e*t}function og(i,t){const e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function lg(i,t){return i*i*i*t}function ts(i,t,e,n,s){return ag(i,t)+og(i,e)+cg(i,n)+lg(i,s)}class wl extends pn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hg extends pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ts(t,s.x,r.x,a.x,o.x),ts(t,s.y,r.y,a.y,o.y),ts(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class El extends pn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dg extends pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tl extends pn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qi(t,s.x,r.x,a.x),Qi(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ug extends pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qi(t,s.x,r.x,a.x),Qi(t,s.y,r.y,a.y),Qi(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Al extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(bc(o,c.x,l.x,h.x,d.x),bc(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var wc=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:bl,CubicBezierCurve:wl,CubicBezierCurve3:hg,EllipseCurve:oo,LineCurve:El,LineCurve3:dg,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:ug,SplineCurve:Al});class fg extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wc[s.type]().fromJSON(s))}return this}}class pg extends fg{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new El(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tl(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new wl(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new oo(t,e,n,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lo extends de{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new P,u=new vt,p=new P,g=new P,x=new P;let f=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:f=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-f,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:f=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let _=0;_<=e;_++){const M=n+_*h*s,w=Math.sin(M),R=Math.cos(M);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*w,d.y=t[A].y,d.z=t[A].x*R,a.push(d.x,d.y,d.z),u.x=_/e,u.y=A/(t.length-1),o.push(u.x,u.y);const E=c[3*A+0]*w,C=c[3*A+1],V=c[3*A+0]*R;l.push(E,C,V)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){const w=M+_*t.length,R=w,A=w+t.length,E=w+t.length+1,C=w+1;r.push(R,A,C),r.push(E,C,A)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.points,t.segments,t.phiStart,t.phiLength)}}class ho extends lo{constructor(t=1,e=1,n=4,s=8){const r=new pg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ho(t.radius,t.length,t.capSegments,t.radialSegments)}}class is extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends de{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const x=[],f=n/2;let m=0;_(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(p,2));function _(){const w=new P,R=new P;let A=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const V=[],v=C/r,S=v*(e-t)+t;for(let N=0;N<=s;N++){const k=N/s,X=k*c+o,K=Math.sin(X),H=Math.cos(X);R.x=S*K,R.y=-v*n+f,R.z=S*H,d.push(R.x,R.y,R.z),w.set(K,E,H).normalize(),u.push(w.x,w.y,w.z),p.push(k,1-v),V.push(g++)}x.push(V)}for(let C=0;C<s;C++)for(let V=0;V<r;V++){const v=x[V][C],S=x[V+1][C],N=x[V+1][C+1],k=x[V][C+1];t>0&&(h.push(v,S,k),A+=3),e>0&&(h.push(S,N,k),A+=3)}l.addGroup(m,A,0),m+=A}function M(w){const R=g,A=new vt,E=new P;let C=0;const V=w===!0?t:e,v=w===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,f*v,0),u.push(0,v,0),p.push(.5,.5),g++;const S=g;for(let N=0;N<=s;N++){const X=N/s*c+o,K=Math.cos(X),H=Math.sin(X);E.x=V*H,E.y=f*v,E.z=V*K,d.push(E.x,E.y,E.z),u.push(0,v,0),A.x=K*.5+.5,A.y=H*.5*v+.5,p.push(A.x,A.y),g++}for(let N=0;N<s;N++){const k=R+N,X=S+N;w===!0?h.push(X,X+1,k):h.push(X+1,X,k),C+=3}l.addGroup(m,C,w===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends _e{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ls extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new P,w=new P,R=new P;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],w),p(e[A+2],R),c(M,w,R,_)}function c(_,M,w,R){const A=R+1,E=[];for(let C=0;C<=A;C++){E[C]=[];const V=_.clone().lerp(w,C/A),v=M.clone().lerp(w,C/A),S=A-C;for(let N=0;N<=S;N++)N===0&&C===A?E[C][N]=V:E[C][N]=V.clone().lerp(v,N/S)}for(let C=0;C<A;C++)for(let V=0;V<2*(A-C)-1;V++){const v=Math.floor(V/2);V%2===0?(u(E[C][v+1]),u(E[C+1][v]),u(E[C][v])):(u(E[C][v+1]),u(E[C+1][v+1]),u(E[C+1][v]))}}function l(_){const M=new P;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(_),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function h(){const _=new P;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];const w=f(_)/2/Math.PI+.5,R=m(_)/Math.PI+.5;a.push(w,1-R)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const M=a[_+0],w=a[_+2],R=a[_+4],A=Math.max(M,w,R),E=Math.min(M,w,R);A>.9&&E<.1&&(M<.2&&(a[_+0]+=1),w<.2&&(a[_+2]+=1),R<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function p(_,M){const w=_*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function g(){const _=new P,M=new P,w=new P,R=new P,A=new vt,E=new vt,C=new vt;for(let V=0,v=0;V<r.length;V+=9,v+=6){_.set(r[V+0],r[V+1],r[V+2]),M.set(r[V+3],r[V+4],r[V+5]),w.set(r[V+6],r[V+7],r[V+8]),A.set(a[v+0],a[v+1]),E.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),R.copy(_).add(M).add(w).divideScalar(3);const S=f(R);x(A,v+0,_,S),x(E,v+2,M,S),x(C,v+4,w,S)}}function x(_,M,w,R){R<0&&_.x===1&&(a[M]=_.x-1),w.x===0&&w.z===0&&(a[M]=R/2/Math.PI+.5)}function f(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.vertices,t.indices,t.radius,t.details)}}class uo extends ls{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uo(t.radius,t.detail)}}class Zs extends ls{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zs(t.radius,t.detail)}}class xe extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new P,u=new P,p=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){const _=[],M=m/n;let w=0;m===0&&a===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+M*o),d.y=t*Math.cos(a+M*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),f.push(A+w,1-M),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const M=h[m][_+1],w=h[m][_],R=h[m+1][_],A=h[m+1][_+1];(m!==0||a>0)&&p.push(M,w,A),(m!==n-1||c<Math.PI)&&p.push(w,R,A)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fo extends ls{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fo(t.radius,t.detail)}}class hs extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new P,d=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,f=p/n*Math.PI*2;d.x=(t+e*Math.cos(f))*Math.cos(x),d.y=(t+e*Math.cos(f))*Math.sin(x),d.z=e*Math.sin(f),o.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(x,f,_),a.push(f,m,_)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class po extends de{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],c=[],l=[],h=[],d=new P,u=new P,p=new P,g=new P,x=new P,f=new P,m=new P;for(let M=0;M<=n;++M){const w=M/n*r*Math.PI*2;_(w,r,a,t,p),_(w+.01,r,a,t,g),f.subVectors(g,p),m.addVectors(g,p),x.crossVectors(f,m),m.crossVectors(x,f),x.normalize(),m.normalize();for(let R=0;R<=s;++R){const A=R/s*Math.PI*2,E=-e*Math.cos(A),C=e*Math.sin(A);d.x=p.x+(E*m.x+C*x.x),d.y=p.y+(E*m.y+C*x.y),d.z=p.z+(E*m.z+C*x.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(M/n),h.push(R/s)}}for(let M=1;M<=n;M++)for(let w=1;w<=s;w++){const R=(s+1)*(M-1)+(w-1),A=(s+1)*M+(w-1),E=(s+1)*M+w,C=(s+1)*(M-1)+w;o.push(R,A,C),o.push(A,E,C)}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2));function _(M,w,R,A,E){const C=Math.cos(M),V=Math.sin(M),v=R/w*M,S=Math.cos(v);E.x=A*(2+S)*.5*C,E.y=A*(2+S)*V*.5,E.z=A*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ft extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ec={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mg{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const gg=new mg;class mo{constructor(t){this.manager=t!==void 0?t:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mo.DEFAULT_MATERIAL_NAME="__DEFAULT";class vg extends mo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ec.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ns("img");function c(){h(),Ec.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class _g extends mo{constructor(t){super(t)}load(t,e,n,s){const r=new Ce,a=new vg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Rl extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cl extends Rl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new oe,Tc=new P,Ac=new P;class xg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mg extends xg{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wa extends Rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const yg=()=>({quality:Sg(),shadows:!0,particles:!0,motionBlur:!1,reflections:!0,screenShake:!0,steerAssist:!0,autoAccel:!1,reducedFlashing:!1,musicVol:.75,sfxVol:.85,controlMode:"buttons",tuned:!0});function Sg(){const i=navigator.deviceMemory??4,t=navigator.hardwareConcurrency??4,e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);return e&&i<=3?"low":e?"medium":i>=8&&t>=8?"ultra":i>=6?"high":"medium"}function Pl(i){switch(i){case"low":return{pixelRatio:1,shadowMap:0,decorDensity:.35,drawDistance:900,particleScale:.4,antialias:!1};case"medium":return{pixelRatio:1.2,shadowMap:1024,decorDensity:.6,drawDistance:1300,particleScale:.7,antialias:!0};case"high":return{pixelRatio:1.5,shadowMap:2048,decorDensity:.85,drawDistance:1800,particleScale:1,antialias:!0};case"ultra":return{pixelRatio:Math.min(2,window.devicePixelRatio||1),shadowMap:4096,decorDensity:1.1,drawDistance:2400,particleScale:1.3,antialias:!0}}}const Ll="amal-turbo-save-v2";function qs(){return{v:2,coins:0,xp:0,selectedRacer:"leo",kit:{vehicleId:"sport",paint:-1,trail:0,wheels:0},presets:[],unlockedRacers:["leo","kiki","finn","zara","bruno","pip","ruby","dash","luna","rocky","nova"],unlockedVehicles:["sport","hover","rocket","monster","aqua","candy","truck","ice","cruiser","insect","shell","cloud","dragon","lunar","neon"],championshipsWon:[],bestTimes:{},bestLaps:{},medals:{},ghosts:{},challenges:{day:"",done:[],progress:{}},settings:yg(),seenIntro:!1,tutorialDone:!1}}function bg(){try{const i=localStorage.getItem(Ll);if(!i)return qs();const t=JSON.parse(i),e=qs(),n={...e.settings,...t.settings??{}};return n.tuned||(n.steerAssist=!0,n.musicVol=Math.max(n.musicVol,.7),n.tuned=!0),{...e,...t,kit:{...e.kit,...t.kit??{}},settings:n,challenges:{...e.challenges,...t.challenges??{}},bestTimes:t.bestTimes??{},bestLaps:t.bestLaps??{},medals:t.medals??{},ghosts:t.ghosts??{},unlockedRacers:t.unlockedRacers??e.unlockedRacers,unlockedVehicles:t.unlockedVehicles??e.unlockedVehicles}}catch{return qs()}}let Ri=null;function wg(){return Ri||(Ri=bg()),Ri}function rn(){if(Ri)try{localStorage.setItem(Ll,JSON.stringify(Ri))}catch{}}function Eg(){Ri=qs(),rn()}const ri=[{id:"leo",name:"Leo Blaze",animal:"Lion",emoji:"🦁",color:16742959,accent:16765503,personality:"Confident, brave and competitive.",vehicle:"Flame-powered sports kart",passive:"overtake-boost",passiveText:"Longer boost after overtaking a rival.",bio:"The reigning showman of the circuit. Leo lives for the roar of the crowd on the final straight.",food:"Spicy jerky",style:"Aggressive front-runner",speed:9,accel:6,handling:6,weight:8,drift:6,boost:8},{id:"kiki",name:"Kiki Spark",animal:"Fennec Fox",emoji:"🦊",color:3530960,accent:16732120,personality:"Clever, energetic and mischievous.",vehicle:"Small neon hover kart",passive:"fast-drift",passiveText:"Charges drift boosts faster.",bio:"A blur of neon and giggles. Kiki treats every corner as a puzzle to be drifted through.",food:"Fizzy berries",style:"Technical drifter",speed:6,accel:9,handling:9,weight:3,drift:9,boost:7},{id:"finn",name:"Finn Wave",animal:"Dolphin",emoji:"🐬",color:3123455,accent:9433343,personality:"Relaxed, adventurous and funny.",vehicle:"Aqua jet kart",passive:"water-speed",passiveText:"Faster through water and underwater sections.",bio:"Never met a puddle he did not want to surf. Finn rules the ocean tracks.",food:"Kelp smoothies",style:"Flowing cruiser",speed:7,accel:8,handling:8,weight:5,drift:7,boost:6},{id:"zara",name:"Zara Stripe",animal:"Tiger",emoji:"🐯",color:16752412,accent:2829634,personality:"Focused, fearless and cool.",vehicle:"Futuristic jungle racer",passive:"offroad-grip",passiveText:"Loses less speed on dirt and grass.",bio:"Silent, precise and always on the racing line. Zara turns the jungle into her hunting ground.",food:"Grilled skewers",style:"Precise all-rounder",speed:9,accel:6,handling:9,weight:5,drift:7,boost:6},{id:"bruno",name:"Bruno Boulder",animal:"Gorilla",emoji:"🦍",color:9267016,accent:5032432,personality:"Strong, loyal and surprisingly gentle.",vehicle:"Heavy off-road kart",passive:"heavy-armor",passiveText:"Barely flinches from collisions and knockback.",bio:"A mountain with a steering wheel. Bruno bulldozes through chaos without blinking.",food:"Banana stacks",style:"Unstoppable bruiser",speed:9,accel:3,handling:4,weight:10,drift:4,boost:6},{id:"pip",name:"Pip Rocket",animal:"Penguin",emoji:"🐧",color:4415982,accent:15858414,personality:"Smart, sarcastic and inventive.",vehicle:"Rocket-powered ice kart",passive:"ice-grip",passiveText:"Superior grip on ice and snow.",bio:"Builds his own rockets and complains the whole way to the podium.",food:"Frozen anchovies",style:"Cool-headed engineer",speed:6,accel:9,handling:8,weight:4,drift:7,boost:8},{id:"ruby",name:"Ruby Bounce",animal:"Kangaroo",emoji:"🦘",color:16735631,accent:16765503,personality:"Sporty, confident and cheerful.",vehicle:"Spring-powered rally kart",passive:"trick-boost",passiveText:"Stronger landing boost after tricks.",bio:"Air is her home. Ruby launches off every ramp like it owes her money.",food:"Trail mix",style:"Aerial daredevil",speed:8,accel:6,handling:6,weight:5,drift:6,boost:7},{id:"dash",name:"Dash Bolt",animal:"Cheetah",emoji:"🐆",color:16766474,accent:16726832,personality:"Extremely competitive and impatient.",vehicle:"Low-profile lightning racer",passive:"clean-run",passiveText:"Speed surge after driving cleanly without crashing.",bio:"The fastest paws alive — if only he could stop hitting the walls.",food:"Energy gels",style:"Pure speed glass cannon",speed:10,accel:6,handling:6,weight:3,drift:5,boost:7},{id:"luna",name:"Luna Glide",animal:"Snow Owl",emoji:"🦉",color:13481215,accent:15858414,personality:"Calm, mysterious and observant.",vehicle:"Winged moon glider",passive:"air-control",passiveText:"Superb air control on jumps and glides.",bio:"Sees the whole track from above and always seems to know the shortcut.",food:"Moonberries",style:"Graceful glider",speed:6,accel:6,handling:9,weight:3,drift:8,boost:6},{id:"rocky",name:"Rocky Shell",animal:"Turtle",emoji:"🐢",color:3129201,accent:16765503,personality:"Calm, determined and impossible to intimidate.",vehicle:"Armoured shell kart",passive:"long-shield",passiveText:"Shield power-ups last noticeably longer.",bio:"Slow to anger, impossible to knock off course. Rocky simply endures — and wins.",food:"Sea lettuce",style:"Defensive tank",speed:6,accel:4,handling:6,weight:10,drift:5,boost:6},{id:"nova",name:"Nova Paws",animal:"Red Panda",emoji:"🐼",color:16740419,accent:9433343,personality:"Creative, curious and slightly chaotic.",vehicle:"Candy-powered hover buggy",passive:"double-boost",passiveText:"Chance to get two mini-boosts from one boost item.",bio:"Half genius, half gremlin. Nova rewires her buggy between every race.",food:"Candy floss",style:"Chaotic wildcard",speed:6,accel:9,handling:8,weight:3,drift:8,boost:7},{id:"shadow",name:"Shadow Lynx",animal:"Lynx",emoji:"🐈‍⬛",color:8073207,accent:16723888,personality:"Mysterious, calm and highly skilled.",vehicle:"Black & purple anti-gravity kart",passive:"drift-cloak",passiveText:"Briefly untargetable after a clean drift.",bio:"A masked racer of impossible skill, collecting Turbo Star fragments for reasons unknown…",food:"Unknown",style:"Flawless phantom",speed:9,accel:9,handling:9,weight:5,drift:9,boost:9,locked:!0}],Vi=i=>ri.find(t=>t.id===i)??ri[0],Te=(i,t,e,n,s={})=>({id:i,name:t,shape:e,desc:n,dSpeed:s.dSpeed??0,dAccel:s.dAccel??0,dHandling:s.dHandling??0,dWeight:s.dWeight??0,dDrift:s.dDrift??0,dBoost:s.dBoost??0,dOffroad:s.dOffroad??0}),Oi=[Te("sport","Blaze GT","sport","A balanced flame-styled sports kart.",{dSpeed:.5,dBoost:.3}),Te("hover","Neon Drifter","hover","Hovering neon kart with razor handling.",{dHandling:.6,dDrift:.6,dWeight:-.4}),Te("rocket","Sky Piercer","rocket","Rocket-boosted straight-line monster.",{dSpeed:.7,dAccel:.4,dHandling:-.3}),Te("monster","Grit Crawler","monster","Huge tyres, huge grip off-road.",{dOffroad:.8,dWeight:.6,dSpeed:.3,dHandling:-.3}),Te("aqua","Tide Runner","aqua","Streamlined for water tracks.",{dHandling:.4,dDrift:.4}),Te("candy","Sugar Rush","candy","Sweet hover buggy with a sugar high.",{dAccel:.6,dBoost:.4,dWeight:-.3}),Te("truck","Canopy Hauler","truck","Rugged jungle truck.",{dWeight:.5,dOffroad:.6,dAccel:-.2}),Te("ice","Frost Lance","ice","Rocket-ice racer built for cold.",{dAccel:.5,dHandling:.4}),Te("cruiser","Star Cruiser","cruiser","Space cruiser with smooth top speed.",{dSpeed:.6,dWeight:.3}),Te("insect","Skitter Mk3","insect","Mechanical insect kart, nimble as a bug.",{dHandling:.7,dAccel:.4,dWeight:-.4}),Te("shell","Bastion Shell","shell","Armoured shell, tough as nails.",{dWeight:.8,dOffroad:.3,dSpeed:.2,dAccel:-.3}),Te("cloud","Zephyr","cloud","Light cloud racer that floats through turns.",{dHandling:.5,dDrift:.5,dWeight:-.5}),Te("dragon","Emberwing","dragon","Dragon-inspired kart breathing boost.",{dSpeed:.5,dBoost:.6,dWeight:.2}),Te("lunar","Moonglider","lunar","Winged lunar glider, king of the air.",{dHandling:.5,dDrift:.4,dWeight:-.3}),Te("neon","Pulse Street","neon","Neon street racer, all attitude.",{dSpeed:.5,dAccel:.3,dDrift:.3}),Te("shadow","Void Runner","shadow","A phantom anti-gravity kart.",{dSpeed:.5,dAccel:.5,dHandling:.5,dDrift:.5,dBoost:.5})];Oi[Oi.length-1].locked=!0;const Il=i=>Oi.find(t=>t.id===i)??Oi[0],Yr=[{name:"Signature",color:-1},{name:"Turbo Red",color:16726832},{name:"Sunset Orange",color:16742959},{name:"Volt Yellow",color:16766474},{name:"Jungle Green",color:3129201},{name:"Aqua",color:3123455},{name:"Galaxy Purple",color:8073207},{name:"Neon Pink",color:16723888},{name:"Frost White",color:15398655},{name:"Shadow Black",color:1448491}],Rc=[{name:"Classic Fire",color:16742959},{name:"Neon Cyan",color:3530960},{name:"Rainbow",color:-1},{name:"Violet",color:10181887},{name:"Gold",color:16765503},{name:"Ice Blue",color:9433343}],Dl={candy:{id:"candy",name:"Candy Kingdom",road:7031439,roadEdge:16735665,ground:16766700,offroad:16230616,skyTop:9358335,skyBottom:16765420,fog:16765420,fogDensity:.0012,accent:16723888,decor:"candy",music:"candy"},ocean:{id:"ocean",name:"Deep Ocean",road:1796751,roadEdge:3530960,ground:670298,offroad:872046,skyTop:405577,skyBottom:678522,fog:674408,fogDensity:.0022,accent:3530960,decor:"coral",water:!0,music:"ocean"},galaxy:{id:"galaxy",name:"Galaxy Zone",road:2764629,roadEdge:9068543,ground:658975,offroad:1316922,skyTop:328463,skyBottom:1182254,fog:657440,fogDensity:.0016,accent:10181887,decor:"space",night:!0,music:"galaxy"},jungle:{id:"jungle",name:"Wild Jungle",road:6967862,roadEdge:16765503,ground:2059066,offroad:3115596,skyTop:7259903,skyBottom:13496063,fog:12576454,fogDensity:.0016,accent:8114751,decor:"jungle",music:"jungle"},frozen:{id:"frozen",name:"Frozen Kingdom",road:10471400,roadEdge:9433343,ground:14676479,offroad:12574962,skyTop:9418982,skyBottom:15135999,fog:14477813,fogDensity:.0018,accent:9433343,decor:"ice",music:"frozen"},neon:{id:"neon",name:"Neon Future",road:1316398,roadEdge:16723888,ground:526874,offroad:1053482,skyTop:328463,skyBottom:1707578,fog:657440,fogDensity:.002,accent:58879,decor:"city",night:!0,music:"neon"},shadow:{id:"shadow",name:"Shadow Fortress",road:1708848,roadEdge:11619327,ground:460048,offroad:1051170,skyTop:262920,skyBottom:1706542,fog:656664,fogDensity:.0022,accent:16723888,decor:"fortress",night:!0,music:"shadow"}},Fn={oval:[1.35,1.3,1.15,1,.92,.95,1.1,1.28,1.34,1.3,1.12,.98,.9,.96,1.12,1.3],kidney:[1.2,1.35,1.3,1,.72,.8,1.05,1.2,1.15,1.25,1.3,1.05,.78,.72,.95,1.15],clover:[1.3,1,1.28,.98,1.3,1,1.26,.98,1.3,1,1.28,.98,1.3,1,1.26,.98],wavy:[1.2,1.32,1.1,1.28,1.05,1.26,1.08,1.3,1.12,1.28,1.06,1.24,1.1,1.3,1.12,1.24],peanut:[1.4,1.2,.95,.85,.95,1.2,1.4,1.2,.95,.85,.62,.85,.95,1.2,1.35,1.3],star:[1.35,.95,1.28,.92,1.32,.95,1.25,.9,1.34,.95,1.28,.92,1.3,.95,1.26,.9],serpent:[1.15,1.3,1.05,.8,1,1.3,1.1,.82,1.05,1.32,1.12,.85,1,1.28,1.14,.9]},Xa=[{id:"sugar-rush",name:"Sugar Rush Speedway",world:"candy",cup:"rookie",laps:3,scale:240,width:13,hillAmp:5,hillFreq:3,shape:Fn.oval,boostPads:[.12,.55,.82],ramps:[.33,.7],desc:"Chocolate roads and giant spinning lollipops."},{id:"choco-volcano",name:"Chocolate Volcano",world:"candy",cup:"rookie",laps:3,scale:250,width:12,hillAmp:16,hillFreq:2,shape:Fn.peanut,boostPads:[.2,.63],ramps:[.28,.52,.86],desc:"Caramel waterfalls and a cookie mega-jump."},{id:"coral-city",name:"Coral City Circuit",world:"ocean",cup:"ocean",laps:3,scale:260,width:13,hillAmp:7,hillFreq:3,shape:Fn.kidney,boostPads:[.15,.48,.78],ramps:[.4,.68],desc:"Glass tunnels and glowing jellyfish."},{id:"moonbase",name:"Moonbase Mayhem",world:"galaxy",cup:"galaxy",laps:3,scale:270,width:12,hillAmp:12,hillFreq:3,shape:Fn.serpent,boostPads:[.1,.44,.72],ramps:[.25,.5,.8],desc:"Low-gravity jumps over glowing craters."},{id:"jungle-temple",name:"Jungle Temple Run",world:"jungle",cup:"jungle",laps:3,scale:250,width:12,hillAmp:10,hillFreq:4,shape:Fn.clover,boostPads:[.18,.42,.68,.9],ramps:[.35,.72],desc:"Ancient ruins, vines and rolling boulders."},{id:"iceberg",name:"Iceberg Avalanche",world:"frozen",cup:"galaxy",laps:3,scale:260,width:13,hillAmp:14,hillFreq:2,shape:Fn.wavy,boostPads:[.2,.6],ramps:[.3,.55,.82],desc:"Slippery turns beneath a cracking glacier."},{id:"neon-paws",name:"Neon Paws City",world:"neon",cup:"turbo",laps:3,scale:280,width:12,hillAmp:8,hillFreq:3,shape:Fn.star,boostPads:[.12,.4,.66,.88],ramps:[.3,.6],desc:"Rooftop racing through neon skyscrapers."},{id:"shadow-fortress",name:"Shadow Turbo Fortress",world:"shadow",cup:"shadow",laps:3,scale:290,width:11,hillAmp:18,hillFreq:3,shape:Fn.star,boostPads:[.1,.35,.6,.85],ramps:[.22,.48,.74],desc:"The final track, built around the Turbo Star."}],or=i=>Xa.find(t=>t.id===i)??Xa[0],Qs=[{id:"rookie",name:"Rookie Cup",emoji:"🍭",tracks:["sugar-rush","choco-volcano","jungle-temple","coral-city"]},{id:"turbo",name:"Turbo Cup",emoji:"🌆",tracks:["neon-paws","moonbase","iceberg","coral-city"]},{id:"shadow",name:"Shadow Cup",emoji:"🌑",tracks:["jungle-temple","iceberg","neon-paws","shadow-fortress"]}],ss=i=>Qs.find(t=>t.id===i)??Qs[0],Ul={carrot:{id:"carrot",name:"Turbo Carrot",icon:"🥕",desc:"A strong instant speed boost.",kind:"self"},banana:{id:"banana",name:"Banana Bounce",icon:"🍌",desc:"Drop a peel — racers who hit it spin out.",kind:"drop"},shield:{id:"shield",name:"Bubble Shield",icon:"🫧",desc:"A bubble that blocks one attack.",kind:"self"},falcon:{id:"falcon",name:"Rocket Falcon",icon:"🦅",desc:"A homing falcon that hits the racer ahead.",kind:"projectile"},jelly:{id:"jelly",name:"Jelly Splash",icon:"🟣",desc:"A slippery blob — driving through it kills your grip.",kind:"drop"},ink:{id:"ink",name:"Octopus Ink",icon:"🐙",desc:"Splatters the screens of racers ahead of you.",kind:"field"},roar:{id:"roar",name:"Thunder Roar",icon:"🌩️",desc:"A shockwave that shoves nearby racers away.",kind:"area"},star:{id:"star",name:"Turbo Star",icon:"⭐",desc:"Invincible, super-fast and glowing. Rare!",kind:"self"}};function Tg(i,t){const e=i,n=1-i,s=[["carrot",2+e*2],["banana",1.5+n*1.5],["shield",1.2+n],["falcon",1.5+e*1.2],["jelly",1+n],["ink",.8+e],["roar",1],["star",e>.55?e*1.4:.05]],r=s.reduce((o,[,c])=>o+c,0);let a=t()*r;for(const[o,c]of s)if(a-=c,a<=0)return o;return"carrot"}class Ag{constructor(t,e=600){O(this,"n");O(this,"pos",[]);O(this,"tan",[]);O(this,"nrm",[]);O(this,"totalLength");const n=new bl(t,!0,"catmullrom",.5);this.totalLength=n.getLength(),this.n=e;const s=n.getSpacedPoints(e);for(let a=0;a<e;a++)this.pos.push(s[a].clone());const r=new P(0,1,0);for(let a=0;a<e;a++){const o=this.pos[(a-1+e)%e],c=this.pos[(a+1)%e],l=new P().subVectors(c,o).normalize();this.tan.push(l);const h=new P().crossVectors(r,l).normalize();this.nrm.push(h)}}frameAt(t){const n=(t%1+1)%1*this.n,s=Math.floor(n)%this.n,r=(s+1)%this.n,a=n-Math.floor(n),o=this.pos[s].clone().lerp(this.pos[r],a),c=this.tan[s].clone().lerp(this.tan[r],a).normalize(),l=this.nrm[s].clone().lerp(this.nrm[r],a).normalize();return{pos:o,tan:c,nrm:l}}tOfIndex(t){return t%this.n/this.n}project(t,e,n=40){let s=e%this.n,r=1/0;for(let l=-n;l<=n;l++){const h=((e+l)%this.n+this.n)%this.n,d=this.pos[h].distanceToSquared(t);d<r&&(r=d,s=h)}const a=this.nrm[s],c=new P().subVectors(t,this.pos[s]).dot(a);return{t:this.tOfIndex(s),index:s,lateral:c,dist:Math.sqrt(r)}}projectGlobal(t){let e=0,n=1/0;for(let s=0;s<this.n;s++){const r=this.pos[s].distanceToSquared(t);r<n&&(n=r,e=s)}return this.project(t,e,4)}}class Rg{constructor(t,e){O(this,"curve");O(this,"group",new Re);O(this,"width");O(this,"laps");O(this,"theme");O(this,"def");O(this,"boostPads",[]);O(this,"ramps",[]);O(this,"checkpoints",[]);O(this,"decorMeshes",[]);this.def=t,this.laps=t.laps,this.width=t.width,this.theme=Dl[t.world];const n=Pl(e),s=[],r=64;for(let a=0;a<r;a++){const o=a/r*Math.PI*2,c=a/r*t.shape.length,l=Math.floor(c)%t.shape.length,h=(l+1)%t.shape.length,d=c-Math.floor(c),u=t.shape[l]*(1-d)+t.shape[h]*d,p=t.scale*u,g=Math.sin(o*t.hillFreq)*t.hillAmp+Math.sin(o*t.hillFreq*2+1.3)*t.hillAmp*.35;s.push(new P(Math.cos(o)*p,g,Math.sin(o)*p))}this.curve=new Ag(s,600),this.buildRoad(),this.buildGround(),this.buildStartLine(),this.buildFeatures(),this.buildCheckpoints(32),this.buildBackdrop(n.decorDensity),this.buildDecor(n.decorDensity),this.buildArches(),this.buildAmbient(n.decorDensity)}heightAtT(t){return this.curve.frameAt(t).pos.y}frameAt(t){return this.curve.frameAt(t)}buildRoad(){const t=this.curve.n,e=this.width,n=[],s=[],r=[],a=[];for(let l=0;l<t;l++){const h=this.curve.pos[l],d=this.curve.nrm[l];r.push(h.clone().addScaledVector(d,e)),a.push(h.clone().addScaledVector(d,-e))}for(let l=0;l<t;l++)n.push(r[l].x,r[l].y+.05,r[l].z),n.push(a[l].x,a[l].y+.05,a[l].z);for(let l=0;l<t;l++){const h=l*2,d=h+1,u=(l+1)%t*2,p=u+1;s.push(h,d,u,d,p,u)}const o=new de;o.setAttribute("position",new jt(n,3)),o.setIndex(s),o.computeVertexNormals();const c=new it(o,new Ft({color:this.theme.road,roughness:.85,metalness:.1}));c.receiveShadow=!0,this.group.add(c);for(const l of[1,-1]){const h=[],d=[];for(let g=0;g<t;g++){const x=this.curve.pos[g],f=this.curve.nrm[g],m=x.clone().addScaledVector(f,l*(e-.5)),_=x.clone().addScaledVector(f,l*e);h.push(m.x,m.y+.1,m.z,_.x,_.y+.1,_.z)}for(let g=0;g<t;g++){const x=g*2,f=x+1,m=(g+1)%t*2,_=m+1;d.push(x,f,m,f,_,m)}const u=new de;u.setAttribute("position",new jt(h,3)),u.setIndex(d),u.computeVertexNormals();const p=new it(u,new Ft({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.8,roughness:.4}));this.group.add(p)}this.buildTrackside()}buildTrackside(){const t=this.curve.n,e=this.width,n=new Ft({color:16726832,roughness:.6}),s=new Ft({color:16250871,roughness:.6}),r=new Ft({color:12174038,roughness:.35,metalness:.8}),a=new Ft({color:3817554,roughness:.7}),o=new Ft({color:16777215,emissive:16777215,emissiveIntensity:.25}),c=new Yt(1,.18,2.6),l=new Yt(.35,.04,2.2);for(let u=0;u<t;u+=5){const p=this.curve.pos[u],g=this.curve.nrm[u],x=this.curve.tan[u],f=Math.atan2(x.x,x.z);if(1-this.curve.tan[u].dot(this.curve.tan[(u+12)%t])>.01)for(const _ of[1,-1]){const M=new it(c,u/5%2?n:s);M.position.copy(p).addScaledVector(g,_*(e+.5)),M.position.y+=.09,M.rotation.y=f,this.group.add(M)}if(u%10===0){const _=new it(l,o);_.position.copy(p),_.position.y+=.08,_.rotation.y=f,this.group.add(_)}}for(const u of[1,-1]){const p=[],g=[];for(let _=0;_<t;_++){const M=this.curve.pos[_],w=this.curve.nrm[_],R=M.clone().addScaledVector(w,u*(e+1.6));p.push(R.x,R.y+.55,R.z,R.x,R.y+.95,R.z)}for(let _=0;_<t;_++){const M=_*2,w=M+1,R=(_+1)%t*2,A=R+1;g.push(M,w,R,w,A,R,M,R,w,w,R,A)}const x=new de;x.setAttribute("position",new jt(p,3)),x.setIndex(g),x.computeVertexNormals();const f=new it(x,r);f.material.side=hn,this.group.add(f);const m=new Yt(.16,1,.16);for(let _=0;_<t;_+=15){const M=this.curve.pos[_],w=this.curve.nrm[_],R=new it(m,a);R.position.copy(M).addScaledVector(w,u*(e+1.6)),R.position.y+=.5,this.group.add(R)}}const h=new Ft({color:16773560,emissive:16769162,emissiveIntensity:this.theme.night?1.6:.6});for(let u=7;u<t;u+=60){const p=this.curve.pos[u],g=this.curve.nrm[u],x=new it(new _e(.12,.16,7,8),a);x.position.copy(p).addScaledVector(g,e+3.2),x.position.y+=3.5;const f=new it(new xe(.45,10,8),h);f.position.copy(x.position),f.position.y+=3.6,this.group.add(x,f)}const d=[16735631,16765503,5032432,4186280,16777215,16752412,10181887];for(const u of[.015,.985]){const p=this.curve.frameAt(u),g=Math.atan2(p.tan.x,p.tan.z);for(const x of[1,-1]){const f=new Re;for(let _=0;_<4;_++){const M=new it(new Yt(18,1.2,2.2),new Ft({color:2830148,roughness:.8}));M.position.set(0,.6+_*1.2,_*2.2),f.add(M);for(let w=-8;w<=8;w+=1.3){const R=new it(new xe(.38,6,5),new Ft({color:d[(Math.abs(w*7)|0)%d.length]}));R.position.set(w,1.6+_*1.2,_*2.2-.3),f.add(R)}}const m=new it(new Yt(19,.3,10),new Ft({color:this.theme.accent,emissive:this.theme.accent,emissiveIntensity:.3}));m.position.set(0,7.2,4),f.add(m),f.position.copy(p.pos).addScaledVector(p.nrm,x*(e+7)),f.rotation.y=g+(x===1?-Math.PI/2:Math.PI/2),this.group.add(f)}}}buildGround(){let t=1/0;for(const n of this.curve.pos)t=Math.min(t,n.y);const e=new it(new is(this.def.scale*2.4,48),new Ft({color:this.theme.ground,roughness:1}));if(e.rotation.x=-Math.PI/2,e.position.y=t-6,e.receiveShadow=!0,this.group.add(e),this.theme.water){const n=new it(new is(this.def.scale*2.3,48),new Ft({color:941958,transparent:!0,opacity:.55,roughness:.2,metalness:.4}));n.rotation.x=-Math.PI/2,n.position.y=t-1.5,this.group.add(n)}}buildStartLine(){const t=this.curve.frameAt(0),e=new Fi(this.width*2,4),n=document.createElement("canvas");n.width=128,n.height=32;const s=n.getContext("2d");for(let l=0;l<4;l++)for(let h=0;h<16;h++)s.fillStyle=(h+l)%2?"#fff":"#111",s.fillRect(h*8,l*8,8,8);const r=new Sl(n),a=new it(e,new Ft({map:r}));a.rotation.x=-Math.PI/2,a.position.copy(t.pos),a.position.y+=.12,a.lookAt(t.pos.clone().add(new P(0,1,0))),a.rotation.x=-Math.PI/2;const o=Math.atan2(t.tan.x,t.tan.z);a.rotation.z=-o,this.group.add(a);for(const l of[1,-1]){const h=new it(new _e(.4,.4,10,8),new Ft({color:this.theme.accent,emissive:this.theme.accent,emissiveIntensity:.5}));h.position.copy(t.pos.clone().addScaledVector(t.nrm,l*(this.width+1))),h.position.y+=5,this.group.add(h)}const c=new it(new Yt(this.width*2+4,1.4,1.4),new Ft({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.7}));c.position.copy(t.pos),c.position.y+=10,c.rotation.y=Math.atan2(t.nrm.x,t.nrm.z),this.group.add(c)}buildFeatures(){for(const t of this.def.boostPads){const e=this.curve.frameAt(t),n=new it(new Fi(this.width*1.4,8),new Ft({color:this.theme.accent,emissive:this.theme.accent,emissiveIntensity:1.2,transparent:!0,opacity:.9}));n.rotation.x=-Math.PI/2,n.position.copy(e.pos),n.position.y+=.14,n.rotation.z=-Math.atan2(e.tan.x,e.tan.z),this.group.add(n),this.boostPads.push({t,pos:e.pos.clone(),dir:e.tan.clone()})}for(const t of this.def.ramps){const e=this.curve.frameAt(t),n=new it(new Yt(this.width*1.8,.6,7),new Ft({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.5,roughness:.5}));n.position.copy(e.pos),n.position.y+=.5,n.rotation.y=Math.atan2(e.tan.x,e.tan.z),n.rotation.x=-.18,n.castShadow=!0,this.group.add(n),this.ramps.push({t,pos:e.pos.clone(),dir:e.tan.clone()})}}buildCheckpoints(t){for(let e=0;e<t;e++){const n=e/t;this.checkpoints.push({t:n,pos:this.curve.frameAt(n).pos.clone()})}}buildDecor(t){const e=this.curve.n,n=Math.max(3,Math.floor(9/t)),s=Kr(this.def.id.length*997+13);for(let r=0;r<e;r+=n)for(const a of[1,-1])s()<.9&&this.placeProp(r,a,this.width+3+s()*7,s,1),s()<.6&&this.placeProp(r,a,this.width+13+s()*26,s,1.5);this.buildLandmarks()}placeProp(t,e,n,s,r){const a=this.curve.pos[t],o=this.curve.nrm[t],c=this.decorProp(s);c&&(c.position.copy(a.clone().addScaledVector(o,e*n)),c.position.y=a.y,r!==1&&c.scale.multiplyScalar(r),c.rotation.y=s()*Math.PI*2,this.group.add(c),this.decorMeshes.push(c))}buildBackdrop(t){const e=this.def.scale*1.85,n=Kr(777+this.def.id.length*31),s=Math.floor(38+22*Math.min(1,t));for(let r=0;r<s;r++){const a=r/s*Math.PI*2,o=e*(.85+n()*.6),c=this.backdropProp(n);c.position.x=Math.cos(a)*o,c.position.z=Math.sin(a)*o,c.position.y-=3,c.rotation.y=-a,this.group.add(c)}}backdropProp(t){const e=30+t()*60,n=this.theme.accent,s=this.theme.roadEdge,r=(a,o=0,c=0)=>new Ft({color:a,emissive:o,emissiveIntensity:c,roughness:.85});switch(this.theme.decor){case"candy":{const a=new Re,o=new it(new _e(2,2,e,8),r(16777215));o.position.y=e/2,a.add(o);const c=new it(new xe(10,12,10),r(t()>.5?16735665:16765503,n,.15));return c.position.y=e,a.add(c),a}case"coral":return Yi(new tn(10,e,6),t()>.5?1863558:1806231,n,.2);case"space":{const a=new Re,o=new it(new Yt(8+t()*8,e,8+t()*8),r(1382970,n,.5));return o.position.y=e/2,a.add(o),a}case"jungle":return Yi(new tn(14,e,7),t()>.5?2055983:3111482,0,0);case"ice":return Yi(new tn(12,e,6),12574962,s,.15);case"city":return Yi(new Yt(10+t()*12,e,10+t()*12),658724,t()>.5?n:s,.45);default:return Yi(new Yt(8,e,8),1313066,11619327,.4)}}buildArches(){const t=[.08,.3,.52,.74,.92];for(const e of t){const n=this.curve.frameAt(e),s=this.width+2,r=9,a=new Ft({color:this.theme.roadEdge,emissive:this.theme.roadEdge,emissiveIntensity:.7,roughness:.4,metalness:.3}),o=new Re;for(const l of[1,-1]){const h=new it(new _e(.5,.5,r,8),a);h.position.copy(n.nrm.clone().multiplyScalar(l*s)),h.position.y=r/2,o.add(h)}const c=new it(new Yt(s*2,1.2,1.2),a);c.position.y=r,o.add(c),o.position.copy(n.pos),o.rotation.y=Math.atan2(n.nrm.x,n.nrm.z),this.group.add(o)}}buildAmbient(t){const e=Kr(313+this.def.id.length*17),n=Math.floor(26*t),s=this.theme.decor;for(let r=0;r<n;r++){const a=e(),o=this.curve.frameAt(a),c=(e()-.5)*this.width*3,l=o.pos.clone().addScaledVector(o.nrm,c);l.y+=6+e()*22;let h;const d=(u,p=.85)=>new Ft({color:u,emissive:u,emissiveIntensity:.4,transparent:!0,opacity:p});s==="coral"?h=new it(new xe(.5+e(),8,6),d(12578559,.5)):s==="candy"?h=new it(new xe(1+e(),10,8),d(e()>.5?16735665:16765503)):s==="space"||s==="fortress"?h=new it(new Zs(.8+e()),d(this.theme.accent)):s==="ice"?h=new it(new fo(.6+e()),d(15400191,.7)):s==="city"?h=new it(new Yt(1.4,.5,.7),d(e()>.5?this.theme.accent:this.theme.roadEdge)):h=new it(new xe(.5+e()*.6,8,6),d(10215562,.8)),h.position.copy(l),h.userData.bob={base:l.y,amp:.6+e()*1.4,phase:e()*Math.PI*2,spin:(e()-.5)*2},this.group.add(h)}}decorProp(t){const e=this.theme.accent,n=this.theme.roadEdge,s=1+t()*1.6,r=(a,o=0,c=0)=>new Ft({color:a,emissive:o,emissiveIntensity:c,roughness:.6});switch(this.theme.decor){case"candy":{const a=new Re,o=new it(new _e(.18,.18,4*s,8),r(16777215));o.position.y=2*s,a.add(o);const c=new it(new hs(1.1*s,.4*s,8,16),r(t()>.5?16735665:16765503));return c.position.y=4*s,a.add(c),a.children.forEach(l=>l.castShadow=!0),a}case"coral":{const a=new it(new tn(1.1*s,4*s,7),r(t()>.5?16740241:9433343,e,.25));return a.position.y=2*s,a.castShadow=!0,a}case"space":{const a=new it(new _e(.3,.5,6*s,6),r(1316922,e,.9));return a.position.y=3*s,a}case"jungle":{const a=new Re,o=new it(new _e(.4,.6,4*s,7),r(6965802));o.position.y=2*s,o.castShadow=!0;const c=new it(new xe(1.8*s,8,6),r(3115583));return c.position.y=4.4*s,c.castShadow=!0,a.add(o,c),a}case"ice":{const a=new it(new tn(.9*s,5*s,6),r(14676479,n,.3));return a.position.y=2.5*s,a.castShadow=!0,a}case"city":{const a=8+t()*26,o=new it(new Yt(3+t()*3,a,3+t()*3),r(856112,t()>.5?e:n,.5));return o.position.y=a/2,o.castShadow=!0,o}case"fortress":{const a=6+t()*20,o=new it(new Yt(2.4,a,2.4),r(1182244,11619327,.4));return o.position.y=a/2,o}}return null}buildLandmarks(){const t=this.theme.accent,e=[.15,.4,.62,.85];for(const n of e){const s=this.curve.frameAt(n),r=s.pos.clone().addScaledVector(s.nrm,40);let a;switch(this.theme.decor){case"candy":a=Cg();break;case"coral":a=Si(new po(6,1.6,60,10),9433343,t);break;case"space":a=Si(new uo(8,0),2764646,t);break;case"jungle":a=Si(new tn(7,22,8),3115583,0);break;case"ice":a=Si(new tn(6,26,7),14676479,t);break;case"city":a=Si(new Yt(8,60,8),856112,t);break;default:a=Si(new Zs(10,0),1708080,16723888)}a.position.copy(r),a.position.y+=8,this.group.add(a)}}dispose(){this.group.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;Array.isArray(n)?n.forEach(s=>s.dispose()):n&&n.dispose()})}}function Si(i,t,e){const n=new it(i,new Ft({color:t,emissive:e,emissiveIntensity:e?.6:0,roughness:.5,metalness:.2}));return n.castShadow=!0,n}function Yi(i,t,e,n){const s=new it(i,new Ft({color:t,emissive:e,emissiveIntensity:n,roughness:.95}));i.computeBoundingBox();const r=i.boundingBox?i.boundingBox.max.y:0;return s.position.y=r,s}function Cg(){const i=new Re,t=new it(new _e(.7,.7,24,10),new Ft({color:16777215}));t.position.y=12,i.add(t);const e=new it(new _e(7,7,1.4,20),new Ft({color:16735665,emissive:16735665,emissiveIntensity:.3}));return e.rotation.x=Math.PI/2,e.position.y=24,i.add(e),i.userData.spin=!0,i}function Kr(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const jr=new Map;function Pg(i){if(jr.has(i))return jr.get(i);const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.clearRect(0,0,128,128),e.font="104px serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,64,72);const n=new Sl(t);return n.anisotropy=4,jr.set(i,n),n}const Jr=new Map;function Lg(i,t){if(Jr.has(i))return Jr.get(i);const e=Pg(t),n=new _g().load(`./racers/${i}.png`,void 0,void 0,()=>{n.image=e.image,n.needsUpdate=!0});return n.colorSpace=Qe,n.anisotropy=4,Jr.set(i,n),n}function Ig(i,t,e,n){const s=new Re,r=new _e(i,i,t,18);r.rotateZ(Math.PI/2);const a=new it(r,new Ft({color:1776934,roughness:.9,metalness:.05}));a.castShadow=!0;const o=[14278120,16765503,2763317,n],c=new _e(i*.62,i*.62,t+.04,14);c.rotateZ(Math.PI/2);const l=new it(c,new Ft({color:o[e%4],roughness:.3,metalness:.7,emissive:e===3?n:0,emissiveIntensity:.5})),h=new _e(i*.22,i*.22,t+.1,10);h.rotateZ(Math.PI/2);const d=new it(h,new Ft({color:9080732,roughness:.35,metalness:.8}));return s.add(a,l,d),s}const Os=(i=1316383)=>new Ft({color:i,roughness:.6,metalness:.3}),Zr=()=>new Ft({color:13620966,roughness:.25,metalness:.9});function Nl(i,t,e){const n=new Re,s=e.paint>=0?e.paint:i.color,r=i.accent,a=t.shape,o=new Ft({color:s,roughness:.35,metalness:.35}),c=new Ft({color:r,roughness:.4,metalness:.5,emissive:r,emissiveIntensity:.25});let l,h=.55,d=.5,u=.34,p=1.05,g=1.4,x=!1;switch(a){case"monster":case"truck":l=new Yt(1.7,.9,2.6),h=.95,d=.85,u=.5,p=1.25,g=1.55;break;case"rocket":case"dragon":l=new _e(.42,.6,2.9,10),l.rotateX(Math.PI/2),h=.55,d=.46;break;case"hover":case"cloud":case"lunar":case"shadow":l=new Yt(1.5,.5,2.4),h=.6,x=!0;break;case"shell":l=new xe(1.05,14,10),l.scale(1,.6,1.25),h=.75,d=.42;break;case"insect":l=new xe(.85,12,10),l.scale(1,.7,1.35),h=.7,d=.4,p=1.15;break;case"aqua":case"cruiser":l=new _e(.5,.7,2.7,12),l.rotateX(Math.PI/2),h=.6;break;default:l=new Yt(1.5,.6,2.5),h=.55}const f=new it(l,o);f.position.y=h,f.castShadow=!0,n.add(f);const m=new it(new Yt(2.1,.14,2.9),Os(987416));m.position.y=Math.max(.28,h-.4),m.castShadow=!0,n.add(m);const _=new it(new Yt(.95,.35,1.1),Os(723986));_.position.set(0,h+.22,-.1),n.add(_);const M=new it(new Yt(.8,.7,.25),Os(1708592));M.position.set(0,h+.5,-.55),n.add(M);const w=new it(new hs(.22,.05,8,18),Zr());w.position.set(0,h+.55,.55),w.rotation.x=Math.PI/2.6,n.add(w);for(const nt of[-1,1]){const Lt=new it(new Yt(.36,.34,1.3),c);Lt.position.set(nt*.92,h-.08,-.2),Lt.castShadow=!0,n.add(Lt);const zt=new it(new xe(.11,10,8),new Ft({color:16774856,emissive:16773800,emissiveIntensity:1.6}));zt.position.set(nt*.48,h+.02,1.62),n.add(zt);const q=new it(new _e(.09,.11,.55,10),Zr());q.rotation.x=Math.PI/2,q.position.set(nt*.45,h-.12,-1.45),n.add(q)}const R=new it(new Yt(1.5,.16,.16),Zr());R.position.set(0,h-.25,1.5),n.add(R);const A=new it(new Yt(1.2,.3,.8),c);A.position.set(0,h-.05,1.35),A.castShadow=!0,n.add(A);const E=new it(new Yt(1.6,.42,.14),c);E.position.set(0,h+.55,-1.3),E.castShadow=!0,n.add(E);for(const nt of[-1,1]){const Lt=new it(new Yt(.08,.4,.08),Os());Lt.position.set(nt*.6,h+.3,-1.3),n.add(Lt)}const C=new Re,V=new it(new xe(.52,16,14),new Ft({color:i.color,roughness:.45,metalness:.15}));V.castShadow=!0;const v=new it(new xe(.56,16,12,0,Math.PI*2,0,Math.PI*.5),new Ft({color:r,roughness:.3,metalness:.5}));v.position.y=.06;const S=new it(new is(.46,24),new Zi({map:Lg(i.id,i.emoji),transparent:!0,side:Tn}));S.position.set(0,-.02,.5),C.add(V,v,S),C.position.set(0,h+.82,.05),n.add(C);const N=[];if(x){const nt=new it(new Yt(1.4,.12,2.2),new Ft({color:r,emissive:r,emissiveIntensity:1.1,transparent:!0,opacity:.85}));nt.position.y=.18,n.add(nt),N.push(nt)}else{const nt=[[-p,g],[p,g],[-p,-g],[p,-g]];for(const[Lt,zt]of nt){const q=Ig(d,u,e.wheels,r);q.position.set(Lt,d,zt),n.add(q),N.push(q)}}const k=new Re;for(let nt=0;nt<2;nt++){const Lt=new it(new tn(.28,1.1,8),new Zi({color:16753983,transparent:!0,opacity:.9}));Lt.rotation.x=-Math.PI/2,Lt.position.set(nt===0?-.45:.45,h-.1,-1.5),k.add(Lt)}k.visible=!1,n.add(k);const X=new de,K=24,H=new Float32Array(K*3);for(let nt=0;nt<K;nt++)H[nt*3]=(nt%2?-1:1)*.9,H[nt*3+1]=.2,H[nt*3+2]=-1.2-Math.random();X.setAttribute("position",new Fe(H,3));const J=new ao(X,new ar({color:6728447,size:.4,transparent:!0,opacity:.9}));J.visible=!1,n.add(J);const G=new it(new xe(1.8,16,12),new Ft({color:7000319,transparent:!0,opacity:.28,emissive:3123455,emissiveIntensity:.4}));G.position.y=h,G.visible=!1,n.add(G);const at=new it(new xe(1.9,16,12),new Zi({color:16769357,transparent:!0,opacity:.35}));return at.position.y=h,at.visible=!1,n.add(at),{group:n,wheels:N,body:f,driver:C,boostFlame:k,driftSparks:J,shieldMesh:G,starAura:at,setPaint:nt=>{o.color.setHex(nt)}}}let Et=null,Ki=null,Ye=null,an=null,Fl=.55,Ol=.8,ln=null,bn=null,Bn=null,Ci=null,ji=0,Cc="candy",qa=1;function Dg(){if(Et)return;const i=window.AudioContext??window.webkitAudioContext;i&&(Et=new i,Ki=Et.createGain(),Ki.gain.value=.9,Ki.connect(Et.destination),Ye=Et.createGain(),Ye.gain.value=Fl,Ye.connect(Ki),an=Et.createGain(),an.gain.value=Ol,an.connect(Ki))}function cr(){Dg(),Et&&Et.state==="suspended"&&Et.resume().catch(()=>{})}function Pc(i,t){Fl=i,Ol=t,Ye&&(Ye.gain.value=i),an&&(an.gain.value=t)}function kl(){return Et?Et.currentTime:0}function Ae(i,t,e,n,s,r=0){if(!Et||!an)return;const a=kl()+r,o=Et.createOscillator(),c=Et.createGain();o.type=e,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(1,s),a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c).connect(an),o.start(a),o.stop(a+t+.02)}function ks(i,t,e,n=0){if(!Et||!an)return;const s=kl()+n,r=Math.floor(Et.sampleRate*i),a=Et.createBuffer(1,r,Et.sampleRate),o=a.getChannelData(0);for(let d=0;d<r;d++)o[d]=(Math.random()*2-1)*(1-d/r);const c=Et.createBufferSource();c.buffer=a;const l=Et.createBiquadFilter();l.type="bandpass",l.frequency.value=e,l.Q.value=.8;const h=Et.createGain();h.gain.value=t,c.connect(l).connect(h).connect(an),c.start(s)}function Ug(){if(!Et||!an||ln)return;Bn=Et.createGain(),Bn.gain.value=0;const i=Et.createBiquadFilter();i.type="lowpass",i.frequency.value=900,ln=Et.createOscillator(),ln.type="sawtooth",ln.frequency.value=70,bn=Et.createOscillator(),bn.type="square",bn.frequency.value=46,ln.connect(Bn),bn.connect(Bn),Bn.connect(i).connect(an),ln.start(),bn.start()}function Lc(){try{ln?.stop(),bn?.stop()}catch{}ln=bn=null,Bn=null}function Ng(i,t){if(!ln||!bn||!Bn||!Et)return;const e=60+i*210+(t?60:0);ln.frequency.setTargetAtTime(e,Et.currentTime,.05),bn.frequency.setTargetAtTime(e*.5,Et.currentTime,.05),Bn.gain.setTargetAtTime(.06+i*.09,Et.currentTime,.1)}const Dt={countdownBeep:(i=!1)=>{Ae(i?880:440,.18,"square",.16)},go:()=>{Ae(660,.1,"square",.16),Ae(990,.3,"square",.16,void 0,.08)},drift:()=>ks(.25,.05,1600),spark:i=>Ae(500+i*200,.08,"triangle",.05),boost:()=>{Ae(300,.35,"sawtooth",.16,1100),ks(.3,.06,2200)},miniBoost:()=>Ae(400,.2,"sawtooth",.12,900),pickup:()=>{Ae(700,.09,"triangle",.12),Ae(1050,.12,"triangle",.12,void 0,.07)},usePower:()=>Ae(520,.14,"square",.12,260),hit:()=>{ks(.3,.14,500),Ae(140,.25,"sawtooth",.14,60)},bump:()=>ks(.12,.08,350),star:()=>{for(let i=0;i<5;i++)Ae(600+i*180,.14,"triangle",.08,void 0,i*.08)},trick:()=>Ae(500,.2,"sine",.1,1200),land:()=>Ae(260,.12,"sine",.1,120),ui:()=>Ae(600,.05,"triangle",.06),win:()=>{[523,659,784,1046,1318].forEach((i,t)=>Ae(i,.3,"triangle",.14,void 0,t*.12))},lose:()=>{[440,392,330].forEach((i,t)=>Ae(i,.35,"sine",.1,void 0,t*.16))}},Ic={candy:[523.25,587.33,659.25,783.99,880,987.77],ocean:[261.63,311.13,349.23,392,466.16,523.25],galaxy:[329.63,392,440,523.25,587.33,659.25],jungle:[293.66,349.23,392,440,523.25,587.33],frozen:[523.25,622.25,698.46,783.99,880,1046.5],neon:[349.23,415.3,466.16,523.25,622.25,698.46],shadow:[277.18,329.63,369.99,415.3,493.88,554.37]};function Dc(i){Cc=Ic[i]?i:"candy",ji=0,qa=1,Ci&&window.clearInterval(Ci);const t=()=>{if(!Et||!Ye)return;const n=Ic[Cc],s=ji%8,r=qa;s%2===0&&Fg(.14*r),s%2===1&&Og(.05*r),s%2===0&&Qr(n[0]/2,.26,"sawtooth",.1*r);const a=n[ji*3%n.length];Qr(a,.15,"square",.07*r),(s===0||s===3||s===6)&&Qr(n[ji*5%n.length]*2,.18,"triangle",.06*r),ji++};Ci=window.setInterval(t,165)}function Fg(i){if(!Et||!Ye)return;const t=Et.currentTime,e=Et.createOscillator(),n=Et.createGain();e.type="sine",e.frequency.setValueAtTime(150,t),e.frequency.exponentialRampToValueAtTime(45,t+.12),n.gain.setValueAtTime(i,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.18),e.connect(n).connect(Ye),e.start(t),e.stop(t+.2)}function Og(i){if(!Et||!Ye)return;const t=Et.currentTime,e=Math.floor(Et.sampleRate*.05),n=Et.createBuffer(1,e,Et.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=(Math.random()*2-1)*(1-c/e);const r=Et.createBufferSource();r.buffer=n;const a=Et.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const o=Et.createGain();o.gain.value=i,r.connect(a).connect(o).connect(Ye),r.start(t)}function Qr(i,t,e,n){if(!Et||!Ye)return;const s=Et.currentTime,r=Et.createOscillator(),a=Et.createGain();r.type=e,r.frequency.value=i,a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(n,s+.02),a.gain.exponentialRampToValueAtTime(1e-4,s+t),r.connect(a).connect(Ye),r.start(s),r.stop(s+t+.02)}function Uc(i){qa=i}function $a(){Ci&&(window.clearInterval(Ci),Ci=null)}const Nc=new P,Sn=(i,t,e)=>Math.max(t,Math.min(e,i)),On=(i,t,e)=>i+(t-i)*e;function kg(i,t){const e=(h,d)=>Sn(h+d*1.5,1,11),n=e(i.speed,t.dSpeed),s=e(i.accel,t.dAccel),r=e(i.handling,t.dHandling),a=e(i.weight,t.dWeight),o=e(i.drift,t.dDrift),c=e(i.boost,t.dBoost),l=Sn(.35+t.dOffroad*.4+(i.passive==="offroad-grip"?.35:0),.2,.95);return{maxSpeed:54+n*4.6,accel:30+s*3.4,turn:1.7+r*.17,grip:.72+r*.02,weight:.6+a*.12,driftRate:.75+o*.08,boostMul:1.2+c*.03,boostDur:.85+c*.05,offroadKeep:l}}const bi=[.5,1.05,1.75,2.6],Bg=[{t:.55,p:1.16},{t:.95,p:1.26},{t:1.45,p:1.4},{t:2.1,p:1.55}],zg=[6728447,11559167,16765503,16735665];class Vg{constructor(t,e,n,s){O(this,"racer");O(this,"vehicle");O(this,"visual");O(this,"isPlayer");O(this,"stats");O(this,"pos",new P);O(this,"yaw",0);O(this,"speed",0);O(this,"vy",0);O(this,"grounded",!0);O(this,"bank",0);O(this,"pitch",0);O(this,"trackT",0);O(this,"hintIndex",0);O(this,"lateral",0);O(this,"offroadAmt",0);O(this,"lap",0);O(this,"nextCp",0);O(this,"place",1);O(this,"finished",!1);O(this,"finishMs",0);O(this,"wrongWay",!1);O(this,"driftDir",0);O(this,"driftCharge",0);O(this,"driftTier",-1);O(this,"wasDrift",!1);O(this,"boostTime",0);O(this,"boostPow",1);O(this,"jumpArmed",new Set);O(this,"padCd",0);O(this,"trickActive",!1);O(this,"trickSpin",0);O(this,"trickDone",!1);O(this,"spinTime",0);O(this,"slowTime",0);O(this,"shieldTime",0);O(this,"starTime",0);O(this,"cloakTime",0);O(this,"moonTime",0);O(this,"knock",new P);O(this,"cleanTime",0);O(this,"cleanBonus",0);O(this,"heldPower",null);O(this,"rubber",1);O(this,"inkTime",0);O(this,"assist",!1);O(this,"ghostSamples",[]);O(this,"lastSteerVis",0);this.racer=t,this.vehicle=e,this.isPlayer=s,this.stats=kg(t,e),this.visual=Nl(t,e,n)}resetTo(t,e,n){const s=t.frameAt(e);this.pos.copy(s.pos).addScaledVector(s.nrm,n),this.pos.y=s.pos.y,this.yaw=Math.atan2(s.tan.x,s.tan.z),this.speed=0,this.vy=0,this.grounded=!0,this.driftDir=0,this.driftCharge=0,this.boostTime=0,this.spinTime=this.slowTime=0,this.knock.set(0,0,0),this.trackT=e,this.hintIndex=Math.floor(e*t.curve.n)%t.curve.n,this.syncVisual(0)}giveShield(t){this.shieldTime=Math.max(this.shieldTime,t*(this.racer.passive==="long-shield"?1.6:1))}giveStar(t){this.starTime=Math.max(this.starTime,t),Dt.star()}applyBoost(t,e){this.boostTime=Math.max(this.boostTime,t),this.boostPow=Math.max(this.boostPow,e)}hit(t){if(this.starTime>0||this.cloakTime>0)return!1;if(this.shieldTime>0)return this.shieldTime=0,Dt.bump(),!1;const e=this.racer.passive==="heavy-armor"?.4:1;return t.kind==="spin"?(this.spinTime=Math.max(this.spinTime,1.1*e),this.speed*=.4,this.cleanTime=0,this.cleanBonus=0):t.kind==="slow"?(this.slowTime=Math.max(this.slowTime,1.6*e),this.cleanTime=0):t.kind==="push"&&t.dir&&(this.knock.addScaledVector(t.dir,(t.power??20)*e/this.stats.weight),this.cleanTime=0),this.isPlayer&&Dt.hit(),!0}update(t,e,n,s){if(this.finished){this.coastToStop(t,n),this.syncVisual(t);return}this.boostTime=Math.max(0,this.boostTime-t),this.boostTime===0&&(this.boostPow=1),this.spinTime=Math.max(0,this.spinTime-t),this.slowTime=Math.max(0,this.slowTime-t),this.shieldTime=Math.max(0,this.shieldTime-t),this.starTime=Math.max(0,this.starTime-t),this.cloakTime=Math.max(0,this.cloakTime-t),this.moonTime=Math.max(0,this.moonTime-t),this.padCd=Math.max(0,this.padCd-t);const r=this.spinTime>0;let a=r?0:e.steer,o=r?0:e.throttle;if(this.padCd===0){for(const R of n.boostPads)if(this.pos.distanceToSquared(R.pos)<64&&this.forwardDot(R.dir)>.3){this.applyBoost(.9,this.stats.boostMul),this.padCd=.8,this.isPlayer&&Dt.miniBoost();break}}this.updateDrift(t,e,o,a);const c=Sn(Math.abs(this.speed)/this.stats.maxSpeed,0,1);let l=this.stats.turn*(1.05-.3*c);this.grounded||(l*=this.racer.passive==="air-control"?.6:.35);const h=this.speed<-.5;if(this.driftDir!==0){const R=Sn(a,-1,1);this.yaw+=(this.driftDir*.5+R*.6)*l*1.3*t}else if(this.yaw+=a*l*t*(h?-1:1),this.assist&&Math.abs(a)<.2&&this.grounded&&this.speed>6){const R=n.curve.tan[this.hintIndex];let A=Math.atan2(R.x,R.z)-this.yaw;for(;A>Math.PI;)A-=Math.PI*2;for(;A<-Math.PI;)A+=Math.PI*2;this.yaw+=A*Math.min(1,2.4*t)}this.inkTime=Math.max(0,this.inkTime-t);const d=(this.stats.maxSpeed*this.boostPow+this.cleanBonus)*this.rubber,u=this.offroadAmt>0?On(1,this.stats.offroadKeep,this.offroadAmt):1,p=this.slowTime>0?.55:1,g=d*u*p;o>0?this.speed+=this.stats.accel*o*t:o<0?this.speed>0?this.speed+=o*this.stats.accel*1.6*t:this.speed+=o*this.stats.accel*.5*t:this.speed-=this.speed*1.1*t,this.speed=Sn(this.speed,-18,Math.max(g,(this.boostTime>0,g))),this.speed>g&&this.boostTime===0&&(this.speed=On(this.speed,g,1-Math.pow(.001,t)));const x=Nc.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.pos.addScaledVector(x,this.speed*t),this.knock.lengthSq()>.01&&(this.pos.addScaledVector(this.knock,t),this.knock.multiplyScalar(Math.pow(.02,t))),this.handleRampsAndAir(t,e,n);const f=n.curve.project(this.pos,this.hintIndex,this.grounded?26:40);this.hintIndex=f.index,this.trackT=f.t,this.lateral=f.lateral;const m=n.width,_=Math.abs(f.lateral)-m;this.offroadAmt=_>0?Sn(_/m,0,1):0;const M=m*2.2;if(Math.abs(f.lateral)>M){const R=f.lateral>0?-1:1;this.pos.addScaledVector(n.curve.nrm[f.index],R*(Math.abs(f.lateral)-M)),this.speed*=.7,this.isPlayer&&this.grounded&&Dt.bump()}const w=n.curve.pos[f.index].y;this.grounded&&(this.pos.y=On(this.pos.y,w,1-Math.pow(1e-4,t)),this.pitch=On(this.pitch,Sn(-o*.12+(this.boostTime>0?-.08:0),-.25,.25),.15));for(const R of s){if(R===this)continue;const A=this.pos.x-R.pos.x,E=this.pos.z-R.pos.z,C=A*A+E*E;if(C<6.25&&Math.abs(this.pos.y-R.pos.y)<3){const V=Math.sqrt(C)||.01,v=(2.5-V)/2.5,S=A/V,N=E/V,k=R.stats.weight/(this.stats.weight+R.stats.weight);this.pos.x+=S*v*k,this.pos.z+=N*v*k,this.knock.x+=S*v*6*k,this.knock.z+=N*v*6*k,this.starTime>0&&R.starTime===0&&R.hit({kind:"spin"})}}this.racer.passive==="clean-run"&&(this.offroadAmt<.05&&this.spinTime===0&&this.slowTime===0?(this.cleanTime+=t,this.cleanTime>3&&(this.cleanBonus=On(this.cleanBonus,8,.05))):(this.cleanTime=0,this.cleanBonus=On(this.cleanBonus,0,.2))),this.syncVisual(t)}coastToStop(t,e){this.speed*=Math.pow(.2,t);const n=Nc.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.pos.addScaledVector(n,this.speed*t);const s=e.curve.project(this.pos,this.hintIndex,20);this.hintIndex=s.index,this.pos.y=On(this.pos.y,e.curve.pos[s.index].y,.2)}updateDrift(t,e,n,s){const r=this.grounded&&this.speed>this.stats.maxSpeed*.35&&n>=0;if(e.drift&&r){if(this.driftDir===0&&Math.abs(s)>.15&&(this.driftDir=s>0?1:-1,this.isPlayer&&Dt.drift()),this.driftDir!==0){const a=this.stats.driftRate*(this.racer.passive==="fast-drift"?1.35:1);this.driftCharge+=a*t,this.driftCharge>bi[3]+1.1&&(this.driftCharge=bi[2]+.05);const o=this.driftCharge>=bi[3]?3:this.driftCharge>=bi[2]?2:this.driftCharge>=bi[1]?1:this.driftCharge>=bi[0]?0:-1;o!==this.driftTier&&o>=0&&this.isPlayer&&Dt.spark(o),this.driftTier=o}}else if(this.driftDir!==0){const a=this.driftTier;if(a>=0){const o=Bg[a];this.applyBoost(o.t*this.stats.boostDur,Math.max(this.boostPow,o.p)),this.isPlayer&&Dt.boost(),this.racer.passive==="drift-cloak"&&a>=1&&(this.cloakTime=Math.max(this.cloakTime,1.2))}this.driftDir=0,this.driftCharge=0,this.driftTier=-1}this.wasDrift=e.drift,this.wasDrift}handleRampsAndAir(t,e,n){if(this.grounded)for(let s=0;s<n.ramps.length;s++){const r=n.ramps[s];this.pos.distanceToSquared(r.pos)<49&&this.forwardDot(r.dir)>.2&&this.speed>20&&(this.jumpArmed.has(s)||(this.vy=9+Math.min(this.speed,90)*.14,this.grounded=!1,this.trickDone=!1,this.jumpArmed.add(s),setTimeout(()=>this.jumpArmed.delete(s),1500)))}else{const s=this.moonTime>0?12:26;this.vy-=s*t,this.pos.y+=this.vy*t,e.trick&&!this.trickActive&&!this.trickDone&&(this.trickActive=!0,this.trickDone=!0,this.trickSpin=0,this.isPlayer&&Dt.trick()),this.trickActive&&(this.trickSpin+=t*10,this.trickSpin>Math.PI*2&&(this.trickActive=!1));const r=n.curve.project(this.pos,this.hintIndex,40),a=n.curve.pos[r.index].y;if(this.pos.y<=a&&(this.pos.y=a,this.vy=0,this.grounded=!0,this.trickActive=!1,this.trickDone)){const o=this.racer.passive==="trick-boost"?1.35:1;this.applyBoost(.7*o,Math.max(this.boostPow,1.2)),this.isPlayer&&Dt.land()}}}forwardDot(t){return Math.sin(this.yaw)*t.x+Math.cos(this.yaw)*t.z}syncVisual(t){const e=this.visual.group;e.position.copy(this.pos);const n=this.driftDir!==0?-this.driftDir*.35:Sn(-this.lastSteerVis*.15,-.2,.2);this.bank=On(this.bank,n,.2),e.rotation.set(this.pitch,this.yaw,this.bank),this.trickActive&&(e.rotation.x=this.pitch+this.trickSpin),this.spinTime>0&&(e.rotation.y=this.yaw+this.spinTime*18);const s=this.speed*t*2.2;for(const l of this.visual.wheels)l.rotation.x+=s;const r=this.boostTime>0;this.visual.boostFlame.visible=r,r&&this.visual.boostFlame.scale.setScalar(.7+Math.random()*.6);const a=this.visual.driftSparks;this.driftDir!==0&&this.driftTier>=0?(a.visible=!0,a.material.color.setHex(zg[this.driftTier])):a.visible=!1,this.visual.shieldMesh.visible=this.shieldTime>0;const o=this.starTime>0;this.visual.starAura.visible=o,o?this.visual.body.material.emissive.setHSL(performance.now()/300%1,1,.5):this.visual.body.material.emissive.setHex(0);const c=this.cloakTime>0?.35:1;this.visual.body.material.opacity=c,this.visual.body.material.transparent=c<1}setSteerVis(t){this.lastSteerVis=t}get speed01(){return Sn(Math.abs(this.speed)/this.stats.maxSpeed,0,1)}}const Hg=i=>{for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i},Fc={rookie:{skill:.35,governor:.9,mistakeRate:.05},normal:{skill:.6,governor:.97,mistakeRate:.03},pro:{skill:.82,governor:1.01,mistakeRate:.015},master:{skill:.95,governor:1.04,mistakeRate:.008}};class Oc{constructor(t,e,n){O(this,"kart");O(this,"style");O(this,"diff");O(this,"lane");O(this,"noise",0);O(this,"noiseTarget",0);O(this,"mistakeTime",0);this.kart=t,this.style=e,this.diff=n,this.lane=e==="shortcut"?-.4:e==="aggressive"?-.2:(Math.random()-.5)*.5,t.stats.maxSpeed*=n.governor,t.stats.accel*=.9+n.skill*.2}control(t,e){const n=this.kart;this.noise+=(this.noiseTarget-this.noise)*Math.min(1,t*3),Math.random()<.02&&(this.noiseTarget=(Math.random()-.5)*(1-this.diff.skill)*.8),this.mistakeTime=Math.max(0,this.mistakeTime-t),this.mistakeTime===0&&Math.random()<this.diff.mistakeRate&&(this.mistakeTime=.4+Math.random()*.5);const s=n.speed01,r=.012+s*.03,a=e.frameAt(n.trackT+r),o=this.lane*e.width,c=a.pos.clone().addScaledVector(a.nrm,o),l=new P(c.x-n.pos.x,0,c.z-n.pos.z),h=Math.atan2(l.x,l.z);let d=Hg(h-n.yaw),u=Math.max(-1,Math.min(1,d*1.6+this.noise+n.inkTime*(Math.random()-.5)));const p=e.frameAt(n.trackT+r+.03),x=1-a.tan.dot(p.tan);let f=1;this.mistakeTime>0?f=.4:x>.06&&this.diff.skill<.6&&(f=.7);const _=x>.05&&s>.45&&this.diff.skill>.4&&Math.abs(d)>.18||n.driftDir!==0&&Math.abs(d)>.08&&s>.4;return{throttle:f,steer:u,drift:_,rear:!1,power:!1,trick:!n.grounded&&Math.random()<.04*this.diff.skill,camera:!1,reset:!1,pause:!1}}}let on=null;class Gg extends Error{}function Wg(){if(on)return on;const i=[{antialias:!0,powerPreference:"high-performance",alpha:!0,stencil:!1,failIfMajorPerformanceCaveat:!1},{antialias:!1,alpha:!0,stencil:!1,failIfMajorPerformanceCaveat:!1},{antialias:!1,alpha:!1,powerPreference:"low-power",failIfMajorPerformanceCaveat:!1}];for(const e of i)try{on=new eg(e);break}catch{}if(!on)throw new Gg("context-failed");on.setClearColor(0,0);const t=on.domElement;return t.addEventListener("webglcontextlost",e=>{e.preventDefault()},!1),t.addEventListener("webglcontextrestored",()=>{},!1),on}function Bl(i,t){const e=Wg();e.setPixelRatio(t),e.setSize(i.clientWidth,i.clientHeight);const n=e.domElement;return n.style.position="absolute",n.style.inset="0",n.style.width="100%",n.style.height="100%",i.appendChild(n),e}function zl(){const i=on?.domElement;i&&i.parentElement&&i.parentElement.removeChild(i),on&&(on.shadowMap.enabled=!1)}const ta=(i,t,e)=>Math.max(t,Math.min(e,i)),kc=(i,t,e)=>i+(t-i)*e;class Xg{constructor(t,e,n){O(this,"opts");O(this,"renderer");O(this,"scene",new yl);O(this,"camera");O(this,"track");O(this,"karts",[]);O(this,"ai",[]);O(this,"player");O(this,"input");O(this,"raf",0);O(this,"last",0);O(this,"acc",0);O(this,"running",!1);O(this,"paused",!1);O(this,"finished",!1);O(this,"state","countdown");O(this,"countdownT",3.999);O(this,"raceMs",0);O(this,"cumT",[]);O(this,"prevT",[]);O(this,"lapOf",[]);O(this,"bestLap",[]);O(this,"lapStart",[]);O(this,"wrongCounter",[]);O(this,"eliminated",new Set);O(this,"elimTimer",0);O(this,"message",null);O(this,"messageT",0);O(this,"driftSeconds",0);O(this,"tricks",0);O(this,"hits",0);O(this,"cleanRun",!0);O(this,"accelPressedAt",-1);O(this,"items",[]);O(this,"hazards",[]);O(this,"projectiles",[]);O(this,"particles");O(this,"camPos",new P);O(this,"camLook",new P);O(this,"camYaw",0);O(this,"fov",62);O(this,"shake",0);O(this,"envTime",0);O(this,"hud");O(this,"onFinish");O(this,"prof");O(this,"ghostSampleTimer",0);O(this,"autopilot",null);O(this,"tick",t=>{if(!this.running)return;this.raf=requestAnimationFrame(this.tick);let e=(t-this.last)/1e3;if(this.last=t,e=Math.min(e,.05),!this.paused){this.acc+=e;const n=1/60;let s=0;for(;this.acc>=n&&s<5;)this.fixed(n),this.acc-=n,s++;this.render(e)}});O(this,"rearToggle",!1);O(this,"graceT",null);O(this,"onResize",()=>{const t=this.opts.container;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)});this.opts=t,this.hud=e,this.onFinish=n,this.input=t.input,this.prof=Pl(t.settings.quality),this.renderer=Bl(t.container,this.prof.pixelRatio),this.renderer.setClearColor(328463,1),this.renderer.shadowMap.enabled=t.settings.shadows&&this.prof.shadowMap>0,this.renderer.shadowMap.type=Hc,this.camera=new He(62,t.container.clientWidth/t.container.clientHeight,.5,this.prof.drawDistance),this.track=new Rg(or(t.trackId),t.settings.quality),t.mirror&&(this.track.group.scale.x=-1),this.scene.add(this.track.group),this.setupWorld(),this.setupKarts(),this.particles=new $g(this.scene,t.settings.particles?Math.floor(400*this.prof.particleScale):0),t.items&&t.mode!=="time"&&this.spawnItems(),window.addEventListener("resize",this.onResize)}setupWorld(){const t=this.track.theme;this.scene.background=new Bt(t.skyBottom),this.scene.fog=new ro(t.fog,t.fogDensity);const e=new Cl(t.skyTop,t.ground,t.night?.75:1.05);this.scene.add(e);const n=new Wa(t.accent,t.night?.35:.25);n.position.set(-100,60,-120),this.scene.add(n);const s=new Wa(16777215,t.night?.9:1.25);if(s.position.set(120,200,80),this.renderer.shadowMap.enabled){s.castShadow=!0,s.shadow.mapSize.set(this.prof.shadowMap,this.prof.shadowMap);const a=this.track.def.scale*1.2;s.shadow.camera.left=-a,s.shadow.camera.right=a,s.shadow.camera.top=a,s.shadow.camera.bottom=-a,s.shadow.camera.far=900,s.shadow.bias=-5e-4}this.scene.add(s);const r=new it(new xe(this.prof.drawDistance*.9,24,16),new Rn({side:Ie,depthWrite:!1,uniforms:{top:{value:new Bt(t.skyTop)},bot:{value:new Bt(t.skyBottom)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vP; uniform vec3 top; uniform vec3 bot; void main(){ float h = normalize(vP).y*0.5+0.5; gl_FragColor = vec4(mix(bot, top, h), 1.0); }"}));if(this.scene.add(r),t.night){const a=new de,o=600,c=new Float32Array(o*3);for(let l=0;l<o;l++){const h=new P().randomDirection().multiplyScalar(this.prof.drawDistance*.7);c[l*3]=h.x,c[l*3+1]=Math.abs(h.y),c[l*3+2]=h.z}a.setAttribute("position",new Fe(c,3)),this.scene.add(new ao(a,new ar({color:16777215,size:1.5})))}}setupKarts(){const t=1+this.opts.aiCount,e=[this.opts.playerRacerId],n=(this.opts.fieldRacerIds??ri.filter(o=>!o.locked).map(o=>o.id)).filter(o=>o!==this.opts.playerRacerId);let s=0;for(;e.length<t;)e.push(n[s%n.length]),s++;const r=["aggressive","defensive","shortcut","drifter","itemPro","risky","consistent","comeback"],a=Fc[this.opts.difficulty];for(let o=0;o<t;o++){const c=o===0,l=Vi(e[o]),h=c?this.opts.playerVehicleId:this.pickVehicleFor(l),d=c?this.opts.kit:{vehicleId:h,paint:-1,trail:0,wheels:o%4},u=new Vg(l,Il(h),d,c),p=Math.floor(o/2),g=o%2,x=.004+p*.006,f=(g===0?-1:1)*this.track.width*.45;u.resetTo(this.track,x,f),this.scene.add(u.visual.group),this.karts.push(u),this.ai.push(c?null:new Oc(u,r[o%r.length],a)),this.cumT.push(0),this.prevT.push(u.trackT),this.lapOf.push(0),this.bestLap.push(1/0),this.lapStart.push(0),this.wrongCounter.push(0),c&&(this.player=u)}this.player.assist=this.opts.settings.steerAssist}pickVehicleFor(t){return{leo:"sport",kiki:"hover",finn:"aqua",zara:"truck",bruno:"monster",pip:"ice",ruby:"sport",dash:"neon",luna:"lunar",rocky:"shell",nova:"candy",shadow:"shadow"}[t.id]??"sport"}spawnItems(){const t=[.18,.38,.58,.78,.95];for(const e of t){const n=this.track.frameAt(e);for(const s of[-.5,0,.5]){const r=n.pos.clone().addScaledVector(n.nrm,s*this.track.width);r.y+=2;const a=new it(new ho(.8,.8,4,8),new Ft({color:16777215,emissive:this.track.theme.accent,emissiveIntensity:.8,transparent:!0,opacity:.9}));a.position.copy(r),this.scene.add(a),this.items.push({mesh:a,pos:r,taken:0})}}}start(){this.running=!0,this.last=performance.now(),cr(),Ug(),Dc(this.track.theme.music),Uc(1),this.raf=requestAnimationFrame(this.tick)}enableAutopilot(){this.autopilot=new Oc(this.player,"consistent",Fc.pro)}debugTick(t){this.paused||(this.fixed(t),this.render(t))}debugInfo(){return{state:this.state,countdown:this.countdownT,playerSpeed:Math.round(this.player.speed),playerPlace:this.player.place,cumT:this.cumT.map(t=>+t.toFixed(3)),speeds:this.karts.map(t=>Math.round(t.speed)),finished:this.finished}}fixed(t){this.state==="countdown"?this.updateCountdown(t):this.state==="racing"&&(this.raceMs+=t*1e3);const e=this.state==="racing",n=this.input.sample();if(n.pause){this.togglePause();return}n.camera&&(this.rearToggle=!this.rearToggle),n.reset&&e&&this.player.resetTo(this.track,this.player.trackT,0),n.power&&e&&this.usePower(this.player),this.state==="countdown"&&n.throttle>0&&this.accelPressedAt<0&&(this.accelPressedAt=this.countdownT);for(let r=0;r<this.karts.length;r++){const a=this.karts[r];if(this.eliminated.has(r))continue;let o=r===0?this.autopilot?this.autopilot.control(t,this.track):n:this.ai[r].control(t,this.track);e||(o={...o,throttle:0,steer:r===0?o.steer:0,drift:!1}),r===0&&a.setSteerVis(o.steer),a.rubber=e?this.rubberFor(r):1,a.update(t,o,this.track,this.karts),e&&r!==0&&a.heldPower&&Math.random()<.01&&this.usePower(a),e&&(this.updateProgress(r,t),a.driftDir!==0&&r===0&&(this.driftSeconds+=t),r===0&&a.trickActive)}e&&(this.updateItems(),this.updateHazards(t),this.updateProjectiles(t),this.rankPositions(),this.opts.mode==="elim"&&this.updateElimination(t),this.checkFinish());const s=this.lapDisplay(0);Uc(s>=this.opts.laps?1.35:1),this.messageT=Math.max(0,this.messageT-t),this.messageT===0&&(this.message=null),this.emitHud()}updateCountdown(t){const e=Math.ceil(this.countdownT);this.countdownT-=t;const n=Math.ceil(this.countdownT);if(n!==e&&n>=1&&n<=3&&Dt.countdownBeep(!1),this.countdownT<=0){this.state="racing",Dt.go();const s=this.accelPressedAt;s>0&&(s<.35?(this.player.applyBoost(1.6,this.player.stats.boostMul),this.flash("PERFECT START!"),Dt.boost()):s<.9?(this.player.applyBoost(.8,1.2),this.flash("Good start!")):(this.player.spinTime=.5,this.flash("Too early…")));for(let r=0;r<this.karts.length;r++)this.lapStart[r]=0}}updateProgress(t,e){const n=this.karts[t];let s=n.trackT-this.prevT[t];s>.5?s-=1:s<-.5&&(s+=1),this.cumT[t]+=s,this.prevT[t]=n.trackT,s<-5e-4?this.wrongCounter[t]=Math.min(30,this.wrongCounter[t]+1):this.wrongCounter[t]=Math.max(0,this.wrongCounter[t]-2),n.wrongWay=this.wrongCounter[t]>8;const r=Math.floor(Math.max(0,this.cumT[t]));if(r>this.lapOf[t]){const a=this.raceMs-this.lapStart[t];this.bestLap[t]=Math.min(this.bestLap[t],a),this.lapStart[t]=this.raceMs,this.lapOf[t]=r,t===0&&r===this.opts.laps-1&&this.flash("FINAL LAP!")}n.lap=r}lapDisplay(t){return ta(Math.floor(Math.max(0,this.cumT[t]))+1,1,this.opts.laps)}rubberFor(t){if(this.karts.length<3)return 1;const e=[...this.cumT].sort((s,r)=>s-r)[Math.floor(this.karts.length/2)],n=this.cumT[t]-e;return ta(1-n*.12,.95,1.06)}rankPositions(){this.karts.map((e,n)=>({i:n,p:this.karts[n].finished?1e9+this.karts[n].finishMs*-1:this.cumT[n]})).sort((e,n)=>(this.karts[n.i].finished?this.karts[n.i].finishMs:-n.p)-(this.karts[e.i].finished?this.karts[e.i].finishMs:-e.p)),this.karts.map((e,n)=>n).sort((e,n)=>{const s=this.karts[e].finished,r=this.karts[n].finished;return s&&r?this.karts[e].finishMs-this.karts[n].finishMs:s?-1:r?1:this.cumT[n]-this.cumT[e]}).forEach((e,n)=>{this.karts[e].place=n+1})}updateItems(){const t=this.raceMs;for(const e of this.items){if(e.taken>0){t-e.taken>5e3&&(e.taken=0,e.mesh.visible=!0);continue}e.mesh.rotation.y+=.05;for(const n of this.karts)if(!n.heldPower&&n.pos.distanceToSquared(e.pos)<9){const s=(n.place-1)/Math.max(1,this.karts.length-1);n.heldPower=Tg(s,Math.random),e.taken=t,e.mesh.visible=!1,n.isPlayer&&Dt.pickup();break}}}usePower(t){const e=t.heldPower;if(!e)return;t.heldPower=null,t.isPlayer&&Dt.usePower();const n=this.karts.indexOf(t);switch(e){case"carrot":{t.applyBoost(1.6,t.stats.boostMul),t.racer.passive==="double-boost"&&Math.random()<.5&&setTimeout(()=>t.applyBoost(1.2,t.stats.boostMul),900),t.isPlayer&&Dt.boost();break}case"star":t.giveStar(7);break;case"shield":t.giveShield(6);break;case"banana":this.dropHazard("banana",t,n);break;case"jelly":this.dropHazard("jelly",t,n);break;case"falcon":this.fireFalcon(t,n);break;case"roar":this.roar(t);break;case"ink":this.useInk(t);break}}dropHazard(t,e,n){const s=new P(Math.sin(e.yaw),0,Math.cos(e.yaw)).multiplyScalar(-4),r=e.pos.clone().add(s);r.y+=.3;const a=t==="banana"?new it(new hs(.7,.28,8,12),new Ft({color:16765503,emissive:5587968,emissiveIntensity:.3})):new it(new xe(1.1,10,8),new Ft({color:12078591,transparent:!0,opacity:.75,emissive:8073207,emissiveIntensity:.4}));a.position.copy(r),this.scene.add(a),this.hazards.push({kind:t,mesh:a,pos:r,ownerId:n,life:20})}updateHazards(t){for(let e=this.hazards.length-1;e>=0;e--){const n=this.hazards[e];n.life-=t,n.mesh.rotation.y+=t*2;let s=!1;for(let r=0;r<this.karts.length;r++){const a=this.karts[r];a.pos.distanceToSquared(n.pos)<4&&Math.abs(a.pos.y-n.pos.y)<3&&(n.kind==="banana"?(a.hit({kind:"spin"})&&a.isPlayer&&this.registerHit(a),s=!0):a.hit({kind:"slow"}))}(s||n.life<=0)&&(this.scene.remove(n.mesh),this.hazards.splice(e,1))}}fireFalcon(t,e){const n=new it(new tn(.5,1.6,8),new Ft({color:13690623,emissive:8961023,emissiveIntensity:.8}));n.rotation.x=Math.PI/2,this.scene.add(n),this.projectiles.push({kind:"falcon",mesh:n,t:t.trackT,ownerId:e,life:5})}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){const n=this.projectiles[e];n.life-=t,n.t=(n.t+t*.09)%1;const s=this.track.frameAt(n.t);n.mesh.position.copy(s.pos),n.mesh.position.y+=1.5,n.mesh.lookAt(s.pos.clone().add(s.tan));let r=n.life<=0;for(let a=0;a<this.karts.length;a++){if(a===n.ownerId)continue;const o=this.karts[a];if(o.pos.distanceToSquared(n.mesh.position)<12){o.hit({kind:"spin"})&&o.isPlayer&&this.registerHit(o),r=!0;break}}r&&(this.scene.remove(n.mesh),this.projectiles.splice(e,1))}}roar(t){Dt.hit();for(const e of this.karts)if(e!==t&&t.pos.distanceToSquared(e.pos)<400){const n=e.pos.clone().sub(t.pos).setY(0).normalize();e.hit({kind:"push",dir:n,power:26})}}useInk(t){for(const e of this.karts)e!==t&&this.cumT[this.karts.indexOf(e)]>this.cumT[this.karts.indexOf(t)]&&(e.inkTime=Math.max(e.inkTime,2.2))}registerHit(t){t.isPlayer&&(this.hits++,this.cleanRun=!1,this.shake=.4)}updateElimination(t){this.elimTimer-=t;const e=this.karts.map((n,s)=>s).filter(n=>!this.eliminated.has(n));if(!(e.length<=1)&&this.elimTimer<=0){this.elimTimer=12;const n=e.sort((s,r)=>this.cumT[s]-this.cumT[r])[0];this.eliminated.add(n),this.karts[n].visual.group.visible=!1,n===0?(this.flash("You were eliminated!"),this.endRaceForPlayerElim()):this.flash(`${this.karts[n].racer.name} eliminated!`),e.length-1===1&&this.flash("WINNER!")}}endRaceForPlayerElim(){this.player.finished=!0,this.player.finishMs=this.raceMs,this.finish()}checkFinish(){for(let e=0;e<this.karts.length;e++){const n=this.karts[e];!n.finished&&this.cumT[e]>=this.opts.laps&&(n.finished=!0,n.finishMs=this.raceMs,e===0&&this.flash("FINISH!"))}const t=this.player.finished;if(this.opts.mode==="time"&&t){this.finish();return}t&&this.state==="racing"&&(this.karts.every((n,s)=>n.finished||this.eliminated.has(s))?this.finish():this.graceT=this.graceT??3),this.graceT!=null&&(this.graceT-=1/60,this.graceT<=0&&this.finish())}finish(){if(this.state==="done")return;this.state="done",this.finished=!0;const t=this.karts.map((s,r)=>r).sort((s,r)=>{const a=this.karts[s].finished,o=this.karts[r].finished;return a&&o?this.karts[s].finishMs-this.karts[r].finishMs:a?-1:o?1:this.cumT[r]-this.cumT[s]}),e={order:t.map((s,r)=>({racer:this.karts[s].racer,ms:this.karts[s].finished?this.karts[s].finishMs:this.raceMs+r*800,isPlayer:s===0,place:r+1})),playerPlace:t.indexOf(0)+1,playerMs:this.player.finished?this.player.finishMs:this.raceMs,bestLapMs:this.bestLap[0]===1/0?this.raceMs:this.bestLap[0],coins:0,xp:0,driftSeconds:this.driftSeconds,tricks:this.tricks,hits:this.hits,clean:this.cleanRun&&this.player.place===1},n=e.playerPlace;e.coins=Math.max(20,Math.round((this.karts.length-n+1)*25+this.driftSeconds*3)),e.xp=Math.round(120-n*8+this.driftSeconds*2),Lc(),n===1?Dt.win():Dt.lose(),this.onFinish(e)}render(t){const e=this.player,n=this.rearToggle;this.camYaw=qg(this.camYaw,e.yaw,1-Math.pow(.0022,t));const s=new P(Math.sin(this.camYaw),0,Math.cos(this.camYaw)),r=9,a=4.2,o=9,c=e.pos.clone().addScaledVector(s,n?r:-r).add(new P(0,a,0));this.camPos.lerp(c,1-Math.pow(6e-4,t)),e.grounded||(this.camPos.y=kc(this.camPos.y,e.pos.y+a+2,.1));const l=e.pos.clone().addScaledVector(s,n?-o:o).add(new P(0,1.6,0));this.camLook.lerp(l,1-Math.pow(.0018,t)),this.shake=Math.max(0,this.shake-t);const h=this.camPos.clone();this.shake>0&&this.opts.settings.screenShake&&(h.x+=(Math.random()-.5)*this.shake*3,h.y+=(Math.random()-.5)*this.shake*3),this.camera.position.copy(h),this.camera.lookAt(this.camLook);const d=60+e.speed01*8+(e.boostTime>0?10:0);if(this.fov=kc(this.fov,d,.1),this.camera.fov=this.fov,this.camera.updateProjectionMatrix(),this.envTime+=t,this.track.group.children.forEach(u=>{const p=u.userData;p?.spin&&(u.rotation.y+=t),p?.bob&&(u.position.y=p.bob.base+Math.sin(this.envTime*1.2+p.bob.phase)*p.bob.amp,u.rotation.y+=p.bob.spin*t)}),this.particles.max>0){for(const u of this.karts){if(u.finished)continue;const p=u.pos.clone().addScaledVector(new P(Math.sin(u.yaw),0,Math.cos(u.yaw)),-1.6);u.driftDir!==0&&u.driftTier>=0&&Math.random()<.6&&this.particles.spawn(p,16777215,.5),u.offroadAmt>.2&&u.speed01>.3&&Math.random()<.5&&this.particles.spawn(p,this.track.theme.offroad,.6),u.boostTime>0&&Math.random()<.5&&this.particles.spawn(p,this.track.theme.accent,.4)}this.particles.update(t)}Ng(e.speed01,e.boostTime>0),this.renderer.render(this.scene,this.camera)}emitHud(){const t=this.player,e=this.karts.map((n,s)=>({t:n.trackT,color:n.racer.color,isPlayer:s===0}));this.hud({place:t.place,total:this.karts.length,lap:this.lapDisplay(0),laps:this.opts.laps,speed:Math.round(Math.abs(t.speed)*2.4),driftTier:t.driftDir!==0?t.driftTier:-1,power:t.heldPower??null,timeMs:this.raceMs,bestLapMs:this.bestLap[0]===1/0?null:this.bestLap[0],finalLap:this.lapDisplay(0)>=this.opts.laps,wrongWay:t.wrongWay,countdown:this.state==="countdown"?Math.ceil(this.countdownT)>0?String(Math.min(3,Math.ceil(this.countdownT))):"GO!":null,message:this.message,positions:e,playerT:t.trackT,ink:t.inkTime,boostBar:t.boostTime>0?1:t.driftDir!==0?ta(t.driftCharge/2.6,0,1):0,eliminatedNext:this.opts.mode==="elim"&&this.state==="racing"?`Elim in ${Math.ceil(this.elimTimer)}s`:null})}flash(t){this.message=t,this.messageT=2}togglePause(){this.paused=!this.paused,this.paused?$a():Dc(this.track.theme.music)}setPaused(t){t!==this.paused&&this.togglePause()}dispose(){this.running=!1,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),Lc(),$a(),this.track.dispose(),this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose()}),zl()}}function qg(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e}class $g{constructor(t,e){O(this,"max");O(this,"pts",null);O(this,"posArr");O(this,"colArr");O(this,"vel",[]);O(this,"life",[]);O(this,"head",0);if(this.max=e,this.posArr=new Float32Array(Math.max(1,e)*3),this.colArr=new Float32Array(Math.max(1,e)*3),e<=0)return;for(let s=0;s<e;s++)this.vel.push(new P),this.life.push(0),this.posArr[s*3+1]=-999;const n=new de;n.setAttribute("position",new Fe(this.posArr,3)),n.setAttribute("color",new Fe(this.colArr,3)),this.pts=new ao(n,new ar({size:.8,vertexColors:!0,transparent:!0,opacity:.85})),this.pts.frustumCulled=!1,t.add(this.pts)}spawn(t,e,n){if(this.max<=0)return;const s=this.head;this.head=(this.head+1)%this.max,this.posArr[s*3]=t.x,this.posArr[s*3+1]=t.y+.3,this.posArr[s*3+2]=t.z,this.vel[s].set((Math.random()-.5)*n,Math.random()*n+.5,(Math.random()-.5)*n);const r=new Bt(e);this.colArr[s*3]=r.r,this.colArr[s*3+1]=r.g,this.colArr[s*3+2]=r.b,this.life[s]=.7}update(t){if(this.pts){for(let e=0;e<this.max;e++)this.life[e]<=0||(this.life[e]-=t,this.posArr[e*3]+=this.vel[e].x*t,this.posArr[e*3+1]+=this.vel[e].y*t,this.posArr[e*3+2]+=this.vel[e].z*t,this.vel[e].y-=t*4,this.life[e]<=0&&(this.posArr[e*3+1]=-999));this.pts.geometry.getAttribute("position").needsUpdate=!0,this.pts.geometry.getAttribute("color").needsUpdate=!0}}}class Yg{constructor(t,e,n){O(this,"root");O(this,"el",{});O(this,"mini");O(this,"mctx");O(this,"outline",[]);O(this,"bounds",{minX:0,maxX:1,minZ:0,maxZ:1});O(this,"lastPower",null);O(this,"onPause",()=>{});O(this,"touchRoot");this.root=document.createElement("div"),this.root.id="hud",this.root.innerHTML=`
      <div class="hud-tl">
        <div class="hud-place" data-place>1<small>/8</small></div>
        <div class="hud-lap" data-lap>LAP 1/3</div>
      </div>
      <div class="hud-tr">
        <button class="icon-btn hud-pauseb" data-pause aria-label="Pause">⏸</button>
        <div class="hud-time" data-time>0:00.00</div>
        <div class="hud-time" data-best style="opacity:.75">BEST --</div>
      </div>
      <div class="hud-power" data-power></div>
      <div class="hud-speed"><span class="n" data-speed>0</span> <span class="u">KM/H</span></div>
      <div class="hud-drift"><div class="fill" data-drift></div></div>
      <canvas class="minimap" data-mini width="256" height="256"></canvas>
      <div class="hud-center"><div class="countdown hidden" data-cd></div></div>
      <div class="hud-controls hidden" data-controls></div>
      <div class="flash-msg hidden" data-flash></div>
      <div class="warn hidden" data-warn>WRONG WAY!</div>
      <div class="ink-overlay" data-ink style="opacity:0"></div>
    `,t.appendChild(this.root);const s=r=>this.root.querySelector(r);this.el={place:s("[data-place]"),lap:s("[data-lap]"),time:s("[data-time]"),best:s("[data-best]"),power:s("[data-power]"),speed:s("[data-speed]"),drift:s("[data-drift]"),cd:s("[data-cd]"),flash:s("[data-flash]"),warn:s("[data-warn]"),ink:s("[data-ink]"),controls:s("[data-controls]")},this.el.controls.innerHTML=n?"<b>How to drive</b><span>🟢 <b>GAS</b> to go &nbsp;·&nbsp; ◄ ► to steer &nbsp;·&nbsp; hold <b>DRIFT</b> round corners for a speed boost &nbsp;·&nbsp; <b>ITEM</b> to use a power-up</span>":"<b>How to drive</b><span><b>W</b>/↑ Accelerate &nbsp;·&nbsp; <b>A D</b>/← → Steer &nbsp;·&nbsp; <b>Space</b> Drift (hold in corners for a boost) &nbsp;·&nbsp; <b>Shift</b> Use item &nbsp;·&nbsp; <b>E</b> Trick in the air</span>",s("[data-pause]").addEventListener("click",()=>this.onPause()),this.mini=s("[data-mini]"),this.mctx=this.mini.getContext("2d"),this.buildTouch(t,e,n)}setTrackOutline(t){const e=Math.max(1,Math.floor(t.length/90));this.outline=t.filter((o,c)=>c%e===0);let n=1/0,s=-1/0,r=1/0,a=-1/0;for(const o of this.outline)n=Math.min(n,o.x),s=Math.max(s,o.x),r=Math.min(r,o.z),a=Math.max(a,o.z);this.bounds={minX:n,maxX:s,minZ:r,maxZ:a}}mapPt(t,e,n,s,r=14){const{minX:a,maxX:o,minZ:c,maxZ:l}=this.bounds,h=o-a||1,d=l-c||1,u=Math.min((n-r*2)/h,(s-r*2)/d);return{x:r+(t-a)*u+(n-r*2-h*u)/2,y:r+(e-c)*u+(s-r*2-d*u)/2}}fmt(t){if(t==null||!isFinite(t))return"--";const e=Math.max(0,t),n=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3),r=Math.floor(e%1e3/10);return`${n}:${s.toString().padStart(2,"0")}.${r.toString().padStart(2,"0")}`}update(t){this.el.place.innerHTML=`${t.place}<small>/${t.total}</small>`,this.el.lap.textContent=`LAP ${t.lap}/${t.laps}`,t.finalLap&&(this.el.lap.style.color="var(--gold)"),this.el.time.textContent=this.fmt(t.timeMs),this.el.best.textContent="BEST "+this.fmt(t.bestLapMs??NaN),this.el.speed.textContent=String(t.speed);const e=this.el.power;t.power?(e.textContent=Ul[t.power].icon,t.power!==this.lastPower&&(e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse"))):e.textContent="",this.lastPower=t.power;const n=this.el.drift;n.style.width=`${Math.round(t.boostBar*100)}%`;const s=["#66aaff","#b060ff","#ffd23f","#ff5db1"];n.style.background=t.driftTier>=0?s[t.driftTier]:"linear-gradient(90deg,var(--cyan),var(--magenta))",t.countdown?(this.el.cd.classList.remove("hidden"),this.el.cd.textContent=t.countdown,this.el.cd.classList.toggle("go",t.countdown==="GO!")):this.el.cd.classList.add("hidden"),this.el.controls.classList.toggle("hidden",!t.countdown),t.message?(this.el.flash.classList.remove("hidden"),this.el.flash.textContent!==t.message&&(this.el.flash.textContent=t.message,this.el.flash.style.animation="none",this.el.flash.offsetWidth,this.el.flash.style.animation="")):this.el.flash.classList.add("hidden"),this.el.warn.classList.toggle("hidden",!t.wrongWay),this.el.ink.style.opacity=String(Math.min(1,t.ink/2)),this.drawMini(t)}drawMini(t){const e=this.mctx,n=this.mini.width,s=this.mini.height;if(e.clearRect(0,0,n,s),!(this.outline.length<2)){e.lineWidth=10,e.strokeStyle="rgba(10,14,30,0.7)",e.lineJoin="round",e.beginPath(),this.outline.forEach((r,a)=>{const o=this.mapPt(r.x,r.z,n,s);a?e.lineTo(o.x,o.y):e.moveTo(o.x,o.y)}),e.closePath(),e.stroke(),e.lineWidth=5,e.strokeStyle="rgba(0,229,255,0.85)",e.stroke();for(const r of t.positions){const a=Math.floor(r.t*this.outline.length)%this.outline.length,o=this.outline[a];if(!o)continue;const c=this.mapPt(o.x,o.z,n,s);e.beginPath(),e.arc(c.x,c.y,r.isPlayer?9:6,0,Math.PI*2),e.fillStyle=r.isPlayer?"#fff":"#"+r.color.toString(16).padStart(6,"0"),e.fill(),r.isPlayer&&(e.lineWidth=3,e.strokeStyle="#00e5ff",e.stroke())}}}buildTouch(t,e,n){const s=document.createElement("div");s.className="touch"+(n?" on":""),s.innerHTML=`
      <button class="tc steer left" data-t="left">◄</button>
      <button class="tc steer rightsteer" data-t="right">►</button>
      <button class="tc accel" data-t="accel">GAS</button>
      <button class="tc brake" data-t="brake">BRK</button>
      <button class="tc drift" data-t="drift">DRIFT</button>
      <button class="tc power" data-t="power">ITEM</button>
      <button class="tc trick" data-t="trick">TRICK</button>
    `,t.appendChild(s),this.touchRoot=s;const r=(o,c)=>{const l=d=>{d.preventDefault(),o.classList.add("held"),e.setTouch(c,!0)},h=d=>{d.preventDefault(),o.classList.remove("held"),e.setTouch(c,!1)};o.addEventListener("touchstart",l,{passive:!1}),o.addEventListener("touchend",h),o.addEventListener("touchcancel",h),o.addEventListener("mousedown",l),o.addEventListener("mouseup",h),o.addEventListener("mouseleave",h)},a=(o,c)=>{const l=h=>{h.preventDefault(),e.fireTouch(c)};o.addEventListener("touchstart",l,{passive:!1}),o.addEventListener("mousedown",l)};s.querySelectorAll("[data-t]").forEach(o=>{const c=o.dataset.t;c==="power"||c==="trick"?a(o,c):r(o,c)})}setTouchVisible(t){this.touchRoot?.classList.toggle("on",t)}setSimpleTouch(t){this.touchRoot?.classList.toggle("simple",t)}dispose(){this.root.remove(),this.touchRoot?.remove()}}class Kg{constructor(){O(this,"keys",new Set);O(this,"touch",{accel:!1,brake:!1,left:!1,right:!1,drift:!1,rear:!1});O(this,"edges",{power:!1,trick:!1,camera:!1,reset:!1,pause:!1});O(this,"autoAccel",!1);O(this,"tilt",{enabled:!1,x:0});O(this,"onKey");O(this,"onKeyUp");O(this,"onTilt");O(this,"_analogSteer",null);O(this,"padPrev",new Set);this.onKey=t=>{const e=t.key.toLowerCase();[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(e)&&t.preventDefault(),this.keys.has(e)||(e==="shift"&&(this.edges.power=!0),e==="e"&&(this.edges.trick=!0),e==="c"&&(this.edges.camera=!0),e==="r"&&(this.edges.reset=!0),(e==="escape"||e==="p")&&(this.edges.pause=!0)),this.keys.add(e)},this.onKeyUp=t=>this.keys.delete(t.key.toLowerCase()),this.onTilt=t=>{this.tilt.enabled&&t.gamma!=null&&(this.tilt.x=Math.max(-1,Math.min(1,t.gamma/30)))},window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("deviceorientation",this.onTilt)}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("deviceorientation",this.onTilt)}setTouch(t,e){this.touch[t]=e}fireTouch(t){this.edges[t]=!0}setSteerAnalog(t){this.touch.left=t<-.05,this.touch.right=t>.05,this._analogSteer=t}pollPad(){const t=navigator.getGamepads?.()??[],e=Array.from(t).find(h=>h);if(!e)return{};const n=[],s=Math.abs(e.axes[0]??0)>.12?e.axes[0]:0,r=e.buttons[7]?.value??0,a=e.buttons[6]?.value??0,o=r>.05?r:a>.05?-a:0,c=(e.buttons[5]?.pressed||e.buttons[4]?.pressed)??!1,l=e.buttons[3]?.pressed??!1;return e.buttons[0]?.pressed&&n.push("power"),(e.buttons[1]?.pressed||e.buttons[2]?.pressed)&&n.push("trick"),e.buttons[9]?.pressed&&n.push("pause"),{throttle:o,steer:s,drift:c,rear:l,edges:n}}sample(){const t=this.keys;let e=0,n=0;(t.has("w")||t.has("arrowup")||this.touch.accel)&&(e+=1),(t.has("s")||t.has("arrowdown")||this.touch.brake)&&(e-=1),this.autoAccel&&e===0&&(e=1),(t.has("a")||t.has("arrowleft")||this.touch.left)&&(n-=1),(t.has("d")||t.has("arrowright")||this.touch.right)&&(n+=1),this._analogSteer!=null&&(n=this._analogSteer),this.tilt.enabled&&(n=this.tilt.x);let s=t.has(" ")||this.touch.drift,r=t.has("b")||this.touch.rear;const a=this.pollPad();if(a.throttle&&(e=a.throttle),a.steer&&(n=a.steer),a.drift&&(s=!0),a.rear&&(r=!0),a.edges){for(const c of a.edges)this.padPrev.has(c)||(this.edges[c]=!0);this.padPrev=new Set(a.edges)}const o={throttle:Math.max(-1,Math.min(1,e)),steer:Math.max(-1,Math.min(1,n)),drift:s,rear:r,power:this.edges.power,trick:this.edges.trick,camera:this.edges.camera,reset:this.edges.reset,pause:this.edges.pause};return this.edges={power:!1,trick:!1,camera:!1,reset:!1,pause:!1},o}}const tr=document.getElementById("app"),dt=wg(),qe=new Kg;qe.autoAccel=dt.settings.autoAccel;const ea="ontouchstart"in window||navigator.maxTouchPoints>0,jg=[15,12,10,8,6,4,2,1];window.addEventListener("pointerdown",()=>cr(),{once:!0});function Bc(i,t="portrait"){return`<span class="${t}"><img src="./racers/${i.id}.png" alt="${i.name}" onerror="this.replaceWith(document.createTextNode('${i.emoji}'))"></span>`}function ie(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}function Pe(i){tr.innerHTML="",tr.appendChild(i)}function Ge(){return`<div class="grid-bg"></div>
    <div class="glowblob" style="width:360px;height:360px;background:#ff2fb0;left:-80px;top:-60px"></div>
    <div class="glowblob" style="width:420px;height:420px;background:#00e5ff;right:-120px;bottom:-80px"></div>`}function Vl(i){return[["Speed",i.speed],["Accel",i.accel],["Handling",i.handling],["Weight",i.weight],["Drift",i.drift],["Boost",i.boost]].map(([e,n])=>`<div class="statbar"><span>${e}</span><div class="track"><div class="fill" style="width:${n*10}%"></div></div></div>`).join("")}function $s(i){if(!isFinite(i))return"--";const t=Math.floor(i/6e4),e=Math.floor(i%6e4/1e3),n=Math.floor(i%1e3/10);return`${t}:${e.toString().padStart(2,"0")}.${n.toString().padStart(2,"0")}`}function Jg(i){const t=ie(`<div class="toast"><span style="font-size:1.4rem">🏆</span><span>${i}</span></div>`);tr.appendChild(t),Dt.ui(),setTimeout(()=>t.remove(),2600)}function Zg(i){const t=ie(`<div class="screen center"><canvas style="position:absolute;inset:0;width:100%;height:100%"></canvas>
    <div class="intro-line" data-line></div>
    <button class="btn secondary skip" data-skip>Skip ▶</button></div>`);Pe(t);const e=t.querySelector("canvas"),n=e.getContext("2d"),s=t.querySelector("[data-line]");let r=0,a=0;const o=()=>{r=e.width=innerWidth,a=e.height=innerHeight};o(),window.addEventListener("resize",o);const c=["A mysterious energy — the TURBO STAR — races through the cosmos…","It shatters, scattering fragments across the animal worlds…","The greatest racers gather for the AMAL TURBO CHAMPIONSHIP.","But a masked racer watches from the shadows… SHADOW LYNX."],l=[];let h=0,d=0,u=!1;const p=()=>{u||(u=!0,cancelAnimationFrame(d),window.removeEventListener("resize",o),dt.seenIntro=!0,rn(),i())};t.querySelector("[data-skip]").addEventListener("click",p);const g=()=>{d=requestAnimationFrame(g),h+=1/60,n.fillStyle="#04030c",n.fillRect(0,0,r,a),n.fillStyle="rgba(255,255,255,0.6)";for(let _=0;_<60;_++){const M=_*97%r,w=_*53%a;n.fillRect(M,(w+h*40*(1+_%3))%a,2,2)}const x=r/2,f=a/2;if(h<3){const _=20+h*30,M=n.createRadialGradient(x,f,0,x,f,_*2);M.addColorStop(0,"#fff"),M.addColorStop(.4,"#ffd23f"),M.addColorStop(1,"rgba(255,47,176,0)"),n.fillStyle=M,n.beginPath(),n.arc(x,f,_*2,0,Math.PI*2),n.fill(),zc(n,x,f,_,"#fff")}else{if(l.length===0)for(let _=0;_<60;_++){const M=Math.random()*Math.PI*2,w=2+Math.random()*6;l.push({x,y:f,vx:Math.cos(M)*w,vy:Math.sin(M)*w,c:["#ff2fb0","#00e5ff","#ffd23f","#7b2ff7","#3fe08a"][_%5]})}for(const _ of l)_.x+=_.vx,_.y+=_.vy,_.vy+=.02,zc(n,_.x,_.y,8,_.c)}const m=Math.min(c.length-1,Math.floor(h/2.2));s.textContent=c[m],h>c.length*2.2+.5&&p()};g()}function zc(i,t,e,n,s){i.save(),i.translate(t,e),i.fillStyle=s,i.beginPath();for(let r=0;r<10;r++){const a=r%2?n*.45:n,o=r/10*Math.PI*2-Math.PI/2;i[r?"lineTo":"moveTo"](Math.cos(o)*a,Math.sin(o)*a)}i.closePath(),i.fill(),i.restore()}function er(){$a();const i=ie(`<div class="screen center">${Ge()}
    <div class="wrap center" style="gap:0">
      <div class="logo">
        <div class="amal">AMAL</div><div class="turbo">TURBO</div>
        <div class="tagline">Animal Kart Championship</div>
      </div>
      <div class="title-actions">
        <button class="btn big gold" data-play>🏁 Press to Race</button>
        <div class="row">
          <button class="btn secondary" data-how>How to Play</button>
          <button class="btn secondary" data-set>Settings</button>
        </div>
      </div>
    </div>
    <a class="btn ghost hub-link" href="../" aria-label="Back to Amal's Games">🏠 Amal's Games</a></div>`);Pe(i),i.querySelector("[data-play]").addEventListener("click",()=>{cr(),Dt.ui(),Me()}),i.querySelector("[data-how]").addEventListener("click",()=>$l(er)),i.querySelector("[data-set]").addEventListener("click",()=>_o(er))}function Me(){const i=Vi(dt.selectedRacer),t=[["🏆","Championship","Race cups across the worlds",c0],["🏁","Quick Race","Jump straight into a race",t0],["⏱️","Time Trial","Beat the clock & your ghost",i0],["💥","Elimination","Last place is knocked out",s0],["🦁","Racers","Pick & inspect your racer",()=>Qg(Me)],["🔧","Garage","Customise your kart",()=>Hl(Me)],["📖","Collection","Racer & world encyclopedia",d0],["⚙️","Settings","Graphics, audio, controls",()=>_o(Me)],["❓","How to Play","Controls & tips",()=>$l(Me)]],e=ie(`<div class="screen">${Ge()}
    <div class="wrap">
      <div class="topbar">
        <a class="icon-btn" href="../" aria-label="Back to Amal's Games" title="Amal's Games" style="text-decoration:none">🏠</a>
        <div class="logo" style="text-align:left"><div class="amal" style="font-size:2rem">AMAL <span style="color:var(--gold)">TURBO</span></div></div>
        <div class="spacer"></div>
        <div class="chip">🪙 <span class="k">${dt.coins}</span></div>
        <div class="chip">⭐ Lv ${1+Math.floor(dt.xp/500)}</div>
        <div class="chip">${i.emoji} ${i.name}</div>
      </div>
      <div class="pad scroll" style="flex:1">
        <div class="menu-grid" data-grid></div>
      </div>
    </div></div>`);Pe(e);const n=e.querySelector("[data-grid]");for(const[s,r,a,o,c]of t){const l=ie(`<button class="tile ${c?"locked":""}"><div class="big-emoji">${s}</div><div class="t-name">${r}</div><div class="t-desc">${a}</div></button>`);c||l.addEventListener("click",()=>{Dt.ui(),o()}),n.appendChild(l)}}function Qg(i,t){let e=dt.selectedRacer;const n=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Choose Racer</h2></div>
    <div class="pad scroll" style="flex:1">
      <div class="grid2">
        <div class="card-row" data-list></div>
        <div class="panel detail" data-detail></div>
      </div>
    </div></div></div>`);Pe(n),n.querySelector("[data-back]").addEventListener("click",()=>{Dt.ui(),i()});const s=n.querySelector("[data-list]"),r=n.querySelector("[data-detail]"),a=()=>{s.innerHTML="";for(const c of ri){const l=dt.unlockedRacers.includes(c.id),h=ie(`<button class="rcard ${e===c.id?"sel":""} ${l?"":"locked"}">
        <div class="face">${l?Bc(c):"🔒"}</div><div class="rn">${l?c.name:"???"}</div><div class="ra">${l?c.animal:"Locked"}</div></button>`);l&&h.addEventListener("click",()=>{e=c.id,Dt.ui(),a()}),s.appendChild(h)}const o=Vi(e);r.innerHTML=`<div class="row">${Bc(o,"portrait-lg")}<div><div class="dname">${o.name}</div><div class="muted">${o.animal} • ${o.style}</div></div></div>
      <div class="passive">✦ ${o.passiveText}</div>
      <p class="muted small">${o.bio}</p>
      <hr class="hr">${Vl(o)}
      <button class="btn block gold" data-choose>Select ${o.name}</button>`,r.querySelector("[data-choose]").addEventListener("click",()=>{dt.selectedRacer=e,rn(),Dt.ui(),i()})};a()}function Hl(i){const t=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Garage</h2><div class="spacer"></div><button class="btn secondary" data-rand>🎲 Random</button></div>
    <div class="garage-stage"><div id="garage-canvas"></div></div>
    <div class="pad panel scroll" style="max-height:44%">
      <div class="field"><label>Vehicle</label><div class="seg" data-veh></div></div>
      <div class="grid2">
        <div class="field"><label>Paint</label><div class="row" data-paint></div></div>
        <div class="field"><label>Boost Trail</label><div class="row" data-trail></div></div>
      </div>
      <div class="field"><label>Wheels</label><div class="seg" data-wheels></div></div>
      <div class="row spread"><button class="btn secondary" data-save>💾 Save Preset</button><button class="btn gold" data-done>Done</button></div>
    </div></div></div>`);Pe(t);const e={...dt.kit},n=Vi(dt.selectedRacer),s=t.querySelector("#garage-canvas"),r=new yl;r.add(new Cl(8952319,2232627,1.1));const a=new Wa(16777215,1.1);a.position.set(5,8,6),r.add(a);const o=new He(45,1,.1,100);o.position.set(4,3,5);let c;try{c=Bl(s,Math.min(2,devicePixelRatio)),c.setClearColor(0,0),c.shadowMap.enabled=!1}catch{Gl(i);return}let l=null;const h=()=>{l&&r.remove(l),l=Nl(n,Il(e.vehicleId),e).group,r.add(l)};h();const d=()=>{const E=s.clientWidth,C=s.clientHeight;c.setSize(E,C),o.aspect=E/C,o.updateProjectionMatrix()};let u=!0,p=0;const g=()=>{u&&(requestAnimationFrame(g),p+=.008,l&&(l.rotation.y=p),o.lookAt(0,.7,0),c.render(r,o))};setTimeout(d,0),window.addEventListener("resize",d),g();let x=0,f=!1;c.domElement.addEventListener("pointerdown",E=>{f=!0,x=E.clientX}),window.addEventListener("pointermove",E=>{f&&l&&(p+=(E.clientX-x)*.01,x=E.clientX)}),window.addEventListener("pointerup",()=>f=!1);const m=()=>{u=!1,window.removeEventListener("resize",d),zl()},_=t.querySelector("[data-veh]");for(const E of Oi){if(E.locked&&!dt.unlockedVehicles.includes(E.id))continue;const C=ie(`<button class="${e.vehicleId===E.id?"on":""}">${E.name}</button>`);C.addEventListener("click",()=>{e.vehicleId=E.id,Dt.ui(),h(),_.querySelectorAll("button").forEach(V=>V.classList.remove("on")),C.classList.add("on")}),_.appendChild(C)}const M=t.querySelector("[data-paint]");Yr.forEach((E,C)=>{const V=E.color<0?n.color:E.color,v=ie(`<button class="swatch ${e.paint<0&&E.color<0||e.paint===E.color?"on":""}" style="background:#${V.toString(16).padStart(6,"0")}" title="${E.name}"></button>`);v.addEventListener("click",()=>{e.paint=E.color,Dt.ui(),h(),M.querySelectorAll(".swatch").forEach(S=>S.classList.remove("on")),v.classList.add("on")}),M.appendChild(v)});const w=t.querySelector("[data-trail]");Rc.forEach((E,C)=>{const V=E.color<0?16777215:E.color,v=ie(`<button class="swatch ${e.trail===C?"on":""}" style="background:${E.color<0?"linear-gradient(120deg,#ff2fb0,#00e5ff,#ffd23f)":"#"+V.toString(16).padStart(6,"0")}" title="${E.name}"></button>`);v.addEventListener("click",()=>{e.trail=C,Dt.ui(),w.querySelectorAll(".swatch").forEach(S=>S.classList.remove("on")),v.classList.add("on")}),w.appendChild(v)});const R=t.querySelector("[data-wheels]");["Street","Sport","Off-road","Neon"].forEach((E,C)=>{const V=ie(`<button class="${e.wheels===C?"on":""}">${E}</button>`);V.addEventListener("click",()=>{e.wheels=C,Dt.ui(),h(),R.querySelectorAll("button").forEach(v=>v.classList.remove("on")),V.classList.add("on")}),R.appendChild(V)}),t.querySelector("[data-rand]").addEventListener("click",()=>{const E=Oi.filter(C=>!C.locked||dt.unlockedVehicles.includes(C.id));e.vehicleId=E[Math.floor(Math.random()*E.length)].id,e.paint=Yr[Math.floor(Math.random()*Yr.length)].color,e.trail=Math.floor(Math.random()*Rc.length),e.wheels=Math.floor(Math.random()*4),Dt.ui(),Hl(i)}),t.querySelector("[data-save]").addEventListener("click",()=>{dt.presets.push({...e}),rn(),Jg("Preset saved!")});const A=()=>{dt.kit={...e},rn(),m(),Dt.ui(),i()};t.querySelector("[data-back]").addEventListener("click",A),t.querySelector("[data-done]").addEventListener("click",A)}function go(i,t,e,n){const s=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>${i}</h2></div>
    <div class="pad scroll" style="flex:1">${n??""}<div class="menu-grid" data-grid></div></div></div></div>`);Pe(s),s.querySelector("[data-back]").addEventListener("click",()=>{Dt.ui(),e()});const r=s.querySelector("[data-grid]");for(const a of Xa){const o=Dl[a.world],c=ie(`<button class="tile"><div class="corner">${o.name}</div><div class="big-emoji">🏁</div><div class="t-name">${a.name}</div><div class="t-desc">${a.desc}</div>
      <div class="small muted">${dt.bestLaps[a.id]?"Best lap "+$s(dt.bestLaps[a.id]):""} ${"⭐".repeat(dt.medals[a.id]??0)}</div></button>`);c.style.background=`linear-gradient(135deg, #${o.skyBottom.toString(16).padStart(6,"0")}aa, var(--panel))`,c.addEventListener("click",()=>{Dt.ui(),t(a.id)}),r.appendChild(c)}return s}let pe={laps:3,difficulty:"normal",ai:7,items:!0,mirror:!1};function t0(){const i=go("Quick Race",t=>ai({trackId:t,mode:"quick",laps:pe.laps,aiCount:pe.ai,difficulty:pe.difficulty,mirror:pe.mirror,items:pe.items,playerRacerId:dt.selectedRacer,playerVehicleId:dt.kit.vehicleId,kit:dt.kit,settings:dt.settings,container:null,input:qe},Me,{kind:"quick"}),Me,e0());n0(i)}function e0(){return`<div class="panel pad" style="margin-bottom:14px">
    <div class="row" style="gap:20px;flex-wrap:wrap">
      <div class="field" style="margin:0"><label>Laps</label><div class="seg" data-laps>${[2,3,5].map(i=>`<button data-l="${i}" class="${pe.laps===i?"on":""}">${i}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Difficulty</label><div class="seg" data-diff>${["rookie","normal","pro","master"].map(i=>`<button data-d="${i}" class="${pe.difficulty===i?"on":""}">${i}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Racers</label><div class="seg" data-ai>${[3,5,7].map(i=>`<button data-a="${i}" class="${pe.ai===i?"on":""}">${i+1}</button>`).join("")}</div></div>
      <div class="field" style="margin:0"><label>Items</label><div class="seg" data-items><button data-i="1" class="${pe.items?"on":""}">On</button><button data-i="0" class="${pe.items?"":"on"}">Off</button></div></div>
      <div class="field" style="margin:0"><label>Mirror</label><div class="seg" data-mir><button data-m="0" class="${pe.mirror?"":"on"}">Off</button><button data-m="1" class="${pe.mirror?"on":""}">On</button></div></div>
    </div><p class="small muted">Pick a track below to start.</p></div>`}function n0(i){const t=(e,n)=>i.querySelectorAll(`${e} button`).forEach(s=>s.addEventListener("click",()=>{i.querySelectorAll(`${e} button`).forEach(r=>r.classList.remove("on")),s.classList.add("on"),Dt.ui(),n(s.dataset[Object.keys(s.dataset)[0]])}));t("[data-laps]",e=>pe.laps=+e),t("[data-diff]",e=>pe.difficulty=e),t("[data-ai]",e=>pe.ai=+e),t("[data-items]",e=>pe.items=e==="1"),t("[data-mir]",e=>pe.mirror=e==="1")}function i0(){go("Time Trial",i=>ai({trackId:i,mode:"time",laps:3,aiCount:0,difficulty:"normal",mirror:!1,items:!1,playerRacerId:dt.selectedRacer,playerVehicleId:dt.kit.vehicleId,kit:dt.kit,settings:dt.settings,container:null,input:qe},Me,{kind:"time"}),Me)}function s0(){go("Elimination",i=>ai({trackId:i,mode:"elim",laps:5,aiCount:7,difficulty:pe.difficulty,mirror:!1,items:!0,playerRacerId:dt.selectedRacer,playerVehicleId:dt.kit.vehicleId,kit:dt.kit,settings:dt.settings,container:null,input:qe},Me,{kind:"elim"}),Me)}let dn=null,Ya=null,ni=null;function ai(i,t,e){ni=ie('<div class="screen" style="background:#000"></div>'),Pe(ni);const n={...i,container:ni};e.field&&(n.fieldRacerIds=e.field),qe.autoAccel=dt.settings.autoAccel,qe.tilt.enabled=ea&&dt.settings.controlMode==="tilt",ea&&(qe.autoAccel=!0);const s=new Yg(ni,qe,ea||dt.settings.controlMode!=="buttons");s.setSimpleTouch(qe.autoAccel);let r;try{r=new Xg(n,a=>s.update(a),a=>a0(a,t,e))}catch(a){console.error(a),s.dispose(),Gl(t);return}Ya=s,dn=r,window.__race=r,s.setTrackOutline(r.track.curve.pos.map(a=>({x:a.x,z:a.z}))),s.onPause=()=>Wl(t,e),r.start()}function Gl(i){un();const t=ie(`<div class="screen center">${Ge()}
    <div class="panel pad center-text" style="max-width:440px;display:flex;flex-direction:column;gap:12px">
      <div style="font-size:3rem">🎮💤</div>
      <h2>Graphics couldn't start</h2>
      <p class="muted">Your browser ran out of 3D graphics slots. This usually happens when many other tabs or apps are using graphics.</p>
      <p class="small muted">Try this: close a few other browser tabs, then reload. On a phone or tablet, closing background apps helps too.</p>
      <div class="row" style="justify-content:center">
        <button class="btn gold" data-reload>🔄 Reload &amp; try again</button>
        <button class="btn secondary" data-menu>🏠 Menu</button>
      </div>
    </div></div>`);Pe(t),t.querySelector("[data-reload]").addEventListener("click",()=>location.reload()),t.querySelector("[data-menu]").addEventListener("click",()=>i())}function un(){dn?.dispose(),dn=null,Ya?.dispose(),Ya=null,ni=null}function Wl(i,t){if(!dn)return;dn.setPaused(!0);const e=ie(`<div class="screen center" style="position:absolute;background:rgba(4,6,20,0.8);z-index:30">
    <div class="panel pad center" style="display:flex;flex-direction:column;gap:12px;min-width:280px">
      <h2 class="center-text">Paused</h2>
      <button class="btn block" data-resume>▶ Resume</button>
      <button class="btn block secondary" data-restart>🔄 Restart</button>
      <button class="btn block secondary" data-set>⚙️ Settings</button>
      <button class="btn block ghost" data-quit>🏠 Quit to Menu</button>
    </div></div>`);ni.appendChild(e),e.querySelector("[data-resume]").addEventListener("click",()=>{e.remove(),dn.setPaused(!1)}),e.querySelector("[data-restart]").addEventListener("click",()=>{const n=dn.opts;un(),ai(n,i,t)}),e.querySelector("[data-set]").addEventListener("click",()=>_o(()=>{r0(i,t)},!0)),e.querySelector("[data-quit]").addEventListener("click",()=>{un(),i()})}function r0(i,t){Pe(ni),Wl(i,t)}function a0(i,t,e){dt.coins+=i.coins,dt.xp+=i.xp;const n=dn.opts.trackId;if(i.playerMs&&(!dt.bestTimes[n]||i.playerMs<dt.bestTimes[n])&&(dt.bestTimes[n]=i.playerMs),i.bestLapMs&&(!dt.bestLaps[n]||i.bestLapMs<dt.bestLaps[n])&&(dt.bestLaps[n]=i.bestLapMs),e.kind==="time"){const s=or(n),r=dn.track.curve.totalLength/62*1e3*s.laps,a=i.playerMs<=r?3:i.playerMs<=r*1.12?2:i.playerMs<=r*1.3?1:0;dt.medals[n]=Math.max(dt.medals[n]??0,a)}if(rn(),e.kind==="champ"){l0(i,e);return}o0(i,t,e)}function o0(i,t,e,n=""){const s=i.order.map(c=>`<div class="result-row ${c.isPlayer?"you":""}">
    <div class="pl">${c.place}</div><div><span style="font-size:1.3rem">${c.racer.emoji}</span> ${c.racer.name}</div>
    <div class="rt">${$s(c.ms)}</div></div>`).join(""),r=i.playerPlace===1,a=ie(`<div class="screen">${Ge()}<div class="wrap scroll pad">
    ${n}
    <h2 class="center-text">${r?"🏆 You Won!":`Finished ${vo(i.playerPlace)}`}</h2>
    <div class="grid2" style="margin-top:12px">
      <div class="panel pad"><div class="result-list">${s}</div></div>
      <div class="panel pad">
        <h3>Race Stats</h3>
        <div class="row spread"><span class="muted">Your time</span><b>${$s(i.playerMs)}</b></div>
        <div class="row spread"><span class="muted">Best lap</span><b>${$s(i.bestLapMs)}</b></div>
        <div class="row spread"><span class="muted">Drift time</span><b>${i.driftSeconds.toFixed(1)}s</b></div>
        <div class="row spread"><span class="muted">Clean race</span><b>${i.clean?"Yes ✨":"No"}</b></div>
        <hr class="hr">
        <div class="row spread"><span>🪙 Coins</span><b class="k">+${i.coins}</b></div>
        <div class="row spread"><span>⭐ XP</span><b>+${i.xp}</b></div>
        <div class="row" style="margin-top:14px">
          <button class="btn" data-retry>🔄 Retry</button>
          <button class="btn gold" data-cont>Continue ▶</button>
        </div>
        <button class="btn block ghost" data-home style="margin-top:8px">🏠 Menu</button>
      </div>
    </div></div></div>`);Pe(a);const o=dn.opts;a.querySelector("[data-retry]").addEventListener("click",()=>{un(),ai(o,t,e)}),a.querySelector("[data-cont]").addEventListener("click",()=>{un(),t()}),a.querySelector("[data-home]").addEventListener("click",()=>{un(),Me()})}function vo(i){return i+(["th","st","nd","rd"][i%100-i%10==10?0:i%10]||"th")}function c0(){const i=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Championship</h2></div>
    <div class="pad scroll" style="flex:1"><div class="menu-grid" data-grid></div></div></div></div>`);Pe(i),i.querySelector("[data-back]").addEventListener("click",()=>{Dt.ui(),Me()});const t=i.querySelector("[data-grid]");Qs.forEach((e,n)=>{const s=dt.championshipsWon.includes(e.id),r=n>0&&!dt.championshipsWon.includes(Qs[n-1].id),a=ie(`<button class="tile ${r?"locked":""}"><div class="corner">${s?"✅ Won":""}</div>
      <div class="big-emoji">${e.emoji}</div><div class="t-name">${e.name}</div>
      <div class="t-desc">${e.tracks.map(o=>or(o).name).join(" • ")}</div></button>`);r||a.addEventListener("click",()=>{Dt.ui(),Xl(e.id)}),t.appendChild(a)})}function Xl(i){ss(i);const t=ri.filter(n=>!n.locked&&n.id!==dt.selectedRacer).slice(0,7).map(n=>n.id),e={};[dt.selectedRacer,...t].forEach(n=>e[n]=0),ql(i,0,e,t)}function ql(i,t,e,n){const r=ss(i).tracks[t];ai({trackId:r,mode:"quick",laps:3,aiCount:n.length,difficulty:pe.difficulty,mirror:i==="shadow"&&t===3,items:!0,playerRacerId:dt.selectedRacer,playerVehicleId:dt.kit.vehicleId,kit:dt.kit,settings:dt.settings,container:null,input:qe},Me,{kind:"champ",cupId:i,raceIndex:t,standings:e,field:n})}function l0(i,t){const e=ss(t.cupId),n=t.standings;i.order.forEach(a=>{n[a.racer.id]=(n[a.racer.id]??0)+(jg[a.place-1]??0)});const s=t.raceIndex+1,r=Object.entries(n).sort((a,o)=>o[1]-a[1]).map(([a,o],c)=>{const l=Vi(a);return`<div class="result-row ${a===dt.selectedRacer?"you":""}"><div class="pl">${c+1}</div><div>${l.emoji} ${l.name}</div><div class="rt">${o} pts</div></div>`}).join("");if(s<e.tracks.length){const a=ie(`<div class="screen">${Ge()}<div class="wrap scroll pad">
      <h2 class="center-text">${e.emoji} ${e.name} — Race ${t.raceIndex+1}/${e.tracks.length} done</h2>
      <div class="grid2" style="margin-top:12px">
        <div class="panel pad"><h3>Standings</h3><div class="result-list">${r}</div></div>
        <div class="panel pad center" style="display:flex;flex-direction:column;gap:10px;justify-content:center">
          <div class="center-text muted">You finished ${vo(i.playerPlace)}</div>
          <div class="center-text">Next: <b>${or(e.tracks[s]).name}</b></div>
          <button class="btn gold block" data-next>Next Race ▶</button>
          <button class="btn ghost block" data-quit>Quit Championship</button>
        </div>
      </div></div></div>`);Pe(a),a.querySelector("[data-next]").addEventListener("click",()=>{un(),ql(t.cupId,s,n,t.field)}),a.querySelector("[data-quit]").addEventListener("click",()=>{un(),Me()})}else h0(e.id,n)}function h0(i,t,e){const n=Object.entries(t).sort((h,d)=>d[1]-h[1]),s=n.findIndex(([h])=>h===dt.selectedRacer)+1,r=s===1;r&&!dt.championshipsWon.includes(i)&&(dt.championshipsWon.push(i),i==="shadow"&&!dt.unlockedRacers.includes("shadow")&&(dt.unlockedRacers.push("shadow"),dt.unlockedVehicles.push("shadow")),dt.coins+=300,rn());const a=n.slice(0,3),o=[1,0,2].map(h=>{const d=a[h];if(!d)return"";const u=Vi(d[0]);return`<div class="pod ${h===0?"p1":h===1?"p2":"p3"}"><div class="face">${u.emoji}</div><b>${h+1}</b><div class="small">${d[1]}</div></div>`}).join(""),c=i==="shadow"&&r,l=ie(`<div class="screen">${Ge()}<div class="wrap scroll pad center">
    <div class="story">
      <h2>${r?`🏆 ${ss(i).name} Champion!`:`${ss(i).name} — ${vo(s)} overall`}</h2>
      <div class="podium">${o}</div>
      ${c?'<div class="panel pad"><div class="big-emoji">🐈‍⬛</div><p><b>Shadow Lynx unmasked!</b> The phantom racer joins your roster, along with the Void Runner kart.</p></div>':r?'<p class="muted">Turbo Star fragments collected. A new cup awaits…</p>':'<p class="muted">So close! Try again to top the standings.</p>'}
      <div class="row center" style="justify-content:center">
        ${r?"":'<button class="btn secondary" data-retry>🔄 Retry Cup</button>'}
        <button class="btn gold" data-home>🏠 Menu</button>
      </div>
    </div></div></div>`);Pe(l),Dt.win(),l.querySelector("[data-home]").addEventListener("click",()=>{un(),Me()}),l.querySelector("[data-retry]")?.addEventListener("click",()=>{un(),Xl(i)})}function d0(){const i=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Collection</h2></div>
    <div class="pad scroll" style="flex:1"><div class="card-row" data-list></div><div class="panel detail" data-d style="margin-top:14px"></div></div></div></div>`);Pe(i),i.querySelector("[data-back]").addEventListener("click",()=>{Dt.ui(),Me()});const t=i.querySelector("[data-list]"),e=i.querySelector("[data-d]"),n=s=>{const r=dt.unlockedRacers.includes(s.id);e.innerHTML=r?`<div class="row"><span style="font-size:3rem">${s.emoji}</span><div><div class="dname">${s.name}</div><div class="muted">${s.animal}</div></div></div>
      <div class="passive">✦ ${s.passiveText}</div><p>${s.bio}</p>
      <div class="row" style="gap:20px"><span class="muted">Home: <b>${u0(s)}</b></span><span class="muted">Food: <b>${s.food}</b></span><span class="muted">Style: <b>${s.style}</b></span></div>
      <div class="row" style="gap:16px"><span class="muted">Vehicle: <b>${s.vehicle}</b></span></div>
      <hr class="hr">${Vl(s)}`:`<p class="muted center-text">🔒 Unlock ${s.name} by completing the championship.</p>`};for(const s of ri){const r=dt.unlockedRacers.includes(s.id),a=ie(`<button class="rcard ${r?"":"locked"}"><div class="face">${r?s.emoji:"🔒"}</div><div class="rn">${r?s.name:"???"}</div></button>`);a.addEventListener("click",()=>{Dt.ui(),n(s)}),t.appendChild(a)}n(ri[0])}function u0(i){return{leo:"Safari",kiki:"Neon Future",finn:"Deep Ocean",zara:"Wild Jungle",bruno:"Wild Jungle",pip:"Frozen Kingdom",ruby:"Safari",dash:"Neon Future",luna:"Frozen Kingdom",rocky:"Deep Ocean",nova:"Candy Kingdom",shadow:"Shadow Fortress"}[i.id]??"Unknown"}function _o(i,t=!1){const e=dt.settings,n=(o,c,l)=>`<div class="field"><label>${o}</label><div class="seg" data-key="${c}">${l.map(([h,d])=>`<button data-v="${d}" class="${String(e[c])===String(d)?"on":""}">${h}</button>`).join("")}</div></div>`,s=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>Settings</h2></div>
    <div class="pad scroll" style="flex:1">
      <div class="grid2">
        <div class="panel pad">
          <h3>Graphics</h3>
          ${n("Quality","quality",[["Low","low"],["Medium","medium"],["High","high"],["Ultra","ultra"]])}
          ${n("Shadows","shadows",[["On",!0],["Off",!1]])}
          ${n("Particles","particles",[["On",!0],["Off",!1]])}
          ${n("Reflections","reflections",[["On",!0],["Off",!1]])}
          ${n("Screen shake","screenShake",[["On",!0],["Off",!1]])}
          ${n("Motion blur","motionBlur",[["On",!0],["Off",!1]])}
        </div>
        <div class="panel pad">
          <h3>Audio & Controls</h3>
          <div class="field"><label>Music <span data-mv>${Math.round(e.musicVol*100)}</span>%</label><input type="range" min="0" max="1" step="0.05" value="${e.musicVol}" data-music></div>
          <div class="field"><label>Sound FX <span data-sv>${Math.round(e.sfxVol*100)}</span>%</label><input type="range" min="0" max="1" step="0.05" value="${e.sfxVol}" data-sfx></div>
          ${n("Control mode","controlMode",[["Buttons","buttons"],["Wheel","wheel"],["Tilt","tilt"]])}
          <h3 style="margin-top:12px">Accessibility</h3>
          ${n("Steering assist","steerAssist",[["On",!0],["Off",!1]])}
          ${n("Auto-accelerate","autoAccel",[["On",!0],["Off",!1]])}
          ${n("Reduced flashing","reducedFlashing",[["On",!0],["Off",!1]])}
        </div>
      </div>
      ${t?"":'<div class="panel pad" style="margin-top:14px"><h3>Save</h3><div class="row"><button class="btn ghost" data-reset>🗑️ Reset all progress</button></div></div>'}
    </div></div></div>`);Pe(s),s.querySelector("[data-back]").addEventListener("click",()=>{rn(),Dt.ui(),i()}),s.querySelectorAll(".seg[data-key]").forEach(o=>{const c=o.dataset.key;o.querySelectorAll("button").forEach(l=>l.addEventListener("click",()=>{o.querySelectorAll("button").forEach(d=>d.classList.remove("on")),l.classList.add("on");let h=l.dataset.v;h==="true"?h=!0:h==="false"&&(h=!1),e[c]=h,qe.autoAccel=e.autoAccel,Dt.ui(),rn()}))});const r=s.querySelector("[data-music]"),a=s.querySelector("[data-sfx]");r.addEventListener("input",()=>{e.musicVol=+r.value,s.querySelector("[data-mv]").textContent=String(Math.round(e.musicVol*100)),Pc(e.musicVol,e.sfxVol),rn()}),a.addEventListener("input",()=>{e.sfxVol=+a.value,s.querySelector("[data-sv]").textContent=String(Math.round(e.sfxVol*100)),Pc(e.musicVol,e.sfxVol),Dt.ui(),rn()}),s.querySelector("[data-reset]")?.addEventListener("click",()=>{confirm("Reset ALL progress, unlocks and settings?")&&(Eg(),location.reload())})}function $l(i){const t=ie(`<div class="screen">${Ge()}<div class="wrap">
    <div class="topbar"><button class="icon-btn" data-back>◄</button><h2>How to Play</h2></div>
    <div class="pad scroll" style="flex:1"><div class="grid2">
      <div class="panel pad">
        <h3>🎯 The Goal</h3>
        <p class="muted">Race across imaginative animal worlds, collect Turbo Star fragments and win every cup to unmask the mysterious <b>Shadow Lynx</b>.</p>
        <h3 style="margin-top:12px">🏎️ Keyboard</h3>
        <p class="small">W / ↑ — Accelerate<br>S / ↓ — Brake & reverse<br>A · D / ← → — Steer<br>Space — Drift<br>Shift — Use item<br>E — Trick (in the air)<br>C — Camera · B — Rear view<br>R — Reset · Esc — Pause</p>
      </div>
      <div class="panel pad">
        <h3>💠 Drifting = Speed</h3>
        <p class="muted small">Hold <b>Drift</b> in a corner to slide. Sparks build up:</p>
        <p class="small">🔵 Blue → small boost<br>🟣 Purple → medium boost<br>🟡 Gold → strong boost<br>🌈 Rainbow → maximum boost</p>
        <p class="small muted">Release drift to fire the boost — but don't hold too long or you'll lose the top charge!</p>
        <h3 style="margin-top:12px">🎁 Items</h3>
        <p class="small muted">Grab Turbo Capsules for power-ups. Fall behind and you'll get stronger comeback items.</p>
        <div class="row" style="flex-wrap:wrap;gap:6px">${Object.values(Ul).map(n=>`<span class="chip">${n.icon} ${n.name}</span>`).join("")}</div>
      </div>
    </div>
    <div class="row center" style="justify-content:center;margin-top:16px"><button class="btn gold" data-ok>Got it!</button></div>
    </div></div></div>`);Pe(t);const e=()=>{Dt.ui(),i()};t.querySelector("[data-back]").addEventListener("click",e),t.querySelector("[data-ok]").addEventListener("click",e)}function f0(){const t=new URLSearchParams(location.search).get("track")||"sugar-rush";ai({trackId:t,mode:"quick",laps:3,aiCount:7,difficulty:"normal",mirror:!1,items:!0,playerRacerId:dt.selectedRacer,playerVehicleId:dt.kit.vehicleId,kit:dt.kit,settings:dt.settings,container:null,input:qe},Me,{kind:"quick"}),setTimeout(()=>window.__race?.enableAutopilot(),100)}try{new URLSearchParams(location.search).has("demo")?(cr(),f0()):dt.seenIntro?er():Zg(er)}catch(i){console.error(i),tr.innerHTML=`<div class="screen center"><div class="panel pad center-text"><h2>Something went wrong</h2><p class="muted">${i.message}</p><button class="btn" onclick="location.reload()">Reload</button></div></div>`}
