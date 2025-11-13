//using props in function components
//destructuring 
function LaptopComponent(props){
    return(
        <div>
            <h2>This is a Laptop function Component</h2>
            <h4>The color of laptop is {props.color} and brand is {props.brand}.</h4>
            <h4>Model no. is {props.con.modelno} and Year of manufacture is {props.con.year} and the version is {props.v}. </h4>
        </div>
    )
}
export default LaptopComponent;