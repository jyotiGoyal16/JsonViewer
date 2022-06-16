import React, { useEffect, useState } from "react";
import { theme } from "../theme";

export default function IndentedChild(props) {
  const [color, setColor] = useState("");
  useEffect(() => {
    let typeOfProp = typeof props.value;
    switch (typeOfProp) {
      case "boolean":
        setColor(theme.boolean);
        break;
      case "string":
        setColor(theme.string);
        break;
      case "number":
        setColor(theme.number);
        break;
      default:
        setColor("");
        break;
    }
  }, []);
  console.log(typeof props.value);
  return (
    <span style={{ marginLeft: `${props.indent}rem` }}>
      <span style={{ color: props.keyColor }}>{props.keyValue}</span>
      <span> : </span>
      <span style={{ color: color }}>
        {typeof props.value === "string"
          ? `"${props.value}"`
          : props.value.toString()}
      </span>
    </span>
  );
}
