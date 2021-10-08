<script>
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css/effect-cards';
	import SwiperCore, { EffectCards, Autoplay } from 'swiper';
    SwiperCore.use([EffectCards, Autoplay]);

	// Import Swiper styles
	import 'swiper/css';
	import Screenshot1Big from '../assets/2021-10-04_18.02.39.webp';
	import Screenshot2Big from '../assets/2021-10-04_18.03.09.webp';
	import Screenshot3Big from '../assets/2021-10-04_18.04.19.webp';
	import Screenshot4Big from '../assets/2021-10-04_18.05.08.webp';
	import Screenshot5Big from '../assets/2021-10-04_18.05.52.webp';
	import Screenshot6Big from '../assets/2021-10-04_18.06.57.webp';
	import Screenshot7Big from '../assets/2021-10-04_18.05.21.webp';
</script>

<Swiper loop={true} effect={'cards'} autoplay='{{
    "delay": 2500,
    "disableOnInteraction": false
  }}'>
	<SwiperSlide><img src={Screenshot1Big} alt="Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot2Big} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot3Big} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot4Big} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot5Big} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot6Big} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot7Big} alt="First Screenshot" /></SwiperSlide>
</Swiper>
