<script lang="ts" setup>
const user = useSupabaseUser();


const auth = useSupabaseAuthClient();
const navLinks =ref<{
    to: string,
    label: string,
}[]>([
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/dashboard',
        label: 'Dashboard',
    },
    {
        to: '/contact',
        label: 'Contact',
    },
]);

const handleLogout = async() => {
    await auth.auth.signOut();
    useRouter().push({
        name: 'index',
    });
};
</script>

<template>
    <div class="fixed top-0 left-0 right-0 border-b border-white/20 bg-blur z-50">
        <nav class="container py-4 flex justify-between">
            <NuxtLink
                :to="{
                    name: 'index',
                }"
                class="text-2xl font-bold text-white"
            >
                smolink
            </NuxtLink>
            <ul class="flex items-center gap-4">
                <li v-for="link in navLinks" :key="link.to">
                    <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
                </li>
                <li v-if="!user">
                    <NuxtLink to="/auth" class="btn btn-primary">Login</NuxtLink>
                </li>
                <li v-else>
                    <NuxtLink @click="handleLogout" class="btn btn-primary">Logout</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>