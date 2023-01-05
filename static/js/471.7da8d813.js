"use strict";(self["webpackChunkthree_model_viewer"]=self["webpackChunkthree_model_viewer"]||[]).push([[471],{471:function(e,t,r){r.r(t),r.d(t,{LDrawLoader:function(){return V}});var a=r(277);const n=0,i=1,o=2,s=3,l=4,c=5,h=0,d=1,u=2,g=3,m=4,p=5,f=6,C="16",w="24",M=new a.Pa4,b=new a.Pa4;class y extends a.jyz{constructor(e){super({uniforms:a.rDY.merge([a.rBU.fog,{diffuse:{value:new a.Ilk},opacity:{value:1}}]),vertexShader:"\n\t\t\t\tattribute vec3 control0;\n\t\t\t\tattribute vec3 control1;\n\t\t\t\tattribute vec3 direction;\n\t\t\t\tvarying float discardFlag;\n\n\t\t\t\t#include <common>\n\t\t\t\t#include <color_pars_vertex>\n\t\t\t\t#include <fog_pars_vertex>\n\t\t\t\t#include <logdepthbuf_pars_vertex>\n\t\t\t\t#include <clipping_planes_pars_vertex>\n\t\t\t\tvoid main() {\n\t\t\t\t\t#include <color_vertex>\n\n\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t\t// Transform the line segment ends and control points into camera clip space\n\t\t\t\t\tvec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );\n\t\t\t\t\tvec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );\n\t\t\t\t\tvec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tvec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );\n\n\t\t\t\t\tc0.xy /= c0.w;\n\t\t\t\t\tc1.xy /= c1.w;\n\t\t\t\t\tp0.xy /= p0.w;\n\t\t\t\t\tp1.xy /= p1.w;\n\n\t\t\t\t\t// Get the direction of the segment and an orthogonal vector\n\t\t\t\t\tvec2 dir = p1.xy - p0.xy;\n\t\t\t\t\tvec2 norm = vec2( -dir.y, dir.x );\n\n\t\t\t\t\t// Get control point directions from the line\n\t\t\t\t\tvec2 c0dir = c0.xy - p1.xy;\n\t\t\t\t\tvec2 c1dir = c1.xy - p1.xy;\n\n\t\t\t\t\t// If the vectors to the controls points are pointed in different directions away\n\t\t\t\t\t// from the line segment then the line should not be drawn.\n\t\t\t\t\tfloat d0 = dot( normalize( norm ), normalize( c0dir ) );\n\t\t\t\t\tfloat d1 = dot( normalize( norm ), normalize( c1dir ) );\n\t\t\t\t\tdiscardFlag = float( sign( d0 ) != sign( d1 ) );\n\n\t\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t\t#include <clipping_planes_vertex>\n\t\t\t\t\t#include <fog_vertex>\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\t\t\tuniform vec3 diffuse;\n\t\t\tuniform float opacity;\n\t\t\tvarying float discardFlag;\n\n\t\t\t#include <common>\n\t\t\t#include <color_pars_fragment>\n\t\t\t#include <fog_pars_fragment>\n\t\t\t#include <logdepthbuf_pars_fragment>\n\t\t\t#include <clipping_planes_pars_fragment>\n\t\t\tvoid main() {\n\n\t\t\t\tif ( discardFlag > 0.5 ) discard;\n\n\t\t\t\t#include <clipping_planes_fragment>\n\t\t\t\tvec3 outgoingLight = vec3( 0.0 );\n\t\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t\t\t\t#include <logdepthbuf_fragment>\n\t\t\t\t#include <color_fragment>\n\t\t\t\toutgoingLight = diffuseColor.rgb; // simple shader\n\t\t\t\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t\t\t\t#include <tonemapping_fragment>\n\t\t\t\t#include <encodings_fragment>\n\t\t\t\t#include <fog_fragment>\n\t\t\t\t#include <premultiplied_alpha_fragment>\n\t\t\t}\n\t\t\t"}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(e),this.isLDrawConditionalLineMaterial=!0}}class k extends a.ejS{constructor(e,t){super(e,t),this.isConditionalLine=!0}}function L(e){for(let t=0,r=e.length;t<r;t++){const r=e[t],n=r.vertices,i=n[0],o=n[1],s=n[2];M.subVectors(o,i),b.subVectors(s,o),r.faceNormal=(new a.Pa4).crossVectors(M,b).normalize()}}const v=new a.zHn;function E(e,t,r=!1){const n=100*(1+1e-10);function i(e){const t=~~(e.x*n),r=~~(e.y*n),a=~~(e.z*n);return`${t},${r},${a}`}function o(e,t){return`${i(e)}_${i(t)}`}function s(e,t,r){r.direction.subVectors(t,e).normalize();const a=e.dot(r.direction);return r.origin.copy(e).addScaledVector(r.direction,-a),r}function l(e){return o(e.origin,e.direction)}const c=new Set,h=new Map,d={},u=[];for(let g=0,m=t.length;g<m;g++){const e=t[g],n=e.vertices,i=n[0],d=n[1];if(c.add(o(i,d)),c.add(o(d,i)),r){const e=s(i,d,new a.zHn),t=l(e);if(!h.has(t)){s(d,i,e);const r=l(e),a={ray:e,distances:[]};h.set(t,a),h.set(r,a)}const r=h.get(t);let n=r.ray.direction.dot(i),o=r.ray.direction.dot(d);n>o&&([n,o]=[o,n]),r.distances.push(n,o)}}for(let a=0,g=e.length;a<g;a++){const t=e[a],n=t.vertices,i=n.length;for(let e=0;e<i;e++){const a=e,u=(e+1)%i,g=n[a],m=n[u],p=o(g,m);if(c.has(p))continue;if(r){s(g,m,v);const e=l(v);if(h.has(e)){const t=h.get(e),{ray:r,distances:a}=t;let n=r.direction.dot(g),i=r.direction.dot(m);n>i&&([n,i]=[i,n]);let o=!1;for(let e=0,s=a.length;e<s;e+=2)if(n>=a[e]&&i<=a[e+1]){o=!0;break}if(o)continue}}const f={index:a,tri:t};d[p]=f}}while(1){let e=null;for(const r in d){e=d[r];break}if(null===e)break;const t=[e];while(t.length>0){const e=t.pop().tri,r=e.vertices,n=e.normals,i=e.faceNormal,s=r.length;for(let l=0;l<s;l++){const c=l,h=(l+1)%s,g=r[c],m=r[h],p=o(g,m);delete d[p];const f=o(m,g),C=d[f];if(C){const r=C.tri,o=C.index,s=r.normals,l=s.length,g=r.faceNormal;if(Math.abs(r.faceNormal.dot(e.faceNormal))<.25)continue;f in d&&(t.push(C),delete d[f]);const m=(o+1)%l;n[c]&&s[m]&&n[c]!==s[m]&&(s[m].norm.add(n[c].norm),n[c].norm=s[m].norm);let p=n[c]||s[m];null===p&&(p={norm:new a.Pa4},u.push(p.norm)),null===n[c]&&(n[c]=p,p.norm.add(i)),null===s[m]&&(s[m]=p,p.norm.add(g)),n[h]&&s[o]&&n[h]!==s[o]&&(s[o].norm.add(n[h].norm),n[h].norm=s[o].norm);let w=n[h]||s[o];null===w&&(w={norm:new a.Pa4},u.push(w.norm)),null===n[h]&&(n[h]=w,w.norm.add(i)),null===s[o]&&(s[o]=w,w.norm.add(g))}}}}for(let a=0,g=u.length;a<g;a++)u[a].normalize()}function x(e){return"Part"===e||"Unofficial_Part"===e}function D(e){return/primitive/i.test(e)||"Subpart"===e}class T{constructor(e,t){this.line=e,this.lineLength=e.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=t}seekNonSpace(){while(this.currentCharIndex<this.lineLength){if(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar)return;this.currentCharIndex++}}getToken(){const e=this.currentCharIndex++;while(this.currentCharIndex<this.lineLength){if(this.currentChar=this.line.charAt(this.currentCharIndex)," "===this.currentChar||"\t"===this.currentChar)break;this.currentCharIndex++}const t=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(e,t)}getVector(){return new a.Pa4(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}class S{constructor(e){this.loader=e,this._cache={}}cloneResult(e){const t={};return t.faces=e.faces.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),normals:e.normals.map((()=>null)),faceNormal:null}))),t.conditionalSegments=e.conditionalSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),controlPoints:e.controlPoints.map((e=>e.clone()))}))),t.lineSegments=e.lineSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone()))}))),t.type=e.type,t.category=e.category,t.keywords=e.keywords,t.author=e.author,t.subobjects=e.subobjects,t.fileName=e.fileName,t.totalFaces=e.totalFaces,t.startingBuildingStep=e.startingBuildingStep,t.materials=e.materials,t.group=null,t}async fetchData(e){let t=!1,r=h;while(r!==f){let n=e;switch(r){case g:r+=1;break;case h:n="parts/"+n,r+=1;break;case d:n="p/"+n,r+=1;break;case u:n="models/"+n,r+=1;break;case m:n=e.substring(0,e.lastIndexOf("/")+1)+n,r+=1;break;case p:t?r=f:(e=e.toLowerCase(),n=e,t=!0,r=h);break}const i=this.loader,o=new a.hH6(i.manager);o.setPath(i.partsLibraryPath),o.setRequestHeader(i.requestHeader),o.setWithCredentials(i.withCredentials);try{const e=await o.loadAsync(n);return e}catch{continue}}throw new Error('LDrawLoader: Subobject "'+e+'" could not be loaded.')}parse(e,t=null){const r=this.loader,n=[],i=[],o=[],s=[],l={},c=e=>l[e]||null;let h="Model",d=null,u=null,g=null,m=0;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n"));const p=e.split("\n"),f=p.length;let C=!1,w=null,M=null,b=!1,y=!0,k=!1,L=!0,v=!1;for(let E=0;E<f;E++){const e=p[E];if(0===e.length)continue;if(C){e.startsWith("0 FILE ")?(this.setData(w,M),w=e.substring(7),M=""):M+=e+"\n";continue}const t=new T(e,E+1);if(t.seekNonSpace(),t.isAtTheEnd())continue;const f=t.getToken();let x,D,S,N,_,A,F,V,I,P,R;switch(f){case"0":const e=t.getToken();if(e)switch(e){case"!LDRAW_ORG":h=t.getToken();break;case"!COLOUR":x=r.parseColorMetaDirective(t),x?l[x.userData.code]=x:console.warn("LDrawLoader: Error parsing material"+t.getLineNumberString());break;case"!CATEGORY":d=t.getToken();break;case"!KEYWORDS":const e=t.getRemainingString().split(",");e.length>0&&(u||(u=[]),e.forEach((function(e){u.push(e.trim())})));break;case"FILE":E>0&&(C=!0,w=t.getRemainingString(),M="",b=!1,y=!0);break;case"BFC":while(!t.isAtTheEnd()){const e=t.getToken();switch(e){case"CERTIFY":case"NOCERTIFY":b="CERTIFY"===e,y=!0;break;case"CW":case"CCW":y="CCW"===e;break;case"INVERTNEXT":k=!0;break;case"CLIP":case"NOCLIP":L="CLIP"===e;break;default:console.warn('THREE.LDrawLoader: BFC directive "'+e+'" is unknown.');break}}break;case"STEP":v=!0;break;case"Author:":g=t.getToken();break;default:break}break;case"1":D=t.getToken(),x=c(D);const p=parseFloat(t.getToken()),T=parseFloat(t.getToken()),W=parseFloat(t.getToken()),z=parseFloat(t.getToken()),O=parseFloat(t.getToken()),B=parseFloat(t.getToken()),j=parseFloat(t.getToken()),G=parseFloat(t.getToken()),U=parseFloat(t.getToken()),H=parseFloat(t.getToken()),q=parseFloat(t.getToken()),Y=parseFloat(t.getToken()),$=(new a.yGw).set(z,O,B,p,j,G,U,T,H,q,Y,W,0,0,0,1);let K=t.getRemainingString().trim().replace(/\\/g,"/");r.fileMap[K]?K=r.fileMap[K]:K.startsWith("s/")?K="parts/"+K:K.startsWith("48/")&&(K="p/"+K),s.push({material:x,colorCode:D,matrix:$,fileName:K,inverted:k,startingBuildingStep:v}),v=!1,k=!1;break;case"2":D=t.getToken(),x=c(D),A=t.getVector(),F=t.getVector(),S={material:x,colorCode:D,vertices:[A,F]},i.push(S);break;case"5":D=t.getToken(),x=c(D),A=t.getVector(),F=t.getVector(),P=t.getVector(),R=t.getVector(),S={material:x,colorCode:D,vertices:[A,F],controlPoints:[P,R]},o.push(S);break;case"3":D=t.getToken(),x=c(D),N=y,_=!b||!L,!0===N?(A=t.getVector(),F=t.getVector(),V=t.getVector()):(V=t.getVector(),F=t.getVector(),A=t.getVector()),n.push({material:x,colorCode:D,faceNormal:null,vertices:[A,F,V],normals:[null,null,null]}),m++,!0===_&&(n.push({material:x,colorCode:D,faceNormal:null,vertices:[V,F,A],normals:[null,null,null]}),m++);break;case"4":D=t.getToken(),x=c(D),N=y,_=!b||!L,!0===N?(A=t.getVector(),F=t.getVector(),V=t.getVector(),I=t.getVector()):(I=t.getVector(),V=t.getVector(),F=t.getVector(),A=t.getVector()),n.push({material:x,colorCode:D,faceNormal:null,vertices:[A,F,V,I],normals:[null,null,null,null]}),m+=2,!0===_&&(n.push({material:x,colorCode:D,faceNormal:null,vertices:[I,V,F,A],normals:[null,null,null,null]}),m+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+f+'"'+t.getLineNumberString()+".")}}return C&&this.setData(w,M),{faces:n,conditionalSegments:o,lineSegments:i,type:h,category:d,keywords:u,author:g,subobjects:s,totalFaces:m,startingBuildingStep:v,materials:l,fileName:t,group:null}}getData(e,t=!0){const r=e.toLowerCase(),a=this._cache[r];return null===a||a instanceof Promise?null:t?this.cloneResult(a):a}async ensureDataLoaded(e){const t=e.toLowerCase();t in this._cache||(this._cache[t]=this.fetchData(e).then((r=>{const a=this.parse(r,e);return this._cache[t]=a,a}))),await this._cache[t]}setData(e,t){const r=e.toLowerCase();this._cache[r]=this.parse(t,e)}}function N(e,t,r,a){const n=!a&&e===C||a&&e===w;return n&&(e=t),r[e]||null}class _{constructor(e){this.loader=e,this.parseCache=new S(e),this._cache={}}async processIntoMesh(e){const t=this.loader,r=this.parseCache,n=new Set,i=async(e,o=null)=>{const s=e.subobjects,l=[];for(let t=0,a=s.length;t<a;t++){const e=s[t],a=r.ensureDataLoaded(e.fileName).then((()=>{const t=r.getData(e.fileName,!1);return D(t.type)?i(r.getData(e.fileName),e):this.loadModel(e.fileName).catch((e=>(console.warn(e),null)))}));l.push(a)}const c=new a.ZAu;c.userData.category=e.category,c.userData.keywords=e.keywords,c.userData.author=e.author,c.userData.type=e.type,c.userData.fileName=e.fileName,e.group=c;const h=await Promise.all(l);for(let r=0,a=h.length;r<a;r++){const a=e.subobjects[r],i=h[r];if(null===i)continue;if(i.isGroup){const r=i;a.matrix.decompose(r.position,r.quaternion,r.scale),r.userData.startingBuildingStep=a.startingBuildingStep,r.name=a.fileName,t.applyMaterialsToMesh(r,a.colorCode,e.materials),r.userData.colorCode=a.colorCode,c.add(r);continue}i.group.children.length&&c.add(i.group);const o=e.lineSegments,s=e.conditionalSegments,l=e.faces,d=i.lineSegments,u=i.conditionalSegments,g=i.faces,m=a.matrix,p=a.inverted,f=m.determinant()<0,M=a.colorCode,b=M===C?w:M;for(let t=0,r=d.length;t<r;t++){const r=d[t],a=r.vertices;a[0].applyMatrix4(m),a[1].applyMatrix4(m),r.colorCode=r.colorCode===w?b:r.colorCode,r.material=r.material||N(r.colorCode,r.colorCode,e.materials,!0),o.push(r)}for(let t=0,r=u.length;t<r;t++){const r=u[t],a=r.vertices,n=r.controlPoints;a[0].applyMatrix4(m),a[1].applyMatrix4(m),n[0].applyMatrix4(m),n[1].applyMatrix4(m),r.colorCode=r.colorCode===w?b:r.colorCode,r.material=r.material||N(r.colorCode,r.colorCode,e.materials,!0),s.push(r)}for(let t=0,r=g.length;t<r;t++){const r=g[t],a=r.vertices;for(let e=0,t=a.length;e<t;e++)a[e].applyMatrix4(m);r.colorCode=r.colorCode===C?M:r.colorCode,r.material=r.material||N(r.colorCode,M,e.materials,!1),n.add(r.colorCode),f!==p&&a.reverse(),l.push(r)}e.totalFaces+=i.totalFaces}return o&&(t.applyMaterialsToMesh(c,o.colorCode,e.materials),c.userData.colorCode=o.colorCode),e};for(let a=0,s=e.faces;a<s;a++)n.add(e.faces[a].colorCode);if(await i(e),t.smoothNormals){const t=n.size>1;L(e.faces),E(e.faces,e.lineSegments,t)}const o=e.group;return e.faces.length>0&&o.add(F(e.faces,3,!1,e.totalFaces)),e.lineSegments.length>0&&o.add(F(e.lineSegments,2)),e.conditionalSegments.length>0&&o.add(F(e.conditionalSegments,2,!0)),o}hasCachedModel(e){return null!==e&&e.toLowerCase()in this._cache}async getCachedModel(e){if(null!==e&&this.hasCachedModel(e)){const t=e.toLowerCase(),r=await this._cache[t];return r.clone()}return null}async loadModel(e){const t=this.parseCache,r=e.toLowerCase();if(this.hasCachedModel(e))return this.getCachedModel(e);{await t.ensureDataLoaded(e);const a=t.getData(e),n=this.processIntoMesh(a);if(this.hasCachedModel(e))return this.getCachedModel(e);x(a.type)&&(this._cache[r]=n);const i=await n;return i.clone()}}async parseModel(e){const t=this.parseCache,r=t.parse(e);return x(r.type)&&this.hasCachedModel(r.fileName)?this.getCachedModel(r.fileName):this.processIntoMesh(r)}}function A(e,t){return e.colorCode===t.colorCode?0:e.colorCode<t.colorCode?-1:1}function F(e,t,r=!1,n=null){e.sort(A),null===n&&(n=e.length);const i=new Float32Array(t*n*3),o=3===t?new Float32Array(t*n*3):null,s=[],l=new Array(6),c=new a.u9r;let h=null,d=0,u=0,g=0;for(let p=0,f=e.length;p<f;p++){const n=e[p];let m=n.vertices;4===m.length&&(l[0]=m[0],l[1]=m[1],l[2]=m[2],l[3]=m[0],l[4]=m[2],l[5]=m[3],m=l);for(let e=0,t=m.length;e<t;e++){const t=m[e],r=g+3*e;i[r+0]=t.x,i[r+1]=t.y,i[r+2]=t.z}if(3===t){if(!n.faceNormal){const e=m[0],t=m[1],r=m[2];M.subVectors(t,e),b.subVectors(r,t),n.faceNormal=(new a.Pa4).crossVectors(M,b).normalize()}let e=n.normals;4===e.length&&(l[0]=e[0],l[1]=e[1],l[2]=e[2],l[3]=e[0],l[4]=e[2],l[5]=e[3],e=l);for(let t=0,r=e.length;t<r;t++){let r=n.faceNormal;e[t]&&(r=e[t].norm);const a=g+3*t;o[a+0]=r.x,o[a+1]=r.y,o[a+2]=r.z}}if(h!==n.colorCode){null!==h&&c.addGroup(d,u,s.length-1);const e=n.material;null!==e?3===t?s.push(e):2===t&&(r?s.push(e.userData.edgeMaterial.userData.conditionalEdgeMaterial):s.push(e.userData.edgeMaterial)):s.push(n.colorCode),h=n.colorCode,d=g/3,u=m.length}else u+=m.length;g+=3*m.length}u>0&&c.addGroup(d,1/0,s.length-1),c.setAttribute("position",new a.TlE(i,3)),null!==o&&c.setAttribute("normal",new a.TlE(o,3));let m=null;if(2===t?m=r?new k(c,1===s.length?s[0]:s):new a.ejS(c,1===s.length?s[0]:s):3===t&&(m=new a.Kj0(c,1===s.length?s[0]:s)),r){m.isConditionalLine=!0;const t=new Float32Array(3*e.length*2),r=new Float32Array(3*e.length*2),n=new Float32Array(3*e.length*2);for(let a=0,i=e.length;a<i;a++){const i=e[a],o=i.vertices,s=i.controlPoints,l=s[0],c=s[1],h=o[0],d=o[1],u=3*a*2;t[u+0]=l.x,t[u+1]=l.y,t[u+2]=l.z,t[u+3]=l.x,t[u+4]=l.y,t[u+5]=l.z,r[u+0]=c.x,r[u+1]=c.y,r[u+2]=c.z,r[u+3]=c.x,r[u+4]=c.y,r[u+5]=c.z,n[u+0]=d.x-h.x,n[u+1]=d.y-h.y,n[u+2]=d.z-h.z,n[u+3]=d.x-h.x,n[u+4]=d.y-h.y,n[u+5]=d.z-h.z}c.setAttribute("control0",new a.TlE(t,3,!1)),c.setAttribute("control1",new a.TlE(r,3,!1)),c.setAttribute("direction",new a.TlE(n,3,!1))}return m}class V extends a.aNw{constructor(e){super(e),this.materials=[],this.materialLibrary={},this.partsCache=new _(this),this.fileMap={},this.setMaterials([]),this.smoothNormals=!0,this.partsLibraryPath="",this.missingColorMaterial=new a.Wid({color:16711935,roughness:.3,metalness:0}),this.missingColorMaterial.name="Missing material",this.missingEdgeColorMaterial=new a.nls({color:16711935}),this.missingEdgeColorMaterial.name="Missing material - Edge",this.missingConditionalEdgeColorMaterial=new y({fog:!0,color:16711935}),this.missingConditionalEdgeColorMaterial.name="Missing material - Conditional Edge",this.missingColorMaterial.userData.edgeMaterial=this.missingEdgeColorMaterial,this.missingEdgeColorMaterial.userData.conditionalEdgeMaterial=this.missingConditionalEdgeColorMaterial}setPartsLibraryPath(e){return this.partsLibraryPath=e,this}async preloadMaterials(e){const t=new a.hH6(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials);const r=await t.loadAsync(e),n=/^0 !COLOUR/,i=r.split(/[\n\r]/g),o=[];for(let a=0,s=i.length;a<s;a++){const e=i[a];if(n.test(e)){const t=e.replace(n,""),r=this.parseColorMetaDirective(new T(t));o.push(r)}}this.setMaterials(o)}load(e,t,r,n){const i=new a.hH6(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(r=>{this.partsCache.parseModel(r,this.materialLibrary).then((r=>{this.applyMaterialsToMesh(r,C,this.materialLibrary,!0),this.computeBuildingSteps(r),r.userData.fileName=e,t(r)})).catch(n)}),r,n)}parse(e,t){this.partsCache.parseModel(e,this.materialLibrary).then((e=>{this.applyMaterialsToMesh(e,C,this.materialLibrary,!0),this.computeBuildingSteps(e),e.userData.fileName="",t(e)}))}setMaterials(e){this.materialLibrary={},this.materials=[];for(let t=0,r=e.length;t<r;t++)this.addMaterial(e[t]);return this.addMaterial(this.parseColorMetaDirective(new T("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new T("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(e){return this.fileMap=e,this}addMaterial(e){const t=this.materialLibrary;return t[e.userData.code]||(this.materials.push(e),t[e.userData.code]=e),this}getMaterial(e){if(e.startsWith("0x2")){const t=e.substring(3);return this.parseColorMetaDirective(new T("Direct_Color_"+t+" CODE -1 VALUE #"+t+" EDGE #"+t))}return this.materialLibrary[e]||null}applyMaterialsToMesh(e,t,r,a=!1){const n=this,i=t===C;function o(e,o){if(i&&!(o in r)&&!a)return o;const s=e.isLineSegments||e.isConditionalLine,l=!s&&o===C||s&&o===w;l&&(o=t);let c=null;if(o in r)c=r[o];else{if(!a)return o;c=n.getMaterial(o),null===c&&(console.warn(`LDrawLoader: Material properties for code ${o} not available.`),c=n.missingColorMaterial)}return e.isLineSegments&&(c=c.userData.edgeMaterial,e.isConditionalLine&&(c=c.userData.conditionalEdgeMaterial)),c}e.traverse((e=>{if(e.isMesh||e.isLineSegments)if(Array.isArray(e.material))for(let t=0,r=e.material.length;t<r;t++)e.material[t].isMaterial||(e.material[t]=o(e,e.material[t]));else e.material.isMaterial||(e.material=o(e,e.material))}))}getMainMaterial(){return this.getMaterial(C)}getMainEdgeMaterial(){const e=this.getMaterial(w);return e?e.userData.edgeMaterial:null}parseColorMetaDirective(e){let t=null,r=16711935,h=16711935,d=1,u=!1,g=0,m=n,p=null;const f=e.getToken();if(!f)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+e.getLineNumberString()+".");let C=null;while(1){if(C=e.getToken(),!C)break;if(!M(C))switch(C.toUpperCase()){case"CODE":t=e.getToken();break;case"VALUE":if(r=e.getToken(),r.startsWith("0x"))r="#"+r.substring(2);else if(!r.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+e.getLineNumberString()+".");break;case"EDGE":if(h=e.getToken(),h.startsWith("0x"))h="#"+h.substring(2);else if(!h.startsWith("#")){if(p=this.getMaterial(h),!p)throw new Error("LDrawLoader: Invalid edge color while parsing material"+e.getLineNumberString()+".");p=p.userData.edgeMaterial}break;case"ALPHA":if(d=parseInt(e.getToken()),isNaN(d))throw new Error("LDrawLoader: Invalid alpha value in material definition"+e.getLineNumberString()+".");d=Math.max(0,Math.min(1,d/255)),d<1&&(u=!0);break;case"LUMINANCE":if(!M(e.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+T.getLineNumberString()+".");break;case"CHROME":m=i;break;case"PEARLESCENT":m=o;break;case"RUBBER":m=s;break;case"MATTE_METALLIC":m=l;break;case"METAL":m=c;break;case"MATERIAL":e.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+C+'" while parsing material'+e.getLineNumberString()+".")}}let w=null;switch(m){case n:w=new a.Wid({color:r,roughness:.3,metalness:0});break;case o:w=new a.Wid({color:r,roughness:.3,metalness:.25});break;case i:w=new a.Wid({color:r,roughness:0,metalness:1});break;case s:w=new a.Wid({color:r,roughness:.9,metalness:0});break;case l:w=new a.Wid({color:r,roughness:.8,metalness:.4});break;case c:w=new a.Wid({color:r,roughness:.2,metalness:.85});break;default:break}return w.transparent=u,w.premultipliedAlpha=!0,w.opacity=d,w.depthWrite=!u,w.color.convertSRGBToLinear(),w.polygonOffset=!0,w.polygonOffsetFactor=1,0!==g&&w.emissive.set(w.color).multiplyScalar(g),p||(p=new a.nls({color:h,transparent:u,opacity:d,depthWrite:!u}),p.userData.code=t,p.name=f+" - Edge",p.color.convertSRGBToLinear(),p.userData.conditionalEdgeMaterial=new y({fog:!0,transparent:u,depthWrite:!u,color:h,opacity:d}),p.userData.conditionalEdgeMaterial.color.convertSRGBToLinear(),p.userData.conditionalEdgeMaterial.userData.code=t,p.userData.conditionalEdgeMaterial.name=f+" - Conditional Edge"),w.userData.code=t,w.name=f,w.userData.edgeMaterial=p,this.addMaterial(w),w;function M(e){let t;return t=e.startsWith("LUMINANCE")?parseInt(e.substring(9)):parseInt(e),!isNaN(t)&&(g=Math.max(0,Math.min(1,t/255)),!0)}}computeBuildingSteps(e){let t=0;e.traverse((e=>{e.isGroup&&(e.userData.startingBuildingStep&&t++,e.userData.buildingStep=t)})),e.userData.numBuildingSteps=t+1}}}}]);
//# sourceMappingURL=471.7da8d813.js.map