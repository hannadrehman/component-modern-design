//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
app.factory('hannadService',hannadFactory);
hannadFactory.$inject=['$http'];
function hannadFactory($http){
return new factoryMethods($http);
}
function factoryMethods(http){
this.functionName='hello this is a factory function';
}
