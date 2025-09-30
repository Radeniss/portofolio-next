exports.id=592,exports.ids=[592],exports.modules={5643:(e,t,a)=>{Promise.resolve().then(a.bind(a,1064)),Promise.resolve().then(a.bind(a,6361))},5432:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},1064:(e,t,a)=>{"use strict";a.d(t,{default:()=>f});var r=a(326),s=a(7577),o=a(8919),l=a(4793),i=a(2311),n=a(8823),c=a(2727);let d=["#ffffff","#ffffff","#ffffff"],m=e=>{3===(e=e.replace(/^#/,"")).length&&(e=e.split("").map(e=>e+e).join(""));let t=parseInt(e,16);return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]},h=`
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    vec4 mvPos = viewMatrix * mPos;

    // Fix: Add proper size calculation
    float pointSize = uBaseSize;
    if (uSizeRandomness > 0.0) {
      pointSize *= (1.0 + uSizeRandomness * (random.x - 0.5));
    }
    gl_PointSize = pointSize / length(mvPos.xyz);

    gl_Position = projectionMatrix * mvPos;
  }
`,x=`
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`,f=({particleCount:e=200,particleSpread:t=10,speed:a=.1,particleColors:f,moveParticlesOnHover:p=!1,particleHoverFactor:u=1,alphaParticles:v=!1,particleBaseSize:w=100,sizeRandomness:b=1,cameraDistance:g=20,disableRotation:j=!1,className:y=""})=>{let N=(0,s.useRef)(null),P=(0,s.useRef)({x:0,y:0}),z=(0,s.useRef)(0);return(0,s.useEffect)(()=>{let r=N.current;if(!r)return;let s=new o.T({depth:!1,alpha:!0}),y=s.gl;y.canvas.style.display="block",r.appendChild(y.canvas),y.clearColor(0,0,0,0);let k=new l.V(y,{fov:15});k.position.set(0,0,g);let S=()=>{let e=r.clientWidth,t=r.clientHeight;s.setSize(e,t),k.perspective({aspect:y.canvas.width/y.canvas.height})};window.addEventListener("resize",S,!1),S();let M=e=>{if(!r)return;let t=r.getBoundingClientRect(),a=(e.clientX-t.left)/t.width*2-1,s=-((e.clientY-t.top)/t.height*2-1);P.current={x:a,y:s}};p&&(document.addEventListener("mousemove",M),r.style.pointerEvents="none");let C=new Float32Array(3*e),R=new Float32Array(4*e),F=new Float32Array(3*e),A=f&&f.length>0?f:d;for(let t=0;t<e;t++){let e,a,r,s;do s=(e=2*Math.random()-1)*e+(a=2*Math.random()-1)*a+(r=2*Math.random()-1)*r;while(s>1||0===s);let o=Math.cbrt(Math.random());C.set([e*o,a*o,r*o],3*t),R.set([Math.random(),Math.random(),Math.random(),Math.random()],4*t);let l=m(A[Math.floor(Math.random()*A.length)]);F.set(l,3*t)}let T=new i.Z(y,{position:{size:3,data:C},random:{size:4,data:R},color:{size:3,data:F}}),E=new n.$(y,{vertex:h,fragment:x,uniforms:{uTime:{value:0},uSpread:{value:t},uBaseSize:{value:w},uSizeRandomness:{value:b},uAlphaParticles:{value:v?1:0}},transparent:!0,depthTest:!1}),L=new c.K(y,{mode:y.POINTS,geometry:T,program:E}),Z=performance.now(),$=0,_=e=>{z.current=requestAnimationFrame(_);let t=e-Z;if(Z=e,$+=t*a,E.uniforms.uTime.value=.001*$,p){let e=-P.current.x*u*2,t=-P.current.y*u*2;L.position.x+=(e-L.position.x)*.15,L.position.y+=(t-L.position.y)*.15}else L.position.x=0,L.position.y=0;j||(L.rotation.x=.1*Math.sin(2e-4*$),L.rotation.y=.15*Math.cos(5e-4*$),L.rotation.z+=.01*a),s.render({scene:L,camera:k})};return z.current=requestAnimationFrame(_),()=>{window.removeEventListener("resize",S),p&&document.removeEventListener("mousemove",M),cancelAnimationFrame(z.current),r.contains(y.canvas)&&r.removeChild(y.canvas)}},[e,t,a,p,u,v,w,b,g,j]),r.jsx("div",{ref:N,className:`w-full h-full ${y}`,style:{pointerEvents:p?"auto":"none"}})}},6361:(e,t,a)=>{"use strict";a.d(t,{default:()=>d});var r=a(326),s=a(7577),o=a(434),l=a(5047),i=a(7010),n=a(4019),c=a(748);let d=()=>{let[e,t]=(0,s.useState)(!1),[a,d]=(0,s.useState)(!1),m=(0,l.usePathname)();(0,s.useEffect)(()=>{let e=()=>{d(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let h=[{name:"Home",path:"/"},{name:"Portfolio",path:"/portfolio"},{name:"Projects",path:"/projects"},{name:"Certificates",path:"/certificates"},{name:"Blog",path:"/blog"}],x=e=>m===e;return(0,r.jsxs)("nav",{className:`
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-11/12 max-w-3xl h-16
      rounded-full border border-white/20
      shadow-md transition-all duration-300
      flex justify-between items-center px-4 sm:px-6 lg:px-8
      ${a?"bg-white/30 backdrop-blur-lg":"bg-white/10 backdrop-blur-lg"}`,children:[(0,r.jsxs)("div",{className:"flex justify-between items-center h-full w-full",children:[(0,r.jsxs)(o.default,{href:"/",className:"flex items-center space-x-2 group shrink-0",children:[r.jsx(i.Z,{className:`h-8 w-8 transition-colors ${a?"text-primary-600":"text-black"} group-hover:text-secondary-500`}),r.jsx("span",{className:`text-xl font-bold transition-colors whitespace-nowrap ${a?"text-slate-800":"text-black"} group-hover:text-secondary-500`,children:"DevPortfolio"})]}),r.jsx("div",{className:"hidden md:block",children:r.jsx("div",{className:"flex items-center space-x-2",children:h.map(e=>r.jsx(o.default,{href:e.path,className:`
                  px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full
                  ${x(e.path)?"bg-primary-600 text-white":a?"text-slate-900 hover:bg-slate-100/50 hover:text-primary-600":"text-white hover:bg-white/20 hover:text-secondary-500 transition-colors duration-200"}
                `,children:e.name},e.name))})}),r.jsx("div",{className:"md:hidden",children:r.jsx("button",{onClick:()=>t(!e),className:`p-2 rounded-md transition-colors ${a?"text-slate-600 hover:text-primary-600":"text-black hover:text-secondary-400"}`,children:e?r.jsx(n.Z,{className:"h-6 w-6"}):r.jsx(c.Z,{className:"h-6 w-6"})})})]}),e&&r.jsx("div",{className:"md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-11/12",children:r.jsx("div",{className:"px-4 py-4 space-y-2 bg-white/50 backdrop-blur-lg shadow-lg rounded-xl border border-white/20",children:h.map(e=>r.jsx(o.default,{href:e.path,onClick:()=>t(!1),className:`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${x(e.path)?"bg-primary-600 text-white":"text-slate-700 hover:bg-slate-100/50 hover:text-primary-600"}`,children:e.name},e.name))})})]})}},3765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u,metadata:()=>p});var r=a(9510),s=a(7366),o=a.n(s);a(7272);var l=a(8570);let i=(0,l.createProxy)(String.raw`F:\github\Javascript\portofolio-next\components\Navbar.tsx#default`);var n=a(8068),c=a(7029),d=a(429),m=a(1319),h=a(702);let x=()=>r.jsx("footer",{className:"bg-slate-800 text-white",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,r.jsxs)("div",{className:"col-span-1 md:col-span-2",children:[r.jsx("h3",{className:"text-xl font-bold mb-4",children:"DevPortfolio"}),r.jsx("p",{className:"text-slate-300 mb-6 max-w-md",children:"A passionate full-stack developer crafting digital experiences with modern technologies. Let's build something amazing together."}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[r.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-white transition-colors","aria-label":"GitHub Profile",children:r.jsx(n.Z,{className:"h-6 w-6"})}),r.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-white transition-colors","aria-label":"LinkedIn Profile",children:r.jsx(c.Z,{className:"h-6 w-6"})}),r.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-white transition-colors","aria-label":"Twitter Profile",children:r.jsx(d.Z,{className:"h-6 w-6"})}),r.jsx("a",{href:"mailto:contact@example.com",className:"text-slate-400 hover:text-white transition-colors","aria-label":"Email Contact",children:r.jsx(m.Z,{className:"h-6 w-6"})})]})]}),(0,r.jsxs)("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"space-y-2",children:[r.jsx("li",{children:r.jsx("a",{href:"/",className:"text-slate-300 hover:text-white transition-colors",children:"Home"})}),r.jsx("li",{children:r.jsx("a",{href:"/portfolio",className:"text-slate-300 hover:text-white transition-colors",children:"Portfolio"})}),r.jsx("li",{children:r.jsx("a",{href:"/projects",className:"text-slate-300 hover:text-white transition-colors",children:"Projects"})}),r.jsx("li",{children:r.jsx("a",{href:"/blog",className:"text-slate-300 hover:text-white transition-colors",children:"Blog"})})]})]}),(0,r.jsxs)("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Get In Touch"}),(0,r.jsxs)("ul",{className:"space-y-2 text-slate-300",children:[r.jsx("li",{children:"radenis354@gmail.com"}),r.jsx("li",{children:"+62 82267281439"}),r.jsx("li",{children:"Takengon, Center Aceh"})]})]})]}),(0,r.jsxs)("div",{className:"border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",children:[r.jsx("p",{className:"text-slate-400 text-sm",children:"\xa9 2024 DevPortfolio. All rights reserved."}),(0,r.jsxs)("p",{className:"text-slate-400 text-sm flex items-center mt-4 md:mt-0",children:["Made with ",r.jsx(h.Z,{className:"h-4 w-4 mx-1 text-red-500"})," and lots of coffee"]})]})]})}),f=(0,l.createProxy)(String.raw`F:\github\Javascript\portofolio-next\app\Particles.tsx#default`),p={title:"mahelbee - Full Stack Developer",description:"Professional portfolio of Mahelbee, a full-stack developer specializing in modern web technologies.",keywords:"web developer, full stack, React, Next.js, portfolio",authors:[{name:"mahelbee"}],openGraph:{title:"mahelbee - Full Stack Developer",description:"Professional portfolio showcasing modern web development projects",type:"website"}};function u({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:`${o().className} relative min-h-screen bg-secondary-950`,children:[r.jsx(f,{particleColors:["#ffffff","#e5e5e5","#d4d4d4"],particleCount:200,particleSpread:15,speed:.1,particleBaseSize:120,moveParticlesOnHover:!0,particleHoverFactor:1.5,alphaParticles:!0,disableRotation:!1,className:"fixed top-0 left-0 w-full h-screen -z-10"}),(0,r.jsxs)("div",{className:"relative z-10 flex flex-col min-h-screen isolate",children:[r.jsx(i,{}),r.jsx("main",{className:"flex-grow",children:e}),r.jsx(x,{})]})]})})}},7272:()=>{}};