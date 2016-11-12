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