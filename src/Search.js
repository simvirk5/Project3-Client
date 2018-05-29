import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';


class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			zipcode: '',
			results: [
			{
				name: '',
				email: '',
				zipcode: ''
			}
			],
            user: this.props.user
		};
	}

handleZipChange = (e) => {
		this.setState({ zipcode: e.target.value });
	}

handleSearch = (e) => {
	e.preventDefault();
	console.log("Zip was submitted!", this.state);
	axios.post(SERVER_URL + '/getusersnearby', {zipcode: this.state.zipcode})
	.then(res => {
		const results = res.data;
		console.log('this is res data: ', res.data)
		this.setState({
			results : res.data
		})

		console.log('results from axios call', res.data);
	})
	.catch(err => {
		console.log('ERROR', err);
	});
}
saveContacts = (e) => {
    e.preventDefault();
    console.log("e.target here", e.target);
    console.log("state here", this.state);
    axios.post(SERVER_URL + `/profile/${this.state.user.id}`, {Mentor: e.target.getAttribute('data-mentor'), 
        Contact: e.target.getAttribute('data-email'), Location: e.target.getAttribute('data-location')})

}

	render() {
		const results = this.state.results.map(person => {
			if(person && person.name){
				return (
					<div key={person.id}>
						<p>Mentor: {person.name}</p>
						<p>Contact: {person.email}</p>
						<p>Location: {person.zipcode}</p>
						<div>
							<input type = "submit" value = "Connect" className = "button" />
						</div>
						<hr />
					</div>
				);
			}
		});

		return (
			<div>
				<form onSubmit = {this.handleSearch}>
					<div>
						<input name = "Zipcode" placeholder = "What is your Zipcode?" value = {this.state.zipcode} onChange = {this.handleZipChange} />
					</div>
					<input type = "submit" value = "Search!" className = "button" />
				</form>
				<hr />
				<div>
					{results}
				</div>
			</div>
		);

    }
}

export default Search;
