<template v-slot:activator="{ on }">
	<v-dialog
	max-width="400"
	v-model="dialog"

	>
	<v-btn
	dark

	color="primary"
	class="primary mr-5 ml-3 mb-0"
	@click="dialog = true"
	slot="activator"
	v-on="on"
	>
	Купить
</v-btn>
<v-card>
	<v-container>
		<v-row>
			<v-col xs='12'>
				<v-card-title>
					<h4 class="text-primary">Вы сделали хороший выбор</h4>

				</v-card-title>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col xs='12'>
				<v-card-text>
					<v-text-field
					v-model="name"
					label="Ваше имя"
					name="name"
					type="text"
					/>
					<v-text-field
					v-model="phone"
					label="Ваш телефон"
					name="phone"
					type="phone"

					/>
				</v-card-text>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col xs='12'>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn dark  outlined color="red darken-4" @click="onCansel()"
					:disabled="localLoading"
					>Закрыть</v-btn>
					<v-btn
					dark
					color="primary"
					@click="onSave()"
					:disabled="localLoading"
					:loading="localLoading"
					>Купить</v-btn>
				</v-card-actions>
			</v-col>
		</v-row>
	</v-container>
</v-card>
</v-dialog>
</template>
<script>
export default{
	props:['product'],
	data(){
		return{
			dialog: false,
			on: false,
			name:'',
			phone:'',
			localLoading: false
		}
	},
	methods:{
		onCansel(){
			this.name="",
			this.phone="",
			this.dialog = false

		},
		onSave(){
			if(this.name!='' && this.phone!=''){
				this.localLoading = true
				this.$store.dispatch('createOrder', {
					name: this.name,
					phone: this.phone,
					productId: this.product.id,
					ownerId: this.product.ownerId

				})
				.finally(()=>{
					this.name =''
					this.phone =''
					this.localLoading =false
					this.dialog = false

				})

			}
		}
	}
}
</script>
