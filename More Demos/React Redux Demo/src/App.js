import React, { Component } from 'react';
import './App.css';
import Counter from '../src/container/counterContainer';
import CounterExample from "./component/CounterExample";
import FromDesign from "./component/FromDesign";
class App extends Component {
  constructor(props){  
    super(props);  
    this.state = {  
      ShowState:0
    }  
  }
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
              <button style={{width:200,height:40,margin:10}} onClick={()=>this.setState({ShowState:1})}>React Redux (increament/decrement)</button>
              <button style={{width:200,height:40,margin:10}} onClick={()=>this.setState({ShowState:2})}>React-Hooks From</button>
              <button style={{width:200,height:40,margin:10}} onClick={()=>this.setState({ShowState:3})}>React-Redux (counter time)</button>
              {this.state.ShowState==1?
               <Counter/>:null
              }
              {this.state.ShowState==2?
              <FromDesign/>:
              null}
              {this.state.ShowState==3?
              <CounterExample/>:
              null}
            </header>
         </div>
      );
   }
}
export default App;