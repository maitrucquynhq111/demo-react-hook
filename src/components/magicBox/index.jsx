import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "./magicBox.scss";

function MagicBox(props) {
    const { color } = useMagicColor();
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
        >
        </div>
    );
}

export default MagicBox;
