import React,{useState} from 'react'

export default function Text(props) {
   const handleclick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
        props.showAlert("converted  ","Uppercase");

   }
   const handlePaste= async()=>{
     const copyText=await navigator.clipboard.readText();
     setText(copyText);
   }

   const handleCopy=()=>{
    // let text=document.getElementById("mybox");
    // text.select();
    //   navigator.clipboard.writeText(text.value);
       navigator.clipboard.writeText(text);
   }

   const handlelowclick=()=>{
    setText(text.toLowerCase());
    props.showAlert("converted ","Lowercase");
   }

    const handlechange=(event)=>{
        // console.log("on change");
        setText(event.target.value);

    }
    
    const handleclearclick=()=>{
        setText('');
            props.showAlert("cleared All Text ","clear");

    }
    const [text, setText] = useState('');
    //  setText="new text";
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
            <h1>{props.heading}</h1>
             <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'gray':'white'}} id="mybox" rows="3"></textarea>
             <button className="btn btn-primary mx-1" onClick={handleclick}>convert to uppercase</button>
            <button className="btn btn-primary" onClick={handlelowclick}>convert to lowercase</button>
            <button className="btn btn-primary" onClick={handleclearclick}>clear all</button>
             <button className="btn btn-primary" onClick={handleCopy}>Copy ALL</button>
               <button className="btn btn-primary" onClick={handlePaste}>Paste Text</button>
    </div>
    </div>
    <div class="container"style={{color:props.mode==='dark'?'white':'black'}}>
       <h2>Your Text summary</h2>
       <p>{text.split(" ").length} <b>Words</b> and {text.length} <b>characters</b></p>
       <p>{0.008* text.split(" ").length} Minute read</p>
       <h3>preview</h3>
       <p>{text}</p>

    </div>
    </>
  )
}
