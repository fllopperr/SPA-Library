<template>
	<div class="details-wrapper">
		<ItemDetails :id="route.params.id" />
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import ItemDetails from '../components/ItemDetails.vue'

const route = useRoute()
</script>

<style scoped>
.details-wrapper {
	position: relative;
	height: 100%;
	width: 100%;
}
</style>
