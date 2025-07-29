<template>
  <div>
    <h2>Features</h2>
    <div v-for="feature in features" :key="feature.id">
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
      <button @click="vote(feature.id)">Votar ({{ feature.votes }})</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const features = ref([])

const fetchFeatures = async () => {
  const res = await axios.get('/api/features')
  features.value = res.data
}

const vote = async (id) => {
  await axios.post(`/api/features/${id}/vote`)
  fetchFeatures()
}

onMounted(fetchFeatures)
</script>
