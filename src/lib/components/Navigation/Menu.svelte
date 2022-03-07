<script>
  import { page } from '$app/stores';
 // $: console.log('segment in menu', segment);
</script>


<nav class="menu-controller">
  <a aria-current="{$page.url.pathname === '/' ? 'page' : undefined}" href="/">Home</a>
  <a aria-current="{$page.url.pathname === '/test' ? 'page' : undefined}" href="/test">Test</a>
  <a aria-current="{$page.url.pathname === '/auth' ? 'auth' : undefined}" href="/auth">Login</a>
  
</nav>

<style lang="scss">
  //  @import '../../../../styles/vars';
  .menu-controller {
    height: 100%;
    display: none;
    a {
      font-size: var(--fs-300);
      color: currentColor;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      width: 100%;
      height: 100%;
      align-items: center;
      display: flex;
   
      &:hover {
        color: var(--clr-neutral-400);
      }
    }
  }
  @media (min-width: 768px) {
    .menu-controller {
      display: flex;
      // align-items: center;
      // align-self: center;

      a:not(:last-child) {
        margin-right: var(--fs-300);
      }
    }
  }

  [aria-current] {
		position: relative;
		display: inline-block;

	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 3px;
		background-color: var(--clr-secondary-400);
		display: block;
		bottom: -3px;
	}
</style>
