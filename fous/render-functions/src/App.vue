<script setup lang="ts">
import { ref } from 'vue'
import H from '@/render-functions/heading'

const selectedCity = ref()

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<template>
  <H as="h1">Select a city</H>
  <FormKit type="dropdown" v-model="selectedCity" :drops="cities" optionLabel="name" />
</template>
