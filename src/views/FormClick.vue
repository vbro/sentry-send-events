<script setup lang="ts">
function onSubmit() {}
</script>

<template>
  <form>
    <div class="mx-auto mb-4 w-full text-xl text-green-700">Rage / Dead Click</div>
    <div class="mb-6 grid gap-6 md:grid-cols-12">
      <div class="md:col-span-12">
        <input
          type="text"
          id="text"
          placeholder="The button below does nothing"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      v-bind:class="{ isProcessing: 'cursor-not-allowed' }"
      class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      v-on:click.prevent="onSubmit()"
    >
      Do Nothing
    </button>
  </form>
</template>
