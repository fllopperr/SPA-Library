<template>
	<router-link :to="`/details/${item.id}`" class="catalog-item">
		<img :src="item.image" alt="cover" />
		<h3>{{ item.title }}</h3>
		<h2>{{ item.author }}</h2>
	</router-link>
</template>

<script setup>
defineProps(['item'])
</script>

<style scoped>
.catalog-item {
	display: block;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 8px;
	text-decoration: none;
	color: black;
	background: #f9f9f9;
	transition: box-shadow 0.3s;
}

.catalog-item:hover {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.catalog-item img {
	width: 100%;
	height: auto;
	margin-bottom: 1rem;
}

.book-card img {
	height: 250px;
	object-fit: contain;
	padding: 5px;
	border-radius: 5%;
}

.book-card h3,
h2 {
	margin: 0.5rem 0;
	font-size: 1.1rem;
	color: #333;
	line-height: 100%;
}

.book-card p {
	font-size: 0.9rem;
	color: #000;
	padding: 0 0.5rem 1rem;
}
</style>
