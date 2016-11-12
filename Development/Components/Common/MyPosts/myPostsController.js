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