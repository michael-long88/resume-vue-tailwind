<template>
  <div>
    <div class="grid grid-flow-row px-8 pt-4">
      <header class="mx-auto pb-4 lg:text-2xl font-bold underline font-lora">
        {{ header }}
      </header>
      <ul class="text-left list-disc font-nunito">
        <li v-for="(item, index) in list" :key="index">
          <ul v-if="Array.isArray(item)">
            <li v-for="subItem in item" :key="subItem">
              {{ subItem }}
            </li>
          </ul>
          <span v-else>
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SkillList',
  props: {
    header: String,
    list: Array
  }
}
</script>
