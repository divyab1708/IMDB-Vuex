<template>
  <div id="app">
    <TopNav/>
	 <div class="container-fluid">
		 <router-view/>
	</div>
  </div>
</template>
<script lang="js">
  import TopNav from '@/components/HeaderTop.vue'
  import styles from './assets/css/styles.scss'

  export default  {
    name: 'header',
    props: [],
    mounted() {

    },
	  components:{
		  TopNav
	  },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
