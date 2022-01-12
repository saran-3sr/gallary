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
    return(
    <div className="form">
        <label htmlFor="form">
        <form action="">
            <input className='custom-file-input' type="file" onChange={eventhandler}/>
        </form>
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