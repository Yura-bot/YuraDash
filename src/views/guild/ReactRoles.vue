<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid" src="@/assets/images/comming_soon.png"/>
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
  name: 'ReactRoles',
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
