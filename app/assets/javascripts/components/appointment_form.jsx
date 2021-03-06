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

  setAptTime(e) {
    let name = 'apt_time';
    let obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render() {
    let inputProps = {
      name: 'apt_time'
    };

    return (
      <div>
          <h2>Make a new appointment</h2>
          <form onSubmit={this.handleSubmit}>
            <input name='title' placeholder='Appointment Title'
                   value={this.props.title}
                   onChange={this.handleChange}
            />

            <Datetime inputProps={inputProps}
                      value={this.props.apt_time}
                      input={false}
                      open={true}
                      onChange={this.setAptTime}
            />
            <input type='submit' value='Make Appointment' className="submit-button" />
          </form>
      </div>
      )
      }
});