import Todo from "./Todo";

export default function TodoList(props) {
    const todoList = props.todo.map(todo => {
        return (
            <Todo
                title={todo.title}
                content={todo.content}
                dateBy={todo.dateBy.toString()}
                dateAdded={todo.dateAdded.toString()}
                key={todo.dateAdded}
            />
        )
    });

    return (
        <ol className="todo-list">
            {todoList}
        </ol>
    )
}
