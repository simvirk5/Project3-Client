import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import { SERVER_URL } from './constants';


class StudentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: '',
			description: ''
		};
	}
	
	experienceChange = (e) => {
		this.setState({ experience: e.target.value });
	}
	
	descriptionChange = (e) => {
		this.setState({ description: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("Student form created!");
		axios.post(SERVER_URL + '/student', {
			userId: this.props.user_id, 
			experience: this.state.experience,
			description: this.state.description
		})
		.catch(err => {
			console.log('ERROR', err);
		});
	}

	render() {
		return (
			<div>
				
			</div>
	
	
		);
	}
}

export default StudentForm;