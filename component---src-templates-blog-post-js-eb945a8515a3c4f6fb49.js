(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(183),i=t.n(l),s=t(155),c=t(175),o=t.n(c),m=t(173),d=t(154),p=t(188),u=t(174),y=t(157),f=(t(252),function(e){var a=e.title,t=e.slug,r=function(e){e.preventDefault(),window.open(e.currentTarget.href,"","width=600,height=300")};return n.a.createElement("ul",{className:"share-list"},n.a.createElement("li",{className:"share-list-item"},n.a.createElement(y.a,{variant:"caps",is:"strong",style:{margin:0}},"Share:")),n.a.createElement("li",{className:"share-list-item"},n.a.createElement("a",{href:"http://www.facebook.com/share.php?u=https://www.drewbolles.com"+t+"&t="+a,"aria-label":"Share on Facebook",onClick:r},n.a.createElement(u.c,{size:24}))),n.a.createElement("li",{className:"share-list-item"},n.a.createElement("a",{href:"https://twitter.com/intent/tweet?original_referer=www.drewbolles.com&source=tweetbutton&text="+a+"&url=https://www.drewbolles.com"+t+"&via=bollskis","aria-label":"Share on Twitter",onClick:r},n.a.createElement(u.f,{size:24}))))});t(254);t.d(a,"pageQuery",function(){return g});a.default=function(e){var a=e.data,t=e.location,r=e.pageContext,l=a.markdownRemark,c=o()(a,"site.siteMetadata.title"),u=o()(l,"fields.slug"),y=l.excerpt,g=r.previous,h=r.next;return n.a.createElement(m.a,{location:t,title:l.frontmatter.title,description:l.frontmatter.date,type:"blog"},n.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:y}],title:l.frontmatter.title+" | "+c}),n.a.createElement(d.a,null,n.a.createElement(f,{title:l.frontmatter.title,slug:u}),n.a.createElement(p.a,{style:{marginBottom:24}},n.a.createElement("div",{style:{padding:16,fontSize:18},className:"post-content",dangerouslySetInnerHTML:{__html:l.html}})),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",marginBottom:24,padding:0}},n.a.createElement("li",null,g&&n.a.createElement(s.Link,{to:g.fields.slug,rel:"prev"},"← ",g.frontmatter.title)),n.a.createElement("li",null,h&&n.a.createElement(s.Link,{to:h.fields.slug,rel:"next"},h.frontmatter.title," →")))))};var g="1863408667"},154:function(e,a,t){"use strict";var r=t(161),n=t.n(r),l=t(0),i=t.n(l),s=function(e){var a=e.children;e.gutter;return i.a.createElement("div",{className:"jsx-759341007 container"},a,i.a.createElement(n.a,{styleId:"759341007",css:[".container.jsx-759341007{max-width:1008px;margin-right:auto;margin-left:auto;padding-right:16px;padding-left:16px;}","@media (min-width:768px){.container.jsx-759341007{padding-right:24px;padding-left:24px;}}"]}))};s.defaultProps={gutter:16},a.a=s},155:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return y}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return u});var r=t(0),n=t.n(r),l=t(4),i=t.n(l),s=t(153),c=t.n(s);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var o=t(159),m=t.n(o);t.d(a,"PageRenderer",function(){return m.a});var d=t(35);t.d(a,"parsePath",function(){return d.a});var p=n.a.createContext({}),u=function(e){return n.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,a,t){"use strict";t(34);var r=t(158),n=t.n(r),l=t(0),i=t.n(l),s=t(156),c=t.n(s),o=(t(165),function(e){var a,t=e.children,r=e.className,l=e.is,s=e.size,o=e.variant,m=n()(e,["children","className","is","size","variant"]);return i.a.createElement(l,Object.assign({className:c()("typography",r,(a={},a["typography--"+s]=s,a["typography--variant-"+o]=o,a))},m),t)});o.defaultProps={is:"p"},a.a=o},159:function(e,a,t){var r;e.exports=(r=t(162))&&r.default||r},160:function(e,a,t){"use strict";t(34);var r=t(158),n=t.n(r),l=t(0),i=t.n(l),s=t(156),c=t.n(s),o=t(154);t(167);a.a=function(e){var a,t=e.bgColor,r=e.center,l=e.children,s=e.className,m=e.variant,d=n()(e,["bgColor","center","children","className","variant"]);return i.a.createElement("div",Object.assign({className:c()("slice",s,(a={"slice--center":r},a["slice--bg-"+t]=t,a["slice--variant-"+m]=m,a))},d),i.a.createElement(o.a,null,l))}},162:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),l=t(4),i=t.n(l),s=t(51),c=t(2),o=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},163:function(e,a,t){},165:function(e,a,t){},167:function(e,a,t){},169:function(e,a,t){},171:function(e,a,t){},173:function(e,a,t){"use strict";t(34);var r,n=t(0),l=t.n(n),i=t(155),s=t(156),c=t.n(s),o=(t(49),t(154)),m=(t(163),[{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/blog",title:"Blog"}]),d=function(){return l.a.createElement("header",{className:"site-header"},l.a.createElement(o.a,null,l.a.createElement("div",{className:"site-header-inner"},l.a.createElement(i.Link,{className:"site-title",to:"/"},"Drew Bolles"),l.a.createElement("nav",{className:"site-nav"},m.map(function(e){return l.a.createElement(i.Link,{className:"site-nav-link",to:e.href,key:e.href},e.title)})))))},p=t(157),u=t(161),y=t.n(u),f=t(174),g=t(160),h=(t(169),function(e){var a=e.children;return l.a.createElement("span",{className:"visually-hidden"},a)}),b=t(7),E=t.n(b),x=t(50),w=(r=function(e){var a=e.theme;return l.a.createElement("footer",{role:"contentinfo",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" site-footer"},l.a.createElement(g.a,{bgColor:"green"},l.a.createElement("ul",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" social-media-list"},l.a.createElement("li",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" social-media-list__item"},l.a.createElement("a",{href:"http://github.com/drewbolles",title:"My GitHub",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},l.a.createElement(h,null,l.a.createElement("strong",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"My Github")),l.a.createElement(f.d,null))),l.a.createElement("li",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" social-media-list__item"},l.a.createElement("a",{href:"http://codepen.io/bollskis",title:"My Codepen",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},l.a.createElement(h,null,l.a.createElement("strong",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"My Codepen")),l.a.createElement(f.b,null))),l.a.createElement("li",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" social-media-list__item"},l.a.createElement("a",{href:"http://twitter.com/bollskis",title:"My Twitter",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},l.a.createElement(h,null,l.a.createElement("strong",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"My Twitter")),l.a.createElement(f.f,null))))),l.a.createElement("div",{style:{padding:a.baseSpacingUnit+"px 0",fontSize:12,backgroundColor:"#f5f5f5"},className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" footer-info"},l.a.createElement(o.a,null,l.a.createElement("div",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" footer-col-wrapper"},l.a.createElement("div",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" footer-col footer-col-1"},l.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"},className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" contact-list"},l.a.createElement("li",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},l.a.createElement("a",{href:"mailto:drewbolles@gmail.com",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"drewbolles@gmail.com")),l.a.createElement("li",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"I am a passionate UI Engineer currently living in Delray Beach, FL."))),l.a.createElement("div",{style:{textAlign:"right"},className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])+" footer-col footer-col-2"},l.a.createElement(p.a,{className:"copyright",style:{margin:0}},"Built with ",l.a.createElement("a",{href:"https://www.gatsbyjs.org",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"Gatsby"),". Hosted on"," ",l.a.createElement("a",{href:"http://github.com/drewbolles/drewbolles.com",className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])},"GitHub Pages"),".",l.a.createElement("br",{className:y.a.dynamic([["705018903",[a.colors.primary,a.breakpoints.m]]])}),"All Rights Reserved"))))),l.a.createElement(y.a,{styleId:"705018903",css:[".social-media-list.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;}",".social-media-list__item.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;color:#fff;text-align:center;}",".social-media-list__item.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{width:50px;height:50px;}",".footer-col-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".footer-col.__jsx-style-dynamic-selector{-webkit-flex:1 0 0;-ms-flex:1 0 0;flex:1 0 0;}",".footer-info.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:"+a.colors.primary+";}","@media (min-width:"+a.breakpoints.m+"px){.social-media-list__item.__jsx-style-dynamic-selector svg.__jsx-style-dynamic-selector{width:100px;height:100px;}}"],dynamic:[a.colors.primary,a.breakpoints.m]}))},function(e){function a(){return e.apply(this,arguments)||this}return E()(a,e),a.prototype.render=function(){var e=this;return l.a.createElement(x.a.Consumer,null,function(a){return l.a.createElement(r,Object.assign({},e.props,{theme:a}))})},a}(l.a.Component));t(176),t(171),a.a=function(e){var a,t=e.children,r=(e.location,e.title),n=e.description,i=e.type,s=Object.assign({margin:"blog"===i?"12px 0 0":"12px 0 24px"},"blog"===i&&{color:"#757575"});return l.a.createElement("div",{className:c()("site",(a={},a["site--type-"+i]=i,a))},l.a.createElement(d,null),l.a.createElement("main",{className:"site-main"},r&&l.a.createElement("header",{className:"page-header",style:{padding:"48px 0 24px"}},l.a.createElement(o.a,null,l.a.createElement("h1",{className:"page-title",style:{margin:0}},r),n&&l.a.createElement(p.a,{size:"large",style:s},n))),l.a.createElement("div",{className:"page"},t)),l.a.createElement(w,null))}},188:function(e,a,t){"use strict";t(34);var r=t(158),n=t.n(r),l=t(161),i=t.n(l),s=t(0),c=t.n(s);a.a=function(e){var a=e.children,t=n()(e,["children"]);return c.a.createElement("div",Object.assign({},t,{className:"jsx-595061220 "+(null!=t.className&&t.className||"box")}),a,c.a.createElement(i.a,{styleId:"595061220",css:[".box.jsx-595061220{padding:8px 0;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);}"]}))}},252:function(e,a,t){},254:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-eb945a8515a3c4f6fb49.js.map