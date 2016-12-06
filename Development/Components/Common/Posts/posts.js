//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
var componentController=require('./posts.controller');

app.component('posts',new postsConfig());

function postsConfig() {
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	//templates are stored in templatecache service by gulp. so we require them from in this syntax;
	this.controller=componentController;
	this.template=function($templateCache){
		return $templateCache.get('Common/Posts/posts.html');
	};
	this.template.$inject=['$templateCache'];
	this.bindings={};
	this.require={
		parent:'^^home'
	};
}
