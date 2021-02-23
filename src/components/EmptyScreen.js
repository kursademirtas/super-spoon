import React from 'react';
import '../style/emptyScreen.css'

function EmptyScreen( { user } ) {
	const firstName = user.name.split(" ")[0];
	
	return (
		<div className="emptyScreen">
			<h2 className="welcome">Welcome {firstName}</h2>
			<img className="welcome__avatar"  src={"https://randomuser.me/api/portraits/women/27.jpg"} alt={user.name}/>
			<p className="status">Status: {user.status}</p>
			<button>Start a Conversation</button>
			<p>Search for someone start chatting with or go to contacts to see who is avaliable</p>
		</div>
	)
}

export default EmptyScreen;
