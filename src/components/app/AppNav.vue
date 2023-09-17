<template>
    <nav class="bg-zumba-primary p-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo (Left) -->
        <div class="flex items-center">
          <img
            v-if="showLogo"
            src="https://1000logos.net/wp-content/uploads/2021/03/Zumba-Fitness-logo-500x300.png"
            alt="Zumba Tech Logo"
            class="h-16 w-auto absolute"
          />
        </div>
  
        <!-- Navigation Links (Above lg) -->
        <div class="hidden lg:flex space-x-4 text-black font-inter text-sm">
          <router-link
            to="/app/instructor/dashboard"
            class="hover:text-zumba-secondary px-2 py-1 transition duration-300"
          >
            Dashboard
          </router-link>
          <router-link
            to="/app/instructor/manage-members"
            class="hover:text-zumba-secondary px-2 py-1 transition duration-300"
          >
            Member Management
          </router-link>
          <router-link
            to="/app/instructor/manage-class"
            class="hover:text-zumba-secondary px-2 py-1 transition duration-300"
          >
            Class Management
          </router-link>
          <router-link
            to="/app/instructor/manage-attendance"
            class="hover:text-zumba-secondary px-2 py-1 transition duration-300"
          >
            Attendance Management
          </router-link>
          <router-link
            to="/app/instructor/record-attendance"
            class="hover:text-zumba-secondary px-2 py-1 transition duration-300"
          >
            Attendance Records
          </router-link>
        </div>
  
        <!-- Mobile Dropdown Button (Hamburger Menu) -->
        <div class="lg:hidden relative">
          <button
            @click="toggleDropdown"
            class="text-black"
          >
            <i class="fa-solid fa-bars text-2xl"></i>
          </button>
  
          <!-- Dropdown Menu (Mobile) -->
          <div
            v-if="showDropdown"
            class="absolute top-12 right-0 bg-zumba-primary w-48 space-y-2 text-sm shadow-lg"
          >
            <router-link
              to="/app/instructor/dashboard"
              class="block hover:bg-zumba-primary-hover px-2 py-1 transition duration-300"
            >
              Dashboard
            </router-link>
            <router-link
              to="/app/instructor/manage-members"
              class="block hover:bg-zumba-primary-hover px-2 py-1 transition duration-300"
            >
              Member Management
            </router-link>
            <router-link
              to="/app/instructor/manage-class"
              class="block hover:bg-zumba-primary-hover px-2 py-1 transition duration-300"
            >
              Class Management
            </router-link>
            <router-link
              to="/app/instructor/manage-attendance"
              class="block hover:bg-zumba-primary-hover px-2 py-1 transition duration-300"
            >
              Attendance Management
            </router-link>
            <router-link
              to="/app/instructor/record-attendance"
              class="block hover:bg-zumba-primary-hover px-2 py-1 transition duration-300"
            >
              Attendance Records
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDropdown: false,
        showLogo: true,
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Define a hover class for the primary background color */
  .bg-zumba-primary-hover {
    background-color: #595959; /* Replace with the desired hover color */
  }
  </style>
