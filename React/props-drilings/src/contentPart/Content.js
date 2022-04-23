import Cart from "./components/Cart";
import Subheader from "./components/Subheader";
import "./Content.css";
function Content({ name }) {
  let surname = "Yadav";
  return (
    <>
      <Subheader />
      <Cart name={name} surname={surname} />
    </>
  );
}

export default Content;
