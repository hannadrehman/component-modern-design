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