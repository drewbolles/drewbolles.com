(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(180),l=t.n(r),s=t(162),c=t(174),o=t.n(c),m=t(172),d=t(161),p=t(185),y=t(159),u=t.n(y),f=t(173),g=t(164),x=function(e){var a=e.title,t=e.slug,n=function(e){e.preventDefault(),window.open(e.currentTarget.href,"","width=600,height=300")};return i.a.createElement("ul",{className:"jsx-1006987749 share-list"},i.a.createElement("li",{className:"jsx-1006987749 share-list-item"},i.a.createElement(g.a,{variant:"caps",is:"strong",style:{margin:0}},"Share:")),i.a.createElement("li",{className:"jsx-1006987749 share-list-item"},i.a.createElement("a",{href:"http://www.facebook.com/share.php?u=https://www.drewbolles.com"+t+"&t="+a,"aria-label":"Share on Facebook",onClick:n,className:"jsx-1006987749"},i.a.createElement(f.c,{size:24}))),i.a.createElement("li",{className:"jsx-1006987749 share-list-item"},i.a.createElement("a",{href:"https://twitter.com/intent/tweet?original_referer=www.drewbolles.com&source=tweetbutton&text="+a+"&url=https://www.drewbolles.com"+t+"&via=bollskis","aria-label":"Share on Twitter",onClick:n,className:"jsx-1006987749"},i.a.createElement(f.f,{size:24}))),i.a.createElement(u.a,{styleId:"1006987749",css:[".share-list.jsx-1006987749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;list-style:none;}",".share-list-item.jsx-1006987749,.share-list-item.jsx-1006987749 a.jsx-1006987749{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;line-height:24px;}",".share-list-item.jsx-1006987749+.share-list-item.jsx-1006987749{margin-left:8px;}"]}))};t(246);t.d(a,"pageQuery",function(){return h});a.default=function(e){var a=e.data,t=e.location,n=e.pageContext,r=a.markdownRemark,c=o()(a,"site.siteMetadata.title"),y=o()(r,"fields.slug"),u=r.excerpt,f=n.previous,g=n.next;return i.a.createElement(m.a,{location:t,title:r.frontmatter.title,description:r.frontmatter.date,type:"blog"},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:u}],title:r.frontmatter.title+" | "+c}),i.a.createElement(d.a,null,i.a.createElement(x,{title:r.frontmatter.title,slug:y}),i.a.createElement(p.a,{style:{marginBottom:24}},i.a.createElement("div",{style:{padding:16,fontSize:18},className:"post-content",dangerouslySetInnerHTML:{__html:r.html}})),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",marginBottom:24,padding:0}},i.a.createElement("li",null,f&&i.a.createElement(s.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),i.a.createElement("li",null,g&&i.a.createElement(s.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))))};var h="1863408667"},161:function(e,a,t){"use strict";var n=t(159),i=t.n(n),r=t(0),l=t.n(r),s=function(e){var a=e.children;e.gutter;return l.a.createElement("div",{className:"jsx-759341007 container"},a,l.a.createElement(i.a,{styleId:"759341007",css:[".container.jsx-759341007{max-width:1008px;margin-right:auto;margin-left:auto;padding-right:16px;padding-left:16px;}","@media (min-width:768px){.container.jsx-759341007{padding-right:24px;padding-left:24px;}}"]}))};s.defaultProps={gutter:16},a.a=s},162:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return u}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return y});var n=t(0),i=t.n(n),r=t(3),l=t.n(r),s=t(160),c=t.n(s);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var o=t(167),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var d=t(35);t.d(a,"parsePath",function(){return d.a});var p=i.a.createContext({}),y=function(e){return i.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},164:function(e,a,t){"use strict";t(34);var n=t(165),i=t.n(n),r=t(159),l=t.n(r),s=t(0),c=t.n(s),o=t(163),m=t.n(o),d=function(e){var a,t=e.children,n=e.className,r=e.is,s=e.size,o=e.variant,d=i()(e,["children","className","is","size","variant"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(r,Object.assign({},d,{className:"jsx-4131718021 "+(null!=d.className&&d.className||m()("typography",n,(a={},a["typography--"+s]=s,a["typography--variant-"+o]=o,a))||"")}),t),c.a.createElement(l.a,{styleId:"4131718021",css:["p.typography--large.jsx-4131718021{margin-bottom:24px;font-size:18px;}","h2.typography--large.jsx-4131718021{font-size:30px;}",".typography--variant-caps.jsx-4131718021{text-transform:uppercase;}","@media (min-width:992px){h2.typography--large.jsx-4131718021{font-size:45px;}}"]}))};d.defaultProps={is:"p"},a.a=d},166:function(e,a,t){"use strict";t(34);var n=t(7),i=t.n(n),r=t(0),l=t.n(r),s=t(51);a.a=function(e){return function(a){function t(){return a.apply(this,arguments)||this}return i()(t,a),t.prototype.render=function(){var a=this;return l.a.createElement(s.a.Consumer,null,function(t){return l.a.createElement(e,Object.assign({},a.props,{theme:t}))})},t}(l.a.Component)}},167:function(e,a,t){var n;e.exports=(n=t(169))&&n.default||n},168:function(e,a,t){"use strict";t(34);var n=t(165),i=t.n(n),r=t(159),l=t.n(r),s=t(0),c=t.n(s),o=t(163),m=t.n(o),d=t(161),p=t(166);a.a=Object(p.a)(function(e){var a,t=e.bgColor,n=e.center,r=e.children,s=e.className,o=e.theme,p=e.variant,y=i()(e,["bgColor","center","children","className","theme","variant"]);return c.a.createElement("div",Object.assign({},y,{className:l.a.dynamic([["1139771718",[o.baseSpacingUnit,o.colors.primary,o.breakpoints.m,2*o.baseSpacingUnit,3*o.baseSpacingUnit]]])+" "+(null!=y.className&&y.className||m()("slice",s,(a={"slice--center":n},a["slice--bg-"+t]=t,a["slice--variant-"+p]=p,a))||"")}),c.a.createElement(d.a,null,r),c.a.createElement(l.a,{styleId:"1139771718",css:[".slice.__jsx-style-dynamic-selector{padding:"+o.baseSpacingUnit+"px 0;}",".slice--center.__jsx-style-dynamic-selector{text-align:center;}",".slice--bg-green.__jsx-style-dynamic-selector{background-color:"+o.colors.primary+";}",".slice--bg-green.__jsx-style-dynamic-selector a{color:#fff;}",".slice--bg-grey.__jsx-style-dynamic-selector{background-color:#f5f5f5;border:1px solid #e0e0e0;border-width:1px 0;}","@media (min-width:"+o.breakpoints.m+"px){.slice.__jsx-style-dynamic-selector{padding:"+2*o.baseSpacingUnit+"px 0;}.slice--variant-callout.__jsx-style-dynamic-selector{padding:"+3*o.baseSpacingUnit+"px 0;}}"],dynamic:[o.baseSpacingUnit,o.colors.primary,o.breakpoints.m,2*o.baseSpacingUnit,3*o.baseSpacingUnit]}))})},169:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),i=t.n(n),r=t(3),l=t.n(r),s=t(52),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=o},170:function(e,a,t){},172:function(e,a,t){"use strict";t(34);var n=t(0),i=t.n(n),r=t(162),l=t(163),s=t.n(l),c=(t(49),t(159)),o=t.n(c),m=t(161),d=[{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/blog",title:"Blog"}],p=function(){return i.a.createElement("header",{className:"jsx-3274120618 site-header"},i.a.createElement(m.a,null,i.a.createElement("div",{className:"jsx-3274120618 site-header-inner"},i.a.createElement(r.Link,{className:"site-title",to:"/"},"Drew Bolles"),i.a.createElement("nav",{className:"jsx-3274120618 site-nav"},d.map(function(e){return i.a.createElement(r.Link,{className:"site-nav-link",to:e.href,key:e.href},e.title)})))),i.a.createElement(o.a,{styleId:"3274120618",css:[".site-header.jsx-3274120618{padding:4px 0;background-color:#222;color:#fff;}",".site-header-inner.jsx-3274120618{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".site-header.jsx-3274120618 a{color:inherit;}",".site-title{font-size:24px;line-height:56px;}",".site-nav.jsx-3274120618{margin-left:auto;}",".site-nav-link{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:56px;padding:0 16px;}"]}))},y=t(164),u=t(173),f=t(50),g=t(168),x=function(e){var a=e.children;return i.a.createElement("span",{className:"jsx-2785131178 visually-hidden"},a,i.a.createElement(o.a,{styleId:"2785131178",css:[".visually-hidden.jsx-2785131178{width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;position:absolute !important;overflow:hidden !important;border:0 !important;-webkit-clip:rect(0 0 0 0) !important;clip:rect(0 0 0 0) !important;}"]}))},h=t(166),b=Object(f.withMedia)(Object(h.a)(function(e){var a=e.media,t=e.theme;return i.a.createElement("footer",{role:"contentinfo",className:o.a.dynamic([["670062493",[t.colors.primary]]])+" site-footer"},i.a.createElement(g.a,{bgColor:"green"},i.a.createElement("ul",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" social-media-list"},i.a.createElement("li",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://github.com/drewbolles",title:"My GitHub",className:o.a.dynamic([["670062493",[t.colors.primary]]])},i.a.createElement(x,null,i.a.createElement("strong",{className:o.a.dynamic([["670062493",[t.colors.primary]]])},"My Github")),i.a.createElement(u.d,{size:a.m?100:50}))),i.a.createElement("li",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://codepen.io/bollskis",title:"My Codepen",className:o.a.dynamic([["670062493",[t.colors.primary]]])},i.a.createElement(x,null,i.a.createElement("strong",{className:o.a.dynamic([["670062493",[t.colors.primary]]])},"My Codepen")),i.a.createElement(u.b,{size:a.m?100:50}))),i.a.createElement("li",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" social-media-list__item"},i.a.createElement("a",{href:"http://twitter.com/bollskis",title:"My Twitter",className:o.a.dynamic([["670062493",[t.colors.primary]]])},i.a.createElement(x,null,i.a.createElement("strong",{className:o.a.dynamic([["670062493",[t.colors.primary]]])},"My Twitter")),i.a.createElement(u.f,{size:a.m?100:50}))))),i.a.createElement("div",{style:{padding:t.baseSpacingUnit+"px 0",fontSize:12,backgroundColor:"#f5f5f5"},className:o.a.dynamic([["670062493",[t.colors.primary]]])+" footer-info"},i.a.createElement(m.a,null,i.a.createElement("div",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" footer-col-wrapper"},i.a.createElement("div",{className:o.a.dynamic([["670062493",[t.colors.primary]]])+" footer-col footer-col-1"},i.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"},className:o.a.dynamic([["670062493",[t.colors.primary]]])+" contact-list"},i.a.createElement("li",{className:o.a.dynamic([["670062493",[t.colors.primary]]])},i.a.createElement("a",{href:"mailto:drewbolles@gmail.com",className:o.a.dynamic([["670062493",[t.colors.primary]]])},"drewbolles@gmail.com")),i.a.createElement("li",{className:o.a.dynamic([["670062493",[t.colors.primary]]])},"I am a passionate UI Engineer currently living in Delray Beach, FL."))),i.a.createElement("div",{style:{textAlign:"right"},className:o.a.dynamic([["670062493",[t.colors.primary]]])+" footer-col footer-col-2"},i.a.createElement(y.a,{className:"copyright",style:{margin:0}},"Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",className:o.a.dynamic([["670062493",[t.colors.primary]]])},"Gatsby"),". Hosted on"," ",i.a.createElement("a",{href:"http://github.com/drewbolles/drewbolles.com",className:o.a.dynamic([["670062493",[t.colors.primary]]])},"GitHub Pages"),".",i.a.createElement("br",{className:o.a.dynamic([["670062493",[t.colors.primary]]])}),"All Rights Reserved"))))),i.a.createElement(o.a,{styleId:"670062493",css:[".social-media-list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;}",".social-media-list__item.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;color:#fff;text-align:center;}",".footer-col-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".footer-col.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;}",".footer-info.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:"+t.colors.primary+";}"],dynamic:[t.colors.primary]}))}));t(175),t(170),a.a=function(e){var a,t=e.children,n=(e.location,e.title),r=e.description,l=e.type,c=Object.assign({margin:"blog"===l?"12px 0 0":"12px 0 24px"},"blog"===l&&{color:"#757575"});return i.a.createElement("div",{className:s()("site",(a={},a["site--type-"+l]=l,a))},i.a.createElement(p,null),i.a.createElement("main",{className:"site-main"},n&&i.a.createElement("header",{className:"page-header",style:{padding:"48px 0 24px"}},i.a.createElement(m.a,null,i.a.createElement("h1",{className:"page-title",style:{margin:0}},n),r&&i.a.createElement(y.a,{size:"large",style:c},r))),i.a.createElement("div",{className:"page"},t)),i.a.createElement(b,null))}},185:function(e,a,t){"use strict";t(34);var n=t(165),i=t.n(n),r=t(159),l=t.n(r),s=t(0),c=t.n(s);a.a=function(e){var a=e.children,t=i()(e,["children"]);return c.a.createElement("div",Object.assign({},t,{className:"jsx-595061220 "+(null!=t.className&&t.className||"box")}),a,c.a.createElement(l.a,{styleId:"595061220",css:[".box.jsx-595061220{padding:8px 0;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);}"]}))}},246:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-89ec8058d3a5a875a688.js.map