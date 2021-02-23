import React from 'react';
import '../style/header.css'
function Header({user}) {
	const {name, status} = user;
	console.log(user)
	return (
		<header className="header">
			<div>
				<h1 className="header__name" >{name}</h1>
				<p className="header__status">{status}</p>
			</div>
			<img className="header__img" src={`https://i.pravatar.cc/150?img=${3}`} alt="avatar"/>
		</header>
	);
};

export default Header;
