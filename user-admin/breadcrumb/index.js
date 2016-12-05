var BreadCrumbModule = function(settings) {
  var module = {},
      app = settings.app || {},
      initialData = settings.initialData || {},
      collection = new BreadCrumbsCollection(initialData),
      view = new BreadCrumbsListView({
        collection: collection
      });

  module.setCrumbs = function(data) {
    collection.reset(data);
  };

  collection.on('breadcrumb:selected', function(crumb) {
    app.trigger(crumb.get('trigger'));
  });

  module.show = function(region) {
    if(!region) {
      throw new Error("Can't show breadcrumbs without region");

      return;
    }

    region.show(view);
  };

  return module;
};
