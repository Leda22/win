import "./post.css";
import React from 'react';
import { Avatar } from "@material-ui/core";
import firebase from 'firebase';



export default function Post({logo,image,clubname,timestamp,message}) {
  return (
    <div className="post">
        <div className="post__top">
          <Avatar src={logo} className="post__avatar" />
          <div className="post__topInfo">
            <h3> {clubname} </h3>
            <p>{timestamp}</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      </div>
  );
}
