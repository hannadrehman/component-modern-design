applicationCtr.$inject=['applicationService'];
function applicationCtr(applicationService){
	console.log('parent component is up and working');
	this.me='hannad';
}

module.exports=applicationCtr;
