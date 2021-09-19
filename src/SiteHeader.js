import SiteHeaderItem from "./SiteHeaderItem";
import "./SiteHeader.css";
import reactLogo from "./logo.svg"

export default function SiteHeader(props) {
    return (
        <header className="site-header">
            <div className="site-logo">
                <img
                    src={ reactLogo }
                    alt="React Logo"
                >
                </img>
                <a
                    href={ window.location.href }
                >
                    React Todo-list
                </a>
            </div>
            <ol className="SiteHeaderContainer">
                <SiteHeaderItem
                    value="Create new todo"
                    onClick={ () => props.addTodo() }
                    href=""
                />
                <SiteHeaderItem
                    value="Clear todo list"
                    onClick={() => props.clearTodo()}
                    href=""
                />
            </ol>
        </header>
    )
}
