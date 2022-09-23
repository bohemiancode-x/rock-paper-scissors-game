import scissors from '../assets/images/icon-scissors.svg'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'

export default function GameOn({ playAgain, pick, status, comp }) {
    const imgPick = (n) => {
        if(n === 'paper') {
            return paper
        }
        else if(n === 'scissors') {
            return scissors
        }
        else {
            return rock
        }
    }

  return (
    <div className='flex justify-between w-[50%] m-auto text-white'>
        <div className='flex flex-col items-center gap-10'>
            <h2 className='tracking-widest'>YOU PICKED</h2>
            <div className={`item border-${pick}` }>
                    <img className='h-16 w-16' src={imgPick(pick)} alt={pick} />
            </div>
        </div>

        <div className='flex flex-col items-center gap-4 my-auto'>
            <h1 className='text-3xl'>YOU {status.toUpperCase()}</h1>
            <button onClick={() => playAgain()} className='bg-white text-darktext text-sm px-9 py-2 rounded-lg tracking-widest'>PLAY AGAIN</button>
        </div>
        
        <div className='flex flex-col items-center gap-10'>
            <h2 className='tracking-widest'>THE HOUSE PICKED</h2>
            <div className={`item border-${comp} `}>
                 <img className='h-16 w-16' src={imgPick(comp)} alt={comp} />
            </div>
        </div>
    </div>
  )
}
