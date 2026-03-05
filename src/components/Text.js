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
       props.showAlert("copied successfully, ","copied:");
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
            <h1 className='md-3'>{props.heading}</h1>
            <textarea className="form-control  mx-1 my-1" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}  id="mybox" rows="3"></textarea>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleclick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handlelowclick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleclearclick}>clear all</button>
            <button disabled={text.length===0}  className="btn btn-primary  mx-1 my-1" onClick={handleCopy}>Copy ALL</button>
            <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handlePaste}>Paste Text</button>
    </div>
    </div>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
       <h2>Your Text summary</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element!=0}).length} <b>Words</b> and {text.length} <b>characters</b></p>
       <p>{0.008* text.split(" ").filter((element)=>{return element!=0}).length} Minute read</p>
       <h3>preview</h3>
       <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
