<template>
  <v-container pa-0>
    <v-layout>
      <v-flex style="margin-bottom: 55px;"><br/>
        <p style="font-size: 18px; color: #1e88e5; margin-left: 15px">Suggestion and Feedback :</p>
        <v-textarea
          style="margin-left: 15px; margin-right: 15px; margin-top: 10px;"
          name="input-7-1"
          type="text"
          rows=7
          box outline
          label="Suggestions/Feedback"
          auto-grow
          value="">
        </v-textarea>
        <p style="font-size: 18px; color: #1e88e5; margin-left: 15px">Review :</p>
        <v-rating
          v-model="rating"
          size="56"></v-rating><br/>
        <center><v-btn
          outline large
          color="#1e88e5">Submit
        </v-btn></center>
      </v-flex>
    </v-layout>
  </v-container>
</template>
