<template>
   <div class="row">
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="text-center">Serveurs</div>
               <div class="d-flex align-items-center justify-content-between mt-3">
                  <div>
                     <h2> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount='stats.guildCount'/></h2>
                  </div>
                  <div class="border  bg-soft-danger rounded p-3">
                     <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.24512 14.7815L10.2383 10.8914L13.6524 13.5733L16.5815 9.79297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <circle cx="19.9954" cy="4.20027" r="1.9222" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
                        <path d="M14.9248 3.12012H7.65704C4.6456 3.12012 2.77832 5.25284 2.77832 8.26428V16.3467C2.77832 19.3581 4.60898 21.4817 7.65704 21.4817H16.2612C19.2726 21.4817 21.1399 19.3581 21.1399 16.3467V9.30776" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="text-center">Membres</div>
               <div class="d-flex align-items-center justify-content-between mt-3">
                  <div>
                        <h2> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount='stats.membersCount'/></h2>
                  </div>
                  <div class="border bg-soft-info rounded p-3">
                     <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.50473 20.3597 8.05573C20.3597 6.62773 19.3187 5.44373 17.9537 5.21973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M19.7285 14.2505C21.0795 14.4525 22.0225 14.9255 22.0225 15.9005C22.0225 16.5715 21.5785 17.0075 20.8605 17.2815" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8867 14.6638C8.67273 14.6638 5.92773 15.1508 5.92773 17.0958C5.92773 19.0398 8.65573 19.5408 11.8867 19.5408C15.1007 19.5408 17.8447 19.0588 17.8447 17.1128C17.8447 15.1668 15.1177 14.6638 11.8867 14.6638Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8869 11.888C13.9959 11.888 15.7059 10.179 15.7059 8.069C15.7059 5.96 13.9959 4.25 11.8869 4.25C9.7779 4.25 8.0679 5.96 8.0679 8.069C8.0599 10.171 9.7569 11.881 11.8589 11.888H11.8869Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M5.88509 10.8967C4.48909 10.7007 3.41609 9.50473 3.41309 8.05573C3.41309 6.62773 4.45409 5.44373 5.81909 5.21973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M4.044 14.2505C2.693 14.4525 1.75 14.9255 1.75 15.9005C1.75 16.5715 2.194 17.0075 2.912 17.2815" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="text-center">Salons</div>
               <div class="d-flex align-items-center justify-content-between mt-3">
                  <div>
                        <h2> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount='stats.channelsCount'/></h2>
                  </div>
                  <div class="border bg-soft-success rounded p-3">
                     <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7161 16.2234H8.49609" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.7161 12.0369H8.49609" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M11.2521 7.86011H8.49707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.909 2.74976C15.909 2.74976 8.23198 2.75376 8.21998 2.75376C5.45998 2.77076 3.75098 4.58676 3.75098 7.35676V16.5528C3.75098 19.3368 5.47298 21.1598 8.25698 21.1598C8.25698 21.1598 15.933 21.1568 15.946 21.1568C18.706 21.1398 20.416 19.3228 20.416 16.5528V7.35676C20.416 4.57276 18.693 2.74976 15.909 2.74976Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-3 col-md-6">
         <div class="card">
            <div class="card-body">
               <div class="text-center">Commandes</div>
               <div class="d-flex align-items-center justify-content-between mt-3">
                  <div>
                        <h2> <Vue3autocounter  ref='counter' :startAmount='0' :endAmount='stats.commands'/></h2>
                  </div>
                  <div class="border  bg-soft-primary rounded p-3">
                     <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.37121 10.2017V17.0618" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12.0382 6.91919V17.0619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M16.6285 13.8269V17.0619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="row">
   <div class="col-lg-4">
      <div class="card">
        <div class="card-body p-3">
            <div class="text-center">
              <h1 class="counter mb-2" style="visibility: visible;"><Vue3autocounter ref='counter' :startAmount='0' :duration='2' :decimals='2' :endAmount='system.ram'/>MB</h1>
              <p class="mb-0">Utilisation de la ram.</p>
            </div>
        </div>
      </div>
   </div>
   <div class="col-lg-6">
      <div class="card">
         <div class="card-body">
            <div class="border-bottom text-center pb-3">
               <img :src="`https://cdn.discordapp.com/avatars/${this.$store.state.user.id}/${this.$store.state.user.avatar}.png`" alt="profile" class="img-fluid avatar-80 mb-4">
               <div>
                  <h5 class="mb-3">{{ this.$store.state.user.username }}</h5>
               </div>
               <p>Aucune description...</p>
               <router-link class="btn btn-info mb-2" :to="{name: 'default.UserProfile'}">Voir mon profil</router-link>
            </div>
         </div>
      </div>
   </div>
   </div>
</template>
<script>
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'dashboard',
  components: {
    Vue3autocounter
  },
  data () {
    return {
      stats: {},
      system: {}
    }
  },
  beforeMount: async function () {
    fetch('http://localhost:3000/infos', {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()
      this.stats = json.stats
      this.system = json.system
    })
  }
}
</script>
