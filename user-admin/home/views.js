var HomeView = Marionette.ItemView.extend({
  template: "#index-template",

  events: {
    'click #nav-users-index': 'showUserList'
  },

  showUserList: function(event) {
    event.preventDefault();

    UserAdmin.trigger('userList:selected');
  }
});
