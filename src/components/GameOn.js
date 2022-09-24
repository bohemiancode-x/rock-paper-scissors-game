import scissors from '../assets/images/icon-scissors.svg'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'

export default function GameOn({ playAgain, pick, status, comp, compStat, isPending }) {
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
    <div className='flex justify-evenly w-[50%] m-auto text-white'>
       
        {isPending && (
            <>
                <div className='z-[1] flex flex-col items-center gap-10'>
                    <h2 className='tracking-widest'>YOU PICKED</h2>
                    <div className={`item ${pick}` }>
                            <img className='h-16 w-16' src={imgPick(pick)} alt={pick} />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <h2 className='tracking-widest'>THE HOUSE PICKED</h2>
                    <span className='h-40 w-40 rounded-full bg-darktext/25'></span> 
                </div>
            </>
        )}
        {!isPending && (
            <>
                <div className='z-[1] flex flex-col items-center gap-10'>
                    <h2 className='tracking-widest'>YOU PICKED</h2>
                    <div className={`z-0 item ${pick} ${status}`}>
                            <img className='h-16 w-16' src={imgPick(pick)} alt={pick} />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className='z-[1] flex flex-col items-center gap-4 my-auto'>
                        <h1 className='text-3xl'>YOU {status.toUpperCase()}</h1>
                        <button onClick={() => playAgain()} className='button text-darktext hover:text-rock'>PLAY AGAIN</button>
                    </div>
                    
                    <div className='flex flex-col items-center gap-10'>
                        <h2 className='z-[1] tracking-widest'>THE HOUSE PICKED</h2>
                        <div className={`item ${comp} ${compStat} z-0`}>
                            <img className='h-16 w-16' src={imgPick(comp)} alt={comp} />
                        </div>
                    </div>
                </div>
            </>
        )}

        
    </div>
  )
}
