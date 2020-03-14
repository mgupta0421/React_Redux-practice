import React, {Component} from 'react';
import './App.css';
import person from './Person/Person';
import Validation from './Validation/Validation';

class App extends Component{
   state = {
     username: ''
   }

   eventChangeUsername = (event) =>{
      this.setState({username: event.target.value});
   }
  render() {
   return (
    <div>
      <input type= "text"  onChange= {this.eventChangeUsername} value= {this.state.username}/>
      <p>{this.state.username}</p>
      <Validation inputLength= {this.state.username.length} />
    </div>
   );
  }
}

export default App;


