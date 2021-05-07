<template>
  <v-container>
    <v-row>
    <!--    <p>{{orders}}</p> -->
      <v-col xs="12" class="text-center pt-5" v-if="loading">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
           ></v-progress-circular>
      </v-col>
  	  <v-col v-else-if="!loading && orders.length !== 0" xs="12" sm="6" offset-sm="3">
        <h2 class="text-secondary mb-3">заказы</h2>
  	  	<v-list
      subheader
      two-line
      flat
    >

      <v-list-item-group
        v-model="settings"
        multiple
      >
        <v-list-item
         avatar
          v-for="(order, i) in orders"
          :key="i"
        >
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
              color="success"
              :input-value="order.done"
               @change="markDone(order)"


              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-btn
            class="primary"
            :to="'/product/'+order.productId"
            >открыть</v-btn>

          </template>

        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-col>


      <v-col xs="12" class="text-center " v-else>
          <h2 class="text-secondary">У вас нет заказов</h2>
      </v-col>


    </v-row>
  </v-container>
</template>
<script >
	export default{

    computed:{
      loading(){
        return this.$store.getters.loading
      },
      orders(){
        return this.$store.getters.orders
      }
    },
    methods:{
      markDone(order){
        this.$store.dispatch('markOrderDone', order.id)
        .then(()=>{
           order.done = true
        })
         .catch(()=>{})
      }
    },
    created(){
      this.$store.dispatch('fetchOrders')
    }
	}


</script>
