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

		const chunkedMovies = _.chunk(movies, 5)

		return (
			<div>
				<HeaderComponent/>
				<SubHeaderComponent title="Movies"/>
				<main>
					<div className="container">
						{
							chunkedMovies.map((movies, i) => {
								return (
									<div className="row" key={i}>
										{
											movies.map((movie, j) => {
												return (
													<div className="col-md-2-5" key={j}>
														<img src={movie.images.posterArt.url} width="100%" alt=""/>
														<div className="desc">{movie.title}</div>
													</div>
												)
											})
										}
									</div>
								)
							})
						}
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