<template>
  <div>
    <!-- Your navigation component goes here (e.g., Nav.vue) -->
    <Nav />
  </div>
  <div>
    <router-view />
  </div>
  <div>
    <Footer />
  </div>  
  
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue'; 

export default {
  components: {
    Nav,
    Footer,
  },
}
</script>
