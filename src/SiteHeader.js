import React from "react";
import SiteHeaderItem from "./SiteHeaderItem";
import "./SiteHeader.css";

class SiteHeader extends React.Component{
    render() {
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
                        onClick={ () => this.props.addTodo() }
                        href=""
                    />
                </ol>
            </header>
        )
    }
}

export default SiteHeader;
