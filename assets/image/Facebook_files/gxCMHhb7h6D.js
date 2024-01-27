;/*FB_PKG_DELIM*/

__d("MWXButton.react",["cr:1329","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){return i.jsx(b("cr:1329"),babelHelpers["extends"]({ref:c},a))}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWXColumnItem.react",["cr:1350","cr:2004","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){if(b("cr:1350")!=null)return i.jsx(b("cr:1350"),babelHelpers["extends"]({},a,{ref:c}));return b("cr:2004")!=null?i.jsx(b("cr:2004"),babelHelpers["extends"]({},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWXComposerBanner.react",["MWLSThreadDisplayContext","MWXButton.react","MWXColumn.react","MWXColumnItem.react","MWXRow.react","MWXRowItem.react","MWXTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={banner:{paddingBottom:"xjkvuk6",$$css:!0},block:{paddingBottom:"x1l90r2v",$$css:!0},button:{maxWidth:"x1u4bug8",$$css:!0},container:{alignSelf:"xkh2ocl",backgroundColor:"x57kliw",borderTopColor:"x1exxf4d",borderTopStyle:"x13fuv20",borderTopWidth:"x178xt8z",$$css:!0}};b=i.forwardRef(a);function a(a,b){var e=a.bodyText,f=a.buttons,g=a.headerText,h=a.testid;h=a.variant;a=h===void 0?"block":h;h=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();var k=h==="ChatTab";return i.jsxs(c("MWXColumn.react"),{paddingHorizontal:16,paddingVertical:16,ref:b,spacing:20,testid:void 0,xstyle:[j.container,a==="banner"&&j.banner,a==="block"&&j.block],children:[g!=null||e!=null?i.jsx(c("MWXColumnItem.react"),{children:i.jsx(c("MWXRow.react"),{paddingHorizontal:0,paddingVertical:0,verticalAlign:"center",children:i.jsx(c("MWXRowItem.react"),{expanding:!0,children:i.jsx(c("MWXTextPairing.react"),{headline:g,level:4,meta:e,textAlign:"center"})})})}):null,f?i.jsx(c("MWXRow.react"),{align:"center",spacing:8,children:f.map(function(a,b){return i.jsx(c("MWXRowItem.react"),{expanding:!0,xstyle:j.button,children:i.jsx(c("MWXButton.react"),babelHelpers["extends"]({padding:k?"normal":"wide",type:"secondary"},a))},b)})}):null]})}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("MWBaseTheme",[],(function(a,b,c,d,e,f){"use strict";a={};b={};c={dark:b,light:a,type:"VARIABLES"};f.empty=c}),66);
__d("MWSeparatorContainer.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var b=a.beforeContent,d=a.children,e=a.separator;a=a.xstyle;d=j.Children.toArray(d).filter(Boolean);return d.length===0?null:j.jsxs(j.Fragment,{children:[(b=b)!=null?b:null,j.jsx("div",{className:(h||(h=c("stylex")))(a),children:d.map(function(a,b){return j.jsxs(j.Fragment,{children:[b!==0&&e,a]},"item-"+b)})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWCMBulkInviteDialog.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{}},root:c("JSResourceForInteraction")("MWCMBulkInviteDialog.react").__setRef("MWCMBulkInviteDialog.entrypoint")};g["default"]=a}),98);
__d("MWGetChatTabOpenQPLEventTrace",["I64","InteractionTracing","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b){var e=c("qpl")._(30609204,"1682"),f=c("qpl")._(30605380,"18"),g=c("InteractionTracing").getPendingInteractions();for(var g=g,i=Array.isArray(g),j=0,g=i?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k,l;if(i){if(j>=g.length)break;l=g[j++]}else{j=g.next();if(j.done)break;l=j.value}l=l;if(((k=l.getTrace())==null?void 0:k.qplEvent)===e||((k=l.getTrace())==null?void 0:k.qplEvent)===f){((k=l.getTrace())==null?void 0:(k=k.annotations.string)==null?void 0:k.thread_id)===(h||(h=d("I64"))).to_string(a)&&b(l)}}}g["default"]=a}),98);
__d("MWBlockedComposerLogging",["$InternalEnum","Int64Hooks","MWGetChatTabOpenQPLEventTrace","MWLSThreadDisplayContext","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("$InternalEnum")({USER_BLOCKED_CANNOT_MESSAGE:"user_blocked_cannot_message",USER_BLOCKED_CANNOT_REPLY:"user_blocked_cannot_reply",USER_RESTRICTED:"user_restricted",GAMING_GAME_BOT:"gaming_game_bot",GAMING_GET_STARTED_CTA:"gaming_get_started_cta",FEATURE_LIMITED_TO_READONLY:"feature_limited_to_readonly",PAGE_THREAD_DISABLED:"page_thread_disabled",USER_BLOCKED:"user_blocked",USER_UNREACHABLE:"user_unreachable",ARMADILLO_THREAD_ALREADY_CUTOVER:"thread_already_cutover",ARMADILLO_GROUP_THREAD_CUTOVER:"cutover_group_thread",ARMADILLO_DEFAULT_E2EE_ONE_TO_ONE_BLOCK:"default_e2ee_one_to_one_block",ARMADILLO_RECEIVER_NON_ADDRESSABLE_ON_WA:"receiver_non_addressable_on_wa",ARMADILLO_DUAL_THREAD_CUTOVER:"dual_thread_cutover",NOT_BLOCKED:"not_blocked"});function a(a,b){var e=d("MWLSThreadDisplayContext").useMWLSThreadDisplayContext();d("Int64Hooks").useEffectInt64(function(){if(a==null)return;c("MWGetChatTabOpenQPLEventTrace")(a,function(a){if(b===i.NOT_BLOCKED){var d,e=a.getTrace();d=e==null?void 0:(d=e.annotations.string)==null?void 0:d.previousBlockingReason;e=e==null?void 0:e.markerPoints.blocked_composer;var f=(h||(h=c("performanceNow")))();e=e==null?void 0:e.timestamp;d!=null&&a.addAnnotation("prevBlockingReason",d);a.addSubspan("secure_composer_visible","AppTiming",(d=e)!=null?d:f,f)}else a.addAnnotation("composerBlockingReason",b),a.addMarkerPoint("blocked_composer","AppTiming",(h||(h=c("performanceNow")))(),{composerBlockingReason:b})})},[e,b,a])}g.ComposerBlockingReason=i;g.useLogMWBlockedComposerReason=a}),98);
__d("EmojiFormat.bs",[],(function(a,b,c,d,e,f){"use strict";function g(a){return a.split("_").map(function(a){return parseInt(a,16)})}function a(a){return a.map(function(a){return a.toString(16)}).join("_")}function h(a){return a.map(function(a){return String.fromCodePoint(a)}).join("")}function b(a){return h(g(a))}f.codeStringToCodeArray=g;f.codeArrayToCodeString=a;f.codeArrayToUnicode=h;f.codeStringToUnicode=b}),66);
__d("LSEmojiSetsType",[],(function(a,b,c,d,e,f){a=Object.freeze({USER_GENERATED:0,RECENTLY_USED:1});f["default"]=a}),66);
__d("MWChatMessengerReactionsUtils",["EmojiFormat.bs","I64","LSEmojiSetsType","LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=[{categoryIdx:(h||(h=d("I64"))).of_string("6"),emoji:"\u2764",emojiIdx:h.zero,sortKey:h.zero,type_:(i||(i=d("LSIntEnum"))).ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\ude06",emojiIdx:h.of_string("4"),sortKey:h.one,type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\ude2e",emojiIdx:h.of_string("83"),sortKey:h.of_string("2"),type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\ude22",emojiIdx:h.of_string("48"),sortKey:h.of_string("3"),type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\ude20",emojiIdx:h.of_string("51"),sortKey:h.of_string("4"),type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\udc4d",emojiIdx:h.of_string("130"),sortKey:h.of_string("5"),type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)},{categoryIdx:h.zero,emoji:"\ud83d\udc4e",emojiIdx:h.of_string("131"),sortKey:h.of_string("6"),type_:i.ofNumber(c("LSEmojiSetsType").USER_GENERATED)}];e=b.slice(0,6);var j=d("EmojiFormat.bs").codeArrayToUnicode([10084,65039]),k=d("EmojiFormat.bs").codeArrayToUnicode([10084]);function a(a){if(a===j)return!0;else return a===k}f=6;g.defaultStaticReactions=b;g.defaultCustomizableReactions=e;g.heartType1=j;g.heartType2=k;g.isHeart=a;g.cUSTOM_REACTIONS_NUM=f}),98);
__d("MWChatReactionEmoji",["cr:4707"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:4707")}),98);
__d("MWChatReactionsUtils",["MetaConfig","cr:3890"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("MetaConfig")._("58");return new Set(a.split(",").map(function(a){return{codepoints:[a.codePointAt(0)],id:a}}))}g.cUSTOM_REACTIONS_NUM=(d=b("cr:3890")).cUSTOM_REACTIONS_NUM;g.defaultStaticReactions=d.defaultStaticReactions;g.defaultCustomizableReactions=d.defaultCustomizableReactions;g.heartType1=d.heartType1;g.heartType2=d.heartType2;g.isHeart=d.isHeart;g.getHarmfulEmojisForBroadcastChannels=a}),98);
__d("MWMessageTableFocusTable.react",["fbt","CometKeys","FocusTable.react","emptyFunction","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i;i||d("react");var j="messages_table";a=function(a,b,c){return c.getAttribute("data-scope")===j};b=d("FocusTable.react").createFocusTable(a);e={key:c("CometKeys").UP};f={key:c("CometKeys").DOWN};d={key:c("CometKeys").LEFT};var k={key:c("CometKeys").RIGHT};e=[{command:e,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:c("emptyFunction")},{command:f,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:c("emptyFunction")},{command:d,description:h._("__JHASH__6tFY25IlnV4__JHASH__"),handler:c("emptyFunction")},{command:k,description:h._("__JHASH__HYvhkJNYo2M__JHASH__"),handler:c("emptyFunction")}];g.scopeID=j;g.scopeQuery=a;g.FocusTable=b;g.commandConfigs=e}),98);
__d("MWMessageCellFocusTable.react",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusTable.react","MWMessageTableFocusTable.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");b=d("FocusTable.react").createFocusTable(d("focusScopeQueries").tabbableScopeQuery);var k={key:c("CometKeys").ESCAPE},l={key:c("CometKeys").ENTER},m={key:c("CometKeys").SPACE},n=h._("__JHASH__dr5LK8JTLfs__JHASH__"),o=h._("__JHASH__NgBmedKphX2__JHASH__");function a(a){var b=a.children,e=a.onEnter,f=a.onEscape;a=a.onSpace;var g=[];f!=null&&g.push({command:k,description:n,handler:f});e!=null&&g.push({command:l,description:o,handler:e});a!=null&&g.push({command:m,description:o,handler:a});return j.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:d("MWMessageTableFocusTable.react").commandConfigs.concat(g),xstyle:!1,children:b})}a.displayName=a.name+" [from "+f.id+"]";e=a;g.FocusTable=b;g.keyCommands=e}),98);
__d("LSPresenceStatus",[],(function(a,b,c,d,e,f){a=Object.freeze({OFFLINE:1,ACTIVE:2});f["default"]=a}),66);
__d("MWPMessageListColumn.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={centered:{alignItems:"x6s0dn4",$$css:!0},grow:{flexGrow:"x1iyjqo2",$$css:!0},makeSpaceForActions:{maxWidth:"x1r145dm",$$css:!0},paint:{backgroundColor:"x1eb86dx",$$css:!0},profile:{paddingEnd:"x1sxyh0",paddingLeft:null,paddingRight:null,paddingStart:"x1nvil2r",$$css:!0},root:{alignItems:"x1h91t0o",alignSelf:"xkh2ocl",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x13a6bvl",maxWidth:"x193iq5w",$$css:!0},selfCentered:{alignSelf:"xamitd3",$$css:!0},shrinkwrap:{flexGrow:"x1c4vz4f",$$css:!0},spacer:{flexBasis:"x1r8uery",flexGrow:"x1iyjqo2",$$css:!0},vr:{backgroundColor:"x1eb86dx",width:"xh8yej3",$$css:!0},withGutters:{paddingEnd:"xe53cfu",paddingLeft:null,paddingRight:null,paddingStart:"xrgni87",$$css:!0}};function l(a){var b=a.centered,d=a.children,e=a.grow,f=a.makeSpaceForActions,g=a.paint,i=a.profile;a.rounded;var l=a.selfCentered,m=a.shrinkwrap;a=a.withGutters;return j.jsx("div",{className:(h||(h=c("stylex")))(k.root,e===!0?k.grow:!1,m===!0?k.shrinkwrap:!1,g===!0?k.paint:!1,i===!0?k.profile:!1,a===!0?k.withGutters:!1,f===!0?k.makeSpaceForActions:!1,b===!0?k.centered:!1,l===!0?k.selfCentered:!1),role:"none",children:d})}l.displayName=l.name+" [from "+f.id+"]";function a(a){var b=a.children,c=a.grow;a=a.shrinkwrap;return j.jsx(l,{grow:c!=null?c:!1,paint:!0,shrinkwrap:a!=null?a:!1,withGutters:!0,children:b})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.children;a=a.selfCentered;return j.jsx(l,{paint:!0,profile:!0,selfCentered:a!=null?a:!1,shrinkwrap:!0,children:b})}b.displayName=b.name+" [from "+f.id+"]";function e(a){var b=a.centered,c=a.children;a=a.paint;return j.jsx(l,{centered:b!=null?b:!1,paint:a!=null?a:!0,shrinkwrap:!0,children:c})}e.displayName=e.name+" [from "+f.id+"]";function m(a){a=a.children;return j.jsx(l,{grow:!0,paint:!0,children:a})}m.displayName=m.name+" [from "+f.id+"]";function n(a){var b=a.children,c=a.makeSpaceForActions;a=a.paint;return j.jsx(l,{makeSpaceForActions:c,paint:a,children:b})}n.displayName=n.name+" [from "+f.id+"]";function o(){return j.jsx("div",{className:"x1r8uery x1iyjqo2",role:"none"})}o.displayName=o.name+" [from "+f.id+"]";function p(a){a=a.height;return j.jsx("div",{className:"x1eb86dx xh8yej3",role:"none",style:{height:""+a+"px"}})}p.displayName=p.name+" [from "+f.id+"]";g.MWPMessageListColumnWithGutters=a;g.MWPMessageListColumnProfile=b;g.MWPMessageListColumnShrinkwrap=e;g.MWPMessageListColumnGrow=m;g.MWPMessageListColumnBubble=n;g.MWPMessageListColumnHorizontalSpacer=o;g.MWPMessageListColumnVerticalRhythm=p}),98);
__d("useMWPEditMessageDeemphasizer",["MAWEditMessageContext.react","gkx","react","useMWPThreadTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext,j={deemphasize:{opacity:"x197sbye",$$css:!0}};function a(a){var b=i(d("MAWEditMessageContext.react").Context);b=b.editMessageData;var e=c("useMWPThreadTheme")();e=e.threadTheme;e=e.backgroundUrl!=null&&c("gkx")("1969")&&(b==null?void 0:b.messageId)!=null&&(b==null?void 0:b.messageId)!==a;return e?j.deemphasize:null}g["default"]=a}),98);
__d("MWV2MessageRowSimple.react",["FocusWithinHandler.react","MWEditMessageOverlay.react","MWMessageTableFocusTable.react","react","stylex","useMWPEditMessageDeemphasizer"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useEffect,l=b.useRef,m={row:{position:"x1n2onr6",$$css:!0},rowFocusVisible:{zIndex:"x1vjfegm",$$css:!0}};function a(a){var b=a.children,e=a.domElementRef;a=a.focusCellOnRender;var f=a===void 0?!1:a;a=c("useMWPEditMessageDeemphasizer")();var g=l(null);k(function(){if(f){var a;(a=g.current)==null?void 0:a.focus();(a=g.current)==null?void 0:a.scrollIntoView()}},[f]);return j.jsx(d("MWMessageTableFocusTable.react").FocusTable[1],{children:j.jsx("div",{className:(h||(h=c("stylex")))(a),ref:e,role:"row",children:j.jsx(d("MWMessageTableFocusTable.react").FocusTable[2],{children:j.jsx(c("FocusWithinHandler.react"),{children:function(a,e){return j.jsxs("div",{className:(h||(h=c("stylex")))(m.row,e?m.rowFocusVisible:!1),"data-release-focus-from":"CLICK","data-scope":d("MWMessageTableFocusTable.react").scopeID,ref:g,role:"gridcell",tabIndex:0,children:[b,j.jsx(c("MWEditMessageOverlay.react"),{})]})}})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("xmaLayouts",[],(function(a,b,c,d,e,f){"use strict";a={DEFAULT:"default",UNIFIED_LAYOUT:"unifiedLayout"};f.XMA_LAYOUTS=a}),66);
__d("MDSSolidMessageBubble.react",["XPlatReactEnvironment","react","react-strict-dom","xmaLayouts"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=d("XPlatReactEnvironment").isWeb(),k={precedes_xma:{borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",boxSizing:"x9f619",maxWidth:"xw5ewwj",width:"xh8yej3",$$css:!0},precedes_xma_web:{maxWidth:"x16it46q",$$css:!0}},l={bubble:{borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",color:"x14ctfv",maxWidth:"x1okitfd",outline:"x1k4qllp",overflowX:"x6ikm8r",overflowY:"x10wlt62",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",paddingStart:"x1ye3gou",paddingLeft:null,paddingRight:null,paddingEnd:"xn6708d",position:"x1n2onr6",zIndex:"x1vjfegm",$$css:!0},bubbleWeb:{overflowWrap:"x1mzt3pk",wordBreak:"x13faqbe",$$css:!0},clip:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},reply:{outline:"x1ucz5p",$$css:!0}},m={background:{backgroundColor:"x1xr0vuk",$$css:!0},connect_bot:{borderBottomStartRadius:"x10y3i5r",$$css:!0},connect_top:{borderTopStartRadius:"x1lcm9me",$$css:!0}},n={background:{backgroundColor:"x11jlvup",$$css:!0},connect_bot:{borderBottomEndRadius:"xrt01vj",$$css:!0},connect_top:{borderTopEndRadius:"x1yr5g0i",$$css:!0}};function a(a){var b=a.children,c=a.connectBottom,e=a.connectTop,f=a.outgoing,g=a.xmaLayout;g=g===void 0?d("xmaLayouts").XMA_LAYOUTS.DEFAULT:g;var h=a.style,o=a.precedesXMA;a=a.variant;g=g!==d("xmaLayouts").XMA_LAYOUTS.UNIFIED_LAYOUT&&o===!0;o=f?n:m;return i.jsx(d("react-strict-dom").html.div,{style:[l.clip],children:i.jsx(d("react-strict-dom").html.div,{"data-testid":void 0,role:"none",style:[l.bubble,j&&l.bubbleWeb,g&&k.precedes_xma,g&&j&&k.precedes_xma_web,e&&o.connect_top,c&&!g&&o.connect_bot,o.background,a==="reply"&&l.reply,h],children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWXSolidMessageBubble.react",["MDSSolidMessageBubble.react"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("MDSSolidMessageBubble.react")}),98);
__d("MWPTypingIndicators.react",["fbt","BaseTheme.react","CometScreenReaderText.react","I64","LSIntEnum","LSPresenceStatus","MWBaseTheme","MWChatTypingIndicator.react","MWPMessageListColumn.react","MWV2MessageRowSimple.react","MWXSolidMessageBubble.react","ReQL","ReQLSuspense","ServerTime","TetraOverlappingFacepile.react","clearTimeout","getLSMediaContactProfilePictureUrl","isEmpty","react","setTimeout","stylex","useReStore","withCometPlaceholder"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l,m,n,o=n||(n=d("react"));e=n;var p=e.useEffect,q=e.useMemo,r=e.useState,s={accessibilityText:{borderBottomColor:"xnezbuk",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},root:{alignItems:"xuk3077",display:"x78zum5",flexShrink:"x2lah0s",paddingBottom:"xjkvuk6",paddingTop:"x1nn3v0j",$$css:!0}};function t(a,b){a=a==null?void 0:a.nickname;return a!=null?a:(a=b.firstName)!=null?a:b.name}function u(a,b){b===void 0&&(b=!1);var e=(i||(i=c("useReStore")))(),g=d("ReQLSuspense").useArray(function(){return d("ReQL").fromTableAscending(e.table("typing_indicator")).getKeyRange(a).filter(function(a){return d("ServerTime").getMillis()<(l||(l=d("I64"))).to_float(a.expirationTimestampMs)}).map(function(g){var h=d("ReQLSuspense").first(d("ReQL").fromTableAscending(e.table("presence_states")).getKeyRange(g.senderId),f.id+":106");if(!b||h!=null&&(l||(l=d("I64"))).equal(h.status,(m||(m=d("LSIntEnum"))).ofNumber(c("LSPresenceStatus").ACTIVE))){h=d("ReQLSuspense").first(d("ReQL").fromTableAscending(e.table("participants")).getKeyRange(a,g.senderId),f.id+":122");var i=d("ReQLSuspense").first(d("ReQL").fromTableAscending(e.table("contacts")).getKeyRange(g.senderId),f.id+":129");if(i!=null)return[h,i,g]}return}).filter(Boolean).take(3)},[e,a,b],f.id+":95");return g.filter(Boolean)}function v(a){return q(function(){if((j||(j=c("isEmpty")))(a))return"";var b=a[0],d=b[0],e=b[1];b[2];b=a.slice(1);return(j||(j=c("isEmpty")))(b)?h._("__JHASH__Tbm_Qb_Y-B5__JHASH__",[h._param("The participants name",t(d,e))]):h._("__JHASH__YLfbVFP1cLb__JHASH__")},[a])}function a(a){var b=a.length>0,e=b?a.reduce(function(a,b){b[0];b[1];b=b[2];return Math.max(a,(l||(l=d("I64"))).to_float(b.expirationTimestampMs))},0):0;a=r(e>d("ServerTime").getMillis());var f=a[0],g=a[1];p(function(){if(b){g(e>d("ServerTime").getMillis());var a=e-d("ServerTime").getMillis(),f=c("setTimeout")(function(){return g(!1)},a);return function(){c("clearTimeout")(f)}}},[e,g,b]);return b&&f}function w(a){var b=a.containerStyle,e=a.messageBubbleStyle,f=a.threadType;a=a.typingParticipants;var g=a.reduce(function(a,b){b[0];b[1];b=b[2];return Math.max(a,(l||(l=d("I64"))).to_float(b.expirationTimestampMs))},0),h=r(function(){return g>d("ServerTime").getMillis()}),i=h[0],j=h[1];p(function(){j(function(){return g>d("ServerTime").getMillis()});var a=g-d("ServerTime").getMillis(),b=c("setTimeout")(function(){return j(!1)},a);return function(){c("clearTimeout")(b)}},[g,j]);if(i)return o.jsxs("div",{"aria-hidden":!0,className:(k||(k=c("stylex")))(s.root,b),children:[o.jsx(d("MWPMessageListColumn.react").MWPMessageListColumnProfile,{selfCentered:!0,children:o.jsx(c("TetraOverlappingFacepile.react"),{items:a.map(function(a){a[0];var b=a[1];a[2];return{source:{uri:c("getLSMediaContactProfilePictureUrl")(b)}}}),size:28,withWrapper:!1})}),o.jsx(c("MWXSolidMessageBubble.react"),{connectBottom:!1,connectTop:!1,outgoing:!1,precedesXMA:!1,style:e,children:o.jsx(c("MWChatTypingIndicator.react"),{threadType:f})})]});else return null}w.displayName=w.name+" [from "+f.id+"]";function b(a){var b=a.checkPresenceSettings;b=b===void 0?!1:b;var e=a.containerStyle,f=a.messageBubbleStyle,g=a.theme,h=a.threadKey;a=a.threadType;f=(f=f)!=null?f:{backgroundColor:"var(--wash)"};g=g||d("MWBaseTheme").empty;h=u(h,b);b=v(h);return h.length>0?o.jsx(c("BaseTheme.react"),{config:g,children:o.jsx(c("MWV2MessageRowSimple.react"),{children:o.jsxs(d("MWPMessageListColumn.react").MWPMessageListColumnGrow,{children:[o.jsx("div",{"aria-live":"polite",className:"xnezbuk x1q0q8m5 xso031l",children:o.jsx(c("CometScreenReaderText.react"),{text:b})}),o.jsx(w,{containerStyle:e,messageBubbleStyle:f,threadType:a,typingParticipants:h})]})})}):null}b.displayName=b.name+" [from "+f.id+"]";e=d("withCometPlaceholder").withCometPlaceholder(b);g.useTypingParticipants=u;g.useAccessibilityText=v;g.useShouldShowTypingIndicator=a;g.MWPTypingIndicators=e}),98);
__d("MWMessageRequestSharedTexts.react",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return h._("__JHASH__U0QsQTXo_Q6__JHASH__",[h._param("FBFullName",a)])}function b(a){return h._("__JHASH__JiGe47KEv0o__JHASH__",[h._param("FBFullName",a)])}function c(a){return h._("__JHASH__Wrmwnynng2F__JHASH__",[h._param("name",a)])}function d(a){return h._("__JHASH__9ycmorSoeEo__JHASH__",[h._param("FBShortName",a)])}function e(){return h._("__JHASH__tRheqFvQPs3__JHASH__")}function f(){return h._("__JHASH__DXrX-aIvzqd__JHASH__")}g.getFBUserInfoTextMessage=a;g.getFBUserInfoTextMessageForMSplit=b;g.getDefaultInfoTextFooter=c;g.getDeclineUserDialogText=d;g.getMessageRequestHeaderInfoText=e;g.getMessageRequestHeaderTitleText=f}),98);
__d("MWContactDetails",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(a!=null)return a.name}function b(a){if(a==null)return;var b=a.firstName;if(b!=null)return b;else return a.name}function c(a){if(a!=null)return a.secondaryName}f.getName=a;f.getShortName=b;f.getSecondaryName=c}),66);
__d("MWGetLSThreadReportingTokenFromThread",["I64","LSMessagingThreadTypeUtil","LSThreadBitOffset"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=d("LSThreadBitOffset").has(17,a);if(b)return d("LSMessagingThreadTypeUtil").isSecure(a.threadType)?window.btoa("message_thread:encrypted"):window.btoa("message_thread:"+(h||(h=d("I64"))).to_string(a.threadKey))}g["default"]=a}),98);
__d("MWLSGroupMembershipDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24611402268507092"}),null);
__d("useMWLSGroupMembershipMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24535998679380437"}),null);
__d("LSContactGenderToGenderConst",["GenderConst","I64","LSContactGender","LSIntEnum"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a){if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").FEMALE)))return c("GenderConst").FEMALE_SINGULAR;else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").MALE)))return c("GenderConst").MALE_SINGULAR;else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(c("LSContactGender").NEUTER)))return c("GenderConst").NEUTER_SINGULAR;else return c("GenderConst").NOT_A_PERSON}g["default"]=a}),98);
__d("MWXButtonImpl.react",["cr:2625","cr:2851","cr:5023","cr:5028","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){var d=a.icon,e=a.loading,f=a.size,g=a.type;a=babelHelpers.objectWithoutPropertiesLoose(a,["icon","loading","size","type"]);if(b("cr:2851")){var h=f===36;return i.jsx(b("cr:2851"),babelHelpers["extends"]({addOnPrimary:e===!0&&b("cr:5023")?i.jsx(b("cr:5023"),{color:"disabled",size:h?20:16}):void 0,icon:d==null?void 0:d.component,ref:c,size:h?"large":"medium",type:g==="destructive"?"fdsOverride_negative":g},a))}return b("cr:2625")?i.jsx(b("cr:2625"),babelHelpers["extends"]({addOnStart:e===!0&&b("cr:5028")?i.jsx(b("cr:5028"),{color:"grey",size:24}):void 0,icon:d==null?void 0:d.originalComponent,ref:c,size:f,type:g},a)):null}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWXIconForListCell.react",["MWXIconStrict.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j=c("gkx")("571")?16:20,k=c("gkx")("571")?28:36;function a(a){var b=a.color,d=a.hasBackground;d=d===void 0?!0:d;var e=a.icon;a=a.size;a=a===void 0?"medium":a;var f;a==="medium"?f=d?k:j:(a,f=d?36:20);return i.jsx(c("MWXIconStrict.react"),{backgroundEnabled:d,color:b,icon:e,size:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWXListCell.react",["cr:2201","cr:617","react","xplatToDOMRef"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,c){var e=a.addOnBottom,f=a.addOnEnd,g=a.addOnStart,h=a.content,j=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["addOnBottom","addOnEnd","addOnStart","content","size"]);if(b("cr:617")!=null)return i.jsx(b("cr:617"),babelHelpers["extends"]({addOnBottom:e,addOnEnd:f,addOnStart:g,addOnStartMarginTop:0,content:h,contentPaddingHorizontal:8,level:4,paddingVertical:8},a,{ref:c}));if(b("cr:2201")!=null){return i.jsx(b("cr:2201"),babelHelpers["extends"]({addOnBottom:e,addOnEnd:f,addOnStart:g,content:h,size:(e=j)!=null?e:"medium"},a,{ref:d("xplatToDOMRef").xplatToDOMRef(c)}))}return null}a.displayName=a.name+" [from "+f.id+"]";c=i.forwardRef(a);g["default"]=c}),98);
__d("MWXProfilePhoto.react",["CometProfilePhoto.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,b){return i.jsx(c("CometProfilePhoto.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("MWDialogContentTypeValues",["gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("gkx")("571")?4:3;b=c("gkx")("571")?"headlineEmphasized4":"headlineEmphasized2";d=c("gkx")("571")?"body4":"body3";e=c("gkx")("571")?"bodyLink4":"bodyLink3";f=c("gkx")("571")?"meta4":"meta3";g.textPairingLevel=a;g.textHeadlineType=b;g.textBodyType=d;g.textBodyLinkType=e;g.textMetaType=f}),98);
__d("MWDialogTextPairing.react",["MWDialogContentTypeValues","MWXTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("MWXTextPairing.react"),babelHelpers["extends"]({},a,{level:d("MWDialogContentTypeValues").textPairingLevel}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MWGroupMembershipListItem",["I64","MessagingSpecialThreadRole","MessagingSpecialThreadRoleBitOffset"],(function(a,b,c,d,e,f,g){"use strict";var h,i={BroadcastChannelParticipant:"broadcastChannelParticipantType",CommunityMember:"communityMemberType",ParticipantAndContact:"participantAndContactType",ServerSearchResult:"serverSearchResultType"};function a(a){if(a.type===i.ParticipantAndContact)return a.participant.isAdmin;if(a.type===i.CommunityMember)return a.communityMember.isAdmin;return a.type===i.BroadcastChannelParticipant?a.participant.isAdmin:!1}function b(a){if(a.type===i.ParticipantAndContact)return a.participant.isModerator;return a.type===i.CommunityMember?a.communityMember.isModerator:!1}function e(a){return a.type===i.CommunityMember?d("MessagingSpecialThreadRoleBitOffset").has(c("MessagingSpecialThreadRole").CHAT_HOST,a.communityMember):!1}function f(a){if(a.type===i.ParticipantAndContact)return a.contact.id;if(a.type===i.CommunityMember)return a.communityMember.contactId;return a.type===i.BroadcastChannelParticipant?a.participant.contactId:(h||(h=d("I64"))).of_string(a.serverSearchResult.resultId)}g.MWGroupMembershipMemberTypes=i;g.isAdmin=a;g.isModerator=b;g.isHost=e;g.contactId=f}),98);
__d("MessageRequestsLog",["I64","coerceMessagingThreadTypeToLSThreadType","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i=c("requireDeferred"))("MessageRequestsBulkActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),k=i("MessageRequestsBulkActionEditFalcoEvent").__setRef("MessageRequestsLog"),l=i("MessageRequestsBulkActionTappedFalcoEvent").__setRef("MessageRequestsLog"),m=i("MessageRequestsInfoBannerShownFalcoEvent").__setRef("MessageRequestsLog"),n=i("MessageRequestsThreadActionConfirmedFalcoEvent").__setRef("MessageRequestsLog"),o=i("MessageRequestsThreadActionTappedFalcoEvent").__setRef("MessageRequestsLog"),p=i("MessageRequestsThreadDenialOptionsTappedFalcoEvent").__setRef("MessageRequestsLog"),q=i("MessageRequestsViewThreadlistFalcoEvent").__setRef("MessageRequestsLog");function r(a){switch(a.folderName){case"pending":return-1;case"other":return-2;case"spam":return-3;case"inbox":return 0}}function a(a,b,e){m.onReady(function(f){f.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:e,other_user_id:b,request_id:void 0,thread_folder:r(a),thread_id:e!=null?e:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function b(a,b){p.onReady(function(e){e.log(function(){return{action:0,extra_data_map:void 0,group_thread_id:void 0,other_user_id:b,request_id:void 0,thread_folder:r(a),thread_id:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function e(a,b,e,f){o.onReady(function(g){g.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:f,other_user_id:e,request_id:void 0,thread_folder:r(a),thread_id:f!=null?f:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function f(a,b,e,f){n.onReady(function(g){g.log(function(){return{action:b,extra_data_map:void 0,group_thread_id:f,other_user_id:e,request_id:void 0,thread_folder:r(a),thread_id:f!=null?f:(h||(h=d("I64"))).to_string(a.threadKey),thread_type:c("coerceMessagingThreadTypeToLSThreadType")(a.threadType)}})})}function s(a,b){q.onReady(function(c){c.log(function(){return{action:0,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:b,request_id:void 0}})})}function t(a,b,c,d,e){l.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function u(a,b,c,d,e){j.onReady(function(f){f.log(function(){return{action:d,actioned_thread_count:b.toString(),actioned_thread_ids:void 0,actioned_unread_thread_count:c.toString(),entry_point:a,folder:e,request_id:void 0}})})}function v(a,b,c){k.onReady(function(d){d.log(function(){return{action:b,actioned_thread_count:"0",actioned_thread_ids:void 0,actioned_unread_thread_count:"0",entry_point:a,folder:c,request_id:void 0}})})}g.logMessageRequestInfoShown=a;g.logDenialOptionsTapped=b;g.logActionTapped=e;g.logActionConfirmed=f;g.logMessageRequestsView=s;g.logMessageRequestsBulkActionTapped=t;g.logMessageRequestsBulkActionConfirmed=u;g.logMessageRequestsBulkActionEdit=v}),98);
__d("LSMoveThreadToInboxAndUpdateParent",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({folderName:"inbox",parentThreadKey:a[1]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSRemoveParticipantFromThread",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.filter(b.db.table(14).fetch([[[a[0],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.contactId,a[1])}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);