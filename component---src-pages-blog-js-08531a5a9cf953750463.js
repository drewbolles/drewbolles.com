(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(49);var n=a(0),i=a.n(n),s=(a(156),a(168)),r=a.n(s),l=a(174),c=a.n(l),o=a(166),m=a(162),d=a(181),p=a(170);t.default=function(e){var t=e.data,a=e.location,n=r()(t,"site.siteMetadata.title"),s=r()(t,"site.siteMetadata.description"),l=r()(t,"allMarkdownRemark.edges");return i.a.createElement(o.a,{location:a,title:"Blog",description:"I mainly blog about front-end developement tips, current web industry trends, and front-end technology."},i.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:s}],title:n}),i.a.createElement(m.a,{bgColor:"grey"},i.a.createElement(p.b,null,l.map(function(e){var t=e.node;return i.a.createElement(p.a,{key:t.fields.slug},i.a.createElement(d.a,{node:t,hasExcerpt:!0}))}))))};var u="3352422197"},155:function(e,t,a){"use strict";var n=a(153),i=a.n(n),s=a(0),r=a.n(s),l=function(e){var t=e.children;e.gutter;return r.a.createElement("div",{className:"jsx-759341007 container"},t,r.a.createElement(i.a,{styleId:"759341007",css:[".container.jsx-759341007{max-width:1008px;margin-right:auto;margin-left:auto;padding-right:16px;padding-left:16px;}","@media (min-width:768px){.container.jsx-759341007{padding-right:24px;padding-left:24px;}}"]}))};l.defaultProps={gutter:16},t.a=l},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),s=a(4),r=a.n(s),l=a(154),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(161),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},158:function(e,t,a){"use strict";a(34);var n=a(159),i=a.n(n),s=a(153),r=a.n(s),l=a(0),c=a.n(l),o=a(157),m=a.n(o),d=function(e){var t,a=e.children,n=e.className,s=e.is,l=e.size,o=e.variant,d=i()(e,["children","className","is","size","variant"]);return c.a.createElement(s,Object.assign({},d,{className:"jsx-4131718021 "+(null!=d.className&&d.className||m()("typography",n,(t={},t["typography--"+l]=l,t["typography--variant-"+o]=o,t))||"")}),a,c.a.createElement(r.a,{styleId:"4131718021",css:["p.typography--large.jsx-4131718021{margin-bottom:24px;font-size:18px;}","h2.typography--large.jsx-4131718021{font-size:30px;}",".typography--variant-caps.jsx-4131718021{text-transform:uppercase;}","@media (min-width:992px){h2.typography--large.jsx-4131718021{font-size:45px;}}"]}))};d.defaultProps={is:"p"},t.a=d},160:function(e,t,a){"use strict";a(34);var n=a(7),i=a.n(n),s=a(0),r=a.n(s),l=a(50);t.a=function(e){return function(t){function a(){return t.apply(this,arguments)||this}return i()(a,t),a.prototype.render=function(){var t=this;return r.a.createElement(l.a.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t.props,{theme:a}))})},a}(r.a.Component)}},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e,t,a){"use strict";a(34);var n=a(159),i=a.n(n),s=a(153),r=a.n(s),l=a(0),c=a.n(l),o=a(157),m=a.n(o),d=a(155),p=a(160);t.a=Object(p.a)(function(e){var t,a=e.bgColor,n=e.center,s=e.children,l=e.className,o=e.theme,p=e.variant,u=i()(e,["bgColor","center","children","className","theme","variant"]);return c.a.createElement("div",Object.assign({},u,{className:r.a.dynamic([["3365948004",[o.baseSpacingUnit,o.colors.primary,o.breakpoints.m,2*o.baseSpacingUnit,3*o.baseSpacingUnit]]])+" "+(null!=u.className&&u.className||m()("slice",l,(t={"slice--center":n},t["slice--bg-"+a]=a,t["slice--variant-"+p]=p,t))||"")}),c.a.createElement(d.a,null,s),c.a.createElement(r.a,{styleId:"3365948004",css:[".slice.__jsx-style-dynamic-selector{padding:"+o.baseSpacingUnit+"px 0;}",".slice--center.__jsx-style-dynamic-selector{text-align:center;}",".slice--bg-green.__jsx-style-dynamic-selector{background-color:"+o.colors.primary+";}",".slice--bg-green.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;}",".slice--bg-grey.__jsx-style-dynamic-selector{background-color:#f5f5f5;border:1px solid #e0e0e0;border-width:1px 0;}","@media (min-width:"+o.breakpoints.m+"px){.slice.__jsx-style-dynamic-selector{padding:"+2*o.baseSpacingUnit+"px 0;}.slice--variant-callout.__jsx-style-dynamic-selector{padding:"+3*o.baseSpacingUnit+"px 0;}}"],dynamic:[o.baseSpacingUnit,o.colors.primary,o.breakpoints.m,2*o.baseSpacingUnit,3*o.baseSpacingUnit]}))})},163:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),s=a(4),r=a.n(s),l=a(51),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},164:function(e,t,a){},166:function(e,t,a){"use strict";a(34);var n=a(0),i=a.n(n),s=a(156),r=a(157),l=a.n(r),c=(a(49),a(153)),o=a.n(c),m=a(155),d=[{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/blog",title:"Blog"}],p=function(){return i.a.createElement("header",{className:"jsx-1086124325 site-header"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"jsx-1086124325 site-header-inner"},i.a.createElement(s.Link,{className:"site-title",to:"/"},"Drew Bolles"),i.a.createElement("nav",{className:"jsx-1086124325 site-nav"},d.map(function(e){return i.a.createElement(s.Link,{className:"site-nav-link",to:e.href,key:e.href},e.title)})))),i.a.createElement(o.a,{styleId:"1086124325",css:[".site-header.jsx-1086124325{padding:4px 0;background-color:#222;color:#fff;}",".site-header-inner.jsx-1086124325{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".site-header.jsx-1086124325 a{color:inherit;}",".site-title.jsx-1086124325{font-size:24px;line-height:56px;}",".site-nav.jsx-1086124325{margin-left:auto;}",".site-nav-link.jsx-1086124325{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:56px;padding:0 16px;}"]}))},u=a(158),y=a(167),g=a(162),f=function(e){var t=e.children;return i.a.createElement("span",{className:"jsx-2785131178 visually-hidden"},t,i.a.createElement(o.a,{styleId:"2785131178",css:[".visually-hidden.jsx-2785131178{width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;position:absolute !important;overflow:hidden !important;border:0 !important;-webkit-clip:rect(0 0 0 0) !important;clip:rect(0 0 0 0) !important;}"]}))},x=a(160),b=Object(x.a)(function(e){var t=e.theme;return i.a.createElement("footer",{role:"contentinfo",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" site-footer"},i.a.createElement(g.a,{bgColor:"green"},i.a.createElement("ul",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" social-media-list"},i.a.createElement("li",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://github.com/drewbolles",title:"My GitHub",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},i.a.createElement(f,null,i.a.createElement("strong",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"My Github")),i.a.createElement(y.d,null))),i.a.createElement("li",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://codepen.io/bollskis",title:"My Codepen",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},i.a.createElement(f,null,i.a.createElement("strong",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"My Codepen")),i.a.createElement(y.b,null))),i.a.createElement("li",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://twitter.com/bollskis",title:"My Twitter",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},i.a.createElement(f,null,i.a.createElement("strong",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"My Twitter")),i.a.createElement(y.f,null))))),i.a.createElement("div",{style:{padding:t.baseSpacingUnit+"px 0",fontSize:12,backgroundColor:"#f5f5f5"},className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" footer-info"},i.a.createElement(m.a,null,i.a.createElement("div",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" footer-col-wrapper"},i.a.createElement("div",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" footer-col footer-col-1"},i.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"},className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" contact-list"},i.a.createElement("li",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},i.a.createElement("a",{href:"mailto:drewbolles@gmail.com",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"drewbolles@gmail.com")),i.a.createElement("li",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"I am a passionate UI Engineer currently living in Delray Beach, FL."))),i.a.createElement("div",{style:{textAlign:"right"},className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])+" footer-col footer-col-2"},i.a.createElement(u.a,{className:"copyright",style:{margin:0}},"Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"Gatsby"),". Hosted on"," ",i.a.createElement("a",{href:"http://github.com/drewbolles/drewbolles.com",className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])},"GitHub Pages"),".",i.a.createElement("br",{className:o.a.dynamic([["1645504949",[t.breakpoints.m]]])}),"All Rights Reserved"))))),i.a.createElement(o.a,{styleId:"1645504949",css:[".social-media-list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;}",".social-media-list__item.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;color:#fff;text-align:center;}",".social-media-list__item.__jsx-style-dynamic-selector svg{width:50px;height:50px;}",".footer-col-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".footer-col.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;}",".footer-info.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;}","@media (min-width:"+t.breakpoints.m+"px){.social-media-list__item.__jsx-style-dynamic-selector svg{width:100px;height:100px;}}"],dynamic:[t.breakpoints.m]}))});a(169),a(164),t.a=function(e){var t,a=e.children,n=(e.location,e.title),s=e.description,r=e.type,c=Object.assign({margin:"blog"===r?"12px 0 0":"12px 0 24px"},"blog"===r&&{color:"#757575"});return i.a.createElement("div",{className:l()("site",(t={},t["site--type-"+r]=r,t))},i.a.createElement(p,null),i.a.createElement("main",{className:"site-main"},n&&i.a.createElement("header",{className:"page-header",style:{padding:"48px 0 24px"}},i.a.createElement(m.a,null,i.a.createElement("h1",{className:"page-title",style:{margin:0}},n),s&&i.a.createElement(u.a,{size:"large",style:c},s))),i.a.createElement("div",{className:"page"},a)),i.a.createElement(b,null))}},170:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(34);var n=a(159),i=a.n(n),s=a(153),r=a.n(s),l=a(0),c=a.n(l),o=a(157),m=a.n(o),d=function(e){var t=e.children,a=e.icon;return c.a.createElement("li",{className:"jsx-2556879815 "+(m()("list-item",{"list-item--has-icon":a})||"")},a&&c.a.createElement("span",{className:"jsx-2556879815 list-item-icon"},a),t,c.a.createElement(r.a,{styleId:"2556879815",css:[".list-item.jsx-2556879815{padding:20px 16px;vertical-align:top;}",".list-item-icon.jsx-2556879815{position:absolute;top:20px;left:16px;}",".list-item--has-icon.jsx-2556879815{position:relative;padding-left:72px;}"]}))};t.b=function(e){var t=e.children,a=e.divider,n=i()(e,["children","divider"]);return c.a.createElement("ul",Object.assign({},n,{className:"jsx-3820946408 "+(null!=n.className&&n.className||m()("list",{"list--has-divider":a})||"")}),t,c.a.createElement(r.a,{styleId:"3820946408",css:[".list.jsx-3820946408{margin:0;margin-bottom:12px;padding:8px 0;background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);list-style:none;}",".list--has-divider.jsx-3820946408 .list-item + .list-item{border-top:1px solid #e0e0e0;}"]}))}},181:function(e,t,a){"use strict";var n=a(153),i=a.n(n),s=a(0),r=a.n(s),l=a(156),c=a(168),o=a.n(c),m=a(158),d=a(160);t.a=Object(d.a)(function(e){var t=e.hasExcerpt,a=e.node,n=e.theme,s=o()(a,"frontmatter.title")||a.fields.slug;return r.a.createElement("div",{key:a.fields.slug,className:i.a.dynamic([["1423386421",[n.colors.primary]]])+" post-teaser"},r.a.createElement(m.a,{is:"h3",className:"post-teaser-title"},r.a.createElement(l.Link,{to:a.fields.slug},s)),r.a.createElement("small",{className:i.a.dynamic([["1423386421",[n.colors.primary]]])+" post-teaser-date"},a.frontmatter.date),t&&r.a.createElement(m.a,{className:"post-teaser-excerpt",dangerouslySetInnerHTML:{__html:a.excerpt}}),r.a.createElement(i.a,{styleId:"1423386421",css:[".post-teaser-title.__jsx-style-dynamic-selector{margin-bottom:4px;color:"+n.colors.primary+";}",".post-teaser-date.__jsx-style-dynamic-selector{color:#757575;}",".post-teaser-excerpt.__jsx-style-dynamic-selector{margin:0;}"],dynamic:[n.colors.primary]}))})}}]);
//# sourceMappingURL=component---src-pages-blog-js-08531a5a9cf953750463.js.map