<script>
	import TextInput from '$lib/components/UI/TextInput.svelte';
    import Button from '$lib/components/UI/Button.svelte';
    import { isEmpty, isValidEmail, minLength } from '../../helpers/validation';
	import supabase from '$lib/db';
    import {user} from '$lib/user-store';
    import { goto } from '$app/navigation';


	let pwd='';
	let email='';
	let err;
	let isNewRegistration = false;


	
	$: emailValid = isValidEmail(email);
    $: pwdValid = !isEmpty(pwd) && minLength(pwd,8);
	
	
	const handleAuth = async () => {
		
		try {
		console.log(`Signup: Form submitted Password: ${pwd} Email: ${email}`);
		if(isNewRegistration){
			//SignUp
		const { user: userDetails, error } = await supabase.auth.signUp({
		email: email,
		password: pwd
        });
		console.log(userDetails,error);
		if(error){
			throw error.message;
		}
	    $user = userDetails;
		}else{
			//SignIn
			const { user: userDetails, error} = await supabase.auth.signIn({
        email: email,
        password: pwd,
        });
		console.log(userDetails,error);
		if(error){
			throw error.message;
		}
	    $user = userDetails;
		}
		goto('/todos');
		} catch (error) {
			console.log('caught error', error)
			err = error;
		}
		
};


	const logOut= async () => {
try {
	let {error} = await supabase.auth.signOut();
	if(error){
		throw error.message;
	}
	$user = false;
	goto('/login');
} catch (error) {
	err= error;
	console.log(err);
}
	}

</script>

<main class='flex-center'>
	<h3>{isNewRegistration ? 'Sign Up' : 'Sign In'}</h3>
	<hr />
	<form on:submit|preventDefault={handleAuth}>
		{#if err}
		<p class='error'>{err}</p>
		{/if}
		<TextInput 
        placeholder="Enter Email" 
        inputType="email" 
        value={email} 
        valid={emailValid}
        validityMessage="Please enter a valid email"
        on:input={(event) => (email = event.target.value)}/>
		<TextInput 
        placeholder="Enter Password" 
        inputType="password" 
        value={pwd}
        valid={pwdValid}
        validityMessage="Password must be minimum 8 characters long"
        on:input={(event) => (pwd = event.target.value)}/>
		{#if isNewRegistration}
		<div class="disclaimer">By creating an account you agree to our <a href="#terms">Terms & Privacy</a>.</div>
		<Button on:click={handleAuth} disabled={!(pwdValid && emailValid)}>Sign Up</Button>
		<p class='link' on:click="{()=> isNewRegistration = false}">Already have an account?</p>
		{:else}
		<Button on:click={handleAuth} disabled={!(pwdValid && emailValid)}>Log In</Button>
		<p class='link' on:click="{()=> isNewRegistration = true}">Create a new account.</p>
		{/if}
      
		
        <!-- <Button color='success'>Sign Up</Button>
        <Button color='error'>Sign Up</Button>
        <Button href='google.com'>Sign In</Button>
        <Button disabled>Disabled</Button> -->
	</form>
	{#if $user.email}
		<button on:click="{logOut}">Logout</button>
	{/if}
</main>

<style lang="scss">
	main {
		position: relative;
		// min-height: calc(100vh - 4rem);
		padding: var(--section-spacing);
		width: min(30rem, 90vw);
		margin: 0 auto;
		flex-direction: column;
		background: #f8f8f8;
		box-shadow: 15px 15px 60px rgba(0,0,0,0.15);
	}
	h3 {
		color: var(--clr-neutral-400);
		padding: 1rem;
	}

	hr {
		border: 1px solid var(--clr-neutral-400);
		margin-bottom: 25px;
		width: 100%;
	}
	.error{
		color: var(--clr-error-400);
        margin: 0.25rem 0;
        font-size: var(--fs-300);
	}
	.link{
		color: var(--clr-secondary-300);
		font-weight: 600;
		margin: 0.25rem 0;
        font-size: var(--fs-400);
		text-align: center;
		cursor: pointer;
	}
	a {
		color: var(--clr-secondary-400);
		&:hover{
			color: var(--clr-secondary-500);
		}
	}
	.link:hover{
		opacity: 0.8;
	}
	.disclaimer{
		margin: 0.5rem auto;
		font-size: var(--fs-200);
		font-weight: 300;
	}
</style>
