(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xs="143",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sl=0,Ps=1,al=2,ho=1,ol=2,_i=3,Mi=0,Dt=1,ln=2,ll=1,an=0,ti=1,Is=2,Fs=3,Ns=4,cl=5,$n=100,ul=101,dl=102,Os=103,zs=104,hl=200,fl=201,pl=202,ml=203,fo=204,po=205,gl=206,_l=207,vl=208,xl=209,bl=210,yl=0,Ml=1,Sl=2,rs=3,wl=4,El=5,Tl=6,Al=7,mo=0,Cl=1,Ll=2,Zt=0,Dl=1,Rl=2,Pl=3,Il=4,Fl=5,go=300,ii=301,ri=302,ss=303,as=304,ur=306,os=1e3,Lt=1001,ls=1002,ot=1003,Us=1004,Bs=1005,xt=1006,Nl=1007,dr=1008,wn=1009,Ol=1010,zl=1011,_o=1012,Ul=1013,xn=1014,bn=1015,Si=1016,Bl=1017,kl=1018,ni=1020,Gl=1021,Vl=1022,zt=1023,Hl=1024,Wl=1025,Mn=1026,si=1027,Xl=1028,ql=1029,jl=1030,Yl=1031,Zl=1033,Sr=33776,wr=33777,Er=33778,Tr=33779,ks=35840,Gs=35841,Vs=35842,Hs=35843,$l=36196,Ws=37492,Xs=37496,qs=37808,js=37809,Ys=37810,Zs=37811,$s=37812,Ks=37813,Js=37814,Qs=37815,ea=37816,ta=37817,na=37818,ia=37819,ra=37820,sa=37821,aa=36492,En=3e3,Ge=3001,Kl=3200,Jl=3201,vo=0,Ql=1,jt="srgb",yn="srgb-linear",Ar=7680,ec=519,oa=35044,la="300 es",cs=1035;class Ln{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cr=Math.PI/180,ca=180/Math.PI;function Ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tt[s&255]+tt[s>>8&255]+tt[s>>16&255]+tt[s>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[n&255]+tt[n>>8&255]+tt[n>>16&255]+tt[n>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function tc(s,e){return(s%e+e)%e}function Lr(s,e,t){return(1-t)*s+t*e}function ua(s){return(s&s-1)===0&&s!==0}function us(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],g=n[8],p=i[0],h=i[3],v=i[6],S=i[1],T=i[4],w=i[7],b=i[2],C=i[5],P=i[8];return r[0]=o*p+a*S+l*b,r[3]=o*h+a*T+l*C,r[6]=o*v+a*w+l*P,r[1]=c*p+d*S+u*b,r[4]=c*h+d*T+u*C,r[7]=c*v+d*w+u*P,r[2]=f*p+m*S+g*b,r[5]=f*h+m*T+g*C,r[8]=f*v+m*w+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*r,m=c*r-o*l,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-d*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(d*t-i*l)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],d=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*d,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function xo(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function wi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Dr={[jt]:{[yn]:Sn},[yn]:{[jt]:rr}},Et={legacyMode:!0,get workingColorSpace(){return yn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Dr[e]&&Dr[e][t]!==void 0){const n=Dr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ze={r:0,g:0,b:0},Tt={h:0,s:0,l:0},Ii={h:0,s:0,l:0};function Rr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Fi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yn){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yn){if(e=tc(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rr(o,r,e+1/3),this.g=Rr(o,r,e),this.b=Rr(o,r,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Et.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Et.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,d=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,d,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jt){const n=bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Et.fromWorkingColorSpace(Fi(this,Ze),e),lt(Ze.r*255,0,255)<<16^lt(Ze.g*255,0,255)<<8^lt(Ze.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yn){Et.fromWorkingColorSpace(Fi(this,Ze),t);const n=Ze.r,i=Ze.g,r=Ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=yn){return Et.fromWorkingColorSpace(Fi(this,Ze),t),e.r=Ze.r,e.g=Ze.g,e.b=Ze.b,e}getStyle(e=jt){return Et.fromWorkingColorSpace(Fi(this,Ze),e),e!==jt?`color(${e} ${Ze.r} ${Ze.g} ${Ze.b})`:`rgb(${Ze.r*255|0},${Ze.g*255|0},${Ze.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tt),Tt.h+=e,Tt.s+=t,Tt.l+=n,this.setHSL(Tt.h,Tt.s,Tt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(Ii);const n=Lr(Tt.h,Ii.h,t),i=Lr(Tt.s,Ii.s,t),r=Lr(Tt.l,Ii.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=bo;let On;class yo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{On===void 0&&(On=wi("canvas")),On.width=e.width,On.height=e.height;const n=On.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=On}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mo{constructor(e=null){this.isSource=!0,this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pr(i[o].image)):r.push(Pr(i[o]))}else r=Pr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Pr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nc=0;class St extends Ln{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Lt,i=Lt,r=xt,o=dr,a=zt,l=wn,c=1,d=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=Ti(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=go;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],h=l[6],v=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(m+1)/2,b=(v+1)/2,C=(d+f)/4,P=(u+p)/4,_=(g+h)/4;return T>w&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=C/n,r=P/n):w>b?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=P/r,i=_/r),this.set(n,i,r,t),this}let S=Math.sqrt((h-g)*(h-g)+(u-p)*(u-p)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(h-g)/S,this.y=(u-p)/S,this.z=(f-d)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tn extends Ln{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class So extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==m||d!==g){let h=1-a;const v=l*f+c*m+d*g+u*p,S=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const b=Math.sqrt(T),C=Math.atan2(b,v*S);h=Math.sin(h*C)/b,a=Math.sin(a*C)/b}const w=a*S;if(l=l*h+f*w,c=c*h+m*w,d=d*h+g*w,u=u*h+p*w,h===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*m-c*f,e[t+1]=l*g+d*f+c*u-a*m,e[t+2]=c*g+d*m+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"YZX":this._x=f*d*u+c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u-f*m*g;break;case"XZY":this._x=f*d*u-c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,d=l*n+a*t-r*i,u=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+d*-a-u*-o,this.y=d*l+f*-o+u*-r-c*-a,this.z=u*l+f*-a+c*-o-d*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new D,da=new An;class Ai{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const d=e[l],u=e[l+1],f=e[l+2];d<t&&(t=d),u<n&&(n=u),f<i&&(i=f),d>r&&(r=d),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const d=e.getX(l),u=e.getY(l),f=e.getZ(l);d<t&&(t=d),u<n&&(n=u),f<i&&(i=f),d>r&&(r=d),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)fn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fn)}else n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox),Fr.applyMatrix4(e.matrixWorld),this.union(Fr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Ni.subVectors(this.max,hi),zn.subVectors(e.a,hi),Un.subVectors(e.b,hi),Bn.subVectors(e.c,hi),Jt.subVectors(Un,zn),Qt.subVectors(Bn,Un),pn.subVectors(zn,Bn);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-pn.z,pn.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,pn.z,0,-pn.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-pn.y,pn.x,0];return!Nr(t,zn,Un,Bn,Ni)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,zn,Un,Bn,Ni))?!1:(Oi.crossVectors(Jt,Qt),t=[Oi.x,Oi.y,Oi.z],Nr(t,zn,Un,Bn,Ni))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vt=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,Fr=new Ai,zn=new D,Un=new D,Bn=new D,Jt=new D,Qt=new D,pn=new D,hi=new D,Ni=new D,Oi=new D,mn=new D;function Nr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){mn.fromArray(s,r);const a=i.x*Math.abs(mn.x)+i.y*Math.abs(mn.y)+i.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),d=n.dot(mn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const rc=new Ai,ha=new D,zi=new D,Or=new D;class hr{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Or.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?zi.set(0,0,1).multiplyScalar(e.radius):zi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ha.copy(e.center).add(zi)),this.expandByPoint(ha.copy(e.center).sub(zi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ht=new D,zr=new D,Ui=new D,en=new D,Ur=new D,Bi=new D,Br=new D;class wo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ht)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ht.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ht.copy(this.direction).multiplyScalar(t).add(this.origin),Ht.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),Ui.copy(t).sub(e).normalize(),en.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ui),a=en.dot(this.direction),l=-en.dot(Ui),c=en.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*l-a,f=o*a-l,g=r*d,u>=0)if(f>=-g)if(f<=g){const p=1/d;u*=p,f*=p,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ui).multiplyScalar(f).add(zr),m}intersectSphere(e,t){Ht.subVectors(e.center,this.origin);const n=Ht.dot(this.direction),i=Ht.dot(Ht)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ht)!==null}intersectTriangle(e,t,n,i,r){Ur.subVectors(t,e),Bi.subVectors(n,e),Br.crossVectors(Ur,Bi);let o=this.direction.dot(Br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);const l=a*this.direction.dot(Bi.crossVectors(en,Bi));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(en));if(c<0||l+c>o)return null;const d=-a*en.dot(Br);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,d,u,f,m,g,p,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=d,v[10]=u,v[14]=f,v[3]=m,v[7]=g,v[11]=p,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/kn.setFromMatrixColumn(e,0).length(),r=1/kn.setFromMatrixColumn(e,1).length(),o=1/kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*d,m=o*u,g=a*d,p=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,g=c*d,p=c*u;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,g=c*d,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*u,g=a*d,p=a*u;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*d,t[4]=p-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+g,t[10]=f-p*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+p,t[5]=o*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*d,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sc,e,ac)}lookAt(e,t,n){const i=this.elements;return ht.subVectors(e,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),tn.crossVectors(n,ht),tn.lengthSq()===0&&(Math.abs(n.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),tn.crossVectors(n,ht)),tn.normalize(),ki.crossVectors(ht,tn),i[0]=tn.x,i[4]=ki.x,i[8]=ht.x,i[1]=tn.y,i[5]=ki.y,i[9]=ht.y,i[2]=tn.z,i[6]=ki.z,i[10]=ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],g=n[2],p=n[6],h=n[10],v=n[14],S=n[3],T=n[7],w=n[11],b=n[15],C=i[0],P=i[4],_=i[8],A=i[12],z=i[1],N=i[5],J=i[9],K=i[13],R=i[2],q=i[6],k=i[10],Z=i[14],Y=i[3],U=i[7],H=i[11],ne=i[15];return r[0]=o*C+a*z+l*R+c*Y,r[4]=o*P+a*N+l*q+c*U,r[8]=o*_+a*J+l*k+c*H,r[12]=o*A+a*K+l*Z+c*ne,r[1]=d*C+u*z+f*R+m*Y,r[5]=d*P+u*N+f*q+m*U,r[9]=d*_+u*J+f*k+m*H,r[13]=d*A+u*K+f*Z+m*ne,r[2]=g*C+p*z+h*R+v*Y,r[6]=g*P+p*N+h*q+v*U,r[10]=g*_+p*J+h*k+v*H,r[14]=g*A+p*K+h*Z+v*ne,r[3]=S*C+T*z+w*R+b*Y,r[7]=S*P+T*N+w*q+b*U,r[11]=S*_+T*J+w*k+b*H,r[15]=S*A+T*K+w*Z+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],g=e[3],p=e[7],h=e[11],v=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*d-r*l*d)+h*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*d-n*c*d)+v*(-i*a*d-t*l*u+t*a*f+i*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],g=e[12],p=e[13],h=e[14],v=e[15],S=u*h*c-p*f*c+p*l*m-a*h*m-u*l*v+a*f*v,T=g*f*c-d*h*c-g*l*m+o*h*m+d*l*v-o*f*v,w=d*p*c-g*u*c+g*a*m-o*p*m-d*a*v+o*u*v,b=g*u*l-d*p*l-g*a*f+o*p*f+d*a*h-o*u*h,C=t*S+n*T+i*w+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=S*P,e[1]=(p*f*r-u*h*r-p*i*m+n*h*m+u*i*v-n*f*v)*P,e[2]=(a*h*r-p*l*r+p*i*c-n*h*c-a*i*v+n*l*v)*P,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*P,e[4]=T*P,e[5]=(d*h*r-g*f*r+g*i*m-t*h*m-d*i*v+t*f*v)*P,e[6]=(g*l*r-o*h*r-g*i*c+t*h*c+o*i*v-t*l*v)*P,e[7]=(o*f*r-d*l*r+d*i*c-t*f*c-o*i*m+t*l*m)*P,e[8]=w*P,e[9]=(g*u*r-d*p*r-g*n*m+t*p*m+d*n*v-t*u*v)*P,e[10]=(o*p*r-g*a*r+g*n*c-t*p*c-o*n*v+t*a*v)*P,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*m-t*a*m)*P,e[12]=b*P,e[13]=(d*p*i-g*u*i+g*n*f-t*p*f-d*n*h+t*u*h)*P,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*h-t*a*h)*P,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,f=r*c,m=r*d,g=r*u,p=o*d,h=o*u,v=a*u,S=l*c,T=l*d,w=l*u,b=n.x,C=n.y,P=n.z;return i[0]=(1-(p+v))*b,i[1]=(m+w)*b,i[2]=(g-T)*b,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(f+v))*C,i[6]=(h+S)*C,i[7]=0,i[8]=(g+T)*P,i[9]=(h-S)*P,i[10]=(1-(f+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=kn.set(i[0],i[1],i[2]).length();const o=kn.set(i[4],i[5],i[6]).length(),a=kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],At.copy(this);const c=1/r,d=1/o,u=1/a;return At.elements[0]*=c,At.elements[1]*=c,At.elements[2]*=c,At.elements[4]*=d,At.elements[5]*=d,At.elements[6]*=d,At.elements[8]*=u,At.elements[9]*=u,At.elements[10]*=u,t.setFromRotationMatrix(At),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),d=1/(o-r),u=(t+e)*l,f=(n+i)*c,m=(o+r)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const kn=new D,At=new qe,sc=new D(0,0,0),ac=new D(1,1,1),tn=new D,ki=new D,ht=new D,fa=new qe,pa=new An;class Ci{constructor(e=0,t=0,n=0,i=Ci.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ci.DefaultOrder="XYZ";Ci.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Eo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oc=0;const ma=new D,Gn=new An,Wt=new qe,Gi=new D,fi=new D,lc=new D,cc=new An,ga=new D(1,0,0),_a=new D(0,1,0),va=new D(0,0,1),uc={type:"added"},xa={type:"removed"};class rt extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new D,t=new Ci,n=new An,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new yt}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gi.copy(e):Gi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(fi,Gi,this.up):Wt.lookAt(Gi,fi,this.up),this.quaternion.setFromRotationMatrix(Wt),i&&(Wt.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Wt),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,e,lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fi,cc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DefaultUp=new D(0,1,0);rt.DefaultMatrixAutoUpdate=!0;const Ct=new D,Xt=new D,kr=new D,qt=new D,Vn=new D,Hn=new D,ba=new D,Gr=new D,Vr=new D,Hr=new D;class Yt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ct.subVectors(e,t),i.cross(Ct);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ct.subVectors(i,t),Xt.subVectors(n,t),kr.subVectors(e,t);const o=Ct.dot(Ct),a=Ct.dot(Xt),l=Ct.dot(kr),c=Xt.dot(Xt),d=Xt.dot(kr),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,qt),l.set(0,0),l.addScaledVector(r,qt.x),l.addScaledVector(o,qt.y),l.addScaledVector(a,qt.z),l}static isFrontFacing(e,t,n,i){return Ct.subVectors(n,t),Xt.subVectors(e,t),Ct.cross(Xt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Xt.subVectors(this.a,this.b),Ct.cross(Xt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Yt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Vn.subVectors(i,n),Hn.subVectors(r,n),Gr.subVectors(e,n);const l=Vn.dot(Gr),c=Hn.dot(Gr);if(l<=0&&c<=0)return t.copy(n);Vr.subVectors(e,i);const d=Vn.dot(Vr),u=Hn.dot(Vr);if(d>=0&&u<=d)return t.copy(i);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Vn,o);Hr.subVectors(e,r);const m=Vn.dot(Hr),g=Hn.dot(Hr);if(g>=0&&m<=g)return t.copy(r);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Hn,a);const h=d*g-m*u;if(h<=0&&u-d>=0&&m-g>=0)return ba.subVectors(r,i),a=(u-d)/(u-d+(m-g)),t.copy(i).addScaledVector(ba,a);const v=1/(h+p+f);return o=p*v,a=f*v,t.copy(n).addScaledVector(Vn,o).addScaledVector(Hn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dc=0;class li extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ti,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===ll;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class To extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new D,Vi=new Me;class Mt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=oa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Oe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Me),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new $e),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ao extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Co extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hc=0;const vt=new qe,Wr=new rt,Wn=new D,ft=new Ai,pi=new Ai,Je=new D;class Bt extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xo(e)?Co:Ao)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vt.makeRotationFromQuaternion(e),this.applyMatrix4(vt),this}rotateX(e){return vt.makeRotationX(e),this.applyMatrix4(vt),this}rotateY(e){return vt.makeRotationY(e),this.applyMatrix4(vt),this}rotateZ(e){return vt.makeRotationZ(e),this.applyMatrix4(vt),this}translate(e,t,n){return vt.makeTranslation(e,t,n),this.applyMatrix4(vt),this}scale(e,t,n){return vt.makeScale(e,t,n),this.applyMatrix4(vt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ft.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(ft.min,pi.min),ft.expandByPoint(Je),Je.addVectors(ft.max,pi.max),ft.expandByPoint(Je)):(ft.expandByPoint(pi.min),ft.expandByPoint(pi.max))}ft.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Je.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Je.fromBufferAttribute(a,c),l&&(Wn.fromBufferAttribute(e,c),Je.add(Wn)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let z=0;z<a;z++)c[z]=new D,d[z]=new D;const u=new D,f=new D,m=new D,g=new Me,p=new Me,h=new Me,v=new D,S=new D;function T(z,N,J){u.fromArray(i,z*3),f.fromArray(i,N*3),m.fromArray(i,J*3),g.fromArray(o,z*2),p.fromArray(o,N*2),h.fromArray(o,J*2),f.sub(u),m.sub(u),p.sub(g),h.sub(g);const K=1/(p.x*h.y-h.x*p.y);!isFinite(K)||(v.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(K),S.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(K),c[z].add(v),c[N].add(v),c[J].add(v),d[z].add(S),d[N].add(S),d[J].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let z=0,N=w.length;z<N;++z){const J=w[z],K=J.start,R=J.count;for(let q=K,k=K+R;q<k;q+=3)T(n[q+0],n[q+1],n[q+2])}const b=new D,C=new D,P=new D,_=new D;function A(z){P.fromArray(r,z*3),_.copy(P);const N=c[z];b.copy(N),b.sub(P.multiplyScalar(P.dot(N))).normalize(),C.crossVectors(_,N);const K=C.dot(d[z])<0?-1:1;l[z*4]=b.x,l[z*4+1]=b.y,l[z*4+2]=b.z,l[z*4+3]=K}for(let z=0,N=w.length;z<N;++z){const J=w[z],K=J.start,R=J.count;for(let q=K,k=K+R;q<k;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,d=Math.min(l.length,o.length-c);for(let u=0,f=c;u<d;u++,f++)o[f]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*d;for(let v=0;v<d;v++)f[g++]=c[m++]}return new Mt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new qe,Xn=new wo,Xr=new hr,nn=new D,rn=new D,sn=new D,qr=new D,jr=new D,Yr=new D,Hi=new D,Wi=new D,Xi=new D,qi=new Me,ji=new Me,Yi=new Me,Zr=new D,Zi=new D;class pt extends rt{constructor(e=new Bt,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),e.ray.intersectsSphere(Xr)===!1)||(ya.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(ya),n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,d=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],S=i[v.materialIndex],T=Math.max(v.start,g.start),w=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let b=T,C=w;b<C;b+=3){const P=a.getX(b),_=a.getX(b+1),A=a.getX(b+2);o=$i(this,S,e,Xn,l,c,d,u,f,P,_,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let v=p,S=h;v<S;v+=3){const T=a.getX(v),w=a.getX(v+1),b=a.getX(v+2);o=$i(this,i,e,Xn,l,c,d,u,f,T,w,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],S=i[v.materialIndex],T=Math.max(v.start,g.start),w=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let b=T,C=w;b<C;b+=3){const P=b,_=b+1,A=b+2;o=$i(this,S,e,Xn,l,c,d,u,f,P,_,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let v=p,S=h;v<S;v+=3){const T=v,w=v+1,b=v+2;o=$i(this,i,e,Xn,l,c,d,u,f,T,w,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function fc(s,e,t,n,i,r,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==ln,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:s}}function $i(s,e,t,n,i,r,o,a,l,c,d,u){nn.fromBufferAttribute(i,c),rn.fromBufferAttribute(i,d),sn.fromBufferAttribute(i,u);const f=s.morphTargetInfluences;if(r&&f){Hi.set(0,0,0),Wi.set(0,0,0),Xi.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const h=f[g],v=r[g];h!==0&&(qr.fromBufferAttribute(v,c),jr.fromBufferAttribute(v,d),Yr.fromBufferAttribute(v,u),o?(Hi.addScaledVector(qr,h),Wi.addScaledVector(jr,h),Xi.addScaledVector(Yr,h)):(Hi.addScaledVector(qr.sub(nn),h),Wi.addScaledVector(jr.sub(rn),h),Xi.addScaledVector(Yr.sub(sn),h)))}nn.add(Hi),rn.add(Wi),sn.add(Xi)}s.isSkinnedMesh&&(s.boneTransform(c,nn),s.boneTransform(d,rn),s.boneTransform(u,sn));const m=fc(s,e,t,n,nn,rn,sn,Zr);if(m){a&&(qi.fromBufferAttribute(a,c),ji.fromBufferAttribute(a,d),Yi.fromBufferAttribute(a,u),m.uv=Yt.getUV(Zr,nn,rn,sn,qi,ji,Yi,new Me)),l&&(qi.fromBufferAttribute(l,c),ji.fromBufferAttribute(l,d),Yi.fromBufferAttribute(l,u),m.uv2=Yt.getUV(Zr,nn,rn,sn,qi,ji,Yi,new Me));const g={a:c,b:d,c:u,normal:new D,materialIndex:0};Yt.getNormal(nn,rn,sn,g.normal),m.face=g}return m}class Li extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(u,2));function g(p,h,v,S,T,w,b,C,P,_,A){const z=w/P,N=b/_,J=w/2,K=b/2,R=C/2,q=P+1,k=_+1;let Z=0,Y=0;const U=new D;for(let H=0;H<k;H++){const ne=H*N-K;for(let ee=0;ee<q;ee++){const Q=ee*z-J;U[p]=Q*S,U[h]=ne*T,U[v]=R,c.push(U.x,U.y,U.z),U[p]=0,U[h]=0,U[v]=C>0?1:-1,d.push(U.x,U.y,U.z),u.push(ee/P),u.push(1-H/_),Z+=1}}for(let H=0;H<_;H++)for(let ne=0;ne<P;ne++){const ee=f+ne+q*H,Q=f+ne+q*(H+1),fe=f+(ne+1)+q*(H+1),ve=f+(ne+1)+q*H;l.push(ee,Q,ve),l.push(Q,fe,ve),Y+=6}a.addGroup(m,Y,A),m+=Y,f+=Z}}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nt(s){const e={};for(let t=0;t<s.length;t++){const n=ai(s[t]);for(const i in n)e[i]=n[i]}return e}function pc(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const mc={clone:ai,merge:nt};var gc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gc,this.fragmentShader=_c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=pc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lo extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Lo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qn=90,jn=1;class vc extends rt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new bt(qn,jn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const r=new bt(qn,jn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const o=new bt(qn,jn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new bt(qn,jn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new bt(qn,jn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new bt(qn,jn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,d=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=Zt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Do extends St{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xc extends Tn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Do(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:an});r.uniforms.tEquirect.value=t;const o=new pt(i,r),a=t.minFilter;return t.minFilter===dr&&(t.minFilter=xt),new vc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const $r=new D,bc=new D,yc=new yt;class gn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$r.subVectors(n,t).cross(bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yc.getNormalMatrix(e),i=this.coplanarPoint($r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new hr,Ki=new D;class bs{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,o=new gn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7],f=n[8],m=n[9],g=n[10],p=n[11],h=n[12],v=n[13],S=n[14],T=n[15];return t[0].setComponents(a-i,u-l,p-f,T-h).normalize(),t[1].setComponents(a+i,u+l,p+f,T+h).normalize(),t[2].setComponents(a+r,u+c,p+m,T+v).normalize(),t[3].setComponents(a-r,u-c,p-m,T-v).normalize(),t[4].setComponents(a-o,u-d,p-g,T-S).normalize(),t[5].setComponents(a+o,u+d,p+g,T+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ki.x=i.normal.x>0?e.max.x:e.min.x,Ki.y=i.normal.y>0?e.max.y:e.min.y,Ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ro(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Mc(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const u=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,d,u){const f=d.array,m=d.updateRange;s.bindBuffer(u,c),m.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(s.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,d)):u.version<c.version&&(r(u.buffer,c,d),u.version=c.version)}return{get:o,remove:a,update:l}}class Di extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,f=t/l,m=[],g=[],p=[],h=[];for(let v=0;v<d;v++){const S=v*f-o;for(let T=0;T<c;T++){const w=T*u-r;g.push(w,-S,0),p.push(0,0,1),h.push(T/a),h.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const T=S+c*v,w=S+c*(v+1),b=S+1+c*(v+1),C=S+1+c*v;m.push(T,w,C),m.push(w,b,C)}this.setIndex(m),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(p,3)),this.setAttribute("uv",new Ut(h,2))}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ec=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lc="vec3 transformed = vec3( position );",Dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Pc=`#ifdef USE_IRIDESCENCE
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
#endif`,Ic=`#ifdef USE_BUMPMAP
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
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vc=`#define PI 3.141592653589793
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
}`,Hc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wc=`vec3 transformedNormal = objectNormal;
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
#endif`,Xc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zc="gl_FragColor = linearToOutputTexel( gl_FragColor );",$c=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qc=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,au=`#ifdef USE_GRADIENTMAP
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
}`,ou=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`vec3 diffuse = vec3( 1.0 );
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
#endif`,uu=`uniform bool receiveShadow;
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
#endif`,du=`#if defined( USE_ENVMAP )
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
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,gu=`PhysicalMaterial material;
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
#endif`,_u=`struct PhysicalMaterial {
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
}`,vu=`
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
#endif`,xu=`#if defined( RE_IndirectDiffuse )
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Iu=`#ifdef USE_MORPHTARGETS
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
#endif`,Fu=`#ifdef USE_MORPHTARGETS
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
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ou=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
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
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#ifdef USE_SHADOWMAP
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
#endif`,ed=`#ifdef USE_SHADOWMAP
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
#endif`,td=`#ifdef USE_SHADOWMAP
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
#endif`,nd=`float getShadowMask() {
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
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rd=`#ifdef USE_SKINNING
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
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ad=`#ifdef USE_SKINNING
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
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dd=`#ifdef USE_TRANSMISSION
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
#endif`,hd=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,md=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_d=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`#include <envmap_common_pars_fragment>
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
}`,wd=`#include <common>
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
}`,Ed=`#if DEPTH_PACKING == 3200
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
}`,Td=`#define DISTANCE
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
}`,Ad=`#define DISTANCE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dd=`uniform float scale;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Id=`uniform vec3 diffuse;
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
}`,Fd=`#define LAMBERT
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Od=`#define MATCAP
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
}`,zd=`#define MATCAP
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
}`,Ud=`#define NORMAL
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
}`,Bd=`#define NORMAL
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
}`,kd=`#define PHONG
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
}`,Gd=`#define PHONG
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
}`,Vd=`#define STANDARD
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
}`,Hd=`#define STANDARD
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
}`,Wd=`#define TOON
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
}`,Xd=`#define TOON
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
}`,qd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,Zd=`uniform vec3 color;
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
}`,$d=`uniform float rotation;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Te={alphamap_fragment:Sc,alphamap_pars_fragment:wc,alphatest_fragment:Ec,alphatest_pars_fragment:Tc,aomap_fragment:Ac,aomap_pars_fragment:Cc,begin_vertex:Lc,beginnormal_vertex:Dc,bsdfs:Rc,iridescence_fragment:Pc,bumpmap_pars_fragment:Ic,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Nc,clipping_planes_pars_vertex:Oc,clipping_planes_vertex:zc,color_fragment:Uc,color_pars_fragment:Bc,color_pars_vertex:kc,color_vertex:Gc,common:Vc,cube_uv_reflection_fragment:Hc,defaultnormal_vertex:Wc,displacementmap_pars_vertex:Xc,displacementmap_vertex:qc,emissivemap_fragment:jc,emissivemap_pars_fragment:Yc,encodings_fragment:Zc,encodings_pars_fragment:$c,envmap_fragment:Kc,envmap_common_pars_fragment:Jc,envmap_pars_fragment:Qc,envmap_pars_vertex:eu,envmap_physical_pars_fragment:du,envmap_vertex:tu,fog_vertex:nu,fog_pars_vertex:iu,fog_fragment:ru,fog_pars_fragment:su,gradientmap_pars_fragment:au,lightmap_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_vertex:cu,lights_pars_begin:uu,lights_toon_fragment:hu,lights_toon_pars_fragment:fu,lights_phong_fragment:pu,lights_phong_pars_fragment:mu,lights_physical_fragment:gu,lights_physical_pars_fragment:_u,lights_fragment_begin:vu,lights_fragment_maps:xu,lights_fragment_end:bu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:wu,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:Au,map_particle_pars_fragment:Cu,metalnessmap_fragment:Lu,metalnessmap_pars_fragment:Du,morphcolor_vertex:Ru,morphnormal_vertex:Pu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Fu,normal_fragment_begin:Nu,normal_fragment_maps:Ou,normal_pars_fragment:zu,normal_pars_vertex:Uu,normal_vertex:Bu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Vu,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Wu,output_fragment:Xu,packing:qu,premultiplied_alpha_fragment:ju,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:$u,roughnessmap_fragment:Ku,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:ed,shadowmap_vertex:td,shadowmask_pars_fragment:nd,skinbase_vertex:id,skinning_pars_vertex:rd,skinning_vertex:sd,skinnormal_vertex:ad,specularmap_fragment:od,specularmap_pars_fragment:ld,tonemapping_fragment:cd,tonemapping_pars_fragment:ud,transmission_fragment:dd,transmission_pars_fragment:hd,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:md,uv2_pars_fragment:gd,uv2_pars_vertex:_d,uv2_vertex:vd,worldpos_vertex:xd,background_vert:bd,background_frag:yd,cube_vert:Md,cube_frag:Sd,depth_vert:wd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:Ad,equirect_vert:Cd,equirect_frag:Ld,linedashed_vert:Dd,linedashed_frag:Rd,meshbasic_vert:Pd,meshbasic_frag:Id,meshlambert_vert:Fd,meshlambert_frag:Nd,meshmatcap_vert:Od,meshmatcap_frag:zd,meshnormal_vert:Ud,meshnormal_frag:Bd,meshphong_vert:kd,meshphong_frag:Gd,meshphysical_vert:Vd,meshphysical_frag:Hd,meshtoon_vert:Wd,meshtoon_frag:Xd,points_vert:qd,points_frag:jd,shadow_vert:Yd,shadow_frag:Zd,sprite_vert:$d,sprite_frag:Kd},ae={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},Nt={basic:{uniforms:nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.fog,ae.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:nt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:nt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:nt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:nt([ae.points,ae.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:nt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:nt([ae.common,ae.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:nt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:nt([ae.sprite,ae.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:nt([ae.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:nt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:nt([ae.lights,ae.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Nt.physical={uniforms:nt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Jd(s,e,t,n,i,r){const o=new Oe(0);let a=i===!0?0:1,l,c,d=null,u=0,f=null;function m(p,h){let v=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=e.get(S));const T=s.xr,w=T.getSession&&T.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?g(o,a):S&&S.isColor&&(g(S,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ur)?(c===void 0&&(c=new pt(new Li(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:ai(Nt.cube.uniforms),vertexShader:Nt.cube.vertexShader,fragmentShader:Nt.cube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(d!==S||u!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pt(new Di(2,2),new Cn({name:"BackgroundMaterial",uniforms:ai(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function Qd(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=h(null);let c=l,d=!1;function u(R,q,k,Z,Y){let U=!1;if(o){const H=p(Z,k,q);c!==H&&(c=H,m(c.object)),U=v(R,Z,k,Y),U&&S(R,Z,k,Y)}else{const H=q.wireframe===!0;(c.geometry!==Z.id||c.program!==k.id||c.wireframe!==H)&&(c.geometry=Z.id,c.program=k.id,c.wireframe=H,U=!0)}Y!==null&&t.update(Y,34963),(U||d)&&(d=!1,_(R,q,k,Z),Y!==null&&s.bindBuffer(34963,t.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,q,k){const Z=k.wireframe===!0;let Y=a[R.id];Y===void 0&&(Y={},a[R.id]=Y);let U=Y[q.id];U===void 0&&(U={},Y[q.id]=U);let H=U[Z];return H===void 0&&(H=h(f()),U[Z]=H),H}function h(R){const q=[],k=[],Z=[];for(let Y=0;Y<i;Y++)q[Y]=0,k[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:Z,object:R,attributes:{},index:null}}function v(R,q,k,Z){const Y=c.attributes,U=q.attributes;let H=0;const ne=k.getAttributes();for(const ee in ne)if(ne[ee].location>=0){const fe=Y[ee];let ve=U[ee];if(ve===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(ve=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(ve=R.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;H++}return c.attributesNum!==H||c.index!==Z}function S(R,q,k,Z){const Y={},U=q.attributes;let H=0;const ne=k.getAttributes();for(const ee in ne)if(ne[ee].location>=0){let fe=U[ee];fe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),Y[ee]=ve,H++}c.attributes=Y,c.attributesNum=H,c.index=Z}function T(){const R=c.newAttributes;for(let q=0,k=R.length;q<k;q++)R[q]=0}function w(R){b(R,0)}function b(R,q){const k=c.newAttributes,Z=c.enabledAttributes,Y=c.attributeDivisors;k[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),Y[R]!==q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,q),Y[R]=q)}function C(){const R=c.newAttributes,q=c.enabledAttributes;for(let k=0,Z=q.length;k<Z;k++)q[k]!==R[k]&&(s.disableVertexAttribArray(k),q[k]=0)}function P(R,q,k,Z,Y,U){n.isWebGL2===!0&&(k===5124||k===5125)?s.vertexAttribIPointer(R,q,k,Y,U):s.vertexAttribPointer(R,q,k,Z,Y,U)}function _(R,q,k,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const Y=Z.attributes,U=k.getAttributes(),H=q.defaultAttributeValues;for(const ne in U){const ee=U[ne];if(ee.location>=0){let Q=Y[ne];if(Q===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const fe=Q.normalized,ve=Q.itemSize,W=t.get(Q);if(W===void 0)continue;const Re=W.buffer,me=W.type,xe=W.bytesPerElement;if(Q.isInterleavedBufferAttribute){const he=Q.data,Ie=he.stride,Se=Q.offset;if(he.isInstancedInterleavedBuffer){for(let pe=0;pe<ee.locationSize;pe++)b(ee.location+pe,he.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<ee.locationSize;pe++)w(ee.location+pe);s.bindBuffer(34962,Re);for(let pe=0;pe<ee.locationSize;pe++)P(ee.location+pe,ve/ee.locationSize,me,fe,Ie*xe,(Se+ve/ee.locationSize*pe)*xe)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)b(ee.location+he,Q.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<ee.locationSize;he++)w(ee.location+he);s.bindBuffer(34962,Re);for(let he=0;he<ee.locationSize;he++)P(ee.location+he,ve/ee.locationSize,me,fe,ve*xe,ve/ee.locationSize*he*xe)}}else if(H!==void 0){const fe=H[ne];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(ee.location,fe);break;case 3:s.vertexAttrib3fv(ee.location,fe);break;case 4:s.vertexAttrib4fv(ee.location,fe);break;default:s.vertexAttrib1fv(ee.location,fe)}}}}C()}function A(){J();for(const R in a){const q=a[R];for(const k in q){const Z=q[k];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete q[k]}delete a[R]}}function z(R){if(a[R.id]===void 0)return;const q=a[R.id];for(const k in q){const Z=q[k];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete q[k]}delete a[R.id]}function N(R){for(const q in a){const k=a[q];if(k[R.id]===void 0)continue;const Z=k[R.id];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete k[R.id]}}function J(){K(),d=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:K,dispose:A,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:w,disableUnusedAttributes:C}}function eh(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,d){s.drawArrays(r,c,d),t.update(d,r,1)}function l(c,d,u){if(u===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,d,u),t.update(d,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function th(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),h=s.getParameter(36347),v=s.getParameter(36348),S=s.getParameter(36349),T=f>0,w=o||e.has("OES_texture_float"),b=T&&w,C=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:T,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:C}}function nh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new gn,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||n!==0||i;return i=f,t=d(u,m,0),n=u.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,h=u.clipShadows,v=s.get(u);if(!i||g===null||g.length===0||r&&!h)r?d(null):c();else{const S=r?0:n,T=S*4;let w=v.clippingState||null;l.value=w,w=d(g,f,T,m);for(let b=0;b!==T;++b)w[b]=t[b];v.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,m,g){const p=u!==null?u.length:0;let h=null;if(p!==0){if(h=l.value,g!==!0||h===null){const v=m+p*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(h===null||h.length<v)&&(h=new Float32Array(v));for(let T=0,w=m;T!==p;++T,w+=4)o.copy(u[T]).applyMatrix4(S,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function ih(s){let e=new WeakMap;function t(o,a){return a===ss?o.mapping=ii:a===as&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ss||a===as)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xc(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Po extends Lo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,Ma=[.125,.215,.35,.446,.526,.582],vn=20,Kr=new Po,Sa=new Oe;let Jr=null;const _n=(1+Math.sqrt(5))/2,Zn=1/_n,wa=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,_n,Zn),new D(0,_n,-Zn),new D(Zn,0,_n),new D(-Zn,0,_n),new D(_n,Zn,0),new D(-_n,Zn,0)];class Ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xt,minFilter:xt,generateMipmaps:!1,type:Si,format:zt,encoding:En,depthBuffer:!1},i=Ta(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ta(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rh(r)),this._blurMaterial=sh(r,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i){const a=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Sa),d.toneMapping=Zt,d.autoClear=!1;const m=new To({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new pt(new Li,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Sa),p=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const T=this._cubeSize;Ji(i,S*T,v>2?T:0,T,T),d.setRenderTarget(i),p&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Aa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=wa[(i-1)%wa.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new pt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vn-1),p=r/g,h=isFinite(r)?1+Math.floor(d*p):vn;h>vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${vn}`);const v=[];let S=0;for(let P=0;P<vn;++P){const _=P/p,A=Math.exp(-_*_/2);v.push(A),P===0?S+=A:P<h&&(S+=2*A)}for(let P=0;P<v.length;P++)v[P]=v[P]/S;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const w=this._sizeLods[i],b=3*w*(i>T-Qn?i-T+Qn:0),C=4*(this._cubeSize-w);Ji(t,b,C,3*w,2*w),l.setRenderTarget(t),l.render(u,Kr)}}function rh(s){const e=[],t=[],n=[];let i=s;const r=s-Qn+1+Ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Qn?l=Ma[o-s+Qn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,p=3,h=2,v=1,S=new Float32Array(p*g*m),T=new Float32Array(h*g*m),w=new Float32Array(v*g*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,_=C>2?0:-1,A=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];S.set(A,p*g*C),T.set(f,h*g*C);const z=[C,C,C,C,C,C];w.set(z,v*g*C)}const b=new Bt;b.setAttribute("position",new Mt(S,p)),b.setAttribute("uv",new Mt(T,h)),b.setAttribute("faceIndex",new Mt(w,v)),e.push(b),i>Qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ta(s,e,t){const n=new Tn(s,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function sh(s,e,t){const n=new Float32Array(vn),i=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ys(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Aa(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ca(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function ys(){return`

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
	`}function ah(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ss||l===as,d=l===ii||l===ri;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ea(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||d&&u&&i(u)){t===null&&(t=new Ea(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lh(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let h=0,v=p.length;h<v;h++)e.update(p[h],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let T=0,w=S.length;T<w;T+=3){const b=S[T+0],C=S[T+1],P=S[T+2];f.push(b,C,C,P,P,b)}}else{const S=g.array;p=g.version;for(let T=0,w=S.length/3-1;T<w;T+=3){const b=T+0,C=T+1,P=T+2;f.push(b,C,C,P,P,b)}}const h=new(xo(f)?Co:Ao)(f,1);h.version=p;const v=r.get(u);v&&e.remove(v),r.set(u,h)}function d(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function ch(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}function u(f,m,g){if(g===0)return;let p,h;if(i)p=s,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,a,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u}function uh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dh(s,e){return s[0]-e[0]}function hh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Qr(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function fh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,u,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let v=r.get(d);if(v===void 0||v.count!==h){let k=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var g=k;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let z=0;w===!0&&(z=1),b===!0&&(z=2),C===!0&&(z=3);let N=d.attributes.position.count*z,J=1;N>e.maxTextureSize&&(J=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const K=new Float32Array(N*J*4*h),R=new So(K,N,J,h);R.type=bn,R.needsUpdate=!0;const q=z*4;for(let Z=0;Z<h;Z++){const Y=P[Z],U=_[Z],H=A[Z],ne=N*J*4*Z;for(let ee=0;ee<Y.count;ee++){const Q=ee*q;w===!0&&(o.fromBufferAttribute(Y,ee),Y.normalized===!0&&Qr(o,Y),K[ne+Q+0]=o.x,K[ne+Q+1]=o.y,K[ne+Q+2]=o.z,K[ne+Q+3]=0),b===!0&&(o.fromBufferAttribute(U,ee),U.normalized===!0&&Qr(o,U),K[ne+Q+4]=o.x,K[ne+Q+5]=o.y,K[ne+Q+6]=o.z,K[ne+Q+7]=0),C===!0&&(o.fromBufferAttribute(H,ee),H.normalized===!0&&Qr(o,H),K[ne+Q+8]=o.x,K[ne+Q+9]=o.y,K[ne+Q+10]=o.z,K[ne+Q+11]=H.itemSize===4?o.w:1)}}v={count:h,texture:R,size:new Me(N,J)},r.set(d,v),d.addEventListener("dispose",k)}let S=0;for(let w=0;w<m.length;w++)S+=m[w];const T=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let h=n[d.id];if(h===void 0||h.length!==p){h=[];for(let b=0;b<p;b++)h[b]=[b,0];n[d.id]=h}for(let b=0;b<p;b++){const C=h[b];C[0]=b,C[1]=m[b]}h.sort(hh);for(let b=0;b<8;b++)b<p&&h[b][1]?(a[b][0]=h[b][0],a[b][1]=h[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(dh);const v=d.morphAttributes.position,S=d.morphAttributes.normal;let T=0;for(let b=0;b<8;b++){const C=a[b],P=C[0],_=C[1];P!==Number.MAX_SAFE_INTEGER&&_?(v&&d.getAttribute("morphTarget"+b)!==v[P]&&d.setAttribute("morphTarget"+b,v[P]),S&&d.getAttribute("morphNormal"+b)!==S[P]&&d.setAttribute("morphNormal"+b,S[P]),i[b]=_,T+=_):(v&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),S&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const w=d.morphTargetsRelative?1:1-T;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ph(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Io=new St,Fo=new So,No=new ic,Oo=new Do,La=[],Da=[],Ra=new Float32Array(16),Pa=new Float32Array(9),Ia=new Float32Array(4);function ci(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=La[i];if(r===void 0&&(r=new Float32Array(i),La[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function st(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fr(s,e){let t=Da[e];t===void 0&&(t=new Int32Array(e),Da[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function _h(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function vh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function xh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ia.set(n),s.uniformMatrix2fv(this.addr,!1,Ia),at(t,n)}}function bh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Pa.set(n),s.uniformMatrix3fv(this.addr,!1,Pa),at(t,n)}}function yh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Ra.set(n),s.uniformMatrix4fv(this.addr,!1,Ra),at(t,n)}}function Mh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sh(s,e){const t=this.cache;st(t,e)||(s.uniform2iv(this.addr,e),at(t,e))}function wh(s,e){const t=this.cache;st(t,e)||(s.uniform3iv(this.addr,e),at(t,e))}function Eh(s,e){const t=this.cache;st(t,e)||(s.uniform4iv(this.addr,e),at(t,e))}function Th(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ah(s,e){const t=this.cache;st(t,e)||(s.uniform2uiv(this.addr,e),at(t,e))}function Ch(s,e){const t=this.cache;st(t,e)||(s.uniform3uiv(this.addr,e),at(t,e))}function Lh(s,e){const t=this.cache;st(t,e)||(s.uniform4uiv(this.addr,e),at(t,e))}function Dh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Io,i)}function Rh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||No,i)}function Ph(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oo,i)}function Ih(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fo,i)}function Fh(s){switch(s){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return vh;case 35674:return xh;case 35675:return bh;case 35676:return yh;case 5124:case 35670:return Mh;case 35667:case 35671:return Sh;case 35668:case 35672:return wh;case 35669:case 35673:return Eh;case 5125:return Th;case 36294:return Ah;case 36295:return Ch;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Rh;case 35680:case 36300:case 36308:case 36293:return Ph;case 36289:case 36303:case 36311:case 36292:return Ih}}function Nh(s,e){s.uniform1fv(this.addr,e)}function Oh(s,e){const t=ci(e,this.size,2);s.uniform2fv(this.addr,t)}function zh(s,e){const t=ci(e,this.size,3);s.uniform3fv(this.addr,t)}function Uh(s,e){const t=ci(e,this.size,4);s.uniform4fv(this.addr,t)}function Bh(s,e){const t=ci(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kh(s,e){const t=ci(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gh(s,e){const t=ci(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vh(s,e){s.uniform1iv(this.addr,e)}function Hh(s,e){s.uniform2iv(this.addr,e)}function Wh(s,e){s.uniform3iv(this.addr,e)}function Xh(s,e){s.uniform4iv(this.addr,e)}function qh(s,e){s.uniform1uiv(this.addr,e)}function jh(s,e){s.uniform2uiv(this.addr,e)}function Yh(s,e){s.uniform3uiv(this.addr,e)}function Zh(s,e){s.uniform4uiv(this.addr,e)}function $h(s,e,t){const n=e.length,i=fr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Io,i[r])}function Kh(s,e,t){const n=e.length,i=fr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||No,i[r])}function Jh(s,e,t){const n=e.length,i=fr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Oo,i[r])}function Qh(s,e,t){const n=e.length,i=fr(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Fo,i[r])}function ef(s){switch(s){case 5126:return Nh;case 35664:return Oh;case 35665:return zh;case 35666:return Uh;case 35674:return Bh;case 35675:return kh;case 35676:return Gh;case 5124:case 35670:return Vh;case 35667:case 35671:return Hh;case 35668:case 35672:return Wh;case 35669:case 35673:return Xh;case 5125:return qh;case 36294:return jh;case 36295:return Yh;case 36296:return Zh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return Kh;case 35680:case 36300:case 36308:case 36293:return Jh;case 36289:case 36303:case 36311:case 36292:return Qh}}class tf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Fh(t.type)}}class nf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ef(t.type)}}class rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const es=/(\w+)(\])?(\[|\.)?/g;function Fa(s,e){s.seq.push(e),s.map[e.id]=e}function sf(s,e,t){const n=s.name,i=n.length;for(es.lastIndex=0;;){const r=es.exec(n),o=es.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fa(t,c===void 0?new tf(a,s,e):new nf(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new rf(a),Fa(t,u)),t=u}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);sf(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Na(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let af=0;function of(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lf(s){switch(s){case En:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Oa(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+of(s.getShaderSource(e),o)}else return i}function cf(s,e){const t=lf(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function uf(s,e){let t;switch(e){case Dl:t="Linear";break;case Rl:t="Reinhard";break;case Pl:t="OptimizedCineon";break;case Il:t="ACESFilmic";break;case Fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function df(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function hf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ff(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function vi(s){return s!==""}function za(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ua(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(s){return s.replace(pf,mf)}function mf(s,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ds(t)}const gf=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,_f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ba(s){return s.replace(_f,zo).replace(gf,vf)}function vf(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zo(s,e,t,n)}function zo(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ka(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ho?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function bf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case ri:e="ENVMAP_TYPE_CUBE";break;case ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function Mf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Cl:e="ENVMAP_BLENDING_MIX";break;case Ll:e="ENVMAP_BLENDING_ADD";break}return e}function Sf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xf(t),c=bf(t),d=yf(t),u=Mf(t),f=Sf(t),m=t.isWebGL2?"":df(t),g=hf(r),p=i.createProgram();let h,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(vi).join(`
`),h.length>0&&(h+=`
`),v=[m,g].filter(vi).join(`
`),v.length>0&&(v+=`
`)):(h=[ka(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),v=[m,ka(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?Te.tonemapping_pars_fragment:"",t.toneMapping!==Zt?uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,cf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),o=ds(o),o=za(o,t),o=Ua(o,t),a=ds(a),a=za(a,t),a=Ua(a,t),o=Ba(o),a=Ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=S+h+o,w=S+v+a,b=Na(i,35633,T),C=Na(i,35632,w);if(i.attachShader(p,b),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(C).trim();let J=!0,K=!0;if(i.getProgramParameter(p,35714)===!1){J=!1;const R=Oa(i,b,"vertex"),q=Oa(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+R+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(z===""||N==="")&&(K=!1);K&&(this.diagnostics={runnable:J,programLog:A,vertexShader:{log:z,prefix:h},fragmentShader:{log:N,prefix:v}})}i.deleteShader(b),i.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new sr(i,p)),P};let _;return this.getAttributes=function(){return _===void 0&&(_=ff(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=af++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=C,this}let Ef=0;class Tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Af(e);t.set(e,n)}return t.get(e)}}class Af{constructor(e){this.id=Ef++,this.code=e,this.usedTimes=0}}function Cf(s,e,t,n,i,r,o){const a=new Eo,l=new Tf,c=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,A,z,N,J){const K=N.fog,R=J.geometry,q=_.isMeshStandardMaterial?N.environment:null,k=(_.isMeshStandardMaterial?t:e).get(_.envMap||q),Z=!!k&&k.mapping===ur?k.image.height:null,Y=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const U=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,H=U!==void 0?U.length:0;let ne=0;R.morphAttributes.position!==void 0&&(ne=1),R.morphAttributes.normal!==void 0&&(ne=2),R.morphAttributes.color!==void 0&&(ne=3);let ee,Q,fe,ve;if(Y){const Ie=Nt[Y];ee=Ie.vertexShader,Q=Ie.fragmentShader}else ee=_.vertexShader,Q=_.fragmentShader,l.update(_),fe=l.getVertexShaderID(_),ve=l.getFragmentShaderID(_);const W=s.getRenderTarget(),Re=_.alphaTest>0,me=_.clearcoat>0,xe=_.iridescence>0;return{isWebGL2:d,shaderID:Y,shaderName:_.type,vertexShader:ee,fragmentShader:Q,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?s.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:En,map:!!_.map,matcap:!!_.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:Z,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Ql,tangentSpaceNormalMap:_.normalMapType===vo,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ge,clearcoat:me,clearcoatMap:me&&!!_.clearcoatMap,clearcoatRoughnessMap:me&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!_.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!_.iridescenceMap,iridescenceThicknessMap:xe&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ti,alphaMap:!!_.alphaMap,alphaTest:Re,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!R.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!K,useFog:_.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:Zt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===Dt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)A.push(z),A.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(v(A,_),S(A,_),A.push(s.outputEncoding)),A.push(_.customProgramCacheKey),A.join()}function v(_,A){_.push(A.precision),_.push(A.outputEncoding),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.combine),_.push(A.vertexUvs),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),_.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),_.push(a.mask)}function T(_){const A=g[_.type];let z;if(A){const N=Nt[A];z=mc.clone(N.uniforms)}else z=_.uniforms;return z}function w(_,A){let z;for(let N=0,J=c.length;N<J;N++){const K=c[N];if(K.cacheKey===A){z=K,++z.usedTimes;break}}return z===void 0&&(z=new wf(s,A,_,r),c.push(z)),z}function b(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),_.destroy()}}function C(_){l.remove(_)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:P}}function Lf(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Df(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ga(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Va(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,g,p,h){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:h},s[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=m,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=p,v.group=h),e++,v}function a(u,f,m,g,p,h){const v=o(u,f,m,g,p,h);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(u,f,m,g,p,h){const v=o(u,f,m,g,p,h);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(u,f){t.length>1&&t.sort(u||Df),n.length>1&&n.sort(f||Ga),i.length>1&&i.sort(f||Ga)}function d(){for(let u=e,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function Rf(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Va,s.set(n,[r])):i>=s.get(n).length?(r=new Va,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Pf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function If(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ff=0;function Nf(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Of(s,e){const t=new Pf,n=If(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)i.probe.push(new D);const r=new D,o=new qe,a=new qe;function l(d,u){let f=0,m=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,h=0,v=0,S=0,T=0,w=0,b=0,C=0;d.sort(Nf);const P=u!==!0?Math.PI:1;for(let A=0,z=d.length;A<z;A++){const N=d[A],J=N.color,K=N.intensity,R=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=J.r*K*P,m+=J.g*K*P,g+=J.b*K*P;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],K);else if(N.isDirectionalLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*P),N.castShadow){const Z=N.shadow,Y=n.get(N);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=N.shadow.matrix,w++}i.directional[p]=k,p++}else if(N.isSpotLight){const k=t.get(N);if(k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(J).multiplyScalar(K*P),k.distance=R,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,N.castShadow){const Z=N.shadow,Y=n.get(N);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=q,i.spotShadowMatrix[v]=N.shadow.matrix,C++}i.spot[v]=k,v++}else if(N.isRectAreaLight){const k=t.get(N);k.color.copy(J).multiplyScalar(K),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=k,S++}else if(N.isPointLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*P),k.distance=N.distance,k.decay=N.decay,N.castShadow){const Z=N.shadow,Y=n.get(N);Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,i.pointShadow[h]=Y,i.pointShadowMap[h]=q,i.pointShadowMatrix[h]=N.shadow.matrix,b++}i.point[h]=k,h++}else if(N.isHemisphereLight){const k=t.get(N);k.skyColor.copy(N.color).multiplyScalar(K*P),k.groundColor.copy(N.groundColor).multiplyScalar(K*P),i.hemi[T]=k,T++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const _=i.hash;(_.directionalLength!==p||_.pointLength!==h||_.spotLength!==v||_.rectAreaLength!==S||_.hemiLength!==T||_.numDirectionalShadows!==w||_.numPointShadows!==b||_.numSpotShadows!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=h,i.hemi.length=T,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=C,_.directionalLength=p,_.pointLength=h,_.spotLength=v,_.rectAreaLength=S,_.hemiLength=T,_.numDirectionalShadows=w,_.numPointShadows=b,_.numSpotShadows=C,i.version=Ff++)}function c(d,u){let f=0,m=0,g=0,p=0,h=0;const v=u.matrixWorldInverse;for(let S=0,T=d.length;S<T;S++){const w=d[S];if(w.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),f++}else if(w.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),g++}else if(w.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){const b=i.hemi[h];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(v),h++}}}return{setup:l,setupView:c,state:i}}function Ha(s,e){const t=new Of(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zf(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Ha(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Ha(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Uf extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gf=`uniform sampler2D shadow_pass;
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
}`;function Vf(s,e,t){let n=new bs;const i=new Me,r=new Me,o=new $e,a=new Uf({depthPacking:Jl}),l=new Bf,c={},d=t.maxTextureSize,u={0:Dt,1:Mi,2:ln},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:kf,fragmentShader:Gf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new pt(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho,this.render=function(w,b,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const P=s.getRenderTarget(),_=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),z=s.state;z.setBlending(an),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let N=0,J=w.length;N<J;N++){const K=w[N],R=K.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const q=R.getFrameExtents();if(i.multiply(q),r.copy(R.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,R.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,R.mapSize.y=r.y)),R.map===null){const Z=this.type!==_i?{minFilter:ot,magFilter:ot}:{};R.map=new Tn(i.x,i.y,Z),R.map.texture.name=K.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const k=R.getViewportCount();for(let Z=0;Z<k;Z++){const Y=R.getViewport(Z);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),z.viewport(o),R.updateMatrices(K,Z),n=R.getFrustum(),T(b,C,R.camera,K,this.type)}R.isPointLightShadow!==!0&&this.type===_i&&v(R,C),R.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(P,_,A)};function v(w,b){const C=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Tn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,C,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,C,m,p,null)}function S(w,b,C,P,_,A){let z=null;const N=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0?z=N:z=C.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const J=z.uuid,K=b.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let q=R[K];q===void 0&&(q=z.clone(),R[K]=q),z=q}return z.visible=b.visible,z.wireframe=b.wireframe,A===_i?z.side=b.shadowSide!==null?b.shadowSide:b.side:z.side=b.shadowSide!==null?b.shadowSide:u[b.side],z.alphaMap=b.alphaMap,z.alphaTest=b.alphaTest,z.clipShadows=b.clipShadows,z.clippingPlanes=b.clippingPlanes,z.clipIntersection=b.clipIntersection,z.displacementMap=b.displacementMap,z.displacementScale=b.displacementScale,z.displacementBias=b.displacementBias,z.wireframeLinewidth=b.wireframeLinewidth,z.linewidth=b.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(C.matrixWorld),z.nearDistance=P,z.farDistance=_),z}function T(w,b,C,P,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===_i)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=e.update(w),J=w.material;if(Array.isArray(J)){const K=N.groups;for(let R=0,q=K.length;R<q;R++){const k=K[R],Z=J[k.materialIndex];if(Z&&Z.visible){const Y=S(w,Z,P,C.near,C.far,_);s.renderBufferDirect(C,null,N,Y,w,k)}}}else if(J.visible){const K=S(w,J,P,C.near,C.far,_);s.renderBufferDirect(C,null,N,K,w,null)}}const z=w.children;for(let N=0,J=z.length;N<J;N++)T(z[N],b,C,P,_)}}function Hf(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const se=new $e;let G=null;const de=new $e(0,0,0,0);return{setMask:function(ue){G!==ue&&!L&&(s.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Le,Ke,Ve,$t){$t===!0&&(ue*=Ve,Le*=Ve,Ke*=Ve),se.set(ue,Le,Ke,Ve),de.equals(se)===!1&&(s.clearColor(ue,Le,Ke,Ve),de.copy(se))},reset:function(){L=!1,G=null,de.set(-1,0,0,0)}}}function r(){let L=!1,se=null,G=null,de=null;return{setTest:function(ue){ue?Re(2929):me(2929)},setMask:function(ue){se!==ue&&!L&&(s.depthMask(ue),se=ue)},setFunc:function(ue){if(G!==ue){if(ue)switch(ue){case yl:s.depthFunc(512);break;case Ml:s.depthFunc(519);break;case Sl:s.depthFunc(513);break;case rs:s.depthFunc(515);break;case wl:s.depthFunc(514);break;case El:s.depthFunc(518);break;case Tl:s.depthFunc(516);break;case Al:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);G=ue}},setLocked:function(ue){L=ue},setClear:function(ue){de!==ue&&(s.clearDepth(ue),de=ue)},reset:function(){L=!1,se=null,G=null,de=null}}}function o(){let L=!1,se=null,G=null,de=null,ue=null,Le=null,Ke=null,Ve=null,$t=null;return{setTest:function(Be){L||(Be?Re(2960):me(2960))},setMask:function(Be){se!==Be&&!L&&(s.stencilMask(Be),se=Be)},setFunc:function(Be,Gt,gt){(G!==Be||de!==Gt||ue!==gt)&&(s.stencilFunc(Be,Gt,gt),G=Be,de=Gt,ue=gt)},setOp:function(Be,Gt,gt){(Le!==Be||Ke!==Gt||Ve!==gt)&&(s.stencilOp(Be,Gt,gt),Le=Be,Ke=Gt,Ve=gt)},setLocked:function(Be){L=Be},setClear:function(Be){$t!==Be&&(s.clearStencil(Be),$t=Be)},reset:function(){L=!1,se=null,G=null,de=null,ue=null,Le=null,Ke=null,Ve=null,$t=null}}}const a=new i,l=new r,c=new o,d=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],h=null,v=!1,S=null,T=null,w=null,b=null,C=null,P=null,_=null,A=!1,z=null,N=null,J=null,K=null,R=null;const q=s.getParameter(35661);let k=!1,Z=0;const Y=s.getParameter(7938);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Z>=2);let U=null,H={};const ne=s.getParameter(3088),ee=s.getParameter(2978),Q=new $e().fromArray(ne),fe=new $e().fromArray(ee);function ve(L,se,G){const de=new Uint8Array(4),ue=s.createTexture();s.bindTexture(L,ue),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Le=0;Le<G;Le++)s.texImage2D(se+Le,0,6408,1,1,0,6408,5121,de);return ue}const W={};W[3553]=ve(3553,3553,1),W[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(2929),l.setFunc(rs),je(!1),ct(Ps),Re(2884),He(an);function Re(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function me(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function xe(L,se){return m[L]!==se?(s.bindFramebuffer(L,se),m[L]=se,n&&(L===36009&&(m[36160]=se),L===36160&&(m[36009]=se)),!0):!1}function he(L,se){let G=p,de=!1;if(L)if(G=g.get(se),G===void 0&&(G=[],g.set(se,G)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(G.length!==ue.length||G[0]!==36064){for(let Le=0,Ke=ue.length;Le<Ke;Le++)G[Le]=36064+Le;G.length=ue.length,de=!0}}else G[0]!==36064&&(G[0]=36064,de=!0);else G[0]!==1029&&(G[0]=1029,de=!0);de&&(t.isWebGL2?s.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ie(L){return h!==L?(s.useProgram(L),h=L,!0):!1}const Se={[$n]:32774,[ul]:32778,[dl]:32779};if(n)Se[Os]=32775,Se[zs]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Se[Os]=L.MIN_EXT,Se[zs]=L.MAX_EXT)}const pe={[hl]:0,[fl]:1,[pl]:768,[fo]:770,[bl]:776,[vl]:774,[gl]:772,[ml]:769,[po]:771,[xl]:775,[_l]:773};function He(L,se,G,de,ue,Le,Ke,Ve){if(L===an){v===!0&&(me(3042),v=!1);return}if(v===!1&&(Re(3042),v=!0),L!==cl){if(L!==S||Ve!==A){if((T!==$n||C!==$n)&&(s.blendEquation(32774),T=$n,C=$n),Ve)switch(L){case ti:s.blendFuncSeparate(1,771,1,771);break;case Is:s.blendFunc(1,1);break;case Fs:s.blendFuncSeparate(0,769,0,1);break;case Ns:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ti:s.blendFuncSeparate(770,771,1,771);break;case Is:s.blendFunc(770,1);break;case Fs:s.blendFuncSeparate(0,769,0,1);break;case Ns:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,P=null,_=null,S=L,A=Ve}return}ue=ue||se,Le=Le||G,Ke=Ke||de,(se!==T||ue!==C)&&(s.blendEquationSeparate(Se[se],Se[ue]),T=se,C=ue),(G!==w||de!==b||Le!==P||Ke!==_)&&(s.blendFuncSeparate(pe[G],pe[de],pe[Le],pe[Ke]),w=G,b=de,P=Le,_=Ke),S=L,A=null}function et(L,se){L.side===ln?me(2884):Re(2884);let G=L.side===Dt;se&&(G=!G),je(G),L.blending===ti&&L.transparent===!1?He(an):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(32926):me(32926)}function je(L){z!==L&&(L?s.frontFace(2304):s.frontFace(2305),z=L)}function ct(L){L!==sl?(Re(2884),L!==N&&(L===Ps?s.cullFace(1029):L===al?s.cullFace(1028):s.cullFace(1032))):me(2884),N=L}function Ye(L){L!==J&&(k&&s.lineWidth(L),J=L)}function Fe(L,se,G){L?(Re(32823),(K!==se||R!==G)&&(s.polygonOffset(se,G),K=se,R=G)):me(32823)}function mt(L){L?Re(3089):me(3089)}function ut(L){L===void 0&&(L=33984+q-1),U!==L&&(s.activeTexture(L),U=L)}function E(L,se){U===null&&ut();let G=H[U];G===void 0&&(G={type:void 0,texture:void 0},H[U]=G),(G.type!==L||G.texture!==se)&&(s.bindTexture(L,se||W[L]),G.type=L,G.texture=se)}function x(){const L=H[U];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function y(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){Q.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function oe(L){fe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function _e(L,se){let G=u.get(se);G===void 0&&(G=new WeakMap,u.set(se,G));let de=G.get(L);de===void 0&&(de=s.getUniformBlockIndex(se,L.name),G.set(L,de))}function Ae(L,se){const de=u.get(se).get(L);d.get(L)!==de&&(s.uniformBlockBinding(se,de,L.__bindingPointIndex),d.set(L,de))}function Ue(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},U=null,H={},m={},g=new WeakMap,p=[],h=null,v=!1,S=null,T=null,w=null,b=null,C=null,P=null,_=null,A=!1,z=null,N=null,J=null,K=null,R=null,Q.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:me,bindFramebuffer:xe,drawBuffers:he,useProgram:Ie,setBlending:He,setMaterial:et,setFlipSided:je,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:Fe,setScissorTest:mt,activeTexture:ut,bindTexture:E,unbindTexture:x,compressedTexImage2D:V,texImage2D:$,texImage3D:re,updateUBOMapping:_e,uniformBlockBinding:Ae,texStorage2D:ge,texStorage3D:y,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:le,scissor:ce,viewport:oe,reset:Ue}}function Wf(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,d=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,x){return v?new OffscreenCanvas(E,x):wi("canvas")}function T(E,x,V,te){let ie=1;if((E.width>te||E.height>te)&&(ie=te/Math.max(E.width,E.height)),ie<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=x?us:Math.floor,ge=le(ie*E.width),y=le(ie*E.height);p===void 0&&(p=S(ge,y));const $=V?S(ge,y):p;return $.width=ge,$.height=y,$.getContext("2d").drawImage(E,0,0,ge,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ge+"x"+y+")."),$}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return ua(E.width)&&ua(E.height)}function b(E){return a?!1:E.wrapS!==Lt||E.wrapT!==Lt||E.minFilter!==ot&&E.minFilter!==xt}function C(E,x){return E.generateMipmaps&&x&&E.minFilter!==ot&&E.minFilter!==xt}function P(E){s.generateMipmap(E)}function _(E,x,V,te,ie=!1){if(a===!1)return x;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=x;return x===6403&&(V===5126&&(le=33326),V===5131&&(le=33325),V===5121&&(le=33321)),x===33319&&(V===5126&&(le=33328),V===5131&&(le=33327),V===5121&&(le=33323)),x===6408&&(V===5126&&(le=34836),V===5131&&(le=34842),V===5121&&(le=te===Ge&&ie===!1?35907:32856),V===32819&&(le=32854),V===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(E,x,V){return C(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==ot&&E.minFilter!==xt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function z(E){return E===ot||E===Us||E===Bs?9728:9729}function N(E){const x=E.target;x.removeEventListener("dispose",N),K(x),x.isVideoTexture&&g.delete(x)}function J(E){const x=E.target;x.removeEventListener("dispose",J),q(x)}function K(E){const x=n.get(E);if(x.__webglInit===void 0)return;const V=E.source,te=h.get(V);if(te){const ie=te[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(E),Object.keys(te).length===0&&h.delete(V)}n.remove(E)}function R(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const V=E.source,te=h.get(V);delete te[x.__cacheKey],o.memory.textures--}function q(E){const x=E.texture,V=n.get(E),te=n.get(x);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)s.deleteFramebuffer(V.__webglFramebuffer[ie]),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ie]);else{if(s.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ie=0;ie<V.__webglColorRenderbuffer.length;ie++)V.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ie]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,le=x.length;ie<le;ie++){const ge=n.get(x[ie]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(x[ie])}n.remove(x),n.remove(E)}let k=0;function Z(){k=0}function Y(){const E=k;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),k+=1,E}function U(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.encoding),x.join()}function H(E,x){const V=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,E,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,V.__webglTexture)}function ne(E,x){const V=n.get(E);if(E.version>0&&V.__version!==E.version){me(V,E,x);return}t.activeTexture(33984+x),t.bindTexture(35866,V.__webglTexture)}function ee(E,x){const V=n.get(E);if(E.version>0&&V.__version!==E.version){me(V,E,x);return}t.activeTexture(33984+x),t.bindTexture(32879,V.__webglTexture)}function Q(E,x){const V=n.get(E);if(E.version>0&&V.__version!==E.version){xe(V,E,x);return}t.activeTexture(33984+x),t.bindTexture(34067,V.__webglTexture)}const fe={[os]:10497,[Lt]:33071,[ls]:33648},ve={[ot]:9728,[Us]:9984,[Bs]:9986,[xt]:9729,[Nl]:9985,[dr]:9987};function W(E,x,V){if(V?(s.texParameteri(E,10242,fe[x.wrapS]),s.texParameteri(E,10243,fe[x.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,fe[x.wrapR]),s.texParameteri(E,10240,ve[x.magFilter]),s.texParameteri(E,10241,ve[x.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(x.wrapS!==Lt||x.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,z(x.magFilter)),s.texParameteri(E,10241,z(x.minFilter)),x.minFilter!==ot&&x.minFilter!==xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.type===bn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Si&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Re(E,x){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N));const te=x.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const le=U(x);if(le!==E.__cacheKey){ie[le]===void 0&&(ie[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[le].usedTimes++;const ge=ie[E.__cacheKey];ge!==void 0&&(ie[E.__cacheKey].usedTimes--,ge.usedTimes===0&&R(x)),E.__cacheKey=le,E.__webglTexture=ie[le].texture}return V}function me(E,x,V){let te=3553;x.isDataArrayTexture&&(te=35866),x.isData3DTexture&&(te=32879);const ie=Re(E,x),le=x.source;if(t.activeTexture(33984+V),t.bindTexture(te,E.__webglTexture),le.version!==le.__currentVersion||ie===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const ge=b(x)&&w(x.image)===!1;let y=T(x.image,ge,!1,d);y=ut(x,y);const $=w(y)||a,re=r.convert(x.format,x.encoding);let ce=r.convert(x.type),oe=_(x.internalFormat,re,ce,x.encoding,x.isVideoTexture);W(te,x,$);let _e;const Ae=x.mipmaps,Ue=a&&x.isVideoTexture!==!0,L=le.__currentVersion===void 0||ie===!0,se=A(x,y,$);if(x.isDepthTexture)oe=6402,a?x.type===bn?oe=36012:x.type===xn?oe=33190:x.type===ni?oe=35056:oe=33189:x.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Mn&&oe===6402&&x.type!==_o&&x.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xn,ce=r.convert(x.type)),x.format===si&&oe===6402&&(oe=34041,x.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ni,ce=r.convert(x.type))),L&&(Ue?t.texStorage2D(3553,1,oe,y.width,y.height):t.texImage2D(3553,0,oe,y.width,y.height,0,re,ce,null));else if(x.isDataTexture)if(Ae.length>0&&$){Ue&&L&&t.texStorage2D(3553,se,oe,Ae[0].width,Ae[0].height);for(let G=0,de=Ae.length;G<de;G++)_e=Ae[G],Ue?t.texSubImage2D(3553,G,0,0,_e.width,_e.height,re,ce,_e.data):t.texImage2D(3553,G,oe,_e.width,_e.height,0,re,ce,_e.data);x.generateMipmaps=!1}else Ue?(L&&t.texStorage2D(3553,se,oe,y.width,y.height),t.texSubImage2D(3553,0,0,0,y.width,y.height,re,ce,y.data)):t.texImage2D(3553,0,oe,y.width,y.height,0,re,ce,y.data);else if(x.isCompressedTexture){Ue&&L&&t.texStorage2D(3553,se,oe,Ae[0].width,Ae[0].height);for(let G=0,de=Ae.length;G<de;G++)_e=Ae[G],x.format!==zt?re!==null?Ue?t.compressedTexSubImage2D(3553,G,0,0,_e.width,_e.height,re,_e.data):t.compressedTexImage2D(3553,G,oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,G,0,0,_e.width,_e.height,re,ce,_e.data):t.texImage2D(3553,G,oe,_e.width,_e.height,0,re,ce,_e.data)}else if(x.isDataArrayTexture)Ue?(L&&t.texStorage3D(35866,se,oe,y.width,y.height,y.depth),t.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,re,ce,y.data)):t.texImage3D(35866,0,oe,y.width,y.height,y.depth,0,re,ce,y.data);else if(x.isData3DTexture)Ue?(L&&t.texStorage3D(32879,se,oe,y.width,y.height,y.depth),t.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,re,ce,y.data)):t.texImage3D(32879,0,oe,y.width,y.height,y.depth,0,re,ce,y.data);else if(x.isFramebufferTexture){if(L)if(Ue)t.texStorage2D(3553,se,oe,y.width,y.height);else{let G=y.width,de=y.height;for(let ue=0;ue<se;ue++)t.texImage2D(3553,ue,oe,G,de,0,re,ce,null),G>>=1,de>>=1}}else if(Ae.length>0&&$){Ue&&L&&t.texStorage2D(3553,se,oe,Ae[0].width,Ae[0].height);for(let G=0,de=Ae.length;G<de;G++)_e=Ae[G],Ue?t.texSubImage2D(3553,G,0,0,re,ce,_e):t.texImage2D(3553,G,oe,re,ce,_e);x.generateMipmaps=!1}else Ue?(L&&t.texStorage2D(3553,se,oe,y.width,y.height),t.texSubImage2D(3553,0,0,0,re,ce,y)):t.texImage2D(3553,0,oe,re,ce,y);C(x,$)&&P(te),le.__currentVersion=le.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xe(E,x,V){if(x.image.length!==6)return;const te=Re(E,x),ie=x.source;if(t.activeTexture(33984+V),t.bindTexture(34067,E.__webglTexture),ie.version!==ie.__currentVersion||te===!0){s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,y=[];for(let G=0;G<6;G++)!le&&!ge?y[G]=T(x.image[G],!1,!0,c):y[G]=ge?x.image[G].image:x.image[G],y[G]=ut(x,y[G]);const $=y[0],re=w($)||a,ce=r.convert(x.format,x.encoding),oe=r.convert(x.type),_e=_(x.internalFormat,ce,oe,x.encoding),Ae=a&&x.isVideoTexture!==!0,Ue=ie.__currentVersion===void 0||te===!0;let L=A(x,$,re);W(34067,x,re);let se;if(le){Ae&&Ue&&t.texStorage2D(34067,L,_e,$.width,$.height);for(let G=0;G<6;G++){se=y[G].mipmaps;for(let de=0;de<se.length;de++){const ue=se[de];x.format!==zt?ce!==null?Ae?t.compressedTexSubImage2D(34069+G,de,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(34069+G,de,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+G,de,0,0,ue.width,ue.height,ce,oe,ue.data):t.texImage2D(34069+G,de,_e,ue.width,ue.height,0,ce,oe,ue.data)}}}else{se=x.mipmaps,Ae&&Ue&&(se.length>0&&L++,t.texStorage2D(34067,L,_e,y[0].width,y[0].height));for(let G=0;G<6;G++)if(ge){Ae?t.texSubImage2D(34069+G,0,0,0,y[G].width,y[G].height,ce,oe,y[G].data):t.texImage2D(34069+G,0,_e,y[G].width,y[G].height,0,ce,oe,y[G].data);for(let de=0;de<se.length;de++){const Le=se[de].image[G].image;Ae?t.texSubImage2D(34069+G,de+1,0,0,Le.width,Le.height,ce,oe,Le.data):t.texImage2D(34069+G,de+1,_e,Le.width,Le.height,0,ce,oe,Le.data)}}else{Ae?t.texSubImage2D(34069+G,0,0,0,ce,oe,y[G]):t.texImage2D(34069+G,0,_e,ce,oe,y[G]);for(let de=0;de<se.length;de++){const ue=se[de];Ae?t.texSubImage2D(34069+G,de+1,0,0,ce,oe,ue.image[G]):t.texImage2D(34069+G,de+1,_e,ce,oe,ue.image[G])}}}C(x,re)&&P(34067),ie.__currentVersion=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function he(E,x,V,te,ie){const le=r.convert(V.format,V.encoding),ge=r.convert(V.type),y=_(V.internalFormat,le,ge,V.encoding);n.get(x).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,y,x.width,x.height,x.depth,0,le,ge,null):t.texImage2D(ie,0,y,x.width,x.height,0,le,ge,null)),t.bindFramebuffer(36160,E),Fe(x)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(V).__webglTexture,0,Ye(x)):s.framebufferTexture2D(36160,te,ie,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(E,x,V){if(s.bindRenderbuffer(36161,E),x.depthBuffer&&!x.stencilBuffer){let te=33189;if(V||Fe(x)){const ie=x.depthTexture;ie&&ie.isDepthTexture&&(ie.type===bn?te=36012:ie.type===xn&&(te=33190));const le=Ye(x);Fe(x)?f.renderbufferStorageMultisampleEXT(36161,le,te,x.width,x.height):s.renderbufferStorageMultisample(36161,le,te,x.width,x.height)}else s.renderbufferStorage(36161,te,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(x.depthBuffer&&x.stencilBuffer){const te=Ye(x);V&&Fe(x)===!1?s.renderbufferStorageMultisample(36161,te,35056,x.width,x.height):Fe(x)?f.renderbufferStorageMultisampleEXT(36161,te,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ie=0;ie<te.length;ie++){const le=te[ie],ge=r.convert(le.format,le.encoding),y=r.convert(le.type),$=_(le.internalFormat,ge,y,le.encoding),re=Ye(x);V&&Fe(x)===!1?s.renderbufferStorageMultisample(36161,re,$,x.width,x.height):Fe(x)?f.renderbufferStorageMultisampleEXT(36161,re,$,x.width,x.height):s.renderbufferStorage(36161,$,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function Se(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,ie=Ye(x);if(x.depthTexture.format===Mn)Fe(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):s.framebufferTexture2D(36160,36096,3553,te,0);else if(x.depthTexture.format===si)Fe(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function pe(E){const x=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,E)}else if(V){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=s.createRenderbuffer(),Ie(x.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Ie(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function He(E,x,V){const te=n.get(E);x!==void 0&&he(te.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&pe(E)}function et(E){const x=E.texture,V=n.get(E),te=n.get(x);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=x.version,o.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,ge=w(E)||a;if(ie){V.__webglFramebuffer=[];for(let y=0;y<6;y++)V.__webglFramebuffer[y]=s.createFramebuffer()}else{if(V.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const y=E.texture;for(let $=0,re=y.length;$<re;$++){const ce=n.get(y[$]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Fe(E)===!1){const y=le?x:[x];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let $=0;$<y.length;$++){const re=y[$];V.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(36161,V.__webglColorRenderbuffer[$]);const ce=r.convert(re.format,re.encoding),oe=r.convert(re.type),_e=_(re.internalFormat,ce,oe,re.encoding),Ae=Ye(E);s.renderbufferStorageMultisample(36161,Ae,_e,E.width,E.height),s.framebufferRenderbuffer(36160,36064+$,36161,V.__webglColorRenderbuffer[$])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),W(34067,x,ge);for(let y=0;y<6;y++)he(V.__webglFramebuffer[y],E,x,36064,34069+y);C(x,ge)&&P(34067),t.unbindTexture()}else if(le){const y=E.texture;for(let $=0,re=y.length;$<re;$++){const ce=y[$],oe=n.get(ce);t.bindTexture(3553,oe.__webglTexture),W(3553,ce,ge),he(V.__webglFramebuffer,E,ce,36064+$,3553),C(ce,ge)&&P(3553)}t.unbindTexture()}else{let y=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?y=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(y,te.__webglTexture),W(y,x,ge),he(V.__webglFramebuffer,E,x,36064,y),C(x,ge)&&P(y),t.unbindTexture()}E.depthBuffer&&pe(E)}function je(E){const x=w(E)||a,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ie=V.length;te<ie;te++){const le=V[te];if(C(le,x)){const ge=E.isWebGLCubeRenderTarget?34067:3553,y=n.get(le).__webglTexture;t.bindTexture(ge,y),P(ge),t.unbindTexture()}}}function ct(E){if(a&&E.samples>0&&Fe(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,te=E.height;let ie=16384;const le=[],ge=E.stencilBuffer?33306:36096,y=n.get(E),$=E.isWebGLMultipleRenderTargets===!0;if($)for(let re=0;re<x.length;re++)t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,y.__webglFramebuffer);for(let re=0;re<x.length;re++){le.push(36064+re),E.depthBuffer&&le.push(ge);const ce=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(ce===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),$&&s.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[re]),ce===!0&&(s.invalidateFramebuffer(36008,[ge]),s.invalidateFramebuffer(36009,[ge])),$){const oe=n.get(x[re]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,oe,0)}s.blitFramebuffer(0,0,V,te,0,0,V,te,ie,9728),m&&s.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let re=0;re<x.length;re++){t.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+re,36161,y.__webglColorRenderbuffer[re]);const ce=n.get(x[re]).__webglTexture;t.bindFramebuffer(36160,y.__webglFramebuffer),s.framebufferTexture2D(36009,36064+re,3553,ce,0)}t.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function Ye(E){return Math.min(u,E.samples)}function Fe(E){const x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(E){const x=o.render.frame;g.get(E)!==x&&(g.set(E,x),E.update())}function ut(E,x){const V=E.encoding,te=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===cs||V!==En&&(V===Ge?a===!1?e.has("EXT_sRGB")===!0&&te===zt?(E.format=cs,E.minFilter=xt,E.generateMipmaps=!1):x=yo.sRGBToLinear(x):(te!==zt||ie!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=Y,this.resetTextureUnits=Z,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=Q,this.rebindTextures=He,this.setupRenderTarget=et,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Fe}function Xf(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===wn)return 5121;if(r===Bl)return 32819;if(r===kl)return 32820;if(r===Ol)return 5120;if(r===zl)return 5122;if(r===_o)return 5123;if(r===Ul)return 5124;if(r===xn)return 5125;if(r===bn)return 5126;if(r===Si)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Gl)return 6406;if(r===zt)return 6408;if(r===Hl)return 6409;if(r===Wl)return 6410;if(r===Mn)return 6402;if(r===si)return 34041;if(r===Xl)return 6403;if(r===Vl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===cs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ql)return 36244;if(r===jl)return 33319;if(r===Yl)return 33320;if(r===Zl)return 36249;if(r===Sr||r===wr||r===Er||r===Tr)if(o===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ks||r===Gs||r===Vs||r===Hs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ks)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$l)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ws||r===Xs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ws)return o===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qs||r===js||r===Ys||r===Zs||r===$s||r===Ks||r===Js||r===Qs||r===ea||r===ta||r===na||r===ia||r===ra||r===sa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===js)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ys)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$s)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ks)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Js)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qs)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ea)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ta)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===na)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ia)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ra)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sa)return o===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===aa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===aa)return o===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class qf extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const S=new Qi;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[p.jointName]=S,c.add(S)}const v=c.joints[p.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Yf extends St{constructor(e,t,n,i,r,o,a,l,c,d){if(d=d!==void 0?d:Mn,d!==Mn&&d!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Mn&&(n=xn),n===void 0&&d===si&&(n=ni),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ot,this.minFilter=l!==void 0?l:ot,this.flipY=!1,this.generateMipmaps=!1}}class Zf extends Ln{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,d=null,u=null,f=null,m=null;const g=t.getContextAttributes();let p=null,h=null;const v=[],S=[],T=new bt;T.layers.enable(1),T.viewport=new $e;const w=new bt;w.layers.enable(2),w.viewport=new $e;const b=[T,w],C=new qf;C.layers.enable(1),C.layers.enable(2);let P=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=v[U];return H===void 0&&(H=new ts,v[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=v[U];return H===void 0&&(H=new ts,v[U]=H),H.getGripSpace()},this.getHand=function(U){let H=v[U];return H===void 0&&(H=new ts,v[U]=H),H.getHandSpace()};function A(U){const H=S.indexOf(U.inputSource);if(H===-1)return;const ne=v[H];ne!==void 0&&ne.dispatchEvent({type:U.type,data:U.inputSource})}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",N);for(let U=0;U<v.length;U++){const H=S[U];H!==null&&(S[U]=null,v[U].disconnect(H))}P=null,_=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,h=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),h=new Tn(f.framebufferWidth,f.framebufferHeight,{format:zt,type:wn,encoding:e.outputEncoding})}else{let H=null,ne=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,H=g.stencil?si:Mn,ne=g.stencil?ni:xn);const Q={colorFormat:32856,depthFormat:ee,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Q),i.updateRenderState({layers:[u]}),h=new Tn(u.textureWidth,u.textureHeight,{format:zt,type:wn,depthTexture:new Yf(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const fe=e.properties.get(h);fe.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(U){for(let H=0;H<U.removed.length;H++){const ne=U.removed[H],ee=S.indexOf(ne);ee>=0&&(S[ee]=null,v[ee].dispatchEvent({type:"disconnected",data:ne}))}for(let H=0;H<U.added.length;H++){const ne=U.added[H];let ee=S.indexOf(ne);if(ee===-1){for(let fe=0;fe<v.length;fe++)if(fe>=S.length){S.push(ne),ee=fe;break}else if(S[fe]===null){S[fe]=ne,ee=fe;break}if(ee===-1)break}const Q=v[ee];Q&&Q.dispatchEvent({type:"connected",data:ne})}}const J=new D,K=new D;function R(U,H,ne){J.setFromMatrixPosition(H.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const ee=J.distanceTo(K),Q=H.projectionMatrix.elements,fe=ne.projectionMatrix.elements,ve=Q[14]/(Q[10]-1),W=Q[14]/(Q[10]+1),Re=(Q[9]+1)/Q[5],me=(Q[9]-1)/Q[5],xe=(Q[8]-1)/Q[0],he=(fe[8]+1)/fe[0],Ie=ve*xe,Se=ve*he,pe=ee/(-xe+he),He=pe*-xe;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(He),U.translateZ(pe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const et=ve+pe,je=W+pe,ct=Ie-He,Ye=Se+(ee-He),Fe=Re*W/je*et,mt=me*W/je*et;U.projectionMatrix.makePerspective(ct,Ye,Fe,mt,et,je)}function q(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;C.near=w.near=T.near=U.near,C.far=w.far=T.far=U.far,(P!==C.near||_!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,_=C.far);const H=U.parent,ne=C.cameras;q(C,H);for(let Q=0;Q<ne.length;Q++)q(ne[Q],H);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),U.position.copy(C.position),U.quaternion.copy(C.quaternion),U.scale.copy(C.scale),U.matrix.copy(C.matrix),U.matrixWorld.copy(C.matrixWorld);const ee=U.children;for(let Q=0,fe=ee.length;Q<fe;Q++)ee[Q].updateMatrixWorld(!0);ne.length===2?R(C,T,w):C.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let k=null;function Z(U,H){if(c=H.getViewerPose(l||o),m=H,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let ee=!1;ne.length!==C.cameras.length&&(C.cameras.length=0,ee=!0);for(let Q=0;Q<ne.length;Q++){const fe=ne[Q];let ve=null;if(f!==null)ve=f.getViewport(fe);else{const Re=d.getViewSubImage(u,fe);ve=Re.viewport,Q===0&&(e.setRenderTargetTextures(h,Re.colorTexture,u.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(h))}let W=b[Q];W===void 0&&(W=new bt,W.layers.enable(Q),W.viewport=new $e,b[Q]=W),W.matrix.fromArray(fe.transform.matrix),W.projectionMatrix.fromArray(fe.projectionMatrix),W.viewport.set(ve.x,ve.y,ve.width,ve.height),Q===0&&C.matrix.copy(W.matrix),ee===!0&&C.cameras.push(W)}}for(let ne=0;ne<v.length;ne++){const ee=S[ne],Q=v[ne];ee!==null&&Q!==void 0&&Q.update(ee,H,l||o)}k&&k(U,H),m=null}const Y=new Ro;Y.setAnimationLoop(Z),this.setAnimationLoop=function(U){k=U},this.dispose=function(){}}}function $f(s,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,v,S,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),d(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),u(p,h),h.isMeshPhysicalMaterial&&f(p,h,T)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),g(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,v,S):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Dt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Dt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let S;h.map?S=h.map:h.specularMap?S=h.specularMap:h.displacementMap?S=h.displacementMap:h.normalMap?S=h.normalMap:h.bumpMap?S=h.bumpMap:h.roughnessMap?S=h.roughnessMap:h.metalnessMap?S=h.metalnessMap:h.alphaMap?S=h.alphaMap:h.emissiveMap?S=h.emissiveMap:h.clearcoatMap?S=h.clearcoatMap:h.clearcoatNormalMap?S=h.clearcoatNormalMap:h.clearcoatRoughnessMap?S=h.clearcoatRoughnessMap:h.iridescenceMap?S=h.iridescenceMap:h.iridescenceThicknessMap?S=h.iridescenceThicknessMap:h.specularIntensityMap?S=h.specularIntensityMap:h.specularColorMap?S=h.specularColorMap:h.transmissionMap?S=h.transmissionMap:h.thicknessMap?S=h.thicknessMap:h.sheenColorMap?S=h.sheenColorMap:h.sheenRoughnessMap&&(S=h.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let T;h.aoMap?T=h.aoMap:h.lightMap&&(T=h.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,v,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=S*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let T;h.map?T=h.map:h.alphaMap&&(T=h.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Dt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Kf(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(S,T){const w=T.program;n.uniformBlockBinding(S,w)}function c(S,T){let w=i[S.id];w===void 0&&(g(S),w=d(S),i[S.id]=w,S.addEventListener("dispose",h));const b=T.program;n.updateUBOMapping(S,b);const C=e.render.frame;r[S.id]!==C&&(f(S),r[S.id]=C)}function d(S){const T=u();S.__bindingPointIndex=T;const w=s.createBuffer(),b=S.__size,C=S.usage;return s.bindBuffer(35345,w),s.bufferData(35345,b,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,T,w),w}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=i[S.id],w=S.uniforms,b=S.__cache;s.bindBuffer(35345,T);for(let C=0,P=w.length;C<P;C++){const _=w[C];if(m(_,C,b)===!0){const A=_.value,z=_.__offset;typeof A=="number"?(_.__data[0]=A,s.bufferSubData(35345,z,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):A.toArray(_.__data),s.bufferSubData(35345,z,_.__data))}}s.bindBuffer(35345,null)}function m(S,T,w){const b=S.value;if(w[T]===void 0)return typeof b=="number"?w[T]=b:w[T]=b.clone(),!0;if(typeof b=="number"){if(w[T]!==b)return w[T]=b,!0}else{const C=w[T];if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(S){const T=S.uniforms;let w=0;const b=16;let C=0;for(let P=0,_=T.length;P<_;P++){const A=T[P],z=p(A);if(A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,P>0){C=w%b;const N=b-C;C!==0&&N-z.boundary<0&&(w+=b-C,A.__offset=w)}w+=z.storage}return C=w%b,C>0&&(w+=b-C),S.__size=w,S.__cache={},this}function p(S){const T=S.value,w={boundary:0,storage:0};return typeof T=="number"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function h(S){const T=S.target;T.removeEventListener("dispose",h);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function v(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:v}}function Jf(){const s=wi("canvas");return s.style.display="block",s}function Uo(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Jf(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=s.alpha!==void 0?s.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=En,this.physicallyCorrectLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,v=0,S=0,T=null,w=-1,b=null;const C=new $e,P=new $e;let _=null,A=e.width,z=e.height,N=1,J=null,K=null;const R=new $e(0,0,A,z),q=new $e(0,0,A,z);let k=!1;const Z=new bs;let Y=!1,U=!1,H=null;const ne=new qe,ee=new Me,Q=new D,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return T===null?N:1}let W=t;function Re(M,I){for(let B=0;B<M.length;B++){const O=M[B],j=e.getContext(O,I);if(j!==null)return j}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xs}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),W===null){const I=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&I.shift(),W=Re(I,M),W===null)throw Re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let me,xe,he,Ie,Se,pe,He,et,je,ct,Ye,Fe,mt,ut,E,x,V,te,ie,le,ge,y,$,re;function ce(){me=new oh(W),xe=new th(W,me,s),me.init(xe),y=new Xf(W,me,xe),he=new Hf(W,me,xe),Ie=new uh,Se=new Lf,pe=new Wf(W,me,he,Se,xe,y,Ie),He=new ih(p),et=new ah(p),je=new Mc(W,xe),$=new Qd(W,me,je,xe),ct=new lh(W,je,Ie,$),Ye=new ph(W,ct,je,Ie),ie=new fh(W,xe,pe),x=new nh(Se),Fe=new Cf(p,He,et,me,xe,$,x),mt=new $f(p,Se),ut=new Rf,E=new zf(me,xe),te=new Jd(p,He,he,Ye,d,o),V=new Vf(p,Ye,xe),re=new Kf(W,Ie,xe,he),le=new eh(W,me,Ie,xe),ge=new ch(W,me,Ie,xe),Ie.programs=Fe.programs,p.capabilities=xe,p.extensions=me,p.properties=Se,p.renderLists=ut,p.shadowMap=V,p.state=he,p.info=Ie}ce();const oe=new Zf(p,W);this.xr=oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const M=me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(A,z,!1))},this.getSize=function(M){return M.set(A,z)},this.setSize=function(M,I,B){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,z=I,e.width=Math.floor(M*N),e.height=Math.floor(I*N),B!==!1&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(A*N,z*N).floor()},this.setDrawingBufferSize=function(M,I,B){A=M,z=I,N=B,e.width=Math.floor(M*B),e.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,I,B,O){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,I,B,O),he.viewport(C.copy(R).multiplyScalar(N).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,I,B,O){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,I,B,O),he.scissor(P.copy(q).multiplyScalar(N).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){he.setScissorTest(k=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(M=!0,I=!0,B=!0){let O=0;M&&(O|=16384),I&&(O|=256),B&&(O|=1024),W.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),ut.dispose(),E.dispose(),Se.dispose(),He.dispose(),et.dispose(),Ye.dispose(),$.dispose(),re.dispose(),Fe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Le),oe.removeEventListener("sessionend",Ke),H&&(H.dispose(),H=null),Ve.stop()};function _e(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const M=Ie.autoReset,I=V.enabled,B=V.autoUpdate,O=V.needsUpdate,j=V.type;ce(),Ie.autoReset=M,V.enabled=I,V.autoUpdate=B,V.needsUpdate=O,V.type=j}function Ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function L(M){const I=M.target;I.removeEventListener("dispose",L),se(I)}function se(M){G(M),Se.remove(M)}function G(M){const I=Se.get(M).programs;I!==void 0&&(I.forEach(function(B){Fe.releaseProgram(B)}),M.isShaderMaterial&&Fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,B,O,j,be){I===null&&(I=fe);const ye=j.isMesh&&j.matrixWorld.determinant()<0,Ee=tl(M,I,B,O,j);he.setMaterial(O,ye);let we=B.index;const Ne=B.attributes.position;if(we===null){if(Ne===void 0||Ne.count===0)return}else if(we.count===0)return;let Ce=1;O.wireframe===!0&&(we=ct.getWireframeAttribute(B),Ce=2),$.setup(j,O,Ee,B,we);let De,ke=le;we!==null&&(De=je.get(we),ke=ge,ke.setIndex(De));const hn=we!==null?we.count:Ne.count,Rn=B.drawRange.start*Ce,Pn=B.drawRange.count*Ce,It=be!==null?be.start*Ce:0,Pe=be!==null?be.count*Ce:1/0,In=Math.max(Rn,It),We=Math.min(hn,Rn+Pn,It+Pe)-1,_t=Math.max(0,We-In+1);if(_t!==0){if(j.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*ve()),ke.setMode(1)):ke.setMode(4);else if(j.isLine){let Kt=O.linewidth;Kt===void 0&&(Kt=1),he.setLineWidth(Kt*ve()),j.isLineSegments?ke.setMode(1):j.isLineLoop?ke.setMode(2):ke.setMode(3)}else j.isPoints?ke.setMode(0):j.isSprite&&ke.setMode(4);if(j.isInstancedMesh)ke.renderInstances(In,_t,j.count);else if(B.isInstancedBufferGeometry){const Kt=Math.min(B.instanceCount,B._maxInstanceCount);ke.renderInstances(In,_t,Kt)}else ke.render(In,_t)}},this.compile=function(M,I){f=E.get(M),f.init(),g.push(f),M.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(B){const O=B.material;if(O)if(Array.isArray(O))for(let j=0;j<O.length;j++){const be=O[j];xr(be,M,B)}else xr(O,M,B)}),g.pop(),f=null};let de=null;function ue(M){de&&de(M)}function Le(){Ve.stop()}function Ke(){Ve.start()}const Ve=new Ro;Ve.setAnimationLoop(ue),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(M){de=M,oe.setAnimationLoop(M),M===null?Ve.stop():Ve.start()},oe.addEventListener("sessionstart",Le),oe.addEventListener("sessionend",Ke),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,I,T),f=E.get(M,g.length),f.init(),g.push(f),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Z.setFromProjectionMatrix(ne),U=this.localClippingEnabled,Y=x.init(this.clippingPlanes,U,I),u=ut.get(M,m.length),u.init(),m.push(u),$t(M,I,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(J,K),Y===!0&&x.beginShadows();const B=f.state.shadowsArray;if(V.render(B,M,I),Y===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(u,M),f.setupLights(p.physicallyCorrectLights),I.isArrayCamera){const O=I.cameras;for(let j=0,be=O.length;j<be;j++){const ye=O[j];Be(u,M,ye,ye.viewport)}}else Be(u,M,I);T!==null&&(pe.updateMultisampleRenderTarget(T),pe.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(p,M,I),$.resetDefaultState(),w=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function $t(M,I,B,O){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){O&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const ye=Ye.update(M),Ee=M.material;Ee.visible&&u.push(M,ye,Ee,B,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ie.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ie.render.frame),!M.frustumCulled||Z.intersectsObject(M))){O&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const ye=Ye.update(M),Ee=M.material;if(Array.isArray(Ee)){const we=ye.groups;for(let Ne=0,Ce=we.length;Ne<Ce;Ne++){const De=we[Ne],ke=Ee[De.materialIndex];ke&&ke.visible&&u.push(M,ye,ke,B,Q.z,De)}}else Ee.visible&&u.push(M,ye,Ee,B,Q.z,null)}}const be=M.children;for(let ye=0,Ee=be.length;ye<Ee;ye++)$t(be[ye],I,B,O)}function Be(M,I,B,O){const j=M.opaque,be=M.transmissive,ye=M.transparent;f.setupLightsView(B),be.length>0&&Gt(j,I,B),O&&he.viewport(C.copy(O)),j.length>0&&gt(j,I,B),be.length>0&&gt(be,I,B),ye.length>0&&gt(ye,I,B),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Gt(M,I,B){const O=xe.isWebGL2;H===null&&(H=new Tn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Si:wn,minFilter:dr,samples:O&&r===!0?4:0})),p.getDrawingBufferSize(ee),O?H.setSize(ee.x,ee.y):H.setSize(us(ee.x),us(ee.y));const j=p.getRenderTarget();p.setRenderTarget(H),p.clear();const be=p.toneMapping;p.toneMapping=Zt,gt(M,I,B),p.toneMapping=be,pe.updateMultisampleRenderTarget(H),pe.updateRenderTargetMipmap(H),p.setRenderTarget(j)}function gt(M,I,B){const O=I.isScene===!0?I.overrideMaterial:null;for(let j=0,be=M.length;j<be;j++){const ye=M[j],Ee=ye.object,we=ye.geometry,Ne=O===null?ye.material:O,Ce=ye.group;Ee.layers.test(B.layers)&&el(Ee,I,B,we,Ne,Ce)}}function el(M,I,B,O,j,be){M.onBeforeRender(p,I,B,O,j,be),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(p,I,B,O,M,be),j.transparent===!0&&j.side===ln?(j.side=Dt,j.needsUpdate=!0,p.renderBufferDirect(B,I,O,j,M,be),j.side=Mi,j.needsUpdate=!0,p.renderBufferDirect(B,I,O,j,M,be),j.side=ln):p.renderBufferDirect(B,I,O,j,M,be),M.onAfterRender(p,I,B,O,j,be)}function xr(M,I,B){I.isScene!==!0&&(I=fe);const O=Se.get(M),j=f.state.lights,be=f.state.shadowsArray,ye=j.state.version,Ee=Fe.getParameters(M,j.state,be,I,B),we=Fe.getProgramCacheKey(Ee);let Ne=O.programs;O.environment=M.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(M.isMeshStandardMaterial?et:He).get(M.envMap||O.environment),Ne===void 0&&(M.addEventListener("dispose",L),Ne=new Map,O.programs=Ne);let Ce=Ne.get(we);if(Ce!==void 0){if(O.currentProgram===Ce&&O.lightsStateVersion===ye)return Ds(M,Ee),Ce}else Ee.uniforms=Fe.getUniforms(M),M.onBuild(B,Ee,p),M.onBeforeCompile(Ee,p),Ce=Fe.acquireProgram(Ee,we),Ne.set(we,Ce),O.uniforms=Ee.uniforms;const De=O.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=x.uniform),Ds(M,Ee),O.needsLights=il(M),O.lightsStateVersion=ye,O.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotShadowMatrix.value=j.state.spotShadowMatrix,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const ke=Ce.getUniforms(),hn=sr.seqWithValue(ke.seq,De);return O.currentProgram=Ce,O.uniformsList=hn,Ce}function Ds(M,I){const B=Se.get(M);B.outputEncoding=I.outputEncoding,B.instancing=I.instancing,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function tl(M,I,B,O,j){I.isScene!==!0&&(I=fe),pe.resetTextureUnits();const be=I.fog,ye=O.isMeshStandardMaterial?I.environment:null,Ee=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:En,we=(O.isMeshStandardMaterial?et:He).get(O.envMap||ye),Ne=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!O.normalMap&&!!B.attributes.tangent,De=!!B.morphAttributes.position,ke=!!B.morphAttributes.normal,hn=!!B.morphAttributes.color,Rn=O.toneMapped?p.toneMapping:Zt,Pn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,It=Pn!==void 0?Pn.length:0,Pe=Se.get(O),In=f.state.lights;if(Y===!0&&(U===!0||M!==b)){const dt=M===b&&O.id===w;x.setState(O,M,dt)}let We=!1;O.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==In.state.version||Pe.outputEncoding!==Ee||j.isInstancedMesh&&Pe.instancing===!1||!j.isInstancedMesh&&Pe.instancing===!0||j.isSkinnedMesh&&Pe.skinning===!1||!j.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==we||O.fog===!0&&Pe.fog!==be||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==x.numPlanes||Pe.numIntersection!==x.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Ce||Pe.morphTargets!==De||Pe.morphNormals!==ke||Pe.morphColors!==hn||Pe.toneMapping!==Rn||xe.isWebGL2===!0&&Pe.morphTargetsCount!==It)&&(We=!0):(We=!0,Pe.__version=O.version);let _t=Pe.currentProgram;We===!0&&(_t=xr(O,I,j));let Kt=!1,ui=!1,br=!1;const it=_t.getUniforms(),di=Pe.uniforms;if(he.useProgram(_t.program)&&(Kt=!0,ui=!0,br=!0),O.id!==w&&(w=O.id,ui=!0),Kt||b!==M){if(it.setValue(W,"projectionMatrix",M.projectionMatrix),xe.logarithmicDepthBuffer&&it.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,ui=!0,br=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const dt=it.map.cameraPosition;dt!==void 0&&dt.setValue(W,Q.setFromMatrixPosition(M.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||j.isSkinnedMesh)&&it.setValue(W,"viewMatrix",M.matrixWorldInverse)}if(j.isSkinnedMesh){it.setOptional(W,j,"bindMatrix"),it.setOptional(W,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(xe.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),it.setValue(W,"boneTexture",dt.boneTexture,pe),it.setValue(W,"boneTextureSize",dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=B.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&xe.isWebGL2===!0)&&ie.update(j,B,O,_t),(ui||Pe.receiveShadow!==j.receiveShadow)&&(Pe.receiveShadow=j.receiveShadow,it.setValue(W,"receiveShadow",j.receiveShadow)),ui&&(it.setValue(W,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&nl(di,br),be&&O.fog===!0&&mt.refreshFogUniforms(di,be),mt.refreshMaterialUniforms(di,O,N,z,H),sr.upload(W,Pe.uniformsList,di,pe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(sr.upload(W,Pe.uniformsList,di,pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(W,"center",j.center),it.setValue(W,"modelViewMatrix",j.modelViewMatrix),it.setValue(W,"normalMatrix",j.normalMatrix),it.setValue(W,"modelMatrix",j.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dt=O.uniformsGroups;for(let Mr=0,rl=dt.length;Mr<rl;Mr++)if(xe.isWebGL2){const Rs=dt[Mr];re.update(Rs,_t),re.bind(Rs,_t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _t}function nl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function il(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,B){Se.get(M.texture).__webglTexture=I,Se.get(M.depthTexture).__webglTexture=B;const O=Se.get(M);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const B=Se.get(M);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,B=0){T=M,v=I,S=B;let O=!0;if(M){const we=Se.get(M);we.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),O=!1):we.__webglFramebuffer===void 0?pe.setupRenderTarget(M):we.__hasExternalTextures&&pe.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture)}let j=null,be=!1,ye=!1;if(M){const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(ye=!0);const Ne=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(j=Ne[I],be=!0):xe.isWebGL2&&M.samples>0&&pe.useMultisampledRTT(M)===!1?j=Se.get(M).__webglMultisampledFramebuffer:j=Ne,C.copy(M.viewport),P.copy(M.scissor),_=M.scissorTest}else C.copy(R).multiplyScalar(N).floor(),P.copy(q).multiplyScalar(N).floor(),_=k;if(he.bindFramebuffer(36160,j)&&xe.drawBuffers&&O&&he.drawBuffers(M,j),he.viewport(C),he.scissor(P),he.setScissorTest(_),be){const we=Se.get(M.texture);W.framebufferTexture2D(36160,36064,34069+I,we.__webglTexture,B)}else if(ye){const we=Se.get(M.texture),Ne=I||0;W.framebufferTextureLayer(36160,36064,we.__webglTexture,B||0,Ne)}w=-1},this.readRenderTargetPixels=function(M,I,B,O,j,be,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){he.bindFramebuffer(36160,Ee);try{const we=M.texture,Ne=we.format,Ce=we.type;if(Ne!==zt&&y.convert(Ne)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ce===Si&&(me.has("EXT_color_buffer_half_float")||xe.isWebGL2&&me.has("EXT_color_buffer_float"));if(Ce!==wn&&y.convert(Ce)!==W.getParameter(35738)&&!(Ce===bn&&(xe.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-O&&B>=0&&B<=M.height-j&&W.readPixels(I,B,O,j,y.convert(Ne),y.convert(Ce),be)}finally{const we=T!==null?Se.get(T).__webglFramebuffer:null;he.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(M,I,B=0){const O=Math.pow(2,-B),j=Math.floor(I.image.width*O),be=Math.floor(I.image.height*O);pe.setTexture2D(I,0),W.copyTexSubImage2D(3553,B,0,0,M.x,M.y,j,be),he.unbindTexture()},this.copyTextureToTexture=function(M,I,B,O=0){const j=I.image.width,be=I.image.height,ye=y.convert(B.format),Ee=y.convert(B.type);pe.setTexture2D(B,0),W.pixelStorei(37440,B.flipY),W.pixelStorei(37441,B.premultiplyAlpha),W.pixelStorei(3317,B.unpackAlignment),I.isDataTexture?W.texSubImage2D(3553,O,M.x,M.y,j,be,ye,Ee,I.image.data):I.isCompressedTexture?W.compressedTexSubImage2D(3553,O,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):W.texSubImage2D(3553,O,M.x,M.y,ye,Ee,I.image),O===0&&B.generateMipmaps&&W.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B,O,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,we=y.convert(O.format),Ne=y.convert(O.type);let Ce;if(O.isData3DTexture)pe.setTexture3D(O,0),Ce=32879;else if(O.isDataArrayTexture)pe.setTexture2DArray(O,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,O.flipY),W.pixelStorei(37441,O.premultiplyAlpha),W.pixelStorei(3317,O.unpackAlignment);const De=W.getParameter(3314),ke=W.getParameter(32878),hn=W.getParameter(3316),Rn=W.getParameter(3315),Pn=W.getParameter(32877),It=B.isCompressedTexture?B.mipmaps[0]:B.image;W.pixelStorei(3314,It.width),W.pixelStorei(32878,It.height),W.pixelStorei(3316,M.min.x),W.pixelStorei(3315,M.min.y),W.pixelStorei(32877,M.min.z),B.isDataTexture||B.isData3DTexture?W.texSubImage3D(Ce,j,I.x,I.y,I.z,be,ye,Ee,we,Ne,It.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ce,j,I.x,I.y,I.z,be,ye,Ee,we,It.data)):W.texSubImage3D(Ce,j,I.x,I.y,I.z,be,ye,Ee,we,Ne,It),W.pixelStorei(3314,De),W.pixelStorei(32878,ke),W.pixelStorei(3316,hn),W.pixelStorei(3315,Rn),W.pixelStorei(32877,Pn),j===0&&O.generateMipmaps&&W.generateMipmap(Ce),he.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?pe.setTextureCube(M,0):M.isData3DTexture?pe.setTexture3D(M,0):M.isDataArrayTexture?pe.setTexture2DArray(M,0):pe.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){v=0,S=0,T=null,he.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Qf extends Uo{}Qf.prototype.isWebGL1Renderer=!0;class ep extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Bo extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wa=new qe,hs=new wo,er=new hr,tr=new D;class tp extends rt{constructor(e=new Bt,t=new Bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(i),er.radius+=r,e.ray.intersectsSphere(er)===!1)return;Wa.copy(i).invert(),hs.copy(e.ray).applyMatrix4(Wa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,p=m;g<p;g++){const h=c.getX(g);tr.fromBufferAttribute(u,h),Xa(tr,h,l,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,p=m;g<p;g++)tr.fromBufferAttribute(u,g),Xa(tr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xa(s,e,t,n,i,r,o){const a=hs.distanceSqToPoint(s);if(a<t){const l=new D;hs.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ri extends Bt{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],f=[],m=[];let g=0;const p=[],h=n/2;let v=0;S(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(m,2));function S(){const w=new D,b=new D;let C=0;const P=(t-e)/n;for(let _=0;_<=r;_++){const A=[],z=_/r,N=z*(t-e)+e;for(let J=0;J<=i;J++){const K=J/i,R=K*l+a,q=Math.sin(R),k=Math.cos(R);b.x=N*q,b.y=-z*n+h,b.z=N*k,u.push(b.x,b.y,b.z),w.set(q,P,k).normalize(),f.push(w.x,w.y,w.z),m.push(K,1-z),A.push(g++)}p.push(A)}for(let _=0;_<i;_++)for(let A=0;A<r;A++){const z=p[A][_],N=p[A+1][_],J=p[A+1][_+1],K=p[A][_+1];d.push(z,N,K),d.push(N,J,K),C+=6}c.addGroup(v,C,0),v+=C}function T(w){const b=g,C=new Me,P=new D;let _=0;const A=w===!0?e:t,z=w===!0?1:-1;for(let J=1;J<=i;J++)u.push(0,h*z,0),f.push(0,z,0),m.push(.5,.5),g++;const N=g;for(let J=0;J<=i;J++){const R=J/i*l+a,q=Math.cos(R),k=Math.sin(R);P.x=A*k,P.y=h*z,P.z=A*q,u.push(P.x,P.y,P.z),f.push(0,z,0),C.x=q*.5+.5,C.y=k*.5*z+.5,m.push(C.x,C.y),g++}for(let J=0;J<i;J++){const K=b+J,R=N+J;w===!0?d.push(R,R+1,K):d.push(R+1,R,K),_+=3}c.addGroup(v,_,w===!0?1:2),v+=_}}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vo,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const qa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ko{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const np=new ko;class Go{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ip extends Go{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qa.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=wi("img");function l(){d(),qa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){d(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rp extends Go{constructor(e){super(e)}load(e,t,n,i){const r=new St,o=new ip(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vo extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ja=new qe,Ya=new D,Za=new D;class sp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ap extends sp{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DefaultUp),this.updateMatrix(),this.target=new rt,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lp extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$a();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $a(){return(typeof performance>"u"?Date:performance).now()}class Ka{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xs);const Ja={type:"change"},ns={type:"start"},Qa={type:"end"};class up extends Ln{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ut),this._domElementKeyEvents=y},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ja),n.update(),r=i.NONE},this.update=function(){const y=new D,$=new An().setFromUnitVectors(e.up,new D(0,1,0)),re=$.clone().invert(),ce=new D,oe=new An,_e=2*Math.PI;return function(){const Ue=n.object.position;y.copy(Ue).sub(n.target),y.applyQuaternion($),a.setFromVector3(y),n.autoRotate&&r===i.NONE&&A(P()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let L=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(L)&&isFinite(se)&&(L<-Math.PI?L+=_e:L>Math.PI&&(L-=_e),se<-Math.PI?se+=_e:se>Math.PI&&(se-=_e),L<=se?a.theta=Math.max(L,Math.min(se,a.theta)):a.theta=a.theta>(L+se)/2?Math.max(L,a.theta):Math.min(se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),y.setFromSpherical(a),y.applyQuaternion(re),Ue.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),c=1,u||ce.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(Ja),ce.copy(n.object.position),oe.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",mt),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ut)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Ka,l=new Ka;let c=1;const d=new D;let u=!1;const f=new Me,m=new Me,g=new Me,p=new Me,h=new Me,v=new Me,S=new Me,T=new Me,w=new Me,b=[],C={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function A(y){l.theta-=y}function z(y){l.phi-=y}const N=function(){const y=new D;return function(re,ce){y.setFromMatrixColumn(ce,0),y.multiplyScalar(-re),d.add(y)}}(),J=function(){const y=new D;return function(re,ce){n.screenSpacePanning===!0?y.setFromMatrixColumn(ce,1):(y.setFromMatrixColumn(ce,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(re),d.add(y)}}(),K=function(){const y=new D;return function(re,ce){const oe=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;y.copy(_e).sub(n.target);let Ae=y.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),N(2*re*Ae/oe.clientHeight,n.object.matrix),J(2*ce*Ae/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(re*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),J(ce*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(y){f.set(y.clientX,y.clientY)}function Z(y){S.set(y.clientX,y.clientY)}function Y(y){p.set(y.clientX,y.clientY)}function U(y){m.set(y.clientX,y.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;A(2*Math.PI*g.x/$.clientHeight),z(2*Math.PI*g.y/$.clientHeight),f.copy(m),n.update()}function H(y){T.set(y.clientX,y.clientY),w.subVectors(T,S),w.y>0?R(_()):w.y<0&&q(_()),S.copy(T),n.update()}function ne(y){h.set(y.clientX,y.clientY),v.subVectors(h,p).multiplyScalar(n.panSpeed),K(v.x,v.y),p.copy(h),n.update()}function ee(y){y.deltaY<0?q(_()):y.deltaY>0&&R(_()),n.update()}function Q(y){let $=!1;switch(y.code){case n.keys.UP:K(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:K(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:K(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:K(-n.keyPanSpeed,0),$=!0;break}$&&(y.preventDefault(),n.update())}function fe(){if(b.length===1)f.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),$=.5*(b[0].pageY+b[1].pageY);f.set(y,$)}}function ve(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),$=.5*(b[0].pageY+b[1].pageY);p.set(y,$)}}function W(){const y=b[0].pageX-b[1].pageX,$=b[0].pageY-b[1].pageY,re=Math.sqrt(y*y+$*$);S.set(0,re)}function Re(){n.enableZoom&&W(),n.enablePan&&ve()}function me(){n.enableZoom&&W(),n.enableRotate&&fe()}function xe(y){if(b.length==1)m.set(y.pageX,y.pageY);else{const re=ge(y),ce=.5*(y.pageX+re.x),oe=.5*(y.pageY+re.y);m.set(ce,oe)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;A(2*Math.PI*g.x/$.clientHeight),z(2*Math.PI*g.y/$.clientHeight),f.copy(m)}function he(y){if(b.length===1)h.set(y.pageX,y.pageY);else{const $=ge(y),re=.5*(y.pageX+$.x),ce=.5*(y.pageY+$.y);h.set(re,ce)}v.subVectors(h,p).multiplyScalar(n.panSpeed),K(v.x,v.y),p.copy(h)}function Ie(y){const $=ge(y),re=y.pageX-$.x,ce=y.pageY-$.y,oe=Math.sqrt(re*re+ce*ce);T.set(0,oe),w.set(0,Math.pow(T.y/S.y,n.zoomSpeed)),R(w.y),S.copy(T)}function Se(y){n.enableZoom&&Ie(y),n.enablePan&&he(y)}function pe(y){n.enableZoom&&Ie(y),n.enableRotate&&xe(y)}function He(y){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",et),n.domElement.addEventListener("pointerup",je)),te(y),y.pointerType==="touch"?E(y):Ye(y))}function et(y){n.enabled!==!1&&(y.pointerType==="touch"?x(y):Fe(y))}function je(y){ie(y),b.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",et),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Qa),r=i.NONE}function ct(y){ie(y)}function Ye(y){let $;switch(y.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Fn.DOLLY:if(n.enableZoom===!1)return;Z(y),r=i.DOLLY;break;case Fn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Y(y),r=i.PAN}else{if(n.enableRotate===!1)return;k(y),r=i.ROTATE}break;case Fn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;k(y),r=i.ROTATE}else{if(n.enablePan===!1)return;Y(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ns)}function Fe(y){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;U(y);break;case i.DOLLY:if(n.enableZoom===!1)return;H(y);break;case i.PAN:if(n.enablePan===!1)return;ne(y);break}}function mt(y){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(y.preventDefault(),n.dispatchEvent(ns),ee(y),n.dispatchEvent(Qa))}function ut(y){n.enabled===!1||n.enablePan===!1||Q(y)}function E(y){switch(le(y),b.length){case 1:switch(n.touches.ONE){case Nn.ROTATE:if(n.enableRotate===!1)return;fe(),r=i.TOUCH_ROTATE;break;case Nn.PAN:if(n.enablePan===!1)return;ve(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Nn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),r=i.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ns)}function x(y){switch(le(y),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(y),n.update();break;default:r=i.NONE}}function V(y){n.enabled!==!1&&y.preventDefault()}function te(y){b.push(y)}function ie(y){delete C[y.pointerId];for(let $=0;$<b.length;$++)if(b[$].pointerId==y.pointerId){b.splice($,1);return}}function le(y){let $=C[y.pointerId];$===void 0&&($=new Me,C[y.pointerId]=$),$.set(y.pageX,y.pageY)}function ge(y){const $=y.pointerId===b[0].pointerId?b[1]:b[0];return C[$.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",mt,{passive:!1}),this.update()}}function dp(s){if(!!s&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function ei(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),o=s.a,a=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var d=s.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+o+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var eo=Array.prototype.forEach,mi=Array.prototype.slice,X={BREAK:{},extend:function(e){return this.each(mi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(mi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=mi.call(arguments);return function(){for(var t=mi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(eo&&e.forEach&&e.forEach===eo)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,o=arguments;function a(){i=null,n||e.apply(r,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():mi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},hp=[{litmus:X.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ei},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ei},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ei},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ei}}},{litmus:X.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:X.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:X.isObject,conversions:{RGBA_OBJ:{read:function(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)&&X.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return X.isNumber(e.r)&&X.isNumber(e.g)&&X.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)&&X.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return X.isNumber(e.h)&&X.isNumber(e.s)&&X.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],gi=void 0,nr=void 0,fs=function(){nr=!1;var e=arguments.length>1?X.toArray(arguments):arguments[0];return X.each(hp,function(t){if(t.litmus(e))return X.each(t.conversions,function(n,i){if(gi=n.read(e),nr===!1&&gi!==!1)return nr=gi,gi.conversionName=i,gi.conversion=n,X.BREAK}),X.BREAK}),nr},to=void 0,lr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),o=r-i,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(to=t*8)|e&~(255<<to)}},fp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Rt=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},Pt=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),cn=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},un=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},dn=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},Qe=function(){function s(){if(Rt(this,s),this.__state=fs.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Pt(s,[{key:"toString",value:function(){return ei(this)}},{key:"toHexString",value:function(){return ei(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Ms(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Qe.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(Qe.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Ss(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Qe.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Qe.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Qe.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=lr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")X.extend(s.__state,lr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};Qe.recalculateHSV=function(s){var e=lr.rgb_to_hsv(s.r,s.g,s.b);X.extend(s.__state,{s:e.s,v:e.v}),X.isNaN(e.h)?X.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};Qe.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ms(Qe.prototype,"r",2);Ms(Qe.prototype,"g",1);Ms(Qe.prototype,"b",0);Ss(Qe.prototype,"h");Ss(Qe.prototype,"s");Ss(Qe.prototype,"v");Object.defineProperty(Qe.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Qe.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=lr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Dn=function(){function s(e,t){Rt(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Pt(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),pp={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Ho={};X.each(pp,function(s,e){X.each(s,function(t){Ho[t]=e})});var mp=/(\d+(\.\d+)?)px/;function Ft(s){if(s==="0"||X.isUndefined(s))return 0;var e=s.match(mp);return X.isNull(e)?0:parseFloat(e[1])}var F={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;X.isUndefined(r)&&(r=!0),X.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},o=Ho[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=a.initKeyboardEvent||a.initKeyEvent;X.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}X.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),F},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),F},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return F},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return F},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Ft(t["border-left-width"])+Ft(t["border-right-width"])+Ft(t["padding-left"])+Ft(t["padding-right"])+Ft(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Ft(t["border-top-width"])+Ft(t["border-bottom-width"])+Ft(t["padding-top"])+Ft(t["padding-bottom"])+Ft(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Wo=function(s){un(e,s);function e(t,n){Rt(this,e);var i=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return F.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Pt(e,[{key:"setValue",value:function(n){var i=cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dn),gp=function(s){un(e,s);function e(t,n,i){Rt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=r;if(r.__select=document.createElement("select"),X.isArray(o)){var l={};X.each(o,function(c){l[c]=c}),o=l}return X.each(o,function(c,d){var u=document.createElement("option");u.innerHTML=d,u.setAttribute("value",c),a.__select.appendChild(u)}),r.updateDisplay(),F.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),r.domElement.appendChild(r.__select),r}return Pt(e,[{key:"setValue",value:function(n){var i=cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return F.isActive(this.__select)?this:(this.__select.value=this.getValue(),cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Dn),_p=function(s){un(e,s);function e(t,n){Rt(this,e);var i=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),F.bind(i.__input,"keyup",o),F.bind(i.__input,"change",o),F.bind(i.__input,"blur",a),F.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Pt(e,[{key:"updateDisplay",value:function(){return F.isActive(this.__input)||(this.__input.value=this.getValue()),cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dn);function no(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Xo=function(s){un(e,s);function e(t,n,i){Rt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,X.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=no(r.__impliedStep),r}return Pt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=no(n),this}}]),e}(Dn);function vp(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var cr=function(s){un(e,s);function e(t,n,i){Rt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var g=parseFloat(o.__input.value);X.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function d(){c()}function u(g){var p=a-g.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=g.clientY}function f(){F.unbind(window,"mousemove",u),F.unbind(window,"mouseup",f),c()}function m(g){F.bind(window,"mousemove",u),F.bind(window,"mouseup",f),a=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),F.bind(r.__input,"change",l),F.bind(r.__input,"blur",d),F.bind(r.__input,"mousedown",m),F.bind(r.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Pt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():vp(this.getValue(),this.__precision),cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xo);function io(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var ps=function(s){un(e,s);function e(t,n,i,r,o){Rt(this,e);var a=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),F.bind(a.__background,"mousedown",c),F.bind(a.__background,"touchstart",f),F.addClass(a.__background,"slider"),F.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),F.bind(window,"mousemove",d),F.bind(window,"mouseup",u),d(p)}function d(p){p.preventDefault();var h=l.__background.getBoundingClientRect();return l.setValue(io(p.clientX,h.left,h.right,l.__min,l.__max)),!1}function u(){F.unbind(window,"mousemove",d),F.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(p){p.touches.length===1&&(F.bind(window,"touchmove",m),F.bind(window,"touchend",g),m(p))}function m(p){var h=p.touches[0].clientX,v=l.__background.getBoundingClientRect();l.setValue(io(h,v.left,v.right,l.__min,l.__max))}function g(){F.unbind(window,"touchmove",m),F.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Pt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",cn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xo),qo=function(s){un(e,s);function e(t,n,i){Rt(this,e);var r=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,F.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),F.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Pt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Dn),ms=function(s){un(e,s);function e(t,n){Rt(this,e);var i=dn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new Qe(i.getValue()),i.__temp=new Qe(0);var r=i;i.domElement=document.createElement("div"),F.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",F.bind(i.__input,"keydown",function(p){p.keyCode===13&&u.call(this)}),F.bind(i.__input,"blur",u),F.bind(i.__selector,"mousedown",function(){F.addClass(this,"drag").bind(window,"mouseup",function(){F.removeClass(r.__selector,"drag")})}),F.bind(i.__selector,"touchstart",function(){F.addClass(this,"drag").bind(window,"touchend",function(){F.removeClass(r.__selector,"drag")})});var o=document.createElement("div");X.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),X.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),X.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),X.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),X.extend(o.style,{width:"100%",height:"100%",background:"none"}),ro(o,"top","rgba(0,0,0,0)","#000"),X.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),bp(i.__hue_field),X.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),F.bind(i.__saturation_field,"mousedown",a),F.bind(i.__saturation_field,"touchstart",a),F.bind(i.__field_knob,"mousedown",a),F.bind(i.__field_knob,"touchstart",a),F.bind(i.__hue_field,"mousedown",l),F.bind(i.__hue_field,"touchstart",l);function a(p){m(p),F.bind(window,"mousemove",m),F.bind(window,"touchmove",m),F.bind(window,"mouseup",c),F.bind(window,"touchend",c)}function l(p){g(p),F.bind(window,"mousemove",g),F.bind(window,"touchmove",g),F.bind(window,"mouseup",d),F.bind(window,"touchend",d)}function c(){F.unbind(window,"mousemove",m),F.unbind(window,"touchmove",m),F.unbind(window,"mouseup",c),F.unbind(window,"touchend",c),f()}function d(){F.unbind(window,"mousemove",g),F.unbind(window,"touchmove",g),F.unbind(window,"mouseup",d),F.unbind(window,"touchend",d),f()}function u(){var p=fs(this.value);p!==!1?(r.__color.__state=p,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(p){p.type.indexOf("touch")===-1&&p.preventDefault();var h=r.__saturation_field.getBoundingClientRect(),v=p.touches&&p.touches[0]||p,S=v.clientX,T=v.clientY,w=(S-h.left)/(h.right-h.left),b=1-(T-h.top)/(h.bottom-h.top);return b>1?b=1:b<0&&(b=0),w>1?w=1:w<0&&(w=0),r.__color.v=b,r.__color.s=w,r.setValue(r.__color.toOriginal()),!1}function g(p){p.type.indexOf("touch")===-1&&p.preventDefault();var h=r.__hue_field.getBoundingClientRect(),v=p.touches&&p.touches[0]||p,S=v.clientY,T=1-(S-h.top)/(h.bottom-h.top);return T>1?T=1:T<0&&(T=0),r.__color.h=T*360,r.setValue(r.__color.toOriginal()),!1}return i}return Pt(e,[{key:"updateDisplay",value:function(){var n=fs(this.getValue());if(n!==!1){var i=!1;X.each(Qe.COMPONENTS,function(a){if(!X.isUndefined(n[a])&&!X.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&X.extend(this.__color.__state,n)}X.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;X.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ro(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),X.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Dn),xp=["-moz-","-o-","-webkit-","-ms-",""];function ro(s,e,t,n){s.style.background="",X.each(xp,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function bp(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var yp={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},Mp=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Sp=function(e,t){var n=e[t];return X.isArray(arguments[2])||X.isObject(arguments[2])?new gp(e,t,arguments[2]):X.isNumber(n)?X.isNumber(arguments[2])&&X.isNumber(arguments[3])?X.isNumber(arguments[4])?new ps(e,t,arguments[2],arguments[3],arguments[4]):new ps(e,t,arguments[2],arguments[3]):X.isNumber(arguments[4])?new cr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new cr(e,t,{min:arguments[2],max:arguments[3]}):X.isString(n)?new _p(e,t):X.isFunction(n)?new qo(e,t,""):X.isBoolean(n)?new Wo(e,t):null};function wp(s){setTimeout(s,1e3/60)}var Ep=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||wp,Tp=function(){function s(){Rt(this,s),this.backgroundElement=document.createElement("div"),X.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),F.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),X.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;F.bind(this.backgroundElement,"click",function(){e.hide()})}return Pt(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),X.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",F.unbind(t.domElement,"webkitTransitionEnd",i),F.unbind(t.domElement,"transitionend",i),F.unbind(t.domElement,"oTransitionEnd",i)};F.bind(this.domElement,"webkitTransitionEnd",n),F.bind(this.domElement,"transitionend",n),F.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-F.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-F.getHeight(this.domElement)/2+"px"}}]),s}(),Ap=dp(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);yp.inject(Ap);var so="dg",ao=72,oo=20,Ei="Default",xi=function(){try{return!!window.localStorage}catch{return!1}}(),bi=void 0,lo=!0,Kn=void 0,is=!1,jo=[],ze=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),F.addClass(this.domElement,so),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=X.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=X.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),X.isUndefined(n.load)?n.load={preset:Ei}:n.preset&&(n.load.preset=n.preset),X.isUndefined(n.parent)&&n.hideable&&jo.push(this),n.resizable=X.isUndefined(n.parent)&&n.resizable,n.autoPlace&&X.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=xi&&localStorage.getItem(Jn(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Rp(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,vs(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?F.addClass(t.__ul,s.CLASS_CLOSED):F.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){xi&&(i=f,f?F.bind(window,"unload",r):F.unbind(window,"unload",r),localStorage.setItem(Jn(t,"isLocal"),f))}}}),X.isUndefined(n.parent)){if(this.closed=n.closed||!1,F.addClass(this.domElement,s.CLASS_MAIN),F.makeSelectable(this.domElement,!1),xi&&i){t.useLocalStorage=!0;var a=localStorage.getItem(Jn(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,F.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(F.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(F.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),F.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);F.addClass(l,"controller-name"),o=ws(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};F.addClass(this.__ul,s.CLASS_CLOSED),F.addClass(o,"title"),F.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(X.isUndefined(n.parent)&&(lo&&(Kn=document.createElement("div"),F.addClass(Kn,so),F.addClass(Kn,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Kn),lo=!1),Kn.appendChild(this.domElement),F.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||vs(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},F.bind(window,"resize",this.__resizeHandler),F.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),F.bind(this.__ul,"transitionend",this.__resizeHandler),F.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Dp(this),r=function(){xi&&localStorage.getItem(Jn(t,"isLocal"))==="true"&&localStorage.setItem(Jn(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function d(){var u=t.getRoot();u.width+=1,X.defer(function(){u.width-=1})}n.parent||d()};ze.toggleHide=function(){is=!is,X.each(jo,function(s){s.domElement.style.display=is?"none":""})};ze.CLASS_AUTO_PLACE="a";ze.CLASS_AUTO_PLACE_CONTAINER="ac";ze.CLASS_MAIN="main";ze.CLASS_CONTROLLER_ROW="cr";ze.CLASS_TOO_TALL="taller-than-window";ze.CLASS_CLOSED="closed";ze.CLASS_CLOSE_BUTTON="close-button";ze.CLASS_CLOSE_TOP="close-top";ze.CLASS_CLOSE_BOTTOM="close-bottom";ze.CLASS_DRAG="drag";ze.DEFAULT_WIDTH=245;ze.TEXT_CLOSED="Close Controls";ze.TEXT_OPEN="Open Controls";ze._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===ao||s.keyCode===ao)&&ze.toggleHide()};F.bind(window,"keydown",ze._keydownHandler,!1);X.extend(ze.prototype,{add:function(e,t){return yi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return yi(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;X.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Kn.removeChild(this.domElement);var e=this;X.each(this.__folders,function(t){e.removeFolder(t)}),F.unbind(window,"keydown",ze._keydownHandler,!1),co(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new ze(t);this.__folders[e]=n;var i=ws(this,n.domElement);return F.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],co(e);var t=this;X.each(e.__folders,function(n){e.removeFolder(n)}),X.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=F.getOffset(e.__ul).top,n=0;X.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=F.getHeight(i))}),window.innerHeight-t-oo<n?(F.addClass(e.domElement,ze.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-oo+"px"):(F.removeClass(e.domElement,ze.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&X.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:X.debounce(function(){this.onResize()},50),remember:function(){if(X.isUndefined(bi)&&(bi=new Tp,bi.domElement.innerHTML=Mp),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;X.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Lp(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&vs(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ir(this)),e.folders={},X.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ir(this),gs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Ei]=ir(this,!0)),this.load.remembered[e]=ir(this),this.preset=e,_s(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){X.each(this.__controllers,function(t){this.getRoot().load.remembered?Yo(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),X.each(this.__folders,function(t){t.revert(t)}),e||gs(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Zo(this.__listening)},updateDisplay:function(){X.each(this.__controllers,function(e){e.updateDisplay()}),X.each(this.__folders,function(e){e.updateDisplay()})}});function ws(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function co(s){F.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&F.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function gs(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Cp(s,e,t){if(t.__li=e,t.__gui=s,X.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),yi(s,t.object,t.property,{before:a,factoryArgs:[X.toArray(arguments)]})}if(X.isArray(o)||X.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),yi(s,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof ps){var n=new cr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});X.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),F.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof cr){var i=function(o){if(X.isNumber(t.__min)&&X.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=yi(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=X.compose(i,t.min),t.max=X.compose(i,t.max)}else t instanceof Wo?(F.bind(e,"click",function(){F.fakeEvent(t.__checkbox,"click")}),F.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof qo?(F.bind(e,"click",function(){F.fakeEvent(t.__button,"click")}),F.bind(e,"mouseover",function(){F.addClass(t.__button,"hover")}),F.bind(e,"mouseout",function(){F.removeClass(t.__button,"hover")})):t instanceof ms&&(F.addClass(e,"color"),t.updateDisplay=X.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=X.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&gs(s.getRoot(),!0),r},t.setValue)}function Yo(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[s.preset])o=r[s.preset];else if(r[Ei])o=r[Ei];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function yi(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new ms(e,t);else{var r=[e,t].concat(n.factoryArgs);i=Sp.apply(s,r)}n.before instanceof Dn&&(n.before=n.before.__li),Yo(s,i),F.addClass(i.domElement,"c");var o=document.createElement("span");F.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=ws(s,a,n.before);return F.addClass(l,ze.CLASS_CONTROLLER_ROW),i instanceof ms?F.addClass(l,"color"):F.addClass(l,fp(i.getValue())),Cp(s,l,i),s.__controllers.push(i),i}function Jn(s,e){return document.location.href+"."+e}function _s(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function uo(s,e){e.style.display=s.useLocalStorage?"block":"none"}function Lp(s){var e=s.__save_row=document.createElement("li");F.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),F.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",F.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",F.addClass(n,"button"),F.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",F.addClass(i,"button"),F.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",F.addClass(r,"button"),F.addClass(r,"revert");var o=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?X.each(s.load.remembered,function(u,f){_s(s,f,f===s.preset)}):_s(s,Ei,!1),F.bind(o,"change",function(){for(var u=0;u<s.__preset_select.length;u++)s.__preset_select[u].innerHTML=s.__preset_select[u].value;s.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),xi){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Jn(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),uo(s,a),F.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,uo(s,a)})}var d=document.getElementById("dg-new-constructor");F.bind(d,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&bi.hide()}),F.bind(t,"click",function(){d.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),bi.show(),d.focus(),d.select()}),F.bind(n,"click",function(){s.save()}),F.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&s.saveAs(u)}),F.bind(r,"click",function(){s.revert()})}function Dp(s){var e=void 0;s.__resize_handle=document.createElement("div"),X.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){F.removeClass(s.__closeButton,ze.CLASS_DRAG),F.unbind(window,"mousemove",t),F.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,F.addClass(s.__closeButton,ze.CLASS_DRAG),F.bind(window,"mousemove",t),F.bind(window,"mouseup",n),!1}F.bind(s.__resize_handle,"mousedown",i),F.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function vs(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function ir(s,e){var t={};return X.each(s.__rememberedObjects,function(n,i){var r={},o=s.__rememberedObjectIndecesToControllers[i];X.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[i]=r}),t}function Rp(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function Zo(s){s.length!==0&&Ep.call(window,function(){Zo(s)}),X.each(s,function(e){e.updateDisplay()})}var Pp=ze;const Ip="/India-flag/assets/Flag_of_India.c7a646ea.svg",Fp="/India-flag/assets/ground.eb0520e3.jpg",Np="/India-flag/assets/concrete.48b67331.png",Op="/India-flag/assets/normal.2bd6900b.png",zp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAmVBMVEUAAAAHBwcNDQ0QEBAwMDAbGxsYGBgJCQn////7+/sgICATExNQUFA6OjorKyujo6MoKCjZ2dnw8PDq6uri4uLf39/Ly8vCwsJtbW1nZ2fOzs6zs7OPj4+goKCLi4uHh4d8fHxUVFT19fW5ubm1tbWSkpJXV1dCQkI1NTUlJSX09PTb29t+fn5bW1taWlpOTk40NDTQ0NCTk5OjPdNLAAAByklEQVRIx+WWXXeCMAyGQ2nT2UIBEUFFFL91Tt3+/49bmWywHXeovfDGXBC+ntM2Sd8UntwcxxIkxBKU0hJEtASFsATD0BKk1BL0fbssgueBTSYJjEb6YmbtEVyYz/Wl+WRKcshz4B1cm2x8ELQfO0Hi1DOlkwnVrnnZRSKvHIKXpp522jgaRZeIahgG2XicaacHF4bBlQorcBZFswpEZbxLmC/04qaDwVQ74TMwtv2WglrF8UoB3e7hDrucVDns94elOl1Ma8dFxnQusEgOh6RAnRHG0HU6cujW8QvLIuppey3KsI6125VLes5m09Uw6b1o6yXD5XSWnek/MkgkipD63mieB5N0HA3i/uEKLvrxIBqnk2A9H3k+DQVK4vzUISeSXcHj+htctMD3dBV8HK8gk4Q7N4fflVkRLFtTDYqs3PGu4NQ/0E3++hWcfFMvj3cFh1fpIKBYniwWSc4UEMZQclOBe6ObqgA2+uYuKd7uQC3jeKlgtxXmHPr7psj3PppyrmLtbcWUa8ZxIX9vZCm4UZUj+SsdxEg6bouVef/mV3nkzVtzQV6v24Js3wIsmo5Nm7NsrI9u5WH46OMK4qOPZITYHzuf2z4B+jwb0H2jMOEAAAAASUVORK5CYII=",$o=document.getElementById("firstCanvas"),Up=document.querySelector(".loading");function Bp(){Up.style.display="none"}const Ot={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ot.width=window.innerWidth,Ot.height=window.innerHeight,on.aspect=Ot.width/Ot.height,on.updateProjectionMatrix(),oi.setSize(Ot.width,Ot.height),oi.render(wt,on)});const wt=new ep,mr=new Pp,kp=new ko(()=>{Bp()}),Pi=new rp(kp),Gp=Pi.load(Ip),Vp=Pi.load(Fp),Hp=Pi.load(Np),Wp=Pi.load(Op),Xp=Pi.load(zp),qp=new lp(16777215,.1);wt.add(qp);const kt=new op(16777215,1);kt.position.set(4,4,4);kt.castShadow=!0;kt.shadow.mapSize.x=1024;kt.shadow.mapSize.y=1024;kt.castShadow;wt.add(kt);mr.add(kt,"intensity").min(0).max(5).step(.001).name("light intencity");mr.add(kt.position,"x").min(-5).max(5).step(.001).name("light x");mr.add(kt.position,"y").min(-5).max(5).step(.001).name("light y");mr.add(kt.position,"z").min(-5).max(5).step(.001).name("light z");const jp=new pr({side:ln,map:Vp}),Es=new pt(new Di(10,10),jp);Es.rotation.x=Math.PI/2;Es.receiveShadow=!0;wt.add(Es);const Ko=new pr({map:Hp,normalMap:Wp}),gr=new pt(new Ri(1,1,.3,32),Ko);gr.position.y=.15;gr.receiveShadow=!0;gr.castShadow=!0;wt.add(gr);const _r=new pt(new Ri(.7,.7,.3,32),Ko);_r.position.y=.4;_r.receiveShadow=!0;_r.castShadow=!0;wt.add(_r);const Yp=new pr({metalness:1,roughness:.3}),Ts=new pt(new Ri(.05,.05,4.2,16),Yp);Ts.position.y=2;Ts.castShadow=!0;wt.add(Ts);const Zp=new Di(2,1,15,9),$p=new pr({side:ln,map:Gp}),vr=new pt(Zp,$p);vr.position.set(1,3.5,0);vr.castShadow=!0;wt.add(vr);const As=new Bt,Cs=800,ar=new Float32Array(Cs*3),or=new Float32Array(Cs*3);for(let s=0;s<Cs;s++){let e=s*3;ar[e]=(Math.random()-.5)*20,ar[e+1]=(Math.random()-.5)*20,ar[e+2]=(Math.random()-.5)*20,or[e]=Math.random()-.5,or[e+1]=Math.random()-.5,or[e+2]=Math.random()-.5}const Kp=new Mt(ar,3),Jp=new Mt(or,3);As.setAttribute("position",Kp);As.setAttribute("color",Jp);const Qp=new Bo({size:.5,alphaMap:Xp,depthWrite:!1,transparent:!0}),Ls=new tp(As,Qp);Ls.position.set(0,2,0);wt.add(Ls);const on=new bt(45,Ot.width/Ot.height);on.position.set(0,5,10);wt.add(on);const Jo=new up(on,$o);Jo.enableDamping=!0;const oi=new Uo({canvas:$o});oi.setSize(Ot.width,Ot.height);oi.shadowMap.enabled=!0;oi.render(wt,on);const em=new cp,Qo=()=>{window.requestAnimationFrame(Qo);const s=em.getElapsedTime();Jo.update(),Ls.rotation.set(s/9,s/10,0),vr.geometry.verticesNeedUpdate=!0,oi.render(wt,on)};Qo();
