//Author : Hannad Rehman Wed Dec 07 2016 20:48:13 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
gifDisplayCtr.$inject=['gifDisplayService'];
function gifDisplayCtr(gifDisplayService){
	console.log('gifDisplay component is up and working');
	var $this=this;
	$this.data={
		images:[]
	};
$this.$onInit=function(){
	getData($this.type);
};
$this.$onChanges=function(changes){
	getNewData(changes);
};
	function getData(type){
		var serviceObj={
			method:1,
			data:{}
		};
		if(type=='trending'){
			serviceObj.url='http://api.giphy.com/v1/gifs/'+$this.type+'?api_key=dc6zaTOxFJmzC';
		}
		else{
			serviceObj.url='http://api.giphy.com/v1/gifs/'+$this.type+'?q'+$this.search+'=&api_key=dc6zaTOxFJmzC';
		}

		gifDisplayService.fetchGifs(serviceObj,{
			success:function(data){
				if(data.status==200){
							$this.data.images=data.data.data;
							console.log("Search",$this.data.images);
						}
			},
			error:function(error){
				alert(error.status);
			}
		});
	}
	function getNewData(changes) {
		var a = changes;
		console.log(a);
		if (typeof changes.type.previousValue==='string') {
				// if($this.type!==changes.type.currentValue){
					$this.type=changes.type.currentValue;
					getData($this.type);
			// }
			}

	}
}
 module.exports=gifDisplayCtr;
