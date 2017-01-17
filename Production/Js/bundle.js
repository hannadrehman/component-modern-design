(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app=angular.module('myApp',['templateCache','ui.router']);

module.exports=app;
},{}],2:[function(require,module,exports){
applicationCtr.$inject=['applicationService'];
function applicationCtr(applicationService){
	console.log('parent component is up and working');
	this.me='hannad';
}

module.exports=applicationCtr;

},{}],3:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)

var app=require('../../../Development/Assets/Js/appConfig');
var componentController=require('./Application.controller');

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
}]);

app.component('application',new applicationConfig());

function applicationConfig(){
	this.controller=componentController;
	this.template=function($templateCache){
		return $templateCache.get('Application/Application.html');
	};
	this.template.$inject=['$templateCache'];
	this.controllerAs='application';
	this.bindings={};
	this.require={};
}

},{"../../../Development/Assets/Js/appConfig":1,"./Application.controller":2}],4:[function(require,module,exports){
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

},{"../../../Development/Assets/Js/appConfig":1}],5:[function(require,module,exports){
//Author : Hannad Rehman Wed Dec 07 2016 20:48:13 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
gifDisplayCtr.$inject=['gifDisplayService'];
function gifDisplayCtr(gifDisplayService){
	console.log('gifDisplay component is up and working');
	var $this=this;
	$this.data={
		images:[]
	};
$this.$onInit=function(){
	getData($this.type);
};
$this.$onChanges=function(changes){
	getNewData(changes);
};
	function getData(type){
		var serviceObj={
			method:1,
			data:{}
		};
		if(type=='trending'){
			serviceObj.url='http://api.giphy.com/v1/gifs/'+$this.type+'?api_key=dc6zaTOxFJmzC';
		}
		else{
			serviceObj.url='http://api.giphy.com/v1/gifs/'+$this.type+'?q'+$this.search+'=&api_key=dc6zaTOxFJmzC';
		}

		gifDisplayService.fetchGifs(serviceObj,{
			success:function(data){
				if(data.status==200){
							$this.data.images=data.data.data;
							console.log("Search",$this.data.images);
						}
			},
			error:function(error){
				alert(error.status);
			}
		});
	}
	function getNewData(changes) {
		var a = changes;
		console.log(a);
		if (typeof changes.type.previousValue==='string') {
				// if($this.type!==changes.type.currentValue){
					$this.type=changes.type.currentValue;
					getData($this.type);
			// }
			}

	}
}
 module.exports=gifDisplayCtr;

},{}],6:[function(require,module,exports){
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

},{"../../../../Development/Assets/Js/appConfig":1,"./gifDisplay.controller":5}],7:[function(require,module,exports){
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

},{"../../../../Development/Assets/Js/appConfig":1}],8:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
postsCtr.$inject=['postsService'];
function postsCtr(postsService){
	console.log('posts component is up and working');

	var self=this;
	self.posts={
		listOfPosts:[]
	};
	// self.$onInit=function(){
		// console.log('init function is working');
		// postsService.getPosts({
		// 	success:function(data){
		// 		self.posts.listOfPosts=data.data;
		// 		console.log(self.posts.listOfPosts);
		// 	},
		// 	error:function(data){
		// 		alert('error');
		// 	}
		// });

	// };


	self.$onChanges=function(){
		// console.log('change function is working');

	};
	self.$onDestroy=function(){
		// console.log('destroy function is working');
	};

}
 module.exports=postsCtr;

},{}],9:[function(require,module,exports){
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

},{"../../../../Development/Assets/Js/appConfig":1,"./posts.controller":8}],10:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent
app.factory('postsService',postFactory);
postFactory.$inject=['$http'];
function postFactory($http){
	return new factoryMethods($http);
}

function factoryMethods(http){
	this.getPosts=function(callback) {
		http({
				url:'https://jsonplaceholder.typicode.com/posts',
				method:'GET'
			}).then(function(success){
				if(callback && typeof callback.success=='function'){
					return callback.success(success);
				}
			},function(error){
				if(callback && typeof callback.error=='function'){
				 return	callback.error(error);
				}
			});
	};
}

},{"../../../../Development/Assets/Js/appConfig":1}],11:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//navigationCtr.$inject=[];
function navigationCtr(){
	console.log('navigation component is up and working');
}
 module.exports=navigationCtr;
},{}],12:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
var	componentController=require('./navigation.controller');

app.component('navigation',new navigationConfig());

function navigationConfig() {
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	//templates are stored in templatecache service by gulp. so we require them from in this syntax;
	this.controller=componentController;
	this.template=function($templateCache){
		return $templateCache.get('Common/navigation/navigation.html');
	};
	this.template.$inject=['$templateCache'];
	this.bindings={};
	this.require={};
}

},{"../../../../Development/Assets/Js/appConfig":1,"./navigation.controller":11}],13:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent 
app.factory('navigationService',['$http',function($http){
	return{
		functionName:'functionD definition'
	};
}]);
},{"../../../../Development/Assets/Js/appConfig":1}],14:[function(require,module,exports){
//Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
gifCtr.$inject=['gifService'];
function gifCtr(gifService){
	console.log('gif component is up and working');
	var $this=this;
	$this.elements={
		isSearchTxt:false,
		type:'trending'
	};
	$this.navClick=function(data){
		if(data=='search'){
			$this.elements.isSearchTxt=true;
			$this.elements.type=data;
		}
		else {
				$this.elements.type=data;
				$this.elements.isSearchTxt=false;

		}

	};

}
 module.exports=gifCtr;

},{}],15:[function(require,module,exports){
//Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
var componentController=require("./gif.controller");
//routing of component done here. change url and state if you want custome routes/parameters etc
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('gif',{
			url:'/',
		template:'<gif></gif>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);
app.component('gif',new gifConfig());
//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
//we are using angular template cache service to cache all our templates/partials.
//this syntax should not be touched because gulp will covert partials in this service data.
function gifConfig(){
  this.controller=componentController;
  this.template=function($templateCache){
		return $templateCache.get('Views/Gif/gif.html');
	};
  this.template.$inject=['$templateCache'];
	this.bindings={};
	this.require={};
	this.controllerAs='gif';
}

},{"../../../../Development/Assets/Js/appConfig":1,"./gif.controller":14}],16:[function(require,module,exports){
//Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('gifService',gifFactory);
//dependency injection goes here. all the services that are needed by this factory
gifFactory.$inject=['applicationService'];
function gifFactory(applicationService){
	//a factory function returns a singleton object.
	return new factoryMethods(applicationService);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(appService){
	this.fetchSearch=function(serviceObj,callback){
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

},{"../../../../Development/Assets/Js/appConfig":1}]},{},[2,3,4,5,6,7,11,12,13,8,9,10,14,15,16]);
