<script>
  import Logo from './Logo.svelte';
  import Hamburger from './Hamburger.svelte';
  import Menu from './Menu.svelte';

  export let sidebar = false;
</script>

<header class="nav-controller">
  <nav>
    <Hamburger bind:open={sidebar} />
    <Logo />
  </nav>

  <Menu/>
</header>

<style lang="scss">
  // @import '../../../../styles/vars';
  .nav-controller {
    height: calc(var(--fs-300) * 3);
    display: flex;

    color: var(--clr-neutral-200);
    padding: 0 0.5rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-primary-400);
    box-shadow: 0 2px 6px var(--clr-neutral-400);
    margin-bottom: 1rem;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
