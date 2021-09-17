import React from "react"
import Modal from "./Modal";
import SiteHeader from './SiteHeader';
import TodoList from "./TodoList";
import './App.css';

class App extends React.Component{
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
                    <p>Modal content</p>
                </Modal>

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
        this.setState({
            showModal: true,
        });

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
