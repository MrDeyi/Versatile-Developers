import React, { useContext } from "react";
import Cam from "../../../../img/cam.png";
import Add from "../../../../img/add.png";
import More from "../../../../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../../../context/ChatContext";
import "./Chat.css";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img className="chatimg" src={Cam} alt="" />
          <img className="chatimg" src={Add} alt="" />
          <img className="chatimg" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
