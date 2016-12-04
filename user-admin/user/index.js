var UserModule = function(app) {
  var module = {};

  module.listUsers = function(region, users) {
    region.show(new UserListView({
      collection: users
    }));
  };

  module.showUser = function(region, user) {
    var layout = new UserDetailsLayout({
      model: user
    });

    region.show(layout);
    layout.summary.show(new UserSummaryView());
    layout.profile.show(new UserProfileView());
  };

  module.router = new UserRouter();

  return module;
};
