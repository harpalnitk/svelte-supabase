<script>
import supabase from "$lib/db";

import { onMount } from "svelte";
import Todo from '$lib/todos/Todo.svelte';



    let todos=[];
    let newTask = '';
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
    //ADD

    const addNewTodo = async ()=>{
        try {
            if(newTask !== ''){
            const {data, error} = await supabase
            .from('todos')
            .insert([{task:newTask}]);
            await getAllTodos();
            newTask = '';
            }

         } catch (err) {
             console.log(err)
         } 
    }

    //To add task on press enter on page
    const handleKeyPress = (event)=>{
 if(event.key === 'Enter' && newTask !== ''){
     addNewTodo();
 }
    }
</script>
<main>
    <div class="add-todo">
        <input type="text" bind:value={newTask}>
        <button on:click="{()=> addNewTodo()}">Add Task</button>
    </div>
{#each todos as todo}

<Todo {todo} {updateTodo} {deleteTodo}/>


{:else}
   <p>No todos found</p>
{/each}
</main>
<svelte:window on:keypress="{handleKeyPress}"></svelte:window>
<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .add-todo{
        display: flex;
        margin-bottom: 1em;
        gap: 1em;
    }

</style>