(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app=angular.module('kmPortal',['templateCache','ui.router']);

module.exports=app;
},{}],2:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)

var app=require('../../../Development/Assets/Js/appConfig.js');
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
}]);

app.component('application',{
	controller:require('./ApplicationController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Application/Application.html');
	}]
});

},{"../../../Development/Assets/Js/appConfig.js":1,"./ApplicationController.js":3}],3:[function(require,module,exports){
applicationCtr.$inject=[];
function applicationCtr(){
	console.log('parent component is up and working');
}

module.exports=applicationCtr;

},{}],4:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)
},{}],5:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');

app.component('posts',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:require('./postsController'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/Posts/posts.html');
	}],
	require:{
		parent:'^^home'
	}
});

},{"../../../../Development/Assets/Js/appConfig":1,"./postsController":6}],6:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
postsCtr.$inject=['postsService'];
function postsCtr(postsService){
	console.log('posts component is up and working');

	var self=this;
	self.posts={
		listOfPosts:[]
	};
	self.$onInit=function(){
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

	};
	self.$onChanges=function(){
		// console.log('change function is working');

	};
	self.$onDestroy=function(){
		// console.log('destroy function is working');
	};

}
 module.exports=postsCtr;

},{}],7:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:30:26 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent
app.factory('postsService',['$http',function($http){
	return{
		getPosts:function(callback) {
			$http({
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
		}
	};
}]);

},{"../../../../Development/Assets/Js/appConfig":1}],8:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');

app.component('navigation',{
	//if you want to inject dependencies intp your controller go to controller.js and use controllername.$inject=['yourservicename'];
	controller:require('./navigationController'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/navigation/navigation.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig":1,"./navigationController":9}],9:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//navigationCtr.$inject=[];
function navigationCtr(){
	console.log('navigation component is up and working');
}
 module.exports=navigationCtr;
},{}],10:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:20:39 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require('../../../../Development/Assets/Js/appConfig');
// this is the node syntax of including js module. the Main js module is in applicationComponent 
app.factory('navigationService',['$http',function($http){
	return{
		functionName:'functionD definition'
	};
}]);
},{"../../../../Development/Assets/Js/appConfig":1}],11:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent
var app=require("../../../../Development/Assets/Js/appConfig");
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
	controller:require('./homeController'),

	//we are using angular template cache service to cache all our templates/partials.
	//this syntax should not be touched because gulp will covert partials in this service data.

	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Home/home.html');
	}]
});

},{"../../../../Development/Assets/Js/appConfig":1,"./homeController":12}],12:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)


