var AppointmentsList = React.createClass({
  render: function() {
    let apList = this.props.appointments.map((appointment) => {
      return (
          <Appointment appointment={appointment} key={appointment.id}/>
      )
    });

    return <div>{apList}</div>
  }
});