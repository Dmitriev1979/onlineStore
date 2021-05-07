<template>
	<div >
		<v-navigation-drawer v-model="sideNav" temporary app>
			<v-list >
				<v-list-item
				v-for="(link, i) in links"
				:key="link.i"
				:to='link.url'
				>
				<v-list-item-icon>
					<v-icon >{{link.icon}}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title v-text="link.title" >

					</v-list-item-title>
				</v-list-item-content>


			</v-list-item>
			<v-list-item

			@click="onlogout"
			v-if="isUserloggedIn"
			>
			<v-list-item-icon>
				<v-icon >mdi-exit-to-app</v-icon>
			</v-list-item-icon>

			<v-list-item-content>
				<v-list-item-title v-text="'Выход'" >

				</v-list-item-title>
			</v-list-item-content>


		</v-list-item>
	</v-list>
</v-navigation-drawer  >

<v-app-bar  height="100px"

dark
class="container py-0 my-0 "
color="primary"
max-width="1920"
>
<v-app-bar-nav-icon
@click="sideNav=!sideNav"
class="hidden-lg-and-up"
></v-app-bar-nav-icon>
<v-toolbar-title>

	<router-link :to="'/'" tag="span" class="pointer">
		Магазин ноутбуков
	</router-link>
</v-toolbar-title>
<v-spacer></v-spacer>
<v-toolbar-items class="hidden-md-and-down">


	<v-btn  large  link text
	v-for="(link, i) in links"
	:to='link.url'
	:key="i"

	>
	<v-icon left>{{link.icon}}</v-icon>
	{{link.title}}
</v-btn>
<v-btn  large  link text
v-if="isUserloggedIn"
@click="onlogout"
>
<v-icon left>mdi-exit-to-app</v-icon>
выход
</v-btn>

</v-toolbar-items>
</v-app-bar>

<!-- Sizes your content based upon application components -->
<v-content >

	<!-- Provides the application the proper gutter -->


	<!-- If using vue-router -->
	<router-view></router-view>

</v-content>
</div>
</template>
<script >
export default{
	data(){
		return{
			sideNav: false,

		}
	},
	methods:{
		onlogout(){
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	},
	computed:{
		isUserloggedIn(){
			return this.$store.getters.isUserloggedIn
		},
		links(){
			if(this.isUserloggedIn){

				return [
					{i:3, title: 'Карзина заказов', icon:'mdi-cart-outline', url:'/checkout'},
					{i:4, title: 'Новая продукция', icon:'mdi-plus', url:'/new'},
					{i:5, title: 'Ваша продукция', icon:'mdi-format-list-bulleted', url:'/list'},
				]
			}
			return [
				{i:1, title: 'Логин', icon:'mdi-account-box', url:'/login'},
				{i:2, title: 'Регистрация', icon:'mdi-face', url:'/register'},
			]
		}
	}
}
</script>
<style scope>
.pointer{
	cursor: pointer;
}
.container{
	width: auto;
	margin: auto;

}

</style>
