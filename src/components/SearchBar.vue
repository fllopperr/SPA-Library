<template>
	<div>
		<input
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			placeholder="Поиск"
			class="search-input"
		/>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	props: ['modelValue'],
	emits: ['update:modelValue'],
}
</script>

<style scoped>
.search-input {
	display: flex;
	width: 500px;
	padding: 0.6rem 1rem;
	border-radius: 8px;
	border: 1px solid #ccc;
	font-size: 1rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
