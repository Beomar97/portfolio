<script lang="ts">
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaXingSquare from 'svelte-icons/fa/FaXingSquare.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import icon from '$lib/assets/icon.png';
	import { Links } from './data/links';
</script>

<footer class="footer bg-neutral p-10 text-neutral-content">
	<div>
		<img class="w-12" alt="Personal Icon" src={icon} />
		<p>Marco Forster<br />Copyright © 2022 - All right reserved</p>
	</div>
	<div>
		<span class="footer-title">Links</span>
		<div class="grid grid-flow-col gap-4">
			<a href={Links.GITHUB}>
				<button class="btn btn-ghost btn-square">
					<div class="h-8 w-8"><FaGithubSquare /></div>
				</button>
			</a>
			<a href={Links.LINKEDIN}>
				<button class="btn btn-ghost btn-square">
					<div class="h-8 w-8"><FaLinkedin /></div>
				</button>
			</a>
			<a href={Links.XING}>
				<button class="btn btn-ghost btn-square">
					<div class="h-8 w-8"><FaXingSquare /></div>
				</button>
			</a>
			<a href={Links.MEDIUM}>
				<button class="btn btn-ghost btn-square">
					<div class="h-8 w-8"><FaMedium /></div>
				</button>
			</a>
		</div>
	</div>
</footer>
