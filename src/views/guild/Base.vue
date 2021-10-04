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
                            <h5 class="card-title"><u>{{ t('settings.base.title') }}</u></h5><br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">{{ t('settings.base.prefix') }}</label>
                                <input type="text" class="form-control" v-model="settings.prefix" id="prefix" maxlength="3" minlength="1" name="prefix" title="" data-form-type="other">
                            </div>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">{{ t('settings.base.lang') }}</label>
                                <select class="form-select mb-3 shadow-none" aria-label=".form-select-lg example" v-model="settings.guildLanguage">
                                    <option v-for="lang in langs" :key="lang" :value="lang">{{ lang }}</option>
                                </select>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.suggestionEnabled" type="checkbox" class="form-check-input" id="suggest?" v-model="settings.suggestionEnabled" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="suggest?" v-model="settings.suggestionEnabled">
                                <label class="form-check-label pl-2" for="suggest?">{{ t('settings.base.suggest') }}</label>
                            </div>
                            <br><br>
                            <div class="form-group">
                                <label class="form-label" for="suggestChannel">{{ t('settings.base.suggest_channel') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.suggestionChannel" name="suggestChannel" id="suggestChannel" data-form-type="other">
                                    <option v-for="(value, name) in settings.channels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="muteRole">{{ t('settings.base.mute') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.muteRole" name="muteRole" id="muteRole" data-form-type="other">
                                    <option v-for="(value, name) in settings.roles" :key="name" :value="name">{{ value }}</option>
                                    <option value="null">Desactivate</option>
                                </select>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()" v-on:click="sucessToast()">{{ t('settings.save') }}</button>
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
    fetch(`https://api.yurabot.xyz/serveurs/${this.$route.params.id}`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'https://api.yurabot.xyz/login'
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
      fetch(`https://api.yurabot.xyz/serveurs/${this.$route.params.id}`, {
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
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { sucessToast, t }
  }
}
</script>
