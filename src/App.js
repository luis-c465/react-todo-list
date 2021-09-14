import React from "react"
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.setState({
            todoList: [],
        })
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

    addTodo() {
        // TODO: Finish method
        console.log("WIP: addTodo called")
    }


}

export default App;
