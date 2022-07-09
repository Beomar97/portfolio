<script lang="ts">
	let name = '';
	let message = '';

	function openMailClientWithContent() {
		window.open(
			`mailto:kiosks.goats-0p@icloud.com?cc=&subject=Message from ${name}&body=${message}`,
			'_self'
		);
	}
</script>

<div id="contact" class="my-24">
	<h1 class="mb-8 text-center text-6xl font-bold capitalize">Send me a message</h1>
	<div class="flex flex-col items-center">
		<input
			bind:value={name}
			type="text"
			placeholder="Your Name"
			class="input input-bordered mb-8 w-2/3 max-w-[42rem]"
		/>
		<textarea
			bind:value={message}
			class="textarea textarea-bordered mb-8 min-h-[12rem] w-2/3 max-w-[42rem]"
			placeholder="Your Message"
		/>
		<button class="btn btn-primary justify-self-start" on:click={openMailClientWithContent}
			>Send Message via Mail Client</button
		>
	</div>
</div>
