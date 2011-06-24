(function(context) {

	var core = context.core = {};

	core.foo = function(arg1, arg2) {
		return arg1 + arg2;
	}

	core.bar = function(arg1, arg2) {
		return arg1 - arg2;
	}
	
	return core;
	
}(this));
