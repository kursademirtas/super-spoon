import React from 'react';
import Chats from './Chats';
import Header from './Header'
import MessageInput from './MessageInput';
import store from '../store';
import '../style/chatScreen.css'

function ChatScreen({userId}) {
	const state = store.getState();
	const activeUser = state.contact.contacts[userId];
	const messages = state.messages;
	const { typing } = state;

	return (
		<div className="chatWindow">
			<Header user={activeUser}/>
			<Chats className="chat__container" messages = {messages} userId={userId}/>
			<MessageInput typing = {typing} />
		</div>
	);;
};

export default ChatScreen;
