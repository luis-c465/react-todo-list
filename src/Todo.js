export default function Todo(props) {
    return (
        <div className="todo">
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
            <h3>{ props.dateAdded }</h3>
        </div>
    )
}
