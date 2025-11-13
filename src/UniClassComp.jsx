import React from "react"
// using props in class components
export class UniClassComp extends React.Component{
    render(){
        return(
            <div>
                <h2>The University name is {this.props.name}</h2>
            </div>
        )
    }
}