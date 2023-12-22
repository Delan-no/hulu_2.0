import { createRouter, createWebHistory } from "vue-router";
import Results from "@/components/Results.vue"

const router = createRouter({
    history: createWebHistory(import.meta.url) ,
    routes: [
        {
            path: '/',
            component: Results,
        }
    ],
})