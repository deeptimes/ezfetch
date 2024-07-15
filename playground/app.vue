<script setup>
const result = ref()
const { data, pending } = await ezFetch('/items/blogs', {
  params: {
    fields: ['title'],
  },
})

result.value = data.value?.data
// console.log(result.value)
</script>

<template>
  <div class="">
    <div v-if="pending">
      pending
    </div>
    <div v-else>
      <p
        v-for="(item, i) in result"
        :key="i"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
