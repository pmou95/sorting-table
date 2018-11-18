import React, { Component } from 'react';
import Student from './Student/Student';
import './App.css';

class App extends Component {
  state ={
    student: [
      {name: 'Alex', age: 22 },
      {name: 'DJay', age: 25 },
      {name: 'Gigi', age: 21 },
      {name: 'Frank', age: 24 },
      {name: 'Blu', age: 18 },
      {name: 'CL', age: 23 }
    ]  
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy = (key) =>{
    let copy = [...this.state.student];
    copy.sort(this.compareBy(key));
    this.setState({student: copy});
  }



  render() {
    return (
      <div className="App">
<table>
    <thead>
    <tr>
      <th onClick={()=>this.sortBy('name')}>Name</th>
      <th onClick={()=>this.sortBy('age')}>Age</th>
    </tr>
    </thead>

    <tbody>
    {this.state.student.map((student, index) => {
         return <Student 
          name={student.name}
          age={student.age}
          key={index}/>
         

       })}
       </tbody>
  </table>;
      
      </div>
    );
  }
}

export default App;
