import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput' 
import UserInput from './UserInput/UserInput' 

class App extends Component{
   state = {
     username: "rajat"
   }

  eventHandler =(event) =>{
    this.setState({username: event.target.value});

   } 
  render() {
   return (
    <div>
      
      <UserInput changed = {this.eventHandler}
      currentname= {this.state.username}/>
      <UserOutput  username = {this.state.username}/>
      <UserOutput username= {this.state.username}/>
    </div>
   );
  }
}

export default App;


