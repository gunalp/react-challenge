import React, { Component } from 'react';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';

class Series extends Component {
	render() {
		return (
			<div>
				<HeaderComponent/>
				<main className="content">
					<div className="row">
						<div className="col-md-12">
							<p>Series</p>
						</div>
					</div>
				</main>
				<FooterComponent/>
			
			</div>
		);
	}
}

export default Series;
