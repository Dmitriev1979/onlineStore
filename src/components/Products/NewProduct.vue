<template>
  <v-container>
    <v-row>
  	  <v-col xs="12" sm="6" offset-sm="3">
  	  	<h2 class="text--secondary mb-3">Новая продукция</h2>
         <v-form 

                ref="form"
                v-model="valid"
               
                >
                  <v-text-field
                  :rules="[v=>!!v || 'Поле продукция не заполнено']"
                  v-model="title"
                    label="продукция"
                    name="продукция"
                    required
                    type="text"
                  />

                  <v-text-field    
                   v-model="vendor"
                    label="Производитель"
                    name="Производитель" 
                    type="text"
                  />

                  <v-text-field
                   v-model="color"
                    label="Цвет продукции"
                    name="цвет" 
                    type="text"
                  />

                   <v-text-field
                   v-model="material"
                    label="метериал продукции"
                    name="материал" 
                    type="text"
                  />

                  <v-text-field
                   v-model="price"
                    label="цена продукции"
                    name="цена" 
                    type="text"
                    :rules="[v=>!!v || 'Цена не заполнена']"
                    required
                  />

                 

                  <v-textarea
                   v-model="description"
                    label="характеристики  продукции"
                    name="характеристики" 
                    type="text"
                    multi-line
                  /></v-textarea>
                </v-form>
                <v-row class='mb-3'>
              <v-col xs="12" >
                <v-btn 
                class="warning"
                 @click="upLoad" 
                >
                  загрузка изображения
                  <v-icon

                  right
                  dark
                  >mdi-cloud-upload</v-icon>
                </v-btn>
                <input 
                ref="fileInput" 
                type="file" 
                style="display: none;" 
                accept="image/*"
                @change="onFileChange"
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" >
                <img :src="imageSrc" alt="" height="200px" v-if="imageSrc">
              </v-col>
            </v-row>
            <v-row >
              <v-col xs="12" >
                
            <v-switch
            color="primary"
            v-model="promo"
              label="Добавить в акцию?"
              ></v-switch>

              </v-col>
            </v-row>
             <v-row >
              <v-spacer></v-spacer>
              <v-col xs="12" >
                <v-btn 
                :loading="loading"
                :disabled="!valid || !image || loading"
                class="primary"
                 @click="createProduct" 
                >
                 Добавить продукцию
                  
                </v-btn>
              </v-col>
            </v-row>
              </v-col>
              </v-row>
  </v-container>
</template>
<script >
	export default{
		data(){ 
			return{
          title:'',
          vendor:'',
          color:'',
          material:'',
          price: 0,
          description:'',
          promo: false,
          valid: false,
          image: null,
          imageSrc: ''
			}
		},
    computed:{
      loading(){
        return this.$store.getters.loading
      }
    },
    methods:{
      createProduct(){
        if(this.$refs.form.validate() && this.image){
          const product = {
            title: this.title,
            vendor: this.vendor,
            color: this.color,
            material: this.material,
            price: this.price,
            description: this.description,
            promo: this.promo,
            image: this.image

          }
          this.$store.dispatch('createProduct', product)
          .then(()=>{
            this.$router.push('/list')
          })
          .catch(()=>{})
        }
      },
      upLoad(){
        this.$refs.fileInput.click()
      },
      onFileChange(event){
        const file = event.target.files[0]
        const reader =  new FileReader()
        reader.onload = e =>{
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
	}


</script>