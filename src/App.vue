<template>
  <router-view/>
</template>

<script>
import 'nouislider/dist/nouislider.css'
export default {
  name: 'App',
  beforeMount: async function () {
    const body = document.querySelector('body')
    const Theme = localStorage.getItem('theme')

    if (Theme === 'dark') {
      body.classList.add('dark')
    }

    fetch('http://localhost:3000/user', {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'http://localhost:3000/login'
      } else {
        this.$store.commit('set', json)
      }
    })
  }
}
</script>
<style lang="scss">
  @import "@/assets/scss/hope-ui.scss";
  @import url("./plugins/Leaflet/leaflet.css");
  @import url("./assets/vendor/fullcalendar/core/main.css");
  @import url("./assets/vendor/fullcalendar/daygrid/main.css");
  @import url("./assets/vendor/fullcalendar/timegrid/main.css");
  @import url("./assets/vendor/fullcalendar/list/main.css");
</style>

<style>
::-webkit-scrollbar {
    width: 7px;
}

::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-thumb {
    background: #3a57e8;
}

::-webkit-scrollbar-track {
    background: #343a40;
}
</style>
