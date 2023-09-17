import { createRouter, createWebHistory } from 'vue-router';

// Import Vue components
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';

// Import page components
import Home from '../components/articles/Home.vue';
import About from '../components/articles/About.vue';
import Classes from '../components/articles/Classes.vue';
import Contact from '../components/articles/Contact.vue';
import Download from '../components/articles/Download.vue';
import FAQ from '../components/articles/FAQ.vue';
import LogIn from '../components/articles/LogIn.vue';
import SignUp from '../components/articles/SignUp.vue';

// Import app components
import AppNav from '../components/app/AppNav.vue';
import InstructorDashboard from '../components/app/instructor/Dashboard.vue';
import ManageAttendance from '../components/app/instructor/ManageAttendance.vue';
import ManageClass from '../components/app/instructor/ManageClass.vue';
import ManageMembers from '../components/app/instructor/ManageMembers.vue';
import RecordAttendance from '../components/app/instructor/RecordAttendance.vue';
import MemberDashboard from '../components/app/member/Dashboard.vue';

const routes = [
  {
    path: '/',
    components: {
      default: Main,
      nav: Nav,
      footer: Footer,
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'classes',
        name: 'Classes',
        component: Classes,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: 'download',
        name: 'Download',
        component: Download,
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: FAQ,
      },
      {
        path: 'login',
        name: 'LogIn',
        component: LogIn,
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
      },
    ],
  },
  {
    path: '/app/instructor',
    component: AppNav,
    children: [
      {
        path: 'dashboard',
        name: 'InstructorDashboard',
        component: InstructorDashboard,
      },
      {
        path: 'manage-attendance',
        name: 'ManageAttendance',
        component: ManageAttendance,
      },
      {
        path: 'manage-class',
        name: 'ManageClass',
        component: ManageClass,
      },
      {
        path: 'manage-members',
        name: 'ManageMembers',
        component: ManageMembers,
      },
      {
        path: 'record-attendance',
        name: 'RecordAttendance',
        component: RecordAttendance,
      },
    ],
  },
  {
    path: '/app/member',
    component: AppNav,
    children: [
      {
        path: 'dashboard',
        name: 'MemberDashboard',
        component: MemberDashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes, // Provide the array of route objects here
});

//* Define a navigation guard to protect routes
//*router.beforeEach((to, from, next) => {
//*  // Check if the route requires authentication (e.g., routes inside /app)
//*  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
//*
//*  // Check the user's authentication status (you need to implement this logic)
//*  const isAuthenticated = /* Check if the user is authenticated */ false;
//*
//*  if (requiresAuth && !isAuthenticated) {
//*    // If the route requires authentication and the user is not authenticated, redirect to the login page
//*    next('/login');
//*  } else {
//*    // If the user is authenticated or the route does not require authentication, proceed with navigation
//*    next();
//*  }
//*});

export default router;