import React from 'react'
import axios from 'axios'

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    //console.log('state: ', this.state);
    this.setState({
        [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    //console.log(evt.target.content.value);

    this.props.addStudent(this.state);

    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render() {
    return (
      <div className='new-student-form'>
        <h3>New Student Form</h3>
        <form id='new-student-form' onSubmit={this.handleSubmit}>
          <input type='text' name='firstName' placeholder='First name' value={this.state.firstName} onChange={this.handleChange}/>
          <input type='text' name='lastName' placeholder='Last name' value={this.state.lastName} onChange={this.handleChange}/>
          <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
          <button type='submit'>Add new student</button>
        </form>
      </div>
    )
  }
}

export default AddStudent;
