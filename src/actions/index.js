import {GetMovies, GetSeries} from '../api';

export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_SERIES_BEGIN   = 'FETCH_SERIES_BEGIN';
export const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
export const FETCH_SERIES_FAILURE = 'FETCH_SERIES_FAILURE';

export const fetchMoviesBegin = () => ({
	type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: { movies }
});

export const fetchMoviesError = error => ({
	type: FETCH_MOVIES_FAILURE,
	payload: { error }
});

export const fetchSeriesBegin = () => ({
	type: FETCH_SERIES_BEGIN
});

export const fetchSeriesSuccess = series => ({
	type: FETCH_SERIES_SUCCESS,
	payload: { series }
});

export const fetchSeriesError = error => ({
	type: FETCH_SERIES_FAILURE,
	payload: { error }
});

export function fetchMovies() {
	
	return dispatch => {
		dispatch(fetchMoviesBegin());
		GetMovies()
			.then(function (response) {
				dispatch(fetchMoviesSuccess(response.data.result));
			})
			.catch(function (error) {
				dispatch(fetchMoviesError(error));
			});
	}
	
}

export function fetchSeries() {

	return dispatch => {
		dispatch(fetchSeriesBegin());
		GetSeries()
			.then(function (response) {
				dispatch(fetchSeriesSuccess(response.data.result));
			})
			.catch(function (error) {
				dispatch(fetchSeriesError(error));
			});
	}

}