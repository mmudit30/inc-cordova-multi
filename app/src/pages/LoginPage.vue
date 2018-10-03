<template lang="html">
  <v-app>
    <titlebar :showbackarrow="false"></titlebar>
    <v-content>
      <phonelogin style="margin-top: 55px;"/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import titlebar from '@/components/Titlebar.vue'
import phonelogin from '@/components/PhoneLogin.vue'
export default {
  components:{
    titlebar,
    phonelogin
  }
}
</script>

<style lang="css">
</style>
