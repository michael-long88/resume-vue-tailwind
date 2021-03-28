<template>
  <div class="flex-grow overflow-auto max-h-screen w-full dark:text-gray-300">
    <div class="m-auto h-screen">
      <!-- <div v-if="darkModePDF">
        <embed id="resume" src="LongMichael_WebResume_PhoneDarkMode.pdf" type="application/pdf" class="h-screen w-full">
      </div>
      <div v-else>
        <embed id="resume" src="LongMichael_WebResume.pdf" type="application/pdf" class="h-screen w-full">
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Resume',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      windowWidth: 0
    }
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' }),
    darkModePDF () {
      if (this.windowWidth < 1200 && this.theme === 'dark') {
        return true
      }
      return false
    }
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
