<script>
    import TextInput from '$lib/components/UI/TextInput.svelte';
    let pwd;
    let email;
	const handleSubmit = () => {
		console.log(`Form submitted Password: ${pwd} Email: ${email}`);
		pwd = "";
		email = "";
	}
</script>

<main>
    <h3>Sign Up</h3>
    <hr>
    <form on:submit|preventDefault={handleSubmit}>
        <TextInput placeholder='Enter Email' inputType='email'></TextInput> 
        <TextInput placeholder='Enter Password' inputType='password'></TextInput> 
        <TextInput placeholder='Enter Text' controlType='textarea'></TextInput>   
    </form>
</main>


<style lang="scss">
main{
    position: relative;
    // min-height: calc(100vh - 4rem);
    padding: var( --section-spacing);
    width: min(30rem, 90vw);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
}
h3{
   color: var(--clr-neutral-400); 
   padding: 1rem;
}

hr {
		border: 1px solid var(--clr-neutral-400);
		margin-bottom: 25px;
        width: 100%;
	}
</style>