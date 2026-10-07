<script setup>
import { ref } from "vue";

// FAULT: a live secret key inside a component. Every visitor downloads this.
const STRIPE_SECRET_KEY = "sk_live_NOTAREALKEY1234";

const total = ref(4200);

async function pay() {
  await fetch("https://api.stripe.com/v1/charges", {
    method: "POST",
    headers: { Authorization: "Bearer " + STRIPE_SECRET_KEY },
  });
}
</script>

<template>
  <button @click="pay">Pay {{ total }}</button>
</template>
