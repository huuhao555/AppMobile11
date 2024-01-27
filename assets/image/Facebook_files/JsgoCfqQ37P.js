;/*FB_PKG_DELIM*/

__d("CometEmojiDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6560020664046334"}),null);
__d("CometEmojiDataSourceQuery.facebook.graphql",["CometEmojiDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"ids"},{defaultValue:null,kind:"LocalArgument",name:"includeRecentlyUsedEmojis"}],c=[{alias:null,args:null,kind:"ScalarField",name:"codepoint",storageKey:null}],d={condition:"includeRecentlyUsedEmojis",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"RecentlyUsedEmojiCategory",kind:"LinkedField",name:"emoji_recently_used_category",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"localized_name",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RecentlyUsedEmoji",kind:"LinkedField",name:"emojis_in_category",plural:!0,selections:c,storageKey:null}],storageKey:null}]},e=[{kind:"Variable",name:"category_ids",variableName:"ids"}];c=[{alias:null,args:null,concreteType:"EmojiCategory",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,concreteType:"Emoji",kind:"LinkedField",name:"emojis_in_category",plural:!0,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometEmojiDataSourceQuery",selections:[d,{alias:null,args:e,concreteType:"EmojiCategoriesConnection",kind:"LinkedField",name:"emoji_categories",plural:!1,selections:[{kind:"Stream",selections:c}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometEmojiDataSourceQuery",selections:[d,{alias:null,args:e,concreteType:"EmojiCategoriesConnection",kind:"LinkedField",name:"emoji_categories",plural:!1,selections:[{"if":null,kind:"Stream",label:"CometEmojiDataSourceQuery$stream$nodes",selections:c}],storageKey:null}]},params:{id:b("CometEmojiDataSourceQuery_facebookRelayOperation"),metadata:{},name:"CometEmojiDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometEmojiDataSourceQuery.graphql",["cr:10825"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:10825")}),null);
__d("useCometCategoriesLocalizedNameQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6585135861532452"}),null);
__d("useCometCategoriesLocalizedNameQuery.facebook.graphql",["useCometCategoriesLocalizedNameQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:!1,kind:"LocalArgument",name:"includeRecentlyUsedEmojis"},c={defaultValue:null,kind:"LocalArgument",name:"list_id"},d={condition:"includeRecentlyUsedEmojis",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"RecentlyUsedEmojiCategory",kind:"LinkedField",name:"emoji_recently_used_category",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"localized_name",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],storageKey:null}]},e=[{kind:"Variable",name:"id",variableName:"list_id"}],f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={alias:null,args:null,concreteType:"EmojiCategoryListEmojiCategoriesConnection",kind:"LinkedField",name:"emoji_categories",plural:!1,selections:[{alias:null,args:null,concreteType:"EmojiCategory",kind:"LinkedField",name:"nodes",plural:!0,selections:[f,{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null}],storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"useCometCategoriesLocalizedNameQuery",selections:[d,{alias:null,args:e,concreteType:"EmojiCategoryList",kind:"LinkedField",name:"emoji_category_list_node",plural:!1,selections:[g],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"useCometCategoriesLocalizedNameQuery",selections:[d,{alias:null,args:e,concreteType:"EmojiCategoryList",kind:"LinkedField",name:"emoji_category_list_node",plural:!1,selections:[g,f],storageKey:null}]},params:{id:b("useCometCategoriesLocalizedNameQuery_facebookRelayOperation"),metadata:{},name:"useCometCategoriesLocalizedNameQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometCategoriesLocalizedNameQuery.graphql",["cr:11559"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:11559")}),null);
__d("EmojiUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.map(function(a){return String.fromCodePoint(a)})}f.toStringCodepoints=a}),66);
__d("CometEmojiButton.react",["CometEmoji.react","CometPressable.react","EmojiUtils","clearTimeout","react","setTimeout","stylex","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useEffect,m=b.useMemo,n=b.useRef,o=1e3,p={decreaseOpacity:{opacity:"xuzhngd",$$css:!0},image:{height:"xojvqvm",paddingTop:"xyqdw3p",textAlign:"x2b8uid",width:"x14qfxbe",$$css:!0},selected:{backgroundColor:"x1vtvx1t",borderTopStartRadius:"x1lq0und",borderTopEndRadius:"x904243",borderBottomEndRadius:"xunswzr",borderBottomStartRadius:"x1hba98",$$css:!0}};function a(a,b){var e=a.codepoints,f=a.decreaseOpacity;f=f===void 0?!1:f;var g=a.label,i=a.onClick,q=a.onLongPress,r=a.selected,s=a.size;s=s===void 0?30:s;a=a.testid;var t=n(null);a=c("useMergeRefs")(t,b);var u=n(null);l(function(){return function(){u.current!=null&&c("clearTimeout")(u.current)}},[]);var v=n(q==null?null:function(){return q(e,t)});l(function(){v.current=q==null?null:function(){return q(e,t)};return function(){v.current=null}},[t,e,q]);var w=k(function(){v.current!=null&&v.current(),u.current=null},[]);b=k(function(){u.current!=null&&c("clearTimeout")(u.current),u.current=c("setTimeout")(w,o)},[w]);var x=k(function(){u.current!=null?(c("clearTimeout")(u.current),u.current=null,i!=null&&i(e)):v.current==null&&i!=null&&i(e)},[e,i]),y=k(function(a){a.nativeEvent instanceof KeyboardEvent&&i!=null&&i(e)},[e,i]),z=m(function(){return d("EmojiUtils").toStringCodepoints(e)},[e]);return j.jsx(c("CometPressable.react"),{label:g,onPress:y,onPressIn:b,onPressOut:x,overlayRadius:9,ref:a,testid:void 0,children:j.jsx("div",{className:(h||(h=c("stylex")))(p.image,r===!0&&p.selected,f===!0&&p.decreaseOpacity),children:j.jsx(c("CometEmoji.react"),{emoji:z,size:s})})})}a.displayName=a.name+" [from "+f.id+"]";e=j.forwardRef(a);g["default"]=e}),98);
__d("CometEmojiCategories",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";b=[{icon:(a=d("fbicon"))._(h("577853"),16),id:"recent"},{icon:a._(h("642536"),16),id:"1795127124089732"},{icon:a._(h("727145"),16),id:"1117693864983467"},{icon:a._(h("607950"),16),id:"337864463246293"},{icon:a._(h("585295"),16),id:"1251900681534964"},{icon:a._(h("1210827"),16),id:"189719128099581"},{icon:a._(h("492706"),16),id:"629625430553130"},{icon:a._(h("478990"),16),id:"1642676819358192"},{icon:a._(h("652652"),16),id:"1068040353319407"}];g.ORDERED_CATEGORIES=b}),98);
__d("CometEmojiCategoryIcon.react",["TetraIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.active,d=a.category,e=a.icon,f=a.name,g=a.onClick;a=b?"blueLink":"secondary";var h=function(){return g(d)};return i.jsx("div",{className:"x6s0dn4 x78zum5 x1l1ennw xod5an3 x1emribx x1i64zmx x14vqqas",children:i.jsx(c("TetraIcon.react"),{"aria-label":f,"aria-selected":b,color:a,icon:e,onPress:h,role:"tab"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometCategoriesLocalizedName",["CometRelay","react","useCometCategoriesLocalizedNameQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useMemo,k="314195178973439";function a(a){a={includeRecentlyUsedEmojis:a,list_id:k};var c=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("useCometCategoriesLocalizedNameQuery.graphql"),a),e=(a=c.emoji_recently_used_category)==null?void 0:(a=a.localized_name)==null?void 0:a.text,f=j(function(){var a;return(a=(a=c.emoji_category_list_node)==null?void 0:(a=a.emoji_categories)==null?void 0:a.nodes)!=null?a:[]},[(a=c.emoji_category_list_node)==null?void 0:(a=a.emoji_categories)==null?void 0:a.nodes]);return j(function(){var a={};for(var b=f,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(c){if(d>=b.length)break;g=b[d++]}else{d=b.next();if(d.done)break;g=d.value}g=g;var h=g.id;g=g.localized_name;if(h==null||g==null)continue;a[h]=g}e!=null&&(a.recent=e);return a},[f,e])}g["default"]=a}),98);
__d("CometEmojiCategorySelector.react",["CometEmojiCategories","CometEmojiCategoryIcon.react","react","useCometCategoriesLocalizedName"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.activeCategory,e=a.onSelect,f=a.showRecentCategory,g=c("useCometCategoriesLocalizedName")(f);return i.jsx("div",{className:"x1qjc9v5 x1jx94hy x8cjs6t x13fuv20 x178xt8z x78zum5 x1q0g3np xl56j7k x1ba4aug",role:"tablist",children:d("CometEmojiCategories").ORDERED_CATEGORIES.map(function(a){var d=a.icon;a=a.id;if(a==="recent"&&f!==!0)return null;var h=g[a],j=b===a;return i.jsx(c("CometEmojiCategoryIcon.react"),{active:j,category:a,icon:d,name:h,onClick:e},a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEmojiGrid.react",["CometEmojiButton.react","CometFocusTable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function k(a){return a.reduce(function(a,b){b=String.fromCodePoint(b);var c=a[a.length-1];(c==null||!c.includes(b))&&a.push(b);return a},[]).join("")}function a(a,b){var e=a.blocklistedEmojis,f=a.columns,g=a.emojiCollection,h=a.emojiSize,l=a.emojiSpacing,m=a.hidden,n=a.label,o=a.onClick,p=a.onLongPress,q=a.selectedEmojis,r=a.testid,s=j(function(){if(g.length===0)return[];else if(e==null||e.size===0)return g;else{var a=[];e.forEach(function(b){b.codepoints.forEach(function(b){return a.push(b)})});return g.filter(function(b){return!b.codepoints.some(function(b){return a.includes(b)})})}},[e,g]);if(s.length===0)return null;var t={marginLeft:2,marginRight:2};l!=null&&(t.marginLeft=l,t.marginRight=l);a=[];l=Math.ceil(s.length/f);if(m!==!0)for(var u=0;u<l;u++){var v=[];m=function(a){var e=u*f+a,g=s[e];if(g!=null){var j;j=((j=r)!=null?j:"CometEmojiButton-")+g.id;v[a]=i.jsx("div",{className:"x1rg5ohu xc9qbxq xr9ek0c x14qfxbe",role:"gridcell",style:t,children:i.jsx(d("CometFocusTable.react").CometFocusCell,{children:i.jsx(c("CometEmojiButton.react"),{codepoints:g.codepoints,onClick:function(a){return o&&o(a,e)},onLongPress:function(a,b){return p&&p(a,e,b)},ref:u===0&&a===0?b:void 0,selected:q!=null&&q.includes(k(g.codepoints)),size:h,testid:void 0})})},g.id)}};for(var w=0;w<f;w++)m(w);a[u]=i.jsx("div",{className:"x1vqgdyp",role:"row",children:i.jsx(d("CometFocusTable.react").CometFocusRow,{children:v})},u)}m=l*40;return n!=null?i.jsxs("div",{"aria-label":n,"data-testid":void 0,role:"rowgroup",children:[i.jsx("div",{"aria-hidden":!0,className:"xi81zsa x1nxh6w3 x12nagc x1mnrxsn x1xmf6yo",children:n}),i.jsx("div",{style:{minHeight:m},children:a})]}):i.jsx("div",{"data-testid":void 0,children:i.jsx("div",{style:{minHeight:m},children:a})})}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(i.forwardRef(a));g["default"]=b}),98);
__d("CometEmojiGridLoading.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={grid:{display:"x78zum5",flexWrap:"x1a02dak",justifyContent:"x1nhvcw1",$$css:!0},item:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"xc9qbxq",marginTop:"xr9ek0c",marginEnd:"xfs2ol5",marginBottom:"xjpr12u",marginStart:"x12mruv9",width:"x14qfxbe",$$css:!0},label:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",height:"x1v9usgg",marginBottom:"x12nagc",marginStart:"x12mruv9",marginLeft:null,marginRight:null,marginTop:"x1gslohp",width:"x1exxlbk",$$css:!0}};function a(a){var b=a.count;b=b===void 0?20:b;a=a.hideLabel;a=a===void 0?!1:a;var d=[];for(var e=0;e<b;e++)d.push(i.jsx(c("CometGlimmer.react"),{index:0,xstyle:j.item},e));return i.jsxs(i.Fragment,{children:[a?null:i.jsx(c("CometGlimmer.react"),{index:0,xstyle:j.label}),i.jsx("div",{className:"x78zum5 x1a02dak x1nhvcw1",children:d})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEmojiVariants.react",["CometEmojiButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.anchorX,d=a.anchorY,e=a.emojiSize,f=a.onSelect;a=a.variants;b=babelHelpers["extends"]({},b,{top:d});return i.jsx("div",{className:"x1jx94hy x1rg5ohu x10l6tqk",style:b,children:a.map(function(a,b){return i.jsx("div",{className:"x1rg5ohu xr9ek0c xfs2ol5 xjpr12u x12mruv9",children:i.jsx(c("CometEmojiButton.react"),{codepoints:a,onClick:f,size:e})},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometEmojiPickerReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c;switch(b.type){case"set-category":return babelHelpers["extends"]({},a,{category:b.category});case"mark-visible":return babelHelpers["extends"]({},a,{visibleCategories:babelHelpers["extends"]({},a.visibleCategories,(c={},c[b.category]=!0,c))});case"show-variant-overlay":return babelHelpers["extends"]({},a,{overlay:{categoryIdx:b.categoryIdx,emojiIdx:b.emojiIdx,variants:b.variants,x:b.anchorX,y:b.anchorY}});case"hide-variant-overlay":return babelHelpers["extends"]({},a,{overlay:null});case"add-recently-used-emoji":return babelHelpers["extends"]({},a,{recentlyUsedEmojis:[b.emoji].concat(a.recentlyUsedEmojis).filter(function(a,c){return c===0?!0:b.emoji.id!==a.id}).slice(0,8)});default:return a}}f["default"]=a}),66);
__d("scrollElementToPosition",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=document.documentElement;d=d!=null&&"scrollBehavior"in(d==null?void 0:d.style);if(d){a.scrollTo({behavior:"smooth",left:b,top:c});return}if(a.scrollTo!=null){a.scrollTo(b,c);return}a.scrollLeft=b;a.scrollTop=c}f["default"]=a}),66);
__d("useCometEmojiPickerRecentlyUsedHooks",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;c=h||d("react");var i=c.useCallback,j=c.useMemo;function a(a,b,c){return i(function(d,e,f){if(a){var g=l(d);c({emoji:g,type:"add-recently-used-emoji"})}b(d,e,f)},[c,a,b])}function b(a,b,c){return j(function(){var d=b.recent;if(!a)return b;return d==null?b:babelHelpers["extends"]({},b,{recent:babelHelpers["extends"]({},d,{emojis:k(c,(d=d==null?void 0:d.emojis)!=null?d:[])})})},[b,c,a])}function k(a,b){return a.concat(b.map(function(a){a=a.codepoints;return l(a)})).reduce(function(a,b){b&&!a.seen[b.id]&&(a.seen[b.id]=!0,a.emojs.push(b));return a},{emojs:[],seen:{}}).emojs.slice(0,8)}function l(a){return{codepoints:a,id:a.join("_")}}g.useSelectCallbackWithUpdateRecentSection=a;g.useCometEmojiDataWithRecentSectionOverride=b;g.createEmojiFromCodpoint=l}),98);
__d("CometEmojiDataSource",["CometEmojiCategories","CometEmojiDataSourceQuery.graphql","RelayHooks","gkx","useCometEmojiPickerRecentlyUsedHooks"],(function(a,b,c,d,e,f,g){"use strict";var h,i={};function a(a){return i[a]}function e(a,e,f,g,j,k){k===void 0&&(k=!1);var l={},m=[],n=!1;for(var f=f,o=Array.isArray(f),p=0,f=o?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var q;if(o){if(p>=f.length)break;q=f[p++]}else{p=f.next();if(p.done)break;q=p.value}q=q;q in i?(n=!0,l[q]=i[q]):(l[q]=null,m.push(q))}q={unsubscribe:function(){}};m.length>0&&(q=d("RelayHooks").fetchQuery(e,h!==void 0?h:h=b("CometEmojiDataSourceQuery.graphql"),{ids:m.filter(function(a){return a!=="recent"}),includeRecentlyUsedEmojis:k},c("gkx")("10613")?{fetchPolicy:"store-or-network"}:void 0).subscribe({complete:function(){j()},next:function(b){var c,e;c=(c=(c=b.emoji_categories)==null?void 0:c.nodes)!=null?c:[];e=((e=(e=b.emoji_recently_used_category)==null?void 0:e.emojis_in_category)!=null?e:[]).map(function(a){a=a.codepoint;return d("useCometEmojiPickerRecentlyUsedHooks").createEmojiFromCodpoint(a)});b=(b=b.emoji_recently_used_category)==null?void 0:(b=b.localized_name)==null?void 0:b.text;if(e.length>0&&b!=null){e={emojis:e,id:"recent",localizedName:b};i.recent=e;l.recent=e}else a({category:d("CometEmojiCategories").ORDERED_CATEGORIES[1].id,type:"set-category"});for(b=c,e=Array.isArray(b),c=0,b=e?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(e){if(c>=b.length)break;f=b[c++]}else{c=b.next();if(c.done)break;f=c.value}f=f;var h=f.emojis_in_category,j=f.id;f=f.localized_name;if(j==null)continue;h=h.map(function(a){a=a.codepoint;return{codepoints:a,id:a.join("_")}});h={emojis:h,id:j,localizedName:f};j in i||(i[j]=h);l[j]||(l[j]=i[j])}g(babelHelpers["extends"]({},l))}}));n&&g(l);m.length<1&&j();return q}g.getCachedCategoryData=a;g.fetchCategoryData=e}),98);
__d("useCometEmojiData",["CometEmojiDataSource","CometRelay","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useEffect,k=b.useMemo,l=b.useState;function a(a,b,e){e===void 0&&(e=!1);var f=k(function(){var b={},e=[];for(var f=a,g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;e.push(i.id);b[i.id]=c("gkx")("10613")?(i=d("CometEmojiDataSource").getCachedCategoryData(i.id))!=null?i:null:null}return[b,e]},[a]),g=f[0],h=f[1];f=l(g);g=f[0];var m=f[1],n=i(function(a){m(a)},[m]),o=d("CometRelay").useRelayEnvironment();j(function(){var a=d("CometEmojiDataSource").fetchCategoryData(b,o,h,n,function(){},e);return function(){a.unsubscribe()}},[h,o,n,b,e]);return g}g["default"]=a}),98);
__d("CometEmojiPicker.react",["fbt","CometEmojiCategories","CometEmojiCategorySelector.react","CometEmojiGrid.react","CometEmojiGridLoading.react","CometEmojiVariants.react","CometFocusTable.react","CometPlaceholder.react","CometScrollableArea.react","FBEmojiUtils","KeyCommandHandler.react","cometEmojiPickerReducer","focusScopeQueries","react","scrollElementToPosition","stylex","useCometEmojiData","useCometEmojiPickerRecentlyUsedHooks","useThrottled"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useMemo,n=b.useReducer,o=b.useRef,p={container:{marginEnd:"xfs2ol5",marginLeft:null,marginRight:null,marginStart:"x12mruv9",$$css:!0},emoji:{flexBasis:"x1r8uery",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},overlayMask:{backgroundColor:"x1h0vfkc",bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},picker:{alignItems:"x1qjc9v5",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x1nhvcw1",$$css:!0},scroll:{maxHeight:"xmz0i5r",$$css:!0}},q={category:d("CometEmojiCategories").ORDERED_CATEGORIES[0].id,overlay:null,recentlyUsedEmojis:[],visibleCategories:(e={},e[d("CometEmojiCategories").ORDERED_CATEGORIES[0].id]=!0,e[d("CometEmojiCategories").ORDERED_CATEGORIES[1].id]=!0,e)},r=function(a){var b=a.key;(b==="ArrowUp"||b==="ArrowDown"||b==="ArrowLeft"||b==="ArrowRight"||b==="PageUp"||b==="PageDown"||b==="Home"||b==="End")&&a.stopPropagation()};function s(a){var b=o(!1);return function(){b.current||(a(),b.current=!0)}}function a(a){var b=a.blocklistedEmojis,e=a.categorySelector;e=e===void 0?c("CometEmojiCategorySelector.react"):e;var f=a.emojiSize,g=a.emojiSpacing,j=a.gridColumns,t=a.height,u=a.includeRecentlyUsedEmojis;u=u===void 0?!1:u;var v=a.onSelect,w=a.selectedEmojis,x=a.testid;x=a.topSection;a=a.xstyle;var y=n(c("cometEmojiPickerReducer"),q),z=y[0],A=y[1],B=m(function(){var a={};for(var b=d("CometEmojiCategories").ORDERED_CATEGORIES,c=Array.isArray(b),e=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(c){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;f=f.id;a[f]={firstItem:k.createRef(),sectionContainer:k.createRef()}}return a},[]);y=z.recentlyUsedEmojis;var C=c("useCometEmojiData")(d("CometEmojiCategories").ORDERED_CATEGORIES,A,u),D=d("useCometEmojiPickerRecentlyUsedHooks").useCometEmojiDataWithRecentSectionOverride(u,C,y),E=d("useCometEmojiPickerRecentlyUsedHooks").useSelectCallbackWithUpdateRecentSection(u,v,A),F=o(null);C=l(function(a){var b,d,e;b=(b=B[a])==null?void 0:b.sectionContainer.current;d=(d=B[a])==null?void 0:d.firstItem.current;e=(e=F.current)==null?void 0:e.getDOMNode();(b!=null||d!=null)&&e!=null&&(d!=null&&d.focus(),c("scrollElementToPosition")(e,0,(b||d).offsetTop));A({category:a,type:"set-category"})},[A,B]);var G=s(function(){for(var a=d("CometEmojiCategories").ORDERED_CATEGORIES,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(b){if(c>=a.length)break;e=a[c++]}else{c=a.next();if(c.done)break;e=c.value}e=e;A({category:e.id,type:"mark-visible"})}});y=l(function(){var a,b=null,c=Infinity;a=(a=(a=F.current)==null?void 0:(a=a.getDOMNode())==null?void 0:a.scrollTop)!=null?a:0;var d=t/2;for(var e in B){var f;f=(f=B[e])==null?void 0:f.sectionContainer.current;if(f==null)continue;f=(f=f.offsetTop)!=null?f:Infinity;(b==null||f-a<d&&f>c)&&(b=e,c=f)}b!=null&&z.category!==b&&A({category:b,type:"set-category"});G()},[t,G,B,z.category]);v=c("useThrottled")(y);var H=(y=j)!=null?y:8,I=l(function(a,b,c,e){e=e.current;if(e==null)return;var g=[a].concat(d("FBEmojiUtils").getSupportedModifierSequences(a));if(g.length>1){var h,i;h=Math.max((h=f)!=null?h:36,36)+4;i=(i=F.current)==null?void 0:i.getDOMNode();if(i!=null){var j=-2,k=-1*h;e=e;while(e!=null&&e!==i)j+=e instanceof HTMLElement?e.offsetLeft:0,k+=e instanceof HTMLElement?e.offsetTop:0,e=e instanceof HTMLElement?e.offsetParent:null;e=g.length*h;i=j+e>H*h?{right:0}:{left:j};A({anchorX:i,anchorY:k,categoryIdx:b,emojiIdx:c,type:"show-variant-overlay",variants:g})}}else E(a,b,c)},[H,A,f,E,F]),J=u&&D.recent!==null,K=m(function(){return J?d("CometEmojiCategories").ORDERED_CATEGORIES:d("CometEmojiCategories").ORDERED_CATEGORIES.filter(function(a){a=a.id;return a!=="recent"})},[J]);j=m(function(){return K.map(function(a,d){a=a.id;if(D[a]!=null){var e=D[a],h=e.emojis;e=e.localizedName;return k.jsx("div",{ref:B[a].sectionContainer,children:k.jsx(c("CometEmojiGrid.react"),{blocklistedEmojis:b,columns:H,emojiCollection:h,emojiSize:f,emojiSpacing:g,hidden:z.visibleCategories[a]!==!0,label:(h=e)!=null?h:"",onClick:function(a,b){E(a,d,b)},onLongPress:function(a,b,c){return I(a,d,b,c)},ref:B[a].firstItem,selectedEmojis:w},a)},a)}return k.jsx("div",{ref:B[a].sectionContainer,children:k.jsx(c("CometEmojiGridLoading.react"),{},a)},a)})},[b,D,w,H,f,g,I,E,B,z.visibleCategories,K]);y=l(function(){A({type:"hide-variant-overlay"})},[A]);var L=l(function(a,b,c){A({type:"hide-variant-overlay"}),E(a,b,c)},[A,E]),M=z.overlay;y=M==null?null:k.jsx("div",{className:"x1h0vfkc x1ey2m1c x9f619 xds687c x10l6tqk x17qophe x13vifvy",onClick:y,children:k.jsx(c("CometEmojiVariants.react"),{anchorX:M.x,anchorY:M.y,emojiSize:f,onSelect:function(a){return L(a,M.categoryIdx,M.emojiIdx)},variants:M.variants})});var N=z.category;return k.jsxs("div",{className:"x1qjc9v5 x78zum5 xdt5ytf x1nhvcw1","data-testid":void 0,style:{height:t},children:[k.jsx("div",{className:(i||(i=c("stylex")))(p.emoji,a),children:k.jsx(c("CometScrollableArea.react"),{horizontal:!1,onScroll:v,ref:F,xstyle:p.scroll,children:k.jsx(c("KeyCommandHandler.react"),{onKeyDown:r,children:k.jsx(d("CometFocusTable.react").CometFocusTable,{allowModifiers:!0,label:h._("__JHASH__4k1KIwNq8iH__JHASH__"),tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrapXToNextLine:!0,children:k.jsxs("div",{className:"xfs2ol5 x12mruv9",children:[x,j,y]})})})})}),k.jsx(c("CometPlaceholder.react"),{fallback:k.jsx("div",{}),children:k.createElement(e,{activeCategory:N,onSelect:C,showRecentCategory:u})})]})}a.displayName=a.name+" [from "+f.id+"]";b=k.memo(a);g["default"]=b}),98);
__d("CometEmojiPickerContainer.react",["CometEmojiPicker.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.height,d=a.includeRecentlyUsedEmojis;d=d===void 0?!1:d;var e=a.onSelect,f=a.selectedEmoji;a=a.topSection;return i.jsx("div",{className:"x1iorvi4 x5c4s84",children:i.jsx(c("CometEmojiPicker.react"),{height:(b=b)!=null?b:260,includeRecentlyUsedEmojis:d,onSelect:e,selectedEmojis:f!=null?[f]:void 0,topSection:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("cometAddEmojiToComposerForLexical",["CometLexicalEmojiNode","FBEmojiResource","Lexical"],(function(a,b,c,d,e,f,g){"use strict";function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function a(a,b,e){b.focus(function(){b.update(function(){if(typeof a==="string"){var b=d("Lexical").$createTextNode(a);d("Lexical").$insertNodes([b]);return}b=h(a);var f=a.map(function(a){return String.fromCodePoint(a)});f=c("FBEmojiResource").fromCodepoints(f);if(f==null)return;f=f.getImageURL(e);if(f==null)return;var g=b;b=d("CometLexicalEmojiNode").$createEmojiNode(b,g,f,e);d("Lexical").$insertNodes([b])})})}g["default"]=a}),98);
__d("CometUFIEmojiPickerPopoverForLexical.react",["ARIA_LABEL_PLACEHOLDER_FIXME","CometEmojiPickerContainer.react","CometLexicalEmojiNode","CometPopover.react","CometUFIComposerPluginsContext","cometAddEmojiToComposerForLexical","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useContext;function a(a){var b=a.onClose;a=a.pluginProps;var e=k(c("CometUFIComposerPluginsContext")),f=e.isComposerFocused,g=a.editor;e=j(function(a){f||b(),g!=null&&c("cometAddEmojiToComposerForLexical")(a,g,d("CometLexicalEmojiNode").UFI_EMOJI_SIZE)},[g,f,b]);return i.jsx(c("CometPopover.react"),{"aria-label":c("ARIA_LABEL_PLACEHOLDER_FIXME"),withArrow:!0,children:i.jsx(c("CometEmojiPickerContainer.react"),{height:320,includeRecentlyUsedEmojis:!0,onSelect:e})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);