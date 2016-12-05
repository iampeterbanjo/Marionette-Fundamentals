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

// BreadCrumb Events
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
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {
      title: selectedUser.get('email')
    }]);
  });

  UserAdmin.on('userList:selected', function() {
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
  });

  UserAdmin.on('index:selected', function() {
    UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
  });
});

// Home events
UserAdmin.addInitializer(function() {
	UserAdmin.on('index:selected', function() {
    UserAdmin.home.controller.showIndex();
  });
});

// User Events
UserAdmin.addInitializer(function() {
  UserAdmin.on('user:selected', function(selectedUser) {
    UserAdmin.user.controller.showUserDetails(selectedUser);
  });

  UserAdmin.on('userList:selected', function() {
    UserAdmin.user.controller.showUserList();
  });

  UserAdmin.on('index:selected', function() {
    UserAdmin.home.controller.showIndex();
  });
});

UserAdmin.addInitializer(function() {
  Backbone.history.start();
})
