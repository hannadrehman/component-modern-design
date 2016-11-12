//Author : Hannad Rehman Thu Nov 10 2016 12:22:03 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');

app.component('pictures',{
	controller:require('./picturesController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/pictures/pictures.html');
	}],
	bindings:{
		pictures:'<'
	}
});