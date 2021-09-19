import "./Todo.css";

export default function Todo(props) {
    return (
        <div className="todo">
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
            <h4>Date by: { props.dateBy }</h4>
            <h4>Date added: { props.dateAdded }</h4>

            <button onClick={props.remove}
                className="remove-button"
            >
                [X]
            </button>
        </div>
    )
}
