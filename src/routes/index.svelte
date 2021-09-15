<script>
    import supabase from '$lib/db';

async function signUp(){
        // Create a new user
const { user, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
});
console.log(user,error);
}


let room = '';
async function addRoom(){
// Create a new chat room
const newRoom = await supabase
  .from('rooms')
  .insert({ name: room, size:'big' })
}

async function getRooms(){
    // Get public rooms and their messages
return await supabase
  .from('rooms')
//  .select(`*`)
  //Toselect all
  .select(`
    name,
    size
  `);
}
</script>

{#await getRooms()}
  Loading...
{:then response}
    <pre>{JSON.stringify(response,null,2)}</pre>
{/await}

<input type="text" bind:value={room}>
<button on:click="{addRoom}">Add Room</button>
<button on:click="{signUp}">SignUp</button>