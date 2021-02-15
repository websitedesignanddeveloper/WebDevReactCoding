import React, { useState, useEffect } from 'react';  
  
function FromDesign() {  
  const [count, setCount] = useState(0);  
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  
  const handleSubmit = (evt) => {
    if(`${name}`=="")
    {
      alert(`Please Enter First Name`)
    }
    else if(`${lname}`==""){
      alert(`Please Enter Last Name`)

    }
    else{
      alert(`Submitting Name ${name} ${lname}`)
    }

      
  }
  return (  
    <div>  
          <h1>React-Hooks Demo</h1>

      <form onSubmit={handleSubmit} style={{display: "table-caption"}}>
      <label>
        First Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{height:20}}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lname}
          onChange={e => setLName(e.target.value)}
          style={{height:20}}
        />
      </label>
      <input type="submit" value="Submit" />
</form>
    </div>  
  );  
}  
export default FromDesign;  