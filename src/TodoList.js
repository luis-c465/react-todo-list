import Todo from "./Todo";

export default function TodoList(props) {
    const todoList = props.todo.map((todo) => {
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
    });

    return (
        <ol className="todo-list">
            {todoList}
        </ol>
    )
}
