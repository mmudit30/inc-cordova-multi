<template lang="html">
  <v-app>
    <titlebar/>
    <bottomnavigation/>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
export default {
  components:{
    bottomnavigation,
    titlebar
  }
}
</script>

<style lang="css">
</style>
