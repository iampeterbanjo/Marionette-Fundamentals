var BreadCrumbsView = Marionette.ItemView.extend({
	tagName: 'li',
	className: 'breadcrumb float-left',
	template: _.template('<a href="#"><%= title %></a>'),

	events: {
		'click a': 'showPage'
	},

	showPage: function(event) {
		event.preventDefault();

		this.model.select();
	}
});

var BreadCrumbsListView = Marionette.CollectionView.extend({
	tagName: 'ol',
	className: 'breadcrumbs',
	childView: BreadCrumbsView
});
