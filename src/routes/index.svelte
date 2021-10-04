<script>
	import 'atropos/css';
	import Atropos from 'atropos';
	import JustBackground from '../assets/JustBackground.png';
	import Logo from '../assets/LogoNoBackground-CuttedToContent.png';
	import ImageCarousel from '../components/ImageCarousel.svelte';
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
            <img src={Logo} alt="Logo" class="rounded-lg justify-center" />
        </div>
		
	</section>

    <section>
		<div class="z-0">
			<ImageCarousel />
		</div>
	</section>
</div>
