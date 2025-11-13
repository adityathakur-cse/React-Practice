import './JSX.css'
function JSXBasics() {
  const x = 5 + 5;
  const style1 ={
    color: "black",
    backgroundColor: "skyblue"
  }
  return (
    <div className='my'>
      <h1>I have calculated {10 * 5}</h1>
      <h1>The sum is : {x}</h1>
      {/* <h2>The calculation of weight is : {calWg(5)}</h2> */}
      <h4>
        <button onClick={showAlert} disabled={false}>Alert Button</button>
      </h4>
      <div style={style1}>
        {/* <h2>Hello, this is child div section</h2> */}
      </div>
    </div>
  )
}
function showAlert() {
  alert("Hello Aditya!");
}
export default JSXBasics;