//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
//homeCtr.$inject=[];
function homeCtr(){
	console.log('home component is up and working');
}
 module.exports=homeCtr;
},{}],13:[function(require,module,exports){
//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
// this is the node syntax of including js module. the Main js module is in applicationComponent 
var app=require("../../../../Development/Assets/Js/appConfig");
app.factory('homeService',['$http',function($http){
	return{
		functionName:'functionD definition'
	};
}]);
},{"../../../../Development/Assets/Js/appConfig":1}]},{},[2,3,4,8,9,10,5,6,7,11,12,13]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFwcD1hbmd1bGFyLm1vZHVsZSgna21Qb3J0YWwnLFsndGVtcGxhdGVDYWNoZScsJ3VpLnJvdXRlciddKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzPWFwcDtcbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjowNjo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcclxuXHJcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xyXG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xyXG59XSk7XHJcblxyXG5hcHAuY29tcG9uZW50KCdhcHBsaWNhdGlvbicse1xyXG5cdGNvbnRyb2xsZXI6cmVxdWlyZSgnLi9BcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMnKSxcclxuXHR0ZW1wbGF0ZTpbJyR0ZW1wbGF0ZUNhY2hlJyxmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSl7XHJcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdBcHBsaWNhdGlvbi9BcHBsaWNhdGlvbi5odG1sJyk7XHJcblx0fV1cclxufSk7XHJcblxufSx7XCIuLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vQXBwbGljYXRpb25Db250cm9sbGVyLmpzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuYXBwbGljYXRpb25DdHIuJGluamVjdD1bXTtcclxuZnVuY3Rpb24gYXBwbGljYXRpb25DdHIoKXtcclxuXHRjb25zb2xlLmxvZygncGFyZW50IGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1hcHBsaWNhdGlvbkN0cjtcclxuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBNb24gTm92IDA3IDIwMTYgMTI6MDY6NTIgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG59LHt9XSw1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgRGVjIDAxIDIwMTYgMjM6MzA6MjYgR01UKzA1MzAgKElTVClcbi8vIHRoaXMgaXMgdGhlIG5vZGUgc3ludGF4IG9mIGluY2x1ZGluZyBqcyBtb2R1bGUuIHRoZSBNYWluIGpzIG1vZHVsZSBpcyBpbiBhcHBsaWNhdGlvbkNvbXBvbmVudFxudmFyIGFwcD1yZXF1aXJlKCcuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnJyk7XG5cbmFwcC5jb21wb25lbnQoJ3Bvc3RzJyx7XG5cdC8vaWYgeW91IHdhbnQgdG8gaW5qZWN0IGRlcGVuZGVuY2llcyBpbnRwIHlvdXIgY29udHJvbGxlciBnbyB0byBjb250cm9sbGVyLmpzIGFuZCB1c2UgY29udHJvbGxlcm5hbWUuJGluamVjdD1bJ3lvdXJzZXJ2aWNlbmFtZSddO1xuXHRjb250cm9sbGVyOnJlcXVpcmUoJy4vcG9zdHNDb250cm9sbGVyJyksXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdDb21tb24vUG9zdHMvcG9zdHMuaHRtbCcpO1xuXHR9XSxcblx0cmVxdWlyZTp7XG5cdFx0cGFyZW50OideXmhvbWUnXG5cdH1cbn0pO1xuXG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWdcIjoxLFwiLi9wb3N0c0NvbnRyb2xsZXJcIjo2fV0sNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gVGh1IERlYyAwMSAyMDE2IDIzOjMwOjI2IEdNVCswNTMwIChJU1QpXG5cbi8vdW5jb21tZW50IHRoaXMgbGluZSBhbmQgYWRkIGFzIGEgc3RyaW5nIHRvIHRoZSBhcnJheSBpZiB5b3Ugd2FudCB0byBpbmplY3QgZGVwZW5kZW5jaWVzIGluIHlvdXIgY29udHJvbGxlcjtcbnBvc3RzQ3RyLiRpbmplY3Q9Wydwb3N0c1NlcnZpY2UnXTtcbmZ1bmN0aW9uIHBvc3RzQ3RyKHBvc3RzU2VydmljZSl7XG5cdGNvbnNvbGUubG9nKCdwb3N0cyBjb21wb25lbnQgaXMgdXAgYW5kIHdvcmtpbmcnKTtcblxuXHR2YXIgc2VsZj10aGlzO1xuXHRzZWxmLnBvc3RzPXtcblx0XHRsaXN0T2ZQb3N0czpbXVxuXHR9O1xuXHRzZWxmLiRvbkluaXQ9ZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnaW5pdCBmdW5jdGlvbiBpcyB3b3JraW5nJyk7XG5cdFx0cG9zdHNTZXJ2aWNlLmdldFBvc3RzKHtcblx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdHNlbGYucG9zdHMubGlzdE9mUG9zdHM9ZGF0YS5kYXRhO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhzZWxmLnBvc3RzLmxpc3RPZlBvc3RzKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0YWxlcnQoJ2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fTtcblx0c2VsZi4kb25DaGFuZ2VzPWZ1bmN0aW9uKCl7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NoYW5nZSBmdW5jdGlvbiBpcyB3b3JraW5nJyk7XG5cblx0fTtcblx0c2VsZi4kb25EZXN0cm95PWZ1bmN0aW9uKCl7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2Rlc3Ryb3kgZnVuY3Rpb24gaXMgd29ya2luZycpO1xuXHR9O1xuXG59XG4gbW9kdWxlLmV4cG9ydHM9cG9zdHNDdHI7XG5cbn0se31dLDc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBEZWMgMDEgMjAxNiAyMzozMDoyNiBHTVQrMDUzMCAoSVNUKVxuLy8gdGhpcyBpcyB0aGUgbm9kZSBzeW50YXggb2YgaW5jbHVkaW5nIGpzIG1vZHVsZS4gdGhlIE1haW4ganMgbW9kdWxlIGlzIGluIGFwcGxpY2F0aW9uQ29tcG9uZW50XG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcnKTtcbi8vIHRoaXMgaXMgdGhlIG5vZGUgc3ludGF4IG9mIGluY2x1ZGluZyBqcyBtb2R1bGUuIHRoZSBNYWluIGpzIG1vZHVsZSBpcyBpbiBhcHBsaWNhdGlvbkNvbXBvbmVudFxuYXBwLmZhY3RvcnkoJ3Bvc3RzU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0Z2V0UG9zdHM6ZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdCRodHRwKHtcblx0XHRcdFx0XHR1cmw6J2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsXG5cdFx0XHRcdFx0bWV0aG9kOidHRVQnXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdFx0aWYoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrLnN1Y2Nlc3M9PSdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLnN1Y2Nlc3Moc3VjY2Vzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdFx0XHRpZihjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2suZXJyb3I9PSdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdCByZXR1cm5cdGNhbGxiYWNrLmVycm9yKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcbn1dKTtcblxufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnXCI6MX1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBEZWMgMDEgMjAxNiAyMzoyMDozOSBHTVQrMDUzMCAoSVNUKVxuLy8gdGhpcyBpcyB0aGUgbm9kZSBzeW50YXggb2YgaW5jbHVkaW5nIGpzIG1vZHVsZS4gdGhlIE1haW4ganMgbW9kdWxlIGlzIGluIGFwcGxpY2F0aW9uQ29tcG9uZW50IFxudmFyIGFwcD1yZXF1aXJlKCcuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnJyk7XG5cbmFwcC5jb21wb25lbnQoJ25hdmlnYXRpb24nLHtcblx0Ly9pZiB5b3Ugd2FudCB0byBpbmplY3QgZGVwZW5kZW5jaWVzIGludHAgeW91ciBjb250cm9sbGVyIGdvIHRvIGNvbnRyb2xsZXIuanMgYW5kIHVzZSBjb250cm9sbGVybmFtZS4kaW5qZWN0PVsneW91cnNlcnZpY2VuYW1lJ107XG5cdGNvbnRyb2xsZXI6cmVxdWlyZSgnLi9uYXZpZ2F0aW9uQ29udHJvbGxlcicpLFxuXHR0ZW1wbGF0ZTpbJyR0ZW1wbGF0ZUNhY2hlJyxmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSl7XG5cdFx0cmV0dXJuICR0ZW1wbGF0ZUNhY2hlLmdldCgnQ29tbW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5odG1sJyk7XG5cdH1dXG59KTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZ1wiOjEsXCIuL25hdmlnYXRpb25Db250cm9sbGVyXCI6OX1dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBEZWMgMDEgMjAxNiAyMzoyMDozOSBHTVQrMDUzMCAoSVNUKVxuXG4vL3VuY29tbWVudCB0aGlzIGxpbmUgYW5kIGFkZCBhcyBhIHN0cmluZyB0byB0aGUgYXJyYXkgaWYgeW91IHdhbnQgdG8gaW5qZWN0IGRlcGVuZGVuY2llcyBpbiB5b3VyIGNvbnRyb2xsZXI7XG4vL25hdmlnYXRpb25DdHIuJGluamVjdD1bXTtcbmZ1bmN0aW9uIG5hdmlnYXRpb25DdHIoKXtcblx0Y29uc29sZS5sb2coJ25hdmlnYXRpb24gY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG59XG4gbW9kdWxlLmV4cG9ydHM9bmF2aWdhdGlvbkN0cjtcbn0se31dLDEwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgRGVjIDAxIDIwMTYgMjM6MjA6MzkgR01UKzA1MzAgKElTVClcbi8vIHRoaXMgaXMgdGhlIG5vZGUgc3ludGF4IG9mIGluY2x1ZGluZyBqcyBtb2R1bGUuIHRoZSBNYWluIGpzIG1vZHVsZSBpcyBpbiBhcHBsaWNhdGlvbkNvbXBvbmVudCBcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZycpO1xuLy8gdGhpcyBpcyB0aGUgbm9kZSBzeW50YXggb2YgaW5jbHVkaW5nIGpzIG1vZHVsZS4gdGhlIE1haW4ganMgbW9kdWxlIGlzIGluIGFwcGxpY2F0aW9uQ29tcG9uZW50IFxuYXBwLmZhY3RvcnkoJ25hdmlnYXRpb25TZXJ2aWNlJyxbJyRodHRwJyxmdW5jdGlvbigkaHR0cCl7XG5cdHJldHVybntcblx0XHRmdW5jdGlvbk5hbWU6J2Z1bmN0aW9uRCBkZWZpbml0aW9uJ1xuXHR9O1xufV0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnXCI6MX1dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgRGVjIDAxIDIwMTYgMjM6MTc6MDkgR01UKzA1MzAgKElTVClcbi8vIHRoaXMgaXMgdGhlIG5vZGUgc3ludGF4IG9mIGluY2x1ZGluZyBqcyBtb2R1bGUuIHRoZSBNYWluIGpzIG1vZHVsZSBpcyBpbiBhcHBsaWNhdGlvbkNvbXBvbmVudFxudmFyIGFwcD1yZXF1aXJlKFwiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZ1wiKTtcbi8vcm91dGluZyBvZiBjb21wb25lbnQgZG9uZSBoZXJlLiBjaGFuZ2UgdXJsIGFuZCBzdGF0ZSBpZiB5b3Ugd2FudCBjdXN0b21lIHJvdXRlcy9wYXJhbWV0ZXJzIGV0Y1xuYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywnJHVybFJvdXRlclByb3ZpZGVyJyxmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpe1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnLycse1xuXHRcdFx0dXJsOicvJyxcblx0XHR0ZW1wbGF0ZTonPGhvbWU+PC9ob21lPidcblx0XHQvL3BsZWFzZSBiZSBjYXJlZnVsbCBhYm91dCB0aGlzLiB0aGlzIGlzIHRoZSByb3V0ZSB0ZW1wbGF0ZSBhbmQgc2hvdWxkIG1hdGNoIGNvbXBvbmVudCBkZWZpbml0aW9uXG5cdH0pO1xufV0pO1xuXG5hcHAuY29tcG9uZW50KCdob21lJyx7XG5cdC8vaWYgeW91IHdhbnQgdG8gaW5qZWN0IGRlcGVuZGVuY2llcyBpbnRwIHlvdXIgY29udHJvbGxlciBnbyB0byBjb250cm9sbGVyLmpzIGFuZCB1c2UgY29udHJvbGxlcm5hbWUuJGluamVjdD1bJ3lvdXJzZXJ2aWNlbmFtZSddO1xuXHRjb250cm9sbGVyOnJlcXVpcmUoJy4vaG9tZUNvbnRyb2xsZXInKSxcblxuXHQvL3dlIGFyZSB1c2luZyBhbmd1bGFyIHRlbXBsYXRlIGNhY2hlIHNlcnZpY2UgdG8gY2FjaGUgYWxsIG91ciB0ZW1wbGF0ZXMvcGFydGlhbHMuXG5cdC8vdGhpcyBzeW50YXggc2hvdWxkIG5vdCBiZSB0b3VjaGVkIGJlY2F1c2UgZ3VscCB3aWxsIGNvdmVydCBwYXJ0aWFscyBpbiB0aGlzIHNlcnZpY2UgZGF0YS5cblxuXHR0ZW1wbGF0ZTpbJyR0ZW1wbGF0ZUNhY2hlJyxmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSl7XG5cdFx0cmV0dXJuICR0ZW1wbGF0ZUNhY2hlLmdldCgnVmlld3MvSG9tZS9ob21lLmh0bWwnKTtcblx0fV1cbn0pO1xuXG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWdcIjoxLFwiLi9ob21lQ29udHJvbGxlclwiOjEyfV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBEZWMgMDEgMjAxNiAyMzoxNzowOSBHTVQrMDUzMCAoSVNUKVxuXG5cbi8vdW5jb21tZW50IHRoaXMgbGluZSBhbmQgYWRkIGFzIGEgc3RyaW5nIHRvIHRoZSBhcnJheSBpZiB5b3Ugd2FudCB0byBpbmplY3QgZGVwZW5kZW5jaWVzIGluIHlvdXIgY29udHJvbGxlcjtcbi8vaG9tZUN0ci4kaW5qZWN0PVtdO1xuZnVuY3Rpb24gaG9tZUN0cigpe1xuXHRjb25zb2xlLmxvZygnaG9tZSBjb21wb25lbnQgaXMgdXAgYW5kIHdvcmtpbmcnKTtcbn1cbiBtb2R1bGUuZXhwb3J0cz1ob21lQ3RyO1xufSx7fV0sMTM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBEZWMgMDEgMjAxNiAyMzoxNzowOSBHTVQrMDUzMCAoSVNUKVxuLy8gdGhpcyBpcyB0aGUgbm9kZSBzeW50YXggb2YgaW5jbHVkaW5nIGpzIG1vZHVsZS4gdGhlIE1haW4ganMgbW9kdWxlIGlzIGluIGFwcGxpY2F0aW9uQ29tcG9uZW50IFxudmFyIGFwcD1yZXF1aXJlKFwiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZ1wiKTtcbmFwcC5mYWN0b3J5KCdob21lU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0ZnVuY3Rpb25OYW1lOidmdW5jdGlvbkQgZGVmaW5pdGlvbidcblx0fTtcbn1dKTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZ1wiOjF9XX0se30sWzIsMyw0LDgsOSwxMCw1LDYsNywxMSwxMiwxM10pO1xuIl0sImZpbGUiOiJidW5kbGUuanMifQ==
