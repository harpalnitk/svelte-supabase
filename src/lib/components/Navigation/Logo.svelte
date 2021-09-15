<!-- <svg  class="logo-controller">
	<text x="0" y ="50%" text-anchor="middle">ACME</text>
</svg> -->
<div class="logo-controller">
  <svg width="auto" height="30">
    <text x="0" y="20">MY LOGO</text>
  </svg>
</div>

<style lang="scss">
  // @import '../../../../styles/vars';
  .logo-controller {
    display: flex;
    align-self: center;

    svg {
      text {
        fill: var(--clr-neutral-400);
        cursor: pointer;
        &:hover {
          fill: var(--clr-neutral-700);
        }
      }
    }
  }
</style>
