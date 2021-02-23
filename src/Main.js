import React from 'react';
import './style/main.css';
import ChatScreen from './components/ChatScreen';
import EmptyScreen from './components/EmptyScreen';


const Main = ({ user, activeUserId} ) => {
	const renderMainContent = () => {
		if(!activeUserId) {
			return <EmptyScreen user={user} activeUserId={activeUserId} />
		}else {
			return <ChatScreen userId= {activeUserId } />
		}
	};

	return <main className="main">{renderMainContent()}</main>
}

export default Main;
