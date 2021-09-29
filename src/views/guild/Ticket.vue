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
                            <h5 class="card-title"><u>📚 Configuration Du Système De Ticket :</u></h5><br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Catégorie :</label>
                                <select class="form-select" data-trigger="" v-model="settings.category" name="categorie" id="categorie" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildCategory" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Salon :</label>
                                <select class="form-select" data-trigger="" v-model="settings.channel" name="salon" id="salon" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildChannels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Support role :</label>
                                <select class="form-select" data-trigger="" v-model="settings.role" name="role" id="role" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildRoles" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()">Enregistrer</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="suppContent()">Supprimer</button>
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
  name: 'Ticket',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {}
    }
  },
  beforeMount: async function () {
    fetch(`http://localhost:3000/extensions/${this.$route.params.id}/ticket`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'http://localhost:3000/login'
      } else {
        console.log(json)
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
      if (this.settings.category && this.settings.channel && this.settings.role) {
        fetch(`http://localhost:3000/extensions/${this.$route.params.id}/ticket`, {
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
    },
    async suppContent () {
      fetch(`http://localhost:3000/extensions/${this.$route.params.id}/ticket`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ disabled: true })
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
