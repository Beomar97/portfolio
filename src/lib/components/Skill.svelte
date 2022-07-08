<script lang="ts">
	import Icon from '@iconify/svelte';

	export let category: string = '';
	export let text: string = '';
	export let textColor: string = '';
	export let icon: string = '';
	export let description: string = '';
</script>

<div class="stats w-72">
	<div class="stat">
		<div class="stat-title">{category}</div>
		<div class="stat-value flex {textColor}">
			<Icon class="mr-2" {icon} />{text}
		</div>
		<div class="stat-desc">{description}</div>
	</div>
</div>
