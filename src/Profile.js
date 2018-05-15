import React, { Component } from 'react';
import StudentForm from './StudentForm';
import MentorForm from './MentorForm';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from './constants';
import { Link } from 'react-router-dom';



class Profile extends Component {

	constructor(props){
		super(props);
		this.state = {
			field: [],
			experience: ''
		}
	};

componentDidMount () {
if (this.props.user) {
  if (this.props.user.mentor) {
  axios.get(SERVER_URL + '/mentor/' + this.props.user._id)
			.then(results => {
				this.setState ({
					field: results.data.field,
					experience: results.data.experience
				})
				console.log(results)
			}).catch(err => {
				console.log('ERROR', err);
			});
		}
  

  else {
	axios.get(SERVER_URL + '/student/' + this.props.user.id)
			.then(results => {
				this.setState ({
					field: results.data.field,
					experience: results.data.experience
				})
			}).catch(err => {
				console.log('ERROR', err);
			});

		}
	}
}
//passing formsubmit as props in mentorform

	render() {
		if(this.props.user && this.props.user.mentor){
			return (
				<div>
					
					<MentorForm user={this.props.user}/>
					<hr />
				</div>
			);
		} else if (this.props.user && !this.props.user.mentor) {
			return (
				<div>
					<h1>Hello again, {this.props.user.name}!</h1>
					<h3>Your email is {this.props.user.email}</h3>
					<StudentForm user={this.props.user}/>
					<Link to = "/search"> Find a Mentor</Link>
				</div>
			)
		} else {
			 return(
           		 <Redirect to = "/" />
           		 );
		}		
	}

}



export default Profile;