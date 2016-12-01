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
