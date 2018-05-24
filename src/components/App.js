import React, { Component } from 'react';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';
import Movies from './Movies'
import Series from './Series'
import '../style/App.css';
import {Link} from "react-router-dom";

class App extends Component {

	constructor(props){
		super(props)
	}

	render() {

		return (

			<div>
				<HeaderComponent/>
				<main className="content">
					<div className="row">
						<div className="col-md-12">
							<Link to="/series"><img src="/assets/series.png" style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}/></Link>
							<Link to="/movies"><img src="/assets/movies.png" style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}/></Link>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">

							<span style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}>Popular Series</span>
							<span style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 110 }}>Popular Movies</span>

						</div>
					</div>
				</main>
				<FooterComponent/>

			</div>

		);
	}
}

export default App;
