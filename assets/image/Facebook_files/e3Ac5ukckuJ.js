;/*FB_PKG_DELIM*/

__d("CometPrivacyIcon_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometPrivacyIcon_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacyIcon_image.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacyIcon_image",selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],type:"Image",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorEntryPointIcon_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEntryPointIcon_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointMatchContainer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEntryPointMatchContainer_renderer",selections:[{alias:null,args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Literal",name:"supported",value:"2NC68H"}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometComposerPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointIcon_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLabel_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLabelEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointToggle_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLeftRailButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLeftRailButtonEntryPointRenderer",abstractKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}}();e.exports=a}),null);
__d("useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer",selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"};e.exports=a}),null);
__d("PrivacyRowInput_fragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PrivacyRowInput_fragment",selections:[{kind:"InlineDataFragmentSpread",name:"PrivacyRowInput_inline",selections:[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],args:null,argumentDefinitions:[]}],type:"PrivacyRowInput",abstractKey:null};e.exports=a}),null);
__d("PrivacyRowInput_inline.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"PrivacyRowInput_inline"};e.exports=a}),null);
__d("CometPrivacySelectorTooltip_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPrivacySelectorTooltip_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorUneditable_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorUneditable_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorUneditable_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorUneditable_renderer$normalization",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Literal",name:"supported",value:"2NC68H"}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometComposerPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointIcon_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLabel_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLabelEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointToggle_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLeftRailButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLeftRailButtonEntryPointRenderer",abstractKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}]};e.exports=a}),null);
__d("CometPrivacySelectorUneditable_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorUneditable_renderer",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer"},{args:[{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}],kind:"FragmentSpread",name:"CometPrivacySelectorEntryPointMatchContainer_renderer"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacyIcon",["CometRelay","TintableIconSource","coerceRelayImage","react","useCometPrivacyIcon_image.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useMemo,k=[8,10,12,16,18,20,24,28,32,48],l=[20,24],m=[20];function n(a,e){var f=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacyIcon_image.graphql"),a);return j(function(){if(f==null)return null;var a=f.height,b=f.scale,d=f.width;if(a==null||b==null||d==null)return null;var g=Math.max(d,a)/b;d=e.find(function(a){return a>=g});return d==null?null:new(c("TintableIconSource"))("FB",c("coerceRelayImage")(f),d)},[f,e])}function a(a){return n(a,k)}function e(a){return n(a,l)}function f(a){return n(a,m)}g.useCometPrivacyIcon=a;g.useCometPrivacyIconForSkittleIcon=e;g.useCometPrivacyIconForMenuItem=f}),98);
__d("CometPrivacyIcon.react",["CometPrivacyIcon_scope.graphql","CometRelay","TetraIcon.react","react","stylex","useCometPrivacyIcon"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react"),l={marginEnd4:{marginEnd:"xw3qccf",marginLeft:null,marginRight:null,$$css:!0},root:{alignItems:"x6s0dn4",display:"x3nfvp2",justifyContent:"xl56j7k",$$css:!0}};function a(a){var e=a["aria-hidden"];e=e===void 0?!1:e;var f=a.color;f=f===void 0?"secondary":f;var g=a.disabled;g=g===void 0?!1:g;var j=a.marginEnd;a=a.scope;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacyIcon_scope.graphql"),a);var m=a.icon_image;a=a.label;var n=d("useCometPrivacyIcon").useCometPrivacyIcon(m);if(n==null)return null;m=m==null?void 0:m.name;return k.jsx("div",{"aria-hidden":e,className:(i||(i=c("stylex")))(l.root,j===4&&l.marginEnd4),children:k.jsx(c("TetraIcon.react"),{alt:(m=a)!=null?m:"",color:g?"disabled":f,disabled:g,icon:n,testid:void 0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorButtonSavingOverlay.react",["CometProgressIndicator.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.isSaving;return!a?null:i.jsx("div",{className:"x1ey2m1c xds687c x6ikm8r x10wlt62 x10l6tqk x17qophe x13vifvy x6s0dn4 x78zum5 xl56j7k",children:i.jsx(c("CometProgressIndicator.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorTooltip.react",["fbt","CometPrivacySelectorTooltip_scope.graphql","CometRelay","CometTooltip.react","gkx","killswitch","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||d("react");function l(){return h._("__JHASH__aqia400_2ly__JHASH__")}l.displayName=l.name+" [from "+f.id+"]";function a(a){var e=a.children,f=a.entryPointHasLabel,g=a.isLoading;a=a.scope;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPrivacySelectorTooltip_scope.graphql"),a);var h=a.can_viewer_edit,j=a.description,m=a.extended_description;a=a.label;if(g)return k.jsx(c("CometTooltip.react"),{tooltip:k.jsx(l,{}),children:e});g=c("killswitch")("COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED");var n=c("gkx")("1341692");return g&&h||f&&j===a&&(!n||m==null)?e:k.jsx(c("CometTooltip.react"),{tooltip:n&&m!=null?m:j,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorEntryPointIcon.react",["fbt","CometFutureOfFeedStoryContext","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorEntryPointIcon_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=k||(k=d("react")),m=k.useContext,n={centerContent:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},hiddenLabel:{clip:"xzpqnlu",clipPath:"x179tack",position:"x10l6tqk",$$css:!0},invisible:{visibility:"xlshs6z",$$css:!0},marginFixer:{marginStart:"x139jcc6",marginLeft:null,marginRight:null,$$css:!0},pressableOverlayPressed:{backgroundColor:"x1lxk4cn",$$css:!0},pressablePosition:{position:"x1uhb9sk",$$css:!0},savingOverlayContainer:{position:"x1n2onr6",$$css:!0}};function a(a){var e=a.isEnabled,f=a.isSaving,g=a.onPress,k=a.renderer;a=a.triggerRef;k=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPrivacySelectorEntryPointIcon_renderer.graphql"),k);var o=m(c("CometFutureOfFeedStoryContext"));o=o.shouldOverlayHeaderOverAttachment;k=(k=k.source)==null?void 0:k.scope;if(k==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");var p=h._("__JHASH__BwgsZCfv6D5__JHASH__");e=f||!e;o=l.jsxs("div",{className:(j||(j=c("stylex")))(n.centerContent,f&&n.invisible),children:[l.jsx(c("CometPrivacyIcon.react"),{color:o?"white":void 0,disabled:e,marginEnd:4,scope:k}),l.jsx("div",{className:"x139jcc6"})]});var q=k.description;q=q!=null?l.jsx("span",{className:"xzpqnlu x179tack x10l6tqk",children:h._("__JHASH__tXZ5JCHXK7E__JHASH__",[h._param("audience",q)])}):null;p=l.jsxs(c("CometPressable.react"),{"aria-label":p,disabled:e,display:"inline",onPress:g,overlayOffset:4,overlayPressedStyle:n.pressableOverlayPressed,overlayRadius:"50%",ref:a,xstyle:n.pressablePosition,children:[l.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:f}),o]});return l.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!1,isLoading:f,scope:k,children:l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:l.jsxs("span",{className:"x1n2onr6",children:[q,p]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorEntryPointMatchContainer.react",["CometPrivacySelectorEntryPointMatchContainer_renderer.graphql","CometRelay","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.props;a=a.renderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorEntryPointMatchContainer_renderer.graphql"),a);a=a.entry_point_renderer;if(a==null)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector without an entry point","comet_privacy_selector");return j.jsx(d("CometRelay").MatchContainer,{match:a,props:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PrivacyRowInput",["CometRelay","PrivacyRowInput_fragment.graphql","PrivacyRowInput_inline.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||d("react")).useMemo,l={},m=["allow","deny"];function a(a,b){if(a==null&&b==null)return!0;else if(a==null||b==null)return!1;if(a.base_state!==b.base_state||a.tag_expansion_state!==b.tag_expansion_state)return!1;for(var c=m,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}var g=f;if(a[g].length!==b[g].length)return!1;if(a[g].length>0){f=function(){var c=new Set(b[g]);if(!a[g].every(function(a){return c.has(a)}))return{v:!1}}();if(typeof f==="object")return f.v}}return!0}function n(a){var c;a=d("CometRelay").readInlineData(h!==void 0?h:h=b("PrivacyRowInput_inline.graphql"),a);c=(c=a)!=null?c:l;var e=c.allow,f=c.base_state,g=c.deny;c=c.tag_expansion_state;a=(a=a==null?void 0:a.privacy_targeting)!=null?a:l;var i=a.targeted_publishing_fields;a=a.targeted_publishing_id;if(f==null)return null;if(a!=null){return{allow:e,base_state:f,deny:g,privacy_targeting:{targeted_publishing_fields:(i=i)!=null?i:void 0,targeted_publishing_id:a},tag_expansion_state:(i=c)!=null?i:"UNSPECIFIED"}}return{allow:e,base_state:f,deny:g,tag_expansion_state:(a=c)!=null?a:"UNSPECIFIED"}}function c(a){var c=d("CometRelay").useFragment(i!==void 0?i:i=b("PrivacyRowInput_fragment.graphql"),a);return k(function(){return n(c)},[c])}function o(a){var b=[];a==null?void 0:a.forEach(function(a){a!=null&&b.push(a)});return b}function e(a){return a==null?null:{allow:o(a==null?void 0:a.allow),base_state:a==null?void 0:a.base_state,deny:o(a==null?void 0:a.deny),privacy_targeting:a.privacy_targeting,tag_expansion_state:(a=a.tag_expansion_state)!=null?a:"UNSPECIFIED"}}g.arePrivacyRowInputsEqual=a;g.getPrivacyRowInput=n;g.usePrivacyRowInput=c;g.coerceFromPrivacyData=e}),98);
__d("useCometPrivacySelectorNotifyPrivacyOnInitEffect",["CometRelay","PrivacyRowInput","react","useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useEffect;function a(a,c){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql"),a);var e=d("PrivacyRowInput").usePrivacyRowInput(a.privacy_row_input);j(function(){c&&c({privacyRowInput:e,type:"init"})},[c,e])}g["default"]=a}),98);
__d("CometPrivacySelectorUneditable.react",["CometPrivacySelectorEntryPointMatchContainer.react","CometPrivacySelectorUneditable_renderer.graphql","CometRelay","emptyFunction","react","useCometPrivacySelectorNotifyPrivacyOnInitEffect"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var e=a.onPrivacyChange,f=a.renderer;a=a.renderLocation;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorUneditable_renderer.graphql"),f);c("useCometPrivacySelectorNotifyPrivacyOnInitEffect")(f,e);return j.jsx(c("CometPrivacySelectorEntryPointMatchContainer.react"),{props:{isEnabled:!1,isSaving:!1,onPress:c("emptyFunction"),renderLocation:a},renderer:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);