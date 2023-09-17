<template>
    <nav class="bg-black p-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="/" target="home">
            <fa icon="house" class="text-white text-2xl" />
        </a>
        
        <!-- Navigation Links -->
        <div class="flex space-x-4">
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-white font-inter px-4 hover:text-zumba-secondary"
          >
            {{ link.text }}
        </router-link>
        </div>
      </div>
    </nav>
  </template>
  
<script>
  export default {
    data() {
      return {
        links: [
          { text: 'Classes', to: '/classes' }, 
          { text: 'Zumba App', to: '/download' },
          { text: 'About Us', to: '/about' },
          { text: 'Contact Us', to: '/contact' },
          { text: 'Log in/Sign up', to: '/login' },
        ],
      };
    },
  };
</script>
  
<style scoped>
   nav {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  a {
    transition: color 0.3s, border-color 0.3s, background-color 0.3s;
  }
</style>  