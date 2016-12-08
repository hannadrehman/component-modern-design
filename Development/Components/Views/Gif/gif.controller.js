//Author : Hannad Rehman Wed Dec 07 2016 00:51:22 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
gifCtr.$inject=['gifService'];
function gifCtr(gifService){
	console.log('gif component is up and working');
	var $this=this;
	$this.elements={
		isSearchTxt:false,
		type:'trending'
	};
	$this.navClick=function(data){
		if(data=='search'){
			$this.elements.isSearchTxt=true;
			$this.elements.type=data;
		}
		else {
				$this.elements.type=data;
				$this.elements.isSearchTxt=false;

		}

	};

}
 module.exports=gifCtr;
