<template>
  <v-container pa-0 ma-0>
    <v-layout style="display: block;">
      <v-list>
        <v-list-tile
          @click="servicelist = services.servicelist"
          v-for="services in servicelist"
          :key="services.title">
          <span style="font-size: 20px">{{services.title}}</span>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
  export default {

    data () {
      return {
        servicelist: [
          {},
          {
            title: 'Medical',
            servicelist: [
              {},
              {title: 'Buy Medicines'},
              {title: 'Take an Appointment'},
              {title: 'Call an Ambulance'},
              {title: 'Health Checkup'},
              {title: 'Physiotherapy'},
              {title: 'Medical/Nursing Assistant'}
            ]
          },
          {
            title: 'Tiffin Service'
          },
          {
            title: 'Housekeeping and Maintainence',
            servicelist: [
              {},
              {title: 'Maid'},
              {title: 'Gardener'},
              {title: 'Plumber'},
              {title: 'Electrician'},
              {title: 'Mechanic'},
              {title: 'Pest Control'},
              {title: 'Painter'},
              {title: 'Carpenter'}
            ]
          },
          {
            title: 'Legal Consultancy',
            servicelist: [
              {},
              {title: 'Call a Lawyer'}
            ]
          },
          {
            title: 'Financial Consultancy',
            servicelist: [
              {},
              {title: 'Call a Financer'}
            ]
          },
          {
            title: 'Transportation',
            servicelist: [
              {},
              {title: 'Call a Cab/Taxi'},
              {title: 'Call a Transporter'}
            ]
          },
          {
            title: 'Buy Grocery'
          },
          {
            title: 'Personal Care',
            servicelist: [
              {},
              {title: 'Call a Barber'},
              {title: 'Personal Care Assistant'},
              {title: 'Buy Personal Care Products'}
            ]
          },
          {
            title: 'Miscellaneaous'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
