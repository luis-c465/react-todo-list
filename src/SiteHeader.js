import SiteHeaderItem from "./SiteHeaderItem";
import "./SiteHeader.css";

function SiteHeader() {
    return (
        <header className="SiteHeader">
            <div>
                <a
                    href={ window.location.href }
                >
                    React Todo-list
                </a>
            </div>
            <ol className="SiteHeaderContainer">
                <SiteHeaderItem
                    value="Create new todo"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("amogus");
                    }}
                    href=""
                />
            </ol>
        </header>
    )
}

export default SiteHeader;
