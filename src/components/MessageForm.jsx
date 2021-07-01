import { useState } from "react";
import {sendMessage, isTyping} from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

import { BsCardImage } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';


const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if(text.length > 0) sendMessage(creds, chatId, {text}); 
        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, {files: event.target.files, text:''});
    }

    return (
        <form action="" className="message-form" onSubmit={handleSubmit}>
            <input className="message-input" placeholder='Send a message' value={value} onChange={handleChange} onSubmit={handleSubmit} />
            <label htmlFor='upload-button'>
                <span className="image-button">
                    <BsCardImage className='picture-icon' />
                </span>
            </label>
            <input type='file' multiple={false} id='upload-button' style={{display:'none'}} onChange={handleUpload}></input>
            <a type='submit' className='send-button'>
                <AiOutlineSend className='send-icon'/>
            </a>
        </form>
    )

}

export default MessageForm;