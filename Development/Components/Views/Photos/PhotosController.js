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