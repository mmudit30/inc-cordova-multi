<template>
  <v-container pa-0>
    <v-layout>
      <v-container grid-list>
        <v-card>
          <v-card-text>
            <v-form>
              <div style="margin-bottom: 10px;">
                <span style="font-size: 20px; color: blue">Phone Number</span>
              </div>
              <v-text-field
                type="number"
                label="Enter your Number here"
                single-line outline v-model="phone"
                v-validate="`required|digits:10`">
              </v-text-field>
              <v-card-actions>
                <v-btn large outline block color="primary">Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card><br/>
        <v-card>
          <v-card-text>
            <v-form>
              <div style="margin-bottom: 10px">
                <span style="font-size: 20px; color: blue;">Enter OTP</span>
              </div>
              <v-text-field
                label="OTP"
                type="number"
                single-line
                outline
                v-validate="`required|digits:4`">
              </v-text-field>
              <v-card-actions>
                <v-btn large outline block color="primary">Confirm OTP</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
    }
  }
  </script>
