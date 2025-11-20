import { Component } from "react";
//using class component
export class ControlledComp extends Component{
    constructor(){
        super();
        this.state = {
            firstname : '',
            lastname : '',
            review : ''
        }
    }
    // changeFirstname = (e) => {
    //     this.setState({firstname : e.target.value})
    // }
    // changeLastname = (e) => {
    //     this.setState({lastname : e.target.value})
    // }
    // changeReview = (e) => {
    //     this.setState({review : e.target.value})
    // }
    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit = () => {
        alert(`Welcome ${this.state.firstname} ${this.state.lastname} and ${this.state.review}`)
        e.preventDefault();
    }
    render(){
        return(
            <div onSubmit={this.handleSubmit} className="border border-2 rounded-xl p-4 w-90 mx-auto">
                <form>
                    <label>First Name : </label>
                    <input type="text" className="border m-2" value={this.state.firstname} onChange={this.handleInput} name="firstname"/>
                    {/* <input type="text" className="border m-2" value={this.state.firstname} onChange={this.changeFirstname}/> */}
                    <br/>
                    <label>Last Name :  </label>
                    <input type="text" className="border m-2" value={this.state.lastname} onChange={this.handleInput} name="lastname"/>
                    {/* <input type="text" className="border m-2" value={this.state.lastname} onChange={this.changeLastname}/> */}
                    <br/>
                    <label>Write Review : </label>
                    <input className="border m-2" value={this.state.review} onChange={this.handleInput} name="review"/>
                    {/* <input type="text" className="border m-2" value={this.state.review} onChange={this.changeReview}/> */}
                    <br/>
                    <button>Submit form</button>
                </form>
            </div>
        )
    }
}