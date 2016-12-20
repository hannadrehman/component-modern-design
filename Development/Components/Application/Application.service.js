//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)
var app=require("../../../Development/Assets/Js/appConfig");

app.factory('applicationService',applicationFactory);
applicationFactory.$inject=['$http'];
function applicationFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
  this.requestMaker=function(serviceObject,callback){
		//request maker does the webservice call.. the callback functions success and error pass the data to the
		//corrosponding service methods from where they are being called.
		// structure of serviceObject={url:'',method:(1,2,3),data:{}}
		//structure of callback={success:function(successData){},error:function(errorData){}}//
		var serviceMethods={
			1:'GET',
			2:'POST',
			3:'PUT',
			4:'DELETE'
		};
		var webserviceConfig={
			baseUrl:'',
			post:''
		};
		if(serviceObject.url!=='' && serviceObject.url!==undefined && serviceObject.method!=='' && serviceObject.method!==undefined){
			try {
				http({
					url:webserviceConfig.baseUrl+serviceObject.url,
					method:serviceMethods[serviceObject.method],
					data:serviceObject.data
				}).then(function(successData){
					if(typeof callback.success=="function"){
						return callback.success(successData);
						//returns the callback funtion from the service method
					}
				}).catch(function(errorData){
					if(typeof callback.error=="function"){
						return callback.error(errorData);
					}
				});
				
			} catch (e) {
				return callback.error({status:404,statusText:e});

			}
		}
		else{
			return callback.error({status:404,statusText:"Invalid Webservice Data Object"});

		}
	};
}
