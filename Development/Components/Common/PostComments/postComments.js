//Author : Hannad Rehman Thu Nov 10 2016 10:47:00 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');

app.component('postComments',{
	controller:require('./postCommentsController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/PostComments/postComments.html');
	}],
	bindings:{
		comments:'<'
	}
});

