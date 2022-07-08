<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/About.svelte';
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import SkillsAndExperiences from '$lib/SkillsAndExperiences.svelte';
	import Work from '$lib/Work.svelte';

	let theme = '';

	onMount(async () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.setAttribute('data-theme', 'dark');
			theme = 'dark';
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			theme = 'light';
		}
	});
</script>

<svelte:head>
	<title>Marco Forster</title>
	<meta name="description" content="Personal Web-Portfolio" />
</svelte:head>

<main>
	<Navbar {theme} />
	<Hero />
	<About />
	<Work />
	<SkillsAndExperiences />
	<Contact />
	<Footer />
</main>
