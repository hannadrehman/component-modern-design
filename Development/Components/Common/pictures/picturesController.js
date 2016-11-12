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