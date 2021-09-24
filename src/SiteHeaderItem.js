import React from "react";

function SiteHeaderItem(props) {
    return (
        <li className="site-header-item">
            <button onClick={props.onClick}>
                {props.value}
            </button>
        </li>
    );
}

export default SiteHeaderItem;
