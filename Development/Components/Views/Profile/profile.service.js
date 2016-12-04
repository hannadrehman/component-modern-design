//Author : Hannad Rehman Mon Dec 05 2016 00:31:56 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('profileService',profileFactory);
//dependency injection goes here. all the services that are needed by this factory
profileFactory.$inject=['$http'];
function profileFactory($http){
	//a factory function returns a singleton object.
	return new factoryMethods($http);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}
					