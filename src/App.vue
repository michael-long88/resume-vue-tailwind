<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' })
  },
  beforeMount () {
    this.$store.dispatch('initTheme')
  },
  watch: {
    theme (newTheme, oldTheme) {
      if (newTheme === 'light') {
        document.querySelector('html').classList.remove('dark')
        document.querySelector('html').classList.remove('bg-gray-600')
      } else {
        document.querySelector('html').classList.add('dark')
        document.querySelector('html').classList.add('bg-gray-600')
      }
    }
  }
  // created () {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     document.querySelector('html').classList.add('dark')
  //     document.querySelector('html').classList.add('bg-gray-600')
  //   } else {
  //     document.querySelector('html').classList.remove('dark')
  //     document.querySelector('html').classList.remove('bg-gray-600')
  //   }

  //   // Whenever the user explicitly chooses light mode
  //   localStorage.theme = 'light'

  //   // Whenever the user explicitly chooses dark mode
  //   localStorage.theme = 'dark'

  //   // Whenever the user explicitly chooses to respect the OS preference
  //   localStorage.removeItem('theme')
  // }
}
</script>
