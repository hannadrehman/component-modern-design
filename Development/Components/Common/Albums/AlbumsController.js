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