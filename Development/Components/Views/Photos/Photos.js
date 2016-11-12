//Author : Hannad Rehman Wed Nov 09 2016 19:34:16 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('photos',{
			url:'/photos',
		template:'<photos></photos>'
	});
}]);

app.component('photos',{
	controller:['photosService',require('./PhotosController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Photos/Photos.html');
	}]
});