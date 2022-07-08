<script lang="ts">
	import type { JobExperience } from '$lib/models/job-experience';

	export let jobExperiences: JobExperience[] = [];
</script>

<div class="grid grid-cols-2">
	{#each jobExperiences as jobExperience}
		<p class="text-4xl text-primary">{jobExperience.title}</p>
		<div class="mb-12 ml-12 text-2xl">
			{#each jobExperience.employments as employment}
				<p>{employment.companyName}</p>
				<p class="font-thin">{employment.startDate} - {employment.endDate}</p>
			{/each}
		</div>
	{/each}
</div>
