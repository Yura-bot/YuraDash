<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">⚙ Configuration De L'auto Modération :</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mb-3 form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="anti-raid" Cchecked="">
                                <label class="form-check-label" for="anti-raid">Anti Raid</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="anti-pub" Cchecked="">
                                <label class="form-check-label" for="anti-pub">Anti Pub</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="anti-link" Cchecked="">
                                <label class="form-check-label" for="anti-link">Anti Link</label>
                            </div>
                            <div class="mb-3 form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="anti-bad-words" Cchecked="">
                                <label class="form-check-label" for="anti-bad-words">Anti Bad Words</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title">🧱 Configuration :</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label class="form-label" for="ignored-channels">Channels ignorées :</label>
                            <Multiselect
                            v-model="multiselect.value"
                            v-bind="multiselect" />
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="ignored-roles">Roles ignorées :</label>
                            <Multiselect
                            v-model="multiselect.value"
                            v-bind="multiselect" />
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

export default {
  name: 'AutoMod',
  components: {
    Multiselect
  },
  data () {
    return {
      guild: this.$store.state.user.guilds.find(el => el.id === this.$route.params.id),
      multiselect: {
        mode: 'tags',
        value: [''],
        closeOnSelect: false,
        options: [
          { value: 'batman', label: 'Batman' },
          { value: 'robin', label: 'Robin' },
          { value: 'joker', label: 'Joker' },
          { value: 'max', label: 'Maximilluer123554545454545454545454' },
          { value: 'babab', label: 'vababababa' }
        ],
        searchable: false,
        createTag: true
      }
    }
  },
  created: async function () {
    if (!this.guild) {
      window.location.href = '/404'
    }
  }
}
</script>

<style src="@/assets/scss/multiselect.css"></style>
