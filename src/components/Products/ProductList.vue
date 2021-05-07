<template>
  <v-container>
    <v-row>
  	  <v-col class="" v-if="!loading && myProducts.length !==0" cols="12" lg="10"  md="12" sm="12" xs="12">
  	  	<h2 class="text-secondary mb-3">Ваш товар</h2>

           <v-card
            elevation="12"
            class="mt-4 mx-auto d-flex flex-wrap flex-md-nowrap"
            v-for="(product, i) in myProducts"
            :key="i"
            >


                 <v-img
                  :src="product.imageSrc"
                  height="250px"
                  max-width="350px"
                  lg="3"
                  class="img_list"
                  sm="3"
                  >
                  </v-img>
                  <v-card-actions lg="6" class="mt-12 mr-2 flex-wrap flex-md-nowrap">

                <v-card-text >
                  <h2 class="text-primary pb-3">{{product.title}}</h2>
                  <p class="d-flex flex-wrap flex-md-nowrap">{{product.description}}</p>
                </v-card-text>

                  <v-spacer></v-spacer>
                  <v-btn

                  class="info "
                  :to="'/product/'+product.id"
                  >Открыть</v-btn>

                </v-card-actions>

          </v-card>

      </v-col>

        <v-col v-else-if="!loading && myProducts.length === 0">
               <div xs="12" >
                 <h2 class="text-center">У вас нет товаров</h2>
               </div>
        </v-col>
             <v-col v-else >
               <v-row >
                 <v-col xs="12" class="text-center pt-5">
                   <v-progress-circular
                     :size="100"
                     :width="4"
                     color="purple"
                     indeterminate
                    ></v-progress-circular>
                 </v-col>
               </v-row>
             </v-col>
    </v-row>
  </v-container>
</template>
<script >
	export default{
	 computed:{
    myProducts(){
      return this.$store.getters.myProducts
    },
    loading(){
      return this.$store.getters.loading
    }
   }
	}


</script>
<style scoped>
  .img_list{
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    .img_list{
      width: 210px;
      background-size: cover;
    }
  }
</style>
