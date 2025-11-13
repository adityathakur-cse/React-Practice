// import React from "react"
// class EventHandling extends React.Component{
//     newFun = () => {
//         alert("ok")
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Handling class component.</h1>
//                 <button onClick={this.newFun}>Click here</button>
//             </div>
//         )
//     }
// }
// export default EventHandling

function EventHandling(){
    function clickFun(){
        alert("This is an alert.")
    }
    return(
        <div>
            <h1>Event Handling function component.</h1>
            <button onClick={clickFun}>Click here</button>
        </div>
    )
}
export default EventHandling