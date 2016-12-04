var UserController = Marionette.Controller.extend({
  showUserList: function() {
    UserAdmin.mainRegion.show(new UserListView({
      collection: UserAdmin.Users
    }));
    UserAdmin.UserRouter.navigate("users");
  },
  showUserDetails: function(user) {
    var layout = new UserDetailsLayout({
      model: user
    });

    UserAdmin.mainRegion.show(layout);
    layout.summary.show(new UserSummaryView());
    layout.profile.show(new UserProfileView());
    UserAdmin.UserRouter.navigate("users/" + user.id);
  }
});
