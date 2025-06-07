<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style>
html {
	box-sizing: border-box;
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: #fff;
}

body {
	height: 100%;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	background-color: #fff;
	font-family: Arial, sans-serif;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

#app {
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0;
	padding: 0;
	background-color: #fff;
}
#app > * {
	flex-grow: 1;
	min-height: 0;
}

a {
	color: #42b983;
	text-decoration: none;
	transition: color 0.3s ease;
}
a:hover,
a:focus {
	color: #2c8c6c;
	outline: none;
}
</style>
