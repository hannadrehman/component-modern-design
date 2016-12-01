//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)

var app=require('../../../Development/Assets/Js/appConfig.js');
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
}]);

app.component('application',{
	controller:require('./ApplicationController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Application/Application.html');
	}]
});
