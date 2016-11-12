//Author : Hannad Rehman Thu Nov 10 2016 10:12:03 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');

app.component('myPosts',{
	controller:require('./myPostsController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/MyPosts/myPosts.html');
	}],
	bindings:{
		posts:'<'
	}
	
});