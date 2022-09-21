import Scissors from '../assets/images/icon-scissors.svg'
import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'

export default function GameOn() {
  return (
    <div className='flex justify-between w-[50%] m-auto text-white'>
        <div className='flex flex-col items-center gap-10'>
            <h2 className='tracking-widest'>YOU PICKED</h2>
            <div className='item border-[#ec9e0e] cursor-pointer'>
                    <img className='h-16 w-16' src={Scissors} alt="scissors" />
            </div>
        </div>

        <div className='flex flex-col items-center gap-4 my-auto'>
            <h1 className='text-3xl'>YOU LOSE</h1>
            <button className='bg-white text-darktext text-sm px-9 py-2 rounded-lg tracking-widest'>PLAY AGAIN</button>
        </div>
        
        <div className='flex flex-col items-center gap-10'>
            <h2 className='tracking-widest'>THE HOUSE PICKED</h2>
            <div className='item border-[#dc2e4e] cursor-pointer'>
                 <img className='h-16 w-16' src={Rock} alt="rock" />
            </div>
        </div>
    </div>
  )
}
