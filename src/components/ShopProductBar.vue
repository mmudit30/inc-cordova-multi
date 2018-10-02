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
              class="image_product_s"
              src="http://torchesdesignstudio.com/wp-content/uploads/2016/04/dummy-post-square-1-thegem-blog-masonry.jpg">
            </v-img>
          </v-flex>
          <v-flex>
            <v-card-title class="pa-0">
              <div>
                <div class="product_name_s">Product_1</div>
                <div class="product_price_s">Rs. 50.00</div>
                <div class="product_quantity_s">10kgs</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-container>
</template>


<style>
  .image_product_s {
    margin: 2.5px;
    height: 95px;
    width: 140px;
  }
  .product_name_s {
    margin-top: 10px;
    font-size: 20px;
  }
  .product_price_s {
    font-size: 15px;
  }
  .product_quantity_s {
    font-size: 15px;
  }
</style>
