;/*FB_PKG_DELIM*/

__d("CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6981038115284464"}),null);
__d("CometIXTFacebookContentTriggerRootQuery$Parameters",["CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometIXTFacebookContentTriggerRootQuery_facebookRelayOperation"),metadata:{},name:"CometIXTFacebookContentTriggerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometIXTFacebookContentTriggerEntryPoint.entrypoint",["CometIXTFacebookContentTriggerRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","react","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h;h||c("react");a={getPreloadProps:function(a){return{queries:{reference:{parameters:c("CometIXTFacebookContentTriggerRootQuery$Parameters"),variables:{input:babelHelpers["extends"]({},a,{nt_context:null,trigger_session_id:c("uuidv4")()}),scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometIXTFacebookContentTriggerRoot.react").__setRef("CometIXTFacebookContentTriggerEntryPoint.entrypoint")};b=a;g["default"]=b}),98);
__d("useIXTContentTriggerDialog",["cr:2988","cr:3116"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("cr:3116")(b("cr:2988"),a)}g["default"]=a}),98);
__d("ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6329352457130293"}),null);
__d("ProfilePlusIntentBasedSwitchingDialogQuery$Parameters",["ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfilePlusIntentBasedSwitchingDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfilePlusIntentBasedSwitchingDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("BaseMultiStepContainer.react",["BaseBaseMultiStepContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useState;function a(a,b){var d=k([]),e=d[0],f=d[1];d=k(0);var g=d[0],h=d[1];d=j(function(a){h(function(b){f(function(c){return c.slice(0,b).concat(a)});return b+1})},[]);var l=j(function(a){h(a)},[]);return i.jsx(c("BaseBaseMultiStepContainer.react"),babelHelpers["extends"]({},a,{pageComponents:e,pageCursor:g,ref:b,setPopPageState:l,setPushPageState:d,children:a.children}))}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("getRoundedCorners",[],(function(a,b,c,d,e,f){"use strict";var g={TOP_START:1,TOP_END:2,BOTTOM_START:4,BOTTOM_END:8,NONE:0,ALL:15};function a(a,b){return(a&b)===b}function b(a,b){if(a===0)return{};var c={},d=function(a,b){c[a]=((a=c[a])!=null?a:0)|b};d(0,g.TOP_START);d(Math.min(b,a)-1,g.TOP_END);var e=a-(a%b===0?b:a%b);d(e,g.BOTTOM_START);d(Math.min(e+b,a)-1,g.BOTTOM_END);a%b!==0&&e>=b&&d(e-1,g.BOTTOM_END);return c}b.hasCorner=a;b.CORNERS=g;f["default"]=b}),66);
__d("ProfileCometEngagementLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({});g["default"]=b}),98);
__d("ProfileEngagementEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1962347");b=d("FalcoLoggerInternal").create("profile_engagement_events",a);e=b;g["default"]=e}),98);
__d("useProfileCometEngagementEventsClickWithDataCallback",["ProfileCometContext","ProfileCometSession","ProfileEngagementEventsFalcoEvent","react","recoverableViolation","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useContext;function a(){var a=j(c("ProfileCometContext")),b=a.profileID,e=c("useCurrentRoute")();b==null&&c("recoverableViolation")("viewer id is a required field for profile engagement events logging","profile_comet");return i(function(a){c("ProfileEngagementEventsFalcoEvent").log(function(){return babelHelpers["extends"]({},a,{event_type:"click",profile_session_id:d("ProfileCometSession").get(b,e),viewee_userid_str:b})})},[b,e])}g["default"]=a}),98);
__d("useProfileCometEngagementEventsClickCallback",["react","useProfileCometEngagementEventsClickWithDataCallback"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var b=c("useProfileCometEngagementEventsClickWithDataCallback")();return i(function(){b(a)},[a,b])}g["default"]=a}),98);
__d("useProfileCometEngagementEventsImpression",["ProfileCometContext","ProfileCometSession","ProfileEngagementEventsFalcoEvent","react","recoverableViolation","useCurrentRoute","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useContext;function a(a){var b=j(c("ProfileCometContext")),e=b.profileID,f=c("useCurrentRoute")();e==null&&c("recoverableViolation")("profile id is a required field for profile engagement events logging","profile_comet");var g="impression";(a==null?void 0:a.event_type)!=null&&(g=a.event_type);b=i(function(){c("ProfileEngagementEventsFalcoEvent").log(function(){return babelHelpers["extends"]({},a,{event_type:g,profile_session_id:d("ProfileCometSession").get(e,f),viewee_userid:e})})},[a,e,g,f]);return c("useSinglePartialViewImpression")({onImpressionStart:b})}g["default"]=a}),98);
__d("useProfileEngagementData",["ProfileCometContext","ProfileCometEngagementLoggingContext","ProfileCometSession","react","recoverableViolation","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(a){var b=i(c("ProfileCometContext")),e=i(c("ProfileCometEngagementLoggingContext")),f=c("useCurrentRoute")();if(b.profileID===""){c("recoverableViolation")("Tried to use Profile Engagement Logger without passing a profile ID via a ProfileCometContext provider.","profile_comet");return null}return babelHelpers["extends"]({profile_id:b.profileID,profile_session_id:d("ProfileCometSession").get(b.profileID,f)},e,a)}g["default"]=a}),98);
__d("useProfileEngagementClickCallback",["react","recoverableViolation","requireDeferred","useProfileEngagementData"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback,j=c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef("useProfileEngagementClickCallback");function a(a,b){var d=c("useProfileEngagementData")(a);d!=null&&((a=d)==null?void 0:a.profile_product_bucket)==null&&(c("recoverableViolation")("product_bucket is a required field for profile engagement logging","profile_comet"),d=babelHelpers["extends"]({},d,{profile_product_bucket:"unknown"}));return i(function(a){if(d!=null){var c=babelHelpers["extends"]({profile_event_type:"click"},d);j.onReady(function(a){a=a.log;a(function(){return c})})}b&&b(a)},[b,d])}g["default"]=a}),98);
__d("useProfileEngagementImpression",["react","recoverableViolation","requireDeferred","useImpressionLogger","useProfileEngagementData"],(function(a,b,c,d,e,f,g){"use strict";var h;h||(h=d("react"));var i=h.useCallback,j=c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef("useProfileEngagementImpression");function a(a){var b=c("useProfileEngagementData")(a);(b==null?void 0:b.profile_product_bucket)==null&&c("recoverableViolation")("profile_product_bucket is a required field for profile engagement logging","profile_comet");(b==null?void 0:b.profile_surface)==null&&c("recoverableViolation")("profile_surface is a required field for profile engagement logging","profile_comet");a=i(function(a){a=a.log;if(b==null)return;var c=babelHelpers["extends"]({profile_event_type:"impression",profile_product_bucket:"unknown",profile_surface:"unknown"},b);a(function(){return c})},[b]);return c("useImpressionLogger")(j,a)}g["default"]=a}),98);
__d("ProfilePlusIntentBasedSwitchingDialog.entrypoint",["JSResourceForInteraction","ProfilePlusIntentBasedSwitchingDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("ProfilePlusIntentBasedSwitchingDialog.react").__setRef("ProfilePlusIntentBasedSwitchingDialog.entrypoint");b={getPreloadProps:function(a){return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("ProfilePlusIntentBasedSwitchingDialogQuery$Parameters"),variables:{profileID:a.routeParams.id,queryAllEligibleProfiles:a.otherParams.queryAllEligibleProfiles}}}}},root:a};d=b;g["default"]=d}),98);
__d("ProfilePlusFollowChainingContext.react",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useMemo,k=b.useState,l=i.createContext({isLike:!1,setIsLike:c("emptyFunction"),setShouldShowFollowChaining:c("emptyFunction"),shouldShowFollowChaining:!1});function a(a){a=a.children;var b=k(!1),c=b[0],d=b[1];b=k(!1);var e=b[0],f=b[1];b=j(function(){return{isLike:e,setIsLike:f,setShouldShowFollowChaining:d,shouldShowFollowChaining:c}},[c,e]);return i.jsx(l.Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.ProfilePlusFollowChainingContext=l;g.ProfilePlusFollowChainingContextProvider=a}),98);
__d("useLaunchFRXFlow",["react","useIXTContentTriggerDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useRef;function a(a){var b=i(null);a=c("useIXTContentTriggerDialog")(a);var d=a[0],e=a[1],f=a[2];a=a[3];return[d,b,e,f,a]}g["default"]=a}),98);
__d("ProfilePlusAdminActivitiesFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1794610");b=d("FalcoLoggerInternal").create("profile_plus_admin_activities",a);e=b;g["default"]=e}),98);
__d("InformTreatmentRenderingType",[],(function(a,b,c,d,e,f){a=Object.freeze({GEOBLOCK:"geoblock",MEDIA_LABEL:"media_label",POST_COVER:"post_cover",POST_LABEL:"post_label",WARNING_SCREENS:"warning_screens"});f["default"]=a}),66);
__d("XCometProfileControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile.php",Object.freeze({show_switched_toast:!1,show_switched_tooltip:!1,is_tour_dismissed:!1,is_tour_completed:!1,show_podcast_settings:!1,show_community_review_changes:!1,should_open_composer:!1,badge_type:"NEW_MEMBER",show_community_rollback_toast:!1,show_community_rollback:!1,show_follower_visibility_disclosure:!1}),void 0);b=a;g["default"]=b}),98);
__d("useCurrentRouteEntityKey",["getCometEntityKey","react","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(){var a=c("useCurrentRoute")(),b=i(function(){return a?c("getCometEntityKey")(a):null},[a]);return b}g["default"]=a}),98);