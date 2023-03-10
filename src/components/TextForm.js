import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was fired" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Upper Case!!!", "success")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lower Case!!!", "success")
  }
  const handleOnChange = (event) => {
    //console.log("Handle on change was fired")
    setText(event.target.value)
  }

  //const [text, setText] = useState("Enter text here")
  const [text, setText] = useState("")
  return (
    <>
  <div className='container' style={{color : props.mode==="light"?"black":"white"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor : props.mode==="dark"?"gray":"white", color : props.mode==="light"?"black":"white"}}></textarea>
    </div>
    <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
  </div>
  <div className="container my-3" style={{color : props.mode==="light"?"black":"white"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} min to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text in text area to preview"}</p>
  </div>
    </>
  )
}
