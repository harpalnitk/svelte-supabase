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
    export let posts;
</script>

<h1>Posts</h1>
{JSON.stringify(posts)}
 <!-- shadow endpoint means that if /api-test/index.js is in same folder as  
test/index.svelte then the entire script context = module is not required-->
