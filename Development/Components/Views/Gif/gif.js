//Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
var componentController=require("./gif.controller");
//routing of component done here. change url and state if you want custome routes/parameters etc
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('gif',{
			url:'/',
		template:'<gif></gif>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);
app.component('gif',new gifConfig());
//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
//we are using angular template cache service to cache all our templates/partials.
//this syntax should not be touched because gulp will covert partials in this service data.
function gifConfig(){
  this.controller=componentController;
  this.template=function($templateCache){
		return $templateCache.get('Views/Gif/gif.html');
	};
  this.template.$inject=['$templateCache'];
	this.bindings={};
	this.require={};
	this.controllerAs='gif';
}
