import React, { Component,useState  } from 'react';
class Counter extends Component {

   render() {
      const {counter,increment,decrement,reset} = this.props;

      return (
         <div >
             <h1>React-Redux Demo </h1>
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>            
         </div>
      );
   }
}
export default Counter;