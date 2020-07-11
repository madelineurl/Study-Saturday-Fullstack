import React, { Component } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent'

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.addStudent = this.addStudent.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  async addStudent(evt) {
    event.preventDefault();
    console.log(evt.target.content.value);
    const {data} = await axios.post('/student');
    console.log(data);

    this.setState({
      students: [...this.state.students, data]
    })
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        <AddStudent addStudent={this.addStudent}/>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
