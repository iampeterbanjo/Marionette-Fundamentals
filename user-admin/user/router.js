var UserRouter = Backbone.Router.extend({
  // routes
  routes: {
    "": "showIndex",
    "users": "showUserList",
    "users/:id": "showUserDetails"
  },
  // route handlers
  showIndex: function() {
    UserAdmin.trigger('index:selected');
  },
  showUserList: function() {
    UserAdmin.trigger('userList:selected');
  },
  showUserDetails: function(id) {
    var user = UserAdmin.Users.get(id);
    UserAdmin.trigger('user:selected', user);
  }
});
