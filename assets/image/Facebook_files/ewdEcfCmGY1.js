;/*FB_PKG_DELIM*/

__d("FBReelsConstants",["fbt","CometLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i;a=i||c("react");b=9/16;d=50;e=900;f="reelsProfile";var j=h._("__JHASH__sDdVNM7hGE1__JHASH__"),k=h._("__JHASH__EG7UErgha-y__JHASH__");a=a.jsx(c("CometLink.react"),{color:"highlight",href:"/help/1633654236824653/?helpref=uf_share",target:"_blank",children:h._("__JHASH__O83M7Km16YB__JHASH__")});c=h._("__JHASH__iQ3aNKgB7Ds__JHASH__",[h._param("Help Center Link",a)]);h=h._("__JHASH__EXFY6pmPoxs__JHASH__",[h._param("Help Center Link",a)]);g.MEDIA_ASPECT_RATIO=b;g.MIN_VIEWER_HEIGHT=d;g.VIEWER_WIDTH_THRESHOLD=e;g.MESSENGER_WEB_ENTRYPOINT_TYPE=f;g.DISABLE_REMIX_TITLE=j;g.ENABLE_REMIX_TITLE=k;g.DISABLE_REMIX_BODY=c;g.ENABLE_REMIX_BODY=h}),98);
__d("FBReelsGating",["gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return!1}function b(){var a;return(a=c("qex")._("1553"))!=null?a:!1}function d(){return!1}function e(){var a;return(a=c("qex")._("253"))!=null?a:!1}function f(){return!1}function h(){return 5}function i(){return!c("gkx")("976093")}function j(){return!1}function k(){return!1}function l(){return!0}function m(){return c("gkx")("947")}g.shouldEnablePushViewEntrypoint=a;g.shouldEnableIFUSeeMoreButton=b;g.shouldEnableAudioAugment=d;g.shouldEnableFixedColumns=e;g.shouldEnableEffectAugment=f;g.getNumOfIFUReels=h;g.shouldEnableIGReshare=i;g.shouldEnableWebBannerAd=j;g.shouldEnableGroupCreation=k;g.shouldUseReelDescriptionLinkFix=l;g.shouldUseReelDescriptionSeeLessFix=m}),98);
__d("FBReelsNodeIndexContextProvider.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={index:0,nodesSize:0,setIndex:function(){}};c=a.createContext(b);g["default"]=c}),98);
__d("XCometFBReelControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/reel/{?video_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FBReelsURLUtils",["ConstUriUtils","XCometFBReelControllerRouteBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,d,e,f,g){b=(b=b)!=null?b:"UNKNOWN";var h="group_other",i=void 0;if(Boolean(e)){switch(d){case"group":case"group_mall":h="group";i=f==null?void 0:f;break;case"groups_tab":h="groups_tab";break;default:break}b=h}e={group_id:i,s:b,stack_idx:g==null?void 0:g,video_id:a==null?void 0:a};return c("XCometFBReelControllerRouteBuilder").buildURL(e)}function a(a,b,c,e,f,g){a=h(a,b,c,e,f,g);if(i()){f=(b=d("ConstUriUtils").getUri(a))==null?void 0:(c=b.getQualifiedUri())==null?void 0:(e=c.setDomain("www.facebook.com"))==null?void 0:e.toString();if(f!=null)return f}return a}function b(a){return["fb_shorts_video_deep_dive","fb_shorts_profile_video_deep_dive"].includes(a)}function i(){return c("gkx")("1745416")||c("gkx")("1333")}g.getReelsURL=h;g.getReelsAbsoluteURL=a;g.isReelsRenderLocationVDD=b;g.isBizSurface=i}),98);
__d("FBReelsFeedConnectionIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={connectionID:""};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsHideReelContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={addHiddenReel:function(a){},hiddenReels:null,lastHiddenReel:null,removeHiddenReel:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsViewerSessionIDContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={viewerSessionID:""};c=a.createContext(b);g["default"]=c}),98);
__d("FBReelsLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_TYPE:{PAUSE_REEL:"pause_reel"},CLOSE_REELS_GESTURE:{BACK_BUTTON_EXIT:"back_button_exit",CLOSE_BUTTON_EXIT:"close_button_exit",KEYBOARD_EXIT:"keyboard_exit",UNKNOWN:"unknown"},INSTAGRAM_DEEPLINK_DESTINATION:{VIEWER:"viewer"},OPEN_SOURCE:{BOOKMARK:"bookmark",IFU:"ifu",IFU_END_CARD:"ifu_end_card",IFU_SEE_MORE:"ifu_see_more",NOTIFICATION:"notification",PERMALINK:"permalink",TOFU:"reels_tofu",UNKNOWN:"unknown"},OPEN_SOURCE_FOR_FALCO:{BOOKMARK:"bookmark",COMET_IN_FEED_UNIT:"comet_in_feed_unit",COMET_URL:"comet_url"},PLAYER_ORIGIN:{NEWS_FEED:"newsfeed"},SOURCE_SURFACE:{VIEWER:"fb_shorts_viewer"}};b=a;f["default"]=b}),66);
__d("useReelsLogger",["react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback,j=c("requireDeferred")("FbShortsAggregationPageClickedFalcoEvent").__setRef("useReelsLogger"),k=c("requireDeferred")("FbShortsInstagramDeeplinkFalcoEvent").__setRef("useReelsLogger"),l=c("requireDeferred")("FbShortsSaveReelFalcoEvent").__setRef("useReelsLogger"),m=c("requireDeferred")("FbShortsSeeLessFalcoEvent").__setRef("useReelsLogger"),n=c("requireDeferred")("FbShortsUndoSeeLessFalcoEvent").__setRef("useReelsLogger"),o=c("requireDeferred")("FbShortsViewerOpenFalcoEvent").__setRef("useReelsLogger"),p=c("requireDeferred")("SfvChainingNavigationExitFalcoEvent").__setRef("useReelsLogger"),q=c("requireDeferred")("ShortsFollowFalcoEvent").__setRef("useReelsLogger"),r=c("requireDeferred")("ShortsTapCreatorProfileFalcoEvent").__setRef("useReelsLogger"),s=c("requireDeferred")("ShortsUnfollowFalcoEvent").__setRef("useReelsLogger");function a(){var a=i(function(a,b,c){r.onReady(function(d){return d.log(function(){return{client_page_position:"0",creator_id:a,tracking:b,video_id:c}})})},[]),b=function(a,b,c,d,e,f,g){j.onReady(function(h){return h.log(function(){return{aggregation_page_session_id:d,entity_id:a,entity_type:b,original_video_id:c,tracking:f,video_owner_type:g,viewer_session_id:e}})})},c=function(a,b,c,d){p.onReady(function(e){return e.log(function(){return{client_page_position:a.toString(),exit_method:b,tracking:c,video_id:d}})})},d=i(function(a){var b=a.client_page_position,c=a.creator_id,d=a.tracking,e=a.video_id,f=a.viewer_session_id;m.onReady(function(a){return a.log(function(){return{client_page_position:String(b),creator_id:c,tracking:d,video_id:e,viewer_session_id:f}})})},[]),e=i(function(a){var b=a.client_page_position,c=a.creator_id,d=a.tracking,e=a.video_id,f=a.viewer_session_id;n.onReady(function(a){return a.log(function(){return{client_page_position:String(b),creator_id:c,tracking:d,video_id:e,viewer_session_id:f}})})},[]),f=i(function(a,b,c){o.onReady(function(d){return d.log(function(){return{referral_source:a,session_id:c,video_id:b}})})},[]),g=i(function(a){var b=a.client_page_position,c=a.follow_location,d=a.followee_id,e=a.suggestion_index,f=a.tracking;q.onReady(function(a){return a.log(function(){return{client_page_position:String(b),follow_location:c,followee_id:d,suggestion_index:e,tracking:f}})})},[]),h=i(function(a){var b=a.client_page_position,c=a.follow_location,d=a.followee_id,e=a.tracking;s.onReady(function(a){return a.log(function(){return{client_page_position:String(b),follow_location:c,followee_id:d,tracking:e}})})},[]),t=i(function(a){var b=a.destination,c=a.entry,d=a.media_id,e=a.tracking;k.onReady(function(a){return a.log(function(){return{destination:b,entry:c,media_id:d,tracking_key:e}})})},[]),u=i(function(a){var b=a.client_page_position,c=a.savable_id,d=a.save_action_name,e=a.save_location,f=a.tracking,g=a.video_id,h=a.viewer_session_id;l.onReady(function(a){return a.log(function(){return{client_page_position:String(b),savable_id:c,save_action_name:d,save_location:e,tracking:f,video_id:g,viewer_session_id:h}})})},[]);return{aggregationPageClickedLog:b,exitViewerLog:c,feedbackInstagramDeeplinkClickedLog:t,openViewerLog:f,saveReelLog:u,seeLessLog:d,shortsFollowLog:g,shortsUnfollowLog:h,tapCreatorProfileLog:a,undoSeeLessLog:e}}g["default"]=a}),98);
__d("XCometReelsCreationControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/reels/create/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);