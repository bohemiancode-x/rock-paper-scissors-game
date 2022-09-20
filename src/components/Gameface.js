import logo from '../assets/images/logo.svg'
import Rock from '../assets/images/icon-rock.svg'
import Paper from '../assets/images/icon-paper.svg'
import Scissors from '../assets/images/icon-scissors.svg'



export default function Gameface({ toggleModal }) {
  return (
    <div className='text-white pt-10 md:pt-20'>
        <div className='flex border-4 border-white/20 p-3 rounded-xl justify-between w-[90%] md:w-[50%] m-auto'>
            <div className='flex items-center'>
                <img className='h-[75%] md:h-[100%]' src={logo} alt="logo" />
            </div>
            <div className='h-full bg-white flex flex-col items-center rounded-lg py-2 px-6 md:px-8'>
                <h3 className='text-scoretext'>SCORE</h3>
                <h1 className='text-darktext text-5xl font-bold md:text-6xl'>12</h1>
            </div>
        </div>

        <div className='z-10 flex justify-center border-2 border-white mt-32 bg-triangle bg-no-repeat bg-center h-[40vh] mx-3'>
            <div className='flex text-4xl relative z-20'>
                <div className='item relative top-5 right-32 border-[#ec9e0e]'>
                    <img className='h-14 w-14' src={Rock} alt="rock" />
                </div>
                <div className='item absolute top-5 left-32 border-[#4865f4]'>
                    <img className='h-14 w-14' src={Paper} alt="paper" />
                </div>
                <div className='item absolute -left-2 bottom-5 border-[#dc2e4e]'>
                 <img className='h-14 w-14' src={Scissors} alt="scissors" />
                </div>
                
                
            </div>
        </div>

        <div className='absolute bottom-8 right-[8rem] md:bottom-5 md:right-5'>
            <button onClick={toggleModal} className='border-2 border-white/50 px-8 md:px-6 py-2 rounded-lg tracking-widest hover:scale-105'>RULES</button>
        </div>
    </div>
  )
}
