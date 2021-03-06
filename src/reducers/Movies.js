import {
	FETCH_MOVIES_BEGIN,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE
} from '../actions';

const initialState = {
	items : [],
	error: null,
	loading: false,


	headerTitle:""

};

const Movies = (state = initialState,action) => {

	switch (action.type) {
		case FETCH_MOVIES_BEGIN:
			return { ...state, loading: true ,error:null };
		case FETCH_MOVIES_FAILURE:
			return { ...state, loading: false, error: action.payload.error ,items: [] };
		case FETCH_MOVIES_SUCCESS:
			return { ...state, loading: false, items: action.payload.movies  };
		default:
			return state;
	}
};

export default Movies;
