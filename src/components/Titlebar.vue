<template>
  <v-app light>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-btn
      outline color="blue"
      :v-show="filter.backbutton"
      :onClick="consoleClick"
      >Back</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title" text-xs-center></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      outline color="blue"
      :onClick="consoleClick"
      >Help</v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
