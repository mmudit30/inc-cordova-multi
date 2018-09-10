<template lang="html">
  <div class="">
  <v-toolbar fixed flat>
    <v-btn v-show="showbackarrow" outline color="blue"><font-awesome-icon icon="arrow-left"/>&nbsp;Back</v-btn>
    <v-spacer></v-spacer>
    <v-btn outline color="blue">Help&nbsp;<font-awesome-icon icon="question-circle" /></v-btn>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
</div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    showbackarrow: Boolean,
  }
}
</script>

<style lang="css">
</style>
