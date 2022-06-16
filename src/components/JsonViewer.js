import React from "react";
import IndentedChild from "./IndentedChild";
import { theme } from "../theme";

export default function JsonViewer(props) {
  // let json = {
  //   a: 5,
  //   b: "test",
  //   c: {
  //     e: 3,
  //     f: false
  //   },
  //   d: {
  //     g: "ggg",
  //     h: {
  //       k: true
  //     }
  //   }
  // };

  let keyArr = Object.keys(props.data);
  return (
    <span className="json-view">
      <span>{"{"}</span>
      {keyArr.map((key) => (
        <div>
          {typeof props.data[key] !== "object" && (
            <IndentedChild
              key={key}
              keyColor={theme.keyColor}
              indent={props.indent}
              keyValue={key}
              value={props.data[key]}
            />
          )}
          {typeof props.data[key] === "object" && (
            <>
              <span
                style={{
                  marginLeft: `${props.indent}rem`,
                  color: theme.keyColor
                }}
              >
                {" "}
                {key} :{" "}
              </span>
              <JsonViewer data={props.data[key]} indent={props.indent + 1} />
            </>
          )}
        </div>
      ))}
      <span style={{ marginLeft: `${props.indent - 1}rem` }}>{"}"}</span>
    </span>
  );
}
