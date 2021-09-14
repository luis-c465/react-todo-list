import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    render() {
        const todoList = this.props.todo.map((step, todo) => {
            return (
                <Todo
                    title={todo.title}
                    content={todo.content}
                    dateAdded={todo.dateAdded}
                />
            )
        });
        return (
            <ol className="TodoList">
                {todoList}
            </ol>
        )
    }
}

export default TodoList;
