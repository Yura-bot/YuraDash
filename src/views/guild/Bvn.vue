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
                            <h5 class="card-title"><u>{{ t('settings.bvn.title') }}</u></h5><br>
                            <div class="mb-3">
                                <p>
                                    <u>{{ t('settings.var.title') }}</u><br>
                                    {{ t('settings.var.mention') }} <mark>{member}</mark><br>
                                    {{ t('settings.var.pseudo') }} <mark>{user}</mark><br>
                                    {{ t('settings.var.tag') }} <mark>{tag}</mark><br>
                                    {{ t('settings.var.id') }} <mark>{memberid}</mark><br>
                                    {{ t('settings.var.server') }} <mark>{server}</mark><br>
                                    {{ t('settings.var.membercount') }} <mark>{membercount}</mark><br>

                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="form-label" for="welcomeMessage">{{ t('settings.bvn.msg') }}</label>
                                    <textarea class="form-control" id="welcomeMessage" type="text" name="welcomeMessage" v-model="settings.welcomeMessage" rows="5" data-form-type="other" maxlength="2000"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="choices-single-default">{{ t('settings.bvn.channel') }}</label>
                                <select class="form-select" data-trigger="" v-model="settings.welcomeChannel" name="welcomeChannel" id="welcomeChannel" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildChannels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <span class="badge rounded-pill bg-danger">{{ t('settings.repet.important') }}</span><br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.welcomeEmbedEnabled" type="checkbox" class="form-check-input" id="embed" v-model="settings.welcomeEmbedEnabled" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="embed" v-model="settings.welcomeEmbedEnabled">
                                <label class="form-check-label pl-2" for="embed">{{ t('settings.repet.embed') }}</label>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.welcomeImage" type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.welcomeImage" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.welcomeImage">
                                <label class="form-check-label pl-2" for="imgbvn">{{ t('settings.bvn.img') }}</label>
                            </div>
                            <br><br>
                            <span class="badge rounded-pill bg-info text-dark">{{ t('settings.repet.info') }}</span>
                            <p>{{ t('settings.repet.embed_warrning') }}</p>
                            <br>
                            <h5><u>{{ t('settings.bvn.config_img') }}</u></h5>
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
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><u>{{ t('settings.bvn.private.title') }}</u></h5><br>
                            <div class="mb-3">
                                <p>
                                    <u>{{ t('settings.var.title') }}</u><br>
                                    {{ t('settings.var.mention') }} <mark>{member}</mark><br>
                                    {{ t('settings.var.pseudo') }} <mark>{user}</mark><br>
                                    {{ t('settings.var.tag') }} <mark>{tag}</mark><br>
                                    {{ t('settings.var.id') }} <mark>{memberid}</mark><br>
                                    {{ t('settings.var.server') }} <mark>{server}</mark><br>
                                    {{ t('settings.var.membercount') }} <mark>{membercount}</mark><br>

                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="form-label" for="welcomeMessage">{{ t('settings.bvn.msg') }}</label>
                                    <textarea class="form-control" id="welcomeMessage" type="text" v-model="settings.welcomeMpMessage" name="welcomeMessage" rows="5" data-form-type="other"></textarea>
                                </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postMp()" v-on:click="sucessToast()">{{ t('settings.activate') }}</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="delMp()" v-on:click="sucessToast()">{{ t('settings.desactivate') }}</button>
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
  name: 'Bvn',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {}
    }
  },
  beforeMount: async function () {
    fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/welcome`, {
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
    async postBase () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/welcome`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign(this.settings, { welcomeEnabled: true }))
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async postMp () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/welcome`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ welcomeMpEnabled: true, welcomeMpMessage: this.settings.welcomeMpMessage })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async delBase () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/welcome`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ welcomeEnabled: false })
      }).then(async res => {
        const json = await res.json()

        if (json.error) {
          window.location.href = 'http://localhost:3000/login'
        }
      })
    },
    async delMp () {
      fetch(`http://localhost:3000/serveurs/${this.$route.params.id}/tools/welcome`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ welcomeMpEnabled: false, welcomeMpMessage: null })
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
