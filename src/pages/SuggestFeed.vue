<template lang="html">
  <v-app>
    <titlebar :showbackarrow="true"></titlebar>
    <v-content style="margin-top: 55px">
      <suggestfeedback/>
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
import suggestfeedback from '@/components/SuggestFeedback.vue'
export default {
  components:{
    titlebar,
    suggestfeedback,
    bottomnavigation
  }
}
</script>

<style lang="css">
</style>
