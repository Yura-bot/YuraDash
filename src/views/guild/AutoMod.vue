<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">⚙ Configuration De L'auto Modération :</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mb-3 form-check form-switch">
                                <input v-if="settings.antiraid" v-model="settings.antiraid" class="form-check-input" type="checkbox" id="anti-raid" checked="">
                                <input v-else v-model="settings.antiraid" class="form-check-input" type="checkbox" id="anti-raid">
                                <label class="form-check-label" for="anti-raid">Anti Raid</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input v-if="settings.antipub" v-model="settings.antipub" class="form-check-input" type="checkbox" id="anti-pub" checked="">
                                <input v-else v-model="settings.antipub" class="form-check-input" type="checkbox" id="anti-pub">
                                <label class="form-check-label" for="anti-pub">Anti Pub</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input v-if="settings.antilink" v-model="settings.antilink" class="form-check-input" type="checkbox" id="anti-link" checked="">
                                <input v-else v-model="settings.antilink" class="form-check-input" type="checkbox" id="anti-link">
                                <label class="form-check-label" for="anti-link">Anti Link</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input v-if="settings.antibadworlds" v-model="settings.antibadworlds" class="form-check-input" type="checkbox" id="anti-bad-words" checked="">
                                <input v-else v-model="settings.antibadworlds" class="form-check-input" type="checkbox" id="anti-bad-words">
                                <label class="form-check-label" for="anti-bad-words">Anti Bad Words</label>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()">Enregistrer</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title">🧱 Configuration :</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label" for="ignored-channels">Channels ignorées :</label>
                            <Multiselect
                            v-model="ignored.channels.value"
                            v-bind="ignored.channels" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="ignored-roles">Roles ignorées :</label>
                            <Multiselect
                            v-model="ignored.roles.value"
                            v-bind="ignored.roles" />
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()">Enregistrer</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'

export default {
  name: 'AutoMod',
  components: {
    Multiselect
  },
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {},
      ignored: {
        roles: {
          mode: 'tags',
          value: [''],
          closeOnSelect: false,
          max: 6,
          options: [
            { value: 'batman', label: 'Batman' },
            { value: 'robin', label: 'Robin' },
            { value: 'joker', label: 'Joker' }
          ],
          searchable: false,
          createTag: true
        },
        channels: {
          mode: 'tags',
          value: [''],
          closeOnSelect: false,
          max: 6,
          options: [
            { value: 'batman', label: 'Batman' },
            { value: 'robin', label: 'Robin' },
            { value: 'joker', label: 'Joker' }
          ],
          searchable: false,
          createTag: true
        }
      }
    }
  },
  beforeMount: async function () {
    fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/auto-mod`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'http://localhost:3000/login'
      } else {
        this.settings = json
        this.ignored.roles.options = json.roles
        this.ignored.channels.options = json.channels

        this.ignored.roles.value = json.ignoredRoles
        this.ignored.channels.value = json.ignoredChannels
      }
    })
  },
  created: async function () {
    if (!this.guild) {
      window.location.href = '/404'
    }
  },
  methods: {
    async postContent () {
      const ignoreds = {
        ignored_roles: this.ignored.roles.value,
        ignored_channels: this.ignored.channels.value
      }
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/auto-mod`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign(this.settings, ignoreds))
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        } else {
          this.settings = json
        }
      })
    }
  }
}
</script>

<style src="@/assets/scss/multiselect.css"></style>
