import React, { useState } from "react";
function ToggleText(){
    const[show, setShow]=useState(true)
    return(
        <>
        <div>
        <button onClick={()=>setShow(!show)}>Toggle the text</button>
        {
            show && <p>Hello, yukesh</p>
        }
        </div>
        </>
    )
}
export default ToggleText