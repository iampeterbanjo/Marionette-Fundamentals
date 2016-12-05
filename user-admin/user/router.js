var UserRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.module = options.module;
  },
  routes: {
    "users": "showUserList",
    "users/:id": "showUserDetails"
  },

  showUserList: function() {
    this.module.app.trigger('userList:selected');
  },
  showUserDetails: function(id) {
    var user = this.module.collection.get(id);
    this.module.app.trigger('user:selected', user);
  }
});
