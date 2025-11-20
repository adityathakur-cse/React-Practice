import { Component } from "react";

export class ControlledComp extends Component{
    constructor(){
        super();
        this.state = {
            firstname : '',
            lastname : '',
            review : ''
        }
    }
    changeFirstname = (e) => {
        this.setState({firstname : e.target.value})
    }
    changeLastname = (e) => {
        this.setState({lastname : e.target.value})
    }
    changeReview = (e) => {
        this.setState({review : e.target.value})
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}