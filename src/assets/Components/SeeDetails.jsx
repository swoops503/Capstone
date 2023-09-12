import React from "react";

export function SeeDetails (props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
                <button className="close-button"></button>
            </div>
        </div>
    ) : "";
}