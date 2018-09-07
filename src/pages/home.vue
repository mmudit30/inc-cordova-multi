<template lang="html">
  <v-app>
    <titlebar/>
    <login/>
    <bottomnavigation/>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
import login from '@/components/phoneLogin.vue'
export default {
  components:{
    bottomnavigation,
    titlebar,
    login
  }
}
</script>

<style lang="css">
</style>
