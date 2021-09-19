import React from "react"
import Modal from "./Modal";
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import MakeTodoForm from "./MakeTodoForm";
import './App.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        const todolist = localStorage.getItem("todolist");
        this.state = {
            todoList: JSON.parse(todolist, this.json_deserialize_helper) ?? [],
            showModal: false,
        };
    }

    render() {
        return (
            <>
                <Modal
                    show={this.state.showModal}
                    onClose={() => this.setState({ showModal: false })}
                    title="Create todo"
                >
                    <MakeTodoForm callback={todo => {
                        this.addTodo(todo);
                        this.setState({ showModal: false });
                    }}
                    />
                </Modal>

                <SiteHeader
                    addTodo={() => this.setState({ showModal: true })}
                    clearTodo={() => this.clearTodo()}
                />
                <TodoList
                    todo={this.state.todoList}
                    removeTodo={this.removeTodo}
                />
            </>
        )
    }

    // By Juliane Holzt on stack overflow
    json_deserialize_helper(key,value) {
        if ( typeof value === 'string' ) {
            var regexp;
            regexp = /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.exec(value);
            if ( regexp ) {
                return new Date(value);
            }
        }
        return value;
    }

    addTodo = todo => {
        const todoList = this.state.todoList.concat([todo]);
        this.setTodoList(todoList);
    }

    clearTodo = () => {
        const todolist = []
        this.setTodoList(todolist);
    }

    removeTodo = (index) => {
        const todolist = this.state.todoList
        const newTodoList = [
            ...todolist.splice(0, index),
            ...todolist.splice(index + 1)
        ]
        this.setTodoList(newTodoList);
    }

    setTodoList = (todolist) => {
        this.setState({ todoList: todolist });
        localStorage.setItem("todolist", JSON.stringify(todolist))
    }

}
