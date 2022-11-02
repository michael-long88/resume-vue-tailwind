<template>
  <div class="flip h-64 max-h-screen lg:col-span-4 lg:col-start-3">
    <div class="flip-content flex-none inline-flex flex-col">
      <div :class="'flip-front rounded overflow-hidden shadow-xl border-2 border-gray-600 flex justify-center items-center dark:shadow-xl-white dark:border-gray-700'">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ cardName }}</div>
        </div>
      </div>
      <div class="flip-back rounded overflow-auto shadow-xl border-2 border-gray-600 lg:col-span-4 lg:col-start-3 dark:shadow-xl-white dark:border-gray-700">
        <div class="grid">
          <div class="px-6 py-2 text-center">
            <div class="font-bold text-xl mb-2">{{ cardName }}</div>
          </div>
          <div class="px-4 py-2">
            <div class="font-bold text-xl mb-2">{{ description }}</div>
          </div>
          <div class="px-4 py-2" v-for="(url, index) in urls" :key="index">
            <a class="font-bold text-xl mb-2" :href="url" target="_blank">{{url}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    startColumn: {
      type: Number,
      required: false,
      default: 3
    },
    cardName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    urls: {
      type: Array,
      required: true
    }
  }
}
</script>
