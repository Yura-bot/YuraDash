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
                            <h5 class="card-title"><u>{{ t('settings.ticket.title') }}</u></h5><br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">{{ t('settings.ticket.category') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.category" name="categorie" id="categorie" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildCategory" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">{{ t('settings.ticket.channel') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.channel" name="salon" id="salon" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildChannels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">{{ t('settings.ticket.role') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.role" name="role" id="role" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildRoles" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()" v-on:click="sucessToast()">{{ t('settings.save') }}</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="suppContent()" v-on:click="sucessToast()">{{ t('settings.del') }}</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

import { useI18n } from 'vue-i18n'

export default {
  name: 'Ticket',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {}
    }
  },
  beforeMount: async function () {
    fetch(`https://api.yurabot.xyz/extensions/${this.$route.params.id}/ticket`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'https://api.yurabot.xyz/login'
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
        fetch(`https://api.yurabot.xyz/extensions/${this.$route.params.id}/ticket`, {
          credentials: 'include',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.settings)
        }).then(async res => {
          const json = await res.json()

          if (json.error) {
            window.location.href = 'https://api.yurabot.xyz/login'
          } else {
            this.settings = json
          }
        })
      } else {
        createToast('Erreur : Veuillez bien renseigner toutes les informations..', {
          type: 'danger',
          hideProgressBar: 'true',
          transition: 'bounce',
          showIcon: 'true'
        })
      }
    },
    async suppContent () {
      fetch(`https://api.yurabot.xyz/extensions/${this.$route.params.id}/ticket`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ disabled: true })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'https://api.yurabot.xyz/login'
        } else {
          this.settings = json
        }
      })
    }
  },
  setup () {
    const sucessToast = () => {
      createToast('Données sauvegardées !', {
        type: 'success',
        hideProgressBar: 'true',
        transition: 'bounce',
        showIcon: 'true'
      })
    }
    const errorToast = () => {
      createToast('Données sauvegardées !', {
        type: 'danger',
        hideProgressBar: 'true',
        transition: 'bounce',
        showIcon: 'true'
      })
    }

    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { sucessToast, errorToast, t }
  }
}
</script>
