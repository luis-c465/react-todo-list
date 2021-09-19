import Todo from "./Todo";

export default function TodoList(props) {
    const todoList = props.todo.map((todo, index) => {
        return (
            <Todo
                title={todo.title}
                content={todo.content}
                dateBy={todo.dateBy.toLocaleString()}
                dateAdded={todo.dateAdded.toLocaleString()}
                remove={() => props.removeTodo(index)}
                key={+todo.dateAdded}
            />
        )
    });

    return (
        <ol className="todo-list">
            {todoList}
        </ol>
    )
}
