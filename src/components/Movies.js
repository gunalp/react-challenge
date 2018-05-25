import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';
import { fetchMovies } from '../actions';

class Movies extends Component {
	
	componentDidMount() {
		this.props.dispatch(fetchMovies());
	};
	
	render() {
		
		const { error, loading, movies } = this.props;
		
		if (error){return <div>Error! {error.message}</div>;}
		
		if (loading) {
			return <div>Loading...</div>;
		}
		
		return (
			<div>
				<HeaderComponent/>
				<main className="content">
					<div className="row">
						<div className="col-md-12">
							<p>Movies</p>
							<span>
								{movies}
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
	movies: state.items,
	loading: state.loading,
	error: state.error
});


export default connect(mapStateToProps)(Movies);