import React from 'react';
import reactCSS from 'reactcss';


export default class Main extends React.Component {
	render () {
		const styles = reactCSS({
			'default': {
				mainContainer: {
					padding: '0',
					margin: '0',
					width: '100%'

				}
			}
		})
		return (
			<div style={ styles.mainContainer }>
				{this.props.children}
			</div>
		)
	}
}

module.exports = Main;