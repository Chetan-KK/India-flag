(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kr="143",bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ro=0,Kr=1,so=2,va=1,ao=2,ti=3,ii=0,Tt=1,Qt=2,oo=1,Kt=0,kn=1,Jr=2,Qr=3,es=4,lo=5,Bn=100,co=101,uo=102,ts=103,ns=104,ho=200,fo=201,po=202,mo=203,Ma=204,ya=205,go=206,_o=207,xo=208,vo=209,Mo=210,yo=0,So=1,bo=2,Rr=3,wo=4,Eo=5,To=6,Ao=7,Sa=0,Co=1,Lo=2,kt=0,Do=1,Po=2,Ro=3,Io=4,Fo=5,ba=300,Hn=301,Wn=302,Ir=303,Fr=304,Gi=306,Nr=1e3,Et=1001,zr=1002,it=1003,is=1004,rs=1005,mt=1006,No=1007,ki=1008,fn=1009,zo=1010,Oo=1011,wa=1012,Uo=1013,ln=1014,cn=1015,ri=1016,Bo=1017,Go=1018,Vn=1020,ko=1021,Vo=1022,Dt=1023,Ho=1024,Wo=1025,hn=1026,qn=1027,qo=1028,Xo=1029,Yo=1030,jo=1031,Zo=1033,Ji=33776,Qi=33777,er=33778,tr=33779,ss=35840,as=35841,os=35842,ls=35843,$o=36196,cs=37492,us=37496,hs=37808,ds=37809,fs=37810,ps=37811,ms=37812,gs=37813,_s=37814,xs=37815,vs=37816,Ms=37817,ys=37818,Ss=37819,bs=37820,ws=37821,Es=36492,pn=3e3,Ue=3001,Ko=3200,Jo=3201,Ea=0,Qo=1,Bt="srgb",un="srgb-linear",nr=7680,el=519,Ts=35044,As="300 es",Or=1035;class xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,Cs=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[e&255]+Ke[e>>8&255]+"-"+Ke[e>>16&15|64]+Ke[e>>24&255]+"-"+Ke[t&63|128]+Ke[t>>8&255]+"-"+Ke[t>>16&255]+Ke[t>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function tl(s,e){return(s%e+e)%e}function rr(s,e,t){return(1-t)*s+t*e}function Ls(s){return(s&s-1)===0&&s!==0}function Ur(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],_=n[8],p=i[0],h=i[3],x=i[6],b=i[1],A=i[4],w=i[7],M=i[2],C=i[5],R=i[8];return r[0]=o*p+a*b+c*M,r[3]=o*h+a*A+c*C,r[6]=o*x+a*w+c*R,r[1]=l*p+u*b+d*M,r[4]=l*h+u*A+d*C,r[7]=l*x+u*w+d*R,r[2]=f*p+m*b+_*M,r[5]=f*h+m*A+_*C,r[8]=f*x+m*w+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,m=l*r-o*c,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*u,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ta(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function si(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const sr={[Bt]:{[un]:dn},[un]:{[Bt]:zi}},yt={legacyMode:!0,get workingColorSpace(){return un},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(sr[e]&&sr[e][t]!==void 0){const n=sr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Aa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={r:0,g:0,b:0},St={h:0,s:0,l:0},fi={h:0,s:0,l:0};function ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function pi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=un){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=un){if(e=tl(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ar(o,r,e+1/3),this.g=ar(o,r,e),this.b=ar(o,r,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,yt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,yt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Bt){const n=Aa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return yt.fromWorkingColorSpace(pi(this,Xe),e),rt(Xe.r*255,0,255)<<16^rt(Xe.g*255,0,255)<<8^rt(Xe.b*255,0,255)<<0}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un){yt.fromWorkingColorSpace(pi(this,Xe),t);const n=Xe.r,i=Xe.g,r=Xe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=un){return yt.fromWorkingColorSpace(pi(this,Xe),t),e.r=Xe.r,e.g=Xe.g,e.b=Xe.b,e}getStyle(e=Bt){return yt.fromWorkingColorSpace(pi(this,Xe),e),e!==Bt?`color(${e} ${Xe.r} ${Xe.g} ${Xe.b})`:`rgb(${Xe.r*255|0},${Xe.g*255|0},${Xe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(St),St.h+=e,St.s+=t,St.l+=n,this.setHSL(St.h,St.s,St.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(St),e.getHSL(fi);const n=rr(St.h,fi.h,t),i=rr(St.s,fi.s,t),r=rr(St.l,fi.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=Aa;let En;class Ca{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{En===void 0&&(En=si("canvas")),En.width=e.width,En.height=e.height;const n=En.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=En}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=si("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class La{constructor(e=null){this.isSource=!0,this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(or(i[o].image)):r.push(or(i[o]))}else r=or(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function or(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nl=0;class vt extends xn{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Et,i=Et,r=mt,o=ki,a=Dt,c=fn,l=1,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nl++}),this.uuid=ai(),this.name="",this.source=new La(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case Et:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case Et:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=ba;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],_=c[9],p=c[2],h=c[6],x=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(_+h)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,w=(m+1)/2,M=(x+1)/2,C=(u+f)/4,R=(d+p)/4,g=(_+h)/4;return A>w&&A>M?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=C/n,r=R/n):w>M?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=g/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=R/r,i=g/r),this.set(n,i,r,t),this}let b=Math.sqrt((h-_)*(h-_)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(h-_)/b,this.y=(d-p)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends xn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new La(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Da extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=Et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(d!==p||c!==f||l!==m||u!==_){let h=1-a;const x=c*f+l*m+u*_+d*p,b=x>=0?1:-1,A=1-x*x;if(A>Number.EPSILON){const M=Math.sqrt(A),C=Math.atan2(M,x*b);h=Math.sin(h*C)/M,a=Math.sin(a*C)/M}const w=a*b;if(c=c*h+f*w,l=l*h+m*w,u=u*h+_*w,d=d*h+p*w,h===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*d+c*m-l*f,e[t+1]=c*_+u*f+l*d-a*m,e[t+2]=l*_+u*m+a*f-c*d,e[t+3]=u*_-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),m=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*m*_,this._y=l*m*d-f*u*_,this._z=l*u*_+f*m*d,this._w=l*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+l*m*_,this._y=l*m*d-f*u*_,this._z=l*u*_-f*m*d,this._w=l*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-l*m*_,this._y=l*m*d+f*u*_,this._z=l*u*_+f*m*d,this._w=l*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-l*m*_,this._y=l*m*d+f*u*_,this._z=l*u*_-f*m*d,this._w=l*u*d+f*m*_;break;case"YZX":this._x=f*u*d+l*m*_,this._y=l*m*d+f*u*_,this._z=l*u*_-f*m*d,this._w=l*u*d-f*m*_;break;case"XZY":this._x=f*u*d-l*m*_,this._y=l*m*d-f*u*_,this._z=l*u*_+f*m*d,this._w=l*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ds.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,d=c*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*c+f*-r+u*-a-d*-o,this.y=u*c+f*-o+d*-r-l*-a,this.z=d*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new D,Ds=new gn;class oi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)tn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(tn)}else n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),mi.subVectors(this.max,Jn),Tn.subVectors(e.a,Jn),An.subVectors(e.b,Jn),Cn.subVectors(e.c,Jn),Wt.subVectors(An,Tn),qt.subVectors(Cn,An),nn.subVectors(Tn,Cn);let t=[0,-Wt.z,Wt.y,0,-qt.z,qt.y,0,-nn.z,nn.y,Wt.z,0,-Wt.x,qt.z,0,-qt.x,nn.z,0,-nn.x,-Wt.y,Wt.x,0,-qt.y,qt.x,0,-nn.y,nn.x,0];return!ur(t,Tn,An,Cn,mi)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,Tn,An,Cn,mi))?!1:(gi.crossVectors(Wt,qt),t=[gi.x,gi.y,gi.z],ur(t,Tn,An,Cn,mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return tn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ft[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ft[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ft[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ft[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ft[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ft[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ft[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ft[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ft),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ft=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,cr=new oi,Tn=new D,An=new D,Cn=new D,Wt=new D,qt=new D,nn=new D,Jn=new D,mi=new D,gi=new D,rn=new D;function ur(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){rn.fromArray(s,r);const a=i.x*Math.abs(rn.x)+i.y*Math.abs(rn.y)+i.z*Math.abs(rn.z),c=e.dot(rn),l=t.dot(rn),u=n.dot(rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rl=new oi,Ps=new D,_i=new D,hr=new D;class Vi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(hr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?_i.set(0,0,1).multiplyScalar(e.radius):_i.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ps.copy(e.center).add(_i)),this.expandByPoint(Ps.copy(e.center).sub(_i)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nt=new D,dr=new D,xi=new D,Xt=new D,fr=new D,vi=new D,pr=new D;class Pa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nt.copy(this.direction).multiplyScalar(t).add(this.origin),Nt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dr.copy(e).add(t).multiplyScalar(.5),xi.copy(t).sub(e).normalize(),Xt.copy(this.origin).sub(dr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xi),a=Xt.dot(this.direction),c=-Xt.dot(xi),l=Xt.lengthSq(),u=Math.abs(1-o*o);let d,f,m,_;if(u>0)if(d=o*c-a,f=o*a-c,_=r*u,d>=0)if(f>=-_)if(f<=_){const p=1/u;d*=p,f*=p,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(xi).multiplyScalar(f).add(dr),m}intersectSphere(e,t){Nt.subVectors(e.center,this.origin);const n=Nt.dot(this.direction),i=Nt.dot(Nt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nt)!==null}intersectTriangle(e,t,n,i,r){fr.subVectors(t,e),vi.subVectors(n,e),pr.crossVectors(fr,vi);let o=this.direction.dot(pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xt.subVectors(this.origin,e);const c=a*this.direction.dot(vi.crossVectors(Xt,vi));if(c<0)return null;const l=a*this.direction.dot(fr.cross(Xt));if(l<0||c+l>o)return null;const u=-a*Xt.dot(pr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,d,f,m,_,p,h){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=d,x[14]=f,x[3]=m,x[7]=_,x[11]=p,x[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ln.setFromMatrixColumn(e,0).length(),r=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,_=a*u,p=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,_=l*u,p=l*d;t[0]=f+p*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,_=l*u,p=l*d;t[0]=f-p*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,_=a*u,p=a*d;t[0]=c*u,t[4]=_*l-m,t[8]=f*l+p,t[1]=c*d,t[5]=p*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=p-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+_,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+p,t[5]=o*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sl,e,al)}lookAt(e,t,n){const i=this.elements;return lt.subVectors(e,t),lt.lengthSq()===0&&(lt.z=1),lt.normalize(),Yt.crossVectors(n,lt),Yt.lengthSq()===0&&(Math.abs(n.z)===1?lt.x+=1e-4:lt.z+=1e-4,lt.normalize(),Yt.crossVectors(n,lt)),Yt.normalize(),Mi.crossVectors(lt,Yt),i[0]=Yt.x,i[4]=Mi.x,i[8]=lt.x,i[1]=Yt.y,i[5]=Mi.y,i[9]=lt.y,i[2]=Yt.z,i[6]=Mi.z,i[10]=lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],_=n[2],p=n[6],h=n[10],x=n[14],b=n[3],A=n[7],w=n[11],M=n[15],C=i[0],R=i[4],g=i[8],T=i[12],z=i[1],F=i[5],$=i[9],Z=i[13],P=i[2],W=i[6],B=i[10],Y=i[14],X=i[3],O=i[7],V=i[11],ee=i[15];return r[0]=o*C+a*z+c*P+l*X,r[4]=o*R+a*F+c*W+l*O,r[8]=o*g+a*$+c*B+l*V,r[12]=o*T+a*Z+c*Y+l*ee,r[1]=u*C+d*z+f*P+m*X,r[5]=u*R+d*F+f*W+m*O,r[9]=u*g+d*$+f*B+m*V,r[13]=u*T+d*Z+f*Y+m*ee,r[2]=_*C+p*z+h*P+x*X,r[6]=_*R+p*F+h*W+x*O,r[10]=_*g+p*$+h*B+x*V,r[14]=_*T+p*Z+h*Y+x*ee,r[3]=b*C+A*z+w*P+M*X,r[7]=b*R+A*F+w*W+M*O,r[11]=b*g+A*$+w*B+M*V,r[15]=b*T+A*Z+w*Y+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],p=e[7],h=e[11],x=e[15];return _*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*m-n*c*m)+p*(+t*c*m-t*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+h*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*u-n*l*u)+x*(-i*a*u-t*c*d+t*a*f+i*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],p=e[13],h=e[14],x=e[15],b=d*h*l-p*f*l+p*c*m-a*h*m-d*c*x+a*f*x,A=_*f*l-u*h*l-_*c*m+o*h*m+u*c*x-o*f*x,w=u*p*l-_*d*l+_*a*m-o*p*m-u*a*x+o*d*x,M=_*d*c-u*p*c-_*a*f+o*p*f+u*a*h-o*d*h,C=t*b+n*A+i*w+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(p*f*r-d*h*r-p*i*m+n*h*m+d*i*x-n*f*x)*R,e[2]=(a*h*r-p*c*r+p*i*l-n*h*l-a*i*x+n*c*x)*R,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*m-n*c*m)*R,e[4]=A*R,e[5]=(u*h*r-_*f*r+_*i*m-t*h*m-u*i*x+t*f*x)*R,e[6]=(_*c*r-o*h*r-_*i*l+t*h*l+o*i*x-t*c*x)*R,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*m+t*c*m)*R,e[8]=w*R,e[9]=(_*d*r-u*p*r-_*n*m+t*p*m+u*n*x-t*d*x)*R,e[10]=(o*p*r-_*a*r+_*n*l-t*p*l-o*n*x+t*a*x)*R,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*m-t*a*m)*R,e[12]=M*R,e[13]=(u*p*i-_*d*i+_*n*f-t*p*f-u*n*h+t*d*h)*R,e[14]=(_*a*i-o*p*i-_*n*c+t*p*c+o*n*h-t*a*h)*R,e[15]=(o*d*i-u*a*i+u*n*c-t*d*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,m=r*u,_=r*d,p=o*u,h=o*d,x=a*d,b=c*l,A=c*u,w=c*d,M=n.x,C=n.y,R=n.z;return i[0]=(1-(p+x))*M,i[1]=(m+w)*M,i[2]=(_-A)*M,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(f+x))*C,i[6]=(h+b)*C,i[7]=0,i[8]=(_+A)*R,i[9]=(h-b)*R,i[10]=(1-(f+p))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ln.set(i[0],i[1],i[2]).length();const o=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bt.copy(this);const l=1/r,u=1/o,d=1/a;return bt.elements[0]*=l,bt.elements[1]*=l,bt.elements[2]*=l,bt.elements[4]*=u,bt.elements[5]*=u,bt.elements[6]*=u,bt.elements[8]*=d,bt.elements[9]*=d,bt.elements[10]*=d,t.setFromRotationMatrix(bt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ln=new D,bt=new He,sl=new D(0,0,0),al=new D(1,1,1),Yt=new D,Mi=new D,lt=new D,Rs=new He,Is=new gn;class li{constructor(e=0,t=0,n=0,i=li.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Is.setFromEuler(this),this.setFromQuaternion(Is,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}li.DefaultOrder="XYZ";li.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ol=0;const Fs=new D,Dn=new gn,zt=new He,yi=new D,Qn=new D,ll=new D,cl=new gn,Ns=new D(1,0,0),zs=new D(0,1,0),Os=new D(0,0,1),ul={type:"added"},Us={type:"removed"};class et extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();const e=new D,t=new li,n=new gn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new _t}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Ns,e)}rotateY(e){return this.rotateOnAxis(zs,e)}rotateZ(e){return this.rotateOnAxis(Os,e)}translateOnAxis(e,t){return Fs.copy(e).applyQuaternion(this.quaternion),this.position.add(Fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ns,e)}translateY(e){return this.translateOnAxis(zs,e)}translateZ(e){return this.translateOnAxis(Os,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yi.copy(e):yi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(Qn,yi,this.up):zt.lookAt(yi,Qn,this.up),this.quaternion.setFromRotationMatrix(zt),i&&(zt.extractRotation(i.matrixWorld),Dn.setFromRotationMatrix(zt),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ul)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Us)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Us)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,ll),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,cl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DefaultUp=new D(0,1,0);et.DefaultMatrixAutoUpdate=!0;const wt=new D,Ot=new D,mr=new D,Ut=new D,Pn=new D,Rn=new D,Bs=new D,gr=new D,_r=new D,xr=new D;class Gt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wt.subVectors(e,t),i.cross(wt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wt.subVectors(i,t),Ot.subVectors(n,t),mr.subVectors(e,t);const o=wt.dot(wt),a=wt.dot(Ot),c=wt.dot(mr),l=Ot.dot(Ot),u=Ot.dot(mr),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ut),Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ut),c.set(0,0),c.addScaledVector(r,Ut.x),c.addScaledVector(o,Ut.y),c.addScaledVector(a,Ut.z),c}static isFrontFacing(e,t,n,i){return wt.subVectors(n,t),Ot.subVectors(e,t),wt.cross(Ot).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),wt.cross(Ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Gt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Pn.subVectors(i,n),Rn.subVectors(r,n),gr.subVectors(e,n);const c=Pn.dot(gr),l=Rn.dot(gr);if(c<=0&&l<=0)return t.copy(n);_r.subVectors(e,i);const u=Pn.dot(_r),d=Rn.dot(_r);if(u>=0&&d<=u)return t.copy(i);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Pn,o);xr.subVectors(e,r);const m=Pn.dot(xr),_=Rn.dot(xr);if(_>=0&&m<=_)return t.copy(r);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Rn,a);const h=u*_-m*d;if(h<=0&&d-u>=0&&m-_>=0)return Bs.subVectors(r,i),a=(d-u)/(d-u+(m-_)),t.copy(i).addScaledVector(Bs,a);const x=1/(h+p+f);return o=p*x,a=f*x,t.copy(n).addScaledVector(Pn,o).addScaledVector(Rn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hl=0;class jn extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=kn,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ma,this.blendDst=ya,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===oo;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ia extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ve=new D,Si=new Me;class xt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ts,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Fe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Me),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ye),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix3(e),this.setXY(t,Si.x,Si.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ts&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fa extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Na extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dl=0;const pt=new He,vr=new et,In=new D,ct=new oi,ei=new oi,Ze=new D;class Rt extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ta(e)?Na:Fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pt.makeRotationFromQuaternion(e),this.applyMatrix4(pt),this}rotateX(e){return pt.makeRotationX(e),this.applyMatrix4(pt),this}rotateY(e){return pt.makeRotationY(e),this.applyMatrix4(pt),this}rotateZ(e){return pt.makeRotationZ(e),this.applyMatrix4(pt),this}translate(e,t,n){return pt.makeTranslation(e,t,n),this.applyMatrix4(pt),this}scale(e,t,n){return pt.makeScale(e,t,n),this.applyMatrix4(pt),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(In).negate(),this.translate(In.x,In.y,In.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ct.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,ct.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,ct.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(ct.min),this.boundingBox.expandByPoint(ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ct.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(ct.min,ei.min),ct.expandByPoint(Ze),Ze.addVectors(ct.max,ei.max),ct.expandByPoint(Ze)):(ct.expandByPoint(ei.min),ct.expandByPoint(ei.max))}ct.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ze.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ze));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ze.fromBufferAttribute(a,l),c&&(In.fromBufferAttribute(e,l),Ze.add(In)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let z=0;z<a;z++)l[z]=new D,u[z]=new D;const d=new D,f=new D,m=new D,_=new Me,p=new Me,h=new Me,x=new D,b=new D;function A(z,F,$){d.fromArray(i,z*3),f.fromArray(i,F*3),m.fromArray(i,$*3),_.fromArray(o,z*2),p.fromArray(o,F*2),h.fromArray(o,$*2),f.sub(d),m.sub(d),p.sub(_),h.sub(_);const Z=1/(p.x*h.y-h.x*p.y);!isFinite(Z)||(x.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(Z),b.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(Z),l[z].add(x),l[F].add(x),l[$].add(x),u[z].add(b),u[F].add(b),u[$].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let z=0,F=w.length;z<F;++z){const $=w[z],Z=$.start,P=$.count;for(let W=Z,B=Z+P;W<B;W+=3)A(n[W+0],n[W+1],n[W+2])}const M=new D,C=new D,R=new D,g=new D;function T(z){R.fromArray(r,z*3),g.copy(R);const F=l[z];M.copy(F),M.sub(R.multiplyScalar(R.dot(F))).normalize(),C.crossVectors(g,F);const Z=C.dot(u[z])<0?-1:1;c[z*4]=M.x,c[z*4+1]=M.y,c[z*4+2]=M.z,c[z*4+3]=Z}for(let z=0,F=w.length;z<F;++z){const $=w[z],Z=$.start,P=$.count;for(let W=Z,B=Z+P;W<B;W+=3)T(n[W+0]),T(n[W+1]),T(n[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let d=0,f=l;d<u;d++,f++)o[f]=c[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ze.fromBufferAttribute(e,t),Ze.normalize(),e.setXYZ(t,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,_=0;for(let p=0,h=c.length;p<h;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let x=0;x<u;x++)f[_++]=l[m++]}return new xt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gs=new He,Fn=new Pa,Mr=new Vi,jt=new D,Zt=new D,$t=new D,yr=new D,Sr=new D,br=new D,bi=new D,wi=new D,Ei=new D,Ti=new Me,Ai=new Me,Ci=new Me,wr=new D,Li=new D;class ut extends et{constructor(e=new Rt,t=new Ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),e.ray.intersectsSphere(Mr)===!1)||(Gs.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Gs),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const x=m[p],b=i[x.materialIndex],A=Math.max(x.start,_.start),w=Math.min(a.count,Math.min(x.start+x.count,_.start+_.count));for(let M=A,C=w;M<C;M+=3){const R=a.getX(M),g=a.getX(M+1),T=a.getX(M+2);o=Di(this,b,e,Fn,c,l,u,d,f,R,g,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let x=p,b=h;x<b;x+=3){const A=a.getX(x),w=a.getX(x+1),M=a.getX(x+2);o=Di(this,i,e,Fn,c,l,u,d,f,A,w,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const x=m[p],b=i[x.materialIndex],A=Math.max(x.start,_.start),w=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let M=A,C=w;M<C;M+=3){const R=M,g=M+1,T=M+2;o=Di(this,b,e,Fn,c,l,u,d,f,R,g,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(c.count,_.start+_.count);for(let x=p,b=h;x<b;x+=3){const A=x,w=x+1,M=x+2;o=Di(this,i,e,Fn,c,l,u,d,f,A,w,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function fl(s,e,t,n,i,r,o,a){let c;if(e.side===Tt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==Qt,a),c===null)return null;Li.copy(a),Li.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Li);return l<t.near||l>t.far?null:{distance:l,point:Li.clone(),object:s}}function Di(s,e,t,n,i,r,o,a,c,l,u,d){jt.fromBufferAttribute(i,l),Zt.fromBufferAttribute(i,u),$t.fromBufferAttribute(i,d);const f=s.morphTargetInfluences;if(r&&f){bi.set(0,0,0),wi.set(0,0,0),Ei.set(0,0,0);for(let _=0,p=r.length;_<p;_++){const h=f[_],x=r[_];h!==0&&(yr.fromBufferAttribute(x,l),Sr.fromBufferAttribute(x,u),br.fromBufferAttribute(x,d),o?(bi.addScaledVector(yr,h),wi.addScaledVector(Sr,h),Ei.addScaledVector(br,h)):(bi.addScaledVector(yr.sub(jt),h),wi.addScaledVector(Sr.sub(Zt),h),Ei.addScaledVector(br.sub($t),h)))}jt.add(bi),Zt.add(wi),$t.add(Ei)}s.isSkinnedMesh&&(s.boneTransform(l,jt),s.boneTransform(u,Zt),s.boneTransform(d,$t));const m=fl(s,e,t,n,jt,Zt,$t,wr);if(m){a&&(Ti.fromBufferAttribute(a,l),Ai.fromBufferAttribute(a,u),Ci.fromBufferAttribute(a,d),m.uv=Gt.getUV(wr,jt,Zt,$t,Ti,Ai,Ci,new Me)),c&&(Ti.fromBufferAttribute(c,l),Ai.fromBufferAttribute(c,u),Ci.fromBufferAttribute(c,d),m.uv2=Gt.getUV(wr,jt,Zt,$t,Ti,Ai,Ci,new Me));const _={a:l,b:u,c:d,normal:new D,materialIndex:0};Gt.getNormal(jt,Zt,$t,_.normal),m.face=_}return m}class ci extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(d,2));function _(p,h,x,b,A,w,M,C,R,g,T){const z=w/R,F=M/g,$=w/2,Z=M/2,P=C/2,W=R+1,B=g+1;let Y=0,X=0;const O=new D;for(let V=0;V<B;V++){const ee=V*F-Z;for(let J=0;J<W;J++){const K=J*z-$;O[p]=K*b,O[h]=ee*A,O[x]=P,l.push(O.x,O.y,O.z),O[p]=0,O[h]=0,O[x]=C>0?1:-1,u.push(O.x,O.y,O.z),d.push(J/R),d.push(1-V/g),Y+=1}}for(let V=0;V<g;V++)for(let ee=0;ee<R;ee++){const J=f+ee+W*V,K=f+ee+W*(V+1),he=f+(ee+1)+W*(V+1),ge=f+(ee+1)+W*V;c.push(J,K,ge),c.push(K,he,ge),X+=6}a.addGroup(m,X,T),m+=X,f+=Y}}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Je(s){const e={};for(let t=0;t<s.length;t++){const n=Xn(s[t]);for(const i in n)e[i]=n[i]}return e}function pl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const ml={clone:Xn,merge:Je};var gl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gl,this.fragmentShader=_l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xn(e.uniforms),this.uniformsGroups=pl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class za extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gt extends za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nn=90,zn=1;class xl extends et{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new gt(Nn,zn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const r=new gt(Nn,zn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const o=new gt(Nn,zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new gt(Nn,zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const c=new gt(Nn,zn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const l=new gt(Nn,zn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=kt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Oa extends vt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Hn,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vl extends mn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ci(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Xn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Kt});r.uniforms.tEquirect.value=t;const o=new ut(i,r),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=mt),new xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Er=new D,Ml=new D,yl=new _t;class sn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Er.subVectors(n,t).cross(Ml.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yl.getNormalMatrix(e),i=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new Vi,Pi=new D;class Vr{constructor(e=new sn,t=new sn,n=new sn,i=new sn,r=new sn,o=new sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],_=n[10],p=n[11],h=n[12],x=n[13],b=n[14],A=n[15];return t[0].setComponents(a-i,d-c,p-f,A-h).normalize(),t[1].setComponents(a+i,d+c,p+f,A+h).normalize(),t[2].setComponents(a+r,d+l,p+m,A+x).normalize(),t[3].setComponents(a-r,d-l,p-m,A-x).normalize(),t[4].setComponents(a-o,d-u,p-_,A-b).normalize(),t[5].setComponents(a+o,d+u,p+_,A+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pi.x=i.normal.x>0?e.max.x:e.min.x,Pi.y=i.normal.y>0?e.max.y:e.min.y,Pi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ua(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,d){const f=u.array,m=u.updateRange;s.bindBuffer(d,l),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(r(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class ui extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,f=t/c,m=[],_=[],p=[],h=[];for(let x=0;x<u;x++){const b=x*f-o;for(let A=0;A<l;A++){const w=A*d-r;_.push(w,-b,0),p.push(0,0,1),h.push(A/a),h.push(1-x/c)}}for(let x=0;x<c;x++)for(let b=0;b<a;b++){const A=b+l*x,w=b+l*(x+1),M=b+1+l*(x+1),C=b+1+l*x;m.push(A,w,C),m.push(w,M,C)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(h,2))}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var bl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,El=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Al=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ll="vec3 transformed = vec3( position );",Dl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Rl=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Il=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ol=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ul=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Wl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ql=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zl="gl_FragColor = linearToOutputTexel( gl_FragColor );",$l=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Jl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ql=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ec=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tc=`#ifdef USE_ENVMAP
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
#endif`,nc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ac=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,oc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cc=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,uc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,hc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,pc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,gc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_c=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,xc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ec=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ac=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ic=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Oc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,kc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Hc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Yc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$c=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,nu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,au=`#ifdef USE_SKINNING
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
#endif`,ou=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,du=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,fu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_u=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Eu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Au=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Du=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ou=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ku=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Hu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,qu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ju=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:bl,alphamap_pars_fragment:wl,alphatest_fragment:El,alphatest_pars_fragment:Tl,aomap_fragment:Al,aomap_pars_fragment:Cl,begin_vertex:Ll,beginnormal_vertex:Dl,bsdfs:Pl,iridescence_fragment:Rl,bumpmap_pars_fragment:Il,clipping_planes_fragment:Fl,clipping_planes_pars_fragment:Nl,clipping_planes_pars_vertex:zl,clipping_planes_vertex:Ol,color_fragment:Ul,color_pars_fragment:Bl,color_pars_vertex:Gl,color_vertex:kl,common:Vl,cube_uv_reflection_fragment:Hl,defaultnormal_vertex:Wl,displacementmap_pars_vertex:ql,displacementmap_vertex:Xl,emissivemap_fragment:Yl,emissivemap_pars_fragment:jl,encodings_fragment:Zl,encodings_pars_fragment:$l,envmap_fragment:Kl,envmap_common_pars_fragment:Jl,envmap_pars_fragment:Ql,envmap_pars_vertex:ec,envmap_physical_pars_fragment:hc,envmap_vertex:tc,fog_vertex:nc,fog_pars_vertex:ic,fog_fragment:rc,fog_pars_fragment:sc,gradientmap_pars_fragment:ac,lightmap_fragment:oc,lightmap_pars_fragment:lc,lights_lambert_vertex:cc,lights_pars_begin:uc,lights_toon_fragment:dc,lights_toon_pars_fragment:fc,lights_phong_fragment:pc,lights_phong_pars_fragment:mc,lights_physical_fragment:gc,lights_physical_pars_fragment:_c,lights_fragment_begin:xc,lights_fragment_maps:vc,lights_fragment_end:Mc,logdepthbuf_fragment:yc,logdepthbuf_pars_fragment:Sc,logdepthbuf_pars_vertex:bc,logdepthbuf_vertex:wc,map_fragment:Ec,map_pars_fragment:Tc,map_particle_fragment:Ac,map_particle_pars_fragment:Cc,metalnessmap_fragment:Lc,metalnessmap_pars_fragment:Dc,morphcolor_vertex:Pc,morphnormal_vertex:Rc,morphtarget_pars_vertex:Ic,morphtarget_vertex:Fc,normal_fragment_begin:Nc,normal_fragment_maps:zc,normal_pars_fragment:Oc,normal_pars_vertex:Uc,normal_vertex:Bc,normalmap_pars_fragment:Gc,clearcoat_normal_fragment_begin:kc,clearcoat_normal_fragment_maps:Vc,clearcoat_pars_fragment:Hc,iridescence_pars_fragment:Wc,output_fragment:qc,packing:Xc,premultiplied_alpha_fragment:Yc,project_vertex:jc,dithering_fragment:Zc,dithering_pars_fragment:$c,roughnessmap_fragment:Kc,roughnessmap_pars_fragment:Jc,shadowmap_pars_fragment:Qc,shadowmap_pars_vertex:eu,shadowmap_vertex:tu,shadowmask_pars_fragment:nu,skinbase_vertex:iu,skinning_pars_vertex:ru,skinning_vertex:su,skinnormal_vertex:au,specularmap_fragment:ou,specularmap_pars_fragment:lu,tonemapping_fragment:cu,tonemapping_pars_fragment:uu,transmission_fragment:hu,transmission_pars_fragment:du,uv_pars_fragment:fu,uv_pars_vertex:pu,uv_vertex:mu,uv2_pars_fragment:gu,uv2_pars_vertex:_u,uv2_vertex:xu,worldpos_vertex:vu,background_vert:Mu,background_frag:yu,cube_vert:Su,cube_frag:bu,depth_vert:wu,depth_frag:Eu,distanceRGBA_vert:Tu,distanceRGBA_frag:Au,equirect_vert:Cu,equirect_frag:Lu,linedashed_vert:Du,linedashed_frag:Pu,meshbasic_vert:Ru,meshbasic_frag:Iu,meshlambert_vert:Fu,meshlambert_frag:Nu,meshmatcap_vert:zu,meshmatcap_frag:Ou,meshnormal_vert:Uu,meshnormal_frag:Bu,meshphong_vert:Gu,meshphong_frag:ku,meshphysical_vert:Vu,meshphysical_frag:Hu,meshtoon_vert:Wu,meshtoon_frag:qu,points_vert:Xu,points_frag:Yu,shadow_vert:ju,shadow_frag:Zu,sprite_vert:$u,sprite_frag:Ku},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _t},uv2Transform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}}},Ct={basic:{uniforms:Je([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Je([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Je([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Je([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Je([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Je([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Je([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Je([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Je([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Je([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Je([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null}},vertexShader:we.background_vert,fragmentShader:we.background_frag},cube:{uniforms:Je([re.envmap,{opacity:{value:1}}]),vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Je([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Je([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Ct.physical={uniforms:Je([Ct.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};function Ju(s,e,t,n,i,r){const o=new Fe(0);let a=i===!0?0:1,c,l,u=null,d=0,f=null;function m(p,h){let x=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=e.get(b));const A=s.xr,w=A.getSession&&A.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?_(o,a):b&&b.isColor&&(_(b,1),x=!0),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gi)?(l===void 0&&(l=new ut(new ci(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Xn(Ct.cube.uniforms),vertexShader:Ct.cube.vertexShader,fragmentShader:Ct.cube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||d!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ut(new ui(2,2),new _n({name:"BackgroundMaterial",uniforms:Xn(Ct.background.uniforms),vertexShader:Ct.background.vertexShader,fragmentShader:Ct.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:m}}function Qu(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=h(null);let l=c,u=!1;function d(P,W,B,Y,X){let O=!1;if(o){const V=p(Y,B,W);l!==V&&(l=V,m(l.object)),O=x(P,Y,B,X),O&&b(P,Y,B,X)}else{const V=W.wireframe===!0;(l.geometry!==Y.id||l.program!==B.id||l.wireframe!==V)&&(l.geometry=Y.id,l.program=B.id,l.wireframe=V,O=!0)}X!==null&&t.update(X,34963),(O||u)&&(u=!1,g(P,W,B,Y),X!==null&&s.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,W,B){const Y=B.wireframe===!0;let X=a[P.id];X===void 0&&(X={},a[P.id]=X);let O=X[W.id];O===void 0&&(O={},X[W.id]=O);let V=O[Y];return V===void 0&&(V=h(f()),O[Y]=V),V}function h(P){const W=[],B=[],Y=[];for(let X=0;X<i;X++)W[X]=0,B[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:B,attributeDivisors:Y,object:P,attributes:{},index:null}}function x(P,W,B,Y){const X=l.attributes,O=W.attributes;let V=0;const ee=B.getAttributes();for(const J in ee)if(ee[J].location>=0){const he=X[J];let ge=O[J];if(ge===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),he===void 0||he.attribute!==ge||ge&&he.data!==ge.data)return!0;V++}return l.attributesNum!==V||l.index!==Y}function b(P,W,B,Y){const X={},O=W.attributes;let V=0;const ee=B.getAttributes();for(const J in ee)if(ee[J].location>=0){let he=O[J];he===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const ge={};ge.attribute=he,he&&he.data&&(ge.data=he.data),X[J]=ge,V++}l.attributes=X,l.attributesNum=V,l.index=Y}function A(){const P=l.newAttributes;for(let W=0,B=P.length;W<B;W++)P[W]=0}function w(P){M(P,0)}function M(P,W){const B=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;B[P]=1,Y[P]===0&&(s.enableVertexAttribArray(P),Y[P]=1),X[P]!==W&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,W),X[P]=W)}function C(){const P=l.newAttributes,W=l.enabledAttributes;for(let B=0,Y=W.length;B<Y;B++)W[B]!==P[B]&&(s.disableVertexAttribArray(B),W[B]=0)}function R(P,W,B,Y,X,O){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(P,W,B,X,O):s.vertexAttribPointer(P,W,B,Y,X,O)}function g(P,W,B,Y){if(n.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const X=Y.attributes,O=B.getAttributes(),V=W.defaultAttributeValues;for(const ee in O){const J=O[ee];if(J.location>=0){let K=X[ee];if(K===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const he=K.normalized,ge=K.itemSize,H=t.get(K);if(H===void 0)continue;const Le=H.buffer,fe=H.type,_e=H.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Pe=ue.stride,ye=K.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<J.locationSize;de++)M(J.location+de,ue.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<J.locationSize;de++)w(J.location+de);s.bindBuffer(34962,Le);for(let de=0;de<J.locationSize;de++)R(J.location+de,ge/J.locationSize,fe,he,Pe*_e,(ye+ge/J.locationSize*de)*_e)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)M(J.location+ue,K.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<J.locationSize;ue++)w(J.location+ue);s.bindBuffer(34962,Le);for(let ue=0;ue<J.locationSize;ue++)R(J.location+ue,ge/J.locationSize,fe,he,ge*_e,ge/J.locationSize*ue*_e)}}else if(V!==void 0){const he=V[ee];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(J.location,he);break;case 3:s.vertexAttrib3fv(J.location,he);break;case 4:s.vertexAttrib4fv(J.location,he);break;default:s.vertexAttrib1fv(J.location,he)}}}}C()}function T(){$();for(const P in a){const W=a[P];for(const B in W){const Y=W[B];for(const X in Y)_(Y[X].object),delete Y[X];delete W[B]}delete a[P]}}function z(P){if(a[P.id]===void 0)return;const W=a[P.id];for(const B in W){const Y=W[B];for(const X in Y)_(Y[X].object),delete Y[X];delete W[B]}delete a[P.id]}function F(P){for(const W in a){const B=a[W];if(B[P.id]===void 0)continue;const Y=B[P.id];for(const X in Y)_(Y[X].object),delete Y[X];delete B[P.id]}}function $(){Z(),u=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:$,resetDefaultState:Z,dispose:T,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:w,disableUnusedAttributes:C}}function eh(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function th(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),p=s.getParameter(34921),h=s.getParameter(36347),x=s.getParameter(36348),b=s.getParameter(36349),A=f>0,w=o||e.has("OES_texture_float"),M=A&&w,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:A,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function nh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new sn,a=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const _=d.length!==0||f||n!==0||i;return i=f,t=u(d,m,0),n=d.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(d,f,m){const _=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,x=s.get(d);if(!i||_===null||_.length===0||r&&!h)r?u(null):l();else{const b=r?0:n,A=b*4;let w=x.clippingState||null;c.value=w,w=u(_,f,A,m);for(let M=0;M!==A;++M)w[M]=t[M];x.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,_){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=c.value,_!==!0||h===null){const x=m+p*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<x)&&(h=new Float32Array(x));for(let A=0,w=m;A!==p;++A,w+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(h,w),h[w+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function ih(s){let e=new WeakMap;function t(o,a){return a===Ir?o.mapping=Hn:a===Fr&&(o.mapping=Wn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ir||a===Fr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ba extends za{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gn=4,ks=[.125,.215,.35,.446,.526,.582],on=20,Tr=new Ba,Vs=new Fe;let Ar=null;const an=(1+Math.sqrt(5))/2,Un=1/an,Hs=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,an,Un),new D(0,an,-Un),new D(Un,0,an),new D(-Un,0,an),new D(an,Un,0),new D(-an,Un,0)];class Ws{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar),e.scissorTest=!1,Ri(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:ri,format:Dt,encoding:pn,depthBuffer:!1},i=qs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qs(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rh(r)),this._blurMaterial=sh(r,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,n,i){const a=new gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vs),u.toneMapping=kt,u.autoClear=!1;const m=new Ia({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),_=new ut(new ci,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Vs),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):b===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const A=this._cubeSize;Ri(i,b*A,x>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hn||e.mapping===Wn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xs());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ri(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Tr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hs[(i-1)%Hs.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ut(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*on-1),p=r/_,h=isFinite(r)?1+Math.floor(u*p):on;h>on&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${on}`);const x=[];let b=0;for(let R=0;R<on;++R){const g=R/p,T=Math.exp(-g*g/2);x.push(T),R===0?b+=T:R<h&&(b+=2*T)}for(let R=0;R<x.length;R++)x[R]=x[R]/b;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;const w=this._sizeLods[i],M=3*w*(i>A-Gn?i-A+Gn:0),C=4*(this._cubeSize-w);Ri(t,M,C,3*w,2*w),c.setRenderTarget(t),c.render(d,Tr)}}function rh(s){const e=[],t=[],n=[];let i=s;const r=s-Gn+1+ks.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Gn?c=ks[o-s+Gn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,p=3,h=2,x=1,b=new Float32Array(p*_*m),A=new Float32Array(h*_*m),w=new Float32Array(x*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,g=C>2?0:-1,T=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];b.set(T,p*_*C),A.set(f,h*_*C);const z=[C,C,C,C,C,C];w.set(z,x*_*C)}const M=new Rt;M.setAttribute("position",new xt(b,p)),M.setAttribute("uv",new xt(A,h)),M.setAttribute("faceIndex",new xt(w,x)),e.push(M),i>Gn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qs(s,e,t){const n=new mn(s,e,t);return n.texture.mapping=Gi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ri(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function sh(s,e,t){const n=new Float32Array(on),i=new D(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Xs(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

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
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Ys(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Hr(){return`

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
	`}function ah(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ir||c===Fr,u=c===Hn||c===Wn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ws(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Ws(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lh(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,x=p.length;h<x;h++)e.update(p[h],34962)}}function l(d){const f=[],m=d.index,_=d.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let A=0,w=b.length;A<w;A+=3){const M=b[A+0],C=b[A+1],R=b[A+2];f.push(M,C,C,R,R,M)}}else{const b=_.array;p=_.version;for(let A=0,w=b.length/3-1;A<w;A+=3){const M=A+0,C=A+1,R=A+2;f.push(M,C,C,R,R,M)}}const h=new(Ta(f)?Na:Fa)(f,1);h.version=p;const x=r.get(d);x&&e.remove(x),r.set(d,h)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function ch(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),t.update(m,r,1)}function d(f,m,_){if(_===0)return;let p,h;if(i)p=s,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,a,f*c,_),t.update(m,r,_)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function uh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hh(s,e){return s[0]-e[0]}function dh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Cr(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function fh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Ye,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==h){let B=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var _=B;x!==void 0&&x.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let z=0;w===!0&&(z=1),M===!0&&(z=2),C===!0&&(z=3);let F=u.attributes.position.count*z,$=1;F>e.maxTextureSize&&($=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Z=new Float32Array(F*$*4*h),P=new Da(Z,F,$,h);P.type=cn,P.needsUpdate=!0;const W=z*4;for(let Y=0;Y<h;Y++){const X=R[Y],O=g[Y],V=T[Y],ee=F*$*4*Y;for(let J=0;J<X.count;J++){const K=J*W;w===!0&&(o.fromBufferAttribute(X,J),X.normalized===!0&&Cr(o,X),Z[ee+K+0]=o.x,Z[ee+K+1]=o.y,Z[ee+K+2]=o.z,Z[ee+K+3]=0),M===!0&&(o.fromBufferAttribute(O,J),O.normalized===!0&&Cr(o,O),Z[ee+K+4]=o.x,Z[ee+K+5]=o.y,Z[ee+K+6]=o.z,Z[ee+K+7]=0),C===!0&&(o.fromBufferAttribute(V,J),V.normalized===!0&&Cr(o,V),Z[ee+K+8]=o.x,Z[ee+K+9]=o.y,Z[ee+K+10]=o.z,Z[ee+K+11]=V.itemSize===4?o.w:1)}}x={count:h,texture:P,size:new Me(F,$)},r.set(u,x),u.addEventListener("dispose",B)}let b=0;for(let w=0;w<m.length;w++)b+=m[w];const A=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",A),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let M=0;M<p;M++)h[M]=[M,0];n[u.id]=h}for(let M=0;M<p;M++){const C=h[M];C[0]=M,C[1]=m[M]}h.sort(dh);for(let M=0;M<8;M++)M<p&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(hh);const x=u.morphAttributes.position,b=u.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const C=a[M],R=C[0],g=C[1];R!==Number.MAX_SAFE_INTEGER&&g?(x&&u.getAttribute("morphTarget"+M)!==x[R]&&u.setAttribute("morphTarget"+M,x[R]),b&&u.getAttribute("morphNormal"+M)!==b[R]&&u.setAttribute("morphNormal"+M,b[R]),i[M]=g,A+=g):(x&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const w=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ph(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Ga=new vt,ka=new Da,Va=new il,Ha=new Oa,js=[],Zs=[],$s=new Float32Array(16),Ks=new Float32Array(9),Js=new Float32Array(4);function Zn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=js[i];if(r===void 0&&(r=new Float32Array(i),js[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hi(s,e){let t=Zs[e];t===void 0&&(t=new Int32Array(e),Zs[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;s.uniform2fv(this.addr,e),nt(t,e)}}function _h(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;s.uniform3fv(this.addr,e),nt(t,e)}}function xh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;s.uniform4fv(this.addr,e),nt(t,e)}}function vh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Js.set(n),s.uniformMatrix2fv(this.addr,!1,Js),nt(t,n)}}function Mh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ks.set(n),s.uniformMatrix3fv(this.addr,!1,Ks),nt(t,n)}}function yh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;$s.set(n),s.uniformMatrix4fv(this.addr,!1,$s),nt(t,n)}}function Sh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function bh(s,e){const t=this.cache;tt(t,e)||(s.uniform2iv(this.addr,e),nt(t,e))}function wh(s,e){const t=this.cache;tt(t,e)||(s.uniform3iv(this.addr,e),nt(t,e))}function Eh(s,e){const t=this.cache;tt(t,e)||(s.uniform4iv(this.addr,e),nt(t,e))}function Th(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ah(s,e){const t=this.cache;tt(t,e)||(s.uniform2uiv(this.addr,e),nt(t,e))}function Ch(s,e){const t=this.cache;tt(t,e)||(s.uniform3uiv(this.addr,e),nt(t,e))}function Lh(s,e){const t=this.cache;tt(t,e)||(s.uniform4uiv(this.addr,e),nt(t,e))}function Dh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ga,i)}function Ph(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Va,i)}function Rh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ha,i)}function Ih(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ka,i)}function Fh(s){switch(s){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return xh;case 35674:return vh;case 35675:return Mh;case 35676:return yh;case 5124:case 35670:return Sh;case 35667:case 35671:return bh;case 35668:case 35672:return wh;case 35669:case 35673:return Eh;case 5125:return Th;case 36294:return Ah;case 36295:return Ch;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Ph;case 35680:case 36300:case 36308:case 36293:return Rh;case 36289:case 36303:case 36311:case 36292:return Ih}}function Nh(s,e){s.uniform1fv(this.addr,e)}function zh(s,e){const t=Zn(e,this.size,2);s.uniform2fv(this.addr,t)}function Oh(s,e){const t=Zn(e,this.size,3);s.uniform3fv(this.addr,t)}function Uh(s,e){const t=Zn(e,this.size,4);s.uniform4fv(this.addr,t)}function Bh(s,e){const t=Zn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gh(s,e){const t=Zn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kh(s,e){const t=Zn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vh(s,e){s.uniform1iv(this.addr,e)}function Hh(s,e){s.uniform2iv(this.addr,e)}function Wh(s,e){s.uniform3iv(this.addr,e)}function qh(s,e){s.uniform4iv(this.addr,e)}function Xh(s,e){s.uniform1uiv(this.addr,e)}function Yh(s,e){s.uniform2uiv(this.addr,e)}function jh(s,e){s.uniform3uiv(this.addr,e)}function Zh(s,e){s.uniform4uiv(this.addr,e)}function $h(s,e,t){const n=e.length,i=Hi(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Ga,i[r])}function Kh(s,e,t){const n=e.length,i=Hi(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Va,i[r])}function Jh(s,e,t){const n=e.length,i=Hi(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ha,i[r])}function Qh(s,e,t){const n=e.length,i=Hi(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ka,i[r])}function ed(s){switch(s){case 5126:return Nh;case 35664:return zh;case 35665:return Oh;case 35666:return Uh;case 35674:return Bh;case 35675:return Gh;case 35676:return kh;case 5124:case 35670:return Vh;case 35667:case 35671:return Hh;case 35668:case 35672:return Wh;case 35669:case 35673:return qh;case 5125:return Xh;case 36294:return Yh;case 36295:return jh;case 36296:return Zh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return Kh;case 35680:case 36300:case 36308:case 36293:return Jh;case 36289:case 36303:case 36311:case 36292:return Qh}}class td{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Fh(t.type)}}class nd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ed(t.type)}}class id{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Qs(s,e){s.seq.push(e),s.map[e.id]=e}function rd(s,e,t){const n=s.name,i=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),o=Lr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qs(t,l===void 0?new td(a,s,e):new nd(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new id(a),Qs(t,d)),t=d}}}class Oi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);rd(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ea(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let sd=0;function ad(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function od(s){switch(s){case pn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function ta(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ad(s.getShaderSource(e),o)}else return i}function ld(s,e){const t=od(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cd(s,e){let t;switch(e){case Do:t="Linear";break;case Po:t="Reinhard";break;case Ro:t="OptimizedCineon";break;case Io:t="ACESFilmic";break;case Fo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ud(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function hd(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dd(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ni(s){return s!==""}function na(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ia(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Br(s){return s.replace(fd,pd)}function pd(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Br(t)}const md=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,gd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ra(s){return s.replace(gd,Wa).replace(md,_d)}function _d(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wa(s,e,t,n)}function Wa(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===va?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ao?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function vd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hn:case Wn:e="ENVMAP_TYPE_CUBE";break;case Gi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Md(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wn:e="ENVMAP_MODE_REFRACTION";break}return e}function yd(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case Co:e="ENVMAP_BLENDING_MIX";break;case Lo:e="ENVMAP_BLENDING_ADD";break}return e}function Sd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function bd(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=xd(t),l=vd(t),u=Md(t),d=yd(t),f=Sd(t),m=t.isWebGL2?"":ud(t),_=hd(r),p=i.createProgram();let h,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(ni).join(`
`),h.length>0&&(h+=`
`),x=[m,_].filter(ni).join(`
`),x.length>0&&(x+=`
`)):(h=[sa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),x=[m,sa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kt?"#define TONE_MAPPING":"",t.toneMapping!==kt?we.tonemapping_pars_fragment:"",t.toneMapping!==kt?cd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,ld("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=Br(o),o=na(o,t),o=ia(o,t),a=Br(a),a=na(a,t),a=ia(a,t),o=ra(o),a=ra(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["#define varying in",t.glslVersion===As?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===As?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=b+h+o,w=b+x+a,M=ea(i,35633,A),C=ea(i,35632,w);if(i.attachShader(p,M),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(C).trim();let $=!0,Z=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const P=ta(i,M,"vertex"),W=ta(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+P+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(z===""||F==="")&&(Z=!1);Z&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:z,prefix:h},fragmentShader:{log:F,prefix:x}})}i.deleteShader(M),i.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new Oi(i,p)),R};let g;return this.getAttributes=function(){return g===void 0&&(g=dd(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=sd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let wd=0;class Ed{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Td(e);t.set(e,n)}return t.get(e)}}class Td{constructor(e){this.id=wd++,this.code=e,this.usedTimes=0}}function Ad(s,e,t,n,i,r,o){const a=new Ra,c=new Ed,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,T,z,F,$){const Z=F.fog,P=$.geometry,W=g.isMeshStandardMaterial?F.environment:null,B=(g.isMeshStandardMaterial?t:e).get(g.envMap||W),Y=!!B&&B.mapping===Gi?B.image.height:null,X=_[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const O=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,V=O!==void 0?O.length:0;let ee=0;P.morphAttributes.position!==void 0&&(ee=1),P.morphAttributes.normal!==void 0&&(ee=2),P.morphAttributes.color!==void 0&&(ee=3);let J,K,he,ge;if(X){const Pe=Ct[X];J=Pe.vertexShader,K=Pe.fragmentShader}else J=g.vertexShader,K=g.fragmentShader,c.update(g),he=c.getVertexShaderID(g),ge=c.getFragmentShaderID(g);const H=s.getRenderTarget(),Le=g.alphaTest>0,fe=g.clearcoat>0,_e=g.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:g.type,vertexShader:J,fragmentShader:K,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:pn,map:!!g.map,matcap:!!g.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:Y,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Qo,tangentSpaceNormalMap:g.normalMapType===Ea,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Ue,clearcoat:fe,clearcoatMap:fe&&!!g.clearcoatMap,clearcoatRoughnessMap:fe&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!g.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!g.iridescenceMap,iridescenceThicknessMap:_e&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===kn,alphaMap:!!g.alphaMap,alphaTest:Le,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!P.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!Z,useFog:g.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:kt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Qt,flipSided:g.side===Tt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const z in g.defines)T.push(z),T.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(x(T,g),b(T,g),T.push(s.outputEncoding)),T.push(g.customProgramCacheKey),T.join()}function x(g,T){g.push(T.precision),g.push(T.outputEncoding),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.combine),g.push(T.vertexUvs),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function b(g,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),g.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),g.push(a.mask)}function A(g){const T=_[g.type];let z;if(T){const F=Ct[T];z=ml.clone(F.uniforms)}else z=g.uniforms;return z}function w(g,T){let z;for(let F=0,$=l.length;F<$;F++){const Z=l[F];if(Z.cacheKey===T){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new bd(s,T,g,r),l.push(z)),z}function M(g){if(--g.usedTimes===0){const T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),g.destroy()}}function C(g){c.remove(g)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:A,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:l,dispose:R}}function Cd(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ld(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function aa(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,_,p,h){let x=s[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:p,group:h},s[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=p,x.group=h),e++,x}function a(d,f,m,_,p,h){const x=o(d,f,m,_,p,h);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(d,f,m,_,p,h){const x=o(d,f,m,_,p,h);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(d,f){t.length>1&&t.sort(d||Ld),n.length>1&&n.sort(f||aa),i.length>1&&i.sort(f||aa)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Dd(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new oa,s.set(n,[r])):i>=s.get(n).length?(r=new oa,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Rd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Id=0;function Fd(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Nd(s,e){const t=new Pd,n=Rd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new He,a=new He;function c(u,d){let f=0,m=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,h=0,x=0,b=0,A=0,w=0,M=0,C=0;u.sort(Fd);const R=d!==!0?Math.PI:1;for(let T=0,z=u.length;T<z;T++){const F=u[T],$=F.color,Z=F.intensity,P=F.distance,W=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=$.r*Z*R,m+=$.g*Z*R,_+=$.b*Z*R;else if(F.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(F.sh.coefficients[B],Z);else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const Y=F.shadow,X=n.get(F);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=F.shadow.matrix,w++}i.directional[p]=B,p++}else if(F.isSpotLight){const B=t.get(F);if(B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy($).multiplyScalar(Z*R),B.distance=P,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,F.castShadow){const Y=F.shadow,X=n.get(F);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=W,i.spotShadowMatrix[x]=F.shadow.matrix,C++}i.spot[x]=B,x++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy($).multiplyScalar(Z),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),i.rectArea[b]=B,b++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*R),B.distance=F.distance,B.decay=F.decay,F.castShadow){const Y=F.shadow,X=n.get(F);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,i.pointShadow[h]=X,i.pointShadowMap[h]=W,i.pointShadowMatrix[h]=F.shadow.matrix,M++}i.point[h]=B,h++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(Z*R),B.groundColor.copy(F.groundColor).multiplyScalar(Z*R),i.hemi[A]=B,A++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const g=i.hash;(g.directionalLength!==p||g.pointLength!==h||g.spotLength!==x||g.rectAreaLength!==b||g.hemiLength!==A||g.numDirectionalShadows!==w||g.numPointShadows!==M||g.numSpotShadows!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=b,i.point.length=h,i.hemi.length=A,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=C,g.directionalLength=p,g.pointLength=h,g.spotLength=x,g.rectAreaLength=b,g.hemiLength=A,g.numDirectionalShadows=w,g.numPointShadows=M,g.numSpotShadows=C,i.version=Id++)}function l(u,d){let f=0,m=0,_=0,p=0,h=0;const x=d.matrixWorldInverse;for(let b=0,A=u.length;b<A;b++){const w=u[b];if(w.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(w.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),_++}else if(w.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),a.identity(),o.copy(w.matrixWorld),o.premultiply(x),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(x),m++}else if(w.isHemisphereLight){const M=i.hemi[h];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(x),h++}}}return{setup:c,setupView:l,state:i}}function la(s,e){const t=new Nd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zd(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new la(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new la(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Od extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ko,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ud extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gd=`uniform sampler2D shadow_pass;
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
}`;function kd(s,e,t){let n=new Vr;const i=new Me,r=new Me,o=new Ye,a=new Od({depthPacking:Jo}),c=new Ud,l={},u=t.maxTextureSize,d={0:Tt,1:ii,2:Qt},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Bd,fragmentShader:Gd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Rt;_.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new ut(_,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va,this.render=function(w,M,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const R=s.getRenderTarget(),g=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Kt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let F=0,$=w.length;F<$;F++){const Z=w[F],P=Z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const W=P.getFrameExtents();if(i.multiply(W),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,P.mapSize.y=r.y)),P.map===null){const Y=this.type!==ti?{minFilter:it,magFilter:it}:{};P.map=new mn(i.x,i.y,Y),P.map.texture.name=Z.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const B=P.getViewportCount();for(let Y=0;Y<B;Y++){const X=P.getViewport(Y);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),z.viewport(o),P.updateMatrices(Z,Y),n=P.getFrustum(),A(M,C,P.camera,Z,this.type)}P.isPointLightShadow!==!0&&this.type===ti&&x(P,C),P.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(R,g,T)};function x(w,M){const C=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(M,null,C,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(M,null,C,m,p,null)}function b(w,M,C,R,g,T){let z=null;const F=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0?z=F:z=C.isPointLight===!0?c:a,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const $=z.uuid,Z=M.uuid;let P=l[$];P===void 0&&(P={},l[$]=P);let W=P[Z];W===void 0&&(W=z.clone(),P[Z]=W),z=W}return z.visible=M.visible,z.wireframe=M.wireframe,T===ti?z.side=M.shadowSide!==null?M.shadowSide:M.side:z.side=M.shadowSide!==null?M.shadowSide:d[M.side],z.alphaMap=M.alphaMap,z.alphaTest=M.alphaTest,z.clipShadows=M.clipShadows,z.clippingPlanes=M.clippingPlanes,z.clipIntersection=M.clipIntersection,z.displacementMap=M.displacementMap,z.displacementScale=M.displacementScale,z.displacementBias=M.displacementBias,z.wireframeLinewidth=M.wireframeLinewidth,z.linewidth=M.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(C.matrixWorld),z.nearDistance=R,z.farDistance=g),z}function A(w,M,C,R,g){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=e.update(w),$=w.material;if(Array.isArray($)){const Z=F.groups;for(let P=0,W=Z.length;P<W;P++){const B=Z[P],Y=$[B.materialIndex];if(Y&&Y.visible){const X=b(w,Y,R,C.near,C.far,g);s.renderBufferDirect(C,null,F,X,w,B)}}}else if($.visible){const Z=b(w,$,R,C.near,C.far,g);s.renderBufferDirect(C,null,F,Z,w,null)}}const z=w.children;for(let F=0,$=z.length;F<$;F++)A(z[F],M,C,R,g)}}function Vd(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ie=new Ye;let G=null;const ce=new Ye(0,0,0,0);return{setMask:function(le){G!==le&&!L&&(s.colorMask(le,le,le,le),G=le)},setLocked:function(le){L=le},setClear:function(le,Ae,je,Be,Vt){Vt===!0&&(le*=Be,Ae*=Be,je*=Be),ie.set(le,Ae,je,Be),ce.equals(ie)===!1&&(s.clearColor(le,Ae,je,Be),ce.copy(ie))},reset:function(){L=!1,G=null,ce.set(-1,0,0,0)}}}function r(){let L=!1,ie=null,G=null,ce=null;return{setTest:function(le){le?Le(2929):fe(2929)},setMask:function(le){ie!==le&&!L&&(s.depthMask(le),ie=le)},setFunc:function(le){if(G!==le){if(le)switch(le){case yo:s.depthFunc(512);break;case So:s.depthFunc(519);break;case bo:s.depthFunc(513);break;case Rr:s.depthFunc(515);break;case wo:s.depthFunc(514);break;case Eo:s.depthFunc(518);break;case To:s.depthFunc(516);break;case Ao:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);G=le}},setLocked:function(le){L=le},setClear:function(le){ce!==le&&(s.clearDepth(le),ce=le)},reset:function(){L=!1,ie=null,G=null,ce=null}}}function o(){let L=!1,ie=null,G=null,ce=null,le=null,Ae=null,je=null,Be=null,Vt=null;return{setTest:function(ze){L||(ze?Le(2960):fe(2960))},setMask:function(ze){ie!==ze&&!L&&(s.stencilMask(ze),ie=ze)},setFunc:function(ze,It,dt){(G!==ze||ce!==It||le!==dt)&&(s.stencilFunc(ze,It,dt),G=ze,ce=It,le=dt)},setOp:function(ze,It,dt){(Ae!==ze||je!==It||Be!==dt)&&(s.stencilOp(ze,It,dt),Ae=ze,je=It,Be=dt)},setLocked:function(ze){L=ze},setClear:function(ze){Vt!==ze&&(s.clearStencil(ze),Vt=ze)},reset:function(){L=!1,ie=null,G=null,ce=null,le=null,Ae=null,je=null,Be=null,Vt=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,p=[],h=null,x=!1,b=null,A=null,w=null,M=null,C=null,R=null,g=null,T=!1,z=null,F=null,$=null,Z=null,P=null;const W=s.getParameter(35661);let B=!1,Y=0;const X=s.getParameter(7938);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=Y>=2);let O=null,V={};const ee=s.getParameter(3088),J=s.getParameter(2978),K=new Ye().fromArray(ee),he=new Ye().fromArray(J);function ge(L,ie,G){const ce=new Uint8Array(4),le=s.createTexture();s.bindTexture(L,le),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Ae=0;Ae<G;Ae++)s.texImage2D(ie+Ae,0,6408,1,1,0,6408,5121,ce);return le}const H={};H[3553]=ge(3553,3553,1),H[34067]=ge(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(2929),c.setFunc(Rr),We(!1),st(Kr),Le(2884),Ge(Kt);function Le(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function fe(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function _e(L,ie){return m[L]!==ie?(s.bindFramebuffer(L,ie),m[L]=ie,n&&(L===36009&&(m[36160]=ie),L===36160&&(m[36009]=ie)),!0):!1}function ue(L,ie){let G=p,ce=!1;if(L)if(G=_.get(ie),G===void 0&&(G=[],_.set(ie,G)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(G.length!==le.length||G[0]!==36064){for(let Ae=0,je=le.length;Ae<je;Ae++)G[Ae]=36064+Ae;G.length=le.length,ce=!0}}else G[0]!==36064&&(G[0]=36064,ce=!0);else G[0]!==1029&&(G[0]=1029,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Pe(L){return h!==L?(s.useProgram(L),h=L,!0):!1}const ye={[Bn]:32774,[co]:32778,[uo]:32779};if(n)ye[ts]=32775,ye[ns]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[ts]=L.MIN_EXT,ye[ns]=L.MAX_EXT)}const de={[ho]:0,[fo]:1,[po]:768,[Ma]:770,[Mo]:776,[xo]:774,[go]:772,[mo]:769,[ya]:771,[vo]:775,[_o]:773};function Ge(L,ie,G,ce,le,Ae,je,Be){if(L===Kt){x===!0&&(fe(3042),x=!1);return}if(x===!1&&(Le(3042),x=!0),L!==lo){if(L!==b||Be!==T){if((A!==Bn||C!==Bn)&&(s.blendEquation(32774),A=Bn,C=Bn),Be)switch(L){case kn:s.blendFuncSeparate(1,771,1,771);break;case Jr:s.blendFunc(1,1);break;case Qr:s.blendFuncSeparate(0,769,0,1);break;case es:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case kn:s.blendFuncSeparate(770,771,1,771);break;case Jr:s.blendFunc(770,1);break;case Qr:s.blendFuncSeparate(0,769,0,1);break;case es:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,M=null,R=null,g=null,b=L,T=Be}return}le=le||ie,Ae=Ae||G,je=je||ce,(ie!==A||le!==C)&&(s.blendEquationSeparate(ye[ie],ye[le]),A=ie,C=le),(G!==w||ce!==M||Ae!==R||je!==g)&&(s.blendFuncSeparate(de[G],de[ce],de[Ae],de[je]),w=G,M=ce,R=Ae,g=je),b=L,T=null}function $e(L,ie){L.side===Qt?fe(2884):Le(2884);let G=L.side===Tt;ie&&(G=!G),We(G),L.blending===kn&&L.transparent===!1?Ge(Kt):Ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const ce=L.stencilWrite;l.setTest(ce),ce&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Re(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(32926):fe(32926)}function We(L){z!==L&&(L?s.frontFace(2304):s.frontFace(2305),z=L)}function st(L){L!==ro?(Le(2884),L!==F&&(L===Kr?s.cullFace(1029):L===so?s.cullFace(1028):s.cullFace(1032))):fe(2884),F=L}function qe(L){L!==$&&(B&&s.lineWidth(L),$=L)}function Re(L,ie,G){L?(Le(32823),(Z!==ie||P!==G)&&(s.polygonOffset(ie,G),Z=ie,P=G)):fe(32823)}function ht(L){L?Le(3089):fe(3089)}function at(L){L===void 0&&(L=33984+W-1),O!==L&&(s.activeTexture(L),O=L)}function E(L,ie){O===null&&at();let G=V[O];G===void 0&&(G={type:void 0,texture:void 0},V[O]=G),(G.type!==L||G.texture!==ie)&&(s.bindTexture(L,ie||H[L]),G.type=L,G.texture=ie)}function v(){const L=V[O];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function y(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(L){K.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function se(L){he.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function me(L,ie){let G=d.get(ie);G===void 0&&(G=new WeakMap,d.set(ie,G));let ce=G.get(L);ce===void 0&&(ce=s.getUniformBlockIndex(ie,L.name),G.set(L,ce))}function Ee(L,ie){const ce=d.get(ie).get(L);u.get(L)!==ce&&(s.uniformBlockBinding(ie,ce,L.__bindingPointIndex),u.set(L,ce))}function Ne(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},O=null,V={},m={},_=new WeakMap,p=[],h=null,x=!1,b=null,A=null,w=null,M=null,C=null,R=null,g=null,T=!1,z=null,F=null,$=null,Z=null,P=null,K.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Le,disable:fe,bindFramebuffer:_e,drawBuffers:ue,useProgram:Pe,setBlending:Ge,setMaterial:$e,setFlipSided:We,setCullFace:st,setLineWidth:qe,setPolygonOffset:Re,setScissorTest:ht,activeTexture:at,bindTexture:E,unbindTexture:v,compressedTexImage2D:k,texImage2D:j,texImage3D:ne,updateUBOMapping:me,uniformBlockBinding:Ee,texStorage2D:pe,texStorage3D:y,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:ae,scissor:oe,viewport:se,reset:Ne}}function Hd(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return x?new OffscreenCanvas(E,v):si("canvas")}function A(E,v,k,Q){let te=1;if((E.width>Q||E.height>Q)&&(te=Q/Math.max(E.width,E.height)),te<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=v?Ur:Math.floor,pe=ae(te*E.width),y=ae(te*E.height);p===void 0&&(p=b(pe,y));const j=k?b(pe,y):p;return j.width=pe,j.height=y,j.getContext("2d").drawImage(E,0,0,pe,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+y+")."),j}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return Ls(E.width)&&Ls(E.height)}function M(E){return a?!1:E.wrapS!==Et||E.wrapT!==Et||E.minFilter!==it&&E.minFilter!==mt}function C(E,v){return E.generateMipmaps&&v&&E.minFilter!==it&&E.minFilter!==mt}function R(E){s.generateMipmap(E)}function g(E,v,k,Q,te=!1){if(a===!1)return v;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=v;return v===6403&&(k===5126&&(ae=33326),k===5131&&(ae=33325),k===5121&&(ae=33321)),v===33319&&(k===5126&&(ae=33328),k===5131&&(ae=33327),k===5121&&(ae=33323)),v===6408&&(k===5126&&(ae=34836),k===5131&&(ae=34842),k===5121&&(ae=Q===Ue&&te===!1?35907:32856),k===32819&&(ae=32854),k===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(E,v,k){return C(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==it&&E.minFilter!==mt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function z(E){return E===it||E===is||E===rs?9728:9729}function F(E){const v=E.target;v.removeEventListener("dispose",F),Z(v),v.isVideoTexture&&_.delete(v)}function $(E){const v=E.target;v.removeEventListener("dispose",$),W(v)}function Z(E){const v=n.get(E);if(v.__webglInit===void 0)return;const k=E.source,Q=h.get(k);if(Q){const te=Q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(E),Object.keys(Q).length===0&&h.delete(k)}n.remove(E)}function P(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const k=E.source,Q=h.get(k);delete Q[v.__cacheKey],o.memory.textures--}function W(E){const v=E.texture,k=n.get(E),Q=n.get(v);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)s.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let te=0,ae=v.length;te<ae;te++){const pe=n.get(v[te]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(v[te])}n.remove(v),n.remove(E)}let B=0;function Y(){B=0}function X(){const E=B;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),B+=1,E}function O(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.encoding),v.join()}function V(E,v){const k=n.get(E);if(E.isVideoTexture&&ht(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,E,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,k.__webglTexture)}function ee(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,v);return}t.activeTexture(33984+v),t.bindTexture(35866,k.__webglTexture)}function J(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){fe(k,E,v);return}t.activeTexture(33984+v),t.bindTexture(32879,k.__webglTexture)}function K(E,v){const k=n.get(E);if(E.version>0&&k.__version!==E.version){_e(k,E,v);return}t.activeTexture(33984+v),t.bindTexture(34067,k.__webglTexture)}const he={[Nr]:10497,[Et]:33071,[zr]:33648},ge={[it]:9728,[is]:9984,[rs]:9986,[mt]:9729,[No]:9985,[ki]:9987};function H(E,v,k){if(k?(s.texParameteri(E,10242,he[v.wrapS]),s.texParameteri(E,10243,he[v.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,he[v.wrapR]),s.texParameteri(E,10240,ge[v.magFilter]),s.texParameteri(E,10241,ge[v.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(v.wrapS!==Et||v.wrapT!==Et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,z(v.magFilter)),s.texParameteri(E,10241,z(v.minFilter)),v.minFilter!==it&&v.minFilter!==mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.type===cn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Le(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F));const Q=v.source;let te=h.get(Q);te===void 0&&(te={},h.set(Q,te));const ae=O(v);if(ae!==E.__cacheKey){te[ae]===void 0&&(te[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ae].usedTimes++;const pe=te[E.__cacheKey];pe!==void 0&&(te[E.__cacheKey].usedTimes--,pe.usedTimes===0&&P(v)),E.__cacheKey=ae,E.__webglTexture=te[ae].texture}return k}function fe(E,v,k){let Q=3553;v.isDataArrayTexture&&(Q=35866),v.isData3DTexture&&(Q=32879);const te=Le(E,v),ae=v.source;if(t.activeTexture(33984+k),t.bindTexture(Q,E.__webglTexture),ae.version!==ae.__currentVersion||te===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const pe=M(v)&&w(v.image)===!1;let y=A(v.image,pe,!1,u);y=at(v,y);const j=w(y)||a,ne=r.convert(v.format,v.encoding);let oe=r.convert(v.type),se=g(v.internalFormat,ne,oe,v.encoding,v.isVideoTexture);H(Q,v,j);let me;const Ee=v.mipmaps,Ne=a&&v.isVideoTexture!==!0,L=ae.__currentVersion===void 0||te===!0,ie=T(v,y,j);if(v.isDepthTexture)se=6402,a?v.type===cn?se=36012:v.type===ln?se=33190:v.type===Vn?se=35056:se=33189:v.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===hn&&se===6402&&v.type!==wa&&v.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ln,oe=r.convert(v.type)),v.format===qn&&se===6402&&(se=34041,v.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Vn,oe=r.convert(v.type))),L&&(Ne?t.texStorage2D(3553,1,se,y.width,y.height):t.texImage2D(3553,0,se,y.width,y.height,0,ne,oe,null));else if(v.isDataTexture)if(Ee.length>0&&j){Ne&&L&&t.texStorage2D(3553,ie,se,Ee[0].width,Ee[0].height);for(let G=0,ce=Ee.length;G<ce;G++)me=Ee[G],Ne?t.texSubImage2D(3553,G,0,0,me.width,me.height,ne,oe,me.data):t.texImage2D(3553,G,se,me.width,me.height,0,ne,oe,me.data);v.generateMipmaps=!1}else Ne?(L&&t.texStorage2D(3553,ie,se,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,ne,oe,y.data)):t.texImage2D(3553,0,se,y.width,y.height,0,ne,oe,y.data);else if(v.isCompressedTexture){Ne&&L&&t.texStorage2D(3553,ie,se,Ee[0].width,Ee[0].height);for(let G=0,ce=Ee.length;G<ce;G++)me=Ee[G],v.format!==Dt?ne!==null?Ne?t.compressedTexSubImage2D(3553,G,0,0,me.width,me.height,ne,me.data):t.compressedTexImage2D(3553,G,se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,G,0,0,me.width,me.height,ne,oe,me.data):t.texImage2D(3553,G,se,me.width,me.height,0,ne,oe,me.data)}else if(v.isDataArrayTexture)Ne?(L&&t.texStorage3D(35866,ie,se,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ne,oe,y.data)):t.texImage3D(35866,0,se,y.width,y.height,y.depth,0,ne,oe,y.data);else if(v.isData3DTexture)Ne?(L&&t.texStorage3D(32879,ie,se,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ne,oe,y.data)):t.texImage3D(32879,0,se,y.width,y.height,y.depth,0,ne,oe,y.data);else if(v.isFramebufferTexture){if(L)if(Ne)t.texStorage2D(3553,ie,se,y.width,y.height);else{let G=y.width,ce=y.height;for(let le=0;le<ie;le++)t.texImage2D(3553,le,se,G,ce,0,ne,oe,null),G>>=1,ce>>=1}}else if(Ee.length>0&&j){Ne&&L&&t.texStorage2D(3553,ie,se,Ee[0].width,Ee[0].height);for(let G=0,ce=Ee.length;G<ce;G++)me=Ee[G],Ne?t.texSubImage2D(3553,G,0,0,ne,oe,me):t.texImage2D(3553,G,se,ne,oe,me);v.generateMipmaps=!1}else Ne?(L&&t.texStorage2D(3553,ie,se,y.width,y.height),t.texSubImage2D(3553,0,0,0,ne,oe,y)):t.texImage2D(3553,0,se,ne,oe,y);C(v,j)&&R(Q),ae.__currentVersion=ae.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,k){if(v.image.length!==6)return;const Q=Le(E,v),te=v.source;if(t.activeTexture(33984+k),t.bindTexture(34067,E.__webglTexture),te.version!==te.__currentVersion||Q===!0){s.pixelStorei(37440,v.flipY),s.pixelStorei(37441,v.premultiplyAlpha),s.pixelStorei(3317,v.unpackAlignment),s.pixelStorei(37443,0);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,y=[];for(let G=0;G<6;G++)!ae&&!pe?y[G]=A(v.image[G],!1,!0,l):y[G]=pe?v.image[G].image:v.image[G],y[G]=at(v,y[G]);const j=y[0],ne=w(j)||a,oe=r.convert(v.format,v.encoding),se=r.convert(v.type),me=g(v.internalFormat,oe,se,v.encoding),Ee=a&&v.isVideoTexture!==!0,Ne=te.__currentVersion===void 0||Q===!0;let L=T(v,j,ne);H(34067,v,ne);let ie;if(ae){Ee&&Ne&&t.texStorage2D(34067,L,me,j.width,j.height);for(let G=0;G<6;G++){ie=y[G].mipmaps;for(let ce=0;ce<ie.length;ce++){const le=ie[ce];v.format!==Dt?oe!==null?Ee?t.compressedTexSubImage2D(34069+G,ce,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(34069+G,ce,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(34069+G,ce,0,0,le.width,le.height,oe,se,le.data):t.texImage2D(34069+G,ce,me,le.width,le.height,0,oe,se,le.data)}}}else{ie=v.mipmaps,Ee&&Ne&&(ie.length>0&&L++,t.texStorage2D(34067,L,me,y[0].width,y[0].height));for(let G=0;G<6;G++)if(pe){Ee?t.texSubImage2D(34069+G,0,0,0,y[G].width,y[G].height,oe,se,y[G].data):t.texImage2D(34069+G,0,me,y[G].width,y[G].height,0,oe,se,y[G].data);for(let ce=0;ce<ie.length;ce++){const Ae=ie[ce].image[G].image;Ee?t.texSubImage2D(34069+G,ce+1,0,0,Ae.width,Ae.height,oe,se,Ae.data):t.texImage2D(34069+G,ce+1,me,Ae.width,Ae.height,0,oe,se,Ae.data)}}else{Ee?t.texSubImage2D(34069+G,0,0,0,oe,se,y[G]):t.texImage2D(34069+G,0,me,oe,se,y[G]);for(let ce=0;ce<ie.length;ce++){const le=ie[ce];Ee?t.texSubImage2D(34069+G,ce+1,0,0,oe,se,le.image[G]):t.texImage2D(34069+G,ce+1,me,oe,se,le.image[G])}}}C(v,ne)&&R(34067),te.__currentVersion=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ue(E,v,k,Q,te){const ae=r.convert(k.format,k.encoding),pe=r.convert(k.type),y=g(k.internalFormat,ae,pe,k.encoding);n.get(v).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,y,v.width,v.height,v.depth,0,ae,pe,null):t.texImage2D(te,0,y,v.width,v.height,0,ae,pe,null)),t.bindFramebuffer(36160,E),Re(v)?f.framebufferTexture2DMultisampleEXT(36160,Q,te,n.get(k).__webglTexture,0,qe(v)):s.framebufferTexture2D(36160,Q,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(E,v,k){if(s.bindRenderbuffer(36161,E),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(k||Re(v)){const te=v.depthTexture;te&&te.isDepthTexture&&(te.type===cn?Q=36012:te.type===ln&&(Q=33190));const ae=qe(v);Re(v)?f.renderbufferStorageMultisampleEXT(36161,ae,Q,v.width,v.height):s.renderbufferStorageMultisample(36161,ae,Q,v.width,v.height)}else s.renderbufferStorage(36161,Q,v.width,v.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(v.depthBuffer&&v.stencilBuffer){const Q=qe(v);k&&Re(v)===!1?s.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Re(v)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):s.renderbufferStorage(36161,34041,v.width,v.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let te=0;te<Q.length;te++){const ae=Q[te],pe=r.convert(ae.format,ae.encoding),y=r.convert(ae.type),j=g(ae.internalFormat,pe,y,ae.encoding),ne=qe(v);k&&Re(v)===!1?s.renderbufferStorageMultisample(36161,ne,j,v.width,v.height):Re(v)?f.renderbufferStorageMultisampleEXT(36161,ne,j,v.width,v.height):s.renderbufferStorage(36161,j,v.width,v.height)}}s.bindRenderbuffer(36161,null)}function ye(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,te=qe(v);if(v.depthTexture.format===hn)Re(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,te):s.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===qn)Re(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,te):s.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function de(E){const v=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,E)}else if(k){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=s.createRenderbuffer(),Pe(v.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Pe(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ge(E,v,k){const Q=n.get(E);v!==void 0&&ue(Q.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&de(E)}function $e(E){const v=E.texture,k=n.get(E),Q=n.get(v);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=v.version,o.memory.textures++);const te=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,pe=w(E)||a;if(te){k.__webglFramebuffer=[];for(let y=0;y<6;y++)k.__webglFramebuffer[y]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),ae)if(i.drawBuffers){const y=E.texture;for(let j=0,ne=y.length;j<ne;j++){const oe=n.get(y[j]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Re(E)===!1){const y=ae?v:[v];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let j=0;j<y.length;j++){const ne=y[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[j]);const oe=r.convert(ne.format,ne.encoding),se=r.convert(ne.type),me=g(ne.internalFormat,oe,se,ne.encoding),Ee=qe(E);s.renderbufferStorageMultisample(36161,Ee,me,E.width,E.height),s.framebufferRenderbuffer(36160,36064+j,36161,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Q.__webglTexture),H(34067,v,pe);for(let y=0;y<6;y++)ue(k.__webglFramebuffer[y],E,v,36064,34069+y);C(v,pe)&&R(34067),t.unbindTexture()}else if(ae){const y=E.texture;for(let j=0,ne=y.length;j<ne;j++){const oe=y[j],se=n.get(oe);t.bindTexture(3553,se.__webglTexture),H(3553,oe,pe),ue(k.__webglFramebuffer,E,oe,36064+j,3553),C(oe,pe)&&R(3553)}t.unbindTexture()}else{let y=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?y=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,Q.__webglTexture),H(y,v,pe),ue(k.__webglFramebuffer,E,v,36064,y),C(v,pe)&&R(y),t.unbindTexture()}E.depthBuffer&&de(E)}function We(E){const v=w(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,te=k.length;Q<te;Q++){const ae=k[Q];if(C(ae,v)){const pe=E.isWebGLCubeRenderTarget?34067:3553,y=n.get(ae).__webglTexture;t.bindTexture(pe,y),R(pe),t.unbindTexture()}}}function st(E){if(a&&E.samples>0&&Re(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,Q=E.height;let te=16384;const ae=[],pe=E.stencilBuffer?33306:36096,y=n.get(E),j=E.isWebGLMultipleRenderTargets===!0;if(j)for(let ne=0;ne<v.length;ne++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let ne=0;ne<v.length;ne++){ae.push(36064+ne),E.depthBuffer&&ae.push(pe);const oe=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(oe===!1&&(E.depthBuffer&&(te|=256),E.stencilBuffer&&(te|=1024)),j&&s.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ne]),oe===!0&&(s.invalidateFramebuffer(36008,[pe]),s.invalidateFramebuffer(36009,[pe])),j){const se=n.get(v[ne]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,se,0)}s.blitFramebuffer(0,0,k,Q,0,0,k,Q,te,9728),m&&s.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let ne=0;ne<v.length;ne++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ne,36161,y.__webglColorRenderbuffer[ne]);const oe=n.get(v[ne]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ne,3553,oe,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function qe(E){return Math.min(d,E.samples)}function Re(E){const v=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(E){const v=o.render.frame;_.get(E)!==v&&(_.set(E,v),E.update())}function at(E,v){const k=E.encoding,Q=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Or||k!==pn&&(k===Ue?a===!1?e.has("EXT_sRGB")===!0&&Q===Dt?(E.format=Or,E.minFilter=mt,E.generateMipmaps=!1):v=Ca.sRGBToLinear(v):(Q!==Dt||te!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),v}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Ge,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Re}function Wd(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===fn)return 5121;if(r===Bo)return 32819;if(r===Go)return 32820;if(r===zo)return 5120;if(r===Oo)return 5122;if(r===wa)return 5123;if(r===Uo)return 5124;if(r===ln)return 5125;if(r===cn)return 5126;if(r===ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ko)return 6406;if(r===Dt)return 6408;if(r===Ho)return 6409;if(r===Wo)return 6410;if(r===hn)return 6402;if(r===qn)return 34041;if(r===qo)return 6403;if(r===Vo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Or)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xo)return 36244;if(r===Yo)return 33319;if(r===jo)return 33320;if(r===Zo)return 36249;if(r===Ji||r===Qi||r===er||r===tr)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ji)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ji)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ss||r===as||r===os||r===ls)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ss)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===as)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===os)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ls)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$o)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cs||r===us)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===cs)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===us)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hs||r===ds||r===fs||r===ps||r===ms||r===gs||r===_s||r===xs||r===vs||r===Ms||r===ys||r===Ss||r===bs||r===ws)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ds)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ps)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ms)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_s)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ms)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ys)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ss)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ws)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Es)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Es)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Vn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class qd extends gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xd={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const b=new Ii;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[p.jointName]=b,l.add(b)}const x=l.joints[p.jointName];h!==null&&(x.matrix.fromArray(h.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=h.radius),x.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class Yd extends vt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:hn,u!==hn&&u!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hn&&(n=ln),n===void 0&&u===qn&&(n=Vn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=c!==void 0?c:it,this.flipY=!1,this.generateMipmaps=!1}}class jd extends xn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,u=null,d=null,f=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const x=[],b=[],A=new gt;A.layers.enable(1),A.viewport=new Ye;const w=new gt;w.layers.enable(2),w.viewport=new Ye;const M=[A,w],C=new qd;C.layers.enable(1),C.layers.enable(2);let R=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=x[O];return V===void 0&&(V=new Dr,x[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=x[O];return V===void 0&&(V=new Dr,x[O]=V),V.getGripSpace()},this.getHand=function(O){let V=x[O];return V===void 0&&(V=new Dr,x[O]=V),V.getHandSpace()};function T(O){const V=b.indexOf(O.inputSource);if(V===-1)return;const ee=x[V];ee!==void 0&&ee.dispatchEvent({type:O.type,data:O.inputSource})}function z(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",F);for(let O=0;O<x.length;O++){const V=b[O];V!==null&&(b[O]=null,x[O].disconnect(V))}R=null,g=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,h=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",z),i.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),h=new mn(f.framebufferWidth,f.framebufferHeight,{format:Dt,type:fn,encoding:e.outputEncoding})}else{let V=null,ee=null,J=null;_.depth&&(J=_.stencil?35056:33190,V=_.stencil?qn:hn,ee=_.stencil?Vn:ln);const K={colorFormat:32856,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(K),i.updateRenderState({layers:[d]}),h=new mn(d.textureWidth,d.textureHeight,{format:Dt,type:fn,depthTexture:new Yd(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(O){for(let V=0;V<O.removed.length;V++){const ee=O.removed[V],J=b.indexOf(ee);J>=0&&(b[J]=null,x[J].dispatchEvent({type:"disconnected",data:ee}))}for(let V=0;V<O.added.length;V++){const ee=O.added[V];let J=b.indexOf(ee);if(J===-1){for(let he=0;he<x.length;he++)if(he>=b.length){b.push(ee),J=he;break}else if(b[he]===null){b[he]=ee,J=he;break}if(J===-1)break}const K=x[J];K&&K.dispatchEvent({type:"connected",data:ee})}}const $=new D,Z=new D;function P(O,V,ee){$.setFromMatrixPosition(V.matrixWorld),Z.setFromMatrixPosition(ee.matrixWorld);const J=$.distanceTo(Z),K=V.projectionMatrix.elements,he=ee.projectionMatrix.elements,ge=K[14]/(K[10]-1),H=K[14]/(K[10]+1),Le=(K[9]+1)/K[5],fe=(K[9]-1)/K[5],_e=(K[8]-1)/K[0],ue=(he[8]+1)/he[0],Pe=ge*_e,ye=ge*ue,de=J/(-_e+ue),Ge=de*-_e;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ge),O.translateZ(de),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const $e=ge+de,We=H+de,st=Pe-Ge,qe=ye+(J-Ge),Re=Le*H/We*$e,ht=fe*H/We*$e;O.projectionMatrix.makePerspective(st,qe,Re,ht,$e,We)}function W(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;C.near=w.near=A.near=O.near,C.far=w.far=A.far=O.far,(R!==C.near||g!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,g=C.far);const V=O.parent,ee=C.cameras;W(C,V);for(let K=0;K<ee.length;K++)W(ee[K],V);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),O.position.copy(C.position),O.quaternion.copy(C.quaternion),O.scale.copy(C.scale),O.matrix.copy(C.matrix),O.matrixWorld.copy(C.matrixWorld);const J=O.children;for(let K=0,he=J.length;K<he;K++)J[K].updateMatrixWorld(!0);ee.length===2?P(C,A,w):C.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let B=null;function Y(O,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const ee=l.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let J=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let K=0;K<ee.length;K++){const he=ee[K];let ge=null;if(f!==null)ge=f.getViewport(he);else{const Le=u.getViewSubImage(d,he);ge=Le.viewport,K===0&&(e.setRenderTargetTextures(h,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let H=M[K];H===void 0&&(H=new gt,H.layers.enable(K),H.viewport=new Ye,M[K]=H),H.matrix.fromArray(he.transform.matrix),H.projectionMatrix.fromArray(he.projectionMatrix),H.viewport.set(ge.x,ge.y,ge.width,ge.height),K===0&&C.matrix.copy(H.matrix),J===!0&&C.cameras.push(H)}}for(let ee=0;ee<x.length;ee++){const J=b[ee],K=x[ee];J!==null&&K!==void 0&&K.update(J,V,c||o)}B&&B(O,V),m=null}const X=new Ua;X.setAnimationLoop(Y),this.setAnimationLoop=function(O){B=O},this.dispose=function(){}}}function Zd(s,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,x,b,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,A)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),_(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,x,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Tt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Tt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let A;h.aoMap?A=h.aoMap:h.lightMap&&(A=h.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,x,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let A;h.map?A=h.map:h.alphaMap&&(A=h.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Tt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function $d(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(b,A){const w=A.program;n.uniformBlockBinding(b,w)}function l(b,A){let w=i[b.id];w===void 0&&(_(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",h));const M=A.program;n.updateUBOMapping(b,M);const C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function u(b){const A=d();b.__bindingPointIndex=A;const w=s.createBuffer(),M=b.__size,C=b.usage;return s.bindBuffer(35345,w),s.bufferData(35345,M,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,A,w),w}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=i[b.id],w=b.uniforms,M=b.__cache;s.bindBuffer(35345,A);for(let C=0,R=w.length;C<R;C++){const g=w[C];if(m(g,C,M)===!0){const T=g.value,z=g.__offset;typeof T=="number"?(g.__data[0]=T,s.bufferSubData(35345,z,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):T.toArray(g.__data),s.bufferSubData(35345,z,g.__data))}}s.bindBuffer(35345,null)}function m(b,A,w){const M=b.value;if(w[A]===void 0)return typeof M=="number"?w[A]=M:w[A]=M.clone(),!0;if(typeof M=="number"){if(w[A]!==M)return w[A]=M,!0}else{const C=w[A];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function _(b){const A=b.uniforms;let w=0;const M=16;let C=0;for(let R=0,g=A.length;R<g;R++){const T=A[R],z=p(T);if(T.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,R>0){C=w%M;const F=M-C;C!==0&&F-z.boundary<0&&(w+=M-C,T.__offset=w)}w+=z.storage}return C=w%M,C>0&&(w+=M-C),b.__size=w,b.__cache={},this}function p(b){const A=b.value,w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function h(b){const A=b.target;A.removeEventListener("dispose",h);const w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function x(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function Kd(){const s=si("canvas");return s.style.display="block",s}function qa(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Kd(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pn,this.physicallyCorrectLights=!1,this.toneMapping=kt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,x=0,b=0,A=null,w=-1,M=null;const C=new Ye,R=new Ye;let g=null,T=e.width,z=e.height,F=1,$=null,Z=null;const P=new Ye(0,0,T,z),W=new Ye(0,0,T,z);let B=!1;const Y=new Vr;let X=!1,O=!1,V=null;const ee=new He,J=new Me,K=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return A===null?F:1}let H=t;function Le(S,I){for(let U=0;U<S.length;U++){const N=S[U],q=e.getContext(N,I);if(q!==null)return q}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kr}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),H=Le(I,S),H===null)throw Le(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let fe,_e,ue,Pe,ye,de,Ge,$e,We,st,qe,Re,ht,at,E,v,k,Q,te,ae,pe,y,j,ne;function oe(){fe=new oh(H),_e=new th(H,fe,s),fe.init(_e),y=new Wd(H,fe,_e),ue=new Vd(H,fe,_e),Pe=new uh,ye=new Cd,de=new Hd(H,fe,ue,ye,_e,y,Pe),Ge=new ih(p),$e=new ah(p),We=new Sl(H,_e),j=new Qu(H,fe,We,_e),st=new lh(H,We,Pe,j),qe=new ph(H,st,We,Pe),te=new fh(H,_e,de),v=new nh(ye),Re=new Ad(p,Ge,$e,fe,_e,j,v),ht=new Zd(p,ye),at=new Dd,E=new zd(fe,_e),Q=new Ju(p,Ge,ue,qe,u,o),k=new kd(p,qe,_e),ne=new $d(H,Pe,_e,ue),ae=new eh(H,fe,Pe,_e),pe=new ch(H,fe,Pe,_e),Pe.programs=Re.programs,p.capabilities=_e,p.extensions=fe,p.properties=ye,p.renderLists=at,p.shadowMap=k,p.state=ue,p.info=Pe}oe();const se=new jd(p,H);this.xr=se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const S=fe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=fe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(T,z,!1))},this.getSize=function(S){return S.set(T,z)},this.setSize=function(S,I,U){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,z=I,e.width=Math.floor(S*F),e.height=Math.floor(I*F),U!==!1&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(T*F,z*F).floor()},this.setDrawingBufferSize=function(S,I,U){T=S,z=I,F=U,e.width=Math.floor(S*U),e.height=Math.floor(I*U),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,I,U,N){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,I,U,N),ue.viewport(C.copy(P).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(W)},this.setScissor=function(S,I,U,N){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,I,U,N),ue.scissor(R.copy(W).multiplyScalar(F).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(S){ue.setScissorTest(B=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(S=!0,I=!0,U=!0){let N=0;S&&(N|=16384),I&&(N|=256),U&&(N|=1024),H.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),at.dispose(),E.dispose(),ye.dispose(),Ge.dispose(),$e.dispose(),qe.dispose(),j.dispose(),ne.dispose(),Re.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ae),se.removeEventListener("sessionend",je),V&&(V.dispose(),V=null),Be.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const S=Pe.autoReset,I=k.enabled,U=k.autoUpdate,N=k.needsUpdate,q=k.type;oe(),Pe.autoReset=S,k.enabled=I,k.autoUpdate=U,k.needsUpdate=N,k.type=q}function Ne(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function L(S){const I=S.target;I.removeEventListener("dispose",L),ie(I)}function ie(S){G(S),ye.remove(S)}function G(S){const I=ye.get(S).programs;I!==void 0&&(I.forEach(function(U){Re.releaseProgram(U)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,U,N,q,xe){I===null&&(I=he);const ve=q.isMesh&&q.matrixWorld.determinant()<0,be=eo(S,I,U,N,q);ue.setMaterial(N,ve);let Se=U.index;const Ie=U.attributes.position;if(Se===null){if(Ie===void 0||Ie.count===0)return}else if(Se.count===0)return;let Te=1;N.wireframe===!0&&(Se=st.getWireframeAttribute(U),Te=2),j.setup(q,N,be,U,Se);let Ce,Oe=ae;Se!==null&&(Ce=We.get(Se),Oe=pe,Oe.setIndex(Ce));const en=Se!==null?Se.count:Ie.count,Mn=U.drawRange.start*Te,yn=U.drawRange.count*Te,At=xe!==null?xe.start*Te:0,De=xe!==null?xe.count*Te:1/0,Sn=Math.max(Mn,At),ke=Math.min(en,Mn+yn,At+De)-1,ft=Math.max(0,ke-Sn+1);if(ft!==0){if(q.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*ge()),Oe.setMode(1)):Oe.setMode(4);else if(q.isLine){let Ht=N.linewidth;Ht===void 0&&(Ht=1),ue.setLineWidth(Ht*ge()),q.isLineSegments?Oe.setMode(1):q.isLineLoop?Oe.setMode(2):Oe.setMode(3)}else q.isPoints?Oe.setMode(0):q.isSprite&&Oe.setMode(4);if(q.isInstancedMesh)Oe.renderInstances(Sn,ft,q.count);else if(U.isInstancedBufferGeometry){const Ht=Math.min(U.instanceCount,U._maxInstanceCount);Oe.renderInstances(Sn,ft,Ht)}else Oe.render(Sn,ft)}},this.compile=function(S,I){f=E.get(S),f.init(),_.push(f),S.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),S.traverse(function(U){const N=U.material;if(N)if(Array.isArray(N))for(let q=0;q<N.length;q++){const xe=N[q];ji(xe,S,U)}else ji(N,S,U)}),_.pop(),f=null};let ce=null;function le(S){ce&&ce(S)}function Ae(){Be.stop()}function je(){Be.start()}const Be=new Ua;Be.setAnimationLoop(le),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(S){ce=S,se.setAnimationLoop(S),S===null?Be.stop():Be.start()},se.addEventListener("sessionstart",Ae),se.addEventListener("sessionend",je),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,I,A),f=E.get(S,_.length),f.init(),_.push(f),ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(ee),O=this.localClippingEnabled,X=v.init(this.clippingPlanes,O,I),d=at.get(S,m.length),d.init(),m.push(d),Vt(S,I,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort($,Z),X===!0&&v.beginShadows();const U=f.state.shadowsArray;if(k.render(U,S,I),X===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,S),f.setupLights(p.physicallyCorrectLights),I.isArrayCamera){const N=I.cameras;for(let q=0,xe=N.length;q<xe;q++){const ve=N[q];ze(d,S,ve,ve.viewport)}}else ze(d,S,I);A!==null&&(de.updateMultisampleRenderTarget(A),de.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(p,S,I),j.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Vt(S,I,U,N){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)U=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const ve=qe.update(S),be=S.material;be.visible&&d.push(S,ve,be,U,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Pe.render.frame&&(S.skeleton.update(),S.skeleton.frame=Pe.render.frame),!S.frustumCulled||Y.intersectsObject(S))){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const ve=qe.update(S),be=S.material;if(Array.isArray(be)){const Se=ve.groups;for(let Ie=0,Te=Se.length;Ie<Te;Ie++){const Ce=Se[Ie],Oe=be[Ce.materialIndex];Oe&&Oe.visible&&d.push(S,ve,Oe,U,K.z,Ce)}}else be.visible&&d.push(S,ve,be,U,K.z,null)}}const xe=S.children;for(let ve=0,be=xe.length;ve<be;ve++)Vt(xe[ve],I,U,N)}function ze(S,I,U,N){const q=S.opaque,xe=S.transmissive,ve=S.transparent;f.setupLightsView(U),xe.length>0&&It(q,I,U),N&&ue.viewport(C.copy(N)),q.length>0&&dt(q,I,U),xe.length>0&&dt(xe,I,U),ve.length>0&&dt(ve,I,U),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function It(S,I,U){const N=_e.isWebGL2;V===null&&(V=new mn(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?ri:fn,minFilter:ki,samples:N&&r===!0?4:0})),p.getDrawingBufferSize(J),N?V.setSize(J.x,J.y):V.setSize(Ur(J.x),Ur(J.y));const q=p.getRenderTarget();p.setRenderTarget(V),p.clear();const xe=p.toneMapping;p.toneMapping=kt,dt(S,I,U),p.toneMapping=xe,de.updateMultisampleRenderTarget(V),de.updateRenderTargetMipmap(V),p.setRenderTarget(q)}function dt(S,I,U){const N=I.isScene===!0?I.overrideMaterial:null;for(let q=0,xe=S.length;q<xe;q++){const ve=S[q],be=ve.object,Se=ve.geometry,Ie=N===null?ve.material:N,Te=ve.group;be.layers.test(U.layers)&&Qa(be,I,U,Se,Ie,Te)}}function Qa(S,I,U,N,q,xe){S.onBeforeRender(p,I,U,N,q,xe),S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(p,I,U,N,S,xe),q.transparent===!0&&q.side===Qt?(q.side=Tt,q.needsUpdate=!0,p.renderBufferDirect(U,I,N,q,S,xe),q.side=ii,q.needsUpdate=!0,p.renderBufferDirect(U,I,N,q,S,xe),q.side=Qt):p.renderBufferDirect(U,I,N,q,S,xe),S.onAfterRender(p,I,U,N,q,xe)}function ji(S,I,U){I.isScene!==!0&&(I=he);const N=ye.get(S),q=f.state.lights,xe=f.state.shadowsArray,ve=q.state.version,be=Re.getParameters(S,q.state,xe,I,U),Se=Re.getProgramCacheKey(be);let Ie=N.programs;N.environment=S.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(S.isMeshStandardMaterial?$e:Ge).get(S.envMap||N.environment),Ie===void 0&&(S.addEventListener("dispose",L),Ie=new Map,N.programs=Ie);let Te=Ie.get(Se);if(Te!==void 0){if(N.currentProgram===Te&&N.lightsStateVersion===ve)return Zr(S,be),Te}else be.uniforms=Re.getUniforms(S),S.onBuild(U,be,p),S.onBeforeCompile(be,p),Te=Re.acquireProgram(be,Se),Ie.set(Se,Te),N.uniforms=be.uniforms;const Ce=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=v.uniform),Zr(S,be),N.needsLights=no(S),N.lightsStateVersion=ve,N.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.directionalShadowMap.value=q.state.directionalShadowMap,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotShadowMap.value=q.state.spotShadowMap,Ce.spotShadowMatrix.value=q.state.spotShadowMatrix,Ce.pointShadowMap.value=q.state.pointShadowMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix);const Oe=Te.getUniforms(),en=Oi.seqWithValue(Oe.seq,Ce);return N.currentProgram=Te,N.uniformsList=en,Te}function Zr(S,I){const U=ye.get(S);U.outputEncoding=I.outputEncoding,U.instancing=I.instancing,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function eo(S,I,U,N,q){I.isScene!==!0&&(I=he),de.resetTextureUnits();const xe=I.fog,ve=N.isMeshStandardMaterial?I.environment:null,be=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:pn,Se=(N.isMeshStandardMaterial?$e:Ge).get(N.envMap||ve),Ie=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Te=!!N.normalMap&&!!U.attributes.tangent,Ce=!!U.morphAttributes.position,Oe=!!U.morphAttributes.normal,en=!!U.morphAttributes.color,Mn=N.toneMapped?p.toneMapping:kt,yn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,At=yn!==void 0?yn.length:0,De=ye.get(N),Sn=f.state.lights;if(X===!0&&(O===!0||S!==M)){const ot=S===M&&N.id===w;v.setState(N,S,ot)}let ke=!1;N.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Sn.state.version||De.outputEncoding!==be||q.isInstancedMesh&&De.instancing===!1||!q.isInstancedMesh&&De.instancing===!0||q.isSkinnedMesh&&De.skinning===!1||!q.isSkinnedMesh&&De.skinning===!0||De.envMap!==Se||N.fog===!0&&De.fog!==xe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==v.numPlanes||De.numIntersection!==v.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Te||De.morphTargets!==Ce||De.morphNormals!==Oe||De.morphColors!==en||De.toneMapping!==Mn||_e.isWebGL2===!0&&De.morphTargetsCount!==At)&&(ke=!0):(ke=!0,De.__version=N.version);let ft=De.currentProgram;ke===!0&&(ft=ji(N,I,q));let Ht=!1,$n=!1,Zi=!1;const Qe=ft.getUniforms(),Kn=De.uniforms;if(ue.useProgram(ft.program)&&(Ht=!0,$n=!0,Zi=!0),N.id!==w&&(w=N.id,$n=!0),Ht||M!==S){if(Qe.setValue(H,"projectionMatrix",S.projectionMatrix),_e.logarithmicDepthBuffer&&Qe.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,$n=!0,Zi=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const ot=Qe.map.cameraPosition;ot!==void 0&&ot.setValue(H,K.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Qe.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Qe.setValue(H,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){Qe.setOptional(H,q,"bindMatrix"),Qe.setOptional(H,q,"bindMatrixInverse");const ot=q.skeleton;ot&&(_e.floatVertexTextures?(ot.boneTexture===null&&ot.computeBoneTexture(),Qe.setValue(H,"boneTexture",ot.boneTexture,de),Qe.setValue(H,"boneTextureSize",ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $i=U.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0&&_e.isWebGL2===!0)&&te.update(q,U,N,ft),($n||De.receiveShadow!==q.receiveShadow)&&(De.receiveShadow=q.receiveShadow,Qe.setValue(H,"receiveShadow",q.receiveShadow)),$n&&(Qe.setValue(H,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&to(Kn,Zi),xe&&N.fog===!0&&ht.refreshFogUniforms(Kn,xe),ht.refreshMaterialUniforms(Kn,N,F,z,V),Oi.upload(H,De.uniformsList,Kn,de)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Oi.upload(H,De.uniformsList,Kn,de),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Qe.setValue(H,"center",q.center),Qe.setValue(H,"modelViewMatrix",q.modelViewMatrix),Qe.setValue(H,"normalMatrix",q.normalMatrix),Qe.setValue(H,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const ot=N.uniformsGroups;for(let Ki=0,io=ot.length;Ki<io;Ki++)if(_e.isWebGL2){const $r=ot[Ki];ne.update($r,ft),ne.bind($r,ft)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ft}function to(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function no(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,U){ye.get(S.texture).__webglTexture=I,ye.get(S.depthTexture).__webglTexture=U;const N=ye.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,I){const U=ye.get(S);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,U=0){A=S,x=I,b=U;let N=!0;if(S){const Se=ye.get(S);Se.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):Se.__webglFramebuffer===void 0?de.setupRenderTarget(S):Se.__hasExternalTextures&&de.rebindTextures(S,ye.get(S.texture).__webglTexture,ye.get(S.depthTexture).__webglTexture)}let q=null,xe=!1,ve=!1;if(S){const Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture)&&(ve=!0);const Ie=ye.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Ie[I],xe=!0):_e.isWebGL2&&S.samples>0&&de.useMultisampledRTT(S)===!1?q=ye.get(S).__webglMultisampledFramebuffer:q=Ie,C.copy(S.viewport),R.copy(S.scissor),g=S.scissorTest}else C.copy(P).multiplyScalar(F).floor(),R.copy(W).multiplyScalar(F).floor(),g=B;if(ue.bindFramebuffer(36160,q)&&_e.drawBuffers&&N&&ue.drawBuffers(S,q),ue.viewport(C),ue.scissor(R),ue.setScissorTest(g),xe){const Se=ye.get(S.texture);H.framebufferTexture2D(36160,36064,34069+I,Se.__webglTexture,U)}else if(ve){const Se=ye.get(S.texture),Ie=I||0;H.framebufferTextureLayer(36160,36064,Se.__webglTexture,U||0,Ie)}w=-1},this.readRenderTargetPixels=function(S,I,U,N,q,xe,ve){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){ue.bindFramebuffer(36160,be);try{const Se=S.texture,Ie=Se.format,Te=Se.type;if(Ie!==Dt&&y.convert(Ie)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Te===ri&&(fe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Te!==fn&&y.convert(Te)!==H.getParameter(35738)&&!(Te===cn&&(_e.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-N&&U>=0&&U<=S.height-q&&H.readPixels(I,U,N,q,y.convert(Ie),y.convert(Te),xe)}finally{const Se=A!==null?ye.get(A).__webglFramebuffer:null;ue.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(S,I,U=0){const N=Math.pow(2,-U),q=Math.floor(I.image.width*N),xe=Math.floor(I.image.height*N);de.setTexture2D(I,0),H.copyTexSubImage2D(3553,U,0,0,S.x,S.y,q,xe),ue.unbindTexture()},this.copyTextureToTexture=function(S,I,U,N=0){const q=I.image.width,xe=I.image.height,ve=y.convert(U.format),be=y.convert(U.type);de.setTexture2D(U,0),H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment),I.isDataTexture?H.texSubImage2D(3553,N,S.x,S.y,q,xe,ve,be,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(3553,N,S.x,S.y,I.mipmaps[0].width,I.mipmaps[0].height,ve,I.mipmaps[0].data):H.texSubImage2D(3553,N,S.x,S.y,ve,be,I.image),N===0&&U.generateMipmaps&&H.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,I,U,N,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=S.max.x-S.min.x+1,ve=S.max.y-S.min.y+1,be=S.max.z-S.min.z+1,Se=y.convert(N.format),Ie=y.convert(N.type);let Te;if(N.isData3DTexture)de.setTexture3D(N,0),Te=32879;else if(N.isDataArrayTexture)de.setTexture2DArray(N,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment);const Ce=H.getParameter(3314),Oe=H.getParameter(32878),en=H.getParameter(3316),Mn=H.getParameter(3315),yn=H.getParameter(32877),At=U.isCompressedTexture?U.mipmaps[0]:U.image;H.pixelStorei(3314,At.width),H.pixelStorei(32878,At.height),H.pixelStorei(3316,S.min.x),H.pixelStorei(3315,S.min.y),H.pixelStorei(32877,S.min.z),U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Te,q,I.x,I.y,I.z,xe,ve,be,Se,Ie,At.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Te,q,I.x,I.y,I.z,xe,ve,be,Se,At.data)):H.texSubImage3D(Te,q,I.x,I.y,I.z,xe,ve,be,Se,Ie,At),H.pixelStorei(3314,Ce),H.pixelStorei(32878,Oe),H.pixelStorei(3316,en),H.pixelStorei(3315,Mn),H.pixelStorei(32877,yn),q===0&&N.generateMipmaps&&H.generateMipmap(Te),ue.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?de.setTextureCube(S,0):S.isData3DTexture?de.setTexture3D(S,0):S.isDataArrayTexture?de.setTexture2DArray(S,0):de.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){x=0,b=0,A=null,ue.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Jd extends qa{}Jd.prototype.isWebGL1Renderer=!0;class Qd extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Xa extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ca=new He,Gr=new Pa,Fi=new Vi,Ni=new D;class ef extends et{constructor(e=new Rt,t=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(i),Fi.radius+=r,e.ray.intersectsSphere(Fi)===!1)return;ca.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(ca);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=f,p=m;_<p;_++){const h=l.getX(_);Ni.fromBufferAttribute(d,h),ua(Ni,h,c,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,p=m;_<p;_++)Ni.fromBufferAttribute(d,_),ua(Ni,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ua(s,e,t,n,i,r,o){const a=Gr.distanceSqToPoint(s);if(a<t){const c=new D;Gr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class hi extends Rt{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],f=[],m=[];let _=0;const p=[],h=n/2;let x=0;b(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(m,2));function b(){const w=new D,M=new D;let C=0;const R=(t-e)/n;for(let g=0;g<=r;g++){const T=[],z=g/r,F=z*(t-e)+e;for(let $=0;$<=i;$++){const Z=$/i,P=Z*c+a,W=Math.sin(P),B=Math.cos(P);M.x=F*W,M.y=-z*n+h,M.z=F*B,d.push(M.x,M.y,M.z),w.set(W,R,B).normalize(),f.push(w.x,w.y,w.z),m.push(Z,1-z),T.push(_++)}p.push(T)}for(let g=0;g<i;g++)for(let T=0;T<r;T++){const z=p[T][g],F=p[T+1][g],$=p[T+1][g+1],Z=p[T][g+1];u.push(z,F,Z),u.push(F,$,Z),C+=6}l.addGroup(x,C,0),x+=C}function A(w){const M=_,C=new Me,R=new D;let g=0;const T=w===!0?e:t,z=w===!0?1:-1;for(let $=1;$<=i;$++)d.push(0,h*z,0),f.push(0,z,0),m.push(.5,.5),_++;const F=_;for(let $=0;$<=i;$++){const P=$/i*c+a,W=Math.cos(P),B=Math.sin(P);R.x=T*B,R.y=h*z,R.z=T*W,d.push(R.x,R.y,R.z),f.push(0,z,0),C.x=W*.5+.5,C.y=B*.5*z+.5,m.push(C.x,C.y),_++}for(let $=0;$<i;$++){const Z=M+$,P=F+$;w===!0?u.push(P,P+1,Z):u.push(P+1,P,Z),g+=3}l.addGroup(x,g,w===!0?1:2),x+=g}}static fromJSON(e){return new hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ha={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class tf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],_=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const nf=new tf;class Ya{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class rf extends Ya{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ha.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=si("img");function c(){u(),ha.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class sf extends Ya{constructor(e){super(e)}load(e,t,n,i){const r=new vt,o=new rf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ja extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const da=new He,fa=new D,pa=new D;class af{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(fa),pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pa),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class of extends af{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lf extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.shadow=new of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cf extends ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ma(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ma();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ma(){return(typeof performance>"u"?Date:performance).now()}class ga{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kr);const _a={type:"change"},Pr={type:"start"},xa={type:"end"};class hf extends xn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bn.ROTATE,MIDDLE:bn.DOLLY,RIGHT:bn.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",at),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_a),n.update(),r=i.NONE},this.update=function(){const y=new D,j=new gn().setFromUnitVectors(e.up,new D(0,1,0)),ne=j.clone().invert(),oe=new D,se=new gn,me=2*Math.PI;return function(){const Ne=n.object.position;y.copy(Ne).sub(n.target),y.applyQuaternion(j),a.setFromVector3(y),n.autoRotate&&r===i.NONE&&T(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let L=n.minAzimuthAngle,ie=n.maxAzimuthAngle;return isFinite(L)&&isFinite(ie)&&(L<-Math.PI?L+=me:L>Math.PI&&(L-=me),ie<-Math.PI?ie+=me:ie>Math.PI&&(ie-=me),L<=ie?a.theta=Math.max(L,Math.min(ie,a.theta)):a.theta=a.theta>(L+ie)/2?Math.max(L,a.theta):Math.min(ie,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(a),y.applyQuaternion(ne),Ne.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,d||oe.distanceToSquared(n.object.position)>o||8*(1-se.dot(n.object.quaternion))>o?(n.dispatchEvent(_a),oe.copy(n.object.position),se.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",st),n.domElement.removeEventListener("wheel",ht),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",We),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",at)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new ga,c=new ga;let l=1;const u=new D;let d=!1;const f=new Me,m=new Me,_=new Me,p=new Me,h=new Me,x=new Me,b=new Me,A=new Me,w=new Me,M=[],C={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function T(y){c.theta-=y}function z(y){c.phi-=y}const F=function(){const y=new D;return function(ne,oe){y.setFromMatrixColumn(oe,0),y.multiplyScalar(-ne),u.add(y)}}(),$=function(){const y=new D;return function(ne,oe){n.screenSpacePanning===!0?y.setFromMatrixColumn(oe,1):(y.setFromMatrixColumn(oe,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(ne),u.add(y)}}(),Z=function(){const y=new D;return function(ne,oe){const se=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;y.copy(me).sub(n.target);let Ee=y.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),F(2*ne*Ee/se.clientHeight,n.object.matrix),$(2*oe*Ee/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(ne*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),$(oe*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(y){n.object.isPerspectiveCamera?l/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(y){n.object.isPerspectiveCamera?l*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(y){f.set(y.clientX,y.clientY)}function Y(y){b.set(y.clientX,y.clientY)}function X(y){p.set(y.clientX,y.clientY)}function O(y){m.set(y.clientX,y.clientY),_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const j=n.domElement;T(2*Math.PI*_.x/j.clientHeight),z(2*Math.PI*_.y/j.clientHeight),f.copy(m),n.update()}function V(y){A.set(y.clientX,y.clientY),w.subVectors(A,b),w.y>0?P(g()):w.y<0&&W(g()),b.copy(A),n.update()}function ee(y){h.set(y.clientX,y.clientY),x.subVectors(h,p).multiplyScalar(n.panSpeed),Z(x.x,x.y),p.copy(h),n.update()}function J(y){y.deltaY<0?W(g()):y.deltaY>0&&P(g()),n.update()}function K(y){let j=!1;switch(y.code){case n.keys.UP:Z(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:Z(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:Z(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:Z(-n.keyPanSpeed,0),j=!0;break}j&&(y.preventDefault(),n.update())}function he(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const y=.5*(M[0].pageX+M[1].pageX),j=.5*(M[0].pageY+M[1].pageY);f.set(y,j)}}function ge(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const y=.5*(M[0].pageX+M[1].pageX),j=.5*(M[0].pageY+M[1].pageY);p.set(y,j)}}function H(){const y=M[0].pageX-M[1].pageX,j=M[0].pageY-M[1].pageY,ne=Math.sqrt(y*y+j*j);b.set(0,ne)}function Le(){n.enableZoom&&H(),n.enablePan&&ge()}function fe(){n.enableZoom&&H(),n.enableRotate&&he()}function _e(y){if(M.length==1)m.set(y.pageX,y.pageY);else{const ne=pe(y),oe=.5*(y.pageX+ne.x),se=.5*(y.pageY+ne.y);m.set(oe,se)}_.subVectors(m,f).multiplyScalar(n.rotateSpeed);const j=n.domElement;T(2*Math.PI*_.x/j.clientHeight),z(2*Math.PI*_.y/j.clientHeight),f.copy(m)}function ue(y){if(M.length===1)h.set(y.pageX,y.pageY);else{const j=pe(y),ne=.5*(y.pageX+j.x),oe=.5*(y.pageY+j.y);h.set(ne,oe)}x.subVectors(h,p).multiplyScalar(n.panSpeed),Z(x.x,x.y),p.copy(h)}function Pe(y){const j=pe(y),ne=y.pageX-j.x,oe=y.pageY-j.y,se=Math.sqrt(ne*ne+oe*oe);A.set(0,se),w.set(0,Math.pow(A.y/b.y,n.zoomSpeed)),P(w.y),b.copy(A)}function ye(y){n.enableZoom&&Pe(y),n.enablePan&&ue(y)}function de(y){n.enableZoom&&Pe(y),n.enableRotate&&_e(y)}function Ge(y){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",We)),Q(y),y.pointerType==="touch"?E(y):qe(y))}function $e(y){n.enabled!==!1&&(y.pointerType==="touch"?v(y):Re(y))}function We(y){te(y),M.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",We)),n.dispatchEvent(xa),r=i.NONE}function st(y){te(y)}function qe(y){let j;switch(y.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case bn.DOLLY:if(n.enableZoom===!1)return;Y(y),r=i.DOLLY;break;case bn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;X(y),r=i.PAN}else{if(n.enableRotate===!1)return;B(y),r=i.ROTATE}break;case bn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;B(y),r=i.ROTATE}else{if(n.enablePan===!1)return;X(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pr)}function Re(y){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;O(y);break;case i.DOLLY:if(n.enableZoom===!1)return;V(y);break;case i.PAN:if(n.enablePan===!1)return;ee(y);break}}function ht(y){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(y.preventDefault(),n.dispatchEvent(Pr),J(y),n.dispatchEvent(xa))}function at(y){n.enabled===!1||n.enablePan===!1||K(y)}function E(y){switch(ae(y),M.length){case 1:switch(n.touches.ONE){case wn.ROTATE:if(n.enableRotate===!1)return;he(),r=i.TOUCH_ROTATE;break;case wn.PAN:if(n.enablePan===!1)return;ge(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),r=i.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pr)}function v(y){switch(ae(y),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(y),n.update();break;default:r=i.NONE}}function k(y){n.enabled!==!1&&y.preventDefault()}function Q(y){M.push(y)}function te(y){delete C[y.pointerId];for(let j=0;j<M.length;j++)if(M[j].pointerId==y.pointerId){M.splice(j,1);return}}function ae(y){let j=C[y.pointerId];j===void 0&&(j=new Me,C[y.pointerId]=j),j.set(y.pageX,y.pageY)}function pe(y){const j=y.pointerId===M[0].pointerId?M[1]:M[0];return C[j.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",st),n.domElement.addEventListener("wheel",ht,{passive:!1}),this.update()}}const Za=document.getElementById("firstCanvas"),Lt={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Lt.width=window.innerWidth,Lt.height=window.innerHeight,Jt.aspect=Lt.width/Lt.height,Jt.updateProjectionMatrix(),Yn.setSize(Lt.width,Lt.height),Yn.render(Mt,Jt)});const Mt=new Qd,di=new sf,df=di.load("../public/Flag_of_India.svg"),ff=di.load("../public/textures/ground/ground.jpg"),pf=di.load("../public/textures/concrete/concrete.png"),mf=di.load("../public/textures/concrete/normal.png"),gf=di.load("../public/textures/stars/1.png"),_f=new cf(16777215,.1);Mt.add(_f);const vn=new lf(16777215,1);vn.position.set(4,4,4);vn.castShadow=!0;vn.shadow.mapSize.x=1024;vn.shadow.mapSize.y=1024;vn.castShadow;Mt.add(vn);const xf=new Wi({side:Qt,map:ff}),Wr=new ut(new ui(10,10),xf);Wr.rotation.x=Math.PI/2;Wr.receiveShadow=!0;Mt.add(Wr);const $a=new Wi({map:pf,normalMap:mf}),qi=new ut(new hi(1,1,.3,32),$a);qi.position.y=.15;qi.receiveShadow=!0;qi.castShadow=!0;Mt.add(qi);const Xi=new ut(new hi(.7,.7,.3,32),$a);Xi.position.y=.4;Xi.receiveShadow=!0;Xi.castShadow=!0;Mt.add(Xi);const vf=new Wi,qr=new ut(new hi(.05,.05,4,16),vf);qr.position.y=2;qr.castShadow=!0;Mt.add(qr);const Mf=new Wi({side:Qt,map:df}),Xr=new ut(new ui(2,1),Mf);Xr.position.set(1,3.5,0);Xr.castShadow=!0;Mt.add(Xr);const Yr=new Rt,jr=200,Ui=new Float32Array(jr*3),Bi=new Float32Array(jr*3);for(let s=0;s<jr;s++){let e=s*3;Ui[e]=(Math.random()-.5)*8,Ui[e+1]=(Math.random()-.5)*8,Ui[e+2]=(Math.random()-.5)*8,Bi[e]=Math.random()-.5,Bi[e+1]=Math.random()-.5,Bi[e+2]=Math.random()-.5}const yf=new xt(Ui,3),Sf=new xt(Bi,3);Yr.setAttribute("position",yf);Yr.setAttribute("color",Sf);const bf=new Xa({size:.5,alphaMap:gf,depthWrite:!1,transparent:!0}),Ka=new ef(Yr,bf);Ka.position.set(0,2,0);Mt.add(Ka);const Jt=new gt(45,Lt.width/Lt.height);Jt.position.set(0,5,10);Mt.add(Jt);const Yi=new hf(Jt,Za);Yi.enableDamping=!0;Yi.maxPolarAngle=Math.PI/2-.2;Yi.enableZoom=!1;const Yn=new qa({canvas:Za});Yn.setSize(Lt.width,Lt.height);Yn.shadowMap.enabled=!0;Yn.render(Mt,Jt);const wf=new uf,Ja=()=>{window.requestAnimationFrame(Ja);const s=wf.getElapsedTime();Yi.update(),vn.position.set(Math.sin(s)+4,Math.sin(s)+4,4),Yn.render(Mt,Jt)};Ja();
