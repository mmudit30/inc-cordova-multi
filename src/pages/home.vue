<template lang="html">
  <v-app style="background-color: #ffffff">
    <titlebar/>
    <servicelist style="margin-top: 55px;"/>
    <bottomnavigation/>
  </v-app>
</template>

<script>
/* eslint-disable */
import bottomnavigation from '@/components/BottomNavigation.vue'
import titlebar from '@/components/Titlebar.vue'
import servicelist from '@/components/ServiceList.vue'
export default {
  components:{
    bottomnavigation,
    servicelist,
    titlebar
  }
}
</script>

<style lang="css">
</style>
