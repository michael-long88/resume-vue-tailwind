<template>
  <div class="flex-grow overflow-auto max-h-screen w-full dark:text-gray-300">
    <div class="m-auto h-screen">
      <div v-if="darkModePDF">
        <object id="resume" data="LongMichael_WebResume_PhoneDarkMode.pdf" type="application/pdf" class="h-screen w-full">
          <p>It appears you don't have a PDF plugin for this browser.
            No worries... you can <a :href="`${publicPath}LongMichael_WebResume.pdf`" target="_blank" class="resume-link">click here to
            download the PDF file.</a>
          </p>
        </object>
      </div>
      <div v-else class="max-h-screen">
        <object id="resume" data="LongMichael_WebResume.pdf" type="application/pdf" class="h-screen w-full">
          <p>It appears you don't have a PDF plugin for this browser.
            No worries... you can <a :href="`${publicPath}LongMichael_WebResume.pdf`" target="_blank" class="resume-link">click here to
            download the PDF file.</a>
          </p>
        </object>
      </div>
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
