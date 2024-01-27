;/*FB_PKG_DELIM*/

__d("VolunteeringOneClickCreationDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5390866184341330"}),null);
__d("VolunteeringOneClickCreationDialogQuery$Parameters",["VolunteeringOneClickCreationDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("VolunteeringOneClickCreationDialogQuery_facebookRelayOperation"),metadata:{},name:"VolunteeringOneClickCreationDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5487007661388072"}),null);
__d("WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters",["WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("WhatsAppCometPagesComposerInterceptionDialogQuery_facebookRelayOperation"),metadata:{},name:"WhatsAppCometPagesComposerInterceptionDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6735767953211490"}),null);
__d("CometComposerInterceptionPluginUtilsQuery.graphql",["CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"params"},c={defaultValue:null,kind:"LocalArgument",name:"target_id"},d={defaultValue:null,kind:"LocalArgument",name:"target_type"},e={alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"address",storageKey:null},h={alias:null,args:null,concreteType:"UnifiedInterceptionLocation",kind:"LinkedField",name:"location",plural:!1,selections:[g,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"latitude",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"longitude",storageKey:null}],storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"start_time",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"end_time",storageKey:null};h=[{alias:null,args:[{kind:"Variable",name:"target_id",variableName:"target_id"},{kind:"Variable",name:"target_type",variableName:"target_type"}],concreteType:"UnifiedInterceptionQuery",kind:"LinkedField",name:"unified_interception",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"request_param",variableName:"params"}],concreteType:"UnifiedInterceptionResponse",kind:"LinkedField",name:"decision",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"flow_type",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"should_perform_interception",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"auxiliary_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[f,{alias:null,args:null,kind:"ScalarField",name:"job_type",storageKey:null},h,i,{alias:null,args:null,concreteType:"Wage",kind:"LinkedField",name:"wage",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"max",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],type:"UnifiedInterceptionJobAuxiliaryData",abstractKey:null},{kind:"InlineFragment",selections:[i,{alias:null,args:null,kind:"ScalarField",name:"activity_title",storageKey:null},f,h,j,k,{alias:null,args:null,kind:"ScalarField",name:"location_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link_type",storageKey:null},e],type:"XFBUnifiedInterceptionVolunteeringAuxiliaryData",abstractKey:null},{kind:"InlineFragment",selections:[g,f,k,{alias:null,args:null,kind:"ScalarField",name:"external_image_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_data_from_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"location_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"photo_id",storageKey:null},j,i],type:"UnifiedInterceptionEventAuxiliaryData",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"should_update_content",storageKey:null}],type:"XFBUnifiedInterceptionCTWAAuxiliaryData",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"CometComposerInterceptionPluginUtilsQuery",selections:h,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,c,a],kind:"Operation",name:"CometComposerInterceptionPluginUtilsQuery",selections:h},params:{id:b("CometComposerInterceptionPluginUtilsQuery_facebookRelayOperation"),metadata:{},name:"CometComposerInterceptionPluginUtilsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="24626070316984079"}),null);
__d("CometComposerInterceptionRequestHandlerQuery.graphql",["CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"params"},c={defaultValue:null,kind:"LocalArgument",name:"target_id"},d={defaultValue:null,kind:"LocalArgument",name:"target_type"},e=[{alias:null,args:[{kind:"Variable",name:"target_id",variableName:"target_id"},{kind:"Variable",name:"target_type",variableName:"target_type"}],concreteType:"UnifiedInterceptionQuery",kind:"LinkedField",name:"unified_interception",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"request_param",variableName:"params"}],concreteType:"UnifiedInterceptionResponse",kind:"LinkedField",name:"decision",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_perform_interception",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"auxiliary_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"address",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_data_from_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"location_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"photo_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start_time",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],type:"UnifiedInterceptionEventAuxiliaryData",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"CometComposerInterceptionRequestHandlerQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,c,a],kind:"Operation",name:"CometComposerInterceptionRequestHandlerQuery",selections:e},params:{id:b("CometComposerInterceptionRequestHandlerQuery_facebookRelayOperation"),metadata:{},name:"CometComposerInterceptionRequestHandlerQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometComposerUnifiedInterceptors_intercept_configs.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometComposerUnifiedInterceptors_intercept_configs",selections:[{alias:null,args:null,concreteType:"PagesComposerInterceptionConfig",kind:"LinkedField",name:"config",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"interception_product_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_eligible_for_interception",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"whitelisted_attachment_types",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"blacklisted_attachment_types",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"supported_locales",storageKey:null}],storageKey:null}],type:"ComposerInterception",abstractKey:null};e.exports=a}),null);
__d("cometComposerAdminCrossPostingEligibilityChecker",["CometComposerAttachmentPluginTypes","CometComposerFooterAttachmentPluginTypes","CometComposerPostSettingFeatureTypes","CometComposerTaggerPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";var h=[(b=c("CometComposerAttachmentPluginTypes")).LINK,b.LOCATION,b.ANIMATED_IMAGE,b.FORMATTED_TEXT,b.MEDIA],i=[c("CometComposerTaggerPluginTypes").MINUTIAE,c("CometComposerTaggerPluginTypes").LOCATION],j=9;function k(){var a=Object.keys(c("CometComposerAttachmentPluginTypes")).filter(function(a){return!h.includes(a)}),b=Object.keys(c("CometComposerTaggerPluginTypes")).filter(function(a){return!i.includes(a)}),e=Array.from(d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.members());return new Set([].concat(a,b,e))}function l(a){var b;if(((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)!=null&&!h.includes(a.attachmentArea.activeAttachmentType))return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);if(((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").MEDIA&&((b=a.mediaAttachments)==null?void 0:b.find(function(a){return a.fileType==="VIDEO"}))!=null)return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);if(((b=a.attachmentArea)==null?void 0:b.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").MEDIA&&a.mediaAttachments!=null&&a.mediaAttachments.filter(function(a){return a.fileType==="PHOTO"}).length>j)return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);if(a.footerAttachmentArea!=null&&((b=a.footerAttachmentArea)==null?void 0:b.activeFooterAttachmentType)!=null)return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);return a.preAttachmentArea!=null&&a.preAttachmentArea.activePreAttachmentType!=null?new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]):null}function m(a){var b;if(((b=a.taggerData)==null?void 0:b.activeTaggerList)!=null){var c=new Set([]);(b=a.taggerData)==null?void 0:b.activeTaggerList.forEach(function(a){i.includes(a)||c.add(a)});if(c.size>0)return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST])}if(a.activityMinutiae!=null&&!i.includes(a.activityMinutiae.source))return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);return a.withTagIDsTracker!=null&&((b=a.withTagIDsTracker)==null?void 0:b.size)>0?new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]):null}function a(a){var b;if((a==null?void 0:(b=a.audience)==null?void 0:(b=b.privacy)==null?void 0:b.base_state)!=="EVERYONE")return new Set([d("CometComposerPostSettingFeatureTypes").CometComposerPostSettingFeatureTypes.ADMIN_CROSS_POST]);b=l(a);if(b!=null)return b;b=m(a);if(b!=null)return b;return a.adminCrossProfilePostingData!=null&&((b=a.adminCrossProfilePostingData)==null?void 0:(a=b.postingProfiles)==null?void 0:a.size)>0?k():new Set()}g.cometComposerAdminCrossPostingEligibilityChecker=a}),98);
__d("VolunteeringOneClickCreationDialog.entrypoint",["JSResourceForInteraction","VolunteeringOneClickCreationDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.pageID;return{queries:{dialogQueryReference:{parameters:c("VolunteeringOneClickCreationDialogQuery$Parameters"),variables:{pageID:a}}}}},root:c("JSResourceForInteraction")("VolunteeringOneClickCreationDialog.react").__setRef("VolunteeringOneClickCreationDialog.entrypoint")};g["default"]=a}),98);
__d("WhatsAppCometPagesComposerInterceptionDialog.entrypoint",["JSResourceForInteraction","WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{dialogQueryReference:{parameters:c("WhatsAppCometPagesComposerInterceptionDialogQuery$Parameters"),variables:{page_id:a.pageID}}}}},root:c("JSResourceForInteraction")("WhatsAppCometPagesComposerInterceptionDialog.react").__setRef("WhatsAppCometPagesComposerInterceptionDialog.entrypoint")};g["default"]=a}),98);
__d("CometComposerInterceptionCallNowHandler",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d,e){a=a.callNowHandler;e=(e=e.unified_interception)==null?void 0:e.decision;if(e==null||e.product_type!=="CALL_NOW")return;a(b,c,d)}f.handleCallNowInterceptionResponse=a}),66);
__d("CometComposerInterceptionEventsHandler",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){a=a.eventsHandler;d=(d=d.unified_interception)==null?void 0:d.decision;if(d==null||d.product_type!=="EVENT")return;d=(d==null?void 0:d.auxiliary_data)||{};var e=d.address,f=d.description,g=d.end_time,h=d.external_image_url,i=d.has_data_from_url,j=d.location_id,k=d.photo_id,l=d.start_time;d=d.title;a({extractedEventData:{address:e,description:f,endtime:g,externalImageUrl:h,hasDataFromURL:i,location:j!=null||e!=null?"IN_PERSON":void 0,locationID:j,startTime:l,themePhotoID:k,title:d},onHalt:b,publishPostHandler:c})}f.handleEventsInterceptionResponse=a}),66);
__d("CometComposerInterceptionFundraisingHandler",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){a=a.fundraisingHandler;d=(d=d.unified_interception)==null?void 0:d.decision;if(d==null||d.product_type!=="FUNDRAISER_DONATE_BUTTON")return;a({onClose:b,publishPostHandler:c})}f.handleFundraisingInterceptionResponse=a}),66);
__d("CometComposerInterceptionGetMessagesHandler",["JSResourceForInteraction","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=c("JSResourceForInteraction")("MessagingCometPagesComposerInterceptionDialog.react").__setRef("CometComposerInterceptionGetMessagesHandler");function a(a,b,d,e,f){var g=c("useCometLazyDialog")(h),i=g[0];return function(c){if(b===!0){c();return}var g=function(){a({isGetMessagesPostAttachmentOptional:!0,type:"MESSAGING_ADD_GET_MESSAGES_BUTTON"}),a({attachmentType:"GET_MESSAGES",type:"ACTIVATE_ATTACHMENT_TYPE"}),window.setTimeout(f,0)};i({interceptionEntryPoint:"profile_plus_feed",onClose:c,onContinue:g,pageID:d,publishPostHandler:c,sessionID:e});return}}function b(a,b,c){a=a.getMessagesHandler;c=(c=c.unified_interception)==null?void 0:c.decision;if(c==null||c.product_type!=="MESSAGEPAGE")return;a(b);return}g.useGetMessagesCometComposerInterceptionHandler=a;g.handleGetMessagesInterceptionResponse=b}),98);
__d("UnifiedInterceptionFlowTypeEnum.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["AUTO_CONVERT","DIALOG","INLINE","ONE_CLICK_CREATION","UNKNOWN"]);c=a;f["default"]=c}),66);
__d("UnifiedInterceptionInterceptAcceptFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744453");b=d("FalcoLoggerInternal").create("unified_interception_intercept_accept",a);e=b;g["default"]=e}),98);
__d("UnifiedInterceptionInterceptRejectFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744455");b=d("FalcoLoggerInternal").create("unified_interception_intercept_reject",a);e=b;g["default"]=e}),98);
__d("VolunteeringInterceptionUtils",["FBLogger","JSResourceForInteraction","UnifiedInterceptionInterceptAcceptFalcoEvent","UnifiedInterceptionInterceptRejectFalcoEvent","VolunteeringOneClickCreationDialog.entrypoint","unrecoverableViolation","useCometEntryPointDialog","useCometLazyDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=c("JSResourceForInteraction")("VolunteeringCometAutoConvertInfoDialog.react").__setRef("VolunteeringInterceptionUtils"),i=c("JSResourceForInteraction")("VolunteeringCometStructuredJobInfoDialog.react").__setRef("VolunteeringInterceptionUtils");function a(){throw c("FBLogger")("volunteering").mustfixThrow("Volunteering is deprecated and should no longer auto convert")}function b(a,b,d,e){var f=function(){c("UnifiedInterceptionInterceptAcceptFalcoEvent").log(function(){return{event_data:{},event_location:"unknown",interception_entry_point:"pages_feed",interception_flow:"dialog",interception_placement:"composer_post_button",interception_product:"volunteering",interception_target_type:"page",target_id:b,waterfall_session_id:e}});throw c("unrecoverableViolation")("Volunteering is deprecated and we should not show intercept","volunteering")},g=function(){c("UnifiedInterceptionInterceptRejectFalcoEvent").log(function(){return{event_data:{},event_location:"unknown",interception_entry_point:"pages_feed",interception_flow:"dialog",interception_placement:"composer_post_button",interception_product:"volunteering",interception_target_type:"page",target_id:b,waterfall_session_id:e}}),d()};a({loggingSourceComponent:"pages_composer",onProceed:f},g)}function d(){throw c("FBLogger")("volunteering").mustfixThrow("Volunteering is deprecated and should no longer create opportunities")}function e(){var a=c("useCometLazyDialog")(i);a=a[0];return a}function f(){var a=c("useCometLazyDialog")(h);a=a[0];return a}function j(a){a=c("useCometEntryPointDialog")(c("VolunteeringOneClickCreationDialog.entrypoint"),{pageID:a});a=a[0];return a}g.handleVolunteeringAutoConvertInterceptionResponse=a;g.handleVolunteeringDialogInterceptionResponse=b;g.handleVolunteeringOneClickCreationInterceptionResponse=d;g.useVolunteeringInterceptDialog=e;g.useVolunteeringAutoConvertDialog=f;g.useVolunteeringOneClickCreationDialog=j}),98);
__d("CometComposerInterceptionVolunteeringHandler",["FBLogger","VolunteeringInterceptionUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e){b=b.volunteeringHandler;d=(d=d.unified_interception)==null?void 0:d.decision;if(d==null||d.product_type!=="VOLUNTEERING")return;var f=d==null?void 0:d.auxiliary_data;if((f==null?void 0:f.__typename)!=="XFBUnifiedInterceptionVolunteeringAuxiliaryData")return;var g=f.activity_title,h=f.description,i=f.end_time,j=f.link_type,k=f.location,l=f.location_type,m=f.product_type,n=f.start_time;f=f.title;b(a,{activity_title:g,description:h,end_time:i,link_type:j,location:k,location_type:l,product_type:m,start_time:n,title:f},(b=d.flow_type)!=null?b:"UNKNOWN",c,e)}function b(a,b,e){var f=d("VolunteeringInterceptionUtils").useVolunteeringInterceptDialog();return function(g,h,i,j,k){if(e==null){k();return}switch(i){case"AUTO_CONVERT":d("VolunteeringInterceptionUtils").handleVolunteeringAutoConvertInterceptionResponse();break;case"DIALOG":d("VolunteeringInterceptionUtils").handleVolunteeringDialogInterceptionResponse(f,a,k,b);break;case"ONE_CLICK_CREATION":d("VolunteeringInterceptionUtils").handleVolunteeringOneClickCreationInterceptionResponse();break;case"INLINE":case"UNKNOWN":default:throw c("FBLogger")("volunteering").mustfixThrow("unsupported interception flow type")}}}g.handleVolunteeringInterceptionResponse=a;g.useVolunteeringAutoConvertCometComposerInterceptionHandler=b}),98);
__d("composerGetWhatsAppMessagesReducer",["CometComposerAttachmentPluginTypes","CometComposerFooterAttachmentPluginTypes","Promise","composerAttachmentAreaReducer"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(a,c){var d,e=c.item.id;d=(d=c.item.uri)!=null?d:"";var f=c.item.height,g=c.item.width;d=babelHelpers["extends"]({data:{id:e},entID:e,fileObjectURL:d,fileType:"PHOTO",state:"PREEXISTING",url:d,useCDNPreview:!0},f!=null&&g!=null&&{height:f,width:g});f=(h||(h=b("Promise"))).resolve({attachmentID:c.item.id,attachmentType:"PHOTO"});e=(g={},g[e]={cancelUpload:function(){},onFileComplete:f,onUploadCancel:new h(function(a){}),resolveFileUpload:function(){}},g);return babelHelpers["extends"]({},a,{isGetWhatsAppMessagePostAttachmentData:{catalogAttachmentItemName:c.item.catalog_item_name,catalogAttachmentItemPrice:c.item.catalog_item_price,isWhatsAppCatalogAttachment:!0},mediaAttachments:[d],mediaUploadStatuses:e})}function j(a,b){return((b=a.isGetWhatsAppMessagePostAttachmentData)==null?void 0:b.isWhatsAppCatalogAttachment)===!0?babelHelpers["extends"]({},a,{isGetWhatsAppMessagePostAttachmentData:{},mediaAttachments:null}):a}function a(a,b){switch(b.type){case"ADD_GET_WHATSAPP_MESSAGES_BUTTON":return babelHelpers["extends"]({},a,{isGetWhatsAppMessagePost:!0,isGetWhatsappMessagesPostAttachmentOptional:b.isGetWhatsappMessagesPostAttachmentOptional});case"ADD_CATALOG_ATTACHMENT_ITEMS":return i(a,b);case"REMOVE_WHATSAPP_CATALOG_ATTACHMENT_ITEM":return j(a,b);case"REMOVE_GET_WHATSAPP_MESSAGES_BUTTON":return babelHelpers["extends"]({},a,{isGetWhatsAppMessagePost:null,isGetWhatsAppMessagePostAttachmentData:{}});case"REMOVE_ATTACHMENT_TYPE":if(d("composerAttachmentAreaReducer").getCanAlterAttachmentData(b,"GET_WHATSAPP_MESSAGES",a)){var e,f;b=(b=a.attachmentArea)==null?void 0:b.activeAttachmentType;e=(e=a.footerAttachmentArea)==null?void 0:e.activeFooterAttachmentType;var g=a.mediaAttachments,h=null;((f=a.isGetWhatsAppMessagePostAttachmentData)==null?void 0:f.isWhatsAppCatalogAttachment)===!0?(b=void 0,e=d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES,g=null,h=!0):(g||[]).length>0&&(b=c("CometComposerAttachmentPluginTypes").MEDIA);return babelHelpers["extends"]({},a,{attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:b}),footerAttachmentArea:{activeFooterAttachmentType:e},isGetWhatsAppMessagePost:h,isGetWhatsAppMessagePostAttachmentData:{},mediaAttachments:g})}}return a}g["default"]=a}),98);
__d("CometComposerInterceptionWhatsAppMessagesHandler",["fbt","CometComposerFooterAttachmentPluginTypes","JSResourceForInteraction","WhatsAppCometPagesComposerInterceptionDialog.entrypoint","composerFooterAttachmentAreaChecker","composerFooterAttachmentAreaReducer","composerGetWhatsAppMessagesReducer","lazyLoadComponent","react","useCometComposerPushPage","useCometEntryPointDialog","useComposerViewStateReducer"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k=c("lazyLoadComponent")(c("JSResourceForInteraction")("CometComposerGetWhatsAppMessagesVerificationFlowContainer.react").__setRef("CometComposerInterceptionWhatsAppMessagesHandler"));function a(a,b,e,f,g,i,l){c("useComposerViewStateReducer")(c("composerGetWhatsAppMessagesReducer"));c("useComposerViewStateReducer")(d("composerFooterAttachmentAreaReducer").composerFooterAttachmentAreaReducer,c("composerFooterAttachmentAreaChecker"));var m=c("useCometEntryPointDialog")(c("WhatsAppCometPagesComposerInterceptionDialog.entrypoint"),{pageID:e,shouldUpdateContent:!1}),n=m[0],o=c("useCometComposerPushPage")();return function(c,m,p){if(f===!0){m();return}var q=function(){a({type:"ADD_GET_WHATSAPP_MESSAGES_BUTTON"}),a({footerAttachmentType:d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES,type:"ACTIVATE_FOOTER_ATTACHMENT_TYPE"})},r=function(b,d){c(),b!=null?(q(),g===!0&&a({type:"WHATSAPP_BOOST_POST_TOGGLE_ON"}),d===!0&&l!==!1&&i!=null&&(i(!0),a({type:"WHATSAPP_BOOST_POST_TOGGLE_ON"}))):o(h._("__JHASH__sgvnIxYrqEL__JHASH__"),function(a){a=a.onReturn;return j.jsx(k,{addAttachment:q,onClose:a,pageID:e})})};n({onClose:c,onContinue:r,pageID:e,publishPostHandler:m,sessionID:b,shouldUpdateContent:p},m);return}}function b(a,b,c,d){a=a.getWhatsAppMessagesHandler;d=(d=d.unified_interception)==null?void 0:d.decision;var e=(d==null?void 0:d.auxiliary_data)||{};e=(e=e.should_update_content)!=null?e:!1;if(d==null||d.product_type!=="WHATSAPP_PAGE")return;a(b,c,e);return}g.useWhatsAppMessagesCometComposerInterceptionHandler=a;g.handleWhatsAppMessagesInterceptionResponse=b}),98);
__d("CometComposerInterceptionWhatsappDeeplinkHandler",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){a=a.whatsAppDeeplinkHandler;d=(d=d.unified_interception)==null?void 0:d.decision;if(d==null||d.product_type!=="WHATSAPP_DEEPLINK_PAGE")return;a({onClose:b,publishPostHandler:c})}f.handleWhatsAppDeeplinkInterceptionResponse=a}),66);
__d("UnifiedInterceptionPlacementTypeEnum.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["BIZ_COMPOSER","COMPOSER","COMPOSER_AFTER_PARTY","COMPOSER_POST_BUTTON","COMPOSER_SCHEDULE_POST","COMPOSER_SCHEDULE_STORY","CREATOR_COMPOSER_SCHEDULE_POST","MAIN_CALENDAR","POST_CTA"]);c=a;f["default"]=c}),66);
__d("CometComposerInterceptionPluginUtils",["CometComposerInterceptionCallNowHandler","CometComposerInterceptionEventsHandler","CometComposerInterceptionFundraisingHandler","CometComposerInterceptionGetMessagesHandler","CometComposerInterceptionPluginUtilsQuery.graphql","CometComposerInterceptionVolunteeringHandler","CometComposerInterceptionWhatsAppMessagesHandler","CometComposerInterceptionWhatsappDeeplinkHandler","CometRelay","FBLogger","isStringNullOrEmpty","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i={unified_interception:{decision:{auxiliary_data:null,flow_type:"UNKNOWN",product_type:"UNKNOWN",should_perform_interception:!1}}},j={},k="comet_composer_unified_interception_platform",l=h!==void 0?h:h=b("CometComposerInterceptionPluginUtilsQuery.graphql");function a(a,b,d,e,f,g,h,i){var j=function(c){return m(a,b,c,d,g,h,i)};e=n(d,f,e,j);if(e==null){h();return}p(b,e,function(a){c("FBLogger")(k).info(a.message),s(j)},function(a){r(a,f.sessionID,!1,j)})}function e(a){var b="";if(a!=null)switch(a.__type){case"editor-state-based":b=a.draftEditorState.getCurrentContent().getPlainText();break;case"plain-text":b=a.text;break}return b}function m(a,b,c,e,f,g,h){var i;i=(i=c.unified_interception)==null?void 0:i.decision;if(!Boolean(i==null?void 0:i.should_perform_interception)){g();return}a({type:"set_ignore_dirty_flag",value:!0});if((i==null?void 0:i.product_type)==null){g();return}switch(i.product_type){case"MESSAGEPAGE":d("CometComposerInterceptionGetMessagesHandler").handleGetMessagesInterceptionResponse(h,g,c);break;case"WHATSAPP_PAGE":d("CometComposerInterceptionWhatsAppMessagesHandler").handleWhatsAppMessagesInterceptionResponse(h,f,g,c);break;case"VOLUNTEERING":d("CometComposerInterceptionVolunteeringHandler").handleVolunteeringInterceptionResponse(b,h,e,c,g);break;case"FUNDRAISER_DONATE_BUTTON":d("CometComposerInterceptionFundraisingHandler").handleFundraisingInterceptionResponse(h,f,g,c);break;case"EVENT":d("CometComposerInterceptionEventsHandler").handleEventsInterceptionResponse(h,f,g,c);break;case"WHATSAPP_DEEPLINK_PAGE":d("CometComposerInterceptionWhatsappDeeplinkHandler").handleWhatsAppDeeplinkInterceptionResponse(h,f,g,c);break;case"CALL_NOW":d("CometComposerInterceptionCallNowHandler").handleCallNowInterceptionResponse(h,f,g,e,c);break;default:g();break}}function n(a,b,c,d){var e=b.hasWhatsAppDeeplink,f=b.loggingEntryPoint,g=b.placement,h=b.sessionID,i=b.targetID;b=b.targetType;if(!o(h,g)){s(d);return null}c=t((d=c)!=null?d:[]);d={has_whatsapp_deeplink:e,logging_data:{entry_point:f,session_id:h},photo_ids:c,placement:g,post_text:a};return{params:d,target_id:i,target_type:b}}function o(a,b){b=b==="COMPOSER";if(!b&&j[a]){c("FBLogger")(k).info("Already performed a successful interception in this session");return!1}return!0}function p(a,b,c,e){var f=d("relay-runtime").getRequest(l);f=d("relay-runtime").createOperationDescriptor(f,b);var g=a.retain(f),h=d("CometRelay").fetchQuery(a,l,b).subscribe({error:function(a){q({queryRetainDisposable:g,querySubscription:h}),c(a)},next:function(a){q({queryRetainDisposable:g,querySubscription:h}),e(a)}})}function q(a){var b=a.queryRetainDisposable;a=a.querySubscription;a&&a.unsubscribe();b&&b.dispose()}function r(a,b,d,e){var f=a.unified_interception;if(!f){c("FBLogger")(k).info("Null value received from server for interception response");s(e);return}d||(j[b]=!0);s(e,a)}function s(a,b){b===void 0&&(b=i),a&&a(b)}function t(a){return a.filter(function(a){return a.fileType==="PHOTO"&&(a.state==="UPLOADED"||a.state==="PREEXISTING")}).map(function(a){return a.data&&((a=a.data.id)!=null?a:"")}).filter(function(a){return!c("isStringNullOrEmpty")(a)})}g.performInterception=a;g.getPostText=e;g.validateInterceptionRequest=o;g.disposeQuery=q;g.getPhotoIds=t}),98);
__d("UnifiedInterceptionProductTypeEnum.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["BRANDAWARENESS","BRANDED_CONTENT","BRANDTAGGING","CALENDAR_HOTSPOTS","CALL_NOW","EVENT","FUNDRAISER_DONATE_BUTTON","HASHTAG","JOB","LDP","MARKETPLACE_VERTICALS","MESSAGEPAGE","MESSAGE_BUTTON","MOVIE","OFFER","PAGES_INTEGRITY_FAKE_NEWS","PAGES_INTEGRITY_UNPUBLISHED_CONTENT","PRODUCT_TAGGING_NUX","QPC","SCHEDULE_POST_TIME","SELL_MESSAGE","SERVICE","UNKNOWN","VOLUNTEERING","WHATSAPP_DEEPLINK_PAGE","WHATSAPP_PAGE"]);c=a;f["default"]=c}),66);
__d("CometComposerInterceptionRequestHandler",["CometComposerInterceptionPluginUtils","CometComposerInterceptionRequestHandlerQuery.graphql","CometRelay","FBLogger","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i={unified_interception:{decision:{auxiliary_data:null,product_type:"UNKNOWN",should_perform_interception:!1}}},j={},k="comet_composer_unified_interception_platform",l=h!==void 0?h:h=b("CometComposerInterceptionRequestHandlerQuery.graphql");function a(a,b,d,e,f,g,h,i){var j=a==null?void 0:a.mediaAttachments,l=function(c){return m(a,b,c,g,h,i)};d=o(d,f,j,l);if(d==null){h();return}p(e,d,function(a){c("FBLogger")(k).info(a.message),r(l)},function(a){q(a,f.sessionID,!1,l)})}function m(a,b,c,d,e,f){var g;g=(g=c.unified_interception)==null?void 0:g.decision;if(!Boolean(g==null?void 0:g.should_perform_interception)){e();return}b({type:"set_ignore_dirty_flag",value:!0});if((g==null?void 0:g.product_type)==null){e();return}g=n(g==null?void 0:g.product_type,f);if(g==null){e();return}g({onHalt:d,publishPostHandler:e,response:c,viewState:a,viewStateDispatcher:b})}function n(a,b){b=b.find(function(b){return b.serverName===a});return b==null?void 0:b.interceptHandler}function o(a,b,c,e){var f=b.loggingEntryPoint,g=b.placement,h=b.sessionID,i=b.targetID;b=b.targetType;if(!d("CometComposerInterceptionPluginUtils").validateInterceptionRequest(h,g)){r(e);return null}c=d("CometComposerInterceptionPluginUtils").getPhotoIds((e=c)!=null?e:[]);e={logging_data:{entry_point:f,session_id:h},photo_ids:c,placement:g,post_text:a};return{params:e,target_id:i,target_type:b}}function p(a,b,c,e){var f=d("relay-runtime").getRequest(l);f=d("relay-runtime").createOperationDescriptor(f,b);var g=a.retain(f),h=d("CometRelay").fetchQuery(a,l,b).subscribe({error:function(a){d("CometComposerInterceptionPluginUtils").disposeQuery({queryRetainDisposable:g,querySubscription:h}),c(a)},next:function(a){d("CometComposerInterceptionPluginUtils").disposeQuery({queryRetainDisposable:g,querySubscription:h}),e(a)}})}function q(a,b,d,e){var f=a.unified_interception;if(!f){c("FBLogger")(k).info("Null value received from server for interception response");r(e);return}d||(j[b]=!0);r(e,a)}function r(a,b){b===void 0&&(b=i),a&&a(b)}g.performInterception=a}),98);
__d("translateComposerAttachmentToInterceptAttachmentType",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(a==null)return"STATUS";switch(a){case"EVENT":return"EVENT";case"FILE":return"FILE";case"CREATE_JOB":return"JOB_OPENING";case"MEDIA":return"MEDIA";case"POLL":return"Q_AND_A";case"LINK":return"LINK";case"ANIMATED_IMAGE":case"SHARE":default:return null}}f["default"]=a}),66);
__d("getIsInterceptAttachmentCompatible",["translateComposerAttachmentToInterceptAttachmentType"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){a=(a=a.attachmentArea)==null?void 0:a.activeAttachmentType;if(a==null)return!0;var d=b.allowedConcurrentAttachments;d=d.includes(c("translateComposerAttachmentToInterceptAttachmentType")(a));b=b.disallowedConcurrentAttachments;b=b.includes(c("translateComposerAttachmentToInterceptAttachmentType")(a));return d&&!b}g["default"]=a}),98);
__d("getIsInterceptLocaleSupported",["IntlCurrentLocale"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("IntlCurrentLocale").code;for(var d=a,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;if(g.includes("XX")&&g.includes(b.substring(0,b.length-2)))return!0}return a.includes(b)}g["default"]=a}),98);
__d("getEligibleInterceptionDefinitions",["cometComposerAttachmentsEligibilityChecker","getIsInterceptAttachmentCompatible","getIsInterceptLocaleSupported"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return b==null?[]:b.filter(function(b){var d;if(!b.getIsEligible(a))return!1;if(!c("getIsInterceptAttachmentCompatible")(a,b))return!1;var e=b.sproutName;if((a==null?void 0:(d=a.attachmentArea)==null?void 0:d.activeAttachmentType)!=null&&e!=null){d=c("cometComposerAttachmentsEligibilityChecker")(a);if(d.has(e))return!1}return!c("getIsInterceptLocaleSupported")(b.supportedLocales)?b.getIsLocaleSupportedOverride!=null&&b.getIsLocaleSupportedOverride()?b:!1:b})}g["default"]=a}),98);
__d("useCometComposerUnifiedInterceptors",["CometRelay","UnifiedInterceptionProductTypeEnum.facebook","useCometComposerUnifiedInterceptors_intercept_configs.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("useCometComposerUnifiedInterceptors_intercept_configs.graphql");function a(a,b,e){a=d("CometRelay").useFragment(i,a);var f=a==null?void 0:a.config;return b==null?void 0:b.map(function(a){var b=f==null?void 0:f.find(function(b){return c("UnifiedInterceptionProductTypeEnum.facebook").cast(b==null?void 0:b.interception_product_type)===a.serverName});if(b==null)return null;var d=b.blacklisted_attachment_types,g=b.is_eligible_for_interception,h=b.supported_locales;b=b.whitelisted_attachment_types;var i=a.interceptHandler(babelHelpers["extends"]({},e));return babelHelpers["extends"]({},a,{allowedConcurrentAttachments:b,disallowedConcurrentAttachments:d,interceptHandler:i,isEligibleForInterception:(b=g)!=null?b:!1,supportedLocales:h})}).filter(Boolean)}g["default"]=a}),98);
__d("composerDirtyStateViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"set_ignore_dirty_flag":return babelHelpers["extends"]({},a,{ignoreDirtyFlag:b.value})}return a}f["default"]=a}),66);
__d("viewStateUtils",["CometComposerAttachmentPluginTypes","CometComposerSATPContext","cometFormattedTextIneligibilityCheck","react","useComposerFeatureIneligibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(a){return(a==null?void 0:a.mediaAttachments)&&a.mediaAttachments.some(function(a){return a.fileType==="PHOTO"})||!1}function b(a){return(a==null?void 0:a.formattingType)==="SATP"}function e(a){var b=i(c("CometComposerSATPContext")),d=b.satpMaxNewLines;b=b.satpTextCharLimit;var e=c("useComposerFeatureIneligibility")();return c("cometFormattedTextIneligibilityCheck")(a,b,d)||e.has(c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT)}function f(a){return((a=a.activityMinutiae)==null?void 0:a.objectID)!=null}function j(a){return a.gifMetadata!=null}function k(a){return(a=(a=(a==null?void 0:a.mediaAttachments)&&a.mediaAttachments.filter(function(a){return a.fileType==="PHOTO"}))==null?void 0:a.length)!=null?a:0}function l(a){a=a==null?void 0:a.match(/(^|\W)(#[a-zA-Z]*[\w]*)/gi);return a!=null&&a.length>0}function m(a){if(a==null)return!1;if(a.length<=10)return!1;var b=0,c=0;a.split("").forEach(function(a){a.match(/[^\s0-9]/)&&(a.toLowerCase()===a?c++:a.toUpperCase()===a&&b++)});return c<=b}g.viewStateHasPhotoAttachments=a;g.viewStateHasSATP=b;g.useIsSATPDisabled=e;g.viewStateHasFeeling=f;g.viewStateHasGIF=j;g.getNumImageAttachments=k;g.containsHashtag=l;g.hasTooManyCaps=m}),98);
__d("XFBCreatorRecommendation.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["AB_TEST_UNIFIED","ADD_CHECKIN_NONVIDEO","ADD_EMOJI","ADD_FEELING_NONVIDEO","ADD_GIF","ADD_GIF_NONVIDEO","ADD_HASHTAG_NONVIDEO","ADD_LOCATION_REEL","ADD_ONE_PHOTO_NONVIDEO","ADD_PHOTO","ASK_FOR_ENGAGEMENT_REEL","ASK_FOR_FOLLOWS_NONVIDEO","ASK_FOR_FOLLOWS_REEL","ASK_FOR_SHARES_NONVIDEO","ASK_FOR_SHARES_REEL","ASK_QUESTION_IN_CAPTION_REEL","ASK_QUESTION_IN_CAPTION_VOD","CAPTION_LENGTH_NONVIDEO","CAPTION_TOO_LONG_REEL","CAPTION_TOO_MANY_CAPS_NONVIDEO","CAPTION_TOO_MANY_CAPS_REEL","COLLAB_REEL","CONTENT_TAGS","CROSSPOST","CUSTOM_LABELS","CUSTOM_PRIVACY_SETTINGS","CUSTOM_REEL_THUMBNAIL","CUSTOM_VOD_THUMBNAIL","EMBEDDABLE","ENGAGE_IN_COMMENTS","FIVE_OR_FEWER_HASHTAGS_REEL","FIVE_OR_FEWER_HASHTAGS_VOD","FREQUENTLY_SELF_COMMENT","HASHTAGS_MULTIPLE_REEL","HASHTAGS_REEL","HAVE_FEELING","MENTIONS_REEL","NON_HORIZONTAL_REEL","NON_HORIZONTAL_VOD","ONLY_ONE_PHOTO_NONVIDEO","PUBLISH_DAILY_REELS","REEL_CAPTION_LENGTH","REEL_NEEDS_CAPTION","REEL_NO_URL_IN_CAPTION","REMIX_ENABLE","REMOVE_EMOJI","RESHARE_REEL","RESHARE_REEL_TO_GROUP","RESHARE_REEL_TO_STORY","RESHARE_VOD","RESHARE_VOD_TO_GROUP","RESHARE_VOD_TO_STORY","RESPOND_TO_QUESTIONS_IN_COMMENTS","SCHEDULE_REEL","SELF_COLLAB","SELF_COLLAB_REEL","SELF_CROSSPOST","STARS_ENABLE_ON_REEL","USE_PHOTOS_LAYOUT","USE_SATP_NONVIDEO","VOD_NO_URL_IN_DESCRIPTION","VOD_PLAYLIST","WITH_TAG_REEL"]);c=a;f["default"]=c}),66);