<script lang="ts">
	import signature from '$lib/assets/signature.png';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
</script>

<div id="about" class="my-24 p-8">
	<h1 class="mb-8 text-center text-6xl font-bold capitalize">
		I know that <span class="text-primary">good Software</span> means
		<span class="text-primary">good Business</span>
	</h1>
	<div class="flex flex-wrap justify-evenly">
		<div class="my-8 max-w-2xl">
			<p class="text-justify text-2xl">
				<span class="text-4xl text-primary">Hi</span> everybody! My name is Marco and I'm a
				relatively new when it comes to coding. I am currently studying Computer Science at the
				Zurich University of Applied Sciences. I was born and raised in Zurich and was fortunate
				enough to get into computers at a very young age. After being in the field of Systems
				Engineering for some time, I am now working as a Software Engineer. Privately I am a big fan
				of all things Space and Esports. I hope you enjoy your time on my webpage. <br /><br />
				Regards, <br />
				Marco
				<img class="max-w-[15rem]" src={signature} alt="Personal Signature" />
			</p>
		</div>
		<div class="my-8 max-w-2xl">
			<Splide
				hasTrack={false}
				aria-label="My Favorite Images"
				options={{
					type: 'loop',
					autoplay: true
				}}
			>
				<SplideTrack>
					<SplideSlide>
						<img
							src="https://live.staticflickr.com/65535/51065373466_3166f82c5e_c.jpg"
							alt="Me at Thorang-La Pass"
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src="https://live.staticflickr.com/65535/51051498312_74ec76d3f7_c.jpg"
							alt="Me at Matterhorn, Zermatt"
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src="https://live.staticflickr.com/65535/51062966523_4ab14e2ddc_c.jpg"
							alt="Me on the Annapurna Circuit, Nepal"
						/>
					</SplideSlide>

					<SplideSlide>
						<img
							src="https://live.staticflickr.com/65535/51051498582_eafe5dcf49_c.jpg"
							alt="Me at Kleine Scheidegg"
						/>
					</SplideSlide>
				</SplideTrack>

				<div class="splide__progress">
					<div class="splide__progress__bar" />
				</div>
			</Splide>
		</div>
	</div>
</div>
