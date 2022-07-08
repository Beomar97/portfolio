<script>
	import { skills } from './data/skills';
	import Skill from './components/Skill.svelte';
	import Career from './components/Career.svelte';
	import { jobExperiences } from './data/job-experiences';
</script>

<div id="skills" class="my-24 p-8">
	<h1 class="mb-8 text-center text-6xl font-bold capitalize">Skills & Experiences</h1>
	<div class="flex flex-wrap justify-evenly">
		<div class="my-8 max-w-2xl">
			{#each skills as skill}
				<Skill {...skill} />
			{/each}
		</div>
		<div class="my-8 max-w-2xl">
			<Career {jobExperiences} />
		</div>
	</div>
</div>
