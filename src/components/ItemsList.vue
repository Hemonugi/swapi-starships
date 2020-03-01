<template>
	<div>
		<h2 v-on:click="starship.show = !starship.show">{{starship.name}}</h2>
		<transition name="fade">
			<div class="list" v-if="starship.show">
				<div v-for="(value, name) in starship" :key="name">
					<template>
						<b>{{ name }}: </b>{{ value }}
					</template>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: ["starship"]
}
</script>

<style scoped>
.list {
	text-align: left;
	margin: 1rem;
}
</style>
