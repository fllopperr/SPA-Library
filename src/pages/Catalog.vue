<template>
	<div class="catalog-page">
		<div class="catalog-header">
			<div class="catalog-left">
				<h2 class="catalog-title">КАТАЛОГ</h2>
				<button class="home-btn" @click="goHome">ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
			</div>
			<SearchBar v-model="searchQuery" />
		</div>
		<div class="catalog">
			<CatalogItem
				v-for="book in filteredBooks"
				:key="book.id"
				:item="book"
				class="book-card"
			/>
		</div>
	</div>
</template>

<script setup>
import CatalogItem from '@/components/CatalogItem.vue'
import SearchBar from '@/components/SearchBar.vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import initialBooks from '../data/data.js'

const router = useRouter()
const books = ref([...initialBooks])
const searchQuery = ref('')

const filteredBooks = computed(() =>
	books.value.filter(book =>
		book.title.toLowerCase().includes(searchQuery.value.toLowerCase())
	)
)

const goHome = () => {
	router.push('/')
}
</script>

<style scoped>
html,
body {
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
}

#app,
.catalog-page {
	box-sizing: border-box;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	background-color: rgb(242, 242, 243);
}

.catalog-page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
	margin: 0;
}

.catalog-header {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1.5rem;
}

.catalog {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 20px;
	overflow-y: auto;
	height: calc(100vh - 20px * 2 - 56px - 24px);
	box-sizing: border-box;
	margin: 4px;
	padding: 5px 0 0 0;
	width: 100%;
}

.catalog-left {
	display: flex;
	width: 400px;
}

.catalog-title {
	font-size: 1.5rem;
	font-weight: bold;
	color: #333;
	white-space: nowrap;
	margin-left: 5px;
	padding-right: 20px;
}

.home-btn {
	max-width: 400px;
	padding: 0.5rem 1rem;
	background-color: rgb(0, 191, 255);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
	white-space: nowrap;
	transition: background-color 0.2s ease;
}
.home-btn:hover {
	background-color: rgb(19, 143, 185);
}

.book-card {
	background-color: #fff;
	height: 380px;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	transition: transform 0.2s ease;
}

.book-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}
</style>
