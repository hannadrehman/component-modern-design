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

app.component('profile',new profileConfig());

function profileConfig() {
	this.controller=componentController;
	this.template=function($templateCache){
		return $templateCache.get('Views/Profile/profile.html');
	};
	this.template.$inject=['$templateCache'];
	this.bindings={};
	this.require={};
}
