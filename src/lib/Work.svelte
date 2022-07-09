<script lang="ts">
	import { projects } from './data/projects';

	import ProjectCard from './components/ProjectCard.svelte';
</script>

<div id="work" class="my-24 p-8">
	<h1 class="mb-8 text-center text-6xl font-bold capitalize">
		My creative <span class="text-primary">portfolio</span> section
	</h1>
	<div class="flex flex-row flex-wrap justify-evenly gap-8">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
