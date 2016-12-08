//Author : Hannad Rehman Wed Dec 07 2016 20:48:13 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
var componentController=require("./gifDisplay.controller");

app.component('gifDisplay',new gifDisplayConfig());
//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
//we are using angular template cache service to cache all our templates/partials.
//this syntax should not be touched because gulp will covert partials in this service data.
function gifDisplayConfig(){
  this.controller=componentController;
  this.template=function($templateCache){
		return $templateCache.get('Common/GifDisplay/gifDisplay.html');
	};
  this.template.$inject=['$templateCache'];
	this.bindings={
    type:'<'
  };
	this.require={};
	this.controllerAs='gifDisplay';
}
