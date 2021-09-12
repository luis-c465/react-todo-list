import React from "react";

function SiteHeaderItem(props) {
    return (
        <li>
            <a href={ props.href } onClick={ props.onClick }>
                {props.value}
            </a>
        </li>
    );
}

export default SiteHeaderItem;
