<template>
    <v-container>
      <v-layout>
        <v-flex>
          <br/>
          <span style="font-size:20px; color:blue;">Phone Number</span>
          <v-text-field
            ref = "Phone"
            input = "number"
            v-model = "phone"
            v-validate="`required|digits:10`"
            required box single-line outline>
          </v-text-field>
          <span style="font-size:20px; color:blue;">Pin Number</span>
          <v-text-field
            v-model="password"
            name="input-10-1"
            input = "number"
            v-validate="`required|digits:4`"
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
            <v-btn large block outline
              color="primary">Log in with Email</v-btn>
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
        phone: '',
        password: '',
        show1: true
      }
    }
  }
</script>
