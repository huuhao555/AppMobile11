;/*FB_PKG_DELIM*/

__d("CometFocusGroupFirstLetterNavigation",["isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");var i=a.useEffect,j=a.useState,k=function(a){return a.slice(0,1).toLowerCase()};b=function(a){var b=j(void 0),d=b[0],e=b[1];i(function(){var b;b=a==null?void 0:(b=a.current)==null?void 0:b.innerText;c("isStringNullOrEmpty")(b)||e(k(b))},[a]);return d};e=function(a){if(a.type==="PRINT_CHAR"){a.event.stopPropagation();var b=a.event.key.toLowerCase();b=a.getItemByTag(b);b!=null&&a.focusItem(b)}};g.getFirstLetterNavigationTag=k;g.useFirstLetterNavigationTag=b;g.handleFirstLetterNavigation=e}),98);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");b=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var k=b[0];e=b[1];function a(a){var b=[{command:{key:c("CometKeys").UP},description:h._("__JHASH__1VqMgLPpraa__JHASH__"),handler:function(){}},{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__7zajSsSIBFZ__JHASH__"),handler:function(){}}];return j.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,children:j.jsx(k,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";d={FocusGroup:a,FocusItem:e};g["default"]=d}),98);
__d("CometMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useContext;b={separator:{borderTop:"x1n2xptk",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",$$css:!0}};e={separator:{borderTopWidth:"x178xt8z",borderTopStyle:"x13fuv20",borderTopColor:"x8cjs6t",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",$$css:!0}};var l=c("gkx")("4855")?babelHelpers["extends"]({},b,e):b;function a(a,b){a=a.xstyle;var d=k(c("CometMenuItemBaseRoleContext"));return j.jsx("div",{className:(h||(h=c("stylex")))([l.separator,a]),ref:b,role:d==="menuitem"?"separator":"presentation"})}a.displayName=a.name+" [from "+f.id+"]";d=j.forwardRef(a);g["default"]=d}),98);
__d("CometMenuBase.react",["fbt","ix","BaseScrollableArea.react","CometErrorBoundary.react","CometFocusGroupFirstLetterNavigation","CometListCellStrict.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometSeparatorMenuItem.react","DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE","FocusRegion.react","TetraTextPairing.react","fbicon","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||d("react"),m=145,n={listItem:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",display:"x78zum5",flexDirection:"x1q0g3np",marginTop:"xdj266r",marginEnd:"x1emribx",marginBottom:"xat24cr",marginStart:"x1i64zmx",paddingTop:"xz9dl7a",paddingEnd:"x1sxyh0",paddingBottom:"xsag5q8",paddingStart:"xurb0ha",$$css:!0},root:{alignItems:"x1qjc9v5",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",paddingStart:"xkhd6sd",paddingLeft:null,paddingRight:null,paddingEnd:"x4uap5",paddingTop:"x1ten1a2",paddingBottom:"xz7cn9q",$$css:!0},sizeFull:{marginEnd:"xzy4u6w",marginLeft:null,marginRight:null,width:"xh8yej3",$$css:!0},sizeNormal:{width:"x168biu4",$$css:!0},sizeSmall:{width:"xi55695",$$css:!0}},o="menu",p={listbox:"option",menu:"menuitem"};function a(a){var b=a.children,e=a.footer,f=a.header,g=a.maxHeight,k=a.role;k=k===void 0?o:k;a=a.size;a=a===void 0?"normal":a;var q=0,r=l.Children.toArray(b).map(function(a){if(a==null)return null;var b=q++;return c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(a).type===c("CometSeparatorMenuItem.react")?a:l.jsx(c("CometErrorBoundary.react"),{children:a},b)});k=p[k];return l.Children.count(b)>0?l.jsx(c("BaseScrollableArea.react"),{horizontal:!1,style:g!=null?{maxHeight:Math.max(g,m)}:void 0,vertical:!0,xstyle:[n.root,a==="full"&&n.sizeFull,a==="normal"&&n.sizeNormal,a==="small"&&n.sizeSmall],children:l.jsxs(c("CometMenuItemBaseRoleContext").Provider,{value:k,children:[f!=null?l.jsxs(l.Fragment,{children:[f.onPressBack!=null?l.jsx(c("CometListCellStrict.react"),{addOnStart:{"aria-label":h._("__JHASH__v6nfNn2Wv-y__JHASH__"),icon:d("fbicon")._(i("512665"),24),onPress:f.onPressBack,type:"icon"},addOnStartVerticalAlign:"center",emphasized:!1,headline:f.title,level:3,meta:f.meta,paddingHorizontal:8}):l.jsx("div",{className:(j||(j=c("stylex")))([n.listItem]),children:l.jsx(c("TetraTextPairing.react"),{body:f.body,headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})}),l.jsx(c("CometSeparatorMenuItem.react"),{})]}):null,l.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:(f==null?void 0:f.onPressBack)?d("focusScopeQueries").tabbableScopeQuery:null,children:l.jsx(c("CometMenuFocusGroup").FocusGroup,{onNavigate:d("CometFocusGroupFirstLetterNavigation").handleFirstLetterNavigation,orientation:"vertical",preventScrollOnFocus:!1,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:r})}),e!=null?l.jsxs(l.Fragment,{children:[l.jsx(c("CometSeparatorMenuItem.react"),{}),l.jsx("div",{className:"x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha",children:l.jsx(c("TetraTextPairing.react"),{level:3,meta:e.text})})]}):null]})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMenuBaseWithPopover.react",["BaseContextualLayerAvailableHeightContext","BaseMultiPageView.react","CometMenuBase.react","CometPopover.react","CometPopoverLoadingStateContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext,k=15,l="menu";function a(a,b){var d=a["aria-label"],e=a["aria-labelledby"],f=a.children,g=a.fallback,h=a.id,m=a.role;m=m===void 0?l:m;var n=a.arrowAlignment,o=a.withArrow;o=o===void 0?!1:o;var p=a.testid;p=p===void 0?"comet-menu":p;p=a.truncate;p=p===void 0?!1:p;var q=a.maxHeight;a=babelHelpers.objectWithoutPropertiesLoose(a,["aria-label","aria-labelledby","children","fallback","id","role","arrowAlignment","withArrow","testid","truncate","maxHeight"]);var r=j(c("BaseContextualLayerAvailableHeightContext"));o&&r!=null&&(r-=k);r=Math.min((r=r)!=null?r:Infinity,(r=q)!=null?r:Infinity);p=p?r===Infinity?0:r:q;return i.Children.count(f)>0?i.jsx(c("CometPopover.react"),{"aria-label":d,"aria-labelledby":e,arrowAlignment:n,id:h,ref:b,role:m,testid:void 0,withArrow:o,children:i.jsx(c("BaseMultiPageView.react"),{disableAutoFocus:!0,disableFocusContainment:!0,fallback:(r=g)!=null?r:i.jsx(c("CometPopoverLoadingStateContent.react"),{}),children:i.jsx(c("CometMenuBase.react"),babelHelpers["extends"]({},a,{children:f,maxHeight:p,role:m}))})}):null}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(i.forwardRef(a));g["default"]=b}),98);
__d("CometMenu.react",["CometMenuBaseWithPopover.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,b){return i.jsx(c("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometMenuItemBase.react",["CometFocusGroupFirstLetterNavigation","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometNonBreakingSpace.react","CometPressable.react","CometPressableOverlay.react","CometTextWithIcon.react","TetraText.react","TetraTextPairing.react","mergeRefs","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useMemo,o=b.useRef,p={aux:{marginStart:"x16n37ib",marginLeft:null,marginRight:null,$$css:!0},content:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",justifyContent:"x1qughib",minWidth:"xeuugli",$$css:!0},disabled:{cursor:"x1h6gzvc",$$css:!0},extraHorizontalPadding:{paddingStart:"xurb0ha",paddingLeft:null,paddingRight:null,paddingEnd:"x1sxyh0",$$css:!0},listItem:{alignItems:"x6s0dn4",appearance:"xjyslct",boxSizing:"x9f619",cursor:"x1ypdohk",display:"x78zum5",flexDirection:"x1q0g3np",flexShrink:"x2lah0s",marginStart:"xnqzcj9",marginLeft:null,marginRight:null,marginEnd:"x1gh759c",marginTop:"xdj266r",marginBottom:"xat24cr",paddingStart:"x1344otq",paddingLeft:null,paddingRight:null,paddingEnd:"x1de53dj",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x1n2onr6",textAlign:"x16tdsg8",zIndex:"x1ja2u2z",$$css:!0},listItemAlignedCenter:{alignItems:"x6s0dn4",$$css:!0},listItemWithIcon:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0}};function a(a,b){var e=a.alignCenter;e=e===void 0?!1:e;var f=a.autoScrollOnLoad;f=f===void 0?!1:f;var g=a.aux,i=a.badge,q=a.bodyColor,r=a.bodyText,s=a.disabled,t=s===void 0?!1:s;s=a.download;var u=a.href,v=a.iconNode,w=a.id,x=a.isIconAnImage,y=a.onClick,z=a.onFocusIn,A=a.onFocusOut,B=a.onHoverIn,C=a.onHoverOut,D=a.onPressIn,E=a.overlayRadius,F=E===void 0?4:E;E=a.passthroughProps;var G=a.prefetchQueriesOnHover,H=a.preventClosingMenuOnSelect;H=H===void 0?!1:H;var I=a.preventLocalNavigation,J=a.primaryColor,K=a.primaryText,L=a.role,M=a.routeTarget,N=a.secondaryColor,O=a.secondaryText,P=a.target,Q=a.testid;Q=a.traceParams;var R=a.visuallyFocused,S=R===void 0?!1:R;R=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","autoScrollOnLoad","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","isIconAnImage","onClick","onFocusIn","onFocusOut","onHoverIn","onHoverOut","onPressIn","overlayRadius","passthroughProps","prefetchQueriesOnHover","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","traceParams","visuallyFocused"]);var T=o(null);a=l(c("CometMenuContext"));var U=H!==!0&&a?a.onClose:null;H=u!=null||M!=null||P!=null?{download:s,passthroughProps:E,prefetchQueriesOnHover:G,preventLocalNavigation:I,routeTarget:M,target:P,traceParams:Q,url:u}:void 0;a=k(function(a){U!=null&&U(),y&&y(a)},[y,U]);s=l(c("CometMenuItemBaseRoleContext"));I=(G=(E=L)!=null?E:s)!=null?G:void 0;var V=o(f);m(function(){var a=T.current;V.current&&a!=null&&(V.current=!1,a.scrollIntoView({block:"nearest"}))},[]);var W=o(S);m(function(){var a=T.current;!W.current&&S&&a!=null&&a.scrollIntoView({block:"nearest"})},[S]);var X=o(null);M=d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(X);P=n(function(){return c("mergeRefs")(b,T)},[b]);var Y=i!=null?typeof i==="number"?j.jsxs(j.Fragment,{children:[K,j.jsx(c("CometNonBreakingSpace.react"),{size:.5}),j.jsx(c("TetraText.react"),{color:t?"disabled":J,type:"body4",children:i})]}):j.jsx(c("CometTextWithIcon.react"),{iconAfter:i,children:K}):K;return j.jsx(c("CometMenuFocusGroup").FocusItem,{disabled:t,tag:M,children:j.jsx(c("CometPressable.react"),babelHelpers["extends"]({},R,{disabled:t,display:"inline",id:w,linkProps:H,onFocusIn:z,onFocusOut:A,onHoverIn:B,onHoverOut:C,onPress:a,onPressIn:D,overlayDisabled:!0,ref:P,role:I,suppressFocusRing:!0,testid:void 0,xstyle:[p.listItem,e&&p.listItemAlignedCenter,v!=null&&p.listItemWithIcon,t&&p.disabled],children:function(a){var b,d=a.focusVisible,e=a.hovered;a=a.pressed;return j.jsxs(j.Fragment,{children:[v,j.jsxs("div",{className:(h||(h=c("stylex")))(p.content,((b=x)!=null?b:!1)&&p.extraHorizontalPadding),children:[j.jsx(c("TetraTextPairing.react"),{body:r,bodyColor:t?"disabled":q,headline:Y,headlineColor:t?"disabled":J,headlineRef:X,level:4,meta:O,metaColor:t?"disabled":N,reduceEmphasis:!0}),g!=null&&j.jsx("div",{className:"x16n37ib",children:g})]}),j.jsx(c("CometPressableOverlay.react"),{focusVisible:d||S,hovered:e,pressed:a,radius:F,showFocusRing:!0})]})}}))})}a.displayName=a.name+" [from "+f.id+"]";e=j.forwardRef(a);g["default"]=e}),98);
__d("CometMenuItemIcon.react",["CometIcon.react","CometImage.react","IconSource","ImageIconSource","SVGIcon","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo,l={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},contained:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xvnh2x",minWidth:"x1g0q3yh",$$css:!0},iconRelativeContainer:{position:"x1n2onr6",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",$$css:!0},normal:{height:"xcrj56b",minWidth:"x1ua1ozc",$$css:!0},root:{alignItems:"x6s0dn4",alignSelf:"xoi2r2e",display:"x78zum5",justifyContent:"xl56j7k",marginEnd:"xq8finb",marginLeft:null,marginRight:null,$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.disabled,e=a.icon,f=a.iconColor,g=a.iconCssSelectorId,i=a.iconSize,m=i===void 0?20:i;i=a.use;var n=i===void 0?"normal":i;a=k(function(){if(e instanceof c("IconSource")){var a;return j.jsx(c("CometIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e})}if(e instanceof c("ImageIconSource"))return j.jsx(c("CometIcon.react"),{disabled:b,icon:e});if(e instanceof d("SVGIcon").SVGIcon){return j.jsx(c("CometIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e,size:m})}if(e instanceof d("SVGIcon").LegacySVGIcon||e instanceof d("SVGIcon").EmojiIcon){return j.jsx(c("CometIcon.react"),{color:(a=f)!=null?a:"primary",disabled:b,icon:e,size:m})}if(typeof e==="object"&&typeof e!=="function"&&!e._isSVG&&e.src!==null){a=n==="contained"?36:20;return j.jsxs("div",{className:"x1n2onr6",children:[j.jsx(c("CometImage.react"),{height:a,src:e.src,width:a,xstyle:[e.style==="circle"&&l.circle,e.style==="roundedRect"&&l.roundedRect]}),e.style!=="square"?j.jsx("div",{className:(h||(h=c("stylex")))(e.style==="circle"&&l.circle,l.inset,e.style==="roundedRect"&&l.roundedRect),style:{height:a,width:a}}):null]})}return j.jsx(c("CometIcon.react"),{color:(a=f)!=null?a:"secondary",disabled:b,icon:e,size:m})},[b,e,f,m,n]);return j.jsx("div",{className:(h||(h=c("stylex")))([l.root,(n==="contained"||n==="contained_small_icon")&&l.contained,n==="normal"&&l.normal]),id:g,children:a})}a.displayName=a.name+" [from "+f.id+"]";b=j.memo(a);g["default"]=b}),98);
__d("useMDSIconColors",["gkx","react","useCometIconColors"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo,j=c("gkx")("571"),k={"mds-accent":"var(--icon-accent-color)","mds-destructive":"var(--icon-destructive-color)","mds-inactive":"var(--icon-inactive-color)","mds-nux":"var(--icon-nux-color)","mds-selected":"var(--icon-selected-color)",primary:"var(--icon-primary-color)",secondary:"var(--icon-secondary-color)",tertiary:"var(--icon-tertiary-color)",white:"var(--icon-white-color)"},l={"mds-accent":"primaryAccent","mds-destructive":"negative","mds-inactive":"disabled","mds-nux":"tertiary","mds-selected":"primary",primary:"primary",secondary:"secondary",tertiary:"tertiary",white:"white"};function a(){var a=c("useCometIconColors")();return i(function(){var b={},c=Object.entries(a);for(var d=0;d<c.length;d++){var e=c[d],f=e[0];e=e[1];b[f]=e}f=Object.entries(k);for(e=0;e<f.length;e++){c=f[e];d=c[0];c=c[1];b[d]=c}if(!j){d=Object.entries(l);for(c=0;c<d.length;c++){f=d[c];e=f[0];f=f[1];b[e]=a[f]}}return b},[a])}g["default"]=a}),98);
__d("MWXIconStrict.react",["BaseSVGIcon.react","MWXThreadThemeColor","gkx","react","react-strict-dom","useMDSIconColors"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={backgroundEnabledMDS:{alignItems:"x6s0dn4",backgroundColor:"x1qhmfi1",borderTopStartRadius:"xzolkzo",borderTopEndRadius:"x12go9s9",borderBottomEndRadius:"x1rnf11y",borderBottomStartRadius:"xprq8jg",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"xl56j7k",$$css:!0},backgroundEnabledMDSDisabled:{backgroundColor:"xwcfey6",$$css:!0},root:{display:"x1lliihq",$$css:!0},size:function(a){return[{height:"x1jwls1v",minWidth:"x13to73x",$$css:!0},{"--height":function(a){return typeof a==="number"?a+"px":a!=null?a:"initial"}(a),"--minWidth":function(a){return typeof a==="number"?a+"px":a!=null?a:"initial"}(a)}]}};function a(a){var b=a.alt,e=a.backgroundEnabled;e=e===void 0?!1:e;var f=a.color;f=f===void 0?"primary":f;var g=a.icon;a=a.size;var h=c("useMDSIconColors")();h=f instanceof d("MWXThreadThemeColor").MWXThreadThemeColor?f.color:h[f];return e!==!0?i.jsx(c("BaseSVGIcon.react"),{alt:b,color:h,icon:g.component.component,size:a,xstyle:j.root}):i.jsx(d("react-strict-dom").html.div,{style:c("gkx")("571")?[j.backgroundEnabledMDS,j.size(a),h==="disabled"&&j.backgroundEnabledMDSDisabled]:void 0,children:i.jsx(c("BaseSVGIcon.react"),{alt:b,color:h,icon:g.originalComponent.component,size:(c("gkx")("571")?3/4:5/9)*a,xstyle:j.root})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMenuItem.react",["CometBadge.react","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","CometProfilePhoto.react","MWXIconStrict.react","MWXSvgIcon","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,b){var e=a.auxItem,f=a.icon,g=a.iconColor,h=a.iconCssSelectorId,j=a.iconSize,k=a.iconStyle;k=k===void 0?"normal":k;var l=a.image,m=a.overlayRadius;m=m===void 0?4:m;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","icon","iconColor","iconCssSelectorId","iconSize","iconStyle","image","overlayRadius"]);var n=null;if(e!=null)switch(e.type){case"text":n=i.jsx(c("TetraTextPairing.react"),{level:3,meta:e.auxText});break;case"badge":n=i.jsx(c("CometBadge.react"),{color:e.color});break;case"icon":n=e.icon instanceof d("MWXSvgIcon").MWXSvgIcon?i.jsx(c("MWXIconStrict.react"),{color:e.color,icon:e.icon,size:20}):i.jsx(c("CometIcon.react"),{color:e.color,icon:e.icon});break;case"numberedBadge":n=e.badge;break}return i.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:n,iconNode:f!=null?i.jsx(c("CometMenuItemIcon.react"),{disabled:a.disabled,icon:f,iconColor:g,iconCssSelectorId:h,iconSize:j,use:k}):l!=null?i.jsx(c("CometProfilePhoto.react"),{addOn:l.addOn,shape:l.shape,size:l.size,source:l.source}):null,isIconAnImage:f==null&&l!=null,overlayRadius:m,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometMenuItemSelectable_DEPRECATED.react",["ix","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a){return!a?null:j.jsx(c("CometIcon.react"),{color:"highlight",icon:d("fbicon")._(h("477820"),20)})}k.displayName=k.name+" [from "+f.id+"]";function a(a,b){a.aux;var d=a.disabled,e=a.icon,f=a.iconColor,g=a.iconStyle,h=a.isSelected,i=babelHelpers.objectWithoutPropertiesLoose(a,["aux","disabled","icon","iconColor","iconStyle","isSelected"]);if(e)return j.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},i,{"aria-checked":h,aux:a.aux!=null?a.aux(h,d):k(h),disabled:d,iconNode:j.jsx(c("CometMenuItemIcon.react"),{icon:e,iconColor:f,use:g}),ref:b}));else{e=a.aux!=null?a.aux(h,d):k(h);return j.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},i,{"aria-checked":h,aux:e?j.jsx("div",{className:"xz62fqu x16ldp7u",children:e}):void 0,disabled:d,ref:b}))}}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("CometTabMenu.react",["CometMenu.react","CometMenuItemSelectable_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.ariaLabelledby,d=a.id,e=a.menuItems,f=a.menuSize;a.onClose;a=a.truncate;return i.jsx(c("CometMenu.react"),{"aria-labelledby":b,id:d,size:f,truncate:a,children:e.map(function(a,b){var d=a["aria-label"],e=a["aria-labelledby"],f=a.badge,g=a.disabled,h=a.icon,j=a.label,k=a.linkProps,l=a.onHoverIn,m=a.onHoverOut,n=a.onPress,o=a.onPressIn,p=a.selected;a=a.tabRef;return i.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{"aria-label":d,"aria-labelledby":e,badge:f,disabled:g,href:(d=k==null?void 0:k.url)!=null?d:void 0,icon:h,isSelected:(e=p)!=null?e:!1,onClick:n,onHoverIn:l,onHoverOut:m,onPressIn:o,primaryText:j,ref:a,role:"menuitemradio",routeTarget:k==null?void 0:k.routeTarget,target:k==null?void 0:k.target,testid:void 0},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);