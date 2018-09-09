<template><div id="app">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-14">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Aapki Seva Mein</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="Help"
                    target="_blank"
                    slot="activator"
                  ><v-icon large>help</v-icon>
                  </v-btn>
                  <span>Help</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-flex xs12>
            <v-text-field
              value="Enter the 4 digit OTP sent on your phone"
              disabled
              readonly
            ></v-text-field>
          </v-flex>

                  <v-flex>
                    <v-text-field id="align"
                    type="number"
                    prepend-inner-icon="key"
                    single-line
                    outline
                    v-model = "otp"
                    :rules="phoneRules"
                    ></v-text-field>
                  </v-flex>

                  <v-card-actions>
                    <v-btn
                    large
                    depressed
                    block
                    color="primary"
                    >Confirm OTP</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div></template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        otp: '',
        phoneRules: [
          v => !!v || 'OTP required',
          v => v.length === 4 || 'Enter valid OTP'
        ],
        rules: {
          required: value => !!value || 'Required.',
          email: v => /.+@.+/.test(v) || 'E-mail must be valid'

        }

      }
    },
    computed: {
    }
  }
  </script>
<style >
  #align{
    text-align:center;
  }
</style>
