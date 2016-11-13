(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app=angular.module('kmPortal',['templateCache','ui.router']);

module.exports=app;
},{}],2:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)

var app=require('../../../Development/Assets/Js/appConfig.js');
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/photos');
	$stateProvider.state('/',{
			url:'/',
		template:'<photos></photos>'
	});
}]);

app.component('application',{
	controller:require('./ApplicationController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Application/Application.html');
	}]
});


},{"../../../Development/Assets/Js/appConfig.js":1,"./ApplicationController.js":3}],3:[function(require,module,exports){
function applicationCtr(){
	console.log('parent component is up and working');
}

module.exports=applicationCtr;
},{}],4:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:06:52 GMT+0530 (India Standard Time)
},{}],5:[function(require,module,exports){
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




},{"../../../../Development/Assets/Js/appConfig.js":1,"./AlbumsController.js":6}],6:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 17:50:35 GMT+0530 (India Standard Time)

function albumsCtr($state){
	console.log('albums component is up and working');
	var $this=this;
	
	$this.$onInit=function(){
		
		$this.albums=$this.data;
		console.log($this);
		
	};

	 $this.openAlbum=function(id){
	 	$state.go('albumPhotos',{'albumId':id});
	 };
}
 module.exports=albumsCtr;
},{}],7:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./myPostsController.js":8}],8:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 10:12:03 GMT+0530 (India Standard Time)

function myPostsCtr(){
	console.log('myPosts component is up and working');
	
	var $this=this;
	$this.post={
		allPosts:[]
	};

	$this.$onInit=function(){
		$this.post.allPosts=$this.posts;
	};
}
 module.exports=myPostsCtr;
},{}],9:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1}],10:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:10:03 GMT+0530 (India Standard Time)
},{}],11:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 10:47:00 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');

app.component('postComments',{
	controller:require('./postCommentsController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/PostComments/postComments.html');
	}],
	bindings:{
		comments:'<'
	}
});


},{"../../../../Development/Assets/Js/appConfig.js":1,"./postCommentsController.js":12}],12:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 10:47:00 GMT+0530 (India Standard Time)

function postCommentsCtr(){
	console.log('postComments component is up and working');
	var $this=this;
	
	$this.comment={
		comments:[]
	};
	$this.$onInit=function(){
	console.log($this);
		$this.comment.comments=$this.comments;
	
	};
}
 module.exports=postCommentsCtr;
},{}],13:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:22:03 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');

app.component('pictures',{
	controller:require('./picturesController.js'),
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Common/pictures/pictures.html');
	}],
	bindings:{
		pictures:'<'
	}
});
},{"../../../../Development/Assets/Js/appConfig.js":1,"./picturesController.js":14}],14:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:22:03 GMT+0530 (India Standard Time)

function picturesCtr(){
	console.log('pictures component is up and working');
	var $this=this;
	$this.image={
		pictures:[]
	};
	$this.$onInit=function(){
		$this.image.pictures=$this.pictures;
		console.log($this);
	};
}
 module.exports=picturesCtr;
},{}],15:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:02:08 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('albumPhotos',{
			url:'/albumPhotos',
			template:'<album-photos></album-photos>',
			params:{albumId:1}
	});
}]);

app.component('albumPhotos',{
	controller:['$stateParams','albumPhotosService',require('./albumPhotosController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/AlbumPhotos/albumPhotos.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig.js":1,"./albumPhotosController.js":16}],16:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:02:08 GMT+0530 (India Standard Time)

function albumPhotosCtr($stateParams,albumPhotosService){
	console.log('albumPhotos component is up and working');
	var $this=this;
	$this.image={
		pictures:[]
	};
	$this.albumId=$stateParams.albumId;
	albumPhotosService.fetchAllPictures($this.albumId,{
			success:function(success){
				var arr=success.data;
				if(arr!==undefined || arr.length>0){
					$this.image.pictures=arr;
				}
			},
			error:function(error){
				console.log(error);
				alert(error);
			}
		});
}
 module.exports=albumPhotosCtr;
},{}],17:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:02:08 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('albumPhotosService',['$http',function($http){
	return{
		fetchAllPictures:function(id,callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/albums/'+id+'/photos',
					method:'GET'
				}).then(function(success){callback.success(success);},function(){callback.error(error);});
					}
	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}],18:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:34:16 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('photos',{
			url:'/photos',
		template:'<photos></photos>'
	});
}]);

