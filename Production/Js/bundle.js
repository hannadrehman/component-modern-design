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
//Author : Hannad Rehman Wed Nov 09 2016 17:50:35 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.factory('albumsService',['$http',function($http){
	return{
		

	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}],8:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./myPostsController.js":9}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 10:12:03 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.factory('myPostsService',['$http',function($http){
	return{
		
	};
}]);


},{"../../../../Development/Assets/Js/appConfig.js":1}],11:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1}],12:[function(require,module,exports){
//Author : Hannad Rehman Mon Nov 07 2016 12:10:03 GMT+0530 (India Standard Time)
},{}],13:[function(require,module,exports){
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


},{"../../../../Development/Assets/Js/appConfig.js":1,"./postCommentsController.js":14}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 10:47:00 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.factory('postCommentsService',['$http',function($http){
	return{
		
	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}],16:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./picturesController.js":17}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
//Author : Hannad Rehman Thu Nov 10 2016 12:22:03 GMT+0530 (India Standard Time)
var app=require('../../../../Development/Assets/Js/appConfig.js');
app.factory('picturesService',['$http',function($http){
	return{
	};
}]);
},{"../../../../Development/Assets/Js/appConfig.js":1}],19:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./albumPhotosController.js":20}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1}],22:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./PhotosController.js":23}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1}],25:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1,"./PostsController.js":26}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{"../../../../Development/Assets/Js/appConfig.js":1}]},{},[2,3,4,5,6,7,8,9,10,11,12,16,17,18,13,14,15,19,20,21,22,23,24,25,26,27]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIGFwcD1hbmd1bGFyLm1vZHVsZSgna21Qb3J0YWwnLFsndGVtcGxhdGVDYWNoZScsJ3VpLnJvdXRlciddKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzPWFwcDtcbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjowNjo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcclxuXHJcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xyXG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3Bob3RvcycpO1xyXG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCcvJyx7XHJcblx0XHRcdHVybDonLycsXHJcblx0XHR0ZW1wbGF0ZTonPHBob3Rvcz48L3Bob3Rvcz4nXHJcblx0fSk7XHJcbn1dKTtcclxuXHJcbmFwcC5jb21wb25lbnQoJ2FwcGxpY2F0aW9uJyx7XHJcblx0Y29udHJvbGxlcjpyZXF1aXJlKCcuL0FwcGxpY2F0aW9uQ29udHJvbGxlci5qcycpLFxyXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcclxuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0FwcGxpY2F0aW9uL0FwcGxpY2F0aW9uLmh0bWwnKTtcclxuXHR9XVxyXG59KTtcclxuXHJcblxufSx7XCIuLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vQXBwbGljYXRpb25Db250cm9sbGVyLmpzXCI6M31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuZnVuY3Rpb24gYXBwbGljYXRpb25DdHIoKXtcclxuXHRjb25zb2xlLmxvZygncGFyZW50IGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz1hcHBsaWNhdGlvbkN0cjtcbn0se31dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjowNjo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbn0se31dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxNzo1MDozNSBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xuYXBwLmNvbXBvbmVudCgnYWxidW1zJyx7XG5cdGNvbnRyb2xsZXI6Wyckc3RhdGUnLHJlcXVpcmUoJy4vQWxidW1zQ29udHJvbGxlci5qcycpXSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9BbGJ1bXMvQWxidW1zLmh0bWwnKTtcblx0fV0sXG5cdGJpbmRpbmdzOntcblx0XHRkYXRhOic8J1xuXHR9XG59KTtcblxuXG5cblxufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vQWxidW1zQ29udHJvbGxlci5qc1wiOjZ9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBXZWQgTm92IDA5IDIwMTYgMTc6NTA6MzUgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIGFsYnVtc0N0cigkc3RhdGUpe1xuXHRjb25zb2xlLmxvZygnYWxidW1zIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHR2YXIgJHRoaXM9dGhpcztcblx0XG5cdCR0aGlzLiRvbkluaXQ9ZnVuY3Rpb24oKXtcblx0XHRcblx0XHQkdGhpcy5hbGJ1bXM9JHRoaXMuZGF0YTtcblx0XHRjb25zb2xlLmxvZygkdGhpcyk7XG5cdFx0XG5cdH07XG5cblx0ICR0aGlzLm9wZW5BbGJ1bT1mdW5jdGlvbihpZCl7XG5cdCBcdCRzdGF0ZS5nbygnYWxidW1QaG90b3MnLHsnYWxidW1JZCc6aWR9KTtcblx0IH07XG59XG4gbW9kdWxlLmV4cG9ydHM9YWxidW1zQ3RyO1xufSx7fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gV2VkIE5vdiAwOSAyMDE2IDE3OjUwOjM1IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxudmFyIGFwcD1yZXF1aXJlKCcuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzJyk7XG5hcHAuZmFjdG9yeSgnYWxidW1zU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0XG5cblx0fTtcbn1dKTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjF9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6MTI6MDMgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcblxuYXBwLmNvbXBvbmVudCgnbXlQb3N0cycse1xuXHRjb250cm9sbGVyOnJlcXVpcmUoJy4vbXlQb3N0c0NvbnRyb2xsZXIuanMnKSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9NeVBvc3RzL215UG9zdHMuaHRtbCcpO1xuXHR9XSxcblx0YmluZGluZ3M6e1xuXHRcdHBvc3RzOic8J1xuXHR9XG5cdFxufSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxLFwiLi9teVBvc3RzQ29udHJvbGxlci5qc1wiOjl9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6MTI6MDMgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIG15UG9zdHNDdHIoKXtcblx0Y29uc29sZS5sb2coJ215UG9zdHMgY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG5cdFxuXHR2YXIgJHRoaXM9dGhpcztcblx0JHRoaXMucG9zdD17XG5cdFx0YWxsUG9zdHM6W11cblx0fTtcblxuXHQkdGhpcy4kb25Jbml0PWZ1bmN0aW9uKCl7XG5cdFx0JHRoaXMucG9zdC5hbGxQb3N0cz0kdGhpcy5wb3N0cztcblx0fTtcbn1cbiBtb2R1bGUuZXhwb3J0cz1teVBvc3RzQ3RyO1xufSx7fV0sMTA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFRodSBOb3YgMTAgMjAxNiAxMDoxMjowMyBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xuYXBwLmZhY3RvcnkoJ215UG9zdHNTZXJ2aWNlJyxbJyRodHRwJyxmdW5jdGlvbigkaHR0cCl7XG5cdHJldHVybntcblx0XHRcblx0fTtcbn1dKTtcblxuXG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjoxMDowMyBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcclxuXHJcbnZhciBhcHA9cmVxdWlyZSgnLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qcycpO1xyXG5hcHAuY29tcG9uZW50KCduYXZpZ2F0aW9uJyx7XHJcblx0Y29udHJvbGxlcjpuYXZpZ2F0aW9uQ3RyLFxyXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcclxuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9OYXZpZ2F0aW9uL05hdmlnYXRpb24uaHRtbCcpO1xyXG5cdH1dXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbmF2aWdhdGlvbkN0cigpe1xyXG5cdGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xyXG59XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV0sMTI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIE1vbiBOb3YgMDcgMjAxNiAxMjoxMDowMyBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbn0se31dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6NDc6MDAgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcblxuYXBwLmNvbXBvbmVudCgncG9zdENvbW1lbnRzJyx7XG5cdGNvbnRyb2xsZXI6cmVxdWlyZSgnLi9wb3N0Q29tbWVudHNDb250cm9sbGVyLmpzJyksXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdDb21tb24vUG9zdENvbW1lbnRzL3Bvc3RDb21tZW50cy5odG1sJyk7XG5cdH1dLFxuXHRiaW5kaW5nczp7XG5cdFx0Y29tbWVudHM6JzwnXG5cdH1cbn0pO1xuXG5cbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjEsXCIuL3Bvc3RDb21tZW50c0NvbnRyb2xsZXIuanNcIjoxNH1dLDE0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6NDc6MDAgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIHBvc3RDb21tZW50c0N0cigpe1xuXHRjb25zb2xlLmxvZygncG9zdENvbW1lbnRzIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHR2YXIgJHRoaXM9dGhpcztcblx0XG5cdCR0aGlzLmNvbW1lbnQ9e1xuXHRcdGNvbW1lbnRzOltdXG5cdH07XG5cdCR0aGlzLiRvbkluaXQ9ZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJHRoaXMpO1xuXHRcdCR0aGlzLmNvbW1lbnQuY29tbWVudHM9JHRoaXMuY29tbWVudHM7XG5cdFxuXHR9O1xufVxuIG1vZHVsZS5leHBvcnRzPXBvc3RDb21tZW50c0N0cjtcbn0se31dLDE1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTA6NDc6MDAgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcbmFwcC5mYWN0b3J5KCdwb3N0Q29tbWVudHNTZXJ2aWNlJyxbJyRodHRwJyxmdW5jdGlvbigkaHR0cCl7XG5cdHJldHVybntcblx0XHRcblx0fTtcbn1dKTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjF9XSwxNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gVGh1IE5vdiAxMCAyMDE2IDEyOjIyOjAzIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxudmFyIGFwcD1yZXF1aXJlKCcuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzJyk7XG5cbmFwcC5jb21wb25lbnQoJ3BpY3R1cmVzJyx7XG5cdGNvbnRyb2xsZXI6cmVxdWlyZSgnLi9waWN0dXJlc0NvbnRyb2xsZXIuanMnKSxcblx0dGVtcGxhdGU6WyckdGVtcGxhdGVDYWNoZScsZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpe1xuXHRcdHJldHVybiAkdGVtcGxhdGVDYWNoZS5nZXQoJ0NvbW1vbi9waWN0dXJlcy9waWN0dXJlcy5odG1sJyk7XG5cdH1dLFxuXHRiaW5kaW5nczp7XG5cdFx0cGljdHVyZXM6JzwnXG5cdH1cbn0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vcGljdHVyZXNDb250cm9sbGVyLmpzXCI6MTd9XSwxNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gVGh1IE5vdiAxMCAyMDE2IDEyOjIyOjAzIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxuXG5mdW5jdGlvbiBwaWN0dXJlc0N0cigpe1xuXHRjb25zb2xlLmxvZygncGljdHVyZXMgY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG5cdHZhciAkdGhpcz10aGlzO1xuXHQkdGhpcy5pbWFnZT17XG5cdFx0cGljdHVyZXM6W11cblx0fTtcblx0JHRoaXMuJG9uSW5pdD1mdW5jdGlvbigpe1xuXHRcdCR0aGlzLmltYWdlLnBpY3R1cmVzPSR0aGlzLnBpY3R1cmVzO1xuXHRcdGNvbnNvbGUubG9nKCR0aGlzKTtcblx0fTtcbn1cbiBtb2R1bGUuZXhwb3J0cz1waWN0dXJlc0N0cjtcbn0se31dLDE4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MjI6MDMgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoJy4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanMnKTtcbmFwcC5mYWN0b3J5KCdwaWN0dXJlc1NlcnZpY2UnLFsnJGh0dHAnLGZ1bmN0aW9uKCRodHRwKXtcblx0cmV0dXJue1xuXHR9O1xufV0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MX1dLDE5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MDI6MDggR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCIpO1xuYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywnJHVybFJvdXRlclByb3ZpZGVyJyxmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpe1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnYWxidW1QaG90b3MnLHtcblx0XHRcdHVybDonL2FsYnVtUGhvdG9zJyxcblx0XHRcdHRlbXBsYXRlOic8YWxidW0tcGhvdG9zPjwvYWxidW0tcGhvdG9zPicsXG5cdFx0XHRwYXJhbXM6e2FsYnVtSWQ6MX1cblx0fSk7XG59XSk7XG5cbmFwcC5jb21wb25lbnQoJ2FsYnVtUGhvdG9zJyx7XG5cdGNvbnRyb2xsZXI6Wyckc3RhdGVQYXJhbXMnLCdhbGJ1bVBob3Rvc1NlcnZpY2UnLHJlcXVpcmUoJy4vYWxidW1QaG90b3NDb250cm9sbGVyLmpzJyldLFxuXHR0ZW1wbGF0ZTpbJyR0ZW1wbGF0ZUNhY2hlJyxmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSl7XG5cdFx0cmV0dXJuICR0ZW1wbGF0ZUNhY2hlLmdldCgnVmlld3MvQWxidW1QaG90b3MvYWxidW1QaG90b3MuaHRtbCcpO1xuXHR9XVxufSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxLFwiLi9hbGJ1bVBob3Rvc0NvbnRyb2xsZXIuanNcIjoyMH1dLDIwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MDI6MDggR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG5cbmZ1bmN0aW9uIGFsYnVtUGhvdG9zQ3RyKCRzdGF0ZVBhcmFtcyxhbGJ1bVBob3Rvc1NlcnZpY2Upe1xuXHRjb25zb2xlLmxvZygnYWxidW1QaG90b3MgY29tcG9uZW50IGlzIHVwIGFuZCB3b3JraW5nJyk7XG5cdHZhciAkdGhpcz10aGlzO1xuXHQkdGhpcy5pbWFnZT17XG5cdFx0cGljdHVyZXM6W11cblx0fTtcblx0JHRoaXMuYWxidW1JZD0kc3RhdGVQYXJhbXMuYWxidW1JZDtcblx0YWxidW1QaG90b3NTZXJ2aWNlLmZldGNoQWxsUGljdHVyZXMoJHRoaXMuYWxidW1JZCx7XG5cdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuXHRcdFx0XHR2YXIgYXJyPXN1Y2Nlc3MuZGF0YTtcblx0XHRcdFx0aWYoYXJyIT09dW5kZWZpbmVkIHx8IGFyci5sZW5ndGg+MCl7XG5cdFx0XHRcdFx0JHRoaXMuaW1hZ2UucGljdHVyZXM9YXJyO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3I6ZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdGFsZXJ0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcbn1cbiBtb2R1bGUuZXhwb3J0cz1hbGJ1bVBob3Rvc0N0cjtcbn0se31dLDIxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBUaHUgTm92IDEwIDIwMTYgMTI6MDI6MDggR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCIpO1xuYXBwLmZhY3RvcnkoJ2FsYnVtUGhvdG9zU2VydmljZScsWyckaHR0cCcsZnVuY3Rpb24oJGh0dHApe1xuXHRyZXR1cm57XG5cdFx0ZmV0Y2hBbGxQaWN0dXJlczpmdW5jdGlvbihpZCxjYWxsYmFjayl7XG5cdFx0XHQkaHR0cCh7XG5cdFx0XHRcdFx0dXJsOidodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zLycraWQrJy9waG90b3MnLFxuXHRcdFx0XHRcdG1ldGhvZDonR0VUJ1xuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe2NhbGxiYWNrLnN1Y2Nlc3Moc3VjY2Vzcyk7fSxmdW5jdGlvbigpe2NhbGxiYWNrLmVycm9yKGVycm9yKTt9KTtcblx0XHRcdFx0XHR9XG5cdH07XG59XSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV0sMjI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxOTozNDoxNiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcbnZhciBhcHA9cmVxdWlyZShcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIik7XG5hcHAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCckdXJsUm91dGVyUHJvdmlkZXInLGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XG5cdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdwaG90b3MnLHtcblx0XHRcdHVybDonL3Bob3RvcycsXG5cdFx0dGVtcGxhdGU6JzxwaG90b3M+PC9waG90b3M+J1xuXHR9KTtcbn1dKTtcblxuYXBwLmNvbXBvbmVudCgncGhvdG9zJyx7XG5cdGNvbnRyb2xsZXI6WydwaG90b3NTZXJ2aWNlJyxyZXF1aXJlKCcuL1Bob3Rvc0NvbnRyb2xsZXIuanMnKV0sXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdWaWV3cy9QaG90b3MvUGhvdG9zLmh0bWwnKTtcblx0fV1cbn0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MSxcIi4vUGhvdG9zQ29udHJvbGxlci5qc1wiOjIzfV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxOTozNDoxNiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcblxuZnVuY3Rpb24gcGhvdG9zQ3RyKHBob3Rvc1NlcnZpY2Upe1xuXHRjb25zb2xlLmxvZygncGhvdG9zIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXHR2YXIgJHRoaXM9dGhpcztcblx0JHRoaXMuYWxidW09e1xuXHRcdGRhdGE6W11cblx0fTtcblx0cGhvdG9zU2VydmljZS5mZXRjaEFsYnVtcyh7XG5cdFx0c3VjY2VzczpmdW5jdGlvbihkYXRhKXtcblx0XHRcdHZhciBhcnJheURhdGE9ZGF0YS5kYXRhO1xuXHRcdFx0aWYoYXJyYXlEYXRhIT09dW5kZWZpbmVkIHx8IGFycmF5RGF0YS5sZW5ndGghPT0wICl7XG5cdFx0XHRcdCR0aGlzLmFsYnVtLmRhdGE9YXJyYXlEYXRhO1xuXHRcdFx0XHRnZXRUaHVtYm5haWxzKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHQkdGhpcy5hbGJ1bS5kYXRhPVtdO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXJyb3I6ZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRhbGVydCgnc29tZSBlcnJvciBvY2N1cmVkJyk7XG5cdFx0XHQkdGhpcy5hbGJ1bS5kYXRhPVtdO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gZ2V0VGh1bWJuYWlscygpe1xuXHRcdGFuZ3VsYXIuZm9yRWFjaCgkdGhpcy5hbGJ1bS5kYXRhLGZ1bmN0aW9uKHYsayl7XG5cdFx0XHR2YXIgaWQ9di5pZDtcblx0XHRcdHZhciBjYWxsYmFjaz17XG5cdFx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdFx0dmFyIGltYWdlT2JqPXN1Y2Nlc3MuZGF0YTtcblx0XHRcdFx0XHR2LnVybD1pbWFnZU9iai50aHVtYm5haWxVcmw7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOmZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdGFsZXJ0KCdzb21lIGVycm9yIG9jY3VyZWQnKTtcblx0XHRcdFx0XHR2LnVybD0naHR0cHM6Ly9sZTBwYXJkMTMuZmlsZXMud29yZHByZXNzLmNvbS8yMDEzLzA4L3BpbmstZmxveWQtZGFyay1zaWRlLW9mLXRoZS1tb29uLWFsYnVtLWNvdmVyLmpwZyc7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRwaG90b3NTZXJ2aWNlLmZldGNoQWxidW1Db3ZlcihpZCxjYWxsYmFjayk7XG5cdFx0fSk7XG5cdFx0XHRcdFxuXHR9XG5cdCR0aGlzLm9wZW5BbGJ1bT1mdW5jdGlvbihpZCl7XG5cdFx0JHN0YXRlLmdvKCdhbGJ1bVBob3RvcycseydhbGJ1bUlkJzppZH0pO1xuXHR9O1xufVxuIG1vZHVsZS5leHBvcnRzPXBob3Rvc0N0cjtcbn0se31dLDI0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBXZWQgTm92IDA5IDIwMTYgMTk6MzQ6MTYgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCIpO1xuYXBwLmZhY3RvcnkoJ3Bob3Rvc1NlcnZpY2UnLFsnJGh0dHAnLGZ1bmN0aW9uKCRodHRwKXtcblx0cmV0dXJue1xuXHRcdGZldGNoQWxidW1zOmZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0XHRcdCRodHRwKHtcblx0XHRcdFx0dXJsOidodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vYWxidW1zJyxcblx0XHRcdFx0bWV0aG9kOidHRVQnLFxuXHRcdFx0fSkudGhlbihmdW5jdGlvbihzdWNjZXNzKXtcblx0XHRcdFx0Y2FsbGJhY2suc3VjY2VzcyhzdWNjZXNzKTtcblx0XHRcdH0sXG5cdFx0XHRmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRcdGNhbGxiYWNrLmVycm9yKGVycm9yKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZmV0Y2hBbGJ1bUNvdmVyOmZ1bmN0aW9uKGRhdGEsY2FsbGJhY2spe1xuXHRcdFx0JGh0dHAoe1xuXHRcdFx0XHR1cmw6J2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3MvJytkYXRhLFxuXHRcdFx0XHRtZXRob2Q6J0dFVCcsXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuXHRcdFx0XHRjYWxsYmFjay5zdWNjZXNzKHN1Y2Nlc3MpO1xuXHRcdFx0fSxcblx0XHRcdGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdFx0Y2FsbGJhY2suZXJyb3IoZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xufV0pO1xufSx7XCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCI6MX1dLDI1OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbi8vQXV0aG9yIDogSGFubmFkIFJlaG1hbiBXZWQgTm92IDA5IDIwMTYgMTk6MzE6NTIgR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpXG52YXIgYXBwPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9EZXZlbG9wbWVudC9Bc3NldHMvSnMvYXBwQ29uZmlnLmpzXCIpO1xuYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywnJHVybFJvdXRlclByb3ZpZGVyJyxmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpe1xuXHQkc3RhdGVQcm92aWRlci5zdGF0ZSgncG9zdHMnLHtcblx0XHRcdHVybDonL3Bvc3RzJyxcblx0XHR0ZW1wbGF0ZTonPHBvc3RzPjwvcG9zdHM+J1xuXHR9KTtcbn1dKTtcblxuYXBwLmNvbXBvbmVudCgncG9zdHMnLHtcblx0Y29udHJvbGxlcjpbJ3Bvc3RzU2VydmljZScscmVxdWlyZSgnLi9Qb3N0c0NvbnRyb2xsZXIuanMnKV0sXG5cdHRlbXBsYXRlOlsnJHRlbXBsYXRlQ2FjaGUnLGZ1bmN0aW9uKCR0ZW1wbGF0ZUNhY2hlKXtcblx0XHRyZXR1cm4gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdWaWV3cy9Qb3N0cy9Qb3N0cy5odG1sJyk7XG5cdH1dXG59KTtcbn0se1wiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiOjEsXCIuL1Bvc3RzQ29udHJvbGxlci5qc1wiOjI2fV0sMjY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuLy9BdXRob3IgOiBIYW5uYWQgUmVobWFuIFdlZCBOb3YgMDkgMjAxNiAxOTozMTo1MiBHTVQrMDUzMCAoSW5kaWEgU3RhbmRhcmQgVGltZSlcblxuZnVuY3Rpb24gcG9zdHNDdHIocG9zdHNTZXJ2aWNlKXtcblx0Y29uc29sZS5sb2coJ3Bvc3RzIGNvbXBvbmVudCBpcyB1cCBhbmQgd29ya2luZycpO1xuXG5cdHZhciAkdGhpcz10aGlzO1xuXHQkdGhpcy5wb3N0PXtcblx0XHRhbGxQb3N0czpbXVxuXHR9O1xuXG5cdHBvc3RzU2VydmljZS5mZXRjaEFsbFBvc3RzKHtcblx0XHRzdWNjZXNzOmZ1bmN0aW9uKHN1Y2Nlc3Mpe1xuXHRcdFx0dmFyIGFycj1zdWNjZXNzLmRhdGE7XG5cdFx0XHRpZihhcnIhPT11bmRlZmluZWQgfHwgYXJyLmxlbmd0aD4wKXtcblx0XHRcdFx0XG5cdFx0XHRcdGZldGNoQ29tbWVudHMoYXJyKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0ZXJyb3I6ZnVuY3Rpb24oZXJyb3Ipe1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0YWxlcnQoJ3NvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCcpO1xuXHRcdH1cblx0fSk7XG5cblx0XG5cdGZ1bmN0aW9uIGZldGNoQ29tbWVudHMoYXJyLGNhbGxiYWNrKXtcblx0XHRpZihhcnIhPT11bmRlZmluZWQgfHwgYXJyLmxlbmd0aD4wKXtcblx0XHRcdGFuZ3VsYXIuZm9yRWFjaChhcnIsZnVuY3Rpb24odixrKXtcblx0XHRcdFx0IGZldGNoUG9zdENvbW1lbnQodi5pZCxmdW5jdGlvbihjb21tZW50KXtcblx0XHRcdFx0IFx0dmFyIG9iaj12O1xuXHRcdFx0XHQgXHRvYmouY29tbWVudD1jb21tZW50O1xuXHRcdFx0XHQgXHQkdGhpcy5wb3N0LmFsbFBvc3RzLnB1c2gob2JqKTtcblx0XHRcdFx0IH0pO1xuXHRcdFx0fSk7XG5cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZmV0Y2hQb3N0Q29tbWVudChpZCxjYWxsYmFjayl7XG5cdFx0cG9zdHNTZXJ2aWNlLmZldGNoUG9zdENvbW1lbnRzKGlkLHtcblx0XHRcdHN1Y2Nlc3M6ZnVuY3Rpb24oc3VjY2Vzcyl7XG5cdFx0XHRcdHZhciBhcnI9c3VjY2Vzcy5kYXRhO1xuXHRcdFx0XHRpZihhcnIhPT11bmRlZmluZWQgfHwgYXJyLmxlbmd0aD4wKXtcblx0XHRcdFx0XHRpZihjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2s9PSdmdW5jdGlvbicpe1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2soYXJyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlcnJvcjpmdW5jdGlvbihlcnJvcil7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0YWxlcnQoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4gbW9kdWxlLmV4cG9ydHM9cG9zdHNDdHI7XG59LHt9XSwyNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vL0F1dGhvciA6IEhhbm5hZCBSZWhtYW4gV2VkIE5vdiAwOSAyMDE2IDE5OjMxOjUyIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKVxudmFyIGFwcD1yZXF1aXJlKFwiLi4vLi4vLi4vLi4vRGV2ZWxvcG1lbnQvQXNzZXRzL0pzL2FwcENvbmZpZy5qc1wiKTtcbmFwcC5mYWN0b3J5KCdwb3N0c1NlcnZpY2UnLFsnJGh0dHAnLGZ1bmN0aW9uKCRodHRwKXtcblx0cmV0dXJue1xuXHRcdGZldGNoQWxsUG9zdHM6ZnVuY3Rpb24oY2FsbGJhY2spe1xuXHRcdFx0JGh0dHAoe1xuXHRcdFx0XHRcdHVybDonaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyxcblx0XHRcdFx0XHRtZXRob2Q6J0dFVCdcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbihzdWNjZXNzKXtjYWxsYmFjay5zdWNjZXNzKHN1Y2Nlc3MpO30sZnVuY3Rpb24oZXJyb3Ipe2NhbGxiYWNrLmVycm9yKGVycm9yKTt9KTtcblx0XHRcdFx0XHR9LFxuXHRcdGZldGNoUG9zdENvbW1lbnRzOmZ1bmN0aW9uKGlkLGNhbGxiYWNrKXtcblx0XHRcdCRodHRwKHtcblx0XHRcdFx0XHR1cmw6J2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8nK2lkKycvY29tbWVudHMnLFxuXHRcdFx0XHRcdG1ldGhvZDonR0VUJ1xuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3Mpe2NhbGxiYWNrLnN1Y2Nlc3Moc3VjY2Vzcyk7fSxmdW5jdGlvbigpe2NhbGxiYWNrLmVycm9yKGVycm9yKTt9KTtcblx0XHR9XG5cdH07XG59XSk7XG59LHtcIi4uLy4uLy4uLy4uL0RldmVsb3BtZW50L0Fzc2V0cy9Kcy9hcHBDb25maWcuanNcIjoxfV19LHt9LFsyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTYsMTcsMTgsMTMsMTQsMTUsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjddKTtcbiJdLCJmaWxlIjoiYnVuZGxlLmpzIn0=
