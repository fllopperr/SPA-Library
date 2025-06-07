<template>
	<div class="item-details" v-if="book">
		<slot :book="book"></slot>
	</div>
</template>

<script>
import books from '../data/data'

export default {
	props: ['id'],
	data() {
		return {
			book: null,
		}
	},
	created() {
		this.book = books.find(b => b.id === Number(this.id))
	},
	methods: {
		goBack() {
			this.$router.push('/catalog')
		},
	},
}
</script>

<style scoped>
.item-details {
	width: 100%;
	height: 100%;
}
</style>
