//Author : Hannad Rehman Thu Dec 01 2016 23:17:09 GMT+0530 (IST)
//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
homeCtr.$inject=['homeService'];
function homeCtr(homeService){
	console.log('home component is up and working');
}
 module.exports=homeCtr;
