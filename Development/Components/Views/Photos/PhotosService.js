//Author : Hannad Rehman Wed Nov 09 2016 19:34:16 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('photosService',['$http',function($http){
	return{
		fetchAlbums:function(callback){
			$http({
				url:'https://jsonplaceholder.typicode.com/albums',
				method:'GET',
			}).then(function(success){
				callback.success(success);
			},
			function(error){
				callback.error(error);
			});
		},
		fetchAlbumCover:function(data,callback){
			$http({
				url:'https://jsonplaceholder.typicode.com/photos/'+data,
				method:'GET',
			}).then(function(success){
				callback.success(success);
			},
			function(error){
				callback.error(error);
			});
		}
	};
}]);