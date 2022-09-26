import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'
import Scissors from '../assets/images/icon-scissors.svg'

export default function GameStart({ playGame }) {

  return (
    <div>
        <div className=' justify-center bg-triangle bg-no-repeat bg-center h-[40vh] mx-3'>
            <div className='place-items-center grid grid-flow-row-dense grid-cols-2 gap-10 z-20 md:w-[50%] lg:w-[30%] m-auto'>
                <div onClick={() => playGame('paper')} className=' item border-[#4865f4] cursor-pointer'>
                    <img className='h-14 w-14' src={Paper} alt="paper" />
                </div>
                <div onClick={() => playGame('scissors')} className='item border-[#ec9e0e] cursor-pointer'>
                    <img className='h-14 w-14' src={Scissors} alt="scissors" />
                </div>
                <div onClick={() => playGame('rock')} className='col-span-2 item mx-auto mt-8 md:mt-0 border-[#dc2e4e] cursor-pointer'>
                    <img className='h-14 w-14' src={Rock} alt="rock" />
                </div>  
            </div>
        </div>
    </div>
  )
}
