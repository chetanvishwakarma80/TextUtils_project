import React,{useState} from 'react'

export default function Textarea(props) {
  const [text,setText]=useState("")

   const handleOnChange=(event)=>{
    setText(event.target.value)
   }
const handleUpClick=()=>{
  const newText = text.toUpperCase()
  setText(newText)
  props.showAlert("Converted to uppercase!","success")  
}
const handleLoClick=()=>{
  const newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase!","success")

}
const handleClearClick=()=>{
  const newText="";
  setText(newText);
  props.showAlert("Text Clear!","success")
}
const handleCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text Copy!","success")

}
const handleExtraSpace = () =>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!!","success")

}
  return (
    <>   
     <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
  <textarea className="form-control " value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
</div>
  <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2 my-1"  disabled={text.length===0} onClick={handleLoClick}>Convert to  Lowercase</button>
  <button className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-2 my-1" disabled={text.length===0}  onClick={handleCopy}>Copy Text</button>  
  <button className="btn btn-primary mx-2 my-1"  disabled={text.length===0} onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
<div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}} >
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Worlds and  {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to priview it here"}</p>
</div>
    </>
  )
}
