;/*FB_PKG_DELIM*/

__d("CometAnimatedImagePickerSearchResultsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6727291323998444"}),null);
__d("CometAnimatedImagePickerSearchResultsRootQuery.graphql",["CometAnimatedImagePickerSearchResultsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"media_height"},c={defaultValue:null,kind:"LocalArgument",name:"media_width"},d={defaultValue:null,kind:"LocalArgument",name:"query_type"},e={defaultValue:null,kind:"LocalArgument",name:"result_types"},f={defaultValue:null,kind:"LocalArgument",name:"scale"},g={defaultValue:null,kind:"LocalArgument",name:"search_interface"},h={defaultValue:null,kind:"LocalArgument",name:"search_query"},i=[{kind:"Literal",name:"count",value:40},{kind:"Variable",name:"media_height",variableName:"media_height"},{kind:"Variable",name:"media_scale",variableName:"scale"},{kind:"Variable",name:"media_width",variableName:"media_width"},{kind:"Variable",name:"query",variableName:"search_query"},{kind:"Variable",name:"query_type",variableName:"query_type"},{kind:"Variable",name:"result_types",variableName:"result_types"},{kind:"Variable",name:"search_interface",variableName:"search_interface"}],j={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"size_bytes",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"duration_ms",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h],kind:"Fragment",metadata:null,name:"CometAnimatedImagePickerSearchResultsRootQuery",selections:[{alias:null,args:i,concreteType:"MessengerPlatformResponse",kind:"LinkedField",name:"comet_external_media",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometAnimatedImagePickerSearchResults_results"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[d,e,h,c,a,f,g],kind:"Operation",name:"CometAnimatedImagePickerSearchResultsRootQuery",selections:[{alias:null,args:i,concreteType:"MessengerPlatformResponse",kind:"LinkedField",name:"comet_external_media",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerPlatformResultGroup",kind:"LinkedField",name:"result_group",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerPlatformResult",kind:"LinkedField",name:"results",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerPlatformSourceMedia",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"mime_type",storageKey:null},j,k,l,m,n,{alias:null,args:null,kind:"ScalarField",name:"tags",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gif_source",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessengerPlatformMedia",kind:"LinkedField",name:"media",plural:!0,selections:[j,k,l,m,n,{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"app_fbid",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_next_cursor",storageKey:null}],storageKey:null}]},params:{id:b("CometAnimatedImagePickerSearchResultsRootQuery_facebookRelayOperation"),metadata:{},name:"CometAnimatedImagePickerSearchResultsRootQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometAnimatedImagePickerSearchResults_results.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"size_bytes",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"duration_ms",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometAnimatedImagePickerSearchResults_results",selections:[{alias:null,args:null,concreteType:"MessengerPlatformResultGroup",kind:"LinkedField",name:"result_group",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerPlatformResult",kind:"LinkedField",name:"results",plural:!0,selections:[{alias:null,args:null,concreteType:"MessengerPlatformSourceMedia",kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"mime_type",storageKey:null},a,b,c,d,e,{alias:null,args:null,kind:"ScalarField",name:"tags",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gif_source",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessengerPlatformMedia",kind:"LinkedField",name:"media",plural:!0,selections:[a,b,c,d,e,{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"app_fbid",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"result_next_cursor",storageKey:null}],type:"MessengerPlatformResponse",abstractKey:null}}();e.exports=a}),null);
__d("CometPickerScrollableArea.react",["CometScrollableArea.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef,l={wrapper:{textAlign:"x2b8uid",width:"xh8yej3",$$css:!0}};function a(a){var b=a.children,d=a.scrollKey,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","scrollKey","xstyle"]);var f=k(null),g=k(null);j(function(){var a=g.current;g.current=d;if(d==null||d===a)return;if(f.current!=null){a=f.current.getDOMNode();a!=null&&a.scrollTo(0,0)}},[d]);return i.jsx(c("CometScrollableArea.react"),babelHelpers["extends"]({},a,{ref:f,xstyle:[l.wrapper,e],children:b}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPickerSearchBox.react",["fbt","ix","CometComponentWithKeyCommands.react","CometKeys","CometRoundedTextInput.react","TetraCircleButton.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react"));b=j;var l=b.useCallback,m=b.useEffect,n=b.useRef,o={searchWrapper:{paddingTop:"x1y1aw1k",paddingEnd:"x1pi30zi",paddingBottom:"xwib8y2",paddingStart:"x1swvt13",$$css:!0}};function a(a){var b=a.attachmentType;b=b===void 0?"GIF":b;var e=a.searchQuery,f=a.setSearchQuery;a=a.xstyle;var g=n(null);m(function(){var a=g.current;if(a==null)return;a.focus()},[]);var j=[{command:{key:c("CometKeys").ENTER},description:h._("__JHASH__XE3uPiTIwgK__JHASH__",[h._param("attachment_type",b)]),handler:function(){},triggerFromInputs:!0}];return k.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:j,xstyle:[o.searchWrapper,a],children:k.jsx(c("CometRoundedTextInput.react"),{addOnEnd:e.length!==0?k.jsx(c("TetraCircleButton.react"),{color:"tertiary",icon:d("fbicon")._(i("478232"),16),label:h._("__JHASH__51rvDPZ5aSG__JHASH__"),onPress:function(){return f("")},size:24}):void 0,"aria-expanded":!1,"aria-label":h._("__JHASH__jFZ79lfXEzo__JHASH__",[h._param("attachment type",b)]),autoComplete:"off",icon:k.jsx(c("TetraIcon.react"),{color:"tertiary",icon:d("fbicon")._(i("491282"),16),size:16}),label:String(h._("__JHASH__jFZ79lfXEzo__JHASH__",[h._param("attachment type",b)])),onChange:l(function(a){a.target.value!==void 0&&f(a.target.value)},[f]),placeholder:h._("__JHASH__kdfT6xnNPmM__JHASH__"),ref:g,role:"combobox",spellCheck:!1,type:"text",value:(j=e)!=null?j:""})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedImagePickerSearchResult.react",["fbt","CometImage.react","CometPressable.react","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useCallback,l=c("gkx")("1924962");function a(a){var b=a.desiredWidth,d=a.image,e=a.onSelect;a=k(function(a){a.preventDefault(),e(d)},[d,e]);var f=d.source.width,g=d.source.height;f=b/f;var i=l&&d.media.preview.label!=null?d.media.preview.label:h._("__JHASH__5XI5bjHWy4W__JHASH__");return j.jsx(c("CometPressable.react"),{onPress:a,overlayDisabled:!0,testid:void 0,children:j.jsx(c("CometImage.react"),{alt:i,height:g*f,src:d.source.url,width:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedImagePickerSearchResultsColumns.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.cells,c=a.numOfColumns,d=a.totalWidth,e=c>0?c:1,f=Array.from(Array(e),function(){return[]}),g=Array(e).fill(0);b.forEach(function(a){if(a!=null){var b=g.indexOf(Math.min.apply(Math,g));f[b].push(a.element);g[b]+=a.height}});return i.jsx("div",{className:"x78zum5",style:{width:d},children:f.map(function(a,b){return i.jsx("div",{className:"x78zum5 xdt5ytf",style:{width:Math.floor(d/e)},children:a},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedImagePickerSearchResults.react",["fbt","CometAnimatedImagePickerSearchResult.react","CometAnimatedImagePickerSearchResultsColumns.react","CometAnimatedImagePickerSearchResults_results.graphql","CometPickerNullState.react","CometPickerScrollableArea.react","CometRelay","NullStateMedia","getJSEnumSafe","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;var l=e.useCallback,m=e.useState,n=5;function a(a){var e,f,g=a.desiredWidth,j=a.onSelect,o=a.results,p=a.scrollKey,q=a.twoColumns;a=a.xstyle;o=d("CometRelay").useFragment(i!==void 0?i:i=b("CometAnimatedImagePickerSearchResults_results.graphql"),o);var r=(e=o==null?void 0:(e=o.result_group)==null?void 0:(e=e[0])==null?void 0:e.results.length)!=null?e:0;e=m(n);var s=e[0],t=e[1];e=l(function(){return t(function(a){return Math.min(a+n,r)})},[r]);f=o==null?void 0:(f=o.result_group[0])==null?void 0:(f=f.results[0])==null?void 0:f.result_id;var u=m(null),v=u[0];u=u[1];v!==f&&(u(f),t(n));var w={ANIMATION:1,PHOTO:0,REEL:4,STICKER:3,VIDEO:2};if(!o||!o.result_group||o.result_group.length===0||!o.result_group[0])return k.jsx(c("CometPickerNullState.react"),{body:h._("__JHASH__AE_gV8_hyrV__JHASH__"),icon:c("NullStateMedia")});v=o.result_group[0].results;var x=o.result_next_cursor;u=v.map(function(a,b){var d,e=a.media[0],f=a.source;if(e==null||f==null)return;if(b>s)return null;e={preview:{durationMs:(b=e.duration_ms)!=null?b:0,height:(b=e.height)!=null?b:0,label:(b=e.label)!=null?b:null,sizeBytes:(b=e.size_bytes)!=null?b:0,url:(b=f.url)!=null?b:"",width:(b=e.width)!=null?b:0}};f={durationMs:(b=f.duration_ms)!=null?b:0,gifSource:(b=f.gif_source)!=null?b:null,height:(b=f.height)!=null?b:0,mimeType:(b=f.mime_type)!=null?b:"",sizeBytes:(b=f.size_bytes)!=null?b:0,tags:(b=f.tags)!=null?b:null,title:(b=f.title)!=null?b:"",url:(b=f.url)!=null?b:"",width:(b=f.width)!=null?b:0};b=(b=a.result_type)!=null?b:"ANIMATION";var h=q?g/2:g;return{element:k.jsx(c("CometAnimatedImagePickerSearchResult.react"),{desiredWidth:h,image:{cursor:(d=x)!=null?d:"",media:e,platformFBID:(d=a.app_fbid)!=null?d:"",resultID:(e=a.result_id)!=null?e:"",source:f,type:(d=c("getJSEnumSafe")(w,b))!=null?d:1},onSelect:j},(e=a.result_id)!=null?e:void 0),height:f.height*(h/f.width)}});q?f=k.jsx(c("CometAnimatedImagePickerSearchResultsColumns.react"),{cells:u,numOfColumns:2,totalWidth:g}):f=u.map(function(a){return a==null?void 0:a.element});return k.jsx(c("CometPickerScrollableArea.react"),{horizontal:!1,onScrollBottom:e,scrollKey:p,xstyle:a,children:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedImagePickerSearchResultsRoot.react",["CometAnimatedImagePickerSearchResults.react","CometAnimatedImagePickerSearchResultsRootQuery.graphql","CometErrorBoundary.react","CometRelay","WebPixelRatio","react","useInvalidNumberThrowsViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useMemo;function l(a){var e=a.mediaHeight,f=a.mediaWidth,g=a.onSelect,i=a.searchInterface,l=i===void 0?"FB_INTERFACE":i,m=a.searchQuery;i=a.twoColumns;a=a.xstyle;c("useInvalidNumberThrowsViolation")(f);var n=k(function(){return{media_height:e,media_width:f,query_type:m===""?"TRENDING":"SEARCH",result_types:["ANIMATION"],scale:d("WebPixelRatio").get(),search_interface:l,search_query:m}},[e,f,l,m]),o=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("CometAnimatedImagePickerSearchResultsRootQuery.graphql"),n);return o.comet_external_media==null?null:j.jsx(c("CometAnimatedImagePickerSearchResults.react"),{desiredWidth:n.media_width,onSelect:g,results:o.comet_external_media,scrollKey:m,twoColumns:i,xstyle:a})}l.displayName=l.name+" [from "+f.id+"]";function a(a){return j.jsx(c("CometErrorBoundary.react"),{children:j.jsx(l,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometAnimatedImagePickerCard.react",["CometAnimatedImagePickerSearchResultsRoot.react","react","useDebouncedValue"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.mediaHeight,d=a.mediaWidth,e=a.onSelect,f=a.searchQuery,g=a.twoColumns;g=g===void 0?!1:g;a=a.xstyle;return i.jsx(c("CometAnimatedImagePickerSearchResultsRoot.react"),{mediaHeight:b,mediaWidth:d,onSelect:e,searchQuery:c("useDebouncedValue")(f,200),twoColumns:g,xstyle:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIAnimatedImagePickerCard.react",["CometAnimatedImagePickerCard.react","CometColumn.react","CometColumnItem.react","CometPickerBasicStackingLayout.react","CometPickerSearchBox.react","CometPlaceholder.react","CometProgressIndicator.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useState,l=c("gkx")("1299319"),m=274,n={popover:{height:"x1hie0zf",width:"xlro9se",$$css:!0},scrollableAreaForIE11:{height:"x1vd4hg5",$$css:!0}};function a(a){var b=a.onClose,d=a.onSelect;a=j(function(a){b(),d(a)},[b,d]);var e=k(""),f=e[0];e=e[1];return i.jsx(c("CometPickerBasicStackingLayout.react"),{xstyle:n.popover,children:{content:i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("CometColumn.react"),{align:"center",expanding:!0,verticalAlign:"center",children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("CometProgressIndicator.react"),{})})}),children:i.jsx(c("CometAnimatedImagePickerCard.react"),{mediaWidth:m,onSelect:a,searchQuery:f,xstyle:l&&n.scrollableAreaForIE11})}),header:i.jsx(c("CometPickerSearchBox.react"),{searchQuery:f,setSearchQuery:e},0)}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("XUFICommentGIFPreprocessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ufi/comment/gif_preprocess/",{})}),null);
__d("CometUFIGIFPickerPopoverForLexical.react",["ARIA_LABEL_PLACEHOLDER_FIXME","CometPopover.react","CometUFIAnimatedImagePickerCard.react","XUFICommentGIFPreprocessController","cometAsyncFetch","promiseDone","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useCallback;function a(a){var b=a.onClose,d=a.onSelect;a=a.pluginProps;var e=a.setComposerState,f=a.editor;a=j(function(a){c("promiseDone")(c("cometAsyncFetch")(c("XUFICommentGIFPreprocessController").getURIBuilder().getURI().toString(),{data:{gif_url:a.source.url},method:"POST"}));var g=function(b){return babelHelpers["extends"]({},b,{attachment:{__type:"GIF",data:a}})};e(g);f.focus();d&&d();b()},[f,b,d,e]);return i.jsx(c("CometPopover.react"),{"aria-label":c("ARIA_LABEL_PLACEHOLDER_FIXME"),withArrow:!0,children:i.jsx(c("CometUFIAnimatedImagePickerCard.react"),{onClose:b,onSelect:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);