<template>
    <v-container>
      <v-layout>
        <v-flex>
          <br/>
          <span style="font-size:20px; color:blue;">Email</span>
          <v-text-field
            ref = "email"
            input = "email"
            v-model = "email"
            v-validate="'required|email'"
            required box single-line outline>
          </v-text-field>
          <span style="font-size:20px; color:blue;">Password</span>
          <v-text-field
            v-model="password"
            :type="'password'"
            box single-line outline>
          </v-text-field>
          <br/>
          <div style="margin-left: 40px; margin-right: 40px">
            <v-btn outline large block
              :to="`${'/home'}`"
              color="primary">Log in</v-btn>
          </div>
          <br/><br/><br/>
          <div style="margin-left: 20px; margin-right: 20px">
            <v-btn large block outline color="primary">Log in with Phone Number</v-btn>
            <div style="margin-top: 20px"></div>
            <v-btn outline large block color="primary">Create a New Account</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        show1: true
      }
    }
  }
</script>
