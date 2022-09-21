import logo from '../assets/images/logo.svg'

export default function Scoreboard({ score }) {
  return (
    <div className=' pt-10 md:pt-20'>
        <div className='flex border-4 border-white/20 p-3 rounded-xl justify-between w-[90%] md:w-[50%] m-auto'>
            <div className='flex items-center'>
                <img className='h-[75%] md:h-[100%]' src={logo} alt="logo" />
            </div>
            <div className='h-full bg-white flex flex-col items-center rounded-lg py-2 px-6 md:px-8'>
                <h3 className='text-scoretext'>SCORE</h3>
                <h1 className='text-darktext text-5xl font-bold md:text-6xl'>{score}</h1>
            </div>
        </div>
    </div>
  )
}
