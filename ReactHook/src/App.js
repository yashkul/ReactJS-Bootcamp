import "./styles.css";
import ResourceExample from "./ResourceExample";
import NameExample from "./NameExample";

export default function App() {
  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <ResourceExample />
      <h1>useRef Hook</h1>
      <NameExample />
    </div>
  );
}
