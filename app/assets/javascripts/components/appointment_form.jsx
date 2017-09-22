let AppointmentForm = React.createClass({
  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;

    this.props.onUserInput(obj);
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render() {
    return (
      <div>
          <h2>Make a new appointment</h2>
          <form onSubmit={this.handleSubmit}>
            <input name='title' placeholder='Appointment Title'
                   value={this.props.title}
                   onChange={this.handleChange}
            />
            <input name='apt_time' placeholder='Date and Time'
                   value={this.props.apt_time}
                   onChange={this.handleChange}
            />
            <input type='submit' value='Make Appointment' />
          </form>
      </div>
      )
      }
});