import {
	GET_MOVIES_REQUEST_SEND,
	GET_MOVIES_REQUEST_FAIL,
	GET_MOVIES_REQUEST_SUCCESS
} from '../actions';

const initialState = {
	title: '',
	description: '',
	images: '',
	releaseYear: '',
	message: null,
	isLoading: false,
};

const Movies = (state = initialState,action) => {
	switch (action.type) {
		case GET_MOVIES_REQUEST_SEND:
			return { ...state, isLoading: true };
		case GET_MOVIES_REQUEST_FAIL:
			return { ...state, message: action.message, isLoading: false };
		case GET_MOVIES_REQUEST_SUCCESS:
			return { ...state,  message: null, isLoading: false, };
		default:
			return state;
	}
};

export default Movies;
