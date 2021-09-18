import React from "react"
import Modal from "./Modal";
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import MakeTodoForm from "./MakeTodoForm";
import './App.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        console.log(localStorage.getItem("todolist"));
        this.state = {
            todoList: JSON.parse(localStorage.getItem("todolist")) ?? [],
            showModal: false,
        };
    }

    render() {
        return (
            <>
                <Modal
                    show={this.state.showModal}
                    onClose={() => this.setState({ showModal: false })}
                    title="Modal title"
                >
                    <MakeTodoForm callback={todo => {
                        this.addTodo(todo);
                        this.setState({ showModal: false });
                    }}
                    />
                </Modal>

                <SiteHeader
                    addTodo={() => this.setState({showModal: true})}
                />
                <TodoList
                    todo={ this.state.todoList }
                />
            </>
        )
    }

    addTodo = todo => {
        const todoList = this.state.todoList.concat([todo]);
        this.setState({todoList: todoList});
        localStorage.setItem("todolist", JSON.stringify(todoList))
    }
}
