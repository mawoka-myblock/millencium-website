<script>
	import 'atropos/css';
	import Atropos from 'atropos';
	import JustBackground from '../assets/JustBackground.png';
	import Logo from '../assets/LogoNoBackground-CuttedToContent.png';
	import ImageCarousel from '../components/ImageCarousel.svelte';
	import RedditSVG from "../assets/reddit.svg"
	import DiscordSVG from "../assets/discord.svg"
</script>

<div class="pt-16 lg:pt-24">
	<!-- <div class="atropos my-atropos" id=".my-atropos">
		<div class="atropos-scale">
			<div class="atropos-rotate">
				<div class="atropos-inner">
					<img src={JustBackground} data-atropos-offset="-5" />
					<img src={Logo} data-atropos-offset="05" />
				</div>
			</div>
		</div>
	</div> -->
	<section>
		<h1
			class="text-center text-3xl text-red-600 hover:text-red-800 transition duration-200 font-bold"
		>
			Millencium
		</h1>
        <div class="flex justify-center pt-3">
            <img src={Logo} alt="Logo" class="rounded-lg justify-center filter" />
        </div>
		
	</section>

    <section>
		<div class="z-0 px-6 lg:px-96 pt-6">
			<div class="rounded-lg border-4 border-red-600 border-opacity-75 filter drop-shadow-lg">
				<ImageCarousel />
			</div>
			
		</div>
	</section>

	<section>
		<div class="px-6 lg:px-96 pt-6">
			<div class="grid grid-cols-3 gap-3">
				<div>
					<a href="https://reddit.com/r/Millencium" class="flex justify-center h-full rounded-xl" style="background-color: #FF4500;">
						<img src={RedditSVG} alt="Reddit Icon" class="lg:h-48 h-24">
					</a>
				</div>
				<div class="col-span-2">
					<a href="https://discord.com" class="flex justify-center h-full rounded-xl" style="background-color: #5865F2;">
						<img src={DiscordSVG} alt="Discord Icon" class="lg:h-48 h-24">
					</a>
				</div>
			</div>
		</div>
		
	</section>

	<section>
		<div class="divide-y-2 divide-yellow-500 px-8 lg:px-96 pt-24">
			<p></p>
			<p></p>
		</div>

		<div class="px-6 lg:px-96 pt-6">
			<h1 class="lg:text-5xl text-3xl font-bold lg:ml-14">About Millencium</h1>
			<p class="text-center my-2">
				We, <a href="http://mawoka.eu.org/?utm_source=About-Millencium&utm_medium=Millencium-Website">Mawoka</a>, LeMustache and
				PinkBeard maintain the server.
			</p>
		</div>
	</section>
</div>
