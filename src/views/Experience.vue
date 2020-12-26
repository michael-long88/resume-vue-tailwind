<template>
  <div class="flex">
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
export default {
  name: 'Experience',
  components: {
    JobList
  },
  data () {
    return {
      jobs: {
        'RTI International': [
          {
            position: 'Software Developer',
            timeline: '01/2020 - Present',
            responsibilities: [
              'Creating data visualization dashboards using Vue.js.',
              'Using Python to process data for use in visualizations.'
            ]
          }
        ],
        'Consultants to Government and Industry (CGI)': [
          {
            position: 'Software Developer',
            timeline: '02/2019 - 01/2020',
            responsibilities: [
              'Used Python and Kafka to parse JSON messages containing health care claim information.',
              'Created Python unit test framework for parser program.',
              'Created Python scripts to ease daily workflow.',
              'Cultivated better programming practices.',
              'Utilized Agile methodologies in a team environment.'
            ]
          },
          {
            position: 'Software Developer Intern',
            timeline: '06/2018 - 07/2018',
            responsibilities: [
              'Worked with 7 interns located in 4 different cities.',
              'Held 2 separate roles over 2 sprints: Developer and Technical Lead.',
              [
                'Created a web application which tracks meeting attendees, project health, project and meeting scorecards, and the current project reviewer for engineering review meetings.'
              ]
            ]
          }
        ],
        'University of North Carolina at Charlotte': [
          {
            position: 'Client Support Tech Asst II',
            timeline: '09/2017 - 12/2018',
            responsibilities: [
              'Provided support to lower level Technical Assistants.',
              'Maintained working knowledge of common issues that arise in the Information Technology Service Desk.',
              'Assisted faculty and students in resolving technical issues ranging from password resets to network issues.',
              'Communicated solutions and processes so that customers will be better equipped to deal with problems in the future.'
            ]
          },
          {
            position: 'Client Support Tech Asst I',
            timeline: '11/2016 - 09/2017',
            responsibilities: [
              'Assisted faculty and students in resolving technical issues ranging from password resets to network issues.',
              'Communicated solutions and processes so that customers will be better equipped to deal with problems in the future.'
            ]
          }
        ],
        'United States Marine Corps': [
          {
            position: 'Public Affairs Liaison (Sergeant / E5)',
            timeline: '08/2013 - 10/2014',
            responsibilities: [
              'Organized and coordinated public events with outside agencies for 200 Marines.',
              'Supervised Marine Corps tasks issued to groups of 4, 12, 50, and 300 Marines.'
            ]
          },
          {
            position: 'Barracks Manager (Sergeant / E5)',
            timeline: '06/2012 - 07/2014',
            responsibilities: [
              'Created schedules for 150 rotating incoming and outgoing Marines living in the barracks.',
              'Created work orders for any maintenance requests.',
              'Helped create the barracks rules and regulations policy for Bravo Fleet Anti-Terrorism Security Team company.',
              'Ensured rooms were being kept within Marine Corps standards.',
              'Implemented and enforced policies and guidelines.'
            ]
          },
          {
            position: 'Squad Leader (Corporal / E4)',
            timeline: '04/2011 - 06/2012',
            responsibilities: [
              'Supervised Marine Corps infantry and Fleet Anti-Terrorism Security Team tasks applied to the fire team, squad, platoon, and company level.',
              'Ensured the Marines under my charge effectively accomplished all tasks resulting in mission accomplishment, unit readiness, and unit success.',
              'Led and mentored junior Marines to help them grow both personally and professionally.'
            ]
          },
          {
            position: 'Team Leader (Corporal / E4)',
            timeline: '11/2010 - 04/2011',
            responsibilities: [
              'Conducted patrols in Marjah, Helmand Province, Afghanistan.',
              'Provided morale and discipline to the 3 Marines under my charge.',
              'Communicated effectively with individuals in foreign countries using the native language while respecting local culture.',
              'Collaborated with service members from US and foreign military branches in a high-stress environment.',
              'Adapted to the fluid and ever-changing military environment while overseas and stateside.'
            ]
          },
          {
            position: 'Rifleman (Private - Corporal / E1 - E4)',
            timeline: '07/2006 - 11/2010',
            responsibilities: [
              'Accepted and executed any lawful order given to me by my chain of command.',
              'Maintained armed guard positions in foreign countries such as Cuba, Bahrain, and Jordan.'
            ]
          }
        ]
      }
    }
  }
}
</script>
