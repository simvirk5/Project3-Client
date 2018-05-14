import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Nav extends Component {
	handleLogout = (e) => {
		console.log('Logging out...');
		e.preventDefault();
		localStorage.removeItem('mernToken');
		this.props.updateUser();
	}
	render() {
		let links = '';
		if(this.props.user) {
			links = (
				<span className='right'>
					<a onClick = {this.handleLogout}>Logout</a>
					<Link to = "/Profile"> Profile</Link>
				</span>

			);
		}
		else {
			links = (
				<span className='right'>
					<Link to = "/login">Log In</Link>
				</span>

		);
	}
		return (
			<div className = "navbar">
				<nav className = "nav">
				<span className='right'>
					<Link to = "/" >Home</Link>
					</span>
					{links}
				</nav>
				
			</div>
	
	
		);
	}
}

export default Nav;