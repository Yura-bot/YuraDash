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
                                <select class="form-select mb-3 shadow-none" aria-label=".form-select-lg example">
                                    <option selected="" value="fr">Français</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Salon :</label>
                                <select class="form-select mb-3 shadow-none" aria-label=".form-select-lg example">
                                    <option selected="" value="fr">Français</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                            <br>
                            <div class="mb-3">
                                <label for="prefix" class="form-label">Support role :</label>
                                <select class="form-select mb-3 shadow-none" aria-label=".form-select-lg example">
                                    <option selected="" value="fr">Français</option>
                                    <option value="en">English</option>
                                </select>
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
export default {
  name: 'Ticket',
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
