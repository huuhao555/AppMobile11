;/*FB_PKG_DELIM*/

__d("GroupsCometCreateRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6701530246596990"}),null);
__d("GroupsCometCreateRootQuery$Parameters",["GroupsCometCreateRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometCreateRootQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometCreateRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometDiscoverContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6824951044263930"}),null);
__d("GroupsCometDiscoverContentQuery$Parameters",["GroupsCometDiscoverContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometDiscoverContentQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometDiscoverContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupAboutRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7342142219152385"}),null);
__d("CometGroupAboutRootQuery$Parameters",["CometGroupAboutRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupAboutRootQuery_facebookRelayOperation"),metadata:{},name:"CometGroupAboutRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometCreateRoot.entrypoint",["GroupsCometCreateRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b,e=a.routeParams;a=a.routeProps;return{queries:{groupCreateRootQueryReference:{parameters:c("GroupsCometCreateRootQuery$Parameters"),variables:{event_id:(b=e.event_id)!=null?b:"0",event_id_is_null:e.event_id==null,fundraiser_challenge_id:(b=e.fundraiser_challenge_id)!=null?b:"0",fundraiser_challenge_id_is_null:e.fundraiser_challenge_id==null,package_id:(b=e.package_id)!=null?b:"0",parent_group_id:a.parentGroupID,referrer:(a=(b=e.create_ref)==null?void 0:b.toUpperCase())!=null?a:"UNKNOWN_REF",scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometCreateRoot.react").__setRef("GroupsCometCreateRoot.entrypoint")};g["default"]=a}),98);
__d("GroupsCometDiscoverRoot.entrypoint",["GroupsCometDiscoverContentQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometGroupsTabRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=d("buildCometGroupsTabRoute.entrypoint").buildCometGroupsTabRouteEntrypoint(c("JSResourceForInteraction")("GroupsCometDiscoverRoot.react").__setRef("GroupsCometDiscoverRoot.entrypoint"),function(a){return{queries:{discoverQueryReference:{parameters:b("GroupsCometDiscoverContentQuery$Parameters"),variables:{promotion_theme:a.routeProps.promotion_theme,scale:d("WebPixelRatio").get(),source:a.routeProps.source}}}}});g["default"]=a}),98);
__d("CometGroupAboutRoot.entrypoint",["CometGroupAboutRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildGroupCometRootRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildGroupCometRootRoute.entrypoint")(c("JSResourceForInteraction")("CometGroupAboutRoot.react").__setRef("CometGroupAboutRoot.entrypoint"),function(a){a=a.routeProps;a=a.groupID;return{queries:{aboutQueryReference:{parameters:b("CometGroupAboutRootQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);