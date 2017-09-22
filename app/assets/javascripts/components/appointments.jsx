let Appointments = React.createClass({
  getInitialState() {
    return {
      appointments: this.props.appointments,
      input_title: 'New title',
      input_apt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput(obj) {
    this.setState(obj);
  },

  render() {
    return (
      <div>
        <AppointmentForm
            input_title={this.state.input_title}
            input_apt_time={this.state.input_apt_time}
            onUserInput={this.handleUserInput}
        />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});