import React, { useState, useEffect } from 'react';
import { $CombinedState } from 'redux';
function CounterExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [lname, setLName] = useState("");

    const handleSubmit = (evt) => {
        if (`${name}` == "") {
            alert(`Please Enter First Name`)
        }
        else if (`${lname}` == "") {
            alert(`Please Enter Last Name`)
        }
        else {
            alert(`Submitting Name ${name} ${lname}`)
        }
    }
    return (
        <div>
            <h1>React-Hooks Demo</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me </button>
        </div>
    );
}
export default CounterExample;  