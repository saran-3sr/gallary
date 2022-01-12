import React from "react";
import Usefirestore from "../hooks/Usefirestore";

function Photogrid()
{
    const {images}=Usefirestore('Images');
    console.log(images);
    
    return(
        <div className="Photogrid">
            {images &&images.map(img=>(
                <div className="grid" key={img.id}>
                    <img className="img"src={img.url} alt=""/>
                </div>
                
            ))}
        </div>
    );
        
}
export default Photogrid;