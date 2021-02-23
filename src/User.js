import React from 'react'
import { setActiveUserId } from './actions';
import './style/user.css';
import store from './store'

function User({ user, photoId }) {
	const { name, status, user_id} = user;

	function handleUserClick() {
		store.dispatch(setActiveUserId(user_id))
	}

	return (
		<div className="user" onClick={handleUserClick.bind(null, user)}>
			<img src={`https://i.pravatar.cc/150?img=${photoId}`}alt={name} className="user_pic"  />
			<div className="user__details">
				<p className="user__details-name">{name}</p>
				<p className="user__details-status"> {status} </p>
			</div>
		</div>
	)
}

export default User;
