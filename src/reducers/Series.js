import {
	FETCH_SERIES_BEGIN,
	FETCH_SERIES_SUCCESS,
	FETCH_SERIES_FAILURE
} from '../actions';

const initialState = {
	items : [],
	error: null,
	loading: false,
};

const Series = (state = initialState,action) => {
	switch (action.type) {
		case FETCH_SERIES_BEGIN:
			return { ...state, loading: true ,error:null };
		case FETCH_SERIES_FAILURE:
			return { ...state, loading: false, error: action.payload.error ,items: [] };
		case FETCH_SERIES_SUCCESS:
			return { ...state, loading: false, items: action.payload.series  };
		default:
			return state;
	}
};

export default Series;
