<template>
  <v-layout justify-center>
    <v-flex xs12 sm8>
        <v-img
          src="http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg"
          height="175px"
        ></v-img>

        <v-card-title class="cyan darken-1">
          <span class="headline white--text">Product_Name</span>
          <v-spacer></v-spacer>
          <span class="headline white--text">₹ 100.00</span>
        </v-card-title>

        <v-flex style="margin-top: 10px; margin-left:25px; margin-right:25px" outline background-color="blue" text-xs-center>

            <span style="font-size: 20px;">QUANTITY</span>
            <div class="quantity-toggle" style="margin-top: 10px">
              <button @click="decrement()">&mdash;</button>
              <input style="font-size: 18px;" type="text" :value="quantity">
              <button @click="increment()">&#xff0b;</button>
            </div>
            <v-overflow-btn
              :items="dropdown_unit"
              label="Kg/Gm/Packets"
              target="#dropdown-example">
              <v-divider inset></v-divider>
            </v-overflow-btn>
        </v-flex>
        <v-flex row justify-center>
          <center>
            <v-btn regular large color="primary"><span style="font-size: 20px">Add To Cart</span></v-btn>
          </center>
        </v-flex>
      </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        quantity: 1,
        dropdown_unit: [
          { text: 'KiloGrams' },
          { text: 'Grams' },
          { text: 'Packets' },
          { text: 'Litres' }
        ]
      }
    },
    methods: {
      increment () {
        this.quantity++
      },
      decrement () {
        if (this.quantity === 1) {
          this.quantity = 1
        } else {
          this.quantity--
        }
      }
    }
  }
</script>
<style>
.quantity-toggle {
  text-align: center;
}
  input {
    border: 0;
    border-top: $border;
    border-bottom: $border;
    width: 2.5rem;
    text-align: center;
    padding: 0 .5rem;
  }

  button {
    border: $border;
    padding: .5rem;
    background: #f5f5f5;
    color: #888;
    font-size: 1rem;
    cursor: pointer;
  }

</style>
