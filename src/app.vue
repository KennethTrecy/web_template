<template>
	<span>{{ message }}</span>
</template>

<style lang="scss">
@import "index";
</style>

<script>
import { ref } from "vue";

export default {
	setup() {
		const message = ref("Hello World!");

		return {
			message
		};
	}
};
</script>
