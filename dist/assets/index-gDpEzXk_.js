(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function mm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sc={exports:{}},To={},oc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function R_(){if(op)return ft;op=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function S(I,ne,De){this.props=I,this.context=ne,this.refs=C,this.updater=De||y}S.prototype.isReactComponent={},S.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=S.prototype;function N(I,ne,De){this.props=I,this.context=ne,this.refs=C,this.updater=De||y}var D=N.prototype=new g;D.constructor=N,w(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,ee=Object.prototype.hasOwnProperty,z={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function G(I,ne,De){var K,ce={},Se=null,ve=null;if(ne!=null)for(K in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)ee.call(ne,K)&&!U.hasOwnProperty(K)&&(ce[K]=ne[K]);var we=arguments.length-2;if(we===1)ce.children=De;else if(1<we){for(var Ue=Array(we),Ze=0;Ze<we;Ze++)Ue[Ze]=arguments[Ze+2];ce.children=Ue}if(I&&I.defaultProps)for(K in we=I.defaultProps,we)ce[K]===void 0&&(ce[K]=we[K]);return{$$typeof:s,type:I,key:Se,ref:ve,props:ce,_owner:z.current}}function P(I,ne){return{$$typeof:s,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function F(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return ne[De]})}var Z=/\/+/g;function $(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?F(""+I.key):ne.toString(36)}function ae(I,ne,De,K,ce){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var ve=!1;if(I===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(I.$$typeof){case s:case e:ve=!0}}if(ve)return ve=I,ce=ce(ve),I=K===""?"."+$(ve,0):K,R(ce)?(De="",I!=null&&(De=I.replace(Z,"$&/")+"/"),ae(ce,ne,De,"",function(Ze){return Ze})):ce!=null&&(A(ce)&&(ce=P(ce,De+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(Z,"$&/")+"/")+I)),ne.push(ce)),1;if(ve=0,K=K===""?".":K+":",R(I))for(var we=0;we<I.length;we++){Se=I[we];var Ue=K+$(Se,we);ve+=ae(Se,ne,De,Ue,ce)}else if(Ue=v(I),typeof Ue=="function")for(I=Ue.call(I),we=0;!(Se=I.next()).done;)Se=Se.value,Ue=K+$(Se,we++),ve+=ae(Se,ne,De,Ue,ce);else if(Se==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function de(I,ne,De){if(I==null)return I;var K=[],ce=0;return ae(I,K,"","",function(Se){return ne.call(De,Se,ce++)}),K}function le(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var ue={current:null},k={transition:null},oe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:de,forEach:function(I,ne,De){de(I,function(){ne.apply(this,arguments)},De)},count:function(I){var ne=0;return de(I,function(){ne++}),ne},toArray:function(I){return de(I,function(ne){return ne})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=S,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=N,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ft.act=re,ft.cloneElement=function(I,ne,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=w({},I.props),ce=I.key,Se=I.ref,ve=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=z.current),ne.key!==void 0&&(ce=""+ne.key),I.type&&I.type.defaultProps)var we=I.type.defaultProps;for(Ue in ne)ee.call(ne,Ue)&&!U.hasOwnProperty(Ue)&&(K[Ue]=ne[Ue]===void 0&&we!==void 0?we[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)K.children=De;else if(1<Ue){we=Array(Ue);for(var Ze=0;Ze<Ue;Ze++)we[Ze]=arguments[Ze+2];K.children=we}return{$$typeof:s,type:I.type,key:ce,ref:Se,props:K,_owner:ve}},ft.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ft.createElement=G,ft.createFactory=function(I){var ne=G.bind(null,I);return ne.type=I,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=A,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:le}},ft.memo=function(I,ne){return{$$typeof:m,type:I,compare:ne===void 0?null:ne}},ft.startTransition=function(I){var ne=k.transition;k.transition={};try{I()}finally{k.transition=ne}},ft.unstable_act=re,ft.useCallback=function(I,ne){return ue.current.useCallback(I,ne)},ft.useContext=function(I){return ue.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ue.current.useDeferredValue(I)},ft.useEffect=function(I,ne){return ue.current.useEffect(I,ne)},ft.useId=function(){return ue.current.useId()},ft.useImperativeHandle=function(I,ne,De){return ue.current.useImperativeHandle(I,ne,De)},ft.useInsertionEffect=function(I,ne){return ue.current.useInsertionEffect(I,ne)},ft.useLayoutEffect=function(I,ne){return ue.current.useLayoutEffect(I,ne)},ft.useMemo=function(I,ne){return ue.current.useMemo(I,ne)},ft.useReducer=function(I,ne,De){return ue.current.useReducer(I,ne,De)},ft.useRef=function(I){return ue.current.useRef(I)},ft.useState=function(I){return ue.current.useState(I)},ft.useSyncExternalStore=function(I,ne,De){return ue.current.useSyncExternalStore(I,ne,De)},ft.useTransition=function(){return ue.current.useTransition()},ft.version="18.3.1",ft}var ap;function Rf(){return ap||(ap=1,oc.exports=R_()),oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function P_(){if(lp)return To;lp=1;var s=Rf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,x={},v=null,y=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:y,props:x,_owner:a.current}}return To.Fragment=n,To.jsx=f,To.jsxs=f,To}var up;function b_(){return up||(up=1,sc.exports=P_()),sc.exports}var Fe=b_(),gn=Rf();const L_=mm(gn);var Wa={},ac={exports:{}},wn={},lc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function D_(){return cp||(cp=1,(function(s){function e(k,oe){var re=k.length;k.push(oe);e:for(;0<re;){var I=re-1>>>1,ne=k[I];if(0<a(ne,oe))k[I]=oe,k[re]=ne,re=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var oe=k[0],re=k.pop();if(re!==oe){k[0]=re;e:for(var I=0,ne=k.length,De=ne>>>1;I<De;){var K=2*(I+1)-1,ce=k[K],Se=K+1,ve=k[Se];if(0>a(ce,re))Se<ne&&0>a(ve,ce)?(k[I]=ve,k[Se]=re,I=Se):(k[I]=ce,k[K]=re,I=K);else if(Se<ne&&0>a(ve,re))k[I]=ve,k[Se]=re,I=Se;else break e}}return oe}function a(k,oe){var re=k.sortIndex-oe.sortIndex;return re!==0?re:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,v=3,y=!1,w=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=k)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=n(m)}}function R(k){if(C=!1,D(k),!w)if(n(p)!==null)w=!0,le(ee);else{var oe=n(m);oe!==null&&ue(R,oe.startTime-k)}}function ee(k,oe){w=!1,C&&(C=!1,g(G),G=-1),y=!0;var re=v;try{for(D(oe),x=n(p);x!==null&&(!(x.expirationTime>oe)||k&&!F());){var I=x.callback;if(typeof I=="function"){x.callback=null,v=x.priorityLevel;var ne=I(x.expirationTime<=oe);oe=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(p)&&r(p),D(oe)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var K=n(m);K!==null&&ue(R,K.startTime-oe),De=!1}return De}finally{x=null,v=re,y=!1}}var z=!1,U=null,G=-1,P=5,A=-1;function F(){return!(s.unstable_now()-A<P)}function Z(){if(U!==null){var k=s.unstable_now();A=k;var oe=!0;try{oe=U(!0,k)}finally{oe?$():(z=!1,U=null)}}else z=!1}var $;if(typeof N=="function")$=function(){N(Z)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,de=ae.port2;ae.port1.onmessage=Z,$=function(){de.postMessage(null)}}else $=function(){S(Z,0)};function le(k){U=k,z||(z=!0,$())}function ue(k,oe){G=S(function(){k(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,le(ee))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return k()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=v;v=k;try{return oe()}finally{v=re}},s.unstable_scheduleCallback=function(k,oe,re){var I=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?I+re:I):re=I,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:_++,callback:oe,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>I?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(C?(g(G),G=-1):C=!0,ue(R,re-I))):(k.sortIndex=ne,e(p,k),w||y||(w=!0,le(ee))),k},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(k){var oe=v;return function(){var re=v;v=oe;try{return k.apply(this,arguments)}finally{v=re}}}})(uc)),uc}var fp;function U_(){return fp||(fp=1,lc.exports=D_()),lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function I_(){if(dp)return wn;dp=1;var s=Rf(),e=U_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function y(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||y(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var c=S.hasOwnProperty(i)?S[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?v(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),F=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,I;function ne(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var c=Q.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var O=`
`+c[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ce(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case z:return"Portal";case P:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Se(t.type)||"Memo";case le:i=t._payload,t=t._init;try{return Se(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function fn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||bt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var qe=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Y(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(qe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ie=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function H(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,se=null,he=null;function be(t){if(t=lo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=sa(i),Ce(t.stateNode,t.type,i))}}function Pe(t){se?he?he.push(t):he=[t]:se=t}function rt(){if(se){var t=se,i=he;if(he=se=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Dt(t,i){return t(i)}function Wt(){}var gt=!1;function vn(t,i,o){if(gt)return t(i,o);gt=!0;try{return Dt(t,i,o)}finally{gt=!1,(se!==null||he!==null)&&(Wt(),rt())}}function dn(t,i){var o=t.stateNode;if(o===null)return null;var l=sa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var $r=!1;if(d)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{$r=!1}function vi(t,i,o,l,c,h,M,L,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(o,Q)}catch(_e){this.onError(_e)}}var xi=!1,xr=null,Sr=!1,Gi=null,Bo={onError:function(t){xi=!0,xr=t}};function Kr(t,i,o,l,c,h,M,L,O){xi=!1,xr=null,vi.apply(Bo,arguments)}function zo(t,i,o,l,c,h,M,L,O){if(Kr.apply(this,arguments),xi){if(xi){var Q=xr;xi=!1,xr=null}else throw Error(n(198));Sr||(Sr=!0,Gi=Q)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ho(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Vo(t){if(li(t)!==t)throw Error(n(188))}function Cl(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Vo(c),t;if(h===l)return Vo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===o){M=!0,o=c,l=h;break}if(L===l){M=!0,l=c,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=c;break}if(L===l){M=!0,l=h,o=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function T(t){return t=Cl(t),t!==null?V(t):null}function V(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=V(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,W=e.unstable_shouldYield,Te=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Mt=null,pt=null;function nn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:xt,je=Math.log,qn=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(je(t)/qn|0)|0}var rn=64,Yn=4194304;function Xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ui(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~c;L!==0?l=Xt(L):(h&=M,h!==0&&(l=Xt(h)))}else M=o&~c,M!==0?l=Xt(M):h!==0&&(l=Xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),L=1<<M,O=c[M];O===-1?((L&o)===0||(L&l)!==0)&&(c[M]=Pt(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function Si(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hn(){var t=rn;return rn<<=1,(rn&4194240)===0&&(rn=64),t}function Bn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Go(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Rl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var wt=0;function kf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Bf,Pl,zf,Hf,Vf,bl=!1,Wo=[],Wi=null,Xi=null,ji=null,js=new Map,qs=new Map,qi=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Ys(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=lo(i),i!==null&&Pl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Zm(t,i,o,l,c){switch(i){case"focusin":return Wi=Ys(Wi,t,i,o,l,c),!0;case"dragenter":return Xi=Ys(Xi,t,i,o,l,c),!0;case"mouseover":return ji=Ys(ji,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return js.set(h,Ys(js.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,Ys(qs.get(h)||null,t,i,o,l,c)),!0}return!1}function Wf(t){var i=yr(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=Ho(o),i!==null){t.blockedOn=i,Vf(t.priority,function(){zf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Dl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Et=l,o.target.dispatchEvent(l),Et=null}else return i=lo(o),i!==null&&Pl(i),t.blockedOn=o,!1;i.shift()}return!0}function Xf(t,i,o){Xo(t)&&o.delete(i)}function Qm(){bl=!1,Wi!==null&&Xo(Wi)&&(Wi=null),Xi!==null&&Xo(Xi)&&(Xi=null),ji!==null&&Xo(ji)&&(ji=null),js.forEach(Xf),qs.forEach(Xf)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,bl||(bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qm)))}function Ks(t){function i(c){return $s(c,t)}if(0<Wo.length){$s(Wo[0],t);for(var o=1;o<Wo.length;o++){var l=Wo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&$s(Wi,t),Xi!==null&&$s(Xi,t),ji!==null&&$s(ji,t),js.forEach(i),qs.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)Wf(o),o.blockedOn===null&&qi.shift()}var Zr=R.ReactCurrentBatchConfig,jo=!0;function Jm(t,i,o,l){var c=wt,h=Zr.transition;Zr.transition=null;try{wt=1,Ll(t,i,o,l)}finally{wt=c,Zr.transition=h}}function eg(t,i,o,l){var c=wt,h=Zr.transition;Zr.transition=null;try{wt=4,Ll(t,i,o,l)}finally{wt=c,Zr.transition=h}}function Ll(t,i,o,l){if(jo){var c=Dl(t,i,o,l);if(c===null)$l(t,i,l,qo,o),Gf(t,l);else if(Zm(c,t,i,o,l))l.stopPropagation();else if(Gf(t,l),i&4&&-1<Km.indexOf(t)){for(;c!==null;){var h=lo(c);if(h!==null&&Bf(h),h=Dl(t,i,o,l),h===null&&$l(t,i,l,qo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else $l(t,i,l,null,o)}}var qo=null;function Dl(t,i,o,l){if(qo=null,t=H(l),t=yr(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ho(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return qo=t,null}function jf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Yi=null,Ul=null,Yo=null;function qf(){if(Yo)return Yo;var t,i=Ul,o=i.length,l,c="value"in Yi?Yi.value:Yi.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[h-l];l++);return Yo=c.slice(t,1<l?1-l:void 0)}function $o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Yf(){return!1}function bn(t){function i(o,l,c,h,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ko:Yf,this.isPropagationStopped=Yf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=bn(Qr),Zs=re({},Qr,{view:0,detail:0}),tg=bn(Zs),Nl,Fl,Qs,Zo=re({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Nl=t.screenX-Qs.screenX,Fl=t.screenY-Qs.screenY):Fl=Nl=0,Qs=t),Nl)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),$f=bn(Zo),ng=re({},Zo,{dataTransfer:0}),ig=bn(ng),rg=re({},Zs,{relatedTarget:0}),Ol=bn(rg),sg=re({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),og=bn(sg),ag=re({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lg=bn(ag),ug=re({},Qr,{data:0}),Kf=bn(ug),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=dg[t])?!!i[t]:!1}function kl(){return hg}var pg=re({},Zs,{key:function(t){if(t.key){var i=cg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mg=bn(pg),gg=re({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=bn(gg),_g=re({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),vg=bn(_g),xg=re({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sg=bn(xg),yg=re({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=bn(yg),Eg=[9,13,27,32],Bl=d&&"CompositionEvent"in window,Js=null;d&&"documentMode"in document&&(Js=document.documentMode);var Tg=d&&"TextEvent"in window&&!Js,Qf=d&&(!Bl||Js&&8<Js&&11>=Js),Jf=" ",ed=!1;function td(t,i){switch(t){case"keyup":return Eg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function wg(t,i){switch(t){case"compositionend":return nd(i);case"keypress":return i.which!==32?null:(ed=!0,Jf);case"textInput":return t=i.data,t===Jf&&ed?null:t;default:return null}}function Ag(t,i){if(Jr)return t==="compositionend"||!Bl&&td(t,i)?(t=qf(),Yo=Ul=Yi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qf&&i.locale!=="ko"?null:i.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Cg[t.type]:i==="textarea"}function rd(t,i,o,l){Pe(l),i=na(i,"onChange"),0<i.length&&(o=new Il("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var eo=null,to=null;function Rg(t){Md(t,0)}function Qo(t){var i=rs(t);if(ht(i))return t}function Pg(t,i){if(t==="change")return i}var sd=!1;if(d){var zl;if(d){var Hl="oninput"in document;if(!Hl){var od=document.createElement("div");od.setAttribute("oninput","return;"),Hl=typeof od.oninput=="function"}zl=Hl}else zl=!1;sd=zl&&(!document.documentMode||9<document.documentMode)}function ad(){eo&&(eo.detachEvent("onpropertychange",ld),to=eo=null)}function ld(t){if(t.propertyName==="value"&&Qo(to)){var i=[];rd(i,to,t,H(t)),vn(Rg,i)}}function bg(t,i,o){t==="focusin"?(ad(),eo=i,to=o,eo.attachEvent("onpropertychange",ld)):t==="focusout"&&ad()}function Lg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qo(to)}function Dg(t,i){if(t==="click")return Qo(i)}function Ug(t,i){if(t==="input"||t==="change")return Qo(i)}function Ig(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Ig;function no(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cd(t,i){var o=ud(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ud(o)}}function fd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function dd(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=bt(t.document)}return i}function Vl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ng(t){var i=dd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&fd(o.ownerDocument.documentElement,o)){if(l!==null&&Vl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=cd(o,h);var M=cd(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fg=d&&"documentMode"in document&&11>=document.documentMode,es=null,Gl=null,io=null,Wl=!1;function hd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Wl||es==null||es!==bt(l)||(l=es,"selectionStart"in l&&Vl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),io&&no(io,l)||(io=l,l=na(Gl,"onSelect"),0<l.length&&(i=new Il("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function Jo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Xl={},pd={};d&&(pd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ea(t){if(Xl[t])return Xl[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in pd)return Xl[t]=i[o];return t}var md=ea("animationend"),gd=ea("animationiteration"),_d=ea("animationstart"),vd=ea("transitionend"),xd=new Map,Sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){xd.set(t,i),u(i,[t])}for(var jl=0;jl<Sd.length;jl++){var ql=Sd[jl],Og=ql.toLowerCase(),kg=ql[0].toUpperCase()+ql.slice(1);$i(Og,"on"+kg)}$i(md,"onAnimationEnd"),$i(gd,"onAnimationIteration"),$i(_d,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(vd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function yd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,zo(l,i,void 0,t),t.currentTarget=null}function Md(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==h&&c.isPropagationStopped())break e;yd(c,L,Q),h=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,Q=L.currentTarget,L=L.listener,O!==h&&c.isPropagationStopped())break e;yd(c,L,Q),h=O}}}if(Sr)throw t=Gi,Sr=!1,Gi=null,t}function Ut(t,i){var o=i[tu];o===void 0&&(o=i[tu]=new Set);var l=t+"__bubble";o.has(l)||(Ed(i,t,2,!1),o.add(l))}function Yl(t,i,o){var l=0;i&&(l|=4),Ed(o,t,l,i)}var ta="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ta]){t[ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(Bg.has(o)||Yl(o,!1,t),Yl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ta]||(i[ta]=!0,Yl("selectionchange",!1,i))}}function Ed(t,i,o,l){switch(jf(i)){case 1:var c=Jm;break;case 4:c=eg;break;default:c=Ll}o=c.bind(null,i,o,t),c=void 0,!$r||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function $l(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===c||O.nodeType===8&&O.parentNode===c))return;M=M.return}for(;L!==null;){if(M=yr(L),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}L=L.parentNode}}l=l.return}vn(function(){var Q=h,_e=H(o),xe=[];e:{var me=xd.get(t);if(me!==void 0){var Le=Il,Be=t;switch(t){case"keypress":if($o(o)===0)break e;case"keydown":case"keyup":Le=mg;break;case"focusin":Be="focus",Le=Ol;break;case"focusout":Be="blur",Le=Ol;break;case"beforeblur":case"afterblur":Le=Ol;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=vg;break;case md:case gd:case _d:Le=og;break;case vd:Le=Sg;break;case"scroll":Le=tg;break;case"wheel":Le=Mg;break;case"copy":case"cut":case"paste":Le=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Zf}var He=(i&4)!==0,Bt=!He&&t==="scroll",j=He?me!==null?me+"Capture":null:me;He=[];for(var B=Q,q;B!==null;){q=B;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,j!==null&&(Ee=dn(B,j),Ee!=null&&He.push(oo(B,Ee,q)))),Bt)break;B=B.return}0<He.length&&(me=new Le(me,Be,null,o,_e),xe.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&o!==Et&&(Be=o.relatedTarget||o.fromElement)&&(yr(Be)||Be[yi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(Be=o.relatedTarget||o.toElement,Le=Q,Be=Be?yr(Be):null,Be!==null&&(Bt=li(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(Le=null,Be=Q),Le!==Be)){if(He=$f,Ee="onMouseLeave",j="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(He=Zf,Ee="onPointerLeave",j="onPointerEnter",B="pointer"),Bt=Le==null?me:rs(Le),q=Be==null?me:rs(Be),me=new He(Ee,B+"leave",Le,o,_e),me.target=Bt,me.relatedTarget=q,Ee=null,yr(_e)===Q&&(He=new He(j,B+"enter",Be,o,_e),He.target=q,He.relatedTarget=Bt,Ee=He),Bt=Ee,Le&&Be)t:{for(He=Le,j=Be,B=0,q=He;q;q=ns(q))B++;for(q=0,Ee=j;Ee;Ee=ns(Ee))q++;for(;0<B-q;)He=ns(He),B--;for(;0<q-B;)j=ns(j),q--;for(;B--;){if(He===j||j!==null&&He===j.alternate)break t;He=ns(He),j=ns(j)}He=null}else He=null;Le!==null&&Td(xe,me,Le,He,!1),Be!==null&&Bt!==null&&Td(xe,Bt,Be,He,!0)}}e:{if(me=Q?rs(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var Xe=Pg;else if(id(me))if(sd)Xe=Ug;else{Xe=Lg;var $e=bg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Dg);if(Xe&&(Xe=Xe(t,Q))){rd(xe,Xe,o,_e);break e}$e&&$e(t,me,Q),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Tt(me,"number",me.value)}switch($e=Q?rs(Q):window,t){case"focusin":(id($e)||$e.contentEditable==="true")&&(es=$e,Gl=Q,io=null);break;case"focusout":io=Gl=es=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,hd(xe,o,_e);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":hd(xe,o,_e)}var Ke;if(Bl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Jr?td(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(Qf&&o.locale!=="ko"&&(Jr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Jr&&(Ke=qf()):(Yi=_e,Ul="value"in Yi?Yi.value:Yi.textContent,Jr=!0)),$e=na(Q,tt),0<$e.length&&(tt=new Kf(tt,t,null,o,_e),xe.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=nd(o),Ke!==null&&(tt.data=Ke)))),(Ke=Tg?wg(t,o):Ag(t,o))&&(Q=na(Q,"onBeforeInput"),0<Q.length&&(_e=new Kf("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:Q}),_e.data=Ke))}Md(xe,i)})}function oo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function na(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=dn(t,o),h!=null&&l.unshift(oo(t,h,c)),h=dn(t,i),h!=null&&l.push(oo(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Td(t,i,o,l,c){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,O=L.alternate,Q=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&Q!==null&&(L=Q,c?(O=dn(o,h),O!=null&&M.unshift(oo(o,O,L))):c||(O=dn(o,h),O!=null&&M.push(oo(o,O,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var zg=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function wd(t){return(typeof t=="string"?t:""+t).replace(zg,`
`).replace(Hg,"")}function ia(t,i,o){if(i=wd(i),wd(t)!==i&&o)throw Error(n(425))}function ra(){}var Kl=null,Zl=null;function Ql(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(t){return Ad.resolve(null).then(t).catch(Wg)}:Jl;function Wg(t){setTimeout(function(){throw t})}function eu(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Ks(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Ks(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Cd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),ci="__reactFiber$"+is,ao="__reactProps$"+is,yi="__reactContainer$"+is,tu="__reactEvents$"+is,Xg="__reactListeners$"+is,jg="__reactHandles$"+is;function yr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Cd(t);t!==null;){if(o=t[ci])return o;t=Cd(t)}return i}t=o,o=t.parentNode}return null}function lo(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function sa(t){return t[ao]||null}var nu=[],ss=-1;function Zi(t){return{current:t}}function It(t){0>ss||(t.current=nu[ss],nu[ss]=null,ss--)}function Lt(t,i){ss++,nu[ss]=t.current,t.current=i}var Qi={},sn=Zi(Qi),Sn=Zi(!1),Mr=Qi;function os(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function yn(t){return t=t.childContextTypes,t!=null}function oa(){It(Sn),It(sn)}function Rd(t,i,o){if(sn.current!==Qi)throw Error(n(168));Lt(sn,i),Lt(Sn,o)}function Pd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Mr=sn.current,Lt(sn,t),Lt(Sn,Sn.current),!0}function bd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Pd(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,It(Sn),It(sn),Lt(sn,t)):It(Sn),Lt(Sn,o)}var Mi=null,la=!1,iu=!1;function Ld(t){Mi===null?Mi=[t]:Mi.push(t)}function qg(t){la=!0,Ld(t)}function Ji(){if(!iu&&Mi!==null){iu=!0;var t=0,i=wt;try{var o=Mi;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Mi=null,la=!1}catch(c){throw Mi!==null&&(Mi=Mi.slice(t+1)),J(ze,Ji),c}finally{wt=i,iu=!1}}return null}var as=[],ls=0,ua=null,ca=0,zn=[],Hn=0,Er=null,Ei=1,Ti="";function Tr(t,i){as[ls++]=ca,as[ls++]=ua,ua=t,ca=i}function Dd(t,i,o){zn[Hn++]=Ei,zn[Hn++]=Ti,zn[Hn++]=Er,Er=t;var l=Ei;t=Ti;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ei=1<<32-st(i)+c|o<<c|l,Ti=h+t}else Ei=1<<h|o<<c|l,Ti=t}function ru(t){t.return!==null&&(Tr(t,1),Dd(t,1,0))}function su(t){for(;t===ua;)ua=as[--ls],as[ls]=null,ca=as[--ls],as[ls]=null;for(;t===Er;)Er=zn[--Hn],zn[Hn]=null,Ti=zn[--Hn],zn[Hn]=null,Ei=zn[--Hn],zn[Hn]=null}var Ln=null,Dn=null,Nt=!1,Kn=null;function Ud(t,i){var o=Xn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Id(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ln=t,Dn=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ln=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Er!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Xn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Ln=t,Dn=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(Nt){var i=Dn;if(i){var o=i;if(!Id(t,i)){if(ou(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Ln;i&&Id(t,i)?Ud(l,o):(t.flags=t.flags&-4097|2,Nt=!1,Ln=t)}}else{if(ou(t))throw Error(n(418));t.flags=t.flags&-4097|2,Nt=!1,Ln=t}}}function Nd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function fa(t){if(t!==Ln)return!1;if(!Nt)return Nd(t),Nt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ql(t.type,t.memoizedProps)),i&&(i=Dn)){if(ou(t))throw Fd(),Error(n(418));for(;i;)Ud(t,i),i=Ki(i.nextSibling)}if(Nd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Dn=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=Ln?Ki(t.stateNode.nextSibling):null;return!0}function Fd(){for(var t=Dn;t;)t=Ki(t.nextSibling)}function us(){Dn=Ln=null,Nt=!1}function lu(t){Kn===null?Kn=[t]:Kn.push(t)}var Yg=R.ReactCurrentBatchConfig;function uo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function da(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Od(t){var i=t._init;return i(t._payload)}function kd(t){function i(j,B){if(t){var q=j.deletions;q===null?(j.deletions=[B],j.flags|=16):q.push(B)}}function o(j,B){if(!t)return null;for(;B!==null;)i(j,B),B=B.sibling;return null}function l(j,B){for(j=new Map;B!==null;)B.key!==null?j.set(B.key,B):j.set(B.index,B),B=B.sibling;return j}function c(j,B){return j=ar(j,B),j.index=0,j.sibling=null,j}function h(j,B,q){return j.index=q,t?(q=j.alternate,q!==null?(q=q.index,q<B?(j.flags|=2,B):q):(j.flags|=2,B)):(j.flags|=1048576,B)}function M(j){return t&&j.alternate===null&&(j.flags|=2),j}function L(j,B,q,Ee){return B===null||B.tag!==6?(B=Ju(q,j.mode,Ee),B.return=j,B):(B=c(B,q),B.return=j,B)}function O(j,B,q,Ee){var Xe=q.type;return Xe===U?_e(j,B,q.props.children,Ee,q.key):B!==null&&(B.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&Od(Xe)===B.type)?(Ee=c(B,q.props),Ee.ref=uo(j,B,q),Ee.return=j,Ee):(Ee=Fa(q.type,q.key,q.props,null,j.mode,Ee),Ee.ref=uo(j,B,q),Ee.return=j,Ee)}function Q(j,B,q,Ee){return B===null||B.tag!==4||B.stateNode.containerInfo!==q.containerInfo||B.stateNode.implementation!==q.implementation?(B=ec(q,j.mode,Ee),B.return=j,B):(B=c(B,q.children||[]),B.return=j,B)}function _e(j,B,q,Ee,Xe){return B===null||B.tag!==7?(B=Dr(q,j.mode,Ee,Xe),B.return=j,B):(B=c(B,q),B.return=j,B)}function xe(j,B,q){if(typeof B=="string"&&B!==""||typeof B=="number")return B=Ju(""+B,j.mode,q),B.return=j,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ee:return q=Fa(B.type,B.key,B.props,null,j.mode,q),q.ref=uo(j,null,B),q.return=j,q;case z:return B=ec(B,j.mode,q),B.return=j,B;case le:var Ee=B._init;return xe(j,Ee(B._payload),q)}if(qe(B)||oe(B))return B=Dr(B,j.mode,q,null),B.return=j,B;da(j,B)}return null}function me(j,B,q,Ee){var Xe=B!==null?B.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Xe!==null?null:L(j,B,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case ee:return q.key===Xe?O(j,B,q,Ee):null;case z:return q.key===Xe?Q(j,B,q,Ee):null;case le:return Xe=q._init,me(j,B,Xe(q._payload),Ee)}if(qe(q)||oe(q))return Xe!==null?null:_e(j,B,q,Ee,null);da(j,q)}return null}function Le(j,B,q,Ee,Xe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return j=j.get(q)||null,L(B,j,""+Ee,Xe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case ee:return j=j.get(Ee.key===null?q:Ee.key)||null,O(B,j,Ee,Xe);case z:return j=j.get(Ee.key===null?q:Ee.key)||null,Q(B,j,Ee,Xe);case le:var $e=Ee._init;return Le(j,B,q,$e(Ee._payload),Xe)}if(qe(Ee)||oe(Ee))return j=j.get(q)||null,_e(B,j,Ee,Xe,null);da(B,Ee)}return null}function Be(j,B,q,Ee){for(var Xe=null,$e=null,Ke=B,tt=B=0,Qt=null;Ke!==null&&tt<q.length;tt++){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var St=me(j,Ke,q[tt],Ee);if(St===null){Ke===null&&(Ke=Qt);break}t&&Ke&&St.alternate===null&&i(j,Ke),B=h(St,B,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=Qt}if(tt===q.length)return o(j,Ke),Nt&&Tr(j,tt),Xe;if(Ke===null){for(;tt<q.length;tt++)Ke=xe(j,q[tt],Ee),Ke!==null&&(B=h(Ke,B,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Nt&&Tr(j,tt),Xe}for(Ke=l(j,Ke);tt<q.length;tt++)Qt=Le(Ke,j,tt,q[tt],Ee),Qt!==null&&(t&&Qt.alternate!==null&&Ke.delete(Qt.key===null?tt:Qt.key),B=h(Qt,B,tt),$e===null?Xe=Qt:$e.sibling=Qt,$e=Qt);return t&&Ke.forEach(function(lr){return i(j,lr)}),Nt&&Tr(j,tt),Xe}function He(j,B,q,Ee){var Xe=oe(q);if(typeof Xe!="function")throw Error(n(150));if(q=Xe.call(q),q==null)throw Error(n(151));for(var $e=Xe=null,Ke=B,tt=B=0,Qt=null,St=q.next();Ke!==null&&!St.done;tt++,St=q.next()){Ke.index>tt?(Qt=Ke,Ke=null):Qt=Ke.sibling;var lr=me(j,Ke,St.value,Ee);if(lr===null){Ke===null&&(Ke=Qt);break}t&&Ke&&lr.alternate===null&&i(j,Ke),B=h(lr,B,tt),$e===null?Xe=lr:$e.sibling=lr,$e=lr,Ke=Qt}if(St.done)return o(j,Ke),Nt&&Tr(j,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=q.next())St=xe(j,St.value,Ee),St!==null&&(B=h(St,B,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Nt&&Tr(j,tt),Xe}for(Ke=l(j,Ke);!St.done;tt++,St=q.next())St=Le(Ke,j,tt,St.value,Ee),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),B=h(St,B,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(C_){return i(j,C_)}),Nt&&Tr(j,tt),Xe}function Bt(j,B,q,Ee){if(typeof q=="object"&&q!==null&&q.type===U&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case ee:e:{for(var Xe=q.key,$e=B;$e!==null;){if($e.key===Xe){if(Xe=q.type,Xe===U){if($e.tag===7){o(j,$e.sibling),B=c($e,q.props.children),B.return=j,j=B;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===le&&Od(Xe)===$e.type){o(j,$e.sibling),B=c($e,q.props),B.ref=uo(j,$e,q),B.return=j,j=B;break e}o(j,$e);break}else i(j,$e);$e=$e.sibling}q.type===U?(B=Dr(q.props.children,j.mode,Ee,q.key),B.return=j,j=B):(Ee=Fa(q.type,q.key,q.props,null,j.mode,Ee),Ee.ref=uo(j,B,q),Ee.return=j,j=Ee)}return M(j);case z:e:{for($e=q.key;B!==null;){if(B.key===$e)if(B.tag===4&&B.stateNode.containerInfo===q.containerInfo&&B.stateNode.implementation===q.implementation){o(j,B.sibling),B=c(B,q.children||[]),B.return=j,j=B;break e}else{o(j,B);break}else i(j,B);B=B.sibling}B=ec(q,j.mode,Ee),B.return=j,j=B}return M(j);case le:return $e=q._init,Bt(j,B,$e(q._payload),Ee)}if(qe(q))return Be(j,B,q,Ee);if(oe(q))return He(j,B,q,Ee);da(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,B!==null&&B.tag===6?(o(j,B.sibling),B=c(B,q),B.return=j,j=B):(o(j,B),B=Ju(q,j.mode,Ee),B.return=j,j=B),M(j)):o(j,B)}return Bt}var cs=kd(!0),Bd=kd(!1),ha=Zi(null),pa=null,fs=null,uu=null;function cu(){uu=fs=pa=null}function fu(t){var i=ha.current;It(ha),t._currentValue=i}function du(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){pa=t,uu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(uu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(pa===null)throw Error(n(308));fs=t,pa.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var wr=null;function hu(t){wr===null?wr=[t]:wr.push(t)}function zd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,hu(i)):(o.next=c.next,c.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,o)}return c=l.interleaved,c===null?(i.next=i,hu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,o)}function ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Rl(t,o)}}function Vd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ga(t,i,o,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var O=L,Q=O.next;O.next=null,M===null?h=Q:M.next=Q,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=Q:L.next=Q,_e.lastBaseUpdate=O))}if(h!==null){var xe=c.baseState;M=0,_e=Q=O=null,L=h;do{var me=L.lane,Le=L.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Be=t,He=L;switch(me=i,Le=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){xe=Be.call(Le,xe,me);break e}xe=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,me=typeof Be=="function"?Be.call(Le,xe,me):Be,me==null)break e;xe=re({},xe,me);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[L]:me.push(L))}else Le={eventTime:Le,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(Q=_e=Le,O=xe):_e=_e.next=Le,M|=me;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;me=L,L=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(O=xe),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Rr|=M,t.lanes=M,t.memoizedState=xe}}function Gd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var co={},fi=Zi(co),fo=Zi(co),ho=Zi(co);function Ar(t){if(t===co)throw Error(n(174));return t}function mu(t,i){switch(Lt(ho,i),Lt(fo,t),Lt(fi,co),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(fi),Lt(fi,i)}function hs(){It(fi),It(fo),It(ho)}function Wd(t){Ar(ho.current);var i=Ar(fi.current),o=Ve(i,t.type);i!==o&&(Lt(fo,t),Lt(fi,o))}function gu(t){fo.current===t&&(It(fi),It(fo))}var Ft=Zi(0);function _a(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _u=[];function vu(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var va=R.ReactCurrentDispatcher,xu=R.ReactCurrentBatchConfig,Cr=0,Ot=null,jt=null,Kt=null,xa=!1,po=!1,mo=0,$g=0;function on(){throw Error(n(321))}function Su(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function yu(t,i,o,l,c,h){if(Cr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,va.current=t===null||t.memoizedState===null?Jg:e_,t=o(l,c),po){h=0;do{if(po=!1,mo=0,25<=h)throw Error(n(301));h+=1,Kt=jt=null,i.updateQueue=null,va.current=t_,t=o(l,c)}while(po)}if(va.current=Ma,i=jt!==null&&jt.next!==null,Cr=0,Kt=jt=Ot=null,xa=!1,i)throw Error(n(300));return t}function Mu(){var t=mo!==0;return mo=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Gn(){if(jt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var i=Kt===null?Ot.memoizedState:Kt.next;if(i!==null)Kt=i,jt=t;else{if(t===null)throw Error(n(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Kt===null?Ot.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function go(t,i){return typeof i=="function"?i(t):i}function Eu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=jt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,O=null,Q=h;do{var _e=Q.lane;if((Cr&_e)===_e)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=xe,M=l):O=O.next=xe,Ot.lanes|=_e,Rr|=_e}Q=Q.next}while(Q!==null&&Q!==h);O===null?M=l:O.next=L,$n(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Rr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tu(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);$n(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Xd(){}function jd(t,i){var o=Ot,l=Gn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,Mn=!0),l=l.queue,wu($d.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Kt!==null&&Kt.memoizedState.tag&1){if(o.flags|=2048,_o(9,Yd.bind(null,o,l,c,i),void 0,null),Zt===null)throw Error(n(349));(Cr&30)!==0||qd(o,i,c)}return c}function qd(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Yd(t,i,o,l){i.value=o,i.getSnapshot=l,Kd(i)&&Zd(t)}function $d(t,i,o){return o(function(){Kd(i)&&Zd(t)})}function Kd(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function Zd(t){var i=wi(t,1);i!==null&&ei(i,t,1,-1)}function Qd(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},i.queue=t,t=t.dispatch=Qg.bind(null,Ot,t),[i.memoizedState,t]}function _o(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function Jd(){return Gn().memoizedState}function Sa(t,i,o,l){var c=di();Ot.flags|=t,c.memoizedState=_o(1|i,o,void 0,l===void 0?null:l)}function ya(t,i,o,l){var c=Gn();l=l===void 0?null:l;var h=void 0;if(jt!==null){var M=jt.memoizedState;if(h=M.destroy,l!==null&&Su(l,M.deps)){c.memoizedState=_o(i,o,h,l);return}}Ot.flags|=t,c.memoizedState=_o(1|i,o,h,l)}function eh(t,i){return Sa(8390656,8,t,i)}function wu(t,i){return ya(2048,8,t,i)}function th(t,i){return ya(4,2,t,i)}function nh(t,i){return ya(4,4,t,i)}function ih(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function rh(t,i,o){return o=o!=null?o.concat([t]):null,ya(4,4,ih.bind(null,i,t),o)}function Au(){}function sh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Su(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function oh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Su(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function ah(t,i,o){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):($n(o,i)||(o=hn(),Ot.lanes|=o,Rr|=o,t.baseState=!0),i)}function Kg(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=xu.transition;xu.transition={};try{t(!1),i()}finally{wt=o,xu.transition=l}}function lh(){return Gn().memoizedState}function Zg(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},uh(t))ch(i,o);else if(o=zd(t,i,o,l),o!==null){var c=mn();ei(o,t,l,c),fh(o,i,l)}}function Qg(t,i,o){var l=sr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(uh(t))ch(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(c.hasEagerState=!0,c.eagerState=L,$n(L,M)){var O=i.interleaved;O===null?(c.next=c,hu(i)):(c.next=O.next,O.next=c),i.interleaved=c;return}}catch{}finally{}o=zd(t,i,c,l),o!==null&&(c=mn(),ei(o,t,l,c),fh(o,i,l))}}function uh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function ch(t,i){po=xa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function fh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Rl(t,o)}}var Ma={readContext:Vn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Jg={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:eh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Sa(4194308,4,ih.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Sa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Sa(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Zg.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:Qd,useDebugValue:Au,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=Qd(!1),i=t[0];return t=Kg.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,c=di();if(Nt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Zt===null)throw Error(n(349));(Cr&30)!==0||qd(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,eh($d.bind(null,l,h,t),[t]),l.flags|=2048,_o(9,Yd.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=Zt.identifierPrefix;if(Nt){var o=Ti,l=Ei;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=$g++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},e_={readContext:Vn,useCallback:sh,useContext:Vn,useEffect:wu,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:Eu,useRef:Jd,useState:function(){return Eu(go)},useDebugValue:Au,useDeferredValue:function(t){var i=Gn();return ah(i,jt.memoizedState,t)},useTransition:function(){var t=Eu(go)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Xd,useSyncExternalStore:jd,useId:lh,unstable_isNewReconciler:!1},t_={readContext:Vn,useCallback:sh,useContext:Vn,useEffect:wu,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:nh,useMemo:oh,useReducer:Tu,useRef:Jd,useState:function(){return Tu(go)},useDebugValue:Au,useDeferredValue:function(t){var i=Gn();return jt===null?i.memoizedState=t:ah(i,jt.memoizedState,t)},useTransition:function(){var t=Tu(go)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:Xd,useSyncExternalStore:jd,useId:lh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Cu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ea={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=mn(),c=sr(t),h=Ai(l,c);h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ei(i,t,c,l),ma(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=mn(),c=sr(t),h=Ai(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,c),i!==null&&(ei(i,t,c,l),ma(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=mn(),l=sr(t),c=Ai(o,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(ei(i,t,l,o),ma(i,t,l))}};function dh(t,i,o,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!no(o,l)||!no(c,h):!0}function hh(t,i,o){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(c=yn(i)?Mr:sn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Qi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ea,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function ph(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ea.enqueueReplaceState(i,i.state,null)}function Ru(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},pu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Vn(h):(h=yn(i)?Mr:sn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Cu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ea.enqueueReplaceState(c,c.state,null),ga(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Pu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function bu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var n_=typeof WeakMap=="function"?WeakMap:Map;function mh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ba||(ba=!0,Xu=l),bu(t,i)},o}function gh(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){bu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){bu(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function _h(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new n_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=g_.bind(null,t,i,o),i.then(t,t))}function vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function xh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var i_=R.ReactCurrentOwner,Mn=!1;function pn(t,i,o,l){i.child=t===null?Bd(i,null,o,l):cs(i,t.child,o,l)}function Sh(t,i,o,l,c){o=o.render;var h=i.ref;return ds(i,c),l=yu(t,i,o,l,h,c),o=Mu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Nt&&o&&ru(i),i.flags|=1,pn(t,i,l,c),i.child)}function yh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!Qu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Mh(t,i,h,l,c)):(t=Fa(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:no,o(M,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Mh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(no(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Lu(t,i,o,l,c)}function Eh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(gs,Un),Un|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(gs,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(gs,Un),Un|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(gs,Un),Un|=l;return pn(t,i,c,o),i.child}function Th(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lu(t,i,o,l,c){var h=yn(o)?Mr:sn.current;return h=os(i,h),ds(i,c),o=yu(t,i,o,l,h,c),l=Mu(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Nt&&l&&ru(i),i.flags|=1,pn(t,i,o,c),i.child)}function wh(t,i,o,l,c){if(yn(o)){var h=!0;aa(i)}else h=!1;if(ds(i,c),i.stateNode===null)wa(t,i),hh(i,o,l),Ru(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,Q=o.contextType;typeof Q=="object"&&Q!==null?Q=Vn(Q):(Q=yn(o)?Mr:sn.current,Q=os(i,Q));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==Q)&&ph(i,M,l,Q),er=!1;var me=i.memoizedState;M.state=me,ga(i,l,M,c),O=i.memoizedState,L!==l||me!==O||Sn.current||er?(typeof _e=="function"&&(Cu(i,o,_e,l),O=i.memoizedState),(L=er||dh(i,o,L,l,me,O,Q))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=Q,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Hd(t,i),L=i.memoizedProps,Q=i.type===i.elementType?L:Zn(i.type,L),M.props=Q,xe=i.pendingProps,me=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=yn(o)?Mr:sn.current,O=os(i,O));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==O)&&ph(i,M,l,O),er=!1,me=i.memoizedState,M.state=me,ga(i,l,M,c);var Be=i.memoizedState;L!==xe||me!==Be||Sn.current||er?(typeof Le=="function"&&(Cu(i,o,Le,l),Be=i.memoizedState),(Q=er||dh(i,o,Q,l,me,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=Q):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Du(t,i,o,l,h,c)}function Du(t,i,o,l,c,h){Th(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&bd(i,o,!1),Ci(t,i,h);l=i.stateNode,i_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,L,h)):pn(t,i,L,h),i.memoizedState=l.state,c&&bd(i,o,!0),i.child}function Ah(t){var i=t.stateNode;i.pendingContext?Rd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Rd(t,i.context,!1),mu(t,i.containerInfo)}function Ch(t,i,o,l,c){return us(),lu(c),i.flags|=256,pn(t,i,o,l),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rh(t,i,o){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Lt(Ft,c&1),t===null)return au(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Oa(M,l,0,null),t=Dr(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Iu(o),i.memoizedState=Uu,t):Nu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return r_(t,i,M,l,L,c,o);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ar(c,O),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=ar(L,h):(h=Dr(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Iu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Uu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Nu(t,i){return i=Oa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ta(t,i,o,l){return l!==null&&lu(l),cs(i,t.child,null,o),t=Nu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function r_(t,i,o,l,c,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Pu(Error(n(422))),Ta(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Oa({mode:"visible",children:l.children},c,0,null),h=Dr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=Iu(M),i.memoizedState=Uu,h);if((i.mode&1)===0)return Ta(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Pu(h,l,void 0),Ta(t,i,M,l)}if(L=(M&t.childLanes)!==0,Mn||L){if(l=Zt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),ei(l,t,c,-1))}return Zu(),l=Pu(Error(n(421))),Ta(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=__.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=Ki(c.nextSibling),Ln=i,Nt=!0,Kn=null,t!==null&&(zn[Hn++]=Ei,zn[Hn++]=Ti,zn[Hn++]=Er,Ei=t.id,Ti=t.overflow,Er=i),i=Nu(i,l.children),i.flags|=4096,i)}function Ph(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),du(t.return,i,o)}function Fu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function bh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(pn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ph(t,o,i);else if(t.tag===19)Ph(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&_a(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Fu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&_a(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Fu(i,!0,o,null,h);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function wa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function s_(t,i,o){switch(i.tag){case 3:Ah(i),us();break;case 5:Wd(i);break;case 1:yn(i.type)&&aa(i);break;case 4:mu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Lt(ha,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Rh(t,i,o):(Lt(Ft,Ft.current&1),t=Ci(t,i,o),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return bh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Eh(t,i,o)}return Ci(t,i,o)}var Lh,Ou,Dh,Uh;Lh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ou=function(){},Dh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Ar(fi.current);var h=null;switch(o){case"input":c=X(t,c),l=X(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=E(t,c),l=E(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ra)}ct(o,l);var M;o=null;for(Q in c)if(!l.hasOwnProperty(Q)&&c.hasOwnProperty(Q)&&c[Q]!=null)if(Q==="style"){var L=c[Q];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(a.hasOwnProperty(Q)?h||(h=[]):(h=h||[]).push(Q,null));for(Q in l){var O=l[Q];if(L=c!=null?c[Q]:void 0,l.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(Q,o)),o=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(a.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&Ut("scroll",t),h||L===O||(h=[])):(h=h||[]).push(Q,O))}o&&(h=h||[]).push("style",o);var Q=h;(i.updateQueue=Q)&&(i.flags|=4)}},Uh=function(t,i,o,l){o!==l&&(i.flags|=4)};function vo(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function o_(t,i,o){var l=i.pendingProps;switch(su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return yn(i.type)&&oa(),an(i),null;case 3:return l=i.stateNode,hs(),It(Sn),It(sn),vu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(fa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kn!==null&&(Yu(Kn),Kn=null))),Ou(t,i),an(i),null;case 5:gu(i);var c=Ar(ho.current);if(o=i.type,t!==null&&i.stateNode!=null)Dh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return an(i),null}if(t=Ar(fi.current),fa(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[ao]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<ro.length;c++)Ut(ro[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":fn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Y(l,h),Ut("invalid",l)}ct(o,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&ia(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&ia(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":At(l),Ye(l,h,!0);break;case"textarea":At(l),ge(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ra)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[ao]=l,Lh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<ro.length;c++)Ut(ro[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":fn(t,l),c=X(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Y(t,l),c=E(t,l),Ut("invalid",t);break;default:c=l}ct(o,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ie(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&D(t,h,O,M))}switch(o){case"input":At(t),Ye(t,l,!1);break;case"textarea":At(t),ge(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ra)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return an(i),null;case 6:if(t&&i.stateNode!=null)Uh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ar(ho.current),Ar(fi.current),fa(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Ln,t!==null))switch(t.tag){case 3:ia(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return an(i),null;case 13:if(It(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Nt&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Fd(),us(),i.flags|=98560,h=!1;else if(h=fa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else Kn!==null&&(Yu(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?qt===0&&(qt=3):Zu())),i.updateQueue!==null&&(i.flags|=4),an(i),null);case 4:return hs(),Ou(t,i),t===null&&so(i.stateNode.containerInfo),an(i),null;case 10:return fu(i.type._context),an(i),null;case 17:return yn(i.type)&&oa(),an(i),null;case 19:if(It(Ft),h=i.memoizedState,h===null)return an(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)vo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=_a(t),M!==null){for(i.flags|=128,vo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>_s&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304)}else{if(!l)if(t=_a(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),vo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Nt)return an(i),null}else 2*Me()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ft.current,Lt(Ft,l?o&1|2:o&1),i):(an(i),null);case 22:case 23:return Ku(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function a_(t,i){switch(su(i),i.tag){case 1:return yn(i.type)&&oa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),It(Sn),It(sn),vu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return gu(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return hs(),null;case 10:return fu(i.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var Aa=!1,ln=!1,l_=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function ku(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Ih=!1;function u_(t,i){if(Kl=jo,t=dd(),Vl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,O=-1,Q=0,_e=0,xe=t,me=null;t:for(;;){for(var Le;xe!==o||c!==0&&xe.nodeType!==3||(L=M+c),xe!==h||l!==0&&xe.nodeType!==3||(O=M+l),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===t)break t;if(me===o&&++Q===c&&(L=M),me===h&&++_e===l&&(O=M),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zl={focusedElem:t,selectionRange:o},jo=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Bt=Be.memoizedState,j=i.stateNode,B=j.getSnapshotBeforeUpdate(i.elementType===i.type?He:Zn(i.type,He),Bt);j.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){kt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return Be=Ih,Ih=!1,Be}function xo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ku(i,o,h)}c=c.next}while(c!==l)}}function Ca(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Bu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Nh(t){var i=t.alternate;i!==null&&(t.alternate=null,Nh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[ao],delete i[tu],delete i[Xg],delete i[jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fh(t){return t.tag===5||t.tag===3||t.tag===4}function Oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ra));else if(l!==4&&(t=t.child,t!==null))for(zu(t,i,o),t=t.sibling;t!==null;)zu(t,i,o),t=t.sibling}function Hu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Hu(t,i,o),t=t.sibling;t!==null;)Hu(t,i,o),t=t.sibling}var en=null,Qn=!1;function nr(t,i,o){for(o=o.child;o!==null;)kh(t,i,o),o=o.sibling}function kh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Mt,o)}catch{}switch(o.tag){case 5:ln||ms(o,i);case 6:var l=en,c=Qn;en=null,nr(t,i,o),en=l,Qn=c,en!==null&&(Qn?(t=en,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):en.removeChild(o.stateNode));break;case 18:en!==null&&(Qn?(t=en,o=o.stateNode,t.nodeType===8?eu(t.parentNode,o):t.nodeType===1&&eu(t,o),Ks(t)):eu(en,o.stateNode));break;case 4:l=en,c=Qn,en=o.stateNode.containerInfo,Qn=!0,nr(t,i,o),en=l,Qn=c;break;case 0:case 11:case 14:case 15:if(!ln&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&ku(o,i,M),c=c.next}while(c!==l)}nr(t,i,o);break;case 1:if(!ln&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){kt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(ln=(l=ln)||o.memoizedState!==null,nr(t,i,o),ln=l):nr(t,i,o);break;default:nr(t,i,o)}}function Bh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new l_),i.forEach(function(l){var c=v_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:en=L.stateNode,Qn=!1;break e;case 3:en=L.stateNode.containerInfo,Qn=!0;break e;case 4:en=L.stateNode.containerInfo,Qn=!0;break e}L=L.return}if(en===null)throw Error(n(160));kh(h,M,c),en=null,Qn=!1;var O=c.alternate;O!==null&&(O.return=null),c.return=null}catch(Q){kt(c,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zh(i,t),i=i.sibling}function zh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),hi(t),l&4){try{xo(3,t,t.return),Ca(3,t)}catch(He){kt(t,t.return,He)}try{xo(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:Jn(i,t),hi(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(Jn(i,t),hi(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&dt(c,h),it(L,M);var Q=it(L,h);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?Je(c,xe):_e==="dangerouslySetInnerHTML"?Ie(c,xe):_e==="children"?lt(c,xe):D(c,_e,xe,Q)}switch(L){case"input":ut(c,h);break;case"textarea":pe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[ao]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(Jn(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(Jn(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ks(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:Jn(i,t),hi(t);break;case 13:Jn(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Wu=Me())),l&4&&Bh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(ln=(Q=ln)||_e,Jn(i,t),ln=Q):Jn(i,t),hi(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!_e&&(t.mode&1)!==0)for(Ne=t,_e=t.child;_e!==null;){for(xe=Ne=_e;Ne!==null;){switch(me=Ne,Le=me.child,me.tag){case 0:case 11:case 14:case 15:xo(4,me,me.return);break;case 1:ms(me,me.return);var Be=me.stateNode;if(typeof Be.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,o,He)}}break;case 5:ms(me,me.return);break;case 22:if(me.memoizedState!==null){Gh(xe);continue}}Le!==null?(Le.return=me,Ne=Le):Gh(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{c=xe.stateNode,Q?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=Qe("display",M))}catch(He){kt(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(He){kt(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:Jn(i,t),hi(t),l&4&&Bh(t);break;case 21:break;default:Jn(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Fh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var h=Oh(t);Hu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Oh(t);zu(t,L,M);break;default:throw Error(n(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c_(t,i,o){Ne=t,Hh(t)}function Hh(t,i,o){for(var l=(t.mode&1)!==0;Ne!==null;){var c=Ne,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Aa;if(!M){var L=c.alternate,O=L!==null&&L.memoizedState!==null||ln;L=Aa;var Q=ln;if(Aa=M,(ln=O)&&!Q)for(Ne=c;Ne!==null;)M=Ne,O=M.child,M.tag===22&&M.memoizedState!==null?Wh(c):O!==null?(O.return=M,Ne=O):Wh(c);for(;h!==null;)Ne=h,Hh(h),h=h.sibling;Ne=c,Aa=L,ln=Q}Vh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ne=h):Vh(t)}}function Vh(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ln||Ca(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!ln)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Gd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Gd(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Ks(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||i.flags&512&&Bu(i)}catch(me){kt(i,i.return,me)}}if(i===t){Ne=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function Gh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ne=o;break}Ne=i.return}}function Wh(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ca(4,i)}catch(O){kt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(O){kt(i,c,O)}}var h=i.return;try{Bu(i)}catch(O){kt(i,h,O)}break;case 5:var M=i.return;try{Bu(i)}catch(O){kt(i,M,O)}}}catch(O){kt(i,i.return,O)}if(i===t){Ne=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Ne=L;break}Ne=i.return}}var f_=Math.ceil,Ra=R.ReactCurrentDispatcher,Vu=R.ReactCurrentOwner,Wn=R.ReactCurrentBatchConfig,_t=0,Zt=null,Ht=null,tn=0,Un=0,gs=Zi(0),qt=0,So=null,Rr=0,Pa=0,Gu=0,yo=null,En=null,Wu=0,_s=1/0,Ri=null,ba=!1,Xu=null,ir=null,La=!1,rr=null,Da=0,Mo=0,ju=null,Ua=-1,Ia=0;function mn(){return(_t&6)!==0?Me():Ua!==-1?Ua:Ua=Me()}function sr(t){return(t.mode&1)===0?1:(_t&2)!==0&&tn!==0?tn&-tn:Yg.transition!==null?(Ia===0&&(Ia=hn()),Ia):(t=wt,t!==0||(t=window.event,t=t===void 0?16:jf(t.type)),t)}function ei(t,i,o,l){if(50<Mo)throw Mo=0,ju=null,Error(n(185));xn(t,o,l),((_t&2)===0||t!==Zt)&&(t===Zt&&((_t&2)===0&&(Pa|=o),qt===4&&or(t,tn)),Tn(t,l),o===1&&_t===0&&(i.mode&1)===0&&(_s=Me()+500,la&&Ji()))}function Tn(t,i){var o=t.callbackNode;kn(t,i);var l=ui(t,t===Zt?tn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?qg(jh.bind(null,t)):Ld(jh.bind(null,t)),Gg(function(){(_t&6)===0&&Ji()}),o=null;else{switch(kf(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=ep(o,Xh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Xh(t,i){if(Ua=-1,Ia=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(vs()&&t.callbackNode!==o)return null;var l=ui(t,t===Zt?tn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Na(t,l);else{i=l;var c=_t;_t|=2;var h=Yh();(Zt!==t||tn!==i)&&(Ri=null,_s=Me()+500,br(t,i));do try{p_();break}catch(L){qh(t,L)}while(!0);cu(),Ra.current=h,_t=c,Ht!==null?i=0:(Zt=null,tn=0,i=qt)}if(i!==0){if(i===2&&(c=Si(t),c!==0&&(l=c,i=qu(t,c))),i===1)throw o=So,br(t,0),or(t,l),Tn(t,Me()),o;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!d_(c)&&(i=Na(t,l),i===2&&(h=Si(t),h!==0&&(l=h,i=qu(t,h))),i===1))throw o=So,br(t,0),or(t,l),Tn(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Lr(t,En,Ri);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Wu+500-Me(),10<i)){if(ui(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Jl(Lr.bind(null,t,En,Ri),i);break}Lr(t,En,Ri);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*f_(l/1960))-l,10<l){t.timeoutHandle=Jl(Lr.bind(null,t,En,Ri),l);break}Lr(t,En,Ri);break;case 5:Lr(t,En,Ri);break;default:throw Error(n(329))}}}return Tn(t,Me()),t.callbackNode===o?Xh.bind(null,t):null}function qu(t,i){var o=yo;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Na(t,i),t!==2&&(i=En,En=o,i!==null&&Yu(i)),t}function Yu(t){En===null?En=t:En.push.apply(En,t)}function d_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Gu,i&=~Pa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function jh(t){if((_t&6)!==0)throw Error(n(327));vs();var i=ui(t,0);if((i&1)===0)return Tn(t,Me()),null;var o=Na(t,i);if(t.tag!==0&&o===2){var l=Si(t);l!==0&&(i=l,o=qu(t,l))}if(o===1)throw o=So,br(t,0),or(t,i),Tn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Lr(t,En,Ri),Tn(t,Me()),null}function $u(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(_s=Me()+500,la&&Ji())}}function Pr(t){rr!==null&&rr.tag===0&&(_t&6)===0&&vs();var i=_t;_t|=1;var o=Wn.transition,l=wt;try{if(Wn.transition=null,wt=1,t)return t()}finally{wt=l,Wn.transition=o,_t=i,(_t&6)===0&&Ji()}}function Ku(){Un=gs.current,It(gs)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Vg(o)),Ht!==null)for(o=Ht.return;o!==null;){var l=o;switch(su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&oa();break;case 3:hs(),It(Sn),It(sn),vu();break;case 5:gu(l);break;case 4:hs();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:fu(l.type._context);break;case 22:case 23:Ku()}o=o.return}if(Zt=t,Ht=t=ar(t.current,null),tn=Un=i,qt=0,So=null,Gu=Pa=Rr=0,En=yo=null,wr!==null){for(i=0;i<wr.length;i++)if(o=wr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}o.pending=l}wr=null}return t}function qh(t,i){do{var o=Ht;try{if(cu(),va.current=Ma,xa){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}xa=!1}if(Cr=0,Kt=jt=Ot=null,po=!1,mo=0,Vu.current=null,o===null||o.return===null){qt=1,So=i,Ht=null;break}e:{var h=t,M=o.return,L=o,O=i;if(i=tn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=vh(M);if(Le!==null){Le.flags&=-257,xh(Le,M,L,h,i),Le.mode&1&&_h(h,Q,i),i=Le,O=Q;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){_h(h,Q,i),Zu();break e}O=Error(n(426))}}else if(Nt&&L.mode&1){var Bt=vh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),xh(Bt,M,L,h,i),lu(ps(O,L));break e}}h=O=ps(O,L),qt!==4&&(qt=2),yo===null?yo=[h]:yo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=mh(h,O,i);Vd(h,j);break e;case 1:L=O;var B=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(ir===null||!ir.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=gh(h,L,i);Vd(h,Ee);break e}}h=h.return}while(h!==null)}Kh(o)}catch(Xe){i=Xe,Ht===o&&o!==null&&(Ht=o=o.return);continue}break}while(!0)}function Yh(){var t=Ra.current;return Ra.current=Ma,t===null?Ma:t}function Zu(){(qt===0||qt===3||qt===2)&&(qt=4),Zt===null||(Rr&268435455)===0&&(Pa&268435455)===0||or(Zt,tn)}function Na(t,i){var o=_t;_t|=2;var l=Yh();(Zt!==t||tn!==i)&&(Ri=null,br(t,i));do try{h_();break}catch(c){qh(t,c)}while(!0);if(cu(),_t=o,Ra.current=l,Ht!==null)throw Error(n(261));return Zt=null,tn=0,qt}function h_(){for(;Ht!==null;)$h(Ht)}function p_(){for(;Ht!==null&&!W();)$h(Ht)}function $h(t){var i=Jh(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?Kh(t):Ht=i,Vu.current=null}function Kh(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=o_(o,i,Un),o!==null){Ht=o;return}}else{if(o=a_(o,i),o!==null){o.flags&=32767,Ht=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=t}while(i!==null);qt===0&&(qt=5)}function Lr(t,i,o){var l=wt,c=Wn.transition;try{Wn.transition=null,wt=1,m_(t,i,o,l)}finally{Wn.transition=c,wt=l}return null}function m_(t,i,o,l){do vs();while(rr!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Go(t,h),t===Zt&&(Ht=Zt=null,tn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||La||(La=!0,ep(nt,function(){return vs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Wn.transition,Wn.transition=null;var M=wt;wt=1;var L=_t;_t|=4,Vu.current=null,u_(t,o),zh(o,t),Ng(Zl),jo=!!Kl,Zl=Kl=null,t.current=o,c_(o),Te(),_t=L,wt=M,Wn.transition=h}else t.current=o;if(La&&(La=!1,rr=t,Da=c),h=t.pendingLanes,h===0&&(ir=null),nn(o.stateNode),Tn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(ba)throw ba=!1,t=Xu,Xu=null,t;return(Da&1)!==0&&t.tag!==0&&vs(),h=t.pendingLanes,(h&1)!==0?t===ju?Mo++:(Mo=0,ju=t):Mo=0,Ji(),null}function vs(){if(rr!==null){var t=kf(Da),i=Wn.transition,o=wt;try{if(Wn.transition=null,wt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Da=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,Ne=t.current;Ne!==null;){var h=Ne,M=h.child;if((Ne.flags&16)!==0){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(Ne=Q;Ne!==null;){var _e=Ne;switch(_e.tag){case 0:case 11:case 15:xo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Ne=xe;else for(;Ne!==null;){_e=Ne;var me=_e.sibling,Le=_e.return;if(Nh(_e),_e===Q){Ne=null;break}if(me!==null){me.return=Le,Ne=me;break}Ne=Le}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Bt=He.sibling;He.sibling=null,He=Bt}while(He!==null)}}Ne=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ne=M;else e:for(;Ne!==null;){if(h=Ne,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:xo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Ne=j;break e}Ne=h.return}}var B=t.current;for(Ne=B;Ne!==null;){M=Ne;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Ne=q;else e:for(M=B;Ne!==null;){if(L=Ne,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ca(9,L)}}catch(Xe){kt(L,L.return,Xe)}if(L===M){Ne=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Ne=Ee;break e}Ne=L.return}}if(_t=c,Ji(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{wt=o,Wn.transition=i}}return!1}function Zh(t,i,o){i=ps(o,i),i=mh(t,i,1),t=tr(t,i,1),i=mn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,o){if(t.tag===3)Zh(t,t,o);else for(;i!==null;){if(i.tag===3){Zh(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(o,t),t=gh(i,t,1),i=tr(i,t,1),t=mn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function g_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&o,Zt===t&&(tn&o)===o&&(qt===4||qt===3&&(tn&130023424)===tn&&500>Me()-Wu?br(t,0):Gu|=o),Tn(t,i)}function Qh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Yn,Yn<<=1,(Yn&130023424)===0&&(Yn=4194304)));var o=mn();t=wi(t,i),t!==null&&(xn(t,i,o),Tn(t,o))}function __(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Qh(t,o)}function v_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Qh(t,o)}var Jh;Jh=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Sn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,s_(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Nt&&(i.flags&1048576)!==0&&Dd(i,ca,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;wa(t,i),t=i.pendingProps;var c=os(i,sn.current);ds(i,o),c=yu(null,i,l,t,c,o);var h=Mu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yn(l)?(h=!0,aa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,pu(i),c.updater=Ea,i.stateNode=c,c._reactInternals=i,Ru(i,l,t,o),i=Du(null,i,l,!0,h,o)):(i.tag=0,Nt&&h&&ru(i),pn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(wa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=S_(l),t=Zn(l,t),c){case 0:i=Lu(null,i,l,t,o);break e;case 1:i=wh(null,i,l,t,o);break e;case 11:i=Sh(null,i,l,t,o);break e;case 14:i=yh(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Lu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),wh(t,i,l,c,o);case 3:e:{if(Ah(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Hd(t,i),ga(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Ch(t,i,l,o,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Ch(t,i,l,o,c);break e}else for(Dn=Ki(i.stateNode.containerInfo.firstChild),Ln=i,Nt=!0,Kn=null,o=Bd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===c){i=Ci(t,i,o);break e}pn(t,i,l,o)}i=i.child}return i;case 5:return Wd(i),t===null&&au(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,Ql(l,c)?M=null:h!==null&&Ql(l,h)&&(i.flags|=32),Th(t,i),pn(t,i,M,o),i.child;case 6:return t===null&&au(i),null;case 13:return Rh(t,i,o);case 4:return mu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):pn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),Sh(t,i,l,c,o);case 7:return pn(t,i,i.pendingProps,o),i.child;case 8:return pn(t,i,i.pendingProps.children,o),i.child;case 12:return pn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Lt(ha,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===c.children&&!Sn.current){i=Ci(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Ai(-1,o&-o),O.tag=2;var Q=h.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),Q.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),du(h.return,o,i),L.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),du(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}pn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,o),c=Vn(c),l=l(c),i.flags|=1,pn(t,i,l,o),i.child;case 14:return l=i.type,c=Zn(l,i.pendingProps),c=Zn(l.type,c),yh(t,i,l,c,o);case 15:return Mh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Zn(l,c),wa(t,i),i.tag=1,yn(l)?(t=!0,aa(i)):t=!1,ds(i,o),hh(i,l,c),Ru(i,l,c,o),Du(null,i,l,!0,t,o);case 19:return bh(t,i,o);case 22:return Eh(t,i,o)}throw Error(n(156,i.tag))};function ep(t,i){return J(t,i)}function x_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,i,o,l){return new x_(t,i,o,l)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S_(t){if(typeof t=="function")return Qu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===de)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=Xn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Fa(t,i,o,l,c,h){var M=2;if(l=t,typeof t=="function")Qu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Dr(o.children,c,h,i);case G:M=8,c|=8;break;case P:return t=Xn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case $:return t=Xn(13,o,i,c),t.elementType=$,t.lanes=h,t;case ae:return t=Xn(19,o,i,c),t.elementType=ae,t.lanes=h,t;case ue:return Oa(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case F:M=9;break e;case Z:M=11;break e;case de:M=14;break e;case le:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Xn(M,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Dr(t,i,o,l){return t=Xn(7,t,l,i),t.lanes=o,t}function Oa(t,i,o,l){return t=Xn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function Ju(t,i,o){return t=Xn(6,t,null,i),t.lanes=o,t}function ec(t,i,o){return i=Xn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function y_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function tc(t,i,o,l,c,h,M,L,O){return t=new y_(t,i,o,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(h),t}function M_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function tp(t){if(!t)return Qi;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yn(o))return Pd(t,o,i)}return i}function np(t,i,o,l,c,h,M,L,O){return t=tc(o,l,!0,t,c,h,M,L,O),t.context=tp(null),o=t.current,l=mn(),c=sr(o),h=Ai(l,c),h.callback=i??null,tr(o,h,c),t.current.lanes=c,xn(t,c,l),Tn(t,l),t}function ka(t,i,o,l){var c=i.current,h=mn(),M=sr(c);return o=tp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,M),t!==null&&(ei(t,c,M,h),ma(t,c,M)),M}function Ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function nc(t,i){ip(t,i),(t=t.alternate)&&ip(t,i)}function E_(){return null}var rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}za.prototype.render=ic.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ka(t,i,null,null)},za.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Pr(function(){ka(null,t,null,null)}),i[yi]=null}};function za(t){this._internalRoot=t}za.prototype.unstable_scheduleHydration=function(t){if(t){var i=Hf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&Wf(t)}};function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ha(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function T_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var Q=Ba(M);h.call(Q)}}var M=np(i,l,t,0,null,!1,!1,"",sp);return t._reactRootContainer=M,t[yi]=M.current,so(t.nodeType===8?t.parentNode:t),Pr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var Q=Ba(O);L.call(Q)}}var O=tc(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=O,t[yi]=O.current,so(t.nodeType===8?t.parentNode:t),Pr(function(){ka(i,O,o,l)}),O}function Va(t,i,o,l,c){var h=o._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var O=Ba(M);L.call(O)}}ka(i,M,t,c)}else M=T_(o,i,t,c,l);return Ba(M)}Bf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Xt(i.pendingLanes);o!==0&&(Rl(i,o|1),Tn(i,Me()),(_t&6)===0&&(_s=Me()+500,Ji()))}break;case 13:Pr(function(){var l=wi(t,1);if(l!==null){var c=mn();ei(l,t,1,c)}}),nc(t,1)}},Pl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=mn();ei(i,t,134217728,o)}nc(t,134217728)}},zf=function(t){if(t.tag===13){var i=sr(t),o=wi(t,i);if(o!==null){var l=mn();ei(o,t,i,l)}nc(t,i)}},Hf=function(){return wt},Vf=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=sa(l);if(!c)throw Error(n(90));ht(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Dt=$u,Wt=Pr;var w_={usingClientEntryPoint:!1,Events:[lo,rs,sa,Pe,rt,$u]},Eo={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A_={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||E_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Mt=Ga.inject(A_),pt=Ga}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w_,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(i))throw Error(n(200));return M_(t,i,null,o)},wn.createRoot=function(t,i){if(!rc(t))throw Error(n(299));var o=!1,l="",c=rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=tc(t,1,!1,null,null,o,!1,l,c),t[yi]=i.current,so(t.nodeType===8?t.parentNode:t),new ic(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=T(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Pr(t)},wn.hydrate=function(t,i,o){if(!Ha(i))throw Error(n(200));return Va(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!rc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",M=rp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=np(i,null,t,1,o??null,c,!1,h,M),t[yi]=i.current,so(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new za(i)},wn.render=function(t,i,o){if(!Ha(i))throw Error(n(200));return Va(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Ha(t))throw Error(n(40));return t._reactRootContainer?(Pr(function(){Va(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},wn.unstable_batchedUpdates=$u,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ha(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Va(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var hp;function N_(){if(hp)return ac.exports;hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ac.exports=I_(),ac.exports}var pp;function F_(){if(pp)return Wa;pp=1;var s=N_();return Wa.createRoot=s.createRoot,Wa.hydrateRoot=s.hydrateRoot,Wa}var O_=F_();const k_=mm(O_),B_=[{label:"About",href:"#about"},{label:"Tech Stack",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}],z_=[{label:"LinkedIn",href:"https://www.linkedin.com/in/giacomoimpoco/",icon:"/assets/linkedin.png"},{label:"GitHub",href:"https://github.com/gimpoco1",icon:"/assets/github.png"}],H_=["HTML","CSS","React","JavaScript","TypeScript","Next JS","Chakra UI","TailwindCSS"],V_=["Node JS","NestJS","PostgreSQL","Express/KOA","Git CD/CI","MongoDB","Redux","AWS"],G_=[{title:"Building Construction Website",image:"/assets/mpkbuildings.png",github:"https://github.com/gimpoco1/mpk-buildings",demo:"https://mpkbuildings.com/"},{title:"Market Place",image:"/assets/marketplace.png",github:"https://github.com/gimpoco1/market-place",demo:"https://treasure-ireland.vercel.app/"},{title:"Level Up Game",image:"/assets/levelup.png",github:"https://github.com/gimpoco1/Level-Up"}],W_=2022,mp=[{name:"Aurora",colors:["#ffb600","#715cff","#0ebeff","#ff4e92"],rotation:45,speed:.25,warpStrength:1.2,frequency:1},{name:"Neon Sands",colors:["#ff6347","#ffc857","#57ebff","#785cff"],rotation:35,speed:.22,warpStrength:1.1,frequency:1.2},{name:"Laser Bloom",colors:["#ff005c","#fff45e","#00b2ff","#6b00ff"],rotation:60,speed:.28,warpStrength:1.3,frequency:1.1},{name:"Prism",colors:["#ffa900","#ffffff","#00e0ff","#965cff"],rotation:25,speed:.2,warpStrength:1,frequency:.9}];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pf="170",X_=0,gp=1,j_=2,gm=1,q_=2,Ii=3,vr=0,Rn=1,Ni=2,gr=0,Is=1,_p=2,vp=3,xp=4,Y_=5,Hr=100,$_=101,K_=102,Z_=103,Q_=104,J_=200,ev=201,tv=202,nv=203,zc=204,Hc=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=211,uv=212,cv=213,fv=214,Vc=0,Gc=1,Wc=2,Os=3,Xc=4,jc=5,qc=6,Yc=7,_m=0,dv=1,hv=2,_r=0,pv=1,mv=2,gv=3,_v=4,vv=5,xv=6,Sv=7,vm=300,ks=301,Bs=302,$c=303,Kc=304,Ml=306,Zc=1e3,Gr=1001,Qc=1002,ai=1003,yv=1004,Xa=1005,mi=1006,cc=1007,Wr=1008,Bi=1009,xm=1010,Sm=1011,Do=1012,bf=1013,jr=1014,Fi=1015,Uo=1016,Lf=1017,Df=1018,zs=1020,ym=35902,Mm=1021,Em=1022,oi=1023,Tm=1024,wm=1025,Ns=1026,Hs=1027,Am=1028,Uf=1029,Cm=1030,If=1031,Nf=1033,hl=33776,pl=33777,ml=33778,gl=33779,Jc=35840,ef=35841,tf=35842,nf=35843,rf=36196,sf=37492,of=37496,af=37808,lf=37809,uf=37810,cf=37811,ff=37812,df=37813,hf=37814,pf=37815,mf=37816,gf=37817,_f=37818,vf=37819,xf=37820,Sf=37821,_l=36492,yf=36494,Mf=36495,Rm=36283,Ef=36284,Tf=36285,wf=36286,Mv=3200,Ev=3201,Tv=0,wv=1,mr="",Fn="srgb",Gs="srgb-linear",El="linear",Ct="srgb",xs=7680,Sp=519,Av=512,Cv=513,Rv=514,Pm=515,Pv=516,bv=517,Lv=518,Dv=519,yp=35044,Mp="300 es",Oi=2e3,Sl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,Af=180/Math.PI;function Io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function Uv(s,e){return(s%e+e)%e}function dc(s,e,n){return(1-n)*s+n*e}function wo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],v=r[2],y=r[5],w=r[8],C=a[0],S=a[3],g=a[6],N=a[1],D=a[4],R=a[7],ee=a[2],z=a[5],U=a[8];return u[0]=f*C+d*N+p*ee,u[3]=f*S+d*D+p*z,u[6]=f*g+d*R+p*U,u[1]=m*C+_*N+x*ee,u[4]=m*S+_*D+x*z,u[7]=m*g+_*R+x*U,u[2]=v*C+y*N+w*ee,u[5]=v*S+y*D+w*z,u[8]=v*g+y*R+w*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*f-d*m,v=d*p-_*u,y=m*u-f*p,w=n*x+r*v+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=x*C,e[1]=(a*m-_*r)*C,e[2]=(d*r-a*f)*C,e[3]=v*C,e[4]=(_*n-a*p)*C,e[5]=(a*u-d*n)*C,e[6]=y*C,e[7]=(r*p-m*n)*C,e[8]=(f*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new ot;function bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Iv(){const s=yl("canvas");return s.style.display="block",s}const Ep={};function bo(s){s in Ep||(Ep[s]=!0,console.warn(s))}function Nv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Fv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ov(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ct&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ct&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mr?El:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Tp=[.64,.33,.3,.6,.15,.06],wp=[.2126,.7152,.0722],Ap=[.3127,.329],Cp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Gs]:{primaries:Tp,whitePoint:Ap,transfer:El,toXYZ:Cp,fromXYZ:Rp,luminanceCoefficients:wp,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Tp,whitePoint:Ap,transfer:Ct,toXYZ:Cp,fromXYZ:Rp,luminanceCoefficients:wp,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});let Ss;class kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=yl("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=ki(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ki(n[r]/255)*255):n[r]=ki(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bv=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(pc(a[f].image)):u.push(pc(a[f]))}else u=pc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class Pn extends Ws{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Gr,a=Gr,u=mi,f=Wr,d=oi,p=Bi,m=Pn.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Io(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zc:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zc:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=vm;Pn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],v=p[1],y=p[5],w=p[9],C=p[2],S=p[6],g=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-C)<.01&&Math.abs(w-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+C)<.1&&Math.abs(w+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,R=(y+1)/2,ee=(g+1)/2,z=(_+v)/4,U=(x+C)/4,G=(w+S)/4;return D>R&&D>ee?D<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(D),a=z/r,u=U/r):R>ee?R<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(R),r=z/a,u=G/a):ee<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(ee),r=U/u,a=G/u),this.set(r,a,u,n),this}let N=Math.sqrt((S-w)*(S-w)+(x-C)*(x-C)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(S-w)/N,this.y=(x-C)/N,this.z=(v-_)/N,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hv extends Ws{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Lm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Hv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dm extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vv extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const v=u[f+0],y=u[f+1],w=u[f+2],C=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=v,e[n+1]=y,e[n+2]=w,e[n+3]=C;return}if(x!==C||p!==v||m!==y||_!==w){let S=1-d;const g=p*v+m*y+_*w+x*C,N=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const ee=Math.sqrt(D),z=Math.atan2(ee,g*N);S=Math.sin(S*z)/ee,d=Math.sin(d*z)/ee}const R=d*N;if(p=p*S+v*R,m=m*S+y*R,_=_*S+w*R,x=x*S+C*R,S===1-d){const ee=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=ee,m*=ee,_*=ee,x*=ee}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[f],v=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+_*x+p*y-m*v,e[n+1]=p*w+_*v+m*x-d*y,e[n+2]=m*w+_*y+d*v-p*x,e[n+3]=_*w-d*x-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),v=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=v*_*x+m*y*w,this._y=m*y*x-v*_*w,this._z=m*_*w+v*y*x,this._w=m*_*x-v*y*w;break;case"YXZ":this._x=v*_*x+m*y*w,this._y=m*y*x-v*_*w,this._z=m*_*w-v*y*x,this._w=m*_*x+v*y*w;break;case"ZXY":this._x=v*_*x-m*y*w,this._y=m*y*x+v*_*w,this._z=m*_*w+v*y*x,this._w=m*_*x-v*y*w;break;case"ZYX":this._x=v*_*x-m*y*w,this._y=m*y*x+v*_*w,this._z=m*_*w-v*y*x,this._w=m*_*x+v*y*w;break;case"YZX":this._x=v*_*x+m*y*w,this._y=m*y*x+v*_*w,this._z=m*_*w-v*y*x,this._w=m*_*x-v*y*w;break;case"XZY":this._x=v*_*x-m*y*w,this._y=m*y*x-v*_*w,this._z=m*_*w+v*y*x,this._w=m*_*x+v*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(_-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,v=Math.sin(n*_)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=a*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*_,this.y=r+p*_+d*m-u*x,this.z=a+p*x+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new ie,Pp=new No;class Fo{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ti):ti.fromBufferAttribute(u,f),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ja.copy(r.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),qa.subVectors(this.max,Ao),ys.subVectors(e.a,Ao),Ms.subVectors(e.b,Ao),Es.subVectors(e.c,Ao),ur.subVectors(Ms,ys),cr.subVectors(Es,Ms),Ur.subVectors(ys,Es);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!gc(n,ys,Ms,Es,qa)||(n=[1,0,0,0,1,0,0,0,1],!gc(n,ys,Ms,Es,qa))?!1:(Ya.crossVectors(ur,cr),n=[Ya.x,Ya.y,Ya.z],gc(n,ys,Ms,Es,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ti=new ie,ja=new Fo,ys=new ie,Ms=new ie,Es=new ie,ur=new ie,cr=new ie,Ur=new ie,Ao=new ie,qa=new ie,Ya=new ie,Ir=new ie;function gc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Ir.fromArray(s,u);const d=a.x*Math.abs(Ir.x)+a.y*Math.abs(Ir.y)+a.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),_=r.dot(Ir);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Gv=new Fo,Co=new ie,_c=new ie;class Ff{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Gv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(_c)),this.expandByPoint(Co.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ie,vc=new ie,$a=new ie,fr=new ie,xc=new ie,Ka=new ie,Sc=new ie;class Wv{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){vc.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(vc);const u=e.distanceTo(n)*.5,f=-this.direction.dot($a),d=fr.dot(this.direction),p=-fr.dot($a),m=fr.lengthSq(),_=Math.abs(1-f*f);let x,v,y,w;if(_>0)if(x=f*p-d,v=f*d-p,w=u*_,x>=0)if(v>=-w)if(v<=w){const C=1/_;x*=C,v*=C,y=x*(x+f*v+2*d)+v*(f*x+v+2*p)+m}else v=u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;else v=-u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;else v<=-w?(x=Math.max(0,-(-f*u+d)),v=x>0?-u:Math.min(Math.max(-u,-p),u),y=-x*x+v*(v+2*p)+m):v<=w?(x=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+m):(x=Math.max(0,-(f*u+d)),v=x>0?u:Math.min(Math.max(-u,-p),u),y=-x*x+v*(v+2*p)+m);else v=f>0?-u:u,x=Math.max(0,-(f*v+d)),y=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(vc).addScaledVector($a,v),y}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,a=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,a=(e.min.x-v.x)*m),_>=0?(u=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(u=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,u){xc.subVectors(n,e),Ka.subVectors(r,e),Sc.crossVectors(xc,Ka);let f=this.direction.dot(Sc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(Ka.crossVectors(fr,Ka));if(p<0)return null;const m=d*this.direction.dot(xc.cross(fr));if(m<0||p+m>f)return null;const _=-d*fr.dot(Sc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,u,f,d,p,m,_,x,v,y,w,C,S){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,x,v,y,w,C,S)}set(e,n,r,a,u,f,d,p,m,_,x,v,y,w,C,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=x,g[14]=v,g[3]=y,g[7]=w,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=f*_,y=f*x,w=d*_,C=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=y+w*m,n[5]=v-C*m,n[9]=-d*p,n[2]=C-v*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const v=p*_,y=p*x,w=m*_,C=m*x;n[0]=v+C*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=y*d-w,n[6]=C+v*d,n[10]=f*p}else if(e.order==="ZXY"){const v=p*_,y=p*x,w=m*_,C=m*x;n[0]=v-C*d,n[4]=-f*x,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*_,n[9]=C-v*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const v=f*_,y=f*x,w=d*_,C=d*x;n[0]=p*_,n[4]=w*m-y,n[8]=v*m+C,n[1]=p*x,n[5]=C*m+v,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const v=f*p,y=f*m,w=d*p,C=d*m;n[0]=p*_,n[4]=C-v*x,n[8]=w*x+y,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=y*x+w,n[10]=v-C*x}else if(e.order==="XZY"){const v=f*p,y=f*m,w=d*p,C=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=v*x+C,n[5]=f*_,n[9]=y*x-w,n[2]=w*x-y,n[6]=d*_,n[10]=C*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xv,e,jv)}lookAt(e,n,r){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),dr.crossVectors(r,In),dr.lengthSq()===0&&(Math.abs(r.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),dr.crossVectors(r,In)),dr.normalize(),Za.crossVectors(In,dr),a[0]=dr.x,a[4]=Za.x,a[8]=In.x,a[1]=dr.y,a[5]=Za.y,a[9]=In.y,a[2]=dr.z,a[6]=Za.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],v=r[9],y=r[13],w=r[2],C=r[6],S=r[10],g=r[14],N=r[3],D=r[7],R=r[11],ee=r[15],z=a[0],U=a[4],G=a[8],P=a[12],A=a[1],F=a[5],Z=a[9],$=a[13],ae=a[2],de=a[6],le=a[10],ue=a[14],k=a[3],oe=a[7],re=a[11],I=a[15];return u[0]=f*z+d*A+p*ae+m*k,u[4]=f*U+d*F+p*de+m*oe,u[8]=f*G+d*Z+p*le+m*re,u[12]=f*P+d*$+p*ue+m*I,u[1]=_*z+x*A+v*ae+y*k,u[5]=_*U+x*F+v*de+y*oe,u[9]=_*G+x*Z+v*le+y*re,u[13]=_*P+x*$+v*ue+y*I,u[2]=w*z+C*A+S*ae+g*k,u[6]=w*U+C*F+S*de+g*oe,u[10]=w*G+C*Z+S*le+g*re,u[14]=w*P+C*$+S*ue+g*I,u[3]=N*z+D*A+R*ae+ee*k,u[7]=N*U+D*F+R*de+ee*oe,u[11]=N*G+D*Z+R*le+ee*re,u[15]=N*P+D*$+R*ue+ee*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],v=e[10],y=e[14],w=e[3],C=e[7],S=e[11],g=e[15];return w*(+u*p*x-a*m*x-u*d*v+r*m*v+a*d*y-r*p*y)+C*(+n*p*y-n*m*v+u*f*v-a*f*y+a*m*_-u*p*_)+S*(+n*m*x-n*d*y-u*f*x+r*f*y+u*d*_-r*m*_)+g*(-a*d*_-n*p*x+n*d*v+a*f*x-r*f*v+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],v=e[10],y=e[11],w=e[12],C=e[13],S=e[14],g=e[15],N=x*S*m-C*v*m+C*p*y-d*S*y-x*p*g+d*v*g,D=w*v*m-_*S*m-w*p*y+f*S*y+_*p*g-f*v*g,R=_*C*m-w*x*m+w*d*y-f*C*y-_*d*g+f*x*g,ee=w*x*p-_*C*p-w*d*v+f*C*v+_*d*S-f*x*S,z=n*N+r*D+a*R+u*ee;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=N*U,e[1]=(C*v*u-x*S*u-C*a*y+r*S*y+x*a*g-r*v*g)*U,e[2]=(d*S*u-C*p*u+C*a*m-r*S*m-d*a*g+r*p*g)*U,e[3]=(x*p*u-d*v*u-x*a*m+r*v*m+d*a*y-r*p*y)*U,e[4]=D*U,e[5]=(_*S*u-w*v*u+w*a*y-n*S*y-_*a*g+n*v*g)*U,e[6]=(w*p*u-f*S*u-w*a*m+n*S*m+f*a*g-n*p*g)*U,e[7]=(f*v*u-_*p*u+_*a*m-n*v*m-f*a*y+n*p*y)*U,e[8]=R*U,e[9]=(w*x*u-_*C*u-w*r*y+n*C*y+_*r*g-n*x*g)*U,e[10]=(f*C*u-w*d*u+w*r*m-n*C*m-f*r*g+n*d*g)*U,e[11]=(_*d*u-f*x*u-_*r*m+n*x*m+f*r*y-n*d*y)*U,e[12]=ee*U,e[13]=(_*C*a-w*x*a+w*r*v-n*C*v-_*r*S+n*x*S)*U,e[14]=(w*d*a-f*C*a-w*r*p+n*C*p+f*r*S-n*d*S)*U,e[15]=(f*x*a-_*d*a+_*r*p-n*x*p-f*r*v+n*d*v)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,x=d+d,v=u*m,y=u*_,w=u*x,C=f*_,S=f*x,g=d*x,N=p*m,D=p*_,R=p*x,ee=r.x,z=r.y,U=r.z;return a[0]=(1-(C+g))*ee,a[1]=(y+R)*ee,a[2]=(w-D)*ee,a[3]=0,a[4]=(y-R)*z,a[5]=(1-(v+g))*z,a[6]=(S+N)*z,a[7]=0,a[8]=(w+D)*U,a[9]=(S-N)*U,a[10]=(1-(v+C))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/u,_=1/f,x=1/d;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=_,ni.elements[5]*=_,ni.elements[6]*=_,ni.elements[8]*=x,ni.elements[9]*=x,ni.elements[10]*=x,n.setFromRotationMatrix(ni),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Oi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),x=(n+e)/(n-e),v=(r+a)/(r-a);let y,w;if(d===Oi)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Sl)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Oi){const p=this.elements,m=1/(n-e),_=1/(r-a),x=1/(f-u),v=(n+e)*m,y=(r+a)*_;let w,C;if(d===Oi)w=(f+u)*x,C=-2*x;else if(d===Sl)w=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=C,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new ie,ni=new Gt,Xv=new ie(0,0,0),jv=new ie(1,1,1),dr=new ie,Za=new ie,In=new ie,bp=new Gt,Lp=new No;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],v=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Cn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qv=0;const Dp=new ie,ws=new No,Li=new Gt,Qa=new ie,Ro=new ie,Yv=new ie,$v=new No,Up=new ie(1,0,0),Ip=new ie(0,1,0),Np=new ie(0,0,1),Fp={type:"added"},Kv={type:"removed"},As={type:"childadded",child:null},yc={type:"childremoved",child:null};class On extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new ie,n=new zi,r=new No,a=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ot}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Np,e)}translateOnAxis(e,n){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Qa.copy(e):Qa.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ro,Qa,this.up):Li.lookAt(Qa,Ro,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Li),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kv),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),v=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}On.DEFAULT_UP=new ie(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ie,Di=new ie,Mc=new ie,Ui=new ie,Cs=new ie,Rs=new ie,Op=new ie,Ec=new ie,Tc=new ie,wc=new ie,Ac=new zt,Cc=new zt,Rc=new zt;class si{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ii.subVectors(a,n),Di.subVectors(r,n),Mc.subVectors(e,n);const f=ii.dot(ii),d=ii.dot(Di),p=ii.dot(Mc),m=Di.dot(Di),_=Di.dot(Mc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,y=(m*p-d*_)*v,w=(f*_-d*p)*v;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ui.x),p.addScaledVector(f,Ui.y),p.addScaledVector(d,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Ac.setScalar(0),Cc.setScalar(0),Rc.setScalar(0),Ac.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,r),Rc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Ac,u.x),f.addScaledVector(Cc,u.y),f.addScaledVector(Rc,u.z),f}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Di.subVectors(e,n),ii.cross(Di).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ii.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Cs.subVectors(a,r),Rs.subVectors(u,r),Ec.subVectors(e,r);const p=Cs.dot(Ec),m=Rs.dot(Ec);if(p<=0&&m<=0)return n.copy(r);Tc.subVectors(e,a);const _=Cs.dot(Tc),x=Rs.dot(Tc);if(_>=0&&x<=_)return n.copy(a);const v=p*x-_*m;if(v<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Cs,f);wc.subVectors(e,u);const y=Cs.dot(wc),w=Rs.dot(wc);if(w>=0&&y<=w)return n.copy(u);const C=y*m-p*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Rs,d);const S=_*w-y*x;if(S<=0&&x-_>=0&&y-w>=0)return Op.subVectors(u,a),d=(x-_)/(x-_+(y-w)),n.copy(a).addScaledVector(Op,d);const g=1/(S+C+v);return f=C*g,d=v*g,n.copy(r).addScaledVector(Cs,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Pc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=vt.workingColorSpace){return this.r=e,this.g=n,this.b=r,vt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=vt.workingColorSpace){if(e=Uv(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Pc(f,u,e+1/3),this.g=Pc(f,u,e),this.b=Pc(f,u,e-1/3)}return vt.toWorkingColorSpace(this,a),this}setStyle(e,n=Fn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const r=Im[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return vt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Cn(cn.r*255,0,255))*65536+Math.round(Cn(cn.g*255,0,255))*256+Math.round(Cn(cn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=vt.workingColorSpace){vt.fromWorkingColorSpace(cn.copy(this),n);const r=cn.r,a=cn.g,u=cn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=vt.workingColorSpace){return vt.fromWorkingColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Fn){vt.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,r=cn.g,a=cn.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(Ja);const r=dc(hr.h,Ja.h,n),a=dc(hr.s,Ja.s,n),u=dc(hr.l,Ja.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Rt;Rt.NAMES=Im;let Zv=0;class Tl extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Io(),this.name="",this.blending=Is,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zc&&(r.blendSrc=this.blendSrc),this.blendDst!==Hc&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nm extends Tl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ie,el=new yt;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=yp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),u=An(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),e}}class Fm extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Om extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xr extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Qv=0;const jn=new Gt,bc=new On,Ps=new ie,Nn=new Fo,Po=new Fo,Jt=new ie;class Yr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Om:Fm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Xr(r,3))}else{for(let r=0,a=n.count;r<a;r++){const u=e[r];n.setXYZ(r,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(Jt.addVectors(Nn.min,Po.min),Nn.expandByPoint(Jt),Jt.addVectors(Nn.max,Po.max),Nn.expandByPoint(Jt)):(Nn.expandByPoint(Po.min),Nn.expandByPoint(Po.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)Jt.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(Jt));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Jt.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),Jt.add(Ps)),a=Math.max(a,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new ie,p[G]=new ie;const m=new ie,_=new ie,x=new ie,v=new yt,y=new yt,w=new yt,C=new ie,S=new ie;function g(G,P,A){m.fromBufferAttribute(r,G),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,A),v.fromBufferAttribute(u,G),y.fromBufferAttribute(u,P),w.fromBufferAttribute(u,A),_.sub(m),x.sub(m),y.sub(v),w.sub(v);const F=1/(y.x*w.y-w.x*y.y);isFinite(F)&&(C.copy(_).multiplyScalar(w.y).addScaledVector(x,-y.y).multiplyScalar(F),S.copy(x).multiplyScalar(y.x).addScaledVector(_,-w.x).multiplyScalar(F),d[G].add(C),d[P].add(C),d[A].add(C),p[G].add(S),p[P].add(S),p[A].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,P=N.length;G<P;++G){const A=N[G],F=A.start,Z=A.count;for(let $=F,ae=F+Z;$<ae;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const D=new ie,R=new ie,ee=new ie,z=new ie;function U(G){ee.fromBufferAttribute(a,G),z.copy(ee);const P=d[G];D.copy(P),D.sub(ee.multiplyScalar(ee.dot(P))).normalize(),R.crossVectors(z,P);const F=R.dot(p[G])<0?-1:1;f.setXYZW(G,D.x,D.y,D.z,F)}for(let G=0,P=N.length;G<P;++G){const A=N[G],F=A.start,Z=A.count;for(let $=F,ae=F+Z;$<ae;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const a=new ie,u=new ie,f=new ie,d=new ie,p=new ie,m=new ie,_=new ie,x=new ie;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),C=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,y=n.count;v<y;v+=3)a.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,v=new m.constructor(p.length*_);let y=0,w=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*_;for(let g=0;g<_;g++)v[w++]=m[y++]}return new _i(v,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const v=m[_],y=e(v,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,v=m.length;x<v;x++){const y=m[x];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let v=0,y=x.length;v<y;v++)_.push(x[v].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new Gt,Nr=new Wv,tl=new Ff,Bp=new ie,nl=new ie,il=new ie,rl=new ie,Lc=new ie,sl=new ie,zp=new ie,ol=new ie;class gi extends On{constructor(e=new Yr,n=new Nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){sl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(Lc.fromBufferAttribute(x,e),f?sl.addScaledVector(Lc,_):sl.addScaledVector(Lc.sub(n),_))}n.add(sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),tl.copy(r.boundingSphere),tl.applyMatrix4(u),Nr.copy(e.ray).recast(e.near),!(tl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(tl,Bp)===null||Nr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(kp.copy(u).invert(),Nr.copy(e.ray).applyMatrix4(kp),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,C=v.length;w<C;w++){const S=v[w],g=f[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=N,ee=D;R<ee;R+=3){const z=d.getX(R),U=d.getX(R+1),G=d.getX(R+2);a=al(this,g,e,r,m,_,x,z,U,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=w,g=C;S<g;S+=3){const N=d.getX(S),D=d.getX(S+1),R=d.getX(S+2);a=al(this,f,e,r,m,_,x,N,D,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,C=v.length;w<C;w++){const S=v[w],g=f[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let R=N,ee=D;R<ee;R+=3){const z=R,U=R+1,G=R+2;a=al(this,g,e,r,m,_,x,z,U,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let S=w,g=C;S<g;S+=3){const N=S,D=S+1,R=S+2;a=al(this,f,e,r,m,_,x,N,D,R),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function Jv(s,e,n,r,a,u,f,d){let p;if(e.side===Rn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;ol.copy(d),ol.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ol);return m<n.near||m>n.far?null:{distance:m,point:ol.clone(),object:s}}function al(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,nl),s.getVertexPosition(p,il),s.getVertexPosition(m,rl);const _=Jv(s,e,n,r,nl,il,rl,zp);if(_){const x=new ie;si.getBarycoord(zp,nl,il,rl,x),a&&(_.uv=si.getInterpolatedAttribute(a,d,p,m,x,new yt)),u&&(_.uv1=si.getInterpolatedAttribute(u,d,p,m,x,new yt)),f&&(_.normal=si.getInterpolatedAttribute(f,d,p,m,x,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new ie,materialIndex:0};si.getNormal(nl,il,rl,v.normal),_.face=v,_.barycoord=x}return _}class Oo extends Yr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let v=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(_,3)),this.setAttribute("uv",new Xr(x,2));function w(C,S,g,N,D,R,ee,z,U,G,P){const A=R/U,F=ee/G,Z=R/2,$=ee/2,ae=z/2,de=U+1,le=G+1;let ue=0,k=0;const oe=new ie;for(let re=0;re<le;re++){const I=re*F-$;for(let ne=0;ne<de;ne++){const De=ne*A-Z;oe[C]=De*N,oe[S]=I*D,oe[g]=ae,m.push(oe.x,oe.y,oe.z),oe[C]=0,oe[S]=0,oe[g]=z>0?1:-1,_.push(oe.x,oe.y,oe.z),x.push(ne/U),x.push(1-re/G),ue+=1}}for(let re=0;re<G;re++)for(let I=0;I<U;I++){const ne=v+I+de*re,De=v+I+de*(re+1),K=v+(I+1)+de*(re+1),ce=v+(I+1)+de*re;p.push(ne,De,ce),p.push(De,K,ce),k+=6}d.addGroup(y,k,P),y+=k,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function _n(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const a in r)e[a]=r[a]}return e}function e0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const t0={clone:Vs,merge:_n};var n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Tl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Bm extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ie,Hp=new yt,Vp=new yt;class ri extends Bm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Hp,Vp),n.subVectors(Vp,Hp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class r0 extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ri(bs,Ls,e,n);a.layers=this.layers,this.add(a);const u=new ri(bs,Ls,e,n);u.layers=this.layers,this.add(u);const f=new ri(bs,Ls,e,n);f.layers=this.layers,this.add(f);const d=new ri(bs,Ls,e,n);d.layers=this.layers,this.add(d);const p=new ri(bs,Ls,e,n);p.layers=this.layers,this.add(p);const m=new ri(bs,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Sl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,v,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class zm extends Pn{constructor(e,n,r,a,u,f,d,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s0 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new zm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Oo(5,5,5),u=new Hi({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:gr});u.uniforms.tEquirect.value=n;const f=new gi(a,u),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=mi),new r0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Dc=new ie,o0=new ie,a0=new ot;class Br{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Dc.subVectors(r,n).cross(o0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Dc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||a0.getNormalMatrix(e),a=this.coplanarPoint(Dc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Ff,ll=new ie;class Hm{constructor(e=new Br,n=new Br,r=new Br,a=new Br,u=new Br,f=new Br){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],x=a[6],v=a[7],y=a[8],w=a[9],C=a[10],S=a[11],g=a[12],N=a[13],D=a[14],R=a[15];if(r[0].setComponents(p-u,v-m,S-y,R-g).normalize(),r[1].setComponents(p+u,v+m,S+y,R+g).normalize(),r[2].setComponents(p+f,v+_,S+w,R+N).normalize(),r[3].setComponents(p-f,v-_,S-w,R-N).normalize(),r[4].setComponents(p-d,v-x,S-C,R-D).normalize(),n===Oi)r[5].setComponents(p+d,v+x,S+C,R+D).normalize();else if(n===Sl)r[5].setComponents(d,x,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ll.x=a.normal.x>0?e.max.x:e.min.x,ll.y=a.normal.y>0?e.max.y:e.min.y,ll.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vm(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function l0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<x.length;y++){const w=x[v],C=x[y];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++v,x[v]=C)}x.length=v+1;for(let y=0,w=x.length;y<w;y++){const C=x[y];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class ko extends Yr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,v=n/p,y=[],w=[],C=[],S=[];for(let g=0;g<_;g++){const N=g*v-f;for(let D=0;D<m;D++){const R=D*x-u;w.push(R,-N,0),C.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<d;N++){const D=N+m*g,R=N+m*(g+1),ee=N+1+m*(g+1),z=N+1+m*g;y.push(D,R,z),y.push(R,ee,z)}this.setIndex(y),this.setAttribute("position",new Xr(w,3)),this.setAttribute("normal",new Xr(C,3)),this.setAttribute("uv",new Xr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,ax=`struct PhysicalMaterial {
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
}`,lx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
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
}`,mS=`#if DEPTH_PACKING == 3200
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
}`,gS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,yS=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,RS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,bS=`#define PHONG
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
}`,LS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,NS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,BS=`uniform vec3 color;
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
}`,zS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:u0,alphahash_pars_fragment:c0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:h0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:_0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:S0,bsdfs:y0,iridescence_fragment:M0,bumpmap_pars_fragment:E0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:C0,color_fragment:R0,color_pars_fragment:P0,color_pars_vertex:b0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:I0,displacementmap_pars_vertex:N0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:k0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:H0,envmap_common_pars_fragment:V0,envmap_pars_fragment:G0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tx,envmap_vertex:X0,fog_vertex:j0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:$0,gradientmap_pars_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:J0,lights_pars_begin:ex,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:rx,lights_phong_pars_fragment:sx,lights_physical_fragment:ox,lights_physical_pars_fragment:ax,lights_fragment_begin:lx,lights_fragment_maps:ux,lights_fragment_end:cx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:_x,map_particle_pars_fragment:vx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:yx,morphcolor_vertex:Mx,morphnormal_vertex:Ex,morphtarget_pars_vertex:Tx,morphtarget_vertex:wx,normal_fragment_begin:Ax,normal_fragment_maps:Cx,normal_pars_fragment:Rx,normal_pars_vertex:Px,normal_vertex:bx,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Nx,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:kx,project_vertex:Bx,dithering_fragment:zx,dithering_pars_fragment:Hx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:jx,shadowmask_pars_fragment:qx,skinbase_vertex:Yx,skinning_pars_vertex:$x,skinning_vertex:Kx,skinnormal_vertex:Zx,specularmap_fragment:Qx,specularmap_pars_fragment:Jx,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:oS,worldpos_vertex:aS,background_vert:lS,background_frag:uS,backgroundCube_vert:cS,backgroundCube_frag:fS,cube_vert:dS,cube_frag:hS,depth_vert:pS,depth_frag:mS,distanceRGBA_vert:gS,distanceRGBA_frag:_S,equirect_vert:vS,equirect_frag:xS,linedashed_vert:SS,linedashed_frag:yS,meshbasic_vert:MS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:wS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:PS,meshphong_vert:bS,meshphong_frag:LS,meshphysical_vert:DS,meshphysical_frag:US,meshtoon_vert:IS,meshtoon_frag:NS,points_vert:FS,points_frag:OS,shadow_vert:kS,shadow_frag:BS,sprite_vert:zS,sprite_frag:HS},Re={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pi.physical={uniforms:_n([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ul={r:0,b:0,g:0},Or=new zi,VS=new Gt;function GS(s,e,n,r,a,u,f){const d=new Rt(0);let p=u===!0?0:1,m,_,x=null,v=0,y=null;function w(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?n:e).get(D)),D}function C(N){let D=!1;const R=w(N);R===null?g(d,p):R&&R.isColor&&(g(R,1),D=!0);const ee=s.xr.getEnvironmentBlendMode();ee==="additive"?r.buffers.color.setClear(0,0,0,1,f):ee==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,D){const R=w(D);R&&(R.isCubeTexture||R.mapping===Ml)?(_===void 0&&(_=new gi(new Oo(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Vs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(ee,z,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Or.copy(D.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(Or)),_.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ct,(x!==R||v!==R.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,x=R,v=R.version,y=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new gi(new ko(2,2),new Hi({name:"BackgroundMaterial",uniforms:Vs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=vt.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||v!==R.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,x=R,v=R.version,y=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,D){N.getRGB(ul,km(s)),r.buffers.color.setClear(ul.r,ul.g,ul.b,D,f)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(d,p)},render:C,addToRenderList:S}}function WS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let u=a,f=!1;function d(A,F,Z,$,ae){let de=!1;const le=x($,Z,F);u!==le&&(u=le,m(u.object)),de=y(A,$,Z,ae),de&&w(A,$,Z,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,R(A,F,Z,$),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function x(A,F,Z){const $=Z.wireframe===!0;let ae=r[A.id];ae===void 0&&(ae={},r[A.id]=ae);let de=ae[F.id];de===void 0&&(de={},ae[F.id]=de);let le=de[$];return le===void 0&&(le=v(p()),de[$]=le),le}function v(A){const F=[],Z=[],$=[];for(let ae=0;ae<n;ae++)F[ae]=0,Z[ae]=0,$[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:$,object:A,attributes:{},index:null}}function y(A,F,Z,$){const ae=u.attributes,de=F.attributes;let le=0;const ue=Z.getAttributes();for(const k in ue)if(ue[k].location>=0){const re=ae[k];let I=de[k];if(I===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),re===void 0||re.attribute!==I||I&&re.data!==I.data)return!0;le++}return u.attributesNum!==le||u.index!==$}function w(A,F,Z,$){const ae={},de=F.attributes;let le=0;const ue=Z.getAttributes();for(const k in ue)if(ue[k].location>=0){let re=de[k];re===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const I={};I.attribute=re,re&&re.data&&(I.data=re.data),ae[k]=I,le++}u.attributes=ae,u.attributesNum=le,u.index=$}function C(){const A=u.newAttributes;for(let F=0,Z=A.length;F<Z;F++)A[F]=0}function S(A){g(A,0)}function g(A,F){const Z=u.newAttributes,$=u.enabledAttributes,ae=u.attributeDivisors;Z[A]=1,$[A]===0&&(s.enableVertexAttribArray(A),$[A]=1),ae[A]!==F&&(s.vertexAttribDivisor(A,F),ae[A]=F)}function N(){const A=u.newAttributes,F=u.enabledAttributes;for(let Z=0,$=F.length;Z<$;Z++)F[Z]!==A[Z]&&(s.disableVertexAttribArray(Z),F[Z]=0)}function D(A,F,Z,$,ae,de,le){le===!0?s.vertexAttribIPointer(A,F,Z,ae,de):s.vertexAttribPointer(A,F,Z,$,ae,de)}function R(A,F,Z,$){C();const ae=$.attributes,de=Z.getAttributes(),le=F.defaultAttributeValues;for(const ue in de){const k=de[ue];if(k.location>=0){let oe=ae[ue];if(oe===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor)),oe!==void 0){const re=oe.normalized,I=oe.itemSize,ne=e.get(oe);if(ne===void 0)continue;const De=ne.buffer,K=ne.type,ce=ne.bytesPerElement,Se=K===s.INT||K===s.UNSIGNED_INT||oe.gpuType===bf;if(oe.isInterleavedBufferAttribute){const ve=oe.data,we=ve.stride,Ue=oe.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<k.locationSize;Ze++)g(k.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<k.locationSize;Ze++)S(k.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ze=0;Ze<k.locationSize;Ze++)D(k.location+Ze,I/k.locationSize,K,re,we*ce,(Ue+I/k.locationSize*Ze)*ce,Se)}else{if(oe.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,oe.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ve=0;ve<k.locationSize;ve++)D(k.location+ve,I/k.locationSize,K,re,I*ce,I/k.locationSize*ve*ce,Se)}}else if(le!==void 0){const re=le[ue];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}N()}function ee(){G();for(const A in r){const F=r[A];for(const Z in F){const $=F[Z];for(const ae in $)_($[ae].object),delete $[ae];delete F[Z]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const F=r[A.id];for(const Z in F){const $=F[Z];for(const ae in $)_($[ae].object),delete $[ae];delete F[Z]}delete r[A.id]}function U(A){for(const F in r){const Z=r[F];if(Z[A.id]===void 0)continue;const $=Z[A.id];for(const ae in $)_($[ae].object),delete $[ae];delete Z[A.id]}}function G(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:G,resetDefaultState:P,dispose:ee,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function XS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(s.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let y=0;for(let w=0;w<x;w++)y+=_[w];n.update(y,r,1)}function p(m,_,x,v){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],_[w],v[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,v,0,x);let w=0;for(let C=0;C<x;C++)w+=_[C]*v[C];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function jS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==oi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const G=U===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Bi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fi&&!G)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),ee=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:ee,maxSamples:z}}function qS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Br,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||a;return a=v,r=x.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){n=_(x,v,0)},this.setState=function(x,v,y){const w=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,g=s.get(x);if(!a||w===null||w.length===0||u&&!S)u?_(null):m();else{const N=u?0:r,D=N*4;let R=g.clippingState||null;p.value=R,R=_(w,v,D,y);for(let ee=0;ee!==D;++ee)R[ee]=n[ee];g.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,v,y,w){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=p.value,w!==!0||S===null){const g=y+C*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,R=y;D!==C;++D,R+=4)f.copy(x[D]).applyMatrix4(N,d),f.normal.toArray(S,R),S[R+3]=f.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function YS(s){let e=new WeakMap;function n(f,d){return d===$c?f.mapping=ks:d===Kc&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===$c||d===Kc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new s0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Gm extends Bm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,Gp=[.125,.215,.35,.446,.526,.582],Vr=20,Uc=new Gm,Wp=new Rt;let Ic=null,Nc=0,Fc=0,Oc=!1;const zr=(1+Math.sqrt(5))/2,Ds=1/zr,Xp=[new ie(-zr,Ds,0),new ie(zr,Ds,0),new ie(-Ds,0,zr),new ie(Ds,0,zr),new ie(0,zr,-Ds),new ie(0,zr,Ds),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Ic=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ic,Nc,Fc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ic=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Uo,format:oi,colorSpace:Gs,depthBuffer:!1},a=qp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$S(u)),this._blurMaterial=KS(u,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,r,a){const d=new ri(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Wp),_.toneMapping=_r,_.autoClear=!1;const y=new Nm({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),w=new gi(new Oo,y);let C=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,C=!0):(y.color.copy(Wp),C=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):N===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const D=this._cubeSize;cl(a,N*D,g>2?D:0,D,D),_.setRenderTarget(a),C&&_.render(w,d),_.render(e,d)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=v,_.autoClear=x,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===ks||e.mapping===Bs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new gi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;cl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Uc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Xp[(a-u-1)%Xp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new gi(this._lodPlanes[a],m),v=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Vr-1),C=u/w,S=isFinite(u)?1+Math.floor(_*C):Vr;S>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Vr}`);const g=[];let N=0;for(let U=0;U<Vr;++U){const G=U/C,P=Math.exp(-G*G/2);g.push(P),U===0?N+=P:U<S&&(N+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=g,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=w,v.mipInt.value=D-r;const R=this._sizeLods[a],ee=3*R*(a>D-Us?a-D+Us:0),z=4*(this._cubeSize-R);cl(n,ee,z,3*R,2*R),p.setRenderTarget(n),p.render(x,Uc)}}function $S(s){const e=[],n=[],r=[];let a=s;const u=s-Us+1+Gp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Us?p=Gp[f-s+Us-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,v=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,w=6,C=3,S=2,g=1,N=new Float32Array(C*w*y),D=new Float32Array(S*w*y),R=new Float32Array(g*w*y);for(let z=0;z<y;z++){const U=z%3*2/3-1,G=z>2?0:-1,P=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];N.set(P,C*w*z),D.set(v,S*w*z);const A=[z,z,z,z,z,z];R.set(A,g*w*z)}const ee=new Yr;ee.setAttribute("position",new _i(N,C)),ee.setAttribute("uv",new _i(D,S)),ee.setAttribute("faceIndex",new _i(R,g)),e.push(ee),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function qp(s,e,n){const r=new qr(s,e,n);return r.texture.mapping=Ml,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function cl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function KS(s,e,n){const r=new Float32Array(Vr),a=new ie(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Of(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Yp(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $p(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Of(){return`

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
	`}function ZS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===$c||p===Kc,_=p===ks||p===Bs;if(m||_){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new jp(s)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new jp(s)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function QS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&bo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function JS(s,e,n,r){const a={},u=new WeakMap;function f(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);for(const w in v.morphAttributes){const C=v.morphAttributes[w];for(let S=0,g=C.length;S<g;S++)e.remove(C[S])}v.removeEventListener("dispose",f),delete a[v.id];const y=u.get(v);y&&(e.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(x,v){return a[v.id]===!0||(v.addEventListener("dispose",f),a[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const w in v)e.update(v[w],s.ARRAY_BUFFER);const y=x.morphAttributes;for(const w in y){const C=y[w];for(let S=0,g=C.length;S<g;S++)e.update(C[S],s.ARRAY_BUFFER)}}function m(x){const v=[],y=x.index,w=x.attributes.position;let C=0;if(y!==null){const N=y.array;C=y.version;for(let D=0,R=N.length;D<R;D+=3){const ee=N[D+0],z=N[D+1],U=N[D+2];v.push(ee,z,z,U,U,ee)}}else if(w!==void 0){const N=w.array;C=w.version;for(let D=0,R=N.length/3-1;D<R;D+=3){const ee=D+0,z=D+1,U=D+2;v.push(ee,z,z,U,U,ee)}}else return;const S=new(bm(v)?Om:Fm)(v,1);S.version=C;const g=u.get(x);g&&e.remove(g),u.set(x,S)}function _(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function ey(s,e,n){let r;function a(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function p(v,y){s.drawElements(r,y,u,v*f),n.update(y,r,1)}function m(v,y,w){w!==0&&(s.drawElementsInstanced(r,y,u,v*f,w),n.update(y,r,w))}function _(v,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,w);let S=0;for(let g=0;g<w;g++)S+=y[g];n.update(S,r,1)}function x(v,y,w,C){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<v.length;g++)m(v[g]/f,y[g],C[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,C,0,w);let g=0;for(let N=0;N<w;N++)g+=y[N]*C[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function ty(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ny(s,e,n){const r=new WeakMap,a=new zt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let A=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),C===!0&&(R=2),S===!0&&(R=3);let ee=d.attributes.position.count*R,z=1;ee>e.maxTextureSize&&(z=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const U=new Float32Array(ee*z*4*x),G=new Dm(U,ee,z,x);G.type=Fi,G.needsUpdate=!0;const P=R*4;for(let F=0;F<x;F++){const Z=g[F],$=N[F],ae=D[F],de=ee*z*4*F;for(let le=0;le<Z.count;le++){const ue=le*P;w===!0&&(a.fromBufferAttribute(Z,le),U[de+ue+0]=a.x,U[de+ue+1]=a.y,U[de+ue+2]=a.z,U[de+ue+3]=0),C===!0&&(a.fromBufferAttribute($,le),U[de+ue+4]=a.x,U[de+ue+5]=a.y,U[de+ue+6]=a.z,U[de+ue+7]=0),S===!0&&(a.fromBufferAttribute(ae,le),U[de+ue+8]=a.x,U[de+ue+9]=a.y,U[de+ue+10]=a.z,U[de+ue+11]=ae.itemSize===4?a.w:1)}}v={count:x,texture:G,size:new yt(ee,z)},r.set(d,v),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const C=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function iy(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Wm extends Pn{constructor(e,n,r,a,u,f,d,p,m,_=Ns){if(_!==Ns&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ns&&(r=jr),r===void 0&&_===Hs&&(r=zs),super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:ai,this.minFilter=p!==void 0?p:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Xm=new Pn,Kp=new Wm(1,1),jm=new Dm,qm=new Vv,Ym=new zm,Zp=[],Qp=[],Jp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);function Xs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=Zp[a];if(u===void 0&&(u=new Float32Array(a),Zp[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Yt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function $t(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function wl(s,e){let n=Qp[e];n===void 0&&(n=new Int32Array(e),Qp[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ry(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function sy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2fv(this.addr,e),$t(n,e)}}function oy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;s.uniform3fv(this.addr,e),$t(n,e)}}function ay(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4fv(this.addr,e),$t(n,e)}}function ly(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;tm.set(r),s.uniformMatrix2fv(this.addr,!1,tm),$t(n,r)}}function uy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;em.set(r),s.uniformMatrix3fv(this.addr,!1,em),$t(n,r)}}function cy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Yt(n,r))return;Jp.set(r),s.uniformMatrix4fv(this.addr,!1,Jp),$t(n,r)}}function fy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2iv(this.addr,e),$t(n,e)}}function hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3iv(this.addr,e),$t(n,e)}}function py(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4iv(this.addr,e),$t(n,e)}}function my(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;s.uniform2uiv(this.addr,e),$t(n,e)}}function _y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;s.uniform3uiv(this.addr,e),$t(n,e)}}function vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;s.uniform4uiv(this.addr,e),$t(n,e)}}function xy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(Kp.compareFunction=Pm,u=Kp):u=Xm,n.setTexture2D(e||u,a)}function Sy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||qm,a)}function yy(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ym,a)}function My(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||jm,a)}function Ey(s){switch(s){case 5126:return ry;case 35664:return sy;case 35665:return oy;case 35666:return ay;case 35674:return ly;case 35675:return uy;case 35676:return cy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return hy;case 35669:case 35673:return py;case 5125:return my;case 36294:return gy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}function Ty(s,e){s.uniform1fv(this.addr,e)}function wy(s,e){const n=Xs(e,this.size,2);s.uniform2fv(this.addr,n)}function Ay(s,e){const n=Xs(e,this.size,3);s.uniform3fv(this.addr,n)}function Cy(s,e){const n=Xs(e,this.size,4);s.uniform4fv(this.addr,n)}function Ry(s,e){const n=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Py(s,e){const n=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function by(s,e){const n=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Ly(s,e){s.uniform1iv(this.addr,e)}function Dy(s,e){s.uniform2iv(this.addr,e)}function Uy(s,e){s.uniform3iv(this.addr,e)}function Iy(s,e){s.uniform4iv(this.addr,e)}function Ny(s,e){s.uniform1uiv(this.addr,e)}function Fy(s,e){s.uniform2uiv(this.addr,e)}function Oy(s,e){s.uniform3uiv(this.addr,e)}function ky(s,e){s.uniform4uiv(this.addr,e)}function By(s,e,n){const r=this.cache,a=e.length,u=wl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Xm,u[f])}function zy(s,e,n){const r=this.cache,a=e.length,u=wl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||qm,u[f])}function Hy(s,e,n){const r=this.cache,a=e.length,u=wl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Ym,u[f])}function Vy(s,e,n){const r=this.cache,a=e.length,u=wl(n,a);Yt(r,u)||(s.uniform1iv(this.addr,u),$t(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||jm,u[f])}function Gy(s){switch(s){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Cy;case 35674:return Ry;case 35675:return Py;case 35676:return by;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Iy;case 5125:return Ny;case 36294:return Fy;case 36295:return Oy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}class Wy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Ey(n.type)}}class Xy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gy(n.type)}}class jy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function nm(s,e){s.seq.push(e),s.map[e.id]=e}function qy(s,e,n){const r=s.name,a=r.length;for(kc.lastIndex=0;;){const u=kc.exec(r),f=kc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){nm(n,m===void 0?new Wy(d,s,e):new Xy(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new jy(d),nm(n,x)),n=x}}}class vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);qy(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function im(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const Yy=37297;let $y=0;function Ky(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const rm=new ot;function Zy(s){vt._getMatrix(rm,vt.workingColorSpace,s);const e=`mat3( ${rm.elements.map(n=>n.toFixed(4))} )`;switch(vt.getTransfer(s)){case El:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Ky(s.getShaderSource(e),f)}else return a}function Qy(s,e){const n=Zy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Jy(s,e){let n;switch(e){case pv:n="Linear";break;case mv:n="Reinhard";break;case gv:n="Cineon";break;case _v:n="ACESFilmic";break;case xv:n="AgX";break;case Sv:n="Neutral";break;case vv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new ie;function eM(){vt.getLuminanceCoefficients(fl);const s=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function nM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Lo(s){return s!==""}function om(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(s){return s.replace(rM,oM)}const sM=new Map;function oM(s,e){let n=at[e];if(n===void 0){const r=sM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(s){return s.replace(aM,lM)}function lM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function um(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case Bs:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _m:e="ENVMAP_BLENDING_MULTIPLY";break;case dv:e="ENVMAP_BLENDING_MIX";break;case hv:e="ENVMAP_BLENDING_ADD";break}return e}function hM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pM(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=uM(n),m=cM(n),_=fM(n),x=dM(n),v=hM(n),y=tM(n),w=nM(u),C=a.createProgram();let S,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(S=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?at.tonemapping_pars_fragment:"",n.toneMapping!==_r?Jy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Qy("linearToOutputTexel",n.outputColorSpace),eM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),f=Cf(f),f=om(f,n),f=am(f,n),d=Cf(d),d=om(d,n),d=am(d,n),f=lm(f),d=lm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=N+S+f,R=N+g+d,ee=im(a,a.VERTEX_SHADER,D),z=im(a,a.FRAGMENT_SHADER,R);a.attachShader(C,ee),a.attachShader(C,z),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function U(F){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(C).trim(),$=a.getShaderInfoLog(ee).trim(),ae=a.getShaderInfoLog(z).trim();let de=!0,le=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,ee,z);else{const ue=sm(a,ee,"vertex"),k=sm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+ue+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||ae==="")&&(le=!1);le&&(F.diagnostics={runnable:de,programLog:Z,vertexShader:{log:$,prefix:S},fragmentShader:{log:ae,prefix:g}})}a.deleteShader(ee),a.deleteShader(z),G=new vl(a,C),P=iM(a,C)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(C,Yy)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=ee,this.fragmentShader=z,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new _M(e),n.set(e,r)),r}}class _M{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function vM(s,e,n,r,a,u,f){const d=new Um,p=new gM,m=new Set,_=[],x=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return m.add(P),P===0?"uv":`uv${P}`}function S(P,A,F,Z,$){const ae=Z.fog,de=$.geometry,le=P.isMeshStandardMaterial?Z.environment:null,ue=(P.isMeshStandardMaterial?n:e).get(P.envMap||le),k=ue&&ue.mapping===Ml?ue.image.height:null,oe=w[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,I=re!==void 0?re.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let De,K,ce,Se;if(oe){const gt=pi[oe];De=gt.vertexShader,K=gt.fragmentShader}else De=P.vertexShader,K=P.fragmentShader,p.update(P),ce=p.getVertexShaderID(P),Se=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ue=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,At=!!P.map,ht=!!P.matcap,bt=!!ue,X=!!P.aoMap,fn=!!P.lightMap,dt=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,qe=!!P.metalnessMap,b=!!P.roughnessMap,E=P.anisotropy>0,Y=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,fe=P.sheen>0,Ve=P.transmission>0,Ae=E&&!!P.anisotropyMap,Ie=Y&&!!P.clearcoatMap,lt=Y&&!!P.clearcoatNormalMap,ye=Y&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,Qe=ge&&!!P.iridescenceThicknessMap,Je=fe&&!!P.sheenColorMap,ke=fe&&!!P.sheenRoughnessMap,ct=!!P.specularMap,it=!!P.specularColorMap,Et=!!P.specularIntensityMap,H=Ve&&!!P.transmissionMap,Ce=Ve&&!!P.thicknessMap,se=!!P.gradientMap,he=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,rt=!!P.extensions;let Dt=_r;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Wt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:K,defines:P.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,instancingMorph:Ue&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Gs,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:ht,envMap:bt,envMapMode:bt&&ue.mapping,envMapCubeUVHeight:k,aoMap:X,lightMap:fn,bumpMap:dt,normalMap:ut,displacementMap:v&&Ye,emissiveMap:Tt,normalMapObjectSpace:ut&&P.normalMapType===wv,normalMapTangentSpace:ut&&P.normalMapType===Tv,metalnessMap:qe,roughnessMap:b,anisotropy:E,anisotropyMap:Ae,clearcoat:Y,clearcoatMap:Ie,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ct,specularColorMap:it,specularIntensityMap:Et,transmission:Ve,transmissionMap:H,thicknessMap:Ce,gradientMap:se,opaque:P.transparent===!1&&P.blending===Is&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:At&&C(P.map.channel),aoMapUv:X&&C(P.aoMap.channel),lightMapUv:fn&&C(P.lightMap.channel),bumpMapUv:dt&&C(P.bumpMap.channel),normalMapUv:ut&&C(P.normalMap.channel),displacementMapUv:Ye&&C(P.displacementMap.channel),emissiveMapUv:Tt&&C(P.emissiveMap.channel),metalnessMapUv:qe&&C(P.metalnessMap.channel),roughnessMapUv:b&&C(P.roughnessMap.channel),anisotropyMapUv:Ae&&C(P.anisotropyMap.channel),clearcoatMapUv:Ie&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&C(P.sheenRoughnessMap.channel),specularMapUv:ct&&C(P.specularMap.channel),specularColorMapUv:it&&C(P.specularColorMap.channel),specularIntensityMapUv:Et&&C(P.specularIntensityMap.channel),transmissionMapUv:H&&C(P.transmissionMap.channel),thicknessMapUv:Ce&&C(P.thicknessMap.channel),alphaMapUv:he&&C(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(ut||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!de.attributes.uv&&(At||he),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:we,skinning:$.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&vt.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&vt.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ni,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const F in P.defines)A.push(F),A.push(P.defines[F]);return P.isRawShaderMaterial===!1&&(N(A,P),D(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function N(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function D(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const A=w[P.type];let F;if(A){const Z=pi[A];F=t0.clone(Z.uniforms)}else F=P.uniforms;return F}function ee(P,A){let F;for(let Z=0,$=_.length;Z<$;Z++){const ae=_[Z];if(ae.cacheKey===A){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new pM(s,A,P,u),_.push(F)),F}function z(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function U(P){p.remove(P)}function G(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:ee,releaseProgram:z,releaseShaderCache:U,programs:_,dispose:G}}function xM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function SM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,v,y,w,C,S){let g=s[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:y,groupOrder:w,renderOrder:x.renderOrder,z:C,group:S},s[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=y,g.groupOrder=w,g.renderOrder=x.renderOrder,g.z=C,g.group=S),e++,g}function d(x,v,y,w,C,S){const g=f(x,v,y,w,C,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(x,v,y,w,C,S){const g=f(x,v,y,w,C,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(x,v){n.length>1&&n.sort(x||SM),r.length>1&&r.sort(v||cm),a.length>1&&a.sort(v||cm)}function _(){for(let x=e,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function yM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new fm,s.set(r,[f])):a>=u.length?(f=new fm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function MM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Rt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function EM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let TM=0;function wM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AM(s){const e=new MM,n=EM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,u=new Gt,f=new Gt;function d(m){let _=0,x=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,w=0,C=0,S=0,g=0,N=0,D=0,R=0,ee=0,z=0,U=0;m.sort(wM);for(let P=0,A=m.length;P<A;P++){const F=m[P],Z=F.color,$=F.intensity,ae=F.distance,de=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=Z.r*$,x+=Z.g*$,v+=Z.b*$;else if(F.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(F.sh.coefficients[le],$);U++}else if(F.isDirectionalLight){const le=e.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,k=n.get(F);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=de,r.directionalShadowMatrix[y]=F.shadow.matrix,N++}r.directional[y]=le,y++}else if(F.isSpotLight){const le=e.get(F);le.position.setFromMatrixPosition(F.matrixWorld),le.color.copy(Z).multiplyScalar($),le.distance=ae,le.coneCos=Math.cos(F.angle),le.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),le.decay=F.decay,r.spot[C]=le;const ue=F.shadow;if(F.map&&(r.spotLightMap[ee]=F.map,ee++,ue.updateMatrices(F),F.castShadow&&z++),r.spotLightMatrix[C]=ue.matrix,F.castShadow){const k=n.get(F);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=de,R++}C++}else if(F.isRectAreaLight){const le=e.get(F);le.color.copy(Z).multiplyScalar($),le.halfWidth.set(F.width*.5,0,0),le.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=le,S++}else if(F.isPointLight){const le=e.get(F);if(le.color.copy(F.color).multiplyScalar(F.intensity),le.distance=F.distance,le.decay=F.decay,F.castShadow){const ue=F.shadow,k=n.get(F);k.shadowIntensity=ue.intensity,k.shadowBias=ue.bias,k.shadowNormalBias=ue.normalBias,k.shadowRadius=ue.radius,k.shadowMapSize=ue.mapSize,k.shadowCameraNear=ue.camera.near,k.shadowCameraFar=ue.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=de,r.pointShadowMatrix[w]=F.shadow.matrix,D++}r.point[w]=le,w++}else if(F.isHemisphereLight){const le=e.get(F);le.skyColor.copy(F.color).multiplyScalar($),le.groundColor.copy(F.groundColor).multiplyScalar($),r.hemi[g]=le,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==y||G.pointLength!==w||G.spotLength!==C||G.rectAreaLength!==S||G.hemiLength!==g||G.numDirectionalShadows!==N||G.numPointShadows!==D||G.numSpotShadows!==R||G.numSpotMaps!==ee||G.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=S,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+ee-z,r.spotLightMap.length=ee,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=U,G.directionalLength=y,G.pointLength=w,G.spotLength=C,G.rectAreaLength=S,G.hemiLength=g,G.numDirectionalShadows=N,G.numPointShadows=D,G.numSpotShadows=R,G.numSpotMaps=ee,G.numLightProbes=U,r.version=TM++)}function p(m,_){let x=0,v=0,y=0,w=0,C=0;const S=_.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const D=m[g];if(D.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),x++}else if(D.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),w++}else if(D.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function dm(s){const e=new AM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function CM(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new dm(s),e.set(a,[d])):u>=f.length?(d=new dm(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class RM extends Tl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends Tl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`;function DM(s,e,n){let r=new Hm;const a=new yt,u=new yt,f=new zt,d=new RM({depthPacking:Ev}),p=new PM,m={},_=n.maxTextureSize,x={[vr]:Rn,[Rn]:vr,[Ni]:Ni},v=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:bM,fragmentShader:LM}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new Yr;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new gi(w,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gm;let g=this.type;this.render=function(z,U,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(gr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=g!==Ii&&this.type===Ii,ae=g===Ii&&this.type!==Ii;for(let de=0,le=z.length;de<le;de++){const ue=z[de],k=ue.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const oe=k.getFrameExtents();if(a.multiply(oe),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/oe.x),a.x=u.x*oe.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/oe.y),a.y=u.y*oe.y,k.mapSize.y=u.y)),k.map===null||$===!0||ae===!0){const I=this.type!==Ii?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new qr(a.x,a.y,I),k.map.texture.name=ue.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let I=0;I<re;I++){const ne=k.getViewport(I);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),Z.viewport(f),k.updateMatrices(ue,I),r=k.getFrustum(),R(U,G,k.camera,ue,this.type)}k.isPointLightShadow!==!0&&this.type===Ii&&N(k,G),k.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(P,A,F)};function N(z,U){const G=e.update(C);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qr(a.x,a.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(U,null,G,v,C,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(U,null,G,y,C,null)}function D(z,U,G,P){let A=null;const F=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)A=F;else if(A=G.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Z=A.uuid,$=U.uuid;let ae=m[Z];ae===void 0&&(ae={},m[Z]=ae);let de=ae[$];de===void 0&&(de=A.clone(),ae[$]=de,U.addEventListener("dispose",ee)),A=de}if(A.visible=U.visible,A.wireframe=U.wireframe,P===Ii?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:x[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=s.properties.get(A);Z.light=G}return A}function R(z,U,G,P,A){if(z.visible===!1)return;if(z.layers.test(U.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ii)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const $=e.update(z),ae=z.material;if(Array.isArray(ae)){const de=$.groups;for(let le=0,ue=de.length;le<ue;le++){const k=de[le],oe=ae[k.materialIndex];if(oe&&oe.visible){const re=D(z,oe,P,A);z.onBeforeShadow(s,z,U,G,$,re,k),s.renderBufferDirect(G,null,$,re,z,k),z.onAfterShadow(s,z,U,G,$,re,k)}}}else if(ae.visible){const de=D(z,ae,P,A);z.onBeforeShadow(s,z,U,G,$,de,null),s.renderBufferDirect(G,null,$,de,z,null),z.onAfterShadow(s,z,U,G,$,de,null)}}const Z=z.children;for(let $=0,ae=Z.length;$<ae;$++)R(Z[$],U,G,P,A)}function ee(z){z.target.removeEventListener("dispose",ee);for(const G in m){const P=m[G],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const UM={[Vc]:Gc,[Wc]:qc,[Xc]:Yc,[Os]:jc,[Gc]:Vc,[qc]:Wc,[Yc]:Xc,[jc]:Os};function IM(s,e){function n(){let H=!1;const Ce=new zt;let se=null;const he=new zt(0,0,0,0);return{setMask:function(be){se!==be&&!H&&(s.colorMask(be,be,be,be),se=be)},setLocked:function(be){H=be},setClear:function(be,Pe,rt,Dt,Wt){Wt===!0&&(be*=Dt,Pe*=Dt,rt*=Dt),Ce.set(be,Pe,rt,Dt),he.equals(Ce)===!1&&(s.clearColor(be,Pe,rt,Dt),he.copy(Ce))},reset:function(){H=!1,se=null,he.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,se=null,he=null,be=null;return{setReversed:function(Pe){if(Ce!==Pe){const rt=e.get("EXT_clip_control");Ce?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=be;be=null,this.setClear(Dt)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!H&&(s.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Ce&&(Pe=UM[Pe]),he!==Pe){switch(Pe){case Vc:s.depthFunc(s.NEVER);break;case Gc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case jc:s.depthFunc(s.GEQUAL);break;case qc:s.depthFunc(s.GREATER);break;case Yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){H=Pe},setClear:function(Pe){be!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){H=!1,se=null,he=null,be=null,Ce=!1}}}function a(){let H=!1,Ce=null,se=null,he=null,be=null,Pe=null,rt=null,Dt=null,Wt=null;return{setTest:function(gt){H||(gt?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(gt){Ce!==gt&&!H&&(s.stencilMask(gt),Ce=gt)},setFunc:function(gt,vn,dn){(se!==gt||he!==vn||be!==dn)&&(s.stencilFunc(gt,vn,dn),se=gt,he=vn,be=dn)},setOp:function(gt,vn,dn){(Pe!==gt||rt!==vn||Dt!==dn)&&(s.stencilOp(gt,vn,dn),Pe=gt,rt=vn,Dt=dn)},setLocked:function(gt){H=gt},setClear:function(gt){Wt!==gt&&(s.clearStencil(gt),Wt=gt)},reset:function(){H=!1,Ce=null,se=null,he=null,be=null,Pe=null,rt=null,Dt=null,Wt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},v=new WeakMap,y=[],w=null,C=!1,S=null,g=null,N=null,D=null,R=null,ee=null,z=null,U=new Rt(0,0,0),G=0,P=!1,A=null,F=null,Z=null,$=null,ae=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ue=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(k)[1]),le=ue>=1):k.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),le=ue>=2);let oe=null,re={};const I=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),De=new zt().fromArray(I),K=new zt().fromArray(ne);function ce(H,Ce,se,he){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(H,Pe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<se;rt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ce+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Se={};Se[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Os),dt(!1),ut(gp),ve(s.CULL_FACE),X(gr);function ve(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ue(H,Ce){return x[H]!==Ce?(s.bindFramebuffer(H,Ce),x[H]=Ce,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ze(H,Ce){let se=y,he=!1;if(H){se=v.get(Ce),se===void 0&&(se=[],v.set(Ce,se));const be=H.textures;if(se.length!==be.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)se[Pe]=s.COLOR_ATTACHMENT0+Pe;se.length=be.length,he=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,he=!0);he&&s.drawBuffers(se)}function At(H){return w!==H?(s.useProgram(H),w=H,!0):!1}const ht={[Hr]:s.FUNC_ADD,[$_]:s.FUNC_SUBTRACT,[K_]:s.FUNC_REVERSE_SUBTRACT};ht[Z_]=s.MIN,ht[Q_]=s.MAX;const bt={[J_]:s.ZERO,[ev]:s.ONE,[tv]:s.SRC_COLOR,[zc]:s.SRC_ALPHA,[av]:s.SRC_ALPHA_SATURATE,[sv]:s.DST_COLOR,[iv]:s.DST_ALPHA,[nv]:s.ONE_MINUS_SRC_COLOR,[Hc]:s.ONE_MINUS_SRC_ALPHA,[ov]:s.ONE_MINUS_DST_COLOR,[rv]:s.ONE_MINUS_DST_ALPHA,[lv]:s.CONSTANT_COLOR,[uv]:s.ONE_MINUS_CONSTANT_COLOR,[cv]:s.CONSTANT_ALPHA,[fv]:s.ONE_MINUS_CONSTANT_ALPHA};function X(H,Ce,se,he,be,Pe,rt,Dt,Wt,gt){if(H===gr){C===!0&&(we(s.BLEND),C=!1);return}if(C===!1&&(ve(s.BLEND),C=!0),H!==Y_){if(H!==S||gt!==P){if((g!==Hr||R!==Hr)&&(s.blendEquation(s.FUNC_ADD),g=Hr,R=Hr),gt)switch(H){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _p:s.blendFunc(s.ONE,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _p:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}N=null,D=null,ee=null,z=null,U.set(0,0,0),G=0,S=H,P=gt}return}be=be||Ce,Pe=Pe||se,rt=rt||he,(Ce!==g||be!==R)&&(s.blendEquationSeparate(ht[Ce],ht[be]),g=Ce,R=be),(se!==N||he!==D||Pe!==ee||rt!==z)&&(s.blendFuncSeparate(bt[se],bt[he],bt[Pe],bt[rt]),N=se,D=he,ee=Pe,z=rt),(Dt.equals(U)===!1||Wt!==G)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Wt),U.copy(Dt),G=Wt),S=H,P=!1}function fn(H,Ce){H.side===Ni?we(s.CULL_FACE):ve(s.CULL_FACE);let se=H.side===Rn;Ce&&(se=!se),dt(se),H.blending===Is&&H.transparent===!1?X(gr):X(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),f.setFunc(H.depthFunc),f.setTest(H.depthTest),f.setMask(H.depthWrite),u.setMask(H.colorWrite);const he=H.stencilWrite;d.setTest(he),he&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){A!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),A=H)}function ut(H){H!==X_?(ve(s.CULL_FACE),H!==F&&(H===gp?s.cullFace(s.BACK):H===j_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),F=H}function Ye(H){H!==Z&&(le&&s.lineWidth(H),Z=H)}function Tt(H,Ce,se){H?(ve(s.POLYGON_OFFSET_FILL),($!==Ce||ae!==se)&&(s.polygonOffset(Ce,se),$=Ce,ae=se)):we(s.POLYGON_OFFSET_FILL)}function qe(H){H?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+de-1),oe!==H&&(s.activeTexture(H),oe=H)}function E(H,Ce,se){se===void 0&&(oe===null?se=s.TEXTURE0+de-1:se=oe);let he=re[se];he===void 0&&(he={type:void 0,texture:void 0},re[se]=he),(he.type!==H||he.texture!==Ce)&&(oe!==se&&(s.activeTexture(se),oe=se),s.bindTexture(H,Ce||Se[H]),he.type=H,he.texture=Ce)}function Y(){const H=re[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(H){De.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function ke(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function ct(H,Ce){let se=m.get(Ce);se===void 0&&(se=new WeakMap,m.set(Ce,se));let he=se.get(H);he===void 0&&(he=s.getUniformBlockIndex(Ce,H.name),se.set(H,he))}function it(H,Ce){const he=m.get(Ce).get(H);p.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,H.__bindingPointIndex),p.set(Ce,he))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},oe=null,re={},x={},v=new WeakMap,y=[],w=null,C=!1,S=null,g=null,N=null,D=null,R=null,ee=null,z=null,U=new Rt(0,0,0),G=0,P=!1,A=null,F=null,Z=null,$=null,ae=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:we,bindFramebuffer:Ue,drawBuffers:Ze,useProgram:At,setBlending:X,setMaterial:fn,setFlipSided:dt,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:qe,activeTexture:b,bindTexture:E,unbindTexture:Y,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ie,scissor:Je,viewport:ke,reset:Et}}function hm(s,e,n,r){const a=NM(r);switch(n){case Mm:return s*e;case Tm:return s*e;case wm:return s*e*2;case Am:return s*e/a.components*a.byteLength;case Uf:return s*e/a.components*a.byteLength;case Cm:return s*e*2/a.components*a.byteLength;case If:return s*e*2/a.components*a.byteLength;case Em:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case Nf:return s*e*4/a.components*a.byteLength;case hl:case pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:case nf:return Math.max(s,16)*Math.max(e,8)/4;case Jc:case tf:return Math.max(s,8)*Math.max(e,8)/2;case rf:case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _l:case yf:case Mf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rm:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function NM(s){switch(s){case Bi:case xm:return{byteLength:1,components:1};case Do:case Sm:case Uo:return{byteLength:2,components:1};case Lf:case Df:return{byteLength:2,components:4};case jr:case bf:case Fi:return{byteLength:4,components:1};case ym:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function FM(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,_=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,E){return y?new OffscreenCanvas(b,E):yl("canvas")}function C(b,E,Y){let pe=1;const ge=qe(b);if((ge.width>Y||ge.height>Y)&&(pe=Y/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);x===void 0&&(x=w(fe,Ve));const Ae=E?w(fe,Ve):x;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(b,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,E,Y,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=E;if(E===s.RED&&(Y===s.FLOAT&&(fe=s.R32F),Y===s.HALF_FLOAT&&(fe=s.R16F),Y===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.R8UI),Y===s.UNSIGNED_SHORT&&(fe=s.R16UI),Y===s.UNSIGNED_INT&&(fe=s.R32UI),Y===s.BYTE&&(fe=s.R8I),Y===s.SHORT&&(fe=s.R16I),Y===s.INT&&(fe=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(fe=s.RG32F),Y===s.HALF_FLOAT&&(fe=s.RG16F),Y===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Y===s.UNSIGNED_INT&&(fe=s.RG32UI),Y===s.BYTE&&(fe=s.RG8I),Y===s.SHORT&&(fe=s.RG16I),Y===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Y===s.UNSIGNED_INT&&(fe=s.RGB32UI),Y===s.BYTE&&(fe=s.RGB8I),Y===s.SHORT&&(fe=s.RGB16I),Y===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Y===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Y===s.BYTE&&(fe=s.RGBA8I),Y===s.SHORT&&(fe=s.RGBA16I),Y===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),E===s.RGBA){const Ve=ge?El:vt.getTransfer(pe);Y===s.FLOAT&&(fe=s.RGBA32F),Y===s.HALF_FLOAT&&(fe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(fe=Ve===Ct?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(b,E){let Y;return b?E===null||E===jr||E===zs?Y=s.DEPTH24_STENCIL8:E===Fi?Y=s.DEPTH32F_STENCIL8:E===Do&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jr||E===zs?Y=s.DEPTH_COMPONENT24:E===Fi?Y=s.DEPTH_COMPONENT32F:E===Do&&(Y=s.DEPTH_COMPONENT16),Y}function ee(b,E){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==mi?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function z(b){const E=b.target;E.removeEventListener("dispose",z),G(E),E.isVideoTexture&&_.delete(E)}function U(b){const E=b.target;E.removeEventListener("dispose",U),A(E)}function G(b){const E=r.get(b);if(E.__webglInit===void 0)return;const Y=b.source,pe=v.get(Y);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(b),Object.keys(pe).length===0&&v.delete(Y)}r.remove(b)}function P(b){const E=r.get(b);s.deleteTexture(E.__webglTexture);const Y=b.source,pe=v.get(Y);delete pe[E.__cacheKey],f.memory.textures--}function A(b){const E=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=b.textures;for(let pe=0,ge=Y.length;pe<ge;pe++){const fe=r.get(Y[pe]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(Y[pe])}r.remove(b)}let F=0;function Z(){F=0}function $(){const b=F;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),F+=1,b}function ae(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function de(b,E){const Y=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(Y,b,E);return}}n.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function le(b,E){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){K(Y,b,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function ue(b,E){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){K(Y,b,E);return}n.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function k(b,E){const Y=r.get(b);if(b.version>0&&Y.__version!==b.version){ce(Y,b,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const oe={[Zc]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[Qc]:s.MIRRORED_REPEAT},re={[ai]:s.NEAREST,[yv]:s.NEAREST_MIPMAP_NEAREST,[Xa]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[cc]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},I={[Av]:s.NEVER,[Dv]:s.ALWAYS,[Cv]:s.LESS,[Pm]:s.LEQUAL,[Rv]:s.EQUAL,[Lv]:s.GEQUAL,[Pv]:s.GREATER,[bv]:s.NOTEQUAL};function ne(b,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===mi||E.magFilter===cc||E.magFilter===Xa||E.magFilter===Wr||E.minFilter===mi||E.minFilter===cc||E.minFilter===Xa||E.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,oe[E.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==Xa&&E.minFilter!==Wr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function De(b,E){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",z));const pe=E.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const fe=ae(E);if(fe!==b.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),ge[fe].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(E)),b.__cacheKey=fe,b.__webglTexture=ge[fe].texture}return Y}function K(b,E,Y){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=De(b,E),fe=E.source;n.bindTexture(pe,b.__webglTexture,s.TEXTURE0+Y);const Ve=r.get(fe);if(fe.version!==Ve.__version||ge===!0){n.activeTexture(s.TEXTURE0+Y);const Ae=vt.getPrimaries(vt.workingColorSpace),Ie=E.colorSpace===mr?null:vt.getPrimaries(E.colorSpace),lt=E.colorSpace===mr||Ae===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=C(E.image,!1,a.maxTextureSize);ye=Tt(E,ye);const Oe=u.convert(E.format,E.colorSpace),Qe=u.convert(E.type);let Je=D(E.internalFormat,Oe,Qe,E.colorSpace,E.isVideoTexture);ne(pe,E);let ke;const ct=E.mipmaps,it=E.isVideoTexture!==!0,Et=Ve.__version===void 0||ge===!0,H=fe.dataReady,Ce=ee(E,ye);if(E.isDepthTexture)Je=R(E.format===Hs,E.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Qe,null));else if(E.isDataTexture)if(ct.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let se=0,he=ct.length;se<he;se++)ke=ct[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,Qe,ke.data);E.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height),H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Oe,Qe,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,Oe,Qe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ct[0].width,ct[0].height,ye.depth);for(let se=0,he=ct.length;se<he;se++)if(ke=ct[se],E.format!==oi)if(Oe!==null)if(it){if(H)if(E.layerUpdates.size>0){const be=hm(ke.width,ke.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=ke.data.subarray(Pe*be/ke.data.BYTES_PER_ELEMENT,(Pe+1)*be/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Pe,ke.width,ke.height,1,Oe,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,ye.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,ye.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,ye.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,se,Je,ke.width,ke.height,ye.depth,0,Oe,Qe,ke.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Ce,Je,ct[0].width,ct[0].height);for(let se=0,he=ct.length;se<he;se++)ke=ct[se],E.format!==oi?Oe!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,se,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(E.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Je,ye.width,ye.height,ye.depth),H)if(E.layerUpdates.size>0){const se=hm(ye.width,ye.height,E.format,E.type);for(const he of E.layerUpdates){const be=ye.data.subarray(he*se/ye.data.BYTES_PER_ELEMENT,(he+1)*se/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Oe,Qe,be)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Qe,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,Oe,Qe,ye.data);else if(E.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Ce,Je,ye.width,ye.height,ye.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Oe,Qe,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,Oe,Qe,ye.data);else if(E.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Ce,Je,ye.width,ye.height);else{let se=ye.width,he=ye.height;for(let be=0;be<Ce;be++)n.texImage2D(s.TEXTURE_2D,be,Je,se,he,0,Oe,Qe,null),se>>=1,he>>=1}}else if(ct.length>0){if(it&&Et){const se=qe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}for(let se=0,he=ct.length;se<he;se++)ke=ct[se],it?H&&n.texSubImage2D(s.TEXTURE_2D,se,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,se,Je,Oe,Qe,ke);E.generateMipmaps=!1}else if(it){if(Et){const se=qe(ye);n.texStorage2D(s.TEXTURE_2D,Ce,Je,se.width,se.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,ye)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,ye);S(E)&&g(pe),Ve.__version=fe.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ce(b,E,Y){if(E.image.length!==6)return;const pe=De(b,E),ge=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Y);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){n.activeTexture(s.TEXTURE0+Y);const Ve=vt.getPrimaries(vt.workingColorSpace),Ae=E.colorSpace===mr?null:vt.getPrimaries(E.colorSpace),Ie=E.colorSpace===mr||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!lt&&!ye?Oe[he]=C(E.image[he],!0,a.maxCubemapSize):Oe[he]=ye?E.image[he].image:E.image[he],Oe[he]=Tt(E,Oe[he]);const Qe=Oe[0],Je=u.convert(E.format,E.colorSpace),ke=u.convert(E.type),ct=D(E.internalFormat,Je,ke,E.colorSpace),it=E.isVideoTexture!==!0,Et=fe.__version===void 0||pe===!0,H=ge.dataReady;let Ce=ee(E,Qe);ne(s.TEXTURE_CUBE_MAP,E);let se;if(lt){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,Qe.width,Qe.height);for(let he=0;he<6;he++){se=Oe[he].mipmaps;for(let be=0;be<se.length;be++){const Pe=se[be];E.format!==oi?Je!==null?it?H&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Pe.width,Pe.height,Je,ke,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,ct,Pe.width,Pe.height,0,Je,ke,Pe.data)}}}else{if(se=E.mipmaps,it&&Et){se.length>0&&Ce++;const he=qe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ct,he.width,he.height)}for(let he=0;he<6;he++)if(ye){it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,ke,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Oe[he].width,Oe[he].height,0,Je,ke,Oe[he].data);for(let be=0;be<se.length;be++){const rt=se[be].image[he].image;it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,rt.width,rt.height,Je,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Je,ke,Oe[he]);for(let be=0;be<se.length;be++){const Pe=se[be];it?H&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Je,ke,Pe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,ct,Je,ke,Pe.image[he])}}}S(E)&&g(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Se(b,E,Y,pe,ge,fe){const Ve=u.convert(Y.format,Y.colorSpace),Ae=u.convert(Y.type),Ie=D(Y.internalFormat,Ve,Ae,Y.colorSpace),lt=r.get(E),ye=r.get(Y);if(ye.__renderTarget=E,!lt.__hasExternalTextures){const Oe=Math.max(1,E.width>>fe),Qe=Math.max(1,E.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,fe,Ie,Oe,Qe,E.depth,0,Ve,Ae,null):n.texImage2D(ge,fe,Ie,Oe,Qe,0,Ve,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,dt(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,b),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=R(E.stencilBuffer,ge),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=dt(E);ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,fe,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],Ve=u.convert(fe.format,fe.colorSpace),Ae=u.convert(fe.type),Ie=D(fe.internalFormat,Ve,Ae,fe.colorSpace),lt=dt(E);Y&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ie,E.width,E.height):ut(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ie,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const ge=pe.__webglTexture,fe=dt(E);if(E.depthTexture.format===Ns)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(E.depthTexture.format===Hs)ut(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const E=r.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,b)}else if(Y){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,E,Y){const pe=r.get(b);E!==void 0&&Se(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ue(b)}function At(b){const E=b.texture,Y=r.get(b),pe=r.get(E);b.addEventListener("dispose",U);const ge=b.textures,fe=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,f.memory.textures++),fe){Y.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)Y.__webglFramebuffer[Ae][Ie]=s.createFramebuffer()}else Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)Y.__webglFramebuffer[Ae]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=r.get(ge[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ut(b)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ie=ge[Ae];Y.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae]);const lt=u.convert(Ie.format,Ie.colorSpace),ye=u.convert(Ie.type),Oe=D(Ie.internalFormat,lt,ye,Ie.colorSpace,b.isXRRenderTarget===!0),Qe=dt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)Se(Y.__webglFramebuffer[Ae][Ie],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Se(Y.__webglFramebuffer[Ae],b,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ie=ge.length;Ae<Ie;Ae++){const lt=ge[Ae],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ne(s.TEXTURE_2D,lt),Se(Y.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ae=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),ne(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ie=0;Ie<E.mipmaps.length;Ie++)Se(Y.__webglFramebuffer[Ie],b,E,s.COLOR_ATTACHMENT0,Ae,Ie);else Se(Y.__webglFramebuffer,b,E,s.COLOR_ATTACHMENT0,Ae,0);S(E)&&g(Ae),n.unbindTexture()}b.depthBuffer&&Ue(b)}function ht(b){const E=b.textures;for(let Y=0,pe=E.length;Y<pe;Y++){const ge=E[Y];if(S(ge)){const fe=N(b),Ve=r.get(ge).__webglTexture;n.bindTexture(fe,Ve),g(fe),n.unbindTexture()}}}const bt=[],X=[];function fn(b){if(b.samples>0){if(ut(b)===!1){const E=b.textures,Y=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),Ae=E.length>1;if(Ae)for(let Ie=0;Ie<E.length;Ie++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const lt=r.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Y,pe,0,0,Y,pe,ge,s.NEAREST),p===!0&&(bt.length=0,X.length=0,bt.push(s.COLOR_ATTACHMENT0+Ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(fe),X.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ie=0;Ie<E.length;Ie++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ie]);const lt=r.get(E[Ie]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const E=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const E=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(b){const E=f.render.frame;_.get(b)!==E&&(_.set(b,E),b.update())}function Tt(b,E){const Y=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Y!==Gs&&Y!==mr&&(vt.getTransfer(Y)===Ct?(pe!==oi||ge!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ut}function OM(s,e){function n(r,a=mr){let u;const f=vt.getTransfer(a);if(r===Bi)return s.UNSIGNED_BYTE;if(r===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Df)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ym)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xm)return s.BYTE;if(r===Sm)return s.SHORT;if(r===Do)return s.UNSIGNED_SHORT;if(r===bf)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===Uo)return s.HALF_FLOAT;if(r===Mm)return s.ALPHA;if(r===Em)return s.RGB;if(r===oi)return s.RGBA;if(r===Tm)return s.LUMINANCE;if(r===wm)return s.LUMINANCE_ALPHA;if(r===Ns)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Am)return s.RED;if(r===Uf)return s.RED_INTEGER;if(r===Cm)return s.RG;if(r===If)return s.RG_INTEGER;if(r===Nf)return s.RGBA_INTEGER;if(r===hl||r===pl||r===ml||r===gl)if(f===Ct)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ml)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jc||r===ef||r===tf||r===nf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Jc)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ef)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf||r===sf||r===of)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===rf||r===sf)return f===Ct?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===of)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===af||r===lf||r===uf||r===cf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===af)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ff)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===df)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sf)return f===Ct?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_l||r===yf||r===Mf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===_l)return f===Ct?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rm||r===Ef||r===Tf||r===wf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===_l)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ef)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class kM extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),g=this._getHandJoint(m,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=_.position.distanceTo(x.position),y=.02,w=.005;m.inputState.pinching&&v>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new dl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:zM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new ko(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GM extends Ws{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,v=null,y=null,w=null;const C=new VM,S=n.getContextAttributes();let g=null,N=null;const D=[],R=[],ee=new yt;let z=null;const U=new ri;U.viewport=new zt;const G=new ri;G.viewport=new zt;const P=[U,G],A=new kM;let F=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=D[K];return ce===void 0&&(ce=new Bc,D[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=D[K];return ce===void 0&&(ce=new Bc,D[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=D[K];return ce===void 0&&(ce=new Bc,D[K]=ce),ce.getHandSpace()};function $(K){const ce=R.indexOf(K.inputSource);if(ce===-1)return;const Se=D[ce];Se!==void 0&&(Se.update(K.inputSource,K.frame,m||f),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function ae(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",de);for(let K=0;K<D.length;K++){const ce=R[K];ce!==null&&(R[K]=null,D[K].disconnect(ce))}F=null,Z=null,C.reset(),e.setRenderTarget(g),y=null,v=null,x=null,a=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(ee.width,ee.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",de),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(ee),a.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new qr(y.framebufferWidth,y.framebufferHeight,{format:oi,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Se=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=S.stencil?Hs:Ns,Se=S.stencil?zs:jr);const we={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:u};x=new XRWebGLBinding(a,n),v=x.createProjectionLayer(we),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new qr(v.textureWidth,v.textureHeight,{format:oi,type:Bi,depthTexture:new Wm(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function de(K){for(let ce=0;ce<K.removed.length;ce++){const Se=K.removed[ce],ve=R.indexOf(Se);ve>=0&&(R[ve]=null,D[ve].disconnect(Se))}for(let ce=0;ce<K.added.length;ce++){const Se=K.added[ce];let ve=R.indexOf(Se);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=R.length){R.push(Se),ve=Ue;break}else if(R[Ue]===null){R[Ue]=Se,ve=Ue;break}if(ve===-1)break}const we=D[ve];we&&we.connect(Se)}}const le=new ie,ue=new ie;function k(K,ce,Se){le.setFromMatrixPosition(ce.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);const ve=le.distanceTo(ue),we=ce.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,Ze=we[14]/(we[10]-1),At=we[14]/(we[10]+1),ht=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],X=(we[8]-1)/we[0],fn=(Ue[8]+1)/Ue[0],dt=Ze*X,ut=Ze*fn,Ye=ve/(-X+fn),Tt=Ye*-X;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),we[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const qe=Ze+Ye,b=At+Ye,E=dt-Tt,Y=ut+(ve-Tt),pe=ht*At/b*qe,ge=bt*At/b*qe;K.projectionMatrix.makePerspective(E,Y,pe,ge,qe,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ce=K.near,Se=K.far;C.texture!==null&&(C.depthNear>0&&(ce=C.depthNear),C.depthFar>0&&(Se=C.depthFar)),A.near=G.near=U.near=ce,A.far=G.far=U.far=Se,(F!==A.near||Z!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,Z=A.far),U.layers.mask=K.layers.mask|2,G.layers.mask=K.layers.mask|4,A.layers.mask=U.layers.mask|G.layers.mask;const ve=K.parent,we=A.cameras;oe(A,ve);for(let Ue=0;Ue<we.length;Ue++)oe(we[Ue],ve);we.length===2?k(A,U,G):A.projectionMatrix.copy(U.projectionMatrix),re(K,A,ve)};function re(K,ce,Se){Se===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Af*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let I=null;function ne(K,ce){if(_=ce.getViewerPose(m||f),w=ce,_!==null){const Se=_.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ve=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ue=0;Ue<Se.length;Ue++){const Ze=Se[Ue];let At=null;if(y!==null)At=y.getViewport(Ze);else{const bt=x.getViewSubImage(v,Ze);At=bt.viewport,Ue===0&&(e.setRenderTargetTextures(N,bt.colorTexture,v.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(N))}let ht=P[Ue];ht===void 0&&(ht=new ri,ht.layers.enable(Ue),ht.viewport=new zt,P[Ue]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(At.x,At.y,At.width,At.height),Ue===0&&(A.matrix.copy(ht.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(ht)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ue=x.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&C.init(e,Ue,a.renderState)}}for(let Se=0;Se<D.length;Se++){const ve=R[Se],we=D[Se];ve!==null&&we!==void 0&&we.update(ve,ce,m||f)}I&&I(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),w=null}const De=new Vm;De.setAnimationLoop(ne),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const kr=new zi,WM=new Gt;function XM(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,km(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,N,D,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),x(S,g)):g.isMeshPhongMaterial?(u(S,g),_(S,g)):g.isMeshStandardMaterial?(u(S,g),v(S,g),g.isMeshPhysicalMaterial&&y(S,g,R)):g.isMeshMatcapMaterial?(u(S,g),w(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),C(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(f(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,N,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Rn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Rn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const N=e.get(g),D=N.envMap,R=N.envMapRotation;D&&(S.envMap.value=D,kr.copy(R),kr.x*=-1,kr.y*=-1,kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),S.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(kr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,N,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*N,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function x(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function v(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,N){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const N=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,D){const R=D.program;r.uniformBlockBinding(N,R)}function m(N,D){let R=a[N.id];R===void 0&&(w(N),R=_(N),a[N.id]=R,N.addEventListener("dispose",S));const ee=D.program;r.updateUBOMapping(N,ee);const z=e.render.frame;u[N.id]!==z&&(v(N),u[N.id]=z)}function _(N){const D=x();N.__bindingPointIndex=D;const R=s.createBuffer(),ee=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,ee,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function x(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const D=a[N.id],R=N.uniforms,ee=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,U=R.length;z<U;z++){const G=Array.isArray(R[z])?R[z]:[R[z]];for(let P=0,A=G.length;P<A;P++){const F=G[P];if(y(F,z,P,ee)===!0){const Z=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let de=0;de<$.length;de++){const le=$[de],ue=C(le);typeof le=="number"||typeof le=="boolean"?(F.__data[0]=le,s.bufferSubData(s.UNIFORM_BUFFER,Z+ae,F.__data)):le.isMatrix3?(F.__data[0]=le.elements[0],F.__data[1]=le.elements[1],F.__data[2]=le.elements[2],F.__data[3]=0,F.__data[4]=le.elements[3],F.__data[5]=le.elements[4],F.__data[6]=le.elements[5],F.__data[7]=0,F.__data[8]=le.elements[6],F.__data[9]=le.elements[7],F.__data[10]=le.elements[8],F.__data[11]=0):(le.toArray(F.__data,ae),ae+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,D,R,ee){const z=N.value,U=D+"_"+R;if(ee[U]===void 0)return typeof z=="number"||typeof z=="boolean"?ee[U]=z:ee[U]=z.clone(),!0;{const G=ee[U];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return ee[U]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function w(N){const D=N.uniforms;let R=0;const ee=16;for(let U=0,G=D.length;U<G;U++){const P=Array.isArray(D[U])?D[U]:[D[U]];for(let A=0,F=P.length;A<F;A++){const Z=P[A],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let ae=0,de=$.length;ae<de;ae++){const le=$[ae],ue=C(le),k=R%ee,oe=k%ue.boundary,re=k+oe;R+=oe,re!==0&&ee-re<ue.storage&&(R+=ee-re),Z.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=ue.storage}}}const z=R%ee;return z>0&&(R+=ee-z),N.__size=R,N.__cache={},this}function C(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete u[D.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class qM{constructor(e={}){const{canvas:n=Iv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const w=new Uint32Array(4),C=new Int32Array(4);let S=null,g=null;const N=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=_r,this.toneMappingExposure=1;const R=this;let ee=!1,z=0,U=0,G=null,P=-1,A=null;const F=new zt,Z=new zt;let $=null;const ae=new Rt(0);let de=0,le=n.width,ue=n.height,k=1,oe=null,re=null;const I=new zt(0,0,le,ue),ne=new zt(0,0,le,ue);let De=!1;const K=new Hm;let ce=!1,Se=!1;const ve=new Gt,we=new Gt,Ue=new ie,Ze=new zt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return G===null?k:1}let X=r;function fn(T,V){return n.getContext(T,V)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),X===null){const V="webgl2";if(X=fn(V,T),X===null)throw fn(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let dt,ut,Ye,Tt,qe,b,E,Y,pe,ge,fe,Ve,Ae,Ie,lt,ye,Oe,Qe,Je,ke,ct,it,Et,H;function Ce(){dt=new QS(X),dt.init(),it=new OM(X,dt),ut=new jS(X,dt,e,it),Ye=new IM(X,dt),ut.reverseDepthBuffer&&v&&Ye.buffers.depth.setReversed(!0),Tt=new ty(X),qe=new xM,b=new FM(X,dt,Ye,qe,ut,it,Tt),E=new YS(R),Y=new ZS(R),pe=new l0(X),Et=new WS(X,pe),ge=new JS(X,pe,Tt,Et),fe=new iy(X,ge,pe,Tt),Je=new ny(X,ut,b),ye=new qS(qe),Ve=new vM(R,E,Y,dt,ut,Et,ye),Ae=new XM(R,qe),Ie=new yM,lt=new CM(dt),Qe=new GS(R,E,Y,Ye,fe,y,p),Oe=new DM(R,fe,ut),H=new jM(X,Tt,ut,Ye),ke=new XS(X,dt,Tt),ct=new ey(X,dt,Tt),Tt.programs=Ve.programs,R.capabilities=ut,R.extensions=dt,R.properties=qe,R.renderLists=Ie,R.shadowMap=Oe,R.state=Ye,R.info=Tt}Ce();const se=new GM(R,X);this.xr=se,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(le,ue,!1))},this.getSize=function(T){return T.set(le,ue)},this.setSize=function(T,V,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=T,ue=V,n.width=Math.floor(T*k),n.height=Math.floor(V*k),J===!0&&(n.style.width=T+"px",n.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(le*k,ue*k).floor()},this.setDrawingBufferSize=function(T,V,J){le=T,ue=V,k=J,n.width=Math.floor(T*J),n.height=Math.floor(V*J),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,V,J,te){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,V,J,te),Ye.viewport(F.copy(I).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,V,J,te){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,V,J,te),Ye.scissor(Z.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){Ye.setScissorTest(De=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(T=!0,V=!0,J=!0){let te=0;if(T){let W=!1;if(G!==null){const Te=G.texture.format;W=Te===Nf||Te===If||Te===Uf}if(W){const Te=G.texture.type,Me=Te===Bi||Te===jr||Te===Do||Te===zs||Te===Lf||Te===Df,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(w[0]=et,w[1]=nt,w[2]=We,w[3]=ze,X.clearBufferuiv(X.COLOR,0,w)):(C[0]=et,C[1]=nt,C[2]=We,C[3]=ze,X.clearBufferiv(X.COLOR,0,C))}else te|=X.COLOR_BUFFER_BIT}V&&(te|=X.DEPTH_BUFFER_BIT),J&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ie.dispose(),lt.dispose(),qe.dispose(),E.dispose(),Y.dispose(),fe.dispose(),Et.dispose(),H.dispose(),Ve.dispose(),se.dispose(),se.removeEventListener("sessionstart",$r),se.removeEventListener("sessionend",Vi),vi.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ee=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),ee=!1;const T=Tt.autoReset,V=Oe.enabled,J=Oe.autoUpdate,te=Oe.needsUpdate,W=Oe.type;Ce(),Tt.autoReset=T,Oe.enabled=V,Oe.autoUpdate=J,Oe.needsUpdate=te,Oe.type=W}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const V=T.target;V.removeEventListener("dispose",rt),Dt(V)}function Dt(T){Wt(T),qe.remove(T)}function Wt(T){const V=qe.get(T).programs;V!==void 0&&(V.forEach(function(J){Ve.releaseProgram(J)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,J,te,W,Te){V===null&&(V=At);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ge=Ho(T,V,J,te,W);Ye.setMaterial(te,Me);let ze=J.index,et=1;if(te.wireframe===!0){if(ze=ge.getWireframeAttribute(J),ze===void 0)return;et=2}const nt=J.drawRange,We=J.attributes.position;let mt=nt.start*et,Mt=(nt.start+nt.count)*et;Te!==null&&(mt=Math.max(mt,Te.start*et),Mt=Math.min(Mt,(Te.start+Te.count)*et)),ze!==null?(mt=Math.max(mt,0),Mt=Math.min(Mt,ze.count)):We!=null&&(mt=Math.max(mt,0),Mt=Math.min(Mt,We.count));const pt=Mt-mt;if(pt<0||pt===1/0)return;Et.setup(W,te,Ge,J,ze);let nn,st=ke;if(ze!==null&&(nn=pe.get(ze),st=ct,st.setIndex(nn)),W.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*bt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(W.isLine){let je=te.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*bt()),W.isLineSegments?st.setMode(X.LINES):W.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else W.isPoints?st.setMode(X.POINTS):W.isSprite&&st.setMode(X.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)st.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const je=W._multiDrawStarts,qn=W._multiDrawCounts,xt=W._multiDrawCount,rn=ze?pe.get(ze).bytesPerElement:1,Yn=qe.get(te).currentProgram.getUniforms();for(let Xt=0;Xt<xt;Xt++)Yn.setValue(X,"_gl_DrawID",Xt),st.render(je[Xt]/rn,qn[Xt])}else if(W.isInstancedMesh)st.renderInstances(mt,pt,W.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,qn=Math.min(J.instanceCount,je);st.renderInstances(mt,pt,qn)}else st.render(mt,pt)};function gt(T,V,J){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=Rn,T.needsUpdate=!0,Kr(T,V,J),T.side=vr,T.needsUpdate=!0,Kr(T,V,J),T.side=Ni):Kr(T,V,J)}this.compile=function(T,V,J=null){J===null&&(J=T),g=lt.get(J),g.init(V),D.push(g),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),T!==J&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();const te=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Me=0;Me<Te.length;Me++){const Ge=Te[Me];gt(Ge,J,W),te.add(Ge)}else gt(Te,J,W),te.add(Te)}),D.pop(),g=null,te},this.compileAsync=function(T,V,J=null){const te=this.compile(T,V,J);return new Promise(W=>{function Te(){if(te.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&te.delete(Me)}),te.size===0){W(T);return}setTimeout(Te,10)}dt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let vn=null;function dn(T){vn&&vn(T)}function $r(){vi.stop()}function Vi(){vi.start()}const vi=new Vm;vi.setAnimationLoop(dn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){vn=T,se.setAnimationLoop(T),T===null?vi.stop():vi.start()},se.addEventListener("sessionstart",$r),se.addEventListener("sessionend",Vi),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ee===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,V,G),g=lt.get(T,D.length),g.init(V),D.push(g),we.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(we),Se=this.localClippingEnabled,ce=ye.init(this.clippingPlanes,Se),S=Ie.get(T,N.length),S.init(),N.push(S),se.enabled===!0&&se.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&xi(Te,V,-1/0,R.sortObjects)}xi(T,V,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(oe,re),ht=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ht&&Qe.addToRenderList(S,T),this.info.render.frame++,ce===!0&&ye.beginShadows();const J=g.state.shadowsArray;Oe.render(J,T,V),ce===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,W=S.transmissive;if(g.setupLights(),V.isArrayCamera){const Te=V.cameras;if(W.length>0)for(let Me=0,Ge=Te.length;Me<Ge;Me++){const ze=Te[Me];Sr(te,W,T,ze)}ht&&Qe.render(T);for(let Me=0,Ge=Te.length;Me<Ge;Me++){const ze=Te[Me];xr(S,T,ze,ze.viewport)}}else W.length>0&&Sr(te,W,T,V),ht&&Qe.render(T),xr(S,T,V);G!==null&&(b.updateMultisampleRenderTarget(G),b.updateRenderTargetMipmap(G)),T.isScene===!0&&T.onAfterRender(R,T,V),Et.resetDefaultState(),P=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],ce===!0&&ye.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function xi(T,V,J,te){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){te&&Ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Me=fe.update(T),Ge=T.material;Ge.visible&&S.push(T,Me,Ge,J,Ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){const Me=fe.update(T),Ge=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ze.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Ge)){const ze=Me.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ge[We.materialIndex];mt&&mt.visible&&S.push(T,Me,mt,J,Ze.z,We)}}else Ge.visible&&S.push(T,Me,Ge,J,Ze.z,null)}}const Te=T.children;for(let Me=0,Ge=Te.length;Me<Ge;Me++)xi(Te[Me],V,J,te)}function xr(T,V,J,te){const W=T.opaque,Te=T.transmissive,Me=T.transparent;g.setupLightsView(J),ce===!0&&ye.setGlobalState(R.clippingPlanes,J),te&&Ye.viewport(F.copy(te)),W.length>0&&Gi(W,V,J),Te.length>0&&Gi(Te,V,J),Me.length>0&&Gi(Me,V,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Sr(T,V,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new qr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Uo:Bi,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Te=g.state.transmissionRenderTarget[te.id],Me=te.viewport||F;Te.setSize(Me.z,Me.w);const Ge=R.getRenderTarget();R.setRenderTarget(Te),R.getClearColor(ae),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),ht&&Qe.render(J);const ze=R.toneMapping;R.toneMapping=_r;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),ce===!0&&ye.setGlobalState(R.clippingPlanes,te),Gi(T,J,te),b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=V.length;We<mt;We++){const Mt=V[We],pt=Mt.object,nn=Mt.geometry,st=Mt.material,je=Mt.group;if(st.side===Ni&&pt.layers.test(te.layers)){const qn=st.side;st.side=Rn,st.needsUpdate=!0,Bo(pt,J,te,nn,st,je),st.side=qn,st.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(Te),b.updateRenderTargetMipmap(Te))}R.setRenderTarget(Ge),R.setClearColor(ae,de),et!==void 0&&(te.viewport=et),R.toneMapping=ze}function Gi(T,V,J){const te=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Te=T.length;W<Te;W++){const Me=T[W],Ge=Me.object,ze=Me.geometry,et=te===null?Me.material:te,nt=Me.group;Ge.layers.test(J.layers)&&Bo(Ge,V,J,ze,et,nt)}}function Bo(T,V,J,te,W,Te){T.onBeforeRender(R,V,J,te,W,Te),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,V,J,te,T,Te),W.transparent===!0&&W.side===Ni&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,R.renderBufferDirect(J,V,te,W,T,Te),W.side=vr,W.needsUpdate=!0,R.renderBufferDirect(J,V,te,W,T,Te),W.side=Ni):R.renderBufferDirect(J,V,te,W,T,Te),T.onAfterRender(R,V,J,te,W,Te)}function Kr(T,V,J){V.isScene!==!0&&(V=At);const te=qe.get(T),W=g.state.lights,Te=g.state.shadowsArray,Me=W.state.version,Ge=Ve.getParameters(T,W.state,Te,V,J),ze=Ve.getProgramCacheKey(Ge);let et=te.programs;te.environment=T.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(T.isMeshStandardMaterial?Y:E).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Me)return li(T,Ge),nt}else Ge.uniforms=Ve.getUniforms(T),T.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),te.uniforms=Ge.uniforms;const We=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=ye.uniform),li(T,Ge),te.needsLights=Cl(T),te.lightsStateVersion=Me,te.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function zo(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=vl.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function li(T,V){const J=qe.get(T);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Ho(T,V,J,te,W){V.isScene!==!0&&(V=At),b.resetTextureUnits();const Te=V.fog,Me=te.isMeshStandardMaterial?V.environment:null,Ge=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Gs,ze=(te.isMeshStandardMaterial?Y:E).get(te.envMap||Me),et=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let pt=_r;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(pt=R.toneMapping);const nn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,st=nn!==void 0?nn.length:0,je=qe.get(te),qn=g.state.lights;if(ce===!0&&(Se===!0||T!==A)){const hn=T===A&&te.id===P;ye.setState(te,T,hn)}let xt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==qn.state.version||je.outputColorSpace!==Ge||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isBatchedMesh&&je.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&je.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&je.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&je.instancingMorph===!1&&W.morphTexture!==null||je.envMap!==ze||te.fog===!0&&je.fog!==Te||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==mt||je.morphColors!==Mt||je.toneMapping!==pt||je.morphTargetsCount!==st)&&(xt=!0):(xt=!0,je.__version=te.version);let rn=je.currentProgram;xt===!0&&(rn=Kr(te,V,W));let Yn=!1,Xt=!1,ui=!1;const Pt=rn.getUniforms(),kn=je.uniforms;if(Ye.useProgram(rn.program)&&(Yn=!0,Xt=!0,ui=!0),te.id!==P&&(P=te.id,Xt=!0),Yn||A!==T){Ye.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),Fv(ve),Ov(ve),Pt.setValue(X,"projectionMatrix",ve)):Pt.setValue(X,"projectionMatrix",T.projectionMatrix),Pt.setValue(X,"viewMatrix",T.matrixWorldInverse);const Bn=Pt.map.cameraPosition;Bn!==void 0&&Bn.setValue(X,Ue.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Xt=!0,ui=!0)}if(W.isSkinnedMesh){Pt.setOptional(X,W,"bindMatrix"),Pt.setOptional(X,W,"bindMatrixInverse");const hn=W.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Pt.setValue(X,"boneTexture",hn.boneTexture,b))}W.isBatchedMesh&&(Pt.setOptional(X,W,"batchingTexture"),Pt.setValue(X,"batchingTexture",W._matricesTexture,b),Pt.setOptional(X,W,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",W._indirectTexture,b),Pt.setOptional(X,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",W._colorsTexture,b));const Si=J.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Je.update(W,J,rn),(Xt||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,Pt.setValue(X,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(kn.envMap.value=ze,kn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(kn.envMapIntensity.value=V.environmentIntensity),Xt&&(Pt.setValue(X,"toneMappingExposure",R.toneMappingExposure),je.needsLights&&Vo(kn,ui),Te&&te.fog===!0&&Ae.refreshFogUniforms(kn,Te),Ae.refreshMaterialUniforms(kn,te,k,ue,g.state.transmissionRenderTarget[T.id]),vl.upload(X,zo(je),kn,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vl.upload(X,zo(je),kn,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(X,"center",W.center),Pt.setValue(X,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(X,"normalMatrix",W.normalMatrix),Pt.setValue(X,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const hn=te.uniformsGroups;for(let Bn=0,xn=hn.length;Bn<xn;Bn++){const Go=hn[Bn];H.update(Go,rn),H.bind(Go,rn)}}return rn}function Vo(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Cl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,V,J){qe.get(T.texture).__webglTexture=V,qe.get(T.depthTexture).__webglTexture=J;const te=qe.get(T);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const J=qe.get(T);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,J=0){G=T,z=V,U=J;let te=!0,W=null,Te=!1,Me=!1;if(T){const ze=qe.get(T);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(X.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(ze.__hasExternalTextures)b.rebindTextures(T,qe.get(T.texture).__webglTexture,qe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&qe.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?W=nt[V][J]:W=nt[V],Te=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?W=qe.get(T).__webglMultisampledFramebuffer:Array.isArray(nt)?W=nt[J]:W=nt,F.copy(T.viewport),Z.copy(T.scissor),$=T.scissorTest}else F.copy(I).multiplyScalar(k).floor(),Z.copy(ne).multiplyScalar(k).floor(),$=De;if(Ye.bindFramebuffer(X.FRAMEBUFFER,W)&&te&&Ye.drawBuffers(T,W),Ye.viewport(F),Ye.scissor(Z),Ye.setScissorTest($),Te){const ze=qe.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,J)}else if(Me){const ze=qe.get(T.texture),et=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ze.__webglTexture,J||0,et)}P=-1},this.readRenderTargetPixels=function(T,V,J,te,W,Te,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);try{const ze=T.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-te&&J>=0&&J<=T.height-W&&X.readPixels(V,J,te,W,it.convert(et),it.convert(nt),Te)}finally{const ze=G!==null?qe.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,V,J,te,W,Te,Me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const ze=T.texture,et=ze.format,nt=ze.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-te&&J>=0&&J<=T.height-W){Ye.bindFramebuffer(X.FRAMEBUFFER,Ge);const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,Te.byteLength,X.STREAM_READ),X.readPixels(V,J,te,W,it.convert(et),it.convert(nt),0);const mt=G!==null?qe.get(G).__webglFramebuffer:null;Ye.bindFramebuffer(X.FRAMEBUFFER,mt);const Mt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Nv(X,Mt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Te),X.deleteBuffer(We),X.deleteSync(Mt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,J=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const te=Math.pow(2,-J),W=Math.floor(T.image.width*te),Te=Math.floor(T.image.height*te),Me=V!==null?V.x:0,Ge=V!==null?V.y:0;b.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,Me,Ge,W,Te),Ye.unbindTexture()},this.copyTextureToTexture=function(T,V,J=null,te=null,W=0){T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,T=arguments[1],V=arguments[2],W=arguments[3]||0,J=null);let Te,Me,Ge,ze,et,nt,We,mt,Mt;const pt=T.isCompressedTexture?T.mipmaps[W]:T.image;J!==null?(Te=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ge=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,et=J.min.y,nt=J.isBox3?J.min.z:0):(Te=pt.width,Me=pt.height,Ge=pt.depth||1,ze=0,et=0,nt=0),te!==null?(We=te.x,mt=te.y,Mt=te.z):(We=0,mt=0,Mt=0);const nn=it.convert(V.format),st=it.convert(V.type);let je;V.isData3DTexture?(b.setTexture3D(V,0),je=X.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),je=X.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),je=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,V.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,V.unpackAlignment);const qn=X.getParameter(X.UNPACK_ROW_LENGTH),xt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),rn=X.getParameter(X.UNPACK_SKIP_PIXELS),Yn=X.getParameter(X.UNPACK_SKIP_ROWS),Xt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,pt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nt);const ui=T.isDataArrayTexture||T.isData3DTexture,Pt=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const kn=qe.get(T),Si=qe.get(V),hn=qe.get(kn.__renderTarget),Bn=qe.get(Si.__renderTarget);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let xn=0;xn<Ge;xn++)ui&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(T).__webglTexture,W,nt+xn),T.isDepthTexture?(Pt&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qe.get(V).__webglTexture,W,Mt+xn),X.blitFramebuffer(ze,et,Te,Me,We,mt,Te,Me,X.DEPTH_BUFFER_BIT,X.NEAREST)):Pt?X.copyTexSubImage3D(je,W,We,mt,Mt+xn,ze,et,Te,Me):X.copyTexSubImage2D(je,W,We,mt,Mt+xn,ze,et,Te,Me);Ye.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(je,W,We,mt,Mt,Te,Me,Ge,nn,st,pt.data):V.isCompressedArrayTexture?X.compressedTexSubImage3D(je,W,We,mt,Mt,Te,Me,Ge,nn,pt.data):X.texSubImage3D(je,W,We,mt,Mt,Te,Me,Ge,nn,st,pt):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,W,We,mt,Te,Me,nn,st,pt.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,W,We,mt,pt.width,pt.height,nn,pt.data):X.texSubImage2D(X.TEXTURE_2D,W,We,mt,Te,Me,nn,st,pt);X.pixelStorei(X.UNPACK_ROW_LENGTH,qn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,rn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Yn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Xt),W===0&&V.generateMipmaps&&X.generateMipmap(je),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,V,J=null,te=null,W=0){return T.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,T=arguments[2],V=arguments[3],W=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,J,te,W)},this.initRenderTarget=function(T){qe.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){z=0,U=0,G=null,Ye.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),n.unpackColorSpace=vt._getUnpackColorSpace()}}class YM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $M{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=pm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function pm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);const xl=8,KM=`
#define MAX_COLORS ${xl}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,ZM=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,QM=({className:s,style:e,rotation:n=45,speed:r=.2,colors:a=[],transparent:u=!0,autoRotate:f=0,scale:d=1,frequency:p=1,warpStrength:m=1,mouseInfluence:_=1,parallax:x=.5,noise:v=.1})=>{const y=gn.useRef(null),w=gn.useRef(null),C=gn.useRef(null),S=gn.useRef(null),g=gn.useRef(null),N=gn.useRef(n),D=gn.useRef(f),R=gn.useRef(new yt(0,0)),ee=gn.useRef(new yt(0,0)),z=gn.useRef(8);return gn.useEffect(()=>{const U=y.current;if(!U)return;const G=new YM,P=new Gm(-1,1,1,-1,0,1),A=new ko(2,2),F=Array.from({length:xl},()=>new ie(0,0,0)),Z=new Hi({vertexShader:ZM,fragmentShader:KM,uniforms:{uCanvas:{value:new yt(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new yt(1,0)},uColorCount:{value:0},uColors:{value:F},uTransparent:{value:u?1:0},uScale:{value:d},uFrequency:{value:p},uWarpStrength:{value:m},uPointer:{value:new yt(0,0)},uMouseInfluence:{value:_},uParallax:{value:x},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});S.current=Z;const $=new gi(A,Z);G.add($);const ae=new qM({antialias:!1,powerPreference:"high-performance",alpha:!0});w.current=ae,ae.outputColorSpace=Fn,ae.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ae.setClearColor(0,u?0:1),ae.domElement.style.width="100%",ae.domElement.style.height="100%",ae.domElement.style.display="block",U.appendChild(ae.domElement);const de=new $M,le=()=>{const oe=U.clientWidth||1,re=U.clientHeight||1;ae.setSize(oe,re,!1),Z.uniforms.uCanvas.value.set(oe,re)};le();const ue=window;if("ResizeObserver"in ue){const oe=new ResizeObserver(le);oe.observe(U),g.current=oe}else ue.addEventListener("resize",le);const k=()=>{const oe=de.getDelta(),re=de.elapsedTime;Z.uniforms.uTime.value=re;const ne=(N.current%360+D.current*re)*Math.PI/180,De=Math.cos(ne),K=Math.sin(ne);Z.uniforms.uRot.value.set(De,K);const ce=ee.current,Se=R.current,ve=Math.min(1,oe*z.current);ce.lerp(Se,ve),Z.uniforms.uPointer.value.copy(ce),ae.render(G,P),C.current=requestAnimationFrame(k)};return C.current=requestAnimationFrame(k),()=>{C.current!==null&&cancelAnimationFrame(C.current),g.current?g.current.disconnect():ue.removeEventListener("resize",le),A.dispose(),Z.dispose(),ae.dispose(),ae.domElement&&ae.domElement.parentElement===U&&U.removeChild(ae.domElement)}},[p,_,v,x,d,r,u,m]),gn.useEffect(()=>{const U=S.current,G=w.current;if(!U)return;N.current=n,D.current=f,U.uniforms.uSpeed.value=r,U.uniforms.uScale.value=d,U.uniforms.uFrequency.value=p,U.uniforms.uWarpStrength.value=m,U.uniforms.uMouseInfluence.value=_,U.uniforms.uParallax.value=x,U.uniforms.uNoise.value=v;const P=F=>{const Z=F.replace("#","").trim(),$=Z.length===3?[parseInt(Z[0]+Z[0],16),parseInt(Z[1]+Z[1],16),parseInt(Z[2]+Z[2],16)]:[parseInt(Z.slice(0,2),16),parseInt(Z.slice(2,4),16),parseInt(Z.slice(4,6),16)];return new ie($[0]/255,$[1]/255,$[2]/255)},A=(a||[]).filter(Boolean).slice(0,xl).map(P);for(let F=0;F<xl;F+=1){const Z=U.uniforms.uColors.value[F];F<A.length?Z.copy(A[F]):Z.set(0,0,0)}U.uniforms.uColorCount.value=A.length,U.uniforms.uTransparent.value=u?1:0,G&&G.setClearColor(0,u?0:1)},[n,f,r,d,p,m,_,x,v,a,u]),gn.useEffect(()=>{const U=S.current,G=y.current;if(!U||!G)return;const P=A=>{const F=G.getBoundingClientRect(),Z=(A.clientX-F.left)/(F.width||1)*2-1,$=-((A.clientY-F.top)/(F.height||1)*2-1);R.current.set(Z,$)};return G.addEventListener("pointermove",P),()=>{G.removeEventListener("pointermove",P)}},[]),Fe.jsx("div",{ref:y,className:`color-bends-container ${s??""}`,style:e})},JM=()=>Fe.jsxs("div",{className:"brand",children:[Fe.jsx("img",{className:"brand-photo",src:"/assets/mypic.jpeg",alt:"Giacomo portrait"}),Fe.jsx("div",{className:"brand-text",children:Fe.jsx("span",{className:"brand-name",children:"Giacomo Impoco"})})]}),eE=({onChangeBackground:s})=>Fe.jsxs("div",{className:"nav-pill",children:[Fe.jsx(JM,{}),Fe.jsx("div",{className:"nav-links",children:B_.map(e=>Fe.jsx("a",{className:"ghost-pill",href:e.href,children:e.label},e.label))})]}),tE=({experienceYears:s})=>Fe.jsxs("section",{id:"hero",className:"hero",children:[Fe.jsxs("div",{className:"eyebrow",children:["Full-Stack Developer · ",s,"+ years"]}),Fe.jsxs("h1",{children:["Building experiences with"," ",Fe.jsx("span",{className:"highlight",children:"clarity and curiosity"})]}),Fe.jsx("p",{className:"lead",children:"Barcelona-based developer creating modern, performant products with thoughtful UX and clean engineering."}),Fe.jsx("div",{className:"chip-row"}),Fe.jsxs("div",{className:"cta-row",children:[Fe.jsx("a",{className:"btn primary",href:"/assets/GiacomoImpocoCV2025.pdf",target:"_blank",rel:"noreferrer",children:"Download CV"}),Fe.jsx("a",{className:"btn ghost",href:"#projects",children:"View Projects"})]})]}),Al=({title:s,children:e,id:n})=>Fe.jsxs("section",{id:n,className:"card",children:[Fe.jsx("div",{className:"card-header",children:Fe.jsx("h3",{children:s})}),Fe.jsx("div",{className:"card-body",children:e})]}),nE=()=>Fe.jsxs(Al,{id:"about",title:"About",children:[Fe.jsx("p",{children:"Originally from Italy, I moved out of the country when I was 17 and I've been soaking up London life for almost 7 years. I kicked off my career in customer service, starting as a waiter and chef in a restaurant, and then working my way up to delivering customer support to one of the UK's biggest companies, John Lewis."}),Fe.jsx("p",{children:"All along, I had this itch to dive into software development, and here I am on that journey to become a full-fledged developer. In my free time, I love diving into tutorials and keeping up with the latest tech trends. I'm like a sponge for learning, always staying in the loop with what's happening in the tech world. I aspire to craft innovative solutions and create my own impactful piece in the tech landscape. When it comes to work, I thrive in fast-paced, teamwork-heavy setups. I'm your go-to person for delivering results on time. Outside the coding realm, catch me on long walks, biking through new spots, and jamming on the piano."})]}),iE=()=>Fe.jsx(Al,{id:"experience",title:"Tech Stack",children:Fe.jsxs("div",{className:"skill-columns",children:[Fe.jsxs("div",{children:[Fe.jsx("h4",{children:"Frontend"}),Fe.jsx("ul",{children:H_.map(s=>Fe.jsx("li",{children:s},s))})]}),Fe.jsxs("div",{children:[Fe.jsx("h4",{children:"Backend"}),Fe.jsx("ul",{children:V_.map(s=>Fe.jsx("li",{children:s},s))})]})]})}),rE=()=>Fe.jsx(Al,{id:"projects",title:"Projects",children:Fe.jsx("div",{className:"project-grid",children:G_.map(s=>Fe.jsxs("div",{className:"project-card",children:[Fe.jsx("img",{src:s.image,alt:s.title}),Fe.jsxs("div",{className:"project-meta",children:[Fe.jsx("h4",{children:s.title}),Fe.jsxs("div",{className:"project-links",children:[s.github&&Fe.jsx("a",{href:s.github,target:"_blank",rel:"noreferrer",children:"GitHub"}),s.demo&&Fe.jsx("a",{href:s.demo,target:"_blank",rel:"noreferrer",children:"Live Demo"})]})]})]},s.title))})}),sE=()=>Fe.jsx(Al,{id:"contact",title:"Contact",children:Fe.jsxs("div",{className:"contact-row",children:[Fe.jsxs("a",{className:"contact-link",href:"mailto:impoco126@gmail.com",children:[Fe.jsx("span",{className:"contact-label",children:"Email"}),Fe.jsx("span",{className:"contact-value",children:"impoco126@gmail.com"})]}),Fe.jsx("div",{className:"social-row",children:z_.map(s=>Fe.jsxs("a",{href:s.href,target:"_blank",rel:"noreferrer",className:"social-pill",children:[Fe.jsx("img",{src:s.icon,alt:`${s.label} icon`}),s.label]},s.label))})]})}),oE=()=>{const[s,e]=gn.useState(0),n=new Date().getFullYear()-W_,r=mp[s],a=()=>{e(u=>(u+1)%mp.length)};return Fe.jsxs("div",{className:"page",children:[Fe.jsx(QM,{className:"color-bends-overlay",style:{position:"fixed",inset:0},colors:r.colors,rotation:r.rotation,speed:r.speed,warpStrength:r.warpStrength,frequency:r.frequency,mouseInfluence:.6,parallax:.4,noise:.08,autoRotate:.6}),Fe.jsxs("div",{className:"frame",children:[Fe.jsx("header",{className:"top-bar",children:Fe.jsx(eE,{onChangeBackground:a})}),Fe.jsxs("main",{className:"content",children:[Fe.jsx(tE,{experienceYears:n}),Fe.jsxs("div",{className:"grid",children:[Fe.jsx(nE,{}),Fe.jsx(iE,{})]}),Fe.jsx(rE,{}),Fe.jsx(sE,{})]})]})]})},$m=document.getElementById("root");if(!$m)throw new Error("Root element #root not found");k_.createRoot($m).render(Fe.jsx(L_.StrictMode,{children:Fe.jsx(oE,{})}));
