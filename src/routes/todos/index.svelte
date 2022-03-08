<script>
import supabase from "$lib/db";

import { onMount } from "svelte";
import Todo from '$lib/todos/Todo.svelte';



    let todos=[];
    onMount( async ()=>{
        getAllTodos();
    });
    const getAllTodos = async ()=>{
        try {
            let {data, error} = await supabase.from('todos').select('*');
        todos = data;
        //console.table(todos); 
        } catch (err) {
            console.log(err);
        }
    }

    //UPDATE
    const updateTodo = async (todo) => {
         try {
            const {data, error} = await supabase
            .from('todos')
            .update({task: todo.task, isComplete: todo.isComplete})
            .eq('id', todo.id);
            await getAllTodos();
         } catch (err) {
             console.log(err)
         }
    }
        //DELETE
        const deleteTodo = async (id) => {
         try {
            const {data, error} = await supabase
            .from('todos')
            .delete()
            .eq('id', id);
            await getAllTodos();
         } catch (err) {
             console.log(err)
         }
    }
</script>

{#each todos as todo}
<main>
<Todo {todo} {updateTodo} {deleteTodo}/>
</main>

{:else}
   <p>No todos found</p>
{/each}


<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>