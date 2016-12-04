var UserModel = Backbone.Model.extend({
  url: 'api/users',
  validate: function(attrs) {
    if (!attrs.email && attrs.userName) {
      return 'Need an email and user name';
    }
  },
  initialize: function() {
    this.on('invalid', function(model) {
      alert(model.validationError);
    });
  },
  select: function() {
    UserAdmin.trigger('user:selected', this);
  }
});

var UserCollection = Backbone.Collection.extend({
  url: 'api/users',
  model: UserModel
});
