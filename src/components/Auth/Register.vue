<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Регистрация</v-toolbar-title>
                <v-spacer />


              </v-toolbar>
              <v-card-text>
                <v-form

                ref="form"
                v-model="valid"

                >
                  <v-text-field
                  :rules="emailRules"
                  v-model="email"
                    label="Email"
                    name="Email"
                    prepend-icon="mdi-account"
                    type="email"
                  />

                  <v-text-field
                  :counter="6"
                   v-model="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="passwords"
                  />
                   <v-text-field
                  :counter="6"
                   v-model="confirmPassword"
                    label="Повторите пароль"
                    name="confirmPassword"
                    prepend-icon="mdi-repead"
                    type="password"
                    :rules="confirmPasswordRuls"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                color="primary"
                @click="onSubmit"
                :disabled="!valid || loading"
                :loading="loading"
                >регистрация</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>
<script >
  export default{
    data(){
      return{
        valid: false,
        confirmPassword:'',
        email: '',
        password: '',
        emailRules: [
        v => !!v || 'E-mail не указан',
        v => /.+@.+\..+/.test(v) || 'это не E-mail',
      ],
      passwords:[
        v => !!v || ' Пароль не указан',
        v => (v && v.length >= 6) || 'Парль должен быть не менее 6 символов',
      ],
      confirmPasswordRuls:[
      v => !!v || ' Пароль не указан',
      v=> v=== this.password || 'Пароли не совпадают'
      ]
      }
    },
    methods:{
      onSubmit(){
           if(this.$refs.form.validate()){
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('registerUser', user)
            .then(()=>{
              this.$router.push('/')
            })
            .catch(()=>{})
           }
      }
    },
    computed:{
      loading(){
        return this.$store.getters.loading
      }
    }
  }


</script>
