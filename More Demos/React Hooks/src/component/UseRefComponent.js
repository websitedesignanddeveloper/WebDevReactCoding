import React,{Fragment,useRef,UseRef} from "react";
function UseRefComponent()
{
    const focusPoint = useRef(null);
  const onClickHandle = () =>
  {
focusPoint.current.value=
"The quick brown for jumps over the lazy dog";
focusPoint.current.focus();
  }
    
return(
    <Fragment>
        <div>
        <button onClick={onClickHandle}>
            ACTION
        </button>
        <br/>   
        <label>Click on action button to focus and pupulate the text</label>
        <br/>
        <textarea ref={focusPoint} style={{width:200,height:100}}/>
        </div>
    </Fragment>
   
)
}
export default UseRefComponent;