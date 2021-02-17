import React,{Component} from "react";
export default class UseStateClassComponent extends Component{
constructor(props){
    super(props);
    this.state={
        count:0,
        name:'Walstar'
    }
}
    render(){
        return(
            <div>
                 <p>Your name of company is {this.state.name}</p>
                <p>You clicked {this.state.count} time</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Clicked</button>
            </div>
        )
    }
} 