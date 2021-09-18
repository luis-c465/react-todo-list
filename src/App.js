import React from "react"
import Modal from "./Modal";
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import MakeTodoForm from "./MakeTodoForm";
import './App.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
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
        const todoList = this.state.todoList;
        this.setState({
            todoList: todoList.concat([
                todo,
            ]),
        });
    }
}
