//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent 
app.factory('navigationService',['$http',function($http){
	return{
		functionName:'functionD definition'
	};
}]);