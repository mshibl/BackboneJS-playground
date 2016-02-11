// Model
var Appointment = Backbone.Model.extend({});
var appointment = new Appointment();

// View
var AppointmentView = Backbone.View.extend({});
var appointmentView = new AppointmentView({model: appointment});

// View with render function
var AppointmentView = Backbone.View.extend({
	render: function(){
		var newLine = '<li>' + this.model.get('title') + '</li>';
		$(this.el).html(newLine);
	}
});

// Set model value
appointment.set({title: 'My Backbone Hurts!'});

// Rendring view
appointmentView.render()
#('body').append(appointmentView.el)