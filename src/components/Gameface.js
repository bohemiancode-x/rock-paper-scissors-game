import GameOn from './GameOn'
import GameStart from './GameStart'


export default function Gameface({ toggleModal, game, playGame, playAgain, pick, status, comp, isPending, compStat }) {
   

  return (
    <div className='mt-16 md:mt-32'>
        {game ? <GameOn playAgain={playAgain} pick={pick} status={status} compStat={compStat} comp={comp} isPending={isPending} /> : <GameStart playGame={playGame} />}
        <div className='absolute bottom-1 right-[8rem] md:bottom-5 md:right-5'>
            <button onClick={toggleModal} className='text-white border-2 border-white/50 px-8 md:px-6 py-2 rounded-lg tracking-widest hover:scale-105'>RULES</button>
        </div>
    </div>
  )
}
