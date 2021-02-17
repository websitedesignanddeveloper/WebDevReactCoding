import React ,{ useCallback, useCallBack, useState } from "react";
function CallBackComponent() {
    const [count,setCount]=useState(0);
    const [isActive,setActive]=useState(false);

    const handleCount = useCallBack(()=>setCount(count+1),[ count]);
    const handleShow= useCallBack(()=>setActive(!isActive),[isActive]);
    return(
        <div>
            {isActive && (
                <div>
                    <h1>{count}</h1>
                    <button name="Increment" onClick={handleCount}/>
                </div>
            )}
            <button
        onClick={handleShow}
        name={isActive ? "Hide Counter" : "Show Counter"}
      />
        </div>
    )
}
export default CallBackComponent;