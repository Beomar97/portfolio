<script lang="ts">
	import Icon from '@iconify/svelte';

	export let category = '';
	export let text = '';
	export let textColor = '';
	export let icon = '';
	export let description = '';
</script>

<div class="w-64">
	<div class="text-base opacity-60">{category}</div>
	<div class="line flex text-4xl font-extrabold {textColor}">
		<Icon class="mr-2" {icon} />{text}
	</div>
	<div class="text-xs leading-4 opacity-60">
		{description}
	</div>
</div>
