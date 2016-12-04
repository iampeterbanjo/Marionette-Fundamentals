// use Controllers to manage views
var HomeController = Marionette.Controller.extend({
  showIndex: function() {
    UserAdmin.mainRegion.show(new HomeView());
    UserAdmin.HomeRouter.navigate("");
  }
});
