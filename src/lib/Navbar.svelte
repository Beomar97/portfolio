<script lang="ts">
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import WiSolarEclipse from 'svelte-icons/wi/WiSolarEclipse.svelte';
	import WiLunarEclipse from 'svelte-icons/wi/WiLunarEclipse.svelte';

	export let theme = '';

	function toggleTheme() {
		if (document.documentElement.getAttribute('data-theme') !== 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			theme = 'dark';
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			theme = 'light';
		}
	}
</script>

<div class="navbar sticky top-0 z-50 h-[5vh] bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label for="menu" tabindex="0" class="btn btn-ghost lg:hidden">
				<MenuIcon />
			</label>
			<ul
				id="menu"
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
			>
				<li><a class="text-2xl" href="#home">Home</a></li>
				<li><a class="text-2xl" href="#about">About</a></li>
				<li><a class="text-2xl" href="#work">Work</a></li>
				<li><a class="text-2xl" href="#skills">Skills & Experiences</a></li>
				<li><a class="text-2xl" href="#contact">Contact</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost text-4xl normal-case" href="/">Marco Forster</a>
	</div>
	<div class="navbar-center hidden text-2xl lg:flex">
		<ul class="menu menu-horizontal p-0">
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#work">Work</a></li>
			<li><a href="#skills">Skills & Experiences</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		{#if theme !== 'dark'}
			<button class="btn swap-on btn-ghost btn-square" on:click={toggleTheme}>
				<WiSolarEclipse />
			</button>
		{/if}
		{#if theme === 'dark'}
			<button class="btn swap-off btn-ghost btn-square" on:click={toggleTheme}>
				<WiLunarEclipse />
			</button>
		{/if}
	</div>
</div>
