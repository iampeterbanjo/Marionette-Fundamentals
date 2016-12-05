var UserModule = function(settings) {
  var module = {},
      initialData = settings.initialData || {},
      app = settings.app || {};

  module.collection = new UserCollection(initialData);

  module.router = new UserRouter({
    module: module
  });

  module.app = app;

  module.controller = new UserController({
    module: module
  });

  return module;
};
