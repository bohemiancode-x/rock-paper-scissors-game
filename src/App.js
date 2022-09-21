import { useState } from "react";

//components
import Gameface from "./components/Gameface";
import Scoreboard from "./components/Scoreboard";
import Rules from "./components/Rules";

function App() {
  const [modal, setModal] = useState(false);
  const [game, setGame] = useState(false)
  const [score, setScore] = useState(0)
 

  const toggleModal = () => {
    setModal(!modal)
  }
  

  return (
    <div className="App h-[100vh] bg-gradient-to-bl from-[#1f3756] to-[#141539] font-body">
      <Scoreboard score={score} />
      <Gameface toggleModal={toggleModal} game={game} />
      <Rules toggleModal={toggleModal} modal={modal} />
    </div>
  );
}

export default App;
