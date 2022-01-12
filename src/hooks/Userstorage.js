import { dblClick } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { useEffect } from "react";
import { projectStorage } from "../Firebase/config";
import { projectFirestore} from "../Firebase/config";
const Userstorage=(file)=>{
    const [progress,setProgess]=useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)
    useEffect(()=>{
        const storageRef=projectStorage.ref(`${file.name}`);
        const collectionRef=projectFirestore.collection("Images")
        storageRef.put(file).on('state_changed',(snap)=>{
            console.log(file.name)
            let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
            setProgess(percentage);
        },(err)=>{
            seterror(err);
        },async()=>{
            const url=await storageRef.getDownloadURL()
            const today=new Date();
            const update=today.getHours();
            await collectionRef.add({url,update});
            seturl(url);
        })
       
        
    },[file]);
    
    return {progress,url,error}
}
export default Userstorage