<template>
  <v-footer
    fixed
  >
    <v-card
      class="flex"
      >
      <v-card-title       class="blue lighten-5">
        <strong class="indigo--text" ><h2>Aapki Sevame &copy;2018</h2></strong>

        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          icon
        >
          <v-icon class="indigo--text" size="25px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>
