<script setup lang="ts">
import { ref } from "vue";
import FormError from "../views/FormError.vue";
import FormMessage from "../views/FormMessage.vue";

const org = ref<string>(import.meta.env.VITE_SENTRY_ORG);
const project = ref<string>(import.meta.env.VITE_SENTRY_PROJECT);
const dsn = ref<string>(import.meta.env.VITE_SENTRY_DSN);
</script>

<template>
  <div class="container mx-auto max-w-screen-lg px-4">
    <div class="w-full text-center">
      <div class="mx-auto w-full py-4 text-4xl text-green-700">Send events to Sentry</div>
      <div class="mx-auto w-full border-y py-3 text-gray-500">
        <div>Project = {{ org ?? "?unknown?" }}</div>
        <div>Organization = {{ project ?? "?unknown?" }}</div>
        <div>DSN = {{ dsn }}</div>
      </div>
    </div>

    <FormMessage class="mt-6 rounded-lg border p-4"></FormMessage>
    <FormError class="mt-6 rounded-lg border p-4"></FormError>
  </div>
</template>
