var BreadCrumb = Backbone.Model.extend({
	select: function() {
		this.trigger('breadcrumb:selected', this);
	}
});

var BreadCrumbsCollection = Backbone.Collection.extend({
	model: BreadCrumb
});
