<template>
  <v-container pa-0 fluid>
    <v-layout>
      <v-flex style="margin-bottom: 80px;">
        <v-img
          src="http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg"
          height="175px">
        </v-img>
        <v-card-title>
          <span style="font-size: 30px;">User_Name</span>
          <v-spacer></v-spacer>
          <v-icon style="font-size: 25px; color: #1e88e5">edit</v-icon>
        </v-card-title><br/>
        <v-flex style="margin-right:10px;">
          <p style="font-size: 18px; margin-left: 8px;"><v-icon style="margin-right: 10px; color: #1e88e5">call</v-icon>Phone Number : {{phonenumber}}</p>
          <p style="font-size: 18px; margin-left: 8px;"><v-icon style="margin-right: 10px; color: #1e88e5">email</v-icon>E-mail : {{email}}</p>
          <p style="font-size: 18px; margin-left: 8px;"><v-icon style="margin-right: 10px; color: #1e88e5">location_on</v-icon>Delivery Address :<br/>
          <v-textarea
            solo outline
            auto-grow
            name="input-7-4"
            label="Address :"
            style="margin-left: 35px; margin-right: 20px; margin-top: 10px"
            value='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' readonly>
          </v-textarea>
        </p>
        </v-flex>
        <v-flex  style="margin-right:10px;">
          <v-btn color="transparent" depressed style="font-size: 18px; margin-left: 15px; color: #1e88e5">Your Orders</v-btn>
          <v-btn color="transparent" depressed style="font-size: 18px; margin-left: 15px; color: #1e88e5">Change Password/Pin</v-btn>
          <v-btn color="transparent" depressed :to="`${'/account/feedback'}`" style="font-size: 18px; margin-left: 15px; color: #1e88e5">Feedback/Suggestions</v-btn>
          <v-btn color="transparent" depressed :to="`${'/'}`" style="font-size: 18px; margin-left: 15px; color: #1e88e5">Log Out</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      phonenumber: '0000000000',
      email: 'abc@gmail.com'
    }
  }
}
</script>
