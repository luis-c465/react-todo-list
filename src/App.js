import React from "react"
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };
    }

    render() {
        return (
            <>
                <SiteHeader
                    addTodo={ this.addTodo }
                />
                <TodoList
                    todo={ this.state.todoList }
                />
            </>
        )
    }

    addTodo = () => {
        const todoList = this.state.todoList;
        const todo = this.WIPGetTodo();
        this.setState({
            todoList: todoList.concat([
                todo,
            ])
        });
    }

    WIPGetTodo() {
        return {
            title: "todo title",
            content: "todo content",
            dateAdded: "todo date added",
        }
    }
}

export default App;
