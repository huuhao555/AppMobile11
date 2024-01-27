;/*FB_PKG_DELIM*/

__d("CometWarningScreenOverlay_data$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"content_id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"validator",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},k=[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"CometWarningScreenOverlay_data$normalization",selections:[{alias:null,args:[{kind:"Literal",name:"color",value:"fds-black"}],concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[a,b,c,d],storageKey:'icon(color:"fds-black")'},e,{alias:null,args:null,concreteType:"InformTreatmentViewModel",kind:"LinkedField",name:"inform_treatment_view_model",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"heading",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body_text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"metadata",storageKey:null},{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"icon",plural:!1,selections:[f,a,b,c,d],storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentButton",kind:"LinkedField",name:"button_list",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ixt_action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"action_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentLoggingInfo",kind:"LinkedField",name:"logging_info",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},i],storageKey:null},e,{alias:null,args:null,concreteType:"InformTreatmentLearnMoreViewModel",kind:"LinkedField",name:"learn_more",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_misinfo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"content_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"headline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"meta",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"instant_feedback",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"instant_feedback_undo",storageKey:null},{alias:null,args:null,concreteType:"InformTreatmentLoggingInfo",kind:"LinkedField",name:"logging_info",plural:!1,selections:[i],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_content",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"followup_content_indented",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"followup_meta",storageKey:null},{alias:null,args:null,concreteType:"ManualFactCheck",kind:"LinkedField",name:"fact_check_followup_content",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"external_uri",storageKey:null},{alias:null,args:null,concreteType:"FactCheckProvider",kind:"LinkedField",name:"provider",plural:!1,selections:[f,j],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:k,storageKey:null},j],storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"fact_check_badge",plural:!1,selections:k,storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_chevron",storageKey:null},{alias:null,args:null,concreteType:"WarningScreenAction",kind:"LinkedField",name:"warning_screen_actions",plural:!0,selections:[g,{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"label",plural:!1,selections:k,storageKey:null}],storageKey:null}],storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"container_story_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inform_session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_feed_simplification_design",storageKey:null}]}}();e.exports=a}),null);
__d("MWPinnedMessagesDialogNUX.react",["fbt","MWDialogText.react","MWXCardedDialog.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k=h._("__JHASH__sW-BtaHXwmf__JHASH__"),l=h._("__JHASH__zyNfJtuYMJM__JHASH__");function a(a){var b=a.onClose,d=a.onDismiss,e=a.pinMessageHandler;return j.jsx(c("MWXCardedDialog.react"),{hasTextOnlyContent:!0,onClose:b,primaryCallToAction:{label:h._("__JHASH__KAotMSgqN_-__JHASH__"),onPress:function(){d(),e(),b()}},secondaryCallToAction:{label:h._("__JHASH__YEBZoAl34dG__JHASH__"),onPress:b},title:k,withCloseButton:!0,children:j.jsx(c("MWDialogText.react"),{align:"center",color:"primary",children:l})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);