<script lang="ts" setup>
import geoip from 'geoip-lite';
import { Database } from 'types/supabase';
const params = useRoute().params;
const client = useSupabaseClient<Database>();
if(!params.id){
    throw createError({
        statusCode: 404,
        message: 'Not found',
    });
}
const {data} = await useAsyncData('links', async() => {
    const {data, error} = await client
    .from('links')
    .select('*')
    .eq('key', params.id)
    .single();
    
    if(error){
        throw createError({
            statusCode: 404,
            message: 'Not found',
        });
    }
    return data;
});
if(data.value?.long_url){
    const ua=useUserAgent();
    if(ua&&ua.ip){
    const geoLocation = geoip.lookup(ua.ip);
    const {data:res,error}= await client.from('clicks').insert({
            link_id: data.value.id,
            ip: ua.ip,
            country: geoLocation?.country,
            city: geoLocation?.city,
            user_agent: ua.userAgent,
            
        });
    }
useExternalRedirect(data.value?.long_url);
}
</script>

<template>
    <div class="pt-[200px]">
        {{ params }}
        {{ data }}
    </div>
</template>