app.component('photos',{
	controller:['photosService',require('./PhotosController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Photos/Photos.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig.js":1,"./PhotosController.js":19}],19:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:34:16 GMT+0530 (India Standard Time)

function photosCtr(photosService){
	console.log('photos component is up and working');
	var $this=this;
	$this.album={
		data:[]
	};
	photosService.fetchAlbums({
		success:function(data){
			var arrayData=data.data;
			if(arrayData!==undefined || arrayData.length!==0 ){
				$this.album.data=arrayData;
				getThumbnails();
			}
			else{
				$this.album.data=[];
			}
		},
		error:function(data){
			alert('some error occured');
			$this.album.data=[];
		}
	});

	function getThumbnails(){
		angular.forEach($this.album.data,function(v,k){
			var id=v.id;
			var callback={
				success:function(success){
					var imageObj=success.data;
					v.url=imageObj.thumbnailUrl;
				},
				error:function(data){
					alert('some error occured');
					v.url='https://le0pard13.files.wordpress.com/2013/08/pink-floyd-dark-side-of-the-moon-album-cover.jpg';
				}
			};
			photosService.fetchAlbumCover(id,callback);
		});
				
	}
	$this.openAlbum=function(id){
		$state.go('albumPhotos',{'albumId':id});
	};
}
 module.exports=photosCtr;
},{}],20:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:34:16 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('photosService',['$http',function($http){
	return{
		fetchAlbums:function(callback){
			$http({
				url:'https://jsonplaceholder.typicode.com/albums',
				method:'GET',
			}).then(function(success){
				callback.success(success);
			},
			function(error){
				callback.error(error);
			});
		},
		fetchAlbumCover:function(data,callback){
			$http({
				url:'https://jsonplaceholder.typicode.com/photos/'+data,
				method:'GET',
			}).then(function(success){
				callback.success(success);
			},
			function(error){
				callback.error(error);
			});
		}
	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}],21:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:31:52 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('posts',{
			url:'/posts',
		template:'<posts></posts>'
	});
}]);

app.component('posts',{
	controller:['postsService',require('./PostsController.js')],
	template:['$templateCache',function($templateCache){
		return $templateCache.get('Views/Posts/Posts.html');
	}]
});
},{"../../../../Development/Assets/Js/appConfig.js":1,"./PostsController.js":22}],22:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:31:52 GMT+0530 (India Standard Time)

