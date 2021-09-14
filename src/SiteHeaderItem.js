import React from "react";

function SiteHeaderItem(props) {
    return (
        <li className="site-header-item">
            <a
                href={props.href}
                onClick={(e) => {
                    e.preventDefault();
                    props.onClick();
                }}
            >
                {props.value}
            </a>
        </li>
    );
}

export default SiteHeaderItem;
