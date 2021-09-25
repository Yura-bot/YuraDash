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
                            <h5 class="card-title"><u>🎖️ Configuration De L'autorole :</u></h5><br>
                            <div class="mb-3">
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
    </div>
</template>
<script>
import Multiselect from '@vueform/multiselect'

export default {
  name: 'AutoRole',
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
        max: 2,
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
  created: async function () {
    if (!this.guild) {
      window.location.href = '/404'
    }
  }
}
</script>

<style src="@/assets/scss/multiselect.css"></style>
