let Appointments = React.createClass({
  render() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentsList appointments={this.props.appointments} />
      </div>
    )
  }
});