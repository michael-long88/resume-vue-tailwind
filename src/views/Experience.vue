<template>
  <div class="flex-grow overflow-auto max-h-screen dark:text-gray-300">
    <div class="lg:grid lg:grid-cols-1 lg:grid-rows-1">
      <JobList
        v-for="(jobPositions, company) in jobs"
        :key="company"
        :header="company"
        :positions="jobPositions"
      />
    </div>
  </div>
</template>
<script>
import JobList from '../components/JobList'
import { jobsList } from '@/jobsList'
export default {
  name: 'Experience',
  components: {
    JobList
  },
  data () {
    return {
      jobs: jobsList
    }
  }
}
</script>
