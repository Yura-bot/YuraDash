<template>
    <div id="loading">
      <loader />
    </div>
    <Sidebar :minisidebar="sidebarmini" @makeminisidebar="onsidebarmini"/>
    <main class="main-content">
      <div class="position-relative">
        <HeaderStyle :fullsidebar="sidebarmini" @makefullsidebar="onfullsidebar"/>
        <SubHeader />
      </div>
      <div class="conatiner-fluid content-inner mt-n5 py-0">
       <router-view/>
      </div>
      <Footer />
    </main>
</template>
<script>
import Footer from '@/components/custom/partials/Footer/Footer'
import Sidebar from '@/components/custom/partials/Settings/Sidebar'
import HeaderStyle from '@/components/custom/partials/Header/HeaderStyle'
import SubHeader from '@/components/custom/partials/Header/SubHeader'
export default {
  name: 'default',
  components: {
    Footer,
    Sidebar,
    HeaderStyle,
    SubHeader
  },
  data () {
    return {
      sidebarmini: false
    }
  },
  methods: {
    onsidebarmini (e) {
      this.sidebarmini = e
    },
    onfullsidebar (e) {
      this.sidebarmini = e
      console.log('clicked')
    }
  }
}
</script>
