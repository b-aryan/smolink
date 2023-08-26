<template>
    <section class="h-screen place-content-center grid">
        <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-5xl font-bold heading">
                Make your links <span class="text-smolink">smol</span> and easy to share with <span class="text-gradient">smolink</span>
            </h1>
            <p class="my-10 text-lg w-10/12 md:w-2/3 mx-auto transparent-p">
                Transform your long, cumbersome URLs into short and shareable links with smolink.
            </p>
            <NuxtLink to="/dashboard" class="btn btn-primary">Short Now!</NuxtLink>
        </div>
    </section>
</template>

<style>
.heading {
    background: linear-gradient(180deg, rgba(255,255,255,5) 40%, rgba(255,255,255,0) 250%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-smolink {
    color: #03a9f4; /* Blue color for "smolink" text */
}

.text-gradient {
    background: linear-gradient(180deg, rgba(255,255,255,5) 40%, rgba(255,255,255,0) 250%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.transparent-p {
    opacity: 0.9; /* Adjust this value to control the transparency */
}
</style>
