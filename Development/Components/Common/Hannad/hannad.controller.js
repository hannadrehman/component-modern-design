//Author : Hannad Rehman Mon Dec 05 2016 00:21:21 GMT+0530 (IST)

//uncomment this line and add as a string to the array if you want to inject dependencies in your controller;
hannadCtr.$inject=['hannadService'];
function hannadCtr(hannadService){
	console.log('hannad component is up and working');
	console.log(hannadService.functionName);
}
 module.exports=hannadCtr;
