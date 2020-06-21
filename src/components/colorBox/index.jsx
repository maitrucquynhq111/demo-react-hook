import React, { useState } from "react";
import "./style.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR = ["deeppink", "green", "red", "yellow", "black", "blue"];
  let index = Math.trunc(Math.random() * COLOR.length);
  return COLOR[index];
}

function ColorBox(props) {
  const [color, setColor] = useState(() => {
    let color = localStorage.getItem("box_color");
    return color || "deeppink";
  });
  function handleClick() {
    let newColor = getRandomColor();
    localStorage.setItem("box_color", newColor);
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
