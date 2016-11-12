//Author : Hannad Rehman Thu Nov 10 2016 12:02:08 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('albumPhotos',{
			url:'/albumPhotos',
			template:'<album-photos></album-photos>',
			params:{albumId:1}
	});
}]);

app.component('albumPhotos',{
	controller:['$stateParams','albumPhotosService',require('./albumPhotosController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/AlbumPhotos/albumPhotos.html');
	}]
});