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
                            <h5 class="card-title"><u>👋 Configuration Du Message De Bienvenue :</u></h5><br>
                            <div class="mb-3">
                                <p>
                                    <u>Liste des variables :</u><br>
                                    ➜ Mentionner le membre : <mark>{member}</mark><br>
                                    ➜ Afficher le pseudo du membre : <mark>{user}</mark><br>
                                    ➜ Donne le tag du membre : <mark>{tag}</mark><br>
                                    ➜ Donne l'id du membre : <mark>{memberid}</mark><br>
                                    ➜ Affiche le nom du serveur : <mark>{server}</mark><br>
                                    ➜ Donne le nombre de membres du serveur : <mark>{membercount}</mark><br>

                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="form-label" for="welcomeMessage">Configurez votre message de bienvenue :</label>
                                    <textarea class="form-control" id="welcomeMessage" type="text" name="welcomeMessage" v-model="settings.welcomeMessage" placeholder="Votre message !" rows="5" data-form-type="other" maxlength="2000"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="choices-single-default">Channel :</label>
                                <select class="form-select" data-trigger="" v-model="settings.welcomeChannel" name="welcomeChannel" id="welcomeChannel" data-form-type="other">
                                    <option v-for="(value, name) in settings.guildChannels" :key="name" :value="name">{{ value }}</option>
                                </select>
                            </div>
                            <span class="badge rounded-pill bg-danger">Important :</span><br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.welcomeEmbedEnabled" type="checkbox" class="form-check-input" id="embed" v-model="settings.welcomeEmbedEnabled" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="embed" v-model="settings.welcomeEmbedEnabled">
                                <label class="form-check-label pl-2" for="embed">Embed ?</label>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input v-if="settings.welcomeImage" type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.welcomeImage" Checked="">
                                <input v-else type="checkbox" class="form-check-input" id="imgbvn" v-model="settings.welcomeImage">
                                <label class="form-check-label pl-2" for="imgbvn">Image de bienvenue ?</label>
                            </div>
                            <br><br>
                            <span class="badge rounded-pill bg-info text-dark">Info  :</span>
                            <p>Si vous voulez utiliser l'image vous devez activer l'embed !</p>
                            <br>
                            <h5><u>Configuration de l'image de bienvenue :</u></h5>
                            <br>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">Choississez la couleur de l'image pour le fond :</label>
                                <input type="color" class="form-control" id="colorBack" v-model="settings.colorImage" data-form-type="other">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">Choississez la couleur de l'image pour le titre :</label>
                                <input type="color" class="form-control" id="colorBack" v-model="settings.colorImageTitle" data-form-type="other">
                            </div>
                            <div class="mb-3">
                                <label for="imgLink" class="form-label">Mettez l'url d'une image de fond :</label>
                                <input type="text" class="form-control" id="imgLink" v-model="settings.imageURL" name="imgLink" placeholder="Votre lien.." title="" data-form-type="other" maxlength="100">
                            </div>
                            <span class="badge rounded-pill bg-info text-dark">Info  :</span>
                            <p>Vous pouvez héberger gratuitement votre image sur ce site : <a target="blank" href="https://goopics.net">https://goopics.net</a><br><strong>Attention seul le lien direct marche !!!</strong></p>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postBase()" v-on:click="sucessToast()">Activer</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="delBase()" v-on:click="sucessToast()">Désactiver</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><u>👋 Configuration En Message Privé :</u></h5><br>
                            <div class="mb-3">
                                <p>
                                    <u>Liste des variables :</u><br>
                                    ➜ Mentionner le membre : <mark>{member}</mark><br>
                                    ➜ Afficher le pseudo du membre : <mark>{user}</mark><br>
                                    ➜ Donne le tag du membre : <mark>{tag}</mark><br>
                                    ➜ Donne l'id du membre : <mark>{memberid}</mark><br>
                                    ➜ Affiche le nom du serveur : <mark>{server}</mark><br>
                                    ➜ Donne le nombre de membres du serveur : <mark>{membercount}</mark><br>

                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-group">
                                    <label class="form-label" for="welcomeMessage">Configurez votre message de bienvenue :</label>
                                    <textarea class="form-control" id="welcomeMessage" type="text" v-model="settings.welcomeMpMessage" name="welcomeMessage" placeholder="Votre message !" rows="5" data-form-type="other"></textarea>
                                </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary" data-form-type="action" @click="postMp()" v-on:click="sucessToast()">Activer</button>
                            -- <button type="submit" class="btn btn-danger" data-form-type="action" @click="delMp()" v-on:click="sucessToast()">Désactiver</button>
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
    return { sucessToast }
  }
}
</script>
