<script>
    export let type = "button";
   // export let caption;
    export let href = null;
     export let mode = null;
    export let color= null;
    export let disabled = false;
  </script>
{#if href}
<a {href}><span><slot/></span></a>
{:else}
<button class="{mode} {color}" {type} on:click {disabled}>
  <span><slot/></span>
</button>
{/if}

<style lang="scss">

a,button{
    font: inherit;
    cursor: pointer;
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    color: var(--clr-secondary-400);
    font-size: 18px;
    border-radius: 40px;
    box-shadow: -2px -2px 8px rgba(255,255,255,1),
                -2px -2px 12px rgba(255,255,255,0.5),
                inset 2px 2px 4px rgba(255,255,255,0.1),
                2px 2px 8px rgba(0,0,0,0.15);
    outline: none;
    border: none;
}
.success{
    color: var(--clr-success-500); 
}
.error{
    color: var(--clr-error-300); 
}
a:hover,button:hover{
    box-shadow: inset -2px -2px 8px rgba(255,255,255,1),
                inset -2px -2px 12px rgba(255,255,255,0.5),
                inset 2px 2px 4px rgba(255,255,255,0.1),
                inset 2px 2px 8px rgba(0,0,0,0.15); 
}
a:hover span,button:hover span{
    display: inline-block;
    transform: scale(0.9);
}
a:active span,button:active span{
    display: inline-block;
    transform: scale(1.1);
}
  button:disabled,
  button:disabled:hover,
  button:disabled:active {
    background: #ccc;
    border-color: #ccc;
    color: #959595;
    box-shadow: none;
    cursor: not-allowed;
  }
</style>