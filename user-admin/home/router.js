var HomeRouter = Backbone.Router.extend({
  // routes
  routes: {
    "": "showIndex"
  },
  // route handlers
  showIndex: function() {
    UserAdmin.trigger('index:selected');
  }
});
