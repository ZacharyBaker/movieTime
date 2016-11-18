import React from 'react';
import axios from 'axios';
let d = new Date();

export default class MovieGetter extends React.Component {
	


	constructor(props) {
	    super(props);

	    this.updateState = this.updateState.bind(this)


	    this.state = {
	    	apikey: 'g9psutbeabz9w3dwey8c76kh', //hide this
	    	showtimesUrl: 'http://data.tmsapi.com/v1.1/movies/showings',
	    	zipcode: '84121',
	    	d: new Date(),
	    	tomorrow: d.getFullYear() + '-' + (d.getMonth()+1) + '-' + (d.getDate()+1),
	    	response: 0
	    };
  	}

  	updateState (response) {
  		console.log('STATE IS UPDATINGGGGGGG')
  		this.setState({ response })
  	}

	componentDidMount () {
		console.log('component Did MOUNT DOG');
		axios.get(this.state.showtimesUrl, {
		    params: {
		      startDate: this.state.tomorrow,
		      zip: this.state.zipcode,
		      jsonp: 'dataHandler',
		      api_key: this.state.apikey
		    },
		    dataType: 'jsonp'
  		})
		  .then(response => {
		    console.log('THIS IS THE RESPONSE :)', response);
		    this.updateState(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}


	render () {
		console.log('THS IS THE STATE BEFORE RENDER', this.state);
		return (
			<div>
				<div>ahhh suuuu duuuu</div>
				{this.state.response ? <p>{this.state.response.request.response}</p> : 'breh you got no response'}
			</div>
		)
	}
}

module.exports = MovieGetter;