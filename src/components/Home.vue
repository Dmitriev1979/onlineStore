<template>
  <div v-if="!loading">
  <v-container class="py-0" fluid>
    <v-row>
  	  <v-col
      xs="12"
      class="carusel_mobil"
      >
  	  	<v-carousel
        cycle
        class="py-0 "
        :height="250"
        >
          <v-carousel-item
            class="py-0"
            v-for="(product, i) in promoProducts"
            :key="i"
            :src="product.imageSrc"
             reverse-transition="fade-transition"
             transition="fade-transition"
             ></v-carousel-item>
          </v-carousel>
      </v-col>
    </v-row>
    <v-row>
  	  <v-col
      xs="12"
      class="carusel"
      >
  	  	<v-carousel
        cycle
        class="py-0 "
        :height="700"
        >
          <v-carousel-item
            class="py-0"
            v-for="(product, i) in promoProducts"
            :key="i"
            :src="product.imageSrc"
             reverse-transition="fade-transition"
             transition="fade-transition"
             ></v-carousel-item>
          </v-carousel>
      </v-col>
    </v-row>
  </v-container>
<v-container md="12" fluid>
  <v-row class="justify-center">
      <v-card

      v-for="(product, i) in products"
      :key="i"
      elevation="18"
       class="mx-4 my-4"
       xs="12"
      sm="4"
      md="4"
      >
      <router-link
      :aria-label="product.title"
        :to="'/product/'+product.id"
      >

      <v-img
      :src="product.imageSrc"
      height="350"
      class="mx-auto"
    max-width="490"

    ></v-img>
      </router-link>
       <v-card
    class="mx-auto"
    max-width="490"

  >


    <v-card-title primary-title>
      <div>
        <h3 class="card_heading heading">{{product.title}}</h3>
        <div class="card_describe">
          <p class="subheading">{{product.description.substring(0, 60)}}...</p>
          <p class="subheading card_price"><span class="title">Цена: </span>{{product.price}}</p>
        </div>
      </div>
    </v-card-title>

    <v-card-actions>
       <v-spacer></v-spacer>
      <v-btn

      dark
      color="light-blue darken-4"
     outlined
      :to="'/product/'+ product.id"
      >Описание</v-btn>
    <app-buy-dialog :product="product"></app-buy-dialog>


    </v-card-actions>


  </v-card>
      </v-card>
    </v-row>

</v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-col xs="12" class="text-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
           ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script >
	export default{
		computed:{
      promoProducts(){
        return this.$store.getters.promoProducts
      },
      products(){
        return this.$store.getters.products
      },
      loading(){
        return this.$store.getters.loading
      }
    }
	}

</script>
<style scoped>
  .card_heading{
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe{
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price{
    color: #c00f1b;
    font-size: 18px;
  }
  .active{
      background-size: 100px !important;
    }
    @media screen and (max-width: 600px) {
      .carusel{
        display: none;
      }
    }
    @media (min-width: 600px) {
      .carusel_mobil{
        display: none;
      }
    }
</style>
