<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <!-- Column 1: Sign up Form -->
    <div class="custom-width p-8">
      <!-- Login Box -->
      <div class="bg-zumba-secondary text-white p-6 rounded-lg shadow-lg">
        <h2 class="text-4xl font-semibold mb-4">Sign up</h2>
      
        <!-- Username Field -->
        <div class="flex items-center mb-4">
          <input
            type="text"
            class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
            placeholder="Username"
          />
        </div>

        <!-- First name Field -->
        <div class="flex items-center mb-4">
          <input
            type="text"
            class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
            placeholder="First Name"
          />
        </div>

        <!-- Last name Field -->
        <div class="flex items-center mb-4">
          <input
            type="text"
            class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
            placeholder="Last Name"
          />
        </div>
        
        <!-- Password Field -->
        <div class="flex items-center mb-4">
          <input
            type="password"
            class="w-full p-2 text-black rounded bg-gray-200 focus:outline-none focus:ring focus:ring-zumba-primary"
            placeholder="Password"
          />
        </div>

        <!-- Login Button -->
        <button
          class="w-full bg-white text-black p-2 rounded shadow-lg hover:bg-gray-300 transition duration-300">
          Create an Account
        </button>
      </div>

      <!-- Sign Up Link -->
      <p class="mt-4 text-center">
        Already have an account? <router-link to="/login">Log in!</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.custom-width {
  width: 50%;
}
</style>