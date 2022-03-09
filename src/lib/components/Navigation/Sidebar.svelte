<script>
	  import Hoverable from '$lib/components/Hoverable.svelte';
	export let open = false;
	function closeSidebar() {
		open = !open;
	}
</script>

<aside class="navigation" class:open>
	<ul>
        <Hoverable let:hoveringI={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/">
                <span class="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                <span class="title">Profile</span>
                </a>
            </li>
        </Hoverable>
        <Hoverable let:hoveringI={hovering} >
            <li class="list" class:active={hovering} on:click={closeSidebar} >
                <b></b>
                <b></b>
                <a href="/">
                    <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                    <span class="title">Home</span>
                </a>
            </li>
        </Hoverable>


        <Hoverable let:hoveringI={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/test">
                    <span class="icon"><i class="fa fa-question" aria-hidden="true"></i></span>
                    <span class="title">Test</span>
                    </a>
            </li>
        </Hoverable>
        <Hoverable let:hoveringI={hovering}>
            <li class="list" class:active={hovering} on:click={closeSidebar}>
                <b></b>
                <b></b>
                <a href="/todos">
                    <span class="icon"><i class="fa fa-question" aria-hidden="true"></i></span>
                    <span class="title">Todos</span>
                    </a>
            </li>
        </Hoverable>
    </ul>
</aside>

<style lang="scss">
	// @import '../../../../styles/vars';
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1000;
		background-color: var(--clr-primary-400);
		//min-height: 100%;
		//overflow-y: scroll;
	}

	.open {
		left: 0;
	}
	.navigation{
        position: absolute;
        top: 0;
        bottom: 0;
        width:15rem;
        max-width: 70vw;
        min-height: 100vh;
        border-bottom-right-radius: 1rem;
        // border-left: 5px solid var(--clr-primary-400);
        box-sizing: initial;
        background: var(--clr-primary-400);
       // transition: width 0.5s;
    }
    .navigation ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 1rem;
        padding-top: 1.5rem;
    }
    .navigation ul li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
    .navigation ul li.active {
        background: var(--clr-secondary-400);
    }
    .navigation ul li b:nth-child(1) {
    position: absolute;
    top: -1rem;
    height: 1rem;
    width: 100%;
    background: var(--clr-secondary-400);
    display: none;
    }
    .navigation ul li b:nth-child(1)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--clr-primary-400);
    border-bottom-right-radius: 1rem;
    }
    .navigation ul li b:nth-child(2) {
    position: absolute;
    bottom: -1rem;
    height: 1rem;
    width: 100%;
    background:var(--clr-secondary-400);
    display: none;
    }
    .navigation ul li b:nth-child(2)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:  var(--clr-primary-400);
    border-top-right-radius: 1rem;
    }
    .navigation ul li.active b:nth-child(1),
    .navigation ul li.active b:nth-child(2){
       display: block;
    }
    .navigation ul li a{
        position: relative;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: var(--clr-neutral-300);
    } 
    .navigation ul li.active a{
        color: var(--clr-neutral-100);
    }
    .navigation ul li a .icon{
        position: relative;
        min-width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        display: block;

    } 
    .navigation ul li a .icon i{
       font-size: 1em;
    } 
    .navigation ul li a .title{
        position: relative;
        height: 3rem;
        line-height: 3rem;
        display: block;
        padding-left: .5rem;
        white-space: normal;

    } 


</style>
