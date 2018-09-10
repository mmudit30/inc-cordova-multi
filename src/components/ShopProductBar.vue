<template>
  <v-container pt-2 pb-0 pl-4 pr-4>
    <v-flex>
      <v-card
        onclick=""
        height="100px"
        hover="true">
        <v-layout>
          <v-flex>
            <v-img
              class="image_product"
              src="http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg">
            </v-img>
          </v-flex>
          <v-flex>
            <v-card-title class="pa-0">
              <div>
                <div class="product_name">Product_1</div>
                <div class="product_price">Rs. 50.00</div>
                <div class="product_quantity">10kgs</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>


<style>
  .image_product {
    margin: 2.5px;
    height: 95px;
    width: 140px;
  }
  .product_name {
    margin-top: 10px;
    font-size: 20px;
  }
  .product_price {
    font-size: 15px;
  }
  .product_quantity {
    font-size: 15px;
  }
</style>
