import React,{ Component }from "react";
import './App.css';
import UseStateComponent from "./component/UseStateComponent";
import UseStateClassComponent from "./component/UseStateClassComponent";
import HooksEffectComponent from "./component/HooksEffectComponent";
import HooksEffectClassComponent from "./component/HooksEffectClassComponent";
import UseRefComponent from "./component/UseRefComponent";
import UseReducerComponent from "./component/UseReducerComponent";
import CallBackComponent from "./component/CallBackComponent";

class App extends  Component {
  constructor(props){
    super(props);
    this.state={
      ShowState:0
    }
  }
  render()
  {
return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks</h1>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:1})}>UseState by using Function</button>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:2})}>State by using Class</button>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:3})}>Hooks Effect by using Function</button>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:4})}>Hooks Effect by using class</button>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:5})}>UseRef</button>
      <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:6})}>Use Reducer</button>
      {/* <button style={{width:200,height:40,margin:5}} onClick={()=>this.setState({ShowState:7})}>Use Call Back</button> */}

      {this.state.ShowState==1?<UseStateComponent/>:null}
      {this.state.ShowState==2?<UseStateClassComponent/>:null}
      {this.state.ShowState==3?<HooksEffectComponent/>:null}
      {this.state.ShowState==4?<HooksEffectClassComponent/>:null}
      {this.state.ShowState==5?<UseRefComponent/>:null}
      {this.state.ShowState==6?<UseReducerComponent/>:null}
      {/* {this.state.ShowState==7?<CallBackComponent/>:null} */}

      </header>
    </div>  
  );
  }
}

export default App;
