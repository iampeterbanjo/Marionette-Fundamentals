var UserItemView = Marionette.ItemView.extend({
  tagName: 'tr',
  template: _.template('<td><a href="#"><%= email %></a></td>'),
  events: {
    'click a': 'showUserDetails'
  },
  showUserDetails: function(event) {
    event.preventDefault();

    UserAdmin.trigger('user:selected', this.model);
  }
});

var UserListView = Marionette.CollectionView.extend({
  tagName: 'table',
  className: 'table table-striped',
  childView: UserItemView,
  onBeforeRender: function() {
    this.$el.append('<h2>User list</h2>');
  }
});

var UserDetailsLayout = Marionette.LayoutView.extend({
  template: '#user-details-layout-template',
  regions: {
    'summary': '#summary',
    'profile': '#profile'
  }
});

var UserSummaryView = Marionette.ItemView.extend({
  template: '#user-summary-template'
});

var UserProfileView = Marionette.ItemView.extend({
  template: '#user-profile-template'
});
