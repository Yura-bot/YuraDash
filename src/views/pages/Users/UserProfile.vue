<template>
    <div>
        <div class="row">
          <div class="col-lg-12">
             <div class="card">
                  <div class="card-body">
                     <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="d-flex flex-wrap align-items-center">
                           <div class="profile-img position-relative me-3 mb-3 mb-lg-0">
                              <img :src="`https://cdn.discordapp.com/avatars/${this.$store.state.user.id}/${this.$store.state.user.avatar}.png`" class="img-fluid rounded-pill avatar-100" alt="profile-image">
                           </div>
                           <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                              <h4 class="me-2 h4">{{  this.$store.state.user.username }}</h4>
                           </div>
                        </div>
                     </div>
                  </div>
             </div>
          </div>
          <div class="col-lg-12">
             <center>

               <div class="col-xl-4 col-lg-6">
                <div class="card">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                          <div class=" bg-soft-success rounded p-3">
                            <svg width="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.79476 7.05589C4.79476 5.80689 5.80676 4.79489 7.05576 4.79389H8.08476C8.68176 4.79389 9.25376 4.55689 9.67776 4.13689L10.3968 3.41689C11.2778 2.53089 12.7098 2.52689 13.5958 3.40789L13.5968 3.40889L13.6058 3.41689L14.3258 4.13689C14.7498 4.55789 15.3218 4.79389 15.9188 4.79389H16.9468C18.1958 4.79389 19.2088 5.80589 19.2088 7.05589V8.08289C19.2088 8.67989 19.4448 9.25289 19.8658 9.67689L20.5858 10.3969C21.4718 11.2779 21.4768 12.7099 20.5958 13.5959L20.5948 13.5969L20.5858 13.6059L19.8658 14.3259C19.4448 14.7489 19.2088 15.3209 19.2088 15.9179V16.9469C19.2088 18.1959 18.1968 19.2079 16.9478 19.2079H16.9468H15.9168C15.3198 19.2079 14.7468 19.4449 14.3238 19.8659L13.6038 20.5849C12.7238 21.4709 11.2928 21.4759 10.4068 20.5969C10.4058 20.5959 10.4048 20.5949 10.4038 20.5939L10.3948 20.5849L9.67576 19.8659C9.25276 19.4449 8.67976 19.2089 8.08276 19.2079H7.05576C5.80676 19.2079 4.79476 18.1959 4.79476 16.9469V15.9159C4.79476 15.3189 4.55776 14.7469 4.13676 14.3239L3.41776 13.6039C2.53176 12.7239 2.52676 11.2929 3.40676 10.4069C3.40676 10.4059 3.40776 10.4049 3.40876 10.4039L3.41776 10.3949L4.13676 9.67489C4.55776 9.25089 4.79476 8.67889 4.79476 8.08089V7.05589" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.43164 14.5716L14.5716 9.43164" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14.4955 14.5H14.5045" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M9.4955 9.5H9.5045" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <div>
                            <h1 class="text-success counter" style="visibility: visible;">{{ points }}</h1>
                            <p class="text-success mb-0">{{ t('profil.points') }}</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>

               <h2>{{ t('profil.choise') }}</h2>

               <div class="guild-container">
                  <div class="serv-container">
                      <div v-for="guild in guilds" :key="guild.id" data-bs-original-title="" :title="guild.name">
                        <router-link aria-current="page" :to="'/guild/'+ guild.id">
                          <img v-if="guild.icon" :src="'https://cdn.discordapp.com/icons/' + guild.id +'/' + guild.icon +'.png?size=2048'" width="70" height="70" class="guild-icon bd-placeholder-img img-thumbnail" />
                          <div v-else>
                            <svg class="guild-icon bd-placeholder-img img-thumbnail" width="70" height="70" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                              <rect width="100%" height="100%" fill="transparent" fill-opacity="0.5" stroke="transparent" stroke-width="1" ></rect>
                              <text x="16" y="35" font-size="50" fill="#dee2e6" dy=".3em">{{ guild.name.substr(0, 1) }}</text>
                            </svg>
                          </div>
                        </router-link>
                      </div>
                  </div>
                </div>

             </center>
          </div>
      </div>
    </div>
</template>
<script>
import { useI18n } from 'vue-i18n'
const fslightbox = () => import('@/assets/js/fslightbox.js')

export default {
  name: 'UserProfile',
  data () {
    return {
      slidetab: {},
      guilds: this.$store.state.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
      points: 0
    }
  },
  mounted () {
    fslightbox()

    fetch('http://localhost:3000/user/infos', {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'http://localhost:3000/login'
      } else {
        this.points = json.points
      }
    })
  },
  methods: {},
  setup () {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
}
</script>

<style scoped>

.guild-name {
  display: inline-block;
  margin-left: 15px;
  vertical-align: bottom;
  cursor: pointer;
}

.pre-text {
  font-size: 15px;
}

.guild-container{
  top: 72px;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.guild-container .serv-container {
  width: 70%;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -o-box-orient: horizontal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -o-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.guild-icon {
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 50%;
  border: 2px solid #ddd;
  vertical-align: middle;
  transition: border-radius .5s cubic-bezier(.5, 1.65, .5, -0.65);
  display: inline-block;
  text-decoration: none;
  border: 2px solid white !important;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.22) !important;
}

.guild-container{
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
}

.guild-icon:hover {
  border-radius: 15px;
}

.serv-container {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.list-serv {
  display: block;
  list-style-type: disc;
  padding: 0px;
  list-style: none;
  opacity: .9;
}

canvas {
  background-color: #2a2d32
}

canvas:hover {
  background-color: #7289da;
}

.contenant {
  font-family: 'Karla',sans-serif;
  font-size: 16px;
  position: relative;
  display: block;
  background-color: #35383c;
  border: 1px solid #2a2d32;
  text-decoration: none;
  background-color: #363636 !important;
  margin: 15px;
  opacity: .9;
  padding: 0.3em;
  border-radius: 3px;
}

.contenant:hover {
  background-color: #fff !important;
  border-color: #363636 !important;
  color: #363636 !important;
}

.btn {
  background-color: transparent !important;
  border-color: white !important;
  color: white !important;
  font-size: 1.25rem !important;
}

.btn:hover, .btn:active, .btn:focus {
  background-color: white !important;
  color: #363636 !important;
  box-shadow: none;
  border-color: white !important
}

.alert {
  border: 1px solid #fff;
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-radius: 3px;
  margin: 12px 0;
  padding: 12px;
}

.success {
  background-color: rgba(67,181,129,.3);
  border-color: #43b581;
}

.error {
  background-color: rgba(240,71,71,.3);
  border-color: #f04747;
}

</style>
