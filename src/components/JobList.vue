<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 px-8 pt-4 font-lora">
      <header class="mx-auto pb-4 text-2xl lg:text-3xl font-bold underline lg:col-span-2 mx-8">
        {{ header }}
      </header>
      <div v-for="(position, index) in positions" :key="index" class="lg:mx-20">
        <h3 class="text-xl lg:text-2xl">{{ position.position }} | {{ position.timeline }}</h3>
        <ul class="text-left lg:text-lg list-disc font-nunito pl-8 max-w-full pb-4">
          <li v-for="(responsibility, subIndex) in position.responsibilities" :key="subIndex" :class="[{'ml-6 list-square': isArray(responsibility)}]">
            <ul v-if="isArray(responsibility)">
              <li v-for="subItem in responsibility" :key="subItem">
                {{ subItem }}
              </li>
            </ul>
            <span v-else>
              {{ responsibility }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobList',
  props: {
    header: String,
    positions: Array
  },
  methods: {
    isArray: (element) => {
      return Array.isArray(element)
    }
  }
}
</script>
