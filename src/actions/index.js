import {GetMovies, GetSeries} from '../api';

export const GET_MOVIES_REQUEST_SEND = 'GET_MOVIES_REQUEST_SEND';
export const GET_MOVIES_REQUEST_SUCCESS = 'GET_MOVIES_REQUEST_SUCCESS';
export const GET_MOVIES_REQUEST_FAIL = 'GET_MOVIES_REQUEST_FAIL';

export const GET_SERIES_REQUEST_SEND = 'GET_SERIES_REQUEST_SEND';
export const GET_SERIES_REQUEST_SUCCESS = 'GET_SERIES_REQUEST_SUCCESS';
export const GET_SERIES_REQUEST_FAIL = 'GET_SERIES_REQUEST_FAIL';

export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const GetMoviesFailed = (error) => ({
	type: GET_MOVIES_REQUEST_FAIL,
	payload: { error }
});

export const GetMoviesSuccess = (movies) => ({
	type: GET_MOVIES_REQUEST_SUCCESS,
	payload: { movies }
});

export const GetMoviesSend = () => {
	return (dispatch) => {
		dispatch({
			type: GET_MOVIES_REQUEST_SEND,
		});
		GetMovies()
			.then(function (response) {
				dispatch(GetMoviesSuccess(response.data.result));
			})
			.catch(function (error) {
				dispatch(GetMoviesFailed('Movies Does Not Get'));
			});
	}
};

export const GetSeriesFailed = (message) => ({
	type: GET_SERIES_REQUEST_FAIL,
	message
});

export const GetSeriesSuccess = (message) => ({
	type: GET_SERIES_REQUEST_SUCCESS,
	message
});

export const GetSeriesSend = () => {
	return (dispatch) => {
		dispatch({
			type: GET_SERIES_REQUEST_SEND,
		});
		GetSeries()
			.then(function (response) {
				dispatch(GetSeriesSuccess(response.data.result));
			})
			.catch(function (error) {
				dispatch(GetSeriesFailed('Movies Does Not Get'));
			});
	}
};

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

