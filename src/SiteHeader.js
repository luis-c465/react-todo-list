import React from "react";
import SiteHeaderItem from "./SiteHeaderItem";
import "./SiteHeader.css";
import reactLogo from "./logo.svg"

class SiteHeader extends React.Component{
    render() {
        return (
            <header className="SiteHeader">
                <div>
                    <img
                        className="logo"
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
                        onClick={ () => this.props.addTodo() }
                        href=""
                    />
                </ol>
            </header>
        )
    }
}

export default SiteHeader;
