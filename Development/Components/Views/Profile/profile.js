//Author : Hannad Rehman Mon Dec 05 2016 00:31:56 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
var componentController=require("./profile.controller");
//routing of component done here. change url and state if you want custome routes/parameters etc
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('profile',{
			url:'/profile',
		template:'<profile></profile>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);

app.component('profile',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,

	//we are using angular template cache service to cache all our templates/partials.
	//this syntax should not be touched because gulp will covert partials in this service data.

	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Profile/profile.html');
	}]
});