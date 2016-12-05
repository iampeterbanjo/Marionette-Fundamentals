var HomeModule = function(settings) {
	var module = {},
			app = settings.app || {};

	module.app = app;

	module.router = new HomeRouter();

	module.controller = new HomeController({
		module: module
	});

	return module;
};
