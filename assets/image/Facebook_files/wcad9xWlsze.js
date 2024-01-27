;/*FB_PKG_DELIM*/

__d("LSClearThreadBannedUsers",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.i64.neq(void 0,void 0)?b.forEach(b.db.table(297).fetch([[[a[0],void 0]]]),function(a){return a["delete"]()}):b.forEach(b.db.table(297).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSIssueParticipantPointQuery",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return d[0]=new c.Map(),d[0].set("table","14"),d[0].set("type",c.i64.cast([0,1])),d[0].set("1",a[0]),d[0].set("2",a[1]),d[1]=c.toJSON(d[0]),c.storedProcedure(b("LSIssueNewTask"),"ppq",c.i64.cast([0,17]),d[1],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),c.i64.cast([0,1]),void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSUpdateCommunityThreadStaleState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.filter(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&([b.i64.cast([0,23]),b.i64.cast([0,21]),b.i64.cast([0,18]),b.i64.cast([0,26])].some(function(a){return b.i64.eq(c.threadType,a)})||b.i64.eq(c.threadType,b.i64.cast([0,152])))}).next().then(function(c,d){d=c.done;c=c.value;return d?0:(c.item,b.db.table(294).fetch([[[a[0]]]]).next().then(function(c,d){d=c.done;c=c.value;return d?b.db.table(294).add({threadKey:a[0],threadQueueSequenceId:b.i64.cast([0,0]),isStale:a[1]}):(c.item,b.forEach(b.db.table(294).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({isStale:a[1]})}))}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateSelectiveSyncState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.filter(b.db.table(9).fetch([[[a[0]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&([b.i64.cast([0,23]),b.i64.cast([0,21]),b.i64.cast([0,18]),b.i64.cast([0,26])].some(function(a){return b.i64.eq(c.threadType,a)})||b.i64.eq(c.threadType,b.i64.cast([0,152])))}).next().then(function(c,d){d=c.done;c=c.value;return d?b.db.table(294).add({threadKey:a[0],threadQueueSequenceId:b.i64.cast([0,0]),lastSelectiveSyncTimestampMs:a[1]}):(c.item,b.forEach(b.db.table(294).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastSelectiveSyncTimestampMs:a[1]})}))})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpdateThreadNullState",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({threadPictureUrl:a[1],threadPictureUrlFallback:a[2],threadPictureUrlExpirationTimestampMs:a[3],nullstateDescriptionText1:a[4],nullstateDescriptionType1:a[9],nullstateDescriptionText2:a[5],nullstateDescriptionType2:a[10],nullstateDescriptionText3:a[6],nullstateDescriptionType3:a[11],capabilities:a[14]})})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSUpsertTpqTtrc",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return c[0]=b.i64.of_float(Date.now()),b.db.table(286).put({threadKey:a[0],dasmExecutionTimestampMs:c[0],deltaInsertionTimestampMs:a[1],status:a[2]})},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSVerifyCommunityMemberContextualProfileExists",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.db.table(216).fetch([[[a[0],a[1]]]]).next().then(function(e,f){f=e.done;e=e.value;return f?(d[1]=new c.Map(),d[1].set("community_id",a[1]),d[1].set("user_id",a[0]),d[2]=c.toJSON(d[1]),c.storedProcedure(b("LSIssueNewTask"),"load_contextual_profile",c.i64.cast([0,548]),d[2],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))):(e.item,0)})},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSVerifyContactParticipantExist",["LSIssueNewTask","LSIssueParticipantPointQuery"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(e){return c.db.table(7).fetch([[[a[0]]]]).next().then(function(e,f){f=e.done;e=e.value;return f?c.sequence([function(e){return d[2]=new c.Map(),d[2].set("contact_id",a[0]),d[3]=c.toJSON(d[2]),c.storedProcedure(b("LSIssueNewTask"),"cpq_v2",c.i64.cast([0,207]),d[3],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(b){return c.forEach(c.filter(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.id,a[0])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))&&c.i64.lt(b.authorityLevel,c.i64.cast([0,60]))}),function(a){return a["delete"]()})},function(b){return c.db.table(7).add({id:a[0],rank:0,profilePictureUrl:"",name:a[2],isMessengerUser:!1,isMemorialized:!1,contactType:c.i64.cast([0,1]),contactTypeExact:c.i64.cast([0,1]),blockedByViewerStatus:c.i64.cast([0,0]),authorityLevel:c.i64.cast([0,60]),workForeignEntityType:c.i64.cast([0,0]),contactViewerRelationship:c.i64.cast([0,0])})}]):(e.item,0)})},function(d){return c.filter(c.db.table(14).fetch([[[a[1],a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[1])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[0])}).next().then(function(d,e){e=d.done;d=d.value;return e?c.storedProcedure(b("LSIssueParticipantPointQuery"),a[1],a[0]):(d.item,0)})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);