<script>
	import 'atropos/css';
	import Atropos from 'atropos';
	import JustBackground from '../assets/JustBackground.png';
	import Logo from '../assets/LogoNoBackground-CuttedToContent.png';
	import ImageCarousel from '../components/ImageCarousel.svelte';
	import RedditSVG from '../assets/reddit.svg';
	import DiscordSVG from '../assets/discord.svg';
	import MawokaLink from '../components/MawokaLink.svelte';
</script>

<svelte:head>
	<title>Millencium - Home</title>
</svelte:head>

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
					<a
						href="https://reddit.com/r/Millencium"
						class="flex justify-center h-full rounded-xl"
						style="background-color: #FF4500;"
					>
						<img src={RedditSVG} alt="Reddit Icon" class="lg:h-48 h-24" />
					</a>
				</div>
				<div class="col-span-2">
					<a
						href="https://discord.com"
						class="flex justify-center h-full rounded-xl"
						style="background-color: #5865F2;"
					>
						<img src={DiscordSVG} alt="Discord Icon" class="lg:h-48 h-24" />
					</a>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="divide-y-2 divide-red-600 px-8 lg:px-96 pt-24">
			<p />
			<p />
		</div>

		<div class="px-6 lg:px-96 pt-6">
			<h1 class="lg:text-5xl text-3xl font-bold lg:ml-14">About Millencium</h1>
			<p class="text-center my-2 lg:mx-20">
				Millencium is a vanilla-server running on the <b>1.16.5</b>. We're having an economy-system
				and tweaks that make your live easier, for example a teleportation-system, nether and
				endportals on every trainstation and a simple trading-system. If you got intersted, join us
				at
				<code class="text-lg font-medium text-gray-600 hover:text-red-600 select-all pl-1"
					>millencium.eu.org</code
				>.
			</p>
		</div>
	</section>

	<section>
		<div class="divide-y-2 divide-red-600 px-8 lg:px-96 pt-24">
			<p />
			<p />
		</div>

		<div class="px-6 lg:px-96 pt-6">
			<h1 class="lg:text-5xl text-3xl font-bold lg:ml-14">About The Staff</h1>
			<p class="text-center my-2 lg:mx-20">
				We, <MawokaLink utm_source="Millencium-About-Staff"/>, LeMustache and PinkBeard are the team. LeMustache is mainly responsible
				for the Discord and in-game cheats and hacks. <MawokaLink utm_source="Millencium-About-Staff" /> is responsible for the technical
				stuff and also in parts for LeMustache's parts.
			</p>
		</div>
	</section>
</div>
