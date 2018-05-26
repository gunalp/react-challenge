import React, { Component } from 'react';
import HeaderComponent from './static/HeaderComponent';
import SubHeaderComponent from './static/SubHeaderComponent';
import FooterComponent from './static/FooterComponent';
import '../style/App.css';
import {Link} from "react-router-dom";

class App extends Component {

	render() {

		return (

			<div>
				<HeaderComponent/>
				<SubHeaderComponent title="Titles"/>
				<main>
					<div className="container">
						<div className="row">
							<div className="col-md-2-5">
								<div className="movies">
									<Link to="/series">
										<img src="/assets/movie.png"  alt=""/>
										<div className="title">
											SERIES
										</div>
										<div className="desc">Popular Series</div>
									</Link>
								</div>
							</div>
							<div className="col-md-2-5">
								<div className="movies">
									<Link to="/movies">
										<img src="/assets/movie.png"  alt=""/>
										<div className="title">
											MOVIES
										</div>
										<div className="desc">Popular Movies</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>
				<FooterComponent/>

			</div>

		);
	}
}

export default App;
