var qr=Object.defineProperty;var Gt=e=>{throw TypeError(e)};var Lr=(e,t,r)=>t in e?qr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var jt=(e,t,r)=>Lr(e,typeof t!="symbol"?t+"":t,r),$r=(e,t,r)=>t.has(e)||Gt("Cannot "+r);var Ee=(e,t,r)=>($r(e,t,"read from private field"),r?r.call(e):t.get(e)),Me=(e,t,r)=>t.has(e)?Gt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Bt=!1;var Et=Array.isArray,Mr=Array.prototype.indexOf,Tt=Array.from,Gr=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyDescriptors,jr=Object.prototype,Br=Array.prototype,At=Object.getPrototypeOf;function Hr(e){return typeof e=="function"}const Te=()=>{};function Ur(e){return e()}function ct(e){for(var t=0;t<e.length;t++)e[t]()}const B=2,nr=4,Re=8,Je=16,ie=32,qe=64,Be=128,U=256,He=512,F=1024,se=2048,be=4096,ee=8192,Ze=16384,ar=32768,et=65536,Vr=1<<19,ir=1<<20,Ce=Symbol("$state"),Wr=Symbol("");function sr(e){return e===this.v}function or(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Yr(e,t){return e!==t}function lr(e){return!or(e,this.v)}function zr(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Kr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Xr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1,rn=!1;function nn(){tt=!0}const Nt=1,Ct=2,ur=4,an=8,sn=16,on=1,ln=2,un=4,fn=1,cn=2,I=Symbol();let S=null;function Ht(e){S=e}function z(e,t=!1,r){S={p:S,c:null,e:null,m:!1,s:e,x:null,l:null},tt&&!t&&(S.l={s:null,u:null,r1:[],r2:M(!1)})}function K(e){const t=S;if(t!==null){const o=t.e;if(o!==null){var r=T,a=A;t.e=null;try{for(var n=0;n<o.length;n++){var i=o[n];W(i.effect),V(i.reaction),Ot(i.fn)}}finally{W(r),V(a)}}S=t.p,t.m=!0}return{}}function Le(){return!tt||S!==null&&S.l===null}function M(e,t){var r={f:0,v:e,reactions:null,equals:sr,rv:0,wv:0};return r}function vn(e){return _n(M(e))}function dn(e,t=!1){var a;const r=M(e);return t||(r.equals=lr),tt&&S!==null&&S.l!==null&&((a=S.l).s??(a.s=[])).push(r),r}function _n(e){return A!==null&&!te&&A.f&B&&(H===null?Nn([e]):H.push(e)),e}function Q(e,t){return A!==null&&!te&&Le()&&A.f&(B|Je)&&(H===null||!H.includes(e))&&tn(),vt(e,t)}function vt(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=xr(),fr(e,se),Le()&&T!==null&&T.f&F&&!(T.f&(ie|qe))&&(X===null?Cn([e]):X.push(e))),t}function fr(e,t){var r=e.reactions;if(r!==null)for(var a=Le(),n=r.length,i=0;i<n;i++){var o=r[i],c=o.f;c&se||!a&&o===T||(Y(o,t),c&(F|U)&&(c&B?fr(o,be):it(o)))}}let cr=!1;function J(e,t=null,r){if(typeof e!="object"||e===null||Ce in e)return e;const a=At(e);if(a!==jr&&a!==Br)return e;var n=new Map,i=Et(e),o=M(0);i&&n.set("length",M(e.length));var c;return new Proxy(e,{defineProperty(f,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Jr();var _=n.get(l);return _===void 0?(_=M(u.value),n.set(l,_)):Q(_,J(u.value,c)),!0},deleteProperty(f,l){var u=n.get(l);if(u===void 0)l in f&&n.set(l,M(I));else{if(i&&typeof l=="string"){var _=n.get("length"),s=Number(l);Number.isInteger(s)&&s<_.v&&Q(_,s)}Q(u,I),Ut(o)}return!0},get(f,l,u){var d;if(l===Ce)return e;var _=n.get(l),s=l in f;if(_===void 0&&(!s||(d=Ne(f,l))!=null&&d.writable)&&(_=M(J(s?f[l]:I,c)),n.set(l,_)),_!==void 0){var v=E(_);return v===I?void 0:v}return Reflect.get(f,l,u)},getOwnPropertyDescriptor(f,l){var u=Reflect.getOwnPropertyDescriptor(f,l);if(u&&"value"in u){var _=n.get(l);_&&(u.value=E(_))}else if(u===void 0){var s=n.get(l),v=s==null?void 0:s.v;if(s!==void 0&&v!==I)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(f,l){var v;if(l===Ce)return!0;var u=n.get(l),_=u!==void 0&&u.v!==I||Reflect.has(f,l);if(u!==void 0||T!==null&&(!_||(v=Ne(f,l))!=null&&v.writable)){u===void 0&&(u=M(_?J(f[l],c):I),n.set(l,u));var s=E(u);if(s===I)return!1}return _},set(f,l,u,_){var g;var s=n.get(l),v=l in f;if(i&&l==="length")for(var d=u;d<s.v;d+=1){var p=n.get(d+"");p!==void 0?Q(p,I):d in f&&(p=M(I),n.set(d+"",p))}s===void 0?(!v||(g=Ne(f,l))!=null&&g.writable)&&(s=M(void 0),Q(s,J(u,c)),n.set(l,s)):(v=s.v!==I,Q(s,J(u,c)));var m=Reflect.getOwnPropertyDescriptor(f,l);if(m!=null&&m.set&&m.set.call(_,u),!v){if(i&&typeof l=="string"){var w=n.get("length"),b=Number(l);Number.isInteger(b)&&b>=w.v&&Q(w,b+1)}Ut(o)}return!0},ownKeys(f){E(o);var l=Reflect.ownKeys(f).filter(s=>{var v=n.get(s);return v===void 0||v.v!==I});for(var[u,_]of n)_.v!==I&&!(u in f)&&l.push(u);return l},setPrototypeOf(){Zr()}})}function Ut(e,t=1){Q(e,e.v+t)}var Vt,vr,dr;function pn(){if(Vt===void 0){Vt=window;var e=Element.prototype,t=Node.prototype;vr=Ne(t,"firstChild").get,dr=Ne(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function St(e=""){return document.createTextNode(e)}function Ue(e){return vr.call(e)}function rt(e){return dr.call(e)}function h(e,t){return Ue(e)}function he(e,t){{var r=Ue(e);return r instanceof Comment&&r.data===""?rt(r):r}}function O(e,t=1,r=!1){let a=e;for(;t--;)a=rt(a);return a}function hn(e){e.textContent=""}function ae(e){var t=B|se,r=A!==null&&A.f&B?A:null;return T===null||r!==null&&r.f&U?t|=U:T.f|=ir,{ctx:S,deps:null,effects:null,equals:sr,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??T}}function gn(e){const t=ae(e);return t.equals=lr,t}function _r(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ce(t[r])}}function mn(e){for(var t=e.parent;t!==null;){if(!(t.f&B))return t;t=t.parent}return null}function yn(e){var t,r=T;W(mn(e));try{_r(e),t=Tr(e)}finally{W(r)}return t}function pr(e){var t=yn(e),r=(ue||e.f&U)&&e.deps!==null?be:F;Y(e,r),e.equals(t)||(e.v=t,e.wv=xr())}function hr(e){T===null&&A===null&&Qr(),A!==null&&A.f&U&&T===null&&Kr(),Ft&&zr()}function wn(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ke(e,t,r,a=!0){var n=(e&qe)!==0,i=T,o={ctx:S,deps:null,nodes_start:null,nodes_end:null,f:e|se,first:null,fn:t,last:null,next:null,parent:n?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=ye;try{Wt(!0),Pt(o),o.f|=ar}catch(u){throw ce(o),u}finally{Wt(c)}}else t!==null&&it(o);var f=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(ir|Be))===0;if(!f&&!n&&a&&(i!==null&&wn(o,i),A!==null&&A.f&B)){var l=A;(l.effects??(l.effects=[])).push(o)}return o}function bn(e){const t=ke(Re,null,!1);return Y(t,F),t.teardown=e,t}function dt(e){hr();var t=T!==null&&(T.f&ie)!==0&&S!==null&&!S.m;if(t){var r=S;(r.e??(r.e=[])).push({fn:e,effect:T,reaction:A})}else{var a=Ot(e);return a}}function kn(e){return hr(),En(e)}function xn(e){const t=ke(qe,e,!0);return(r={})=>new Promise(a=>{r.outro?Oe(t,()=>{ce(t),a(void 0)}):(ce(t),a(void 0))})}function Ot(e){return ke(nr,e,!1)}function En(e){return ke(Re,e,!0)}function q(e,t=[],r=ae){const a=t.map(r);return nt(()=>e(...a.map(E)))}function nt(e,t=0){return ke(Re|Je|t,e,!0)}function we(e,t=!0){return ke(Re|ie,e,!0,t)}function gr(e){var t=e.teardown;if(t!==null){const r=Ft,a=A;Yt(!0),V(null);try{t.call(null)}finally{Yt(r),V(a)}}}function mr(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var a=r.next;ce(r,t),r=a}}function Tn(e){for(var t=e.first;t!==null;){var r=t.next;t.f&ie||ce(t),t=r}}function ce(e,t=!0){var r=!1;if((t||e.f&Vr)&&e.nodes_start!==null){for(var a=e.nodes_start,n=e.nodes_end;a!==null;){var i=a===n?null:rt(a);a.remove(),a=i}r=!0}mr(e,t&&!r),Ke(e,0),Y(e,Ze);var o=e.transitions;if(o!==null)for(const f of o)f.stop();gr(e);var c=e.parent;c!==null&&c.first!==null&&yr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function yr(e){var t=e.parent,r=e.prev,a=e.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),t!==null&&(t.first===e&&(t.first=a),t.last===e&&(t.last=r))}function Oe(e,t){var r=[];It(e,r,!0),wr(r,()=>{ce(e),t&&t()})}function wr(e,t){var r=e.length;if(r>0){var a=()=>--r||t();for(var n of e)n.out(a)}else t()}function It(e,t,r){if(!(e.f&ee)){if(e.f^=ee,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var a=e.first;a!==null;){var n=a.next,i=(a.f&et)!==0||(a.f&ie)!==0;It(a,t,i?r:!1),a=n}}}function Ve(e){br(e,!0)}function br(e,t){if(e.f&ee){e.f^=ee,e.f&F||(e.f^=F),$e(e)&&(Y(e,se),it(e));for(var r=e.first;r!==null;){var a=r.next,n=(r.f&et)!==0||(r.f&ie)!==0;br(r,n?t:!1),r=a}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let _t=!1,pt=[];function An(){_t=!1;const e=pt.slice();pt=[],ct(e)}function Dt(e){_t||(_t=!0,queueMicrotask(An)),pt.push(e)}let je=!1,We=!1,Ye=null,ye=!1,Ft=!1;function Wt(e){ye=e}function Yt(e){Ft=e}let ht=[],Se=0;let A=null,te=!1;function V(e){A=e}let T=null;function W(e){T=e}let H=null;function Nn(e){H=e}let D=null,$=0,X=null;function Cn(e){X=e}let kr=1,ze=0,ue=!1;function xr(){return++kr}function $e(e){var l;var t=e.f;if(t&se)return!0;if(t&be){var r=e.deps,a=(t&U)!==0;if(r!==null){var n,i,o=(t&He)!==0,c=a&&T!==null&&!ue,f=r.length;if(o||c){for(n=0;n<f;n++)i=r[n],(o||!((l=i==null?void 0:i.reactions)!=null&&l.includes(e)))&&(i.reactions??(i.reactions=[])).push(e);o&&(e.f^=He)}for(n=0;n<f;n++)if(i=r[n],$e(i)&&pr(i),i.wv>e.wv)return!0}(!a||T!==null&&!ue)&&Y(e,F)}return!1}function Sn(e,t){for(var r=t;r!==null;){if(r.f&Be)try{r.fn(e);return}catch{r.f^=Be}r=r.parent}throw je=!1,e}function On(e){return(e.f&Ze)===0&&(e.parent===null||(e.parent.f&Be)===0)}function at(e,t,r,a){if(je){if(r===null&&(je=!1),On(t))throw e;return}r!==null&&(je=!0);{Sn(e,t);return}}function Er(e,t,r=0){var a=e.reactions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];i.f&B?Er(i,t,r+1):t===i&&(r===0?Y(i,se):i.f&F&&Y(i,be),it(i))}}function Tr(e){var v;var t=D,r=$,a=X,n=A,i=ue,o=H,c=S,f=te,l=e.f;D=null,$=0,X=null,A=l&(ie|qe)?null:e,ue=(l&U)!==0&&(!ye||n===null||f),H=null,Ht(e.ctx),te=!1,ze++;try{var u=(0,e.fn)(),_=e.deps;if(D!==null){var s;if(Ke(e,$),_!==null&&$>0)for(_.length=$+D.length,s=0;s<D.length;s++)_[$+s]=D[s];else e.deps=_=D;if(!ue)for(s=$;s<_.length;s++)((v=_[s]).reactions??(v.reactions=[])).push(e)}else _!==null&&$<_.length&&(Ke(e,$),_.length=$);if(Le()&&X!==null&&!(e.f&(B|be|se)))for(s=0;s<X.length;s++)Er(X[s],e);return n!==null&&ze++,u}finally{D=t,$=r,X=a,A=n,ue=i,H=o,Ht(c),te=f}}function In(e,t){let r=t.reactions;if(r!==null){var a=Mr.call(r,e);if(a!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[a]=r[n],r.pop())}}r===null&&t.f&B&&(D===null||!D.includes(t))&&(Y(t,be),t.f&(U|He)||(t.f^=He),_r(t),Ke(t,0))}function Ke(e,t){var r=e.deps;if(r!==null)for(var a=t;a<r.length;a++)In(e,r[a])}function Pt(e){var t=e.f;if(!(t&Ze)){Y(e,F);var r=T,a=S;T=e;try{t&Je?Tn(e):mr(e),gr(e);var n=Tr(e);e.teardown=typeof n=="function"?n:null,e.wv=kr;var i=e.deps,o;Bt&&rn&&e.f&se}catch(c){at(c,e,r,a||e.ctx)}finally{T=r}}}function Dn(){if(Se>1e3){Se=0;try{Xr()}catch(e){if(Ye!==null)at(e,Ye,null);else throw e}}Se++}function Fn(e){var t=e.length;if(t!==0){Dn();var r=ye;ye=!0;try{for(var a=0;a<t;a++){var n=e[a];n.f&F||(n.f^=F);var i=[];Ar(n,i),Pn(i)}}finally{ye=r}}}function Pn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var a=e[r];if(!(a.f&(Ze|ee)))try{$e(a)&&(Pt(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null?yr(a):a.fn=null))}catch(n){at(n,a,null,a.ctx)}}}function Rn(){if(We=!1,Se>1001)return;const e=ht;ht=[],Fn(e),We||(Se=0,Ye=null)}function it(e){We||(We=!0,queueMicrotask(Rn)),Ye=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(qe|ie)){if(!(r&F))return;t.f^=F}}ht.push(t)}function Ar(e,t){var r=e.first,a=[];e:for(;r!==null;){var n=r.f,i=(n&ie)!==0,o=i&&(n&F)!==0,c=r.next;if(!o&&!(n&ee))if(n&Re){if(i)r.f^=F;else{var f=A;try{A=r,$e(r)&&Pt(r)}catch(s){at(s,r,null,r.ctx)}finally{A=f}}var l=r.first;if(l!==null){r=l;continue}}else n&nr&&a.push(r);if(c===null){let s=r.parent;for(;s!==null;){if(e===s)break e;var u=s.next;if(u!==null){r=u;continue e}s=s.parent}}r=c}for(var _=0;_<a.length;_++)l=a[_],t.push(l),Ar(l,t)}function E(e){var t=e.f,r=(t&B)!==0;if(A!==null&&!te){H!==null&&H.includes(e)&&en();var a=A.deps;e.rv<ze&&(e.rv=ze,D===null&&a!==null&&a[$]===e?$++:D===null?D=[e]:(!ue||!D.includes(e))&&D.push(e))}else if(r&&e.deps===null&&e.effects===null){var n=e,i=n.parent;i!==null&&!(i.f&U)&&(n.f^=U)}return r&&(n=e,$e(n)&&pr(n)),e.v}function zt(e){return e&&E(e)}function Nr(e){var t=te;try{return te=!0,e()}finally{te=t}}const qn=-7169;function Y(e,t){e.f=e.f&qn|t}function Ln(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ce in e)gt(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ce in r&&gt(r)}}}function gt(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let a in e)try{gt(e[a],t)}catch{}const r=At(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const a=rr(r);for(let n in a){const i=a[n].get;if(i)try{i.call(e)}catch{}}}}}const $n=["touchstart","touchmove"];function Mn(e){return $n.includes(e)}function Gn(e){var t=A,r=T;V(null),W(null);try{return e()}finally{V(t),W(r)}}const Cr=new Set,mt=new Set;function jn(e,t,r,a={}){function n(i){if(a.capture||Ae.call(t,i),!i.cancelBubble)return Gn(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dt(()=>{t.addEventListener(e,n,a)}):t.addEventListener(e,n,a),n}function Bn(e,t,r,a,n){var i={capture:a,passive:n},o=jn(e,t,r,i);(t===document.body||t===window||t===document)&&bn(()=>{t.removeEventListener(e,o,i)})}function st(e){for(var t=0;t<e.length;t++)Cr.add(e[t]);for(var r of mt)r(e)}function Ae(e){var b;var t=this,r=t.ownerDocument,a=e.type,n=((b=e.composedPath)==null?void 0:b.call(e))||[],i=n[0]||e.target,o=0,c=e.__root;if(c){var f=n.indexOf(c);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var l=n.indexOf(t);if(l===-1)return;f<=l&&(o=f)}if(i=n[o]||e.target,i!==t){Gr(e,"currentTarget",{configurable:!0,get(){return i||r}});var u=A,_=T;V(null),W(null);try{for(var s,v=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var p=i["__"+a];if(p!==void 0&&!i.disabled)if(Et(p)){var[m,...w]=p;m.apply(i,[e,...w])}else p.call(i,e)}catch(g){s?v.push(g):s=g}if(e.cancelBubble||d===t||d===null)break;i=d}if(s){for(let g of v)queueMicrotask(()=>{throw g});throw s}}finally{e.__root=t,delete e.currentTarget,V(u),W(_)}}}function Hn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function yt(e,t){var r=T;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function N(e,t){var r=(t&fn)!==0,a=(t&cn)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=Hn(i?e:"<!>"+e),r||(n=Ue(n)));var o=a?document.importNode(n,!0):n.cloneNode(!0);if(r){var c=Ue(o),f=o.lastChild;yt(c,f)}else yt(o,o);return o}}function Ie(){var e=document.createDocumentFragment(),t=document.createComment(""),r=St();return e.append(t,r),yt(t,r),e}function x(e,t){e!==null&&e.before(t)}let wt=!0;function j(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function Un(e,t){return Vn(e,t)}const ge=new Map;function Vn(e,{target:t,anchor:r,props:a={},events:n,context:i,intro:o=!0}){pn();var c=new Set,f=_=>{for(var s=0;s<_.length;s++){var v=_[s];if(!c.has(v)){c.add(v);var d=Mn(v);t.addEventListener(v,Ae,{passive:d});var p=ge.get(v);p===void 0?(document.addEventListener(v,Ae,{passive:d}),ge.set(v,1)):ge.set(v,p+1)}}};f(Tt(Cr)),mt.add(f);var l=void 0,u=xn(()=>{var _=r??t.appendChild(St());return we(()=>{if(i){z({});var s=S;s.c=i}n&&(a.$$events=n),wt=o,l=e(_,a)||{},wt=!0,i&&K()}),()=>{var d;for(var s of c){t.removeEventListener(s,Ae);var v=ge.get(s);--v===0?(document.removeEventListener(s,Ae),ge.delete(s)):ge.set(s,v)}mt.delete(f),_!==r&&((d=_.parentNode)==null||d.removeChild(_))}});return Wn.set(l,u),l}let Wn=new WeakMap;function de(e,t,r=!1){var a=e,n=null,i=null,o=I,c=r?et:0,f=!1;const l=(_,s=!0)=>{f=!0,u(s,_)},u=(_,s)=>{o!==(o=_)&&(o?(n?Ve(n):s&&(n=we(()=>s(a))),i&&Oe(i,()=>{i=null})):(i?Ve(i):s&&(i=we(()=>s(a))),n&&Oe(n,()=>{n=null})))};nt(()=>{f=!1,t(l),f||u(null,null)},c)}function Sr(e,t,r){var a=e,n=I,i,o=Le()?Yr:or;nt(()=>{o(n,n=t())&&(i&&Oe(i),i=we(()=>r(a)))})}function De(e,t){return t}function Yn(e,t,r,a){for(var n=[],i=t.length,o=0;o<i;o++)It(t[o].e,n,!0);var c=i>0&&n.length===0&&r!==null;if(c){var f=r.parentNode;hn(f),f.append(r),a.clear(),le(e,t[0].prev,t[i-1].next)}wr(n,()=>{for(var l=0;l<i;l++){var u=t[l];c||(a.delete(u.k),le(e,u.prev,u.next)),ce(u.e,!c)}})}function Fe(e,t,r,a,n,i=null){var o=e,c={items:new Map,first:null},f=(t&ur)!==0;if(f){var l=e;o=l.appendChild(St())}var u=null,_=!1,s=gn(()=>{var v=r();return Et(v)?v:v==null?[]:Tt(v)});nt(()=>{var v=E(s),d=v.length;_&&d===0||(_=d===0,zn(v,c,o,n,t,a,r),i!==null&&(d===0?u?Ve(u):u=we(()=>i(o)):u!==null&&Oe(u,()=>{u=null})),E(s))})}function zn(e,t,r,a,n,i,o){var Rt,qt,Lt,$t;var c=(n&an)!==0,f=(n&(Nt|Ct))!==0,l=e.length,u=t.items,_=t.first,s=_,v,d=null,p,m=[],w=[],b,g,y,k;if(c)for(k=0;k<l;k+=1)b=e[k],g=i(b,k),y=u.get(g),y!==void 0&&((Rt=y.a)==null||Rt.measure(),(p??(p=new Set)).add(y));for(k=0;k<l;k+=1){if(b=e[k],g=i(b,k),y=u.get(g),y===void 0){var L=s?s.e.nodes_start:r;d=Qn(L,t,d,d===null?t.first:d.next,b,g,k,a,n,o),u.set(g,d),m=[],w=[],s=d.next;continue}if(f&&Kn(y,b,k,n),y.e.f&ee&&(Ve(y.e),c&&((qt=y.a)==null||qt.unfix(),(p??(p=new Set)).delete(y))),y!==s){if(v!==void 0&&v.has(y)){if(m.length<w.length){var P=w[0],C;d=P.prev;var R=m[0],lt=m[m.length-1];for(C=0;C<m.length;C+=1)Kt(m[C],P,r);for(C=0;C<w.length;C+=1)v.delete(w[C]);le(t,R.prev,lt.next),le(t,d,R),le(t,lt,P),s=P,d=lt,k-=1,m=[],w=[]}else v.delete(y),Kt(y,s,r),le(t,y.prev,y.next),le(t,y,d===null?t.first:d.next),le(t,d,y),d=y;continue}for(m=[],w=[];s!==null&&s.k!==g;)s.e.f&ee||(v??(v=new Set)).add(s),w.push(s),s=s.next;if(s===null)continue;y=s}m.push(y),d=y,s=y.next}if(s!==null||v!==void 0){for(var xe=v===void 0?[]:Tt(v);s!==null;)s.e.f&ee||xe.push(s),s=s.next;var ut=xe.length;if(ut>0){var Rr=n&ur&&l===0?r:null;if(c){for(k=0;k<ut;k+=1)(Lt=xe[k].a)==null||Lt.measure();for(k=0;k<ut;k+=1)($t=xe[k].a)==null||$t.fix()}Yn(t,xe,Rr,u)}}c&&Dt(()=>{var Mt;if(p!==void 0)for(y of p)(Mt=y.a)==null||Mt.apply()}),T.first=t.first&&t.first.e,T.last=d&&d.e}function Kn(e,t,r,a){a&Nt&&vt(e.v,t),a&Ct?vt(e.i,r):e.i=r}function Qn(e,t,r,a,n,i,o,c,f,l){var u=(f&Nt)!==0,_=(f&sn)===0,s=u?_?dn(n):M(n):n,v=f&Ct?M(o):o,d={i:v,v:s,k:i,a:null,e:null,prev:r,next:a};try{return d.e=we(()=>c(e,s,v,l),cr),d.e.prev=r&&r.e,d.e.next=a&&a.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),a!==null&&(a.prev=d,a.e.prev=d.e),d}finally{}}function Kt(e,t,r){for(var a=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==a;){var o=rt(i);n.before(i),i=o}}function le(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function bt(e,t,r,a,n){var c;var i=(c=t.$$slots)==null?void 0:c[r],o=!1;i===!0&&(i=t[r==="default"?"children":r],o=!0),i===void 0||i(e,o?()=>a:a)}function re(e,t,r,a){var n=e.__attributes??(e.__attributes={});n[t]!==(n[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Wr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Xn(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Qt=new Map;function Xn(e){var t=Qt.get(e.nodeName);if(t)return t;Qt.set(e.nodeName,t=[]);for(var r,a=e,n=Element.prototype;n!==a;){r=rr(a);for(var i in r)r[i].set&&t.push(i);a=At(a)}return t}function Or(e,t,r){var a=e.__className,n=Jn(t);(a!==n||cr)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function Jn(e,t){return(e??"")+""}function ve(e,t,r,a){var n=e.__styles??(e.__styles={});n[t]!==r&&(n[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}const Zn=()=>performance.now(),Z={tick:e=>requestAnimationFrame(e),now:()=>Zn(),tasks:new Set};function Ir(){const e=Z.now();Z.tasks.forEach(t=>{t.c(e)||(Z.tasks.delete(t),t.f())}),Z.tasks.size!==0&&Z.tick(Ir)}function ea(e){let t;return Z.tasks.size===0&&Z.tick(Ir),{promise:new Promise(r=>{Z.tasks.add(t={c:e,f:r})}),abort(){Z.tasks.delete(t)}}}function Ge(e,t){e.dispatchEvent(new CustomEvent(t))}function ta(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Xt(e){const t={},r=e.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=ta(n.trim());t[o]=i.trim()}return t}const ra=e=>e;function ne(e,t,r,a){var n=(e&on)!==0,i=(e&ln)!==0,o=n&&i,c=(e&un)!==0,f=o?"both":n?"in":"out",l,u=t.inert,_=t.style.overflow,s,v;function d(){var g=A,y=T;V(null),W(null);try{return l??(l=r()(t,(a==null?void 0:a())??{},{direction:f}))}finally{V(g),W(y)}}var p={is_global:c,in(){var g;if(t.inert=u,!n){v==null||v.abort(),(g=v==null?void 0:v.reset)==null||g.call(v);return}i||s==null||s.abort(),Ge(t,"introstart"),s=kt(t,d(),v,1,()=>{Ge(t,"introend"),s==null||s.abort(),s=l=void 0,t.style.overflow=_})},out(g){if(!i){g==null||g(),l=void 0;return}t.inert=!0,Ge(t,"outrostart"),v=kt(t,d(),s,0,()=>{Ge(t,"outroend"),g==null||g()})},stop:()=>{s==null||s.abort(),v==null||v.abort()}},m=T;if((m.transitions??(m.transitions=[])).push(p),n&&wt){var w=c;if(!w){for(var b=m.parent;b&&b.f&et;)for(;(b=b.parent)&&!(b.f&Je););w=!b||(b.f&ar)!==0}w&&Ot(()=>{Nr(()=>p.in())})}}function kt(e,t,r,a,n){var i=a===1;if(Hr(t)){var o,c=!1;return Dt(()=>{if(!c){var m=t({direction:i?"in":"out"});o=kt(e,m,r,a,n)}}),{abort:()=>{c=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return n(),{abort:Te,deactivate:Te,reset:Te,t:()=>a};const{delay:f=0,css:l,tick:u,easing:_=ra}=t;var s=[];if(i&&r===void 0&&(u&&u(0,1),l)){var v=Xt(l(0,1));s.push(v,v)}var d=()=>1-a,p=e.animate(s,{duration:f});return p.onfinish=()=>{var m=(r==null?void 0:r.t())??1-a;r==null||r.abort();var w=a-m,b=t.duration*Math.abs(w),g=[];if(b>0){var y=!1;if(l)for(var k=Math.ceil(b/16.666666666666668),L=0;L<=k;L+=1){var P=m+w*_(L/k),C=Xt(l(P,1-P));g.push(C),y||(y=C.overflow==="hidden")}y&&(e.style.overflow="hidden"),d=()=>{var R=p.currentTime;return m+w*_(R/b)},u&&ea(()=>{if(p.playState!=="running")return!1;var R=d();return u(R,1-R),!0})}p=e.animate(g,{duration:b,fill:"forwards"}),p.onfinish=()=>{d=()=>a,u==null||u(a,1-a),n()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=Te)},deactivate:()=>{n=Te},reset:()=>{a===0&&(u==null||u(1,0))},t:()=>d()}}function ot(e=!1){const t=S,r=t.l.u;if(!r)return;let a=()=>Ln(t.s);if(e){let n=0,i={};const o=ae(()=>{let c=!1;const f=t.s;for(const l in f)f[l]!==i[l]&&(i[l]=f[l],c=!0);return c&&n++,n});a=()=>E(o)}r.b.length&&kn(()=>{Jt(t,a),ct(r.b)}),dt(()=>{const n=Nr(()=>r.m.map(Ur));return()=>{for(const i of n)typeof i=="function"&&i()}}),r.a.length&&dt(()=>{Jt(t,a),ct(r.a)})}function Jt(e,t){if(e.l.s)for(const r of e.l.s)E(r);t()}function na(e,t,r,a){var n;n=e[t];var i=a,o=!0,c=()=>(o&&(o=!1,i=a),i);n===void 0&&a!==void 0&&(n=c());var f;return f=()=>{var l=e[t];return l===void 0?c():(o=!0,l)},f}const aa="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(aa);const ia="/ton-coeur-app/tap/heart-0.png",sa="/ton-coeur-app/tap/heart-1.png",oa="/ton-coeur-app/tap/heart-2.png",la="/ton-coeur-app/tap/heart-3.png",ua="/ton-coeur-app/tap/heart-4.png",fa="/ton-coeur-app/tap/heart-5.png",ca="/ton-coeur-app/tap/heart-6.png",va="/ton-coeur-app",oe=va;console.log(`${oe}/page/background-2.2.png`);const da=[0,10,30,60,90,140,200],fe=da,Dr={0:ia,1:sa,2:oa,3:la,4:ua,5:fa,6:ca},Fr={0:{background:{linearGradient:["#5e1fa5","#250c42"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Just to tap ❤️",description:["A simple touch can create","something magical","Love is waiting!"]}},1:{background:{linearGradient:["#B53259","#290727"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Gentle warmth",description:["The spark of something special","a quiet reminder","that someone cares"]}},2:{background:{linearGradient:["#856CFF","#191162"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Tender admiration",description:["It’s soft glow of admiration,","respect and quiet affection"]}},3:{background:{linearGradient:["#5e1fa5","#250c42"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Passionate affection",description:["A deep, fiery love","that ignites every moment"]}},4:{background:{linearGradient:["#F07C93","#F07C93"],url:`${oe}/page/background-1.2.png`},postcard:{header:"Irresistible love",description:["A magnetic pull","a love that stays with you","no matter what"]}},5:{background:{linearGradient:["#FCD9EC","#FCD9EC"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Unbreakable bond",description:["An eternal connection","beyond time and distance"]}},6:{background:{linearGradient:["#FCD9EC","#F07C93"],url:`${oe}/page/background-2.2.png`},postcard:{header:"Pure devotion",description:["A promise, a forever, a love","that asks for nothing in return","but gives everything"]}}},me={archive:{header:"Sent Gifts",text:["There's nothing to see here...","Keep tapping, send gifts, and soon you will see the sent gifts here!"]},about:{header:"About TonCœur",text:"Sometimes, words are too much, and silence is too little. Share your feelings — exchange your taps for valentines.",sub:"The rules are simple:",list:["❤️ Tap as many times as the heart you want to send","❤️ Each heart represents a feeling, growing deeper with every tap","❤️ Reach the next level of emotions and unlock a new connection!"]}};var Pe,Qe,Xe;class _a{constructor(){Me(this,Pe,vn(0));Me(this,Qe,ae(()=>ha(this.clicked)));Me(this,Xe,ae(()=>ga(this.grade)));jt(this,"click",pa)}get clicked(){return E(Ee(this,Pe))}set clicked(t){Q(Ee(this,Pe),J(t))}get grade(){return E(Ee(this,Qe))}get target(){return E(Ee(this,Xe))}}Pe=new WeakMap,Qe=new WeakMap,Xe=new WeakMap;const G=new _a;function pa(){G.clicked+=1}function ha(e){var t=0;return fe.find((r,a)=>!fe[a+1]||e<fe[a+1]?(t=a,!0):!1),t}function ga(e){return e+1<fe.length?fe[e+1]:fe[fe.length-1]}const _e=J({route:""}),xt=e=>{_e.route=e};nn();var ma=N('<p class="about-list__topic svelte-byycdl"> </p>'),ya=N('<section class="about svelte-byycdl"><header class="about__header svelte-byycdl"><h3> </h3></header> <div class="about__content svelte-byycdl"><div class="about-text svelte-byycdl"><div class="about-text__text svelte-byycdl"><span class="about-span svelte-byycdl"> </span></div> <div class="about-text__sub svelte-byycdl"><span class="about-span svelte-byycdl"> </span></div> <div class="about-text__list svelte-byycdl"><div class="about-list svelte-byycdl"></div></div></div></div></section>');function wa(e,t){z(t,!1),ot();var r=ya(),a=h(r),n=h(a),i=h(n),o=O(a,2),c=h(o),f=h(c),l=h(f),u=h(l),_=O(f,2),s=h(_),v=h(s),d=O(_,2),p=h(d);Fe(p,5,()=>me.about.list,De,(m,w)=>{var b=ma(),g=h(b);q(()=>j(g,E(w))),x(m,b)}),q(()=>{j(i,me.about.header),j(u,me.about.text),j(v,me.about.sub)}),x(e,r),K()}var ba=N('<img class="gift-img avatar-img svelte-gtrwj0" alt="avatar">'),ka=N('<div class="avatar-img mock svelte-gtrwj0"></div>'),xa=N('<div class="gift svelte-gtrwj0"><div class="gift__image svelte-gtrwj0"><img class="gift-img svelte-gtrwj0" alt="gift"></div> <div class="gift__avatar svelte-gtrwj0"><!></div></div>'),Ea=N("<p> </p>"),Ta=N('<div class="nothing-text svelte-gtrwj0"></div>'),Aa=N('<section class="archive svelte-gtrwj0"><header class="archive__header"><h3> </h3></header> <div class="archive__content svelte-gtrwj0"><div class="gift-history svelte-gtrwj0"><!></div></div></section>');function Na(e,t){z(t,!0);let r=na(t,"items",3,null);var a=Aa(),n=h(a),i=h(n),o=h(i),c=O(n,2),f=h(c),l=h(f);{var u=s=>{var v=Ie(),d=he(v);Fe(d,17,r,De,(p,m)=>{var w=xa(),b=h(w),g=h(b),y=O(b,2),k=h(y);{var L=C=>{var R=ba();q(()=>re(R,"src",E(m).avatar)),x(C,R)},P=C=>{var R=ka();x(C,R)};de(k,C=>{E(m).avatar?C(L):C(P,!1)})}q(()=>re(g,"src",Dr[E(m).grade])),x(p,w)}),x(s,v)},_=s=>{var v=Ta();Fe(v,21,()=>me.archive.text,De,(d,p)=>{var m=Ea(),w=h(m);q(()=>j(w,E(p))),x(d,m)}),x(s,v)};de(l,s=>{r()?s(u):s(_,!1)})}q(()=>j(o,me.archive.header)),x(e,a),K()}const Ca="/ton-coeur-app/nav/archive.png",Sa="/ton-coeur-app/nav/archive-red.png",Oa="/ton-coeur-app/nav/question.png",Ia="/ton-coeur-app/nav/question-red.png",Pr="/ton-coeur-app/button/hearts.png";var Da=(e,t)=>t("archive"),Fa=(e,t)=>t("about"),Pa=N('<span class="count-text green-text scaling svelte-1m6i3k9"> </span>'),Ra=N('<span class="count-text svelte-1m6i3k9"> </span> <span class="count-text svelte-1m6i3k9">/</span> <span class="count-text red-text svelte-1m6i3k9"> </span>',1),qa=N('<nav class="nav-panel svelte-1m6i3k9"><div class="nav-panel__buttons"><a href="#top"><img class="archive-img nav-img svelte-1m6i3k9" alt="archive"></a> <a href="#top"><img class="question-img nav-img svelte-1m6i3k9" alt="question"></a></div> <div class="nav-panel__userinfo"><div class="count svelte-1m6i3k9"><!> <img class="count-img svelte-1m6i3k9" alt="count hearts"></div> <div class="avatar svelte-1m6i3k9"></div></div></nav>');function La(e,t){z(t,!0);let r=ae(()=>_e.route==="archive"?Sa:Ca),a=ae(()=>_e.route==="about"?Ia:Oa);function n(w){_e.route===w?xt(""):xt(w)}var i=qa(),o=h(i),c=h(o);c.__click=[Da,n];var f=h(c),l=O(c,2);l.__click=[Fa,n];var u=h(l),_=O(o,2),s=h(_),v=h(s);{var d=w=>{var b=Pa(),g=h(b);q(()=>j(g,t.count)),x(w,b)},p=w=>{var b=Ra(),g=he(b),y=h(g),k=O(g,4),L=h(k);q(()=>{j(y,t.count),j(L,t.target)}),x(w,b)};de(v,w=>{t.grade>=fe.length-1?w(d):w(p,!1)})}var m=O(v,2);re(m,"src",Pr),q(()=>{re(f,"src",E(r)),re(u,"src",E(a))}),x(e,i),K()}st(["click"]);var $a=()=>xt(""),Ma=N('<section class="popup-window some-dark-2-container svelte-1n2170q"><div class="popup-window__content svelte-1n2170q"><!></div></section>');function ft(e,t){z(t,!1),ot();var r=Ma();r.__pointerup=[$a];var a=h(r),n=h(a);bt(n,t,"content",{}),x(e,r),K()}st(["pointerup"]);var Ga=N('<div class="tap-content no-select svelte-n5zppm"><div class="tap-content__window svelte-n5zppm"><!></div> <div class="tap-content__button svelte-n5zppm"><!></div></div>');function ja(e,t){z(t,!1),ot();var r=Ga(),a=h(r),n=h(a);bt(n,t,"content",{});var i=O(a,2),o=h(i);{var c=f=>{var l=Ie(),u=he(l);bt(u,t,"button",{}),x(f,l)};de(o,f=>{G.grade>0&&f(c)})}x(e,r),K()}const Ba=e=>e;function Ha(e){const t=e-1;return t*t*t+1}function Zt(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function er(e,{delay:t=0,duration:r=400,easing:a=Ba}={}){const n=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:a,css:i=>`opacity: ${i*n}`}}function pe(e,{delay:t=0,duration:r=400,easing:a=Ha,x:n=0,y:i=0,opacity:o=0}={}){const c=getComputedStyle(e),f=+c.opacity,l=c.transform==="none"?"":c.transform,u=f*(1-o),[_,s]=Zt(n),[v,d]=Zt(i);return{delay:t,duration:r,easing:a,css:(p,m)=>`
			transform: ${l} translate(${(1-p)*_}${s}, ${(1-p)*v}${d});
			opacity: ${f-u*m}`}}var Ua=N("<div></div>");function Va(e,t){var r=Ua();r.__pointerdown=function(...a){var n;(n=t.onpointerdown)==null||n.apply(this,a)},r.__pointerup=function(...a){var n;(n=t.onpointerup)==null||n.apply(this,a)},q(()=>Or(r,`tap-area level-${t.grade??""} svelte-5etn8x`)),Bn("pointerleave",r,function(...a){var n;(n=t.onpointerleave)==null||n.apply(this,a)}),x(e,r)}st(["pointerdown","pointerup"]);var Wa=N("<p> </p>"),Ya=N('<div><div class="tap-love-window__header svelte-72r7xw"><h3> </h3></div> <div class="tap-love-window__description svelte-72r7xw"></div> <div class="tap-love-window__image svelte-72r7xw"><div class="tap-love-image svelte-72r7xw"></div></div></div>'),za=N("<!> <!>",1);function Ka(e,t){z(t,!0);var r=J({transform:!1}),a=ae(()=>Fr[G.grade].postcard);function n(u){r.transform=!1}function i(u){r.transform=!1}function o(u){G.click(),r.transform=!0,t.addHeart({x:u.clientX,y:u.clientY,w:64,h:64})}var c=za(),f=he(c);Sr(f,()=>G.grade,u=>{var _=Ya(),s=h(_),v=h(s),d=h(v),p=O(s,2);Fe(p,21,()=>zt(a).description,De,(b,g)=>{var y=Wa(),k=h(y);q(()=>j(k,E(g))),x(b,y)});var m=O(p,2),w=h(m);q(()=>{Or(_,`tap-love-window some-dark-container ${(r.transform&&"transformed")??""} svelte-72r7xw`),j(d,zt(a).header),re(w,"style",`background-image: url(${Dr[G.grade]??""})`)}),ne(1,_,()=>pe,()=>({x:-100,duration:1e3})),ne(2,_,()=>pe,()=>({x:100,duration:1e3})),x(u,_)});var l=O(f,2);Va(l,{onpointerdown:o,onpointerleave:i,onpointerup:n,get grade(){return G.grade}}),x(e,c),K()}const Qa="/ton-coeur-app/button/arrow.png";function tr(){navigator.share?navigator.share({title:"Share app",text:"Take a look at this spec!",url:"/"}).then(()=>{console.log("success")}).catch(e=>console.log("Error sharing",e)):alert("Share not supported on this browser, do it the old way.")}var Xa=N('<button class="send-button some-dark-container svelte-1f2e5n5"><article class="send-button__left-slot svelte-1f2e5n5"><img class="slot-image svelte-1f2e5n5" alt="hearts"></article> <article class="send-button__middle-slot svelte-1f2e5n5"><h3 class="send-gift-header">SEND GIFT</h3> <p class="send-gift-title svelte-1f2e5n5">share your result</p></article> <article class="send-button__right-slot svelte-1f2e5n5"><img class="slot-image arrow-image-pad svelte-1f2e5n5" alt="send"></article></button>');function Ja(e,t){z(t,!1),ot();var r=Xa();r.__pointerdown=[tr],r.__click=[tr];var a=h(r),n=h(a);re(n,"src",Pr);var i=O(a,4),o=h(i);re(o,"src",Qa),ne(3,r,()=>pe,()=>({y:150,duration:1e3})),x(e,r),K()}st(["pointerdown","click"]);const Za="/ton-coeur-app/effect/vecteezy_red-heart-icon_45925862.png";var ei=N('<img class="heart svelte-zp9mvk" alt="heart fly">');function ti(e,t){const r={y:-150,duration:500};var a=Ie(),n=he(a);Fe(n,17,()=>t.hearts,De,(i,o)=>{var c=ei();re(c,"src",Za),q(()=>{ve(c,"--width",`${E(o).w??""}px`),ve(c,"--height",`${E(o).h??""}px`),ve(c,"--top",`calc(${E(o).y??""}px - ${E(o).h/2}px)`),ve(c,"--left",`calc(${E(o).x??""}px - ${E(o).w/2}px)`)}),ne(2,c,()=>pe,()=>r),x(i,c)}),x(e,a)}var ri=N('<section class="tap-page__popup svelte-ym3kdl"><!></section>'),ni=N('<section class="tap-page__popup svelte-ym3kdl"><!></section>'),ai=N('<section class="tap-page__popup svelte-ym3kdl"><!></section>'),ii=N('<main class="tap-page svelte-ym3kdl"><header class="tap-page__header svelte-ym3kdl"><!></header> <section class="tap-page__content svelte-ym3kdl"><!></section> <!> <!></main>');function si(e,t){z(t,!0);var r={y:1e3,duration:1e3},a=J([]);function n(d={x:0,y:0,w:64,h:64}){a.push(d)}dt(()=>{a.shift()});var i=ii(),o=h(i),c=h(o);La(c,{get count(){return G.clicked},get target(){return G.target},get grade(){return G.grade}});var f=O(o,2),l=h(f);ja(l,{$$slots:{content:(d,p)=>{Ka(d,{addHeart:n,slot:"content"})},button:(d,p)=>{Ja(d,{slot:"button"})}}});var u=O(f,2);{var _=d=>{var p=ri(),m=h(p);ft(m,{$$slots:{content:(w,b)=>{Na(w,{slot:"content",items:null})}}}),ne(3,p,()=>pe,()=>r),x(d,p)},s=d=>{var p=Ie(),m=he(p);{var w=g=>{var y=ni(),k=h(y);ft(k,{$$slots:{content:(L,P)=>{wa(L,{slot:"content"})}}}),ne(3,y,()=>pe,()=>r),x(g,y)},b=g=>{var y=Ie(),k=he(y);{var L=P=>{var C=ai(),R=h(C);ft(R,{}),ne(3,C,()=>pe,()=>r),x(P,C)};de(k,P=>{_e.route==="share"&&P(L)},!0)}x(g,y)};de(m,g=>{_e.route==="about"?g(w):g(b,!1)},!0)}x(d,p)};de(u,d=>{_e.route==="archive"?d(_):d(s,!1)})}var v=O(u,2);ti(v,{get hearts(){return a}}),x(e,i),K()}var oi=N('<div class="main-page__background_image svelte-1uhk1yr"></div>'),li=N('<main id="full-screen" class="main-page svelte-1uhk1yr"><!> <div class="main-page__content"><!></div></main>');function ui(e,t){z(t,!0);const r=ae(()=>Fr[G.grade].background);var a=li(),n=h(a);Sr(n,()=>G.grade,c=>{var f=oi();q(()=>{ve(f,"--gradient-left",E(r).linearGradient[0]),ve(f,"--gradient-right",E(r).linearGradient[1]),ve(f,"--background-url",`url(${E(r).url??""})`)}),ne(1,f,()=>er),ne(2,f,()=>er),x(c,f)});var i=O(n,2),o=h(i);si(o,{}),x(e,a),K()}function fi(){return Un(ui,{target:document.getElementById("app")})}fi();
