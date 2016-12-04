(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app=angular.module('kmPortal',['templateCache','ui.router']);

module.exports=app;
},{}],2:[function(require,module,exports){
applicationCtr.$inject=['applicationService'];
function applicationCtr(applicationService){
	console.log('parent component is up and working');
	
}

module.exports=applicationCtr;

},{}],3:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)

var app=require('../../../Development/Assets/Js/appConfig');
var componentController=require('./Application.controller');

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
}]);

app.component('application',{
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Application/Application.html');
	}]
});

},{"../../../Development/Assets/Js/appConfig":1,"./Application.controller":2}],4:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)
var app=require("../../../Development/Assets/Js/appConfig");

app.factory('applicationService',applicationFactory);
applicationFactory.$inject=['$http'];
function applicationFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
  this.functionName='hello this is a factory function';
}

},{"../../../Development/Assets/Js/appConfig":1}],5:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
hannadCtr.$inject=['hannadService'];
function hannadCtr(hannadService){
	console.log('hannad component is up and working');
	console.log(hannadService.functionName);
}
 module.exports=hannadCtr;

},{}],6:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
var componentController=require("./hannad.controller");

app.component('hannad',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Hannad/hannad.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig":1,"./hannad.controller":5}],7:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
app.factory('hannadService',hannadFactory);
hannadFactory.$inject=['$http'];
function hannadFactory($http){
return new factoryMethods($http);
}
function factoryMethods(http){
this.functionName='hello this is a factory function';
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
		console.log('init function is working');
		postsService.getPosts({
			success:function(data){
				self.posts.listOfPosts=data.data;
				console.log(self.posts.listOfPosts);
			},
			error:function(data){
				alert('error');
			}
		});

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

app.component('posts',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Posts/posts.html');
	}],
	require:{
		parent:'^^home'
	}
});

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

app.component('navigation',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/navigation/navigation.html');
	}]
});

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
//Author : Hannad Rehman Mon Dec 05 2016 00:17:21 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('hannadService',hannadFactory);
hannadFactory.$inject=['$http'];
function hannadFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}
					

},{"../../../../Development/Assets/Js/appConfig":1}],15:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)


//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//homeCtr.$inject=[];
function homeCtr(){
	console.log('home component is up and working');
}
 module.exports=homeCtr;
},{}],16:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
var componentController=require('./home.controller');

//routing of component done here. change url and state if you want custome routes/parameters etc
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('/',{
			url:'/',
		template:'<home></home>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);

app.component('home',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,

	//we are using angular template cache service to cache all our templates/partials.
	//this syntax should not be touched because gulp will covert partials in this service data.

	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Home/home.html');
	}]
});

},{"../../../../Development/Assets/Js/appConfig":1,"./home.controller":15}],17:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");

app.factory('homeService',homeFactory);
homeFactory.$inject=['$http'];
function homeFactory($http){
	return new factoryMethods($http);
}
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}

},{"../../../../Development/Assets/Js/appConfig":1}],18:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:31:56 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//profileCtr.$inject=[];
function profileCtr(){
	console.log('profile component is up and working');
}
 module.exports=profileCtr;
},{}],19:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:31:56 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
var componentController=require("./profile.controller");
//routing of component done here. change url and state if you want custome routes/parameters etc
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('profile',{
			url:'/profile',
		template:'<profile></profile>'
		//please be carefull about this. this is the route template and should match component definition
	});
}]);

app.component('profile',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:componentController,

	//we are using angular template cache service to cache all our templates/partials.
	//this syntax should not be touched because gulp will covert partials in this service data.

	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Profile/profile.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig":1,"./profile.controller":18}],20:[function(require,module,exports){
//Author : Hannad Rehman Mon Dec 05 2016 00:31:56 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('profileService',profileFactory);
//dependency injection goes here. all the services that are needed by this factory
profileFactory.$inject=['$http'];
function profileFactory($http){
	//a factory function returns a singleton object.
	return new factoryMethods($http);
}
//this function contains all the factory methods,or service call methods here.
//web service call functions should be declared here with this.functionname(){} foramt.
function factoryMethods(http){
	this.functionName='hello this is a factory function';
}
					
},{"../../../../Development/Assets/Js/appConfig":1}]},{},[2,3,4,5,6,7,11,12,13,8,9,10,14,15,16,17,18,19,20]);
