(function(context) {
	
	if(!context.core) {
		throw "core not available";
	}

	var dummy1 = core.foo(1, 2);

	var dummy2 = core.bar(2, 1);
	
	console.log(dummy1, dummy2);
	
}(this));
