<template>
	<div class="home-container">
		<div class="main">
			<h1>Добро пожаловать в мою библиотеку</h1>
			<router-link to="/catalog" class="catalog-btn"
				>Перейти в каталог</router-link
			>
		</div>
	</div>
</template>

<script setup>
import books from '../data/data.js'
</script>

<style scoped>
.home-container {
	background-color: rgb(242, 242, 243);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
	overflow: hidden;
	box-sizing: border-box;
}

.main {
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	box-sizing: border-box;
}

.main h1 {
	font-size: 3rem;
	color: rgb(51, 51, 51);
	margin: 0;
}

.catalog-btn {
	background-color: rgb(0, 191, 255);
	color: rgb(51, 51, 51);
	padding: 1rem 2rem;
	border-radius: 8px;
	text-decoration: none;
	font-size: 1.2rem;
	transition: background 0.3s;
	width: fit-content;
	height: fit-content;
}

.catalog-btn:hover {
	background-color: rgb(19, 143, 185);
}
</style>