function postsCtr(postsService){
	console.log('posts component is up and working');

	var $this=this;
	$this.post={
		allPosts:[]
	};

	postsService.fetchAllPosts({
		success:function(success){
			var arr=success.data;
			if(arr!==undefined || arr.length>0){
				
				fetchComments(arr);
			}

		},
		error:function(error){
			console.log(error);
			alert('something wrong happened');
		}
	});

	
	function fetchComments(arr,callback){
		if(arr!==undefined || arr.length>0){
			angular.forEach(arr,function(v,k){
				 fetchPostComment(v.id,function(comment){
				 	var obj=v;
				 	obj.comment=comment;
				 	$this.post.allPosts.push(obj);
				 });
			});

		}
	}
	function fetchPostComment(id,callback){
		postsService.fetchPostComments(id,{
			success:function(success){
				var arr=success.data;
				if(arr!==undefined || arr.length>0){
					if(callback && typeof callback=='function'){
						callback(arr);
					}
				}
			},
			error:function(error){
				console.log(error);
				alert(error);
			}
		});
	}
}
 module.exports=postsCtr;
},{}],23:[function(require,module,exports){
//Author : Hannad Rehman Wed Nov 09 2016 19:31:52 GMT+0530 (India Standard Time)
var app=require("../../../../Development/Assets/Js/appConfig.js");
app.factory('postsService',['$http',function($http){
	return{
		fetchAllPosts:function(callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/posts',
					method:'GET'
				}).then(function(success){callback.success(success);},function(error){callback.error(error);});
					},
		fetchPostComments:function(id,callback){
			$http({
					url:'https://jsonplaceholder.typicode.com/posts/'+id+'/comments',
					method:'GET'
				}).then(function(success){callback.success(success);},function(){callback.error(error);});
		}
	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}]},{},[2,3,4,5,6,7,8,9,10,13,14,11,12,15,16,17,18,19,20,21,22,23]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFwcD1hbmd1bGFyLm1vZHVsZSgna21Qb3J0YWwnLFsndGVtcGxhdGVDYWNoZScsJ3VpLnJvdXRlciddKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzPWFwcDtcbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjowNjo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcclxuXHJcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xyXG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3Bob3RvcycpO1xyXG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCcvJyx7XHJcblx0XHRcdHVybDonLycsXHJcblx0XHR0ZW1wbGF0ZTonPHBob3Rvcz48L3Bob3Rvcz4nXHJcblx0fSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uJyx7XHJcblx0Y29udHJvbGxlcjpyZXF1aXJlKCcuL0FwcGxpY2F0aW9uQ29udHJvbGxlci5qcycpLFxyXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcclxuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uLmh0bWwnKTtcclxuXHR9XVxyXG59KTtcclxuXHJcblxufSx7XCIuLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vQXBwbGljYXRpb25Db250cm9sbGVyLmpzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZnVuY3Rpb24gYXBwbGljYXRpb25DdHIoKXtcclxuXHRjb25zb2xlLmxvZygncGFyZW50IGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1hcHBsaWNhdGlvbkN0cjtcbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjowNjo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbn0se31dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxNzo1MDozNSBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xuYXBwLmNvbXBvbmVudCgnYWxidW1zJyx7XG5cdGNvbnRyb2xsZXI6Wyckc3RhdGUnLHJlcXVpcmUoJy4vQWxidW1zQ29udHJvbGxlci5qcycpXSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9BbGJ1bXMvQWxidW1zLmh0bWwnKTtcblx0fV0sXG5cdGJpbmRpbmdzOntcblx0XHRkYXRhOic8J1xuXHR9XG59KTtcblxuXG5cblxufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vQWxidW1zQ29udHJvbGxlci5qc1wiOjZ9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBXZWQgTm92IDA5IDIwMTYgMTc6NTA6MzUgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIGFsYnVtc0N0cigkc3RhdGUpe1xuXHRjb25zb2xlLmxvZygnYWxidW1zIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHR2YXIgJHRoaXM9dGhpcztcblx0XG5cdCR0aGlzLiRvbkluaXQ9ZnVuY3Rpb24oKXtcblx0XHRcblx0XHQkdGhpcy5hbGJ1bXM9JHRoaXMuZGF0YTtcblx0XHRjb25zb2xlLmxvZygkdGhpcyk7XG5cdFx0XG5cdH07XG5cblx0ICR0aGlzLm9wZW5BbGJ1bT1mdW5jdGlvbihpZCl7XG5cdCBcdCRzdGF0ZS5nbygnYWxidW1QaG90b3MnLHsnYWxidW1JZCc6aWR9KTtcblx0IH07XG59XG4gbW9kdWxlLmV4cG9ydHM9YWxidW1zQ3RyO1xufSx7fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gVGh1IE5vdiAxMCAyMDE2IDEwOjEyOjAzIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxudmFyIGFwcD1yZXF1aXJlKCcuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzJyk7XG5cbmFwcC5jb21wb25lbnQoJ215UG9zdHMnLHtcblx0Y29udHJvbGxlcjpyZXF1aXJlKCcuL215UG9zdHNDb250cm9sbGVyLmpzJyksXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdDb21tb24vTXlQb3N0cy9teVBvc3RzLmh0bWwnKTtcblx0fV0sXG5cdGJpbmRpbmdzOntcblx0XHRwb3N0czonPCdcblx0fVxuXHRcbn0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vbXlQb3N0c0NvbnRyb2xsZXIuanNcIjo4fV0sODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gVGh1IE5vdiAxMCAyMDE2IDEwOjEyOjAzIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuXG5mdW5jdGlvbiBteVBvc3RzQ3RyKCl7XG5cdGNvbnNvbGUubG9nKCdteVBvc3RzIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHRcblx0dmFyICR0aGlzPXRoaXM7XG5cdCR0aGlzLnBvc3Q9e1xuXHRcdGFsbFBvc3RzOltdXG5cdH07XG5cblx0JHRoaXMuJG9uSW5pdD1mdW5jdGlvbigpe1xuXHRcdCR0aGlzLnBvc3QuYWxsUG9zdHM9JHRoaXMucG9zdHM7XG5cdH07XG59XG4gbW9kdWxlLmV4cG9ydHM9bXlQb3N0c0N0cjtcbn0se31dLDk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjoxMDowMyBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcclxuXHJcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xyXG5hcHAuY29tcG9uZW50KCduYXZpZ2F0aW9uJyx7XHJcblx0Y29udHJvbGxlcjpuYXZpZ2F0aW9uQ3RyLFxyXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcclxuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9OYXZpZ2F0aW9uL05hdmlnYXRpb24uaHRtbCcpO1xyXG5cdH1dXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbmF2aWdhdGlvbkN0cigpe1xyXG5cdGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xyXG59XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjoxMDowMyBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbn0se31dLDExOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6NDc6MDAgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcblxuYXBwLmNvbXBvbmVudCgncG9zdENvbW1lbnRzJyx7XG5cdGNvbnRyb2xsZXI6cmVxdWlyZSgnLi9wb3N0Q29tbWVudHNDb250cm9sbGVyLmpzJyksXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdDb21tb24vUG9zdENvbW1lbnRzL3Bvc3RDb21tZW50cy5odG1sJyk7XG5cdH1dLFxuXHRiaW5kaW5nczp7XG5cdFx0Y29tbWVudHM6JzwnXG5cdH1cbn0pO1xuXG5cbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjEsXCIuL3Bvc3RDb21tZW50c0NvbnRyb2xsZXIuanNcIjoxMn1dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6NDc6MDAgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIHBvc3RDb21tZW50c0N0cigpe1xuXHRjb25zb2xlLmxvZygncG9zdENvbW1lbnRzIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHR2YXIgJHRoaXM9dGhpcztcblx0XG5cdCR0aGlzLmNvbW1lbnQ9e1xuXHRcdGNvbW1lbnRzOltdXG5cdH07XG5cdCR0aGlzLiRvbkluaXQ9ZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJHRoaXMpO1xuXHRcdCR0aGlzLmNvbW1lbnQuY29tbWVudHM9JHRoaXMuY29tbWVudHM7XG5cdFxuXHR9O1xufVxuIG1vZHVsZS5leHBvcnRzPXBvc3RDb21tZW50c0N0cjtcbn0se31dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MjI6MDMgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcblxuYXBwLmNvbXBvbmVudCgncGljdHVyZXMnLHtcblx0Y29udHJvbGxlcjpyZXF1aXJlKCcuL3BpY3R1cmVzQ29udHJvbGxlci5qcycpLFxuXHR0ZW1wbGF0ZTpbJyR0ZW1wbGF0ZUNhY2hlJyxmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSl7XG5cdFx0cmV0dXJuICR0ZW1wbGF0ZUNhY2hlLmdldCgnQ29tbW9uL3BpY3R1cmVzL3BpY3R1cmVzLmh0bWwnKTtcblx0fV0sXG5cdGJpbmRpbmdzOntcblx0XHRwaWN0dXJlczonPCdcblx0fVxufSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxLFwiLi9waWN0dXJlc0NvbnRyb2xsZXIuanNcIjoxNH1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MjI6MDMgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIHBpY3R1cmVzQ3RyKCl7XG5cdGNvbnNvbGUubG9nKCdwaWN0dXJlcyBjb21wb25lbnQgaXMgdXAgYW5kIHdvcmtpbmcnKTtcblx0dmFyICR0aGlzPXRoaXM7XG5cdCR0aGlzLmltYWdlPXtcblx0XHRwaWN0dXJlczpbXVxuXHR9O1xuXHQkdGhpcy4kb25Jbml0PWZ1bmN0aW9uKCl7XG5cdFx0JHRoaXMuaW1hZ2UucGljdHVyZXM9JHRoaXMucGljdHVyZXM7XG5cdFx0Y29uc29sZS5sb2coJHRoaXMpO1xuXHR9O1xufVxuIG1vZHVsZS5leHBvcnRzPXBpY3R1cmVzQ3RyO1xufSx7fV0sMTU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBOb3YgMTAgMjAxNiAxMjowMjowOCBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZShcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIik7XG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhbGJ1bVBob3Rvcycse1xuXHRcdFx0dXJsOicvYWxidW1QaG90b3MnLFxuXHRcdFx0dGVtcGxhdGU6JzxhbGJ1bS1waG90b3M+PC9hbGJ1bS1waG90b3M+Jyxcblx0XHRcdHBhcmFtczp7YWxidW1JZDoxfVxuXHR9KTtcbn1dKTtcblxuYXBwLmNvbXBvbmVudCgnYWxidW1QaG90b3MnLHtcblx0Y29udHJvbGxlcjpbJyRzdGF0ZVBhcmFtcycsJ2FsYnVtUGhvdG9zU2VydmljZScscmVxdWlyZSgnLi9hbGJ1bVBob3Rvc0NvbnRyb2xsZXIuanMnKV0sXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdWaWV3cy9BbGJ1bVBob3Rvcy9hbGJ1bVBob3Rvcy5odG1sJyk7XG5cdH1dXG59KTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjEsXCIuL2FsYnVtUGhvdG9zQ29udHJvbGxlci5qc1wiOjE2fV0sMTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBOb3YgMTAgMjAxNiAxMjowMjowOCBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcblxuZnVuY3Rpb24gYWxidW1QaG90b3NDdHIoJHN0YXRlUGFyYW1zLGFsYnVtUGhvdG9zU2VydmljZSl7XG5cdGNvbnNvbGUubG9nKCdhbGJ1bVBob3RvcyBjb21wb25lbnQgaXMgdXAgYW5kIHdvcmtpbmcnKTtcblx0dmFyICR0aGlzPXRoaXM7XG5cdCR0aGlzLmltYWdlPXtcblx0XHRwaWN0dXJlczpbXVxuXHR9O1xuXHQkdGhpcy5hbGJ1bUlkPSRzdGF0ZVBhcmFtcy5hbGJ1bUlkO1xuXHRhbGJ1bVBob3Rvc1NlcnZpY2UuZmV0Y2hBbGxQaWN0dXJlcygkdGhpcy5hbGJ1bUlkLHtcblx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdHZhciBhcnI9c3VjY2Vzcy5kYXRhO1xuXHRcdFx0XHRpZihhcnIhPT11bmRlZmluZWQgfHwgYXJyLmxlbmd0aD4wKXtcblx0XHRcdFx0XHQkdGhpcy5pbWFnZS5waWN0dXJlcz1hcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0YWxlcnQoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xufVxuIG1vZHVsZS5leHBvcnRzPWFsYnVtUGhvdG9zQ3RyO1xufSx7fV0sMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBOb3YgMTAgMjAxNiAxMjowMjowOCBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZShcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIik7XG5hcHAuZmFjdG9yeSgnYWxidW1QaG90b3NTZXJ2aWNlJyxbJyRodHRwJyxmdW5jdGlvbigkaHR0cCl7XG5cdHJldHVybntcblx0XHRmZXRjaEFsbFBpY3R1cmVzOmZ1bmN0aW9uKGlkLGNhbGxiYWNrKXtcblx0XHRcdCRodHRwKHtcblx0XHRcdFx0XHR1cmw6J2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMvJytpZCsnL3Bob3RvcycsXG5cdFx0XHRcdFx0bWV0aG9kOidHRVQnXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7Y2FsbGJhY2suc3VjY2VzcyhzdWNjZXNzKTt9LGZ1bmN0aW9uKCl7Y2FsbGJhY2suZXJyb3IoZXJyb3IpO30pO1xuXHRcdFx0XHRcdH1cblx0fTtcbn1dKTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjF9XSwxODpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gV2VkIE5vdiAwOSAyMDE2IDE5OjM0OjE2IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxudmFyIGFwcD1yZXF1aXJlKFwiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiKTtcbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsJyR1cmxSb3V0ZXJQcm92aWRlcicsZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKXtcblx0JHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3Bob3Rvcycse1xuXHRcdFx0dXJsOicvcGhvdG9zJyxcblx0XHR0ZW1wbGF0ZTonPHBob3Rvcz48L3Bob3Rvcz4nXG5cdH0pO1xufV0pO1xuXG5hcHAuY29tcG9uZW50KCdwaG90b3MnLHtcblx0Y29udHJvbGxlcjpbJ3Bob3Rvc1NlcnZpY2UnLHJlcXVpcmUoJy4vUGhvdG9zQ29udHJvbGxlci5qcycpXSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ1ZpZXdzL1Bob3Rvcy9QaG90b3MuaHRtbCcpO1xuXHR9XVxufSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxLFwiLi9QaG90b3NDb250cm9sbGVyLmpzXCI6MTl9XSwxOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gV2VkIE5vdiAwOSAyMDE2IDE5OjM0OjE2IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuXG5mdW5jdGlvbiBwaG90b3NDdHIocGhvdG9zU2VydmljZSl7XG5cdGNvbnNvbGUubG9nKCdwaG90b3MgY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG5cdHZhciAkdGhpcz10aGlzO1xuXHQkdGhpcy5hbGJ1bT17XG5cdFx0ZGF0YTpbXVxuXHR9O1xuXHRwaG90b3NTZXJ2aWNlLmZldGNoQWxidW1zKHtcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0dmFyIGFycmF5RGF0YT1kYXRhLmRhdGE7XG5cdFx0XHRpZihhcnJheURhdGEhPT11bmRlZmluZWQgfHwgYXJyYXlEYXRhLmxlbmd0aCE9PTAgKXtcblx0XHRcdFx0JHRoaXMuYWxidW0uZGF0YT1hcnJheURhdGE7XG5cdFx0XHRcdGdldFRodW1ibmFpbHMoKTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdCR0aGlzLmFsYnVtLmRhdGE9W107XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRlcnJvcjpmdW5jdGlvbihkYXRhKXtcblx0XHRcdGFsZXJ0KCdzb21lIGVycm9yIG9jY3VyZWQnKTtcblx0XHRcdCR0aGlzLmFsYnVtLmRhdGE9W107XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBnZXRUaHVtYm5haWxzKCl7XG5cdFx0YW5ndWxhci5mb3JFYWNoKCR0aGlzLmFsYnVtLmRhdGEsZnVuY3Rpb24odixrKXtcblx0XHRcdHZhciBpZD12LmlkO1xuXHRcdFx0dmFyIGNhbGxiYWNrPXtcblx0XHRcdFx0c3VjY2VzczpmdW5jdGlvbihzdWNjZXNzKXtcblx0XHRcdFx0XHR2YXIgaW1hZ2VPYmo9c3VjY2Vzcy5kYXRhO1xuXHRcdFx0XHRcdHYudXJsPWltYWdlT2JqLnRodW1ibmFpbFVybDtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0YWxlcnQoJ3NvbWUgZXJyb3Igb2NjdXJlZCcpO1xuXHRcdFx0XHRcdHYudXJsPSdodHRwczovL2xlMHBhcmQxMy5maWxlcy53b3JkcHJlc3MuY29tLzIwMTMvMDgvcGluay1mbG95ZC1kYXJrLXNpZGUtb2YtdGhlLW1vb24tYWxidW0tY292ZXIuanBnJztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHBob3Rvc1NlcnZpY2UuZmV0Y2hBbGJ1bUNvdmVyKGlkLGNhbGxiYWNrKTtcblx0XHR9KTtcblx0XHRcdFx0XG5cdH1cblx0JHRoaXMub3BlbkFsYnVtPWZ1bmN0aW9uKGlkKXtcblx0XHQkc3RhdGUuZ28oJ2FsYnVtUGhvdG9zJyx7J2FsYnVtSWQnOmlkfSk7XG5cdH07XG59XG4gbW9kdWxlLmV4cG9ydHM9cGhvdG9zQ3RyO1xufSx7fV0sMjA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxOTozNDoxNiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZShcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIik7XG5hcHAuZmFjdG9yeSgncGhvdG9zU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0ZmV0Y2hBbGJ1bXM6ZnVuY3Rpb24oY2FsbGJhY2spe1xuXHRcdFx0JGh0dHAoe1xuXHRcdFx0XHR1cmw6J2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9hbGJ1bXMnLFxuXHRcdFx0XHRtZXRob2Q6J0dFVCcsXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuXHRcdFx0XHRjYWxsYmFjay5zdWNjZXNzKHN1Y2Nlc3MpO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdFx0Y2FsbGJhY2suZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRmZXRjaEFsYnVtQ292ZXI6ZnVuY3Rpb24oZGF0YSxjYWxsYmFjayl7XG5cdFx0XHQkaHR0cCh7XG5cdFx0XHRcdHVybDonaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bob3Rvcy8nK2RhdGEsXG5cdFx0XHRcdG1ldGhvZDonR0VUJyxcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdGNhbGxiYWNrLnN1Y2Nlc3Moc3VjY2Vzcyk7XG5cdFx0XHR9LFxuXHRcdFx0ZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0XHRjYWxsYmFjay5lcnJvcihlcnJvcik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV0sMjE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxOTozMTo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZShcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIik7XG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdwb3N0cycse1xuXHRcdFx0dXJsOicvcG9zdHMnLFxuXHRcdHRlbXBsYXRlOic8cG9zdHM+PC9wb3N0cz4nXG5cdH0pO1xufV0pO1xuXG5hcHAuY29tcG9uZW50KCdwb3N0cycse1xuXHRjb250cm9sbGVyOlsncG9zdHNTZXJ2aWNlJyxyZXF1aXJlKCcuL1Bvc3RzQ29udHJvbGxlci5qcycpXSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ1ZpZXdzL1Bvc3RzL1Bvc3RzLmh0bWwnKTtcblx0fV1cbn0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vUG9zdHNDb250cm9sbGVyLmpzXCI6MjJ9XSwyMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gV2VkIE5vdiAwOSAyMDE2IDE5OjMxOjUyIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuXG5mdW5jdGlvbiBwb3N0c0N0cihwb3N0c1NlcnZpY2Upe1xuXHRjb25zb2xlLmxvZygncG9zdHMgY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG5cblx0dmFyICR0aGlzPXRoaXM7XG5cdCR0aGlzLnBvc3Q9e1xuXHRcdGFsbFBvc3RzOltdXG5cdH07XG5cblx0cG9zdHNTZXJ2aWNlLmZldGNoQWxsUG9zdHMoe1xuXHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHR2YXIgYXJyPXN1Y2Nlc3MuZGF0YTtcblx0XHRcdGlmKGFyciE9PXVuZGVmaW5lZCB8fCBhcnIubGVuZ3RoPjApe1xuXHRcdFx0XHRcblx0XHRcdFx0ZmV0Y2hDb21tZW50cyhhcnIpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRlcnJvcjpmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRhbGVydCgnc29tZXRoaW5nIHdyb25nIGhhcHBlbmVkJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0ZnVuY3Rpb24gZmV0Y2hDb21tZW50cyhhcnIsY2FsbGJhY2spe1xuXHRcdGlmKGFyciE9PXVuZGVmaW5lZCB8fCBhcnIubGVuZ3RoPjApe1xuXHRcdFx0YW5ndWxhci5mb3JFYWNoKGFycixmdW5jdGlvbih2LGspe1xuXHRcdFx0XHQgZmV0Y2hQb3N0Q29tbWVudCh2LmlkLGZ1bmN0aW9uKGNvbW1lbnQpe1xuXHRcdFx0XHQgXHR2YXIgb2JqPXY7XG5cdFx0XHRcdCBcdG9iai5jb21tZW50PWNvbW1lbnQ7XG5cdFx0XHRcdCBcdCR0aGlzLnBvc3QuYWxsUG9zdHMucHVzaChvYmopO1xuXHRcdFx0XHQgfSk7XG5cdFx0XHR9KTtcblxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBmZXRjaFBvc3RDb21tZW50KGlkLGNhbGxiYWNrKXtcblx0XHRwb3N0c1NlcnZpY2UuZmV0Y2hQb3N0Q29tbWVudHMoaWQse1xuXHRcdFx0c3VjY2VzczpmdW5jdGlvbihzdWNjZXNzKXtcblx0XHRcdFx0dmFyIGFycj1zdWNjZXNzLmRhdGE7XG5cdFx0XHRcdGlmKGFyciE9PXVuZGVmaW5lZCB8fCBhcnIubGVuZ3RoPjApe1xuXHRcdFx0XHRcdGlmKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjaz09J2Z1bmN0aW9uJyl7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhhcnIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGVycm9yOmZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRhbGVydChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiBtb2R1bGUuZXhwb3J0cz1wb3N0c0N0cjtcbn0se31dLDIzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBXZWQgTm92IDA5IDIwMTYgMTk6MzE6NTIgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCIpO1xuYXBwLmZhY3RvcnkoJ3Bvc3RzU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0ZmV0Y2hBbGxQb3N0czpmdW5jdGlvbihjYWxsYmFjayl7XG5cdFx0XHQkaHR0cCh7XG5cdFx0XHRcdFx0dXJsOidodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLFxuXHRcdFx0XHRcdG1ldGhvZDonR0VUJ1xuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe2NhbGxiYWNrLnN1Y2Nlc3Moc3VjY2Vzcyk7fSxmdW5jdGlvbihlcnJvcil7Y2FsbGJhY2suZXJyb3IoZXJyb3IpO30pO1xuXHRcdFx0XHRcdH0sXG5cdFx0ZmV0Y2hQb3N0Q29tbWVudHM6ZnVuY3Rpb24oaWQsY2FsbGJhY2spe1xuXHRcdFx0JGh0dHAoe1xuXHRcdFx0XHRcdHVybDonaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycraWQrJy9jb21tZW50cycsXG5cdFx0XHRcdFx0bWV0aG9kOidHRVQnXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oc3VjY2Vzcyl7Y2FsbGJhY2suc3VjY2VzcyhzdWNjZXNzKTt9LGZ1bmN0aW9uKCl7Y2FsbGJhY2suZXJyb3IoZXJyb3IpO30pO1xuXHRcdH1cblx0fTtcbn1dKTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjF9XX0se30sWzIsMyw0LDUsNiw3LDgsOSwxMCwxMywxNCwxMSwxMiwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyM10pO1xuIl0sImZpbGUiOiJidW5kbGUuanMifQ==
