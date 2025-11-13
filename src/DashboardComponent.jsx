import React from "react";
import './App.css'
class DashboardComponent extends React.Component{
    constructor(){
        super();
        this.state = {color : "red", type : "D1", year : 2000};
    }
    //state management
    newFunc = () => {
        this.setState({type : "D2"})
    }
    // | by default always need to create while using class
    // V
    render(){
        return(
            <div className="border border-2 p-2 m-2"> 
                <h2>This is our Dashboard Component. It is of {this.state.color} color  and its type is {this.state.type}</h2>
                <p>The manufacturing year is {this.state.year}</p>
                <button onClick={this.newFunc}>Change Property</button>
            </div>
        )
    }
}
export default DashboardComponent;

export class NewComponent extends React.Component{
    render(){
        // return React.createElement('h3',{style:{color:'lightgreen'}}, 'Created using createElement' )
        return React.createElement('h3',{style:{}}, 'This block is created using createElement' )
    }
}
// export NewComponent;