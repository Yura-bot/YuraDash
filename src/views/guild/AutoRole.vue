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
                            <h5 class="card-title"><u>{{ t('settings.autorole.title') }}</u></h5><br>
                            <div class="mb-3">
                                <Multiselect
                                v-model="multiselect.value"
                                v-bind="multiselect" />
                                <br>
                                <button type="submit" class="btn btn-primary" data-form-type="action" @click="postContent()" v-on:click="sucessToast()">{{ t('settings.save') }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'

import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

import { useI18n } from 'vue-i18n'

export default {
  name: 'AutoRole',
  components: {
    Multiselect
  },
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      settings: {},
      multiselect: {
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
  },
  beforeMount: async function () {
    fetch(`https://api.yurabot.xyz/serveurs/${this.$route.params.id}/tools/autorole`, {
      credentials: 'include'
    }).then(async res => {
      const json = await res.json()

      if (json.error) {
        window.location.href = 'https://api.yurabot.xyz/login'
      } else {
        this.settings = json
        this.multiselect.options = json.guildRoles
        this.multiselect.value = json.autoroleRole
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
      fetch(`https://api.yurabot.xyz/serveurs/${this.$route.params.id}/tools/autorole`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.multiselect.value)
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

<style src="@/assets/scss/multiselect.css"></style>
