import{j as d}from"./jsx-runtime-DEdD30eg.js";import{g as f,r as m}from"./index-RYns6xqu.js";var l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=a(e,i(s)))}return e}function i(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)n.call(e,s)&&e[s]&&(t=a(t,s));return t}function a(e,t){return t?e?e+" "+t:e+t:e}o.exports?(r.default=r,o.exports=r):window.classNames=r})()})(l);var v=l.exports;const x=f(v),b={small:"h-5 px-3 text-sm",medium:"h-8 px-4 text-base",large:"h-10 px-6 text-lg"},h={small:"h-5 w-5 text-sm",medium:"h-8 w-8 text-xl",large:"h-10 w-10 text-2xl"},g={primary:"bg-primary text-white hover:bg-primary-hover active:bg-primary-active",secondary:"bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active",review:"bg-review text-white hover:bg-review",approved:"bg-approved text-white hover:bg-approved",reproved:"bg-reproved text-white hover:bg-reproved",blank:"text-primary"},y=m.forwardRef(({children:o,title:n,size:r="medium",variant:i="primary",circle:a,className:e,testid:t="Button",inline:s,...u},c)=>{const p=x("font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed flex justify-center items-center text-nowrap",a?[h[r],"rounded-full"]:[b[r],"rounded-lg"],g[i],e,s&&"border-2");return d.jsx("button",{ref:c,className:p,"data-testid":t,...u,children:n||o})});y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1},variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},testid:{defaultValue:{value:"'Button'",computed:!1},required:!1}}};export{y as B,x as c};
