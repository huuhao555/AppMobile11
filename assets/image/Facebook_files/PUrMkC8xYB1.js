;/*FB_PKG_DELIM*/

__d("SimpleNUXMessageTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setEventTimestamp=function(a){this.$1.event_timestamp=a;return this};c.setNuxMessageType=function(a){this.$1.nux_message_type=a;return this};return a}();c={event:!0,event_timestamp:!0,nux_message_type:!0};f["default"]=a}),66);
__d("XUISpinner.react",["cx","fbt","BrowserSupport","LoadingMarker.react","UserAgent","joinClasses","react"],(function(a,b,c,d,e,f,g,h,i){var j,k=j||d("react"),l=d("BrowserSupport").hasCSSAnimations()&&!(c("UserAgent").isEngine("Trident < 6")||c("UserAgent").isEngine("Gecko < 39")||c("UserAgent").isBrowser("Safari < 6"));a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=k.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.render=function(){var a=this.props,b=a.showOnAsync,d=a.background,e=a.paused;a=babelHelpers.objectWithoutPropertiesLoose(a,["showOnAsync","background","paused"]);d="img _55ym"+(this.props.size=="small"?" _55yn":"")+(this.props.size=="large"?" _55yq":"")+(d=="light"?" _55yo":"")+(d=="dark"?" _55yp":"")+(b?" _5tqs":"")+(l?"":" _5d9-")+(l&&e?" _2y32":"");return k.jsx(c("LoadingMarker.react"),{nodeRef:this.$1,children:k.jsx("span",babelHelpers["extends"]({},a,{className:c("joinClasses")(this.props.className,d),ref:this.$1,role:"progressbar","aria-valuetext":i._("__JHASH__6lD-XyRyuHe__JHASH__"),"aria-busy":"true","aria-valuemin":"0","aria-valuemax":"100"}))})};return b}(k.Component);a.defaultProps={showOnAsync:!1,size:"small",background:"light"};g["default"]=a}),98);
__d("XUIButton.react",["cx","AbstractButton.react","XUISpinner.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||d("react");a="medium";b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=j.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.focus=function(){this.$1.current!=null&&this.$1.current.focus()};d.render=function(){var a=this.props,b=a.borderShade,d=a.loading,e=a.size,f=a.suppressed,g=a.use,h=a.buttonRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["borderShade","loading","size","suppressed","use","buttonRef"]);e="_4jy0"+(e==="small"?" _517i":"")+(e==="medium"?" _4jy3":"")+(e==="large"?" _4jy4":"")+(e==="xlarge"?" _4jy5":"")+(e==="xxlarge"?" _4jy6":"")+(g==="default"?" _517h":"")+(g==="confirm"?" _4jy1":"")+(g==="special"?" _4jy2":"")+(g==="caution"?" _9w8q":"")+(b==="light"?" _51sy":"")+(b==="dark"?" _9c6":"")+(f?" _59pe":"")+(g==="confirm"||g==="special"||g==="caution"?" selected":"");return j.jsx(c("AbstractButton.react"),babelHelpers["extends"]({},a,{label:d?j.jsx(c("XUISpinner.react"),{}):this.props.label,className:c("joinClasses")(this.props.className,e),ref:this.$1,buttonRef:h,disabled:!!this.props.disabled}))};return b}(j.Component);b.defaultProps={use:"default",size:a,borderShade:"light",suppressed:!1};g["default"]=b}),98);
__d("XUIDialogBody.react",["cx","XUIText.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return j.jsx(c("XUIText.react"),babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize,children:this.props.children}))};return b}(j.Component);a.defaultProps={fontSize:"medium"};g["default"]=a}),98);
__d("XSimpleNUXMessagesController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/nux/{msg_id}/seen/",{msg_id:{type:"Int",required:!0}})}),null);
__d("SimpleNUXMessage",["AsyncRequest","SimpleNUXMessageIDsToShow","SimpleNUXMessageTypedLogger","XSimpleNUXMessagesController"],(function(a,b,c,d,e,f,g){var h=new Set();function i(a,b){new(c("SimpleNUXMessageTypedLogger"))().setNuxMessageType(a).setEvent(b).setEventTimestamp(Math.floor(Date.now()/1e3)).log()}function a(a){var b=j(a);!b&&!h.has(a)&&(i(a,"eligible"),h.add(a));return b}function j(a){return!c("SimpleNUXMessageIDsToShow").idsToShow.has(a)}function b(a,b){c("SimpleNUXMessageIDsToShow").idsToShow["delete"](a);a=c("XSimpleNUXMessagesController").getURIBuilder().setInt("msg_id",a).getURI();a=new(c("AsyncRequest"))().setURI(a);b!=null&&(a=a.setHandler(b));a.send()}f.exports={hasUserSeenMessage_LEGACY:a,hasUserSeenMessageWithoutLogging:j,markMessageSeenByUser:b}}),34);
__d("isKeyActivation",["Keys"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=0,d=a.charCode;a=a.keyCode;d!=null&&d!==0?b=d:a!=null&&a!==0&&(b=a);return[c("Keys").RETURN,c("Keys").SPACE].includes(b)}g["default"]=a}),98);
__d("KeyActivationToClickHOC.react",["isKeyActivation","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b,d;return d=b=function(b){babelHelpers.inheritsLoose(d,b);function d(){var a;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];a=b.call.apply(b,[this].concat(e))||this;a.$2=function(b){c("isKeyActivation")(b)&&(b.preventDefault(),b.stopPropagation(),a.$1&&a.$1.click())};a.$3=function(b){a.$1=b};a.$1=null;return a}var e=d.prototype;e.render=function(){return i.jsx(a,babelHelpers["extends"]({keyActivationToClickEvent:this.$2,keyActivationToClickRef:this.$3},this.props))};return d}(i.Component),b.displayName="KeyActivationToClickHOC",d}g["default"]=a}),98);
__d("ShimButton.react",["KeyActivationToClickHOC.react","emptyFunction","killswitch","prop-types","react"],(function(a,b,c,d,e,f){var g,h=g||b("react");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.keyActivationToClickRef(a),c.props.onRef(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.form,e=a.inline,f=a.keyActivationToClickEvent;a.keyActivationToClickRef;a.onRef;var g=a.pressed,i=a.role;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","form","inline","keyActivationToClickEvent","keyActivationToClickRef","onRef","pressed","role"]);e=e?"span":"div";d==="link"&&(e="a");f=(d={},d[b("killswitch")("SHIM_BUTTON_USE_ONKEYDOWN_INSTEAD_OF_ONKEYPRESS")?"onKeyPress":"onKeyDown"]=f,d);return h.jsx(e,babelHelpers["extends"]({},a,{"aria-pressed":g,ref:this.$1,role:(d=i)!=null?d:"button"},f,{children:c}))};return c}(h.Component);a.defaultProps={form:"none",inline:!1,keyActivationToClickEvent:b("emptyFunction"),keyActivationToClickRef:b("emptyFunction"),onClick:b("emptyFunction"),onRef:b("emptyFunction"),tabIndex:"0"};a.propTypes={children:b("prop-types").any,form:b("prop-types").oneOf(["none","link"]),inline:b("prop-types").bool,tabIndex:b("prop-types").oneOf(["-1","0",-1,0]),onClick:b("prop-types").func,onRef:b("prop-types").func};e.exports=b("KeyActivationToClickHOC.react")(a)}),null);
__d("concatArrays",[],(function(a,b,c,d,e,f){function a(a){var b;return(b=[]).concat.apply(b,a)}f["default"]=a}),66);
__d("Dispatcher_DEPRECATED",["invariant","FBLogger","monitorCodeUse"],(function(a,b,c,d,e,f,g,h){"use strict";var i="ID_";a=function(){function a(){this.$1=new Map(),this.$2=!1,this.$3=new Map(),this.$4=new Map(),this.$5=1}var b=a.prototype;b.register=function(a,b){b=this.__genID(b);this.$1.set(b,a);return b};b.unregister=function(a){this.$1.get(a)||h(0,1331,a),this.$1["delete"](a)};b.waitFor=function(a){this.$2||h(0,1332);for(var b=0;b<a.length;b++){var c=a[b];if(this.$4.get(c)){this.$3.get(c)||h(0,2380,c);continue}this.$1.get(c)||h(0,2381,c);this.$7(c)}};b.dispatch=function(a){var b=this;k(this.$2,this.$6,a);this.$8(a);try{this.$1.forEach(function(a,c){if(b.$4.get(c))return;b.$7(c)})}finally{this.$9()}};b.isDispatching=function(){return this.$2};b.$7=function(a){this.$4.set(a,!0);var b=this.$1.get(a);b&&this.__invokeCallback(a,b,this.$6);this.$3.set(a,!0)};b.__invokeCallback=function(a,b,c){b(c)};b.$8=function(a){for(var b=this.$1.keys(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;this.$4.set(e,!1);this.$3.set(e,!1)}this.$6=a;this.$2=!0};b.$9=function(){delete this.$6,this.$2=!1};b.__genID=function(a){var b=a?a+"_":i;a=a||b+this.$5++;while(this.$1.get(a))a=b+this.$5++;return a};return a}();function j(a){var b="<unknown>";if(!a)return b;if(typeof a.type==="string")return a.type;if(typeof a.actionType==="string")return a.actionType;if(!a.action)return b;if(typeof a.action.type==="string")return a.action.type;return typeof a.action.actionType==="string"?a.action.actionType:b}function k(a,b,d){if(a){a=new Error("Cannot dispatch in the middle of a dispatch");c("FBLogger")("flux_dispatcher").catching(a).mustfix("Tried to dispatch action %s while already dispatching %s",j(d),j(b));throw a}}g["default"]=a}),98);
__d("ExplicitRegistrationDispatcherUtils",["emptyFunction","setImmediate"],(function(a,b,c,d,e,f){"use strict";a=!1;c=b("emptyFunction");e.exports={warn:c,inlineRequiresEnabled:a}}),null);
__d("ExplicitRegistrationDispatcher",["Dispatcher_DEPRECATED","ExplicitRegistrationDispatcherUtils","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;b=b.strict;c=a.call(this)||this;c.$ExplicitRegistrationDispatcher2=b;c.$ExplicitRegistrationDispatcher1={};return c}var c=b.prototype;c.explicitlyRegisterStore=function(a){a=a.getDispatchToken();this.$ExplicitRegistrationDispatcher1[a]=!0;return a};c.explicitlyRegisterStores=function(a){var b=this;return a.map(function(a){return b.explicitlyRegisterStore(a)})};c.register=function(b,c){var d=this;d=this.__genID(c);this.$ExplicitRegistrationDispatcher1[d]=!1;c=a.prototype.register.call(this,this.$ExplicitRegistrationDispatcher4.bind(this,d,b),d);return c};c.$ExplicitRegistrationDispatcher4=function(a,b,c){(this.$ExplicitRegistrationDispatcher1[a]||!this.$ExplicitRegistrationDispatcher2)&&this.__invokeCallback(a,b,c)};c.unregister=function(b){a.prototype.unregister.call(this,b),delete this.$ExplicitRegistrationDispatcher1[b]};c.__getMaps=function(){};return b}(c("Dispatcher_DEPRECATED"));g["default"]=a}),98);
__d("FluxStoreInstrumentation",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";var i=null;function a(a){i==null||h(0,2260),i=a}function b(a){return i?i.emitChange(a):null}g.inject=a;g.onEmitChange=b}),98);
__d("FluxStoreOnDispatchInstrumentation",["SimpleHook"],(function(a,b,c,d,e,f,g){"use strict";a=new(d("SimpleHook").SimpleHook)();g["default"]=a}),98);
__d("FluxContainerNameUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a&&b)try{Object.defineProperty(a,"name",{value:b})}catch(a){}return a}f.nameContainer=a}),66);
__d("getUniformDispatcher",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a&&a.length||h(0,18238);a=a[0].getDispatcher();return a}g["default"]=a}),98);
__d("FluxContainerSubscriptions",["expectationViolation","getUniformDispatcher","nullthrows","shallowArrayEqual"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){this.$1=[],this.$4=a!=null?a:this.constructor.name}var b=a.prototype;b.setStores=function(a){var b=this;if(this.$3&&c("shallowArrayEqual")(this.$3,a))return;this.$3=a;this.$7();this.$8();if(a.length===0){c("expectationViolation")("there should be at least 1 store in a flux subscription");return}var d=!1,e=[],f=function(){d&&(b.$1.forEach(function(a){return a()}),d=!1)},g=c("getUniformDispatcher")(a);e=function(){if(g.registerContainer!=null)b.$6=g.registerContainer(function(a){f()},b.$4);else{var c=a.map(function(a){return a.getDispatchToken()});b.$6=g.register(function(a){g.waitFor(c),f()},b.$4,null,b.$4)}g.explicitlyRegisterStore&&g.explicitlyRegisterStore(b)};this.$2=a.map(function(a){return a.addListener(function(){d=!0})});e();this.$5=g};b.addListener=function(a){this.$1.push(a)};b.reset=function(){this.$7(),this.$8(),this.$9(),this.$10()};b.$7=function(){this.$2&&(this.$2.forEach(function(a){return a.remove()}),this.$2=null)};b.$8=function(){this.$5&&this.$6!=null&&this.$5.unregister(this.$6),this.$5=null,this.$6=null};b.$10=function(){this.$3=null};b.$9=function(){this.$1=[]};b.getDispatchToken=function(){return c("nullthrows")(this.$6,"dispatchToken must be set")};return a}();g["default"]=a}),98);
__d("FluxStore",["invariant","EventEmitter","FluxStoreInstrumentation","FluxStoreOnDispatchInstrumentation","__debug","concatArrays","distinctArray","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k;a=function(){function a(a){this.__className=this.constructor.name,this.__moduleID=this.constructor.__moduleID,this.__changed=!1,this.__changeEvent="change",this.__dispatcher=a,this.__emitter=new(c("EventEmitter"))(),this.$3=!1,this.__registerDispatcherCallback(a)}var b=a.prototype;b.__registerDispatcherCallback=function(a){var b=this;this.$2=a.register(function(a){return b.__invokeOnDispatch(a)},this.__getIDForDispatcher(),this,this.__moduleID)};b.addListener=function(a){return this.__emitter.addListener(this.__changeEvent,a)};b.getActionTypes=function(){if(!this.$1){var a=this.__getActionTypes();if(a!=null){var b=this.getDependencyStores();if(b.length>0){var d=!1;b=c("concatArrays")(b.map(function(a){a=a&&a.getActionTypes?a.getActionTypes():null;a==null&&(d=!0);return a}).filter(Boolean));d?a=null:a=(i||(i=c("distinctArray")))(a.concat(b))}}this.$1=a}return this.$1};b.getDispatcher=function(){return this.__dispatcher};b.getDispatchToken=function(){return this.$2};b.getDependencyDispatchTokens=function(){this.$5||(this.$5=this.getDependencyStores().map(function(a){return a&&a.getDispatchToken&&a.getDispatchToken()}));return this.$5};b.getDependencyStores=function(){this.$4||(this.$4=(i||(i=c("distinctArray")))(this.__getDependencyStores()));return this.$4};b.addStoreDependency=function(a){var b=this.__dispatcher.registerDependency;b&&b(this.getDispatchToken(),a.getDispatchToken())};b.hasChanged=function(){this.__dispatcher.isDispatching()||h(0,1147,this.__className);return this.__changed};b.__setAsUnchanged=function(){this.__changed=!1};b.__emitChange=function(){this.__dispatcher.isDispatching()||h(0,1148,this.__className);if(this.__changed)return;d("FluxStoreInstrumentation").onEmitChange(this.__moduleID!=null?this.__moduleID:"unknown");this.__changed=!0};b.__invokeOnDispatch=function(a){this.__changed=!1;var b=c("FluxStoreOnDispatchInstrumentation").hasCallback()?(j||(j=c("performanceAbsoluteNow")))():null;this.__onDispatch(a);if(b!=null){c("FluxStoreOnDispatchInstrumentation").call((a=this.__moduleID)!=null?a:"unknown",(j||(j=c("performanceAbsoluteNow")))()-b)}this.__inform()};b.__inform=function(a){this.$3=this.__changed||this.$3;var b=this.__dispatcher.shouldAllowInforms==null||this.__dispatcher.shouldAllowInforms();b&&this.$3&&(this.$3=!1,this.__emitter.emit(a||this.__changeEvent))};b.__onDispatch=function(a){h(0,1149,this.__className)};b.__getActionTypes=function(){return null};b.__getDependencyStores=function(){return[]};b.__getIDForDispatcher=function(){return this.__className};return a}();a;b=a;g["default"]=b}),98);
__d("TypedFluxStore",["FluxStore"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("FluxStore")}),98);
__d("FluxReduceStore",["invariant","TypedFluxStore","abstractMethod"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;b.$FluxReduceStore1=b.getInitialState();return b}var d=b.prototype;d.getState=function(){return this.$FluxReduceStore1};d.getInitialState=function(){return c("abstractMethod")("FluxReduceStore","getInitialState")};d.reduce=function(a,b){return c("abstractMethod")("FluxReduceStore","reduce")};d.areEqual=function(a,b){return a===b};d.__invokeOnDispatch=function(a,b){b===void 0&&(b=!0);this.__changed=!1;var c=this.$FluxReduceStore1;a=this.reduce(c,a);a!==void 0||h(0,2189,this.constructor.name);this.areEqual(c,a)||(this.$FluxReduceStore1=a,this.__emitChange());b&&this.__inform()};d.__setState=function(a){this.$FluxReduceStore1=a};return b}(c("TypedFluxStore"));a.__moduleID=f.id;g["default"]=a}),98);
__d("Animation",["BrowserSupport","Style","clearInterval","clearTimeout","cr:6108","cr:6114","cr:6669","getVendorPrefixedName","requestAnimationFrame","setIntervalAcrossTransitions","setTimeoutAcrossTransitions","shield"],(function(a,b,c,d,e,f){var g=b("requestAnimationFrame"),h=[],i;function j(b){if(a==this)return new j(b);else this.obj=b,this._reset_state(),this.queue=[],this.last_attr=null,this.unit="px",this.behaviorOverrides={ignoreUserScroll:!1}}function k(a){if(b("BrowserSupport").hasCSS3DTransforms())return n(a);else return m(a)}function l(a){return a.toFixed(8)}function m(a){a=[a[0],a[4],a[1],a[5],a[12],a[13]];return"matrix("+a.map(l).join(",")+")"}function n(a){return"matrix3d("+a.map(l).join(",")+")"}function o(a,b){a||(a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);var c=[];for(var d=0;d<4;d++)for(var e=0;e<4;e++){var f=0;for(var g=0;g<4;g++)f+=a[d*4+g]*b[g*4+e];c[d*4+e]=f}return c}var p=0;j.prototype._reset_state=function(){this.state={attrs:{},duration:500}};j.prototype.stop=function(){this._reset_state();this.queue=[];return this};j.prototype._build_container=function(){if(this.container_div){this._refresh_container();return}if(this.obj.firstChild&&this.obj.firstChild.__animation_refs){this.container_div=this.obj.firstChild;this.container_div.__animation_refs++;this._refresh_container();return}var a=document.createElement("div");a.style.padding="0px";a.style.margin="0px";a.style.border="0px";a.__animation_refs=1;var b=this.obj.childNodes;while(b.length)a.appendChild(b[0]);this.obj.appendChild(a);this._orig_overflow=this.obj.style.overflow;this.obj.style.overflow="hidden";this.container_div=a;this._refresh_container()};j.prototype._refresh_container=function(){this.container_div.style.height="auto",this.container_div.style.width="auto",this.container_div.style.height=this.container_div.offsetHeight+this.unit,this.container_div.style.width=this.container_div.offsetWidth+this.unit};j.prototype._destroy_container=function(){if(!this.container_div)return;if(!--this.container_div.__animation_refs){var a=this.container_div.childNodes;while(a.length)this.obj.appendChild(a[0]);this.obj.removeChild(this.container_div)}this.container_div=null;this.obj.style.overflow=this._orig_overflow};var q=1,r=2,s=3;j.prototype._attr=function(a,b,c){a=a.replace(/-[a-z]/gi,function(a){return a.substring(1).toUpperCase()});var d=!1;switch(a){case"background":this._attr("backgroundColor",b,c);return this;case"backgroundColor":case"borderColor":case"color":b=w(b);break;case"opacity":b=parseFloat(b,10);break;case"height":case"width":b=="auto"?d=!0:b=parseInt(b,10);break;case"borderWidth":case"lineHeight":case"fontSize":case"margin":case"marginBottom":case"marginLeft":case"marginRight":case"marginTop":case"padding":case"paddingBottom":case"paddingLeft":case"paddingRight":case"paddingTop":case"bottom":case"left":case"right":case"top":case"scrollTop":case"scrollLeft":b=parseInt(b,10);break;case"rotateX":case"rotateY":case"rotateZ":b=parseInt(b,10)*Math.PI/180;break;case"translateX":case"translateY":case"translateZ":case"scaleX":case"scaleY":case"scaleZ":b=parseFloat(b,10);break;case"rotate3d":this._attr("rotateX",b[0],c);this._attr("rotateY",b[1],c);this._attr("rotateZ",b[2],c);return this;case"rotate":this._attr("rotateZ",b,c);return this;case"scale3d":this._attr("scaleZ",b[2],c);case"scale":this._attr("scaleX",b[0],c);this._attr("scaleY",b[1],c);return this;case"translate3d":this._attr("translateZ",b[2],c);case"translate":this._attr("translateX",b[0],c);this._attr("translateY",b[1],c);return this;default:throw new Error(a+" is not a supported attribute!")}this.state.attrs[a]===void 0&&(this.state.attrs[a]={});d&&(this.state.attrs[a].auto=!0);switch(c){case s:this.state.attrs[a].start=b;break;case r:this.state.attrs[a].by=!0;case q:this.state.attrs[a].value=b;break}};function t(a){var c,d=parseInt((c=b("Style")).get(a,"paddingLeft"),10),e=parseInt(c.get(a,"paddingRight"),10),f=parseInt(c.get(a,"borderLeftWidth"),10);c=parseInt(c.get(a,"borderRightWidth"),10);return a.offsetWidth-(d?d:0)-(e?e:0)-(f?f:0)-(c?c:0)}function u(a){var c,d=parseInt((c=b("Style")).get(a,"paddingTop"),10),e=parseInt(c.get(a,"paddingBottom"),10),f=parseInt(c.get(a,"borderTopWidth"),10);c=parseInt(c.get(a,"borderBottomWidth"),10);return a.offsetHeight-(d?d:0)-(e?e:0)-(f?f:0)-(c?c:0)}j.prototype.setUnit=function(a){this.unit=a;return this};j.prototype.to=function(a,b){b===void 0?this._attr(this.last_attr,a,q):(this._attr(a,b,q),this.last_attr=a);return this};j.prototype.by=function(a,b){b===void 0?this._attr(this.last_attr,a,r):(this._attr(a,b,r),this.last_attr=a);return this};j.prototype.from=function(a,b){b===void 0?this._attr(this.last_attr,a,s):(this._attr(a,b,s),this.last_attr=a);return this};j.prototype.duration=function(a){this.state.duration=a?a:0;return this};j.prototype.checkpoint=function(a,b){a===void 0&&(a=1);this.state.checkpoint=a;this.queue.push(this.state);this._reset_state();this.state.checkpointcb=b;return this};j.prototype.blind=function(){this.state.blind=!0;return this};j.prototype.hide=function(){this.state.hide=!0;return this};j.prototype.show=function(){this.state.show=!0;return this};j.prototype.ease=function(a){this.state.ease=a;return this};j.prototype.CSSAnimation=function(a){var b={duration:this.state.duration};this.state.ondone&&(b.callback=this.state.ondone);a(this.obj,b)};j.prototype.go=function(){var a=Date.now();this.queue.push(this.state);for(var b=0;b<this.queue.length;b++)this.queue[b].start=a-p,this.queue[b].checkpoint&&(a+=this.queue[b].checkpoint*this.queue[b].duration);x(this);return this};j.prototype._show=function(){b("cr:6108").show(this.obj)};j.prototype._hide=function(){b("cr:6108").hide(this.obj)};j.prototype.overrideBehavior=function(a){this.behaviorOverrides=babelHelpers["extends"]({},this.behaviorOverrides,a);return this};j.prototype._frame=function(c){var d=!0,e=!1,f;function g(a){return document.documentElement[a]||document.body[a]}function h(a,b){return a===document.body?g(b):a[b]}function i(a,b){return b.lastScrollTop!==void 0&&b.lastScrollTop!==h(a.obj,"scrollTop")||b.lastScrollLeft!==void 0&&b.lastScrollLeft!==h(a.obj,"scrollLeft")}function j(a,b){b.lastScrollTop=h(a.obj,"scrollTop"),b.lastScrollLeft=h(a.obj,"scrollLeft")}for(var l=0;l<this.queue.length;l++){var m=this.queue[l];if(m.start>c){d=!1;continue}m.checkpointcb&&(this._callback(m.checkpointcb,c-m.start),m.checkpointcb=null);if(m.started===void 0){m.show&&this._show();for(var n in m.attrs){if(m.attrs[n].start!==void 0)continue;switch(n){case"backgroundColor":case"borderColor":case"color":f=w(b("Style").get(this.obj,n=="borderColor"?"borderLeftColor":n));m.attrs[n].by&&(m.attrs[n].value[0]=Math.min(255,Math.max(0,m.attrs[n].value[0]+f[0])),m.attrs[n].value[1]=Math.min(255,Math.max(0,m.attrs[n].value[1]+f[1])),m.attrs[n].value[2]=Math.min(255,Math.max(0,m.attrs[n].value[2]+f[2])));break;case"opacity":f=b("Style").getOpacity(this.obj);m.attrs[n].by&&(m.attrs[n].value=Math.min(1,Math.max(0,m.attrs[n].value+f)));break;case"height":f=u(this.obj);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"width":f=t(this.obj);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"scrollLeft":case"scrollTop":f=h(this.obj,n);m.attrs[n].by&&(m.attrs[n].value+=f);j(this,m);break;case"rotateX":case"rotateY":case"rotateZ":case"translateX":case"translateY":case"translateZ":f=b("cr:6669").get(this.obj,n,0);m.attrs[n].by&&(m.attrs[n].value+=f);break;case"scaleX":case"scaleY":case"scaleZ":f=b("cr:6669").get(this.obj,n,1);m.attrs[n].by&&(m.attrs[n].value+=f);break;default:f=parseInt(b("Style").get(this.obj,n),10)||0;m.attrs[n].by&&(m.attrs[n].value+=f);break}m.attrs[n].start=f}if(m.attrs.height&&m.attrs.height.auto||m.attrs.width&&m.attrs.width.auto){this._destroy_container();for(var n in{height:1,width:1,fontSize:1,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1})m.attrs[n]&&(this.obj.style[n]=m.attrs[n].value+(typeof m.attrs[n].value==="number"?this.unit:""));m.attrs.height&&m.attrs.height.auto&&(m.attrs.height.value=u(this.obj));m.attrs.width&&m.attrs.width.auto&&(m.attrs.width.value=t(this.obj))}m.started=!0;m.blind&&this._build_container()}var p=(c-m.start)/m.duration;p>=1?(p=1,m.hide&&this._hide()):d=!1;var q=m.ease?m.ease(p):p;!e&&p!=1&&m.blind&&(e=!0);for(var n in m.attrs)switch(n){case"backgroundColor":case"borderColor":case"color":m.attrs[n].start[3]!=m.attrs[n].value[3]?this.obj.style[n]="rgba("+v(q,m.attrs[n].start[0],m.attrs[n].value[0],!0)+","+v(q,m.attrs[n].start[1],m.attrs[n].value[1],!0)+","+v(q,m.attrs[n].start[2],m.attrs[n].value[2],!0)+","+v(q,m.attrs[n].start[3],m.attrs[n].value[3],!1)+")":this.obj.style[n]="rgb("+v(q,m.attrs[n].start[0],m.attrs[n].value[0],!0)+","+v(q,m.attrs[n].start[1],m.attrs[n].value[1],!0)+","+v(q,m.attrs[n].start[2],m.attrs[n].value[2],!0)+")";break;case"opacity":b("Style").set(this.obj,"opacity",v(q,m.attrs[n].start,m.attrs[n].value));break;case"height":case"width":this.obj.style[n]=q==1&&m.attrs[n].auto?"auto":v(q,m.attrs[n].start,m.attrs[n].value,!0)+this.unit;break;case"scrollLeft":case"scrollTop":var r=this.obj===document.body;if(!this.behaviorOverrides.ignoreUserScroll&&i(this,m))delete m.attrs.scrollTop,delete m.attrs.scrollLeft;else{var s=v(q,m.attrs[n].start,m.attrs[n].value,!0);!r?this.obj[n]=s:n=="scrollLeft"?a.scrollTo(s,g("scrollTop")):a.scrollTo(g("scrollLeft"),s);j(this,m)}break;case"translateX":case"translateY":case"translateZ":case"rotateX":case"rotateY":case"rotateZ":case"scaleX":case"scaleY":case"scaleZ":b("cr:6669").set(this.obj,n,v(q,m.attrs[n].start,m.attrs[n].value,!1));break;default:this.obj.style[n]=v(q,m.attrs[n].start,m.attrs[n].value,!0)+this.unit;break}r=null;s=b("cr:6669").get(this.obj,"translateX",0);n=b("cr:6669").get(this.obj,"translateY",0);q=b("cr:6669").get(this.obj,"translateZ",0);(s||n||q)&&(r=o(r,[1,0,0,0,0,1,0,0,0,0,1,0,s,n,q,1]));s=b("cr:6669").get(this.obj,"scaleX",1);n=b("cr:6669").get(this.obj,"scaleY",1);q=b("cr:6669").get(this.obj,"scaleZ",1);(s-1||n-1||q-1)&&(r=o(r,[s,0,0,0,0,n,0,0,0,0,q,0,0,0,0,1]));s=b("cr:6669").get(this.obj,"rotateX",0);s&&(r=o(r,[1,0,0,0,0,Math.cos(s),Math.sin(-s),0,0,Math.sin(s),Math.cos(s),0,0,0,0,1]));n=b("cr:6669").get(this.obj,"rotateY",0);n&&(r=o(r,[Math.cos(n),0,Math.sin(n),0,0,1,0,0,Math.sin(-n),0,Math.cos(n),0,0,0,0,1]));q=b("cr:6669").get(this.obj,"rotateZ",0);q&&(r=o(r,[Math.cos(q),Math.sin(-q),0,0,Math.sin(q),Math.cos(q),0,0,0,0,1,0,0,0,0,1]));s=b("getVendorPrefixedName")("transform");if(s)if(r){n=k(r);b("Style").set(this.obj,s,n)}else d&&b("Style").set(this.obj,s,null);p==1&&(this.queue.splice(l--,1),this._callback(m.ondone,c-m.start-m.duration))}!e&&this.container_div&&this._destroy_container();return!d};j.prototype.ondone=function(a){this.state.ondone=a;return this};j.prototype._callback=function(a,b){a&&(p=b,a.call(this),p=0)};function v(a,b,c,d){return(d?parseInt:parseFloat)((c-b)*a+b,10)}function w(a){var b=/^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);if(b)return[parseInt(b[1].length==1?b[1]+b[1]:b[1],16),parseInt(b[2].length==1?b[2]+b[2]:b[2],16),parseInt(b[3].length==1?b[3]+b[3]:b[3],16),1];else{b=/^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(a);if(b)return[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),b[4]?parseFloat(b[4]):1];else if(a=="transparent")return[255,255,255,0];else throw new Error("Named color attributes are not supported.")}}function x(a){h.push(a),h.length===1&&(g?g(z):i=b("setIntervalAcrossTransitions")(z,20)),g&&y(),z(Date.now(),!0)}function y(){if(!g)throw new Error("Ending timer only valid with requestAnimationFrame");var a=0;for(var c=0;c<h.length;c++){var d=h[c];for(var e=0;e<d.queue.length;e++){var f=d.queue[e].start+d.queue[e].duration;f>a&&(a=f)}}i&&(b("clearTimeout")(i),i=null);f=Date.now();a>f&&(i=b("setTimeoutAcrossTransitions")(b("shield")(z),a-f))}function z(a,c){a=Date.now();for(c=c===!0?h.length-1:0;c<h.length;c++)try{h[c]._frame(a)||h.splice(c--,1)}catch(a){h.splice(c--,1)}h.length===0?i&&(g?b("clearTimeout")(i):b("clearInterval")(i),i=null):g&&g(z)}j.ease={};j.ease.begin=function(a){return Math.sin(Math.PI/2*(a-1))+1};j.ease.end=function(a){return Math.sin(.5*Math.PI*a)};j.ease.both=function(a){return.5*Math.sin(Math.PI*(a-.5))+.5};j.prependInsert=function(a,c){j.insert(a,c,b("cr:6114").prependContent)};j.appendInsert=function(a,c){j.insert(a,c,b("cr:6114").appendContent)};j.insert=function(a,c,d){b("Style").set(c,"opacity",0),d(a,c),new j(c).from("opacity",0).to("opacity",1).duration(400).go()};e.exports=j}),null);