var Test = Backbone.View.extend({
	manage: true, // this means use backbone layout manager- otherwise we'd construct with Backbone.Layout.extend
	el: '#app',
	template: _.template('<p><%= name %></p>'),
	// using layout manager means we don't have to do this, we get a beforeRender and afterRender which can be helpful
	// render: function () {
	// 	this.$el.html(this.template({name: this.model.get('name')}))
	// }
});

