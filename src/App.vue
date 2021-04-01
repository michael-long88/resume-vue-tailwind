<template>
  <div id="app" class="flex flex-col h-screen">
    <Nav />
    <router-view class="main-body"/>
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
}
</script>
