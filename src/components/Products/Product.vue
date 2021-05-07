<template>
  <v-container >
    <v-card class="product mt-3 px-1" v-if="!loading" elevation="10" xs="12">
      <v-col xs="10" >

        <v-row class="d-flex flex-wrap">
          <v-col xs="12" class="product_img" lg="4" v-if="product.imageSrc">
            <v-img

            height="250px"
            max-width="350px"
            lg="3"
            class="img_list"
            sm="3"
            :src="product.imageSrc"></v-img>
          </v-col>
          <v-col xs="12" lg="6">
            <v-row >
              <div class="product_info">
                <h3 class="product_title display-1 mb-3 mt-3">{{product.title}}</h3>
                <p class="product_category title">
                  <span class="product_title">Производитель:  </span> {{product.vendor.charAt(0).toUpperCase()+product.vendor.substr(1)}}
                </p>
                <p class="product_price title">
                  <span class="product_title">Цена: </span> $ {{product.price}}
                </p>
                <p class="product_color title">
                  <span class="product_title">Цвет: </span>
                  <span
                  :title="product.color"
                  :style="{backgroundColor: product.color}"
                  class="product_color_bg"
                  ></span>
                </p>
                <p class="title">
                  <span class="product_title">Метериал: </span>{{product.material.charAt(0).toUpperCase()+product.material.substr(1)}}
                </p>
                  <v-card-text >
                  <p class="product_title mb-2">
                    Характеристики ноутбука:
                  </p>
                  {{product.description}}
                </v-card-text >
                <edit-product :product="product" v-if="isOwner"></edit-product>
                <app-buy-dialog :product="product"></app-buy-dialog>
                <!-- <v-btn color="primary mb-3" class="headline">Купить</v-btn> -->
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-col >
    </v-card >
    <v-col v-else xs="12" class="text-center pt-5">
      <v-progress-circular
      :size="100"
      :width="4"
      color="purple"
      indeterminate
      ></v-progress-circular>
    </v-col>
  </v-container >
</template>
<script >
import EditProduct from './EditProduct'
import fb from 'firebase'
export default{
  props:['id'],
  computed:{
    product(){
      const id = this.id
      return this.$store.getters.productById(id)
    },
    loading(){
      return this.$store.getters.loading
    },
    isOwner(){
      if(this.$store.getters.isUserloggedIn){
      return this.product.ownerId === fb.auth().currentUser.uid
    }else{
      console.log("Вы не зарегестрированны");
    }
  }
  },
  components:{
    EditProduct
  }
}


</script>
<style >
.product{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #1c77ad;
  padding: 30px;
  margin-bottom: 100px;
}
.product_img{
  height: 100%;
  width: 550px;
}
.product_info{
  margin: auto;

  /* max-width: 550px;*/
}
.product_title{
  font-size: 1.3rem;
  font-weight: bold;
  color: #1875d0;
  margin-bottom: 0;
  /* word-wrap:break-word;*/
}
.product_price{
  color: red;
}
.title{
  /*display: flex;
  flex-wrap: wrap;*/
}
.product_color_bg{
  display: inline-block;
  width: 50px;
  height: 20px;
  border: 1px solid #2b2b2b;
  border-radius: 10px;
}
@media screen and (max-width: 400px){
  .img_list{
    width: 290px;
    background-size: cover;
  }
  .title{
    font-size: 12px !important;
  }
}
@media screen and (max-width: 340px) {
  .img_list{
    width: 250px;
    background-size: cover;
  }
}
</style>
