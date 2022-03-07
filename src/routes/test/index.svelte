<!-- <script context='module'>
export const load = async ({fetch}) => {
    const res = await fetch('/api-test');
    const {posts} = await res.json();
    return {
        props:{
            posts,
        },
    };
};

</script> -->
<script>
    //  to mitigate localStorage not defined error
    import {browser} from "$app/env";
    export let posts;

    // BODY PARSING

    const submit = async ()=>{
      const res = await fetch('/api-test/contact',{
          method: 'POST',
          body: JSON.stringify('harpalnitk@gmail.com'),
      });  
    }
</script>
<main>
    <ol>
        <li><h4>Page/Shadow Endpoints</h4></li>
        <li><h4>Body Parsing</h4></li>
        <li><h4>Optional SSR on routes</h4></li>
    </ol>
    
    <h2>Posts</h2>
    {JSON.stringify(posts)}
     <!-- shadow endpoint means that if /api-test/index.js is in same folder as  
    test/index.svelte then the entire script context = module is not required-->
    
    
    <!-- BODY PARSING -->
    <h2>Body Parsing-Post request</h2>
    <div>
        <button on:click="{()=> submit()}">
            Submit Post Request
            </button>
    </div>
    <h2>Body Parsing-Post request with Form</h2>
    <div >
        <form action="/api-test/contact" method="POST" class='form'>
            <input type="email" name="email" value="harpalnitk@gmail.com">
            <input type="submit">
            </form>
    </div>
    <h2>Optional SSR on routes</h2>
    <!-- {JSON.stringify(localStorage.getItem('theme'))} -->
    <!-- it wil give error localStorage is not defined on server -->
    {JSON.stringify(browser && localStorage.getItem('theme'))}

    <!-- OR the other approach is to tell sveltekit not to server side render this page 
    FOR this we use HOOKS
    -->
</main>



<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form{
        display: flex;
        flex-direction: column;
    }
    div{
        margin-bottom: 1rem;
    }
    h2{
        display: block;
        margin: 0 auto 1rem;
        
    }
</style>
