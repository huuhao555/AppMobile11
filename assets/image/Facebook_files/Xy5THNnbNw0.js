;/*FB_PKG_DELIM*/

__d("LSUpsertContextualProfileV1",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[],d=[];return b.sequence([function(d){return b.i64.eq(a[5],b.i64.cast([0,0]))?c[0]=void 0:c[0]=a[5],b.db.table(216).put({ownerId:a[0],associatedEntityId:a[1],profilePictureUrl:a[2],profilePictureFallbackUrl:a[4],profilePictureUrlExpirationTimestampMs:c[0],profileName:a[3]})},function(a){return b.resolve(d)}])}e.exports=a}),null);
__d("LSDeleteThenInsertCommunityMemberBadgeV2FromOmnistore",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.resolve(c)}e.exports=a}),null);