<template>
    <v-container>
      <v-layout>
        <v-flex>
          <br/><br/>
          <v-text-field
            ref = "Phone"
            prepend-icon="fa fa-mobile"
            type="number"
            v-model = "phone"
            :rules="phoneRules"
            label="+91-XXX-YYY-ZZZZ"
            required
          >
          </v-text-field><br/>
          <v-text-field
            prepend-icon="fas fa-key"
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'password' : 'text'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
          <br/><br>
          <v-btn outline justify-end row depressed color="primary">Log in</v-btn>
          <br/><br/>  <br/><br/>
          <v-btn
          large block depressed color="primary"
          >
            <i class="fas fa-envelope"></i>&nbsp;
            Log in with Email
          </v-btn>
          <v-btn large block depressed color="primary">Create a New Account</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        phone: '',
        phoneRules: [
          v => !!v || 'Phone is required',
          v => v.length === 10 || 'Enter valid number'
        ],
        password: '',
        show1: true,
        rules: {
          required: value => !!value || 'Required.',
          phoneMatch: () => ('The Phone and password you entered don\'t match')
        }
      }
    }
  }
</script>
