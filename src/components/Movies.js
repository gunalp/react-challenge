import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';
import {fetchMovies} from '../actions';
import _ from 'lodash';
import SubHeaderComponent from "./static/SubHeaderComponent";

class Movies extends Component {

	componentDidMount() {
		this.props.dispatch(fetchMovies());
	};

	render() {

		const {error, loading, movies} = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		const chunkedMovies = _.chunk(movies, 6)

		return (

			<div>
				<HeaderComponent/>
				<SubHeaderComponent title="Movies"/>
				<main className="content" style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}>
					<div className="row">
						<div className="col-md-12">
							<span>
								{
									chunkedMovies.map((movies, i) => {
										return (
											<div className="row" key={i}>
												{
													movies.map((movie, j) => {
														return (
															<div className="col-md-2" key={j} style={{marginBottom :10}}>
																<img src={movie.images.posterArt.url} width="150px" height="150px" style={{marginBottom :5}} alt=""/>
																<p style={{fontSize:12,marginBottom :5}}>{movie.title}</p>
															</div>
														)
													})
												}
											</div>
										)
									})
								}
              </span>
						</div>
					</div>
				</main>
				<FooterComponent/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	movies: state.Movies.items,
	loading: state.Movies.loading,
	error: state.Movies.error
});


export default connect(mapStateToProps)(Movies);