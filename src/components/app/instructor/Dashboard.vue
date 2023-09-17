<template>
    <div class="bg-gray-100 p-4">
      <!-- Dashboard Header -->
      <div class="mb-8">
        <h1 class="text-2xl font-semibold">Instructor Dashboard</h1>
        <p class="text-gray-500">Welcome, {{ instructorName }}</p>
      </div>
  
      <!-- Quick Links -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white rounded p-4 shadow-md">
          <h2 class="text-lg font-semibold">Manage Classes</h2>
          <p class="text-gray-500">View and manage your classes</p>
          <router-link to="/app/instructor/manage-class">
            <button class="mt-4 bg-zumba-primary text-white rounded p-2 w-full hover:bg-zumba-secondary active:bg-zumba-secondary">
              Go to Classes
            </button>
          </router-link>
        </div>
  
        <div class="bg-white rounded p-4 shadow-md">
          <h2 class="text-lg font-semibold">Manage Attendance</h2>
          <p class="text-gray-500">Record and track attendance</p>
          <router-link to="/app/instructor/manage-attendance">
            <button class="mt-4 bg-zumba-primary text-white rounded p-2 w-full hover:bg-zumba-secondary active:bg-zumba-secondary">
              Go to Attendance
            </button>
          </router-link>
        </div>
      </div>
  
      <!-- Edit Profile Button -->
      <div class="mt-8">
        <router-link to="/app/instructor/edit-profile">
          <button class="bg-zumba-secondary text-white rounded p-2">
            Edit Profile
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        instructorName: "Zihan", // This will be the name of the logged-in user
      };
    },
  };
  </script>