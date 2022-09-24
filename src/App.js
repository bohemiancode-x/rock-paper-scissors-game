import { useEffect, useState } from "react";

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
  const [compStat, setCompStat] = useState('')
  const [isPending, setIsPending] = useState(true)
 
  const computerPick = () => {
    let comppick =  options[Math.floor(Math.random() * options.length)];
    setComp(comppick);
    //return comppick;
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const pending = () => {
    setTimeout(() => {
      setIsPending(false)
    }, 1000)
  }

  const playGame = (n) => {
    setPick(n);
    computerPick();
    setGame(true);
    pending()
  }

  useEffect(() => {
    switch (true) {
      case pick === 'rock' && comp === 'scissors':
      case pick === 'scissors' && comp === 'paper':
      case  pick === 'paper' && comp === 'rock':
        setStatus('win');
        setCompStat('lose');
        !isPending && setScore(score + 1);
        break;
      case comp === 'rock' && pick === 'scissors':
      case comp === 'scissors' && pick === 'paper':
      case  comp === 'paper' && pick === 'rock':
        setStatus('lose');
        setCompStat('win');
        !isPending && setScore(score - 1);
        break;
      default:
        setStatus('draw');
        setCompStat('draw');
        setScore(score);
        break;
    }
  }, [pick, isPending])

 

  const playAgain = () => {
    setPick('');
    setComp('');
    setGame(false);
    setIsPending(true)
  }
  

  return (
    <div className="App h-[100vh] bg-gradient-to-bl from-[#1f3756] to-[#141539] font-body">
      <Scoreboard score={score} />
      <Gameface
        toggleModal={toggleModal}
        game={game} 
        playGame={playGame} 
        playAgain={playAgain} 
        pick={pick}
        status={status}
        compStat={compStat} 
        comp={comp}
        isPending={isPending}
        />
      <Rules toggleModal={toggleModal} modal={modal} />
    </div>
  );
}

export default App;
