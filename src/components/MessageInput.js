import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';
import '../style/messageInput.css';

function MessageInput( {value} ) {

	const state = store.getState();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const {typing, activeUserId} = state;
		store.dispatch(sendMessage(typing, activeUserId));
		console.log(e.target.reset())
	}

	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value));
	}
	return (
		<form className="message__form" onSubmit={handleSubmit}>
			<input
				className="message__input"
				onChange={handleChange}
				value={value}
				placeholder="write a message"
			/>
		</form>
	)
}

export default MessageInput;
