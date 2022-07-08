<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import FaXing from 'svelte-icons/fa/FaXing.svelte';
	import FaMediumM from 'svelte-icons/fa/FaMediumM.svelte';
	import { Links } from './data/links';
</script>

<div
	id="home"
	class="hero min-h-[95vh] w-full"
	style="background-image: url(https://live.staticflickr.com/65535/51050689088_c248c92f75_o.jpg);"
>
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-6xl font-bold">Developer. Student.<br /> Esports Enthusiast.</h1>
			<p class="mb-5 text-xl">
				Ex-System Engineer turned Software Engineer.<br /> Computer Science Student at the Zurich
				University of Applied Sciences.<br /> Very passionate about Esports.
			</p>
			<a href={Links.GITHUB}>
				<button class="btn btn-primary btn-square">
					<div class="h-8 w-8 "><FaGithub /></div>
				</button>
			</a>
			<a href={Links.LINKEDIN}>
				<button class="btn btn-primary btn-square">
					<div class="h-8 w-8 "><FaLinkedinIn /></div>
				</button>
			</a>
			<a href={Links.XING}>
				<button class="btn btn-primary btn-square">
					<div class="h-8 w-8 "><FaXing /></div>
				</button>
			</a>
			<a href={Links.MEDIUM}>
				<button class="btn btn-primary btn-square">
					<div class="h-8 w-8 "><FaMediumM /></div>
				</button>
			</a>
		</div>
	</div>
</div>
