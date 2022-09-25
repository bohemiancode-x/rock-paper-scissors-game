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
    <div className='flex justify-evenly md:w-[50%] m-auto text-white'>
       
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
                    <span className='h-32 w-32 md:h-40 md:w-40 rounded-full bg-darktext/25'></span> 
                </div>
            </>
        )}
        {!isPending && (
            <div className='grid grid-flow-row-dense grid-cols-2 gap-5 md:gap-12 md:flex items-center md:justify-center'>
                <div className='flex flex-col items-center gap-10'>
                    <h2 className='z-[1] tracking-widest'>YOU PICKED</h2>
                    <div className={`item ${pick} ${status}`}>
                            <img className='h-16 w-16' src={imgPick(pick)} alt={pick} />
                    </div>
                </div>
                
                    <div className='z-[1] flex flex-col items-center gap-4 my-auto col-span-2 mt-20'>
                        <h1 className='text-5xl md:text-3xl'>YOU {status.toUpperCase()}</h1>
                        <button onClick={() => playAgain()} className='button text-darktext hover:text-rock'>PLAY AGAIN</button>
                    </div>
                    
                    <div className='flex flex-col items-center gap-10'>
                        <h2 className='z-[1] tracking-widest'>THE HOUSE PICKED</h2>
                        <div className={`item ${comp} ${compStat} `}>
                            <img className='h-16 w-16' src={imgPick(comp)} alt={comp} />
                        </div>
                    </div>
                
            </div>
        )}

        
    </div>
  )
}
