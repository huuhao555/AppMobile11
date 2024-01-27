;/*FB_PKG_DELIM*/

__d("CometUFIShareActionLinkMenuItems_linkPreviewRoot.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Variable",name:"feed_location",variableName:"feedLocation"},b={kind:"Literal",name:"surface",value:"UFI_POPOVER"},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"feedLocation"},{defaultValue:null,kind:"LocalArgument",name:"qe_optional_share_to_page"}],kind:"Fragment",metadata:null,name:"CometUFIShareActionLinkMenuItems_linkPreviewRoot",selections:[{alias:"default_share_items_firstBatch",args:[a,{kind:"Literal",name:"supported",value:"1uNgVV"},b],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareMoreOptionsTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"MoreOptionsShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareNowToStoryTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareNowToStoryShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareNowTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareNowShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToMessengerTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToMessengerShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareViaWhatsAppShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"WhatsAppExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToWorkplaceChatTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToWorkplaceChatShareMenuItem",abstractKey:null}],storageKey:null},{condition:"qe_optional_share_to_page",kind:"Condition",passingValue:!0,selections:[{alias:"qe_include_items",args:[a,{kind:"Literal",name:"supported",value:"33fh64"},b],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_qe_include",fragmentName:"CometUFIShareToPageOptionalSwitchingTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToPageOptionalSwitchingShareMenuItem",abstractKey:null}],storageKey:null}]},{condition:"qe_optional_share_to_page",kind:"Condition",passingValue:!1,selections:[{alias:"qe_exclude_items",args:[a,{kind:"Literal",name:"supported",value:"3ynsXv"},b],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_qe_exclude",fragmentName:"CometUFIShareToPageTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToPageShareMenuItem",abstractKey:null}],storageKey:null}]},{alias:"default_share_items_lastBatch",args:[a,{kind:"Literal",name:"supported",value:"ORtEu"},b],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[c,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToWorkplaceOwnProfileFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToWorkplaceOwnProfileFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareUsingBusinessSuiteShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareUsingBusinessSuiteShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareUsingBusinessSuiteV2ShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareUsingBusinessSuiteV2ShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToFriendsFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFriendsFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToFundraiserTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFundraiserShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToGroupTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToGroupShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareGroupQRCodeTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareGroupQRCodeMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFICopyLinkTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"CopyLinkShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaExternalTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIEmbedVideoTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"EmbedVideoShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaTwitterlShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"TwitterExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaRedditShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"RedditExternalShareMenuItem",abstractKey:null}],storageKey:null}],type:"LinkPreviewRoot",abstractKey:null}}();e.exports=a}),null);
__d("CometUFIShareActionLinkMenuQuery.graphql",["CometUFIShareActionLinkMenuQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},c={defaultValue:null,kind:"LocalArgument",name:"hasParentStory"},d={defaultValue:null,kind:"LocalArgument",name:"qe_optional_share_to_page"},e={defaultValue:null,kind:"LocalArgument",name:"shareableParams"},f={defaultValue:null,kind:"LocalArgument",name:"storyParams"},g=[{kind:"Variable",name:"params",variableName:"shareableParams"}],h={condition:"hasParentStory",kind:"Condition",passingValue:!0,selections:[{alias:"storyLink",args:[{kind:"Variable",name:"params",variableName:"storyParams"}],concreteType:"LinkPreviewRoot",kind:"LinkedField",name:"link_preview",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"share_scrape_data",storageKey:null}],storageKey:null}]},i={kind:"Variable",name:"feed_location",variableName:"feedLocation"},j={kind:"Literal",name:"surface",value:"UFI_POPOVER"},k={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f],kind:"Fragment",metadata:null,name:"CometUFIShareActionLinkMenuQuery",selections:[{alias:"link",args:g,concreteType:"LinkPreviewRoot",kind:"LinkedField",name:"link_preview",plural:!1,selections:[{args:[{kind:"Variable",name:"feedLocation",variableName:"feedLocation"},{kind:"Variable",name:"qe_optional_share_to_page",variableName:"qe_optional_share_to_page"}],kind:"FragmentSpread",name:"CometUFIShareActionLinkMenuItems_linkPreviewRoot"}],storageKey:null},h],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,e,f,d,a],kind:"Operation",name:"CometUFIShareActionLinkMenuQuery",selections:[{alias:"link",args:g,concreteType:"LinkPreviewRoot",kind:"LinkedField",name:"link_preview",plural:!1,selections:[{alias:"default_share_items_firstBatch",args:[i,{kind:"Literal",name:"supported",value:"1uNgVV"},j],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareMoreOptionsTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"MoreOptionsShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareNowToStoryTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareNowToStoryShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareNowTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareNowShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToMessengerTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToMessengerShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareViaWhatsAppShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"WhatsAppExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_firstbatch",fragmentName:"CometUFIShareToWorkplaceChatTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToWorkplaceChatShareMenuItem",abstractKey:null}],storageKey:null},{condition:"qe_optional_share_to_page",kind:"Condition",passingValue:!0,selections:[{alias:"qe_include_items",args:[i,{kind:"Literal",name:"supported",value:"33fh64"},j],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_qe_include",fragmentName:"CometUFIShareToPageOptionalSwitchingTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToPageOptionalSwitchingShareMenuItem",abstractKey:null}],storageKey:null}]},{condition:"qe_optional_share_to_page",kind:"Condition",passingValue:!1,selections:[{alias:"qe_exclude_items",args:[i,{kind:"Literal",name:"supported",value:"3ynsXv"},j],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_qe_exclude",fragmentName:"CometUFIShareToPageTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToPageShareMenuItem",abstractKey:null}],storageKey:null}]},{alias:"default_share_items_lastBatch",args:[i,{kind:"Literal",name:"supported",value:"ORtEu"},j],concreteType:null,kind:"LinkedField",name:"comet_share_items",plural:!0,selections:[k,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToWorkplaceOwnProfileFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToWorkplaceOwnProfileFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareUsingBusinessSuiteShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareUsingBusinessSuiteShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareUsingBusinessSuiteV2ShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareUsingBusinessSuiteV2ShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToFriendsFeedTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFriendsFeedShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToFundraiserTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToFundraiserShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareToGroupTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToGroupShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareGroupQRCodeTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareGroupQRCodeMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFICopyLinkTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"CopyLinkShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaExternalTetraListCellV2_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"ShareToExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIEmbedVideoTetraListCell_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"EmbedVideoShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaTwitterlShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"TwitterExternalShareMenuItem",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIShareActionLinkMenuItems_linkPreviewRoot_default_lastBatch",fragmentName:"CometUFIShareViaRedditShareMenuItem_shareItem",fragmentPropName:"shareItem",kind:"ModuleImport"}],type:"RedditExternalShareMenuItem",abstractKey:null}],storageKey:null}],storageKey:null},h]},params:{id:b("CometUFIShareActionLinkMenuQuery_facebookRelayOperation"),metadata:{},name:"CometUFIShareActionLinkMenuQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometUFIShareActionLinkMenu_shareable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIShareActionLinkMenu_shareable",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null}],type:"Story",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("CometUFIShareActionLinkMenu_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIShareActionLinkMenu_story",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"shareable",plural:!1,selections:[{kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"}],storageKey:null},{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessagingInformTreatmentViewModel",kind:"LinkedField",name:"inform_treatment_for_messaging",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"treatment_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"messaging_inform_treatment_name",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}}();e.exports=a}),null);
__d("CometUFIShareActionLinkMenuItems.react",["CometRelay","CometSuspenseList.react","CometUFIShareActionLinkMenuItems_linkPreviewRoot.graphql","react","recoverableViolation","usePartialViewImpression","useUnifiedShareSheetLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFIShareActionLinkMenuItems_linkPreviewRoot.graphql"),a.LinkPreviewRoot),f=(e==null?void 0:e.default_share_items_firstBatch)||[],g=(e==null?void 0:e.qe_include_items)||[],i=(e==null?void 0:e.qe_exclude_items)||[];e=(e==null?void 0:e.default_share_items_lastBatch)||[];f=f.concat(g,i,e);g=c("useUnifiedShareSheetLogger")();var k=g.onSharesheetImpression;i=c("usePartialViewImpression")({onImpressionStart:function(){k({entry_point:a.feedLocation,shareable_entity_fbid:a.shareableID,sharing_component_name:"facebook_sharesheet"})}});return f.length<1?c("recoverableViolation")('Can not find any share options in "Share menu"',"comet_feed"):j.jsx("div",{ref:i,children:j.jsx(c("CometSuspenseList.react"),{revealOrder:"together",children:f.map(function(b,c){return j.jsx(d("CometRelay").MatchContainer,{match:b,props:{destination:a.destination,feedLocation:a.feedLocation,onClose:function(){return a.onClose(b.__typename)},pushPage:a.pushPage,shareableID:a.shareableID,shareSourceFeedType:a.shareSourceFeedType,shareType:a.shareType,size:a.size,storyData:a.storyData,url:a.url}},c)})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIShareActionLinkMenu.react",["fbt","ix","BaseMultiStepContainer.react","CAAWebClientLoggingEventSource","CometIcon.react","CometListCellPressable.react","CometListCellText.react","CometPopover.react","CometPopoverLoadingStateContent.react","CometRelay","CometUFIShareActionLinkMenuItems.react","CometUFIShareActionLinkMenuQuery.graphql","CometUFIShareActionLinkMenu_shareable.graphql","CometUFIShareActionLinkMenu_story.graphql","CometUnauthenticatedUFIUtils","TetraButton.react","fbicon","justknobx","react","unrecoverableViolation","useCAALoggedOutDialogWrapper","useGroupsCometSharePostEventsClickCallback"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l,m,n=m||(m=d("react")),o=m.useCallback;function p(a){var e,f,g=a.pushPage,m=a.props;a=a.queries;a=d("CometRelay").usePreloadedQuery(j!==void 0?j:j=b("CometUFIShareActionLinkMenuQuery.graphql"),a.shareMenuQueryReference);var p=d("CometRelay").useFragment(k!==void 0?k:k=b("CometUFIShareActionLinkMenu_shareable.graphql"),m.shareable),q=d("CometRelay").useFragment(l!==void 0?l:l=b("CometUFIShareActionLinkMenu_story.graphql"),m.parentStory);e=(q==null?void 0:q.id)!=null&&(q==null?void 0:q.url)!=null?{id:q==null?void 0:q.id,isSponsored:(q==null?void 0:q.sponsored_data)!=null,messagingInformTreatmentInfo:{messagingInformTreatmentName:q==null?void 0:(e=q.inform_treatment_for_messaging)==null?void 0:e.messaging_inform_treatment_name,treatmentType:q==null?void 0:(e=q.inform_treatment_for_messaging)==null?void 0:e.treatment_type},productData:m.productData,shareScrapeData:(e=a.storyLink)==null?void 0:e.share_scrape_data,url:q==null?void 0:q.url}:null;f=(f=(f=p==null?void 0:p.post_id)!=null?f:q==null?void 0:(f=q.shareable)==null?void 0:f.id)!=null?f:p==null?void 0:p.id;var r=o(function(){m.onClose()},[m]);a=a.link;if(a==null)throw c("unrecoverableViolation")("Cannot render without a link_preview","comet_feed");var s=c("justknobx")._("978");s=s?q==null?void 0:q.url:null;s=(q=(q=m.shareableUrl)!=null?q:s)!=null?q:p==null?void 0:p.url;q=h._("__JHASH__E1INKxrXP_F__JHASH__");var t=c("useCAALoggedOutDialogWrapper")({dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.UFI,title:q}),u=d("CometUnauthenticatedUFIUtils").shouldShowLoggedOutShareOptions(m.shareSourceFeedType);p="log_in_to_share_on_facebook";q=m.shareSourceFeedType;var v=m.shareType,w=c("useGroupsCometSharePostEventsClickCallback")({shareableID:f,shareEntryPoint:p,shareSourceFeedType:q,shareType:v});p=u?n.jsx(c("CometListCellPressable.react"),{addOnEnd:n.jsx(c("TetraButton.react"),{label:h._("__JHASH__4tqRhBQ7_o9__JHASH__"),onPress:t,reduceEmphasis:!0}),addOnStart:n.jsx(c("CometIcon.react"),{icon:d("fbicon")._(i("780283"),20)}),content:n.jsx(c("CometListCellText.react"),{headline:h._("__JHASH__tCqiWi2Co8h__JHASH__"),headlineLineLimit:1}),level:4,onPress:function(){t(),u&&w()},paddingHorizontal:4,paddingVertical:0}):null;return n.jsxs("div",{className:"xsag5q8 xz9dl7a",children:[p,n.jsx(c("CometUFIShareActionLinkMenuItems.react"),{LinkPreviewRoot:a,feedLocation:m.feedLocation,onClose:r,pushPage:g,shareSourceFeedType:q,shareType:v,shareableID:f,size:"small",storyData:e,url:s})]})}p.displayName=p.name+" [from "+f.id+"]";var q=h._("__JHASH__ecHJWmEqez8__JHASH__");function a(a){return n.jsx(c("CometPopover.react"),{"aria-label":q,testid:void 0,withArrow:!0,children:n.jsx("div",{className:"xw2csxc x1odjw0f x1cvmir6",children:n.jsx(c("BaseMultiStepContainer.react"),{fallback:n.jsx(c("CometPopoverLoadingStateContent.react"),{}),children:function(b){return n.jsx(p,babelHelpers["extends"]({pushPage:b},a))}})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);