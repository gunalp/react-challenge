import {
	GET_SERIES_REQUEST_SEND,
	GET_SERIES_REQUEST_FAIL,
	GET_SERIES_REQUEST_SUCCESS
} from '../actions';

const initialState = {
	title: '',
	description: '',
	images: '',
	releaseYear: '',
	message: null,
	isLoading: false,
};

const Series = (state = initialState,action) => {
	switch (action.type) {
		case GET_SERIES_REQUEST_SEND:
			return { ...state, isLoading: true };
		case GET_SERIES_REQUEST_FAIL:
			return { ...state, message: action.message, isLoading: false };
		case GET_SERIES_REQUEST_SUCCESS:
			return { ...state,  message: null, isLoading: false, };
		default:
			return state;
	}
};

export default Series;
