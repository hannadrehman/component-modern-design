//Author : Hannad Rehman Wed Nov 09 2016 19:31:52 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('postsService',['$http',function($http){
	return{
		fetchAllPosts:function(callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/posts',
					method:'GET'
				}).then(function(success){callback.success(success);},function(error){callback.error(error);});
					},
		fetchPostComments:function(id,callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/posts/'+id+'/comments',
					method:'GET'
				}).then(function(success){callback.success(success);},function(){callback.error(error);});
		}
	};
}]);