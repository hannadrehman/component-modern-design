//Author : Hannad Rehman Wed Nov 09 2016 17:50:35 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.component('albums',{
	controller:['$state',require('./AlbumsController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Albums/Albums.html');
	}],
	bindings:{
		data:'<'
	}
});



