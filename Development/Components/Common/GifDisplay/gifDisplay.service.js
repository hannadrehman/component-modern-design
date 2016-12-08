//Author : Hannad Rehman Wed Dec 07 2016 20:48:13 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
app.factory('gifDisplayService',gifDisplayFactory);
//dependency injection goes here. all the services that are needed by this factory
gifDisplayFactory.$inject=['applicationService'];
function gifDisplayFactory(applicationService){
	//a factory function returns a singleton object.
	return new factoryMethods(applicationService);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(appService){
	this.fetchGifs=function(serviceObj,callback){
		appService.requestMaker(serviceObj,{
			success:function(successData){
				if(typeof callback.success=='function'){
					 return callback.success(successData);
				}
			},
			error:function (errorData) {
				if(typeof callback.error=='function'){
					return callback.error(errorData);
				}
			}
		});
	};
}
