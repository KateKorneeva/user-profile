var app = app || {};

app.User = Backbone.Model.extend({
	defaults: {
		login: '',
		password: '',
		firstname: '',
		lastname: '',
		mobile: '',
		email: '',
		birthday: ''
	}
});