<script lang="ts" setup>
import QRCode from 'qrcode.vue';
const handleQRButtonClick = () => {
  alert('QR Button Clicked!'); // Display an alert when the QR button is clicked
  showQRCodePopup = true; // Set this to true to open the QR code popup
};

const props =defineProps<{
    link: {
        shortKey: string,
        longUrl: string,
        id: number,
        totalClicks: number,
      };
}>();
const config = useRuntimeConfig();
let showQRCodePopup = false;
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(`${config.public.appUrl}/${props.link.shortKey}`);
    alert('Copied to clipboard');
  } catch (error) {
    console.error('Error copying to clipboard:', error);
  }
};
</script>
<template>
    <div class="card flex justify-between">
        <div class="link-info">
            <NuxtLink :to="`/dasboard/${link.shortKey}`" class="text-emerald-500 font-bold text-2xl">/{{ link.shortKey }}</NuxtLink>
            <div class="text-sm text-white/40">{{ link.longUrl.length > 45 ? link.longUrl.slice(0, 45) + "..." : link.longUrl }}</div>
        </div>
        <div class="flex gap-5 items-center">
          <!-- <div class="text-xl inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            {{ link.totalClicks  }}
          </div> -->
          <button class="btn-primary w-12 h-12 grid place-content-center rounded-full"
        @click="handleCopy">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
        </button>
        <button class="btn-secondary w-12 h-12 grid place-content-center rounded-full" @click="handleQRButtonClick">
        QR
      </button>

      <!-- QR code popup -->
      <div v-if="showQRCodePopup" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded-lg text-center">
        <!-- QRCode component here -->
        <QRCode :value="`${config.public.appUrl}/${props.link.shortKey}`" class="w-24 h-24 mx-auto" />
        <!-- "Scan QR Code" text -->
        <p class="mt-2">Scan QR Code</p>
        <!-- "Close" button -->
        <button class="btn-primary mt-2" @click="showQRCodePopup = false">Close</button>
      </div>
    </div>

        </div>
        
    </div>
</template>