<template v-slot:activator="{ on }">
	<v-dialog
	max-width="400"
	v-model="dialog"

	>
	<v-btn
	color="primary"
	class="primary mr-5 mb-0"
	@click="dialog = true"
	slot="activator"
	v-on="on"
	>
	Редактировать
</v-btn>
<v-card>
	<v-container>
		<v-row>
			<v-col xs='12'>
				<v-card-title>
					<h3 class="text-primary">Редактирование товара</h3>
				</v-card-title>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col xs='12'>
				<v-card-text>
					<v-text-field
					v-model="editTitle"
					label="Название"
					name="title"
					type="text"
					/>
					<v-text-field
					v-model="editDescription"
					label="Описание"
					name="description"
					type="text"
					multi-line
					/>
				</v-card-text>
			</v-col>
		</v-row>
		<v-divider></v-divider>
		<v-row>
			<v-col xs='12'>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn dark  outlined color="red darken-4" @click="onCansel()">Отмена</v-btn>
					<v-btn dark outlined   color="light-blue darken-4" @click="onSave()">Сохранить</v-btn>
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
			editTitle: this.product.title,
			editDescription: this.product.description
		}
	},
	methods:{
		onCansel(){
			console.log("this.dialog", this.dialog)
			this.editTitle = this.product.title
			this.editDescription = this.product.editDescription
			this.dialog = false

		},
		onSave(){
			if(this.editDescription !='' && this.editTitle!=''){
				this.$store.dispatch('updateProduct', {
					title: this.editTitle,
					description: this.editDescription,
					id: this.product.id
				})
				this.dialog = false
			}
		}
	}
}
</script>
