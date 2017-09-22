let Appointments = React.createClass({
  getInitialState() {
    return {
      appointments: this.props.appointments,
      title: 'New title',
      apt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput(obj) {
    this.setState(obj);
  },

  handleFormSubmit() {
    let appointment = {
      title: this.state.title,
      apt_time: this.state.apt_time
    };
    $.post('/appointments', {appointment: appointment})
      .done((data) => {
        this.addNewAppointment(data);
      });
  },

  addNewAppointment(appointment) {
    let appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({ appointments: appointments.sort((a, b) => {
      return new Date(a.apt_time) - new Date(b.apt_time);
    })});
  },

  render() {
    return (
      <div>
        <AppointmentForm
            title={this.state.title}
            apt_time={this.state.apt_time}
            onUserInput={this.handleUserInput}
            onFormSubmit={this.handleFormSubmit}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});