"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6383],{60546:function(t,e,n){n.d(e,{OC:function(){return d}});var i=n(85893),o=n(67294),c=n(62246),l=n(4433),r=[{id:"slantLeft",getPath:function(t,e){return"M".concat(t," 0L-0 ").concat(e)}},{id:"slantRight",getPath:function(t,e){return"M0 0L".concat(t," ").concat(e)}},{id:"pointUp",getPath:function(t,e){return"M0 0".concat(e,"L").concat(t/2," 0L").concat(t," ").concat(e,"L").concat(1.5*t," 0V0")}},{id:"pointDown",getPath:function(t,e){return"M0 0L".concat(t/2," ").concat(e,"L").concat(t," 0")}},{id:"curveUp",getPath:function(t,e){return"M0 0 C".concat(t/2," ").concat(e," ").concat(t-t/2," ").concat(e," ").concat(t," 0")}},{id:"curveDown",getPath:function(t,e){return"M0 ".concat(e," C").concat(t/2," 0 ").concat(t-t/2," 0 ").concat(t," ").concat(e)}},{id:"waveLeft",getPath:function(t,e){return"M0 0C0 0 ".concat(.2023*t," ").concat(e," ").concat(.3333*t," ").concat(e,"C").concat(.4681*t," ").concat(e," ").concat(.5318*t," 0 ").concat(.6667*t," 0C").concat(.8015*t," 0 ").concat(t," ").concat(e," ").concat(t," ").concat(e)}},{id:"waveRight",getPath:function(t,e){return"M".concat(t," 0C").concat(t," 0 ").concat(.8*t," ").concat(e," ").concat(.666*t," ").concat(e,"C").concat(.547*t," ").concat(e," ").concat(.483*t," 0 ").concat(.333*t," 0C").concat(.184*t," 0 -0.00012207 ").concat(e," -0.00012207 ").concat(e)}},{id:"jaggedLeft",getPath:function(t,e){return"M0 0L".concat(t/3," ").concat(e,"L").concat(t/1.5," 0L").concat(t," ").concat(e)}},{id:"jaggedRight",getPath:function(t,e){return"M".concat(t," 0L").concat(t/1.5," ").concat(e,"L").concat(t/3," 0L0 ").concat(e)}},{id:"swoopLeft",getPath:function(t,e){return"M0 ".concat(e,"C").concat(t," 0 ").concat(2*t," 0 ").concat(2*t," 0")}},{id:"swoopRight",getPath:function(t,e){return"M".concat(t," ").concat(e,"C").concat(t/2," 0 0 0 0 0")}},{id:"none",getPath:function(t,e){return"M0 ".concat(e,"H").concat(t)}}],a=function(t){var e=t.width,n=t.shape,o=t.strokeWidth,c=t.strokeColor,a=t.strokeType,d=r.find((function(t){return t.id===(null!==n&&void 0!==n?n:"none")})),s=Math.floor(e),u="none"===d.id?Math.floor(o):Math.floor(s/l.c8),v=d.getPath(s,u);return(0,i.jsx)("svg",{className:"absolute bottom-0 left-0 z-50 overflow-visible",fill:"transparent",width:s,height:u,viewBox:"0 0 ".concat(s," ").concat(u),children:(0,i.jsx)("path",{d:v,stroke:c,strokeWidth:o,strokeDasharray:"dashed"===a?"40 20":void 0})})},d=function(t){var e=t.contentRef,n=t.border,l=t.sectionDivider,r=n||{},d=r.type,s=r.width,u=r.color,v=(0,o.useState)(0),f=v[0],g=v[1],h=(0,o.useCallback)((function(){var t;g(null!==(t=e.current.offsetWidth)&&void 0!==t?t:0)}),[e]);return(0,c.Z)(h,n?e:null),n?(0,i.jsx)(a,{width:f,shape:l,strokeType:d,strokeWidth:s,strokeColor:u}):null}},76383:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var i=n(26042),o=n(85893),c=n(11942),l=n(25675),r=n.n(l),a=n(52077),d=n(399),s=n(67294),u=n(21123),v=n(4433),f=n(60546),g=n(41370);function h(t){var e,n,l=t.id,h=t.block,m=t.website,x=t.previousBlock,w=t.stickyHeaderOffsetStyle,b=null===h||void 0===h?void 0:h.content,p=null===h||void 0===h?void 0:h.align,j=null===h||void 0===h?void 0:h.image,y=null===h||void 0===h?void 0:h.button,k=null===h||void 0===h?void 0:h.animation,C=null===m||void 0===m?void 0:m.animation,L=null===h||void 0===h?void 0:h.divider,P=null===h||void 0===h?void 0:h.border,M=(0,s.useRef)(null),N=(0,s.useState)("#000000"),A=N[0],H=N[1],R=(0,s.useState)({top:0,bottom:0}),z=R[0],K=R[1],S=["left","right"].includes(null===h||void 0===h||null===(e=h.image)||void 0===e?void 0:e.align)&&(null===h||void 0===h||null===(n=h.mobile)||void 0===n?void 0:n.reverseOrder),Z=(0,d.Z)(h).minHeight,W=function(){var t;switch(null===h||void 0===h||null===(t=h.image)||void 0===t?void 0:t.align){case"left":return"".concat(S?"flex-col":"flex-col-reverse"," lg:flex-row-reverse");case"top":return S?"flex-col":"flex-col-reverse";case"bottom":return S?"flex-col-reverse":"flex-col";default:return"".concat(S?"flex-col-reverse":"flex-col"," lg:flex-row")}},D=function(){switch(p){case"left":return"justify-start";case"center":return"justify-center";case"right":return"justify-end";case"middle":return(null===j||void 0===j?void 0:j.borderless)?"justify-center":"items-center";case"bottom":return(null===j||void 0===j?void 0:j.borderless)?"justify-end":"items-end";case"top":return(null===j||void 0===j?void 0:j.borderless)?"justify-start":"items-start"}},E=function(t){return(0,c.QW)(null===j||void 0===j?void 0:j.media)?(0,o.jsx)("div",{className:(0,c.AK)("flex-shrink-0 relative w-full h-full mx-auto",(0,c.n3)(j.aspectRatio)),children:(0,o.jsx)(r(),{sizes:"200vw",quality:90,onContextMenu:function(t){t.preventDefault()},priority:(null===h||void 0===h?void 0:h.idx)<=1,src:(0,c.QW)(null===j||void 0===j?void 0:j.media),objectFit:t||!j.imageFit?"cover":j.imageFit,objectPosition:"".concat(j.imagePositionX||"center"," ").concat(j.imagePositionY||"center"),layout:"fill",alt:j.altText||j.media.description||j.media.author,title:j.altText,className:t?"":(0,c.yW)(null===j||void 0===j?void 0:j.cornerRadius,null===m||void 0===m?void 0:m.cornerRadius)})}):null},T=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"rich-text-block",style:{color:A},dangerouslySetInnerHTML:{__html:b}}),y&&(0,o.jsx)(a.Z,{button:y,block:h,website:m,className:"mt-6 lg:mt-8 w-full md:w-max",fallbackSize:"md"})]})};return(0,o.jsxs)("section",{className:"relative",children:[(null===j||void 0===j?void 0:j.borderless)?(0,o.jsxs)("div",{ref:M,id:l,className:(0,c.AK)("relative flex break-word",W()),style:(0,i.Z)({minHeight:Z},(0,v.$h)(h),w),children:[(0,o.jsxs)("div",{className:(0,c.AK)("flex-1 relative"),style:(null===j||void 0===j?void 0:j.borderless)&&("right"===(null===j||void 0===j?void 0:j.align)&&!S||"left"===(null===j||void 0===j?void 0:j.align)&&S)?{paddingTop:(null===z||void 0===z?void 0:z.top)||0,paddingBottom:(null===z||void 0===z?void 0:z.bottom)||0}:{},children:[(0,o.jsx)(u.Z,{block:h,website:m,setTextColor:H}),(0,o.jsx)("div",{className:(0,c.AK)("relative z-10 container flex flex-col h-full mx-auto px-5 md:px-6 lg:px-20",D(),(0,c.A2)(null===h||void 0===h?void 0:h.verticalAlign,!0)),children:(0,o.jsx)(g.Z,{settings:k,globalSettings:C,children:(0,o.jsx)("div",{className:(0,c.AK)("flex flex-col w-full max-w-3xl","left"===(null===j||void 0===j?void 0:j.align)?"lg:mr-auto lg:ml-0":"lg:mr-0 lg:ml-auto",(0,c.bG)(null===h||void 0===h?void 0:h.spacing)),children:T()})})})]}),(0,o.jsx)("div",{className:"lg:flex-1 relative",children:E(!0)}),(0,o.jsx)(v.iz,{contentRef:M,divider:L,previousDivider:null===x||void 0===x?void 0:x.divider,border:P,previousBorder:null===x||void 0===x?void 0:x.border,dividerUniqueId:"".concat(l,"-").concat(L),noPadding:!0,onPaddingChange:K})]}):(0,o.jsxs)("div",{ref:M,id:l,className:(0,c.AK)("flex flex-none flex-shrink-0 relative break-word",(0,c.A2)(null===h||void 0===h?void 0:h.verticalAlign)),style:(0,i.Z)({minHeight:Z},(0,v.$h)(h)),children:[(0,o.jsx)(u.Z,{block:h,website:m,setTextColor:H}),(0,o.jsx)("div",{className:(0,c.AK)("relative z-10 container mx-auto",(0,c.bG)(null===h||void 0===h?void 0:h.spacing)),children:(0,o.jsxs)(g.Z,{settings:k,globalSettings:C,className:(0,c.AK)("flex w-full gap-10 lg:gap-20",W(),D()),children:[(0,o.jsx)("div",{className:(0,c.AK)("flex-1 flex flex-col max-w-240",function(){var t;if(["left","right"].includes(null===h||void 0===h||null===(t=h.image)||void 0===t?void 0:t.align))return"items-start";switch(p){case"left":return"items-start";case"center":return"items-center text-center mx-auto";case"right":return"items-end text-right ml-auto"}}()),children:T()}),(0,o.jsx)("div",{className:(0,c.AK)("flex-1 flex w-full h-full",function(){var t;if(["left","right"].includes(null===h||void 0===h||null===(t=h.image)||void 0===t?void 0:t.align))return"left"===p?"justify-end":"justify-center lg:justify-start";switch(p){case"left":return"items-start lg:max-w-1/2";case"center":return"items-center lg:max-w-1/2 mx-auto text-center";case"right":return"items-end lg:max-w-1/2 ml-auto text-right"}}()),children:E(!1)})]})}),(0,o.jsx)(v.iz,{contentRef:M,divider:L,previousDivider:null===x||void 0===x?void 0:x.divider,border:P,previousBorder:null===x||void 0===x?void 0:x.border,dividerUniqueId:"".concat(l,"-").concat(L)})]}),P&&(0,o.jsx)(f.OC,{contentRef:M,border:P,sectionDivider:L})]})}},399:function(t,e,n){n.d(e,{Z:function(){return l}});var i=n(67294),o="website-header";function c(t){var e;return t&&1===t.idx?(null===(e=null===document||void 0===document?void 0:document.getElementById(o))||void 0===e?void 0:e.offsetHeight)||80:0}function l(t){var e,n,o=(0,i.useState)(0),l=o[0],r=o[1],a=(0,i.useState)([0,0]),d=a[0],s=a[1];return(0,i.useEffect)((function(){var e,n=function(){s([window.innerWidth,window.innerHeight])};try{var i=document.getElementById("website-header");e=new ResizeObserver((function(){t&&r(c(t))})),i&&e.observe(i)}catch(o){}return window.addEventListener("resize",n),n(),function(){window.removeEventListener("resize",n),e&&e.disconnect()}}),[]),(0,i.useEffect)((function(){t&&r(c(t))}),[t,d]),{minHeight:(null===t||void 0===t||null===(e=t.spacing)||void 0===e?void 0:e.minHeight)?"calc(".concat("min-h-screen"===(null===t||void 0===t||null===(n=t.spacing)||void 0===n?void 0:n.minHeight)?"100vh":"134px"," - ").concat((null===t||void 0===t?void 0:t.combineWithHeader)?0:l,"px)"):"134px",headerHeight:l}}}}]);