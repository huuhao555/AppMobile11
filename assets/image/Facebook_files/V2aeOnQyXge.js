;/*FB_PKG_DELIM*/

__d("CometQuickPromotionSocialContext_quickPromotionCreative.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometQuickPromotionSocialContext_quickPromotionCreative",selections:[{alias:null,args:null,concreteType:"QPCounterSocialContext",kind:"LinkedField",name:"counter_social_context",plural:!1,selections:[{args:null,documentName:"CometQuickPromotionSocialContext_quickPromotionCreative",fragmentName:"CometQuickPromotionCounterSocialContext_quickPromotionCounterSocialContext",fragmentPropName:"quickPromotionCounterSocialContext",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"social_context_images",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"secondary_footer",plural:!1,selections:a,storageKey:null}],type:"QuickPromotionCreative",abstractKey:null}}();e.exports=a}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9700288483378668"}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql",["CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"DeviceBasedLoginTurnOnNonceResponsePayload",kind:"LinkedField",name:"device_based_login_turn_on_nonce",plural:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"DeviceBasedLoginDetailedNonceInfosConnection",kind:"LinkedField",name:"device_based_login_nonce_infos",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",selections:c},params:{id:b("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation_facebookRelayOperation"),metadata:{},name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],e=[{alias:null,args:null,kind:"ScalarField",name:"title_text",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion$normalization",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"qp_image",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"promotion",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"encrypted_logging_data",storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionCreative",kind:"LinkedField",name:"creatives",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"content",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"primary_action",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"secondary_action",plural:!1,selections:e,storageKey:null},{alias:null,args:null,concreteType:"QPCounterSocialContext",kind:"LinkedField",name:"counter_social_context",plural:!1,selections:[{args:null,documentName:"CometQuickPromotionSocialContext_quickPromotionCreative",fragmentName:"CometQuickPromotionCounterSocialContext_quickPromotionCounterSocialContext",fragmentPropName:"quickPromotionCounterSocialContext",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"social_context",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"social_context_images",plural:!0,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"secondary_footer",plural:!1,selections:d,storageKey:null},c],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],b=[{alias:null,args:null,kind:"ScalarField",name:"title_text",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion",selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"qp_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"promotion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"encrypted_logging_data",storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionCreative",kind:"LinkedField",name:"creatives",plural:!0,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"content",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"primary_action",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"QuickPromotionAction",kind:"LinkedField",name:"secondary_action",plural:!1,selections:b,storageKey:null},{args:null,kind:"FragmentSpread",name:"CometQuickPromotionSocialContext_quickPromotionCreative"}],storageKey:null}],storageKey:null}],type:"CometMegaphoneWWWDeviceBasedLoginRendererStrategy",abstractKey:null}}();e.exports=a}),null);
__d("CometIconLogoFlat.react",["cr:11257","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var c;return i.jsx(b("cr:11257"),babelHelpers["extends"]({color:(c=a.color)!=null?c:"fb-logo"},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("WorkCometIconWorkplace.react",["CometSVGIcon.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("CometSVGIcon.react"),babelHelpers["extends"]({viewBox:"0 0 32 32"},a,{children:i.jsx("path",{d:"M16.57,2.29A13.88,13.88,0,0,0,11,3.42a14.28,14.28,0,0,0,0,26.31,14.06,14.06,0,0,0,5.56,1.13,14.3,14.3,0,0,0,5.25-1l-1.08-2.73a11.1,11.1,0,0,1-4.17.8,11.36,11.36,0,0,1,0-22.71,9.6,9.6,0,0,1,8,14.91L22.1,14c-.37-.9-.81-2.25-2.47-2.25s-2.1,1.36-2.46,2.25l-2.29,5.68-3.09-7.78H8.55l3.84,9.46c.39,1,.82,2.26,2.49,2.26s2.08-1.3,2.47-2.26l2.28-5.62,2.29,5.62c.46,1.16.95,2.26,2.47,2.26a2.78,2.78,0,0,0,2.14-1.15,12.54,12.54,0,0,0-10-20.16Z"})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometQuickPromotionHeaderComponent.react",["ix","BaseTheme.react","CometAspectRatioContainer.react","CometIcon.react","CometIconLogoFlat.react","CometImage.react","CometImageFromIXValue.react","CometTintedIcon.react","MetaLockupMonochromatic.react","MetaLockupPrimary.react","TetraText.react","WorkCometIconWorkplace.react","fbicon","gkx","react","stylex","unrecoverableViolation","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react"),l=500,m=94,n="/images/assets_DO_NOT_HARDCODE/charitable_giving_assets/FacebookLogo_light-4x.png",o="/images/assets_DO_NOT_HARDCODE/charitable_giving_assets/FacebookLogo_dark-4x.png",p={facebookLogo:{marginStart:"xp7jhwk",marginLeft:null,marginRight:null,$$css:!0},fullBleedHeader:{overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0},fullBleedHeaderContent:{boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},fullBleedHeaderImage:{height:"x5yr21d",width:"xh8yej3",$$css:!0},fullBleedIcon:{paddingStart:"x1swvt13",paddingLeft:null,paddingRight:null,paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x10l6tqk",start:"x17qophe",left:null,right:null,$$css:!0},fullBleedIconPadTop24:{paddingStart:"x1swvt13",paddingLeft:null,paddingRight:null,paddingTop:"x1p5oq8j",paddingBottom:"xwxc41k",position:"x10l6tqk",start:"x17qophe",left:null,right:null,$$css:!0},fullBleedMenu:{end:"xds687c",left:null,right:null,paddingEnd:"x1pi30zi",paddingLeft:null,paddingRight:null,paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x10l6tqk",$$css:!0},header:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"x1qughib",marginEnd:"xktsk01",marginLeft:null,marginRight:null,marginStart:"x1d52u69",paddingTop:"xz9dl7a",$$css:!0},headerIconPlaceHolder:{width:"xw4jnvo",$$css:!0},headerTitle:{alignItems:"x6s0dn4",display:"x78zum5",$$css:!0},headerTitleImage:{marginEnd:"x1emribx",marginLeft:null,marginRight:null,$$css:!0},headerTitleTextThreads:{paddingBottom:"x1120s5i",$$css:!0},image:{alignItems:"x6s0dn4",display:"x3nfvp2",justifyContent:"xl56j7k",paddingStart:"x12wi22r",paddingLeft:null,paddingRight:null,paddingTop:"xyamay9",width:"xh8yej3",$$css:!0},imageHeader:{alignItems:"x1cy8zhl",$$css:!0},insetHeaderImage:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x5yr21d",width:"xh8yej3",$$css:!0},insetHeaderImageContainer:{paddingTop:"xexx8yu",paddingEnd:"xn6708d",paddingBottom:"x18d9i69",paddingStart:"x1ye3gou",$$css:!0},insetImageHeaderContent:{display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"x1sxyh0",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0},insetImageIcon:{flexGrow:"x1iyjqo2",paddingTop:"x1yrsyyn",paddingEnd:"x150jy0e",paddingBottom:"x18d9i69",paddingStart:"x1e558r4",$$css:!0},insetImageSmallIcon:{paddingTop:"x1yrsyyn",paddingEnd:"xg83lxy",paddingBottom:"x18d9i69",paddingStart:"x1h0ha7o",$$css:!0},menu:{display:"xt0psk2",marginTop:"x1gslohp",$$css:!0},menuThreads:{paddingBottom:"xs9asl8",$$css:!0},video:{marginEnd:"xktsk01",marginLeft:null,marginRight:null,marginStart:"x1d52u69",marginTop:"xvkph5b",$$css:!0}};function a(a){var b=a.header,e=a.headerContextComponent;a=a.isLongTextQP;var f=c("useCurrentDisplayMode")()==="dark",g,j=b==null?void 0:b.faviconType,l=p.fullBleedIcon,m,r;if(j==="vote")g=k.jsx(c("CometImageFromIXValue.react"),{source:h("1669083")});else if(j==="facebook_logo"){var s=f?o:n;g=k.jsx("div",{className:"xp7jhwk",children:k.jsx(c("CometImage.react"),{height:32,src:s,width:122})})}else if(j==="threads_logo")g=k.jsx(c("CometIcon.react"),{icon:d("fbicon")._(h("380258"),24)}),m=p.headerTitleTextThreads,r=p.menuThreads;else if(j==="facebook_monogram_wordmark")(b==null?void 0:b.type)==="fullbleed"?g=f?k.jsx(c("CometImage.react"),{src:h("1969816")}):k.jsx(c("CometImage.react"),{src:h("1969818")}):g=f?k.jsx(c("CometImage.react"),{src:h("1960581")}):k.jsx(c("CometImage.react"),{src:h("1960583")});else if(j==="facebook_family_lockup")g=f?k.jsx(c("CometImage.react"),{src:h("1988479")}):k.jsx(c("CometImage.react"),{src:h("1988481")}),(b==null?void 0:b.type)==="inset_image"?g=k.jsx("div",{className:"x1yrsyyn xg83lxy x18d9i69 x1h0ha7o",children:g}):(b==null?void 0:b.type)==="fullbleed"&&(l=p.fullBleedIconPadTop24);else if(j==="meta_lockup"){switch(b==null?void 0:b.faviconColor){case"WHITE":g=k.jsx(c("BaseTheme.react"),{displayMode:"dark",children:k.jsx(c("MetaLockupMonochromatic.react"),{size:20})});break;default:g=k.jsx(c("MetaLockupPrimary.react"),{size:12})}(b==null?void 0:b.type)==="inset_image"?g=k.jsx("div",{className:"x1yrsyyn xg83lxy x18d9i69 x1h0ha7o",children:g}):(b==null?void 0:b.type)==="fullbleed"&&(l=p.fullBleedIconPadTop24)}else if(j==="meta_lockup_forced_light_mode")g=k.jsx(c("BaseTheme.react"),{displayMode:"light",children:k.jsx(c("MetaLockupPrimary.react"),{size:12})}),(b==null?void 0:b.type)==="inset_image"?g=k.jsx("div",{className:"x1yrsyyn xg83lxy x18d9i69 x1h0ha7o",children:g}):(b==null?void 0:b.type)==="fullbleed"&&(l=p.fullBleedIconPadTop24);else if(j==="meta_lockup_forced_dark_mode")g=k.jsx(c("BaseTheme.react"),{displayMode:"dark",children:k.jsx(c("MetaLockupPrimary.react"),{size:12})}),(b==null?void 0:b.type)==="inset_image"?g=k.jsx("div",{className:"x1yrsyyn xg83lxy x18d9i69 x1h0ha7o",children:g}):(b==null?void 0:b.type)==="fullbleed"&&(l=p.fullBleedIconPadTop24);else if(j==="garden_logo")(b==null?void 0:b.animation)!==null&&(l=p.fullBleedIconPadTop24),g=f?k.jsx(c("CometImage.react"),{src:h("1988479")}):k.jsx(c("CometImage.react"),{src:h("1988481")});else if(j==="meta_rayban_logo")g=k.jsx(c("CometImage.react"),{src:"/images/icons/meta_ray_ban_icon.png",width:160});else switch(b==null?void 0:b.faviconColor){case"WHITE":g=c("gkx")("1224637")?k.jsx(c("WorkCometIconWorkplace.react"),{color:"white",size:32}):k.jsx(c("CometTintedIcon.react"),{color:"white",icon:d("fbicon")._(h("869053"),32)});break;case"BLACK":g=k.jsx(c("CometTintedIcon.react"),{color:"black",icon:d("fbicon")._(h("869053"),32)});break;case"DISABLED":g=k.jsx("div",{className:"xw4jnvo"});break;case"BLUE":default:g=k.jsx(c("CometIconLogoFlat.react"),{color:c("gkx")("1224637")?"work-iris":"active-tab",size:32})}s=k.jsx("span",{className:(i||(i=c("stylex")))([p.menu,r]),children:e});if(b==null||a)return k.jsxs("div",{className:"x6s0dn4 x78zum5 x1qughib xktsk01 x1d52u69 xz9dl7a",children:[g,(b==null?void 0:b.dismissDisabled)===!0?null:s]});f=b.faviconURI;j=b.title;if(j!=null){return k.jsxs("div",{className:(i||(i=c("stylex")))([p.header,b==null?void 0:b.xstyle]),children:[k.jsxs("div",{className:"x6s0dn4 x78zum5",children:[f!=null&&k.jsx(c("CometImage.react"),{alt:"qp-favicon-image",src:f,width:36,xstyle:p.headerTitleImage}),f==null&&g!=null&&k.jsx("div",{className:"x1emribx",children:g}),k.jsx("div",{className:i(m),children:k.jsx(c("TetraText.react"),{color:(a=b.titleColor)!=null?a:"secondary",type:"headlineEmphasized3",children:j})})]}),s]})}f=b.imageUri;if(f==null&&b.illustrationComponent==null&&b.video==null&&b.customMediaRenderer==null&&(b.type!=="fullbleed"||b.type==="fullbleed"&&b.animation==null))return k.jsxs("div",{className:"x6s0dn4 x78zum5 x1qughib xktsk01 x1d52u69 xz9dl7a",children:[g,s]});if(b.type==="center"||b.type==="center_rounded"){a=65;j=b.imageHeight!=null?b.imageHeight:a;s=b.imageWidth!=null?b.imageWidth:a;return k.jsxs("div",{className:"x78zum5 x1qughib xktsk01 x1d52u69 xz9dl7a x1cy8zhl",children:[k.jsx("div",{className:(i||(i=c("stylex")))(l),children:g}),(a=b.animation)!=null?a:f==null?null:k.jsx("span",{className:"x6s0dn4 x3nfvp2 xl56j7k x12wi22r xyamay9 xh8yej3",children:k.jsx("div",{style:b.type==="center_rounded"?{borderRadius:j/2,height:j,overflow:"hidden",width:s}:{},children:k.jsx(c("CometImage.react"),{alt:"",height:j,src:f,width:s})})}),b.dismissDisabled===!0?k.jsx("div",{className:"xw4jnvo"}):k.jsx("span",{className:"xt0psk2 x1gslohp",children:e})]})}else if(b.type==="fullbleed")if(b.video==null){return k.jsxs("div",{className:b.animation!=null?null:"x6ikm8r x10wlt62 x1n2onr6",children:[b.illustrationComponent==null?f==null?(a=b.animation)!=null?a:null:(j=b.animation)!=null?j:b.imageResizingDisabled===!0?k.jsx(c("CometImage.react"),{alt:"",src:f,xstyle:p.fullBleedHeaderImage}):k.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:q(b.imageWidth,b.imageHeight),children:(s=b.animation)!=null?s:k.jsx(c("CometImage.react"),{alt:"",src:f,xstyle:p.fullBleedHeaderImage})}):b.illustrationComponent,k.jsxs("div",{className:"x9f619 xds687c x10l6tqk x17qophe x13vifvy",children:[k.jsx("div",{className:(i||(i=c("stylex")))(l),children:g}),b.dismissDisabled===!0?null:k.jsx("span",{className:"xds687c x1pi30zi xz9dl7a xsag5q8 x10l6tqk",children:e})]})]})}else return k.jsxs("div",{className:b.animation!=null&&b.video!=null?null:"x6ikm8r x10wlt62 x1n2onr6",children:[k.jsxs("div",{children:[k.jsx("div",{className:"x1swvt13 xz9dl7a xsag5q8 x10l6tqk x17qophe",children:g}),b.dismissDisabled===!0?null:k.jsx("span",{className:"xds687c x1pi30zi xz9dl7a xsag5q8 x10l6tqk",children:e})]}),k.jsx("div",{className:"xktsk01 x1d52u69 xvkph5b",children:b.video})]});else if(b.type==="inset_image"){return k.jsxs("div",{children:[k.jsxs("div",{className:"x78zum5 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha",children:[k.jsx("div",{className:"x1iyjqo2 x1yrsyyn x150jy0e x18d9i69 x1e558r4",children:k.jsx("div",{children:g})}),b.dismissDisabled===!0?null:k.jsx("div",{children:e})]}),(a=b.customMediaRenderer)!=null?a:f==null?null:k.jsx("div",{className:"xexx8yu xn6708d x18d9i69 x1ye3gou",children:k.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:q(b.imageWidth,b.imageHeight),children:(j=b.animation)!=null?j:k.jsx(c("CometImage.react"),{alt:"",src:f,xstyle:p.insetHeaderImage})})})]})}throw c("unrecoverableViolation")("header and header type must have been provided.","comet_qp")}a.displayName=a.name+" [from "+f.id+"]";function q(a,b){a=(a=a)!=null?a:l;b=(b=b)!=null?b:m;return a/b}g["default"]=a}),98);
__d("CometQuickPromotionMenuContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext();g["default"]=b}),98);
__d("CometQuickPromotionComponent.react",["fbt","ix","CometFeedStoryMenuSection.react","CometImage.react","CometQuickPromotionHeaderComponent.react","CometQuickPromotionLoggerContext.react","CometQuickPromotionMenuContext.react","TetraButtonGroup.react","TetraCircleButton.react","TetraIcon.react","TetraText.react","TetraTextPairing.react","fbicon","gkx","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;var m=b.useCallback,n=b.useContext,o=b.useState,p=60,q=100,r={bottomFooter:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"xl56j7k",paddingBottom:"xjkvuk6",paddingStart:"x1ye3gou",paddingLeft:null,paddingRight:null,paddingEnd:"xn6708d",$$css:!0},bottomFooterIcons:{display:"x78zum5",paddingEnd:"xsyo7zv",paddingLeft:null,paddingRight:null,$$css:!0},bottomFooterText:{paddingBottom:"xsag5q8",$$css:!0},content:{marginTop:"xdj266r",marginEnd:"xktsk01",marginBottom:"xat24cr",marginStart:"x1d52u69",$$css:!0},context:{display:"x78zum5",marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"xat24cr",marginStart:"x1d52u69",whiteSpace:"x126k92a",$$css:!0},contextAsBlock:{display:"x1lliihq",$$css:!0},extraMarginBottom:{marginBottom:"x1yztbdb",$$css:!0},extraMarginTop:{marginTop:"xw7yly9",$$css:!0},footer:{paddingBottom:"xsag5q8",$$css:!0},footerContent:{marginEnd:"xktsk01",marginLeft:null,marginRight:null,marginStart:"x1d52u69",marginTop:"x14vqqas",$$css:!0},footerSmallMarginTop:{marginTop:"xdj266r",$$css:!0},rightImage:{paddingStart:"x14gfdix",paddingLeft:null,paddingRight:null,$$css:!0},rightLargeImage:{paddingStart:"xcu9agk",paddingLeft:null,paddingRight:null,$$css:!0},root:{width:"xh8yej3",$$css:!0}},s=c("gkx")("1299319"),t=["4870925766342196","613867983149035","test_long_qp_id_1234","194697461145337","1726705827450314","809458079784624","282632069744492","398405854865301","695693951068272","1573616852835635","446669793313702","925251304945090","452420379402946","2618632638442774","526736055089481","428000432060686"],u=["277090830243452","809458079784624"];function a(a){var b,e=o(!1),f=e[0],g=e[1];e=a.content;var k=a.context,v=a.footer,w=a.header,x=a.isInHScroll,y=a.loggingData,z=a.onDismiss,A=a.onImpression,B=a.onOpenHeaderMenu,C=a.templateParams,D=a.xOut,E=n(c("CometQuickPromotionLoggerContext.react")),F=n(c("CometQuickPromotionMenuContext.react"));b=(b=F==null?void 0:F.feedUnitID)!=null?b:null;F=(F=F==null?void 0:F.location)!=null?F:null;var G=y==null?void 0:y.promotion_id,H=y==null?void 0:y.instance_log_data,I=y==null?void 0:y.extra_client_data;y=m(function(){E!=null&&E.logAction&&E.logAction("dismiss",G,H,I),z&&z(),g(!0)},[I,H,E,z,G]);var J=b!=null&&F!=null,K=c("useVisibilityObserver")({onVisible:m(function(){E!=null&&E.logImpression&&E.logImpression(G,H,I),A!=null&&A()},[I,H,E,G])});if(f)return null;f=(w==null?void 0:w.type)==="fullbleed";y={icon:d("fbicon")._(i("478233"),20),onPress:y,size:32};B=D===!0?l.jsx(c("TetraCircleButton.react"),babelHelpers["extends"]({},y,{color:"primary",label:h._("__JHASH__cCrSTii9yXy__JHASH__"),type:"deemphasized"})):J?l.jsx(c("CometFeedStoryMenuSection.react"),{additionalOnPressHandler:B,color:(D=w==null?void 0:w.contextComponentColor)!=null?D:"primary",feedLocation:F,id:b,serializedFRTPIdentifiers:null,storyDebugInfo:null}):f?l.jsx(c("TetraCircleButton.react"),babelHelpers["extends"]({},y,{color:"white",label:h._("__JHASH__cCrSTii9yXy__JHASH__"),type:"dark-overlay"})):l.jsx(c("TetraIcon.react"),babelHelpers["extends"]({"aria-label":h._("__JHASH__cCrSTii9yXy__JHASH__"),color:"secondary"},y));D={};F=!1;if(v!=null){b=v.direction;var L=v.dismissOnClick;f=v.paddingTop;var M=v.primary,N=v.secondary;y=v.wrap;f!=null&&(D.paddingTop=f);b!=null&&(D.direction=b);if(M!=null){F=!0;D.paddingHorizontal=16;D.primary=babelHelpers["extends"]({},M,{onPress:function(a){E!=null&&E.logAction&&E.logAction("primary",G,H,I),M.onPress&&M.onPress(a),L!=null&&L.primary===!0&&(z&&z(),g(!0))},reduceEmphasis:(f=M.reduceEmphasis)!=null?f:!0})}N!=null&&(F=!0,D.paddingHorizontal=16,D.secondary=babelHelpers["extends"]({},N,{onPress:function(a){E!=null&&E.logAction&&E.logAction("secondary",G,H,I),N.onPress&&N.onPress(a),L!=null&&L.secondary===!0&&(z&&z(),g(!0))}}));y!=null&&(D.wrap=y)}b=v==null?void 0:v.content;f=v==null?void 0:v.extraMarginTop;y=v==null?void 0:v.smallMarginTop;f=b!=null?l.jsx("div",{className:(j||(j=c("stylex")))(r.footerContent,f!=null&&f&&r.extraMarginTop,y!=null&&r.footerSmallMarginTop),children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:b})}):null;y=t.indexOf(G)>-1;b=u.indexOf(G)>-1;var O=null;if(C!=null){C=C.get("footer_icon");switch(C){case"privacy":O=l.jsx("div",{className:"x78zum5 xsyo7zv",children:l.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("497243"),12)})});break;case"profile_switch":O=l.jsx("div",{className:"x78zum5 xsyo7zv",children:l.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("1521755"),12)})})}}C=v==null?void 0:v.bottom_content_text;var P=v==null?void 0:v.bottom_component;O=C==null&&P==null?null:l.jsxs("div",{children:[C==null?null:l.jsxs("div",{className:"x6s0dn4 x78zum5 x1q0g3np xl56j7k x1ye3gou xn6708d xsag5q8",children:[O,l.jsx(c("TetraText.react"),{type:"meta3",children:C})]}),P==null?null:l.jsx("div",{className:"x6s0dn4 x78zum5 x1q0g3np xl56j7k xjkvuk6 x1ye3gou xn6708d",children:P})]});return l.jsxs("div",{className:"xh8yej3",ref:J?null:K,children:[a.secondaryHeader,l.jsx(c("CometQuickPromotionHeaderComponent.react"),{header:w,headerContextComponent:B,isLongTextQP:y}),w!=null?w.component!=null?w.component:null:null,k!=null?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:(j||(j=c("stylex")))(r.context,(s||a.contentTitleOverride!=null)&&r.contextAsBlock,!F&&O==null&&e==null&&r.extraMarginBottom),children:[(C=a.contentTitleOverride)!=null?C:l.jsx(c("TetraTextPairing.react"),{body:k.subtitle,headline:k.title,isSemanticHeading:!0,level:2,textAlign:k.textAlign||"start"}),w!=null&&y?w.animation!=null?w.animation:w.imageUri!=null?l.jsx("div",{className:(j||(j=c("stylex")))(!b&&r.rightImage,b&&r.rightLargeImage),children:l.jsx(c("CometImage.react"),{alt:"",src:w.imageUri,width:b?q:p})}):null:null]}),(P=k.socialContext)!=null?P:null]}):null,e!=null?l.jsx("div",{className:(j||(j=c("stylex")))(x!==!0&&r.content,k!=null&&r.extraMarginTop),children:e}):null,v!=null&&Object.keys(v).length>0&&!(Object.keys(v).length===1&&(v==null?void 0:v.bottom_content_text)!=null)?l.jsxs("div",{className:"xsag5q8",children:[f,l.jsx(c("TetraButtonGroup.react"),babelHelpers["extends"]({},D))]}):null,O]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometQuickPromotionSocialContext.react",["CometBoldedEntityRenderer","CometColumn.react","CometColumnItem.react","CometMetaLinkedEntityRenderer","CometQuickPromotionSocialContext_quickPromotionCreative.graphql","CometRelay","CometTextWithEntitiesRelay.react","TetraOverlappingFacepile.react","TetraOverlappingFacepileUnstyled.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react"),l={text:{display:"x78zum5",flexBasis:"x1r8uery",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",paddingEnd:"xn6708d",paddingLeft:null,paddingRight:null,paddingStart:"x1swvt13",paddingTop:"xyamay9",$$css:!0}},m={center:{justifyContent:"xl56j7k",$$css:!0},end:{justifyContent:"x13a6bvl",$$css:!0},start:{justifyContent:"x1nhvcw1",$$css:!0}};function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometQuickPromotionSocialContext_quickPromotionCreative.graphql"),a.creative);if(e==null)return null;var f=e.counter_social_context,g=e.secondary_footer,j=e.social_context;e=e.social_context_images;if(f!=null){var n=a.counterDigits,o=a.dismissQP,p=a.isRTL,q=a.metaText,r=a.socialContextButtonText,s=a.socialContextDisclaimerText,t=a.socialContextDisclaimerTextWithEntities;return k.jsx(d("CometRelay").MatchContainer,{match:f,props:{counterDigits:n,dismissQP:o,isRTL:p,metaText:q,socialContextButtonText:r,socialContextDisclaimerText:s,socialContextDisclaimerTextWithEntities:t}})}if(g!=null){return k.jsx("div",{className:(i||(i=c("stylex")))(l.text,m[(f=a.textAlign)!=null?f:"start"]),children:k.jsx(c("TetraText.react"),{color:"secondary",type:"meta3",children:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{"*":[c("CometBoldedEntityRenderer"),c("CometMetaLinkedEntityRenderer")]},textWithEntities:g})})})}if(j==null)return null;if(e==null||e.length===0){return k.jsx("div",{className:(i||(i=c("stylex")))(l.text,m[(n=a.textAlign)!=null?n:"start"]),children:k.jsx(c("TetraText.react"),{color:"secondary",type:"body3",children:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:j})})})}var u=[];e.forEach(function(a){a=a.uri;if(a==null)return;u.push({source:{uri:a}})});o={count:e.length,isTextInline:!0,items:u,size:24,text:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:j})};if(a.textAlign!==null)return k.jsx(c("CometColumn.react"),{align:a.textAlign,children:k.jsx(c("CometColumnItem.react"),{children:k.jsx(c("TetraOverlappingFacepile.react"),babelHelpers["extends"]({},o))})});else return a.unstyled===!0?k.jsx(c("TetraOverlappingFacepileUnstyled.react"),babelHelpers["extends"]({},o)):k.jsx(c("TetraOverlappingFacepile.react"),babelHelpers["extends"]({},o))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaphoneWWWDeviceBasedLoginRendererStrategy.react",["CometBoldedEntityRenderer","CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql","CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql","CometQuickPromotionComponent.react","CometQuickPromotionSocialContext.react","CometRelay","CometTextWithEntitiesRelay.react","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||(j=d("react")),l=j.useState;function a(a){a=a.quickPromotion;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometMegaphoneWWWDeviceBasedLoginRendererStrategy_quickPromotion.graphql"),a);var e=d("CometRelay").useMutation(i!==void 0?i:i=b("CometMegaphoneWWWDeviceBasedLoginRendererStrategyTurnOnNonceMutation.graphql")),f=e[0];e=function(){f({variables:{input:{}}})};var g=l(!1),j=g[0];g=g[1];if(j)return null;j=a.promotion;var m=a.qp_image;if(j==null)throw c("unrecoverableViolation")("promotion data cannot be null","comet_qp");var n=j.creatives;j=j.id;n=n!=null?n[0]:null;if(n==null||j==null)throw c("unrecoverableViolation")("creatives/promotion id data cannot be null","comet_qp");var o=n.content,p=n.primary_action,q=n.secondary_action,r=n.title;if(r==null||o==null)return null;m=m==null?void 0:m.uri;m=m!=null?{header:{imageUri:m,type:"center"}}:null;var s={footer:{}};p!=null&&(s.footer.primary={label:p.title_text,onPress:e});q!=null&&(s.footer.secondary={label:q.title_text,onPress:g});s.footer.dismissOnClick={primary:!0,secondary:!0};return k.jsx(c("CometQuickPromotionComponent.react"),babelHelpers["extends"]({},m,{context:{socialContext:k.jsx(c("CometQuickPromotionSocialContext.react"),{creative:n}),subtitle:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:o}),title:k.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:{User:[c("CometBoldedEntityRenderer")]},textWithEntities:r})}},s,{loggingData:{instance_log_data:a==null?void 0:(p=a.promotion)==null?void 0:p.encrypted_logging_data,promotion_id:j}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);