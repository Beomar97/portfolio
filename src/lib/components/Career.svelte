<script lang="ts">
	import type { Experience } from '$lib/models/experience';

	export let experiences: Experience[] = [];
</script>

<div class="grid grid-cols-2">
	{#each experiences as experience}
		<p class="text-4xl text-primary">{experience.title}</p>
		<div class="mb-12 ml-12 text-2xl">
			{#each experience.employments as employment}
				<p>{employment.companyName}</p>
				<p class="font-thin">{employment.startDate} - {employment.endDate}</p>
			{/each}
		</div>
	{/each}
</div>
