import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count : 0 };
    }
    plus = () => {
        this.setState({count : this.state.count + 1});
    }
    minus = () => {
        // if(count > -1){
            this.setState({count : this.state.count - 1});
        // }
    }
    render(){
        return(
            <div className="border flex justify-center items-center p-2 gap-8 bg-white rounded-xl m-2">
                <button className="bg-green-500 text-2xl font-bold" onClick={this.plus}>+</button>
                <div className="text-black text-2xl font-bold"> {this.state.count} </div>
                <button className="bg-red-500 text-2xl font-bold" onClick={this.minus}>-</button>
            </div>
        )
    }
}
export default Counter