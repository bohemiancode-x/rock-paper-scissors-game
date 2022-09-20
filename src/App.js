import { useState } from "react";

//components
import Gameface from "./components/Gameface";
import Rules from "./components/Rules";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App h-[100vh] bg-gradient-to-bl from-[#1f3756] to-[#141539] font-body">
      <Gameface toggleModal={toggleModal} />
      <Rules toggleModal={toggleModal} modal={modal} />
    </div>
  );
}

export default App;
