//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)
var app=require("../../../Development/Assets/Js/appConfig");

app.factory('applicationService',applicationFactory);
applicationFactory.$inject=['$http'];
function applicationFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
  this.functionName='hello this is a factory function';
}
