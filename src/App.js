import { useState } from "react";

//components
import Gameface from "./components/Gameface";
import Scoreboard from "./components/Scoreboard";
import Rules from "./components/Rules";

const options = [
  'paper',
  'scissors',
  'rock'
]

function App() {
  const [modal, setModal] = useState(false);
  const [game, setGame] = useState(false)
  const [score, setScore] = useState(0)
  const [pick, setPick] = useState('')
  const [comp, setComp] = useState('')
  const [status, setStatus] = useState('')
 
  const computerPick = () => {
    let pick =  options[Math.floor(Math.random() * options.length)];
    setComp(pick);
    return pick;
  } 

  const toggleModal = () => {
    setModal(!modal)
  }

  const playGame = (n) => {
    setPick(n);
    computerPick();
    setStatus('omo');
    setGame(true)

  }

  const playAgain = () => {
    setPick('');
    setComp('');
    setGame(false)
  }
  

  return (
    <div className="App h-[100vh] bg-gradient-to-bl from-[#1f3756] to-[#141539] font-body">
      <Scoreboard score={comp} />
      <Gameface
        toggleModal={toggleModal}
        game={game} 
        playGame={playGame} 
        playAgain={playAgain} 
        pick={pick}
        status={status} 
        comp={comp}
        />
      <Rules toggleModal={toggleModal} modal={modal} />
    </div>
  );
}

export default App;
