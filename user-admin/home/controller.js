var HomeController = Marionette.Controller.extend({
	initialize: function(options){
		this.module = options.module;
	},
  showIndex: function() {
    this.module.app.mainRegion.show(new HomeView());
    this.module.router.navigate("");
  }
});
