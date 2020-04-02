
export const state = () => ({
	movies: [],
	movie: {}
});

export const mutations = {
	
	SETMOVIES(state, movies) {
    state.movies = movies;
	},
	SETMOVIE(state, movie) {
		state.movie = movie;
	}
  
};

export const actions = {
  
	async setMovies ({commit}, {qs}) {
		await this.$axios.$get(`/list_movies.json?${qs}`)
			.then(response =>  {
				commit("SETMOVIES", response);
			})
			.catch((e) => {
			})
			.finally(function () {
			});
	},

	async setMovie ({commit}, {qs}) {
		await this.$axios.$get(`/movie_details.json?movie_id=${qs}`)
		.then(response =>  {
			commit("SETMOVIE", response);
		})
		.catch((e) => {
		})
		.finally(function () {
		});
	}


	
	};

	
	



