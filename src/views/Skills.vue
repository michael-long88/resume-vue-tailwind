<template>
  <div class="flex-grow dark:text-gray-300">
    <div class="lg:grid lg:grid-cols-3 lg:grid-rows-2">
      <SkillList
        v-for="(skillList, skillHeader) in skills"
        :key="skillHeader"
        :header="skillHeader"
        :list="skillList"
      />
    </div>
  </div>
</template>
<script>
import SkillList from '../components/SkillList'
import { skillsList } from '@/skillsList'
export default {
  name: 'Skills',
  components: {
    SkillList
  },
  data () {
    return {
      skills: skillsList
    }
  }
}
</script>
