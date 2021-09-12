import SiteHeaderItem from "./SiteHeaderItem";

function SiteHeader() {
    return (
        <header>
            <div>
                <a
                    href={ window.location.href }
                >
                    React Todo-list
                </a>
            </div>
            <ol>
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
