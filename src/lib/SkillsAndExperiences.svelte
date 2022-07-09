<script lang="ts">
	import { skills } from './data/skills';
	import SkillEntry from './components/SkillEntry.svelte';
	import Career from './components/Career.svelte';
	import { jobExperiences } from './data/job-experiences';
	import { educationExperiences } from './data/education-experiences';
	import type { Skill } from './models/skill';

	let shuffledSkills: Skill[] = shuffle(JSON.parse(JSON.stringify(skills)));
	let currentSkills = 10;

	function shuffle(array: Skill[]) {
		let currentIndex = array.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}
</script>

<div id="skills" class="my-24 p-8">
	<h1 class="mb-8 text-center text-6xl font-bold capitalize">Skills & Experiences</h1>
	<div class="flex flex-wrap justify-evenly">
		<div class="my-8 max-w-2xl">
			<div class="flex flex-wrap justify-evenly gap-6">
				{#each shuffledSkills.slice(0, currentSkills) as skill}
					<SkillEntry {...skill} />
				{/each}
			</div>
			{#if currentSkills < shuffledSkills.length}
				<div class="flex justify-center">
					<div class="divider w-72">
						<button
							class="text-2xl text-primary"
							on:click={() => (currentSkills = currentSkills + 4)}>Show more</button
						>
					</div>
				</div>
			{/if}
		</div>
		<div class="my-8 max-w-2xl">
			<label class="swap">
				<input type="checkbox" />
				<div class="swap-off"><Career experiences={jobExperiences} /></div>
				<div class="swap-on"><Career experiences={educationExperiences} /></div>
			</label>
		</div>
	</div>
</div>
