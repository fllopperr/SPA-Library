<template>
	<div class="details-wrapper">
		<ItemDetails :id="route.params.id">
			<template v-slot="{ book }">
				<div v-if="book" class="details-container">
					<div class="left">
						<img :src="book.image" :alt="book.title" class="cover" />
						<h3 class="genre">{{ book.genre }}</h3>
					</div>
					<div class="right">
						<h1>{{ book.title }}</h1>
						<div class="description-wrapper">
							<p class="description">{{ book.description }}</p>
						</div>
						<button class="catalog-btn" @click="goToCatalog">Каталог</button>
					</div>
				</div>

				<div v-else class="not-found">
					<h2>Книга не найдена</h2>
					<button class="catalog-button" @click="goToCatalog">Каталог</button>
				</div>
			</template>
		</ItemDetails>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import books from '../data/data.js'
import ItemDetails from '../components/ItemDetails.vue'

const route = useRoute()
const router = useRouter()
const book = ref(null)

onMounted(() => {
	const id = Number(route.params.id)
	book.value = books.find(b => b.id === id)
})

const goToCatalog = () => router.push('/catalog')
</script>

<style scoped>
.details-wrapper {
	position: relative;
	height: 100%;
	width: 100%;
}
.details-container {
	display: flex;
	padding: 4rem 15rem 2rem;
	background: rgb(242, 242, 243);
	height: 100%;
	box-sizing: border-box;
}

.left {
	flex: 0 0 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: white;
	padding: 1rem;
	max-height: 100%;
	border-radius: 10% 0 0 10%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border-right: 1px solid black;
}

.left img.cover {
	width: 450px;
	border-radius: 8px;
	margin-bottom: 1rem;
	object-fit: contain;
}

.genre {
	font-weight: 700;
	color: #444;
	font-size: 1.5rem;
}

.right {
	flex: 0 0 60%;
	background: white;
	padding: 2rem;
	overflow-y: auto;
	border-radius: 0 10% 10% 0;
}
h1 {
	display: flex;
	justify-content: center;
	color: black;
}
.description {
	display: flex;
	text-align: center;
	font-size: 1.2rem;
	color: black;
	line-height: 1.6;
}

.catalog-btn {
	margin-top: 2rem;
	padding: 0.75rem 1.5rem;
	background-color: rgb(0, 191, 255);
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-size: 1rem;
}

.catalog-btn:hover {
	background-color: rgb(19, 143, 185);
}

.not-found {
	padding: 2rem;
}
</style>
