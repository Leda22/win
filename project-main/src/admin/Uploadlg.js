import React, { useState } from 'react'
import db, { storage } from '../firebase'


function Uploadlg() {
  const [fileUrl, setFileUrl] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    await fileRef.getDownloadURL().then((res) => {setFileUrl(res)});
    console.log(fileUrl)
   
  };
  
  return (
    <input type="file" onChange={onFileChange} />
  );
}
export default Uploadlg