import React, { Component } from 'react';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';

class Movies extends Component {
	render() {
		return (
			<div>
				<HeaderComponent/>
				<main className="content">
					<div className="row">
						<div className="col-md-12">
							<p>Movies</p>
						</div>
					</div>
				</main>
				<FooterComponent/>
			
			</div>
		);
	}
}

export default Movies;
