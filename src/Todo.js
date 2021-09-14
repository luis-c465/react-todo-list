import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <div className="todo">
                <h2>{ this.props.title }</h2>
                <p>{ this.props.content }</p>
                <h3>{ this.props.dateAdded }</h3>
            </div>
        )
    }
}

export default Todo;
