<script setup lang="ts">
import { ref } from "vue";
import { sendTransactions } from "../utils/SentryEventsUtils";

const txnCount = ref<string | null>(null);
const spanCount = ref<string | null>(null);
const isProcessing = ref<boolean>(false);

function onSubmit() {
  isProcessing.value = true;
  const txnCountValue: number = Number(txnCount.value ?? 1);
  const spanCountValue: number = Number(spanCount.value ?? 1);
  sendTransactions(txnCountValue > 0 ? txnCountValue : 1, spanCountValue > 0 ? spanCountValue : 1);
  txnCount.value = null;
  spanCount.value = null;
  isProcessing.value = false;
}
</script>

<template>
  <form>
    <div class="mx-auto mb-4 w-full text-xl text-green-700">Send Spans</div>
    <div class="mb-6 grid gap-6 md:grid-cols-12">
      <div class="md:col-span-6">
        <input
          type="text"
          id="spanCount"
          v-model="txnCount"
          placeholder="Number of Transactions"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <div class="md:col-span-6">
        <input
          type="text"
          id="spanCount"
          v-model="spanCount"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Number of Spans per Transaction"
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
      Send Spans
    </button>
  </form>
</template>
