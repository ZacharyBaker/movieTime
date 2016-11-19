import React from 'react';
import reactCSS from 'reactcss';
import MovieGetter from './MovieGetter';

export default class Home extends React.Component {

	render () {
		const styles = reactCSS({
			'default': {
				headerContainer: {
					minWidth: '100%',
					height: '200px',
					backgroundColor: '#F67059',
					position: 'relative'
				},
				header: {
					position: 'absolute',
					right: '0',
					left: '0',
					top: '0',
					bottom: '0',
					display: 'flex',
					justifyContent: 'center',
					margin: '0 auto',
				},
				title: {
					fontSize: '20px',
					color: '#F7F8EF',
					alignSelf: 'center',
					fontSize: '40px',
					fontFamily: 'Gill Sans Extrabold, sans-serif',

				}
			}
		})
		return (
			<div>
				<div style={ styles.headerContainer }>
					<div style={ styles.header }>
						<h1 style={ styles.title }>MOVIE TIME BREH</h1>
					</div>

				</div>

				<MovieGetter />
			</div>
		)
	}
}

module.exports = Home;