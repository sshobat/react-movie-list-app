import * as actionTypes from './ActionTypes';

const initialState = {
	bigMovie : '',
    filteredData : [],
    toWatchMovies: [],
    watchedMovies: [],
    genreFilteredMovies: [],
    genres: [],
}

const reducer = (state = initialState, action) => {

	switch(action.type) {

		case actionTypes.FILTER_DATA_UPDATE :
			return {
				...state,
				filteredData: action.filteredData
			};

		case actionTypes.BIGMOVIE_UPDATE :
			return {
				...state,
				bigMovie: action.bigMovie
			};

		case actionTypes.TO_WATCH_UPDATE :
			return {
				...state,
				toWatchMovies: action.toWatchMovies,
				genreFilteredMovies : action.toWatchMovies,
				genres: action.genres,
			};

		case actionTypes.GENRE_DATA_UPDATE :
			return {
				...state,
				genreFilteredMovies : action.genreFilteredData,
			};

		case actionTypes.WATCHED_UPDATE :
			return {
				...state,
				watchedMovies: action.watchedMovies
			};

		default : return state;
	}
}

export { reducer }
