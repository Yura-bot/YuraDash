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
                            <h5 class="card-title"><u>😢 Configuration Du Message De Départ :</u></h5><br>
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
                                    <textarea class="form-control" id="welcomeMessage" type="text" name="welcomeMessage" placeholder="Votre message !" rows="5" data-form-type="other"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="choices-single-default">Channel :</label>
                                <select class="form-select" data-trigger="" name="choices-single-default" id="choices-single-default" data-dashlane-rid="1ca9744c335a7d71" data-form-type="other">
                                    <option value="5466">#abc</option>
                                    <option value="Choice 1">Choice 1</option>
                                    <option value="Choice 2">Choice 2</option>
                                    <option value="Choice 3">Choice 3</option>
                                </select>
                            </div>
                            <span class="badge rounded-pill bg-danger">Important :</span><br>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="embed" Checked="">
                                <label class="form-check-label pl-2" for="embed">Embed ?</label>
                            </div>
                            <br>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="imgbvn">
                                <label class="form-check-label pl-2" for="imgbvn">Image de départ ?</label>
                            </div>
                            <br><br>
                            <span class="badge rounded-pill bg-info text-dark">Info  :</span>
                            <p>Si vous voulez utiliser l'image vous devez activer l'embed !</p>
                            <br>
                            <h5><u>Configuration de l'image de départ :</u></h5>
                            <br>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">Choississez la couleur de l'image pour le fond :</label>
                                <input type="color" class="form-control" id="colorBack" value="#50b5ff" data-form-type="other">
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="colorBack">Choississez la couleur de l'image pour le fond :</label>
                                <input type="color" class="form-control" id="colorBack" value="#50b5ff" data-form-type="other">
                            </div>
                            <div class="mb-3">
                                <label for="imgLink" class="form-label">Mettez l'url d'une image de fond :</label>
                                <input type="text" class="form-control" id="imgLink" value="" maxlength="3" minlength="1" name="imgLink" placeholder="Votre lien.." title="" data-form-type="other">
                            </div>
                            <span class="badge rounded-pill bg-info text-dark">Info  :</span>
                            <p>Vous pouvez héberger gratuitement votre image sur ce site : <a target="blank" href="https://goopics.net">https://goopics.net</a><br><strong>Attention seul le lien direct marche !!!</strong></p>
                            <br>
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
  name: 'Goodbye',
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id)
    }
  },
  created: async function () {
    if (!this.guild) {
      window.location.href = '/404'
    }
  }
}
</script>
