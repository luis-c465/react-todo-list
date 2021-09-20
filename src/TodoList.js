import Todo from "./Todo";

export default function TodoList(props) {
    return (
        <ol className="todo-list">
            {props.todo.map(getTodo)}
        </ol>
    )

    function getTodo(todo) {
        return (
            <Todo
                title={todo.title}
                content={todo.content}
                dateBy={todo.dateBy.toLocaleString()}
                dateAdded={todo.dateAdded.toLocaleString()}
                remove={() => props.removeTodo(+todo.dateAdded)}
                key={+todo.dateAdded}
            />
        )
    }
}
