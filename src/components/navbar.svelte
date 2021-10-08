<script>
	import LogoBig from '../assets/LogoNoBG.webp';
	let openMenu = true;
	let closeMenu = false;
	let menuItems = false;
	const toggleMenu = () => {
		console.log(openMenu, closeMenu, menuItems);
		openMenu = !openMenu;
		closeMenu = !closeMenu;
		menuItems = !menuItems;
	};
</script>

<nav
	class="w-screen px-4 lg:px-10 py-2 flex flex-col lg:flex-row lg:items-center fixed navbar shadow-md z-50"
>
	<!-- Our logo and button -->
	<section class="w-full lg:w-max flex justify-between">
		<!-- Logo -->
		<span class="font-black tracking-tight text-l text-red-600 custom-font"> Millencium </span>

		<!-- Our open/close buttons -->
		<!-- Open menu -->
		<button class="lg:hidden" id="open-menu" on:click={toggleMenu} class:hidden={!openMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				display="block"
				id="TextAlignJustified"
			>
				<path d="M3 6h18M3 12h18M3 18h18" />
			</svg>
		</button>

		<!-- Close menu -->
		<button class="hidden" id="close-menu" class:hidden={!closeMenu} on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
				display="block"
				id="Cross"
			>
				<path d="M20 20L4 4m16 0L4 20" />
			</svg>
		</button>
	</section>

	<!-- Our list of items -->
	<ul id="menu-items" class="lg:flex w-full flex-col lg:flex-row lg:pl-6" class:hidden={!menuItems}>
		<li class="py-2">
			<a class="text-lg font-medium lg:px-4 text-gray-600 hover:text-red-600" href="/">Home</a>
		</li>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-red-600"
				href="https://www.reddit.com/r/Millencium/">Reddit</a
			>
		</li>
		<li class="py-2">
			<a
				class="text-lg font-medium lg:px-4 text-gray-600 hover:text-red-600"
				href="https://discord.gg/XgAnky2eeN">Discord</a
			>
		</li>
		<!-- <li class="py-2">
			<a class="text-lg font-medium lg:px-4 text-gray-600 hover:text-red-600" href="/"
				>The last one...</a
			>
		</li> -->
	</ul>
	<div class="justify-self-end lg:flex hidden ">
		<p class="text-lg font-medium text-gray-600 hover:text-red-600">IP:</p>
		<code class="text-lg font-medium px-4 text-gray-600 hover:text-red-600 select-all">millencium.eu.org</code>
	</div>
</nav>

<style>
	.navbar {
		background: rgba(255, 255, 255, 0.836);
	}
</style>
