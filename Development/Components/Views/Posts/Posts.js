//Author : Hannad Rehman Wed Nov 09 2016 19:31:52 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('posts',{
			url:'/posts',
		template:'<posts></posts>'
	});
}]);

app.component('posts',{
	controller:['postsService',require('./PostsController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Posts/Posts.html');
	}]
});