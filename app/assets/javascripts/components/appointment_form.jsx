let AppointmentForm = React.createClass({
  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj["input_" + name] = e.target.value;

    this.props.onUserInput(obj);
  },

  render() {
    return (
      <div>
          <h2>Make a new appointment</h2>
          <form>
            <input name='title' placeholder='Appointment Title'
                   value={this.props.input_title}
                   onChange={this.handleChange}
            />
            <input name='apt_time' placeholder='Date and Time'
                   value={this.props.input_apt_time}
                   onChange={this.handleChange}
            />
            <input type='submit' value='Make Appointment' />
          </form>
      </div>
      )
      }
});