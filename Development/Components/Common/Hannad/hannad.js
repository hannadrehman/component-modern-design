//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
var componentController=require("./hannad.controller");

app.component('hannad',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Hannad/hannad.html');
	}]
});