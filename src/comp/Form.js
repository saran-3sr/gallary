import React, {useState} from 'react';
import Progressbar from './Progressbar';

function Form()
{
const [file, setfile] = useState(null);
const [error,setError]=useState(null);
const eventhandler=(e)=>{
    let selected=e.target.files[0];
    console.log(selected)
    if(selected.type=="image/png"||selected.type=="image/jpeg")
    {
        setfile(selected); 
        setError(null); 
    }
    else
    {
        setfile(null)
        setError("Please upload valid image format")
    }  
}
const Clickhandler=()=>{
    const s=document.getElementById("file").click();
}
    return(
    <div className="form">
        <label htmlFor="form">
            <input className='custom-file-input'type="file" id="file" onChange={eventhandler}/>
            <span onClick={Clickhandler}>+</span>
        </label>
        <div className="output">
            { error && <div className="error">{error}</div> }
            { file && <div className={file.name} id='file'>{file.name}</div>}
            {file && <Progressbar file={file} setfile={setfile}/>}

        </div>
    </div>
    );

    
}
export default Form;