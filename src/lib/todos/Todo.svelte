<script>
    //even finctions can be exported
    //here updateTodo is a function which is being obtained from parent component
    export let todo, updateTodo, deleteTodo;
</script>

<div class='todos' class:done={todo.isComplete}>
    <input type="checkbox" checked={todo.isComplete} on:change=
    "{(e) => {
        todo.isComplete = e.currentTarget.checked;
        updateTodo(todo)
        }}">
    <input type="text" value={todo.task} on:input="{(e)=>{
        todo.task = e.currentTarget.value;
        updateTodo(todo)
        }}">
    <button on:click="{()=> deleteTodo(todo.id)}">Delete</button>
</div>

<style>
        .todos{
        display: flex;
        gap: 10px;
        margin-bottom: 0.25em;
    }
    .done input[type='text']{
        text-decoration: line-through;
    }
</style>