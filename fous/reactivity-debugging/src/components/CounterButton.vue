<script setup>
import { ref, computed } from 'vue'

import { onRenderTracked, onRenderTriggered } from 'vue'

onRenderTracked((event) => {
  debugger
})

onRenderTriggered((event) => {
  debugger
})

const count = ref(0)

function increment() {
  count.value++
}

const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // triggered when count.value is tracked as a dependency
    debugger
  },
  onTrigger(e) {
    // triggered when count.value is mutated
    debugger
  },
})
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>

  {{ plusOne }}
</template>
