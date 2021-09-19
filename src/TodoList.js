import Todo from "./Todo";

export default function TodoList(props) {
    const todoList = props.todo.map((todo, index) => {
        return (
            <Todo
                title={todo.title}
                content={todo.content}
                dateBy={todo.dateBy.toLocaleString()}
                dateAdded={todo.dateAdded.toLocaleString()}
                // FIXME: Remove button removes incorrect todo
                // due to index of removeTodo not changing
                // to match index of corresponding todo
                // when props.todolist changes
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
