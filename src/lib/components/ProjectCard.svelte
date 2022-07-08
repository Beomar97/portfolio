<script lang="ts">
	import type { CardLink } from '../models/card-link';
	import Icon from '@iconify/svelte';

	export let title: string = '';
	export let category: string = '';
	export let image: string = '';
	export let description: string = '';
	export let badges: string[] = [];
	export let links: CardLink[] = [];
</script>

<div class="card w-96 shadow-md">
	<figure class="max-w-96 h-72"><img src={image} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
			<div class="badge border-blue-900 bg-blue-900">{category}</div>
		</h2>
		<p class="my-2 text-justify">
			{description}
		</p>
		<div>
			{#each badges as badge}
				<div class="badge badge-accent mr-1">{badge}</div>
			{/each}
		</div>
		<div class="card-actions mt-2 justify-start">
			{#each links as link}
				<a href={link.link}>
					<button class="btn {link.color}">
						<Icon class="mr-1" icon={link.icon} />
						{link.text}
					</button>
				</a>
			{/each}
		</div>
	</div>
</div>
