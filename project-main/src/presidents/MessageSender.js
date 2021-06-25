import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSender.css'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import db, { storage } from '../firebase';

function MessageSender() {
    const [message, setMessage] = useState('')
    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        await fileRef.getDownloadURL().then((res) => db.collection("posts").doc('1').set({
            image: res,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('')
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        className="messageSender__input"
                        placeholder={`Any Events....`} />
                    <input accept="image/*" className='pic' id="icon-button-file" type="file" onChange={onFileChange}/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <button onClick={handleSubmit} type="submit">hidden button</button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
