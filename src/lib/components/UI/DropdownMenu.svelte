<script>
	import Button from '$lib/Components/UI/Button.svelte';
	export let left = '-50px';
    let dropdown;
    const hideDropdown = ()=>{
        //dropdown.style.display = 'none';
    }
    function handleMouseOver(e) {
        //dropdown.style.display = 'block';
	}
	function handleMouseOut(e) {
       // dropdown.style.display = 'none';
	}
</script>
<main class="flex-center">
	<div class="dropdown" aria-haspopup="true"
	on:mouseover={handleMouseOver} on:focus={handleMouseOver} on:mouseout={handleMouseOut} on:blur={handleMouseOut}>
		<slot name="dropdown"><button>Dropdown</button></slot>
		<div class="arrow tooltip">hello</div>
		<span class="dropdown-content" 
		aria-label="submenu" 
		style="left:{left}"
		 on:click="{hideDropdown}"
	  
		 bind:this={dropdown}>
			<slot name="menu">
				<a href="#1" class="dropdown-link">Link 1</a>
				<a href="#2" class="dropdown-link">Link 2</a>
				<a href="#3" class="dropdown-link">Link 3</a>
			</slot>
		</span>
	</div>
</main>


<style lang="scss">

	/* The container <div> - needed to position the dropdown content */

	.dropdown {
		position: relative;
		display: inline-block;
		--tooltip-arrow-height: 10px;
        --tooltip-arrow-width: 10px;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: block;
		position: absolute;
		width: clamp(18ch, 20%, 25ch);
		// background-color: var(--clr-secondary-400);
		background: linear-gradient(
			180deg,
			var(--clr-primary-300)0%,
			var(--clr-primary-400) 10.45%,
			var(--clr-primary-500) 41.35%
		);

		box-shadow: 0px 8px 16px 0px var(--anchor-box-shadow);
		z-index: 1;
	}
	.arrow {
		display: none;
		height: var(--tooltip-arrow-height);
		background-color: var(--clr-primary-400);
	}

	/* Links inside the dropdown 
    SHITED TO APP.SCSS FILE
    */
	// .dropdown-content a{
	// 	color: $text-bg-primary-dark;
	// 	padding: 12px 16px;
	// 	text-decoration: none;
	// 	display: block;
	// }
	//Used here because when we used slot
//css style in on e component is not
// applied to another one
//Dropdownmenu.svelte

.dropdown-link {
		color: var(--clr-neutral-100);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: var(--clr-primary-400);
	}

	/* Show the dropdown menu on hover 
    .dropdown .dropdown-content:focus-within NEEDED FOR KEYBOARD TABS TO FUNCTION PROPERLY*/
	.dropdown:focus-within .dropdown-content,
	.dropdown:hover .dropdown-content,
	.dropdown .dropdown-content:hover {
		display: block;
	}

	/* Display arrow*/
	.dropdown:focus-within .arrow,
	.dropdown:hover .arrow,
	.dropdown .arrow:hover {
		display: block;
	}

	/* Change the background color of the dropdown button when the dropdown content is shown */
	.dropdown:hover .dropbtn {
		background-color: var(--clr-primary-400);
	}

	//For ARROW
	.tooltip {
		clip-path: polygon(
			0% var(--tooltip-arrow-height),
			calc(100% - 16px) var(--tooltip-arrow-height),
			calc(100% - 11px) 0%,
			calc(100% - 6px) var(--tooltip-arrow-height),
			100% var(--tooltip-arrow-height),
			100% 100%,
			0% 100%
		);
		font-size: 0;
	}
</style>
