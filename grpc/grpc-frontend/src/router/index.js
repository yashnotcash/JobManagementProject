import { createRouter, createWebHistory } from 'vue-router';
import JobList from '../components/JobList.vue';
import JobDetails from '../components/JobDetails.vue';

const routes = [
    {
        path: '/',
        name: 'JobList',
        component: JobList
    },
    {
        path: '/job/:jobId',
        name: 'JobDetails',
        component: JobDetails,
        props: true  // Pass jobId as a prop to JobDetails.vue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;