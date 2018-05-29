import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'react-materialize'

class Home extends Component {
	render() {
		return (
			<div className ="home">
				<header className="App-header">
          			<h1 className="App-title">Welcome to <span className="mentor">Mentor</span><span className="space">Space</span></h1>
        		</header>
        		<p className="home-intro">Are you a student and looking to find a mentor in an area of your interest? 
        			Sign up and find what mentors are available in your zipcode.<br></br>
        			<div className="homeintro2">
	        			If you're a professional looking to inpsire other people in your area of field, sign up as a mentor and connect with students who are 
	        			willing to learn!
        			</div>
        		</p>
			</div>
	
	
		);
	}
}

export default Home;


