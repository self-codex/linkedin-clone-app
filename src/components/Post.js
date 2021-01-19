import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import SendIcon from "@material-ui/icons/Send";
import "./post.css";
import { Share } from "@material-ui/icons";

function Post({ name, description, message }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p className="post__desc">{description}</p>
        </div>
      </div>
      <p className="post__body">{message}</p>
      <div className="post__button">
        <InputOption color="gray" Icon={ThumbUpAltIcon} title="Like" />
        <InputOption color="gray" Icon={CommentIcon} title="Comment" />
        <InputOption color="gray" Icon={Share} title="Share" />
        <InputOption color="gray" Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
}

export default Post;
