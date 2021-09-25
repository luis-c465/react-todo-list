import React from "react"
import Modal from "./Modal";
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import MakeTodoForm from "./MakeTodoForm";
import './App.css';
import './ColorScheme.css';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        const todolistJSON = localStorage.getItem("todolist");
        this.state = {
            todoList: JSON.parse(todolistJSON, this.json_deserialize_helper) ?? [],
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
                    clearTodo={this.clearTodo}
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

    removeTodo = (dateAddedMS) => {
        const index = this.getTodoIndex(dateAddedMS);
        const newTodoList = this.removeElm(index, this.state.todoList);
        this.setTodoList(newTodoList);
    }

    setTodoList = (todolist) => {
        this.setState({ todoList: todolist });
        localStorage.setItem("todolist", JSON.stringify(todolist))
    }

    getTodoIndex = (dateAddedMS) => {
        return this.state.todoList.slice(0).findIndex(todo => {
            return +todo.dateAdded === dateAddedMS;
        })
    }

    removeElm(index, array) {
        return [
            ...array.slice(0, index),
            ...array.slice(index + 1),
        ]
    }

}
