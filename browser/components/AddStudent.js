import React from 'react'
import axios from 'axios'

class AddStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      newStudent: ''
      // fullName: '',
      // id: 0,
      // firstName: '',
      // lastName: '',
      // email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(this.state);
    this.setState({
      newStudent: evt.target.value
    });
  }

  async handleSubmit(evt) {
    event.preventDefault();
    console.log(evt.target.content.value);
    const newStudent = await axios.post('/student');
    console.log(newStudent);

    this.setState({
      newStudent: ''
    })
  }

  render() {
    return (
      <form id='new-student-form' onSubmit={this.handleSubmit}>
        <input type='text' name='content' value={this.state.newStudent} onChange={this.handleChange}/>
        <button type='submit'>Add new student</button>
      </form>
    )
  }
}

export default AddStudent;
