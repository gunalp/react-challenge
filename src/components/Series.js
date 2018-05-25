import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './static/HeaderComponent';
import FooterComponent from './static/FooterComponent';
import { fetchSeries} from '../actions';
import _ from 'lodash';

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

		const chunkedSeries = _.chunk(series, 6)

		return (
			<div>
				<HeaderComponent title="Series"/>
				<main className="content" style={{ paddingTop: 20, paddingBottom: 20, paddingRight: 80, paddingLeft: 80 }}>
					<div className="row">
						<div className="col-md-12">
							<span>
								{
									chunkedSeries.map((series, i) => {
										return (
											<div className="row" key={i}>
												{
													series.map((serie, j) => {
														return (
															<div className="col-md-2" key={j} style={{marginBottom :10}}>
																<img src={serie.images.posterArt.url} width="150px" height="150px" style={{marginBottom :5}} alt=""/>
																<p style={{fontSize:12,marginBottom :5}}>{serie.title}</p>
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
	series: state.Series.items,
	loading: state.Series.loading,
	error: state.Series.error,
});


export default connect(mapStateToProps)(Series);
