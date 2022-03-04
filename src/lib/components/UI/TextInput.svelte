<script>

  export let placeholder;
  export let inputType = 'text';
  // export let controlType = null;
  export let id='';
  // export let rows = null;
  export let value;
  export let valid = true;
  export let validityMessage = ''; //empty string is treated as not true
  let touched = false;
  let showPW = false;
  $:type = inputType === 'password' ? showPW ? "text" : "password" : inputType;

  $: console.log('valid',valid);
</script>
{#if validityMessage && !valid && touched}
<div class="error-message">{validityMessage}</div>
{/if}
<div class="form-control">
<!-- {#if controlType === 'textarea'}
<textarea
class:invalid={!valid && touched}
{rows}
{id}
bind:value
on:blur={() => (touched = true)}
{placeholder}
/>
{:else} -->

  <input 
  class:invalid={!valid && touched}
  {type}
  {id}
  {value}
  on:input
  on:blur={() => (touched = true)}
  {placeholder}
  >
  {#if inputType === 'password'}
  <div id="toggle" 
  class:active={showPW}
  on:click={() => showPW = !showPW}>&#128065;</div>
  {/if}

<!-- {/if} -->
</div>





<style lang="scss">
.form-control{
    position: relative;
    width: 270px;
    height: 50px;
    margin-bottom: 1rem;
}
.form-control input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 20px;
    font-size: var(--fs-300);
    box-sizing: border-box;
    outline: none;
    border-radius: var(--fs-100);
    box-shadow: -4px -4px 10px rgba(white,1),
               inset 4px 4px 10px rgba(black,.05),
               inset -4px -4px 10px rgba(white,1),
               4px 4px 10px rgba(black,.05);
}
.form-control input::placeholder{
    color: #ccc;
}
.form-control input {
    border-radius: 3px 3px 0 0;
    border-bottom: 2px solid var(--clr-neutral-100);
    transition: border-color 0.1s ease-out;
  }
  .form-control input:focus {
    border-color: var(--clr-secondary-400);
    outline: none;
  }
  .form-control input.invalid:focus {
    border-color: var(--clr-error-400);
    outline: none;
  }

  .invalid {
    border-color: var(--clr-error-400);
    background: var(--clr-error-300);
  }

//128065	
#toggle{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
   // width: 30px;
   // height: 30px;
    font-size: var(--fs-500);
   // background-size: cover;
    cursor: pointer;
}
#toggle::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    display: none;
}
#toggle.active::before{
display: block;
}
.error-message {
    color: var(--clr-error-400);
    margin: 0.25rem 0;
    font-size: var(--fs-200);
  }
</style>