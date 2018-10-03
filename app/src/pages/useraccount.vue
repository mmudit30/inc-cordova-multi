<template lang="html">
  <v-app>
    <titlebar :showbackarrow="true"></titlebar>
    <v-content style="margin-top: 55px">
      <useraccount/>
    </v-content>
    <v-footer>
      <bottomnavigation/>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
import useraccount from '@/components/UserAccount.vue'
export default {
  components:{
    titlebar,
    useraccount,
    bottomnavigation
  }
}
</script>

<style lang="css">
</style>
