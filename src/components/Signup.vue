
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
                  >
                    <v-icon large>help</v-icon>
                  </v-btn>
                  <span>help</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                  prepend-icon="person"
                  name="name"
                  label="Name"
                  id="name"
                  type="text"
                  :rules="[rules.required, rules.name]"
                  VeeValidate="'required'">
                  </v-text-field>

                  <v-text-field
                  prepend-icon="email"
                  name="email"
                  label="Email Id"
                  type="email"
                  :rules="[rules.required, rules.email]"
                  >
                  
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                  :append-icon="show1 ? 'visibility_off' : 'visibility'"
                  :type="show1 ? 'text' : 'password'"

                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                  :rules="[rules.required, rules.password]"
                  ref="password">
                </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="cpassword"
                  label="Confirm Password"
                  id="cpassword"
                  type="password"
                  v-validate="'confirmed:password'"
                >
                  </v-text-field>
                  <v-card-actions>

                    <v-btn
                    large
                    depressed
                    block
                    color="primary"
                    >Sign Up</v-btn>
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
