(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(0),r=a.n(n),l=a(184),i=a.n(l),c=a(153),s=a(179),o=a.n(s),u=a(174),m=a(152),d=a(175);a(248);t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,l=t.markdownRemark,s=o()(t,"site.siteMetadata.title"),f=l.excerpt,p=n.previous,g=n.next;return r.a.createElement(u.a,{location:a,title:l.frontmatter.title,description:l.frontmatter.date,type:"blog"},r.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:f}],title:l.frontmatter.title+" | "+s}),r.a.createElement(m.a,null,r.a.createElement(d.a,{style:{marginBottom:24}},r.a.createElement("div",{style:{padding:16,fontSize:18},className:"post-content",dangerouslySetInnerHTML:{__html:l.html}})),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",marginBottom:24,padding:0}},r.a.createElement("li",null,p&&r.a.createElement(c.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),r.a.createElement("li",null,g&&r.a.createElement(c.Link,{to:g.fields.slug,rel:"next"},g.frontmatter.title," →")))))};var f="3804820323"},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(160),function(e){var t=e.children;e.gutter;return r.a.createElement("div",{className:"container"},t)});l.defaultProps={gutter:16},t.a=l},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(151),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(157),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){"use strict";a(33);var n=a(156),r=a.n(n),l=a(0),i=a.n(l),c=a(155),s=a.n(c),o=(a(164),function(e){var t,a=e.children,n=e.className,l=e.is,c=e.size,o=(e.variant,r()(e,["children","className","is","size","variant"]));return i.a.createElement(l,Object.assign({className:s()("typography",n,(t={},t["typography--"+c]=c,t))},o),a)});o.defaultProps={is:"p"},t.a=o},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a(33);var n=a(156),r=a.n(n),l=a(0),i=a.n(l),c=a(155),s=a.n(c),o=a(152);a(166);t.a=function(e){var t,a=e.bgColor,n=e.center,l=e.children,c=e.className,u=e.variant,m=r()(e,["bgColor","center","children","className","variant"]);return i.a.createElement("div",Object.assign({className:s()("slice",c,(t={"slice--center":n},t["slice--bg-"+a]=a,t["slice--variant-"+u]=u,t))},m),i.a.createElement(o.a,null,l))}},159:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(49),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},160:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},174:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),l=a(153),i=a(155),c=a.n(i),s=(a(48),a(152)),o=(a(162),[{href:"/about",title:"About"},{href:"/portfolio",title:"Portfolio"},{href:"/blog",title:"Blog"}]),u=function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"site-header-inner"},r.a.createElement(l.Link,{className:"site-title",to:"/"},"Drew Bolles"),r.a.createElement("nav",{className:"site-nav"},o.map(function(e){return r.a.createElement(l.Link,{className:"site-nav-link",to:e.href,key:e.href},e.title)})))))},m=a(154),d=a(178),f=a(158),p=(a(168),function(e){var t=e.children;return r.a.createElement("span",{className:"visually-hidden"},t)}),g=(a(170),function(){return r.a.createElement("footer",{className:"site-footer",role:"contentinfo"},r.a.createElement(f.a,{className:"site-social-media",bgColor:"green"},r.a.createElement("ul",{className:"social-media-list"},r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://github.com/drewbolles",title:"My GitHub"},r.a.createElement(p,null,r.a.createElement("strong",null,"My Github")),r.a.createElement(d.c,{size:100}))),r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://codepen.io/bollskis",title:"My Codepen"},r.a.createElement(p,null,r.a.createElement("strong",null,"My Codepen")),r.a.createElement(d.b,{size:100}))),r.a.createElement("li",{className:"social-media-list__item"},r.a.createElement("a",{href:"http://twitter.com/bollskis",title:"My Twitter"},r.a.createElement(p,null,r.a.createElement("strong",null,"My Twitter")),r.a.createElement(d.e,{size:100}))))),r.a.createElement("div",{className:"footer-info",style:{padding:"24px 0",fontSize:12,backgroundColor:"#f5f5f5"}},r.a.createElement(s.a,null,r.a.createElement("div",{className:"footer-col-wrapper"},r.a.createElement("div",{className:"footer-col footer-col-1"},r.a.createElement("ul",{className:"contact-list",style:{margin:0,padding:0,listStyle:"none"}},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:drewbolles@gmail.com"},"drewbolles@gmail.com")),r.a.createElement("li",null,"I am a passionate UI Engineer currently living in Delray Beach, FL."))),r.a.createElement("div",{className:"footer-col footer-col-2",style:{textAlign:"right"}},r.a.createElement("p",{className:"copyright",style:{margin:0}},"Built with ",r.a.createElement("a",{href:"http://jekyllrb.com"},"Gatsby"),". Hosted on"," ",r.a.createElement("a",{href:"http://github.com/drewbolles/drewbolles.com"},"GitHub Pages"),".",r.a.createElement("br",null),"All Rights Reserved"))))))});a(180),a(172),t.a=function(e){var t,a=e.children,n=(e.location,e.title),l=e.description,i=e.type,o=Object.assign({margin:"blog"===i?"12px 0 0":"12px 0 24px"},"blog"===i&&{color:"#9e9e9e"});return r.a.createElement("div",{className:c()("site",(t={},t["site--type-"+i]=i,t))},r.a.createElement(u,null),r.a.createElement("main",{className:"site-main"},n&&r.a.createElement("header",{className:"page-header",style:{padding:"48px 0 24px"}},r.a.createElement(s.a,null,r.a.createElement("h1",{className:"page-title",style:{margin:0}},n),l&&r.a.createElement(m.a,{size:"large",style:o},l))),r.a.createElement("div",{className:"page"},a)),r.a.createElement(g,null))}},175:function(e,t,a){"use strict";a(33);var n=a(156),r=a.n(n),l=a(0),i=a.n(l);a(176);t.a=function(e){var t=e.children,a=r()(e,["children"]);return i.a.createElement("div",Object.assign({className:"box"},a),t)}},176:function(e,t,a){},248:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-c9a4eefbd0cf0cab6deb.js.map