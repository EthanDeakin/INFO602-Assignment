<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <!-- Column 1: Image -->
    <div class="w-1/2 p-8">
      <img src="../../assets/img/login.png" alt="Image" class="h-full w-full object-cover" />
    </div>

    <!-- Column 2: Login Form -->
    <div class="w-1/2 p-8">
      <!-- Login Box -->
      <div class="bg-zumba-secondary text-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-2">Log in</h2>

        <!-- Error Message -->
        <p v-if="loginError" class="text-red-500 p-1">{{ loginError }}</p>
        <p v-if="!loginError" class="text-red-500 p-1"><br/></p>
        <form @submit.prevent="loginUser">
          <!-- Username Field -->
          <div class="flex items-center mb-4">
            <i class="fa-solid fa-user mr-2" style="color: #000000;"></i>
            <input
              v-model="username"
              type="text"
              class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
              placeholder="Enter username..."
            />
          </div>

          <!-- Password Field -->
          <div class="flex items-center mb-4">
            <i class="fa-solid fa-lock mr-2" style="color: #000000;"></i>
            <input
              v-model="password"
              type="password"
              class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
              placeholder="********"
            />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-white text-black p-2 rounded shadow-lg hover:bg-gray-300 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>

      <!-- Sign Up Link -->
      <p class="mt-4 text-center">
        Don't have an account? <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import apiService from '../../api/apiService';

export default {
  data() {
    return {
      username: '',
      password: '',
      loginError: '',
    };
  },
  methods: {
    async loginUser() {
      this.loginError = ''; // Clear login error
      try {
        const response = await apiService.login(this.username, this.password);
        localStorage.setItem('userLoggedIn', this.username); // Save the logged-in user
        this.$router.push('/dashboard'); // Redirect to the dashboard
      } catch (error) {
        console.error('Login failed:', error);
        this.loginError = 'Incorrect username or password.';
      }
    },
  },
};
</script>