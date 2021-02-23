
import React from 'react'
import _ from 'lodash';
import '../style/chats.css'
import {useRef, useEffect} from "react";



function Chats({messages, userId}) {
	const messagesArray = (_.values(messages[userId]));
	var classNames = require('classnames')
	const chatsRef = useRef();

	const scrollToBottom = () => (chatsRef.current.scrollTop = chatsRef.current.scrollHeight);
	
	
	useEffect(() => {
		scrollToBottom();
	
	}, [messages])

	return (
		messagesArray.map(message => {
			return (
				<div ref={chatsRef} className="messages__container">
					<p className={classNames("messages", {"user-msg" : message.is_user_msg})  } 
					>{message.text}
				</p>
				</div>
				
			)
		})
	);
}

export default Chats
