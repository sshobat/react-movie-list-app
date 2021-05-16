export const baseURL = 'https://movies-22220.firebaseio.com/movies';
export const watchedURL = 'https://movies-22220.firebaseio.com/watched';
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

export const More = (databaseID) => {
	return fetch(`${baseURL}/${databaseID}.json`)
	  		.then( response => response.json())
}

export const MoreWatched = (databaseID) => {
	return fetch(`${watchedURL}/${databaseID}.json`)
	  		.then( response => response.json())
}