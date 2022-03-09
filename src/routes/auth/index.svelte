<script>
	import TextInput from '$lib/components/UI/TextInput.svelte';
    import Button from '$lib/components/UI/Button.svelte';
    import { isEmpty, isValidEmail, minLength } from '../../helpers/validation';
	import supabase from '$lib/db';
	let pwd='';
	let email='';

	const clearCredentials = () => {
		pwd='';
		email='';
	}
	$: emailValid = isValidEmail(email);
    $: pwdValid = !isEmpty(pwd) && minLength(pwd,8);
	const handleSignup = async () => {
		console.log(`Signup: Form submitted Password: ${pwd} Email: ${email}`);
		pwd = '';
		email = '';
		const { user, error } = await supabase.auth.signUp({
        // email: 'example@email.com',
        // password: 'example-password',
		email: 'someone2@email.com',
		password: '1234567887654321aa'
        });
		clearCredentials();
     console.log(user,error);
	};
	const handleSignin = async () => {
		console.log(`Signin: Form submitted Password: ${pwd} Email: ${email}`);
		pwd = '';
		email = '';
		const { user, error } = await supabase.auth.signUp({
        email: email,
        password: pwd,
        });
		clearCredentials();
     console.log(user,error);
	};

</script>

<main>
	<h3>Sign Up</h3>
	<hr />
	<form on:submit|preventDefault={handleSignup}>
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
        <Button on:click={handleSignup} disabled={!(pwdValid && emailValid)}>Sign Up</Button>
		<Button on:click={handleSignin} disabled={!(pwdValid && emailValid)}>Sign In</Button>
        <!-- <Button color='success'>Sign Up</Button>
        <Button color='error'>Sign Up</Button>
        <Button href='google.com'>Sign In</Button>
        <Button disabled>Disabled</Button> -->
	</form>
</main>

<style lang="scss">
	main {
		position: relative;
		// min-height: calc(100vh - 4rem);
		padding: var(--section-spacing);
		width: min(30rem, 90vw);
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #f8f8f8;
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
</style>
