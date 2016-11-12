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