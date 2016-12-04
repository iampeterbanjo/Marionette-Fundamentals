var UserController = Marionette.Controller.extend({
  initialize: function(options) {
    this.module = this.options.module;
  },
  showUserList: function() {
    this.module.app.mainRegion.show(new UserListView({
      collection: this.module.collection
    }));
    this.module.router.navigate("users");
  },
  showUserDetails: function(user) {
    var layout = new UserDetailsLayout({
      model: user
    });

    this.module.app.mainRegion.show(layout);
    layout.summary.show(new UserSummaryView());
    layout.profile.show(new UserProfileView());
    this.module.router.navigate("users/" + user.id);
  }
});
