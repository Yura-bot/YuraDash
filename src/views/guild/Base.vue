<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            {{ guild.name }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title"><u>📝 Configuration Basique :</u></h5><br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Prefix du bot sur ce serveur :</label>
                                <input type="text" class="form-control" v-model="settings.prefix" id="prefix" maxlength="3" minlength="1" name="prefix" placeholder="Votre prefix" title="" data-form-type="other">
                            </div>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Langue du bot sur ce serveur :</label>
                                <select class="form-select mb-3 shadow-none" aria-label=".form-select-lg example" v-model="settings.guildLanguage">
                                    <option v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.suggestionEnabled" type="checkbox" class="form-check-input" id="suggest?" v-model="settings.suggestionEnabled" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="suggest?" v-model="settings.suggestionEnabled">
                                <label class="form-check-label pl-2" for="suggest?">Activer les suggestions ?</label>
                            </div>
                            <br><br>
                            <div class="form-group">
                                <label class="form-label" for="suggestChannel">Suggestion Channel :</label>
                                <select class="form-select" data-trigger="" v-model="settings.suggestionChannel" name="suggestChannel" id="suggestChannel" data-form-type="other">
                                    <option v-for="(value, name) in settings.channels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="muteRole">Mute role :</label>
                                <select class="form-select" data-trigger="" v-model="settings.muteRole" name="muteRole" id="muteRole" data-form-type="other">
                                    <option v-if="settings.muteRole" value="001" selected="">#{{ settings.muteRole }}</option>
                                    <option v-for="(value, name) in settings.roles" :key="name" :value="name">{{ value }}</option>
                                    <option value="null">Desactivate</option>
                                </select>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()">Enregistrer</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Base',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {
        channels: {},
        roles: {},
        prefix: '?',
        guildLanguage: 'en',
        suggestionEnabled: false,
        suggestionChannel: null,
        muteRole: null
      },
      langs: ['en', 'fr']
    }
  },
  beforeMount: async function () {
    fetch(`http://localhost:3000/serveurs/${this.$route.params.id}`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'http://localhost:3000/login'
      } else {
        this.settings = json
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
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.settings)
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
