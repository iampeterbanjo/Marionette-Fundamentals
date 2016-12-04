var BreadCrumbModule = function(app) {
	var module = {},
			collection,
			view;

	module.setCrumbs = function (data) {
		collection.reset(data);
	};

	module.load = function(region, initialData) {
		initialData = initialData || {};

		collection = new BreadCrumbsCollection(initialData);

		collection.on('breadcrumb:selected', function(crumb) {
			app.trigger(crumb.get('trigger'));
		});

		view = new BreadCrumbsListView({
			collection: collection
		});

		region.show(view);
	};

	return module;
};