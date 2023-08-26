<script lang="ts" setup>
import { Database } from "~~/types/supabase";
const {id} = useRoute().params;
const {data} = useAsyncData(id.toString(),async()=>{
    const client = useSupabaseClient<Database>();
    const{data:res,error} = await client
    .from('links')
    .select("*,clicks(*)")
    .eq("key",id)
    .single();
    return res});
</script>
<template>
    <main v-if="data" class="pt-20">
        {{ data }}
        <h1 class="text-5xl text-emerald-500 font-bold">{{ data?.key }}</h1>
         
    </main>
</template>