<template>
  <div class="flex-grow flex-col overflow-auto max-h-screen w-full dark:text-gray-300">
    <div class="m-auto pt-4 lg:grid lg:grid-cols-8 space-y-12">
      <ProjectCard
        :cardName="projects.dnd.projectTitle"
        :startColumn="3"
        :description="projects.dnd.description"
        :urls="projects.dnd.urls"
      />
      <ProjectCard
        :cardName="projects.debt.projectTitle"
        :startColumn="3"
        :description="projects.debt.description"
        :urls="projects.debt.urls"
      />
      <ProjectCard
        :cardName="projects.rnltk.projectTitle"
        :startColumn="3"
        :description="projects.rnltk.description"
        :urls="projects.rnltk.urls"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import { projectList } from '../projectList'
export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: projectList
    }
  }
}
</script>
