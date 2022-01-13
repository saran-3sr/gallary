import React from "react";
import { useEffect } from "react/cjs/react.development";
import Userstorage from "../hooks/Userstorage"

function Progressbar({file,setfile})
{
    const {progress,url,error}=Userstorage(file);
    console.log(progress,url);
    useEffect(() => {
        if (url) {
          setfile(null);
        }
      }, [url, setfile]);
    return(
        <div className="progress-bar" style={{width:{progress}}}>
        </div>
    );
    
    
    
    
}
export default Progressbar

 