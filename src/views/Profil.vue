<template>
  <div class="about">
    <h1>Profil :</h1>
  </div>
</template>

<script>

export default {
  name: 'Profil',
  beforeMount() {
      this.axios.get(`http://localhost:3000/user`, { withCredentials: true })
      .then(res => { console.log(res) })
  }
}
</script>
