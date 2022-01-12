import { useState } from "react";
import { useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const Usefirestore=(collection)=>{
    const [images, setimages] = useState([]);
    useEffect(()=>{
       const unsub=projectFirestore.collection(collection)
        .orderBy('update','desc')
        .onSnapshot((snap)=> {
            let documents=[];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            });
            setimages(documents);
        })
        return()=>unsub();
    },[collection])
    
    return  {images};
}

export default Usefirestore;