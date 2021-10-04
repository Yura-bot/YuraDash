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
                            <h5 class="card-title"><u>{{ t('settings.goodbye.title') }}</u></h5><br>
                            <div class="mb-3">
                                <p>
                                    <u>{{ t('settings.var.title') }}</u><br>
                                    {{ t('settings.var.pseudo') }} <mark>{user}</mark><br>
                                    {{ t('settings.var.tag') }} <mark>{tag}</mark><br>
                                    {{ t('settings.var.id') }} <mark>{memberid}</mark><br>
                                    {{ t('settings.var.server') }} <mark>{server}</mark><br>
                                    {{ t('settings.var.membercount') }} <mark>{membercount}</mark><br>

                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="form-label" for="goodbyeMessage">{{ t('settings.goodbye.msg') }}</label>
                                    <textarea class="form-control" id="goodbyeMessage" type="text" name="goodbyeMessage" v-model="settings.goodbyeMessage" rows="5" data-form-type="other" maxlength="2000"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="choices-single-default">{{ t('settings.goodbye.channel') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.goodbyeChannel" name="goodbyeChannel" id="goodbyeChannel" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildChannels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <span class="badge rounded-pill bg-danger">{{ t('settings.repet.important') }}</span><br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.goodbyeEmbedEnabled" type="checkbox" class="form-check-input" id="embed" v-model="settings.goodbyeEmbedEnabled" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="embed" v-model="settings.goodbyeEmbedEnabled">
                                <label class="form-check-label pl-2" for="embed">{{ t('settings.repet.embed') }}</label>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.goodbyeImage" type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.goodbyeImage" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.goodbyeImage">
                                <label class="form-check-label pl-2" for="imgbvn">{{ t('settings.goodbye.img') }}</label>
                            </div>
                            <br><br>
                            <span class="badge rounded-pill bg-info text-dark">{{ t('settings.repet.info') }}:</span>
                            <p>{{ t('settings.repet.embed_warrning') }}</p>
                            <br>
                            <h5><u>{{ t('settings.goodbye.config_img') }}</u></h5>
                            <br>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">{{ t('settings.repet.fond') }}</label>
                                <input type="color" class="form-control" id="colorBack" v-model="settings.colorImage" data-form-type="other">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">{{ t('settings.repet.title') }}</label>
                                <input type="color" class="form-control" id="colorBack" v-model="settings.colorImageTitle" data-form-type="other">
                            </div>
                            <div class="mb-3">
                                <label for="imgLink" class="form-label">{{ t('settings.repet.url') }}</label>
                                <input type="text" class="form-control" id="imgLink" v-model="settings.imageURL" name="imgLink" title="" data-form-type="other" maxlength="100">
                            </div>
                            <span class="badge rounded-pill bg-info text-dark">{{ t('settings.repet.info') }}</span>
                             <p>{{ t('settings.repet.goopics') }} <a target="blank" href="https://goopics.net">https://goopics.net</a><br><strong>{{ t('settings.repet.direct_link') }}</strong></p>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postBase()" v-on:click="sucessToast()">{{ t('settings.activate') }}</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="delBase()" v-on:click="sucessToast()">{{ t('settings.desactivate') }}</button>
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
  name: 'Goodbye',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {}
    }
  },
  beforeMount: async function () {
    fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/goodbye`, {
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
    async postBase () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/goodbye`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign(this.settings, { goodbyeEnabled: true }))
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async postMp () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/goodbye`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ goodbyeMpEnabled: true, goodbyeMpMessage: this.settings.goodbyeMpMessage })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async delBase () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/goodbye`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ goodbyeEnabled: false })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async delMp () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/goodbye`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ goodbyeMpEnabled: false, goodbyeMpMessage: null })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
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
