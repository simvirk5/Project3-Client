import React, { Component } from 'react';
import Search from './Search.js';

class SearchMentor extends Component {


	componentDidMount() {
		fetch('/')
	}



	render() {
		return (
		<div className = "searchmentor">
		<h1 className = "searchHeader">Connect with a Mentor in your area!</h1>
		<Search />
		</div>
		)
	}

}



export default SearchMentor;