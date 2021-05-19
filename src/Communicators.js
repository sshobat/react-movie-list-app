export const baseURL = 'https://movie-app-7527e-default-rtdb.firebaseio.com/movies';
export const watchedURL = 'https://movie-app-7527e-default-rtdb.firebaseio.com/watched';
export const omdbURL = 'https://www.omdbapi.com/?type=movie&apikey=e47d96d0';

export const Fetch = () => {
	return fetch(`${baseURL}.json`)
	  		.then( response => response.json())
}

export const FetchWatched = () => {
	return fetch(`${watchedURL}.json`)
	  		.then( response => response.json())
}

export const Put = (element) => {
	return fetch(`${baseURL}/${element.id}.json`, {
			    method: 'PUT',
			    body: JSON.stringify(element)
		    })
}

export const Post = (element) => {
	return fetch(`${baseURL}.json`, {
			    method: 'POST',
			    body: JSON.stringify(element)
		    })
}

export const PostWatched = (element) => {
	return fetch(`${watchedURL}.json`, {
			    method: 'POST',
			    body: JSON.stringify(element)
		    })
}

export const Delete = (elementID) => {
	return fetch(`${baseURL}/${elementID}.json`, {
			    method: 'DELETE',
		    })
}

export const DeleteWatched = (elementID) => {
	return fetch(`${watchedURL}/${elementID}.json`, {
			method: 'DELETE',
		    })
}

export const bigMovie = (databaseID) => {
	return fetch(`${baseURL}/${databaseID}.json`)
	  		.then( response => response.json())
}

export const bigMovieWatched = (databaseID) => {
	return fetch(`${watchedURL}/${databaseID}.json`)
	  		.then( response => response.json())
}