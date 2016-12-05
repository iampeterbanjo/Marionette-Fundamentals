var UserAdmin = new Marionette.Application();

UserAdmin.addRegions({
  mainRegion: "#app",
  navRegion: '#nav-breadcrumbs'
});

// Modules
UserAdmin.addInitializer(function() {
	UserAdmin.breadCrumbs = new BreadCrumbModule({
    app: UserAdmin,
    initialData: {
      title: 'Home'
    }
  });
  UserAdmin.breadCrumbs.show(UserAdmin.navRegion);

  UserAdmin.user = new UserModule({
    app: UserAdmin,
    initialData: testData
  });

  UserAdmin.home = new HomeModule({
    app: UserAdmin
  });
});

// Events
UserAdmin.addInitializer(function() {
  var crumbs = {
    home: {
      title: 'Home',
      trigger: 'index:selected'
    },
    list: {
      title: 'User listing',
      trigger: 'userList:selected'
    }
  };

  UserAdmin.on('user:selected', function(selectedUser) {
    UserAdmin.user.controller.showUserDetails(selectedUser);
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {
      title: selectedUser.get('email')
    }]);
  });

  UserAdmin.on('userList:selected', function() {
    UserAdmin.user.controller.showUserList();
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
  });

  UserAdmin.on('index:selected', function() {
    UserAdmin.home.controller.showIndex();
    UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
  });

  Backbone.history.start();
});
