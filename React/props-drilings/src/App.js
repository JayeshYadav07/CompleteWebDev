import "./App.css";
import Heading from "./headingPart/Heading";
import Content from "./contentPart/Content";
function App() {
  let name = "jayesh";
  return (
    <>
      <Heading />
      <Content name={name} />
    </>
  );
}

export default App;
