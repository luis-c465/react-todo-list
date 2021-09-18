import { useRef } from "react"

export default function MakeTodoForm(props) {
    const titleEl = useRef(null);
    const contentEl = useRef(null);
    const dateByEl = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        const todo = {
            title: titleEl.current.value,
            content: contentEl.current.value,
            dateBy: new Date(dateByEl.current.valueAsNumber),
            dateAdded: new Date(),
        };
        props.callback(todo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Todo title"
                ref={titleEl} />
            <textarea placeholder="Todo content"
                ref={contentEl} />
            <input type="date"
                ref={dateByEl} />
            <input type="submit" value="create" />
        </form>
    )
}
