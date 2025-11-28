<script setup lang="ts">
import { computed } from "vue";

import { useThemeStore } from "@/shared/stores/themeStore";

const themeStore = useThemeStore();

const isDark = computed({
  get: () => themeStore.theme === "dark",
  set: (value: boolean) => {
    themeStore.theme = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="inline-flex items-center gap-3 select-none cursor-pointer">
    <input
      v-model="isDark"
      type="checkbox"
      class="sr-only"
    >

    <div
      class="w-11 h-6 rounded-full border flex items-center transition-colors duration-200"
      :class="isDark ? 'bg-emerald-500 border-emerald-500' : 'bg-gray-300 border-gray-300'"
    >
      <div
        class="w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200"
        :class="isDark ? 'translate-x-5' : 'translate-x-1'"
      />
    </div>

    <span class="text-base">
      {{ isDark ? 'Dark' : 'Light' }}
    </span>
  </label>
</template>
