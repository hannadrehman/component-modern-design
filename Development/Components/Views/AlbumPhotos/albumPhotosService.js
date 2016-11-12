//Author : Hannad Rehman Thu Nov 10 2016 12:02:08 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('albumPhotosService',['$http',function($http){
	return{
		fetchAllPictures:function(id,callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/albums/'+id+'/photos',
					method:'GET'
				}).then(function(success){callback.success(success);},function(){callback.error(error);});
					}
	};
}]);