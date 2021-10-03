import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper case clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = ()=>{
        console.log('upper case clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        console.log('upper case clicked');
        let newText = "";
        setText(newText);
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }
    
    const handleOnChange = (event)=>{
        console.log('on Change');
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    
    let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g; //for links 
    let mailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi; //for emails
    // setText("Your paragraph paste over here!")  setText no use kari ne j text variable change kari sakso.
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#080810'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#1c1616':'white', color: props.mode==='dark'?'white':'#080810'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark" onClick={handleUpClick}>Convert to upper case</button>
            <button disabled={text.length===0} className="btn btn-dark mx-3 my-1" onClick={handleLowerClick}>Convert to lower case</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#080810'}}>
            <h2>Your text summary</h2><hr />
            <p> <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words. <b>{text.length}</b> Characters. <b>{text.split('\n').filter((element)=>{return element.length!==0}).length}</b> Lines.</p>
            <p> <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes to read!. <b>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length)*60}</b> Seconds to read! </p>
            <p>Links : <b>{text.match(urlRegex)}</b></p>
            <p>Mails : <b>{text.match(mailRegex)}</b></p>
            <h2>Preview</h2><hr />
            <p>{text}</p>
        </div>
        </>
    )
}

