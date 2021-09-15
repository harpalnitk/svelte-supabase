<script>
	 import '../sass/styles.scss';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Sidebar from '$lib/components/Navigation/Sidebar.svelte';
	let open= false;
</script>
<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>

<main on:click={()=>open =false}>
	<slot/>
</main>

<style lang="scss">
	// @use "../sass/styles.scss"
	main{
	width: clamp(375px, 90vw, 1024px);// width will always be between 375px and 1024px ; in between these values it will be 80vw
    margin: 0 auto;
	overflow-x: auto;
	background: #f5f5f5;
	min-height: calc(100vh - 3rem); //3rem is height of header
	}
</style>
