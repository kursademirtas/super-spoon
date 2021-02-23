import React from 'react';
import './style/sideBar.css';
import User from './User';
import _ from 'lodash'

function SideBar({ contacts }) {
	
	return (
	
		<aside className="sidebar">
			{_.values(contacts[0]).map((contact, i) => <User user ={contact} key={contact.user_id} photoId={i}/>)}
		</aside>
	)
}

export default SideBar;
