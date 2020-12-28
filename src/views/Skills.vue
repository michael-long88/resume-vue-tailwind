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
export default {
  name: 'Skills',
  components: {
    SkillList
  },
  data () {
    return {
      skills: {
        Technologies: ['Python', 'HTML5/CSS', 'JavaScript', 'Vue.js', 'SQL', 'Java', 'Windows', 'MacOS', 'Linux'],
        Communication: [
          'Presented changes to projects and gave recommended courses of action to clients.',
          'Presented detailed plans to individuals in charge as well as subordinates.',
          'Communicated effectively with locals in foreign countries using freshly learned phrases and communication skills.',
          'Assisted faculty and students in resolving technical issues ranging from password resets to network issues.'
        ],
        Leadership: [
          'Led 12 individuals in both a tactical and home environment.',
          'Mentored junior Marines to help them grow both personally and professionally.',
          'Supervised Marine Corps tasks applied to the fire team, squad, platoon, and company level.'
        ],
        'Time Management': [
          'Accomplished numerous tasks in a set schedule, as well as assisted in the establishment of timelines.',
          'Performed under pressure in a condensed time line on numerous occasions.'
        ],
        Adaptability: [
          'Adapted to the fluid and ever-changing military environment while overseas and stateside.',
          'Incorporated new technologies to enhance existing projects.'
        ],
        Teamwork: [
          'Collaborated on projects across internal and external teams.',
          'Worked with 7 other interns from 4 separate locations over the course of a 2 month internship.',
          'Utilized Agile methodologies in a team environment.'
        ]
      }
    }
  }
}
</script>
