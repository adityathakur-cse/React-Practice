const mystyle = {
    color : "navy",
    backgroundColor : "white",
    border : "6px solid skyblue",
    borderRadius : "24px",
    fontFamily : "Georgia, 'Times New Roman', Times, serif"
}


function InlineCSS(){
    return(
        <div style={mystyle}>
            <h1>This is Inline CSS example.</h1>
        </div>
    )
}
export default InlineCSS