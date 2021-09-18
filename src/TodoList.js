import React from "react";
import Todo from "./Todo";

// TODO: convert to functional component
// and add todo key
// which is an immutable number of how many todos have been added
// ? should uses state ?
export default function TodoList(props) {
    const todoList = props.todo.map(todo => {
        return (
            <Todo
                title={todo.title}
                content={todo.content}
                dateBy={todo.dateBy.toString()}
                dateAdded={todo.dateAdded.toString()}
            />
        )
    });

    return (
        <ol className="todo-list">
            {todoList}
        </ol>
    )
}
