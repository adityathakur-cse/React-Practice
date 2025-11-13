import React from "react";
function FileComponent(){
    return (
        <div>
            <h3>
            This is a function component.
            </h3>
            <Laptop/>
        </div>
    )
}
export default FileComponent;

function Laptop(){
    return(
        <h2>This is a laptop function component.</h2>
    )
}