var MyObject = (function() {
	function MyObject() {
	}

	MyObject.prototype.readyCalled = function() {
		console.log("Constructor called.");
		$("#myButton").click(this.readyCalled);
    }

	MyObject.prototype.stringSender = function() {
		console.log("stringSender called.");
		$("#stringHolder").text('just placed this in p tag id stringHolder');
	};
	return MyObject;
}());


$(document).ready(function() {
	var myObject = new MyObject();
	//myObject.readyCalled();
	myObject.stringSender();
});