import React from 'react'
import Main from './Main';
import SideBar from './SideBar';
import './style/app.css';
import store from "./store"
import _ from 'lodash';



function App() {

	const { contact,user, activeUserId } = store.getState();
	
	return (
		<div className="app">
			<SideBar contacts={_.values(contact)}/>
			<Main user={user} activeUserId={activeUserId} />
		</div>
	);
}

export default App;