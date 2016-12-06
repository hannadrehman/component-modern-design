//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");

app.factory('homeService',homeFactory);
homeFactory.$inject=['$http'];
function homeFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
	this.functionName=console.log('hi');
}
