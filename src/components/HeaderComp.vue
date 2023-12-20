
<template>
    <header class="flex flex-col sm:flex-row m-5 justify-between items-center" >

        <ul class="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem 
            v-for="link of links" 

            :key="link.name"
            :name="link.name" 
            :Icon="link.icon"/>
            
        </ul>

        <a href=""><img src="../assets/hulu.webp" alt="Logo Hulu"></a>

    </header>
</template>

<script setup lang="ts">
    import HeaderItem from '@/components/HeaderItem.vue';
    import { 
    HomeIcon, 
    BoltIcon, 
    CheckBadgeIcon, 
    RectangleStackIcon, 
    MagnifyingGlassIcon, 
    UserIcon } from "@heroicons/vue/24/outline";

    const links = [
        {name: "Home", icon: HomeIcon},
        {name: "Trending", icon: BoltIcon},
        {name: "Verified", icon: CheckBadgeIcon},
        {name: "Collections", icon: RectangleStackIcon},
        {name: "Search", icon: MagnifyingGlassIcon},
        {name: "Account", icon: UserIcon},
    ]
</script>