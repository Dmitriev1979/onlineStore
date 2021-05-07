<template>
  <div class="container">
    <v-app >

      <Navbar />
      <template v-if="error">
        <v-snackbar
        :timeout="9000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
        >
        {{ error }}
        <v-btn

        text
        dark
        class="text-white"
        @click.native="closeError"
        >
        Close
      </v-btn>
    </v-snackbar>
  </template>



    <v-footer
    fixed
    dark
    class="container primary font-weight-medium footer"

    height="50"
    max-width="1920"

    >
    <v-col class="d-flex justify-xl-center">

      <div class="footer-name">

        <strong>Дмитриев И &reg;</strong> — {{ new Date().getFullYear() }}
      </div>
    </v-col>
  </v-footer>

</v-app>
</div>
</template>

<script>

import Navbar from './components/Navbar.vue'
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  methods:{
    closeError(){
      this.$store.dispatch('closeError')
    }
  },
  computed:{
    error(){
      return this.$store.getters.error
    }
  }
};
</script>
<style scoped>
.container{
  max-width: 1920px;
  margin: auto;
}

.footer-name{
  width: 180px;
  margin: auto;
}
.footer{
  margin-top: 80px;
}
</style>
