import React, {useState} from 'react'

function Textform(props) {
    const[text,setText] = useState(''); 
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const upperClick= ()=>{
        setText(text.toUpperCase());
    }
    const lowerClick= ()=>{
        setText(text.toLowerCase());
    }
    const Trim= ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(' '));   
    }
    const Reset= ()=>{
        setText("");
    }
 
  return (
    <>
    <div className="Container mx-5 my-3 mainform">
      <h3>Enter your text to analyse.</h3>
      <textarea name="Enter-your-text" value={text} onChange={handleOnChange} className="textform" placeholder={props.placeholder} id="textform" cols="180" rows="8"></textarea>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={upperClick}>Convert To Uppercase</button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={lowerClick}>Convert To Lowercase</button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={Trim}>Trim Extra Spaces</button>
      <button type="button" className="btn btn-primary mx-1 my-2" onClick={Reset}>Reset</button>
    </div>
    <div className="Container mx-5 Info">
        <p>{text.split(' ').filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.004*text.split(' ').length} minutes read.</p>
        <h4 className="Summary-heading"><a className="nav-link" href="\">Click to view text Summary</a></h4>
        <p>{text}</p>
    </div>
    
    </>

  )
}

export default Textform
