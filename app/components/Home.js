import React from 'react';
import reactCSS from 'reactcss';
import MovieGetter from './MovieGetter';

export default class Home extends React.Component {

	render () {
		const styles = reactCSS({
			'default': {
				title: {
					fontSize: '20px',
					color: 'blue'
				}
			}
		})
		return (
			<div>
				<h1 style={ styles.title }>Movie Time Breh</h1>
				<MovieGetter />
			</div>
		)
	}
}

module.exports = Home;