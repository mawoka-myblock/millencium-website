<script>
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css/effect-cards';
	import SwiperCore, { EffectCards, Autoplay } from 'swiper';
    SwiperCore.use([EffectCards, Autoplay]);

	// Import Swiper styles
	import 'swiper/css';
	import Screenshot1 from '../assets/2021-10-04_18.02.39.jpg';
	import Screenshot2 from '../assets/2021-10-04_18.03.09.jpg';
	import Screenshot3 from '../assets/2021-10-04_18.04.19.jpg';
	import Screenshot4 from '../assets/2021-10-04_18.05.08.jpg';
	import Screenshot5 from '../assets/2021-10-04_18.05.52.jpg';
	import Screenshot6 from '../assets/2021-10-04_18.06.57.jpg';
	import Screenshot7 from '../assets/2021-10-04_18.05.21.jpg';
</script>

<Swiper loop={true} effect={'cards'} autoplay='{{
    "delay": 2500,
    "disableOnInteraction": false
  }}'>
	<SwiperSlide><img src={Screenshot1} alt="Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot2} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot3} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot4} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot5} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot6} alt="First Screenshot" /></SwiperSlide>
	<SwiperSlide><img src={Screenshot7} alt="First Screenshot" /></SwiperSlide>
</Swiper>
