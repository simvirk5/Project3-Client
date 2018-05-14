import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';

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
		axios.post('/student', {
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
				<form onSubmit = {this.handleSubmit}>
					<div>
						<input name = "Experience" placeholder = "Write your relevant experience" value = {this.state.experience} onChange = {this.experienceChange} />
					</div>
					<div>
						<input name = "Description" value = {this.state.description} onChange = {this.descriptionChange} />
					</div>
					<input type = "submit" value = "Submit" className = "button" />
				</form>
			</div>
	
	
		);
	}
}

export default StudentForm;