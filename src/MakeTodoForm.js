import { useRef } from "react"

export default function MakeTodoForm(props) {
    const titleEl = useRef(null);
    const contentEl = useRef(null);
    const dateByEl = useRef(null);

    return (
        <form onSubmit={handleSubmit}>
            <input autoFocus type="text"
                placeholder="Todo title"
                ref={titleEl} />
            <textarea placeholder="Todo content"
                ref={contentEl} />
            <input type="date" defaultValue={getDateInputToday()}
                ref={dateByEl} />
            <input type="submit" value="create" />
        </form>
    )

    function handleSubmit(e) {
        e.preventDefault();
        const todo = {
            title: titleEl.current.value,
            content: contentEl.current.value,
            dateBy: new Date(dateByEl.current.valueAsNumber),
            dateAdded: new Date(),
        };
        props.callback(todo);
    }

    function getDateInputToday() {
        return new Date().toISOString().substr(0, 10);
    }
}
