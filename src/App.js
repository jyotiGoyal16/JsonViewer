import "./styles.css";
import JsonViewer from "./components/JsonViewer";

let json = {
  a: 5,
  b: "test",
  c: {
    e: 3,
    f: false
  },
  d: {
    g: "ggg",
    h: {
      k: true
    }
  }
};
export default function App() {
  return (
    <div className="App">
      <JsonViewer data={json} indent={1} />
    </div>
  );
}
