<template>
  <v-container pa-0>
    <v-layout>
      <v-flex style="margin-bottom: 80px;"><br/>
        <p style="font-size: 18px; color: #1e88e5; margin-left: 15px">Phone Number :</p>
        <v-text-field
          style="margin-left: 15px; margin-right: 15px;"
          label="Phone Number"
          box outline
          value=""
          single-line>
        </v-text-field>
        <p style="font-size: 18px; color: #1e88e5; margin-left: 15px">E-mail :</p>
        <v-text-field
          style="margin-left: 15px; margin-right: 15px;"
          label="E-mail"
          box outline
          value=""
          single-line>
        </v-text-field>
        <p style="font-size: 18px; color: #1e88e5; margin-left: 15px">Delivery Address :</p>
        <v-textarea
          style="margin-left: 15px; margin-right: 15px; margin-top: 10px;"
          name="input-7-1"
          type="text"
          rows=7
          box outline
          label="Address"
          auto-grow
          value="">
        </v-textarea>
        <v-flex style="margin-left: 9px; margin-right: 9px;">
          <v-btn
            style="padding-left: 25px; padding-right: 25px;"
            outline large
            color="#1e88e5">Submit Changes
          </v-btn>
          <v-btn
            outline large
            color="#1e88e5">Cancel
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
