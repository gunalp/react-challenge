import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';
import { fetchSeries} from '../actions';
import _ from 'lodash';
import SubHeaderComponent from "./static/SubHeaderComponent";

class Series extends Component {

	componentDidMount() {
		this.props.dispatch(fetchSeries());
	};


	render() {

		const {error, loading, series} = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		const chunkedSeries = _.chunk(series, 5)

		return (
			<div>
				<HeaderComponent/>
				<SubHeaderComponent title="Movies"/>
				<main>
					<div className="container">
						{
							chunkedSeries.map((series, i) => {
								return (
									<div className="row" key={i}>
										{
											series.map((serie, j) => {
												return (
													<div className="col-md-2-5" key={j}>
														<img src={serie.images.posterArt.url} width="100%" alt=""/>
														<div className="desc">{serie.title}</div>
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
	series: state.Series.items,
	loading: state.Series.loading,
	error: state.Series.error,
});


export default connect(mapStateToProps)(Series);
