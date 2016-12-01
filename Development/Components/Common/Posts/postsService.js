//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent
app.factory('postsService',['$http',function($http){
	return{
		getPosts:function(callback) {
			$http({
					url:'https://jsonplaceholder.typicode.com/posts',
					method:'GET'
				}).then(function(success){
					if(callback && typeof callback.success=='function'){
						return callback.success(success);
					}
				},function(error){
					if(callback && typeof callback.error=='function'){
					 return	callback.error(error);
					}
				});
		}
	};
}]);
