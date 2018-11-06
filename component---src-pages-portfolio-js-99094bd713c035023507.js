(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(e,t,a){"use strict";a.r(t);a(48),a(189),a(75),a(76);var n=a(0),r=a.n(n),l=a(174),i=a(154),o=a(158),s=(a(33),a(156)),c=a.n(s),u=a(155),m=a.n(u),d=(a(256),function(e){var t,a=e.children,n=e.href,l=e.variant,i=c()(e,["children","href","variant"]),o=n?"a":"button";return r.a.createElement(o,Object.assign({className:m()("button",(t={},t["button--variant-"+l]=l,t)),href:n},i),a)}),p=[{name:"Stanford Libraries",description:"Re-themed the Drupal 7 installation for Standford Universities Library. Utilized\n        modern responsive best practices and cutting edge front-end techniques.",technologies:"Drupal 7, Sass, Susy, Gulp, es6",image_url:"/images/screen-sul-small-cropped.jpg",url:"http://library.stanford.edu/",featured:!1,role:"Lead Engineer"},{name:"YMCA SF",description:"The build for the SF branch of the YMCA was incredible. Designed in-house\n          and re-imagined from a end-user perspective, YMCA was an awesome project.",technologies:"Drupal 7, Sass, Susy, Gulp",image_url:"/images/screen-ymcasf-small-cropped.jpg",url:"http://ymcasf.org",featured:!0,role:"Lead Engineer"},{name:"Apcera",description:"A quick build for a successful start-up. This site took advantage of\n          many cutting edge techniques, like responsive images and flexbox.",technologies:"Drupal 7, Sass, Susy, Gulp",image_url:"/images/screen-apcera-small-cropped.jpg",url:"http://apcera.com",featured:!1,role:"Lead Engineer"},{name:"Schoology",description:"One of the largest Drupal SaaS in the world, Schoology came to us for\n          a top-tier Drupal 7 rebuild of their marketing site.",technologies:"Drupal 7, Sass, Susy, Gulp",image_url:"/images/screen-schoology-small-cropped.jpg",url:"http://schoology.com",featured:!1,role:"Lead Engineer"},{name:"CH2M",description:"An amazing experience to rebrand one of the largest construction agencies\n          in the world. It also happened to be the <strong>first Drupal 8 site launched\n          in the US!</strong>",technologies:"Drupal 8, Twig, Sass, Susy, Gulp",image_url:"/images/screen-ch2m-small-cropped.png",featured:!1,url:"http://ch2m.com",role:"Lead UI Engineer"},{name:"BIDS",description:"Berkeley Institute of Data Science",technologies:"Drupal 7, Custom Theming, Sass, Grunt",image_url:"/images/screen-bids-small-cropped.png",featured:!1,url:"http://bids.berkeley.edu",role:"Lead Engineer"},{name:"Pantheon",description:"Pantheon",technologies:"Drupal 7, Custom Theming, Sass, Gulp",image_url:"/images/screen-pantheon-small-cropped.png",featured:!1,url:"http://pantheon.io",role:"UI Engineer"}];a(258),t.default=function(e){var t=e.location,a=p.find(function(e){return e.featured}),n=p.filter(function(e){return!e.featured});return r.a.createElement(l.a,{location:t,title:"Portfolio",description:"Below, you can find information on my recent projects. Full case studies and more in-depth write ups coming soon."},r.a.createElement(o.a,{bgColor:"grey"},r.a.createElement("div",{className:"featured-portfolio"},r.a.createElement("div",{className:"featured-portfolio-content"},r.a.createElement(i.a,{is:"h2"},a.name),r.a.createElement(i.a,{dangerouslySetInnerHTML:{__html:a.description}}),r.a.createElement(i.a,null,r.a.createElement("strong",null,"Tech Used:"),r.a.createElement("br",null),a.technologies),r.a.createElement(d,{href:a.url},"View Website")),r.a.createElement("div",{className:"featured-portfolio-image"},r.a.createElement("img",{src:a.image_url})))),r.a.createElement(o.a,null,r.a.createElement("div",{className:"portfolio-items"},n.map(function(e){return r.a.createElement("div",{className:"portfolio-item",key:e.name},r.a.createElement("div",{className:"portfolio-item-media"},r.a.createElement("img",{className:"portfolio-item-img",src:e.image_url})),r.a.createElement("div",{className:"portfolio-item-content"},r.a.createElement(i.a,{is:"h3",className:"portfolio-item-title",style:{lineHeight:1,marginBottom:12}},e.name),r.a.createElement(i.a,{className:"portfolio-item-role",dangerouslySetInnerHTML:{__html:e.role},style:{margin:0}})),r.a.createElement("div",{className:"portfolio-item-footer",style:{borderTop:"1px solid #eee",padding:8}},r.a.createElement(d,{variant:"plain",href:e.url},"View Website")))}))))}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(160),function(e){var t=e.children;e.gutter;return r.a.createElement("div",{className:"container"},t)});l.defaultProps={gutter:16},t.a=l},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(151),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(157),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){"use strict";a(33);var n=a(156),r=a.n(n),l=a(0),i=a.n(l),o=a(155),s=a.n(o),c=(a(164),function(e){var t,a=e.children,n=e.className,l=e.is,o=e.size,c=(e.variant,r()(e,["children","className","is","size","variant"]));return i.a.createElement(l,Object.assign({className:s()("typography",n,(t={},t["typography--"+o]=o,t))},c),a)});c.defaultProps={is:"p"},t.a=c},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a(33);var n=a(156),r=a.n(n),l=a(0),i=a.n(l),o=a(155),s=a.n(o),c=a(152);a(166);t.a=function(e){var t,a=e.bgColor,n=e.center,l=e.children,o=e.className,u=e.variant,m=r()(e,["bgColor","center","children","className","variant"]);return i.a.createElement("div",Object.assign({className:s()("slice",o,(t={"slice--center":n},t["slice--bg-"+a]=a,t["slice--variant-"+u]=u,t))},m),i.a.createElement(c.a,null,l))}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(49),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},160:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),l=a(153),i=a(155),o=a.n(i),s=(a(48),a(152)),c=(a(162),[{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/blog",title:"Blog"}]),u=function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"site-header-inner"},r.a.createElement(l.Link,{className:"site-title",to:"/"},"Drew Bolles"),r.a.createElement("nav",{className:"site-nav"},c.map(function(e){return r.a.createElement(l.Link,{className:"site-nav-link",to:e.href,key:e.href},e.title)})))))},m=a(154),d=a(178),p=a(158),f=(a(168),function(e){var t=e.children;return r.a.createElement("span",{className:"visually-hidden"},t)}),g=(a(170),function(){return r.a.createElement("footer",{className:"site-footer",role:"contentinfo"},r.a.createElement(p.a,{className:"site-social-media",bgColor:"green"},r.a.createElement("ul",{className:"social-media-list"},r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://github.com/drewbolles",title:"My GitHub"},r.a.createElement(f,null,r.a.createElement("strong",null,"My Github")),r.a.createElement(d.c,{size:100}))),r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://codepen.io/bollskis",title:"My Codepen"},r.a.createElement(f,null,r.a.createElement("strong",null,"My Codepen")),r.a.createElement(d.b,{size:100}))),r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://twitter.com/bollskis",title:"My Twitter"},r.a.createElement(f,null,r.a.createElement("strong",null,"My Twitter")),r.a.createElement(d.e,{size:100}))))),r.a.createElement("div",{className:"footer-info",style:{padding:"24px 0",fontSize:12,backgroundColor:"#f5f5f5"}},r.a.createElement(s.a,null,r.a.createElement("div",{className:"footer-col-wrapper"},r.a.createElement("div",{className:"footer-col footer-col-1"},r.a.createElement("ul",{className:"contact-list",style:{margin:0,padding:0,listStyle:"none"}},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:drewbolles@gmail.com"},"drewbolles@gmail.com")),r.a.createElement("li",null,"I am a passionate UI Engineer currently living in Delray Beach, FL."))),r.a.createElement("div",{className:"footer-col footer-col-2",style:{textAlign:"right"}},r.a.createElement("p",{className:"copyright",style:{margin:0}},"Built with ",r.a.createElement("a",{href:"http://jekyllrb.com"},"Gatsby"),". Hosted on"," ",r.a.createElement("a",{href:"http://github.com/drewbolles/drewbolles.com"},"GitHub Pages"),".",r.a.createElement("br",null),"All Rights Reserved"))))))});a(180),a(172),t.a=function(e){var t,a=e.children,n=(e.location,e.title),l=e.description,i=e.type,c=Object.assign({margin:"blog"===i?"12px 0 0":"12px 0 24px"},"blog"===i&&{color:"#9e9e9e"});return r.a.createElement("div",{className:o()("site",(t={},t["site--type-"+i]=i,t))},r.a.createElement(u,null),r.a.createElement("main",{className:"site-main"},n&&r.a.createElement("header",{className:"page-header",style:{padding:"48px 0 24px"}},r.a.createElement(s.a,null,r.a.createElement("h1",{className:"page-title",style:{margin:0}},n),l&&r.a.createElement(m.a,{size:"large",style:c},l))),r.a.createElement("div",{className:"page"},a)),r.a.createElement(g,null))}},189:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},256:function(e,t,a){},258:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-99094bd713c035023507.js.map