<template>
    <div class="bg-gray-100 p-4">
    </div>
      <!-- Search Bar -->
      <div class="bg-zumba-primary rounded p-2 flex justify-between items-center mb-4">
        <div class="space-x-2 flex items-center">
          <div class="bg-white rounded-full p-1">
            <input
              type="text"
              class="rounded-full text-sm p-1 bg-white focus:outline-none"
              placeholder="Year"
            />
          </div>
          <div class="bg-white rounded-full p-1">
            <input
              type="text"
              class="rounded-full text-sm p-1 bg-white focus:outline-none"
              placeholder="Month"
            />
          </div>
          <div class="bg-white rounded-full p-1">
            <input
              type="text"
              class="rounded-full text-sm p-1 bg-white focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div class="bg-white rounded-full p-1">
            <input
              type="text"
              class="rounded-full text-sm p-1 bg-white focus:outline-none"
              placeholder="Name"
            />
          </div>
        </div>
        <button class="bg-gray-800 text-white rounded p-2">Search</button>
      </div>
  
    <!-- Member Boxes -->
    <div class="flex flex-wrap justify-center gap-4">
      <!-- Replace this with a loop through your class members -->
      <div
        class="w-48 bg-white shadow-md rounded p-4 text-center relative"
        v-for="(member, index) in classMembers"
        :key="index"
      >
        <img
          :src="member.avatar"
          alt="Avatar"
          class="w-16 h-16 mx-auto rounded-full mb-2"
        />
        <p class="text-gray-700 font-semibold">{{ member.name }}</p>
        <p class="text-gray-500 text-sm">ID: {{ member.id }}</p>
        <div class="mt-4 flex justify-center space-x-2">
          <button
            @click="togglePresent(member)"
            :class="{
              'bg-zumba-secondary text-white rounded-full p-2 focus:outline-none':
                member.present,
              'bg-white text-zumba-secondary border border-zumba-secondary rounded-full p-2 focus:outline-none':
                !member.present,
            }"
          >
            Present
          </button>
          <button
            @click="toggleAbsent(member)"
            :class="{
              'bg-zumba-secondary text-white rounded-full p-2 focus:outline-none':
                member.absent,
              'bg-white text-zumba-secondary border border-zumba-secondary rounded-full p-2 focus:outline-none':
                !member.absent,
            }"
          >
            Absent
          </button>
        </div>
        <button
          class="bg-white text-zumba-secondary border border-zumba-secondary rounded-full p-2 focus:outline-none mt-2"
        >
          Profile Details
        </button>
      </div>
    </div>
</template>
  
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('User is entering the Manage Attendance page');
    next();
  },
  data() {
    return {
      classMembers: [
        { name: 'Zihan', id: '123', avatar: 'https://cdn.discordapp.com/avatars/571632788210712587/e92e4a2a69cf23deebde63d1f34ea034.webp', present: false, absent: false },
        { name: 'Xingeng', id: '456', avatar: 'https://cdn.discordapp.com/avatars/718778513628332054/9c711207690328de0385d1824f9993b5.webp', present: false, absent: false },
        { name: 'Kailun', id: '789', avatar:'https://cdn.discordapp.com/attachments/1132865483817898044/1152924028122706070/0.png', present: false, absent: false },
        { name: 'Ethan', id: '999', avatar:'https://cdn.discordapp.com/avatars/233807903964921856/a_fd054c6c9b34e96c19e5fc1efc506d42.webp', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },
        { name: 'Other', id: '000', present: false, absent: false },


      ],
    };
  },
  methods: {
    togglePresent(member) {
      member.present = true;
      member.absent = false;
    },
    toggleAbsent(member) {
      member.present = false;
      member.absent = true;
    },
  },
};
</script>