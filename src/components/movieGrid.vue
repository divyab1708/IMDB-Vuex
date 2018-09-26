<template lang="html">

  <section class="movie-grid">
 	<div class="row">
		<div class="col-lg-2 col-md-2 col-xs-6" v-for="movie in movieList1">
			<img class="moviePoster" :src="`img/movie/`+movie.img">
			<div class="curtain"></div>
			<div class="movieDetails">
				<div class="details">
					<h3>{{movie.name}}</h3>
				</div>
			</div>
		</div>
		<div class="col-lg-2 col-md-2 col-xs-6" v-for="movie in movieListReverse ">
			<img class="moviePoster" :src="`img/movie/`+movie.img">
			<div class="curtain"></div>
			<div class="movieDetails">
				<div class="details">
					<h3>{{movie.name}}</h3>
				</div>
			</div>
		</div>
	</div>
  </section>

</template>

<script lang="js">
  import axios from 'axios';
  import { mapState } from 'vuex'

  export default  {
    name: 'movie-grid',
    props: [],
    mounted() {

    },
    data() {
		this.fetchData();
      return {
		  movieList: []
      }
    },
    methods: {
		fetchData(){
			console.log(mapState,"----")
			var _this=this;
			axios.get('http://localhost:3000/movieList')
			  .then(function (response) {
				// handle success
				_this.movieList=response.data;
				
				_this.$store.commit('setMovieList',_this.movieList)
				
			  })
			  .catch(function (error) {
				// handle error
				console.log(error);
			  })
			  .then(function () {
				// always executed
			  });
		}
    },
    computed: {
		movieListReverse(){
			var movie=this.movieList1.slice();
			return movie.reverse();
			
		},
		...mapState([
		'movieList1'
		])
	}

}
</script>

<style scoped lang="scss">
  .movie-grid {

  }
</style>
