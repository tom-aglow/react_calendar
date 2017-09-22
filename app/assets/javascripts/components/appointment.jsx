let Appointment = React.createClass({
  render() {
    return (
      <div className="appointment">
        <h3>{this.props.appointment.title}</h3>
        <p>{moment(this.props.appointment.apt_time).format('MMMM DD YY, h:mm a')}</p>
      </div>
    )
  }
});