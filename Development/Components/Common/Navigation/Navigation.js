//Author : Hannad Rehman Mon Nov 07 2016 12:10:03 GMT+0530 (India Standard Time)

var app=require('../../../../Development/Assets/Js/appConfig.js');
app.component('navigation',{
	controller:navigationCtr,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Navigation/Navigation.html');
	}]
});

function navigationCtr(){
	console.log('navigation component is up and working');
}